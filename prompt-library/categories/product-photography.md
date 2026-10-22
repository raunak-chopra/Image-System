# Product photography, packshots, and lifestyle imagery

## product-white-packshot — Accuracy-first white-background packshot

- **Purpose:** Convert an approved product reference into a clean catalog hero.
- **Category:** product photography
- **Tags:** packshot, ecommerce, white background, label lock, catalog
- **Mode:** edit
- **Model/tool:** multimodal image editor
- **Compatibility:** unverified — general cross-model template; verify the chosen tool supports image editing.
- **Validation:** adapted template
- **Required inputs:** product reference, delivery ratio, background specification
- **Reference assets:** `REF 1 = product identity and label truth`
- **Sources:** SRC-02, SRC-06, SRC-07, SRC-10, SRC-28
- **Reuse:** Original synthesis. SRC-02 and SRC-06 have no explicit content license—paraphrase only; SRC-07 is MIT—technique paraphrased; SRC-10 is mixed MIT/CC BY 4.0—no source entry copied; SRC-28 owner-supplied reference and workspace run records—private benchmark findings only.

### Prompt

Edit `REF 1` into a premium ecommerce packshot of the exact same `{PRODUCT}`. Preserve as LOCKED: silhouette, dimensions, cap/closure, material color, finish, logo artwork, label text, label placement, and all distinctive details. Place it centered on `{BACKGROUND_COLOR}` with `{MARGIN_PERCENT}%` clear margin, camera at `{CAMERA_ANGLE}`, soft large-source studio lighting from `{LIGHT_DIRECTION}`, controlled highlights, and a physically plausible contact shadow. Output `{ASPECT_RATIO}` with no props and no added text. Change only the setting and lighting; do not redesign the product.

### Variations and adaptation

Use a faint surface reflection for glass or polished metal; omit it for matte paper, cloth, or marketplace rules. Replace centered framing with a left/right copy-safe composition for banners.

For a main-image brief that requires at least 85% fill, state the whole-product vertical bounds and frame occupancy together, rather than relying on a margin alone. In SRC-28's opaque built-in surface trial, the baseline measured 78% fill and the bounds-based revision measured 88%, 90%, 92% over three attempts after export. All raw outputs were only 1254x1254. This is scoped framing evidence, not authenticated artwork preservation or cross-model validation; see the [benchmark](../../outputs/_tests/prompt-upgrade/2026-10-11/README.md).

### Constraints and common failures

Models may rewrite labels, alter package proportions, invent embossing, or produce floating shadows. Exact regulated packaging may require downstream compositing.

### Quality checks

Overlay against `REF 1`; inspect label character-by-character, silhouette, color, edge cleanup, reflection continuity, and shadow contact.

## product-material-hero — Material-led studio hero

- **Purpose:** Create a high-impact product hero that demonstrates material behavior.
- **Category:** product photography
- **Tags:** hero, materials, studio, glass, metal, texture
- **Mode:** edit
- **Model/tool:** multimodal image editor
- **Compatibility:** unverified — depends on reference fidelity of the selected model.
- **Validation:** adapted template
- **Required inputs:** product reference, material description, campaign palette
- **Reference assets:** `REF 1 = product identity`; `[optional: REF 2 = material/lighting reference]`
- **Sources:** SRC-07, SRC-10, SRC-14, SRC-18
- **Reuse:** Original synthesis. SRC-07 and SRC-14 are MIT—techniques paraphrased; SRC-10 has mixed MIT/CC BY 4.0 terms—no entry copied; SRC-18 code is MIT but prompt data is mixed-license—vocabulary concept only.

### Prompt

Using `REF 1` as the identity source, create a studio hero for `{PRODUCT}`. LOCK the product geometry, branding, label, color, and functional parts. Set it on `{SURFACE_MATERIAL}` against `{BACKDROP}`. Light with `{KEY_LIGHT}`, `{RIM_OR_FILL}`, and controlled negative fill so `{PRIMARY_MATERIAL}` reads as `{MATERIAL_BEHAVIOR}`. Compose at `{CAMERA_ANGLE}` with `{FOCAL_LENGTH_LOOK}`, `{DEPTH_OF_FIELD}`, and copy-safe negative space on `{SAFE_AREA}`. Palette: `{PALETTE}`. Output `{ASPECT_RATIO}`. No invented accessories, duplicate products, or text outside the original packaging.

### Variations and adaptation

For translucent products, specify transmission and caustics; for brushed metal, specify directional grain; for fabric, preserve weave without plastic smoothing.

### Constraints and common failures

Excessive gloss can erase label legibility; dramatic perspectives can distort geometry; stylized light may recolor the product.

### Quality checks

Check brand color, material response, focal hierarchy, copy-safe region, readable packaging, and physically consistent highlights/shadows.

## product-lifestyle-context — Plausible lifestyle placement

- **Purpose:** Place an approved product in a credible use context without product drift.
- **Category:** product photography
- **Tags:** lifestyle, in-context, compositing, campaign, realism
- **Mode:** edit
- **Model/tool:** multimodal image editor
- **Compatibility:** unverified — general template.
- **Validation:** adapted template
- **Required inputs:** product reference, audience, context, channel ratio
- **Reference assets:** `REF 1 = product identity`; `[optional: REF 2 = environment style only]`
- **Sources:** SRC-02, SRC-06, SRC-09, SRC-29 section 2.3 (foreground beauty product)
- **Reuse:** Original synthesis. SRC-02 and SRC-06 have no explicit content license—paraphrase only; SRC-09 is MIT—technique paraphrased; SRC-29 repository MIT with unresolved third-party prompt rights—general staging concept only, no prompt or preview copied.

### Prompt

Place the exact `{PRODUCT}` from `REF 1` in `{ENVIRONMENT}` during `{TIME_OF_DAY}`, being used or positioned in a physically plausible way by/near `{USER_OR_CONTEXT}`. LOCK product design, scale cues, colors, logo, packaging copy, and orientation unless `{ALLOWED_ORIENTATION_CHANGE}`. Match perspective, light direction, color temperature, reflections, and contact shadows between product and scene. Art direction: `{MOOD}`, `{PALETTE}`, `{CAMERA_LANGUAGE}`. Reserve `{SAFE_AREA}` for downstream copy. Output `{ASPECT_RATIO}`. Do not invent claims, alter the product, or add readable text.

### Variations and adaptation

Use an environment reference only for mood/layout, never product truth. For food/cosmetics, specify sanitary, appetizing but realistic texture and avoid impossible ingredient depictions.

For a product-forward beauty portrait, replace the optional environment reference with `REF 2 = identity` when an authorized person reference is supplied. Add their face, skin tone and distinctive features to the locks. Keep the entire product and label sharp in the foreground, the face in a softer background plane, and fingers away from essential label copy. Specify a plausible grip, product-to-hand scale and the allowed focus falloff; do not use wide-angle distortion to enlarge or redesign the package. SRC-29 section 2.3 credits [Özge](https://x.com/astronomerozge1/status/2005967732781576583); its numeric identity-lock setting is not a verified provider control.

### Constraints and common failures

Scale, hand contact, reflections, labels, and occlusion boundaries often fail. Product use must not imply an unapproved benefit.

### Quality checks

Verify product overlay fidelity, believable scale/contact, claim neutrality, lighting integration, occlusion edges, and crop safety.

## product-flat-lay — Controlled overhead flat lay

- **Purpose:** Arrange products, food, or apparel on one plane with consistent scale and material truth.
- **Category:** product photography
- **Tags:** flat lay, overhead, arrangement, fashion, food, ecommerce
- **Mode:** generate or edit
- **Model/tool:** text-to-image or multimodal image model
- **Compatibility:** unverified — general cross-model template.
- **Validation:** adapted template
- **Required inputs:** item list or references, surface, spacing rule, ratio
- **Reference assets:** `[optional: REF 1..N = exact item identity]`
- **Sources:** SRC-03, SRC-06, SRC-09, SRC-15
- **Reuse:** Original synthesis. SRC-03 and SRC-06 have no explicit content license—paraphrase only; SRC-09 is MIT—technique paraphrased; SRC-15 has no license—concept only, no prompt copied.

### Prompt

Create a true overhead flat lay of `{ITEMS}` on `{SURFACE}`. If references are supplied, preserve each referenced item's exact silhouette, colors, graphics, labels, seams, and material. Arrange items using `{LAYOUT_LOGIC}` with `{SPACING}` between objects, no accidental overlaps, no floating edges, and no perspective tilt. Lighting: one broad soft source from `{LIGHT_DIRECTION}`, gentle directional shadows, controlled reflections, and realistic `{KEY_MATERIAL}` texture. Add only `{ALLOWED_PROPS}`. Palette `{PALETTE}`; output `{ASPECT_RATIO}` with `{SAFE_AREA}` left clear. No invented brand text or duplicate items.

### Variations and adaptation

For fashion, specify garment folds and complete silhouettes; for food, specify freshness and sanitary presentation; for a catalog grid, lock cell size, item scale, baseline, and light across variants.

### Constraints and common failures

Models may introduce oblique perspective, merge objects, rewrite labels, repeat items, or turn fabric/food into plastic surfaces.

### Quality checks

Count every item, inspect identity and text, confirm a perpendicular camera plane, consistent scale/spacing, believable contact shadows, and material-specific texture.
