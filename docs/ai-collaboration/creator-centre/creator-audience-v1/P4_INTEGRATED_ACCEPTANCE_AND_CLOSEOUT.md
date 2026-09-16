# Creator Audience V1 — P4 integrated acceptance and closeout

P4_EVIDENCE_READY = YES. Final Creator Audience V1 technical acceptance is NOT self-declared; Technical SA / Program Orchestrator review remains required.

## Exact authority

Product commit 27140fdf6cf522419146c3e7a147169b36a33e5e / blob b32f800dc976ca55a75d417ff9db7b807bf50ea6 governs all packets. Creator Brand is excluded as both Evidence and context. One Audience V1 execution ledger and one predecessor chain are preserved. P0–P3 packet gates accepted under the explicitly authorized autonomous workflow; Portfolio / Media Kit not started.

## Fresh PostgreSQL and actual vertical slice

Task container codex-creator-audience-v1-p4-20260916: cached postgres:17-alpine, PostgreSQL 17.11 x86_64 Alpine, loopback 55471, tmpfs data, no durable volume. All 104 accepted migrations clean-applied with npm run db:migrate:deploy; npx prisma migrate status CURRENT. Only plpgsql 1.0, no extra extension required. Task-only donor database c05_creator_brand_upgrade_shared also clean-applied all 104 and current; existing donor guards/policies unchanged. P1 task container was independently identified by exact name and codex.task label before removal; unrelated developer PostgreSQL 5432 preserved.

Built AppModule with real auth guards, ValidationPipe, shared contracts, worker, finalization, transition/CAS and readonly consumer runs via scripts/creator-audience-v1-integrated-runtime.mjs --serve. Overrides are external provider/media/DNS/transport/decoder/model ports only. No pipeline/Source reader/calculator/worker/finalization/consumer/auth fake; no auth bypass or production test route.

Actual route: provider-neutral external fixtures → accepted V0 Audience and Content DE/Resource/Capture/Evidence and grounded MODEL_DERIVATION → admitted V1 deterministic execution → shared generation/components/transition/current → real password/JWT/HttpOnly-session login → real authenticated GET → production-built Vite UI.

Health live 200 {"status":"ok"}. Health 200 {"status":"ok","info":{"database":{"status":"up"}},"error":{},"details":{"database":{"status":"up"}}}.

Runtime fixture inventory before/after exact replay and authenticated readonly checks:
scopes 6; Resources 6; Captures 10; Evidence 80; Observations 8; supports 8; shared executions 18; Object generations 17; components 88; transitions 88; current rows 58. All exactly stable across replay/reads/browser proof. Auth sessions intentionally exist separately from DE/Intelligence counts.

Producer completion: V0 Audience 8; V1 Audience 8; Content 1. Existing accepted Content legacy Brand continuation creates one independently unconfigured FAILED_TERMINAL shared attempt, no canonical Brand Object/current/profile mutation in the Audience fixture. It is neither Audience input nor Audience processing state. Isolated donor compatibility tests deliberately exercise their own accepted Brand confirmation fixtures; they are not Audience inference.

Direct actual database checks: 80 Evidence rows, invalid completed-Capture/capturedAt/Resource/owner links 0; MODEL_DERIVATION 8; Observation supports 8, invalid capability/owner links 0. V1 Objects 8, all 8 reference their accepted same-owner/subject V0 source generation; one has admitted Content source. V1 exact Evidence references 256, invalid Evidence/Capture/capability/owner links 0. V1 component generation count 32; source generation identity is on Object metadata, component metadata owns exact supporting Evidence subsets.

Separate PostgreSQL baseline fixture: Resources/Captures/Evidence 1/1/8; Observations/support 0/0; executions/processors/attempts/Objects 2 each; components/transitions/current 10 each. Exact replay retains exact value/refs/generation IDs and all counts; acquisition/model work zero. Target Settings purge removes target Instagram captures/Evidence/observations/support/executions/processors/attempts/Objects/components/transitions/current to zero, preserves target website Resource 1, and keeps the second Creator's entire row vector unchanged.

## Browser, roles and state truth

Existing Edge 153.0.4234.32, repository Playwright 1.63 / Axe 4.13, no system/browser install. Production frontend built with ignored local VITE_STAGE/VITE_API_URL names; actual backend loopback33491 and frontend loopback43491 use localhost consistently for existing cookie/session contract.

40 real authenticated cases = 10 role/state fixtures × widths 390 / 767 / 768 / 1440. Owner, Manager, Assistant expose exactly one canonical Owner's Audience; inactive API 403, anonymous API 401, query subject/window overrides 400, isolated empty Creator sees no target facts.

States: READY with supported history and separate context; PARTIAL source; no source/NOT_PROCESSED; STALE plus latest provider failure/FAILED/currentPreserved; changed-partial currentPreserved; actual queued Settings PROCESSING without a Source subject; DISCONNECTED retained current; CAPABILITY_UNKNOWN unavailable. No invented processing, zero, unsupported history/chart or model-derived persona.

At every width/state: API200→strictV1 UI PASS, keyboard navigation PASS, two-cohort keyboard switching where applicable, visible focus PASS, mobile dialog/menu initial focus/Escape return where present PASS, no horizontal overflow, Axe serious/critical/lesser 0, authenticated console errors 0, uncaught page errors 0, outbound external browser traffic 0. Source-only count does not make suppressed demographics selectable. Actual screenshots visually reviewed at mobile and desktop.

The inherited Aurora remote font CSS imports are locally fulfilled with an explicit test-only empty stylesheet, using unchanged declared fallback fonts: no remote font/network send, no console-error filtering. Nine inherited font CSS requests are intercepted locally per case; this is disclosed, not reported as absent request attempts. All other external requests fail the gate. Aurora tokens/global font source unchanged.

Initial browser drafting defects: blocked inherited fonts generated console resource errors; locally fulfilled offline font fixture corrected this. A desktop final-control forward-Tab assertion incorrectly assumed browser-chrome movement was document focus loss; Shift+Tab proves return to preceding navigation instead. Final matrix rerun includes explicit all-state navigation and menu focus return. Screenshot review added one scoped Aurora tab gap token. No gate weakened / no formal correction cycle consumed.

Evidence: 40 sanitized authenticated screenshots, 40 Axe JSON files with empty violation arrays and complete browser-matrix.json, held outside repositories under task evidence/p4-browser-final. P4_INTEGRATED_EVIDENCE.json publishes exact screenshot/report SHA256 manifest and matrix; no storage state, cookie/token/credential, raw-media fixture or runtime log is published.

## Focused commands and gates

- npm ci backend (P0, 813 packages) and frontend (P3, 299 packages): immutable installs PASS, reused unchanged locks. Backend inherited audit 52 findings (4 low /24 moderate /23 high /1 critical), no unauthorized upgrade.
- npm run prisma:generate; npx prisma validate: PASS.
- npm run build backend with repository-scoped NODE_OPTIONS=--max-old-space-size=4096; npx tsc --noEmit --project tsconfig.build.json: PASS.
- npm run build frontend: PASS, inherited large-bundle advisory recorded.
- CREATOR_AUDIENCE_V1_DATABASE_TEST=true node -r dotenv/config node_modules/vitest/vitest.mjs run --config vitest.config.ts --maxWorkers=1 --minWorkers=1 --fileParallelism=false: 160 tests /19 files PASS (V1 PG18, consumer11, strict7, calculator12, architecture6; V0 source/fence; Content multimodal/source; shared registry/validation/execution/router; isolated Brand processor donor).
- Existing donor PG flags CREATOR_AUDIENCE_P2_DATABASE_TEST / CREATOR_CONTENT_DATABASE_TEST, process-local task donor DATABASE_URL: 13 tests /2 files PASS. P4 backend focused unique total173.
- npm run test with Audience/route/Auth/Team/Content/personal-platform guard plus Creator shell/mobile navigation/mobile-bottom-nav inventories: 150 tests /22 files PASS. Supplemental required Brand/Commercial navigation, Commercial readonly access guard, Creator shell capabilities and bottom-nav mapping regressions: 22 tests /5 files PASS. Final unique frontend focused total172 /27 files. Those shared-shell predecessor gates supplement the P3 checkpoint during P4 closeout before final evidence-ready publication. Unit VITE_API_URL is process-locally empty to preserve the test's relative-origin contract, not the production proof URL. A first drafting run inherited the local runtime URL and failed that fixture assumption; isolated rerun passes without changing auth code or assertions. Existing React Router/SSR unit warnings recorded; actual authenticated browser error counts zero.
- Scoped ESLint and Prettier on changed source/test/scripts: PASS; git diff --check PASS.
- node scripts/creator-audience-v1-publication-scan.mjs: PASS, exact task implementation/authority/evidence files scanned. Architecture persistence prohibitions and provider-neutral counters PASS.
- Actual runtime external HTTP attempts 0; live Graph/model calls/provider mutations NONE. V1 deterministic processor modelCalls 0. Accepted Content external model fixtures are local validated test ports, not live calls.

## Identity and cleanup

Backend schema blob361eded6b949f6a780f5896954cb6d4bf67af3ca, package dc1493f0405e17ba6f9c083dc232a9b8e6e6a9e5, lock9ae66e721cb30db3640c4e7e52cb940318e1b468, Dockerfile73eba9b787a41aadba9fe44c8997d667876659a4; frontend package606e7b6f4c665e19cee9b49c1d04807bac36a1d0 / locke19497a697faa9c5d7deba12f1235c16c8d3978e. All byte-identical to exact starts; migration inventory104 unchanged. No decoder/runtime/Docker/frozen Brand bundle change.

Backend/frontend servers stopped after proof; ports33491/43491 no listeners; Playwright browser/contexts closed in finally. Unique task media roots absent after terminal cleanup. P4 task tmpfs container/databases removed only after exact name/label verification; no task persistent volume exists. Unrelated PostgreSQL5432 remains running. Repositories, ignored local configuration/caches, committed evidence and sanitized external screenshot evidence preserved.

All mandatory gates PASS.

Final backend 6f000bd9364f48d338ae88cec78dcfed0f4fd522 / 374f02a8181505038fbb0c084ca33de0ad97ae46, parent P2 d99cce6f8d7730e8eff7f7cc734ba8813bf822e7. P4 two files /101 insertions; cumulative36 files /5787 insertions /620 deletions.
Final frontend36d75f4eceded7e9e35aaa280b544164d086ca05 / eb9c4471a5a7db6228b2f8c4c234834c5671d828, parent P3 d5910537b1e323e399cb5966a57910b478c08d18. P4 two files /398 insertions; cumulative11 files /1077 insertions /91 deletions. Both normal pushed/fetched, equal SHA/tree, accepted-start and packet ancestry, clean PASS.
Authority predecessor P3 010ea35050f4ec201426eeb2d02ef61afb3d3a7f /7d714189deb0b776701fab9814c77c8ef17871c4. P4 backend/frontend/authority normal publication, independent fetched SHA/tree equality, predecessor ancestry and clean statuses are recorded by final checkpoint evidence/report. The containing authority commit is resolved after publication to avoid self-referential SHA claims.

Primary runs P0/P1/P2/P3/P4 =1 each; formal correction cycles =0 each. No development merge, deployment, system reconfiguration, Portfolio or Media Kit work.
