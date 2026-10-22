# Prompt entry schema

Each entry is a second-level heading with a stable lowercase ID and these fields in order:

```markdown
## id — Name

- **Purpose:** ...
- **Category:** ...
- **Tags:** comma, separated
- **Mode:** generate | edit
- **Model/tool:** ...
- **Compatibility:** verified | unverified — evidence note
- **Validation:** source example | adapted template | actually tested
- **Required inputs:** ...
- **Reference assets:** none | numbered roles
- **Sources:** SRC-..., ...
- **Reuse:** original/adapted status plus a source-by-source license decision (for example, `SRC-07 MIT — technique paraphrased; SRC-05 no explicit content license — paraphrase only`). Never write only “observe source terms.”

### Prompt
...

### Variations and adaptation
...

### Constraints and common failures
...

### Quality checks
...
```

Use `{UPPER_SNAKE_CASE}` for placeholders and `[optional: ...]` only for removable clauses. Do not use angle brackets as placeholders because they are easy to confuse with markup. A compatibility claim and a prompt test are separate evidence axes.

## Test-evidence record

The Chang-Hai collection demonstrates why `actually tested` needs more than a preview image. When an entry is promoted to `actually tested`, append this block:

```markdown
### Test evidence

- **Test date:** YYYY-MM-DD
- **Exact model/provider ID:** ...
- **Mode and settings:** quality, resolution, aspect ratio, seed if exposed
- **Reference disclosure:** filenames/roles or none
- **Exact filled prompt:** link or verbatim workspace record
- **Runs:** attempted N; passed N
- **Observed result:** what visibly succeeded
- **Observed limitations:** text, ratio, preservation, fidelity, or other mismatch
- **Artifacts:** local input/output paths
- **Reviewer:** ...
```

A single successful run proves only that one recorded configuration produced that output. It does not establish repeatability, pixel fidelity, factual correctness, commercial clearance, or support for a requested size that the tool did not actually return. Reconstructed prompts must be labeled `reconstructed` and must never be described as original prompts.

Record raw requested/returned dimensions and postprocessing separately. Final exported dimensions determine delivery compliance; raw-size mismatch or upscaling alone is not a delivery failure. Record confirmed final-export failures in `d_delivery_fails` and pending detail/legibility/crop/alpha checks as unverified. Approval requires those applicable checks to pass. Native-size capability evidence is distinct from final-delivery compliance.
