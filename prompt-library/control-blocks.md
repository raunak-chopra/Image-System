# Reusable prompt control blocks

Original, untested synthesis: SRC-14 MIT structure ideas only; SRC-19 official documentation, paraphrased; SRC-24 official prompt guide, paraphrased; SRC-27 paper abstract, research idea only. Append only blocks needed by the selected template. These are controls, not claims of improved model performance.

## Style contract

Keep this as a brief-side card, then insert the approved visual properties into the template's visual-treatment field:

```text
STYLE CONTRACT: medium {MEDIUM}; hierarchy {HIERARCHY}; palette {APPROVED_PALETTE}; typography {APPROVED_TYPE}; lighting {LIGHTING}; texture {TEXTURE}; spacing {SPACING}; transferable traits from REF {STYLE_REF_NUMBER}: {ALLOWED_TRAITS}. Replace all reference subject matter with {OUR_SUBJECT}. Brand/product truth has priority over style.
```

Record a card version with each run. Reuse it across a campaign without importing the reference's literal headline or product. Name a font as intent; inspect the rendered type and composite the actual font when exactness matters.

Workspace observation, 2026-10-11 (SRC-28): percentage bounds and type-size instructions did not ensure exact typography placement. Remove conflicting overlap clauses before generation; inspect the result rather than accepting the written bounds as fulfilled.

## Spatial contract

```text
COMPOSITION: {SUBJECT} occupies {SUBJECT_BOUNDS_PERCENT} of the canvas. Reserve {COPY_ZONE_BOUNDS_PERCENT} for approved copy. All coordinates are percentages from the top-left. Keep {CRITICAL_FEATURES} within {SAFE_ZONE_BOUNDS_PERCENT}. Use {FOCAL_POINT} as the primary focal point and {READING_ORDER} as the hierarchy.
```

Read bounds from the actual surface spec; no universal safe-zone percentage. For another ratio, recompose and recheck, rather than stretching the finished design.

For a supplied product image, distinguish scene colors from locked packaging/SKU accents; the scene palette must not recolor the product. A bounded object inventory can prevent unrequested background props. SRC-28's corrected lifestyle trial removed foliage, but still missed its exact vertical coordinates.

## Material and light contract

```text
MATERIAL: {MATERIAL_FINISH} with {SURFACE_DETAIL}. KEY: {LIGHT_DIRECTION_SIZE_AND_SOFTNESS}; fill {FILL}; contact {CONTACT_POINTS}; reflections {REFLECTION_BEHAVIOR}. Preserve approved product color and readable label while applying these scene lighting changes.
```

Use observable terms such as directional brushed grain, soft broad highlight, translucent edge transmission, or matte paper texture. Remove irrelevant clauses and competing lights.

## Text production contract

```text
TEXT: render only the approved strings {EXACT_STRINGS_BY_ZONE}, verbatim. Hierarchy {TYPE_HIERARCHY}. Reserve {EMPTY_COMPOSITING_ZONES} as clean space for downstream type. Product labels retain their truth reference. Add no other readable text.
```

Use one route per zone: generated text or blank space for compositing. Proof copy before image generation. Dense type, exact fonts, legal lines, and exact logos can go directly to compositing when their fidelity is mandatory.

## Prompt cleanup

Resolve conflicting clauses before generation: one task, one controlling truth source per locked property, one intended camera, one coherent light arrangement. Replace vague quality slogans with observable requirements. Keep necessary constraints; do not assume a word limit or JSON format is universally better. Save both the reusable template ID and the filled prompt.

## Reference and surface preparation

The SRC-30 comments add two explicit preparation routes: [reference observation](categories/brief-preparation.md#brief-reference-observation) and [model/surface adaptation](categories/brief-preparation.md#brief-model-surface-adapter). Their output is a brief/prompt, not an image. Separate observations from guesses; a reference image does not reveal its original prompt. Keep approved facts and reference roles stable while adapting only supported syntax and settings. Community advice about JSON, negatives or denoising is tool-dependent, with no universal numeric default. SRC-30 advice is paraphrased; SRC-12 MIT workflow concepts only; no source prompt/comment text copied into these controls.
