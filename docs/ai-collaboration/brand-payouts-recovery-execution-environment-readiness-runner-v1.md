# Brand Payouts Recovery — Execution Environment Readiness Runner V1

`BRAND_PAYOUTS_RECOVERY_EXECUTION_ENVIRONMENT_READINESS_RUNNER_V1`

## 0. Authority and terminal objective

Execute this complete assignment in one local Codex run. Do not concatenate it
with an earlier Brand Payouts prompt.

Parent has separately authorized Stage 0 environment readiness. This assignment
does not initiate the replacement Systems Architect and does not authorize P3A
V7 acceptance, application implementation, migration creation/application,
provider inspection/action, merge, deployment, or production change.

Authority:

- frozen recovery charter:
  `23a074b01dbca141ddc997113a6ecbbc14e19f82`;
- Product Authority:
  `f15a91d0ace8b2c424a539d79dbb120869233105`;
- Phase C architecture/finite plan:
  `3fb6b4246aa5f2ecb71c3bbfe99c56e395f30a92`;
- MVP cutline:
  `9c991a8e8c8dfc90ccc4cf18e48ab1629d5f5b4f`;
- discipline-batched topology: frozen charter reference;
- starting execution-ledger branch head: revalidate remote
  `brand-payouts/v1-execution-ledger`, whose required frozen-charter ancestor is
  `23a074b01dbca141ddc997113a6ecbbc14e19f82`.

Exact application inputs to revalidate:

```text
BACKEND_REPOSITORY = Piyush1087/creator-commerce-backend-v2-clone
BACKEND_BRANCH = brand-payouts/v1-backend
BACKEND_SHA = 12d235345e2748f676d36d61c62ed4bd9c049592
BACKEND_TREE = 1dd5900068aa7f7fa3aa25dcc0eaef33ee4d7e24

FRONTEND_REPOSITORY = Piyush1087/creator-commerce-frontend-v2-clone
FRONTEND_BRANCH = brand-payouts/v1-frontend
FRONTEND_SHA = f775d33f729e02c020ced5b0a7ffcc662110db9e
FRONTEND_TREE = 30001818c07b231529935dedf12ca059be6bd6dc
```

Recommended model: GPT-5.6 Terra high or the closest available balanced
agentic coding/browser model. Do not use maximum reasoning for packaging.

Terminal objective:

```text
BRAND_PAYOUTS_RECOVERY_EXECUTION_ENVIRONMENT_READINESS_V1
```

committed, pushed, and fetched back on the execution-ledger branch, with every
required capability truthfully classified and no `NOT_READY_BLOCKING` result.

## 1. Read before acting

Read completely:

1. repository `AGENTS.md` and applicable engineering standards;
2. frozen recovery charter at the exact SHA;
3. organization Systems Architect charter;
4. browser-worker/Codex runner operating standard;
5. execution ledger through current remote head;
6. P3A V6 test-boundary adjudication;
7. P3A V7 runner only to understand the future required environment—do not
   execute its acceptance lanes;
8. relevant backend/frontend package scripts and existing local-preview/runtime
   harnesses.

## 2. Isolation and permitted preparation

Use fresh isolated worktrees/checkouts. Do not disturb another developer's
worktree. Exact remote heads, trees, ancestry, clean state, remotes, Node/npm and
repository-local tooling must be recorded before deeper execution.

You may install or repair local-only tooling outside canonical application
source, configure disposable loopback PostgreSQL, install Playwright browser
binaries, create temporary readiness launchers, and correct ordinary local
environment defects discovered during this run.

Do not change backend/frontend application source, package manifests, lockfiles,
schema, migrations, Product/runtime semantics, provider bindings, or production
configuration. If a repository test-harness source change is genuinely needed,
classify it `NOT_READY_BLOCKING` and stop for separate bounded authority.

Never read Razorpay credentials. Remove provider variables from child process
environments. Install an outbound deny/record guard before backend bootstrap.
Permit only loopback traffic required by the disposable stack plus Git/npm or
browser-install downloads used for environment preparation. No application
request may leave loopback.

## 3. Required capability matrix

Prove all 18 frozen-charter capabilities and classify each exactly as:

```text
READY
READY_WITH_KNOWN_BOUNDARY
NOT_READY_BLOCKING
NOT_REQUIRED_FOR_PROVIDER_DISABLED_MVP
```

`READY_WITH_KNOWN_BOUNDARY` is valid only when every currently required
provider-disabled acceptance path remains reachable. Any unreachable required
state is `NOT_READY_BLOCKING`.

### A. Repository and tooling

1. Fetch/check out exact authority, backend and frontend branches and SHAs.
2. Create and remove clean isolated worktrees without disturbing other work.
3. Run deterministic dependency installation and exact backend/frontend
   production builds. Record Node/npm/tool versions and build results.
4. Prove bounded Git commit/push/fetch-back on the execution-ledger branch. Do
   not create a disposable application-source commit.

### B. Disposable PostgreSQL and backend runtime

5. Create a fresh owned disposable PostgreSQL database/cluster, force UTC,
   apply all and only the 74 existing committed migrations, verify their source
   checksums, query timezone/health, then clean it up.
6. Build and start the full Nest `AppModule` from compiled output against that
   database; prove root/liveness/database health and controlled shutdown.
7. Prove deterministic authenticated Owner, Finance Admin, Campaign Manager,
   unauthorized and cross-Brand fixture capability using normal application
   authentication. Readiness may use the smallest representative non-mutating
   probe sufficient to prove each actor fixture is usable.
8. Prove both `PAYOUTS` and `SETTINGS` command-surface modes can start against
   the same exact source while maintaining exactly one active command surface.

Do not run P3A acceptance or submit a financial command in readiness.

### C. Frontend/browser/accessibility

9. Serve the exact built frontend preview against the local backend.
10. Use a real local browser through Playwright or an equivalent deterministic
    automation fallback.
11. Prove exact viewport control at 390, 767, 768 and desktop/1440.
12. Capture representative screenshot, DOM, console and network records.
13. Inject/run Axe and prove the harness can report serious/critical findings.
14. Prove keyboard/focus inspection, including reading active element, Tab,
    Shift+Tab, Enter, Escape and invoker restoration capability.

These are harness-capability checks, not a new P3A browser matrix.

### D. Future V7 test-only boundary and safety

15. Create one temporary launcher outside every repository worktree importing
    the exact built `AppModule` and overriding only
    `BrandReturnRefundProvider`, using the V7 contract:

```text
capabilities() = [{ sourceType: GATEWAY, currency: INR }]
assertExecutionAvailable() = throw BrandReturnProviderSetupRequiredError
createRefund() = MUST_NOT_BE_CALLED
fetchRefund() = MUST_NOT_BE_CALLED
verifyTrustedFundingEvidence() = MUST_NOT_BE_CALLED
```

Start it only long enough to prove dependency override, route mapping and
positive test-only form reachability can be created from canonical provenance.
Do not execute the V7 Return submission lane. Instrument method counts and prove
the launcher is outside repositories, absent from deployable source/config, and
cannot be selected by production environment/configuration.

16. Prove the outbound guard records zero non-loopback application attempts and
    zero provider method/action/SDK/client invocation.

### E. Evidence and cleanup

17. Produce a compact machine-readable index with SHA-256 and byte size for
    every new readiness artifact. Reuse exact immutable repository/source facts
    by SHA rather than copying historical evidence.
18. Prove cleanup of owned processes, ports, database/cluster, temporary
    worktrees, launchers, browser profiles, generated credentials, sessions and
    temporary files. Exact source worktrees must be clean at their pins.

## 4. Required durable output

Create only:

```text
docs/ai-collaboration/brand-payouts-recovery-execution-environment-readiness-v1.md
docs/ai-collaboration/evidence/brand-payouts-recovery-readiness-v1/
```

Keep evidence compact. Required machine-readable files:

```text
index.json
source-binding.json
tooling-builds.json
postgres-runtime.json
actor-modes.json
browser-accessibility.json
test-boundary-isolation.json
outbound-provider-guard.json
cleanup.json
```

Small sanitized logs/screenshots may be added only when they materially prove a
different capability. Do not copy P2/P3A evidence trees.

The Markdown report must include:

- exact frozen charter, current ledger, backend and frontend SHAs/trees;
- the 18-row capability matrix and evidence pointer for every row;
- environment repairs performed;
- build, PostgreSQL, runtime, browser, actor/mode and test-boundary results;
- migration source changes, disposable replay and persistent mutation as
  separate fields;
- provider/network result;
- cleanup result;
- exact readiness decision.

## 5. Gate and correction authority

Fix ordinary environment defects in the same run and repeat only the affected
probe. Do not impose a numeric correction ceiling.

Stop immediately for Product/architecture/financial/RBAC ambiguity, required
repository source modification, migration creation/change, provider credential
or action requirement, production configuration change, branch divergence, an
unreachable required acceptance state, or inability to clean owned resources.

On pass require:

```text
ALL_REQUIRED_CAPABILITIES = READY_OR_READY_WITH_KNOWN_BOUNDARY
UNREACHABLE_REQUIRED_ACCEPTANCE_STATES = NONE
BACKEND_FRONTEND_SOURCE_CHANGES = NONE
MIGRATION_FILES_CREATED_OR_CHANGED = NONE
DISPOSABLE_POSTGRES_EXISTING_MIGRATIONS_REPLAYED = YES_74
NON_DISPOSABLE_DATABASE_MUTATION = NONE
PROVIDER_ACTIONS = NONE
NON_LOOPBACK_APPLICATION_ATTEMPTS = 0
TEST_ONLY_BOUNDARY_PRODUCTION_SELECTABLE = NO
CLEANUP = PASS
```

Commit/push only the readiness report/evidence to
`brand-payouts/v1-execution-ledger`, fetch it back, and verify exact parent,
tree, file set, index and clean worktrees. Do not edit the execution ledger and
do not initiate the replacement SA.

## 6. Required return

On pass return exactly:

```text
BRAND_PAYOUTS_RECOVERY_ENVIRONMENT_READINESS_COMPLETE

CHARTER_SHA = 23a074b01dbca141ddc997113a6ecbbc14e19f82
STARTING_LEDGER_SHA = <40-char SHA>
READINESS_EVIDENCE_COMMIT = <40-char SHA>
READINESS_EVIDENCE_TREE = <40-char SHA>
READINESS_REPORT_PERMALINK = <exact GitHub blob URL>
BACKEND_SHA = 12d235345e2748f676d36d61c62ed4bd9c049592
FRONTEND_SHA = f775d33f729e02c020ced5b0a7ffcc662110db9e
REQUIRED_CAPABILITIES = PASS_18_OF_18
NOT_READY_BLOCKING = 0
UNREACHABLE_REQUIRED_ACCEPTANCE_STATES = NONE
MIGRATION_FILES_CREATED_OR_CHANGED = NONE
DISPOSABLE_POSTGRES_EXISTING_MIGRATIONS_REPLAYED = YES_74
NON_DISPOSABLE_DATABASE_MUTATION = NONE
PROVIDER_ACTIONS = NONE
NON_LOOPBACK_APPLICATION_ATTEMPTS = 0
TEST_ONLY_BOUNDARY_PRODUCTION_SELECTABLE = NO
CLEANUP = PASS
RESULT = READY_FOR_REPLACEMENT_SA_INITIATION
```

On blocker, persist only sanitized compact evidence if it helps remediation and
return the stable failure signature, failed capability rows, exact remediation,
source/migration/provider state and cleanup. Do not label readiness complete.
