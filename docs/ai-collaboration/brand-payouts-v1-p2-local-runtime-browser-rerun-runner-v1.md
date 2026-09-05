# Brand Payouts — P2 Local Runtime and Browser Rerun Runner V1

`BRAND_PAYOUTS_P2_LOCAL_RUNTIME_BROWSER_RERUN_RUNNER_V1`

## 0. Authority and purpose

This is the complete copy-paste-ready assignment for the local desktop Codex
runner. Read it completely before acting.

Authority and durable inputs:

- Product/SA execution authority: `689feb7a46eb2d52b984ce083be046ac6d38657d`
- Accepted predecessor: `BP-P1-BACKEND-READ = ACCEPTED`
- P2 backend runtime-recovery commit: `119397ff6836ad12846c1e948409d8d49185c408`
- P2 backend runtime-recovery tree: `73521762dfeaf703b301e7a61c17cbda97d797a9`
- Original P2 frontend candidate: `b69c37bc9c1b1aec0976ab503acbb7274153480d`
- Preserved source-defect evidence commit: `259e35bc1163bfbe4402d63d363f09f1284044b6`
- Preserved source-defect evidence tree: `7c8bed177210808bb393b82beba187aca79e5a58`
- Corrected P2 frontend commit: `5df18df718e8a69dd22d7c31fab804716d87329a`
- Corrected P2 frontend tree: `db18346e8471c44b256e96ab39ef55b59ae1380c`

The V1 evidence proved one genuine P2 source defect: a built Vite preview has
`import.meta.env.DEV=false`, while the runtime resolver ignored the exact
explicit `VITE_STAGE=local` input and rejected the loopback API origin before
React mounted. The Systems Architect applied the one authorized bounded P2
source-defect correction. It changed only:

- `src/shared/config/resolve-env.ts`; and
- `src/shared/config/resolve-env.test.ts`.

The correction treats only development mode or the exact explicit stage
`local` as local runtime. Missing and non-local stages still use the production
origin validator and reject loopback API origins. Focused tests, all 877
frontend tests, changed-file lint/format, typecheck, diff check, and the exact
local-stage production build passed. Repository-wide lint retains unrelated
pre-existing failures outside the correction scope.

Execution mode:

```text
LOCAL_DESKTOP_RUNTIME_AND_BROWSER_EVIDENCE_RERUN_ONLY
```

This is an execution relay, not a Parent/Product checkpoint. The Systems
Architect will review the returned evidence and decide the P2 checkpoint.

## 1. Repositories and immutable inputs

Backend:

```text
repository = Piyush1087/creator-commerce-backend-v2-clone
branch = brand-payouts/v1-backend
required head = 119397ff6836ad12846c1e948409d8d49185c408
required tree = 73521762dfeaf703b301e7a61c17cbda97d797a9
required ancestor = 60385abbd12d5a363615100c463ac6755ce848ea
```

Frontend:

```text
repository = Piyush1087/creator-commerce-frontend-v2-clone
branch = brand-payouts/v1-frontend
required head = 5df18df718e8a69dd22d7c31fab804716d87329a
required tree = db18346e8471c44b256e96ab39ef55b59ae1380c
required parent = b69c37bc9c1b1aec0976ab503acbb7274153480d
required base ancestor = 323658d4b147b95b5629ff8d91fa90b8fe9077e4
```

Evidence/authority repository:

```text
repository = Piyush1087/dummy_tcs
branch = brand-payouts/v1-execution-ledger
required ancestor = 259e35bc1163bfbe4402d63d363f09f1284044b6
starting head = the commit containing this runner prompt
```

Before runtime work, fetch and verify all three exact remote heads, ancestry,
trees, and clean worktrees. Stop on any mismatch. Do not rebuild P2 from an
older base, amend P0/P1, rewrite history, or merge any branch.

## 2. Bounded scope and circuit breaker

Close only:

```text
MISSING_LIVE_BROWSER_RESPONSIVE_ACCESSIBILITY_EVIDENCE
```

Validate the committed backend boot correction and corrected frontend as
immutable inputs. Do not change backend or frontend source. Environment-only
changes to local ports, disposable database setup, temporary fixture scripts,
browser automation, and evidence collection are allowed and must not be
committed to either source repository.

The single authorized P2 source-defect correction has now been consumed. If
the same bootstrap failure repeats, or any second genuine source defect is
required to complete this gate, preserve the evidence and stop. Do not edit
source or attempt another correction loop. Return the circuit-breaker form in
section 9.

Forbidden:

- Product, API, financial, authorization, notification, support, tax, or
  document semantic changes;
- backend or frontend source changes;
- Prisma schema changes or migration creation;
- Razorpay/provider credential inspection, CLI/API calls, webhooks, Test/Live
  transfers, returns, reversals, or any provider mutation;
- use of a production/shared database;
- production deployment;
- merge to `development`, `main`, or another canonical branch;
- logging or committing passwords, JWTs, cookies, tokens, credentials, raw
  provider diagnostics, or seeded sensitive values;
- execution-ledger edits or setting P2 acceptance; and
- starting P3 source work.

Keep Settings as the sole temporary Add funds and Brand Return mutation
surface. `/brand/payouts` remains read-only in this checkpoint.

## 3. Required local topology

Record operating system, CPU architecture, Node, npm, package-manager,
PostgreSQL, browser name/version, and browser automation version.

Use a disposable loopback-only PostgreSQL database. Apply the repository's
currently committed migrations from an empty database, or document an exact
equivalent accepted-base clone plus migration verification. Set the database
session timezone to UTC. Do not create a migration.

Seed deterministic test-only fixtures for:

- Brand Owner;
- Finance Admin;
- Campaign Manager;
- inactive Brand membership;
- no-active-membership Brand user;
- unrelated-Brand Owner;
- direct Creator;
- Admin without Brand financial membership;
- an empty/new Brand;
- authoritative vault and ledger records;
- a legacy-unreconciled payout obligation;
- enough same-timestamp activity to prove stable pagination; and
- partial/unavailable source states where browser interception is needed.

Give each interactive actor a repository-supported password auth method using
a temporary seed harness and the backend's canonical password hashing helper.
Use distinct test-only emails, one non-durable test password, and the real
`POST /api/v1/auth/login` browser flow. Do not inject a token into localStorage
or sessionStorage. Redact the password and all session material from evidence.

Build the backend fresh and start `dist/main.js` through the full `AppModule`.
Supply only inert local/test configuration, disable offering refresh and other
optional workers where supported, keep all Razorpay/provider variables absent
or empty, and prevent external provider access. Prove root, liveness, database
health, Payouts route mapping, listening/ready state, and controlled shutdown.

Build the exact corrected frontend fresh with:

```text
VITE_API_URL=http://127.0.0.1:<chosen-backend-port>
VITE_STAGE=local
```

Start its built Vite preview on loopback. Do not use a development server,
mock build, hostname workaround, bundle patch, or second API server. First
prove that `/brand/payouts` mounts without the V1 bootstrap exception.

## 4. Full-AppModule HTTP and RBAC proof

Run the complete P2 PostgreSQL HTTP/RBAC matrix against the full built
application, not a bounded Nest test module. Preserve a redacted request and
response index proving:

- exact V2 media-type negotiation succeeds and default/incompatible
  representation behavior remains correct;
- Owner and Finance receive full Product-safe projections;
- Campaign Manager receives zero financial rows under the accepted fail-closed
  scope;
- inactive/no-membership, Creator, and Admin actors fail closed;
- unrelated-Brand list, detail, cursor, and existence probes fail closed;
- runtime response-schema validation passes against the corrected frontend;
- summary buckets remain separate and source-authoritative;
- activity distinguishes money movement from lifecycle-only information;
- legacy history has no invented payment term, due date, or provider state;
- pagination exposes `as_of`, continuation, page/source completeness, exhausts
  deterministically, and produces no duplicates;
- provider IDs, bank/KYC/tax values, credentials, and raw diagnostics are absent;
- reads are side-effect-free and do not provision a vault/provider account;
- no Payouts mutation route or control is introduced; and
- no provider invocation occurs.

Snapshot canonical financial rows before and after all Payouts GETs and prove
byte-equivalent normalized state. Record request counts and every assertion.
Do not preserve Authorization or Cookie header values.

## 5. Real-browser matrix

Use Chromium, Chrome, or Edge through a real browser automation/runtime path at
these exact CSS viewport widths:

```text
390px
767px
768px
1440px desktop
```

Record the viewport height for each width. Capture screenshots and a
machine-readable result for every materially distinct actor/state. At minimum
cover:

- route entry and repository-supported authentication;
- Owner, Finance Admin, Campaign Manager, unauthorized, and unrelated-Brand
  projections;
- initial/loading and independently loading sections;
- partial source coverage;
- stale last-known state and refreshing;
- empty/new Brand;
- ready data;
- unavailable dependency;
- legacy-unreconciled obligation;
- obligation detail;
- activity detail;
- pagination/load-more;
- Settings Add funds deep link;
- Settings Brand Return deep link;
- browser Back restoration;
- refresh restoration; and
- direct unauthorized detail navigation.

Use real local backend responses for authoritative actor/data states. For
otherwise non-deterministic loading, stale, partial, or unavailable states,
browser request interception may delay, abort, or return a contract-valid,
explicitly labelled test projection derived from a captured local response.
Never claim an intercepted state is canonical backend truth and never route
the frontend to a second API server.

At every required width, measure and record:

```text
document.documentElement.scrollWidth
document.documentElement.clientWidth
document.body.scrollWidth
```

There must be no document-level horizontal overflow. Below 768px, suitable
tables must become labelled cards/rows/sheets; explicitly compare 767px with
768px. Verify fixed bottom navigation and safe-area clearance do not obscure
content.

## 6. Accessibility, DOM, console, and network proof

With keyboard-only interaction, prove:

- logical tab order and visible focus;
- accessible names/labels for every interactive control;
- detail drawer/sheet focus entry;
- focus containment where appropriate;
- Escape/close behavior;
- focus return to the invoking control;
- no keyboard trap; and
- route/deep-link behavior remains operable.

Run Axe or an equivalent automated accessibility scan for the ready Owner page
and every materially different responsive/dialog state. Record violations by
severity. Any Payouts-attributable serious or critical violation fails the
gate.

Inspect rendered DOM text/attributes, console, and network evidence. Prove:

- protected financial data does not render before authorization resolves;
- the browser performs no money or payment-due-date calculation;
- no fixed 30/70 or TDS claim appears;
- no synthetic invoice, tax document, provider receipt, or statutory statement
  appears;
- no release, reversal, mark-paid, or retry-with-new-economics control appears;
- no provider ID, account/bank/KYC/tax value, credential, session secret, or raw
  diagnostic appears in the DOM;
- authorized flows have no unexpected Payouts 4xx/5xx;
- unauthorized 4xx remains fail-closed without existence leakage; and
- no Payouts-attributable unexpected console error occurs.

## 7. Fresh V2 evidence package

Preserve the complete V1 defect package unchanged. Create a new report:

```text
docs/ai-collaboration/
brand-payouts-v1-p2-local-runtime-browser-evidence-v2.md
```

Create new supporting evidence under:

```text
docs/ai-collaboration/evidence/
brand-payouts-p2-local-runtime-browser-v2/
```

Include at least:

- a machine-readable evidence index;
- redacted environment/version record;
- migration and database lifecycle record;
- redacted HTTP/RBAC request-response index;
- before/after financial-state hash comparison;
- console and network summaries;
- accessibility scan results;
- viewport/overflow measurements;
- screenshots named by width, actor, and state; and
- shutdown/disposable-resource outcome.

Every evidence row must identify the backend SHA/tree, corrected frontend
SHA/tree, viewport, actor/fixture, state, screenshot reference, network
reference, console result, overflow result, and accessibility/focus result as
applicable.

Do not commit secrets or raw provider-shaped seed values. Sanitize headers,
cookies, JWTs, passwords, credentials, database URLs, machine-local absolute
paths, and raw diagnostics. The package must be sufficient for independent SA
review without rerunning the desktop environment.

## 8. Validation and commit requirements

Before committing evidence:

- verify backend and frontend source worktrees remain clean at the pinned SHAs;
- verify no Prisma schema or migration diff exists;
- verify no provider action occurred;
- verify all processes shut down and disposable resources are removed or
  precisely identified for safe cleanup;
- validate Markdown links and the machine-readable evidence index;
- run `git diff --check` in the authority repository; and
- inspect the complete evidence diff for secret leakage.

Commit and push the V2 evidence package as one descendant of the
authority-branch commit containing this runner prompt. Do not modify the
execution ledger or set P2 acceptance. The Systems Architect will bind the
evidence and checkpoint disposition after review.

## 9. Required return

On complete passing evidence, return only:

```text
BP_P2_LOCAL_RUNTIME_BROWSER_EVIDENCE_COMPLETE

EVIDENCE_COMMIT =
EVIDENCE_TREE =
EVIDENCE_REPORT_PERMALINK =
BACKEND_SHA = 119397ff6836ad12846c1e948409d8d49185c408
BACKEND_TREE = 73521762dfeaf703b301e7a61c17cbda97d797a9
FRONTEND_SHA = 5df18df718e8a69dd22d7c31fab804716d87329a
FRONTEND_TREE = db18346e8471c44b256e96ab39ef55b59ae1380c
SOURCE_CHANGES = NONE
MIGRATIONS_CREATED = NONE
PROVIDER_ACTIONS = NONE
RESULT = PASS
```

For an environment-only blocker, return only:

```text
P2_LOCAL_RUNTIME_BROWSER_ENVIRONMENT_BLOCKED

LAST_COMPLETED_EVIDENCE =
BLOCKER =
WHY_LOCAL_AND_UNAVOIDABLE =
SAFE_RETRY_ACTION =
SOURCE_CHANGES = NONE
MIGRATIONS_CREATED = NONE
PROVIDER_ACTIONS = NONE
```

For the repeated V1 failure or any second genuine source defect, return only:

```text
P2_RUNTIME_BROWSER_CIRCUIT_BREAKER

EVIDENCE_COMMIT =
EVIDENCE_TREE =
EVIDENCE_REPORT_PERMALINK =
AFFECTED_SHA = 5df18df718e8a69dd22d7c31fab804716d87329a
FAILURE_SIGNATURE =
EXACT_REPRODUCTION =
SUSPECTED_SOURCE_FILES =
WHY_ANOTHER_SOURCE_CHANGE_IS_REQUIRED =
SOURCE_CHANGES = NONE
MIGRATIONS_CREATED = NONE
PROVIDER_ACTIONS = NONE
P2_ACCEPTANCE = NOT_SET
```

STOP. Do not begin P3.
