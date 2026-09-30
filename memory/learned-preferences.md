# Learned Preferences & Anti-Patterns (2nd Memory Loop)

*Last updated: 2026-09-16 | Version: 1.0.0*

This document is the living synthesis of user feedback, approved patterns, and rejected anti-patterns captured across generation sessions. **Agents must review this document during Phase 1 (Intake) and Phase 3 (Preflight) before generating images.**

---

## 1. Global Winning Patterns (What Is Liked)

### Composition & Staging
- **Pedestal Grounding**: Grounding premium supplement containers on architectural pedestals (stone, matte ceramic, concrete plinth) with soft contact shadows consistently scores high for commercial credibility.
- **Split Hierarchy in Wide Formats (16:9)**:
  - Subject/product placed cleanly on one side (e.g. right half or center-right).
  - Open, copy-safe negative space on the opposite side (e.g. left half) with structured typography.
- **Active Ingredient Realism**:
  - Translucent golden amber softgel capsules with genuine caustics, glossy reflections, and clear liquid water/oil droplets.
  - Micro-emulsion particles or glowing cellular dispersion to visually demonstrate "bioavailability" or "rapid absorption" without dense text.

### Typography & Graphic Design
- **Exact Brand Typography**: Lock headings, titles, and display numerals to **Alfabet**; lock body copy, modular cards, and technical annotations to **Sofia Sans** (or Sofia Sans Condensed for small technical blocks). Prohibit generic font classifications like "Swiss Grotesk" or "monospaced" that conflict with brand guidelines.
- **Benchmarking Graphics**: Simple, legible side-by-side comparative visuals (e.g. "Standard (1X)" vs "Advanced Formula (13X)") significantly outperform narrative text alone.
- **Icon Modules**: Clean, enclosed circular or pill badges with high-contrast glyphs for feature callouts (e.g. "Zero Fishy Burps", "Molecularly Distilled", "3X Smaller Particles").

---

## 2. Global Anti-Patterns (What Is Disliked / Avoid)

### Layout & Composition Pitfalls
- ❌ **Center-Crowded Clutter**: Jamming text, floating bottles, badges, and background patterns into the center of the frame. Always reserve dedicated copy-safe negative space.
- ❌ **Ungrounded Floating Bottles**: Product bottles hovering randomly in empty space without a pedestal, surface, or realistic contact shadow look amateurish and ungrounded.
- ❌ **Illegible Small Print**: Attempting to generate dense paragraphs of fine print directly in raster models. Keep in-model text strictly limited to bold headlines, concise badges, and one-line footnotes.
- ❌ **Subjective Diagnostic Praise**: Never use subjective praise adjectives ("Flawless", "Exceptional", "Masterful") in evaluations. Always evaluate against measurable, binary pass/fail criteria.

### Style & Mood Failures
- ❌ **Cheesy / Generic Wellness Imagery**: Yoga poses in sunsets, floating leaves, generic smiling models, or hyperbolic claims ("miracle cure", "transform your life").
- ❌ **Inconsistent Brand Colors**: Using random neon colors or discordant palettes that violate brand guidelines.
- ❌ **Fabricated Engineering & Claims Metrics**: Never invent physical packaging/capsule dimensions (e.g., `18.2mm`, `R12mm`), unverified particle metrics (`100μm to sub-micron`), fake compliance/batch codes (`REV 2.4 / BATCH VERIFIED`), or unapproved claim/dosage copy (`13X Better EPA Absorption`, `1 Softgel Daily`) inside prompts. In technical diagrams, instruction sheets, or structural infographics, use structural category labels, blank annotation boxes, generic dimension indicator arrows without fabricated numbers, and `[To be supplied]` placeholders.
- ❌ **Conflicting Font Naming**: Never prompt for "Swiss Grotesk", "monospaced Swiss type", or "Alfabet / Sofia Sans aesthetic". State the exact fonts: **Alfabet** for display/headings, **Sofia Sans** for body copy.

---

## 3. Brand-Specific Memorized Preferences

### Spunge (Parent: Vytals)
- **Visual Identity**:
  - **Bottle**: Off-white matte rounded rectangular container with flip-top lid.
  - **Logo**: Vertical lowercase `spunge®` wordmark running along the edge.
  - **Color Palette**: Dark Cyan (`#006375`) for primary headlines/accents, Dark Cyan Tint (`#78C6E0`), and warm off-white surfaces.
  - **Packaging Pairing**: Pairing the bottle with the matching silver-foil embossed monocarton outer box elevates brand luxury.
- **Messaging Rules**:
  - Lead with absorption: *"Your body only benefits from what it actually absorbs."*
  - Approved USP: *"13X Better EPA Absorption\*"* or *"13X EPA & 4X DHA absorption\*"*.
  - Technology: *"Thin Particle Technology (TPT)"* / *"Proprietary delivery technology"*.
  - Mandatory Footnote: `*Compared to ordinary fish oil supplements.` (Always render at the base of the layout).

### Amazon Infographics & E-commerce Listing Imagery
- **Aspect Ratio**: Standard 1:1 square for gallery tiles; 16:9 for Brand Store headers and A+ premium modules.
- **Visual Structure**: Left product hero + right feature card stack.
- **Background**: Clinical white or subtle oceanic gradient with clean lighting and soft drop shadows.

---

## 4. Performance & Feedback Ledger Metrics

| Metric | Current Count |
| :--- | :--- |
| **Total Recorded Generations** | 6 |
| **Liked / Approved** | 4 (66.7%) |
| **Disliked / Rejected** | 0 (0%) |
| **Mixed / Revisions Requested** | 2 (33.3%) |

*Source records maintained in [`memory/feedback-ledger.jsonl`](feedback-ledger.jsonl).*
