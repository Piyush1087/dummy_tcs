# Brand Payouts P2 — V6 local runtime and browser evidence

`BP_P2_LOCAL_RUNTIME_BROWSER_EVIDENCE_COMPLETE`

Result: **PASS for the V6 evidence relay**. P2 acceptance is **not set**. No ledger, backend, frontend, migration, provider, or P3 change was made.

## Immutable binding

| Input | Commit | Tree |
| --- | --- | --- |
| Backend | `119397ff6836ad12846c1e948409d8d49185c408` | `73521762dfeaf703b301e7a61c17cbda97d797a9` |
| Frontend | `ec412013cb7eeaa119a7cded6fb7f5ef0c40df03` | `61c9103a32c7aca494f2ef13b384e843f460e84f` |
| Authority starting head | `f9c25cf563c3caa8e358ce509cc70554d761cfea` | `69238d69969a3ebd9c211cf1b44e0cdc5e0b6b38` |

The [committed V6 runner](https://github.com/Piyush1087/dummy_tcs/blob/f9c25cf563c3caa8e358ce509cc70554d761cfea/docs/ai-collaboration/brand-payouts-v1-p2-local-runtime-browser-v6-runner-v1.md) is the complete assignment. Exact remote heads, clean worktrees, trees, and required ancestry were verified before runtime work. The frontend delta from `c3ca6ff26d568915276e13140335f5811bb1cc50` changes only `BrandPayoutsWorkspace.tsx` and its regression test: the existing hook moves to the stable route component and its unchanged return value is passed into the overview. The complete diff and final clean source binding are in [source binding and V5 integrity](evidence/brand-payouts-p2-local-runtime-browser-v6/v5-integrity-and-source-binding.json).

All **197 V5 indexed artifact hashes** match. V1–V5 evidence and the execution ledger are unchanged. V5 HTTP evidence classification is **RERUN**: none of the fresh V6 HTTP results is represented as reuse.

The [machine-readable index](evidence/brand-payouts-p2-local-runtime-browser-v6/index.json) hashes every supporting artifact and this report. It excludes itself to avoid a self-referential hash. Nested records inherit pinned source identities from their enclosing object; browser matrix rows also carry explicit identities, actor, fixture, viewport, source classification, screenshot, network, console, overflow, and Axe/focus fields.

## Runtime, migration, HTTP, and financial purity

The [environment record](evidence/brand-payouts-p2-local-runtime-browser-v6/environment.json) records Windows/x64, Node, npm, PostgreSQL, Chromium, Playwright, and Axe versions, plus fresh build output. The pinned backend was built and run as `dist/main.js` through the full AppModule. The frontend was freshly built with exact `VITE_STAGE=local` and the loopback API origin, then served by built Vite preview. React mounted and the normal login form worked; the former bootstrap exception did not recur.

The [database lifecycle](evidence/brand-payouts-p2-local-runtime-browser-v6/database-lifecycle.json) proves an empty disposable PostgreSQL database, loopback-only exposure, UTC sessions, and successful application of all **74 existing migrations**, with every source checksum verified. No migration was created or edited. Readiness preceded the successful HTTP lane. The [runtime record](evidence/brand-payouts-p2-local-runtime-browser-v6/runtime.json) captures full-AppModule readiness and all mapped Payouts routes, each GET-only. Root, liveness, and database health returned 200 in the HTTP index.

The fresh [HTTP/RBAC request-response index](evidence/brand-payouts-p2-local-runtime-browser-v6/http-rbac.json) contains **64 GET requests, 9 real login POSTs, and 178 passing assertions**. It covers exact V2 negotiation and incompatible/default behavior; Owner/Finance safe projections; Manager zero-row scope; inactive, no-membership, Creator and Admin denial; unrelated-Brand list/detail/cursor/existence isolation; stable same-timestamp pagination; separate authoritative summary buckets; lifecycle versus money movement; legacy provenance; and absence of sensitive provider fields. [31 live responses validate](evidence/brand-payouts-p2-local-runtime-browser-v6/response-schema-validation.json) against the final frontend schemas before cursor redaction.

The [20-model financial comparison](evidence/brand-payouts-p2-local-runtime-browser-v6/financial-state.json) is byte-equivalent under deterministic normalization in **all three read lanes**:

1. Full HTTP/RBAC.
2. Main browser matrix, identifier/restoration/clearance, and all original-fixture retries.
3. Separate UUID Settings fixture navigation and keyboard assessment.

Two deliberate fixture-write boundaries are explicit: 30 unrelated-Brand obligations were added after HTTP to reach 31 visible obligations; a separate UUID Settings Owner/Brand/vault was added after the main browser lane. No equality is claimed across these setup boundaries. Existing fixtures were not changed. Empty-Brand reads did not provision a vault. Raw financial rows, credentials, session values, and opaque cursors are not retained.

Provider variables were absent, optional work inert, and all application/provider traffic restricted to loopback by the temporary runtime guard. No external provider connection attempt or financial mutation was recorded. Only normal authentication POSTs were used. The [shutdown record](evidence/brand-payouts-p2-local-runtime-browser-v6/shutdown.json) confirms owned process termination, container/volume removal, ephemeral session-file deletion, and no remaining owned listeners. Windows process termination was controlled; graceful Nest shutdown-hook execution is not claimed.

## Pagination and identity regressions

All **16 settled restoration combinations pass** in [settled pagination restoration](evidence/brand-payouts-p2-local-runtime-browser-v6/settled-pagination-restoration.json). Each starts with a clean authenticated overview, exhausts continuation, opens an expanded-row UI link, reaches real 200 detail, returns without hard reload, waits until loading placeholders disappear plus 250 ms, and compares the complete ordered identifiers and exhausted state.

| List / return | 390 px | 767 px | 768 px | 1440 px |
| --- | --- | --- | --- | --- |
| 56 activities / browser Back | PASS | PASS | PASS | PASS |
| 56 activities / Back to Payouts | PASS | PASS | PASS | PASS |
| 31 obligations / browser Back | PASS | PASS | PASS | PASS |
| 31 obligations / Back to Payouts | PASS | PASS | PASS | PASS |

No Load more control reappeared. **Initial-page refetch count is zero in every case.** Ordered IDs, counts, focus, scroll, network, screenshots and Axe results are retained in the [restoration browser matrix](evidence/brand-payouts-p2-local-runtime-browser-v6/browser-matrix-restoration.json) and [keyboard traces](evidence/brand-payouts-p2-local-runtime-browser-v6/keyboard-focus-restoration.json). The earlier timed observations are supplemental; the settled comparisons are authoritative for this regression.

The [identifier integration proof](evidence/brand-payouts-p2-local-runtime-browser-v6/identifier-integration.json) passes **16/16**: lifecycle and money-movement activities, keyboard and pointer activation, all four widths. In each case `activity_id` deliberately differs from `public_reference`; visible/accessibility labels retain the public reference, href and request use the activity ID, detail returns 200, and refresh preserves identity. No request uses the public reference as detail identity. The [integration matrix](evidence/brand-payouts-p2-local-runtime-browser-v6/browser-matrix-integration.json) includes screenshots and first-page return comparisons.

## Complete browser matrix

Every viewport is **1000 CSS px high**. The six final matrices contain **256 fresh Axe scans**:

| Evidence | Rows | Coverage |
| --- | --- | --- |
| [State sweep](evidence/brand-payouts-p2-local-runtime-browser-v6/browser-matrix.json) | 76 | Partial/ready overview, both detail types, held initial and independent loading, abort/unavailable, contract-valid unavailable projection, refreshing, stale last-known, empty, invalid detail and denial |
| [Identifier matrix](evidence/brand-payouts-p2-local-runtime-browser-v6/browser-matrix-integration.json) | 56 | Lifecycle/money UI entry, keyboard/pointer, detail refresh/return, supplemental pagination |
| [Settled restoration matrix](evidence/brand-payouts-p2-local-runtime-browser-v6/browser-matrix-restoration.json) | 32 | Before/after captures for all 16 exhausted-list return combinations |
| [Actor matrix](evidence/brand-payouts-p2-local-runtime-browser-v6/browser-matrix-complete.json) | 72 | Eight actor projections and both direct-detail probes for inactive, no-membership, unrelated, Creator and Admin, at every width |
| [Settings and keyboard matrix](evidence/brand-payouts-p2-local-runtime-browser-v6/browser-matrix-settings.json) | 12 | Existing Settings link, browser Back, native disclosure/keyboard assessment at every width |
| [Clearance matrix](evidence/brand-payouts-p2-local-runtime-browser-v6/browser-matrix-clearance.json) | 8 | Both fully exhausted lists at every width |

Additional [anonymous entry screenshots](evidence/brand-payouts-p2-local-runtime-browser-v6/authentication-entry.json) prove the ordinary password form mounts without protected financial data at all widths. Every interactive actor logged in through that form and the real login endpoint; no browser token was injected.

Authoritative actors/data use the single real backend. Held, aborted, unavailable and Settings-applicability projections are explicitly labelled intercepted. Contract-valid projections derive from local captured responses and retain exact V2 representation headers. They do not claim backend truth.

The [Settings destination proof](evidence/brand-payouts-p2-local-runtime-browser-v6/settings-compatibility.json) follows the existing link by keyboard to the real `/brand/settings/escrow` at every width. Only the overview coverage metadata is changed to make that existing link applicable; it is explicitly non-authoritative. Both Add funds and Return unused funds are present exclusively on Settings. Return remains disabled because the test vault has no proven source lots; no eligibility was fabricated. Neither control was activated. Browser Back returns to Payouts.

## Accessibility, focus, and responsive clearance

[Fresh Axe results](evidence/brand-payouts-p2-local-runtime-browser-v6/accessibility-summary.json): **0 serious, 0 critical** across 256 final scans. All **248 moderate finding instances** are retained with exact rule, selector, viewport, actor/state and node evidence. The known `landmark-main-is-top-level` and `landmark-no-duplicate-main` findings reproduce: the overview's inner `main` in `BrandPayoutsWorkspace.tsx:106` sits inside `AppShell.tsx:57`. They can confuse landmark navigation. They remain explicit SA review items but do not reach this runner's serious/critical blocking threshold. No scanner rule was disabled.

[Computed contrast evidence](evidence/brand-payouts-p2-local-runtime-browser-v6/contrast-regression.json) includes the eyebrow, Refresh, both Load more controls, retries, Back to Payouts and detail labels. Prior serious contrast defects do not recur. External font requests were intentionally blocked; actual fallback rendering was scanned, and the foreground/background computed values are retained.

The [keyboard/focus assessment](evidence/brand-payouts-p2-local-runtime-browser-v6/keyboard-focus-assessment.json) records the actual behavior: detail is a route page, not a modal or drawer. BODY is commonly active after route replacement. **No automatic heading focus or focus return to the invoking row is claimed.** Tab/Enter reaches the named links and Back control with visible focus; Space activates buttons/native disclosure; expanded-row traversal and 100-Tab overview sequences demonstrate no trap. The native disclosure does not promise Escape dismissal and remains toggleable by Space/Enter. Under the committed page-navigation semantics this is a documented non-blocking observation, not a modal containment failure. It remains an improvement opportunity for SA review.

The [viewport record](evidence/brand-payouts-p2-local-runtime-browser-v6/viewport-safe-area.json) shows **zero document-level horizontal overflow**. For ready overview, 390/767 have two labelled mobile lists and no visible tables; 768/1440 have two tables and no visible mobile lists. All three requested width metrics are recorded per row.

[Final-row and bottom clearance](evidence/brand-payouts-p2-local-runtime-browser-v6/settled-bottom-clearance.json) passes for both lists at every width. Each list's final row/control is measured in view, then the actual final document control is measured at document bottom, with separate viewport screenshots. Mobile navigation starts at y=936 in the 1000px viewport and workspace bottom padding is 96px. At 768/1440 the boundary is the viewport bottom. The original restoration measurements that placed an earlier stacked obligation section above the viewport are retained but are not misclassified as navigation occlusion. These are desktop Chromium CSS viewports; a physical device notch is not simulated.

## Network, authorization, and Product truth

[DOM/network evidence](evidence/brand-payouts-p2-local-runtime-browser-v6/dom-network-product-truth.json) records no unexpected Payouts 4xx/5xx, no page exception, no Payouts mutation, no financial mutation, no unnamed visible Payouts control, and no forbidden financial controls or sensitive-value patterns. Expected anonymous-auth 401 and explicit denial/existence 403/404 are classified separately, as are intentionally blocked fonts/dependencies.

The stable hook's direct-detail background reads are recorded: inactive/no-membership reads remain 403; unrelated own-scope background reads remain safe while foreign detail is 404; Creator redirects and Admin denies. All ten direct-detail probes record zero rendered overview financial rows. HTTP schema/RBAC checks and the complete financial snapshots independently cover their scope and purity.

Payouts displays backend-authored decimal strings and supplied timestamps; its formatting code performs no money arithmetic or payment-due-date derivation. Inspected Payouts DOM contains no fixed 30/70 or TDS claim, synthetic document/receipt, provider/bank/KYC/tax value, credential, or raw diagnostic. Existing Settings treasury terminology is outside Payouts and is not represented as a newly introduced Payouts claim.

## Recovered harness attempts and validation

[Attempt classification](evidence/brand-payouts-p2-local-runtime-browser-v6/harness-attempts.json) preserves three bounded, superseded attempts without acceptance credit:

- Parallel browsers caused local resource contention and one login transaction deadline. Serial actor rerun passed all 72 rows without 500s.
- Playwright JSON fulfillment changed the V2 media type. Corrected temporary interception preserved the header; the full 76-state sweep passed.
- Readable fixture IDs failed Settings' UUID contract. A separate UUID fixture rendered the real destination without source changes.

Files prefixed `environment-attempt-`, `transport-attempt-`, and `fixture-attempt-` are audit history, not final matrix results. The failed metadata tail in the complete-actor network log is superseded by the final Settings network log. No application assertion was weakened and no source correction was attempted.

Before commit, JSON/Markdown references and artifact hashes were validated, the complete evidence was scanned for session/credential/provider-shaped values, source worktrees remained clean at pinned heads, and only this V6 report/directory were staged. No prior evidence or ledger change is included. `git diff --check` passed. The evidence commit is one fast-forward descendant of the runner authority head; P2 acceptance remains for the Systems Architect.
