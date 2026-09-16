# Creator Audience V1 — P1 backend Intelligence and persistence

P1 = ACCEPTED under the packet-local gates in the archived autonomous prompt. Final V1 acceptance remains with Child-SA / Program Orchestrator. Primary 1; formal correction cycles 0.

## Authority and reuse

Exact Product V2 commit 27140fdf6cf522419146c3e7a147169b36a33e5e / blob b32f800dc976ca55a75d417ff9db7b807bf50ea6 is unchanged and already an authority ancestor. Creator Brand is excluded from Audience Evidence and context. The existing creator_audience Object retains its six V0 owned paths; V1 adds only audience_overview, audience_profiles, audience_content_context and audience_change.

Pure owner-scoped current reading moved to shared projection; pure accepted Creator Content admission moved from the old Brand adapter to Creator Content. Old Brand names are compatibility re-exports, not new Brand reads or writes. Existing donor Brand P2 and Content PostgreSQL compatibility gates pass. No parallel acquisition, aggregate, current, scheduler or business lifecycle.

One strict backward-compatible NOT_PROCESSED history state was added before V1 executable bundle freeze, so a valid V0 source with no V1 processed result need not falsely claim insufficient comparable history. No public route or frontend is changed in this packet.

Verified compiled bundle creator_intelligence.creator_audience_v1 / 1.0:
8133a8200f12113ada993f934dbcd40ef1a57c254ed4eb9372c36ed1b4e8c70d.
Processor creator_audience_v1 / 1.0; strict output creator_audience_v1_output_contract / 1.0; consumer creator_audience_v1.1. Original 17 registry entries retain flags; this is the 18th explicit registration.

## Input admission, execution and truth

Current canonical Creator/workspace/owner scope, Settings account/authorization generation/status/health/capability fences are checked without decrypting credentials or provider access. Completed V0 Audience producer, coherent component/value/bundle hashes, exact Capture/capturedAt/Resource/account/request metadata, eight strict capability-bounded source Evidence and recomputed source-native cohorts are admitted. Historical ordering follows authoritative capturedAt, max 63 prior + latest; invalid or incompatible intervals break the series rather than being skipped and bridged.

Identity binds owner/workspace/integration/account/generation, exact Audience and optional Content generation, ordered historical generations, exact Capture/Resource/Evidence/hash, source cutoff/evaluation identity, profile, Product blob and compiled bundle. Ambient clock does not defeat replay; current freshness eligibility is independently hashed. Combined Evidence maximum 536; history maximum 64.

Profiles remain independent whole-cohort supported summaries, not a demographic join or persona. Account follower count remains independent of provider demographic denominator. Zero counts survive; invalid/zero/absent denominator gives null percentages and cohort size. History reuses accepted C2 3-distinct-snapshot/14-day gates and 5/10-point thresholds; no interpolation, causal claims or advice.

Only accepted fresh complete Content current with exact grounded MODEL_DERIVATION parents and recurrent multi-post support contributes 0–2 separately labelled Audience fact / Content fact contexts. Content partial, unavailable, failure, newer failed capture or inclusive 48-hour expiry omits context without invalidating Audience; Audience inclusive 192-hour stale omits context. Creator Brand is never an input.

The existing execution service, worker, generation repository, persistence transition validator and transition/CAS services publish four V1 paths. The hook locks current Settings generation and re-admits exact source inside the short finalization transaction. No provider/model/download work occurs in that transaction. Evidence references retain their own historical/Content Capture identity. Exact successful or partial replay projects its immutable original execution result and makes no rows. Changed partial output or failed execution preserves valid prior same-account derived current. Settings-owned purge adds the V1 processor to existing target-only allowlists.

## PostgreSQL and focused gates

Disposable PostgreSQL 17.11 x64 Alpine; container codex-creator-audience-v1-p1-20260915, loopback port 55471, tmpfs data (no durable volume). Synthetic ignored configuration names only: DATABASE_URL, SETTINGS_FIELD_ENCRYPTION_KEY. Main task database creator_audience_v1_p1: all 104 accepted migrations clean-applied; migration status current, connectivity PASS; only plpgsql 1.0 extension, no extra extension required. Isolated donor database c05_creator_brand_upgrade_shared also clean-applied all 104 in the same task container; no unrelated database reused.

Unique P1 focused tests: 161 PASS:
- 141 / 17 files: V1 PostgreSQL 17, V1 strict contract 7/calculator 12/architecture 6; V0 normalizer 9/pipeline 3/architecture 4/contract 4; Content pipeline 2/calculator 5/runtime 2/multimodal 5; Brand P2 processor 29; shared registry 15/contract validation 12/execution runtime 7/persistence router 2.
- Donor PostgreSQL: V0 Audience 6 and Content/Brand compatibility 7.
- Narrowed authorization-only projection regression: V0 credential fence 7.

Baseline successful V0→V1 fixture: Resources 1, Captures 1, Evidence 8, Observations 0, Observation support 0, shared executions/processors/attempts/Object generations 2 each, component generations/transitions/current 10 each. Exact replay preserves every count, exact result/ordered refs/generation IDs and external fixture call counts. No observation is fabricated merely to produce deterministic Audience projections.

Partial and zero-denominator executions replay exact original partial truth; changed partial preserves prior V1 current. Three captures 50→60→70 over 14 days yield supported 20-point change with exact per-Capture Evidence. Disconnected/inactive/account/capability/generation/cross-Creator/substituted-Evidence requests reject atomically. Shared failed execution and mid-flight generation change preserve prior current. Actual accepted Content source/multimodal pipeline grounds context; replay adds no work/rows; 48-hour admission omits context. Target-only Settings purge removes target V0/V1 rows/support while the same Creator website Resource and other Creator survive. Temporary external fixture roots clean up on terminal paths.

## Exact command families and hygiene

- npm ci (P0 immutable lockfile install reused); npm run prisma:generate; npx prisma validate.
- npm run db:migrate:deploy; npx prisma migrate status; SQL migration/extension/version checks on task databases.
- CREATOR_AUDIENCE_V1_DATABASE_TEST=true: node -r dotenv/config node_modules/vitest/vitest.mjs run --config vitest.config.ts --maxWorkers=1 --minWorkers=1 --fileParallelism=false with the 17 focused file/directory inventory above.
- CREATOR_AUDIENCE_P2_DATABASE_TEST=true and CREATOR_CONTENT_DATABASE_TEST=true: same repository Vitest configuration, two existing donor PostgreSQL files, process-local task donor database override.
- npx vitest run --config vitest.config.ts src/features/creator-audience/creator-audience-credential-fence.service.test.ts.
- npx tsc --noEmit --project tsconfig.build.json; npm run build with repository-scoped NODE_OPTIONS=--max-old-space-size=4096.
- npx prettier --check and npx eslint on the exact changed source inventory; git diff --check.
All PASS. Final production build includes generated Prisma and prompt/frozen bundle asset copy.

Windows 11 x64 10.0.26200; Node 24.19.0; npm 11.17.0; Docker client/server 29.7.2; Prisma 6.19.3; Vitest 2.1.9. No schema/migration/package/lock/Docker/decoder/frozen Brand bundle/frontend change. Planned source high-confidence private-key/cloud/Git-token/JWT/credential-URL scan PASS, architecture forbidden persistence checks PASS; no runtime .env tracked (inherited .env.example remains). No secret values, raw media, signed locator, prompt/model reasoning or temporary path persisted in V1 outputs.

Drafting fixes (source projection/null-denominator/history/registry/router fixture semantics and formatting) occurred inside primary packet, formal cycles 0; no gate waived.

## Publication and exact changed inventory

Backend 4b37a302d06f06324e52c461647e669a9d5769d2 / tree b41d179587e16b63e243ba4bb68b71a95c264a6c; parent P0 ff25153cd37008c02e6a7ab3c77fd509d2a5b408. Normal non-force push then independent fetch/prune: SHA/tree equality, P0 ancestry and clean status PASS. 29 files, 3842 insertions, 616 deletions (includes two compatibility-preserving extractions).
Frontend remains e6e7ae8ea9f5f98f882f52230e4cae163bda1e89 / c77fd43a13251f3c0ba6733f5070fe49412bba1e.
Prior authority P0 cb92615cc53d34f63936cfcfadc70aae74a943da / 78caa5cd6621dd5d3df226f5178b8ff623c30825. Containing P1 authority SHA/tree is resolved after publication.

- src/features/brand-intelligence/brand-intelligence.module.ts
- src/features/brand-intelligence/contracts/registry/contract-runtime.registry.test.ts
- src/features/brand-intelligence/contracts/registry/contract-runtime.registry.ts
- src/features/brand-intelligence/contracts/validation/semantic.validator.ts
- src/features/brand-intelligence/execution/executor/processor-executor.registry.ts
- src/features/brand-intelligence/execution/processor-persistence.router.test.ts
- src/features/brand-intelligence/execution/processor-persistence.router.ts
- src/features/brand-intelligence/projection/owner-scoped-current.read.ts
- src/features/creator-audience-v1/creator-audience-v1.architecture.test.ts
- src/features/creator-audience-v1/creator-audience-v1.calculator.test.ts
- src/features/creator-audience-v1/creator-audience-v1.calculator.ts
- src/features/creator-audience-v1/creator-audience-v1.content-test-fixture.ts
- src/features/creator-audience-v1/creator-audience-v1.contract.ts
- src/features/creator-audience-v1/creator-audience-v1.persistence.ts
- src/features/creator-audience-v1/creator-audience-v1.pipeline.ts
- src/features/creator-audience-v1/creator-audience-v1.postgres.test.ts
- src/features/creator-audience-v1/creator-audience-v1.processor.ts
- src/features/creator-audience-v1/creator-audience-v1.runtime.ts
- src/features/creator-audience-v1/creator-audience-v1.source.ts
- src/features/creator-audience-v1/creator-audience-v1.test-fixture.ts
- src/features/creator-audience/creator-audience-credential-fence.service.test.ts
- src/features/creator-audience/creator-audience-credential-fence.service.ts
- src/features/creator-audience/creator-audience-persistence.hook.ts
- src/features/creator-audience/creator-audience-pipeline.service.ts
- src/features/creator-brand/creator-brand-content-source.adapter.ts
- src/features/creator-brand/creator-brand-current.reader.ts
- src/features/creator-content/creator-content-current-source.adapter.ts
- src/features/creator-content/creator-content-pipeline.service.ts
- src/features/data-extraction/evidence/ownership/intelligence-owner-scope.repository.ts

## Continuation

Task P1 container remains running only for authorized P2 runtime gates; P4 will use a fresh disposable PostgreSQL route and final closeout removes task services only. No live Graph/model/provider mutation, development merge, deployment, Portfolio or Media Kit work. P2 proceeds autonomously after this packet publication.

