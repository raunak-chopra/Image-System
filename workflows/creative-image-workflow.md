# Creative image workflow

## 1. Intake and locks

Capture the objective, audience, channel, model/tool, mode (`generate` or `edit`), aspect ratio, delivery size, exact copy, brand palette, claims/disclaimer rules, localization markets, and reference assets. Record each non-negotiable under `LOCKED ELEMENTS`.

Stop and request the missing asset or wording only when guessing would alter a mandatory product, identity, legal, or brand requirement.

## 2. Select and adapt

Enter through the project-local [creative prompt library skill](../.codex/skills/creative-prompt-library/SKILL.md).

Search `prompt-library/index.csv` with `rg`, for example:

```powershell
rg -i "product|packshot|lifestyle" prompt-library/index.csv
```

Open the selected entry and replace every `{PLACEHOLDER}`. Remove optional clauses that do not apply. Review [the learned preferences guide](../memory/learned-preferences.md) to apply past approved patterns (e.g. pedestal grounding, translucent caustics, high-contrast Swiss typography) and avoid known anti-patterns. For Gemini 3.1 Flash Image, route through [the Nano Banana 2 guide](../prompt-library/nano-banana-2/README.md).

## 3. Preflight

- Every reference has a numbered filename/position and one declared role.
- All locked elements appear in the prompt.
- Prompt adheres to [learned preferences](../memory/learned-preferences.md) and avoids known anti-patterns (no center clutter, no floating bottles without grounding, no illegible micro-text).
- Exact copy is quoted and spelling/case are confirmed.
- Composition reserves intentional safe areas for crop and copy.
- Requested ratio/resolution is supported by the chosen surface; otherwise mark it as a delivery target for downstream cropping/upscaling.
- Print DPI, physical dimensions, color space, and platform pixel sizes are production specifications, not guarantees that prose alone makes a model return a compliant file. Verify the exported file properties.
- No template language conflicts with the brief or claims constraints.

## 4. Generate or edit

Generate a small exploratory set when the tool supports variants. For edits, keep the conversation/image state and change one variable at a time. Save the exact filled prompt, exact provider/model ID, quality, returned resolution/ratio, references, run count, and output together. If the returned ratio or resolution differs from the request, record the mismatch rather than treating the prompt request as fulfilled.

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

## 6. Refine and reconcile

Use narrow follow-ups: `Keep everything else unchanged; only {CHANGE}.` If drift compounds, return to the best prior output. For localization, preserve the approved composition and swap only the authorized copy, price, legal line, and language-specific spacing; re-proof every market. Record whether the final result is approved, needs downstream compositing, or failed a locked requirement.

Only mark a library entry `actually tested` after adding the complete [test-evidence record](../prompt-library/SCHEMA.md#test-evidence-record). One successful run is not a repeatability claim. Label any prompt inferred from an image or narrative example as `reconstructed`.

Before delivery run `powershell -NoProfile -ExecutionPolicy Bypass -File scripts/validate-library.ps1`. This is read-only: it checks structure, links, index targets, required fields, placeholder syntax, duplicate IDs, source research and dedup coverage, per-entry reuse statements, project-skill integration, and Nano Banana routing.

## 7. Memory & feedback capture (2nd loop)

Capture every user review signal (liked, disliked, revised) to continuously improve future generations:
- Append a structured event to [memory/feedback-ledger.jsonl](../memory/feedback-ledger.jsonl) (recording asset name, template ID, ratio, verbatim feedback, and positive/negative attributes).
- Reconcile newly discovered winning rules and anti-patterns in [memory/learned-preferences.md](../memory/learned-preferences.md).
- Run `powershell -NoProfile -ExecutionPolicy Bypass -File scripts/sync-memory.ps1` to validate the ledger and update metrics.

