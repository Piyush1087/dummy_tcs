# Creator Shop Module Development Operating System

## Human + AI Product, Engineering, Design and Release Operating Model

**Document type:** Principal Standard  
**Version:** 1.0-draft  
**Status:** FOUNDATIONAL — all role contracts, lifecycle stage standards, templates, agent instructions and repository conventions in this branch should derive from this document  
**Applies to:** Creator Shop product modules and cross-module capabilities  
**Reference implementations:** Campaign / Create Campaign / Campaign Page and Collaboration  

---

## 1. Purpose

Creator Shop will use a controlled, contract-driven module lifecycle in which product truth is progressively converted into domain contracts, backend authority, frontend behavior, validated runtime, UX authority, visual design, production UI reconciliation and finally canonical engineering source.

The target lifecycle is:

```text
PRODUCT INTENT
      ↓
PRODUCT / DOMAIN AUTHORITY
      ↓
DATA + STATE CONTRACTS
      ↓
IMPLEMENTATION REALITY AUDIT
      ↓
AUTHORITY FREEZE
      ↓
BACKEND IMPLEMENTATION
      ↓
FRONTEND FUNCTIONAL IMPLEMENTATION
      ↓
RUNTIME FUNCTIONAL ACCEPTANCE
      ↓
UX / INFORMATION ARCHITECTURE
      ↓
VISUAL DESIGN
      ↓
PRODUCTION UI RECONCILIATION
      ↓
RUNTIME + VISUAL QA
      ↓
RELEASE CANDIDATE
      ↓
GIT INTEGRATION
      ↓
DEVELOPER / OPERATIONS HANDOFF
```

Every stage must have:

- an explicit owner;
- defined input authority;
- defined outputs;
- acceptance criteria;
- stop conditions;
- a repository location;
- a review gate;
- machine-readable status where practical;
- a human or AI worker capable of performing the role.

The workflow is therefore **role-based rather than person-dependent**.

---

# 2. Core Operating Philosophy

## 2.1 Separate authority from evidence

Every meaningful artifact must be classified.

### Authority

An artifact that is permitted to define product or implementation truth.

Examples:

- accepted product contract;
- lifecycle specification;
- canonical Zod/domain schema;
- accepted Prisma schema;
- API contract;
- accepted UX authority matrix;
- approved design system;
- current canonical implementation branch.

### Evidence

Useful information that may reveal requirements, defects or intent but cannot independently change product truth.

Examples:

- old UI;
- prototype;
- screenshot;
- historical code;
- legacy database schema;
- prior Zod draft;
- old API;
- Stitch-generated HTML;
- rejected design;
- developer experiment.

### Reference

Approved material that guides a particular layer but does not own another layer.

Example: a Stitch screen may be visual authority while having no authority over lifecycle, API fields or database ownership.

This distinction is foundational to the operating system.

---

# 3. Authority Hierarchy

Every module must publish an explicit authority hierarchy.

Default hierarchy:

```text
1. Accepted Product / Domain Contract
2. Accepted later amendments to that contract
3. Canonical Data + State Contracts
4. Accepted Backend Capability Contract
5. Accepted Frontend Functional Contract
6. Accepted UX / IA Contract
7. Design System
8. Approved Visual Design References
9. Current implementation evidence
10. Historical / legacy evidence
```

A lower layer may not silently override a higher layer.

Examples:

- Frontend cannot invent a lifecycle state.
- Backend cannot reinterpret an unresolved Product rule.
- Stitch cannot invent a metric.
- Historical database rows cannot create canonical ownership.
- A more polished UI cannot override backend capability.
- An AI worker cannot resolve a consequential Product decision merely to continue execution.

---

# 4. Organizational Role Model

Creator Shop should define **roles**, not individuals.

One person may fill several roles. An AI worker may fill a role when a human worker is unavailable. The authority, outputs and acceptance contract remain the same.

## 4.1 Product Manager / Product Owner

### Owns

- user problem;
- business logic;
- product terminology;
- lifecycle;
- states;
- permissions;
- ownership boundaries;
- cross-module responsibility;
- commercial rules;
- deferred scope;
- acceptance intent.

### Does not own

- implementation method;
- database indexing;
- component architecture;
- infrastructure mechanics.

### Primary outputs

- Module Charter;
- Product Contract;
- Domain Glossary;
- Lifecycle Matrix;
- Capability Matrix;
- Ownership Matrix;
- Deferred Scope Register;
- Product Acceptance Criteria.

### AI equivalent

**Product Authority Worker**

The worker may analyse, normalize, identify contradictions, produce decision options and maintain artifacts. It must not silently make consequential Product decisions unless delegated authority explicitly permits it.

---

## 4.2 Product / Systems Architect

This role converts accepted Product intent into structured technical authority without prematurely choosing UI or implementation details.

### Owns

- conversion of Product logic into structured contracts;
- domain boundaries;
- schema consistency;
- state-model consistency;
- frontend/backend contract alignment;
- compatibility policy;
- migration strategy;
- module-to-module ownership.

### Typical artifacts

- canonical Zod schemas;
- domain schemas;
- API shape proposals;
- state diagrams;
- data ownership maps;
- compatibility rules;
- invariants;
- reconciliation plans.

### AI equivalent

**Domain Contract Worker**

---

## 4.3 Backend Engineer

### Owns

- persistence;
- schema;
- migrations;
- services;
- authorization;
- transactional integrity;
- backend capabilities;
- canonical reads/writes;
- API behavior;
- compatibility boundaries;
- backend tests.

### Does not own

- visual behavior;
- Product semantics;
- UX information hierarchy.

### AI equivalent

**Backend Engineering Worker**

---

## 4.4 Frontend Engineer

### Owns

- consumption of backend authority;
- client contracts;
- state hydration;
- functional components;
- interaction wiring;
- capability-driven controls;
- error/recovery behavior;
- responsive implementation;
- accessibility;
- frontend tests.

### Does not own

- backend state;
- data ownership;
- lifecycle invention;
- visual redesign outside accepted design authority.

### AI equivalent

**Frontend Engineering Worker**

---

## 4.5 UI / UX Manager

### Owns

- information architecture;
- user mental model;
- hierarchy;
- task flows;
- screen/state inventory;
- progressive disclosure;
- mobile adaptation;
- UX acceptance;
- design brief preparation.

### Does not own

- business rules;
- backend state;
- financial logic;
- database fields.

### AI equivalent

**UX Authority Worker**

---

## 4.6 Visual Design Worker

Current execution may use:

```text
UX Manager / AI Supervisor
        ↓
Codex
        ↓
Stitch
```

### Owns

- visual composition;
- hierarchy;
- spacing;
- density;
- component presentation;
- responsive arrangement;
- polished interaction presentation.

### Boundary

Generated visual code is reference material, not production authority.

---

## 4.7 QA / Runtime Validation Engineer

### Owns

- functional acceptance;
- deterministic test execution;
- integration checks;
- runtime fixtures;
- desktop/mobile verification;
- negative-path validation;
- authorization tests;
- degraded/unavailable-state validation;
- regression reporting.

### AI equivalent

**Acceptance & Regression Worker**

Where practical, this should be separate from the worker that implemented the feature.

---

## 4.8 Integration / Release Engineer

### Owns

- branch ancestry;
- clean integration;
- merge-base verification;
- commits;
- release candidate freeze;
- push;
- development integration;
- migration execution planning;
- release notes;
- handoff.

### AI equivalent

**Integration Worker**

This role receives no Product-design authority.

---

## 4.9 AI Supervisor / Orchestrator

The Supervisor coordinates role workers and gate progression.

### Owns

- worker allocation;
- authority loading;
- stage sequencing;
- result review;
- stop/continue decisions;
- bounded task generation;
- cross-worker handoff;
- detection of scope creep;
- gate enforcement.

It should not normally be the primary production-code author.

Conceptually:

```text
                 PRODUCT OWNER
                       │
                       ▼
                 ORCHESTRATOR
                       │
       ┌───────────────┼────────────────┐
       ▼               ▼                ▼
Domain Worker    Backend Worker     UX Worker
       │               │                │
       └───────────────┼────────────────┘
                       ▼
                 Frontend Worker
                       │
                       ▼
                 Validation Worker
                       │
                       ▼
                 Integration Worker
```

---

# 5. Standard Module Lifecycle

Historical Phase-G work is a reference implementation of this lifecycle. New modules should prefer descriptive stage names even if legacy modules retain G0/G1/G2 terminology for traceability.

---

# STAGE 0 — Module Intake

## Objective

Define what is being built and where its boundaries lie.

## Inputs

- Product concept;
- existing mockups;
- current UI;
- current backend;
- old schema;
- Zod drafts;
- user journeys;
- related modules;
- known constraints.

## Output

`00_module_charter.md`

Containing:

- module purpose;
- actors;
- outcomes;
- in-scope;
- out-of-scope;
- dependent modules;
- terminology;
- success criteria.

## Gate

`MODULE_SCOPE_ACCEPTED`

No implementation starts before this gate.

---

# STAGE 1 — Product & Domain Definition

## Objective

Turn product discussion into structured, implementation-independent authority.

## Questions

- What entities exist?
- Who owns each entity?
- What states exist?
- What transitions exist?
- What actions are permitted?
- What data is required?
- What is derived?
- What is immutable?
- What is optional?
- What belongs to another module?
- What is deferred?
- What constitutes success or failure?

## Outputs

```text
01_product_contract.md
02_domain_model.md
03_lifecycle_matrix.md
04_capability_matrix.md
05_ownership_matrix.md
06_error_semantics.md
07_deferred_scope.md
```

Where useful:

```text
schemas/
    canonical-domain.zod.ts
```

## Gate

`PRODUCT_AUTHORITY_FROZEN`

Once frozen, engineering workers may execute without repeatedly reopening Product decisions unless a genuine contradiction is discovered.

---

# STAGE 2 — Implementation Reality Audit

## Objective

Determine what actually exists before changing it.

Compare:

```text
CANONICAL PRODUCT
        vs
CURRENT FRONTEND
        vs
CURRENT BACKEND
        vs
CURRENT DATABASE
        vs
LEGACY IMPLEMENTATION
```

## Standard finding vocabulary

```text
ALIGNED
MISSING_IMPLEMENTATION
LEGACY_CONTRACT_LEAKAGE
RUNTIME_CONTRACT_DEFECT
FRONTEND_INTEGRATION_DEFECT
BACKEND_INTEGRATION_DEFECT
UX_DEBT
MIGRATION_REQUIRED
DEFERRED_OWNER
PRODUCT_DECISION_REQUIRED
```

## Outputs

```text
08_reality_audit.md
09_gap_register.md
10_migration_compatibility_analysis.md
```

## Gate

Either:

`READY_FOR_AUTHORITY_FREEZE`

or:

`PRODUCT_DECISION_REQUIRED`

---

# STAGE 3 — Engineering Authority Freeze

## Objective

Convert Product authority plus reality-audit evidence into an exact engineering destination.

## Freeze

- canonical entity ownership;
- compatibility policy;
- migration policy;
- API boundaries;
- lifecycle semantics;
- cross-module responsibilities;
- frontend/backend authority;
- prohibited legacy behavior.

## Output

`11_engineering_authority_freeze.md`

## Gate

`IMPLEMENTATION_AUTHORIZED`

---

# STAGE 4 — Backend Foundation

## Objective

Make backend truth correct before asking the frontend to represent it.

## Typical work

```text
Prisma schema
      ↓
Migrations
      ↓
DTOs
      ↓
Services
      ↓
Authorization
      ↓
Commands / Queries
      ↓
Controllers
      ↓
Backend tests
```

## Principle

Backend should expose capability and authoritative state rather than require frontend inference.

Prefer projections such as:

```text
availableActions
readiness
workspaceAvailability
permissions
```

over client-side guessing from lifecycle strings.

## Key checks

- ownership isolation;
- foreign-key integrity;
- idempotency;
- concurrency;
- transaction safety;
- cross-module boundaries;
- read-only GET behavior;
- compatibility behavior;
- migration integrity;
- truthful unavailable states.

## Gate

`BACKEND_CONTRACT_ACCEPTED`

---

# STAGE 5 — Frontend Functional Integration

## Objective

Build a correct frontend consumer of backend authority before major visual redesign.

## Typical order

```text
Types / contracts
      ↓
API client
      ↓
Mappers
      ↓
State hydration
      ↓
Capabilities
      ↓
Functional components
      ↓
Error/recovery
      ↓
Responsive functionality
      ↓
Frontend tests
```

## Principle

The frontend presents authoritative state. It does not create backend truth.

## Gate

`FRONTEND_FUNCTIONALLY_ACCEPTED`

---

# STAGE 6 — Integrated Runtime Acceptance

## Objective

Prove backend + frontend function as a real product before visual redesign.

## Automated validation

- unit;
- service;
- contract;
- authorization;
- integration;
- regression.

## Runtime validation

- real application shell;
- representative user;
- representative records;
- normal flows;
- negative flows;
- compatibility;
- error/retry;
- degraded dependencies;
- mobile.

## Output

`12_consolidated_functional_acceptance.md`

It should record:

- environment;
- exact repository SHAs;
- scenarios executed;
- tests passed;
- failures;
- retained debt;
- deferred external dependencies.

## Gate

`FUNCTIONAL_BASELINE_FROZEN`

UX work after this point must not silently regress this protected behavior.

---

# STAGE 7 — UX / Information Architecture

## Objective

Transform technically correct behavior into a coherent product experience.

## Inputs

- Product authority;
- functional runtime;
- screenshots of current implementation;
- state inventory;
- design system.

Current runtime screenshots are evidence of UX debt, not design authority.

## Outputs

```text
13_surface_ownership_freeze.md
14_information_architecture.md
15_submodule_ux_contracts.md
16_state_matrix.md
17_mobile_matrix.md
18_visual_design_authority_matrix.md
```

## Resolve

- information hierarchy;
- page mental model;
- permanent vs contextual content;
- workspace structure;
- progressive disclosure;
- primary actions;
- empty states;
- unavailable states;
- error states;
- terminal states;
- mobile transformations.

## Gate

`UX_AUTHORITY_FROZEN`

---

# STAGE 8 — Visual Design

Current Creator Shop execution uses Stitch through Codex/MCP. Future tools may replace Stitch without changing this lifecycle contract.

## Objective

Create traceable design references from frozen UX authority.

## Operating pattern

```text
Platform grounding
        ↓
Module grounding
        ↓
Representative base
        ↓
Human/AI review
        ↓
Material variants
        ↓
Mobile adaptation
        ↓
Artifact freeze
```

## Rule

Do not generate an entire module blindly. Start with the representative state that establishes the visual grammar, approve it, and derive sibling states.

## Required artifact identity

Every approved screen should record:

```text
module
surface
state
viewport
project ID
screen ID
parent screen ID
prompt version
context version
artifact location
review status
```

## Artifact gate vocabulary

```text
APPROVED_REFERENCE
REVISION_REQUIRED
REJECTED
```

## Overall gate

`VISUAL_AUTHORITY_FROZEN`

---

# STAGE 9 — Production UI Reconciliation

## Objective

Convert accepted visual intent into production architecture without replacing the protected functional baseline.

The correct formula is:

```text
FUNCTIONALLY ACCEPTED FRONTEND
          +
APPROVED VISUAL AUTHORITY
          +
PRODUCTION DESIGN SYSTEM
          ↓
FINAL FRONTEND
```

Not:

```text
GENERATED HTML
      ↓
PRODUCTION
```

## Visual-delta classification

```text
KEEP_EXISTING
ADOPT_DESIGN
ADAPT_DESIGN
REJECT_DESIGN
```

`ADAPT_DESIGN` will often be the correct result.

## Preserve

- backend contracts;
- API clients;
- state wiring;
- accessibility;
- routing;
- error recovery;
- tests;
- design-system components;
- AppShell behavior.

## Gate

`UI_RECONCILIATION_ACCEPTED`

---

# STAGE 10 — Responsive & Density Optimization

## Objective

Make the reconciled product usable in realistic viewport constraints.

Representative checks should include module-appropriate desktop and mobile viewports, for example:

```text
Desktop: 1440 × 900
Mobile: 390 × 844
Narrow mobile: 360 × 800
```

## Review

- usable workspace area;
- vertical density;
- overflow;
- action reachability;
- safe areas;
- keyboard;
- browser chrome;
- drawers/sheets;
- mobile navigation;
- information preservation.

Compactness must not destroy Product hierarchy or accessibility.

## Gate

`RESPONSIVE_RUNTIME_ACCEPTED`

---

# STAGE 11 — Release Candidate Verification

## Objective

Treat the cumulative diff as a release candidate and verify it independently where practical.

## Backend gate

- focused tests;
- broader relevant tests;
- Prisma validate;
- Prisma generate;
- authorization;
- migration audit;
- TypeScript;
- ESLint;
- production build;
- diff check;
- lockfile check.

## Frontend gate

- focused tests;
- broader relevant tests;
- typecheck;
- ESLint;
- production build;
- diff check;
- responsive runtime;
- accessibility;
- visual comparison.

## Cross-module regression

Validate modules indirectly affected by the change.

Examples:

```text
Campaign → Collaboration
Campaign → Brand Centre
Application → Collaboration
Create Campaign → Campaign Page
Collaboration → Payouts
```

## Gate

`RELEASE_CANDIDATE_ACCEPTED`

---

# STAGE 12 — Git Integration

## Objective

Convert accepted work into canonical engineering history.

## Required preflight

Record:

```text
source branch
source SHA
target branch
target SHA
merge-base
source-only commits
target-only commits
working-tree status
verification status
```

## Preferred integration hierarchy

1. fast-forward;
2. clean merge where genuinely required;
3. bounded cherry-pick where explicitly planned.

Avoid unnecessary history rewriting. Never force-push shared canonical branches without extraordinary, explicit authorization.

## Gate

`DEVELOPMENT_INTEGRATION_COMPLETE`

---

# STAGE 13 — Engineering Handoff

## Objective

Allow another engineer or AI worker to continue without needing the originating conversations.

The handoff should document:

### Canonical implementation

- frontend repository;
- branch;
- SHA;
- backend repository;
- branch;
- SHA.

### Major architectural changes

What changed and why.

### Key source locations

Files and directories future maintainers must understand.

### Database

- migrations;
- ordering;
- unapplied migrations;
- production implications.

### Design

What remains reference-only.

### Deferred dependencies

What is intentionally not implemented.

### Validation

Exactly what has passed.

### Deployment boundary

Always distinguish:

```text
CODE INTEGRATED
≠
DEPLOYED
≠
DATABASE MIGRATED
```

## Gate

`MODULE_ENGINEERING_HANDOFF_COMPLETE`

---

# 6. Standard Stage Artifact Contract

Every lifecycle stage should use a common metadata header.

```text
Stage:
Module:
Owner:
Worker type: HUMAN | AI | HYBRID
Status:
Input authority:
Starting repository refs:
Objective:
In scope:
Out of scope:
Required outputs:
Validation:
Known debt:
Stop conditions:
Next authorized stage:
Final repository refs:
```

This is the basis for transferable work between humans and AI agents.

---

# 7. Definition of Ready

A worker may begin a stage only when:

- owning authority exists;
- exact version/commit is known;
- required inputs are accessible;
- unresolved Product decisions affecting the stage are zero;
- scope is bounded;
- expected outputs are explicit;
- stop conditions are defined;
- write permissions are understood.

---

# 8. Definition of Done

A stage is not complete merely because code or documentation was produced.

A stage is complete when:

```text
required artifact exists
+
required implementation exists where applicable
+
required checks pass
+
known debt is recorded
+
authority conflicts = zero
+
next-stage gate explicitly passes
```

---

# 9. Repository Architecture Principle

Do not create one Git repository per organizational role. That fragments authority.

Use a **Control Plane + Execution Plane** architecture.

## 9.1 Product / Delivery Control Plane

`dummy_tcs` currently performs much of this function and will be evolved deliberately rather than replaced prematurely.

Recommended eventual module structure:

```text
modules/
├── campaign/
│   ├── 00-intake/
│   ├── 01-product/
│   ├── 02-domain/
│   ├── 03-reality-audit/
│   ├── 04-engineering-authority/
│   ├── 05-acceptance/
│   ├── 06-ux/
│   ├── 07-design/
│   ├── 08-reconciliation/
│   └── 09-release/
├── collaboration/
└── ...
```

Global material should live separately, for example:

```text
platform/
├── design-system/
├── app-shell/
├── architecture/
├── engineering-standards/
├── agent-standards/
├── test-standards/
└── release-standards/
```

The exact migration from the existing `dummy_tcs` layout must be designed from actual Campaign and Collaboration artifacts before changing historical paths.

## 9.2 Backend Execution Plane

The deployable backend repository owns runtime backend implementation and repository-specific engineering documentation.

## 9.3 Frontend Execution Plane

The deployable frontend repository owns runtime frontend implementation and repository-specific engineering documentation.

## 9.4 Design Library

The design library may remain inside the Product Control Plane initially. Every approved design must retain provenance and supersession history.

---

# 10. Module Manifest

Every module should eventually have a machine-readable manifest.

Example:

```yaml
module: collaboration
status: RELEASE_CANDIDATE

product_authority:
  version: 3

backend:
  repo: creator-commerce-backend-v2
  canonical_branch: development
  accepted_sha: <sha>

frontend:
  repo: creator-commerce-frontend-v2
  canonical_branch: development
  accepted_sha: <sha>

ux:
  authority_version: 2

design:
  project: Collaboration Codex
  registry_version: 4

dependencies:
  - campaign
  - payouts

deferred:
  - settlement_adapter
  - relationship_history

next_gate:
  type: PRODUCTION_DEPLOYMENT
```

This manifest should become the first artifact read by human and AI workers entering a module.

---

# 11. AI Worker Architecture

Workers should be role-scoped rather than implemented as one unrestricted autonomous agent.

Recommended worker set:

```text
PM-AI
Domain-AI
Backend-AI
Frontend-AI
UX-AI
Design-Orchestrator-AI
QA-AI
Integration-AI
Supervisor-AI
```

---

# 12. Standard AI Worker Contract

Each worker receives:

## Identity

```text
You are the <ROLE> worker for <MODULE>.
```

## Authority

Exact documents, branches and SHAs.

## Responsibilities

What the worker owns.

## Non-responsibilities

What the worker may not reinterpret.

## Tool permissions

Example:

```text
READ GitHub
WRITE isolated worktree
NO production DB
NO deployment
NO canonical-branch push
```

## Required output

A structured stage report.

## Stop conditions

Conditions requiring control to return to the supervisor or Product Owner.

The same role can therefore transfer between:

```text
Human → AI
AI → Human
AI Worker A → AI Worker B
```

without redefining the underlying process.

---

# 13. Worker Handoff Protocol

Every handoff must answer:

```text
1. What authority governs this work?
2. What has already been accepted?
3. What changed in this stage?
4. What remains unresolved?
5. What exact repository state exists?
6. What must the next worker preserve?
7. What is the next authorized action?
```

No worker should need to reconstruct project history from chat transcripts.

Chats are working memory. Repositories are organizational memory.

---

# 14. Supervisor State Machine

The Supervisor should advance modules through explicit gates.

```text
PRODUCT_AUTHORITY_FROZEN
        ↓
assign Backend Worker
        ↓
BACKEND_CONTRACT_ACCEPTED
        ↓
assign Frontend Worker
        ↓
FRONTEND_FUNCTIONALLY_ACCEPTED
        ↓
assign Validation Worker
        ↓
FUNCTIONAL_BASELINE_FROZEN
        ↓
assign UX Worker
        ↓
UX_AUTHORITY_FROZEN
        ↓
assign Design Worker
        ↓
VISUAL_AUTHORITY_FROZEN
        ↓
assign Frontend Reconciliation Worker
        ↓
UI_RECONCILIATION_ACCEPTED
        ↓
assign QA Worker
        ↓
RELEASE_CANDIDATE_ACCEPTED
        ↓
assign Integration Worker
```

The orchestrator advances only when the current gate passes.

---

# 15. Parallelization Model

Not every stage must be strictly serial once Product authority is frozen.

A representative model:

```text
                    PRODUCT FREEZE
                          │
          ┌───────────────┼──────────────────┐
          ▼               ▼                  ▼
    Backend design    UX planning      Test planning
          │               │                  │
          ▼               │                  │
    Backend build         │                  │
          │               │                  │
          └───────┐       │                  │
                  ▼       ▼                  │
              API freeze  UX freeze          │
                  │       │                  │
                  ▼       │                  │
              Frontend functional build      │
                  │                          │
                  └────────────┬─────────────┘
                               ▼
                       Runtime acceptance
                               │
                               ▼
                         Visual design
```

UX exploration may begin early, but final UX authority must not depend on capabilities the accepted backend contract cannot provide.

---

# 16. Change Classification

After a module is accepted, every new request should be classified before implementation.

## PRODUCT_CHANGE

Changes canonical behavior. Requires Product authority reopening.

## CONTRACT_CHANGE

Changes API/schema/state contract without materially changing core Product intent. Requires Product + engineering review.

## IMPLEMENTATION_CHANGE

Same contract, different implementation. Engineering-owned.

## UX_CHANGE

Same Product behavior, different presentation or flow. UX-owned.

## VISUAL_CHANGE

Pure presentation. Design-owned.

## BUG

Implementation violates accepted authority. No Product redesign required.

## DEFERRED_CAPABILITY_ACTIVATION

A previously approved but unavailable owner/provider becomes implemented. Requires integration review and may not require Product redesign.

This classification prevents unnecessary reopening of the full lifecycle.

---

# 17. Autonomous Development Model

The long-term objective is not simply that AI can write an entire module.

The meaningful objective is:

> Once Product authority is frozen, the remaining lifecycle can progress through deterministic worker contracts and gates with minimal human intervention.

## Level 0 — AI Assistant

AI advises humans. Humans execute.

## Level 1 — Bounded AI Worker

AI receives one explicit task and returns control after completion.

## Level 2 — Stage-Autonomous Worker

AI receives an entire accepted stage, may iterate internally until the stage checks pass, and then stops at the gate.

## Level 3 — Multi-Agent Module Delivery

A Supervisor coordinates specialized workers such as Backend-AI, Frontend-AI, QA-AI, UX-AI and Integration-AI. Product intervenes at Product decisions and major acceptance gates.

## Level 4 — Frozen-Contract Autonomous Module

After Product logic is accepted:

```text
Product freeze
      ↓
AI orchestration
      ↓
backend
      ↓
frontend
      ↓
tests
      ↓
UX
      ↓
visual design
      ↓
reconciliation
      ↓
QA
      ↓
release candidate
```

Human review receives a release candidate rather than supervising every implementation step.

## Level 5 — Continuous Autonomous Engineering

Future events such as approved Product-contract changes, backend-contract changes, accepted design-authority changes, regressions or dependency updates can trigger bounded workflows automatically.

Production deployment and destructive/shared database operations remain separately governed even at high autonomy.

---

# 18. Near-Term Human Approval Gates

Until the operating system matures, retain humans at four strategic gates:

```text
GATE A — Product Authority Freeze
GATE B — Consolidated Functional Acceptance
GATE C — UX / Visual Authority Acceptance
GATE D — Release Candidate / Development Integration
```

The work between these gates can progressively become autonomous.

---

# 19. Quality Model

Every module should be assessed independently across:

```text
PRODUCT CORRECTNESS
DOMAIN CORRECTNESS
SECURITY / OWNERSHIP
FUNCTIONAL CORRECTNESS
UX CORRECTNESS
VISUAL / RESPONSIVE QUALITY
INTEGRATION SAFETY
```

A module is not accepted merely because most dimensions are strong. Each applicable gate must pass.

---

# 20. Traceability Model

Every important capability should ultimately be traceable through:

```text
Product requirement
      ↓
Domain contract
      ↓
Backend implementation
      ↓
API
      ↓
Frontend state
      ↓
UX surface
      ↓
Visual reference
      ↓
Automated/runtime acceptance
      ↓
Final Git commit
```

This creates an auditable chain from why something exists to where it runs.

---

# 21. Organizational Memory Principle

Chats must not remain the primary source of continuity.

Use conversations for reasoning. At every freeze point, move the accepted result into the appropriate repository.

```text
CHAT
= reasoning workspace

PRODUCT / CONTROL-PLANE REPOSITORY
= authority memory

FRONTEND / BACKEND REPOSITORIES
= implementation memory

DESIGN LIBRARY
= visual memory

TESTS / ACCEPTANCE RECORDS
= verification memory

GIT HISTORY
= change memory
```

This is the foundation for human ↔ AI worker substitution.

---

# 22. Minimum Documentation Package for a Mature Module

A mature module should eventually expose an equivalent of:

```text
00_module_manifest
01_module_charter
02_product_contract
03_domain_model
04_lifecycle_matrix
05_capability_matrix
06_ownership_matrix
07_deferred_scope

08_reality_audit
09_gap_register
10_compatibility_migration_policy
11_engineering_authority_freeze

12_backend_contract
13_frontend_state_contract
14_functional_acceptance

15_ux_authority
16_state_mobile_matrix
17_design_handoff
18_design_registry

19_reconciliation_record
20_release_candidate_verification
21_integration_record
22_developer_handoff
```

Not every artifact needs to be long. The purpose is unambiguous authority and transferable execution, not documentation volume.

---

# 23. Reference Lessons from Campaign and Collaboration

The standards derived from the first mature module journeys are:

1. **Product logic must stabilize before visual polish.** Early visual work remains useful evidence but cannot become domain authority.
2. **Existing source must be audited before replacement.** A newer implementation can contain legitimate behavior absent from an older canonical branch.
3. **Backend authority should precede frontend inference.** Frontend should consume state and capabilities instead of reverse-engineering them.
4. **Functional acceptance should precede UX redesign.** This creates a protected behavioral baseline.
5. **Runtime screenshots are strong UX evidence.** They reveal hierarchy, density and responsive problems while remaining subordinate to Product authority.
6. **Visual generation works better from bounded briefs.** Representative base → review → derivatives is safer than mass generation.
7. **Generated design code is not production architecture.** Visual intent must be reconciled into the established frontend.
8. **Mobile requires explicit authority.** It is not a final-pass adaptation.
9. **Compatibility requires explicit policy.** Legacy data must never silently become canonical truth.
10. **Final Git integration is a separate engineering stage.** Passing tests does not itself authorize commit, push, migration or deployment.

Campaign and Collaboration artifacts will be used as evidence while deriving detailed standards from this principal document.

---

# 24. Target Operating State

```text
                    PRODUCT OWNER
                         │
                discusses/finalizes
                  Product logic
                         │
                         ▼
                PRODUCT CONTROL PLANE
                         │
                         ▼
                    ORCHESTRATOR
                         │
      ┌──────────────────┼───────────────────┐
      │                  │                   │
      ▼                  ▼                   ▼
 DOMAIN WORKER      BACKEND WORKER       UX WORKER
      │                  │                   │
      │                  ▼                   │
      │           BACKEND GATE               │
      │                  │                   │
      └──────────────┐   │   ┌───────────────┘
                     ▼   ▼   ▼
                  FRONTEND WORKER
                         │
                         ▼
                  FUNCTIONAL QA
                         │
                         ▼
                   DESIGN WORKER
                         │
                         ▼
              FRONTEND RECONCILIATION
                         │
                         ▼
                     QA WORKER
                         │
                         ▼
                RELEASE CANDIDATE
                         │
                         ▼
                 PRODUCT APPROVAL
                         │
                         ▼
                INTEGRATION WORKER
                         │
                         ▼
                    DEVELOPMENT
```

The Product Owner increasingly concentrates on:

- what should exist;
- why it should exist;
- consequential trade-offs;
- major acceptance decisions.

Engineering and AI workers increasingly own:

- how accepted requirements are implemented;
- how implementation is validated;
- how evidence is captured;
- how stages are handed off;
- how accepted code is safely integrated.

---

# 25. Strategic End State

The target is not merely an "AI development workflow".

The target is a **Contract-Driven Modular Product Development System** where:

- humans and AI are interchangeable at defined execution roles;
- Product authority is explicit;
- every stage has deterministic inputs and outputs;
- implementation cannot silently redefine Product;
- design cannot silently redefine engineering;
- each worker operates with bounded permissions;
- every decision and artifact is traceable;
- validated stages become reusable organizational memory;
- modules can progressively become autonomous after Product authority is frozen.

---

# 26. Derivation Plan for This Branch

This principal document intentionally defines the operating model before prescribing every lower-level template.

The next documents on this branch should be derived from actual Campaign and Collaboration evidence rather than invented in isolation.

Recommended derivation order:

1. **Repository and authority architecture** — map current `dummy_tcs`, frontend, backend and Stitch-library structures to the Control Plane / Execution Plane model without breaking existing traceability.
2. **Role responsibility matrix** — Product, Systems/Domain, Backend, Frontend, UX, Visual Design, QA, Integration and Supervisor; include Human/AI substitution rules and RACI-style boundaries.
3. **Lifecycle stage standard** — a reusable specification for every stage: objective, inputs, outputs, checks, stop conditions and gate vocabulary.
4. **Module Manifest standard** — human-readable + machine-readable module state.
5. **Worker handoff standard** — transfer protocol and required repository/authority metadata.
6. **AI worker contracts** — one contract per role, including allowed writes and mandatory stop conditions.
7. **Acceptance and evidence standard** — automated tests, runtime validation, visual QA and retained debt.
8. **Git integration and release standard** — isolated worktrees, reconciliation, commit/push, development integration, migrations and deployment boundaries.
9. **Reference implementation maps** — show how Campaign and Collaboration artifacts map onto the standardized lifecycle.
10. **Supervisor orchestration specification** — stage state machine and rules for progressively autonomous delivery.

No historical Campaign or Collaboration source path should be reorganized merely to make the new standard look neat. First map it, then decide whether migration is valuable.
