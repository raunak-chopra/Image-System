# Meta (Facebook / Instagram paid)

Sources: [First Pier](https://www.firstpier.com/resources/facebook-ad-image-size), [Rocketium](https://rocketium.ai/academy/all/meta-creative-specs), [Billo safe-zone guide](https://billo.app/?p=50654), [99 Dollar Social](https://www.99dollarsocial.com/blog/updates-to-facebook-ad-sizes-for-2026). Secondary sources; confirm in Ads Manager previews.

| ID | Size | Placement | Notes |
|---|---|---|---|
| `meta-feed-4x5` | 1080x1350 | Feed | default winner; more screen than square |
| `meta-square-1x1` | 1080x1080 | Carousel cards, Marketplace | carousel cards crop to 1:1 - never build them 4:5 |
| `meta-story-9x16` | 1080x1920 | Stories, Reels | safe zone below |
| `meta-landscape` | 1200x628 | Link ads, some placements | 1.91:1 |

JPG/PNG, up to 30 MB, 1080 px shortest side is the practical floor.

## Safe zones (9:16)
Since March 2026 Stories and Reels share one unified safe zone. Keep text, logos, faces and CTAs out of roughly the **top 14%** and **bottom 20%** (up to about 35% on Reels where UI overlays are heavier). Build the key message in the middle 65%.

## Performance-creative rules
- One idea, one hook per ad: hook in the top third of the visible area, offer or proof in the middle, brand and CTA in the lower safe area.
- Text-light: headline of at most about 7 words plus one proof or offer chip. Put the rest in primary text.
- Make a master in 4:5 and derive 9:16 and 1:1 by recomposing (not by cropping) when text is near edges.
- Test variants by changing one variable: hook line, hero visual, offer, or format.
- Claims: only from `brands/<brand>/claims.md`; add mandatory footnotes.

## Build approach
Generate scene and product in-model; add exact headline, offer chip, footnote and logo as a design layer when exactness matters. Resize with `post/resize.py ... meta-feed-4x5 meta-story-9x16 meta-square-1x1`.
