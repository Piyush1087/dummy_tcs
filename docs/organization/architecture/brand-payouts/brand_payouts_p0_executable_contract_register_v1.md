# Brand Payouts P0 Executable Contract Register V1

Artifact: `BRAND_PAYOUTS_P0_EXECUTABLE_CONTRACT_REGISTER_V1`

Checkpoint: `BP-P0-CONTRACT-BASE`

Status: `FROZEN_FOR_EXECUTION_BLOCK_1`

## 1. Immutable authority and starting bases

| Authority | Accepted identity |
|---|---|
| Brand Payouts Product Authority | `f15a91d0ace8b2c424a539d79dbb120869233105` |
| Brand Payouts architecture and finite plan | `3fb6b4246aa5f2ecb71c3bbfe99c56e395f30a92` |
| Backend execution base | `4c5f42858b950b7cd342f8972f99f548f3daa942` |
| Frontend execution base | `323658d4b147b95b5629ff8d91fa90b8fe9077e4` |
| C-04 architecture dependency | `de28784662bb92dac6cb927e348f3fc69564af7c` |
| C-05 accepted backend runtime | `156d5834266077be7e2b6a2d459bae5489edbbd6` |

Execution branches are `brand-payouts/v1-execution-ledger`, `brand-payouts/v1-backend`, and `brand-payouts/v1-frontend`. The revalidated backend and frontend `development` heads equal their accepted Phase C bases. The observed newer C-03 recovery candidate `b7614e9698351f51181fad4b6be66daeca542853` is compatible forward movement but is not accepted C-03 runtime authority and does not change these bases.

## 2. Contract ownership

| Contract | Owner | Brand Payouts may do | Brand Payouts must not do |
|---|---|---|---|
| Brand role and active membership | Brand Settings / `BrandTeamMember.role` | Resolve current active membership before query and serialization | Consult `BrandProfile.payoutsWorkspaceRole` as authority |
| Vault, funding lots/provenance, AVAILABLE, protected allocation, Brand Return, ledger | Existing Brand financial domain | Read and project canonical state | Create a second vault, ledger, funding system, or Return path |
| Commercial agreement, reserve request, entitlement, refund/resolution | C-04 | Consume immutable versioned instruction contracts when accepted | Recompute or accept caller-authored economics |
| Creator identity/destination/readiness | C-05 plus Creator Payouts/provider authority | Consume the narrow provider-neutral readiness port | Duplicate destination/KYC/tax persistence or expose sensitive data |
| Payout obligation and execution | Brand Payouts | Own normalized obligation/execution/reconciliation contracts | Equate obligation, provider transfer, and settlement |
| Brand workspace | Brand Payouts query/projection layer | Compose provider-neutral, role-safe, source-complete reads | Become canonical money state or mutate on read |

## 3. Frozen V2 HTTP read family

The legacy default response shape remains available for un-negotiated compatible clients, but P1 must resolve the active member role before selecting either representation. It must deny the current unsafe legacy hub to Campaign Managers rather than serialize Brand-wide Treasury data. Every P2 request for the new contract sends:

```http
Accept: application/vnd.creator-shop.brand-payouts.v2+json
```

The P1 read family is:

```text
GET /api/v1/brand/payouts
GET /api/v1/brand/payouts/obligations
GET /api/v1/brand/payouts/obligations/:obligationId
GET /api/v1/brand/payouts/activity
GET /api/v1/brand/payouts/activity/:activityId
GET /api/v1/brand/payouts/brand-returns
GET /api/v1/brand/payouts/brand-returns/:requestId
GET /api/v1/brand/payouts/reserve-requests
GET /api/v1/brand/payouts/activity.csv
```

P1 adds no financial command. Reserve approval, Support intake, Add funds, and Brand Return cutover remain outside Execution Block 1. Settings escrow remains the sole temporary Add funds and Brand Return mutation surface during P2.

## 4. Common response contract

Every JSON read returns an explicit `schema_version`, immutable request `as_of`, role-projected `viewer`, and one or more sections containing:

- `section_id`;
- `coverage`: `COMPLETE | PARTIAL | UNAVAILABLE`;
- `freshness`: `CURRENT | STALE`;
- nullable `source_observed_at`;
- per-source status, bounded limitation code, and recovery hint;
- legacy limitations;
- resource/version-bound available actions;
- payload or items;
- pagination metadata where applicable.

Money is serialized only as exact decimal strings plus ISO 4217 currency. Instants are explicit-offset UTC ISO-8601 strings. The frontend neither adds money nor calculates due dates.

Unknown data is represented as unavailable/partial/legacy-limited. It is never converted to zero, success, settled, paid, or ready.

## 5. Authorization, entity scope, and redaction

`BrandPayoutsAuthorizationProjection` resolves the current active `BrandTeamMember` before protected data access. Inactive, absent, unknown, or cross-Brand membership fails closed.

| Role | P1 read contract | Explicitly absent |
|---|---|---|
| `BRAND_OWNER` | Product-safe full Brand financial reads and Owner/Finance CSV | Raw provider IDs/diagnostics, bank/KYC/tax data, false documents |
| `FINANCE_ADMIN` | Same P1 financial projection as Owner and Owner/Finance CSV | Same sensitive fields |
| `CAMPAIGN_MANAGER` | Empty financial collections and zero scoped details until an upstream canonical entity predicate exists | Vault/Return values, export, Treasury actions, broad same-Brand rows, resource existence |
| Other/no active membership | Authorization denial with no resource existence | All protected data and actions |

### BP-G20 decision

```text
CAMPAIGN_MANAGER_ENTITY_SCOPE
= OPTION_B_FAIL_CLOSED_ZERO_ROWS
```

The accepted base has no relation or service predicate binding a Campaign Manager membership/user to specific Campaigns or Collaborations. Existing ownership helpers prove Brand ownership only. Therefore:

- Campaign Manager list queries branch to an empty page before financial-source queries;
- Campaign Manager detail queries return the repository's non-disclosing not-found result;
- CSV and all Treasury capabilities are absent/denied;
- no same-Brand fallback is permitted;
- adding useful Campaign Manager rows requires a separately accepted upstream entity-access predicate.

## 6. Pagination and snapshot contract

Lists use a stable keyset ordered by `(recorded_at, stable_id)` in a frozen `as_of` snapshot. A cursor binds schema version, Brand, active viewer role/scope, endpoint/filter identity, `as_of`, last timestamp, and last stable ID. Invalid, cross-role, cross-Brand, filter-mismatched, or future cursors fail closed.

`page_complete` describes exhaustion of the current page window. `source_complete` separately describes whether all authoritative sources were available and safely projected. There is no silent 100-row cap. Page size is bounded and validated; continuation preserves the original `as_of` and scope.

## 7. Overview and summary projection

The overview uses one consistent database `as_of` and keeps these buckets semantically separate:

| Bucket | Canonical source or P1 treatment |
|---|---|
| AVAILABLE | `BrandEscrowVault.availableBalance` |
| Pending funding | Uncredited pending funding evidence only; unavailable when current schema cannot prove it |
| Committed/protected | `lockedCampaignFunds` / canonical protected allocation |
| Active Brand Return commitment | Existing Brand Return financial authority, separately labelled |
| Scheduled obligations | Proven outstanding canonical/safe-legacy obligation amounts only |
| Processing obligations | Proven active execution/hold/reconciliation amounts only |
| Settled activity | Authoritative settlement ledger movements only, with explicit basis |
| Action required | Distinct role-visible resources with a proven material blocker |

An unsupported bucket is omitted or marked unavailable with source coverage. The client never derives summary totals from paginated lists.

## 8. Payout obligation read contract

The Product lifecycle is normalized to:

```text
SCHEDULED
READY_QUEUED
PROCESSING
HELD_RELEASE_PENDING
SETTLED
FAILED_RETRYABLE
ACTION_REQUIRED
PARTIAL_REVERSAL
FULL_REVERSAL
LEGACY_UNRECONCILED
```

Current gate truth is separately expressed as `NOT_YET_DUE`, `CREATOR_SETUP_REQUIRED`, `UNSUPPORTED_GEOGRAPHY_OR_RAIL`, `PROVIDER_REVIEW`, bounded action-required, dependency-unavailable, or eligible/queued. Provider-native state and IDs are never the public lifecycle.

P1 projects only fields proven by current canonical sources. Historical rows without immutable instruction, exact term/anchor, or provider/settlement evidence are `LEGACY_UNRECONCILED` or omitted with a limitation; P1 does not fabricate due dates, readiness, rail, approval, settlement, or policy snapshots.

## 9. One financial activity projection

`FinancialActivityProjection` is a deterministic, read-only union; it is not a table or second journal. P1 may safely project current immutable evidence from the canonical ledger, payout obligations, transfer/reversal rows, and Brand Return lifecycle. Sources that lack an immutable milestone timestamp or complete semantics are omitted or explicitly limited.

Every row has a stable namespaced activity ID, source owner/reference, normalized category, `is_financial_movement`, exact amount/currency only when authoritative, recorded/occurred/source-observed times where proven, safe actor/source, authorized entity references, status, and any legacy limitation.

Closed categories are:

```text
MONEY_MOVEMENT
PROTECTED_ALLOCATION
BUSINESS_OBLIGATION
PROVIDER_EXECUTION
RETURN_REFUND_REVERSAL
INFORMATIONAL_LIFECYCLE
```

Settlement or Return provider evidence never duplicates its ledger money movement. Obligation creation, provider acceptance, processing, and reserve are not `SETTLED`, `CLEARED`, or `PAID`.

## 10. Brand Return and reserve reads

Brand Return reads reuse the existing canonical service/persistence truth and retain AVAILABLE-only, original-source-only semantics. Ordinary output excludes funding-source credentials/provider IDs. Campaign Managers receive no Return rows.

Reserve-request reads expose only authoritative persisted request/approval state. Because accepted C-04 runtime request/approval persistence is not present, P1 returns structured source-unavailable/empty-safe coverage and never synthesizes approval requirements from legacy locks. No approval command is introduced.

## 11. CSV contract

The Owner/Finance-only activity CSV uses the same role-scoped activity projection. It requires inclusive `from`, exclusive `to`, a maximum 366-day range, and structured rejection rather than silent truncation above 100,000 rows. Output is UTF-8 RFC 4180 with spreadsheet-formula injection protection and no provider-native or sensitive fields. The safe filename identifies it as `financial-activity`; it is not an invoice, receipt, tax document, provider statement, or certified accounting statement.

## 12. Provider-neutral ports frozen at P0

The executable contract layer freezes narrow application-owned ports without binding them into runtime execution:

| Port | Required inputs/outputs | Execution Block 1 behavior |
|---|---|---|
| `CreatorPayoutReadinessPort` | Creator subject, destination reference/version, country, currency/rail compatibility, setup/provider readiness, bounded blocker/recovery reference | Contract only; no KYC/bank payload and no provider call |
| `CreatorPayoutProviderPort` | Typed capability, transfer create/read, and reversal requests/results using Creator Shop references and normalized outcomes | Contract only; disabled/fail-closed; no adapter or provider action |
| `BrandReturnRefundProvider` | Existing original-source Return refund boundary | Reused only by existing canonical Return authority; not called by Payouts reads |
| C-04 instruction intake/confirmation port | Immutable agreement/reserve/entitlement/resolution inputs and provider-neutral financial confirmation | Contract dependency only; no C-04 runtime wiring |

Exact P0 backend sources are:

- `src/features/brand-payouts/contracts/brand-payouts-authorization.contract.ts`;
- `src/features/brand-payouts/contracts/brand-payouts-v2.contract.ts`;
- `src/features/brand-payouts/ports/brand-payouts-read.port.ts`;
- `src/features/brand-payouts/ports/creator-payout-readiness.port.ts`;
- `src/features/brand-payouts/ports/creator-payout-provider.port.ts`;
- `src/features/brand-payouts/ports/collaboration-payout-instruction.port.ts`.

The contract and architecture tests are `brand-payouts-v2.contract.test.ts` and `brand-payouts-p0.architecture.test.ts`. Backend checkpoint `b19752e476f85509ac2a895ffde6f17180dec7ee` pins these symbols and their unwired status.

## 13. Logical migrations M1 and M2

No Prisma or SQL file is created or changed in P0-P2.

| Proposal | Logical contents | Status/gate |
|---|---|---|
| M1 financial contract | Additive reserve approval/execution-attempt audit; obligation instruction/due provenance; attempt/receipt immutable milestone fields and indexes | `PROPOSAL_NOT_AUTHORIZED`; regenerate on the future accepted C-04 convergence tree and obtain exact human review |
| M2 payment support case | Additive bounded case/reference/idempotency/routing state with Security-approved access/retention policy | `PROPOSAL_NOT_AUTHORIZED`; P3S only after `BP-G21` and migration review |

### M1 logical field and constraint proposal

| Logical delta | Required meaning and constraints | Backfill / ambiguity | Rollback / compatibility |
|---|---|---|---|
| `FinancialReserveApproval` | Stable ID; unique immutable C-04 request/instruction identity; Brand/Collaboration; instruction version/hash; trusted amount breakdown/currency audit snapshot; requester and approver user/membership/role/times; status/version/idempotency; execution timestamps/failure code; existing lock/ledger links | Never manufacture approval for legacy locks | Disable future command; retain inert audit history; existing financial records remain authoritative |
| `FinancialReserveExecutionAttempt` | Append-only child; stable attempt ID; approval/request linkage; claim/lease identity; created/outcome timestamps; normalized outcome/failure; no independently editable economics; at most one successful execution per instruction | No backfill without immutable attempt evidence | Stop workers; retain attempts; canonical vault/lock/ledger remain money truth |
| Obligation provenance extension | Immutable C-04 instruction/resolution IDs, version/hash, intake `recordedAt`, `settlementEligibleAt`, exact payment-term snapshot, due-rule version/evidence; existing `paymentDueAt` retained | Populate only from exact C-04 evidence; old or ambiguous rows remain `LEGACY_UNRECONCILED` | Dual-read; require complete provenance only for new canonical intake |
| Transfer-attempt milestones | Destination/version/provider-mapping snapshot; set-once queued, execution-started, provider-request-completed, failure-recorded timestamps; immutable final disposition; ordering/check constraints and lookup indexes | No inferred provider milestones | New execution requires evidence; old attempts remain limited/current-only |
| Reconciled receipt evidence | Set-once normalized entity/event classification, received/provider-occurred/reconciled timestamps, dedupe identity and lookup indexes | No backfill from mutable status/provider reference alone | Disable new ingress; preserve evidence for reconciliation |

M1 is additive, but its concurrency, uniqueness, timestamp-order, foreign-key, and index details must be regenerated against the future accepted C-04 convergence tree. Historical ambiguity is material and prohibits automatic backfill. Migration risk is medium/high until C-04 co-residence and exact Database review. No logical field creates another vault, journal, Return service, or commercial instruction source.

### M2 logical field and constraint proposal

| Logical delta | Required meaning and constraints | Backfill / ambiguity | Rollback / compatibility |
|---|---|---|---|
| `PaymentSupportCase` | Stable internal ID and non-sensitive public reference; Brand; submitter user/membership/role snapshot; bounded category/note; permitted Creator Shop context references; separately protected bounded operational context; idempotency identity; accepted time/state; queue; routing claim/state/attempts/last error; access/retention policy version | No backfill; historic email/link activity was not an authoritative case | Disable intake/routing; retain acknowledged cases and references; never cascade into financial data |

M2 is additive and has no financial state transition. It cannot be generated until Security accepts `BP-G21` restricted reader authorization, data minimization, redaction, audit, and retention/deletion rules. Raw provider payloads, bank/KYC/tax data, credentials, and financial mutation fields are prohibited. Migration risk is low/medium after that gate; without it M2 remains blocked.

Campaign NET_45/NET_60 and C-04 persistence are upstream owner migrations and are not counted as Payouts M1/M2. Destructive change, ambiguous backfill, or a third hidden journal/migration is an architecture circuit breaker.

## 14. Dependency handoffs

- `docs/organization/handoffs/brand-payouts/brand_payouts_to_c04_settlement_dependency_handoff_v1.md`
- `docs/organization/handoffs/brand-payouts/brand_payouts_to_campaign_net_terms_correction_handoff_v1.md`

Both are issued early and non-blocking for P0-P2. Campaign exact terms and accepted C-04 backend/convergence contracts remain blocking for later due/reserve/execution phases.

## 15. P0 acceptance evidence

P0 accepts only when:

- exact branches and bases are verified and pushed;
- bounded contract/port source compiles and its contract tests pass;
- BP-G20 zero-row/no-existence decision is tested or pinned for P1;
- legacy default compatibility and explicit V2 negotiation are frozen;
- no runtime provider, financial mutation, Support persistence, schema, or migration change exists;
- both upstream handoffs and this register are committed;
- the execution ledger records exact checkpoint SHAs, tests, files, gates, correction count, and a clean remote state.

Successful P0 authorizes only the already-approved P1 read implementation.
