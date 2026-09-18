# Canonical Reconciliation — B11 Fixture and Semantic-Proof Correction with Final-Matrix Resumption V1

## Parent disposition

The B11 circuit breaker has been resolved by read-only authority review.

Result:

`B11_SCENARIO_CRITERION = VALID`

`B11_APPLICATION_CAPABILITY = PRESENT`

`B11_VALIDATION_FIXTURE = INCOMPLETE`

`B11_EXISTING_BODY_ASSERTION = PROVEN_HARNESS_DEFECT`

No Product or application authority revision is required.

### Why B11 redirects

Accepted frontend route guard:

- Path:
  `src/features/creator-onboarding/components/creator-platform-route-guard.tsx`
- Blob:
  `ccde2c286ec25cbdb47091b3d5c5fe6738678fd4`

The guard permits Creator Home/Centre only when:

- authenticated user role is `CREATOR`;
- `GET /api/v1/creator-entry/state` returns
  `canEnterCreatorPlatform = true`.

Accepted backend state authority:

- Path:
  `src/features/creator-entry/creator-entry-state.service.ts`
- Blob:
  `8e78c9773b2ecdc378cd4da7a3c4f2ea6c7e7b75`

`canEnterCreatorPlatform` requires:

- stable provider identity;
- Instagram identity state `CONNECTED`;
- basic authorization capability `AVAILABLE`;
- authorization health `USABLE`;
- canonical active Creator context.

### Exact fixture defect

Accepted backend V2 fixture:

- Path:
  `scripts/canonical-reconciliation/final-gate/seed.ts`
- Blob:
  `0e778739ec2c338df9b7eeeb417542178df6bc82`

The fixture creates the synthetic usable Instagram integration only when:

`scenario === "B08"`

B11 therefore has a canonical Creator owner/workspace but no qualifying Instagram integration and must redirect to onboarding.

B11 explicitly claims Creator platform access. Its fixture must satisfy the already accepted route guard. This is a validation-support correction, not an application change.

### Existing assertion defect

B11 currently uses a generic body assertion:

`/Creator|Payout|Settings|Home/i`

That assertion passed on Creator Onboarding because unrelated shell text contained “Creator.” It does not prove Creator Home, Centre, Settings or Payouts.

The assertion must be replaced with route-specific semantic proofs.

## Scope

This prompt authorizes:

1. a backend validation-fixture correction for B11;
2. a focused backend fixture test;
3. frontend B11 semantic route assertions in the existing final-gate spec;
4. focused B02 and B11 execution at 390 and 1440 px;
5. bounded validation-only self-recovery under the existing resilient envelope;
6. a fresh uninterrupted 30-execution matrix;
7. V3 backend/frontend validation-support publication and final-validation evidence after success.

No production application, Product, architecture, schema, migration, authorization, provider, payout or financial behavior change is authorized.

## Immutable authority

Resolve this exact file on:

`authority/canonical-reconciliation-final-validation-b11-fixture-correction-v1`

Verify its commit, tree, sole parent, path and blob before mutation.

Preceding resilient authority:

- Commit: `1fa4e16ae38a67d3dce447bf74826525d52fd0f6`
- Tree: `bb8662a11fea8b872156f2dd389e599876b4245f`
- Prompt blob: `5254ce48a925c871d8a569e8f4a064c39b66adf4`
- Sole parent: `c3bd413d765122d9cad4d66aa4b5a79ac4db2099`

Application checkpoints:

Backend:

- Commit: `1a99cf3f54df849408c8775b20e78c036ee637c3`
- Tree: `9679ed60f186220716e948779d3d70dbbf89b39a`

Frontend:

- Commit: `edc6ff991a43ce3a93d2bd242d148a6fcbd104dc`
- Tree: `8b8a9c515afb04a69a962e4d786d7f398854ea9c`

V2 support checkpoints:

Backend:

- Commit: `d7f98cc51d9660f227ae367506d103026aad6439`
- Tree: `a9e526d47f53442836def82ae6db9031d3d4cdab`

Frontend:

- Commit: `ca3fd0984f89acd5532a44d707d4aafa173c49dc`
- Tree: `b266070734ece18e0f04b845e9b70409e3828698`

Protected database identities:

- Schema blob: `1d9b3a8bf3145d47d326fae88493f7816eef9140`
- Migration count: `108`
- Migration subtree: `ae9c3e8036461260ad6f0963dffb7d5d9d010139`

Retained frontend normalized candidate:

- Parent: `ca3fd0984f89acd5532a44d707d4aafa173c49dc`
- Changed path:
  `e2e/canonical-reconciliation/final-gate/final-gate.spec.ts`
- Candidate blob:
  `09275544576555e892178a2fd877fb2fbda7bf9d`
- Patch SHA-256:
  `f14bcbe3333f20a42e979a1c9b998a943eef8d05070d84c87a195d4f605dbcb5`

## Phase C0 — integrity and continuity

Before editing:

1. verify all authority, application, support, schema and migration identities;
2. verify the current prompt;
3. verify the retained frontend candidate exactly;
4. verify accepted worktrees are clean;
5. verify these branches are absent:
   - `validate/mvp-canonical-final-gate-fixtures-v3`;
   - `validate/mvp-canonical-final-gate-browser-v3`;
   - `reconcile/mvp-canonical-application-v1-final-validation-authority`;
6. preserve repository-local `core.autocrlf=false`;
7. verify Docker, disk and ports;
8. verify npm lifecycle readiness, including non-empty `npm_execpath`.

Any immutable or candidate mismatch is a mandatory stop.

## Phase C1 — backend fixture correction

Create an isolated backend candidate with parent:

`d7f98cc51d9660f227ae367506d103026aad6439`

Authorized backend changed paths:

1. `scripts/canonical-reconciliation/final-gate/seed.ts`
2. `scripts/canonical-reconciliation/final-gate/final-gate.fixture.test.ts`

No other backend path is authorized.

### Required seed behavior

Create the existing synthetic usable Instagram integration for:

- B08;
- B11.

Do not broaden it to every scenario.

Equivalent intent:

```ts
const requiresConnectedInstagram =
  scenario === "B08" || scenario === "B11";
```

When true, retain the already accepted synthetic integration semantics:

- platform: Instagram;
- stable synthetic native platform ID;
- synthetic encrypted token placeholder;
- token state: active;
- authorization health: usable;
- basic capability: available;
- insights capability: available;
- no live provider credentials;
- no provider call.

B08 behavior must remain unchanged.

Scenarios that intentionally test not-connected or alternate Instagram states must not be silently reinterpreted.

### Required fixture test

Add focused proof that:

- B08 produces a usable connected Creator-entry state;
- B11 produces a usable connected Creator-entry state;
- B11 Owner state returns:
  - account context `CREATOR_READY`;
  - onboarding status `COMPLETE`;
  - `canEnterCreatorPlatform = true`;
  - next action `CREATOR_WORKSPACE_ENTRY`;
- the integration is synthetic/local only;
- provider calls remain zero;
- schema and migrations remain unchanged.

Run backend final-gate focused tests, Prisma generate/validate, targeted lint and secret scan.

## Phase C2 — frontend B11 semantic correction

Continue from the exact retained frontend candidate.

Authorized frontend changed path remains:

`e2e/canonical-reconciliation/final-gate/final-gate.spec.ts`

No second frontend path is authorized unless a proven validation-only defect qualifies under the resilient recovery envelope.

Replace B11’s generic body regex with explicit route semantics.

Required B11 proofs:

### Creator Home

Route:

`/creator/home`

Require:

- final URL remains Creator Home;
- visible semantic heading:
  `Welcome back, Final Gate Creator`;
- onboarding content is absent;
- Creator-access error is absent.

### Creator Centre

Route:

`/creator/centre`

Accepted routing redirects to Creator Home.

Require:

- final URL is `/creator/home`;
- visible semantic heading:
  `Welcome back, Final Gate Creator`;
- onboarding content is absent.

### Creator Settings Account

Route:

`/creator/settings/account`

Require:

- visible semantic heading:
  `Account security`;
- no login redirect;
- Creator-access error absent.

### Creator Payouts

Route:

`/creator/payouts`

Require:

- visible semantic heading:
  `Creator payouts`;
- provider-disabled/read-only boundary preserved;
- no execute, retry or manual-trigger action;
- no login redirect;
- Creator-access error absent.

Do not use:

- generic body assertions;
- broad `Creator|Payout|Settings|Home` alternations;
- `.first()`;
- DOM-order fallback;
- onboarding-shell text as platform proof.

Preserve the normalized B02 route proofs and B01/B03–B10/B12 behavior.

Record final frontend path/blob/patch identities.

## Phase C3 — readiness and adjacent-risk sweep

Apply the resilient recovery requirements from commit:

`1fa4e16ae38a67d3dce447bf74826525d52fd0f6`

Before browser execution:

- prove npm lifecycle/environment readiness;
- run whole-harness selector-risk audit;
- run backend fixture tests;
- run frontend harness tests;
- typecheck;
- targeted lint;
- Playwright discovery;
- secret scans;
- verify 12 scenarios, 30 executions and retries zero.

The same bounded self-recovery envelope remains authorized:

- maximum two localized validation-only correction iterations;
- backend corrections limited to
  `scripts/canonical-reconciliation/final-gate/**`;
- frontend corrections limited to
  `e2e/canonical-reconciliation/final-gate/**`,
  `playwright.final-gate.config.ts`, and
  `vitest.final-gate.config.ts`;
- no application `src`, package manifest, lockfile, schema or migration changes;
- mandatory stop for missing application capability or application/API/authority failure.

After finding one defect, audit adjacent occurrences of the same class before rerunning.

## Phase C4 — focused proof

Provision a fresh disposable PostgreSQL 16 runtime.

Require:

- exactly 108 successful unique migrations;
- deterministic seed;
- six verified identities;
- reset/reseed;
- provider/financial/payout activity zero;
- no live credentials;
- accepted PostgreSQL container untouched.

Run through npm:

- B02 at 390 and 1440;
- B11 at 390 and 1440.

B11 must prove the corrected fixture returns platform access before page navigation.

All four focused executions require:

- expected semantic content;
- no onboarding redirect except where explicitly expected by no scenario here;
- keyboard and Axe proof;
- zero critical Axe, console, page, API, network, provider, financial, unclassified-write and contamination findings.

If a recoverable validation-only failure occurs, use the bounded envelope, rerun all affected focused viewports, and continue automatically.

## Phase C5 — fresh final matrix

After focused success:

1. remove focused runtime and secret-bearing artifacts;
2. reverify candidate fingerprints;
3. provision a separate fresh PostgreSQL runtime;
4. migrate 0→108;
5. seed;
6. generate six sessions;
7. run the complete 30-execution matrix from B01.

Distribution remains:

- B01 2;
- B02 2;
- B03 4;
- B04 2;
- B05 4;
- B06 2;
- B07 2;
- B08 4;
- B09 2;
- B10 2;
- B11 2;
- B12 2.

Retries remain zero.

Reset/reseed and audit between every execution.

Final acceptance requires:

- 30 passed;
- zero failed/skipped/timed-out/retried/flaky;
- zero critical Axe;
- zero console/page/API errors;
- zero non-loopback requests;
- zero provider calls;
- zero unauthorized financial writes;
- zero unclassified writes;
- zero contamination.

If a recoverable harness/runner failure occurs and recovery budget remains:

- correct;
- rerun all affected focused viewports;
- destroy the partial runtime;
- restart all 30 from B01.

Application or authority failures stop immediately.

## Phase C6 — support publication

Publish only after one uninterrupted 30/30 run.

### Backend V3

Repository:

`Piyush1087/creator-commerce-backend-v2-clone`

Branch:

`validate/mvp-canonical-final-gate-fixtures-v3`

Requirements:

- sole parent: `d7f98cc51d9660f227ae367506d103026aad6439`;
- only authorized validation-support paths;
- no application source, schema, migration, manifest or lockfile change;
- independent fetch-back exact.

### Frontend V3

Repository:

`Piyush1087/creator-commerce-frontend-v2-clone`

Branch:

`validate/mvp-canonical-final-gate-browser-v3`

Requirements:

- sole parent: `ca3fd0984f89acd5532a44d707d4aafa173c49dc`;
- validation-support paths only;
- no application source, manifest or lockfile change;
- independent fetch-back exact.

Use repository-local Git identity, fail-fast commit/push and no force updates.

## Phase C7 — final evidence

Authority branch:

`reconcile/mvp-canonical-application-v1-final-validation-authority`

Evidence path:

`docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_FINAL_WHOLE_APPLICATION_VALIDATION_EVIDENCE_V1.md`

Requirements:

- sole parent: immutable commit containing this prompt;
- exactly one evidence file;
- independent fetch-back exact.

Record:

- authority chain;
- Parent B11 diagnosis;
- guard/state/fixture blob identities;
- exact backend fixture correction and focused tests;
- exact frontend B11 correction;
- all recovery iterations;
- focused B02/B11 results;
- repository/PostgreSQL continuity;
- fresh migration/fixture/session/reset proof;
- all 30 final executions;
- all zero-audit totals;
- backend/frontend V3 publication identities;
- sanitized artifact-manifest SHA-256;
- cleanup;
- boundaries:
  - `FINAL_WHOLE_APPLICATION_VALIDATION = PASS`
  - `FINAL_WHOLE_APPLICATION_ACCEPTANCE = PARENT_REVIEW_REQUIRED`
  - `FINAL_CANONICAL_CHECKPOINT = NOT_PUBLISHED`
  - `DEPLOYMENT = NONE`
  - `CAMPAIGN_INTELLIGENCE_REMAINS_PAUSED = YES`.

## Cleanup

Remove all disposable databases/containers, processes, listeners, storage states, token-bearing manifests, temporary environments and secret-bearing traces/videos.

Retain only sanitized evidence. Preserve `creator-shop-acceptance-postgres`.

## Circuit breakers

Mandatory stop for:

- immutable/candidate mismatch;
- application `src`, schema, migration, package manifest or lockfile change;
- B11 still lacks platform access after fixture correction;
- application/API/authorization failure;
- Product/architecture ambiguity;
- focused failure outside the recovery envelope;
- exhausted two-iteration recovery budget;
- final matrix application failure;
- secret cleanup or fetch-back failure.

## Explicit exclusions

Do not:

- change production application code;
- weaken the Creator platform guard;
- bypass Creator onboarding in application code;
- mock `creator-entry/state` in B11;
- change Product, architecture, schema or migrations;
- use live Instagram credentials;
- bulk-format backend code;
- publish the final canonical checkpoint;
- deploy, tag, merge or open a PR;
- resume Campaign Intelligence or paused workstreams.

## Required result

Begin with exactly one:

- `CANONICAL_RECONCILIATION_B11_FIXTURE_CORRECTION_AND_FINAL_MATRIX_RESULT = READY_FOR_PARENT_REVIEW`
- `CANONICAL_RECONCILIATION_B11_FIXTURE_CORRECTION_AND_FINAL_MATRIX_RESULT = CIRCUIT_BREAKER`

Include:

- prompt and immutable integrity;
- B11 guard/state/fixture diagnosis;
- backend correction paths/blobs/patch;
- frontend correction paths/blobs/patch;
- recovery iterations;
- focused B02/B11 outcomes;
- migration/fixture/session proof;
- full 30-execution totals and per-scenario/viewports;
- zero-audit totals;
- backend/frontend V3 publication/fetch-back;
- authority evidence publication/fetch-back;
- cleanup;
- blocker;
- `NEXT_BOUNDARY`.

Do not include time or completion telemetry unless explicitly requested.
