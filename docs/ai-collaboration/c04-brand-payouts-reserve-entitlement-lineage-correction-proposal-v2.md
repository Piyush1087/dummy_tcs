# C04 Brand Payouts reserve–entitlement lineage correction proposal V2

Status: **HUMAN APPROVAL REQUIRED — NOT APPROVED, NOT APPLIED**

This bounded V2 replaces only the unapproved V1 proposal. It preserves the additive 84→85 direction, legacy/canonical separation, request-only canonical flow, Payouts ownership, and reserve→confirmation→entitlement topology. Backend source, migrations, PostgreSQL, providers, Product meaning, and ownership are unchanged.

## Consolidated correction

The confirmation service now validates a strict canonical tuple, transports the amount as a canonical decimal string, lowercases hashes, recomputes the SHA-256 digest server-side, and creates a unique `CLAIMED` row before invoking securement. Claim, securement projection, and `CLAIMED→APPLIED` occur in one Prisma transaction. A uniqueness loser cannot reach securement; it rereads the committed winner and returns replay only when the entire normalized tuple and APPLIED state match.

Reserve publication, confirmation insertion, and normal entitlement selection use the same transaction-scoped advisory key derived solely from Collaboration ID. Publication resolves the exact unsuperseded agreement stream, creates version one without a predecessor or version N+1 with the exact prior predecessor, and rejects superseding an APPLIED completed reserve. Entitlement selection is agreement-specific, current-reserve-specific, APPLIED-confirmation-specific, and performed under that lock.

Normal Creator entitlement hashes include both lineage identifiers and persist both. Brand-refund, abnormal, recovery, and legacy hashes exclude those fields. Payouts references use a 1–80 character canonical format and remain external identities without speculative reverse foreign keys.

The Prisma proposal models the Brand, Campaign, and Creator relations corresponding to the proposed DDL foreign keys. The base-to-assembled datamodel diff accounts for all Prisma-visible enums, columns, indexes, and foreign keys. CHECK constraints, partial indexes, functions, triggers, and advisory-lock behavior are intentionally SQL-only and exhaustively inventoried.

## Static validation result

The immutable C04 source is clean at `fc4d4b59e2a44d7ddced6bc5dde5119c501ec275`, tree `083c52dc06c19a23f47491935b472ee5e62bd1c5`, with 84 migration directories. Both patches apply cleanly. The assembled Prisma schema formats and validates. The isolated patched TypeScript projection builds, and 21 targeted behavioral tests pass, including claim-before-mutation ordering, same-transaction use, exact P2002 replay, all immutable tuple families, digest validation, and decimal validation.

No proposed SQL was run. Real PostgreSQL constraint, crash, and two-connection concurrency evidence is explicitly deferred until human migration approval.

## Approval boundary

Approval, if granted, authorizes a later migration implementation/proof step only. It does not accept P4A/P4B/P5A, invoke a provider, change Product meaning or ownership, or authorize production action.

