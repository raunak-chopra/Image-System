# Image editing, compositing, background replacement, and restoration

## edit-background-replace — Perspective-matched background replacement

- **Purpose:** Replace only the background while preserving the foreground subject.
- **Category:** editing and compositing
- **Tags:** background replacement, preserve subject, relight, composite
- **Mode:** edit
- **Model/tool:** multimodal image editor
- **Compatibility:** unverified — general template.
- **Validation:** adapted template
- **Required inputs:** source image, target environment, locked subject list
- **Reference assets:** `REF 1 = source image`; `[optional: REF 2 = target environment]`
- **Sources:** SRC-02, SRC-10, SRC-17, SRC-18
- **Reuse:** Original synthesis. SRC-02 has no explicit content license—paraphrase only; SRC-10 mixed-license—evidence method only; SRC-17 is MIT—workflow idea only; SRC-18 data is mixed-license—vocabulary concept only.

### Prompt

Edit `REF 1`. Replace only the background with `{TARGET_ENVIRONMENT}` [optional: guided by `REF 2` for environment only]. LOCK the foreground `{SUBJECT}` exactly: identity/design, pose, proportions, clothing/product details, edges, and placement. Match horizon, camera height, perspective, depth of field, light direction, color temperature, ambient spill, contact shadow, and reflections so the composite is physically coherent. Output `{ASPECT_RATIO}` with `{CROP_INSTRUCTION}`. Do not alter the locked subject or add objects/text.

### Variations and adaptation

If large relighting is required, first replace the background, then request a separate narrow relight pass. For hair/glass, call out fine edge transmission and no halos.

### Constraints and common failures

Haloed edges, changed faces/labels, mismatched horizon, floating feet, and conflicting light are common.

### Quality checks

Compare locked subject pixels/features, inspect edges at 100%, contact points, perspective, shadow direction, spill light, and reflections.

## edit-object-remove — Local object removal and reconstruction

- **Purpose:** Remove a named distraction while leaving the rest unchanged.
- **Category:** editing and compositing
- **Tags:** object removal, cleanup, inpainting, narrow edit
- **Mode:** edit
- **Model/tool:** multimodal image editor
- **Compatibility:** unverified — general template.
- **Validation:** adapted template
- **Required inputs:** source image, exact target and boundaries
- **Reference assets:** `REF 1 = source image`
- **Sources:** SRC-02, SRC-07, SRC-10, SRC-18
- **Reuse:** Original synthesis. SRC-02 has no explicit content license—paraphrase only; SRC-07 is MIT—technique paraphrased; SRC-10 mixed-license—unchanged-region method only; SRC-18 data is mixed-license—no entry copied.

### Prompt

In `REF 1`, remove only `{TARGET_OBJECT}` located `{LOCATION}`. Reconstruct the occluded `{BACKGROUND_MATERIAL_OR_PATTERN}` using neighboring perspective, texture, lighting, and repetition. LOCK every other pixel-level element as closely as possible: crop, people, faces, products, architecture, color grade, shadows, and text. Do not clean up, beautify, reposition, or add anything else. Same dimensions and framing.

### Variations and adaptation

For several distractions, remove one per turn. When a repeated pattern is involved, describe its spacing and direction.

### Constraints and common failures

Models may alter nearby objects, smear patterns, clone textures, or erase shadows that belong to retained subjects.

### Quality checks

Difference-check outside the target mask, inspect pattern continuity and noise/grain, and verify retained shadows/text/faces.

## edit-restoration — Conservative photograph restoration

- **Purpose:** Repair physical damage and tonal fading without rewriting history.
- **Category:** restoration
- **Tags:** restoration, scratches, fading, archival, face preservation
- **Mode:** edit
- **Model/tool:** multimodal image editor
- **Compatibility:** unverified — generated detail is reconstruction, not recovered evidence.
- **Validation:** adapted template
- **Required inputs:** highest-quality scan, known color/context facts, intended output
- **Reference assets:** `REF 1 = original scan`; `[optional: REF 2 = same subject/scene corroboration]`
- **Sources:** SRC-02, SRC-06
- **Reuse:** Original synthesis. SRC-02 and SRC-06 have no explicit content license—paraphrase only.

### Prompt

Conservatively restore `REF 1`. Repair only `{DAMAGE_LIST}`; correct `{TONAL_OR_COLOR_ISSUE}` while preserving original composition, faces, expressions, body proportions, clothing, objects, architecture, film grain, and period character. Reconstruct missing areas only from adjacent evidence or `REF 2`; where evidence is insufficient, prefer subtle neutral reconstruction over invented detail. `{COLORIZATION_INSTRUCTION}`. Do not modernize, beautify, sharpen into artificial texture, add people/objects, or rewrite signs. Keep original aspect ratio.

### Variations and adaptation

Separate repair, tonal correction, and optional colorization into stages. Keep an untouched scan and label colorization as interpretive.

### Constraints and common failures

Upscaling invents detail; faces and text can be rewritten; aggressive denoise removes photographic texture; colorization is speculative.

### Quality checks

Compare facial landmarks and historical details, inspect repaired boundaries, preserve grain, label conjectural color, and retain the original scan.

## edit-selective-style-material — Selective material or style edit

- **Purpose:** Change the appearance of one bounded region while preserving its geometry and all unrelated content.
- **Category:** editing and compositing
- **Tags:** selective edit, material override, style transfer, mask, preserve geometry
- **Mode:** edit
- **Model/tool:** multimodal image editor
- **Compatibility:** unverified — general template; masking or selection support improves control.
- **Validation:** adapted template
- **Required inputs:** source image, exact target region, target material/style, preserve list
- **Reference assets:** `REF 1 = source image`; `[optional: REF 2 = material/style properties only]`
- **Sources:** SRC-06, SRC-09, SRC-10, SRC-16
- **Reuse:** Original synthesis. SRC-06 and SRC-16 have no explicit content license—paraphrase/concept only; SRC-09 is MIT—technique paraphrased; SRC-10 mixed-license—narrow-edit evidence only.

### Prompt

Edit `REF 1` only inside `{TARGET_REGION}`. Change `{CURRENT_APPEARANCE}` to `{TARGET_MATERIAL_OR_STYLE}` while preserving the target's exact silhouette, dimensions, seams, contours, pose and functional details. Match `{MATERIAL_PROPERTIES}`—roughness, reflectivity, translucency, grain and edge behavior—to the existing light direction, perspective, shadows and environment. If supplied, use `REF 2` only for `{ALLOWED_STYLE_PROPERTIES}`; copy none of its subject, text, logos or composition. LOCK everything outside the target region, including `{LOCKED_ELEMENTS}`. Same crop and dimensions; add nothing else.

### Variations and adaptation

For global style transfer, keep subject identity/composition/content locked and change only medium, line, palette and texture. For clothing color, preserve weave, folds, seams, highlight values and skin boundaries.

### Constraints and common failures

Style may bleed outside the mask; geometry can change; material edits can erase labels, seams or realistic shadow behavior.

### Quality checks

Difference-check outside the target; compare silhouette and landmarks; inspect seams/labels/edges; verify physically coherent material response and no transferred literal content.
