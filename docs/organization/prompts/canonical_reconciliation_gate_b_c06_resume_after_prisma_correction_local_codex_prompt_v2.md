# Local Codex Runner — Canonical Reconciliation Gate B C06 Resume After Prisma Correction V2

CANONICAL_RECONCILIATION_GATE_B_C06_RESUME_AFTER_PRISMA_CORRECTION_V2

## Role and authorization

Resume the bounded Gate B C06 semantic convergence from the preserved candidate payloads after Parent acceptance of the corrected Gate A backend base.

Do not repeat semantic design or rebuild C06 from donor branches. Do not mutate the original preserved candidate worktrees.

Create fresh resumption worktrees, apply the exact preserved candidate patches, validate them against the corrected backend base and unchanged frontend base, then publish only if every mandatory gate passes.

This prompt does not authorize Campaign Objective convergence, Product or architecture redesign, migrations, unrelated schema cleanup, provider integration, financial writes, deployment, Creator Chat, Applicant AI Match resumption, or Campaign Performance/Reporting resumption.

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

CANDIDATE_RECOVERY_SECONDS =
BACKEND_VALIDATION_SECONDS =
FRONTEND_VALIDATION_SECONDS =
POSTGRESQL_SECONDS =
BROWSER_SECONDS =
PUBLICATION_SECONDS =
~~~

Use NOT_MEASURABLE instead of estimating.

## Controlling Parent authority

~~~text
REPOSITORY =
Piyush1087/dummy_tcs

PARENT_ACCEPTANCE_COMMIT =
dbb919f33f888285167685d5489cf9e4f687441f

PARENT_ACCEPTANCE_PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_GATE_A_C04_PRISMA_CORRECTION_PARENT_ACCEPTANCE_V1.md

PARENT_ACCEPTANCE_RESULT =
ACCEPTED

NEXT_BOUNDARY =
RESUME GATE B C06 FROM PRESERVED CANDIDATE PATCHES
~~~

Verify the exact commit and path before any candidate or repository operation.

## Corrected implementation bases

Backend:

~~~text
REPOSITORY =
Piyush1087/creator-commerce-backend-v2-clone

BASE_COMMIT =
36f9142c553af6eeecacc03977853951b7246b77

BASE_TREE =
ae7c1e6f507acf43da3e9406a5de429f01ff0081

BASE_SCHEMA_BLOB =
8d5833ca756b837cdaaafdc4fe9c746676d63d8a

BASE_MIGRATION_COUNT =
106

BASE_MIGRATION_SUBTREE =
3894d6d2009fdbdf6bce94708d955c24cf5804ce

REMOTE_PUBLICATION_BRANCH =
reconcile/mvp-canonical-application-v1-gate-b-c06-backend
~~~

Frontend:

~~~text
REPOSITORY =
Piyush1087/creator-commerce-frontend-v2-clone

BASE_COMMIT =
bdd03e036ccd981fbfc573b58815fd277b9d757c

BASE_TREE =
008c07192afa7c6a99d73f67d6df3c5bec83e7e8

CAMPAIGN_DETAIL_WORKSPACE_BLOB =
62cd7684410144de816363e0f943e244da2225be

REMOTE_PUBLICATION_BRANCH =
reconcile/mvp-canonical-application-v1-gate-b-c06-frontend
~~~

Authority:

~~~text
REPOSITORY =
Piyush1087/dummy_tcs

BASE_COMMIT =
dbb919f33f888285167685d5489cf9e4f687441f

REMOTE_PUBLICATION_BRANCH =
reconcile/mvp-canonical-application-v1-gate-b-c06-authority

EVIDENCE_PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_GATE_B_C06_SEMANTIC_CONVERGENCE_EVIDENCE_V1.md
~~~

Do not use the prompt-publication commit as the authority base.

## Prior Gate B and correction authority

~~~text
GATE_B_PREFLIGHT_ACCEPTANCE =
833293602d95dd24a32e44520353879063090933

GATE_B_POSTGRESQL_CIRCUIT_BREAKER_ACCEPTANCE =
44af36402456825416935d03043d903025444c8c

PRISMA_CORRECTION_COMMIT =
36f9142c553af6eeecacc03977853951b7246b77

PRISMA_CORRECTION_EVIDENCE =
7d05b8969a05c704ad188b0f261fed6b401ec80e

C06_AUTHORITY_COMMIT =
a9bd40eeacc7a201c8ad46fdd0436212a9d65399

C06_BACKEND_DONOR =
071272891041a0cf187f549c3ed82bba5dcbbb79

C06_FRONTEND_DONOR =
7f72252fb5cd31f69da9ea59aa9ff81080ac4896
~~~

Verify all objects before resumption.

## Mandatory Phase 0 — original candidate continuity

Locate the original untouched candidate worktrees.

Expected backend:

~~~text
ORIGINAL_BASE =
b14afa38fb82155ea155beeae2430a1854c089a3

CHANGED_PATH_COUNT =
24

MANIFEST_SHA256 =
c8a7c9c55528848caba1cfb644d45e5f2c5dd8a63580b4e16547ea41fe3e3bb7

BINARY_PATCH_SHA256 =
0393deecac8bf3e0232c3be39a9d3d4176159ba04f5a46c277d345d46037452f
~~~

Expected frontend:

~~~text
ORIGINAL_BASE =
bdd03e036ccd981fbfc573b58815fd277b9d757c

CHANGED_PATH_COUNT =
15

MANIFEST_SHA256 =
506d2282f4f51c819d9dd94240c38c3423f3db3c839234dfd6a41a4857f57384

BINARY_PATCH_SHA256 =
15a3a319da59a88a374479b27b21b26b2cb8663db8b6d960766c83dfa0c63ca3
~~~

Before fetching or creating new worktrees:

1. Verify both original bases, path manifests, binary patch hashes, and per-path identities.
2. Export each exact git diff --binary to a bounded temporary patch file outside every repository worktree.
3. Verify each exported file reproduces the declared SHA-256.
4. Do not stash, reset, restore, clean, checkout, format, install, test, commit, or push from either original candidate.
5. Record their state again after publication; it must remain identical.

Stop with C06_CANDIDATE_STATE_MISSING_OR_CHANGED on any mismatch.

## Ref-safe and branch-absence gate

1. Inspect every relevant fetch refspec.
2. Do not use broad git fetch --all --tags --prune on mirror-style +refs/*:refs/* clones.
3. Use direct repository URLs into isolated refs or fresh clones.
4. Verify corrected backend and unchanged frontend base commits and trees.
5. Verify schema blob, migration count/subtree, and CampaignDetailWorkspace blob.
6. Verify the three remote publication branches are absent.
7. A same-named dirty local branch or worktree must not be deleted or rewritten. Use temporary local resumption branches and push the final commit by explicit refspec to the authorized remote branch.
8. Require all fresh resumption worktrees to be clean before applying patches.

## Fresh candidate reconstruction

### Backend

1. Create a fresh isolated worktree and temporary local branch from 36f9142c553af6eeecacc03977853951b7246b77.
2. Apply the exact preserved backend binary patch.
3. Require the patch to apply without fuzz, reject, three-way fallback, or manual edit.
4. Verify exactly the original 24 C06 paths changed relative to the corrected base.
5. Verify each C06 changed-path blob matches the preserved candidate identity.
6. Verify prisma/schema.prisma remains at corrected blob 8d5833ca756b837cdaaafdc4fe9c746676d63d8a.
7. Verify migration count and subtree remain exact.
8. Do not edit the reconstructed candidate. Any source correction requirement is a circuit breaker.

### Frontend

1. Create a fresh isolated worktree and temporary local branch from bdd03e036ccd981fbfc573b58815fd277b9d757c.
2. Apply the exact preserved frontend binary patch.
3. Require application without fuzz, reject, three-way fallback, or manual edit.
4. Verify exactly the original 15 paths changed.
5. Verify each changed-path blob matches the preserved candidate identity.
6. Verify CampaignDetailWorkspace retains blob 62cd7684410144de816363e0f943e244da2225be.
7. Do not edit the reconstructed candidate.

## Exact backend path allowlist — 24

1. src/features/campaign-applications/application-contract.test.ts
2. src/features/campaign-applications/creator-brief-pack.test.ts
3. src/features/creator-entry/creator-instagram-connection.architecture.test.ts
4. src/features/creator-payouts/contracts/creator-payouts.contract.ts
5. src/features/creator-payouts/creator-payouts-p1.test.ts
6. src/features/creator-payouts/creator-payouts-p2.test.ts
7. src/features/creator-payouts/creator-payouts-p3.test.ts
8. src/features/creator-payouts/creator-payouts-p6.postgres.test.ts
9. src/features/creator-payouts/creator-payouts.controller.ts
10. src/features/creator-payouts/creator-payouts.module.ts
11. src/features/creator-payouts/dto/creator-payouts-query.dto.ts
12. src/features/creator-payouts/services/creator-payouts-authorization.service.ts
13. src/features/creator-payouts/services/creator-payouts-history-projection.service.ts
14. src/features/creator-payouts/services/creator-payouts-obligation-projection.service.ts
15. src/features/creator-payouts/services/creator-payouts-query.service.ts
16. src/features/creator-payouts/services/creator-payouts-read-environment.service.ts
17. src/features/creator-payouts/services/creator-payouts.service.ts
18. src/features/creator-payouts/utils/creator-payouts-cursor.ts
19. src/features/creator-settings/payouts/creator-payout-method-summary.module.ts
20. src/features/creator-settings/payouts/creator-payout-method-summary.port.ts
21. src/features/creator-settings/payouts/prisma-creator-payout-method-summary.service.ts
22. src/features/creator-settings/team/creator-workspace-actor.service.test.ts
23. src/features/creator-settings/team/creator-workspace-actor.service.ts
24. src/shared/creator/creator-workspace-actor.contract.ts

Path 17 must be deleted.

Do not change src/features/creator-home/creator-home.architecture.test.ts or any other backend path.

## Exact frontend path allowlist — 15

1. src/features/collaboration/utils/collaboration-g1c-bank-cutover.test.ts
2. src/features/creator-onboarding/creator-entry-architecture.test.ts
3. src/features/creator-onboarding/creator-settings-guard-scope.test.ts
4. src/features/creator-payouts/api/creator-payouts-client.ts
5. src/features/creator-payouts/components/CreatorBankDetailsDrawer.tsx
6. src/features/creator-payouts/components/CreatorPayoutsWorkspace.tsx
7. src/features/creator-payouts/contracts/creator-payouts.contracts.ts
8. src/features/creator-payouts/creator-payouts-p4.test.ts
9. src/features/creator-payouts/creator-payouts-p5.test.ts
10. src/features/creator-payouts/creator-payouts.css
11. src/features/creator-payouts/hooks/use-creator-payouts.ts
12. src/features/creator-payouts/utils/payout-document-exports.ts
13. src/features/settings/components/creator/creator-payouts-settings.tsx
14. src/features/settings/hooks/use-creator-payouts-settings.ts
15. src/routes/app-routes.tsx

Paths 5 and 12 must be deleted.

## Frozen C06 invariants

Preserve:

- exactly six GET-only private/no-store routes;
- Owner and Manager PAYOUT_WORKSPACE_READ;
- Assistant and outsider non-enumerating denial;
- signed fixed-as-of cursors and cross-workspace isolation;
- authorizationVersion;
- canonical due dates and financial-source reuse;
- PAID_TO_DATE net of coherent processed reversals;
- due provider-disabled payouts as PROVIDER_UNAVAILABLE;
- C05 as sole payout-destination mutation authority;
- Settings-only bank mutation;
- no retry, execution trigger, timing promise, or provider claim;
- no new persistence, ledger, hash, schema, or migration;
- zero C06 financial writes;
- zero provider calls;
- legacy backend service deletion;
- Creator Entry and Instagram independence;
- no legacy bank drawer or generated payout documents;
- all Gate A actor capabilities, routes, modules, DI boundaries, and frontend correction;
- Brand Payout separation;
- Creator Chat deferral;
- Campaign Intelligence pause.

## Mandatory validation sequence

Run in this order.

### 1. Static and focused gates

Verify:

- exact backend/frontend path sets and reconstructed blobs;
- corrected schema blob remains exact;
- 106 migrations and exact subtree;
- no Prisma or migration diff relative to corrected backend base;
- CampaignDetailWorkspace blob remains exact;
- legacy service absent with zero references;
- exactly six GET routes and zero POST/PUT/PATCH/DELETE C06 routes;
- no provider, Razorpay, network, retry, payout execution, or runtime write composition;
- C05-only destination mutation;
- no Brand Payout, Campaign Objective, Creator Chat, or paused-lane source change.

Run all focused C06, actor, guard, C05, C03, C04, Creator Home, Creator Settings, notification, Brand Payout, route, and ownership suites defined by the accepted Gate B plan.

The prior minimums were:

~~~text
BACKEND_FOCUSED =
63 / 63 PASS

FRONTEND_FOCUSED =
37 / 37 PASS
~~~

The resumed run must meet or exceed these without source edits.

### 2. PostgreSQL

Use a unique disposable PostgreSQL 16 database in UTC.

1. Deploy all unchanged 106 migrations.
2. Verify migration integrity and the corrected physical/schema relation.
3. Run C06 P6 PostgreSQL.
4. Verify Owner/Manager reads.
5. Verify Assistant/outsider non-enumerating denial.
6. Verify fixed-as-of pagination and cross-workspace cursor rejection.
7. Verify canonical due dates.
8. Verify due state PROVIDER_UNAVAILABLE.
9. Verify PAID_TO_DATE reversal coherence.
10. Verify partial/conflicting lineage fails closed.
11. Capture SQL after fixture setup and prove zero INSERT, UPDATE, DELETE, DDL, payout execution, provider-state mutation, or other financial write during C06 reads.
12. Remove only run-created resources.

The previously failing Prisma query must now pass through the corrected backend base.

### 3. Full backend gates

Run:

~~~text
npm ci
npm run prisma:generate
npx prisma validate
npm run lint:eslint
npm run build
npm test
npm run test:campaign-readiness
npm run intelligence:contracts:verify
~~~

### 4. Full frontend gates

Run:

~~~text
npm ci
npm run typecheck
npm run lint
npm test
npm run test:campaign-autosave
npm run build
~~~

### 5. Browser and accessibility

If the coordinated seeded browser environment is available, test widths 390, 767, 768, and 1440 for Owner, Manager, Assistant denial, loading, empty, partial, provider unavailable, obligations, history, pagination, detail, Settings link, keyboard navigation, Escape, focus restoration, and Axe serious/critical zero.

If unavailable after all mandatory non-browser gates pass:

~~~text
BROWSER_GATE =
DEFERRED_TO_FINAL_WHOLE_APPLICATION_ACCEPTANCE
~~~

Report the exact missing infrastructure. Do not imply browser acceptance.

## Publication

Only after every mandatory non-browser gate passes.

Backend:

1. Commit the reconstructed 24-path C06 payload once.
2. Sole parent must be 36f9142c553af6eeecacc03977853951b7246b77.
3. Push the commit by explicit refspec to:
   reconcile/mvp-canonical-application-v1-gate-b-c06-backend
4. Do not force.
5. Fetch back through a direct URL into an isolated ref.
6. Verify commit, parent, tree, 24-path diff, corrected schema blob, migration count, and subtree.

Frontend:

1. Commit the reconstructed 15-path payload once.
2. Sole parent must be bdd03e036ccd981fbfc573b58815fd277b9d757c.
3. Push to:
   reconcile/mvp-canonical-application-v1-gate-b-c06-frontend
4. Do not force.
5. Fetch back through an isolated ref and verify commit, parent, tree, path set, and protected blob.

Authority:

1. Create the authority branch from dbb919f33f888285167685d5489cf9e4f687441f.
2. Publish only:
   docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_GATE_B_C06_SEMANTIC_CONVERGENCE_EVIDENCE_V1.md
3. Record all authority, continuity, patch application, identities, tests, PostgreSQL, no-write/no-provider proof, browser status, branches, fetch-back, exclusions, and telemetry.
4. Push without force.
5. Fetch back and verify commit, tree, blob, and path.

Finally reverify the original preserved candidate worktrees remain unchanged at their original bases and hashes.

## Circuit breakers

Stop without remote publication if any occurs:

~~~text
PARENT_AUTHORITY_MISMATCH
CORRECTED_BACKEND_BASE_MISMATCH
FRONTEND_BASE_MISMATCH
C06_AUTHORITY_OR_DONOR_MISMATCH
C06_ORIGINAL_CANDIDATE_MISMATCH
PATCH_SHA256_MISMATCH
PATCH_APPLY_FUZZ_REJECT_OR_THREE_WAY
RECONSTRUCTED_PATH_OR_BLOB_MISMATCH
PROTECTED_SCHEMA_BLOB_CHANGED
MIGRATION_COUNT_OR_SUBTREE_CHANGED
CAMPAIGN_DETAIL_WORKSPACE_BLOB_CHANGED
LEGACY_SERVICE_PRESENT
C05_MUTATION_AUTHORITY_VIOLATION
CREATOR_ENTRY_OR_INSTAGRAM_DEPENDENCY
BRAND_PAYOUT_SOURCE_CHANGE
CAMPAIGN_OBJECTIVE_CHANGE
CREATOR_CHAT_INTRODUCED
PAUSED_WORKSTREAM_ACTIVATED
PROVIDER_CALL_OR_COMPOSITION
FINANCIAL_WRITE_OR_PAYOUT_EXECUTION
POSTGRESQL_PROJECTION_FAILURE
NON_ENUMERATING_DENIAL_FAILURE
FIXED_AS_OF_OR_CURSOR_ISOLATION_FAILURE
GATE_A_REGRESSION
ACCEPTED_TEST_LINT_OR_BUILD_FAILURE
TARGET_REMOTE_BRANCH_COLLISION
UNSAFE_FETCH_REFSPEC
REMOTE_BRANCH_CREATED_BEFORE_MANDATORY_GATES_PASS
ORIGINAL_CANDIDATE_WORKTREE_TOUCHED
~~~

Do not edit reconstructed source to repair a failure. Return the exact blocker and smallest next decision.

## Required final report

Return:

~~~text
CANONICAL_RECONCILIATION_GATE_B_C06_RESUMPTION_RESULT =
READY_FOR_PARENT_REVIEW | READY_FOR_PARENT_REVIEW_WITH_BROWSER_DEFERRED | CIRCUIT_BREAKER

RUN_STARTED_AT_UTC =
RUN_COMPLETED_AT_UTC =
WALL_CLOCK_SECONDS =
ACTIVE_EXECUTION_SECONDS =
COMMAND_COUNT =
LONGEST_COMMAND =
LONGEST_COMMAND_SECONDS =
WAITING_OR_BLOCKED_SECONDS =

PARENT_AUTHORITY_INTEGRITY =
CORRECTED_BACKEND_BASE_INTEGRITY =
FRONTEND_BASE_INTEGRITY =
C06_AUTHORITY_INTEGRITY =

ORIGINAL_BACKEND_CANDIDATE_CONTINUITY =
ORIGINAL_BACKEND_MANIFEST_SHA256 =
ORIGINAL_BACKEND_PATCH_SHA256 =
ORIGINAL_FRONTEND_CANDIDATE_CONTINUITY =
ORIGINAL_FRONTEND_MANIFEST_SHA256 =
ORIGINAL_FRONTEND_PATCH_SHA256 =

BACKEND_PATCH_APPLICATION =
BACKEND_CHANGED_PATHS =
BACKEND_RECONSTRUCTED_BLOBS =
BACKEND_COMMIT =
BACKEND_PARENT =
BACKEND_TREE =
BACKEND_FETCH_BACK =

FRONTEND_PATCH_APPLICATION =
FRONTEND_CHANGED_PATHS =
FRONTEND_RECONSTRUCTED_BLOBS =
FRONTEND_COMMIT =
FRONTEND_PARENT =
FRONTEND_TREE =
FRONTEND_FETCH_BACK =

MIGRATION_COUNT =
MIGRATION_SUBTREE =
PRISMA_SCHEMA_BLOB =
CAMPAIGN_DETAIL_WORKSPACE_BLOB =

BACKEND_FOCUSED_TESTS =
BACKEND_POSTGRESQL =
BACKEND_FULL_TESTS =
BACKEND_LINT =
BACKEND_BUILD =
BACKEND_CAMPAIGN_READINESS =
BACKEND_INTELLIGENCE_CONTRACT_VERIFY =

FRONTEND_FOCUSED_TESTS =
FRONTEND_FULL_TESTS =
FRONTEND_TYPECHECK =
FRONTEND_LINT =
FRONTEND_AUTOSAVE =
FRONTEND_BUILD =

LEGACY_SERVICE_DELETED =
C05_MUTATION_AUTHORITY_PRESERVED =
PROVIDER_DISABLED_BOUNDARY_PRESERVED =
CREATOR_ENTRY_INSTAGRAM_INDEPENDENCE =
BRAND_PAYOUT_SEPARATION =
GATE_A_CAPABILITIES_PRESERVED =
ZERO_FINANCIAL_WRITES =
ZERO_PROVIDER_CALLS =
BROWSER_GATE =

AUTHORITY_BRANCH =
EVIDENCE_COMMIT =
EVIDENCE_TREE =
EVIDENCE_BLOB =
EVIDENCE_PATH =
EVIDENCE_FETCH_BACK =

ORIGINAL_CANDIDATES_UNCHANGED_AFTER_PUBLICATION =
SOURCE_WORKTREES_CLEAN =
BLOCKERS =
NEXT_BOUNDARY =
PARENT_REVIEW_ONLY =
~~~

A ready result requires exact candidate reconstruction, successful C06 PostgreSQL proof, full backend/frontend gates, no-write/no-provider proof, bounded publication, fetch-back, and original candidate continuity.

End after the Gate B report. Do not begin Campaign Objectives, final canonical publication, deployment, or paused workstreams.
