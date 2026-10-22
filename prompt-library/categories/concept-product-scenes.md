# Concept product scenes

Added 2026-10-21 from a targeted source review. These are original production briefs, not transcriptions of the source prompts. All three remain untested; use the [model router](../../core/model-router.md), brand kit and surface spec at intake. For Nano Banana 2, also apply the [dedicated guide](../nano-banana-2/README.md).

## product-miniature-worksite — Product with a miniature worksite

- **Purpose:** Stage a product with small figures while controlling scale, contact and label visibility.
- **Category:** product photography
- **Tags:** miniature, diorama, worksite, scale, product, macro
- **Mode:** edit
- **Model/tool:** multimodal image editor
- **Compatibility:** unverified — requires reference editing; no model-specific result recorded.
- **Validation:** adapted template
- **Required inputs:** product reference, figure count, relative scale, action and prop inventory, support surface, palette, camera, lighting, clear zones, ratio
- **Reference assets:** `REF 1 = product`; optional `REF 2 = composition` only, with no product or branding transfer
- **Sources:** SRC-29 section 1.3, credited there to [Yaseen Khan Gul](https://x.com/YaseenK7212/status/2000568971951571200)
- **Reuse:** SRC-29 repository MIT; linked third-party prompt rights unresolved. Original workspace wording based on the general miniature-scene concept; no source prompt or preview copied into this template. Creator link retained for provenance.

### Prompt

Using REF 1, stage one exact `{PRODUCT}` with `{FIGURE_COUNT}` miniature figures. LOCK packaging shape, proportions, material, colors, label artwork and closure. Support the product on `{SURFACE}`. Each figure is approximately `{FIGURE_HEIGHT_AS_FRACTION_OF_PRODUCT}` of the product height; maintain that scale throughout. Assign only these actions and props: `{FIGURE_ACTION_AND_PROP_MAP}`. Show believable hand/tool contact and support for every figure; keep `{LABEL_AND_COPY_CLEAR_ZONES}` unobstructed. Camera `{CAMERA}`; lighting `{LIGHTING}`; palette `{APPROVED_PALETTE}`. [optional: REF 2 controls arrangement only.] Keep the label and primary action in focus. Render no additional copy. Compose for `{ASPECT_RATIO}`; add no unlisted objects, redesigned packaging or implied manufacturing claims.

### Variations and adaptation

Use a tabletop inspection or display-building scene with a bounded inventory. Treat a miniature worksite as a visual metaphor; if a real process must be represented, require an approved process brief. Keep liquid, capsule and food contact out of the scene unless explicitly part of the authorized concept.

### Constraints and common failures

Figures drift in size, tools merge into surfaces, and scaffolds hide labels. Correct one contact or scale error from the clean anchor. This scene is unsuitable for a marketplace main image requiring a plain product-only treatment.

### Quality checks

Count figures and props; compare scale ratios; inspect support, hands and tools at 100%; compare product against REF 1; verify clear zones and absence of unapproved process or benefit implications.

## product-controlled-splash — Grounded product with a controlled splash

- **Purpose:** Add a frozen liquid event without losing product geometry, support or label legibility.
- **Category:** product photography
- **Tags:** splash, liquid, beverage, food, frozen motion, occlusion, product
- **Mode:** edit
- **Model/tool:** multimodal image editor
- **Compatibility:** unverified — reference fidelity and liquid geometry require local evaluation.
- **Validation:** adapted template
- **Required inputs:** product reference, approved liquid description, splash path and depth order, protected regions, surface, lighting, palette, allowed props or none, ratio
- **Reference assets:** `REF 1 = product`
- **Sources:** SRC-29 section 2.13, credited there to [ttmouse](https://x.com/ttmouse/status/1999892192790495237)
- **Reuse:** SRC-29 repository MIT; linked third-party prompt rights unresolved. General splash staging paraphrased into original workspace controls; no source prompt, slogan, logo or preview copied into this template.

### Prompt

Edit REF 1 into a studio scene with one `{PRODUCT}` and a frozen splash of `{APPROVED_LIQUID_DESCRIPTION}`. LOCK product geometry, packaging color, label, logo and closure state. Ground the product on `{SUPPORT_SURFACE}` with a contact shadow. Route the splash along `{SPLASH_PATH}`; its front/behind relationship is `{DEPTH_ORDER}`. Keep `{PROTECTED_REGIONS}` fully visible and `{COPY_SAFE_ZONE}` clear. Use `{LIGHTING}` and `{APPROVED_PALETTE}` with highlights that retain liquid translucency and label contrast. Add only `{ALLOWED_PROPS_OR_NONE}`. Render no additional copy. Compose for `{ASPECT_RATIO}`. Preserve the product support and sealed/open state; add no new ingredients, contents or benefits.

### Variations and adaptation

For an externally staged water splash, record that it is a scene effect rather than product contents. For food, the liquid and garnish inventory must come from the brief. Omit droplets on packaging when they could suggest unsupported water resistance or cold-storage suitability.

### Constraints and common failures

Liquid can hide copy, change bottle contours, appear to pass through sealed packaging, or lose a coherent source and direction. Choose a simple splash path before adding secondary droplets; do not combine competing motion effects.

### Quality checks

Check the protected regions, liquid depth order, edge continuity, package closure and support; inspect reflections and droplets; compare label and silhouette with REF 1; confirm all ingredients and implied properties are approved.

## ad-screen-portal-composite — Product interaction across a screen plane

- **Purpose:** Create a deliberate screen-crossing concept with explicit scene layers and a single permitted boundary crossing.
- **Category:** advertising and social
- **Tags:** screen, portal, composite, occlusion, device, product, surreal
- **Mode:** edit
- **Model/tool:** multimodal image editor
- **Compatibility:** unverified — multi-reference compositing is a task requirement, not a tested capability claim.
- **Validation:** adapted template
- **Required inputs:** product reference, approved screen scene, generic device description, crossing element and path, landing point, depth order, scene surface, light, palette, clear zone, ratio
- **Reference assets:** `REF 1 = product`; `REF 2 = background` for the screen interior only
- **Sources:** SRC-29 section 2.14, credited there to [Yaseen Khan Gul](https://x.com/YaseenK7212/status/1996559154240967144)
- **Reuse:** SRC-29 repository MIT; linked third-party prompt rights unresolved. Screen-plane concept only; this is an original workspace brief with no copied prompt, device branding, person or preview artwork.

### Prompt

Create one conceptual ad using the exact `{PRODUCT}` from REF 1. LOCK its geometry, colors, label and functional parts. Place an unbranded `{DEVICE_DESCRIPTION}` on `{SURFACE}`; fit REF 2 inside its screen as background artwork, preserving its content except at `{AUTHORIZED_INTERACTION_REGION}`. Only `{CROSSING_ELEMENT}` crosses the screen plane, along `{CROSSING_PATH}`, terminating at `{LANDING_POINT}`. Follow this front-to-back occlusion order: `{OCCLUSION_MAP}`. All other objects remain in their assigned scene. Match perspective and `{LIGHTING}` across the boundary; keep a readable device rim and supported product. Palette `{APPROVED_PALETTE}`; leave `{COPY_SAFE_ZONE}` empty; compose for `{ASPECT_RATIO}`. Add no extra text, UI, logos, people or product claims.

### Variations and adaptation

Use a ribbon, liquid stream or other brief-approved crossing element. Define one entry point and one endpoint before generation. For exact UI or artwork, assemble the approved screen asset downstream and mask only the authorized crossing region.

### Constraints and common failures

Devices bend, screen artwork redraws, crossing elements duplicate, and front/behind relationships reverse. Start with a simple scene and check the boundary at full size. The intended surreal crossing does not authorize changing product behavior elsewhere.

### Quality checks

Trace the crossing continuously from source to endpoint; check its count and occlusion order; inspect device edges and screen perspective; compare both references; verify product support, empty copy zone and absence of invented UI or claims.
