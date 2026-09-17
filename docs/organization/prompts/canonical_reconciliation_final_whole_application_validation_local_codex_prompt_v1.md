# Local Codex Runner — Canonical Reconciliation Final Whole-Application Validation V1

CANONICAL_RECONCILIATION_FINAL_WHOLE_APPLICATION_VALIDATION_V1

## Role

Execute the final whole-application validation for the reconciled MVP canonical application.

Validate the exact immutable Gate C application checkpoints using the accepted validation-support overlays. Run the targeted non-browser gate and the complete frozen integrated-browser matrix of 12 scenarios and 30 viewport executions.

This is an execution-only validation gate. Do not edit, commit, or push either application repository. Publish one immutable authority evidence document only if every required gate passes.

## Expected wall-clock

Based on observed repository timings and the accepted preflight:

~~~text
EXPECTED_CRITICAL_PATH =
43 TO 70 MINUTES

IF_FULL_SUITES_BECOME_REQUIRED =
55 TO 85 MINUTES
~~~

This is a planning range, not a timeout. Correctness and circuit-breaker discipline take precedence.

## Mandatory telemetry

Start measurement before the first Git, environment, dependency, database, application, or browser action.

~~~text
RUN_STARTED_AT_UTC =
RUN_COMPLETED_AT_UTC =
WALL_CLOCK_SECONDS =
ACTIVE_EXECUTION_SECONDS = <if measurable>
COMMAND_COUNT =
LONGEST_COMMAND =
LONGEST_COMMAND_SECONDS =
WAITING_OR_BLOCKED_SECONDS = <if measurable>

IMMUTABLE_VERIFICATION_SECONDS =
DEPENDENCY_AND_RUNTIME_SETUP_SECONDS =
NON_BROWSER_VALIDATION_SECONDS =
DATABASE_AND_FIXTURE_SECONDS =
SESSION_GENERATION_SECONDS =
BROWSER_MATRIX_SECONDS =
AUDIT_SECONDS =
EVIDENCE_AND_PUBLICATION_SECONDS =
CLEANUP_SECONDS =
~~~

Use NOT_MEASURABLE rather than estimating.

## Controlling Parent acceptance

Authority repository:

~~~text
Piyush1087/dummy_tcs
~~~

Final fixture/harness Parent acceptance:

~~~text
COMMIT =
5941fc08812e2a4bc27d138f076d741e5e097ecf

PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_FINAL_VALIDATION_FIXTURE_HARNESS_PARENT_ACCEPTANCE_V1.md

BLOB =
7d4693f73eab1a46f2d8b680961b18f735306fa3
~~~

Fixture/harness implementation evidence:

~~~text
COMMIT =
eb1c026331a0336840608ba2ec463cbd97627ad3

TREE =
f4f48ce80da474d6f5c0a6def5824ee142364a62

PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_FINAL_VALIDATION_FIXTURE_HARNESS_IMPLEMENTATION_EVIDENCE_V1.md

BLOB =
6befcb01303c9cd2e7560c1f586aa30dc12a71a1
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

Verify every supplied immutable authority object before execution. Stop on any mismatch.

## Immutable application checkpoints

Backend application:

~~~text
REPOSITORY =
Piyush1087/creator-commerce-backend-v2-clone

BRANCH =
reconcile/mvp-canonical-application-v1-gate-c-campaign-objectives-backend

COMMIT =
1a99cf3f54df849408c8775b20e78c036ee637c3

TREE =
9679ed60f186220716e948779d3d70dbbf89b39a

MIGRATION_COUNT =
108

SCHEMA_BLOB =
1d9b3a8bf3145d47d326fae88493f7816eef9140
~~~

Frontend application:

~~~text
REPOSITORY =
Piyush1087/creator-commerce-frontend-v2-clone

BRANCH =
reconcile/mvp-canonical-application-v1-gate-c-campaign-objectives-frontend

COMMIT =
a7c00fb77969a419b31e175d4085b4f574a8bed5

TREE =
aad8832bc4bcd9a6b3721a0e1e9fe39316fd9741
~~~

These remain the final application checkpoints. Do not create replacement or no-code application commits.

## Accepted validation-support checkpoints

Backend support overlay:

~~~text
BRANCH =
validate/mvp-canonical-final-gate-fixtures-v1

COMMIT =
99df138ef5602709cfd9850e5630606b7889f237

TREE =
77754f4db336cf9023765ffeeeb2b440aa45bc18

SOLE_PARENT =
1a99cf3f54df849408c8775b20e78c036ee637c3

CHANGED_PATHS =
10
~~~

Frontend support overlay:

~~~text
BRANCH =
validate/mvp-canonical-final-gate-browser-v1

COMMIT =
8f600d955b27f55d011adbc5513888b763674509

TREE =
4fd70320cd3beb74ca708123093ba7e73863f9b6

SOLE_PARENT =
a7c00fb77969a419b31e175d4085b4f574a8bed5

CHANGED_PATHS =
9
~~~

Use the support commits as the runtime checkouts. Their sole-parent relationship proves the accepted application content plus validation-only support.

## Final evidence target

~~~text
AUTHORITY_REPOSITORY =
Piyush1087/dummy_tcs

AUTHORITY_BASE =
5941fc08812e2a4bc27d138f076d741e5e097ecf

AUTHORITY_BRANCH =
reconcile/mvp-canonical-application-v1-final-validation-authority

EVIDENCE_PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_FINAL_WHOLE_APPLICATION_VALIDATION_EVIDENCE_V1.md
~~~

Confirm the authority branch is absent before execution. If it exists, stop with TARGET_BRANCH_COLLISION.

## Absolute mutation boundary

Backend and frontend repositories are read-only during this gate.

Allowed local untracked/ignored outputs:

- dependency installation output;
- generated Prisma client;
- build output;
- generated local fixture credentials;
- generated role storage states;
- Playwright screenshots/traces/videos;
- Axe, console, network and database audit output;
- sanitized temporary manifests.

Not allowed:

- editing tracked backend/frontend files;
- committing or pushing backend/frontend repositories;
- schema or migration change;
- production runtime change;
- validation-harness correction;
- route or authorization change;
- updating accepted or validation branches.

Record clean tracked status before and after. If any tracked file changes, stop with SOURCE_WORKTREE_CONTAMINATION.

The only authorized Git mutation is the final authority evidence file after every validation passes.

## Git and checkout safety

Use fresh isolated checkouts at the exact support commits.

Use direct repository URLs or isolated refs. Avoid broad fetch/prune operations in clones with mirror refspecs.

Verify:

- application branch heads;
- application commit/tree identities;
- support branch heads;
- support commit/tree/sole-parent identities;
- exact 10-path and 9-path diffs;
- schema blob;
- ordered migration count, names and contents;
- support paths remain validation-only;
- no lockfile or production source delta exists;
- authority branch absence;
- clean tracked worktrees.

Do not use force, rebase, reset, branch deletion, tag, pull request, or accepted-branch movement.

## Secrets and environment policy

Use run-generated local fixture passwords/tokens only.

Never output:

- password values;
- cookies;
- session tokens;
- authorization headers;
- provider tokens;
- storage-state contents;
- database credentials.

Report environment-variable names and redacted presence only.

All database, backend, frontend and browser traffic must remain loopback-only. Any attempted non-loopback request is an immediate circuit breaker, even if blocked by the host.

No live provider, model, email, payment, Instagram, analytics, storage, or external font call is allowed.

## Parallel execution plan

Where safe, execute these lanes concurrently:

~~~text
LANE_A =
IMMUTABLE INTEGRITY
MIGRATION HISTORY
SECRETS SCAN
CLEAN WORKTREES

LANE_B =
BACKEND PRISMA GENERATE/VALIDATE
TARGETED LINT/BUILD
CAMPAIGN READINESS
INTELLIGENCE CONTRACT VERIFICATION
FOCUSED ROUTE/GUARD/AUTH CHECKS

LANE_C =
FRONTEND TYPECHECK/LINT/BUILD
CAMPAIGN AUTOSAVE
FOCUSED ROUTE/GUARD/AUTH CHECKS
PLAYWRIGHT LIST

LANE_D =
DISPOSABLE POSTGRESQL 0 TO 108
FINAL FIXTURE
RESET/RESEED
ROLE SESSIONS

BARRIER =
HEALTH + FIXTURE + SESSION + LOOPBACK + AUDIT READINESS

LANE_E =
30-EXECUTION BROWSER MATRIX

LANE_F =
DATABASE/NETWORK/ARTIFACT/SECRETS AUDIT

BARRIER =
EVIDENCE ASSEMBLY AND FETCH-BACK
~~~

Do not allow concurrency to share or corrupt a mutable scenario database. Use isolated clones/restores or serial execution where required.

## Final non-browser validation

### Rerun

Rerun:

1. authority, application and support commit/tree/path integrity;
2. support sole-parent relationships;
3. schema blob and 108-migration history;
4. Prisma generate and validate;
5. backend lint and build;
6. Campaign readiness;
7. Intelligence contract verification using its accepted pinned-source invocation;
8. frontend typecheck, lint and build;
9. frontend Campaign autosave;
10. focused route/guard/authorization tests for:
    - Campaign authorization and legacy objective behavior;
    - Brand and Creator Payout routes and role denial;
    - Creator access and Settings uniqueness;
    - C03→C04 handoff boundaries;
11. final-gate backend focused tests;
12. final-gate frontend focused tests;
13. Playwright deterministic listing: exactly 12 scenarios and 30 executions;
14. repository and evidence-output secret scans;
15. clean tracked worktree checks.

Use repository-defined commands. Record exact commands, exit codes, durations and counts.

### Reuse after continuity proof

Reuse these accepted immutable results unless continuity fails or a rerun gate contradicts them:

~~~text
BACKEND_FULL =
7,326 PASSED
955 SKIPPED
ZERO FAILED

FRONTEND_FULL =
1,417 PASSED
1 SKIPPED
ZERO FAILED

CLEAN_DATABASE_0_TO_108 =
PASS

POPULATED_DATABASE_106_TO_108 =
PASS

C04_POSTGRESQL =
6 / 6 PASS

C06_POSTGRESQL =
1 / 1 PASS

BRAND_PAYOUT_POSTGRESQL =
P1 17 / 17
WAVE B 3 / 3

REPOSITORY_DEFINED_RESPONSIVE_KEYBOARD_ACCESSIBILITY =
PASS
~~~

If any targeted result, build, contract, schema, migration, or support-isolation result conflicts with immutable evidence, do not silently rerun and accept. Stop and classify the contradiction.

Full backend/frontend suites become mandatory only if:

- package lock or production content differs;
- targeted validation exposes a regression;
- build/typecheck/lint indicates broader impact;
- support isolation is not exact;
- a repository command requires full-suite execution for final proof.

If mandatory, run both full suites in parallel where safe and require zero failures.

## Disposable PostgreSQL runtime

Create a new uniquely named PostgreSQL 16 container/database.

Requirements:

- loopback-only;
- unique port and database name;
- no shared volume with any existing container;
- explicit disposable-run marker;
- accepted database-name prefix guard;
- no access to creator-shop-acceptance-postgres or any shared database.

Run and prove:

1. clean migration 0→108;
2. 108 total, 108 unique, zero unfinished, zero rolled back;
3. accepted schema and migration sources unchanged;
4. final fixture seed;
5. fixture validation and sanitized manifest;
6. reset of application tables while retaining all 108 migration records;
7. deterministic reseed and revalidation;
8. provider/financial baseline audit.

The pre-existing acceptance PostgreSQL container must remain intact and in its prior running state.

## Required fixture assertions

Before browser execution prove:

- Brand Owner;
- Finance Admin;
- Campaign Manager;
- Creator Owner;
- Creator Manager;
- Creator Assistant;
- one AWARENESS campaign;
- one TRUST campaign;
- one ASSETS campaign;
- one ACTION campaign;
- canonical definition hashes;
- one legacy campaign resolving to Objective unavailable;
- accepted Product and Brief associations;
- canonical C03 application;
- canonical C03→C04 handoff through sourceApplicationId;
- accepted collaboration snapshot/events and execution foundation;
- completed Brand onboarding;
- supported and unsupported Gatekeeper state;
- Brand Preview;
- Brand Centre;
- Brand and Product Intelligence current state;
- Brand Settings including synthetic Instagram states;
- provider-disabled Brand Payout;
- Creator onboarding, Home, Centre and Settings;
- provider-disabled Creator Payout;
- Creator Assistant denial;
- public and verified Media Kit state;
- Reporting fail-closed/unimplemented;
- Creator Chat deferred/absent.

Do not infer or create any new Product state during this gate.

## Role session generation

Generate fresh run-scoped storage states through the accepted local login path for all six roles.

For every role:

- verify /api/v1/auth/me;
- verify application role;
- verify Brand membership or Creator actor/workspace scope;
- fail on cross-tenant or cross-role leakage;
- keep storage-state files ignored and local;
- delete them during cleanup.

Do not use an authentication bypass.

## Frozen browser matrix

Run exactly these executions:

| ID | Role/state | Required scope | Widths |
|---|---|---|---|
| B01 | Anonymous visitor | Public Campaign and public Media Kit; route mounting | 390, 1440 |
| B02 | Verified Brand Owner | Verified Media Kit; Brand Home, Centre, current Brand/Product Intelligence and limited Brand Chat | 390, 1440 |
| B03 | Brand Owner, completed onboarding | Supported Gatekeeper → Preview → Centre; keyboard/focus | 390, 767, 768, 1440 |
| B04 | Brand Owner, unsupported result | Gatekeeper fail-closed/recovery; no provider escape | 390, 1440 |
| B05 | Brand Owner | Create/edit/autosave/hydrate AWARENESS, TRUST, ASSETS and ACTION campaigns | 390, 767, 768, 1440 |
| B06 | Brand Owner | Campaign workspace, three workspace tabs, Add Product and Add Brief | 390, 1440 |
| B07 | Brand Owner, legacy campaign | Objective unavailable; Reporting remains fail-closed | 390, 1440 |
| B08 | Creator Owner + Brand Owner | Opportunity → C03 application → canonical C04 collaboration handoff | 390, 767, 768, 1440 |
| B09 | Brand Owner + Finance Admin | Provider-disabled Brand Payout; no execution/write | 390, 1440 |
| B10 | Campaign Manager | Read-only/no-financial-row payout behavior and denied action | 390, 1440 |
| B11 | Creator Owner | Onboarding, Home, Centre, Settings and disabled Creator Payout; Creator Chat absent | 390, 1440 |
| B12 | Creator Manager + Assistant | C04/settings visibility; Assistant payout denial; Instagram disconnected/connected/provider-unavailable | 390, 1440 |

Expected:

~~~text
SCENARIO_IDENTITIES =
12

VIEWPORT_EXECUTIONS =
30
~~~

No additions, omissions, replacements, skips, quarantines, todo cases, expected failures, or conditional exclusions are allowed.

## Browser execution policy

Use zero accepted retries.

A configured diagnostic retry may capture a trace, but any execution requiring a retry or reported as flaky fails the final gate.

For every one of the 30 executions require:

- passed status;
- expected role/state;
- required routes mounted;
- required principal content and state assertions;
- no unexpected console error;
- no page error;
- no unhandled API error;
- no unexpected 4xx/5xx response;
- no non-loopback request;
- no provider call;
- keyboard/focus assertion;
- Axe check on every stable rendered shell;
- zero critical Axe violations;
- authorization result where relevant;
- database audit identity for mutating or financial/collaboration-sensitive flows.

Any skip, failure, flaky result, unexpected request, unexpected console/page error or missing artifact is a circuit breaker.

## Scenario isolation

Prefer a clean isolated database clone/restore for each scenario identity. If the accepted harness uses serial reset instead:

- run with one worker;
- reset/reseed deterministically between scenario identities;
- prove retained 108 migration records;
- regenerate or validate affected sessions;
- audit expected state before and after;
- prove no contamination crosses scenarios.

Viewport executions of one non-mutating scenario may share its scenario database only when the harness proves they cannot mutate state.

B05 and B08 must not contaminate later scenarios.

## Provider, financial and write audit

Capture a baseline after fixture setup and before browser execution.

After every sensitive scenario and after the full matrix prove:

- zero provider mappings/calls;
- zero payout execution;
- zero C06 financial writes;
- zero unauthorized Brand Payout financial writes;
- zero payout receipts unless the accepted disabled fixture requires none;
- Reporting remains fail-closed;
- only explicitly authorized test-flow writes occurred;
- every write class is classified;
- no cross-scenario contamination remains.

Do not weaken database triggers or append-only protections.

## Artifact requirements

Retain locally for the run:

- complete test-result manifest;
- per-execution ID, viewport, role, duration and status;
- assertion manifest;
- Axe JSON;
- browser console/page error logs;
- blocked-network log;
- database before/after audits;
- screenshots on failure;
- traces for diagnostic retry/failure;
- video on failure only;
- fixture/session manifests with secrets removed;
- command/duration manifest;
- secret-scan result.

Do not commit raw screenshots, videos, traces, storage states or credentials.

The authority evidence should contain sanitized summaries and SHA-256 identities for retained artifact manifests, not secrets or large raw artifacts.

## Acceptance criteria

The final gate passes only if all are true:

~~~text
AUTHORITY_INTEGRITY =
PASS

APPLICATION_INTEGRITY =
PASS

VALIDATION_SUPPORT_INTEGRITY =
PASS

MIGRATION_AND_SCHEMA =
PASS

TARGETED_NON_BROWSER =
PASS

FIXTURE_AND_RESET =
PASS

ROLE_SESSIONS =
6 / 6 PASS

BROWSER_SCENARIOS =
12 / 12 PASS

BROWSER_EXECUTIONS =
30 / 30 PASS

SKIPPED =
0

FAILED =
0

FLAKY_OR_RETRIED =
0

CRITICAL_AXE_VIOLATIONS =
0

UNEXPECTED_CONSOLE_OR_PAGE_ERRORS =
0

NON_LOOPBACK_REQUESTS =
0

PROVIDER_CALLS =
0

UNAUTHORIZED_FINANCIAL_WRITES =
0

SECRETS_EXPOSED =
0

SOURCE_WORKTREES_CLEAN =
YES
~~~

## Evidence publication

Only after every acceptance criterion passes, create the final evidence file on:

~~~text
BRANCH =
reconcile/mvp-canonical-application-v1-final-validation-authority

SOLE_PARENT =
5941fc08812e2a4bc27d138f076d741e5e097ecf

PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_FINAL_WHOLE_APPLICATION_VALIDATION_EVIDENCE_V1.md
~~~

The evidence must record:

1. result and mandatory telemetry;
2. Parent acceptance and prior evidence integrity;
3. exact application and support checkpoints;
4. changed-path and isolation verification;
5. migration/schema continuity;
6. exact commands and non-browser results;
7. reused evidence table and continuity basis;
8. disposable PostgreSQL/fixture/reset result;
9. six-role session result;
10. 12-scenario/30-execution table;
11. console/page/network/Axe results;
12. provider/financial/write audit;
13. sanitized artifact-manifest hashes;
14. source-worktree and cleanup state;
15. exact evidence commit/tree/blob/path and fetch-back;
16. explicit exclusions;
17. blockers and next boundary.

Set repository-local Git identity only if missing:

~~~text
Piyush1087 <piyush.p1087@gmail.com>
~~~

Commit only the one evidence file. Check commit success before push. Push the explicit commit SHA through the direct repository URL. Fetch back to an isolated verification ref and verify:

- exact branch head;
- commit;
- tree;
- sole parent;
- one-file scope;
- evidence blob.

Do not create or move any backend/frontend branch, tag, PR, release, development branch, or freeze branch.

## Failure publication policy

If any circuit breaker occurs:

- do not publish the final evidence branch;
- do not edit or repair tracked backend/frontend files;
- preserve sanitized local diagnostics;
- clean disposable infrastructure where safe;
- return an exact failure report;
- identify whether the failure is:
  - ENVIRONMENT;
  - VALIDATION_HARNESS;
  - APPLICATION_REGRESSION;
  - FIXTURE_STATE;
  - AUTHORITY;
  - PROVIDER_OR_NETWORK;
  - FINANCIAL_OR_DATA_INTEGRITY.

Do not reinterpret a failed result as acceptance.

## Cleanup

After pass or failure:

- stop backend/frontend processes;
- delete generated role sessions and local credentials;
- remove the run-created disposable PostgreSQL databases, container and exclusive volume;
- restore any pre-existing service/container state;
- leave creator-shop-acceptance-postgres intact;
- clean ignored run artifacts unless required for local diagnostic retention;
- verify tracked worktrees remain clean.

## Circuit breakers

~~~text
PARENT_ACCEPTANCE_MISMATCH
FIXTURE_EVIDENCE_MISMATCH
GATE_C_ACCEPTANCE_MISMATCH
APPLICATION_CHECKPOINT_MOVED
VALIDATION_SUPPORT_CHECKPOINT_MOVED
VALIDATION_SUPPORT_SCOPE_MISMATCH
FINAL_AUTHORITY_BRANCH_COLLISION
SCHEMA_OR_MIGRATION_MISMATCH
SOURCE_WORKTREE_CONTAMINATION
SHARED_DATABASE_OR_VOLUME_RISK
DISPOSABLE_DATABASE_FAILURE
FIXTURE_OR_RESET_FAILURE
ROLE_SESSION_FAILURE
SCENARIO_OR_EXECUTION_COUNT_MISMATCH
SKIPPED_BROWSER_EXECUTION
BROWSER_FAILURE
BROWSER_FLAKE_OR_RETRY
CONSOLE_OR_PAGE_ERROR
UNHANDLED_API_FAILURE
CRITICAL_AXE_VIOLATION
NON_LOOPBACK_REQUEST
PROVIDER_CALL
UNAUTHORIZED_FINANCIAL_WRITE
CROSS_SCENARIO_CONTAMINATION
SECRET_VALUE_EXPOSED
TARGETED_NON_BROWSER_FAILURE
IMMUTABLE_EVIDENCE_CONTRADICTION
EVIDENCE_COMMIT_OR_FETCH_BACK_FAILURE
CLEANUP_FAILURE_AFFECTING_SHARED_STATE
~~~

## Explicit exclusions

Do not:

- change application or validation-support source;
- create backend/frontend commits;
- run provider-enabled payout execution;
- implement Campaign Performance/Reporting;
- implement or resume Applicant AI Match;
- implement Marketplace recommendation scoring;
- implement Creator Chat;
- deploy;
- move development/freeze branches;
- publish final Parent acceptance;
- resume Campaign Intelligence.

## Required final report

Return:

~~~text
CANONICAL_RECONCILIATION_FINAL_VALIDATION_RESULT =
READY_FOR_PARENT_REVIEW | CIRCUIT_BREAKER

RUN_STARTED_AT_UTC =
RUN_COMPLETED_AT_UTC =
WALL_CLOCK_SECONDS =
ACTIVE_EXECUTION_SECONDS =
COMMAND_COUNT =
LONGEST_COMMAND =
LONGEST_COMMAND_SECONDS =
WAITING_OR_BLOCKED_SECONDS =

PARENT_ACCEPTANCE_INTEGRITY =
FIXTURE_EVIDENCE_INTEGRITY =
GATE_C_ACCEPTANCE_INTEGRITY =

BACKEND_APPLICATION_COMMIT =
BACKEND_APPLICATION_TREE =
FRONTEND_APPLICATION_COMMIT =
FRONTEND_APPLICATION_TREE =
BACKEND_SUPPORT_COMMIT =
BACKEND_SUPPORT_TREE =
FRONTEND_SUPPORT_COMMIT =
FRONTEND_SUPPORT_TREE =
VALIDATION_SUPPORT_SCOPE =

SCHEMA_BLOB =
MIGRATION_COUNT =
MIGRATION_HISTORY =
PRISMA_GENERATE_VALIDATE =

BACKEND_LINT_BUILD =
CAMPAIGN_READINESS =
INTELLIGENCE_CONTRACT_VERIFY =
BACKEND_FOCUSED =
FRONTEND_TYPECHECK_LINT_BUILD =
CAMPAIGN_AUTOSAVE =
FRONTEND_FOCUSED =
ROUTE_GUARD_AUTH =
FULL_SUITES =

DISPOSABLE_POSTGRESQL =
CLEAN_0_TO_108 =
FIXTURE_SEED =
FIXTURE_MANIFEST =
RESET_RESEED =
ROLE_STORAGE_STATES =

BROWSER_SCENARIOS =
BROWSER_EXECUTIONS =
BROWSER_PASSED =
BROWSER_SKIPPED =
BROWSER_FAILED =
BROWSER_FLAKY_OR_RETRIED =
CRITICAL_AXE_VIOLATIONS =
UNEXPECTED_CONSOLE_ERRORS =
PAGE_ERRORS =
UNHANDLED_API_FAILURES =
NON_LOOPBACK_REQUESTS =

B01 =
B02 =
B03 =
B04 =
B05 =
B06 =
B07 =
B08 =
B09 =
B10 =
B11 =
B12 =

PROVIDER_CALLS =
FINANCIAL_WRITE_AUDIT =
CROSS_SCENARIO_CONTAMINATION =
SECRETS_SCAN =
ARTIFACT_MANIFEST_SHA256 =

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
DEPLOYMENT =
CAMPAIGN_INTELLIGENCE_REMAINS_PAUSED =

SOURCE_WORKTREES_CLEAN =
DISPOSABLE_INFRASTRUCTURE_REMOVED =
PREEXISTING_ACCEPTANCE_CONTAINER =
BLOCKERS =
NEXT_BOUNDARY =
PARENT_REVIEW_ONLY =
~~~

End after the report. Do not publish Parent acceptance or begin Campaign Intelligence work in the same runner turn.
