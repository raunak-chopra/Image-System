# Layout recipes

Brand-agnostic compositions. Each recipe is a structure; colors, fonts and copy come from `brands/<brand>/brand.md` and `claims.md`. Template IDs link to [prompt-library/index.csv](../prompt-library/index.csv). Recipes marked (ref) come from [swipe-file/breakdowns](../swipe-file/README.md); the rest come from platform practice in [formats/](../formats/README.md).

| # | Recipe | Structure | Best for | Templates |
|---|---|---|---|---|
| 1 | Hero + 5 callouts | product center-left at 55-60% width; 3-5 icon+label callouts on the right stack or around it; headline top | Amazon slide 2, Meta feed | `amz-gallery-benefit-callouts`, `ecom-earbuds-infographic-slide` |
| 2 | What's inside / exploded | layers or ingredients floating apart on a vertical axis, thin leader lines, 1-3 word labels | Amazon slide 3, infographics | `amz-gallery-whats-inside`, `ecom-exploded-ingredient-stack` |
| 3 | Us vs ordinary | two columns, our side highlighted in brand color, 4 rows of 2-4 words, check/cross glyphs | Amazon slide 5, Meta | `amz-gallery-comparison`, `perf-contrast-split-ad` |
| 4 | 3-step how-to | three numbered panels left-to-right or stacked, one verb per step | Amazon slide 6, organic | `amz-gallery-how-to-use`, `info-handwritten-3step-slide` |
| 5 | Proof strip | quote or rating + 3 badges (certifications, awards, customer count) on a calm background; only supplied proof | Amazon slide 7, Meta retargeting | `amz-gallery-proof-badges`, `perf-testimonial-ad` |
| 6 | In-use lifestyle | person or setting dominates; product visible and legible; one line of copy | Amazon slide 4, organic | `product-lifestyle-context`, `ads-lifestyle-earbuds` |
| 7 | Hook + offer chip | one-line hook top third, hero product, offer chip lower third, logo/footnote in safe area | Meta feed/Story, Google | `perf-hook-headline-ad`, `perf-offer-chip-ad` |
| 8 | Problem -> solution | split vertically: problem state (muted) left/top, solution (brand color) right/bottom | Meta, Stories | `perf-problem-solution-ad` |
| 9 | Triptych hero (ref) | three equal vertical frames: person with product / ingredient set dressing / use moment | brand intro, A+ header, Meta | `brand-triptych-hero-set` |
| 10 | Color-coded range (ref) | one SKU = one saturated color; backgrounds match the SKU; same camera and layout across SKUs | range shots, A+ comparison, variant ads | `brand-color-coded-range` |
| 11 | Range on plinth (ref) | full range grouped on stone/step against a gradient or environment backdrop | brand store hero, A+ header | `brand-range-on-plinth` |
| 12 | Low-angle hero on step (ref) | single product low in frame, angled, long soft shadow, 40%+ negative space | luxury packshot, web hero | `shoot-luxury-step-hero` |
| 13 | Floating objects on sky (ref) | products or cards suspended over open sky/solid field, shot from above | social, web hero | `shoot-floating-on-sky` |
| 14 | Application mockup set (ref) | bag, cup, card, sign, tote on one soft-colored field; flat packshots mixed with hand-held crops | brand presentation, organic | `brand-application-mockup-set` |
| 15 | Carousel system | slide 1 hook, slides 2-n one point each, last slide recap; identical grid, type scale and color | IG/LinkedIn organic and Meta carousel (1:1) | `social-carousel-slide-system` |
| 16 | Quiet emotional frame (ref) | dark or muted scene, one brand accent, small logo and one line | brand ads, OOH | `perf-emotional-moment-ad` |
| 17 | Bento modules | 6-8 rounded modules of unequal size, each one fact or visual | infographic, feature overview | `ecom-bento-product-infographic` |
| 18 | Mark proof matrix | approved mark variants crossed with supplied backgrounds and actual display sizes | brand handoff, partner hierarchy | `brand-responsive-mark-proof`, `brand-cobrand-lockup` |
| 19 | Repeat tile and separate seam proof | one production tile plus a separate multi-tile inspection | wrapping, textures, brand motifs | `brand-seamless-pattern` |
| 20 | Captured UI with feature headline | original capture in an assigned frame, one feature per image, live type composed separately | app-store screenshot story | `app-store-screenshot-story` |
| 21 | Art region with native controls | decorative art in a bounded area, actual text/control space reserved outside it | onboarding, empty states, interactions | `app-onboarding-illustrations`, `app-empty-state-art`, `social-native-sticker-backdrop` |
| 22 | Registered alpha layers | independent same-origin foreground/background or overlay layers with protected content windows | launcher resources, live overlays | `app-adaptive-icon-layers`, `social-live-overlay-pack` |
| 23 | Slot and crop proof family | separate recomposition for fixed slots or supplied crop intersections | display banners, video covers | `mkt-display-banner-family`, `social-cover-crop-proof` |

## Rules that apply to every recipe
- One message per frame; headline at most about 7 words on ads, 1-3 word labels on callouts.
- Keep a deliberate copy-safe zone (see [formats/](../formats/README.md) safe zones) and never put key content in platform UI areas.
- Grounded products: surface, contact shadow, one consistent light direction.
- Name exact fonts and hex colors from the brand kit; write approved copy verbatim in the prompt; composite exact copy afterwards if QA fails.
- Generate the master in the most flexible ratio, then recompose (not crop) for other ratios when text sits near edges.
- Test with a thumbnail check: if the message is unreadable at 300 px wide, the layout fails.
