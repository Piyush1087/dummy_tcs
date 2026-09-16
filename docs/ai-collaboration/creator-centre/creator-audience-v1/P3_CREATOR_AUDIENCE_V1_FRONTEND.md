# Creator Audience V1 — P3 frontend packet

P3 = ACCEPTED under the authorized autonomous packet gates. Final V1 technical acceptance remains with Technical SA / Program Orchestrator.

Product 27140fdf6cf522419146c3e7a147169b36a33e5e, blob b32f800dc976ca55a75d417ff9db7b807bf50ea6. Creator Brand excluded as evidence and context. Backend predecessor d99cce6f8d7730e8eff7f7cc734ba8813bf822e7 / c0101e6a5a07e156f6c46e2a328a8e948cdbc915. Authority P2 9495d22547214554cce2363f05bd708c510415db / f2378cba9ee5fd960e6a01aaf524831dc2b3911e.

## Outcome and ownership

The existing authenticated Insights / Audience route consumes strict creator_audience_v1.1. Hierarchy: source → Overview → bounded optional Highlights → Audience Profiles and whole-cohort Followers/Engaged switch → bounded optional Audience & Content Context → sufficiently supported Change Over Time → Data status & limitations.

Account followers are independently displayed in Overview, including unavailable vs zero. Profiles retain source-native independent dimensions and truthful percentage missingness; profile size is explicitly a provider demographic denominator, not the account follower count. No person synthesis, cross-dimensional joint cohort, preference or causal claim. Context displays separate labeled Audience and Content facts with a non-preference disclaimer. Unsupported history has no empty chart. NOT_PROCESSED exposes source facts only, never locally approximated Intelligence.

Audience and its existing Insights redirect now sit outside the generic personal-platform onboarding gate, while remaining inside RequireAuth / AppShell and the existing explicit INSIGHTS_AUDIENCE_READ Team projection guard. Backend remains the authorization authority. This narrowly permits accepted Owner/Manager/Assistant and no-source states without changing generic onboarding, Settings or Content policies. Architecture and predecessor guard regressions pass.

Strict frontend schema mirrors backend bounded source support, independent cohorts, current fact values, historical percentages/sample refs/time ordering and stale-context restrictions. Authenticated client stays GET/no-store; hook performs one initial read and explicit read retry only, preserving last good data on error and aborting outdated/unmounted reads. No refresh/provider action, editing, confirmation, Portfolio, Media Kit or new workspace section.

Aurora Card/Badge/Alert/Button and existing tokens/navigation are reused. H1 loading state, H2 section order, H3 cohort and H4 dimension headings, keyboard tabs with focus return, wrapping/min-width bounds. No global design-system change.

## Gates and exact commands

- npm ci --cache node_modules/.cache/audience-v1-npm --no-fund --no-audit: PASS, 299 installed packages; no lock/package change or upgrade.
- npm run test -- src/features/creator-audience src/routes/creator-audience-v1-access.architecture.test.ts src/shared/auth src/features/auth src/features/settings/api/creator-team-client.test.ts src/features/creator-onboarding/components/creator-platform-route-guard.test.ts src/features/creator-content: 140 tests / 19 files PASS.
- npm run build: PASS (tsc -b and Vite production bundle); inherited large-chunk advisory recorded, no gate waiver.
- npx eslint src/features/creator-audience src/routes/app-routes.tsx src/routes/creator-audience-v1-access.architecture.test.ts: PASS.
- npx prettier --check same scoped surfaces: PASS.
- git diff --check, secret/forbidden-artifact scan, ignored local env check: PASS. Only VITE_API_URL and VITE_STAGE local configuration names are reported; no secret values, storage state or runtime output committed.
- Browser integrated widths/Axe are P4 gates and are not claimed by these unit tests.

## Checkpoint

Frontend d5910537b1e323e399cb5966a57910b478c08d18 / f83713cb0022d0c948943caa3240bc74db6f39bc, parent e6e7ae8ea9f5f98f882f52230e4cae163bda1e89. 10 files, 679 insertions / 91 deletions. Normal non-force push, independent fetch/prune local/fetched SHA/tree equality, exact-start ancestry and clean status PASS.

Changed files: source consumer schema and tests, authenticated client fixture test, workspace and tests, scoped stylesheet, read hook and new tests, app-routes plus access architecture test. Backend/schema/migrations/dependencies/Docker unchanged in P3.

Primary packet run 1; formal correction cycles 0. P4 proceeds autonomously. No live Graph/model/provider mutation, development merge or deployment.

Closeout supplement: required Creator Brand / Commercial navigation, Commercial route authorization, Creator shell capability and bottom-nav predecessor checks completed during P4 before final evidence-ready publication: 22 tests /5 files PASS. Initial P3 checkpoint recorded the 140 Audience/Auth/Content-focused tests; this supplement explicitly completes the shared-shell predecessor inventory rather than retroactively claiming those checks were part of that first invocation. No related production source changed.
