# Brand Payouts — P3A Brand Return-Only Runtime Runner V7

`BRAND_PAYOUTS_P3A_BRAND_RETURN_ONLY_RUNTIME_RUNNER_V7`

## 0. Authority and objective

Read this complete replacement assignment. Do not concatenate it with any
earlier runner or chat prompt.

Authority:

- Product Authority: `f15a91d0ace8b2c424a539d79dbb120869233105`;
- Phase C architecture/plan: `3fb6b4246aa5f2ecb71c3bbfe99c56e395f30a92`;
- technical autonomy: `7f03411b9940ab16579cd2e176ac9e721edee832`;
- MVP cutline: `9c991a8e8c8dfc90ccc4cf18e48ab1629d5f5b4f`;
- V6 evidence: `4c426cda6d7f64e72fe8943de5ec36dcf897cc59`;
- V6 test-boundary adjudication: the commit containing this runner.

V6 passes the exact correction for all four Add funds lanes and proves the
production provider-disabled Brand Return state is truthfully unavailable. It
cannot reach the finite plan's deterministic fail-closed Brand Return submit
state because the production adapter exposes no capabilities.

Run only the four missing Brand Return lanes using the authorized test-only DI
override. Do not repeat Add funds or any broad matrix.

Recommended model: `GPT-5.6-TERRA HIGH`, or the closest available balanced
agentic browser model. Do not use max reasoning for packaging.

Execution mode: `LOCAL_DESKTOP_P3A_V7_BRAND_RETURN_ONLY_EVIDENCE`

Do not change source, edit the ledger, accept P3A, begin P4, create/change
migrations or invoke a provider. The Systems Architect reviews the return.

## 1. Exact immutable inputs

Backend:

- repository: `Piyush1087/creator-commerce-backend-v2-clone`;
- branch: `brand-payouts/v1-backend`;
- SHA: `12d235345e2748f676d36d61c62ed4bd9c049592`;
- tree: `1dd5900068aa7f7fa3aa25dcc0eaef33ee4d7e24`.

Frontend:

- repository: `Piyush1087/creator-commerce-frontend-v2-clone`;
- branch: `brand-payouts/v1-frontend`;
- SHA: `f775d33f729e02c020ced5b0a7ffcc662110db9e`;
- tree: `30001818c07b231529935dedf12ca059be6bd6dc`.

Evidence:

- repository: `Piyush1087/dummy_tcs`;
- branch: `brand-payouts/v1-execution-ledger`;
- required V6 ancestor: `4c426cda6d7f64e72fe8943de5ec36dcf897cc59`;
- starting head: exact remote commit containing this V7 runner.

Verify exact heads/trees/ancestry and clean source worktrees. Do not merge,
rebase, amend, force-push or rewrite history.

## 2. Reuse boundary

Verify all 373 indexed artifacts and sizes: V1 124, V2 51, V3 12, V4 24,
V5 124 and V6 38. Label them
`REUSED_IMMUTABLE_P3A_V1_TO_V6_EVIDENCE`.

Reuse all source gates, full suites, migration checksums, RBAC/admission,
financial purity/fail-closed behavior, Add funds, surface cutover, responsive,
accessibility and zero-provider results. Do not rerun them or call them fresh.

Fresh source work is limited to exact SHA/tree verification and the build
needed to start the V7 harness/preview. A source mismatch is a stop.

## 3. Test-only full-AppModule provider boundary

Create one temporary launcher outside every repository worktree. Use
`@nestjs/testing` to import the exact built `AppModule`, override only
`BrandReturnRefundProvider`, create the Nest application, apply the same global
validation/body-parser/CORS behavior required by the local browser, and listen
on loopback.

The override must implement exactly:

```text
capabilities()
= [{ sourceType: GATEWAY, currency: INR }]

assertExecutionAvailable()
= throw BrandReturnProviderSetupRequiredError

createRefund() = MUST_NOT_BE_CALLED
fetchRefund() = MUST_NOT_BE_CALLED
verifyTrustedFundingEvidence() = MUST_NOT_BE_CALLED
```

Instrument call counts. Any call to the last three methods, any external
network attempt, or any provider SDK/client invocation is a circuit breaker.
`capabilities()` is test projection only. The command must stop at
`assertExecutionAvailable()` with canonical 503 before financial allocation.

Hash the launcher into evidence, label it
`TEST_ONLY_EPHEMERAL_DI_OVERRIDE_NOT_DEPLOYABLE`, and delete it at cleanup. Do
not add it to backend/frontend Git or modify package/lock/config files.

## 4. Disposable runtime

Use fresh owned loopback PostgreSQL with UTC and all and only the 74 existing
committed migrations. No new migration, M1/M2, shared database or persistent
volume is permitted.

Seed the V6-equivalent authenticated Owner, Finance, Brand/subscription/vault
and one canonical credited `PROVEN_SOURCE` GATEWAY/INR lot with available and
provider-refundable capacity. No response-body interception or fabricated
money movement is permitted.

Start the test AppModule first with command mode `PAYOUTS`, then `SETTINGS`.
Serve the exact production/local-preview frontend build. Authenticate normally;
do not inject sessions. Prove root/liveness/database health, route mapping and
controlled shutdown. Provider variables and credentials remain absent and an
outbound deny/record guard must be active before bootstrap.

## 5. Four Return-only browser lanes

Run exactly:

| Mode | Role | Route | Width |
| --- | --- | --- | ---: |
| PAYOUTS | Owner | `/brand/payouts` | 390 |
| PAYOUTS | Finance Admin | `/brand/payouts` | 1440 |
| SETTINGS | Owner | `/brand/settings/escrow` | 390 |
| SETTINGS | Finance Admin | `/brand/settings/escrow` | 1440 |

For each lane:

1. prove only the configured surface exposes active Treasury commands;
2. verify the authoritative summary has positive
   `self_service_returnable_balance` solely from the test capability and
   canonical proven-source lot;
3. keyboard-open Return unused funds, enter a valid INR amount, confirm and
   focus `Confirm Brand Return`;
4. submit with Enter while delivery of the unchanged local 503 is delayed;
5. verify submit remains focused, natively enabled and `aria-disabled=true`;
6. repeat Enter and pointer activation and prove exactly one browser POST;
7. prove Tab and Shift+Tab stay inside the drawer;
8. release the unchanged response; require canonical
   `PROVIDER_SETUP_REQUIRED` 503 and zero Return request/allocation/ledger/vault
   mutation;
9. verify focus remains on submit, error copy is truthful, Tab/Shift+Tab remain
   trapped and Escape restores the exact invoker; and
10. record a full-document Axe scan, contrast, focus-visible and overflow.

Response delivery delay is allowed only as
`TEST_ONLY_LOCAL_RESPONSE_DELIVERY_DELAY`; it may not alter request or response
content/status/headers or backend execution.

Require zero P3A-owned serious/critical Axe findings, zero document overflow,
zero duplicate command, zero provider action and zero external provider
attempt. Do not run other widths, roles, commands or state-family rows.

## 6. Evidence and return

Create exactly:

- `docs/ai-collaboration/brand-payouts-v1-p3a-local-runtime-browser-evidence-v7.md`;
- `docs/ai-collaboration/evidence/brand-payouts-p3a-local-runtime-browser-v7/`.

Include a machine-readable index, 373-artifact reuse proof, source binding,
launcher hash/content and method counts, database/runtime lifecycle, four lane
records/screenshots, response-delay/dedupe proof, financial before/after,
Axe/overflow/contrast, provider guard and cleanup. Sanitize all artifacts.

Before commit prove clean source worktrees, evidence-only changes, zero owned
runtime/database/private session remains and index validation from scratch.
Commit/push only V7 evidence to the execution-ledger branch. Do not edit the
ledger. Fetch back and verify commit/tree/parent/file set/index.

On pass return exactly:

```text
BP_P3A_BRAND_RETURN_RUNTIME_EVIDENCE_COMPLETE

EVIDENCE_VERSION = V7
EVIDENCE_COMMIT = <40-char SHA>
EVIDENCE_TREE = <40-char SHA>
EVIDENCE_REPORT_PERMALINK = <exact GitHub blob URL>
BACKEND_SHA = 12d235345e2748f676d36d61c62ed4bd9c049592
BACKEND_TREE = 1dd5900068aa7f7fa3aa25dcc0eaef33ee4d7e24
FRONTEND_SHA = f775d33f729e02c020ced5b0a7ffcc662110db9e
FRONTEND_TREE = 30001818c07b231529935dedf12ca059be6bd6dc
V1_TO_V6_EVIDENCE_INTEGRITY = PASS_373_OF_373
BRAND_RETURN_FORM_READY = PASS_4_OF_4_TEST_ONLY_CAPABILITY
SUBMISSION_FOCUS_AND_DEDUPE = PASS_4_OF_4
FINANCIAL_MUTATION_ON_503 = NONE
SERIOUS_P3A_AXE_FINDINGS = 0
CRITICAL_P3A_AXE_FINDINGS = 0
MIGRATION_FILES_CREATED_OR_CHANGED = NONE
PROVIDER_METHODS_BEYOND_CAPABILITY_AND_ASSERT = 0
PROVIDER_ACTIONS = NONE
RESULT = PASS
```

On blocker, commit/push sanitized evidence and return the stable signature,
exact reproduction, completed gates, evidence commit/tree/permalink,
`SOURCE_CHANGES = NONE`, `MIGRATION_FILES_CREATED_OR_CHANGED = NONE`,
`PROVIDER_ACTIONS = NONE`, `P3A_ACCEPTANCE = NOT_SET`, `P4_WORK = NONE`.

STOP. Do not begin P4.
