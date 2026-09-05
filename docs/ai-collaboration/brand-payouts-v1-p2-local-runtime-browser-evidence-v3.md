# Brand Payouts P2 local runtime/browser evidence V3

**Result: `P2_RUNTIME_BROWSER_CIRCUIT_BREAKER`. P2 acceptance remains `NOT_SET`.**

The final pinned frontend passes the V1 bootstrap regression and the three V2 contrast regressions at all four required widths. Continuing into keyboard-driven obligation detail navigation exposed a serious contrast failure on **Back to Payouts**: `#34d399` text on `#f8f8f8`, measured by Axe at **1.81:1**, below **4.5:1**. The detail response was HTTP 200 and the real legacy obligation rendered. This is a new detail-state failure, not a recurrence of the corrected overview elements.

The [committed final runner](https://github.com/Piyush1087/dummy_tcs/blob/bdd1de05d5880768fff2137d17286014b0b58bf4/docs/ai-collaboration/brand-payouts-v1-p2-local-runtime-browser-final-rerun-runner-v1.md) requires stopping on a genuine source defect and committing bounded failure evidence. No source correction, style injection, assertion weakening, alternate build, or correction loop was attempted. This report explicitly identifies the incomplete acceptance coverage.

## Immutable input verification

| Repository | Verified head | Verified tree |
| --- | --- | --- |
| Backend | `119397ff6836ad12846c1e948409d8d49185c408` | `73521762dfeaf703b301e7a61c17cbda97d797a9` |
| Final frontend | `008a7f0c1778d0d805a0d0d5a9dd86540c0ff4b2` | `e00fae87d99de52fd831ccd92e8e04052c74e70d` |
| Authority starting point | `bdd1de05d5880768fff2137d17286014b0b58bf4` | `7284f566f05fbc1278f4c71c30757b6d09319b8c` |

Remote heads and clean worktrees were verified before runtime work. Backend contains required ancestor `60385abbd12d5a363615100c463ac6755ce848ea`. Frontend parent is `5df18df718e8a69dd22d7c31fab804716d87329a` and contains base ancestor `323658d4b147b95b5629ff8d91fa90b8fe9077e4`. The authority head contains all four required ancestors: `259e35bc1163bfbe4402d63d363f09f1284044b6`, `73781a3bbb6ed8b5cc88e0288fc929142397f924`, `2e6720bce1aa9da082d2e18ef8a2e6e3769e39f9`, and `3e1120dcf361b3046c97b6ad0cc5c08e6ec2e71e`. Each ancestry command exited 0.

The existing clean checkouts advanced to the exact remote inputs without branch merges. Backend/frontend source remains unchanged. The V1/V2 reports and supporting directories, and the execution ledger, remain byte-for-byte unchanged relative to the authority starting point.

## New circuit-breaker failure and reproduction

**Signature:** `P2_OBLIGATION_DETAIL_SERIOUS_COLOR_CONTRAST`.

**Affected SHA:** `008a7f0c1778d0d805a0d0d5a9dd86540c0ff4b2`.

Reproduction:

1. Build the pinned backend and final frontend fresh. Set `VITE_API_URL=http://127.0.0.1:3107` and exact `VITE_STAGE=local` for the frontend `npm run build`. Run `dist/main.js` through the full backend AppModule. Serve the built frontend with `vite preview --host 127.0.0.1 --port 4177 --strictPort`.
2. With the disposable fixtures described below, open `/brand/payouts`. Authenticate the active Brand Owner using the normal password form and real `POST /api/v1/auth/login`. No session/token is injected into browser storage.
3. On the loaded Payouts overview at 1440 × 1000, use Tab until the link named `View payout obligation payout-obligation:bp-p2-obligation-a` receives focus, then press Enter. In the captured sequence this took 15 Tab presses from the initial page focus. The resulting URL is `/brand/payouts?obligation=payout-obligation%3Abp-p2-obligation-a`.
4. Wait for the obligation detail GET to return 200 and the legacy detail to render. Run Axe 4.10.3 on `.bp-workspace`. It reports `color-contrast`, severity `serious`, selector `.aurora-button--ghost`. The exact element is `<button class="aurora-button aurora-button--ghost aurora-button--sm bp-back">` with label **Back to Payouts**.
5. The same loaded detail state reproduces the failure at 390, 767, 768, and 1440 CSS pixels, each height 1000. The remaining-width captures confirm this same failure; they do not continue the acceptance matrix into other workflows.

See [browser matrix and complete Axe findings](evidence/brand-payouts-p2-local-runtime-browser-v3/browser-matrix.json), [accessibility summary](evidence/brand-payouts-p2-local-runtime-browser-v3/accessibility-summary.json), and [circuit-breaker record](evidence/brand-payouts-p2-local-runtime-browser-v3/circuit-breaker.json).

Source ownership:

- [PayoutsDetail.tsx:47](https://github.com/Piyush1087/creator-commerce-frontend-v2-clone/blob/008a7f0c1778d0d805a0d0d5a9dd86540c0ff4b2/src/features/brand-payouts/components/PayoutsDetail.tsx#L47) renders the small ghost Back button.
- [Aurora components.css:117](https://github.com/Piyush1087/creator-commerce-frontend-v2-clone/blob/008a7f0c1778d0d805a0d0d5a9dd86540c0ff4b2/src/design-system/aurora/components.css#L117) gives ghost buttons primary-colored text and transparent background.
- [brand-payouts.css:32](https://github.com/Piyush1087/creator-commerce-frontend-v2-clone/blob/008a7f0c1778d0d805a0d0d5a9dd86540c0ff4b2/src/features/brand-payouts/brand-payouts.css#L32) corrects active outline buttons only. [The `.bp-back` rule](https://github.com/Piyush1087/creator-commerce-frontend-v2-clone/blob/008a7f0c1778d0d805a0d0d5a9dd86540c0ff4b2/src/features/brand-payouts/brand-payouts.css#L363) sets width without overriding the ghost label color.

**Why source change is required:** the failing foreground and background are determined by committed component/CSS choices. Ports, database fixtures, credentials, and local runtime configuration cannot correct this rendered small-text contrast. A source change is outside this runner's authority. No global Aurora or feature CSS was altered.

## Prior regression results

[Bootstrap evidence](evidence/brand-payouts-p2-local-runtime-browser-v3/bootstrap.json) and the [normal login screenshot](evidence/brand-payouts-p2-local-runtime-browser-v3/1440-unauthenticated-login.png) confirm the built preview mounts with exact local-stage configuration. The V1 exception is absent, real Owner login returns 200, and Payouts renders live backend data.

[V2 contrast regression evidence](evidence/brand-payouts-p2-local-runtime-browser-v3/contrast-regression.json) records `rgb(14, 18, 20)` for the overview eyebrow, Refresh label, and Load more activity label at all four widths. Relative-luminance calculations using these computed colors and the page/card surfaces yield **17.73:1** and **18.83:1** respectively. The ready/loaded overview has no serious or critical Axe findings. No styles were injected and no API response was substituted.

## Fresh runtime and HTTP evidence

See [environment and fresh-build logs](evidence/brand-payouts-p2-local-runtime-browser-v3/environment.json), [database lifecycle/checksums](evidence/brand-payouts-p2-local-runtime-browser-v3/database-lifecycle.json), [full-AppModule runtime](evidence/brand-payouts-p2-local-runtime-browser-v3/runtime.json), and [HTTP/RBAC index](evidence/brand-payouts-p2-local-runtime-browser-v3/http-rbac.json).

- Windows x64, Node 24.19.0, npm 11.17.0, PostgreSQL 17.11, Chromium 140.0.7339.16, Playwright 1.61.1, and Axe 4.10.3. Exact OS release and Prisma version are recorded.
- Both builds passed fresh. The frontend retains the large-chunk build warning. Installed dependencies match the unchanged package manifests/lockfiles; no dependency or source changes were made.
- A new disposable database was bound only to loopback. All **74 currently committed migrations** applied after PostgreSQL readiness. Every checksum matches the accepted file, every migration finished, none rolled back, and the session timezone was UTC. No migration was created or edited.
- Nine actors were seeded with distinct test-only emails, canonical password hashes, and one random non-durable password: Owner, Finance, Manager, inactive membership, no active membership, unrelated Owner, direct Creator, Admin, and empty-Brand Owner. The database also contains three Brands, two authoritative vaults, two legacy obligations, and 56 ledger rows, including 55 same-timestamp Brand A rows.
- The complete AppModule started from `dist/main.js`, mapped Payouts routes, reached listening/ready, and passed root, liveness, and database health. Optional offering refresh was disabled; unconditional workers had empty test queues. A child-environment allowlist supplied inert local configuration, with Razorpay variables absent. A temporary Node TCP guard restricted backend connections to loopback and recorded no external connection attempt. No provider action occurred.

The fresh V3 HTTP matrix recorded **64 GET responses**, **9 successful real password-login POST assertions**, and **178 passing assertions**. These include exact V2 negotiation/default/incompatible behavior, all actor RBAC outcomes, Manager zero rows, unrelated-Brand list/detail/existence/cursor isolation, authoritative summary separation, lifecycle/money classification, legacy fail-closed terms and values, sensitive-key exclusion, and no empty-Brand vault provisioning. Mapped Payouts endpoints are GET-only; no Payouts mutation was issued.

Two complete activity traversals each exhausted in five pages with 56 distinct activities, a frozen `as_of` per traversal, and identical ordering. Page/source completeness metadata is recorded. [Schema validation](evidence/brand-payouts-p2-local-runtime-browser-v3/response-schema-validation.json) passed for **31 original live responses before cursor redaction**, using the final frontend's exact schemas. No Authorization/Cookie values, login bodies, passwords, or tokens were retained.

[Financial-state evidence](evidence/brand-payouts-p2-local-runtime-browser-v3/financial-state.json) covers **20 canonical financial/funding-related models**, including vaults, ledgers, payout obligations, transfers/reversals, funding loads/lots/allocations, locks, returns, payout destinations/mappings, and collaboration commercial state. Fixed model ordering and ID-sorted rows produced identical hashes before and after the HTTP lane and before and after the browser lane. Raw records were not committed.

## Browser, keyboard, responsive, and accessibility findings

All captured financial states use real responses from the single local backend. Their source coverage is genuinely partial because accepted dependencies/provenance remain unavailable. “Loaded” does not claim complete source coverage. No financial response interception was used.

| Viewport | Overview screenshot | Detail screenshot | document scroll/client/body width in both states |
| --- | --- | --- | --- |
| 390 × 1000 | [390 overview](evidence/brand-payouts-p2-local-runtime-browser-v3/390-owner-loaded-partial-v2-regression.png) | [390 detail](evidence/brand-payouts-p2-local-runtime-browser-v3/390-owner-obligation-detail.png) | 390 / 390 / 390 |
| 767 × 1000 | [767 overview](evidence/brand-payouts-p2-local-runtime-browser-v3/767-owner-loaded-partial-v2-regression.png) | [767 detail](evidence/brand-payouts-p2-local-runtime-browser-v3/767-owner-obligation-detail.png) | 767 / 767 / 767 |
| 768 × 1000 | [768 overview](evidence/brand-payouts-p2-local-runtime-browser-v3/768-owner-loaded-partial-v2-regression.png) | [768 detail](evidence/brand-payouts-p2-local-runtime-browser-v3/768-owner-obligation-detail.png) | 768 / 768 / 768 |
| 1440 × 1000 | [1440 overview](evidence/brand-payouts-p2-local-runtime-browser-v3/1440-owner-loaded-partial-v2-regression.png) | [1440 detail](evidence/brand-payouts-p2-local-runtime-browser-v3/1440-owner-obligation-detail.png) | 1440 / 1440 / 1440 |

The overview has two visible mobile lists and no visible tables at 390/767, versus two tables and no mobile lists at 768/1440. [Viewport evidence](evidence/brand-payouts-p2-local-runtime-browser-v3/viewport-safe-area.json) preserves these measurements. Safe-area/bottom-navigation clearance and the remaining responsive states are explicitly uncompleted after the circuit breaker, not inferred from absence of horizontal overflow.

[Keyboard evidence](evidence/brand-payouts-p2-local-runtime-browser-v3/keyboard-focus.json) records each Tab target, accessible name, link destination, focus-visible state, and outline. The invoking obligation link had a visible 2px outline and was activated with Enter, with no programmatic focus or mouse click. See the [invoking-focus screenshot](evidence/brand-payouts-p2-local-runtime-browser-v3/1440-owner-obligation-invoking-focus.png). After the 200 detail response, active focus was observed on `BODY` with no visible outline. This observation is preserved; focus containment, Escape, close, focus return, and the complete no-trap assessment were not continued after the serious scanner failure. The implementation is a full-page detail route, not a drawer.

The V2 moderate landmark findings reproduce on every overview viewport: `landmark-main-is-top-level` and `landmark-no-duplicate-main`. Ownership is [BrandPayoutsWorkspace.tsx:102](https://github.com/Piyush1087/creator-commerce-frontend-v2-clone/blob/008a7f0c1778d0d805a0d0d5a9dd86540c0ff4b2/src/features/brand-payouts/components/BrandPayoutsWorkspace.tsx#L102), which renders an inner `main`, nested in [AppShell.tsx:57](https://github.com/Piyush1087/creator-commerce-frontend-v2-clone/blob/008a7f0c1778d0d805a0d0d5a9dd86540c0ff4b2/src/layouts/app-shell/AppShell.tsx#L57). Duplicate/nested landmarks can make landmark navigation ambiguous. They are moderate best-practice findings and do not alone meet the runner's explicit serious/critical scanner failure threshold. They are not omitted or treated as resolved. The detail uses a `div` and does not reproduce those landmark findings; it fails on the Back button's serious contrast issue.

[Console/network evidence](evidence/brand-payouts-p2-local-runtime-browser-v3/browser-network-console.json) contains 14 response records for the browser lane. Payouts requests succeeded, including obligation detail. The sole captured 4xx is the expected unauthenticated `/api/v1/auth/refresh` 401. No browser page exception occurred. Intentionally blocked Fontshare/Google Fonts assets produced generic resource-load errors; no API response was mocked. The contrast finding is based on computed colors and 12px text, and is not invalidated by remote font failure.

## Explicit incomplete acceptance coverage

This is the bounded failure package required by section 10, not a complete passing P2 matrix. Browser coverage for Finance, Manager, inactive/no-membership, Creator/Admin, unrelated/empty Brands; loading/independent-loading, stale/refreshing and unavailable states; activity detail; browser load-more; Settings Add funds/Brand Return deep links; Back/refresh restoration; unauthorized detail navigation; complete keyboard/focus, safe-area and DOM/Product-truth checks remains **NOT_COMPLETED_CIRCUIT_BREAKER**. HTTP checks do not substitute for those browser proofs. No untested criterion is marked passed, and P2 acceptance was not set.

## Cleanup and package integrity

[Shutdown evidence](evidence/brand-payouts-p2-local-runtime-browser-v3/shutdown.json) records closure of browser contexts, termination of the four owned backend/preview processes, removal of the disposable PostgreSQL container/volume, no remaining listeners on ports 3107/4177/55439, and deletion of the private fixture-session file. Controlled Windows termination is recorded; graceful Nest shutdown-hook execution is not claimed.

The [machine-readable index](evidence/brand-payouts-p2-local-runtime-browser-v3/index.json) hashes every supporting artifact and binds evidence to the exact inputs. Only this V3 report and V3 evidence directory are changed. Before commit, local Markdown links, JSON/index hashes, whitespace, sensitive-value scans, clean source worktrees, and preservation of V1/V2 and the execution ledger are verified. No provider action, source/schema/migration change, canonical merge, checkpoint acceptance, or P3 work occurred.
