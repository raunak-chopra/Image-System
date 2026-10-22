# Creative Prompt Workspace

This workspace contains a source-attributed, reusable image prompt library and the rules that route creative work through it.

## Start here

- Agents: read [AGENTS.md](AGENTS.md), then follow [workflows/creative-image-workflow.md](workflows/creative-image-workflow.md).
- Project skill: use [skills/creative-prompt-library/SKILL.md](skills/creative-prompt-library/SKILL.md) for template selection, adaptation, review, and evidence recording.
- Prompt authors: browse [prompt-library/README.md](prompt-library/README.md) or search [prompt-library/index.csv](prompt-library/index.csv).
- Gemini / Nano Banana 2: start at [prompt-library/nano-banana-2/README.md](prompt-library/nano-banana-2/README.md).
- Maintainers: use [prompt-library/SCHEMA.md](prompt-library/SCHEMA.md) and run `node scripts/validate-library.mjs`.
- Latest upgrade audit: [2026-10-11 findings and benchmark priorities](prompt-library/sources/upgrade-audit-2026-10-11.md). Ranked discovery: `node scripts/find-prompts.mjs product glass --mode edit --limit 5`.
- Production specs: [formats/](formats/README.md), [core/qa-checklist.md](core/qa-checklist.md), [core/model-router.md](core/model-router.md), [design-language/layout-recipes.md](design-language/layout-recipes.md), [swipe-file/README.md](swipe-file/README.md); phase status in [PLAN.md](PLAN.md).
- Brand kits: [brands/README.md](brands/README.md).
- Memory & feedback loop: consult [memory/learned-preferences.md](memory/learned-preferences.md) before generation and record feedback in [memory/feedback-ledger.jsonl](memory/feedback-ledger.jsonl) via `scripts/sync-memory.mjs`.
- Research provenance, limitations, licenses and deduplication decisions: [prompt-library/sources/source-register.md](prompt-library/sources/source-register.md).

The library records compatibility and evidence separately. `verified` means a capability is documented by the model provider; it does **not** mean this workspace tested the prompt. Templates `nb2-campaign-hero` and `nb2-exact-copy-layout` are verified with recorded test runs in `outputs/`; all other entries remain `adapted template` or `source example` until tested.
