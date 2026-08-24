# Gatekeeper Runtime Decoupling Contract

**Version:** 0.1-proposed

**Status:** PROPOSED_FOR_SYSTEMS_ARCHITECT_FREEZE

**Scope:** M2 Intelligence reference-runtime reconciliation

**Production backend audit baseline:** `Piyush1087/creator-commerce-backend-v2-clone` `development@d76604537701437eff5df12cd11e8595d54395be`

## 1. Purpose

This contract defines the bounded M2 architecture for reconciling the
`dummy_tcs` Intelligence reference runtime with the already accepted standalone
Gatekeeper authority.

Permanent separation is:

```text
Production/application Gatekeeper authority
-> already standalone
-> gatekeeper_site_assessment

M2
-> removes obsolete Identity-Gatekeeper assumptions
   from the dummy_tcs Intelligence reference runtime

M2
!= redesign production Gatekeeper
```

The accepted backend already dispatches `gatekeeper_site_assessment` for the
production Gatekeeper path. M2 must not destabilize that flow merely to clean
the reference runtime.

## 2. Authority and precedence

This contract derives from and does not modify:

- `intelligence/product_authority/gatekeeper_v1_product_execution_authority.md`;
- `intelligence/runtime/admission/gatekeeper_admission_contract.yaml`;
- `intelligence/runtime/admission/taxonomy_contract.yaml`;
- `intelligence/runtime/admission/gatekeeper_site_assessment/`;
- `intelligence/runtime/execution_profiles/gatekeeper_scan.yaml`;
- `intelligence/engines/brand_intelligence/engine_definition.md`;
- `intelligence/engines/brand_intelligence/identity_compatibility_migration_plan.md`;
- `intelligence/architecture/brand_canonical_state_read_contract.md`.

Where legacy Identity reference files still describe Gatekeeper as an Identity
processor, this M2 contract controls runtime-decoupling implementation. Those
legacy files remain compatibility artifacts until the separately gated
retirement stage; their continued presence does not grant production authority.

## 3. Permanent processor authority

```text
gatekeeper_site_assessment
-> CANONICAL_ADMISSION_PROCESSOR

industry_classification.gatekeeper
-> COMPATIBILITY_ONLY
-> TEST_ONLY where explicitly invoked
-> REMOVE_AFTER_MIGRATION
```

After immediate M2 implementation:

- no production/default runtime route may dispatch
  `industry_classification.gatekeeper`;
- no shared/default validator registration may select its legacy schema;
- no default Gatekeeper loader may load its Identity artifacts;
- no central model binding may treat it as standalone Gatekeeper authority;
- any remaining use must be explicit, test-only, and observable as
  compatibility execution.

## 4. Industry authority

```text
provisional Industry
-> Gatekeeper assessment

explicit Industry confirmation
-> canonical confirmed Industry

permanent Brand Intelligence
-> consumes confirmed Industry
```

M2 does not change the confirmation boundary. No Brand Intelligence processor
may reclassify confirmed Industry as part of M2, and no legacy Identity result
may outrank the confirmed application value.

## 5. Sub-industry authority

```text
provisional_sub_industry
-> optional grounded hint
-> free-form where Gatekeeper authority allows
-> context / compatibility
-> NOT BRAND_CONFIRMED
```

The standalone Gatekeeper validator must not require controlled
Industry-to-Sub-industry taxonomy membership. A provisional Sub-industry may be
null. When present, it remains a non-authoritative hint even if stored or passed
to a downstream consumer.

M2 must not introduce:

- Sub-industry confirmation;
- `BRAND_CONFIRMED` Sub-industry authority;
- a controlled Gatekeeper Sub-industry dropdown or parent-child gate;
- automatic conversion of a provisional hint into canonical state.

## 6. `industry_niche` preservation

```text
industry_classification.industry_niche
-> COMPATIBILITY_ONLY
-> RETAINED
-> DEFERRED
```

Retirement must be split by scope. Removing
`industry_classification.gatekeeper` does not authorize deleting or renaming the
whole `industry_classification` processor. The `industry_niche` definition,
reasoning, output contract, validation, artifact loading, model binding, and
explicit compatibility tests remain until separate accepted authority resolves
the semantic.

## 7. Validator target architecture

```text
shared reusable validation infrastructure
├── validation result envelope
├── issue formatting
├── structural/configuration failure handling
└── server-owned validator registration

standalone Gatekeeper validation
└── Gatekeeper-specific schema + semantic rules

legacy Identity validation
└── explicit compatibility registration only
```

### 7.1 Shared infrastructure

The current result envelope, structured issues, Zod issue conversion, and
structural/semantic/configuration failure categories are reusable. They must not
carry Identity semantic ownership merely because the first reference runtime
implemented Identity.

### 7.2 Registration

Validator registration must be:

- allow-listed;
- server-owned;
- selected by semantic processor ID, never a caller-supplied file path;
- checked against the expected output-contract ID;
- checked against an allowed contract version;
- fail-closed for an unknown processor, scope, contract, or version.

M2 does not authorize a generic arbitrary YAML-to-Zod compiler. Hand-coded Zod
schemas may remain bounded executable implementations of frozen contracts while
registration and contract/version checks prevent semantic drift.

### 7.3 Standalone Gatekeeper validator

The standalone validator owns the strict shape and semantic invariants of
`gatekeeper_site_assessment`. It consumes the standalone admission taxonomy and
rules where required. It must not load the legacy Identity controlled
Sub-industry taxonomy.

### 7.4 Legacy Identity validator

`GatekeeperSchema`, `validateGatekeeperTaxonomy()`, the
`industry_classification.gatekeeper` branch, and its hardcoded Identity taxonomy
path are legacy-only. During transition they may remain behind an explicit
compatibility registration used by `identity_test`; they must not remain in
default/shared Gatekeeper routing.

`IndustryNicheSchema` and other Identity validators remain available to their
existing compatibility consumers.

## 8. Loader target architecture

```text
allowlisted_definition_loader
-> reusable safe semantic-ID loading

gatekeeper_repository_loader
-> standalone admission definitions

IdentityRepositoryLoader
-> retained temporarily as compatibility wrapper
```

The reusable loader boundary owns safe repository-relative resolution,
immutable server-side allow-lists, definition/artifact version metadata, and
clear configuration failures. Runtime input may select a permitted semantic ID
but may not provide a repository path.

The standalone loader resolves only the canonical `gatekeeper_scan` and
`gatekeeper_site_assessment` admission artifacts. The Identity wrapper retains
its existing external shape where needed and delegates reusable mechanics rather
than forcing a full runtime rewrite.

## 9. Execution-profile boundary

```text
gatekeeper_scan
-> STANDALONE_ADMISSION_PROFILE

identity_test
-> TEST_ONLY
-> COMPATIBILITY_ONLY

identity_onboarding
-> STALE_FOR_PRODUCTION
-> NEVER_REPURPOSE_AS_NEW_ONBOARDING
```

`identity_test` may remain runnable during transition only through an explicit
test/compatibility entry. It must not be exposed by a production/default route.
Its temporary execution does not make its legacy Gatekeeper semantics current
product authority.

`identity_onboarding` must not be edited into the current onboarding lifecycle.
Its Gatekeeper task and mandatory early Identity checkpoint describe frozen
legacy/reference behavior and are not production orchestration authority.

The current lifecycle remains:

```text
Gatekeeper
-> Fast Brand Analysis
-> Brand Preview
-> Verify / claim
-> Home
-> progressive Brand Intelligence
```

No mandatory Identity checkpoint may return.

## 10. Model Registry boundary

```text
Model Registry infrastructure
-> REUSABLE

industry_classification.gatekeeper binding
-> COMPATIBILITY_ONLY

standalone Gatekeeper model/profile resolution
-> projection of frozen gatekeeper_scan authority
```

The central registry may provide runtime resolution for
`gatekeeper_site_assessment` only as a checked projection of the already frozen
Gatekeeper execution profile. It must not independently choose or override the
Gatekeeper provider, model, fallback order, retry ownership, or access
capability.

During transition, the legacy binding may remain only for explicit
`identity_test` compatibility. It must be rejected in production/default
Gatekeeper resolution and removed when that compatibility dispatch is retired.

M2 authorizes no provider or concrete model change.

## 11. Compiler and orchestrator boundary

```text
generic Intelligence Compiler
-> reusable for ordinary processor DAG execution

complete Gatekeeper admission lifecycle
-> may use a bounded admission orchestrator
```

Gatekeeper admission includes deterministic normalization, application scan
policy, reachability, semantic assessment, fallback/escalation, deterministic
admission decision, confirmation, and handoff boundaries. A bounded admission
orchestrator may coordinate these stages and reuse the generic Compiler for an
appropriate AI task without forcing the complete journey into the flat legacy
`identity_test` profile.

The bounded orchestrator must not redefine Gatekeeper product rules or create a
new Intelligence branch.

## 12. Staged implementation authority

Each immediate stage must be a coherent, independently reversible commit or
commit series with its own exit gate.

### M2.0 — baseline and harness

**Objective:** Establish an executable reference-runtime baseline, preserve
current compatibility behavior, and encode the legacy taxonomy mismatch as a
known defect. No behavior changes.

**Likely files:** New tests beside the current validator, loader, model resolver,
and integration routing. The implementation team must first establish or
identify the supported TypeScript test command for the reference runtime.

**Compatibility retained:** All existing Identity test behavior.

**Exit gate:** Validator, loader, resolver, and routing baselines are
reproducible; the known mismatch is represented by a failing/expected-defect
case rather than silently accepted product behavior.

**Rollback:** Revert test/harness changes only.

### M2.1 — standalone Gatekeeper validation

**Objective:** Add Gatekeeper-specific schemas, semantic validation, and
server-owned validator registration.

**Likely files:**

```text
intelligence/runtime/validation/
  gatekeeper_site_assessment_schemas.ts
  gatekeeper_site_assessment_validator.ts
  validator_registry.ts
  validator.ts
  contract.yaml
  README.md
  <focused validation tests>
```

**Precondition:** Frozen standalone processor, output-contract, rules, and
taxonomy artifacts load successfully.

**Compatibility retained:** Existing Identity validation remains selectable by
the legacy test runtime.

**Exit gate:** Standalone assessment validation succeeds and fails according to
its own frozen rules, including free-form provisional Sub-industry, without an
Identity taxonomy path.

**Rollback:** Revert M2.1 without M2.2; the pre-existing compatibility runtime
continues to operate.

### M2.2 — bounded loader and integration

**Objective:** Add reusable allow-listed loader mechanics, a standalone
Gatekeeper repository loader, and only the bounded Gatekeeper integration
adapter actually required.

**Likely files:**

```text
intelligence/runtime/loaders/
  allowlisted_definition_loader.ts
  gatekeeper_repository_loader.ts
  identity_repository_loader.ts

intelligence/runtime/integration/
  types.ts
  <bounded Gatekeeper integration adapter if required>
```

**Precondition:** M2.1 validation registration passes.

**Compatibility retained:** `IdentityRepositoryLoader` remains a compatibility
wrapper and retains its required external behavior.

**Exit gate:** Semantic IDs resolve only allow-listed standalone artifacts;
unsafe/unknown paths, definitions, contracts, and versions fail closed.

**Rollback:** Revert M2.2 without changing the production backend or M2.1's
standalone validator.

### M2.3 — profile and model isolation

**Objective:** Make default Gatekeeper routing resolve
`gatekeeper_site_assessment` and quarantine the legacy Identity Gatekeeper as
explicit test compatibility.

**Likely files:**

```text
intelligence/runtime/models.yaml
intelligence/runtime/models/resolver.ts
intelligence/runtime/execution_profiles/identity_test.yaml
intelligence/execution_profiles/identity_test.yaml
intelligence/runtime/execution_profiles/README.md
<focused resolver/profile tests>
```

**Precondition:** Any standalone Model Registry representation exactly matches
the frozen `gatekeeper_scan` authority and is protected by a drift test.

**Compatibility retained:** `identity_test` remains intentionally runnable only
through an explicit non-production compatibility entry.

**Exit gate:** Default Gatekeeper resolution selects only the standalone
processor; production-context resolution rejects the legacy binding.

**Rollback:** Restore the prior reference profile/registry registration without
changing backend Gatekeeper behavior.

### M2.4 — remove default legacy validator dependency

**Objective:** Remove legacy Gatekeeper selection from default/shared validator
routing and remove the hardcoded Identity taxonomy adapter path.

**Likely files:**

```text
intelligence/runtime/validation/identity_schemas.ts
intelligence/runtime/validation/validator.ts
intelligence/runtime/integration/validator_adapter.ts
<explicit legacy compatibility validator module if still required>
<focused validation/integration tests>
```

**Precondition:** M2.1-M2.3 exit gates pass and the explicit Identity
compatibility path is tested.

**Compatibility retained:** Legacy validation exists only behind explicit
compatibility registration; `industry_niche` validation is unchanged.

**Exit gate:** Default/shared routing cannot dispatch or load
`industry_classification.gatekeeper`; unknown processor/contract/version requests
fail closed.

**Rollback:** Revert M2.4 independently while retaining M2.1-M2.3. Do not remove
the explicit compatibility path until a tested replacement exists.

### M2.5 — later compatibility retirement

M2.5 is not part of immediate M2 implementation. It requires a separate Systems
Architect gate after active consumers and tests prove compatibility removal is
safe.

Likely later files include:

```text
intelligence/engines/brand_intelligence/branches/identity/
  processors/industry_classification.yaml
  artifacts/industry_classification/*
  evidence/evidence.yaml
  objects.yaml
  README.md

intelligence/execution_profiles/
  identity_test.yaml
  identity_onboarding.yaml

intelligence/runtime/
  models.yaml
  prompt_builder/contract.yaml
  execution_profiles/identity_test.yaml
```

Retirement must remove the legacy Gatekeeper scope surgically while preserving
`industry_niche`. It must not turn `identity_onboarding` into current production
orchestration or retire the whole Identity branch.

## 13. Production isolation invariant

```text
production backend
MUST NOT dispatch
industry_classification.gatekeeper
```

The accepted backend already satisfies this invariant for the production
Gatekeeper API. M2 implementation must not modify or destabilize:

- Gatekeeper APIs;
- static/reachability/application scan gates;
- Gatekeeper persistence or recovery;
- Industry confirmation or override behavior;
- Brand Preview execution or handoff;
- the M1 canonical Brand-state facade.

Copied documentation/configuration may contain compatibility references, but no
such reference may be reachable as a default production processor dispatch.

## 14. Acceptance matrix

| Requirement | Required deterministic proof |
|---|---|
| Supported admission | Valid supported assessment passes standalone validation and deterministic policy yields the supported/admitted route. |
| Unsupported admission | Unsupported assessment signals yield the contracted non-admitted outcome without fabricating supported taxonomy values. |
| Industry confirmation | Only explicit confirmation promotes provisional Industry to canonical confirmed Industry. |
| Industry override | A supported user-confirmed override becomes confirmed Industry and preserves the disagreement/audit signal. |
| Provisional Sub-industry | Free-form or null hint passes standalone rules and never receives `BRAND_CONFIRMED` authority. |
| Brand Preview handoff | Preview receives confirmed Industry; legacy Gatekeeper Industry cannot win read precedence. |
| Production isolation | Static/routing test proves no production/default route dispatches `industry_classification.gatekeeper`. |
| Identity test compatibility | `identity_test` runs only through an explicit test/compatibility entry and is unavailable to production/default routing. |
| Industry niche | `industry_classification.industry_niche` artifacts, validation, loading, and permitted compatibility resolution remain available. |
| Model resolution | Standalone resolution projects frozen `gatekeeper_scan` authority; legacy binding is compatibility-only and rejected for production/default Gatekeeper. |
| Validator routing | Standalone, Identity compatibility, niche, structural, semantic, and configuration routes select the intended validator. |
| Unknown processor rejection | Unknown processor, scope, contract ID, or contract version fails closed with structured configuration failure. |
| No mandatory Identity checkpoint | Production journey proceeds through Gatekeeper, Preview, verify/claim, and Home without the stale Identity checkpoint. |
| Rollback safety | Each M2.1-M2.4 stage can be reverted at its documented boundary without backend Gatekeeper changes. |

Model-quality evaluation is separate from deterministic contract correctness.

## 15. Rollback model

M2 is not an all-or-nothing migration.

```text
M2.1
-> may rollback without M2.2

M2.2
-> may rollback without production backend change

M2.3 / M2.4
-> must retain explicit Identity compatibility
   until a tested replacement exists
```

Additional rules:

- Every stage records its starting repository SHA and changed-file set.
- No stage rollback may revert the frozen standalone Gatekeeper authority.
- Compatibility remains fail-closed and non-production during rollback.
- A rollback must not elevate provisional Sub-industry or legacy Industry.
- Production Gatekeeper, Preview, and M1 facade commits are outside the M2
  reference-runtime rollback boundary.
- M2.5 requires its own rollback and consumer-remap plan.

## 16. Implementation preconditions and blockers

### Product blockers

None.

Sufficient authority exists for confirmed Industry and standalone Gatekeeper.
Confirmed Sub-industry is not authorized. `industry_niche` remains deferred.

### Runtime preconditions

- The repository must identify or establish an executable TypeScript test
  harness for the reference runtime before M2.0 can pass.
- The current `identity_test` dependency on the legacy validator/model binding
  prevents immediate physical deletion; M2.3-M2.4 must isolate it first.
- The full `gatekeeper_scan` profile is richer than the current flat Compiler
  profile and therefore requires a bounded admission integration boundary rather
  than forced Identity-profile reuse.
- Repository/backend artifact projections require contract/model drift tests
  when later synchronized.

These are bounded implementation preconditions, not Product or architecture
conflicts.

## 17. Explicit non-goals

M2 does not:

- redesign Gatekeeper product semantics;
- change confirmed Industry authority;
- confirm Sub-industry;
- resolve or promote `industry_niche`;
- modify Brand Preview;
- modify the M1 facade;
- retire the whole Identity branch;
- change persistence;
- change production backend Gatekeeper behavior;
- select or change a provider/model;
- create a new Gatekeeper Intelligence branch;
- deploy any artifact or runtime change.

## 18. Freeze criteria

This contract is ready for Systems Architect freeze when review confirms:

```text
standalone admission authority preserved
+
legacy Identity Gatekeeper explicitly compatibility-only
+
confirmed Industry boundary preserved
+
provisional Sub-industry never elevated
+
industry_niche retained and deferred
+
bounded validation/loader generalization
+
no production Gatekeeper or Preview redesign
+
independently reversible implementation stages
```

**Proposed verdict:** `M2_CANONICAL_ARCHITECTURE_READY_FOR_FREEZE`
