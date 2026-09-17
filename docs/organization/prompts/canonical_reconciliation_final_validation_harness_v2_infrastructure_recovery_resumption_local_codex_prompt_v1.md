# Canonical Reconciliation — Final Validation Harness V2 Infrastructure Recovery and Representative-Run Resumption V1

`CANONICAL_RECONCILIATION_FINAL_VALIDATION_HARNESS_V2_INFRASTRUCTURE_RECOVERY_RESUMPTION_V1`

## Purpose

Resume the already reconstructed validation-only V2 candidates after host capacity and Docker health are restored.

This is not authorization to alter Product decisions, application runtime code, Prisma schema, migrations, lockfiles, provider behavior, financial behavior, or accepted application checkpoints.

## Controlling checkpoints

Authority repository:

- Creator actor correction Parent acceptance: `8fea4c9821f7a52e1b7cf144b144a63927f0d333`
- Corrected V2 resumption prompt: `71cc8822255163c1bc3ae97cba601185abfbdfa2`

Application checkpoints:

- Backend application: `1a99cf3f54df849408c8775b20e78c036ee637c3`
- Corrected frontend application: `cb1a83465272d6b0d75fc88c11d8acb89a5e91b0`
- Corrected frontend tree: `876ec5308695a3755001783219bca85b321e6e99`

Validation-support sources:

- Backend V1 support: `99df138ef5602709cfd9850e5630606b7889f237`
- Frontend V1 source only: `8f600d955b27f55d011adbc5513888b763674509`

The frontend V1 support commit remains source material only. It must not become the parent of the corrected frontend V2 branch.

## Retained-candidate continuity

Before mutation or runtime execution, verify the retained V2 candidate state:

- Backend retained patch SHA-256: `f756503e8f4203491f213c245a5104e467055bc2`
- Frontend retained tracked patch SHA-256: `80d2e4193d50d98453a07101412880ee6ff86e9e`
- Frontend lifecycle blob: `fcfd9ce2d78d67809496c35504782eb95b61c8f9`

Also verify:

- corrected frontend contract blob `93b079821e8f8b63402e970c78ac6324c5d2407f`;
- corrected frontend test blob `7f17ad4dcef18be1ec81257e24fb70503489902b`;
- unchanged mapper blob `d0cc616e7abea62280aa9876377a127641658ae5`;
- schema blob `1d9b3a8bf3145d47d326fae88493f7816eef9140`;
- migration count 108;
- migration subtree `ae9c3e8036461260ad6f0963dffb7d5d9d010139`;
- backend and frontend lockfiles unchanged.

If retained-candidate continuity fails, stop. Do not reconstruct from memory or silently replace the candidate.

## Phase 0 — host preconditions

Perform read-only checks first.

Require all of the following:

1. The Windows system drive has at least 8 GiB free.
2. Docker Desktop is responsive to bounded `docker version` and `docker info` probes.
3. No Docker factory reset was performed.
4. The pre-existing `creator-shop-acceptance-postgres` container and its persistent state remain untouched.
5. Any stale disposable `canonical-final-gate-*` container is identified before removal and is confirmed to belong only to this reconciliation.
6. The retained backend and frontend candidate worktrees are available and unchanged.
7. Target remote branches remain absent:
   - `validate/mvp-canonical-final-gate-fixtures-v2`
   - `validate/mvp-canonical-final-gate-browser-v2`
   - `reconcile/mvp-canonical-application-v1-final-harness-correction-authority`

This prompt does not authorize broad disk cleanup, Docker factory reset, deletion of Docker volumes, removal of Git repositories/worktrees, deletion of retained candidates, or mutation of the pre-existing acceptance database.

If the host preconditions fail, stop with exact disk capacity, Docker error, container state, and the smallest operator action still required.

## Authorized execution

When Phase 0 passes:

1. Reverify the previously completed static gates:
   - backend focused fixture tests;
   - frontend focused manifest tests;
   - frontend typecheck;
   - targeted lint;
   - Prisma generate and validate;
   - Playwright list: exactly 12 identities and 30 declared executions;
   - secret-pattern scan.

2. Provision a new disposable PostgreSQL 16 runtime.

3. Apply exactly 108 migrations and verify migration history.

4. Execute deterministic fixture seed, manifest verification, reset/reseed isolation, and six role-session generation.

5. Run the 12 representative scenarios once each with retries disabled.

Required scenario corrections already present in the retained candidate must remain:

- B03: corrected locator.
- B04: deterministic media sanitization with no remote decorative-image request.
- B05: request-based autosave synchronization.
- B06: canonical CampaignAsset/Offering/Brief path, local-asset interception and exact database audit; zero legacy Product write.
- B07: legacy browser state plus authenticated canonical Reporting API at `/api/v1/brand-uce`, fail closed before writes.
- B08, B11 and B12: corrected Creator actor contract; assert real READY state and absence of the recovery shell.
- B09: corrected local-asset interception.

6. For every completed scenario, collect:
   - pass/fail/timeout status;
   - critical Axe violations;
   - console errors;
   - page errors;
   - unexpected API failures;
   - non-loopback requests;
   - provider-call audit;
   - prohibited or unclassified financial/database writes;
   - cross-scenario contamination.

Do not mask failures, add retries, weaken assertions, or reinterpret application behavior.

## Circuit-breaker policy

Classify each failure as one of:

- `VALIDATION_HARNESS_DEFECT`
- `APPLICATION_CAPABILITY_GAP`
- `ACCEPTED_APPLICATION_REGRESSION`
- `RUNTIME_INFRASTRUCTURE_BLOCKER`
- `UNDEFINED_PRODUCT_OR_AUTHORITY_STATE`

A validation-only defect may be corrected only within the existing allowlist and must be followed by rerunning the affected representative scenario and all relevant focused checks.

Any application-source, schema, migration, lockfile, Product, architecture, provider, financial or authority change is prohibited. Stop for Parent review.

## Publication gate

Publish only if:

- host and immutable integrity pass;
- all focused/static gates pass;
- all 12 representative scenarios pass;
- zero scenario is skipped, retried, flaky or timed out;
- zero critical Axe violation remains;
- loopback, provider, financial-write and contamination audits pass;
- no prohibited path changed.

Then publish:

### Backend

- Branch: `validate/mvp-canonical-final-gate-fixtures-v2`
- Parent: `99df138ef5602709cfd9850e5630606b7889f237`
- Scope: validation-only retained V2 backend paths.

### Frontend

- Branch: `validate/mvp-canonical-final-gate-browser-v2`
- Parent: `cb1a83465272d6b0d75fc88c11d8acb89a5e91b0`
- Scope: reconstructed validation-only overlay only.

### Authority

- Branch: `reconcile/mvp-canonical-application-v1-final-harness-correction-authority`
- Parent: `8fea4c9821f7a52e1b7cf144b144a63927f0d333`
- Evidence path:
  `docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_FINAL_VALIDATION_HARNESS_CORRECTION_EVIDENCE_V1.md`

Fetch back each publication through isolated verification refs and verify commit, tree, parent, path scope and evidence blob.

Do not run the full 30-execution final matrix in this turn. That requires subsequent Parent acceptance of the V2 support evidence.

## Cleanup

Remove only the disposable PostgreSQL runtime and generated secrets/session artifacts created by this run. Stop backend/frontend processes. Preserve failure artifacts after sanitization. Do not touch the pre-existing acceptance container.

## Telemetry

Record:

- run start/end UTC;
- wall-clock seconds;
- measurable active execution;
- command count;
- longest command and duration;
- host-precondition time;
- static-validation time;
- database/fixture time;
- representative-browser time;
- audit time;
- publication time;
- cleanup time;
- blocked/waiting time when measurable.

## Required return

Return:

```text
FINAL_VALIDATION_HARNESS_V2_INFRASTRUCTURE_RECOVERY_RESULT =
  READY_FOR_PARENT_REVIEW | CIRCUIT_BREAKER

HOST_FREE_SPACE_BEFORE =
HOST_FREE_SPACE_AFTER =
DOCKER_HEALTH =
PREEXISTING_ACCEPTANCE_CONTAINER =
IMMUTABLE_AND_CANDIDATE_CONTINUITY =

BACKEND_V2_BRANCH =
BACKEND_V2_COMMIT =
BACKEND_V2_PARENT =
BACKEND_V2_TREE =
BACKEND_V2_FETCH_BACK =

FRONTEND_V2_BRANCH =
FRONTEND_V2_COMMIT =
FRONTEND_V2_PARENT =
FRONTEND_V2_TREE =
FRONTEND_V2_FETCH_BACK =

REPRESENTATIVE_SCENARIOS =
REPRESENTATIVE_EXECUTIONS =
REPRESENTATIVE_PASSED =
REPRESENTATIVE_FAILED =
REPRESENTATIVE_SKIPPED =
REPRESENTATIVE_TIMED_OUT =
REPRESENTATIVE_RETRIED_OR_FLAKY =

B01 =
B02 =
B03 =
B04 =
B05 =
B06 =
B07 =
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

APPLICATION_SOURCE_CHANGE =
SCHEMA_CHANGE =
MIGRATION_CHANGE =
LOCKFILE_CHANGE =
PRODUCT_CHANGE =
ARCHITECTURE_CHANGE =
CAMPAIGN_INTELLIGENCE_REMAINS_PAUSED = YES

SOURCE_WORKTREES_CLEAN =
DISPOSABLE_INFRASTRUCTURE_REMOVED =
BLOCKERS =
NEXT_BOUNDARY =
PARENT_REVIEW_ONLY = YES
```

This is V2 support validation and publication only. It does not authorize the final 30-execution matrix, final canonical checkpoint, deployment, Applicant AI Match resumption or Campaign Performance resumption.
