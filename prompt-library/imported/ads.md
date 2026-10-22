# Advertising and performance creative (imported)

Imported 2026-10-07 for private personal use from SRC-21 (EvoLinkAI, CC0) and SRC-22 (YouMind OpenLab, CC BY 4.0). Prompt text is verbatim apart from normalised placeholders. Everything here is `source example`/untested until Phase 4.

## ads-banner-grid-4panel — 4-panel digital ad banner grid

- **Purpose:** Four banner variants on one board for concept review.
- **Category:** advertising and performance
- **Tags:** banner grid, variants, digital ads
- **Mode:** generate
- **Model/tool:** GPT-Image-2 (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-21
- **Reuse:** SRC-21 CC0-1.0 - prompt text imported verbatim (placeholders normalised); original creator rights not cleared; private personal use only.
- **Source title:** 4-Panel Japanese Digital Ad Banner Grid
- **Source link:** https://x.com/makaneko_AI/status/2045764016858087720
- **Delivery format:** meta-landscape

### Prompt

```text
{
  "type": "2x2 grid of Japanese digital advertisement banners",
  "layout": {
    "structure": "4 equal quadrants",
    "quadrants": [
      {
        "position": "top-left",
        "theme": "Travel",
        "subject": "A couple holding hands on a white sand beach, looking out at turquoise ocean water under a bright blue sky.",
        "elements": ["red hibiscus flower in bottom left corner"],
        "text_labels": [
          "今年こそ、解き放て。",
          "{TRAVEL_DESTINATION}",
          "3日間の癒やし旅",
          "航空券+ホテル",
          "39,800円〜",
          "絶景、グルメ、体験 ぜんぶ叶う!"
        ],
        "icons": {
          "count": 3,
          "descriptions": ["airplane", "hotel building", "car"]
        }
      },
      {
        "position": "top-right",
        "theme": "Skincare",
        "subject": "Close-up portrait of a young woman with glowing, dewy skin, eyes closed, gently touching her cheeks.",
        "elements": [
          "soft pink gradient background",
          "dynamic water splash effects",
          "pink cosmetic jar labeled '{SKINCARE_PRODUCT_NAME} Brightening Gel'"
        ],
        "text_labels": [
          "毛穴・くすみ卒業!",
          "透明感あふれる",
          "水光肌へ",
          "新感覚スキンケア",
          "初回限定 78%OFF",
          "{DISCOUNT_PRICE}"
        ],
        "badges": {
          "count": 3,
          "style": "gold circular",
          "labels": ["毛穴ケア", "高保湿", "ハリ・ツヤ"]
        }
      },
      {
        "position": "bottom-left",
        "theme": "Gourmet Food",
        "subject": "Thick, sliced, medium-rare steak sizzling on a dark grill plate.",
        "elements": [
          "garlic chips",
          "rosemary sprig",
          "dark background with smoke and glowing embers"
        ],
        "text_labels": [
          "とろける旨さ!",
          "{FOOD_ITEM}",
          "贅沢ステーキ",
          "期間限定",
          "特別価格",
          "通常価格 8,980円",
          "4,980円"
        ],
        "badges": {
          "count": 1,
          "style": "red circular",
          "labels": ["A4 A5等級"]
        }
      },
      {
        "position": "bottom-right",
        "theme": "Online Education",
        "subject": "Young man in a blue shirt studying at a desk, writing in a notebook next to an open laptop.",
        "elements": ["bright indoor lighting", "desk environment"],
        "text_labels": [
          "スキマ時間で",
          "{EDUCATION_GOAL}",
          "オンライン資格講座",
          "スマホで完結",
          "効率学習で差がつく!",
          "今だけ! 受講料 20%OFF"
        ],
        "badges": {
          "count": 1,
          "style": "blue circular",
          "labels": ["受講者数 10万人 突破!"]
        },
        "icons": {
          "count": 2,
          "descriptions": ["smartphone", "open book"]
        }
      }
    ]
  }
}
```

Source defaults: `TRAVEL_DESTINATION` = 沖縄旅行; `SKINCARE_PRODUCT_NAME` = LUMIÈRE; `DISCOUNT_PRICE` = 1,980円; `FOOD_ITEM` = 黒毛和牛; `EDUCATION_GOAL` = 最短合格!

### Variations and adaptation

Test one variable at a time: hook line, hero visual, offer or format. Derive other ratios by recomposing, not cropping. Add exact headline, offer chip, footnote and logo as a design layer when exactness matters (formats/meta.md).

### Constraints and common failures

Source examples are brand-flavored art directions, not conversion-tested; text can be wrong; dramatic effects can overpower the product and claims.

### Quality checks

Headline and offer exact; claims approved with footnote; product recognizable at thumbnail; platform safe zones and policy checked.

## ads-banner-grid-2x2 — 2x2 ad banner grid

- **Purpose:** 2x2 banner concept grid.
- **Category:** advertising and performance
- **Tags:** banner grid, 2x2, concepts
- **Mode:** generate
- **Model/tool:** GPT-Image-2 (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-21
- **Reuse:** SRC-21 CC0-1.0 - prompt text imported verbatim (placeholders normalised); original creator rights not cleared; private personal use only.
- **Source title:** Japanese Ad Banner 2x2 Grid
- **Source link:** https://x.com/iamaiistudio/status/2064440310479176084
- **Delivery format:** meta-landscape

### Prompt

```text
{
  "type": "2x2 grid of Japanese-style digital advertisement banners",
  "layout": {
    "structure": "4 equal quadrants",
    "quadrants": [
      {
        "position": "top-left",
        "theme": "Travel",
        "subject": "A couple holding hands walking along a white sandy beach, gazing at crystal-clear turquoise water beneath a vivid blue sky.",
        "elements": ["red hibiscus flower in the lower-left corner"],
        "text_labels": [
          "This year, break free.",
          "{TRAVEL_DESTINATION}",
          "3-day relaxation getaway",
          "Flights + Hotel",
          "Starting from ¥39,800",
          "Views, food, and experiences — all covered!"
        ],
        "icons": {
          "count": 3,
          "descriptions": ["airplane", "hotel building", "car"]
        }
      },
      {
        "position": "top-right",
        "theme": "Skincare",
        "subject": "Close-up of a young woman with radiant, dewy skin, eyes gently closed, lightly pressing both hands to her cheeks.",
        "elements": [
          "soft pink gradient background",
          "dynamic water splash effects",
          "pink cosmetic jar labeled '{SKINCARE_PRODUCT_NAME} Brightening Gel'"
        ],
        "text_labels": [
          "Bye bye pores and dullness!",
          "Radiance overflowing",
          "Achieve glass-like dewy skin",
          "Next-level skincare sensation",
          "First order 78% OFF",
          "{DISCOUNT_PRICE}"
        ],
        "badges": {
          "count": 3,
          "style": "gold circular",
          "labels": ["Pore care", "Deep hydration", "Firmness & luminosity"]
        }
      },
      {
        "position": "bottom-left",
        "theme": "Gourmet Food",
        "subject": "Thick medium-rare steak slices sizzling on a dark cast-iron grill plate.",
        "elements": [
          "crispy garlic chips",
          "rosemary sprig",
          "dark background with smoke and glowing embers"
        ],
        "text_labels": [
          "Melt-in-your-mouth flavor!",
          "{FOOD_ITEM}",
          "Luxury steak",
          "Limited time offer",
          "Special price",
          "Regular price ¥8,980",
          "¥4,980"
        ],
        "badges": {
          "count": 1,
          "style": "red circular",
          "labels": ["A4 A5 Grade"]
        }
      },
      {
        "position": "bottom-right",
        "theme": "Online Education",
        "subject": "Young man in a blue shirt studying at a desk, writing in a notebook next to an open laptop.",
        "elements": ["bright indoor lighting", "desk environment"],
        "text_labels": [
          "In your spare time",
          "{EDUCATION_GOAL}",
          "Online certification course",
          "Complete on your smartphone",
          "Make a difference with efficient study!",
          "Now only! Tuition 20% OFF"
        ],
        "badges": {
          "count": 1,
          "style": "blue circular",
          "labels": ["Over 100,000 students enrolled!"]
        },
        "icons": {
          "count": 2,
          "descriptions": ["smartphone", "open book"]
        }
      }
    ]
  }
}
```

Source defaults: `TRAVEL_DESTINATION` = Okinawa Trip; `SKINCARE_PRODUCT_NAME` = LUMIÈRE; `DISCOUNT_PRICE` = ¥1,980; `FOOD_ITEM` = Kuroge Wagyu; `EDUCATION_GOAL` = Fastest Pass!

### Variations and adaptation

Test one variable at a time: hook line, hero visual, offer or format. Derive other ratios by recomposing, not cropping. Add exact headline, offer chip, footnote and logo as a design layer when exactness matters (formats/meta.md).

### Constraints and common failures

Source examples are brand-flavored art directions, not conversion-tested; text can be wrong; dramatic effects can overpower the product and claims.

### Quality checks

Headline and offer exact; claims approved with footnote; product recognizable at thumbnail; platform safe zones and policy checked.

## ads-beverage-poster-watermelon — Beverage ad poster (watermelon lime)

- **Purpose:** Vibrant beverage ad with splash and product.
- **Category:** advertising and performance
- **Tags:** beverage, poster, splash, vibrant
- **Mode:** generate
- **Model/tool:** GPT-Image-2 (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-21
- **Reuse:** SRC-21 CC0-1.0 - prompt text imported verbatim (placeholders normalised); original creator rights not cleared; private personal use only.
- **Source title:** Watermelon Lime Beverage Ad Poster
- **Source link:** https://x.com/ShamiWeb3/status/2053430685399232756
- **Delivery format:** meta-feed-4x5

### Prompt

```text
Create a premium modern beverage promotional poster for We Drink.

TOPIC:

Watermelon Pink + Lime Green Refresh Campaign

STYLE & ART DIRECTION:
Modern energetic beverage advertising
Youthful commercial branding
Split-color background composition
Bright refreshing summer aesthetic
Minimal dynamic layout
High-contrast drink advertisement style
Instagram-ready beverage promotion
Premium fast-moving commercial design

MAIN SUBJECT:

Two large ultra-realistic cold beverages positioned prominently in the center.

Drink 1:

A vibrant watermelon pink drink in a transparent plastic cup with visible ice cubes, condensation droplets, and a fresh watermelon garnish.

Drink 2:

A bright lime green drink in a matching transparent cup with visible ice cubes, condensation droplets, and a lime slice garnish.

Additional elements:

Floating ice cubes around the composition
Dynamic water splash effects
Soft realistic shadows beneath each cup
Premium glossy liquid textures
Tiny fruit slices suspended in motion

LAYOUT & COMPOSITION:
Diagonal split-color background
Left side: watermelon pink gradient
Right side: lime green gradient
Large bold headline at the top center: "SIP THE FRESHNESS"
Two hero drinks centered prominently
Product descriptions placed beside each cup
Promotional price section near the bottom-left
We Drink logo and small branding elements at the bottom
Floating ice cubes and splash effects around the drinks
Spacious modern commercial hierarchy

TEXT & TYPOGRAPHY:
Bold oversized sans-serif typography
Youthful rounded commercial fonts
White typography accents
Supporting text: "Watermelon Burst" and "Lime Rush"
Promotional price: Only $3.99
Tagline: "Freshness in Every Sip"

DEPTH & LIGHTING:
Soft glossy studio lighting
Bright refreshing reflections
Realistic beverage highlights
Floating commercial depth
Soft ambient shadows
Premium condensation texture lighting

EXTRA DESIGN DETAILS:
Floating ice cubes
Water splash particles
Glossy gradients
Modern promotional badges
Fruit slices and droplets
Minimal energetic decorative elements

COLOR PALETTE:
Watermelon Pink (#FF4F87)
Lime Green (#A8FF2A)
White typography
Soft transparent highlights

QUALITY:

Ultra-realistic beverage photography, premium advertising composition, Behance-quality commercial poster, high-resolution, sharp focus, photorealistic textures, professional brand campaign aesthetic.
```

### Variations and adaptation

Test one variable at a time: hook line, hero visual, offer or format. Derive other ratios by recomposing, not cropping. Add exact headline, offer chip, footnote and logo as a design layer when exactness matters (formats/meta.md).

### Constraints and common failures

Source examples are brand-flavored art directions, not conversion-tested; text can be wrong; dramatic effects can overpower the product and claims.

### Quality checks

Headline and offer exact; claims approved with footnote; product recognizable at thumbnail; platform safe zones and policy checked.

## ads-granola-poster-matcha — Packaged food ad poster (matcha granola)

- **Purpose:** Packaged food ad with ingredients and headline zone.
- **Category:** advertising and performance
- **Tags:** granola, packaged food, poster
- **Mode:** generate
- **Model/tool:** GPT-Image-2 (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-21
- **Reuse:** SRC-21 CC0-1.0 - prompt text imported verbatim (placeholders normalised); original creator rights not cleared; private personal use only.
- **Source title:** Matcha Granola Ad Poster
- **Source link:** https://x.com/Sairah_0/status/2054111354202779672
- **Delivery format:** meta-feed-4x5

### Prompt

```text
(Matcha Granola Ad)

Ultra-realistic premium food advertisement poster for a healthy breakfast granola brand, centered matte pouch packaging labeled “Matcha Oat Granola”, green monochrome aesthetic, flat lay composition, soft studio lighting, vibrant matcha green background, surrounded by kiwi slices, almonds, oats, chia seeds, matcha powder bowl, granola bowls, scattered ingredients, clean modern typography headline “SUPERFOOD MORNING BOWL”, handwritten annotation arrows with wellness benefits, luxury organic branding, natural shadows, high-end commercial food photography, minimal yet detailed layout, symmetrical composition, sharp focus, Instagram ad style, 8k detail, healthy lifestyle marketing design.

Prompt : (Berry Yogurt Cereal Ad)

High-end commercial breakfast cereal advertisement, pastel pink aesthetic with centered standing pouch packaging labeled “Berry Yogurt Crunch Cereal”, surrounded by strawberries, blueberries, yogurt bowls, milk jug, crunchy granola, scattered berries and grains, soft natural lighting, vibrant fresh mood, modern bold typography headline “START FRESH EVERY MORNING”, handwritten callout arrows and benefit text, realistic food textures, luxury supermarket packaging design, clean flat lay composition, soft shadows, premium branding, glossy vibrant colors, ultra-detailed food photography, Instagram/Facebook ad campaign style, healthy breakfast concept, 8k realistic render.

Prompt : (Chocolate Protein Muesli Ad)

Premium protein breakfast food advertisement poster featuring centered pouch package labeled “Chocolate Protein Muesli”, rich brown monochrome theme, surrounded by dark chocolate chunks, almonds, oats, banana slices, milk jug, muesli bowls, scattered ingredients, dramatic warm studio lighting, bold modern headline typography “HIGH PROTEIN BREAKFAST FUEL”, handwritten annotation arrows highlighting benefits, luxury fitness breakfast branding, realistic textures, symmetrical flat lay composition, high-end commercial food photography, strong contrast, healthy energy concept, clean packaging mockup design, ultra-realistic 8k advertising render, cinematic food styling.
```

### Variations and adaptation

Test one variable at a time: hook line, hero visual, offer or format. Derive other ratios by recomposing, not cropping. Add exact headline, offer chip, footnote and logo as a design layer when exactness matters (formats/meta.md).

### Constraints and common failures

Source examples are brand-flavored art directions, not conversion-tested; text can be wrong; dramatic effects can overpower the product and claims.

### Quality checks

Headline and offer exact; claims approved with footnote; product recognizable at thumbnail; platform safe zones and policy checked.

## ads-sunscreen-invisible-shield — Concept-led ad (invisible shield sunscreen)

- **Purpose:** Benefit concept made visible in a single ad image.
- **Category:** advertising and performance
- **Tags:** concept ad, benefit visualization, skincare
- **Mode:** generate
- **Model/tool:** GPT-Image-2 (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-21
- **Reuse:** SRC-21 CC0-1.0 - prompt text imported verbatim (placeholders normalised); original creator rights not cleared; private personal use only.
- **Source title:** Invisible Shield Sunscreen Ad
- **Source link:** https://x.com/iamrealsnow/status/2066200217347854445
- **Delivery format:** meta-feed-4x5

### Prompt

```text
SUNSCREEN AD, “THE INVISIBLE SHIELD”

Luxury skincare advertising masterpiece, a colossal premium sunscreen bottle standing on a pristine tropical shoreline at golden hour, powerful beams of sunlight crashing down from the sky and splitting apart upon contact with a transparent protective energy dome radiating from the sunscreen, millions of sparkling UV particles dissolving into golden dust before reaching flawless skin, crystal clear ocean reflections, flowing water suspended in mid air around the product, microscopic droplets catching cinematic sunlight, ultra realistic textures revealing every detail of the bottle surface, luxury beauty campaign aesthetics, dramatic volumetric lighting, glowing atmospheric haze, premium white and gold color palette, futuristic protection technology visualized as elegant light waves, hyper detailed environment, commercial photography perfection, award winning advertising design, photorealistic rendering, 16K ultra resolution, global skincare brand campaign, masterpiece quality.

Text Overlay:
SUNSCREEN

Tagline:
“Protect Every Ray. Reveal Every Glow.”
```

### Variations and adaptation

Test one variable at a time: hook line, hero visual, offer or format. Derive other ratios by recomposing, not cropping. Add exact headline, offer chip, footnote and logo as a design layer when exactness matters (formats/meta.md).

### Constraints and common failures

Source examples are brand-flavored art directions, not conversion-tested; text can be wrong; dramatic effects can overpower the product and claims.

### Quality checks

Headline and offer exact; claims approved with footnote; product recognizable at thumbnail; platform safe zones and policy checked.

## ads-energy-drink-stadium — Energy drink stadium ad

- **Purpose:** High-energy beverage ad in a dramatic setting.
- **Category:** advertising and performance
- **Tags:** energy drink, dramatic, sports, ad
- **Mode:** generate
- **Model/tool:** GPT-Image-2 (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-21
- **Reuse:** SRC-21 CC0-1.0 - prompt text imported verbatim (placeholders normalised); original creator rights not cleared; private personal use only.
- **Source title:** Energy Drink Stadium Ad
- **Source link:** https://x.com/Shorelyn_/status/2055570197973799376
- **Delivery format:** meta-feed-4x5

### Prompt

```text
Ultra realistic premium product advertising shot of a sleek aluminum energy drink can standing upright on a wet reflective surface inside a futuristic football stadium at night. The can design features vivid swirling rainbow brushstroke patterns in red, orange, yellow, green, and blue wrapping around the entire can, with a large glossy black and white soccer ball graphic in the center. Bold white distressed typography on the front reads “GOAL” with smaller clean modern text below saying “ENERGY DRINK”. Tiny premium icon details for energy, focus, and endurance near the bottom, along with “250 ml”.

The can is covered in realistic cold water droplets and condensation, highly detailed metallic texture, cinematic reflections, ultra sharp focus, luxury beverage commercial aesthetic, professional studio lighting.

Background filled with explosive colorful powder smoke clouds in blue, red, orange, green, and yellow bursting dramatically behind the can, combined with glowing football stadium floodlights, floating particles, water splashes, sparks, mist, and bokeh light effects. Dark moody environment with intense contrast and neon glow atmosphere.

Composition centered and symmetrical, low angle hero shot, shallow depth of field, hyper realistic, cinematic color grading, ultra detailed advertising photography, sports branding campaign aesthetic, IMAX quality, 8k resolution, volumetric lighting, premium commercial product render, high energy dynamic mood.
```

### Variations and adaptation

Test one variable at a time: hook line, hero visual, offer or format. Derive other ratios by recomposing, not cropping. Add exact headline, offer chip, footnote and logo as a design layer when exactness matters (formats/meta.md).

### Constraints and common failures

Source examples are brand-flavored art directions, not conversion-tested; text can be wrong; dramatic effects can overpower the product and claims.

### Quality checks

Headline and offer exact; claims approved with footnote; product recognizable at thumbnail; platform safe zones and policy checked.

## ads-drop-poster-9x16 — Product drop ad poster (9:16)

- **Purpose:** Vertical drop/launch ad for Stories and Reels.
- **Category:** advertising and performance
- **Tags:** drop, launch, vertical, 9:16
- **Mode:** generate
- **Model/tool:** GPT-Image-2 (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-21
- **Reuse:** SRC-21 CC0-1.0 - prompt text imported verbatim (placeholders normalised); original creator rights not cleared; private personal use only.
- **Source title:** Adidas Futuristic Drop Ad Poster 9:16
- **Source link:** https://x.com/iamaiistudio/status/2065133774413906004
- **Delivery format:** meta-story-9x16

### Prompt

```text
Full prompt:

Design a striking premium vertical advertising poster (9:16 format) for a fictional ultra-limited Adidas sneaker called "ADIDAS AEROBLADE X - LIMITED DROP". The creative direction should feel like a world-class agency campaign — original, futuristic, visually explosive.

Main visual:
A single hero sneaker floating center-frame, captured at a dramatic low angle as if levitating above a dark obsidian running track split by glowing energy cracks. The shoe combines knit mesh, sculpted foam, translucent panels, reflective stripes, and a carbon-fiber sole plate. Neon light trails swirl around it like captured speed. Particles and mist add motion and intensity. Background features faint silhouettes of elite sprinters frozen mid-dash, blurred enough to keep focus on the shoe.

Color palette:
Matte black, electric red, silver, deep charcoal, with subtle neon blue highlights.

Typography and copy (sharp, clean, strong visual hierarchy):
Main headline: "OWN THE SPEED"
Product title: "ADIDAS AEROBLADE X"
Subheadline: "Built for the ones who never run ordinary."
Feature callouts in elegant boxed layout:
- "Featherlight Adaptive Knit Upper"
- "Carbon Energy Return Plate"
- "Precision Grip Traction"
- "Limited Collector Release"
Price: "$280"
Primary CTA: "DROP LIVE NOW"
Secondary CTA: "Only at Select Flagship Stores"
Footer text: "Performance innovation meets futuristic street identity."

Layout:
Bold oversized headline partially integrated into background. Product name near shoe in refined premium placement. Feature callouts stacked vertically along one side. Add a "LIMITED SERIES" badge. The composition blends luxury sports campaign with futuristic editorial design.

Style: Ultra-detailed hyper-realistic product photography, cinematic studio lighting, premium advertising aesthetics, sharp focus, rich textures, subtle atmosphere, dynamic motion energy, high-end commercial poster feel. Aspect ratio 9:16.

#AIart #GPTImage2
```

### Variations and adaptation

Test one variable at a time: hook line, hero visual, offer or format. Derive other ratios by recomposing, not cropping. Add exact headline, offer chip, footnote and logo as a design layer when exactness matters (formats/meta.md).

### Constraints and common failures

Source examples are brand-flavored art directions, not conversion-tested; text can be wrong; dramatic effects can overpower the product and claims.

### Quality checks

Headline and offer exact; claims approved with footnote; product recognizable at thumbnail; platform safe zones and policy checked.

## ads-lifestyle-earbuds — Product lifestyle ad (earbuds)

- **Purpose:** Lifestyle scene ad with product and headline.
- **Category:** advertising and performance
- **Tags:** lifestyle, tech, ad, headline
- **Mode:** generate
- **Model/tool:** GPT-Image-2 (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-21
- **Reuse:** SRC-21 CC0-1.0 - prompt text imported verbatim (placeholders normalised); original creator rights not cleared; private personal use only.
- **Source title:** Wireless Earbuds Lifestyle Ad
- **Source link:** https://x.com/iamaiistudio/status/2065753093283991651
- **Delivery format:** meta-feed-4x5

### Prompt

```text
Design a 9:16 vertical product infographic for Bolt True Wireless Earbuds with a high-end lifestyle ad feel.
Composition & Framing
Full-body shot of a young woman whose face, skin tone, and hairstyle match the reference photo exactly
Slightly low camera angle close to the subject, fashion campaign style, for depth and visual presence
She's seated casually on the floor, one knee up, one leg stretched toward the camera
Foreground (Product)
She holds an open Bolt earbud charging case out toward the viewer
One earbud is visible inside the case, the other is in her ear
The case is glossy white with "BOLT" branding
Slight macro bokeh blur on the hand and case for cinematic depth
Outfit & Style
Modern athleisure streetwear: off-white or neutral lightweight jacket, crop top or sports bra, soft pink joggers, textured white sneakers
Expression: confident and relaxed, subtle smile
Pose feels natural and lifestyle-driven, not posed
Background
Soft gray gradient studio background
Rainbow prism lens flares and subtle light leaks
Floating blurred earbuds and case in background
Studio floor texture visible underfoot
Lighting
Diffused commercial studio lighting emphasizing skin texture, the glossy case, and fabric detail
Soft rim light to separate the subject from the background
Text Overlays (modern sans-serif, white)
Top Center: "BOLT" in large bold text, partially behind the subject
Top Right: Bolt Earbuds / True Wireless
Mid Left: Powerful sound. / Effortless vibes. / Engineered for every beat of your day.
Mid Right: 30 hours of playtime / IPX5 water resistant
Bottom Right: 1 year warranty
Quality
8K ultra-realistic commercial photography
Sharp on face and earbuds, gentle depth blur on foreground and background
Clean Apple/Nike premium ad aesthetic, strong negative space
```

### Variations and adaptation

Test one variable at a time: hook line, hero visual, offer or format. Derive other ratios by recomposing, not cropping. Add exact headline, offer chip, footnote and logo as a design layer when exactness matters (formats/meta.md).

### Constraints and common failures

Source examples are brand-flavored art directions, not conversion-tested; text can be wrong; dramatic effects can overpower the product and claims.

### Quality checks

Headline and offer exact; claims approved with footnote; product recognizable at thumbnail; platform safe zones and policy checked.

## ads-food-bowl-ad — Food ad (acai bowl)

- **Purpose:** Appetite-led food ad with brand voice.
- **Category:** advertising and performance
- **Tags:** food ad, bowl, appetite
- **Mode:** generate
- **Model/tool:** GPT-Image-2 (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-21
- **Reuse:** SRC-21 CC0-1.0 - prompt text imported verbatim (placeholders normalised); original creator rights not cleared; private personal use only.
- **Source title:** Berry Loud Acai Bowl Food Ad
- **Source link:** https://x.com/Sairah_0/status/2053312926141005835
- **Delivery format:** meta-feed-4x5

### Prompt

```text
Prompt 1: Vibrant lifestyle food advertisement, smiling woman in a bright hot pink blazer sitting inside a colorful trendy café, holding a spoon and eating an acai berry bowl topped with strawberries, blueberries, banana slices, and granola, branded "Berry Loud" jar on wooden table, playful retro typography reading "BERRY LOUD" in large cream bubble letters, tropical café interior with hanging plants, warm natural sunlight, cheerful atmosphere, bold pink and teal color palette, shallow depth of field, cinematic food photography, ultra realistic, high detail, commercial ad campaign style, 4k

Prompt 2: Dynamic food product advertisement for "Berry Loud" mixed berry blend, acai smoothie bowl overflowing with strawberries, raspberries, blueberries, blackberries, banana slices, granola, dramatic berry juice splashes and floating fruits in mid air, branded jar beside bowl, vivid hot pink background, large retro cream typography saying "NEW DROP BERRY LOUD", glossy lighting, hyper realistic food photography, energetic composition, vibrant colors, commercial product shoot, ultra detailed textures, splash effect, studio lighting, 4k, advertising poster style
```

### Variations and adaptation

Test one variable at a time: hook line, hero visual, offer or format. Derive other ratios by recomposing, not cropping. Add exact headline, offer chip, footnote and logo as a design layer when exactness matters (formats/meta.md).

### Constraints and common failures

Source examples are brand-flavored art directions, not conversion-tested; text can be wrong; dramatic effects can overpower the product and claims.

### Quality checks

Headline and offer exact; claims approved with footnote; product recognizable at thumbnail; platform safe zones and policy checked.

## ads-delivery-flyer — Food delivery flyer

- **Purpose:** Offer-led flyer for delivery or local promos.
- **Category:** advertising and performance
- **Tags:** flyer, delivery, offer, local
- **Mode:** generate
- **Model/tool:** GPT-Image-2 (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-21
- **Reuse:** SRC-21 CC0-1.0 - prompt text imported verbatim (placeholders normalised); original creator rights not cleared; private personal use only.
- **Source title:** Japanese Chinese Food Delivery Flyer
- **Source link:** https://x.com/xc5_/status/2048310696686014935
- **Delivery format:** meta-feed-4x5

### Prompt

```text
A Japanese neighborhood Chinese restaurant delivery flyer for mailbox posting (3:4 aspect ratio). Designed to look like a double-sided B5 print.

Flyer characteristics (following the grammar of real delivery flyers):
- Flashy red and yellow color scheme.
- Large text at the top: "Delivery Available! {SHOP_NAME}" (shadowed Gothic font).
- An illustration of a {CHARACTER} holding ramen and saying "Welcome!" in a speech bubble.
- A menu photo grid (4x3) featuring various dishes: different types of ramen, fried rice, gyoza, sweet and sour pork, shrimp in chili sauce, mapo tofu, liver and leek stir-fry, tenshinhan, twice-cooked pork, spring rolls, annin tofu, and fried rice sets.
- Names and prices for each dish.
- A large yellow banner saying "Free delivery on all menu items over ¥1,000!".
- "Order by phone! ☎ 072-XX-XXXX" emphasized with a red circle.
- Business hours "11:00-22:00 (Closed on Tuesdays)".
- Delivery area map (simple schematic map).
- Coupon (perforated line for clipping): "One free plate of gyoza with this flyer!".

Texture of cheap paper printing. Includes fold marks. Precision that could be mistaken for a real Japanese delivery flyer.
```

Source defaults: `SHOP_NAME` = Mona-Hanten; `CHARACTER` = Chinese girl in a red cheongsam with a brown short bob

### Variations and adaptation

Test one variable at a time: hook line, hero visual, offer or format. Derive other ratios by recomposing, not cropping. Add exact headline, offer chip, footnote and logo as a design layer when exactness matters (formats/meta.md).

### Constraints and common failures

Source examples are brand-flavored art directions, not conversion-tested; text can be wrong; dramatic effects can overpower the product and claims.

### Quality checks

Headline and offer exact; claims approved with footnote; product recognizable at thumbnail; platform safe zones and policy checked.

## ads-citrus-soda-poster — Beverage poster (citrus soda)

- **Purpose:** Poster-style beverage ad with a bold hero bottle.
- **Category:** advertising and performance
- **Tags:** beverage, poster, bold, hero
- **Mode:** generate
- **Model/tool:** GPT-Image-2 (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-21
- **Reuse:** SRC-21 CC0-1.0 - prompt text imported verbatim (placeholders normalised); original creator rights not cleared; private personal use only.
- **Source title:** E-commerce Main Image - Tropical Citrus Soda Ad Poster
- **Source link:** https://x.com/edimakorfr/status/2047635133466124726
- **Delivery format:** meta-feed-4x5

### Prompt

```text
Create a vibrant tropical commercial poster for a citrus soda bottle, in a bright summer advertising style. Show a single large plastic bottle of {PRODUCT_NAME} centered slightly to the right, tilted a little left, with a yellow cap and transparent bottle covered in cold condensation droplets, filled with glowing golden-orange soda. The label should feature sliced oranges and citrus artwork with the brand text "{PRODUCT_NAME}", the phrase "aux agrumes d'été", and a small green "500 ml" mark. Use a sunny beach background with vivid blue sky, turquoise ocean, soft clouds, and blurred tropical palm leaves entering from the upper right corner. Add dramatic water splashes around the base of the bottle, scattered clear ice cubes, and 5 visible citrus pieces in the foreground: 2 orange wedges, 1 lime half, 1 grapefruit half, and 1 partial orange slice at the far right edge. Place large French promotional text on the left: a huge white headline "{HEADLINE_TEXT}" with a small splash accent above it, then yellow script text "aux agrumes d'été" underneath. Add a yellow paint-stroke badge at mid-left with the text "LA FRAÎCHEUR QUI PÉTILLE !". Add a vertical feature list on the lower left with 3 round icons and French captions: "SAVEURS NATURELLES", "SANS COLORANTS ARTIFICIELS", and "EXTRA RAFRAÎCHISSANT". Add a green brushstroke banner at the bottom left reading "FORMAT PRATIQUE 500 ml". Add a round beige eco-style seal at the bottom right with green outline and leaf motif, containing the text "{SEAL_TEXT}". Lighting should be glossy and high-energy with strong sun flare from the upper left, saturated citrus colors, crisp packaging detail, realistic droplets, and polished supermarket-ad realism.
```

Source defaults: `PRODUCT_NAME` = Soda; `PRODUCT_NAME` = Soda; `HEADLINE_TEXT` = Soda; `SEAL_TEXT` = PLAISIR FRUITÉ À CHAQUE GORGÉE

### Variations and adaptation

Test one variable at a time: hook line, hero visual, offer or format. Derive other ratios by recomposing, not cropping. Add exact headline, offer chip, footnote and logo as a design layer when exactness matters (formats/meta.md).

### Constraints and common failures

Source examples are brand-flavored art directions, not conversion-tested; text can be wrong; dramatic effects can overpower the product and claims.

### Quality checks

Headline and offer exact; claims approved with footnote; product recognizable at thumbnail; platform safe zones and policy checked.

## ads-pastel-fashion-ad — Pastel fashion product ad (footwear)

- **Purpose:** Colorway-led fashion product ad.
- **Category:** advertising and performance
- **Tags:** fashion, pastel, footwear, colorway
- **Mode:** generate
- **Model/tool:** GPT-Image-2 (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-21
- **Reuse:** SRC-21 CC0-1.0 - prompt text imported verbatim (placeholders normalised); original creator rights not cleared; private personal use only.
- **Source title:** E-commerce Main Image - Pastel Blue Crocs Fashion Ad
- **Source link:** https://x.com/SPEEDAI07/status/2047907058079650035
- **Delivery format:** meta-feed-4x5

### Prompt

```text
A high-end studio advertising poster for {BRAND_NAME}, in a monochrome pastel blue and white color palette, with a glossy reflective floor and a soft sky-blue backdrop. The background is dominated by the word {HEADLINE_TEXT} in gigantic bold white condensed sans-serif letters spanning nearly the full height of the image. In the top-right corner, add small white text reading "Designed with ChatGPT". Feature 3 adult women with shoulder-length wavy light brown to dark blonde hair, all wearing loose oversized white long-sleeve tops and flowing white wide-leg pants, styled as minimalist fashion models with relaxed neutral expressions. Their faces are intentionally obscured or blurred. One model reclines against an enormous upright white clog shoe on the left side, one model sits casually on top of a giant white clog on the upper right, and one model lounges on the floor at the lower right, leaning back on one arm while seated partly on a glossy blue sphere. Include 2 oversized white clog shoes as hero props: one standing vertically on the left showing the sole and side profile, and one angled on blue crystalline blocks at center-right showing the upper and toe box. Both clogs are classic foam slip-on style with perforation holes, chunky tread, heel straps, and circular logo rivets. The center-right clog is decorated with exactly 8 visible charms pinned to the upper: a blue-green iridescent round charm, a white daisy with yellow center, a black-and-white round emblem near the strap, a small "CROCS" word charm, a dark flower, a peace-hand sign, an orange smiley face, a white cloud, and an orange flower. Scatter exactly 7 glossy floating or grounded blue spheres of varying sizes around the set: one large sphere behind the left model, one medium sphere floating near center, one medium sphere at bottom left foreground, one medium sphere used as a seat under the lower-right model, one small sphere near the upper left, and 2 additional blue spheres integrated into the composition. Add translucent sculptural gel-like forms at the far left and far right edges, plus angular blue crystal-like rocks beneath the right shoe. At the bottom center, place white promotional copy in a clean sans-serif font: {TAGLINE_LINE_1} on the first line and {TAGLINE_LINE_2} on the second line. Beneath that, show 4 minimalist feature icons with labels in white: "ICONIC COMFORT", "LIGHTWEIGHT", "EASY TO CLEAN", and "UNIQUELY YOU". Place the {LOGO_TEXT} logo in bold lowercase white at the bottom center with a small trademark symbol. The overall style should feel like a premium surreal fashion campaign, clean editorial lighting, soft shadows, glossy textures, airy composition, and modern lifestyle product advertising.
```

Source defaults: `BRAND_NAME` = crocs; `HEADLINE_TEXT` = CROCS; `TAGLINE_LINE_1` = Made for comfort, worn for confidence.; `TAGLINE_LINE_2` = Because life feels better when your feet stop complaining.; `LOGO_TEXT` = crocs

### Variations and adaptation

Test one variable at a time: hook line, hero visual, offer or format. Derive other ratios by recomposing, not cropping. Add exact headline, offer chip, footnote and logo as a design layer when exactness matters (formats/meta.md).

### Constraints and common failures

Source examples are brand-flavored art directions, not conversion-tested; text can be wrong; dramatic effects can overpower the product and claims.

### Quality checks

Headline and offer exact; claims approved with footnote; product recognizable at thumbnail; platform safe zones and policy checked.

## ads-haircare-4panel-campaign — Four-panel haircare campaign grid

- **Purpose:** Four-panel campaign for a product line.
- **Category:** advertising and performance
- **Tags:** haircare, campaign grid, 4-panel
- **Mode:** generate
- **Model/tool:** Nano Banana Pro (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-22
- **Reuse:** SRC-22 CC BY 4.0 (YouMind OpenLab) - prompt text imported verbatim (placeholders normalised); attribute YouMind OpenLab; original creator rights not cleared; private personal use only.
- **Source title:** Four-Panel Luxury Haircare Campaign Grid
- **Source link:** https://github.com/YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill (dataset id 7443, category product-marketing)
- **Delivery format:** meta-feed-4x5

### Prompt

```text
2x2 grid beauty campaign image showcasing the Nanogen shampoo for women ({PRODUCT_COLOR}) as the hero product, combined with an elegant hair-care routine featuring a beautiful adult woman.

Grid layout (four panels):

Top-left – CLEANSE
Close-up of the woman in the shower, water droplets on skin and hair, holding the Nanogen shampoo tube near her shoulder. Soft, dewy skin, wet hair, minimal makeup. Clean, fresh, luxurious feel.

Top-right – CONDITION / MASSAGE
Detailed close-up of conditioner or shampoo being worked through wet hair using fingers or a comb. Creamy texture visible on dark hair strands. Focus on nourishment, thickness, and scalp care. Neutral studio background.

Bottom-left – RINSE
Woman gently pressing a white towel to wet hair, eyes closed, calm and relaxed expression. Natural beauty, healthy skin tones, spa-like atmosphere.

Bottom-right – RESULTS
Final result portrait: the woman with smooth, thick, glossy, healthy-looking hair, softly styled and flowing naturally. Clean white or light neutral background. Confident, radiant expression.

The Nanogen shampoo tube appears clearly branded, readable, and consistent across frames.
High-end beauty advertising aesthetic, editorial lighting, soft shadows, premium skincare look.

 Visual Style

Luxury haircare campaign
Photorealistic
Clean, modern, minimal
Soft studio lighting
Natural skin texture
Professional commercial photography
High detail, sharp focus
Balanced whites and soft neutrals
Subtle warmth

Camera & Composition

Studio + lifestyle hybrid
85mm beauty portrait look
Macro detail shots for hair texture
Shallow depth of field
Crisp product clarity
Even exposure
No harsh contrast
 Mood & Branding

Fresh
Clean
Nourishing
Premium
Confidence-boosting
Healthy beauty
Professional salon quality

 Negative Prompt

Low-quality packaging, incorrect branding, warped text, unreadable label, overexposed highlights, harsh shadows, greasy hair, exaggerated volume, CGI look, plastic skin, cartoon style, cluttered background, watermark, logo distortion
```

Source defaults: `PRODUCT_COLOR` = purple tube

### Variations and adaptation

Test one variable at a time: hook line, hero visual, offer or format. Derive other ratios by recomposing, not cropping. Add exact headline, offer chip, footnote and logo as a design layer when exactness matters (formats/meta.md).

### Constraints and common failures

Source examples are brand-flavored art directions, not conversion-tested; text can be wrong; dramatic effects can overpower the product and claims.

### Quality checks

Headline and offer exact; claims approved with footnote; product recognizable at thumbnail; platform safe zones and policy checked.

## ads-genz-split-screen — Gen Z split-screen ad poster

- **Purpose:** Split-screen contrast ad (before/after or us/them energy).
- **Category:** advertising and performance
- **Tags:** split screen, contrast, gen z, poster
- **Mode:** generate
- **Model/tool:** Nano Banana Pro (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-22
- **Reuse:** SRC-22 CC BY 4.0 (YouMind OpenLab) - prompt text imported verbatim (placeholders normalised); attribute YouMind OpenLab; original creator rights not cleared; private personal use only.
- **Source title:** Gen Z Split Screen Advertising Poster
- **Source link:** https://github.com/YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill (dataset id 20151, category social-media-post)
- **Delivery format:** meta-feed-4x5

### Prompt

```text
Create a split screen Gen Z FMCG advertising campaign poster featuring {PRODUCT_ONE} and {PRODUCT_TWO} in one ultra cinematic composition. 1. {PRODUCT_ONE} floating in mid air with explosive pink milk splashes, fresh strawberries flying around, glossy reflections, transparent liquid droplets, {LIGHTING}, dreamy soft pink and white gradient background, Y2K inspired aesthetic, playful Gen Z vibe, luxury beverage commercial style, high speed frozen motion, chrome typography, holographic particles, studio lighting, hyper realistic textures, fashion editorial energy, social media ad style, vibrant youthful atmosphere. 2. {PRODUCT_TWO} exploding with noodles, fiery sauce splashes, floating chili peppers, sesame seeds, steam effects, glowing orange and red neon lighting, dark moody cyberpunk convenience store aesthetic, cinematic shadows, crunchy toppings suspended mid air, premium FMCG commercial photography, dramatic food styling, ultra detailed textures, streetwear inspired Gen Z branding, energetic motion blur, trendy TikTok advertisement vibe, glossy packaging reflections.
```

Source defaults: `PRODUCT_ONE` = a futuristic strawberry milk drink bottle; `PRODUCT_TWO` = a spicy instant ramen cup; `PRODUCT_ONE` = a futuristic strawberry milk drink bottle; `LIGHTING` = pastel neon lighting; `PRODUCT_TWO` = a spicy instant ramen cup

### Variations and adaptation

Test one variable at a time: hook line, hero visual, offer or format. Derive other ratios by recomposing, not cropping. Add exact headline, offer chip, footnote and logo as a design layer when exactness matters (formats/meta.md).

### Constraints and common failures

Source examples are brand-flavored art directions, not conversion-tested; text can be wrong; dramatic effects can overpower the product and claims.

### Quality checks

Headline and offer exact; claims approved with footnote; product recognizable at thumbnail; platform safe zones and policy checked.

## ads-icecream-parameterized-poster — Parameterized dessert advertising poster

- **Purpose:** Parameterized ad poster for dessert and treats.
- **Category:** advertising and performance
- **Tags:** dessert, parameterized, poster
- **Mode:** generate
- **Model/tool:** Nano Banana Pro (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-22
- **Reuse:** SRC-22 CC BY 4.0 (YouMind OpenLab) - prompt text imported verbatim (placeholders normalised); attribute YouMind OpenLab; original creator rights not cleared; private personal use only.
- **Source title:** Parameterized Ice Cream Dessert Advertising Poster Prompt
- **Source link:** https://github.com/YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill (dataset id 6431, category product-marketing)
- **Delivery format:** meta-feed-4x5

### Prompt

```text
Flavor theme: 【{FLAVOR_THEME}】. Ultra-premium dessert advertising poster, hyper-realistic and intensely mouth-watering. A tall crystal sundae glass centered, filled with a rich creamy dessert inspired by the flavor theme, paired with multiple distinct complementary ingredients from the same flavor profile and color palette, clearly different in form, texture, or preparation, even when the flavor theme itself is visually obvious; for visually ambiguous or dairy-based flavors, include clearly recognizable solid garnish elements derived from the flavor itself. Ice cream scoops appear dense, cold, and creamy with soft melting edges. Flavor-matched liquid splashes originate clearly from inside the glass, bursting upward and outward from the dessert itself, thick, glossy, and gravity-driven, flowing in irregular ribbons and droplets, coating the rim and inner walls of the glass in slow motion. Fruits or accents appear juicy with visible moisture, some placed in the foreground for depth. Seamless infinite studio background in a refined mid-to-dark tone, clean and texture-free, softly lit with subtle tonal gradients, color-matched to the flavor theme. Cinematic lighting, shallow depth of field, high-end commercial aesthetic, indulgent yet refined, hyper-detailed, 8k quality. No text, no logo, no watermark, no packaging, no frame, no CGI or cartoon look.
```

Source defaults: `FLAVOR_THEME` = Strawberry

### Variations and adaptation

Test one variable at a time: hook line, hero visual, offer or format. Derive other ratios by recomposing, not cropping. Add exact headline, offer chip, footnote and logo as a design layer when exactness matters (formats/meta.md).

### Constraints and common failures

Source examples are brand-flavored art directions, not conversion-tested; text can be wrong; dramatic effects can overpower the product and claims.

### Quality checks

Headline and offer exact; claims approved with footnote; product recognizable at thumbnail; platform safe zones and policy checked.

## ads-organic-skincare — Organic skincare product advertisement

- **Purpose:** Natural-ingredient skincare ad.
- **Category:** advertising and performance
- **Tags:** organic, skincare, natural, ad
- **Mode:** generate
- **Model/tool:** Nano Banana Pro (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-22
- **Reuse:** SRC-22 CC BY 4.0 (YouMind OpenLab) - prompt text imported verbatim (placeholders normalised); attribute YouMind OpenLab; original creator rights not cleared; private personal use only.
- **Source title:** Organic Skincare Product Advertisement
- **Source link:** https://github.com/YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill (dataset id 13569, category product-marketing)
- **Delivery format:** meta-feed-4x5

### Prompt

```text
nature inspired atmospheric organicism: A nature-inspired atmospheric product advertisement for "{BRAND_NAME}". A small amber glass bottle and a matching cream jar rest beautifully nestled inside a bed of {BOTANICAL_ELEMENTS}, all placed on a warm, sunlit rustic wooden surface. The background is in soft-focus with a shallow depth of field, featuring blurred terracotta wall textures accented with climbing ivy. Hand-drawn, illustrative typography reading exactly "{SLOGAN}" floats gently above the products in slightly imperfect, organic, elegant letterforms. The overall color palette is muted and earthy, heavily featuring sage green, terracotta, warm ochre, and slate cream. Broad natural window lighting creates a soft, honest, and evenly diffused illumination across the scene. The image features a subtle chalk and watercolor paper texture overlay, offering an open, airy composition with generous negative space, evoking a deep sense of warmth, purity, and calm. Moderately high artistic stylization. 4:5 Aspect Ratio.
```

Source defaults: `BRAND_NAME` = VERDANA Organic Baby Skincare; `BOTANICAL_ELEMENTS` = fresh green sage leaves, sprigs of dried purple lavender, and draped soft white linen cloth; `SLOGAN` = GROWN FROM THE EARTH

### Variations and adaptation

Test one variable at a time: hook line, hero visual, offer or format. Derive other ratios by recomposing, not cropping. Add exact headline, offer chip, footnote and logo as a design layer when exactness matters (formats/meta.md).

### Constraints and common failures

Source examples are brand-flavored art directions, not conversion-tested; text can be wrong; dramatic effects can overpower the product and claims.

### Quality checks

Headline and offer exact; claims approved with footnote; product recognizable at thumbnail; platform safe zones and policy checked.
