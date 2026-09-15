# Creator Content V0 — P2/P4 correction 1 evidence

`CREATOR_CONTENT_V0_P2_P4_CORRECTION_1_EXTERNAL_LOCAL_CODEX_REPORT_V1`

## Disposition and authority

P0/P1 ACCEPTED. P2/P3/P4 CORRECTED_EVIDENCE_READY. Technical acceptance AWAITING_CHILD_SA_REVIEW. One authorized correction cycle; no merge/deployment. This record supersedes the two deficient original P2/P4 acceptance claims without erasing their historical evidence or restarting transfer/P1.

Read/reconciled repository AGENTS files, AI engineering/backend/validation/database/AI-integration standards, frozen Product/Parent authorization, P0/P1-P4 artifacts, original ledger and handoffs, provider inventory contracts, reusable image/carousel/frame/OCR/speech security/lifecycle paths and current Creator ownership/role/fence/consumer contracts. Frozen limits remain exact 90 days/latest 24, eight Creator Content components, strict consumer shape, deterministic comparisons and no new Product semantics.

## Exact starting and published implementation

All starting worktrees were clean after normal fetch/prune; local/upstream SHA and tree equality and accepted Audience/predecessor ancestry were verified before mutation.

| Repository                                    | Starting SHA                             | Starting tree                            | Corrected SHA                            | Corrected tree                           |
| --------------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| Piyush1087/creator-commerce-backend-v2-clone  | 5f7712108886305b40cbcf1c0d89f5ecdc22ab24 | 343e03b3c5bd6ee1749259841f622e1f7012cb75 | 0fa145ac6a021337929e87b9eb9e0c67ebc82b7e | 750065a56a4a060c125a9bee7ddc9fb842204e7e |
| Piyush1087/creator-commerce-frontend-v2-clone | 7edd26d3cdad0ec84083884b34039952368a1295 | 0cc596ca1ef1d1c4a51857125547de156e487c8b | unchanged                                | unchanged                                |
| Piyush1087/dummy_tcs authority                | 5df3bff917dd294f3f86642809c66558e37a3b8c | 2bcbde3e893adb5f7675ed894e2065651554f7f4 | containing evidence/ledger commit        | resolve in immutable report              |

Backend branch `program/creator-content-v0-backend`; frontend `program/creator-content-v0-frontend`; authority `program/creator-content-v0-authority`. Normal backend push and independent fetch equality PASS; frontend normal push up-to-date and independent fetch equality PASS. Backend original P4 checkpoint remains ancestor. Authority final containing-commit equality is returned separately to avoid self-reference.

## Corrected production request and orchestration

- Provider `readMediaInventory(credential, windowEnd, windowDays=30)` accepts only explicit 30/90. Content requests 90; untouched Brand callers use 30. Real client fetch-fixture verifies since `2026-06-17T12:00:00Z`, until `2026-09-15T12:00:00Z`, admission of a day-45 row, exclusion beyond 90 days and invalid-bound rejection. Content rejects mismatched provider coverage timestamps.
- Production semantic token uses `CreatorContentMultimodalService` via `useExisting`. It is NOT replaced in PostgreSQL or final module/browser fixture. Only real external locator/provider/DNS/transport, decoder/audio and bounded model boundaries are synthetic. Actual contained acquisition and secure streamed downloaders run.
- IMAGE uses secure visual/OCR; CAROUSEL enumerates bounded ordinal children (image-full, video-cover-only); VIDEO/REEL downloads once, probes once, samples at most six deterministic frames with visual/OCR and extracts bounded audio/speech when enabled. Serial work, latest-24 and child-cap-10 bounds remain. Accepted donor runtime/Docker/security code unchanged.
- Strict grounded candidate has four bounded category arrays only: themes, caption patterns, creative structures, visual execution. Exact admitted support required; caption support requires actual caption, visual execution requires actual visual observation. Unknown/partial media is never a negative comparison complement. No metric input, unrestricted reasoning, Product taxonomy or canonical mutation.
- Per-modality state/count/mode/hash/model/profile and exact child/frame supports are bounded structured derived Evidence. Disabled/unavailable OCR is PARTIAL/UNKNOWN, not empty absence; cover-only is not full temporal understanding. Underlying unconfigured models fail closed.
- Initial authorization-only fence precedes replay; per-acquisition and final Creator Settings fences remain. Identity binds owner/workspace/integration/account/generation/window/request and all model/contract/prompt/profile/switch versions. Full acquired hash/child/frame/grounding manifest is retained, not a locator fingerprint. Exact completed execution replay returns its original value (not latest unrelated current).
- Parent Resource → completed Capture/capturedAt → normalized provider source Evidence → MODEL_DERIVATION Evidence with parent support → same-capability SemanticObservation/support → verified eight-path generation/current. Provider captions bounded 2200; derived payload capped 65536 bytes and forbidden material rejected. No DB transaction spans external media/model work.
- All terminal image/video/frame/audio paths clean task stores. Existing Creator Settings purge removes only target supported lineage and target Creator temp scope, preserving other owner and website/source rows.

## Production integration counts and PostgreSQL

Existing Docker PostgreSQL 17-alpine, disposable containers `creator-content-correction1-pg17` (55504) and `creator-content-correction1-browser-pg17` (55505); synthetic process-local credentials not reported or written to Git. Clean guarded databases: `creator_content_p2`, `creator_audience_final_correction1`, `creator_audience_p1_clean`, `creator_content_p4_clean`. Each clean-applied all 101 accepted migrations and status current; Prisma generate/validate PASS. No feature migration/schema change.

First Content execution: inventory + eight insights + one carousel enumeration = 10 provider calls. Actual secure-download fixture counters: image locators 8, video locators 1, downloads 9, probes 1, extraction 1, image visual 8, OCR 14, frame-model 6, audio extraction 1, speech 1, grounded semantic 8. Eight admitted media include a post 45 days old, image, two-image-child carousel and Reel.

Successful lineage: 1 completed Capture, 16 Evidence (8 provider source + 8 derived), 8 Observations, 8 support links, 1 Object generation, 8 component generations, 8 current rows. Exact replay adds ZERO provider/acquisition/decoder/extraction/model calls and ZERO rows; ordered refs/value unchanged.

Separate OCR-failure case: every media PARTIAL, consumer semantic coverage 0, original modality descriptors/counts/refs/value recovered exactly on replay. Changed grounded-model profile/failure adds no Evidence/generation/current and preserves prior value with FAILED/currentPreserved truth. Provider failure also preserves valid current. Cross-Creator/account/generation/source-media substitution rejected. Target purge deletes its Observation/support/Evidence/current lineage and both temp scopes; another owner's media/temp data and same-owner WEBSITE source survive.

Content PostgreSQL 4 PASS; Audience PostgreSQL 6 PASS; shared owner scope PostgreSQL 3 PASS. P4 production Nest fixture independently reproduces counters and replay/failure, then serves actual authenticated API from the generated current. Its intentional changed failure leaves 2 Captures (completed + failed), 16 Evidence, 1 Object, 8 component/current rows.

## Focused commands and results

- `npm run prisma:generate`, `npx prisma validate`, `npm run db:migrate:deploy`, `npx prisma migrate status`: PASS; 101/current per guarded clean database.
- `npm run build`: backend PASS; final corrected source build rerun after persistence partial-scope fix. Frontend `npm run build`: PASS, unchanged source (existing chunk-size warning only).
- `npx eslint <all 17 changed/new TypeScript files>`, `npx prettier --check <changed/new files>`, `git diff --check`: PASS.
- `npm run intelligence:contracts:verify -- --source C:/Users/piyus/Documents/Codex/a3src-bbb0be3 --commit bbb0be3345c36e9cc7c4f06ca68fb491b742b83f`: PASS; exact pinned procedure, no frozen bundle mutation.
- `npx vitest run --config vitest.config.ts` with `src/features/creator-content`, `src/features/creator-audience`, Creator workspace actor/Instagram Settings tests, `src/features/instagram/media`, provider-client tests, `src/features/instagram-intelligence/media`, C2 foundations, C3 semantics/model and sync pipeline/dispatcher: 307 PASS / 21 DB-gated skips. Those skips are not claimed as executed donor PostgreSQL gates; the required Creator Content/Audience/owner-scope DB gates ran independently above.
- `npm run test -- --run src/features/creator-content` (frontend): 11 PASS.
- `npx ts-node scripts/p4-creator-content-browser-fixture.ts`: real production orchestration fixture PASS; `node scripts/p4-creator-content-integrated-browser-proof.mjs`: authenticated production API/UI PASS.

## Health, browser, roles and disclosure

`GET /health/live` 200 `{"status":"ok"}`. `GET /health` 200 status ok, database up (info/details), no error; PostgreSQL connectivity confirmed.

| Width | Authenticated Content API/UI | Keyboard/focus | Overflow | Axe serious/critical/lesser |
| ----- | ---------------------------- | -------------- | -------- | --------------------------- |
| 390   | PASS                         | PASS           | none     | 0/0/0                       |
| 767   | PASS                         | PASS           | none     | 0/0/0                       |
| 768   | PASS                         | PASS           | none     | 0/0/0                       |
| 1440  | PASS                         | PASS           | none     | 0/0/0                       |

Owner/Manager/Assistant Content read PASS; inactive actor fail-closed; anonymous API 401. Current survives the intentionally failed changed execution. External browser hosts blocked; no live provider/model calls.

Inherited original P4 test-only entry-state projection for Manager/Assistant is unchanged: auth, actor context and Content endpoint are real, but delegated-role browser entry-state is projected ready because predecessor entry service is self-owner-oriented. This report does NOT claim a corrected unmodified production delegated-entry route. No production auth bypass/route, frontend or entry-service change was made. The two authorized correction gaps are production 90-day inventory and real multimodal semantic orchestration.

## Exact backend inventory and hygiene

17 files, 1837 insertions / 77 deletions:

```text
scripts/p4-creator-content-browser-fixture.ts
src/features/creator-content/creator-content-calculator.test.ts
src/features/creator-content/creator-content-calculator.ts
src/features/creator-content/creator-content-multimodal.service.test.ts
src/features/creator-content/creator-content-multimodal.service.ts
src/features/creator-content/creator-content-persistence.hook.ts
src/features/creator-content/creator-content-pipeline.service.test.ts
src/features/creator-content/creator-content-pipeline.service.ts
src/features/creator-content/creator-content-semantic.port.ts
src/features/creator-content/creator-content.module.ts
src/features/creator-content/creator-content.postgres.test.ts
src/features/creator-content/creator-content.repository.ts
src/features/creator-content/testing/creator-content-external.fixture.ts
src/features/data-extraction/evidence/ownership/intelligence-owner-scope.repository.ts
src/features/instagram/instagram-intelligence-provider.client.test.ts
src/features/instagram/instagram-intelligence-provider.client.ts
src/features/instagram/instagram-intelligence-provider.types.ts
```

Schema/migrations/package/lock/Dockerfile/decoder/audio-extractor bytes and public consumer contracts unchanged. Existing immutable installation reused; no dependency change required. Node 24.19.0, npm 11.17.0, Docker 29.7.2, Prisma 6.19.3, Chrome 152.0.7977.83; repository-pinned configuration reused.

Diff/planned commit and sanitized runtime log high-confidence secret/signed-locator scans PASS; durable payload rejection and donor security regressions PASS. No .env, raw media/frame/audio, signed URL, temporary path, runtime database/browser artifact or credential is added to commits. Prompt input SHA256 `47d8e5e50c6fbfd54ac0b0bcb6590ab5fee12adebecd06446c7dbed664a90371`; archived content equality PASS with line-ending/final-newline normalization only.

Both uniquely named task containers/ephemeral volumes removed; backend/frontend task processes stopped; ports 3194/4184/55504/55505 no longer listen. Fixture media roots removed. Task-local reproducible PowerShell runners and sanitized logs outside repositories are retained, not published; no credential values in this record. No unrelated container/database/worktree was changed. All owning worktrees are required clean after publication.

Minor in-run validation repairs: fixture audio availability method; PostgreSQL TCP readiness instead of temporary initialization socket; partial representative-empty component retains overall admitted Evidence scope (rather than failing current persistence). These are bounded corrections within the single authorized cycle, not a new formal cycle or gate waiver.

`LIVE_GRAPH_CALLS = NONE`

`LIVE_MODEL_CALLS = NONE`

`RAW_MEDIA_PERSISTED = NO`

`NEW_MIGRATIONS = NONE`

`DEVELOPMENT_MERGE = NOT_PERFORMED`

`DEPLOYMENT = NOT_PERFORMED`

`CORRECTION_CYCLES_USED = 1`

`RESULT = READY_FOR_CHILD_SA_PROGRAM_ORCHESTRATOR_REVIEW`
