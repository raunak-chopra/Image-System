# Amazon

Sources: [Soona](https://soona.co/image-resizer/amazon-image-size-specs), [Sellersprite](https://www.sellersprite.com/en/blog/Amazon-Image-Requirements-Optimization-Tips), [Jungle Scout](https://www.junglescout.com/resources/articles/amazon-image-requirements/), [Dresma](https://www.dresma.com/image-resizer/amazon-listing-image-size). Re-check Seller Central before a launch; category rules differ.

## Main image (`amazon-main`, 2000x2000, 1:1)
- Pure white background, RGB 255,255,255. Product fills at least 85% of the frame. Actual product only.
- No text, logos, badges ("Best Seller"), borders, watermarks, price tags or props that are not sold.
- At least 1000 px on the longest side for zoom; 2000 recommended; JPEG, under 10 MB.
- Build approach: generate/edit the product on white with model, then run `post/check.py amazon-main`. Lock packaging, label and logo from supplied assets ([product-white-packshot](../prompt-library/categories/product-photography.md#product-white-packshot)).

## Gallery slides 2-7 (`amazon-gallery`, 2000x2000, 1:1)
Text and graphics are allowed. Most shoppers see them as mobile thumbnails: design for legibility at about 300 px.

| Slide | Job | Layout recipe | Max in-model text |
|---|---|---|---|
| 2 | Top 3-5 benefits | product hero + 3-5 icon callouts | headline + 5 labels of 1-3 words |
| 3 | Ingredients / specs / what's inside | exploded or labelled product | labels only; numbers from claim registry |
| 4 | In use / lifestyle | person or scene + one line | one line |
| 5 | Comparison vs ordinary alternative | two-column us vs them | column titles + 4 rows of 2-4 words |
| 6 | How to use / steps | 3-step sequence | step titles |
| 7 | Proof / brand story / certifications | badge row, quote, or brand panel | approved claims only |

Rule: one message per slide. Build approach: generate background and product scene in-model; composite exact copy, numbers, logos and footnotes downstream when fidelity is mandatory.

## A+ content
| ID | Size | Use |
|---|---|---|
| `amazon-aplus-header` | 970x600 | brand/header image module |
| `amazon-aplus-banner` | 970x300 | single-image or full-width banner |
| `amazon-aplus-tile` | 300x300 | feature tiles / image+text (225x225 for 4-up grids) |
| `amazon-aplus-premium-header` | 1464x600 **(verify)** | Premium A+ |

Rules: no pricing, promotional claims, time-sensitive offers or external links; JPEG/PNG; best pages are mostly imagery (about 70/30 image/text per the guides).

## Brand Store
`amazon-brandstore-hero` 3000x600 **(verify)**. Mobile and desktop crop differently: keep the subject and headline in the central safe band.

## QA specifics
Check [qa-checklist](../core/qa-checklist.md) plus: main image white edges and fill; every slide readable at 300 px; no claims outside the brand's `claims.md`.
