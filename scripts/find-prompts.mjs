// Read-only discovery by keywords, domain or an audited production use case.
import path from 'node:path';
import { root, read, parseCsv } from './lib.mjs';

const args = process.argv.slice(2), terms = [], filters = {};
const allowed = new Set(['mode', 'model', 'format', 'tested', 'limit', 'domain', 'use-case']);
for (let i = 0; i < args.length; i++) {
  if (args[i].startsWith('--')) {
    const key = args[i].slice(2);
    if (!allowed.has(key) || !args[i + 1] || args[i + 1].startsWith('--')) {
      console.error(`Unknown option or missing value: ${args[i]}`); process.exit(1);
    }
    filters[key] = args[++i];
  } else terms.push(args[i].toLowerCase());
}
const limit = Number(filters.limit ?? 5);
if (!Number.isInteger(limit) || limit < 1 || limit > 50 ||
    (filters.tested && !['yes', 'no'].includes(filters.tested)) ||
    (filters.mode && !['generate', 'edit'].includes(filters.mode))) {
  console.error('Use --limit 1..50, --tested yes|no, --mode generate|edit.'); process.exit(1);
}
const rows = parseCsv(read(path.join(root, 'prompt-library/index.csv')));
const useCases = parseCsv(read(path.join(root, 'prompt-library/use-cases.csv')));
if (filters.domain && !['branding', 'marketing', 'app', 'social'].includes(filters.domain)) {
  console.error('Use --domain branding|marketing|app|social.'); process.exit(1);
}
const selectedCase = filters['use-case'] && useCases.find(u => u.id === filters['use-case']);
if (filters['use-case'] && !selectedCase) {
  console.error(`Unknown use case: ${filters['use-case']}. See prompt-library/use-cases.csv.`); process.exit(1);
}
if (selectedCase && filters.domain && selectedCase.domain !== filters.domain) {
  console.error('The selected use case does not belong to the requested domain.'); process.exit(1);
}
const scope = useCases.filter(u => (!filters.domain || u.domain === filters.domain) && (!selectedCase || u.id === selectedCase.id));
if (selectedCase) {
  console.log(`${selectedCase.id} — ${selectedCase.use_case}`);
  console.log(`Route: ${selectedCase.route} | Inputs: ${selectedCase.required_inputs}`);
  console.log(`Production gate: ${selectedCase.production_gate}`);
  if (!selectedCase.template_ids) {
    console.log('This job requires the stated strategy/native workflow; no raster prompt is offered.'); process.exit(0);
  }
}
const scopeIds = new Set(scope.flatMap(u => u.template_ids.split('|').filter(Boolean)));
const scoped = !!filters.domain || !!selectedCase;
const hits = rows.filter(r => (!scoped || scopeIds.has(r.id)) && Object.entries(filters).every(([k, v]) => ['limit', 'domain', 'use-case'].includes(k) ||
  (k === 'format' ? r.format.split(/[ ,]+/).includes(v) :
   k === 'tested' ? r.tested === v : r[k].toLowerCase().includes(v.toLowerCase()))))
  .map(r => {
    const aliases = scope.filter(u => u.template_ids.split('|').includes(r.id)).map(u => `${u.id} ${u.use_case}`).join(' ');
    const fields = [[r.id, 5], [r.name, 4], [r.tags, 3], [r.category, 2], [r.model, 1], [aliases, 2]];
    const scores = terms.map(t => fields.reduce((s, [v, w]) => s + (v.toLowerCase().includes(t) ? w : 0), 0));
    return { r, score: scores.reduce((a, b) => a + b, 0), matches: scores.every(s => s > 0) };
  }).filter(h => h.matches)
  .sort((a, b) => b.score - a.score ||
    Number(b.r.tested === 'yes') - Number(a.r.tested === 'yes') ||
    Number(a.r.path.startsWith('imported/')) - Number(b.r.path.startsWith('imported/')) ||
    a.r.id.localeCompare(b.r.id));
console.log(`${hits.length} match(es); keyword relevance, then recorded test status, then curated entries.`);
for (const { r, score } of hits.slice(0, limit)) {
  console.log(`\n${r.id} — ${r.name} (score ${score})`);
  console.log(`  ${r.mode} | ${r.model} | compatibility=${r.compatibility} | tested=${r.tested} | ${r.validation}`);
  console.log(`  prompt-library/${r.path}`);
  if (r.source_url) console.log(`  source: ${r.source_url}`);
}
if (!hits.length) console.log('Broaden keywords or remove a filter; generic model entries may still be applicable.');
