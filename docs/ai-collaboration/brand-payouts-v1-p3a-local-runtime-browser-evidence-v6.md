# Brand Payouts P3A — V6 focused runtime evidence

`P3A_RUNTIME_BROWSER_CIRCUIT_BREAKER`

**P3A_V6_BRAND_RETURN_FORM_READY_UNREACHABLE_WITH_FAIL_CLOSED_PROVIDER** prevents four of the eight required representative lanes. The fresh full AppModule binds `FailClosedBrandReturnRefundProvider`, whose capability list is always empty. A canonical credited `PROVEN_SOURCE` funding lot makes `proven_source_available_balance` ₹100,000.00, but the server-authoritative `self_service_returnable_balance` remains ₹0.00. PAYOUTS opens the Return drawer but no positive amount is valid; SETTINGS natively disables Return unused funds. The runner forbids provider configuration/actions and response-body alteration, so a valid Return request cannot be prepared or submitted without changing immutable source/runtime semantics. No source correction was attempted. P3A acceptance is not set and P4 was not started.

## Binding, reuse and focused source gates

The [V6 runner](https://github.com/Piyush1087/dummy_tcs/blob/14e3598fd87da4e4762a8840fc4984b40b76daa3/docs/ai-collaboration/brand-payouts-v1-p3a-local-runtime-browser-runner-v6.md) controls this run. [Source binding](evidence/brand-payouts-p3a-local-runtime-browser-v6/source-binding.json) verifies clean exact remote heads:

| Input | Commit | Tree |
| --- | --- | --- |
| Backend | `12d235345e2748f676d36d61c62ed4bd9c049592` | `1dd5900068aa7f7fa3aa25dcc0eaef33ee4d7e24` |
| Frontend | `f775d33f729e02c020ced5b0a7ffcc662110db9e` | `30001818c07b231529935dedf12ca059be6bd6dc` |

The frontend parent is `ca1a289670968eacf2c2c5c31ac626921aa8efba`. Its delta is exactly both Treasury drawers and `treasury-settings.test.ts`. Shared SideDrawer, API, authorization, financial semantics, CSS, schema, migrations, packages and lockfiles are unchanged.

[Reuse validation](evidence/brand-payouts-p3a-local-runtime-browser-v6/reuse-integrity.json) freshly verifies all **335/335** immutable indexed Git blobs and byte sizes: V1 124, V2 51, V3 12, V4 24 and V5 124. Ancestors and evidence-only scope pass. These are labelled `REUSED_IMMUTABLE_P3A_V1_TO_V5_EVIDENCE`; V5’s failed focus is not credited.

[Fresh source gates](evidence/brand-payouts-p3a-local-runtime-browser-v6/fresh-source-gates.json) pass **19/19 targeted**, **66/66 focused**, changed-file ESLint and Prettier, typecheck, diff integrity and the exact production/local-preview build. The full 889-test result is the verified SA input and was not rerun, as directed. Sanitized logs accompany the record.

## Disposable built runtime

[Database lifecycle](evidence/brand-payouts-p3a-local-runtime-browser-v6/database-lifecycle.json) proves fresh loopback PostgreSQL, UTC and all **74** existing committed migrations, each matching accepted V1 and pinned source checksums. No migration file was created or changed; M1/M2 was not applied. Fixtures use normal password authentication, Owner and Finance memberships, a Brand/subscription/vault and one credited original-source funding load/lot. The lot is `PROVEN_SOURCE`, GATEWAY/INR, available and provider-refundable for ₹100,000.00. Temporary provider-shaped fixture identities are redacted and destroyed.

`DISPOSABLE_DATABASE_EXISTING_MIGRATIONS_APPLIED = YES`

`MIGRATION_FILES_CREATED_OR_CHANGED = NONE`

[Runtime lifecycle](evidence/brand-payouts-p3a-local-runtime-browser-v6/runtime-lifecycle.json) proves fresh backend build, full `dist/main.js`/AppModule startup in PAYOUTS and SETTINGS, mapped routes, ready state and root/liveness/database-health 200. One production/local built Vite preview served the browser. Provider variables were absent; the outbound guard loaded before bootstrap and recorded zero non-loopback backend attempts.

## Focused eight-lane outcome

[PAYOUTS](evidence/brand-payouts-p3a-local-runtime-browser-v6/browser-PAYOUTS.json) and [SETTINGS](evidence/brand-payouts-p3a-local-runtime-browser-v6/browser-SETTINGS.json) contain all eight required lane identities:

| Mode | Actor | Command | Width | Result |
| --- | --- | --- | ---: | --- |
| PAYOUTS | Owner | Add funds | 390 | PASS |
| PAYOUTS | Owner | Brand Return | 390 | BLOCKED before valid submit |
| PAYOUTS | Finance | Add funds | 1440 | PASS |
| PAYOUTS | Finance | Brand Return | 1440 | BLOCKED before valid submit |
| SETTINGS | Owner | Add funds | 390 | PASS |
| SETTINGS | Owner | Brand Return | 390 | BLOCKED before valid submit |
| SETTINGS | Finance | Add funds | 1440 | PASS |
| SETTINGS | Finance | Brand Return | 1440 | BLOCKED before valid submit |

All four Add funds lanes pass the corrected behavior. The real local POST executes while only delivery of its unchanged response is delayed as `TEST_ONLY_LOCAL_RESPONSE_DELIVERY_DELAY`. While pending, submit remains focused, natively enabled and `aria-disabled=true`; repeated Enter and pointer activation produce exactly one financial POST. Tab and Shift+Tab remain within the drawer. Releasing the unchanged response yields canonical 503; submit remains focused and enabled, subsequent Tab/Shift+Tab remain trapped, truthful error copy remains visible, and Escape restores the exact invoker. [Delay and dedupe](evidence/brand-payouts-p3a-local-runtime-browser-v6/response-delay-dedupe.json) retains request counts and request/response/header hashes.

Each of the eight lanes has a full-document Axe scan and screenshot: Add funds after 503, Return at its canonical unreachable state. All scans include portals and record **zero P3A-owned serious/critical findings** and **zero document overflow**. Active Cancel is `rgb(0,108,75)` at 6.09:1 or better on its actual background; disabled controls are not credited as active contrast passes. Console/network evidence retains expected anonymous refresh 401, blocked font requests and canonical 503s with zero page exception. The focused screenshots and machine-readable rows preserve exact mode, actor, command, width, route, controls, focus, contrast and overflow.

The four Return rows are evidence of the blocker, not passing submission lanes. PAYOUTS drawer text shows “Self-service returnable now ₹0.00”; SETTINGS shows “Self-service returnable ₹0.00” and its command is disabled. No intercepted body, mock server, provider variable or provider action was used.

## Circuit breaker, financial boundary and cleanup

[Circuit-breaker details](evidence/brand-payouts-p3a-local-runtime-browser-v6/circuit-breaker.json) reproduce the constraint from canonical database state. The bounded suspected files are `brand-escrow.module.ts`, the fail-closed provider adapter and Return service, plus the two frontend eligibility consumers. Database provenance cannot overcome an immutable empty runtime capability list. Completing the prescribed Return-submit focus proof requires a source/runtime test boundary that exposes safe capability while remaining provider-disabled, or authority to alter the test projection; neither exists in V6.

[Financial/provider evidence](evidence/brand-payouts-p3a-local-runtime-browser-v6/financial-provider-summary.json) records the four credited Add funds commands plus disclosed discarded harness attempts. Every command returns 503 and creates only the accepted pending foundation; AVAILABLE remains unchanged. One seeded provenance lot remains, and Brand Return request/allocation/webhook rows remain zero. Provider attempts/actions are zero. No success, settlement, SLA, 30/70, TDS, document, release or reversal claim is made.

[Harness attempts](evidence/brand-payouts-p3a-local-runtime-browser-v6/harness-attempts.json) receive no gate credit and explain preview readiness, changing submit labels, Alert semantics, and why the required post-response Axe scan is separated from pending focus measurement. No source or assertion changed.

[Baseline findings](evidence/brand-payouts-p3a-local-runtime-browser-v6/baseline-findings.json) retains immutable Email-code and minor/moderate landmark findings without hiding them or treating them as P3A regressions. [Composite coverage](evidence/brand-payouts-p3a-local-runtime-browser-v6/composite-coverage.json) separates fresh passing Add funds evidence from blocked Return evidence and verified inherited gates. The P3A cutover composite gate is not established.

[Cleanup](evidence/brand-payouts-p3a-local-runtime-browser-v6/cleanup.json) verifies zero owned process/listener/container/volume or private session remains, temporary scripts are removed, source worktrees remain clean at the pins, and the shared database is untouched. The [index](evidence/brand-payouts-p3a-local-runtime-browser-v6/index.json) hashes this report and every artifact. JSON, Markdown links, PNGs, staged hashes, sensitive-value/path scans and `git diff --check` were validated before commit. Only the additive V6 package is committed; prior evidence and the execution ledger are unchanged.
