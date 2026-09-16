# Creator Audience V1 — P2 authenticated consumer and runtime

P2 = ACCEPTED under the archived autonomous packet gates. Final technical acceptance remains with Child-SA / Program Orchestrator. Primary 1, formal correction cycles 0. P0/P1 and exact Product V2 commit 27140fdf6cf522419146c3e7a147169b36a33e5e / blob b32f800dc976ca55a75d417ff9db7b807bf50ea6 remain authoritative. Creator Brand is excluded from Audience Evidence and context.

## Consumer architecture and security

Existing GET /api/v1/creator/insights/audience now projects strict creator_audience_v1.1. Existing JWT and throttler guards, private/no-store and Vary Authorization/Cookie remain. All query overrides are rejected with 400. Canonical Owner is resolved through active Team membership and explicit INSIGHTS_AUDIENCE_READ; Owner/Manager/Assistant are read-only actors, not alternate business subjects.

Projection uses read-only Actor resolution, the existing non-secret Settings fence and a repeatable-read current lookup; no scope upsert, acquisition, decryption, source refresh, processor execution or business mutation occurs from GET. Current ownership/subject/path coherence, component/Object hashes, strict consumer data, bundle/producer and completed producer are checked. Processing is scoped to Audience producers and Settings-owned source jobs/captures, so another domain's failed processing cannot poison Audience.

Valid V0 source without processed V1 preserves source truth and account count with empty derived facts/profiles/context and NOT_PROCESSED history; no approximate Intelligence is manufactured. Empty source uses unavailable/null truth and epoch generatedAt, never invented capture or zero. Current-generation changes/disconnect/stale/failure/changed partial source retain valid prior same-account data with currentPreserved truth. Content context is omitted at inclusive 48h, source change/failure/inactive fence or Audience inclusive 192h stale without invalidating Audience.

A Settings-scheduled DUE job before any shared subject/current exists reports PROCESSING. No queued job is invented for ordinary empty/unprocessed data. No new route/action or schema.

## Bounded primary-run corrections

Initial role fixture incorrectly gave delegated members their own unselected personal workspace; corrected fixture to canonical Team-only users. Existing authorization/config unit regressions initially inherited ignored runtime environment through dotenv; rerun isolated without dotenv passed, with no auth/test expectation change. Disposable local signing inputs were rotated; no values are included.

Expanded actual runtime found a retained-input canonicalization defect: SQL IN-query physical Evidence order entered historical breakdown arrays in the replay hash, intermittently causing SOURCE_CHANGED_BEFORE_FINALIZATION. Server-side Evidence-ref sorting now canonicalizes before constructing those arrays. Real PostgreSQL regression deliberately reverses row delivery and proves exact input manifest/value equality. Existing hash/fence re-admission comparisons and genuine mid-flight rejection remain unchanged. This is an affected admission mapper correction, not a Product/contract/bundle/history arithmetic change or gate waiver. Compiled bundle remains 8133a8200f12113ada993f934dbcd40ef1a57c254ed4eb9372c36ed1b4e8c70d.

A preliminary rebuild contained the earlier subject-dependent processing projection while the new source fix was pending; the expanded processing test rejected it. Final stable-source rebuild and runtime rerun below pass. Ordinary bounded fixes occurred within primary P2, formal cycles 0.

## Focused tests and exact commands

109 unique focused tests PASS:
- 18 actual PostgreSQL shared-runtime/admission/replay/failure/isolation/purge/Content lineage gates, including reversed-row canonicalization;
- 11 consumer contract/projection tests: 4 unit and 7 PostgreSQL (empty/no-write, queued-only processing, V0-only unprocessed, three roles, inactive/cross-Creator, stale/disconnect/generation, partial/failure);
- strict V1 contract 7, calculator 12, architecture 6;
- affected V0 service 6/architecture 4, authentication unit 9/static 5, Team Actor 7/policy 24.

Database tests:
CREATOR_AUDIENCE_V1_DATABASE_TEST=true node -r dotenv/config node_modules/vitest/vitest.mjs run --config vitest.config.ts --maxWorkers=1 --minWorkers=1 --fileParallelism=false src/features/creator-audience-v1/creator-audience-v1.postgres.test.ts src/features/creator-audience-v1/creator-audience-v1.consumer.test.ts.
Configuration-isolation and unaffected strict/architecture tests use npx vitest run with the same repository configuration, one worker/fileParallelism=false, without loading ignored runtime configuration.

npx tsc --noEmit --project tsconfig.build.json PASS.
npm run build PASS, final stable source, repository-scoped NODE_OPTIONS=--max-old-space-size=4096.
Scoped npx eslint / npx prettier --check on all seven changed files, git diff --check and planned-content secret/forbidden-artifact review PASS.
node scripts/creator-audience-v1-integrated-runtime.mjs --prove PASS on built dist AppModule/classes, actual password hashing/AuthMethod/login/JWT/session/Team guards. Only provider/model/media external ports are fixture DI; shared processors, input admission, persistence/CAS/current and auth are real. No production test endpoint or auth bypass.

## Actual HTTP/PostgreSQL results

Task disposable PostgreSQL 17.11, port 55471, database creator_audience_v1_p1, all 104 accepted migrations current. Existing P1 tmpfs container is reused only within this task; P4 will be fresh. Extra extension not required; plpgsql only.

GET /health/live: 200, {"status":"ok"}.
GET /health: 200, {"status":"ok","info":{"database":{"status":"up"}},"error":{},"details":{"database":{"status":"up"}}}.
Actual real-login reads: Owner/Manager/Assistant 200 with exact canonical Owner count 1000/two profiles, supported 3-snapshot/14-day change and separate Content context. Inactive member 403; anonymous 401. Any Creator override query 400. Independent other Creator has unavailable/null data, not target facts.

State matrix PASS:
- partial: PARTIAL / CONNECTED / CURRENT / IDLE / currentPreserved false;
- empty: UNAVAILABLE / CONNECTED / UNKNOWN / IDLE / false / NOT_PROCESSED;
- stale failed source: retained READY / PROVIDER_FAILURE / STALE / FAILED / true;
- changed partial source: retained READY / CONNECTED / CURRENT / IDLE / true;
- real queued source: UNAVAILABLE / CONNECTED / UNKNOWN / PROCESSING / false;
- disconnected: retained READY / DISCONNECTED / CURRENT / IDLE / true;
- capability unknown: UNAVAILABLE / CAPABILITY_UNKNOWN / UNKNOWN / IDLE / false.

Exact replay after actual Audience V0 and grounded Content execution: reused true, additional rows 0, additional Audience/provider/media/model fixture calls 0; exact result/refs retained. Reads add zero scope/DE/Intelligence rows or provider work (real login sessions are expected auth writes). All external HTTP attempts 0; live Graph/model calls NONE.

Global task database totals after the final runtime proof (includes isolated preceding regression fixtures, not a clean single-owner row inventory): scopes 194, Resources 194, Captures 247, Evidence 1912, semantic Observations/support 72 each, executions 413, Objects 387, components/transitions 2010 each, current 1678. Before/after replay and read vectors are exactly equal. Fresh P4 will report fresh-route integrated counts.

Existing Content's separate unconfigured legacy Brand continuation records its own bounded failed attempt; it is neither Audience input nor Audience processing truth and does not mutate canonical Brand truth. No Creator Brand inference/read is added to Audience.

App/cron processes closed and unique external fixture temporary media roots removed on exit; port 33491 no longer listening. The task PostgreSQL container remains for authorized continuation only. No live Graph/model/provider mutation, deployment/development merge, Portfolio or Media Kit work.

## Identities and publication

Backend d99cce6f8d7730e8eff7f7cc734ba8813bf822e7 / c0101e6a5a07e156f6c46e2a328a8e948cdbc915; parent P1 4b37a302d06f06324e52c461647e669a9d5769d2. Normal non-force push and independent fetch/prune SHA/tree equality, ancestry and clean status PASS. Seven files, 1303 insertions, 4 deletions.

Frontend unchanged and independently fetched: e6e7ae8ea9f5f98f882f52230e4cae163bda1e89 / c77fd43a13251f3c0ba6733f5070fe49412bba1e, clean.

Schema blob 361eded6b949f6a780f5896954cb6d4bf67af3ca; package dc1493f0405e17ba6f9c083dc232a9b8e6e6a9e5; lock 9ae66e721cb30db3640c4e7e52cb940318e1b468; Dockerfile 73eba9b787a41aadba9fe44c8997d667876659a4: byte-identical. All migrations and frozen generated Brand bundles unchanged. No dependency or decoder change.

Authority predecessor P1 2216997cebd3d1683deca1317d1656b21ae921df / 688a477e9bed769cbc89e294c33852591276afcc. Containing P2 authority SHA/tree resolved after normal publication.

Changed files:
- scripts/creator-audience-v1-integrated-runtime.mjs
- src/features/creator-audience-v1/creator-audience-v1.consumer.service.ts
- src/features/creator-audience-v1/creator-audience-v1.consumer.test.ts
- src/features/creator-audience-v1/creator-audience-v1.postgres.test.ts
- src/features/creator-audience-v1/creator-audience-v1.source.ts
- src/features/creator-audience/creator-audience.controller.ts
- src/features/creator-audience/creator-audience.module.ts

P3 proceeds autonomously after publication. No final self-acceptance.

