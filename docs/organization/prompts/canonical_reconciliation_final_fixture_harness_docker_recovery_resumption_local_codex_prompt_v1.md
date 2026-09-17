# Local Codex Runner — Final Fixture Harness Docker Recovery and Resumption V1

CANONICAL_RECONCILIATION_FINAL_FIXTURE_HARNESS_DOCKER_RECOVERY_AND_RESUMPTION_V1

## Role

Resume the interrupted final validation fixture/browser-harness implementation from the two preserved local candidate worktrees.

First preserve and fingerprint the candidates. Then perform a bounded, path-specific Docker Desktop runtime recovery without factory reset. If Docker recovers, complete the previously authorized disposable-database validation, role-session generation, two browser smokes, publication, fetch-back, and evidence.

Do not restart implementation from the accepted bases unless candidate continuity is irrecoverably lost. Do not run the complete final browser matrix.

## Mandatory telemetry

Start measurement before the first candidate or host action.

~~~text
RUN_STARTED_AT_UTC =
RUN_COMPLETED_AT_UTC =
WALL_CLOCK_SECONDS =
ACTIVE_EXECUTION_SECONDS = <if measurable>
COMMAND_COUNT =
LONGEST_COMMAND =
LONGEST_COMMAND_SECONDS =
WAITING_OR_BLOCKED_SECONDS = <if measurable>

CANDIDATE_PRESERVATION_SECONDS =
DOCKER_DIAGNOSIS_SECONDS =
DOCKER_RECOVERY_SECONDS =
CONTAINER_STATE_RECONCILIATION_SECONDS =
DISPOSABLE_DATABASE_SECONDS =
FIXTURE_VALIDATION_SECONDS =
SESSION_GENERATION_SECONDS =
BROWSER_SMOKE_SECONDS =
REGRESSION_VALIDATION_SECONDS =
PUBLICATION_SECONDS =
~~~

Use NOT_MEASURABLE rather than estimating.

## Controlling recovery authority

Repository:

~~~text
Piyush1087/dummy_tcs
~~~

Parent disposition:

~~~text
COMMIT =
0e5ce45bd964f7fdcd2ff01ccaa3b08c7434ec51

PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_FINAL_FIXTURE_HARNESS_DOCKER_RECOVERY_PARENT_DISPOSITION_V1.md

BLOB =
97cec4780d53c81ab1455a6a0b6b06d7de35cc52
~~~

Verify the exact commit, path and blob before any local mutation. Stop on mismatch.

Original fixture implementation authorization:

~~~text
COMMIT =
22a6efe76f4591a3d87b6ad512d9a2c47a4a7af7

PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_FINAL_GATE_FIXTURE_IMPLEMENTATION_PARENT_AUTHORIZATION_V1.md

BLOB =
7b4ad79bcab0486eedb068a83683c3a9c66034e7
~~~

Gate C Parent acceptance:

~~~text
COMMIT =
d92e420614af1cab66ac852f2e55b3e52f5cd60b

TREE =
9f73bdf186b6ceab552927689070b2b897771925

BLOB =
3db5fcb37b5891022d2859eba94affb34aa05139
~~~

## Accepted application bases

Backend:

~~~text
REPOSITORY =
Piyush1087/creator-commerce-backend-v2-clone

BASE_COMMIT =
1a99cf3f54df849408c8775b20e78c036ee637c3

BASE_TREE =
9679ed60f186220716e948779d3d70dbbf89b39a

MIGRATION_COUNT =
108

SCHEMA_BLOB =
1d9b3a8bf3145d47d326fae88493f7816eef9140

PUBLICATION_BRANCH =
validate/mvp-canonical-final-gate-fixtures-v1
~~~

Frontend:

~~~text
REPOSITORY =
Piyush1087/creator-commerce-frontend-v2-clone

BASE_COMMIT =
a7c00fb77969a419b31e175d4085b4f574a8bed5

BASE_TREE =
aad8832bc4bcd9a6b3721a0e1e9fe39316fd9741

PUBLICATION_BRANCH =
validate/mvp-canonical-final-gate-browser-v1
~~~

Accepted application branches and commits must remain unchanged.

## Preserved candidate locations

Backend:

~~~text
C:/Users/piyus/Documents/Codex/2026-09-17/local-codex-runner-prompt-canonical-reconciliation/work/backend.git/work/final-fixture-backend
~~~

Expected changed paths:

~~~text
.gitignore
package.json
vitest.final-gate.config.ts
scripts/canonical-reconciliation/final-gate/contracts.ts
scripts/canonical-reconciliation/final-gate/guard.ts
scripts/canonical-reconciliation/final-gate/seed.ts
scripts/canonical-reconciliation/final-gate/validate.ts
scripts/canonical-reconciliation/final-gate/audit.ts
scripts/canonical-reconciliation/final-gate/reset.ts
scripts/canonical-reconciliation/final-gate/final-gate.fixture.test.ts
~~~

Frontend:

~~~text
C:/Users/piyus/Documents/Codex/2026-09-17/local-codex-runner-prompt-canonical-reconciliation/work/frontend.git/work/final-harness-frontend
~~~

Expected changed paths:

~~~text
.gitignore
package.json
playwright.final-gate.config.ts
vitest.final-gate.config.ts
e2e/canonical-reconciliation/final-gate/manifest.ts
e2e/canonical-reconciliation/final-gate/helpers.ts
e2e/canonical-reconciliation/final-gate/sessions.ts
e2e/canonical-reconciliation/final-gate/final-gate.spec.ts
e2e/canonical-reconciliation/final-gate/manifest.test.ts
~~~

## Phase 1 — mandatory candidate preservation

Before stopping processes, repairing Docker, installing dependencies, editing files, or changing Git state:

1. verify both candidate directories exist;
2. verify backend HEAD is exactly 1a99cf3f54df849408c8775b20e78c036ee637c3;
3. verify frontend HEAD is exactly a7c00fb77969a419b31e175d4085b4f574a8bed5;
4. verify the changed paths are exactly the expected 10 and 9 paths;
5. verify there are no other tracked changes or untracked files;
6. record, for every changed path:
   - status;
   - mode;
   - HEAD blob or ABSENT;
   - index blob or ABSENT;
   - worktree blob;
   - byte size;
   - SHA-256;
7. produce deterministic candidate manifests sorted by repository-relative path;
8. compute:
   - backend manifest SHA-256;
   - backend binary patch/archive SHA-256;
   - frontend manifest SHA-256;
   - frontend binary patch/archive SHA-256;
9. create recoverable local backups outside all Git repositories that include tracked edits and untracked files;
10. verify the backups against the manifests and, where supported, dry-run/check their restoration into disposable copies.

Do not print credential values. Candidate files must contain no committed credential values.

Do not use git stash, reset, clean, checkout, restore, rebase, branch movement, or broad fetch/prune.

If any path, HEAD, content, or backup verification differs, stop with CANDIDATE_CONTINUITY_FAILURE. Do not attempt reconstruction.

## Phase 2 — immutable and remote preconditions

Using direct repository URLs and isolated refs:

- verify both application commits and trees;
- verify the backend schema blob and all 108 migrations;
- verify both accepted application branches remain on their accepted SHAs;
- verify these remote branches remain absent:
  - validate/mvp-canonical-final-gate-fixtures-v1;
  - validate/mvp-canonical-final-gate-browser-v1;
  - reconcile/mvp-canonical-application-v1-final-fixture-authority.

Stop on mismatch or branch collision.

## Phase 3 — bounded Docker Desktop diagnosis

Inspect without mutation first:

- docker client version;
- docker server response;
- Docker Desktop process list;
- Docker Desktop service state;
- WSL status and Docker distributions, read-only;
- exact metadata for:
  C:/Users/piyus/AppData/Local/Docker/run/dockerInference
- whether that object is:
  - ordinary file;
  - directory;
  - symlink;
  - junction;
  - mount point;
  - another reparse-point type;
- its reparse tag and target, if readable;
- parent directory permissions;
- current state of these exact containers if the engine responds:
  - creator-shop-acceptance-postgres;
  - canonical-final-gate-impl-20260917.

Record findings without exposing unrelated local files.

## Phase 4 — authorized Docker recovery

Only if the engine is unavailable or unhealthy:

1. request graceful Docker Desktop shutdown;
2. stop only Docker Desktop-related user processes and services if graceful shutdown does not complete;
3. confirm Docker is fully stopped;
4. attempt to rename only:
   C:/Users/piyus/AppData/Local/Docker/run/dockerInference
   to a timestamped sibling quarantine name;
5. if rename fails and the object is positively identified as a stale reparse point, remove only the reparse point itself using a reparse-aware operation that does not traverse or delete its target;
6. if it is an ordinary stale file/directory rather than a reparse point, remove only that exact object after recording its metadata and confirming it is under the Docker run directory;
7. restart Docker Desktop;
8. wait up to five minutes for both client and server readiness;
9. verify a benign Docker information/version command succeeds.

Never:

- factory reset Docker Desktop;
- delete/reset a WSL distribution;
- reinstall Docker;
- prune containers/images/volumes/build cache;
- delete or change Docker global settings;
- recursively delete C:/Users/piyus/AppData/Local/Docker;
- touch unrelated reparse points;
- delete volumes or unrelated containers.

If administrator authority or a human OS action is required, stop. Return the smallest exact host-operator action, the object metadata, and candidate backup hashes.

## Phase 5 — reconcile interrupted container state

After Docker server readiness:

### Interrupted final-gate container

Inspect canonical-final-gate-impl-20260917.

Remove it only if:

- it exists;
- its metadata proves it was created by the interrupted final-gate run, or its exact name/image/ports/database settings match that run;
- removal does not delete or reuse any shared volume.

Remove any run-created disposable volume only when its ownership is exact and exclusive. Do not prune.

### Acceptance container

Inspect creator-shop-acceptance-postgres.

The previous preflight observed it running. Restore it to running state only if it is stopped and can be started without recreation or configuration change.

Verify:

- same container identity;
- same image/configuration;
- same attached volumes;
- health/readiness;
- no migration, seed, reset or test command is run against it.

Do not use it for this validation. Do not inspect or output application data.

Record before/after container state.

## Phase 6 — resume candidate implementation validation

Recheck the four candidate hashes after Docker recovery. If unchanged, resume from the existing implementation.

Do not reimplement files that already pass static/focused checks.

Corrections are permitted only inside the exact authorized 10 backend and 9 frontend validation paths, unless a newly required validation-only path is unavoidable. Any additional path requires:

- explicit validation-only classification;
- justification;
- no production source/schema/migration change;
- inclusion in the final evidence.

Stop if any production path, Prisma schema, migration, route, permission, Product decision, provider behavior, or financial behavior must change.

## Phase 7 — disposable PostgreSQL proof

Create a new uniquely named PostgreSQL 16 container and isolated database using loopback only.

It must not share the acceptance container's volume, database, port, credentials, or network state.

Require the implementation's explicit disposable-run marker and database-name prefix guard.

Run:

1. clean migration 0→108;
2. confirm 108 total, 108 unique, zero unfinished and zero rolled-back migrations;
3. confirm schema blob/migration sources remain accepted and unchanged;
4. execute the deterministic final fixture;
5. execute its validator;
6. produce the sanitized fixture manifest;
7. prove:
   - six role identities;
   - AWARENESS, TRUST, ASSETS and ACTION campaigns;
   - canonical definition hashes;
   - fail-closed legacy objective campaign;
   - product and brief associations;
   - canonical C03 application;
   - canonical C03→C04 sourceApplicationId linkage;
   - public Media Kit state;
   - Brand/Creator onboarding, Home, Centre, Settings and accepted intelligence states;
   - provider-disabled Brand and Creator Payout state;
   - Creator Assistant payout denial;
   - Creator Chat absence/deferred boundary;
8. prove reset or clone isolation while preserving _prisma_migrations;
9. execute provider and financial before/after audit;
10. confirm only classified fixture setup writes occurred.

Stop on fixture nondeterminism, an undefined Product state, an unclassified write, provider invocation, or non-loopback dependency.

## Phase 8 — role sessions

Start the exact accepted application checkpoints plus validation overlays against the disposable database.

Generate storage states for:

- Brand Owner;
- Finance Admin;
- Campaign Manager;
- Creator Owner;
- Creator Manager;
- Creator Assistant.

For each, verify /api/v1/auth/me resolves the expected role and workspace.

Session files must remain run-scoped and ignored. Do not publish cookies, tokens, passwords, authorization headers, or secret values.

All browser and application traffic must be loopback-only.

## Phase 9 — focused validation and limited smoke

Re-run or confirm, after any authorized correction:

- backend focused final-gate tests;
- frontend focused final-gate tests;
- frontend typecheck;
- Prisma validate/generate;
- Playwright list: exactly 12 scenario identities and 30 executions;
- loopback guard negative self-test;
- artifact redaction self-test;
- secret scan across proposed tracked changes.

Run only these browser smoke executions:

1. B01 at one authorized width;
2. B02 or B11 at one authorized width.

For both:

- fail on non-loopback request;
- fail on unexpected console/page/5xx/unhandled API error;
- assert route mount and identity where applicable;
- exercise keyboard focus;
- run Axe on stable shell;
- capture sanitized assertions and audits;
- verify no provider call or unauthorized financial write.

Do not run all 30 executions.

Full backend/frontend suites may remain reused from accepted immutable evidence unless a correction, package/lock change, compilation scope, or focused failure makes a rerun necessary. If required, run backend and frontend suites in parallel where safe.

## Phase 10 — publication

Only after all required runtime, session, focused and smoke gates pass:

### Backend

- set repository-local Git identity only if missing:
  Piyush1087 <piyush.p1087@gmail.com>
- create one commit whose sole parent is:
  1a99cf3f54df849408c8775b20e78c036ee637c3
- verify its exact tree and changed paths;
- push explicit commit SHA to:
  refs/heads/validate/mvp-canonical-final-gate-fixtures-v1
  using the direct repository URL;
- fetch back to an isolated verification ref;
- verify commit, tree, sole parent, paths, schema blob and 108-migration history.

### Frontend

- create one commit whose sole parent is:
  a7c00fb77969a419b31e175d4085b4f574a8bed5
- verify its exact tree and changed paths;
- push explicit commit SHA to:
  refs/heads/validate/mvp-canonical-final-gate-browser-v1
  using the direct repository URL;
- fetch back to an isolated verification ref;
- verify commit, tree, sole parent and paths.

Every commit command must be checked for success before push. Do not use named-remote push bookkeeping that can move checked-out local refs.

No force update, PR, tag, merge, rebase, reset or accepted-branch movement.

If a branch appears with a different head before push, stop without changing it.

## Phase 11 — evidence publication

Create:

~~~text
REPOSITORY =
Piyush1087/dummy_tcs

BRANCH =
reconcile/mvp-canonical-application-v1-final-fixture-authority

SOLE_PARENT =
0e5ce45bd964f7fdcd2ff01ccaa3b08c7434ec51

PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_FINAL_VALIDATION_FIXTURE_HARNESS_IMPLEMENTATION_EVIDENCE_V1.md
~~~

The evidence must include:

- all mandatory telemetry;
- recovery authority integrity;
- candidate before/after manifests and patch hashes;
- Docker diagnosis, exact repair and result;
- quarantine/removal disposition for dockerInference;
- interrupted-container disposition;
- acceptance-container before/after state;
- accepted base integrity;
- final changed-path tables;
- backend/frontend commit, tree, sole parent and fetch-back;
- schema blob and full migration-history continuity;
- disposable PostgreSQL lifecycle;
- sanitized fixture manifest;
- role-session manifest without secrets;
- exact 12/30 Playwright manifest;
- focused test and two-smoke results;
- provider/financial/network/redaction audit;
- full-suite reuse/rerun decision;
- cleanup and clean-worktree state;
- explicit exclusions and next boundary.

Commit only that evidence file on the authority branch. Push by explicit SHA and direct URL. Fetch back to an isolated verification ref and verify commit, tree, sole parent, one-file scope and blob.

## Cleanup

After evidence capture:

- remove the newly created disposable final-gate container/database/volume;
- remove generated session files and non-evidence credentials;
- retain only sanitized, authorized evidence;
- leave creator-shop-acceptance-postgres intact and running as before;
- ensure backend, frontend and authority publication worktrees are clean;
- preserve candidate backup files until Parent acceptance of the published branches.

Do not delete the dockerInference quarantine object during this run; report its path for later host cleanup.

## Circuit breakers

Stop at the relevant boundary for:

~~~text
RECOVERY_AUTHORITY_MISMATCH
ORIGINAL_AUTHORIZATION_MISMATCH
GATE_C_ACCEPTANCE_MISMATCH
CANDIDATE_DIRECTORY_MISSING
CANDIDATE_CONTINUITY_FAILURE
CANDIDATE_BACKUP_VERIFICATION_FAILURE
ACCEPTED_BASE_MOVED
TARGET_BRANCH_COLLISION
DOCKER_RECOVERY_REQUIRES_FACTORY_RESET
DOCKER_RECOVERY_REQUIRES_BROAD_DELETION
DOCKER_RECOVERY_REQUIRES_ADMIN_OR_HUMAN_ACTION
ACCEPTANCE_CONTAINER_IDENTITY_MISMATCH
SHARED_DATABASE_OR_VOLUME_RISK
DISPOSABLE_DATABASE_ISOLATION_FAILURE
MIGRATION_OR_SCHEMA_MISMATCH
PRODUCTION_RUNTIME_CHANGE_REQUIRED
PRODUCT_STATE_UNDEFINED
ROLE_SESSION_VERIFICATION_FAILURE
SCENARIO_OR_VIEWPORT_COUNT_MISMATCH
NON_LOOPBACK_DEPENDENCY
PROVIDER_CALL
UNAUTHORIZED_FINANCIAL_WRITE
SECRET_VALUE_EXPOSED
FOCUSED_TEST_OR_SMOKE_FAILURE
COMMIT_FAILURE
FETCH_BACK_MISMATCH
SOURCE_WORKTREE_CONTAMINATION
~~~

After any branch publication, never delete, rewrite or force-update it because of a later breaker. Report exact partial publication state.

## Explicit exclusions

Do not:

- run the complete 30-execution browser matrix;
- publish final whole-application acceptance;
- alter accepted application branches;
- change schema/migrations or production runtime;
- implement Campaign Performance/Reporting;
- implement or resume Applicant AI Match;
- implement Marketplace recommendation scoring;
- implement Creator Chat;
- enable provider payout behavior;
- deploy;
- resume Campaign Intelligence;
- factory-reset Docker.

## Required final report

Return:

~~~text
FINAL_FIXTURE_HARNESS_DOCKER_RECOVERY_RESULT =
READY_FOR_PARENT_REVIEW | CIRCUIT_BREAKER

RUN_STARTED_AT_UTC =
RUN_COMPLETED_AT_UTC =
WALL_CLOCK_SECONDS =
ACTIVE_EXECUTION_SECONDS =
COMMAND_COUNT =
LONGEST_COMMAND =
LONGEST_COMMAND_SECONDS =
WAITING_OR_BLOCKED_SECONDS =

RECOVERY_AUTHORITY_INTEGRITY =
ORIGINAL_AUTHORIZATION_INTEGRITY =
GATE_C_ACCEPTANCE_INTEGRITY =
BACKEND_BASE_INTEGRITY =
FRONTEND_BASE_INTEGRITY =

BACKEND_CANDIDATE_CONTINUITY =
BACKEND_CANDIDATE_MANIFEST_SHA256 =
BACKEND_CANDIDATE_BACKUP_SHA256 =
FRONTEND_CANDIDATE_CONTINUITY =
FRONTEND_CANDIDATE_MANIFEST_SHA256 =
FRONTEND_CANDIDATE_BACKUP_SHA256 =

DOCKER_INITIAL_STATE =
DOCKERINFERENCE_OBJECT_TYPE =
DOCKERINFERENCE_RECOVERY_ACTION =
DOCKERINFERENCE_QUARANTINE_PATH =
DOCKER_FINAL_STATE =
INTERRUPTED_CONTAINER_DISPOSITION =
ACCEPTANCE_CONTAINER_BEFORE =
ACCEPTANCE_CONTAINER_AFTER =

DISPOSABLE_POSTGRESQL =
MIGRATION_0_TO_108 =
MIGRATION_COUNT =
SCHEMA_BLOB =
FIXTURE_SEED =
FIXTURE_MANIFEST =
RESET_OR_CLONE_ISOLATION =
CANONICAL_OBJECTIVES =
LEGACY_OBJECTIVE =
C03_TO_C04_HANDOFF =
PAYOUT_STATES =

ROLE_STORAGE_STATES =
PLAYWRIGHT_SCENARIOS =
PLAYWRIGHT_EXECUTIONS =
FOCUSED_TESTS =
PUBLIC_SMOKE =
AUTHENTICATED_SMOKE =
LOOPBACK_GUARD =
PROVIDER_AUDIT =
FINANCIAL_WRITE_AUDIT =
ARTIFACT_REDACTION =
FULL_SUITES =

BACKEND_VALIDATION_BRANCH =
BACKEND_VALIDATION_COMMIT =
BACKEND_VALIDATION_PARENT =
BACKEND_VALIDATION_TREE =
BACKEND_CHANGED_PATHS =
BACKEND_FETCH_BACK =

FRONTEND_VALIDATION_BRANCH =
FRONTEND_VALIDATION_COMMIT =
FRONTEND_VALIDATION_PARENT =
FRONTEND_VALIDATION_TREE =
FRONTEND_CHANGED_PATHS =
FRONTEND_FETCH_BACK =

AUTHORITY_BRANCH =
EVIDENCE_COMMIT =
EVIDENCE_PARENT =
EVIDENCE_TREE =
EVIDENCE_BLOB =
EVIDENCE_PATH =
EVIDENCE_FETCH_BACK =

PRODUCT_CHANGE =
APPLICATION_RUNTIME_CHANGE =
MIGRATION_CHANGE =
PROVIDER_BEHAVIOR_CHANGE =
FINANCIAL_BEHAVIOR_CHANGE =
FULL_FINAL_MATRIX_RUN =
FINAL_WHOLE_APPLICATION_ACCEPTANCE =
CAMPAIGN_INTELLIGENCE_REMAINS_PAUSED =

SOURCE_WORKTREES_CLEAN =
BLOCKERS =
NEXT_BOUNDARY =
PARENT_REVIEW_ONLY =
~~~

End after the report. Do not begin the final whole-application validation automatically in the same runner turn.
