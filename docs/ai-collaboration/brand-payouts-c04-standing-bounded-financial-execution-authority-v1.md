# Brand Payouts / C04 — Standing Bounded Financial Execution Authority V1

`BRAND_PAYOUTS_C04_STANDING_BOUNDED_FINANCIAL_EXECUTION_AUTHORITY_V1`

Status: **PARENT AUTHORIZED**

## 1. Purpose

The prior proposal-by-proposal and exact-SQL-hash approval loop is superseded.

Brand Payouts and its bounded C04 reserve/entitlement dependency must now execute
like a normal module inside the frozen Product and architecture envelope.

Financial correctness remains mandatory. Financial-module location alone is not
a reason to stop, return to Parent, create a new proposal version, or issue a
new Codex assignment.

## 2. Standing authority

The Cloud SA and the coherent external Local Codex runner are authorized to:

```text
inspect
→ reconcile the complete bounded defect set
→ design the smallest safe correction
→ modify schema/runtime/tests
→ create or revise additive migrations
→ apply migrations only to disposable PostgreSQL
→ run focused proofs
→ correct ordinary failures
→ continue the same execution wave
→ run the consolidated wave gate
→ commit/push durability checkpoints
→ produce one terminal report
```

This standing authority includes ordinary Class A and bounded Class B defects
inside the frozen design, including:

- SQL typmod/check-order defects;
- precision/scale representation corrections;
- Prisma↔DDL parity corrections;
- additive constraints, indexes, triggers and relations required by already
  frozen invariants;
- migration-runner compatibility;
- concurrency, replay and idempotency defects;
- bounded transaction/locking corrections;
- test harness and fixture defects;
- focused runtime integration corrections.

No new Parent approval or exact-hash approval is required for these corrections.

## 3. Current C04 continuation

Continue from:

- C04 base SHA:
  `fc4d4b59e2a44d7ddced6bc5dde5119c501ec275`
- C04 base tree:
  `083c52dc06c19a23f47491935b472ee5e62bd1c5`
- migration count before lineage correction: `84`
- V3 evidence:
  `ce3865ca5adb17063df5ef59824a3a97dfc4ede8`
- superseded V3 SQL:
  `dc288af4135c876576d6662a18b13649ec47e609f4372d229df639e2ecebc804`
- reproduced blocker:
  `DECIMAL(14,2)` rounded `125.251` to `125.25` before the CHECK.

Do not create another approval proposal.

Correct the amount representation so validation observes the submitted numeric
value before any scale-reducing coercion. Preserve positivity, exact two-decimal
economic precision, the maximum `999999999999.99`, reserve equality, lossless
digest/replay behavior and Prisma compatibility.

Then continue immediately through:

1. source/schema/migration implementation;
2. fresh 0→85 disposable-PostgreSQL replay;
3. populated 84→85 disposable upgrade;
4. direct-SQL negative matrix;
5. concurrency, replay and idempotency;
6. reserve/confirmation/entitlement lineage;
7. RBAC and cross-Brand isolation;
8. rollback and retry;
9. focused tests, build and startup as relevant;
10. commit, push, fetch-back and C04 handoff.

Reuse already-valid V3 evidence where inputs are unchanged. Do not rerun broad
gates merely because the amount representation changed.

Ordinary defects found during these gates must be fixed in the same runner and
retested with the lowest sufficient proof.

## 4. Brand Payouts continuation

Once the corrected C04 implementation and handoff are durable and accepted by
the Cloud SA, continue Brand Payouts Wave B without a new Parent checkpoint:

```text
revalidate C04 handoff
→ regenerate Payouts M1 from the converged tree
→ implement the additive Payouts migration
→ P4A
→ immediate PostgreSQL concurrency/idempotency/security proof
→ P4B
→ P5A backend
→ one stabilized full backend + migrated PostgreSQL gate
```

The same standing Class A/B authority applies to the Payouts migration and
backend wave. Exact internal commits remain durability markers, not approvals.

## 5. Genuine stop conditions

Return before terminal completion only for a genuine Class C boundary:

- changed Product meaning or financial entitlement/economics;
- material architecture or ownership change;
- destructive migration, inferred backfill, or non-recoverable data rewrite;
- weakening or changing RBAC/cross-Brand security authority;
- unresolved contradiction between accepted upstream authorities;
- provider credentials, provider mutation, Test/Live provider action;
- non-disposable database, AWS or production action;
- legal/tax decision;
- canonical merge/deployment authority;
- unrecoverable prepared-environment failure.

A failed test, DDL bug, rounding defect, ordinary concurrency bug, Prisma drift,
or migration correction inside the frozen design is not a Parent stop.

## 6. End-of-wave decision register

Do not narrate intermediate proposal versions or routine progress.

At the C04 handoff and at the final Wave B return, include a concise decision
register. For every material decision record:

- issue discovered;
- classification:
  `MVP_LAUNCH_REQUIRED`,
  `FINANCIAL_SAFETY_REQUIRED`,
  `UPSTREAM_DEPENDENCY_REQUIRED`, or
  `DEFERRED_POST_MVP`;
- chosen correction;
- rejected alternative only where materially relevant;
- source/migration/evidence SHA;
- proof executed;
- residual risk or deferred scope.

The register is reporting and audit evidence, not retrospective approval.

## 7. Boundaries unchanged

Still prohibited:

- provider action;
- non-disposable database mutation;
- AWS or production action;
- canonical merge/deployment;
- P3A reopening;
- P3S;
- generalized P4R/P5R recovery;
- provider-enabled P6;
- work without an MVP or financial-safety consumer.

## 8. Next expected return

Return once with:

```text
C04_BRAND_PAYOUTS_LINEAGE_IMPLEMENTATION_HANDOFF

RESULT =
COMPLETE | GENUINE_CLASS_C_BLOCKED

C04_BASE_SHA =
C04_FINAL_BACKEND_SHA =
C04_FINAL_TREE =
MIGRATION_85_IDENTITY =
MIGRATION_SQL_SHA256 =

DECIMAL_NON_ROUNDING_PROOF =
FRESH_0_TO_85 =
POPULATED_84_TO_85 =
CONCURRENCY_REPLAY_IDEMPOTENCY =
LINEAGE_AND_SUPERSESSION =
RBAC_CROSS_BRAND =
ROLLBACK_RETRY =
FOCUSED_TESTS_BUILD_STARTUP =
PROVIDER_ACTIONS =
NON_DISPOSABLE_DATABASE_MUTATION =

DECISION_REGISTER_PERMALINK =
C04_HANDOFF_PERMALINK =
COMPLETE_BLOCKER_SET =
```

Do not stop for another migration approval request.
