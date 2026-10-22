# Organic social, thumbnails and storyboards (imported)

Imported 2026-10-07 for private personal use from SRC-21 (EvoLinkAI, CC0) and SRC-22 (YouMind OpenLab, CC BY 4.0). Prompt text is verbatim apart from normalised placeholders. Everything here is `source example`/untested until Phase 4.

## social-quote-card-wide — Wide quote card with portrait

- **Purpose:** Quote card with a portrait and customizable text.
- **Category:** social and video planning
- **Tags:** quote card, portrait, text overlay, wide
- **Mode:** generate
- **Model/tool:** Nano Banana Pro (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-22
- **Reuse:** SRC-22 CC BY 4.0 (YouMind OpenLab) - prompt text imported verbatim (placeholders normalised); attribute YouMind OpenLab; original creator rights not cleared; private personal use only.
- **Source title:** Wide quote card with portrait and Chinese/English customization
- **Source link:** https://x.com/stark_nico99
- **Delivery format:** linkedin-landscape

### Prompt

```text
A wide quote card featuring a famous person, with a brown background and a light-gold serif font for the quote: “{FAMOUS_QUOTE}” and smaller text: “—{AUTHOR}.” There is a large, subtle quotation mark before the text. The portrait of the person is on the left, the text on the right. The text occupies two-thirds of the image and the portrait one-third, with a slight gradient transition effect on the portrait.
```

Source defaults: `FAMOUS_QUOTE` = Stay Hungry, Stay Foolish; `AUTHOR` = Steve Jobs

### Variations and adaptation

Adapt aspect ratio to the target platform (formats/organic-social.md). For series, generate slide or panel 1 first and reuse it as a style reference.

### Constraints and common failures

UI mockups and text overlays vary in accuracy; storyboards drift in product appearance across panels unless the product reference is repeated.

### Quality checks

One idea per frame; hook visible in the first second or slide; safe zones respected; product consistent across panels.

## social-youtube-thumbnail-text — YouTube thumbnail with text overlay

- **Purpose:** Thumbnail with large readable text over a subject.
- **Category:** social and video planning
- **Tags:** thumbnail, text overlay, youtube
- **Mode:** generate
- **Model/tool:** Nano Banana Pro (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-22
- **Reuse:** SRC-22 CC BY 4.0 (YouMind OpenLab) - prompt text imported verbatim (placeholders normalised); attribute YouMind OpenLab; original creator rights not cleared; private personal use only.
- **Source title:** YouTube Thumbnail - YouTube Thumbnail Design Prompt with Text Overlay
- **Source link:** https://x.com/NsoforN68641
- **Delivery format:** youtube-thumb

### Prompt

```text
Acting as a professional graphics designer and a thumbnail designer, use the attached image to create a high-quality cinematic, attractive and bold Montserrat font text style for the caption.

The caption of the thumbnail is  ["{CAPTION_TEXT}"]. Make sure to use nice images for the blended background effects. My aspect ratio is 16:9
```

Source defaults: `CAPTION_TEXT` = You Don't Need To Edit Anymore... AI is Here Now

### Variations and adaptation

Adapt aspect ratio to the target platform (formats/organic-social.md). For series, generate slide or panel 1 first and reuse it as a style reference.

### Constraints and common failures

UI mockups and text overlays vary in accuracy; storyboards drift in product appearance across panels unless the product reference is repeated.

### Quality checks

One idea per frame; hook visible in the first second or slide; safe zones respected; product consistent across panels.

## social-giveaway-banner — SNS giveaway campaign banner

- **Purpose:** Giveaway or contest banner for social channels.
- **Category:** social and video planning
- **Tags:** giveaway, banner, contest, cta
- **Mode:** generate
- **Model/tool:** Nano Banana Pro (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-22
- **Reuse:** SRC-22 CC BY 4.0 (YouMind OpenLab) - prompt text imported verbatim (placeholders normalised); attribute YouMind OpenLab; original creator rights not cleared; private personal use only.
- **Source title:** SNS Giveaway Campaign Banner
- **Source link:** https://github.com/YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill (dataset id 33795, category social-media-post)
- **Delivery format:** meta-feed-4x5

### Prompt

```text
[Campaign Information]
- Campaign Name: {CAMPAIGN_NAME}
- Prize List: {PRIZES}
- Participation Steps: {ENTRY_STEPS}

[Image Quality/Direction/Composition]
- Style: Pop, bright, and friendly SNS promotional banner. Eye-catching design.
- Subject: Illustrations or realistic product photos of {PRIZES} popping out of a gift box, surrounded by festive ribbons and star decorations, centered.
- Color/Tone: Pastel tones of bright pink, yellow, and light blue to create a sense of excitement.
- Text Info (for GPT-image / Nano Banana Pro): The text {CAMPAIGN_NAME} at the top and the simple steps {ENTRY_STEPS} at the bottom, laid out clearly in a thick, cute, rounded font.
- Lighting: Flat, uniform bright lighting with soft shadows.

[Strict Layout Constraints (Required)]
- Output the finished flat 2D design itself, filling the entire canvas. Scene elements inside the design (walls, rooms, shadows) described above are allowed. Absolutely NO photo-of-a-poster mockups: no picture frames, no poster-on-wall or poster-on-desk shots, no perspective warp or drop shadow around the artwork's edges.
- Aspect Ratio: --ar 1:1 or --ar 16:9
```

Source defaults: `CAMPAIGN_NAME` = My Favorite Item Giveaway Campaign; `PRIZES` = Tonkotsu Ramen, Tea, Tissue Box; `ENTRY_STEPS` = Follow & Repost; `PRIZES` = Tonkotsu Ramen, Tea, Tissue Box; `CAMPAIGN_NAME` = My Favorite Item Giveaway Campaign; `ENTRY_STEPS` = Follow & Repost

### Variations and adaptation

Adapt aspect ratio to the target platform (formats/organic-social.md). For series, generate slide or panel 1 first and reuse it as a style reference.

### Constraints and common failures

UI mockups and text overlays vary in accuracy; storyboards drift in product appearance across panels unless the product reference is repeated.

### Quality checks

One idea per frame; hook visible in the first second or slide; safe zones respected; product consistent across panels.

## social-story-promo-mirror-selfie — Instagram Story promo (mirror selfie, jewelry)

- **Purpose:** Story-style UGC promo frame featuring a product.
- **Category:** social and video planning
- **Tags:** story, UGC, promo, selfie, jewelry
- **Mode:** generate
- **Model/tool:** Nano Banana Pro (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-22
- **Reuse:** SRC-22 CC BY 4.0 (YouMind OpenLab) - prompt text imported verbatim (placeholders normalised); attribute YouMind OpenLab; original creator rights not cleared; private personal use only.
- **Source title:** Instagram Story Mirror Selfie Prompt (Jewelry Promotion)
- **Source link:** https://github.com/YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill (dataset id 2751, category social-media-post)
- **Delivery format:** ig-story-9x16

### Prompt

```text
{
  "scene_type": "Instagram Story – Night Out",
  "aspect_ratio": "9:16",
  "description": "An elegant Instagram story of {INFLUENCER_NAME} taking a mirror selfie during a special night out, styled for a premium social media look with subtle UI overlays.",
  "scene": {
    "setting": "modern_restaurant_bathroom_night",
    "lighting": {
      "style": "soft_warm_overhead_and_side_lighting",
      "effects": [
        "subtle_glow_on_skin",
        "mirror_reflections",
        "ambient_bathroom_light"
      ],
      "mood": "night_out_elegance"
    },
    "background": {
      "elements": [
        "large_mirror",
        "dark_tile_walls",
        "soft_wall_sconces",
        "minimalist_sink"
      ],
      "palette": "deep_neutrals_with_gold_accents"
    }
  },
  "subject": {
    "name": "{SUBJECT_NAME}",
    "description": "Extremely elegant and stylish brunette woman enjoying a special night out",
    "pose": "mirror_selfie_with_phone_in_right_hand",
    "expression": "soft_confident_night_out_look",
    "appearance": {
      "hair": "loose_natural_shiny_waves",
      "makeup": "subtle_glam_evening_style_with_warm_highlights",
      "skin": "warm_even_skin_tone_with_soft_glow",
      "distinct_feature": "small visible mole on her upper chest"
    },
    "outfit": {
      "type": "black_evening_dress",
      "style": "sleek_minimalist_elegant",
      "details": "deep neckline with tasteful cleavage, clean silhouette, high-end fabric",
      "accessories": [
        "gold_hoop_earrings",
        "thin_gold_necklace",
        "subtle_rings"
      ]
    }
  },
  "camera": {
    "perspective": "mirror_selfie_portrait",
    "framing": "medium_close_up_showing_upper_body_and_outfit",
    "phone": {
      "model": "modern_smartphone",
      "finish": "gold",
      "reflections": "visible_in_glass"
    },
    "focus": "sharp_on_subject_face_soft_background",
    "lens": "standard_35mm_look"
  },
  "instagram_ui": {
    "top_left_profile": {
      "profile_image": "mini_circular_profile_photo",
      "username": "{USERNAME}"
    },
    "story_text": {
      "content": "{STORY_TEXT}",
      "placement": "middle_top_left",
      "style": "clean_instagram_story_font_white"
    }
  },
  "visual_style": {
    "render": "ultra_realistic_evening_photography",
    "color_grade": "rich_warm_tones_with_subtle_contrast",
    "detail_level": "high_skin_texture_hair_strands_fabric_detail",
    "vibe": "luxury_night_out_elegance",
    "quality": "high-end Instagram story, polished and viral-ready"
  }
}
```

Source defaults: `INFLUENCER_NAME` = Ellie; `SUBJECT_NAME` = ellie; `USERNAME` = ellie; `STORY_TEXT` = A Special night <3

### Variations and adaptation

Adapt aspect ratio to the target platform (formats/organic-social.md). For series, generate slide or panel 1 first and reuse it as a style reference.

### Constraints and common failures

UI mockups and text overlays vary in accuracy; storyboards drift in product appearance across panels unless the product reference is repeated.

### Quality checks

One idea per frame; hook visible in the first second or slide; safe zones respected; product consistent across panels.

## social-livestream-commerce-ui — Live stream commerce UI mockup

- **Purpose:** Live-shopping interface frame for product promotion.
- **Category:** social and video planning
- **Tags:** livestream, commerce, UI, mockup
- **Mode:** generate
- **Model/tool:** GPT-Image-2 (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-21
- **Reuse:** SRC-21 CC0-1.0 - prompt text imported verbatim (placeholders normalised); original creator rights not cleared; private personal use only.
- **Source title:** E-commerce Live Stream UI Mockup
- **Source link:** https://x.com/sjbbxhz/status/2045684734714380687
- **Delivery format:** ig-story-9x16

### Prompt

```text
{
  "type": "live stream UI mockup",
  "subject": {
    "description": "portrait of {HOST_NAME}, smiling, wearing a black t-shirt with a white technical schematic graphic",
    "background": "left side shows a screen with '{LEFT_BACKGROUND_LOGO}' text, right side shows a red '{RIGHT_BACKGROUND_LOGO}' and a dark car"
  },
  "ui_overlay": {
    "top_header": {
      "host_info": "avatar, name '{HOST_NAME}', subtext '55.6万本场点赞', red '关注' button",
      "rank_badge": "gold coin icon with '全站第1名'",
      "viewer_stats": "3 top viewer avatars with '12.3w', '8.6w', '5.7w', total '68.7万', 'X' close button",
      "right_links": "'更多直播 >', '礼物展馆 0/24' with blue '经典' tag"
    },
    "mid_left_gifts": {
      "count": 2,
      "items": [
        "avatar '科技爱好者', '送小心心', heart icon x 1314",
        "avatar '星辰大海', '送火箭', rocket icon x 666"
      ]
    },
    "bottom_left_chat": {
      "system_message": "level 37 badge '宇宙漫游者 加入了直播间'",
      "message_count": 7,
      "messages": [
        "小火箭: 马斯克!未来可期!🚀",
        "future: 特斯拉Model 2什么时候出?",
        "星空梦想家: SpaceX今年能上火星吗?",
        "AI探索者: Neuralink进展如何?",
        "帅气的网友: 马总好!",
        "Mars: 第一次来你的直播,超激动!",
        "用户123: 讲讲AI吧,会取代人类吗?"
      ]
    },
    "bottom_right_product_card": {
      "hot_tag": "orange '热卖 x 1888'",
      "image": "Tesla Cybertruck",
      "title": "{PRODUCT_NAME}",
      "price": "{PRODUCT_PRICE}",
      "button": "red '抢' button",
      "floating_animation": "translucent hearts floating up the right edge"
    },
    "bottom_bar": {
      "input_field": "'说点什么...'",
      "icons": ["smiley face", "three dots", "shopping cart", "gift box", "share"]
    }
  }
}
```

Source defaults: `HOST_NAME` = Elon Musk; `LEFT_BACKGROUND_LOGO` = SPACEX; `RIGHT_BACKGROUND_LOGO` = Tesla T logo; `PRODUCT_NAME` = 特斯拉Cybertruck 电动皮卡; `PRODUCT_PRICE` = ¥ 1,618,000

### Variations and adaptation

Adapt aspect ratio to the target platform (formats/organic-social.md). For series, generate slide or panel 1 first and reuse it as a style reference.

### Constraints and common failures

UI mockups and text overlays vary in accuracy; storyboards drift in product appearance across panels unless the product reference is repeated.

### Quality checks

One idea per frame; hook visible in the first second or slide; safe zones respected; product consistent across panels.

## social-livestream-commerce-ui-2 — Livestream commerce UI mockup (variant)

- **Purpose:** Second live-commerce UI layout variant.
- **Category:** social and video planning
- **Tags:** livestream, commerce, UI, variant
- **Mode:** generate
- **Model/tool:** GPT-Image-2 (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-21
- **Reuse:** SRC-21 CC0-1.0 - prompt text imported verbatim (placeholders normalised); original creator rights not cleared; private personal use only.
- **Source title:** Livestream Commerce UI Mockup
- **Source link:** https://x.com/iamaiistudio/status/2069090579355668501
- **Delivery format:** ig-story-9x16

### Prompt

```text
{
  "type": "live stream UI mockup",
  "subject": {
    "description": "portrait of {HOST_NAME}, smiling, dressed in a black t-shirt featuring a white technical schematic print",
    "background": "left side displays a screen showing '{LEFT_BACKGROUND_LOGO}' text, right side shows a red '{RIGHT_BACKGROUND_LOGO}' and a dark-colored car"
  },
  "ui_overlay": {
    "top_header": {
      "host_info": "avatar, host name '{HOST_NAME}', subtext '556k likes this stream', red 'Follow' button",
      "rank_badge": "gold coin icon labeled 'No.1 Site-wide'",
      "viewer_stats": "3 top viewer avatars with counts '123k', '86k', '57k', total viewers '687k', 'X' close button",
      "right_links": "'More streams >', 'Gift Hall 0/24' with blue 'Classic' tag"
    },
    "mid_left_gifts": {
      "count": 2,
      "items": [
        "avatar 'TechFan', 'sent a Little Heart', heart icon x 1314",
        "avatar 'SeaOfStars', 'sent a Rocket', rocket icon x 666"
      ]
    },
    "bottom_left_chat": {
      "system_message": "level 37 badge 'CosmicWanderer joined the stream'",
      "message_count": 7,
      "messages": [
        "LittleRocket: Musk! The future is bright! 🚀",
        "future: When is Tesla Model 2 coming out?",
        "StarryDreamer: Will SpaceX reach Mars this year?",
        "AIExplorer: What's the latest on Neuralink?",
        "HandsomeNetizen: Hello Boss Ma!",
        "Mars: First time watching your stream, super excited!",
        "User123: Talk about AI — will it replace humans?"
      ]
    },
    "bottom_right_product_card": {
      "hot_tag": "orange 'Hot Sale x 1888'",
      "image": "Tesla Cybertruck",
      "title": "{PRODUCT_NAME}",
      "price": "{PRODUCT_PRICE}",
      "button": "red 'Buy' button",
      "floating_animation": "translucent hearts drifting up along the right edge"
    },
    "bottom_bar": {
      "input_field": "'Say something...'",
      "icons": ["smiley face", "three dots", "shopping cart", "gift box", "share"]
    }
  }
}
```

Source defaults: `HOST_NAME` = Elon Musk; `LEFT_BACKGROUND_LOGO` = SPACEX; `RIGHT_BACKGROUND_LOGO` = Tesla T logo; `PRODUCT_NAME` = Tesla Cybertruck Electric Pickup; `PRODUCT_PRICE` = ¥1,618,000

### Variations and adaptation

Adapt aspect ratio to the target platform (formats/organic-social.md). For series, generate slide or panel 1 first and reuse it as a style reference.

### Constraints and common failures

UI mockups and text overlays vary in accuracy; storyboards drift in product appearance across panels unless the product reference is repeated.

### Quality checks

One idea per frame; hook visible in the first second or slide; safe zones respected; product consistent across panels.

## social-brand-about-page-layout — Brand about-page storytelling layout

- **Purpose:** Web about-page layout for a brand story.
- **Category:** social and video planning
- **Tags:** web, about page, brand story, layout
- **Mode:** generate
- **Model/tool:** Nano Banana Pro (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-22
- **Reuse:** SRC-22 CC BY 4.0 (YouMind OpenLab) - prompt text imported verbatim (placeholders normalised); attribute YouMind OpenLab; original creator rights not cleared; private personal use only.
- **Source title:** Luxury Brand About Page Storytelling Layout
- **Source link:** https://github.com/YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill (dataset id 6645, category product-marketing)
- **Delivery format:** web-hero

### Prompt

```text
Special Layout Template make by Willy.

Luxury brand about page, storytelling layout, 4:5 ratio.

PAGE TYPE: About page - brand story, visual narrative
LAYOUT: Large image sections alternating with text blocks, timeline arrangement.

SECTION 1:
- Image: A young Caucasian woman in her early 20s : almond-shaped eyes with long defined lashes, high cheekbones, and a subtle V-line jaw. She has  long flowing wavy light brown hair with soft black-coffee highlights cascading over her shoulders. Luminous dewy porcelain skin with a healthy glow and glass skin effect, soft rose blush on cheeks, glossy cherry lips with a subtle smile, slim straight nose, delicate feminine features.
- She wears a cream silk power suit with clean lines and wide-leg trousers, paired with a delicate layered silver necklace. A designer clutch rests on the marble cafe table beside a steaming cup of matcha latte.

SECTION 2:
- Text Block: "{TEXT_BLOCK_1}"
SECTION 3:
- Image: Close-up beauty shot showcasing the glass skin effect and delicate jewelry.
SECTION 4:
- Text Block: "{TEXT_BLOCK_2}"
SECTION 5:
- Image: Full-length shot, showcasing the power suit silhouette in motion.
SECTION 6:
- Text Block: "Designed in Paris, inspired by the world."

DYNAMIC ELEMENTS:
Subtle motion blur as she turns her head slightly with gentle head tilt, soft contemplative expression, steam rising from the matcha latte cup creating warmth and atmosphere.
CAMERA: Hasselblad X2D, 85mm f/1.4 lens, soft diffused golden hour lighting, shallow depth of field, beauty retouching with luminous skin detail.
STYLE: Parisian elegance, power dressing, luxury fashion, ethereal Eurasian beauty, golden hour, warm and cool color palette, high-end fashion editorial.

A stylish handwritten signature "Willy" is elegantly placed in small letters at the Bottom Right corner.

Style keywords: luxury brand, about us, fashion, parisian cafe, glass skin, editorial, commercial, well-lit, proper exposure, storytelling, timeline, 4:5 ratio
Negative prompt: blurry, low quality, pixelated, distorted, watermark, text overlay, logo, cropped, cut off, out of frame, oversaturated, undersaturated, extra limbs, missing fingers, deformed hands, unnatural pose, anatomical errors, plastic skin, uncanny valley, busy background, distracting elements, inconsistent lighting, harsh shadows, amateur composition.
```

Source defaults: `TEXT_BLOCK_1` = Our Journey: A fusion of heritage and innovation, crafted for the modern woman.; `TEXT_BLOCK_2` = Commitment to quality, sustainability, and empowering women through fashion.

### Variations and adaptation

Adapt aspect ratio to the target platform (formats/organic-social.md). For series, generate slide or panel 1 first and reuse it as a style reference.

### Constraints and common failures

UI mockups and text overlays vary in accuracy; storyboards drift in product appearance across panels unless the product reference is repeated.

### Quality checks

One idea per frame; hook visible in the first second or slide; safe zones respected; product consistent across panels.

## social-yogurt-commercial-storyboard — Commercial storyboard (food, 9-panel)

- **Purpose:** Storyboard grid for a short food commercial or reel plan.
- **Category:** social and video planning
- **Tags:** storyboard, commercial, reel plan, food
- **Mode:** generate
- **Model/tool:** Nano Banana Pro (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-22
- **Reuse:** SRC-22 CC BY 4.0 (YouMind OpenLab) - prompt text imported verbatim (placeholders normalised); attribute YouMind OpenLab; original creator rights not cleared; private personal use only.
- **Source title:** Comic / Storyboard - Greek Yogurt Commercial Storyboard
- **Source link:** https://x.com/YUKIMASTERAI
- **Delivery format:** ig-story-9x16

### Prompt

```text
TITLE: Premium Greek Yogurt Product Commercial Storyboard FORMAT: • Single-page premium storyboard • 3:4 Portrait ratio • Premium dairy food campaign • 8 cinematic product-focused scenes • Product remains the visual hero • Luxury advertising agency presentation HEADER: • Elegant clean typography • Information cards: - Duration: {DURATION} - Style: Fresh Gourmet Food Commercial - Product: {PRODUCT} - Audio: Spoon + Creamy ASMR • Why This Style Works section • White, soft pink and berry-red aesthetic • Minimal fruit-inspired decorative elements STORYBOARD: 1. Premium yogurt cup standing on chilled marble with fresh berries 2. Yogurt lid peeling back in an extreme macro shot 3. Spoon entering the thick creamy yogurt 4. Spoon lifting a smooth glossy portion 5. Fresh strawberry pieces dropping into the yogurt 6. Berry puree swirling through the creamy yogurt 7. Extreme macro showing thick yogurt texture and fruit pieces 8. Final hero product shot with yogurt cup, berries and elegant spoon composition EVERY PANEL: • Scene number • Duration badge • Camera direction • Visual • Action • Product detail CAMERA: Extreme macro, slow-motion fruit drop, creamy texture close-up, overhead composition, smooth spoon movement, shallow depth of field, cinematic hero framing. STYLE: Ultra-realistic dairy food photography, thick creamy texture, realistic fruit pieces, glossy berry swirl, chilled condensation, soft premium lighting, clean packaging, luxury food advertising, 8K.
```

Source defaults: `DURATION` = 20 Seconds; `PRODUCT` = Greek Fruit Yogurt

### Variations and adaptation

Adapt aspect ratio to the target platform (formats/organic-social.md). For series, generate slide or panel 1 first and reuse it as a style reference.

### Constraints and common failures

UI mockups and text overlays vary in accuracy; storyboards drift in product appearance across panels unless the product reference is repeated.

### Quality checks

One idea per frame; hook visible in the first second or slide; safe zones respected; product consistent across panels.

## social-frozen-pizza-storyboard — Commercial storyboard (frozen pizza)

- **Purpose:** Second storyboard layout for a packaged food ad.
- **Category:** social and video planning
- **Tags:** storyboard, packaged food, commercial
- **Mode:** generate
- **Model/tool:** Nano Banana Pro (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-22
- **Reuse:** SRC-22 CC BY 4.0 (YouMind OpenLab) - prompt text imported verbatim (placeholders normalised); attribute YouMind OpenLab; original creator rights not cleared; private personal use only.
- **Source title:** Frozen Pizza Commercial Storyboard
- **Source link:** https://github.com/YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill (dataset id 33081, category product-marketing)
- **Delivery format:** ig-story-9x16

### Prompt

```text
TITLE: Premium {PRODUCT} Product Commercial Storyboard

FORMAT:
• Single-page premium storyboard
• 3:4 Portrait ratio
• Cinematic frozen food advertising campaign
• 8 completely different product-focused scenes
• Product remains the main visual hero
• Premium advertising agency presentation

HEADER:
• Bold editorial typography
• Information cards:
  - Duration: {DURATION}
  - Style: Cinematic Food Commercial
  - Product: Frozen Pizza
  - Audio: Oven Crackle + Cheese ASMR
• Why This Style Works section
• Warm cream, tomato red and golden yellow aesthetic
• Minimal pizza-themed decorative details

STORYBOARD:
1. Frozen pizza box standing upright on a clean kitchen counter, front packaging perfectly visible
2. Pizza being removed from its packaging, showing detailed toppings and cheese
3. Pizza sliding onto a hot oven tray, dramatic close-up of the crust
4. Oven door closing as the pizza begins baking, warm orange oven glow
5. Extreme macro of cheese bubbling and melting across the toppings
6. Freshly baked pizza coming out of the oven with visible steam
7. Pizza cutter slicing through the crispy crust, melted cheese stretching between slices
8. Final hero product shot with the original pizza box beside the finished pizza

EVERY PANEL:
• Scene number
• Duration badge
• Camera direction
• Visual
• Action
• Product detail

CAMERA:
Overhead food photography, extreme macro, slow-motion cheese melt, low-angle crust shot, controlled push-in, steam close-up, cinematic final packshot.

STYLE:
Ultra-realistic frozen food commercial, bubbling melted cheese, crispy golden crust, detailed toppings, realistic steam, premium packaging, warm cinematic lighting, shallow depth of field, professional food advertising, 8K.
```

Source defaults: `PRODUCT` = Frozen Pizza; `DURATION` = 20 Seconds

### Variations and adaptation

Adapt aspect ratio to the target platform (formats/organic-social.md). For series, generate slide or panel 1 first and reuse it as a style reference.

### Constraints and common failures

UI mockups and text overlays vary in accuracy; storyboards drift in product appearance across panels unless the product reference is repeated.

### Quality checks

One idea per frame; hook visible in the first second or slide; safe zones respected; product consistent across panels.

## social-tvc-9panel-storyboard — 9-panel product TVC storyboard

- **Purpose:** Nine-panel TVC storyboard for a product film.
- **Category:** social and video planning
- **Tags:** TVC, storyboard, 9-panel, product film
- **Mode:** generate or edit
- **Model/tool:** GPT-Image-2 (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy, reference image(s)
- **Reference assets:** `REF 1 = product or subject identity`; declare each role
- **Sources:** SRC-21
- **Reuse:** SRC-21 CC0-1.0 - prompt text imported verbatim (placeholders normalised); original creator rights not cleared; private personal use only.
- **Source title:** E-commerce Main Image - 9-Panel Product TVC Storyboard
- **Source link:** https://x.com/Magncsans/status/2047876253898903594
- **Delivery format:** ig-story-9x16

### Prompt

```text
Using the provided reference image, transform the single casual product photo into a polished e-commerce TVC storyboard board for a {VIDEO_DURATION} ad in a {ASPECT_RATIO} vertical format, presented as a 9-panel grid. Keep the same blue-and-white ceramic ashtray as the product base, but restage it across cinematic advertising shots with warm premium lighting, shallow depth of field, and a refined lifestyle desktop environment. Add a dark storyboard layout with Chinese titles and timing for each panel. Include exactly 9 scenes: 1) environment-establishing wide shot with desk, books, window, and the product placed in context; 2) hero product medium shot on the table; 3) extreme close-up of the blue floral craftsmanship pattern; 4) use case showing a hand placing a cigarette into the ashtray with visible smoke; 5) top-down capacity display showing multiple cigarette butts inside; 6) cleaning scene under running water in a sink with a hand holding the product; 7) bottom-detail close-up showing the underside and anti-slip pads; 8) mood/lifestyle scene at night with the product on a desk, smoke rising, and ambient lamp light; 9) brand closing frame with the product as the hero plus Chinese marketing text. Add the overall header text “产品TVC分镜脚本(15秒 / 9:16竖屏 / 9宫格)” and a product subtitle naming it {PRODUCT_NAME}. Give each of the 9 panels a Chinese scene title and timestamp, plus small descriptive Chinese copy beneath each image in the style of a professional commercial shot list. Use premium, realistic commercial photography throughout, consistent product identity, elegant Chinese aesthetic, and a clean high-end storyboard presentation.
```

Source defaults: `VIDEO_DURATION` = 15-second; `ASPECT_RATIO` = 9:16; `PRODUCT_NAME` = 青花瓷烟灰缸

### Variations and adaptation

Adapt aspect ratio to the target platform (formats/organic-social.md). For series, generate slide or panel 1 first and reuse it as a style reference.

### Constraints and common failures

UI mockups and text overlays vary in accuracy; storyboards drift in product appearance across panels unless the product reference is repeated.

### Quality checks

One idea per frame; hook visible in the first second or slide; safe zones respected; product consistent across panels.
