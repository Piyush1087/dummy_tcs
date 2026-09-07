# M1 V4 deployment, rollback, and forward-recovery disposition

No M1 V4 deployment sequence exists against the frozen source because the
required upstream lineage key is absent. Current safe operation is unchanged:
84 migrations, no M1 writer, provider-disabled behavior, and no provider
action.

Required upstream resolution: C04 must append an immutable relational record
or fields that bind each normal Creator-entitlement authority instruction to
the exact current reserve instruction and the exact authoritative reserve
completion/lock confirmation. The relation must be written transactionally by
C04 authority, versioned/supersession-aware, and non-null for new normal-path
authority. A JSON payload, mutable agreement reference, timestamp match, or
caller-supplied ID is insufficient.

After that accepted source exists, regenerate one additive M1 against its new
exact base. Rollout order is schema first with canonical writers disabled,
then compatible runtime, then gated writers. Legacy rows stay unmodified and
read-only. Rollback disables writers and leaves additive audit data inert.
Forward recovery repairs only from immutable authority and never drops or
backfills financial meaning.

Post-approval PostgreSQL proof must cover every R1–R18 row: fresh and populated
upgrade; legacy mode; all TRUE/FALSE/UNKNOWN tuples; all trigger paths; current
reserve and supersession; requester/approver RBAC; attempts, leases and races;
exact lock/allocation/vault/ledger economics; exact reserve-entitlement link;
all five Kolkata terms under UTC; obligation state/economics; C05 snapshot and
currentness drift; due/funding/resolution gates; create versus reconciliation
versus settlement; duplicates, late/out-of-order receipts; exactly-once money;
cross-Brand denial; secret scan; rollout rollback and forward recovery.

Until upstream acceptance, there is nothing to apply or roll back.
