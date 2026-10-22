# Memory & Feedback Loop Schema

Library maintenance feedback is kept in `library-feedback.jsonl` with `event_id`, `date`, `scope`, `sentiment`, `user_feedback_verbatim`, `actionable_learnings` and `result`. It records real user corrections to catalog coverage or workflow; it is not a generated asset event and must not enter image-generation approval metrics. Existing asset-feedback records below retain their schema.

The 2nd memory loop captures user sentiment, evaluates what succeeds and fails, and continuously adapts prompt crafting for future generations.

---

## 1. Feedback Ledger Schema (`feedback-ledger.jsonl`)

The feedback ledger is an append-only JSON Lines file. Every line represents one recorded feedback event.

```typescript
interface FeedbackRecord {
  /** Unique ID for the feedback event: `fb-YYYYMMDD-HHMMSS-<hash>` */
  event_id: string;

  /** ISO 8601 UTC timestamp of feedback capture */
  timestamp: string;

  /** Name of the generated asset (e.g. `spunge_hero_banner_1789537935582.jpg`) */
  asset_name: string;

  /** Relative or absolute path where the image is stored */
  asset_path: string;

  /** Template ID from prompt-library/index.csv (e.g. `nb2-campaign-hero`) */
  template_id: string;

  /** Brand or project name (e.g. `Spunge`, `Amazon Generic`) */
  brand: string;

  /** Aspect ratio of the output (e.g. `16:9`, `1:1`, `9:16`) */
  aspect_ratio: string;

  /** Category (e.g. `advertising and product imagery`, `typography and layout`) */
  category: string;

  /** User sentiment rating */
  sentiment: "liked" | "disliked" | "mixed_or_revised";

  /** Verbatim text or quote from the user review */
  user_feedback_verbatim: string;

  /** Specific visual attributes that the user liked / approved */
  positive_signals: string[];

  /** Specific visual attributes that caused friction, errors, or rejection */
  negative_signals: string[];

  /** Actionable rules or learnings derived from this result */
  actionable_learnings: string[];

  /** The filled prompt used to generate the image */
  prompt_used: string;

  /** Any reference images passed into generation */
  reference_images: string[];
}
```

---

## 2. Learned Preferences Guide Schema (`learned-preferences.md`)

`learned-preferences.md` is the high-level distilled memory guide read by the agent before generating or editing images. It is divided into:

1. **Global Winning Patterns (Liked)**: Styles, lighting techniques, compositional arrangements, and typographic choices that consistently receive praise.
2. **Global Anti-Patterns (Disliked / Avoid)**: Visual artifacts, layout errors, illegible text, or unwanted styles that cause rejection.
3. **Brand pointers**: brand-level nuances live in `brands/<brand>/`; this guide only links to them.
4. **Metrics & Health**: Total assets reviewed, like/dislike counts, and approval percentage.

---

## 3. Operational Rules

- **Pre-Prompt Check**: The agent must inspect `learned-preferences.md` before adapting templates or generating images.
- **Post-Delivery Capture**: Whenever the user expresses positive feedback (e.g. "great work", "love it"), negative feedback (e.g. "too dark", "text is messy"), or asks for a revision, an entry must be appended to `feedback-ledger.jsonl`.
- **Claims Guardrail**: A learned visual preference can never override locked brand copy, legal disclaimers, or verified product claims.
