# Local Codex Runner — Gate C Brand Payout Test Cleanup Correction and Resumption V1

CANONICAL_RECONCILIATION_GATE_C_BRAND_PAYOUT_TEST_CLEANUP_CORRECTION_AND_RESUMPTION_V1

## Role

Resume the stopped Gate C Campaign Objectives convergence from its preserved or deterministically reconstructable candidate state.

Apply one test-harness-only correction, complete the remaining validation, and publish the Gate C backend, frontend, and authority evidence only if every mandatory gate passes.

## Controlling Parent disposition

~~~text
AUTHORITY_REPOSITORY =
Piyush1087/dummy_tcs

PARENT_DISPOSITION_COMMIT =
116ef04d45202351fea235a3847e64addd2fbf6d

PARENT_DISPOSITION_PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_GATE_C_BRAND_PAYOUT_TEST_CLEANUP_CIRCUIT_BREAKER_PARENT_DISPOSITION_V1.md

PARENT_REVIEW_RESULT =
CIRCUIT_BREAKER_ACCEPTED

AUTHORIZED_CORRECTION =
ONE TEST-HARNESS PATH ONLY

GATE_C_RESTART_FROM_BEGINNING_REQUIRED =
NO
~~~

Verify the disposition commit, tree, path, and blob before mutation.

Also verify the prior Gate C Parent acceptance:

~~~text
COMMIT =
2b14a94ed27633bf39cd42371b7b6b2276b68d7a

PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_GATE_C_CAMPAIGN_OBJECTIVES_PREFLIGHT_PARENT_ACCEPTANCE_V1.md
~~~

## Mandatory telemetry

Start measurement immediately before the first command.

Return:

~~~text
RUN_STARTED_AT_UTC =
RUN_COMPLETED_AT_UTC =
WALL_CLOCK_SECONDS =
ACTIVE_EXECUTION_SECONDS = <if measurable>
COMMAND_COUNT =
LONGEST_COMMAND =
LONGEST_COMMAND_SECONDS =
WAITING_OR_BLOCKED_SECONDS = <if measurable>

CANDIDATE_CONTINUITY_SECONDS =
TEST_HARNESS_CORRECTION_SECONDS =
POSTGRESQL_REVALIDATION_SECONDS =
BACKEND_REVALIDATION_SECONDS =
FRONTEND_CONTINUITY_SECONDS =
BROWSER_AVAILABILITY_SECONDS =
PUBLICATION_SECONDS =
~~~

Use `NOT_MEASURABLE` rather than estimating.

## Absolute boundaries

Authorized:

1. read-only immutable verification;
2. preservation or exact reconstruction of the stopped Gate C candidates;
3. exactly one additional backend test-file correction;
4. bounded PostgreSQL and backend revalidation;
5. frontend continuity verification and reuse of the completed exact validation;
6. browser-environment availability check;
7. one backend Gate C commit and branch;
8. one frontend Gate C commit and branch;
9. one authority evidence document, commit, and branch;
10. exact independent fetch-back.

Not authorized:

- any production Brand Payout source, trigger, migration, schema, or financial behavior change beyond the already accepted Gate C schema/migrations;
- `TRUNCATE`;
- trigger disablement;
- `session_replication_role`;
- raw SQL deletion of append-only data;
- cleanup bypass flags or privileged cleanup credentials;
- any C04 or C06 change;
- Campaign Performance/Reporting resumption;
- Applicant AI Match resumption;
- Marketplace recommendation score;
- Creator Chat;
- deployment;
- final canonical publication.

## Git safety

Use only the isolated temporary candidates from the stopped run if their continuity is exact.

If they no longer exist, reconstruct them in fresh isolated clones from immutable bases and donors using the exact prior Gate C prompt:

~~~text
docs/organization/prompts/canonical_reconciliation_gate_c_campaign_objectives_semantic_convergence_implementation_local_codex_prompt_v1.md

PROMPT_COMMIT =
fe06c66ca6f17e581987e6416864a46b0baa0d25
~~~

Do not use or modify prior non-isolated reconciliation worktrees.

Prohibited:

- broad `fetch --all --prune`;
- mirror-style `+refs/*:refs/*`;
- named-remote operations in an existing clone;
- force push;
- merge, rebase, or cherry-pick history;
- reset/restore in any pre-existing worktree.

Push only from fresh isolated clones through an explicit repository URL and exact `HEAD:refs/heads/<branch>` refspec. Fetch back into separate isolated verification refs or clones.

## Exact immutable bases and donors

Backend base:

~~~text
REPOSITORY =
Piyush1087/creator-commerce-backend-v2-clone

BASE_COMMIT =
7883286d8e74b1759518c758c9683fc926374441

BASE_TREE =
faaaa49f82ca93c482bedbb0f9b0cf3385a1bada

TARGET_BRANCH =
reconcile/mvp-canonical-application-v1-gate-c-campaign-objectives-backend
~~~

Frontend base:

~~~text
REPOSITORY =
Piyush1087/creator-commerce-frontend-v2-clone

BASE_COMMIT =
b10a23f67ce9a813cd5664e45e31870c6bd2a7e1

BASE_TREE =
ecdcf27c9e4271342c413162bd2993138e4b263c

TARGET_BRANCH =
reconcile/mvp-canonical-application-v1-gate-c-campaign-objectives-frontend
~~~

Donors:

~~~text
BACKEND_DONOR_COMMIT =
3c1c523a178c452023add9745628ecff8a6e5e55

BACKEND_DONOR_TREE =
0138efccc1d83ad5c558571b971731e0c45499ec

FRONTEND_DONOR_COMMIT =
0662cd6963859d9e46abe53910b174d4826adaa3

FRONTEND_DONOR_TREE =
02243e16ed283810936fdaee0601981fe316688d
~~~

Verify all three target branches remain absent before any publication.

## Stopped candidate continuity

### Backend Campaign Objectives candidate

Require exactly the original 26 Gate C paths from the prior implementation prompt before the new correction.

Require:

~~~text
CAMPAIGN_OBJECTIVE_CHANGED_PATHS =
26 / 26 EXACT

TRANSPLANTED_BACKEND_SOURCE_BLOBS =
23 / 23 EXACT DONOR MATCH

MIGRATION_107_PATH =
prisma/migrations/20260917130000_campaign_objective_v1_enum/migration.sql

MIGRATION_107_BLOB =
a8215f86e2f48c0a7f0f94a4aaad48d745795699

MIGRATION_108_PATH =
prisma/migrations/20260917131000_campaign_definition_hash/migration.sql

MIGRATION_108_BLOB =
b900744912001e004523d471570f48f6f54c050b

FINAL_CAMPAIGN_SCHEMA_BLOB =
1d9b3a8bf3145d47d326fae88493f7816eef9140

MIGRATION_COUNT =
108

ORIGINAL_106_MIGRATIONS_PRESERVED =
YES
~~~

Verify all 24 Gate B C06 changed paths remain unchanged and the legacy C06 service remains deleted.

### Frontend candidate

Require:

~~~text
FRONTEND_CHANGED_PATHS =
19 / 19 EXACT

FRONTEND_DONOR_BLOB_MATCHES =
19 / 19

PROTECTED_CAMPAIGN_DETAIL_WORKSPACE_BLOB =
62cd7684410144de816363e0f943e244da2225be
~~~

No frontend mutation is authorized in this resumption.

If candidate continuity cannot be proven exactly, stop. Do not approximate or repair unrelated drift.

## Verified pre-existing conflict

~~~text
TEST_PATH =
src/features/brand-payouts/brand-payouts-p1.security.test.ts

BASE_TEST_BLOB =
624787643e1c6f5e0b5ebc3006467510ee544dc2

TRIGGER_MIGRATION_PATH =
prisma/migrations/20260912100000_brand_payouts_wave_b_normal_path/migration.sql

TRIGGER_MIGRATION_BLOB =
05d5fe00c34471b3524cfbe011cf20dc306c103a

ACCEPTED_TRIGGER =
bp_m1_obligation_guard

DELETE_ERROR =
BP_M1_OBLIGATION_DELETE_FORBIDDEN
~~~

Before editing, verify both blobs and verify the test's only failure was the `afterAll` cleanup after all 17 assertions passed.

## Exact test-harness correction

In:

~~~text
src/features/brand-payouts/brand-payouts-p1.security.test.ts
~~~

Replace the complete `afterAll(async () => { ... })` block that begins by calling:

~~~text
prisma.creatorPayoutObligation.deleteMany(...)
~~~

and then attempts deletion of collaboration, Campaign, escrow, team, user, Brand, and organization fixtures.

Replace that complete block with exactly:

~~~ts
    afterAll(() => prisma.$disconnect());
~~~

Use the repository formatter if it changes only this path.

Do not alter:

- imports;
- disposable database guard;
- fixture construction;
- the 17 assertions;
- query capture;
- Product/runtime expectations;
- production services;
- Prisma schema;
- migrations;
- triggers.

After the correction, require:

~~~text
ADDITIONAL_CHANGED_PATHS =
1

TOTAL_BACKEND_CHANGED_PATHS_RELATIVE_TO_GATE_B =
27

PRODUCTION_RUNTIME_CHANGED_PATHS =
ZERO

MIGRATION_CHANGED_PATHS_BEYOND_ACCEPTED_107_108 =
ZERO
~~~

Record the corrected test blob.

## PostgreSQL correction validation

Use a newly created disposable PostgreSQL 16+ database in UTC whose name begins with `bp_p1_`.

Run the corrected Brand Payout P1 security suite.

Require:

- 17/17 assertions pass;
- `afterAll` completes;
- process exit status is zero;
- the append-only obligation remains present until external database destruction;
- an explicit attempted obligation delete still returns `BP_M1_OBLIGATION_DELETE_FORBIDDEN`;
- the trigger migration blob remains unchanged;
- no trigger disablement or SQL bypass is used.

Disconnect, then destroy the disposable database/container externally.

Also rerun in fresh disposable databases:

- C06 P6 PostgreSQL suite;
- C04 PostgreSQL suite;
- Brand Payout Wave B PostgreSQL suite;
- any directly required Brand Payout PostgreSQL preservation suite identified by repository scripts.

All must pass with zero checked-in cleanup failures.

## Reusable Gate C evidence

The following stopped-run results may be reused only after exact candidate, schema, migration, and donor-blob continuity is proven:

~~~text
CLEAN_DATABASE_0_TO_108 =
PASS

POPULATED_DATABASE_106_TO_108 =
PASS

LEGACY_ROWS_SURVIVING =
3 / 3

LEGACY_VALUES_UNCHANGED =
PASS

LOSSY_MAPPING =
NONE

DEFINITION_HASH_CONSTRAINT =
PASS

BACKEND_CAMPAIGN_FOCUSED =
18 FILES
194 PASSED
5 SKIPPED

FRONTEND_FOCUSED =
6 FILES
66 / 66

FRONTEND_FULL =
177 FILES PASSED
1 SKIPPED
1417 TESTS PASSED
1 SKIPPED

FRONTEND_TYPECHECK =
PASS

FRONTEND_LINT =
PASS WITH ZERO ERRORS AND 8 PRE_EXISTING WARNINGS

FRONTEND_AUTOSAVE =
8 / 8 PASS

FRONTEND_BUILD =
PASS

RESPONSIVE_KEYBOARD_ACCESSIBILITY =
PASS
~~~

Do not claim reused results were rerun. Record continuity evidence and the original execution timestamp.

If any relevant candidate blob differs, the corresponding validation must be rerun or the run must stop.

## Mandatory remaining backend validation

After the one-path correction and PostgreSQL correction validation, run:

1. complete backend test suite;
2. `npm run lint:eslint`;
3. production build;
4. `npm run test:campaign-readiness`;
5. `npm run intelligence:contracts:verify` with the documented pinned authority source;
6. Prisma generate and validate if generated state was removed or changed;
7. exact 27-path diff check;
8. exact donor-blob, migration, schema, C04, and C06 preservation checks;
9. zero provider-call and unauthorized-financial-write checks.

Any checked-in test failure, lint error, build error, path drift, or protected-object mismatch is a circuit breaker.

## Browser availability check

Check only whether the coordinated seeded Brand session/runtime exists for the integrated browser matrix.

If available, run the accepted canonical/legacy objective flow at 390, 767, 768, and 1440 with keyboard/focus/accessibility and zero console/page errors.

If unavailable, record exactly:

~~~text
INTEGRATED_BROWSER_GATE =
DEFERRED_TO_FINAL_WHOLE_APPLICATION_ACCEPTANCE
~~~

Unavailability is not a Gate C publication breaker. Do not use production credentials or live systems.

## Commit and publish only after all gates pass

### Backend

Create one commit:

~~~text
BRANCH =
reconcile/mvp-canonical-application-v1-gate-c-campaign-objectives-backend

SOLE_PARENT =
7883286d8e74b1759518c758c9683fc926374441

EXPECTED_CHANGED_PATHS =
27

COMMIT_MESSAGE =
feat(campaign): converge canonical objectives onto Gate B
~~~

The 27 paths must equal:

- the exact 26-path allowlist in the original Gate C implementation prompt; plus
- `src/features/brand-payouts/brand-payouts-p1.security.test.ts`.

Push by explicit URL/refspec without force. Fetch back independently and verify commit, sole parent, tree, exact 27 paths, corrected test blob, final schema blob, migration blobs/count, original-106 preservation, C04/C06 preservation, and branch head.

### Frontend

Create one commit:

~~~text
BRANCH =
reconcile/mvp-canonical-application-v1-gate-c-campaign-objectives-frontend

SOLE_PARENT =
b10a23f67ce9a813cd5664e45e31870c6bd2a7e1

EXPECTED_CHANGED_PATHS =
19

COMMIT_MESSAGE =
feat(campaign): converge canonical objectives onto Gate B
~~~

No new frontend edit is authorized. Commit the exact stopped/reconstructed 19-path candidate, push safely, and fetch back independently.

### Authority evidence

Only after both implementation branches fetch back exactly:

~~~text
REPOSITORY =
Piyush1087/dummy_tcs

BASE_COMMIT =
116ef04d45202351fea235a3847e64addd2fbf6d

BRANCH =
reconcile/mvp-canonical-application-v1-gate-c-campaign-objectives-authority

EVIDENCE_PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_GATE_C_CAMPAIGN_OBJECTIVES_SEMANTIC_CONVERGENCE_EVIDENCE_V1.md
~~~

Publish one evidence document containing:

- controlling Parent acceptance and circuit-breaker disposition;
- original circuit-breaker;
- exact immutable bases and donors;
- stopped-candidate continuity or deterministic reconstruction proof;
- exact backend/frontend commits, parents, trees, pathsets, and branch heads;
- corrected test before/after blobs and exact diff;
- proof the trigger migration and runtime trigger are unchanged;
- proof the corrected P1 suite passed 17/17 with zero teardown failure;
- external disposable-database destruction;
- PostgreSQL preservation reruns;
- reused evidence explicitly labeled as reused with continuity proof;
- complete backend validation;
- exact frontend continuity and reused validation;
- migration/schema/C04/C06 preservation;
- Reporting/Campaign Intelligence pause boundaries;
- provider/financial-write proof;
- browser result or deferral;
- clean final worktrees;
- telemetry, blockers, exclusions, and next boundary.

Commit only that evidence file. Push safely and verify by independent fetch-back.

## Circuit breakers

~~~text
PARENT_DISPOSITION_MISMATCH
PRIOR_GATE_C_AUTHORITY_MISMATCH
BASE_OR_DONOR_MOVED
TARGET_BRANCH_COLLISION
CANDIDATE_CONTINUITY_FAILURE
NONSTANDARD_REFSPEC_OR_UNSAFE_WORKTREE
TEST_BASE_BLOB_MISMATCH
TRIGGER_MIGRATION_BLOB_MISMATCH
TEST_CORRECTION_EXCEEDS_AFTERALL_BLOCK
TRUNCATE_OR_TRIGGER_BYPASS_INTRODUCED
PRODUCTION_RUNTIME_PATH_CHANGED
BACKEND_PATHSET_NOT_EXACTLY_27
FRONTEND_PATHSET_NOT_EXACTLY_19
CAMPAIGN_DONOR_BLOB_MISMATCH
SCHEMA_OR_MIGRATION_DRIFT
C04_OR_C06_DRIFT
BRAND_PAYOUT_P1_ASSERTION_OR_TEARDOWN_FAILURE
POSTGRESQL_PRESERVATION_FAILURE
BACKEND_FULL_TEST_FAILURE
LINT_BUILD_READINESS_OR_CONTRACT_FAILURE
PROVIDER_CALL_DETECTED
UNAUTHORIZED_FINANCIAL_WRITE_DETECTED
PAUSED_OR_DEFERRED_LANE_ENTERED
IMPLEMENTATION_FETCH_BACK_MISMATCH
AUTHORITY_EVIDENCE_SCOPE_EXCEEDED
~~~

If a breaker occurs after one branch is published, preserve it unchanged, report exact partial publication, and do not publish authority evidence.

## Required final report

Return:

~~~text
CANONICAL_RECONCILIATION_GATE_C_CORRECTION_RESUMPTION_RESULT =
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
PRIOR_GATE_C_AUTHORITY_INTEGRITY =
BACKEND_BASE_AND_DONOR_INTEGRITY =
FRONTEND_BASE_AND_DONOR_INTEGRITY =
TARGET_BRANCH_ABSENCE =

BACKEND_CANDIDATE_CONTINUITY =
FRONTEND_CANDIDATE_CONTINUITY =
TEST_BASE_BLOB =
TRIGGER_MIGRATION_BLOB =
TEST_HARNESS_CORRECTION =
CORRECTED_TEST_BLOB =
PRODUCTION_RUNTIME_CHANGED_PATHS =

BRAND_PAYOUT_P1_POSTGRESQL =
APPEND_ONLY_DELETE_ASSERTION =
C06_POSTGRESQL =
C04_POSTGRESQL =
BRAND_PAYOUT_WAVE_B_POSTGRESQL =
DISPOSABLE_DATABASE_CLEANUP =

CLEAN_0_TO_108_EVIDENCE =
POPULATED_106_TO_108_EVIDENCE =
ORIGINAL_106_MIGRATIONS_PRESERVED =
FINAL_MIGRATION_COUNT =
FINAL_SCHEMA_BLOB =

BACKEND_FULL_TESTS =
BACKEND_LINT =
BACKEND_BUILD =
BACKEND_CAMPAIGN_READINESS =
BACKEND_INTELLIGENCE_CONTRACT_VERIFY =

FRONTEND_VALIDATION =
RESPONSIVE_KEYBOARD_ACCESSIBILITY =
INTEGRATED_BROWSER_GATE =

BACKEND_BRANCH =
BACKEND_COMMIT =
BACKEND_PARENT =
BACKEND_TREE =
BACKEND_CHANGED_PATHS =
BACKEND_FETCH_BACK =

FRONTEND_BRANCH =
FRONTEND_COMMIT =
FRONTEND_PARENT =
FRONTEND_TREE =
FRONTEND_CHANGED_PATHS =
FRONTEND_FETCH_BACK =

C04_PRESERVED =
C06_PRESERVED =
REPORTING_REMAINS_FAIL_CLOSED =
CAMPAIGN_INTELLIGENCE_REMAINS_PAUSED =
ZERO_PROVIDER_CALLS =
ZERO_UNAUTHORIZED_FINANCIAL_WRITES =

AUTHORITY_BRANCH =
EVIDENCE_COMMIT =
EVIDENCE_PARENT =
EVIDENCE_TREE =
EVIDENCE_BLOB =
EVIDENCE_PATH =
EVIDENCE_FETCH_BACK =

SOURCE_WORKTREES_CLEAN =
BLOCKERS =
NEXT_BOUNDARY =
PARENT_REVIEW_ONLY =
~~~

End after the report. Do not perform Parent acceptance, final whole-application validation, final canonical publication, deployment, or Campaign Intelligence resumption.
