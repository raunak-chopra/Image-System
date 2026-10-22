"""Regenerates swipe-file/breakdowns/*.md and swipe-file/index.csv from the data below.
Run: python swipe-file/build_breakdowns.py
Add new references to REFS (keep fields), rerun. Breakdowns are agent-written from page text plus
whatever visuals loaded in the browser; 'evidence' states how much was actually seen.
"""
import csv
import os

HERE = os.path.dirname(os.path.abspath(__file__))
os.makedirs(os.path.join(HERE, "breakdowns"), exist_ok=True)

REFS = [
 dict(slug="sugoi-sauce", title="SUGOI - sauce brand identity & packaging", url="https://www.behance.net/gallery/251414151/sugoi-sauce-brand-identity-packaging",
  category="food packaging / brand identity", formats="meta-feed-4x5; amazon-gallery; shelf", evidence="text + 6 images (3 photos, 3 color/logo tiles)",
  grid="Triptych hero: lifestyle portrait | product in produce net on saturated yellow | pour shot on white. Flat color tiles with centered wordmark as palette chips.",
  hierarchy="Huge condensed display wordmark and flavor name dominate the label; usage line DIP / MARINADE / GLAZE as a small tertiary band.",
  type="Loud heavy display sans, all caps, wide tracking on the usage line; one typeface family.",
  color="Flavor color-coding: each SKU owns one saturated color (red, orange, lime/yellow); background of each hero matches or contrasts the SKU color; white clean backdrops for pour/use shots.",
  imagery="Product held to camera by a person in streetwear; ingredient-as-set-dressing (chilies in net); in-use pour over food with squeeze motion.",
  hook="Flavor identity in one glance: color = flavor; always show the product in a moment of use.",
  why="Instantly scannable range, strong shelf and thumbnail presence, consistent system across lifestyle, ingredient and use shots.",
  recipes="color-coded variant system; triptych hero (people / ingredient / use); palette-chip tiles"),
 dict(slug="salted-skincare", title="SALTED (marine skincare packaging)", url="https://www.behance.net/gallery/249227989/SALTED",
  category="skincare packaging / branding", formats="amazon-gallery; amazon-aplus; meta-feed-4x5", evidence="text + first hero image and 2 partial images",
  grid="Hero: full range standing on a rock plinth against a deep blue gradient sky; macro crops of cartons and foam texture; typographic plate.",
  hierarchy="Product names and key info clear, supporting details small; layouts standardized across all formats and sizes.",
  type="Clean contemporary sans with strict hierarchy (per text); one display plate with tall condensed serif/sans.",
  color="Coral-reef-derived palette: blue, coral orange, pink, green - each product its own hue against a marine blue environment.",
  imagery="Product range grouped on natural stone; wet/foam texture macros; ocean as narrative element connecting product, formulation and image.",
  hook="Origin story made visual: sea + stone + hue-coded range.",
  why="Range cohesion through one environment and one color logic; texture macros sell the formulation.",
  recipes="range-on-plinth hero; texture macro; hue-coded range; origin-story environment"),
 dict(slug="archivio-coffee", title="Archivio - Coffee & Cultura branding", url="https://www.behance.net/gallery/241856329/Archivio-Coffee-Cultura-Branding",
  category="cafe / retail branding", formats="organic social; packaging; web", evidence="text + 20 images in contact grid",
  grid="Mockup grid: bags, cups, menu cards, shopfront, stamps and tote on a pale butter-yellow field; mix of flat packshots and in-hand lifestyle crops.",
  hierarchy="Small handwritten-style wordmark with a stamp variant; copy is sparse, notes and marks do the talking.",
  type="Handwritten script wordmark plus typewriter-style small text; handwritten annotations used as accents only.",
  color="Warm butter yellow, cream and taupe; very restrained; photography is neutral and white-dominant.",
  imagery="Barista hands, takeaway cups and paper bags, croissant and plate details, white studio packshots for the same items.",
  hook="The brand as a personal archive: notes, highlights, stamps.",
  why="Whole identity runs on one idea (annotation) and one soft palette, so many applications feel unified.",
  recipes="application mockup set; stamp/annotation accents; two-tone pale palette with documentary photography"),
 dict(slug="logofolio-2026", title="Logofolio V1 - 2026", url="https://www.behance.net/gallery/251458341/Logofolio-V1-2026",
  category="logo collection", formats="web-hero; social", evidence="text + cover image only (rest lazy-loaded, not seen)",
  grid="Cover plate on black with a gradient multi-color wordmark; logos presented as a grid of marks.",
  hierarchy="Logo as the sole object per tile; large clear space.",
  type="Condensed tall sans on the cover.", color="Black ground with gradient violet/white accent.",
  imagery="Pure logo presentation, no photography.", hook="Simplicity, clarity and balance across industries.",
  why="Consistent presentation frame makes different marks comparable.", recipes="logo grid plate (see brand-logo-editorial-system)"),
 dict(slug="komyo", title="KOMYO (digital menu platform identity)", url="https://www.behance.net/gallery/235243203/KOMYO",
  category="SaaS / hospitality brand identity", formats="web-hero; social; deck", evidence="text only (images did not load)",
  grid="Not seen.", hierarchy="Not seen.", type="Not seen.",
  color="Per text: warm, accessible, energetic color system.", imagery="Per text: bold illustrations plus NFC cards and product UI.",
  hook="Bilingual name (Japanese light + Spanish 'ate') as the concept.", why="Name-led concept expanded into warm illustration system.",
  recipes="illustration-led identity (low confidence, no visuals reviewed)"),
 dict(slug="eight-and-bob", title="Eight & Bob (niche fragrance bottle design)", url="https://www.behance.net/gallery/250590647/Eight-Bob",
  category="fragrance / luxury product", formats="amazon-gallery; meta-feed-4x5; web-hero", evidence="text + first hero image",
  grid="Single bottle low in frame, angled, standing on the edge of a pale step with a long soft shadow on a light gray gradient; generous negative space above.",
  hierarchy="Product alone; label small; mood from light and shadow, not text.",
  type="Understated serif/sans label type (per text: Art Deco influence, understated luxury).",
  color="Neutral gray/white studio with amber liquid as the only color.",
  imagery="Glass bottle with warm liquid, soft raking light, caustic glow at the base.",
  hook="Understated luxury through restraint.", why="Negative space and one warm accent create premium feel without props.",
  recipes="low-angle hero on step; one-accent studio; negative-space luxury"),
 dict(slug="ateliers-fuer-die-kunst", title="Ateliers fur die Kunst (arts association identity)", url="https://www.behance.net/gallery/227513649/Ateliers-fuer-die-Kunst",
  category="non-profit identity / motion system", formats="web-hero; OOH poster; stationery", evidence="text + hero image",
  grid="Business cards floating above a blue cloudy sky, shot from above at angles; modular geometric colored shapes defined as a system (folded, layered planes).",
  hierarchy="Lowercase wordmark with small descriptor; ample empty sky.", type="Lowercase geometric sans wordmark.",
  color="Soft sky blues with colored geometric accents.", imagery="Surreal floating stationery on cloud sky; signage and poster applications.",
  hook="'Art needs space to unfold' made literal: objects floating in open space.", why="One concept expressed in photography, geometry and motion alike.",
  recipes="floating-objects-on-sky hero; modular geometric accents"),
 dict(slug="mccafe-simplicity", title="McCafe / Simplicity (campaign)", url="https://www.behance.net/gallery/239357123/McCafe-Simplicity",
  category="advertising campaign (food and beverage)", formats="meta-feed-4x5; OOH; film", evidence="text + page header only",
  grid="Per text: key visuals put the cup at the center of every scenario; minimal, generic direction.",
  hierarchy="Product first; message is simplicity.", type="Not seen.", color="Not seen.",
  imagery="The product cup adapted into different scenarios, times and moods.",
  hook="Contrast: over-complicated specialty coffee vs 'just good coffee, fast'.",
  why="One product, one message, localized comedic insight; visually minimal.", recipes="product-as-hero key visual series; contrast hook"),
 dict(slug="listen-responsibly", title="#ListenResponsibly (Budweiser print/OOH)", url="https://www.behance.net/gallery/241582929/ListenResponsibly",
  category="advertising campaign (responsible drinking)", formats="meta-feed-4x5; meta-story-9x16; OOH", evidence="text + title card",
  grid="Dark, near-black concert-atmosphere frames, red brand accents, centered logo and hashtag.",
  hierarchy="Brand mark + campaign hashtag, then short poetic lines; copy-led, emotion over product.",
  type="Condensed bold hashtag; small tracked caption lines.", color="Black and brand red.",
  imagery="Unrepeatable concert moments (per text); tone is presence, not excess.",
  hook="'You don't miss a single note' - presence as the benefit.", why="Moment-led emotional hook; brand sits quietly in the corner of the frame.",
  recipes="moment-led emotional ad; dark mood with single brand accent"),
]

with open(os.path.join(HERE, "index.csv"), "w", encoding="utf8", newline="") as f:
    w = csv.writer(f, lineterminator="\n")
    w.writerow(["slug", "title", "category", "formats", "hook", "recipes", "evidence", "url"])
    for r in REFS:
        w.writerow([r["slug"], r["title"], r["category"], r["formats"], r["hook"], r["recipes"], r["evidence"], r["url"]])

for r in REFS:
    body = "# %s\n\n- **Source:** %s (Behance, reference from owner's `Behance V2.docx`)\n- **Category:** %s\n- **Best-fit formats:** %s\n- **Evidence reviewed:** %s\n\n## Breakdown\n\n- **Layout and grid:** %s\n- **Text hierarchy:** %s\n- **Type:** %s\n- **Color logic:** %s\n- **Imagery:** %s\n- **Hook:** %s\n- **Why it works:** %s\n\n## Recipes it feeds\n\n%s\n\n[design-language/layout-recipes.md](../../design-language/layout-recipes.md)\n" % (
        r["title"], r["url"], r["category"], r["formats"], r["evidence"], r["grid"], r["hierarchy"], r["type"], r["color"], r["imagery"], r["hook"], r["why"], r["recipes"])
    open(os.path.join(HERE, "breakdowns", r["slug"] + ".md"), "w", encoding="utf8", newline="\n").write(body)
print("wrote", len(REFS), "breakdowns")
