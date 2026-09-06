# Brand Payouts — P3A Local Runtime and Browser Runner V3

`BRAND_PAYOUTS_P3A_LOCAL_RUNTIME_BROWSER_RUNNER_V3`

## 0. Authority and objective

This is the complete copy-paste-ready assignment for the local desktop Codex
runner. Read it completely before acting. Do not combine it with V1/V2 prompts
or infer requirements from chat.

Durable authority:

- Product Authority: `f15a91d0ace8b2c424a539d79dbb120869233105`
- accepted architecture and finite plan: `3fb6b4246aa5f2ecb71c3bbfe99c56e395f30a92`
- autonomous execution authority: `689feb7a46eb2d52b984ce083be046ac6d38657d`
- technical-autonomy amendment: `7f03411b9940ab16579cd2e176ac9e721edee832`
- MVP delivery cutline: `9c991a8e8c8dfc90ccc4cf18e48ab1629d5f5b4f`
- accepted P2 ledger binding: `495ae4f977152b49b0504ed11c441aadd4abcc93`
- P3A V1 evidence: `85aba6c74d0d4e9499314c95321e7890336c617e`
- P3A V2 evidence: `db15bde0b8c7544b4cc9a314a235045868896d1f`

V2 passed source gates, all five full-AppModule configurations, the complete
168-request/300-assertion command-surface admission and replay matrix,
fail-closed financial checks, zero-provider proof, and 158 browser rows with
zero overflow. It confirmed the V1 Settings correction and stopped only because
the portal-rendered active `Cancel` buttons in Add funds and Brand Return
drawers inherited the low-contrast global ghost foreground.

The Systems Architect has applied and source-gated a feature-scoped correction.
Your objective is to validate V1/V2 evidence integrity, verify the exact source
delta, run fresh frontend gates, and produce the smallest complete fresh V3
built-browser proof for every state materially affected by that delta. Reuse
immutable V1/V2 results exactly as authorized below. Do not repeat expensive
backend, PostgreSQL/security, financial-admission, or unaffected browser work.

This is an evidence relay. Do not accept P3A, edit the ledger, begin P4, change
source, create/apply a migration, or invoke a provider. The Systems Architect
reviews V3 and decides `BP-P3A-OPERATIONS-CUTOVER`.

Execution mode: `LOCAL_DESKTOP_P3A_V3_RUNTIME_AND_BROWSER_EVIDENCE_ONLY`

## 1. Immutable source heads

Backend, unchanged:

- repository: `Piyush1087/creator-commerce-backend-v2-clone`
- branch: `brand-payouts/v1-backend`
- required head: `12d235345e2748f676d36d61c62ed4bd9c049592`
- required tree: `1dd5900068aa7f7fa3aa25dcc0eaef33ee4d7e24`
- accepted P2 ancestor: `119397ff6836ad12846c1e948409d8d49185c408`

Frontend, including the V3 drawer correction:

- repository: `Piyush1087/creator-commerce-frontend-v2-clone`
- branch: `brand-payouts/v1-frontend`
- required head: `a8800de192f2e716f405b75f38799271fd9f1a9b`
- required tree: `4c47e51af0de16fa8c2f9ce305d02de37b65a470`
- required parent: `f6b2c878e652d8131cbad0983f77fc3bffce3ab0`
- accepted P2 ancestor: `ec412013cb7eeaa119a7cded6fb7f5ef0c40df03`

The complete delta from the V2 frontend must be exactly these four files:

- `src/features/brand-escrow/brand-escrow.css`
- `src/features/brand-escrow/components/brand-return-drawer.tsx`
- `src/features/brand-escrow/components/escrow-top-up-drawer.tsx`
- `src/pages/brand/settings/brand-settings-routing.test.ts`

The production behavior delta is only:

- both Treasury drawer footers carry `brand-escrow-drawer-footer`; and
- the active, non-disabled ghost button within that footer uses `#006c4b`.

The global Aurora ghost-button rule is unchanged. API, authorization, command,
financial, provider, schema, migration, package, and lockfile behavior is
unchanged.

Evidence repository:

- repository: `Piyush1087/dummy_tcs`
- branch: `brand-payouts/v1-execution-ledger`
- required V2 evidence ancestor: `db15bde0b8c7544b4cc9a314a235045868896d1f`
- starting head: exact remote commit containing this V3 runner

Fetch and verify remote heads, trees, parents, ancestry, and clean worktrees.
Stop on mismatch. Do not merge, rebase, amend, force-push, or rewrite accepted
history.

## 2. Evidence reuse gate

Read completely and verify:

- `docs/ai-collaboration/brand-payouts-v1-p3a-local-runtime-browser-evidence-v1.md`
- `docs/ai-collaboration/evidence/brand-payouts-p3a-local-runtime-browser-v1/index.json`
- `docs/ai-collaboration/brand-payouts-v1-p3a-local-runtime-browser-evidence-v2.md`
- `docs/ai-collaboration/evidence/brand-payouts-p3a-local-runtime-browser-v2/index.json`
- both versions' source-binding and circuit-breaker records

Verify V1 commit/tree, V2 commit/tree, every indexed SHA-256/size, source
binding, and that the evidence commits changed no source, schema, migration,
package, or lockfile and performed no provider action.

After integrity proof, label and inherit these results as
`REUSED_IMMUTABLE_V1_V2_EVIDENCE`:

- backend focused/full/lint/build/diff;
- PostgreSQL/security 50/50 and committed-migration checksums;
- 20-model read purity;
- five built AppModule command-surface configurations;
- 168 requests and 300 command admission/replay assertions;
- Add funds and Brand Return fail-closed financial snapshots;
- zero external/provider attempts;
- corrected Open Payouts, active Settings tab, and Refresh-status contrast;
- 158 V2 browser rows' non-drawer behavior and zero overflow; and
- P2 identifier and pagination smoke.

Do not inherit the failed V2 drawer accessibility result. Do not convert the
four pre-existing inactive Email-code sign-in findings into P3A failures; retain
and identify them as unchanged baseline outside this bounded feature. Stop with
`P3A_V3_EVIDENCE_REUSE_INVALID` if evidence integrity or source binding fails.

## 3. Hard prohibitions

Do not modify source, tests, CSS, dependencies, lockfiles, generated source,
Prisma schema, committed migrations, V1/V2 evidence, or the ledger. Do not use
shared environments, inspect secrets, call Razorpay/provider systems, activate
money movement, patch a built bundle, inject browser CSS/tokens, weaken Axe,
use a dev frontend server, or begin P4. Temporary scripts must remain outside
source repositories and be removed at shutdown.

## 4. Fresh source gates

Record Node/npm versions. Against the exact corrected frontend run:

1. the four-file focused suite:
   - `brand-payouts-p2.test.ts`
   - `treasury-settings.test.ts`
   - `brand-escrow-client.test.ts`
   - `brand-settings-routing.test.ts`
2. changed-file ESLint and Prettier check;
3. typecheck;
4. full Vitest;
5. production build with explicit local-preview configuration; and
6. diff/source/schema/migration/package/lockfile integrity.

Expected results:

- focused: `63/63`
- full frontend: `886/886`
- changed-file lint/format/typecheck/diff: PASS
- build: PASS with only the pre-existing large-chunk warning

Repository-wide lint remains baseline debt outside P3A. Do not repair it.

## 5. Disposable built runtime

Use a fresh loopback-only PostgreSQL database with UTC sessions and apply all
and only committed migrations. Build the exact backend and run `dist/main.js`
through AppModule in `PAYOUTS` mode. Build the exact frontend once with
`VITE_API_URL=http://127.0.0.1:<backend-port>` and `VITE_STAGE=local`, then serve
only the built Vite preview. Authenticate normally as Owner and Finance Admin
using disposable V2-equivalent fixtures. Keep provider credentials absent and
retain an outbound deny/record guard.

The immutable V2 five-configuration, admission/replay, and fail-closed results
need not be rerun. `PAYOUTS` mode is sufficient for the fresh runtime lifecycle
and Payouts-surface drawer proof. For Settings-surface rendering, restart the
same backend in `SETTINGS` mode against the same disposable fixture. Prove root,
liveness, database health, routes, listening, and controlled shutdown for each
process actually started.

## 6. Fresh affected browser matrix

Use Chromium/Chrome/Edge at exactly 390, 767, 768, and 1440 CSS px and record
viewport height. Scan the complete document, including portal content. Cover
every combination of:

- mode/surface: `PAYOUTS` at `/brand/payouts`; `SETTINGS` at
  `/brand/settings/escrow`;
- actor: Owner and Finance Admin;
- drawer: Add funds and Brand Return; and
- state: open, client validation, close/reopen, and the already-authorized
  fail-closed submit presentation where a valid submission can be driven
  without provider action.

At minimum this is 32 base open-drawer rows (2 modes × 2 actors × 2 drawers ×
4 widths), plus materially distinct validation/fail-closed/close-reopen rows.
Do not rerun unrelated overview/detail/pagination states whose source and
immutable V2 evidence are unchanged.

For every fresh row record screenshot, mode, route, actor, viewport, source
classification, full network and console result, DOM controls, focus/keyboard,
Axe, scroll width/client width, and mobile safe-area clearance. Verify:

- the active Cancel computed foreground is `#006c4b` (or exact RGB
  equivalent) on the actual footer background;
- computed contrast is at least 4.5:1 in both surfaces and all widths;
- the disabled Cancel state remains truthfully disabled and is not claimed as
  an active-control contrast pass;
- zero P3A-owned serious or critical Axe findings;
- zero document-level horizontal overflow;
- logical keyboard order, visible focus, modal focus trap, Escape/close, and
  focus return;
- no unexpected console/network error; and
- no provider request or financial success claim.

If Axe again reports the same active drawer Cancel selector below 4.5:1 after
the pinned correction, stop with
`P3A_DRAWER_CANCEL_CONTRAST_CORRECTION_INEFFECTIVE`. A different P3A-owned
serious/critical defect is a new circuit breaker with exact selector, states,
widths, computed colors, and suspected source. Do not change source.

## 7. Composite P3A acceptance evidence

The V3 report must explicitly combine fresh V3 results with verified immutable
V1/V2 results and show that all P3A acceptance requirements are covered without
pretending reused evidence was freshly executed. It must establish:

- exactly one active Add funds/Brand Return surface per configuration;
- server-side `BrandTeamMember.role` and surface admission remain enforced;
- Campaign Manager remains read-only;
- canonical existing escrow services remain the only command path;
- Add funds/Brand Return remain provider-disabled and fail closed;
- no second vault, ledger, funding, Return, provider, or authorization path;
- no migration or provider action;
- P3A browser states have zero P3A-owned serious/critical findings and zero
  document overflow; and
- unchanged baseline findings are separately disclosed, not hidden.

This evidence does not prove Razorpay capability or production readiness.

## 8. Evidence package

Create exactly:

- `docs/ai-collaboration/brand-payouts-v1-p3a-local-runtime-browser-evidence-v3.md`
- `docs/ai-collaboration/evidence/brand-payouts-p3a-local-runtime-browser-v3/`

Include a machine-readable index hashing every artifact; authority/source
binding; V1/V2 integrity and reuse classification; fresh source gates; runtime
lifecycle; every fresh browser/Axe/contrast/keyboard/overflow result; composite
P3A coverage; baseline findings; zero-provider proof; and cleanup. Sanitize all
artifacts. Do not include secrets, cookies, tokens, raw passwords, connection
strings, private headers, or provider diagnostics.

Before commit, prove all source worktrees clean, no source/schema/migration/
package/lockfile changes, no owned listener/container/volume/process/private
session remains, and the evidence index validates from scratch.

Commit and push only the evidence package to
`brand-payouts/v1-execution-ledger`. Do not edit existing evidence or the
execution ledger. Fetch back and verify exact commit, tree, parent, file set,
and index.

## 9. Return contract

On pass, return exactly:

```text
BP_P3A_LOCAL_RUNTIME_BROWSER_EVIDENCE_COMPLETE

EVIDENCE_VERSION = V3
EVIDENCE_COMMIT = <40-char SHA>
EVIDENCE_TREE = <40-char SHA>
EVIDENCE_REPORT_PERMALINK = <exact GitHub blob URL>
BACKEND_SHA = 12d235345e2748f676d36d61c62ed4bd9c049592
BACKEND_TREE = 1dd5900068aa7f7fa3aa25dcc0eaef33ee4d7e24
FRONTEND_SHA = a8800de192f2e716f405b75f38799271fd9f1a9b
FRONTEND_TREE = 4c47e51af0de16fa8c2f9ce305d02de37b65a470
V1_V2_EVIDENCE_INTEGRITY = PASS
FRESH_FRONTEND_GATES = PASS_63_FOCUSED_886_FULL
DRAWER_CONTRAST = PASS_ALL_MODES_ACTORS_WIDTHS_STATES
P3A_COMPOSITE_GATE = PASS
SERIOUS_P3A_AXE_FINDINGS = 0
CRITICAL_P3A_AXE_FINDINGS = 0
SOURCE_CHANGES = NONE
MIGRATIONS_CREATED = NONE
PROVIDER_ACTIONS = NONE
RESULT = PASS
```

On any blocker, commit/push sanitized bounded evidence, remove disposable
resources, and return exactly:

```text
P3A_RUNTIME_BROWSER_CIRCUIT_BREAKER

EVIDENCE_VERSION = V3
EVIDENCE_COMMIT = <40-char SHA>
EVIDENCE_TREE = <40-char SHA>
EVIDENCE_REPORT_PERMALINK = <exact GitHub blob URL>
AFFECTED_BACKEND_SHA = 12d235345e2748f676d36d61c62ed4bd9c049592
AFFECTED_FRONTEND_SHA = a8800de192f2e716f405b75f38799271fd9f1a9b
FAILURE_SIGNATURE = <stable signature>
EXACT_REPRODUCTION = <mode, actor, route, state, width, action>
SUSPECTED_SOURCE_FILES = <bounded list>
WHY_SOURCE_CHANGE_IS_REQUIRED = <if applicable>
COMPLETED_SAFE_GATES = <summary>
SOURCE_CHANGES = NONE
MIGRATIONS_CREATED = NONE
PROVIDER_ACTIONS = NONE
P3A_ACCEPTANCE = NOT_SET
P4_WORK = NONE
```

STOP. Do not self-accept P3A and do not begin P4.
