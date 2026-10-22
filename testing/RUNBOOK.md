# Phase 4 runbook: internal template testing

Goal: turn `source example` / `adapted template` into dated test evidence, fill [core/model-router.md](../core/model-router.md) from real results, and set `tested` in [prompt-library/index.csv](../prompt-library/index.csv).

## Procedure (per brief in [briefs.md](briefs.md))
1. Fill the template with the brief's inputs (brand kit, supplied refs, exact copy). Save the filled prompt.
2. Run it on each listed model with the same prompt and references: GPT-Image-2, Nano Banana 2, Nano Banana Pro. 1 run each first; 3 runs only for finalists.
3. Save outputs to `outputs/_tests/<template-id>/<YYYY-MM-DD>/<model>-<n>.png` and note the returned resolution and ratio.
4. Retain the raw file and export to the delivery target: `python post/resize.py <raw-file> <format-id> --out <delivery-folder>`, then run `python post/check.py <format-id> <exported-file>`. Inspect the final export at actual delivery size for sharpness, text, crop safety and alpha.
5. Score the final exported deliverable with [core/qa-checklist.md](../core/qa-checklist.md): record counts of failed checks in A (truth/locks), B (integrity), C (layout), D (delivery). Save raw returned dimensions, requested-size mismatches and crop/upscale operations separately as generation limitations.
6. Record the run:

```bash
node scripts/record-test.mjs <template-id> --model "EXACT_PROVIDER_MODEL_ID" --runs 1 --passed 0 --a 1 --b 0 --c 0 --d 0 --notes "label differs from truth reference; raw size and export steps recorded in manifest" --file outputs/_tests/<id>/<date>/delivery/model-1.png
```

It appends a row to [results.csv](results.csv), validating counts and any supplied output path. It never promotes the index automatically. `passed` counts runs that passed all applicable A/B/C/D checks; an attractive output with a failed label is a failed run. After adding and reviewing every field of the [test-evidence record](../prompt-library/SCHEMA.md#test-evidence-record), set `tested = yes` and `validation = actually tested` together. Record failed tests too; a zero-pass evidence record can be actually tested without being approved. Do not invent missing historical run evidence to fill the results table.
7. After each batch run `node scripts/summarize-tests.mjs` to see win-rates by model and bucket, then update the router table.

## Rules
- Hold prompt and reference order constant across models; change one factor per comparison.
- Final exported dimensions and aspect ratio determine delivery compliance. A raw-size/ratio mismatch or upscaling alone does not fail D. Record native-generation mismatches separately; verify crop safety, detail and legibility on the final export before approval. If an explicit benchmark tests native-size capability, report that result separately from final-delivery scoring.
- If text fails on a model twice, test the composite route (generate layout, add text in a design tool) and record it as such.
- Never promote a template from a single lucky run to a general claim; note run counts.
- Distinguish raw generation compliance from postprocessed delivery compliance; retain both files when a crop/upscale was needed.
- `d_delivery_fails` counts confirmed final-export failures only. Keep pending sharpness/alpha/crop reviews explicitly unverified, with `passed=0` until all applicable requirements are verified. A mechanical file-check PASS alone is not approval.
- For prompt upgrades, compare old and new prompts on the same brief, model and references; the prompt revision is the sole changed factor. Start with one attempt each, repeat finalists, and keep failures in the denominator.
- Include Nano Banana 2.1 (`gemini-nano-banana-2.1`) as a candidate where available; its results do not transfer to Nano Banana 2 or Pro.

## Recorded smoke trials and post-processing regression

[Production validation, 2026-10-21](../outputs/_tests/production-validation/2026-10-21/README.md) records five real image calls, exact prompts, contrasting alpha proofs, measured layout regions and separate raw/export compliance. The built-in surface's model ID is unexposed, so these are surface-scoped observations, not named-model benchmark results. No catalog status or model ranking was promoted.

After changes to `post/resize.py`, run `python -m unittest discover -s testing -p test_post_resize.py`. Six targeted regressions cover RGBA foreground preservation, transparent/RGB padding, PNG cover export, JPEG white compositing and palette transparency through the CLI.
