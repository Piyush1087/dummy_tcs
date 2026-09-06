# Brand Payouts — Wave B Consolidated Readiness and Execution Activation V1

`BRAND_PAYOUTS_WAVE_B_CONSOLIDATED_READINESS_AND_EXECUTION_ACTIVATION_V1`

Status: **PARENT AUTHORIZED**

Do not reopen P3A. Do not create another planning artifact. The accepted Wave B deep plan remains authoritative.

## Closed upstream gates

```text
BP-G05 = SATISFIED
Campaign tested backend = 2c390802a4cebd7e6ce5086c7609774b1ff3f3d1
Campaign acceptance = 7901c7743ac1bb46b6ed4f74b768998dbebd28f4

BP-G06 = SATISFIED
C03 accepted backend = aebeb85fd6bba37f88c3805c213c61e7f63b2f5f
C03 handoff = df32e63e4ca44de57b40be59167c300ecb886ddd

BP-G08 = SATISFIED
C04 tested runtime = 373eaa382f555c376df78c0e95c72ff55cc43791
C04 handoff = fc4d4b59e2a44d7ddced6bc5dde5119c501ec275
C04 handoff tree = 083c52dc06c19a23f47491935b472ee5e62bd1c5
C04 migration count = 84
```

## Exact Payouts heads to revalidate

```text
P3A checkpoint = 67224e5f59175d7300af8984bc2bf8ec1da1d6cb
backend branch = brand-payouts/v1-backend
expected backend head = 12d235345e2748f676d36d61c62ed4bd9c049592
frontend branch = brand-payouts/v1-frontend
expected frontend head = 7c75a4c8f5a0df3a1fb82d2f707b1c6b03d56d2a
```

Also bind the exact C05 downstream destination/version readiness before P5A:

```text
C05 backend = 156d5834266077be7e2b6a2d459bae5489edbbd6
C05 frontend = 323658d4b147b95b5629ff8d91fa90b8fe9077e4
```

## Authorized sequence

Run the already-planned sequence:

```text
ONE consolidated Wave B execution-readiness preflight
→ resolve the complete preflight blocker set
→ if PASS, proceed directly to P4 Base convergence
→ regenerate exact Payouts M1 from the converged tree
→ STOP for exact BP-G10/M1 Parent approval
```

After M1 approval, continue the same coherent backend wave:

```text
P4A first Owner/Finance reserve
→ immediate PostgreSQL concurrency/idempotency/security proof
→ P4B instruction/due/obligation intake
→ P5A provider-neutral normal path
→ one full backend and migrated-PostgreSQL normal-path gate
```

Internal commits are durability markers, not new Parent approvals.

## Consolidated preflight requirements

Prove in one lane:

- exact Git heads, trees, ancestry, clean worktrees, and convergence strategy;
- no wholesale donor merge and no loss of accepted Payouts P3A work;
- exact 84-migration C04 tree with all 79 C03 migrations unchanged;
- fresh and upgrade PostgreSQL reachability;
- Prisma schema/client and migration graph;
- C04 agreement/reserve/entitlement/recovery/confirmation contract availability;
- all five exact NET terms and fail-closed `IMMEDIATE`;
- C05 destination/version readiness for P5A;
- Node/npm/toolchain, build, startup, ports, workers/timers, and provider/network deny guards;
- fixtures, auth, Owner/Finance/Campaign Manager RBAC, cross-Brand isolation;
- concurrency, idempotency, replay, supersession, and caller-independent economics;
- evidence destinations, hashing, secret scan, cleanup;
- complete acceptance-state reachability;
- complete blocker set, not one-at-a-time failure discovery.

Use the external Local Codex runner when repository implementation, PostgreSQL/Docker, or long runtime evidence requires it. Cloud SA owns authority, sequencing, review, and circuit breakers. Absence of an internally callable Local Codex tool is not an execution-route blocker.

## Scope boundaries

```text
AUTHORIZED NOW =
PREFLIGHT + P4_BASE_CONVERGENCE

NOT AUTHORIZED BEFORE BP-G10 =
NEW PAYOUTS M1 CREATION/APPLICATION/COMMIT

NOT IN CURRENT WAVE =
FRONTEND WAVE C
PROVIDER-ENABLED P6
P3S SUPPORT
P4R/P5R GENERALIZED RECOVERY
PRODUCTION OR AWS
CANONICAL MERGE/DEPLOY
```

Accepted upstream migrations may be converged as immutable history; do not edit them. Payouts must not recompute C04 economics, infer missing terms, or accept caller-authored amounts.

## Circuit breakers

Return to Parent only for:

- exact BP-G10/M1 approval;
- Product or material architecture change;
- destructive/heuristic migration;
- unresolved upstream contradiction;
- financial/RBAC/cross-tenant security authority change;
- provider/Test/Live action;
- legal/tax gate;
- production/canonical merge authority;
- unrecoverable prepared-environment failure.

Resolve ordinary Class A defects and bounded Class B corrections within the same authorized lane.

## Required next Parent return

If preflight passes, do not return merely to narrate it. Proceed through P4 Base and return:

```text
BRAND_PAYOUTS_BP_G10_M1_APPROVAL_REQUEST

P4_BASE_STATUS =
P4_BASE_BACKEND_SHA =
P4_BASE_TREE =
UPSTREAM_CONVERGENCE_PROOF =
MIGRATION_COUNT_BEFORE_M1 =
EXACT_M1_PRISMA_DELTA =
EXACT_M1_SQL_PATH =
EXACT_M1_SQL_SHA256 =
FK_INDEX_CHECK_TRIGGER_DELTA =
BACKFILL_POLICY =
ROLLBACK_FORWARD_RECOVERY =
POSTGRESQL_PROOF_PLAN =
COMPLETE_BLOCKER_SET =
```

If a genuine Class C blocker occurs first, return that exact blocker with preserved evidence.
