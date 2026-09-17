# Local Codex Runner — Final Validation Fixture and Scenario Harness Correction V2

CANONICAL_RECONCILIATION_FINAL_VALIDATION_FIXTURE_SCENARIO_HARNESS_CORRECTION_V2

## Role

Correct the incomplete final-validation fixture and browser harness without modifying application runtime code.

The V1 harness proved generic route mounting and shared browser safety, but it did not implement the scenario-specific operations, state assertions, isolation, and per-scenario database audit required for final acceptance.

Build V2 as direct-child validation-only overlays, execute one representative browser run for each B01–B12 scenario, publish immutable correction evidence only if all twelve meaningful scenario executions pass, and stop for Parent review.

Do not run the later full 30-viewport final matrix in this correction gate.

## Mandatory telemetry

Start before the first Git, repository, environment, database, or browser action.

~~~text
RUN_STARTED_AT_UTC =
RUN_COMPLETED_AT_UTC =
WALL_CLOCK_SECONDS =
ACTIVE_EXECUTION_SECONDS = <if measurable>
COMMAND_COUNT =
LONGEST_COMMAND =
LONGEST_COMMAND_SECONDS =
WAITING_OR_BLOCKED_SECONDS = <if measurable>

AUTHORITY_AND_CHECKPOINT_VERIFICATION_SECONDS =
APPLICATION_CAPABILITY_MAPPING_SECONDS =
BACKEND_FIXTURE_CORRECTION_SECONDS =
FRONTEND_SCENARIO_CORRECTION_SECONDS =
FOCUSED_VALIDATION_SECONDS =
REPRESENTATIVE_BROWSER_SECONDS =
AUDIT_SECONDS =
PUBLICATION_SECONDS =
CLEANUP_SECONDS =
~~~

Use NOT_MEASURABLE rather than estimating.

## Controlling Parent disposition

Repository:

~~~text
Piyush1087/dummy_tcs
~~~

Disposition:

~~~text
COMMIT =
e0b8678ffa89756de2fed0f11ce69fed5ecafa6f

PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_FINAL_VALIDATION_HARNESS_SCOPE_MISMATCH_PARENT_DISPOSITION_V1.md

BLOB =
94eea1dd4325b2201fa4d942a92d9c5b57bc6c03
~~~

Verify the exact commit, path and blob before mutation.

The prior harness Parent acceptance at 5941fc08812e2a4bc27d138f076d741e5e097ecf is superseded. The prior final-validation prompt at 8aacdf485dfb9094b2ec94311d63e4d785d7c995 is withdrawn. Do not use either as current execution authority.

## Accepted application checkpoints

Backend application:

~~~text
REPOSITORY =
Piyush1087/creator-commerce-backend-v2-clone

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

COMMIT =
a7c00fb77969a419b31e175d4085b4f574a8bed5

TREE =
aad8832bc4bcd9a6b3721a0e1e9fe39316fd9741
~~~

No application change is authorized.

## V1 source checkpoints

Backend V1 support:

~~~text
BRANCH =
validate/mvp-canonical-final-gate-fixtures-v1

COMMIT =
99df138ef5602709cfd9850e5630606b7889f237

TREE =
77754f4db336cf9023765ffeeeb2b440aa45bc18

SOLE_PARENT =
1a99cf3f54df849408c8775b20e78c036ee637c3
~~~

Frontend V1 support:

~~~text
BRANCH =
validate/mvp-canonical-final-gate-browser-v1

COMMIT =
8f600d955b27f55d011adbc5513888b763674509

TREE =
4fd70320cd3beb74ca708123093ba7e73863f9b6

SOLE_PARENT =
a7c00fb77969a419b31e175d4085b4f574a8bed5

INCOMPLETE_SPEC_BLOB =
debc0449dc0a87031d63b47ef598acb5f54b4322
~~~

V1 remains immutable. Do not rewrite or force-update it.

## V2 publication targets

Backend:

~~~text
BRANCH =
validate/mvp-canonical-final-gate-fixtures-v2

SOLE_PARENT =
99df138ef5602709cfd9850e5630606b7889f237
~~~

Frontend:

~~~text
BRANCH =
validate/mvp-canonical-final-gate-browser-v2

SOLE_PARENT =
8f600d955b27f55d011adbc5513888b763674509
~~~

Authority evidence:

~~~text
REPOSITORY =
Piyush1087/dummy_tcs

BRANCH =
reconcile/mvp-canonical-application-v1-final-harness-correction-authority

SOLE_PARENT =
e0b8678ffa89756de2fed0f11ce69fed5ecafa6f

PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_FINAL_VALIDATION_HARNESS_CORRECTION_EVIDENCE_V1.md
~~~

Verify all three branches are absent before work. Stop on collision.

## Git and worktree safety

Use fresh isolated checkouts at the exact V1 support commits.

Before editing:

- verify Parent disposition;
- verify application and V1 support commit/tree/parent identities;
- verify V1 changed-path scopes;
- verify schema blob and all 108 migrations;
- verify accepted application and V1 branches have not moved;
- verify V2 branches are absent;
- record clean tracked status.

Use direct repository URLs and isolated verification refs. Avoid broad fetch/prune in mirror-style clones.

Set repository-local Git identity only if missing:

~~~text
Piyush1087 <piyush.p1087@gmail.com>
~~~

Do not force, rebase, reset, amend, delete branches, create tags/PRs, or move application/V1 branches.

## Absolute change boundary

Authorized backend changes:

- existing V1 final-gate validation-only files;
- new files only under scripts/canonical-reconciliation/final-gate;
- validation-only Vitest configuration;
- package.json validation script wiring if required;
- .gitignore only for generated validation artifacts.

Authorized frontend changes:

- existing V1 final-gate validation-only files;
- new files only under e2e/canonical-reconciliation/final-gate;
- final-gate Playwright/Vitest configuration;
- package.json validation script wiring if required;
- .gitignore only for generated validation artifacts.

Not authorized:

- any production src change;
- Prisma schema or migration change;
- lockfile change unless an already-authorized test dependency is genuinely absent; stop for Parent review instead of adding an unapproved dependency;
- application route/API/permission change;
- Product or architecture decision;
- weakening any B01–B12 obligation;
- replacing a missing application action with direct database mutation;
- live provider/model/email/payment/Instagram call;
- Campaign Performance/Reporting implementation;
- Applicant AI Match;
- Marketplace recommendation score;
- Creator Chat implementation;
- payout execution;
- deployment;
- final whole-application acceptance;
- Campaign Intelligence resumption.

If a required accepted application capability is absent, stop with APPLICATION_CAPABILITY_GAP. Do not fix application code.

## Phase 0 — application-capability and fixture-state map

Before editing, inspect the accepted application code and existing tests/fixtures to identify for every B01–B12 requirement:

- exact route;
- exact visible labels/test IDs/semantic roles;
- exact API method/path/status;
- exact actor role;
- exact prerequisite state;
- existing accepted fixture/source to reuse;
- expected database objects;
- expected allowed writes;
- expected prohibited writes;
- whether the interaction is available through UI;
- whether an accepted UI legitimately delegates to an existing API.

Produce a local table:

| Scenario | Required operation | UI/API surface | Initial state | Expected state | DB assertions | Capability status |
|---|---|---|---|---|---|---|

Capability status must be one of:

~~~text
AVAILABLE
AVAILABLE_WITH_VALIDATION_FIXTURE
MISSING_APPLICATION_CAPABILITY
UNDEFINED_PRODUCT_STATE
~~~

Stop before editing if any status is MISSING_APPLICATION_CAPABILITY or UNDEFINED_PRODUCT_STATE.

Do not infer availability from route declarations alone.

## Typed scenario contract

Replace the path-only proof with a typed scenario contract.

Each scenario contract must include:

~~~text
id
primaryRole
secondaryRole
initialFixtureProfile
viewports
orderedOperations
visibleAssertions
denialAssertions
allowedApiInteractions
allowedWriteClasses
prohibitedWriteClasses
expectedFinalState
axeShells
keyboardFocusTarget
isolationMode
~~~

Static validation must fail when:

- a scenario has zero ordered operations;
- a scenario has only NAVIGATE/BODY_VISIBLE operations;
- visible assertions are absent;
- a denial/fail-closed scenario lacks a denial assertion;
- a mutating scenario lacks allowed-write declarations;
- a sensitive scenario lacks a before/after audit;
- a secondary role is declared but never used;
- any required scenario or viewport is missing;
- total identities are not 12 or total final executions are not 30.

Shared route-mount, focus, Axe, console and loopback helpers may remain, but they are preconditions rather than scenario proof.

## Backend fixture correction

Inspect the V1 fixture against actual schema and accepted module fixtures. Add deterministic validation-only state where missing.

Required addressable profiles/state:

### Shared identities

- Brand Owner;
- Finance Admin;
- Campaign Manager;
- Creator Owner;
- Creator Manager;
- Creator Assistant.

### B01

- public Campaign with asserted identity/content;
- public Media Kit with asserted creator identity/content;
- no private control in public state.

### B02

- verified Brand;
- limited Brand Home state;
- populated Brand Centre;
- Brand Intelligence current projection;
- Product Intelligence current projection;
- verified Media Kit boundary;
- limited Brand Chat state.

### B03/B04

- deterministic supported Gatekeeper result and accepted Preview/Centre progression;
- deterministic unsupported Gatekeeper result and fail-closed/recovery state;
- no external provider dependency.

Prefer accepted test providers or persisted accepted projections. Do not simulate a live provider.

### B05/B06/B07

- distinct pre-action data suitable for UI Campaign creation/edit/autosave/hydration;
- AWARENESS, TRUST, ASSETS and ACTION canonical definitions/hashes;
- accepted Campaign workspace state and all three tabs;
- accepted Product and Brief data;
- legacy Objective unavailable state;
- Reporting fail-closed/unimplemented.

Do not rely on a campaign that cannot safely support the required browser mutation.

### B08

Provide a pre-action canonical opportunity with:

- no existing application for the acting Creator;
- no existing collaboration for that opportunity;
- accepted Campaign/asset/brief/creator eligibility;
- state that permits the Creator Owner to apply;
- state that permits the Brand Owner to perform the accepted approval/handoff through an existing authorized surface.

Keep the V1 already-completed C03→C04 record as a reference only if useful, but B08 must prove the action path without duplicate/conflicting state.

### B09/B10

- provider-disabled Brand Payout projections;
- Brand Owner visibility;
- Finance Admin visibility;
- Campaign Manager read-only/no-financial-row behavior;
- no execution/retry/manual-trigger action;
- zero provider mappings, financial-authority instructions and payout receipts before the test.

### B11/B12

- Creator onboarding completed state;
- limited Creator Home;
- Creator Centre;
- Creator Settings;
- provider-disabled Creator Payout projection;
- Creator Assistant non-enumerating denial;
- Creator Manager and Assistant C04/settings visibility;
- deterministic Instagram disconnected state;
- deterministic connected-synthetic state;
- deterministic provider-unavailable state;
- Creator Chat absent/deferred.

If multiple identities or workspaces are needed to represent mutually exclusive Instagram states, add them only as validation fixture identities/state while preserving the six required role sessions.

## Scenario reset and seed profiles

Implement deterministic scenario lifecycle commands or callable functions:

~~~text
prepare scenario
validate precondition
capture before audit
execute browser scenario
capture after audit
validate outcome
reset
~~~

Before every scenario identity:

- retain 108 migration records;
- reset application tables;
- seed the base final fixture;
- apply the exact scenario profile;
- validate its precondition manifest;
- generate/validate required role sessions;
- capture the baseline audit.

After every scenario identity:

- capture after-state;
- compare allowed/prohibited writes;
- validate expected outcome;
- reject unclassified writes;
- verify provider/financial invariants;
- write sanitized audit result;
- reset before the next scenario.

For mutating B05 and B08, isolate each representative execution and, in the later final matrix, each viewport execution. An exact disposable database clone/restore may be used instead of reset/reseed if simpler and deterministic.

The browser/orchestration layer must actually invoke this lifecycle. A standalone unused script is insufficient.

## Audit correction

Extend validation-only audit support to capture and compare at least:

- users and memberships relevant to role leakage;
- campaigns and canonicalDefinitionHash;
- campaign products and briefs;
- applications, application status/version and domain events;
- collaborations and sourceApplicationId;
- collaboration snapshots/agreements;
- provider mappings;
- financial-authority instructions;
- payout receipts;
- payout obligations/projections where relevant;
- Instagram connection/provider-state records;
- any other tables mutated by B03, B05 or B08.

For each scenario declare:

- allowed inserted/updated/deleted classes;
- exact expected count/range;
- prohibited classes;
- final-state predicates.

Deletes of protected/append-only financial or collaboration history are never allowed.

## Required scenario implementations

### B01 — anonymous public

Operations:

1. open the deterministic public Campaign;
2. assert campaign name/identity and public content;
3. assert no authenticated/private controls;
4. open the public Media Kit;
5. assert creator identity/content;
6. assert no private availability/control leakage.

### B02 — verified Brand Owner

Operations/assertions:

1. verify Brand Owner identity/workspace;
2. assert limited Brand Home content;
3. assert Brand Centre current state;
4. assert current Brand Intelligence projection;
5. assert current Product Intelligence projection;
6. assert verified Media Kit boundary;
7. assert limited Brand Chat only, without implying deferred features.

### B03 — supported Gatekeeper

Operations:

1. start at the accepted onboarding/Gatekeeper surface in supported state;
2. trigger or continue the accepted supported result;
3. assert Brand Preview;
4. use the accepted CTA/navigation into Brand Centre;
5. assert completed/current Brand Centre state;
6. exercise principal keyboard/focus order.

### B04 — unsupported Gatekeeper

Operations:

1. start in deterministic unsupported state;
2. assert unsupported/fail-closed explanation;
3. assert accepted recovery/return behavior;
4. assert Preview/Centre progression is unavailable;
5. assert zero external/provider requests.

### B05 — four canonical objectives

For each objective AWARENESS, TRUST, ASSETS, ACTION:

1. open Campaign creation;
2. select the objective;
3. populate minimum accepted fields;
4. trigger the real autosave behavior;
5. wait for accepted persistence completion;
6. reload or reopen;
7. assert hydrated objective and fields;
8. perform one accepted edit;
9. persist/reload;
10. assert the canonical definition/hash through accepted API response and database audit.

Assert PULSE/PROOF/PRODUCTION/PUSH are not presented as canonical choices.

The representative V2 correction may exercise all four objectives in one B05 run if isolation and assertions remain explicit. The later final matrix repeats B05 at all four authorized widths with reset isolation.

### B06 — Campaign workspace

Operations:

1. open the deterministic Campaign;
2. traverse each of the three accepted workspace tabs;
3. assert tab-specific content;
4. exercise or verify Add Product through the accepted user flow;
5. exercise or verify Add Brief through the accepted user flow;
6. confirm persisted associations via UI/API/audit.

A simple single-route render is insufficient.

### B07 — legacy objective and Reporting

Operations/assertions:

1. open the legacy Campaign;
2. assert Objective unavailable;
3. assert no legacy objective is presented as a canonical label;
4. open or attempt Reporting through its accepted route/control;
5. assert fail-closed/unimplemented response;
6. assert no fabricated performance data.

### B08 — C03 application to C04 handoff

Operations:

1. authenticate Creator Owner;
2. open the pre-action opportunity;
3. submit the accepted C03 application through the user surface;
4. assert submitted state and one application;
5. open an isolated Brand Owner context;
6. use the existing accepted approval/handoff action through UI, or an API invoked as part of an accepted UI action;
7. return to Creator context;
8. assert the canonical C04 collaboration appears;
9. assert exact sourceApplicationId linkage;
10. assert application version/event transition;
11. assert exactly one collaboration and no duplicate.

No direct database mutation may substitute for steps 3 or 6. If step 6 has no accepted surface, stop with APPLICATION_CAPABILITY_GAP.

### B09 — Brand Owner and Finance Admin payout

Use both roles.

Assert:

- provider-disabled Brand Payout state;
- correct Brand Owner visibility;
- correct Finance Admin visibility;
- no payout execution, retry or manual-trigger action;
- no timing promise;
- zero provider/financial writes.

### B10 — Campaign Manager payout

Assert:

- correct Campaign Manager identity;
- read-only operational status;
- no sensitive financial rows;
- prohibited action absent or denied;
- denial does not enumerate protected data;
- zero provider/financial writes.

### B11 — Creator Owner

Assert:

- completed Creator onboarding;
- limited Creator Home;
- Creator Centre;
- Creator Settings;
- provider-disabled Creator Payout;
- no execution/retry/manual trigger;
- Creator Chat absent/deferred.

### B12 — Creator Manager and Assistant

Use both roles and deterministic state profiles.

Assert:

- Creator Manager C04/settings visibility;
- Creator Assistant scoped settings visibility;
- Assistant payout denial is non-enumerating;
- disconnected Instagram state;
- connected-synthetic Instagram state;
- provider-unavailable Instagram state;
- no live Instagram/provider request.

## Browser safety and accessibility

For every representative and later final execution:

- block and fail every non-loopback request;
- fail unexpected console errors;
- fail page errors;
- fail unexpected 4xx/5xx and unhandled API failures;
- verify role/workspace identity;
- perform a meaningful keyboard/focus assertion on the principal action path;
- run Axe on each stable required shell;
- require zero critical violations;
- write sanitized assertion/audit output.

Do not suppress unexpected errors merely to pass.

Remote fonts must be prevented before request without weakening the general network guard.

## Retry policy

Set the authoritative Playwright configuration to zero retries.

Diagnostic traces must be captured without converting a failed first execution into an accepted retry.

A failed, skipped, flaky, retried or conditionally bypassed scenario is not accepted.

## Focused static and unit validation

Add or correct focused tests that prove:

- 12 scenario contracts;
- 30 final viewport executions;
- every scenario has non-generic ordered operations;
- all secondary roles are used;
- denial scenarios contain denial assertions;
- mutating scenarios contain audit/write contracts;
- B05 declares four objective subflows;
- B08 declares Creator and Brand contexts plus application/handoff assertions;
- B09 uses Owner and Finance Admin;
- B12 uses Manager and Assistant plus all three Instagram states;
- reset/audit hooks are invoked;
- retries are zero;
- redaction works;
- loopback guard blocks a synthetic external URL.

Run:

- backend focused fixture/audit tests;
- frontend focused manifest/scenario tests;
- frontend typecheck;
- targeted lint for all changed validation files;
- Prisma generate/validate;
- Playwright list;
- secret scan.

If validation-only package wiring affects global compilation, run the relevant broader check. Do not change lockfiles or production files.

## Representative correction browser matrix

Run exactly one representative viewport for every scenario:

| Scenario | Width |
|---|---:|
| B01 | 390 |
| B02 | 1440 |
| B03 | 767 |
| B04 | 390 |
| B05 | 768 |
| B06 | 1440 |
| B07 | 390 |
| B08 | 1440 |
| B09 | 390 |
| B10 | 1440 |
| B11 | 390 |
| B12 | 1440 |

Requirements:

~~~text
SCENARIOS_RUN =
12

EXECUTIONS_RUN =
12

PASSED =
12

SKIPPED =
0

FAILED =
0

RETRIED_OR_FLAKY =
0
~~~

Reset/reseed/audit per scenario as specified.

This representative run is correction acceptance only. Do not claim the later 30-execution final matrix.

## Provider, financial, and data-integrity proof

Across all twelve representative scenarios require:

- non-loopback requests: 0;
- provider calls: 0;
- provider mappings: 0 unless the accepted synthetic connected state uses a clearly non-provider local record; classify it precisely;
- financial-authority instructions: 0;
- payout receipts: 0;
- payout executions: 0;
- unauthorized financial writes: 0;
- unclassified writes: 0;
- cross-scenario contamination: 0;
- duplicate B08 applications/collaborations: 0.

Do not weaken accepted database constraints or triggers.

## Publication requirements

Only after all static, focused, database, session, audit and twelve representative browser executions pass:

### Backend V2

- create one commit with sole parent 99df138ef5602709cfd9850e5630606b7889f237;
- verify exact changed paths and validation-only classification;
- verify application base content, schema and 108 migrations remain unchanged;
- push explicit SHA to refs/heads/validate/mvp-canonical-final-gate-fixtures-v2 using direct URL;
- fetch back to isolated ref and verify commit/tree/parent/path scope.

### Frontend V2

- create one commit with sole parent 8f600d955b27f55d011adbc5513888b763674509;
- verify exact changed paths and validation-only classification;
- verify application base content remains unchanged;
- push explicit SHA to refs/heads/validate/mvp-canonical-final-gate-browser-v2 using direct URL;
- fetch back to isolated ref and verify commit/tree/parent/path scope.

Check commit exit codes before push. Do not use a named-remote push that can move checked-out local refs.

If a target branch appears unexpectedly, stop without deleting or overwriting it.

## Evidence publication

Create one evidence file:

~~~text
REPOSITORY =
Piyush1087/dummy_tcs

BRANCH =
reconcile/mvp-canonical-application-v1-final-harness-correction-authority

SOLE_PARENT =
e0b8678ffa89756de2fed0f11ce69fed5ecafa6f

PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_FINAL_VALIDATION_HARNESS_CORRECTION_EVIDENCE_V1.md
~~~

Include:

1. result and mandatory telemetry;
2. Parent disposition integrity;
3. application and V1 checkpoint integrity;
4. capability map and any unavailable capability;
5. V2 backend/frontend changed-path tables;
6. fixture-state coverage table;
7. typed scenario-contract summary;
8. reset/seed/audit orchestration;
9. focused/static results;
10. representative B01–B12 results, one row each;
11. role/session verification;
12. database before/after and allowed-write results;
13. Axe/console/page/API/network results;
14. provider/financial proof;
15. exact V2 commits/trees/parents/branches;
16. fetch-back and clean-worktree results;
17. explicit exclusions;
18. blockers and next boundary.

Commit only that evidence file with sole parent e0b8678ffa89756de2fed0f11ce69fed5ecafa6f. Push explicit SHA by direct URL. Fetch back to an isolated ref and verify commit/tree/parent/one-file scope/blob.

## Failure policy

If any application capability is absent, scenario fails, or a prohibited change is required:

- do not weaken or skip the scenario;
- do not modify application code;
- do not publish V2 branches or authority evidence unless the prompt has already crossed an authorized publication boundary;
- preserve sanitized local diagnostics;
- return the exact blocker and affected scenario;
- distinguish:
  - VALIDATION_HARNESS_DEFECT;
  - FIXTURE_STATE_DEFECT;
  - APPLICATION_CAPABILITY_GAP;
  - APPLICATION_REGRESSION;
  - PRODUCT_STATE_UNDEFINED;
  - ENVIRONMENT;
  - AUTHORITY;
  - PROVIDER_OR_NETWORK;
  - FINANCIAL_OR_DATA_INTEGRITY.

After any branch is published, never delete, rewrite, or force-update it because of a later breaker.

## Cleanup

After pass or failure:

- stop application processes;
- remove generated sessions and credentials;
- remove disposable PostgreSQL containers/databases/exclusive volumes;
- leave the pre-existing acceptance database/container intact;
- remove run artifacts except sanitized diagnostics intentionally retained;
- verify tracked worktrees are clean after successful publication;
- on pre-publication failure, report exact local candidate status without destructive cleanup.

## Circuit breakers

~~~text
PARENT_DISPOSITION_MISMATCH
APPLICATION_CHECKPOINT_MISMATCH
V1_SUPPORT_CHECKPOINT_MISMATCH
V2_TARGET_BRANCH_COLLISION
SCHEMA_OR_MIGRATION_CHANGE_REQUIRED
PRODUCTION_SOURCE_CHANGE_REQUIRED
LOCKFILE_CHANGE_REQUIRED
PRODUCT_STATE_UNDEFINED
APPLICATION_CAPABILITY_GAP
FIXTURE_STATE_NONDETERMINISM
SCENARIO_CONTRACT_INCOMPLETE
GENERIC_ROUTE_ONLY_PROOF
SCENARIO_RESET_NOT_INVOKED
DATABASE_AUDIT_NOT_INVOKED
ROLE_SESSION_FAILURE
SCENARIO_COUNT_MISMATCH
REPRESENTATIVE_EXECUTION_MISSING
BROWSER_FAILURE
BROWSER_SKIP
BROWSER_RETRY_OR_FLAKE
CONSOLE_PAGE_OR_API_ERROR
CRITICAL_AXE_VIOLATION
NON_LOOPBACK_REQUEST
PROVIDER_CALL
UNAUTHORIZED_FINANCIAL_WRITE
UNCLASSIFIED_DATABASE_WRITE
CROSS_SCENARIO_CONTAMINATION
SECRET_VALUE_EXPOSED
FOCUSED_TEST_OR_TYPECHECK_FAILURE
COMMIT_OR_FETCH_BACK_FAILURE
SOURCE_WORKTREE_CONTAMINATION
~~~

## Explicit exclusions

Do not:

- run the complete 30-viewport final matrix;
- publish final whole-application acceptance;
- alter accepted application semantics;
- change schema or migrations;
- implement Reporting;
- implement/resume Applicant AI Match;
- implement Marketplace scoring;
- implement Creator Chat;
- enable payout providers;
- deploy;
- move development/freeze branches;
- resume Campaign Intelligence.

## Required final report

Return:

~~~text
FINAL_VALIDATION_HARNESS_CORRECTION_V2_RESULT =
READY_FOR_PARENT_REVIEW | CIRCUIT_BREAKER

RUN_STARTED_AT_UTC =
RUN_COMPLETED_AT_UTC =
WALL_CLOCK_SECONDS =
ACTIVE_EXECUTION_SECONDS =
COMMAND_COUNT =
LONGEST_COMMAND =
LONGEST_COMMAND_SECONDS =
WAITING_OR_BLOCKED_SECONDS =

PARENT_DISPOSITION_INTEGRITY =
BACKEND_APPLICATION_INTEGRITY =
FRONTEND_APPLICATION_INTEGRITY =
BACKEND_V1_INTEGRITY =
FRONTEND_V1_INTEGRITY =

CAPABILITY_MAP =
MISSING_APPLICATION_CAPABILITIES =
UNDEFINED_PRODUCT_STATES =

BACKEND_V2_BRANCH =
BACKEND_V2_COMMIT =
BACKEND_V2_PARENT =
BACKEND_V2_TREE =
BACKEND_V2_CHANGED_PATHS =
BACKEND_V2_FETCH_BACK =

FRONTEND_V2_BRANCH =
FRONTEND_V2_COMMIT =
FRONTEND_V2_PARENT =
FRONTEND_V2_TREE =
FRONTEND_V2_CHANGED_PATHS =
FRONTEND_V2_FETCH_BACK =

SCHEMA_BLOB =
MIGRATION_COUNT =
MIGRATION_HISTORY_PRESERVED =

FIXTURE_STATE_COVERAGE =
SCENARIO_CONTRACTS =
RESET_RESEED_ORCHESTRATION =
DATABASE_AUDIT_ORCHESTRATION =
ROLE_STORAGE_STATES =
PLAYWRIGHT_SCENARIOS =
PLAYWRIGHT_FINAL_EXECUTIONS =
PLAYWRIGHT_RETRIES =

BACKEND_FOCUSED =
FRONTEND_FOCUSED =
FRONTEND_TYPECHECK =
TARGETED_LINT =
PRISMA_GENERATE_VALIDATE =
PLAYWRIGHT_LIST =
SECRETS_SCAN =

REPRESENTATIVE_SCENARIOS =
REPRESENTATIVE_EXECUTIONS =
REPRESENTATIVE_PASSED =
REPRESENTATIVE_SKIPPED =
REPRESENTATIVE_FAILED =
REPRESENTATIVE_RETRIED_OR_FLAKY =

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

CRITICAL_AXE_VIOLATIONS =
UNEXPECTED_CONSOLE_ERRORS =
PAGE_ERRORS =
UNHANDLED_API_FAILURES =
NON_LOOPBACK_REQUESTS =
PROVIDER_CALLS =
UNAUTHORIZED_FINANCIAL_WRITES =
UNCLASSIFIED_DATABASE_WRITES =
CROSS_SCENARIO_CONTAMINATION =

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
DISPOSABLE_INFRASTRUCTURE_REMOVED =
PREEXISTING_ACCEPTANCE_CONTAINER =
BLOCKERS =
NEXT_BOUNDARY =
PARENT_REVIEW_ONLY =
~~~

End after the report. Do not begin the final 30-execution validation in the same runner turn.
