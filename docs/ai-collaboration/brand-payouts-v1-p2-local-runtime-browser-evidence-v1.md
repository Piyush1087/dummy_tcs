# Brand Payouts P2 local runtime/browser evidence V1

**Result: `P2_RUNTIME_BROWSER_SOURCE_DEFECT`. P2 acceptance is not established.**

The exact built frontend throws before mounting React when configured with the runner-required loopback API URL and `VITE_STAGE=local`. The same failure was reproduced in Chromium at 390, 767, 768, and 1440 CSS pixels (height 1000). Login is unreachable. No backend or frontend source was changed. This package preserves the completed backend checks and browser failure; it does not represent a completed passing browser matrix.

## Authority and immutable input verification

Assignment: [committed runner](https://github.com/Piyush1087/dummy_tcs/blob/f1081b9ea9768a08ce355c3a3c105017787c796f/docs/ai-collaboration/brand-payouts-v1-p2-local-runtime-browser-runner-v1.md). Section 2 requires preserving source-defect evidence and returning it for Systems Architect correction authorization.

| Input | Verified head | Verified tree | Required ancestor |
| --- | --- | --- | --- |
| Backend | `119397ff6836ad12846c1e948409d8d49185c408` | `73521762dfeaf703b301e7a61c17cbda97d797a9` | `60385abbd12d5a363615100c463ac6755ce848ea` |
| Frontend | `b69c37bc9c1b1aec0976ab503acbb7274153480d` | `0eea09c409f84b463ff087aa01a3c85b784f53fc` | `323658d4b147b95b5629ff8d91fa90b8fe9077e4` |
| Authority starting point | `f1081b9ea9768a08ce355c3a3c105017787c796f` | `9eb4a992afc0c6376e57a70e34cd56965d322d9f` | Runner commit itself |

The exact named remote branch heads were checked before runtime work. Fresh clones were clean, and backend/frontend `git merge-base --is-ancestor` checks exited 0. Backend/frontend remain clean at these heads and trees after shutdown. No schema, migration, or source diff exists. The execution ledger is unchanged; no checkpoint disposition or canonical merge was performed.

## Proven defect and exact reproduction

Affected SHA: `b69c37bc9c1b1aec0976ab503acbb7274153480d`.

Owning source: [resolve-env.ts](https://github.com/Piyush1087/creator-commerce-frontend-v2-clone/blob/b69c37bc9c1b1aec0976ab503acbb7274153480d/src/shared/config/resolve-env.ts#L39). Caller: [env.ts](https://github.com/Piyush1087/creator-commerce-frontend-v2-clone/blob/b69c37bc9c1b1aec0976ab503acbb7274153480d/src/shared/config/env.ts#L4).

Reproduce on the pinned frontend, with no source changes:

```powershell
npm.cmd ci --ignore-scripts --no-audit --no-fund
$env:VITE_API_URL = 'http://127.0.0.1:3107'
$env:VITE_STAGE = 'local'
npm.cmd run build
node node_modules/vite/bin/vite.js preview --host 127.0.0.1 --port 4177 --strictPort
```

Open `http://127.0.0.1:4177/brand/payouts` in Chromium. The JS asset loads with HTTP 200 but raises `VITE_API_URL must not target localhost in production.` The body text is empty, `#root` has zero children, and there are zero interactive controls. The initial login probe also timed out waiting for the Email field. No token or session was injected into browser storage.

The build succeeds, but the default built bundle supplies `import.meta.env.DEV=false`. `resolvePublicRuntimeEnv` chooses `productionApiOrigin` solely from `input.dev`; `input.stage` does not affect that decision. The helper rejects `127.0.0.1` and `localhost` before React mounts. A separate in-memory execution of the exact committed helper reproduces both exceptions with `dev=false, stage=local`, independent of the browser and backend. See [source reproduction](evidence/brand-payouts-p2-local-runtime-browser-v1/source-reproduction.json).

**Smallest bounded correction recommendation:** authorize a narrowly scoped configuration change that permits loopback API origins for an explicitly local built runtime while retaining production origin restrictions, with focused tests for both local-preview acceptance and production rejection. The SA must decide and authorize that correction. No development-mode rebuild, hostname workaround, bundle patch, or source correction was used to bypass the failure.

## Completed local runtime evidence

See [environment](evidence/brand-payouts-p2-local-runtime-browser-v1/environment.json), [database lifecycle](evidence/brand-payouts-p2-local-runtime-browser-v1/database-lifecycle.json), and [runtime](evidence/brand-payouts-p2-local-runtime-browser-v1/runtime.json).

- Both exact source trees built fresh successfully. The frontend emitted the existing large-chunk warning. Prisma generation succeeded.
- Disposable PostgreSQL 17 was bound only to `127.0.0.1:55439`. All 74 migrations already committed in the pinned backend were applied to an empty database. Every recorded checksum matches its local accepted migration file; all finished and none were rolled back. Session timezone was UTC. No new migration was created or applied.
- Seeded nine distinct password-auth actors, three Brands, two authoritative vaults, two legacy obligations, and 56 ledger rows, including 55 same-timestamp rows for Brand A. The harness used the canonical password hashing helper and one random non-durable test password. Its private session file was deleted after use. An initial fixture constraint rejection was corrected in the temporary harness by assigning the Creator a Creator organization; no application defect was inferred from that setup error.
- The backend ran `dist/main.js` through the full `AppModule`. Root, liveness, and database health returned 200. Payouts routes were mapped and Nest logged successful startup. A premature launch while build emission was still underway failed before application startup; the successful runtime was launched after the build completed.
- The child environment was constructed from an allowlist with inert local configuration. Razorpay variables were absent, offering refresh was disabled, and Node TCP was restricted to loopback by a temporary preload. Unconditional queue workers have no disable switch and started against empty local queues. No provider jobs were seeded; no outbound guard event or provider call occurred.

## Completed HTTP/RBAC checks and limits

See [redacted request-response index](evidence/brand-payouts-p2-local-runtime-browser-v1/http-rbac.json), [schema checks](evidence/brand-payouts-p2-local-runtime-browser-v1/response-schema-validation.json), and [financial-state hashes](evidence/brand-payouts-p2-local-runtime-browser-v1/financial-state.json).

The corrected matrix recorded 42 GET responses and nine successful real password-login POST results. All 48 recorded assertions passed: health, Owner/Finance access, Campaign Manager zero rows, inactive/no-membership/Creator/Admin fail-closed responses, unrelated/empty Brand projections, anonymous rejection, incompatible representation, stable `as_of`, distinct continuation rows, cross-Brand cursor rejection, and unchanged canonical financial state. Detail probes are preserved for Owner, unrelated Brand, and Manager using real and nonexistent identifiers.

Eighteen saved V2 projections passed the exact pinned frontend Zod schemas. This validation was performed after opaque continuation-cursor redaction, so it is not represented as validation of the original cursor bytes. The HTTP continuation request itself used the real cursor. Authorization headers, cookies, login payloads, tokens, passwords, and raw financial seed records are excluded.

The first harness pass misspelled the vendor media type, resulting in expected legacy/default or incompatible behavior. The harness was corrected to the exact committed media type, then rerun. The retained matrix is that corrected pass. Its default `application/json` request intentionally captures the accepted legacy representation, including null provider-related fields; the V2 projection is separately identified by `schema_version` and media type.

Normalized financial snapshots cover seven canonical models, sorted by ID, and are byte-equivalent before/after the final matrix and through browser failure collection. No Payouts mutation or vault provisioning occurred. This is a bounded backend evidence subset, not a claim that every section 4 assertion or complete browser acceptance matrix was executed. Full pagination exhaustion, all adversarial existence probes, and browser-authoritative actor projection review remain uncompleted after the source-defect stop.

## Browser, responsive, console, accessibility, and focus evidence

See [machine-readable browser evidence](evidence/brand-payouts-p2-local-runtime-browser-v1/browser-failure.json).

| CSS viewport | Screenshot | document scroll/client/body width | Result |
| --- | --- | --- | --- |
| 390 × 1000 | [390 failure](evidence/brand-payouts-p2-local-runtime-browser-v1/390-unauthenticated-bootstrap-failure.png) | 390 / 390 / 390 | Empty app; bootstrap exception |
| 767 × 1000 | [767 failure](evidence/brand-payouts-p2-local-runtime-browser-v1/767-unauthenticated-bootstrap-failure.png) | 767 / 767 / 767 | Empty app; bootstrap exception |
| 768 × 1000 | [768 failure](evidence/brand-payouts-p2-local-runtime-browser-v1/768-unauthenticated-bootstrap-failure.png) | 768 / 768 / 768 | Empty app; bootstrap exception |
| 1440 × 1000 | [1440 failure](evidence/brand-payouts-p2-local-runtime-browser-v1/1440-unauthenticated-bootstrap-failure.png) | 1440 / 1440 / 1440 | Empty app; bootstrap exception |

Equal widths on an empty document do **not** establish responsive Payouts acceptance. There are no rendered tables/cards to compare at 767/768 and no bottom navigation to assess. Keyboard Tab leaves focus on the body. Axe was run on each failed blank document; its results are recorded by severity and explicitly labelled as blocked application scans, not passing Payouts accessibility scans.

Network records contain only paths, methods, and status codes. Browser request interception was used solely to abort non-loopback resources; it did not fabricate Payouts API responses. The resulting generic resource-load console errors are retained separately from the deterministic bootstrap exception. The source-helper reproduction establishes that the app exception does not depend on those blocked external assets. No browser auth POST or Payouts data request occurred because the app never mounted.

All requested authenticated actor/state screenshots, ready/loading/partial/stale/unavailable transitions, legacy/detail flows, load-more, Settings deep links, Back/refresh restoration, unauthorized direct navigation, focus entry/return, meaningful accessibility scans, and rendered-data safety checks remain **BLOCKED_BY_SOURCE_DEFECT**. None is marked passed or inferred from HTTP-only evidence.

## Shutdown, validation, and disposition

See [shutdown](evidence/brand-payouts-p2-local-runtime-browser-v1/shutdown.json) and [evidence index](evidence/brand-payouts-p2-local-runtime-browser-v1/index.json).

Only owned backend, preview, probe, and browser process trees were stopped. The PostgreSQL container and its disposable volume were removed; ports 3107, 4177, and 55439 have no listeners. Windows process termination was controlled by the harness; graceful Nest shutdown-hook execution is not claimed. The private session fixture file was removed. No production/shared database, provider action, canonical merge, P0/P1 reopening, or P3 work occurred.

All local Markdown links resolve, all indexed artifact hashes match, and all JSON files parse. The complete text artifact set was scanned for session/credential values, database URLs, machine-local absolute paths, and sensitive provider-field values; no leakage was found. The staged diff passes `git diff --cached --check`. Backend/frontend remote heads were rechecked and still match the pinned inputs.

The evidence package is intended for SA review under the runner's source-defect rule. Source correction authorization and P2 acceptance remain with the SA.
