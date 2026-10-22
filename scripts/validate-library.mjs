// Read-only validation of the prompt library, routing, sources and local links.
import fs from 'node:fs';
import path from 'node:path';
import { root, read, exists, parseCsv, walk } from './lib.mjs';

const library = path.join(root, 'prompt-library');
const errors = [];
const warnings = [];
const err = (m) => errors.push(m);
const warn = (m) => warnings.push(m);
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const requiredPaths = [
  'README.md', 'AGENTS.md', 'CLAUDE.md', 'GEMINI.md', 'creative-rules.md',
  'workflows/creative-image-workflow.md',
  'prompt-library/README.md', 'prompt-library/SCHEMA.md', 'prompt-library/index.csv',
  'prompt-library/sources/source-register.md', 'prompt-library/sources/research-review.md',
  'prompt-library/sources/deduplication-ledger.md',
  'prompt-library/nano-banana-2/README.md', 'prompt-library/nano-banana-2/PROMPTS.md',
  'skills/creative-prompt-library/SKILL.md', 'PLAN.md',
  'formats/README.md', 'formats/amazon.md', 'formats/meta.md', 'formats/google.md', 'formats/organic-social.md',
  'core/qa-checklist.md', 'core/model-router.md', 'post/specs.json',
  'design-language/layout-recipes.md', 'design-language/type-color-rules.md', 'swipe-file/README.md', 'swipe-file/index.csv', 'testing/RUNBOOK.md', 'testing/briefs.md', 'testing/results.csv',
  '.claude/skills/creative-prompt-library/SKILL.md', '.codex/skills/creative-prompt-library/SKILL.md',
  'memory/SCHEMA.md', 'memory/learned-preferences.md',
];
for (const r of requiredPaths) if (!exists(path.join(root, r))) err(`Missing required file: ${r}`);

const rows = parseCsv(read(path.join(library, 'index.csv')));
const coveragePath = path.join(library, 'use-cases.csv');
const coverage = exists(coveragePath) ? parseCsv(read(coveragePath)) : [];
if (!coverage.length) err('Missing or empty use-cases.csv.');
const coverageIds = new Set();
const indexedIds = new Set(rows.map(r => r.id));
for (const u of coverage) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(u.id)) err(`Invalid use-case id: ${u.id}`);
  if (coverageIds.has(u.id)) err(`Duplicate use-case id: ${u.id}`);
  coverageIds.add(u.id);
  if (!['branding', 'marketing', 'app', 'social'].includes(u.domain)) err(`Unknown use-case domain: ${u.id}`);
  if (!['P0', 'P1', 'P2'].includes(u.priority)) err(`Unknown use-case priority: ${u.id}`);
  if (!['covered', 'partial', 'missing', 'external'].includes(u.baseline)) err(`Unknown baseline state: ${u.id}`);
  if (!['image', 'hybrid', 'native', 'strategy'].includes(u.route)) err(`Unknown use-case route: ${u.id}`);
  for (const field of ['use_case', 'required_inputs', 'production_gate']) if (!u[field]?.trim()) err(`Use case ${u.id} missing ${field}`);
  const targets = u.template_ids.split('|').filter(Boolean);
  if (['image', 'hybrid'].includes(u.route) && !targets.length) err(`Visual use case ${u.id} has no template`);
  if (['native', 'strategy'].includes(u.route) && targets.length) err(`Non-raster use case ${u.id} has a misleading image-template route`);
  for (const id of targets) if (!indexedIds.has(id)) err(`Use case ${u.id} references unknown template: ${id}`);
}
const seen = new Set();
const cols = ['format', 'tested', 'source_url', 'license', 'attribution_required'];
if (rows.length) for (const c of cols) if (!(c in rows[0])) err(`index.csv missing column: ${c}`);
const specs = JSON.parse(read(path.join(root, 'post/specs.json')));
for (const r of rows) { if (seen.has(r.id)) err(`Duplicate index id: ${r.id}`); seen.add(r.id); }

const requiredFields = [
  '**Purpose:**', '**Category:**', '**Tags:**', '**Mode:**', '**Model/tool:**',
  '**Compatibility:**', '**Validation:**', '**Required inputs:**', '**Reference assets:**',
  '**Sources:**', '**Reuse:**', '### Prompt', '### Variations and adaptation',
  '### Constraints and common failures', '### Quality checks',
];

for (const row of rows) {
  for (const f of (row.format || '').split(/[ ,]+/).filter(Boolean)) if (!(f in specs)) err(`Entry ${row.id} uses unknown format id: ${f}`);
  if (!['yes', 'no'].includes(row.tested)) err(`Entry ${row.id} tested must be yes|no`);
  if (row.validation === 'actually tested' && row.tested !== 'yes') err(`Entry ${row.id} validation/tested mismatch`);
  const [file] = row.path.split('#');
  const target = path.join(library, file);
  if (!exists(target)) { err(`Index target missing for ${row.id}: ${row.path}`); continue; }
  const text = read(target);
  const heading = new RegExp('^## ' + esc(row.id) + ' — ', 'm');
  const hm = heading.exec(text);
  if (!hm) { err(`Heading missing for index id ${row.id} in ${file}`); continue; }
  const start = hm.index;
  const next = text.indexOf('\n## ', start + 4);
  const entry = next < 0 ? text.slice(start) : text.slice(start, next);
  for (const f of requiredFields) if (!entry.includes(f)) err(`Entry ${row.id} missing field: ${f}`);
  if (row.tested === 'yes' || row.validation === 'actually tested') {
    for (const field of ['Test date', 'Exact model/provider ID', 'Mode and settings', 'Reference disclosure',
      'Exact filled prompt', 'Runs', 'Observed result', 'Observed limitations', 'Artifacts', 'Reviewer']) {
      if (!entry.includes(`**${field}:**`)) err(`Tested entry ${row.id} missing evidence field: ${field}`);
    }
    if (!entry.includes('### Test evidence')) err(`Tested entry ${row.id} missing Test evidence block`);
  }
  if (/\{[a-z][^}]*\}/.test(entry)) warn(`Entry ${row.id} may contain a non-UPPER_SNAKE_CASE placeholder`);
  if (!/SRC-\d{2}/.test(entry)) err(`Entry ${row.id} has no source ID`);
  const reuse = (/^- \*\*Reuse:\*\* (.+)$/m.exec(entry) || [])[1] || '';
  if (!/SRC-\d{2}/.test(reuse)) err(`Entry ${row.id} reuse statement is not source-specific`);
  if (/Observe (linked|per-source)/.test(reuse)) err(`Entry ${row.id} retains a generic reuse statement`);
}

const srcText = read(path.join(library, 'sources/source-register.md'));
const sourceIds = new Set(srcText.match(/SRC-\d{2}/g) || []);
const expected = [...sourceIds];
for (const id of expected) if (!sourceIds.has(id)) err(`Source register coverage gap: ${id}`);
const research = read(path.join(library, 'sources/research-review.md'));
const dedup = read(path.join(library, 'sources/deduplication-ledger.md'));
for (const id of expected) {
  if (!new RegExp('^## ' + esc(id) + '\\b', 'm').test(research) && !['SRC-19', 'SRC-20'].includes(id)) err(`Research review section missing: ${id}`);
}
const mdIn = (d) => fs.readdirSync(path.join(library, d)).filter((f) => f.endsWith('.md')).map((f) => path.join(library, d, f));
const entryFiles = [...mdIn('categories'), ...mdIn('imported'), path.join(library, 'nano-banana-2/PROMPTS.md')];
const used = new Set(entryFiles.flatMap((f) => read(f).match(/SRC-\d{2}/g) || []));
for (const id of used) if (!sourceIds.has(id)) err(`Unregistered source id used: ${id}`);
for (const id of expected) if (!used.has(id) && !dedup.includes(id)) err(`Source has neither a template citation nor a dedup/exclusion decision: ${id}`);

// Local markdown links (skip outputs/ working files and caches).
const skip = (full, e) => e.isDirectory() && ['.git', 'node_modules', '.research-cache', 'outputs'].includes(e.name);
const mdFiles = walk(root, (f) => f.endsWith('.md'), skip);
for (const file of mdFiles) {
  const content = read(file);
  for (const m of content.matchAll(/\[[^\]]+\]\((?!https?:\/\/|#|mailto:)([^)]+)\)/g)) {
    const link = m[1].split('#')[0].trim();
    if (!link) continue;
    if (!exists(path.resolve(path.dirname(file), decodeURI(link)))) err(`Broken local link in ${path.relative(root, file)}: ${link}`);
  }
}

const recipes = read(path.join(root, 'design-language/layout-recipes.md'));
const known = new Set(rows.map((r) => r.id));
for (const m of recipes.matchAll(/`([a-z0-9]+(?:-[a-z0-9]+)+)`/g)) {
  const id = m[1];
  if (!known.has(id) && !id.startsWith('post/') && !(id in specs)) err(`layout-recipes.md references unknown template id: ${id}`);
}
const swipe = parseCsv(read(path.join(root, 'swipe-file/index.csv')));
for (const r of swipe) if (!exists(path.join(root, 'swipe-file/breakdowns', r.slug + '.md'))) err(`swipe-file breakdown missing for ${r.slug}`);
const agents = read(path.join(root, 'AGENTS.md'));
const workflow = read(path.join(root, 'workflows/creative-image-workflow.md'));
if (!/nano-banana-2\/README\.md/.test(agents)) err('AGENTS.md does not route to Nano Banana 2.');
if (!/skills\/creative-prompt-library\/SKILL\.md/.test(agents)) err('AGENTS.md does not route through the creative skill.');
if (!/index\.csv/.test(workflow)) err('Creative workflow does not route to the search index.');
if (!/validate-library\.mjs/.test(workflow)) err('Creative workflow does not include reconciliation validation.');
if (!/memory\/learned-preferences\.md/.test(agents)) err('AGENTS.md does not route through the 2nd memory loop.');
if (!/sync-memory\.mjs/.test(workflow)) err('Creative workflow does not include memory synchronization.');
for (const f of ['CLAUDE.md', 'GEMINI.md']) {
  if (exists(path.join(root, f)) && !/AGENTS\.md/.test(read(path.join(root, f)))) err(`${f} must point to AGENTS.md.`);
}

console.log('Creative prompt library validation');
console.log(`Entries: ${rows.length}`);
console.log(`Markdown files checked: ${mdFiles.length}`);
console.log(`Registered sources: ${sourceIds.size}`);
console.log(`Audited use cases: ${coverage.length} (routing availability, not image-test coverage)`);
for (const w of warnings) console.warn(`WARNING: ${w}`);
if (errors.length) { for (const e of errors) console.error(`ERROR: ${e}`); process.exit(1); }
console.log('PASS: structure, index targets, entry schema, source research/dedup coverage, per-entry reuse licensing, local links, skills, and workflow routing are consistent.');
