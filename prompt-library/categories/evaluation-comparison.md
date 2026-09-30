# Evaluation, variants, and model comparison

## evaluation-variant-comparison — Controlled variant and model comparison

- **Purpose:** Compare creative directions or models without changing the underlying brief.
- **Category:** evaluation and comparison
- **Tags:** A/B test, variants, multi-model, comparison, evaluation, contact sheet
- **Mode:** generate or edit
- **Model/tool:** one or more image models
- **Compatibility:** unverified — general workflow; exact parameters differ by provider.
- **Validation:** adapted template
- **Required inputs:** one filled master prompt, controlled variable, models/settings, scoring rubric
- **Reference assets:** `[optional: the same numbered references supplied identically to every run]`
- **Sources:** SRC-08, SRC-10, SRC-13, SRC-17
- **Reuse:** Original synthesis. SRC-08 is AGPL-3.0—metadata concept only; SRC-10 is mixed MIT/CC BY 4.0—evidence method only; SRC-13 prompt rights are per-item/unstated—shortlist concept only; SRC-17 is MIT—comparison workflow paraphrased.

### Prompt

Use this unchanged master brief for every run: `{FILLED_MASTER_PROMPT}`. Hold fixed: `{FIXED_ELEMENTS}`. Test only `{CONTROLLED_VARIABLE}` with these values: `{VARIANT_VALUES}`. Use identical references and equivalent supported settings: target ratio `{ASPECT_RATIO}`, target size `{TARGET_SIZE}`, quality `{QUALITY}`. Return or record each candidate with an anonymous ID; do not label model names inside the image. Do not silently rewrite the brief between runs.

### Variations and adaptation

Use one model with multiple art-direction values for an A/B test, or one exact prompt across models for capability comparison. If providers expose different controls, record the mismatch rather than pretending settings are equivalent.

### Constraints and common failures

Hidden prompt rewriting, nondeterminism, unsupported parameter differences, reference-order changes and reviewer bias can invalidate comparisons.

### Quality checks

Record exact prompt, provider/model ID, settings, reference order, returned dimensions and every run. Score blind against `{RUBRIC}`; separate subjective preference from text accuracy, reference fidelity, constraint compliance and artifact rate.
