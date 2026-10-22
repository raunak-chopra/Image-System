# E-commerce and Amazon graphics (imported)

Imported 2026-10-07 for private personal use from SRC-21 (EvoLinkAI, CC0) and SRC-22 (YouMind OpenLab, CC BY 4.0). Prompt text is verbatim apart from normalised placeholders. Everything here is `source example`/untested until Phase 4.

## ecom-earbuds-infographic-slide — Product e-commerce infographic slide (earbuds)

- **Purpose:** Gallery slide: product hero with labelled feature callouts.
- **Category:** e-commerce listing graphics
- **Tags:** infographic, callouts, gallery slide, features
- **Mode:** generate
- **Model/tool:** GPT-Image-2 (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-21
- **Reuse:** SRC-21 CC0-1.0 - prompt text imported verbatim (placeholders normalised); original creator rights not cleared; private personal use only.
- **Source title:** E-commerce Main Image - Earbuds E-commerce Infographic
- **Source link:** https://x.com/SPEEDAI07/status/2047981795552153860
- **Delivery format:** amazon-gallery

### Prompt

```text
High-impact e-commerce infographic for "{PRODUCT}" wireless earbuds.
Foreground: An extreme close-up of a hand holding an open glossy white wireless earbud charging case toward the camera. Inside the case are two sleek white earbuds with black speaker accents. A small glowing green LED indicator is visible on the front of the case. The hand and case have slight macro-lens depth blur for realism.

Mid-ground: A {MODEL} with tan skin, brown eyes, and dark hair tied in a messy bun. She has natural makeup with a dewy glow. She is wearing a plain {CLOTHING} (no logos). One white earbud is in her ear. She is looking directly at the camera with a subtle, confident expression.

Background: Clean soft gray gradient studio backdrop with shallow depth of field. Diagonal rainbow prism lens flares and soft light leaks across the scene. Several blurred floating white earbuds in the background for depth and motion.

Lighting: Soft professional studio lighting with glossy highlights on the product, subtle rim light on the model, high dynamic range.

Typography (modern sans-serif, white):

Top center (behind model): Large bold text “AIRPODS”

Top right: “Apple Pods Pro 3”

Mid-left: “Premium sound and noise cancellation”

Mid-right: Large bold “30” with “hours of battery life”

Bottom-right: Large bold “1” with “year warranty”

Style: Ultra-realistic, commercial product photography, 8k resolution, sharp focus on product case, shallow depth of field, vibrant yet clean color palette, premium advertising aesthetic.
```

Source defaults: `PRODUCT` = Apple Pods Pro 3; `MODEL` = confident young woman; `CLOTHING` = yellow athletic t-shirt

### Variations and adaptation

Replace the example product with the real product reference. Convert source callout text to approved claim copy from `claims.md`, or use blank label boxes and composite exact copy downstream. Adapt layout to the slide job in formats/amazon.md.

### Constraints and common failures

Exact text, numbers and label copy often fail; fabricated specs and badges are risks. Keep callouts to 1-3 words per label and test legibility at 300 px.

### Quality checks

Every claim is in the claim registry; text readable at thumbnail size; one message per slide; format check passes (`post/check.py`).

## ecom-headphone-infographic-slide — E-commerce infographic slide (headphones)

- **Purpose:** Gallery slide with feature breakdown and product detail views.
- **Category:** e-commerce listing graphics
- **Tags:** infographic, features, gallery slide
- **Mode:** generate
- **Model/tool:** GPT-Image-2 (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-21
- **Reuse:** SRC-21 CC0-1.0 - prompt text imported verbatim (placeholders normalised); original creator rights not cleared; private personal use only.
- **Source title:** Apple Pods Pro 3 Headphone E-Commerce Infographic
- **Source link:** https://x.com/meng_dagg695/status/2047935217231663186
- **Delivery format:** amazon-gallery

### Prompt

```text
High-impact e-commerce infographic for "Apple Pods Pro 3"
premium wireless over-ear headphones.

FOREGROUND - PRODUCT HERO SHOT
Extreme close-up of a hand holding a sleek,
matte-white premium over-ear headphone toward the camera
at a slight angle. The headphone features:
- Glossy white ear cushions with soft memory foam padding
- Brushed aluminum silver headband with subtle Apple Pods
  Pro 3 embossed branding
- Black mesh speaker grille visible on the ear cup face
- A tiny glowing green LED status indicator on the
  right ear cup edge
- Subtle touch-control icons etched on the outer cup surface

Macro-lens shallow depth of field — hand and headphone
slightly blurred at edges to create cinematic depth.
Product remains razor-sharp in center frame.

CENTRAL SUBJECT — MODEL
In the mid-ground: a smiling young woman with freckles
and wavy pastel-pink hair. She wears:
- A vibrant lime-green knit beanie
- A psychedelic black and white-striped long-sleeve shirt
- The white over-ear headphones resting stylishly
  around her neck (not on ears) — one hand casually
  touching the ear cup

Expression: relaxed, confident, joyful.
She is glancing slightly off-camera with a natural smile.

BACKGROUND & ATMOSPHERE
Clean soft-focus studio backdrop — light gray gradient
fading to warm white at center.

Atmospheric overlays:
- Diagonal rainbow prism lens flares cutting across
  upper-left to lower-right
- Soft pastel light leaks in pink and yellow at corners
- 4–5 blurred white over-ear headphones floating
  artistically in the background at various depths
  and rotation angles
- Subtle bokeh circles from background studio lights

Lighting: Soft professional three-point studio lighting.
Key light from upper-left, fill light right side.
Rim light behind model for separation.
Glossy highlights on headphone surfaces catching light naturally.

TYPOGRAPHY & LAYOUT — Sans-Serif, Clean white
TOP CENTER (behind model, large background text):
→ Massive bold oversized text: "HEADPHONES"
   Semi-transparent white, spanning full width behind subject

TOP RIGHT CORNER:
→ Bold clean text: "Apple Pods Pro 3"
   Subtitle smaller text: "Over-Ear Wireless"

MID LEFT:
→ Icon: small sound wave symbol
→ Bold text: "Premium Sound"
→ Sub-text: "Active Noise Cancellation + Transparency Mode"

MID RIGHT:
→ Extra-large bold numeral: "40"
→ Smaller text below: "hours of battery life"

LOWER LEFT:
→ Extra-large bold numeral: "0"
   with "to" beside it → then bold "100%"
→ Sub-text: "Fast charge — 10 min = 3hrs playback"

BOTTOM RIGHT:
→ Extra-large bold numeral: "1"
→ Sub-text: "Year Warranty Included"

BOTTOM CENTER (fine print style):
→ Small elegant text:
   "Bluetooth 5.4  |  Hi-Res Audio Certified
    |  Foldable Design  |  USB-C Charging"

TECHNICAL SPECS
Resolution: 8K ultra-sharp
Style: Commercial product photography meets
       editorial fashion advertising
Color Palette: White, lime green, pastel pink,
               rainbow prism accents
Focus: Tack-sharp on headphone product —
       shallow DOF on everything else
Lens: 85mm macro, slight low angle
Render Quality: Hyperrealistic, clean ad aesthetic,
                vibrant yet professional color grading
```

### Variations and adaptation

Replace the example product with the real product reference. Convert source callout text to approved claim copy from `claims.md`, or use blank label boxes and composite exact copy downstream. Adapt layout to the slide job in formats/amazon.md.

### Constraints and common failures

Exact text, numbers and label copy often fail; fabricated specs and badges are risks. Keep callouts to 1-3 words per label and test legibility at 300 px.

### Quality checks

Every claim is in the claim registry; text readable at thumbnail size; one message per slide; format check passes (`post/check.py`).

## ecom-mobile-detail-page — Mobile detail page layout (office chair)

- **Purpose:** Long mobile product detail page with sections.
- **Category:** e-commerce listing graphics
- **Tags:** detail page, mobile, long form, sections
- **Mode:** generate
- **Model/tool:** Nano Banana Pro (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-22
- **Reuse:** SRC-22 CC BY 4.0 (YouMind OpenLab) - prompt text imported verbatim (placeholders normalised); attribute YouMind OpenLab; original creator rights not cleared; private personal use only.
- **Source title:** Ergonomic Office Chair E-commerce Mobile Detail Page
- **Source link:** https://github.com/YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill (dataset id 30563, category product-marketing)
- **Delivery format:** web-hero

### Prompt

```text
A single, continuous, and complete mobile e-commerce detail page for an ergonomic office chair, with an aspect ratio of {ASPECT_RATIO}. The product is the "{PRODUCT_NAME}" concept model, featuring a dark graphite grey mesh back, black frame, silver-grey five-star base, visible headrest, armrests, seat cushion, and lumbar support, maintaining structural consistency across all perspectives. The overall design uses a vertical grid system combining architectural blueprints with modern office spaces, featuring {COLOR_SCHEME} annotations, clear narrow sans-serif, and monospace parameter fonts. The first screen shows the identity of the product with a 3/4 angle view; followed by front, side, back, and top-down auxiliary angles; using human sitting postures and desk relationships to show scale without inferring specific height suitability ranges; labeling headrest, backrest, armrests, seat cushion, lumbar support, and chair feet by outline without providing internal exploded structures; showcasing office, reading, and brief rest scenarios; the evidence section only shows structural descriptions and sources provided by the user, with missing items marked "information to be confirmed"; the parameter section includes full chair dimensions, seat height range, load capacity, materials, and adjustment items, with unknown values not guessed; the packaging section shows the chair body, confirmed accessories, installation instructions, and care information, with missing accessories marked "information to be confirmed"; and ends with a summary of confirmed structures and a "view dimensions and installation instructions" note. Every parameter unit, dimension line, and information card must be fully filled out. Fictional ergonomic certifications, load-bearing values, adjustment levels, health improvements, patents, or test results are prohibited.
```

Source defaults: `ASPECT_RATIO` = 3:7; `PRODUCT_NAME` = Axis M3 Ergonomic Chair; `COLOR_SCHEME` = paper white, graphite grey, steel blue, and subtle orange

### Variations and adaptation

Replace the example product with the real product reference. Convert source callout text to approved claim copy from `claims.md`, or use blank label boxes and composite exact copy downstream. Adapt layout to the slide job in formats/amazon.md.

### Constraints and common failures

Exact text, numbers and label copy often fail; fabricated specs and badges are risks. Keep callouts to 1-3 words per label and test legibility at 300 px.

### Quality checks

Every claim is in the claim registry; text readable at thumbnail size; one message per slide; format check passes (`post/check.py`).

## ecom-ingredient-callout-ad — Ingredient callout ad

- **Purpose:** Hero product surrounded by labelled ingredients.
- **Category:** e-commerce listing graphics
- **Tags:** ingredients, callout, labels, food
- **Mode:** generate
- **Model/tool:** GPT-Image-2 (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-21
- **Reuse:** SRC-21 CC0-1.0 - prompt text imported verbatim (placeholders normalised); original creator rights not cleared; private personal use only.
- **Source title:** Ingredient Callout Ice Cream Ad
- **Source link:** https://x.com/iamaiistudio/status/2067465624683700642
- **Delivery format:** amazon-gallery

### Prompt

```text
{
  "resolution": "8K",
  "aspect_ratio": "3:4",
  "image_type": "photorealistic commercial product render",
  "scene_description": {
    "main_subject": "A vertically centered ice cream bar mounted on a wooden stick",
    "orientation": "upright, front-facing, slightly elevated perspective",
    "composition": "single product centered with surrounding ingredient labels and curved arrows"
  },
  "background": {
    "color": "warm golden-yellow gradient",
    "texture": "smooth, matte, evenly illuminated",
    "lighting_falloff": "subtle vignette, darker towards edges"
  },
  "lighting": {
    "type": "studio lighting",
    "key_light": "soft frontal light emphasizing chocolate gloss",
    "fill_light": "balanced fill preserving texture detail",
    "specular_highlights": "visible on melted chocolate coating",
    "shadows": "soft shadow beneath the stick"
  },
  "ice_cream_bar": {
    "shape": "rounded rectangular bar",
    "surface": "smooth with visible embedded inclusions",
    "layers": [
      {
        "layer_position": "top coating",
        "material": "milk chocolate",
        "state": "melted and dripping",
        "texture": "glossy, thick, fluid",
        "details": [
          "multiple chocolate drips flowing downward",
          "irregular almond pieces embedded in coating",
          "rounded drip edges pulled by gravity"
        ]
      },
      {
        "layer_position": "left interior",
        "material": "chocolate ice cream",
        "texture": "dense, creamy",
        "details": [
          "small dark brownie chunks evenly dispersed",
          "matte finish contrasting outer chocolate"
        ]
      },
      {
        "layer_position": "right interior",
        "material": "vanilla ice cream",
        "texture": "smooth and creamy",
        "details": [
          "visible caramel pieces",
          "light beige caramel chunks with rounded edges"
        ]
      }
    ]
  },
  "stick": {
    "material": "light natural wood",
    "texture": "smooth with subtle grain",
    "shape": "rounded edges, flat profile",
    "visibility": "fully visible below ice cream bar"
  },
  "ingredient_callouts": {
    "style": {
      "arrows": "curved, thick, dark brown",
      "text_color": "dark brown",
      "font_style": "clean sans-serif",
      "layout": "balanced around product"
    },
    "labels": [
      {
        "text": "Chocolate with almonds",
        "position": "top-left",
        "visual_aid": ["whole almonds", "small chocolate squares"]
      },
      {
        "text": "Chocolate ice cream with brownies",
        "position": "left-middle",
        "visual_aid": ["brownie chunks"]
      },
      {
        "text": "Chocolate ice cream with brownies",
        "position": "right-middle",
        "visual_aid": ["brownie chunks"]
      },
      {
        "text": "Vanilla ice cream with caramel pieces",
        "position": "bottom-right",
        "visual_aid": ["caramel cubes", "white vanilla pieces"]
      }
    ]
  },
  "color_palette": {
    "primary_colors": ["milk chocolate brown", "golden yellow", "cream white"],
    "secondary_colors": ["dark brownie brown", "light caramel orange", "almond beige"]
  },
  "render_quality": {
    "sharpness": "extreme micro-detail visibility",
    "texture_fidelity": "high realism",
    "noise": "none",
    "depth_of_field": "moderate, product fully in focus"
  },
  "style_tags": [
    "luxury dessert advertising",
    "hyper-realistic food photography",
    "commercial product render",
    "clean studio composition"
  ]
}
```

### Variations and adaptation

Replace the example product with the real product reference. Convert source callout text to approved claim copy from `claims.md`, or use blank label boxes and composite exact copy downstream. Adapt layout to the slide job in formats/amazon.md.

### Constraints and common failures

Exact text, numbers and label copy often fail; fabricated specs and badges are risks. Keep callouts to 1-3 words per label and test legibility at 300 px.

### Quality checks

Every claim is in the claim registry; text readable at thumbnail size; one message per slide; format check passes (`post/check.py`).

## ecom-grain-powder-ad-board — Product ad board (grain powder)

- **Purpose:** Packaged-food ad board with product, ingredients and claims zones.
- **Category:** e-commerce listing graphics
- **Tags:** ad board, powder, packaged food, claims zone
- **Mode:** generate
- **Model/tool:** GPT-Image-2 (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-21
- **Reuse:** SRC-21 CC0-1.0 - prompt text imported verbatim (placeholders normalised); original creator rights not cleared; private personal use only.
- **Source title:** E-commerce Main Image - Premium Grain Powder Ad Board
- **Source link:** https://x.com/WooGabriel76263/status/2047988112094101770
- **Delivery format:** amazon-gallery

### Prompt

```text
{"type":"Chinese e-commerce product marketing board","product":{"category":"instant grain powder drink","brand":"五谷磨房","name":"核桃芝麻黑豆粉","packaging":"matte black retail box with gold Chinese typography and a large swirling bowl graphic on the front, plus individual black sachets inside","net weight":"320g (32g×10袋)"},"style":{"overall":"premium dark food advertising layout","color palette":["black","deep brown","warm gold","beige","walnut brown"],"lighting":"dramatic studio lighting with glossy highlights and warm rim light","mood":"luxurious, nourishing, healthy, appetizing"},"layout":{"format":"single tall composite board divided into 5 major sections plus a bottom storyboard table","sections":[{"title":"主图/Main image","position":"top-left","count":8,"labels":["五谷磨房","核桃芝麻黑豆粉","32g×10袋 独立包装","五黑谷物","香浓醇厚","独立小袋","即冲即饮","product box and drink cup"]},{"title":"详情页/Details page","position":"top-right","count":5,"labels":["黑芝麻","黑豆","黑米","核桃","谷物粉"]},{"title":"香浓细腻 顺滑好喝","position":"mid-right","count":4,"labels":["一冲即饮 营养美味","粉质细腻 Fine powder","浓香醇厚 Rich & Smooth","营养代餐 Nutritious"]},{"title":"冲泡方式 HOW TO MAKE","position":"mid-left lower","count":3,"labels":["1 倒入一袋粉(32g)","2 加入200ml 热水或牛奶","3 搅拌均匀 即可享用"]},{"title":"一杯好谷物 轻松好生活","position":"lower-left","count":4,"labels":["元气早餐","办公室下午茶","健身代餐","睡前暖饮"]},{"title":"独立小袋 随身携带","position":"lower-right","count":3,"labels":["独立小袋 便携卫生","锁住新鲜 防潮防氧化","1袋1杯 精准份量"]},{"title":"视频推广广告 seedance 2.0 视频提示词 + 分镜头脚本","position":"bottom full width","count":7,"labels":["镜头1 开场-产品展示","镜头2 食材特写","镜头3 倒粉入杯","镜头4 冲泡搅拌","镜头5 饮用场景","镜头6 产品卖点","镜头7 结尾口号"]}],"grid":"top area split into left main image and right detail page; middle area split into preparation guide and feature panel; lower area split into lifestyle scenarios and sachet carry section; bottom is a full-width tabular storyboard"},"scene_elements":{"ingredients":[{"name":"black sesame","form":"small black seeds in a round bowl"},{"name":"black beans","form":"glossy whole beans in a round bowl"},{"name":"black rice","form":"dark long grains in a round bowl"},{"name":"walnuts","form":"walnut halves in a round bowl"},{"name":"grain powder","form":"light beige powder in a round bowl"}],"serving":{"drink":"thick gray-brown sesame walnut bean beverage with smooth surface swirl","cup":"transparent glass cup with handle","utensil":"metal spoon stirring or resting inside drink"},"supporting props":["walnuts on table","scattered black beans","grain stalks or wheat stems","dark tabletop","ingredient bowls","open package showing 5 visible sachets"]},"text_treatment":{"headline_font":"bold elegant Chinese display type in metallic gold","body_font":"clean sans serif Chinese with occasional English subtitles","accent":"thin gold divider lines and circular ingredient frames"},"camera_and_composition":{"product_shots":"front-facing hero box, angled sachet display box, close-up beverage macro","food_photography":"high-detail commercial food styling, shallow depth of field, crisp texture emphasis","aspect_ratio":"portrait, approximately 9:16"},"quality":"ultra-detailed commercial design mockup, polished e-commerce key visual plus details page plus ad storyboard, 4K"}
```

### Variations and adaptation

Replace the example product with the real product reference. Convert source callout text to approved claim copy from `claims.md`, or use blank label boxes and composite exact copy downstream. Adapt layout to the slide job in formats/amazon.md.

### Constraints and common failures

Exact text, numbers and label copy often fail; fabricated specs and badges are risks. Keep callouts to 1-3 words per label and test legibility at 300 px.

### Quality checks

Every claim is in the claim registry; text readable at thumbnail size; one message per slide; format check passes (`post/check.py`).

## ecom-spec-infographic-sheet — Technical infographic: product specification sheet

- **Purpose:** Spec-sheet infographic for technical products.
- **Category:** e-commerce listing graphics
- **Tags:** specs, technical, infographic, sheet
- **Mode:** generate
- **Model/tool:** Nano Banana Pro (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-22
- **Reuse:** SRC-22 CC BY 4.0 (YouMind OpenLab) - prompt text imported verbatim (placeholders normalised); attribute YouMind OpenLab; original creator rights not cleared; private personal use only.
- **Source title:** Technical Infographic Sheet Product Specification Template
- **Source link:** https://github.com/YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill (dataset id 11483, category product-marketing)
- **Delivery format:** amazon-gallery

### Prompt

```text
Create a branded technical infographic of a [{PRODUCT_NAME}], fully matching the visual density, structure, and engineering-style presentation of the technical food schematics of [PRODUCT NAME]with all text written in English
CRITICAL LANGUAGE RULE: Every visible word on the image must be in English.
Visual Concept
A realistic photograph or photorealistic render of the snack combined with dense technical annotation overlays, exactly like an engineering or food-packaging blueprint. Pure white studio background.
Required Technical Elements (ALL LABELED IN English)
• Labels for key product components • Internal cross-section showing structure, layers, or filling • Measurements: height, width, volume, weight (metric system) • Packaging and product material callouts with composition and quantities • Arrows indicating function, pressure, sealing, and structural integrity • Simple schematic or sectional diagram of mechanics / form / packaging • Sustainability and environmental callouts (recycling, materials, waste reduction)
Title Placement
Product name in English, bold font, inside a hand-drawn technical annotation frame (as in engineering blueprints), positioned in the upper corner.
Style & Layout
• Very high information density • Annotations feel like an engineering / architectural sketch • Black lines — 70–80% of all graphics • Accent [{BRAND_COLOR}] — 20–30% (arrows, key zones, headings) • The realistic product remains fully readable • Educational, food-engineering, industrial-premium aesthetic • Small brand logo in the corner (in English)
Visual Style
Minimal technical illustration aesthetic: black linework over realistic imagery, precise, highly detailed, slightly hand-drawn, like professional technical manuals.
Color Palette
White background Black text and linework [BRAND COLOR] used only for accents
Output
9:16 Vertical portrait, 8K, highly detailed,  Ultra-crisp image Social-feed optimized No watermark
```

Source defaults: `PRODUCT_NAME` = PRODUCT NAME; `BRAND_COLOR` = BRAND COLOR

### Variations and adaptation

Replace the example product with the real product reference. Convert source callout text to approved claim copy from `claims.md`, or use blank label boxes and composite exact copy downstream. Adapt layout to the slide job in formats/amazon.md.

### Constraints and common failures

Exact text, numbers and label copy often fail; fabricated specs and badges are risks. Keep callouts to 1-3 words per label and test legibility at 300 px.

### Quality checks

Every claim is in the claim registry; text readable at thumbnail size; one message per slide; format check passes (`post/check.py`).

## ecom-technical-schematic-beverage — Technical infographic schematic (product/beverage)

- **Purpose:** Schematic-style breakdown of a product or beverage.
- **Category:** e-commerce listing graphics
- **Tags:** schematic, technical, beverage, breakdown
- **Mode:** generate
- **Model/tool:** Nano Banana Pro (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-22
- **Reuse:** SRC-22 CC BY 4.0 (YouMind OpenLab) - prompt text imported verbatim (placeholders normalised); attribute YouMind OpenLab; original creator rights not cleared; private personal use only.
- **Source title:** Technical Infographic Schematic for a Product/Beverage
- **Source link:** https://github.com/YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill (dataset id 11547, category product-marketing)
- **Delivery format:** amazon-gallery

### Prompt

```text
Create a branded technical infographic of a {PRODUCT_NAME}, fully matching the visual density, structure, and engineering-style presentation of the technical food schematics of {PRODUCT_NAME_2} with all text written in English
CRITICAL LANGUAGE RULE: Every visible word on the image must be in English.
Visual Concept
A realistic photograph or photorealistic render of the snack combined with dense technical annotation overlays, exactly like an engineering or food-packaging blueprint. Pure white studio background.
Required Technical Elements (ALL LABELED IN English)
• Labels for key product components • Internal cross-section showing structure, layers, or filling • Measurements: height, width, volume, weight (metric system) • Packaging and product material callouts with composition and quantities • Arrows indicating function, pressure, sealing, and structural integrity • Simple schematic or sectional diagram of mechanics / form / packaging • Sustainability and environmental callouts (recycling, materials, waste reduction)
Title Placement
Product name in English, bold font, inside a hand-drawn technical annotation frame (as in engineering blueprints), positioned in the upper corner.
Style & Layout
• Very high information density • Annotations feel like an engineering / architectural sketch • Black lines — 70–80% of all graphics • Accent {BRAND_COLOR} — 20–30% (arrows, key zones, headings) • The realistic product remains fully readable • Educational, food-engineering, industrial-premium aesthetic • Small brand logo in the corner (in English)
Visual Style
Minimal technical illustration aesthetic: black linework over realistic imagery, precise, highly detailed, slightly hand-drawn, like professional technical manuals.
Color Palette
White background Black text and linework {BRAND_COLOR_2} used only for accents
Output
9:16 Vertical portrait, 8K, highly detailed,  Ultra-crisp image Social-feed optimized No watermark
```

Source defaults: `PRODUCT_NAME` = PRODUCT NAME; `PRODUCT_NAME_2` = PRODUCT NAME; `BRAND_COLOR` = BRAND COLOR; `BRAND_COLOR_2` = BRAND COLOR

### Variations and adaptation

Replace the example product with the real product reference. Convert source callout text to approved claim copy from `claims.md`, or use blank label boxes and composite exact copy downstream. Adapt layout to the slide job in formats/amazon.md.

### Constraints and common failures

Exact text, numbers and label copy often fail; fabricated specs and badges are risks. Keep callouts to 1-3 words per label and test legibility at 300 px.

### Quality checks

Every claim is in the claim registry; text readable at thumbnail size; one message per slide; format check passes (`post/check.py`).

## ecom-exploded-ingredient-stack — Exploded ingredient stack diagram

- **Purpose:** Exploded-layer diagram showing what is inside a product.
- **Category:** e-commerce listing graphics
- **Tags:** exploded, ingredients, layers, diagram
- **Mode:** generate
- **Model/tool:** Nano Banana Pro (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-22
- **Reuse:** SRC-22 CC BY 4.0 (YouMind OpenLab) - prompt text imported verbatim (placeholders normalised); attribute YouMind OpenLab; original creator rights not cleared; private personal use only.
- **Source title:** Hyperrealistic Exploded Ingredient Stack Diagram
- **Source link:** https://github.com/YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill (dataset id 10505, category product-marketing)
- **Delivery format:** amazon-gallery

### Prompt

```text
Hyperrealistic exploded {DISH} stack, each ingredient layer floating in perfect mid-air suspension with equal spacing, shot straight-on at eye level against a {COLOR} background.  Each ingredient layer is clearly separated with soft drop shadows beneath. Ingredients are hyperdetailed — visible texture, sheen, moisture, and depth. Micro steam wisps rise from hot elements. Sauce and cheese frozen mid-drip, ultra sharp.  LAYERS (bottom to top): {LAYER_1} → {LAYER_2} → {LAYER_3} → {LAYER_4} → {LAYER_5} → {LAYER_6} → {LAYER_7}  Each ingredient has a clean horizontal label line extending to the right with a small dot at the ingredient. Label text in uppercase sans-serif: "[INGREDIENT NAME]" with a small italic descriptor below. Labels alternate left and right for readability.  Large elegant dish name at top: "[DISH NAME]". Subtitle: "[TAGLINE]".  Lighting: soft studio key light from upper left, subtle fill from right. Background: flat matte [COLOR], clean and minimal. Mood: premium editorial food advertising, extraordinary and craveable.  4K resolution, tack sharp, subtle chromatic warmth. Style ref: Apple product launch meets Michelin-star food photography.
```

Source defaults: `DISH` = lasagna; `COLOR` = dark blue; `LAYER_1` = pasta sheet; `LAYER_2` = ricotta cheese; `LAYER_3` = meat sauce; `LAYER_4` = pasta sheet; `LAYER_5` = mozzarella; `LAYER_6` = basil leaves; `LAYER_7` = parmesan dust

### Variations and adaptation

Replace the example product with the real product reference. Convert source callout text to approved claim copy from `claims.md`, or use blank label boxes and composite exact copy downstream. Adapt layout to the slide job in formats/amazon.md.

### Constraints and common failures

Exact text, numbers and label copy often fail; fabricated specs and badges are risks. Keep callouts to 1-3 words per label and test legibility at 300 px.

### Quality checks

Every claim is in the claim registry; text readable at thumbnail size; one message per slide; format check passes (`post/check.py`).

## ecom-exploded-view-product — Exploded view product infographic

- **Purpose:** Exploded component view with annotations.
- **Category:** e-commerce listing graphics
- **Tags:** exploded view, components, annotations
- **Mode:** generate
- **Model/tool:** Nano Banana Pro (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-22
- **Reuse:** SRC-22 CC BY 4.0 (YouMind OpenLab) - prompt text imported verbatim (placeholders normalised); attribute YouMind OpenLab; original creator rights not cleared; private personal use only.
- **Source title:** Exploded View DSLR Infographic
- **Source link:** https://github.com/YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill (dataset id 21009, category product-marketing)
- **Delivery format:** amazon-gallery

### Prompt

```text
Exploded view {CAMERA} infographic, fully disassembled camera parts floating in perfect alignment, ultra detailed breakdown of every internal and external component, Canon DSLR body separated into layers showing lens mount, CMOS sensor, shutter mechanism, mirror assembly, pentaprism, autofocus module, processor chip, motherboard, battery compartment, memory card slot, buttons, dials, LCD display, internal wiring, cooling structure, lens elements, screws and mechanical parts, futuristic infographic labels connected with clean white lines, cinematic {BRANDING} aesthetic, {BACKGROUND} background, glowing HUD interface elements, ultra realistic product engineering visualization, premium industrial design presentation, high precision mechanical detailing, floating exploded technical render, dramatic lighting, glossy reflections, modern typography, luxury technology showcase, creator and photography focused design, cyberpunk inspired UI overlays, realistic textures and materials, depth of field, highly organized component layout, engineering blueprint meets commercial advertisement style, 8k hyper realistic infographic poster, professional tech magazine aesthetic
```

Source defaults: `CAMERA` = Canon DSLR camera; `BRANDING` = red and black Canon branding; `BACKGROUND` = dark studio background

### Variations and adaptation

Replace the example product with the real product reference. Convert source callout text to approved claim copy from `claims.md`, or use blank label boxes and composite exact copy downstream. Adapt layout to the slide job in formats/amazon.md.

### Constraints and common failures

Exact text, numbers and label copy often fail; fabricated specs and badges are risks. Keep callouts to 1-3 words per label and test legibility at 300 px.

### Quality checks

Every claim is in the claim registry; text readable at thumbnail size; one message per slide; format check passes (`post/check.py`).

## ecom-product-infographic-beverage — Product infographic (iced coffee)

- **Purpose:** Beverage product with benefits and process callouts.
- **Category:** e-commerce listing graphics
- **Tags:** beverage, infographic, benefits
- **Mode:** generate
- **Model/tool:** GPT-Image-2 (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-21
- **Reuse:** SRC-21 CC0-1.0 - prompt text imported verbatim (placeholders normalised); original creator rights not cleared; private personal use only.
- **Source title:** Iced Coffee Product Infographic
- **Source link:** https://x.com/Strength04_X/status/2049082049995362785
- **Delivery format:** amazon-gallery

### Prompt

```text
A high-end café-style product photograph of a transparent glass filled with iced coffee, centered against a soft beige and cream seamless studio background. The drink shows a rich dark coffee base blending with creamy milk swirls, creating a smooth gradient effect. Several clear ice cubes are visible with realistic transparency and light refraction. The glass has subtle condensation droplets, adding freshness. Soft natural studio lighting creates delicate highlights and a clean shadow beneath the glass. Ultra-sharp focus, premium beverage advertisement style, DSLR macro photography, hyper realistic, 8K.

PROMPT 2 - Create a hyper-realistic exploded vertical infographic composition of an iced coffee.

Top → Bottom structure:
Foam Layer (light creamy foam with soft airy texture)
→ Coffee Liquid (rich dark espresso layer with smooth gradient)
→ Ice Cubes (transparent cubes with sharp edges and reflections)
→ Milk Layer (soft creamy white layer with smooth blend effect)
→ Glass Base (clear minimal glass structure)

All elements must be perfectly centered, evenly spaced, and aligned vertically. Use a soft beige seamless background with clean café-style lighting and subtle realistic shadows beneath each floating element. The composition should feel like a premium beverage ad combined with a clean infographic layout.

Add clean minimalist text labels with thin pointer lines using these exact labels:
“Foam”
“Coffee”
“Ice”
“Milk”
“Glass”
Ultra-realistic liquid detail, sharp reflections, premium commercial photography, 8K.
```

### Variations and adaptation

Replace the example product with the real product reference. Convert source callout text to approved claim copy from `claims.md`, or use blank label boxes and composite exact copy downstream. Adapt layout to the slide job in formats/amazon.md.

### Constraints and common failures

Exact text, numbers and label copy often fail; fabricated specs and badges are risks. Keep callouts to 1-3 words per label and test legibility at 300 px.

### Quality checks

Every claim is in the claim registry; text readable at thumbnail size; one message per slide; format check passes (`post/check.py`).

## ecom-engineering-product-infographic — Engineering product infographic design

- **Purpose:** Engineering-style infographic with measurements and labels.
- **Category:** e-commerce listing graphics
- **Tags:** engineering, infographic, labels
- **Mode:** generate
- **Model/tool:** Nano Banana Pro (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-22
- **Reuse:** SRC-22 CC BY 4.0 (YouMind OpenLab) - prompt text imported verbatim (placeholders normalised); attribute YouMind OpenLab; original creator rights not cleared; private personal use only.
- **Source title:** Engineering Product Infographic Design
- **Source link:** https://github.com/YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill (dataset id 24219, category product-marketing)
- **Delivery format:** amazon-gallery

### Prompt

```text
Ultra-detailed technical engineering infographic, clean {BACKGROUND_COLOR} background, divided into a precise {GRID_LAYOUT} by sharp black separator lines. Blueprint-style industrial design visualization featuring photorealistic 3D renders, transparent cutaways, exploded views, dimensional annotations, technical callout boxes, measurement guides, and color-coded engineering arrows (red, blue, green, orange). Professional product design presentation, Apple-style industrial design documentation, high-end technical illustration. TOP LEFT: {PRIMARY_SUBJECT} shown in angled perspective with display removed, exposing densely packed internal components. Visible L-shaped battery, advanced logic board, processor chip, camera module, Face ID sensors, Taptic Engine, thermal pathways, ribbon cables, screws, connectors, and cooling architecture. Precise engineering labels and dimension lines surrounding components. TOP RIGHT: Professional mirrorless camera with large zoom lens. Longitudinal cutaway through lens assembly revealing multiple glass elements, optical groups, aperture mechanism, image sensor, shutter system, electronic components, and viewfinder structure. Additional exploded sub-diagram illustrating aperture blade construction and assembly sequence. Detailed optical engineering annotations. BOTTOM LEFT: Premium wireless earbud charging case displayed partially transparent and split open. One earbud seated inside, second earbud floating above in exploded-view configuration. Internal lithium-polymer battery, miniature logic board, charging contacts, wiring channels, magnets, and compact electronic architecture clearly visible through transparent shell. Technical callouts and component identification markers. BOTTOM RIGHT: Modern mechanical keyboard with charcoal-gray keycaps and single red accent key. Horizontal transparent cutaway sections exposing mechanical switches, switch housings, springs, stabilizers, PCB circuitry, LEDs, and internal frame structure. Lower margin includes enlarged switch cross-section diagram and geometric PCB schematic blueprint. Engineering measurements and component annotations throughout. Highly detailed CAD visualization, industrial design presentation board, precision engineering drawing, exploded assembly diagrams, transparent materials, photorealistic rendering, ultra-sharp focus, clean typography, scientific infographic aesthetics, professional product teardown documentation, white paper style, 8K resolution, museum-quality technical illustration, symmetrical layout, exceptional clarity.
```

Source defaults: `BACKGROUND_COLOR` = white; `GRID_LAYOUT` = 2×2 grid; `PRIMARY_SUBJECT` = Modern smartphone

### Variations and adaptation

Replace the example product with the real product reference. Convert source callout text to approved claim copy from `claims.md`, or use blank label boxes and composite exact copy downstream. Adapt layout to the slide job in formats/amazon.md.

### Constraints and common failures

Exact text, numbers and label copy often fail; fabricated specs and badges are risks. Keep callouts to 1-3 words per label and test legibility at 300 px.

### Quality checks

Every claim is in the claim registry; text readable at thumbnail size; one message per slide; format check passes (`post/check.py`).

## ecom-sustainability-tag-ad — Sustainability / feature tag ad

- **Purpose:** Ad built around a single distinctive product feature.
- **Category:** e-commerce listing graphics
- **Tags:** feature ad, sustainability, tag, benefit
- **Mode:** generate
- **Model/tool:** GPT-Image-2 (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-21
- **Reuse:** SRC-21 CC0-1.0 - prompt text imported verbatim (placeholders normalised); original creator rights not cleared; private personal use only.
- **Source title:** E-commerce Main Image - Sustainable T-Shirt Plantable Tag Ad
- **Source link:** https://x.com/Diplomeme/status/2047957339974828092
- **Delivery format:** meta-feed-4x5

### Prompt

```text
A premium eco-conscious fashion advertisement, shot as a refined editorial product photo. A single off-white or natural cream crew-neck T-shirt hangs on a smooth wooden hanger with a black metal hook, placed against a lush wall of dense green leaves and climbing vines. The hanger has a small minimalist brand monogram engraved near the neck. The shirt is shown from the upper torso down to part of the hem, slightly angled, with soft natural folds and high-quality cotton texture. Printed inside the collar is a minimalist brand mark and the text "JUGGERKNOT ORIGINALS". Hanging from the neckline is 1 rectangular recycled-paper seed tag tied with rustic brown twine; the tag reads "Tulsi" and "Plantable Seed Tag" with a tiny sprouting seed detail near the bottom. From the tag, 1 real tulsi plant stem grows upward across the front of the shirt, with several fresh green leaves, visually demonstrating that the tag is plantable. Add a small fine-label annotation near the tag reading "TULSI PLANTABLE SEED TAG". On the right side, large elegant white serif typography says {HEADLINE_TEXT}. Beneath it, place 3 stacked lines of narrow uppercase sans-serif copy: "WEAR IT.", "PLANT IT.", and "GROW WITH IT.". At the lower left, add the brand name in spaced uppercase serif text: {BRAND_NAME}, with a thin horizontal line above it. At the lower right, add 3 lines of small uppercase sans-serif text: "FSC® CERTIFIED PACKAGING.", "ZERO SYNTHETIC FIBRE", and "BACKED BY ZERODHA.". Use soft diffused daylight, shallow depth of field, moody green-and-cream color grading, luxury sustainable-brand aesthetics, clean composition, vertical poster layout, subtle shadows, and a calm organic atmosphere. Keep the design minimal, premium, and photorealistic, with the shirt occupying the left half and the typography balanced on the right.
```

Source defaults: `HEADLINE_TEXT` = Plant it.; `BRAND_NAME` = JUGGERKNOT ORIGINALS

### Variations and adaptation

Replace the example product with the real product reference. Convert source callout text to approved claim copy from `claims.md`, or use blank label boxes and composite exact copy downstream. Adapt layout to the slide job in formats/amazon.md.

### Constraints and common failures

Exact text, numbers and label copy often fail; fabricated specs and badges are risks. Keep callouts to 1-3 words per label and test legibility at 300 px.

### Quality checks

Every claim is in the claim registry; text readable at thumbnail size; one message per slide; format check passes (`post/check.py`).

## ecom-bento-product-infographic — Bento grid product infographic with 8 modules

- **Purpose:** Modular bento layout covering multiple selling points on one slide.
- **Category:** e-commerce listing graphics
- **Tags:** bento, modules, infographic, selling points
- **Mode:** generate
- **Model/tool:** Nano Banana Pro (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-22
- **Reuse:** SRC-22 CC BY 4.0 (YouMind OpenLab) - prompt text imported verbatim (placeholders normalised); attribute YouMind OpenLab; original creator rights not cleared; private personal use only.
- **Source title:** Premium liquid glass Bento grid product infographic with 8 modules
- **Source link:** https://x.com/MansiSanghani1
- **Delivery format:** amazon-gallery

### Prompt

```text
Input Variable: [insert product name]
Language: [insert language]

System Instruction:
Create an image of premium liquid glass Bento grid product infographic with 8 modules (card 2 to 8 show text titles only).
1) Product Analysis:
→ Identify product's dominant natural color → "hero color"
→ Identify category: FOOD / MEDICINE / TECH
2) Color Palette (derived from hero):
→ Product + accents: full saturation hero color
→ Icons, borders: muted hero (30-40% saturation, never black)
3) Visual Style:
→ Hero product: real photography (authentic, premium), 3D Glass version [choose one]
→ Cards: Apple liquid glass (85-90% transparent) with Whisper-thin borders and Subtle drop shadow for floating depth and reflecting the background color
→ Background stays behind cards and high blur where cards are [choose one]:
  - Ethereal: product essence, light caustics, abstract glow
  - Macro: product texture close-up, heavily blurred
  - Pattern: product repeated softly at 10-15% opacity
  - Context: relevant environment, blurred + desaturated
→ Add subtle motion effect
→ Asymmetric Bento grid, 16:9 landscape
→ Hero card: 28-30% | Info modules: 70-72%
4) Module Content (8 Cards):
M1 — Hero: Product displayed as real photo / 3D glass / stylized interpretation (choose one)in beautiful form + product name label
M2 — Core Benefits: 4 unique benefits + hero-color icons
M3 — How to Use: 4 usage methods + icons
M4 — Key Metrics: 5 EXACT data points
Format: [icon] [Label] [Bold Value] [Unit]
FOOD: Calories: [X] kcal/100g, Carbs: [X]g (fiber [X]g, sugar [X]g), Protein: [X]g, [Key Vitamin]: [X]mg ([X]% DV), [Key Mineral]: [X]mg ([X]% DV)
MEDICINE:Active: [name], Strength: [X] mg, Onset: [X] min, Duration: [X] hrs, Half-life: [X] hrs
TECH:Chip: [model], Battery: [X] hrs, Weight: [X]g,[Key spec]: [value], Connectivity: [protocols]
M5 — Who It's For: 4 recommended groups with green checkmark icons | 3 caution groups with amber warning icons
M6 — Important Notes: 4 precautions + warning icons
M7 — Quick Reference:
→ FOOD: Glycemic Index + dietary tags with icons
→ MEDICINE: Side effects + severity with icons
→ TECH: Compatibility + certifications with icons
M8 — Did You Know: 3 facts (origin, science, global stat) + icons
Output: 1 image, 16:9 landscape, ultra-premium liquid glass infographic.
```

### Variations and adaptation

Replace the example product with the real product reference. Convert source callout text to approved claim copy from `claims.md`, or use blank label boxes and composite exact copy downstream. Adapt layout to the slide job in formats/amazon.md.

### Constraints and common failures

Exact text, numbers and label copy often fail; fabricated specs and badges are risks. Keep callouts to 1-3 words per label and test legibility at 300 px.

### Quality checks

Every claim is in the claim registry; text readable at thumbnail size; one message per slide; format check passes (`post/check.py`).
