# Reddit comment review and implemented updates

Source: [r/generativeAI discussion](https://www.reddit.com/r/generativeAI/comments/1re8lo9/where_can_i_find_good_prompts_which_can_be_used/), SRC-30. Read the visible comment section again on 2026-10-21, stopping before “More posts you may like.” The page exposed 17 comment positions: 16 readable comments and one moderator-removed placeholder. Deleted content was not reconstructed; hidden/unreturned replies were not claimed as read. Individual comment permalinks were exposed by the thread but their separate fetches failed; the thread text is the reading evidence.

## Implemented changes

- Added two original preparation prompts: [reference observation to brief](../categories/brief-preparation.md#brief-reference-observation) and [tool/model-aware prompt adaptation](../categories/brief-preparation.md#brief-model-surface-adapter). These return a brief or prompt, not an image.
- Added a transparent-cutout and batch-manifest variation to [background editing](../categories/editing-compositing.md#edit-background-replace), including foreground preservation, edge/alpha proofs, shadow choice and per-file checks.
- Connected these tasks to search, the skill/workflow and coverage map. Added a discoverable resource directory below and current official-page checks for the previously overlooked cutout/batch recommendation.
- Kept bounded editing and anchor rebasing; did not adopt fixed denoising, unsupported negative-prompt fields, copying rights, quality rankings or claims that JSON guarantees a better image.

## Comment-by-comment disposition

Summaries are paraphrases. No comment is treated as an independent model benchmark or a license for someone else's prompt/image.

| Position / author | Substance read | Decision and destination |
|---|---|---|
| 1 Jenna_AI | Galleries, descriptive structure, photo-edit/consistency resources and negative prompts; self-identifies as an automated bot. | Preserve resource leads; descriptive control blocks already exist. Negative controls require the actual surface's support in the new adapter. Bot status retained. |
| 2 commanderdgr8 | Ask an assistant for a prompt and consult the chosen model's documentation. | Added `brief-model-surface-adapter`; exact tool/mode and supported fields are required inputs. |
| 3 Upbeat-Ad8376 | Repeated prompt tweaking can deteriorate the outcome. | Retain existing attempt budget, focused correction and `edit-anchor-rebase`; no new model-wide failure claim. |
| 4 Sweatyfingerzz | Search Lexica/Civitai for prompt-image pairs; recommends copying and a fixed edit-strength value. | Adopt example comparison as discovery, with per-item rights/model/reference disclosure. Reject blanket copying and cross-tool numeric default. |
| 5 _Turd_Reich | Include the image application when asking an assistant to write a prompt. | Added tool/provider/surface-aware adaptation; preserve master brief and locks. |
| 6 JuncYards | Describe the supplied image first, discuss intent, then write the working prompt. | Added `brief-reference-observation`: visible facts, estimates, unknowns, then change/preserve/match brief. |
| 7 JuncYards | General conversational exploration and a broad claim about AI being a search tool. | No distinct production contract; broad characterization not adopted as technical evidence. |
| 8 321-throw-away-123 | Freepik, remove.bg, Photoroom and WaveSpeed; distinguishes fast work from bulk editing. | Read official landing pages and Photoroom batch/WaveSpeed free-tool pages; added cutout/batch variation and SRC-40–43. No speed, cost or quality comparison adopted. |
| 9 Good-Recipe331 | Recommends ImagePrompt.org. | Directory lead; earlier landing-page review retained. No prompt body imported. |
| 10 Temporary-Remove4715 | Recommends an image-to-JSON prompt tool. | Directory lead plus adapter rule: structured output is not necessarily a provider request schema. |
| 11 Slight_Cheek6343 | Recommends OpenArt and names photo-editing models. | Directory lead; actual model/endpoint capabilities require current documentation. No “better than” ranking adopted. |
| 12 Big-Initiative-4256 | PromptCreek enhancer, Banana Prompts and PromptHero. | Directory/search discovery; no site-wide rights or compatibility assumption. |
| 13 Ashamed_Fun1012 | Says the resource ideas are useful for their hobby. | No new technique and no inference of this owner's visual preference. |
| 14 deleted | Moderator-removed comment placeholder. | No readable content; no invented recommendation. |
| 15 mysticmyth9329 | Asks where to find the resources. | Navigation question only; no new technique. |
| 16 publiremote | Thanks for the tips. | No new production control. |
| 17 Alternative-Web394 | Asks what the deleted comment said. | Deleted content remains unknown. |

## Resource directory

Review scope includes this conversation's earlier source passes. “Read landing page” does not mean tested, full-corpus review or per-item rights clearance. Failed fetches remain explicit. No user asset was uploaded, subscription purchased or service installed.

| Resource | What it can help discover | Evidence / disposition |
|---|---|---|
| [Banana Prompts](https://www.bananaprompts.xyz/) | Image/prompt examples and style vocabulary. | Homepage/Explore read earlier; per-item terms not audited. |
| [AwesomePrompts](https://awesomeprompts.xyz/) | Tagged examples. | Existing SRC-01 alias; do not duplicate the corpus. |
| [BetterPrompt](https://betterprompt.me/images) | Comment recommends category browsing. | Earlier attempts timed out; no contents or rights assertion. |
| [Fiddl guide](https://fiddl.art/blog/en/ai-image-prompts) | Descriptive prompting/edit examples. | SRC-31 targeted review; no copied prompts or accepted model rankings. |
| [NanoBanana Fans](https://nanobanana.fans/) | Comment recommends edit/consistency ideas. | Earlier attempts timed out. Comment's extra category links are Reddit searches, not verified site sections. |
| [Lexica](https://lexica.art/) | Prompt-image pair discovery. | Only search/generate shell exposed earlier; no complete catalog audit. |
| [Civitai](https://civitai.com/) | Model-specific example discovery. | Earlier available fetch was inaccessible; no corpus/rights claim. |
| [Freepik / current redirect](https://www.magnific.com/ai/background-remover) | Background-removal workflow. | SRC-40; requested Freepik URL redirected to Magnific; official tool description read. No execution benchmark. |
| [remove.bg](https://www.remove.bg/) | Isolated foreground/transparent PNG workflow. | SRC-41 official landing page read; no fastest/free-tier blanket claim. |
| [Photoroom](https://www.photoroom.com/tools/background-remover) and [batch page](https://www.photoroom.com/batch) | Product cutouts and consistent batch editing. | SRC-42 official pages read; no bulk output tested. |
| [WaveSpeed](https://wavespeed.ai/) and [free tools](https://wavespeed.ai/free-tools) | Separate browser utilities and hosted generation services. | SRC-43 official pages read; no universal no-signup/free claim for hosted models. Privacy and performance descriptions are provider claims, not independently verified. |
| [ImagePrompt.org](https://imageprompt.org/) | Image descriptions and prompt drafting. | Earlier landing page read; image analysis does not recover an original prompt. |
| [ImagePromptMaker](https://imagepromptmaker.com/) | Structured image-description/editing briefs. | Earlier landing page read; JSON fields are not automatically supported API parameters. |
| [OpenArt](https://openart.ai/) | Reference editing and media-workflow discovery. | Earlier landing page read; no comparative-quality claim adopted. |
| [PromptCreek](https://www.promptcreek.com/) | Categories, variables and enhancer workflow. | Earlier landing page read; license remains per item/source. |
| [PromptHero](https://prompthero.com/) | Model-tagged prompt examples. | Earlier homepage/excerpts read; retain exact model/reference context and per-item rights. |

## Applying examples without losing provenance

For a selected example, save its page/creator, prompt availability, stated model/mode, reference dependencies and observed result context. Record whether text is an original prompt, a translation or a reconstruction. A gallery preview is a source example until reproduced locally. Extract a permitted technique or adapt an existing canonical template; an online example is not blanket authorization to copy its words, marks or supplied subjects.

## Validation

The two new entries are original adapted templates and untested. Their preparation-only output is explicit in the index, template body and workflow. Validation completed: library/source/reuse/local-link checks PASS at 157 entries, 43 sources and 103 mapped jobs; all three new exact-job searches returned the intended canonical entry; the generated coverage guide matches its inputs; image and maintenance memory checks PASS. The same six imported-placeholder warnings remain from before this update. No image quality, paid-service quality or local generation claim is added by this review.
