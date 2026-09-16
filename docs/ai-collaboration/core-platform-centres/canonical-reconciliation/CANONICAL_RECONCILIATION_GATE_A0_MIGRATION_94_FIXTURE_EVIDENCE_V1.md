# Canonical Reconciliation Gate A0 — Migration-94 Fixture Evidence V1

## Result and boundary

`CANONICAL_RECONCILIATION_GATE_A0_RESULT = PASS`

Gate A previously stopped because an immutable, sanitized, populated migration-94 input was unavailable for the independent `94 → 106` runtime-upgrade proof. Gate A0 produced and published that input as deterministic SQL containing only synthetic data. This publication proves reproducibility at migration 94 only. It is not canonical reconciliation acceptance, does not prove the upgrade to 106, and is not permission to implement reconciliation or resume a paused lane.

Next boundary: **Parent review, followed only by a separately authorized Gate A rerun consuming the pinned fixture commit and blobs below.**

## Controlling integrity and branch preflight

| Item | Expected | Observed | Result |
| --- | --- | --- | --- |
| Register commit | `346ae2a5ec58506870036db832223c996311fc29` | same | PASS |
| Register tree | `215528f9b1e077f576ef29e5b61119b08d398107` | same | PASS |
| Register path/blob | `docs/ai-collaboration/core-platform-centres/CORE_PLATFORM_CENTRES_CONSOLIDATED_ACCEPTANCE_REGISTER_V2.md` / `c9e0343794aad4a46e27882b58b98381dd4c9dcf` | same | PASS |
| Backend freeze ref/commit | `freeze/mvp-canonical-application-v1` / `129b291ecbca4a1e79451215a81726000cfb5bff` | advertised ref resolved to the expected commit | PASS |
| Backend freeze tree | `9fe6585addf8d8ccee9973b9b55cc0312c6e2b0b` | same | PASS |
| Freeze migration inventory | 94 | 94 ordered directories | PASS |
| Media Kit target commit/tree | `da1d19d15198699465040c32ce075b6be1c85faf` / `560e2b90e95c3456ac7eef7ce9351861ab04a576` | same | PASS |
| Target migration inventory | 106 | 106 ordered directories | PASS |
| Historical migrations 1–94 | unchanged | zero removed or modified; 12 additions only | PASS |
| Freeze/target merge base | exact freeze | `129b291ecbca4a1e79451215a81726000cfb5bff` | PASS |
| Backend publication branch before creation | absent | absent | PASS |
| Authority publication branch before creation | absent | absent | PASS |
| Source worktrees before mutation | clean | clean | PASS |

Immutable SHAs, trees, paths, and blobs are authority. Branch names are navigational metadata only.

## Published backend fixture

| Field | Immutable value |
| --- | --- |
| Repository | `Piyush1087/creator-commerce-backend-v2-clone` |
| Branch | `test-infra/canonical-reconciliation-migration-94-fixture-v1` |
| Base | `129b291ecbca4a1e79451215a81726000cfb5bff` |
| Fixture commit | `7a70d074eb2f3109b697c953bfa8a722bf69caf4` |
| Fixture tree | `efaa2f0f635788e862b2c39752802c520c3f3b06` |
| SQL blob | `2dc29cfed740ddd2ad4780081f68296f98c20065` |
| README blob | `d4c61e49b4698f59a717d0af951ab9b4fed007d5` |
| Manifest blob | `bce96f6f35835320711eaa93572f44e3bd832dcf` |
| Raw SQL SHA-256 | `fe27a4fed67a5cb02b507efc7dc86aaf4a17c2b281ec660f95a92f16bc488706` |
| Raw SQL bytes / lines | 19,795 / 243 |
| Fetch-back | remote ref resolved to the fixture commit; tree, three paths, three blobs, and raw SQL SHA-256 verified |

The branch contains two normal commits above the exact freeze because the final requirements audit added the explicit unaffected control cohort through a non-force fast-forward. Across the base-to-tip diff, only the three authorized fixture paths exist. The branch is test infrastructure and must not be selected as a canonical runtime branch.

## Complete migration 95–106 coverage matrix

| No. and directory | Accepted owner | SQL operation classes | Pre-94 structures and required row shape | Failure/data-loss edge exposed | Required later Gate A post-upgrade assertion | No pre-94 row possible? |
| ---: | --- | --- | --- | --- | --- | --- |
| 95 `20260911020000_instagram_de_persistence_foundation` | Instagram Intelligence V1 | enum; alter existing; constraint; index; foreign-key-ready provenance columns; no backfill; no destructive/narrowing operation | Owned-website resource, capture, capability executions, resource links, evidence, observations, support, relation, freshness, and provider-execution linkage across messaging, derived, and visual families | Existing website rows could fail widened checks or be misclassified as provider rows; partially populated provider fence would violate constraints | All 29 Data Extraction/Evidence rows preserved; website provider/account/generation fields remain null; new indexes/constraints valid; capability allowlist contains old and new vocabulary | No |
| 96 `20260912090000_c3_r0_evidence_model_derivation_provenance` | Shared Data Extraction/Evidence, accepted C3-R0 | enum; alter existing; data backfill/transformation; no destructive/narrowing operation | Four evidence rows; two exact `instagram-c2-deterministic-foundations-v1` rows, one snake_case and one camelCase, plus ordinary controls | Duplicate/unsorted supporting refs; either spelling could be skipped; unrelated rows could be incorrectly classified | Both C2 rows are `DETERMINISTIC_DERIVATION`; parent refs are sorted/deduplicated exactly; non-C2 rows retain nullable method and empty parent array | No |
| 97 `20260912170000_instagram_c1_sync_coordinator` | Instagram Intelligence V1 C1 | create-only table; constraint; index; foreign keys; no destructive/narrowing operation | Synthetic Brand/Intelligence identity prerequisites | New generation/class uniqueness or integration lineage could reject later inserts | New sync table exists empty immediately after migration; a separately created synthetic job obeys brand/integration/generation/class uniqueness without altering pre-94 rows | Yes — table is created here |
| 98 `20260914010000_instagram_w4_audio_observations` | Instagram Intelligence V1 W4 | constraint/allowlist widening; no destructive/narrowing operation | Existing capability graph across three old capability families | Drop/recreate of allowlist checks could omit an existing capability | Every old capability row remains; audio capability is admitted consistently across all affected tables | No |
| 99 `20260914185000_creator_audience_subject_enum` | Creator Audience V1 | enum extension; no destructive/narrowing operation | Creator user/profile/workspace/owner-member prerequisite chain | Existing BRAND/OFFERING enum values or rows could be disturbed | Existing BRAND subject remains; `CREATOR` enum value exists and later synthetic Creator subject can be inserted | Yes — `CREATOR` enum value does not exist at 94 |
| 100 `20260914190000_creator_audience_shared_owner_scope` | Creator Audience V1 shared owner scope | create table; alter existing; backfill; constraint; PK replacement; indexes; foreign keys; triggers; no row deletion | Complete Brand-owned Data Extraction/Evidence graph and Intelligence subject/action/object/component/current/evidence graph; creator prerequisites | Brand backfill gaps, nullable identity semantics, PK collisions, cross-owner mismatch, or lost graph links | Exactly one BRAND owner scope is created; every affected existing row receives that scope; 44 fixture rows survive; all rebuilt keys and graph relationships validate; no Creator row is falsely assigned to Brand | Partly — owner-scope rows/table are created here, but pre-94 donor rows are required for backfill |
| 101 `20260914191000_creator_audience_owner_scope_lineage` | Creator Audience V1 corrective lineage | unique indexes; lineage functions/triggers; foreign-key-style enforcement; no destructive/narrowing operation | Fully linked resource→capture→artifact→evidence→capability→observation graph and subject→object→component→current→evidence graph | Duplicate owner identities or cross-owner references that nullable legacy brand keys could miss | All indexes build; existing graph passes every trigger/lineage check; negative cross-owner substitutions fail closed in later Gate A tests | No |
| 102 `20260915100000_creator_brand_canonical_profile_revision` | Creator Brand V0 | create-only aggregate/revision tables; constraints; foreign keys; triggers/functions; no destructive/narrowing operation | ACTIVE Creator user, profile, workspace, and active OWNER membership | Actor/workspace/owner mismatch, revision gaps, malformed snapshot, mutable revision | Tables are empty immediately after migration; later deterministic revision 1 can be created with the fixture actor chain and all immutability/consistency checks pass | Yes — aggregate tables are created here |
| 103 `20260915200000_creator_work_preferences_canonical_revision` | Commercial Setup — Work Preferences | create-only aggregate/revision tables; constraints; foreign keys; triggers/functions; no destructive/narrowing operation | Same Creator ownership/actor chain | Noncanonical arrays, invalid pause shape, actor mismatch, revision gap | Empty create-only tables exist; later revision 1 insert succeeds with canonical arrays and exact actor chain; negative guards reject invalid shapes | Yes — tables are created here |
| 104 `20260915210000_creator_rate_card_canonical_revision` | Commercial Setup + Rate Card | create-only aggregate/revision tables; financial-boundary constraints; foreign keys; triggers/functions; no destructive/narrowing operation | Same Creator ownership/actor chain; deliberately no fabricated payout authority | Amount/enabled mismatch, country/currency mismatch, invalid authority source/version, actor mismatch | Empty create-only tables exist; separately constructed synthetic rate card can validate exact constraints without C06 writes, payout execution, ledger, provider call, or financial hash creation by the fixture | Yes — tables are created here |
| 105 `20260916170000_creator_portfolio_v3_canonical_item_revision` | Creator Portfolio V3 | create-only portfolio/item/revision structures; constraints; indexes; foreign keys; triggers/functions; no destructive/narrowing operation | Creator profile/workspace/active OWNER chain and deterministic public slug | Ownership, actor, ordering, revision, or immutable history mismatch | New tables begin empty; later deterministic portfolio/item revision can bind to the fixture creator and satisfy ownership/revision constraints | Yes — tables are created here |
| 106 `20260916180000_creator_media_kit_v3` | Creator Media Kit V3 | create-only Media Kit/revision/projection structures; constraints; indexes; foreign keys; triggers/functions; no destructive/narrowing operation | Creator identity/workspace/member prerequisites, public slug, and public-media-kit flag | Public versus verified-Brand projection leakage, actor mismatch, revision inconsistency | New tables begin empty; later public and verified-Brand assertions use the fixture creator while preserving projection boundaries and revision consistency | Yes — tables are created here |

Static inspection found no migration 1–94 edit, no migration removal, and no data-deleting or narrowing operation in 95–106. Gate A0 did not execute any row in this matrix; the post-upgrade assertions remain mandatory for the separately authorized Gate A rerun.

## Fixture table, row, and scenario inventory

| Table | Rows | Scenario |
| --- | ---: | --- |
| `organizations` | 2 | Separate synthetic Brand and Creator ownership roots |
| `users` | 3 | Active Brand owner; active Creator owner; isolated disabled ADMIN unaffected control with null organization/verification |
| `brand_profiles` | 1 | Synthetic D2C Brand root using `.invalid` domain |
| `creator_profiles` | 1 | Creator identity, deterministic handle/slug, public Media Kit flag |
| `creator_workspaces` | 1 | Creator workspace bound to creator organization and owner profile |
| `creator_workspace_members` | 1 | Active OWNER actor bound to user/profile/workspace |
| `data_extraction_resources` | 1 | Owned-website homepage control whose later provider field must remain null |
| `data_extraction_capability_executions` | 3 | Messaging, deterministic-derived, and visual capability families |
| `data_extraction_capability_resources` | 3 | One resource link per execution |
| `data_extraction_captures` | 1 | Completed owned-website capture with quality/freshness metadata |
| `data_extraction_content_artifacts` | 1 | Inline normalized synthetic text artifact |
| `data_extraction_evidence_items` | 4 | Ordinary message and visual evidence plus snake_case/camelCase C2 derivations |
| `data_extraction_capability_evidence` | 4 | Capability-to-evidence lineage |
| `data_extraction_semantic_observations` | 5 | Supported observations including relation endpoints |
| `data_extraction_observation_support` | 4 | Observation-to-evidence lineage |
| `data_extraction_observation_relations` | 1 | Non-self same-capability relation |
| `data_extraction_freshness_assessments` | 1 | Evidence freshness with prior-capture lineage |
| `data_extraction_provider_execution_links` | 1 | Synthetic, non-real execution reference linked to capture/execution |
| `intelligence_subjects` | 1 | Existing BRAND subject |
| `intelligence_actions` | 1 | SYSTEM migration-import action |
| `intelligence_object_generations` | 1 | Deterministic object generation with fixed hashes |
| `intelligence_component_generations` | 1 | Linked component generation at canonical path |
| `intelligence_current_components` | 1 | Current pointer linked to the generation |
| `intelligence_evidence_references` | 1 | Intelligence-to-Data-Extraction evidence lineage |
| **Total** | **44** | **24 tables; compact affected graph plus one unaffected control row** |

All IDs, timestamps, URLs, handles, hashes, text, and external references are fixed and fictional. All email and web domains use the reserved `.invalid` suffix. The SQL uses explicit column lists, one transaction, no conflict suppression, no `NOW()`/random generator, no schema DDL, and no migration-history mutation.

## Validation and reproducibility

### Environment

| Component | Version |
| --- | --- |
| OS | Microsoft Windows NT `10.0.26200.0` |
| Git | `2.55.0.windows.3` |
| Docker client/server | `29.7.2` / `29.7.2` |
| Node.js | `24.19.0` |
| npm | `11.17.0` |
| Prisma CLI/client | `6.19.3` / `6.19.3` |
| PostgreSQL client/server | `16.15` / `16.15` |

### Commands (credentials redacted)

```text
npm ci
docker run --name <unique-gate-a0-name> -e POSTGRES_PASSWORD=<redacted> -p <local-port>:5432 postgres:16-alpine
docker exec <unique-gate-a0-name> createdb -U postgres <disposable-db-1>
DATABASE_URL=<redacted> npm run db:migrate:deploy
psql -v ON_ERROR_STOP=1 -U postgres -d <disposable-db-1> -f canonical_migration_94_fixture_v1.sql
psql -v ON_ERROR_STOP=1 -U postgres -d <disposable-db-1> -c <fixture assertions>
repeat create/migrate/load/assert for <disposable-db-2>
compare ordered table-name + to_jsonb(row) snapshots for every fixed-namespace row
sha256 canonical_migration_94_fixture_v1.sql
```

### Results

| Check | Build 1 | Build 2 | Result |
| --- | --- | --- | --- |
| Empty PostgreSQL 16 database migrated from freeze | 94 completed; 0 failed/pending/rolled back | 94 completed; 0 failed/pending/rolled back | PASS |
| Fixture load, `ON_ERROR_STOP=1` | one transaction committed; 44 rows | one transaction committed; 44 rows | PASS |
| Required identity/FK chains | all assertions passed | all assertions passed | PASS |
| Snake/camel C2 inputs | one exact row each | one exact row each | PASS |
| Unaffected control cohort | one disabled isolated user | one disabled isolated user | PASS |
| Post-94 objects absent | `intelligence_owner_scopes` and migration-95 provider columns absent | same | PASS |
| Normalized inventory | `e606dde5add59ab5863725390ccffc4fad15545988ffba91062971b234265d99` | same | PASS |
| Snapshot row count | 44 | 44 | PASS |
| Fixture raw SHA-256 | `fe27a4fed67a5cb02b507efc7dc86aaf4a17c2b281ec660f95a92f16bc488706` | same file | PASS |

Secret/PII-pattern inspection passed. Matches were limited to the intentional reserved `.invalid` synthetic addresses; no secret/token/key pattern, real provider identifier, credential, customer data, or plausible personal data was found.

No dedicated pre-existing PostgreSQL migration-fixture test exists at the freeze. Gate A0 therefore used the repository-supported Prisma deploy command plus fail-fast SQL and direct relational assertions. General runtime suites were not claimed as Gate A0 passes because they are not dedicated to fixture restore and can require application environment/services beyond this bounded migration-94 proof.

## Timing telemetry

| Field | Value |
| --- | --- |
| `RUN_STARTED_AT_UTC` | `2026-09-16T22:14:20.1949501Z` |
| `EVIDENCE_PREPARED_AT_UTC` | `2026-09-16T22:29:30.1548502Z` |
| `ELAPSED_TO_EVIDENCE_PREP_SECONDS` | `909.960` |
| `COMMAND_COUNT` | `NOT_MEASURABLE` — the runner did not expose an authoritative counter |
| `LONGEST_COMMAND` | `npm ci` |
| `LONGEST_COMMAND_SECONDS` | `136.287` |
| `DEPENDENCY_INSTALL_SECONDS` | `136.287` |
| `POSTGRES_PROVISION_SECONDS` | `2.984` for dedicated container start; readiness was included in the following bounded command and not separately measurable |
| `MIGRATION_1_TO_94_SECONDS` | final independent builds: `12.827` and `10.155` |
| `FIXTURE_LOAD_SECONDS` | final independent loads: `0.527` and `0.393` |
| `FIXTURE_VALIDATION_SECONDS` | `NOT_MEASURABLE` as one complete phase stopwatch; individual assertion/fingerprint commands completed successfully |
| `PUBLICATION_SECONDS` | `NOT_MEASURABLE` as one complete phase stopwatch |
| `WAITING_OR_BLOCKED_SECONDS` | `NOT_MEASURABLE`; no external approval wait occurred |

## Publication and fetch-back proof

| Publication | Base | Tip/tree | Path boundary | Remote proof |
| --- | --- | --- | --- | --- |
| Backend fixture | `129b291ecbca4a1e79451215a81726000cfb5bff` | `7a70d074eb2f3109b697c953bfa8a722bf69caf4` / `efaa2f0f635788e862b2c39752802c520c3f3b06` | exactly three authorized fixture files | fetched into a fresh non-branch namespace; commit/tree/blobs/raw SQL hash matched |
| Authority evidence | `346ae2a5ec58506870036db832223c996311fc29` | finalized by the publishing runner | exactly this evidence path | publishing runner must fetch back and report final commit/tree/blob |

## Explicit exclusions and stop confirmation

- Migrations 95–106 were **not executed**.
- Gate A was **not rerun**.
- No main backend, frontend, or authority reconciliation branch was created.
- No frontend file changed.
- No runtime application code, schema, accepted migration, generated client, dependency, lockfile, or provider configuration changed.
- No Product or architecture decision was reopened or reinterpreted.
- No provider or network service call occurred; provider calls remain zero.
- No shared, staging, production, customer, creator, brand, or provider data was inspected or used.
- No database outside the two disposable Gate A0 databases was mutated.
- No deployment, C06 implementation, Campaign Objectives implementation, legacy retirement, Campaign Performance/Reporting resumption, Applicant AI Match resumption, or Campaign Intelligence delta work occurred.
- Campaign Intelligence and both paused lanes remain paused.
- Disposable PostgreSQL resources created by this run are to be removed after authority fetch-back verification.

`NEXT_BOUNDARY = PARENT_REVIEW_THEN_SEPARATELY_AUTHORIZED_GATE_A_RERUN`
