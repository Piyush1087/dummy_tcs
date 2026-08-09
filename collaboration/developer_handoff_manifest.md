# Creator Shop Collaboration — Developer / Codex Handoff Manifest

Status: CANONICAL HANDOFF
Purpose: Define the exact implementation input set, reading order and production-reconciliation rules for Collaboration.

## 1. Implementation objective

Modify the existing production Collaboration frontend/backend to conform to the frozen Creator Shop Collaboration architecture.

Do not build a parallel Collaboration module, duplicate Campaign-owned data, replace working infrastructure without cause, or infer missing product policy from legacy code.

Production repositories are implementation evidence:

- frontend: `AatishBrianDSilva/creator-commerce-frontend-v2-clone`
- backend: `AatishBrianDSilva/creator-commerce-backend-v2-clone`

Canonical specification repository:

- `Piyush1087/dummy_tcs`

## 2. Read first — module authority

1. `collaboration/README.md`
2. `collaboration/finalization_review.md`

These define authority order, frozen invariants, open dependencies and what is implementation evidence versus canonical truth.

## 3. Domain contract pack

Read all five before changing domain behavior:

1. `collaboration/contracts/collaboration_domain_contract.md`
2. `collaboration/contracts/collaboration_runtime_contract.md`
3. `collaboration/contracts/collaboration_workflow_state_contract.md`
4. `collaboration/contracts/collaboration_commercial_resolution_contract.md`
5. `collaboration/contracts/collaboration_integration_contract.md`

Do not infer lifecycle, financial resolution or ownership rules only from Prisma or UI.

## 4. Backend canonical implementation inputs

Read in this order:

1. `collaboration/backend/collaboration_schema.prisma`
2. `collaboration/backend/command_contract.md`
3. `collaboration/backend/read_model_contract.md`
4. `backend/validation/collaboration/collaboration.schema.ts`
5. `backend/validation/collaboration/collaboration.schema.test.ts`
6. `collaboration/backend/implementation_map.md`

Expected use:

- Prisma defines target persistence ownership and grain.
- Command contract defines legal mutation boundaries.
- Read model defines authoritative hydration/projections.
- Zod defines client/system-authored structural input validation.
- Implementation map tells how to modify the existing NestJS production module.

## 5. Backend traceability / migration evidence

Use these only to understand how production differs from canonical target:

- `collaboration/backend/production_schema_baseline.prisma`
- `collaboration/backend/schema_reconciliation.md`
- `collaboration/backend/dependency_check.md`
- `collaboration/backend/schema_review.md`
- `collaboration/backend/integrated_schema_check.md`
- `collaboration/backend/executable_contract_reconciliation.md`

These files must not override frozen Prisma/command/read/Zod behavior.

## 6. Frontend canonical implementation inputs

Read in this order:

1. `frontend/collaboration/implementation_map.md`
2. `frontend/collaboration/state_map.md`
3. `frontend/collaboration/interaction_map.md`
4. `frontend/collaboration/ui_domain_mapping.md`
5. `frontend/collaboration/copy_contract.md`
6. `frontend/collaboration/creator_context_contract.md`
7. `frontend/collaboration/realtime_hydration_contract.md`

Implementation rule: modify/reconcile the existing production `src/features/collaboration` architecture. Retain the shared workspace/chat/realtime foundation and refactor/extend stage execution surfaces; do not generate an unrelated replacement frontend.

## 7. Production code areas to inspect before modifying

### Backend

Start from:

- `src/features/collaboration/collaboration.module.ts`
- `src/features/collaboration/collaboration.controller.ts`
- `src/features/collaboration/services/collaboration.service.ts`
- `src/features/collaboration/services/collaboration-provision.service.ts`
- `src/features/collaboration/services/collaboration-access.service.ts`
- `src/features/collaboration/services/collaboration-realtime.service.ts`
- `src/features/collaboration/utils/collaboration-thread.mapper.ts`
- `src/features/collaboration/utils/collaboration-action-guards.ts`
- Collaboration DTO/query files
- `src/features/brand-escrow/**`
- `src/features/brand-payouts/**`
- production `prisma/schema.prisma`

Reuse escrow locks/ledger/idempotency mechanisms where compatible, but remove fixed 30/70 and automatic Advance-release policy from Collaboration progression.

### Frontend

Start from:

- `src/features/collaboration/components/CollaborationWorkspace.tsx`
- `src/features/collaboration/components/CollaborationExecutionHub.tsx`
- `src/features/collaboration/api/collaboration-client.ts`
- `src/features/collaboration/contracts/collaboration.contracts.ts`
- `src/features/collaboration/hooks/use-collaboration-realtime.ts`
- `src/features/collaboration/utils/collaboration-execution-state.ts`
- `src/features/collaboration/utils/collaboration-validation.ts`
- stage-label utilities
- Creator Collaboration page route
- Brand Collaboration page route

The Brand route currently needs reconciliation to the shared Collaboration workspace architecture rather than the unrelated public-brand workspace.

## 8. Recommended implementation sequence

### Phase A — Persistence and provisioning foundation

- integrate canonical Prisma models/relations into the production schema;
- migrate away from Campaign × Creator uniqueness;
- add `sourceApplicationId` identity;
- provision only from a specific approved Application;
- create locked snapshot + Deliverable executions;
- explicitly resolve `publishingRequired` for every Deliverable or fail/defer provisioning safely;
- preserve/migrate working message and inbox projection data.

### Phase B — Canonical read model

- implement list/detail/message reads from persisted canonical state;
- derive `actionRequiredBy` and `availableActions`;
- ensure refresh/navigation/re-entry reconstructs complete state without WebSocket payload history;
- add Brand-facing Creator context and Creator-facing Brand context projections.

### Phase C — Negotiation and Securement

- replace old open/multi-round quote logic with approved Application proposal + one Brand counter;
- split actor-specific accept/decline commands;
- separate escrow funding request from authoritative funding confirmation;
- secure full agreed cash fee;
- adapt Manual payment path and move bank ownership to Settings/Payout.

### Phase D — Fulfillment

- rename/generalize Logistics to Fulfillment;
- drive applicability from locked Campaign Brand Support configuration;
- preserve useful fulfillment evidence;
- implement issue #1 remediation and issue #2 terminal/full-refund resolution.

### Phase E — Deliverable Production

- migrate global media/revision logic to per-Deliverable executions and submission versions;
- add exact-version approval/revision/final-rejection commands;
- enforce two revision requests per Deliverable;
- persist 72h deadlines;
- add stale-safe SYSTEM auto-approval path.

### Phase F — Publishing, settlement and resolution

- replace one live-post URL with Deliverable-specific evidence;
- distinguish explicit publication authorization from auto-approval;
- separate compliance correction from content revisions;
- separate entitlement from Payout execution;
- add normal/terminal settlement and resolution commands.

### Phase G — Completion, feedback and UI reconciliation

- complete Collaboration before Feedback;
- implement 48h double-blind feedback reveal;
- adapt existing frontend workspace and split ExecutionHub into stage-focused components as needed;
- add Resolution/Blocked/Completed surfaces;
- update copy and lifecycle labels;
- retain realtime as invalidation/refetch only.

## 9. Non-negotiable implementation prohibitions

Do not:

- use Campaign × Creator as Collaboration uniqueness;
- create a second operational Collaboration aggregate;
- let frontend directly set stage/lifecycle/substate;
- persist `actionRequiredBy` as canonical workflow truth;
- hardcode 30/70 or `ADVANCE_30`/`FINAL_70` as policy;
- treat BARTER as payment rail;
- infer Fulfillment from Brand industry;
- use one global revision count;
- use one Collaboration-level live-post URL as publishing grain;
- let auto-approval authorize public posting;
- couple publishing verification directly to “release final balance” state mutation;
- make Feedback a workflow stage;
- store Creator bank account truth in Collaboration;
- make WebSocket state necessary for re-entry hydration;
- invent Pause behavior;
- silently default unresolved `publishingRequired` to false.

## 10. Open dependency handling

If implementation reaches an open dependency:

- `publishingRequired` upstream authoring/derivation;
- Pause/resume semantics;
- scheduler/worker provider;
- Asset storage/provider;
- exact Payout/FX transport shape;

do not infer product policy from production legacy behavior.

Provider/technology choices may be implemented behind the frozen boundary where they do not change domain semantics. Product-policy gaps must be surfaced for explicit resolution.

## 11. Definition of implementation completion

A Collaboration implementation is conformant when:

- one approved Application can reconstruct one independent Collaboration;
- multiple approved Applications for one Creator/Campaign remain separate;
- every canonical state can be rehydrated from backend persistence;
- UI actions map to legal backend commands;
- Deliverable/revision/timer/publishing behavior is per canonical grain;
- commercial resolution matches the frozen outcome rules;
- Payout execution confirmation is distinct from entitlement;
- terminal/blocked/completed states remain understandable and historically accessible;
- frontend does not depend on transient realtime state;
- legacy duplicate/obsolete workflow authority is no longer used for new canonical Collaborations.

## 12. Handoff status

The Collaboration specification package is ready to be used as the implementation source for Codex/developers. Production code remains the migration target/evidence; `dummy_tcs` remains the canonical behavior/design authority until the production implementation has been reconciled and accepted.
