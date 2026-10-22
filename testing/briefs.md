# Test briefs

16 briefs covering the buckets that do 90% of the work. Brand for product briefs: **Spunge** (kit in [brands/spunge/](../brands/spunge/brand.md); supply real packshots as references). Food and social briefs: **Namak Kam Tha**. `[owner to supply]` marks inputs only the owner can provide; do not invent them. Run all three models on each.

| # | Template id | Brand | Format | Exact copy / inputs | Pass looks like |
|---|---|---|---|---|---|
| 1 | `product-white-packshot` | Spunge | amazon-main | REF 1 = bottle packshot | pure white edges, fill >= 85%, label intact; `post/check.py amazon-main` passes |
| 2 | `amz-gallery-benefit-callouts` | Spunge | amazon-gallery | headline + 3-5 labels from `claims.md` or `[owner to supply]` | labels exact, readable at 300 px |
| 3 | `amz-gallery-whats-inside` | Spunge | amazon-gallery | component names `[owner to supply]`; numbers: none | only supplied components appear |
| 4 | `amz-gallery-comparison` | Spunge | amazon-gallery | rows from approved claims, footnote `*Compared to ordinary fish oil supplements.` | footnote present, no competitor marks |
| 5 | `amz-gallery-how-to-use` | Spunge | amazon-gallery | step titles `[owner to supply]` | no invented usage/dose |
| 6 | `amz-aplus-header-banner` | Spunge | amazon-aplus-header + amazon-aplus-banner | brand line `[owner to supply]` | no promo text; product survives 970x300 crop |
| 7 | `perf-hook-headline-ad` | Spunge | meta-feed-4x5 + meta-story-9x16 | hook "Your body only benefits from what it actually absorbs." (approved line), footnote as above | safe zones respected, hook exact |
| 8 | `perf-offer-chip-ad` | Spunge | meta-feed-4x5 | offer text `[owner to supply]` | offer text exact |
| 9 | `perf-problem-solution-ad` | Spunge | meta-story-9x16 | non-sensitive problem scene | policy-safe scene, labels exact |
| 10 | `shoot-levitating-supplement-jar` | Spunge | meta-feed-4x5 | REF 1 = packshot | capsule count believable, label intact |
| 11 | `shoot-luxury-step-hero` | Spunge | amazon-gallery | REF 1 = packshot | label legible at 100%, one accent only |
| 12 | `brand-color-coded-range` | Spunge | amazon-aplus-header | variants + hex `[owner to supply]` (skip if single SKU) | each variant matches its reference |
| 13 | `social-carousel-slide-system` | Namak Kam Tha | ig-feed-4x5 | topic "Kya Kam Tha: bland dal", 5 slides, palette/fonts `[owner to supply]` | slides 1-5 identical grid/type |
| 14 | `ads-banner-grid-2x2` | Spunge | meta-landscape | 4 banner concepts | concepts distinct, text legible |
| 15 | `ecom-bento-product-infographic` | Spunge | amazon-gallery | module content from approved claims | no fabricated stats |
| 16 | `social-youtube-thumbnail-text` | Namak Kam Tha | youtube-thumb | headline of at most 3 words | readable at 150 px wide |

## Baseline from earlier work
`outputs/spunge/tests/2026-09-17/` and `outputs/_tests/amazon-gallery/` hold earlier Nano Banana 2 results; two templates are already marked tested (`nb2-campaign-hero`, `nb2-exact-copy-layout`).
