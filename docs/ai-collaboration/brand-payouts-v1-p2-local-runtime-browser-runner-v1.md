# Brand Payouts — P2 Local Runtime and Browser Runner V1

`BRAND_PAYOUTS_P2_LOCAL_RUNTIME_BROWSER_RUNNER_V1`

## 0. Authority and execution mode

This is the complete copy-paste-ready assignment for the local desktop Codex
runner. Read it completely before acting.

Authority:

- Product/SA execution authority: `689feb7a46eb2d52b984ce083be046ac6d38657d`
- Predecessor checkpoint: `BP-P1-BACKEND-READ = ACCEPTED`
- Accepted P1 backend: `60385abbd12d5a363615100c463ac6755ce848ea`
- P2 backend runtime-recovery commit: `119397ff6836ad12846c1e948409d8d49185c408`
- P2 backend runtime-recovery tree: `73521762dfeaf703b301e7a61c17cbda97d797a9`
- P2 frontend candidate: `b69c37bc9c1b1aec0976ab503acbb7274153480d`
- P2 frontend candidate tree: `0eea09c409f84b463ff087aa01a3c85b784f53fc`

Execution mode:

```text
LOCAL_DESKTOP_RUNTIME_AND_BROWSER_EVIDENCE_ONLY
```

This is an execution relay, not a Parent or Product checkpoint. The Systems
Architect reviews and accepts or rejects the returned evidence.

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
required head = b69c37bc9c1b1aec0976ab503acbb7274153480d
required tree = 0eea09c409f84b463ff087aa01a3c85b784f53fc
required ancestor = 323658d4b147b95b5629ff8d91fa90b8fe9077e4
```

Evidence/authority repository:

```text
repository = Piyush1087/dummy_tcs
branch = brand-payouts/v1-execution-ledger
starting head = the commit containing this runner prompt
```

Before runtime work, fetch and verify all three exact remote heads, ancestry,
trees, and clean worktrees. Stop on any mismatch. Do not rebuild P2 from an
older base, amend P0/P1, rewrite history, or merge any branch.

## 2. Bounded scope

Close only the remaining P2 acceptance blocker:

```text
MISSING_LIVE_BROWSER_RESPONSIVE_ACCESSIBILITY_EVIDENCE
```

The backend module-cycle correction is already committed and must be validated
as an input, not redesigned. Do not change backend or frontend source during
this evidence run. Environment-only corrections to local ports, disposable
database setup, temporary fixture scripts, browser automation, and evidence
collection are allowed.

If evidence proves a genuine source defect, do not silently edit it. Preserve
the failure evidence and return `P2_RUNTIME_BROWSER_SOURCE_DEFECT` with the
exact reproduction, affected SHA, suspected source files, and smallest bounded
correction recommendation. The Systems Architect owns correction authorization.

Forbidden:

- Product, API, financial, authorization, notification, or tax semantic changes;
- Prisma schema changes or migration creation;
- Razorpay/provider credential inspection, CLI/API calls, webhooks, Test/Live
  transfers, returns, reversals, or any provider mutation;
- use of a production/shared database;
- production deployment;
- merge to `development`, `main`, or another canonical branch;
- logging or committing passwords, JWTs, cookies, tokens, credentials, raw
  provider diagnostics, or seeded sensitive values;
- starting P3 source work.

Keep Settings as the sole temporary Add funds and Brand Return mutation
surface. `/brand/payouts` remains read-only in this checkpoint.

## 3. Required local topology

Record operating system, CPU architecture, Node, npm, package-manager,
PostgreSQL, browser name/version, and browser automation version.

Use a disposable loopback-only PostgreSQL database. Apply the repository's
currently accepted migrations from an empty database (or document an exact,
equivalent accepted-base clone plus migration verification). Set the database
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
- enough same-timestamp activity to prove stable pagination;
- partial/unavailable source states where browser interception is needed.

Give each interactive actor a repository-supported password auth method using a
temporary seed harness and the backend's canonical password hashing helper.
Use distinct test-only emails, one non-durable test password, and the real
`POST /api/v1/auth/login` browser flow. Do not inject a token into localStorage
or sessionStorage. Redact the password and all session material from evidence.

Build the backend fresh and start `dist/main.js` through the full `AppModule`.
Supply only inert local/test configuration, disable offering refresh and other
optional workers, keep all Razorpay/provider variables absent or empty, and do
not allow startup to reach an external provider. Prove root, liveness, database
health, route mapping, ready/listening, and controlled shutdown.

Build the exact frontend candidate fresh. Start its built preview with
`VITE_API_URL` pointing only to the loopback backend and `VITE_STAGE=local`.
Do not use a mock frontend build.

## 4. Full-AppModule HTTP and RBAC proof

Re-run the existing P2 PostgreSQL HTTP/RBAC matrix against the full built
application, not a bounded Nest test module. Preserve a redacted request/
response index proving:

- V2 media type negotiation succeeds and default/incompatible representation
  behavior remains correct;
- Owner and Finance receive full Product-safe projections;
- Campaign Manager receives zero financial rows under the accepted fail-closed
  scope;
- inactive/no-membership, Creator, and Admin actors fail closed;
- unrelated-Brand list, detail, cursor, and existence probes fail closed;
- runtime response-schema validation passes;
- summary buckets remain separate and source-authoritative;
- activity distinguishes money movement from lifecycle-only information;
- legacy history has no invented payment term, due date, or provider state;
- pagination exposes `as_of`, continuation, page/source completeness, and has
  no duplicates;
- provider IDs, bank/KYC/tax values, credentials, and raw diagnostics are absent;
- reads are side-effect-free and do not provision a vault/provider account;
- no Payouts mutation route or control is introduced;
- no provider invocation occurs.

Snapshot the canonical financial rows before and after all Payouts GETs and
prove byte-equivalent normalized state. Record request counts and every
assertion. Do not preserve Authorization or Cookie header values.

## 5. Real-browser matrix

Use Chromium, Chrome, or Edge through a real browser automation/runtime path at
exact CSS viewport widths:

```text
390px
767px
768px
1440px desktop
```

Record the viewport height used for each width. Capture screenshots and a
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
- refresh restoration;
- direct unauthorized detail navigation.

Use real local backend responses for authoritative actor/data states. For
otherwise non-deterministic loading, stale, partial, or unavailable states,
Playwright/browser request interception may delay, abort, or return a
contract-valid, explicitly labelled test projection derived from a captured
local response. Never claim an intercepted state is canonical backend truth,
and never route the frontend to a second API server.

At each required width, measure and record:

```text
document.documentElement.scrollWidth
document.documentElement.clientWidth
document.body.scrollWidth
```

There must be no document-level horizontal overflow. Below 768px, suitable
tables must become labelled cards/rows/sheets; explicitly compare 767px and
768px. Verify fixed bottom navigation and safe-area clearance do not obscure
content.

## 6. Accessibility, DOM, console, and network proof

With keyboard-only interaction, prove:

- logical tab order and visible focus;
- accessible names/labels for all interactive controls;
- detail drawer/sheet focus entry;
- focus containment where appropriate;
- Escape/close behavior;
- focus return to the invoking control;
- no keyboard trap;
- route/deep-link behavior remains operable.

Run an automated accessibility scan (Axe or equivalent) for the ready Owner
page and each materially different responsive/dialog state. Record violations
by severity and treat any Payouts-attributable serious/critical violation as a
failure.

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
- unauthorized 4xx remains fail-closed without existence leakage;
- no Payouts-attributable unexpected console error occurs.

## 7. Evidence package

Create this report in the authority repository:

```text
docs/ai-collaboration/
brand-payouts-v1-p2-local-runtime-browser-evidence-v1.md
```

Create supporting evidence under:

```text
docs/ai-collaboration/evidence/
brand-payouts-p2-local-runtime-browser-v1/
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
- screenshots with names identifying width, actor, and state;
- shutdown/disposable-resource outcome.

Every evidence row must identify the backend SHA/tree, frontend SHA/tree,
viewport, actor/fixture, state, screenshot reference, network reference,
console result, overflow result, and accessibility/focus result as applicable.

Do not commit secrets or raw provider-shaped seed values. Sanitize headers,
cookies, JWTs, passwords, credentials, database URLs, machine-local absolute
paths, and raw diagnostics. Evidence must be sufficient for independent SA
review without rerunning the desktop environment.

## 8. Validation and commit requirements

Before committing evidence:

- verify the backend and frontend source worktrees remain clean at the pinned
  SHAs;
- verify no Prisma schema or migration diff exists;
- verify no provider action occurred;
- verify all processes shut down and disposable resources are removed or
  precisely identified for safe cleanup;
- validate Markdown links and the machine-readable evidence index;
- run `git diff --check` in the authority repository;
- inspect the complete evidence diff for secret leakage.

Commit and push the evidence package as one descendant of the authority-branch
commit containing this runner prompt. Do not modify the execution ledger or set
P2 acceptance; the Systems Architect will bind the evidence and checkpoint
disposition after review.

## 9. Required return

On complete passing evidence, return only:

```text
BP_P2_LOCAL_RUNTIME_BROWSER_EVIDENCE_COMPLETE

EVIDENCE_COMMIT =
EVIDENCE_TREE =
EVIDENCE_REPORT_PERMALINK =
BACKEND_SHA = 119397ff6836ad12846c1e948409d8d49185c408
BACKEND_TREE = 73521762dfeaf703b301e7a61c17cbda97d797a9
FRONTEND_SHA = b69c37bc9c1b1aec0976ab503acbb7274153480d
FRONTEND_TREE = 0eea09c409f84b463ff087aa01a3c85b784f53fc
SOURCE_CHANGES = NONE
MIGRATIONS_CREATED = NONE
PROVIDER_ACTIONS = NONE
RESULT = PASS
```

For an environment blocker, return only:

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

For a proven source defect, return only the exact
`P2_RUNTIME_BROWSER_SOURCE_DEFECT` report required in section 2.

STOP. Do not begin P3.
