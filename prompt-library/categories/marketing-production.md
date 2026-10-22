# Marketing production briefs

Original, untested briefs from the 2026-10-21 coverage audit. Strategy, audience insights, message angles and claims must be supplied by the brand/marketing owner. These entries translate approved inputs into visual work. Exact copy, charts, screenshots and small-format layouts are assembled in native tools where appropriate.

## mkt-approved-angle-matrix — Approved message-angle creative matrix

- **Purpose:** Translate supplied message angles into visibly different concepts with traceable copy and claims.
- **Category:** marketing production
- **Tags:** marketing, performance, message angle, creative diversity, matrix, testing
- **Mode:** generate or edit
- **Model/tool:** image model plus campaign layout tool
- **Compatibility:** unverified — no performance outcome is established.
- **Validation:** adapted template
- **Required inputs:** approved angle-to-copy map, product/brand locks, concept architecture per angle, fixed placement and test ledger
- **Reference assets:** optional `REF 1 = product`; optional `REF 2 = style`
- **Sources:** SRC-23, SRC-29
- **Reuse:** SRC-23 private owner layout patterns abstracted; SRC-29 original material MIT with third-party rights reserved, commercial scene discovery only. Original brief; no source prompt or claims copied.

### Prompt

Produce concept `{CELL_ID}` from `{APPROVED_ANGLE_MATRIX}` for `{PLACEMENT}`. LOCK `{PRODUCT_AND_BRAND_LOCKS}`, `{EXACT_COPY}` and `{CLAIM_TO_EVIDENCE_MAP}`. Use the assigned `{VISUAL_ARCHITECTURE}` and `{SCENE}`, making the approved angle readable without inventing a new benefit. Keep `{CONTROLLED_TEST_VARIABLES}` unchanged and `{COPY_SAFE_ZONES}` available. Output one `{ASPECT_RATIO}` concept per file, with matrix IDs in filenames rather than image text. Add no testimonials, numbers or badges beyond approved inputs.

### Variations and adaptation

Use a concept matrix to explore distinct messages; use `evaluation-variant-comparison` for a test that changes only one factor. Log those as different evaluation designs.

### Constraints and common failures

Recolors can be mistaken for distinct concepts. Multiple changed factors cannot identify which factor caused a measured result.

### Quality checks

Trace each visual and string to its matrix cell; check concept differences, product fidelity, claim evidence and an honest record of controlled versus changed variables.

## mkt-display-banner-family — Fixed-slot display banner family

- **Purpose:** Recompose one approved message for genuinely different display slot geometries.
- **Category:** marketing production
- **Tags:** marketing, display, banner, leaderboard, skyscraper, google ads, fixed size
- **Mode:** generate or edit
- **Model/tool:** native layout/compression tool plus optional generated artwork
- **Compatibility:** unverified — exported dimensions and file weight must be checked.
- **Validation:** adapted template
- **Required inputs:** exact target slots, approved copy and CTA, artwork, logo, minimum type and file budget
- **Reference assets:** `REF 1 = product` hero; optional `REF 2 = style` campaign anchor
- **Sources:** SRC-37, SRC-23
- **Reuse:** SRC-37 official display-slot/file requirements paraphrased, no example ads copied; SRC-23 private layout patterns abstracted. Original production brief.

### Prompt

Prepare artwork and a layout proof for slot `{SLOT_PIXELS}` in `{APPROVED_BANNER_FAMILY}`. LOCK `{HERO_AND_LOGO_ASSETS}` and copy `{EXACT_STRINGS}`. Recompose using `{SLOT_SPECIFIC_HIERARCHY}`; do not squash or crop a larger ad. Keep `{MINIMUM_TEXT_SIZE}` and `{CTA_CLEARANCE}` at actual display size. Use `{BRAND_TOKENS}`. Generate background/hero artwork separately when useful; assemble original marks and live type downstream. Output the exact slot and `{FILE_BUDGET}` through the export tool, with no invented UI or extra copy.

### Variations and adaptation

Define a reduced-copy route approved by the owner for narrow slots. Keep uploaded display ads separate from responsive campaign asset ratios.

### Constraints and common failures

An attractive high-resolution proof can fail when reduced to a narrow slot. Raster text and compression can erase essential information.

### Quality checks

Inspect actual-pixel reading, slot dimensions, file weight, supported encoding, CTA and logo clarity; compare approved strings across the family.

## mkt-email-module-art — Email module image with live-content separation

- **Purpose:** Supply responsive email artwork without baking essential copy and actions into one image.
- **Category:** marketing production
- **Tags:** marketing, email, newsletter, crm, header, responsive, module
- **Mode:** generate or edit
- **Model/tool:** image model plus HTML email/layout tool
- **Compatibility:** unverified — email behavior must be tested in real clients.
- **Validation:** adapted template
- **Required inputs:** approved module wireframe, artwork role, desktop/mobile slots, live text and CTA regions, visual subject and brand tokens
- **Reference assets:** optional `REF 1 = product`; `REF 2 = composition` approved module wireframe
- **Sources:** SRC-32, SRC-23
- **Reuse:** SRC-32 general layout hierarchy paraphrased; SRC-23 private layout patterns abstracted. Email-specific contract is original workspace synthesis, not a platform specification.

### Prompt

Create artwork for email module `{MODULE_ID}` featuring `{SUBJECT}`. LOCK `{PRODUCT_AND_BRAND_RULES}`. Fit `{DESKTOP_ART_REGION}` and produce a separately recomposed `{MOBILE_ART_REGION}` from `{APPROVED_COMPOSITION}`. Leave `{LIVE_HEADLINE_BODY_AND_CTA_REGIONS}` free of important visual content; generate no essential offer text, legal line or button. Use `{PALETTE_AND_LIGHTING}` with a focal point that survives the approved crop. Target `{EXPORT_SIZE_AND_WEIGHT}` through downstream export. No fake inbox or email-client chrome.

### Variations and adaptation

Provide a text-free header, product module or editorial divider. Build live copy/CTA in HTML with appropriate alt text supplied from the real image content.

### Constraints and common failures

Image blocking can hide baked-in offers. Desktop-only framing and background assumptions may fail on mobile or dark clients.

### Quality checks

Check both slot crops, image-blocked fallback, mobile reading order, alpha/background behavior and actual delivered file weight; test the assembled email separately.

## mkt-case-study-evidence — Case-study evidence layout

- **Purpose:** Present supplied results and product evidence without inventing metrics or customer proof.
- **Category:** marketing production
- **Tags:** marketing, case study, b2b, evidence, results, customer, sales
- **Mode:** edit
- **Model/tool:** native layout/chart tool with optional image-generated decoration
- **Compatibility:** unverified — numbers and charts are assembled from supplied data.
- **Validation:** adapted template
- **Required inputs:** approved customer identity, dated evidence, exact metrics with denominators, quote permission, screenshot map and copy
- **Reference assets:** `REF 1..N = product` supplied evidence captures; optional `REF = identity` authorized customer portrait
- **Sources:** SRC-32, SRC-23
- **Reuse:** SRC-32 information hierarchy concept paraphrased; SRC-23 private layout patterns abstracted. Original evidence contract; no customer claim or source graphic copied.

### Prompt

Prepare a layout proof for `{APPROVED_CASE_STUDY}` with zones for context, intervention, result and evidence. LOCK `{EXACT_COPY_AND_METRICS}`, `{TIME_PERIOD_AND_DENOMINATORS}`, supplied captures and `{CUSTOMER_PERMISSION_SCOPE}`. Match each result to `{EVIDENCE_MAP}`; reserve charts for native rendering from the supplied data. Use `{BRAND_GRID}` and `{READING_ORDER}`. Output `{CANVAS}`. Generate decorative artwork separately; do not fabricate dashboards, customer logos, quotes, sample sizes or implied causation.

### Variations and adaptation

Use as a one-page sales visual, social case-study card or report panel; preserve the same evidence ledger across formats.

### Constraints and common failures

Missing context can turn a true number into a misleading claim. A generated chart must never be treated as a faithful data rendering.

### Quality checks

Reconcile every number and quote to evidence, including dates and denominators; inspect screenshot integrity, customer permissions and actual chart geometry.

## mkt-event-speaker-kit — Event and speaker identity kit

- **Purpose:** Produce coordinated event, speaker and schedule graphics with exact identity-to-slot mapping.
- **Category:** marketing production
- **Tags:** marketing, webinar, event, speaker, podcast, schedule, conference
- **Mode:** edit
- **Model/tool:** reference editor plus native layout tool
- **Compatibility:** unverified — identities and schedule copy require proofing.
- **Validation:** adapted template
- **Required inputs:** approved speaker portraits and names, event title, dates with timezone, role order, venue/link copy, format list
- **Reference assets:** `REF 1..N = identity` authorized portraits; optional `REF = style` brand treatment
- **Sources:** SRC-32, SRC-23
- **Reuse:** SRC-32 hierarchy concept paraphrased; SRC-23 private layout patterns abstracted. Original event brief; no source portraits, names or event copy copied.

### Prompt

Create event asset `{ASSET_ROLE}` for `{EVENT_TITLE}` using `{SPEAKER_TO_SLOT_MAP}`. LOCK portrait identities, name/title pairs, `{APPROVED_DATE_TIME_TIMEZONE}` and `{VENUE_OR_JOIN_COPY}`. Use `{HIERARCHY}` and `{BRAND_TOKENS}`; preserve `{PARTNER_ORDER}` and clear zones from `{FORMAT_SPEC}`. Composite original portraits, marks and exact type downstream. Output `{ASPECT_RATIO}`. Do not swap identities, add speakers, generate venue claims, alter timezones or invent booking links/QR codes.

### Variations and adaptation

Use separate announcement, individual speaker, reminder and schedule layouts. Podcast episode kits use episode number, guests and release time in the same identity ledger.

### Constraints and common failures

Correct names can be paired with wrong portraits; a missing timezone can make an otherwise accurate card unusable.

### Quality checks

Proof every identity/name/role assignment, date and timezone, partner order, exact copy and intended crop; generate functional QR codes separately from verified destinations.

## mkt-outdoor-distance-proof — Outdoor message and distance proof

- **Purpose:** Evaluate one supplied outdoor message at the intended viewing scale and context.
- **Category:** marketing production
- **Tags:** marketing, ooh, billboard, outdoor, distance, transit, poster
- **Mode:** generate or edit
- **Model/tool:** image model plus measured layout/print tool
- **Compatibility:** unverified — concept proof is not a press-ready or installation-approved file.
- **Validation:** adapted template
- **Required inputs:** measured placement, viewing distance and dwell context, approved short copy, mark/hero assets, production exclusion zones
- **Reference assets:** optional `REF 1 = background` placement photo; `REF 2 = product` approved hero/mark supplied separately as needed
- **Sources:** SRC-32, SRC-23
- **Reuse:** SRC-32 composition concepts paraphrased; SRC-23 private owner outdoor-layout patterns abstracted. Original proof contract; no source campaign copied.

### Prompt

Create a concept proof for `{OUTDOOR_PLACEMENT}` with one message `{EXACT_SHORT_COPY}` and `{APPROVED_HERO}`. LOCK `{BRAND_AND_CLAIM_RULES}`. Use `{PHYSICAL_LAYOUT_AND_SCALE}` and `{VIEWING_CONTEXT}`; reserve `{EXCLUSION_ZONES}` and avoid fine visual dependencies. Show flat artwork and a separately labeled placement proof, keeping the same proportions. Use `{PALETTE_AND_HIERARCHY}`; output `{PROOF_CANVAS}`. Composite exact type and marks in the measured layout; no invented dimensions, permit claims or simulated audience metrics.

### Variations and adaptation

Use a transit, retail-window or roadside brief with its actual dwell time and vendor specification. Print color, bleed and delivery size come from the supplier.

### Constraints and common failures

A close-up mockup can make unreadable copy look acceptable. Visual perspective is not evidence that a sign fits or meets production rules.

### Quality checks

Inspect a scaled-distance proof, one-message reading order, exact copy and placement proportions; obtain native artwork and supplier checks before production.

## ecom-cutaway-evidence — Evidence-based product cutaway

- **Purpose:** Explain supplied internal structure while separating known geometry from unknown areas.
- **Category:** e-commerce listing graphics
- **Tags:** ecommerce, cutaway, cross section, technical, internal, evidence, components
- **Mode:** edit
- **Model/tool:** reference editor plus CAD/diagram/layout tool
- **Compatibility:** unverified — an image model cannot recover unseen structure.
- **Validation:** adapted template
- **Required inputs:** approved exterior, internal/CAD evidence, cut plane, component map, exact labels and unknown-region treatment
- **Reference assets:** `REF 1 = product` exterior; `REF 2..N = product` corroborated internal views
- **Sources:** SRC-29, SRC-32
- **Reuse:** SRC-29 original repository material MIT with third-party rights reserved, technical-visual concept only; SRC-32 information hierarchy paraphrased. Original evidence controls; no source engineering graphic or prompt copied.

### Prompt

Create a cutaway proof of `{PRODUCT}` along `{APPROVED_CUT_PLANE}` using `{COMPONENT_TO_REFERENCE_MAP}`. LOCK exterior dimensions, component shapes and `{VERIFIED_RELATIONSHIPS}`. Expose only documented internals; render `{UNKNOWN_REGIONS}` as unillustrated or clearly labeled unknown zones rather than plausible inventions. Use `{VIEW_AND_SCALE}`, `{LEADER_LINE_RULES}` and `{APPROVED_LABELS}`. Output `{ASPECT_RATIO}`; composite precise geometry and text in native tools. No inferred layers, dimensions, patents, performance metrics or certifications.

### Variations and adaptation

Use an exploded assembly only when the brief supplies component separation and order. Otherwise use exterior feature callouts from existing commerce templates.

### Constraints and common failures

Realistic-looking internals can be wholly invented. A cutaway is a higher evidence burden than a decorative material hero.

### Quality checks

Trace every exposed component to evidence; verify cut-plane logic, orientation, count, unknown-region treatment, label pairing and exterior preservation.
