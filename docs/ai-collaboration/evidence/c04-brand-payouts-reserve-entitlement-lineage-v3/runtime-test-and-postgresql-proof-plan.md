# C04 V3 runtime and post-approval PostgreSQL proof plan

Status: **NOT APPROVED / NOT APPLIED**. The proposed SQL was never executed.

## Static validation

The proposal is bound to C04 `fc4d4b59e2a44d7ddced6bc5dde5119c501ec275`, tree `083c52dc06c19a23f47491935b472ee5e62bd1c5`, with 84 migration directories. Both patches apply cleanly to that source. The assembled Prisma schema formats, validates, generates, and the isolated TypeScript projection builds. Twenty-four behavioral tests pass for final-shape claim-before-mutation, exact tuple replay including `fundingConfirmationRef`, every stored field family, decimal/reference limits, non-identity P2002 classification, zero losing mutation, exact entitlement-hash reconstruction, and exactly one post-commit broadcast.

The proposed migration has explicit `BEGIN`/`COMMIT`. PostgreSQL transactional DDL means an error while creating an enum, column, FK, index, function, or trigger aborts the transaction; none of its objects become committed. Retry begins from the unchanged 84-migration state. Table rewrites/catalog locks and index construction remain bounded maintenance concerns; approval must schedule an exclusive migration window. Forward recovery is correction plus whole-transaction retry, never manual partial-object continuation.

## Exact post-approval PostgreSQL setup

Create a disposable PostgreSQL database, apply all and only the 84 committed migrations, record catalog and populated-row snapshots, then apply the approved 85th migration through the repository migration runner. Use two independent connections, explicit barriers, `lock_timeout`, and transaction IDs. Do not invoke providers.

Seed two Collaborations sharing Brand/Campaign/Creator but having distinct agreements, reserves, locks, and ledgers. Seed canonical reserve version 1 and all exact economic authority. For each test capture both transaction results plus before/after agreement, event, confirmation, reserve, entitlement, and uniqueness rows.

## Required interleavings and assertions

- Concurrent same confirmation ID/full tuple: pause connection A after insert; start B; release A. One authority/projection/event commits, B returns exact replay, and B has zero mutation.
- Repeat with changed funding reference and each lineage family. Require identity conflict and zero losing mutation.
- Collide independently on approval, execution attempt, reserve, ledger, completed-confirmation, and an unrelated repository unique. Require non-replay conflict classification.
- Abort before insert, after insert, during securement projection, after event, and before commit. Require no row, no event, no projection, and no CLAIMED state.
- Directly insert an APPLIED row without projection/event, or with changed funding ref, lock, amount, currency, state, timestamp, actor, command ID, or payload. Force deferred constraints immediate and require rollback.
- Test `999999999999.99`; reject 13 integer digits, scale 3, alternate formatting, rounding, and overflow. Recompute digest and replay numerically without loss.
- Test every canonical reference at lengths 1 and 80 and reject empty, 81, period, slash, whitespace, and non-ASCII in both runtime and SQL.
- Attempt reserve update/delete, predecessor rewrite, parallel publication, illegal version, noncurrent supersession, and completed-reserve supersession. Require append-only history and one current stream.
- Race confirmation versus supersession and entitlement versus supersession under the shared Collaboration advisory key. Require one serial outcome.
- Attempt canonical entitlement update/delete across every stored authority field. Reconstruct the Creator instruction hash byte-for-byte from its persisted row; prove Brand-refund/abnormal/recovery hashes contain no unpersisted lineage fields.
- Verify exactly one realtime notification occurs after a newly applied commit, and none for exact replay, rejected uniqueness, rollback, or conflict.
- Re-run request-only canonical role behavior and legacy/abnormal paths unchanged.

The migration is eligible for execution only after explicit human approval.
