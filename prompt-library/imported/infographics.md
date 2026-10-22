# Infographics and explainers (imported)

Imported 2026-10-07 for private personal use from SRC-21 (EvoLinkAI, CC0) and SRC-22 (YouMind OpenLab, CC BY 4.0). Prompt text is verbatim apart from normalised placeholders. Everything here is `source example`/untested until Phase 4.

## info-handwritten-3step-slide — Handwritten-style 3-step process slide

- **Purpose:** Three-step how-to or process slide.
- **Category:** infographics
- **Tags:** steps, process, how-to, handwritten
- **Mode:** generate
- **Model/tool:** Nano Banana Pro (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-22
- **Reuse:** SRC-22 CC BY 4.0 (YouMind OpenLab) - prompt text imported verbatim (placeholders normalised); attribute YouMind OpenLab; original creator rights not cleared; private personal use only.
- **Source title:** Handwritten Style 3-Step Process Slide
- **Source link:** https://github.com/YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill (dataset id 34456, category infographic-edu-visual)
- **Delivery format:** ig-feed-4x5

### Prompt

```text
[Input Data]
- Overall Title: {MAIN_TITLE}
- Step 1: Title "{STEP_1_TITLE}" / Period "{STEP_1_PERIOD}" / Description "{STEP_1_DESC}"
- Step 2: Title "{STEP_2_TITLE}" / Period "{STEP_2_PERIOD}" / Description "{STEP_2_DESC}"
- Step 3: Title "{STEP_3_TITLE}" / Period "{STEP_3_PERIOD}" / Description "{STEP_3_DESC}"
- Color Theme: {COLOR_THEME}

[Structure and Layout Specifications]
- Style: A clean and friendly 3-step flowchart illustration suitable for Japanese business slides, educational manuals, or internal documents. 16:9 landscape slide configuration.
- Background: Clean off-white or solid white background.
- Top Title:
  - Place "Figure 3" or a step badge in the upper left, and to its right, draw a large Japanese main title "{MAIN_TITLE}" in a bold, easy-to-read Gothic font. Place a small, clean abstract logo mark at the right edge.
- Step Card Arrangement:
  - Three beautiful rectangular cards arranged side-by-side. Placed in order from left to right, connected by thick arrows. Each card border is color-coded neatly according to the color theme ({COLOR_THEME}).
- Card 1 (Left) Interior:
  - Draw a circular badge "1" and the Japanese title "{STEP_1_TITLE}" prominently. Below that, a capsule label saying "{STEP_1_PERIOD}".
  - In the center, place an illustration of a Japanese woman with a gentle hand-drawn touch taking notes, and a window showing the sun.
  - At the bottom, place the Japanese description "{STEP_1_DESC}".
- Card 2 (Center) Interior:
  - Draw a circular badge "2" and the Japanese title "{STEP_2_TITLE}" prominently. Below that, a capsule label saying "{STEP_2_PERIOD}".
  - In the center, place an illustration of two Japanese women with a flashlight, night sky, and buildings.
  - At the bottom, place the Japanese description "{STEP_2_DESC}".
- Card 3 (Right) Interior:
  - Draw a circular badge "3" and the Japanese title "{STEP_3_TITLE}" prominently. Below that, a capsule label saying "{STEP_3_PERIOD}".
  - In the center, place an illustration of the night sky and crescent moon, and a Japanese woman smiling with a victory pose.
  - At the bottom, place the Japanese description "{STEP_3_DESC}".

[Quality and Font Specifications]
- Simple, clean 2D illustration, flat design, crisp clear line art.
- All text must be accurately drawn in readable Japanese fonts (Gothic) without spelling errors.
- Exclude all 3D effects, shadows, laptop mockup backgrounds, or camera tilt; display the flat diagram itself across the entire screen.

- Aspect Ratio: --ar 16:9
```

Source defaults: `MAIN_TITLE` = 3-Step Flowchart for Night Shift Introduction; `STEP_1_TITLE` = Day Shift Mastery; `COLOR_THEME` = green

### Variations and adaptation

Swap topic, panels and labels; keep the layout structure. Use the brand palette and named fonts. For health topics use only supplied, approved statements.

### Constraints and common failures

Dense text garbles; invented statistics are a risk; keep labels short and verify spelling.

### Quality checks

All facts supplied or approved; no fabricated numbers; labels spelled correctly; hierarchy readable at phone size.

## info-editorial-anatomy-poster — Editorial anatomy infographic poster

- **Purpose:** Labelled anatomy-style explainer poster.
- **Category:** infographics
- **Tags:** anatomy, labelled, explainer, poster
- **Mode:** generate
- **Model/tool:** GPT-Image-2 (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-21
- **Reuse:** SRC-21 CC0-1.0 - prompt text imported verbatim (placeholders normalised); original creator rights not cleared; private personal use only.
- **Source title:** Editorial Anatomy Infographic Poster
- **Source link:** https://x.com/iamaiistudio/status/2063202176344932732
- **Delivery format:** ig-feed-4x5

### Prompt

```text
prompt:

Ultra-clean editorial infographic poster (1080x1080 square), blending premium magazine design with lifestyle illustration and photography.

**HEADLINE:**
Bold, large sans-serif type centered at top: "HUMAN LIVER"

**MAIN IMAGE:**
High-detail 3D illustration of the human liver, showing the Right Lobe, Left Lobe, and Gallbladder. Color palette: terracotta, deep brownish-red, and soft coral tones. Background: clean, soft beige or off-white. Lighting: soft studio style.

**POSTER SECTIONS:**

* **Floating Fact Bubbles (top corners):**
    * "Weight: ~1.5 kg (Heaviest internal organ)"
    * "Regeneration: Can regrow from just 25%"
    * "Location: Upper Right Abdomen"
    * "Blood Flow: Filters 1.4 L/min"

* **Organ Labels (arrows pointing to anatomy):**
    * Right Lobe
    * Left Lobe
    * Gallbladder (greenish sac below)
    * Common Bile Duct
    * Hepatic Portal Vein

* **Key Functions (left column, small icons):**
    * **Detox:** Filters toxins from blood
    * **Bile:** Aids fat digestion
    * **Metabolism:** Processes carbs and protein
    * **Storage:** Holds glycogen, iron, vitamins

* **Highlights (right column, small icons):**
    * **Chemical Factory:** 500+ vital functions
    * **Immunity:** Fights blood-borne infections
    * **Clotting:** Makes blood-clotting proteins

* **Health Tips (bottom cards):**
    1. **Limit Alcohol** - Prevents cirrhosis
    2. **Stay Hydrated** - Flushes toxins
    3. **Balanced Diet** - Low sugar, high fiber
    4. **Vaccinate** - Hepatitis A & B protection
    5. **Exercise** - Burns fat and triglycerides

**STYLE:** Glassmorphism frosted-glass text boxes, soft drop shadows, medical accuracy meets high-end graphic design.
```

### Variations and adaptation

Swap topic, panels and labels; keep the layout structure. Use the brand palette and named fonts. For health topics use only supplied, approved statements.

### Constraints and common failures

Dense text garbles; invented statistics are a risk; keep labels short and verify spelling.

### Quality checks

All facts supplied or approved; no fabricated numbers; labels spelled correctly; hierarchy readable at phone size.

## info-medical-bento-poster — Medical-style infographic poster (bento grid)

- **Purpose:** Health or science explainer in bento layout (supplied claims only).
- **Category:** infographics
- **Tags:** health, bento, explainer, science
- **Mode:** generate
- **Model/tool:** Nano Banana Pro (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-22
- **Reuse:** SRC-22 CC BY 4.0 (YouMind OpenLab) - prompt text imported verbatim (placeholders normalised); attribute YouMind OpenLab; original creator rights not cleared; private personal use only.
- **Source title:** Medical Infographic Poster Prompt using Bento Grid Layout
- **Source link:** https://github.com/YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill (dataset id 4033, category social-media-post)
- **Delivery format:** ig-feed-4x5

### Prompt

```text
{
  "image_analysis": {
    "subject": "{DRUG_NAME} Science Infographic, 9:16",
    "style": "Modular Bento Grid Design / Minimalist Medical UI Design",
    "tone": "Professional, Clinical, Rigorous, Scientific, Trustworthy",
    "primary_colors": ["Clinical White", "Medical Blue", "Slate Grey", "Mint Green"]
  },
  "prompt_elements": {
    "subject_description": "A high-quality science infographic poster about {DRUG_NAME}.",
    "layout": "Bento box style modular grid layout, clean medical UI/UX interface design, divided into clear rectangular cards.",
    "visual_details": [
      "Top header with striking modern sans-serif font title 'Chinese Drug Name' and its chemical/generic name",
      "Center top features an ultra-realistic macro photograph of the [Drug Form/Packaging] (e.g., tablet, capsule, or bottle)",
      "A minimalist line drawing of the [Chemical Structure] in the corner",
      "Section 1: Analysis of active ingredients and pharmacology with circular and bar charts, data visualization",
      "Section 2: Indications with minimalist line icons",
      "Section 3: Dosage and Administration matrix with minimalist line icons ([Oral/Injection], [Frequency], [Dose])",
      "Section 4: Pharmacokinetics or onset time axis with line charts",
      "Section 5: Precautions grid with simple warning icons ([Drug Interactions], [Contraindications], [Side Effects]), drug interactions, contraindications, side effects require online search",
      "Section 6: Applicable population profile icons (e.g., suitability markers for elderly, children, pregnant women)",
      "Section 7: Drug storage guidelines with thermometer and humidity icons"
    ],
    "art_style": "Minimalist scientific visualization design, combining detailed medical illustrations with product photography, flat medical icons, Swiss-style typography.",
    "lighting": "Bright laboratory shadowless lighting, clean and clear, emphasizing sterility and clarity.",
    "color_palette": "Monochromatic clinical white or light grey background, translucent frosted glass cards, dark grey and navy blue text, accented with medical blue or cyan to highlight key points."
  },
  "negative_prompt": "Clutter, warm tones, vintage style, handwriting, low resolution, blur, distorted text, noise, dark background, unsanitary, oversaturated, watermark, food texture"
}
```

Source defaults: `DRUG_NAME` = Oseltamivir Capsule

### Variations and adaptation

Swap topic, panels and labels; keep the layout structure. Use the brand palette and named fonts. For health topics use only supplied, approved statements.

### Constraints and common failures

Dense text garbles; invented statistics are a risk; keep labels short and verify spelling.

### Quality checks

All facts supplied or approved; no fabricated numbers; labels spelled correctly; hierarchy readable at phone size.

## info-viral-food-poster — Viral food infographic poster

- **Purpose:** Food explainer poster with ingredient and step callouts.
- **Category:** infographics
- **Tags:** food, infographic, poster, steps
- **Mode:** generate
- **Model/tool:** GPT-Image-2 (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-21
- **Reuse:** SRC-21 CC0-1.0 - prompt text imported verbatim (placeholders normalised); original creator rights not cleared; private personal use only.
- **Source title:** Viral Food Infographic Poster
- **Source link:** https://twitter.com/amynys/status/2056779657987387784
- **Delivery format:** ig-feed-4x5

### Prompt

```text
Create a cinematic viral-style food poster for “Prediabetic Friendly Strawberry Cheesecake Overnight Oats” in a clean modern infographic aesthetic inspired by trendy TikTok and Pinterest recipe posters.

The poster should feature a large realistic mason jar filled with creamy strawberry cheesecake overnight oats layered with visible chia seeds, sliced strawberries around the inside glass, a thick cheesecake yogurt layer on top, fresh strawberries, and crushed walnuts. The oats should look ultra creamy, indulgent, healthy, and photorealistic with soft natural lighting and shallow depth of field.
Use a soft pink, cream, and white color palette with bold typography.
The design should feel premium, feminine, modern, healthy, and social-media viral.

Main headline in large stylish text:
“STRAWBERRY Cheesecake OVERNIGHT OATS”
Add a pink label at the top saying:
“PREDIABETIC FRIENDLY”

Include stylish infographic sections with rounded boxes and cute minimal icons for:
INGREDIENTS
½ cup rolled oats
¾ cup unsweetened almond milk
⅓ cup plain Greek yogurt
1 tbsp chia seeds
1 tbsp ground flaxseed
½ scoop vanilla protein powder
½ tsp vanilla extract
Dash of cinnamon
Tiny pinch sea salt
3–4 chopped strawberries
Optional monk fruit sweetener or stevia

CHEESECAKE LAYER
Greek yogurt
Vanilla
Lemon juice
TOPPINGS
Crushed walnuts
Strawberries
Cinnamon

HOW TO MAKE
Mix ingredients
Fold in strawberries
Refrigerate overnight
Add cheesecake layer and toppings

Add aesthetic handwritten doodles, hearts, arrows, sparkles, and notes like:
“Creamy, delicious & blood sugar friendly!”
“High protein • High fiber • Low sugar”
At the bottom add a highlighted tip banner saying:
“VIRAL TEXTURE TIP: Blend the mixture before refrigerating for ultra-creamy cheesecake consistency!”

Style details:
Editorial food photography
Pinterest/TikTok infographic vibe
Clean magazine-style layout
Hyperrealistic food texture
Bright airy background
Soft shadows
Elegant typography hierarchy
Social-media-ready vertical poster
Ultra detailed
4K quality
Aspect ratio 4:5 or 9:16
```

### Variations and adaptation

Swap topic, panels and labels; keep the layout structure. Use the brand palette and named fonts. For health topics use only supplied, approved statements.

### Constraints and common failures

Dense text garbles; invented statistics are a risk; keep labels short and verify spelling.

### Quality checks

All facts supplied or approved; no fabricated numbers; labels spelled correctly; hierarchy readable at phone size.

## info-exploded-food — Hyper-realistic exploded food infographic

- **Purpose:** Exploded food layers with floating components and labels.
- **Category:** infographics
- **Tags:** exploded, food, layers, labels
- **Mode:** generate
- **Model/tool:** Nano Banana Pro (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-22
- **Reuse:** SRC-22 CC BY 4.0 (YouMind OpenLab) - prompt text imported verbatim (placeholders normalised); attribute YouMind OpenLab; original creator rights not cleared; private personal use only.
- **Source title:** Hyper-Realistic Exploded Food Infographic Prompt
- **Source link:** https://github.com/YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill (dataset id 6255, category product-marketing)
- **Delivery format:** ig-feed-4x5

### Prompt

```text
{
  "global_settings": {
    "resolution": "8K ultra high definition",
    "aspect_ratio": "3:4",
    "camera_style": "studio food photography with cinematic lighting",
    "depth_of_field": "shallow depth of field, sharp subject, soft background",
    "lighting": "soft directional key light, subtle rim light, controlled highlights",
    "style": "hyper-realistic food illustration with editorial infographic overlays",
    "composition_rules": [
      "no zoom",
      "no crop",
      "center-weighted vertical composition",
      "floating elements frozen in motion"
    ],
    "text_design": {
      "ingredient_name_color": "metallic gold",
      "ingredient_description_color": "pure white",
      "font_style": "elegant serif for titles, clean sans-serif for descriptions",
      "indicator_lines": "long, thin, smooth golden lines with rounded corners"
    }
  },

  "module_1_image_1_style": {
    "scene_description": "A vertical stack of assorted cake slices floating above a white ceramic plate against a soft pink gradient background.",
    "background": {
      "color": "{BACKGROUND_COLOR}",
      "texture": "smooth gradient",
      "lighting": "even, studio-lit, no harsh shadows"
    },
    "main_subjects": [
      "multiple layered sponge cake slices",
      "white whipped cream layers",
      "raspberry cream layer",
      "chocolate cream topping"
    ],
    "visible_ingredients": [
      "vanilla sponge cake",
      "whipped cream",
      "raspberries",
      "blueberries",
      "strawberries",
      "macarons (vanilla and chocolate)",
      "chocolate bar pieces",
      "mint leaves",
      "small nut fragments"
    ],
    "motion_elements": [
      "floating fruits",
      "floating macarons",
      "crumbs suspended in air"
    ],
    "text_labels": [
      "Vanilla Cake – soft, fluffy sponge cake layered with white cream filling",
      "Macaron – creamy filling between almond meringue shells",
      "Raspberries – juicy, fresh raspberries",
      "Chocolate Bar – chunks of smooth milk chocolate",
      "Raspberry Cream – soft sponge cake layered with creamy, fruity raspberry cream"
    ]
  },

  "module_2_image_2_style": {
    "scene_description": "Rolled Syrian dessert presented vertically with syrup pouring from above, placed in a warm, rustic kitchen environment.",
    "background": {
      "environment": "traditional kitchen",
      "elements": [
        "warm lantern light",
        "wooden surfaces",
        "brass and copper utensils"
      ],
      "lighting": "warm ambient lighting with soft highlights"
    },
    "main_subjects": [
      "rolled white dessert dough",
      "cream filling spilling out",
      "golden syrup stream"
    ],
    "visible_ingredients": [
      "white cheese dough",
      "cream filling",
      "pistachios",
      "sugar syrup"
    ],
    "motion_elements": [
      "syrup dripping vertically",
      "pistachio crumbs suspended in air"
    ]
  }
}
```

Source defaults: `BACKGROUND_COLOR` = soft pastel pink

### Variations and adaptation

Swap topic, panels and labels; keep the layout structure. Use the brand palette and named fonts. For health topics use only supplied, approved statements.

### Constraints and common failures

Dense text garbles; invented statistics are a risk; keep labels short and verify spelling.

### Quality checks

All facts supplied or approved; no fabricated numbers; labels spelled correctly; hierarchy readable at phone size.

## info-ingredient-flatlay — Cookbook ingredient flat lay infographic

- **Purpose:** Flat-lay ingredient infographic with captions.
- **Category:** infographics
- **Tags:** flat lay, ingredients, captions, recipe
- **Mode:** generate
- **Model/tool:** Nano Banana Pro (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-22
- **Reuse:** SRC-22 CC BY 4.0 (YouMind OpenLab) - prompt text imported verbatim (placeholders normalised); attribute YouMind OpenLab; original creator rights not cleared; private personal use only.
- **Source title:** Luxury Cookbook Ingredient Flat Lay Infographic
- **Source link:** https://github.com/YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill (dataset id 10647, category product-marketing)
- **Delivery format:** ig-feed-4x5

### Prompt

```text
Top-down flat lay of all {DISH} ingredients arranged in a perfect radial burst pattern, each in its own pie-slice section radiating from the center. Sections divided by thin hand-drawn lines. Final plated {DISH_2} in {VESSEL} sits at the center, beautifully presented and steaming. Each ingredient labeled at outer edge in uppercase serif with small italic descriptor below — "[INGREDIENT] / [quantity, preparation, origin]". Surface: {COLOR} kraft paper, subtly aged. Overhead soft box lighting, zero harsh shadows, slight vignette pulling focus to center. Dish name curved around center circle like an engraving: "[DISH NAME]". Subtitle: "[TAGLINE]". Luxury cookbook editorial meets heritage restaurant poster. 4K overhead, tack sharp, warm film grain.
```

Source defaults: `DISH` = DISH; `DISH_2` = DISH; `VESSEL` = VESSEL; `COLOR` = COLOR

### Variations and adaptation

Swap topic, panels and labels; keep the layout structure. Use the brand palette and named fonts. For health topics use only supplied, approved statements.

### Constraints and common failures

Dense text garbles; invented statistics are a risk; keep labels short and verify spelling.

### Quality checks

All facts supplied or approved; no fabricated numbers; labels spelled correctly; hierarchy readable at phone size.
