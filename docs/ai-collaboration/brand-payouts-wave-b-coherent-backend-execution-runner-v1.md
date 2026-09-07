# Brand Payouts — Wave B Coherent Backend Execution Runner V1

`BRAND_PAYOUTS_WAVE_B_COHERENT_BACKEND_EXECUTION_RUNNER_V1`

Status: **AUTHORIZED — SUPERFAST EXECUTION**

## 1. Activation

The C04 Brand Payouts lineage dependency is accepted:

- C04 base: `fc4d4b59e2a44d7ddced6bc5dde5119c501ec275`
- C04 final backend: `ec395bf5760b295dddd9c3f7e9c2f05485b6b743`
- C04 final tree: `69381dd46e05ce3cf9823ccd6754e6b303dbaa2d`
- migration 85:
  `20260911125000_c04_brand_payouts_reserve_entitlement_lineage`
- migration SQL SHA-256:
  `6e384abdaf7cf9fa35973ca31e1a5cb541f60bd328937ff3d27844b9dfdb4d72`
- C04 handoff:
  `docs/ai-collaboration/c04-brand-payouts-lineage-implementation-handoff.md`

The handoff proves fresh and populated migration, non-rounding decimal behavior,
two-connection replay, immutable lineage/supersession, RBAC/cross-Brand
isolation, rollback/retry, build and startup. No blocker remains.

Do not reopen P3A or C04.

Execute the remaining backend Wave B as one coherent runner:

```text
C04-final convergence
→ P4 Base rebind
→ Payouts M1
→ P4A first reserve
→ immediate PostgreSQL concurrency/idempotency/security proof
→ P4B instruction/due/obligation intake
→ P5A provider-neutral normal path
→ one stabilized full backend + migrated-PostgreSQL gate
→ one terminal handoff
```

No intermediate Parent approval is required.

## 2. Authorities

Read and follow:

- frozen Brand Payouts recovery charter:
  `23a074b01dbca141ddc997113a6ecbbc14e19f82`
- three-stage superfast amendment:
  `634db2b0def32ca3b703fa9806d267b1d89dd7ef`
- standing bounded financial execution authority:
  `e349ab1716b06e49cb430158d9c2bc19e89980ed`
- accepted Wave B deep plan and existing execution ledger;
- Product authority:
  `f15a91d0ace8b2c424a539d79dbb120869233105`
- Phase C architecture/finite plan:
  `3fb6b4246aa5f2ecb71c3bbfe99c56e395f30a92`
- MVP cutline:
  `9c991a8e8c8dfc90ccc4cf18e48ab1629d5f5b4f`.

Standing authority controls execution packaging. Fix ordinary Class A and
bounded Class B defects in this runner. Do not stop for migration hashes,
Prisma drift, focused test failures, concurrency defects, or bounded additive
DDL corrections inside frozen semantics.

## 3. Exact dependency bindings

- Campaign tested backend:
  `2c390802a4cebd7e6ce5086c7609774b1ff3f3d1`
- Campaign acceptance:
  `7901c7743ac1bb46b6ed4f74b768998dbebd28f4`
- C03 accepted backend:
  `aebeb85fd6bba37f88c3805c213c61e7f63b2f5f`
- C03 handoff:
  `df32e63e4ca44de57b40be59167c300ecb886ddd`
- C04 final backend:
  `ec395bf5760b295dddd9c3f7e9c2f05485b6b743`
- C05 backend destination/version authority:
  `156d5834266077be7e2b6a2d459bae5489edbbd6`
- C05 frontend reference only:
  `323658d4b147b95b5629ff8d91fa90b8fe9077e4`
- accepted P3A backend:
  `12d235345e2748f676d36d61c62ed4bd9c049592`
- accepted P3A frontend:
  `7c75a4c8f5a0df3a1fb82d2f707b1c6b03d56d2a`
- P3A checkpoint:
  `67224e5f59175d7300af8984bc2bf8ec1da1d6cb`
- prior P4 Base candidate:
  `5dc9eef4923ae383b94b36cbf9bbb632b1b84cf1`
- prior P4 Base tree:
  `6c01d65e5a32eecfcd7e42715923ea8478d071fb`
- common parent of prior P4 Base and C04 lineage:
  `fc4d4b59e2a44d7ddced6bc5dde5119c501ec275`.

Revalidate remote identities before mutation. C04 migration count is now 85;
the Payouts migration is therefore the next additive migration, expected 86.

## 4. Clean convergence

Use a clean isolated worktree.

Create a bounded Wave B branch from exact C04 final
`ec395bf5760b295dddd9c3f7e9c2f05485b6b743`. Preserve the existing
`brand-payouts/v1-backend-convergence` branch at
`5dc9eef4923ae383b94b36cbf9bbb632b1b84cf1` as immutable recovery evidence.

Reapply/reconcile the accepted P4 Base delta from
`fc4d4b59… → 5dc9eef…` onto C04 final. Do not wholesale-merge an unrelated
donor and do not lose migration 85 or C04 runtime behavior.

Resolve the complete overlap set in one pass. Prove:

- C04 final is the new ancestry base;
- all 85 migrations remain byte-identical;
- accepted P3A backend behavior remains present;
- prior P4 Base semantics are preserved or deliberately superseded by the
  exact accepted C04 lineage;
- no compatibility shim for obsolete C04 contracts is introduced.

Commit the reconverged P4 Base as an internal durability marker and continue.

## 5. Payouts M1 and P4A

Regenerate Payouts M1 from the reconverged tree. V1–V4 proposal artifacts are
historical evidence only; do not copy them blindly.

Implement the smallest additive schema required for the provider-disabled
normal path. Preserve:

- server-owned monetary amounts and state transitions;
- immutable requester/approver audit tuples;
- exact C04 reserve/confirmation/entitlement lineage;
- append-only obligation/attempt/receipt evidence;
- one successful financial effect;
- Owner/Finance command authority;
- Campaign Manager read-only operational visibility;
- cross-Brand isolation;
- legacy null/fail-closed behavior without inferred backfill;
- no caller-authored economics;
- no provider action.

After the first Owner/Finance reserve path exists, immediately run targeted
disposable-PostgreSQL proof for:

- concurrent same-command replay;
- changed-payload idempotency conflict;
- exactly one reserve/approval/financial effect;
- insufficient available balance;
- RBAC and cross-Brand denial;
- transaction rollback;
- C04 current lineage and supersession;
- server-derived economics independent of caller input.

Fix failures in the same runner and continue.

## 6. P4B and P5A backend

Complete P4B instruction, due-date and obligation intake, then P5A
provider-neutral normal path.

Required invariants include:

- only exact C04 normal Creator-entitlement authority creates an obligation;
- due date is server-calculated from immutable `settlementEligibleAt`;
- accepted terms are exactly NET_7, NET_15, NET_30, NET_45 and NET_60;
- term interpretation uses Asia/Kolkata and persists an immutable UTC instant;
- IMMEDIATE remains fail-closed;
- obligation, transfer creation, observation and settlement remain distinct;
- C05 destination ID/version mapping is exact, current and Creator-owned;
- unsupported geography/rail and missing setup remain fail-closed;
- no provider credential or mutation is needed for provider-neutral states;
- transfer/receipt/reconciliation evidence is immutable and idempotent;
- replay, retry, supersession and crash recovery produce no duplicate
  financial effect;
- no TDS calculation/display/export is introduced;
- no generalized recovery/support/provider abstraction without an MVP
  consumer.

Use focused module/contract/PostgreSQL tests at internal semantic boundaries.
Internal commits are rollback markers, not Parent checkpoints.

## 7. Consolidated terminal gate

After source stabilizes, run once:

- Prisma format/validate/generate and migration-status checks;
- fresh 0→86 and populated 85→86 disposable-PostgreSQL migration proof;
- full backend test suite;
- lint/typecheck/build as repository-standard;
- built Nest AppModule startup and controlled shutdown;
- authenticated Owner, Finance, Campaign Manager, unauthorized and cross-Brand
  paths;
- provider/network deny guard and zero provider action;
- migrated PostgreSQL provider-disabled normal-path acceptance;
- secret scan, evidence hashing, fetch-back and cleanup.

Do not rerun the broad suite after unrelated documentation-only changes.

## 8. Decision register and evidence

Maintain a compact terminal decision register. Classify material decisions as:

- `MVP_LAUNCH_REQUIRED`;
- `FINANCIAL_SAFETY_REQUIRED`;
- `UPSTREAM_DEPENDENCY_REQUIRED`;
- `DEFERRED_POST_MVP`.

Record issue, chosen correction, relevant alternative only when material,
source/migration SHA, proof and residual risk. This is end-of-wave reporting,
not retrospective approval.

Reuse immutable P3A, preflight and C04 evidence when their source/environment
inputs are unchanged. Do not duplicate large packages.

## 9. Stop conditions

Return early only for:

- changed Product meaning or financial economics;
- material architecture/ownership change;
- destructive migration or inferred financial backfill;
- changed RBAC/cross-tenant security authority;
- irreconcilable accepted-upstream contradiction;
- provider/Test/Live action;
- legal/tax decision;
- non-disposable database, AWS, production, canonical merge/deployment;
- unrecoverable prepared-environment failure.

## 10. Excluded scope

- frontend Wave C;
- P3A reopening;
- P3S support;
- generalized P4R/P5R recovery;
- provider-enabled P6;
- AWS/production;
- canonical merge/deploy.

## 11. Required terminal return

```text
BRAND_PAYOUTS_WAVE_B_BACKEND_COMPLETE

RESULT =
COMPLETE | GENUINE_CLASS_C_BLOCKED

WAVE_B_BRANCH =
C04_ACCEPTED_BASE_SHA =
P4_BASE_RECONVERGED_SHA =
P4_BASE_RECONVERGED_TREE =
PAYOUTS_M1_IDENTITY =
PAYOUTS_M1_SQL_SHA256 =
FINAL_BACKEND_SHA =
FINAL_BACKEND_TREE =
MIGRATION_COUNT =

P4A_FIRST_RESERVE =
POSTGRESQL_CONCURRENCY_IDEMPOTENCY_SECURITY =
P4B_INSTRUCTION_DUE_OBLIGATION =
P5A_PROVIDER_NEUTRAL_NORMAL_PATH =
FRESH_AND_POPULATED_MIGRATIONS =
FULL_BACKEND_SUITE =
BUILD_STARTUP =
AUTH_RBAC_CROSS_BRAND =
PROVIDER_NETWORK_GUARD =
PROVIDER_ACTIONS =
NON_DISPOSABLE_DATABASE_MUTATION =

DECISION_REGISTER_PERMALINK =
EVIDENCE_REPORT_PERMALINK =
COMPLETE_BLOCKER_SET =
DEFERRED_SCOPE =
```

Return once at Wave B completion. Do not return for routine checkpoint status.
