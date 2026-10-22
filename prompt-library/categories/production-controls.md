# Production controls

## edit-anchor-rebase — Reapply approved changes from a clean anchor

- **Purpose:** Recover an edit that has drifted while retaining a written list of accepted changes.
- **Category:** editing and compositing
- **Tags:** drift, anchor, rebase, revision, preservation, local edit
- **Mode:** edit
- **Model/tool:** multimodal image editor
- **Compatibility:** unverified — preservation must be inspected for the actual model and surface.
- **Validation:** adapted template
- **Required inputs:** clean approved anchor, accepted change list, current bounded change, locked elements, ratio
- **Reference assets:** REF 1 = clean anchor; optional REF 2 = composition only, cropped to the relevant accepted placement
- **Sources:** SRC-19, SRC-27
- **Reuse:** Original synthesis. SRC-19 official docs — edit capability paraphrased; SRC-27 paper abstract — drift research idea only, no paper prose or code copied.

### Prompt

Edit REF 1 as the clean starting image for {DELIVERY_PURPOSE}. LOCK {LOCKED_ELEMENTS}. Apply these previously approved changes: {ACCEPTED_CHANGE_LIST}. Then make only this additional change: {CURRENT_CHANGE_AND_REGION}. Preserve the anchor's {PRESERVED_DETAIL_LIST}, crop and color treatment except where explicitly changed above. Match {LIGHT_PERSPECTIVE_MATERIAL_REQUIREMENTS}. Output {ASPECT_RATIO}. Add no unrequested objects, text, redesigns or beautification.

### Variations and adaptation

Use `none` for accepted changes on a first edit. Optional REF 2 can describe an accepted placement; declare it composition-only so degraded label, face or texture detail cannot become truth. If the accepted list becomes complex, create a new anchor only after complete QA. For exact unchanged pixels, use a mask/compositing tool rather than relying on generation.

### Constraints and common failures

Rebasing may lose earlier edits unless they are explicitly recorded. Preservation language cannot guarantee pixel identity. Do not repeatedly regenerate a failed locked label; composite approved artwork.

### Quality checks

Compare the anchor and output side by side at 100%. Verify every accepted change, the current change, label/face/texture fidelity, unchanged areas and returned dimensions. Record parent anchor and rejection reason.

## product-lighting-ablation — Independent product lighting trials

- **Purpose:** Select lighting through independently generated trials while holding camera, product and layout fixed.
- **Category:** product photography
- **Tags:** lighting, ablation, material, studio, comparison, contact sheet
- **Mode:** edit
- **Model/tool:** multimodal image editor
- **Compatibility:** unverified — equal settings and reference handling vary by surface.
- **Validation:** adapted template
- **Required inputs:** product truth image, geometry and label locks, camera, placement, backdrop, palette, one lighting setup per trial, ratio
- **Reference assets:** REF 1 = product identity
- **Sources:** SRC-14, SRC-19
- **Reuse:** Original synthesis. SRC-14 MIT — style-variable structure paraphrased; SRC-19 official docs — specific visual instructions paraphrased. No source prompt copied.

### Prompt

Create one studio image of {PRODUCT} using REF 1 for product truth. LOCK {PRODUCT_GEOMETRY_LABEL_COLOR_AND_PARTS}. Camera {FIXED_CAMERA}; product placement {FIXED_PLACEMENT}; backdrop and surface {FIXED_BACKDROP_AND_SURFACE}; palette {APPROVED_PALETTE}. Trial lighting: {ONE_LIGHTING_SETUP}. Material behavior {MATERIAL_BEHAVIOR}. Keep the label readable, contact points grounded and shadow direction consistent with the trial setup. Reserve {COPY_SAFE_ZONE}. Output {ASPECT_RATIO}. Add no props, duplicate products or new text.

### Variations and adaptation

Run a separate image from the same truth reference for each light setup; change only ONE_LIGHTING_SETUP. Keep the model and controls constant. Assemble the contact sheet downstream with anonymous trial IDs; a generated multi-panel grid is not evidence of independent trials.

### Constraints and common failures

New camera angles, props, color grades or layouts confound the lighting comparison. Randomness remains; repeat finalists before choosing. Material behavior describes the actual product, not an invented property.

### Quality checks

First reject product/label/geometry failures. Then compare material readability, glare, grounding and layout using the same rubric. Record all attempts, including rejected trials. This assesses visual selection, not advertising performance.
