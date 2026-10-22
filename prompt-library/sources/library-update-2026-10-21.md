# Library update — 2026-10-21

Requested sources: [Awesome-AI-Image-Prompts](https://github.com/devanshug2307/Awesome-AI-Image-Prompts) and the [r/generativeAI resource discussion](https://www.reddit.com/r/generativeAI/comments/1re8lo9/where_can_i_find_good_prompts_which_can_be_used/).

## Delivered

- Three searchable, original, untested templates in [concept product scenes](../categories/concept-product-scenes.md): `product-miniature-worksite`, `product-controlled-splash`, `ad-screen-portal-composite`.
- Three targeted variations in the existing `product-lifestyle-context`, `amz-gallery-whats-inside`, and `edit-selective-style-material` entries.
- Updated source register, research review and deduplication ledger; added SRC-29 to the existing source-refresh script. No image generation or promotion to tested status.

## GitHub evidence and scope

SRC-29 reviewed at commit `8f34520e2f8840ae56cb9c1e2bcde874ec79de89`. Downloaded README SHA-256: `57e83165abbe5277ca424dfc51c58406c5df21d0d6a973f5a937dc2b0e8bfb59`. [Private research snapshot and license](../../outputs/_tests/library-update/2026-10-21/README.md).

Inventoried all 249 numbered headings across 17 numbered categories. The repository advertises 1,000+ through its linked external gallery; that gallery was not exhaustively reviewed or imported. Read representative bodies in sections 1.3, 2.2, 2.3, 2.6, 2.13, 2.14, 4.1, 4.5, 10.5, 10.9 and 16.20, plus introductory and closing usage/license text. This was a targeted review, not 249 individually validated prompts. Preview captions and image URLs were read; preview images were not visually evaluated and no source outputs were reproduced.

Important source-quality findings:

- Section 2.6 is captioned as perfume but its prompt describes footwear. Select by actual prompt content and required references, not the title alone.
- Sections 10.5 and 10.9 contain only “Prompt below.” Their material variation is explicitly workspace-authored from captions, not a recovered source prompt.
- Section 1.3 contains malformed JSON. The library uses prose controls; source JSON is not assumed to be an executable provider request.
- Repository claims that prompts were tested, numeric identity-lock fields, rendering-engine labels, resolution slogans and provider-like keys are not local test evidence or verified API controls.

MIT notice was inspected and retained beside the private source snapshot. The README explicitly limits MIT to original repository material and reserves third-party rights. Individual prompts credit third-party X creators; those creators' rights were not independently cleared. Canonical additions use original wording, replace brand-specific subjects with required brief inputs, and retain per-example attribution links. No source images were downloaded.

## Reddit resource screening

SRC-30: opening question and visible comments through the final reply were read; unrelated recommended posts below the discussion were excluded. The long leading resource comment identifies itself as an automated bot response. Its recommendations are discovery leads, not independent endorsements or model evidence. Further links were checked selectively:

| Lead | Observed result | Library decision |
|---|---|---|
| [AwesomePrompts](https://awesomeprompts.xyz/) | Homepage and repository link opened; resolves to the already registered samuxbuilds collection. | Alias of SRC-01; no duplicate source or import. |
| [Banana Prompts](https://www.bananaprompts.xyz/) | Homepage and Explore page opened. | Discovery only; per-item terms/creator rights not audited; no prompt copied. |
| [Fiddl guide](https://fiddl.art/blog/en/ai-image-prompts) | Prompt structure, editing and representative portrait/product/layout sections read. | SRC-31; existing templates cover these controls. No new model ranking adopted. |
| [PromptCreek](https://www.promptcreek.com/) | Homepage, categories, variables/enhancer description and featured items read. | Discovery only; no per-item content license verified or prompt copied. |
| [PromptHero](https://prompthero.com/) | Homepage, model navigation and visible prompt excerpts read. | Discovery only; no model-specific syntax imported or per-item rights assumed. |
| [BetterPrompt](https://betterprompt.me/images) | Fetch timed out. | Unverified access; no content reviewed or imported. |
| [NanoBanana Fans](https://nanobanana.fans/) | Fetch failed/timed out. | Unverified access; no content reviewed or imported. The comment's editing/consistency links lead to Reddit searches, not site documentation. |
| Lexica, Civitai, imageprompt.org, imagepromptmaker.com, OpenArt | Mentioned in comments; destinations not independently reviewed in this pass. | Leads only; no access, quality, compatibility or reuse claim. |

The thread's fixed denoising-strength advice is not a portable setting for this studio's image models. Generic negative-prompt advice is not a requirement to invent unsupported provider fields. Existing change/preserve/reference controls and official model routing remain authoritative.

## Validation

Completed `node scripts/validate-library.mjs`: PASS, 125 entries and 31 registered sources. The same six imported-placeholder warnings were present before the update (baseline: 122 entries, 28 sources); no new warnings. Targeted discovery searches returned each new template as the sole match. `node scripts/sync-memory.mjs`: PASS, existing eight feedback records consistent. The source README also matched the pinned commit byte-for-byte. Maintenance authorization does not supply a liked/disliked image review; no feedback event was fabricated. These checks validate library integrity and discovery, not generated-image quality.
