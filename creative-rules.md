# Shared creative rules

## Source of truth

- Brand brief, approved assets, exact copy, and claims constraints override any template.
- A reference image must have a declared role: `identity`, `product`, `style`, `composition`, `material`, or `background`. Do not let a style reference override product or identity locks.
- Treat generated text, logos, labels, faces, hands, counts, reflections, and fine mechanical details as inspection hotspots.

## Prompt construction

- Select the closest template; do not blend several templates unless their goals are compatible.
- Preserve the template's field order: task, subject, locked elements, scene/composition, visual treatment, exact copy, output specification, exclusions.
- Use measurable directions where possible: aspect ratio, placement, margins, camera angle, number of subjects, light direction, material finish, and exact text.
- For edits, request one primary change per turn and state what must remain unchanged.
- Do not rely on artist-name imitation as a substitute for describing visual properties. Prefer medium, era, palette, geometry, texture, and lighting language.
- Treat requested DPI, physical dimensions, and platform sizes as delivery specifications that must be verified after export; prompt text alone cannot certify file metadata.
- For icon families, lock grid, stroke, corner, fill, optical-weight, and small-size rules before generating individual symbols.
- For localization, design named headline/detail/logo/disclaimer zones and keep the approved visual system stable across markets.

## Brand and claims safety

- Copy approved claims verbatim. Never generate a new performance, health, financial, comparative, or sustainability claim.
- Lock logo artwork, packaging geometry, label copy, trademark placement, product color, and required disclaimers when supplied.
- If exact typography or logo fidelity is mandatory, generate a clean layout/background and composite approved vector/type assets downstream when the model output is imperfect.

## Evidence language

- `compatibility: verified` means official documentation supports the required capability.
- `compatibility: unverified` means the template is plausible but not confirmed for that model/tool.
- `validation: source example` means the source showed an example; it was not reproduced here.
- `validation: adapted template` means this workspace synthesized a reusable prompt from reviewed patterns; it is untested.
- `validation: actually tested` requires a dated test record, model/version, inputs, output, and reviewer notes.
- An `actually tested` label applies only to the recorded settings and run. It does not imply repeatability or that an unreturned requested ratio/resolution was achieved.
