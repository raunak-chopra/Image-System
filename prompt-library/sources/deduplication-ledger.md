# Deduplication ledger

This ledger records what was merged, preserved, or excluded. “Canonical” IDs are the templates that remain searchable in `index.csv`.

## 2026-10-21 source update decisions

| Source pattern | Decision | Destination | Reason |
|---|---|---|---|
| SRC-29 1.3 miniature workers; broad miniature motifs also in SRC-15 | Preserve one contract | `product-miniature-worksite` | Adds figure-to-product scale, per-figure action inventory, support/contact and label occlusion checks; no separate templates per branded object. |
| SRC-29 2.13 liquid action; existing imported beverage splashes | Preserve curated contract | `product-controlled-splash` | Adds explicit liquid path/depth order, protected regions, sealed-state locks and ingredient approval; imported examples remain examples. |
| SRC-29 2.14 physical/digital interaction | Preserve | `ad-screen-portal-composite` | Explicit crossing count, entry/endpoint and layer topology differ from generic reference compositing or UGC. |
| SRC-29 2.3 foreground beauty product | Merge variation | `product-lifestyle-context` | Focus order, hand scale and grip extend existing placement/identity controls; no separate portrait template. |
| SRC-29 4.5 ordered food breakdown | Merge variation | `amz-gallery-whats-inside` | Approved quantities/order and source-dish matching refine the existing ingredient layout. No source recipe weights imported. |
| SRC-29 10.5/10.9 mark materials | Merge caption-only variation | `edit-selective-style-material` | Material change already exists; explicit counters/silhouette checks added. Source prompt is missing, so no original prompt claimed. |
| SRC-29 2.2, 2.6, 4.1, 16.20 and broad scene/style categories | Exclude duplicate or unneeded cases | Existing product, campaign, illustration and reference canonicals | New subjects/look changes do not justify another contract; mismatch/missing-input and claim implications require brief-specific treatment. |
| SRC-29 unsupported pseudo-settings, malformed JSON and unproven test claims | Exclude as evidence | Dated source review | A source example cannot validate a provider API or workspace generation. |
| SRC-30 AwesomePrompts recommendation | Alias to existing source | SRC-01 | Linked GitHub destination is samuxbuilds/awesome-prompts; avoid duplicate source or corpus. |
| SRC-30 remaining gallery/enhancer links | Discovery directory only | `sources/library-update-2026-10-21.md` | Landing-page review or failed/unattempted access does not establish per-item quality, license or unique control. |
| SRC-30 fixed denoising and blanket negative-prompt advice | Exclude | Model routing unchanged | Advice is tool-dependent and unsupported as a shared studio setting. |
| SRC-31 descriptive briefs and identity-preserving edits | Merge conceptually; no new prompt | Existing product, portrait, background and selective-edit templates | No distinct reference/input/topology/QA strategy; article prose and model rankings not imported. |

## 2026-10-11 upgrade decisions

| Source pattern | Decision | Destination | Reason |
|---|---|---|---|
| SRC-24 concrete visual descriptions | Merge | `prompt-library/control-blocks.md` | Reusable controls across existing templates; no new scene variants needed. |
| SRC-25 returning to originals | Workflow only | anchor plus accepted-change ledger in creative workflow | Anecdotal lead; not independent capability evidence. |
| SRC-26 generic packshots, infographics and scenes | Exclude duplicates | existing product/design templates | Adds no distinct control strategy; license fetch unresolved, no prompt body imported. |
| SRC-27 iterative degradation | Preserve | `edit-anchor-rebase` | Explicit replay of accepted changes from a clean anchor differs from merely continuing a narrow edit. |
| SRC-14 style variables; SRC-19 specific controls | Preserve | `product-lighting-ablation`; control blocks | Independent same-camera lighting trials, not a generated grid or general campaign comparison. |
| SRC-28 observed framing, typography conflicts and foliage | Merge | `product-white-packshot` variations; control blocks; QA checklist | Scoped findings refine existing controls; no duplicate template, invented user preference or model rank. |
| SRC-28 production validation, 2026-10-21 | Evidence only | `product-controlled-splash`; `design-type-poster`; `edit-background-replace`; `design-localization-master` | [Five scoped trials](../../outputs/_tests/production-validation/2026-10-21/README.md) reuse canonical contracts; no extra template/import or tested-status promotion. Original foreground, exact layout and raw delivery limits remain explicit; no user preference or model rank inferred. |
| SRC-28 final-export scoring correction, 2026-10-21 | Correct evidence interpretation | Existing 15 recorded trial rows; shared delivery rules | Final-export checks determine D; raw-size mismatches remain limitations. Original scoring archived; other failures and unverified requirements retained. No duplicate template, new image test, content import or promotion. |

| Source pattern cluster | Decision | Canonical template(s) | Reason |
|---|---|---|---|
| White-background packshots, studio sweeps, catalog shots | Merge | `product-white-packshot` | Same control strategy: exact product/label lock, neutral sweep, contact shadow. |
| Material heroes, luxury product ads, glass/metal/cosmetic shots | Merge | `product-material-hero` | Differences are surface/lighting variations, not separate workflows. |
| Food/product/fashion overhead arrangements | Preserve | `product-flat-lay` | Overhead plane, spacing and non-overlap constraints are materially distinct from hero or lifestyle shots. |
| Product-in-room, product-in-use, environmental campaigns | Merge | `product-lifestyle-context` | Shared scale/contact/light integration and claim-neutrality requirements. |
| Modular campaigns, social posts, banners, blog/newsletter heroes | Merge | `ad-modular-campaign` | Channel ratios and copy-safe composition belong as variations. |
| UGC frames, phone screenshots, creator ads | Preserve | `ad-ugc-opening-frame` | Deliberately imperfect capture and screen/identity locks differ from polished campaign art. |
| Offers, event posters, sale banners, exact-copy cards | Merge | `ad-offer-layout`, `design-type-poster` | Offer hierarchy vs expressive typography are meaningful separate controls. |
| Icon examples and complete icon families | Merge | `design-icon-family` | Individual icons are cases of one grid/stroke/fill/optical system. |
| Localized posters and crop-flexible campaign masters | Preserve | `design-localization-master` | Text expansion, zones, safe areas and language QA are distinct production concerns. |
| Infographics, comparisons, timelines, diagrams, dashboards | Merge | `design-information-layout` | Same data-truth/layout/legibility contract; layout type is a variation. |
| Sketch-to-product, sketch-to-UI, wireframe-to-design | Preserve | `design-sketch-to-layout` | Structural-reference locks differ from free generation and style transfer. |
| Editorial, studio, fashion and LinkedIn portraits | Merge | `portrait-editorial` | Wardrobe/light/background are variations under one controlled portrait workflow. |
| Candid, documentary, street and environmental portraits | Merge | `portrait-documentary` | Shared credibility, available-light and context requirements. |
| Watercolor, anime, paper cut, clay, collage, ink, pixel art | Merge | `illustration-style-system` | Style families become fillable medium/line/palette/texture variables; look-only duplicates add little utility. |
| Object removal, cleanup, reflection fixes | Merge | `edit-object-remove` | All are narrow masked reconstruction tasks. |
| Background/scene replacement and outpainting | Merge with variation | `edit-background-replace` | Outpainting is preserved as an adaptation because it shares edge/perspective/light continuity. |
| Color/material overrides and visual style transfer | Preserve | `edit-selective-style-material` | Needs a strict target mask plus surface behavior and identity/content locks. |
| Restoration, colorization, tonal repair | Merge | `edit-restoration` | Colorization remains explicitly interpretive within conservative restoration. |
| Multi-reference identity/pose/style/environment mixing | Merge | `reference-role-composite` | Role separation and conflict priority are the core reusable control. |
| Character turnarounds, expression grids, model sheets | Merge | `consistency-character-sheet` | View/expression count and identity invariants are parameters. |
| Storyboards, comics, scene series and campaign continuity | Merge | `consistency-series-scene` | A continuity ledger and approved anchor govern all sequential frames. |
| Batch variants and same-prompt multi-model comparisons | Preserve | `evaluation-variant-comparison` | This is an evaluation workflow, not an aesthetic prompt category. |
| Nano Banana 2 counterparts | Preserve in dedicated folder | `nb2-*` | Kept separate because they add officially verified Gemini-specific routing/capability guidance while linking back to general principles. |
| General chat prompts from SRC-11 | Exclude | none | Useful catalog mechanics, but no unique image-production template. |
| Brand/celebrity/franchise recreations from SRC-04/15/16/18 | Exclude | none | Rights, identity, and misleading-replica risks; visual techniques already exist in safer canonical templates. |
| Source-specific “viral” portraits and style names | Exclude/merge as variables | portrait/illustration canonicals | High duplication and short shelf life; no distinct control strategy. |
| Stale model IDs, price/rate claims, universal magic-word rules | Exclude | official model guide only | Mutable or unverified; official documentation takes precedence. |
| Imported verbatim prompts (SRC-21, SRC-22), 2026-10-07 | Preserve (imported layer) | `imported/*.md` (67 entries) | Imported as distinct source examples for personal use; near-duplicates (same product class and layout) were dropped at screening. Overlap with curated templates is intentional: curated entries are paraphrased syntheses, imported entries are verbatim examples; prefer a curated entry when one exists and use imported ones for style/vocabulary or as test candidates. |

## Duplicate admission rule

### Reddit comment implementation — 2026-10-21

| Comment/source idea | Decision | Canonical destination | Reason |
|---|---|---|---|
| SRC-30 JuncYards: describe image before drafting | Preserve preparation contract | `brief-reference-observation` | Distinguishes visible observations, estimates and unknowns before choosing an image template; output is a brief, not an image or recovered prompt. SRC-12 prior workflow context retained. |
| SRC-30 commanderdgr8 / _Turd_Reich: name tool and consult docs | Preserve preparation contract | `brief-model-surface-adapter` | Separates approved visual meaning from provider syntax/settings while preserving reference order and locks. Not another visual scene. |
| SRC-30 321-throw-away-123; SRC-40/41/42/43 cutout and bulk-work leads | Merge variation | `edit-background-replace` | Alpha and batch-manifest checks refine the same foreground-preservation task; no extra template per service or product. |
| SRC-30 deteriorating iterations | Retain existing | `edit-anchor-rebase`; existing attempt budget | Already covered; no duplicate repair template or model-wide regression claim. |
| SRC-30 gallery examples, ImagePrompt/JSON tools and enhancers | Resource directory and preparation | comment review; existing canonical templates | Discovery does not prove rights, model controls or local success. |
| SRC-30 blanket prompt copying, fixed denoising and unsupported negative fields | Exclude as universal rules | tool adapter constraints | Tool-specific and rights-specific; no cross-model numeric default. |
| SRC-30 thanks, praise, questions and removed content | No asset/template inference | comment disposition table | No new control; removed content is unknown and another user's praise is not this owner's feedback. |

A new template is admitted only when it changes at least one of: required inputs, reference-role contract, preservation/lock strategy, output topology, evaluation method, or materially different failure/QA checks. A new subject, palette, genre, named style, camera, or channel ratio belongs in variations or placeholders.

### Four-domain coverage expansion — 2026-10-21

Thirty authored briefs follow a 100-job audit, rather than treating 125 mixed templates/examples as 125 distinct use cases. All new entries are untested. Native-only jobs remain explicit handoffs. See [coverage map](../use-cases.csv) and [review](coverage-rescan-2026-10-21.md).

| New canonical contract | Comparison with existing routes | Admission reason |
|---|---|---|
| `brand-logo-concept-territories` | moodboard / imported identity boards | Requires distinct semantic territories, flat silhouette and small-size comparison before native vector development. |
| `brand-responsive-mark-proof` | generic application mockups | Requires approved variants, optical sizing and minimum-size/clear-space checks; no derivation of new marks. |
| `brand-seamless-pattern` | generic illustration | Opposing-edge topology and tiled seam verification are new output requirements. |
| `brand-packaging-wrap-proof` | imported packaging sheets | Explicit supplier dieline, seam, front-anchor and closure zones; native print handoff. |
| `brand-cobrand-lockup` | general brand board | Partner-to-slot hierarchy, original mark preservation and relationship wording. |
| `brand-environmental-signage` | lifestyle placement | Measured mounting area, real-site preservation and sightline proofs. |
| `brand-unboxing-sequence` | generic sequence continuity | Approved physical opening states and per-state contents inventory; exterior-only references are insufficient. |
| `mkt-approved-angle-matrix` | modular campaign / variant comparison | Explicit angle-to-evidence-to-visual mapping; distinguishes concept exploration from single-factor experiments. |
| `mkt-display-banner-family` | responsive PMax assets | Actual fixed-slot geometry and pixel/file-budget proofs, not different crops of a hero. |
| `mkt-email-module-art` | web hero | Separates live email copy/CTA from artwork and requires image-blocked/mobile client proof. |
| `mkt-case-study-evidence` | infographic / testimonial | Metric dates, denominators, evidence captures and customer permissions form an explicit evidence ledger. |
| `mkt-event-speaker-kit` | announcement | Speaker identity-name pairing, sponsor order, exact timezone and schedule are required inputs. |
| `mkt-outdoor-distance-proof` | type poster | Actual viewing distance and measured placement require separate flat and contextual proofs. |
| `ecom-cutaway-evidence` | ingredient/exploded layouts | Corroborated internal structure, cut plane and unknown-region handling; no inferred internals. |
| `app-icon-concept` | general icon family | App-purpose silhouette and small-size proof before platform packaging, rather than a UI glyph grid. |
| `app-adaptive-icon-layers` | flat app icon | Registered foreground/background/monochrome resources and launcher mask tests. |
| `app-store-screenshot-story` | wireframe-to-design | Immutable actual UI captures and shipped-feature-to-frame order; native screenshot composition. |
| `app-play-feature-graphic` | generic wide banner | Separate official surface, icon-duplication avoidance and cutoff/overlay inspection. |
| `app-onboarding-illustrations` | generic illustration/series | Approved journey-step semantics with native text/control zones and no fake permission UI. |
| `app-empty-state-art` | generic illustration | Explicit cause/recovery mapping distinguishes no data, no results, failure and completion. |
| `app-achievement-badges` | icon family | Tier semantics, grayscale distinguishability and earned-state separation. |
| `app-product-tour-callouts` | information graphic | Exact real-control coordinates, ordered instructional steps and native behavior handoff. |
| `app-theme-art-pair` | material recolor | Semantic color-role remapping with fixed geometry, registration and in-app theme proof. |
| `social-cover-crop-proof` | generic thumbnail | Simultaneous destination crop intersection and platform-overlay proofs; no fixed universal crop. |
| `social-native-sticker-backdrop` | story promo | Reserved real interactive-control bounds and explicit ban on baked fake controls. |
| `social-owned-meme-remix` | generic composite | Permitted source format and setup/payoff anchors constrain the allowed transformation. |
| `social-live-overlay-pack` | source livestream UI images | Isolated registered alpha layers, camera/caption windows and runtime compositor proof. |
| `social-brand-sticker-pack` | character anchor sheet | One expression per isolated transparent export with silhouette and padding constraints. |
| `social-thumbnail-concept-test` | imported thumbnail example | Actual video promise, fixed controls and declared comparison factor; no engagement guarantee. |
| `social-video-keyframes` | generic series / imported storyboards | Approved shot IDs, timed script, action states and separate motion/audio handoff. |

Sources supporting requirements: SRC-32 visual-system taxonomy; SRC-33 captured-UI presentation; SRC-34 store-asset contracts; SRC-35 native adaptive layers; SRC-36 contextual state semantics; SRC-37 fixed display slots; SRC-38 vertical/product hierarchy; SRC-39 thumbnail/content truth. SRC-29/30 rescans supply discovery and negative findings, not validation of these newly authored controls. Existing SRC-14/23 organization and layout ideas remain scoped as stated per entry. No additional source prompt bodies copied.

### Preserved routes and excluded duplication

Existing flat lay handles bundles; lifestyle handles pins/product-tag scenes; character sheets handle mascot/avatar anchors; the carousel system handles education/FAQ; approved comparisons and testimonials handle claim-proof cards; localization handles market variants. Different products, festivals, palettes, portrait poses or camera brands do not get extra canonical IDs. Charts, working UI, vector masters, strategy, motion/audio and publishing remain native/strategy handoffs in the map.


## Capability guide documentation — 2026-10-22

DOC-CODEX-20261022 and DOC-PHOTO-20261022 support docs/Codex-Capabilities-and-How-to-Use.pptx. No canonical image template, imported prompt or index entry added. Suggested task prompts remain in docs/codex-guide.json to avoid duplicating production templates. The guide links to existing studio routing rather than replacing brand kits, format specs or the model router.
