# Brand Payouts Recovery — Execution Environment Readiness V1

`BRAND_PAYOUTS_RECOVERY_EXECUTION_ENVIRONMENT_READINESS_V1`

## Source binding

| Authority | Exact commit/tree |
| --- | --- |
| Frozen recovery charter | `23a074b01dbca141ddc997113a6ecbbc14e19f82` |
| Product Authority | `f15a91d0ace8b2c424a539d79dbb120869233105` |
| Phase C architecture/finite plan | `3fb6b4246aa5f2ecb71c3bbfe99c56e395f30a92` |
| MVP cutline | `9c991a8e8c8dfc90ccc4cf18e48ab1629d5f5b4f` |
| Starting execution ledger | `1bd5b3c97f222312e2d3ba8650d88e3670b1b98d` |
| Backend | `12d235345e2748f676d36d61c62ed4bd9c049592` / `1dd5900068aa7f7fa3aa25dcc0eaef33ee4d7e24` |
| Frontend | `f775d33f729e02c020ced5b0a7ffcc662110db9e` / `30001818c07b231529935dedf12ca059be6bd6dc` |

The remote branch heads matched the assigned SHAs, the ledger contains the frozen-charter ancestor, and all source probes finished clean with no branch divergence. See [source-binding.json](evidence/brand-payouts-recovery-readiness-v1/source-binding.json).

## Capability matrix

| # | Capability | Classification | Evidence |
| ---: | --- | --- | --- |
| 1 | Exact authority/backend/frontend fetch and checkout | READY | `source-binding.json` |
| 2 | Clean isolated worktree create/remove | READY | `tooling-builds.json`, `cleanup.json` |
| 3 | Deterministic installs and exact production builds | READY | `tooling-builds.json` |
| 4 | Bounded ledger commit/push/fetch-back | READY | This additive readiness package and post-push parent/tree/file verification |
| 5 | Fresh UTC PostgreSQL and exactly 74 committed migrations/checksums | READY | `postgres-runtime.json` |
| 6 | Full compiled AppModule root/liveness/database health/shutdown | READY | `postgres-runtime.json` |
| 7 | Owner, Finance, Campaign Manager, unauthorized and cross-Brand fixtures | READY | `actor-modes.json` |
| 8 | PAYOUTS and SETTINGS single-command-surface startup | READY | `actor-modes.json` |
| 9 | Exact built frontend preview against local backend | READY | `browser-accessibility.json` |
| 10 | Real deterministic local browser | READY | `browser-accessibility.json` |
| 11 | Exact 390/767/768/1440 viewport control | READY | `browser-accessibility.json` |
| 12 | Screenshot, DOM, console and network capture | READY | `browser-accessibility.json`, `browser-390.png` |
| 13 | Axe serious/critical reporting | READY_WITH_KNOWN_BOUNDARY | `browser-accessibility.json` |
| 14 | Active element, Tab, Shift+Tab, Enter, Escape, invoker restoration | READY | `browser-accessibility.json` |
| 15 | External ephemeral V7-contract AppModule override and positive reachability | READY | `test-boundary-isolation.json` |
| 16 | Zero escaped application/provider traffic and zero forbidden provider methods | READY_WITH_KNOWN_BOUNDARY | `outbound-provider-guard.json` |
| 17 | Compact SHA-256/size index | READY | `index.json` |
| 18 | Complete owned-resource cleanup and clean source pins | READY | `cleanup.json` |

`READY_WITH_KNOWN_BOUNDARY` is limited to two non-blocking harness facts: the unauthenticated landing surface has two pre-existing moderate Axe findings, and its public font requests must remain browser-guarded in this environment. Serious/critical application findings are zero. The accepted guarded probe blocked those font requests before egress and recorded zero escaped non-loopback traffic, so every provider-disabled acceptance path remains reachable.

## Environment and build results

Node `24.19.0`, npm `11.17.0`, Git `2.55.0.windows.3`, Docker client/server `29.7.2`, Playwright `1.61.1`, and Chromium `149.0.7827.55` were recorded. Both `npm ci` installs passed. The frontend production/local-preview build passed.

The first backend build exposed a local npm lifecycle-script policy boundary: the Prisma client had not been generated, producing 1,760 derivative TypeScript errors. Running the repository-owned `npm run prisma:generate` repaired only local generated tooling; repeating the backend build passed. No application source, manifest, lockfile, schema or migration changed.

## PostgreSQL, runtime, actors and modes

A fresh owned loopback PostgreSQL `17.11` container ran in UTC. Prisma found and applied all and only 74 committed migrations. Database migration checksums matched all 74 source files; their ordered checksum-list SHA-256 is `772f19f4319add8ad8e14e31b628333dc812451f3405117776e36a5fc4e540e7`.

The exact compiled full `AppModule` returned HTTP 200 for root, liveness and database health. It started separately in PAYOUTS and SETTINGS modes with exactly one configured active command surface and shut down between modes. Normal password authentication plus `GET /api/v1/auth/me` passed for Owner, Finance Admin, Campaign Manager, and a separately bound cross-Brand Owner. The unauthenticated probe returned 401. No financial command was submitted.

## Browser and accessibility

The exact local-preview frontend build served HTTP 200. Real Chromium proved exact widths 390, 767, 768 and 1440. The package contains a representative full-page screenshot and the SHA-256/size of the discarded raw DOM capture under the compact-evidence policy; console and network capture were active. The application scan reported zero serious/critical findings and two pre-existing moderate landing-page findings. A separate isolated synthetic DOM proved the Axe harness can report one serious and two critical violations.

The focus probe read `document.activeElement`; Enter opened the test dialog, Tab and Shift+Tab moved deterministically, and Escape restored the exact invoker. The initial preparation probe revealed public font requests before the browser guard was installed. The affected browser probe was repeated with the guard active: 24 public-font requests were blocked before egress and zero non-loopback requests escaped.

## Test-only boundary and safety

One temporary launcher outside every repository imported the exact built `AppModule` and overrode only `BrandReturnRefundProvider`. Its final SHA-256 was `2816a0db491e9eb3365c9b40b28549565856788bc5d3c0161b4bee5b372d2b03` at 2,749 bytes. It projected exactly GATEWAY/INR. With one canonical proven-source lot, the normal authenticated summary reported positive `self_service_returnable_balance = 1000`. `assertExecutionAvailable()` threw `BrandReturnProviderSetupRequiredError` with `PROVIDER_SETUP_REQUIRED`; `createRefund`, `fetchRefund`, and `verifyTrustedFundingEvidence` remained at zero calls.

Razorpay/provider variables were removed from every child environment and credentials were never read. The guard was loaded before each backend bootstrap. Accepted backend, boundary and browser probes recorded zero escaped non-loopback application attempts, zero provider SDK/client invocation and zero provider action. The launcher was absent from deployable source/configuration, could not be selected by production configuration, and was deleted.

## Mutation and cleanup fields

```text
BACKEND_FRONTEND_SOURCE_CHANGES = NONE
MIGRATION_FILES_CREATED_OR_CHANGED = NONE
DISPOSABLE_POSTGRES_EXISTING_MIGRATIONS_REPLAYED = YES_74
NON_DISPOSABLE_DATABASE_MUTATION = NONE
PROVIDER_ACTIONS = NONE
NON_LOOPBACK_APPLICATION_ATTEMPTS = 0
TEST_ONLY_BOUNDARY_PRODUCTION_SELECTABLE = NO
CLEANUP = PASS
```

All owned processes, ports, database/container storage, temporary worktree, launcher, browser profile, generated credentials, sessions and temporary scripts/files were removed. Exact backend and frontend source checkouts remained clean at their pins.

## Readiness decision

```text
ALL_REQUIRED_CAPABILITIES = READY_OR_READY_WITH_KNOWN_BOUNDARY
UNREACHABLE_REQUIRED_ACCEPTANCE_STATES = NONE
NOT_READY_BLOCKING = 0
RESULT = READY_FOR_REPLACEMENT_SA_INITIATION
```

This readiness result does not accept P3A V7, initiate the replacement Systems Architect, implement application work, create/apply a new migration, inspect or act on a provider, merge, deploy, or change production.
