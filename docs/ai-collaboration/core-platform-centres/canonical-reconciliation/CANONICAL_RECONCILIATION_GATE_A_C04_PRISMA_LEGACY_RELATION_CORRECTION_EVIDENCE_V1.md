# Canonical Reconciliation Gate A C04 Prisma Legacy-Relation Correction Evidence V1

## Result

```text
RESULT = READY_FOR_PARENT_REVIEW
BOUNDARY = ISOLATED_GATE_A_BACKEND_PRISMA_LEGACY_RELATION_CORRECTION
PARENT_ACCEPTANCE = 44af36402456825416935d03043d903025444c8c
BACKEND_BASE = b14afa38fb82155ea155beeae2430a1854c089a3
BACKEND_CORRECTION_COMMIT = 36f9142c553af6eeecacc03977853951b7246b77
BACKEND_CORRECTION_TREE = ae7c1e6f507acf43da3e9406a5de429f01ff0081
CORRECTED_SCHEMA_BLOB = 8d5833ca756b837cdaaafdc4fe9c746676d63d8a
```

No Gate B C06 candidate, frontend source, migration, database authority,
provider integration, financial behavior, Campaign Objective source, deployment,
or paused lane was changed.

## Telemetry

```text
RUN_STARTED_AT_UTC = 2026-09-17T10:57:20.4946603+00:00
EVIDENCE_CAPTURED_AT_UTC = 2026-09-17T11:19:27.1049132+00:00
ELAPSED_TO_EVIDENCE_CAPTURE_SECONDS = 1326.610
ACTIVE_EXECUTION_SECONDS = NOT_MEASURABLE
COMMAND_COUNT = NOT_MEASURABLE
LONGEST_COMMAND = npm test
LONGEST_COMMAND_SECONDS = 439.90
WAITING_OR_BLOCKED_SECONDS = NOT_MEASURABLE
C06_CANDIDATE_PRESERVATION_SECONDS = NOT_MEASURABLE
INTEGRITY_SECONDS = NOT_MEASURABLE
CORRECTION_SECONDS = NOT_MEASURABLE
POSTGRESQL_SECONDS = NOT_MEASURABLE
BACKEND_VALIDATION_SECONDS = NOT_MEASURABLE
PUBLICATION_SECONDS = NOT_MEASURABLE
```

Final completion time and publication/fetch-back objects are recorded in the
runner's final report because they occur after this immutable evidence blob is
created.

## Immutable integrity

- Parent acceptance commit: `44af36402456825416935d03043d903025444c8c`
- Parent acceptance tree: `8632135285d3593b3b9ec244547c48386a99aa93`
- Parent acceptance publication blob: `c2eb4717310d1e913363346734148382118654e5`
- Gate A backend base/tree: `b14afa38fb82155ea155beeae2430a1854c089a3` / `f55aa0b28661ce265ba568261eb951ab78b8b26d`
- Base Prisma schema blob: `da08f8e8518a67b05b58396cf9069481bde76425`
- Migration count/subtree: `106` / `3894d6d2009fdbdf6bce94708d955c24cf5804ce`
- Both publication branch names were absent locally/remotely before branch creation.
- Required objects were fetched by immutable SHA/direct URL into isolated refs;
  mirror-style broad fetches were not used.

## Exact correction

The correction commit has sole parent
`b14afa38fb82155ea155beeae2430a1854c089a3` and changes only
`prisma/schema.prisma`.

Exactly these declarations were removed:

```prisma
collaborationExecutions CollaborationDeliverableExecution[]
uceBriefDeliverable   UceBriefDeliverable? @relation(fields: [uceBriefDeliverableId], references: [id])
uceBriefDeliverableId String?
```

The canonical relation remains byte-for-byte:

```prisma
sourceBriefDeliverableId String                    @map("source_brief_deliverable_id")
sourceBriefDeliverable   CanonicalBriefDeliverable @relation(fields: [sourceBriefDeliverableId], references: [id], onDelete: Restrict)
```

Final changed-path count is one. No generated or lock file changed. Migration
count, files, checksums, and subtree remain unchanged.

## Prisma and PostgreSQL proof

Commands completed successfully using repository Prisma `6.19.3`:

```text
npm ci
npm run prisma:generate
npx prisma format
npx prisma validate
npx prisma migrate deploy
```

The formatter was executed. Its one adjacent blank-line deletion was reverted,
leaving only the three authorized field deletions; subsequent generate,
validation, migration, build, and test runs parsed the final schema.

A new loopback-only `postgres:16-alpine` container was used in UTC and removed
after validation. The primary clean database reported:

```text
PostgreSQL = 16.15
TimeZone = UTC
Migrations = 106 total | 106 unique | 0 unfinished | 0 rolled back
Relevant columns = source_brief_deliverable_id only
```

Neither `uceBriefDeliverableId` nor `uce_brief_deliverable_id` existed. With the
corrected generated client, both a default-scalar
`collaborationDeliverableExecution.findMany` and an include of the canonical
`sourceBriefDeliverable` relation succeeded.

Whole-schema diff tooling exposes accepted pre-existing Gate A drift. A direct
base-versus-corrected comparison proved the outputs are otherwise identical:
the correction removes exactly these two proposed drift operations and adds no
new operation:

```text
[+] Added column `uceBriefDeliverableId`
[+] Added foreign key on columns (uceBriefDeliverableId)
```

Thus there is no correction-introduced or unexplained delta. No `prisma db push`
or database rewrite was used.

## Validation evidence

```text
Focused non-database C04/Brand Payout/Creator Home: 9 files, 64 tests passed
C04 PostgreSQL runtime: 1 file, 6 tests passed
Brand Payout PostgreSQL normal path: 1 file, 3 tests passed
Campaign readiness: 4 files, 28 tests passed
Full backend: 322 files passed, 93 skipped; 7240 tests passed, 954 skipped
Backend lint: PASS
Backend build: PASS
Intelligence contract verification: PASS
Prisma generate: PASS
Prisma validate: PASS
```

The intelligence verifier was ultimately run in its repository-required form
against a clean detached authority checkout at
`bbb0be3345c36e9cc7c4f06ca68fb491b742b83f`, with all independently pinned
authority commits present. The initial short invocation failed only for missing
required CLI arguments; a backend-source invocation then failed because it was
not the authority checkout. The correct authoritative invocation verified all
contract bundles without changing tracked files.

Provider diagnostics observed during unit tests were mocked failure-path tests.
No provider credential was supplied and no live provider call was made. The only
financial writes were fixture setup inside the disposable PostgreSQL databases.

## C06 candidate continuity

The candidates were inspected read-only before correction and again after
backend publication. Bases, sorted manifests, binary patches, and every
computable worktree blob were identical.

```text
BACKEND_CANDIDATE_PATH = C:\cx\gateb-c06-backend
BACKEND_CANDIDATE_BASE = b14afa38fb82155ea155beeae2430a1854c089a3
BACKEND_CHANGED_PATHS = 24
BACKEND_MANIFEST_SHA256 = c8a7c9c55528848caba1cfb644d45e5f2c5dd8a63580b4e16547ea41fe3e3bb7
BACKEND_PATCH_SHA256 = 0393deecac8bf3e0232c3be39a9d3d4176159ba04f5a46c277d345d46037452f

FRONTEND_CANDIDATE_PATH = C:\cx\gateb-c06-frontend
FRONTEND_CANDIDATE_BASE = bdd03e036ccd981fbfc573b58815fd277b9d757c
FRONTEND_CHANGED_PATHS = 15
FRONTEND_MANIFEST_SHA256 = 506d2282f4f51c819d9dd94240c38c3423f3db3c839234dfd6a41a4857f57384
FRONTEND_PATCH_SHA256 = 15a3a319da59a88a374479b27b21b26b2cb8663db8b6d960766c83dfa0c63ca3
```

No install, formatter, test, stash, clean, reset, restore, checkout, commit, or
source mutation was performed in either candidate worktree.

## Backend publication

```text
BRANCH = correction/canonical-reconciliation-gate-a-c04-prisma-legacy-relation-v1
COMMIT = 36f9142c553af6eeecacc03977853951b7246b77
PARENT = b14afa38fb82155ea155beeae2430a1854c089a3
TREE = ae7c1e6f507acf43da3e9406a5de429f01ff0081
CHANGED_PATH = prisma/schema.prisma
SCHEMA_BLOB = 8d5833ca756b837cdaaafdc4fe9c746676d63d8a
MIGRATION_COUNT = 106
MIGRATION_SUBTREE = 3894d6d2009fdbdf6bce94708d955c24cf5804ce
PUSH = PASS_WITHOUT_FORCE
DIRECT_URL_FETCH_BACK = PASS
```

## Exclusions and next boundary

The disposable databases/container were removed. Gate B C06 was not resumed.
No Campaign Objective convergence, final canonical publication, deployment, or
paused workstream was started.

The next boundary is Parent review of this isolated correction. A later Parent
authorization may define how the preserved C06 candidate is rebased or rebuilt
onto the corrected immutable backend base.
