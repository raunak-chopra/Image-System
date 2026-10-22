# Brand production systems

Original briefs added after the 2026-10-21 coverage audit. They provide concept and proof artwork. Approved marks, typography, print separations and manufacturing files require native design tools. Apply the brand kit, shared control blocks and surface brief to every entry; no prompt is locally tested.

## brand-logo-concept-territories — Distinct logo concept territories

- **Purpose:** Explore different symbol ideas before selecting a mark for vector development.
- **Category:** brand identity
- **Tags:** logo, symbol, monogram, concept, territories, branding
- **Mode:** generate
- **Model/tool:** image model plus vector design tool
- **Compatibility:** unverified — concept artwork only.
- **Validation:** adapted template
- **Required inputs:** approved name and positioning, concept territories, forbidden motifs, palette, comparison size
- **Reference assets:** none; optional `REF 1 = style` with permitted traits listed
- **Sources:** SRC-32; SRC-29 branding-category discovery
- **Reuse:** SRC-32 official design-language concepts paraphrased; no IBM assets or page text copied. SRC-29 MIT original repository material, third-party rights reserved; category inspiration only, no source prompt or mark copied. Original workspace brief.

### Prompt

Create a separate concept sheet for `{BRAND_NAME}` exploring `{TERRITORY_COUNT}` supplied territories: `{TERRITORY_LIST}`. LOCK the approved name, audience and `{BRAND_ATTRIBUTES}`. Give each territory a different underlying visual metaphor, not a recolor. Show a flat symbol, a single-color silhouette and a small-size preview in each equal cell. Use `{APPROVED_PALETTE}` on a neutral field. Set only the supplied territory identifiers `{CELL_LABELS}`; place the brand name downstream in `{APPROVED_FONT}`. Output `{ASPECT_RATIO}`. Avoid `{FORBIDDEN_MOTIFS}` and supplied competitor marks; no mockup lighting or invented taglines.

### Variations and adaptation

Use initials only when an approved monogram is part of the brief. Develop the selected idea in vectors; compare with supplied competitor references before approval.

### Constraints and common failures

Similar silhouettes can disguise weak concept diversity. Generated symbols and lettering do not establish trademark availability or production geometry.

### Quality checks

Check one-to-one territory coverage, distinct metaphors, silhouette legibility, exact identifiers and forbidden motifs; record which concept proceeds to vector development.

## brand-responsive-mark-proof — Responsive logo and lockup proof

- **Purpose:** Check approved mark variants across space and contrast constraints.
- **Category:** brand identity
- **Tags:** responsive logo, lockup, favicon, clear space, monochrome
- **Mode:** edit
- **Model/tool:** reference editor plus vector/layout tool
- **Compatibility:** unverified — exact marks must be placed from supplied artwork.
- **Validation:** adapted template
- **Required inputs:** approved variant files, allowed backgrounds, minimum sizes, clear-space rule, proof slots
- **Reference assets:** `REF 1..N = product` for separately approved mark variants
- **Sources:** SRC-32
- **Reuse:** SRC-32 design-system organization concept only; no IBM logo, asset or prose copied. Original workspace proof contract.

### Prompt

Prepare a proof board for `{APPROVED_VARIANT_MAP}` using the supplied artwork. LOCK every mark's geometry, counters, lettering and proportions. Arrange `{PROOF_SLOTS}` showing each allowed horizontal, stacked, symbol-only or monochrome variant on `{ALLOWED_BACKGROUNDS}`. Apply `{MINIMUM_SIZE_AND_CLEAR_SPACE_RULES}`; use only approved variants, without deriving a new symbol from a full logo. Reserve labels `{EXACT_SLOT_LABELS}` for downstream typesetting. Output `{ASPECT_RATIO}`. Never stretch, crop, recolor beyond the approved mapping, or add effects to the mark.

### Variations and adaptation

Use the same proof for app avatars, favicons and co-located partner marks only when the matching artwork exists. Assemble the exact board in a vector/layout tool.

### Constraints and common failures

An image model may silently redraw artwork or fill counters. Treat the generated board as placement intent until original assets are composited.

### Quality checks

Overlay every mark with its source; check minimum rendered size, clear space, contrast, and the exact variant-to-slot assignment.

## brand-seamless-pattern — Brand motif repeat tile

- **Purpose:** Build a repeatable raster motif with verifiable seam continuity.
- **Category:** brand identity
- **Tags:** pattern, seamless, repeat, textile, wrapping, background, tile
- **Mode:** generate
- **Model/tool:** image model plus tiling/compositing tool
- **Compatibility:** unverified — seamlessness requires tiled output inspection.
- **Validation:** adapted template
- **Required inputs:** approved motifs, repeat topology, density, motif scale, palette, tile dimensions
- **Reference assets:** optional `REF 1 = style` for motif language; exact logos added downstream
- **Sources:** SRC-32, SRC-14
- **Reuse:** SRC-32 design-language concept paraphrased; SRC-14 MIT style-variable technique only. Original pattern brief; no reference motif or protected mark copied.

### Prompt

Create one repeat tile using only `{APPROVED_MOTIFS}`. LOCK `{PALETTE_AND_SHAPE_RULES}`. Use `{REPEAT_TOPOLOGY}`, `{MOTIF_SCALE}` and `{DENSITY}` with a quiet region distribution suitable for `{APPLICATION}`. Match opposing edges in position, color and texture so adjacent copies continue the design. Render no lettering, borders, shadows or logo-like additions. Output a single `{TILE_RATIO}` tile, targeting `{DELIVERY_PIXELS}` for later export. Show repeat proofs separately; do not bake a preview grid into the tile.

### Variations and adaptation

Raster texture can remain bitmap; precise geometric repeats should be rebuilt as vectors or code. Make half-drop and straight-repeat versions from explicit topology briefs.

### Constraints and common failures

Edge matching can fail despite a seamless request. Density may become noticeably heavier at corners when repeated.

### Quality checks

Inspect a 3-by-3 tile assembly, edge differences, corner joins, scale, motif inventory and the absence of visible grid lines.

## brand-packaging-wrap-proof — Packaging artwork wrap and seam proof

- **Purpose:** Preview approved label artwork on an approved package without inventing print geometry.
- **Category:** brand identity
- **Tags:** packaging, label, wrap, seam, dieline, print proof
- **Mode:** edit
- **Model/tool:** reference editor plus native packaging/mockup tool
- **Compatibility:** unverified — generated proof is not a printer-ready dieline.
- **Validation:** adapted template
- **Required inputs:** package views, approved flat artwork, supplier dieline, front anchor, seam and closure zones
- **Reference assets:** `REF 1 = product` package; `REF 2 = style` approved print artwork; `REF 3 = composition` supplier dieline
- **Sources:** SRC-32; SRC-29 product-category discovery
- **Reuse:** SRC-32 system/layout concepts paraphrased; SRC-29 original material MIT and third-party rights reserved, concept only. No source artwork or prompt copied.

### Prompt

Prepare a packaging wrap proof for `{PACKAGE}`. Preserve REF 1 geometry and REF 2 artwork exactly, with placement governed by REF 3. Align `{FRONT_ANCHOR}` and `{SEAM_LOCATION}`; keep `{NO_PRINT_AND_CLOSURE_ZONES}` clear. Show `{REQUIRED_PROOF_VIEWS}` with consistent scale, substrate `{APPROVED_SUBSTRATE}` and `{LIGHTING}`. Do not mirror lettering, distort proportions, move regulated copy, add ingredients or invent hidden panels. Output `{ASPECT_RATIO}`. Composite original artwork downstream wherever generated print drifts; keep technical dielines separate from the presentation render.

### Variations and adaptation

Require separate approved panels for cartons, pouches and cylindrical labels. Use supplier bleed, folds and tolerances rather than generic measurements.

### Constraints and common failures

Curvature can hide missing content and seams can split a mark. A render cannot establish cut, fold, color-separation or barcode compliance.

### Quality checks

Compare front/back/seam placement to the dieline; proof all copy; check closure clearance, substrate finish and original artwork fidelity.

## brand-cobrand-lockup — Co-brand hierarchy and spacing proof

- **Purpose:** Apply a supplied partnership hierarchy without merging or changing marks.
- **Category:** brand identity
- **Tags:** co-brand, partnership, sponsor, lockup, logo hierarchy
- **Mode:** edit
- **Model/tool:** native layout tool with optional image-generated background
- **Compatibility:** unverified — exact asset placement requires compositing.
- **Validation:** adapted template
- **Required inputs:** approved partner marks, order, relative optical sizes, separator and clear-space rules, approved relationship wording
- **Reference assets:** `REF 1..N = product` approved partner marks
- **Sources:** SRC-32
- **Reuse:** SRC-32 general layout hierarchy concept only; no IBM marks or prose copied. Original workspace contract.

### Prompt

Create a placement proof for `{PARTNERSHIP}`. LOCK the supplied marks and `{APPROVED_RELATIONSHIP_COPY}`. Arrange `{PARTNER_ORDER}` using `{OPTICAL_SIZE_RULES}`, `{SEPARATOR_RULE}` and `{CLEAR_SPACE}` on `{BACKGROUND}`. Show only `{REQUESTED_LOCKUP_ORIENTATIONS}` in clearly separated proof cells. Use exact original marks for final assembly; generate background treatment only if needed. Output `{ASPECT_RATIO}`. No fused marks, invented endorsement language, sponsor-tier changes or unauthorized mark colors.

### Variations and adaptation

For sponsor walls, require a tier-to-slot map and an explicit repetition count. Do not infer equal status when the brief specifies a lead partner.

### Constraints and common failures

Equal bounding boxes do not guarantee equal optical weight. Models may redraw names or reorder partners.

### Quality checks

Verify original artwork, partner order, optical weight, tier mapping, relationship copy and clear space in each proof.

## brand-environmental-signage — Signage in a measured environment

- **Purpose:** Preview brand signage against actual mounting and sightline constraints.
- **Category:** brand identity
- **Tags:** signage, storefront, environmental, wayfinding, retail, space
- **Mode:** edit
- **Model/tool:** reference editor plus measured layout/CAD tool
- **Compatibility:** unverified — photographic preview does not establish fit or fabrication readiness.
- **Validation:** adapted template
- **Required inputs:** site photograph, measured mounting area, artwork, material, viewing positions, installation exclusions
- **Reference assets:** `REF 1 = background` site; `REF 2 = product` approved sign artwork
- **Sources:** SRC-32; SRC-29 sections 7 and 8 discovery
- **Reuse:** SRC-32 composition concepts paraphrased; SRC-29 MIT original material with third-party rights reserved, setting concept only. No source signage, building or prompt copied.

### Prompt

Place the approved `{SIGN}` from REF 2 onto `{MOUNTING_REGION}` in REF 1. LOCK the site geometry, entrances, sightlines and sign artwork. Use `{MEASURED_SIZE}` and `{MATERIAL_AND_FIXING_DESCRIPTION}`; match site perspective and `{LIGHT_CONDITIONS}`. Show `{VIEWING_POSITIONS}` as separate proofs, maintaining the same installed size. Keep `{INSTALLATION_EXCLUSIONS}` unobstructed. Output `{ASPECT_RATIO}` with no added readable text. Do not invent measurements, structural fixings or compliance approvals.

### Variations and adaptation

For wayfinding, supply every destination and arrow direction. Verify measured installation and accessibility requirements with the production owner.

### Constraints and common failures

Perspective can make an impossible fit look plausible. Generated signs can obscure doors or alter the building.

### Quality checks

Compare site landmarks, measured fit, arrow direction, mounting plane, shadow and reading distance; preserve the untouched site photograph.

## brand-unboxing-sequence — Packaging unboxing state sequence

- **Purpose:** Show a real package's opening sequence with controlled contents and physical states.
- **Category:** brand identity
- **Tags:** unboxing, packaging, opening, sequence, contents, inserts
- **Mode:** edit
- **Model/tool:** multimodal reference editor
- **Compatibility:** unverified — each opening state requires supporting references.
- **Validation:** adapted template
- **Required inputs:** approved state photographs, contents manifest, opening order, camera and surface, per-state caption or none
- **Reference assets:** `REF 1..N = product` for package states and contents
- **Sources:** SRC-29; SRC-23
- **Reuse:** SRC-29 MIT original material with third-party rights reserved, sequence concept only; SRC-23 private owner reference patterns abstracted. Original wording; no source prompt or artwork copied.

### Prompt

Create `{STATE_COUNT}` separate unboxing frames for `{PACKAGE}` from `{APPROVED_STATE_MAP}`. LOCK the package, printed artwork and `{CONTENTS_MANIFEST}`. Follow `{OPENING_ORDER}` with consistent camera, `{SURFACE}`, lighting and scale. Each frame may expose only the contents visible at its assigned state; show actual tabs, hinges and inserts from references. Reserve `{CAPTION_ZONE}` for `{APPROVED_CAPTIONS_OR_NONE}` downstream. Output each frame at `{ASPECT_RATIO}`. No added gifts, accessories, seals, unsupported opening mechanisms or duplicated contents.

### Variations and adaptation

Use one approved state as an anchor; generate frames separately before assembling a storyboard. For a conceptual package, label all views as concepts rather than real product evidence.

### Constraints and common failures

An opaque box does not reveal hidden construction. Do not infer interiors from an exterior-only reference.

### Quality checks

Count contents at every state; track each item across frames; verify opening mechanics, print orientation, contact, scale and unchanged package identity.
