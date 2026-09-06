# Brand Payouts — P3A Focused Local Runtime and Browser Runner V6

`BRAND_PAYOUTS_P3A_FOCUSED_LOCAL_RUNTIME_BROWSER_RUNNER_V6`

## 0. Authority and objective

Read this complete replacement assignment. Do not concatenate it with an
earlier runner or chat instruction.

Authority:

- Product Authority: `f15a91d0ace8b2c424a539d79dbb120869233105`;
- accepted architecture: `3fb6b4246aa5f2ecb71c3bbfe99c56e395f30a92`;
- technical autonomy: `7f03411b9940ab16579cd2e176ac9e721edee832`;
- MVP cutline: `9c991a8e8c8dfc90ccc4cf18e48ab1629d5f5b4f`;
- P3A V5 evidence: `96d202591c6ec0d1343beb549bfbfdec492be7a5`;
- discipline-batched topology: the commit containing this runner.

V5 proved the async command-trigger correction across all 16 Payouts
role/command/width lanes, 96 full-document scans with zero serious/critical Axe
findings and zero overflow, both runtime modes, disposable migration bootstrap,
and zero provider action. It found one distinct defect: disabling the focused
drawer submit control moved focus to BODY and allowed Tab to reach background
content while the modal remained open.

The Systems Architect corrected both shared Treasury drawers and added two
regressions. Verify the exact correction and run only the focused P3A proof
defined here. Do not repeat the historical complete browser matrix.

Recommended execution model: `GPT-5.6-TERRA HIGH` (or the closest available
balanced coding/browser model). Do not use max reasoning for mechanical
evidence packaging.

Execution mode: `LOCAL_DESKTOP_P3A_V6_FOCUSED_RUNTIME_BROWSER_EVIDENCE_ONLY`

Do not accept P3A, edit the ledger, begin P4, change source, create/change
migration files or invoke a provider. The Systems Architect reviews the return.

## 1. Immutable source inputs

Backend, unchanged:

- repository: `Piyush1087/creator-commerce-backend-v2-clone`;
- branch: `brand-payouts/v1-backend`;
- head: `12d235345e2748f676d36d61c62ed4bd9c049592`;
- tree: `1dd5900068aa7f7fa3aa25dcc0eaef33ee4d7e24`.

Frontend, corrected:

- repository: `Piyush1087/creator-commerce-frontend-v2-clone`;
- branch: `brand-payouts/v1-frontend`;
- head: `f775d33f729e02c020ced5b0a7ffcc662110db9e`;
- tree: `30001818c07b231529935dedf12ca059be6bd6dc`;
- parent: `ca1a289670968eacf2c2c5c31ac626921aa8efba`.

The parent-to-head delta must contain exactly:

- `src/features/brand-escrow/components/escrow-top-up-drawer.tsx`;
- `src/features/brand-escrow/components/brand-return-drawer.tsx`;
- `src/features/brand-escrow/components/treasury-settings.test.ts`.

Required correction:

- during submission or unknown outcome, the invoked submit remains natively
  enabled/focusable and carries `aria-disabled=true`;
- each handler rejects re-entry during those states;
- ordinary invalid/unconfirmed controls remain natively disabled;
- no duplicate command is sent;
- focus remains inside the open modal while pending and after canonical 503;
- Tab and Shift+Tab wrap within the drawer; and
- shared SideDrawer, APIs, authorization, financial semantics, CSS, schema,
  migrations, packages and lockfiles remain unchanged.

Evidence repository:

- repository: `Piyush1087/dummy_tcs`;
- branch: `brand-payouts/v1-execution-ledger`;
- required V5 evidence ancestor:
  `96d202591c6ec0d1343beb549bfbfdec492be7a5`;
- starting head: exact remote commit containing this V6 runner.

Verify heads, trees, parent, ancestry and clean worktrees. Stop on mismatch. Do
not merge, rebase, amend, force-push or rewrite history.

## 2. Evidence reuse and fresh source gate

Verify all 335 indexed SHA-256 hashes and byte sizes:

- V1: 124;
- V2: 51;
- V3: 12;
- V4: 24;
- V5: 124.

Label inherited results `REUSED_IMMUTABLE_P3A_V1_TO_V5_EVIDENCE`. Reuse the
unchanged backend, PostgreSQL/security 50/50, admission/replay 168 requests and
300 assertions, read purity, configuration behavior, contrast, responsive,
cutover, fail-closed financial and zero-provider evidence. Do not credit V5's
failed submission focus as passing.

The exact corrected frontend tree already passed SA-run source gates: 19/19
Treasury targeted tests, 66/66 four-file focused tests, 889/889 full tests,
changed-file lint/Prettier, typecheck, diff check and production build. Verify
the pushed source binding and rerun only:

1. `treasury-settings.test.ts` (expected 19/19);
2. the established four-file P3A focused suite (expected 66/66);
3. changed-file ESLint and Prettier;
4. typecheck; and
5. the production/local-preview build needed for browser execution.

Do not rerun the full 889-test suite unless a focused gate fails in a way that
requires diagnosis. Repository-wide lint remains unrelated baseline debt.

## 3. Migration and provider boundary

```text
CREATE_OR_EDIT_MIGRATION_FILES = PROHIBITED
CREATE_NEW_MIGRATION = PROHIBITED
APPLY_M1_OR_M2 = PROHIBITED
APPLY_TO_SHARED_OR_PERSISTENT_DATABASE = PROHIBITED
APPLY_EXISTING_COMMITTED_MIGRATIONS_TO_FRESH_OWNED_DISPOSABLE_LOCAL_DATABASE
= AUTHORIZED_AND_REQUIRED
```

Apply all and only the 74 migrations committed at the pinned backend SHA to a
fresh owned loopback PostgreSQL database and verify accepted checksums. Remove
the database and volume at shutdown. Keep provider variables absent and load an
outbound deny/record guard before backend bootstrap. Provider attempts/actions
must be zero.

## 4. Focused built runtime

Build and run exact backend `dist/main.js` through full AppModule first in
`PAYOUTS`, then `SETTINGS`. Build the exact frontend once with explicit loopback
`VITE_API_URL` and `VITE_STAGE=local`; serve built Vite preview. Authenticate
normally; do not inject sessions.

Seed only deterministic V2/V5-equivalent Owner, Finance, Brand, subscription,
vault and original-source funding-provenance fixtures needed to make Add funds
and Brand Return safely form-ready. Fixture values must be canonical database
state, not intercepted response bodies. Do not fabricate provider success,
AVAILABLE credit or settlement.

Prove root, liveness, database health, route mapping, listening and controlled
shutdown for each started mode.

## 5. Eight-lane browser proof

Use exactly these representative lanes:

| Mode | Role | Command | Width |
| --- | --- | --- | ---: |
| PAYOUTS | Owner | Add funds | 390 |
| PAYOUTS | Owner | Brand Return | 390 |
| PAYOUTS | Finance Admin | Add funds | 1440 |
| PAYOUTS | Finance Admin | Brand Return | 1440 |
| SETTINGS | Owner | Add funds | 390 |
| SETTINGS | Owner | Brand Return | 390 |
| SETTINGS | Finance Admin | Add funds | 1440 |
| SETTINGS | Finance Admin | Brand Return | 1440 |

For each lane:

1. verify only the configured surface has active Add funds/Brand Return
   commands and the inactive surface is compatibility-only;
2. keyboard-open the command and prepare a valid request;
3. focus the submit control and submit with Enter;
4. while delivery of the real-local response is deliberately pending, verify
   the submit remains focused, natively enabled and `aria-disabled=true`;
5. repeat Enter and pointer activation and prove the browser emitted exactly
   one financial POST;
6. verify Tab and Shift+Tab remain within the drawer;
7. release the unchanged real-local response and require canonical
   provider-disabled 503;
8. verify the drawer stays open, focus remains on the submit control, error copy
   is truthful, and subsequent Tab/Shift+Tab remain trapped;
9. run one full-document Axe scan and overflow/contrast/focus-visible check; and
10. close and verify focus returns to the exact command invoker.

Timing interception is permitted only as
`TEST_ONLY_LOCAL_RESPONSE_DELIVERY_DELAY`. It may delay delivery of the exact
local response but may not alter request/body/status/headers, backend execution,
authority, values or provider behavior. Record request counts and hashes before
release.

The eight lanes are the complete fresh V6 browser scope. Reuse verified V1–V5
evidence for the other widths/states. Do not expand to a 32-combination or full
state-family matrix unless one of these lanes yields contradictory evidence.

## 6. Acceptance conditions

The composite P3A gate passes only if fresh V6 plus verified V1–V5 establish:

- the V5 failure does not repeat;
- both Treasury drawers retain focus containment through pending and 503;
- no duplicate browser command occurs;
- Owner/Finance authority is unchanged and Campaign Manager remains read-only;
- exactly one mutation surface is active in each mode and rollback works;
- the existing vault, funding, ledger and Brand Return services are reused;
- zero P3A-owned serious/critical Axe findings and zero document overflow in
  all eight fresh lanes;
- no schema/migration-file/package/lockfile change; and
- zero provider action/external provider attempt.

This does not prove Razorpay capability, production readiness or later P4/P5
financial behavior.

If the identical V5 failure repeats, stop with
`P3A_DRAWER_SUBMISSION_FOCUS_CORRECTION_INEFFECTIVE`. A different P3A-owned
defect is a circuit breaker. Do not change source.

## 7. Evidence and return

Create exactly:

- `docs/ai-collaboration/brand-payouts-v1-p3a-local-runtime-browser-evidence-v6.md`;
- `docs/ai-collaboration/evidence/brand-payouts-p3a-local-runtime-browser-v6/`.

Include a machine-readable index, 335-artifact reuse validation, source
binding, focused source logs, database/runtime lifecycle, eight-lane browser
records/screenshots, response-delay and dedupe proof, Axe/overflow/contrast,
financial/provider summary and cleanup. Sanitize all evidence.

Before commit prove clean source worktrees, evidence-only changes, no owned
runtime/database/private session remains, and index validation from scratch.
Commit/push only the V6 evidence package to the execution-ledger branch. Do not
edit the ledger. Fetch back and verify commit, tree, parent, file set and index.

On pass return exactly:

```text
BP_P3A_FOCUSED_RUNTIME_BROWSER_EVIDENCE_COMPLETE

EVIDENCE_VERSION = V6
EVIDENCE_COMMIT = <40-char SHA>
EVIDENCE_TREE = <40-char SHA>
EVIDENCE_REPORT_PERMALINK = <exact GitHub blob URL>
BACKEND_SHA = 12d235345e2748f676d36d61c62ed4bd9c049592
BACKEND_TREE = 1dd5900068aa7f7fa3aa25dcc0eaef33ee4d7e24
FRONTEND_SHA = f775d33f729e02c020ced5b0a7ffcc662110db9e
FRONTEND_TREE = 30001818c07b231529935dedf12ca059be6bd6dc
V1_TO_V5_EVIDENCE_INTEGRITY = PASS_335_OF_335
FRESH_SOURCE_GATES = PASS_19_TARGETED_66_FOCUSED
SUBMISSION_FOCUS_AND_DEDUPE = PASS_8_OF_8
P3A_CUTOVER_COMPOSITE_GATE = PASS
SERIOUS_P3A_AXE_FINDINGS = 0
CRITICAL_P3A_AXE_FINDINGS = 0
MIGRATION_FILES_CREATED_OR_CHANGED = NONE
PROVIDER_ACTIONS = NONE
RESULT = PASS
```

On blocker, commit/push sanitized bounded evidence and return the stable failure
signature, exact lane/reproduction, suspected files, completed gates, evidence
commit/tree/permalink, `SOURCE_CHANGES = NONE`,
`MIGRATION_FILES_CREATED_OR_CHANGED = NONE`, `PROVIDER_ACTIONS = NONE`,
`P3A_ACCEPTANCE = NOT_SET` and `P4_WORK = NONE`.

STOP. Do not begin P4.
