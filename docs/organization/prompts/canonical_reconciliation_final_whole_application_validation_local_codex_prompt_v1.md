# Canonical Reconciliation — Final Whole-Application Validation V1

## Purpose

This prompt authorizes the final whole-application validation run over the accepted reconciled application checkpoints and the accepted V2 validation-support checkpoints.

Authorized work:

1. verify all immutable application, validation-support and authority objects;
2. run final repository, migration and PostgreSQL validation;
3. execute the complete 30-execution browser matrix;
4. publish immutable final-validation evidence only if every mandatory gate passes.

Not authorized:

- application or validation-support corrections;
- Product or architecture changes;
- schema or migration changes;
- final canonical checkpoint publication;
- deployment, merge, PR or tag;
- Campaign Intelligence resumption.

The final immutable canonical checkpoint remains a separate Parent boundary after this validation result.

The immutable authority for this prompt is the commit resolving this exact file on:

`authority/canonical-reconciliation-final-whole-application-validation-v1`

Verify its commit, tree, sole parent, path and blob before doing any work.

## Accepted application checkpoints

Backend application:

- Repository: `Piyush1087/creator-commerce-backend-v2-clone`
- Commit: `1a99cf3f54df849408c8775b20e78c036ee637c3`
- Tree: `9679ed60f186220716e948779d3d70dbbf89b39a`

Frontend application:

- Repository: `Piyush1087/creator-commerce-frontend-v2-clone`
- Commit: `edc6ff991a43ce3a93d2bd242d148a6fcbd104dc`
- Tree: `8b8a9c515afb04a69a962e4d786d7f398854ea9c`

The frontend checkpoint includes the accepted Creator actor-contract correction and the accepted B05/B08 corrections.

## Accepted V2 validation-support checkpoints

Backend validation support:

- Branch: `validate/mvp-canonical-final-gate-fixtures-v2`
- Commit: `d7f98cc51d9660f227ae367506d103026aad6439`
- Tree: `a9e526d47f53442836def82ae6db9031d3d4cdab`
- Sole parent: `99df138ef5602709cfd9850e5630606b7889f237`
- V2 patch SHA-256: `3120dc4a6d1b8d772c1746072594cab3035de01d600f2478109f0d172856baf5`

Frontend validation support:

- Branch: `validate/mvp-canonical-final-gate-browser-v2`
- Commit: `ca3fd0984f89acd5532a44d707d4aafa173c49dc`
- Tree: `b266070734ece18e0f04b845e9b70409e3828698`
- Sole parent: `edc6ff991a43ce3a93d2bd242d148a6fcbd104dc`
- Manifest SHA-256: `7e5d3d63978d4e3eb27e6fad397dc0cb2837b599df32a1c0eff9262674c28c95`
- Patch SHA-256: `41f1acf89b85c333a1a0980be60ce7676a8d6826f9551e5aa7baa7f4428e7cb8`
- Lifecycle blob: `fcfd9ce2d78d67809496c35504782eb95b61c8f9`

Representative-matrix authority:

- Repository: `Piyush1087/dummy_tcs`
- Branch: `reconcile/mvp-canonical-application-v1-final-harness-correction-authority`
- Commit: `e1000bcb1f49e4d3c5db551d2975b2762534fe45`
- Tree: `bb2bfa11b6c08ec4dcff94e68936760f4aeba9e8`
- Evidence blob: `c00786f61005cd4cb54c092fd231b7591c9c745c`
- Sole parent: `20fc04a38b33e70f8bfeb2e41ead741544f1d254`

Protected database identities:

- Prisma schema blob: `1d9b3a8bf3145d47d326fae88493f7816eef9140`
- Migration count: `108`
- Migration subtree: `ae9c3e8036461260ad6f0963dffb7d5d9d010139`

## Phase 0 — immutable preflight

Use fresh isolated clones or worktrees.

Before installing dependencies or starting infrastructure:

1. verify every commit, tree, sole-parent relationship, evidence blob, schema blob, migration count and migration subtree above;
2. verify the current prompt authority;
3. independently fetch back the two V2 support branch heads;
4. prove that the backend support commit contains validation-support changes only;
5. prove that the frontend support commit contains only:
   - `.gitignore`;
   - `package.json`;
   - `playwright.final-gate.config.ts`;
   - `vitest.final-gate.config.ts`;
   - `e2e/canonical-reconciliation/final-gate/**`;
6. prove zero application `src`, schema, migration or lockfile changes in either support commit;
7. verify the final evidence target branch is absent remotely:
   `reconcile/mvp-canonical-application-v1-final-validation-authority`;
8. confirm adequate disk capacity and responsive Docker before dependency installation.

Do not modify any accepted commit or support branch.

Any immutable mismatch is a circuit breaker.

## Phase 1 — final repository validation

Run the repository-defined validation commands from the accepted V2 support checkpoints.

### Backend

Required:

- clean dependency installation;
- Prisma generation;
- Prisma validation;
- repository-defined lint;
- production build;
- complete backend test suite;
- Campaign readiness suite;
- Intelligence contract verification against its pinned authority;
- focused final-gate fixture and audit tests;
- C04 PostgreSQL tests;
- C06 PostgreSQL proof;
- Brand Payout PostgreSQL proofs;
- Campaign Objective focused and PostgreSQL proofs;
- secret-pattern scan over tracked support changes and generated sanitized evidence.

The complete suite may retain only pre-existing, explicitly infrastructure-gated skips already accepted in immutable Gate C evidence. No newly failed, newly skipped, focused-final-gate, or browser-required test is allowed.

### Frontend

Required:

- clean dependency installation;
- typecheck;
- repository-defined lint;
- complete frontend test suite;
- Campaign autosave suite;
- production build;
- final-gate manifest/contract tests;
- Playwright discovery;
- secret-pattern scan over tracked support changes and generated sanitized evidence.

Required browser declaration:

- exactly 12 scenario identities;
- exactly 30 physical executions;
- automatic retries: `0`.

### Lint boundary

Use the repository-defined lint scripts as the authoritative gate.

The previously observed exploratory broad-backend Prettier findings in byte-exact validation-support files are advisory only because that broad command is not a declared repository gate. Do not alter accepted support blobs to satisfy an undeclared exploratory formatter command.

A failure of a repository-defined lint command remains a circuit breaker.

## Phase 2 — final PostgreSQL validation

Provision a fresh disposable PostgreSQL 16 runtime on loopback.

Do not use or mutate `creator-shop-acceptance-postgres`.

Required:

1. clean database migration from 0 to 108;
2. exactly 108 successful, uniquely named migration records;
3. zero unfinished or rolled-back migrations;
4. deterministic final-gate seed;
5. six verified synthetic role identities and workspace memberships;
6. accepted fixture states for:
   - four canonical Campaign objectives;
   - one legacy objective;
   - B06 canonical Offering/CampaignAsset/Brief linkage;
   - B08 C03 application/C04 collaboration preconditions;
   - provider-disabled payout states;
   - Creator and Brand role boundaries;
   - Instagram lifecycle projections;
7. reset/reseed proof preserving `_prisma_migrations`;
8. clean-vs-seeded schema identity;
9. provider mapping count remains zero;
10. financial instruction and payout-receipt counts remain zero except explicitly authorized synthetic fixture setup.

Start the accepted backend and frontend only on loopback. Use no live provider credentials.

Generate six browser storage states, verify identity and workspace using the accepted authenticated endpoint, and remove all secret-bearing session material after the run.

## Phase 3 — complete 30-execution browser matrix

Run the complete final-gate Playwright matrix exactly once.

Automatic retries must remain disabled.

Do not rerun failed or timed-out executions to convert them into acceptance. Diagnostics after a failure may be collected only after the acceptance run is classified as a circuit breaker.

Required execution distribution:

| Scenario | Executions |
| --- | ---: |
| B01 | 2 |
| B02 | 2 |
| B03 | 4 |
| B04 | 2 |
| B05 | 4 |
| B06 | 2 |
| B07 | 2 |
| B08 | 4 |
| B09 | 2 |
| B10 | 2 |
| B11 | 2 |
| B12 | 2 |
| **Total** | **30** |

Use the exact scenario/viewport mapping declared by the accepted manifest, covering the required 390, 767, 768 and 1440 px boundaries.

Run sequentially or with the accepted isolation model. Between physical executions:

1. reset the disposable database while preserving migration history;
2. reseed deterministically;
3. regenerate or verify the required role session;
4. verify identity and workspace;
5. execute the scenario;
6. perform the database/provider/financial audit;
7. verify no contamination before continuing.

### Scenario requirements

| Scenario | Mandatory result |
| --- | --- |
| B01 | Public Campaign and verified public Media Kit routes mount; responsive, keyboard and Axe checks pass. |
| B02 | Brand Home, Brand Centre, intelligence and verified Media Kit surfaces resolve for the correct Brand role and workspace. |
| B03 | Supported gatekeeper and Brand Preview transition persist correctly and authenticated navigation succeeds. |
| B04 | Unsupported-industry recovery remains fail closed without provider or non-loopback requests. |
| B05 | Four canonical objective drafts autosave through canonical field PATCHes, reload and subsequent edit; DRAFT hashes remain null. |
| B06 | Canonical Add Product semantics use Offering → CampaignAsset → Brief; no legacy Product write. |
| B07 | Legacy objective remains readable; reachable Reporting fails closed through the canonical mounted API prefix. |
| B08 | Creator application, Brand terminal command and exactly one C04 collaboration pass with UUID idempotency and no recovery shell. |
| B09 | Provider-disabled Creator Payout workspace works for permitted roles with zero provider/financial writes. |
| B10 | Campaign Manager payout denial is non-enumerating and fail closed. |
| B11 | Creator platform surfaces resolve through the corrected actor contract without identity-recovery rendering. |
| B12 | Creator roles and Instagram lifecycle projections enforce their accepted access boundaries without actor rejection. |

Every physical execution must have:

- expected route and identity;
- required state/action assertion;
- keyboard-focus proof;
- responsive assertion at its declared viewport;
- completed Axe scan;
- zero critical Axe violations;
- zero unexpected console errors;
- zero page errors;
- zero unhandled API failures;
- zero non-loopback requests;
- zero provider calls;
- zero unauthorized financial writes;
- zero unclassified database writes;
- zero cross-execution contamination.

Final acceptance requires:

- passed: `30`;
- failed: `0`;
- skipped: `0`;
- timed out: `0`;
- retried: `0`;
- flaky: `0`.

Any deviation is a circuit breaker.

## Phase 4 — post-run integrity and cleanup

After the 30-execution run:

1. reverify all four application/support commits and trees;
2. reverify schema blob, all 108 migrations and migration subtree;
3. prove source worktrees are clean;
4. prove accepted support path/blob manifests are unchanged;
5. create a sanitized assertion manifest and compute its SHA-256;
6. retain only sanitized screenshots/assertion/Axe evidence;
7. remove:
   - browser storage states;
   - session manifests containing identity tokens;
   - temporary environment files;
   - traces or videos containing session data;
   - disposable PostgreSQL container/databases;
   - backend/frontend processes and loopback listeners;
8. verify `creator-shop-acceptance-postgres` remains intact and in its prior state;
9. scan retained evidence for credential-shaped values.

## Phase 5 — final-validation evidence publication

Publish only if all repository, PostgreSQL and 30 browser executions pass.

Authority branch:

`reconcile/mvp-canonical-application-v1-final-validation-authority`

Evidence path:

`docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_FINAL_WHOLE_APPLICATION_VALIDATION_EVIDENCE_V1.md`

Requirements:

- sole parent: the immutable commit containing this prompt;
- exactly one evidence file;
- repository-scoped Git identity;
- no application/support ref changes;
- no tag, PR, merge or deployment.

Evidence must include:

- prompt authority;
- accepted application and V2 support commit/tree/parent identities;
- exact schema and migration identities;
- repository validation results;
- PostgreSQL/migration/fixture/session/reset proof;
- all 30 scenario executions with scenario, viewport, role and result;
- aggregate browser/Axe/API/network/provider/financial/database totals;
- sanitized artifact-manifest SHA-256;
- cleanup proof;
- explicit boundaries:
  - `FINAL_WHOLE_APPLICATION_VALIDATION = PASS`
  - `FINAL_WHOLE_APPLICATION_ACCEPTANCE = PARENT_REVIEW_REQUIRED`
  - `FINAL_CANONICAL_CHECKPOINT = NOT_PUBLISHED`
  - `DEPLOYMENT = NONE`
  - `CAMPAIGN_INTELLIGENCE_REMAINS_PAUSED = YES`

Independently fetch back the evidence branch and verify commit, tree, sole parent, evidence blob and exact one-file scope.

## Circuit breakers

Stop without evidence publication if any of these occurs:

- immutable-object mismatch;
- unexpected branch/ref movement;
- application/support source change;
- schema, migration or lockfile change;
- repository-defined validation failure;
- unauthorized or newly unexplained test skip;
- PostgreSQL, fixture, session or reset failure;
- any browser failure, skip, timeout, retry or flake;
- any non-zero critical Axe, console, page, API, non-loopback, provider, unauthorized-financial, unclassified-write or contamination count;
- secrets cannot be removed or sanitized;
- commit/push/fetch-back mismatch;
- insufficient disk capacity or unhealthy disposable infrastructure.

Do not repair application or validation-support code in this run. Report the exact failing gate and preserve accepted checkpoints.

## Explicit exclusions

Do not:

- edit or publish application code;
- edit or republish V2 validation-support branches;
- change Product, architecture, authorization, schema or migrations;
- change provider, payout or financial behavior;
- run deployment or production infrastructure;
- merge into development/freeze;
- open a PR or create a tag;
- publish the final immutable canonical checkpoint;
- resume Campaign Performance, Applicant AI Match, marketplace recommendation score or Campaign Intelligence.

## Required result

Begin with exactly one:

- `CANONICAL_RECONCILIATION_FINAL_WHOLE_APPLICATION_VALIDATION_RESULT = READY_FOR_PARENT_REVIEW`
- `CANONICAL_RECONCILIATION_FINAL_WHOLE_APPLICATION_VALIDATION_RESULT = CIRCUIT_BREAKER`

Include:

- prompt and immutable integrity;
- repository validation;
- PostgreSQL/migration/fixture/session proof;
- 30-execution totals;
- B01–B12 per-viewport results;
- Axe/browser/API/network/provider/financial/database totals;
- artifact-manifest identity;
- authority evidence commit/tree/blob/fetch-back;
- cleanup;
- blockers;
- `NEXT_BOUNDARY`.

Do not include time or completion telemetry unless the Parent explicitly asks for it.
