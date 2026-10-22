# Creative image workflow

## 1. Intake and locks

Capture the objective, audience, channel, model/tool, mode (`generate` or `edit`), aspect ratio, delivery size, exact copy, brand palette, claims/disclaimer rules, localization markets, and reference assets. Record each non-negotiable under `LOCKED ELEMENTS`.

Stop and request the missing asset or wording only when guessing would alter a mandatory product, identity, legal, or brand requirement.

## 2. Select and adapt

Enter through the project-local [creative prompt library skill](../skills/creative-prompt-library/SKILL.md).

Match the actual job in the [use-case map](../prompt-library/use-cases.csv) and [coverage guide](../prompt-library/COVERAGE.md). `node scripts/find-prompts.mjs --domain app` scopes discovery; `--use-case app-store-screenshots` also reports inputs and the production gate. Route strategy, functional UI, vectors, accurate charts and interactive controls to their native workflow. Template availability is not a claim of tested production readiness.

When the user can show a reference but cannot yet describe the change, use `brief-reference-observation` from [brief preparation](../prompt-library/categories/brief-preparation.md), reviewing observations and unknowns before generation. After the canonical prompt is approved, use `brief-model-surface-adapter` if the chosen tool needs different syntax or controls. These are preparation steps; do not present them as generated images or recovered original prompts. For transparent cutouts, use the dedicated variation of `edit-background-replace` and verify actual alpha.

Search `prompt-library/index.csv` with `rg`, for example:

```bash
rg -i "product|packshot|lifestyle" prompt-library/index.csv
```

Open the selected entry and replace every `{PLACEHOLDER}`. Remove optional clauses that do not apply. Review [the learned preferences guide](../memory/learned-preferences.md) to apply past approved patterns (e.g. pedestal grounding, translucent caustics, high-contrast Swiss typography) and avoid known anti-patterns. For Gemini 3.1 Flash Image, route through [the Nano Banana 2 guide](../prompt-library/nano-banana-2/README.md).

For a ranked shortlist use `node scripts/find-prompts.mjs product glass --mode edit --limit 5`. Use the closest curated strategy, then add only relevant [control blocks](../prompt-library/control-blocks.md). Resolve conflicting camera, light, palette or text instructions before running. Freeze a versioned style contract for campaign work.

## 3. Preflight

- Every reference has a numbered filename/position and one declared role.
- All locked elements appear in the prompt.
- Prompt adheres to [learned preferences](../memory/learned-preferences.md) and avoids known anti-patterns (no center clutter, no floating bottles without grounding, no illegible micro-text).
- Exact copy is quoted and spelling/case are confirmed.
- Composition reserves intentional safe areas for crop and copy.
- Requested ratio/resolution is supported by the chosen surface; otherwise mark it as a delivery target for downstream cropping/upscaling.
- Print DPI, physical dimensions, color space, and platform pixel sizes are production specifications, not guarantees that prose alone makes a model return a compliant file. Verify the exported file properties.
- No template language conflicts with the brief or claims constraints.
- Choose the type route before generation: exact approved copy in-model, or named clean zones for downstream compositing. Do not request text and blank space in the same zone.

## 4. Generate or edit

Generate a small exploratory set when the tool supports variants. For edits, keep the conversation/image state and change one variable at a time. Save the exact filled prompt, exact provider/model ID, quality, returned resolution/ratio, references, run count, and output together. If the returned ratio or resolution differs from the request, record the mismatch rather than treating the prompt request as fulfilled.

Use a small explicit attempt budget (default: two candidates and up to two focused corrections; adjust for the brief). Stop when QA passes. Save a clean approved anchor, each revision's parent and its accepted change list. Preserve supplied originals; avoid repeated lossy export cycles.

For A/B or multi-model work, use `evaluation-variant-comparison`: hold the filled prompt and reference order fixed, vary one declared factor, record unsupported-setting mismatches, and score outputs blind when practical.

## 5. Review

Review at fit-to-frame and 100% zoom. Check:

- objective and brand fit;
- product/character/reference fidelity;
- composition, crop safety, hierarchy, and intended focal point;
- lighting direction, contact shadows, reflections, material behavior, and edge quality;
- exact text, logos, labels, numbers, claims, and disclaimers;
- faces, hands, anatomy, counts, perspective, seams, repeated patterns, and invented details;
- requested dimensions, color space, transparency, and export format outside the model when relevant.

Score delivery on the final exported file. Retain the raw requested/returned dimensions and crop/upscale history as generation limitations; do not fail delivery solely because the raw file differs. After export, verify exact dimensions, crop safety, sharpness, text legibility and alpha at delivery size. Pending checks remain unverified and block approval. Native-size capability benchmarks, when explicitly requested, are reported separately.

## 6. Refine and reconcile

Use narrow follow-ups: `Keep everything else unchanged; only {CHANGE}.` If drift compounds, return to the best prior output. For localization, preserve the approved composition and swap only the authorized copy, price, legal line, and language-specific spacing; re-proof every market. Record whether the final result is approved, needs downstream compositing, or failed a locked requirement.

When unchanged labels, identity, texture or geometry drift, use `edit-anchor-rebase` from [production controls](../prompt-library/categories/production-controls.md), reapplying the written accepted changes from the clean anchor. Recheck unchanged regions at 100%; a sharp-looking image alone does not prove preservation. If the same locked text/logo fails twice, composite its approved source asset. For each new ratio, recompose if cropping cuts the subject/copy; inspect the resulting delivery size.

Only mark a library entry `actually tested` after adding the complete [test-evidence record](../prompt-library/SCHEMA.md#test-evidence-record). One successful run is not a repeatability claim. Label any prompt inferred from an image or narrative example as `reconstructed`.

Before delivery run `node scripts/validate-library.mjs`. This is read-only: it checks structure, links, index targets, required fields, placeholder syntax, duplicate IDs, source research and dedup coverage, per-entry reuse statements, project-skill integration, and Nano Banana routing.

## 7. Memory & feedback capture (2nd loop)

Capture every user review signal (liked, disliked, revised) to continuously improve future generations:
- Append a structured event to [memory/feedback-ledger.jsonl](../memory/feedback-ledger.jsonl) (recording asset name, template ID, ratio, verbatim feedback, and positive/negative attributes).
- Reconcile newly discovered winning rules and anti-patterns in [memory/learned-preferences.md](../memory/learned-preferences.md).
- Run `node scripts/sync-memory.mjs` to validate the ledger and update metrics.

