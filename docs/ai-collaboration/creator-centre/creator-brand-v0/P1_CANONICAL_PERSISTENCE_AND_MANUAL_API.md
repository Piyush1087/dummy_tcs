# Creator Brand V0 — P1 canonical persistence and manual API

Status: EVIDENCE_READY_FOR_CHILD_SA_PROGRAM_ORCHESTRATOR_REVIEW; not self-accepted.
P0 is ACCEPTED_BY_TECHNICAL_SA. P2 remains prohibited pending review.
This closes the preserved P1 primary implementation through correction 1 only.
No backend production/test/schema/migration source was changed in correction 1.

## Authority and exact recovery

Product V2 `2d561da03ae5df296443f32f79f24264cc8a9361`, Amendment 1 `07917b2191a6de3f0c8ffb86500abc597478fc2b`, technical handoff `0db5974c562aea96568c4e12b240cbb1ef5cd09d`, Parent authorization `7e54d3980ca3454263600e44766041dbb58e0a06`, and corrected Content authority `cb9ee23118eafb2dc156c25eb09702ea93252db4` remain the supplied lineage. No newer Product register was consumed.

Recovery began in the preserved isolated worktrees at:

| Repository / branch                            | SHA                                      | Tree                                     |
| ---------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| backend / program/creator-brand-v0-backend     | 3a919c2a9a8263c4734df87bda3ed21e092420cf | fc888dd548ef85246438327588c07bfe835d9e83 |
| frontend / program/creator-brand-v0-frontend   | 7edd26d3cdad0ec84083884b34039952368a1295 | 0cc596ca1ef1d1c4a51857125547de156e487c8b |
| authority / program/creator-brand-v0-authority | 3ea60c9faef4fdb292a1c18c490b249227560dc7 | 00c565634da85ae608a2fa3782f6cbdcf172bf1d |

Each expected Piyush1087 clone remote was independently fetched/pruned and identified; local/fetched checkpoints matched. Backend had exactly the authorized 18 paths and no staged changes; frontend/authority were clean. No packages, lockfiles, Dockerfile, predecessor migrations or unrelated source changed. The complete staged diff was exactly 18 files, 1,425 insertions, 17 deletions.

## Deterministic recovery-state manifest

Aggregate SHA-256: `34cde6ebca18b4a50cbe34727af0c9716b44f0b7b74086463b6101c5641a73c4`.

Per-file normalization is UTF-8 text with CRLF/CR converted to LF, preserving each file's final-newline state. The aggregate hashes the following exact UTF-8 manifest, including its final LF. Lines after the three headers use a literal TAB between path and normalized SHA-256.

```text
baseHead=3a919c2a9a8263c4734df87bda3ed21e092420cf
baseTree=fc888dd548ef85246438327588c07bfe835d9e83
migrationSha256=ec6484427c24d5755549ff9e71bae989f5ff592a6fc5da953ca07494b8744452
prisma/migrations/20260915100000_creator_brand_canonical_profile_revision/migration.sql	ec6484427c24d5755549ff9e71bae989f5ff592a6fc5da953ca07494b8744452
prisma/schema.prisma	639ea88b2b1a2e015103cbeedb007bc8449368c1413e976dbe6459b21bda4063
src/app.module.ts	0a46737494f738ac1e789daf3d8ffe92dd9a1fb62ea503cbd4bff0c4c012df27
src/features/creator-audience/creator-audience.postgres.test.ts	de5866ff652584a94972c2addd2c0630b04966d4811da75d34edc1b960c3b6dd
src/features/creator-brand/contracts/creator-brand-p0.contract.test.ts	48f4a8ecc14932a0ce773600e840adcd5e2932f0ea4cb411e1144d9566c4c6be
src/features/creator-brand/creator-brand-p1.postgres.test.ts	233c4921524257cf4d036e73b0c432814c2680e87792b1307ab2d7f2106efa86
src/features/creator-brand/creator-brand-p1.service.test.ts	589d9829c4f121c60d662cf84c7313065f0c2a5b4056c08a469b66cde58c3b15
src/features/creator-brand/creator-brand.controller.ts	60d2ed658c74c04f5d2f552a4c6e967c980f65f9a4e84f13c48b9b03edd368c0
src/features/creator-brand/creator-brand.module.ts	39940c00d807e2854a36e212dafc62cd14a4176fe7f1b55fc6b716de04a35473
src/features/creator-brand/creator-brand.repository.ts	020021494a0a4c688a54bf8776740fde4fca12fdb5a5a5e8fb4fb471f57c2513
src/features/creator-brand/creator-brand.service.ts	87d9d92787a95878c9c214d2c208ae1b764e91581df9f704f7226b7de3d6c537
src/features/creator-brand/dto/creator-brand-consumer.schema.ts	ff52e8f1085ac116e798df008c8ddeea32a00b2ca2365a8764ec63a46ee19daa
src/features/creator-content/creator-content.postgres.test.ts	047d00c5a10973d4bbbd770ad46010d314c63e403f6be5ae560663d4a06e1d6c
src/features/creator-settings/team/creator-team.policy.test.ts	4ab882de3880dc64ad5c8d42ee6301f64493afd58bc928289a3fe5342fbeac1a
src/features/creator-settings/team/creator-team.policy.ts	bacddbe290282728b760086f8c7d65ecba2c864ae340c328d0c0c79d739cf04e
src/features/creator-settings/team/creator-workspace-actor.service.test.ts	56f4d35103d0439e8bc0ee69d19afc8dc9e16a74dbb8dec2501c718904875d44
src/features/data-extraction/evidence/ownership/intelligence-owner-scope.postgres.test.ts	f78372d6401aa312f2a13df297bcdedb9e22298c8656351fdd078c091be996cc
src/shared/creator/creator-workspace-actor.contract.ts	52b15b92b75c875980109ce0d456bfe5e2dd44f474a71e56966772d792317bc8
```

For byte-non-mutation verification, raw-file SHA-256 baselines were also recorded before revalidation and compared again afterward and after staging/commit. All 18 remained identical:

| Path                                                                                      | Raw SHA-256                                                      |
| ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| prisma/migrations/20260915100000_creator_brand_canonical_profile_revision/migration.sql   | ec6484427c24d5755549ff9e71bae989f5ff592a6fc5da953ca07494b8744452 |
| prisma/schema.prisma                                                                      | 639ea88b2b1a2e015103cbeedb007bc8449368c1413e976dbe6459b21bda4063 |
| src/app.module.ts                                                                         | 56b7d4390bdf3a0834eded80604a49ea428a28f962276373af350126d070a4e2 |
| src/features/creator-audience/creator-audience.postgres.test.ts                           | a6eff9e516af81fd0f3e5215f02c925b963b1627faeee33762f20f54c51e81ea |
| src/features/creator-brand/contracts/creator-brand-p0.contract.test.ts                    | b894019edbd4f10943475de484d77e0cf684478eb028a1041c8544a65da2cdae |
| src/features/creator-brand/creator-brand-p1.postgres.test.ts                              | 233c4921524257cf4d036e73b0c432814c2680e87792b1307ab2d7f2106efa86 |
| src/features/creator-brand/creator-brand-p1.service.test.ts                               | 589d9829c4f121c60d662cf84c7313065f0c2a5b4056c08a469b66cde58c3b15 |
| src/features/creator-brand/creator-brand.controller.ts                                    | 60d2ed658c74c04f5d2f552a4c6e967c980f65f9a4e84f13c48b9b03edd368c0 |
| src/features/creator-brand/creator-brand.module.ts                                        | 39940c00d807e2854a36e212dafc62cd14a4176fe7f1b55fc6b716de04a35473 |
| src/features/creator-brand/creator-brand.repository.ts                                    | 020021494a0a4c688a54bf8776740fde4fca12fdb5a5a5e8fb4fb471f57c2513 |
| src/features/creator-brand/creator-brand.service.ts                                       | 87d9d92787a95878c9c214d2c208ae1b764e91581df9f704f7226b7de3d6c537 |
| src/features/creator-brand/dto/creator-brand-consumer.schema.ts                           | ff52e8f1085ac116e798df008c8ddeea32a00b2ca2365a8764ec63a46ee19daa |
| src/features/creator-content/creator-content.postgres.test.ts                             | f4fbc510a6ca6b15a15499ea409179a730c9a7d3a5e63b50b30a506b4b80d6f9 |
| src/features/creator-settings/team/creator-team.policy.test.ts                            | 86de365410edf4a9548b7febd8417258476f5933c312c0e7ed7595f5c86f24ad |
| src/features/creator-settings/team/creator-team.policy.ts                                 | fec1f0ee96904fb6095d805a0030a7a4a780ad38781248721b7d013bbcb8fb0b |
| src/features/creator-settings/team/creator-workspace-actor.service.test.ts                | fe04cd7a9a804f193842d96d895e013b26228e0ceaa45763a4c7440fb2d458bd |
| src/features/data-extraction/evidence/ownership/intelligence-owner-scope.postgres.test.ts | d4ab51b31daeeead7648fa9522588648d3dd6e7f2a5ee198e4b10249a528b2be |
| src/shared/creator/creator-workspace-actor.contract.ts                                    | d39cea4441849f6fbe06875a2a1969d4ee8357cabc6d65111bfc59b6ad3584ae |

## Domain, authorization and persistence

Exactly one additive migration `20260915100000_creator_brand_canonical_profile_revision` adds `CreatorBrandProfile` and immutable `CreatorBrandRevision`.
SQL byte SHA-256: `ec6484427c24d5755549ff9e71bae989f5ff592a6fc5da953ca07494b8744452`.
The committed chain has 102 migrations, following unchanged predecessor head `20260914191000_creator_audience_owner_scope_lineage`.

The aggregate is workspace-owned with a composite workspace/Owner FK. Current revision/snapshot consistency is deferred and constrained; revision numbers are positive, gap-free and monotonic. Immutable revision provenance binds active actor user, membership and role. P1 server-writes MANUAL only, with null future suggestion references; the origin constraint permits only the three accepted origins. There is no legacy/source-derived backfill, source FK, derived-only truth or parallel Intelligence architecture.

The existing Team actor service resolves the canonical Owner subject and active actor. Existing Team row locking serializes canonical writers, with authorization rechecked after lock acquisition. Stale CAS and different commands using the same key reject atomically. Exact idempotent replay returns the original revision/snapshot without new rows, even after later updates. Concurrent expected-revision writers commit at most one update.

Owner and Manager can READ/EDIT/CONFIRM_SUGGESTION under the frozen policy; Assistant can READ only. P1 implements READ/EDIT only, not a confirmation endpoint. Strict MANUAL validation rejects caller subject/provenance/projected identity claims. Existing taxonomies and canonical archetypes are reused: Creator empty/unconfigured or 1..3 confirmed, Campaign unchanged at 1..5, and UGC archetype never implies willingness.

## Manual API and source retention

Guarded GET/PUT `/api/v1/creator/brand` return a strict versioned `creator-brand-v0.1` consumer projection. State is unconfigured/revision 0 until canonical mutation; context is manual-first/source-independent; suggestions are NOT_IMPLEMENTED. No internal DB identity or credentials are projected.

Name/avatar remain read-only canonical Owner projections. Unsafe/credential-bearing/signed avatar references fail closed. The current eligible Settings Instagram handle is projected without selecting/decrypting credentials, and no stale legacy handle is substituted.

No Intelligence is required for manual creation/update. Provider failure, existing Settings disconnect and target-only source purge retain canonical truth. Other Creator/website source rows and historical Campaign/Application/Collaboration truth remain unchanged. No P1 Intelligence current/generation write is made.

## Preserved primary evidence

The immutable primary report `CREATOR_BRAND_V0_P1_EXTERNAL_LOCAL_CODEX_REPORT_V1` and correction prompt's explicit Technical-SA adjudication preserve these results. The implementation remained in the same worktree, matched the exact path/count/migration checkpoint, and passed correction byte-non-mutation checks. The primary did not record an aggregate 18-file digest; the manifest above is the correction recovery baseline, not an invented historical digest.

| Primary mandatory gate                                                | Result / proof                                                       |
| --------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Standards / exact Product and P0 authority                            | PASS                                                                 |
| Additive schema / exactly migration 102 / no backfill                 | PASS                                                                 |
| Clean disposable PostgreSQL all 102 migrations                        | PASS; status current; SQL/DB checksum exact                          |
| Exact 101 to 102 populated upgrade                                    | PASS; 193 predecessor table row counts/digests exact                 |
| Accepted Audience/Content fixtures at 101                             | PASS; 2 files / 10 tests; real predecessor lineage/current populated |
| Canonical ownership / immutable active-actor audit                    | PASS                                                                 |
| CAS / concurrent writers / idempotency / immutable revisions          | PASS                                                                 |
| Owner source-free create / Manager create and update                  | PASS                                                                 |
| Assistant read / denied atomic edit / anonymous and inactive denial   | PASS                                                                 |
| Tenant / workspace / Owner / actor isolation                          | PASS                                                                 |
| Runtime bounds / canonical archetype / UGC independence               | PASS                                                                 |
| Guarded authenticated GET/PUT                                         | PASS; real JWT/session contract, no bypass                           |
| Projected identity and disconnected/stale-handle truth                | PASS                                                                 |
| Failure / Settings disconnect / target purge retention                | PASS                                                                 |
| Website / other Creator / historical truth preservation               | PASS                                                                 |
| P1 PostgreSQL/API matrix                                              | PASS; 8 tests                                                        |
| Primary focused unit/contract/regression matrix                       | PASS; 13 files / 146 tests                                           |
| Post-102 Team / owner-scope / Audience / Content PostgreSQL           | PASS; 4 files / 18 tests                                             |
| Primary generate / validate / build / production typecheck            | PASS                                                                 |
| Production boot / health                                              | PASS; live 200 and health 200 with PostgreSQL up                     |
| Scoped lint / format / diff / secret and forbidden artifact scan      | PASS                                                                 |
| Frontend / packages / lockfiles / Docker / 101 predecessors unchanged | PASS                                                                 |
| Live Graph / model / Meta mutation                                    | NONE                                                                 |
| Browser matrix                                                        | NOT REQUIRED; no visible/frontend change                             |

Primary PostgreSQL counts: Owner first create 1 profile/1 revision; exact replay stable; before authenticated update target 1 profile/4 revisions and other 1 profile/1 revision; after Manager HTTP update target 1 profile/5 revisions and other unchanged. P1-created Intelligence current/generation rows were zero; historical rows were equal.

Sanitized primary health:

```json
{
  "live": { "status": "ok" },
  "health": {
    "status": "ok",
    "info": { "database": { "status": "up" } },
    "error": {},
    "details": { "database": { "status": "up" } }
  }
}
```

## Correction 1 minimal revalidation

| Command / check                                                | Result                                                             |
| -------------------------------------------------------------- | ------------------------------------------------------------------ |
| `npm run prisma:generate`                                      | PASS; Prisma 6.19.3                                                |
| `npx prisma validate`                                          | PASS using synthetic local DATABASE_URL; no DB connection required |
| `npm run build`                                                | PASS; production Nest build and prompt asset copy                  |
| Focused Vitest P0/P1/Team policy/actor tests                   | PASS; 4 files / 70 tests                                           |
| Scoped ESLint for all 16 authorized TypeScript files           | PASS                                                               |
| Scoped Prettier check for those files                          | PASS                                                               |
| Complete dirty and cached `git diff --check`                   | PASS                                                               |
| Planned-stage and staged secret/forbidden artifact scans       | PASS                                                               |
| Exact staged 18-path/blob verification and raw-byte comparison | PASS                                                               |

Exact focused command:

```text
npx vitest run src/features/creator-brand/contracts/creator-brand-p0.contract.test.ts src/features/creator-brand/creator-brand-p1.service.test.ts src/features/creator-settings/team/creator-team.policy.test.ts src/features/creator-settings/team/creator-workspace-actor.service.test.ts
```

ESLint and Prettier received precisely the authorized 16 .ts paths, not unrelated suites. PostgreSQL/browser/boot matrices were not repeated in this correction, as instructed.

A first build attempt encountered EBUSY while a concurrent cleanup scan read dist. Both operations were then serialized; the normal production build and subsequent complete scan passed without a source edit. A raw temporary-checkout comparison initially differed on CRLF; Git path-normalized blob verification matched all 105 accepted Prisma files (101 migrations). Neither event changed source or weakened a gate.

Runtime/tool predecessors: Windows 11 x64; Node 24.19.0; npm 11.17.0; Vitest 2.1.9; Docker 29.7.2; primary PostgreSQL 17.11. No system installation or dependency junction was created. Configuration names only: DATABASE_URL (correction validation); primary JWT_SECRET, AUTH_OTP_PEPPER, POSTMARK_SERVER_TOKEN, POSTMARK_OTP_TEMPLATE_ID, POSTMARK_PASSWORD_RESET_TEMPLATE_ID, JWT_ISSUER, JWT_AUDIENCE, STAGE, PORT, OFFERING_PRICE_REFRESH_ENABLED, AWS_EC2_METADATA_DISABLED, SETTINGS_FIELD_ENCRYPTION_KEY. No values are included.

## Task-local cleanup exception

CLEANUP_DISPOSITION = NON_BLOCKING_LOCAL_RUNNER_HYGIENE_EXCEPTION, explicitly authorized by correction Section 1/5.

Exact remaining regular, non-reparse paths:

- `C:/Users/piyus/Documents/Codex/2026-09-10/markdown-instagram-intelligence-external-local-codex/work/creator-brand-v0-p1/backend/dist`: ignored task-created production build output; 3,206 files at final scan; no tracked/staged inclusion.
- `C:/Users/piyus/Documents/Codex/2026-09-10/markdown-instagram-intelligence-external-local-codex/work/creator-brand-v0-p1/accepted-101`: task-created source-only extract outside all three publication repositories; not a registered worktree; 105 exact path-normalized accepted Prisma blobs and 101 migrations.

Both are within the exact isolated P1 task root. Complete file/type/content scans passed with no secret/raw media/runtime DB/provider artifact found. No symlink/junction/reparse point was traversed. No running process depends on either path; task ports 55432/55433 have zero listeners; the primary disposable container/database was removed. Standard repository-installed ignored node_modules remains an installation, not a junction or runtime database/media artifact.

One bounded native literal-path deletion attempt per path was rejected by runner policy: "blocked by policy". No alternate deletion technique was attempted. Parent-safe manual cleanup commands, only after independently confirming these exact directories remain task-owned, regular and unused:

```powershell
Remove-Item -LiteralPath 'C:/Users/piyus/Documents/Codex/2026-09-10/markdown-instagram-intelligence-external-local-codex/work/creator-brand-v0-p1/backend/dist' -Recurse -Force
Remove-Item -LiteralPath 'C:/Users/piyus/Documents/Codex/2026-09-10/markdown-instagram-intelligence-external-local-codex/work/creator-brand-v0-p1/accepted-101' -Recurse -Force
```

The staged tree was `3a12c2dccdb408d2c7d0c510ec2b7feabf2518e3`, identical to the committed tree, and includes neither dist nor accepted-101 nor a runtime .env. The pre-existing tracked .env.example blob is unchanged. Thus these remnants cannot affect the published implementation tree whether present or removed. All three task Git worktrees are clean after their respective commits. Old P0 ignored-artifact hygiene was separately adjudicated non-blocking; it was not inserted into published trees or altered in this correction.

## Publication

Backend normal non-force push and independent fetch/prune PASS:
SHA `7a78ffec1dd6a413d0a2478a8f706dfa95393a05`; tree `3a12c2dccdb408d2c7d0c510ec2b7feabf2518e3`; local/fetched equality exact; direct parent `3a919c2a9a8263c4734df87bda3ed21e092420cf`; committed migration count 102 and SQL byte checksum exact.

Frontend unchanged at `7edd26d3cdad0ec84083884b34039952368a1295` / `0cc596ca1ef1d1c4a51857125547de156e487c8b`; final fetch-back verification is required by the immutable closeout report.

Authority closeout parent remains `3ea60c9faef4fdb292a1c18c490b249227560dc7` / `00c565634da85ae608a2fa3782f6cbdcf172bf1d`. Its containing final commit/tree and post-push equality are recorded in the immutable report to avoid self-reference. Both required authorization/Content ancestors must pass before that report can mark evidence ready.

The exact content-complete correction prompt is archived in runner-prompts, permitting only CRLF/LF and one terminal-newline normalization. Source/archive content equality PASS; normalized SHA-256 both `1eec7e91d392513a782e46c24f6a1900c14c0cbccb804991dee92086ad950872`. The fenced recovery manifest was independently rehashed from this artifact and matched `34cde6ebca18b4a50cbe34727af0c9716b44f0b7b74086463b6101c5641a73c4`.

```text
P0 = ACCEPTED_BY_TECHNICAL_SA
P0_CORRECTION_CYCLES_USED = 0
P1_ACCEPTED = NO — AWAITING CHILD-SA / PROGRAM-ORCHESTRATOR REVIEW
P1_EVIDENCE_READY = YES — SUBJECT TO FINAL AUTHORITY FETCH-BACK PROOF
P1_PRIMARY_RUNS_USED = 1
P1_CORRECTION_CYCLES_USED = 1
P2 = PROHIBITED
LIVE_GRAPH_CALLS = NONE
LIVE_MODEL_CALLS = NONE
META_PROVIDER_MUTATIONS = NONE
NEW_MIGRATIONS = 1
MIGRATION_COUNT = 102
DEVELOPMENT_MERGE = NOT_PERFORMED
DEPLOYMENT = NOT_PERFORMED
```
