# Local Codex Runner — Final Validation Harness V2 Resumption on Corrected Creator Actor Checkpoint

CANONICAL_RECONCILIATION_FINAL_VALIDATION_HARNESS_V2_CORRECTED_FRONTEND_RESUMPTION_V1

## Role

Resume and complete the validation-only V2 final-validation fixture and scenario harness correction after Parent acceptance of the frontend Creator actor-contract correction.

Reconstruct the backend and frontend V2 candidates in fresh isolated worktrees using the topology below. Preserve the retained dirty candidates as source evidence; do not commit directly from them.

Correct the known harness defects, rerun one representative execution for every B01–B12 scenario, and publish immutable V2 support checkpoints and evidence only if all twelve pass with every audit and safety gate.

Do not run the later full 30-viewport matrix. Do not claim final whole-application acceptance.

## Telemetry

Start before the first Git, repository, continuity, database, or browser action.

```text
RUN_STARTED_AT_UTC =
RUN_COMPLETED_AT_UTC =
WALL_CLOCK_SECONDS =
ACTIVE_EXECUTION_SECONDS = <if measurable>
COMMAND_COUNT =
LONGEST_COMMAND =
LONGEST_COMMAND_SECONDS =
WAITING_OR_BLOCKED_SECONDS = <if measurable>

AUTHORITY_AND_CHECKPOINT_SECONDS =
RETAINED_CANDIDATE_EXTRACTION_SECONDS =
BACKEND_RECONSTRUCTION_SECONDS =
FRONTEND_RECONSTRUCTION_SECONDS =
HARNESS_CORRECTION_SECONDS =
FOCUSED_VALIDATION_SECONDS =
REPRESENTATIVE_BROWSER_SECONDS =
AUDIT_SECONDS =
PUBLICATION_SECONDS =
CLEANUP_SECONDS =
```

Use `NOT_MEASURABLE` rather than estimating. Preserve telemetry for the final aggregate reconciliation report; do not estimate the aggregate in this run.

## Controlling authority

Repository:

```text
Piyush1087/dummy_tcs
```

### Original V2 prompt

```text
COMMIT =
c4eefe8a34fd2ea5d6677d87c68e2a49eb4dfdc2

PATH =
docs/organization/prompts/canonical_reconciliation_final_validation_fixture_scenario_harness_correction_v2_local_codex_prompt.md

BLOB =
f0c300ccf2023220e8ceed32ed6fda489bf713c7
```

### B06 clarification

```text
COMMIT =
2cdad65e7e20a197fed3f9f9dd4f7d4f77457468

PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_FINAL_VALIDATION_B06_ADD_PRODUCT_CAMPAIGN_ASSET_PARENT_CLARIFICATION_V1.md

BLOB =
9051dd4c1cafdba5ca51dfa010694711f6855b71
```

### B07 correction

```text
COMMIT =
2568a31dcef7b03ee6d104657f84c75d212f2d02

PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_FINAL_VALIDATION_B07_REPORTING_BOUNDARY_PARENT_CORRECTION_V1.md

BLOB =
c6ed4c1f799c6278e6b258ac84906a6b00921aa7
```

### Creator actor correction acceptance

```text
COMMIT =
8fea4c9821f7a52e1b7cf144b144a63927f0d333

PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_FINAL_GATE_CREATOR_ACTOR_CONTRACT_CORRECTION_PARENT_ACCEPTANCE_V1.md

BLOB =
adfc137bd2b83dd35d46d7a1f2f71f54032788b1
```

### Creator actor correction evidence

```text
COMMIT =
aca1ec890a652c57e2177589d3dffd118cf0f3a0

PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_FINAL_GATE_CREATOR_ACTOR_CONTRACT_CORRECTION_EVIDENCE_V1.md

BLOB =
5ae0bb5971055fd86c0f577237c61eb557c321c7
```

Verify every exact commit/path/blob tuple before mutation.

Precedence:

1. Creator actor correction acceptance governs application checkpoint and V2 topology.
2. B07 correction governs Reporting validation.
3. B06 clarification governs Add Product.
4. Original V2 prompt governs every other requirement.

## Accepted application checkpoints

Backend application:

```text
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
```

Corrected frontend application:

```text
REPOSITORY =
Piyush1087/creator-commerce-frontend-v2-clone

BRANCH =
correction/mvp-canonical-final-gate-creator-actor-payout-read-v1

COMMIT =
cb1a83465272d6b0d75fc88c11d8acb89a5e91b0

TREE =
876ec5308695a3755001783219bca85b321e6e99

SOLE_PARENT =
a7c00fb77969a419b31e175d4085b4f574a8bed5

CONTRACT_BLOB =
93b079821e8f8b63402e970c78ac6324c5d2407f

TEST_BLOB =
7f17ad4dcef18be1ec81257e24fb70503489902b

MAPPER_BLOB =
d0cc616e7abea62280aa9876377a127641658ae5
```

## V1 validation-support source checkpoints

Backend V1:

```text
COMMIT =
99df138ef5602709cfd9850e5630606b7889f237

TREE =
77754f4db336cf9023765ffeeeb2b440aa45bc18

SOLE_PARENT =
1a99cf3f54df849408c8775b20e78c036ee637c3
```

Frontend V1 — source material only:

```text
COMMIT =
8f600d955b27f55d011adbc5513888b763674509

TREE =
4fd70320cd3beb74ca708123093ba7e73863f9b6

SOLE_PARENT =
a7c00fb77969a419b31e175d4085b4f574a8bed5

DISPOSITION =
IMMUTABLE_PROVISIONAL_SOURCE
NOT_FINAL_V2_PARENT
```

## Publication topology

Backend V2:

```text
BRANCH =
validate/mvp-canonical-final-gate-fixtures-v2

SOLE_PARENT =
99df138ef5602709cfd9850e5630606b7889f237
```

Frontend V2:

```text
BRANCH =
validate/mvp-canonical-final-gate-browser-v2

SOLE_PARENT =
cb1a83465272d6b0d75fc88c11d8acb89a5e91b0
```

Authority evidence:

```text
REPOSITORY =
Piyush1087/dummy_tcs

BRANCH =
reconcile/mvp-canonical-application-v1-final-harness-correction-authority

SOLE_PARENT =
8fea4c9821f7a52e1b7cf144b144a63927f0d333

PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_FINAL_VALIDATION_HARNESS_CORRECTION_EVIDENCE_V1.md
```

Verify all three branches remain absent before work. Stop on collision.

## Git and worktree safety

Use direct repository URLs and isolated verification refs. Avoid broad fetch/prune in mirror-style clones.

Do not modify, reset, clean, stash, commit, switch, or push from the retained dirty V2 candidate worktrees.

Set repository-local Git identity only if missing:

```text
Piyush1087 <piyush.p1087@gmail.com>
```

Do not modify global/system Git configuration.

Do not force, rebase, amend, delete branches, create tags, or create PRs.

### Disk safety

The prior correction encountered `ENOSPC`.

Before installation:

- measure free space;
- identify only run-created caches, temporary dependency directories, browser traces/videos/screenshots, disposable worktrees, and stopped disposable containers from this reconciliation;
- remove only artifacts whose ownership and recoverability are proven;
- do not delete repositories, accepted worktrees, retained V2 candidates, user files, shared databases, or the pre-existing acceptance container;
- prefer reuse of an existing complete dependency tree only after proving the exact committed lockfile blob matches;
- record every cleanup/reuse action.

Stop rather than performing a factory reset or broad destructive cleanup.

## Phase 1 — retained candidate continuity and extraction

### Backend

The retained backend candidate is expected to have HEAD at `99df138...` plus uncommitted validation-only V2 changes.

1. verify exact HEAD and clean committed tree;
2. inventory staged, unstaged, and untracked paths;
3. prove every local path is within the original V2 backend validation-only allowlist;
4. compute a deterministic candidate manifest and patch hash;
5. copy/export the patch without modifying the retained worktree;
6. create a fresh isolated checkout at `99df138...`;
7. apply the exact V2 delta without fuzz, rejects, three-way fallback, or manual production-source edits;
8. prove resulting changed paths relative to `99df138...` are validation-only.

### Frontend

The retained frontend candidate is expected to have HEAD at `8f600d9...` plus uncommitted validation-only V2 changes.

1. verify exact HEAD and committed tree;
2. inventory staged, unstaged, and untracked paths;
3. prove every local path is within the original V2 frontend validation-only allowlist;
4. derive the complete validation-support candidate relative to the old application commit `a7c00fb...`, including:
   - the committed V1 validation support paths from `8f600d9...`; and
   - the retained uncommitted V2 validation-only delta;
5. compute a deterministic manifest and patch hash;
6. create a fresh isolated checkout at corrected application commit `cb1a834...`;
7. apply only that complete validation-support candidate;
8. do not merge, rebase, or cherry-pick `8f600d9...` wholesale;
9. prove the resulting changed paths relative to `cb1a834...` are validation-only;
10. prove the corrected actor contract/test blobs and unchanged mapper blob remain exact.

If retained-candidate continuity fails, preserve the retained worktree and reconstruct the authorized V2 validation support from immutable V1 files plus the original V2 prompt. Record the reason. Stop if safe reconstruction cannot be proven.

## Phase 2 — complete capability map

Reinspect the corrected composed application/support checkpoints and complete the capability map for all B01–B12.

The following Parent decisions are settled:

```text
B06 =
AVAILABLE_WITH_VALIDATION_FIXTURE
USE ADD_PRODUCT_CANONICAL_CAMPAIGN_ASSET_REFERENCE_FLOW

B07 =
AVAILABLE_WITH_VALIDATION_FIXTURE
LEGACY BROWSER PROOF + CANONICAL REPORTING API FAIL_CLOSED PROOF

CREATOR_ACTOR_CONTRACT =
CORRECTED_AND_ACCEPTED
```

Stop only for a new genuine application capability or undefined Product-state gap. Do not reclassify settled B06/B07/Creator-action findings.

## Phase 3 — correct known validation defects

Correct within validation-only scope.

### B03 locator

Replace the defective locator with a stable accepted semantic role, label, test ID, or exact visible state grounded in the accepted UI.

Do not add production test hooks.

### B04 decorative remote images

The final run must retain the strict zero-non-loopback boundary.

Correct deterministic fixture inputs so decorative/profile/media image URLs are null, loopback, data URLs if already supported, or accepted local assets. Do not allow-list the external hosts and do not weaken the request guard.

Assert the browser made zero non-loopback requests.

### B05 autosave synchronization

Synchronize against the real accepted autosave completion contract:

- perform the actual accepted field/objective change;
- observe the accepted pending/saving state or request;
- wait for successful persistence completion;
- reload/reopen;
- assert hydrated persisted state and canonical definition/hash;
- avoid arbitrary sleeps as acceptance synchronization.

### B06 CSS interceptor and audit

Correct the validation network/interceptor ordering so loopback CSS and local application assets load deterministically while all non-loopback requests still fail.

Run the clarified canonical CampaignAsset plus Brief flow and complete the before/after database audit.

### B07 mounted prefix

Use exactly the accepted mounted routes:

```text
GET  /api/v1/brand-uce/campaigns/:campaignId/reporting
POST /api/v1/brand-uce/campaigns/:campaignId/reporting/refresh-sync
```

Browser portion remains the legacy Campaign proof. API portion uses a canonical-objective Campaign and must return `CAMPAIGN_REPORTING_CANONICAL_OBJECTIVE_UNAVAILABLE` with zero Reporting/protected writes.

### B09 CSS interceptor

Apply the same deterministic local-asset handling without weakening the network boundary. Complete the two-role provider-disabled payout proof and audit.

### B08, B11, B12 corrected actor contract

Run against frontend application commit `cb1a834...`.

Require real Creator actor context to reach `READY`, not the recovery shell.

- B08: complete C03 application through the user surface, Brand approval/handoff, Creator C04 visibility, exact `sourceApplicationId`, event/version transition, and no duplicate.
- B11: prove Creator Owner surfaces and provider-disabled payout state; explicitly assert the recovery-shell message is absent.
- B12: prove Manager and Assistant scopes, Assistant non-enumerating payout denial, Instagram disconnected/connected-synthetic/provider-unavailable states, and absence of recovery shell.

Do not weaken mapper validation or bypass actor context.

## Phase 4 — focused validation

Require:

- backend fixture tests;
- frontend manifest/contract/orchestration tests;
- frontend typecheck;
- targeted lint for all validation-support paths;
- Prisma generate and validate against the unchanged schema;
- Playwright list exactly 12 scenario identities and 30 final executions;
- zero retries;
- secret-pattern scan;
- exact application/source/schema/migration/lockfile preservation;
- exact corrected actor blobs.

Static validation must prove every scenario has meaningful scenario-specific operations and assertions, and the lifecycle invokes reset/reseed, before audit, browser action, after audit, outcome validation, and reset.

## Phase 5 — representative browser run

Provision a fresh disposable PostgreSQL 16 runtime.

Require:

- clean 0→108 migration application;
- deterministic seed;
- six role sessions;
- one isolated representative execution for every B01–B12;
- reset/reseed or exact snapshot restoration between scenario identities;
- before/after database audit;
- zero retries.

Representative widths:

```text
B01 = 390
B02 = 1440
B03 = 767
B04 = 390
B05 = 768
B06 = 1440
B07 = 390
B08 = 1440
B09 = 390
B10 = 1440
B11 = 390
B12 = 1440
```

Acceptance requires:

```text
SCENARIOS =
12 / 12 PASS

SKIPPED =
0

FAILED =
0

TIMED_OUT =
0

RETRIED =
0

FLAKY =
0

CRITICAL_AXE_VIOLATIONS =
0

UNEXPECTED_CONSOLE_ERRORS =
0

PAGE_ERRORS =
0

UNHANDLED_API_FAILURES =
0

NON_LOOPBACK_REQUESTS =
0

PROVIDER_CALLS =
0

UNAUTHORIZED_FINANCIAL_WRITES =
0

UNCLASSIFIED_WRITES =
0

CROSS_SCENARIO_CONTAMINATION =
0
```

A prior nominal pass does not carry forward. Rerun all twelve.

## Phase 6 — publication

Publish only after every gate passes.

### Backend V2

Create one commit on:

```text
validate/mvp-canonical-final-gate-fixtures-v2
```

with sole parent `99df138...` and only authorized validation-support changes.

### Frontend V2

Create one commit on:

```text
validate/mvp-canonical-final-gate-browser-v2
```

with sole parent `cb1a834...`.

Relative to `cb1a834...`, every changed path must be validation-only. The actor correction paths are part of the parent tree and must not appear in the V2 diff.

### Evidence

Publish exactly one evidence file on:

```text
reconcile/mvp-canonical-application-v1-final-harness-correction-authority
```

with sole parent `8fea4c98...`.

Record:

- all authority/checkpoint identities;
- retained-candidate manifests and patch hashes;
- reconstruction method;
- backend/frontend V2 commits, parents, trees, pathsets, blobs, and fetch-back;
- application/source/schema/migration/lockfile preservation;
- exact corrected actor blobs;
- fixture state coverage;
- typed scenario and viewport counts;
- reset/reseed/audit integration;
- focused validation;
- 12 representative scenario results;
- individual B01–B12 evidence;
- B06 audit;
- B07 browser and API evidence separately;
- B08 linkage/event/no-duplicate evidence;
- B09/B10 payout boundaries;
- B11/B12 READY actor state and denial/Instagram evidence;
- Axe/console/page/API/network/provider/financial/write/contamination totals;
- sanitized artifact manifest hash;
- telemetry and cleanup.

Push with exact refspecs, no force. Independently fetch each publication into isolated verification refs and verify every immutable identity.

## Cleanup

After evidence capture:

- remove only the disposable PostgreSQL runtime/databases and run-generated sessions, secrets, traces, screenshots, videos, temp env files, and reconstructed temporary worktrees;
- retain sanitized evidence artifacts required by the evidence record;
- leave the pre-existing `creator-shop-acceptance-postgres` container untouched and running;
- leave retained original V2 candidate worktrees unchanged;
- confirm all publication worktrees clean.

## Absolute boundaries

Not authorized:

- application production-source change beyond the already accepted parent commit;
- backend application change;
- actor policy change;
- mapper change;
- schema, migration, or lockfile change;
- Reporting UI or Campaign Performance implementation;
- legacy Reporting behavior change;
- direct database mutation as a substitute for a browser/application action;
- weakening loopback/network, audit, identity, role, accessibility, or zero-retry gates;
- final 30-execution matrix;
- final whole-application acceptance;
- final canonical checkpoint;
- Applicant AI Match;
- Marketplace recommendation score;
- Creator Chat;
- provider-enabled payout execution;
- deployment;
- Campaign Intelligence resumption.

## Circuit breakers

Stop without publication for:

- immutable mismatch;
- unsafe retained-candidate extraction;
- branch collision;
- any production-source path in a V2 diff;
- corrected actor blob regression;
- capability gap;
- failed/skipped/timed-out/retried/flaky scenario;
- unexpected console/page/API/network failure;
- provider call;
- unauthorized financial or unclassified write;
- contamination;
- schema/migration/lockfile change;
- commit/parent/tree/blob/pathset/fetch-back mismatch;
- unsafe disk cleanup requirement.

## Required response

Begin with:

```text
FINAL_VALIDATION_HARNESS_CORRECTION_V2_RESULT =
READY_FOR_PARENT_REVIEW | CIRCUIT_BREAKER
```

Include:

```text
RUN_STARTED_AT_UTC =
RUN_COMPLETED_AT_UTC =
WALL_CLOCK_SECONDS =
ACTIVE_EXECUTION_SECONDS =
COMMAND_COUNT =
LONGEST_COMMAND =
LONGEST_COMMAND_SECONDS =
WAITING_OR_BLOCKED_SECONDS =

AUTHORITY_INTEGRITY =
BACKEND_APPLICATION_INTEGRITY =
CORRECTED_FRONTEND_APPLICATION_INTEGRITY =
BACKEND_V1_INTEGRITY =
FRONTEND_V1_SOURCE_INTEGRITY =
RETAINED_BACKEND_CANDIDATE_CONTINUITY =
RETAINED_FRONTEND_CANDIDATE_CONTINUITY =
BACKEND_RECONSTRUCTION =
FRONTEND_RECONSTRUCTION =

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

CORRECTED_FRONTEND_CONTRACT_BLOB =
CORRECTED_FRONTEND_TEST_BLOB =
UNCHANGED_MAPPER_BLOB =
SCHEMA_BLOB =
MIGRATION_COUNT =
MIGRATION_SUBTREE =
APPLICATION_SOURCE_PRESERVED =
LOCKFILE_PRESERVED =

CAPABILITY_MAP =
FIXTURE_STATE_COVERAGE =
SCENARIO_CONTRACTS =
PLAYWRIGHT_DECLARED_EXECUTIONS =
PLAYWRIGHT_RETRIES =
RESET_RESEED_ORCHESTRATION =
DATABASE_AUDIT_ORCHESTRATION =

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
REPRESENTATIVE_TIMED_OUT =
REPRESENTATIVE_RETRIED_OR_FLAKY =

B01 =
B02 =
B03 =
B04 =
B05 =
B06 =
B07_BROWSER =
B07_CANONICAL_REPORTING_API =
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

RETAINED_ORIGINAL_CANDIDATES =
SOURCE_WORKTREES_CLEAN =
DISPOSABLE_INFRASTRUCTURE_REMOVED =
PREEXISTING_ACCEPTANCE_CONTAINER =
BLOCKERS =
NEXT_BOUNDARY =
PARENT REVIEW OF V2 VALIDATION SUPPORT ONLY
```

Do not claim final whole-application acceptance.
