# Brand Payouts — BP-G10 M1 V2 Residual Safety Correction Runner V1

`BRAND_PAYOUTS_BP_G10_M1_V2_RESIDUAL_SAFETY_CORRECTION_RUNNER_V1`

## Status

```text
P4_BASE = ACCEPTED_UNCHANGED
P4_BASE_SHA = 5dc9eef4923ae383b94b36cbf9bbb632b1b84cf1
P4_BASE_TREE = 6c01d65e5a32eecfcd7e42715923ea8478d071fb
M1_V2_SHA256 = a52c3c4eac416b4404196299f1790fe3c3215606789caf51da5744b30d32e8a4
M1_V2_DISPOSITION = NOT_APPROVED_RESIDUAL_DIRECT_SQL_SAFETY_GAPS
CORRECTION_CLASS = CLASS_B_WITHIN_FROZEN_ARCHITECTURE
BACKEND_BRANCH_MUTATION = PROHIBITED
M1_EXECUTION = PROHIBITED
P4A_START = PROHIBITED
```

This is a single consolidated residual review/correction. It is not a new
planning phase and must not reopen P3A, the accepted preflight, or P4 Base.

Use:

- prior correction authority `7a10da78565f7bed85abb348d33dc85220172a19`;
- M1 V2 evidence `d29cd83cbe2f449a9da7e549cc29d1e6651b459b`;
- frozen P0 executable contract register;
- accepted C04 and C05 source contracts at the P4 Base tree.

Do not modify `brand-payouts/v1-backend-convergence`. It must remain exactly
`5dc9eef…` / `6c01d65…` with 84 migrations.

## 1. Why V2 is not yet approvable

V2 materially improves V1, but the exact SQL still permits invalid
direct-SQL states and overstates several proofs. Correct the complete set below
together and conduct an adversarial row-state review before returning.

### A. Reserve approval state/evidence coherence

The current time CHECK uses nullable comparisons. PostgreSQL CHECK accepts
UNKNOWN, so completion/failure timestamps can exist without
`execution_started_at`. The status transition trigger also permits terminal
statuses without their required evidence.

Make all state tuples explicit and null-safe:

- `APPROVED_AWAITING_EXECUTION`;
- `EXECUTING`;
- `AWAITING_FUNDS`;
- `ACTION_REQUIRED`;
- `COMPLETED`;
- `SUPERSEDED`.

For each state define exactly which execution timestamps, failure code,
escrow-lock identity and ledger identity must be null/non-null. At minimum,
completion/failure implies execution started; completed cannot also be failed;
successful completion requires the exact durable lock/ledger evidence required
by P4A; terminal/superseded states cannot be mutated.

Make `failure_code` set-once/clear-resistant where present. Make
`updated_at` monotonic with the exact +1 state-version transition. Preserve
the already-correct immutable authority/economics tuple and legal retry path.

### B. Requester snapshot truth

V2 verifies both memberships against their current rows and requires both to
be currently active. That does not prove the requester's historical role at
the C04 `requested_at` instant and can make a still-authoritative instruction
unapprovable merely because its requester was later deactivated.

Do not fabricate historical membership state.

- Require the approving membership to be currently active and Owner/Finance.
- Preserve the C04 requester user/time exactly.
- Record requester membership/role only with an explicit observation timestamp
  and semantics truthful to when Payouts resolved it, unless immutable C04
  evidence proves request-time membership/role.
- Do not require current requester activity merely to approve an already
  authoritative immutable instruction.
- If the frozen repository cannot support a truthful non-inferred requester
  tuple, identify the exact upstream contradiction instead of disguising a
  current lookup as historical evidence.

This remains an audit correction; it must not weaken approval RBAC.

### C. Canonical obligation cross-tenant and term binding

The V2 trigger binds some C04 fields but still permits independent
`brand_id`, `creator_profile_id`, `vault_id`, `payout_profile_id`,
payment term and due date values.

For every new `CANONICAL_C04` obligation, database validation must prove:

- the Collaboration belongs to the same Brand and Creator;
- the vault belongs to the same Brand;
- the payout profile belongs to the same Creator;
- the C04 authority instruction is the allowed provider-disabled normal-path
  Creator-entitlement instruction, not Brand refund, abnormal resolution or
  generalized recovery;
- its resolution/effect semantics are compatible with normal P4B/P5A;
- the commercial agreement is the same Collaboration agreement and its
  version/hash and exact payment-term snapshot match;
- `IMMEDIATE`, missing and unknown terms fail closed;
- `payment_due_at` equals the backend-authoritative
  `settlement_eligible_at + NET_7/15/30/45/60` calendar-day rule under
  `Asia/Kolkata`, not merely any later timestamp;
- settlement instruction/idempotency identity cannot be caller-authored
  independently of the accepted authority contract;
- entitlement/currency and outstanding arithmetic are exact and positive where
  the normal path requires an obligation.

Retain legacy rows without backfill. Reject new legacy-mode inserts and partial
canonical masquerades. Preserve provenance/due immutability.

### D. Canonical transfer bypass and C05 binding

V2 validates `CURRENT_C05` rows but does not reject a new transfer inserted
with the default `LEGACY_UNRECONCILED` mode. New executions therefore can
bypass the destination/version/provider-mapping snapshot.

- Existing rows may retain legacy mode.
- Every post-M1 INSERT must require complete `CURRENT_C05` evidence.
- Bind transfer obligation, amount and currency to the canonical obligation;
  no caller-authored cross-obligation economics.
- Keep payout-profile state version distinct from destination version and bind
  it to the obligation's payout profile/currentness contract as required by
  C05.
- Bind destination creator ownership and destination/version/mapping/provider
  consistently.
- Record only non-secret readiness evidence; never copy bank/KYC payloads.
- Fail closed on disabled, unsupported geography/rail/currency or incomplete
  readiness according to the frozen C05/P5A contract. If mutable readiness is
  checked at execution rather than snapshotted, state that division exactly
  and ensure the persisted attempt cannot claim readiness that was not proven.

### E. Null-safe milestone and terminal-state ordering

The current transfer CHECK also accepts impossible tuples through NULL:

- provider-request-completed without execution-started;
- failure-recorded without execution-started;
- final disposition without execution-started;
- success without provider-request completion.

Define explicit prerequisite tuples and chronological ordering:

```text
queued
→ execution started
→ provider request completed or failure recorded
→ final disposition recorded
```

Allow only the frozen provider-neutral paths. A success must have complete
success evidence and no failure evidence. Each failure/ambiguous disposition
must have its required failure/reconciliation evidence. All milestones are
set once; final disposition is immutable. Add any missing work/terminal indexes
needed by the worker.

Apply the same NULL-safe reasoning to every reserve-attempt, obligation,
transfer and receipt CHECK—not only the examples above.

### F. Receipt semantic consistency

Receipt linkage is correct in V2, but direct SQL can still label contradictory
entity/event evidence. Bind normalized entity/event classes to compatible
attempt/obligation and transfer disposition/state evidence. A
`SETTLEMENT_RECORDED` receipt must not validate against a failed attempt; a
failure receipt must not masquerade as success. Preserve provider-neutral
classification and immutable insert-only/dedupe behavior.

Do not turn M1 into a generalized provider event platform.

## 2. Complete residual review

Before returning:

1. enumerate every nullable CHECK expression and prove it cannot pass through
   unintended SQL UNKNOWN;
2. enumerate every INSERT path with a legacy/default mode and prove new
   canonical work cannot bypass evidence;
3. build a table of each status/disposition and its required/forbidden fields;
4. trace Brand, Creator, Collaboration, vault, payout profile, destination,
   provider mapping, amounts and currency end-to-end;
5. trace the five exact NET terms into exact `payment_due_at`;
6. prove approval/reserve/transfer/receipt success and failure evidence cannot
   contradict;
7. verify literal Prisma patch ↔ SQL field parity and identify every SQL-only
   invariant;
8. run `git apply --check` and Prisma structural validation without changing
   the backend branch;
9. regenerate the exact SQL SHA-256 and verify it from fetched-back remote
   bytes;
10. update the post-approval PostgreSQL negative/concurrency proof plan for
    every corrected invariant.

Do not execute M1 against PostgreSQL before approval.

## 3. Evidence output

Publish V3 evidence on
`dummy_tcs:brand-payouts/v1-execution-ledger`; retain V1 and V2 unchanged.

Required:

- `NOT_APPROVED_NOT_APPLIED` literal Prisma patch;
- exact V3 SQL;
- machine-readable field/constraint/trigger/status crosswalk;
- concise residual-review report;
- SHA-256 manifest;
- updated existing ledger.

Record V2 as not approved/superseded, V3 as pending human approval, P4 Base
unchanged, M1 not committed/applied, and provider actions none.

## 4. Required terminal report

Return exactly:

```text
BRAND_PAYOUTS_BP_G10_M1_APPROVAL_REQUEST_V3

P4_BASE_STATUS = ACCEPTED_UNCHANGED
P4_BASE_BACKEND_SHA =
P4_BASE_TREE =
MIGRATION_COUNT_BEFORE_M1 =

M1_V2_DISPOSITION = NOT_APPROVED_SUPERSEDED
M1_V2_SQL_SHA256 =

M1_V3_REVIEW_STATUS =
M1_V3_PRISMA_PATCH_PERMALINK =
M1_V3_SQL_PERMALINK =
M1_V3_SQL_PATH =
M1_V3_SQL_SHA256 =
M1_V3_CROSSWALK_PERMALINK =
STATUS_DISPOSITION_MATRIX_PERMALINK =

RESERVE_STATUS_EVIDENCE_BINDING =
REQUESTER_SNAPSHOT_TRUTH =
APPROVER_CURRENT_RBAC =
OBLIGATION_TENANT_SUBJECT_BINDING =
C04_NORMAL_PATH_KIND_EFFECT_BINDING =
EXACT_NET_TERM_DUE_BINDING =
NEW_LEGACY_INSERT_BYPASS = CLOSED
C05_PROFILE_DESTINATION_MAPPING_BINDING =
TRANSFER_MILESTONE_NULL_SAFETY =
RECEIPT_EVENT_DISPOSITION_BINDING =
DELETE_IMMUTABILITY_AND_SET_ONCE =
LEGACY_FAIL_CLOSED_NO_BACKFILL =

M1_COMMITTED_TO_BACKEND = NO
M1_APPLIED = NO
BACKEND_BRANCH_UNCHANGED = YES

STATIC_CROSS_REVIEW =
POSTGRESQL_PROOF_PLAN =
COMPLETE_BLOCKER_SET =
CLASS_C_BLOCKERS =

EVIDENCE_COMMIT =
EVIDENCE_TREE =
LEDGER_SHA =
PROVIDER_ACTIONS = NONE
CLEANUP =
RESULT = M1_HUMAN_APPROVAL_REQUIRED
```
