# Brands

Light per-brand kits. Brand facts live here, never in global `memory/`.

Read `brands/<brand>/brand.md` first (tokens, voice, locks), then `claims.md` before writing any copy. Load `learnings.md` and `assets/` only when the job needs them.

```text
brands/
  _template/        copy this to onboard a brand
  <brand>/
    brand.md        identity, palette, typography, packaging, do/don't (DESIGN.md style tokens)
    claims.md       approved claims, mandatory footnotes, banned claims
    learnings.md    brand-specific winning patterns and anti-patterns (from feedback ledger)
    assets/         logos, packshots, brand fonts info, reference photos
```

Rules: brand locks beat templates; a learned preference never overrides `claims.md`; outputs go to `outputs/<brand>/<format>/<date>/`.
