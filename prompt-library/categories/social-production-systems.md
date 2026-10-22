# Social content production systems

Original, untested briefs added 2026-10-21. Use approved editorial briefs, actual product/creator assets and the current platform crop/overlay specification. These are images and planning frames; native stickers, interactive controls, animation, audio and publishing are separate production steps.

## social-cover-crop-proof — Short-video cover with multiple crop proofs

- **Purpose:** Keep the cover's message and subject recognizable across approved feed, profile and full-screen crops.
- **Category:** social production
- **Tags:** social, reel, shorts, cover, profile grid, crop, thumbnail
- **Mode:** edit
- **Model/tool:** reference editor plus layout/crop tool
- **Compatibility:** unverified — destination crop behavior must be checked on the chosen surface.
- **Validation:** adapted template
- **Required inputs:** actual video frame or approved cover subject, exact title, crop windows, overlay masks and brand tokens
- **Reference assets:** `REF 1 = product` source frame; optional `REF 2 = identity` authorized creator
- **Sources:** SRC-39, SRC-23
- **Reuse:** SRC-39 official thumbnail concepts paraphrased; SRC-23 private layout patterns abstracted. Original multi-crop contract; no source thumbnail or identity copied.

### Prompt

Create a cover for `{ACTUAL_VIDEO_TOPIC}` from REF 1. LOCK `{SUBJECT_AND_IDENTITY_FEATURES}` and `{EXACT_TITLE}`. Compose the subject and reserved title zone inside `{INTERSECTION_OF_APPROVED_CROPS}` while respecting `{OVERLAY_EXCLUSIONS}`. Use `{BRAND_TREATMENT}`; preserve the video's actual context rather than inventing an event. Output one clean `{MASTER_RATIO}` image without crop lines. Assemble the exact title and show `{CROP_PREVIEW_SET}` separately downstream. No fake engagement counts, playback UI or unsupported promises.

### Variations and adaptation

Use this crop-proof method for channel banners with their supplied masks. Do not assume a single permanent crop for every platform or profile view.

### Constraints and common failures

Full-screen legibility can hide severe profile-grid crops. A cover must represent the real content even when its composition is redesigned.

### Quality checks

Inspect every specified crop at display size, title spelling, identity and content truth; verify actual overlay placement in the destination surface.

## social-native-sticker-backdrop — Story backdrop for native interactions

- **Purpose:** Reserve clean, usable regions for platform-native polls, questions, links or product tags.
- **Category:** social production
- **Tags:** social, story, poll, question, link, sticker, interaction, backdrop
- **Mode:** generate or edit
- **Model/tool:** image model plus platform-native story editor
- **Compatibility:** unverified — interaction is added by the platform editor.
- **Validation:** adapted template
- **Required inputs:** approved scene, intended native controls, measured control bounds, safe zones and optional copy
- **Reference assets:** optional `REF 1 = product`; optional `REF 2 = style`
- **Sources:** SRC-38, SRC-23
- **Reuse:** SRC-38 stacking and brand-visibility concepts paraphrased; SRC-23 private layout patterns abstracted. Native-control reservation is original workflow synthesis, not a claim that Pinterest rules apply to other platforms.

### Prompt

Create a `{STORY_SURFACE}` backdrop featuring `{SUBJECT}`. LOCK `{PRODUCT_AND_BRAND_RULES}`. Keep `{NATIVE_CONTROL_BOUNDS}` visually quiet and `{PLATFORM_OVERLAY_ZONES}` free of essential content. Place `{APPROVED_COPY_OR_NONE}` only in `{COPY_REGION}` using `{TYPE_AND_PALETTE}`. Arrange product and visual cues around the reserved controls without suggesting a response has already been selected. Output `{ASPECT_RATIO}`. Do not draw poll buttons, link stickers, handles, product tags, fake results or tappable-looking UI into the artwork.

### Variations and adaptation

Add the actual poll, link or product tag in the native editor after export. For each control type, measure its current placement and label expansion.

### Constraints and common failures

A painted control has no behavior and may compete with the real control. Busy backgrounds can make native labels unreadable.

### Quality checks

Preview real controls over the artwork; check tappable-region clearance, text contrast, product visibility, overlay safety and absence of fake interaction states.

## social-owned-meme-remix — Authorized meme-format remix

- **Purpose:** Adapt a supplied, permitted visual format while preserving its joke structure and exact approved copy.
- **Category:** social production
- **Tags:** social, meme, humor, remix, reaction, community, template
- **Mode:** edit
- **Model/tool:** reference editor plus native typesetting tool
- **Compatibility:** unverified — likeness and text fidelity require inspection.
- **Validation:** adapted template
- **Required inputs:** permitted source frame, allowed edit scope, joke/slot map, exact copy, audience context and exclusions
- **Reference assets:** `REF 1 = composition` approved format; optional `REF 2 = product` brand subject
- **Sources:** SRC-30, SRC-23
- **Reuse:** SRC-30 discussion is linked as discovery only, no comment or third-party meme copied; SRC-23 private layout patterns abstracted. Original transformation contract; user must supply the permitted frame.

### Prompt

Adapt REF 1 for `{APPROVED_JOKE}`. LOCK `{FORMAT_ANCHORS}` and the `{SETUP_TO_PAYOFF_SLOT_MAP}`. Change only `{AUTHORIZED_CHANGE}` using REF 2 solely for product truth if supplied. Keep `{EXACT_CAPTION_STRINGS}` in their assigned zones for downstream typesetting. Preserve `{CONTEXT_AND_AUDIENCE_RULES}`; output `{ASPECT_RATIO}`. Do not add identities, statements, third-party marks or claims beyond the authorized assets and brief.

### Variations and adaptation

Use a brand-owned reaction frame or original illustration when no cleared source format exists. Record the allowed reuse scope with the filled prompt.

### Constraints and common failures

Changing the visual anchor can break the joke; adding words or expressions can imply a statement the depicted person never made.

### Quality checks

Confirm source permission scope, anchor preservation, setup/payoff order, exact captions and audience context; inspect any retained identity or product.

## social-live-overlay-pack — Transparent live-stream overlay assets

- **Purpose:** Create registered overlay art that leaves camera, captions and live data usable.
- **Category:** social production
- **Tags:** social, livestream, overlay, transparent, lower third, broadcast, stream
- **Mode:** generate
- **Model/tool:** image model plus compositor/broadcast layout tool
- **Compatibility:** unverified — alpha and runtime registration require testing.
- **Validation:** adapted template
- **Required inputs:** canvas size, camera/content rectangles, overlay inventory, text/data regions, logo artwork and padding
- **Reference assets:** optional `REF 1 = style`; exact logo composited from approved source
- **Sources:** SRC-32, SRC-23
- **Reuse:** SRC-32 layout hierarchy paraphrased; SRC-23 private layout patterns abstracted. Original overlay-layer contract; no source broadcast artwork copied.

### Prompt

Create overlay layer `{LAYER_ID}` for `{STREAM_CANVAS}` using `{BRAND_TOKENS}`. LOCK `{CAMERA_CONTENT_AND_CAPTION_RECTANGLES}` and `{LAYER_REGISTRATION}`. Draw only `{AUTHORIZED_FRAME_ART}` around those regions; keep `{LIVE_TEXT_AND_DATA_ZONES}` empty and maintain `{PADDING}`. Use true transparency outside artwork, with no checkerboard, opaque camera panel, embedded names, viewer counts or fake donation alerts. Output one registered layer at `{CANVAS_PIXELS}`. Add exact logos and live text through the compositor.

### Variations and adaptation

Produce lower-third decoration, camera frame and transition still as separate layers. Animation and live values are implemented in broadcast software.

### Constraints and common failures

Rendered checkerboards are not transparency. Misregistered layers can cover captions or platform controls.

### Quality checks

Inspect alpha, dimensions, registration, camera and caption clearance; preview against bright/dark footage with actual live text and platform overlays.

## social-brand-sticker-pack — Brand sticker and reaction pack

- **Purpose:** Create independently usable expressions with consistent silhouette language and transparent edges.
- **Category:** social production
- **Tags:** social, stickers, reaction, cutout, mascot, transparent, emoji
- **Mode:** edit
- **Model/tool:** reference editor plus cutout/vector export tool
- **Compatibility:** unverified — each sticker requires isolated export inspection.
- **Validation:** adapted template
- **Required inputs:** approved mascot/motif, expression-action list, outline and padding rules, color/shape locks, export target
- **Reference assets:** `REF 1 = identity` approved mascot or `REF 1 = product` approved non-character motif
- **Sources:** SRC-32, SRC-29
- **Reuse:** SRC-32 visual-family concepts paraphrased; SRC-29 original repository material MIT with third-party rights reserved, character-category discovery only. No source character, franchise or prompt copied.

### Prompt

Create sticker `{STICKER_ID}` showing `{APPROVED_EXPRESSION_OR_ACTION}` from REF 1. LOCK `{IDENTITY_OR_MOTIF_INVARIANTS}` and `{STYLE_RULES}`. Keep a closed readable silhouette, `{OUTLINE_RULE}`, and `{PADDING}` around every extremity. Use `{APPROVED_PALETTE}` with true transparent background. Output one sticker on `{CANVAS}`; render no sheet grid, text, drop-in third-party symbols or extra characters. Preserve the approved face/body/mark structure while changing only the assigned expression or gesture.

### Variations and adaptation

Approve one anchor, then generate individual expressions. Printable stickers need supplier bleed/cut paths produced in native tools; this is not an animated pet workflow.

### Constraints and common failures

Gesture changes can alter identity, clip limbs or create disconnected fragments. A contact sheet is a proof, not a set of isolated export assets.

### Quality checks

Check expression mapping, identity, silhouette, padding, alpha edges and small-size readability; verify one requested sticker per file.

## social-thumbnail-concept-test — Content-grounded thumbnail concepts

- **Purpose:** Compare visual hooks for one real video while preserving subject and promise accuracy.
- **Category:** social production
- **Tags:** social, youtube, thumbnail, concept, hook, test, video
- **Mode:** edit
- **Model/tool:** reference editor plus typesetting/test workflow
- **Compatibility:** unverified — no click-through or watch-time improvement is established.
- **Validation:** adapted template
- **Required inputs:** actual footage/frame, approved hook variants, unchanged subject, title/copy map, exclusion zones, test plan
- **Reference assets:** `REF 1 = product` actual footage frame; optional `REF 2 = identity` authorized host portrait
- **Sources:** SRC-39
- **Reuse:** SRC-39 official thumbnail/content presentation concepts paraphrased; no example thumbnails or documentation prose copied. Original comparison brief.

### Prompt

Create thumbnail variant `{VARIANT_ID}` for `{ACTUAL_VIDEO_CONTENT}`. LOCK `{HOST_AND_SUBJECT_TRUTH}`, `{APPROVED_PROMISE}` and `{UNCHANGED_CONTROLS}`. Vary only `{DECLARED_VISUAL_FACTOR}` according to `{VARIANT_SPEC}`; use `{COMPOSITION_AND_PALETTE}` with `{TIMESTAMP_AND_OTHER_EXCLUSIONS}` clear. Reserve `{TEXT_ZONE}` for `{EXACT_SHORT_COPY}` downstream. Output `{TARGET_RATIO}`. Do not fabricate reactions, results, participants, UI metrics or content absent from the video.

### Variations and adaptation

Use separate concepts for broader exploration, then isolate a factor for a controlled test. Keep publication/test results in the campaign record rather than marking this unrun prompt successful.

### Constraints and common failures

Several simultaneously changed factors prevent causal interpretation. A strong click promise can misrepresent the actual video.

### Quality checks

Verify actual-video truth, exact copy, subject identity, visible test difference, unchanged controls and actual-size readability; check platform-specific thumbnail settings at delivery.

## social-video-keyframes — Short-video production keyframe plan

- **Purpose:** Turn an approved short-video script into separate shot references with explicit action and continuity.
- **Category:** social production
- **Tags:** social, short video, reels, storyboard, keyframes, shot list, continuity
- **Mode:** generate or edit
- **Model/tool:** image model plus video/storyboard editor
- **Compatibility:** unverified — still frames do not establish motion or audio quality.
- **Validation:** adapted template
- **Required inputs:** approved script with shot IDs/timing, action states, exact product/identity refs, camera plan, native caption regions
- **Reference assets:** `REF 1 = product`; optional `REF 2 = identity`; optional `REF 3 = style`
- **Sources:** SRC-29, SRC-23
- **Reuse:** SRC-29 original repository material MIT with third-party rights reserved, continuity concept only; SRC-23 private layout patterns abstracted. Original keyframe brief; no source storyboard, prompt or script copied.

### Prompt

Create keyframe `{SHOT_ID}` from `{APPROVED_SCRIPT_AND_SHOT_MAP}`. LOCK `{PRODUCT_IDENTITY_WARDROBE_AND_PROP_LEDGER}`. Depict the exact action state `{ACTION_STATE}` using `{CAMERA_AND_FRAMING}`; maintain `{CONTINUITY_FROM_PREVIOUS_SHOT}` and leave `{NATIVE_CAPTION_AND_UI_SAFE_ZONES}` clear. Use `{LIGHT_AND_PALETTE}`; output one `{ASPECT_RATIO}` frame. Render no timecode or captions into the image; record `{SHOT_DURATION_AND_MOVEMENT_NOTES}` separately. Do not invent product steps, dialogue, effects or results.

### Variations and adaptation

Produce frames separately and assemble the storyboard afterward. For animation, approve start/end poses and motion requirements in the video toolchain.

### Constraints and common failures

A grid can hide identity drift and impossible transitions. Two plausible stills do not guarantee an achievable or coherent movement.

### Quality checks

Track shot IDs, prop/wardrobe/product continuity, action truth and caption space; verify the ordered storyboard against the script and hand off motion/audio requirements explicitly.
