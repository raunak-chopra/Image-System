# Advertising, social media, and campaign visuals

## ad-modular-campaign — Modular campaign key visual

- **Purpose:** Build a campaign system that can crop across channels.
- **Category:** advertising and social
- **Tags:** campaign, key visual, modular, copy-safe, art direction
- **Mode:** generate
- **Model/tool:** text-to-image model
- **Compatibility:** unverified — general template.
- **Validation:** adapted template
- **Required inputs:** offer/objective, audience, brand palette, channel set, approved claims
- **Reference assets:** `[optional: REF 1 = product identity]`; `[optional: REF 2 = brand style]`
- **Sources:** SRC-07, SRC-14, SRC-18
- **Reuse:** Original synthesis. SRC-07 and SRC-14 are MIT—techniques paraphrased; SRC-18 prompt data is mixed-license—taxonomy/vocabulary concept only.

### Prompt

Create a campaign key visual for `{BRAND_OR_PRODUCT}` communicating `{SINGLE_MESSAGE}` to `{AUDIENCE}`. Hero subject: `{SUBJECT}` performing `{ACTION}` in `{SETTING}`. Visual idea: `{CONCEPTUAL_METAPHOR}` expressed through `{VISUAL_DEVICE}`. Use brand palette `{PALETTE}`, `{LIGHTING}`, and `{STYLE_PROPERTIES}`. Compose a strong focal point inside the central safe zone, with uncluttered copy space at `{COPY_ZONE}` that survives `{TARGET_CROPS}`. [optional: Reproduce `REF 1` exactly; use `REF 2` only for visual tone.] Add no text, logos, or claims; those will be typeset downstream. Master output `{MASTER_RATIO}`.

### Variations and adaptation

Generate subject-left and subject-right versions. Keep the concept and lighting constant while adapting framing for 1:1, 4:5, 9:16, and 16:9.

### Constraints and common failures

Overloaded metaphors weaken comprehension; generated logos/copy may be wrong; naive crops cut faces or products.

### Quality checks

Test message recognition at thumbnail size, all crop overlays, brand palette, product lock, and room for real copy/disclaimers.

## ad-ugc-opening-frame — Controlled UGC-style opening frame

- **Purpose:** Create an authentic creator-style ad frame while locking the featured product or screen.
- **Category:** advertising and social
- **Tags:** UGC, creator, phone, app screen, social ad
- **Mode:** edit
- **Model/tool:** multimodal image editor
- **Compatibility:** unverified — source examples exist for other models; not independently tested here.
- **Validation:** adapted template
- **Required inputs:** product/screen reference, creator profile, setting, platform ratio
- **Reference assets:** `REF 1 = exact product or app screen`; `[optional: REF 2 = creator identity with consent]`
- **Sources:** SRC-06, SRC-07, SRC-08
- **Reuse:** Original synthesis. SRC-06 has no explicit content license—paraphrase only; SRC-07 is MIT—technique paraphrased; SRC-08 is AGPL-3.0—metadata idea only, no code copied.

### Prompt

Create a believable `{PLATFORM}` UGC opening frame in `{ASPECT_RATIO}`. `{CREATOR_DESCRIPTION}` is in `{HOME_OR_REAL_WORLD_SETTING}`, holding/using the exact `{PRODUCT_OR_DEVICE}` from `REF 1` toward the camera. LOCK the product design and every visible screen/label element; keep `REF 2` likeness only if supplied and authorized. Camera language: `{PHONE_CAMERA_LOOK}`, `{FRAMING}`, natural `{AVAILABLE_LIGHT}`, modest depth of field, credible skin texture, slightly imperfect lived-in details. Expression/action: `{ACTION}`. Leave `{COPY_SAFE_AREA}` clear. No invented testimonials, claims, UI, or captions.

### Variations and adaptation

Vary creator, pose, and room while holding screen/product, camera distance, and copy-safe region constant for a test matrix.

### Constraints and common failures

Screens, fingers, grip, eye line, and logos are fragile. “Authentic” should not mean low resolution or deceptive endorsement.

### Quality checks

Inspect screen at 100%, hand-device contact, identity consent/lock, disclosure area, realistic camera artifacts, and claim neutrality.

## ad-offer-layout — Promotion layout with exact copy zones

- **Purpose:** Generate a structured promotional graphic with tightly controlled text hierarchy.
- **Category:** advertising and social
- **Tags:** offer, promotion, typography, layout, exact copy
- **Mode:** generate
- **Model/tool:** text-capable image model
- **Compatibility:** unverified — text rendering varies by model and surface.
- **Validation:** adapted template
- **Required inputs:** exact approved copy, product/subject, brand tokens, ratio
- **Reference assets:** `[optional: REF 1 = product]`; `[optional: REF 2 = layout reference]`
- **Sources:** SRC-05, SRC-07, SRC-10, SRC-14
- **Reuse:** Original synthesis. SRC-05 and SRC-06 have no explicit content license—paraphrase only; SRC-07 and SRC-14 are MIT—techniques paraphrased; SRC-10 mixed-license—evidence method only.

### Prompt

Design a `{ASPECT_RATIO}` promotional visual for `{BRAND}` using `{LAYOUT_SYSTEM}`. Hierarchy: eyebrow `{EYEBROW_EXACT}`, headline `{HEADLINE_EXACT}`, offer `{OFFER_EXACT}`, CTA `{CTA_EXACT}`, disclaimer `{DISCLAIMER_EXACT}`. Render only those quoted strings, preserving spelling, case, punctuation, and currency. Place `{PRODUCT_OR_SUBJECT}` at `{SUBJECT_POSITION}` and text within `{TEXT_SAFE_ZONE}`. Use `{TYPE_PROPERTIES}`, brand colors `{PALETTE}`, `{GRAPHIC_MOTIFS}`, and `{LIGHTING_OR_TEXTURE}`. Keep the disclaimer readable and do not invent badges, prices, logos, or claims.

### Variations and adaptation

For production, request a text-free background plus a layout proof, then typeset approved copy in design software. Use high-contrast, short copy for in-model text.

### Constraints and common failures

Letter substitution, punctuation drift, crowding, low contrast, and fake badges are common.

### Quality checks

Proof every character, compare approved claim language, verify hierarchy and minimum readable size, and test crop/platform overlays.
