# Local Codex Prompt — Gate A Backend Accepted-Test Regression Read-Only Diagnostic V1

## Role and boundary

Act as a read-only forensic worker for the Core Platform, Brand Centre, and Creator Centre canonical reconciliation.

The Gate A V3 run stopped before any reconciliation branch or evidence publication because the immutable accepted backend target failed 11 checked-in tests. Your task is to determine, with immutable authority and Git history, whether each failure represents:

1. a stale or incorrectly scoped test expectation;
2. a real runtime/architecture/authorization regression;
3. an authority ambiguity requiring a Parent Product or architecture decision; or
4. a mixed case.

This prompt authorizes inspection, clean local dependency installation, test reproduction, Git history/diff analysis, and production of a response only.

It does **not** authorize:

- editing any file;
- creating or moving a branch/tag/ref;
- committing or pushing;
- publishing an evidence document;
- changing tests or runtime code;
- replacing an accepted checkpoint;
- rerunning full Gate A after diagnosis;
- running the populated migration upgrade;
- C06 or Campaign Objective convergence;
- resuming Campaign Performance, Applicant AI Match, or Campaign Intelligence;
- deployment or provider calls.

Do not use a dirty existing worktree. Use a fresh clone, clean worktree, or detached checkout. End at Parent review.

## Controlling repositories and identities

### Authority

```text
REPOSITORY =
Piyush1087/dummy_tcs

CONTROLLING_REGISTER_COMMIT =
346ae2a5ec58506870036db832223c996311fc29

CONTROLLING_REGISTER_TREE =
215528f9b1e077f576ef29e5b61119b08d398107

CONTROLLING_REGISTER_PATH =
docs/ai-collaboration/core-platform-centres/CORE_PLATFORM_CENTRES_CONSOLIDATED_ACCEPTANCE_REGISTER_V2.md

CONTROLLING_REGISTER_BLOB =
c9e0343794aad4a46e27882b58b98381dd4c9dcf
```

Use the register to locate the exact module-level Product, architecture, implementation, acceptance, correction, and closeout authorities. Verify every authority pointer you rely upon.

### Backend

```text
REPOSITORY =
Piyush1087/creator-commerce-backend-v2-clone

FREEZE_SHA =
129b291ecbca4a1e79451215a81726000cfb5bff

FREEZE_TREE =
9fe6585addf8d8ccee9973b9b55cc0312c6e2b0b

ACCEPTED_GATE_A_TARGET_SHA =
da1d19d15198699465040c32ce075b6be1c85faf

ACCEPTED_GATE_A_TARGET_TREE =
560e2b90e95c3456ac7eef7ce9351861ab04a576
```

The target is 66 commits ahead of the freeze and contains 106 migrations. Do not change it.

### Gate A0 fixture — context only

The fixture blocker is closed and is not the subject of this diagnostic:

```text
FIXTURE_COMMIT =
7a70d074eb2f3109b697c953bfa8a722bf69caf4

FIXTURE_TREE =
efaa2f0f635788e862b2c39752802c520c3f3b06

GATE_A0_EVIDENCE_COMMIT =
5826c82606c77383810a0dfdc5757ca4a4ece006
```

Do not rerun Gate A0 or migrations 94→106.

## Failed Gate A V3 result

```text
CANONICAL_RECONCILIATION_GATE_A_RESULT =
CIRCUIT_BREAKER

BLOCKER =
ACCEPTED_TEST_OR_BUILD_REGRESSION

BACKEND_TEST_RESULT =
9 files failed
11 tests failed
313 files passed
7,222 tests passed
93 files skipped
954 tests skipped

REMOTE_MUTATION =
NONE

MAIN_RECONCILIATION_BRANCHES =
NOT_CREATED

SOURCE_WORKTREES =
CLEAN
```

The clean PostgreSQL migration-to-106 path passed. The populated upgrade and later Gate A stages were correctly not run after this circuit breaker.

## Exact failed files and observed mismatches

Inspect these exact target paths and reproduce the failures with focused commands before classifying them.

### A. Shared Intelligence processor registry — five failures

```text
src/features/brand-intelligence/audience-persona.architecture.test.ts
src/features/brand-intelligence/brand-character.architecture.test.ts
src/features/brand-intelligence/brand-differentiation.architecture.test.ts
src/features/brand-intelligence/brand-meaning.architecture.test.ts
src/features/brand-intelligence/visual-style.architecture.test.ts
```

The tests’ pre-chain exact processor inventories omit four processors now present in the accepted target:

```text
creator_audience_v0
creator_audience_v1
creator_brand_suggestions_v0
creator_content_v0
```

Do not assume that adding these four strings to five arrays is the correct fix. Determine whether:

- the runtime registry is intentionally application-global;
- each added processor is an accepted registration from the seven-module chain;
- each processor has the correct owner/subject/object scope;
- Brand processor execution can accidentally invoke or consume Creator processors;
- the tests should assert an exact application-wide registry, a domain-filtered registry, an accepted subset plus exclusions, or a centralized shared expected registry;
- changing the assertions would preserve their original architecture-boundary purpose.

### B. Creator Home migration ownership — one failure

```text
src/features/creator-home/creator-home.architecture.test.ts
```

The test asserts that the entire repository contains exactly 94 migrations while the accepted target contains 106. Its stated purpose is that Creator Home owns no migration or Home persistence.

Determine the correct durable assertion. Evaluate whether it should prove absence of Creator-Home-owned migration identifiers/schema models instead of hard-coding the global repository migration count. Identify the exact migration naming/ownership evidence that supports the recommendation.

### C. Instagram provider/module boundary — one failure

```text
src/features/notifications/notifications-module-wiring.architecture.test.ts
```

The test expects `InstagramProviderClientModule` providers and exports to consist only of OAuth and Graph clients. The accepted target module contains provider-read, image/video acquisition, secure download/transport, temporary-store, decoder, and audio extraction bindings introduced by accepted Instagram Intelligence work.

Do not classify this as stale merely because the inventory expanded. Determine:

- the accepted authority for every added provider/export;
- whether `InstagramProviderClientModule` is intentionally the shared provider/acquisition composition root;
- whether Brand Settings importing this module crosses its narrow lifecycle boundary;
- whether Settings can inject or invoke broader Intelligence/media ports;
- whether the correct remedy is test scoping, a centralized exact inventory, module separation, reduced exports, or another runtime correction;
- whether any provider call or financial/security boundary is weakened.

This area is a cross-module-pollution risk and requires explicit evidence.

### D. C04 Collaboration securement vocabulary — one failure

```text
src/features/collaboration/schemas/provision-collaboration.schema.test.ts
```

The exact enum expectation omits:

```text
AWAITING_BRAND_PAYMENT
AWAITING_CREATOR_CONFIRMATION
PAYMENT_DISPUTED
```

Trace the commit and accepted authority that introduced each value. Determine whether they are accepted C04/Brand Payout/financial-boundary states, whether the test should include them, and whether any state changes C04 ownership or incorrectly activates provider-enabled payout execution.

### E. Creator Settings actor permissions — three failures

```text
src/features/creator-settings/team/creator-workspace-actor.service.test.ts
```

Observed:

```text
OWNER expected 20 non-campaign actions; received 26
MANAGER expected 20 non-campaign actions; received 26
ASSISTANT expected 4 non-campaign actions; received 6
```

Do not simply change the counts.

For every action added after the test’s last accepted expectation:

- identify its exact introducing commit and module owner;
- map it to Product/architecture authorization;
- state which roles are authorized;
- identify read versus mutation authority;
- prove Assistant remains denied from every forbidden mutation/financial/team/owner capability;
- determine whether the test should assert an exact role/action matrix, explicit required and forbidden sets, or another durable contract;
- flag any capability not explicitly authorized.

Include all Creator Audience, Content, Brand, Commercial Setup, Portfolio, Media Kit, Campaign, Settings, payout, and team actions present at the target.

## Mandatory forensic method

### 1. Integrity and reproduction

1. Verify the controlling register tuple and backend freeze/target tuples.
2. Confirm no main reconciliation branch exists.
3. Confirm the target is a descendant of the freeze.
4. Install using the lockfile in a clean target checkout.
5. Reproduce the 11 failures with focused tests.
6. Record exact assertion diffs, test names, source blobs, and relevant runtime/policy/module/schema blobs.
7. Do not edit tests to discover whether they would pass.

### 2. Git-history provenance

For every failing expectation and every observed new runtime value:

- use `git log --follow`, `git blame`, pickaxe searches, and parent/child diffs;
- identify the commit that last changed the test expectation;
- identify the commit(s) that introduced the later runtime values;
- record commit, parent, tree, changed paths, and accepted module lineage;
- state whether runtime and test changed together, runtime changed without the owning test, or a later merge dropped a test correction;
- distinguish structural merge commits from semantic implementation commits.

### 3. Authority mapping

For every proposed correction:

- cite the exact immutable Product/architecture/acceptance record from the controlling register;
- state whether the authority is explicit, necessarily implied by an accepted runtime, or absent;
- do not promote a provisional document or implementation behavior into Product authority;
- do not reopen accepted decisions unless the evidence actually conflicts.

### 4. Boundary analysis

Evaluate the runtime behavior—not only the failing expected arrays/counts.

Required questions:

- Can a Brand flow execute a Creator processor?
- Can a Creator flow execute a Brand processor outside shared authorized infrastructure?
- Can Brand Settings resolve or inject Instagram Intelligence/media acquisition services merely by importing the provider-client module?
- Do broader exports create authority even if no current consumer injects them?
- Do new securement states activate payout execution, or are they provider-disabled workflow vocabulary only?
- Does any Assistant action allow mutation, payout authority, owner/team management, private projection, or cross-tenant access?
- Are Owner and Manager equivalence decisions explicitly accepted for each new module?
- Does any correction weaken a fail-closed test into a presence-only smoke test?

### 5. Correction design

For each failed file, propose the smallest correction that preserves or improves the original invariant.

Classify each required file change as:

```text
TEST_ONLY_EXPECTATION_CORRECTION
TEST_RESCOPING_WITH_STRONGER_INVARIANT
RUNTIME_MODULE_BOUNDARY_CORRECTION
RUNTIME_AUTHORIZATION_CORRECTION
AUTHORITY_DOC_CORRECTION
PARENT_DECISION_REQUIRED
NO_CHANGE_REQUIRED
```

Provide:

- exact target path;
- current assertion and why it fails;
- proposed assertion semantics;
- expected file-change scope;
- tests that must pass;
- new negative tests needed;
- risk if corrected incorrectly.

Do not write the patch.

### 6. Corrective checkpoint strategy

Determine whether one bounded backend corrective checkpoint on top of `da1d19d15198699465040c32ce075b6be1c85faf` is sufficient.

Recommend provisional names only; do not create them:

```text
BACKEND_CORRECTION_BRANCH_PROVISIONAL =
correction/canonical-reconciliation-gate-a-backend-test-regressions-v1

AUTHORITY_CORRECTION_BRANCH_PROVISIONAL =
reconcile/mvp-canonical-application-v1-gate-a-correction-authority
```

State:

- whether frontend correction is required;
- whether migrations/schema changes are required;
- whether runtime code changes are required;
- expected changed files;
- expected new tests;
- exact validation suite;
- how a corrected checkpoint would supersede the prior Gate A backend target for reconciliation use without rewriting it;
- whether Gate A must rerun fully from the beginning afterward.

## Decision rules

Return `DIAGNOSTIC_RESULT = TEST_ONLY_CORRECTION_READY` only if every mismatch is authorized runtime evolution and the proposed corrections preserve strong boundaries without runtime changes or new Product decisions.

Return `DIAGNOSTIC_RESULT = MIXED_CORRECTION_REQUIRED` if any runtime/module/authorization correction is needed but existing authority fully determines it.

Return `DIAGNOSTIC_RESULT = PARENT_DECISION_REQUIRED` if any behavior lacks or conflicts with immutable authority.

Return `DIAGNOSTIC_RESULT = BLOCKED` if required objects or reproduction evidence are unavailable.

Do not infer authority merely because a target was previously labelled accepted.

## Timing

Record:

```text
RUN_STARTED_AT_UTC =
RUN_COMPLETED_AT_UTC =
WALL_CLOCK_SECONDS =
ACTIVE_EXECUTION_SECONDS =
COMMAND_COUNT =
LONGEST_COMMAND =
LONGEST_COMMAND_SECONDS =
DEPENDENCY_INSTALL_SECONDS =
FOCUSED_TEST_REPRODUCTION_SECONDS =
HISTORY_AND_AUTHORITY_ANALYSIS_SECONDS =
WAITING_OR_BLOCKED_SECONDS =
```

Use `NOT_MEASURABLE` rather than guessing.

## Required response

Return:

```text
DIAGNOSTIC_RESULT =
TEST_ONLY_CORRECTION_READY |
MIXED_CORRECTION_REQUIRED |
PARENT_DECISION_REQUIRED |
BLOCKED

IMMUTABLE_INTEGRITY =
FOCUSED_FAILURE_REPRODUCTION =
FAILURES_REPRODUCED =
TEST_ONLY_FILES =
RUNTIME_FILES =
AUTHORITY_FILES =
FRONTEND_CORRECTION_REQUIRED =
MIGRATION_OR_SCHEMA_CHANGE_REQUIRED =
PRODUCT_CHANGE_REQUIRED =
ARCHITECTURE_CHANGE_REQUIRED =
CORRECTIVE_BACKEND_CHECKPOINT_REQUIRED =
FULL_GATE_A_RERUN_REQUIRED = YES

RUN_STARTED_AT_UTC =
RUN_COMPLETED_AT_UTC =
WALL_CLOCK_SECONDS =
ACTIVE_EXECUTION_SECONDS =
COMMAND_COUNT =
LONGEST_COMMAND =
LONGEST_COMMAND_SECONDS =
DEPENDENCY_INSTALL_SECONDS =
FOCUSED_TEST_REPRODUCTION_SECONDS =
HISTORY_AND_AUTHORITY_ANALYSIS_SECONDS =
WAITING_OR_BLOCKED_SECONDS =

PROCESSOR_REGISTRY_CLASSIFICATION =
CREATOR_HOME_MIGRATION_TEST_CLASSIFICATION =
INSTAGRAM_PROVIDER_MODULE_CLASSIFICATION =
COLLABORATION_ENUM_CLASSIFICATION =
CREATOR_PERMISSION_CLASSIFICATION =

PROVISIONAL_BACKEND_CORRECTION_BRANCH =
PROVISIONAL_AUTHORITY_CORRECTION_BRANCH =
EXPECTED_CHANGED_FILES =
EXPECTED_NEW_OR_STRENGTHENED_TESTS =
BLOCKERS =
NEXT_BOUNDARY = PARENT_REVIEW_ONLY
```

Also include:

1. an 11-failure classification table;
2. commit/test/runtime provenance table;
3. immutable authority mapping table;
4. processor registry boundary analysis;
5. Instagram module import/provider/export/consumer graph;
6. exact Creator role/action authorization matrix;
7. correction file plan;
8. required negative-test plan;
9. corrective checkpoint and complete validation plan;
10. explicit confirmation that no repository mutation occurred.

End after the diagnostic. Do not implement the correction.
