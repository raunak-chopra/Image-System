# Type and color rules for generated graphics

Applies on top of a brand kit. If the brand kit is silent, use these defaults.

## Typography in prompts
- Name exact families from `brand.md` (display and body). Never describe fonts by class ("Swiss", "monospaced") when real fonts exist.
- Scale: headline 1x, support line about 0.4x, label about 0.25x, footnote about 0.15x. Keep three sizes per frame at most.
- Case and tracking: all-caps with open tracking for small labels; sentence case for support lines; tight tracking for big display words.
- In-model text budget: one headline, up to 5 labels of 1-3 words, one footnote line. Everything else is composited.
- Numbers and claims: copy verbatim from `claims.md`; render in the display font at 1x-2x label size for emphasis.

## Color
- Use at most 1 primary + 1 tint + 1 neutral + 1 accent from the brand kit. State hex codes in the prompt.
- Contrast: body text on background at least 4.5:1; labels on photos need a solid or blurred plate.
- SKU/range systems (ref: SUGOI, SALTED): one saturated hue per variant; hold layout, camera and light constant so only the hue changes.
- Pairing photography with flat color: let the photo carry one hue from the palette (set dressing, prop, background) to tie it to the system.
- Avoid: neon accents outside the palette, gradients that fight the product color, more than one accent per frame.

## Icons and badges
- Enclosed circle or pill containers, one stroke weight, one corner radius across the set, glyph at least 60% of the container.
- Badge text at most 3 words; certifications only when supplied (never invent seals).

## Imagery language
- Real materials and light: matte ceramic, stone, glass, water; contact shadows; avoid plastic-looking CGI sheen unless the brief is 3D.
- Use the product in motion or use (pour, hold, apply) for performance creative; calm and static for premium and A+.
