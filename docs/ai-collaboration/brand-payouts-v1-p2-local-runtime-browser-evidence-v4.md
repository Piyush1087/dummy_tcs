# Brand Payouts P2 — V4 local runtime/browser evidence

**Result: P2_RUNTIME_BROWSER_CIRCUIT_BREAKER.** The prior bootstrap and contrast defects did not recur. A real keyboard-opened activity link returns an unexpected **404 for an authorized existing record**. No source correction was attempted. P2 acceptance remains unset; P3 was not started.

## Immutable inputs and execution

| Input | Commit | Tree |
| --- | --- | --- |
| Backend | `119397ff6836ad12846c1e948409d8d49185c408` | `73521762dfeaf703b301e7a61c17cbda97d797a9` |
| Frontend | `7ff0a39470316215496dece91f717593e98c89b5` | `8661f04b7aad64576775968af6b1f0eceaa34c84` |
| Authority/start | `8f3689669eae37b3945d6948d5d26c812cff71f5` | Recorded by Git binding in the index |

The [committed V4 runner](https://github.com/Piyush1087/dummy_tcs/blob/8f3689669eae37b3945d6948d5d26c812cff71f5/docs/ai-collaboration/brand-payouts-v1-p2-local-runtime-browser-v4-runner-v1.md) was read completely. Remote heads, required ancestry, frontend parent, trees, and clean source worktrees matched before runtime. The frontend delta contains exactly the feature CSS and regression-test files named by the runner. Contracts and API client are byte-identical to V3. [Source binding and V3 artifact integrity](evidence/brand-payouts-p2-local-runtime-browser-v4/v3-integrity-and-source-binding.json) records those checks. V1–V3 evidence and the execution ledger are unchanged.

Both pinned applications were built fresh. The frontend used `VITE_API_URL=http://127.0.0.1:3107` and exact `VITE_STAGE=local`, served by built Vite preview at loopback port 4177. The backend ran `dist/main.js` through the full AppModule at loopback port 3107. [Environment/build records](evidence/brand-payouts-p2-local-runtime-browser-v4/environment.json) and [runtime/route records](evidence/brand-payouts-p2-local-runtime-browser-v4/runtime.json) preserve outcomes. The frontend build retained the ordinary large-chunk warning.

PostgreSQL 17.11 ran in a fresh disposable loopback-only container on port 55439 with UTC sessions. All 74 existing migrations applied successfully after readiness; all stored checksums match committed migration files. No migration was created or edited. The [database lifecycle](evidence/brand-payouts-p2-local-runtime-browser-v4/database-lifecycle.json) records nine password-auth actors, three Brands, authoritative vault/ledger fixtures, legacy obligations, and same-timestamp activity. Passwords used the canonical backend hash helper and one random non-durable secret. Browser sessions used the normal login form and real login endpoint; no tokens were injected.

## Reproducible source defect

**Signature: `P2_ACTIVITY_DETAIL_PUBLIC_REFERENCE_MISMATCH`.** Both lifecycle-only and money-movement links are affected. The frontend uses `item.public_reference` in the activity query parameter and sends it unchanged to the detail endpoint. The backend parser accepts the distinct `activity_id` shape.

| Example | UI/public reference | Detail result for Owner and Finance | Canonical activity ID diagnostic | Result |
| --- | --- | --- | --- | --- |
| Lifecycle | `financial-activity:obligation:bp-p2-obligation-a` | 404 | `obligation:bp-p2-obligation-a:created` | 200 |
| Money movement | `financial-activity:ledger:bp-p2-ledger-a-054` | 404 | `ledger:bp-p2-ledger-a-054:recorded` | 200 |

All four unrelated-Brand probes return 404. The [12-request diagnostic index](evidence/brand-payouts-p2-local-runtime-browser-v4/activity-reference-defect-http.json) includes redacted responses, proving the records exist without weakening cross-Brand checks. The [source diagnosis](evidence/brand-payouts-p2-local-runtime-browser-v4/source-diagnosis.json) binds list fields to the link and parser expressions.

Exact reproduction: authenticate Owner through the normal form; open `/brand/payouts`; Tab to the first **View activity** link and press Enter. The URL contains `?activity=financial-activity%3Aobligation%3Abp-p2-obligation-a`. The real GET returns 404 and renders **Financial detail unavailable**. Repeat with the ledger activity link. This is not an intercepted error. Browser confirmation covers all four required widths. See the [390px lifecycle failure](evidence/brand-payouts-p2-local-runtime-browser-v4/390-owner-activity-public-reference-404-0.png), [1440px ledger failure](evidence/brand-payouts-p2-local-runtime-browser-v4/1440-owner-activity-public-reference-404-1.png), and [bounded network record](evidence/brand-payouts-p2-local-runtime-browser-v4/browser-network-console-bounded.json).

Owning source locations:

- [Frontend activity link, line 225](https://github.com/Piyush1087/creator-commerce-frontend-v2-clone/blob/7ff0a39470316215496dece91f717593e98c89b5/src/features/brand-payouts/components/PayoutsActivity.tsx#L225).
- [Frontend detail client, line 186](https://github.com/Piyush1087/creator-commerce-frontend-v2-clone/blob/7ff0a39470316215496dece91f717593e98c89b5/src/features/brand-payouts/api/brand-payouts-client.ts#L186).
- [Backend activity parser, line 1292](https://github.com/Piyush1087/creator-commerce-backend-v2-clone/blob/119397ff6836ad12846c1e948409d8d49185c408/src/features/brand-payouts/services/financial-activity-projection.service.ts#L1292).

An environment or fixture change cannot reconcile these two committed identifier formats. The canonical-ID diagnostic navigation proves existence and allows scanner coverage of the ready component; it is **not** counted as a working UI link or a correction. Source changes remain unauthorized.

## Fresh HTTP and read-purity evidence

V3 evidence classification is **RERUN**, not reused. The [fresh full-AppModule HTTP/RBAC lane](evidence/brand-payouts-p2-local-runtime-browser-v4/http-rbac.json) passed **178 assertions, 64 GET requests, and nine real password logins**. It covers health/root/liveness, exact V2 negotiation, default/incompatible representation, Owner/Finance, Manager zero-row scope, denied actors, cross-Brand probes, source-authoritative buckets, legacy provenance, and pagination. Two traversals exhaust five pages with 56 unique activities in identical order and frozen `as_of` within each traversal. All **31 original live responses** passed the final frontend schemas before cursor redaction; see [schema validation](evidence/brand-payouts-p2-local-runtime-browser-v4/response-schema-validation.json).

That lane used canonical activity IDs for successful detail probes; it did not test the browser's public-reference link. Its passing results therefore do not contradict the newly discovered integration defect. The additional 12 diagnostic GETs and three logins are reported separately.

[Financial-state hashes](evidence/brand-payouts-p2-local-runtime-browser-v4/financial-state.json) cover 20 canonical models. Initial baseline, post-HTTP, and post-preflight hashes are equal. After those reads, 30 deterministic obligations were added to unrelated Brand B solely to expose its Load more obligations control. A new baseline was taken after that explicit fixture write; it equals the final hash after the actor, keyboard, and bounded diagnostic lanes. No equality is claimed across the deliberate fixture expansion. No Payouts read provisioned an empty-Brand vault or changed canonical financial rows.

## Consolidated accessibility and responsive sweep

Chromium 140.0.7339.16, Playwright 1.61.1, and Axe 4.10.3 were used. Every required viewport has a height of 1000 CSS pixels. **162 captured Payouts/guard viewport-state rows** were scanned, plus four unauthenticated entry screenshots. There are **zero serious or critical Axe findings** in those rows. [Accessibility results](evidence/brand-payouts-p2-local-runtime-browser-v4/accessibility-summary.json) preserve all other findings with selectors, severity, state, and viewport; no scanner rule was disabled.

The bounded sweep covers ready/partial overview, empty Brand, initial and independent loading, refreshing, stale last-known state, aborted dependencies, null-payload unavailable sections, retries, invalid detail, obligation loading/ready/unavailable/denied, activity loading/error/denied, and both actual ready activity variants plus null-payload detail variants. Both pagination button variants and expanded coverage disclosures were scanned at 390, 767, 768, and 1440px. Lifecycle action-required/blocked presentation remains informational; no financial action was performed.

The initial intended `activity-ready` capture actually rendered a 404 page. The matrix now explicitly records the observed state and response; it is not presented as a ready-state pass. Later canonical-ID diagnostic scans cover real ready activity components. This distinction is retained in [preflight completion](evidence/brand-payouts-p2-local-runtime-browser-v4/preflight-summary.json).

The V2 eyebrow, Refresh, and Load more activity selectors and V3 Back button no longer produce serious contrast failures. Load more obligations, retry controls, and both ready detail Back buttons also pass. [Computed foreground/background records](evidence/brand-payouts-p2-local-runtime-browser-v4/contrast-regression.json) bind those observations to screenshots and Axe results. External font requests were intentionally blocked and are separately recorded; actual rendered styles were measured.

Known moderate `landmark-main-is-top-level` and `landmark-no-duplicate-main` findings reproduce on overview states. The feature's inner main is nested in the AppShell main. This can confuse landmark navigation; it is non-blocking under the runner's explicit serious/critical standard. Detail and denial variants do not reproduce those overview findings. The complete violation inventory remains available for SA review.

[Viewport measurements](evidence/brand-payouts-p2-local-runtime-browser-v4/viewport-safe-area.json) show no document-level horizontal overflow in all 162 rows. The ready overview has two mobile lists and no visible tables at 390/767px; at 768/1440px it has two visible tables and no mobile lists. Bottom-navigation geometry and feature padding are recorded. The final exhausted-list clearance workflow was not completed after the circuit breaker; it is not marked passing.

## Keyboard, actor, network, and scope outcomes

The actor matrix includes Owner, Finance, Manager, inactive membership, no membership, unrelated Brand, Creator redirect, and Admin denial at all four widths, with unauthorized direct-detail probes. Empty Brand and unauthenticated entry are recorded separately. [Initial matrix](evidence/brand-payouts-p2-local-runtime-browser-v4/browser-matrix.json), [actor/keyboard matrix](evidence/brand-payouts-p2-local-runtime-browser-v4/browser-matrix-extended.json), and [bounded confirmation matrix](evidence/brand-payouts-p2-local-runtime-browser-v4/browser-matrix-bounded.json) carry immutable pins, source classification, screenshots, network references, DOM, overflow, and Axe/focus evidence.

At 390px, keyboard Tab/Enter opened obligation detail with visible focus on the invoking link. Space activated Back to Payouts and returned to the overview. Escape correctly did not dismiss a normal detail page. The next keyboard-opened activity link produced the 404; the automation's expected ready-detail wait then timed out because that grid was absent. [Keyboard trace](evidence/brand-payouts-p2-local-runtime-browser-v4/keyboard-focus-extended.json) preserves the exact sequence. BODY remains active after route entry/Back, with no automatic heading focus; this is retained as a manual observation rather than asserted as an independently established WCAG violation. The remaining keyboard, refresh, Back, and focus-return matrix is incomplete due to the circuit breaker.

[Authentication entry](evidence/brand-payouts-p2-local-runtime-browser-v4/authentication-entry.json) proves that the login form mounts and no protected financial component renders before authentication. [DOM/network truth checks](evidence/brand-payouts-p2-local-runtime-browser-v4/dom-network-product-truth.json) show no Payouts mutation requests, unnamed captured Payouts controls, fixed 30/70 or TDS claims, or forbidden financial mutation controls. The frontend formats backend decimal strings and timestamps; it does not calculate payment amounts or due dates. Activity error copy is generic and does not expose raw diagnostics. Unexpected authorized activity 404s are explicitly failures, not relabelled as expected authorization errors.

The real overview has PARTIAL coverage, so the accepted feature rule hides its Settings shortcut even though version-bound Settings actions appear in the response. No fake COMPLETE snapshot was substituted. The Settings destination workflow was not opened after discovery of the source defect. Add funds and Brand Return mutations were never invoked. Remaining uncompleted criteria are enumerated in the [circuit-breaker record](evidence/brand-payouts-p2-local-runtime-browser-v4/circuit-breaker.json); this package is comprehensive bounded failure evidence, not full passing P2 evidence.

## Cleanup and artifact validation

[Shutdown evidence](evidence/brand-payouts-p2-local-runtime-browser-v4/shutdown.json) confirms four owned runtime processes stopped, browsers closed, the disposable container and volumes removed, no listeners on 3107/4177/55439, and the private session file deleted. Windows process termination is recorded without claiming graceful Nest shutdown hooks. Provider variables were absent, optional work was inert, and the backend loopback guard recorded no external provider attempt. No provider action, source change, migration creation, ledger edit, canonical merge, or P3 work occurred.

The [machine-readable index](evidence/brand-payouts-p2-local-runtime-browser-v4/index.json) hashes the report and every supporting artifact except itself. JSON parsing, local Markdown links, artifact hashes, complete diff inspection, sensitive-value checks, and `git diff --check` pass before commit. Only this V4 report and V4 evidence directory are added. The Systems Architect retains checkpoint authority.
