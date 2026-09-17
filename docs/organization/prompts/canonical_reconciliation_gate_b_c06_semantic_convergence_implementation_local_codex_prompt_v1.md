# Local Codex Runner — Canonical Reconciliation Gate B C06 Semantic Convergence Implementation V1

CANONICAL_RECONCILIATION_GATE_B_C06_SEMANTIC_CONVERGENCE_IMPLEMENTATION_V1

## Role and authorization

Act as the bounded implementation worker for Gate B C06 canonical convergence.

This prompt authorizes semantic convergence of the already accepted provider-disabled C06 Creator Payouts implementation onto the exact Parent-accepted Gate A heads.

It does not authorize Product redesign, architecture redesign, wholesale branch merging, end-to-end cherry-picking, migration or Prisma changes, provider integration, financial writes, deployment, Campaign Objective convergence, Creator Chat, Applicant AI Match resumption, or Campaign Performance/Reporting resumption.

~~~text
IMPLEMENTATION =
AUTHORIZED WITHIN THE EXACT PATH ALLOWLISTS

BACKEND_AUTHORIZED_PATHS =
24

FRONTEND_AUTHORIZED_PATHS =
15

EXPECTED_MIGRATION_COUNT =
106

C06_OWNED_MIGRATIONS =
0
~~~

## Mandatory telemetry

Capture immediately at start and immediately before the final response:

~~~text
RUN_STARTED_AT_UTC =
RUN_COMPLETED_AT_UTC =
WALL_CLOCK_SECONDS =
ACTIVE_EXECUTION_SECONDS = <if measurable>
COMMAND_COUNT =
LONGEST_COMMAND =
LONGEST_COMMAND_SECONDS =
WAITING_OR_BLOCKED_SECONDS = <if measurable>

INTEGRITY_SECONDS =
BACKEND_IMPLEMENTATION_SECONDS =
FRONTEND_IMPLEMENTATION_SECONDS =
POSTGRESQL_VALIDATION_SECONDS =
BACKEND_VALIDATION_SECONDS =
FRONTEND_VALIDATION_SECONDS =
BROWSER_VALIDATION_SECONDS =
PUBLICATION_SECONDS =
~~~

Use NOT_MEASURABLE rather than estimating.

## Controlling implementation authority

### Gate B preflight Parent acceptance

~~~text
REPOSITORY =
Piyush1087/dummy_tcs

COMMIT =
833293602d95dd24a32e44520353879063090933

PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_GATE_B_C06_PREFLIGHT_PARENT_ACCEPTANCE_V1.md

RESULT =
ACCEPTED

NEXT_BOUNDARY =
BOUNDED GATE B C06 SEMANTIC CONVERGENCE IMPLEMENTATION
~~~

Verify this commit and path before mutation.

### Gate A Parent acceptance and evidence

~~~text
GATE_A_PARENT_ACCEPTANCE_COMMIT =
910c3d4c9696d23f05acbc47d825c84383d86caf

GATE_A_PARENT_ACCEPTANCE_PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_GATE_A_PARENT_ACCEPTANCE_V1.md

GATE_A_PARENT_ACCEPTANCE_BLOB =
33e935e6fd9de45574117e0a4d664505308472d9

GATE_A_EVIDENCE_COMMIT =
7afdcf693f41fea2692d07b873fb99e7e65a948e

GATE_A_EVIDENCE_TREE =
9b2c12b850119ccaf53b446f69472c99503eab57

GATE_A_EVIDENCE_BLOB =
5a2b846e1c8e2303ab7e9e607fab0e73e327a4a0
~~~

## Exact implementation bases

Backend:

~~~text
REPOSITORY =
Piyush1087/creator-commerce-backend-v2-clone

BASE_COMMIT =
b14afa38fb82155ea155beeae2430a1854c089a3

BASE_TREE =
f55aa0b28661ce265ba568261eb951ab78b8b26d

BASE_BRANCH_NAVIGATION_ONLY =
reconcile/mvp-canonical-application-v1-backend

NEW_BRANCH =
reconcile/mvp-canonical-application-v1-gate-b-c06-backend

BASE_MIGRATION_COUNT =
106

BASE_MIGRATION_SUBTREE =
3894d6d2009fdbdf6bce94708d955c24cf5804ce

BASE_PRISMA_SCHEMA_BLOB =
da08f8e8518a67b05b58396cf9069481bde76425
~~~

Frontend:

~~~text
REPOSITORY =
Piyush1087/creator-commerce-frontend-v2-clone

BASE_COMMIT =
bdd03e036ccd981fbfc573b58815fd277b9d757c

BASE_TREE =
008c07192afa7c6a99d73f67d6df3c5bec83e7e8

BASE_BRANCH_NAVIGATION_ONLY =
reconcile/mvp-canonical-application-v1-frontend

NEW_BRANCH =
reconcile/mvp-canonical-application-v1-gate-b-c06-frontend

CAMPAIGN_DETAIL_WORKSPACE_BLOB =
62cd7684410144de816363e0f943e244da2225be
~~~

Authority:

~~~text
REPOSITORY =
Piyush1087/dummy_tcs

BASE_COMMIT =
833293602d95dd24a32e44520353879063090933

NEW_BRANCH =
reconcile/mvp-canonical-application-v1-gate-b-c06-authority

EVIDENCE_PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_GATE_B_C06_SEMANTIC_CONVERGENCE_EVIDENCE_V1.md
~~~

Do not base the authority evidence branch on the later prompt-publication commit.

## Accepted donor authority

~~~text
C06_AUTHORITY_REPOSITORY =
Piyush1087/dummy_tcs

C06_AUTHORITY_COMMIT =
a9bd40eeacc7a201c8ad46fdd0436212a9d65399

C06_ACCEPTANCE_SCOPE =
CREATOR_PAYOUT_PROVIDER_DISABLED_ONLY

C06_BACKEND_DONOR =
071272891041a0cf187f549c3ed82bba5dcbbb79

C06_BACKEND_DONOR_TREE =
dc1c01ec3479fb3f14cb698e1e88aaa56db5ef66

C06_FRONTEND_DONOR =
7f72252fb5cd31f69da9ea59aa9ff81080ac4896

C06_FRONTEND_DONOR_TREE =
c066d0ea3d3ce3842e097d385a657050c38d10e6
~~~

Structural convergence commits and historical migration-86 assertions are lineage only. Do not replay them.

## Ref-safe acquisition and clean-state gate

Before mutation:

1. Record remotes, fetch refspecs, current heads, worktrees, and status.
2. Require clean tracked source worktrees.
3. Do not use broad git fetch --all --tags --prune on clones mapping +refs/*:refs/*.
4. Fetch immutable objects by explicit SHA, direct URL into isolated refs, or fresh clean clones.
5. Verify all authority, base, donor, tree, blob, migration, and schema identities.
6. Verify the three new branch names are absent locally and remotely.
7. Stop on any mismatch, dirty worktree, branch collision, or unsafe ref behavior.

Local implementation branches may be created after this gate. Do not push any implementation or authority branch until all mandatory non-browser validation passes.

## Frozen C06 behavior

Preserve exactly:

- six GET-only private/no-store Creator Payout routes;
- creator-scoped obligations, summaries, history, and detail;
- Owner and Manager PAYOUT_WORKSPACE_READ;
- Assistant and outsider non-enumerating denial;
- signed fixed-as-of cursors using authorizationVersion;
- cross-workspace cursor rejection;
- canonical financial-source projection;
- canonical due dates;
- PAID_TO_DATE equals settled amount minus coherent processed reversals;
- partial, conflicting, or incoherent financial lineage fails closed;
- due provider-disabled payout state equals PROVIDER_UNAVAILABLE;
- no timing promise, retry, manual trigger, scheduled execution, or provider claim;
- C05 masked payout-method summary and Manage in Settings link;
- C05 remains sole destination-mutation authority;
- no new persistence, Creator ledger, financial hash, schema, or migration;
- zero C06 financial writes;
- zero provider calls;
- legacy Creator Payout service remains deleted;
- Creator Entry and Instagram independence;
- accepted responsive, keyboard/focus, and accessibility behavior.

## Backend mutation allowlist — exactly 24 paths

### Transplant exact accepted donor blobs — 14

1. src/features/creator-payouts/contracts/creator-payouts.contract.ts
2. src/features/creator-payouts/creator-payouts.controller.ts
3. src/features/creator-payouts/creator-payouts.module.ts
4. src/features/creator-payouts/dto/creator-payouts-query.dto.ts
5. src/features/creator-payouts/services/creator-payouts-authorization.service.ts
6. src/features/creator-payouts/services/creator-payouts-history-projection.service.ts
7. src/features/creator-payouts/services/creator-payouts-obligation-projection.service.ts
8. src/features/creator-payouts/services/creator-payouts-query.service.ts
9. src/features/creator-payouts/services/creator-payouts-read-environment.service.ts
10. src/features/creator-payouts/utils/creator-payouts-cursor.ts
11. src/features/creator-settings/payouts/creator-payout-method-summary.module.ts
12. src/features/creator-settings/payouts/creator-payout-method-summary.port.ts
13. src/features/creator-settings/payouts/prisma-creator-payout-method-summary.service.ts
14. src/features/creator-settings/team/creator-workspace-actor.service.ts

For each path, verify the Gate A blob equals the accepted pre-C06 donor-parent blob before replacement. The resulting blob must equal the final accepted donor blob exactly.

### Test-only accepted updates — 7

15. src/features/campaign-applications/application-contract.test.ts
16. src/features/campaign-applications/creator-brief-pack.test.ts
17. src/features/creator-entry/creator-instagram-connection.architecture.test.ts
18. src/features/creator-payouts/creator-payouts-p1.test.ts
19. src/features/creator-payouts/creator-payouts-p2.test.ts
20. src/features/creator-payouts/creator-payouts-p3.test.ts
21. src/features/creator-payouts/creator-payouts-p6.postgres.test.ts

Preserve the accepted 30-second loopback bounds. Update the Instagram-independence assertion without weakening any Gate A guard or provider boundary.

### Merge with Gate A — 2

22. src/features/creator-settings/team/creator-workspace-actor.service.test.ts
23. src/shared/creator/creator-workspace-actor.contract.ts

Retain every Gate A action and assertion. Add PAYOUT_WORKSPACE_READ and optional authorizationVersion. Owner and Manager receive payout-read capability; Assistant does not.

### Mandatory deletion — 1

24. src/features/creator-payouts/services/creator-payouts.service.ts

Delete it and prove zero imports, references, provider composition, or resurrection.

### Explicit backend exclusions

Do not modify:

- src/features/creator-home/creator-home.architecture.test.ts;
- src/app.module.ts;
- any Prisma schema or migration path;
- Creator Home, C03, C04, notifications, Brand Payouts, Instagram lifecycle, or Instagram Intelligence-provider source outside the allowlist;
- Campaign Objective or Campaign Intelligence source.

The excluded Creator Home test contains historical migration-86 lineage and must not be replayed.

## Frontend mutation allowlist — exactly 15 paths

### Transplant exact accepted donor blobs — 7

1. src/features/creator-payouts/api/creator-payouts-client.ts
2. src/features/creator-payouts/components/CreatorPayoutsWorkspace.tsx
3. src/features/creator-payouts/contracts/creator-payouts.contracts.ts
4. src/features/creator-payouts/creator-payouts.css
5. src/features/creator-payouts/hooks/use-creator-payouts.ts
6. src/features/settings/components/creator/creator-payouts-settings.tsx
7. src/features/settings/hooks/use-creator-payouts-settings.ts

Verify each precondition blob before replacement and require exact final donor blobs.

### Test-only accepted updates — 4

8. src/features/collaboration/utils/collaboration-g1c-bank-cutover.test.ts
9. src/features/creator-onboarding/creator-entry-architecture.test.ts
10. src/features/creator-payouts/creator-payouts-p4.test.ts
11. src/features/creator-payouts/creator-payouts-p5.test.ts

### Merge with Gate A — 2

12. src/features/creator-onboarding/creator-settings-guard-scope.test.ts
13. src/routes/app-routes.tsx

Preserve all Gate A routes and guards. Replace only the temporary /creator/payouts Settings redirect with the accepted CreatorPayoutsPage mount outside RequireCreatorPlatformAccess.

### Mandatory deletion — 2

14. src/features/creator-payouts/components/CreatorBankDetailsDrawer.tsx
15. src/features/creator-payouts/utils/payout-document-exports.ts

C06 may link to Settings but may not mutate bank details or fabricate payout documents.

### Explicit frontend preservation

- src/pages/creator/payouts/creator-payouts-page.tsx must remain byte-identical.
- src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx must retain blob 62cd7684410144de816363e0f943e244da2225be.
- All other Gate A routes, shell, navigation, Creator Home, C03, C04, Settings, Brand Payouts, and paused lanes remain unchanged.

## Mandatory implementation order

1. Complete immutable and clean-state verification.
2. Create isolated local backend/frontend branches from the exact Gate A bases.
3. Record base changed-path, migration, schema, and protected-blob manifests.
4. Apply the 14 backend exact transplants.
5. Merge the two backend shared-actor paths.
6. Apply the seven backend test updates.
7. Delete the legacy backend service.
8. Prove the backend diff contains only the 24 allowlisted paths.
9. Apply the seven frontend exact transplants.
10. Apply the four frontend test updates.
11. Merge the two frontend route/guard paths.
12. Delete the two legacy frontend paths.
13. Prove the frontend diff contains only the 15 allowlisted paths.
14. Run static boundary and negative scans.
15. Run focused backend/frontend validation.
16. Run disposable PostgreSQL validation and captured-query no-write proof.
17. Run complete backend/frontend Gate A regression gates.
18. Run integrated browser validation if the coordinated environment is available.
19. If all mandatory non-browser gates pass, commit the exact bounded changes.
20. Push backend/frontend branches without force.
21. Fetch back through isolated refs and verify commits/trees.
22. Create the authority evidence branch from the exact Gate B preflight Parent acceptance commit.
23. Publish only the Gate B evidence document, push without force, and fetch back.
24. Stop for Parent review.

Do not use merge commits, wholesale donor merges, broad cherry-picks, rebases, or squashes to synthesize the semantic result. The new implementation commits must each have their exact Gate A base as sole parent.

## Mandatory static and integrity gates

Prove:

- backend changed-path set equals exactly the authorized subset actually required and is contained within all 24 allowed paths;
- frontend changed-path set equals exactly the authorized subset actually required and is contained within all 15 allowed paths;
- no unauthorized path changed;
- migration count remains 106;
- migration subtree remains 3894d6d2009fdbdf6bce94708d955c24cf5804ce;
- Prisma schema blob remains da08f8e8518a67b05b58396cf9069481bde76425;
- CampaignDetailWorkspace blob remains 62cd7684410144de816363e0f943e244da2225be;
- Creator Payout legacy service is absent with zero references;
- exactly six controller routes exist and all are GET;
- no POST, PUT, PATCH, or DELETE C06 route exists;
- no runtime create, update, upsert, delete, executeRaw, provider client, Razorpay, network, retry, or execution trigger exists in C06;
- no provider credential is supplied;
- C05 remains the only payout-method mutation surface;
- no Brand Payout source path changed;
- no Campaign Objective source path changed;
- no Creator Chat or paused-lane activation exists.

If an allowlisted path proves unnecessary because the Gate A target already has the final accepted state, leave it unchanged and report ALREADY_PRESENT. Do not mutate merely to reach an expected count.

## Mandatory backend validation

Use repository-defined commands and exact script names where available:

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

Focused validation must cover:

- creator-payouts P1, P2, P3, and P6 PostgreSQL;
- Owner and Manager allow;
- Assistant and outsider non-enumerating denial;
- actor capability union and authorizationVersion;
- six GET-only routes and private/no-store caching;
- signed fixed-as-of pagination;
- cross-workspace cursor rejection;
- canonical due dates;
- provider-disabled due-state behavior;
- PAID_TO_DATE reversal coherence;
- C05 masked summary and Settings mutation ownership;
- Creator Entry/Instagram independence;
- C03, C04, Creator Home, Creator Settings, and notifications regressions;
- all Brand Payout tests and source separation;
- Gate A DI and Intelligence contract preservation.

## Mandatory PostgreSQL validation

Use a unique disposable PostgreSQL 16 database in UTC. Never use a shared, development, staging, production, customer, or provider-connected database.

1. Deploy the unchanged 106 migrations.
2. Verify 106 unique successful migration rows and no failed, rolled-back, rewritten, or pending migration.
3. Run the C06 PostgreSQL fixture and projection proof.
4. Verify Owner and Manager reads.
5. Verify Assistant and outsider denial without enumeration.
6. Verify fixed-as-of pagination and cross-workspace cursor rejection.
7. Verify due-date projection and due → PROVIDER_UNAVAILABLE.
8. Verify PAID_TO_DATE subtracts only coherent processed reversals.
9. Verify partial, currency-conflicted, or incoherent lineage fails closed.
10. Permit fixture setup before measurement.
11. During measured C06 service/controller reads, capture SQL and fail on INSERT, UPDATE, DELETE, DDL, payout execution, provider-state mutation, or any financial write.
12. Remove only disposable resources created by this run.

## Mandatory frontend validation

Run:

~~~text
npm ci
npm run typecheck
npm run lint
npm test
npm run test:campaign-autosave
npm run build
~~~

Focused coverage must include:

- C06 P4/P5;
- collaboration bank cutover;
- Creator Entry architecture;
- Settings guard scope;
- Creator Home, C03, C04, Settings, shell, navigation, route, and platform-guard regressions;
- Brand Payout separation;
- loading, empty, partial, provider-unavailable, obligations, history, pagination, detail, and Settings-link behavior;
- no bank mutation drawer;
- no generated payout-document behavior;
- no timing, retry, execution, or provider claim.

## Browser and accessibility gate

If the coordinated seeded backend/frontend/browser environment is available, validate at:

~~~text
390
767
768
1440
~~~

Cover:

- Owner;
- Manager;
- Assistant denial;
- loading;
- empty;
- partial;
- provider unavailable;
- obligation/history pagination;
- detail drawer;
- Manage in Settings link;
- keyboard tab order;
- Escape;
- focus restoration;
- Axe serious and critical violations equal zero;
- zero provider network calls.

If this integrated browser environment is unavailable:

- do not block source publication solely for that absence after every mandatory non-browser gate passes;
- report BROWSER_GATE = DEFERRED_TO_FINAL_WHOLE_APPLICATION_ACCEPTANCE;
- describe the exact missing fixture/infrastructure;
- do not claim browser acceptance.

## Publication

Only after all mandatory non-browser gates pass:

Backend:

- create one bounded commit with sole parent b14afa38fb82155ea155beeae2430a1854c089a3;
- push reconcile/mvp-canonical-application-v1-gate-b-c06-backend without force;
- fetch back through an isolated ref;
- verify SHA/tree and path allowlist.

Frontend:

- create one bounded commit with sole parent bdd03e036ccd981fbfc573b58815fd277b9d757c;
- push reconcile/mvp-canonical-application-v1-gate-b-c06-frontend without force;
- fetch back through an isolated ref;
- verify SHA/tree and path allowlist.

Authority:

- create reconcile/mvp-canonical-application-v1-gate-b-c06-authority from 833293602d95dd24a32e44520353879063090933;
- publish only docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_GATE_B_C06_SEMANTIC_CONVERGENCE_EVIDENCE_V1.md;
- include exact commands, exit codes, timing, manifests, diffs, tests, PostgreSQL, negative proofs, browser status, branch objects, exclusions, and worktree status;
- push without force;
- fetch back and verify commit, tree, blob, and path.

## Circuit breakers

Stop without remote publication if any occurs:

~~~text
AUTHORITY_POINTER_MISMATCH
GATE_A_BASE_SHA_OR_TREE_MISMATCH
C06_DONOR_SHA_OR_TREE_MISMATCH
C06_LINEAGE_MISMATCH
TARGET_BRANCH_COLLISION
UNSAFE_FETCH_REFSPEC
WORKTREE_NOT_CLEAN
TRANSPLANT_PRECONDITION_BLOB_MISMATCH
UNAUTHORIZED_PATH_MUTATION
SHARED_ACTOR_CAPABILITY_LOSS
AUTHORIZATION_VERSION_CONFLICT
CREATOR_ENTRY_OR_INSTAGRAM_DEPENDENCY_REINTRODUCED
LEGACY_PAYOUT_SERVICE_RESURRECTED
C05_MUTATION_AUTHORITY_VIOLATION
BRAND_PAYOUT_SOURCE_CHANGE
MIGRATION_COUNT_NOT_106
MIGRATION_OR_PRISMA_CHANGE
CAMPAIGN_DETAIL_WORKSPACE_BLOB_CHANGE
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
REMOTE_BRANCH_CREATED_BEFORE_MANDATORY_GATES_PASS
~~~

Do not repair unrelated source or expand the allowlist. Return the exact failure and smallest Parent decision or correction boundary.

## Required final report

Return:

~~~text
CANONICAL_RECONCILIATION_GATE_B_C06_RESULT =
READY_FOR_PARENT_REVIEW | READY_FOR_PARENT_REVIEW_WITH_BROWSER_DEFERRED | CIRCUIT_BREAKER

RUN_STARTED_AT_UTC =
RUN_COMPLETED_AT_UTC =
WALL_CLOCK_SECONDS =
ACTIVE_EXECUTION_SECONDS =
COMMAND_COUNT =
LONGEST_COMMAND =
LONGEST_COMMAND_SECONDS =
WAITING_OR_BLOCKED_SECONDS =

GATE_B_PARENT_ACCEPTANCE_INTEGRITY =
GATE_A_BASE_INTEGRITY =
C06_DONOR_AUTHORITY_INTEGRITY =
CLEAN_STATE_AND_BRANCH_ABSENCE =

BACKEND_CHANGED_PATHS =
BACKEND_ALLOWLIST =
BACKEND_COMMIT =
BACKEND_PARENT =
BACKEND_TREE =
BACKEND_FETCH_BACK =

FRONTEND_CHANGED_PATHS =
FRONTEND_ALLOWLIST =
FRONTEND_COMMIT =
FRONTEND_PARENT =
FRONTEND_TREE =
FRONTEND_FETCH_BACK =

MIGRATION_COUNT =
MIGRATION_SUBTREE =
PRISMA_SCHEMA_BLOB =
CAMPAIGN_DETAIL_WORKSPACE_BLOB =

LEGACY_SERVICE_DELETED =
C05_MUTATION_AUTHORITY_PRESERVED =
PROVIDER_DISABLED_BOUNDARY_PRESERVED =
CREATOR_ENTRY_INSTAGRAM_INDEPENDENCE =
BRAND_PAYOUT_SEPARATION =
GATE_A_CAPABILITIES_PRESERVED =

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

ZERO_FINANCIAL_WRITES =
ZERO_PROVIDER_CALLS =
BROWSER_GATE =

AUTHORITY_BRANCH =
EVIDENCE_COMMIT =
EVIDENCE_TREE =
EVIDENCE_BLOB =
EVIDENCE_PATH =
EVIDENCE_FETCH_BACK =

SOURCE_WORKTREES_CLEAN =
BLOCKERS =
NEXT_BOUNDARY =
PARENT_REVIEW_ONLY =
~~~

A ready result requires all mandatory non-browser gates, exact bounded publication, and fetch-back to pass. Browser deferral must be explicit if applicable.

End after the Gate B report. Do not begin Campaign Objective convergence, final canonical publication, deployment, or paused workstreams.
