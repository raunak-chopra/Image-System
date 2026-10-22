// Validates memory/feedback-ledger.jsonl and checks metrics in memory/learned-preferences.md.
import path from 'node:path';
import { root, read, exists } from './lib.mjs';

const memoryDir = path.join(root, 'memory');
const ledgerPath = path.join(memoryDir, 'feedback-ledger.jsonl');
const prefsPath = path.join(memoryDir, 'learned-preferences.md');
const schemaPath = path.join(memoryDir, 'SCHEMA.md');
const required = ['event_id', 'timestamp', 'asset_name', 'template_id', 'sentiment', 'positive_signals', 'negative_signals', 'actionable_learnings'];
const sentiments = ['liked', 'disliked', 'mixed_or_revised'];

console.log('Syncing and validating 2nd Memory Loop...');
for (const [p, label] of [[ledgerPath, 'feedback ledger'], [prefsPath, 'learned preferences guide'], [schemaPath, 'memory schema']]) {
  if (!exists(p)) { console.error(`Missing ${label}: ${p}`); process.exit(1); }
}

const records = [];
read(ledgerPath).split(/\r?\n/).forEach((line, i) => {
  const t = line.trim();
  if (!t) return;
  let rec;
  try { rec = JSON.parse(t); } catch (e) { console.error(`Invalid JSON on line ${i + 1}: ${e.message}`); process.exit(1); }
  for (const f of required) if (!(f in rec)) { console.error(`Record on line ${i + 1} is missing required field '${f}'`); process.exit(1); }
  if (!sentiments.includes(rec.sentiment)) { console.error(`Record on line ${i + 1} has invalid sentiment '${rec.sentiment}'`); process.exit(1); }
  records.push(rec);
});

const count = (s) => records.filter((r) => r.sentiment === s).length;
const total = records.length;
const rate = total ? Math.round((count('liked') / total) * 1000) / 10 : 0;
console.log('Memory Ledger Validation: PASS');
console.log(`Total Records: ${total} | Liked: ${count('liked')} | Disliked: ${count('disliked')} | Mixed: ${count('mixed_or_revised')} | Approval Rate: ${rate}%`);

const m = read(prefsPath).match(/\*\*Total Recorded Generations\*\*\s*\|\s*(\d+)/);
if (m && Number(m[1]) !== total) console.warn(`WARNING: learned-preferences.md records total (${m[1]}) differs from ledger (${total}). Update the table.`);
console.log('2nd Memory Loop is synchronized and healthy.');

// Catalog feedback is not a generated-image approval event and never changes the totals above.
const libraryFeedbackPath = path.join(memoryDir, 'library-feedback.jsonl');
if (exists(libraryFeedbackPath)) {
  const ids = new Set();
  const entries = read(libraryFeedbackPath).split(/\r?\n/).filter(l => l.trim());
  for (const [i, line] of entries.entries()) {
    let record;
    try { record = JSON.parse(line); } catch { console.error(`Invalid library feedback JSON on line ${i + 1}`); process.exit(1); }
    const required = ['event_id', 'date', 'scope', 'sentiment', 'user_feedback_verbatim', 'actionable_learnings', 'result'];
    if (required.some(k => !(k in record)) || record.scope !== 'library_maintenance' ||
        !sentiments.includes(record.sentiment) || !/^\d{4}-\d{2}-\d{2}$/.test(record.date) ||
        !Array.isArray(record.actionable_learnings) || !record.actionable_learnings.length ||
        !record.event_id || !record.user_feedback_verbatim || ids.has(record.event_id) ||
        !exists(path.join(root, record.result))) {
      console.error(`Invalid or duplicate library feedback record on line ${i + 1}`); process.exit(1);
    }
    ids.add(record.event_id);
  }
  console.log(`Library maintenance feedback: PASS (${entries.length} record(s), excluded from generation metrics).`);
}
