// Render/check the canonical use-case map. Read-only unless --write is explicit.
import fs from 'node:fs';
import path from 'node:path';
import { root, read, parseCsv } from './lib.mjs';

if (process.argv.slice(2).some(a => !['--write', '--check'].includes(a)) || (process.argv.includes('--write') && process.argv.includes('--check'))) {
  console.error('Usage: node scripts/summarize-coverage.mjs [--write | --check]'); process.exit(1);
}
const library = path.join(root, 'prompt-library');
const jobs = parseCsv(read(path.join(library, 'use-cases.csv')));
const entries = parseCsv(read(path.join(library, 'index.csv')));
const byId = new Map(entries.map(e => [e.id, e]));
const groups = [['branding', 'Branding'], ['marketing', 'Marketing and commerce'], ['app', 'App development visuals'], ['social', 'Social media']];
const imported = entries.filter(e => e.path.startsWith('imported/')).length;
const tested = entries.filter(e => e.tested === 'yes').length;
const count = (xs, key, value) => xs.filter(x => x[key] === value).length;
const clean = s => s.replaceAll('|', '\\|').replaceAll('\n', ' ');
const rows = [
  '# Coverage guide: branding, marketing, apps and social', '',
  'Generated from [use-cases.csv](use-cases.csv) and [index.csv](index.csv). Refresh with `node scripts/summarize-coverage.mjs --write`. The baseline column records the state immediately before the broad 2026-10-21 rescan; it is a scope judgment, not a measured quality score.', '',
  `The catalog has **${entries.length} entries**: ${entries.length - imported} curated/general entries and ${imported} imported source examples. There are ${tested} entries with recorded tested status; test evidence remains specific to those runs. Newly authored entries require their own scoped verification. Preparation entries return briefs/prompts, not images. An entry can serve several jobs, while several examples can serve one job; neither count is a use-case count.`, '',
  `This map defines **${jobs.length} jobs**. ${jobs.filter(j => ['image', 'hybrid'].includes(j.route)).length} have image or hybrid template routes; ${jobs.filter(j => ['native', 'strategy'].includes(j.route)).length} explicitly route to native tools or strategy. These are routing decisions, not claims that every job has been generated, production-qualified or fully implemented.`, '',
  '| Area | Jobs | Previously missing | Previously partial | Native/strategy handoffs |',
  '|---|---:|---:|---:|---:|',
  ...groups.map(([id, name]) => { const xs = jobs.filter(j => j.domain === id); return `| ${name} | ${xs.length} | ${count(xs, 'baseline', 'missing')} | ${count(xs, 'baseline', 'partial')} | ${xs.filter(j => ['native', 'strategy'].includes(j.route)).length} |`; }), '',
  '## How to use', '',
  'Find the actual job below, then run `node scripts/find-prompts.mjs --use-case app-store-screenshots`. To browse an area use `--domain branding`, `--domain marketing`, `--domain app` or `--domain social`. Keyword searches also match job names. Every job records required inputs and a production gate in the CSV; exact-job search prints both.', '',
  '`image` means artwork or a visual planning reference. `hybrid` requires native layout/compositing or implementation alongside image work. `native` routes directly to code/design/video tools. `strategy` routes to the Brand Manager or supplied approved planning work. P0 is launch/core work, P1 is an extension, P2 is optional; actual project scope overrides these defaults.', '',
  '## Production boundaries', '',
  '- Actual app screenshots come from the app; components, interactions, accurate charts, accessibility and builds are implemented/tested in native tools.',
  '- Final marks, exact fonts, packaging artwork, live CTAs, legal text, barcodes/QR codes and print specifications use approved sources and native production tools.',
  '- Generated concepts and source previews do not establish performance, repeatability or compatibility. Compare actual outputs against locks and delivery requirements before approval.',
  '- Current app/marketplace/platform requirements and brief-specific dimensions must be checked for the destination. No universal app screenshot size or safe zone is inferred.', '',
  '## Remaining limitations', '',
  'The rescan closes catalog-routing gaps with authored briefs; it does not close image-test coverage. Prioritize representative tests for logo preservation, label seams, app screenshot compositing, alpha layers, theme pairs, crop safety, and narrow banner readability. Brand strategy, working app code, publishing, animation/audio, and supplier production approval remain outside a raster-prompt library. Add another use case whenever a real job is missing rather than claiming this checklist is exhaustive.', '',
  'Source review and deduplication decisions: [coverage rescan](sources/coverage-rescan-2026-10-21.md), [source register](sources/source-register.md), [deduplication ledger](sources/deduplication-ledger.md).', ''
];
for (const [id, name] of groups) {
  rows.push(`## ${name}`, '', '| Job | Priority | Baseline | Route | Template / handoff | Production gate |', '|---|---|---|---|---|---|');
  for (const j of jobs.filter(x => x.domain === id)) {
    const links = j.template_ids.split('|').filter(Boolean).map(t => {
      const e = byId.get(t); if (!e) throw new Error(`Unknown template ${t}`);
      return `[${t}](${e.path})`;
    }).join(', ') || (j.route === 'strategy' ? 'Approved strategy workflow' : 'Native production tools');
    rows.push(`| ${clean(j.use_case)} | ${j.priority} | ${j.baseline} | ${j.route} | ${links} | ${clean(j.production_gate)} |`);
  }
  rows.push('');
}
const out = rows.join('\n') + '\n';
if (process.argv.includes('--check')) {
  const current = read(path.join(library, 'COVERAGE.md')).replaceAll('\r\n', '\n');
  if (current !== out) { console.error('Coverage guide is stale; run with --write.'); process.exit(1); }
  console.log(`PASS: coverage guide matches ${jobs.length} jobs and ${entries.length} indexed entries.`);
} else if (process.argv.includes('--write')) {
  fs.writeFileSync(path.join(library, 'COVERAGE.md'), out);
  console.log(`Wrote coverage guide: ${entries.length} entries; ${jobs.length} audited jobs.`);
} else console.log(out);
