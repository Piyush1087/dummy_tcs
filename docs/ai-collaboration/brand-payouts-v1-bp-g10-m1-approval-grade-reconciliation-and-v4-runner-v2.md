# Brand Payouts — BP-G10 M1 Approval-Grade Reconciliation and V4 Runner V2

`BRAND_PAYOUTS_BP_G10_M1_APPROVAL_GRADE_RECONCILIATION_AND_V4_RUNNER_V2`

## 0. Disposition and execution boundary

```text
P4_BASE = ACCEPTED_UNCHANGED
P4_BASE_SHA = 5dc9eef4923ae383b94b36cbf9bbb632b1b84cf1
P4_BASE_TREE = 6c01d65e5a32eecfcd7e42715923ea8478d071fb
MIGRATION_COUNT_BEFORE_M1 = 84

M1_V1 = NOT_APPROVED_SUPERSEDED
M1_V2 = NOT_APPROVED_SUPERSEDED
M1_V3 = NOT_APPROVED_SUPERSEDED
M1_V3_SQL_SHA256 = 352a866d9bb094b4a256ab3bc5612c51bbf6efd6f1ce8b6e218ffdfe94b861d7

SUPERSEDED_RUNNER =
63fb3faadaea77055d66113568bfe41c8b54daf2

THIS_ASSIGNMENT =
ONE_APPROVAL_GRADE_RECONCILIATION
→ ONE_COMPLETE_BLOCKER_REGISTER
→ ONE_V4_PROPOSAL
→ ONE_CONSOLIDATED_RETURN

BACKEND_SOURCE_MUTATION = PROHIBITED
M1_COMMIT_TO_BACKEND = PROHIBITED
M1_POSTGRESQL_EXECUTION = PROHIBITED
P4A_START = PROHIBITED
PROVIDER_ACTIONS = PROHIBITED
```

This assignment supersedes the narrower V3 residual-correction runner. It is
not another planning phase. It freezes the complete known M1 review surface so
the next Codex run does not discover one defect category at a time.

Use high financial/database reasoning for reconciliation and balanced routing
for mechanical patch generation, hashing, formatting and evidence packaging.

## 1. Exact authority to reconcile

Read and bind the exact artifacts and source, not prior chat summaries:

- Product Authority: `f15a91d0ace8b2c424a539d79dbb120869233105`;
- Phase C architecture/finite plan: `3fb6b4246aa5f2ecb71c3bbfe99c56e395f30a92`;
- P0 executable contract register on the current execution-ledger history;
- MVP cutline: `9c991a8e8c8dfc90ccc4cf18e48ab1629d5f5b4f`;
- recovery charter: `23a074b01dbca141ddc997113a6ecbbc14e19f82`;
- superfast execution amendment: `634db2b0def32ca3b703fa9806d267b1d89dd7ef`;
- accepted Wave B deep plan: `bec420628c57d609f6ca1443f0f1ffe74cfe5d4d`;
- C04 runtime/handoff: `373eaa382f555c376df78c0e95c72ff55cc43791`
  / `fc4d4b59e2a44d7ddced6bc5dde5119c501ec275`;
- C05 runtime: `156d5834266077be7e2b6a2d459bae5489edbbd6`;
- accepted P4 Base source/schema at `5dc9eef4923ae383b94b36cbf9bbb632b1b84cf1`;
- all V1–V3 M1 proposal/review packages and the verified V3 remote bytes.

The frozen system meaning includes:

- C04 immutable commercial, reserve and Creator-entitlement authority;
- Owner/Finance approval with no caller-authored economics;
- one canonical vault/ledger/funding domain;
- exact NET_7/15/30/45/60 Kolkata due calculation;
- obligation, provider request, provider processing and settlement as distinct
  meanings;
- current C05 destination/version/readiness fencing;
- due/funding/resolution/provider gates before transfer;
- provider acceptance/processing/hold is never settlement;
- canonical settlement changes funding/vault/ledger exactly once;
- legacy ambiguity remains legacy; no fabricated backfill;
- provider-disabled normal path only.

## 2. Approval-grade reconciliation method

Before editing the V3 proposal, build one internal invariant inventory covering
every affected table and transition:

```text
C04 reserve instruction
→ approval decision
→ worker claim
→ execution attempt
→ funding allocation + vault
→ escrow lock + canonical ledger
→ C04 confirmation

C04 Creator-entitlement authority + exact reserve lineage
→ canonical obligation + exact due
→ eligibility/readiness claim
→ provider create attempt
→ accepted/failed/ambiguous outcome
→ later provider observation/reconciliation
→ authoritative settlement
→ funding consumption + canonical ledger
→ receipt/activity evidence
```

For every arrow state:

- source authority and immutable identity;
- Brand/Creator/Collaboration/vault/profile/destination ownership;
- amount/currency authority;
- legal initial state and reachable transitions;
- concurrency/idempotency boundary;
- exact database constraint/trigger/index versus application responsibility;
- legacy-row behavior;
- safe deployment and rollback/forward-recovery behavior.

Do not repair a single finding and return. Resolve the complete register below
and every adjacent contradiction exposed by this inventory.

## 3. Complete frozen blocker register

### R1 — Populated 84→85 and legacy compatibility

V3's transfer time CHECK unconditionally requires new queue/readiness fields.
Pre-M1 rows receive `LEGACY_UNRECONCILED` with those fields null, so a
populated 84→85 migration can fail.

Make every altered-table CHECK mode-aware. Prove:

- empty/fresh schema compatibility;
- populated 84→85 compatibility;
- accepted legacy-shaped rows remain unchanged/read-only or follow an explicitly
  bounded legacy update policy;
- every post-M1 INSERT requires complete canonical/current evidence;
- no partial legacy-to-canonical promotion;
- no CHECK succeeds unintentionally through SQL UNKNOWN.

Do not backfill financial meaning.

### R2 — Complete Prisma/SQL migration mechanics

Reconcile every enum, field, FK, unique constraint, partial index, ordinary
index, function and trigger against the exact 84-migration P4 Base schema.
Check names, mapped columns, decimal precision, timestamp precision, FK target
uniqueness, relation parity and global function/trigger collisions.

The V4 crosswalk must enumerate every object—not four representative parity
rows. Include ownership, purpose, legacy behavior and whether enforcement is
Prisma-visible, SQL-only or application-level.

### R3 — Reserve approval INSERT and truthful audit timestamps

Direct SQL must not insert an approval already EXECUTING, failed, COMPLETED or
SUPERSEDED. Approval INSERT starts only at
`APPROVED_AWAITING_EXECUTION`, state version zero, with the exact initial
null/non-null evidence tuple.

Preserve the immutable C04 requester user/time. The approving membership must
be current, active, same-Brand Owner/Finance. Requester membership/role may be
an explicitly named approval-time observation only; do not claim request-time
history that C04 does not persist. Database-assigned or otherwise
database-verifiable observation/approval/creation/update timestamps must not
be caller-overridable historical assertions. Enforce creation/update ordering.

If a deleted/nonexistent requester membership makes a truthful required tuple
impossible, classify the exact contract contradiction rather than inventing it.

### R4 — Active C04 reserve authority and replay identity

An approval may consume only the exact current C04 reserve instruction:

- `status='REQUESTED'`;
- exact request/instruction ID, version, hash, agreement, Brand,
  Collaboration, Campaign, Creator, amount breakdown and INR;
- no newer/superseding instruction for the same authority stream;
- same-input replay stable; different instruction/economics/key conflict;
- one approval per request/instruction.

C04 append-only rows use version/supersession authority. Do not infer
currentness merely from a matching FK.

### R5 — Approval state machine, retry and supersession reachability

Derive the exact reachable graph from the frozen architecture:

```text
APPROVED_AWAITING_EXECUTION
→ EXECUTING
  → COMPLETED
  → AWAITING_FUNDS → EXECUTING
  → ACTION_REQUIRED
→ SUPERSEDED only before financial completion
```

V3 declares `AWAITING_FUNDS → SUPERSEDED` while its SUPERSEDED tuple clears
execution evidence and its immutability guard forbids that clearing. Resolve
this contradiction. Preserve the Owner/Finance decision and historical attempt
evidence. Define whether supersession preserves prior episode fields or is
represented only at approval level; expose only reachable transitions.

Every update increments state version exactly one and advances server-owned
update time. Terminal states are immutable. Failure evidence is set once per
attempt/episode and can reset only through an explicit legal retry transition.

### R6 — Execution-attempt claim, lease and parent coupling

Direct INSERT of a terminal attempt is prohibited. An attempt begins only
CLAIMED with legal claim/lease/start evidence and moves exactly once to one
terminal outcome. Enforce:

- parent approval is in the compatible EXECUTING state;
- attempt sequence cannot race, duplicate or silently skip in a way that
  weakens audit;
- at most one live CLAIMED attempt per approval;
- crashed/expired lease recovery is explicit and cannot overlap a live claim;
- at most one SUCCEEDED attempt per approval/instruction;
- approval outcome matches the terminal attempt outcome;
- COMPLETED approval requires the exact successful attempt;
- shortfall/failure writes no financial movement;
- retry/supersession cannot erase attempts.

Use database uniqueness/locking-safe invariants where concurrency requires them,
not prose or application convention alone.

### R7 — Reserve completion must bind exact money authority

V3 only requires arbitrary valid lock and ledger FKs. On transition to
COMPLETED, validate the exact P4A result:

- escrow lock belongs to the same Collaboration and Brand;
- gross fee, commission, GST, total locked amount, net Creator pool and
  TDS-zero policy match the immutable C04 instruction;
- canonical Brand vault and INR match;
- ledger belongs to that vault/Brand/Collaboration;
- exact `CONTRACT_LOCK_RESERVE` type, `CLEARED` status, zero gateway
  surcharge/GST, exact amount/currency and deterministic idempotency identity;
- lock/ledger are not unrelated pre-existing legacy rows retroactively adopted
  as evidence for a new approval;
- exactly one funding allocation/vault decrement/lock/ledger financial effect
  exists under replay and concurrency;
- completion and C04 confirmation reference this exact outcome.

Do not create another vault, ledger or reserve execution authority.

### R8 — Full P0 entitlement input and protected-reserve lineage

P0's frozen entitlement input includes the immutable instruction, commercial
agreement, reserve request, Brand, Campaign, Collaboration, Creator,
commercial breakdown, entitlement/refund effects, due authority, resolution
reference and issued time.

V3 omits an exact persisted reserve-request/approval/lock lineage from the
obligation and leaves `instruction_issued_at` caller-authored. Reconcile the
exact normal-path lineage. Bind the authoritative issued/effective timestamp.
Persist or unambiguously constrain the exact reserve instruction/approval
reference required to prove protected funding.

C04's relational financial-authority row does not itself carry a direct reserve
instruction FK. Use another immutable exact source only if P4 Base proves it;
do not select a request heuristically by latest timestamp. If the frozen source
cannot provide the exact reserve reference required by P0, return the precise
Class C upstream contradiction instead of a compatibility workaround.

Reject superseded Creator-entitlement authority, Brand-refund, abnormal
resolution and generalized recovery in P4B/P5A normal path. Normal-path
obligation type/effect must be the exact full Creator entitlement.

### R9 — Obligation state/economics coherence

For every new canonical obligation define the legal initial
`status/lifecycle/current_gate` tuple and subsequent normal-path transitions.
Prevent contradictory direct-SQL combinations such as:

- SCHEDULED plus SETTLED legacy status;
- settled amount/timestamp without authoritative settlement;
- arbitrary amount-settled/outstanding changes;
- reversal amount/lifecycle without the separately gated recovery authority;
- terminal lifecycle with missing or contradictory timestamps/evidence.

The original entitlement is immutable. Outstanding arithmetic remains exact.
For provider-disabled normal P5A, reversal/recovery fields cannot become a
backdoor into deferred P4R/P5R semantics.

### R10 — Exact due authority and UTC

Preserve only NET_7/15/30/45/60. `IMMEDIATE`, null and unknown fail closed.
Bind:

- authority instruction/version/hash;
- exact `settlementEligibleAt`;
- commercial agreement/version/hash/term;
- authoritative issued/effective timestamp;
- Kolkata calendar-day wall-clock-preserving addition;
- exact persisted UTC `TIMESTAMP(3)`;
- due-rule/evidence version and immutable replay.

Direct SQL cannot choose another due instant, rewrite a due field, or start a
transfer before the stored due instant. Keep the repository/runtime UTC
fail-closed requirement in the proof plan.

### R11 — C05 readiness snapshot versus mutable currentness

Reconcile M1 storage with the frozen `CreatorPayoutReadinessV1` contract:

- Creator subject;
- destination reference and exact version;
- country/currency/rail;
- setup status;
- provider status;
- bounded blocker/recovery state where required;
- readiness state version;
- observed/check time.

The P4 Base tables split evidence across Creator payout profile, destination
and provider mapping. Prove which facts form the immutable attempt snapshot and
which are re-read at claim/execution. Bind active primary destination,
destination Creator, exact version, bank/IN/INR, current profile version,
eligible provider state and non-invalidated readiness.

A provider-mapping row is mutable. Either snapshot sufficient non-secret
mapping/version evidence or enforce that referenced evidence cannot mutate
under an existing attempt. Do not copy encrypted bank/KYC/legal/tax payloads.

V3 revalidates mutable C05 rows on every transfer UPDATE. Later readiness drift
must stop execution but must not prevent recording the truthful failure or
reconciliation result. Freeze the exact snapshot/current-recheck/failure-record
division.

### R12 — Due/funding/resolution eligibility and transfer claim concurrency

A canonical transfer cannot be inserted/claimed solely because an obligation
has positive outstanding amount. At the execution claim boundary prove:

- exact due has been reached;
- canonical obligation is in the precise ready/queued state and READY gate;
- current C05 fence passes;
- India/INR/bank rail passes;
- protected funding allocation is exact and unconsumed;
- no blocking C04 resolution/recovery/provider condition;
- provider capability is authorized for the selected non-production boundary.

Prevent concurrent active attempts and multiple accepted/successful provider
creates for the same full-outstanding obligation. An ambiguous create blocks
unguarded retry until reconciled. Same-key replay is stable; different-key
retry follows an explicit authorized state transition. No partial payout model
is introduced.

### R13 — Provider request outcome is not transfer settlement

V3 uses one immutable `final_disposition` and then rejects every later UPDATE.
This is incompatible with the frozen lifecycle:

- an accepted provider create has an execution reference but is only
  PROCESSING/HELD, not settled;
- an ambiguous create requires lookup/reconciliation;
- later provider observations may become processed, held, failed or settled;
- only authoritative settlement changes obligation/funding/vault/ledger.

Redesign the minimal M1 attempt/reconciliation fields so the immutable outcome
of a provider create call is distinct from later provider transfer and
settlement milestones. An ACCEPTED outcome must require the stable execution
reference. An ambiguous outcome must remain reconcilable without an unguarded
new transfer. Set-once evidence may be appended after create outcome while
immutable identity/economics and prior milestones cannot be rewritten.

Bind the existing `state`, `settlement_state`, `transfer_id`,
`provider_accepted_at`, `processed_at`, `failed_at`, `settled_at`,
`on_hold` and new normalized fields so contradictory parallel truths are
impossible. Ordinary V1 cannot expose a Brand hold/release authority.

### R14 — Milestone ordering and terminal evidence

For every applicable branch enforce explicit null-safe order:

```text
readiness observed
→ queued
→ execution claimed
→ provider request outcome recorded
→ provider observation/reconciliation
→ settlement or terminal failure recorded
```

A terminal/evidence timestamp cannot predate the milestone it proves. Success/
accepted requires its execution reference and forbids failure evidence.
Retryable/terminal/ambiguous outcomes require their exact reason/evidence.
All set-once fields remain set; final settlement/failure state is immutable
except through separately authorized recovery semantics.

### R15 — Authoritative settlement and exactly-one financial effect

The proposal must support P5A's required transaction:

- lock obligation/attempt/allocation/vault;
- validate authoritative normalized settlement evidence;
- consume the exact protected funding allocation once;
- update vault/obligation amounts once;
- create exactly one canonical
  `CREATOR_PAYOUT_SETTLEMENT` ledger movement with deterministic
  idempotency;
- persist a direct, auditable link among attempt, settlement evidence,
  obligation/allocation and ledger;
- replay returns the same result;
- late/duplicate/out-of-order evidence cannot duplicate money movement.

Do not rely only on an opaque string convention when the required durable
identity can be represented by an additive FK/unique constraint. Provider
accepted/processed/held never satisfies settlement.

### R16 — Receipt semantics and late/out-of-order evidence

Each receipt/event class must bind to the exact source milestone it names:

- TRANSFER_ACCEPTED requires accepted create evidence and execution reference;
- TRANSFER_PROCESSED requires processed evidence;
- TRANSFER_FAILED requires compatible failure state/reason;
- TRANSFER_HELD requires actual hold/ambiguous-reconciliation evidence;
- SETTLEMENT_RECORDED requires compatible successful transfer plus exact
  obligation settlement/allocation/ledger evidence.

Preserve transfer/obligation linkage, provider-neutral classification,
dedupe identity, event/received/reconciled time order and insert-only evidence.
Define legal duplicate, late and out-of-order handling. Do not build a general
provider event platform or enable webhook/provider behavior.

### R17 — RBAC, tenant isolation and sensitive-data boundary

Trace same-Brand membership and cross-Brand denial through approval, reserve
execution, obligation intake and worker selection. Campaign Manager may
originate the C04 progression but cannot approve/execute reserve or gain broad
financial rows. Internal workers cannot substitute caller-supplied Brand,
Creator, amount, destination or provider identity.

No provider reference/raw diagnostic, encrypted destination, bank/KYC/PAN/tax
data, credential or secret appears in ordinary APIs, evidence, logs or the
approval package. Database-only operational identifiers remain restricted.

### R18 — Deployment, rollback and operability

Prove:

- migration is one additive M1 after the immutable 84-migration prefix;
- existing reads remain operable;
- unsafe legacy command paths fail closed during the migration/code rollout;
- new runtime cannot write partial M1 rows;
- application rollback leaves inert additive structures and cannot resume
  unsafe canonical writers;
- functions/triggers cannot strand a row that must record a failure;
- claim/due/terminal/receipt indexes match actual worker predicates;
- no trigger creates deadlock-prone inconsistent lock ordering;
- forward recovery retains audit evidence and never drops financial data.

If safe operation needs a second financial migration, destructive rewrite,
heuristic backfill or upstream Product/authority change, stop as Class C.

## 4. Mandatory complete proof artifacts

The V4 evidence package must contain:

1. literal Prisma patch;
2. exact SQL and fetched-back SHA-256;
3. exhaustive object crosswalk covering every field/constraint/index/function/
   trigger and its authority;
4. complete matrices for:
   - reserve approval states/transitions,
   - reserve attempt states/transitions,
   - obligation status × lifecycle × gate,
   - provider create outcome × transfer lifecycle × settlement state,
   - every receipt class;
5. legacy/fresh/populated migration truth table;
6. all nullable CHECK TRUE/FALSE/UNKNOWN table;
7. INSERT/UPDATE/DELETE trigger-path table;
8. C04 reserve-to-lock/ledger and entitlement-to-obligation lineage;
9. C05 snapshot/current-recheck lineage;
10. exactly-once/concurrency invariant map;
11. deployment/rollback/forward-recovery sequence;
12. post-approval PostgreSQL test plan mapped one-to-one to every invariant;
13. evidence manifest and compact review report.

A summary claim such as “reviewed all CHECKs” is insufficient without the
enumerated artifact.

## 5. Static validation allowed now

Without applying M1:

- reverify exact source SHA/tree, clean worktree and 84 migrations;
- run literal `git apply --check`;
- apply the Prisma patch only in a disposable non-source validation copy;
- run Prisma format/generate/validate on that copy;
- use a non-executing PostgreSQL grammar/parser if already available;
- inspect generated SQL/schema parity;
- run secret scan and fetched-back hash/index validation;
- clean all owned temporary artifacts.

Do not execute the proposed DDL on PostgreSQL before BP-G10 approval, including
a rollback-only DDL transaction, unless Parent separately changes that gate.

## 6. Output and stop

Publish one V4 package on
`dummy_tcs:brand-payouts/v1-execution-ledger`. Retain V1–V3 unchanged.
Record the narrower runner `63fb3faa…` as superseded by this assignment.
Keep P4 Base exactly unchanged.

Return once as:

```text
BRAND_PAYOUTS_BP_G10_M1_APPROVAL_REQUEST_V4

P4_BASE_STATUS =
P4_BASE_BACKEND_SHA =
P4_BASE_TREE =
MIGRATION_COUNT_BEFORE_M1 =

M1_V3_DISPOSITION =
M1_V3_SQL_SHA256 =
M1_V4_SQL_PERMALINK =
M1_V4_SQL_SHA256 =
M1_V4_PRISMA_PATCH_PERMALINK =
M1_V4_EXHAUSTIVE_CROSSWALK_PERMALINK =
M1_V4_STATE_MATRICES_PERMALINK =
M1_V4_MIGRATION_TRUTH_TABLE_PERMALINK =
M1_V4_TRIGGER_PATH_TABLE_PERMALINK =
M1_V4_CONCURRENCY_LINEAGE_PERMALINK =
M1_V4_DEPLOYMENT_RECOVERY_PERMALINK =

RECONCILIATION_REGISTER = PASS | CLASS_C
LEGACY_POPULATED_UPGRADE_STATIC_PROOF =
RESERVE_AUTHORITY_APPROVAL_ATTEMPT_BINDING =
LOCK_ALLOCATION_VAULT_LEDGER_BINDING =
ENTITLEMENT_RESERVE_OBLIGATION_BINDING =
DUE_AND_UTC_BINDING =
OBLIGATION_STATE_COHERENCE =
C05_SNAPSHOT_CURRENTNESS_BINDING =
TRANSFER_CREATE_RECONCILIATION_SEPARATION =
SETTLEMENT_EXACTLY_ONCE_BINDING =
RECEIPT_EVENT_BINDING =
RBAC_CROSS_BRAND_AND_SECRET_BOUNDARY =
PRISMA_SQL_OBJECT_PARITY =
STATIC_VALIDATION =
POST_APPROVAL_POSTGRESQL_PROOF_PLAN =

M1_COMMITTED_TO_BACKEND = NO
M1_APPLIED = NO
BACKEND_BRANCH_UNCHANGED = YES
PROVIDER_ACTIONS = NONE
COMPLETE_BLOCKER_SET =
CLASS_C_BLOCKERS =
EVIDENCE_COMMIT =
EVIDENCE_TREE =
CLEANUP =
RESULT = M1_HUMAN_APPROVAL_REQUIRED | CLASS_C_BLOCKED
```

If any required invariant cannot be supported by the frozen P4 Base and one
safe additive M1, return the exact Class C contradiction instead of weakening
the invariant, inventing an upstream link, or creating a compatibility
workaround.