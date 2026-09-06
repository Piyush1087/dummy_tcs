# Brand Payouts — BP-G10 M1 Proposal Consolidated Correction Runner V1

`BRAND_PAYOUTS_BP_G10_M1_PROPOSAL_CONSOLIDATED_CORRECTION_RUNNER_V1`

## Status

```text
P4_BASE = ACCEPTED_UNCHANGED
P4_BASE_SHA = 5dc9eef4923ae383b94b36cbf9bbb632b1b84cf1
P4_BASE_TREE = 6c01d65e5a32eecfcd7e42715923ea8478d071fb
M1_V1_SHA256 = 683e5266c3e1913e39f151f70d8bd449f0816b5926913220156f97ddda6ec805
M1_V1_DISPOSITION = NOT_APPROVABLE_REQUIRES_BOUNDED_CONTRACT_CORRECTION
CORRECTION_CLASS = CLASS_B_WITHIN_FROZEN_ARCHITECTURE
BACKEND_SOURCE_MUTATION = PROHIBITED
M1_DATABASE_EXECUTION = PROHIBITED
P4A_START = PROHIBITED
```

This is one consolidated correction of the complete M1 V1 review gap set. It is
not a new planning phase and must not reopen P3A, preflight, or P4 Base.

Use the same external Local Codex environment and exact authorities from:

- runner assignment `fc0a40d834cc9a627b5ed1952a2524d7853259af`;
- P4 Base/evidence ledger `1cc20581ee862f3fe47df53db8811da0ecbc1187`;
- frozen P0 executable contract register;
- accepted Wave B deep plan.

## 1. Preserve accepted work

Revalidate, but do not change:

```text
backend branch = brand-payouts/v1-backend-convergence
backend head = 5dc9eef4923ae383b94b36cbf9bbb632b1b84cf1
backend tree = 6c01d65e5a32eecfcd7e42715923ea8478d071fb
migration count = 84
```

The branch must remain byte-identical. Do not add a Prisma migration directory,
modify `prisma/schema.prisma`, apply DDL, run M1 against PostgreSQL, or begin
P4A/P4B/P5A.

## 2. Why M1 V1 is not approvable

Correct all of these together, then perform another complete internal review
before returning.

### A. The Prisma delta is not exact

The V1 artifact called an exact Prisma delta is prose referring back to the
SQL. BP-G10 requires the literal, complete unified
`prisma/schema.prisma` patch that would be committed after approval,
including every model field, mapping, relation, reverse relation, enum/string
choice, index and constraint Prisma can express.

Produce exact bytes, while keeping them evidence-only and uncommitted to the
backend.

### B. Reserve execution attempt cannot complete

V1 inserts attempts as `CLAIMED` but its append-only trigger rejects every
UPDATE. That makes `SUCCEEDED`, `SHORTFALL`, retryable/terminal failure and
completion timestamps unreachable after a durable claim.

Preserve append-only audit meaning as:

- insert the durable claim/lease first;
- never delete an attempt;
- never alter approval linkage, sequence, claim identity, lease identity or
  created/started evidence;
- allow at most one legal, atomic, set-once transition from `CLAIMED` to one
  terminal normalized outcome with the required completion/failure evidence;
- reject repeat completion, terminal-to-terminal mutation, clearing evidence,
  or any economic fields;
- retain the partial unique at-most-one-success invariant.

Make the SQL, Prisma delta, state checks and PostgreSQL proof plan agree.

### C. Reserve approval audit identity is incomplete

The frozen register requires requester and approver
user/membership/role/time snapshots. V1 lacks requester membership and role.

Add the complete requester tuple and bind audit identities safely:

- requester user, membership, role, requested time;
- approver user, membership, role, approved time;
- Owner/Finance approval only;
- exact Brand membership ownership and user↔membership consistency;
- restrictive FKs where durable identity permits;
- no cross-Brand membership substitution.

Do not infer missing history; these tables have no backfill.

### D. C04 authority is not relationally bound

V1 has independent FKs and unique fields, allowing a row to combine:

- reserve instruction A;
- request ID B;
- Collaboration/agreement/Brand C;
- version/hash/economics D.

That violates caller-independent economics and cross-Brand isolation even if
application code normally validates it.

Add an exact database-enforced insert/update boundary—using safe composite
keys or a deterministic validation trigger—that binds the approval to the
referenced immutable `collaboration_reserve_instructions` row across:

- instruction and request identity;
- Collaboration, agreement and Brand;
- instruction/agreement version and hash;
- creator fee, commission, GST, total reserve and currency;
- requester identity/time where that upstream row is authoritative.

Protect the approval from DELETE. Preserve immutable authority columns.
Execution status fields, lock and ledger links require legal transition and
set-once rules; a non-null lock or ledger identity must never be changed or
cleared. Add timestamp consistency and monotonic state-version checks.

### E. Obligation provenance is incomplete and mutable

The frozen register requires immutable canonical intake provenance, not merely
nullable independent fields.

Correct the proposal so a new canonical obligation has one database-enforced
complete tuple covering:

- exact C04 authority instruction identity, kind/version/hash;
- Collaboration and commercial agreement identity/version/hash;
- authoritative entitlement amount and currency;
- intake `recordedAt`;
- `settlementEligibleAt`;
- exact NET-term snapshot;
- due-rule version and evidence-recorded time;
- retained backend-authored `paymentDueAt`.

Bind the tuple to the referenced immutable
`collaboration_financial_authority_instructions` row so a caller cannot mix
instructions, Collaborations, agreements, amount or currency. Preserve legacy
rows as explicitly nullable/fail-closed with no inferred backfill. New
canonical rows must not masquerade as legacy by omitting the tuple.

Add set-once/immutability protection for provenance and due evidence, plus
coherent lifecycle/gate vocabulary, timestamp ordering and non-negative amount
constraints. State how settled/reversed/outstanding arithmetic will be
protected without creating another ledger.

### F. C05 destination/provider-mapping snapshot is missing

V1 adds only destination version/fingerprint. It does not persist the exact C05
destination identity or provider-mapping identity required by the frozen M1
register and P5A readiness fence.

Use the accepted C05 models at the P4 Base tree:

- `creator_payout_destinations`;
- `creator_payout_destination_provider_mappings`;
- existing payout profile state/version where separately relevant.

Add the exact destination ID, destination version and provider-mapping snapshot
identity required to prove currentness at execution. Do not conflate
`profile_state_version` with destination version. Enforce internally
consistent destination/mapping/provider tuples with FKs or deterministic
validation triggers, while legacy attempts remain nullable and fail closed.

No secret bank/KYC payload may be copied into Brand Payouts.

### G. Transfer milestones and final disposition are incomplete

The frozen register requires set-once:

- queued time;
- execution-started time;
- provider-request-completed time;
- failure-recorded time;
- immutable final disposition;
- ordering/check constraints and lookup indexes.

V1 does not add those milestones and leaves normalized outcome/receipt time
mutable. Add the complete provider-neutral milestone state required by the
normal path. Enforce mutually coherent success/failure evidence, chronological
ordering, set-once semantics and immutable terminal disposition.

Production remains fail-closed and provider-disabled.

### H. Reconciled receipt evidence is incomplete

A receipt identity plus one observed timestamp does not satisfy the frozen
receipt contract. Add a narrow additive representation—separate evidence table
or rigorously isolated fields—that provides:

- stable dedupe identity;
- normalized entity and event classification;
- received time;
- provider-occurred time when supplied;
- reconciled time;
- linkage to the exact transfer attempt/obligation;
- set-once immutable evidence and lookup indexes.

Do not infer or backfill receipts from mutable legacy provider status/reference
fields.

## 3. Full corrected-proposal review

Before returning:

1. compare the corrected SQL and literal Prisma patch field-by-field;
2. verify every SQL-only partial index, check and trigger is explicitly
   documented as SQL-only;
3. review insert/update/delete behavior for direct-SQL bypass;
4. review all FK delete/update actions;
5. review null/legacy versus complete-new-row rules;
6. review unique and lookup indexes for reserve claiming, due work selection,
   transfer work selection and receipt dedupe;
7. review timestamp and terminal-state ordering;
8. confirm no second vault, ledger, commercial truth or provider abstraction;
9. confirm no P4R/P5R generalized recovery implementation;
10. update the future PostgreSQL proof plan to cover every corrected invariant.

This is static/proposal review only. Do not execute the corrected DDL before
human approval.

## 4. Evidence output

Replace/supersede the V1 proposal with V2 evidence on
`dummy_tcs:brand-payouts/v1-execution-ledger`. Do not delete V1.

Required files:

- exact literal unified Prisma patch;
- exact proposed M1 SQL;
- machine-readable field/constraint/trigger crosswalk;
- concise V2 review report;
- SHA-256 manifest.

Every file must say `NOT_APPROVED_NOT_APPLIED`. Fetch back the evidence commit
and verify the SQL SHA-256 from remote bytes.

Update the existing execution ledger to record:

- P4 Base accepted and unchanged;
- M1 V1 not approved/superseded;
- M1 V2 pending human approval;
- no backend M1 commit/application;
- no provider action.

## 5. Required terminal report

Return exactly:

```text
BRAND_PAYOUTS_BP_G10_M1_APPROVAL_REQUEST_V2

P4_BASE_STATUS = ACCEPTED_UNCHANGED
P4_BASE_BACKEND_SHA =
P4_BASE_TREE =
MIGRATION_COUNT_BEFORE_M1 =

M1_V1_DISPOSITION = NOT_APPROVED_SUPERSEDED
M1_V1_SQL_SHA256 =

M1_V2_REVIEW_STATUS =
M1_V2_PRISMA_PATCH_PERMALINK =
M1_V2_SQL_PERMALINK =
M1_V2_SQL_PATH =
M1_V2_SQL_SHA256 =
M1_V2_CROSSWALK_PERMALINK =

REQUESTER_APPROVER_AUDIT_TUPLES =
C04_EXACT_AUTHORITY_BINDING =
RESERVE_ATTEMPT_TRANSITION_PROOF_PLAN =
OBLIGATION_PROVENANCE_BINDING =
C05_DESTINATION_MAPPING_BINDING =
TRANSFER_MILESTONE_ORDERING =
RECEIPT_EVIDENCE_BINDING =
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
