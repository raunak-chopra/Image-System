# Google (Performance Max / Display)

Sources: [Google Ads Help](https://support.google.com/google-ads/answer/10724492?hl=en), [AdNabu](https://blog.adnabu.com/google-ads/performance-max-ad-specs/), [Jumpfly](https://www.jumpfly.com/?p=28820).

| ID | Recommended | Minimum | Ratio |
|---|---|---|---|
| `google-landscape` | 1200x628 | 600x314 | 1.91:1 |
| `google-square` | 1200x1200 | 300x300 | 1:1 |
| `google-portrait` | 960x1200 | 480x600 | 4:5 |

JPEG or PNG, up to 5,120 KB per image. Demand Gen specs were not researched (gap).

## Rules for performance use
- Supply all three ratios in every asset group; Google crops and combines assets, so the subject must survive each crop.
- Keep text minimal (or none): assets are mixed with headlines and descriptions that Google adds.
- No overlay of logo plus heavy text covering more than a small corner; no collage-style images, no borders, no fake buttons.
- Product-on-clean-background and lifestyle shots usually carry shopping-style intent; benefit infographics belong on Meta/Amazon more than Display.

## Build approach
Generate one wide master (16:9) with the subject centered and calm margins, then `post/resize.py <file> google-landscape google-square google-portrait` and inspect each crop.
