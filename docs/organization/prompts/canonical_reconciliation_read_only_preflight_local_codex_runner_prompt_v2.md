# Local Codex Runner Prompt — Canonical Reconciliation Read-Only Preflight Rerun V2

## Role

Act as the bounded read-only preflight worker for the Core Platform, Brand Centre, and Creator Centre canonical reconciliation program.

Your job is to determine whether implementation can begin safely and to produce the exact implementation map. Do not implement reconciliation.

## Rerun context

A prior four-minute preflight stopped at the immutable-authority gate because the superseded V1 consolidated register contained six mistyped Creator Brand pointers. That stop was correct.

The docs-only correction is now published in the controlling V2 register. Its publication reports:

```text
ALL_REGISTER_POINTER_INTEGRITY_RESULT = PASS
UNIQUE_IMMUTABLE_POINTERS_CHECKED = 121
UNIQUE_IMMUTABLE_POINTERS_REACHABLE = 121
DECLARED_COMMIT_TREE_TUPLES = 27 / 27 MATCHED
FINAL_ACCEPTANCE_PATH_BLOB_TUPLES = 7 / 7 MATCHED
MODULE_AUTHORITY_POINTER_REFERENCES = 112 / 112 MATCHED
UNREACHABLE_CONTROLLING_POINTERS = NONE
UNRESOLVED_POINTER_MISMATCHES = NONE
```

Rerun the entire preflight from the beginning. Do not reuse the prior run's incomplete base, migration, topology, collision, sequencing, or effort conclusions because those phases did not execute.

## Mandatory execution telemetry

Record the following from this run itself. Capture `RUN_STARTED_AT_UTC` immediately when beginning work and `RUN_COMPLETED_AT_UTC` immediately before returning the final report.

```text
RUN_STARTED_AT_UTC =
RUN_COMPLETED_AT_UTC =
WALL_CLOCK_SECONDS =
ACTIVE_EXECUTION_SECONDS = <if measurable>
COMMAND_COUNT =
LONGEST_COMMAND =
LONGEST_COMMAND_SECONDS =
WAITING_OR_BLOCKED_SECONDS = <if measurable>
```

Also report elapsed seconds for these phases where measurable:

```text
AUTHORITY_INTEGRITY_SECONDS =
BASE_AND_TOPOLOGY_SECONDS =
MIGRATION_ANALYSIS_SECONDS =
DELTA_AND_COLLISION_ANALYSIS_SECONDS =
VALIDATION_PLAN_SECONDS =
REPORT_PREPARATION_SECONDS =
```

Do not include time before this prompt was submitted. Distinguish active execution from dependency/network waiting. If a field cannot be measured, return `NOT_MEASURABLE`; do not estimate silently.

## Controlling acceptance register

Read and treat this immutable publication as the controlling consolidated register:

- Repository: `Piyush1087/dummy_tcs`
- Commit: `346ae2a5ec58506870036db832223c996311fc29`
- Path: `docs/ai-collaboration/core-platform-centres/CORE_PLATFORM_CENTRES_CONSOLIDATED_ACCEPTANCE_REGISTER_V2.md`
- Blob: `c9e0343794aad4a46e27882b58b98381dd4c9dcf`

Also recover the exact acceptance publications and authority records referenced by that register.

## Repositories

- Authority: `Piyush1087/dummy_tcs`
- Backend: `Piyush1087/creator-commerce-backend-v2-clone`
- Frontend: `Piyush1087/creator-commerce-frontend-v2-clone`

Fetch all refs and tags needed for read-only analysis.

## Non-negotiable stop boundary

This is a read-only preflight.

Do not:

- create or move branches or tags;
- commit, merge, rebase, cherry-pick, revert, reset, push, or open a PR;
- edit tracked source or authority files;
- execute database migrations or mutate any database;
- call providers or production/staging services;
- deploy anything;
- retire legacy code;
- resume Applicant AI Match or Campaign Performance/Reporting;
- reinterpret or reopen accepted Product or architecture decisions merely because Git topology differs.

Disposable local clones/worktrees and commands such as `git fetch`, `git show`, `git diff`, `git merge-base`, `git rev-list`, `git log`, `git ls-tree`, and `git merge-tree` are allowed. Keep tracked worktrees clean. Do not push any local object or ref.

If any required immutable commit, tree, blob, branch, acceptance record, or repository is unavailable, stop and report the exact missing object.

## Known canonical starting candidates

Verify, do not assume:

### Backend freeze

- Branch: `freeze/mvp-canonical-application-v1`
- Expected SHA: `129b291ecbca4a1e79451215a81726000cfb5bff`
- Expected tree: `9fe6585addf8d8ccee9973b9b55cc0312c6e2b0b`

### Frontend freeze

- Branch: `freeze/mvp-canonical-application-v1`
- Expected SHA: `6ea628b09817c4784a248658ddfc0202a13fbb00`
- Expected tree: `7de1702cda439c6f0d77000ee0c0c53f40a76c4d`

The old `development` branches are not presumed to be the reconciliation base. Determine the correct base from authority and topology; do not select a base merely because it is named `development`.

## Seven-module accepted linear chain

Verify every commit/tree and the claimed zero-behind ancestry.

| Module | Backend SHA | Backend tree | Frontend SHA | Frontend tree | Accepted migration count |
|---|---|---|---|---|---:|
| Instagram Intelligence V1 | `fef32afb0fdef52f00c7c22b3d0a85967a68fded` | `7ef6bd705b55ef82836b3f57f06a2832a867e781` | `5866d0ac82f742957f53a8db2144a9a166628b75` | `7c095290ffdef4c84f37382bc594bef536c92a49` | 91 |
| Creator Content V0 corrective | `0fa145ac6a021337929e87b9eb9e0c67ebc82b7e` | `750065a56a4a060c125a9bee7ddc9fb842204e7e` | `7edd26d3cdad0ec84083884b34039952368a1295` | `0cc596ca1ef1d1c4a51857125547de156e487c8b` | 101 |
| Creator Brand V0 | `6206f43c6a13c304c971b810e1dd99a20aaaa11f` | `533f543612b856cfaf3b57769fe0b5541b803c3f` | `c505c0679e39effdd9608e319112591d5ae4c079` | `18dd8ed798aae509baa7d0d51ab8e31d7ac2dbbd` | 102 |
| Commercial Setup + Rate Card | `3504a3cc8f0dc684431b73046f5796f157708f68` | `de4b3ba41d3c6d96645f115a5d780660991a27c3` | `e6e7ae8ea9f5f98f882f52230e4cae163bda1e89` | `c77fd43a13251f3c0ba6733f5070fe49412bba1e` | 104 |
| Creator Audience V1 | `6f000bd9364f48d338ae88cec78dcfed0f4fd522` | `374f02a8181505038fbb0c084ca33de0ad97ae46` | `36d75f4eceded7e9e35aaa280b544164d086ca05` | `eb9c4471a5a7db6228b2f8c4c234834c5671d828` | 104 |
| Creator Portfolio V3 | `aaae1e3062137eda30e13e2fd7bcddbb1b239842` | `458517fa01a50f43f0b1cd8a948767e4f7600d50` | `9631e8b261f02f331dcf84f09dfd61dcc28eea83` | `25a89b63cec1a576ef605076c717a7cc447e5acc` | 105 |
| Creator Media Kit V3 | `da1d19d15198699465040c32ce075b6be1c85faf` | `560e2b90e95c3456ac7eef7ce9351861ab04a576` | `95058a5dd6d4e89e8c65172da4d71cfe63c03018` | `4e0c9906d5de1b6d03bfa74a7b5683c920d67a61` | 106 |

The superseded Creator Content backend `5f7712108886305b40cbcf1c0d89f5ecdc22ab24` / tree `343e03b3c5bd6ee1749259841f622e1f7012cb75` is historical only and must not be selected.

## Accepted carry-forward work outside that chain

Recover exact authority, ancestry, and semantic deltas for all of the following. Do not reaccept them:

### C06 Creator Payouts — provider-disabled MVP

- Accepted backend SHA: `071272891041a0cf187f549c3ed82bba5dcbbb79`
- Accepted backend tree: `dc1c01ec3479fb3f14cb698e1e88aaa56db5ef66`
- Accepted frontend SHA: `7f72252fb5cd31f69da9ea59aa9ff81080ac4896`
- Accepted frontend tree: `c066d0ea3d3ce3842e097d385a657050c38d10e6`
- Final authority SHA: `a9bd40eeacc7a201c8ad46fdd0436212a9d65399`
- C06-owned migrations: 0
- Mandatory invariant: preserve deletion of `src/features/creator-payouts/services/creator-payouts.service.ts`; do not resurrect the legacy service.
- Mandatory invariant: no C06 persistence, provider call, payout execution, financial write, new ledger, or new financial hash.
- Known collision areas: creator-workspace `authorizationVersion`, Creator Payouts route versus payout-settings redirect, creator-settings guard-scope tests, app/collaboration topology, and migration-inventory assertions.

### Brand Home

- Accepted backend checkpoint: `00e1299ec2e97497bc6d81aeda808d6edd3b482a`
- Accepted frontend checkpoint: `1cf2e3bd93425f60fb3d40692320078aea567794`

### Creator Home C02A

- Accepted backend checkpoint: `4e082f67953f0d6b55fa791f2cea03c8aef28119`
- Accepted frontend checkpoint: `29e78397fc66676d0134c45aa0bb6af173fbe12b`
- Recover and verify the exact Parent final acceptance record.

### Campaign canonical-objective implementation

- Accepted backend checkpoint: `3c1c523a178c452023add9745628ecff8a6e5e55`
- Accepted frontend checkpoint: `0662cd6963859d9e46abe53910b174d4826adaa3`
- Current objectives: `AWARENESS`, `TRUST`, `ASSETS`, `ACTION`.
- `PULSE`, `PROOF`, `PRODUCTION`, and `PUSH` are legacy reference only.

Also recover the exact current accepted C03 Application, C04 Collaboration/publishing, Settings, Brand-side, Team/subject-identity, shared Data Extraction/Evidence, and shared Intelligence boundaries that the consolidated register lists as reconciliation inputs. Clearly distinguish implementation checkpoints from documentation-only authority.

## Paused lanes

Applicant AI Match and Campaign Performance/Reporting are not reconciliation donors.

### Applicant AI Match

- Pause authority: `2358578de79a99cef1aae88f9c5059e19c0e9ef5`
- Last accepted P0 authority: `3b62be76a4412f7f657e66291b253bf9918b76f9`
- Accepted implementation: none
- P1–P4: not started / not authorized

### Campaign Performance / Reporting

- Pause authority: `ab31144a40c921af448fb745745d1df122d8211a`
- Last accepted pre-pause authority: `cf1d09bdcc37012e1dc6076caf2db8bb28a7b8b5`
- Accepted implementation: none
- Historical backend `ebe1b4a8faa6dab59fb924b4c42be8f9e3f1e6f2` and frontend `3d04cd9c84585218fcdc0f1412662a165c38400c` are non-resumable historical evidence only.

Do not include either historical implementation in the reconciliation plan. Preserve the later resumption rule:

`MODULE ACCEPTANCE → CANONICAL RECONCILIATION → IMMUTABLE RECONCILED CHECKPOINT → CAMPAIGN INTELLIGENCE DELTA PREFLIGHT → EXPLICIT PARENT RESUMPTION AUTHORIZATION`

## Required analysis

### 1. Integrity and authority recovery

For every listed acceptance and carry-forward item:

- prove the commit exists;
- verify its tree;
- prove the acceptance publication/blob exists where pinned;
- identify its repository and branch only as navigational metadata;
- treat immutable SHAs/trees/blobs as authority, not movable branch tips;
- list any mismatch exactly.

### 2. Exact current baseline recovery

For backend and frontend:

- record the current `freeze/mvp-canonical-application-v1` tip and tree;
- record current `development` tip for context only;
- enumerate other branches that could reasonably claim canonical status;
- recover the active migration inventory on each plausible base;
- determine the only recommended starting base, with evidence;
- do not create the recommended target branch.

### 3. Topology and delta map

Produce:

- merge bases between the recommended canonical base and each accepted donor line;
- ahead/behind counts;
- the seven-module chain’s net semantic delta from its divergence point to Media Kit;
- independent semantic deltas for C06 and Campaign Objectives;
- confirmation of whether Brand Home and Creator Home already exist in the recommended base, are ancestors of a donor line, or require explicit preservation/transplant;
- a commit-to-target-path mapping;
- a file-level overlap matrix.

Do not recommend wholesale replay of structural/lineage commits when the accepted behavior can be reproduced as a smaller semantic delta on the newer canonical topology.

### 4. Migration reconciliation

Establish the actual migration count and ordered inventory on:

- the recommended canonical base;
- the seven-module final backend;
- C06;
- Campaign Objectives;
- any other accepted donor that changes persistence.

Verify:

- no duplicate migration IDs/names;
- no missing historical migration;
- no reordered or rewritten applied migration;
- migration 103 then 104 ordering;
- Portfolio 105 and Media Kit 106 preservation;
- C06 adds zero migrations;
- the expected reconciled inventory and count.

The accepted progression `91 → 101 → 102 → 104 → 104 → 105 → 106` is evidence, not a substitute for inspecting the actual target.

### 5. Collision and authority resolution plan

Classify every overlap as one of:

- `CLEAN_APPLY`
- `TARGET_TOPOLOGY_PRESERVE_DONOR_SEMANTICS`
- `DONOR_AUTHORITY_WINS`
- `TARGET_AUTHORITY_WINS`
- `DOCS_ONLY_ALIGNMENT`
- `PRODUCT_OR_ARCHITECTURE_DECISION_REQUIRED`
- `BLOCKER`

At minimum inspect:

- shared app/module registration;
- routes and navigation;
- auth guards and actor/version semantics;
- Team/workspace/Creator/Brand/organization identity;
- Settings ownership;
- Data Extraction/Evidence identity;
- Intelligence generation/current/transition/CAS;
- C03 Application and C04 Collaboration/publishing ownership;
- provider/account/authorization-generation provenance;
- financial-source reuse and payout boundaries;
- public versus verified-Brand Media Kit projection;
- Campaign objective vocabulary;
- migration inventory and tests.

For each non-clean overlap, give the exact files, competing commits, controlling authority, and proposed resolution.

### 6. Implementation sequencing

Recommend a bounded convergence order that minimizes cross-pollution. Decide whether the seven-module chain should be absorbed as one verified cumulative donor delta or in smaller semantic slices. Keep separate review/evidence gates for C06 and Campaign Objectives even if implementation occurs in one program.

Recommend exact branch names but do not create them.

### 7. Runtime validation plan

Provide the commands and environment prerequisites for the later implementation phase, including:

- clean install/generation requirements;
- backend unit/integration suites;
- frontend unit/component/build suites;
- migration clean-database and populated-database validation;
- PostgreSQL-backed financial-source/C06 validation;
- route/guard/authorization regressions;
- responsive/accessibility checks where applicable;
- a whole-application smoke/regression pass;
- checks proving zero provider calls and zero prohibited C06 writes.

Do not execute migrations against any shared database. If safe, you may inspect package scripts and test manifests now; distinguish `AVAILABLE`, `MISSING`, and `REQUIRES_INFRASTRUCTURE`.

### 8. Effort and prompt journey

Estimate separately:

- human/developer elapsed effort;
- Local Codex runtime effort;
- number of orchestrator/runner prompt-response cycles;
- likely review gates;
- factors that would materially expand the estimate.

Do not count Campaign Intelligence implementation or deployment.

## Required final response

Return a concise but evidence-rich report. Begin with the mandatory execution telemetry block, followed by these exact top-level fields:

```text
RUN_STARTED_AT_UTC =
RUN_COMPLETED_AT_UTC =
WALL_CLOCK_SECONDS =
ACTIVE_EXECUTION_SECONDS =
COMMAND_COUNT =
LONGEST_COMMAND =
LONGEST_COMMAND_SECONDS =
WAITING_OR_BLOCKED_SECONDS =
AUTHORITY_INTEGRITY_SECONDS =
BASE_AND_TOPOLOGY_SECONDS =
MIGRATION_ANALYSIS_SECONDS =
DELTA_AND_COLLISION_ANALYSIS_SECONDS =
VALIDATION_PLAN_SECONDS =
REPORT_PREPARATION_SECONDS =

PREFLIGHT_RESULT =
RECOMMENDED_CANONICAL_BASE_BACKEND =
RECOMMENDED_CANONICAL_BASE_FRONTEND =
EXPECTED_RECONCILED_MIGRATION_COUNT =
IMPLEMENTATION_CAN_BEGIN =
PARENT_DECISIONS_REQUIRED_BEFORE_IMPLEMENTATION =
BLOCKERS =
```

Then include:

1. integrity/mismatch table;
2. baseline and topology table;
3. migration result;
4. commit-to-target-path map;
5. collision/authority resolution table;
6. proposed implementation sequence and branch names;
7. exact validation plan;
8. effort and prompt-journey estimate;
9. explicit exclusions and stop boundary.

Use `IMPLEMENTATION_CAN_BEGIN = YES` only if the preflight has resolved the exact bases, migration inventory, donor deltas, and collision authorities with no unresolved blocker. A result of `PREFLIGHT_READY` is not itself permission to mutate repositories.

End without implementing anything.
