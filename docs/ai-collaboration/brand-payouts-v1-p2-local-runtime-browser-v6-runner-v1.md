# Brand Payouts — P2 Local Runtime and Browser V6 Runner V1

`BRAND_PAYOUTS_P2_LOCAL_RUNTIME_BROWSER_V6_RUNNER_V1`

## 0. Authority and objective

This is the complete copy-paste-ready assignment for the local desktop Codex
runner. Read it completely before acting. Do not combine it with an earlier
chat prompt or infer omitted requirements from memory.

Durable authority and accepted inputs:

- Product/SA execution authority:
  `689feb7a46eb2d52b984ce083be046ac6d38657d`;
- P2 technical-autonomy amendment:
  `7f03411b9940ab16579cd2e176ac9e721edee832`;
- accepted predecessor: `BP-P1-BACKEND-READ = ACCEPTED`;
- P2 backend runtime-recovery commit:
  `119397ff6836ad12846c1e948409d8d49185c408`;
- P2 V5 circuit-breaker evidence commit:
  `bac276a92141474d191c3f9c1cf4e2a0c58543ac`;
- P2 V5 evidence tree:
  `918d692347ce79359f60932eb14c5c8f082cb864`;
- P2 pagination-restoration correction commit:
  `ec412013cb7eeaa119a7cded6fb7f5ef0c40df03`;
- P2 pagination-restoration correction tree:
  `61c9103a32c7aca494f2ef13b384e843f460e84f`.

V5 proved that the activity identifier correction works through real UI links
for lifecycle and money-movement activity at every required width. It reran
the complete 178-assertion HTTP/RBAC lane, validated 31 live responses, proved
read purity across 20 canonical financial models, and completed 164 fresh Axe
scans with zero serious or critical findings and no document-level horizontal
overflow.

V5 then reproduced a separate defect in all 16 exhausted-list combinations:
after loading all 56 activities or all 31 obligations, opening detail and
using browser Back or Back to Payouts returned only the initial 25 rows and
made Load more reappear. The overview component owned the pagination hook and
was unmounted whenever the stable workspace switched to detail, discarding the
merged continuation state.

Under the delegated bounded-technical-correction authority in
`7f03411b9940ab16579cd2e176ac9e721edee832`, the Systems Architect corrected
the ownership boundary. Commit `ec412013cb7eeaa119a7cded6fb7f5ef0c40df03`
moves `useBrandPayoutsWorkspace()` to the stable `BrandPayoutsWorkspace`
component and passes its state to the overview branch. It changes no cursor,
request, response, route identifier, Product state, financial meaning, RBAC,
schema, migration, provider behavior, or persistent browser storage. The
targeted regression expands both activity and obligation pages, opens detail,
uses the in-app and history return paths, and proves continuation rows persist
without a new initial-page request.

The correction already passes 25/25 targeted Payouts tests, 30/30 combined
focused tests, 880/880 full frontend tests, typecheck, changed-file lint and
formatting, diff check, and production build. Repository-wide lint remains at
the accepted 26-error/13-warning baseline, entirely outside the two changed
files.

Execution mode:

```text
LOCAL_DESKTOP_RUNTIME_AND_COMPLETE_BROWSER_EVIDENCE_ONLY
```

Your objective is to produce the first complete passing P2 runtime,
responsive, keyboard, accessibility, pagination-restoration, identifier, and
read-purity evidence package. This is an evidence relay, not checkpoint
acceptance. Do not edit the ledger, accept P2, or begin P3. The Systems
Architect will review the immutable V6 package, self-decide P2, ledger-bind it,
and continue only when every gate passes.

## 1. Immutable repository heads

Backend:

```text
repository = Piyush1087/creator-commerce-backend-v2-clone
branch = brand-payouts/v1-backend
required head = 119397ff6836ad12846c1e948409d8d49185c408
required tree = 73521762dfeaf703b301e7a61c17cbda97d797a9
required accepted ancestor = 60385abbd12d5a363615100c463ac6755ce848ea
```

Frontend:

```text
repository = Piyush1087/creator-commerce-frontend-v2-clone
branch = brand-payouts/v1-frontend
required head = ec412013cb7eeaa119a7cded6fb7f5ef0c40df03
required tree = 61c9103a32c7aca494f2ef13b384e843f460e84f
required parent = c3ca6ff26d568915276e13140335f5811bb1cc50
required base ancestor = 323658d4b147b95b5629ff8d91fa90b8fe9077e4
```

Evidence/authority repository:

```text
repository = Piyush1087/dummy_tcs
branch = brand-payouts/v1-execution-ledger
required V5 evidence ancestor = bac276a92141474d191c3f9c1cf4e2a0c58543ac
required amendment ancestor = 7f03411b9940ab16579cd2e176ac9e721edee832
starting head = the exact commit containing this V6 runner assignment
```

Before runtime work, fetch and verify all three exact remote heads, trees,
required ancestry, and clean worktrees. Verify the frontend diff from
`c3ca6ff26d568915276e13140335f5811bb1cc50` to
`ec412013cb7eeaa119a7cded6fb7f5ef0c40df03` changes exactly:

- production:
  `src/features/brand-payouts/components/BrandPayoutsWorkspace.tsx`;
- regression:
  `src/features/brand-payouts/brand-payouts-p2.test.ts`.

Verify that the production delta only lifts the existing workspace hook to the
stable route component and passes its unchanged return value into the overview
branch. Stop on any source/head/tree/scope mismatch. Do not rebuild P2, reopen
P0/P1, amend/rebase/rewrite accepted history, merge a branch, or modify either
source repository.

Preserve V1 through V5 evidence byte-for-byte. V6 is additive.

## 2. Hard scope and source immutability

Close exactly:

```text
P2_PAGINATED_LIST_BACK_RESTORATION_LOSS
P2_REMAINING_COMPLETE_BROWSER_MATRIX
```

Backend and frontend source are immutable. Environment-only work for local
ports, disposable database setup, deterministic fixtures, temporary browser/
evidence scripts, and evidence collection is permitted. Do not commit runtime
resources to either source repository.

Forbidden:

- backend/frontend source, dependency, lockfile, generated-source, CSS, or
  configuration changes;
- Product, API, financial, RBAC, authorization, support, notification, tax,
  document, or terminology changes;
- Prisma schema changes or migration creation;
- Razorpay/provider secret inspection, CLI/API calls, webhooks, Test/Live
  transfers, returns, reversals, or any provider action;
- production/shared database use, deployment, or canonical branch merge;
- browser token injection, built-bundle/style patches, scanner-rule disabling,
  or a second API server;
- logging or committing passwords, JWTs, cookies, tokens, credentials,
  database URLs, raw provider diagnostics, or sensitive fixture values;
- execution-ledger edits, P2 acceptance, or P3 work.

Settings remains the sole temporary Add funds and Brand Return mutation
surface. `/brand/payouts` remains read-only. Never invoke a financial mutation.

If a reproducible source defect appears, finish the bounded diagnostics and
accessibility sweep needed to establish that signature, preserve sanitized
evidence, and return the circuit breaker in section 11. Do not change source.
A numeric correction count alone is not a stop reason.

## 3. Runtime topology

Record OS, CPU architecture, Node, npm, package manager, PostgreSQL, browser,
browser automation, and Axe versions.

Use a fresh disposable loopback-only PostgreSQL database with UTC sessions.
From empty, apply and verify all repository-committed migrations. Applying the
existing migrations to this disposable database is required; creating or
editing a migration is forbidden.

Seed deterministic test-only fixtures for:

- active Brand Owner and Finance Admin;
- active Campaign Manager;
- inactive/no-membership actors;
- unrelated-Brand Owner;
- direct Creator and Admin without Brand financial membership;
- empty/new Brand;
- authoritative vault and ledger rows;
- lifecycle-only and authoritative money-movement activities whose
  `activity_id` and `public_reference` deliberately differ;
- legacy-unreconciled obligation;
- stable same-timestamp pagination with 56 activities and at least 31
  obligations so both lists can be exhausted; and
- partial/unavailable/loading/stale states where interception is necessary.

Use the normal password form and real `POST /api/v1/auth/login` with canonical
password hashing. Never inject browser tokens. Use one random non-durable test
password and redact all credentials/session material.

Build and start the pinned backend through `dist/main.js` and the complete
`AppModule`. Keep optional workers inert, provider variables absent, and
network/provider access blocked. Prove root, liveness, database health,
Payouts route mapping, ready/listening state, and controlled shutdown.

Build the pinned frontend with:

```text
VITE_API_URL=http://127.0.0.1:<backend-port>
VITE_STAGE=local
```

Serve only the built output with Vite preview on loopback. Do not use a dev
server, mock build, hostname workaround, bundle patch, or second API server.
Prove the former local-preview bootstrap defect does not recur.

## 4. V5 integrity and HTTP/runtime reuse boundary

Verify the V5 Git ancestry, machine-readable index, all 197 indexed artifact
hashes, report, and supporting evidence. V5's full HTTP/RBAC, schema, and
read-purity evidence may be reused by reference only after all these conditions
are proven:

- backend SHA/tree are unchanged;
- the frontend diff is restricted to the stable hook-ownership correction and
  its test;
- frontend API client, response schemas, route identifiers, authorization
  projection, cursor merge functions, financial formatting, and CSS are byte-
  identical to V5;
- a fresh smoke lane proves real login, exact V2 negotiation, Owner/Finance
  reads, Campaign Manager zero-row scope, unauthorized/cross-Brand fail-closed
  behavior, GET-only Payouts routes, successful activity and obligation detail
  reads, stable continuation, and unchanged financial-state hashes.

If any reuse condition fails, rerun the complete 178-assertion HTTP/RBAC lane,
31-response frontend schema validation, and 20-model read-purity comparison.
Never describe reused evidence as freshly rerun. Record exactly
`REUSED_WITH_FRESH_SMOKE` or `RERUN`.

## 5. Mandatory pagination-restoration regression

Reproduce the V5 setup and prove all **16** combinations pass after loading has
settled:

| List | Return method | Required widths |
| --- | --- | --- |
| 56-row activity list | browser Back | 390, 767, 768, 1440 |
| 56-row activity list | Back to Payouts | 390, 767, 768, 1440 |
| 31-row obligation list | browser Back | 390, 767, 768, 1440 |
| 31-row obligation list | Back to Payouts | 390, 767, 768, 1440 |

For every row:

1. begin from a clean authenticated overview;
2. load every continuation until the relevant Load more control disappears;
3. capture ordered stable identifiers, row count, cursor/control state, scroll
   position, and screenshot;
4. open a detail from the expanded portion using the committed UI link;
5. wait for ready detail and a successful real detail request;
6. use the named return method without a hard reload;
7. wait for the overview and list loading indicators to settle;
8. prove the complete ordered identifier set and exhausted state match the
   pre-detail snapshot;
9. prove the initial page was not re-requested as part of that return; and
10. capture the restored screenshot, focus state, scroll state, network, Axe,
    console, overflow, and safe-area measurements.

Do not treat a transient React frame as success. The comparison must occur
after all list loading placeholders are absent plus a small deterministic
settlement guard. Do not type a diagnostic detail URL. Test desktop-table and
mobile-card entry paths at their applicable breakpoints.

Also retain the V5 identifier proof for one lifecycle activity and one
money-movement activity: visible/accessibility copy uses `public_reference`,
the href and detail request use the different `activity_id`, detail returns
200, detail refresh preserves identity, and no request uses the public
reference as route identity.

## 6. Complete browser actor/state matrix

Use Chromium, Chrome, or Edge through real browser automation at exactly:

```text
390px
767px
768px
1440px desktop
```

Record viewport height. Complete—not sample—the P2 actor/state matrix:

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
- pagination/load-more, stable continuation, fully exhausted lists, and the
  complete restoration matrix in section 5;
- Settings compatibility/deep-link behavior;
- detail refresh and browser/in-app Back behavior.

Use the single real local backend for authoritative actor/data states. Browser
interception may only delay, abort, or return a contract-valid, explicitly
labelled test projection derived from a captured local response for otherwise
non-deterministic loading, stale, unavailable, or Settings-link applicability
states. A Settings-link interception may change only the response metadata
needed to render the existing compatibility link; label it non-authoritative.
Follow that link to the real Settings route and prove the expected destination.
Do not activate Add funds or Brand Return. Never call intercepted state
canonical truth and never use a second API server.

At every viewport/state record:

```text
document.documentElement.scrollWidth
document.documentElement.clientWidth
document.body.scrollWidth
```

Require no document-level horizontal overflow. Confirm mobile cards/rows below
768px, desktop tables at and above 768px, and the exact 767/768 boundary.
Complete the previously unfinished scrolled-to-bottom workflow: prove the final
row/control remains unobscured by mobile navigation and safe-area padding at
390/767px, and record footer/viewport clearance at 768/1440px.

## 7. Keyboard, focus, and accessibility

With keyboard-only interaction, prove:

- logical tab order and visible focus;
- accessible name for every control;
- Enter/Space activation where appropriate;
- expanded-list detail entry through mobile-card and desktop-table links;
- detail focus entry and exact active element;
- Back to Payouts and browser Back behavior;
- focus return or a truthful documented assessment where the current page-
  navigation model does not promise restoration;
- refresh restoration;
- Escape behavior where a dismissible surface exists;
- no keyboard trap; and
- operable Settings compatibility link.

V5 observed BODY as active on detail entry and did not claim a focus-return
pass. V6 must complete that assessment rather than silently inheriting or
fabricating it. If this is a Payouts-owned accessibility failure under the
accepted interaction semantics, stop with precise evidence. If it is a
non-blocking page-navigation observation, record the reasoning and actual
active elements.

Run Axe 4.x or equivalent fresh against the corrected frontend SHA at every
required width and materially distinct overview, detail, pagination, Settings-
link, loading, partial, empty, unavailable, denial, and action state. Require:

```text
SERIOUS_AXE_FINDINGS = 0
CRITICAL_AXE_FINDINGS = 0
```

Record every other finding by severity, selector, actor/state, viewport, and
ownership. Do not hide the known moderate nested/duplicate-main findings;
state whether they reproduce. Recheck eyebrow, Refresh, both Load more
buttons, retries, and Back to Payouts in both detail types. Record computed
foreground/background values for previously corrected contrast selectors.

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
- unauthorized/cross-Brand requests fail closed without existence leakage;
- no Payouts-attributable unexpected console exception occurs;
- `/brand/payouts` issues no mutation request; and
- Add funds and Brand Return remain available only on Settings and are not
  invoked.

Because the hook now lives at the stable route component, record the network
behavior for direct detail navigation and prove that any background list reads
remain server-authorized, redacted, GET-only, non-rendered while detail is
active, and financially pure. Treat unexpected or cross-Brand exposure as a
security circuit breaker.

Record intentionally blocked external-font failures separately; they are not
Payouts defects by themselves and do not invalidate computed-color evidence.

## 9. Fresh V6 evidence package

Create:

```text
docs/ai-collaboration/brand-payouts-v1-p2-local-runtime-browser-evidence-v6.md
```

Create supporting evidence under:

```text
docs/ai-collaboration/evidence/brand-payouts-p2-local-runtime-browser-v6/
```

Include at least:

- machine-readable index with SHA-256 hashes;
- immutable authority/source binding and complete correction-diff proof;
- environment, version, and fresh-build records;
- database/migration lifecycle;
- full-AppModule startup/health/shutdown;
- V5 evidence integrity and exact reuse/rerun classification;
- fresh smoke or full HTTP/RBAC, schema, and financial-purity results;
- all 16 settled pagination-restoration results;
- lifecycle and money-movement identifier integration proof;
- complete actor/state/viewport browser matrix;
- complete fresh accessibility matrix and contrast regression;
- keyboard/focus/Back/refresh results and assessment;
- pagination exhaustion, stable continuation, and no-initial-refetch proof;
- Settings compatibility destination proof;
- overflow, breakpoint, bottom-navigation, and safe-area measurements;
- console/network and DOM/Product-truth summaries;
- screenshots named by width, actor, and state; and
- disposable-resource cleanup outcome.

Every matrix row must identify pinned SHAs/trees, viewport, actor/fixture,
state, authoritative versus intercepted source, screenshot, network record,
console result, overflow result, Axe result, and keyboard/focus result where
applicable.

Sanitize headers, cookies, tokens, passwords, credentials, database URLs,
machine-local paths, and raw diagnostics. The V6 package must let the Systems
Architect decide every P2 gate without rerunning the desktop environment.

## 10. Validation, commit, and push

Before committing:

- prove backend/frontend worktrees remain clean at pinned SHAs;
- prove no Prisma schema/migration diff and no provider action;
- close all owned processes and remove every disposable resource;
- validate Markdown links, JSON, index hashes, and evidence completeness;
- run `git diff --check` in the authority repository;
- inspect the whole evidence diff for sensitive values;
- prove V1 through V5 evidence, source repositories, and the execution ledger
  are unchanged; and
- prove no P3 work exists.

Commit and push exactly the V6 report and V6 evidence directory as one fast-
forward descendant of the authority commit containing this prompt. Do not edit
the ledger or set P2 acceptance.

## 11. Required return

On complete passing evidence, return only:

```text
BP_P2_LOCAL_RUNTIME_BROWSER_EVIDENCE_COMPLETE

EVIDENCE_VERSION = V6
EVIDENCE_COMMIT =
EVIDENCE_TREE =
EVIDENCE_REPORT_PERMALINK =
EVIDENCE_INDEX_PATH = docs/ai-collaboration/evidence/brand-payouts-p2-local-runtime-browser-v6/index.json
BACKEND_SHA = 119397ff6836ad12846c1e948409d8d49185c408
BACKEND_TREE = 73521762dfeaf703b301e7a61c17cbda97d797a9
FRONTEND_SHA = ec412013cb7eeaa119a7cded6fb7f5ef0c40df03
FRONTEND_TREE = 61c9103a32c7aca494f2ef13b384e843f460e84f
V5_HTTP_EVIDENCE = REUSED_WITH_FRESH_SMOKE | RERUN
PAGINATION_RESTORATION = PASS_16_OF_16
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

EVIDENCE_VERSION = V6
LAST_COMPLETED_EVIDENCE =
BLOCKER =
WHY_LOCAL_AND_UNAVOIDABLE =
SAFE_RETRY_ACTION =
SOURCE_CHANGES = NONE
MIGRATIONS_CREATED = NONE
PROVIDER_ACTIONS = NONE
```

For a reproducible source or security defect, commit bounded comprehensive
failure evidence and return only:

```text
P2_RUNTIME_BROWSER_CIRCUIT_BREAKER

EVIDENCE_VERSION = V6
EVIDENCE_COMMIT =
EVIDENCE_TREE =
EVIDENCE_REPORT_PERMALINK =
AFFECTED_SHA = ec412013cb7eeaa119a7cded6fb7f5ef0c40df03
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
