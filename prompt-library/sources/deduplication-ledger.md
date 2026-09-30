# Deduplication ledger

This ledger records what was merged, preserved, or excluded. “Canonical” IDs are the templates that remain searchable in `index.csv`.

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

## Duplicate admission rule

A new template is admitted only when it changes at least one of: required inputs, reference-role contract, preservation/lock strategy, output topology, evaluation method, or materially different failure/QA checks. A new subject, palette, genre, named style, camera, or channel ratio belongs in variations or placeholders.
