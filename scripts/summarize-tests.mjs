// Win-rate summary from testing/results.csv: by model and by template category.
import path from 'node:path';
import { root, read, exists, parseCsv } from './lib.mjs';

const rp = path.join(root, 'testing/results.csv');
if (!exists(rp)) { console.log('no results yet (testing/results.csv missing).'); process.exit(0); }
const results = parseCsv(read(rp));
const cat = Object.fromEntries(parseCsv(read(path.join(root, 'prompt-library/index.csv'))).map((r) => [r.id, r.category]));
const agg = (keyFn) => {
  const m = {};
  for (const r of results) {
    const k = keyFn(r);
    m[k] ??= { runs: 0, passed: 0 };
    m[k].runs += Number(r.runs);
    m[k].passed += Number(r.passed);
  }
  return m;
};
const show = (title, m) => {
  console.log(`\n${title}`);
  for (const [k, v] of Object.entries(m).sort()) console.log(`  ${k.padEnd(44)} ${v.passed}/${v.runs}  (${v.runs ? Math.round((v.passed / v.runs) * 100) : 0}%)`);
};
show('By model', agg((r) => r.model));
show('By category', agg((r) => cat[r.template_id] || 'unknown'));
show('By model x category', agg((r) => `${r.model} | ${cat[r.template_id] || 'unknown'}`));
