# Formats

Delivery specs per surface. Machine-readable twin: [post/specs.json](../post/specs.json) (used by `post/resize.py` and `post/check.py`). Keep the two in sync.

Last broad research: 2026-10-07 from secondary guides. App-specific additions were checked against official sources on 2026-10-21; see their file for scope. Earlier rows remain historical. Items tagged **(verify)** need rechecking.

| File | Covers |
|---|---|
| [amazon.md](amazon.md) | Main image, gallery slides 2-7, A+ modules, Brand Store |
| [meta.md](meta.md) | Facebook/Instagram paid: feed, carousel, Stories/Reels, landscape |
| [google.md](google.md) | Performance Max / Display image assets |
| [organic-social.md](organic-social.md) | Instagram, LinkedIn, X, Pinterest, YouTube thumbnail, web hero |
| [app-assets.md](app-assets.md) | App artwork, store icons, Play feature graphic, screenshot and native resource handoffs; official sources checked 2026-10-21 |

## How to use a format file
1. Pick the format row for the job; note its pixel size, safe zones and hard rules.
2. Choose the generation approach (in-model text vs composite) from its "Build approach" line.
3. Generate at the model's best native ratio, then run `python post/resize.py <file> <format-id>`.
4. Verify with `python post/check.py <format-id> <file>` and the [QA checklist](../core/qa-checklist.md).

## Caveat on resolution
Model outputs are often well under the delivery size (existing Spunge outputs are about 1376 px wide). Resizing up adds no detail: for Amazon main and A+ either regenerate at the highest quality setting or upscale deliberately and inspect at 100%.

## Not covered yet (gaps)
Flipkart, quick-commerce (Blinkit/Zepto/Swiggy Instamart) tiles, Amazon.in-specific rules, Demand Gen, YouTube/Meta video covers, email headers, print. Add a file here when a job needs one.
