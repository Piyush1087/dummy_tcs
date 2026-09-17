# Local Codex Runner — Final Validation Fixture and Browser Harness Implementation V1

CANONICAL_RECONCILIATION_FINAL_VALIDATION_FIXTURE_BROWSER_HARNESS_IMPLEMENTATION_V1

## Role

Implement, validate, publish, and immutably evidence the validation-only support authorized for the final whole-application canonical-reconciliation gate.

This run creates the deterministic Gate-C-compatible seed/reset/audit support, local role sessions, central Playwright configuration, and the frozen 12-scenario browser harness.

This run does not perform or claim final whole-application acceptance. It must not execute the complete 30-viewport matrix. It may run focused harness checks plus one public and one authenticated browser smoke as specified below.

## Mandatory telemetry

Start measurement before the first repository or environment action.

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
REPOSITORY_INSPECTION_SECONDS =
BACKEND_FIXTURE_IMPLEMENTATION_SECONDS =
FRONTEND_HARNESS_IMPLEMENTATION_SECONDS =
DISPOSABLE_DATABASE_VALIDATION_SECONDS =
SESSION_GENERATION_SECONDS =
FOCUSED_VALIDATION_SECONDS =
BROWSER_SMOKE_SECONDS =
PUBLICATION_SECONDS =
~~~

Use NOT_MEASURABLE rather than estimating.

## Controlling Parent authorization

Authority repository:

~~~text
Piyush1087/dummy_tcs
~~~

Authorization:

~~~text
COMMIT =
22a6efe76f4591a3d87b6ad512d9a2c47a4a7af7

PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_FINAL_GATE_FIXTURE_IMPLEMENTATION_PARENT_AUTHORIZATION_V1.md

BLOB =
7b4ad79bcab0486eedb068a83683c3a9c66034e7
~~~

Verify the exact commit, path and blob before any mutation. Stop on any mismatch.

Gate C Parent acceptance:

~~~text
COMMIT =
d92e420614af1cab66ac852f2e55b3e52f5cd60b

TREE =
9f73bdf186b6ceab552927689070b2b897771925

PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_GATE_C_CAMPAIGN_OBJECTIVES_PARENT_ACCEPTANCE_V1.md

BLOB =
3db5fcb37b5891022d2859eba94affb34aa05139
~~~

## Immutable accepted application bases

Backend:

~~~text
REPOSITORY =
Piyush1087/creator-commerce-backend-v2-clone

BASE_BRANCH =
reconcile/mvp-canonical-application-v1-gate-c-campaign-objectives-backend

BASE_COMMIT =
1a99cf3f54df849408c8775b20e78c036ee637c3

BASE_TREE =
9679ed60f186220716e948779d3d70dbbf89b39a

SOLE_PARENT =
7883286d8e74b1759518c758c9683fc926374441

MIGRATION_COUNT =
108

SCHEMA_BLOB =
1d9b3a8bf3145d47d326fae88493f7816eef9140

TARGET_BRANCH =
validate/mvp-canonical-final-gate-fixtures-v1
~~~

Frontend:

~~~text
REPOSITORY =
Piyush1087/creator-commerce-frontend-v2-clone

BASE_BRANCH =
reconcile/mvp-canonical-application-v1-gate-c-campaign-objectives-frontend

BASE_COMMIT =
a7c00fb77969a419b31e175d4085b4f574a8bed5

BASE_TREE =
aad8832bc4bcd9a6b3721a0e1e9fe39316fd9741

SOLE_PARENT =
b10a23f67ce9a813cd5664e45e31870c6bd2a7e1

TARGET_BRANCH =
validate/mvp-canonical-final-gate-browser-v1
~~~

The accepted application commits remain the final application checkpoints. The validation branches are support overlays and must never be represented as application-semantic replacements.

## Authority evidence target

~~~text
REPOSITORY =
Piyush1087/dummy_tcs

BASE =
22a6efe76f4591a3d87b6ad512d9a2c47a4a7af7

TARGET_BRANCH =
reconcile/mvp-canonical-application-v1-final-fixture-authority

EVIDENCE_PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_FINAL_VALIDATION_FIXTURE_HARNESS_IMPLEMENTATION_EVIDENCE_V1.md
~~~

## Git and worktree safety

Use fresh isolated checkouts or worktrees at the exact immutable bases.

Before editing:

1. fetch exact objects using direct repository URLs or isolated verification refs;
2. verify commit, tree, sole parent, schema blob and migration count;
3. confirm all three target branches are absent remotely;
4. record clean status for every source and candidate worktree;
5. inspect repository-local Git identity;
6. if identity is missing, set only repository-local identity to:

~~~text
Piyush1087 <piyush.p1087@gmail.com>
~~~

Do not use broad fetch/prune operations in clones with mirror-style refspecs. Do not use a named-remote push that can move a checked-out local ref. Push explicit local commit SHA to the exact remote ref using a direct repository URL, then fetch back into an isolated verification ref.

Check every commit command exit code before any push. Never continue to push after a failed commit.

No force push, rebase, pull request, tag, reset, branch deletion, or mutation of any accepted branch is authorized.

## Phase 0 — inspect before selecting paths

Inspect existing repository conventions and validation assets, including:

- scripts/a3-instagram-browser-fixtures.ts;
- scripts/b4-instagram-browser-fixtures.ts;
- seed-dev-creator.ts;
- seed-dev-c03-opportunity.ts;
- seed-dev-collaboration.ts;
- Media Kit integrated browser proof;
- creator audience/content validation fixtures;
- existing browser .mjs scripts;
- current package manifests and locks;
- authentication endpoints and session/cookie behavior;
- existing local-provider test doubles;
- accepted Campaign objective/hash, C03, C04, Brand Payout and C06 contracts.

Produce an exact proposed changed-path manifest before editing. Classify every path as:

~~~text
BACKEND_FIXTURE_SUPPORT
FRONTEND_BROWSER_SUPPORT
TEST_ONLY_PACKAGE_WIRING
UNAUTHORIZED
~~~

Stop before editing if any required path is UNAUTHORIZED.

## Authorized change boundary

Allowed backend changes:

- deterministic final-gate fixture/seed/reset/audit scripts;
- fixture-only helpers and fixture-only tests;
- local validation runtime orchestration;
- package.json script entries strictly required to invoke validation support;
- package-lock.json only if a strictly required test-only dependency is absent;
- configuration files used only by validation scripts.

Allowed frontend changes:

- central Playwright configuration;
- final-gate e2e/browser specs, helpers, fixtures and assertions;
- local storage-state/session generation support;
- browser evidence and redaction configuration;
- local validation runtime orchestration;
- package.json script entries strictly required to invoke validation support;
- package-lock.json only if a strictly required test-only dependency is absent;
- fixture-only tests.

Prefer a clearly isolated namespace such as scripts/canonical-reconciliation/final-gate, e2e/canonical-reconciliation/final-gate, tests/canonical-reconciliation/final-gate, or the closest existing validation-only convention discovered in the repositories.

Not authorized:

- any production runtime behavior change;
- any production source edit merely to make a scenario pass;
- Prisma schema or migration edit/addition/removal;
- route, role, permission or authorization-policy change;
- provider-enabled behavior;
- payout execution or financial write behavior;
- Product or architecture reinterpretation;
- Campaign Performance/Reporting implementation;
- Applicant AI Match;
- Marketplace recommendation scoring;
- Creator Chat implementation;
- deployment;
- modification of accepted application branches;
- final whole-application evidence or acceptance publication.

If implementation requires any prohibited change, stop with PRODUCTION_CHANGE_REQUIRED and report the exact need.

## Backend final fixture requirements

Create one deterministic final-gate fixture compatible with exactly the accepted 108-migration schema.

It must compose, without inventing Product semantics:

### Identities

Brand:

- Brand Owner;
- Finance Admin;
- Campaign Manager/read-only operational role.

Creator:

- Creator Owner;
- Creator Manager;
- Creator Assistant.

Also support anonymous/public access without an authenticated identity.

### Brand state

- completed Brand onboarding;
- supported Gatekeeper result;
- unsupported Gatekeeper result;
- Brand Preview;
- populated Brand Centre;
- accepted Brand Intelligence current state;
- accepted Product Intelligence/current product state;
- limited Brand Home state;
- limited Brand Chat state;
- Brand Settings general/signup/Instagram/billing states;
- Instagram disconnected, connected-synthetic and provider-unavailable states;
- provider-disabled Brand Payout projection;
- role boundaries for Brand Owner, Finance Admin and Campaign Manager.

### Campaign state

- one current campaign for each canonical objective:
  - AWARENESS;
  - TRUST;
  - ASSETS;
  - ACTION;
- canonical definition hash where required by the accepted Gate C contract;
- a legacy-objective campaign that resolves to Objective unavailable;
- campaign create/edit/autosave/hydration support;
- all three campaign workspace areas;
- accepted product association;
- accepted brief association;
- Reporting remains fail-closed and unimplemented.

### Creator and collaboration state

- Creator onboarding state;
- Creator Home limited state;
- Creator Centre state;
- Creator Settings roles and visibility;
- canonical campaign opportunity;
- canonical C03 application against a Gate-C campaign;
- canonical C03→C04 collaboration handoff;
- Creator Collaboration state;
- provider-disabled Creator Payout projection;
- Creator Assistant payout denial;
- Creator Chat absent/deferred.

### Media Kit state

- public Media Kit;
- verified Brand boundary;
- compatible state for the existing integrated proof.

Do not simply relabel seed-dev-c03-opportunity.ts or seed-dev-collaboration.ts. Adapt or compose their accepted pieces only after proving the final data contains the Gate C objective/hash and canonical C03→C04 handoff.

## Disposable database and reset policy

Implement reproducible local-only database lifecycle support:

1. create a new disposable PostgreSQL 16 instance or isolated database;
2. apply exactly 108 migrations from the accepted backend tree;
3. run the final fixture;
4. validate a deterministic manifest of expected identities, objects, relationships and role grants;
5. support isolated per-scenario clones or deterministic serial restore;
6. destroy the disposable databases externally after validation;
7. restore any pre-existing container/service state.

Never point at, clone from, reset, or mutate:

- the existing acceptance database;
- a shared developer database;
- any non-loopback PostgreSQL endpoint;
- any database not created by this run.

The scripts must fail closed unless an explicit final-gate disposable-run marker is present.

## Local credentials and provider isolation

Generate run-scoped local fixture passwords/tokens. Do not commit values.

Only environment-variable names and redacted presence may be logged.

All application/browser traffic must be loopback-only. Install a central browser request guard that aborts and fails on any non-loopback URL, including provider, analytics, email, storage, payment, Instagram or model endpoints.

Use accepted synthetic/local provider states. No live credential or provider call is permitted.

## Role session/storage-state generator

Implement deterministic local login/session generation for:

- Brand Owner;
- Finance Admin;
- Campaign Manager;
- Creator Owner;
- Creator Manager;
- Creator Assistant.

The generator must:

- start only against the disposable fixture/runtime;
- prove the resolved role/workspace identity after authentication;
- write storage states to a run-scoped ignored artifact directory;
- never commit cookies, tokens, passwords or storage-state outputs;
- redact credentials from stdout and evidence;
- fail if any external endpoint is requested;
- clean generated session files after the implementation validation, except sanitized manifests.

Do not invent an authentication bypass if the application already provides an accepted local login path.

## Frozen browser matrix

Implement exactly these 12 scenario identities and 30 viewport executions:

| ID | Role/state | Scope | Widths |
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

Ensure Playwright listing or an equivalent deterministic manifest proves exactly 12 scenarios and 30 executions. Do not multiply the matrix beyond this authorization.

## Browser assertion policy

Every implemented execution must be configured to:

- reject non-loopback traffic;
- fail on unexpected console errors;
- fail on page errors;
- fail on unexpected response failures or unhandled API failures;
- assert route mounting and principal content;
- assert the expected authenticated identity and role;
- perform keyboard/focus checks on the principal path;
- run Axe on stable rendered shells where applicable;
- capture relevant authorization outcome;
- record database before/after audit identifiers for payout/collaboration flows.

Do not make assertions dependent on animation timing, unordered timestamps, generated IDs without manifest lookup, or brittle CSS-only selectors when semantic roles/test IDs exist.

## Artifact policy

Configure:

- sanitized run summary and assertion manifest for every run;
- screenshot on failure;
- trace on first retry and final failure;
- video retained on failure only;
- Axe JSON;
- browser console and page-error log;
- blocked-network log;
- database before/after audit for payout and collaboration scenarios;
- secret-value redaction;
- run-scoped ignored output directories.

Do not commit generated artifacts or session state.

## Financial and provider audit

Implement a deterministic before/after audit that can prove during later final validation:

- no payout execution;
- no C06 financial write;
- no unauthorized Brand Payout financial write;
- no provider call;
- no out-of-scope collaboration mutation;
- only explicitly expected scenario writes occur, such as authorized campaign creation or C03 application/handoff.

The audit must identify allowed write classes and fail on any unclassified write. Do not weaken database triggers or accepted append-only protections.

## Required implementation validation

After implementation and before publication:

### Integrity

- verify backend and frontend bases remain exact;
- verify the original accepted application branches remain unchanged;
- verify Prisma schema blob remains 1d9b3a8bf3145d47d326fae88493f7816eef9140;
- verify migration count remains 108;
- verify all 108 migration names and contents are unchanged;
- verify changed paths are validation-only;
- scan tracked changes and proposed evidence for secret values.

### Backend fixture

Against a fresh disposable PostgreSQL 16 database:

- apply 0→108 successfully;
- run the final fixture successfully;
- validate the fixture manifest;
- prove the four canonical objectives and legacy objective state;
- prove canonical C03→C04 handoff;
- prove payout/provider-disabled states and roles;
- prove reset or clone isolation;
- prove no provider call;
- prove no unauthorized financial write.

### Harness and sessions

- install from the checked-in lockfiles;
- generate all six authenticated role storage states;
- verify resolved role/workspace for each;
- list exactly 12 scenarios and 30 viewport executions;
- run focused fixture/harness tests;
- verify loopback guard with a deliberately blocked synthetic external URL;
- verify artifact redaction with a synthetic local secret;
- verify failure artifact policy without publishing a real credential.

### Limited browser smoke

Run only:

- B01 at one authorized viewport; and
- one authenticated scenario at one authorized viewport, preferably B02 or B11.

The smoke must start the exact validation-support overlays on the accepted application bases, use the disposable fixture, and enforce the full network/error/audit policy.

Do not run the complete 30-execution matrix in this implementation gate.

### Regression boundary

Run targeted checks affected by package/config/test-support wiring.

Full backend/frontend suites may be reused from accepted immutable evidence unless:

- a changed path intersects production/test compilation globally;
- package or lock changes could affect the suites;
- a focused check exposes a regression;
- the repository command requires full-suite proof for the changed configuration.

If any condition applies, run the relevant full suite before publication. Run backend and frontend full suites in parallel where safe.

## Commit and publication

Only after every required implementation validation passes:

1. create one backend validation-support commit with sole parent 1a99cf3f54df849408c8775b20e78c036ee637c3;
2. create one frontend validation-support commit with sole parent a7c00fb77969a419b31e175d4085b4f574a8bed5;
3. publish the exact target branches without force;
4. independently fetch back each branch to isolated verification refs;
5. verify commit, tree, sole parent, changed-path manifest, schema and migrations;
6. create the authority evidence file from authorization commit 22a6efe76f4591a3d87b6ad512d9a2c47a4a7af7;
7. publish its exact target branch without force;
8. independently fetch back and verify commit, tree, sole parent, one-file path scope and blob;
9. ensure all source and publication worktrees are clean.

If any target branch appears before publication with an unexpected head, stop. Do not delete, overwrite or force-update it.

## Evidence requirements

The evidence file must include:

- result header;
- mandatory telemetry;
- Parent authorization verification;
- application-base integrity;
- exact changed-path tables and classification;
- backend/frontend commits, trees, sole parents and branch names;
- schema blob, migration count and migration-subtree/hash continuity;
- fixture manifest summary;
- role/session manifest without secrets;
- exact scenario and viewport manifest;
- disposable PostgreSQL lifecycle result;
- loopback/provider/financial audit results;
- focused test and smoke results;
- full-suite reuse or rerun rationale and results;
- artifact/redaction policy;
- fetch-back verification;
- clean-worktree verification;
- explicit exclusions;
- blockers;
- next boundary.

## Circuit breakers

Stop without committing or publishing if any occurs before publication:

~~~text
PARENT_AUTHORIZATION_MISMATCH
GATE_C_ACCEPTANCE_MISMATCH
BACKEND_OR_FRONTEND_BASE_MISMATCH
TARGET_BRANCH_ALREADY_EXISTS
SCHEMA_OR_MIGRATION_CHANGE_REQUIRED
PRODUCTION_RUNTIME_CHANGE_REQUIRED
PRODUCT_STATE_UNDEFINED
AUTHORIZATION_POLICY_CHANGE_REQUIRED
LIVE_CREDENTIAL_REQUIRED
NON_LOOPBACK_DEPENDENCY_REQUIRED
PROVIDER_CALL_REQUIRED
PAUSED_LANE_REQUIRED
FIXTURE_NONDETERMINISM
ROLE_SESSION_VERIFICATION_FAILURE
SCENARIO_OR_VIEWPORT_COUNT_MISMATCH
DISPOSABLE_DATABASE_ISOLATION_FAILURE
UNAUTHORIZED_FINANCIAL_WRITE
SECRET_VALUE_EXPOSED
FOCUSED_TEST_OR_SMOKE_FAILURE
COMMIT_FAILURE
FETCH_BACK_MISMATCH
SOURCE_WORKTREE_CONTAMINATION
~~~

After any implementation branch is published, do not delete, rewrite or force-update it when a later breaker occurs. Report the partial state and stop for Parent disposition.

## Explicit exclusions

Do not:

- change accepted application semantics;
- modify schema or migrations;
- implement Campaign Performance/Reporting;
- implement or resume Applicant AI Match;
- implement Marketplace recommendation scoring;
- implement Creator Chat;
- enable payout providers or execution;
- deploy;
- run the full final matrix;
- publish final whole-application acceptance;
- publish a final canonical checkpoint or tag;
- resume Campaign Intelligence.

## Required final report

Return:

~~~text
FINAL_VALIDATION_FIXTURE_HARNESS_IMPLEMENTATION_RESULT =
READY_FOR_PARENT_REVIEW | CIRCUIT_BREAKER

RUN_STARTED_AT_UTC =
RUN_COMPLETED_AT_UTC =
WALL_CLOCK_SECONDS =
ACTIVE_EXECUTION_SECONDS =
COMMAND_COUNT =
LONGEST_COMMAND =
LONGEST_COMMAND_SECONDS =
WAITING_OR_BLOCKED_SECONDS =

PARENT_AUTHORIZATION_INTEGRITY =
GATE_C_ACCEPTANCE_INTEGRITY =
BACKEND_BASE_INTEGRITY =
FRONTEND_BASE_INTEGRITY =

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

SCHEMA_BLOB =
MIGRATION_COUNT =
MIGRATION_HISTORY_PRESERVED =

FIXTURE_SEED =
FIXTURE_MANIFEST =
CANONICAL_OBJECTIVES =
LEGACY_OBJECTIVE =
C03_TO_C04_HANDOFF =
PAYOUT_STATES =
DISPOSABLE_RESET_ISOLATION =

ROLE_STORAGE_STATES =
SCENARIO_COUNT =
VIEWPORT_EXECUTION_COUNT =
PLAYWRIGHT_LIST =
LOOPBACK_GUARD =
PROVIDER_AUDIT =
FINANCIAL_WRITE_AUDIT =
ARTIFACT_REDACTION =

FOCUSED_TESTS =
PUBLIC_SMOKE =
AUTHENTICATED_SMOKE =
FULL_SUITES =

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

End after the implementation evidence report. Do not begin final validation automatically within the same runner turn.
