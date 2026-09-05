# Brand Payouts — P3A Local Runtime and Browser Runner V1

`BRAND_PAYOUTS_P3A_LOCAL_RUNTIME_BROWSER_RUNNER_V1`

## 0. Authority and objective

This is the complete copy-paste-ready assignment for the local desktop Codex
runner. Read it completely before acting. Do not combine it with an earlier
chat prompt or infer omitted requirements from memory.

Durable authority:

- Product Authority:
  `f15a91d0ace8b2c424a539d79dbb120869233105`;
- accepted architecture and finite plan:
  `3fb6b4246aa5f2ecb71c3bbfe99c56e395f30a92`;
- autonomous execution authority:
  `689feb7a46eb2d52b984ce083be046ac6d38657d`;
- technical-autonomy amendment:
  `7f03411b9940ab16579cd2e176ac9e721edee832`;
- MVP delivery cutline:
  `9c991a8e8c8dfc90ccc4cf18e48ab1629d5f5b4f`;
- accepted P2 ledger binding:
  `495ae4f977152b49b0504ed11c441aadd4abcc93`;
- accepted P2 evidence:
  `b03613da50561cf4287c022ed46b2048365281e3`.

The Systems Architect has implemented and source-gated the lean P3A
operational-surface cutover. Your objective is to complete the unavailable
production-shaped PostgreSQL, security, built-runtime, responsive-browser,
accessibility, cutover, and rollback evidence against the exact candidates in
section 1.

This is an evidence relay. Do not accept P3A, edit the execution ledger, begin
P4, create a migration, or change source. The Systems Architect will review
the immutable evidence, self-decide `BP-P3A-OPERATIONS-CUTOVER`, ledger-bind a
passing checkpoint, and continue to the next eligible phase.

Execution mode:

```text
LOCAL_DESKTOP_P3A_RUNTIME_AND_BROWSER_EVIDENCE_ONLY
```

## 1. Immutable source heads

Backend:

```text
repository = Piyush1087/creator-commerce-backend-v2-clone
branch = brand-payouts/v1-backend
required head = 12d235345e2748f676d36d61c62ed4bd9c049592
required tree = 1dd5900068aa7f7fa3aa25dcc0eaef33ee4d7e24
required parent = 119397ff6836ad12846c1e948409d8d49185c408
required accepted P1 ancestor = 60385abbd12d5a363615100c463ac6755ce848ea
```

Frontend:

```text
repository = Piyush1087/creator-commerce-frontend-v2-clone
branch = brand-payouts/v1-frontend
required head = e81c5bf105e8cc03d93f01f5be981cc527e36ca0
required tree = c32c164e1f4cda963dd8358e33fe253aed77dfcc
required parent = ec412013cb7eeaa119a7cded6fb7f5ef0c40df03
required accepted base ancestor = 323658d4b147b95b5629ff8d91fa90b8fe9077e4
```

Evidence/authority repository:

```text
repository = Piyush1087/dummy_tcs
branch = brand-payouts/v1-execution-ledger
required accepted P2 ledger ancestor = 495ae4f977152b49b0504ed11c441aadd4abcc93
required MVP cutline ancestor = 9c991a8e8c8dfc90ccc4cf18e48ab1629d5f5b4f
starting head = exact remote commit containing this runner assignment
```

Fetch and verify all three remote heads, trees, ancestry, and clean worktrees
before runtime work. Stop on any mismatch. Do not merge, rebase, amend, force
push, or rewrite accepted history.

Verify the candidate diffs are exactly one bounded P3A phase. The backend
candidate changes 10 files, of which 7 are production/configuration files.
The frontend candidate changes 16 files, of which 12 are production files.
No Prisma schema, migration, package, lockfile, provider adapter, or provider
configuration file changes.

## 2. Accepted design under test

The following design is fixed for this evidence run:

- `/brand/payouts` becomes the active Add funds and Brand Return command
  surface only when the backend process has
  `BRAND_PAYOUTS_COMMAND_SURFACE=PAYOUTS`;
- `/brand/settings/escrow` remains the compatibility-safe active surface when
  the value is `SETTINGS`, missing, blank, or unrecognized;
- the backend V2 overview projects only the matching server-authoritative
  action family;
- both existing canonical mutations remain at
  `POST /api/v1/escrow/topup-intent` and
  `POST /api/v1/escrow/brand-returns`;
- each mutation supplies `X-Brand-Financial-Command-Surface` and the backend
  rejects an inactive or missing claim with
  `BRAND_FINANCIAL_COMMAND_SURFACE_INACTIVE` in Payouts mode;
- missing claim remains accepted only in Settings mode for compatibility;
- existing `BrandWorkspaceAuthorizationService` Owner/Finance authorization
  runs before surface admission;
- Campaign Manager never receives Treasury mutation authority;
- Payouts reuses the existing funding and Brand Return clients/drawers and
  canonical services; it does not introduce a second vault, ledger, funding
  path, Return path, provider integration, or financial authority;
- Settings becomes a summary/deep link while Payouts is active and restores
  the existing full Treasury component on rollback;
- stable Payouts Brand Return detail uses
  `?brand_return=brand-return:{request_id}`;
- financial notification links target stable Payouts obligation/Return
  details using bounded Creator Shop references; and
- all provider behavior remains disabled/fail-closed for this run.

Do not redesign this contract in the evidence lane.

## 3. Hard prohibitions

Do not:

- modify backend/frontend source, tests, CSS, dependencies, lockfiles,
  generated source, Prisma schema, or committed migrations;
- create or apply a new migration;
- use a shared, development, staging, or production database;
- inspect credentials or local provider secrets;
- call Razorpay CLI/API, create an order/refund/transfer/account, configure a
  webhook, or make any external provider request;
- activate a real checkout, provider refund, payout, reversal, Return, or
  other money movement;
- treat a local deterministic fake or fail-closed result as provider proof;
- expose or commit passwords, JWTs, cookies, database URLs, headers, local
  paths, provider-shaped secrets, raw diagnostics, or sensitive fixtures;
- weaken Axe rules, patch a built bundle, inject a browser token, use a dev
  frontend server, or use a second application API server;
- edit prior P2 evidence or the execution ledger; or
- begin P4.

Temporary environment-only fixture/evidence scripts are permitted. They must
stay outside source repositories, be sanitized, and be removed at shutdown.
Browser response interception is permitted only where explicitly authorized
below and must be labelled non-authoritative.

## 4. Re-run source gates

Record Node/npm versions and rerun:

Backend:

- the 13 focused P3A tests;
- changed-file ESLint;
- full Vitest suite;
- production build; and
- `git diff --check` plus schema/migration diff.

Frontend:

- the 61 focused P3A/P2/Settings tests;
- changed-file ESLint;
- typecheck;
- full Vitest suite;
- production build with explicit local-preview configuration; and
- `git diff --check`.

Expected Work results before this relay were:

```text
backend focused = 13/13
backend full = 1268 passed, 615 opt-in skipped
frontend focused = 61/61
frontend full = 884/884
backend build = PASS
frontend typecheck/build = PASS
changed-file lint = PASS in both repositories
backend repository lint baseline = 987 pre-existing unrelated formatting errors
frontend repository lint baseline = 26 errors and 13 warnings, unrelated to P3A
```

Do not repair repository-wide lint debt. If counts differ, classify the exact
reason. A changed-file lint, test, typecheck, build, diff, or source-integrity
failure is a circuit breaker.

## 5. Disposable PostgreSQL and security gate

Use a fresh disposable loopback-only PostgreSQL database with UTC sessions.
From empty, apply all and only repository-committed migrations. Verify every
committed migration checksum and record PostgreSQL version, migration count,
database/session timezone, start, readiness, and cleanup. Creating or editing
a migration is forbidden.

Run the applicable opt-in PostgreSQL/security suites sequentially against the
disposable database, including:

```text
BRAND_PAYOUTS_DATABASE_TEST=true
BRAND_WORKSPACE_DATABASE_TEST=true
RUN_BS04_POSTGRES_TESTS=true
RUN_NOTIFICATION_POSTGRES_TESTS=true
RUN_P2B_POSTGRES_TESTS=true
```

At minimum run and report the Payouts P1 security suite, Brand workspace
authorization suite, Brand Return PostgreSQL suite, notification hardening and
worker suites, and operational-producer PostgreSQL suite. Preserve their own
fixture cleanup requirements. Also rerun the relevant Brand Return service,
funding, notification policy/recipient/dispatch/worker, and P3A command-surface
tests.

Prove:

- Owner and Finance Admin authorization;
- Campaign Manager denial before Treasury mutation;
- inactive/no-membership and cross-Brand fail-closed behavior;
- source provenance and Brand Return idempotency;
- no Brand Return request, allocation, balance, or ledger mutation when the
  provider preflight is unavailable;
- notification recipient scoping, dedupe, required in-app behavior, optional
  email preference behavior, redaction, retry, and terminal alert behavior;
- one canonical vault and ledger; and
- no schema or migration drift.

## 6. Built runtime topology

Build the exact backend and run `dist/main.js` through the complete
`AppModule`. Build the exact frontend once with:

```text
VITE_API_URL=http://127.0.0.1:<backend-port>
VITE_STAGE=local
```

Serve only the built Vite preview on loopback. Use normal password login with
canonical hashing; never inject a browser token. Seed deterministic disposable
fixtures for Owner, Finance Admin, Campaign Manager, inactive/no-membership,
unrelated Brand, Creator/Admin denial, an empty Brand, a vault, source-safe
financial activity, at least one Brand Return detail row, differing activity
ID/public reference, and enough activities/obligations for continuation smoke.

Keep all Razorpay/provider credentials absent. Install an outbound network
deny/record guard before starting the application. Optional workers must be
inert. Prove root, liveness, database health, route mapping, ready/listening
state, and controlled shutdown.

Run the exact same built frontend against two separately started backend
process configurations:

1. `BRAND_PAYOUTS_COMMAND_SURFACE=PAYOUTS`;
2. `BRAND_PAYOUTS_COMMAND_SURFACE=SETTINGS`.

Also prove missing, blank, and invalid values resolve to the Settings-safe
rollback behavior. Do not mutate `process.env` inside the running application;
restart the owned backend process for each process configuration.

## 7. Atomic surface and HTTP/RBAC proof

For each mode, record the V2 overview body, safe response headers, DOM controls,
and mutation admission matrix for Owner, Finance Admin, and Campaign Manager.

### Payouts-active mode

Prove:

- Owner/Finance overview exposes only `ADD_FUNDS` and, when a vault exists,
  `REQUEST_BRAND_RETURN`;
- `/brand/payouts` owns the two visible commands;
- Settings renders only its compatibility summary/deep link and no mutation
  control;
- `PAYOUTS` claims enter the existing canonical handlers;
- `SETTINGS`, missing, invalid, and mixed/stale claims receive 409 with the
  bounded inactive-surface code and no handler/provider side effect;
- Campaign Manager has read-only Payouts UI, no command, and receives 403 for
  either mutation regardless of claimed surface; and
- stale UI cannot bypass the current server decision.

### Settings rollback mode

Prove:

- Owner/Finance overview exposes only the `OPEN_SETTINGS_*` action family;
- Settings restores the existing complete Treasury component and commands;
- Payouts renders no Treasury mutation control and provides the safe
  compatibility direction available for the authoritative snapshot;
- `SETTINGS` and legacy missing claims enter the existing canonical handlers;
- `PAYOUTS` claims receive 409 with no handler/provider side effect;
- Campaign Manager remains read-only with no mutation; and
- blank/unknown configuration cannot activate Payouts.

For the admission matrix, use unique disposable idempotency identities and
record only sanitized request classifications. The Add funds canonical handler
may be exercised once per active mode against absent credentials and the
outbound deny guard. It must fail closed before any external request, never
credit AVAILABLE funds, and create no duplicate funding/ledger foundation on
idempotent replay. Clearly distinguish an expected local pending request/ledger
foundation from provider-confirmed money.

The Brand Return canonical handler must be exercised against the existing
fail-closed provider adapter. It must fail provider preflight before Return,
allocation, vault, or ledger mutation. If the real fail-closed summary makes
the confirm control unavailable, a browser interception may change only the
test fixture's safe summary eligibility fields to drive the real POST. Label
that single projection `TEST_ONLY_NON_AUTHORITATIVE_COMMAND_DRIVER`; the POST
must still reach the one real backend and fail closed. Do not intercept a
mutation response.

Snapshot all canonical financial tables immediately before and after each
read, rejected claim, accepted fail-closed command, and idempotent replay.
Explain every expected local row delta. Any AVAILABLE credit, Brand Return
ledger entry, duplicate foundation, cross-Brand row, or unclassified change is
a circuit breaker.

## 8. Responsive/browser/accessibility matrix

Use Chromium, Chrome, or Edge through real browser automation at exactly:

```text
390px
767px
768px
1440px desktop
```

Record viewport height. Run a complete P3A matrix, not a single desktop smoke.
At every applicable width cover:

- unauthenticated entry and normal login;
- Payouts-active Owner and Finance command surfaces;
- Payouts-active Campaign Manager read-only projection;
- Payouts-active Settings compatibility route and keyboard deep link;
- Add funds drawer open, validation, close, and one bounded fail-closed submit;
- Brand Return drawer open, validation, confirmation, close, and one bounded
  fail-closed submit under the explicit test-only summary rule above;
- Settings rollback Owner/Finance Treasury surface;
- Settings rollback Payouts compatibility state;
- Campaign Manager Settings/Payouts read-only behavior;
- initial/loading, refreshing, stale, unavailable, and mixed-capability states
  proving drawers are absent or closed and commands fail closed;
- no-vault Add-funds-only capability;
- stable Brand Return detail by direct safe link, refresh, Back to Payouts, and
  unauthorized/cross-Brand denial;
- notification deep links for obligation and Brand Return detail;
- lifecycle and money-movement activity ID/public-reference smoke; and
- expanded activity and obligation pagination Back-restoration smoke at the
  767/768 breakpoint and one narrow/desktop width.

State interceptions may delay, abort, or replay a contract-valid response
captured from the real local backend. Label each intercepted row. They may not
invent financial success, provider readiness, or authorization.

For every matrix row record screenshot, actor, mode, authoritative/intercepted
source, network, console, active element/focus, DOM control names, Axe result,
and:

```text
document.documentElement.scrollWidth
document.documentElement.clientWidth
document.body.scrollWidth
```

Require no document-level horizontal overflow, usable mobile composition below
768px, desktop composition at/above 768px, visible focus, logical keyboard
order, Enter/Space activation, Escape/close behavior where applicable, no
keyboard trap, and unobscured final controls above mobile navigation/safe-area
padding.

Run fresh Axe 4.x scans on every materially distinct P3A state. Require:

```text
SERIOUS_AXE_FINDINGS = 0
CRITICAL_AXE_FINDINGS = 0
```

Retain every lower-severity finding with selector, state, actor, and width. The
known P2 moderate nested/duplicate-main findings may be recorded as inherited
only if they reproduce unchanged; do not hide or disable them.

## 9. Product truth and provider proof

Prove from DOM, HTTP, database, network, and console evidence:

- one active mutation surface, never zero or two, for each authoritative mode;
- one canonical backend handler/service path for each command;
- server-side role enforcement before surface admission;
- no provider request or external provider connection attempt;
- no false success, AVAILABLE credit, Return completion, settlement, cleared,
  paid, fixed SLA, 30/70, or TDS claim;
- no release, reversal, mark-paid, caller-economics, destination, or source
  selection control;
- no provider ID, bank/KYC/tax value, secret, or raw diagnostic in ordinary UI;
- pending funding is not AVAILABLE;
- Brand Return remains original-source-only and distinct from payout reversal
  and Collaboration refund;
- only backend-authoritative amounts and timestamps are displayed;
- existing activity/obligation pagination and identity behavior remains safe;
- stable notification/detail links resolve without exposing restricted data;
  and
- no unexpected Payouts-attributable 4xx/5xx or console exception outside the
  deliberately classified inactive-surface and fail-closed-provider cases.

No evidence in this assignment proves Razorpay capability or production
readiness.

## 10. Evidence package

Create exactly:

```text
docs/ai-collaboration/brand-payouts-v1-p3a-local-runtime-browser-evidence-v1.md
docs/ai-collaboration/evidence/brand-payouts-p3a-local-runtime-browser-v1/
```

Include at least:

- a machine-readable index hashing every supporting artifact;
- immutable authority/head/tree/ancestry and candidate-diff binding;
- environment and fresh source-gate results;
- disposable database/migration/timezone lifecycle;
- PostgreSQL/security results;
- built AppModule and built-preview startup/health/shutdown;
- complete Payouts/Settings mode and mutation-admission matrices;
- RBAC/cross-Brand proof;
- before/after financial-table snapshots and classified deltas;
- command idempotency and fail-closed provider results;
- notification registry/link/recipient evidence;
- complete browser/Axe/keyboard/overflow matrix and screenshots;
- P2 pagination/identity invariant smoke;
- Product-truth and zero-provider-network summary; and
- disposable-resource cleanup.

Every artifact must carry or inherit exact backend/frontend SHA and tree,
surface mode, actor/fixture, and authoritative/intercepted classification.
Sanitize credentials, sessions, headers, database URLs, machine paths, raw
provider diagnostics, and sensitive fixture values.

## 11. Validation, commit, and push

Before committing:

- verify source worktrees remain clean at pinned SHAs;
- verify no source, schema, migration, package, or lockfile diff;
- stop all owned processes and remove the disposable database/container,
  volume, session material, temporary scripts, and listeners;
- validate JSON, Markdown links, screenshot references, index hashes, and
  evidence completeness;
- inspect all evidence for secrets/sensitive values;
- run `git diff --check` in the authority repository;
- prove prior evidence and the execution ledger are unchanged; and
- prove no P4 work exists.

Commit and push only the P3A V1 report and evidence directory as one
fast-forward descendant of the commit containing this runner assignment. Do
not set P3A acceptance or edit the ledger.

## 12. Required return

On complete passing evidence, return only:

```text
BP_P3A_LOCAL_RUNTIME_BROWSER_EVIDENCE_COMPLETE

EVIDENCE_VERSION = V1
EVIDENCE_COMMIT =
EVIDENCE_TREE =
EVIDENCE_REPORT_PERMALINK =
EVIDENCE_INDEX_PATH = docs/ai-collaboration/evidence/brand-payouts-p3a-local-runtime-browser-v1/index.json
BACKEND_SHA = 12d235345e2748f676d36d61c62ed4bd9c049592
BACKEND_TREE = 1dd5900068aa7f7fa3aa25dcc0eaef33ee4d7e24
FRONTEND_SHA = e81c5bf105e8cc03d93f01f5be981cc527e36ca0
FRONTEND_TREE = c32c164e1f4cda963dd8358e33fe253aed77dfcc
POSTGRESQL_SECURITY_GATE = PASS
PAYOUTS_ACTIVE_SURFACE = PASS
SETTINGS_ROLLBACK_SURFACE = PASS
EXACTLY_ONE_MUTATION_SURFACE = PASS
OWNER_FINANCE_RBAC = PASS
CAMPAIGN_MANAGER_READ_ONLY = PASS
BRAND_RETURN_FAIL_CLOSED = PASS_NO_FINANCIAL_SIDE_EFFECT
ADD_FUNDS_FAIL_CLOSED = PASS_NO_PROVIDER_OR_AVAILABLE_CREDIT
NOTIFICATION_SCOPE_AND_LINKS = PASS
BROWSER_MATRIX = COMPLETE
SERIOUS_AXE_FINDINGS = 0
CRITICAL_AXE_FINDINGS = 0
SOURCE_CHANGES = NONE
MIGRATIONS_CREATED = NONE
PROVIDER_ACTIONS = NONE
RESULT = PASS
```

For an environment-only blocker, return only:

```text
P3A_LOCAL_RUNTIME_BROWSER_ENVIRONMENT_BLOCKED

LAST_COMPLETED_GATE =
BLOCKER =
WHY_LOCAL_AND_UNAVOIDABLE =
SAFE_RETRY_ACTION =
SOURCE_CHANGES = NONE
MIGRATIONS_CREATED = NONE
PROVIDER_ACTIONS = NONE
P3A_ACCEPTANCE = NOT_SET
```

For a reproducible source/security defect, commit bounded sanitized failure
evidence and return only:

```text
P3A_RUNTIME_BROWSER_CIRCUIT_BREAKER

EVIDENCE_COMMIT =
EVIDENCE_TREE =
EVIDENCE_REPORT_PERMALINK =
AFFECTED_BACKEND_SHA = 12d235345e2748f676d36d61c62ed4bd9c049592
AFFECTED_FRONTEND_SHA = e81c5bf105e8cc03d93f01f5be981cc527e36ca0
FAILURE_SIGNATURE =
EXACT_REPRODUCTION =
SUSPECTED_SOURCE_FILES =
WHY_SOURCE_CHANGE_IS_REQUIRED =
COMPLETED_SAFE_GATES =
SOURCE_CHANGES = NONE
MIGRATIONS_CREATED = NONE
PROVIDER_ACTIONS = NONE
P3A_ACCEPTANCE = NOT_SET
```

STOP. Do not begin P4.
