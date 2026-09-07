# C04 lineage runtime and post-approval PostgreSQL proof plan

After human approval only, create one migration after the immutable 84-file
prefix and test on fresh owned PostgreSQL in UTC. Prove fresh 0→85, empty and
populated 84→85, unchanged legacy bytes, old-runtime canonical-write denial,
and forward recovery with writers disabled.

Runtime tests must cover all Brand roles: canonical PLATFORM_ESCROW always
publishes a reserve instruction and never calls the direct reserve engine.
Legacy authority retains only its bounded old path. Owner and Finance approval
references are accepted only through the internal Payouts seam; Campaign
Manager cannot approve or execute.

For confirmation, test same-body replay, changed-body conflict, concurrent
identity races, stable approval/execution refs, one completed confirmation per
reserve, superseded/current instruction races, cross-Brand/Collaboration/
Campaign/Creator/agreement substitution, every hash/version mismatch, lock and
ledger substitution, wrong vault/type/status/amount/currency/surcharge/GST,
nonzero TDS, deletion/update, partial tuple, delayed duplicate and out-of-order
arrival. Crash/retry tests must show confirmation insertion and C04 projection
are recoverable under the same command identity.

For entitlement, test missing confirmation, partial/legacy confirmation,
superseded reserve, wrong kind/effect/resolution, agreement/amount/currency
mismatch, one confirmation reused twice, lineage rewrite/delete, and that the
instruction hash changes when either immutable lineage identity changes.

Concurrency uses deterministic lock order: reserve instruction, agreement,
escrow lock, ledger, vault, then confirmation uniqueness. Run two simultaneous
confirmations and two entitlement emissions; exactly one wins and replay
returns the same durable identity. Run secret/log/API scans proving that only
opaque operational references are exposed and no bank/KYC/PAN/credential or
encrypted destination payload leaves its owning boundary.

No provider SDK, webhook, credential, external network, shared database, or
production environment participates.
