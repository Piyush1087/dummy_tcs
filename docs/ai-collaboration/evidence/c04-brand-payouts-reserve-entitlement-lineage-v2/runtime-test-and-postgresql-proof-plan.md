# C04 V2 runtime test and PostgreSQL proof plan

Status: **NOT APPROVED / NOT APPLIED**. No PostgreSQL DDL was executed.

## Static proof completed

- Bound the proposal to C04 `fc4d4b59e2a44d7ddced6bc5dde5119c501ec275`, tree `083c52dc06c19a23f47491935b472ee5e62bd1c5`, with 84 migrations.
- Both patches pass `git apply --check` against that clean source.
- The assembled Prisma schema passes format and validate. Base-to-assembled `prisma migrate diff --*-schema-datamodel` accounts for all Prisma-visible enums, columns, indexes, and nine foreign keys.
- The isolated assembled projection builds. Twenty-one behavioral tests prove claim-before-mutation ordering, same-transaction use, exact P2002 replay, every immutable tuple family, digest mismatch, and decimal-string validation.
- SQL review inventories every CHECK, index, function, trigger, and shared advisory-lock path. No proposed SQL was applied.

## Post-approval real PostgreSQL proof

On a disposable database cloned from all and only the 84 committed migrations, apply the approved 85th migration once. Capture catalog definitions, constraint validation, migration checksum, and full before/after rows for every case.

Run barriers with two independent connections for: exact duplicate confirmation; changed digest/body; each reserve/request/version/hash field; approval/attempt; lock/ledger; different Collaboration; same Brand/Campaign/Creator but different Collaboration; different party/agreement; confirmation versus supersession; entitlement versus supersession; delayed duplicate; and out-of-order conflict. Require one serial authority, no losing projection/event mutation, and deterministic error classification.

Inject transaction aborts before claim, after claim, during securement projection, after APPLIED update, and immediately before commit. Require rollback of both claim and domain writes and zero false APPLIED rows.

Exercise initial reserve version 1, legal exact-prior supersession, parallel publishers, completed-reserve supersession rejection, exact agreement/current reserve selection, instruction-hash reproduction from stored columns, direct-SQL partial/null/uppercase-digest/overlong-reference rejection, cross-Collaboration reserve substitution, and immutable-row UPDATE/DELETE rejection.

Re-run existing canonical request-only role behavior for Owner, Finance, and Campaign Manager, plus legacy rows and abnormal/recovery authority paths. Provider calls and money movement remain out of scope and must be zero.
