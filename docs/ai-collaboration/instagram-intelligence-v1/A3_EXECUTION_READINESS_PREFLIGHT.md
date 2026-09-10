# A3 Execution-readiness preflight

```text
PACKET = A3
RESULT = A3_CORRECTION_REQUIRED
A3_ACCEPTED = NO
B1 = PROHIBITED_PENDING_A3
CLOUD_ENVIRONMENT_DISCOVERY_CORRECTION_CYCLES = 0
EXTERNAL_LOCAL_CORRECTION_CYCLES_USED = 2
PROVIDER_OR_META_CALLS = NONE
FEATURE_IMPLEMENTATION = NONE
```

## External local reconstruction entry

The accepted A1/A2 predecessor chain and the cloud preflight evidence below are
preserved as historical route-discovery evidence. They do not consume an A3
correction cycle. This external local execution entered A3 at correction cycle
0 with the following verified transfer and reconstruction identities:

| Repository | Patch SHA-256 | Reconstructed local SHA | Reconstructed tree |
|---|---|---|---|
| authority | `2275f0a6b1c7fc7eda272493e668621223405fce7f0e2e324fdf8548e8b0c288` | `171221a54e9d478fd1fca047a4cbafca660e961c` | `51fddcfb05956f0b408bda177248ac2fda58c722` |
| backend | `09fc20dc827356ad4e05da632fa8d7fa8ae183cc8b01e41889f894518c73f552` | `4d813f7298b45a0462710650250179341708bc4d` | `6a35db9d580a1b6f9a0775371f3368bdd60a871d` |
| frontend | `bf15b51a27b6609a2f020d9cc52a7d3acf328cf010e2c549238e3acdc72e2e8d` | `24bac3eb7b1b554188627b3e7af4e3d1c0bed05b` | `2693d807f4f322b0a38cf4f6d897b81a3df85ca7` |

```text
EXTERNAL_LOCAL_ATTEMPT = A3_CORRECTION_CYCLE_0
LOCAL_EXECUTION_STATUS = COMPLETE_WITH_MANDATORY_BROWSER_CONTRACT_FAILURE
```

## External local outcome

The external runner completed every requested execution route without starting
B1. PostgreSQL, migrations, backend health, role/tenant authorization, exact
viewports, keyboard/focus, overflow, Axe, normal publication and fetch-back all
executed locally. A3 is not ready for Child-SA acceptance because the existing
authenticated Brand Centre route rejects the backend Brand projection at the
frontend runtime contract and renders its fail-closed error state. The failing
live compatibility probe reports field paths and error categories only.

### Gate matrix

| Mandatory gate | Result | Sanitized proof |
|---|---|---|
| Inputs/remotes/worktrees | PASS | Expected GitHub identities; supplied roots clean; isolated worktrees; no reset, clean, stash or force operation. |
| Transfer secret scan/checksums/manifest | PASS | Manifest present; high-confidence secret-format scan passed; all three supplied SHA-256 values exact. |
| Frozen bases | PASS | dummy `1748c97b65e8c57d5a640b262c1f9ec4f6c54170` / `f47e18b32157cc9924fa97bc6e5efe9f9fd540ac`; backend `a95d0d871cbb04d37ab9cb042e17a1e397a1fb9d` / `d5a31a9bff38b56ad01c2197b3d37514e0f39955`; frontend `249de1a2fcaeffa013dbeb9d042f7387f8d3f972` / `a8e3a5937e4001997736d0c05a0e06f1c99b7d1b`. |
| Patch reconstruction/inventory | PASS | `git am --3way` clean; exact accepted trees and manifest inventories. |
| Immutable installs | PASS | Backend 808 packages; frontend initially 294 packages; both `npm ci` exited 0. Existing npm audit findings were not auto-fixed. |
| Backend generate/build/contracts/DE | PASS | Prisma Client 6.19.3 generated; build passed; 3 files / 33 focused tests passed. |
| Provider-neutral DI/no call | PASS | One `InstagramGraphClient` provider-token override fixture; no real adapter invocation; browser provider-call count 0; no Meta/Graph credential or request. |
| Backend scoped lint/frozen Brand bundle | PASS | Changed TypeScript lint passed; exact pinned source `bbb0be3345c36e9cc7c4f06ca68fb491b742b83f` verified without bundle mutation. |
| Frontend test/build | PASS | 135 files / 1076 tests passed; production build passed before and after A3 harness dependency changes. |
| PostgreSQL/migrations | PASS | Disposable `postgres:17-alpine`, PostgreSQL 17.11, tmpfs storage, random loopback port, synthetic unreported credentials; 87 migrations applied from empty DB; Prisma status current. |
| DB connectivity/extensions | PASS | `SELECT 1` succeeded; database `bs07_instagram_a3`; installed extension inventory contained `plpgsql`; no additional accepted migration required an extra extension. |
| PostgreSQL authorization/tenant isolation | PASS | Existing `brand-workspace-authorization.postgres.test.ts`: 1 file / 11 tests passed, including active roles and cross-Brand isolation. |
| Backend boot/health | PASS | Correction cycle 1 supplied repository-required Postmark configuration names with synthetic values; `GET /health/live` = 200/`ok`; `GET /health` = 200/`ok`, database `up`, zero errors. No provider call. |
| Auth fixtures/tenant routing | PASS | Two isolated Brand tenants and four active local users; Owner, Campaign Manager and Finance Admin each authenticated and resolved only the primary Brand; supplied second-tenant selector/header did not alter server-derived context. |
| Responsive/keyboard/overflow | PASS | 390, 767, 768 and 1440 px structural runs passed; visible navigation 4/4/8/8; heading order `[1]`; mobile dialog focus and return passed at 390/767; no document horizontal overflow. |
| Axe | PASS | At every required width: serious 0, critical 0, moderate 0, minor 0. |
| Authenticated Brand projection | FAIL | Runtime schema rejected backend `intelligenceField` projections with `unrecognized_keys` at `visualIdentity.style`, seven `brandIdentity.*` fields, `audience.state`, and `serviceability.state`; UI rendered sanitized “Could not load Brand information”. Production contract correction is outside the authorized A3 test-harness scope. |
| Manual refresh authority | PASS | Contract test: Owner `ALLOW`; Campaign Manager `ALLOW`; Finance Admin `DENY_READ_ONLY`; unrelated Settings lifecycle authority unchanged. |
| Final secret/runtime-artifact scan | PASS | Transfer and planned content passed; screenshots visually inspected; no `.env`, credential, token, signed media URL, raw media, database volume, build output or screenshot tracked. No secret value is recorded here. |
| Backend publication/fetch-back | PASS | local/remote `4ab0e5f4ac124911a30ccc434934b6f645a4cded`; tree `747ca7878ea465e82d927c0ea22f1e86efe95b0f`; exact equality and base ancestry. |
| Frontend publication/fetch-back | PASS | local/remote `b16b016af0cdd0ade7189af953e22a92a3faa8ed`; tree `d4a0d7eaacb5e89541670b7dee31564c3d66c763`; exact equality and base ancestry. |
| Authority publication/fetch-back | PENDING_SELF_IDENTITY | The final authority commit cannot encode its own SHA/tree. The immutable runner report supplies the fetched values after normal push. |
| Service cleanup | PENDING_FINALIZATION | Backend and disposable PostgreSQL remain only until authority publication/fetch-back completes; final report records cleanup. |
| Optional live Graph | NOT RUN | Provider-neutral proof only, as required. |

### Exact execution commands

```text
git fetch --prune origin
git worktree add -b <implementation-branch> <isolated-path> <exact-base>
git am --3way <repository-mbox>
npm ci
npm run prisma:generate
npm run build
npx vitest run --config vitest.config.ts <instagram-contract> <provider-neutral> <DE-compatibility>
npx eslint <changed-backend-files-and-A3-harness>
npm run intelligence:contracts:verify -- --source <clean-bbb0be3-worktree> --commit bbb0be3345c36e9cc7c4f06ca68fb491b742b83f
npm run test
docker run --rm -d --tmpfs /var/lib/postgresql/data ... postgres:17-alpine
npm run db:migrate:deploy
npx prisma migrate status
npx vitest run --config vitest.config.ts src/features/brand-centre/brand-workspace-authorization.postgres.test.ts
node dist/main.js
GET /health/live
GET /health
npx ts-node scripts/a3-instagram-browser-fixtures.ts
node scripts/a3-instagram-browser-preflight.mjs
npx vitest run --config vitest.config.ts src/a3-harness/brand-response-contract.test.ts
git push --set-upstream origin <implementation-branch>
git fetch --prune origin
```

### Local tools and evidence

```text
OS = Microsoft Windows NT 10.0.26200.0
ARCHITECTURE = X64
NODE = v24.19.0
NPM = 11.17.0
DOCKER_CLIENT_SERVER = 29.7.2
DOCKER_COMPOSE = ABSENT_NOT_REQUIRED
POSTGRESQL = 17.11
PRISMA_CLIENT = 6.19.3
CHROME = 152.0.7977.83
EDGE = 152.0.4191.66
PLAYWRIGHT = 1.63.0
AXE_PLAYWRIGHT = 4.13.0
```

Screenshot evidence SHA-256:

- 390: `aed9adf18a3334774f498c863b57f1bb1609f524ce451b7a5edcb41de1a18b0a`
- 767: `efbfd6e3f62f0d19b278379dace0a3d05eeaa5792137dfab7fbff4fed7af4d34`
- 768: `3e5e54e46a38c3a42dd5fbd1caa601d99fbc67d87780ca6fb084c68272511d6b`
- desktop 1440: `a65c04d0c09ecfc53edef96af821fc5f75ddf5c3a50bed71c8c00fff039bcc37`

### Files created locally beyond the transferred patch set

- backend: `scripts/a3-instagram-browser-fixtures.ts`
- frontend: `package.json`, `package-lock.json`, `scripts/a3-instagram-browser-preflight.mjs`, `src/a3-harness/brand-response-contract.test.ts`
- authority: no new file; the existing A3 Markdown/JSON and execution ledger were updated in place.

### Correction cycles and boundary

1. Backend boot failed closed on required Postmark configuration; synthetic
   local-only values for the existing configuration names enabled boot without
   sending mail or invoking any provider.
2. The browser harness password selector was narrowed after an accessible-name
   ambiguity. The completed run then exposed the unresolved live Brand
   projection incompatibility described above.

```text
A3_ACCEPTED = NO
A3_RESULT = A3_CORRECTION_REQUIRED
B1_STARTED = NO
B1_AUTHORIZED = NO
```

## Historical cloud outcome

A3 completed every unblocked Section Y check but cannot be accepted. Two bounded
environment correction cycles found no permitted local fallback for the required
PostgreSQL and browser gates. The exact machine-readable matrix is in
`A3_EXECUTION_READINESS_PREFLIGHT.json`.

A bounded A3-R1 prerequisite remediation repaired the frozen frontend compile
defect without changing Campaign behavior or UX. The declared frontend
`npm run build` now passes. A3 remains `CIRCUIT_BREAKER` because the independent
PostgreSQL/migration, backend health, authenticated browser/Axe and remote
publication gates remain blocked; B1 remains prohibited.

## Passing evidence

- All three exact entry SHA/tree anchors were unchanged, clean, fetched and
  revalidated. Authority/backend remain exactly two accepted packet commits ahead
  of their freeze anchors; frontend equalled its freeze anchor at original A3
  entry and now has the single accepted A3-R1 repair commit recorded below.
- Prisma Client generation and the backend build passed.
- Existing focused provider/contract/role checks passed (48 tests).
- The permitted provider-neutral harness commit adds a deterministic matrix for
  image, carousel, Reel, audience full/partial/unavailable, auth/transient errors,
  and two identities. Its two tests, scoped lint and subsequent backend build pass.
- The Graph adapter was replaced at its single Nest provider token with no Graph
  request and no secret.
- All 135 frontend test files / 1076 tests passed during the original A3 run. A
  direct Vite production bundle and local preview returned HTTP 200.
- A3-R1 added only the missing canonical `PUBLIC_ROUTES` import in
  `CampaignDetailWorkspace.tsx`. Two focused test files / 8 tests passed and the
  declared `npm run build` completed successfully.
- The frozen manual-refresh action matrix is Owner allow, Campaign Manager allow,
  Finance Admin deny/read-only. Existing Brand Centre read membership is unchanged.
- Configuration names only were discovered. No value, `.env`, token, signed URL,
  or Meta mutation was used or recorded.

## Required failures

| Gate | Result | Exact blocker | Minimum remediation |
|---|---|---|---|
| Docker | `FAIL` | No Docker/Compose, Podman or nerdctl executable | Run A3 in an execution environment with Docker daemon + Compose, or provide an accepted disposable PostgreSQL service that does not weaken the DB proof. |
| PostgreSQL/migrations | `FAIL` | No Docker and no native `psql`, `postgres`, `initdb`, or `pg_ctl` | Provide disposable PostgreSQL; apply accepted migrations from a clean DB; run Prisma status and required-extension/connectivity checks. |
| Backend boot/health | `FAIL` | Runtime correctly fails closed on missing non-secret test configuration; DB health cannot pass without PostgreSQL | Provide documented synthetic/local runtime settings and disposable DB; prove `/health/live` and `/health` without provider credentials. |
| Browser/viewports/Axe | `FAIL` | Playwright package exists in backend but no Chromium/Chrome binary; no Axe package or authenticated harness | Provide an installed compatible browser plus accepted Axe/auth fixture harness; run Owner/Manager/Finance and tenant isolation at 390/767/768/desktop. |
| Remote publication | `FAIL` | Backend push cancelled by execution policy; frontend push had no GitHub credential; no remote packet branch exists | Provide ordinary GitHub write credentials/policy permission, then normal non-force push and independent fetch-back SHA/tree. No force push or credential extraction. |

The Docker/PostgreSQL absence, backend health dependency, browser/Axe absence and
remote authority failure are not waived by the remediated frontend build.

## Exact commands represented

- `git fetch --prune origin`, `git rev-parse HEAD`, `git rev-parse HEAD^{tree}`,
  `git merge-base`, `git rev-list --left-right --count`.
- `npm ci`; backend `npm run prisma:generate`, `npm run build`, focused Vitest and
  ESLint; frontend `npm run typecheck`, `npm run build`, `npm test`, direct
  `vite build`, and `vite preview` HTTP smoke.
- A3-R1 frontend focused Vitest for Campaign continuation and Creator Entry
  architecture, followed by the declared `npm run build`, `git diff --check` and
  exact one-file diff verification.
- executable/PATH discovery for container, PostgreSQL, browser and Axe capability.
- one normal non-force `git push --set-upstream` attempt per implementation branch,
  followed by read-only `git ls-remote`; no retry or bypass.

## Local checkpoint

```text
BACKEND_A3_SHA = 396c9ad96766fec957be68ab64589e89e70e77fb
BACKEND_A3_TREE = 6a35db9d580a1b6f9a0775371f3368bdd60a871d
FRONTEND_A3_R1_SHA = fa463b0364291e1353c19b86e173053f3101ee9c
FRONTEND_A3_R1_TREE = 2693d807f4f322b0a38cf4f6d897b81a3df85ca7
AUTHORITY_A3_SHA = REPORTED_BY_RUNNER_AFTER_COMMIT
AUTHORITY_A3_TREE = REPORTED_BY_RUNNER_AFTER_COMMIT
REMOTE_FETCH_BACK = FAIL
SERVICES_AFTER_RUN = STOPPED
```

No source feature, Campaign behavior/UX change, migration, provider/DE runtime,
workspace UI, or B1 work was started.
