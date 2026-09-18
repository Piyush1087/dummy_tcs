# Canonical Reconciliation — Resilient Final-Matrix Recovery V2

## Supersession

This prompt supersedes the unexecuted prompt:

- Commit: `c3bd413d765122d9cad4d66aa4b5a79ac4db2099`
- Disposition: `SUPERSEDED_BEFORE_EXECUTION`

Do not execute the V1 prompt.

This V2 prompt retains the exact npm-invocation correction, but adds:

- a complete command/lifecycle readiness sweep;
- a whole-harness selector-risk audit;
- bounded validation-only self-recovery;
- direct continuation after localized recovery;
- explicit separation between harness/runner defects and application failures.

The purpose is to avoid unnecessary Parent round trips while preserving all application, Product, architecture, schema, migration, provider, payout and financial boundaries.

## Immutable authority

Resolve this exact file on:

`authority/canonical-reconciliation-final-validation-resilient-recovery-v2`

Verify its commit, tree, sole parent, path and blob before work.

Authority chain:

### Superseded V1 recovery prompt

- Commit: `c3bd413d765122d9cad4d66aa4b5a79ac4db2099`
- Sole parent: `873c92addfa59e67e8f1585e88cdc88826d4b7c2`

### B02 route-normalization authority

- Commit: `873c92addfa59e67e8f1585e88cdc88826d4b7c2`
- Tree: `467f7bbbe6f7eedc88b29e07f518b0a6e5a1b6ba`
- Prompt blob: `96a4dec5c8598b534999d86a18984463ef063696`

### Accepted application checkpoints

Backend:

- Commit: `1a99cf3f54df849408c8775b20e78c036ee637c3`
- Tree: `9679ed60f186220716e948779d3d70dbbf89b39a`

Frontend:

- Commit: `edc6ff991a43ce3a93d2bd242d148a6fcbd104dc`
- Tree: `8b8a9c515afb04a69a962e4d786d7f398854ea9c`

### Accepted validation-support checkpoints

Backend V2:

- Commit: `d7f98cc51d9660f227ae367506d103026aad6439`
- Tree: `a9e526d47f53442836def82ae6db9031d3d4cdab`

Frontend V2:

- Commit: `ca3fd0984f89acd5532a44d707d4aafa173c49dc`
- Tree: `b266070734ece18e0f04b845e9b70409e3828698`
- Sole parent: `edc6ff991a43ce3a93d2bd242d148a6fcbd104dc`

### Protected database identities

- Schema blob: `1d9b3a8bf3145d47d326fae88493f7816eef9140`
- Migration count: `108`
- Migration subtree: `ae9c3e8036461260ad6f0963dffb7d5d9d010139`

## Retained normalized candidate

The retained local V3 candidate must initially match:

- Parent: `ca3fd0984f89acd5532a44d707d4aafa173c49dc`
- Changed path:
  `e2e/canonical-reconciliation/final-gate/final-gate.spec.ts`
- Original V2 blob:
  `b605206de1e5f365165cf3c7fa37f10a129b3fc9`
- Normalized candidate blob:
  `09275544576555e892178a2fd877fb2fbda7bf9d`
- Patch SHA-256:
  `f14bcbe3333f20a42e979a1c9b998a943eef8d05070d84c87a195d4f605dbcb5`

The four B02 route proofs must use exact semantic locators:

- Brand Dashboard: heading `Brand Home`;
- Brand Centre: heading `Final Gate Verified Brand`;
- Offerings: heading `Final Gate Unlinked Product`;
- Media Kit: heading `Final Gate Creator`.

They must contain no `.first()`, generic navigation-label fallback, broad alternation, or DOM-order dependence.

## Previously accepted validation continuity

The following passed at unchanged immutable checkpoints and may be reused after exact continuity proof:

### Backend

- clean install;
- Prisma generate and validate;
- semantic lint using `npm run lint:eslint`;
- production build;
- full suite: 7,326 passed, 955 accepted infrastructure-gated skips;
- Campaign readiness: 31/31;
- Intelligence contract verification;
- final-gate fixture/hash audit: 5/5;
- C04, C06, Brand Payout and Campaign/C03 PostgreSQL proofs.

Backend lint disposition:

- Prettier-inclusive application/support results: identical 707 formatting-only findings across 109 paths;
- normalized diagnostic SHA-256:
  `8c43e86722e6388d851dbb13b2c4dafdce938ad8964bcda83a69f1da42fb41ae`;
- semantic lint: PASS;
- new backend lint errors: zero.

### Frontend

- typecheck;
- lint;
- full suite: 1,421 passed, one pre-existing conditional skip;
- Campaign autosave: 8/8;
- build;
- harness contract tests: 5/5;
- Playwright discovery: 30 executions, retries zero.

### PostgreSQL

- clean migration 0→108;
- 108 successful unique migrations;
- deterministic fixture;
- six identities;
- reset/reseed;
- C03→C04 and B06 linkage;
- provider-disabled payout states;
- clean/seeded schema identity;
- zero provider/financial/payout activity.

The final browser runtime must still independently repeat migration, fixture, session and reset/reseed readiness.

## Phase R0 — immutable and candidate continuity

Before any execution:

1. verify all authority, application, support, schema and migration identities;
2. verify the current V2 prompt;
3. verify the retained candidate exactly against its parent, path, blob and patch hash;
4. verify application `src`, schema, migrations, package manifests and lockfiles have zero diff;
5. verify both target branches are absent:
   - `validate/mvp-canonical-final-gate-browser-v3`;
   - `reconcile/mvp-canonical-application-v1-final-validation-authority`;
6. use isolated LF-preserving worktrees with repository-local `core.autocrlf=false`;
7. verify clean accepted worktrees;
8. confirm adequate disk space, Docker health and availability of loopback ports.

If immutable or candidate continuity fails, stop. Do not reconstruct a missing candidate without Parent authority.

## Phase R1 — complete command and lifecycle readiness

Do not start browser acceptance until every item passes.

### npm invocation contract

Use npm as the process entrypoint.

Allowed forms:

- an existing `npm run` final-gate script;
- `npm exec -- playwright test --config playwright.final-gate.config.ts ...`.

Prohibited:

- direct invocation of Playwright's Node CLI;
- direct executable invocation outside npm;
- child-process wrappers that remove npm lifecycle variables.

Load the disposable environment into the current process before invoking npm.

From an npm-launched diagnostic process, prove without printing secrets:

- `npm_execpath` exists and is non-empty;
- it resolves to the npm CLI/executable used by the run;
- working directory is the frontend V3 candidate root;
- expected backend/frontend loopback origins are present;
- the disposable database environment is present;
- PATH resolves Node, npm and Playwright consistently;
- lifecycle prepare/reset/audit commands resolve;
- artifact directories are writable;
- no stale process owns the selected ports.

### Playwright contract

Through npm, prove:

- exactly 12 scenario identities;
- exactly 30 declared executions;
- exactly two focused B02 executions can be selected;
- B02 focused viewports are 390 and 1440 px;
- automatic retries = 0;
- lifecycle preparation can be invoked in a non-secret dry-run or bounded readiness mode;
- reset/audit command resolution succeeds before browser launch.

Any readiness failure within runner invocation/environment may be corrected under the self-recovery envelope below without returning to Parent.

## Phase R2 — whole-harness selector-risk audit

Before focused B02, statically inspect the complete final-gate browser harness—not only B02—for patterns that can select hidden shell/navigation content or depend on DOM order.

Audit:

- `.first()`;
- `.last()`;
- broad text regex alternations;
- generic labels such as Home, Centre, Offerings, Settings, Payouts or Reporting;
- unscoped `getByText`;
- duplicate accessible-name matches;
- assertions whose locator can match hidden mobile/desktop shell elements;
- viewport-dependent locators;
- selectors that passed only because of DOM order.

For every flagged locator:

1. identify scenario and viewport coverage;
2. inspect whether it can resolve to hidden or unrelated shell content;
3. classify:
   - `SAFE_AND_SEMANTIC`;
   - `FRAGILE_BUT_NOT_PROVEN_INVALID`;
   - `PROVEN_HARNESS_DEFECT`;
4. record the evidence.

Do not rewrite safe selectors merely for style.

A proven defect may be corrected only under the bounded self-recovery envelope and only within validation-support paths.

## Bounded self-recovery envelope

### Automatically recoverable classes

Codex may diagnose, correct, revalidate and continue without returning to Parent for:

1. `PRE_ASSERTION_RUNNER_FAILURE`
   - npm/environment propagation;
   - process invocation;
   - stale loopback process;
   - disposable container startup;
   - temporary artifact path;
   - non-destructive local validation-worktree bookkeeping.

2. `VALIDATION_HARNESS_OBSERVABILITY_DEFECT`
   - application state is demonstrably present;
   - failure is caused only by selector scope, visibility, DOM order or an incorrect validation-only assertion;
   - correction does not alter the intended Product/application criterion.

3. `VALIDATION_HARNESS_ORCHESTRATION_DEFECT`
   - reset/reseed/audit sequencing;
   - validation-only lifecycle wiring;
   - scenario selection or environment loading;
   - no production behavior change.

### Allowed tracked paths

Self-recovery changes are limited to:

- `e2e/canonical-reconciliation/final-gate/**`;
- `playwright.final-gate.config.ts`;
- `vitest.final-gate.config.ts`.

The final V3 commit may include more than the initially retained spec path only if:

- each additional path fixes a proven defect in an automatically recoverable class;
- application behavior is unchanged;
- every additional path and justification is recorded;
- all affected focused scenarios are rerun at every declared viewport.

Do not change:

- application `src/**`;
- package manifests;
- lockfiles;
- backend files;
- schema or migrations;
- accepted fixture meaning;
- Product or architecture;
- authorization, provider, payout or financial behavior.

### Recovery limit

Maximum:

- two localized correction iterations in this run;
- one combined correction per audited defect class where feasible.

After detecting one defect, inspect every adjacent occurrence of the same class before rerunning.

If two iterations are exhausted, stop for Parent review.

### Mandatory stop classes

Stop immediately for:

- missing application capability;
- application state/action absent;
- backend or frontend API contract failure;
- application authorization failure;
- schema/migration mismatch;
- Product or architecture ambiguity;
- immutable authority mismatch;
- provider or financial boundary violation;
- secret exposure that cannot be sanitized;
- destructive infrastructure requirement.

### Resume behavior

After an allowed correction:

1. fingerprint the new validation-only candidate;
2. run focused unit/contract/typecheck/lint checks;
3. rerun every affected scenario at every declared viewport;
4. if focused validation passes, continue automatically;
5. if a final-matrix run had started, discard the entire partial matrix and restart from B01 with a fresh runtime;
6. never combine results across attempts.

Record all failed attempts and corrections in final evidence.

## Phase R3 — focused readiness matrix

Provision a fresh loopback-only PostgreSQL 16 runtime:

- migrate 0→108;
- verify 108 successful unique migration records;
- seed deterministic fixtures;
- generate six verified synthetic role sessions;
- prove reset/reseed;
- use no live provider credentials;
- leave `creator-shop-acceptance-postgres` untouched.

Run through npm:

1. B02 at 390 px;
2. B02 at 1440 px.

Also run focused executions for any other scenario/viewport affected by an authorized harness correction from Phase R2.

Required for each:

- expected application content/action is present;
- semantic locator reaches visible route content;
- identity/workspace is correct;
- keyboard proof passes;
- Axe completes;
- zero critical Axe violations;
- zero console/page/API failures;
- zero non-loopback requests;
- zero provider calls;
- zero unauthorized financial writes;
- zero unclassified writes;
- zero contamination.

If a failure is within the self-recovery envelope, correct and repeat the complete affected focused set. Otherwise stop.

## Phase R4 — separation before final acceptance run

After all focused validation passes:

1. stop focused application processes;
2. remove focused disposable PostgreSQL;
3. delete focused storage states and secret-bearing artifacts;
4. verify ports are closed;
5. retain only sanitized focused evidence;
6. reverify final candidate fingerprints;
7. provision a separate fresh final runtime.

## Phase R5 — complete 30-execution matrix

Run the entire matrix from B01 through npm.

Distribution:

- B01: 2
- B02: 2
- B03: 4
- B04: 2
- B05: 4
- B06: 2
- B07: 2
- B08: 4
- B09: 2
- B10: 2
- B11: 2
- B12: 2
- Total: 30

Cover the declared 390, 767, 768 and 1440 px viewports.

Retries remain zero.

Reset/reseed and audit between every execution.

Acceptance requires:

- passed = 30;
- failed/skipped/timed-out/retried/flaky = 0;
- critical Axe violations = 0;
- unexpected console errors = 0;
- page errors = 0;
- unhandled API failures = 0;
- non-loopback requests = 0;
- provider calls = 0;
- unauthorized financial writes = 0;
- unclassified database writes = 0;
- cross-execution contamination = 0.

### Failure handling during the final matrix

If failure occurs:

- classify before acting;
- if it is a mandatory-stop application/authority/boundary failure, stop;
- if it is a proven automatically recoverable runner/harness defect:
  1. classify and capture evidence;
  2. apply one bounded correction if iteration budget remains;
  3. rerun affected focused scenarios at all declared viewports;
  4. destroy the partial final runtime;
  5. provision a new runtime;
  6. restart all 30 executions from B01.

Never rerun only the failed test to convert it into final acceptance.

## Phase R6 — V3 support publication

Publish only after one complete uninterrupted 30/30 matrix passes.

Repository:

`Piyush1087/creator-commerce-frontend-v2-clone`

Branch:

`validate/mvp-canonical-final-gate-browser-v3`

Requirements:

- sole parent: `ca3fd0984f89acd5532a44d707d4aafa173c49dc`;
- validation-support paths only;
- every changed path authorized by the envelope and recorded;
- application `src`, manifests and lockfile unchanged;
- repository-scoped Git identity;
- fail-fast commit/push;
- no force update;
- independent fetch-back exact.

Backend support remains:

`d7f98cc51d9660f227ae367506d103026aad6439`

## Phase R7 — final-validation evidence

Authority branch:

`reconcile/mvp-canonical-application-v1-final-validation-authority`

Evidence path:

`docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_FINAL_WHOLE_APPLICATION_VALIDATION_EVIDENCE_V1.md`

Requirements:

- sole parent: the immutable commit containing this V2 prompt;
- exactly one evidence file;
- independent fetch-back exact.

Record:

- full authority chain and V1 supersession;
- candidate continuity and all final path/blob/patch identities;
- command/lifecycle readiness;
- whole-harness selector-risk audit;
- each self-recovery classification, correction and iteration;
- every focused execution;
- accepted repository/PostgreSQL continuity;
- fresh final migration/fixture/session/reset proof;
- all 30 uninterrupted final executions;
- all zero-audit totals;
- V3 publication identities/fetch-back;
- sanitized artifact-manifest SHA-256;
- cleanup;
- boundaries:
  - `FINAL_WHOLE_APPLICATION_VALIDATION = PASS`
  - `FINAL_WHOLE_APPLICATION_ACCEPTANCE = PARENT_REVIEW_REQUIRED`
  - `FINAL_CANONICAL_CHECKPOINT = NOT_PUBLISHED`
  - `DEPLOYMENT = NONE`
  - `CAMPAIGN_INTELLIGENCE_REMAINS_PAUSED = YES`.

## Cleanup

Remove:

- all focused/final disposable containers and databases;
- loopback processes/listeners;
- storage states;
- token-bearing session manifests;
- temporary environment files;
- secret-bearing traces/videos.

Retain only sanitized evidence. Preserve `creator-shop-acceptance-postgres`.

## Explicit exclusions

Do not:

- change application production source;
- change backend support;
- change package manifests or lockfiles;
- change Product, architecture, schema or migrations;
- change authorization, provider, payout or financial behavior;
- bulk-format backend files;
- publish the final canonical checkpoint;
- deploy, tag, merge or open a PR;
- resume Campaign Intelligence or paused campaign workstreams.

## Required result

Begin with exactly one:

- `CANONICAL_RECONCILIATION_RESILIENT_FINAL_MATRIX_V2_RESULT = READY_FOR_PARENT_REVIEW`
- `CANONICAL_RECONCILIATION_RESILIENT_FINAL_MATRIX_V2_RESULT = CIRCUIT_BREAKER`

Include:

- prompt and immutable integrity;
- candidate continuity;
- command/lifecycle readiness;
- whole-harness risk audit;
- recovery iterations and classifications;
- focused scenario results;
- fresh migration/fixture/session proof;
- complete 30-execution totals and per-scenario/viewports;
- zero-audit totals;
- V3 support publication/fetch-back;
- authority evidence publication/fetch-back;
- cleanup;
- remaining blocker;
- `NEXT_BOUNDARY`.

Do not include time or completion telemetry unless the Parent explicitly asks for it.
