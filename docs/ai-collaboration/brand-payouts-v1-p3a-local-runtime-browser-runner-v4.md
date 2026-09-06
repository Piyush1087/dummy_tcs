# Brand Payouts — P3A Local Runtime and Browser Runner V4

`BRAND_PAYOUTS_P3A_LOCAL_RUNTIME_BROWSER_RUNNER_V4`

## 0. Complete authority and objective

This is the complete replacement assignment for the local desktop Codex
runner. Read it completely. Do not concatenate it with V1, V2, V3, or chat.

Durable authority:

- Product Authority: `f15a91d0ace8b2c424a539d79dbb120869233105`
- accepted architecture/finite plan: `3fb6b4246aa5f2ecb71c3bbfe99c56e395f30a92`
- autonomous recovery authority: `689feb7a46eb2d52b984ce083be046ac6d38657d`
- technical-autonomy amendment: `7f03411b9940ab16579cd2e176ac9e721edee832`
- MVP cutline: `9c991a8e8c8dfc90ccc4cf18e48ab1629d5f5b4f`
- P3A V1 evidence: `85aba6c74d0d4e9499314c95321e7890336c617e`
- P3A V2 evidence: `db15bde0b8c7544b4cc9a314a235045868896d1f`
- P3A V3 evidence: `858942ac73debfaebd89492a49e74aaf17c16d3e`

V3 stopped before runtime because its direct instruction was interpreted as
conflicting with disposable-database setup. This V4 assignment resolves that
ambiguity. No source defect or source change is involved.

Your objective is to reuse verified V1/V2/V3 evidence, execute only the
remaining disposable runtime and affected Treasury-drawer browser gates, and
commit/push a V4 evidence package. Do not accept P3A, edit the ledger, or begin
P4. The Systems Architect reviews V4 and decides `BP-P3A-OPERATIONS-CUTOVER`.

Execution mode: `LOCAL_DESKTOP_P3A_V4_RUNTIME_BROWSER_EVIDENCE_ONLY`

## 1. Explicit migration authorization clarification

The controlling recovery authority at
`689feb7a46eb2d52b984ce083be046ac6d38657d`, sections 5–6, authorizes the local
runner to provision a fresh disposable PostgreSQL database and apply the
already-accepted repository migrations needed to boot it.

Freeze this exact distinction:

```text
CREATE_OR_EDIT_MIGRATION_FILES = PROHIBITED
CREATE_NEW_MIGRATION = PROHIBITED
APPLY_M1_OR_M2 = PROHIBITED
APPLY_TO_SHARED_DEVELOPMENT_STAGING_OR_PRODUCTION_DATABASE = PROHIBITED
APPLY_EXISTING_COMMITTED_MIGRATIONS_TO_FRESH_OWNED_DISPOSABLE_LOCAL_DATABASE
= AUTHORIZED_AND_REQUIRED_FOR_THIS_EVIDENCE_RUN
```

Applying the exact committed migration history from zero to a fresh,
loopback-only, runner-owned database is test-fixture bootstrap. It is not an
authorization to change schema authority or apply a new Payouts migration.

Use all and only the migrations already committed at the pinned backend SHA.
Verify the expected count/checksums against accepted V1/V2 evidence. Stop if a
migration file differs, an uncommitted/new migration appears, the database is
not fresh and runner-owned, or any target is shared or persistent. Remove the
disposable database and volume at shutdown.

Report both:

```text
MIGRATION_FILES_CREATED_OR_CHANGED = NONE
DISPOSABLE_DATABASE_EXISTING_MIGRATIONS_APPLIED = YES
```

This clarification supersedes only the ambiguous wording that blocked V3. All
other V3 scope, safety, and acceptance requirements remain intact.

## 2. Immutable source and evidence inputs

Backend:

- repository: `Piyush1087/creator-commerce-backend-v2-clone`
- branch: `brand-payouts/v1-backend`
- head: `12d235345e2748f676d36d61c62ed4bd9c049592`
- tree: `1dd5900068aa7f7fa3aa25dcc0eaef33ee4d7e24`

Frontend:

- repository: `Piyush1087/creator-commerce-frontend-v2-clone`
- branch: `brand-payouts/v1-frontend`
- head: `a8800de192f2e716f405b75f38799271fd9f1a9b`
- tree: `4c47e51af0de16fa8c2f9ce305d02de37b65a470`
- parent: `f6b2c878e652d8131cbad0983f77fc3bffce3ab0`

Evidence repository:

- repository: `Piyush1087/dummy_tcs`
- branch: `brand-payouts/v1-execution-ledger`
- required V3 evidence ancestor: `858942ac73debfaebd89492a49e74aaf17c16d3e`
- starting head: exact remote commit containing this V4 runner

Fetch and verify all remote heads, trees, ancestry, and clean source worktrees.
Stop on mismatch. Do not merge, rebase, amend, force-push, or rewrite history.

## 3. Reuse integrity and source gates

Read the V1, V2, and V3 reports and indexes completely. Verify:

- V1 commit/tree and all 124 indexed artifacts;
- V2 commit/tree and all 51 indexed artifacts;
- V3 commit/tree and all 12 indexed artifacts;
- every indexed SHA-256 and byte size;
- source and authority binding; and
- absence of source, migration-file, package/lockfile, ledger, and provider
  changes in the evidence commits.

Label the 187 verified artifacts `REUSED_IMMUTABLE_V1_V2_V3_EVIDENCE`.

Reuse V3's passing 63/63 focused tests, 886/886 full tests, changed-file
lint/format, typecheck, production build, and diff integrity. Do not rerun them
unless integrity fails or the source head differs. Reuse V1/V2 backend,
PostgreSQL/security 50/50, read-purity, five-configuration, 168-request/
300-assertion admission/replay, fail-closed financial, non-drawer browser,
responsive, and zero-provider results exactly as classified in V3.

Do not inherit the failed V2 drawer accessibility outcome. Do not claim runtime
or browser completion from V3; V3 did not execute those gates.

## 4. Hard prohibitions

Do not change source, tests, CSS, dependencies, lockfiles, generated source,
Prisma schema, or committed migration files. Do not create a migration, apply
M1/M2, use a non-disposable database, inspect secrets, call Razorpay/provider
systems, activate money movement, patch a bundle, inject browser CSS/tokens,
weaken Axe, use a development frontend server, expose private values, edit prior
evidence, edit the ledger, accept P3A, or begin P4.

Temporary scripts must remain outside source repositories and be removed at
shutdown.

## 5. Disposable built runtime

1. Provision a fresh loopback-only PostgreSQL database with UTC sessions.
2. Apply all and only existing committed migrations as authorized in section 1.
3. Seed only deterministic test-safe V2-equivalent Owner and Finance fixtures
   required for the affected drawer matrix.
4. Build the exact backend and run `dist/main.js` through full AppModule first
   in `PAYOUTS`, then in `SETTINGS`, restarting between configurations.
5. Build the exact frontend once with
   `VITE_API_URL=http://127.0.0.1:<backend-port>` and `VITE_STAGE=local`; serve
   only the built Vite preview.
6. Authenticate normally. Keep provider variables absent and install an
   outbound deny/record guard before bootstrap.
7. Prove root, liveness, database health, routes, listening, and clean shutdown
   for every process actually started.

Do not repeat the already-accepted missing/blank/invalid configuration,
admission/replay, financial mutation, or unrelated browser matrices.

## 6. Fresh affected browser matrix

Use Chromium/Chrome/Edge at exactly 390, 767, 768, and 1440 CSS px. Record
viewport height and scan the complete document, including portal content.

Cover every combination of:

- `PAYOUTS` mode at `/brand/payouts` and `SETTINGS` mode at
  `/brand/settings/escrow`;
- Owner and Finance Admin;
- Add funds and Brand Return drawers; and
- open, client-validation, close/reopen, and provider-absent fail-closed
  presentation where safely driveable without provider action.

At minimum execute all 32 base open-drawer rows (2 modes × 2 actors × 2 drawers
× 4 widths), plus every materially distinct validation, close/reopen, and
fail-closed row. Do not rerun unaffected overview/detail/pagination states.

For each row record screenshot, mode, route, actor, viewport, source
classification, network/console result, controls, focus/keyboard, full-document
Axe, scroll/client width, and safe-area clearance. Verify:

- active Cancel computed foreground is `#006c4b` or exact RGB equivalent;
- actual foreground/background contrast is at least 4.5:1;
- disabled controls remain truthfully classified and are not represented as an
  active-control contrast pass;
- zero P3A-owned serious/critical Axe findings;
- zero document-level horizontal overflow;
- logical order, visible focus, modal focus trap, Escape/close, and focus return;
- no unexpected Payouts console/network error;
- no provider request or financial success claim; and
- no source-sensitive bank, KYC, tax, or provider diagnostic value is exposed.

Retain the four unchanged inactive Email-code sign-in findings as disclosed
baseline outside P3A. They must neither fail nor be hidden inside this scoped
P3A acceptance assessment.

The repeated corrected-selector failure is
`P3A_DRAWER_CANCEL_CONTRAST_CORRECTION_INEFFECTIVE`. Any different P3A-owned
serious/critical defect is a new circuit breaker. Record exact mode, actor,
route, state, width, selector, computed colors, and suspected source. Do not
change source.

## 7. Composite P3A proof

Explicitly combine fresh V4 evidence with verified immutable V1/V2/V3 evidence
without calling reused work fresh. Establish:

- exactly one active Add funds/Brand Return surface per configuration;
- server-enforced `BrandTeamMember.role` and command-surface admission;
- Campaign Manager read-only behavior;
- existing canonical escrow services as the only command path;
- provider-disabled/fail-closed Add funds and Brand Return;
- one vault, ledger, funding service, Return service, provider boundary, and
  authorization model;
- no migration-file/schema change and only authorized disposable bootstrap;
- zero provider action;
- zero P3A-owned serious/critical Axe findings and zero document overflow; and
- separately disclosed unchanged baseline findings.

This does not prove Razorpay capability or production readiness.

## 8. Evidence package and return

Create exactly:

- `docs/ai-collaboration/brand-payouts-v1-p3a-local-runtime-browser-evidence-v4.md`
- `docs/ai-collaboration/evidence/brand-payouts-p3a-local-runtime-browser-v4/`

Include a machine-readable index hashing every artifact, authority/source
binding, V1/V2/V3 reuse validation, migration-authorization classification,
runtime lifecycle, fresh browser/Axe/contrast/keyboard/overflow results,
composite P3A coverage, baseline findings, zero-provider proof, and cleanup.
Sanitize all evidence.

Before commit, prove source worktrees clean; no source/schema/migration-file/
package/lockfile changes; no owned listener, process, container, volume, or
private session remains; and the evidence index validates from scratch.

Commit and push only the V4 evidence package to the execution-ledger branch.
Do not edit the ledger. Fetch back and verify commit, tree, parent, file set,
and index.

On pass return exactly:

```text
BP_P3A_LOCAL_RUNTIME_BROWSER_EVIDENCE_COMPLETE

EVIDENCE_VERSION = V4
EVIDENCE_COMMIT = <40-char SHA>
EVIDENCE_TREE = <40-char SHA>
EVIDENCE_REPORT_PERMALINK = <exact GitHub blob URL>
BACKEND_SHA = 12d235345e2748f676d36d61c62ed4bd9c049592
BACKEND_TREE = 1dd5900068aa7f7fa3aa25dcc0eaef33ee4d7e24
FRONTEND_SHA = a8800de192f2e716f405b75f38799271fd9f1a9b
FRONTEND_TREE = 4c47e51af0de16fa8c2f9ce305d02de37b65a470
V1_V2_V3_EVIDENCE_INTEGRITY = PASS_187_OF_187
DISPOSABLE_DATABASE_EXISTING_MIGRATIONS_APPLIED = YES
MIGRATION_FILES_CREATED_OR_CHANGED = NONE
DRAWER_CONTRAST = PASS_ALL_MODES_ACTORS_WIDTHS_STATES
P3A_COMPOSITE_GATE = PASS
SERIOUS_P3A_AXE_FINDINGS = 0
CRITICAL_P3A_AXE_FINDINGS = 0
SOURCE_CHANGES = NONE
PROVIDER_ACTIONS = NONE
RESULT = PASS
```

On blocker return the V3 circuit-breaker contract with
`EVIDENCE_VERSION = V4`, exact reproduction, and the migration fields above.

STOP. Do not self-accept P3A and do not begin P4.
