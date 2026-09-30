# Image-generation routing trial — 2026-09-24

## Trial status

Prompt rewrite prepared through the dedicated `C:\Users\rauna\Desktop\Bots\Image generation` workflow. Image render was attempted with the built-in `image_gen` tool but failed before returning an image: HTTP 429, `usage_limit_reached`. No image asset was produced; visual QA is pending.

## Brief and routing

- **Use case:** Amazon square gallery infographic scaffold for Spunge Omega-3 Fish Oil High Strength.
- **Selected library entry:** `design-information-layout` from `prompt-library/categories/brand-design-layout.md`.
- **Compatibility:** adapted general template; unverified for the built-in generator used here. The model/version was not exposed.
- **Reference:** `Spunge_FishOilHighStrength_30_Product_1.jpg`, supplied product identity reference from the Spunge brand asset library. Use for product identity only; do not infer additional claims from its pixels.
- **Marketplace learning used:** square gallery format, clear product-left / information-card hierarchy, generous whitespace. The local knowledge retrieval returned P5 on mapping commerce assets to customer decisions, with an explicit warning that marketplace examples do not establish performance.
- **Chosen route:** short educational scaffold with blank body areas for later verified details.
- **Rejected route:** generate detailed claims, badges, or measurements from marketplace examples. No product-specific approved copy or source proof was supplied for this trial.

## Rewritten prompt

```text
Use case: infographic-diagram
Asset type: square 1:1 Amazon gallery image, exploratory layout prototype for Spunge Omega-3 Fish Oil High Strength.
Input images: Image 1 is the approved product identity reference only. Preserve the exact off-white rounded package, lid, visible artwork, proportions, and vertical lowercase spunge® wordmark. Do not use its packaging as a source for any additional claims or copy.
Primary request: Create a compact “Read the Label” educational infographic for shoppers scanning a supplement listing. The visual hierarchy should answer in order: what product is shown, what information to inspect, where proof belongs. Use Image 1 as a small but clear hero at the left, grounded on a pale matte surface. This is a visual scaffold; do not make or imply product claims.
Scene/backdrop: clean warm-white canvas, subtle Cool Gray #D9DAE4 rules, restrained Dark Cyan #006375 accents, with one small translucent amber detail. Flat editorial information design with realistic product photography.
Composition/framing: strict square layout. Product occupies about 34% on the left. On the right, four spacious aligned information cards in a simple vertical stack, consistent icon family and generous margins. Keep the center open and avoid overlaps. Strong thumbnail hierarchy and safe margins.
Text (verbatim): “Read the Label”; “Active ingredient”; “Serving information”; “Format”; “Proof source”. Render only these five strings, spelled exactly, in dark high-contrast typography. Leave the body area of each card blank for verified details to be typeset later. No other text.
Constraints: preserve Image 1 as product identity; do not redraw or relabel the pack. No invented numerical values, claims, ingredients, benefits, comparisons, dosage, certifications, badges, reviews, price, CTA, citations, or Amazon logo. No competitor branding. Exploratory concept, not publish-ready.
Avoid: ocean waves, fish, anatomy, DNA, capsules, glowing science effects, cluttered center, floating product, tiny footnotes, fake labels, distorted package, watermark, border, collage, split screen.
```

## Review record

- **Status:** prompt-only trial; generation failed at service limit before image return.
- **QA:** pending. Check composition, reference fidelity, exact headings, blank copy fields, ratio, invented text/claims, and crop safety after a successful render.
- **External record:** copied to `Image generation/outputs/amazon-gallery-test-2026-09-24/PROMPT.md` after write authorization. The folder holds the prompt and run status; no image was returned.
- **Learning update:** do not add feedback to the external ledger until the user reviews an actual rendered image.
