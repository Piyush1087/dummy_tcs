# Brand Payouts P3A — local runtime evidence V2

`P3A_RUNTIME_BROWSER_CIRCUIT_BREAKER`

**P3A_DRAWER_CANCEL_CONTRAST_BELOW_WCAG_AA** blocks the required zero-serious-Axe gate. The corrected Open Payouts, active Settings tab, and Refresh status selectors pass in the final production build. A full-document scan then exposed the actual portal-rendered **Cancel** control in both Add funds and Brand Return drawers at **1.92:1** on the Payouts surface and **1.81:1** on the Settings surface, below the required **4.5:1**. The failure reproduces in PAYOUTS and SETTINGS modes at 390, 767, 768, and 1440 CSS px. No source correction was attempted.

## Immutable inputs and reused evidence

Backend `12d235345e2748f676d36d61c62ed4bd9c049592` (tree `1dd5900068aa7f7fa3aa25dcc0eaef33ee4d7e24`) and frontend `f6b2c878e652d8131cbad0983f77fc3bffce3ab0` (tree `0984071ee2117362ffb87468ac2e3fde9bb5064b`) remained clean. [Source binding](evidence/brand-payouts-p3a-local-runtime-browser-v2/source-binding.json) records the exact identities. [V1 reuse validation](evidence/brand-payouts-p3a-local-runtime-browser-v2/v1-reuse-integrity.json) verified commit `85aba6c74d0d4e9499314c95321e7890336c617e`, tree `fc57d68fac98bb0ac001bcd52f3f9fe41dbe716f`, and all 124 indexed artifact hashes with no mismatch. The authorized immutable backend, PostgreSQL/security 50/50, migration-checksum, read-purity and zero-provider results are labelled REUSED_IMMUTABLE_V1_EVIDENCE.

## Fresh completed gates

[Frontend gates](evidence/brand-payouts-p3a-local-runtime-browser-v2/fresh-frontend-gates.json) passed 62/62 focused tests, 885/885 full tests, changed-file lint, typecheck, and the exact production/local-preview build. The correction measures 6.47:1 for Open Payouts, 6.09:1 for the active tab, and 6.47:1 for Refresh status.

The [full-AppModule admission record](evidence/brand-payouts-p3a-local-runtime-browser-v2/http-mutation-admission.json) contains 168 redacted command/replay requests and 300 passing assertions across PAYOUTS, SETTINGS, missing, blank, and invalid configurations. Owner and Finance reach only the active canonical handler; Campaign Manager receives 403 before surface admission; inactive/stale/mixed claims receive 409 without mutation. [Financial deltas](evidence/brand-payouts-p3a-local-runtime-browser-v2/financial-fail-closed-and-replay.json) prove Add funds fails 503 with one LOAD plus one LOAD_FEE foundation, replay adds nothing, AVAILABLE stays unchanged, and Brand Return fails 503 before Return/allocation/vault/ledger mutation.

[Runtime/provider evidence](evidence/brand-payouts-p3a-local-runtime-browser-v2/runtime-and-provider.json) records healthy root/liveness/database status for every restarted process configuration, one built preview, absent provider variables, zero transmitted provider requests, and zero provider actions.

## Reproducible source defect

[Full-document Axe evidence](evidence/brand-payouts-p3a-local-runtime-browser-v2/accessibility-circuit-breaker.json) records 158 completed browser rows, zero critical findings, and zero document-level overflow. It preserves every failing mode, state, width, selector, computed color, contrast ratio, and representative screenshot. V1 scoped drawer scans to the workspace root; the SideDrawer portal is outside that root, so the real footer controls were excluded. V2 scans the full rendered document.

Reproduce with the pinned production build and full backend: log in normally as Owner, open Add funds or Return unused funds on `/brand/payouts` in PAYOUTS mode or `/brand/settings/escrow` in SETTINGS mode, then run Axe 4.x against the complete document. The `.aurora-button--ghost` Cancel button renders Aurora primary green against the drawer footer and fails WCAG 2 AA. Suspected files are `src/features/brand-escrow/components/escrow-top-up-drawer.tsx`, `src/features/brand-escrow/components/brand-return-drawer.tsx`, `src/design-system/aurora/components.css`, and `src/features/brand-escrow/brand-escrow.css`. A committed color/selector correction is required; environment configuration cannot change these colors.

The scan also retains a pre-existing 1.92:1 inactive Email code control on the unauthenticated sign-in page for review. It is outside P3A ownership and is not used to obscure the P3A drawer failure.

The [circuit-breaker record](evidence/brand-payouts-p3a-local-runtime-browser-v2/circuit-breaker.json) lists completed and stopped gates. P3A acceptance is not set and P4 was not started.

[Database lifecycle](evidence/brand-payouts-p3a-local-runtime-browser-v2/database-lifecycle.json) records the fresh empty disposable database, all 74 committed migrations, UTC, and no created migration. [Shutdown evidence](evidence/brand-payouts-p3a-local-runtime-browser-v2/shutdown.json) records removal of the owned backend, preview, database container, volume, and all three listeners.
