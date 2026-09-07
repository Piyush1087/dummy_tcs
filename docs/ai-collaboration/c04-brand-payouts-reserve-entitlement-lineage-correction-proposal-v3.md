# C04 Brand Payouts reserve–entitlement lineage correction proposal V3

Status: **HUMAN APPROVAL REQUIRED — NOT APPROVED, NOT APPLIED**

V3 is the final bounded correction to the unapproved V2 proposal. It preserves the accepted architecture and changes no backend source, Product meaning, ownership, provider behavior, or production state.

The mutation-bearing funding-confirmation reference is now a bounded persisted field in the normalized tuple, server-derived digest, replay comparison, SQL tuple, deferred projection invariant, and domain event. The durable CLAIMED state is eliminated. Runtime inserts the final APPLIED row before securement mutation inside one transaction; it is invisible outside that transaction, and an initially deferred constraint requires the exact completed agreement projection and SYSTEM confirmation event before commit. Direct SQL therefore cannot commit a false APPLIED authority.

The migration is explicitly enclosed by `BEGIN`/`COMMIT`. Canonical references share one 1–80 ASCII grammar. Confirmation amount exactly matches the reserve authority’s `DECIMAL(14,2)`: at most 12 integer digits and two decimal places, with no rounding or binary floating-point transport.

Canonical reserve and entitlement histories are append-only. Publication, confirmation, and entitlement retain the single Collaboration-derived advisory transaction lock; supersession appends an exact next version and cannot replace a completed authority. The normal Creator-entitlement instruction hash is reproducible exclusively from persisted fields, while other authority definitions omit lineage they do not store.

P2002 handling classifies the conflict target. Only a confirmation identity conflict proceeds to winner reread, and only an APPLIED exact full-tuple winner replays. All other uniqueness failures remain conflicts. A newly applied confirmation broadcasts exactly once after the outer transaction commits; replays and losers do not broadcast.

Static validation against C04 `fc4d4b59e2a44d7ddced6bc5dde5119c501ec275` / tree `083c52dc06c19a23f47491935b472ee5e62bd1c5` confirms 84 migrations, clean patch application, Prisma format/validate/generate, isolated TypeScript build, and 24 passing behavioral tests. Prisma-visible DDL is accounted for; PostgreSQL-only checks, partial indexes, functions, deferred/ordinary triggers, and advisory locking are explicitly inventoried.

No proposed DDL has been executed. Real rollback, direct-SQL, and two-connection concurrency evidence remains gated on human migration approval.
