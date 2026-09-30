# Portraits, editorial photography, illustration, and stylized imagery

## portrait-editorial — Controlled editorial portrait

- **Purpose:** Produce a distinctive editorial portrait with explicit camera and light logic.
- **Category:** portrait and editorial
- **Tags:** portrait, editorial, lighting, lens, realism
- **Mode:** generate
- **Model/tool:** text-to-image model
- **Compatibility:** unverified — general template.
- **Validation:** adapted template
- **Required inputs:** adult subject description or authorized identity reference, concept, ratio
- **Reference assets:** `[optional: REF 1 = authorized identity]`; `[optional: REF 2 = styling only]`
- **Sources:** SRC-01, SRC-03, SRC-07
- **Reuse:** Original synthesis. SRC-01 and SRC-07 are MIT—techniques paraphrased; SRC-03 has no explicit content license—paraphrase only.

### Prompt

Create an editorial portrait of `{ADULT_SUBJECT}` expressing `{EMOTION_OR_ATTITUDE}` in `{SETTING_OR_BACKDROP}`. [optional: Use `REF 1` only for identity; preserve facial proportions, skin tone, hairline, and distinctive features.] Styling: `{WARDROBE}`, `{HAIR_MAKEUP}`, no unrequested brand marks. Camera: `{SHOT_SIZE}`, `{VIEWPOINT}`, `{FOCAL_LENGTH_LOOK}`, `{DEPTH_OF_FIELD}`. Lighting: key from `{KEY_DIRECTION}` with `{LIGHT_QUALITY}`, `{FILL_OR_NEGATIVE_FILL}`, `{BACKGROUND_LIGHT}`. Finish: `{COLOR_GRADE}`, natural skin texture, `{EDITORIAL_PROPERTIES}`. Output `{ASPECT_RATIO}` with `{COPY_SAFE_AREA}`. No text or watermark.

### Variations and adaptation

Change one axis at a time: hard vs soft light, environmental vs seamless backdrop, color vs monochrome, direct gaze vs candid gaze.

### Constraints and common failures

Identity drift, waxy skin, jewelry asymmetry, malformed hands, and inconsistent catchlights are common.

### Quality checks

Check consent, adult presentation, likeness if required, skin texture, eyes/catchlights, hands, wardrobe continuity, and crop around joints.

## portrait-documentary — Credible environmental documentary frame

- **Purpose:** Create a natural scene grounded in activity and place rather than studio polish.
- **Category:** portrait and editorial
- **Tags:** documentary, environmental portrait, candid, natural light
- **Mode:** generate
- **Model/tool:** text-to-image model
- **Compatibility:** unverified — general template.
- **Validation:** adapted template
- **Required inputs:** subject, activity, location, ethics/context notes
- **Reference assets:** `[optional: REF 1 = location]`; `[optional: REF 2 = authorized subject identity]`
- **Sources:** SRC-03, SRC-14, SRC-16
- **Reuse:** Original synthesis. SRC-03 and SRC-16 have no explicit content license—paraphrase/concept only; SRC-14 is MIT—style-system concept paraphrased.

### Prompt

Create a respectful documentary photograph of `{ADULT_SUBJECT}` `{ACTIVITY}` in `{REALISTIC_LOCATION}` at `{TIME}`. The moment is `{MOMENT_DESCRIPTION}`, observed from `{CAMERA_POSITION}` with `{LENS_LOOK}` and available `{LIGHT_SOURCE}`. Preserve environmental evidence: `{CONTEXT_DETAILS}` without staging stereotypes or adding hardship/luxury cues not supplied. Color response `{COLOR_RESPONSE}`, grain `{GRAIN}`, dynamic range `{DYNAMIC_RANGE}`. Output `{ASPECT_RATIO}`. No captions, logos, sensationalism, or invented cultural/religious details.

### Variations and adaptation

Use wide establishing, medium activity, and detail frames as a three-shot sequence while keeping time, wardrobe, and geography consistent.

### Constraints and common failures

Synthetic candidness, inaccurate tools/clothing, cultural stereotypes, implausible signage, and overly cinematic grading can undermine credibility.

### Quality checks

Check factual place/activity details, dignity, body/tool interaction, readable signs, light continuity, and whether any visual claim is unsupported.

## illustration-style-system — Reusable illustration language

- **Purpose:** Define an original, repeatable illustration system without depending on an artist name.
- **Category:** illustration
- **Tags:** illustration, style system, palette, linework, texture
- **Mode:** generate
- **Model/tool:** text-to-image model
- **Compatibility:** unverified — general template.
- **Validation:** adapted template
- **Required inputs:** subject/story, medium, palette, shape and line rules
- **Reference assets:** `[optional: REF 1 = content reference]`; `[optional: REF 2 = visual properties only]`
- **Sources:** SRC-01, SRC-03, SRC-14
- **Reuse:** Original synthesis. SRC-01 and SRC-14 are MIT—techniques paraphrased; SRC-03 has no explicit content license—paraphrase only.

### Prompt

Illustrate `{SUBJECT_OR_SCENE}` as `{MEDIUM}` using this original visual system: shapes `{SHAPE_LANGUAGE}`; linework `{LINE_LANGUAGE}`; palette `{PALETTE}`; value structure `{VALUE_STRUCTURE}`; texture `{TEXTURE}`; perspective `{PERSPECTIVE}`; detail density `{DETAIL_DENSITY}`. Focal action: `{ACTION}` with `{EMOTIONAL_TONE}`. Compose `{COMPOSITION}` in `{ASPECT_RATIO}`. Maintain consistent anatomy and object design, clean silhouette separation, and intentional negative space. Avoid photorealism, generic stock iconography, signatures, watermarks, and extra text.

### Variations and adaptation

Save the seven style properties and reuse them across scenes. For a series, lock character turnarounds, palette swatches, and recurring prop descriptions.

### Constraints and common failures

Style drift occurs when medium and texture conflict; busy textures can destroy silhouettes; series characters may mutate.

### Quality checks

Compare palette, line weight, shape grammar, character identifiers, scale, negative space, and medium-specific mark behavior across outputs.
