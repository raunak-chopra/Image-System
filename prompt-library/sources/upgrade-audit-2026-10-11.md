# Image studio upgrade audit — 2026-10-11

The best next step is to make the existing library easier to select, control and evaluate. The starting library had 120 entries and passed structural validation, with six existing lowercase-placeholder warnings in imported examples. The batch results table was empty, despite two NB2 templates carrying separate historical evidence. This audit is research and maintenance, not an image-quality benchmark.

## Implemented

| Priority | Finding | Change |
|---|---|---|
| High | Raw CSV search returns many weak matches | `scripts/find-prompts.mjs`: ranked keyword shortlist, mode/model/format/tested filters, canonical path and evidence status. Ranking is a discovery heuristic. |
| High | Styling controls are repeated inside individual prompts | [Control blocks](../control-blocks.md): optional style, spatial, material/light and text contracts. Use only relevant blocks, keep each run's filled prompt. |
| High | Repeated edits can change accepted details | [Production controls](../categories/production-controls.md): anchor rebasing with a written accepted-change list; unchanged-region QA and revision parents in workflow. |
| High | Recorder promoted tested status without full evidence; example called a warped label a pass | Recorder validates counts and output paths, never promotes automatically. Runbook requires complete reviewed evidence and all applicable checks for approval. |
| Medium | Lighting selection mixed with other art-direction changes | Independent lighting-trial template fixes camera, product, backdrop and layout; contact sheet assembled after generation. |
| Medium | Router's model quality order relied on untested public comparisons | Explicit hypothesis status; current Google 2.1 candidate recorded separately from tested NB2 configurations. |
| Medium | Source validation stopped at a hardcoded 23 sources | Coverage now follows registered source IDs, so new sources require research and adoption/exclusion coverage. |
| Medium | Source refresh could report no changes after failed requests | Added relevant GitHub discovery sources; separate changed, no-baseline and failed counts; failures return a nonzero exit code. |

## Research decisions

- [Google DeepMind](https://deepmind.google/models/gemini-image/prompt-guide/) supports concrete visual descriptions. Adapted as brief controls, not a universal long-prompt rule.
- [AI Visual Prompt Cookbook](https://github.com/VigoZhao/AI-Visual-Prompt-Cookbook) provides style anchors separated from literal source content. Reused the structure idea, not distinctive style packs.
- [The additional GitHub collection](https://github.com/tiktomato/awesome-nano-banana-prompts) largely overlaps current packshot/scene/infographic strategies. No bulk import.
- [Reddit's editing discussion](https://www.reddit.com/r/GeminiAI/comments/1pb7k13/nano_banana_pro_photo_quality_gets_worse_with/) exposed a useful workflow question: how to retain earlier edits when returning to an original. Treated as anecdote.
- [Banana100's abstract](https://arxiv.org/abs/2604.03400) reports iterative degradation and weaknesses of no-reference quality metrics. Supports investigating preservation, not a quantitative claim for our workflows.
- [Google's API guide](https://ai.google.dev/gemini-api/docs/image-generation) now recommends Nano Banana 2.1. Added to benchmark candidates, with existing evidence still scoped to its original model.

Source review depth and reuse decisions are in the [register](source-register.md), [review](research-review.md) and [dedup ledger](deduplication-ledger.md). Private personal-use preference is retained; it does not require copying whole collections to obtain useful controls.

## Next upgrades, requiring real runs

Follow-through: the [first ten-attempt prompt benchmark](../../outputs/_tests/prompt-upgrade/2026-10-11/README.md) is complete with a run manifest, frozen reference, raw/export checks and review sheet. It provides scoped prompt-control observations; cross-model testing still requires a surface exposing actual model IDs and settings. No complete production approvals or invented user preference signals were added.

1. Compare the previous and revised prompt for one packshot, one exact-copy ad and one product lifestyle scene. Hold model/reference/order/settings fixed. Repeat finalists and record every failure.
2. Benchmark available GPT-Image-2, NB2, NB2.1 and Pro configurations on those same briefs. Record the actual provider ID, raw and delivered dimensions, correction count and compositing needs. Change routing only from those results.
3. Add a run manifest containing parent anchor, prompt path, reference order, provider controls, raw output, final output and QA outcome. Build it around actual provider outputs after the first benchmark rather than speculative adapters.
4. Expand source refresh beyond GitHub collections to official model documentation. The GitHub refresher now distinguishes unavailable sources from unchanged sources; API push dates still do not prove individual prompt quality or meaningful changes.
5. If the library grows substantially, add preview paths and style-contract versions to discovery. Keep the CSV as canonical data; avoid introducing a database before it improves actual selection.

No image generations, performance claims or new user preference signals were invented during the audit. New controls and templates remain untested.

## Validation

`node scripts/validate-library.mjs` passes with 122 entries, 27 registered sources and the six pre-existing imported-placeholder warnings. `node testing/library-tools.test.mjs` verifies invalid QA counts, CSV escaping, unchanged test status after recording a pass, ranked discovery/filtering, and simulated source-refresh failures/missing baselines in an isolated fixture. `node scripts/sync-memory.mjs` passes; six actual user feedback records remain unchanged. CLI tests assess tooling, not image quality.
