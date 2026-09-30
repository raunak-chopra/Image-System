# Reference-based generation, product accuracy, and character consistency

## reference-role-composite — Multi-reference role-separated composite

- **Purpose:** Combine multiple references without letting their roles bleed together.
- **Category:** reference fidelity
- **Tags:** multi-reference, role separation, composite, identity lock
- **Mode:** edit
- **Model/tool:** multimodal image model
- **Compatibility:** unverified — reference limits and fidelity differ by model.
- **Validation:** adapted template
- **Required inputs:** numbered references, role for each, conflict priority
- **Reference assets:** `REF 1..N = explicitly declared roles`
- **Sources:** SRC-07, SRC-09, SRC-10, SRC-13
- **Reuse:** Original synthesis. SRC-07 and SRC-09 are MIT—techniques paraphrased; SRC-10 mixed-license—reference-evidence method only; SRC-13 prompt rights are per-item/unstated—recommendation concept only.

### Prompt

Create `{TARGET_SCENE}` using these references only for their assigned roles: `REF 1 = {ROLE_1}`, `REF 2 = {ROLE_2}`, `REF 3 = {ROLE_3}` [optional: continue]. Priority if references conflict: `{PRIORITY_ORDER}`. LOCK `{LOCKED_IDENTITY_OR_PRODUCT_FEATURES}` from its designated truth reference. Transfer from style references only `{ALLOWED_STYLE_PROPERTIES}`; do not copy their people, products, logos, text, or composition unless assigned. Compose `{COMPOSITION}`, light `{LIGHTING}`, output `{ASPECT_RATIO}`. No unassigned cross-reference blending or invented branding.

### Variations and adaptation

Use separate references for identity, pose, wardrobe, environment, and material. Reduce reference count if the model begins averaging identities or designs.

### Constraints and common failures

Models may blend faces, copy background objects, transfer colors onto products, or ignore the stated priority.

### Quality checks

Audit every visible trait back to its permitted reference role and inspect prohibited cross-transfer, identity/product fidelity, and scene coherence.

## consistency-character-sheet — Character anchor sheet

- **Purpose:** Establish a reusable character reference before generating a sequence.
- **Category:** character consistency
- **Tags:** character sheet, turnaround, expressions, wardrobe lock, series
- **Mode:** generate
- **Model/tool:** image model
- **Compatibility:** unverified — general template.
- **Validation:** adapted template
- **Required inputs:** adult character specification, style system, wardrobe/prop locks
- **Reference assets:** `[optional: REF 1 = authorized identity]`; `[optional: REF 2 = style only]`
- **Sources:** SRC-01, SRC-07, SRC-13
- **Reuse:** Original synthesis. SRC-01 and SRC-07 are MIT—techniques paraphrased; SRC-13 prompt rights are per-item/unstated—category concept only.

### Prompt

Create a clean character anchor sheet for `{ADULT_CHARACTER}` in `{VISUAL_MEDIUM}`. LOCK identifiers: `{FACE_SHAPE}`, `{SKIN_TONE}`, `{HAIR}`, `{BODY_PROPORTIONS}`, `{DISTINCTIVE_MARKS}`, `{WARDROBE}`, `{ACCESSORIES}`. Show exactly `{VIEW_COUNT}` full-body views: `{VIEW_LIST}`, plus `{EXPRESSION_COUNT}` head expressions: `{EXPRESSION_LIST}`. Neutral `{BACKGROUND}`, even reference lighting, consistent scale, aligned baseline, no perspective distortion or pose overlap. Add no labels or text. Output `{ASPECT_RATIO}` at maximum supported detail.

### Variations and adaptation

Create separate sheets for costume variants rather than mixing wardrobes. Use the approved sheet as the identity reference for each later scene.

### Constraints and common failures

Turnarounds may change clothing seams, handedness, facial marks, eye color, or body scale; grids may merge limbs.

### Quality checks

Compare identifiers across every panel, count views/expressions, check front/back garment logic, accessory side, scale, and clean separation.

## consistency-series-scene — Sequence frame with continuity ledger

- **Purpose:** Generate a new scene while preserving continuity across a campaign or story.
- **Category:** character and campaign consistency
- **Tags:** continuity, series, character, product, shot list
- **Mode:** edit
- **Model/tool:** multimodal image editor
- **Compatibility:** unverified — multi-turn drift varies.
- **Validation:** adapted template
- **Required inputs:** approved anchor, continuity ledger, new shot description
- **Reference assets:** `REF 1 = approved anchor/frame`; `[optional: REF 2 = location/layout]`
- **Sources:** SRC-07, SRC-09, SRC-13
- **Reuse:** Original synthesis. SRC-07 and SRC-09 are MIT—techniques paraphrased; SRC-13 prompt rights are per-item/unstated—continuity concept only.

### Prompt

Using `REF 1` as the continuity anchor, create scene `{SCENE_ID}`: `{ACTION_AND_SETTING}`. Preserve exactly the continuity ledger: character/product identifiers `{IDENTITY_LOCKS}`; wardrobe/packaging `{WARDROBE_PRODUCT_LOCKS}`; recurring props `{PROP_LOCKS}`; palette and rendering `{STYLE_LOCKS}`. Change only `{ALLOWED_CHANGES}`. Camera `{SHOT_AND_ANGLE}`, lighting `{LIGHTING}` consistent with `{TIME_AND_SOURCE}`, output `{ASPECT_RATIO}`. Use `REF 2` only for `{REF_2_ROLE}`. No new accessories, logos, text, or continuity changes.

### Variations and adaptation

Generate shots from wide to close while carrying the ledger verbatim. If drift appears, restart from the anchor rather than the latest degraded frame.

### Constraints and common failures

Sequential editing accumulates identity, wardrobe, color, and prop drift; mirrored frames change handed details.

### Quality checks

Compare with the anchor and ledger side by side; inspect facial/product identifiers, accessories, colors, handedness, time-of-day, and prop count.
