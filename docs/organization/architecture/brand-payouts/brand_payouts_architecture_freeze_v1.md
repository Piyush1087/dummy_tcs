# Brand Payouts Architecture Freeze V1

Status: `PREPARED_FOR_PARENT_ACCEPTANCE`
Program: `BRAND_PAYOUTS_PHASE_C`
Product authority: `f15a91d0ace8b2c424a539d79dbb120869233105`
Architecture parent: `7aeb0512cb8270a6bae1169570e82b080f01807e`

This is a provider-neutral, implementation-ready architecture for Brand Payouts V1. It freezes ownership, contracts, gates, migrations, security invariants, and runtime validation. It does not authorize source implementation, schema migration, provider inspection or action, or production enablement.

## 1. Architectural verdict

```text
BRAND_PAYOUTS_PRODUCT_LOGIC = FROZEN
BRAND_PAYOUTS_CROSS_CONTRACT_RECONCILIATION = COMPLETE
BRAND_PAYOUTS_ARCHITECTURE = PREPARED_FOR_PARENT_ACCEPTANCE
BRAND_PAYOUTS_IMPLEMENTATION = NOT_AUTHORIZED
RAZORPAY_PROVIDER_EXECUTION = NOT_AUTHORIZED
```

The permanent design is a Brand-facing application/query layer over the existing financial authorities, plus the canonical Payout execution aggregate. It does not create another vault, ledger, funding service, Brand Return path, Collaboration policy engine, Creator destination model, or role model.

The first read/RBAC/activity slice is architecturally ready with reconciliation. Reserve and settlement integration are intentionally gated by the missing accepted C-04 runtime handoff. Provider-neutral work does not wait for C-04 frontend or Razorpay availability.

## 2. Domain ownership and component boundaries

| Boundary | Canonical state / commands | Owner | Payouts relationship |
|---|---|---|---|
| Brand financial authority | Pooled vault, loads/lots, provenance, AVAILABLE, protected funds, pending funding, funding top-up, ledger | Existing Brand financial domain | Pure reads; invokes existing command services |
| Brand Return | Request, source allocation, provider execution/reconciliation, ledger after success | Existing Brand Return service | Canonical Payouts UI/read projection; same backend authority |
| Collaboration financial instruction | Agreement, entitlement, reserve request, refund entitlement, settlement eligibility, exceptional resolution/recovery | C-04 Collaboration | Versioned immutable input; never recomputed by Payouts |
| Creator payout identity/readiness | Creator subject, destination/version, setup invalidation, normalized provider readiness | C-05 plus Creator Payouts/provider integration | Narrow readiness port only |
| Payout execution | Obligation, due timestamp, funding allocation, transfer attempt, normalized settlement/reversal/reconciliation | Payout execution domain | Owns financial execution after trusted instruction |
| Brand Payouts workspace | Overview, obligations, activity, Returns, reserve approval, action items, support context | Brand Payouts application/query layer | Role-projected provider-neutral composition |
| Payment support V1 | Durable bounded intake/acknowledgement and routing | Brand Payouts backend persistence; Support Operations triage/failure | Validated context; no financial side effect or general Support-platform claim |
| Notifications | Durable in-app/email jobs, recipient snapshot, dedupe | Existing notification domain | Payouts/financial services produce normalized events |

### 2.1 Component set

The implementation may adapt names to repository conventions, but these responsibilities must remain distinct:

- `BrandPayoutsQueryService`: side-effect-free overview and detail projections.
- `BrandPayoutsAuthorizationProjection`: resolves active membership and entity scope before queries/serialization.
- `FinancialActivityProjection`: keyset-paginated union over canonical sources; never a journal.
- `FinancialReserveApprovalService`: validates and records Owner/Finance approval, then delegates execution to existing vault/allocation primitives.
- `PayoutInstructionIntakeService`: idempotently converts an accepted C-04 immutable entitlement instruction into an obligation.
- `PaymentDueDatePolicy`: derives and persists the one immutable due instant.
- `PayoutEligibilityService`: combines due, Creator readiness, rail, funding, and resolution gates.
- `PayoutExecutionCoordinator`: selects eligible obligations, creates durable attempts, invokes a fail-closed provider port, and reconciles outcomes.
- `CreatorPayoutReadinessPort`: narrow C-05/C-06 provider-neutral input.
- `CreatorPayoutProviderPort`: provider-neutral transfer/read/reversal boundary; fail-closed binding by default.
- `PaymentSupportCaseService` + repository: commits the Brand Payouts-owned bounded case/reference and separately claims durable routing.
- `PaymentSupportOperationsQueryService`: restricted service-authenticated triage reader; no financial command dependency.
- frontend `BrandPayoutsWorkspace`: thin composition over versioned backend contracts and server-projected capabilities.

## 3. Canonical state ownership

The Payouts read model is disposable/rebuildable. It cannot be used as the source of money, entitlement, role, destination, or provider truth. A cache/materialized optimization would require separate architecture review and must retain source identities/as-of semantics; V1 does not require one.

All monetary commands resolve economics on the server from immutable authority. Clients may provide only command identity, expected version, bounded user input such as a support note, and idempotency material.

All money values cross APIs as exact decimal strings paired with ISO 4217 currency. All instants cross APIs as UTC ISO-8601 strings. Browser number arithmetic is prohibited for financial totals and due dates.

## 4. Reserve request, approval, and execution

### 4.1 Contract

```text
Collaboration progression by an authorized actor
  -> C-04 persists immutable CollaborationReserveRequest
  -> Payouts exposes role-projected approval-required state
  -> active Owner or Finance Admin approves request identity/version
  -> FinancialReserveApproval is committed
  -> financial runtime locks request/approval/vault rows
  -> existing funding-lot allocation + CollaborationEscrowLock + ledger execute
  -> result is linked to approval and confirmed to C-04
```

The C-04 request must contain or unambiguously reference:

- request and immutable instruction identity;
- Brand, Campaign, Collaboration, Creator subject;
- instruction version and integrity hash;
- Creator gross fee, platform commission, GST on commission, total reserve;
- currency;
- requester user/membership and timestamp;
- cancellation/supersession state.

The approval command body contains no amount, currency, fee, commission, GST, or Creator economics. It accepts `request_id`, `expected_version`, and an idempotency key. The service reloads all facts, verifies exact scope and current active `BRAND_OWNER` or `FINANCE_ADMIN` membership, and snapshots the approving membership/role.

### 4.2 Persistence and concurrency

Add one `FinancialReserveApproval`-equivalent record with:

- stable approval ID and unique C-04 request/instruction identity;
- exact Brand/Collaboration and instruction version/hash;
- immutable approved amount/breakdown and currency copied from the trusted request for audit comparison;
- requested-by user/membership/time;
- approved-by user/membership/role/time;
- status/version and idempotency identity;
- execution start/completion/failure timestamps and bounded failure code;
- links to the existing escrow lock and ledger movement.

This is approval/audit state, not a second reserve execution record. `CollaborationEscrowLock`, funding allocation, vault, and `EscrowTransactionLedger` remain execution authority. M1 also adds an append-only `FinancialReserveExecutionAttempt` child so retries and failures are auditable without mutating history; it carries no independent economics and cannot be a source of money truth.

The approval/execution state machine is:

```text
APPROVED_AWAITING_EXECUTION
  -> EXECUTING
     -> COMPLETED
     |  AWAITING_FUNDS -> EXECUTING
     |  ACTION_REQUIRED
  -> SUPERSEDED (only before financial completion)
```

The Owner/Finance decision commits independently and is never erased by a later shortfall or runtime failure. A worker claim transaction locks the active C-04 request and approval, revalidates instruction version/hash and non-supersession, inserts one append-only attempt, and commits `EXECUTING`. A second financial transaction re-locks request/approval/vault rows, revalidates all facts, and atomically performs funding-lot allocation, vault movement, escrow lock, one ledger row, attempt success, and `COMPLETED`.

If available funding is insufficient, no financial movement is written: the attempt records shortfall and the approval becomes `AWAITING_FUNDS`. An authoritative funding-credit event and a bounded periodic recovery sweep may requeue the same approval; no new Brand approval is needed only while the exact instruction/version/hash is still active. Internal Operations may requeue an eligible attempt but cannot alter economics. Transient failure becomes retryable under the same rule; terminal invariant failure becomes `ACTION_REQUIRED`. A crashed `EXECUTING` lease is reclaimed through an idempotent attempt, never by creating a second reserve.

Cancellation, supersession, or instruction-version drift before completion moves the approval to `SUPERSEDED` with no financial mutation. A replacement C-04 request requires a new approval. Once `COMPLETED`, the request cannot be superseded into a silent balance change; subsequent entitlement/refund authority uses the separate recovery/refund contract.

Only one successful execution may exist per request/instruction. Same-input replay returns the prior result; key reuse with a different request or any economics mismatch returns a conflict and raises `CALLER_AUTHORED_FINANCIAL_TRUTH` or `UPSTREAM_CONTRACT_CONFLICT` as applicable. Partial reserve is prohibited unless a future frozen instruction explicitly authorizes an amount-bearing partial reserve.

Campaign Managers may originate the C-04 request by progressing an otherwise authorized Collaboration, but never invoke approval or reserve execution. Existing direct-lock/interlock routes are not used for canonical rows and are retired/return Gone after compatibility cutover.

## 5. Payment term and immutable due timestamp

### 5.1 Accepted terms

Only the exact immutable C-04 snapshot values are valid for normal V1 entitlement:

```text
NET_7 | NET_15 | NET_30 | NET_45 | NET_60
```

Campaign must first correct its relational enum and lossy mapper. C-04 must snapshot the value and publish it with `settlementEligibleAt`. `IMMEDIATE`, missing, inferred NET_30, display copy, and legacy tranche fields cannot drive new execution.

### 5.2 Derivation policy

For normal successful entitlement, `PaymentDueDatePolicy`:

1. validates the accepted instruction/version/hash and exact term;
2. takes the server-authoritative `settlementEligibleAt` instant;
3. converts it to the `Asia/Kolkata` local date-time;
4. adds the configured number of calendar days while preserving local wall-clock time;
5. converts the result back to a UTC instant;
6. persists `paymentDueAt` exactly once with the source anchor, term snapshot, due-rule version, and instruction reference.

For an exceptional resolution, C-04 supplies an immutable explicit due instant or a versioned frozen exceptional due rule plus resolution reference. Payouts does not fall back to the normal-success anchor when resolution authority differs.

The existing `payment_due_at TIMESTAMP(3)` is retained to avoid a destructive type rewrite. V1 uses one `UtcInstantCodec` at the Payout repository boundary: inputs must carry an explicit offset, are normalized to UTC before persistence, and values read from this column are interpreted only as UTC and serialized with an explicit `Z`. Application startup checks `SHOW TIME ZONE = UTC` and fails closed otherwise; migrations, workers, and direct-SQL tooling set/verify UTC as well. Contract and direct-SQL round-trip tests cover non-UTC process timezones and millisecond precision. Rows written before the codec/due-policy marker or without source evidence remain legacy-unreconciled even if the column is populated. Any future conversion to `timestamptz(3)` is a separately reviewed additive/conversion plan, not an implicit V1 rewrite. New anchor fields use the same codec and evidence marker.

Derivation is idempotent: replay must produce the stored value and evidence. A different result for the same instruction is `PAYMENT_DUE_DATE_DRIFT` and stops execution. Historical rows without exact anchor and term remain `LEGACY_UNRECONCILED`; no synthetic due date is written.

The frontend displays only stored `paymentDueAt` and never calculates or alters it.

## 6. Payout obligation and execution lifecycle

Business obligation, provider transfer, and provider settlement remain separate records and meanings.

### 6.1 Normalized Product lifecycle

The read model exposes two orthogonal axes so a business lifecycle is not confused with an execution gate:

| Obligation lifecycle | Meaning |
|---|---|
| `SCHEDULED` | Immutable entitlement exists; no provider transfer is active |
| `READY_QUEUED` | Due and every current gate passed; selected or eligible for work |
| `PROCESSING` | Durable provider attempt is in progress or accepted but not settled |
| `HELD_RELEASE_PENDING` | Provider/internal recovery hold; not Brand-releasable and not settled |
| `SETTLED` | Authoritative settlement evidence and canonical ledger movement exist |
| `FAILED_RETRYABLE` | A failed execution with a server-authorized retry/reconciliation path; it is not yet an actor-required state |
| `ACTION_REQUIRED` | A material blocker requires an identified authorized actor or support/recovery action |
| `PARTIAL_REVERSAL` | Authoritative reversal is less than cumulative settled amount |
| `FULL_REVERSAL` | Authoritative reversal equals the reversible settled amount |
| `LEGACY_UNRECONCILED` | Historical truth cannot safely populate the canonical lifecycle |

| Current gate / blocker | Product projection |
|---|---|
| Due timestamp is in the future | `NOT_YET_DUE` |
| Creator setup incomplete | `CREATOR_SETUP_REQUIRED` |
| Not `IN + INR + supported bank` | `UNSUPPORTED_GEOGRAPHY_OR_RAIL` |
| Provider onboarding/review incomplete | `PROVIDER_REVIEW` |
| Protected funding invalid/short | bounded `ACTION_REQUIRED` reason |
| Blocking resolution/recovery | bounded `ACTION_REQUIRED` reason |
| Provider disabled/unavailable | truthful dependency unavailable/action-required state |
| All gates pass | operationally eligible / queued |

The obligation keeps original gross entitlement, amount settled, amount reversed, and amount outstanding. Provider-native states map into this normalized model and never appear directly as Product state. Provider accepted, processed, held, or transfer created is never `SETTLED`, `CLEARED`, or `PAID`.

### 6.2 Instruction intake and execution

An obligation is created idempotently when accepted immutable C-04 Creator entitlement exists, not when a provider transfer is created. Intake validates instruction identity/version/hash, Brand, Collaboration, Creator, amount, currency, resolution, and due evidence. Same-instruction replay must match all economics and source anchors.

The scheduler/keyset worker selects due candidates with row locking/skip-locked behavior, then rechecks:

- stored `paymentDueAt <= server now`;
- exact current C-05 destination/version and provider-readiness fence;
- India, INR, and supported bank rail;
- valid protected funding allocation;
- no blocking resolution/reversal/provider condition;
- provider feature flag/capability enabled.

It creates or reuses a durable local attempt before the external call, invokes the provider outside the database transaction, then stores a typed success, terminal, retryable, or ambiguous result. Ambiguous create never triggers an unguarded retry; it enters lookup/reconciliation. Exactly-once provider delivery is not assumed.

Authoritative settlement alone consumes protected allocation, changes vault/ledger state, and marks settled. A Route reversal restores/adjusts exact protected payout-allocation lineage and records an amount-bearing reversal; it does not create general AVAILABLE balance. Only a separate C-04 refund instruction may release protected value back to Brand financial availability.

No public Brand/Creator release, hold, retry-with-new-economics, reversal, mark-paid, or entitlement-edit command exists.

### 6.3 Collaboration financial recovery instruction

Before P4R may consume or P5R may accept new reversal/recovery behavior, C-04 or separately authorized Admin resolution authority must publish `CollaborationFinancialRecoveryInstructionV1` (architectural name) with:

- immutable instruction ID, version, integrity hash, issued-at timestamp, and authority type;
- source Collaboration resolution and any superseded instruction reference;
- source obligation, settlement, and transfer/reversal references where applicable;
- currency and bounded amount effects: Creator entitlement adjustment, remaining obligation, Brand commercial-refund entitlement, and any provider recovery required;
- an explicit effect vocabulary that keeps `OBLIGATION_ADJUSTMENT`, `COLLABORATION_REFUND_AUTHORIZATION`, and `PAYOUT_RECOVERY_REQUIRED` distinct;
- active/superseded status and replay rules;
- exceptional due-date instruction where applicable.

C-04/Admin resolution owns and persists the instruction and its commercial authority. Payouts persists an idempotent intake receipt against the existing obligation plus resulting funding/reversal/refund lineage; it never edits the source resolution. The same instruction ID/version must replay to identical amounts/effects. A new version must explicitly supersede an unexecuted prior version; an executed effect cannot be silently replaced.

Payouts returns a provider-neutral confirmation containing instruction ID/version/hash, accepted/rejected effect, amount applied, amount remaining, resulting obligation/refund/recovery references, status, and observed timestamp. C-04 owns invalid or contradictory commercial instructions; Payouts owns financial validation/execution failure; the provider/reconciliation owner owns ambiguous provider recovery. `BP-G08R` must close before P4R intake or P5R reversal/recovery acceptance; it never serializes the normal P4B/P5A path.

## 7. Provider-neutral boundary

### 7.1 Ports

`CreatorPayoutProviderPort` supports only typed capability/read/create/reversal operations needed by the coordinator. The default binding is `FailClosedCreatorPayoutProvider`. Razorpay Route is one future adapter, not domain vocabulary.

Creator onboarding/provisioning is separately owned by Creator Payouts/Security/provider integration. Payout execution consumes `CreatorPayoutReadinessV1`; it does not call raw KYC/bank APIs from Brand Payouts.

`BrandReturnRefundProvider` remains a separate port because original-source Return, Route reversal, and Collaboration refund are different financial operations.

### 7.2 Provider ingress

Provider-specific controllers verify the exact raw-body signature and recognized event map before translation. They produce normalized internal evidence; canonical reconciliation services alone update obligations, allocations, vault, and ledger. Unknown/unmapped events do nothing. Event mappings remain disabled until exact signed fixtures and ordering semantics are accepted.

Provider identifiers and raw diagnostics are stored only where operationally necessary and returned only to restricted support/operations systems. Ordinary APIs expose stable Creator Shop references and bounded reason codes.

## 8. Brand Payouts API and query contract

Keep `GET /api/v1/brand/payouts` as a lightweight overview/bootstrap and use explicit paginated subresources so sections can load, fail, refresh, and become stale independently:

```text
GET  /api/v1/brand/payouts
GET  /api/v1/brand/payouts/obligations
GET  /api/v1/brand/payouts/obligations/:obligationId
GET  /api/v1/brand/payouts/activity
GET  /api/v1/brand/payouts/activity/:activityId
GET  /api/v1/brand/payouts/brand-returns
GET  /api/v1/brand/payouts/brand-returns/:requestId
GET  /api/v1/brand/payouts/reserve-requests
POST /api/v1/brand/payouts/reserve-requests/:requestId/approve
GET  /api/v1/brand/payouts/activity.csv
POST /api/v1/brand/payouts/support-cases
```

Existing Add funds and Brand Return mutation endpoints/services remain canonical; the Payouts frontend calls them rather than introducing duplicate command handlers. A later route façade may delegate to those exact services only if identity/idempotency semantics remain singular.

P1 does not replace the legacy response in place for an un-updated client. It introduces the V2 representation behind explicit media-type negotiation (`Accept: application/vnd.creator-shop.brand-payouts.v2+json`) while the existing default representation remains available. The new P2 client requests V2 explicitly. After the first-slice joint gate, a release flag may make V2 the default and later retire legacy reads under a separately measured compatibility window. Rollback restores the legacy default without deleting V2 or changing financial state. Backend and frontend deployment order therefore cannot present a structurally incompatible payload to either client.

### 8.1 Envelope

Every read response declares a global contract and structured section/source metadata:

```text
schema_version
as_of
viewer: active membership role + projection scope
sections[]:
  section_id
  coverage: COMPLETE | PARTIAL | UNAVAILABLE
  freshness: CURRENT | STALE
  source_observed_at
  source_coverage[]:
    source
    status
    limitation_reason_code
    recovery_hint
  legacy_limitations[]
  available_actions[]:
    action
    resource_reference
    resource_version
    authorized_as_of
  items or section payload
  page:
    next_cursor
    page_complete
    source_complete
```

Lists use stable keyset pagination over `(authoritative_timestamp, stable_activity_or_entity_id)`. Continuations retain the original `as_of`, filters, and role scope. `page_complete` means the current pagination window is exhausted; `source_complete` separately states whether all authoritative sources were covered. There is no silent 100-row cap. A missing source identifies the affected source/section and a bounded limitation/recovery reason; it does not invent zero.

Actions are resource-scoped and bound to the projected resource version and authorization snapshot. Commands always re-resolve current role, resource version, and financial truth. A stale or partial section retains last-good read data and displays its as-of/limitation, but suppresses any freshness-sensitive mutation until a successful current refresh.

### 8.2 Authorization and redaction

The backend resolves the current active `BrandTeamMember.role` before data access and serialization. Unknown/inactive role fails closed. `BrandProfile.payoutsWorkspaceRole` is never consulted for authority.

| Actor | Read projection | Commands |
|---|---|---|
| Brand Owner | Full Product-authorized Brand financial state; still no sensitive bank/provider/KYC data | Add funds, Brand Return, reserve approval, support |
| Finance Admin | Same V1 financial projection as Owner | Add funds, Brand Return, reserve approval, support |
| Campaign Manager | Only otherwise-authorized Campaign/Collaboration obligations, Creator amount, due date, status, and categorical/masked capacity/shortfall context | May progress Collaboration through its owner; Payouts financial mutations denied; support only in authorized scope |
| Not authorized | No resource existence disclosure | None |

Campaign Manager responses omit exact pooled vault/load/Return values, original funding-source data, provider IDs, and sensitive fields. They may receive `SUFFICIENT`, `SHORTFALL`, `PENDING_APPROVAL`, or unavailable capacity context for an authorized item, never a Treasury mutation capability. Cross-Brand checks occur in the query predicate, not only after loading rows. Frontend masking is presentational only.

If no canonical Campaign/Collaboration entity-access predicate can prove that a Campaign Manager is otherwise authorized, the server returns no Campaign Manager financial rows and no resource existence. Active same-Brand membership alone is not a fallback for broadening entity scope.

## 9. One financial activity projection

No activity/journal table is added. `FinancialActivityProjection` is a read-only, deterministic union over:

- canonical ledger movements;
- reserve request/approval/protected-allocation milestones;
- payout obligation milestones;
- transfer/settlement/reversal evidence;
- Collaboration refund instructions/events;
- Brand Return lifecycle and successful ledger movements.

Where a settlement or Return success has both provider lifecycle evidence and a canonical ledger movement, projection rules prevent double-counting: the ledger row is the money movement and linked execution evidence is context or a separate lifecycle-only row with distinct classification.

The V1 source-to-event mapping is closed as follows:

| Immutable source / milestone | Public activity event | Ordering timestamp | Category / movement |
|---|---|---|---|
| `EscrowTransactionLedger` row | Exact normalized ledger movement | ledger `createdAt` | External/settlement/refund movements are `MONEY_MOVEMENT`; `RESERVE` is `PROTECTED_ALLOCATION` with `is_financial_movement = false` |
| C-04 `CollaborationReserveRequest.requestedAt` | reserve requested | intake `recordedAt` | `INFORMATIONAL_LIFECYCLE`, no movement |
| `FinancialReserveApproval.approvedAt` | reserve approved | approval `recordedAt` | `INFORMATIONAL_LIFECYCLE`, no movement |
| append-only `FinancialReserveExecutionAttempt` | execution started, awaiting funds, failed/action-required | attempt `createdAt` or immutable outcome `recordedAt` | `PROTECTED_ALLOCATION` lifecycle, no movement |
| `CreatorPayoutObligation.createdAt` | obligation scheduled | intake `recordedAt` | `BUSINESS_OBLIGATION`, no movement |
| one durable `RouteTransferAttempt` per provider invocation | queued, execution-started, provider-request-completed, and failed/terminal milestones from set-once columns | each milestone's set-once UTC timestamp | `PROVIDER_EXECUTION`, no movement |
| successfully reconciled `RouteWebhookReceipt` | verified provider processing/hold/other accepted lifecycle milestone | immutable receipt `receivedAt`; provider occurred time is display metadata | `PROVIDER_EXECUTION`, no movement |
| `RouteTransferReversal` row | partial/full reversal observed | reconciliation `recordedAt` | `RETURN_REFUND_REVERSAL`; the linked ledger row alone is the financial movement |
| C-04 `CollaborationRefundInstruction` | commercial refund instructed | intake `recordedAt` | `RETURN_REFUND_REVERSAL`, no movement until its ledger row |
| `BrandReturnRequest` and immutable allocation/outcome evidence | requested/allocating/processing/partial/action/completed lifecycle | each milestone's ingestion `recordedAt` | `RETURN_REFUND_REVERSAL`; successful ledger row alone is the movement |

Every projected milestone has an immutable ingestion `recorded_at` and, where authoritative, a separate business/provider `occurred_at` and `source_observed_at`. Cursor order and the `as_of` boundary use `(recorded_at, activity_id)`, so a late provider event appears only in a later snapshot even if its provider occurred time is earlier. Display may show the authoritative occurred time, but cannot reorder an existing pagination snapshot.

No event is reconstructed from a mutable `updatedAt` or current status. M1 freezes exact Route milestone persistence without a generic event journal: each provider invocation creates a new attempt row; `queuedAt`, `executionStartedAt`, `providerRequestCompletedAt`, and `failureRecordedAt` are nullable set-once UTC columns with conditional-update and timestamp-order constraints; normalized final disposition is immutable after completion. Activity IDs are `route-attempt:<attemptId>:<milestone>`. Successfully reconciled webhook receipts retain set-once normalized entity/event classification, `receivedAt`, optional provider-occurrence time, and `reconciledAt`; their activity IDs are `route-receipt:<receiptId>:<normalizedEvent>`. Settlement remains the ledger row and reversals remain individual `RouteTransferReversal` rows, preventing duplicate movement events.

When an existing legacy model lacks a durable milestone timestamp/snapshot, that event is omitted or marked current-only with `source_complete = false`; it is never synthesized. These attempt/receipt fields and indexes remain inside M1, so no second activity journal or third Payouts migration is required.

Each row contains:

- stable namespaced activity ID derived from source type, source ID, and milestone/version;
- source owner and Creator Shop reference;
- semantic category: `MONEY_MOVEMENT`, `PROTECTED_ALLOCATION`, `BUSINESS_OBLIGATION`, `PROVIDER_EXECUTION`, `RETURN_REFUND_REVERSAL`, or `INFORMATIONAL_LIFECYCLE`;
- `is_financial_movement` boolean;
- exact amount/currency only where authoritative;
- authoritative occurred-at timestamp plus immutable ingestion/recorded-at used for pagination;
- normalized status and bounded actor/source;
- Campaign, Collaboration, Creator, obligation, and Return references as authorized;
- legacy classification/limitation where relevant.

The stable API identity does not reveal provider IDs. Pagination uses immutable ingestion `(recorded_at, activity_id)` and a frozen `as_of` boundary; `occurred_at` is display metadata only. Provider acceptance and obligation creation are lifecycle-only, never settled money.

### 9.1 CSV

`GET /api/v1/brand/payouts/activity.csv` is Owner/Finance only and streams the same role-scoped activity projection. It requires inclusive `from` and exclusive `to`, permits at most 366 days per request, and returns a structured range-too-large response rather than silently truncating above an operational 100,000-row ceiling.

Output is UTF-8 RFC 4180, protects against spreadsheet formula injection, contains no restricted/provider-native fields, and uses a safe filename containing Brand-safe reference, range, and generated timestamp. It is labelled `financial-activity`, not invoice, receipt, statutory ledger, tax document, or certified statement.

## 10. Overview buckets

The overview computes all buckets at one consistent database `as_of` boundary and supplies source coverage/freshness. It never combines incompatible values into a single balance.

| Bucket | Authoritative source / rule |
|---|---|
| AVAILABLE | `BrandEscrowVault.availableBalance` |
| Pending funding | Uncredited pending funding loads/lots only; never included in AVAILABLE |
| Committed/protected | `BrandEscrowVault.lockedCampaignFunds` and exact protected allocations |
| Active Brand Return commitment | `activeReturnCommitment`, displayed separately from protected Collaboration funds |
| Scheduled obligations | Canonical outstanding amount for obligations in scheduled/not-due/setup/provider/rail gating states |
| Processing obligations | Canonical outstanding amount with active execution/hold/reconciliation state |
| Settled activity | Sum of authoritative Creator payout settlement ledger movement through `as_of`, with explicit `LIFETIME` or requested range basis |
| Action required | Count of distinct role-visible resource keys with a current material recovery/approval blocker |

If a bucket cannot be authoritatively produced, the server marks it unavailable or omits it under the versioned contract. The client never derives it from list pages or incompatible APIs.

## 11. Brand Return and Settings compatibility

Brand Return retains these invariants:

- AVAILABLE-only eligibility;
- original funding-source provenance and refund to that source;
- no Brand withdrawal destination;
- stable idempotent request/allocation identities;
- provider ambiguity remains committed/action-required;
- no ledger/total-balance debit until authoritative provider success;
- partial completion retains successful, unresolved, and released amounts.

Payouts becomes the canonical operational surface after the frontend cutover. `/brand/settings/escrow` keeps its route and escrow terminology as a compatibility surface. The P2 first slice is read-only: Settings remains the sole Add funds/Brand Return mutation surface. P3 performs an atomic, rollback-safe feature/capability cutover: Payouts exposes the existing canonical commands and Settings becomes a summary/deep link in the same release/configuration state. A server/client capability flag must make zero or two active mutation surfaces impossible; rollback restores Settings commands while disabling them in Payouts. Backend command services and idempotency remain singular throughout.

No route, persistence, lifecycle, or label is renamed merely to remove “escrow” in Phase C.

## 12. Support architecture

```text
SUPPORT_IMPLEMENTATION = NEW_BOUNDED_SUPPORT_CASE_REQUIRED
V1_PERSISTENCE_AND_INTAKE_OWNER = BRAND_PAYOUTS_BACKEND
V1_TRIAGE_AND_FAILURE_OWNER = SUPPORT_OPERATIONS
```

No accepted general Support-case subsystem exists. V1 therefore adds a bounded `PaymentSupportCase` intake/acknowledgement record within the Brand Payouts backend; it is not a general-purpose Support platform and has no financial command authority. It stores:

- stable internal ID and user-visible non-sensitive reference;
- Brand and submitter user/membership/role snapshot;
- bounded issue category and validated note;
- allowed Creator Shop context references (Campaign, Collaboration, obligation, activity, Return);
- restricted server-resolved operational context separately from public output;
- idempotency identity, accepted timestamp, state, configured queue, routing/delivery state, and retry metadata.

The command validates active membership and referenced entity scope. It commits the case first, returns `case_reference` and `accepted_at`, then enqueues routing. Postmark may deliver a notification but is never the case authority. Submission failure is retryable under the same idempotency key. Ordinary users never submit or receive provider IDs/raw diagnostics.

The server exposes a resource-scoped support capability from each authorized payout obligation row/detail, financial activity row/detail, Brand Return item/detail, and material action-required state. Each trigger passes only its Creator Shop public reference; restricted context is resolved server-side.

A restricted service-authenticated Support Operations query endpoint/reader lists cases by queue/state/reference and returns server-resolved restricted context under audited access. Ordinary Brand APIs never expose that context. Individual assignment and response SLA are not claimed in V1. M2 must pin a Security-approved retention/access-policy version before migration acceptance; until `BP-G21` closes, the case migration cannot be applied. Raw provider payloads, bank/KYC/tax data, and credentials are prohibited from both public and restricted case storage; restricted context stores only necessary internal references and bounded diagnostics.

Case routing uses a durable claim on the case row. The worker retries a retryable delivery at most five times with 30-second exponential backoff capped at 30 minutes, then records `ROUTING_FAILED` and raises an internal operational alert. The Brand's committed reference remains valid regardless of routing outcome. Support Operations owns terminal routing/triage failure; the notification/Postmark adapter owns only channel delivery failure. Case closure never changes financial state.

No Support state transition changes financial state, Creator entitlement, Collaboration dispute, reversal, chargeback, Brand Return, or settled/failed classification.

## 13. Notification architecture

Reuse the current notification engine contract: `SOURCE_TYPE_SOURCE_ID_TRANSITION_ID` semantic identity, durable job/recipient snapshot, `OWNER_FINANCE` and `OWNER_FINANCE_PLUS_ACTIVE_TRIGGERING_CM` policies, required/yes in-app delivery, and optional Postmark email governed by the `ESCROW_PAYOUTS` preference (currently default-on when no preference row exists).

| Event / registry action | Recipient policy and entity scope | In-app | Email / preference | Failure owner |
|---|---|---|---|---|
| new `payouts.reserve_approval_required` | `OWNER_FINANCE`; no CM approval notification | `REQUIRED` | `OPTIONAL`, `ESCROW_PAYOUTS` preference | Financial producer until durable job; notification worker after |
| existing `escrow.collaboration_awaiting_funds` for shortfall | `OWNER_FINANCE_PLUS_ACTIVE_TRIGGERING_CM`; producer must first prove the triggering CM's Collaboration access | `REQUIRED` | `OPTIONAL`, same preference | Financial producer / notification worker |
| new `payouts.creator_setup_blocking` | same scoped policy; CM only when triggering and currently authorized for the Collaboration | `REQUIRED` | `OPTIONAL` | Payout producer / notification worker |
| new `payouts.provider_action_required` and `payouts.transfer_failed_or_reconciliation_required` | same scoped policy and producer-side access proof | `REQUIRED` | `OPTIONAL` | Payout/reconciliation producer / notification worker |
| existing `escrow.creator_payout_reversed` with bounded partial/full payload | same scoped policy and access proof | `REQUIRED` | `OPTIONAL` | Reconciliation producer / notification worker |
| existing `escrow.brand_return_action_required` and `escrow.brand_return_partial` | `OWNER_FINANCE` only | `REQUIRED` | `OPTIONAL` | Brand Return producer / notification worker |
| existing `escrow.brand_return_completed` | `OWNER_FINANCE` only | `YES` | `OPTIONAL` | Brand Return producer / notification worker |
| existing `escrow.creator_payout_settled` | same scoped policy and access proof | `YES` | `OPTIONAL` | Settlement producer / notification worker |

The triggering-CM recipient policy is insufficient by itself because it proves only active same-Brand membership; every producer must also pass the accepted Campaign/Collaboration access predicate before supplying that trigger user. A CM who is not proven in scope is omitted. Owner/Finance recipients are current active memberships and remain the mandatory financial-recovery audience.

Producers commit the semantic job transactionally with their canonical state transition or use the accepted outbox boundary; inability to create the required durable job fails that transition or records an explicit recovery obligation according to the producer's existing transaction boundary. The notification job and email delivery each retain the repository default maximum of five attempts with 30-second exponential backoff capped at 30 minutes. Exhaustion becomes durable terminal failure and raises an internal operational alert; it never rewrites financial state. In-app `REQUIRED` delivery is independent of optional email preference or Postmark availability. Copy includes only Product state, safe amount where the role permits, due/observed time, bounded reason, and Creator Shop links—never provider/funding diagnostics or timing promises.

Notification links and support entry points use stable, URL-addressable details:

```text
/brand/payouts/obligations/:publicReference
/brand/payouts/activity/:publicActivityReference
/brand/payouts/brand-returns/:publicReference
/brand/payouts/reserve-requests/:publicReference
```

Desktop may render the target as a drawer within the workspace and mobile as a full page/sheet, but refresh restores the same target, browser Back returns to the prior list/filter state, and unauthorized or cross-Brand references fail closed without existence disclosure.

## 14. Tax and documents boundary

```text
TDS_CALCULATION = NOT_AUTHORIZED
TDS_DISPLAY = NOT_AUTHORIZED
TDS_EXPORT = NOT_AUTHORIZED
```

No TDS rate, threshold, PAN consequence, deduction, remittance, certificate, or final bank-receipt claim is introduced. Existing TDS fields remain compatibility-only and absent from Brand Payouts V1 contracts. Qualified India withholding authority remains a production launch gate if applicable.

The only V1 download is the backend-authoritative financial activity CSV described above. GST invoice, tax invoice, TDS certificate, provider receipt, bank receipt, and statutory/certified statement actions remain hidden until a future issuing authority supplies immutable issuer, document type, reference, source data, issue time, and availability. Browser-generated financial documents are prohibited.

## 15. Historical compatibility

| Legacy source | Classification | Treatment |
|---|---|---|
| Vault, funding lots, canonical ledger with complete provenance | `CANONICALLY_RECONCILABLE` | Project according to proven source semantics |
| Existing Brand Return rows with authoritative lifecycle | `CANONICALLY_RECONCILABLE` | Use current service truth and limitations |
| Existing obligation/attempt/reversal with complete instruction and provider evidence | `CANONICALLY_RECONCILABLE` or `DISPLAY_WITH_LIMITATION` | Normalize only proven fields; do not invent due/rail |
| Legacy escrow/reserve locks without approval receipt | `DISPLAY_AS_LEGACY` | Show executed historical allocation; never claim Owner/Finance approval record |
| Fixed 30/70 and six-stage Collaboration records | `DISPLAY_AS_LEGACY` | Readable history only; never new execution authority |
| NET_30 row without canonical proof of selected term | `DISPLAY_WITH_LIMITATION / LEGACY_UNRECONCILED` | No due date and no automatic execution |
| Missing policy snapshot, due anchor, or resolution instruction | `LEGACY_UNRECONCILED` | Explicit limitation; manual/support recovery, not inference |
| Provider reference without accepted status evidence | `NOT_SAFE_TO_EXPOSE` | Retain restricted reconciliation value only |
| Direct bank/KYC/tax/TDS compatibility fields | `NOT_SAFE_TO_EXPOSE` | Exclude from Brand Payouts payload |
| Browser-generated invoice/tax/provider artifacts | `RETIRE` | Remove actions; no authority |
| Legacy withdrawal destination for Return | `NOT_SAFE_TO_EXPOSE / RETIRE_FOR_THIS_FLOW` | Never use for Brand Return |

No migration manufactures terms, due dates, policy snapshots, provider status, tax meaning, settlement evidence, or approval history. Automated execution selects canonical records only.

## 16. Schema and migration design

All changes are additive and require human migration acceptance. No migration file may be created in Phase C.

| Proposed delta | Why / owner | Additive? | Backfill / ambiguity | Risk | Rollback / compatibility |
|---|---|---:|---|---|---|
| Add `NET_45`, `NET_60` to `UcePayoutTerms`; stop lossy mapping | Campaign owner; exact Product term must survive | Yes, upstream | Backfill only from exact canonical JSON; unknown stays legacy | Medium; enum value removal is not practical | Deploy readers first; leave unused values on application rollback |
| C-04 immutable `paymentTermSnapshot` and `CollaborationReserveRequest`; publish eligibility/recovery fields | C-04 owner; trusted Payout input | Yes, upstream | No fabricated legacy values | High until accepted post-P1.4 base | Forward-compatible nullable legacy fields; new canonical writes require them |
| `FinancialReserveApproval`, append-only `FinancialReserveExecutionAttempt`, and request/execution linkage | Payouts/financial owner; role/audit/idempotency/failure proof and stable activity milestones | Yes | Never backfill old locks as approved | Medium concurrency/FK | Disable new command; retain inert audit rows and old reads |
| Nullable obligation provenance: instruction/resolution refs, version/hash, `settlementEligibleAt`, exact term/due-rule, intake `recordedAt`; retain `paymentDueAt` | Payouts; immutable intake/replay/due/activity proof | Yes | Exact C-04 evidence only; old rows remain legacy | Low/medium | Dual-read; new canonical intake requires complete fields |
| Destination/version/provider-mapping snapshot; set-once `queuedAt`, `executionStartedAt`, `providerRequestCompletedAt`, `failureRecordedAt`, immutable final disposition on each transfer attempt; normalized set-once event/received/reconciled evidence on successful webhook receipts | Payouts/provider seam; prove current C-05 destination and stable activity milestones | Yes | No backfill without evidence | Low/medium constraints/indexes | New execution requires it; old attempts display limited provenance/source coverage |
| `PaymentSupportCase` with safe reference/context/idempotency/routing state | Brand Payouts V1 intake/persistence; Support Operations triage/failure; durable acknowledgement | Yes | No backfill; prior links/emails were not cases | Low/medium; Security retention/access gate | Disable command; retain cases; no financial cascade |

No schema change is needed for member roles, the activity projection, summary buckets, Product-state mapping, notification event additions, the existing vault/ledger/Brand Return, or C-05 base destination models.

```text
EXPECTED_NEW_PAYOUTS_MIGRATIONS = 2
```

1. Payouts financial-contract migration: reserve approval/execution-attempt audit plus obligation/attempt provenance and due indexes.
2. Brand Payouts-owned bounded payment-support-case migration for Support Operations consumption.

Separately owned and excluded from that count: one Campaign enum correction and the eventual C-04 convergence migration set. Their exact runtime SQL requires their owners and accepted base. There is no automatic data backfill in the two Payouts migrations.

```text
MAX_NEW_FINANCIAL_MIGRATIONS_WITHOUT_HUMAN_REVIEW = 0
```

Any destructive alteration, automatic ambiguous backfill, second journal/vault/Return table, or attempt to replay the divergent C-04 donor migrations is `ARCHITECTURE_CONFLICT` / `DESTRUCTIVE_MIGRATION_REQUIRED` and stops.

## 17. Dependency topology

| Gate | Required for | Current state |
|---|---|---|
| Product Authority `f15a91d...` | All work | `SATISFIED` |
| Architecture Parent acceptance | Any implementation | `OPEN_HUMAN_GATE` |
| Backend `development@4c5f428...` revalidation | P0 base | `SATISFIED_AT_PHASE_C`; recheck at execution |
| Frontend `development@323658...` revalidation | P0/P2 base | `SATISFIED_AT_PHASE_C`; recheck at execution |
| Settings accepted ancestors | Reuse/cutover | `SATISFIED` |
| C-05 accepted readiness ownership | Readiness design and P5 execution eligibility | `READY_WITH_RECONCILIATION`; exact destination/version fence remains required |
| Campaign exact term correction | Canonical due/date execution | `OPEN_BLOCKING` for P4/P5 |
| C-03 accepted post-P1.4 backend | C-04 backend base | `OPEN_BLOCKING`; current accepted P1.1C only |
| C-04 accepted backend handoff and one accepted P3A+C-04 convergence tree | P4 reserve/due/intake and P5 scheduler | `OPEN_BLOCKING` for those phases |
| C-04/Admin versioned financial recovery instruction | P4R/P5R recovery acceptance only | `OPEN_BLOCKING` |
| C-03 accepted frontend integration plus C-04 frontend convergence | C-04-specific frontend integration/final joint acceptance | `OPEN_NON_SERIALIZING` |
| Two migration proposals accepted | Corresponding write phases | `OPEN_HUMAN_GATE` |
| Support restricted access/retention policy | M2/P3S Support only | `OPEN_BLOCKING`; Security owner |
| `BP-G22` one accepted backend/frontend tree containing P3S, P5A, and P5R | Complete-V1 P7 acceptance only | `OPEN_BLOCKING`; normal-path P7 may run and remain explicitly incomplete |
| RZ-G1/G2/G3/G4 | Provider adapter/Test/production enablement | `OPEN`; not core/first-slice blockers |
| Qualified India withholding authority, if applicable | Real India payout production launch | `OPEN_HUMAN_GATE`; production qualifier |

## 18. Razorpay gates and debt boundary

| Gate | Exit evidence | Current state |
|---|---|---|
| `RZ-G0` provider-neutral contract | Fail-closed ports, due/readiness/funding gates, normalized outcomes/events, deterministic fake, role-safe projection | `READY_WITH_RECONCILIATION`; current source is partial and P0-P5 closes gaps without provider action |
| `RZ-G1` bounded Test read-only capability audit | Redacted current entitlements/configuration and exact API/event fixtures; no provider mutation | `OPEN_NON_SERIALIZING`; future local desktop Codex assignment |
| `RZ-G2` deterministic adapter implementation/tests | G2A outbound/read adapter after G1; G2W webhook map only after provider-authoritative signed fixtures or authorized G3 capture; disabled by default | `OPEN_BLOCKING`; source may run in Work/cloud only after its evidence subgate |
| `RZ-G3` controlled Test transactions | Explicitly authorized envelope and evidence for onboarding, bank, transfer, hold/release, settlement, reversal, Return, signed events | `NOT_AUTHORIZED`; local desktop only |
| `RZ-G4` production readiness | Human/provider/security/legal acceptance, Live capability/config, secrets/webhooks controls, monitoring, reconciliation, kill switch, runbooks | `OPEN_HUMAN_GATE`; capability remains unproven |

`BP-RZ-01` through `BP-RZ-10` and `BP-RZ-12` block provider Test acceptance and production enablement; `BP-RZ-11` blocks production enablement. None blocks provider-neutral P0-P5 or the first vertical slice. All remain active V1 provider/launch debt rather than being silently deferred.

## 19. Frontend architecture

The frontend consumes one authoritative backend family with runtime Zod validation; it does not combine legacy Payouts and Settings truth.

Recommended composition:

- thin route/page shell and section-state coordinator;
- overview and vault/funding summary;
- reserve approvals for Owner/Finance;
- payout obligations list/detail;
- activity list/detail/export;
- Brand Return list/detail and canonical command drawer;
- support drawer/form and acknowledgement;
- responsive detail drawer/page or mobile sheet.

Each independently loaded section maintains initial/loading, last-good stale, refreshing, partial coverage, empty, ready, unavailable, and legacy-unreconciled truth. Authentication/Brand change clears previous data and stale requests cannot overwrite newer state. Capabilities come from the server; no missing-role upward default exists.

At widths below 768px, data tables transform into labelled cards/rows/sheets. Validate 390, 767, 768, and desktop widths; no document-level horizontal scroll, clipped controls, nested interactive rows, inaccessible drawers, or collision with fixed bottom navigation/safe-area insets. Existing Aurora and accepted Settings/Collaboration/C-05 patterns are sufficient.

### 19.1 File-level reuse map

| Current frontend path | Disposition | Frozen use |
|---|---|---|
| `src/pages/brand/payouts/brand-payouts-page.tsx` | `REUSE_WITH_RECONCILIATION` | Keep route shell; render the new thin workspace and nested detail routes |
| `src/features/brand-payouts/components/BrandPayoutsWorkspace.tsx` | `REPLACE` | Split the 819-line mixed-truth monolith into bounded section composition |
| `src/features/brand-payouts/api/brand-payouts-client.ts` | `REPLACE` | One versioned provider-neutral API family |
| `src/features/brand-payouts/contracts/brand-payouts.contracts.ts` | `REPLACE` | Exhaustive Zod runtime schemas, inferred types, structured coverage/actions |
| `src/features/brand-payouts/hooks/use-brand-payouts-hub.ts` | `REPLACE` | Per-section last-good/stale/race-safe coordinator |
| `src/features/brand-payouts/brand-payouts.css` | `REPLACE` | Responsive section CSS using Aurora tokens; no page overflow |
| `src/features/brand-payouts/utils/export-ledger-csv.ts` | `RETIRE` | Download backend-authoritative CSV only |
| `src/features/brand-payouts/utils/payout-document-exports.ts` | `RETIRE` | No browser-generated official document |
| `src/features/brand-payouts/utils/ledger-tab-filter.ts`, `map-hub-ledger.ts` | `LEGACY_REFERENCE_ONLY` | Do not normalize mixed truth in the browser |
| `src/pages/brand/settings/brand-settings-escrow-page.tsx` | `REUSE_WITH_RECONCILIATION` | P2 sole command compatibility; P3 atomic summary/deep-link cutover |
| `src/features/brand-escrow/hooks/use-brand-escrow.ts` | `LEGACY_REFERENCE_ONLY` | For Payouts, it must not be mounted or used as a second data source |
| `src/features/brand-escrow/components/escrow-top-up-drawer.tsx` | `REUSE_WITH_RECONCILIATION` | Extract/reconcile minimal canonical command props and server capability; do not import the full Settings vault contract |
| `src/features/brand-escrow/components/brand-return-drawer.tsx` | `REUSE_WITH_RECONCILIATION` | Same minimal canonical command boundary; preserve original-source behavior |
| `src/design-system/aurora/components/SideDrawer.tsx` | `REUSE_WITH_RECONCILIATION` | Accessible desktop drawer/mobile sheet pattern |
| `src/design-system/aurora/components/Tabs.tsx` | `REUSE_WITH_RECONCILIATION` | Use only where hierarchy warrants; not as a copy of the legacy tab set |

No reconciled drawer may fetch Settings state internally, accept client-authored economics, or infer permission. Payouts supplies only server-authorized minimal command props/capabilities and consumes the canonical command response.

### 19.2 Frozen state-family implementation map

Exact internal identifiers and copy may be refined, but none of these materially different truths may be collapsed:

| Family | Required distinct states |
|---|---|
| Page/data | initial/loading; independently loading sections; partial source coverage; stale last-known; refreshing; empty/new Brand; ready; backend/provider dependency unavailable; legacy history that cannot safely normalize |
| Authority | Owner full financial access; Finance full financial access; Campaign Manager operational/read-only; server-redacted details; reserve approval required; not authorized |
| Funding/reserve | funding pending; AVAILABLE; committed/protected; reserve requested; Owner/Finance approval required; shortfall; reserve completed; reserve failed/action required |
| Creator payment | scheduled/not due; Creator setup required; unsupported geography/rail; provider review; eligible/queued; processing; held/release pending; settled; failed/retryable; action required; partial reversal; full reversal; outstanding after partial event |
| Brand Return | requested; allocating original sources; processing; partial; completed; action required; failed |
| Document/export | activity CSV available; export unavailable; authoritative document not issued; browser-generated tax/provider document prohibited |
| Support | action available; form/input; submitting; submitted with reference; failed/retryable; unavailable; restricted diagnostic detail |
| Responsive | desktop table where suitable; labelled mobile cards/rows/sheets; no document-level horizontal scroll |

The state coordinator retains last-good data during refresh, marks staleness explicitly, and resets all role/Brand-scoped state on identity changes. A partial response never presents missing source data as zero or empty.

## 20. Runtime validation topology

### Contract/unit

- exact amount/currency validation and immutable replay;
- membership role projection and redaction;
- all five normal terms, Kolkata calendar addition, exceptional due rule, round-trip UTC, and drift;
- activity classification/deduplication, set-once attempt/receipt milestones, late-event/as-of cursors, and summary basis;
- exhaustive obligation/provider normalized state mapping, including separate failed/retryable and action-required truth;
- CSV RFC 4180/formula-injection/range handling;
- support context/reference/idempotency;
- absence of TDS and false document semantics.

### Service/integration

- reserve request/approval/execution/shortfall/idempotency/concurrency boundary;
- obligation intake and due-gated scheduler;
- C-05 exact destination/version invalidation;
- activity projection and Brand Return invariants;
- durable support case then asynchronous routing;
- notification recipient scope/dedupe/redaction;
- atomic P3 Settings/Payouts command cutover and single mutation surface.

### PostgreSQL/security

- active Owner/Finance allow and Campaign Manager mutation deny;
- cross-Brand and cross-user isolation before serialization;
- sensitive-field absence at DTO/network boundary;
- reserve/vault row concurrency and one execution/ledger result;
- one ledger and exact funding provenance;
- partial/full settlement/reversal bounds and Return separation;
- historical unknowns remain null/legacy;
- C-04 instruction/version/hash integrity and due immutability;
- transfer milestone set-once/order constraints and cursor stability after later attempt/receipt updates.

### Frontend

- runtime schema and incompatible-version failure, including structured coverage, pagination/source completeness, and version-bound resource actions;
- Owner, Finance, Campaign Manager, unauthorized;
- loading, independent partial, stale, refreshing, empty, unavailable, legacy;
- scheduled, setup-blocked, unsupported, provider-review, queued, processing, held, settled, failed, reversal, outstanding;
- support triggers from every frozen resource surface; stable detail/deep links; refresh, Back, and unauthorized-reference behavior; support submit/success reference/retry;
- 390/767/768/desktop, keyboard/focus/screen-reader labels, no horizontal overflow;
- no synthetic documents, TDS, release control, client financial/due calculation, or parallel truth fetch.

### Production-shaped

- built backend and frontend;
- migrated disposable PostgreSQL from an accepted migration plan;
- authenticated Brand A Owner, Finance, Campaign Manager and Brand B isolation actor;
- real backend authorization and provider-neutral read slice;
- provider adapter disabled/fail-closed;
- controlled Razorpay Test lane only after separate G3 authorization.

## 21. Security and financial invariants

1. One pooled vault, one canonical ledger, one funding service, one Brand Return path.
2. Active `BrandTeamMember.role` is authority; frontend masking never grants security.
3. No caller-authored economics or browser financial/due calculation.
4. No cross-Brand existence, row, cursor, count, export, or support-context leakage.
5. No provider/KYC/bank/tax secret or raw diagnostic in ordinary APIs, logs, prompts, or notifications.
6. Pending funding is not AVAILABLE; provider processing is not settlement.
7. Transfer cannot start before the immutable due instant or without every rail/readiness/funding/resolution gate.
8. Unsupported geography/currency/rail fails closed; no conversion/manual fallback.
9. Unknown provider state never strengthens canonical truth; ambiguous outcomes retain protected value.
10. Ledger movement occurs only from authoritative financial evidence and is idempotent.
11. Route reversal, Collaboration refund, and Brand Return remain distinct.
12. Webhook mapping stays disabled until exact signed fixture/event authority is accepted.
13. TDS/tax meaning and official documents are not invented.
14. GET/read paths have no provisioning, provider call, or financial write side effect.
15. Production/provider enablement requires the named human gates; no autonomous lane can cross them.
