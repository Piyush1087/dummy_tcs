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
- The live Identity test proves the shared reference runtime path; production Gatekeeper must reuse applicable shared capabilities rather than create a parallel runtime stack.
- Gatekeeper v1 product/admission architecture and the Industry-confirmation amendment are frozen.
- Gatekeeper backend implementation is authorized for runtime integration and reconciliation on development clone branches only.
- Data Extraction repository/code readiness is closed for the Gatekeeper capability interfaces. Live credentialed provider smoke tests remain a separate production activation gate.
- Production activation is not implied by mocked/runtime integration verification.

Detailed shared-runtime status: `intelligence/runtime/integration/RUNTIME_READINESS.md`.

## Gatekeeper v1 canonical authority

Frozen product authority:

- `intelligence/product_authority/gatekeeper_v1_product_execution_authority.md`
- `intelligence/product_authority/gatekeeper_v1_industry_confirmation_amendment.md`

Frozen derived Intelligence/admission architecture:

- `intelligence/runtime/admission/gatekeeper_admission_contract.yaml`
- `intelligence/runtime/admission/taxonomy_contract.yaml`
- `intelligence/runtime/admission/gatekeeper_site_assessment/processor.yaml`
- `intelligence/runtime/admission/gatekeeper_site_assessment/reasoning.yaml`
- `intelligence/runtime/admission/gatekeeper_site_assessment/rules.yaml`
- `intelligence/runtime/admission/gatekeeper_site_assessment/output_contract.yaml`
- `intelligence/runtime/execution_profiles/gatekeeper_scan.yaml`

## Data Extraction capability state

Repository/code readiness is confirmed for:

- `gatekeeper_primary_web_assessment` — READY
- `company_public_web_research` — READY
- `openai_structured_assessment` — READY_FOR_IE_MODEL_SELECTION

Intelligence owns escalation order and OpenAI model selection. Data Extraction owns provider connection, credentials, request execution, bounded technical retry and Evidence/provenance delivery.

## Known implementation reconciliation points

### Gatekeeper Sub-industry validator

Gatekeeper `provisional_sub_industry` is free-form, non-admission-critical and non-authoritative downstream. No Gatekeeper semantic validator may require membership in the controlled downstream Industry -> Sub-industry taxonomy.

### Industry confirmation authority

After `ADMITTED`:

- confirming the assessed supported Industry makes it downstream authority;
- explicitly confirming a different supported MVP Industry sets `industry_disagreement_flag=true`, preserves the assessed Industry as provenance, remains Surface eligible and may feed later operational review;
- this disagreement flag is independent from `manual_review_eligible` and `REQUEST_CLASSIFICATION_REVIEW`;
- explicitly confirming an unsupported/Coming Soon Industry resolves authoritative backend/application state to `UNSUPPORTED` and prohibits Surface execution.

### Submission/legal persistence

Gatekeeper Intelligence signals should remain one versioned structured result initially. Ownership/authorization attestation and Terms/Privacy acceptance are application/legal controls and require durable auditability. Terms/Privacy versions should be server-owned authoritative values rather than arbitrary client-provided strings.

## Active product work

Gatekeeper v1 runtime integration and backend reconciliation are authorized. No dedicated Gatekeeper Intelligence branch is created or required; `gatekeeper_scan` remains an admission Execution Profile and `gatekeeper_site_assessment` remains the canonical admission AI processor.

Do not begin Surface/Deep Intelligence architecture under this authorization.

## Next approved Intelligence work

1. Reconcile the verified Data Extraction capability branch with the Gatekeeper IE implementation on a dedicated non-force reconciliation branch.
2. Bind Gatekeeper execution to the shared Compiler/execution-profile, Prompt Builder/artifact-loading, validation, telemetry and persistence patterns where applicable; do not duplicate provider connections.
3. Bind capability requests to `gatekeeper_primary_web_assessment`, `company_public_web_research`, and later `openai_structured_assessment` once an approved OpenAI model is selected.
4. Implement one authoritative Industry-confirmation backend/application action preserving assessed and confirmed Industry, confirmation source, disagreement flag, final outcome/recovery state and Surface eligibility.
5. Execute build/typecheck and targeted/regression tests before recommending any final destination merge.
6. Stop after Gatekeeper runtime verification; do not continue into Surface/Deep Intelligence.

## Decision state

### FROZEN_DECISIONS

- Principal Intelligence worker charter governs responsibility and boundaries.
- Brand Intelligence / Identity v1.x remains the reference implementation pattern.
- Intelligence controls WHY / WHAT / WHEN; Data Extraction controls HOW / CONNECTION / DELIVERY.
- Gatekeeper v1 does **not** create a dedicated Intelligence branch.
- Frozen admission AI processor name: `gatekeeper_site_assessment`.
- Gatekeeper Industry is provisional admission classification until explicit confirmation.
- Confirmed supported Industry becomes reusable downstream Brand Intelligence and may enter Surface.
- A different explicitly confirmed supported MVP Industry is allowed, sets `industry_disagreement_flag=true`, remains Surface eligible and is not a Gatekeeper bypass.
- Explicit confirmation of an unsupported/Coming Soon Industry resolves to canonical `UNSUPPORTED` and blocks Surface.
- `industry_disagreement_flag`, `manual_review_eligible`, and `REQUEST_CLASSIFICATION_REVIEW` are independent concepts.
- Gatekeeper confidence field is `assessment_confidence` with semantic values `HIGH | MEDIUM | LOW`.
- MEDIUM confidence triggers corroboration only when uncertainty is admission-critical; non-critical MEDIUM uncertainty does not itself invoke fallback.
- Manual review is not a top-level Gatekeeper outcome. Review availability is expressed through the relevant `CLASSIFICATION_UNCERTAIN`/`UNSUPPORTED` outcome, `manual_review_eligible`, and `REQUEST_CLASSIFICATION_REVIEW`.
- Gatekeeper-only evolving assessment signals persist initially as one versioned structured result; do not create a first-class column per signal before operational evidence justifies it.
- Gatekeeper reason codes remain compact, v1-bounded and intentionally extensible.
- Primary Gemini uses `gatekeeper_primary_web_assessment`; Parallel research uses `company_public_web_research`; OpenAI fallback uses `openai_structured_assessment` after IE supplies an approved model.
- Surface handoff is minimal: normalized URL/domain, confirmed supported Industry, Gatekeeper-completed precondition, and optional non-authoritative provisional sub-industry hint only when needed.

### OPEN_DECISIONS

- Exact production persistence shape for immutable/append-only submission legal audit, pending implementation verification against the current Prisma model and migration history.
- Exact approved OpenAI fallback model, pending benchmarking/product approval.
- Final destination branch for Gatekeeper reconciliation after executable verification and lineage review.

### PROPOSED_CHANGES

- None outside the authorized Gatekeeper runtime-integration scope.

### DEFERRED

- Numeric confidence calibration/thresholds pending benchmarking.
- Additional supported Intelligence languages beyond English.
- Similarweb use in Gatekeeper; remains Surface/Deep only.
- First-class database columns for individual Gatekeeper-only assessment signals unless later operational evidence justifies them.
- Live provider credential activation and smoke tests until developer/Data Extraction activation.
