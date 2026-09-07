# C04 — Brand Payouts Lineage Proposal V3 Final Approval Correction Runner V1

C04_BRAND_PAYOUTS_LINEAGE_PROPOSAL_V3_FINAL_APPROVAL_CORRECTION_RUNNER_V1

Status: AUTHORIZED — FINAL CONSOLIDATED PROPOSAL CORRECTION ONLY

## 1. Disposition

The V2 proposal at 95278dbbe33a925e5b852344aeb03d362d32a9e9 is NOT APPROVED.

V2 correctly established the main direction:

- confirmation identity is claimed before domain mutation;
- claim, securement mutation and final application occur in one transaction;
- full stored lineage replay is compared;
- exact decimal-string transport replaces JavaScript number;
- reserve publication, confirmation and entitlement share one advisory-lock key;
- cross-Collaboration reserve equality is explicit;
- Prisma relations were expanded;
- legacy/canonical modes remain separated.

Do not reopen those decisions and do not restart architecture.

Resolve the complete residual register below in one V3 proposal pass, then return once for human approval.

No backend source mutation, backend commit, migration creation/application, PostgreSQL DDL execution, P4A/P4B/P5A, provider, AWS, production or canonical merge is authorized.

## 2. Exact bindings

- C04 base/head: fc4d4b59e2a44d7ddced6bc5dde5119c501ec275
- C04 base tree: 083c52dc06c19a23f47491935b472ee5e62bd1c5
- Migration count: 84
- P4 Base: 5dc9eef4923ae383b94b36cbf9bbb632b1b84cf1
- V1 evidence: cdcab07a7e641aa88c38e4dfec113d26a1462f85
- V2 evidence: 95278dbbe33a925e5b852344aeb03d362d32a9e9
- V2 evidence tree: dac6b21ddb3dd9575fc4f15a75c68051011b5468
- V2 SQL SHA-256: e17dc0cb62e861225b23a9d1a45576d01792feb90b109d4064352cdc301e2627
- V2 runtime patch SHA-256: dc8be828b120792b172864a92e954115286a29716c62c380598f74c7e928ba82
- V2 disposition: NOT_APPROVED_BOUNDED_FINAL_CORRECTION_REQUIRED

Read and cross-review the complete V2 SQL, Prisma patch, runtime patch, matrices, proof plan, exact C04 source and all 84 migrations.

## 3. Frozen properties

Preserve:

- additive 84→85 correction;
- LEGACY_UNRECONCILED versus CANONICAL_PAYOUTS_V1;
- no historical inference/backfill/promotion;
- request-only canonical PLATFORM_ESCROW flow;
- exact reserve/agreement/approval/attempt/lock/ledger/subject/economics lineage;
- one authoritative sufficient confirmation per current reserve;
- full replay conflict behavior;
- one shared reserve-stream serialization key;
- exact Creator-entitlement confirmation/reserve linkage and hash;
- Payouts ownership of approval, attempt and financial execution;
- C04 ownership of reserve request, confirmation intake and entitlement authority;
- no provider or Product change.

## 4. Complete residual approval-blocker register

### V3-01 — Mutation-bearing fundingConfirmationRef is absent from durable identity

V2 passes fundingConfirmationRef into confirmEscrowFunding, where it changes C04 commercial-agreement projection and command fingerprint, but it is absent from:

- normalizedTuple;
- server-derived body digest;
- trusted-confirmation persistence;
- full replay comparison;
- SQL lineage validation.

A duplicate confirmation ID with the same stored tuple but a different fundingConfirmationRef can be returned as an idempotent replay without comparing a field that affected the original mutation.

Correct this by either:

A. persist a bounded immutable funding_confirmation_ref in the trusted-confirmation lineage, include it in canonical digest, replay tuple, SQL checks and projection validation; or

B. eliminate the independent input and deterministically derive the projection reference from an already persisted immutable identity.

Every mutation-bearing input must be included in replay identity or derived from it. Add changed-fundingConfirmationRef replay/conflict proof.

### V3-02 — No durable orphan CLAIMED authority

V2 allows CANONICAL_PAYOUTS_V1 + CLAIMED to satisfy the row CHECK and be committed through direct SQL. That row permanently consumes confirmation, reserve, approval, attempt and ledger uniqueness, but the runtime replay path rejects it and no durable recovery worker is defined.

The application transaction normally rolls it back, but the database contract still permits a canonical orphan claim.

Choose and prove one safe design:

- eliminate durable CLAIMED state and insert the invisible-in-transaction authority in its final APPLIED shape, relying on transaction atomicity; or
- retain CLAIMED only with a DEFERRABLE end-of-transaction invariant that prevents commit unless it reaches APPLIED with the exact C04 projection/event result; or
- define a real durable observation/inbox lifecycle with bounded recovery, without falsely claiming application.

Do not permit an indefinitely committed CLAIMED row without executable recovery semantics.

### V3-03 — Direct SQL must not manufacture APPLIED

V2 permits a direct CLAIMED→APPLIED update if immutable row fields remain unchanged. The trigger does not prove that the matching C04 securement projection/event mutation occurred.

At transaction commit, APPLIED must be coupled to the exact resulting C04 state, including as applicable:

- same Collaboration/agreement;
- exact persisted funding-confirmation reference;
- escrow lock;
- confirmed amount/currency;
- COMPLETED securement state and timestamp;
- exact confirmation command/event identity or other durable application evidence.

A direct row insert/update cannot manufacture APPLIED while leaving C04 domain projection untouched.

Use a deferred constraint trigger, controlled database seam or equivalent invariant. Include direct-SQL negative proof in the post-approval PostgreSQL plan.

### V3-04 — Migration atomicity

The V2 SQL has no explicit BEGIN/COMMIT transaction boundary.

The exact Prisma/PostgreSQL migration execution semantics must be proven. If the repository/Prisma runner does not automatically wrap PostgreSQL migration SQL atomically, add explicit transaction boundaries so enums, columns, FKs, indexes, functions and triggers cannot be left partially installed.

Document:

- failure at each object class;
- rollback result;
- retry behavior;
- lock/time implications;
- forward recovery.

A financial migration must not rely on an unproven implicit transaction.

### V3-05 — Runtime/DDL reference-format parity

The runtime reference validator allows period and slash:

[A-Za-z0-9:_./-]

The SQL checks for Payouts references allow only:

[A-Za-z0-9:_-]

Use one exact canonical format everywhere. Reconcile confirmationId, reserveRequestId, fundingConfirmationRef, payoutsApprovalRef and reserveExecutionAttemptRef separately if their accepted formats differ.

No value accepted by runtime may be rejected unexpectedly by SQL, and no SQL-valid canonical authority reference may bypass runtime constraints.

### V3-06 — Amount precision and scale parity

V2 runtime permits up to 12 integer digits and 4 decimal places, while proposed confirmed_amount DECIMAL(15,4) supports only 11 integer digits. The authoritative reserve is DECIMAL(14,2), while escrow-lock/ledger storage uses its own precision.

Choose an exact non-narrowing representation based on the immutable reserve authority. Prove:

- every valid canonical reserve amount can be represented;
- confirmation cannot introduce more precision than source authority;
- runtime regex, Prisma @db.Decimal, SQL column, CHECK and digest normalization agree;
- numeric replay equality is canonical and lossless.

Do not silently round or truncate. Prefer matching the exact reserve-authority scale unless a wider representation is proven necessary.

### V3-07 — Full immutability of canonical reserve and entitlement authority

The V2 reserve trigger governs INSERT serialization but does not itself prevent later updates/deletes of the immutable reserve identity/economics/currentness tuple.

The V2 entitlement trigger rejects deletion and lineage-field rewrites, but other authority fields could still be updated unless an existing accepted guard conclusively prevents it.

Reconcile all existing triggers and add only the missing guards. For new canonical rows:

- reserve request/instruction identity, version/hash, agreement, Brand/Campaign/Creator, economics, requester and supersession link are immutable;
- entitlement instruction identity/version/hash, agreement/resolution/economics, effective time and funding lineage are append-only;
- legal status changes, if any, must follow an exact transition under the same reserve-stream lock;
- supersession occurs by appending the next instruction, never rewriting history.

Do not break legacy rows or duplicate an existing accepted invariant.

### V3-08 — Entitlement exact-row selection and immutable hash reconstruction

Preserve V2’s shared lock and agreement-specific selection, but prove that:

- the selected confirmation is APPLIED and coupled to the exact C04 projection;
- the reserve is the sole current instruction under the accepted stream rule;
- the entitlement row’s stored fields reproduce the instruction hash byte-for-byte;
- no non-Creator authority definition hashes fields it does not persist;
- sourceFinancialRef/resolution authority remains immutable and unchanged in meaning.

Add a deterministic hash reconstruction test from the persisted canonical Creator-entitlement row.

### V3-09 — P2002 conflict classification

V2 catches every P2002 and looks up the requested confirmation identity. Preserve fail-closed behavior but distinguish:

- exact confirmation-identity replay;
- approval-reference conflict;
- execution-attempt-reference conflict;
- reserve/ledger/completed-confirmation uniqueness conflict;
- unrelated repository uniqueness failure.

Only the exact confirmation identity with APPLIED full-tuple equality may return replay. All other uniqueness conflicts must remain conflicts and must never be mislabeled as replay.

Where Prisma metadata is stable enough, inspect the conflict target; otherwise prove the identity reread rule cannot misclassify another unique violation.

### V3-10 — Post-commit realtime behavior

V2 suppresses Collaboration realtime broadcasting when confirmEscrowFunding receives an existing transaction client, and consumeEscrow does not issue the broadcast after its outer transaction commits.

Restore exactly one post-commit broadcast for a newly applied confirmation, and no duplicate broadcast for a rejected/conflicting loser. Do not broadcast before commit.

This is an ordinary bounded integration correction, included now to avoid a later defect loop.

### V3-11 — Approval-grade behavioral coverage

The V3 proposal must include behavioral tests for:

- same confirmation ID/full tuple concurrent replay;
- changed fundingConfirmationRef;
- every stored lineage field family;
- unique conflicts outside confirmation identity;
- zero securement mutation for every losing claim;
- no committed orphan CLAIMED;
- no false direct-SQL APPLIED state;
- exact decimal maximum and over-precision/overflow rejection;
- runtime/SQL reference-format parity;
- reserve update/delete and illegal supersession;
- entitlement update/delete and exact hash reconstruction;
- cross-Collaboration substitution;
- confirmation versus supersession;
- entitlement versus supersession;
- exactly one post-commit realtime broadcast.

Real two-connection PostgreSQL evidence remains post-approval, but the plan must name exact SQL setup, interleavings and state assertions.

## 5. Required V3 artifacts

Create a new evidence directory without overwriting V1/V2:

docs/ai-collaboration/evidence/c04-brand-payouts-reserve-entitlement-lineage-v3/

Produce:

1. NOT_APPROVED_NOT_APPLIED-c04-lineage-v3-prisma.patch
2. NOT_APPROVED_NOT_APPLIED-c04-lineage-v3-migration.sql
3. NOT_APPLIED-c04-lineage-v3-runtime.patch
4. v2-to-v3-correction-crosswalk.json
5. exhaustive-object-and-parity-crosswalk.json
6. identity-replay-concurrency-matrix.json
7. claim-apply-projection-coupling-matrix.json
8. reserve-entitlement-immutability-matrix.json
9. populated-upgrade-and-rollback-truth-table.json
10. runtime-test-and-postgresql-proof-plan.md
11. manifest.sha256

Also produce:

docs/ai-collaboration/c04-brand-payouts-reserve-entitlement-lineage-correction-proposal-v3.md

## 6. Static validation

Use clean isolated worktrees and prove:

- exact C04 base/tree and unchanged 84 migrations;
- both patches apply cleanly;
- assembled Prisma format/validate/generate;
- exact Prisma↔DDL parity with all SQL-only objects inventoried;
- migration transaction/rollback analysis;
- isolated TypeScript build;
- targeted behavioral tests covering V3-11;
- full tuple/digest/decimal/reference parity;
- constraint/trigger TRUE/FALSE/UNKNOWN review;
- secret scan;
- SHA-256 manifest and remote fetch-back;
- cleanup.

Do not execute the proposed DDL before human approval.

## 7. Required return

Return once:

C04_BRAND_PAYOUTS_LINEAGE_MIGRATION_APPROVAL_REQUEST_V3

V2_PROPOSAL_EVIDENCE_COMMIT =
95278dbbe33a925e5b852344aeb03d362d32a9e9

V3_PROPOSAL_EVIDENCE_COMMIT =
V3_PROPOSAL_EVIDENCE_TREE =

C04_BASE_SHA =
fc4d4b59e2a44d7ddced6bc5dde5119c501ec275

C04_BASE_TREE =
083c52dc06c19a23f47491935b472ee5e62bd1c5

MIGRATION_COUNT_BEFORE =
84

SQL_PERMALINK =
SQL_SHA256 =
PRISMA_PATCH_PERMALINK =
RUNTIME_PATCH_PERMALINK =
RUNTIME_PATCH_SHA256 =

FUNDING_CONFIRMATION_REFERENCE_BINDING =
FULL_MUTATION_REPLAY_IDENTITY =
CLAIM_PERSISTENCE_MODEL =
ORPHAN_CLAIM_AT_COMMIT =
FALSE_APPLIED_DIRECT_SQL =
MIGRATION_TRANSACTION_MODEL =
MIGRATION_PARTIAL_INSTALL_RISK =
REFERENCE_FORMAT_PARITY =
AMOUNT_PRECISION_SCALE_PARITY =
RESERVE_AUTHORITY_IMMUTABILITY =
ENTITLEMENT_AUTHORITY_IMMUTABILITY =
ENTITLEMENT_HASH_RECONSTRUCTION =
P2002_CONFLICT_CLASSIFICATION =
POST_COMMIT_REALTIME =
PRISMA_DDL_PARITY =
NEW_PRISMA_DDL_DRIFT =

EXACT_SCHEMA_DELTA =
EXACT_RUNTIME_DELTA =
BEHAVIORAL_TARGETED_TESTS =
LEGACY_POLICY =
PRODUCT_CHANGE =
OWNERSHIP_CHANGE =
POPULATED_UPGRADE_STATIC_PROOF =
POST_APPROVAL_POSTGRESQL_PROOF_PLAN =
STATIC_CROSS_REVIEW =
COMPLETE_BLOCKER_SET =

BACKEND_SOURCE_CHANGED = NO
MIGRATION_CREATED_IN_BACKEND = NO
MIGRATION_APPLIED = NO
POSTGRESQL_DDL_APPLICATION = NO
PROVIDER_ACTIONS = NONE

RESULT =
C04_LINEAGE_MIGRATION_HUMAN_APPROVAL_REQUIRED
| CLASS_C_BLOCKED

Stop after the single consolidated V3 return.