# C04 — Brand Payouts Lineage Proposal V2 Bounded Correction Runner V1

C04_BRAND_PAYOUTS_LINEAGE_PROPOSAL_V2_BOUNDED_CORRECTION_RUNNER_V1

Status: AUTHORIZED — PROPOSAL/EVIDENCE CORRECTION ONLY

## 1. Disposition

The V1 proposal at cdcab07a7e641aa88c38e4dfec113d26a1462f85 is NOT APPROVED.

Its Product meaning, ownership split, additive 84→85 direction, request-only canonical flow, legacy policy and reserve→confirmation→entitlement topology remain accepted in principle.

Do not restart the reconciliation and do not generate another broad architecture document.

Perform one bounded, complete V2 correction:

V1 EXACT REVIEW
→ CORRECT COMPLETE BLOCKER REGISTER BELOW
→ REGENERATE SQL/PRISMA/RUNTIME PROPOSALS
→ STATIC CROSS-REVIEW
→ ONE CONSOLIDATED APPROVAL RETURN

No backend source mutation, backend commit, migration creation/application, PostgreSQL DDL application, P4A/P4B/P5A, provider, AWS, production or canonical merge is authorized.

## 2. Exact bindings

- C04 base/head: fc4d4b59e2a44d7ddced6bc5dde5119c501ec275
- C04 base tree: 083c52dc06c19a23f47491935b472ee5e62bd1c5
- C04 tested runtime parent: 373eaa382f555c376df78c0e95c72ff55cc43791
- Migration count: 84
- P4 Base: 5dc9eef4923ae383b94b36cbf9bbb632b1b84cf1
- V1 proposal evidence: cdcab07a7e641aa88c38e4dfec113d26a1462f85
- V1 evidence tree: 9fcb1042af8b03acc565705e1a04b0afd8ee544f
- V1 SQL SHA-256: 91d997ce8d618b165e7cbdd07ea08c103f8647931b6ffe29cc26c7380e81a7ba
- V1 runtime patch SHA-256: 86346e8b0e627d5ff1b00a3c52fc304555b432a27375c55e2a901a972c2e1723
- V1 disposition: NOT_APPROVED_BOUNDED_CORRECTION_REQUIRED

Read the complete V1 package, the prior runner, frozen Brand Payouts architecture/handoff and exact C04 source. Revalidate remote SHAs, trees, clean worktrees and unchanged 84 migrations.

## 3. Frozen V1 properties

Do not redesign:

- additive 84→85 migration;
- LEGACY_UNRECONCILED and CANONICAL_PAYOUTS_V1 separation;
- no inferred historical backfill or promotion;
- canonical PLATFORM_ESCROW request-only flow for every Brand role;
- Payouts-owned approval/shortfall/retry execution history;
- one authoritative COMPLETED_SUFFICIENT confirmation per exact current reserve;
- exact reserve/agreement/approval/attempt/lock/ledger subject/economics lineage;
- normal Creator entitlement directly bound to confirmation and reserve;
- lineage included in the Creator-entitlement hash;
- legacy rows remain null;
- new canonical writes fail closed;
- no provider or production action.

## 4. Complete bounded correction register

Resolve every item below in this single V2 proposal. Do not return after one correction.

### V2-01 — Identity claim before domain mutation

V1 retains this unsafe order:

read confirmation
→ execute confirmEscrowFunding domain mutation
→ insert trusted-confirmation row
→ swallow P2002

A global confirmation identity conflict can therefore mutate another Collaboration before uniqueness decides the owner.

Redesign the smallest safe transaction seam. The exact immutable confirmation identity must be exclusively and durably claimed before any C04 securement projection/event mutation, and the claim plus C04 mutation plus applied confirmation result must commit atomically.

Preferred properties:

- one Prisma/PostgreSQL transaction;
- deterministic acquisition of confirmationType + confirmationId before mutation;
- an INSERT ... ON CONFLICT/lock or equivalent that cannot allow the losing transaction to mutate;
- securement core capable of using the same transaction client, with no unsafe nested transaction;
- if the transaction fails, neither the claim nor the C04 domain mutation remains;
- if a staged observation model is selected, OBSERVED and APPLIED remain distinct and crash recovery is deterministic.

Do not mark an unapplied observation as applied.

### V2-02 — Full immutable replay tuple

For ESCROW_FUNDING + CANONICAL_PAYOUTS_V1, normalized replay equality must include:

- confirmation type and ID;
- lowercase canonical body digest;
- Collaboration;
- reserve instruction ID, request ID, version and hash;
- commercial agreement ID, version and hash;
- Payouts approval reference;
- reserve execution-attempt reference;
- escrow lock ID;
- reserve ledger transaction ID;
- Brand, Campaign and Creator;
- confirmed exact amount and currency;
- disposition.

Exact same tuple returns IDEMPOTENT_REPLAY. Any changed field fails closed with TRUSTED_CONFIRMATION_IDENTITY_REUSED.

Normalize the digest before both lookup comparison and insert. Do not permit hex case to change replay semantics.

After a P2002/unique race, re-read the winner and compare the complete tuple. The losing transaction must have produced zero C04 domain mutation.

### V2-03 — Digest and input authority

Do not merely store a caller-asserted digest.

Define one canonical normalized confirmation tuple and either compute its SHA-256 server-side or recompute and verify the supplied digest against it.

Add runtime schema validation for every new field. Do not rely on TypeScript typing or database failure as the first validation boundary.

Canonical direct-SQL rows must enforce a lowercase 64-hex digest and complete normalized tuple.

### V2-04 — Exact decimal transport

V1 retains confirmedAmount as a JavaScript number. Financial amounts must cross this internal boundary as an exact decimal string and be parsed with Prisma.Decimal only after strict canonical decimal validation.

No binary floating-point conversion is permitted for reserve, confirmation or replay comparison.

Define accepted scale consistently with the authoritative reserve schema and compare numerically without lossy formatting.

### V2-05 — Cross-Collaboration substitution

V1 SQL loads Collaboration by NEW.collaboration_id and compares only its Brand/Campaign/Creator tuple with the reserve. Two Collaborations can share that tuple.

The trigger must explicitly require:

NEW.collaboration_id = reserve.collaboration_id

and preserve exact agreement, reserve, lock, ledger, Brand, Campaign and Creator equality.

Add a negative proof for two same-Brand/same-Campaign/same-Creator Collaborations where a confirmation attempts to borrow the other Collaboration’s reserve/lock/ledger.

Expected result: fail closed and zero mutation.

### V2-06 — Reserve currentness and supersession serialization

The current reserve writer increments instructionVersion by count but must be revalidated for exact supersedesInstructionId/currentness behavior. Do not assume the supersession relation is populated.

The V2 proposal must establish:

- at most one current reserve instruction per Collaboration/agreement authority stream;
- a new instruction explicitly supersedes the exact prior unexecuted current instruction when supersession is legal;
- a completed authoritative confirmation cannot be superseded;
- confirmation acceptance and entitlement acceptance cannot race with supersession;
- request publication, confirmation claim/application and entitlement emission acquire the same deterministic serialization boundary;
- currentness is not based only on an unlocked EXISTS observation.

Use an actual row lock, advisory transaction lock, serializable invariant or equivalent shared mechanism across all writers. Specify exact lock order and deadlock avoidance.

Include runtime changes for the reserve publisher if its current writer does not populate or enforce supersession correctly.

### V2-07 — Entitlement selection and locking

V1 requireExactProtectedFundingLineage performs an unlocked Collaboration-wide findMany/take-two query.

The corrected normal-entitlement path must resolve the exact agreement/current reserve/completed confirmation deterministically and participate in the same currentness lock boundary. It must not select by latest timestamp or merely expect one row by convention.

The entitlement database trigger must lock or otherwise serialize the exact confirmation/reserve authority against concurrent supersession.

### V2-08 — Instruction-hash/persistence parity

V1 adds fundingConfirmationId and reserveInstructionId to the authority hash input for every generated definition, while persisting them only for Creator-entitlement rows.

Correct this so every hashed field is durably persisted with the same meaning, or include the lineage fields only in the canonical normal Creator-entitlement hash.

Prove the stored row can deterministically reproduce and validate its instruction hash.

Do not alter Brand-refund or abnormal/recovery semantics beyond this parity correction.

### V2-09 — Bounded external Payouts references

payoutsApprovalRef and reserveExecutionAttemptRef cannot be unbounded non-empty TEXT.

Reconcile their frozen Payouts identity type. Prefer UUID if the accepted Payouts schema fixes UUID identities; otherwise use an explicitly bounded canonical reference format with length and character checks.

Keep them immutable and globally replay-safe. Do not add a reverse FK to a table that does not yet exist.

### V2-10 — Prisma ↔ DDL parity

V1 SQL creates foreign keys from trusted confirmation to:

- brand_profiles;
- uce_campaigns;
- creator_profiles.

V1 Prisma exposes these only as scalar IDs.

Model the corresponding Prisma relations and required back-relations, or provide authoritative migration-diff evidence that the repository intentionally accepts those exact SQL-only FKs without future destructive drift.

Preferred result:

PRISMA_SCHEMA ↔ MIGRATION_DDL = NO NEW UNEXPLAINED DRIFT

Run an exact assembled-schema-to-database/migration diff appropriate to the repository. prisma validate alone is insufficient.

Inventory every V2 enum, column, FK, unique, partial unique, ordinary index, CHECK, function and trigger. Classify any intentionally SQL-only object and prove it does not create accidental future migration drift.

### V2-11 — Replay, crash and concurrency behavior

The later real-PostgreSQL proof plan must cover:

- same confirmation ID + same full lineage, concurrent → one authority and replay;
- same ID + changed digest/body → conflict;
- same ID + changed reserve/request/version/hash → conflict;
- same ID + changed approval/attempt → conflict;
- same ID + changed lock/ledger → conflict;
- same ID + different Collaboration → conflict, zero losing mutation;
- same ID + different Brand/Campaign/Creator/agreement → conflict, zero losing mutation;
- confirmation versus concurrent reserve supersession → one serial outcome;
- entitlement versus concurrent reserve supersession → one serial outcome;
- delayed exact duplicate → replay;
- out-of-order conflicting confirmation → fail closed;
- crash before claim, after claim, during projection, and before commit → deterministic state;
- no false APPLIED row;
- complete before/after database state for the losing transaction.

### V2-12 — Targeted tests must prove behavior

Replace source-string-presence tests as the primary proof.

The proposed runtime patch must include behavioral tests for:

- exact replay and every changed tuple family;
- losing concurrency path cannot invoke securement mutation;
- P2002/winner reread exact vs conflict;
- digest normalization and mismatch;
- decimal-string validation;
- cross-Collaboration substitution;
- current reserve/supersession locking;
- exact entitlement selection and hash reproduction;
- canonical request-only path for Owner, Finance and Campaign Manager as applicable;
- legacy behavior remains unchanged/fail-closed.

Static proposal review may use isolated assembled schemas and test doubles. The real PostgreSQL concurrency proof remains after migration approval.

## 5. Required V2 artifacts

Create a new evidence directory; do not overwrite V1:

docs/ai-collaboration/evidence/c04-brand-payouts-reserve-entitlement-lineage-v2/

Produce:

1. NOT_APPROVED_NOT_APPLIED-c04-lineage-v2-prisma.patch
2. NOT_APPROVED_NOT_APPLIED-c04-lineage-v2-migration.sql
3. NOT_APPLIED-c04-lineage-v2-runtime.patch
4. v1-to-v2-correction-crosswalk.json
5. exhaustive-object-and-parity-crosswalk.json
6. identity-replay-concurrency-matrix.json
7. reserve-supersession-locking-matrix.json
8. populated-upgrade-truth-table.json
9. trigger-and-constraint-path-table.json
10. runtime-test-and-postgresql-proof-plan.md
11. manifest.sha256

Also produce:

docs/ai-collaboration/c04-brand-payouts-reserve-entitlement-lineage-correction-proposal-v2.md

The SQL must be complete for exact human approval, but must not be copied into backend migrations or applied.

The runtime patch must apply cleanly against fc4d4b59e2a44d7ddced6bc5dde5119c501ec275 without modifying that backend branch.

## 6. Static validation

Perform in clean isolated worktrees:

- exact base/tree/84-migration verification;
- git apply --check for Prisma and runtime patches;
- assembled Prisma format/validate/generate;
- exact Prisma↔DDL migration diff and documented intentional SQL-only objects;
- TypeScript build of an isolated patched projection;
- behavioral targeted tests from V2-12;
- SQL object/identifier/collision review;
- full tuple/trigger null and UNKNOWN truth review;
- secret scan;
- manifest hashing and remote fetch-back;
- cleanup.

Do not execute the proposed migration against PostgreSQL before human approval.

## 7. Required return

Return once:

C04_BRAND_PAYOUTS_LINEAGE_MIGRATION_APPROVAL_REQUEST_V2

PRIOR_PROPOSAL_EVIDENCE_COMMIT =
cdcab07a7e641aa88c38e4dfec113d26a1462f85

V2_PROPOSAL_EVIDENCE_COMMIT =
V2_PROPOSAL_EVIDENCE_TREE =

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

CONFIRMATION_IDENTITY_CLAIM_MODEL =
FULL_LINEAGE_REPLAY_COMPARISON =
DIGEST_DERIVATION_AND_NORMALIZATION =
EXACT_DECIMAL_TRANSPORT =
P2002_OR_EQUIVALENT_RACE_BEHAVIOR =
LOSING_TRANSACTION_DOMAIN_MUTATION =
CROSS_COLLABORATION_SUBSTITUTION =
CROSS_BRAND_SUBSTITUTION =
RESERVE_SUPERSESSION_MODEL =
SUPERSESSION_CONCURRENCY =
ENTITLEMENT_SELECTION_AND_LOCKING =
ENTITLEMENT_HASH_PERSISTENCE_PARITY =
EXTERNAL_PAYOUTS_REFERENCE_FORMAT =
CRASH_RECOVERY =
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

Stop after the consolidated V2 return.