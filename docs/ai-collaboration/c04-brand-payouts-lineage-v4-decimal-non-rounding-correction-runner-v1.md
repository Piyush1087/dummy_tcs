# C04 — Brand Payouts Lineage V4 Decimal Non-Rounding Correction Runner V1

`C04_BRAND_PAYOUTS_LINEAGE_V4_DECIMAL_NON_ROUNDING_CORRECTION_RUNNER_V1`

Status: **AUTHORIZED — ONE BOUNDED PROPOSAL CORRECTION ONLY**

## 1. Disposition

The approved V3 SQL at SHA-256
`dc288af4135c876576d6662a18b13649ec47e609f4372d229df639e2ecebc804`
must not be committed or applied further.

Disposable PostgreSQL execution proved that the proposed
`confirmed_amount DECIMAL(14,2)` typmod rounds `125.251` to `125.25`
before the table CHECK observes the row. The transaction therefore commits
instead of failing closed.

This is a valid financial-DDL blocker.

V3 is superseded only for this bounded amount-storage/check design. Preserve
every other accepted V3 schema, runtime, replay, lineage, locking,
immutability and migration property unchanged.

## 2. Exact bindings

- C04 base SHA: `fc4d4b59e2a44d7ddced6bc5dde5119c501ec275`
- C04 base tree: `083c52dc06c19a23f47491935b472ee5e62bd1c5`
- migration count before correction: `84`
- V3 evidence commit: `ce3865ca5adb17063df5ef59824a3a97dfc4ede8`
- V3 evidence tree: `f8c4852a3cb84fa8d1ddb151608e2887571c21ca`
- V3 SQL SHA-256: `dc288af4135c876576d6662a18b13649ec47e609f4372d229df639e2ecebc804`
- V3 runtime patch SHA-256: `8cdf1280765ba48161abc7223fd6a073a2cc35c83aaa8d56df8da14aed0e4eed`
- V3 disposition: `SUPERSEDED_FOR_CONFIRMED_AMOUNT_DDL_ONLY`

## 3. Preserve completed evidence

Do not repeat the already-passing broad gates merely to create a new package:

- fresh 0→85 migration;
- upgrade 84→85 migration;
- Prisma format/validate/generate;
- TypeScript build;
- targeted tests 24/24;
- exact V3 SQL-hash verification.

Cite these as V3 execution evidence. Perform only focused static/proposal
validation required by the changed amount representation. Real PostgreSQL
execution of V4 remains prohibited until the new exact SQL receives human
approval.

## 4. Required correction

Produce one exact V4 proposal in which the database can observe the submitted
amount without a scale-reducing typmod having rounded it first.

The accepted economic domain remains:

- amount is positive;
- INR only;
- authoritative reserve amount is exact to at most two fractional decimal
  places;
- maximum accepted amount is exactly `999999999999.99`;
- no binary floating-point transport;
- no rounding or truncation;
- the persisted confirmation amount must equal the immutable reserve amount;
- canonical digest and replay comparison remain lossless and deterministic.

The database must reject, before commit and with zero mutation:

- `125.251`;
- any other non-zero fractional precision beyond two places;
- values above `999999999999.99`;
- zero and negative amounts;
- non-finite or non-numeric representations.

Use an exact PostgreSQL representation/check design. An unconstrained
`NUMERIC` with explicit positivity, magnitude and non-rounding fractional
precision checks is a likely minimal solution, but it is not automatically
accepted. If another design is chosen, prove it does not round before
validation.

Explicitly reconcile:

1. PostgreSQL storage type and evaluation order;
2. CHECK/trigger semantics, including TRUE/FALSE/UNKNOWN;
3. Prisma field/native-type representation;
4. future Prisma migration-diff/drift behavior;
5. runtime Zod input;
6. Prisma Decimal transport;
7. normalized digest representation;
8. replay numeric equality;
9. comparison with reserve `DECIMAL(14,2)`;
10. populated 84→85 upgrade behavior.

If exact unbounded PostgreSQL `NUMERIC` cannot be represented without
Prisma drift, select and prove the smallest safe repository-compatible seam.
Do not hide an unexplained schema/DDL mismatch.

## 5. Focused boundary matrix

The V4 proposal and post-approval proof plan must classify at least:

- `0`, `-0.01` → reject;
- `0.01`, `1`, `1.0`, `1.00` → exact accepted values after canonical normalization;
- `125.25` → accept;
- `125.250` → explicitly state the lexical/canonical policy and prove no financial-value rounding;
- `125.251` → reject;
- `125.2501` → reject;
- `999999999999.99` → accept;
- `1000000000000.00` → reject;
- extreme scale/precision inputs → reject without typmod rounding;
- exact replay under equivalent canonical amount → replay;
- changed economic amount → conflict;
- reserve mismatch → reject.

The database failure must roll back the confirmation row, C04 agreement
projection, event and any other domain mutation.

## 6. Authorized work

Authorized now:

- inspect the preserved disposable-PostgreSQL blocker evidence;
- prepare a new V4 SQL proposal, Prisma patch if required, and minimal runtime
  patch only if representation compatibility requires it;
- update only the amount-related crosswalk, truth table and proof plan;
- run focused static validation;
- hash, commit and push proposal/evidence artifacts;
- return one exact V4 human-approval request.

Not authorized:

- modify or commit backend source;
- create the real migration directory;
- apply V4 DDL to any database;
- rerun broad unrelated gates;
- provider, AWS, production or non-disposable database action;
- P4A, P4B or P5A;
- canonical merge.

## 7. Required return

```text
C04_BRAND_PAYOUTS_LINEAGE_MIGRATION_APPROVAL_REQUEST_V4

V3_DISPOSITION =
SUPERSEDED_FOR_CONFIRMED_AMOUNT_DDL_ONLY

V4_PROPOSAL_EVIDENCE_COMMIT =
V4_PROPOSAL_EVIDENCE_TREE =

C04_BASE_SHA =
fc4d4b59e2a44d7ddced6bc5dde5119c501ec275

MIGRATION_COUNT_BEFORE =
84

V4_SQL_PERMALINK =
V4_SQL_SHA256 =
V4_PRISMA_PATCH_PERMALINK =
V4_RUNTIME_PATCH_PERMALINK =
V4_RUNTIME_PATCH_SHA256 =

DATABASE_AMOUNT_REPRESENTATION =
PRE_CHECK_ROUNDING =
IMPOSSIBLE

POSITIVITY_BOUND =
UPPER_MAGNITUDE_BOUND =
FRACTIONAL_PRECISION_BOUND =
RESERVE_EQUALITY =
PRISMA_DDL_PARITY =
FUTURE_MIGRATION_DRIFT =
RUNTIME_DECIMAL_PARITY =
DIGEST_REPLAY_PARITY =
FOCUSED_BOUNDARY_MATRIX =
POPULATED_UPGRADE_STATIC_PROOF =
POST_APPROVAL_POSTGRESQL_PROOF_PLAN =

PRESERVED_V3_GATES =
COMPLETE_BLOCKER_SET =

BACKEND_SOURCE_LINEAGE_MIGRATION_CREATED =
NO
V4_DDL_APPLIED =
NO
PROVIDER_ACTIONS =
NONE

RESULT =
C04_LINEAGE_MIGRATION_V4_HUMAN_APPROVAL_REQUIRED
| CLASS_C_BLOCKED
```

Stop after this consolidated V4 proposal return.
