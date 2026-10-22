// Record QA counts without automatically promoting library evidence.
// --d counts final-export failures; --file identifies the scored export.
// Raw-size mismatches/export operations belong in notes and the run manifest.
import fs from 'node:fs';
import path from 'node:path';
import { root, read, exists, parseCsv } from './lib.mjs';
const args = process.argv.slice(2), id = args[0], opt = {};
const need = ['model', 'runs', 'passed', 'a', 'b', 'c', 'd'];
const allowed = new Set([...need, 'notes', 'file']);
const fail = message => { console.error(message); process.exit(1); };
if (!id || args.length % 2 !== 1) fail('usage: node scripts/record-test.mjs ID --model M --runs N --passed N --a N --b N --c N --d N [--notes T] [--file P]');
for (let i = 1; i < args.length; i += 2) {
  const key = args[i].slice(2);
  if (!args[i].startsWith('--') || !allowed.has(key) || key in opt) fail(`Unknown or repeated option: ${args[i]}`);
  opt[key] = args[i + 1];
}
if (need.some(k => opt[k] === undefined)) fail('Missing required model or QA counts.');
for (const key of need.filter(k => k !== 'model')) {
  if (!/^\d+$/.test(opt[key]) || !Number.isSafeInteger(Number(opt[key]))) fail(`${key} must be a non-negative integer.`);
}
if (Number(opt.runs) < 1 || Number(opt.passed) > Number(opt.runs) || !opt.model.trim()) fail('runs must be positive, passed <= runs, and model must be non-empty.');
if (Number(opt.passed) === Number(opt.runs) && ['a', 'b', 'c', 'd'].some(k => Number(opt[k]) > 0)) fail('All runs cannot pass when any QA failure is recorded.');
if (opt.file && !exists(path.resolve(root, opt.file))) fail(`Output file does not exist: ${opt.file}`);
const rows = parseCsv(read(path.join(root, 'prompt-library/index.csv')));
const row = rows.find(r => r.id === id);
if (!row) fail(`unknown template id: ${id}`);
const q = s => `"${String(s ?? '').replace(/"/g, '""')}"`;
const resultsPath = path.join(root, 'testing/results.csv');
if (!exists(resultsPath)) fs.writeFileSync(resultsPath, 'date,template_id,model,runs,passed,a_truth_fails,b_integrity_fails,c_layout_fails,d_delivery_fails,notes,file\n');
const date = new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' });
fs.appendFileSync(resultsPath, [date, id, q(opt.model), opt.runs, opt.passed, opt.a, opt.b, opt.c, opt.d, q(opt.notes), q(opt.file)].join(',') + '\n');
console.log(`Recorded; ${id} stays tested=${row.tested}. Review the complete SCHEMA.md evidence record before promotion.`);
