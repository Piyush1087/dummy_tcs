# Brand Payouts — BP-G10 M1 V3 Residual Safety Review

`NOT_APPROVED_NOT_APPLIED`

## Disposition

V2 is not approved and is superseded by this V3 proposal. P4 Base remains
accepted unchanged at `5dc9eef4923ae383b94b36cbf9bbb632b1b84cf1`, tree
`6c01d65e5a32eecfcd7e42715923ea8478d071fb`, with 84 migrations. M1 V3 is
pending human BP-G10 approval. It was not placed on the backend branch and was
not applied to PostgreSQL. No provider action occurred.

## Residual closure

The reserve approval CHECK is an exhaustive six-state disjunction. Each branch
uses explicit `IS NULL` / `IS NOT NULL` predicates; completion and failure both
require start, completion excludes failure, and completion requires both the
durable escrow-lock and ledger identities. `COMPLETED` and `SUPERSEDED` are
immutable. Evidence is set once within an execution episode; failure evidence
may only be cleared atomically by the explicit `AWAITING_FUNDS`/`ACTION_REQUIRED`
to `EXECUTING` retry transition, which also advances the start time. `updated_at`
must increase and every legal update increments `state_version` by exactly one.

The C04 requester user and request time are copied exactly. Requester
membership and role are explicitly described by `requester_observed_at`: this
is an approval-time observation, not inferred request-time history. Current
requester activity is deliberately not required. The approving membership is
still required to be current, active, Brand-consistent, and Owner/Finance.

Every new obligation must be `CANONICAL_C04`. Its authority must be the normal
`CREATOR_ENTITLEMENT` instruction with `NORMAL_SUCCESS`, `FULL` effect,
positive creator effect, zero Brand-refund effect, INR, and exact economics.
Collaboration Brand/Creator, Brand vault, Creator payout profile, and the same
commercial agreement/version/hash/currency are joined and checked. Only the
five NET terms are accepted. The due instant is computed by adding the exact
calendar-day count in `Asia/Kolkata`; missing, unknown, and `IMMEDIATE` fail
closed. The settlement instruction identity equals the immutable C04 authority
identity and cannot be independently caller-authored.

Every new transfer must be `CURRENT_C05`. It binds the canonical obligation's
outstanding amount and currency, payout-profile identity/state version/provider
and `ELIGIBLE_FOR_TRANSFER`, then binds destination Creator/version/state/type/
country/currency and mapping/provider. Only non-secret readiness facts are
persisted. Disabled, non-primary, non-bank, non-IN/INR, incomplete, mismatched,
or ineligible rows fail closed.

Transfer milestones are an explicit disjunction: queued; optionally started;
provider completion or failure; then final evidence. Success requires provider
request completion and forbids failure/reason. Failure requires failure and a
reason. Ambiguity requires both request completion and reconciliation/failure
evidence. Milestones and reasons are set once and final rows are immutable.
Receipts are insert-only and deduped; their entity/event class is checked
against the linked attempt disposition, so settlement cannot attach to failure
and failure cannot masquerade as success.

## Adversarial NULL and bypass review

All new CHECK expressions were reviewed for PostgreSQL's `UNKNOWN` behavior.
Nullable comparisons occur only behind an explicit null branch or inside a
branch that first requires every operand non-null. Reserve-attempt outcome
branches explicitly require or forbid completion/failure. Obligation amount and
time expressions explicitly guard nullable canonical fields in the trigger;
legacy rows retain their prior shape. Transfer time and terminal branches first
establish prerequisite non-null fields. Receipt time comparisons guard the sole
optional provider timestamp.

Both default legacy modes are closed at the INSERT triggers. Existing legacy
rows are retained without backfill, while updates cannot convert partial data
into canonical provenance. End-to-end linkage is:
`C04 instruction → Collaboration (Brand, Creator) → agreement/vault/payout
profile → obligation economics → C05 profile state + destination version +
provider mapping → transfer → reconciled receipt`.

The status/disposition matrix and field/trigger crosswalk are machine-readable
in the accompanying evidence directory. Prisma represents every additive
column, enum, relation, and index; CHECKs and triggers are intentionally
SQL-only invariants.

## Static validation and post-approval proof plan

The literal patch applies cleanly to the exact backend source and the resulting
Prisma schema passes Prisma 6.19.3 structural validation. Source SHA/tree and
the 84 migration count were rechecked with a clean worktree. SQL was reviewed
statically only, as mandated.

After BP-G10 approval, use a fresh owned PostgreSQL instance to prove 0→85,
84→85, and accepted legacy-shaped 84→85 upgrades; assert every invalid reserve
tuple and transition, stale/current requester and approver cases, all cross-
tenant/subject swaps, all five NET due instants plus IMMEDIATE/missing/unknown,
new legacy insert rejection, obligation economics mismatch, stale profile and
destination versions, disabled/unsupported/incomplete C05 readiness, every
invalid milestone/disposition tuple, contradictory receipt events, deletes,
set-once clearing/rewrites, terminal mutation, uniqueness/idempotency, worker
claim concurrency, transaction rollback, and forward-recovery rehearsal. No
provider SDK or endpoint is involved.

## Blockers and stop

There are no known Class C blockers. Human BP-G10 approval is the sole next
gate. M1 remains uncommitted/unapplied to backend; P4A, P4B, and P5A remain
unstarted.
