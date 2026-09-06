# Brand Payouts — Wave A P3A Payouts Refresh Correction and V8 Runner

`BRAND_PAYOUTS_WAVE_A_P3A_PAYOUTS_REFRESH_CORRECTION_AND_V8_RUNNER_V1`

## 0. Authority and objective

This is one complete replacement assignment. Do not concatenate it with an earlier chat prompt.

Authority:

- frozen recovery charter: `23a074b01dbca141ddc997113a6ecbbc14e19f82`;
- accepted recovery profile: `ea0d08079aa830c9f469fadb200c0c31d114e25d`;
- Parent binding / Wave A authority: `803edf862f147a8e00ef431ea67ad2c541695c82`;
- Product Authority: `f15a91d0ace8b2c424a539d79dbb120869233105`;
- Phase C architecture/plan: `3fb6b4246aa5f2ecb71c3bbfe99c56e395f30a92`;
- MVP cutline: `9c991a8e8c8dfc90ccc4cf18e48ab1629d5f5b4f`;
- V7 evidence: `050dcc5cbfaea4bfb3aa0180959105a2c5a5bcc0`.

Recommended model: GPT-5.6 Terra High, or the closest available balanced agentic implementation/browser model.

Execution mode: `WAVE_A_SAME_RUNNER_CLASS_A_CORRECTION_AND_FOCUSED_ACCEPTANCE`.

Objective: correct only `PAYOUTS_REFRESH_UNMOUNTS_RETURN_DRAWER_ON_CANONICAL_503`, add a targeted regression, run proportionate frontend gates, then rerun only the two failed PAYOUTS Brand Return lanes. On pass, commit/push source and V8 evidence and return once.

This is an ordinary Class A interaction defect within frozen architecture. No Parent approval is needed. You may inspect, implement, test, correct ordinary defects in this exact path, rerun focused proof, and finish. Stop only for a Class C conflict.

Do not change backend source, Product semantics, financial logic, APIs/contracts, provider bindings, migrations, Settings behavior, P4, canonical branches, deployment or production.

## 1. Exact inputs

Backend, read-only:

- repository: `Piyush1087/creator-commerce-backend-v2-clone`;
- branch: `brand-payouts/v1-backend`;
- SHA: `12d235345e2748f676d36d61c62ed4bd9c049592`;
- tree: `1dd5900068aa7f7fa3aa25dcc0eaef33ee4d7e24`.

Frontend, bounded source mutation:

- repository: `Piyush1087/creator-commerce-frontend-v2-clone`;
- branch: `brand-payouts/v1-frontend`;
- starting SHA: `f775d33f729e02c020ced5b0a7ffcc662110db9e`;
- starting tree: `30001818c07b231529935dedf12ca059be6bd6dc`.

Evidence:

- repository: `Piyush1087/dummy_tcs`;
- branch: `brand-payouts/v1-execution-ledger`;
- starting head: exact commit containing this runner;
- required V7 ancestor: `050dcc5cbfaea4bfb3aa0180959105a2c5a5bcc0`.

Fetch and verify exact heads/trees/ancestry. Use clean isolated worktrees. A source-head mismatch is a stop. Do not merge, rebase, amend, force-push or rewrite history.

## 2. Accepted diagnosis and frozen correction envelope

V7 proves:

- all 373 V1–V6 indexed artifacts pass;
- both SETTINGS lanes pass;
- all four lanes pass submission focus, native enablement plus `aria-disabled`, dedupe and one POST before response;
- canonical `PROVIDER_SETUP_REQUIRED` 503 is unchanged;
- financial mutation, provider action and external attempts are zero;
- Axe serious/critical and document overflow are zero;
- only both PAYOUTS post-error lanes fail.

Source chain:

1. `BrandReturnDrawer` sets the truthful 503 error, then awaits `onRefresh`;
2. `PayoutsTreasuryActions.refreshCanonicalViews` invokes workspace refresh;
3. overview becomes `REFRESHING` while retaining current data;
4. `actionable` requires `READY`;
5. the effect closes drawers and the non-actionable return path unmounts them.

Preserve an already-open Treasury drawer while retained, current, fully-authorized PAYOUTS command context is temporarily `REFRESHING`. Starting a new command during refresh must remain prohibited. If authority/surface/current-data eligibility is actually lost, the command surface must still fail closed and close/unmount safely.

Prefer the smallest coherent correction in `PayoutsTreasuryActions.tsx`. Do not change the shared drawer unless a targeted test proves it is necessary. Do not make `REFRESHING` generally actionable.

## 3. Required regression

Add a focused regression in the existing Brand Payouts test surface proving at minimum:

1. with a READY authoritative PAYOUTS response, Return unused funds opens;
2. canonical Return submission fails with `PROVIDER_SETUP_REQUIRED`;
3. the triggered canonical refresh enters a pending `REFRESHING` interval with retained data;
4. throughout that interval the already-open drawer remains mounted;
5. truthful error copy is visible and submit focus remains on `Confirm Brand Return`;
6. repeat activation does not issue a second POST;
7. new Treasury command initiation is unavailable during refresh;
8. Tab/Shift+Tab remain trapped and Escape restores the exact invoker;
9. after refreshed READY data resolves, the drawer remains usable/closable; and
10. a genuinely stale/unavailable, unauthorized, cross-surface or capability-revoked context remains fail closed.

Do not add broad abstractions or unrelated tests.

## 4. Proportionate source gates

Run:

- the new targeted regression;
- the affected Brand Payouts/P3A focused test file(s);
- changed-file lint and formatting;
- frontend typecheck;
- one production/local-preview build;
- source diff and no unrelated-file check.

Do not run the full frontend repository suite solely for this bounded correction. V7 and immutable prior evidence cover unaffected behavior. If a focused failure is an ordinary consequence of the correction, fix it in the same runner, add/adjust the targeted regression, and continue.

Commit and push one bounded frontend correction commit to `brand-payouts/v1-frontend`. Fetch back and record exact SHA/tree/parent/file set. Production files target: one. Test files target: one.

## 5. Focused V8 runtime/browser proof

After the source gates pass, use the same V7 test-only boundary and safety controls:

- exact built backend AppModule;
- external ephemeral `BrandReturnRefundProvider` override only;
- `capabilities() = [{ sourceType: GATEWAY, currency: INR }]`;
- `assertExecutionAvailable() = BrandReturnProviderSetupRequiredError`;
- forbidden provider methods fail if called;
- fresh owned UTC PostgreSQL with all and only 74 existing migrations;
- provider credentials absent;
- outbound deny/record guard active before bootstrap;
- exact corrected built frontend preview;
- normal authentication;
- response delivery delay may delay only the unchanged local response.

Rerun exactly:

| Mode | Role | Route | Width |
| --- | --- | --- | ---: |
| PAYOUTS | Owner | `/brand/payouts` | 390 |
| PAYOUTS | Finance Admin | `/brand/payouts` | 1440 |

For each lane re-prove:

- positive authoritative returnable balance;
- keyboard open and valid amount/confirmation;
- pending submit focus, native enabled state plus `aria-disabled=true`;
- repeat Enter and pointer activation yield exactly one POST;
- Tab/Shift+Tab remain trapped;
- release unchanged canonical 503;
- drawer stays mounted during refresh;
- truthful provider-unavailable/no-return-completed error is visible;
- focus remains on submit;
- post-error Tab/Shift+Tab remain trapped;
- Escape restores the exact invoker;
- zero financial mutation, provider action, forbidden provider method, non-loopback attempt, serious/critical Axe finding and document overflow.

Do not rerun SETTINGS, Add funds, other widths/roles, the historical state matrix, backend suites, or unrelated browser rows. Reuse V7 SETTINGS and all V1–V7 unaffected evidence by verified SHA/hash.

## 6. Evidence and commits

Create:

- `docs/ai-collaboration/brand-payouts-v1-p3a-local-runtime-browser-evidence-v8.md`;
- `docs/ai-collaboration/evidence/brand-payouts-p3a-local-runtime-browser-v8/`.

Keep the package compact. Include:

- source bindings and frontend correction diff/file set;
- exact targeted/focused/lint/format/typecheck/build results;
- V1–V7 reuse-integrity summary;
- two PAYOUTS lane records and representative screenshots;
- refresh/drawer/focus/dedupe proof;
- financial before/after;
- provider/outbound guard counts;
- migration/runtime lifecycle;
- Axe/overflow;
- cleanup and machine-readable SHA-256/size index.

Commit/push only V8 evidence to the execution-ledger branch after the frontend correction is remotely verified. Do not edit the ledger or accept P3A. Fetch back and verify evidence commit/tree/parent/file set/index.

## 7. Stop boundaries

Stop and return a compact Class C request only for a required Product decision, financial/RBAC/security meaning change, API/architecture ownership change, migration/provider requirement, canonical merge/production action, or genuine environment contradiction.

An ordinary test, focus, render-lifecycle or harness defect in this bounded path is not a stop: diagnose, correct, run targeted regression and continue.

## 8. Terminal return

On pass return exactly:

```text
BP_P3A_PAYOUTS_REFRESH_CORRECTION_AND_RUNTIME_EVIDENCE_COMPLETE

EVIDENCE_VERSION = V8
FRONTEND_CORRECTION_COMMIT = <40-char SHA>
FRONTEND_CORRECTION_TREE = <40-char SHA>
FRONTEND_CORRECTION_FILES = <exact paths>
EVIDENCE_COMMIT = <40-char SHA>
EVIDENCE_TREE = <40-char SHA>
EVIDENCE_REPORT_PERMALINK = <exact GitHub blob URL>
BACKEND_SHA = 12d235345e2748f676d36d61c62ed4bd9c049592
P3A_REUSED_EVIDENCE_INTEGRITY = PASS
TARGETED_REGRESSION = PASS
FOCUSED_FRONTEND_GATES = PASS
PAYOUTS_RETURN_POST_ERROR = PASS_2_OF_2
V7_SETTINGS_RETURN_POST_ERROR = REUSED_PASS_2_OF_2
SUBMISSION_FOCUS_AND_DEDUPE = PASS_4_OF_4_COMPOSITE
FINANCIAL_MUTATION_ON_503 = NONE
SERIOUS_P3A_AXE_FINDINGS = 0
CRITICAL_P3A_AXE_FINDINGS = 0
MIGRATION_FILES_CREATED_OR_CHANGED = NONE
PROVIDER_METHODS_BEYOND_CAPABILITY_AND_ASSERT = 0
PROVIDER_ACTIONS = NONE
SOURCE_WORKTREES_CLEAN = YES
RESULT = PASS
```

On a genuine Class C blocker, commit/push sanitized evidence and return its exact signature, completed gates, source/evidence SHAs, no-migration/no-provider fields, `P3A_ACCEPTANCE = NOT_SET`, and `P4_WORK = NONE`.

STOP. The Systems Architect performs P3A acceptance.
