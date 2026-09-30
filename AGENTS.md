# Creative agent routing

For any image generation or editing task:

1. Invoke the project skill at [.codex/skills/creative-prompt-library/SKILL.md](.codex/skills/creative-prompt-library/SKILL.md), then read [creative-rules.md](creative-rules.md).
2. Consult the 2nd memory loop in [memory/learned-preferences.md](memory/learned-preferences.md) to apply proven liked patterns and avoid known anti-patterns.
3. Use [prompt-library/index.csv](prompt-library/index.csv) to shortlist a template by category, mode, tags, and model.
4. Open the linked template and fill every required placeholder. Do not silently invent mandatory claims, product details, brand colors, legal copy, or reference roles.
5. If the target is Nano Banana 2 / Gemini 3.1 Flash Image, also follow [prompt-library/nano-banana-2/README.md](prompt-library/nano-banana-2/README.md).
6. Run the preflight, generation/edit, review, and refinement loop in [workflows/creative-image-workflow.md](workflows/creative-image-workflow.md).
7. Close the 2nd memory loop: capture user feedback (liked, disliked, revised) into [memory/feedback-ledger.jsonl](memory/feedback-ledger.jsonl) and sync memory via `scripts/sync-memory.ps1`.

Keep reusable prompt detail in `prompt-library/`; link to it rather than copying it into rules or workflows.

Research and maintenance changes must also reconcile the [source register](prompt-library/sources/source-register.md), [research review](prompt-library/sources/research-review.md), and [deduplication ledger](prompt-library/sources/deduplication-ledger.md). Every template requires a source-by-source license/reuse statement.
