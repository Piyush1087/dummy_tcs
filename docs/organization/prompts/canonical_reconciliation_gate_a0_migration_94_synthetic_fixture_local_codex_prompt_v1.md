# Local Codex Prompt — Canonical Reconciliation Gate A0: Authorized Synthetic Migration-94 Fixture V1

## Role and authorization

You are the Local Codex execution worker for a narrowly bounded canonical-reconciliation infrastructure task.

This prompt authorizes **Gate A0 only**:

1. design an authoritative, deterministic, fully synthetic populated PostgreSQL fixture for the exact migration-94 backend freeze;
2. verify that it can populate and be restored into a disposable database at migration 94;
3. publish the fixture on a dedicated non-runtime backend test-infrastructure branch;
4. publish immutable authority evidence on a dedicated authority branch.

This prompt does **not** authorize:

- rerunning canonical reconciliation Gate A;
- applying migrations 95–106 to the populated fixture;
- creating the main backend, frontend, or authority reconciliation branches;
- transplanting any accepted module;
- implementing C06 or Campaign Objectives;
- changing Product or architecture decisions;
- modifying an accepted migration;
- using production, staging, shared, customer, or provider data;
- provider calls, deployment, or resuming Campaign Performance or Applicant AI Match.

Stop at the Gate A0 Parent-review boundary.

## Why this gate exists

The preceding Gate A execution returned:

```text
CANONICAL_RECONCILIATION_GATE_A_RESULT = CIRCUIT_BREAKER
CIRCUIT_BREAKER = GATE_A_RUNTIME_INFRASTRUCTURE_BLOCKER
BLOCKER = IMMUTABLE_SANITIZED_POPULATED_MIGRATION_94_FIXTURE_REQUIRED
```

All immutable source/checkpoint checks completed before the stop passed. Static migration inspection confirmed exactly twelve additive migrations from 94 to 106 with no removals or edits to the historical 94. The missing artifact is an authorized populated migration-94 fixture for the later independent `94 → 106` runtime-upgrade proof.

For this task, “sanitized” means **entirely synthetic**. Do not inspect, request, copy, transform, or infer any production/customer database data.

## Repositories

- Authority: `Piyush1087/dummy_tcs`
- Backend: `Piyush1087/creator-commerce-backend-v2-clone`
- Frontend: `Piyush1087/creator-commerce-frontend-v2-clone` — read-only if needed; no frontend change is authorized.

Use fresh clones or clean isolated worktrees. Fetch all advertised refs before analysis.

## Controlling immutable identities

### Acceptance authority

```text
REGISTER =
docs/ai-collaboration/core-platform-centres/CORE_PLATFORM_CENTRES_CONSOLIDATED_ACCEPTANCE_REGISTER_V2.md

REGISTER_COMMIT =
346ae2a5ec58506870036db832223c996311fc29

REGISTER_TREE =
215528f9b1e077f576ef29e5b61119b08d398107

REGISTER_BLOB =
c9e0343794aad4a46e27882b58b98381dd4c9dcf
```

Verify the commit, tree, path, and blob before mutation.

### Exact migration-94 backend freeze

```text
BACKEND_FREEZE_REF =
freeze/mvp-canonical-application-v1

BACKEND_FREEZE_SHA =
129b291ecbca4a1e79451215a81726000cfb5bff

BACKEND_FREEZE_TREE =
9fe6585addf8d8ccee9973b9b55cc0312c6e2b0b

EXPECTED_MIGRATION_COUNT =
94
```

The fixture branch must be created from this exact commit, only after local fixture validation succeeds.

### Gate A target context — read-only

```text
BACKEND_MEDIA_KIT_TARGET_SHA =
da1d19d15198699465040c32ce075b6be1c85faf

BACKEND_MEDIA_KIT_TARGET_TREE =
560e2b90e95c3456ac7eef7ce9351861ab04a576

EXPECTED_TARGET_MIGRATION_COUNT =
106
```

This target may be inspected only to derive the migration 95–106 coverage matrix. Do not modify it and do not run its migrations against the populated fixture in Gate A0.

## Required publication targets

Create these branches only after all pre-publication checks pass and only if they do not already exist:

```text
BACKEND_FIXTURE_BRANCH =
test-infra/canonical-reconciliation-migration-94-fixture-v1

BACKEND_FIXTURE_BASE =
129b291ecbca4a1e79451215a81726000cfb5bff

AUTHORITY_EVIDENCE_BRANCH =
reconcile/mvp-canonical-application-v1-fixture-a0-authority

AUTHORITY_EVIDENCE_BASE =
346ae2a5ec58506870036db832223c996311fc29
```

If either target branch already exists, stop without moving, force-updating, deleting, or replacing it. Report its current tip and request Parent review.

Required backend fixture paths:

```text
test/fixtures/canonical-reconciliation/migration-94/canonical_migration_94_fixture_v1.sql
test/fixtures/canonical-reconciliation/migration-94/README.md
test/fixtures/canonical-reconciliation/migration-94/fixture_manifest_v1.json
```

Required authority evidence path:

```text
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_GATE_A0_MIGRATION_94_FIXTURE_EVIDENCE_V1.md
```

Do not add runtime application code, dependencies, migrations, schema changes, generated clients, lockfile changes, or provider configuration.

## Circuit breakers

Stop before publication, make no remote mutation, and report `GATE_A0_RESULT = CIRCUIT_BREAKER` if any of the following occurs:

- a controlling commit/tree/blob or freeze identity does not match;
- the freeze contains other than exactly 94 migrations;
- an accepted migration file would need modification;
- a target publication branch already exists;
- local PostgreSQL cannot be provisioned safely;
- the migration-94 schema cannot be created from the exact freeze;
- fixture SQL cannot execute transactionally and cleanly at migration 94;
- fixture coverage requires real or externally sourced data;
- secrets, tokens, personal data, plausible customer data, or provider identifiers are detected;
- deterministic identities and values cannot be used;
- the fixture changes application behavior or requires Product/architecture interpretation;
- the fixture requires a new migration, application code change, or dependency;
- a required validation cannot be reproduced;
- worktrees are dirty for reasons not created by this bounded task.

Do not weaken or silently skip a failed check.

## Execution protocol

### Phase 0 — timing and environment ledger

Record:

```text
RUN_STARTED_AT_UTC
RUN_COMPLETED_AT_UTC
WALL_CLOCK_SECONDS
COMMAND_COUNT
LONGEST_COMMAND
LONGEST_COMMAND_SECONDS
DEPENDENCY_INSTALL_SECONDS
POSTGRES_PROVISION_SECONDS
MIGRATION_1_TO_94_SECONDS
FIXTURE_LOAD_SECONDS
FIXTURE_VALIDATION_SECONDS
PUBLICATION_SECONDS
WAITING_OR_BLOCKED_SECONDS
```

Use machine-measured values where available. Use `NOT_MEASURABLE` rather than guessing.

Record OS, Git, Docker, PostgreSQL client/server, Node, npm, and Prisma versions. Do not expose secrets or connection strings containing credentials.

### Phase 1 — immutable and branch preflight

1. Verify the register commit/tree/path/blob tuple.
2. Verify the backend freeze commit/tree/ref tuple.
3. Count and inventory the 94 freeze migrations.
4. Verify the Media Kit target commit/tree and confirm its 106 migration inventory for inspection only.
5. Confirm migrations 95–106 are additions relative to the freeze and no migration 1–94 differs.
6. Confirm both intended publication branch names are absent remotely.
7. Confirm all source worktrees are clean.
8. Record the exact merge base between freeze and Media Kit target.

No branch creation is allowed in this phase.

### Phase 2 — migration 95–106 fixture-coverage matrix

Statically inspect every migration added after 94 through 106. Build a table with one row per migration containing:

- chronological migration number and directory/name;
- owning accepted module;
- SQL operation classification:
  - create-only;
  - alter existing;
  - constraint or enum;
  - index;
  - data backfill/transformation;
  - foreign-key relationship;
  - destructive or narrowing operation;
- pre-94 tables/columns/relationships it can affect;
- which pre-existing row shapes must be present at migration 94;
- edge conditions required to expose failure or data-loss risk;
- post-upgrade assertion that the later Gate A rerun must execute;
- whether no migration-94 fixture row is possible because the migration creates a new table.

This phase designs coverage; it must not execute migrations 95–106.

The fixture must be sufficient to test every meaningful pre-existing-data path. Do not populate unrelated tables merely to inflate row counts. Include a small unaffected control cohort so the later upgrade can prove preservation outside changed domains.

### Phase 3 — fixture design requirements

Create a compact, human-readable SQL seed fixture that executes after the exact freeze’s 94 migrations.

The fixture must:

- contain only deterministic synthetic values;
- use obviously non-real names, emails, domains, handles, URLs, IDs, dates, amounts, and external references;
- use fixed UUIDs/IDs and fixed UTC timestamps;
- avoid `NOW()`, `CURRENT_TIMESTAMP`, random generators, sequence-dependent assumptions, network access, and provider calls;
- be transactional and fail-fast;
- target a newly created disposable database already migrated to 94;
- fail rather than silently ignore duplicates or missing prerequisites;
- maintain all migration-94 foreign keys and constraints;
- include organization/brand/creator/campaign and other prerequisite chains only where required by the affected-domain rows;
- cover null/non-null, empty/populated, active/inactive, legacy/canonical, relationship, and boundary cases only where relevant to migrations 95–106;
- include representative rows for pre-94 structures altered, constrained, indexed, or backfilled later;
- include an unaffected control cohort;
- make later row-preservation and transformation assertions unambiguous;
- contain no schema DDL, migration-history manipulation, or migration 95–106 objects;
- contain no credentials, secrets, real provider IDs, or production-derived values.

Use explicit column lists for every insert. Do not rely on implicit column order.

The SQL fixture itself is the canonical artifact; do not commit a binary database dump. The exact database is reproduced by:

1. checking out the exact freeze/fixture commit;
2. creating an empty disposable PostgreSQL database;
3. applying the exact 94 freeze migrations;
4. loading the canonical SQL fixture.

### Phase 4 — manifest and README

Create `fixture_manifest_v1.json` containing at minimum:

- format/version;
- exact backend freeze commit and tree;
- migration count `94`;
- fixture relative path;
- SHA-256 of the raw fixture file;
- byte length and line count;
- deterministic fixture version/name;
- table-by-table inserted row counts;
- fixed ID namespace/prefix description;
- affected migration range `95–106`;
- statement that data is fully synthetic;
- statement that no provider/network call is required;
- generation method: manually specified deterministic SQL governed by the coverage matrix;
- PostgreSQL/Prisma versions used for validation;
- exact validation command sequence with secrets redacted;
- expected migration-history state after loading;
- explicit exclusions.

Keep JSON valid, sorted/stable where practical, and free of machine-local paths.

Create the README with:

- purpose and authority boundary;
- exact base identity;
- safe disposable-database usage;
- restore/load procedure;
- verification queries;
- table/row summary;
- synthetic-data declaration;
- warning that it is not production seed data;
- warning that it must not be loaded into shared, staging, or production databases;
- statement that Gate A0 does not prove the `94 → 106` upgrade;
- instructions for the later Gate A runner to fetch the fixture by immutable commit/blob and verify its SHA-256 before use.

### Phase 5 — local migration-94 validation

Use a disposable local PostgreSQL instance. Docker may be used. Use unique non-broad names and clean up only resources created by this run.

Required validation:

1. Start with an empty database.
2. At the exact freeze plus candidate fixture files, install dependencies using the repository lockfile.
3. Apply exactly the 94 freeze migrations using repository-supported commands.
4. Verify migration history contains exactly the expected 94 entries and no failed/pending entry.
5. Load the SQL fixture through `psql` with stop-on-error behavior.
6. Confirm the transaction committed once and no insert silently failed.
7. Execute fixture verification queries:
   - expected row counts;
   - required foreign-key chains;
   - relevant null/non-null and legacy/canonical cases;
   - unaffected control cohort;
   - absence of fixture-created schema objects;
   - absence of migrations 95–106 in migration history.
8. Rebuild a second disposable migration-94 database independently and repeat the load.
9. Confirm both databases yield the same normalized table/ID/value inventory.
10. Recompute and match the fixture SHA-256.
11. Run secret/PII-pattern inspection over all new files.
12. Confirm the Git diff contains only the three authorized fixture files.

Do **not** apply migration 95 or any later migration during Gate A0. That upgrade remains an independent Gate A proof.

If relevant PostgreSQL-dependent repository tests can run strictly at migration 94 without altering the fixture or crossing the stop boundary, run and classify them. Otherwise state exactly why they are not part of Gate A0; do not claim them as passed.

### Phase 6 — backend fixture publication

Only after Phase 5 passes:

1. Create `test-infra/canonical-reconciliation-migration-94-fixture-v1` from the exact freeze SHA.
2. Commit only the three authorized fixture files.
3. Push without force.
4. Fetch the remote branch into a fresh namespace.
5. Verify the fetched commit, tree, and each fixture file’s blob.
6. Verify the fetched fixture SHA-256 equals the manifest.
7. Record the immutable backend fixture commit, tree, and three blob SHAs.

The fixture branch is test infrastructure only. It must never be selected as the canonical runtime branch or as a substitute for the accepted Media Kit target.

### Phase 7 — authority evidence publication

After successful backend fetch-back, create the authority evidence document from the exact authority base.

Evidence must contain:

- Gate A0 result;
- reason the fixture was required;
- all controlling identities;
- backend fixture branch/base/commit/tree/blob tuples;
- raw fixture SHA-256, byte length, line count;
- the complete migration 95–106 coverage matrix;
- table/row and scenario inventory;
- validation commands and results;
- first and second database normalized-inventory comparison;
- secret/PII scan result;
- environment/tool versions;
- timing telemetry;
- branch/diff/fetch-back proof;
- explicit confirmation that migrations 95–106 were not executed;
- explicit confirmation that Gate A was not rerun;
- explicit confirmation that no main reconciliation branch was created;
- explicit confirmation that no frontend, runtime, schema, migration, provider, or deployment change occurred;
- exact next boundary: Parent review, followed by a separately authorized Gate A rerun consuming the pinned fixture.

Create and push `reconcile/mvp-canonical-application-v1-fixture-a0-authority` without force. Fetch it back and verify the evidence commit/tree/path/blob.

If authority publication or fetch-back fails after backend fixture publication, do not rewrite or delete the backend branch. Report the partial publication precisely.

## Required final response

Return a concise but complete report using these fields:

```text
CANONICAL_RECONCILIATION_GATE_A0_RESULT =
PASS | CIRCUIT_BREAKER | PARTIAL_PUBLICATION

RUN_STARTED_AT_UTC =
RUN_COMPLETED_AT_UTC =
WALL_CLOCK_SECONDS =
COMMAND_COUNT =
LONGEST_COMMAND =
LONGEST_COMMAND_SECONDS =
DEPENDENCY_INSTALL_SECONDS =
POSTGRES_PROVISION_SECONDS =
MIGRATION_1_TO_94_SECONDS =
FIXTURE_LOAD_SECONDS =
FIXTURE_VALIDATION_SECONDS =
PUBLICATION_SECONDS =
WAITING_OR_BLOCKED_SECONDS =

CONTROLLING_REGISTER_INTEGRITY =
BACKEND_FREEZE_INTEGRITY =
FREEZE_MIGRATION_COUNT =
MEDIA_KIT_TARGET_INTEGRITY =
TARGET_MIGRATION_COUNT =
MIGRATIONS_1_TO_94_UNCHANGED =

FIXTURE_DATA_CLASSIFICATION =
FIXTURE_FORMAT =
FIXTURE_SHA256 =
FIXTURE_BYTES =
FIXTURE_LINES =
FIXTURE_TABLE_COUNT =
FIXTURE_TOTAL_ROW_COUNT =
FIXTURE_COVERAGE_95_TO_106 =
FIXTURE_DETERMINISM =
FIXTURE_SECRET_PII_SCAN =

DATABASE_94_BUILD_1 =
DATABASE_94_FIXTURE_LOAD_1 =
DATABASE_94_BUILD_2 =
DATABASE_94_FIXTURE_LOAD_2 =
NORMALIZED_INVENTORY_MATCH =
MIGRATIONS_95_TO_106_EXECUTED = NO

BACKEND_FIXTURE_BRANCH =
BACKEND_FIXTURE_COMMIT =
BACKEND_FIXTURE_TREE =
BACKEND_FIXTURE_SQL_BLOB =
BACKEND_FIXTURE_README_BLOB =
BACKEND_FIXTURE_MANIFEST_BLOB =
BACKEND_FIXTURE_FETCH_BACK =

AUTHORITY_EVIDENCE_BRANCH =
AUTHORITY_EVIDENCE_COMMIT =
AUTHORITY_EVIDENCE_TREE =
AUTHORITY_EVIDENCE_BLOB =
AUTHORITY_EVIDENCE_FETCH_BACK =

GATE_A_RERUN = NO
MAIN_RECONCILIATION_BRANCHES_CREATED = NO
PRODUCT_OR_ARCHITECTURE_REOPENED = NO
RUNTIME_IMPLEMENTATION_CHANGED = NO
MIGRATIONS_CHANGED = NO
PROVIDER_CALLS = ZERO
CAMPAIGN_INTELLIGENCE_REMAINS_PAUSED = YES
SOURCE_WORKTREES_CLEAN =
BLOCKERS =
NEXT_BOUNDARY = PARENT_REVIEW_THEN_SEPARATELY_AUTHORIZED_GATE_A_RERUN
```

Also include:

1. integrity and branch-preflight table;
2. complete migration 95–106 coverage matrix;
3. fixture table/row/scenario inventory;
4. validation results and exact failures, if any;
5. publication/fetch-back table;
6. explicit exclusions and stop-boundary confirmation.

A `PASS` means only that an immutable, deterministic, synthetic migration-94 fixture is available for the next independent Gate A run. It is not canonical reconciliation acceptance and is not permission to resume paused workstreams.
