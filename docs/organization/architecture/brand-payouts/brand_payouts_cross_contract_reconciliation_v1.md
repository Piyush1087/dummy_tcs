# Brand Payouts Cross-Contract Reconciliation V1

Status: `COMPLETE — PREPARED_FOR_PARENT_ACCEPTANCE`
Program: `BRAND_PAYOUTS_PHASE_C`
Product authority: `brand-payouts/product-authority-v1@f15a91d0ace8b2c424a539d79dbb120869233105`
Architecture base: `main@7aeb0512cb8270a6bae1169570e82b080f01807e`
Evidence observed: 2026-09-04 UTC

This register reconciles the frozen Brand Payouts Product Authority with the live Campaign, Collaboration (C-04), Creator Settings (C-05), Brand Settings, financial-domain, frontend, notification, support, and provider contracts. It does not reopen Product decisions, duplicate the Phase A audit, authorize implementation, or prove any Razorpay capability.

Canonical Product artifacts remain on the accepted Product branch at the frozen SHA:

- `docs/organization/product_decisions/brand_payouts_product_decision_register_v1.md`
- `docs/organization/product_decisions/brand_payouts_frontend_state_family_register_v1.md`
- `docs/organization/product_decisions/brand_payouts_dependency_and_deferred_debt_register_v1.md`

## 1. Live-head preflight

| Repository / authority | Ref | Verified head | Classification |
|---|---|---:|---|
| `dummy_tcs` | `main` | `7aeb0512cb8270a6bae1169570e82b080f01807e` | Architecture parent; clean and current at branch creation |
| `dummy_tcs` | `brand-payouts/product-authority-v1` | `f15a91d0ace8b2c424a539d79dbb120869233105` | Exact accepted Product Authority; parent is the verified `main` |
| `dummy_tcs` | `c04/stage-b-authority-package-v1` | `de28784662bb92dac6cb927e348f3fc69564af7c` | Accepted C-04 Stage B architecture package |
| `dummy_tcs` | `c03/recovery-authority` | `dc81b54b87bf6fdf90583c7d0e76f176d883ce32` | Compatible forward movement; records P1.1C acceptance, not post-P1.4 |
| backend | `development` / `c05/p4-closeout` | `4c5f42858b950b7cd342f8972f99f548f3daa942` | Current base; compatible C-05 closeout movement |
| backend | `program/brand-settings-mvp` | `517531682f6286d5ee45bd48ec4e145e96d583a7` | Accepted Settings ancestor; ancestor of development |
| backend | `c03/recovery-campaign-participation-v1` | `ebad770291b411026542a7d53a7e6a30162bff2e` | Accepted C-03 P1.1C; P1.1D is current and P1.4 has not started |
| backend | `collaboration/final-backend-reconciliation` | `13ce652f432560a91dde1f75ca9a21dfa76d054f` | Accepted semantic donor, not a merge/base candidate |
| backend | `c05/p3-joint-acceptance` | `156d5834266077be7e2b6a2d459bae5489edbbd6` | Accepted C-05 runtime checkpoint |
| frontend | `development` / `c05/p3-joint-acceptance` | `323658d4b147b95b5629ff8d91fa90b8fe9077e4` | Current and accepted C-05 runtime base |
| frontend | `program/brand-settings-mvp` | `3e2cabbe95c16ee23bd77fe20a44fe9b1d8670d2` | Accepted Settings ancestor |
| frontend | `c03/recovery-campaign-participation-v1` | `66d6a9bc992afcdfb900d7837defd867670bf640` | Accepted C-03 P0 only; no C-04 frontend line |
| frontend | `phase-g/collaboration-g1c-ownership-context` | `353040228dfa20136e82b364ac56556b3b7dd7b5` | Accepted Collaboration Phase G ancestor of development |
| frontend | `collaboration/frontend-production-reconciliation` | `39510031066c44f20d59d1375c01678f34e585f8` | Divergent legacy/visual donor only |

No backend or frontend `refs/heads/c04/*` implementation branch exists. The accepted Collaboration backend donor and current backend development diverge at `5bce1f948e23774f16c7f2c65a309cc4e0a7fe71`; C-04 requires file-by-file convergence after the accepted C-03 post-P1.4 base, never a wholesale merge or cherry-pick.

### Movement disposition

| Movement | Disposition | Consequence |
|---|---|---|
| C-05 closeout on backend/frontend development | `COMPATIBLE_FORWARD_MOVEMENT` | Consume accepted subject, destination, authorization, and frontend patterns. |
| C-03 recovery authority/backend advanced through accepted P1.1C during Phase C | `COMPATIBLE_FORWARD_MOVEMENT` | P1.1B/P1.1C add canonical Application snapshot and invitation/ingress/audit foundations; they improve the future base but do not satisfy the post-P1.4 C-04 gate. |
| C-04 accepted package remains on a separate authority branch | `REQUIRES_RECONCILIATION` | Phase C consumes its contract semantics by SHA; no branch merge is implied. |
| Collaboration donor diverges from development | `REQUIRES_RECONCILIATION` | Port accepted semantics and tests only after the prescribed canonical base exists. |
| Product Authority against live `main` | `COMPATIBLE_FORWARD_MOVEMENT` | Product commit is exact and its parent is current architecture `main`; no higher-authority conflict found. |

No `AUTHORITY_CONFLICT` was found.

## 2. C-04 live status

| C-04 area | Current state | Evidence / qualification |
|---|---|---|
| `C04_PRODUCT_LOGIC` | `FROZEN` | Accepted Product register in the Stage B package. |
| `C04_CROSS_CONTRACT_RECONCILIATION` | `ACCEPTED` | Accepted architecture artifact in `de287846...`. |
| `C04_ARCHITECTURE` | `ACCEPTED` | `C04_ARCHITECTURE_FREEZE_V1.md`. |
| `C04_FINITE_EXECUTION_PLAN` | `ACCEPTED_WITH_BOUNDED_STAGE_B_CORRECTION` | Package head `de287846...`. |
| `C04_BACKEND_IMPLEMENTATION` | `NOT_AUTHORIZED / NOT_STARTED` | No C-04 backend ref; base remains the future accepted C-03 post-P1.4 SHA. |
| `C04_FRONTEND_IMPLEMENTATION` | `NOT_AUTHORIZED / NOT_STARTED` | No C-04 frontend ref; C-03 frontend integration is not available. |
| `C04_APPLICATION_TO_COLLABORATION_DEPENDENCY` | `NOT_YET_AVAILABLE` | C-03 P1.4 implementation is not started. |
| `C04_SETTLEMENT_HANDOFF` | `NOT_YET_AVAILABLE` | Donor semantics exist, but no C-04/C-05-converged accepted runtime handoff exists. |

### Required Collaboration inputs

The classification column uses only the Phase C taxonomy. Accepted donor semantics are evidence for architecture, not an accepted runtime handoff.

| Required Payout field/command | Classification | Runtime qualification / required reconciliation |
|---|---|---|
| Immutable Collaboration commercial agreement | `AVAILABLE_IN_ARCHITECTURE_ONLY` | Accepted donor semantics exist; converge onto the future canonical C-03/C-04 line. |
| Canonical Creator gross entitlement | `AVAILABLE_IN_ARCHITECTURE_ONLY` | Publish through the final immutable outbound instruction. |
| Brand commercial-refund entitlement | `AVAILABLE_IN_ARCHITECTURE_ONLY` | Preserve separately from Route reversal and Brand Return. |
| Reserve request identity/instruction version | `AVAILABLE_IN_ARCHITECTURE_ONLY` | Accepted concept/donor exists; canonical request persistence/handoff is absent. |
| Reserve amount and currency | `AVAILABLE_IN_ARCHITECTURE_ONLY` | Donor economics exist; final request must source them from the immutable agreement. |
| Owner/Finance approval identity and receipt | `NOT_YET_AVAILABLE` | Add the frozen request/approval/execution split. |
| Legacy generic-Brand direct reserve command | `CONFLICT` | It permits the wrong actor boundary and cannot be reused for canonical rows. |
| Campaign selected NET_45/NET_60 relational value | `CONFLICT` | Current Campaign persistence collapses these values; Campaign must correct it. |
| C-04 immutable payment-term snapshot | `NOT_YET_AVAILABLE` | Add the non-lossy typed snapshot and outbound field after Campaign correction. |
| `settlementEligibleAt` outbound field | `AVAILABLE_IN_ARCHITECTURE_ONLY` | Donor persists `CollaborationSettlement.eligibleAt`, but accepted outbound handoff omits it. |
| Cancellation/termination resolution | `AVAILABLE_IN_ARCHITECTURE_ONLY` | Accepted donor semantics require canonical convergence. |
| Partial/full post-entitlement recovery instruction | `NOT_YET_AVAILABLE` | Publish an explicit amount-bearing, versioned instruction; partial entitlement alone is insufficient. |
| Authoritative money-movement confirmation seam | `AVAILABLE_IN_ARCHITECTURE_ONLY` | C-04 freezes a trusted provider-neutral port; no accepted canonical implementation exists. |

No required Payout input is legitimately `IMPLEMENTATION_IN_PROGRESS`: C-03 has accepted P1.1C and identifies P1.1D as current, but the required P1.4 Collaboration handoff has not started; C-04 implementation remains unauthorized/not started.

### Split C-04 gates

```text
BRAND_PAYOUTS_C04_ARCHITECTURE_DEPENDENCY
= READY_WITH_RECONCILIATION

BRAND_PAYOUTS_C04_BACKEND_SETTLEMENT_HANDOFF_DEPENDENCY
= OPEN_BLOCKING

BRAND_PAYOUTS_C04_FRONTEND_DEPENDENCY
= OPEN_NON_SERIALIZING
```

- Architecture compatibility is sufficient for provider-neutral architecture and independent Payouts work. The frozen deltas are the reserve approval split, non-lossy payment term, outbound `settlementEligibleAt`, explicit recovery instruction, and canonical Creator subject identity.
- Backend integration becomes eligible only after an accepted C-03 post-P1.4 backend SHA, an accepted C-04 backend checkpoint on that line, the final versioned handoff fields above, an accepted trusted confirmation owner/seam, and one accepted convergence tree in which that handoff and the Payouts P3A checkpoint coexist.
- The frontend gate applies only to C-04-specific actions, cross-links/shared state, and final joint acceptance. It requires the published `C03_ACCEPTED_FRONTEND_INTEGRATION_SHA`, a C-04 frontend checkpoint descended from or explicitly converged with it, and proof that the Payouts frontend checkpoint coexists on one accepted tree. It does not serialize Payouts read/RBAC/activity backend work or the Payouts-owned read-only vertical slice.

## 3. C-05 Creator readiness dependency

```text
C05_STATUS = COMPLETE_AND_ACCEPTED
C05_BACKEND_RUNTIME_SHA = 156d5834266077be7e2b6a2d459bae5489edbbd6
C05_BACKEND_CLOSEOUT_SHA = 4c5f42858b950b7cd342f8972f99f548f3daa942
C05_FRONTEND_RUNTIME_SHA = 323658d4b147b95b5629ff8d91fa90b8fe9077e4
```

C-05 remains authoritative for the canonical Creator subject, legal profile, encrypted/versioned payout destination, destination invalidation, and actor/subject boundaries. Brand Payouts must not duplicate its persistence or collect legal, bank, KYC, PAN, tax, or provider-onboarding data.

The minimum internal, provider-neutral input is:

```text
CreatorPayoutReadinessV1 {
  creatorProfileId
  destination: null | {
    reference
    version
    countryCode
    currency
    rail: BANK_ACCOUNT | UPI | PAYPAL
  }
  setupStatus: READY | ACTION_REQUIRED | UNKNOWN
  providerStatus:
    NOT_STARTED | IN_PROGRESS | UNDER_REVIEW | READY | BLOCKED | UNKNOWN
  blockingReasonCode: nullable bounded code
  recoveryTarget: CREATOR_PAYOUT_SETTINGS | PAYOUT_SUPPORT | null
  stateVersion
  observedAt
}
```

Provider readiness is consumable only when its evidence is fenced to the exact current destination reference and version. Missing or mismatched evidence fails closed. V1 execution additionally requires `IN + INR + BANK_ACCOUNT`; C-05's support for UPI, US bank, or PayPal is data compatibility, not Payout execution readiness. The Brand projection receives only normalized readiness and bounded recovery guidance.

## 4. Campaign net-term reconciliation

Current canonical Campaign validation accepts `NET_7`, `NET_15`, `NET_30`, `NET_45`, and `NET_60`, and the exact Campaign payload is retained in `uce_campaigns.canonical_definition`. The relational `UcePayoutTerms` enum contains only `IMMEDIATE`, `NET_7`, `NET_15`, and `NET_30`; `canonical-campaign-create.service.ts` collapses NET_45 and NET_60 to NET_30.

```text
PRIMARY_OWNER = CAMPAIGN_UPSTREAM_CORRECTION
SECOND_OWNER = C04_SNAPSHOT_RECONCILIATION
PAYOUTS_COMPATIBILITY_ADAPTER = PROHIBITED_FOR_LOSSY_VALUES
```

Required sequence:

1. Campaign adds the missing enum values and stops lossy mapping.
2. Existing rows may be reconciled only where immutable canonical JSON proves the exact value.
3. C-04 snapshots the exact term in the immutable commercial agreement and outbound instruction.
4. Payouts derives the due timestamp from that snapshot and `settlementEligibleAt`; it never infers a term from copy or legacy tranche fields.

This is an upstream contract defect, not an architecture blocker for the first read-only vertical slice. It blocks canonical due-date and transfer orchestration.

## 5. Ownership reconciliation

| Truth / command | Canonical owner | Brand Payouts responsibility |
|---|---|---|
| Pooled vault, AVAILABLE, pending loads, protected allocation, funding provenance | Existing Brand financial domain | Query-only projection and links to canonical commands |
| Add funds | Existing Brand funding service | Canonical operational surface; invoke the same command, never copy it |
| Brand Return | Existing Brand Return service | Canonical operational surface; invoke/query the same service |
| Canonical financial ledger | Existing financial domain | Read-only activity projection; no second journal |
| Commercial agreement, entitlement, reserve instruction, refund entitlement, abnormal resolution | C-04 Collaboration | Consume immutable, versioned instructions |
| Creator identity, destination, legal profile, destination version | C-05 Creator Settings | Consume normalized readiness seam only |
| Provider onboarding/KYC evidence | Creator Payouts / Security / provider integration | Consume normalized provider readiness only |
| Reserve approval/execution | Financial domain with C-04 request input | Expose Owner/Finance command and audit status |
| Payout obligation, due gate, funding allocation, transfer, settlement, reversal, reconciliation | Payout execution domain | Canonical command/read orchestration |
| Brand Payouts overview, obligations, activity, Returns, action items, support context | Brand Payouts query/application layer | Provider-neutral, role-projected operational view |
| Payment support V1 | Brand Payouts backend owns bounded intake/persistence; Support Operations owns triage/failure | Create a durable case/reference; no general Support-platform or financial authority claim |
| Notification delivery | Existing notification domain | Produce scoped/redacted financial events |

Forbidden duplicates are a second vault, ledger, funding service, Brand Return implementation, Collaboration policy engine, Creator destination model, or authorization model.

### 5.1 Complete seam register

Every row records the required ownership and failure boundary. `Input` and `Output` are logical contracts; implementation names may follow repository conventions without changing their meaning.

| Seam | Source owner | Input contract | Output contract | Authorization owner | Persistence owner | Failure owner | Dependency gate | Implementation status |
|---|---|---|---|---|---|---|---|---|
| Product Authority -> Brand Payouts architecture | Product | Frozen BP-PD-01..10, inherited authority, state-family/debt registers at `f15a91d...` | This provider-neutral architecture, gates, and finite plan | Product/Parent | `dummy_tcs` authority repository | Systems Architect for traceability; Product for contradiction | `BP-G00`, `BP-G01` | Product accepted; architecture awaiting Parent acceptance |
| Brand Settings funding -> Payouts | Existing Brand funding service | Active Brand membership, server-resolved top-up command/idempotency | Pending/credited funding state and canonical ledger evidence | `BrandWorkspaceAuthorizationService` Owner/Finance mutation guard | Vault, funding loads/lots, canonical ledger | Funding service/provider reconciliation | `BP-G03`, P3A atomic surface cutover | Backend implemented; Payouts surface reconciliation not started |
| Brand Settings Return -> Payouts | Existing Brand Return service | Owner/Finance request against eligible AVAILABLE provenance | Return request/allocation/status and ledger only after authoritative success | Existing financial mutation guard | Existing Brand Return models + canonical ledger | Brand Return service; provider adapter for external ambiguity | `BP-G03`, M2-independent P3A cutover; RZ gates for real execution | Backend foundation implemented/fail-closed; frontend cutover not started |
| Campaign -> C-04 commercial agreement | Campaign | Exact selected NET term and accepted Campaign commercials | Immutable Collaboration agreement snapshot | Campaign command authority then C-04 intake authority | Campaign canonical definition + C-04 agreement | Campaign owner for lossy persistence; C-04 for snapshot rejection | `BP-G05`, `BP-G06` | NET_45/60 runtime conflict; correction not started |
| C-03 Application -> C-04 Collaboration | C-03 | Accepted application/Brand/Creator/Campaign provisioning instruction | Canonical Collaboration identity and agreement initiation | C-03/C-04 port contract | Future canonical C-03/C-04 tree | C-03 owner before handoff; C-04 after acceptance | `BP-G06` | C-03 P1.1C accepted; required post-P1.4 not available |
| C-04 reserve request -> financial approval | C-04 | Immutable request ID/version/hash, Brand/Collaboration, exact breakdown/currency, requester | Server-projected approval-required item | C-04 progression for request; Payouts current membership for visibility | C-04 request; Payouts approval receipt | C-04 for invalid/superseded request; Payouts for approval validation | `BP-G08`, `BP-G08A`, M1 | Architecture only; approval identity not available |
| Owner/Finance approval -> reserve execution | Payouts/financial domain | Request identity/version + idempotency; no client economics | Approval receipt, execution attempt, existing lock/allocation/ledger refs, C-04 confirmation | Active `BrandTeamMember.role`; Owner/Finance only | Payouts approval/attempt + existing financial models | Payouts/financial runtime | `BP-G08A`, `BP-G10`, `BP-G19` | Not implemented; unsafe legacy routes excluded |
| C-04 entitlement/due -> payout obligation | C-04 | Instruction ID/version/hash, entitlement, resolution, exact term, `settlementEligibleAt`/exceptional due | Idempotent obligation with immutable `paymentDueAt` and source refs | C-04 trusted internal port; Payouts intake validation | C-04 instruction + existing obligation with M1 provenance | C-04 for invalid commercial truth; Payouts for derivation/intake | `BP-G05`, `BP-G08A`, M1 | Architecture only; canonical handoff unavailable |
| C-04 financial recovery -> Payouts | C-04 or authorized Admin resolution | Versioned recovery instruction, source obligation/settlement, amount/currency/effects/supersession | Applied/remaining amounts and refund/reversal/recovery confirmation | Resolution authority at source; Payouts internal execution guard | C-04 instruction; Payouts intake/linkage; existing reversal/refund/ledger | Source owner for commercial conflict; Payouts/provider reconciliation for execution | `BP-G08R` | Not yet available |
| C-05 Creator Settings/readiness -> Payouts | C-05 plus Creator Payouts/provider integration | Creator subject and exact current destination reference/version; normalized provider evidence | `CreatorPayoutReadinessV1` with bounded reason/recovery | Creator-side subject authority; internal service access | C-05 destination/mapping; provider owner readiness evidence; Payouts stores only attempt snapshot | C-05 for identity/version invalidation; provider integration for readiness | `BP-G04` | C-05 accepted; exact provider fence extension pending for P5 |
| Financial runtime -> Payouts read model | Existing financial domain + payout execution | Side-effect-free role-scoped query at fixed as-of | Separate buckets, obligations, activity, Returns, action items, coverage/freshness | Active membership plus accepted entity predicate | Existing canonical models; no Payouts journal/cache required | Owning source for unavailable truth; Payouts query layer for projection | P1, `BP-G20` | Current endpoint unsafe; reconciliation not started |
| Payout coordinator -> Route provider port | Payout execution | Due obligation, exact destination fence, funding/resolution gates, durable idempotency/attempt | Typed success, terminal, retryable, ambiguous/read result; normalized events | Internal worker/service auth only | Existing obligation/allocation/attempt/reversal/receipt + ledger on settlement | Payout coordinator before port; provider adapter/reconciliation after call | RZ-G0..G4 | Neutral foundation partial; concrete adapter fail-closed |
| Brand Return -> original-source provider port | Existing Brand Return | Proven source allocation and stable refund identity | Typed provider outcome/read; ledger only on authoritative success | Internal Return worker/service auth | Existing Return request/allocation/receipts + ledger | Brand Return service/provider reconciliation | RZ-G1..G4 for real provider | Neutral port implemented; fail-closed binding; no production caller |
| Payouts -> payment support | Brand Payouts V1 intake; Support Operations consumer | Active member, validated resource public ref, category, note, idempotency | Durable case reference/accepted time and restricted triage record | Payouts membership/entity scope; restricted service auth for Ops reader | New `PaymentSupportCase` M2 | Payouts until commit; routing worker then Support Operations for terminal triage failure | `BP-G11`, `BP-G21` | New bounded case required; not implemented |
| Financial/Payout events -> Notifications | Financial/Payout producer | Normalized event, semantic transition ID, safe payload, proven recipient scope | Durable in-app job/recipient snapshot and optional email delivery | Producer validates entity scope; notification recipient policy resolves roles | Existing notification/job/recipient/email models | Producer until durable enqueue; notification worker/channel after | P3A notification binding | Reuse with extension; granular events not implemented |
| Brand Payouts API -> frontend | Payouts query/application layer | Authenticated V2 media type, fixed as-of/filter/cursor, resource reference | Runtime-validated role-projected sections, structured coverage/actions, safe details | Backend membership/entity predicate | Canonical backend sources; frontend last-good memory only | Backend for contract/source failure; frontend for validation/render failure | P1 -> P2 first-slice gate | Current client/response is legacy; V2 not implemented |
| Frontend -> canonical financial commands | Existing funding/Return services; Payouts approval/support commands | Server capability + resource identity/version/idempotency; bounded note/category only | Canonical command response and refreshed read projection | Backend command owner; never browser role/masking | Respective canonical owner | Respective command owner; UI retains recoverable state | P3A atomic cutover; P3S support; P4 reserve gates | Settings currently owns financial commands; Payouts cutover not started |

## 6. Authorization and reserve reconciliation

`BrandTeamMember.role` on the active membership is the sole Brand financial authority. `BrandProfile.payoutsWorkspaceRole` is compatibility-only. Existing `BrandWorkspaceAuthorizationService` is reused.

The canonical command boundary is:

```text
C-04 Collaboration progression
  -> immutable CollaborationReserveRequest
  -> Owner/Finance ApproveFinancialReserve
  -> durable FinancialReserveApproval receipt
  -> existing vault lock / funding allocation / escrow lock / ledger execution
  -> provider-neutral confirmation to C-04
```

The approval command accepts a request identity, expected version, and idempotency key only. Amount, currency, Creator fee, commission, GST, and reserve total are loaded from the immutable request. It verifies exact Brand and Collaboration ownership and current active Owner/Finance membership, then locks request/approval/vault rows and executes existing financial primitives atomically. Replay with the same key and instruction is stable; mismatched identity/economics is a conflict.

The dedicated approval record is required because existing locks, ledger rows, and generic idempotency do not jointly prove requested-by, approved-by, role snapshot, instruction version/hash, decision time, status, failure, and execution linkage. It does not replace the lock or ledger.

These current routes are unsafe for canonical execution and must be excluded, then retired for new canonical rows after cutover:

- `POST /api/v1/escrow-engine/lock-collaboration-funds`
- `POST /api/v1/hardened-escrow/lock-funds`
- `POST /api/v1/escrow-interlock/transition-stage`
- `POST /api/v1/escrow-interlock/trigger-rule-refund`
- `POST /api/v1/collaboration/threads/:collaborationId/securement/fund-escrow`

They apply read-level membership or accept legacy/caller-facing economics and cannot be an implementation shortcut.

The current schema has no proven finer-grained Campaign Manager assignment model. Until an accepted Campaign/Collaboration access predicate proves the actor is otherwise authorized, the query returns no Campaign Manager financial rows. Active same-Brand membership is necessary but is not a fallback for broader entity access.

## 7. Existing financial and provider foundations

### Reuse

- `BrandEscrowVault`, `EscrowFundingLoad`, `EscrowFundingLot`, funding attribution, and allocations.
- `EscrowTransactionLedger` as the one canonical ledger.
- `CollaborationEscrowLock` execution primitives, reconciled to immutable request input.
- `CreatorPayoutObligation`, `CreatorPayoutFundingAllocation`, `RouteTransferAttempt`, and `RouteTransferReversal`, reconciled to the new intake/due/readiness contract.
- `BrandReturnRequest`, `BrandReturnAllocation`, signed receipt scaffolding, and original-source execution rules.
- `IdempotencyRegistry` where it fits, without treating it as domain audit state.

### Required corrections

- Pure Payouts reads must not reuse `BrandEscrowService.getVault()` or `listLedger()` if they can provision/upsert a vault or create a provider virtual account. GET projection paths are side-effect-free.
- `RouteTransferService.startTransfer()` must enforce a non-null reached `paymentDueAt`, exact supported rail, current destination/readiness fencing, valid protected allocation, and no blocking resolution.
- Ordinary V1 must not accept Brand-facing `onHold` or `onHoldUntil`; provider holds are normalized internal recovery state only.
- Transfer creation needs typed success, terminal, retryable, and ambiguous outcomes plus read/reconciliation behavior.
- No provider-native identifier, raw diagnostic, virtual-account credential, bank detail, or TDS buffer enters ordinary Payouts output.

### Provider evidence status

The Route adapter and Brand Return provider adapter are fail-closed. No production scheduler/caller is wired. Empty webhook mappings and synthetic tests prove only local behavior. Repository evidence does not establish current Razorpay entitlement, API contracts, Test configuration, event semantics, or production readiness.

## 8. Support and notification reconciliation

```text
PAYMENT_SUPPORT = NEW_BOUNDED_SUPPORT_CASE_REQUIRED
NOTIFICATIONS = REUSE_WITH_EXTENSION
```

The repository has no durable support case that can return Product's required acknowledgement/reference. V1 therefore makes the Brand Payouts backend the bounded intake/persistence owner and Support Operations the restricted triage/failure owner. The command first commits the case, returns its stable public reference and accepted timestamp, then performs durable routing. The server resolves and validates allowed Brand/Campaign/Collaboration/obligation/activity/Return references; the client cannot inject provider IDs. Case creation never mutates money, entitlement, reversal, dispute, chargeback, or Return state. M2 waits for a Security-approved restricted-access/retention policy.

The notification domain already supplies durable notifications, recipient snapshots, semantic deduplication, jobs, optional email/Postmark delivery, and Owner/Finance recipient policies. Extend its event registry for the frozen states, validate Campaign Manager entity scope, redact details, and deep-link to the canonical Payouts surface. Mandatory in-app financial recovery notices are not disabled by optional email preferences.

## 9. Frontend reconciliation

The current `/brand/payouts` implementation is not Product authority. It is a monolith that mixes Settings and legacy Payouts sources, defaults missing role upward, masks only in the browser, exposes fixed 30/70 and TDS semantics, creates synthetic documents, and lacks robust partial/stale/mobile states.

| Classification | Current asset / pattern |
|---|---|
| `REUSE` | Aurora tokens, Button, Badge, TextField, and static Card usage |
| `REUSE_WITH_RECONCILIATION` | Exact `/brand/payouts` route/page shell and sidebar entry; Settings top-up and Brand Return interaction patterns; Zod command patterns; Aurora SideDrawer/Tabs/Alert; Collaboration capability/stale/error/deep-link patterns; C-05 fail-closed/mobile/accessibility patterns |
| `LEGACY_REFERENCE_ONLY` | Current Payouts composition/contracts; Settings account-card as a Payouts source; old ledger; large Collaboration workspace cards; Creator payout-settings display; historical Creator payout hub |
| `REPLACE` | Payouts transport/schema/client/hooks, mixed data fetch, local map/filter logic, most monolithic styling |
| `RETIRE` | Client-generated invoices/tax PDFs/CSV, invoice/tax tab, release controls, duplicate escrow fetch, client masking as security |

The permanent frontend boundary is a thin workspace over one versioned backend contract, a runtime schema, typed client, and per-section last-good/stale/race-safe state coordinator. Modular sections cover overview, funding, reserve requests, obligations, activity, Brand Return, detail, and support as needed. Tables become usable cards/rows/sheets below 768px; no document-level horizontal scrolling.

```text
UI_UX_DECISION = CURRENT_PATTERNS_SUFFICIENT
STITCH = NOT_REQUIRED
```

UI/UX or Stitch is reopened only if implementation uncovers a specific hierarchy, interaction, or responsive problem after the permanent Frontend Decision Ladder is exhausted.

## 10. Dependency conclusion

Provider-neutral read/RBAC/activity architecture, C-05 readiness integration design, and the first Payouts-owned vertical slice are eligible for Parent acceptance. Runtime implementation remains unauthorized.

Canonical reserve and settlement integration are not eligible until the accepted C-04 backend handoff and the Campaign/C-04 term corrections exist. C-04 frontend absence does not serialize backend work. Razorpay debt gates only adapter/provider acceptance and production enablement, not the provider-neutral core.

No remaining Product decision is required for the bounded V1 scope.
