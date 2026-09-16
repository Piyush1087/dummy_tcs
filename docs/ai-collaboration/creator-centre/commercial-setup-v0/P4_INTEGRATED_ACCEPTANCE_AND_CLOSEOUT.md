# P4 — integrated acceptance and immutable closeout

This record is published only after mandatory final gates pass. Separate Work Preferences V2, Rate Card V2 and combined evidence are ready for Child-SA / Program-Orchestrator final review. No later capability or production release is self-authorized.

## Exact checkpoints and lineage

Original backend `6206f43c6a13c304c971b810e1dd99a20aaaa11f` / tree `533f543612b856cfaf3b57769fe0b5541b803c3f`; frontend `c505c0679e39effdd9608e319112591d5ae4c079` / tree `18dd8ed798aae509baa7d0d51ab8e31d7ac2dbbd`.
Recovery merge `70dea712adaaf0495b3921a425c6b425fb5d4914` / tree `c74edbdb1cd46c587a302a165a954741377a18c1`, preserving both accepted authority histories.
Backend P0 `24c781f292fa80278d35056826db0903aff198e6` / `df877db35f35c33e86a87c24e13431a65f5bc298`; P1 `5f3894880194a4a8c4af6958c071481d180ce6ec` / `4d057eacf12e8919b836c0ac3e74a038079d5843`; P2 `4baa9768fb01845aa4a907b82b54d46101559487` / `1ab92e21c3e7167f18b8b66efeec1cf4cdc9d219`.
Frontend P3 `e6e7ae8ea9f5f98f882f52230e4cae163bda1e89` / tree `c77fd43a13251f3c0ba6733f5070fe49412bba1e`; exact original frontend ancestry, clean status and independent fetched equality PASS.
Authority P0 `5aa43e619fe9a2d09ea5360429931b107ea796e9` / `8513c31b4086f81a8d7d13fd88d5406f11e1c868`; P1 `7ae6dc70587821d30d4be422d90bf0cb1e9197ce` / `dcce61e8489ea92b0993c9af0d57e0320610e0c0`; P2 `6a0cbe24debe88e284c1a9a3c2b84998905234ad` / `2ee2d09c541194e3a641fe4882d885ca163d848a`; P3 `b464c102670f7f4de27d03ff6afc6a2134c6e53e` / `3e8fb4ddbc7bc92333719d353431fb27baaf92a0`. All normal non-force publication/fetch-back equality verified before autonomous progression. The containing final authority SHA/tree is returned in the immutable runner report rather than self-referenced.

## Mandatory gate matrix

| Gate                                            | Result                              | Exact evidence                                                                                                                                                                                                                                                                                        |
| ----------------------------------------------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Authority/standards/predecessors                | PASS                                | Exact original prompt/register/Amendment1/2/Recovery1/2 blobs; AGENTS and applicable engineering/Aurora standards reconciled; single ledger and predecessor chain preserved                                                                                                                           |
| Immutable install                               | PASS                                | Repository npm ci; Node24.19.0/npm11.17.0; no package/lock changes or system software installs                                                                                                                                                                                                        |
| Separate canonical models/APIs/audits           | PASS                                | P1/P2 actual PostgreSQL and compiled JWT/session HTTP; independent aggregate revisions, immutable actor snapshots, CAS/idempotency and internal purge                                                                                                                                                 |
| Final fresh PostgreSQL17 migrations/status      | PASS                                | Fresh c05_creator_commercial_p4_clean, all104 applied/current; 19/19 WP13+RateCard6 actual DB/API tests                                                                                                                                                                                               |
| Populated102→103→104 upgrade                    | PASS                                | P1: all195 original table counts/sorted row digests exact after103 and first WP write; P2: all197 tables incl WP exact after104; ordered same disposable route, no reset; accepted Brand8/Content7/Audience6 validated on102 before upgrade                                                           |
| Final populated ownership/current/purge         | PASS                                | commercial-integrated.postgres.test.ts 1/1 PASS, rerun final after shared matrix; all195 external table counts/sorted digests exact through WP edit, RC creation, same-currency rebind and target purge; populated Campaign/Collaboration/CreatorBrand nonempty and preserved; other Creator WP exact |
| Authorization/isolation/negative API            | PASS                                | Owner/Manager edits, Assistant read-only/PUT403, anonymous401, inactive403, stale409, malformed/injected identities400, exact Owner/workspace selection, other Creator preserved; one concurrent CAS winner                                                                                           |
| Country/fingerprint/reset                       | PASS                                | AVAILABLE/ABSENT/CONFLICT, exact current bank/latest destination/legal fence, readiness-independent; no KYC producer; mismatched GET hides money/no writes; same-currency retain, manual unconfirmed cross reject/confirmed clear, bank reconcile-first semantics                                     |
| Frontend changed surfaces/full regression       | PASS                                | 37 focused tests / seven files; final full1347 passed / one unchanged environment-gated skip,168 passed files / one skipped; current fetched P3 source unchanged afterward                                                                                                                            |
| Production authenticated browser                | PASS                                | P3 mutation matrix28 pages plus final read-only matrix28 pages; 390/767/768/1440, Owner/Manager/Assistant + four bank states; real password/session/JWT, no bypass/source prerequisite                                                                                                                |
| Browser errors/focus                            | PASS                                | Additional real-browser injected409: draft preserved, explicit review/retry fence, visible error focus, canonical rows unchanged, uncaught page errors0                                                                                                                                               |
| Keyboard/responsive/Axe                         | PASS                                | Every28-case matrix: overflow0, serious0, critical0, lesser0, console0/pageerror0; visible section focus, mobile drawer Escape focus return, one H1/ordered headings, labels/reference/supremacy copy                                                                                                 |
| Focused shared PostgreSQL regressions           | PASS                                | Final unchanged serialized50/50 / seven files: Content7,Audience6,CreatorBrand8,Brand execution12,Brand Intelligence9,Team5,owner scope3                                                                                                                                                              |
| Frozen Brand contracts                          | PASS                                | Exact pinned-source verify bbb0be3345c36e9cc7c4f06ca68fb491b742b83f; no frozen bundle mutation                                                                                                                                                                                                        |
| Prisma/build/lint/format/diff                   | PASS                                | Final generate/validate, serialized production build; changed scoped ESLint/Prettier and diff/staged integrity; frontend typecheck/build                                                                                                                                                              |
| Runtime health                                  | PASS                                | Production backend loopback6062, /health/live200 statusok; /health200 databaseup; no provider call                                                                                                                                                                                                    |
| Dependency/Docker/external ownership identity   | PASS                                | Package/lock/Docker byte-identical; original102 migration files unchanged; C04/Campaign/Collaboration/payout production unchanged                                                                                                                                                                     |
| Secret/forbidden artifacts                      | PASS                                | Scoped source/diffs/commits/planned-push and evidence scan: no secret/privatekey/token/signed locator/raw media/state/log/config/runtime artifact tracked; no values in report                                                                                                                        |
| Normal publication/fetch-back                   | PASS                                | Backend/frontend/authority normal pushes, independent fetch/prune, exact local/remote SHA+tree, predecessor ancestry and clean statuses; final exact values in runner report                                                                                                                          |
| Runtime/task-only cleanup                       | PASS / authorized hygiene exception | Task backend/frontend/browser stopped; only labeled unique tmpfs PostgreSQL container removed; ignored synthetic config removed, developer services untouched; policy-blocked unused regular untracked secret-free task build directories retained under explicit prompt exception                    |
| Live Graph/model/Meta mutations                 | NOT RUN / NONE                      | Provider-neutral acceptance, no scopes/OAuth/provider validation expansion                                                                                                                                                                                                                            |
| Development merge/deployment/later capabilities | NOT PERFORMED / NOT STARTED         | No AudienceV1/Portfolio/MediaKit/quotes/Campaign/Collaboration/CreatorContentV1 work                                                                                                                                                                                                                  |

## Commands and verification ordering

All commands use repository configuration; synthetic ignored values are never included. Backend: npm ci; npm run prisma:generate; npx prisma validate; npm run build with process-only NODE_OPTIONS=--max-old-space-size=4096; scoped npx eslint/prettier; git diff --check and --cached --check.
Migration/status: repository npm run db:migrate:deploy / equivalent Prisma migrate deploy, then npx prisma migrate status. Disposable PostgreSQL17.11 image postgres17-alpine, task loopback55512, tmpfs data/no durable volume, only existing plpgsql1.0 extension required.
Commercial DB guards CREATOR_WORK_PREFERENCES_DATABASE_TEST/CREATOR_RATE_CARD_DATABASE_TEST enable the focused actual DB/API files on fresh final104 route; no unrelated database. Populated upgrade guards CREATOR_WORK_PREFERENCES_UPGRADE_TEST then CREATOR_RATE_CARD_UPGRADE_TEST use accepted archived schema/content and the same upgraded task route. Final CREATOR_COMMERCIAL_INTEGRATED_DATABASE_TEST uses exact c05_creator_brand_upgrade_shared and existing non-secret canonical Owner context.
Shared seven-file Vitest matrix uses repository config, --fileParallelism false and explicit CREATOR_CONTENT_DATABASE_TEST, CREATOR_AUDIENCE_P2_DATABASE_TEST, CREATOR_BRAND_P1_DATABASE_TEST, BRAND_INTELLIGENCE_EXECUTION_DATABASE_TEST, BRAND_INTELLIGENCE_DATABASE_TEST, C05_TEAM_DATABASE_TEST, CREATOR_AUDIENCE_P1_DATABASE_TEST. Content/Audience localhost guard honored on same loopback disposable database.
Frozen verify: npm run intelligence:contracts:verify -- --source C:/Users/piyus/Documents/Codex/a3src-bbb0be3 --commit bbb0be3345c36e9cc7c4f06ca68fb491b742b83f.
Frontend: process-only VITE_API_URL='' npm run test; focused repository Vitest feature directory; npm run typecheck/build; scoped ESLint/Prettier. Production preview npm run preview -- --host 127.0.0.1 --port 4182. Existing installed Edge153 via repository Playwright1.63/Axe4.13; no browser/system install.
Browser proof: CREATOR_COMMERCIAL_BROWSER_PROOF=true node --env-file=.env ../frontend/scripts/p3-commercial-browser-proof.mjs; final CREATOR_COMMERCIAL_BROWSER_ASSESS_ONLY=true performs read-only exact-row stability checks; additional p3-commercial-error-focus-proof.mjs exercises injected409 focus/draft/row stability. Password/JWT are in memory only; no state/screenshot/media/diagnostic output stored.

## Honest rerun / accounting disclosures

P0 original and Recovery1 stops were Parent-resolved authority circuit breakers, zero correction cycles. P0 Recovery2 and P1/P2/P3/P4 primary runs1 each; no formal correction packet/cycle used. Ordinary in-primary DTO/harness/format/source repairs are described in P1/P2/P3; no gate waived.
P3 first full suite inherited six relative-URL assertions failed under preview API configuration; process-only empty test API override restored unchanged tests. One existing a3-harness test remains environment-gated and is not a mandatory commercial gate.
P3 browser helper nonunique-selector/JWT-header fixture repairs; industry text contrast fixed with feature-scoped approved Aurora token, and failure-focus moved to visible workspace alert. Owner390 monetary flow already completed before first Axe failure; retained completed task fixture, not reseeded/reset. Final passing mutation evidence includes prior390 calls plus full remaining widths, followed by independent read-only full matrix and injected-error focus proof.
P4 initial migration invocation raced the task database CREATE completion; fresh route was then deployed cleanly with all104/current/19 tests. Initial shared Content2 exceeded unchanged five-second transactions under concurrent host load; final complete serial50/50 passes with no timeout change. Windows Prisma generation twice encountered locked query-engine DLL from runtime/test consumers; rerun after all consumers stopped, then validate/build passed. No system reconfiguration, schema workaround or gate weakening.
Inherited npm audits: backend52 (4low/24moderate/23high/1critical), frontend15 (6moderate/8high/1critical). Existing frontend large-chunk and test SSR/Router warnings retained; no incidental dependency upgrade.

## Separate conclusions and scope

WORK_PREFERENCES_V2_EVIDENCE_READY=YES; RATE_CARD_V2_EVIDENCE_READY=YES; COMBINED_COMMERCIAL_SETUP_EVIDENCE_READY=YES. P0–P3 accepted only for explicitly granted autonomous progression; P4 evidence ready for final review. AudienceV1/Portfolio/MediaKit NOT_STARTED; live Graph/model calls/Meta mutations NONE; development merge/deployment NOT_PERFORMED.

Final backend test-only publication/fetch-back exact: `3504a3cc8f0dc684431b73046f5796f157708f68`, tree `de4b3ba41d3c6d96645f115a5d780660991a27c3`, parent P2; clean. Final production `/health/live`200 `{"status":"ok"}` and `/health`200 `{"status":"ok","info":{"database":{"status":"up"}},"error":{},"details":{"database":{"status":"up"}}}`. Services then stopped, uniquely labeled tmpfs container removed, no durable volume, synthetic `.env` removed; developer PostgreSQL127.0.0.1:5432 untouched.

Runner policy blocked the bounded recursive removal command before execution. Retained backend/dist and frontend/dist are regular, inside exact task root, untracked/ignored, secret-scan clean and unused; this is the original prompt's explicitly permitted non-blocking hygiene exception. The non-secret106-file accepted102 Prisma source archive is outside repositories and unused; ignored repository dependencies and duplicate temporary Prisma DLL files remain local/untracked, not publication contents. No cleanup security control was bypassed or alternate destructive command attempted. Immutable code/evidence preserved; only ephemeral synthetic database/configuration was removed.

## P0 exact changed-file inventory

- src/features/creator-commercial-setup/contracts/commercial-common.contract.ts
- src/features/creator-commercial-setup/contracts/commercial-consumer.contract.ts
- src/features/creator-commercial-setup/contracts/commercial-contract.test.ts
- src/features/creator-commercial-setup/contracts/commercial-country.projection.test.ts
- src/features/creator-commercial-setup/contracts/commercial-country.projection.ts
- src/features/creator-commercial-setup/contracts/rate-card-country-transition.contract.test.ts
- src/features/creator-commercial-setup/contracts/rate-card-country-transition.contract.ts
- src/features/creator-commercial-setup/contracts/rate-card.contract.ts
- src/features/creator-commercial-setup/contracts/work-preferences.contract.ts
- src/features/creator-settings/payouts/creator-payout-country-authority.contract.test.ts
- src/features/creator-settings/payouts/creator-payout-country-authority.contract.ts
- src/features/creator-settings/payouts/creator-payout-country-authority.port.ts
- src/features/creator-settings/team/creator-team.policy.test.ts
- src/features/creator-settings/team/creator-team.policy.ts
- src/features/creator-settings/team/creator-workspace-actor.service.test.ts
- src/shared/creator/creator-workspace-actor.contract.ts
- src/shared/geography/country-authority-fingerprint.ts

## P1 exact changed-file inventory

- docs/database/creator-work-preferences-v0-migration-review.md
- prisma/migrations/20260915200000_creator_work_preferences_canonical_revision/migration.sql
- prisma/schema.prisma
- src/app.module.ts
- src/features/creator-brand/creator-brand-p1.postgres.test.ts
- src/features/creator-commercial-setup/work-preferences/work-preferences-rate-card.port.ts
- src/features/creator-commercial-setup/work-preferences/work-preferences-upgrade.postgres.test.ts
- src/features/creator-commercial-setup/work-preferences/work-preferences.controller.ts
- src/features/creator-commercial-setup/work-preferences/work-preferences.module.ts
- src/features/creator-commercial-setup/work-preferences/work-preferences.openapi.test.ts
- src/features/creator-commercial-setup/work-preferences/work-preferences.openapi.ts
- src/features/creator-commercial-setup/work-preferences/work-preferences.postgres.test.ts
- src/features/creator-commercial-setup/work-preferences/work-preferences.repository.ts
- src/features/creator-commercial-setup/work-preferences/work-preferences.service.test.ts
- src/features/creator-commercial-setup/work-preferences/work-preferences.service.ts
- src/features/creator-settings/creator-operational-read.module.ts
- src/features/creator-settings/payouts/creator-payout-country-authority.contract.ts
- src/features/creator-settings/payouts/prisma-creator-payout-country-authority.adapter.ts
- src/features/creator-settings/services/creator-shipping-readiness.adapter.test.ts
- src/features/creator-settings/services/creator-shipping-readiness.adapter.ts

## P2 exact changed-file inventory

- docs/database/creator-rate-card-v0-migration-review.md
- prisma/migrations/20260915210000_creator_rate_card_canonical_revision/migration.sql
- prisma/schema.prisma
- src/app.module.ts
- src/features/creator-commercial-setup/rate-card/rate-card-upgrade.postgres.test.ts
- src/features/creator-commercial-setup/rate-card/rate-card.controller.ts
- src/features/creator-commercial-setup/rate-card/rate-card.module.ts
- src/features/creator-commercial-setup/rate-card/rate-card.openapi.test.ts
- src/features/creator-commercial-setup/rate-card/rate-card.openapi.ts
- src/features/creator-commercial-setup/rate-card/rate-card.persistence.module.ts
- src/features/creator-commercial-setup/rate-card/rate-card.persistence.ts
- src/features/creator-commercial-setup/rate-card/rate-card.postgres.test.ts
- src/features/creator-commercial-setup/rate-card/rate-card.service.ts
- src/features/creator-commercial-setup/rate-card/rate-card.validation.test.ts
- src/features/creator-commercial-setup/work-preferences/work-preferences.module.ts
- src/features/creator-commercial-setup/work-preferences/work-preferences.postgres.test.ts

## P3 exact changed-file inventory

- docs/creator-commercial-setup-v0.md
- scripts/p3-commercial-browser-fixtures.ts
- scripts/p3-commercial-browser-proof.mjs
- scripts/p3-commercial-db-proof.mjs
- scripts/p3-commercial-error-focus-proof.mjs
- src/features/auth/constants.ts
- src/features/creator-commercial-setup/api/commercial-client.test.ts
- src/features/creator-commercial-setup/api/commercial-client.ts
- src/features/creator-commercial-setup/commercial-setup.css
- src/features/creator-commercial-setup/components/commercial-forms.test.tsx
- src/features/creator-commercial-setup/components/commercial-route-guard.test.tsx
- src/features/creator-commercial-setup/components/commercial-route-guard.tsx
- src/features/creator-commercial-setup/components/commercial-workspace.test.tsx
- src/features/creator-commercial-setup/components/commercial-workspace.tsx
- src/features/creator-commercial-setup/components/rate-card-form.tsx
- src/features/creator-commercial-setup/components/work-preferences-form.tsx
- src/features/creator-commercial-setup/contracts/commercial-navigation.test.ts
- src/features/creator-commercial-setup/contracts/commercial.schema.test.ts
- src/features/creator-commercial-setup/contracts/commercial.schema.ts
- src/features/creator-commercial-setup/contracts/rate-card.presentation.ts
- src/features/creator-commercial-setup/hooks/use-commercial-setup.test.tsx
- src/features/creator-commercial-setup/hooks/use-commercial-setup.ts
- src/features/creator-commercial-setup/testing/commercial.fixture.ts
- src/layouts/app-shell/sidebar-items.ts
- src/pages/creator/commercial-setup/creator-commercial-setup-page.tsx
- src/routes/app-routes.tsx
- src/shared/creator/creator-workspace-actor.contract.ts

## P4 exact locally added backend file

- src/features/creator-commercial-setup/commercial-integrated.postgres.test.ts (222 insertions; tests only, no production/schema/dependency change)

## Final authority closeout inventory

- EXECUTION_LEDGER.md
- P3_COMMERCIAL_SETUP_FRONTEND.md (P3 publication)
- P4_INTEGRATED_ACCEPTANCE_AND_CLOSEOUT.md
- CREATOR_COMMERCIAL_SETUP_AND_RATE_CARD_V0_DEVELOPER_HANDOFF.md
- CREATOR_COMMERCIAL_SETUP_AND_RATE_CARD_V0_FINAL_ACCEPTANCE_AND_PRODUCT_LEARNING_HANDOFF_V1.md

Earlier P0/P1/P2 artifacts and immutable runner-prompt archives remain in their published history; one canonical ledger/program. P1 artifact renamed normally to required canonical filename in P2, preserving history.

## Ordered final migration inventory / exact Git-LF SHA256

| Ordinal | Migration                                                                 | SHA256                                                             |
| ------: | ------------------------------------------------------------------------- | ------------------------------------------------------------------ |
|       1 | 20260514180000_init_discovery_and_users                                   | `6d56eb71d04b9df1e2760e2dad4f0642516fdf8678eb8e29a226a5e9a9ec20d8` |
|       2 | 20260514180100_brand_profiles_and_lifecycle                               | `8859d8a7e21429d42c8e2b6c57985827ba11f572f13912cdcfa4933086bcf769` |
|       3 | 20260515060635                                                            | `c56ab839e643ba38645728770a8d3b362423d6967a553a4d3f4b84a740f0b5b1` |
|       4 | 20260515120000_product_surface_scan_alignment                             | `1233695f9255e89c435e9996d217ba95e9857c0024ca481ae03c6f42b507d453` |
|       5 | 20260525091845_add_user_auth_fields                                       | `2b271acf0f76206ca4ef5154f4a0276ade57ba0e666649c841ae061aef77a795` |
|       6 | 20260525093955_remove_user_hashed_password                                | `c3003373788c151976c3ed9f7e1953846430f55ee90fa43f0fe390aae13e2663` |
|       7 | 20260525112347_add_surface_scan_attempts                                  | `b682345ee968089ed9171d5ae3ee7d8899d4688555e1e171a8ba2189cf3d3d78` |
|       8 | 20260527114736_brand_centre_tab1_tab3                                     | `debeb3e775672c97c202aa88e8e73243e2fef55e86feedafc35591bbf9c964a8` |
|       9 | 20260527120000_brand_centre_foundation                                    | `9a54a3ca834732adf3689321e25e2732d18f9708e361dd476f4bdc250ca9ce81` |
|      10 | 20260527140000_brand_centre_tab1_tab3                                     | `54e2af809ae4e2a4826038af1e2e602fe8901cb6cb5e7384b8d09c2dab883def` |
|      11 | 20260527180000_brand_profile_plan_started_at                              | `ff46d90535333ea8bae37665eb395f6cc3b4406e65dbde8c98149c744263172e` |
|      12 | 20260527200000_brand_profile_surface_scrape_and_activity                  | `86543fb6576547684bf4e3eba51770dbea62f86c4194ad1070a42d7b8e39e879` |
|      13 | 20260601120000_uce_universal_campaign_engine                              | `ca14e55057f1c27b71ed9d3249258b492d1b22c80ad81d5aab6ecfd539cb6e50` |
|      14 | 20260602133000_brand_centre_uce_bridge                                    | `028a7f1c18415d3e9c3435a78bf81c51ef11129ec6b53756d22741d5934ca370` |
|      15 | 20260604120000_collaboration_module                                       | `6bd0c07bd8fa846aa1b7a6aeef1847b8fcbb95d976a15918702811016a6ebe26` |
|      16 | 20260608120000_brand_escrow_module                                        | `86a70a1d593271883df7011c3581e7d90f7345d11f6fdb45ed4d54fb4e4cd31d` |
|      17 | 20260608140000_pricing_module                                             | `6be951c7b1cbfe55efba3f143a97f2385911db9d34e90bf04dd1bdb6b08d82c1` |
|      18 | 20260608160000_pricing_billing_invoices                                   | `3ca360da58deb93b4478e36c899b06acdc33028fabcfa30578c35ef0a4268fbd` |
|      19 | 20260611130000_co_pilot_module                                            | `65a0bda606aefba0ddb6e55ade2d8325ab1835c11da4dbdf0b8a1181fde31faa` |
|      20 | 20260611140000_co_pilot_feedback                                          | `c8ed1c61231001a962696800ac115837ff04d31e56b823867581d67414a9c959` |
|      21 | 20260624120000_creator_marketplace                                        | `5370713d8d78160b41bae51c58f204cb2c7ccd735da79ddf7b265fb6c7b2d063` |
|      22 | 20260624130000_post_marketplace_schema_align                              | `acda2ff16790a1aee1e91d57f325fc4dc503fc7890946456ef13f11855f313e7` |
|      23 | 20260624140000_payouts_hub_alignment                                      | `adfad307fa97625aee6f5e6870d5e548701cda4e1ea70760198c0cb417ee6207` |
|      24 | 20260628120000_settings_module                                            | `a15f61460ee3350f7cdac0daa6dc0212b00933afd444b0ab0800c9f719a3f1d9` |
|      25 | 20260629120000_notifications_module                                       | `02e3961c005b2007935ca35751b5ca09d2a2e0bfd50ff3027514e674c4b929cf` |
|      26 | 20260703120000_creator_onboarding_and_centre                              | `53c4ebf8a17b936e2798fd51cfcd991a3872a9cb738c7d7f86c98453655f4f3a` |
|      27 | 20260703140000_creator_deferred_features                                  | `8b93eeae57f624cceab127c89cd886345f9532e5e1e5fc4d193d59b9b5ab07ce` |
|      28 | 20260704120000_command_center_phase_alignment                             | `043bd1b0cbfef6fda1db5355cb77493c7b7a8987951fa748ed07ca68067b6266` |
|      29 | 20260710120000_discovery_leads_step1_cache                                | `1f173cb82552f243c5a7730c7f5e1fd7cb4308210675e0ce8cc2890541588de6` |
|      30 | 20260715120000_brand_intelligence_scans                                   | `40d455bb3f1cb2b84698b7541036938e2a2949fd4c464a1c41767a7638ccc5aa` |
|      31 | 20260716110000_brand_intelligence_jobs_waitlist_reason                    | `858924764b7ea4824dc910c38f9fba596e47ebbe6f5e24204fe2d26d73244d35` |
|      32 | 20260724120000_stage_1a_failed_fallback                                   | `d61c8356172e41f9d2805f8b151cbff42273d9af952b28713a8a04d963259686` |
|      33 | 20260725140000_uce_add_asset_brief_wizard                                 | `de57c15d3c3fd27d7c61b6a5660779c696bba1842400f77884160341c483729e` |
|      34 | 20260727120000_uce_campaign_status_archived                               | `9d06baacb97838ae1771e53203bcd2ddf238850959b2cf190fd6d4d6c769723f` |
|      35 | 20260728100000_co_pilot_validation_checklist_format                       | `c05c2723843c5e2bdcfc1f328834f3cb0bb7931fc716838c14e22bc39d707bbb` |
|      36 | 20260805090000_brand_password_and_integrations                            | `f7f3aa96205b01fd45e3b372b9d2a07195661d87f6f9560e35d7d32357358475` |
|      37 | 20260810120000_uce_campaign_status_published_live                         | `127600a2bfe9a644429ae498eac77a95f4571b52669cfd625de030c7c371f666` |
|      38 | 20260810120100_uce_campaign_status_drop_active                            | `96c7aa16273e298165fcf6f7747eece158e305cc73f29fc27e780df594c7f391` |
|      39 | 20260811120000_uce_application_and_share                                  | `9c180f66e00c02afb982a457c868fa2ca68a71980ca1f3c98aa8138428c1cf38` |
|      40 | 20260811130000_collaboration_phase_1_foundation                           | `da66772529e3c28606481edfadc05c5e9641e40a50b46ebcf979e1fd4c5ddde4` |
|      41 | 20260811140000_collaboration_phase_3_commercial_commands                  | `d260e5090ac67b7a249c8aeb938c10e3b91f63c228d961eee4735935d14a96ca` |
|      42 | 20260811150000_collaboration_phase_3_1_financial_boundary                 | `21a07e56548273134958f7a4f88d67f18a66a6e06182b3f1b839b93cff541b25` |
|      43 | 20260811160000_collaboration_phase_4_1_fulfillment                        | `bf2c9a4a5b93962e687b286b40a3475ab637e56ab9e3908f0b81f5812c6ff187` |
|      44 | 20260811170000_collaboration_phase_4_2_production                         | `fafde09784bd043a00860c47560920c4f5863cbdc51205761bf18a506ca5d3a6` |
|      45 | 20260811180100_collaboration_phase_4_4_publishing                         | `74049204ccbaf97c9b47c6065ad44fd3eb3d73122dd68e152d76b61fd086a9be` |
|      46 | 20260811190000_collaboration_phase_4_6_settlement                         | `9b0534c1c96108a65fb0f50f9803562224b4e359eb56eb6229aace4440ff3dcd` |
|      47 | 20260812170000_uce_campaign_canonical_definition                          | `9ac0b53f70d5c19a5db5df07585d3c16ffe5e5288245f38a2b12ed1a1c8e9f19` |
|      48 | 20260812190000_collaboration_phase_4_7_feedback                           | `243a95e618dc1120d5807fc5074ba31a1919c5c53d3b76ae13c69d2b27e54493` |
|      49 | 20260815000100_add_canonical_campaign_assets                              | `a2130b8c24ce2fdab2fa055418a6ddebee860279f432d133ad9e4b145556755d` |
|      50 | 20260815000200_add_canonical_campaign_briefs                              | `096d4f491a6f7f4663d29aca30fd585641bfe510673aff58411733ff3bfb5b18` |
|      51 | 20260820120000_gatekeeper_submission_audit                                | `a00e334d5f5c77d6a89f8349fd7897c338f9085c11b07561e457a9b4f94e6b05` |
|      52 | 20260821120000_gatekeeper_recovery_requests                               | `1b804a47219a1efad453432dc47fedcaeb5cfc524e7b934896387e65ed8a7bb9` |
|      53 | 20260822120000_brand_preview_runtime                                      | `29f563593d6a36988634b016690329b1bc59cbfb5aee479abeb005d48e6a60bf` |
|      54 | 20260825120000_brand_intelligence_w1_0a_persistence                       | `2cd7d838ce0613415b311cc2e3a9b08a11af420425ddf8be92a017e49eede7d2` |
|      55 | 20260825181500_add_data_extraction_wave1_evidence_persistence             | `b4230472c0b2e224615e9ed94241309206a3786a779abdd73a9e6241ebd84558` |
|      56 | 20260826140000_brand_centre_canonical_state                               | `ce7f4eeba5a2c410959d86100a1d66febd85d06a1dc31b63021319c4693d620b` |
|      57 | 20260826180000_data_extraction_wave2_supported_capabilities               | `d87f3f98cb640fef24c5daa7170347d7ba1bfe6f69208b989e78b46584307b3f` |
|      58 | 20260826190000_brand_instagram_oauth_state                                | `e03f98f5e371c7dca9d828bc9b71c03065b24ceb9f388b10477c293747d97678` |
|      59 | 20260827223000_product_intelligence_v1_canonical_offering_foundation      | `7dfac2925c01ac42c6cc68d786eb80407d00b95db41652a5816235df7b67af5b` |
|      60 | 20260827234500_product_intelligence_v1_generic_intelligence_subject_scope | `20bdb166c86a1a3680c3a5ba391005f02c1b2240bd6ff17e38dcdccf54731e0b` |
|      61 | 20260828120000_data_extraction_offering_commercial_evidence               | `9753e03ad1d4a75f70a4885e1697aaab25b490fd7fb51df2b930e23bfef3d22f` |
|      62 | 20260828121000_bs03_billing_profile                                       | `39967b317ef81ef4e600485dab0f310a333cf17caa436589b14224647f1727f2` |
|      63 | 20260828122000_bs08_subscription_lifecycle_foundation                     | `ad8086313c6e4ec08d2318c5ee13cc842cd48fe2017b035570f94584898ee3c1` |
|      64 | 20260829120000_bs03_billing_identity_history                              | `95287e719a8c31de76cab3b8b99f84327b576b3d8538138d6b487c3681f9935c` |
|      65 | 20260830120000_bs08_p2c1_cancellation_provider_safety                     | `2b1a4e588a74718b56dc0007034840cf7b6133fb8a5df8f1a2a567ff9ab4d1f4` |
|      66 | 20260831120000_bs09_p1_brand_escrow_funding_foundation                    | `15ee5c6c1158249fbcf1b77cea75ef40bcb161800729ee6c24ea9bc98b6a9078` |
|      67 | 20260901120000_bs05_notification_engine_reconciliation                    | `ad882fa5b92de23ad8db790a71e6680a3f4ccf6e297eb3b84a49f0e12e8c0250` |
|      68 | 20260901130000_bs05_p1c1_snapshot_fencing                                 | `05e223eccd638661ba1f27164622cf47edecac3c9023360aa3ff759add25d553` |
|      69 | 20260902120000_bs06_instagram_reconciliation                              | `f8fd30a43bd9fdfc152e20aa64a7aaf0fa620eddfb24038072340e8273cc0412` |
|      70 | 20260903120000_bs06_invalidate_legacy_oauth_states                        | `c0468861b3645a1874e3ff3fd7762d28a6947beaf75c390d21541cdf53774376` |
|      71 | 20260904120000_bs09_p3c2_route_payout_rebuild                             | `6110b051ed21302ce5192db2830f7fa8d9d41ff0752c3111074838321b6f9cb0` |
|      72 | 20260905120000_bs09_p3c2c1_financial_boundary                             | `79a63517e201d3c9ecde439da0214fe1c1f2225bea7d1034ecf174c08018b70c` |
|      73 | 20260906120000_bs04_brand_return                                          | `da5e4dacce2847778d01ebd0201a83810d15ffdcef97c3397f59ac29216e6ae0` |
|      74 | 20260907120000_bs12_auth_security                                         | `b0852bc5386efb1ed3bac872a2bdc8b1421699b2477459f99291d818f39e9379` |
|      75 | 20260908120000_c01_i1_organization_workspace_foundation                   | `fac5b405c60f5acae3ac361b39dee6958feb4decf5125d8960a9f8f12d2f706c` |
|      76 | 20260908121000_c01_i1_provider_oauth_transaction                          | `af01c6d184c6da5723be19e3fdc632201468f98d44eed867afbba081ead5ebdc` |
|      77 | 20260908122000_c01_i1_creator_provider_health                             | `41701e24c1a826d6b5a00c1b0cc2038009220a58d821e603edc792c720417b85` |
|      78 | 20260908123000_c01_i1_campaign_continuation                               | `8055fcd7895629685d551cf653704360be52abd1cadbad60dfe6a59756b1bb0a` |
|      79 | 20260909120000_c05_p0_team_user_identity                                  | `993671e14a04105778dc93d384a673ad84959f59c4e724d4acde696947eee39a` |
|      80 | 20260909121000_c05_p0_contact_phone                                       | `5ba37923af23d8c0a04a85f3305cb20d3b5d0a47f8e49628b31f8fa94daeafa0` |
|      81 | 20260909122000_c05_p0_legal_profile                                       | `d199bdf72f3daecd9194a5d37a47671bd228ad5d569c7d33c41d8ed1b4aa60fd` |
|      82 | 20260909123000_c05_p0_payout_destination                                  | `b009f54c4ef5398a49e0e2e7774be3eb9d6a5bdac9546e265a67f7fcb40c84dc` |
|      83 | 20260910120000_c03_campaign_asset_brief_convergence                       | `cb9338a91ee36042fb8b6d1ebb063955e6e51f3ff39549667a20026d2aaf03bf` |
|      84 | 20260910120500_c03_application_snapshot_foundation                        | `2bdba21e6c625aff5c2c8dccca2b23bcf9f4df5adb21a9a23525024123aafdf2` |
|      85 | 20260910121000_c03_invitation_ingress_idempotency_events                  | `728ddc96ebd81284efabacafc3ff0f0bfc3260bb2c1f8ad47abb7fa30bd2cbf2` |
|      86 | 20260910121500_c03_integrity_guards_and_legacy_compatibility              | `fa2265935e0878ac45e533cb6ac87079ad12b665fafcc53c250a63a513fb83b5` |
|      87 | 20260910122000_c03_application_handoff_notifications                      | `219886d27bb8c76e0ec89cb787edc1547350acb074106b92975fc51cc4272fff` |
|      88 | 20260911020000_instagram_de_persistence_foundation                        | `d02b75e50f883150c9d14908c82ef10d9b0de4c2b464168567634dd0157009e4` |
|      89 | 20260911120000_c04_shared_collaboration_convergence                       | `ef55e52f4132d23796921fd908e3950788b17f0e9512ac64b45b4dd86d4a1ddb` |
|      90 | 20260911121000_c04_creator_subject_proposal_destination                   | `a084a75a2855ba6008215e3fe20509cf4b50aa93ad70be7926bc5d6295531a19` |
|      91 | 20260911122000_c04_integrity_compatibility_async                          | `5ee3275e93e94fb80e397a885c7ff84478549599f44118e3ea179a54652effbb` |
|      92 | 20260911123000_c04_bp_g05_extend_exact_payout_terms                       | `be14cc7e85e2e6aa73427f03168134f0e81dd93332d04c1e5fe9765afa3a330a` |
|      93 | 20260911124000_c04_bp_g05_reconcile_exact_payout_terms                    | `93929de0b70c42d27747b460c786b8a2a511ecc920902ffba58b817eac2f9e87` |
|      94 | 20260911125000_c04_brand_payouts_reserve_entitlement_lineage              | `6e384abdaf7cf9fa35973ca31e1a5cb541f60bd328937ff3d27844b9dfdb4d72` |
|      95 | 20260912090000_c3_r0_evidence_model_derivation_provenance                 | `12b5a234d322235199dc8ad1173fc4835517ed0a3ed5a6ff910aa48165f118a8` |
|      96 | 20260912100000_brand_payouts_wave_b_normal_path                           | `887e5bb6bd262a4dd02e42a798db55bd136d97bf6a923df7e6466573f11d1f84` |
|      97 | 20260912170000_instagram_c1_sync_coordinator                              | `3a282067c79560d5701611071457f1825f3e0b21dd1238253318f4945abbdf80` |
|      98 | 20260914010000_instagram_w4_audio_observations                            | `81c39fa7f3fae9d04db8ae14a3f4a6d324c6272ced614b10b5b80e558effc9a2` |
|      99 | 20260914185000_creator_audience_subject_enum                              | `0218c964495159facdcd040ffe34e92c6cd32ab445c00af34cbb43c328483499` |
|     100 | 20260914190000_creator_audience_shared_owner_scope                        | `faaa58e9afaae9021bafc64930f2c80412d90aa79d46af3ae09629b4bf9aa5cf` |
|     101 | 20260914191000_creator_audience_owner_scope_lineage                       | `723287fb4d80345b2e89c687feccbadd146f0f709948c382de2a28346afb70d8` |
|     102 | 20260915100000_creator_brand_canonical_profile_revision                   | `ec6484427c24d5755549ff9e71bae989f5ff592a6fc5da953ca07494b8744452` |
|     103 | 20260915200000_creator_work_preferences_canonical_revision                | `49627b44e53a43a792afb82a7d160f6f8b27c0e94771079904d8e1da7de07b62` |
|     104 | 20260915210000_creator_rate_card_canonical_revision                       | `e14e9bfcb8c61b521da74a484794a91877ca04d42d72beb87a4ab0e81dd7d0cf` |
