# Creative agent routing

Image studio for branding, social (organic and paid), performance ads (Meta, Google), Amazon (main, gallery, A+, Brand Store), infographics, photoshoots and editing. Models in use: GPT-Image-2, Nano Banana 2, Nano Banana Pro. Strategy and insight live elsewhere (Brand Manager bot); this workspace produces and QA's assets.

For any image generation or editing task:

1. Invoke the project skill at [skills/creative-prompt-library/SKILL.md](skills/creative-prompt-library/SKILL.md), then read [creative-rules.md](creative-rules.md).
2. Read the brand kit in [brands/](brands/README.md) (`brand.md`, `claims.md`) for the target brand, then consult the 2nd memory loop in [memory/learned-preferences.md](memory/learned-preferences.md) to apply proven liked patterns and avoid known anti-patterns.
3. Read the delivery spec for the surface in [formats/](formats/README.md) (sizes, safe zones, platform rules) and pick a layout from [design-language/layout-recipes.md](design-language/layout-recipes.md); type and color defaults are in [design-language/type-color-rules.md](design-language/type-color-rules.md).
4. Use [prompt-library/index.csv](prompt-library/index.csv) to shortlist a template by category, format, model, tags and `tested`. Prefer authored/curated entries, use `imported/` entries as examples and starting points. Look through [swipe-file/](swipe-file/README.md) for matching references.
5. Choose the model with [core/model-router.md](core/model-router.md). Open the linked template and fill every required placeholder. Do not silently invent mandatory claims, product details, brand colors, legal copy, or reference roles.
6. If the target is Nano Banana 2 / Gemini 3.1 Flash Image, also follow [prompt-library/nano-banana-2/README.md](prompt-library/nano-banana-2/README.md).
7. Run the preflight, generation/edit, review, and refinement loop in [workflows/creative-image-workflow.md](workflows/creative-image-workflow.md), scoring with [core/qa-checklist.md](core/qa-checklist.md).
8. Resize and verify deliverables with `python post/resize.py` and `python post/check.py` (see [post/](post/specs.json) and formats).
9. Close the 2nd memory loop: capture user feedback (liked, disliked, revised) into [memory/feedback-ledger.jsonl](memory/feedback-ledger.jsonl) and sync memory via `scripts/sync-memory.mjs`.

Entry points for other agents: `CLAUDE.md` and `GEMINI.md` only point here; `.claude/skills/` and `.codex/skills/` only point to `skills/`. Edit the canonical files, never the pointers. Scripts are plain Node (`node scripts/<name>.mjs`) so they run on any OS and in any agent.

Finished outputs go to `outputs/<brand>/<format>/<YYYY-MM-DD>/` (use `outputs/_tests/` for experiments). Do not create other output folders or leave files at the repo root.

Keep reusable prompt detail in `prompt-library/`; link to it rather than copying it into rules or workflows.

Research and maintenance changes must also reconcile the [source register](prompt-library/sources/source-register.md), [research review](prompt-library/sources/research-review.md), and [deduplication ledger](prompt-library/sources/deduplication-ledger.md). Every template requires a source-by-source license/reuse statement.
