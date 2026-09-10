# A3 Execution-readiness preflight

```text
PACKET = A3
RESULT = CIRCUIT_BREAKER
B1 = PROHIBITED
PROVIDER_OR_META_CALLS = NONE
FEATURE_IMPLEMENTATION = NONE
```

## Outcome

A3 completed every unblocked Section Y check but cannot be accepted. Two bounded
environment correction cycles found no permitted local fallback for the required
PostgreSQL and browser gates. The exact machine-readable matrix is in
`A3_EXECUTION_READINESS_PREFLIGHT.json`.

## Passing evidence

- All three exact entry SHA/tree anchors were unchanged, clean, fetched and
  revalidated. Authority/backend remain exactly two accepted packet commits ahead
  of their freeze anchors; frontend equals its freeze anchor.
- Prisma Client generation and the backend build passed.
- Existing focused provider/contract/role checks passed (48 tests).
- The permitted provider-neutral harness commit adds a deterministic matrix for
  image, carousel, Reel, audience full/partial/unavailable, auth/transient errors,
  and two identities. Its two tests, scoped lint and subsequent backend build pass.
- The Graph adapter was replaced at its single Nest provider token with no Graph
  request and no secret.
- All 135 frontend test files / 1076 tests passed. A direct Vite production bundle
  and local preview returned HTTP 200.
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
| Frontend declared build | `FAIL` | Frozen baseline `CampaignDetailWorkspace.tsx:135` references missing `PUBLIC_ROUTES` | An authorized owner of the frozen frontend baseline must repair or accept a converged checkpoint; A3 may not change unrelated Campaign code. |
| Browser/viewports/Axe | `FAIL` | Playwright package exists in backend but no Chromium/Chrome binary; no Axe package or authenticated harness | Provide an installed compatible browser plus accepted Axe/auth fixture harness; run Owner/Manager/Finance and tenant isolation at 390/767/768/desktop. |
| Remote publication | `FAIL` | Backend push cancelled by execution policy; frontend push had no GitHub credential; no remote packet branch exists | Provide ordinary GitHub write credentials/policy permission, then normal non-force push and independent fetch-back SHA/tree. No force push or credential extraction. |

The frontend TypeScript failure, Docker/PostgreSQL absence, browser/Axe absence,
and remote authority failure are not waived by unit or static evidence.

## Exact commands represented

- `git fetch --prune origin`, `git rev-parse HEAD`, `git rev-parse HEAD^{tree}`,
  `git merge-base`, `git rev-list --left-right --count`.
- `npm ci`; backend `npm run prisma:generate`, `npm run build`, focused Vitest and
  ESLint; frontend `npm run typecheck`, `npm run build`, `npm test`, direct
  `vite build`, and `vite preview` HTTP smoke.
- executable/PATH discovery for container, PostgreSQL, browser and Axe capability.
- one normal non-force `git push --set-upstream` attempt per implementation branch,
  followed by read-only `git ls-remote`; no retry or bypass.

## Local checkpoint

```text
BACKEND_A3_SHA = 396c9ad96766fec957be68ab64589e89e70e77fb
BACKEND_A3_TREE = 6a35db9d580a1b6f9a0775371f3368bdd60a871d
AUTHORITY_A3_SHA = REPORTED_BY_RUNNER_AFTER_COMMIT
AUTHORITY_A3_TREE = REPORTED_BY_RUNNER_AFTER_COMMIT
REMOTE_FETCH_BACK = FAIL
SERVICES_AFTER_RUN = STOPPED
```

No source feature, migration, provider/DE runtime, workspace UI, or B1 work was
started.
