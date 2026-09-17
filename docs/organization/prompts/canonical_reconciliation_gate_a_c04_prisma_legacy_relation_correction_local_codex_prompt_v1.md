# Local Codex Runner — Canonical Reconciliation Gate A C04 Prisma Legacy-Relation Correction V1

CANONICAL_RECONCILIATION_GATE_A_C04_PRISMA_LEGACY_RELATION_CORRECTION_V1

## Role and authorization

Act as the bounded correction worker for the accepted Gate A backend baseline.

This prompt authorizes exactly one backend schema correction:

~~~text
AUTHORIZED_PATH =
prisma/schema.prisma

AUTHORIZED_SEMANTIC_CHANGE =
REMOVE THE STALE UCE_BRIEF_DELIVERABLE RELATION
FROM COLLABORATION_DELIVERABLE_EXECUTION
WHILE PRESERVING THE CANONICAL SOURCE_BRIEF_DELIVERABLE RELATION
~~~

No frontend edit is authorized.

No C06 candidate edit, commit, push, cleanup, reset, rebase, or publication is authorized.

No migration, database rewrite, Product change, architecture-decision change, provider call, financial write, deployment, Campaign Objective work, Creator Chat work, Applicant AI Match resumption, or Campaign Performance/Reporting resumption is authorized.

## Mandatory telemetry

Capture:

~~~text
RUN_STARTED_AT_UTC =
RUN_COMPLETED_AT_UTC =
WALL_CLOCK_SECONDS =
ACTIVE_EXECUTION_SECONDS = <if measurable>
COMMAND_COUNT =
LONGEST_COMMAND =
LONGEST_COMMAND_SECONDS =
WAITING_OR_BLOCKED_SECONDS = <if measurable>

C06_CANDIDATE_PRESERVATION_SECONDS =
INTEGRITY_SECONDS =
CORRECTION_SECONDS =
POSTGRESQL_SECONDS =
BACKEND_VALIDATION_SECONDS =
PUBLICATION_SECONDS =
~~~

Use NOT_MEASURABLE rather than estimating.

## Controlling Parent authority

~~~text
REPOSITORY =
Piyush1087/dummy_tcs

PARENT_ACCEPTANCE_COMMIT =
44af36402456825416935d03043d903025444c8c

PARENT_ACCEPTANCE_PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_GATE_B_C06_POSTGRESQL_CIRCUIT_BREAKER_PARENT_ACCEPTANCE_V1.md

PARENT_ACCEPTANCE_RESULT =
CIRCUIT_BREAKER_ACCEPTED

NEXT_BOUNDARY =
ISOLATED GATE A BACKEND PRISMA LEGACY_RELATION CORRECTION
~~~

Verify the exact commit and path before mutation.

## Exact backend base

~~~text
REPOSITORY =
Piyush1087/creator-commerce-backend-v2-clone

BASE_COMMIT =
b14afa38fb82155ea155beeae2430a1854c089a3

BASE_TREE =
f55aa0b28661ce265ba568261eb951ab78b8b26d

BASE_BRANCH_NAVIGATION_ONLY =
reconcile/mvp-canonical-application-v1-backend

BASE_PRISMA_SCHEMA_BLOB =
da08f8e8518a67b05b58396cf9069481bde76425

BASE_MIGRATION_COUNT =
106

BASE_MIGRATION_SUBTREE =
3894d6d2009fdbdf6bce94708d955c24cf5804ce

NEW_CORRECTION_BRANCH =
correction/canonical-reconciliation-gate-a-c04-prisma-legacy-relation-v1
~~~

The correction commit must have the exact base commit above as its sole parent.

## Authority evidence publication

~~~text
REPOSITORY =
Piyush1087/dummy_tcs

AUTHORITY_BASE =
44af36402456825416935d03043d903025444c8c

NEW_AUTHORITY_BRANCH =
reconcile/mvp-canonical-application-v1-gate-a-c04-prisma-correction-authority

EVIDENCE_PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_GATE_A_C04_PRISMA_LEGACY_RELATION_CORRECTION_EVIDENCE_V1.md
~~~

Do not base the authority branch on the later prompt-publication commit.

## Mandatory Phase 0 — protect the existing C06 candidates

The prior Gate B run left:

~~~text
BACKEND_C06_CANDIDATE =
24 LOCAL UNCOMMITTED AUTHORIZED PATHS

FRONTEND_C06_CANDIDATE =
15 LOCAL UNCOMMITTED AUTHORIZED PATHS

C06_CANDIDATE_COMMITS =
NONE
~~~

Before any fetch, checkout, worktree creation, dependency install, formatter, or edit:

1. Locate the exact backend and frontend C06 candidate worktrees.
2. Confirm their bases are:
   - backend b14afa38fb82155ea155beeae2430a1854c089a3;
   - frontend bdd03e036ccd981fbfc573b58815fd277b9d757c.
3. Confirm the backend changed-path set contains exactly 24 authorized C06 paths.
4. Confirm the frontend changed-path set contains exactly 15 authorized C06 paths.
5. Record for each:
   - absolute worktree path;
   - HEAD/base;
   - porcelain status;
   - sorted changed-path manifest;
   - manifest SHA-256;
   - git diff --binary patch SHA-256;
   - per-path worktree blob identity where computable.
6. Copy no candidate source into the correction worktree.
7. Do not stash, clean, reset, restore, checkout, format, install, or run tests inside either C06 candidate worktree.
8. Do not use broad git fetch --all --tags --prune on mirror-style refspecs.
9. If either candidate is missing or differs from the exact expected scope, stop with C06_CANDIDATE_STATE_MISSING_OR_CHANGED.

After all correction validation and publication, recompute the same manifests and hashes. They must be identical.

The report phrase SOURCE_WORKTREES_CLEAN from the prior run must be interpreted precisely: canonical source worktrees were clean; the isolated C06 candidates intentionally contain uncommitted changes.

## Immutable and clean-state gate

Using a new isolated worktree or fresh clean clone:

1. Inspect remotes and fetch refspecs.
2. Fetch required immutable objects only through explicit SHAs, direct repository URLs into isolated refs, or fresh-clone defaults.
3. Verify Parent authority, Gate A commit/tree, schema blob, migration count, and migration subtree.
4. Verify the new backend correction branch is absent locally and remotely.
5. Verify the new authority branch is absent remotely.
6. Create the local correction branch from the exact Gate A backend base.
7. Require the correction worktree to be clean before editing.

Stop on any mismatch or collision.

## Exact schema correction

In prisma/schema.prisma remove exactly these three fields:

From model UceBriefDeliverable:

~~~prisma
collaborationExecutions CollaborationDeliverableExecution[]
~~~

From model CollaborationDeliverableExecution:

~~~prisma
uceBriefDeliverable   UceBriefDeliverable? @relation(fields: [uceBriefDeliverableId], references: [id])
uceBriefDeliverableId String?
~~~

Preserve exactly:

~~~prisma
sourceBriefDeliverableId String                    @map("source_brief_deliverable_id")
sourceBriefDeliverable   CanonicalBriefDeliverable @relation(fields: [sourceBriefDeliverableId], references: [id], onDelete: Restrict)
~~~

Do not:

- add @map to uceBriefDeliverableId;
- rename sourceBriefDeliverableId;
- change the canonical relation;
- change any relation action;
- add or edit an index;
- edit another model or enum;
- edit or create a migration;
- regenerate a checked-in client artifact unless the repository already tracks one and its change is demonstrably required; if so, stop for Parent review instead of expanding scope;
- modify any other file.

Run the repository formatter only if it changes no path other than prisma/schema.prisma and does not alter unrelated schema content. Otherwise revert the formatting-only drift inside the correction worktree and keep only the three-field deletion.

## Static proof

Before runtime validation, prove:

- changed path set equals exactly prisma/schema.prisma;
- the base-to-candidate semantic diff removes only the three authorized fields;
- sourceBriefDeliverableId remains mapped to source_brief_deliverable_id;
- sourceBriefDeliverable remains related to CanonicalBriefDeliverable;
- no uceBriefDeliverableId remains anywhere in the Prisma schema;
- no UceBriefDeliverable.collaborationExecutions remains;
- migration count remains 106;
- every migration file and checksum remains byte-identical;
- migration subtree remains 3894d6d2009fdbdf6bce94708d955c24cf5804ce;
- no generated or lock file changes;
- no C06, C04 runtime, Campaign, provider, or financial source path changes.

## Mandatory Prisma and PostgreSQL validation

Use a unique disposable PostgreSQL 16 database in UTC. Never use shared, development, staging, production, customer, or provider-connected infrastructure.

Run repository-defined equivalents of:

~~~text
npm ci
npm run prisma:generate
npx prisma format
npx prisma validate
~~~

Then:

1. Deploy all unchanged 106 migrations to a clean disposable database.
2. Verify 106 unique successful migrations; zero failed, unfinished, rolled-back, duplicate, or rewritten migrations.
3. Verify collaboration_deliverable_executions contains source_brief_deliverable_id.
4. Verify it does not contain uceBriefDeliverableId or uce_brief_deliverable_id.
5. Verify the database has no schema change beyond the existing migrations.
6. With the corrected generated Prisma client, execute a bounded CollaborationDeliverableExecution query that selects the default scalar shape or otherwise exercises the previously failing field-selection path.
7. Require the query to succeed against the migrated database.
8. Exercise the canonical sourceBriefDeliverable relation.
9. Verify Prisma migrate/schema-diff tooling reports no unexplained drift between the migrated database and corrected datamodel.
10. Remove only resources created by this run.

Do not use prisma db push to mutate or reconcile the database.

## Focused regression validation

Run the strongest available focused tests for:

- C04 Collaboration deliverable execution;
- canonical brief deliverable projection;
- C04 schema/architecture;
- C04 PostgreSQL runtime and financial boundaries;
- Creator Home architecture migration-count behavior;
- Brand Payout and C04 financial-source separation;
- Prisma schema architecture assertions.

If an accepted C06 P6 test cannot run on the unmodified Gate A source because C06 convergence is not present, do not copy C06 source into the correction branch. Use the direct bounded Prisma query above as the correction proof and record C06 P6 as deferred to Gate B resumption.

## Full backend preservation validation

Run:

~~~text
npm run lint:eslint
npm run build
npm test
npm run test:campaign-readiness
npm run intelligence:contracts:verify
~~~

Also run prisma generate and validate after any formatter step.

Require:

- zero failed checked-in tests;
- Gate A backend behaviors preserved;
- no provider credentials;
- zero live provider calls;
- no financial writes except disposable test-fixture setup authorized by existing tests;
- no migration or Prisma drift.

## Publication

Only after all correction, PostgreSQL, focused, and full backend gates pass:

1. Confirm the correction branch diff contains exactly prisma/schema.prisma.
2. Commit once with sole parent b14afa38fb82155ea155beeae2430a1854c089a3.
3. Push correction/canonical-reconciliation-gate-a-c04-prisma-legacy-relation-v1 without force.
4. Fetch back through a direct URL into an isolated verification ref.
5. Verify commit, parent, tree, changed path, corrected schema blob, migration count, and migration subtree.
6. Reverify both C06 candidate worktrees have unchanged base, path manifests, binary patch hashes, and per-path identities.
7. Create reconcile/mvp-canonical-application-v1-gate-a-c04-prisma-correction-authority from 44af36402456825416935d03043d903025444c8c.
8. Publish only docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_GATE_A_C04_PRISMA_LEGACY_RELATION_CORRECTION_EVIDENCE_V1.md.
9. Include exact timing, identities, three-field diff, database proof, schema-drift proof, focused/full test totals, negative proofs, C06 candidate preservation hashes, branch fetch-back, exclusions, and worktree states.
10. Push without force and fetch back the authority commit/tree/blob/path.
11. Stop for Parent review.

## Circuit breakers

Stop without remote publication if any occurs:

~~~text
PARENT_AUTHORITY_MISMATCH
GATE_A_BASE_SHA_OR_TREE_MISMATCH
BASE_SCHEMA_BLOB_MISMATCH
BASE_MIGRATION_COUNT_OR_SUBTREE_MISMATCH
C06_CANDIDATE_STATE_MISSING_OR_CHANGED
C06_CANDIDATE_WORKTREE_TOUCHED
TARGET_BRANCH_COLLISION
UNSAFE_FETCH_REFSPEC
CORRECTION_WORKTREE_NOT_CLEAN
UNAUTHORIZED_PATH_MUTATION
SCHEMA_DIFF_EXCEEDS_THREE_FIELD_DELETION
CANONICAL_SOURCE_BRIEF_RELATION_CHANGED
MIGRATION_OR_DATABASE_REWRITE_REQUIRED
GENERATED_TRACKED_ARTIFACT_CHANGE_REQUIRED
PRISMA_GENERATE_OR_VALIDATE_FAILURE
POSTGRESQL_106_DEPLOYMENT_FAILURE
POSTGRESQL_COLUMN_ASSERTION_FAILURE
PRISMA_RUNTIME_QUERY_FAILURE
UNEXPLAINED_SCHEMA_DRIFT
C04_REGRESSION
GATE_A_TEST_LINT_BUILD_REGRESSION
CAMPAIGN_READINESS_REGRESSION
INTELLIGENCE_CONTRACT_REGRESSION
PROVIDER_CALL_OR_FINANCIAL_EXECUTION
REMOTE_BRANCH_CREATED_BEFORE_ALL_GATES_PASS
~~~

Do not expand scope or repair another issue. Return the exact blocker and smallest next decision.

## Required final report

Return:

~~~text
CANONICAL_RECONCILIATION_GATE_A_C04_PRISMA_CORRECTION_RESULT =
READY_FOR_PARENT_REVIEW | CIRCUIT_BREAKER

RUN_STARTED_AT_UTC =
RUN_COMPLETED_AT_UTC =
WALL_CLOCK_SECONDS =
ACTIVE_EXECUTION_SECONDS =
COMMAND_COUNT =
LONGEST_COMMAND =
LONGEST_COMMAND_SECONDS =
WAITING_OR_BLOCKED_SECONDS =

PARENT_AUTHORITY_INTEGRITY =
GATE_A_BASE_INTEGRITY =
C06_BACKEND_CANDIDATE_CONTINUITY =
C06_BACKEND_CANDIDATE_MANIFEST_SHA256 =
C06_BACKEND_CANDIDATE_PATCH_SHA256 =
C06_FRONTEND_CANDIDATE_CONTINUITY =
C06_FRONTEND_CANDIDATE_MANIFEST_SHA256 =
C06_FRONTEND_CANDIDATE_PATCH_SHA256 =

CHANGED_PATHS =
SCHEMA_FIELDS_REMOVED =
CANONICAL_SOURCE_BRIEF_RELATION_PRESERVED =
CORRECTED_SCHEMA_BLOB =
MIGRATION_COUNT =
MIGRATION_SUBTREE =
MIGRATION_DIFF =

PRISMA_GENERATE =
PRISMA_VALIDATE =
POSTGRESQL_106 =
POSTGRESQL_COLUMN_ASSERTIONS =
PRISMA_RUNTIME_QUERY =
SCHEMA_DRIFT_CHECK =

FOCUSED_C04_TESTS =
FULL_BACKEND_TESTS =
BACKEND_LINT =
BACKEND_BUILD =
CAMPAIGN_READINESS =
INTELLIGENCE_CONTRACT_VERIFY =
ZERO_PROVIDER_CALLS =
ZERO_UNAUTHORIZED_FINANCIAL_WRITES =

BACKEND_CORRECTION_BRANCH =
BACKEND_CORRECTION_COMMIT =
BACKEND_CORRECTION_PARENT =
BACKEND_CORRECTION_TREE =
BACKEND_FETCH_BACK =

AUTHORITY_BRANCH =
EVIDENCE_COMMIT =
EVIDENCE_TREE =
EVIDENCE_BLOB =
EVIDENCE_PATH =
EVIDENCE_FETCH_BACK =

C06_CANDIDATES_UNCHANGED_AFTER_PUBLICATION =
SOURCE_WORKTREES_CLEAN =
BLOCKERS =
NEXT_BOUNDARY =
PARENT_REVIEW_ONLY =
~~~

A ready result requires the exact one-file correction, clean PostgreSQL 106 proof, successful Prisma runtime query, full backend validation, branch fetch-back, authority evidence fetch-back, and exact C06 candidate continuity.

End after the correction report. Do not resume Gate B C06 or begin Campaign Objectives.
