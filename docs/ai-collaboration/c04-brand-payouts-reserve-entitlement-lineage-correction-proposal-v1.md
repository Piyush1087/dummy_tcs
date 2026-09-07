# C04 — exact reserve–entitlement lineage correction proposal

## Disposition

This is a proposal only against exact C04 handoff
`fc4d4b59e2a44d7ddced6bc5dde5119c501ec275`, tree
`083c52dc06c19a23f47491935b472ee5e62bd1c5`, at 84 migrations. It is not
approved, copied to the backend, applied to PostgreSQL, or used to start Brand
Payouts P4A/P4B/P5A.

## Smallest correction

The additive schema extends C04 trusted confirmations with an explicit
legacy/canonical mode and the exact reserve request/instruction, agreement,
opaque Payouts approval/attempt, lock, cleared reserve ledger, Brand, Campaign,
Collaboration, Creator, amount/currency, disposition and server-time evidence.
Existing in-schema financial objects use restrictive FKs. Future Payouts IDs
remain bounded non-empty unique external references, avoiding an invalid
reverse FK to an uncreated M1 table.

Only one `COMPLETED_SUFFICIENT` confirmation is authoritative per current
reserve instruction. Canonical partial confirmations are intentionally not a
C04 authority: shortfall/retry history belongs to Payouts execution attempts.
C04 publishes only the final exact durable effect. Legacy rows receive no
inferred meaning.

Normal `CREATOR_ENTITLEMENT` authority gains direct confirmation and reserve
FKs. The writer resolves exactly one completed confirmation whose reserve has
no superseding row; it embeds both IDs in the instruction hash and persists
them. A trigger rejects missing, switched, superseded, cross-tenant or
economically inconsistent lineage.

For every new `CANONICAL_V1` Collaboration, securement is request-only for all
Brand roles. Owner/Finance no longer fall through to direct reserve execution;
the old `escrow-reserve:<commandId>` encoding remains legacy-only.

## Validation and rollout

The literal Prisma patch applies to the exact C04 head and its assembled schema
formats and validates with Prisma 6.19.3. The runtime patch applies to the same
head. Object names were checked against source and all 84 migrations. The SQL
was statically reviewed only and was not executed.

Deploy only after human approval: schema with canonical writers disabled,
compatible runtime, then gated Payouts seam. Rollback disables writers and
leaves additive evidence inert. Forward recovery uses only immutable records.
The accompanying artifacts enumerate schema objects, state/replay behavior,
populated upgrade, trigger paths and the complete post-approval proof plan.

No independent Class C blocker remains conceptually: this authorized upstream
C04 correction supplies the exact immutable seam identified by M1 V4.
