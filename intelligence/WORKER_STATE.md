# Intelligence Engine Worker State

**Status:** ACTIVE CONTINUATION REGISTER  
**Purpose:** Compact handoff state for the Intelligence Engine AI Worker. This file references canonical authority; it does not replace branch contracts, execution profiles, product authority, or the principal charter.

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
- Runtime/application-facing profiles: `intelligence/runtime/execution_profiles/`
- Shared runtime: `intelligence/runtime/`

Identity remains the reference for translating frozen product decisions into executable Intelligence architecture. Its exact processor/Object structure is not a mandatory template for admission capabilities or future branches.

## Current runtime status

- Shared Compiler/DAG, Prompt Builder, model registry/resolution, validation, telemetry, loaders and runtime integration reference code exist.
- `identity_test` has executed end-to-end against real websites.
- The live Identity test proves the reference runtime path; it does **not** by itself prove production onboarding persistence, production lifecycle wrappers, or every backend persistence mapping.
- Production persistence markers in Identity remain intentionally unresolved where the canonical backend was not yet audited.
- Gatekeeper v1 Intelligence/admission architecture is now frozen at the contract/profile layer only; production backend/frontend/provider implementation has not been authorized by this freeze.

Detailed runtime status: `intelligence/runtime/integration/RUNTIME_READINESS.md`.

## Gatekeeper v1 canonical authority

Frozen product authority:

- `intelligence/product_authority/gatekeeper_v1_product_execution_authority.md`

Frozen derived Intelligence/admission architecture:

- `intelligence/runtime/admission/gatekeeper_admission_contract.yaml`
- `intelligence/runtime/admission/taxonomy_contract.yaml`
- `intelligence/runtime/admission/gatekeeper_site_assessment/processor.yaml`
- `intelligence/runtime/admission/gatekeeper_site_assessment/reasoning.yaml`
- `intelligence/runtime/admission/gatekeeper_site_assessment/rules.yaml`
- `intelligence/runtime/admission/gatekeeper_site_assessment/output_contract.yaml`
- `intelligence/runtime/execution_profiles/gatekeeper_scan.yaml`

## Known defects

### Gatekeeper taxonomy-validator mismatch

The frozen Gatekeeper architecture treats `provisional_sub_industry` as free-form, non-admission-critical and non-authoritative downstream. The current legacy Identity Gatekeeper validation bridge still requires Gatekeeper `sub_industry` to belong to the canonical Industry -> Sub-industry taxonomy.

This is a bounded implementation defect. The frozen Gatekeeper contracts take semantic precedence for Gatekeeper v1. Reconcile the validator when Gatekeeper implementation is authorized; do not tighten product semantics to match the legacy validator.

## Active product work

Gatekeeper v1 product authority and derived Intelligence architecture are **FROZEN**.

No dedicated Gatekeeper Intelligence branch exists or is approved. `gatekeeper_scan` remains an admission Execution Profile, and the frozen admission AI processor is `gatekeeper_site_assessment`.

The next product-design stream is expected to provide authority for later Surface Intelligence work separately.

## Next approved Intelligence work

**STOP BEFORE PRODUCTION GATEKEEPER IMPLEMENTATION.**

Current continuation boundary:

1. hand Data Extraction capability requirements from the frozen Gatekeeper processor/profile to the Data Extraction Engine worker;
2. do not implement provider connections in Intelligence;
3. do not modify production backend/frontend until separately authorized;
4. when production persistence implementation is authorized, audit the current backend before selecting the exact field/model for the versioned Gatekeeper structured result and submission-control metadata;
5. do not create Product, Competitor, Instagram, Surface/Deep or other new Intelligence branches until separately approved.

## Decision state

### FROZEN_DECISIONS

- Principal Intelligence worker charter governs responsibility and boundaries.
- Brand Intelligence / Identity v1.x remains the reference implementation pattern.
- Intelligence controls WHY / WHAT / WHEN; Data Extraction controls HOW / CONNECTION / DELIVERY.
- Gatekeeper v1 does **not** create a dedicated Intelligence branch.
- Frozen admission AI processor name: `gatekeeper_site_assessment`.
- Gatekeeper Industry is provisional admission classification until confirmation; only confirmed supported Industry becomes reusable Brand Intelligence.
- Gatekeeper confidence field is `assessment_confidence` with semantic values `HIGH | MEDIUM | LOW`.
- MEDIUM confidence triggers corroboration only when uncertainty is admission-critical; non-critical MEDIUM uncertainty does not itself invoke fallback.
- Manual review is not a top-level Gatekeeper outcome. Review availability is expressed through the relevant `CLASSIFICATION_UNCERTAIN`/`UNSUPPORTED` outcome, `manual_review_eligible`, and `REQUEST_CLASSIFICATION_REVIEW`.
- Gatekeeper-only evolving assessment signals persist initially as one versioned structured result; do not create a first-class column per signal before backend reconciliation.
- Gatekeeper reason codes remain compact, v1-bounded and intentionally extensible.
- The primary Gemini path may satisfy owned URL context + Google Search grounding through one combined provider capability while preserving distinct provenance.
- Surface handoff is minimal: normalized URL/domain, confirmed Industry, Gatekeeper-completed precondition, and optional non-authoritative provisional sub-industry hint only when needed.

### OPEN_DECISIONS

- Exact current-backend field/model for the versioned Gatekeeper structured result, pending production backend audit at implementation time.
- Exact current-backend persistence mapping for attestation and Terms/Privacy acceptance metadata, pending production backend audit at implementation time.
- Data Extraction capability readiness/bindings for the frozen primary and fallback execution requirements, to be resolved by the Data Extraction Engine worker.

### PROPOSED_CHANGES

- None. Gatekeeper v1 derived Intelligence/admission architecture is frozen pending implementation authorization.

### DEFERRED

- Exact OpenAI fallback model selection pending benchmarking.
- Numeric confidence calibration/thresholds pending benchmarking.
- Additional supported Intelligence languages beyond English.
- Similarweb use in Gatekeeper; remains Surface/Deep only.
- First-class database columns for individual Gatekeeper-only assessment signals unless later operational evidence justifies them.
- Production backend/frontend Gatekeeper implementation until separately authorized.
