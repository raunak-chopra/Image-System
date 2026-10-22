# Branding and identity (imported)

Imported 2026-10-07 for private personal use from SRC-21 (EvoLinkAI, CC0) and SRC-22 (YouMind OpenLab, CC BY 4.0). Prompt text is verbatim apart from normalised placeholders. Everything here is `source example`/untested until Phase 4.

## brand-identity-document-18panel — 18-panel brand identity document

- **Purpose:** Generate a full brand-identity document sheet (logo, color, type, applications) in one image.
- **Category:** brand identity
- **Tags:** brand identity, document, mascot, board
- **Mode:** generate
- **Model/tool:** GPT-Image-2 (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-21
- **Reuse:** SRC-21 CC0-1.0 - prompt text imported verbatim (placeholders normalised); original creator rights not cleared; private personal use only.
- **Source title:** 18-Panel Mascot Brand Identity Document
- **Source link:** https://x.com/Colin_Leeee/status/2044802802149650631
- **Delivery format:** web-hero

### Prompt

```text
{
  "type": "18-panel brand identity and character design document",
  "brand": {
    "name": "{BRAND_NAME}",
    "industry": "{INDUSTRY}",
    "colors": ["{PRIMARY_COLOR}", "{SECONDARY_COLOR}", "white", "brown", "dark green"]
  },
  "subject": "{CHARACTER_DESCRIPTION}",
  "layout": {
    "grid": "3 columns by 6 rows",
    "sections": [
      {
        "title": "01 品牌DNA分析 / BRAND DNA ANALYSIS",
        "elements": ["logo", "5 color swatches", "6 icons", "target audience charts"]
      },
      {
        "title": "02 概念构思 / CONCEPT MOODBOARD",
        "elements": ["5 photo references", "4 mood icons", "design equation"]
      },
      {
        "title": "03 形态研究 / FORM STUDY",
        "elements": ["4 logo anatomy icons", "4 evolution steps", "4 silhouettes"]
      },
      {
        "title": "04 概念探索 / CONCEPT EXPLORATION",
        "elements": ["12 line-art character sketches"]
      },
      {
        "title": "05 精细线稿 / REFINED LINE ART",
        "elements": ["3 rows of front and side line art with proportion guides"]
      },
      {
        "title": "06 细节精修 / DETAIL REFINEMENT",
        "elements": ["2 full-body renders with labels", "4 circular close-ups"]
      },
      {
        "title": "07 表情设定 / EXPRESSION SHEET",
        "elements": ["11 3D rendered head expressions"]
      },
      {
        "title": "08 姿势库 / POSE LIBRARY",
        "elements": ["9 full-body 3D rendered poses"]
      },
      {
        "title": "09 转身视图 / TURNAROUND VIEW",
        "elements": ["5 full-body 3D renders", "5 matching line-art views"]
      },
      {
        "title": "10 色彩开发 / COLOR DEVELOPMENT",
        "elements": ["5 rows of 5-color palettes", "color psychology text"]
      },
      {
        "title": "11 材质规格 / MATERIAL SPECIFICATION",
        "elements": ["5 texture swatches", "property sliders", "4 manufacturing icons"]
      },
      {
        "title": "12 色彩应用 / COLOR APPLICATION",
        "elements": ["4 color variant renders", "2 light/dark renders", "4 contrast rating circles"]
      },
      {
        "title": "13 构造指南 / CONSTRUCTION GUIDE",
        "elements": ["2 line-art diagrams for geometry and grid"]
      },
      {
        "title": "14 设计系统规则 / DESIGN SYSTEM RULES",
        "elements": ["minimum size icons", "clear space diagram", "4 usage examples"]
      },
      {
        "title": "15 资产变体 / ASSET VARIANTS",
        "elements": ["3 size variants", "3 line-art variants", "3 simplified flat heads"]
      },
      {
        "title": "16 数字应用 / DIGITAL APPLICATIONS",
        "elements": ["1 app icon", "2 social avatars", "UI elements", "3-step animation cycle"]
      },
      {
        "title": "17 实物应用 / PHYSICAL APPLICATIONS",
        "elements": ["plush toy mockup", "packaging mockup", "merchandise mockup", "storefront mockup"]
      },
      {
        "title": "18 最终主视觉 / FINAL RENDERING",
        "elements": ["large high-res 3D render of mascot holding tea", "logo", "file format list"]
      }
    ]
  }
}
```

Source defaults: `BRAND_NAME` = 沐阳 MUYANG TEA; `INDUSTRY` = tea shop; `PRIMARY_COLOR` = yellow; `SECONDARY_COLOR` = green; `CHARACTER_DESCRIPTION` = 3D rendered cute Shiba Inu mascot wearing a green apron

### Variations and adaptation

Run once to set direction, then reuse the winning board as a `style` reference for other assets. Swap sector, palette and typography from the brand kit.

### Constraints and common failures

Generated logos, type and small text are unreliable; treat boards as direction, then rebuild final logo and type as vector. Boards drift from brand tokens unless colors and fonts are named explicitly.

### Quality checks

Palette and fonts match `brands/<brand>/brand.md`; no invented claims; logo marks legible; panels consistent with each other.

## brand-moodboard-board — Brand identity moodboard system

- **Purpose:** Moodboard board that establishes a brand's visual system before production.
- **Category:** brand identity
- **Tags:** moodboard, brand system, board
- **Mode:** generate
- **Model/tool:** GPT-Image-2 (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-21
- **Reuse:** SRC-21 CC0-1.0 - prompt text imported verbatim (placeholders normalised); original creator rights not cleared; private personal use only.
- **Source title:** Brand Identity Moodboard System
- **Source link:** https://x.com/SaasJunctionHQ/status/2054666436698845299
- **Delivery format:** web-hero

### Prompt

```text
Full-blown brand identity system [BRAND NAME] — Brand Identity Moodboard STEP 1 — DECODE THE BRAND Extract from real brand guidelines only: - Colors: full official palette (primary, secondary, neutrals, accents) — exact, no approximations - Type: weight, width, tracking, capitalization character — applied identically across all cards - Copy: real slogans, campaigns, product names, manifesto phrases — zero invented text - World: the domain (sport / tech / fashion / music / etc.) — all imagery stays inside it STEP 2 — OUTPUT Single 16:9 flat image. Black (#000–#0A0A0A) background. 8 cards in an asymmetric 3-column grid. Uniform 8–12px gaps. Rounded corners 8–12px. Every card uses only Step 1 colors, type, and copy. CARDS — in order: 1. LOGO LOCKUP (wide, top-left) — brand color BG, official logo/wordmark, oversized cropped logo mark as structural graphic. No photo. 2. EDITORIAL PHOTO (mid-left) — dark photo from brand world, manifesto headline in brand type over image, wordmark small at bottom. 3. CAMPAIGN BANNER (wide, bottom-left) — flat accent color BG, real event/campaign headline bold-condensed left side, action photo cropped into right side. 4. STORY FORMAT (tall, center full-height) — full-bleed photo, oversized display type partially cropped by edges, date/location detail top. Mobile story proportions. 5. TYPOGRAPHIC POSTER (upper center-right) — vivid accent BG, campaign headline with one letter replaced by a real brand-world object, edition tag below. 6. COLOR PALETTE (center-right) — vertical equal stripes, one per brand color, color name labeled bottom each stripe. No photo. Zero decoration. 7. PRODUCT MOCKUP (upper right) — studio photo of real brand product or branded device/interface, neutral BG, accurate logo/color/type placement. 8. TYPE PATTERN (lower right) — brand name/slogan repeated as all-over pattern at varied sizes/angles, editorial photo overlaid and color-treated to integrate. RULE: A person who knows this brand must immediately confirm every card belongs to it. Output quality: Behance brand identity case study / agency pitch deck.
```

### Variations and adaptation

Run once to set direction, then reuse the winning board as a `style` reference for other assets. Swap sector, palette and typography from the brand kit.

### Constraints and common failures

Generated logos, type and small text are unreliable; treat boards as direction, then rebuild final logo and type as vector. Boards drift from brand tokens unless colors and fonts are named explicitly.

### Quality checks

Palette and fonts match `brands/<brand>/brand.md`; no invented claims; logo marks legible; panels consistent with each other.

## brand-guideline-board — Brand identity guideline board

- **Purpose:** One-sheet brand guideline board: logo, palette, type, usage.
- **Category:** brand identity
- **Tags:** guidelines, brand board, logo, palette
- **Mode:** generate or edit
- **Model/tool:** GPT-Image-2 (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy, reference image(s)
- **Reference assets:** `REF 1 = product or subject identity`; declare each role
- **Sources:** SRC-21
- **Reuse:** SRC-21 CC0-1.0 - prompt text imported verbatim (placeholders normalised); original creator rights not cleared; private personal use only.
- **Source title:** Brand Identity Guideline Board
- **Source link:** https://x.com/Shorelyn_/status/2055681687284293991
- **Delivery format:** web-hero

### Prompt

```text
Using the uploaded logo for (Brand name) generate a high-end, agency-grade brand identity system poster.

OBJECTIVE
Create a complete, presentation-ready brand guideline board that looks like it was designed by a top branding studio. The result must feel commercial, realistic, and client-deliverable, not conceptual.

INTELLIGENCE RULE (THIS IS WHAT YOU WERE MISSING)
Before designing, analyze the logo and infer:
3 identity traits (based on analysis)

COLOR SYSTEM (SMART GENERATION)
Extract palette from logo automatically
Include:
Primary colors (3–5)
Secondary colors (3–5)
Accent colors

Each must show:
HEX codes
labeled usage (primary / UI / highlight / background)

Also generate:
gradients
color combinations
tonal variations

TYPOGRAPHY SYSTEM (MATCH PERSONALITY)
Select typography style based on brand:
luxury → elegant serif
tech → geometric sans
street → bold condensed
corporate → clean neutral sans

Show:
headline / subheadline / body
real text examples (brand-relevant, not lorem ipsum)
clear hierarchy

VISUAL LANGUAGE
Define and visualize:
image style (editorial / lifestyle / futuristic / minimal)
lighting (soft / dramatic / high contrast)
mood (energetic / premium / calm / disruptive)

Show:
3–5 visual tiles

BRAND APPLICATIONS (REALISM BOOST)
Generate consistent mockups:
packaging or product
website hero
mobile UI
3 social media creatives
business card
billboard / ad

All must feel real-world usable.

LAYOUT SYSTEM
grid system
spacing scale (4pt / 8pt system)

Show:
UI components
cards
buttons
layout examples

ICONOGRAPHY
6–10 icons style derived from brand (rounded / sharp / minimal / filled)

PATTERNS & ELEMENTS
shapes derived from logo
repeating motifs
background systems

MICRO DETAILS (THIS CREATES “PREMIUM FEEL”)
shadows
reflections
textures
depth layering

VISUAL STYLE CONTROL
modern editorial + system design hybrid
strong hierarchy
layered composition
controlled spacing

DENSITY RULE
minimum 30–50 elements
mix of macro + micro components
no empty or filler space

HARD RESTRICTIONS
no placeholders
no generic UI
no inconsistent styles
no random colors

FINAL OUTPUT
A high-end brand system poster that looks:
Behance feature-worthy
agency presentation-ready
visually consistent and detailed
```

### Variations and adaptation

Run once to set direction, then reuse the winning board as a `style` reference for other assets. Swap sector, palette and typography from the brand kit.

### Constraints and common failures

Generated logos, type and small text are unreliable; treat boards as direction, then rebuild final logo and type as vector. Boards drift from brand tokens unless colors and fonts are named explicitly.

### Quality checks

Palette and fonts match `brands/<brand>/brand.md`; no invented claims; logo marks legible; panels consistent with each other.

## brand-logo-editorial-system — Chrome logo editorial system

- **Purpose:** Editorial logo presentation system with dimensional treatment.
- **Category:** brand identity
- **Tags:** logo, editorial, chrome, presentation
- **Mode:** generate
- **Model/tool:** GPT-Image-2 (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-21
- **Reuse:** SRC-21 CC0-1.0 - prompt text imported verbatim (placeholders normalised); original creator rights not cleared; private personal use only.
- **Source title:** Chrome Logo Editorial System
- **Source link:** https://x.com/iamaiistudio/status/2063644125510217787
- **Delivery format:** web-hero

### Prompt

```text
prompt:

[BRAND NAME]. You are a Senior 3D Product Visualization Artist and Cinematic Art Director specializing in luxury brand key visuals for high-end editorial and streetwear campaigns.

PHASE 1: LOGO SUBJECT

Identify the official logo/logotype of [BRAND NAME]. Render it with maximum fidelity to the original silhouette, proportions, and geometry — no distortion, no stylization. Extrude the logo into a solid 3D object with depth approximately 15–20% of its height. Coat all surfaces — front face, side extrusion, beveled edges — in hyper-polished liquid chrome (reflectance 0.98, near-perfect mirror). Apply full ray-traced environment reflections so the logo mirrors the surrounding sky gradient, flower field, and light sources. Moderate bevel radius on all hard edges to catch sharp specular highlights. Add Subsurface Scattering on thin structural parts (fine lines, serifs, icon details) for a subtle inner glow. Place 4–8 prismatic 4-point star lens-flare sparkles at highest specular peaks — corners, tips, curved peaks. Organic distribution, not uniform. Zero matte surfaces. Zero plastic look. The entire logo must read as cast from liquid silver.

PHASE 2: ENVIRONMENT & BACKGROUND

Background: wide cinematic landscape at golden-lilac hour (just after sunset). Dense flower field fills the lower third — lavender and white wildflowers with realistic micro-texture and subtle wind motion-blur on far clusters. Middle ground fades to soft purple-grey bokeh. Sky gradient: warm blush rose ( at horizon through lilac ( to cool powder blue ( at top. Add 3–5 silhouetted bird clusters in upper quadrants. Volumetric atmospheric haze on the horizon. Shift the environment's color palette to reflect [BRAND NAME]'s iconic brand identity — introduce the brand's signature hue as a tonal wash in the sky gradient or dominant flower color. The environment must feel art-directed specifically for this brand.

PHASE 3: COMPOSITION & LAYOUT

Format: 1:1 square. Chrome logo centered horizontally at vertical midpoint, monumental scale spanning 65–80% of frame width. Subtle 2–4 degree forced perspective tilt for dynamic energy without distorting logo recognition. Bottom edge of the logo grazes or slightly overlaps the top of the flower field, integrating the 3D object naturally. Logo casts a soft diffused shadow into the flowers. Lower-left corner: 2–3 lines of micro-copy in clean white sans-serif at minimal optical size — a poetic 3-line brand statement relevant to [BRAND NAME]'s heritage and aesthetic. Bottom-left: "[BRAND NAME]" in small caps logotype label. Bottom-right: a secondary flat 2D chrome version of the same logo as a finishing mark.

PHASE 4: LIGHTING

Primary: large soft area light from upper-left simulating post-sunset overcast sky — fully diffused, no hard shadows, 5800K with lilac tint overlay. Secondary: warm 3200K rim light grazing bottom and side edges from behind — golden separation halo between object and field. Global Illumination enabled — chrome logo realistically bounces and absorbs landscape ambient color. The field's purple tones should be faintly visible in the lower reflective surfaces. Volumetric god rays faintly visible through any logo negative space or cutouts.

TECH SPECS

Octane Render aesthetic. Ray Tracing: 16+ bounces. Depth of Field: f/11 equivalent — full logo sharp, far background in soft bokeh only. Tone mapping: lifted blacks, compressed highlights, filmic S-curve. Color grade: desaturated midtones, preserved pastels, cool shadow tones. Film grain: subtle (ISO 200 equivalent). Chromatic Aberration: 0.2–0.3px on peripheral logo edges only. Anti-aliasing: maximum. No AI-plastic normals. No smooth uniform shading. Microscopic surface imperfections on chrome required — micro-scratches, 0.5% roughness noise map. Mood: luxury brand retrospective editorial for Highsnobiety or AnOther Magazine.
```

### Variations and adaptation

Run once to set direction, then reuse the winning board as a `style` reference for other assets. Swap sector, palette and typography from the brand kit.

### Constraints and common failures

Generated logos, type and small text are unreliable; treat boards as direction, then rebuild final logo and type as vector. Boards drift from brand tokens unless colors and fonts are named explicitly.

### Quality checks

Palette and fonts match `brands/<brand>/brand.md`; no invented claims; logo marks legible; panels consistent with each other.

## brand-packaging-design-sheet — Industrial packaging design sheet

- **Purpose:** Packaging presentation sheet showing pack views and details.
- **Category:** brand identity
- **Tags:** packaging, design sheet, presentation
- **Mode:** generate
- **Model/tool:** GPT-Image-2 (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-21
- **Reuse:** SRC-21 CC0-1.0 - prompt text imported verbatim (placeholders normalised); original creator rights not cleared; private personal use only.
- **Source title:** Industrial Packaging Design Sheet
- **Source link:** https://x.com/iamaiistudio/status/2063735848257167383
- **Delivery format:** web-hero

### Prompt

```text
Full prompt:

Using the attached image, create a professional industrial packaging design illustration sheet.

Feature a centered hero 3D render with realistic materials, soft studio lighting, and commercial-grade finish quality. Surround the hero render with technical views: front, side, top, bottom, angled perspective, and flat layout.

Include structural construction sketches, fold lines, seam details, and dimension arrows with measurements in millimeters. Show materials and finishes (matte, glossy print, plastic, paper, glass, etc.) using handwritten-style annotations. Add color swatches, realistic product illustrations, and subtle shadows.

Background should resemble clean sketchbook paper, combining realistic rendering with pencil sketch overlays. Modern industrial design aesthetic, ultra-detailed, portfolio-ready presentation.
```

### Variations and adaptation

Run once to set direction, then reuse the winning board as a `style` reference for other assets. Swap sector, palette and typography from the brand kit.

### Constraints and common failures

Generated logos, type and small text are unreliable; treat boards as direction, then rebuild final logo and type as vector. Boards drift from brand tokens unless colors and fonts are named explicitly.

### Quality checks

Palette and fonts match `brands/<brand>/brand.md`; no invented claims; logo marks legible; panels consistent with each other.

## brand-identity-grid-mockup — 6-panel brand identity grid mockup

- **Purpose:** Six-panel brand identity mockup grid (stationery, signage, packaging, digital).
- **Category:** brand identity
- **Tags:** identity, mockup, grid, applications
- **Mode:** generate
- **Model/tool:** Nano Banana Pro (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-22
- **Reuse:** SRC-22 CC BY 4.0 (YouMind OpenLab) - prompt text imported verbatim (placeholders normalised); attribute YouMind OpenLab; original creator rights not cleared; private personal use only.
- **Source title:** 6-Panel Brand Identity Grid Mockup
- **Source link:** https://github.com/YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill (dataset id 2593, category product-marketing)
- **Delivery format:** web-hero

### Prompt

```text
A professional 6-panel grid layout photograph displaying a complete brand identity suite for the concept: "{CONTENT}". The image is divided into two rows and three columns, each cell framed with a clean white border. The overall style is a clean, modern studio mockup with uniform lighting.
Top Row (Left to Right):
Cell 1 (Business Card - Original): Two stacks of business cards showing front and back, featuring the primary logo, color palette, and typography of "{CONTENT}". Clean white or light background paper stock.
Cell 2 (Business Card - Inverted): Two stacks of business cards showing front and back, featuring the same design as Cell 1 but with inverted colors (e.g., dark background with light logo/text).
Cell 3 (Pamphlet): An open tri-fold brochure showcasing detailed information, images, and branding elements related to "{CONTENT}".
Bottom Row (Left to Right):
Cell 4 (Flyer): A single-page promotional flyer design for "{CONTENT}", with a strong headline, imagery, and call to action.
Cell 5 (Shopping Bag): A premium paper shopping bag with handles, featuring a large version of the "{CONTENT}" logo and brand pattern.
Cell 6 (Calendar): A desk calendar showing a monthly view with themed illustrations or photos related to "{CONTENT}" and brand branding on each page.
All items across all six cells consistently apply the logo, color scheme, typography, and graphic elements of the "{CONTENT}" brand identity. The background behind the grid is a clean, neutral grey studio wall. 4k resolution, highly detailed texture.
A minimal and chic handwritten signature 'Willy' is in the bottom-right corner.
content: {INPUT}
```

Source defaults: `CONTENT` = beauty; `CONTENT` = beauty; `CONTENT` = beauty; `CONTENT` = beauty; `CONTENT` = beauty; `CONTENT` = beauty; `CONTENT` = beauty; `INPUT` = beauty

### Variations and adaptation

Run once to set direction, then reuse the winning board as a `style` reference for other assets. Swap sector, palette and typography from the brand kit.

### Constraints and common failures

Generated logos, type and small text are unreliable; treat boards as direction, then rebuild final logo and type as vector. Boards drift from brand tokens unless colors and fonts are named explicitly.

### Quality checks

Palette and fonts match `brands/<brand>/brand.md`; no invented claims; logo marks legible; panels consistent with each other.

## brand-packaging-flavor-grid — Packaging grid for new flavors/variants

- **Purpose:** Show a pack family across flavors or SKUs on one board.
- **Category:** brand identity
- **Tags:** packaging, variants, SKU grid, flavors
- **Mode:** generate
- **Model/tool:** Nano Banana Pro (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-22
- **Reuse:** SRC-22 CC BY 4.0 (YouMind OpenLab) - prompt text imported verbatim (placeholders normalised); attribute YouMind OpenLab; original creator rights not cleared; private personal use only.
- **Source title:** Minimalist Chocolate Packaging Grid for New Flavors
- **Source link:** https://github.com/YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill (dataset id 6310, category product-marketing)
- **Delivery format:** web-hero

### Prompt

```text
{
  "scene_overview": {
    "setting": "Studio product photography setup",
    "background": "Clean, off-white neutral surface and wall",
    "time_of_day": "Not specified (controlled indoor lighting)",
    "atmosphere": "Minimalist, modern, premium, calm",
    "mood": "Artisanal, refined, contemporary"
  },
  "composition": {
    "layout": "Grid layout with four products",
    "arrangement": "Two rows and two columns",
    "alignment": "Each chocolate bar centered within its quadrant",
    "spacing": "Even spacing with clear separation between products",
    "perspective": "Straight-on, eye-level product view"
  },
  "products": {
    "brand_name": "AGI BAR",
    "product_type": "Chocolate bars",
    "cacao_percentage": "80% CACAO",
    "quantity": 4,
    "packaging_style": "Flat, rectangular paper wrappers",
    "design_theme": "Minimalist typography with vintage-style ingredient illustrations"
  },
  "individual_variants": [
    {
      "position": "Top left",
      "flavor_name": "{FLAVOR_1}",
      "wrapper_color": "Warm mustard yellow",
      "text_color": "Dark brown",
      "illustration": "Small cube of caramel with dripping glaze and salt crystals",
      "visual_tone": "Warm, indulgent"
    },
    {
      "position": "Top right",
      "flavor_name": "{FLAVOR_2}",
      "wrapper_color": "Muted red",
      "text_color": "Dark brown",
      "illustration": "Jalapeño pepper with flame on top",
      "visual_tone": "Bold, spicy, intense"
    },
    {
      "position": "Bottom left",
      "flavor_name": "{FLAVOR_3}",
      "wrapper_color": "Soft pastel blue",
      "text_color": "Dark navy/charcoal",
      "illustration": "Cacao pod with scattered salt crystals",
      "visual_tone": "Cool, clean, refined"
    },
    {
      "position": "Bottom right",
      "flavor_name": "Madagascar Vanilla",
      "wrapper_color": "Light cream / beige",
      "text_color": "Dark brown",
      "illustration": "Vanilla flower with vanilla pods",
      "visual_tone": "Elegant, smooth, classic"
    }
  ],
  "typography": {
    "primary_text": "AGI BAR",
    "secondary_text": "80% CACAO",
    "flavor_text": "Flavor name printed near bottom",
    "font_style": "Bold, uppercase, sans-serif with slightly rough texture",
    "hierarchy": "Brand name largest, cacao percentage medium, flavor smallest"
  },
  "lighting": {
    "light_type": "Soft, diffused studio lighting",
    "shadow_style": "Subtle shadows beneath and around packaging",
    "highlights": "Even illumination with no harsh reflections",
    "contrast": "Low to medium, natural"
  },
  "color_palette": {
    "dominant_colors": [
      "Mustard yellow",
      "Muted red",
      "Pastel blue",
      "Cream beige"
    ],
    "accent_colors": [
      "Dark brown",
      "Charcoal",
      "Navy"
    ],
    "overall_palette": "Muted, earthy, premium"
  },
  "style": {
    "visual_style": "Clean, editorial packaging design with artisanal illustration"
  }
}
```

Source defaults: `FLAVOR_1` = Salted Caramel; `FLAVOR_2` = Fire Jalapeño; `FLAVOR_3` = Himalayan Sea Salt

### Variations and adaptation

Run once to set direction, then reuse the winning board as a `style` reference for other assets. Swap sector, palette and typography from the brand kit.

### Constraints and common failures

Generated logos, type and small text are unreliable; treat boards as direction, then rebuild final logo and type as vector. Boards drift from brand tokens unless colors and fonts are named explicitly.

### Quality checks

Palette and fonts match `brands/<brand>/brand.md`; no invented claims; logo marks legible; panels consistent with each other.

## brand-merch-knolling — Branded merchandise knolling collection

- **Purpose:** Overhead knolling layout of branded merchandise capsule.
- **Category:** brand identity
- **Tags:** merch, knolling, flat lay, brand collection
- **Mode:** generate
- **Model/tool:** Nano Banana Pro (source model; run on others only after testing)
- **Compatibility:** unverified - imported example, not tested here.
- **Validation:** source example
- **Required inputs:** product or subject, brand tokens, approved copy
- **Reference assets:** none (add `REF 1 = product identity` when a real product is available)
- **Sources:** SRC-22
- **Reuse:** SRC-22 CC BY 4.0 (YouMind OpenLab) - prompt text imported verbatim (placeholders normalised); attribute YouMind OpenLab; original creator rights not cleared; private personal use only.
- **Source title:** Premium Branded Merchandise Capsule Collection (Knolling Perspective)
- **Source link:** https://github.com/YouMind-OpenLab/nano-banana-pro-prompts-recommend-skill (dataset id 10951, category product-marketing)
- **Delivery format:** ig-feed-4x5

### Prompt

```text
[Brand Name], conceptualized as a cohesive, premium "capsule collection" of branded merchandise and functional souvenirs. The image displays a curated set of various physical objects (such as tech accessories, utility gear, lifestyle items, or stationery) that are semantically relevant to the brand's specific industry and audience. Every item is designed using the brand's official signature color palette and features bold logo integration.
The objects are arranged in a clean, organized group composition (knolling or isometric perspective) on a seamless, infinite studio white background. The lighting is soft and professional, creating subtle shadows. The framing is wide, ensuring significant negative space (air) surrounds the product grouping on all sides.
```

### Variations and adaptation

Run once to set direction, then reuse the winning board as a `style` reference for other assets. Swap sector, palette and typography from the brand kit.

### Constraints and common failures

Generated logos, type and small text are unreliable; treat boards as direction, then rebuild final logo and type as vector. Boards drift from brand tokens unless colors and fonts are named explicitly.

### Quality checks

Palette and fonts match `brands/<brand>/brand.md`; no invented claims; logo marks legible; panels consistent with each other.
