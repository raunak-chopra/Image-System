---
name: creative-prompt-library
description: Select, adapt, run, review, and record image-generation or image-editing prompts from this workspace library. Use for products, ads, social graphics, brand/layout work, portraits, illustrations, compositing, reference consistency, comparisons, or Nano Banana 2. Do not use for unrelated text-only or code-only tasks.
---

# Creative Prompt Library

## Route the request

1. Read `../../creative-rules.md` and `../../workflows/creative-image-workflow.md`.
2. Read `../../memory/learned-preferences.md` to incorporate proven liked styles and avoid anti-patterns.
3. Search `../../prompt-library/index.csv` by category, mode, tags, model and compatibility. Return a small shortlist when more than one strategy fits.
   First match the production job in `../../prompt-library/use-cases.csv`; consult `../../prompt-library/COVERAGE.md` for scope and handoffs. Use `node scripts/find-prompts.mjs --use-case app-store-screenshots` or `--domain app` for task-based discovery. Native UI/code, vectors, data charts, live controls and strategy must follow their recorded route; a raster prompt is not a substitute. For maintenance, audit all four domains before treating entry count as adequate coverage.
   Use `node scripts/find-prompts.mjs <keywords> --mode edit --limit 5` from the workspace root for ranked discovery. For reusable style, spatial, material and text controls, consult `../../prompt-library/control-blocks.md`; add only blocks that serve the chosen template.
4. Open the linked canonical template. Do not substitute a source-gallery prompt for the curated entry.
5. For Nano Banana 2, also read `../../prompt-library/nano-banana-2/README.md`; use `nb2-*` entries for model-specific directions. Do not treat Nano Banana Pro or another Gemini model as interchangeable.

## Adapt safely

When the brief starts from a reference or a tool-specific prompt problem, use `brief-reference-observation` or `brief-model-surface-adapter` from `../../prompt-library/categories/brief-preparation.md`. These return text for review before an image request. For gallery/tool leads and comment-derived decisions, consult `../../prompt-library/sources/reddit-comment-review-2026-10-21.md`.

- Fill every `{UPPER_SNAKE_CASE}` placeholder. Ask only for missing facts that materially change the result.
- Convert the brand brief into explicit palette/type/mood rules. Preserve exact logos, product geometry, labels, identities, claims, legal copy, reference roles and other locked elements.
- Number references and give each one a single role. State conflict priority and prohibit unassigned cross-transfer.
- Keep exact output ratio/size in provider controls when available; prompt dimensions express composition intent, not guaranteed file metadata.
- For edits, state `change`, `preserve`, and `match`. Prefer one bounded change per turn.

## Generate, review, refine

- Follow the template’s constraints and quality checks plus the workflow preflight.
- Inspect the returned file: dimensions/ratio, copy, logos/labels, identity/product fidelity, composition, edges, shadows, materials, claims and artifacts.
- Score delivery on the final exported file; record raw-size mismatches and export/upscale steps separately. Verify final dimensions, sharpness, legibility, crop safety and alpha. Pending checks stay unverified; a raw-size mismatch alone is not a delivery failure.
- Refine the smallest failing dimension while repeating all locks. Restart from the approved anchor if iterative drift accumulates.
- When comparing variants/models, use `evaluation-variant-comparison` and keep the filled master prompt and reference order unchanged.
- Log user feedback signals (liked, disliked, revised) into `../../memory/feedback-ledger.jsonl` and run `node ../../scripts/sync-memory.mjs`.

## Record evidence honestly

- `verified` compatibility means official documentation supports the operation. It does not mean the template was tested.
- Promote an entry to `actually tested` only after adding every field in `../../prompt-library/SCHEMA.md#test-evidence-record`.
- Keep source/reuse lines intact. Consult `../../prompt-library/sources/source-register.md` and `../../prompt-library/sources/deduplication-ledger.md` before adding an entry.
- Run `node ../../scripts/validate-library.mjs` after library or integration changes.
