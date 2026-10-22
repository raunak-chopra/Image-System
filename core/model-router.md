# Model router

Models in use: **GPT-Image-2**, **Nano Banana 2** (Gemini 3.1 Flash Image), **Nano Banana Pro**.

Status: **hypothesis**. The ordering below is a starting point for internal tests, not a verified quality ranking. `testing/results.csv` contains ten prompt-upgrade attempts and five subsequent production-validation attempts on the built-in image surface, whose exact model ID is unexposed; they cannot establish model rankings. The [benchmark report](../outputs/_tests/prompt-upgrade/2026-10-11/README.md) and [production-validation report](../outputs/_tests/production-validation/2026-10-21/README.md) separate observed improvements from unresolved fidelity/delivery requirements. Existing per-template evidence remains scoped to its recorded model and settings. Replace each hypothesis only with dated results exposing actual model IDs. Never treat Nano Banana 2 and Pro as interchangeable.

Upgrade candidate, checked 2026-10-11: Google's [official guide](https://ai.google.dev/gemini-api/docs/image-generation) now recommends Nano Banana 2.1 (`gemini-nano-banana-2.1`) for new projects. Add it to the benchmark shortlist if the actual surface exposes it; do not silently change existing Nano Banana 2 prompts, controls or historical records. Provider positioning is not evidence that it wins this studio's tasks. Documentation describes 1K/2K/4K for 2.1; NB2's 512px setting does not transfer. Reference limits in different sections of the live guide differ for Pro; check the chosen model/endpoint at run time rather than hardcoding a shared limit.

| Job | First choice | Second | Why (hypothesis) |
|---|---|---|---|
| Infographic, comparison, feature-callout slides | GPT-Image-2 | Nano Banana Pro | strongest published typography and layout fidelity |
| Offer / headline ad with exact copy | GPT-Image-2 | Pro | text accuracy; still composite mandatory copy if it fails QA |
| Product packshot / edit with locked product from references | Nano Banana Pro | NB2 | multi-reference fidelity |
| Photoreal lifestyle, product-in-scene | Nano Banana Pro | GPT-Image-2 | realism |
| Fast variants, resizes, exploration | Nano Banana 2 | - | speed and cost |
| Background replace, small local edits | Nano Banana 2 / Pro | GPT-Image-2 | edit-in-place |
| Brand boards, logofolio-style identity sheets | GPT-Image-2 | Pro | structured multi-panel layouts |
| Poster / type-led design | GPT-Image-2 | - | typography |

## Operating rules
- Record the exact model ID, exposed quality setting, returned resolution/ratio and export operations with every output. A raw-size mismatch is a generation limitation; final exported dimensions determine delivery compliance. Check final detail, legibility, crop safety and alpha after resizing, recording pending checks as unverified. Native-size capability results remain separate from final-delivery scoring.
- Hold prompt and references fixed when comparing models; change one factor.
- Exact legal copy, price, logos: composite downstream if QA fails twice.
- Update this table (and the `model` and `tested` columns in `prompt-library/index.csv`) only from recorded test evidence.
