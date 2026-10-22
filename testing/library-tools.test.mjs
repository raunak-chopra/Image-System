// Isolated CLI regression checks; no fabricated rows enter the actual results table.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { root, read, parseCsv } from '../scripts/lib.mjs';

const sandboxBase = path.join(root, 'outputs/_tests');
fs.mkdirSync(sandboxBase, { recursive: true });
const fixture = fs.mkdtempSync(path.join(sandboxBase, 'library-cli-'));
assert.ok(path.resolve(fixture).startsWith(path.resolve(sandboxBase) + path.sep));
try {
  for (const dir of ['scripts', 'prompt-library', 'testing']) fs.mkdirSync(path.join(fixture, dir));
  for (const name of ['lib.mjs', 'record-test.mjs', 'find-prompts.mjs', 'refresh-sources.mjs'])
    fs.copyFileSync(path.join(root, 'scripts', name), path.join(fixture, 'scripts', name));
  const index = 'id,name,category,mode,model,compatibility,validation,tags,path,format,tested,source_url,license,attribution_required\n' +
    'fixture,Glass product,product photography,edit,fixture-model,unverified,adapted template,product glass,categories/example.md,,no,,original,no\n';
  const indexFile = path.join(fixture, 'prompt-library/index.csv');
  fs.writeFileSync(indexFile, index);
  const useCases = 'id,domain,use_case,route,template_ids,required_inputs,production_gate\n' +
    'uc-fixture,marketing,Glass product edit,image-template,fixture,product reference,QA gate\n';
  fs.writeFileSync(path.join(fixture, 'prompt-library/use-cases.csv'), useCases);
  const invoke = (script, args) => spawnSync(process.execPath, [path.join(fixture, 'scripts', script), ...args], { encoding: 'utf8' });
  const counts = ['fixture', '--model', 'fixture-model', '--runs', '1', '--passed', '1', '--a', '0', '--b', '0', '--c', '0', '--d', '0'];
  const resultFile = path.join(fixture, 'testing/results.csv');
  const badCounts = [...counts]; badCounts[badCounts.indexOf('--a') + 1] = '1';
  assert.equal(invoke('record-test.mjs', badCounts).status, 1);
  assert.equal(fs.existsSync(resultFile), false);
  const impossible = [...counts]; impossible[impossible.indexOf('--passed') + 1] = '2';
  assert.equal(invoke('record-test.mjs', impossible).status, 1);
  const negative = [...counts]; negative[negative.indexOf('--runs') + 1] = '-1';
  assert.equal(invoke('record-test.mjs', negative).status, 1);
  assert.equal(invoke('record-test.mjs', [...counts, '--file', 'missing.png']).status, 1);
  assert.equal(invoke('record-test.mjs', ['unknown', ...counts.slice(1)]).status, 1);
  const recorded = invoke('record-test.mjs', [...counts, '--notes', 'comma, quote " and\nnewline']);
  assert.equal(recorded.status, 0, recorded.stderr);
  assert.equal(read(indexFile), index, 'A passing row must not automatically promote the index.');
  const rows = parseCsv(read(resultFile));
  assert.equal(rows.length, 1);
  assert.equal(rows[0].notes, 'comma, quote " and\nnewline');
  assert.match(rows[0].date, /^\d{4}-\d{2}-\d{2}$/);
  const search = invoke('find-prompts.mjs', ['product', 'glass', '--mode', 'edit', '--limit', '1']);
  assert.equal(search.status, 0);
  assert.match(search.stdout, /fixture — Glass product/);
  assert.match(invoke('find-prompts.mjs', ['product', '--mode', 'generate']).stdout, /0 match/);
  assert.equal(invoke('find-prompts.mjs', ['--limit', '0']).status, 1);
  assert.equal(invoke('find-prompts.mjs', ['--unknown', 'yes']).status, 1);
  const refreshUrl = new URL(`file:///${path.join(fixture, 'scripts/refresh-sources.mjs').replaceAll('\\', '/')}`).href;
  const refresh = mock => spawnSync(process.execPath, ['--input-type=module', '-e',
    `globalThis.fetch = ${mock}; await import(${JSON.stringify(refreshUrl)});`], { encoding: 'utf8' });
  const failed = refresh('async () => ({ok:false,status:503})');
  assert.equal(failed.status, 1);
  assert.match(failed.stdout, /failed 6/);
  assert.doesNotMatch(failed.stdout, /No source changes since baseline/);
  const fresh = refresh('async () => ({ok:true,json:async () => ({pushed_at:"2026-10-01T00:00:00Z"})})');
  assert.equal(fresh.status, 0);
  assert.match(fresh.stdout, /no baseline 6/);
  assert.doesNotMatch(fresh.stdout, /No source changes since baseline/);
  console.log('PASS: invalid QA rejected, CSV recorded, promotion prevented, search filtered, refresh failures distinguished.');
} finally {
  // fixture was resolved and checked inside the intended test workspace above.
  fs.rmSync(fixture, { recursive: true, force: true });
}
