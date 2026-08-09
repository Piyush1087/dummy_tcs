# Collaboration Backend — Executable-Contract Implementation Map

**Status:** CANONICAL / IMPLEMENTATION RECONCILIATION  
**Purpose:** Map the frozen Collaboration command/read/validation contracts onto the existing production NestJS Collaboration module without replacing working infrastructure unnecessarily.  
**Canonical sources:** `collaboration/backend/command_contract.md`, `collaboration/backend/read_model_contract.md`, `collaboration/backend/collaboration_schema.prisma` v1.1, `backend/validation/collaboration/collaboration.schema.ts`.  
**Production evidence:** `src/features/collaboration/**` in `AatishBrianDSilva/creator-commerce-backend-v2-clone`.

## Classification vocabulary

- **RETAIN** — production structure/pattern remains valid with little or no behavioral change.
- **ADAPT** — keep the existing file/service/endpoint pattern, but change semantics/payloads/state logic.
- **SPLIT** — current method/model owns multiple canonical actions/concepts and must become distinct handlers.
- **RETIRE** — remove as an authoritative Collaboration behavior after migration.
- **MOVE** — keep capability but transfer ownership to the correct module.
- **NEW** — canonical command/query has no production equivalent and requires a new handler/read projection.

---

# 1. Module boundary

## `src/features/collaboration/collaboration.module.ts`

**Classification: RETAIN + ADAPT**

Retain the dedicated NestJS Collaboration module, controller, access service, provisioning service, realtime service and Collaboration service boundary.

Adapt providers as the current monolithic `CollaborationService` is split into command-oriented services/read-model services where useful. Do not create a second Collaboration module around the new schema.

Recommended internal target, exact file split optional:

```text
collaboration/
├── collaboration.controller.ts
├── collaboration.gateway.ts
├── dto/ or validation adapters/
├── services/
│   ├── collaboration-access.service.ts
│   ├── collaboration-provision.service.ts
│   ├── collaboration-query.service.ts
│   ├── collaboration-negotiation.service.ts
│   ├── collaboration-securement.service.ts
│   ├── collaboration-fulfillment.service.ts
│   ├── collaboration-production.service.ts
│   ├── collaboration-publishing.service.ts
│   ├── collaboration-resolution.service.ts
│   ├── collaboration-feedback.service.ts
│   ├── collaboration-message.service.ts
│   └── collaboration-realtime.service.ts
└── mappers/
```

This split is organizational, not a domain redesign. A smaller number of services is acceptable if command ownership remains clear.

---

# 2. Controller/API surface

## Existing read endpoints

### `GET /api/v1/collaboration/threads`

**Classification: RETAIN + ADAPT**

Canonical role: `ListCollaborations`.

Keep Brand/Creator authorization and list-query pattern. Adapt:

- route may remain `/threads` during compatibility migration or become `/collaborations` later;
- replace old `UceMilestoneStage` filter with canonical `CollaborationStage`;
- add lifecycle filter;
- preserve Campaign/Brief/search filters;
- add cursor/pagination rather than fixed `take: 100` where useful;
- map one row per canonical `Collaboration`, including Campaign Asset/Product/Brief context, lifecycle/stage/status, derived `actionRequiredBy`, derived `availableActions`, unread count and last-message projection.

Do not assume Campaign × Creator uniqueness.

### `GET /api/v1/collaboration/threads/:collaborationId`

**Classification: RETAIN + REMODEL READ DTO**

Canonical role: `GetCollaborationDetail`.

Keep access assertion and authoritative HTTP hydration. Replace the old `thread + commercials + logistics + finalization + media[]` response with the canonical detail projection:

`identity + sourceContext + lifecycle/workflow + commercial/securement + fulfillment + deliverables/submissions + publishing + settlement + resolution + feedback`.

Derive `actionRequiredBy` and `availableActions`; do not read them from persisted aggregate truth.

### `GET /api/v1/collaboration/threads/:collaborationId/messages`

**Classification: RETAIN + ADAPT**

Canonical role: `ListCollaborationMessages`.

Keep persisted USER/SYSTEM message reads and chronological ordering. Add cursor pagination when needed; terminal/completed Collaboration must remain readable.

## Existing write endpoints

### `POST /api/v1/collaboration/threads`

**Classification: RETIRE AS PUBLIC BRAND CREATION + REPLACE WITH TRUSTED PROVISIONING**

Current production lets Brand create a thread by supplying Campaign/Brief/Creator/Product fields. Canonical creation identity is one approved Application.

Target command: `ProvisionCollaborationFromApprovedApplication`.

Required changes:

- input becomes `sourceApplicationId` plus explicit per-Deliverable `publishingRequired` resolution until upstream authoring is frozen;
- command runs only from trusted Campaign/Application backend flow (`SYSTEM`/internal backend), not arbitrary Brand-authored lineage;
- service loads and validates the APPROVED Application and derives Campaign/CampaignCreator/CampaignAsset/Brief/Brand/Creator lineage itself;
- idempotency is `sourceApplicationId @unique`;
- create snapshot, commercial record, fulfillment record as applicable, Deliverable Executions, publishing records and creation event/message atomically.

### `POST .../negotiation/quote`

**Classification: RETIRE / ABSORB INTO APPROVED APPLICATION PROPOSAL**

Current production allows a new Creator quote after Collaboration creation and supports multiple negotiation rounds. Canonical Negotiation begins from the approved Application/commercial proposal. Do not keep a second unconstrained Creator quote cycle.

If a future product requirement reintroduces Creator-authored negotiation after approval, it must be added explicitly to the frozen command contract rather than preserving this legacy endpoint by default.

### `POST .../negotiation/counter-offer`

**Classification: RETAIN + ADAPT**

Canonical command: `CounterCreatorProposal`.

Keep Brand-only action-specific endpoint pattern. Change payload to canonical `counterFee`; enforce exactly one Brand counter; update canonical `CollaborationCommercialAgreement.negotiationState`; no global `negotiationRound`; no 30/70 recalculation fields.

### `POST .../negotiation/accept`

**Classification: SPLIT**

Current single `acceptCommercials()` is actor-ambiguous and can derive arbitrary final amount from request/current fields.

Replace with two explicit commands/endpoints or equivalent actor-specific handlers:

- `AcceptCreatorProposal` — BRAND from `AWAITING_BRAND_DECISION`;
- `AcceptBrandCounter` — CREATOR from `AWAITING_CREATOR_DECISION`.

The agreed fee is derived from the specific accepted proposal/counter, not supplied by the client as arbitrary `final_quote`.

### Missing Negotiation commands

**NEW:** `DeclineBrandCounter` and explicit `EndCollaboration`/early cancellation path according to policy.

---

# 3. Securement

### `POST .../securement/fund-escrow`

**Classification: SPLIT + ADAPT**

Current production directly marks escrow FUNDED and advances stage from a Brand request.

Canonical separation:

1. `RequestEscrowFunding` — BRAND requests funding of **100% agreed Creator fee** through Payout/Escrow;
2. `ConfirmEscrowFunding` — SYSTEM consumes authoritative funding confirmation and only then completes Securement.

Never fabricate `vault_${collaborationId}` as authoritative funding evidence. Do not auto-progress from a client assertion.

### `POST .../securement/advance-receipt`

**Classification: ADAPT + RENAME**

Canonical command: `ReportManualPayment`.

Retain manual payment-evidence concept, but remove “advance” semantics. Manual rail reports the actual configured payment obligation and is capability-driven.

Payload becomes provider-neutral `paymentEvidenceRef` rather than a Collaboration-owned receipt URL assumption.

### `POST .../securement/confirm-manual-advance`

**Classification: ADAPT + RENAME**

Canonical command: `ConfirmManualPaymentReceived`.

Creator confirmation remains authoritative for Manual receipt. Remove fixed Advance wording/semantics.

### Missing Manual command

**NEW:** `ReportManualPaymentNotReceived` -> Securement blocked/disputed; no automatic termination or allocation.

### Creator bank details

`POST /creator/bank-details` and Collaboration-owned bank detail dependencies are **MOVE/RETAIN OUTSIDE Collaboration domain** under Settings/Payout ownership. The Collaboration UI may link/embed them, but command processing should consume payout-detail availability rather than own bank records.

---

# 4. Fulfillment

### `POST .../logistics/dispatch`

**Classification: ADAPT + RENAME**

Canonical command: `ProvideFulfillment`.

Keep useful evidence fields such as tracking/courier/access/redemption/service evidence. Remove `CollaborationIndustryType` routing and all D2C-vs-non-D2C branching. Applicability and Brand Support type come from the locked execution snapshot.

Rename route/domain terminology from `logistics` to `fulfillment` as migration permits.

### `POST .../logistics/confirm-receipt`

**Classification: ADAPT + RENAME**

Canonical command: `ConfirmFulfillment`.

Keep Creator confirmation pattern. It must operate against canonical Fulfillment state and then activate Production only after server-owned applicability/completion evaluation.

### `POST .../logistics/report-issue`

**Classification: RETAIN + ADAPT**

Canonical command: `ReportFulfillmentIssue`.

Keep Creator-only issue reporting and bounded issue mechanism, but persist append-oriented `CollaborationFulfillmentIssue` rows. Issue #1 -> remediation state; issue #2 -> terminal resolution with Creator entitlement 0 / full Brand refund, without setting `isPaused=true` or requiring fault adjudication.

### Missing remediation command

**NEW:** `ProvideFulfillmentRemediation` for Brand after issue #1.

---

# 5. Production / Deliverables

### `POST .../production/submit`

**Classification: ADAPT SUBSTANTIALLY**

Canonical command: `SubmitDeliverable`.

Retain append/version submission pattern and 72h persisted deadline. Replace global Collaboration media grain with `deliverableExecutionId` + `CollaborationSubmissionVersion`.

Required payload:

- `deliverableExecutionId`;
- provider-neutral `assetRef`;
- optional submission metadata.

Version number is per Deliverable Execution; do not derive it from global Collaboration `revisionCount`.

### `POST .../production/review`

**Classification: SPLIT**

Current `reviewMedia()` combines approval, revision request and final rejection using one global pending media item and global revision counter.

Replace with explicit actions against exact `deliverableExecutionId` + `submissionVersionId`:

- `ApproveDeliverable`;
- `RequestDeliverableRevision`;
- `RejectFinalDeliverable`.

Brand feedback is mandatory for ordinary revision requests. Maximum two Brand-requested revisions is enforced per Deliverable.

### Auto approval

**NEW executable path:** `AutoApproveDeliverable` actor SYSTEM.

Production already persists a 72h deadline but has no confirmed scheduler executor. Scheduler/worker technology may vary, but it must invoke this stale-safe command rather than directly patching rows.

`AUTO_APPROVED` completes Production obligation but never creates publication authorization by itself.

---

# 6. Publishing / compliance

### `POST .../posting/live-url`

**Classification: ADAPT SUBSTANTIALLY**

Canonical command: `SubmitPublishingEvidence`.

Remove universal Instagram/TikTok/YouTube URL validation and singular Collaboration-level `livePostUrl`. Target a specific Deliverable Execution. Accept provider-neutral evidence reference + optional platform/format metadata according to locked Deliverable context.

The command is valid only when `publishingRequired == true` and explicit Brand publication authorization exists.

### `POST .../posting/verify-compliance`

**Classification: SPLIT + ADAPT**

Current method verifies one URL, sets compliance boolean, marks final payout released/escrow settled and advances to Feedback in one transaction.

Canonical responsibilities must be separated:

- `VerifyPublishing` — BRAND or trusted SYSTEM, Deliverable-specific;
- `RequestPublishingCorrection` — BRAND;
- `SubmitCorrectedPublishingEvidence` — CREATOR;
- `BlockPublishingCompliance` — trusted SYSTEM/ADMIN where needed;
- settlement eligibility/execution handled separately by settlement commands.

Verification must not directly mark money settled or move to a Feedback stage.

---

# 7. Settlement / financial resolution

Production Collaboration controller/service has no complete canonical command surface for entitlement vs Payout execution.

**NEW command family:**

- `EstablishNormalSettlementEligibility` — SYSTEM;
- `RequestSettlementExecution` — SYSTEM/integration;
- `ConfirmSettlementExecution` — SYSTEM from authoritative Payout confirmation;
- `ConfirmRefundExecution` — SYSTEM from authoritative Payout confirmation;
- `ApplyAdminResolution` — ADMIN with explicit entitlement/reason/residual obligations;
- `EndCollaboration` — actor submits reason/evidence; backend classifies lifecycle/outcome.

Existing escrow/ledger/idempotency infrastructure should be **RETAINED in Payout/Escrow** and adapted away from fixed ADVANCE_30 / FINAL_70 semantics. Collaboration owns entitlement, not money movement.

No generic `setSettlementState`, `setLifecycle`, or balance patch endpoint is allowed.

---

# 8. Completion / feedback

### `POST .../feedback/review`

**Classification: RETAIN FORM/PAYLOAD CONCEPT + ADAPT DOMAIN POSITION**

Canonical command: `SubmitCollaborationFeedback`.

Keep rating 1..5 and optional review text, but only after `lifecycle=COMPLETED`. Feedback is not Stage 6 and does not cause completion.

### Feedback reveal

Current production reveals immediately when both ratings exist and has no confirmed 48h executor.

**ADAPT + NEW SYSTEM command:** `RevealFeedback` at earlier of both-submitted or 48h expiry. Persist feedback window visibility/reveal result independently from Collaboration lifecycle.

---

# 9. Messages / conversation

### `POST .../messages`

**Classification: RETAIN + SMALL ADAPT**

Canonical command: `PostCollaborationMessage`.

Keep persisted USER messages, sender, body, unread projection updates and realtime notification. Do not automatically prohibit chat merely because lifecycle is terminal unless future product policy explicitly says so; frozen frontend expects historical chat to remain available and resolution use may require continued conversation.

System messages must continue to be generated by backend domain effects/events rather than arbitrary client SYSTEM-message requests.

### `appendSystemMessage()`

**Classification: RETAIN + ADAPT**

Keep the projection function, but pair each consequential state mutation with canonical `CollaborationEvent` append. System chat is a readable projection, not the authoritative audit event.

---

# 10. Query/access services

## `CollaborationAccessService`

**Classification: RETAIN + ADAPT INCLUDE SHAPE**

Keep role-scoped access checks and Brand profile resolution. Replace old include graph (`commercials/logistics/finalization/media`) with canonical owned relations needed by detail reads. Consider separate list/detail selects instead of one large `COLLABORATION_THREAD_INCLUDE` for query efficiency.

Do not weaken the “not found for unauthorized actor” behavior.

## `CollaborationService.listThreads()`

**Classification: RETAIN QUERY PATTERN + ADAPT**

Keep viewer-based Brand/Creator scoping, Campaign/Brief/search filters and persisted inbox ordering. Add lifecycle/canonical-stage filters and derive action projections. Replace old stage enum and legacy fields.

## `CollaborationService.getThread()`

**Classification: RETAIN HYDRATION ENTRY + REMODEL MAPPER**

Keep authoritative DB read + unread clearing. Return canonical detail DTO and derived actions. It must be sufficient to reconstruct Collaboration after refresh/re-entry without socket state.

## Context queries

**NEW:**

- `GetCreatorContextForBrand` — factual Creator summary + this Collaboration + prior Collaborations for the same Brand/Creator only;
- `GetBrandContextForCreator` — lightweight Brand/CampaignAsset/Brief/current Collaboration context.

These should be read projections, not new mutable profile ownership inside Collaboration.

---

# 11. Mapper/read DTO layer

## `utils/collaboration-thread.mapper.ts`

**Classification: RETAIN CONCEPT + REWRITE OUTPUT SHAPES**

Keep a mapping boundary between Prisma rows and API DTOs. Retire legacy fields/assumptions:

- `payoutMode: BARTER`;
- `industry`;
- global `negotiationRound`;
- global `fulfillmentIssueCount` as the only issue history;
- global `revisionCount`;
- `isPaused`/`isTerminated` booleans;
- `advance_30_amount` / `balance_70_amount`;
- `logistics` DTO terminology;
- `finalization.livePostUrl` / one compliance boolean;
- `media[]` without Deliverable identity.

New mapping should expose canonical list/detail models and derive `actionRequiredBy`/`availableActions` from runtime state.

Do not compute commercial entitlement/refund amounts in this mapper; consume authoritative backend resolution fields.

---

# 12. DTO / validation layer

## `dto/collaboration-actions.dto.ts`

**Classification: RETIRE AS CANONICAL VALIDATION SOURCE + ADAPT AS TRANSPORT ADAPTER IF NEST REQUIRES**

Production class-validator DTOs encode legacy semantics (`campaign_id` thread creation, Creator quote cycle, BARTER payout mode, advance receipt, logistics, media URL, singular live URL, direct bank details).

Canonical input validation source is now `backend/validation/collaboration/collaboration.schema.ts`.

Implementation options:

- preferred: use the canonical Zod schemas directly through a Nest pipe/adapter;
- acceptable transition: keep thin Nest DTO wrappers that map to/call canonical schemas, without maintaining independent rule definitions.

Do not keep two diverging validation rule sets.

## `dto/collaboration-query.dto.ts`

**Classification: ADAPT / REPLACE WITH CANONICAL QUERY SCHEMA**

Move from `UceMilestoneStage` to canonical `CollaborationStage`; add lifecycle, cursor and limit. Reuse `listCollaborationsQuerySchema` as validation authority.

---

# 13. Provisioning service

## `CollaborationProvisionService.provisionFromUceApproval()`

**Classification: RETAIN SERVICE PURPOSE + REWRITE IDENTITY/CREATION LOGIC**

Current service is the right architectural location for idempotent provisioning, but its business grain is wrong.

Retain:

- transaction-based creation;
- idempotent provisioning intent;
- loading upstream Campaign/Brief/Creator context;
- initial system message/realtime projection.

Replace:

- lookup by `campaignId_creatorUserId` -> lookup by `sourceApplicationId`;
- caller-supplied Campaign/Brief/Creator lineage -> derive from APPROVED Application;
- `UceCampaignCollaboration` bridge as operational identity;
- industry mapping;
- default 30%;
- BARTER branch;
- `advance30Amount/balance70Amount`;
- automatic creation of legacy logistics/finalization rows.

Add:

- validation Application is APPROVED;
- locked `CollaborationExecutionSnapshot`;
- exact Campaign Brand Support snapshot;
- final upstream advance percentage/currency provenance;
- `CollaborationDeliverableExecution[]` from Brief Deliverables;
- mandatory explicit `publishingRequired` fact per Deliverable;
- canonical Negotiation applicability initialization;
- canonical event append.

P2002/idempotent duplicate handling should remain, keyed to `sourceApplicationId`.

---

# 14. Realtime

## `CollaborationRealtimeService`, gateway/socket infrastructure

**Classification: RETAIN**

Keep realtime broadcast/join-room architecture. Events are invalidation/latency signals only.

Canonical pattern after mutation:

`command commit -> optional side effects -> realtime event -> clients refetch authoritative read model`.

Do not send socket-only workflow state that cannot be reconstructed from database reads.

---

# 15. Legacy utility/guard layer

## `collaboration-action-guards.ts`

**Classification: ADAPT / REPLACE WITH CANONICAL COMMAND PRECONDITIONS**

Retain the idea of reusable precondition guards, but rewrite against canonical lifecycle/stage/substate/Deliverable records. Retire guards tied to:

- advance receipt semantics;
- old `isFinalOffer`/round model;
- legacy logistics dispatched state;
- global pending media;
- singular live post/compliance.

Command services remain authoritative; validation schemas validate payload shape, not workflow eligibility.

## `map-collaboration-industry.util.ts`

**Classification: RETIRE FROM Collaboration workflow**

Brand industry must not determine fulfillment applicability/type. Campaign Brand Support snapshot is canonical.

## `splitEscrowQuote()` usage inside Collaboration

**Classification: ADAPT / GENERALIZE**

Calculation helper may remain if it accepts actual configured Advance percentage and returns neutral `advanceAmount`/`balanceAmount`. No field/enum/API semantics should retain 30/70 naming.

---

# 16. Production `CollaborationService` overall

**Classification: SPLIT/REFACTOR, NOT REPLACE MODULE**

The service currently mixes queries, messaging, provisioning orchestration, all workflow commands, money semantics, state progression and feedback in one class.

Do not port it line-for-line to the new schema. Preserve working authorization/access/realtime/transaction patterns while migrating each method to the canonical command/query boundary.

Every consequential command should follow:

`load + authorize -> lifecycle/stage/substate check -> validate evidence -> atomic canonical state update + CollaborationEvent (+ system message projection) -> external side effects -> realtime invalidation`.

Use `aggregateVersion`/expected version for stale-state protection on commands where concurrent Brand/Creator/System actions can conflict.

---

# 17. Endpoint disposition matrix

| Production endpoint | Canonical disposition | Target command/query |
|---|---|---|
| `GET /threads` | RETAIN + ADAPT | `ListCollaborations` |
| `POST /threads` | RETIRE public creation / REPLACE trusted | `ProvisionCollaborationFromApprovedApplication` |
| `GET /threads/:id` | RETAIN + REMODEL | `GetCollaborationDetail` |
| `GET /threads/:id/messages` | RETAIN + ADAPT | `ListCollaborationMessages` |
| `POST /threads/:id/messages` | RETAIN + ADAPT | `PostCollaborationMessage` |
| `POST .../negotiation/quote` | RETIRE by default | approved Application proposal seeds Negotiation |
| `POST .../negotiation/counter-offer` | RETAIN + ADAPT | `CounterCreatorProposal` |
| `POST .../negotiation/accept` | SPLIT | `AcceptCreatorProposal` / `AcceptBrandCounter` |
| `POST .../securement/fund-escrow` | SPLIT + ADAPT | `RequestEscrowFunding` / `ConfirmEscrowFunding` |
| `POST .../securement/advance-receipt` | ADAPT | `ReportManualPayment` |
| `POST .../securement/confirm-manual-advance` | ADAPT | `ConfirmManualPaymentReceived` |
| `POST .../logistics/dispatch` | ADAPT | `ProvideFulfillment` |
| `POST .../logistics/confirm-receipt` | ADAPT | `ConfirmFulfillment` |
| `POST .../logistics/report-issue` | RETAIN + ADAPT | `ReportFulfillmentIssue` |
| `POST .../production/submit` | ADAPT | `SubmitDeliverable` |
| `POST .../production/review` | SPLIT | Approve / Request Revision / Reject Final |
| `POST .../posting/live-url` | ADAPT | `SubmitPublishingEvidence` |
| `POST .../posting/verify-compliance` | SPLIT | Verify / Correction + separate Settlement |
| `POST .../feedback/review` | RETAIN + MOVE post-completion | `SubmitCollaborationFeedback` |
| `GET /creator/profile` | MOVE/keep profile owner separate | Settings/Profile read |
| `POST /creator/bank-details` | MOVE | Settings/Payout |
| `POST /creator/shipping-address` | MOVE/REUSE as fulfillment profile if appropriate | Settings/Profile |

Canonical commands with no production endpoint yet: `DeclineBrandCounter`, `ReportManualPaymentNotReceived`, `ProvideFulfillmentRemediation`, `AutoApproveDeliverable`, `RequestPublishingCorrection`, `SubmitCorrectedPublishingEvidence`, `BlockPublishingCompliance`, the Settlement/Resolution command family, `EndCollaboration`, `RevealFeedback`, `GetCreatorContextForBrand`, and `GetBrandContextForCreator`.

---

# 18. Recommended migration sequence

1. Integrate frozen canonical Prisma models/reverse relations and migrate data without removing legacy UCE structures yet.
2. Add canonical Zod/Nest validation adapter and canonical list/detail read models.
3. Rewrite provisioning around `sourceApplicationId` and locked execution snapshot.
4. Migrate Negotiation + Securement command handlers.
5. Migrate Logistics -> Fulfillment and two-failure resolution.
6. Introduce Deliverable Execution/Submission Version handlers, then migrate existing media data.
7. Add stale-safe SYSTEM 72h auto-approval executor.
8. Migrate Publishing to per-Deliverable evidence/authorization/compliance.
9. Introduce settlement/resolution command integration with existing Payout/Escrow infrastructure.
10. Move Feedback after completion + add 48h reveal executor.
11. Add Creator/Brand context reads.
12. Remove legacy endpoint/model authority only after production reads/writes no longer depend on it.

During migration, compatibility adapters may temporarily translate old frontend/API calls, but they must call canonical commands rather than maintain two business state machines.

---

# 19. Explicit non-goals for implementation

Do not:

- recreate a second Collaboration aggregate in `UceCampaignCollaboration`;
- preserve Campaign × Creator uniqueness;
- infer fulfillment from industry;
- hardcode 30/70 or release Advance automatically on stage progress;
- use BARTER as a payment rail;
- use global Collaboration revision count;
- collapse multi-Deliverable Production into one pending media row;
- treat `AUTO_APPROVED` as permission to publish;
- couple compliance verification directly to payout settlement;
- make Feedback an active execution stage;
- let frontend/socket/client state become authoritative;
- expose generic state patch endpoints;
- assign Brand/Creator Pause or Resume commands before Pause policy is frozen.

This map is the production migration authority for the existing NestJS Collaboration module. If production implementation and this map conflict, implementation should be reconciled to the frozen domain/runtime/schema/command/read contracts rather than preserving a legacy behavior merely because it already exists.