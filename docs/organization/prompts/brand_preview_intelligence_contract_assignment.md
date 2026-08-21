# Intelligence Engine AI Worker — Brand Preview Minimum Output Contract Assignment

## Assignment type

Product-to-Intelligence semantic contract definition. **Do not implement processors, providers, runtime wiring or persistence yet.**

## Principal authority

Read first:

- `docs/organization/charters/intelligence_engine_ai_worker_charter.md`
- `intelligence/product_authority/brand_onboarding_v1_product_authority.md`
- existing Brand Intelligence Identity reference implementation;
- frozen Gatekeeper v1 authority only for the admission/Industry handoff boundary.

## Objective

Define the **minimum structured Intelligence output required to render Brand Preview reliably and quickly** after Gatekeeper admission.

The purpose is to establish a stable semantic contract that Frontend can design against and that later processor/Evidence design can implement.

Do not broaden this assignment into the full Brand, Product, Competitor, Instagram, Performance or Campaign Intelligence architecture.

## Frozen Brand Preview semantics

Brand Preview contains five semantic blocks:

1. Brand identity / recognition;
2. how Creator Shop understands the Brand;
3. who the Brand needs to influence;
4. where creators can make the difference;
5. creators Creator Shop would start with.

The screen is non-editable and occurs before Brand/domain verification.

## Required output

Create the smallest authoritative artifact set needed to define the Preview output. Prefer one contract artifact over redundant narrative documents.

The contract should define, at minimum:

### A. Identity/recognition payload

Reuse existing canonical Brand Identity Objects wherever applicable rather than create duplicate Preview-only values.

Identify which of the existing Identity Objects Brand Preview consumes, such as:

- Brand name;
- logo;
- website/domain;
- confirmed Industry;
- concise Brand descriptor if not already canonical.

### B. Brand-understanding narrative

Define the semantic purpose and machine contract for a concise Brand-positioning/creator-relevance narrative.

Do not prescribe final UI copy; Frontend owns the writing/presentation contract.

### C. Audience groups

Define a bounded collection contract containing enough structured meaning for the Preview's small number of Audience groups.

State:

- minimum/maximum count;
- required fields;
- nullability/partial rules;
- whether these are hypotheses vs authoritative customer data.

### D. Creator-marketing opportunities

Define the bounded collection used for the Preview's strategic creator opportunities.

These are not final Campaign recommendations.

State:

- minimum/maximum count;
- title/summary semantics;
- grounding requirements;
- what happens when only one credible opportunity exists.

### E. Initial creator archetypes

Define a bounded recommendation list with rationale.

These are descriptive Preview recommendations and must not become frozen Campaign targeting merely because they were shown during onboarding.

Reuse an existing canonical archetype taxonomy if one is already authoritative; do not invent a parallel Preview taxonomy.

### F. Readiness / completeness contract

Define semantic readiness states sufficient for Frontend to distinguish, for example:

```text
PREVIEW_READY
PREVIEW_READY_PARTIAL
PREVIEW_NOT_READY
PREVIEW_FAILED_RECOVERABLE
```

Use different names if the existing runtime already has a stronger canonical vocabulary.

The contract must state which minimum fields/blocks are required before the user can leave the analysis screen and see Brand Preview.

Do not require Product/Competitor/Instagram Intelligence to finish unless the Preview contract genuinely depends on them.

### G. Industry variance

Define whether the schema is common across:

- D2C;
- SaaS/AI;
- Healthcare;
- Offline Services;

and identify which semantics vary by Industry without creating four separate incompatible contracts.

### H. Provenance / confidence boundary

Define the minimum internal provenance/confidence requirement necessary for safe generation and later traceability.

Do not require confidence percentages to be exposed in the Brand Preview UI.

### I. Downstream non-authority rule

Explicitly state that:

- Preview Audience groups are not automatically customer-confirmed audience truth;
- Preview creator opportunities are not Campaign recommendations;
- Preview creator archetypes are not Campaign targeting authority;
- the Preview is an early useful synthesis that may be superseded/enriched later.

## Required analysis

Before creating the contract, inspect the existing Brand Intelligence Identity objects and other relevant canonical taxonomy/artifacts to avoid duplication.

Classify each proposed Preview field as one of:

```text
REUSE_EXISTING_OBJECT
NEW_CANONICAL_OBJECT
DERIVED_PRESENTATION_OUTPUT
NOT_NEEDED
```

Do not create a new top-level Intelligence Engine for Brand Preview.

## Explicit exclusions

Do not yet define:

- provider sequence;
- Zyte/Cheerio execution mechanics;
- Parallel usage;
- full Product Intelligence;
- full Competitor Intelligence;
- Instagram Intelligence;
- Commercial Intelligence;
- Campaign Intelligence;
- persistence migrations;
- backend API routes;
- frontend copy/layout;
- Stitch artifacts.

Those follow after Product reviews this minimum semantic contract.

## Completion state

Return:

`READY_FOR_BRAND_PREVIEW_INTELLIGENCE_REVIEW`

with:

- artifact path(s);
- commit SHA;
- reused existing Objects;
- genuinely new semantic outputs proposed;
- open product questions, if any;
- explicit statement of the minimum `PREVIEW_READY` boundary.
