# Collaboration Phase G — AI Agent Context Manifest

**Version:** 1.0  
**Status:** APPROVED  
**Scope:** Collaboration module only  
**Global process authority:** `docs/engineering/PHASE_G_PRODUCT_READINESS_STANDARD.md`

## 0. Purpose

This manifest tells an AI engineering agent exactly what context to mount and inspect while driving Phase G for Creator Shop Collaboration.

It is intentionally stored inside `collaboration/phase_g/` because repository refs, module contracts, runtime paths, actors, provider dependencies and acceptance scenarios are Collaboration-specific.

It does **not** replace the global Phase G standard. Future modules should create their own `<module>/phase_g/agent_context_manifest.md` and reuse the same global standard.

## 1. Workspace Topology

Mount these three repositories in one multi-root engineering workspace.

```text
creator-shop-phase-g/
├── dummy_tcs/                # canonical specification/governance
├── collaboration-frontend/   # accepted frontend implementation
└── collaboration-backend/    # accepted backend runtime
```

### Canonical specification repository

```text
Repository: Piyush1087/dummy_tcs
Branch: main
Pinned handoff SHA: supplied externally with the Phase G task
```

Do not assume the latest `main` is the approved Phase G canonical ref. The task prompt/handoff must supply the frozen SHA.

### Frontend implementation baseline

```text
Repository: Piyush1087/creator-commerce-frontend-v2-clone
Branch: collaboration/frontend-production-reconciliation
Frozen SHA: 39510031066c44f20d59d1375c01678f34e585f8
```

This SHA is the accepted frontend baseline for beginning Collaboration Phase G.

Create the first Phase G working branch from exactly this commit, for example:

```text
phase-g/collaboration-g0-audit
```

G0 may add audit documentation but must not modify runtime source unless Product explicitly changes the task scope.

### Backend runtime baseline

```text
Repository: Piyush1087/creator-commerce-backend-v2-clone
Branch: collaboration/final-backend-reconciliation
Frozen SHA: 13ce652f432560a91dde1f75ca9a21dfa76d054f
```

Treat backend as read-only during G0 and normally read-only during frontend-only G1 tasks. Backend changes require an explicit finding and scoped backend task.

## 2. Authority Hierarchy

Use this order for Collaboration Phase G decisions:

1. explicit approved Product decision for the current task;
2. canonical Collaboration contracts in `dummy_tcs/collaboration/`;
3. detailed Collaboration product-workflow docs in the accepted backend repository;
4. canonical executable/reference contracts identified below;
5. accepted backend runtime implementation;
6. accepted frontend runtime implementation;
7. traceability/reconciliation artifacts and historical implementation evidence;
8. approved Stitch/UI reference for screen composition only;
9. AI preference.

The global authority/conflict rules in `AI_ENGINEERING_STANDARD.md` still apply.

### Conflict rule

If the frozen `dummy_tcs` Collaboration contracts, backend product workflow docs or accepted runtime disagree materially and declared ownership/precedence does not safely resolve the decision:

```text
classification = AUTHORITY_CONFLICT
product_decision_required = YES
```

Do not silently reconcile the conflict or infer policy from legacy code.

## 3. Mandatory Reading Order

### Tier A — Global operating governance

Read first:

```text
dummy_tcs/AGENTS.md
dummy_tcs/AI_ENGINEERING_STANDARD.md
dummy_tcs/docs/engineering/PHASE_G_PRODUCT_READINESS_STANDARD.md
```

Load specialist engineering standards only when the current subphase materially touches that layer.

### Tier B — Collaboration module authority

Read:

```text
dummy_tcs/collaboration/README.md
dummy_tcs/collaboration/finalization_review.md
dummy_tcs/collaboration/developer_handoff_manifest.md
```

Then read all five frozen domain/runtime contracts before changing Collaboration behavior:

```text
dummy_tcs/collaboration/contracts/collaboration_domain_contract.md
dummy_tcs/collaboration/contracts/collaboration_runtime_contract.md
dummy_tcs/collaboration/contracts/collaboration_workflow_state_contract.md
dummy_tcs/collaboration/contracts/collaboration_commercial_resolution_contract.md
dummy_tcs/collaboration/contracts/collaboration_integration_contract.md
```

### Tier C — Canonical backend implementation reference

Read as required by the finding/task:

```text
dummy_tcs/collaboration/backend/collaboration_schema.prisma
dummy_tcs/collaboration/backend/command_contract.md
dummy_tcs/collaboration/backend/read_model_contract.md
dummy_tcs/collaboration/backend/implementation_map.md
dummy_tcs/backend/validation/collaboration/collaboration.schema.ts
dummy_tcs/backend/validation/collaboration/collaboration.schema.test.ts
```

Use these only as reconciliation/traceability evidence, not as higher authority than the frozen contracts:

```text
dummy_tcs/collaboration/backend/production_schema_baseline.prisma
dummy_tcs/collaboration/backend/schema_reconciliation.md
dummy_tcs/collaboration/backend/dependency_check.md
dummy_tcs/collaboration/backend/schema_review.md
dummy_tcs/collaboration/backend/integrated_schema_check.md
dummy_tcs/collaboration/backend/executable_contract_reconciliation.md
```

### Tier D — Canonical frontend reference

Read in this order:

```text
dummy_tcs/frontend/collaboration/implementation_map.md
dummy_tcs/frontend/collaboration/state_map.md
dummy_tcs/frontend/collaboration/interaction_map.md
dummy_tcs/frontend/collaboration/ui_domain_mapping.md
dummy_tcs/frontend/collaboration/copy_contract.md
dummy_tcs/frontend/collaboration/creator_context_contract.md
dummy_tcs/frontend/collaboration/realtime_hydration_contract.md
```

These describe how to reconcile the existing production Collaboration architecture rather than create an unrelated replacement frontend.

### Tier E — Detailed product workflow

From the accepted backend runtime repository read:

```text
docs/collaboration/product-docs/Brand- collaboration workflow.md
docs/collaboration/product-docs/Creator- Collaboration Workflow.md
docs/collaboration/product-docs/Unified collaboration document (brand+ creator).md
docs/ai-collaboration/2026-06-04-collaboration-module-intake.md
```

The product workflow docs provide detailed Brand/Creator workflow intent. They do not override a newer explicit frozen Collaboration contract when authority is clear.

## 4. Frontend Runtime Reality — Mandatory Inspection Roots

Inspect the complete frontend repository when needed, but start from:

```text
docs/collaboration/IMPLEMENTATION.md
docs/ai-collaboration/2026-06-04-collaboration-frontend-intake.md

src/features/collaboration/
├── api/
├── contracts/
├── hooks/
├── utils/
└── components/

src/pages/brand/collaboration/
src/pages/brand/collaborations/
src/pages/creator/collaborations/
src/routes/app-routes.tsx
```

High-value implementation files include:

```text
src/features/collaboration/components/CollaborationWorkspace.tsx
src/features/collaboration/components/CollaborationExecutionHub.tsx
src/features/collaboration/api/collaboration-client.ts
src/features/collaboration/contracts/collaboration.contracts.ts
src/features/collaboration/hooks/use-collaboration-realtime.ts
src/features/collaboration/utils/collaboration-execution-state.ts
src/features/collaboration/utils/collaboration-validation.ts
```

Inspect stage-focused components, route variants and supporting utilities discovered from those entry points rather than assuming this list is exhaustive.

## 5. Backend Runtime Reality — Mandatory Inspection Roots

Inspect the complete backend repository when required, but start from:

```text
src/features/collaboration/
├── collaboration.module.ts
├── collaboration.controller.ts
├── collaboration.gateway.ts
├── dto/
├── schemas/
├── services/
├── types/
└── utils/

prisma/schema.prisma
prisma/migrations/
```

Inspect these cross-module owners when a finding touches money movement or payout execution:

```text
src/features/brand-escrow/
src/features/brand-payouts/
```

Do not move financial entitlement ownership out of Collaboration merely because money movement is implemented by Escrow/Payout.

## 6. Frontend Design / Platform References

### Canonical design-system authority

```text
dummy_tcs/docs/design-system/AURORA_DESIGN_SYSTEM.md
dummy_tcs/frontend/layout/app_shell/
```

### Actual reusable frontend implementation

Inspect repository-native design/platform primitives, including where present:

```text
DESIGN_SYSTEM.md
LAYOUT_DIRECTIVES.md
src/design-system/aurora/
src/layouts/app-shell/
src/styles/global.css
```

Reuse actual production Aurora primitives where semantically compatible.

Do not recreate Button/Card/Drawer/Input/navigation primitives locally merely because a reference HTML file contains its own implementation.

### Stitch rule

Do not invoke or mount Stitch as product authority during G0 or G1.

Stitch becomes relevant only after G2 freezes composition, and even then:

- Stitch owns visual composition/reference only;
- Aurora owns reusable primitives/system behavior;
- Collaboration contracts own product behavior;
- accepted frontend architecture owns the implementation integration boundary.

## 7. Frozen Collaboration Semantics to Protect

Phase G must not regress these frozen invariants:

- one approved Application is the Collaboration source identity;
- Campaign × Creator is not Collaboration uniqueness;
- Collaboration lifecycle is separate from execution workflow stage;
- frontend does not directly set canonical lifecycle/stage/substate;
- approved Application proposal is the starting commercial offer;
- normal negotiation permits one Brand counter cycle;
- platform/escrow execution secures 100% of the agreed Creator cash fee;
- advance percentage is protection/entitlement configuration, not hardcoded 30/70 policy;
- BARTER is not a payment rail;
- Fulfillment applicability/type comes from locked Campaign Brand Support configuration, not Brand industry;
- Production is per Deliverable;
- Brand-requested revision limit is per Deliverable;
- auto-approval does not authorize public publishing;
- publishing/compliance is Deliverable-specific;
- compliance correction is separate from Production revision count;
- Collaboration owns entitlement/resolution; Payout/Escrow own money movement execution;
- Collaboration completes before Feedback;
- Feedback is post-completion, not a workflow stage;
- persisted backend state is re-entry/reconstruction authority;
- WebSocket/realtime is invalidation/notification, not required historical state truth;
- Creator bank truth belongs to Settings/Payout, not Collaboration;
- unresolved `publishingRequired` must not silently default false;
- Pause/resume product behavior must not be invented.

## 8. G0 Audit Coverage

G0 must cover both Brand and Creator experiences.

At minimum inspect:

```text
Collaboration list/inbox
workspace shell
Brand vs Creator context
chat/messages
About/context panel
negotiation
securement
fulfillment
fulfillment exception/remediation
production
submission/revision history
production auto-approval behavior
publishing
compliance correction
settlement
resolution/termination/cancellation surfaces
completion
feedback pending/reveal
loading
empty
API error
blocked action
unauthorized role
realtime disconnected/recovery
refresh/re-entry
desktop navigation
mobile navigation
```

For every material surface trace:

```text
route
→ component
→ local/view-model state
→ API client
→ backend read/command
→ canonical owner
→ persistence/provider boundary
```

## 9. G0 Documentation Output

Create G0 documentation in the frontend Phase G working branch:

```text
docs/collaboration/phase-g/
├── 00_baseline.md
├── 01_g0_reality_audit.md
├── 02_g0_root_cause_register.md
├── 03_g0_source_of_truth_matrix.md
├── 04_g0_legacy_debt_register.md
├── 05_g0_state_register.md
└── 06_g1_execution_sequence.md
```

Do not create all files speculatively in G0.0/G0.1. Create only the artifacts required by the current subphase.

## 10. Collaboration Environment Readiness

### G0 minimum

Required:

```text
Git
Cursor/AI engineering agent
all three repositories mounted
exact baseline SHAs
repository-wide search/read access
```

PostgreSQL, AWS, Postmark, Razorpay, S3 and Stitch are not prerequisites for source-level G0.

### G1–G5 local runtime

Prepare before runtime acceptance:

```text
repository-approved Node + npm
Docker Desktop
PostgreSQL 16 local container
isolated local Collaboration database
backend localhost:3000
frontend localhost:5173
Brand QA identity
Creator QA identity
browser/manual acceptance access
Socket.IO local connectivity
```

Use the installed repository versions rather than performing incidental dependency upgrades during Phase G.

## 11. Local Environment Policy

Use local/test configuration only unless Product explicitly scopes a staging provider test.

Recommended local settings include:

```text
STAGE=local
DATABASE_URL=<localhost-only Collaboration Phase G DB>
CREATOR_VERIFICATION_USE_REAL_OTP=false
BRAND_VERIFICATION_USE_REAL_OTP=false
NOTIFICATIONS_DEV_EMIT_ENABLED=false
APP_FRONTEND_URL=http://localhost:5173
VITE_STAGE=local
```

Prefer leaving `VITE_API_URL` unset for the repository's local Vite `/api` proxy when that remains the implemented local pattern.

Do not use during ordinary Phase G:

```text
production database
production/dev RDS as a substitute for local acceptance
production Postmark token
live Razorpay credentials
real fund movement
real customer/creator email delivery
production S3 writes
real social publishing
production deployment
```

If application startup requires a non-empty external-provider token but Phase G will not execute that provider, a clearly fake local placeholder may be used only when safe and compatible with the local runtime.

## 12. Local Database / Seed Baseline

Use a fresh isolated local database, for example:

```text
creator_shop_collaboration_phase_g
```

Recommended initialization after dependency install:

```text
npm run prisma:generate
npm run db:migrate:deploy
```

Use the repository's existing creator QA seed where applicable:

```text
npm run db:seed:dev-creator
```

Current local QA creator convention:

```text
email: test@creator.com
stub OTP: 123456
```

Use a deterministic local QA Brand identity. Do not depend on a production user's account for acceptance fixtures.

## 13. Runtime Acceptance Scenario Families

Before G5 completion, persisted fixtures or reproducible flows should cover representative states including:

```text
Negotiation
Securement
Fulfillment required
Fulfillment not required
Fulfillment remediation/blocked
Production awaiting submission
Production awaiting Brand review
Revision requested
Auto-approved
Publishing required
Publishing not required
Compliance correction
Settlement
Terminal resolution
Completed
Feedback pending
Feedback revealed
```

Also exercise appropriate local/system states:

```text
loading
empty
API error
action blocked
unauthorized role
realtime disconnected
poll/refetch recovery
refresh/re-entry
desktop
mobile
```

The objective is not a huge seed matrix for its own sake. Use the minimum deterministic fixtures necessary to prove every materially different product state.

## 14. Collaboration Agent Rules

In addition to the global Phase G standard, the Collaboration agent MUST:

1. verify all mounted refs/SHAs before work;
2. audit both Brand and Creator surfaces;
3. treat backend and frontend accepted branches as implementation evidence, not permission to redefine canonical semantics;
4. trace actions end-to-end before assigning root cause;
5. trace displayed values to their canonical owner;
6. preserve Campaign, Collaboration, Escrow/Payout, Settings and Intelligence ownership boundaries;
7. isolate legacy compatibility instead of allowing it to shape new UI/domain behavior;
8. avoid frontend lifecycle/status inference when backend capability/read authority exists;
9. never invent Pause behavior or unresolved publishing policy;
10. never hardcode fixed 30/70 payout semantics into Collaboration progression;
11. never treat one Collaboration-level media/revision/live URL as canonical when Deliverable grain is required;
12. use persisted backend state as hydration/re-entry authority;
13. keep realtime as invalidation/refetch unless an approved contract says otherwise;
14. classify genuine external-provider gaps rather than faking completion;
15. stop at the requested G subphase and wait for Product review when instructed.

## 15. First Phase G Task Boundary

The recommended first AI-agent execution is:

```text
G0.0 — Baseline Freeze
+
G0.1 — Whole-Module Surface Reality Audit
```

Do not combine the first run with G0.2, G0.3 or implementation.

The first run should create only:

```text
docs/collaboration/phase-g/00_baseline.md
docs/collaboration/phase-g/01_g0_reality_audit.md
```

and return a concise summary of:

- baseline verification;
- audited surfaces;
- findings by classification;
- authority conflicts;
- G0.2 investigation clusters;
- environment blockers;
- whether G0.1 is complete.

## 16. Handoff Freeze Rule

When Product approves this manifest and the global Phase G standard, freeze the exact `Piyush1087/dummy_tcs` commit SHA externally in the developer/Codex task prompt.

That pinned SHA, together with the frontend/backend SHAs above, forms the reproducible three-repository Phase G starting baseline.