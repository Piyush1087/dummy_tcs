# Brand Payouts — BP-G10 M1 V2 Review

`NOT_APPROVED_NOT_APPLIED`

P4 Base remains accepted and byte-identical at
`5dc9eef4923ae383b94b36cbf9bbb632b1b84cf1`, tree
`6c01d65e5a32eecfcd7e42715923ea8478d071fb`, with 84 migrations. M1 V1
(`683e5266c3e1913e39f151f70d8bd449f0816b5926913220156f97ddda6ec805`)
is not approved and is superseded by this evidence-only V2 proposal.

## Corrected contract

V2 supplies a literal, `git apply --check`-valid unified Prisma patch and a
field-matched SQL proposal. Reserve approvals now snapshot both requester and
approver user/membership/role/time tuples. A deterministic insert trigger binds
all instruction, request, Collaboration, agreement, Brand, version/hash,
economics, currency, requester, and request-time values to the immutable C04
reserve instruction and verifies both memberships belong to the same Brand and
user; only Owner or Finance may approve.

Reserve attempts are durable claims. Their immutable linkage, sequence, claim,
lease, and start evidence cannot change. Exactly one update from `CLAIMED` to a
terminal outcome is legal, with coherent completion/failure evidence; deletes,
repeat completion, terminal mutation, and multiple successes are rejected.

New obligations must identify as `CANONICAL_C04` and include the complete C04
instruction kind/version/hash, Collaboration/agreement version/hash, exact
entitlement/currency, intake time, settlement anchor, NET term, due rule/evidence
time, and backend-authored due instant. A trigger binds the authority tuple to
C04 and makes provenance/due evidence immutable. Existing rows remain explicitly
`LEGACY_UNRECONCILED`; there is no inferred backfill. Check arithmetic preserves
`outstanding = entitlement - settled + reversed`, non-negativity, and reversal
not exceeding settlement without creating a second ledger.

Transfer attempts separately retain existing payout-profile state version and
add exact C05 destination ID/version plus provider-mapping ID/provider. A trigger
binds destination ownership to the obligation Creator and mapping to the same
destination/version/provider without copying bank/KYC secrets. Queued,
execution-started, provider-request-completed, failure-recorded and final-
disposition milestones are chronological and set once. Terminal success and
failure evidence are mutually coherent.

The new narrow receipt table has a stable dedupe identity, normalized entity and
event class, provider occurrence when present, received/reconciled times, exact
attempt/obligation linkage, restrictive FKs, lookup indexes, and immutable
insert-only evidence. No mutable legacy provider state is backfilled.

## Static cross-review

- The formatted target schema validates structurally and the generated literal
  patch applies cleanly to the accepted P4 Base schema.
- Prisma/SQL fields, mappings, relations, reverse relations, enums, unique keys,
  and expressible indexes were reviewed field-by-field.
- The crosswalk explicitly identifies every SQL-only partial index, CHECK, and
  deterministic/immutability/transition trigger.
- All new FKs use `ON UPDATE RESTRICT ON DELETE RESTRICT`; financial approval,
  attempt, provenance, milestone, and receipt evidence cannot be deleted through
  M1-owned paths.
- Claim, due-work, transfer-work, C04 authority, C05 destination/mapping, and
  receipt-dedupe lookup paths are indexed.
- No second vault, ledger, commercial authority, Return path, provider
  abstraction, P4R/P5R behavior, or provider-enabled runtime is introduced.

## Post-approval PostgreSQL proof plan

After, and only after, BP-G10 approval: create the single M1 directory; verify
Prisma format/generate/validate; compare generated migration effect with the
approved SQL hash; run fresh 0→85, 84→85, and legacy-shaped 84→85 on owned UTC
PostgreSQL 16. Direct SQL must attempt every incomplete/mixed C04 and C05 tuple,
wrong/cross-Brand membership, unauthorized approver, illegal status/version,
delete, claim mutation, each legal and illegal attempt transition, second
success, incomplete canonical obligation, legacy masquerade, provenance/due
mutation, arithmetic violation, milestone reordering/clearing/rewrite, terminal
evidence mismatch, receipt replay/link mismatch/update/delete, and FK deletion.
Then prove transaction rollback, concurrent claim/idempotency, shortfall/resume,
supersession, exactly one allocation/lock/ledger result, and forward-recovery
rehearsal. No provider network action is part of this plan.

M1 remains uncommitted to backend and unapplied. P4A/P4B/P5A remain unstarted.
