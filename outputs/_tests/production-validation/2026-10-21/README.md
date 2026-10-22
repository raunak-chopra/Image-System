# Production validation — 2026-10-21

The RGBA `contain` bug is fixed. Four representative creative jobs were exercised with five actual image calls, including one focused Story correction. Exact marketing copy was rendered correctly in these trials, and every postprocessed export passed mechanical file checks. Product preservation, precise layout and unverified final detail/font fidelity still prevent production approval.

## Scope and controls

Built-in `image_gen.imagegen` was used. Exact underlying model/provider ID, seed and quality controls were not exposed; no named-model comparison or ranking is supported. Requested dimensions were prompt instructions, not an exposed size parameter. The prompt files in [prompts/](prompts/) are the exact submitted text, including their internal-test framing. All calls, raw outputs and their SHA-256 values are in [manifest.json](manifest.json).

The owner-supplied Spunge reference was frozen in [references/product.jpg](references/product.jpg), from the previously documented SRC-28 input. That source folder is labelled AI-generated; it is a fidelity anchor, not authenticated real-world packaging. Existing brand tokens and the approved claim/footnote were used. The splash is external clear-water set dressing, with no new ingredient or benefit claim. Tests are private proofs, not published advertisements. Only the existing internal exclusion-band specification was tested; no fresh platform-policy claim was made.

## Actual trials

| Trial / canonical template | Observed result | Failure or limit |
|---|---|---|
| [Splash product edit](product-splash.png), `product-controlled-splash` | One supported bottle, dry unobstructed label, splash behind the product; visible label strings agree with the supplied reference on agent inspection. | Exact geometry/artwork preservation remains unverified; visual resemblance is not pixel identity. Returned 1254×1254 versus requested 2000×2000. |
| [Type poster](type-poster.png), `design-type-poster` | Headline transcribes as `13X Better EPA Absorption*`; footnote as `*Compared to ordinary fish oil supplements.` One capsule, visible depth, grounded pedestal. | Measured footnote ink at y=93.51–95.79%, outside requested 88–92%; headline side margins also miss the 8% target. Exact Alfabet/Sofia Sans fidelity unverified. Returned 1122×1402 versus 1080×1350. |
| [Transparent cutout](product-cutout.png), `edit-background-replace` | Genuine RGBA alpha, transparent background, external cast shadow removed. Inspectable on [black](proofs/product-cutout-on-black.png), [white](proofs/product-cutout-on-white.png) and [cyan](proofs/product-cutout-on-cyan.png). | Same-canvas foreground preservation fails: placement/scale and RGB change. After normalizing to source dimensions, mean absolute RGB differences on output alpha≥250 pixels are about 20/255 per channel; this includes registration drift and is not an OCR score. 9,218 pixels have alpha 1–9, with nonzero alpha extending far beyond the main silhouette. Returned 1254×1254 versus 1024×1024. |
| [Story adaptation](story-adaptation.png), `design-localization-master` | Same two exact strings and overall visual system; portrait recomposition rather than a narrow crop. | Footnote ink at y=79.55–81.16% crosses the 80% bottom exclusion boundary. Headline extends to y=47.25% versus 43% requested. Returned 941×1672 versus 1080×1920. |
| [Focused Story correction](story-corrected.png), same template | Exact strings retained; footnote moves to y=72.67–74.34%; upper/lower exclusion bands clear on agent inspection. | Precise named zones still miss: headline extends to 44.32% versus 43%, footnote starts above requested 74%. Exact brand fonts unverified. Returned 941×1672 versus 1080×1920. |

Cyan ink positions are measured by a documented color threshold in [inspect_run.py](inspect_run.py), not by OCR. Copy was manually transcribed from the image and checked at fit-to-frame and 100%; [300px proofs](proofs/) preserve thumbnail inspections. Font-family identity cannot be certified from appearance alone. Black/cyan compositing looks substantially cleaner than the initial inline cutout preview; apparent white specks in hidden RGB channels must not be mistaken for visible alpha artifacts. The measurable low-alpha residue is recorded separately.

## Software and delivery verification

`post/resize.py` used the foreground image as its own paste mask onto a transparent canvas. That squared alpha and blended RGB with the padding color: a source pixel `(200,100,50,128)` became `(227,177,152,64)` in the original reproduction. Unmasked channel copying now preserves the RGBA content; opaque RGB padding and JPEG white compositing remain supported.

Six regression tests in [test_post_resize.py](../../../../testing/test_post_resize.py) cover exact foreground RGBA/padding, resized alpha, opaque padding, cover PNG, white JPEG compositing and palette transparency through the actual CLI. Run `python -m unittest discover -s testing -p test_post_resize.py` from the repository root.

Exports in [delivery/](delivery/) were produced with `post/resize.py` and checked through `post/check.py`'s shared `check()` function. All five pass size, file budget and color-mode checks: see [delivery-checks.txt](delivery-checks.txt). Splash and Story delivery files required upscaling; resizing does not recover missing detail. The cutout uses the existing 512px PNG preset only as an alpha-export smoke check, not as an app-icon deliverable. Alpha extrema remain 0–255 after export.

Final verification: all six Python regressions, the Node CLI regression suite, library validation (157 entries, 43 sources, 103 jobs; no warnings), coverage consistency and memory validation passed. Each of the five exports also passed a separate `python post/check.py` CLI invocation; [CLI output](cli-delivery-checks.txt) is retained. `git diff --check` passed for the touched tracked files.

All five raw calls missed exact requested dimensions. These remain generation limitations; final exported dimensions determine delivery compliance. The five final exports pass the recorded mechanical checks, so raw-size mismatches no longer add D failures. Remaining product/layout failures and unverified font/detail checks still prevent approval. Upscaling alone is not a failure, and its final detail quality remains pending where not previously verified.

## Owner-approved scoring correction — 2026-10-21

The owner confirmed that final exported dimensions determine delivery compliance and deferred image testing to 2026-10-22. Rules now agree across the canonical skill, workflow, QA checklist, runbook, schema and model router. No new image generation or visual retesting was performed for this correction.

Corrected all 15 recorded trial rows using their existing final-export check evidence. `d_delivery_fails` now counts final-export failures; scored file links identify those exports. The older pack-baseline's recorded product-fill failure remains a delivery failure. Raw mismatches remain in notes/manifests. Original results and QA are preserved in [results-as-recorded.csv](results-as-recorded.csv) and [qa-as-recorded.json](qa-as-recorded.json); [the correction audit](delivery-scoring-correction.json) records each changed score and path. No A/B/C findings or overall approvals were changed. Updated current findings are in [qa.json](qa.json).

Tomorrow's image review should verify final sharpness after upscaling, font fidelity, foreground preservation and measured layout/alpha constraints. Passing final dimensions does not waive those checks.

## Decisions and next production route

- Keep generated scene art and hierarchy as candidate material. For exact package identity and exact RGB cutouts, use a mask retaining the original foreground and composite it into the scene; do not rely on a generative preservation instruction alone.
- Typeset approved headline, brand fonts and disclaimer as editable layers when exact typography or zones are mandatory. One focused correction improved the Story boundary compliance but did not make placement exact.
- Verify dimensions and alpha after every export and inspect on contrasting backgrounds. A file-check PASS does not cover copy, brand fonts, label fidelity or safe zones.
- Preserve all five attempts in `testing/results.csv`; no index status, compatibility claim, model-router ranking or user-preference metric is promoted. No user image-review feedback has been received.

These are single-brief trials plus one corrective attempt, not repeatability evidence, a before/after prompt benchmark, or a test of all 157 templates. The source register, research review and deduplication ledger reconcile this evidence under SRC-28; no external prompt or new source was imported.
