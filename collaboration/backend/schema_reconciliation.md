# Collaboration Backend Schema Reconciliation

**Status:** RECONCILIATION / MODIFICATION INSTRUCTIONS — NOT YET CANONICAL SCHEMA  
**Production baseline:** `collaboration/backend/production_schema_baseline.prisma`  
**Canonical behavior source:** frozen Collaboration contracts in `collaboration/contracts/`  

## Purpose

This document records how the current production Prisma structures should be retained, adapted, split, consolidated, retired, or extended before a canonical Collaboration schema is produced.

The production baseline is intentionally preserved separately. **Do not edit the baseline to make it look canonical.** The next canonical schema must be derived from the baseline plus these instructions and the frozen contracts.

## Classification vocabulary

- **KEEP** — production structure is compatible and should remain substantially intact.
- **KEEP + MODIFY** — useful structure exists but fields/semantics must change.
- **SPLIT** — one production structure currently owns multiple canonical concepts and must be separated.
- **MOVE** — concept survives but ownership moves to another module/entity.
- **CONSOLIDATE** — overlapping production structures should converge on one source of truth.
- **RETIRE** — production concept should stop being authoritative after migration.
- **NEW** — required canonical concept does not exist in the production schema.
- **DEFER** — preserve architectural room but do not assign behavior yet.

---

# 1. Two Collaboration structures exist in production

Production currently contains both:

1. `UceCampaignCollaboration`
2. `Collaboration`

They overlap materially.

`UceCampaignCollaboration` currently carries applicant/prospect status, workflow milestone, action-required role, negotiation/securement/logistics/review/publishing substates, commercial values, fulfillment data, content draft URL, publishing URL, compliance, timers, audit logs, content drafts and live telemetry.

`Collaboration` separately carries the operational Brand/Creator workflow with Campaign/Brief/Product references, current stage, negotiation/fulfillment/revision counters, lifecycle booleans, commercials, logistics, media, finalization, messages and escrow.

`Collaboration.ucePipelineCollaborationId` creates a one-to-one bridge back to `UceCampaignCollaboration`.

## Reconciliation decision

**CONSOLIDATE operational Collaboration ownership around `Collaboration`.**

`UceCampaignCollaboration` must not remain a second operational Collaboration aggregate.

The final migration should determine which of its fields belong to:

- Campaign Applicants / CampaignCreator pipeline;
- Campaign Collaboration projection/read model;
- Reporting/Intelligence evidence;
- the standalone canonical `Collaboration` aggregate.

Do **not** delete `UceCampaignCollaboration` immediately. It may contain production data and pipeline behavior that require migration. Treat it as a legacy/bridge structure until field-level migration is complete.

### Likely disposition of `UceCampaignCollaboration`

- Prospect/applicant fields (`PROSPECT_*`, `APPLICANT_*`, match score, vetting, rejection reason, invitation fields): **MOVE to / reconcile with Campaign Applicants and acquisition pipeline.**
- Operational milestone/state fields: **RETIRE as authoritative once canonical `Collaboration` owns workflow.**
- `actionRequiredByRole`: **useful concept; MOVE/REMODEL into canonical Collaboration read/runtime state.**
- content draft / logistics duplication: **RETIRE after migration to canonical Fulfillment and Deliverable Submission structures.**
- live telemetry/reporting relations: **MOVE/retain as Reporting/Intelligence integration, not Collaboration workflow ownership.**
- `workflowCollaboration` bridge: **temporary migration bridge; remove only after migration is safe.**

---

# 2. Collaboration identity and creation grain

## Production

`Collaboration` currently has:

```prisma
@@unique([campaignId, creatorUserId])
```

This enforces one Collaboration per Campaign × Creator.

## Canonical requirement

A Collaboration is created from one **specific approved Application**. The same Creator may have multiple Collaborations in the same Campaign when multiple Applications are approved.

## Modification

- `@@unique([campaignId, creatorUserId])`: **RETIRE**.
- `sourceApplicationId`: **NEW, required first-class lineage field**.
- enforce **one Application → at most one Collaboration** via unique source-Application relation.
- keep `campaignId`, `creatorUserId`/creator identity, `briefId`, and `productId` as source/context references where appropriate.
- retain `collaborationId` as stable operational identity.

The exact Application model relation must map to the already-frozen Campaign/Applicants schema in `dummy_tcs`; do not invent a parallel Application table inside Collaboration.

---

# 3. Locked execution snapshot

## Production

`Collaboration` holds live relations to Campaign, Brief and Product but no clear immutable execution snapshot.

## Canonical requirement

Active Collaboration obligations must not silently change when Campaign, Product, Brief, Commercial Strategy, fulfillment configuration, Deliverables, rights or publishing settings are edited upstream.

## Modification

Add a **NEW locked execution snapshot** owned by Collaboration, containing the Collaboration-relevant source values agreed at creation/terms lock.

The snapshot must cover at minimum:

- Campaign context needed for execution;
- Product/service consideration;
- Brief context;
- required Deliverables;
- fulfillment configuration from Create Campaign;
- publishing requirements;
- usage-rights terms relevant to execution;
- Campaign commercial inputs such as configured advance percentage and commercial currency;
- creator-specific agreed commercial terms once Negotiation completes.

Keep source IDs for lineage in addition to snapshots.

---

# 4. Lifecycle vs workflow stage

## Production

`Collaboration` currently uses:

```prisma
currentStage
isPaused
isTerminated
```

and production runtime can set `isPaused` and `isTerminated` together.

## Canonical requirement

Lifecycle and workflow are independent dimensions.

### Lifecycle

- `ACTIVE`
- `PAUSED`
- `COMPLETED`
- `CANCELLED`
- `TERMINATED`

### Active workflow stages

- `NEGOTIATION`
- `SECUREMENT`
- `FULFILLMENT`
- `PRODUCTION`
- `PUBLISHING_SETTLEMENT`

## Modification

- `isPaused`: **RETIRE as authoritative boolean**.
- `isTerminated`: **RETIRE as authoritative boolean**.
- `lifecycle`: **NEW canonical enum/field**.
- `currentStage`: **KEEP + MODIFY enum values**.
- add terminal context such as `endedFromStage`, `endedAt`, `endedReason`/resolution reference as required.
- `ARCHIVAL` and `FEEDBACK_SYNC` must not remain active execution stages.
- Feedback is post-completion.

### Pause

`PAUSED` is preserved in the lifecycle enum but its command authority, resume authority, timer effects and Campaign-deadline effects are **DEFERRED**. Do not create ordinary Brand/Creator pause controls yet.

---

# 5. Stage/substate and action-required representation

`UceCampaignCollaboration` contains useful explicit substate concepts and `actionRequiredByRole`, while `Collaboration` mostly derives behavior from stage plus scattered data.

## Modification

- preserve the concept of explicit stage status/substate: **KEEP + REMODEL**.
- canonical stage status should support `NOT_STARTED`, `IN_PROGRESS`, `BLOCKED`, `COMPLETED`, `SKIPPED` or equivalent.
- `actionRequiredBy`: **NEW/REMODELED first-class derived/read-model concept** supporting `BRAND`, `CREATOR`, `SYSTEM`, `ADMIN`, `NONE`.
- backend should ultimately expose allowed actions; frontend should not be the state-machine authority.

Exact persistence vs derivation can be decided when the canonical schema is drafted.

---

# 6. Commercial model

## Production

`CollaborationCommercial` contains:

- `initialQuote`
- `brandCounterOffer`
- `finalQuote`
- `productRetailValue`
- `isFinalOffer`
- `advance30Amount`
- `balance70Amount`
- bank-details relation
- escrow status / receipt URLs / agreement URL

`UceCampaignCollaboration` separately contains `totalQuote`, `advance30Value`, `balance70Value`.

## Modification

### KEEP

- quote/proposal history concept;
- final agreed creator-specific fee concept;
- product/service consideration as a separate concept;
- agreement/evidence references where useful.

### RETIRE / REPLACE

- `advance30Amount`
- `balance70Amount`
- `advance30Value`
- `balance70Value`
- any hard-coded 30/70 semantics.

### NEW / GENERALIZE

Canonical commercial persistence needs configuration-neutral fields/concepts including:

- authoritative agreed Creator cash fee;
- commercial/settlement currency basis;
- `advancePercentageSnapshot` inherited from Create Campaign;
- derived `advanceAmount`;
- derived remaining balance;
- non-monetary product/service consideration kept separate from cash compensation;
- commercial lock timestamp/status as needed.

Advance percentage must never be inferred as 30 merely because production previously used 30/70.

---

# 7. Payout mode and barter

## Production

```prisma
enum CollaborationPayoutMode {
  ESCROW
  MANUAL
  BARTER
}
```

## Modification

- `BARTER` as a payout rail: **RETIRE**.
- cash-zero + product/service consideration represents barter naturally.
- hybrid cash + product/service consideration is also valid.
- `ESCROW`: **KEEP + MODIFY semantics**.
- `MANUAL`: **KEEP only as capability/config-driven payment rail**, not a guaranteed journey.

Manual payment must require Creator receipt confirmation before being considered verified. Missing payout details should block the relevant payment action, not invalidate the Collaboration aggregate.

---

# 8. Escrow and payout boundary

Production contains strong reusable infrastructure:

- `CollaborationEscrowLock`
- `EscrowTransactionLedger`
- `IdempotencyRegistry`
- `BrandEscrowVault` in the full production schema
- Creator settlement/banking infrastructure in the full production schema.

## Modification

### KEEP

- escrow lock/ledger infrastructure;
- transaction idempotency;
- full Collaboration-to-escrow correlation;
- external payout/settlement ownership.

### REMOVE/GENERALIZE old policy

- automatic Advance disbursement when execution begins;
- `ADVANCE_30` / `FINAL_70` as fixed business meaning;
- refund formulas based on fixed 30%.

### Canonical policy

For platform escrow, Brand secures **100% of the agreed Creator cash fee** during Securement. Advance percentage governs protected entitlement in qualifying outcomes; it does not mean only the Advance is funded and it does not mean Advance is automatically released when execution starts.

Collaboration owns **entitlement**. Payout/Escrow owns **money movement**.

The eventual financial resolution input should be capable of expressing:

- Creator entitlement amount;
- Brand entitlement/refund amount;
- resolution reason;
- execution status independently from entitlement.

---

# 9. Creator bank/payment details

`CollaborationCommercial.creatorBankDetailsId` directly links Collaboration commercial persistence to Creator banking.

## Modification

- bank/payment destination ownership: **MOVE to Settings/Payout**.
- Collaboration may retain a payout execution reference/snapshot if required for audit, but must not become the canonical bank-details store.
- production `CreatorBankDetails` / `CreatorSettlementProfile` should remain external ownership models.

---

# 10. Fulfillment (currently Logistics)

## Production

Two overlapping logistics structures exist:

- `UceCollaborationLogistics`
- `CollaborationLogistics`

Operational rules also use `CollaborationIndustryType` to decide physical vs digital/service behavior.

## Modification

- domain name `LOGISTICS`: **RENAME/GENERALIZE to FULFILLMENT**.
- `CollaborationLogistics`: **KEEP + REMODEL as canonical fulfillment execution/evidence structure**, or replace with an equivalent canonical Fulfillment model.
- `UceCollaborationLogistics`: **CONSOLIDATE/RETIRE after migration**.
- `CollaborationIndustryType` as fulfillment router: **RETIRE**.
- fulfillment applicability/type must be snapshotted from the **frozen Create Campaign fulfillment configuration**.

Required capability categories are conceptually physical, digital, service/offline, or none, but exact enums/fields must match the canonical Campaign contract rather than invent a second taxonomy.

Useful production evidence fields such as tracking, courier, access credentials, redemption/service evidence and Creator confirmation may be retained where they map to that configuration.

---

# 11. Fulfillment issue hard-stop

Production already stores `fulfillmentIssueCount` and issue evidence.

## Modification

- bounded two-issue mechanism: **KEEP**.
- issue #1 permits remediation.
- issue #2 ends normal Collaboration execution; no third ordinary attempt.
- MVP does not require fault attribution before resolution.
- canonical financial outcome for this hard-stop: **Creator entitlement = 0; Brand entitlement = full escrow refund**.

Do not encode Brand/Creator fault as a prerequisite to the refund calculation.

---

# 12. Production must become Deliverable-grained

## Production

`Collaboration` has a global `revisionCount` and `CollaborationMedia[]` keyed by Collaboration/phase/version. `UceCollaborationContentDraft` is another parallel versioned draft structure.

## Canonical requirement

Each required Deliverable from the locked Brief/Application execution snapshot needs its own execution state and submission/version history.

## Modification

### NEW

Introduce an explicit **Collaboration Deliverable Execution** entity (exact name TBD) keyed to the Collaboration and its snapshotted Deliverable definition.

It must support one execution instance per required Deliverable and independent status/revision state.

### Existing `CollaborationMedia`

**KEEP infrastructure + SPLIT/GENERALIZE** into Deliverable-linked submission versions.

Retain useful fields/concepts:

- version number;
- asset/media reference;
- review status;
- Brand feedback;
- auto-approval deadline;
- created/review timestamps.

Change:

- attach each submission version to a specific Deliverable Execution;
- direct `mediaUrl` should become/permit an asset abstraction/reference rather than make storage vendor/domain part of Collaboration identity;
- `deliverableType` free text should not substitute for Deliverable identity;
- remove global Collaboration-level revision ownership.

### `UceCollaborationContentDraft`

**CONSOLIDATE/RETIRE** once its useful historical data is migrated to the canonical Deliverable Submission structure.

---

# 13. Revision model

Production stores global `revisionCount` / `revisionRoundCount`.

## Modification

- global Collaboration revision count as workflow authority: **RETIRE**.
- revision count: **MOVE to Deliverable Execution**.
- maximum **2 Brand-requested revision rounds per Deliverable**.
- normal path supports initial submission plus up to two revised submission versions.
- one required Deliverable reaching final hard-stop ends successful execution for the MVP Collaboration scope; no partial repricing is introduced.

---

# 14. 72-hour review timer

Production has `autoApprovalDeadline` / `autoApprovalDeadline72h` fields.

## Modification

- 72-hour concept: **KEEP**.
- timer ownership: **MOVE to each submitted Deliverable version/review cycle**.
- timer target must be stale-safe and reference the exact Deliverable Submission version.
- system auto-approval must revalidate current state before acting.

Important canonical distinction:

- explicit Brand approval can satisfy Production and authorize publishing where publishing is required;
- 72h `AUTO_APPROVED` satisfies the Production obligation but **does not itself grant publication consent**.
- if no explicit publication authorization exists, required publishing is bypassed and the Collaboration may proceed to settlement/completion without a live post.

The schema should retain enough status/evidence to distinguish `APPROVED` from `AUTO_APPROVED`.

---

# 15. Publishing and compliance

## Production

`CollaborationFinalization` stores one `livePostUrl`, one `partnershipAdCode`, compliance boolean and final-payout boolean. `UceCampaignCollaboration` similarly stores one `livePublishedUrl`.

## Modification

`CollaborationFinalization`: **SPLIT**.

Publishing/compliance must be Deliverable-aware, not one URL per Collaboration.

Add/derive per applicable Deliverable:

- whether publishing is required;
- whether explicit Brand publication approval exists;
- publication evidence/reference;
- verification/compliance state;
- correction-required state/evidence;
- dispute/block state where necessary.

Remove universal platform URL assumptions from the core schema. Platform comes from the locked Deliverable requirement.

There is **no 72-hour compliance auto-approval**.

---

# 16. Settlement and completion

Production couples compliance to `isFinalPayoutReleased` and old tranche semantics.

## Modification

Separate:

1. Collaboration settlement **eligibility/entitlement**;
2. Payout execution **processing/confirmation**.

Canonical settlement presentation/state must support at least conceptually:

- not eligible;
- eligible;
- processing;
- settled;
- blocked/error without changing entitlement.

Collaboration becomes `COMPLETED` only after required execution obligations plus required financial settlement are resolved/confirmed.

---

# 17. Feedback

Production stores Brand/Creator ratings and reviews in `CollaborationFinalization`, and UCE treats Feedback as Stage 6.

## Modification

- Feedback as active workflow stage: **RETIRE**.
- raw Collaboration feedback: **KEEP + MOVE to post-completion model/section**.
- completion must not wait for feedback.
- preserve double-blind reveal semantics and eventual 48h reveal capability.
- cross-Collaboration Trust/Intelligence interpretation remains outside Collaboration.

Whether feedback remains a dedicated 1:1 record or becomes role-specific rows can be decided in canonical schema design.

---

# 18. Cancellation, termination and resolution

Production lifecycle booleans and finalization fields do not adequately model canonical abnormal exits.

## NEW canonical concepts

Add explicit resolution data capable of preserving:

- lifecycle outcome (`CANCELLED` / `TERMINATED`);
- ended-from stage;
- reason;
- actor/system source where appropriate;
- ended timestamp;
- Creator entitlement amount;
- Brand entitlement/refund amount;
- financial-resolution status (`PENDING` / `RESOLVED` or equivalent);
- residual obligations such as product return or payment/refund execution references;
- rights resolution/evidence where needed.

### Frozen financial outcomes to support

- Negotiation/pre-securement exit: no Creator payout.
- Brand-protected qualifying post-securement exit: Creator Advance entitlement; Brand receives remaining balance.
- Creator-caused cancellation/non-performance: Creator entitlement 0; Brand receives full escrow.
- second Fulfillment failure: Creator entitlement 0; Brand receives full escrow, without fault adjudication.
- Production hard-stop after allowed revision process: Creator receives actual configured Advance amount; Brand receives balance.
- Advance = 0% means protected Creator entitlement = 0.

Amounts must come from backend resolution policy, not frontend arithmetic.

---

# 19. Messages and domain-event audit

## Production

- `CollaborationMessage` supports `USER` and `SYSTEM` messages.
- `UceCollaborationAuditLog` separately records workflow audit events.

## Modification

`CollaborationMessage`: **KEEP**.

System messages remain presentation/audit projections of real workflow events; messages must not be the workflow authority.

A canonical append-oriented **Collaboration domain-event history** is **NEW/CONSOLIDATE**. It may reuse/migrate useful `UceCollaborationAuditLog` history, but operational events should ultimately attach to the canonical `Collaboration` aggregate.

Current state + consequential event append should be atomic where possible.

---

# 20. Realtime persistence invariant (schema-adjacent)

Production previously experienced Collaboration data appearing live through WebSocket and disappearing after navigation/re-entry.

Canonical persistence rule:

- persisted database/read model is the source of truth;
- HTTP/query hydration must reconstruct Collaboration after refresh/re-entry;
- WebSocket is realtime notification/invalidation transport only;
- no canonical Collaboration state may exist only in socket/client memory.

Schema/read models must therefore persist every workflow state required to rehydrate the Collaboration independently of WebSocket history.

---

# 21. Reporting / live telemetry

`UceCollaborationLiveTelemetry` and Campaign reporting relations are not canonical Collaboration workflow state.

## Modification

- live/performance telemetry: **MOVE/KEEP under Reporting/Intelligence ownership**.
- Collaboration supplies publishing/content evidence and operational facts.
- Reporting/Intelligence derives performance interpretation.
- reporting entities must not determine Collaboration lifecycle/stage.

---

# 22. Deletion / referential behavior

Production uses several `onDelete: Cascade` relations from Campaign/Brand into operational Collaboration.

Canonical contract requires Collaboration history to survive ordinary upstream Campaign archive/deactivation and must not be destructively erased as a side effect of normal Campaign lifecycle actions.

Before canonical schema freeze, review `onDelete` behavior for:

- Campaign → Collaboration;
- Brand → Collaboration;
- Brief/Product → Collaboration;
- Collaboration → evidence/history.

The canonical schema should favor historical preservation and explicit lifecycle resolution over accidental cascade deletion of contractual records.

---

# 23. New canonical model families expected

Exact Prisma names are deliberately **not frozen yet**, but the canonical schema will likely need these model families/concepts:

1. remodeled `Collaboration` aggregate;
2. locked Collaboration execution snapshot;
3. remodeled Collaboration commercial agreement;
4. fulfillment execution/evidence;
5. Deliverable Execution;
6. Deliverable Submission Version / asset reference;
7. Deliverable Publishing/Compliance execution where applicable;
8. financial entitlement/resolution state;
9. post-completion feedback;
10. Collaboration domain-event/audit history;
11. existing Collaboration messages;
12. existing external Escrow/Payout infrastructure referenced rather than duplicated.

The final shape should prefer normalization where state has independent lifecycle/history, and snapshot JSON only where immutable upstream contract capture is appropriate.

---

# 24. Production structures to preserve while migrating

Do not discard working infrastructure merely because its current business rules are outdated.

### Strong KEEP candidates

- `Collaboration` stable operational ID and module boundary;
- Campaign/Brief/Product/Creator/Brand source references;
- `CollaborationMessage`;
- unread/last-message summary fields if still useful for inbox performance;
- command-specific backend/API pattern (outside Prisma);
- escrow lock/transaction/idempotency infrastructure;
- versioned media/submission persistence pattern;
- fulfillment evidence primitives;
- audit/event history concept.

### Strong RETIRE/REPLACE candidates

- Campaign × Creator uniqueness;
- duplicate operational ownership in `UceCampaignCollaboration`;
- `isPaused` / `isTerminated` lifecycle booleans;
- `STAGE_3_LOGISTICS`, `STAGE_4_CONTENT_REVIEW`, `STAGE_6_FEEDBACK_SYNC` as canonical stage vocabulary;
- industry-driven fulfillment;
- `BARTER` payout mode;
- fixed 30/70 fields/enums/formulas;
- automatic Advance release on stage progression;
- global revision count;
- one-media / one-live-post workflow grain;
- Feedback as execution stage;
- single compliance/final-payout boolean bundle.

---

# 25. Required next step before canonical Prisma

Before modifying a canonical Collaboration schema, complete a final dependency check against:

- the frozen Campaign/Applicants/Application schema in `dummy_tcs` so `sourceApplicationId` maps to the correct existing entity;
- the exact frozen Create Campaign fulfillment fields so Collaboration snapshots rather than invents fulfillment configuration;
- existing Campaign Deliverable/Brief representation so Deliverable Execution has correct lineage;
- production scheduler/timer implementation for 72h and 48h jobs;
- production asset/media storage capability;
- existing Payout/Escrow API contracts.

After those checks, produce the **canonical Collaboration Prisma schema as a separate file**. Do not overwrite `production_schema_baseline.prisma`.
