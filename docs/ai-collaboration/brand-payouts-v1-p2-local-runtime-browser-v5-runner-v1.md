# Brand Payouts — P2 Local Runtime and Browser V5 Runner V1

`BRAND_PAYOUTS_P2_LOCAL_RUNTIME_BROWSER_V5_RUNNER_V1`

## 0. Authority and objective

This is the complete copy-paste-ready assignment for the local desktop Codex
runner. Read it completely before acting. Do not combine it with any earlier
chat prompt or reconstruct requirements from conversational memory.

Durable authority and accepted inputs:

- Product/SA execution authority:
  `689feb7a46eb2d52b984ce083be046ac6d38657d`;
- P2 technical-autonomy and activity-identifier amendment:
  `7f03411b9940ab16579cd2e176ac9e721edee832`;
- accepted predecessor: `BP-P1-BACKEND-READ = ACCEPTED`;
- P2 backend runtime-recovery commit:
  `119397ff6836ad12846c1e948409d8d49185c408`;
- P2 V4 circuit-breaker evidence commit:
  `09febd240b56c1b9d53ddb5417e57a06a45ea8fb`;
- P2 V4 evidence tree:
  `bb35b5c78728932128cc2d0e3ebe37e67415c0ea`;
- P2 activity-detail source correction commit:
  `c3ca6ff26d568915276e13140335f5811bb1cc50`;
- P2 activity-detail source correction tree:
  `123a037005608c7568155f128656a360b32d7c49`.

V4 completed 162 viewport-state scans with zero serious or critical Axe
findings and no document-level horizontal overflow. It also reran the full
178-assertion HTTP/RBAC lane, validated 31 live responses, and proved read
purity across 20 canonical financial models. It stopped because activity links
used the display/support `public_reference`, while the accepted detail route
requires the stable `activity_id`. Owner and Finance therefore received 404
from the link even though the same records returned 200 by canonical activity
ID.

The Systems Architect has applied the exact correction authorized by
`7f03411b9940ab16579cd2e176ac9e721edee832`. The correction changes one
production expression in `PayoutsActivity.tsx` so the route uses
`item.activity_id`; visible and accessible copy continues to use
`item.public_reference`. A regression deliberately makes the two identifiers
different and proves both desktop-table and mobile-card links route by the
activity ID. The corrected source passes 24/24 targeted Payouts tests, 29/29
combined focused tests, 879/879 full frontend tests, typecheck, changed-file
lint and formatting, diff check, and production build. Repository-wide lint
remains at the unchanged 26-error/13-warning baseline, wholly outside the
two-file correction scope.

Execution mode:

```text
LOCAL_DESKTOP_RUNTIME_AND_COMPLETE_BROWSER_EVIDENCE_ONLY
```

Your objective is to create the first complete passing P2 V5 runtime,
responsive, keyboard, accessibility, identifier-integration, and read-purity
evidence package. This is an evidence relay, not checkpoint acceptance. Do not
accept P2, edit the execution ledger, or begin P3. The Systems Architect will
review the returned immutable evidence, self-decide P2, ledger-bind it, and
continue when every gate passes.

## 1. Immutable repository heads

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
required head = c3ca6ff26d568915276e13140335f5811bb1cc50
required tree = 123a037005608c7568155f128656a360b32d7c49
required parent = 7ff0a39470316215496dece91f717593e98c89b5
required base ancestor = 323658d4b147b95b5629ff8d91fa90b8fe9077e4
```

Evidence/authority repository:

```text
repository = Piyush1087/dummy_tcs
branch = brand-payouts/v1-execution-ledger
required V4 evidence ancestor = 09febd240b56c1b9d53ddb5417e57a06a45ea8fb
required amendment ancestor = 7f03411b9940ab16579cd2e176ac9e721edee832
starting head = the exact commit containing this runner assignment
```

Before runtime work, fetch and verify all three exact remote heads, trees,
required ancestry, and clean worktrees. Verify the frontend diff from
`7ff0a39470316215496dece91f717593e98c89b5` to
`c3ca6ff26d568915276e13140335f5811bb1cc50` changes exactly:

- `src/features/brand-payouts/components/PayoutsActivity.tsx`; and
- `src/features/brand-payouts/brand-payouts-p2.test.ts`.

Verify that the only production change routes activity detail by
`item.activity_id`, while display and `aria-label` keep
`item.public_reference`. Stop on a source/head/tree/scope mismatch. Do not
rebuild P2, reopen P0/P1, amend/rebase/rewrite accepted history, merge a
branch, or modify either source repository.

Preserve V1 through V4 evidence byte-for-byte. V5 is additive.

## 2. Hard scope

Close exactly:

```text
P2_ACTIVITY_DETAIL_IDENTIFIER_V5_INTEGRATION_PROOF
P2_REMAINING_COMPLETE_BROWSER_MATRIX
```

Backend and frontend source are immutable. Environment-only work for local
ports, disposable database setup, deterministic test fixtures, temporary
browser/evidence scripts, and evidence collection is permitted. Do not commit
temporary runtime resources to either source repository.

Forbidden:

- backend/frontend source, dependency, lockfile, generated-source, or config
  changes;
- Product, API, financial, RBAC, authorization, support, notification, tax,
  document, or terminology changes;
- Prisma schema changes or migration creation/application beyond applying the
  already committed migrations to the disposable database;
- Razorpay/provider secret inspection, CLI/API calls, webhooks, Test/Live
  transfers, returns, reversals, or any provider action;
- production/shared database use, deployment, or canonical branch merge;
- browser token injection, patched built bundles, CSS/style injection,
  disabled accessibility rules, or a second API server;
- logging or committing passwords, tokens, JWTs, cookies, credentials,
  database URLs, raw diagnostics, or sensitive fixture values;
- execution-ledger edits, P2 acceptance, or P3 work.

Settings remains the sole temporary Add funds and Brand Return mutation
surface. `/brand/payouts` remains read-only. Never invoke Add funds or Brand
Return during evidence collection.

If a source defect appears, finish the bounded diagnostic and accessibility
sweep needed to identify all reproductions of that signature, preserve
sanitized evidence, and return the circuit breaker in section 11. Do not
change source. A numeric correction count alone is not a stop reason.

## 3. Runtime topology

Record OS, CPU architecture, Node, npm, package manager, PostgreSQL, browser,
browser automation, and Axe versions.

Use a fresh disposable loopback-only PostgreSQL database. From empty, apply
and verify all repository-committed migrations. Set session timezone to UTC.
Do not create or edit a migration.

Seed deterministic test-only fixtures for:

- active Brand Owner and Finance Admin;
- active Campaign Manager;
- inactive/no-membership actors;
- unrelated-Brand Owner;
- direct Creator and Admin without Brand financial membership;
- empty/new Brand;
- authoritative vault and ledger rows;
- at least one lifecycle-only activity and one authoritative money-movement
  activity whose `activity_id` and `public_reference` deliberately differ;
- legacy-unreconciled obligation;
- stable same-timestamp pagination with enough rows to exhaust both activity
  and obligation continuations; and
- partial/unavailable/loading/stale states where interception is necessary.

Use the normal password form and real `POST /api/v1/auth/login` with canonical
password hashing. Never inject browser tokens. Use one random non-durable test
password and redact all credentials/session material.

Build and start the pinned backend through `dist/main.js` and the complete
`AppModule`. Keep optional workers inert, provider variables absent, and
network/provider access blocked. Prove root, liveness, database health,
Payouts route mapping, ready/listening state, and controlled shutdown.

Build the exact frontend with:

```text
VITE_API_URL=http://127.0.0.1:<backend-port>
VITE_STAGE=local
```

Serve the built output with Vite preview on loopback. Do not use a dev server,
mock build, hostname workaround, bundle patch, or second API server. Prove the
earlier production-build localhost bootstrap defect does not recur.

## 4. V4 integrity and HTTP/runtime reuse boundary

Verify the V4 Git ancestry, machine-readable index, hashes, report, and
supporting artifacts. V4's full HTTP/RBAC, schema, and read-purity evidence may
be reused by reference only after all of these are proven:

- backend SHA/tree are unchanged;
- the corrected frontend diff is restricted to the link expression and test;
- frontend API client, schemas, route guard, authorization handling, and
  financial presentation logic are byte-identical to V4;
- a fresh smoke lane proves real login, exact V2 negotiation, Owner/Finance
  reads, Campaign Manager zero-row scope, unauthorized/cross-Brand fail-closed
  behavior, GET-only Payouts routes, successful lifecycle and money-movement
  activity details by `activity_id`, and unchanged before/after financial-state
  hashes.

If any reuse condition fails, rerun the complete 178-assertion HTTP/RBAC lane,
31-response frontend schema validation, and 20-model read-purity comparison.
Never describe reused evidence as freshly rerun. Record `REUSED_WITH_FRESH_SMOKE`
or `RERUN` precisely.

## 5. Required identifier integration proof

Using real backend responses and deliberately different identifier values,
prove separately for one lifecycle-only activity and one authoritative
money-movement activity:

```text
list renders public_reference
link URL/query uses activity_id
keyboard and pointer activation request activity_id
detail endpoint returns 200
ready detail renders without raw/provider diagnostics
refresh restores the same detail
browser Back restores the originating list state
```

Capture the list payload's redacted identifier pair, rendered public
reference, link href, network request path, HTTP result, ready-detail DOM,
refresh result, Back result, focus observations, and screenshots. Prove that
no activity-detail request uses `public_reference`. Cover the separately
rendered desktop-table and mobile-card link paths at their applicable widths.

An activity-ID diagnostic typed directly into the URL is not sufficient. The
proof must originate from the committed UI link.

## 6. Complete browser actor/state matrix

Use Chromium, Chrome, or Edge through real browser automation at exactly:

```text
390px
767px
768px
1440px desktop
```

Record viewport height. Capture machine-readable results and screenshots for
every materially distinct actor/state, including:

- unauthenticated route entry and normal login;
- Owner and Finance Admin full projections;
- Campaign Manager read-only/zero-row projection;
- inactive membership, no membership, unrelated Brand, Creator, and Admin
  fail-closed behavior;
- initial/loading and independently loading sections;
- partial source coverage;
- stale last-known state and refreshing;
- empty/new Brand;
- ready overview;
- unavailable backend/section dependency;
- legacy-unreconciled obligation;
- obligation detail and both activity-detail categories;
- invalid and unauthorized direct-detail navigation;
- pagination/load-more, stable continuation, and fully exhausted activity and
  obligation lists;
- applicable Settings compatibility/deep-link behavior;
- browser Back restoration and refresh restoration.

Use the single real local backend for authoritative actor/data states. Browser
interception may only delay, abort, or return a contract-valid, explicitly
labelled test projection derived from a captured local response for otherwise
non-deterministic loading, stale, unavailable, or Settings-link applicability
states. A Settings-link interception may change only the response metadata
needed to make the existing compatibility link render; label it non-
authoritative. Follow the link to the real Settings route, prove the expected
destination, and do not activate Add funds or Brand Return. Never call an
intercepted state canonical truth and never use a second API server.

At every viewport/state record:

```text
document.documentElement.scrollWidth
document.documentElement.clientWidth
document.body.scrollWidth
```

Require no document-level horizontal overflow. Confirm mobile cards/rows below
768px, desktop tables at and above 768px, the exact 767/768 boundary, and
unobscured content after list exhaustion. Measure bottom-navigation and safe-
area clearance for the final item/control at 390 and 767px and record desktop
footer/viewport clearance at 768 and 1440px.

## 7. Keyboard, focus, and accessibility

With keyboard-only interaction, prove:

- logical tab order and visible focus;
- accessible name for every control;
- Enter/Space activation where appropriate;
- both activity links open ready detail by stable activity ID;
- detail focus entry and recorded active element;
- Back-to-Payouts behavior;
- browser Back and refresh restoration;
- focus return where required by the implemented interaction model;
- Escape behavior where a dismissible surface exists;
- no keyboard trap; and
- operable Settings deep link.

If the SPA does not programmatically move or restore focus, record the exact
active element and assess it truthfully; do not fabricate a pass. A reproducible
Payouts-owned accessibility failure is a circuit breaker.

Run Axe 4.x or equivalent fresh against the corrected frontend SHA at every
required width and every materially distinct overview, detail, pagination,
Settings-link, loading, partial, empty, unavailable, denial, and action state.
Require:

```text
SERIOUS_AXE_FINDINGS = 0
CRITICAL_AXE_FINDINGS = 0
```

Record every non-blocking finding by severity, selector, actor/state, viewport,
and ownership. Do not hide the previously observed moderate nested/duplicate
main-landmark findings; show whether they reproduce. Explicitly recheck
eyebrow, Refresh, both Load more buttons, retries, and Back to Payouts in both
detail types at all applicable widths. Record computed foreground/background
values for the previously corrected contrast selectors.

## 8. DOM, network, console, and Product truth

Prove from rendered DOM and network/console evidence:

- no protected financial data renders before authorization resolves;
- no browser-authored amount or due-date calculation occurs;
- no fixed 30/70 or TDS claim appears;
- no synthetic invoice, tax document, provider receipt, or statutory statement
  appears;
- no release, reversal, mark-paid, or caller-economics control appears;
- no provider ID, bank/KYC/tax value, credential, session secret, or raw
  diagnostic appears in the DOM;
- authorized Payouts flows have no unexpected 4xx/5xx;
- unauthorized and cross-Brand requests fail closed without existence leakage;
- no Payouts-attributable unexpected console exception occurs;
- `/brand/payouts` issues no mutation request; and
- Add funds and Brand Return remain available only on the Settings compatibility
  surface and are not invoked.

Record intentionally blocked external-font failures separately; they are not
Payouts defects by themselves and do not invalidate computed-color evidence.

## 9. Fresh V5 evidence package

Create:

```text
docs/ai-collaboration/brand-payouts-v1-p2-local-runtime-browser-evidence-v5.md
```

Create supporting evidence under:

```text
docs/ai-collaboration/evidence/brand-payouts-p2-local-runtime-browser-v5/
```

Include at least:

- machine-readable index with SHA-256 hashes;
- immutable source/authority binding and complete correction-diff proof;
- environment, fresh builds, and version records;
- database/migration lifecycle;
- full-AppModule startup/health/shutdown;
- V4 evidence integrity and exact reuse/rerun classification;
- fresh smoke or full HTTP/RBAC, schema, and financial-purity results;
- lifecycle and money-movement activity identifier integration proof;
- complete actor/state/viewport matrix;
- complete fresh accessibility matrix and contrast regression;
- keyboard/focus/Back/refresh results;
- pagination exhaustion and continuation proof;
- Settings compatibility destination proof;
- overflow, breakpoint, bottom-navigation, and safe-area measurements;
- console/network and DOM/Product-truth summaries;
- screenshots named by width, actor, and state; and
- disposable-resource cleanup outcome.

Every browser matrix row must identify pinned SHAs/trees, viewport,
actor/fixture, state, authoritative versus intercepted source, screenshot,
network record, console result, overflow result, Axe result, and keyboard/focus
result where applicable.

Sanitize headers, cookies, tokens, passwords, credentials, database URLs,
machine-local paths, and raw diagnostics. The V5 package must allow the Systems
Architect to decide every P2 gate without rerunning the desktop environment.

## 10. Validation, commit, and push

Before committing:

- prove backend/frontend worktrees remain clean at the pinned SHAs;
- prove no Prisma schema/migration diff and no provider action;
- close all owned processes and remove all disposable resources;
- validate Markdown links, JSON, index hashes, and evidence completeness;
- run `git diff --check` in the authority repository;
- inspect the full evidence diff for sensitive values;
- prove V1 through V4 evidence, source repositories, and the execution ledger
  are unchanged; and
- prove no P3 work exists.

Commit and push exactly the V5 report and V5 evidence directory as one fast-
forward descendant of the authority commit containing this prompt. Do not edit
the ledger or set P2 acceptance.

## 11. Required return

On complete passing evidence, return only:

```text
BP_P2_LOCAL_RUNTIME_BROWSER_EVIDENCE_COMPLETE

EVIDENCE_VERSION = V5
EVIDENCE_COMMIT =
EVIDENCE_TREE =
EVIDENCE_REPORT_PERMALINK =
EVIDENCE_INDEX_PATH = docs/ai-collaboration/evidence/brand-payouts-p2-local-runtime-browser-v5/index.json
BACKEND_SHA = 119397ff6836ad12846c1e948409d8d49185c408
BACKEND_TREE = 73521762dfeaf703b301e7a61c17cbda97d797a9
FRONTEND_SHA = c3ca6ff26d568915276e13140335f5811bb1cc50
FRONTEND_TREE = 123a037005608c7568155f128656a360b32d7c49
V4_HTTP_EVIDENCE = REUSED_WITH_FRESH_SMOKE | RERUN
IDENTIFIER_PROOF = PASS_LIFECYCLE_AND_MONEY_MOVEMENT
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
P2_LOCAL_RUNTIME_BROWSER_ENVIRONMENT_BLOCKED

EVIDENCE_VERSION = V5
LAST_COMPLETED_EVIDENCE =
BLOCKER =
WHY_LOCAL_AND_UNAVOIDABLE =
SAFE_RETRY_ACTION =
SOURCE_CHANGES = NONE
MIGRATIONS_CREATED = NONE
PROVIDER_ACTIONS = NONE
```

For a reproducible source defect, commit bounded comprehensive failure
evidence and return only:

```text
P2_RUNTIME_BROWSER_CIRCUIT_BREAKER

EVIDENCE_VERSION = V5
EVIDENCE_COMMIT =
EVIDENCE_TREE =
EVIDENCE_REPORT_PERMALINK =
AFFECTED_SHA = c3ca6ff26d568915276e13140335f5811bb1cc50
FAILURE_SIGNATURES =
EXACT_REPRODUCTION =
COMPLETE_BOUNDED_ACCESSIBILITY_SWEEP =
SUSPECTED_SOURCE_FILES =
WHY_SOURCE_CHANGE_IS_REQUIRED =
SOURCE_CHANGES = NONE
MIGRATIONS_CREATED = NONE
PROVIDER_ACTIONS = NONE
P2_ACCEPTANCE = NOT_SET
```

STOP. Do not begin P3.
