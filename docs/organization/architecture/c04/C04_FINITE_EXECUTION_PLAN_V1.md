# C-04 Finite Execution Plan V1

`C04_FINITE_EXECUTION_PLAN_V1`

Date: 2026-09-04
Status: **ACCEPTED WITH BOUNDED STAGE B CORRECTION**
Execution: **NOT AUTHORIZED**

## 1. Objective

Provide a bounded, dependency-safe implementation sequence for reconciling Creator-side Collaboration into the existing shared Collaboration domain after Parent accepts the architecture and separately authorizes implementation.

This plan does not authorize any code, migration, branch, Stitch, provider, AWS, or production-data change.

## 2. Entry conditions

No implementation may start until the shared authority conditions and Parent authorization are true:

```text
C04_PRODUCT_LOGIC = FROZEN
C04_SYSTEMS_AUDIT = ACCEPTED
C04_CROSS_CONTRACT_RECONCILIATION = ACCEPTED
C04_CANONICAL_BASE_CONVERGENCE_MANIFEST = ACCEPTED
C04_ARCHITECTURE = ACCEPTED
C04_FINITE_EXECUTION_PLAN = ACCEPTED
C04_IMPLEMENTATION = AUTHORIZED
```

Execution then opens by independent dependency lane:

| Lane | Additional gate | Eligible phases after Parent authorization |
|---|---|---|
| Backend | `C04_C03_BACKEND_HANDOFF_DEPENDENCY = READY` from an immutable accepted post-P1.4 backend SHA proving the same-transaction seam | P0 backend preflight, P1, P2, P3, P4, and backend-safe portions of P6 |
| Frontend | `C04_C03_FRONTEND_BASE_DEPENDENCY = READY` from an immutable C-03 Systems Architect-approved frontend integration base | Frontend base lock and P5 |
| Joint | Both accepted C-04 backend and frontend lines | P7 |

Current C-03 P0 heads satisfy neither implementation gate. The backend lane does not wait for C-03 frontend completion or module closeout.

## 3. Execution sequence

```text
P0-B Backend base lock and preflight
→ P1 Persistence and canonical base convergence
→ P2 Shared backend runtime convergence
→ P3 Creator subject, Team actor, and first proposal
→ P4 Physical delivery destination
→ P6-B Backend-safe projections, workers, Brief contract, and legacy cutover

P0-F Read-only frontend state-contract and reuse preparation
→ C-03 frontend base accepted
→ P0-FL Frontend base lock
→ P5 Frontend state and runtime reconciliation

accepted backend line + accepted frontend line
→ P7 Joint acceptance, integration, and handoff
```

No phase may silently absorb a later phase. A failed gate stops the sequence.

## 4. P0 — Split base lock and preflight

### Purpose

Freeze each implementation base only when its own dependency is ready. Prove the C-03 backend seam, migration graph, authority package, and applicable working tree are safe before mutation.

### Work

- P0-B: fetch and record the accepted post-P1.4 C-03 backend SHA;
- P0-B: verify backend ancestry from the current C-05/development line and the accepted same-transaction provision/reuse evidence;
- verify C-03 same-transaction provision/reuse acceptance evidence;
- create the backend execution branch only after Parent authorization and the backend gate is ready;
- record clean tree, remotes, branch protection, Node/npm/Prisma versions;
- inventory all migrations, applied-state evidence, schema collisions, and legacy Collaboration data shapes;
- diff accepted Collaboration donors against the exact bases;
- inventory consumers of legacy Collaboration profile/bank/shipping/global endpoints;
- record baseline build/lint/test results and existing unrelated failures;
- P0-F: produce the C-04 frontend State Family Register and donor/reuse inventory read-only before the frontend gate;
- P0-FL: after the C-03 Systems Architect approves an immutable frontend integration base, fetch it back, verify ancestry, and create the frontend execution branch only after Parent authorization.

### Outputs

```text
C04_P0_BACKEND_BASE_LOCK_LEDGER_V1
C04_P0_FRONTEND_BASE_LOCK_LEDGER_V1
C04_P0_SCHEMA_AND_PATH_COLLISION_INVENTORY_V1
C04_FRONTEND_STATE_FAMILY_REGISTER_V1
```

### Gate

- exact immutable backend base recorded and fetched back before backend execution;
- `C04_C03_BACKEND_HANDOFF_DEPENDENCY = READY` before P1–P4 or backend-safe P6;
- exact immutable C-03 Systems Architect-approved frontend base recorded and fetched back before P5;
- `C04_C03_FRONTEND_BASE_DEPENDENCY = READY` before frontend implementation;
- no unresolved Product/architecture contradiction;
- applicable clean worktree;
- complete migration and endpoint-consumer inventory;
- baseline failures isolated from C-04.

## 5. P1 — Persistence and canonical base convergence

### Purpose

Bring the accepted canonical Collaboration persistence family onto the post-P1.4 base without altering historical migrations or duplicating C-05/C-03/platform owners.

### Work

- reconcile canonical Collaboration models from `13ce652f…` with the complete current schema;
- create forward-only additive migration(s) for canonical shared models missing from the base;
- add `creatorProfileId`, `creatorWorkspaceId`, and subject-owner compatibility lineage;
- preserve unique `sourceApplicationId` and remove Campaign × Creator uniqueness;
- add `AWAITING_CREATOR_PROPOSAL`, `creatorProposedFee`, minimum snapshot, and proposal timestamp;
- add Team actor audit fields on events/messages;
- add immutable `CollaborationDeliveryDestination` and required constraints;
- add compatibility discriminator/checks for legacy rows;
- retain C-05 contact/legal/payout models without modification of ownership;
- backfill only exact-provenance rows in test fixtures/approved migration logic;
- prove ambiguous legacy rows remain compatibility rows.

### Outputs

```text
C04_P1_PERSISTENCE_RECONCILIATION_LEDGER_V1
C04_P1_MIGRATION_AND_BACKFILL_PROOF_V1
```

### Gate

- Prisma validation/generation pass;
- migration deploys from a production-shaped baseline and from empty test baseline where supported;
- constraints prove one Application→one Collaboration and multiple Applications→multiple Collaborations;
- canonical new rows require source Application + Creator subject/workspace + snapshot;
- no existing migration edited;
- no C-05 owner duplicated;
- rollback/recovery evidence accepted.

## 6. P2 — Shared backend runtime convergence

### Purpose

Port/reconcile the accepted shared Collaboration runtime into the canonical base while preserving Brand behavior and containing the legacy monolith.

### Work

- reconcile controller, access/query, mapper, provisioning, negotiation, securement, fulfillment, production, publishing, exception, settlement, feedback, message, event, and realtime services;
- preserve all frozen Brand actions and commercial-resolution calculations;
- fulfill the trusted C-03 provisioning port inside the caller transaction;
- remove public/client-shaped canonical create-thread behavior;
- preserve canonical per-Deliverable revision, auto-approval, publishing-authorization, compliance, settlement, and feedback semantics;
- retain terminal chat under frozen shared authority;
- guard legacy global endpoints from canonical rows;
- keep manual rail dormant/internal and barter retired;
- keep Payout/settlement execution outside C-04.

### Outputs

```text
C04_P2_SHARED_BACKEND_CONVERGENCE_LEDGER_V1
C04_P2_BRAND_NON_REGRESSION_EVIDENCE_V1
```

### Gate

- accepted Collaboration source/unit suites ported and passing;
- all canonical state transitions append versioned events;
- Brand action/read parity proven;
- canonical rows cannot use legacy global mutations;
- entitlement vs settlement execution remains separated;
- no external provider or production configuration required for local acceptance.

## 7. P3 — Creator subject, Team actor, and first proposal

### Purpose

Apply the frozen C-05/C-04 subject/actor policy and the C-03 commercial handoff.

### Work

- consume the C-05 `CreatorWorkspaceActorContext` resolver;
- authorize Creator list/detail/history/chat by canonical subject/workspace;
- implement the Owner/Manager/Assistant read/chat/command matrix;
- retain actual Team actor metadata on command events/messages;
- fan realtime invalidation to authorized Creator Team members;
- initialize NEGOTIABLE rows with null amounts and `AWAITING_CREATOR_PROPOSAL`;
- implement `SubmitCreatorProposal` command, schema, guard, event, projection, and idempotency;
- enforce immutable currency and minimum payout;
- adapt all existing Creator commands to subject/Team authorization;
- prove membership removal, role change, concurrent Team commands, and stale clients fail safely.

### Outputs

```text
C04_P3_CREATOR_ACTOR_AND_NEGOTIATION_LEDGER_V1
C04_P3_AUTHORIZATION_MATRIX_EVIDENCE_V1
```

### Gate

- Owner/Manager state commands pass only when domain-valid;
- Assistant can read/chat but every state mutation is denied and absent from `availableActions`;
- cross-subject/inactive membership is non-enumerating;
- one Creator proposal only; one Brand counter only;
- below-minimum/wrong-currency/stale/replayed commands behave canonically;
- multiple Team actors cannot create duplicate transitions;
- direct `creatorUserId` is not new-row authorization authority.

## 8. P4 — Physical delivery destination

### Purpose

Implement explicit execution confirmation without duplicating or mutating the C-05 default contact/address.

### Work

- derive physical applicability from the locked execution snapshot;
- read the current C-05 default through the canonical C-05 service/repository boundary;
- implement default-source stale fencing by contact ID + update timestamp;
- implement structured one-Collaboration override validation;
- implement immutable destination persistence, provenance, content hash, and actor audit;
- implement `ConfirmPhysicalDeliveryDestination` command/read capability;
- withhold Brand physical `ProvideFulfillment` until confirmed;
- ensure non-physical support skips the gate;
- ensure Assistant cannot confirm/override;
- expose only confirmation status/non-sensitive summary to Assistant, not the full address/phone body;
- ensure event/notification/socket/log payloads exclude destination PII;
- prove later C-05 edits do not rewrite the confirmed record.

### Outputs

```text
C04_P4_PHYSICAL_DESTINATION_LEDGER_V1
C04_P4_PII_AND_PROVENANCE_EVIDENCE_V1
```

### Gate

- default confirmation and override both pass end to end;
- override leaves C-05 default unchanged;
- stale source/default conflict is recoverable;
- no default + no override leaves Brand dispatch unavailable;
- confirmed record is ordinary-runtime immutable;
- physical Brand dispatch becomes available only after confirmation;
- non-physical fulfillment never requests shipping;
- PII absence from events, notifications, sockets, analytics, and logs is tested.
- Assistant full-destination denial/masking is tested while Owner/Manager and authorized Brand dispatch reads remain usable.

## 9. P5 — Frontend state and runtime reconciliation

### Purpose

Reconcile the current production frontend with accepted shared behavior and the two new Creator state families using the permanent decision ladder.

### Required decision ladder

1. accepted Product/architecture;
2. P0 Frontend State Family Register;
3. current `development`/C-05 shell inspection;
4. accepted `39510031…` Collaboration contract/runtime inspection;
5. Phase G/current component and mobile/recovery reuse;
6. Aurora construction;
7. UI/UX/Stitch only if a named composition gap remains.

`STITCH_REQUIRED = NO` unless a later bounded finding changes it.

### Work

- retain shared Brand/Creator routes and `src/features/collaboration`;
- reconcile frontend types/Zod schemas/API client with backend reads/commands;
- add first-proposal Owner/Manager form and Assistant waiting/read-only state;
- add physical destination default/override/confirmation states;
- show Brand waiting/dispatch-ready state from backend capability;
- consume C-05 actor provider for shell/context only; render backend actions as authority;
- retain current route guard, deep-link integrity, pane-local retry, explicit Refresh, mobile steps/bottom nav, context links, and histories;
- preserve terminal chat when backend capability is present;
- remove all Collaboration bank/default-address editing;
- extend privacy-scoped Brand→Creator relationship context;
- keep settlement language honest: eligible/processing/settled/blocked;
- implement loading, empty, error, stale, membership-change, compatibility, and re-entry states.

### Outputs

```text
C04_P5_FRONTEND_RECONCILIATION_LEDGER_V1
C04_P5_RESPONSIVE_AND_ACCESSIBILITY_EVIDENCE_V1
```

### Gate

- contract/type checks and frontend tests pass;
- backend capabilities solely control mutation UI;
- Owner/Manager/Assistant matrices pass in desktop and mobile;
- 375px, 390px, 767px, and desktop layouts have no horizontal overflow/control loss;
- keyboard/focus/live-region/error recovery accepted;
- no Collaboration-owned Settings form remains;
- no Stitch invocation unless separately authorized for a documented gap.

## 10. P6 — Projections, workers, Brief, and legacy cutover

### Purpose

Close durable asynchronous behavior, document projection, context reads, and legacy ownership retirement.

Backend-safe P6 work may proceed after the backend gate. Frontend Brief download/rendering, frontend projection integration, and cross-line acceptance wait for the frontend gate and P5.

### Work

- make SYSTEM-message projection idempotent from committed events where specified;
- integrate durable in-app notification/outbox consumers with subject-workspace recipient resolution;
- retain Assistant informational notifications without mutation CTA;
- implement Creator Team socket fan-out as invalidation only;
- wire durable 72-hour auto-approval and 48-hour feedback-reveal workers;
- define and consume a provider-neutral trusted Escrow/C-06 confirmation port; apply confirmations idempotently and validate with deterministic test adapters without implementing provider webhook authentication or payout execution;
- implement privacy-scoped counterpart context reads;
- backend-safe: implement the `CollaborationBriefPackV1` snapshot projection contract;
- frontend-gated: implement deterministic frontend PDF/download using reusable C-03 renderer primitives where appropriate;
- remove/410 Collaboration bank/default-address writers after consumer proof;
- preserve legacy history/read adapters and mark unsafe rows compatibility-only;
- verify terminal residual obligations/chat/re-entry.

### Outputs

```text
C04_P6_PROJECTION_AND_WORKER_LEDGER_V1
C04_P6_LEGACY_CUTOVER_AND_DOCUMENT_EVIDENCE_V1
```

### Gate

- repeated workers/trusted confirmations/projections are harmless;
- notification failure never rolls back workflow;
- no sensitive commercial/address/payout/provider body enters projection payloads;
- Brief is deterministic, snapshot-only, private/no-store, and distinct from Application/legal/payment documents;
- legacy writer consumers are zero and endpoints are retired safely;
- full historical reads remain available.

## 11. P7 — Joint acceptance, integration, and handoff

### Purpose

Prove complete Brand + Creator behavior on the converged runtime and produce immutable developer/operations handoff evidence.

### Work

- run full backend/frontend build, lint, typecheck, unit, contract, integration, and production-shaped PostgreSQL suites;
- run role × lifecycle × stage × Deliverable × fulfillment × provider/recovery matrix;
- run browser acceptance for both Brand and Creator routes, desktop and mobile;
- test refresh/re-entry, invalid deep links, socket degradation, membership changes, stale commands, duplicate trusted confirmations, terminal residual behavior;
- test FIXED and both NEGOTIABLE branches;
- test physical default/override flows and non-physical exclusion;
- test full production/publishing/compliance/settlement/feedback lifecycle;
- compare current visual result to accepted production/Phase G/Aurora references;
- inspect migrations against the exact integration base and production-shaped database;
- publish checkpoint SHAs, fetch back, verify trees, and prepare non-force integration;
- create developer handoff, migration/deployment order, configuration/debt register, and rollback/recovery notes.

### Outputs

```text
C04_P7_JOINT_RUNTIME_ACCEPTANCE_LEDGER_V1
C04_DEVELOPER_CODE_INTEGRATION_HANDOFF_V1
C04_MODULE_CLOSEOUT_V1
```

### Gate

- both C-04 backend and frontend implementation lines have separately passed their acceptance gates and are present on the exact joint integration base;
- every accepted Product/architecture invariant has executable evidence;
- Brand shared behavior has no regression;
- Creator role/destination/first-proposal behavior passes;
- migration path and legacy compatibility pass on production-shaped PostgreSQL;
- no unresolved critical/high defect;
- exact backend/frontend SHAs fetched back and recorded;
- Parent performs final acceptance; the C-04 worker does not self-accept.

## 12. Required scenario matrix

At minimum, automated or browser acceptance must cover:

| Dimension | Required cases |
|---|---|
| Application lineage | same-Application replay; concurrent approval; two Applications same Creator × Campaign; sibling preservation |
| Commercial | FIXED; NEGOTIABLE proposal accepted; counter accepted; counter declined; proposal/negotiation declined; minimum violation |
| Team | Owner; Manager; Assistant; inactive member; removed member; role downgrade; cross-subject ID; concurrent Owner/Manager |
| Fulfillment | none; physical default; physical override; no default; stale default; service/access/experience/other; first issue/remediation; second issue hard stop |
| Production | each Deliverable; two revisions; final reject; 72h auto-approval; mixed per-Deliverable states |
| Publishing | not required; Brand-approved authorization; SYSTEM-auto-approved awaiting Brand decision; authorize; decline; evidence; correction; verify |
| Settlement | not eligible; eligible; processing; settled; blocked; refund/payout duplicate callback; terminal residual settlement |
| Feedback | Creator/Brand order; both submitted reveal; 48h reveal; duplicate submission; Team actor audit |
| Runtime | initial load; refresh; re-entry; deep link; invalid ID; response contract failure; socket degraded/reconnect; action version conflict |
| UI | desktop; 375/390/767 mobile; keyboard; focus restoration; readable Assistant states; no PII leak |
| Compatibility | legacy null source; exact-provenance row; ambiguous row; terminal history/chat; retired endpoints |

## 13. Stop conditions

Stop the autonomous sequence and return to Parent if any of the following occurs:

- C-03 accepted seam differs materially from the frozen port or commercial initialization;
- implementation base ancestry/migration graph cannot be reconciled safely;
- preserving shared Brand semantics makes a frozen Creator behavior impossible or unsafe;
- a new Product choice is required;
- a migration would require heuristic identity/source lineage or destructive history loss;
- C-05 ownership would need to be changed rather than consumed;
- C-06/provider work would require C-04 to own KYC/payout execution;
- production/provider/AWS mutation becomes necessary without separate authorization;
- a material UI composition gap remains after current production/Phase G/Aurora reuse and needs UI/UX/Stitch authority;
- acceptance reveals a critical/high unresolved security, money, authorization, or PII defect.

## 14. Parallelism rules for later authorized execution

Parallel work is allowed only when write scopes and dependencies are disjoint:

- schema/migration ownership remains single-writer;
- command/read contract changes precede dependent frontend implementation;
- C-05 actor/destination ports may be prepared in parallel only after persistence contracts freeze;
- frontend state-contract work may overlap backend convergence after DTOs are frozen;
- browser acceptance waits for integrated backend/frontend checkpoints;
- no two workers modify the same migration, contract, or orchestration service concurrently.

The Systems Architect remains the sequencing and acceptance authority during execution. Specialist workers do not broaden Product scope.

## 15. Deferred debt that does not block C-04 MVP

- external email/push notification channel policy beyond required in-app behavior;
- richer fulfillment issue taxonomy beyond description-first evidence;
- usage-rights expiry/reminder engine;
- granular per-member Collaboration permissions beyond frozen roles;
- Creator Marketplace;
- Trust scoring, analytics vaults, or unrelated relationship intelligence;
- payout/KYC/AML/Tax, provider webhook/authentication, and payout/disbursement/refund execution owned by C-06/Escrow/Payout; live C-06 availability is not a C-04 MVP implementation dependency;
- new Stitch design exercises absent a later named gap.

Deferred debt must not be implemented opportunistically.

## 16. Finite plan terminal state

```text
C04_PRODUCT_LOGIC = FROZEN
C04_SYSTEMS_AUDIT = ACCEPTED
C04_CROSS_CONTRACT_RECONCILIATION = ACCEPTED
C04_CANONICAL_BASE_STRATEGY = ACCEPTED
C04_ARCHITECTURE = ACCEPTED
C04_FINITE_EXECUTION_PLAN = ACCEPTED
C04_C03_BACKEND_HANDOFF_DEPENDENCY = IN_PROGRESS
C04_C03_FRONTEND_BASE_DEPENDENCY = IN_PROGRESS
C04_IMPLEMENTATION = NOT_AUTHORIZED
```
