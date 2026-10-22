# QA checklist (binary pass/fail)

Score every deliverable at fit-to-frame and at 100% zoom. Each applicable line is PASS or FAIL: no adjectives. Mark checks that cannot be verified as unverified, not a pass. Record agent QA findings with the run; record actual user review signals in the feedback ledger. Agent inspection is not user approval.

## A. Locks and truth
- [ ] Exact copy matches the brief character for character (spelling, case, punctuation).
- [ ] Every claim appears in `brands/<brand>/claims.md`; mandatory footnote present.
- [ ] No invented numbers, dimensions, certifications, batch or compliance codes.
- [ ] Logo, packaging shape, label text and product color match the supplied assets.
- [ ] Reference images each had one declared role; no unintended cross-transfer.

## B. Image integrity
- [ ] Faces, hands, fingers, limb counts correct.
- [ ] Object counts correct (capsules, items, icons as specified).
- [ ] Perspective, shadows, reflections and contact points consistent with one light direction.
- [ ] No garbled glyphs, melted text, stray watermarks or duplicated elements.
- [ ] Product is grounded (surface/contact shadow), not floating, unless the brief asks for it.

## C. Layout and design
- [ ] One clear focal point and a readable hierarchy (headline > support > footnote).
- [ ] Copy-safe space respected; nothing important in platform UI zones (see format file).
- [ ] Text readable at the smallest delivery size (Amazon slides: at 300 px wide; Meta: at phone size).
- [ ] Scene colors follow the brand kit; supplied packaging/SKU accents remain unchanged. Exact brand font fidelity is verified or composited from approved fonts.
- [ ] Small print limited to one footnote line.

## D. Delivery
- [ ] `python post/check.py <format-id> <final-export>` returns no FAIL; final exported dimensions, aspect ratio and format meet the brief.
- [ ] Final export remains sharp and legible at its delivery size; crop safety and alpha are inspected after resizing/recomposition. Record any upscaling and leave unreviewed detail quality unverified.
- [ ] File saved under `outputs/<brand>/<format>/<date>/` with prompt + model + settings recorded.
- [ ] Required ratio set derived (e.g. 4:5, 9:16, 1:1) and each crop inspected.
- [ ] Platform policy risks checked (Amazon main-image rules, Meta text-heavy/claims rules, Google asset rules).

Raw requested/returned size mismatches are generation limitations, not automatic D failures. Retain raw metadata and export operations separately. Count confirmed final-export failures in D; pending checks remain unverified and block approval without being invented failures. Explicit native-size capability benchmarks have a separate result.

## Decision
Apply these additional checks when relevant to the brief:

- [ ] App-store UI captures remain faithful to the actual app; no invented screen content or shipped features.
- [ ] App state artwork matches the true cause and recovery action; working text, controls and accessibility are verified in native UI.
- [ ] Alpha assets have real transparency, correct padding and registered layers; inspect on light/dark footage or app surfaces.
- [ ] Approved marks preserve silhouette, counters, clear space and actual-size legibility; use original vectors for exact production.
- [ ] Pattern seams, package wraps, internal structure and opening states agree with their supplied topology/evidence.
- [ ] Every requested fixed slot, locale and crop has its own actual-size proof; no unsupported universal safe zone or screenshot size.
- [ ] Native production gates in the use-case map are completed or explicitly pending; a generated proof alone is not production approval.

- All A and B pass, C and D pass, and every applicable additional check passes -> `approved`.
- Any A fail -> regenerate or composite exact text/logos downstream; do not ship.
- Failures confined to text or logo -> `needs compositing`.
- Otherwise refine the smallest failing dimension; return to the best earlier output if drift accumulates.
