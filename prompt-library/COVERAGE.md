# Coverage guide: branding, marketing, apps and social

Generated from [use-cases.csv](use-cases.csv) and [index.csv](index.csv). Refresh with `node scripts/summarize-coverage.mjs --write`. The baseline column records the state immediately before the broad 2026-10-21 rescan; it is a scope judgment, not a measured quality score.

The catalog has **157 entries**: 90 curated/general entries and 67 imported source examples. There are 2 entries with recorded tested status; test evidence remains specific to those runs. Newly authored entries require their own scoped verification. Preparation entries return briefs/prompts, not images. An entry can serve several jobs, while several examples can serve one job; neither count is a use-case count.

This map defines **103 jobs**. 85 have image or hybrid template routes; 18 explicitly route to native tools or strategy. These are routing decisions, not claims that every job has been generated, production-qualified or fully implemented.

| Area | Jobs | Previously missing | Previously partial | Native/strategy handoffs |
|---|---:|---:|---:|---:|
| Branding | 26 | 5 | 4 | 6 |
| Marketing and commerce | 26 | 5 | 3 | 1 |
| App development visuals | 26 | 11 | 2 | 8 |
| Social media | 25 | 4 | 5 | 3 |

## How to use

Find the actual job below, then run `node scripts/find-prompts.mjs --use-case app-store-screenshots`. To browse an area use `--domain branding`, `--domain marketing`, `--domain app` or `--domain social`. Keyword searches also match job names. Every job records required inputs and a production gate in the CSV; exact-job search prints both.

`image` means artwork or a visual planning reference. `hybrid` requires native layout/compositing or implementation alongside image work. `native` routes directly to code/design/video tools. `strategy` routes to the Brand Manager or supplied approved planning work. P0 is launch/core work, P1 is an extension, P2 is optional; actual project scope overrides these defaults.

## Production boundaries

- Actual app screenshots come from the app; components, interactions, accurate charts, accessibility and builds are implemented/tested in native tools.
- Final marks, exact fonts, packaging artwork, live CTAs, legal text, barcodes/QR codes and print specifications use approved sources and native production tools.
- Generated concepts and source previews do not establish performance, repeatability or compatibility. Compare actual outputs against locks and delivery requirements before approval.
- Current app/marketplace/platform requirements and brief-specific dimensions must be checked for the destination. No universal app screenshot size or safe zone is inferred.

## Remaining limitations

The rescan closes catalog-routing gaps with authored briefs; it does not close image-test coverage. Prioritize representative tests for logo preservation, label seams, app screenshot compositing, alpha layers, theme pairs, crop safety, and narrow banner readability. Brand strategy, working app code, publishing, animation/audio, and supplier production approval remain outside a raster-prompt library. Add another use case whenever a real job is missing rather than claiming this checklist is exhaustive.

Source review and deduplication decisions: [coverage rescan](sources/coverage-rescan-2026-10-21.md), [source register](sources/source-register.md), [deduplication ledger](sources/deduplication-ledger.md).

## Branding

| Job | Priority | Baseline | Route | Template / handoff | Production gate |
|---|---|---|---|---|---|
| Positioning and audience brief | P0 | external | strategy | Approved strategy workflow | Brand Manager supplies strategy before visual production |
| Visual direction and moodboard territories | P0 | covered | image | [brand-moodboard-system](categories/brand-design-layout.md#brand-moodboard-system) | Approve one direction before asset production |
| Distinct logo symbol concepts | P0 | missing | hybrid | [brand-logo-concept-territories](categories/brand-production-systems.md#brand-logo-concept-territories) | Vector development and mark availability review |
| Responsive logo variants and favicon proof | P0 | partial | hybrid | [brand-responsive-mark-proof](categories/brand-production-systems.md#brand-responsive-mark-proof) | Place exact vector artwork and inspect at actual sizes |
| Typography hierarchy and font assets | P0 | external | native | Native production tools | Native type specimens and actual font files |
| Palette roles and accessible combinations | P0 | external | native | Native production tools | Measure contrast in target medium rather than inspect generated colors |
| Brand guideline presentation | P0 | partial | hybrid | [brand-moodboard-system](categories/brand-design-layout.md#brand-moodboard-system), [brand-responsive-mark-proof](categories/brand-production-systems.md#brand-responsive-mark-proof), [design-information-layout](categories/brand-design-layout.md#design-information-layout) | Assemble editable guidelines from approved assets |
| Consistent interface and brand icons | P0 | covered | hybrid | [design-icon-family](categories/brand-design-layout.md#design-icon-family) | Use existing vector icon system when available |
| Reusable illustration language | P0 | covered | image | [illustration-style-system](categories/portrait-editorial-illustration.md#illustration-style-system) | Approve anchor and export per asset contract |
| Mascot anchor and expression reference | P1 | covered | image | [consistency-character-sheet](categories/reference-consistency.md#consistency-character-sheet) | Use approved brand character without copying a franchise |
| Photographic art direction | P0 | covered | image | [product-material-hero](categories/product-photography.md#product-material-hero), [product-lifestyle-context](categories/product-photography.md#product-lifestyle-context) | Approve camera and material treatment against brand brief |
| Founder and team portrait style | P1 | covered | image | [portrait-editorial](categories/portrait-editorial-illustration.md#portrait-editorial) | Identity check and permission scope |
| Seamless brand motif repeat | P1 | missing | hybrid | [brand-seamless-pattern](categories/brand-production-systems.md#brand-seamless-pattern) | Tiled seam proof and native geometry where needed |
| Label wrap and seam preview | P0 | partial | hybrid | [brand-packaging-wrap-proof](categories/brand-production-systems.md#brand-packaging-wrap-proof) | Exact copy and native printer artwork |
| SKU range visual architecture | P0 | covered | image | [brand-color-coded-range](categories/authored-commerce.md#brand-color-coded-range) | Verify each SKU identity and count |
| Unboxing and insert sequence | P1 | missing | image | [brand-unboxing-sequence](categories/brand-production-systems.md#brand-unboxing-sequence) | No invented interior or included accessories |
| Partner and sponsor lockups | P1 | missing | hybrid | [brand-cobrand-lockup](categories/brand-production-systems.md#brand-cobrand-lockup) | Original marks and approved relationship wording |
| Stationery and merchandise applications | P1 | covered | hybrid | [brand-application-mockup-set](categories/authored-commerce.md#brand-application-mockup-set) | Native print artwork and original mark placement |
| Storefront and environmental signage | P1 | missing | hybrid | [brand-environmental-signage](categories/brand-production-systems.md#brand-environmental-signage) | Measured layout and production-owner installation checks |
| Brand campaign visual system | P0 | covered | image | [ad-modular-campaign](categories/advertising-social.md#ad-modular-campaign) | Consistent style contract across assets |
| Localized brand system | P0 | covered | hybrid | [design-localization-master](categories/brand-design-layout.md#design-localization-master) | Native-language proof and expansion checks |
| Brand material and finish presentation | P1 | covered | image | [edit-selective-style-material](categories/editing-compositing.md#edit-selective-style-material) | Silhouette preservation and supplier finish evidence |
| Editable proposal and presentation system | P1 | external | native | Native production tools | Use document or presentation tools with live type |
| Motion identity and sonic branding | P2 | external | native | Native production tools | Use animation and audio tools with timing and sound QA |
| Brand asset manifest and vector handoff | P0 | external | native | Native production tools | Package editable masters with usage rules and export checks |
| Reference observation and image-to-brief preparation | P0 | partial | hybrid | [brief-reference-observation](categories/brief-preparation.md#brief-reference-observation) | Preparation output only; distinguish visible observations from inferred or unknown facts |

## Marketing and commerce

| Job | Priority | Baseline | Route | Template / handoff | Production gate |
|---|---|---|---|---|---|
| Marketplace main product image | P0 | covered | image | [product-white-packshot](categories/product-photography.md#product-white-packshot) | Product fill and background and exact packaging check |
| Product gallery feature callouts | P0 | covered | hybrid | [amz-gallery-benefit-callouts](categories/authored-commerce.md#amz-gallery-benefit-callouts) | Claim and label proof at mobile size |
| Ingredient or component breakdown | P0 | covered | hybrid | [amz-gallery-whats-inside](categories/authored-commerce.md#amz-gallery-whats-inside) | No invented ingredients or example recipe weights |
| Product in use and lifestyle context | P0 | covered | image | [product-lifestyle-context](categories/product-photography.md#product-lifestyle-context) | Believable scale and contact and authorized implied benefits |
| Product comparison and claim table | P0 | covered | hybrid | [amz-gallery-comparison](categories/authored-commerce.md#amz-gallery-comparison) | Every comparison traceable to supplied evidence |
| How-to and assembly sequence | P0 | covered | hybrid | [amz-gallery-how-to-use](categories/authored-commerce.md#amz-gallery-how-to-use) | Correct sequence and safe intended use |
| Review and certification proof panel | P0 | covered | hybrid | [amz-gallery-proof-badges](categories/authored-commerce.md#amz-gallery-proof-badges), [perf-testimonial-ad](categories/authored-commerce.md#perf-testimonial-ad) | No fabricated ratings or certification marks |
| Amazon A+ modules | P1 | covered | hybrid | [amz-aplus-header-banner](categories/authored-commerce.md#amz-aplus-header-banner) | Exact module export and approved claims |
| Brand Store hero and range | P1 | covered | image | [amz-brandstore-hero](categories/authored-commerce.md#amz-brandstore-hero), [brand-range-on-plinth](categories/authored-commerce.md#brand-range-on-plinth) | Inspect desktop and mobile crops |
| Bundle inventory and included-item view | P0 | covered | image | [product-flat-lay](categories/product-photography.md#product-flat-lay) | Count every included item and exclude optional accessories |
| Evidence-based technical cutaway | P1 | partial | hybrid | [ecom-cutaway-evidence](categories/marketing-production.md#ecom-cutaway-evidence) | No unseen structure inferred from exterior-only images |
| Offer and promotion static | P0 | covered | hybrid | [perf-offer-chip-ad](categories/authored-commerce.md#perf-offer-chip-ad) | Live type and exact offer proof |
| Acquisition hook and hero | P0 | covered | hybrid | [perf-hook-headline-ad](categories/authored-commerce.md#perf-hook-headline-ad) | Exact copy and product fidelity |
| Retargeting objection and proof | P0 | covered | hybrid | [perf-problem-solution-ad](categories/authored-commerce.md#perf-problem-solution-ad), [perf-testimonial-ad](categories/authored-commerce.md#perf-testimonial-ad) | No inferred testimonial or guaranteed outcome |
| Message-angle concept exploration | P0 | partial | image | [mkt-approved-angle-matrix](categories/marketing-production.md#mkt-approved-angle-matrix) | Record changed factors and do not infer performance |
| Uploaded display banner sizes | P0 | missing | hybrid | [mkt-display-banner-family](categories/marketing-production.md#mkt-display-banner-family) | Actual-pixel reading and supported encoding |
| Google responsive campaign image assets | P0 | covered | image | [google-pmax-asset-set](categories/authored-commerce.md#google-pmax-asset-set) | Keep separate from uploaded display ad slots |
| Email and newsletter artwork modules | P0 | missing | hybrid | [mkt-email-module-art](categories/marketing-production.md#mkt-email-module-art) | Real client tests and image-blocked fallback |
| Landing-page desktop and mobile artwork | P0 | covered | hybrid | [ad-modular-campaign](categories/advertising-social.md#ad-modular-campaign), [design-localization-master](categories/brand-design-layout.md#design-localization-master) | Recompose crops and implement text and CTA natively |
| Webinar and event speaker kit | P1 | missing | hybrid | [mkt-event-speaker-kit](categories/marketing-production.md#mkt-event-speaker-kit) | Verify speaker pairing and schedule |
| B2B case study and sales proof | P1 | missing | hybrid | [mkt-case-study-evidence](categories/marketing-production.md#mkt-case-study-evidence) | Render charts from actual data and verify quotes |
| Outdoor and transit proof | P1 | missing | hybrid | [mkt-outdoor-distance-proof](categories/marketing-production.md#mkt-outdoor-distance-proof) | Scaled-distance proof and supplier print requirements |
| Seasonal campaign scene adaptation | P1 | covered | image | [edit-background-replace](categories/editing-compositing.md#edit-background-replace), [design-localization-master](categories/brand-design-layout.md#design-localization-master) | Preserve product truth and authorized cultural context |
| Creative experiment and results analysis | P0 | covered | hybrid | [evaluation-variant-comparison](categories/evaluation-comparison.md#evaluation-variant-comparison) | No inference of effectiveness from source preview or asset count |
| Budget attribution and campaign strategy | P0 | external | strategy | Approved strategy workflow | Brand Manager and analytics workflow own strategy and measurement |
| Transparent product cutout and consistent batch isolation | P0 | partial | hybrid | [edit-background-replace](categories/editing-compositing.md#edit-background-replace) | Inspect real alpha edges and product labels per file; native mask/composite for exact foreground pixels |

## App development visuals

| Job | Priority | Baseline | Route | Template / handoff | Production gate |
|---|---|---|---|---|---|
| Information architecture and user journeys | P0 | external | native | Native production tools | Design and validate real interaction paths before visual polish |
| Wireframe-to-visual design proof | P0 | covered | hybrid | [design-sketch-to-layout](categories/brand-design-layout.md#design-sketch-to-layout) | Design proof only and implement components in code |
| Reusable UI components and tokens | P0 | external | native | Native production tools | Use native components and token files rather than generated raster UI |
| App icon semantic concepts | P0 | missing | hybrid | [app-icon-concept](categories/app-visual-assets.md#app-icon-concept) | Small-size proof and platform-specific production |
| Adaptive launcher foreground and monochrome | P0 | missing | hybrid | [app-adaptive-icon-layers](categories/app-visual-assets.md#app-adaptive-icon-layers) | Native resource assembly and actual launcher masks |
| Store listing icon export | P0 | missing | hybrid | [app-icon-concept](categories/app-visual-assets.md#app-icon-concept) | Store icon is separate from launcher packaging |
| Store screenshot feature sequence | P0 | missing | hybrid | [app-store-screenshot-story](categories/app-visual-assets.md#app-store-screenshot-story) | Composite captured UI and verified shipped functionality |
| Google Play feature graphic | P0 | missing | hybrid | [app-play-feature-graphic](categories/app-visual-assets.md#app-play-feature-graphic) | Verify 1024x500 encoding and current cutoff zones |
| Onboarding illustration family | P0 | missing | image | [app-onboarding-illustrations](categories/app-visual-assets.md#app-onboarding-illustrations) | Native text and permissions remain separate |
| First-use and no-data artwork | P0 | missing | image | [app-empty-state-art](categories/app-visual-assets.md#app-empty-state-art) | Art semantics match live state without fake controls |
| Error offline and no-results artwork | P0 | missing | image | [app-empty-state-art](categories/app-visual-assets.md#app-empty-state-art) | Separate empty failure and completed states |
| Progression and achievement badge assets | P1 | missing | image | [app-achievement-badges](categories/app-visual-assets.md#app-achievement-badges) | Earned status is controlled by app logic |
| Coachmark and feature-tour placement | P1 | missing | hybrid | [app-product-tour-callouts](categories/app-visual-assets.md#app-product-tour-callouts) | Implement focus dismissal and responsive anchoring natively |
| Light and dark artwork adaptation | P0 | missing | hybrid | [app-theme-art-pair](categories/app-visual-assets.md#app-theme-art-pair) | Measure in-app contrast and inspect paired alpha edges |
| Editorial and product content imagery | P1 | covered | image | [illustration-style-system](categories/portrait-editorial-illustration.md#illustration-style-system), [product-lifestyle-context](categories/product-photography.md#product-lifestyle-context) | Use real identity and truthful content metadata |
| Avatar and mascot reference family | P1 | covered | image | [consistency-character-sheet](categories/reference-consistency.md#consistency-character-sheet) | Identity consistency and user privacy |
| Navigation and action icon family | P0 | covered | hybrid | [design-icon-family](categories/brand-design-layout.md#design-icon-family) | Prefer native/vector icons and accessible labels |
| Launch and splash artwork | P1 | covered | hybrid | [brand-responsive-mark-proof](categories/brand-production-systems.md#brand-responsive-mark-proof) | Native splash behavior and exact source mark |
| Tileable decorative textures | P2 | partial | hybrid | [brand-seamless-pattern](categories/brand-production-systems.md#brand-seamless-pattern) | Tiled seams and optimized asset size |
| Responsive screens and widget layouts | P0 | external | native | Native production tools | Implement and inspect actual responsive UI rather than resize a screenshot |
| Loading errors permissions and interaction states | P0 | external | native | Native production tools | Implement and test real behavior with native components |
| Accurate data charts and dashboards | P0 | external | native | Native production tools | Render data in chart/code tools and verify accessibility |
| Accessibility and localization behavior | P0 | external | native | Native production tools | Test screen reader focus keyboard scaling and real contrast |
| Asset density naming alpha and delivery | P0 | external | native | Native production tools | Validate exported pixels alpha file weight and resource packaging |
| Implementation builds integration and release | P0 | external | native | Native production tools | Use coding and platform tooling with meaningful build tests |
| Adapt a creative prompt to the actual model and surface | P0 | partial | hybrid | [brief-model-surface-adapter](categories/brief-preparation.md#brief-model-surface-adapter) | Preparation output only; preserve locks and omit unsupported fields or numeric defaults |

## Social media

| Job | Priority | Baseline | Route | Template / handoff | Production gate |
|---|---|---|---|---|---|
| Editorial calendar and audience strategy | P0 | external | strategy | Approved strategy workflow | Brand Manager owns topics and editorial priorities |
| Educational carousel with one point per slide | P0 | covered | hybrid | [social-carousel-slide-system](categories/authored-commerce.md#social-carousel-slide-system) | Consistent slide ratio and mobile reading order |
| Product launch and announcement tile | P0 | covered | hybrid | [social-announcement-tile](categories/authored-commerce.md#social-announcement-tile) | Exact dates and claims |
| Reels and Shorts cover crop system | P0 | partial | hybrid | [social-cover-crop-proof](categories/social-production-systems.md#social-cover-crop-proof) | Inspect every crop with current platform overlays |
| Video thumbnail concept test | P0 | partial | hybrid | [social-thumbnail-concept-test](categories/social-production-systems.md#social-thumbnail-concept-test) | No fake reactions or content claims |
| Poll question and link backdrop | P0 | missing | hybrid | [social-native-sticker-backdrop](categories/social-production-systems.md#social-native-sticker-backdrop) | Add working interaction in the native editor |
| Attributed quote and testimonial card | P0 | covered | hybrid | [perf-testimonial-ad](categories/authored-commerce.md#perf-testimonial-ad) | Verbatim quote and original identity proof |
| Creator UGC opening frame | P0 | covered | image | [ad-ugc-opening-frame](categories/advertising-social.md#ad-ugc-opening-frame) | Real product grip and required disclosure |
| Customer submission and community spotlight | P1 | covered | hybrid | [reference-role-composite](categories/reference-consistency.md#reference-role-composite), [perf-testimonial-ad](categories/authored-commerce.md#perf-testimonial-ad) | Retain provenance and avoid invented endorsement |
| Brand-owned meme and reaction remix | P1 | missing | hybrid | [social-owned-meme-remix](categories/social-production-systems.md#social-owned-meme-remix) | Source reuse scope and exact joke structure |
| Podcast episode and guest kit | P1 | partial | hybrid | [mkt-event-speaker-kit](categories/marketing-production.md#mkt-event-speaker-kit) | Identity pairing and release-time proof |
| Transparent livestream lower thirds and frames | P1 | missing | hybrid | [social-live-overlay-pack](categories/social-production-systems.md#social-live-overlay-pack) | True alpha and runtime overlay registration |
| Brand sticker and reaction assets | P1 | missing | image | [social-brand-sticker-pack](categories/social-production-systems.md#social-brand-sticker-pack) | Isolated exports with consistent alpha and padding |
| Short-video storyboard and shot references | P0 | partial | image | [social-video-keyframes](categories/social-production-systems.md#social-video-keyframes) | Frames are planning references and do not establish motion quality |
| Behind-the-scenes and founder stories | P1 | covered | image | [portrait-documentary](categories/portrait-editorial-illustration.md#portrait-documentary), [consistency-series-scene](categories/reference-consistency.md#consistency-series-scene) | Believable context without fabricated documentary claims |
| FAQ and myth-versus-fact cards | P0 | covered | hybrid | [design-information-layout](categories/brand-design-layout.md#design-information-layout) | No invented facts and legible mobile text |
| Data and milestone story cards | P1 | covered | hybrid | [design-information-layout](categories/brand-design-layout.md#design-information-layout), [mkt-case-study-evidence](categories/marketing-production.md#mkt-case-study-evidence) | Charts rendered from data and metrics independently checked |
| Pinterest product and how-to pins | P1 | covered | hybrid | [product-lifestyle-context](categories/product-photography.md#product-lifestyle-context), [amz-gallery-how-to-use](categories/authored-commerce.md#amz-gallery-how-to-use) | Platform-specific vertical canvas and visible approved branding |
| Avatar profile and channel identity | P0 | covered | hybrid | [brand-responsive-mark-proof](categories/brand-production-systems.md#brand-responsive-mark-proof) | Small-size recognition and exact source artwork |
| Channel banner across device crops | P1 | partial | hybrid | [social-cover-crop-proof](categories/social-production-systems.md#social-cover-crop-proof) | Inspect center-safe intersection for all required devices |
| Shoppable product scene and native tags | P1 | covered | hybrid | [product-lifestyle-context](categories/product-photography.md#product-lifestyle-context), [social-native-sticker-backdrop](categories/social-production-systems.md#social-native-sticker-backdrop) | Add actual product links/tags natively |
| Localized and cultural adaptation | P0 | covered | hybrid | [design-localization-master](categories/brand-design-layout.md#design-localization-master) | Native-language and cultural review |
| Animation editing music and captions | P0 | external | native | Native production tools | Use video/audio tools and verify caption timing |
| Scheduling community response and account operations | P0 | external | native | Native production tools | Platform actions require explicit publishing scope |
| Post and creative performance analysis | P0 | covered | hybrid | [evaluation-variant-comparison](categories/evaluation-comparison.md#evaluation-variant-comparison) | Separate measured results from aesthetic review |
