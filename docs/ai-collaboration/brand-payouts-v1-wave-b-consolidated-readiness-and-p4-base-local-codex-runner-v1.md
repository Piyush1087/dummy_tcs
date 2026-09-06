# Brand Payouts — Wave B Consolidated Readiness and P4 Base Local Codex Runner V1

`BRAND_PAYOUTS_WAVE_B_CONSOLIDATED_READINESS_AND_P4_BASE_LOCAL_CODEX_RUNNER_V1`

## 0. Assignment status

```text
PARENT_AUTHORIZED = YES
EXECUTION_MODE = ONE_COHERENT_LOCAL_RUNNER_LANE
CURRENT_BOUNDARY = CONSOLIDATED_PREFLIGHT_THEN_P4_BASE
STOP_BOUNDARY = EXACT_BP_G10_M1_PARENT_APPROVAL
P3A_REOPEN = NO
NEW_PLANNING_ARTIFACT = NO
PROVIDER_ACTION = NONE
PRODUCTION_OR_AWS = NONE
```

You are the external Local Codex implementation and runtime runner. The cloud
Brand Payouts Systems Architect owns authority, sequencing, review and circuit
breakers.

Work autonomously through:

```text
ONE consolidated readiness preflight
→ resolve the complete bounded Class A/B blocker set
→ P4 Base convergence
→ generate an exact non-applied M1 proposal
→ push durable evidence
→ STOP for Parent approval
```

Do not return after preflight merely to narrate success. Do not stop at the
first ordinary defect. Diagnose and fix the complete bounded blocker set in
this same lane.

## 1. Repositories

```text
AUTHORITY / LEDGER
= Piyush1087/dummy_tcs
  branch: brand-payouts/v1-execution-ledger

BACKEND
= Piyush1087/creator-commerce-backend-v2-clone

FRONTEND READ-ONLY IDENTITY CHECK
= Piyush1087/creator-commerce-frontend-v2-clone
```

Use clean isolated worktrees. Do not disturb any developer worktree or branch.
Fetch remotes first. Never use destructive reset/checkout against another
worktree.

## 2. Mandatory authority

Read completely before mutation:

1. `dummy_tcs@23a074b01dbca141ddc997113a6ecbbc14e19f82:docs/organization/charters/brand_payouts_recovery_systems_architect_charter_v1.md`
2. organization-wide Systems Architect and Local Codex/browser operating charters referenced there;
3. `dummy_tcs@3fb6b4246aa5f2ecb71c3bbfe99c56e395f30a92` Phase C architecture and finite plan;
4. `dummy_tcs@9c991a8e8c8dfc90ccc4cf18e48ab1629d5f5b4f` MVP cutline;
5. `dummy_tcs@634db2b0def32ca3b703fa9806d267b1d89dd7ef:docs/ai-collaboration/brand-payouts-v1-three-stage-superfast-wave-execution-amendment-v1.md`;
6. accepted Wave B deep plan:
   `dummy_tcs@bec420628c57d609f6ca1443f0f1ffe74cfe5d4d:docs/ai-collaboration/brand-payouts-v1-wave-b-deep-planning-and-dependency-matrix-v1.md`;
7. current execution ledger at or after
   `d1de67077dc45187a0c7fd39d69a3554241a3967`;
8. environment readiness evidence:
   `dummy_tcs@fc3187c18e908bee3b41b13a3116ae63037a99ad:docs/ai-collaboration/brand-payouts-recovery-execution-environment-readiness-v1.md`;
9. P3A acceptance checkpoint `67224e5f59175d7300af8984bc2bf8ec1da1d6cb`;
10. the three upstream handoffs below and C05 runtime acceptance/handoff needed
    to bind the destination/version readiness contract.

Do not redesign Product meaning or architecture.

## 3. Exact source and gate identities

Revalidate all identities from remote Git. Fail closed on any mismatch.

### BP-G05 — satisfied

```text
branch
= campaign/bp-g05-exact-net-terms-persistence

tested backend
= 2c390802a4cebd7e6ce5086c7609774b1ff3f3d1

accepted handoff / branch head
= 7901c7743ac1bb46b6ed4f74b768998dbebd28f4

handoff
= docs/ai-collaboration/campaign-bp-g05-exact-net-terms-persistence-handoff-v1.md
```

The acceptance commit must be the direct docs-only descendant of the tested
backend. Campaign and C04 are divergent descendants of
`4c5f42858b950b7cd342f8972f99f548f3daa942`; do not merge or cherry-pick the
Campaign branch. C04 already contains the bounded adapted correction.

### BP-G06 — satisfied

```text
branch
= c03/recovery-campaign-participation-v1

accepted backend / branch head
= aebeb85fd6bba37f88c3805c213c61e7f63b2f5f

accepted backend tree
= 86c5bb769598dd19a634dcd867350e53eaa06f75

durable handoff
= dummy_tcs@df32e63e4ca44de57b40be59167c300ecb886ddd
  docs/ai-collaboration/c03-post-p1-4-backend-handoff-v1.md
```

### BP-G08 — satisfied and canonical convergence base

```text
branch
= c04/shared-collaboration-backend-v1

tested runtime
= 373eaa382f555c376df78c0e95c72ff55cc43791

tested runtime tree
= bd5c3c9570adeeacf2f35df8c4a399637e7bd312

accepted handoff / branch head
= fc4d4b59e2a44d7ddced6bc5dde5119c501ec275

accepted handoff tree
= 083c52dc06c19a23f47491935b472ee5e62bd1c5

handoff
= docs/C04_BP_G08_BACKEND_HANDOFF_V1.md

migration count
= 84
```

Prove C03 `aebeb85f…` is an ancestor of C04 runtime `373eaa38…`, and that
C04 handoff `fc4d4b59…` is exactly one docs-only commit above that runtime.

### Accepted Payouts P3A inputs

```text
backend branch
= brand-payouts/v1-backend

backend head
= 12d235345e2748f676d36d61c62ed4bd9c049592

backend tree
= 1dd5900068aa7f7fa3aa25dcc0eaef33ee4d7e24

frontend branch
= brand-payouts/v1-frontend

frontend head
= 7c75a4c8f5a0df3a1fb82d2f707b1c6b03d56d2a

frontend tree
= 956bae22a91aeaf53733f9e913d500b9750577e2
```

Frontend is read-only in this assignment. Do not reopen or rerun P3A.

### BP-G04 / C05 downstream P5A readiness

```text
C05 backend
= 156d5834266077be7e2b6a2d459bae5489edbbd6

C05 frontend
= 323658d4b147b95b5629ff8d91fa90b8fe9077e4
```

Bind the exact payout-destination identity, version, currentness and readiness
contract now as a downstream P5A precondition. Do not implement P5A in this
assignment.

## 4. Consolidated readiness preflight

Complete the entire preflight before production-source mutation. Discover the
complete blocker set in one sweep, then resolve ordinary Class A/B items in
this runner and rerun only affected focused gates.

Prove and record:

### Git and convergence

- all supplied commits, trees, branch heads and ancestry;
- clean isolated authority/backend/frontend worktrees;
- C04 branch contains exactly 84 migrations;
- its first 79 C03 migrations are byte-for-byte unchanged from accepted C03;
- accepted C04 migrations are immutable;
- Campaign exact-term correction is already adapted on C04;
- a file-by-file Payouts port plan from `12d235…` to the C04 handoff tree;
- no wholesale merge, rebase or cherry-pick of any donor;
- no accepted P3A financial/security behavior is lost.

### PostgreSQL and Prisma

- repository-local Node/npm/toolchain versions and deterministic install;
- Prisma generate and validate;
- migration graph/order/checksums;
- fresh disposable UTC PostgreSQL replay 0→84;
- supported upgrade replay from the accepted 79-migration C03 state to 84;
- legacy-shaped upgrade evidence required by accepted C04;
- cleanup of owned databases/containers/volumes.

### Contract and acceptance-state reachability

Confirm exact local reachability for:

- C04 commercial agreement ID/version/hash and Brand/Campaign/Collaboration/
  Creator lineage;
- immutable reserve instruction ID/version/hash, caller-independent economics,
  fee, commission, GST, total reserve and INR currency;
- entitlement, refund entitlement, normal settlement eligibility, abnormal
  resolution/recovery authority and trusted confirmation seam;
- exact `NET_7`, `NET_15`, `NET_30`, `NET_45`, `NET_60`;
- fail-closed `IMMEDIATE`, unknown, missing or compatibility-only terms;
- C05 destination ID/version/currentness/readiness without exposing bank/KYC
  details to Brand Payouts;
- Owner, Finance Admin, Campaign Manager, unauthorized and cross-Brand actors;
- duplicates, replay, concurrency, idempotency, stale/superseded versions,
  shortfall and funding-resume;
- production provider-disabled behavior and a non-production-selectable
  deterministic fake boundary;
- zero provider network/mutation.

### Runtime and evidence

- build and full Nest AppModule startup/control shutdown capability;
- ports, workers/timers and deterministic shutdown;
- outbound/provider deny guards;
- evidence directories, SHA-256 indexing, changed-file/candidate secret scan;
- cleanup of processes, ports, databases, containers, files and sessions.

Do not use a broad browser matrix. Wave B is backend. Use the cheapest proof
that closes each invariant.

## 5. P4 Base convergence implementation

If and only if preflight is clean after bounded Class A/B correction:

1. Create or verify
   `brand-payouts/v1-backend-convergence` from exact C04 handoff
   `fc4d4b59e2a44d7ddced6bc5dde5119c501ec275`.
2. If that branch already exists, accept it only if its provenance and complete
   diff are exactly explainable under this assignment. Otherwise stop as an
   unresolved authority contradiction; do not overwrite it.
3. Reconcile accepted Payouts P0–P3A backend semantics from `12d235…`
   file-by-file.
4. Preserve C04 as the source of commercial agreement, reserve instruction,
   economics, entitlement, refund entitlement, eligibility and resolution
   truth.
5. Preserve Payouts ownership of Brand authorization, financial approval,
   reserve execution, payment due/obligation intake and provider-neutral
   downstream execution.
6. Never recompute C04 economics, infer missing terms, accept caller-authored
   amounts or create a second commercial/resolution truth.
7. Preserve Owner/Finance command authority, Campaign Manager read-only
   financial posture, cross-Brand isolation and fail-closed unknown states.
8. Preserve all 84 upstream migrations unchanged. Do not create, edit, apply or
   commit a Payouts M1 migration yet.
9. Add focused convergence/contract/security regressions needed to prove the
   new co-resident base.
10. Run focused tests, Prisma generate/validate, build, changed-file lint/format,
    schema diff and provider/secret guards. Do not run the final full Wave B
    suite yet.
11. Commit and push exactly one coherent
    `BP-P4-BASE-CONVERGENCE` durability checkpoint. Fetch it back and prove
    its tree.

Ordinary source conflicts, imports, DI/module wiring, test fixtures and narrow
non-semantic adapters are Class A/B. Fix them in this runner. A new Product
meaning, architecture ownership change, financial/RBAC weakening, heuristic
migration or unresolved upstream contradiction is Class C.

## 6. Exact M1 proposal — approval boundary

After the P4 Base commit is stable, regenerate the exact Payouts M1 proposal
against that exact tree.

Before BP-G10 approval:

- do not add a directory under `prisma/migrations`;
- do not commit a Prisma schema mutation for M1;
- do not apply M1 to any database;
- do not execute M1 DDL against PostgreSQL;
- do not push M1 application source.

Produce a reviewable proposal only:

1. exact unified Prisma schema delta against the P4 Base tree;
2. exact proposed SQL, with intended future canonical migration directory/path;
3. SHA-256 of the exact SQL bytes;
4. complete FK, unique/partial index, check, trigger, immutability and ordering
   delta;
5. explicit no-backfill policy, or exact proof if any non-mutating validation is
   needed;
6. rollback/forward-recovery plan;
7. PostgreSQL proof plan for fresh, 84→85 upgrade, concurrency, idempotency,
   cross-Brand, RBAC and exactly-one financial effect;
8. complete blocker set.

Store the exact proposal text in the authority/evidence repository on the
execution-ledger branch, never in the backend canonical migration graph.
Clearly label every proposal file `NOT_APPROVED_NOT_APPLIED`. A documentation
or evidence commit containing the proposal is allowed; an M1 migration/source
commit is not.

## 7. Evidence and ledger output

Persist compact evidence under `Piyush1087/dummy_tcs` on
`brand-payouts/v1-execution-ledger`:

- one consolidated preflight/P4 Base report;
- compact machine-readable command/test summary;
- hashes for reusable immutable evidence;
- exact P4 Base commit/tree/diff identity;
- exact M1 proposal and SQL hash;
- cleanup and zero-provider-action proof.

Update the existing execution ledger; do not create another planning artifact.
Do not duplicate P3A evidence.

## 8. Stop conditions

Return early only for:

- Product or material architecture change;
- destructive/heuristic migration requirement;
- unresolved upstream contradiction;
- financial/RBAC/cross-Brand authority change;
- provider Test/Live action;
- legal/tax gate;
- production/canonical merge authority;
- unrecoverable prepared-environment failure.

Otherwise continue through the exact M1 proposal.

## 9. Required terminal report

Return exactly:

```text
BRAND_PAYOUTS_BP_G10_M1_APPROVAL_REQUEST

PREFLIGHT_STATUS =
PREFLIGHT_EVIDENCE_COMMIT =
PREFLIGHT_EVIDENCE_TREE =

P4_BASE_STATUS =
P4_BASE_BACKEND_BRANCH =
P4_BASE_BACKEND_SHA =
P4_BASE_TREE =
P4_BASE_PARENT_SHA =
P4_BASE_CHANGED_FILES =

UPSTREAM_CONVERGENCE_PROOF =
C03_79_MIGRATIONS_UNCHANGED =
C04_84_MIGRATIONS_UNCHANGED =
P3A_BEHAVIOR_PRESERVATION =

MIGRATION_COUNT_BEFORE_M1 =

EXACT_M1_PRISMA_DELTA =
EXACT_M1_SQL_PATH =
EXACT_M1_SQL_SHA256 =
M1_COMMITTED_TO_BACKEND = NO
M1_APPLIED = NO

FK_INDEX_CHECK_TRIGGER_DELTA =
BACKFILL_POLICY =
ROLLBACK_FORWARD_RECOVERY =
POSTGRESQL_PROOF_PLAN =

FOCUSED_TESTS =
PRISMA_GENERATE_VALIDATE =
BUILD =
SECRET_SCAN =
PROVIDER_ACTIONS =
CLEANUP =

COMPLETE_BLOCKER_SET =
CLASS_C_BLOCKERS =

EVIDENCE_REPORT_PERMALINK =
M1_PROPOSAL_PERMALINK =
LEDGER_SHA =
RESULT = M1_HUMAN_APPROVAL_REQUIRED
```

Do not begin P4A until the Parent approves the exact SQL hash and Prisma delta.
