# Authored templates for commerce, performance and brand systems

Original templates written 2026-10-07 to fill gaps the imported libraries do not cover (Amazon slides, A+, Brand Store, performance ads, range and brand-system layouts). Layout structures come from `design-language/layout-recipes.md`, the owner's Behance reference set (`swipe-file/`) and platform specs in `formats/`. All are `adapted template`: untested until Phase 4.


## amz-gallery-benefit-callouts — Amazon slide 2: benefit callouts

- **Purpose:** Gallery slide that shows the product and its top 3-5 benefits as icon callouts.
- **Category:** e-commerce listing graphics
- **Tags:** amazon, gallery slide, benefits, callouts, icons
- **Mode:** generate or edit
- **Model/tool:** GPT-Image-2 or Nano Banana Pro (hypothesis; see core/model-router.md)
- **Compatibility:** unverified - original template, not tested here.
- **Validation:** adapted template
- **Required inputs:** REF 1 product identity, brand fonts and hex colors, 3-5 approved benefit labels, headline
- **Reference assets:** `REF 1 = product identity` (and further numbered refs as listed in inputs); one role per reference
- **Sources:** SRC-23
- **Reuse:** SRC-23 owner reference set and platform specs - layout patterns abstracted into an original prompt; no source text copied; personal use.
- **Delivery format:** amazon-gallery

### Prompt

```text
Create a square 1:1 Amazon gallery slide. Subject: the exact product from REF 1, centered-left at about 55% of the frame width, grounded on a soft surface with a contact shadow, lit from the upper left. Background: {BACKGROUND_STYLE} in {BRAND_PRIMARY_HEX} and {BRAND_NEUTRAL_HEX}. Layout: headline at the top in {DISPLAY_FONT}: "{HEADLINE}". On the right, a vertical stack of {CALLOUT_COUNT} callouts; each is a circular icon in {BRAND_PRIMARY_HEX} with a thin line to the product and a label in {BODY_FONT}: {CALLOUT_LABELS}. LOCKED ELEMENTS: product shape, color, label text and logo exactly as in REF 1; approved copy verbatim; brand fonts and hex colors as named. Keep text to the headline and these labels only; each label at most 3 words and readable at 300 px wide. Leave 6% margins. Exclusions: no extra badges, no invented claims, no price, no stars, no small print, no clutter in the center.
```

### Variations and adaptation

Swap to 3 or 5 callouts; mirror layout (product right); change icon style (filled vs outline) from brand kit.

### Constraints and common failures

Label text and icon glyphs are the usual failures; keep labels short and verify spelling. If exact text or logo fidelity fails QA twice, keep the generated layout and composite the approved text and logo downstream.

### Quality checks

Labels spelled exactly; every claim in claims.md; product matches REF 1; legible at 300 px; one message per slide.


## amz-gallery-whats-inside — Amazon slide 3: what's inside / ingredients

- **Purpose:** Shows composition or components: exploded layers or labelled ingredients around the product.
- **Category:** e-commerce listing graphics
- **Tags:** amazon, gallery slide, ingredients, exploded, whats inside
- **Mode:** generate or edit
- **Model/tool:** GPT-Image-2 or Nano Banana Pro (hypothesis; see core/model-router.md)
- **Compatibility:** unverified - original template, not tested here.
- **Validation:** adapted template
- **Required inputs:** REF 1 product identity, approved ingredient or component list (names only unless amounts are supplied), brand tokens
- **Reference assets:** `REF 1 = product identity` (and further numbered refs as listed in inputs); one role per reference
- **Sources:** SRC-23; SRC-29 section 4.5 for the ordered ingredient variation
- **Reuse:** SRC-23 owner reference set and platform specs - layout patterns abstracted into an original prompt; no source text copied; personal use. SRC-29 repository MIT with unresolved third-party prompt rights - ordered ingredient concept only; no source quantities, prompt text or preview copied.
- **Delivery format:** amazon-gallery

### Prompt

```text
Create a square 1:1 Amazon gallery slide titled "{SLIDE_TITLE}" in {DISPLAY_FONT}. Subject: the exact product from REF 1 in the center, with {COMPONENT_COUNT} components or ingredients floating around it on a vertical exploded axis: {COMPONENT_LIST}. Each component is rendered realistically with soft shadows, connected to a short label in {BODY_FONT} by a thin leader line. LOCKED ELEMENTS: product shape, color, label text and logo exactly as in REF 1; approved copy verbatim; brand fonts and hex colors as named. Background: clean {BACKGROUND_STYLE} using {BRAND_NEUTRAL_HEX}. No amounts, percentages or numbers unless provided here: {SUPPLIED_NUMBERS_OR_NONE}. Exclusions: no invented ingredients, certifications or dimensions; no paragraph text.
```

### Variations and adaptation

Switch to flat-lay overhead arrangement; reduce to 3 components; make the labels pill badges.

For a vertical recipe breakdown, require the exact top-to-bottom ingredient order, approved quantity and unit for each item, and a reference of the assembled food when matching a real dish. Match the count, preparation state and order across both views. Keep quantities absent when unsupplied; never transfer example weights to another recipe. Place labels outside ingredient silhouettes with uncrossed leader lines. SRC-29 section 4.5 credits [𝐌](https://x.com/Strength04_X/status/2006031630268522943); this variation is untested.

### Constraints and common failures

Models invent plausible components and amounts; supply the list and say 'none' for numbers. Leader lines can cross the product.

### Quality checks

Only supplied components appear; no numbers beyond supplied; labels readable; lines do not obscure the product label.


## amz-gallery-lifestyle-in-use — Amazon slide 4: lifestyle in use

- **Purpose:** Product in a believable real-life use moment with one line of copy.
- **Category:** e-commerce listing graphics
- **Tags:** amazon, gallery slide, lifestyle, in use, person
- **Mode:** generate or edit
- **Model/tool:** GPT-Image-2 or Nano Banana Pro (hypothesis; see core/model-router.md)
- **Compatibility:** unverified - original template, not tested here.
- **Validation:** adapted template
- **Required inputs:** REF 1 product identity, target customer description, setting, one approved line
- **Reference assets:** `REF 1 = product identity` (and further numbered refs as listed in inputs); one role per reference
- **Sources:** SRC-23
- **Reuse:** SRC-23 owner reference set and platform specs - layout patterns abstracted into an original prompt; no source text copied; personal use.
- **Delivery format:** amazon-gallery

### Prompt

```text
Create a square 1:1 lifestyle photo for an Amazon listing. Scene: {PERSON_DESCRIPTION} {USING_ACTION} in {SETTING}, natural window light from the left, shallow depth of field, authentic and unposed. The exact product from REF 1 is clearly visible, correctly scaled and facing the camera, label readable. LOCKED ELEMENTS: product shape, color, label text and logo exactly as in REF 1; approved copy verbatim; brand fonts and hex colors as named. Add one short line of text in {BODY_FONT} in the {COPY_SAFE_AREA} area: "{ONE_LINE}". Exclusions: no stock-photo smiles, no extra products, no fake logos, no second line of text, no hands with extra fingers.
```

### Variations and adaptation

Vary person, room and time of day; keep product scale, light direction and copy-safe area constant for a test matrix.

### Constraints and common failures

Hands, grips and label legibility are fragile; scale errors make products look fake. Do not imply medical outcomes.

### Quality checks

Product label legible; hands correct; scale believable; claims neutral; copy-safe area clear.


## amz-gallery-comparison — Amazon slide 5: us vs ordinary

- **Purpose:** Two-column comparison of our product against an unnamed ordinary alternative.
- **Category:** e-commerce listing graphics
- **Tags:** amazon, gallery slide, comparison, us vs them, table
- **Mode:** generate or edit
- **Model/tool:** GPT-Image-2 or Nano Banana Pro (hypothesis; see core/model-router.md)
- **Compatibility:** unverified - original template, not tested here.
- **Validation:** adapted template
- **Required inputs:** REF 1 product identity, 4 approved comparison rows (our value vs generic value), brand tokens
- **Reference assets:** `REF 1 = product identity` (and further numbered refs as listed in inputs); one role per reference
- **Sources:** SRC-23
- **Reuse:** SRC-23 owner reference set and platform specs - layout patterns abstracted into an original prompt; no source text copied; personal use.
- **Delivery format:** amazon-gallery

### Prompt

```text
Create a square 1:1 comparison slide. Headline in {DISPLAY_FONT}: "{HEADLINE}". Two columns: left column labelled "{OUR_LABEL}" with the exact product from REF 1 on top, highlighted in {BRAND_PRIMARY_HEX}; right column labelled "{OTHER_LABEL}" with a plain unbranded generic version in muted gray. Four rows with 2-4 word entries in {BODY_FONT}: {ROWS}. Our column uses check glyphs, the other column uses cross glyphs. LOCKED ELEMENTS: product shape, color, label text and logo exactly as in REF 1; approved copy verbatim; brand fonts and hex colors as named. Footnote line at the base if required: "{FOOTNOTE}". Exclusions: no competitor brand names or logos, no invented numbers, no star ratings.
```

### Variations and adaptation

Use a 3-row version for mobile legibility; swap check/cross for filled/empty circles.

### Constraints and common failures

Comparative claims need substantiation and a footnote; never name competitors; row text often garbles.

### Quality checks

Every row supplied and approved; footnote present; no competitor marks; legible at 300 px.


## amz-gallery-how-to-use — Amazon slide 6: how to use

- **Purpose:** Three-step usage slide with one verb per step.
- **Category:** e-commerce listing graphics
- **Tags:** amazon, gallery slide, how to use, steps
- **Mode:** generate or edit
- **Model/tool:** GPT-Image-2 or Nano Banana Pro (hypothesis; see core/model-router.md)
- **Compatibility:** unverified - original template, not tested here.
- **Validation:** adapted template
- **Required inputs:** REF 1 product identity, 3 approved step titles, brand tokens
- **Reference assets:** `REF 1 = product identity` (and further numbered refs as listed in inputs); one role per reference
- **Sources:** SRC-23
- **Reuse:** SRC-23 owner reference set and platform specs - layout patterns abstracted into an original prompt; no source text copied; personal use.
- **Delivery format:** amazon-gallery

### Prompt

```text
Create a square 1:1 how-to slide titled "{HEADLINE}" in {DISPLAY_FONT}. Three equal panels in a row (or stacked), each with a large numeral 1, 2, 3 in {BRAND_PRIMARY_HEX}, a clean illustration or photo of the step, and a step title in {BODY_FONT}: {STEP_TITLES}. The exact product from REF 1 appears in every panel at consistent scale. LOCKED ELEMENTS: product shape, color, label text and logo exactly as in REF 1; approved copy verbatim; brand fonts and hex colors as named. Background {BRAND_NEUTRAL_HEX}, generous gutters. Exclusions: no dosage, timing or safety statements unless supplied: {SUPPLIED_USAGE_COPY_OR_NONE}; no extra text.
```

### Variations and adaptation

Switch to a vertical 3-stack; use photography instead of illustration; add a fourth tip panel.

### Constraints and common failures

Models invent usage instructions and doses; supply them or leave blank. Product drifts between panels unless REF 1 is repeated.

### Quality checks

Usage copy supplied or absent; product identical across panels; numerals consistent; legible at 300 px.


## amz-gallery-proof-badges — Amazon slide 7: proof and trust

- **Purpose:** Trust slide using only supplied proof: quote, rating, certifications, counts.
- **Category:** e-commerce listing graphics
- **Tags:** amazon, gallery slide, proof, badges, trust, certifications
- **Mode:** generate or edit
- **Model/tool:** GPT-Image-2 or Nano Banana Pro (hypothesis; see core/model-router.md)
- **Compatibility:** unverified - original template, not tested here.
- **Validation:** adapted template
- **Required inputs:** REF 1 product identity, supplied proof items with exact wording, official badge artwork (if any) as separate references
- **Reference assets:** `REF 1 = product identity` (and further numbered refs as listed in inputs); one role per reference
- **Sources:** SRC-23
- **Reuse:** SRC-23 owner reference set and platform specs - layout patterns abstracted into an original prompt; no source text copied; personal use.
- **Delivery format:** amazon-gallery

### Prompt

```text
Create a square 1:1 trust slide. Top: the exact product from REF 1 at about 35% height on a calm {BRAND_NEUTRAL_HEX} background. Middle: a pull quote in {DISPLAY_FONT}: "{SUPPLIED_QUOTE}". Bottom: a row of {BADGE_COUNT} circular badges with exactly these labels: {BADGE_LABELS}; use REF 2 and REF 3 artwork unchanged where official badge artwork is supplied. LOCKED ELEMENTS: product shape, color, label text and logo exactly as in REF 1; approved copy verbatim; brand fonts and hex colors as named. Exclusions: no invented certifications, awards, ratings, review counts or sales numbers; no fake seals.
```

### Variations and adaptation

Swap quote for a single large statistic when a verified number is supplied.

### Constraints and common failures

Models fabricate seals and ratings; official badge artwork should be composited, not generated.

### Quality checks

Every proof item traceable to claims.md; official marks unchanged; no ratings unless supplied.


## amz-aplus-header-banner — Amazon A+ header banner

- **Purpose:** Wide A+ header with brand mood, product and one line, no promo claims.
- **Category:** e-commerce listing graphics
- **Tags:** amazon, A+, header, banner, brand story
- **Mode:** generate or edit
- **Model/tool:** GPT-Image-2 or Nano Banana Pro (hypothesis; see core/model-router.md)
- **Compatibility:** unverified - original template, not tested here.
- **Validation:** adapted template
- **Required inputs:** REF 1 product identity, brand tokens, brand line, size (970x600 or 970x300)
- **Reference assets:** `REF 1 = product identity` (and further numbered refs as listed in inputs); one role per reference
- **Sources:** SRC-23
- **Reuse:** SRC-23 owner reference set and platform specs - layout patterns abstracted into an original prompt; no source text copied; personal use.
- **Delivery format:** amazon-aplus-header amazon-aplus-banner

### Prompt

```text
Create a wide A+ content header image at {RATIO} for {BRAND_NAME}. Subject: the exact product from REF 1 placed on the {PRODUCT_SIDE} third on a stone plinth with a soft contact shadow; right of it a calm {BACKGROUND_STYLE} environment in {BRAND_PRIMARY_HEX} and {BRAND_NEUTRAL_HEX} with generous negative space for copy. LOCKED ELEMENTS: product shape, color, label text and logo exactly as in REF 1; approved copy verbatim; brand fonts and hex colors as named. One line of text in {DISPLAY_FONT}: "{BRAND_LINE}". Exclusions: no price, discounts, 'best seller', time-limited offers, external links or badges (A+ rules); no second line of text.
```

### Variations and adaptation

Product-center version for 970x300; add a three-product range line-up on plinth for brand introductions.

### Constraints and common failures

A+ forbids promotional and price claims. Wide crops cut the product if it sits near edges.

### Quality checks

No promo language; product intact in crop; negative space intact; matches 970x600 or 970x300 via post/check.py.


## amz-brandstore-hero — Amazon Brand Store hero

- **Purpose:** Brand Store hero tile with range on a plinth and calm copy zone.
- **Category:** e-commerce listing graphics
- **Tags:** amazon, brand store, hero, banner, range
- **Mode:** generate or edit
- **Model/tool:** GPT-Image-2 or Nano Banana Pro (hypothesis; see core/model-router.md)
- **Compatibility:** unverified - original template, not tested here.
- **Validation:** adapted template
- **Required inputs:** REF 1..N product identity (range), brand tokens, tagline, notes on desktop vs mobile crop
- **Reference assets:** `REF 1 = product identity` (and further numbered refs as listed in inputs); one role per reference
- **Sources:** SRC-23
- **Reuse:** SRC-23 owner reference set and platform specs - layout patterns abstracted into an original prompt; no source text copied; personal use.
- **Delivery format:** amazon-brandstore-hero

### Prompt

```text
Create an ultra-wide Brand Store hero image ({RATIO}). Subject: the product range from REF 1..REF {RANGE_COUNT} arranged on a stone plinth in the horizontal center, tallest in the middle, each product exactly as supplied. Environment: {ENVIRONMENT_DESCRIPTION} in {BRAND_PRIMARY_HEX} gradient. LOCKED ELEMENTS: product shape, color, label text and logo exactly as in REF 1; approved copy verbatim; brand fonts and hex colors as named. Keep all products and the tagline inside the central safe band (middle 40% of the width) so desktop and mobile crops both work. Tagline in {DISPLAY_FONT}: "{TAGLINE}". Exclusions: no price, no promo, no extra text.
```

### Variations and adaptation

Single hero product variant; seasonal environment swap.

### Constraints and common failures

Models struggle with ultra-wide ratios and product count; generate at 16:9 then extend or crop and verify.

### Quality checks

Products inside the safe band; range count correct; tagline exact; crop check at desktop and mobile widths.


## perf-hook-headline-ad — Performance ad: hook + hero + footnote

- **Purpose:** Single-idea static ad: hook line, hero visual, footnote; the baseline for hook testing.
- **Category:** advertising and performance
- **Tags:** meta, performance, hook, headline, static ad
- **Mode:** generate or edit
- **Model/tool:** GPT-Image-2 or Nano Banana Pro (hypothesis; see core/model-router.md)
- **Compatibility:** unverified - original template, not tested here.
- **Validation:** adapted template
- **Required inputs:** REF 1 product identity, hook line, brand tokens, mandatory footnote
- **Reference assets:** `REF 1 = product identity` (and further numbered refs as listed in inputs); one role per reference
- **Sources:** SRC-23
- **Reuse:** SRC-23 owner reference set and platform specs - layout patterns abstracted into an original prompt; no source text copied; personal use.
- **Delivery format:** meta-feed-4x5 meta-story-9x16 google-square

### Prompt

```text
Create a {RATIO} paid social ad. Subject: the exact product from REF 1 as the hero, large and grounded, {PRODUCT_POSITION}. Hook in the top third in {DISPLAY_FONT}, at most 7 words: "{HOOK}". Support line in {BODY_FONT} below the hook: "{SUPPORT_LINE}". Brand logo from REF 2 in the lower safe area. Footnote at the base, one line: "{FOOTNOTE}". LOCKED ELEMENTS: product shape, color, label text and logo exactly as in REF 1; approved copy verbatim; brand fonts and hex colors as named. Background: {BACKGROUND_STYLE} in brand colors with strong contrast against the product. For 9:16 keep all text and logo out of the top 14% and bottom 20%. Exclusions: no extra copy, no discounts unless supplied, no stock-smile people, no clutter.
```

### Variations and adaptation

Test one variable at a time: hook line, hero visual, background color, or product angle. Derive 1:1 and 9:16 by recomposing.

### Constraints and common failures

Long hooks wrap badly; exact text may fail. If exact text or logo fidelity fails QA twice, keep the generated layout and composite the approved text and logo downstream.

### Quality checks

Hook at most 7 words and exact; product recognizable at thumbnail; safe zones respected; claims in claims.md.


## perf-offer-chip-ad — Performance ad: offer chip

- **Purpose:** Product ad with a prominent offer chip for sales and retargeting.
- **Category:** advertising and performance
- **Tags:** meta, performance, offer, chip, discount, retargeting
- **Mode:** generate or edit
- **Model/tool:** GPT-Image-2 or Nano Banana Pro (hypothesis; see core/model-router.md)
- **Compatibility:** unverified - original template, not tested here.
- **Validation:** adapted template
- **Required inputs:** REF 1 product identity, exact offer text and terms, brand tokens
- **Reference assets:** `REF 1 = product identity` (and further numbered refs as listed in inputs); one role per reference
- **Sources:** SRC-23
- **Reuse:** SRC-23 owner reference set and platform specs - layout patterns abstracted into an original prompt; no source text copied; personal use.
- **Delivery format:** meta-feed-4x5 meta-story-9x16 google-landscape

### Prompt

```text
Create a {RATIO} paid social ad. Subject: the exact product from REF 1, grounded, on the {PRODUCT_SIDE} half. Offer chip: a bold rounded shape in {BRAND_ACCENT_HEX} with the text "{OFFER_TEXT}" in {DISPLAY_FONT}, placed {CHIP_POSITION}, overlapping the product edge slightly. Headline: "{HEADLINE}" in {DISPLAY_FONT}. CTA pill: "{CTA_TEXT}" in {BODY_FONT}. Terms line at the base: "{TERMS}". LOCKED ELEMENTS: product shape, color, label text and logo exactly as in REF 1; approved copy verbatim; brand fonts and hex colors as named. Exclusions: no other offers, no countdown, no invented prices, no extra badges.
```

### Variations and adaptation

Switch the chip to a corner ribbon or starburst; swap chip color for contrast tests.

### Constraints and common failures

Prices, percentages and terms must be exact; always composite the offer if any character is wrong. Check platform offer-claim policy.

### Quality checks

Offer text and terms exact; CTA present; chip not covering the product label; policy risks checked.


## perf-testimonial-ad — Performance ad: testimonial / review

- **Purpose:** Static ad that leads with a supplied customer quote.
- **Category:** advertising and performance
- **Tags:** meta, performance, testimonial, review, social proof
- **Mode:** generate or edit
- **Model/tool:** GPT-Image-2 or Nano Banana Pro (hypothesis; see core/model-router.md)
- **Compatibility:** unverified - original template, not tested here.
- **Validation:** adapted template
- **Required inputs:** REF 1 product identity, supplied quote and attribution (real, with permission), brand tokens
- **Reference assets:** `REF 1 = product identity` (and further numbered refs as listed in inputs); one role per reference
- **Sources:** SRC-23
- **Reuse:** SRC-23 owner reference set and platform specs - layout patterns abstracted into an original prompt; no source text copied; personal use.
- **Delivery format:** meta-feed-4x5 meta-square-1x1

### Prompt

```text
Create a {RATIO} paid social ad. Top two thirds: a large pull quote in {DISPLAY_FONT}: "{SUPPLIED_QUOTE}" with attribution in {BODY_FONT}: "{ATTRIBUTION}", on a {BRAND_NEUTRAL_HEX} card with a subtle quote mark. Lower third: the exact product from REF 1 beside a row of {STAR_COUNT_OR_NONE} stars only if a verified rating is supplied. LOCKED ELEMENTS: product shape, color, label text and logo exactly as in REF 1; approved copy verbatim; brand fonts and hex colors as named. Exclusions: no invented reviews, names, ratings or review counts; no stock portrait unless supplied as REF 3.
```

### Variations and adaptation

Add a real customer photo as REF 3 (identity role) in a circular crop; alternate with a close-up product shot.

### Constraints and common failures

Fabricated reviews are deceptive and policy-violating; use real, permissioned quotes only.

### Quality checks

Quote and attribution exact and real; rating only if verified; product matches REF 1.


## perf-problem-solution-ad — Performance ad: problem -> solution

- **Purpose:** Split composition: muted problem on one half, bright solution with product on the other.
- **Category:** advertising and performance
- **Tags:** meta, performance, problem solution, split, benefit
- **Mode:** generate or edit
- **Model/tool:** GPT-Image-2 or Nano Banana Pro (hypothesis; see core/model-router.md)
- **Compatibility:** unverified - original template, not tested here.
- **Validation:** adapted template
- **Required inputs:** REF 1 product identity, problem and solution lines (approved), brand tokens
- **Reference assets:** `REF 1 = product identity` (and further numbered refs as listed in inputs); one role per reference
- **Sources:** SRC-23
- **Reuse:** SRC-23 owner reference set and platform specs - layout patterns abstracted into an original prompt; no source text copied; personal use.
- **Delivery format:** meta-feed-4x5 meta-story-9x16

### Prompt

```text
Create a {RATIO} ad split into two zones. Problem zone ({PROBLEM_POSITION}): muted desaturated scene showing {PROBLEM_SCENE}, label "{PROBLEM_LABEL}" in {BODY_FONT}. Solution zone: bright {BRAND_PRIMARY_HEX} scene with the exact product from REF 1 large and grounded, label "{SOLUTION_LABEL}" in {DISPLAY_FONT}. A clean diagonal or straight divider. LOCKED ELEMENTS: product shape, color, label text and logo exactly as in REF 1; approved copy verbatim; brand fonts and hex colors as named. Exclusions: no medical or guaranteed-outcome claims, no before/after of bodies, no invented statistics.
```

### Variations and adaptation

Vertical split for Stories; swap problem scene for a generic competitor-neutral alternative.

### Constraints and common failures

Health-adjacent problem scenes can break ad policy; keep them mundane and non-body.

### Quality checks

Problem scene non-sensitive; labels exact; solution zone dominant; policy check.


## perf-contrast-split-ad — Performance ad: contrast split (us vs ordinary)

- **Purpose:** Visual contrast ad: ordinary product left, our product right, one punchy line.
- **Category:** advertising and performance
- **Tags:** meta, performance, contrast, split screen, comparison
- **Mode:** generate or edit
- **Model/tool:** GPT-Image-2 or Nano Banana Pro (hypothesis; see core/model-router.md)
- **Compatibility:** unverified - original template, not tested here.
- **Validation:** adapted template
- **Required inputs:** REF 1 product identity, headline, optional approved footnote
- **Reference assets:** `REF 1 = product identity` (and further numbered refs as listed in inputs); one role per reference
- **Sources:** SRC-23
- **Reuse:** SRC-23 owner reference set and platform specs - layout patterns abstracted into an original prompt; no source text copied; personal use.
- **Delivery format:** meta-feed-4x5 meta-square-1x1

### Prompt

```text
Create a {RATIO} split-screen ad. Left half: a plain unbranded generic version of the category product, muted gray, flat light. Right half: the exact product from REF 1, vivid {BRAND_PRIMARY_HEX} background, glowing rim light. Center divider line. Headline across the top in {DISPLAY_FONT}: "{HEADLINE}". Footnote: "{FOOTNOTE}". LOCKED ELEMENTS: product shape, color, label text and logo exactly as in REF 1; approved copy verbatim; brand fonts and hex colors as named. Exclusions: no competitor brands or logos, no numbers unless supplied, no fake ratings.
```

### Variations and adaptation

Swap to vertical halves for 9:16; replace generic product with a text-only 'ordinary' tile.

### Constraints and common failures

Comparative claims need substantiation and a footnote.

### Quality checks

No competitor marks; claim in claims.md; contrast readable at thumbnail.


## perf-emotional-moment-ad — Brand ad: quiet emotional moment

- **Purpose:** Moment-led brand frame with one accent color, small logo and one line.
- **Category:** advertising and performance
- **Tags:** brand ad, emotional, dark, single accent, OOH
- **Mode:** generate or edit
- **Model/tool:** GPT-Image-2 or Nano Banana Pro (hypothesis; see core/model-router.md)
- **Compatibility:** unverified - original template, not tested here.
- **Validation:** adapted template
- **Required inputs:** REF 1 logo, scene description, one line, accent hex
- **Reference assets:** `REF 1 = product identity` (and further numbered refs as listed in inputs); one role per reference
- **Sources:** SRC-23
- **Reuse:** SRC-23 owner reference set and platform specs - layout patterns abstracted into an original prompt; no source text copied; personal use.
- **Delivery format:** meta-feed-4x5 meta-story-9x16

### Prompt

```text
Create a {RATIO} cinematic brand frame. Scene: {MOMENT_DESCRIPTION}, dark and atmospheric with a single accent color {ACCENT_HEX} in the light. Composition: subject in the lower two thirds, open space above. One line in {DISPLAY_FONT} in the upper area: "{ONE_LINE}". Small brand logo from REF 1 in the lower safe area. Exclusions: no product shots, no extra text, no discounts, no excess or alcohol imagery unless the brief requires and policy allows.
```

### Variations and adaptation

Brighter version for daytime; replace the line with only the logo for OOH.

### Constraints and common failures

Emotional frames do not carry claims; ensure policy-sensitive categories are checked first.

### Quality checks

One line exact; accent color only once; logo clean; safe zones respected.


## social-carousel-slide-system — Carousel slide system (1:1 or 4:5)

- **Purpose:** Generate slide 1 of a carousel and reuse it as the style anchor for later slides.
- **Category:** social and video planning
- **Tags:** carousel, series, slide system, instagram, linkedin
- **Mode:** generate or edit
- **Model/tool:** GPT-Image-2 or Nano Banana Pro (hypothesis; see core/model-router.md)
- **Compatibility:** unverified - original template, not tested here.
- **Validation:** adapted template
- **Required inputs:** Topic, 5-8 slide titles, brand tokens, ratio
- **Reference assets:** `REF 1 = product identity` (and further numbered refs as listed in inputs); one role per reference
- **Sources:** SRC-23
- **Reuse:** SRC-23 owner reference set and platform specs - layout patterns abstracted into an original prompt; no source text copied; personal use.
- **Delivery format:** ig-feed-4x5 meta-square-1x1 linkedin-square

### Prompt

```text
Create slide {SLIDE_NUMBER} of {SLIDE_TOTAL} for a {RATIO} carousel on "{TOPIC}". Layout system: grid with {MARGIN_PERCENT}% margins, headline in {DISPLAY_FONT} at the top-left, one visual or diagram in the middle, slide number bottom-right in {BODY_FONT}. This slide: headline "{SLIDE_HEADLINE}"; body (max 12 words): "{SLIDE_BODY}". Color: {BRAND_PRIMARY_HEX} on {BRAND_NEUTRAL_HEX}. For slides 2+: match REF 1 (slide 1) exactly for grid, type scale and color; only change the content. Exclusions: no new colors, no extra decoration, no changes to margins.
```

### Variations and adaptation

Alternate light/dark slides only if the brand kit defines both; last slide: recap + CTA.

### Constraints and common failures

Slide-to-slide drift in type scale and margins; fix by re-anchoring each slide to REF 1.

### Quality checks

Grid, type and color identical across slides; one point per slide; text exact.


## brand-triptych-hero-set — Triptych hero (person / ingredient / use)

- **Purpose:** Three-frame brand hero: person with product, ingredient set dressing, product in use.
- **Category:** brand identity
- **Tags:** triptych, brand, hero, lifestyle, ingredient, use moment
- **Mode:** generate or edit
- **Model/tool:** GPT-Image-2 or Nano Banana Pro (hypothesis; see core/model-router.md)
- **Compatibility:** unverified - original template, not tested here.
- **Validation:** adapted template
- **Required inputs:** REF 1 product identity, ingredient or props, person description, brand colors
- **Reference assets:** `REF 1 = product identity` (and further numbered refs as listed in inputs); one role per reference
- **Sources:** SRC-23
- **Reuse:** SRC-23 owner reference set and platform specs - layout patterns abstracted into an original prompt; no source text copied; personal use.
- **Delivery format:** meta-feed-4x5 amazon-aplus-header web-hero

### Prompt

```text
Create a wide image divided into three equal vertical frames with thin gaps. Frame 1: {PERSON_DESCRIPTION} holding the exact product from REF 1 toward the camera, {WARDROBE}, plain light backdrop. Frame 2: the product centered inside a set built from {INGREDIENT_PROPS} on a saturated {BRAND_PRIMARY_HEX} backdrop, strong side light. Frame 3: {USE_MOMENT} with the product in hand over {FOOD_OR_SURFACE}, clean white backdrop. LOCKED ELEMENTS: product shape, color, label text and logo exactly as in REF 1; approved copy verbatim; brand fonts and hex colors as named. Unified light quality and color grade across frames. Exclusions: no text, no logos beyond those on the product, no extra products.
```

### Variations and adaptation

Square or 4:5 stacked version; swap person for hands only.

### Constraints and common failures

Product label can distort in the use shot; verify. Frame-to-frame color consistency needs a stated grade.

### Quality checks

Product identical across frames; three clear roles; no stray text; consistent grade.


## brand-color-coded-range — Color-coded range (one hue per variant)

- **Purpose:** Show multiple variants as a family where each SKU owns one saturated hue.
- **Category:** brand identity
- **Tags:** range, variants, color coding, SKU, lineup
- **Mode:** generate or edit
- **Model/tool:** GPT-Image-2 or Nano Banana Pro (hypothesis; see core/model-router.md)
- **Compatibility:** unverified - original template, not tested here.
- **Validation:** adapted template
- **Required inputs:** REF 1..N one per variant, hex per variant, brand fonts
- **Reference assets:** `REF 1 = product identity` (and further numbered refs as listed in inputs); one role per reference
- **Sources:** SRC-23
- **Reuse:** SRC-23 owner reference set and platform specs - layout patterns abstracted into an original prompt; no source text copied; personal use.
- **Delivery format:** amazon-gallery meta-feed-4x5 amazon-aplus-header

### Prompt

```text
Create a {RATIO} image of {VARIANT_COUNT} variants in a straight line-up, identical camera angle and light for each, spaced evenly, grounded on a seamless surface. Each exact product from REF 1..REF {VARIANT_COUNT} sits against its own matching hue block behind it: {VARIANT_HEX_LIST}. Variant names below each product in {DISPLAY_FONT}: {VARIANT_NAMES}. LOCKED ELEMENTS: product shape, color, label text and logo exactly as in REF 1; approved copy verbatim; brand fonts and hex colors as named. Exclusions: no extra text, no inconsistent scale, no reflections that change label text.
```

### Variations and adaptation

Stagger heights for a dynamic version; stack variants vertically for 4:5.

### Constraints and common failures

Models blend hues and drift label text; supply each variant as its own reference with a number.

### Quality checks

Each variant matches its reference; hues distinct and on-palette; equal scale and light.


## brand-range-on-plinth — Range on plinth in an environment

- **Purpose:** Whole range on stone or step, set in an environment that tells the origin story.
- **Category:** brand identity
- **Tags:** range, plinth, environment, stone, origin story, hero
- **Mode:** generate or edit
- **Model/tool:** GPT-Image-2 or Nano Banana Pro (hypothesis; see core/model-router.md)
- **Compatibility:** unverified - original template, not tested here.
- **Validation:** adapted template
- **Required inputs:** REF 1..N product identity, environment idea, brand tokens
- **Reference assets:** `REF 1 = product identity` (and further numbered refs as listed in inputs); one role per reference
- **Sources:** SRC-23
- **Reuse:** SRC-23 owner reference set and platform specs - layout patterns abstracted into an original prompt; no source text copied; personal use.
- **Delivery format:** amazon-brandstore-hero amazon-aplus-header web-hero

### Prompt

```text
Create a {RATIO} hero image: the product range from REF 1..REF {RANGE_COUNT} grouped on a natural stone plinth, tallest in the center, exact products as supplied, soft contact shadows. Environment: {ENVIRONMENT_STORY} behind, in a gradient of {BRAND_PRIMARY_HEX}. Light: single soft source from the {LIGHT_DIRECTION}, subtle rim light. LOCKED ELEMENTS: product shape, color, label text and logo exactly as in REF 1; approved copy verbatim; brand fonts and hex colors as named. Negative space: keep the {COPY_SAFE_AREA} 35% clear. Exclusions: no text, no price, no extra products, no floating items.
```

### Variations and adaptation

Single product on plinth; swap stone for ceramic or concrete from the brand kit.

### Constraints and common failures

Count and arrangement of products drift; reference each product by number.

### Quality checks

All range items present once; plinth grounded; copy-safe area clear.


## shoot-luxury-step-hero — Luxury low-angle hero on a step

- **Purpose:** Understated premium packshot: product low in frame on a pale step with a long soft shadow.
- **Category:** product photography
- **Tags:** luxury, packshot, low angle, shadow, negative space, one accent
- **Mode:** generate or edit
- **Model/tool:** GPT-Image-2 or Nano Banana Pro (hypothesis; see core/model-router.md)
- **Compatibility:** unverified - original template, not tested here.
- **Validation:** adapted template
- **Required inputs:** REF 1 product identity, backdrop tone, accent description
- **Reference assets:** `REF 1 = product identity` (and further numbered refs as listed in inputs); one role per reference
- **Sources:** SRC-23
- **Reuse:** SRC-23 owner reference set and platform specs - layout patterns abstracted into an original prompt; no source text copied; personal use.
- **Delivery format:** amazon-gallery web-hero meta-feed-4x5

### Prompt

```text
Photograph the exact product from REF 1 standing on the edge of a pale matte step, positioned low in the frame and slightly angled, long soft shadow falling to the right, smooth light-gray gradient backdrop. Raking window light from the left with a warm glow at the base where the {ACCENT_ELEMENT} (the liquid or material) catches light. Keep {NEGATIVE_SPACE_PERCENT}% of the frame empty above the product. LOCKED ELEMENTS: product shape, color, label text and logo exactly as in REF 1; approved copy verbatim; brand fonts and hex colors as named. Exclusions: no props, no text, no reflections of other objects, no extra colors beyond the product and neutral backdrop.
```

### Variations and adaptation

Dark backdrop version; square crop with product centered; move the step to the left.

### Constraints and common failures

Glass and liquid reflections often alter label text; verify the label at 100%.

### Quality checks

Label intact; shadow direction consistent; accent color only on the product; negative space respected.


## shoot-floating-on-sky — Floating objects over open sky

- **Purpose:** Products or collateral suspended over a soft sky or solid field, shot from above.
- **Category:** product photography
- **Tags:** floating, sky, clouds, overhead, surreal, minimal
- **Mode:** generate or edit
- **Model/tool:** GPT-Image-2 or Nano Banana Pro (hypothesis; see core/model-router.md)
- **Compatibility:** unverified - original template, not tested here.
- **Validation:** adapted template
- **Required inputs:** REF 1 product or collateral identity, sky tone, count
- **Reference assets:** `REF 1 = product identity` (and further numbered refs as listed in inputs); one role per reference
- **Sources:** SRC-23
- **Reuse:** SRC-23 owner reference set and platform specs - layout patterns abstracted into an original prompt; no source text copied; personal use.
- **Delivery format:** web-hero ig-feed-4x5 meta-feed-4x5

### Prompt

```text
Create a top-down image of {OBJECT_COUNT} of the exact object from REF 1 floating at different angles above {SKY_OR_FIELD_DESCRIPTION}, soft diffuse daylight, gentle shadows cast onto the surface below, objects spaced with clear gaps and generous empty space. LOCKED ELEMENTS: product shape, color, label text and logo exactly as in REF 1; approved copy verbatim; brand fonts and hex colors as named. Palette: {BRAND_PRIMARY_HEX} sky tones with optional small geometric accents in {ACCENT_HEX}. Exclusions: no text other than what is on the objects, no birds, no extra objects.
```

### Variations and adaptation

Solid color field instead of sky; change the angle to straight-on.

### Constraints and common failures

Printed text on objects (cards, packs) may garble; verify and composite if needed.

### Quality checks

Object matches reference; spacing clear; shadows consistent; no stray elements.


## brand-application-mockup-set — Brand application mockup set

- **Purpose:** One soft-colored board with the brand applied to bag, cup, card, sign and tote.
- **Category:** brand identity
- **Tags:** mockup, stationery, bag, cup, menu, application set
- **Mode:** generate or edit
- **Model/tool:** GPT-Image-2 or Nano Banana Pro (hypothesis; see core/model-router.md)
- **Compatibility:** unverified - original template, not tested here.
- **Validation:** adapted template
- **Required inputs:** REF 1 logo or wordmark (vector), palette, item list, tone
- **Reference assets:** `REF 1 = product identity` (and further numbered refs as listed in inputs); one role per reference
- **Sources:** SRC-23
- **Reuse:** SRC-23 owner reference set and platform specs - layout patterns abstracted into an original prompt; no source text copied; personal use.
- **Delivery format:** ig-feed-4x5 web-hero

### Prompt

```text
Create a flat-lay brand application board on a {BACKGROUND_HEX} field. Items arranged with even spacing: {ITEM_LIST}. Each item carries the logo from REF 1 unchanged, in {BRAND_PRIMARY_HEX} where it prints. Mix clean packshot-style items with two hand-held lifestyle crops. Soft overhead light, natural paper and fabric textures. LOCKED ELEMENTS: product shape, color, label text and logo exactly as in REF 1; approved copy verbatim; brand fonts and hex colors as named. Handwritten-style accent marks are allowed only as small annotations: {ANNOTATION_TEXT_OR_NONE}. Exclusions: no distorted logos, no invented taglines, no brand names other than {BRAND_NAME}.
```

### Variations and adaptation

Single item close-up variants; seasonal palette swap.

### Constraints and common failures

Logo distortion on curved surfaces; fix by compositing the vector logo onto a clean mockup.

### Quality checks

Logo unchanged on every item; palette consistent; no invented text.


## google-pmax-asset-set — Google PMax asset set (3 ratios)

- **Purpose:** One crop-safe master that survives 1.91:1, 1:1 and 4:5.
- **Category:** advertising and performance
- **Tags:** google, pmax, display, asset group, crop-safe
- **Mode:** generate or edit
- **Model/tool:** GPT-Image-2 or Nano Banana Pro (hypothesis; see core/model-router.md)
- **Compatibility:** unverified - original template, not tested here.
- **Validation:** adapted template
- **Required inputs:** REF 1 product identity, brand tokens, optional single short line
- **Reference assets:** `REF 1 = product identity` (and further numbered refs as listed in inputs); one role per reference
- **Sources:** SRC-23
- **Reuse:** SRC-23 owner reference set and platform specs - layout patterns abstracted into an original prompt; no source text copied; personal use.
- **Delivery format:** google-landscape google-square google-portrait

### Prompt

```text
Create a master image at 16:9 with the exact product from REF 1 centered, occupying about 45% of the frame height, on a clean {BACKGROUND_STYLE} in {BRAND_PRIMARY_HEX} and {BRAND_NEUTRAL_HEX}, with calm margins of at least 20% on all sides so the subject survives 1.91:1, 1:1 and 4:5 crops. LOCKED ELEMENTS: product shape, color, label text and logo exactly as in REF 1; approved copy verbatim; brand fonts and hex colors as named. No text, or at most one short line ("{OPTIONAL_LINE}") in {DISPLAY_FONT} in the lower-left. Exclusions: no collage, no borders, no fake buttons, no logo overlay larger than 8% of the width.
```

### Variations and adaptation

Lifestyle master with the product in the lower third; add a second master with a different background color for asset-group variety.

### Constraints and common failures

Google combines assets with its own text; heavy text on images breaks that and policy.

### Quality checks

Subject intact in all three crops from post/resize.py; no text clutter; asset sizes pass post/check.py.


## social-announcement-tile — Announcement / launch tile

- **Purpose:** Simple launch tile: product, 'new' headline, one detail line.
- **Category:** social and video planning
- **Tags:** announcement, launch, tile, organic, new product
- **Mode:** generate or edit
- **Model/tool:** GPT-Image-2 or Nano Banana Pro (hypothesis; see core/model-router.md)
- **Compatibility:** unverified - original template, not tested here.
- **Validation:** adapted template
- **Required inputs:** REF 1 product identity, headline, detail line, date if any
- **Reference assets:** `REF 1 = product identity` (and further numbered refs as listed in inputs); one role per reference
- **Sources:** SRC-23
- **Reuse:** SRC-23 owner reference set and platform specs - layout patterns abstracted into an original prompt; no source text copied; personal use.
- **Delivery format:** ig-feed-4x5 linkedin-square meta-square-1x1

### Prompt

```text
Create a {RATIO} announcement tile. The exact product from REF 1 centered on a {BRAND_PRIMARY_HEX} field with a soft spotlight and contact shadow. Headline at top in {DISPLAY_FONT}: "{HEADLINE}". Detail line at the bottom in {BODY_FONT}: "{DETAIL_LINE}". LOCKED ELEMENTS: product shape, color, label text and logo exactly as in REF 1; approved copy verbatim; brand fonts and hex colors as named. Exclusions: no extra badges, no stars, no price unless supplied, no more than two text lines.
```

### Variations and adaptation

Add a date chip; swap spotlight for a color-block split.

### Constraints and common failures

Text accuracy; keep to two lines.

### Quality checks

Both text lines exact; product intact; safe margins.
