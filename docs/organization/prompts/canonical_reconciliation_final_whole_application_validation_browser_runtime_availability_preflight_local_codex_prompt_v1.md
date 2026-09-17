# Local Codex Runner — Final Whole-Application Validation and Browser Runtime Availability Preflight V1

CANONICAL_RECONCILIATION_FINAL_WHOLE_APPLICATION_VALIDATION_BROWSER_RUNTIME_AVAILABILITY_PREFLIGHT_V1

## Role

Perform a short, read-only final-gate availability preflight against the exact accepted Gate C canonical-reconciliation checkpoints.

Determine:

1. whether final non-browser whole-application validation can begin immediately;
2. whether the coordinated seeded backend/frontend/browser runtime already exists;
3. whether browser acceptance requires environment-only setup or repository fixture implementation;
4. the exact final validation matrix, commands, infrastructure, branches, evidence plan, wall-clock estimate, and blockers.

Do not implement, validate the whole application, publish branches, or create evidence during this preflight.

## Time objective

This is a bounded availability inspection, not the final validation run.

Target wall-clock duration:

~~~text
EXPECTED_PREFLIGHT_WALL_CLOCK =
10 TO 20 MINUTES
~~~

Do not install dependencies, start containers, migrate databases, build applications, or run full test/browser suites merely to prove availability.

Allowed lightweight commands include version checks, file/config inspection, package-script listing, Playwright test listing, executable/path detection, Docker/PostgreSQL status inspection, and port/process inspection.

## Mandatory telemetry

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
NON_BROWSER_GATE_INVENTORY_SECONDS =
BROWSER_RUNTIME_INVENTORY_SECONDS =
FIXTURE_AND_ROLE_MATRIX_ANALYSIS_SECONDS =
FINAL_PLAN_AND_ESTIMATE_SECONDS =
~~~

Use `NOT_MEASURABLE` rather than estimating.

## Controlling Parent authority

~~~text
AUTHORITY_REPOSITORY =
Piyush1087/dummy_tcs

GATE_C_PARENT_ACCEPTANCE_COMMIT =
d92e420614af1cab66ac852f2e55b3e52f5cd60b

GATE_C_PARENT_ACCEPTANCE_PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_GATE_C_CAMPAIGN_OBJECTIVES_PARENT_ACCEPTANCE_V1.md

GATE_C_EVIDENCE_COMMIT =
49a498c29a073473513896a7ec580682049e4169

GATE_C_EVIDENCE_TREE =
4620d04bf2526f5909429ca1ddf2cb986aca338d

GATE_C_EVIDENCE_BLOB =
cfc8b9a490861e7c5e62404941f8fb3924fbf9d4
~~~

Verify each supplied immutable object before inspection.

## Exact accepted application checkpoints

Backend:

~~~text
REPOSITORY =
Piyush1087/creator-commerce-backend-v2-clone

BRANCH =
reconcile/mvp-canonical-application-v1-gate-c-campaign-objectives-backend

COMMIT =
1a99cf3f54df849408c8775b20e78c036ee637c3

TREE =
9679ed60f186220716e948779d3d70dbbf89b39a

SOLE_PARENT =
7883286d8e74b1759518c758c9683fc926374441

MIGRATION_COUNT =
108

SCHEMA_BLOB =
1d9b3a8bf3145d47d326fae88493f7816eef9140
~~~

Frontend:

~~~text
REPOSITORY =
Piyush1087/creator-commerce-frontend-v2-clone

BRANCH =
reconcile/mvp-canonical-application-v1-gate-c-campaign-objectives-frontend

COMMIT =
a7c00fb77969a419b31e175d4085b4f574a8bed5

TREE =
aad8832bc4bcd9a6b3721a0e1e9fe39316fd9741

SOLE_PARENT =
b10a23f67ce9a813cd5664e45e31870c6bd2a7e1
~~~

Use direct repository URLs or isolated refs. Do not use broad fetch/prune operations or modify any existing worktree.

## Authorization boundary

Authorized:

- read-only Git/object verification;
- clean disposable checkout creation if needed for inspection;
- package.json and lockfile inspection;
- test/config/script inventory;
- browser binary and Playwright cache detection;
- Docker/PostgreSQL client/server status inspection;
- local process and port inspection;
- environment-variable-name and file-presence inspection;
- fixture, seed, auth-state, role, route, and browser-test inspection;
- lightweight `--list`, `--version`, `which`/equivalent, and configuration-validation commands that do not install or execute application tests;
- final execution-plan and effort estimation.

Not authorized:

- source or documentation edit;
- branch, commit, tag, PR, push, or evidence publication;
- dependency installation;
- browser download;
- database/container creation or mutation;
- migration execution;
- application startup;
- full or focused test execution;
- live provider/model call;
- use or disclosure of secret values;
- deployment;
- Campaign Performance/Reporting or Applicant AI Match resumption;
- Marketplace recommendation-score work;
- final canonical publication.

If inspecting environment variables, report names and presence only. Never output values.

## Prior accepted validation context

Do not rerun these during preflight. Use them to avoid unnecessary final-gate duplication while still planning a defensible final check:

~~~text
BACKEND_FULL =
7326 PASSED
955 SKIPPED
ZERO FAILED

FRONTEND_FULL =
1417 PASSED
1 SKIPPED
ZERO FAILED

BACKEND_LINT_BUILD =
PASS

FRONTEND_TYPECHECK_LINT_AUTOSAVE_BUILD =
PASS

CAMPAIGN_READINESS =
31 / 31 PASS

INTELLIGENCE_CONTRACT_VERIFY =
PASS

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

RESPONSIVE_KEYBOARD_ACCESSIBILITY =
PASS FOR REPOSITORY_DEFINED TESTS

INTEGRATED_BROWSER =
NOT YET ACCEPTED
~~~

The final non-browser run should validate the exact published Gate C checkpoints and whole-application preservation, not blindly repeat every historical command when immutable accepted evidence is sufficient.

## Required environment inventory

Report `AVAILABLE`, `MISSING`, `STALE`, `UNKNOWN`, or `REQUIRES_SETUP` for:

- Node.js and npm versions;
- backend/frontend lockfile compatibility;
- installed backend/frontend dependencies or reusable package cache;
- Docker client and server;
- PostgreSQL client/server;
- disposable PostgreSQL capability;
- Chrome/Chromium executable;
- Playwright package version;
- Playwright browser cache and executable integrity;
- browser sandbox/headless requirements;
- backend and frontend local port availability;
- local loopback networking;
- application start scripts;
- health/readiness endpoints;
- Prisma generate/validate capability;
- clean and populated fixture scripts;
- browser/e2e scripts;
- Playwright configuration and projects;
- screenshot/video/trace output configuration;
- Axe or equivalent accessibility integration;
- responsive viewport configuration;
- authenticated storage-state/session setup;
- API/base-URL wiring;
- provider/mock/fail-closed configuration;
- email/payment/Instagram external dependency isolation.

Do not treat installed tooling alone as a usable browser fixture.

## Required fixture and authentication inspection

Determine whether checked-in or local reusable artifacts exist for:

### Brand identities

- Brand Owner;
- Finance Admin where Brand Payout requires it;
- Campaign Manager/read-only operational role;
- unauthenticated/public visitor where relevant.

### Creator identities

- Creator Owner;
- Creator Manager;
- Creator Assistant/denied payout role;
- unauthenticated/public visitor where relevant.

### Required application state

- completed Brand onboarding;
- Gatekeeper supported and unsupported result;
- Brand Preview;
- populated Brand Centre;
- Brand and Product Intelligence current state;
- canonical Campaign with `AWARENESS | TRUST | ASSETS | ACTION`;
- legacy-objective Campaign showing `Objective unavailable`;
- Campaign create/edit/autosave/hydration;
- Campaign workspace, add-product, and add-brief data;
- C03 application;
- C04 collaboration;
- provider-disabled Brand Payout;
- provider-disabled Creator Payout;
- Brand Settings states;
- Creator Settings states;
- Instagram disconnected/connected/provider-unavailable states without live provider access;
- Brand Home limited implementation;
- Creator Home limited implementation;
- Brand Chat limited implementation;
- Creator Chat remains deferred;
- Creator onboarding;
- Creator Centre;
- public/verified Media Kit boundary where included in the accepted chain.

For every state, identify:

- existing fixture/seed/auth artifact and path;
- whether it works against the exact Gate C schema;
- required environment-variable names;
- whether secrets or live systems are required;
- whether the state can be created entirely in a disposable local environment;
- gaps.

Do not invent Product state merely for browser acceptance.

## Final whole-application coverage census

Map the final validation/browser obligation across this accepted scope:

### Brand

1. Brand onboarding journey;
2. Gatekeeper scan;
3. Brand Preview;
4. Brand Centre;
5. Brand Intelligence;
6. Product Intelligence;
7. Campaign create;
8. Campaign workspace and its three workspaces;
9. Add Product;
10. Add Brief;
11. Campaign canonical objectives;
12. Collaboration;
13. Settings — organization, signup, Instagram connect, billing;
14. Brand Payout;
15. Brand Home;
16. Brand Chat limited implementation.

### Creator

17. Creator onboarding;
18. Creator–Campaign apply;
19. Creator Settings;
20. Creator Collaboration;
21. Creator Payout;
22. Creator Home;
23. Creator Chat limited/deferred boundary;
24. Creator Centre;
25. public/verified Media Kit where present.

### Explicit exclusions

- Campaign Performance/Reporting implementation;
- Applicant AI Match;
- Marketplace recommendation score;
- provider-enabled payout execution;
- deployment.

Return a table:

| Surface | Canonical checkpoint coverage | Existing repository tests | Existing browser scenario | Fixture/auth readiness | Final browser obligation | Gap |
|---|---|---|---|---|---|---|

Do not equate a route file with accepted browser coverage.

## Browser acceptance matrix design

Propose the smallest defensible integrated-browser matrix.

It must cover:

- representative Brand and Creator authenticated sessions;
- required authorization denial;
- public route where applicable;
- high-risk cross-module flows;
- canonical and legacy Campaign objective states;
- C06 provider-disabled and Assistant-denied behavior;
- C04 collaboration handoff;
- Settings/Instagram fail-closed behavior;
- no live provider call;
- navigation and route mounting;
- no console/page errors;
- widths 390, 767, 768, and 1440;
- keyboard/focus;
- accessibility using checked-in Axe/equivalent support where available.

Avoid multiplying every route by every role and viewport when repository-level responsive/accessibility tests already provide accepted lower-level coverage.

Return:

- exact scenario count;
- exact role/state combinations;
- which scenarios run at all four widths;
- which run at representative mobile/desktop widths;
- expected browser runtime;
- seed/reset strategy;
- artifact capture policy;
- failure/circuit-breaker policy.

## Non-browser final validation plan

Determine the smallest final Gate that still proves the published Gate C checkpoints and whole-application preservation.

Classify each as:

~~~text
RERUN
REUSE_IMMUTABLE_EVIDENCE
TARGETED_RERUN
NOT_APPLICABLE
REQUIRES_INFRASTRUCTURE
~~~

Cover:

- branch/commit/tree/path integrity;
- migration count and original history;
- Prisma generate/validate;
- clean 0→108;
- populated 106→108;
- backend full suite;
- frontend full suite;
- lint/typecheck/build;
- Campaign readiness;
- Intelligence contract verification;
- C03/C04/C06/Brand Payout PostgreSQL;
- route/guard/authorization tests;
- responsive/accessibility tests;
- provider/financial-write proof;
- secrets scan;
- browser matrix;
- clean worktrees;
- evidence publication and fetch-back.

State which tasks can run in parallel and estimate critical-path wall time from observed durations:

~~~text
RECENT_BACKEND_FULL_SECONDS =
426.87

RECENT_FRONTEND_FULL_SECONDS =
596.85

RECENT_GATE_A_COMPREHENSIVE_WALL_SECONDS =
4346.673

RECENT_GATE_C_INITIAL_WALL_SECONDS =
1994.945

RECENT_GATE_C_CORRECTION_WALL_SECONDS =
1005.563
~~~

Do not use generic developer-day estimates.

## Final publication topology proposal

Without creating anything, recommend:

- whether the accepted Gate C implementation commits themselves should become the immutable final application checkpoints;
- whether new no-code backend/frontend commits are unnecessary;
- exact proposed final authority branch and evidence path;
- whether navigation aliases/branch pointers are sufficient;
- exact Parent acceptance sequence;
- whether any tags are needed;
- how Campaign Intelligence delta preflight will reference the final checkpoint.

Prefer immutable commit identities over redundant no-code commits.

## Required disposition

Return one:

~~~text
FINAL_GATE_PREFLIGHT_RESULT =
READY_EXISTING_RUNTIME
READY_ENVIRONMENT_SETUP_ONLY
FIXTURE_IMPLEMENTATION_REQUIRED
BLOCKED_EXTERNAL_DEPENDENCY
AUTHORITY_OR_CHECKPOINT_BLOCKER
~~~

Definitions:

- `READY_EXISTING_RUNTIME`: coordinated runtime, seeds, auth states, browser, and scripts already exist.
- `READY_ENVIRONMENT_SETUP_ONLY`: no repository code/fixture change is needed; bounded local setup is sufficient.
- `FIXTURE_IMPLEMENTATION_REQUIRED`: checked-in fixture/auth/browser support must be added or corrected.
- `BLOCKED_EXTERNAL_DEPENDENCY`: completion requires unavailable credentials, service, browser binary, or infrastructure.
- `AUTHORITY_OR_CHECKPOINT_BLOCKER`: immutable accepted inputs are invalid or unavailable.

Also return:

~~~text
FINAL_NON_BROWSER_VALIDATION_CAN_BEGIN =
YES | NO

INTEGRATED_BROWSER_ACCEPTANCE_CAN_BEGIN =
YES | NO

REPOSITORY_MUTATION_REQUIRED_BEFORE_FINAL_GATE =
YES | NO

PARENT_DECISION_REQUIRED =
YES | NO
~~~

## Circuit breakers

Stop if any occurs:

~~~text
GATE_C_PARENT_ACCEPTANCE_MISMATCH
BACKEND_OR_FRONTEND_CHECKPOINT_MOVED
GATE_C_EVIDENCE_MISMATCH
MIGRATION_OR_SCHEMA_MISMATCH
LIVE_OR_PRODUCTION_CREDENTIAL_REQUIRED
PROVIDER_CALL_REQUIRED
PRODUCT_STATE_UNDEFINED
PAUSED_LANE_REQUIRED
READ_ONLY_PREFLIGHT_SCOPE_EXCEEDED
SECRET_VALUE_EXPOSED
~~~

## Required final report

Return:

1. result header and telemetry;
2. immutable checkpoint integrity;
3. environment inventory;
4. fixture/authentication inventory;
5. 25-surface coverage census;
6. exact proposed browser matrix;
7. browser runtime readiness result;
8. non-browser final validation plan with reuse/rerun classification;
9. parallel execution plan and observed-time forecast;
10. exact missing artifacts or environment-only setup;
11. publication topology;
12. blockers and Parent decisions;
13. the four required disposition fields;
14. next boundary.

End after the report. Do not install, implement, execute final validation, publish evidence, or resume Campaign Intelligence.
