# C-03 Recovery Execution Ledger V1

**Artifact:** `C03_RECOVERY_EXECUTION_LEDGER_V1`  
**Module:** C-03 — Creator Campaign Participation / Apply  
**Execution line:** `c03/recovery-campaign-participation-v1`  
**Schema/migration writer:** C-03 Recovery Systems Architect (single writer)  
**Status:** IN PROGRESS

## 1. Immutable authority

| Authority | Immutable reference |
|---|---|
| Stage B | `Piyush1087/dummy_tcs@458875b939b738b8032409b6de72b6de70f53ed1` |
| Recovery baseline | `Piyush1087/dummy_tcs@7c7cae4ebe89a3d2305bd780aad784e8d9b46b79` |
| P1.1 reconstruction | `Piyush1087/dummy_tcs@685e15a9f1baf6b5979e35137464975c958a8026` |
| Backend P0 | `Piyush1087/creator-commerce-backend-v2-clone@6a2bd2e4b815462abc702dea34f7c368c24a0664` |
| Frontend P0 | `Piyush1087/creator-commerce-frontend-v2-clone@66d6a9bc992afcdfb900d7837defd867670bf640` |

The original `c03/campaign-participation-v1` execution line remains historical
and quarantined. No merge, cherry-pick, rebase, or inferred recovery from that
line is admitted here.

## 2. Checkpoint register

| Checkpoint | State | Accepted backend SHA | Migration count | Next |
|---|---|---|---:|---|
| P1.1A Campaign / Asset / Brief convergence | PASS | `7da499a0c0a9c12c8c4247dd4567726990ae8120` | 75 | P1.1B |
| P1.1B canonical Application + snapshot | PASS | `43940337184ef63338766044827234d69236aa63` | 76 | P1.1C |
| P1.1C invitation / ingress / idempotency / events | PASS | `ebad770291b411026542a7d53a7e6a30162bff2e` | 77 | P1.1D |
| P1.1D guards / locking / adapters / compatibility | PASS | `ab8d1c022ae165846a40a8737f163bdb5ba7d65c` | 78 | P1.1E |
| P1.1E PostgreSQL acceptance | PASS | `fa4c7f7b767a71c3d21a0e3835a2bbfc36bcd642` | 78 | P1.2 |
| P1.2 Opportunity entitlement/read APIs | PASS | `c2f5f1461b847f811edbf1f54e4b427366664989` | 78 | P1.3 |
| P1.3 Application commands/history | NOT STARTED | — | — | P1.2 PASS |
| P1.4 Collaboration/Notifications handoff | NOT STARTED | — | — | P1.3 PASS |

## 3. P1.1A immutable entry

| Field | Evidence |
|---|---|
| Checkpoint | `P1.1A` |
| Prior accepted SHA/tree | `6a2bd2e4b815462abc702dea34f7c368c24a0664` / `cf37ef240ac8f8d72e1b230b80830df682ba63fd` |
| Candidate backend SHA/tree | `7da499a0c0a9c12c8c4247dd4567726990ae8120` / `9077573ff87a6caec8c5bde10eacfb11dfdf5832` |
| Candidate chain | `409dcb876c0a6beb63056c06d923938b22bad574` → `705dea05b9bb9541294582ce9a4e693267c5acd1` → `7da499a0c0a9c12c8c4247dd4567726990ae8120`; linear, no merge |
| Migration | 75 total; `20260910120000_c03_campaign_asset_brief_convergence`; SQL SHA-256 `5f118afd089c5892d23c13881dc69e56555a4a58221787651d3982774816da5f` |
| Schema writer | C-03 Recovery Systems Architect; no concurrent schema/migration writer |
| Durable interval | first candidate server timestamp `2026-09-04T18:55:05Z`; accepted-run final-integrity timestamp `2026-09-04T19:06:34.4053767Z` |
| Preflight | `C03_P1_1_MIGRATION_PREFLIGHT_V1`; server timestamp `2026-09-04 19:04:55.893174+00`; `result=PASS`; exact 74 P0 names/checksums; no structural contradiction |
| Preflight artifact | ID `9950751310`; `c03-p11a-preflight-7da499a0c0a9c12c8c4247dd4567726990ae8120`; 691 bytes; digest `sha256:dc8e95c538d8a3c9640090e0c325473b876bca1bd24b3f6c737f867d3d4e8e31` |
| Disposable databases | PostgreSQL 16 `c03_p11a_fresh` (0→75) and `c03_p11a_upgrade` (exact P0 74→75) |
| Accepted workflow | run `33909193027`; job `101141317740`; conclusion `success` |
| Fetch-back | Remote SHA/tree/parent chain fetched; local branch equals `origin/c03/recovery-campaign-participation-v1`; clean tree; PASS |
| Diff review | P0→candidate complete name/status review; `git diff --check`; linear P0 ancestry; 75-directory inventory; migration checksum; scope/prohibition review; PASS |
| Unresolved ambiguity | None. Minimal legacy Brief remains compatibility-only and not C03-submit-ready, as required. |
| Verdict | `PASS` |
| Systems Architect acceptance SHA | `883cbbbd4eb95e9a313af79b82180224c6f890a5` (the immutable documentation commit that first published this PASS entry) |

### 3.1 Finite command evidence

| Command family | Outer timeout | Exit/result | Observed duration/evidence |
|---|---:|---|---|
| `npm ci` | 15m | 0 | local locked install PASS (838 packages; 29.459s fetched-back rerun); Actions PASS |
| Prisma 6.19.3 generate | 10m | 0 | local and Actions PASS |
| Prisma format check / validate | 5m each | 0 / 0 | local and Actions PASS |
| changed-file Prettier/ESLint and `git diff --check` | 2m | 0 | PASS; inherited full-repository lint debt remains outside this checkpoint |
| fresh migration deploy/status | 20m each | 0 / 0 | PostgreSQL 16, 75 migrations, up to date |
| exact-P0 migration deploy, seed, read-only preflight, candidate deploy/status | 20m / 5m / 10m / 20m / 20m | all 0 | 74→75 PASS; Brief/Deliverable preservation and backfill assertions PASS |
| P1.1A PostgreSQL negative test | 20m | 0 | 1 file / 5 tests; 555ms Vitest duration |
| canonical Campaign/Brief focused tests | 30m | 0 | 5 files PASS; 1.33s Vitest duration |
| full test suite | 45m | 0 | 185 files and 1,233 tests PASS; 45 files / 615 environment-gated tests skipped; 64.45s Vitest duration |
| production build | 20m | 0 | `nest build` plus prompt-asset copy PASS |
| final repository integrity | 2m | 0 | `git diff --exit-code` and empty porcelain PASS |

### 3.2 Bounded corrections

The initial remote run `33908470414` exposed a P0 fixture physical-column
name mismatch (`brand_name`, not `name`). Correction commit
`705dea05b9bb9541294582ce9a4e693267c5acd1` fixed only that fixture. Run
`33908963609` then exposed PostgreSQL parameter typing for
`IndustryVertical`; correction commit
`7da499a0c0a9c12c8c4247dd4567726990ae8120` added the explicit enum cast.
These were the two permitted bounded correction passes. The final run reran
the complete gate successfully; no failure was waived.

### 3.3 Independent acceptance review

P1.1A is internally consistent and safe to stop: canonical Campaign/Asset/
Brief persistence and adapters are present; legacy rows remain readable; no
Application, invitation, ingress, receipt, event, Collaboration, Notification,
frontend, provider, AWS, or production behavior was introduced. Required
fresh and upgrade PostgreSQL evidence exists, and the accepted remote tree is
clean and fetched back.

```text
P1_1A = PASS
NEXT_AUTHORIZED_INTERNAL_CHECKPOINT = P1.1B
```

## 4. P1.1B immutable entry

| Field | Evidence |
|---|---|
| Checkpoint | `P1.1B` |
| Prior accepted SHA/tree | `7da499a0c0a9c12c8c4247dd4567726990ae8120` / `9077573ff87a6caec8c5bde10eacfb11dfdf5832` |
| Candidate backend SHA/tree | `43940337184ef63338766044827234d69236aa63` / `fc4beee002921bcf252edf9def60960f4ccb64dd` |
| Candidate chain | Direct child of accepted P1.1A; linear, no merge. The local construction commit was not treated as authority; the GitHub-created commit above was fetched back and is the checkpoint identity. |
| Migration | 76 total; `20260910120500_c03_application_snapshot_foundation`; SQL SHA-256 `2bdba21e6c625aff5c2c8dccca2b23bcf9f4df5adb21a9a23525024123aafdf2` |
| Schema writer | C-03 Recovery Systems Architect; no concurrent schema/migration writer |
| Durable interval | local checkpoint start `2026-09-04T19:14:02Z`; accepted-run final-integrity timestamp `2026-09-04T19:38:28.1724884Z` |
| Preflight | `C03_P1_1_MIGRATION_PREFLIGHT_V1`; scope `P1.1A_B_CAMPAIGN_APPLICATION_SNAPSHOT`; server timestamp `2026-09-04 19:36:44.719291+00`; `result=PASS`; exact 74 P0 names/checksums; six legacy statuses; no structural contradiction |
| Evidence artifact | ID `9951772279`; `c03-p11b-upgrade-43940337184ef63338766044827234d69236aa63`; 2,474 bytes; digest `sha256:cb5b8528fcc692ba9030e505b4f98e2d5589824e21b65a5991284ff2eb4f3021` |
| Disposable databases | PostgreSQL 16 `c03_p11b_fresh` (0→76), `c03_p11b_upgrade74` (exact P0 74→76), and `c03_p11b_upgrade75` (accepted P1.1A 75→76) |
| Accepted workflow | run `33911969790`; job `101150222887`; conclusion `success`; run interval `2026-09-04T19:35:48Z`–`2026-09-04T19:38:30Z` |
| Fetch-back | Remote SHA/tree/parent fetched; local branch equals `origin/c03/recovery-campaign-participation-v1`; clean tree; PASS |
| Diff review | P1.1A→candidate complete name/status review; exact tree comparison before publication; `git diff --check`; linear ancestry; 76-directory inventory; migration checksum; scope/prohibition review; PASS |
| Unresolved ambiguity | None. All historical rows remain `LEGACY_COMPATIBILITY` at `statusVersion=0`; no row was promoted or synthesized. |
| Verdict | `PASS` |
| Systems Architect acceptance SHA | `1f754be161fec1e3b8f5d89b98c712fdebf0bea7` (the immutable documentation commit that first published this PASS entry) |

### 4.1 Finite command evidence

| Command family | Outer timeout | Exit/result | Observed duration/evidence |
|---|---:|---|---|
| Prisma 6.19.3 generate | 10m | 0 | local and Actions PASS |
| Prisma format check / validate | 5m each | 0 / 0 | local and Actions PASS |
| changed-file Prettier/ESLint and `git diff --check` | 2m | 0 | PASS |
| fresh migration deploy/status | 20m each | 0 / 0 | PostgreSQL 16, 76 migrations, up to date |
| exact-P0 deploy, six-status seed, read-only preflight, candidate deploy/status | 20m / 5m / 10m / 20m / 20m | all 0 | 74→76 PASS; all six statuses and JSON snapshot partitions preserved without rewrite |
| P1.1A deploy, seed, candidate deploy/status | 20m / 5m / 20m / 20m | all 0 | 75→76 PASS; Application/snapshot invariants preserved |
| P1.1B PostgreSQL negatives | 20m | 0 | 1 file / 5 tests; 612ms Vitest duration; authority shapes, composite ancestry/actor FKs, partial uniqueness, write closure, and snapshot FK/catalog assertions PASS |
| legacy Brand compatibility tests | 30m | 0 | 2 files / 9 tests; 748ms Vitest duration |
| full test suite | 45m | 0 | 185 files and 1,233 tests PASS; 46 files / 620 environment-gated tests skipped; 64.65s Vitest duration |
| production build | 20m | 0 | `nest build` plus prompt-asset copy PASS |
| final repository integrity | 2m | 0 | `git diff --exit-code` and empty porcelain PASS |

### 4.2 Independent acceptance review

P1.1B is internally consistent and safe to stop. The one existing Application/
snapshot family now carries an explicit legacy-versus-canonical discriminator,
canonical Campaign→Asset→Brief and actor/Owner-subject identities, active
same-opportunity uniqueness, versioned snapshot fields, and restrictive core
FKs. Existing rows remain byte-semantics-preserved legacy compatibility rows.
The temporary database guard keeps canonical writes closed until P1.1D installs
the complete transactional guard family. No invitation, ingress, receipt,
event, Application command, Collaboration, Notification, frontend, provider,
AWS, or production behavior was introduced.

```text
P1_1B = PASS
NEXT_AUTHORIZED_INTERNAL_CHECKPOINT = P1.1C
```

## 5. P1.1C immutable entry

| Field | Evidence |
|---|---|
| Checkpoint | `P1.1C` |
| Prior accepted SHA/tree | `43940337184ef63338766044827234d69236aa63` / `fc4beee002921bcf252edf9def60960f4ccb64dd` |
| Candidate backend SHA/tree | `ebad770291b411026542a7d53a7e6a30162bff2e` / `47c2921ca970e7093ed3fff1faae05941f435fbd` |
| Candidate chain | Direct child of accepted P1.1B; linear, no merge; exact local tree was reproduced through GitHub Git objects and fetched back. |
| Migration | 77 total; `20260910121000_c03_invitation_ingress_idempotency_events`; SQL SHA-256 `728ddc96ebd81284efabacafc3ff0f0bfc3260bb2c1f8ad47abb7fa30bd2cbf2` |
| Schema writer | C-03 Recovery Systems Architect; no concurrent schema/migration writer |
| Durable interval | checkpoint start `2026-09-04T19:41:53Z`; accepted-run final-integrity timestamp `2026-09-04T20:03:41.1213581Z` |
| Preflight | `C03_P1_1_MIGRATION_PREFLIGHT_V1`; server timestamp `2026-09-04 20:01:42.086839+00`; `result=PASS`; exact 74 P0 names/checksums; six Application statuses and seeded continuation inventoried before DDL |
| Evidence artifact | ID `9952544639`; `c03-p11c-upgrade-ebad770291b411026542a7d53a7e6a30162bff2e`; 2,953 bytes; digest `sha256:7bc6deb5210709525a25575367da620ded7b4b58a3d6dc9fb3d793a0c88524f8` |
| Disposable databases | PostgreSQL 16 `c03_p11c_fresh` (0→77), `c03_p11c_upgrade74` (exact P0 74→77), `c03_p11c_upgrade76` (accepted P1.1B 76→77), `c01_i1_p11c`, and `c01_i5_p11c` |
| Accepted workflow | run `33914067966`; job `101157041963`; conclusion `success`; run interval `2026-09-04T20:00:44Z`–`2026-09-04T20:03:43Z` |
| Fetch-back | Remote SHA/tree/parent fetched; local branch equals `origin/c03/recovery-campaign-participation-v1`; clean tree; PASS |
| Diff review | P1.1B→candidate complete name/status review; exact tree comparison; `git diff --check`; linear ancestry; 77-directory inventory; migration checksum; digest-only/catalog, no-route, write-closed, and checkpoint-prohibition review; PASS |
| Unresolved ambiguity | None. No invitation, ingress, event, receipt, or canonical Application was synthesized during upgrade. Existing continuation credentials, Campaign binding, timestamps, and consumption state were preserved. |
| Verdict | `PASS` |
| Systems Architect acceptance SHA | `2fec05bf2ebec33aad8b66f929b60760116df927` (the immutable documentation commit that first published this PASS entry) |

### 5.1 Finite command evidence

| Command family | Outer timeout | Exit/result | Observed duration/evidence |
|---|---:|---|---|
| Prisma 6.19.3 generate / format / validate | 10m / 5m / 5m | 0 / 0 / 0 | local and Actions PASS |
| changed-file Prettier/ESLint and `git diff --check` | 2m | 0 | PASS |
| fresh migration deploy/status | 20m each | 0 / 0 | PostgreSQL 16, 77 migrations, up to date |
| exact-P0 seed/preflight/candidate deploy/status | 5m / 10m / 20m / 20m | all 0 | 74→77 PASS; six legacy Applications/snapshots and direct continuation byte-semantics preserved; typed continuation defaults proved; zero synthesized C-03 rows |
| accepted-P1.1B seed/candidate deploy/status | 5m / 20m / 20m | all 0 | 76→77 PASS; six legacy Applications/snapshots and direct continuation preserved |
| P1.1C PostgreSQL negatives | 20m | 0 | 1 file / 6 tests; 646ms Vitest duration; invitation, ingress, continuation, receipt, event, Application-reference, digest-only, catalog, and write-closure assertions PASS |
| C-01 persistence PostgreSQL regression | 30m | 0 | 1 file / 22 tests; 1.01s Vitest duration |
| C-01 continuation PostgreSQL regression | 30m | 0 | 1 file / 21 tests; 2.06s Vitest duration |
| architecture/transport/cookie/legacy focused suite | 30m | 0 | 7 files / 35 tests; 1.43s Vitest duration |
| full test suite | 45m | 0 | 186 files and 1,237 tests PASS; 47 files / 626 environment-gated tests skipped; 67.71s Vitest duration |
| production build | 20m | 0 | `nest build` plus prompt-asset copy PASS |
| final repository integrity | 2m | 0 | `git diff --exit-code` and empty porcelain PASS |

### 5.2 Independent acceptance review

P1.1C is internally consistent and safe to stop. Invitation and ingress
credentials are digest/HMAC-only, Campaign ancestry is physical, subject
binding and revocation are monotonic, continuation transport behavior remains
the accepted C-01 direct default, and receipt/event rows are scoped and
append-only. Application attribution references are composite Campaign-bound.
Canonical Application writes remain database-closed pending the complete
P1.1D guard family. No invitation/ingress route, policy decision, Application
command, event producer, Collaboration, Notification, frontend, provider,
AWS, or production behavior was introduced.

```text
P1_1C = PASS
NEXT_AUTHORIZED_INTERNAL_CHECKPOINT = P1.1D
```

## 6. P1.1D immutable entry

| Field | Evidence |
|---|---|
| Checkpoint | `P1.1D` |
| Prior accepted SHA/tree | `ebad770291b411026542a7d53a7e6a30162bff2e` / `47c2921ca970e7093ed3fff1faae05941f435fbd` |
| Candidate backend SHA/tree | `ab8d1c022ae165846a40a8737f163bdb5ba7d65c` / `58aaec4187ff030016f6f7cae49a32c5bd87c080` |
| Candidate chain | `b7614e9698351f51181fad4b6be66daeca542853` → `9752975bab19db6c28c4e98d10eff43ad35936ba` → `ab8d1c022ae165846a40a8737f163bdb5ba7d65c`; linear from accepted P1.1C, no merge; every remote commit was fetched back before the next pass |
| Migration | 78 total; `20260910121500_c03_integrity_guards_and_legacy_compatibility`; SQL SHA-256 `fa2265935e0878ac45e533cb6ac87079ad12b665fafcc53c250a63a513fb83b5` |
| Schema writer | C-03 Recovery Systems Architect; no concurrent schema/migration writer |
| Durable interval | first candidate server timestamp `2026-09-04T20:37:26Z`; accepted-run final-integrity timestamp `2026-09-04T20:48:20.8834592Z` |
| Preflight | `C03_P1_1_MIGRATION_PREFLIGHT_V1`; server timestamp `2026-09-04 20:46:46.218894+00`; `result=PASS`; exact 74 P0 names/checksums and representative legacy Application/continuation state inventoried before DDL |
| Evidence artifact | ID `9953899108`; `c03-p11d-evidence-ab8d1c022ae165846a40a8737f163bdb5ba7d65c`; 3,560 bytes; digest `sha256:4080bfde75257aae474ba2da4f14b656ef4083d299275548aada9608cda36b70`; retained through `2026-10-04T20:48:20Z` |
| Disposable databases | PostgreSQL 16 `c03_p11d_fresh` (0→78), `c03_p11d_upgrade74` (exact P0 74→78), `c03_p11d_upgrade77` (accepted P1.1C 77→78), `c01_i1_p11d`, `c01_i5_p11d`, and `c05_p11d` |
| Accepted workflow | run `33917838865`; job `101169028287`; conclusion `success`; run interval `2026-09-04T20:45:50Z`–`2026-09-04T20:48:24Z` |
| Fetch-back | Remote SHA/tree/parent chain fetched; local branch equals `origin/c03/recovery-campaign-participation-v1`; clean tree; PASS |
| Diff review | P1.1C→candidate complete name/status review; exact tree comparison; `git diff --check`; linear ancestry; 78-directory inventory; migration checksum; permanent-guard-before-write-open ordering; adapter/legacy/service/lock/prohibition review; PASS |
| Unresolved ambiguity | None. The canonical write-closed trigger is removed only after all permanent guards exist; no public canonical route, command, Collaboration, or Notification behavior is present. |
| Verdict | `PASS` |
| Systems Architect acceptance SHA | `90850151341a709901ee187b15f59112ecc9ded2` (the immutable documentation commit that first published this PASS entry) |

### 6.1 Finite command evidence

| Command family | Outer timeout | Exit/result | Observed duration/evidence |
|---|---:|---|---|
| Prisma 6.19.3 generate / format / validate | 10m / 5m / 5m | 0 / 0 / 0 | local and Actions PASS |
| changed-file Prettier/ESLint and `git diff --check` | 2m | 0 | PASS |
| fresh migration deploy/status | 20m each | 0 / 0 | PostgreSQL 16, 78 migrations, up to date |
| exact-P0 seed/preflight/candidate deploy/status | 5m / 10m / 20m / 20m | all 0 | 74→78 PASS; six-status legacy Application/snapshot and direct continuation evidence preserved |
| accepted-P1.1C seed/candidate deploy/status | 5m / 20m / 20m | all 0 | 77→78 PASS; snapshot and continuation before/after invariants preserved |
| P1.1D PostgreSQL guards/lock suite | 20m | 0 | 1 file / 6 tests; 802ms Vitest duration; both deferred insertion orders, incomplete commits, actor/identity/version/delete/terminal guards, lock serialization, and catalog assertions PASS |
| C-01 persistence PostgreSQL regression | 30m | 0 | 1 file / 22 tests; 798ms Vitest duration |
| C-01 continuation PostgreSQL regression | 30m | 0 | 1 file / 21 tests; 1.79s Vitest duration |
| C-05 PostgreSQL regression | 30m | 0 | 1 file / 5 tests; 990ms Vitest duration |
| architecture/adapter/legacy regression | 30m | 0 | 10 files / 52 tests; 1.53s Vitest duration |
| full test suite | 45m | 0 | 187 files and 1,243 tests PASS; 48 files / 632 environment-gated tests skipped; 49.87s Vitest duration |
| production build and startup smoke | 20m / 5m | 0 / 0 | `nest build`, prompt assets, and bounded backend bootstrap PASS |
| final repository integrity | 2m | 0 | `git diff --exit-code` and empty porcelain PASS |

### 6.2 Bounded corrections

The initial remote run `33917165547` proved all three migration lanes but
correctly stopped before the negative suite because its wrong-role actor
fixture violated the pre-existing C-01 requirement for an active Brand User
to belong to a Brand Organization. Commit
`9752975bab19db6c28c4e98d10eff43ad35936ba` corrected only that prerequisite.
Run `33917528409` then exposed reuse of one active opportunity across
independent deferred-evidence fixtures; the accepted partial unique index
correctly rejected the collision. Commit
`ab8d1c022ae165846a40a8737f163bdb5ba7d65c` isolated every case onto its own
Campaign→Asset→Brief opportunity and bound the terminal event to the matching
ancestry. These were the two permitted bounded correction passes. The final
run reran the complete gate; no failure was waived.

### 6.3 Independent acceptance review

P1.1D is internally consistent and safe to stop. Permanent canonical
Application/snapshot/event/delete and terminal-transition guards replace the
temporary write closure atomically; actor/Owner-subject evidence is checked;
Campaign lifecycle writes use the shared row-lock seam; canonical reads use
one adapter; and legacy Brand Application behavior rejects canonical rows.
The accepted A–C PostgreSQL evidence plus the final-schema D guard/catalog
suite covers the checkpoint implementation delta. P1.1E now performs the
required consolidated final-schema rerun of every manifest negative case and
both fresh/legacy acceptance lanes; no skipped P1.1E case may be waived.

```text
P1_1D = PASS
NEXT_AUTHORIZED_INTERNAL_CHECKPOINT = P1.1E
```

## 7. P1.1E immutable entry

| Field | Evidence |
|---|---|
| Checkpoint | `P1.1E` |
| Prior accepted SHA/tree | `ab8d1c022ae165846a40a8737f163bdb5ba7d65c` / `58aaec4187ff030016f6f7cae49a32c5bd87c080` |
| Candidate backend SHA/tree | `fa4c7f7b767a71c3d21a0e3835a2bbfc36bcd642` / `76597080c6089225936e94a301ea0dc78474eb62` |
| Candidate chain/scope | Direct child of accepted P1.1D; evidence-only workflow, deterministic fixture allowlists, and PostgreSQL acceptance test; no Prisma schema, migration SQL, runtime service, controller, or DTO change |
| Migration | 78 total; no P1.1E migration; all four accepted P1.1 migration checksums verified byte-exact |
| Durable interval | candidate server timestamp `2026-09-04T21:07:25Z`; accepted workflow interval `2026-09-04T21:07:28Z`–`2026-09-04T21:11:24Z` |
| Preflight | `C03_P1_1_MIGRATION_PREFLIGHT_V1`; server timestamp `2026-09-04 21:08:26.36959+00`; `result=PASS`; exact P0 74-migration state with representative minimal Brief, six legacy Applications/snapshots, and continuation inventoried before upgrade |
| Fresh/negative artifact | ID `9954510992`; 7,784 bytes; digest `sha256:4d324ba65404ec324d253a18ce5a06f9d78647fe392ae138c8ef7a0063935869`; retained through `2026-10-04T21:08:30Z` |
| Legacy-upgrade artifact | ID `9954510586`; 6,245 bytes; digest `sha256:f5cb2cc3361398ddbcac969e971774d29bf20c83d4c95b87f2b9b66243784dac`; retained through `2026-10-04T21:08:29Z` |
| Runtime artifact | ID `9954593995`; 15,278 bytes; digest `sha256:d270a1b35f110dc1d1bf9415a76c0c6108671b7e771c48078c10b37632dbe738`; retained through `2026-10-04T21:11:17Z` |
| Accepted workflow | run `33919602630`; fresh/negative job `101174638045`, legacy-upgrade job `101174637754`, runtime job `101174915949`; all `success` |
| Fetch-back | Candidate SHA/tree fetched before CI; branch equals `origin/c03/recovery-campaign-participation-v1`; all three jobs independently proved empty porcelain and no schema/migration drift from P1.1D |
| Unresolved ambiguity | None. No skipped acceptance case, failed/unfinished migration, unvalidated constraint, temporary write-closed trigger, synthesized canonical row, timeout, or unexplained write remains. |
| Verdict | `PASS`; aggregate `P1.1 = PASS` |
| Systems Architect acceptance SHA | `4e97062df1b5050251efb63e71c8817a7f0a77a9` (the immutable documentation commit that first published this PASS entry) |

### 7.1 Independent PostgreSQL lanes and finite evidence

| Lane/command family | Outer timeout | Result/evidence |
|---|---:|---|
| Fresh PostgreSQL 16 0→78 deploy/status | 20m each | PASS; 78 finished, zero failed/rolled-back rows; all constraints validated; permanent catalog present; temporary write closure absent |
| Full manifest negative matrix | 20m per file | PASS; 21/21 final-schema manifest tests (1.12s), 5/5 Brief/Deliverable tests (559ms), and 6/6 deferred-evidence/lock tests (966ms); matrix maps all required cases 1–24; zero skipped |
| Exact P0 PostgreSQL 16 74→78 | 20m per deploy/status | PASS; exact 74 base, read-only preflight, then 78 finished migrations |
| Seeded legacy invariants | 10m preflight; bounded SQL assertions | PASS; six legacy statuses including `SUPERSEDED`; Application IDs/selections/timestamps and five snapshot JSON partitions byte-semantics preserved; minimal Brief and continuation bytes preserved; all legacy rows remain discriminator/version 0; zero invitation/ingress/event/receipt synthesis |
| Prisma 6.19.3 generate / format / validate | 10m / 5m / 5m | PASS; retained logs |
| Architecture/adapter/legacy suite | 30m | 10 files / 52 tests PASS; 2.12s Vitest duration |
| Full test suite | 45m | 187 files and 1,243 tests PASS; 49 files / 653 environment-gated tests skipped outside the explicit P1.1E database run; 72.11s Vitest duration |
| Production build / startup smoke | 20m / 3m | PASS; `nest build`, prompt-asset copy, bounded backend bootstrap and HTTP root probe |
| Final repository integrity | 2m | PASS in all three jobs; no schema/migration delta from accepted P1.1D and empty porcelain |

### 7.2 Independent acceptance review

P1.1E is internally consistent and complete. The fresh lane proves the final
78-migration catalog and every required negative PostgreSQL case. The seeded
lane proves exact P0 upgrade without heuristic promotion, destructive rewrite,
or synthesized canonical history. The dependent runtime lane proves existing
C-01/C-05, Brand compatibility, canonical adapter, full-suite, build, and
startup behavior. No Product or architecture question arose.

```text
P1_1A = PASS
P1_1B = PASS
P1_1C = PASS
P1_1D = PASS
P1_1E = PASS
P1_1 = PASS
NEXT_AUTHORIZED_PHASE = P1.2
```

## 8. P1.2 immutable acceptance entry

Systems Architect final review accepted P1.2 on 2026-09-05. This entry binds
that supplied acceptance verdict and the previously executed evidence; the
documentation binding itself performs no runtime, frontend, Product,
architecture, schema, migration, AWS, or provider operation.

| Field | Evidence |
|---|---|
| Checkpoint | `P1.2 — Opportunity entitlement/read APIs` |
| Prior accepted backend SHA/tree | `fa4c7f7b767a71c3d21a0e3835a2bbfc36bcd642` / `76597080c6089225936e94a301ea0dc78474eb62` |
| Semantic/runtime candidate SHA/tree | `d401f658fd321cbe171bf3f86bf18ac3e9a8fb3e` / `3dda92cad06cdb851879266511b261b1e86a50a4` |
| Final accepted backend SHA/tree | `c2f5f1461b847f811edbf1f54e4b427366664989` / `62ed8af61f3e7c40c7a20a60b142507696062872` |
| Final parent | `d401f658fd321cbe171bf3f86bf18ac3e9a8fb3e` |
| Backend chain | `fa4c7f7b767a71c3d21a0e3835a2bbfc36bcd642` → `d401f658fd321cbe171bf3f86bf18ac3e9a8fb3e` → `c2f5f1461b847f811edbf1f54e4b427366664989` |
| Linear | YES |
| Merge/rebase/cherry-pick | NONE |
| Migration count | 78 |
| Schema changes | NONE IN P1.2 |
| Migration changes | NONE IN P1.2 |
| Schema blob / migrations tree | `2aa416f265f6fc6fc5ac2f7561f4755e6c1d5c99` / `f0cce974cd5744999e49cd1d137e6b1d68de3b62`; Git-object identity authoritative |
| Backend publication | Both candidate commits pushed normally and fetched back with exact SHA/tree, linear parents and clean worktree; PASS |
| Verdict | `PASS`; Systems Architect final acceptance supplied by `C03_P1_2_DURABLE_ACCEPTANCE_BINDING_V1` |
| Systems Architect acceptance SHA | `a4b90f7795eef45a1c64b2b1b172db8570f03a36` (the immutable documentation commit that first published this P1.2 PASS entry) |

### 8.1 Recovery and correction history

1. **Attempt 1 — STOP:** zero registered recovery worktrees; implementation
   none.
2. **Attempt 2 — bootstrap PASS, then STOP:** dedicated invitation-HMAC
   configuration remained unresolved, together with raw checkout EOL
   ambiguity; implementation none.
3. **Systems correction:** froze dedicated C-03 invitation identity HMAC
   configuration and made Git-object schema/migration identity authoritative.
   CRLF checkout bytes alone no longer blocked acceptance.
4. **Initial P1.2 implementation:** used two bounded implementation
   corrections, then stopped on the required C-01 Creator Entry architecture
   regression. The unfinished full-suite/lint/startup acceptance was not
   represented as passing.
5. **Systems-authorized residual lane:** restored accepted C-01 platform-entry
   semantics, preserved stricter C-03 Opportunity semantics, and fixed HMAC
   whitespace configuration rejection. The existing C-01 architecture test
   was preserved. No additional residual implementation correction was
   required. A retained I1 fixed-token fixture collision was resolved through
   explicitly authorized recreation of only its disposable database, followed
   by a passing rerun. The completed semantic/runtime candidate was
   `d401f658fd321cbe171bf3f86bf18ac3e9a8fb3e`.
6. **Final Systems review finding:** the SST deployment environment omitted
   the dedicated HMAC runtime projection.
7. **Final residual correction:** one config-only correction added the
   dedicated stage-source lookup and canonical runtime projection in SST,
   documented deployment inputs, and added a static configuration test.
   Application runtime behavior was unchanged. Final accepted candidate:
   `c2f5f1461b847f811edbf1f54e4b427366664989`.

```text
ORIGINAL_CORRECTION_COUNT_P1_2 = 2
P1_2_RESIDUAL_LANE = 1
P1_2_RESIDUAL_CORRECTION_COUNT = 1
P1_2_RESIDUAL_CORRECTION_BUDGET_REMAINING = 0
```

### 8.2 Accepted semantic/runtime evidence

Evidence belongs to semantic/runtime candidate
`d401f658fd321cbe171bf3f86bf18ac3e9a8fb3e`; it was not re-executed by this
docs-only acceptance binding.

| Gate | Accepted result |
|---|---|
| Pure policy matrix | 4,864 PASS |
| Focused gate | 4,994 PASS |
| Full backend suite | 6,162 PASS, 0 FAIL; 192 files passed; 49 files / 653 canonical guarded tests skipped; normal completion |
| P1.2 PostgreSQL | 9/9 PASS |
| C-01 I1 PostgreSQL persistence | 22/22 PASS |
| C-01 I5 PostgreSQL continuation | 21/21 PASS |
| C-05 Team PostgreSQL | 5/5 PASS |
| C-01/C-03 boundary | Eight focused cases PASS; accepted C-01 formula and stricter C-03 gate remain distinct; Insights non-gating |
| Lint / format | PASS / PASS |
| Production build / startup smoke | PASS / PASS; HTTP 200 |
| Security review | PASS |
| Schema/migration integrity | PASS; 78 migrations, no P1.2 delta |

### 8.3 Accepted final configuration evidence

Evidence belongs to config-only direct child
`c2f5f1461b847f811edbf1f54e4b427366664989`.

| Gate | Accepted result |
|---|---|
| Focused config/HMAC/C-01–C-03 tests | 38/38 PASS |
| Full backend suite | 6,156 PASS, 0 FAIL; 192 files passed; 50 files / 662 canonical guarded tests skipped; normal completion |
| Lint / format | PASS / PASS |
| Production build / startup smoke | PASS / PASS; HTTP 200 with deterministic non-production HMAC runtime configuration |
| Security review | PASS; no alternate-secret reuse, logging or real key |
| PostgreSQL | Not rerun by explicit config-only authority; accepted d401f658 evidence retained |
| SST deploy | NOT EXECUTED |
| AWS / production access | NONE / NONE |
| Provider change | NONE |

### 8.4 Accepted P1.2 contracts and exclusions

- `CampaignOpportunityPolicyService` and `TEASER` / `LOCKED` / `AUTHORIZED`
  projections with structural pre-gate commercial/Brief redaction.
- Creator Team VIEW/APPLY capability projection; Assistant does not gain
  unrelated Settings administration or pending-withdrawal capability.
- Provider-neutral six-state Opportunity Instagram evaluator, distinct from
  accepted C-01 platform-entry semantics.
- `ELIGIBLE` / `INELIGIBLE` / `UNAVAILABLE` eligibility and PUBLIC /
  ELIGIBLE / INVITE entitlement.
- Invitation credential exchange, intended-subject verification and monotonic
  invitation binding.
- Typed C-01 Campaign continuation, safe ingress attribution and a
  non-enumerating Creator Opportunities collection.

Accepted routes:

```text
GET /api/v1/campaign-opportunities/:campaignId
POST /api/v1/campaign-opportunities/:campaignId/apply-continuation
GET /api/v1/creator/campaigns/opportunities

P1.3 Application mutation = NOT INCLUDED
P1.4 Collaboration/Notifications = NOT INCLUDED
```

### 8.5 Operational deployment prerequisite

Later human/developer environment provisioning must supply dedicated secrets:

```text
Deployment sources:
C03_INVITATION_IDENTITY_HMAC_PEPPER_DEV
C03_INVITATION_IDENTITY_HMAC_PEPPER_PROD

Canonical runtime variable:
C03_INVITATION_IDENTITY_HMAC_PEPPER

real secret provisioning = NOT PERFORMED BY P1.2
AWS secret/config mutation = NOT PERFORMED
production configuration = NOT PERFORMED
```

SST selects PROD for prod and DEV for all non-prod deployed stages, then
projects the canonical unsuffixed runtime key. The unsuffixed variable also
remains the local/direct backend runtime input. This is an operational
deployment prerequisite, not an open P1.2 Product or architecture blocker.

### 8.6 Systems Architect verdict and execution boundary

```text
P1_2 = PASS
P1_2_ACCEPTED_BACKEND_SHA = c2f5f1461b847f811edbf1f54e4b427366664989
P1_2_ACCEPTED_BACKEND_TREE = 62ed8af61f3e7c40c7a20a60b142507696062872
PRODUCT_QUESTIONS = NONE
ARCHITECTURE_CONFLICTS = NONE
SECURITY_BOUNDARY_CHANGES = NONE
NEXT_INTERNAL_CHECKPOINT = P1.3
P1_3_EXECUTION = NOT STARTED AT TIME OF P1.2 ACCEPTANCE BINDING
P1_4_EXECUTION = NOT STARTED
P2_EXECUTION = NOT STARTED
NEXT_AUTHORIZED_BOUNDARY = SA_REVIEW_ONLY
```

## 9. Current continuation

```text
LAST_ACCEPTED_CHECKPOINT = P1.2
CURRENT_CHECKPOINT = P1.3
P1_3_EXECUTION = NOT STARTED AT TIME OF P1.2 ACCEPTANCE BINDING
P1_4_EXECUTION = NOT STARTED
P2_STATE = NOT STARTED
P2_EXECUTION = NOT_AUTHORIZED
NEXT_AUTHORIZED_BOUNDARY = SA_REVIEW_ONLY
```
