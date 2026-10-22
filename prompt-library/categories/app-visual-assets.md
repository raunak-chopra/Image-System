# App visual assets and presentation proofs

Original, untested briefs added 2026-10-21. This category supports app development through artwork and design proofs. Functional screens, components, charts, accessibility behavior, vectors and platform resource packaging belong in the app/design toolchain. A generated UI image is not a working screen. Capture actual UI for store screenshots; do not generate fictitious product features. See [app delivery requirements](../../formats/app-assets.md).

## app-icon-concept — App icon concept and small-size proof

- **Purpose:** Explore a recognizable app symbol before platform-specific assembly.
- **Category:** app visual assets
- **Tags:** app, icon, launcher, ios, android, small size, symbol
- **Mode:** generate
- **Model/tool:** image model plus native icon/vector tooling
- **Compatibility:** unverified — platform resource packaging is downstream.
- **Validation:** adapted template
- **Required inputs:** app purpose, distinct symbol concepts, brand palette, prohibited motifs, target platform and proof sizes
- **Reference assets:** optional `REF 1 = style` for approved visual traits
- **Sources:** SRC-33, SRC-34, SRC-35
- **Reuse:** SRC-33 Apple guidance, SRC-34 Play guidance and SRC-35 Android guidance paraphrased as requirements; no official artwork, sample icon or documentation prose copied. No blanket asset reuse license assumed. Original brief.

### Prompt

Develop `{CONCEPT_COUNT}` app-icon concepts for `{APP_PURPOSE}` using `{SYMBOL_TERRITORIES}`. LOCK `{BRAND_PALETTE_AND_SHAPE_RULES}`. Show separate flat concepts with one clear silhouette and a small-size proof at `{PROOF_SIZES}`. Use `{TARGET_PLATFORM_PRESENTATION_RULES}`; avoid pre-baked platform masks when the platform supplies them. Render no words, rating stars, badges or device mockups. Output `{ASPECT_RATIO}` as a concept board. Avoid `{PROHIBITED_MOTIFS}`. Keep final vector construction, layer export and platform masking outside this concept image.

### Variations and adaptation

After concept approval, use `app-adaptive-icon-layers` for Android resources. iOS assets must follow the current selected platform/tool requirements, not copied Android rules.

### Constraints and common failures

A detailed square illustration may fail at small sizes. Store icons and launcher icons have different production contracts.

### Quality checks

Inspect silhouette at actual display sizes, theme contrast and unique symbol meaning; verify absence of baked badges/masks and route to the correct platform resource process.

## app-adaptive-icon-layers — Android adaptive icon layer plan

- **Purpose:** Separate approved icon artwork into coordinated foreground, background and monochrome resources.
- **Category:** app visual assets
- **Tags:** app, android, adaptive icon, foreground, background, monochrome, launcher
- **Mode:** edit
- **Model/tool:** reference editor plus Android resource tooling
- **Compatibility:** unverified — generated artwork must be assembled and tested as native resources.
- **Validation:** adapted template
- **Required inputs:** approved icon, current platform template and safe zone, layer boundaries, monochrome interpretation
- **Reference assets:** `REF 1 = product` approved icon; `REF 2 = composition` current platform template
- **Sources:** SRC-35
- **Reuse:** SRC-35 official layer/masking concepts paraphrased; no Android sample artwork or source code copied. Original layer-plan brief.

### Prompt

Prepare separate layer artwork for the approved icon in REF 1 using REF 2 alignment. LOCK the symbol silhouette and `{LAYER_COORDINATES}`. Produce `{REQUESTED_LAYER}` only: foreground on transparency, opaque background, or single-color monochrome silhouette as specified by `{LAYER_SPEC}`. Keep essential symbol content within `{SAFE_REGION}` and supply `{OVERSCAN}` outside it. No baked corner mask, cast shadow, text or extra icon. Target `{RESOURCE_CANVAS}` and keep all layers registered to the same origin. Show mask previews separately from export artwork.

### Variations and adaptation

Generate one requested layer per output. Assemble adaptive resources and preview circle/squircle masks, motion and themed presentation in the Android toolchain.

### Constraints and common failures

A flattened proof cannot function as an adaptive resource. Layer scale drift and monochrome background blocks are common failures.

### Quality checks

Verify true alpha, identical registration, mask clipping, opaque background and monochrome semantics; confirm actual launcher rendering before release.

## app-store-screenshot-story — Truthful app-store screenshot sequence

- **Purpose:** Turn real app captures into an ordered feature story without redrawing UI.
- **Category:** app visual assets
- **Tags:** app store, aso, screenshots, ios, google play, localization, device
- **Mode:** edit
- **Model/tool:** layout/compositing tool with optional image-generated background
- **Compatibility:** unverified — actual UI is composited from captures.
- **Validation:** adapted template
- **Required inputs:** actual UI captures and approved demo data, feature-to-frame order, exact copy, device target, current screenshot specification
- **Reference assets:** `REF 1..N = product` actual app captures; optional additional `REF = style` brand treatment
- **Sources:** SRC-33, SRC-34
- **Reuse:** SRC-33 Apple and SRC-34 Play screenshot guidance paraphrased; no official screenshots or copy reused. Original storyboard/layout brief.

### Prompt

Create presentation backgrounds and a layout proof for `{APP_NAME}` with `{FRAME_COUNT}` screenshot frames. LOCK `{CAPTURE_TO_FEATURE_MAP}`, actual UI, navigation labels, demo data and approved copy. Follow `{FRAME_ORDER}`; make each frame communicate one supplied feature. Place each original capture in `{DEVICE_OR_FRAME_TREATMENT}` without altering its contents. Use `{BRAND_TOKENS}`; reserve `{TEXT_ZONES}` for `{EXACT_COPY}`. Target `{DEVICE_SPEC_AND_DIMENSIONS}`. Generate background artwork only for final production; composite captures and text downstream. No fabricated functionality, rankings, reviews or platform chrome.

### Variations and adaptation

Create each locale and device family from the same approved frame ledger. Use platform-specific screenshot exports rather than resizing every device capture to one universal canvas.

### Constraints and common failures

Generative redrawing can make an attractive but false product screenshot. Device frames can crop controls or hide feature context.

### Quality checks

Pixel-compare composited UI with captures; verify feature order, exact copy, locale, device dimensions and proof that every feature exists in the shipped build.

## app-play-feature-graphic — Google Play feature graphic

- **Purpose:** Communicate the app's core experience in the separate Play feature-graphic surface.
- **Category:** app visual assets
- **Tags:** app, google play, feature graphic, store listing, launch, aso
- **Mode:** generate or edit
- **Model/tool:** image model plus layout/compositing tool
- **Compatibility:** unverified — delivery properties require exported-file inspection.
- **Validation:** adapted template
- **Required inputs:** approved core experience, brand artwork, scene or UI captures, current cutoff/overlay brief, localized copy or none
- **Reference assets:** optional `REF 1 = product` actual UI; `REF 2 = style` approved brand artwork
- **Sources:** SRC-34
- **Reuse:** SRC-34 Play feature-graphic requirements paraphrased; no sample image or documentation copy reused. Original visual brief.

### Prompt

Create feature-graphic artwork for `{APP_CORE_EXPERIENCE}`. LOCK `{APPROVED_FEATURES_AND_BRAND_TOKENS}`. Use `{SCENE}` with the main visual inside `{CURRENT_SAFE_REGION}` and important details outside `{OVERLAY_AND_CUTOFF_REGIONS}`. If UI is required, reserve its exact placement for original captures. Use only `{APPROVED_COPY_OR_NONE}` in `{TEXT_ZONE}`; composite exact type downstream. Compose for the Play feature-graphic ratio and export target in the delivery spec. Avoid icon duplication, fake store badges, awards, download counts or unsupported features.

### Variations and adaptation

Create localized versions from approved copy. Verify the graphic with the expected play-button and crop overlays in the destination console.

### Constraints and common failures

A wide banner crop can remove the main subject; repeating the app icon as the dominant graphic weakens the distinct asset role.

### Quality checks

Verify the actual 1024-by-500 export, allowed encoding and absence of alpha; inspect current cutoff overlays and brand-to-product consistency.

## app-onboarding-illustrations — Onboarding illustration sequence

- **Purpose:** Explain an approved user journey through a consistent illustration family.
- **Category:** app visual assets
- **Tags:** app, onboarding, illustrations, walkthrough, first use, journey
- **Mode:** generate
- **Model/tool:** image model plus app asset pipeline
- **Compatibility:** unverified — illustration generation does not implement onboarding.
- **Validation:** adapted template
- **Required inputs:** approved journey and step order, illustration contract, subject inventory, UI text zones, per-step action
- **Reference assets:** optional `REF 1 = style`; optional `REF 2 = identity` approved mascot
- **Sources:** SRC-36, SRC-32
- **Reuse:** SRC-36 onboarding/empty-state concepts and SRC-32 visual-system concepts paraphrased; no Carbon or IBM illustrations copied. Original brief.

### Prompt

Create one illustration for onboarding step `{STEP_ID}` in `{APPROVED_JOURNEY}`. LOCK `{STYLE_CONTRACT}`, mascot traits if supplied, palette and `{OBJECT_INVENTORY}`. Show only `{STEP_ACTION}` and its approved relationship to `{PREVIOUS_AND_NEXT_STEP}`. Use `{COMPOSITION}` with `{LIVE_TEXT_AND_CONTROL_ZONES}` clear for native UI. No embedded buttons, permission dialogs, progress indicators or lettering. Output `{ASSET_CANVAS}` with `{BACKGROUND_OR_ALPHA}`. Do not imply features or data access that the app does not provide.

### Variations and adaptation

Approve one anchor first, then produce separate step assets. For permission education, illustrate the approved benefit without drawing a fake system prompt.

### Constraints and common failures

Illustrations can imply automatic actions or permissions not yet granted. A large decorative scene may compete with the actual instruction.

### Quality checks

Compare step semantics, mascot continuity, object count and clear zones; test at the intended viewport with real text and controls.

## app-empty-state-art — State-specific empty and recovery artwork

- **Purpose:** Distinguish first use, no results, offline and failure without suggesting the wrong recovery action.
- **Category:** app visual assets
- **Tags:** app, empty state, error, offline, no results, recovery, success
- **Mode:** generate
- **Model/tool:** image model plus native UI implementation
- **Compatibility:** unverified — semantics must match actual application state.
- **Validation:** adapted template
- **Required inputs:** actual state, cause, approved recovery action, reserved text/control regions, art scale and brand tokens
- **Reference assets:** optional `REF 1 = style`
- **Sources:** SRC-36
- **Reuse:** SRC-36 state taxonomy and contextual guidance paraphrased; no Carbon artwork or prose copied. Original state-art brief.

### Prompt

Create artwork for `{STATE_NAME}` caused by `{STATE_CAUSE}` in `{APP_CONTEXT}`. LOCK `{VISUAL_SYSTEM}`. Depict `{APPROVED_METAPHOR}` at `{ART_SCALE}` inside `{ART_REGION}`; keep `{NATIVE_TEXT_AND_ACTION_REGIONS}` empty. The image must support `{APPROVED_RECOVERY_ACTION}` without depicting completed data, destructive loss or success unless that is the true state. Use `{PALETTE}` and `{BACKGROUND_OR_ALPHA}`. Output `{ASSET_CANVAS}` with no text, fake UI, buttons or invented account status.

### Variations and adaptation

Use one entry with distinct filled briefs for no data, no results, offline, error and completed work. Prefer no illustration in very small spaces.

### Constraints and common failures

A generic sad scene can imply lost data during harmless first use. Do not use color as the sole signal; implement clear native text and accessible labels separately.

### Quality checks

Match the actual cause and available action; verify small-size clarity, usable text/control space, theme contrast and no misleading success/data depiction.

## app-achievement-badges — Achievement badge progression

- **Purpose:** Produce distinguishable tier artwork while keeping semantic progression and silhouettes consistent.
- **Category:** app visual assets
- **Tags:** app, achievement, badge, gamification, reward, tier, progression
- **Mode:** generate
- **Model/tool:** image model plus asset/vector tooling
- **Compatibility:** unverified — asset art does not prove an achievement was earned.
- **Validation:** adapted template
- **Required inputs:** approved tier names and order, tier-to-symbol rules, locked silhouette, palette, display sizes
- **Reference assets:** optional `REF 1 = style` approved badge family anchor
- **Sources:** SRC-32, SRC-14
- **Reuse:** SRC-32 visual-system concepts paraphrased; SRC-14 MIT variable-based style organization only. Original badge contract; no third-party reward art copied.

### Prompt

Create badge artwork for tier `{TIER_ID}` in `{APPROVED_TIER_ORDER}`. LOCK `{SILHOUETTE_GRID_AND_MATERIAL_RULES}`. Express the tier through `{TIER_SYMBOL_MAP}`, keeping all tiers distinguishable by shape/detail as well as color. Use `{APPROVED_PALETTE}` and `{PADDING}`; no reward amounts, certification marks or text. Output one badge on `{BACKGROUND_OR_ALPHA}` at `{CANVAS}`. Keep locked/unlocked state styling separate from earned status, which the app controls.

### Variations and adaptation

Generate tiers individually from an approved anchor and assemble a proof sheet afterward. Exact geometric badges are better rebuilt in vector tools.

### Constraints and common failures

Uncontrolled detail makes higher tiers unreadable. Color-only differences fail in grayscale and under some visual conditions.

### Quality checks

Check ordering, silhouette and shape differences at actual sizes, consistent padding, alpha edges and absence of implied certification or earned status.

## app-product-tour-callouts — Product-tour callout placement proof

- **Purpose:** Align instructional callouts to real controls without inventing UI or interaction.
- **Category:** app visual assets
- **Tags:** app, product tour, coachmark, tooltip, walkthrough, screenshot, callout
- **Mode:** edit
- **Model/tool:** native layout/prototype tool with optional generated illustration
- **Compatibility:** unverified — overlay behavior is implemented in code.
- **Validation:** adapted template
- **Required inputs:** actual capture, target-control coordinates, ordered step copy, overlay safe regions, viewport and expansion rules
- **Reference assets:** `REF 1 = product` actual app capture
- **Sources:** SRC-36, SRC-33
- **Reuse:** SRC-36 contextual onboarding and SRC-33 actual-UI concepts paraphrased; no source UI, artwork or prose copied. Original placement contract.

### Prompt

Prepare a callout proof for tour step `{STEP_ID}` on unchanged REF 1. LOCK all UI pixels, labels and layout. Point only to `{TARGET_CONTROL_AND_BOUNDS}` with `{CALLOUT_GEOMETRY}` inside `{AVAILABLE_OVERLAY_REGION}`; keep `{PROTECTED_CONTROLS}` usable and visible. Set `{APPROVED_STEP_COPY}` in `{TYPE_RULES}` downstream. Show `{CURRENT_STEP_STATE}` only; no invented completion or click result. Output at `{VIEWPORT}`. Generate supporting illustration separately; assemble the capture and overlay in a layout tool.

### Variations and adaptation

Proof the longest locale and a smaller viewport. Implement focus, dismissal, keyboard and screen-reader behavior in the native component.

### Constraints and common failures

An arrow can point to the wrong control after responsive reflow. A screenshot proof cannot validate interaction or accessibility behavior.

### Quality checks

Check target coordinates, step order, actual UI fidelity, protected controls and expanded text; validate implemented behavior separately.

## app-theme-art-pair — Light and dark theme artwork pair

- **Purpose:** Preserve meaning and composition while adapting decorative art to two approved theme token sets.
- **Category:** app visual assets
- **Tags:** app, light mode, dark mode, theme, contrast, paired artwork
- **Mode:** edit
- **Model/tool:** reference editor plus native asset/theme pipeline
- **Compatibility:** unverified — pixel colors and in-app contrast require measurement.
- **Validation:** adapted template
- **Required inputs:** approved art, semantic color-role mapping, light/dark backgrounds, unchanged content, export contract
- **Reference assets:** `REF 1 = product` approved illustration
- **Sources:** SRC-32, SRC-14
- **Reuse:** SRC-32 semantic visual-system organization paraphrased; SRC-14 MIT style-variable concept only. No official asset copied. Original theme adaptation brief.

### Prompt

Adapt REF 1 for `{TARGET_THEME}`. LOCK subjects, positions, shapes, meaning and `{UNCHANGED_DETAILS}`. Remap only `{SEMANTIC_COLOR_ROLE_MAP}` for background `{TARGET_SURFACE}` while preserving contour separation, depth and `{BRAND_ACCENT_RULE}`. Keep text and controls outside the artwork. Same canvas, registration and `{ALPHA_CONTRACT}` as the approved anchor. Do not invert colors globally, add glow, change emotional meaning or introduce extra details.

### Variations and adaptation

Use one approved role map per theme and keep both versions registered. Monochrome assets that can be tinted safely may be implemented as vectors instead.

### Constraints and common failures

Automatic inversion can reverse material/shadow meaning or hide contours. Prompted hex values are intent, not measured pixel compliance.

### Quality checks

Overlay geometry, compare semantic roles, measure contrast on actual app surfaces and inspect alpha fringes in both themes at intended sizes.
