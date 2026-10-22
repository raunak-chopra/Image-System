# Nano Banana 2 — Gemini direct-use guide

Use this folder when the target is **Nano Banana 2**, the official product name for **Gemini 3.1 Flash Image** (`gemini-3.1-flash-image`). This guide is self-contained: choose a template in [PROMPTS.md](PROMPTS.md), fill it, generate/edit, and review with the checklist below.

## Do not conflate the models

Update checked 2026-10-11: the [official guide](https://ai.google.dev/gemini-api/docs/image-generation) now recommends **Nano Banana 2.1** (`gemini-nano-banana-2.1`) for new projects. This folder's existing templates and tests still target Nano Banana 2. Benchmark 2.1 separately; it supports 1K/2K/4K, and does not inherit NB2's 512px option. Check controls for the exact endpoint rather than copying settings across models.

Verified against Google's image-generation guide, last reviewed 2026-09-13:

| Name | API model ID | Use |
|---|---|---|
| Nano Banana 2 Lite | `gemini-3.1-flash-lite-image` | Lowest-latency/high-volume work; not optimized for multiple references or long sequential edits. |
| **Nano Banana 2** | **`gemini-3.1-flash-image`** | General-purpose balance of quality, speed, 4K support, text rendering, references, and iterative editing. |
| Nano Banana Pro | `gemini-3-pro-image` | Most complex professional work where maximum control/accuracy matters more than speed. |
| Nano Banana (legacy) | `gemini-2.5-flash-image` | Legacy 1024px model; do not treat its behavior as Nano Banana 2 evidence. |

Prompts from Pro-oriented community collections are inspiration only unless tested on Nano Banana 2. Templates `nb2-campaign-hero` and `nb2-exact-copy-layout` are empirically verified with dated test records and output artifacts in `outputs/`. Remaining templates are marked `adapted template` until tested.

## Operating loop for Gemini

1. **Choose:** Search the table in [PROMPTS.md](PROMPTS.md) by task and open the named entry.
2. **Bind references:** Number every asset in upload order. Declare one controlling role per reference: `identity`, `product`, `style`, `composition`, `material`, or `background`. State priority when references conflict.
3. **Apply the brief:** Put mandatory brand assets, approved claims/copy, product truth, and identity details under `LOCKED ELEMENTS`. Style references cannot override them.
4. **Adapt:** Replace every `{PLACEHOLDER}`. Specify subject/action, composition, camera, lighting, materials, exact text (if any), aspect ratio, image size, and exclusions. Remove irrelevant optional language.
5. **Generate/edit:** In the API select `gemini-3.1-flash-image`. Set supported `aspect_ratio` and `image_size` in `response_format` rather than relying only on prose. In the Gemini app, use the closest exposed size/crop controls; surface availability can differ.
6. **Review:** Inspect at 100% for locks, text, labels, faces/hands, edges, count, geometry, shadows, reflections, materials, crop safety, and claims.
7. **Refine:** Continue the same interaction and request one change: `Keep everything else unchanged; only {CHANGE}.` If drift accumulates, return to the best earlier result/reference.

## Verified Nano Banana 2 capability notes

- Native text-and-image generation and conversational editing are documented.
- API output sizes include 512px, 1K, 2K, and 4K. Supported documented ratios are `1:1`, `2:3`, `3:2`, `3:4`, `4:3`, `4:5`, `5:4`, `9:16`, `16:9`, and `21:9`.
- The current guide documents up to 10 high-fidelity object reference images and up to 4 character images for Gemini 3.1 Flash Image. Use fewer when roles conflict.
- Google documents improved text rendering, multi-turn editing, web/image-search grounding, and video-to-image input. These are capabilities, not guarantees of factual or typographic correctness.
- Generated images include SynthID. Exact controls and availability can vary by Gemini app, AI Studio, API, Vertex AI region, account, and preview status.

Official references: [Gemini image generation guide](https://ai.google.dev/gemini-api/docs/image-generation), [Nano Banana 2 announcement](https://blog.google/innovation-and-ai/technology/ai/nano-banana-2/), and [developer announcement](https://blog.google/innovation-and-ai/technology/developers-tools/build-with-nano-banana-2/).

## Reference handling rules

- Put clean, high-resolution truth references first; avoid screenshots when exact product detail matters.
- Say `REF 1 = product identity` instead of “use these images.”
- Declare what may transfer from a style reference: palette, lighting, texture, or layout. Explicitly forbid its people, products, text, and logos unless needed.
- For characters, list stable facial/hair/body/wardrobe identifiers; for products, list silhouette, dimensions, materials, labels, colors, and functional parts.
- For exact logos/type, prefer a model-generated background/layout plus downstream compositing of approved assets.

## Quality gate

Approve only when the result satisfies the brief at full view and 100% zoom. A visually attractive result still fails if a locked asset, label, exact copy, disclaimer, identity, product geometry, or claim is wrong.

