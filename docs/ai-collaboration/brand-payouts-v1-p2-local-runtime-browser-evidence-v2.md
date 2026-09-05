# Brand Payouts P2 local runtime/browser evidence V2

**Result: `P2_RUNTIME_BROWSER_CIRCUIT_BREAKER`. P2 acceptance remains `NOT_SET`.**

The corrected built frontend mounts and authenticates successfully. The V1 bootstrap defect did not recur. The loaded Owner Payouts page fails Axe's `color-contrast` rule at **serious** severity for three Payouts elements at every required width. Sections 2 and 6 of the rerun assignment require preserving this second source defect and stopping. No source correction or additional correction loop was attempted.

## Authority and immutable inputs

[Committed rerun assignment](https://github.com/Piyush1087/dummy_tcs/blob/08a476a9cc3e714016286992b7902208221a8a8b/docs/ai-collaboration/brand-payouts-v1-p2-local-runtime-browser-rerun-runner-v1.md).

| Repository | Verified head | Verified tree | Ancestry |
| --- | --- | --- | --- |
| Backend | `119397ff6836ad12846c1e948409d8d49185c408` | `73521762dfeaf703b301e7a61c17cbda97d797a9` | Contains `60385abbd12d5a363615100c463ac6755ce848ea` |
| Corrected frontend | `5df18df718e8a69dd22d7c31fab804716d87329a` | `db18346e8471c44b256e96ab39ef55b59ae1380c` | Parent `b69c37bc9c1b1aec0976ab503acbb7274153480d`; contains `323658d4b147b95b5629ff8d91fa90b8fe9077e4` |
| Authority starting point | `08a476a9cc3e714016286992b7902208221a8a8b` | `91cf77c5d40a2b8fc094d2a789c1efa564572c04` | Contains V1 evidence `259e35bc1163bfbe4402d63d363f09f1284044b6` |

All named remote heads, trees, required ancestry, and clean worktrees were verified before runtime work. Existing clean checkouts advanced to the exact committed inputs; no branch was merged or rebuilt from an earlier base. The V1 report and supporting package are preserved unchanged. The execution ledger was not edited.

## Circuit-breaker defect

**Failure signature:** `P2_PAYOUTS_SERIOUS_COLOR_CONTRAST`.

**Affected SHA:** `5df18df718e8a69dd22d7c31fab804716d87329a`.

| Payouts element | Foreground / background | Computed text | Axe contrast / minimum |
| --- | --- | --- | --- |
| “Brand financial operations” eyebrow | `#34d399` / `#f8f8f8` | 12px bold | 1.81:1 / 4.5:1 |
| Refresh button | `#34d399` / `#f8f8f8` | 12px normal | 1.81:1 / 4.5:1 |
| Load more activity button | `#34d399` / `#ffffff` | 12px normal | 1.92:1 / 4.5:1 |

The feature-owned eyebrow alone establishes a Payouts-attributable serious failure. The two button failures are also rendered inside Payouts, using the shared outline-button treatment. This is a source styling defect, not an unavailable backend dependency or the prior runtime configuration defect.

Suspected source ownership:

- [brand-payouts.css, line 22](https://github.com/Piyush1087/creator-commerce-frontend-v2-clone/blob/5df18df718e8a69dd22d7c31fab804716d87329a/src/features/brand-payouts/brand-payouts.css#L22): `.bp-workspace__eyebrow` uses `--color-primary` for small text.
- [BrandPayoutsWorkspace.tsx, line 105](https://github.com/Piyush1087/creator-commerce-frontend-v2-clone/blob/5df18df718e8a69dd22d7c31fab804716d87329a/src/features/brand-payouts/components/BrandPayoutsWorkspace.tsx#L105): renders the eyebrow and outline Refresh button.
- [PayoutsActivity.tsx, line 119](https://github.com/Piyush1087/creator-commerce-frontend-v2-clone/blob/5df18df718e8a69dd22d7c31fab804716d87329a/src/features/brand-payouts/components/PayoutsActivity.tsx#L119): uses the outline variant for Load more activity.
- [Aurora components.css, line 111](https://github.com/Piyush1087/creator-commerce-frontend-v2-clone/blob/5df18df718e8a69dd22d7c31fab804716d87329a/src/design-system/aurora/components.css#L111): outline buttons use primary-colored text on a transparent background.
- [Aurora tokens.css, line 5](https://github.com/Piyush1087/creator-commerce-frontend-v2-clone/blob/5df18df718e8a69dd22d7c31fab804716d87329a/src/design-system/aurora/tokens.css#L5): `--color-primary` is `#34d399`.

**Why another source change is required:** these colors and component variants are fixed by committed frontend CSS/component source. Changing ports, fixture rows, credentials, or local environment cannot make their measured contrast meet the gate. No CSS injection, bundle patch, token alteration, or alternative build was used. The runner has consumed its single source-correction authorization, so any correction decision belongs to the SA.

## Exact reproduction

1. Build the pinned backend and corrected frontend fresh. Use `VITE_API_URL=http://127.0.0.1:3107` and exact `VITE_STAGE=local` with `npm run build`. Serve the resulting build with `vite preview --host 127.0.0.1 --port 4177 --strictPort`; run the full built backend at loopback port 3107.
2. Use the disposable PostgreSQL fixtures described below. Open `/brand/payouts`, follow the repository's login redirect, and sign in as the seeded active Brand Owner using the normal password form and real `POST /api/v1/auth/login`. No token storage injection is involved.
3. Open `/brand/payouts` after login. Wait for the Brand Owner projection, loaded overview, obligation, and activity sections, and the Load more activity button. Use CSS viewport widths 390, 767, 768, and 1440, each with height 1000.
4. Run Axe 4.10.3 against `.bp-workspace`. The `color-contrast` violation has `impact: serious` and identifies all three elements above. Exact selectors, element HTML, foreground/background colors, contrast values, and computed DOM styles are preserved in [browser-contrast.json](evidence/brand-payouts-p2-local-runtime-browser-v2/browser-contrast.json). The original discovering scan is preserved in [probe-axe.json](evidence/brand-payouts-p2-local-runtime-browser-v2/probe-axe.json).

Only the same failing loaded Owner state was captured at the remaining widths after identifying the circuit breaker. The acceptance matrix was not continued into additional actor/state workflows.

## Runtime, database, and HTTP evidence

See [environment and fresh build logs](evidence/brand-payouts-p2-local-runtime-browser-v2/environment.json), [database lifecycle](evidence/brand-payouts-p2-local-runtime-browser-v2/database-lifecycle.json), and [full-AppModule runtime](evidence/brand-payouts-p2-local-runtime-browser-v2/runtime.json).

- Windows x64; Node 24.19.0; npm 11.17.0; PostgreSQL 17.11; Chromium 140.0.7339.16; Playwright 1.61.1; Axe 4.10.3. Exact OS release and Prisma version are in the environment record.
- Both source builds passed fresh. The frontend emitted the large-chunk warning. This was a built Vite preview, not a development server or mock frontend.
- All 74 currently committed migrations applied to an empty loopback-only disposable database. Each migration checksum matches the accepted local file, all are finished, and none was rolled back. Timezone was UTC. The first migration command preceded PostgreSQL readiness and failed; it was retried after `pg_isready` succeeded. No new migration was created or applied.
- Seeded nine actors with distinct test emails and repository-supported password auth: Owner, Finance, Manager, inactive membership, no membership, unrelated Owner, empty-Brand Owner, Creator, and Admin. The canonical password helper generated hashes for one random non-durable test password. Three Brands, two vaults, two legacy obligations, and 56 ledger rows were seeded, including 55 same-timestamp Brand A ledger rows.
- Full `dist/main.js` / `AppModule` startup reached ready/listening, mapped the Payouts GET routes, and passed root, liveness, and database health. Razorpay configuration was absent, optional offering refresh disabled, and unconditional workers had empty local queues. A temporary loopback TCP guard prevented external backend access; it recorded zero outbound attempts. Inert local constructor configuration was used where required. No provider was invoked.

The [HTTP/RBAC index](evidence/brand-payouts-p2-local-runtime-browser-v2/http-rbac.json) contains **64 GET responses**, nine successful real password-login POST assertions, and **178 passing assertions**. It records:

- Exact V2 negotiation, legacy default behavior, incompatible representation rejection, and authorization outcomes for all nine actors.
- Manager zero-row scope; unauthorized role/membership rejection; unrelated-Brand query scoping; non-disclosing detail/existence errors; and cross-Brand cursor rejection.
- Separate authoritative summary buckets, unavailable dependency buckets, lifecycle-versus-money classification, legacy fail-closed obligation values/due date, and no sensitive V2 keys.
- Two full activity traversals, each five pages and 56 distinct activities, frozen `as_of` within each traversal, identical deterministic ordering across traversals, and page/source completeness metadata.
- No empty-Brand vault provisioning. Payouts routes remain GET-only. No provider mutation was sent.

[Runtime schema results](evidence/brand-payouts-p2-local-runtime-browser-v2/response-schema-validation.json) show **31 live responses** passing the corrected frontend's exact Zod schemas **before** continuation-cursor redaction. Headers containing session material and login payloads/responses are not retained. Opaque cursors are redacted in the committed index.

[Financial-state hashes](evidence/brand-payouts-p2-local-runtime-browser-v2/financial-state.json) are equal before successful browser Payouts requests, before the HTTP matrix, and after browser failure collection. Seven canonical financial models were normalized in a fixed model order with rows sorted by ID; raw rows were not committed.

## Browser and responsive observations

The corrected build renders the [normal login page](evidence/brand-payouts-p2-local-runtime-browser-v2/1440-unauthenticated-login.png). Real Owner password login returned 200; no token was injected into localStorage or sessionStorage. The V1 bootstrap exception is absent. The loaded financial data came directly from the single local backend, with real `PARTIAL` source coverage; no financial response was intercepted or fabricated.

| Viewport | Screenshot | document scroll/client/body width | Visible data layout | Accessibility result |
| --- | --- | --- | --- | --- |
| 390 × 1000 | [390 Owner](evidence/brand-payouts-p2-local-runtime-browser-v2/390-owner-loaded-partial-contrast-failure.png) | 390 / 390 / 390 | 0 tables, 2 mobile lists | Serious contrast failure |
| 767 × 1000 | [767 Owner](evidence/brand-payouts-p2-local-runtime-browser-v2/767-owner-loaded-partial-contrast-failure.png) | 767 / 767 / 767 | 0 tables, 2 mobile lists | Serious contrast failure |
| 768 × 1000 | [768 Owner](evidence/brand-payouts-p2-local-runtime-browser-v2/768-owner-loaded-partial-contrast-failure.png) | 768 / 768 / 768 | 2 tables, 0 mobile lists | Serious contrast failure |
| 1440 × 1000 | [1440 Owner](evidence/brand-payouts-p2-local-runtime-browser-v2/1440-owner-loaded-partial-contrast-failure.png) | 1440 / 1440 / 1440 | 2 tables, 0 mobile lists | Serious contrast failure |

No document-level overflow occurred in this captured state, and the expected 767/768 layout boundary was observed. This does not establish responsive acceptance for untested states or safe-area clearance. Axe also reported moderate nested/duplicate-main landmark findings; these are retained without pursuing another correction scope.

[Console/network evidence](evidence/brand-payouts-p2-local-runtime-browser-v2/browser-network-console.json) records successful Owner Payouts GETs, a successful login POST, and the expected unauthenticated `/auth/refresh` 401. No unexpected Payouts 4xx/5xx or page exception occurred in that capture. Non-loopback font assets from Fontshare/Google Fonts were blocked, generating generic resource-load errors. No Payouts response was altered. The contrast failure is grounded in computed foreground/background colors and small text size, not a remote font response. The [original probe network record](evidence/brand-payouts-p2-local-runtime-browser-v2/probe-network.json) is also preserved.

## Explicitly incomplete acceptance coverage

The second-source-defect circuit breaker stops the gate. Browser evidence for Finance, Manager, inactive/no-membership, Creator, Admin, unrelated/empty Brand projections; loading, independent loading, stale/refreshing and unavailable interception; detail routes; browser load-more; Settings Add funds/Brand Return links; Back/refresh restoration; unauthorized detail navigation; and complete keyboard/focus, safe-area, accessibility and DOM-safety matrices remains **NOT_COMPLETED_CIRCUIT_BREAKER**. HTTP evidence does not substitute for these browser checks. P2 is not accepted.

## Shutdown and package validation

[Shutdown record](evidence/brand-payouts-p2-local-runtime-browser-v2/shutdown.json): the owned backend and preview process trees were stopped; completed browser contexts were closed; the disposable PostgreSQL container and volume were removed; ports 3107, 4177, and 55439 have no listeners; the private fixture-session file was deleted. Controlled Windows process termination is recorded; graceful Nest shutdown-hook execution is not claimed.

[Evidence index](evidence/brand-payouts-p2-local-runtime-browser-v2/index.json) binds artifacts to the pinned backend/corrected frontend and contains artifact hashes. Backend/frontend worktrees remain clean with no schema/migration diff. V1 evidence and the execution ledger remain unchanged. No provider action, canonical merge, or P3 work occurred. Local links, JSON/index integrity, staged whitespace, and sensitive-value checks are validated before commit.
