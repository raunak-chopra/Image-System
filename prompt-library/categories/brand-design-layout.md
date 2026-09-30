# Brand identity, typography, graphic design, and layouts

## brand-moodboard-system — Evidence-led brand moodboard

- **Purpose:** Explore a coherent brand direction as a material and composition system.
- **Category:** brand identity
- **Tags:** moodboard, identity, palette, materials, art direction
- **Mode:** generate
- **Model/tool:** text-to-image model
- **Compatibility:** unverified — general template.
- **Validation:** adapted template
- **Required inputs:** brand strategy, audience, attributes, exclusions
- **Reference assets:** `[optional: REF 1 = approved logo]`; `[optional: REF 2..N = inspiration with declared roles]`
- **Sources:** SRC-05, SRC-14, SRC-16
- **Reuse:** Original synthesis. SRC-05 and SRC-16 have no explicit license—paraphrase/concept only; SRC-14 is MIT—style-system concept paraphrased.

### Prompt

Create a presentation-ready brand moodboard for `{BRAND}` based on `{POSITIONING}` and attributes `{ATTRIBUTES}` for `{AUDIENCE}`. Arrange `{PANEL_COUNT}` deliberate panels showing palette `{PALETTE}`, typography character `{TYPE_CHARACTER_NOT_FONT_NAME}`, materials `{MATERIALS}`, image language `{IMAGE_LANGUAGE}`, geometry `{GEOMETRY}`, and one hero composition. Use `{GRID}`, consistent spacing, and `{BACKGROUND}`. `REF 1` logo is LOCKED: do not redraw or modify it; if exact placement is unreliable, leave a labeled empty logo zone. Avoid `{EXCLUSIONS}`. No invented brand claims or filler copy.

### Variations and adaptation

Make separate “safe”, “distinctive”, and “experimental” directions while keeping strategy constant. Convert the selected direction into reusable visual tokens.

### Constraints and common failures

Moodboards can become generic collages, invent logotypes, or mix incompatible styles.

### Quality checks

Each panel should trace to one strategy attribute; check palette discipline, repeated visual grammar, logo integrity, and absence of unapproved copy.

## design-type-poster — Kinetic type-led poster

- **Purpose:** Create an expressive poster where typography and image share one hierarchy.
- **Category:** typography and graphic design
- **Tags:** poster, kinetic type, headline, hierarchy, campaign
- **Mode:** generate
- **Model/tool:** text-capable image model
- **Compatibility:** unverified — exact type fidelity varies.
- **Validation:** adapted template
- **Required inputs:** exact copy, event/campaign context, palette, ratio
- **Reference assets:** `[optional: REF 1 = brand system]`
- **Sources:** SRC-05, SRC-07, SRC-10, SRC-14
- **Reuse:** Original synthesis. SRC-05 has no explicit content license—paraphrase only; SRC-07 and SRC-14 are MIT—techniques paraphrased; SRC-10 mixed-license—no entry copied.

### Prompt

Design a `{ASPECT_RATIO}` type-led poster for `{EVENT_OR_CAMPAIGN}`. Exact visible copy only: headline `{HEADLINE_EXACT}`, secondary `{SECONDARY_EXACT}`, details `{DETAILS_EXACT}`. Create hierarchy with `{TYPE_STYLE_PROPERTIES}`, scale contrast, `{GRID_OR_DIAGONAL_FLOW}`, and intentional overlap with `{IMAGE_OR_SHAPE}` while keeping every letter readable. Palette `{PALETTE}`, texture `{TEXTURE}`, print/process cues `{PRINT_CUES}`, generous trim-safe margins. No extra words, pseudo-logos, signatures, or watermark.

### Variations and adaptation

Explore Swiss grid, editorial serif/sans tension, halftone burst, or modular geometric versions by changing properties rather than naming living designers.

### Constraints and common failures

Long copy reduces accuracy; decorative overlap can damage readability; fake glyphs may appear.

### Quality checks

Transcribe all text, inspect alignment/baseline, thumbnail hierarchy, contrast, trim safety, and whether the image supports rather than competes with the message.

## design-information-layout — Structured infographic or explainer

- **Purpose:** Turn supplied facts into a clear modular visual without inventing data.
- **Category:** layout and information design
- **Tags:** infographic, explainer, diagram, facts, modules
- **Mode:** generate
- **Model/tool:** text-capable image model
- **Compatibility:** unverified — factual/text accuracy must be reviewed.
- **Validation:** adapted template
- **Required inputs:** approved facts, sequence/relationships, audience, ratio
- **Reference assets:** `[optional: REF 1 = brand style]`; `[optional: REF 2 = source diagram topology]`
- **Sources:** SRC-05, SRC-07, SRC-10, SRC-14
- **Reuse:** Original synthesis. SRC-05 has no explicit content license—paraphrase only; SRC-07 and SRC-14 are MIT—techniques paraphrased; SRC-10 mixed-license—evidence method only.

### Prompt

Create a `{ASPECT_RATIO}` infographic explaining `{TOPIC}` to `{AUDIENCE}` using only these approved facts: `{FACTS_EXACT}`. Preserve this relationship/sequence: `{TOPOLOGY}`. Use `{MODULE_COUNT}` labeled modules, clear arrows/connectors, consistent icons, `{GRID}`, palette `{PALETTE}`, and `{ILLUSTRATION_OR_PHOTO_STYLE}`. Exact labels: `{LABELS_EXACT}`. Prioritize reading order and whitespace. Do not add statistics, causal claims, citations, steps, or labels not supplied.

### Variations and adaptation

For complex material, generate the visual scaffold without text and add copy downstream. Use a flow, comparison, timeline, or anatomy layout only if it matches the real topology.

### Constraints and common failures

Models invent facts, misroute arrows, duplicate modules, and garble small labels.

### Quality checks

Validate every fact and connector against the source, count modules, proof labels, inspect legend consistency, and test reading order at target size.

## design-icon-family — Small-size icon system

- **Purpose:** Establish and generate a coherent icon family that remains legible at its real display size.
- **Category:** brand identity and interface graphics
- **Tags:** icons, icon system, grid, stroke, optical weight, mobile
- **Mode:** generate
- **Model/tool:** text-capable image model or vector design workflow
- **Compatibility:** unverified — raster image models may not return editable vectors or exact pixel geometry.
- **Validation:** adapted template
- **Required inputs:** icon list, platform context, base grid, brand color rules, minimum display size
- **Reference assets:** `[optional: REF 1 = approved brand system]`; `[optional: REF 2 = existing icon geometry]`
- **Sources:** SRC-05, SRC-07, SRC-14
- **Reuse:** Original synthesis. SRC-05 has no explicit content license—paraphrase only; SRC-07 and SRC-14 are MIT—icon/style-system techniques paraphrased. No source prompt copied.

### Prompt

Create one consistent icon family for `{PLATFORM_AND_USE_CASE}` containing exactly `{ICON_COUNT}` symbols: `{ICON_LIST}`. SYSTEM LOCKS: `{GRID_SIZE}` base grid; `{STROKE_WIDTH}` uniform visual stroke; `{CORNER_RADIUS}` corner treatment; `{CAP_AND_JOIN}`; `{FILL_RULE}`; `{COLOR_RULE}`; `{PERSPECTIVE_RULE}`; consistent optical weight and baseline. Each symbol must remain recognizable at `{MIN_DISPLAY_SIZE}` and scale cleanly to `{MAX_DISPLAY_SIZE}`. Present icons separated and aligned on `{BACKGROUND}` with no labels, mockup devices, gradients, shadows, duplicate symbols, or extra icons. Output `{ASPECT_RATIO}` as a visual specification; recreate approved geometry as vectors downstream.

### Variations and adaptation

Choose outline, solid glyph, or tactile 3D as one system—do not mix them. Test navigation icons together because consistency is easier to judge as a family.

### Constraints and common failures

Image models may vary stroke width, invent symbols, merge neighboring icons, or produce raster edges despite vector language. Platform names describe context, not permission to copy protected system artwork.

### Quality checks

Count symbols; test at minimum size; compare stroke, corners, baseline, negative space, silhouette recognition, optical weight, and color. Redraw final approved icons as true vectors.

## design-localization-master — Localization-ready campaign master

- **Purpose:** Create a stable visual master with named zones that can accommodate multiple languages and market requirements.
- **Category:** advertising layout and localization
- **Tags:** localization, campaign system, text zones, safe areas, multi-market
- **Mode:** generate or edit
- **Model/tool:** text-capable image model plus downstream design tool
- **Compatibility:** unverified — language rendering and editable-layer support vary by tool.
- **Validation:** adapted template
- **Required inputs:** source-market copy, target markets/languages, longest-copy estimate, logo/disclaimer rules, format set
- **Reference assets:** `[optional: REF 1 = approved campaign visual]`; `[optional: REF 2 = locked product]`
- **Sources:** SRC-05, SRC-07, SRC-10
- **Reuse:** Original synthesis. SRC-05 has no explicit content license—paraphrase only; SRC-07 is MIT—system concept paraphrased; SRC-10 mixed-license—workflow evidence only.

### Prompt

Create a localization-ready master for `{CAMPAIGN}` in `{MASTER_FORMAT}`. Preserve `{APPROVED_VISUAL_SYSTEM}` and [optional: the exact product from `REF 2`]. Build named, uncluttered zones: `HEADLINE` at `{HEADLINE_ZONE}` sized for `{LONGEST_HEADLINE_LENGTH}`; `DETAILS` at `{DETAIL_ZONE}`; `CTA` at `{CTA_ZONE}`; `LOGO` at `{LOGO_ZONE}`; `DISCLAIMER` at `{DISCLAIMER_ZONE}`. Use `{BACKGROUND_STYLE}`, brand palette `{PALETTE}`, and crop-safe composition for `{DERIVATIVE_FORMATS}`. Render source-market copy only if supplied exactly: `{SOURCE_COPY_EXACT}`. Do not invent translations, prices, claims, legal lines, flags, cultural symbols, logos, or filler text.

### Variations and adaptation

Generate a text-free master for production and a labeled-zone proof for reviewers. For each market, change only approved localized copy, price/legal line, and spacing needed for text expansion.

### Constraints and common failures

Long translations overflow; scripts have different line-breaking needs; generated text may be wrong; culturally specific imagery may not transfer safely.

### Quality checks

Overlay every target format; test the longest translation and right-to-left layout where applicable; proof copy, price, claims, logo clear space, disclaimer size, and visual consistency across markets.

## design-sketch-to-layout — Sketch or wireframe to polished design

- **Purpose:** Convert an approved sketch or wireframe into a polished UI, product concept, or layout without losing its information architecture.
- **Category:** brand identity and layout
- **Tags:** sketch, wireframe, UI mockup, product concept, structure lock
- **Mode:** edit
- **Model/tool:** multimodal image editor
- **Compatibility:** unverified — general template; verify image-reference editing support.
- **Validation:** adapted template
- **Required inputs:** structural sketch, content inventory, design system, target viewport
- **Reference assets:** `REF 1 = structure and hierarchy`; `[optional: REF 2 = visual system only]`
- **Sources:** SRC-06, SRC-09, SRC-12, SRC-14
- **Reuse:** Original synthesis. SRC-06 has no explicit content license—paraphrase only; SRC-09, SRC-12 and SRC-14 are MIT—workflow/system concepts paraphrased, no prompt copied.

### Prompt

Use `REF 1` as the structural truth for a polished `{OUTPUT_TYPE}` serving `{USER_AND_TASK}`. LOCK its section order, component positions, relative scale, alignment logic, navigation path, and information hierarchy. Replace rough marks only with the supplied content: `{CONTENT_INVENTORY}`. Apply `{DESIGN_SYSTEM}` with `{TYPE_HIERARCHY}`, `{COLOR_ROLES}`, `{SPACING_GRID}`, `{CORNER_AND_STROKE_RULES}`, and accessible contrast. Use `REF 2` only for `{ALLOWED_STYLE_PROPERTIES}`. Target `{VIEWPORT_OR_RATIO}`. Do not invent features, labels, data, logos, or interactions; do not copy literal content from a style reference.

### Variations and adaptation

For an industrial concept, replace UI rules with materials, dimensions and functional callouts. For responsive views, produce one viewport at a time from the same component/content ledger.

### Constraints and common failures

Models may beautify away hierarchy, invent unreadable copy, merge components, or make a visually plausible but unusable interface.

### Quality checks

Overlay against the sketch; verify topology, every required component and exact string, alignment/spacing, contrast, platform plausibility, and absence of invented functionality.
