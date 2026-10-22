# Organic social, thumbnails and web

Sources: [Linearity](https://linearity.io/guide/social-media-image-sizes/), [Hootsuite](https://blog.hootsuite.com/social-media-image-sizes/), [Shopify (YouTube)](https://www.shopify.com/blog/youtube-thumbnail-size), [Outfy (Pinterest)](https://www.outfy.com/blog/pinterest-image-size-guide).

| ID | Size | Notes |
|---|---|---|
| `ig-feed-4x5` | 1080x1350 | portrait post and carousel slides (keep all slides one ratio) |
| `ig-story-9x16` | 1080x1920 | same safe zone as Meta Stories |
| `linkedin-landscape` | 1200x627 | |
| `linkedin-square` | 1200x1200 | |
| `x-landscape` | 1280x720 | |
| `youtube-thumb` | 1280x720 | 16:9, min width 640, under 2 MB **(verify)**; keep key content clear of the bottom-right timestamp |
| `pinterest-pin` | 1000x1500 | 2:3 **(verify)** |
| `web-hero` | 1920x1080 | convention, not a platform rule: reserve a calm copy-safe side |

## Organic rules
- Organic can be more editorial and less sales-led than paid, but keep one idea per slide and a clear first-slide hook.
- Carousel: slide 1 hook, middle slides one point each, last slide recap or CTA; identical grid, type and color system across slides (generate slide 1 first, then reuse it as a `style`/`composition` reference with declared roles).
- Quote cards, announcement tiles and thumbnails are text-led: prefer GPT-Image-2 or composite the text downstream.
- YouTube thumbnails: one face or one object, at most about 3 words, high contrast, readable at tiny size.

## Build approach
Generate at the nearest native ratio, then `post/resize.py` and `post/check.py`.
