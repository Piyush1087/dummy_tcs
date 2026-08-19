# Intelligence Engine Worker State

**Status:** ACTIVE CONTINUATION REGISTER  
**Purpose:** Compact handoff state for the Intelligence Engine AI Worker. This file references canonical authority; it does not replace branch contracts, execution profiles, or the principal charter.

## Principal authority

- Worker charter: `docs/organization/charters/intelligence_engine_ai_worker_charter.md`
- Master schema: `intelligence/master_intelligence_schema.md`

## Reference implementation

- Engine: `intelligence/engines/brand_intelligence/`
- Reference branch: `intelligence/engines/brand_intelligence/branches/identity/`
- Branch status: **FROZEN**
- Canonical branch summary: `intelligence/engines/brand_intelligence/branches/identity/README.md`
- Canonical Objects: `intelligence/engines/brand_intelligence/branches/identity/objects.yaml`
- Canonical processors/evidence/artifacts: under the Identity branch
- Journey-level profiles: `intelligence/execution_profiles/`
- Shared runtime: `intelligence/runtime/`

Identity is the reference for translating frozen product decisions into executable Intelligence architecture. Its exact processor/Object structure is not a mandatory template for future branches.

## Current runtime status

- Shared Compiler/DAG, Prompt Builder, model registry/resolution, validation, telemetry, loaders and runtime integration reference code exist.
- `identity_test` has executed end-to-end against real websites.
- The live Identity test proves the reference runtime path; it does **not** by itself prove production onboarding persistence, production lifecycle wrappers, or every backend persistence mapping.
- Production persistence markers in Identity remain intentionally unresolved where the canonical backend was not yet audited. Do not resolve them from this repository alone.

Detailed runtime status: `intelligence/runtime/integration/RUNTIME_READINESS.md`.

## Known defects

### Gatekeeper taxonomy-validator mismatch

The frozen runtime Gatekeeper profile at `intelligence/runtime/execution_profiles/gatekeeper_scan.yaml` allows `provisional_sub_industry` to remain free-form and explicitly says controlled Sub-industry membership is not required at Gatekeeper stage.

The current Identity validation bridge still validates Gatekeeper `sub_industry` against the canonical Industry -> Sub-industry taxonomy. This is a known bounded validator defect. Do not reinterpret it as a product decision, redesign the shared runtime around it, or silently tighten Gatekeeper product semantics.

## Active product work

Gatekeeper product/UX decisions are being reviewed in the separate product-design stream.

Current architecture constraint:

- `gatekeeper_scan` is an **Execution Profile**.
- Its existence does **not** imply a new Gatekeeper Intelligence branch.
- No new Gatekeeper Intelligence branch is approved.

## Next approved Intelligence work

**WAIT FOR FROZEN GATEKEEPER PRODUCT DECISIONS.**

After frozen decisions are received:

1. classify each decision as product / Intelligence / Data Extraction / presentation;
2. determine whether existing Brand Intelligence Identity authority is sufficient or whether branch/processor changes are actually required;
3. update canonical Intelligence contracts only where approved decisions require it;
4. reconcile the known Gatekeeper validator defect against the frozen product contract;
5. do not create Product, Competitor, Instagram, Surface/Deep or other new Intelligence branches until separately approved.

## Decision state

### FROZEN_DECISIONS

- Principal Intelligence worker charter governs responsibility and boundaries.
- Brand Intelligence / Identity v1.x is the reference implementation; see its canonical branch files.
- Intelligence controls WHY / WHAT / WHEN; Data Extraction controls HOW / CONNECTION / DELIVERY.
- `gatekeeper_scan` being an Execution Profile does not itself create or require an Intelligence branch.

### OPEN_DECISIONS

- Gatekeeper product decisions currently under product-design review.

### PROPOSED_CHANGES

- None approved beyond documentation hygiene captured here.

### DEFERRED

- Production persistence reconciliation until the current backend is audited for the relevant work.
- New Intelligence branches until their product authority is frozen and branch need is established.
