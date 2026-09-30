# Research review notes

This is the evidence trail behind the source register. Review date: 2026-09-13. Temporary clones were used for inspection; the curated library—not the clones—is the deliverable.

## SRC-01 — awesome-prompts

- Reviewed README/index, LICENSE, frontmatter, all category/file inventories, and representative prompt bodies from every category. Inventory: 959 prompt Markdown files (242 3D, 117 creative, 17 icons, 2 motion, 531 portraits, 35 posters, 10 thumbnails; README indexing can overlap).
- Learned: stable title/category/tags/author/preview metadata makes visual discovery practical. Adopted use-case files, IDs, tags and source metadata; rejected trend-heavy near-duplicates and community model labels as verification.

## SRC-02 — Performance Marketing Academy

- Reviewed the full article in the initial pass: formula, examples, failure guidance and QA. Recheck on 2026-09-13 failed in crawler and live browser with DNS `ERR_NAME_NOT_RESOLVED`.
- Learned: identify subject, exact change, treatment, background, output and preserve list; use one narrow edit per turn; inspect faces, text, labels, boundaries and lighting. No license observed; paraphrase only.

## SRC-03 — Kimi

- Reviewed the full live article: all 50 prompts in ten groups, Kimi Design workflow/features, six prompting tips and FAQ.
- Learned: cover subject, environment, style, mood, light, material and composition without filler; refine progressively. Common portraits/products/landscapes were merged into existing templates. Kimi feature claims are not generic cross-model evidence; no content license shown.

## SRC-04 — YouMind gallery

- Reviewed the dynamic gallery, three-axis taxonomy, model buckets/counts, visible cards and creator links, search/filter claims, and prompt/image conversion routes. Current page displayed 192 GPT Image 2.5, 17,431 GPT Image 2, 15,624 Nano Banana Pro, 113 Seedream 4.5 and 264 GPT Image 1.5 records; counts are mutable and categories overlap.
- Learned: shortlist by use case/style/subject and retain source/preview context. Did not bulk-open or copy 15k+ individual cards; public-X aggregation is not a blanket reuse license.

## SRC-05 — Luma graphic design

- Reviewed all 20 poster/icon/social/system/edit prompt structures and explanations plus review, localization, consistency, handoff, workflow and FAQ.
- Learned: subject + format + style + brand cues + dimensions + mood + exact copy; icon grid/stroke/corners/fill/optical weight; localization zones; crop-flexible masters; narrow iteration. Corrected source framing: a prompt cannot itself guarantee DPI, pixel metadata, color space or print readiness.

## SRC-06 — BuildFast 75 prompts

- Reviewed the full live article and all 75 prompts across ten production groups, its edit formula, FAQ and references.
- Learned: explicit change/preserve/match clauses; overhead flat lays, sketch/wireframe locks, consistent variant grids, UI hierarchy, exact-copy QA. Added four missing control patterns; did not copy prose. No content license shown.

## SRC-07 — awesome-gpt-image-2

- Reviewed README, complete skill, all 21 industrial templates with guidance/pitfalls/cases, structured JSON and MIT license.
- Learned: route category → visual style → scene; prompts behave like specifications with task, composition, style/materials, exact text, ratio and constraints. Adopted schema/routing/pitfalls, not source cases with incomplete provenance.

## SRC-08 — image-prompt-library

- Reviewed README/AGENTS, backend schemas, search/import/dedup design, sample manifest/attribution and licenses.
- Learned: distinguish original/translated variants; assign reference/result roles; record provider/model/parameters/dimensions/hash/runs; retain duplicate confidence and warnings. Adopted metadata ideas only; copied no AGPL code or sample data.

## SRC-09 — claude-banana

- Reviewed nine knowledge files, all 25 template types, three presets, scripts, README/CLAUDE instructions and MIT license.
- Learned: domain-weighted visual briefs, narrative specificity, positive constraints, material/light language, staged iteration, flat lay/UI/style-transfer controls.
- Rejected as universal or current: preview ID `gemini-3.1-flash-image-preview`, fixed percentage weights as evidence, a universal 25-character ceiling, and absolute claims about negatives/transparency. These are heuristics, not verified laws.

## SRC-10 — awesome-gpt-image-2.5-prompts

- Reviewed all seven prompt documents, 87-record dataset, images, validation script, attribution and mixed-license files; also rechecked live GitHub pages.
- Learned: separate reusable template from exact filled test; disclose provider/model/settings/references and actual returned ratio; label reconstruction; one successful run is not repeatability or fidelity. Adopted evidence and unchanged-region checks, not source prompt text.

## SRC-11 — ChatGPT-Shortcut

- Reviewed README/docs, personal-prompt workflow, 279-record English data plus 18 localizations, tags/weights/search/dedup and MIT license.
- Learned: localizations need canonical meaning; popularity aids discovery but does not prove quality; personal prompts should not mutate the curated core. No unique image template survived deduplication.

## SRC-12 — GPT-Image2-Skill

- Reviewed both skills, CLI, model/routing/edit/generation/layout references, 30+ gallery guides, community data/index, tests and MIT license.
- Learned: a skill should route rather than duplicate content; separate model/endpoint and generate/edit modes; verify outputs; prompt-from-image describes observable traits and cannot recover an original prompt. Adopted architecture and verification language only.

## SRC-13 — Nano Banana Pro recommender skill

- Reviewed the 404-line skill, eleven JSON categories, 15,624-record manifest, scripts and publishing docs.
- Learned: gather context, search, return a small ranked shortlist with source/preview, then remix. Limitations: records lack robust per-item license/provenance; `needReferenceImages` can conflict with content; package says MIT but LICENSE is absent.

## SRC-14 — AI Visual Prompt Cookbook

- Reviewed 128 style packs, 128 preview pairs/copy docs, v2.1 schema, catalog, contribution rules and MIT license.
- Learned: separate style fidelity anchors from literal source content; record composition, type, palette, treatment, variables, do/avoid and ratio variants; replace the source subject/text/brand. Adopted system design, not a distinctive style pack.

## SRC-15 — Ultimate collection

- Reviewed its 12k+ line README by all headings and representative bodies across 17 sections, including JSON structure, continuity checklist, scenario guidance, variations and common mistakes.
- Learned: exploded views, material callouts, miniature/diorama staging, continuity ledgers and scenario QA. Excluded celebrity/logo/franchise examples and portrait duplication. No license found.

## SRC-16 — awesome-aiart-pics-prompts

- Reviewed complete English/Chinese README inventories and representative prompt bodies by creator/category.
- Learned: keep named creator attribution, retain negative findings (such as clock or multi-person inconsistency), and separate pose/material/light roles. No license found; copied no prompt body.

## SRC-17 — dsh-image-gen

- Reviewed bilingual README, provider adapters, reference handling, Studio/gallery/revision/compare flows, inspiration data, tests, install skill and MIT license.
- Learned: compare the same filled prompt across models; retain candidates/revisions/settings; save approved results; disclose when prompts/references leave the workspace. Adopted evaluation and evidence patterns, not code.

## SRC-18 — IMGPrompt

- Reviewed README, 5,040-entry English vocabulary, 17 localized equivalents, taxonomy, prompt assembly, duplicate cleanup and source credits.
- Learned: translated labels can map to canonical English generation terms; vocabulary tags should be composable and normalized. Did not import mixed-license data (MIT code, CC BY 4.0, AGPL-3.0 and other inspirations).

## Official verification (SRC-19–20)

- Nano Banana 2 = Gemini 3.1 Flash Image (`gemini-3.1-flash-image`); Nano Banana Pro = Gemini 3 Pro Image (`gemini-3-pro-image`); Nano Banana = Gemini 2.5 Flash Image (`gemini-2.5-flash-image`); Lite = `gemini-3.1-flash-lite-image`.
- Official docs support generation, conversational editing, text rendering, multi-image references, multiple ratios and 512/1K/2K/4K output for Gemini 3.1 Flash Image. This verifies operations, not these templates. Mutable limits must be rechecked at use time.
- Community results/settings in SRC-09/10/13/15/16 do not validate Nano Banana 2.
