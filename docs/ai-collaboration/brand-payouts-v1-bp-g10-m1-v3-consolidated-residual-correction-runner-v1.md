# Brand Payouts — BP-G10 M1 V3 Consolidated Residual Correction Runner V1

`BRAND_PAYOUTS_BP_G10_M1_V3_CONSOLIDATED_RESIDUAL_CORRECTION_RUNNER_V1`

## Authority and stop boundary

```text
P4_BASE = ACCEPTED_UNCHANGED
P4_BASE_SHA = 5dc9eef4923ae383b94b36cbf9bbb632b1b84cf1
P4_BASE_TREE = 6c01d65e5a32eecfcd7e42715923ea8478d071fb
MIGRATION_COUNT_BEFORE_M1 = 84
M1_V3_EVIDENCE = e14657b250cb4324bd2e1785ac67f6c8aecdf098
M1_V3_SQL_SHA256 = 352a866d9bb094b4a256ab3bc5612c51bbf6efd6f1ce8b6e218ffdfe94b861d7
M1_V3_DISPOSITION = NOT_APPROVED_RESIDUAL_DIRECT_SQL_AND_UPGRADE_SAFETY_GAPS
CORRECTION_CLASS = CLASS_B_WITHIN_FROZEN_ARCHITECTURE
BACKEND_BRANCH_MUTATION = PROHIBITED
M1_EXECUTION = PROHIBITED
P4A_START = PROHIBITED
```

This is one consolidated correction pass. Do not reopen P3A, readiness, P4 Base,
or planning. Use the frozen P0 executable contract, the accepted C04/C05
contracts at the P4 Base tree, the V1/V2/V3 review trail, and the exact findings
below. Do not modify `brand-payouts/v1-backend-convergence`.

## V3 blockers to resolve together

### 1. Existing-row upgrade is not legacy-safe

`bp_m1_transfer_time_check` unconditionally requires
`queued_at IS NOT NULL` and `readiness_checked_at IS NOT NULL`.
Every pre-M1 `route_transfer_attempts` row receives
`snapshot_mode='LEGACY_UNRECONCILED'` and null new milestone fields, so an
84→85 migration with any existing transfer row fails while V3 claims legacy
rows remain retained and fail closed.

Make every ALTER-table CHECK explicitly mode-aware and prove both:

- pre-M1 legacy rows survive unchanged with null M1 evidence;
- every post-M1 INSERT is forced through complete canonical/current evidence.

Run an adversarial scan across all new CHECKs for SQL UNKNOWN and legacy-row
validation behavior.

### 2. Initial-state and reserve-attempt transitions are bypassable

Direct INSERT can create a reserve approval already EXECUTING, failed,
COMPLETED, or SUPERSEDED because the insert trigger does not require the
initial approval state. Direct INSERT can also create an execution attempt
already terminal; the attempt trigger covers UPDATE/DELETE only. A completed
approval is not proven to have exactly one successful claimed attempt.

Enforce:

- approval INSERT starts only in the exact initial state/evidence tuple;
- attempt INSERT starts only CLAIMED with its initial evidence;
- CLAIMED changes exactly once to one allowed terminal outcome;
- approval completion is tied to the required successful attempt;
- attempt/approval sequencing and parent-state compatibility are enforced
  under concurrent direct SQL, not merely by application convention;
- the one-success rule and exactly-one financial effect remain database-safe.

### 3. Declared supersession/retry graph contradicts its trigger

V3 declares `AWAITING_FUNDS → SUPERSEDED`, but SUPERSEDED requires all
execution/failure evidence null while the immutability guard forbids clearing
the prior episode's `execution_started_at`; that edge cannot execute.
Reconcile the frozen retry/supersession semantics exactly. Do not claim an
unreachable edge. Preserve prior-attempt audit evidence and ensure a retry
episode can reset only the fields explicitly authorized, atomically, without
rewriting historical evidence.

### 4. Completed reserve evidence is only FK-shaped, not economically bound

A COMPLETED approval merely requires any unique escrow-lock and ledger IDs.
V3 does not prove that those rows belong to the same Brand/Collaboration,
represent the approved reserve, use INR, have the exact lock/ledger transaction
kind and success state, or carry caller-independent amounts matching the C04
instruction. Bind the exact C04/P4A lock and ledger tuple, including identity,
tenant, collaboration, amount components/total, currency, transaction type,
success state, and idempotency relationship required by the frozen normal
path. Reject unrelated-but-valid FK rows.

Also reject stale/superseded/ineligible C04 reserve instructions; bind the
instruction's exact allowed status and prove no authoritative superseder exists.

### 5. Obligation authority is incomplete and can use stale authority

`instruction_issued_at` remains caller-authored and is not bound to the C04
instruction's authoritative timestamp. The trigger does not reject an
instruction superseded by another C04 authority row. Bind all identity/time
fields to their canonical source and reject stale/superseded authority.

At intake, enforce the precise frozen normal-path lifecycle/gate/status tuple
so a caller cannot queue an obligation before its exact due/eligibility
conditions. Preserve the already-correct Brand/Creator/Collaboration/vault/
profile/agreement/economics/five-NET-term binding and legacy no-backfill rule.

### 6. Mutable C05 revalidation can strand an accepted attempt

The transfer trigger re-reads and demands equality with the current mutable
profile/destination/mapping on every UPDATE. If readiness changes after queue,
the row cannot record a truthful fail-closed failure or reconciliation result
because the trigger rejects the update before terminal evidence is stored.

Define the exact frozen division between:

- immutable readiness snapshot captured/validated at INSERT or claim;
- current mutable readiness recheck before execution;
- permitted fail-closed terminal recording after drift.

A snapshot must never fabricate current readiness, but later drift must not
make failure/audit recording impossible. Preserve creator ownership,
profile-state version, destination version, provider mapping, non-secret
evidence, geography/rail/currency, and amount/currency binding.

### 7. Transfer chronology and exactly-once outcome remain incomplete

V3 requires final disposition to be after execution start, but not after the
required provider-completion/failure milestone. Thus a terminal record can
predate the evidence that justifies it. Enforce null-safe chronological order
through the applicable branch:

```text
queued/readiness
→ execution started
→ provider request completed and/or failure recorded
→ final disposition recorded
```

Bind the precise allowed normal-path obligation lifecycle/gate/status at claim.
Prove concurrent attempts/retries cannot create duplicate successful transfer
effects for one full-outstanding obligation; add the exact partial uniqueness,
locking, or trigger invariant required by the frozen model. Do not introduce
partial-payout/general recovery semantics.

### 8. Receipt event labels are not fully evidence-bound

The receipt trigger maps broad final dispositions but does not require the
specific source milestones represented by `TRANSFER_ACCEPTED` and
`TRANSFER_PROCESSED`; it can accept those labels with the corresponding
legacy source timestamp absent. `TRANSFER_HELD` is not bound to hold state.
`SETTLEMENT_RECORDED` checks only a successful transfer plus
`transfer.settled_at`, not the linked obligation's compatible
status/lifecycle/settled amount/timestamp.

Bind each event class to the exact transfer milestone/state and, for
obligation events, to the exact obligation settlement evidence. Preserve
linkage, dedupe, provider-neutral scope, insert-only immutability, and do not
expand this into a generalized event platform.

### 9. Observation timestamps must be truthful

V3 correctly stops requiring the requester to remain active, but
`requester_observed_at` and `approved_at` remain caller-overridable historical
claims. Make the database semantics truthful to the actual approval-time
observation (for example database-assigned timestamps or an exact bounded rule
supported by the repository). Preserve the immutable C04 requester user/time,
current active Owner/Finance approver requirement, and do not pretend the
current membership row proves request-time role.

## Required V4 review

Before returning:

1. prove fresh 0→85, populated 84→85, and legacy-shaped 84→85 statically in
   the proposal without applying an unapproved migration;
2. enumerate every added CHECK and show TRUE/FALSE/UNKNOWN behavior for legacy,
   canonical-valid, partial, and contradictory tuples;
3. enumerate every INSERT/UPDATE/DELETE path and its trigger;
4. provide approval and attempt transition matrices with reachable edges only;
5. trace C04 instruction → approval → claimed attempt → lock → ledger;
6. trace C04 authority → obligation → exact Kolkata due → eligible queue;
7. trace C05 snapshot/current recheck → transfer → terminal disposition;
8. trace every receipt class to its exact source evidence;
9. prove concurrency/idempotency/exactly-one effects at the constraint/trigger
   level and update the post-approval PostgreSQL proof plan;
10. run literal Prisma patch apply-check, Prisma validation, SQL/static parity,
    secret scan, fetched-back hash verification, and cleanup.

Publish one V4 evidence package on
`dummy_tcs:brand-payouts/v1-execution-ledger`. Retain V1–V3 unchanged.
Return one consolidated `BRAND_PAYOUTS_BP_G10_M1_APPROVAL_REQUEST_V4`.
Do not commit/apply M1, mutate backend source, start P4A, or perform provider
actions.