---
name: creative-prompt-library
description: Select, adapt, run, review, and record image-generation or image-editing prompts from this workspace library. Use for products, ads, social graphics, brand/layout work, portraits, illustrations, compositing, reference consistency, comparisons, or Nano Banana 2. Do not use for unrelated text-only or code-only tasks.
---

# Creative Prompt Library

## Route the request

1. Read `../../../creative-rules.md` and `../../../workflows/creative-image-workflow.md`.
2. Read `../../../memory/learned-preferences.md` to incorporate proven liked styles and avoid anti-patterns.
3. Search `../../../prompt-library/index.csv` by category, mode, tags, model and compatibility. Return a small shortlist when more than one strategy fits.
4. Open the linked canonical template. Do not substitute a source-gallery prompt for the curated entry.
5. For Nano Banana 2, also read `../../../prompt-library/nano-banana-2/README.md`; use `nb2-*` entries for model-specific directions. Do not treat Nano Banana Pro or another Gemini model as interchangeable.

## Adapt safely

- Fill every `{UPPER_SNAKE_CASE}` placeholder. Ask only for missing facts that materially change the result.
- Convert the brand brief into explicit palette/type/mood rules. Preserve exact logos, product geometry, labels, identities, claims, legal copy, reference roles and other locked elements.
- Number references and give each one a single role. State conflict priority and prohibit unassigned cross-transfer.
- Keep exact output ratio/size in provider controls when available; prompt dimensions express composition intent, not guaranteed file metadata.
- For edits, state `change`, `preserve`, and `match`. Prefer one bounded change per turn.

## Generate, review, refine

- Follow the template’s constraints and quality checks plus the workflow preflight.
- Inspect the returned file: dimensions/ratio, copy, logos/labels, identity/product fidelity, composition, edges, shadows, materials, claims and artifacts.
- Refine the smallest failing dimension while repeating all locks. Restart from the approved anchor if iterative drift accumulates.
- When comparing variants/models, use `evaluation-variant-comparison` and keep the filled master prompt and reference order unchanged.
- Log user feedback signals (liked, disliked, revised) into `../../../memory/feedback-ledger.jsonl` and run `powershell -NoProfile -ExecutionPolicy Bypass -File ../../../scripts/sync-memory.ps1`.

## Record evidence honestly

- `verified` compatibility means official documentation supports the operation. It does not mean the template was tested.
- Promote an entry to `actually tested` only after adding every field in `../../../prompt-library/SCHEMA.md#test-evidence-record`.
- Keep source/reuse lines intact. Consult `../../../prompt-library/sources/source-register.md` and `../../../prompt-library/sources/deduplication-ledger.md` before adding an entry.
- Run `powershell -NoProfile -ExecutionPolicy Bypass -File ../../../scripts/validate-library.ps1` after library or integration changes.
