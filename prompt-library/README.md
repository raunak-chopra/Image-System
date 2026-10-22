# Creative prompt library

This is a curated library of reusable image-generation and image-editing templates. It emphasizes distinct production approaches, searchable metadata, and honest validation status.

## Find a prompt

Start with the [four-domain coverage guide](COVERAGE.md) and [use-case map](use-cases.csv). Search a domain with `node scripts/find-prompts.mjs --domain app --limit 10`, or an exact job with `node scripts/find-prompts.mjs --use-case app-store-screenshots`. These routes distinguish image work, brief preparation, native compositing, code/design work and strategy.

1. Search [index.csv](index.csv) by category, mode, tag, or model.
   For a ranked shortlist: `node scripts/find-prompts.mjs product glass --mode edit --limit 5`. Optional filters: `--model`, `--format`, `--tested yes|no`. Remove the format filter to include general templates whose surface is unspecified.
2. Open the linked category file and locate the stable ID.
3. Fill all required `{UPPER_SNAKE_CASE}` placeholders; delete unused optional clauses.
4. Apply the brand brief and locked elements before visual styling.
5. Follow the quality checks in the entry and the shared [creative workflow](../workflows/creative-image-workflow.md).

## Categories

- [Product photography](categories/product-photography.md)
- [Concept product scenes: miniatures, splashes and screen composites](categories/concept-product-scenes.md)
- [Brand production systems](categories/brand-production-systems.md)
- [Marketing production](categories/marketing-production.md)
- [App artwork, icons and store presentation](categories/app-visual-assets.md)
- [Social content production systems](categories/social-production-systems.md)
- [Advertising and social](categories/advertising-social.md)
- [Brand, typography, and layouts](categories/brand-design-layout.md)
- [Portraits, editorial, and illustration](categories/portrait-editorial-illustration.md)
- [Editing, compositing, and restoration](categories/editing-compositing.md)
- [Reference fidelity and consistency](categories/reference-consistency.md)
- [Evaluation and model comparison](categories/evaluation-comparison.md)
- [Production controls: anchor rebasing and lighting trials](categories/production-controls.md)
- [Reference observation and model-aware brief preparation](categories/brief-preparation.md)
- [Reddit comment review and resource directory](sources/reddit-comment-review-2026-10-21.md)
- [Reusable prompt control blocks](control-blocks.md)
- [Nano Banana 2 direct-use collection](nano-banana-2/README.md)

## Maintenance

Latest broad audit: [2026-10-21 coverage rescan](sources/coverage-rescan-2026-10-21.md), following the [initial source update](sources/library-update-2026-10-21.md). Source gallery claims and task-routing coverage do not count as workspace test evidence.

Latest comment implementation: [Reddit review](sources/reddit-comment-review-2026-10-21.md), with two preparation workflows, cutout/batch refinement and all visible comments accounted for.

New entries must follow [SCHEMA.md](SCHEMA.md), add one row to `index.csv`, cite a source ID from [sources/source-register.md](sources/source-register.md), and state source-specific reuse conditions. Consult the [research review](sources/research-review.md) and record every merge, exclusion, or preservation decision in the [deduplication ledger](sources/deduplication-ledger.md). Similar prompts should be consolidated into variations unless they use a meaningfully different control strategy.
