# Instagram Intelligence C4 — Three Objects and complete consumer

**Status:** `EVIDENCE_READY_AWAITING_CHILD_SA_PROGRAM_ORCHESTRATOR_ACCEPTANCE`

**Execution date:** 2026-09-12

**Scope:** second resumed C4 implementation only; no C1, D_COMBINED, Wave E, schema, migration, provider mutation, or live provider/model call

## Authority and checkpoints

C4-R0 remains preserved except for its path map. C4-R1 is accepted and supersedes only that map with root `$` and child `$/f/components/f/<registeredComponent>`. All three executable bundles are pinned to immutable authority commit `a7c691047ab6802098d3c4a84e73cc3fe95d753a`; required ancestor `fb6bc8ca1ef7b3852026c3b684dc625cda974879` is present.

| Repository | Exact clean start | Final implementation checkpoint before authority commit |
|---|---|---|
| backend | `c592d7b1731b15cce9609efafbe7d689a5ca8744` / `922ad1bb363ce85c3dd73cee1daf65062d99b0a0` | `56c3251e399fc50706f3f0844d64b4318530d37e` / `43b4451a0750e4afec59634a70d75fbec60dd3cb` |
| frontend | `bc8523183ae4892c0b538474d2f5444a1ea356d8` / `7f3016c01500083ae2f536ebd0540219c9228dd7` | `dfd08cf95c043049b40847416edea786bb77fe9f` / `50ad0be4ac391ad131681a4a5ce5c8d5ee05606d` |
| authority | `a7c691047ab6802098d3c4a84e73cc3fe95d753a` / `9492fe376bf2389192e6eacafafecca86105598a` | final authority identity is reported after this record is committed |

Fetch/prune, local/fetched SHA and tree equality, ancestry, remote identity, and clean-worktree checks passed before mutation. No overlapping user work was present.

## Executable activation and ownership

The deterministic generator and verify-only route produced and verified these registrations:

- `instagram_content_behavior`: processor/bundle/output/Evidence `1.1`, public Object/payload `1.0`;
- `instagram_audience_profile`: processor/bundle/output/Evidence/public Object `1.0`;
- `instagram_organic_performance_profile`: processor/bundle/output/Evidence/public Object `1.0`.

B4 content `1.0` remains immutable historical authority and is not execution-enabled. Content `1.1` is the sole active content owner. The runtime/integrity registries ignore historical registrations for active ownership while keeping their bytes verifiable; no generalized multi-version system or verification bypass was introduced.

Active ownership is exactly 35 keys: 13 content, 9 audience, 13 performance; three roots and 32 children. Every root is `$`; every child is `$/f/components/f/<registeredComponent>`. Tests reject `$/f/<component>`, `$/f/components`, duplicate ownership, root-only ownership, and omitted child materialization.

## Shared execution, generation, and current

All processors use the existing Brand subject, execution identity, verified bundle gate, processor execution/attempt, `ObjectGeneration`, `ComponentGeneration`, Evidence references, transition/CAS service, current projection, `ComponentPathCodec`, and `IntelligenceObjectAssembler`. C4 adds no parallel current/generation store, direct current mutation, custom assembler, or Instagram-specific projection adapter.

One successful execution produces exactly three ObjectGenerations and 35 ComponentGenerations. All three assembled roots pass `InstagramIntelligenceObjectSchema`. Generated state is only `PARTIAL_CURRENT` or `CURRENT`, readiness only `PARTIAL` or `READY`, freshness `CURRENT`, `currentPreserved=false`, and a non-null authoritative generation time. Missing current and degradation are projected, not fabricated as generated values.

An accepted root-only B4 `1.0` current remains readable under the shared projection before C4 success. A failed first content `1.1` attempt leaves that current generation and revision unchanged. The first successful C4 content transition advances the same current address by CAS, records the prior component as superseded, and leaves one active current owner. Exact replay adds no execution, ObjectGeneration, ComponentGeneration, Evidence reference, or transition.

## Processor semantics and lineage

Content behavior consumes the accepted C2/C3 slices and preserves the one-post, missing-modality, uninspected-visual, likely-collab, Creator, Offering, and non-causality boundaries. Audience consumes only accepted account/follower/engaged Evidence and preserves unavailable, suppressed, unsupported, partial, and provider-failure distinctions. Organic performance consumes exact persisted C2 Result identities/hashes and does not recalculate C2 arithmetic; C3 is explanatory/grouping support only.

Signal and Learning gates are deterministic: Signal sample at least 3, metric coverage at least 50%, comparative cohorts at least 3 each; MEDIUM additionally needs sample at least 5, coverage at least 70%, and two publication dates. HIGH Signal/Learning, unsupported Learning, new arithmetic, and causal Learning are rejected. Learning Evidence is the union of its supporting Signal Evidence.

The PostgreSQL proof traversed Resource → completed Capture/capturedAt → source Evidence → persisted C2 Result → four capability-owned C3 derived Evidence slices → three processor executions → three ObjectGenerations → 35 ComponentGenerations and their exact Evidence references → shared transitions/current → strict assembled Objects → aggregate consumer and media-detail consumer. Admitted rows are constrained to the exact Brand, integration, account, authorization generation, window/media, and C2/C3 identities/hashes.

All three Objects fail terminally and preserve their current rows under stale authorization generation. A separate dependency-injected sibling run proves content and performance advance while audience fails terminally and preserves all nine prior current generations. Provider/account, cross-Brand, cross-media, authorization-generation, C2 identity/hash, and C3 identity/hash substitutions fail closed. No empty replacement or unavailable-as-zero output is published.

## Consumers and Settings boundary

`GET /api/v1/brand-centre/instagram` returns strict `InstagramWorkspaceConsumerSchema` `1.0`: Settings connection state, 30-day window, account facts/performance, exactly three projections, representative media, all required coverage dimensions, sync/freshness/degradation, role-derived action authority, and the Settings recovery path. Missing Objects become strict truthful `NO_CURRENT` projections with registered components; the consumer has no D_COMBINED dependency and takes no caller-selected Brand ID.

`GET /api/v1/brand-centre/instagram/media/:mediaId` returns only the strict consumer-safe media contract. Brand, account, authorization-generation, and media isolation are enforced. Raw provider responses, acquisition locators, raw media, model payloads, credentials, processor internals, leases, hidden Brand output, and unverified canonical identities are excluded.

Connection lifecycle and delete-data remain Settings-owned. The recovery path remains `/brand/settings/integrations?tab=instagram`; C4 extends the existing Settings purge to its generation/current/execution rows and proves another Brand survives. Manual refresh remains projection-only: Brand Owner and Campaign Manager allowed; Finance Admin denied/read-only. No refresh endpoint, scheduler, cooldown, lease expansion, OAuth mutation, or reconnect/disconnect behavior was added.

## Frontend compatibility

The existing authenticated `/brand-centre/instagram` route now strictly parses and minimally renders the complete consumer response. No navigation migration, six-workspace hierarchy, controls, final responsive matrix, or accessibility hardening was started. A production build served at 1440×900 against the local backend authenticated through the existing contract, rendered database-backed current and truthful partial/unavailable copy, called aggregate and media-detail APIs successfully, had document width equal to viewport width, exposed no forbidden raw internals, and produced zero console or page errors.

## PostgreSQL and verification

Environment: Windows NT `10.0.26200.0` x64; Node `v24.19.0`; npm `11.17.0`; Docker `29.7.2`; PostgreSQL `17.11`; Prisma `6.19.3`; installed Chrome used through repository Playwright.

- immutable `npm ci`: PASS in backend and frontend; package manifests and lockfiles unchanged;
- Prisma generate and validate: PASS;
- clean disposable PostgreSQL 17: all 89 migrations applied, status current, connectivity PASS, no extra extension required;
- migration 89 SHA-256: `12b5a234d322235199dc8ad1173fc4835517ed0a3ed5a6ff910aa48165f118a8`; no migration changed or added;
- deterministic bundle generation/verify-only: PASS; generated re-run was byte-clean;
- generator 9/9, runtime registry 15/15, B4/C4 public contracts 3/3, affected ownership/architecture 21/21: PASS;
- focused C4 and predecessor unit matrix: 138/138 PASS;
- C4 PostgreSQL round trip, including B4 handoff and sibling failure: 1/1 PASS;
- affected C2/C3/B3 PostgreSQL regressions: 11/11 PASS;
- frontend: 139 files passed and one skipped; 1089 tests passed and one skipped; typecheck/build/scoped lint PASS;
- backend production build, scoped changed-file lint, and `git diff --check`: PASS;
- full backend suite diagnostic: 6595 tests passed and 807 skipped; 13 unrelated legacy tests failed and 14 legacy files had no test suite. The seven initially stale active-registry expectation files were corrected and independently rerun 21/21 PASS. No C4-focused or affected mandatory gate remains failing.

The full-suite residuals are outside C4-owned paths (legacy collaboration/notification/payout behavior and stale global migration-count expectations); they were present only as diagnostic evidence and were not weakened, hidden, or changed.

## Exact implementation inventory

Backend application and tests:

- `src/features/brand-intelligence/audience-persona.architecture.test.ts`
- `src/features/brand-intelligence/brand-character.architecture.test.ts`
- `src/features/brand-intelligence/brand-differentiation.architecture.test.ts`
- `src/features/brand-intelligence/brand-intelligence.execution.architecture.test.ts`
- `src/features/brand-intelligence/brand-intelligence.input.architecture.test.ts`
- `src/features/brand-intelligence/brand-intelligence.module.ts`
- `src/features/brand-intelligence/brand-meaning.architecture.test.ts`
- `src/features/brand-intelligence/contracts/bundle/contract-bundle.generator.ts`
- `src/features/brand-intelligence/contracts/bundle/contract-bundle.integrity.ts`
- `src/features/brand-intelligence/contracts/bundle/contract-bundle.types.ts`
- `src/features/brand-intelligence/contracts/bundle/contract-source.spec.ts`
- `src/features/brand-intelligence/contracts/registry/bundle-path-ownership.registry.ts`
- `src/features/brand-intelligence/contracts/registry/contract-runtime.registry.test.ts`
- `src/features/brand-intelligence/contracts/validation/semantic.validator.ts`
- `src/features/brand-intelligence/contracts/validation/structural.validator.ts`
- `src/features/brand-intelligence/execution/executor/processor-executor.registry.ts`
- `src/features/brand-intelligence/execution/processor-persistence.router.ts`
- `src/features/brand-intelligence/projection/intelligence-current-contract-scope.service.ts`
- `src/features/brand-intelligence/visual-style.architecture.test.ts`
- `src/features/data-extraction/evidence/instagram/instagram-derived-data-purge.service.ts`
- `src/features/instagram-intelligence/consumer/instagram-b4-consumer.controller.ts`
- `src/features/instagram-intelligence/consumer/instagram-b4-consumer.schema.ts`
- `src/features/instagram-intelligence/consumer/instagram-b4-consumer.service.ts`
- `src/features/instagram-intelligence/instagram-b4.contract.test.ts`
- `src/features/instagram-intelligence/instagram-intelligence.module.ts`
- `src/features/instagram-intelligence/runtime/instagram-c4.contract.ts`
- `src/features/instagram-intelligence/runtime/instagram-c4.persistence.ts`
- `src/features/instagram-intelligence/runtime/instagram-c4.postgres.test.ts`
- `src/features/instagram-intelligence/runtime/instagram-c4.processor.ts`
- `src/features/instagram-intelligence/runtime/instagram-c4.runtime.service.ts`
- `src/features/instagram-intelligence/runtime/instagram-content-behavior.semantic-validator.ts`

Generated backend bundle inventory for each of `instagram_content_behavior/1.1`, `instagram_audience_profile/1.0`, and `instagram_organic_performance_profile/1.0` is exactly `manifest.json` plus `artifacts/evidence_contract.yaml`, `object_contract.yaml`, `output_contract.yaml`, `processor_definition.yaml`, `reasoning_contract.yaml`, and `shared_metadata_contract.yaml`; `src/features/brand-intelligence/generated/contract-bundles/registry.json` is also changed. These 22 generated paths were produced only by the deterministic generator.

Frontend:

- `src/features/instagram-intelligence/components/instagram-b4-view.tsx`
- `src/features/instagram-intelligence/contracts/instagram-b4.schemas.ts`
- `src/features/instagram-intelligence/instagram-b4-view.test.ts`
- `src/features/instagram-intelligence/instagram-b4.contract.test.ts`
- `src/features/instagram-intelligence/testing/instagram-b4-fixture.ts`

Authority closeout changes are this file and `EXECUTION_LEDGER.md` only.

## Security, provider, and scope closeout

High-confidence secret scans of changed files, staged content, temporary logs, fixture metadata, and planned pushes found no secret material. No `.env`, token, credential, raw provider payload, signed URL, raw media, model payload, browser storage state, database volume, runtime log, or screenshot is tracked. Synthetic runtime values are omitted from evidence. Package and lock identities are unchanged.

`LIVE_GRAPH_CALLS=NONE`, `LIVE_MODEL_CALLS=NONE`, `META_PROVIDER_MUTATIONS=NONE`, `OAUTH_MUTATIONS=NONE`, `RAW_MEDIA_PERSISTED=NO`, and `NEW_MIGRATIONS=NONE`. C1, D_COMBINED, Wave E, canonical domain mutation, hidden Brand processing, cross-source reconciliation, semantic editing, and provider scope expansion were not started.

## Accounting

`C4_PRIMARY_RUNS_USED=1`, `C4_AUTHORITY_RECOVERY_PACKETS_USED=2`, `C4_RESUMED_RUNS_USED=2`, and `C4_CORRECTION_CYCLES_USED=0`. C4 is evidence-ready only and is not self-accepted.
