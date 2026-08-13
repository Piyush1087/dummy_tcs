# Phase G Product Readiness Standard

**Version:** 1.0  
**Status:** APPROVED  
**Scope:** Global — all Creator Shop modules  
**Purpose:** Govern the final product-readiness reconciliation of an implemented module before release/developer handoff.

## 0. Purpose

Phase G is the disciplined transition from **implemented software** to **product-ready software**.

It is intentionally separate from initial product design, schema design and feature implementation. A module may already compile, have passing tests and expose working endpoints while still carrying legacy authority, incomplete hydration, incorrect state behavior, poor product copy, incompatible UI composition or unresolved runtime/environment assumptions.

Phase G exists to find and resolve those gaps without allowing visual redesign, generated UI or legacy production code to redefine canonical product behavior.

This standard is **module-agnostic**. It applies to Campaign, Collaboration, Brand Centre, Creator Centre, Marketplace, Reporting, Intelligence-facing product surfaces and future Creator Shop modules. Module-specific Phase G manifests define the exact repositories, branches, contracts, routes, providers and acceptance scenarios for each module.

This standard does not define module product behavior. Product/domain contracts remain authoritative for what the module does.

## 1. Relationship to Other Governance

All Phase G work MUST follow `AI_ENGINEERING_STANDARD.md`.

This standard adds a product-readiness process on top of that engineering governance. It does not replace or duplicate the authority model, ownership rules, change discipline, security requirements, testing requirements or Git discipline defined there.

Applicable specialist standards remain authoritative for their layer:

- `docs/engineering/frontend.md`
- `docs/engineering/backend.md`
- `docs/engineering/database.md`
- `docs/engineering/validation.md`
- `docs/engineering/ai-integration.md`
- `docs/design-system/AURORA_DESIGN_SYSTEM.md`

A module-specific Phase G manifest MUST identify the minimum sufficient authoritative sources for that module.

## 2. Phase G Outcomes

A completed Phase G should establish that:

1. the implementation consumes the correct canonical authorities;
2. legacy or compatibility code no longer shapes new product behavior;
3. persisted state can reconstruct the user experience correctly after refresh/re-entry;
4. backend-owned lifecycle/capability decisions are not re-inferred incorrectly in the frontend;
5. validation and error behavior are product-facing rather than implementation-facing;
6. module ownership boundaries remain intact;
7. all material states are represented, including blocked, empty, error, terminal and degraded states;
8. responsive behavior and accessibility are acceptable where UI exists;
9. visual treatment uses Aurora and approved composition references without replacing working architecture unnecessarily;
10. local/staging acceptance demonstrates the product behavior that the code claims to implement.

Passing build/typecheck/tests alone is not sufficient evidence of Phase G completion.

## 3. Global Phase Sequence

Phase G follows this sequence unless a phase is explicitly marked not applicable with a documented reason:

`G0 Reality Audit → G1 Functional Reconciliation → G2 UX/IA Freeze → G3 Visual Reference/Stitch → G4 Production Integration → G5 Manual Product Acceptance`

Do not collapse semantic gates merely to reduce prompt count. An AI agent MAY execute substantial work within a phase, but MUST stop when the task prompt defines a Product-review gate.

### 3.1 G0 — Reality and Source-of-Truth Audit

**Goal:** understand the actual module before modifying it.

G0 is investigation-first. Source modification is prohibited unless the task explicitly scopes documentation-only audit artifacts.

#### G0.0 — Baseline Freeze

Record:

- repository names;
- checked-out branches/refs;
- exact commit SHAs;
- canonical specification ref;
- implementation/runtime refs;
- module entry routes/endpoints;
- relevant roles/actors;
- available test/build commands;
- known external/provider dependencies;
- environment assumptions;
- authority hierarchy.

If an implementation checkout does not match the approved baseline SHA, stop before auditing behavior unless Product explicitly approves the new baseline.

#### G0.1 — Whole-Module Surface Audit

Audit the complete product surface, not only the happy-path screen.

For UI modules, inspect applicable:

- list/index surfaces;
- detail/workspace surfaces;
- create/edit flows;
- lifecycle actions;
- role-specific variants;
- loading/empty/error/degraded/blocked states;
- terminal states;
- refresh/re-entry behavior;
- realtime behavior;
- desktop/mobile behavior;
- copy, validation and technical/debug leakage.

For backend-only or service modules, audit equivalent API, command, read-model, persistence, event, retry, failure and integration surfaces.

#### G0.2 — Root-Cause and Authority Audit

For every material finding, trace the behavior to its source.

Where applicable trace:

`UI → frontend state/view model → client/API → backend endpoint → service/domain authority → persistence/external owner`.

Do not call something a frontend defect merely because it is visible in the frontend. Determine whether the root cause belongs to frontend mapping, backend projection, canonical contract, provider configuration, environment or another owning module.

#### G0.3 — Source-of-Truth Freeze

Before G1 implementation, publish a source-of-truth matrix covering material data and actions.

For each product concept identify:

- canonical owner;
- read authority;
- mutation authority;
- frontend consumer;
- compatibility/legacy projection if any;
- whether compatibility code may remain and under what boundary.

G0 ends only when Product can distinguish canonical authority, implementation reality, compatibility debt and genuine open dependencies.

### 3.2 G1 — Functional Reconciliation

**Goal:** make the implemented product behave correctly before visual redesign.

G1 fixes deterministic product defects and architecture/contract drift found in G0.

Typical G1 scope includes:

- canonical runtime cutover;
- complete persisted-state hydration;
- correct lifecycle/capability consumption;
- role/ownership enforcement;
- validation behavior and product-facing error copy;
- edit/re-entry flows;
- canonical identifiers and relationships;
- removal/isolation of legacy authority;
- missing local states;
- safe provider boundaries;
- focused regression tests.

G1 MUST NOT use visual redesign to conceal incorrect behavior.

If a required external provider is unavailable, create or preserve the correct provider boundary, classify the dependency and continue independent work. Do not invent provider output.

### 3.3 G2 — UX and Information Architecture Freeze

**Goal:** decide the final product composition before visual generation/integration.

G2 determines:

- information hierarchy;
- screen/workspace composition;
- progressive disclosure;
- action placement;
- state presentation;
- responsive composition;
- component reuse strategy;
- approved copy boundaries.

G2 may reuse an already frozen product composition. It MUST NOT reopen canonical domain semantics merely because a different layout appears convenient.

The output of G2 becomes the composition brief for G3/G4.

### 3.4 G3 — Visual Reference / Stitch

**Goal:** obtain or refine visual composition where a visual design pass is required.

G3 is applicable only to UI work that benefits from an approved visual reference. It MAY be marked `NOT_APPLICABLE` when the module already has an approved production composition or is non-visual.

Rules:

- Stitch/generated UI is a **visual donor/reference**, not architectural authority;
- Aurora owns reusable primitives and system behavior;
- canonical product contracts own behavior;
- generated Tailwind/components MUST NOT be transplanted wholesale when they conflict with repository architecture;
- prompts should describe approved G2 composition and required states rather than ask Stitch to invent product semantics.

### 3.5 G4 — Production Integration

**Goal:** reconcile approved visual intent with the real implementation.

G4 integrates selectively into existing architecture.

Prefer:

- existing routes;
- existing canonical state/read models;
- existing API clients;
- executable Aurora primitives;
- existing accessibility/responsive foundations;
- focused component refactors.

Avoid:

- parallel pages for the same product state;
- duplicate domain state;
- generated replacement architectures;
- new local taxonomies/enums that duplicate canonical definitions;
- CSS/formatting churn unrelated to the approved composition.

G4 is complete only when the integrated UI still satisfies G1 functional gates.

### 3.6 G5 — Manual Product Acceptance

**Goal:** prove the product behaves correctly as a user experiences it.

G5 combines automated checks with manual runtime verification.

Where applicable verify:

- primary actor workflows;
- role-specific views/actions;
- refresh and navigation re-entry;
- lifecycle transitions;
- error/retry behavior;
- blocked and terminal states;
- responsive behavior;
- empty/loading/degraded states;
- realtime invalidation/refetch behavior;
- canonical copy and validation;
- browser console/network errors material to the flow.

A check MUST NOT be reported as passed unless it actually ran.

If a scenario cannot be executed because of an external dependency, mark it `BLOCKED_EXTERNAL` or `BLOCKED_ENVIRONMENT`; do not convert it to PASS.

## 4. Finding Classification

Use the smallest useful classification. Module manifests may add module-specific categories but SHOULD reuse these global categories where possible.

| Classification | Meaning |
|---|---|
| `FUNCTIONAL_DEFECT` | Implemented user/system behavior is incorrect. |
| `CONTRACT_DRIFT` | Implementation no longer matches the applicable canonical/executable contract. |
| `LEGACY_AUTHORITY` | Legacy/compatibility code incorrectly shapes new canonical behavior. |
| `HYDRATION_GAP` | Persisted/authoritative state is not fully reconstructed in the consuming layer. |
| `STATE_MODEL_GAP` | Required loading/empty/error/blocked/terminal/degraded state is absent or incorrectly modeled. |
| `VALIDATION_UX_DEFECT` | Validation timing, scope or user-facing message is incorrect despite valid structural validation. |
| `UX_IA_DEFECT` | Information/action composition is materially inconsistent with approved product intent. |
| `COPY_DEFECT` | UI text conflicts with approved copy or leaks implementation/debug language. |
| `RESPONSIVE_DEFECT` | Required behavior/composition fails across supported viewport(s). |
| `DESIGN_SYSTEM_DRIFT` | Local UI duplicates or conflicts with Aurora/system primitives. |
| `COMPATIBILITY_DEBT` | Compatibility code remains intentionally but must be bounded and non-authoritative. |
| `DEFERRED_OWNER` | Capability belongs to another module and should be represented, linked or deferred rather than recreated here. |
| `PROVIDER_BLOCKER` | Correct behavior depends on an external provider/configuration that is not currently available. |
| `ENVIRONMENT_BLOCKER` | Runtime acceptance is blocked by local/staging infrastructure rather than product code. |
| `AUTHORITY_CONFLICT` | Material equal/competing authority sources disagree and ownership/precedence cannot resolve the decision safely. |

Do not use `AUTHORITY_CONFLICT` for ordinary reversible engineering choices. Follow the autonomy rules in `AI_ENGINEERING_STANDARD.md`.

## 5. Mandatory Finding Record

A material G0 finding SHOULD include:

```text
ID:
Surface:
Observed behavior:
Expected canonical behavior:
Exact component/file/service:
Current data/state source:
Canonical authority:
Backend/API authority:
Legacy/compatibility dependency:
Root cause:
Classification:
Fix scope:
Backend change required: YES / NO / UNKNOWN
Visual reference required: YES / NO / UNKNOWN
Product decision required: YES / NO
Priority:
Evidence/verification:
```

If root cause has not been demonstrated, write `INVESTIGATION_REQUIRED`; do not guess.

## 6. Authority and Ownership Rules During Phase G

Phase G MUST preserve the authority model in `AI_ENGINEERING_STANDARD.md`.

Additionally:

- canonical module contracts define domain semantics;
- accepted backend runtime is implementation reality, not permission to redefine product semantics;
- accepted frontend runtime is implementation reality, not domain authority;
- compatibility projections may remain only behind an explicit boundary;
- frontend MUST NOT infer backend-owned lifecycle/capability truth when an authoritative projection exists;
- a consuming module MUST NOT recalculate another module's canonical Intelligence, financial, lifecycle or identity truth;
- generated visual references never outrank contracts or Aurora;
- historical branches and reconciliation notes are evidence unless explicitly designated canonical.

If competing sources cannot be resolved through declared ownership/precedence, record `AUTHORITY_CONFLICT` and stop that semantic decision for Product review.

## 7. Environment Readiness

### 7.1 G0 Minimum

G0 source/reality audit MUST NOT be blocked merely because a full runtime environment is unavailable.

Minimum G0 readiness:

- Git/repository access;
- exact approved refs/SHAs;
- ability to search/read the relevant repositories;
- AI agent/editor access;
- module-specific authority manifest.

Runtime execution is useful when available but is not a prerequisite for source-level G0.

### 7.2 G1–G5 Runtime Readiness

Before claiming runtime acceptance, prepare the minimum isolated environment necessary for the module. As applicable:

- repository-approved Node/npm versions;
- clean dependency install;
- local backend/frontend processes;
- isolated local PostgreSQL/database;
- approved migrations;
- deterministic QA identities/fixtures;
- browser access;
- websocket/realtime connectivity;
- provider mocks/stubs or explicitly configured test providers;
- focused test commands;
- typecheck/build/lint where applicable.

Record actual tool/runtime versions used for acceptance when environment variance could affect results.

### 7.3 Local-First Safety

Unless explicitly approved otherwise, Phase G MUST use local/test infrastructure.

Do not during ordinary Phase G:

- connect to or mutate production databases;
- run production migrations;
- use production payment rails;
- send real customer/creator emails;
- write test assets to production storage;
- trigger real publishing/social actions;
- deploy to production;
- rotate or expose production secrets.

Placeholder credentials may be used only where the local application requires a non-empty configuration value and the corresponding external action is not executed.

## 8. Test and Acceptance Discipline

Phase G validation should be proportional to risk.

A typical module gate may include:

- focused unit/domain tests;
- focused integration tests;
- regression tests for reproduced defects;
- Prisma/schema validation when persistence changes;
- typecheck;
- production build;
- lint where materially relevant;
- manual browser/API acceptance;
- responsive verification;
- backend regression checks protecting cross-module boundaries.

Record `PASS`, `FAIL`, `BLOCKED_EXTERNAL`, `BLOCKED_ENVIRONMENT` or `NOT_APPLICABLE` rather than vague completion language.

Do not treat a test harness mock as proof of a real provider integration unless the gate explicitly concerns the boundary rather than the provider itself.

## 9. Git and Branch Discipline

Before Phase G work:

- freeze the accepted implementation SHA;
- create a dedicated Phase G branch from that exact SHA;
- record the branch/ref in the module manifest or baseline artifact.

During G0, source code SHOULD remain unchanged; documentation-only audit artifacts may be committed when scoped.

During G1–G4:

- keep each accepted subphase as a coherent commit/branch checkpoint;
- do not mix unrelated dependency upgrades/refactors;
- do not auto-merge merely because automated checks pass;
- preserve traceability from finding → fix → regression evidence.

A module-specific prompt may impose stricter stop/commit rules.

## 10. AI Agent Operating Rules

For Phase G tasks the agent MUST:

1. verify baseline refs before work;
2. read this standard and the module manifest;
3. load only the minimum sufficient authoritative context;
4. inspect existing implementation before proposing replacement;
5. trace visible defects to root ownership;
6. distinguish canonical behavior, implementation reality, compatibility debt and external blockers;
7. avoid product-policy invention;
8. avoid visual redesign before functional reconciliation;
9. stop at explicit Product semantic gates;
10. report what actually ran and what remains blocked.

The agent SHOULD resolve ordinary reversible engineering details autonomously within the frozen boundaries.

## 11. Phase Exit Gates

### G0 exit

- baseline frozen;
- whole module audited;
- root causes/material ownership traced;
- source-of-truth matrix frozen;
- authority conflicts/open dependencies listed;
- G1 implementation clusters proposed.

### G1 exit

- material deterministic functional/contract defects resolved or explicitly blocked/deferred;
- canonical hydration/lifecycle/action ownership works;
- focused regression checks pass;
- known functional defects are not intentionally carried into visual design.

### G2 exit

- final information architecture/composition/state presentation approved;
- copy and component reuse boundaries identified;
- visual-reference scope decided.

### G3 exit

- approved visual references exist for required surfaces/states, or phase is documented not applicable;
- references do not redefine product behavior.

### G4 exit

- approved composition integrated into production architecture;
- Aurora/repository patterns respected;
- G1 functional gates remain green.

### G5 exit

- required automated and manual acceptance executed;
- material role/lifecycle/state/responsive scenarios pass;
- remaining blockers/deferred owners explicitly recorded;
- exact accepted frontend/backend/source refs recorded for handoff.

## 12. Definition of Phase G Complete

A module is Phase-G complete only when Product can answer, with evidence:

- **What is canonical?**
- **What code implements it?**
- **What legacy compatibility remains and why is it safe?**
- **Which states/actions were actually tested?**
- **Which dependencies are external or intentionally deferred?**
- **Which exact repository commits constitute the accepted product-ready baseline?**

If any of those answers materially depend on assumption rather than an identified authority or executed verification, Phase G is not complete.