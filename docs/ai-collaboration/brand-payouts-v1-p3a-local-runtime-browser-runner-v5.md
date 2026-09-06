# Brand Payouts — P3A Local Runtime and Browser Runner V5

`BRAND_PAYOUTS_P3A_LOCAL_RUNTIME_BROWSER_RUNNER_V5`

## 0. Authority and objective

This is the complete replacement local desktop Codex runner assignment. Read
it completely. Do not concatenate it with an earlier runner or chat.

Durable authority:

- Product Authority: `f15a91d0ace8b2c424a539d79dbb120869233105`
- accepted architecture/finite plan: `3fb6b4246aa5f2ecb71c3bbfe99c56e395f30a92`
- autonomous recovery authority: `689feb7a46eb2d52b984ce083be046ac6d38657d`
- technical-autonomy amendment: `7f03411b9940ab16579cd2e176ac9e721edee832`
- MVP cutline: `9c991a8e8c8dfc90ccc4cf18e48ab1629d5f5b4f`
- P3A V1 evidence: `85aba6c74d0d4e9499314c95321e7890336c617e`
- P3A V2 evidence: `db15bde0b8c7544b4cc9a314a235045868896d1f`
- P3A V3 evidence: `858942ac73debfaebd89492a49e74aaf17c16d3e`
- P3A V4 evidence: `176f9cd01e7e32aa82d2ea723d819bcc820e7e92`

V4 proved the disposable database/bootstrap authorization, 74 committed
migration checksums, PAYOUTS AppModule health, the corrected 6.09:1 drawer
contrast, zero serious/critical Axe findings and zero overflow in its two
completed rows. It then reproduced `P3A_DRAWER_FOCUS_RETURN_FAILURE`: the
Payouts async command wrapper disabled its focused trigger before the drawer
captured a return target.

The Systems Architect corrected that defect in one production file and added
one regression covering both Add funds and Brand Return. Your objective is to
verify the exact correction, reuse immutable evidence, run fresh source gates,
complete the full remaining drawer/browser matrix against the corrected SHA,
and commit/push V5 evidence.

This is an evidence relay. Do not accept P3A, edit the ledger, begin P4, change
source, create/change migration files, or invoke a provider. The Systems
Architect reviews V5 and decides `BP-P3A-OPERATIONS-CUTOVER`.

Execution mode: `LOCAL_DESKTOP_P3A_V5_RUNTIME_BROWSER_EVIDENCE_ONLY`

## 1. Immutable inputs

Backend, unchanged:

- repository: `Piyush1087/creator-commerce-backend-v2-clone`
- branch: `brand-payouts/v1-backend`
- head: `12d235345e2748f676d36d61c62ed4bd9c049592`
- tree: `1dd5900068aa7f7fa3aa25dcc0eaef33ee4d7e24`

Frontend, including the focus-return correction:

- repository: `Piyush1087/creator-commerce-frontend-v2-clone`
- branch: `brand-payouts/v1-frontend`
- head: `ca1a289670968eacf2c2c5c31ac626921aa8efba`
- tree: `f410720eb7b176d7f5f0e6d359b9083b362d957e`
- parent: `a8800de192f2e716f405b75f38799271fd9f1a9b`

The complete V4-to-V5 source delta must be exactly:

- production:
  `src/features/brand-payouts/components/PayoutsTreasuryActions.tsx`
- regression:
  `src/features/brand-payouts/brand-payouts-p2.test.ts`

Required behavior:

- the invoked async command remains natively enabled/focusable and carries
  `aria-disabled=true` while its authority read is pending;
- the handler rejects re-entry while either command is pending;
- the other command is natively disabled;
- after the read resolves, the drawer captures the original invoker;
- Escape/Cancel/close restores focus to that invoker; and
- shared `SideDrawer`, APIs, authorization, commands, financial semantics,
  CSS, schema, migrations, packages and provider behavior remain unchanged.

Evidence repository:

- repository: `Piyush1087/dummy_tcs`
- branch: `brand-payouts/v1-execution-ledger`
- required V4 evidence ancestor: `176f9cd01e7e32aa82d2ea723d819bcc820e7e92`
- starting head: exact remote commit containing this V5 runner

Verify remote heads, trees, parents, ancestry, and clean worktrees. Stop on
mismatch. Do not merge, rebase, amend, force-push, or rewrite history.

## 2. Evidence reuse

Read all P3A V1–V4 reports and indexes. Verify:

- V1: 124 indexed artifacts;
- V2: 51 indexed artifacts;
- V3: 12 indexed artifacts;
- V4: 24 indexed artifacts;
- all 211 SHA-256 hashes and byte sizes;
- every commit/tree/source/authority binding; and
- evidence-only changes with no source, schema, migration-file, package,
  lockfile, ledger, or provider mutation.

Label passing inherited work `REUSED_IMMUTABLE_V1_V2_V3_V4_EVIDENCE`.

Reuse the unchanged backend, PostgreSQL/security 50/50, migration-checksum,
read-purity, five-configuration, 168-request/300-assertion admission/replay,
financial fail-closed, non-drawer browser, P2 smoke, and zero-provider results.
Reuse V4 only for database authorization/checksum and root-cause evidence; do
not credit its failed focus return or treat its incomplete browser matrix as
complete.

## 3. Fresh source gates

Against the exact V5 frontend run and record:

1. `brand-payouts-p2.test.ts` targeted result, including the focus regression;
2. the four-file focused suite used in V3/V4;
3. changed-file ESLint and Prettier;
4. typecheck;
5. full Vitest;
6. production build with explicit local-preview configuration; and
7. diff/source/schema/migration/package/lockfile integrity.

Expected:

- targeted Brand Payouts: `29/29`
- four-file focused: `64/64`
- full frontend: `887/887`
- lint/format/typecheck/diff: PASS
- build: PASS with only the pre-existing large-chunk warning

Repository-wide lint remains unrelated baseline debt. Do not repair it.

## 4. Migration and provider boundary

The clarification in the V4 runner remains controlling:

```text
CREATE_OR_EDIT_MIGRATION_FILES = PROHIBITED
CREATE_NEW_MIGRATION = PROHIBITED
APPLY_M1_OR_M2 = PROHIBITED
APPLY_TO_SHARED_OR_PERSISTENT_DATABASE = PROHIBITED
APPLY_EXISTING_COMMITTED_MIGRATIONS_TO_FRESH_OWNED_DISPOSABLE_LOCAL_DATABASE
= AUTHORIZED_AND_REQUIRED
```

Use all and only the migrations committed at the pinned backend SHA. Verify the
74 accepted checksums. Remove the database and volume at shutdown. Keep all
provider variables absent and an outbound deny/record guard active before
backend bootstrap. Provider requests/actions must remain zero.

## 5. Disposable built runtime

Use a fresh loopback-only PostgreSQL database with UTC sessions. Seed only
deterministic V4-equivalent Owner/Finance fixtures required by this matrix.
Build and run exact backend `dist/main.js` through full AppModule in `PAYOUTS`,
then restart it in `SETTINGS`. Build the exact frontend once with
`VITE_API_URL=http://127.0.0.1:<backend-port>` and `VITE_STAGE=local`, then serve
only built Vite preview. Authenticate normally; do not inject sessions.

Prove root, liveness, database health, route mapping, listening, and controlled
shutdown for each process actually started. Do not rerun missing/blank/invalid
configuration or full admission/replay matrices already accepted from V2.

## 6. Mandatory focus regression in the browser

For both Owner and Finance Admin, and for both Add funds and Brand Return in
PAYOUTS mode, prove at every required width:

1. focus the command and activate it with Enter;
2. while the safe GET is deliberately pending, the same trigger remains
   focused, has `aria-disabled=true`, is not natively disabled, displays its
   verifying state, and repeated Enter/click creates no duplicate GET;
3. the sibling command is natively disabled;
4. resolve only the delayed real-local, contract-valid GET;
5. focus enters the drawer and remains trapped with visible focus;
6. Escape closes and restores focus to the exact original trigger;
7. reopen and Cancel closes/restores focus;
8. reopen and the Close button closes/restores focus; and
9. no unexpected request, error, financial POST, or provider call occurs.

Delay/release interception is permitted only for the real local safe GET and
must be labelled `TEST_ONLY_RESPONSE_TIMING_CONTROL`. Do not alter its body,
authority, financial values, or status.

Repeat the existing Settings-surface focus-return proof for both commands,
roles, and widths. Settings is not allowed to regress.

## 7. Complete fresh drawer/accessibility matrix

Use Chromium/Chrome/Edge at exactly 390, 767, 768, and 1440 CSS px; record
viewport height. Scan the complete document including portal content.

Complete every combination of:

- `PAYOUTS` at `/brand/payouts` and `SETTINGS` at
  `/brand/settings/escrow`;
- Owner and Finance Admin;
- Add funds and Brand Return; and
- open, client validation, ready-to-submit, close/reopen, and the authorized
  provider-absent fail-closed presentation.

At minimum all 32 base open-drawer combinations must be fresh against the V5
source. Complete all materially distinct state variants; do not stop after the
first corrected focus assertion passes.

For every row record screenshot, actor, mode, route, viewport, source
classification, complete network/console result, controls, keyboard/focus,
full-document Axe, scroll/client widths, and safe-area clearance. Require:

- active Cancel foreground `#006c4b` or exact RGB equivalent and actual ratio
  at least 4.5:1;
- disabled controls separately and truthfully classified;
- zero P3A-owned serious/critical Axe findings;
- zero document-level horizontal overflow;
- logical keyboard order, visible focus, trap, Escape/Cancel/close and focus
  return;
- usable below-768 and desktop-at/above-768 composition;
- no sensitive provider/bank/KYC/tax/credential/raw diagnostic value;
- no false success/SLA/30-70/TDS/document/release/reversal claim; and
- no provider action.

Retain the four unchanged inactive Email-code findings as disclosed baseline
outside P3A. Retain minor/moderate landmark findings. Neither is permission to
hide a P3A-owned failure.

If the identical focus failure repeats, stop with
`P3A_DRAWER_FOCUS_RETURN_CORRECTION_INEFFECTIVE`. A different P3A-owned defect
is a new circuit breaker. Record exact reproduction and do not change source.

## 8. Composite P3A proof

Combine fresh V5 results with verified immutable V1–V4 evidence without
calling reused evidence fresh. Establish every P3A acceptance requirement:

- exactly one active Add funds/Brand Return surface in each mode;
- server-enforced `BrandTeamMember.role` and command-surface admission;
- Campaign Manager read-only;
- one canonical escrow command path, vault, ledger, funding service, Brand
  Return service, provider boundary and authorization model;
- provider-disabled, fail-closed financial behavior;
- no schema/migration-file change and only disposable committed bootstrap;
- zero provider action;
- corrected drawer contrast and focus behavior across all required rows;
- zero P3A-owned serious/critical Axe findings and zero overflow; and
- unchanged baseline findings separately disclosed.

This evidence does not prove Razorpay capability or production readiness.

## 9. Evidence package and return

Create exactly:

- `docs/ai-collaboration/brand-payouts-v1-p3a-local-runtime-browser-evidence-v5.md`
- `docs/ai-collaboration/evidence/brand-payouts-p3a-local-runtime-browser-v5/`

Include a machine-readable index hashing every artifact, source/authority
binding, V1–V4 reuse validation, fresh source gates, database/migration/runtime
lifecycle, focus-timing and dedupe proof, every browser/Axe/contrast/keyboard/
overflow row, composite coverage, baseline findings, zero-provider proof, and
cleanup. Sanitize all evidence.

Before commit prove source worktrees clean; no source/schema/migration-file/
package/lockfile changes; no owned process/listener/container/volume/private
session remains; and index validation passes from scratch.

Commit/push only the V5 evidence package to the execution-ledger branch. Do not
edit the ledger. Fetch back and verify commit, tree, parent, file set and index.

On pass return exactly:

```text
BP_P3A_LOCAL_RUNTIME_BROWSER_EVIDENCE_COMPLETE

EVIDENCE_VERSION = V5
EVIDENCE_COMMIT = <40-char SHA>
EVIDENCE_TREE = <40-char SHA>
EVIDENCE_REPORT_PERMALINK = <exact GitHub blob URL>
BACKEND_SHA = 12d235345e2748f676d36d61c62ed4bd9c049592
BACKEND_TREE = 1dd5900068aa7f7fa3aa25dcc0eaef33ee4d7e24
FRONTEND_SHA = ca1a289670968eacf2c2c5c31ac626921aa8efba
FRONTEND_TREE = f410720eb7b176d7f5f0e6d359b9083b362d957e
V1_V2_V3_V4_EVIDENCE_INTEGRITY = PASS_211_OF_211
FRESH_FRONTEND_GATES = PASS_64_FOCUSED_887_FULL
ASYNC_TRIGGER_FOCUS_AND_DEDUPE = PASS_ALL_ROLES_COMMANDS_WIDTHS
DRAWER_CONTRAST = PASS_ALL_MODES_ACTORS_WIDTHS_STATES
P3A_COMPOSITE_GATE = PASS
SERIOUS_P3A_AXE_FINDINGS = 0
CRITICAL_P3A_AXE_FINDINGS = 0
DISPOSABLE_DATABASE_EXISTING_MIGRATIONS_APPLIED = YES
MIGRATION_FILES_CREATED_OR_CHANGED = NONE
SOURCE_CHANGES = NONE
PROVIDER_ACTIONS = NONE
RESULT = PASS
```

On blocker, commit/push sanitized bounded evidence and return:

```text
P3A_RUNTIME_BROWSER_CIRCUIT_BREAKER

EVIDENCE_VERSION = V5
EVIDENCE_COMMIT = <40-char SHA>
EVIDENCE_TREE = <40-char SHA>
EVIDENCE_REPORT_PERMALINK = <exact GitHub blob URL>
AFFECTED_BACKEND_SHA = 12d235345e2748f676d36d61c62ed4bd9c049592
AFFECTED_FRONTEND_SHA = ca1a289670968eacf2c2c5c31ac626921aa8efba
FAILURE_SIGNATURE = <stable signature>
EXACT_REPRODUCTION = <mode, actor, route, state, width, action>
SUSPECTED_SOURCE_FILES = <bounded list>
WHY_SOURCE_CHANGE_IS_REQUIRED = <if applicable>
COMPLETED_SAFE_GATES = <summary>
SOURCE_CHANGES = NONE
MIGRATION_FILES_CREATED_OR_CHANGED = NONE
PROVIDER_ACTIONS = NONE
P3A_ACCEPTANCE = NOT_SET
P4_WORK = NONE
```

STOP. Do not self-accept P3A and do not begin P4.
