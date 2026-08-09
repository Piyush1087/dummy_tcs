# Collaboration Canonical Prisma — Schema Review / Reconciliation Pass

**Status:** REVIEW COMPLETE — CHANGES REQUIRED BEFORE FREEZE  
**Reviewed file:** `collaboration/backend/collaboration_schema.prisma` v1.0-draft  
**Review basis:** frozen Collaboration contracts (6.2–6.6), production schema reconciliation, dependency check, and frozen Campaign persistence/Brief contracts.  

## Purpose

This pass checks two things before the canonical Collaboration Prisma is frozen:

1. every persisted field/model has a legitimate authoritative owner; and
2. values that are meaningfully derived/read-model state are not accidentally promoted into independent domain truth.

The overall target structure is sound. No redesign is required. The changes below are reconciliation corrections.

---

## 1. Aggregate identity and source lineage — PASS

The draft correctly makes `sourceApplicationId` the unique creation/idempotency identity and removes Campaign × Creator uniqueness.

Keep:

- `sourceApplicationId @unique`;
- Campaign/CampaignCreator/CampaignAsset/Brief/Brand/Creator lineage fields for querying/read projection;
- `collaborationId` as stable operational identity;
- `onDelete: Restrict` on source Application lineage.

Integrated Campaign schema must gain the reverse optional Collaboration relation.

---

## 2. Lifecycle and workflow — PASS WITH ONE DERIVATION CORRECTION

Persisting these aggregate state fields is legitimate:

- `lifecycle`;
- `currentStage`;
- `currentStageStatus`;
- `aggregateVersion`;
- terminal context (`endedFromStage`, reason, actor, timestamp);
- `completedAt`.

### Required correction: `actionRequiredBy`

Frozen workflow contract explicitly defines `actionRequiredBy` as **derived/read-model state, not independent workflow authority**.

Current draft persists:

`actionRequiredBy CollaborationActionRequiredBy`

This should **not be canonical write-authority persistence**.

Recommended canonical treatment:

- remove `actionRequiredBy` from the aggregate table;
- derive it in backend read models from lifecycle + stage/substate + available actions;
- if an implementation later needs a denormalized cached projection for query performance, treat that as a projection/cache with explicit recomputation semantics, not domain truth.

The `CollaborationActionRequiredBy` enum therefore does not need to live in canonical Prisma unless a read-model table is later introduced.

---

## 3. Locked execution snapshot — PASS

`CollaborationExecutionSnapshot` has legitimate Collaboration ownership because it records the immutable execution contract rather than live upstream Campaign state.

Keep:

- Campaign/CampaignAsset/Brief/Application identity context snapshots;
- Brief-level usage rights and creator requirements;
- exact Create Campaign Brand Support facts;
- Campaign commercial context;
- Advance percentage and commercial currency source context;
- immutable lock timestamp.

The overlap between `advancePercentageSnapshot` / commercial currency here and the final Commercial Agreement is acceptable because the two records have different semantics:

- snapshot = upstream framework/provenance;
- commercial agreement = final Creator-specific execution terms.

Do not collapse them merely to remove duplication.

---

## 4. Commercial agreement — PASS WITH INITIALIZATION CORRECTION

The commercial model correctly removes fixed 30/70 and BARTER-rail semantics, and correctly separates non-cash consideration from Creator cash fee.

Keep:

- proposal / one Brand counter / agreed fee;
- currency;
- Advance percentage/amount and balance;
- non-cash consideration;
- payment rail;
- 100% required secured amount;
- external Payout/escrow evidence refs;
- terms/securement timestamps.

### Required correction: `securementState` initialization

The current draft defaults `securementState` to `AWAITING_ESCROW_FUNDING` even though, at Collaboration creation, Negotiation may still be active and Securement applicability has not yet been evaluated.

That default can manufacture a future-stage fact prematurely.

Recommended treatment:

- make `securementState` nullable until Negotiation locks and Securement applicability is evaluated; **or** introduce an explicit `NOT_STARTED` value if the implementation strongly prefers non-null stage substates.

Do not use `NOT_REQUIRED` to mean “not evaluated yet”.

### Negotiation default

`negotiationState = AWAITING_BRAND_DECISION` is only valid when negotiation is required. Since fixed/non-negotiable paths may skip Negotiation, provisioning must explicitly initialize the correct value. Prefer explicit creation-time assignment over relying on this Prisma default.

---

## 5. Fulfillment — PASS

The draft correctly uses exact Campaign Brand Support semantics as the locked applicability/type source and keeps operational fulfillment evidence inside Collaboration.

`issueCount` is technically derivable from `CollaborationFulfillmentIssue[]`, but keeping it as an aggregate counter is acceptable because it participates in a bounded two-attempt concurrency-sensitive workflow. It must remain transactionally consistent with issue rows.

Keep the append-oriented issue rows and unique `(fulfillmentId, sequence)` invariant.

---

## 6. Deliverable execution — PASS WITH CRITICAL DEFAULT CORRECTION

The per-Deliverable structure is correctly aligned with the frozen Brief/Deliverable contract:

`UceBriefDeliverable -> CollaborationDeliverableExecution -> CollaborationSubmissionVersion[]`

Keep:

- `sourceBriefDeliverableId` lineage;
- immutable `definitionSnapshot`;
- independent Deliverable state;
- per-Deliverable revision request count;
- append-oriented submission versions;
- version-level review deadline and result evidence.

### Critical correction: `publishingRequired`

The dependency check deliberately leaves the upstream derivation/authoring rule unresolved.

The draft currently has:

`publishingRequired Boolean @default(false)`

This default is unsafe because a missing upstream resolution would silently become **publishing not required**, which is exactly the kind of assumption the dependency check prohibited.

Required canonical treatment:

- remove `@default(false)`;
- require provisioning/creation logic to provide an explicit resolved boolean for every Deliverable Execution;
- until the upstream rule is frozen, inability to resolve this fact must fail/defer Collaboration execution initialization rather than silently defaulting to false.

This preserves the open product-data gap without allowing it to corrupt runtime obligations.

---

## 7. Submission versions and 72h timer — PASS

Persisting `reviewDeadlineAt` on each submitted version is correct. It is execution evidence, not scheduler technology.

Keep:

- version number;
- provider-neutral `assetRef`;
- review state;
- feedback;
- review deadline;
- manual review / auto-approval timestamps and actor evidence.

`reviewState` and Deliverable `state` are intentionally both persisted because they answer different questions:

- Submission Version = what happened to this exact version;
- Deliverable Execution = current aggregate result for the Deliverable.

Runtime must update both atomically when a review command changes the current Deliverable state.

---

## 8. Publishing / compliance — PASS WITH DERIVATION NOTE

Per-Deliverable Publishing is correctly modeled and explicit Brand authorization is distinct from `AUTO_APPROVED` Production.

`authorizationState` is derivable from `publishingRequired`, Brand approval/authorization evidence and timestamps, but persistence is acceptable as current execution state **only if** runtime treats the authorization event/timestamp as the evidence and keeps the state transactionally synchronized.

Do not treat the enum value alone as sufficient proof that publication was authorized.

No universal `livePostUrl` should be restored.

---

## 9. Financial resolution and settlement — PASS WITH RESIDUAL-OBLIGATION GAP

The draft correctly separates:

- Collaboration-owned entitlement/resolution; and
- Payout-owned money execution evidence.

Keeping settlement instruction amounts in `CollaborationSettlement` is legitimate: they are the execution request snapshot, while `CollaborationFinancialResolution` remains entitlement truth.

### Required addition: residual obligations

Frozen Commercial & Resolution Contract requires terminal resolution to remain capable of tracking residual non-monetary obligations such as product return/reverse fulfillment, asset restrictions or other cleanup.

Current draft has only generic `resolutionEvidence`.

Add an explicit Collaboration-owned field such as:

`residualObligations Json?`

on `CollaborationFinancialResolution` (or a normalized child model only if real independent lifecycle/history is later required).

For MVP, JSON is preferable to inventing a large residual-obligation taxonomy.

### Rights consequence

Rights consequences can usually be derived from the locked rights snapshot + approval/compliance/payment/resolution facts. Do **not** create a second mutable “rights state” unless implementation proves it is necessary. Where exceptional resolution needs an explicit rights decision, store that decision/evidence inside resolution evidence rather than duplicating normal rights logic.

---

## 10. Feedback — PASS

Dedicated post-completion feedback rows correctly fix the production Stage-6 problem.

Keep:

- one Brand feedback row and one Creator feedback row;
- 48h feedback window;
- hidden/revealed state and reveal timestamp.

`visibility` is partly derivable, but once reveal occurs it is a meaningful persisted event/result and is safe to retain.

---

## 11. Domain-event history — PASS

`CollaborationEvent` correctly provides append-oriented consequential history without requiring full event sourcing.

Keep:

- event type/kind;
- actor;
- command/correlation identity;
- aggregate version;
- event payload;
- occurred timestamp;
- unique `(collaborationId, aggregateVersion)`.

Important runtime invariant: aggregate current-state update and the corresponding event append should be atomic.

---

## 12. Conversation/messages — REQUIRED OMISSION FIX

This is the largest structural omission in v1.0-draft.

Production reconciliation explicitly classified `CollaborationMessage` as **KEEP**. Frozen Domain/Integration contracts also preserve chat as a subordinate Collaboration surface and allow domain events to generate system messages.

The canonical draft currently has no message/conversation relation at all.

Required correction:

- preserve the existing `CollaborationMessage` infrastructure during migration, with `USER` and `SYSTEM` distinction;
- system messages remain projections of domain events, not transition authority;
- retain sender/body/system-event tag/timestamp semantics required to rehydrate chat;
- retain Collaboration relation and historical messages after terminal lifecycle.

If the product later centralizes chat into a shared Conversation module, migrate to a `conversationThreadRef` boundary explicitly. Do **not** delete working Collaboration message persistence now based on a future abstraction.

For current canonical migration, `CollaborationMessage` should remain represented.

---

## 13. Inbox hydration/projection fields — KEEP AS DENORMALIZED PROJECTION

Production has useful `lastMessageSnippet`, `lastMessageAt` and role-specific unread counts. These are not domain workflow truth, but they materially support the frozen Collaboration inbox and re-entry UX.

Recommended treatment:

- retain them either on `Collaboration` as denormalized read/projection fields or in a dedicated inbox projection;
- clearly mark them as derived/cache values;
- message creation/read commands update them transactionally;
- they must never drive lifecycle/workflow transitions.

For MVP, keeping them on `Collaboration` is simpler and preserves production infrastructure.

---

## 14. Referential/deletion behavior — PASS WITH INTEGRATION REQUIREMENT

The working view correctly uses `Restrict` for upstream Application and Deliverable lineage and `Cascade` only for Collaboration-owned child records.

This aligns with the historical-preservation rule:

- upstream Campaign/Brief/Application lifecycle must not delete Collaboration;
- deleting a Collaboration-owned child only follows explicit Collaboration deletion/migration behavior, not normal Campaign archive/pause.

When integrating into the full Prisma schema, all new reverse relations from Campaign/Brand/User/Brief must avoid accidental upstream cascade deletion of Collaboration.

---

# Required changes before freeze

The v1.0-draft is structurally sound, but **do not freeze it unchanged**. Apply these corrections first:

1. remove persisted `actionRequiredBy` from canonical aggregate truth and derive it in read models;
2. remove the unsafe `publishingRequired @default(false)` and require an explicit resolved value;
3. prevent premature Securement state by making it explicitly initialized after Negotiation (nullable or explicit NOT_STARTED); provisioning must explicitly initialize Negotiation applicability too;
4. add explicit `residualObligations` capability to financial resolution;
5. restore/preserve `CollaborationMessage` in the canonical migration target;
6. retain inbox summary/unread values as clearly denormalized projection fields (or a dedicated inbox projection) rather than losing existing production functionality.

Everything else reviewed is compatible with the frozen contracts, subject to normal integrated-schema relation naming and Prisma compilation checks.

---

# Freeze recommendation

**Schema status after this review: NOT YET FROZEN — SMALL RECONCILIATION PATCH REQUIRED.**

After the six corrections above are applied, perform one mechanical integrated-schema check for relation names/types and then freeze the canonical Collaboration Prisma. The unresolved upstream `publishingRequired` authoring/derivation rule remains an explicit product-data dependency; the schema must force an explicit resolved value rather than inventing the rule.