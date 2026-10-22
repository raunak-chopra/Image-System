
## 2026-10-22 — Preserve the production library and portable tooling

- Behavior: preserve the existing routed prompt library, production formats, post-processing helpers, canonical skill and portable agent pointers. This is a source checkpoint, not approval of generated images or evidence of model quality.
- Changed files: reviewed prompt-library, scripts, core, formats, design-language, post, testing, brand template/fact markdown, instruction pointers and source workflow files; this history entry.
- Reason: back up the validated library expansion separately from local feedback paths, generated image outputs, pending asset deletions and the separately governed capability-deck refresh.
- Verification: library validator passed 157 entries, 43 sources and 103 audited use cases; the existing CLI tool test and six post-resize tests passed. No new image generation was run.
- Rollback: revert this checkpoint commit on a feature branch; existing output files and uncommitted asset deletions remain local for separate review.
- Checkpoint-only cleanup: normalized trailing whitespace in four imported/coverage Markdown files in this isolated worktree; the original workspace files were not rewritten.
- Included five text/JSON provenance summaries required by library links. Referenced raw images, prompts, third-party snapshots and detailed binary evidence remain local and are not part of this source checkpoint.
