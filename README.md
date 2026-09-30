# Creative Prompt Workspace

This workspace contains a source-attributed, reusable image prompt library and the rules that route creative work through it.

## Start here

- Agents: read [AGENTS.md](AGENTS.md), then follow [workflows/creative-image-workflow.md](workflows/creative-image-workflow.md).
- Project skill: use [.codex/skills/creative-prompt-library/SKILL.md](.codex/skills/creative-prompt-library/SKILL.md) for template selection, adaptation, review, and evidence recording.
- Prompt authors: browse [prompt-library/README.md](prompt-library/README.md) or search [prompt-library/index.csv](prompt-library/index.csv).
- Gemini / Nano Banana 2: start at [prompt-library/nano-banana-2/README.md](prompt-library/nano-banana-2/README.md).
- Maintainers: use [prompt-library/SCHEMA.md](prompt-library/SCHEMA.md) and run `powershell -NoProfile -File scripts/validate-library.ps1`.
- Memory & feedback loop: consult [memory/learned-preferences.md](memory/learned-preferences.md) before generation and record feedback in [memory/feedback-ledger.jsonl](memory/feedback-ledger.jsonl) via `scripts/sync-memory.ps1`.
- Research provenance, limitations, licenses and deduplication decisions: [prompt-library/sources/source-register.md](prompt-library/sources/source-register.md).

The library records compatibility and evidence separately. `verified` means a capability is documented by the model provider; it does **not** mean this workspace tested the prompt. Templates `nb2-campaign-hero` and `nb2-exact-copy-layout` are verified with recorded test runs in `outputs/`; all other entries remain `adapted template` or `source example` until tested.
