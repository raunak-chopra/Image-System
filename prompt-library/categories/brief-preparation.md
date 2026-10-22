# Reference and model-aware brief preparation

These are assistant preparation prompts, not image-generator requests. They produce a reviewed brief or a tool-adapted prompt before the selected image template runs. Both are untested adaptations of ideas in SRC-30 comments; neither generates an image or verifies model quality by itself.

## brief-reference-observation — Reference observation to editable brief

- **Purpose:** Turn an authorized reference into explicit observations and a reviewable creative brief before generation.
- **Category:** creative brief preparation
- **Tags:** image to prompt, reference analysis, describe image, observation, reverse brief, preparation
- **Mode:** generate or edit
- **Model/tool:** vision-capable assistant; brief output only
- **Compatibility:** unverified — observations and inferences require review; no original prompt recovery claimed.
- **Validation:** adapted template
- **Required inputs:** reference image, intended use, permitted traits, proposed changes, brand truth and unknown-fact handling
- **Reference assets:** `REF 1 = composition` for observable arrangement; optional `REF 2 = product` for approved product truth
- **Sources:** SRC-30, especially [JuncYards' image-description suggestion](https://www.reddit.com/r/generativeAI/comments/1re8lo9/comment/o7d20i9/); SRC-12
- **Reuse:** SRC-30 user-authored advice paraphrased into original workspace wording, no comment copied; SRC-12 MIT workflow concept only, no code or prompt copied. Reference reuse permission must come from the supplied asset; the thread grants none.

### Prompt

Analyze REF 1 before writing a prompt for `{INTENDED_USE}`. Return three labeled groups: directly visible observations, uncertain interpretations, and missing facts. Describe subject placement, perspective, lighting direction, palette, material appearance, texture, depth and copy-safe regions using concrete language. Transfer only `{PERMITTED_REFERENCE_TRAITS}`; treat `{APPROVED_BRAND_AND_PRODUCT_TRUTH}` as controlling facts. Do not infer hidden geometry, exact fonts, identity, ingredients, performance claims or camera settings from appearance. Then draft a brief separating change `{REQUESTED_CHANGE}` from preserve `{PRESERVE_LIST}` and match `{MATCH_PROPERTIES}`, with reference roles and `{DELIVERY_TARGET}`. List blocking unknowns and the canonical template to use. Do not generate an image, invent approved copy or claim to recover the original prompt.

### Variations and adaptation

For an owned camera photo, start with observable defects and the desired bounded edit. For a style reference, record transferable visual traits without treating its subject, branding or copy as authorized content. The same visible image can result from many different prompts.

### Constraints and common failures

Confident descriptions can turn guesses into locks. OCR text is an observation until checked against approved artwork; a plausible camera/lens estimate is not metadata.

### Quality checks

Verify observation/inference separation, declared roles, authorized trait transfer, exact approved facts and a usable change/preserve/match brief. Confirm that unknowns and production limits remain explicit.

## brief-model-surface-adapter — Adapt an approved prompt to its actual image tool

- **Purpose:** Translate an approved visual brief into supported prompt syntax and provider controls without changing its locks.
- **Category:** creative brief preparation
- **Tags:** prompt adapter, tool aware, model, provider, json, negative prompt, denoising, preparation
- **Mode:** generate or edit
- **Model/tool:** assistant plus current official documentation for the chosen surface; prompt output only
- **Compatibility:** unverified — supported controls must be checked for the actual tool and mode.
- **Validation:** adapted template
- **Required inputs:** approved canonical prompt, exact tool/provider and model if exposed, generate/edit mode, verified control list, reference ordering and delivery target
- **Reference assets:** none; preserve reference roles and filenames from the supplied approved prompt
- **Sources:** SRC-30, especially [commanderdgr8](https://www.reddit.com/r/generativeAI/comments/1re8lo9/comment/o7bbp28/) and _Turd_Reich's tool-specific prompting advice; SRC-12
- **Reuse:** SRC-30 community ideas paraphrased, no commenter prose or external prompt copied; SRC-12 MIT architecture concept only. Original adaptation contract; source recommendations do not verify any API control.

### Prompt

Adapt `{APPROVED_CANONICAL_PROMPT}` for `{EXACT_TOOL_PROVIDER_AND_MODEL_OR_UNEXPOSED}` in `{MODE}` mode. LOCK every approved fact, exact string, identity/product property, reference role and `{REFERENCE_ORDER}`. Using `{VERIFIED_SURFACE_CONTROLS_AND_SOURCE_DATE}`, separate portable visual instructions from actual provider settings. Return the final prompt, supported settings, unsupported/unverified requests and downstream delivery steps. Preserve `{DELIVERY_TARGET}` as a target when it cannot be requested natively. Use JSON, negative-prompt fields, masks, seeds or denoising only when this exact surface supports them; otherwise express the visual intent in normal prose and disclose the unsupported control. Do not invent field names, model IDs or numeric defaults; do not send a generation request or add creative details.

### Variations and adaptation

Keep the approved master prompt independent of provider syntax. For model comparison, retain its meaning and reference order, and record any unavoidable setting mismatch. Recheck mutable controls against the actual surface before a run.

### Constraints and common failures

JSON seen in a gallery is not necessarily an API schema. Stable Diffusion-style flags, a fixed denoising value or a model nickname do not establish support in a different image tool.

### Quality checks

Diff the adapted prompt against the approved locks; verify each control against the chosen surface, list unknowns, preserve reference order and distinguish requested from returned size in subsequent run records.
