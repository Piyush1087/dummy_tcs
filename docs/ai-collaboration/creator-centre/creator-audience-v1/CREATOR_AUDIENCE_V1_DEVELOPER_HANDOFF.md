# Creator Audience V1 — developer handoff

Status: evidence-ready for Technical SA / Program Orchestrator final review, NOT self-accepted. Product commit27140fdf6cf522419146c3e7a147169b36a33e5e / blobb32f800dc976ca55a75d417ff9db7b807bf50ea6. One canonical Audience V1 ledger; inherited Audience/Content/Brand/Commercial programs remain accepted predecessors.

## Owning checkpoints

Backend program/creator-audience-v1-backend:6f000bd9364f48d338ae88cec78dcfed0f4fd522 /374f02a8181505038fbb0c084ca33de0ad97ae46.
Frontend program/creator-audience-v1-frontend:36d75f4eceded7e9e35aaa280b544164d086ca05 /eb9c4471a5a7db6228b2f8c4c234834c5671d828.
Authority program/creator-audience-v1-authority: containing closeout commit resolved by immutable report after normal publication/fetch-back.
Per-packet parents/files/statistics are in P4_CHANGED_FILE_INVENTORY_AND_CHECKPOINTS.json. Do not merge/deploy without separate authority.

## Runtime placement

src/features/creator-audience-v1 owns strict contract, bounded admitted Source reader, deterministic calculator, verified executable bundle, processor, shared success persistence hook, exact replay pipeline and readonly consumer. Existing creator_audience Object retains six accepted V0 source paths plus four disjoint V1 paths: $/f/audience_overview, $/f/audience_profiles, $/f/audience_content_context, $/f/audience_change. Existing shared worker/generation/transition/CAS/current stores are the only lifecycle. Source and Content post-success continuations invoke V1 when inputs admit; there is no second scheduler or provider acquisition.

The pure CreatorContentCurrentSourceAdapter is extracted under Creator Content, with an accepted Creator Brand compatibility re-export. Generic owner-scoped current read is in the shared projection helper; the former Brand reader is a compatibility re-export. V1 never reads Brand suggestions/canonical truth or uses Brand as context. Existing Content legacy Brand continuation is preserved, not imported as Audience Evidence.

Settings non-secret project fence selects only status/account/capability/generation fields. Credential decryption remains exclusively on acquisition paths. Finalization locks the Settings integration and re-admits exact Source/manifest/value before shared transactional persistence. No provider/model call or transaction spanning acquisition occurs in V1.

## Contracts and truth

Strict consumer creator_audience_v1.1: independent account follower count; source-native Followers/Engaged; eight overview facts max, two whole-cohort profiles/four facts each; context zero–two separate Audience and accepted Content facts; history zero–three supported observations. Evidence refs are exact admitted subsets, not unrestricted provider/model payloads.

Profiles are independent dimension summaries, never a synthetic person or joint age/gender/geography group. Provider demographic denominator is separate from account followers; zero counts and unsupported percentage/denominator null are preserved. History requires same Creator/source/account/generation/cohort definition/provider timeframe/month/denominator basis, three distinct snapshots spanning14days, deterministic exact five-point notable /ten-point material thresholds. Invalid/incompatible history breaks a series; no bridging/interpolation. NOT_PROCESSED source-only fallback never approximates Intelligence.

Context requires complete accepted source/current, bounded exact Content Evidence/producer/hash, Audience freshness192hours and Content freshness strictly under48hours; unavailable/partial/failure/running/stale/generation change omits context without invalidating Audience facts. It is not preference, affinity or causality.

Input identity binds canonical Creator/profile/workspace/owner-scope/account/integration/generation, exact Capture/Resource/Evidence IDs/hashes, accepted Audience generation, optional Content generation, ordered bounded history generations, profile and compiled bundle hash. Input evaluation time derives from source capturedAt, not wall clock; eligibility fences remain current. Evidence input arrays are canonically sorted by evidenceRef before hashing, independent of SQL IN result order.

## Auth and frontend

Existing GET /api/v1/creator/insights/audience with real JWT, Team actor resolution, explicit INSIGHTS_AUDIENCE_READ for active Owner/Manager/Assistant. Anonymous401 /inactive403 /subject-query overrides400; no subject write/upsert/execute on read, no new endpoint/action/auth bypass. No-store/Vary preserved. Stale/failed/changed-partial current retained truthfully; only actual Settings/execution states produce PROCESSING.

Existing Insights / Audience UI, strict parser/authenticated client/read-only hook, Aurora cards/tokens, same peer navigation. Narrow Audience route moves outside personal-platform onboarding gate but inside RequireAuth/AppShell and explicit Team projection guard; generic Creator/Content/Settings/Brand/Commercial policies unchanged. Backend always authorizes. Frozen hierarchy source→Overview→Highlights→Profiles→optional Context→supported Change→Data status. No editing/refresh/delete/confirmation/public presentation.

## Local verification and configuration

Reuse repository npm ci, Prisma generate/validate, all104 accepted migrations and build scripts. No schema/dependency/Docker/decoder/frozen Brand bundle changes.

For authorized test reproduction ONLY: backend scripts/creator-audience-v1-integrated-runtime.mjs --prove or --serve loads the actual built AppModule with external ports overridden; database guard accepts uniquely owned loopback55471 task databases creator_audience_v1_p1/p4. No production test route. Frontend scripts/p4-creator-audience-v1-integrated-browser-proof.mjs uses existing installed Edge and repository Playwright/Axe. Offline inherited font CSS is locally fulfilled, declared fallback fonts unchanged, no outbound external traffic/error filtering.

Configuration names only: DATABASE_URL, SETTINGS_FIELD_ENCRYPTION_KEY, STAGE, PORT, CORS_ORIGINS, JWT_SECRET, JWT_ISSUER, JWT_AUDIENCE, AUTH_OTP_PEPPER, POSTMARK_SERVER_TOKEN, POSTMARK_AUTH_OTP_TEMPLATE_ID, POSTMARK_PASSWORD_RESET_TEMPLATE_ID, AWS_EC2_METADATA_DISABLED, OFFERING_PRICE_REFRESH_ENABLED, CREATOR_AUDIENCE_V1_FIXTURE_PASSWORD; frontend VITE_API_URL/VITE_STAGE; browser P4_BROWSER_PATH/P4_EVIDENCE_DIR. Values remain ignored, synthetic and local; no live provider/model/email/payment required. Isolate unit VITE_API_URL empty and auth/config tests from fixture signing environment.

node scripts/creator-audience-v1-publication-scan.mjs scans only exact task worktrees and task screenshot evidence, compares configured local synthetic values without output and detects high-confidence private-key/cloud/Git-token/signed-locator/forbidden artifact categories. Do not commit .env, cookies, tokens, storage-state, temporary paths, raw media or runtime logs.

## Acceptance and operations

P4 focused backend173 /21files and frontend172 /27files PASS; actual provider-neutral built API-to-production UI 40 cases at390/767/768/1440; all Axe severities, console/page errors, overflow and outbound external traffic0. Health/PostgreSQL/migration104/lineage/replay/current-preservation/isolation/target-purge gates PASS. Exact source and screenshot/report hash inventories are in published P4 JSON evidence.

Task services/browser/tmpfs databases cleaned; unrelated developer PostgreSQL preserved. No task persistent volume. Source/schema/package/lock/Docker identities and exact complete commands/gates in P0–P4 evidence. Backend inherited audit52 findings are disclosed without unrelated dependency repair.

Final acceptance, deployment, live-provider provisioning and future work require separate authority. Portfolio/Media Kit not started. No commercial mutation, audience advice/ranking/preferences, KYC/payout/Campaign, development merge, deployment or live Graph/model/provider mutation.
