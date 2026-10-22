// Phase 5 monthly refresh: report whether the imported source repos changed since the last import.
// node scripts/refresh-sources.mjs [--save]   (--save records today's state as the new baseline)
import fs from 'node:fs';
import path from 'node:path';
import { root, read, exists } from './lib.mjs';

const statePath = path.join(root, 'prompt-library/sources/refresh-state.json');
const repos = {
  'SRC-29': 'devanshug2307/Awesome-AI-Image-Prompts',
  'SRC-14': 'VigoZhao/AI-Visual-Prompt-Cookbook',
  'SRC-26': 'tiktomato/awesome-nano-banana-prompts',
  'SRC-21': 'EvoLinkAI/awesome-gpt-image-2-API-and-Prompts',
  'SRC-22a': 'YouMind-OpenLab/awesome-nano-banana-pro-prompts',
  'SRC-22b': 'YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill',
};
const state = exists(statePath) ? JSON.parse(read(statePath)) : {};
const next = {};
let changed = 0;
let failed = 0, baselines = 0;
for (const [id, repo] of Object.entries(repos)) {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`, { headers: { 'User-Agent': 'image-studio-refresh' }, signal: AbortSignal.timeout(10000) });
    if (!res.ok) { failed++; console.log(`${id} ${repo}: HTTP ${res.status} (not checked)`); continue; }
    const j = await res.json();
    next[id] = { repo, pushed_at: j.pushed_at, checked: new Date().toISOString().slice(0, 10) };
    const old = state[id]?.pushed_at;
    if (!old) baselines++;
    const flag = !old ? 'no baseline' : j.pushed_at > old ? 'CHANGED' : 'unchanged';
    if (flag === 'CHANGED') changed++;
    console.log(`${id} ${repo}: last push ${j.pushed_at} (${flag})`);
  } catch (e) { failed++; console.log(`${id} ${repo}: ${e.message} (not checked)`); }
}
console.log(`\nChecked ${Object.keys(next).length}/${Object.keys(repos).length}; changed ${changed}; no baseline ${baselines}; failed ${failed}.`);
if (changed) console.log('Review changed sources and reconcile source-register, research-review and deduplication-ledger.');
else if (!failed && !baselines) console.log('No source changes since baseline.');
else console.log('Incomplete comparison; unavailable sources and missing baselines are not unchanged sources.');
if (process.argv.includes('--save')) { fs.writeFileSync(statePath, JSON.stringify({ ...state, ...next }, null, 2) + '\n'); console.log('baseline saved.'); }
if (failed) process.exitCode = 1;
