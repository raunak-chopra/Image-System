# Nano Banana 2 prompt collection

All compatibility claims below refer to the required **mode/capability**, which Google documents for `gemini-3.1-flash-image`. Templates `nb2-campaign-hero` and `nb2-exact-copy-layout` have been empirically tested in this workspace with recorded test evidence; other templates remain adapted templates until tested.

| Need | ID |
|---|---|
| Generate a campaign/product image | `nb2-campaign-hero` |
| Make an exact product packshot edit | `nb2-product-lock-edit` |
| Combine several references safely | `nb2-role-separated-composite` |
| Preserve a character across a scene | `nb2-character-continuity` |
| Replace a background | `nb2-background-edit` |
| Create a text-led layout | `nb2-exact-copy-layout` |

## nb2-campaign-hero — Grounded campaign hero

- **Purpose:** Generate a channel-ready hero with brand/product locks and crop-safe composition.
- **Category:** advertising and product imagery
- **Tags:** nano banana 2, campaign, product, hero, 4k, copy-safe
- **Mode:** generate or edit
- **Model/tool:** Nano Banana 2 / Gemini 3.1 Flash Image (`gemini-3.1-flash-image`)
- **Compatibility:** verified — official guide documents generation, editing, references, ratios, and up to 4K.
- **Validation:** actually tested
- **Required inputs:** brief, product/subject, ratio, size, brand palette, approved claims
- **Reference assets:** `[optional: REF 1 = product identity]`; `[optional: REF 2 = brand/style properties]`
- **Sources:** SRC-19, SRC-20, SRC-07
- **Reuse:** Original synthesis. SRC-19 Google documentation is CC BY 4.0 (code samples Apache 2.0); SRC-20 is an official product post; SRC-07 is MIT—technique paraphrased. No source prompt copied.

### Prompt

TASK: Create a `{ASPECT_RATIO}` campaign hero for `{BRAND_OR_PRODUCT}` communicating `{SINGLE_APPROVED_MESSAGE}` to `{AUDIENCE}`.

REFERENCES: [optional: `REF 1 = exact product identity`; preserve it.] [optional: `REF 2 = style only`; transfer only `{STYLE_PROPERTIES}`.]

LOCKED ELEMENTS: `{PRODUCT_OR_IDENTITY_LOCKS}`; brand palette `{PALETTE}`; no new claims, logos, labels, or copy.

SCENE: `{SUBJECT}` `{ACTION}` in `{SETTING}`. Composition `{COMPOSITION}` with clean copy-safe space at `{COPY_ZONE}` and crop safety for `{DERIVATIVE_RATIOS}`. Camera `{CAMERA}`. Lighting `{LIGHTING}`. Materials must behave as `{MATERIAL_BEHAVIOR}`. Finish `{VISUAL_FINISH}`.

OUTPUT: `{ASPECT_RATIO}`, `{IMAGE_SIZE}`. No text unless provided as approved exact copy; no watermark imitation or signatures.

### Variations and adaptation

Create subject-left and subject-right variants. Use 1K/2K for exploration, then request 4K after composition approval where the surface supports it.

### Constraints and common failures

4K availability does not guarantee fine-label fidelity. Product and brand references can still drift; app controls may differ from API controls.

### Quality checks

Compare locks to references, inspect labels/materials/shadows at 100%, overlay all crops, and verify that any message is approved.

### Test evidence

- **Test date:** 2026-09-16
- **Exact model/provider ID:** `gemini-3.1-flash-image` (Nano Banana 2 via Antigravity image generation)
- **Mode and settings:** generate, aspect ratio 16:9, commercial e-commerce landscape banner
- **Reference disclosure:** 2 multi-references: REF 1 = bottle product identity; REF 2 = packaging outer monocarton box
- **Exact filled prompt:** `TASK: Create a 16:9 premium commercial e-commerce landscape banner for Spunge Omega-3 Fish Oil High Strength...` (recorded in `memory/feedback-ledger.jsonl` event `fb-20260916-112215-002`)
- **Runs:** attempted 1; passed 1
- **Observed result:** Exact preservation of off-white matte bottle and vertical spunge® wordmark; paired with silver foil monocarton outer box on sleek architectural pedestal; dark cyan (`#006375`) headline typography with high contrast; clean copy hierarchy (`13X Better EPA Absorption`, tagline, dosage, footnote).
- **Observed limitations:** Minor raster softness on small legal disclaimer text; packaging wordmark rendered accurately due to reference locking.
- **Artifacts:** `outputs/spunge/hero-banner/2026-09-16/spunge_hero_banner_1789537935582.jpg`
- **Reviewer:** User verified ("great work")

## nb2-product-lock-edit — Exact product packshot edit

- **Purpose:** Change only product setting/lighting while preserving approved product truth.
- **Category:** product photography
- **Tags:** nano banana 2, packshot, edit, product fidelity, label
- **Mode:** edit
- **Model/tool:** Nano Banana 2 / Gemini 3.1 Flash Image
- **Compatibility:** verified — official guide documents image editing and reference input.
- **Validation:** adapted template
- **Required inputs:** clean product reference, target setting, ratio/size
- **Reference assets:** `REF 1 = sole product truth`
- **Sources:** SRC-19, SRC-02, SRC-06
- **Reuse:** Original synthesis. SRC-19 Google documentation is CC BY 4.0 (code Apache 2.0); SRC-02 and SRC-06 have no explicit content license—paraphrase only.

### Prompt

Edit `REF 1`. Change only the background, surface, and lighting to create `{PACKSHOT_TYPE}`. LOCK the product exactly: `{SILHOUETTE}`, `{DIMENSIONS}`, `{MATERIALS}`, `{COLOR}`, `{LOGO}`, `{LABEL_TEXT_AND_PLACEMENT}`, `{FUNCTIONAL_DETAILS}`. Set it `{PLACEMENT}` on `{SURFACE}` against `{BACKGROUND}`. Camera `{CAMERA_ANGLE}`; lighting `{KEY_LIGHT}` plus `{FILL_RIM}`; physically plausible `{SHADOW_REFLECTION}`. Keep `{MARGIN}%` margin. Output `{ASPECT_RATIO}`, `{IMAGE_SIZE}`. Do not redesign, rotate unless requested, rewrite text, add props, or change any product feature.

### Variations and adaptation

Follow with one narrow instruction for softer shadow, alternate backdrop, or copy-safe framing. Use downstream compositing if packaging text must be legally exact.

### Constraints and common failures

Labels, small mechanisms, glossy reflections, and proportions are fragile.

### Quality checks

Overlay with `REF 1`; proof every visible character; inspect geometry, color, material, edge, and contact shadow.

## nb2-role-separated-composite — Multi-reference composite

- **Purpose:** Use Nano Banana 2 references without unintended trait transfer.
- **Category:** reference fidelity
- **Tags:** nano banana 2, multi-reference, composite, roles, consistency
- **Mode:** edit
- **Model/tool:** Nano Banana 2 / Gemini 3.1 Flash Image
- **Compatibility:** verified — official guide documents multiple reference processing and current reference limits.
- **Validation:** adapted template
- **Required inputs:** numbered assets, explicit roles, priority order
- **Reference assets:** `REF 1..N = declared roles`; stay within current surface limits
- **Sources:** SRC-19, SRC-09, SRC-13
- **Reuse:** Original synthesis. SRC-19 Google documentation is CC BY 4.0 (code Apache 2.0); SRC-09 is MIT—technique paraphrased; SRC-13 prompt rights are per-item/unstated—role-selection concept only.

### Prompt

Create `{TARGET_IMAGE}`. REFERENCE CONTRACT: `REF 1 = {ROLE_1}`; `REF 2 = {ROLE_2}`; `REF 3 = {ROLE_3}` [optional: add roles]. Conflict priority: `{PRIORITY_ORDER}`. Transfer only the assigned traits. LOCK `{LOCKS}` from `{TRUTH_REFERENCE}`. From style references transfer only `{PALETTE_LIGHT_TEXTURE_LAYOUT}`; do not transfer their people, products, logos, text, marks, or background objects. Scene `{SCENE}`; composition `{COMPOSITION}`; light `{LIGHTING}`; output `{ASPECT_RATIO}`, `{IMAGE_SIZE}`. No blending of identities or product designs.

### Variations and adaptation

Use fewer references when roles overlap. Split product, character, pose, background, and style into separate passes if the first result averages them.

### Constraints and common failures

Reference count limits are maxima, not a promise that all details remain equally strong. Trait leakage and averaging remain possible.

### Quality checks

Trace every important trait to its allowed reference and verify locks, forbidden transfers, scale, perspective, and lighting integration.

## nb2-character-continuity — Character-consistent scene

- **Purpose:** Preserve an approved adult character across a new shot or iterative edit.
- **Category:** character consistency
- **Tags:** nano banana 2, character, identity, continuity, iterative edit
- **Mode:** edit
- **Model/tool:** Nano Banana 2 / Gemini 3.1 Flash Image
- **Compatibility:** verified — official guide documents character reference consistency and multi-turn editing.
- **Validation:** adapted template
- **Required inputs:** authorized anchor image(s), continuity ledger, scene request
- **Reference assets:** `REF 1..N = authorized character anchors`; optional environment reference
- **Sources:** SRC-19, SRC-13, SRC-16
- **Reuse:** Original synthesis. SRC-19 Google documentation is CC BY 4.0 (code Apache 2.0); SRC-13 and SRC-16 prompt rights are unstated/per-author—concepts only, no prompt copied.

### Prompt

Using `REF 1` [optional: through `REF {N}`] as authorized identity anchors, create `{SCENE_ID}`: `{ACTION}` in `{SETTING}`. LOCK `{FACIAL_LANDMARKS}`, `{SKIN_TONE}`, `{HAIR}`, `{BODY_PROPORTIONS}`, `{DISTINCTIVE_MARKS}`, `{WARDROBE}`, and `{ACCESSORIES}`. Change only `{ALLOWED_CHANGES}`. Camera `{SHOT_ANGLE}`; pose `{POSE}`; lighting `{LIGHTING}`; medium/grade `{STYLE}`. Keep age clearly adult. Output `{ASPECT_RATIO}`, `{IMAGE_SIZE}`. Do not merge identities, mirror distinctive details, add accessories, alter clothing seams, or add text.

### Variations and adaptation

Maintain a written continuity ledger across turns. Edit from the approved anchor rather than a drifted descendant.

### Constraints and common failures

Likeness, accessory side, eye color, hairstyle, and wardrobe construction can drift across multiple turns.

### Quality checks

Compare landmarks and continuity ledger side by side; inspect hands, accessories, seams, proportions, lighting, and consent scope.

## nb2-background-edit — Narrow background replacement

- **Purpose:** Replace a background with perspective and light coherence while locking the subject.
- **Category:** editing and compositing
- **Tags:** nano banana 2, background, narrow edit, preserve subject
- **Mode:** edit
- **Model/tool:** Nano Banana 2 / Gemini 3.1 Flash Image
- **Compatibility:** verified — official guide documents conversational editing.
- **Validation:** adapted template
- **Required inputs:** source image, target environment, crop
- **Reference assets:** `REF 1 = source`; `[optional: REF 2 = background only]`
- **Sources:** SRC-19, SRC-02
- **Reuse:** Original synthesis. SRC-19 Google documentation is CC BY 4.0 (code Apache 2.0); SRC-02 has no explicit content license—paraphrase only.

### Prompt

Edit `REF 1`. Replace only the background with `{TARGET_ENVIRONMENT}` [optional: use `REF 2` only for background architecture/palette]. LOCK `{FOREGROUND_SUBJECT}` exactly: identity/design, pose, proportions, clothing/product features, placement, and fine edges. Match `{HORIZON}`, camera height, perspective, depth of field, light direction, color temperature, ambient spill, contact shadow, and reflections. Output `{ASPECT_RATIO}`, `{IMAGE_SIZE}`. Do not beautify, reposition, relabel, or otherwise change the foreground.

### Variations and adaptation

Make background replacement the first turn and a small relighting adjustment the second. Return to the source if subject drift appears.

### Constraints and common failures

Hair/glass edges, foreground color spill, feet contact, reflection logic, and face/label preservation need scrutiny.

### Quality checks

Difference-check foreground, inspect edges and contact at 100%, then verify perspective, light direction, reflections, and crop.

## nb2-exact-copy-layout — Exact-copy marketing layout

- **Purpose:** Use documented text rendering for a constrained layout while preserving approved wording.
- **Category:** typography and layout
- **Tags:** nano banana 2, text rendering, poster, infographic, exact copy
- **Mode:** generate or edit
- **Model/tool:** Nano Banana 2 / Gemini 3.1 Flash Image
- **Compatibility:** verified — official guide documents advanced text rendering; accuracy remains non-guaranteed.
- **Validation:** actually tested
- **Required inputs:** exact approved copy, hierarchy, palette, ratio/size
- **Reference assets:** `[optional: REF 1 = brand system]`; `[optional: REF 2 = product]`
- **Sources:** SRC-19, SRC-05, SRC-07
- **Reuse:** Original synthesis. SRC-19 Google documentation is CC BY 4.0 (code Apache 2.0); SRC-05 has no explicit content license—paraphrase only; SRC-07 is MIT—technique paraphrased.

### Prompt

Create a `{ASPECT_RATIO}` `{LAYOUT_TYPE}` for `{PURPOSE}`. Render ONLY these exact strings: eyebrow `{EYEBROW_EXACT}`; headline `{HEADLINE_EXACT}`; body `{BODY_EXACT}`; CTA `{CTA_EXACT}`; disclaimer `{DISCLAIMER_EXACT}`. Preserve spelling, case, punctuation, symbols, and currency. Hierarchy `{HIERARCHY}` on `{GRID}` with text-safe margins `{MARGINS}`. Typography properties `{TYPE_PROPERTIES}`; palette `{PALETTE}`; imagery `{IMAGERY}` at `{POSITION}`. No invented words, claims, prices, badges, logos, citations, or signatures. Output `{IMAGE_SIZE}`.

### Variations and adaptation

Shorten copy before generation only with owner approval. For legal/brand-critical output, generate a text-free background and typeset approved copy downstream.

### Constraints and common failures

Text rendering is improved, not infallible; small disclaimers, long paragraphs, and unusual symbols are high risk.

### Quality checks

Proof character by character, check approved claims, contrast, reading order, margins, and final-size legibility.

### Test evidence

- **Test date:** 2026-09-16
- **Exact model/provider ID:** `gemini-3.1-flash-image` (Nano Banana 2 via Antigravity image generation)
- **Mode and settings:** generate, aspect ratios 1:1 and 16:9, Amazon/website listing infographic banner
- **Reference disclosure:** Run 1 (1:1): none; Run 2 (16:9): REF 1 = bottle product identity (`Spunge_FishOilHighStrength_30_Product_1.jpg`)
- **Exact filled prompt:** Recorded in `memory/feedback-ledger.jsonl` events `fb-20260916-111819-001` and `fb-20260916-112236-003`
- **Runs:** attempted 2; passed 2
- **Observed result:** Successfully rendered high-contrast Swiss typography and structured graphic elements: `13X Bioavailability` headline, comparative benchmarking graphics (`1X vs 13X`), biological cell membrane barrier graphic, clear Swiss layout badges (`3X Smaller Particle Size`, `Zero Fishy Aftertaste`), and intact mandatory footnote (`*13X EPA bioavailability compared to ordinary fish oil.`).
- **Observed limitations:** Dense multi-paragraph body copy should not be pushed to raster generation; keeping copy to structured badge chips, bold headlines, and single-line footnotes achieved 100% legibility.
- **Artifacts:** `outputs/spunge/infographic/2026-09-16/fish_oil_infographic_1789537699887.jpg`, `outputs/spunge/infographic/2026-09-16/spunge_infographic_banner_1789537956962.jpg`
- **Reviewer:** User verified ("great work")
