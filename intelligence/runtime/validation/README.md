# Machine Output Contract + Validation

Status: WORKING v0.1 — first executable Identity validation layer.

## Source-of-truth rule

The frozen processor `output_contract.yaml` files remain the normative business contracts. Runtime validation must implement those contracts; it must not become an independent place where product/business rules are invented.

Current MVP bridge:

```text
frozen YAML output contract
        ↓
Identity Zod implementation
        ↓
provider structured-output schema (next adapter)
        +
post-response authoritative validation
```

`identity_schemas.ts` is currently a hand-coded implementation bridge because a generic YAML → Zod compiler does not yet exist. This is acceptable for the first Identity runtime test, but the target architecture is to compile machine schemas from the frozen contract representation so there is one authored source of truth.

## Files

- `contract.yaml` — normative runtime validation architecture and failure behavior.
- `identity_schemas.ts` — Zod schemas and Identity semantic validators.
- `validator.ts` — processor/scope router returning structured validation results.
- `gatekeeper_site_assessment_schemas.ts` — standalone Gatekeeper assessment shape.
- `gatekeeper_site_assessment_validator.ts` — standalone contract-bound validator.
- `validator_registry.ts` — server-owned processor/contract/version registration.
- `validation_result.ts` — reusable validation envelope and issue mapping.
- `gatekeeper_admission_decision_validator.ts` — validates the frozen deterministic decision vocabulary and manual-review invariants without deriving outcomes.
- `legacy_identity_gatekeeper_compatibility_validator.ts` — explicit test-only legacy schema and controlled-taxonomy behavior.

## M2 standalone Gatekeeper boundary

`gatekeeper_site_assessment` is registered independently from the legacy
Identity Gatekeeper validator. Its nullable `provisional_sub_industry` is
free-form and never checked against the controlled Identity Sub-industry
taxonomy. Admission outcomes, reason codes, recovery actions and manual-review
eligibility belong to deterministic admission decision, not the assessment
processor, and strict validation rejects them as extra fields.

The registry fails closed when processor, output-contract ID, or contract
version is unknown. Registration is server-owned; runtime callers cannot supply
a validator or repository path.

Default/shared validation does not register
`industry_classification.gatekeeper`. The legacy schema and controlled Identity
taxonomy path exist only in `LegacyIdentityGatekeeperCompatibilityValidator`,
which is selected by the explicitly named Identity compatibility adapter.

## Validation layers

1. Provider structured output — preventive, not authoritative.
2. Zod structural validation — authoritative shape/type/enum/nullability validation.
3. Semantic validation — authoritative cross-field/taxonomy invariants.

No Intelligence output is persisted unless layers 2 and 3 pass.

## Identity coverage

### Industry Gatekeeper
Validates status/eligibility combinations and requires canonical Industry/Sub-industry taxonomy at runtime for supported classifications.

### Industry Niche
Validates output shape/nullability. Its evidence compatibility is currently reasoning-led; a future deterministic semantic validator can be added only if the frozen source contract defines a machine-checkable rule.

### Identity Core
Supports field-level partial execution. Only active fields are accepted; extra/inactive fields fail because the generated Zod object is strict.

### Market Geography
Validates market structure, minimum one market, primary-market presence, and scope-dependent invariants such as GLOBAL/COUNTRY/LOCALITY/REGION requirements.

## Important reliability rule

The validator does not silently "fix" an LLM answer. It may perform only normalization explicitly authorized by the frozen contract. Semantic contradiction, unsupported taxonomy, extra fields, or fabricated shape results in `FAILED_VALIDATION`, not hidden repair.

## Current open implementation item

We still need the provider-schema adapter that converts the active runtime schema into the exact structured-output schema expected by the selected Gemini SDK/API. Post-response Zod validation remains mandatory even after that adapter exists.

## Dependency before real `identity_test`

For the first real execution we now need to connect:

```text
Prompt Builder
   ↓
Gemini provider adapter
   ↓
raw structured response
   ↓
validateProcessorOutput()
   ↓
validated result
```

After that, the next boundary is Intelligence → canonical PostgreSQL persistence mapping.
