# Canonical Reconciliation — B05 Autosave and B08 Idempotency Application Correction V1

`CANONICAL_RECONCILIATION_FINAL_GATE_B05_B08_APPLICATION_CORRECTION_V1`

## Purpose

Correct two frontend application regressions discovered by the final validation harness:

1. B05: the accepted Create Campaign wizard changes local state but emits no canonical field PATCH.
2. B08: Brand approval of a canonical Creator application omits the backend-required idempotency key and fails with HTTP 400.

This is a narrowly bounded frontend correction.

It is not authorization to change Product behavior, backend requirements, schema, migrations, provider behavior, financial behavior, validation expectations or Campaign Intelligence.

## Controlling evidence

Final V2 representative result:

```text
B01 = PASS
B02 = PASS
B03 = PASS_AFTER_VALIDATION_HARNESS_CORRECTION
B04 = PASS
B05 = FAIL — ACCEPTED_APPLICATION_REGRESSION
B06 = PASS_AFTER_VALIDATION_HARNESS_CORRECTION
B07 = PASS
B08 = FAIL — ACCEPTED_APPLICATION_REGRESSION
B09 = PASS
B10 = PASS
B11 = PASS
B12 = PASS_AFTER_VALIDATION_HARNESS_CORRECTION
```

B05 evidence:

- draft creation succeeds;
- the UI visibly changes Campaign name/objective;
- no `/canonical-drafts/:id/field` PATCH is emitted;
- relevant accepted source includes:
  - `src/features/uce/components/CreateCampaignWizard.tsx`
  - `src/features/uce/autosave/canonical-campaign-autosave-controller.ts`
  - `src/features/uce/api/canonical-campaign-draft-client.ts`

B08 evidence:

- canonical Creator application submission succeeds;
- Brand approval sends no idempotency header;
- backend returns HTTP 400 before collaboration provisioning;
- relevant accepted source includes:
  - frontend `src/features/uce/api/brand-uce-client.ts`;
  - backend `src/features/campaign-applications/application-terminal.service.ts`;
  - backend terminal controller contract requiring `idempotency-key`.

The backend's fail-closed idempotency requirement is accepted and must not be weakened.

## Immutable bases

Frontend correction base:

- Commit: `cb1a83465272d6b0d75fc88c11d8acb89a5e91b0`
- Tree: `876ec5308695a3755001783219bca85b321e6e99`

Backend validation-only base:

- Commit: `1a99cf3f54df849408c8775b20e78c036ee637c3`
- Tree: `9679ed60f186220716e948779d3d70dbbf89b39a`

Creator actor correction authority:

- Parent acceptance: `8fea4c9821f7a52e1b7cf144b144a63927f0d333`
- Corrected frontend actor-contract blob:
  `93b079821e8f8b63402e970c78ac6324c5d2407f`
- Corrected actor-context test blob:
  `7f17ad4dcef18be1ec81257e24fb70503489902b`
- Unchanged fail-closed mapper blob:
  `d0cc616e7abea62280aa9876377a127641658ae5`

Protected backend state:

- schema blob `1d9b3a8bf3145d47d326fae88493f7816eef9140`;
- migration count 108;
- migration subtree `ae9c3e8036461260ad6f0963dffb7d5d9d010139`.

Verify all immutable identities before editing.

## Accepted B05 behavior

The canonical Create Campaign draft flow must:

1. create or hydrate the canonical draft;
2. persist a valid Campaign name change through:
   `PATCH /api/v1/brand-uce/campaigns/canonical-drafts/:id/field`;
3. persist an objective selection through the same canonical field endpoint;
4. debounce typed fields according to the accepted autosave contract;
5. save selection fields immediately;
6. coalesce rapid edits to the latest value;
7. never let an older response overwrite a newer local revision;
8. preserve retryable failure presentation and explicit retry;
9. flush pending fields before step navigation or publication;
10. avoid duplicate PATCH requests for the same accepted value;
11. remain functional under the application's actual React lifecycle, including development StrictMode behavior if enabled;
12. never fall back to the retired full-step loop.

The correction must prove the root cause before editing. Specifically inspect controller construction, effect cleanup/disposal, initialization batching, closure state, schedule eligibility and the field-validation path.

Do not solve this by loosening validation, removing debounce, issuing full-draft writes, duplicating PATCH requests on blur, or bypassing the canonical autosave controller.

## Accepted B08 behavior

Brand terminal decisions for canonical Creator applications must:

1. include a non-empty idempotency key in the backend-required request header;
2. generate the key at a deterministic logical command boundary;
3. reuse one key for the single request attempt representing that logical command;
4. prevent accidental duplicate collaboration provisioning;
5. preserve authenticated fetch behavior;
6. preserve authorization and tenant isolation;
7. keep backend fail-closed behavior unchanged;
8. provision exactly one canonical collaboration after successful approval;
9. provision no collaboration after a rejected/invalid command.

Both approval and rejection use the same backend terminal-command idempotency contract. Correct both frontend calls if both currently omit the header.

Prefer an existing project idempotency-key helper or established request pattern if one exists. Do not invent a parallel command protocol.

## Authorized source scope

Frontend production changes are limited to the minimum necessary subset of:

- `src/features/uce/components/CreateCampaignWizard.tsx`
- `src/features/uce/autosave/canonical-campaign-autosave-controller.ts`
- `src/features/uce/api/brand-uce-client.ts`
- the exact existing B05 autosave/wizard tests;
- the exact existing B08 Brand application client/component tests;
- at most one new narrowly named B05 focused test file if no suitable test exists;
- at most one new narrowly named B08 focused test file if no suitable test exists.

If a production call-site file outside this list must change to establish correct idempotency-command lifetime, stop and report the exact path and reason before expanding scope.

No backend source change is authorized.

No validation-harness source change is authorized in this turn.

## Prohibited changes

Do not change:

- backend source;
- Prisma schema;
- any migration;
- package or lock files;
- Campaign objective semantics;
- Campaign readiness or KPI semantics;
- C03/C04 workflow semantics;
- role or authorization policy;
- collaboration provisioning rules;
- provider or financial behavior;
- reporting behavior;
- Creator actor contract;
- application routes;
- V2 harness assertions;
- paused Campaign Intelligence lanes.

Do not weaken or delete tests to obtain a pass.

## Required implementation sequence

### Phase 0 — integrity and reproduction

1. Fetch through direct repository URLs or isolated verification refs.
2. Verify exact frontend and backend bases and protected blobs.
3. Verify the correction target branch is absent remotely.
4. Create a fresh frontend worktree from the exact correction base.
5. Reproduce B05 and B08 with the smallest deterministic diagnostics.
6. Record the proven root cause for each.

If either failure cannot be reproduced and the prior harness evidence cannot be reconciled, stop without mutation.

### Phase 1 — B05 correction

Implement the smallest lifecycle-safe correction that restores canonical field PATCH behavior.

Add focused proof covering at least:

- canonical draft creation/hydration;
- valid name change emits one debounced field PATCH with the latest value;
- objective selection emits one immediate field PATCH;
- no PATCH before draft readiness;
- no duplicate PATCH on blur;
- pending saves flush before navigation;
- disposal/unmount prevents post-unmount work;
- the actual application lifecycle does not leave the live controller permanently disposed.

### Phase 2 — B08 correction

Implement the smallest frontend correction that supplies the accepted idempotency header for canonical Brand approval and rejection.

Add focused proof covering at least:

- approval includes a non-empty idempotency key;
- rejection includes a non-empty idempotency key;
- the header name is accepted by the backend contract;
- authenticated headers remain present;
- request method, URL and body remain unchanged except for the required command identity;
- one user action issues one terminal command;
- failed approval does not fabricate a collaboration success state.

### Phase 3 — validation

Run:

1. B05 focused tests.
2. Canonical autosave-controller tests.
3. Campaign wizard/readiness tests.
4. B08 focused client/component tests.
5. Creator application and collaboration-relevant frontend tests.
6. Full frontend test suite.
7. Frontend typecheck.
8. Frontend lint.
9. Frontend production build.
10. Secret-pattern scan of the exact diff.
11. Diff/path allowlist verification.

Use the retained V2 validation support only as an uncommitted test overlay to run targeted browser proof for B05 and B08 against disposable PostgreSQL 16 and the unchanged backend base.

Targeted browser proof must establish:

- B05 emits the canonical name/objective PATCH and persists through hydration;
- B08 approval succeeds with the required key and provisions exactly one collaboration;
- provider calls remain zero;
- unauthorized financial writes remain zero;
- no non-loopback request is introduced.

Do not publish V2 support branches and do not run all 12 representative scenarios in this correction turn.

If targeted browser proof requires modifying the validation harness, stop and report the harness defect separately.

## Publication

Publish only if every required correction and validation gate passes.

Frontend correction branch:

`correction/mvp-canonical-final-gate-b05-b08-frontend-v1`

Required parent:

`cb1a83465272d6b0d75fc88c11d8acb89a5e91b0`

The correction must be a direct child unless the evidence explicitly proves why an additional documentation-only child is necessary.

Authority evidence branch:

`reconcile/mvp-canonical-application-v1-final-gate-b05-b08-correction-authority`

Evidence path:

`docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_FINAL_GATE_B05_B08_APPLICATION_CORRECTION_EVIDENCE_V1.md`

The authority evidence commit must have as its sole parent the immutable commit containing this prompt.

Fetch back both branches through isolated verification refs and verify:

- commit;
- tree;
- sole parent;
- exact changed paths;
- exact blobs;
- remote branch head;
- evidence blob.

## Cleanup

Remove disposable PostgreSQL and generated role/session secrets. Stop application processes. Preserve sanitized failure evidence. Do not touch the pre-existing acceptance PostgreSQL container.

## Required return

```text
FINAL_GATE_B05_B08_APPLICATION_CORRECTION_RESULT =
  READY_FOR_PARENT_REVIEW | CIRCUIT_BREAKER

PROMPT_AUTHORITY_INTEGRITY =
FRONTEND_BASE_INTEGRITY =
BACKEND_BASE_INTEGRITY =
PROTECTED_BLOBS_INTEGRITY =

B05_ROOT_CAUSE =
B05_CORRECTION =
B05_CHANGED_PATHS =
B05_FOCUSED_TESTS =
B05_TARGETED_BROWSER =

B08_ROOT_CAUSE =
B08_CORRECTION =
B08_CHANGED_PATHS =
B08_FOCUSED_TESTS =
B08_TARGETED_BROWSER =
B08_APPROVAL_IDEMPOTENCY =
B08_REJECTION_IDEMPOTENCY =
B08_COLLABORATION_PROVISIONING =

FRONTEND_FULL_TESTS =
FRONTEND_TYPECHECK =
FRONTEND_LINT =
FRONTEND_BUILD =
SECRET_SCAN =
DIFF_ALLOWLIST =

FRONTEND_CORRECTION_BRANCH =
FRONTEND_CORRECTION_COMMIT =
FRONTEND_CORRECTION_PARENT =
FRONTEND_CORRECTION_TREE =
FRONTEND_CHANGED_PATHS =
FRONTEND_FETCH_BACK =

AUTHORITY_BRANCH =
EVIDENCE_COMMIT =
EVIDENCE_PARENT =
EVIDENCE_TREE =
EVIDENCE_BLOB =
EVIDENCE_PATH =
EVIDENCE_FETCH_BACK =

BACKEND_CHANGE = NONE
SCHEMA_CHANGE = NONE
MIGRATION_CHANGE = NONE
LOCKFILE_CHANGE = NONE
PRODUCT_CHANGE = NONE
ARCHITECTURE_CHANGE = NONE
AUTHORIZATION_CHANGE = NONE
PROVIDER_CHANGE = NONE
FINANCIAL_CHANGE = NONE
VALIDATION_HARNESS_CHANGE = NONE
CAMPAIGN_INTELLIGENCE_REMAINS_PAUSED = YES

SOURCE_WORKTREES_CLEAN =
DISPOSABLE_INFRASTRUCTURE_REMOVED =
BLOCKERS =
NEXT_BOUNDARY = PARENT REVIEW OF B05/B08 APPLICATION CORRECTION
PARENT_REVIEW_ONLY = YES
```

No final V2 support publication, full 12-scenario rerun, final 30-execution matrix, deployment or paused-lane resumption is authorized in this turn.
