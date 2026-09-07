# C06_ARCHITECTURE_AND_OWNERSHIP_V1

## Status

```text
ARCHITECTURE = ACCEPTED
NEW_PERSISTENCE = NONE
C06_OWNED_MIGRATIONS = 0
NEW_CREATOR_LEDGER = NO
NEW_FINANCIAL_HASH = NO
```

## Runtime topology

```text
Creator actor
  → canonical CreatorWorkspaceActor resolution
  → C06 GET-only controller
  → Creator-scoped authorization/query projections
  → accepted shared financial tables and C04 lineage
  → narrow C05 payout-method read port
```

`ProviderNeutralPayoutService` and `CreatorPayoutProviderPort` are not injected into or called by C06 reads.

## Frozen endpoints

All routes are authenticated, private, `Cache-Control: private, no-store`, Creator-workspace-scoped, and GET-only.

```text
GET /api/v1/creator/payouts
GET /api/v1/creator/payouts/obligations
GET /api/v1/creator/payouts/obligations/:obligationId
GET /api/v1/creator/payouts/history
GET /api/v1/creator/payouts/history/:historyId
GET /api/v1/creator/payouts/payout-method
```

The legacy root route may retain its URL, but its response contract is replaced atomically with the C06 contract alongside the frontend. No compatibility adapter may preserve obsolete financial meaning.

## Common response grammar

Every successful response carries:

```text
schema_version = C06_CREATOR_PAYOUTS_V1
as_of
viewer.actor_role
viewer.workspace_reference
section.coverage = COMPLETE | PARTIAL | UNAVAILABLE
section.freshness = CURRENT | STALE | UNKNOWN
source_coverage[]
available_actions[]
```

Money is `{ amount: decimal-string, currency: ISO-4217 }`. Dates are UTC instants emitted by the backend. Paginated responses carry a fixed-as-of signed cursor bound to endpoint, filters, Creator workspace, actor membership/authorization version, subject Creator, last timestamp, and stable ID. The cursor signature is transport integrity, not a financial hash.

## Components and ownership

| Component | Ownership |
| --- | --- |
| `CreatorPayoutsController` | C06 GET route composition and no-store headers |
| `CreatorPayoutsAuthorizationService` | Resolves `PAYOUT_WORKSPACE_READ`; Owner/Manager allowed, Assistant denied |
| `CreatorPayoutsQueryService` | Orchestrates fixed-as-of overview/sections without writes |
| Creator summary projector | Exact per-currency predicates with row/summary parity |
| Creator obligation projector | C04 lineage, funding, due, lifecycle/gate, amount, destination-currentness validation |
| Creator history projector | Safe merged projection of obligation/transfer/receipt/settlement/reversal evidence |
| Creator detail projector | Resource-safe, non-enumerating obligation/history detail |
| C05 `CreatorPayoutMethodSummaryPort` | Explicit-select masked/current destination data only |
| neutral financial read/cursor/money/date helpers | Bounded extraction/adaptation of accepted Brand Payout primitives |

Avoid an unnecessary generic framework. Extract a neutral primitive only when both Brand and Creator projections can use it without actor-specific policy leakage.

## Canonical reads

- `creator_payout_obligations`: primary item, lifecycle, gate, canonical due/amount state.
- C04 authority/agreement/reserve/trusted-confirmation relations: provenance/currentness.
- `creator_payout_funding_allocations`: protected-funding integrity only.
- `route_transfer_attempts`: processing/failure/settlement state.
- `payout_reconciled_receipts`: immutable observed execution evidence.
- `escrow_transaction_ledger`: only obligation-linked payout settlement/reversal evidence through a strict type/join allowlist.
- C05 payout destination: dedicated safe projection; no legal profile or secret retrieval.

Brand Return, Brand pooled vault activity, reserve approval identities, funding-source detail, and unrelated ledger rows are excluded.

## Canonical obligation validation

Before exposing canonical amount/due state, prove at minimum:

1. subject Creator, Collaboration, Brand, Campaign, vault currency, and obligation ownership cohere;
2. `provenanceMode = CANONICAL_C04`;
3. authority instruction kind/version/hash, commercial agreement ID/version/hash, reserve instruction, and funding confirmation match current unsuperseded C04 authority;
4. allocation lineage is exact, positive, currency-consistent, and sums to entitlement;
5. `settlementEligibleAt`, payment-term snapshot, due-rule version, due-evidence time, and stored `paymentDueAt` are present and mutually valid;
6. settled/reversed/outstanding values match coherent transfer, receipt, and ledger evidence;
7. destination snapshot/current version and C05 state are not stale where execution/readiness is represented.

Failure is safe omission or limited legacy projection, never inference.

## Effective provider-disabled gate

C06 reads combine stored canonical gate/due state with the frozen server capability `provider execution disabled`. They do not mutate the obligation. A stored/effective `READY` or due `NOT_YET_DUE` row that is now due and otherwise valid is displayed with effective gate `PROVIDER_UNAVAILABLE`. Setup, rail, funding, and resolution blockers retain their more specific truthful gates.

## Partial/unavailable behavior

- Core database/timezone failure: fail the request closed; do not synthesize sections.
- Optional C05 method projection failure: financial sections may remain available while payout-method coverage is `UNAVAILABLE`.
- One corrupt/foreign source row: omit or limit it, mark affected coverage, and never leak identifiers/counts across Creators.
- Empty authoritative result: count zero and empty buckets are allowed; unavailable truth never becomes numeric zero.

## Information boundary

DTOs, logs, errors, tests, DOM, and evidence must deny full account/routing, encrypted payload, legal address, provider mapping/secret/raw payload, Brand balances, other Creator data, and internal recovery/support diagnostics.

