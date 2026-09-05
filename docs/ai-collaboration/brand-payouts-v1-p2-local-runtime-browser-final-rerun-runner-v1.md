# Brand Payouts — P2 Local Runtime and Browser Final Rerun Runner V1

`BRAND_PAYOUTS_P2_LOCAL_RUNTIME_BROWSER_FINAL_RERUN_RUNNER_V1`

## 0. Authority and objective

This is the complete copy-paste-ready assignment for the local desktop Codex
runner. Read it completely before acting. Do not rely on an earlier chat prompt
or reconstruct omitted instructions from memory.

Durable authority and accepted inputs:

- Product/SA execution authority:
  `689feb7a46eb2d52b984ce083be046ac6d38657d`;
- accepted predecessor: `BP-P1-BACKEND-READ = ACCEPTED`;
- P2 backend runtime-recovery commit:
  `119397ff6836ad12846c1e948409d8d49185c408`;
- P2 backend runtime-recovery tree:
  `73521762dfeaf703b301e7a61c17cbda97d797a9`;
- original P2 frontend candidate:
  `b69c37bc9c1b1aec0976ab503acbb7274153480d`;
- V1 runtime-bootstrap defect evidence:
  `259e35bc1163bfbe4402d63d363f09f1284044b6`;
- V2 accessibility circuit-breaker evidence:
  `73781a3bbb6ed8b5cc88e0288fc929142397f924`;
- stopped execution-ledger commit:
  `2e6720bce1aa9da082d2e18ef8a2e6e3769e39f9`;
- P2 contrast-correction and SA-autonomy amendment:
  `3e1120dcf361b3046c97b6ad0cc5c08e6ec2e71e`;
- corrected P2 frontend commit:
  `008a7f0c1778d0d805a0d0d5a9dd86540c0ff4b2`;
- corrected P2 frontend tree:
  `e00fae87d99de52fd831ccd92e8e04052c74e70d`;
- additional bounded accessibility-recovery authority:
  `3e1120dcf361b3046c97b6ad0cc5c08e6ec2e71e`.

The V1 evidence found that a built Vite preview sets
`import.meta.env.DEV=false`, while the environment resolver ignored the exact
explicit `VITE_STAGE=local` input and rejected a loopback API origin before
React mounted. That defect was corrected at frontend commit
`5df18df718e8a69dd22d7c31fab804716d87329a` without weakening non-local origin
restrictions.

The V2 evidence proved that the corrected build mounted and authenticated, but
three Brand Payouts small-text elements used primary green with contrast of
only 1.81–1.92:1 against page/card surfaces. Product then expressly authorized
one feature-scoped accessibility correction. Frontend commit
`008a7f0c1778d0d805a0d0d5a9dd86540c0ff4b2` changes only the Brand Payouts CSS
and its regression test: the eyebrow and active outline-button labels use
Aurora `--text-high`, producing calculated ratios of 17.73:1 on
`--surface-page` and 18.83:1 on `--surface-card`. Global Aurora tokens,
components, border accents, focus treatment, disabled behavior, Product
semantics, and financial behavior remain unchanged.

The Systems Architect has already verified the correction with 28/28 focused
tests, 878/878 full frontend tests, changed-file lint and formatting,
typecheck, diff check, and the exact local-stage production build. The
repository-wide lint baseline remains the same 26 errors and 13 warnings, all
outside the correction scope.

Execution mode:

```text
LOCAL_DESKTOP_RUNTIME_AND_BROWSER_FINAL_EVIDENCE_ONLY
```

Your objective is to create the first complete P2 live runtime, responsive,
keyboard, and accessibility evidence package. This is an evidence relay, not
checkpoint acceptance. Do not accept P2 and do not begin P3. The Systems
Architect will review the committed evidence and make the delegated technical
checkpoint decision.

## 1. Repositories and immutable heads

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
required head = 008a7f0c1778d0d805a0d0d5a9dd86540c0ff4b2
required tree = e00fae87d99de52fd831ccd92e8e04052c74e70d
required parent = 5df18df718e8a69dd22d7c31fab804716d87329a
required base ancestor = 323658d4b147b95b5629ff8d91fa90b8fe9077e4
```

Evidence/authority repository:

```text
repository = Piyush1087/dummy_tcs
branch = brand-payouts/v1-execution-ledger
required ancestors =
  259e35bc1163bfbe4402d63d363f09f1284044b6
  73781a3bbb6ed8b5cc88e0288fc929142397f924
  2e6720bce1aa9da082d2e18ef8a2e6e3769e39f9
  3e1120dcf361b3046c97b6ad0cc5c08e6ec2e71e
starting head = the commit containing this runner prompt
```

Before runtime work, fetch and verify all three exact remote heads, trees,
ancestry, and clean worktrees. Stop on any mismatch. Do not rebuild P2 from an
older base, amend P0/P1, rewrite history, merge a branch, or modify either
source repository.

Preserve the V1 and V2 reports and supporting evidence directories byte-for-
byte. The V3 package is additive.

## 2. Hard scope and circuit breakers

Close only:

```text
MISSING_COMPLETE_LIVE_BROWSER_RESPONSIVE_KEYBOARD_ACCESSIBILITY_EVIDENCE
```

Backend and frontend source are immutable. Environment-only changes to local
ports, disposable database setup, temporary fixture scripts, browser
automation, and evidence collection are allowed. Do not commit those temporary
resources to either source repository.

No source-correction loop remains available to this runner. If the V1 startup
failure repeats, the V2 contrast failure repeats, or any other genuine source
defect prevents completion, preserve reproducible evidence and stop with the
circuit-breaker return in section 10. Do not patch CSS, inject styles, modify a
bundle, change application code, weaken an assertion, or substitute a
different build.

Forbidden:

- backend or frontend source changes;
- Product, financial, API, authorization, notification, support, tax, or
  document semantic changes;
- Prisma schema changes or migration creation;
- Razorpay/provider credential inspection, CLI/API calls, webhooks, Test/Live
  transfers, returns, reversals, or any provider action;
- production/shared database use or production deployment;
- merge to `development`, `main`, or another canonical branch;
- logging or committing passwords, JWTs, cookies, tokens, credentials,
  database URLs, raw provider diagnostics, or seeded sensitive values;
- execution-ledger edits or setting P2 acceptance; and
- P3 work.

Settings remains the sole temporary Add funds and Brand Return mutation
surface. `/brand/payouts` remains read-only in this checkpoint.

## 3. Local runtime topology

Record operating system, CPU architecture, Node, npm, package-manager,
PostgreSQL, browser name/version, browser automation version, and Axe version.

Use a disposable loopback-only PostgreSQL database. From an empty database,
apply all repository-committed migrations and verify their status/checksums.
Set the database session timezone to UTC. Do not create or edit a migration.

Seed deterministic test-only fixtures for:

- active Brand Owner;
- active Finance Admin;
- active Campaign Manager;
- inactive Brand membership;
- user with no active Brand membership;
- unrelated-Brand Owner;
- direct Creator;
- Admin without Brand financial membership;
- an empty/new Brand;
- authoritative vault and ledger records;
- a legacy-unreconciled payout obligation;
- enough same-timestamp activity to prove stable pagination; and
- partial/unavailable source states where browser interception is necessary.

Give each interactive actor a repository-supported password-auth method using
a temporary seed harness and the backend's canonical password hashing helper.
Use distinct test-only emails, one random non-durable password, and the real
`POST /api/v1/auth/login` browser flow. Do not inject tokens into localStorage
or sessionStorage. Redact the password and all session material from evidence.

Build the backend fresh and start `dist/main.js` through the complete
`AppModule`. Supply only inert local/test configuration, disable optional
workers where supported, leave all Razorpay/provider variables absent or
empty, and prevent external provider access. Prove root, liveness, database
health, Payouts route mapping, listening/ready state, and controlled shutdown.

Build the exact frontend head fresh with:

```text
VITE_API_URL=http://127.0.0.1:<chosen-backend-port>
VITE_STAGE=local
```

Serve the built output through Vite preview on loopback. Do not use a dev
server, hostname workaround, bundle patch, mock build, or second API server.
First prove that `/brand/payouts` mounts without the V1 bootstrap exception.
Then prove the three V2 elements no longer produce a serious contrast failure.
Continue through the complete matrix; a contrast-only rerun is insufficient.

## 4. Full-AppModule HTTP and RBAC proof

Run the complete PostgreSQL HTTP/RBAC matrix against the full built
application, not a bounded Nest test module. A previously passing V2 HTTP
package does not replace fresh V3 binding to the final frontend SHA.

Preserve a redacted request/response index proving:

- exact V2 media-type negotiation succeeds and default/incompatible
  representation behavior remains correct;
- Owner and Finance receive full Product-safe projections;
- Campaign Manager receives zero financial rows under the accepted fail-closed
  scope;
- inactive/no-membership, Creator, and Admin actors fail closed;
- unrelated-Brand list, detail, cursor, and existence probes fail closed;
- runtime responses validate against the final frontend schemas;
- summary buckets remain separate and source-authoritative;
- activity distinguishes money movement from lifecycle-only information;
- legacy history has no invented payment term, due date, or provider state;
- pagination exposes `as_of`, continuation, page/source completeness, exhausts
  deterministically, and produces no duplicates;
- provider IDs, bank/KYC/tax values, credentials, and raw diagnostics are absent;
- reads are side-effect-free and do not provision a vault/provider account;
- no Payouts mutation route/control exists; and
- no provider invocation occurs.

Snapshot all canonical financial rows before and after every Payouts read lane
and prove byte-equivalent normalized state. Record request counts and assertion
counts. Never retain Authorization or Cookie header values.

## 5. Complete real-browser actor/state matrix

Use Chromium, Chrome, or Edge through real browser automation at these exact
CSS viewport widths:

```text
390px
767px
768px
1440px desktop
```

Record viewport height for each width. Capture a screenshot and a machine-
readable result for every materially distinct actor/state. At minimum cover:

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
Never describe an intercepted state as canonical backend truth and never route
the frontend to another API server.

At every required width record:

```text
document.documentElement.scrollWidth
document.documentElement.clientWidth
document.body.scrollWidth
```

There must be no document-level horizontal overflow. Below 768px, applicable
tables must become labelled cards/rows/sheets. Explicitly compare 767px with
768px. Prove fixed bottom navigation and safe-area clearance do not obscure
content.

## 6. Keyboard and accessibility proof

Using keyboard-only interaction, prove:

- logical tab order and visible focus;
- accessible names/labels for every interactive control;
- detail drawer/sheet focus entry;
- focus containment where appropriate;
- Escape/close behavior;
- focus return to the invoking control;
- no keyboard trap; and
- operable route/deep-link behavior.

Run Axe 4.x or an equivalent automated scanner on the ready Owner page and
every materially distinct responsive/dialog state. Record all violations by
severity, selector, state, and viewport. Any Payouts-attributable serious or
critical violation fails the gate.

The V2 scan also noted moderate nested/duplicate-main landmark findings. Do not
silently omit them. Record whether they reproduce, their exact ownership and
impact, and why they do or do not block the acceptance standard. Do not modify
source.

## 7. DOM, console, network, and Product-truth proof

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
- no Payouts-attributable unexpected console error occurs;
- Add funds and Brand Return lead only to the Settings compatibility mutation
  surface; and
- `/brand/payouts` contains no mutation request or competing mutation control.

External font failures caused by an intentionally blocked network are not by
themselves Payouts defects, but they must be recorded and must not invalidate
contrast measurement. Keep all application/backend/provider traffic
loopback-only.

## 8. Fresh V3 evidence package

Create a new report:

```text
docs/ai-collaboration/brand-payouts-v1-p2-local-runtime-browser-evidence-v3.md
```

Create supporting evidence under:

```text
docs/ai-collaboration/evidence/brand-payouts-p2-local-runtime-browser-v3/
```

Include at least:

- machine-readable evidence index with artifact hashes;
- redacted environment/version record;
- migration/database lifecycle record;
- backend and frontend fresh-build records;
- full-AppModule startup/health/shutdown record;
- redacted HTTP/RBAC request-response index;
- runtime response-schema validation;
- before/after financial-state hash comparison;
- actor/state/viewport browser matrix;
- console and network summaries;
- Axe results including exact V2 contrast regression evidence;
- keyboard/focus results;
- viewport/overflow and safe-area measurements;
- screenshots named by width, actor, and state; and
- disposable-resource cleanup outcome.

Every matrix row must identify backend SHA/tree, frontend SHA/tree, viewport,
actor/fixture, state, authoritative versus intercepted source, screenshot,
network reference, console result, overflow result, and accessibility/focus
result as applicable.

Do not commit secrets or raw provider-shaped seed values. Sanitize headers,
cookies, JWTs, passwords, credentials, database URLs, machine-local absolute
paths, and raw diagnostics. The package must let the Systems Architect review
every P2 acceptance criterion without rerunning the desktop environment.

## 9. Validation, commit, and push

Before committing evidence:

- verify backend and frontend worktrees remain clean at the pinned SHAs;
- verify no Prisma schema or migration diff exists;
- verify no provider action occurred;
- verify all owned processes shut down and disposable resources are removed,
  or precisely identify an environment-only cleanup blocker;
- validate Markdown links and all JSON/machine-readable evidence;
- verify the index hashes every supporting artifact;
- run `git diff --check` in the authority repository;
- inspect the complete evidence diff for credentials and sensitive values; and
- verify the V1/V2 packages and execution ledger are unchanged.

Commit and push the complete V3 evidence package as one fast-forward descendant
of the authority-branch commit containing this prompt. Change only the V3
report and V3 evidence directory. Do not edit the execution ledger and do not
set P2 acceptance.

## 10. Required return

On complete passing evidence, return only:

```text
BP_P2_LOCAL_RUNTIME_BROWSER_EVIDENCE_COMPLETE

EVIDENCE_COMMIT =
EVIDENCE_TREE =
EVIDENCE_REPORT_PERMALINK =
BACKEND_SHA = 119397ff6836ad12846c1e948409d8d49185c408
BACKEND_TREE = 73521762dfeaf703b301e7a61c17cbda97d797a9
FRONTEND_SHA = 008a7f0c1778d0d805a0d0d5a9dd86540c0ff4b2
FRONTEND_TREE = e00fae87d99de52fd831ccd92e8e04052c74e70d
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

For a repeated prior failure or any genuine source defect, first commit and
push the bounded failure evidence package, then return only:

```text
P2_RUNTIME_BROWSER_CIRCUIT_BREAKER

EVIDENCE_COMMIT =
EVIDENCE_TREE =
EVIDENCE_REPORT_PERMALINK =
AFFECTED_SHA = 008a7f0c1778d0d805a0d0d5a9dd86540c0ff4b2
FAILURE_SIGNATURE =
EXACT_REPRODUCTION =
SUSPECTED_SOURCE_FILES =
WHY_SOURCE_CHANGE_IS_REQUIRED =
SOURCE_CHANGES = NONE
MIGRATIONS_CREATED = NONE
PROVIDER_ACTIONS = NONE
P2_ACCEPTANCE = NOT_SET
```

STOP. Do not begin P3.
