# Brand Payouts P2 — V5 local runtime/browser evidence

**Result: P2_RUNTIME_BROWSER_CIRCUIT_BREAKER.** The activity identifier correction works through the committed UI. A separate restoration defect prevents a complete passing package: returning from detail discards exhausted list continuations and reloads only the first 25 rows. No source correction was attempted. P2 acceptance remains unset; P3 was not started.

## Immutable inputs and fresh execution

| Input | Commit | Tree |
| --- | --- | --- |
| Backend | `119397ff6836ad12846c1e948409d8d49185c408` | `73521762dfeaf703b301e7a61c17cbda97d797a9` |
| Frontend | `c3ca6ff26d568915276e13140335f5811bb1cc50` | `123a037005608c7568155f128656a360b32d7c49` |
| Authority/start | `d9b22fa8ef8917d49eb3ded5bc0fb295b79144a9` | `06a75074a84aa2c341f6a313246100f499130293` |

The [Git-hosted V5 runner](https://github.com/Piyush1087/dummy_tcs/blob/d9b22fa8ef8917d49eb3ded5bc0fb295b79144a9/docs/ai-collaboration/brand-payouts-v1-p2-local-runtime-browser-v5-runner-v1.md) was read completely. Exact remote heads, trees, required ancestry, frontend parent, and clean worktrees were verified before runtime. The two-file correction changes only the activity link production expression and its regression test. The API client, schemas, guard, hooks, and financial presentation logic remain byte-identical to V4. [Source binding and complete correction diff](evidence/brand-payouts-p2-local-runtime-browser-v5/v4-integrity-and-source-binding.json) also verifies all **194 V4 indexed artifact hashes**, including its report. V1–V4 evidence and the execution ledger are unchanged.

Both applications were built fresh. Backend execution used `dist/main.js` and the complete AppModule, loopback port 3107. The frontend production build used exact `VITE_STAGE=local` and `VITE_API_URL=http://127.0.0.1:3107`, then built Vite preview on loopback port 4177. [Environment/build records](evidence/brand-payouts-p2-local-runtime-browser-v5/environment.json) and [runtime/route records](evidence/brand-payouts-p2-local-runtime-browser-v5/runtime.json) preserve results. The frontend retained the existing large-chunk warning. The first HTTP attempt preceded the backend listener and could not connect; the complete lane was rerun after successful liveness readiness. This startup timing retry is not reported as a source failure.

Fresh disposable PostgreSQL 17.11 ran loopback-only on port 55439 with UTC sessions. All 74 committed migrations applied successfully and their database checksums match source files. Initial container readiness briefly reported no response; the single migration deployment subsequently succeeded. No migration was created or edited. [Database lifecycle](evidence/brand-payouts-p2-local-runtime-browser-v5/database-lifecycle.json) records nine password actors, three Brands, vault/ledger fixtures, legacy obligations, and 56 same-timestamp/activity fixtures. After the initial HTTP lane, 30 additional deterministic obligations were seeded for unrelated Brand B, producing 31 visible obligations for browser exhaustion checks. That explicit fixture write separates two financial hash baselines.

Password authentication used the canonical backend hash helper, distinct test emails, and one random non-durable password. Every browser session used the normal form and real login endpoint. No browser token injection occurred. Provider variables were absent, optional work was inert, and a temporary loopback guard prevented external backend access. No provider action occurred.

## Identifier correction: verified through real UI links

[Identifier integration evidence](evidence/brand-payouts-p2-local-runtime-browser-v5/identifier-integration.json) records **16 successful checks**: lifecycle and money-movement activity, keyboard and pointer activation, at 390, 767, 768, and 1440px. Each fixture's `activity_id` differs from its `public_reference`.

The list retains the shortened public reference visually and the full public reference in its accessible link name. The href/query and actual detail request use `activity_id`. All 16 UI-opened details returned 200, rendered ready detail, and retained the same detail identity after refresh. Browser Back restored the first-page identifier set in these checks. No detail was opened by typing a diagnostic canonical ID, and no activity request used `public_reference`. See [integration network records](evidence/brand-payouts-p2-local-runtime-browser-v5/browser-network-console-integration.json) and [integration screenshots/DOM](evidence/brand-payouts-p2-local-runtime-browser-v5/browser-matrix-integration.json).

This proves the exact V4 identifier defect is corrected. It does not establish restoration of an expanded list: that separate check fails below.

## Reproducible restoration defect

**Signature: `P2_PAGINATED_LIST_BACK_RESTORATION_LOSS`.** V5 sections 5–7 require originating-list state restoration, including exhausted lists. After opening a detail from an exhausted list, both browser Back and the in-app Back to Payouts action recreate the first page and discard continuation rows.

| List / actor | Before detail | After browser Back | After Back to Payouts | Widths |
| --- | --- | --- | --- | --- |
| Activity / Owner | 56 unique rows, exhausted | 25 rows; Load more reappears | 25 rows; Load more reappears | 390, 767, 768, 1440 |
| Obligations / unrelated-Brand Owner, viewing own Brand | 31 unique rows, exhausted | 25 rows; Load more reappears | 25 rows; Load more reappears | 390, 767, 768, 1440 |

All **16 settled reproductions** fail the restoration assertion. The diagnostic waits for the overview to mount, all list-loading placeholders to disappear, and another 250ms before comparing complete href sets. This is not a conclusion drawn from a loading skeleton. [Settled restoration evidence](evidence/brand-payouts-p2-local-runtime-browser-v5/settled-pagination-restoration.json) includes before/after identifiers, counts, control presence, and screenshot references.

Exact reproduction: authenticate Owner; open `/brand/payouts`; activate Load more activity twice to exhaust all 56 rows; activate the final visible activity detail link; wait for ready detail; use browser Back. Once loading finishes, only 25 rows remain and Load more activity is visible again. Repeat with Back to Payouts. For obligations, authenticate unrelated-Brand Owner and exhaust that actor's own 31-row obligation list before repeating both return actions. All requests remain authorized reads against the same local backend.

Representative evidence: [390px activity list before detail](evidence/brand-payouts-p2-local-runtime-browser-v5/390-owner-activity-exhausted-browser-back.png), [390px settled return](evidence/brand-payouts-p2-local-runtime-browser-v5/390-owner-activity-settled-after-browser-back.png), [1440px obligations before detail](evidence/brand-payouts-p2-local-runtime-browser-v5/1440-unrelated-obligation-exhausted-back-button.png), and [1440px settled return](evidence/brand-payouts-p2-local-runtime-browser-v5/1440-unrelated-obligation-settled-after-back-button.png). [Restoration network records](evidence/brand-payouts-p2-local-runtime-browser-v5/browser-network-console-restoration.json) show fresh initial-page reads after returning.

The first timed probe also captured some transient loading states. Those are explicitly labelled early observations in [the original probe record](evidence/brand-payouts-p2-local-runtime-browser-v5/pagination-back-restoration.json); they are not the primary failure assertions.

The [source diagnosis](evidence/brand-payouts-p2-local-runtime-browser-v5/source-diagnosis.json) identifies the cause:

- [BrandPayoutsWorkspace.tsx:20](https://github.com/Piyush1087/creator-commerce-frontend-v2-clone/blob/c3ca6ff26d568915276e13140335f5811bb1cc50/src/features/brand-payouts/components/BrandPayoutsWorkspace.tsx#L20) switches from the overview component to detail, unmounting the overview.
- [use-brand-payouts-workspace.ts:131](https://github.com/Piyush1087/creator-commerce-frontend-v2-clone/blob/c3ca6ff26d568915276e13140335f5811bb1cc50/src/features/brand-payouts/hooks/use-brand-payouts-workspace.ts#L131) keeps continuation rows in component-local state; [its mount effect](https://github.com/Piyush1087/creator-commerce-frontend-v2-clone/blob/c3ca6ff26d568915276e13140335f5811bb1cc50/src/features/brand-payouts/hooks/use-brand-payouts-workspace.ts#L212) refreshes initial pages after remount.
- [PayoutsDetail.tsx:33](https://github.com/Piyush1087/creator-commerce-frontend-v2-clone/blob/c3ca6ff26d568915276e13140335f5811bb1cc50/src/features/brand-payouts/components/PayoutsDetail.tsx#L33) returns via navigation without preserving the former overview state.

Environment adjustments cannot preserve state discarded by the committed component lifecycle. A source change is required; none was attempted or authorized to this runner.

## Fresh HTTP, schemas, and financial read purity

V4 HTTP classification is **RERUN**. The [full-AppModule HTTP/RBAC index](evidence/brand-payouts-p2-local-runtime-browser-v5/http-rbac.json) contains **64 GET responses, nine real password logins, and 178 passing assertions**. Coverage includes root/liveness/database health, exact V2 negotiation, default/incompatible representation, Owner/Finance reads, Manager zero-row scope, denied actors, unrelated list/detail/cursor/existence probes, separate authoritative buckets, legacy limitations, and stable pagination. Two five-page traversals each contain 56 unique activities in identical order with frozen `as_of` within each traversal.

All **31 original live response validations** passed the final frontend schemas before cursor redaction; see [schema results](evidence/brand-payouts-p2-local-runtime-browser-v5/response-schema-validation.json). These API assertions do not test React component lifetime or list restoration and therefore do not contradict the browser failure.

[Financial-state evidence](evidence/brand-payouts-p2-local-runtime-browser-v5/financial-state.json) compares 20 canonical models. Initial baseline equals post-HTTP state. After the documented unrelated-Brand fixture expansion, a new before-browser baseline equals final post-browser state. No equality is claimed across that deliberate fixture write. Payouts reads did not mutate financial rows or provision an empty-Brand vault. Raw financial records are not retained.

## Bounded fresh accessibility, responsive, and focus evidence

Chromium 140.0.7339.16, Playwright 1.61.1, and Axe 4.10.3 were used at exact widths 390, 767, 768, and 1440px, each 1000px high. **164 viewport-state rows** were scanned: 76 overview/detail/error/loading preflight rows, 56 identifier/early-restoration rows, and 32 settled exhaustion/restoration rows. Four additional unauthenticated entry screenshots are recorded. [Accessibility inventory](evidence/brand-payouts-p2-local-runtime-browser-v5/accessibility-summary.json) contains **zero serious and zero critical findings** and retains every other violation with severity, selector, viewport, and state.

Fresh coverage includes ready/partial overview, initial and independent section loading, refreshing, stale last-known data, empty Brand, aborted dependencies, contract-valid null-payload sections, retries, invalid detail, obligation and activity loading/ready/unavailable/denied variants, both activity categories, and fully exhausted activity/obligation lists with both return methods. All intercepted states are labelled; authoritative actor/data responses use the single real backend. No CSS, bundle, or scanner-rule modification occurred.

The known moderate nested/duplicate-main findings reproduce on overview states. The feature main is nested inside the AppShell main, potentially confusing landmark navigation. They remain non-blocking under the explicit serious/critical threshold and are not hidden. Detail variants do not reproduce those overview landmark findings. [Computed contrast records](evidence/brand-payouts-p2-local-runtime-browser-v5/contrast-regression.json) recheck corrected overview and detail selectors, retries, and applicable controls. No prior bootstrap or contrast failure recurred.

[Viewport records](evidence/brand-payouts-p2-local-runtime-browser-v5/viewport-safe-area.json) show no document-level horizontal overflow across all 164 rows. The ready overview uses two mobile lists with no visible tables at 390/767px, and two visible tables with no mobile lists at 768/1440px. Exhausted-list screenshots, feature bottom padding, and fixed-navigation geometry are recorded. The final scrolled-to-bottom control-clearance workflow is incomplete after the circuit breaker and is not asserted passing.

[Keyboard/focus traces](evidence/brand-payouts-p2-local-runtime-browser-v5/keyboard-focus-integration.json) preserve real Tab/Enter activation, visible invoking-link focus, and active elements. Detail entry leaves BODY active with no visible focus; no automatic heading focus or focus-return pass is claimed. This is a material manual observation for SA review, not a fabricated accessibility pass or a separately established WCAG diagnosis. Full focus-return/no-trap assessment is incomplete after the reproducible restoration failure.

## DOM, network, incomplete scope, and cleanup

[Authentication entry](evidence/brand-payouts-p2-local-runtime-browser-v5/authentication-entry.json) shows the normal login form and no protected financial components at all four widths. [DOM/network checks](evidence/brand-payouts-p2-local-runtime-browser-v5/dom-network-product-truth.json) record zero Payouts mutation requests, zero public-reference activity-detail requests, zero unexpected authorized Payouts 4xx/5xx, and zero page exceptions. Captured controls have accessible names; no fixed 30/70 or TDS claim or forbidden financial mutation control was found. The unchanged presentation code formats backend decimal strings and dates without calculating money or payment due dates. Expected authorization errors and intentional dependency/font failures are separately recorded.

This is bounded failure evidence, not a complete passing browser matrix. The remaining fresh actor/viewport coverage, Settings metadata-applicability interception and real destination verification, full focus-return assessment, and final-item safe-area measurements were stopped. Settings Add funds and Brand Return were never invoked. The [circuit-breaker record](evidence/brand-payouts-p2-local-runtime-browser-v5/circuit-breaker.json) enumerates these gaps; none is marked passing or silently substituted with V4 browser evidence.

[Shutdown evidence](evidence/brand-payouts-p2-local-runtime-browser-v5/shutdown.json) confirms owned runtime processes stopped, browsers closed, the disposable database container and volumes removed, no listeners on 3107/4177/55439, and the private session file deleted. Controlled Windows termination is recorded without claiming graceful Nest shutdown-hook execution. The final backend log contains no blocked outbound/provider attempt. Both source worktrees remain clean at pinned heads, with no Prisma diff.

The [machine-readable index](evidence/brand-payouts-p2-local-runtime-browser-v5/index.json) hashes this report and every supporting artifact except itself. JSON, links, hashes, sensitive-value checks, staged diff inspection, and `git diff --check` are validated before commit. Only the V5 report and V5 evidence directory are added as a descendant of the committed runner. No ledger edit, source change, new migration, provider action, canonical merge, P2 acceptance, or P3 work occurred.
