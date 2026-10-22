# First prompt upgrade benchmark — 2026-10-11

Evaluation correction, 2026-10-21: final exported dimensions determine delivery compliance. Historical raw checks below remain generation diagnostics; `testing/results.csv` now counts recorded final-export failures only. The pack-baseline's export fill failure remains. [Correction audit and original scoring](../../production-validation/2026-10-21/README.md) retain provenance; no new image tests or approvals were added.

Ten images generated using the built-in `image_gen` surface: three baseline/upgraded pairs, two exact repeats of the upgraded packshot, and two targeted corrections. Exact provider model ID, seed, quality and native-size controls were not exposed. These findings assess prompt revisions on this surface, not GPT versus Gemini models.

## Findings

| Brief | Baseline | Upgraded | Correction or repeat | Decision |
|---|---|---|---|---|
| Amazon main packshot | 78% fill, fails minimum | 88% fill, passes | Same upgraded prompt: 90% and 92%, both pass | Keep explicit whole-bottle bounds and frame-fill target. Three runs support this framing result on this surface only. |
| Exact-copy typography | Both approved strings correct; footer too close to bottom | Both strings correct; larger isolated footer, but raw ratio wrong and bounds missed | Removed conflicting overlap instruction; text and object separated, readable footer; top headline still above requested margin | Controls improve separation, not exact coordinates. Use composited real fonts for final brand typography. |
| Product lifestyle | Readable supplied label; unwanted foliage | Readable supplied label; foliage and positioning failure | Explicit permitted-object list removed foliage and cleared upper-third copy area; bottle still starts near 34%, rather than 40% | Keep object inventory. Inspect bounds; percentages alone do not guarantee placement. |

All packshots returned **1254×1254** and were upscaled to **2000×2000**. Their export-size passes are not native-resolution passes. The initial upgraded type image returned **1092×1440**, differing from 4:5; its export required a crop. Other Meta trials returned **1122×1402**, close to 4:5, and were exported at **1080×1350**. Raw files are retained alongside delivery exports. Automated packshot fill includes shadows/background deviations, so the 78/88/90/92 percentages are checker measurements, not independently segmented bottle masks.

Visual inspection found readable supplied label strings in the product trials. Exact original artwork and geometry preservation is **unverified**; generative redraws are not authenticated packaging. Exact Alfabet/Sofia Sans font fidelity is also **unverified**. No output is labelled production-approved, and no template is promoted to `actually tested` because the full exact-model evidence requirement is unmet.

## References and controls

The owner supplied the external Spunge asset folder. `references/product.jpg` is a frozen copy of `product-photography-AI Generated/Spunge_FishOilHighStrength_30_Product_1.jpg`; the source is labelled AI-generated. It is the sole product reference in every packshot/lifestyle trial. This is preservation against a supplied reference, not authentication against a real camera original. Palette and new advertising copy come from this workspace's brand kit and claims registry.

Every product trial uses the same reference order. Upgraded prompts add controls to the same filled baseline brief. Only the packshot finalist was repeated unchanged three times; the type/lifestyle corrections are different prompts and are not independent repeats. Baselines had one attempt each. Selection and inspection were performed by Codex with trial labels visible; this is not a blind preference study or an advertising-performance test.

The first upgraded type prompt accidentally retained the baseline overlap instruction while adding a non-overlap constraint. Both that attempt and its failure are retained. `type-corrected.txt` resolves the conflict; the result still misses the top margin. This is why prompt cleanup must precede generation and why rendered QA remains required.

## Artifacts

- [Review contact sheet](contact-sheet.jpg): baseline, upgraded, corrected/finalist across three briefs; the third unchanged packshot repeat is retained separately.
- [Machine-readable manifest](manifest.json): exact prompts, hashes, references, returned dimensions, raw/export checks and agent QA.
- [Delivery check log](delivery-checks.txt): automated checks for every raw and exported file.
- `baseline.txt`, `upgraded.txt`, `type-corrected.txt`, `pack-baseline.txt`, `pack-upgraded.txt`, `lifestyle-baseline.txt`, `lifestyle-upgraded.txt`, `lifestyle-corrected.txt`: exact prompt set.
- `delivery/`: resized candidates. Raw PNGs remain in this folder.

Next meaningful benchmark: use a provider surface exposing a real model ID, exact supported settings and identical references to compare models. This built-in interface cannot select Nano Banana 2/2.1/Pro, so no model-router quality ordering was changed. Actual user preference feedback can be added after review; no sentiment was inferred from authorizing this benchmark.
