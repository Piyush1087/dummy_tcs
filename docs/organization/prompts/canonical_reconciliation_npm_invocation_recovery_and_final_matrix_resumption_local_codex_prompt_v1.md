# Canonical Reconciliation — npm Invocation Recovery and Final-Matrix Resumption V1

## Parent disposition

The preceding focused B02 failure is classified as:

`RUNNER_INVOCATION_ERROR`

It is not:

- an application failure;
- a validation-selector failure;
- a Product or architecture issue;
- a database or fixture failure.

The focused Playwright command was launched directly through Node. That bypassed npm and left `npm_execpath` unset. The accepted scenario lifecycle intentionally requires `npm_execpath`, so both selected executions stopped during `prepareScenario` before browser assertions.

A new focused run is authorized because the prior attempt did not reach application/browser assertions. It must be launched through `npm exec` or an existing `npm run` script so npm supplies its normal lifecycle environment.

The normalized B02 candidate must remain byte-for-byte unchanged.

After the fresh focused run passes at both viewports, proceed directly to a completely fresh 30-execution matrix through npm.

## Immutable authority

Resolve and verify this exact file on:

`authority/canonical-reconciliation-final-validation-npm-invocation-recovery-v1`

Verify its commit, tree, sole parent, path and blob.

Preceding normalization authority:

- Commit: `873c92addfa59e67e8f1585e88cdc88826d4b7c2`
- Tree: `467f7bbbe6f7eedc88b29e07f518b0a6e5a1b6ba`
- Prompt blob: `96a4dec5c8598b534999d86a18984463ef063696`
- Sole parent: `f957bc401b28ba7ba79220bf82a55e0177dba2cf`

Accepted frontend V2 support:

- Commit: `ca3fd0984f89acd5532a44d707d4aafa173c49dc`
- Tree: `b266070734ece18e0f04b845e9b70409e3828698`

Accepted backend V2 support:

- Commit: `d7f98cc51d9660f227ae367506d103026aad6439`
- Tree: `a9e526d47f53442836def82ae6db9031d3d4cdab`

Application checkpoints:

- Backend: `1a99cf3f54df849408c8775b20e78c036ee637c3`
- Frontend: `edc6ff991a43ce3a93d2bd242d148a6fcbd104dc`

Protected database identities:

- Schema blob: `1d9b3a8bf3145d47d326fae88493f7816eef9140`
- Migration count: `108`
- Migration subtree: `ae9c3e8036461260ad6f0963dffb7d5d9d010139`

Retained normalized V3 candidate:

- Parent: `ca3fd0984f89acd5532a44d707d4aafa173c49dc`
- Only changed path:
  `e2e/canonical-reconciliation/final-gate/final-gate.spec.ts`
- Original V2 blob:
  `b605206de1e5f365165cf3c7fa37f10a129b3fc9`
- Final normalized blob:
  `09275544576555e892178a2fd877fb2fbda7bf9d`
- Patch SHA-256:
  `f14bcbe3333f20a42e979a1c9b998a943eef8d05070d84c87a195d4f605dbcb5`

## Phase I0 — continuity and no-mutation proof

Before infrastructure:

1. verify every immutable object above;
2. verify the current prompt;
3. verify the retained V3 candidate exactly matches:
   - parent;
   - one-path scope;
   - final blob;
   - patch hash;
4. verify application `src`, schema, migrations, package manifest and lockfile have zero diff;
5. verify B01 and B03–B12 remain byte-identical;
6. verify both target branches remain absent:
   - `validate/mvp-canonical-final-gate-browser-v3`;
   - `reconcile/mvp-canonical-application-v1-final-validation-authority`.

Do not edit, format, normalize or regenerate the candidate.

Any candidate mismatch is a circuit breaker.

## Phase I1 — npm invocation preflight

Use the existing frontend package manifest and do not add or change scripts.

Existing relevant scripts include:

- `final-gate:list`;
- `final-gate:smoke:public`;
- `final-gate:smoke:authenticated`.

For custom focused/full selections, invoke Playwright through npm:

`npm exec -- playwright test --config playwright.final-gate.config.ts ...`

Do not launch:

- Playwright's Node CLI directly;
- the Playwright executable directly outside npm;
- a child process that strips npm lifecycle variables.

Load the disposable environment into the current process first, then start Playwright through npm.

Before the browser run, prove from an npm-launched process that:

- `npm_execpath` is present and non-empty;
- it resolves to the npm executable/CLI used for the run;
- the lifecycle receives the expected final-gate database and loopback application environment;
- no credential value is printed.

Run Playwright discovery through the npm script or `npm exec` and require:

- 30 declared executions;
- 12 scenario identities;
- retries = 0.

If `npm_execpath` is absent, stop before launching tests.

## Phase I2 — fresh focused B02 run

Provision a new disposable loopback PostgreSQL 16 runtime.

Required:

- apply exactly 108 migrations from zero;
- deterministic fixture seed;
- six verified synthetic identities;
- reset/reseed proof;
- provider mappings = 0;
- financial instructions = 0;
- payout receipts = 0;
- no live provider credentials;
- `creator-shop-acceptance-postgres` untouched.

Start backend and frontend on loopback.

Through `npm exec`, run exactly:

- B02 at 390 px;
- B02 at 1440 px.

Required at both viewports:

- all four normalized route proofs pass;
- exact semantic headings/content are visible;
- no hidden navigation/header label is selected;
- no login redirect;
- keyboard proof passes;
- critical Axe violations = 0;
- console errors = 0;
- page errors = 0;
- unhandled API failures = 0;
- non-loopback requests = 0;
- provider calls = 0;
- unauthorized financial writes = 0;
- unclassified writes = 0;
- contamination = 0.

These are fresh authorized executions, not acceptance reuse of the invocation-failed attempt.

If either fails after reaching browser assertions, stop. No additional harness correction is authorized.

## Phase I3 — clean separation before final matrix

After focused B02 passes:

1. stop focused backend/frontend processes;
2. delete focused sessions and temporary environment files;
3. remove the focused disposable PostgreSQL container/database;
4. verify loopback ports are closed;
5. preserve only sanitized focused assertion/Axe evidence;
6. reverify the V3 candidate blob and patch hash.

Then provision a separate fresh final-matrix runtime.

## Phase I4 — complete fresh 30-execution matrix

Using the npm entrypoint and a new disposable PostgreSQL 16 runtime:

- migrate 0→108;
- seed;
- generate and verify six role sessions;
- prove reset/reseed;
- run the complete matrix from B01.

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

Use the accepted role/viewport mapping covering 390, 767, 768 and 1440 px.

Retries remain zero.

Reset/reseed and audit between every physical execution.

Acceptance requires:

- passed = 30;
- failed/skipped/timed-out/retried/flaky = 0;
- critical Axe violations = 0;
- console/page/API errors = 0;
- non-loopback requests = 0;
- provider calls = 0;
- unauthorized financial writes = 0;
- unclassified database writes = 0;
- cross-execution contamination = 0.

Do not reuse any partial prior matrix. Do not rerun a failed execution to convert it into acceptance.

The repository/PostgreSQL validation results and backend-lint disposition from the preceding authorities may be reused after immutable continuity proof. The fresh matrix runtime must independently prove 108 migrations and fixture/session/reset readiness.

## Phase I5 — V3 support publication

Only after focused B02 and the complete matrix pass:

Repository:

`Piyush1087/creator-commerce-frontend-v2-clone`

Branch:

`validate/mvp-canonical-final-gate-browser-v3`

Requirements:

- sole parent: `ca3fd0984f89acd5532a44d707d4aafa173c49dc`;
- exactly one changed path:
  `e2e/canonical-reconciliation/final-gate/final-gate.spec.ts`;
- final blob:
  `09275544576555e892178a2fd877fb2fbda7bf9d`;
- no application or lockfile change;
- repository-scoped Git identity;
- fail-fast commit/push;
- no force update;
- independent fetch-back exact.

Backend support remains unchanged.

## Phase I6 — final-validation evidence

Authority branch:

`reconcile/mvp-canonical-application-v1-final-validation-authority`

Evidence path:

`docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_FINAL_WHOLE_APPLICATION_VALIDATION_EVIDENCE_V1.md`

Requirements:

- sole parent: the immutable commit containing this prompt;
- exactly one evidence file;
- independent fetch-back exact.

Record:

- full authority chain;
- invocation-error diagnosis;
- proof `npm_execpath` was present without exposing its sensitive environment;
- normalized B02 selector candidate identities;
- focused B02 results;
- fresh final runtime migration/fixture/session/reset proof;
- all 30 final executions;
- all zero-audit totals;
- accepted backend lint disposition;
- reused repository validation continuity;
- V3 support commit/tree/parent/blob/fetch-back;
- sanitized artifact-manifest SHA-256;
- cleanup;
- boundaries:
  - `FINAL_WHOLE_APPLICATION_VALIDATION = PASS`
  - `FINAL_WHOLE_APPLICATION_ACCEPTANCE = PARENT_REVIEW_REQUIRED`
  - `FINAL_CANONICAL_CHECKPOINT = NOT_PUBLISHED`
  - `DEPLOYMENT = NONE`
  - `CAMPAIGN_INTELLIGENCE_REMAINS_PAUSED = YES`.

## Cleanup

Remove all disposable databases/containers, loopback services, storage states, token-bearing session manifests, temporary environment files and secret-bearing traces/videos.

Preserve only sanitized evidence. Leave `creator-shop-acceptance-postgres` unchanged.

## Circuit breakers

Stop without publication for:

- immutable/candidate mismatch;
- any source edit;
- missing `npm_execpath` in the npm-launched preflight;
- focused B02 browser assertion failure;
- migration/fixture/session/reset failure;
- any final matrix failure, skip, timeout, retry or flake;
- any non-zero browser/Axe/API/network/provider/financial/unclassified-write/contamination total;
- cleanup failure;
- push/fetch-back mismatch.

## Explicit exclusions

Do not:

- make another selector or application correction;
- change package scripts, dependencies or lockfiles;
- change application source;
- change Product, architecture, schema or migrations;
- bulk-format backend files;
- publish the final canonical checkpoint;
- deploy, tag, merge or open a PR;
- resume Campaign Intelligence or paused workstreams.

## Required result

Begin with exactly one:

- `CANONICAL_RECONCILIATION_NPM_INVOCATION_RECOVERY_AND_FINAL_MATRIX_RESULT = READY_FOR_PARENT_REVIEW`
- `CANONICAL_RECONCILIATION_NPM_INVOCATION_RECOVERY_AND_FINAL_MATRIX_RESULT = CIRCUIT_BREAKER`

Include:

- prompt/immutable integrity;
- candidate continuity;
- npm invocation proof;
- focused B02 outcomes;
- fresh migration/fixture/session proof;
- 30-execution totals and per-scenario/viewports;
- zero-audit totals;
- V3 publication/fetch-back;
- authority evidence publication/fetch-back;
- cleanup;
- blocker;
- `NEXT_BOUNDARY`.

Do not include time or completion telemetry unless the Parent explicitly asks for it.
