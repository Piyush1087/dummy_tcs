# Local Codex Runner — Gate C Campaign Objectives Read-Only Convergence Preflight V1

CANONICAL_RECONCILIATION_GATE_C_CAMPAIGN_OBJECTIVES_READ_ONLY_PREFLIGHT_V1

## Role

Act as the local runtime and Git-forensics worker for a strictly read-only Campaign Objectives convergence preflight.

Determine whether the accepted Campaign Objectives semantic implementation can be safely transplanted onto the exact Gate B C06 canonical bases. Produce an authority-safe implementation plan. Do not implement it.

## Authorization boundary

Authorized:

1. read-only Git fetches into isolated verification refs;
2. immutable commit, tree, blob, path, ancestry, merge-base, and branch-head verification;
3. disposable clones or worktrees for inspection;
4. source, test, schema, migration, package-script, route, and contract inspection;
5. read-only diffs and semantic path mapping;
6. non-mutating validation commands only when necessary to resolve a preflight question;
7. cleanup of only disposable resources created by this run;
8. a final report to the Parent.

Not authorized:

- source or documentation edits;
- branch, tag, commit, PR, or evidence publication;
- merge, rebase, cherry-pick, reset, or ref movement;
- migration creation or execution;
- database mutation;
- provider call;
- financial write;
- deployment;
- C06 reopening;
- Applicant AI Match resumption;
- Campaign Performance/Reporting resumption;
- Marketplace recommendation-score work;
- final canonical publication.

Dependency installation is allowed only inside a disposable inspection worktree if genuinely required. Prefer static inspection and existing accepted evidence. Do not rerun repository-wide validation merely to repeat already accepted Gate B evidence.

## Mandatory telemetry

Start measurement immediately before the first preflight command and return:

~~~text
RUN_STARTED_AT_UTC =
RUN_COMPLETED_AT_UTC =
WALL_CLOCK_SECONDS =
ACTIVE_EXECUTION_SECONDS = <if measurable>
COMMAND_COUNT =
LONGEST_COMMAND =
LONGEST_COMMAND_SECONDS =
WAITING_OR_BLOCKED_SECONDS = <if measurable>

AUTHORITY_VERIFICATION_SECONDS =
TOPOLOGY_ANALYSIS_SECONDS =
SEMANTIC_DELTA_ANALYSIS_SECONDS =
MIGRATION_AND_PERSISTENCE_ANALYSIS_SECONDS =
VALIDATION_PLAN_SECONDS =
~~~

Use `NOT_MEASURABLE` rather than estimating.

## Controlling Parent authority

~~~text
AUTHORITY_REPOSITORY =
Piyush1087/dummy_tcs

GATE_B_C06_PARENT_ACCEPTANCE_COMMIT =
0cfc0874fd0bb4238f77649a446018845971114e

GATE_B_C06_PARENT_ACCEPTANCE_PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_GATE_B_C06_PARENT_ACCEPTANCE_V1.md

GATE_B_C06_EVIDENCE_COMMIT =
760158a5005f52a7a5c8c604a4e797ea4121f0f7

GATE_B_C06_EVIDENCE_TREE =
fc024d1aad9fe90bdd84b48b0d072d55553651f2

GATE_B_C06_EVIDENCE_BLOB =
117668daf5444caadf16e14f6c539d34d6bb9529

CONSOLIDATED_ACCEPTANCE_REGISTER_V2_COMMIT =
346ae2a5ec58506870036db832223c996311fc29

CONSOLIDATED_ACCEPTANCE_REGISTER_V2_TREE =
215528f9b1e077f576ef29e5b61119b08d398107

CONSOLIDATED_ACCEPTANCE_REGISTER_V2_BLOB =
c9e0343794aad4a46e27882b58b98381dd4c9dcf

CONSOLIDATED_ACCEPTANCE_REGISTER_V2_PATH =
docs/ai-collaboration/core-platform-centres/CORE_PLATFORM_CENTRES_CONSOLIDATED_ACCEPTANCE_REGISTER_V2.md
~~~

Verify every supplied authority object before analysis. Recover from the controlling register the exact Campaign Objectives Product, architecture/technical, handoff, and final-acceptance authority chain, including each declared commit, tree, path, and blob.

Do not infer missing authority. If an immutable controlling object is unavailable or mismatched, stop with `AUTHORITY_INTEGRITY_BLOCKER`.

## Exact Gate C starting bases

Backend:

~~~text
REPOSITORY =
Piyush1087/creator-commerce-backend-v2-clone

BRANCH =
reconcile/mvp-canonical-application-v1-gate-b-c06-backend

COMMIT =
7883286d8e74b1759518c758c9683fc926374441

TREE =
faaaa49f82ca93c482bedbb0f9b0cf3385a1bada

SOLE_PARENT =
36f9142c553af6eeecacc03977853951b7246b77

PRISMA_SCHEMA_BLOB =
8d5833ca756b837cdaaafdc4fe9c746676d63d8a

MIGRATION_COUNT =
106

MIGRATION_SUBTREE =
3894d6d2009fdbdf6bce94708d955c24cf5804ce
~~~

Frontend:

~~~text
REPOSITORY =
Piyush1087/creator-commerce-frontend-v2-clone

BRANCH =
reconcile/mvp-canonical-application-v1-gate-b-c06-frontend

COMMIT =
b10a23f67ce9a813cd5664e45e31870c6bd2a7e1

TREE =
ecdcf27c9e4271342c413162bd2993138e4b263c

SOLE_PARENT =
bdd03e036ccd981fbfc573b58815fd277b9d757c

PROTECTED_CAMPAIGN_DETAIL_WORKSPACE_BLOB =
62cd7684410144de816363e0f943e244da2225be
~~~

Verify branch heads, commits, trees, parents, protected blobs, migration count, and migration subtree through direct repository URLs or isolated verification refs.

Do not use broad mirror fetch/prune operations. Prior clones use a nonstandard `+refs/*:refs/*` mapping that can move checked-out local refs. Do not use named-remote push bookkeeping. This preflight must not push anything.

## Accepted Campaign Objectives donors

~~~text
BACKEND_DONOR_REPOSITORY =
Piyush1087/creator-commerce-backend-v2-clone

BACKEND_ACCEPTED_CHECKPOINT =
3c1c523a178c452023add9745628ecff8a6e5e55

FRONTEND_DONOR_REPOSITORY =
Piyush1087/creator-commerce-frontend-v2-clone

FRONTEND_ACCEPTED_CHECKPOINT =
0662cd6963859d9e46abe53910b174d4826adaa3
~~~

Recover and report for each donor:

- exact commit and tree;
- commit parents;
- reachable advertised refs;
- merge base with the Gate C starting base;
- ahead/behind counts;
- full donor-only commit chain;
- full changed-path inventory;
- whether structural merge commits or unrelated lineage are present;
- whether an exact semantic transplant is possible without replaying donor history wholesale.

The donor checkpoints are semantic donors, not automatic merge targets.

## Controlling objective vocabulary

~~~text
CURRENT_CANONICAL_OBJECTIVES =
AWARENESS
TRUST
ASSETS
ACTION

LEGACY_REFERENCE_ONLY =
PULSE
PROOF
PRODUCTION
PUSH
~~~

The legacy terms are a convergence and retirement concern, not open Product vocabulary.

Do not map a legacy term to a current term unless immutable Product authority explicitly defines that mapping. Do not silently reinterpret persisted legacy campaigns. Determine the accepted fail-closed, reauthor, display, and compatibility behavior from authority and implementation evidence.

## Required analysis

### 1. Authority and implementation consistency

Build a table for every Campaign Objectives authority object:

| Authority layer | Commit | Tree | Path | Blob | Reachable | Exact match | Controls |
|---|---|---|---|---|---|---|---|

Confirm whether the two donor checkpoints are exactly those accepted by the controlling authority.

Identify any superseded records. Treat them as historical evidence only.

### 2. Baseline preservation

Confirm the Gate B bases preserve:

- Gate A seven-module chain;
- corrected C04 Prisma relation state;
- C06 provider-disabled read-only behavior;
- C05 payout-destination mutation authority;
- C03 creator-campaign application boundary;
- Brand and Creator Homes;
- Settings;
- Collaboration;
- Brand Payout;
- Brand and Product Intelligence;
- Data Extraction and Evidence;
- Creator Centre;
- Creator onboarding and Creator settings;
- Media Kit public/verified boundaries;
- the protected `CampaignDetailWorkspace.tsx` blob before Campaign Objectives work;
- all 106 migrations and the protected migration subtree.

List any baseline behavior that Campaign Objectives necessarily changes. Everything else must remain preserved.

### 3. Semantic donor delta

For every donor-only or overlapping path, classify it as exactly one of:

~~~text
TRANSPLANT_EXACTLY
MERGE_WITH_GATE_B
TEST_ONLY
ALREADY_PRESENT
LEGACY_COMPATIBILITY_REQUIRED
EXCLUDE_PAUSED_REPORTING
EXCLUDE_UNRELATED_LINEAGE
RETIRE_IF_PROVEN_DEAD
PARENT_DECISION_REQUIRED
~~~

Return separate backend and frontend tables containing:

| Donor commit | Path | Semantic purpose | Gate B overlap | Classification | Controlling authority | Required resolution |
|---|---|---|---|---|---|---|

The map must distinguish Campaign Objectives from Campaign Performance/Reporting. A donor path is not authorized merely because it exists in an accepted checkpoint.

### 4. Backend objective boundary

Inspect and map at least:

- campaign create/update/read contracts;
- canonical objective definitions and validation;
- persistence representation;
- API and DTO behavior;
- campaign workspace and brief handoff;
- C03 campaign-application projection/handoff;
- legacy objective detection;
- fail-closed and reauthor behavior;
- Reporting compatibility or guards;
- readiness tests;
- any authorization or tenancy implications;
- any event, audit, or revision behavior;
- any overlap with C04, C06, Settings, Collaboration, or Intelligence.

The accepted backend donor is known to contain objective-handoff and legacy Reporting fail-closed behavior. Determine the minimum authorized semantic subset. Do not resume Reporting.

### 5. Frontend objective boundary

Inspect and map at least:

- create-campaign objective selection;
- campaign draft contracts;
- autosave and hydration;
- create/edit/read-only state;
- campaign workspace and its three workspaces;
- add-product and add-brief flows;
- campaign list/presentation;
- strategy models;
- legacy-objective display and reauthor handling;
- API client contracts;
- route or guard overlap;
- the protected `CampaignDetailWorkspace.tsx` state;
- responsive and accessibility tests associated with changed objective UI.

Determine the minimum semantic delta required to expose only the accepted canonical vocabulary while preserving later Gate B changes.

### 6. Persistence and migration analysis

Determine, without executing migrations or mutating a database:

- how objective values are physically stored;
- whether Prisma uses an enum, string, JSON, relation, or another representation;
- whether migrations 1–106 already support the accepted vocabulary;
- whether either donor contains schema or migration changes;
- whether a migration is genuinely required;
- the exact behavior for already-persisted legacy values;
- whether a compatibility read path or reauthor gate is required;
- whether a clean and populated PostgreSQL proof will be mandatory during implementation.

The working expectation is no new migration, but do not assume it. Return one of:

~~~text
MIGRATION_REQUIREMENT =
NONE_PROVEN
REQUIRED_BY_ACCEPTED_DONOR
PARENT_DECISION_REQUIRED
~~~

If no migration is required, the implementation plan must preserve:

~~~text
MIGRATION_COUNT =
106

MIGRATION_SUBTREE =
3894d6d2009fdbdf6bce94708d955c24cf5804ce
~~~

### 7. Paused and deferred lanes

Prove the proposed path map does not activate or implement:

- Applicant AI Match;
- Campaign Performance/Reporting;
- Marketplace recommendation score;
- provider-enabled C06;
- payout execution;
- Creator Chat;
- deployment.

Legacy Reporting files may be retained only when required to fail closed against canonical objectives or preserve an existing interface. Classify and justify each such path.

### 8. Collision and decision table

Return:

| Area | Collision | Authority source | Mechanical resolution available | Product/architecture reopening required | Proposed resolution |
|---|---|---|---|---|---|

Explicitly cover:

- current versus legacy objective vocabulary;
- existing persisted legacy campaigns;
- backend/frontend contract alignment;
- autosave and hydration;
- C03 application handoff;
- Reporting fail-closed behavior;
- Gate B C06 overlaps;
- corrected Prisma schema;
- migration inventory;
- protected Campaign Detail Workspace;
- route, guard, authorization, and tenancy behavior.

### 9. Exact proposed implementation plan

If unblocked, propose bounded branches:

~~~text
BACKEND_PROPOSED_BRANCH =
reconcile/mvp-canonical-application-v1-gate-c-campaign-objectives-backend

FRONTEND_PROPOSED_BRANCH =
reconcile/mvp-canonical-application-v1-gate-c-campaign-objectives-frontend

AUTHORITY_PROPOSED_BRANCH =
reconcile/mvp-canonical-application-v1-gate-c-campaign-objectives-authority
~~~

Return:

- exact backend starting commit;
- exact frontend starting commit;
- exact ordered semantic steps;
- exact backend path allowlist;
- exact frontend path allowlist;
- exact excluded paths;
- files requiring manual semantic merge;
- expected commit structure;
- protected blob/subtree assertions;
- rollback/circuit-breaker points;
- whether implementation can be executed in one bounded run.

Do not create these branches.

### 10. Exact validation plan

Classify each validation as `AVAILABLE`, `MISSING`, or `REQUIRES_INFRASTRUCTURE`.

At minimum plan:

Backend:

- Prisma generate and validate;
- objective-focused unit/architecture/contract tests;
- C03 handoff tests;
- legacy-objective fail-closed tests;
- Reporting non-resumption assertions;
- C06 focused preservation tests;
- C04/Collaboration preservation tests;
- full backend suite;
- lint and build;
- Campaign readiness;
- Intelligence contract verification;
- migration count/subtree;
- clean PostgreSQL 0→106 if schema/persistence risk requires it;
- populated legacy-objective PostgreSQL fixture if accepted behavior requires it;
- zero provider calls and unauthorized financial writes.

Frontend:

- objective-focused tests;
- create/edit/autosave/hydration tests;
- list/workspace/brief/product flow tests;
- legacy-objective display/reauthor tests;
- C06 route/workspace preservation tests;
- full frontend suite;
- typecheck;
- lint;
- autosave suite;
- production build;
- responsive, keyboard/focus, and accessibility proof.

Integrated browser:

- state whether a coordinated seeded runtime is available now;
- if unavailable, preserve the final whole-application browser deferral;
- do not weaken repository-defined UI tests.

### 11. Effort and prompt journey

Estimate separately:

- local Codex active execution time;
- wall-clock runtime;
- likely longest commands;
- Parent review time;
- number of prompt-response cycles;
- probability of a circuit breaker;
- whether one implementation run is reliable;
- whether a correction gate is likely;
- remaining gates after Campaign Objectives.

Do not include work already spent before this run in the preflight telemetry.

## Circuit breakers

Stop and report without implementation if any occurs:

~~~text
PARENT_AUTHORITY_MISMATCH
CONSOLIDATED_REGISTER_MISMATCH
CAMPAIGN_OBJECTIVE_AUTHORITY_OBJECT_MISSING
DONOR_COMMIT_OR_TREE_MISMATCH
GATE_B_BASE_MOVED
GATE_B_TREE_OR_PARENT_MISMATCH
PROTECTED_SCHEMA_BLOB_MISMATCH
PROTECTED_CAMPAIGN_DETAIL_WORKSPACE_BLOB_MISMATCH
MIGRATION_COUNT_OR_SUBTREE_MISMATCH
PRODUCT_VOCABULARY_AMBIGUITY
LEGACY_VALUE_BEHAVIOR_REQUIRES_NEW_PRODUCT_DECISION
REPORTING_RESUMPTION_REQUIRED
AI_MATCH_OR_MARKETPLACE_SCOPE_REQUIRED
UNBOUNDED_DONOR_HISTORY_REQUIRED
PATH_CLASSIFICATION_INCOMPLETE
UNRESOLVED_C06_OR_C04_COLLISION
UNSAFE_GIT_REFSPEC_REQUIRED
IMPLEMENTATION_OR_PUBLICATION_ATTEMPTED
~~~

A preflight may return `READY_FOR_PARENT_REVIEW_WITH_CORRECTIONS_REQUIRED` when the required corrections are mechanical and fully authority-backed. It must return `BLOCKED_PARENT_DECISION_REQUIRED` when Product or architecture authority is insufficient.

## Required final report

Return this exact header:

~~~text
CANONICAL_RECONCILIATION_GATE_C_CAMPAIGN_OBJECTIVES_PREFLIGHT_RESULT =
READY_FOR_PARENT_REVIEW |
READY_FOR_PARENT_REVIEW_WITH_CORRECTIONS_REQUIRED |
BLOCKED_PARENT_DECISION_REQUIRED |
CIRCUIT_BREAKER
~~~

Then return:

1. telemetry;
2. authority integrity table;
3. Gate B base integrity and preservation result;
4. donor topology table;
5. backend and frontend commit-to-path classification tables;
6. canonical-versus-legacy vocabulary result;
7. persistence and migration result;
8. collision/authority resolution table;
9. exact proposed implementation bases, branches, steps, and allowlists;
10. exact validation plan with availability classification;
11. paused/deferred-lane proof;
12. implementation reliability, effort, and prompt-journey estimate;
13. blockers;
14. `IMPLEMENTATION_CAN_BEGIN = YES | NO`;
15. `PARENT_DECISIONS_REQUIRED_BEFORE_IMPLEMENTATION = YES | NO`;
16. next boundary.

End after the report. Do not implement, publish evidence, create branches, or enter any paused/deferred lane.
