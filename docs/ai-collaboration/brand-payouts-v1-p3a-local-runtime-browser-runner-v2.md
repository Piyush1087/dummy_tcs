# Brand Payouts — P3A Local Runtime and Browser Runner V2

BRAND_PAYOUTS_P3A_LOCAL_RUNTIME_BROWSER_RUNNER_V2

## 0. Authority and objective

This is the complete copy-paste-ready assignment for the local desktop Codex
runner. Read it completely before acting. Do not combine it with the V1 runner
or infer requirements from chat.

Durable authority:

- Product Authority: f15a91d0ace8b2c424a539d79dbb120869233105
- accepted architecture and finite plan: 3fb6b4246aa5f2ecb71c3bbfe99c56e395f30a92
- autonomous execution authority: 689feb7a46eb2d52b984ce083be046ac6d38657d
- technical-autonomy amendment: 7f03411b9940ab16579cd2e176ac9e721edee832
- MVP delivery cutline: 9c991a8e8c8dfc90ccc4cf18e48ab1629d5f5b4f
- accepted P2 ledger binding: 495ae4f977152b49b0504ed11c441aadd4abcc93
- P3A V1 circuit-breaker evidence: 85aba6c74d0d4e9499314c95321e7890336c617e

V1 proved source gates, six PostgreSQL/security suites, both built backend
modes, an 80-scan bounded browser sweep, 20-model read purity, and zero
provider actions. It stopped on P3A_SETTINGS_CONTRAST_BELOW_WCAG_AA before
financial command submissions or the complete browser matrix.

The Systems Architect applied and source-gated the bounded contrast correction.
Your objective is to verify V1 integrity, rerun corrected frontend gates,
produce fresh built-runtime browser/accessibility evidence, complete every V1
deferred P3A gate, and commit/push one V2 evidence package.

This is an evidence relay. Do not accept P3A, edit the ledger, begin P4, create
a migration, or change source. The Systems Architect reviews V2 and decides
BP-P3A-OPERATIONS-CUTOVER.

Execution mode: LOCAL_DESKTOP_P3A_V2_RUNTIME_AND_BROWSER_EVIDENCE_ONLY

## 1. Immutable source heads

Backend, unchanged from V1:

- repository: Piyush1087/creator-commerce-backend-v2-clone
- branch: brand-payouts/v1-backend
- required head: 12d235345e2748f676d36d61c62ed4bd9c049592
- required tree: 1dd5900068aa7f7fa3aa25dcc0eaef33ee4d7e24
- required parent: 119397ff6836ad12846c1e948409d8d49185c408
- required accepted P1 ancestor: 60385abbd12d5a363615100c463ac6755ce848ea

Frontend, including the bounded correction:

- repository: Piyush1087/creator-commerce-frontend-v2-clone
- branch: brand-payouts/v1-frontend
- required head: f6b2c878e652d8131cbad0983f77fc3bffce3ab0
- required tree: 0984071ee2117362ffb87468ac2e3fde9bb5064b
- required parent: e81c5bf105e8cc03d93f01f5be981cc527e36ca0
- required accepted P2 ancestor: ec412013cb7eeaa119a7cded6fb7f5ef0c40df03

The correction delta from the V1 frontend is exactly:

- src/features/brand-escrow/brand-escrow.css
- src/features/settings/settings.css
- src/pages/brand/settings/brand-settings-routing.test.ts

It contains two production CSS files and one test file. It changes no API,
authorization, command, financial, provider, schema, migration, package, or
lockfile behavior. The complete P3A frontend diff from accepted P2 is 18 files,
including 14 production files.

Evidence repository:

- repository: Piyush1087/dummy_tcs
- branch: brand-payouts/v1-execution-ledger
- required V1 evidence ancestor: 85aba6c74d0d4e9499314c95321e7890336c617e
- starting head: exact remote commit containing this V2 runner assignment

Fetch and verify all remote heads, trees, parents, ancestry, and clean
worktrees. Stop on mismatch. Do not merge, rebase, amend, force-push, or rewrite
accepted history.

## 2. Corrected behavior under test

The only source correction is:

- active Settings tabs use #006c4b text while retaining the active border;
- Settings action links, including Open Payouts, use #006c4b; and
- active outline buttons inside .brand-escrow-card, including Refresh status,
  use #006c4b without changing Aurora globally.

The source calculation is 6.47:1 on white and 6.09:1 on #f8f8f8. Verify actual
computed browser colors and Axe; do not treat the calculation as browser proof.

All P3A operational behavior remains fixed:

- PAYOUTS mode activates Add funds and Brand Return only in /brand/payouts;
- SETTINGS, missing, blank, or invalid mode resolves to Settings-safe mutation;
- both surfaces call only the existing canonical escrow endpoints/services;
- the backend surface header and BrandTeamMember.role are server-enforced;
- Owner and Finance Admin may use the active surface;
- Campaign Manager is read-only;
- Settings is compatibility-only while Payouts is active;
- provider behavior is absent/fail-closed; and
- no second vault, ledger, funding, Return, provider, or authorization path
  exists.

## 3. V1 reuse integrity gate

Read completely:

- docs/ai-collaboration/brand-payouts-v1-p3a-local-runtime-browser-evidence-v1.md
- docs/ai-collaboration/evidence/brand-payouts-p3a-local-runtime-browser-v1/index.json
- docs/ai-collaboration/evidence/brand-payouts-p3a-local-runtime-browser-v1/circuit-breaker.json

Verify evidence commit 85aba6c74d0d4e9499314c95321e7890336c617e,
tree fc57d68fac98bb0ac001bcd52f3f9fe41dbe716f, every indexed hash, source
binding, and absence of source/provider/migration changes in the evidence
commit.

Because the backend tree is unchanged and the correction is CSS plus one
frontend regression only, these V1 results may be inherited after integrity
proof and must not be needlessly rerun:

- backend focused/full/lint/build/diff;
- six PostgreSQL/security suites, 50/50;
- 74 committed-migration checksum proof per V1 database;
- 20-model read-purity proof; and
- zero provider/external attempts for V1 lanes.

Label inherited results REUSED_IMMUTABLE_V1_EVIDENCE. Do not inherit failed
accessibility or claim completion for a V1-deferred gate. If integrity or source
binding fails, stop with P3A_V2_EVIDENCE_REUSE_INVALID.

## 4. Hard prohibitions

Do not modify source, tests, CSS, dependencies, lockfiles, generated source,
Prisma schema, or committed migrations. Do not use shared environments, inspect
secrets, call Razorpay/provider systems, activate real money movement, patch a
bundle, inject browser token/style, weaken Axe, use a dev frontend server,
expose sensitive/local values, edit V1 evidence or the ledger, or begin P4.

Temporary fixture/evidence scripts may live outside source repositories during
the run. Sanitize and remove them at shutdown.

## 5. Fresh source gates

Record Node/npm versions. Against the corrected frontend run:

- brand-payouts-p2.test.ts, treasury-settings.test.ts,
  brand-escrow-client.test.ts, and brand-settings-routing.test.ts;
- changed-file ESLint for the three correction files;
- typecheck;
- full Vitest;
- production build with explicit local-preview configuration; and
- diff/source/schema/migration/package/lockfile integrity.

Expected Work results:

- focused P2 plus routing subset: 36/36
- complete four-file focused suite: 62/62
- full frontend: 885/885
- changed-file lint/typecheck/diff: PASS
- build: PASS with only the pre-existing large-chunk warning

Repository-wide lint remains baseline debt outside P3A. Do not repair it. Any
changed-file lint, test, typecheck, build, diff, or integrity failure is a
circuit breaker.

## 6. Disposable built runtime

Use a fresh loopback-only PostgreSQL database with UTC sessions. Apply all and
only committed migrations and verify count/checksums. The database is needed
for fresh browser/command evidence; do not rerun the accepted security suites
unless V1 reuse integrity fails.

Build the exact backend and run dist/main.js through AppModule. Build the exact
frontend once with VITE_API_URL=http://127.0.0.1:<backend-port> and
VITE_STAGE=local, then serve only built Vite preview. Use normal password login
with canonical hashing. Keep provider credentials absent and install an
outbound deny/record guard. Optional workers remain inert.

Seed disposable Owner, Finance Admin, Campaign Manager, inactive/no-membership,
unrelated Brand, Creator/Admin denial, empty Brand, vault/funding, source-safe
activity, Brand Return detail, differing activity ID/public reference, and
pagination fixtures.

Run the same built frontend against separately restarted backend processes for
PAYOUTS, SETTINGS, missing, blank, and invalid
BRAND_PAYOUTS_COMMAND_SURFACE values. Do not mutate process.env inside a running
app. Prove AppModule root/liveness/database health/routes/listening/shutdown.

## 7. Complete V1-deferred HTTP and financial gates

Complete the mutation-admission and stale-claim matrix for Owner, Finance Admin,
and Campaign Manager in both modes.

Payouts mode must prove Owner/Finance receive only ADD_FUNDS and eligible
REQUEST_BRAND_RETURN, Payouts owns both commands, Settings owns neither,
PAYOUTS claims reach canonical handlers, and SETTINGS/missing/invalid/mixed/
stale claims receive bounded 409 without side effect. Campaign Manager gets no
command and 403 before surface admission.

Settings-safe mode, including missing/blank/invalid configuration, must prove
Owner/Finance receive only OPEN_SETTINGS actions, Settings restores canonical
commands, Payouts owns none, SETTINGS and legacy missing claims reach canonical
handlers, PAYOUTS claims get 409 without side effect, and Campaign Manager
remains read-only/denied.

Use unique disposable idempotency identities. Exercise Add funds once per
active mode against absent provider credentials and outbound deny. It must fail
closed, never credit AVAILABLE, and create no duplicate funding/ledger
foundation on replay.

Exercise Brand Return against the fail-closed adapter. It must fail provider
preflight before Return/allocation/vault/ledger mutation. If needed, browser
interception may alter only safe contract-valid eligibility fields and must be
labelled TEST_ONLY_NONAUTHORITATIVE_COMMAND_DRIVER. Never intercept mutation
responses.

Snapshot canonical financial tables around every read, rejected claim,
fail-closed command, and replay. Any AVAILABLE credit, Return ledger entry,
duplicate foundation, cross-Brand row, or unexplained mutation is a breaker.

## 8. Fresh complete browser/accessibility matrix

Use Chromium/Chrome/Edge at exactly 390, 767, 768, and 1440 CSS px. Record
viewport height. Re-run every materially distinct P3A state because Settings
selectors changed. At every applicable width cover:

- unauthenticated entry and normal login;
- Payouts-active Owner/Finance commands and Manager read-only;
- Payouts-active Settings compatibility and keyboard Open Payouts;
- Add funds and Brand Return drawer open/validation/close/fail-closed submit;
- Settings rollback Owner/Finance Treasury, Payouts compatibility, and Manager;
- initial/loading/refreshing/stale/unavailable/mixed/no-vault states;
- Brand Return detail direct link/refresh/back/unauthorized/cross-Brand;
- notification links for obligation and Brand Return;
- lifecycle and money-movement activity identifier smoke; and
- activity/obligation pagination Back restoration at all four widths.

Interception may delay, abort, or replay only a contract-valid real-local
response. Label every intercepted row. Never invent success/readiness/authority.

For every row record screenshot, actor, mode, source classification, network,
complete console, focus, DOM controls, Axe, scroll widths/client width, and
safe-area clearance.

Require zero serious Axe, zero critical Axe, zero document-level overflow,
logical keyboard order, visible focus, Enter/Space, Escape/close, focus return,
no trap, usable mobile composition below 768px, and desktop composition at/above
768px. Retain lower-severity findings.

Record actual computed foreground/background/ratio for Open Payouts, active
Settings tab, and Refresh status in every applicable mode/actor/width.

## 9. Product truth and provider proof

Prove exactly one active mutation surface; one canonical service path; role
enforcement before surface admission; zero provider requests; no false
financial success/SLA/30-70/TDS copy; no release/reversal/mark-paid/caller
economics/destination/source selection; no sensitive provider/bank/KYC/tax
details; pending is not AVAILABLE; Return remains original-source-only and
distinct; authoritative amounts/timestamps only; safe notification/detail
links; P2 identity/pagination intact; and no unexplained P3A 4xx/5xx or console
errors.

This assignment proves no Razorpay capability or production readiness.

## 10. Evidence package and validation

Create exactly:

- docs/ai-collaboration/brand-payouts-v1-p3a-local-runtime-browser-evidence-v2.md
- docs/ai-collaboration/evidence/brand-payouts-p3a-local-runtime-browser-v2/

Include an index hashing every artifact, authority/source binding, V1 reuse
validation, fresh frontend gates, runtime lifecycle, configuration/admission
matrices, RBAC, financial snapshots/deltas, fail-closed/replay, notifications,
browser/Axe/keyboard/overflow, P2 smoke, Product truth, zero-provider proof, and
cleanup. Every artifact inherits exact source SHA/tree, mode, actor, and source
classification. Sanitize everything.

Before commit, prove source worktrees clean, no source/schema/migration/package/
lockfile change, remove all disposable resources, validate JSON/links/images/
index hashes/completeness, scan for secrets, run git diff --check, prove V1 and
ledger unchanged, and prove no P4 work.

Commit/push only the V2 report and V2 evidence directory as one fast-forward
descendant of this runner assignment. Do not set P3A acceptance.

## 11. Required return

On pass return only:

BP_P3A_LOCAL_RUNTIME_BROWSER_EVIDENCE_COMPLETE

EVIDENCE_VERSION = V2
EVIDENCE_COMMIT =
EVIDENCE_TREE =
EVIDENCE_REPORT_PERMALINK =
EVIDENCE_INDEX_PATH = docs/ai-collaboration/evidence/brand-payouts-p3a-local-runtime-browser-v2/index.json
REUSED_V1_EVIDENCE_INTEGRITY = PASS
BACKEND_SHA = 12d235345e2748f676d36d61c62ed4bd9c049592
BACKEND_TREE = 1dd5900068aa7f7fa3aa25dcc0eaef33ee4d7e24
FRONTEND_SHA = f6b2c878e652d8131cbad0983f77fc3bffce3ab0
FRONTEND_TREE = 0984071ee2117362ffb87468ac2e3fde9bb5064b
POSTGRESQL_SECURITY_GATE = PASS_REUSED_IMMUTABLE_V1_EVIDENCE
PAYOUTS_ACTIVE_SURFACE = PASS
SETTINGS_ROLLBACK_SURFACE = PASS
MISSING_BLANK_INVALID_SAFE_FALLBACK = PASS
EXACTLY_ONE_MUTATION_SURFACE = PASS
OWNER_FINANCE_RBAC = PASS
CAMPAIGN_MANAGER_READ_ONLY = PASS
BRAND_RETURN_FAIL_CLOSED = PASS_NO_FINANCIAL_SIDE_EFFECT
ADD_FUNDS_FAIL_CLOSED = PASS_NO_PROVIDER_OR_AVAILABLE_CREDIT
IDEMPOTENT_REPLAY = PASS
NOTIFICATION_SCOPE_AND_LINKS = PASS
P2_IDENTITY_AND_PAGINATION_SMOKE = PASS
BROWSER_MATRIX = COMPLETE
SETTINGS_CONTRAST_CORRECTION = PASS
SERIOUS_AXE_FINDINGS = 0
CRITICAL_AXE_FINDINGS = 0
SOURCE_CHANGES = NONE
MIGRATIONS_CREATED = NONE
PROVIDER_ACTIONS = NONE
RESULT = PASS

For an environment blocker return only P3A_V2_LOCAL_RUNTIME_BROWSER_ENVIRONMENT_BLOCKED
with last gate, blocker, why local, safe retry, and unchanged-source/no-migration/
no-provider declarations.

For repeated contrast failure, new source/security defect, or invalid V1 reuse,
commit bounded sanitized failure evidence and return only
P3A_RUNTIME_BROWSER_CIRCUIT_BREAKER with V2 evidence commit/tree/permalink,
affected fixed source SHAs, signature, reproduction, suspected files, reason,
completed gates, and unchanged-source/no-migration/no-provider declarations.

STOP. Do not begin P4.
