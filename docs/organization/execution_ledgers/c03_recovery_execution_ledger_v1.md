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
| P1.3 Application commands/history | PASS | `4780c4924e85039a3cbb9e235b7c3af5a8b4e7dd` | 78 | P1.4 |
| P1.4 Collaboration/Notifications handoff | PASS | `4b51d52de6d9206545b0a38497c7436bc9d3e095` | 79 | P2 |
| P1 aggregate backend | PASS | `4b51d52de6d9206545b0a38497c7436bc9d3e095` | 79 | P2 |
| P2 frontend contract | PASS | `4b51d52de6d9206545b0a38497c7436bc9d3e095` (unchanged P1) | 79 (unchanged) | P3 |
| P3 backend runtime acceptance | PASS | `8bedbebf9712b6ffe0acb11339813787ef669e62` | 79 (unchanged) | P4 — NOT STARTED |
| P4 frontend runtime acceptance | PASS | `8bedbebf9712b6ffe0acb11339813787ef669e62` (unchanged backend integration authority) | 79 (unchanged) | P5 — NOT STARTED |

### Current checkpoint after P3 acceptance

```text
P1 = PASS
P2 = PASS
P3 = PASS
LAST_ACCEPTED_CHECKPOINT = P3
CURRENT_CHECKPOINT = P4
P3_RUNTIME_ACCEPTED_BACKEND_SHA = 8bedbebf9712b6ffe0acb11339813787ef669e62
P3_RUNTIME_ACCEPTED_BACKEND_TREE = 0c9a87f688388533911730b4b77cbc08f75c640b
P4_ARCHITECTURAL_ELIGIBILITY = YES
P4_STATE = NOT STARTED AT TIME OF P3 ACCEPTANCE BINDING
P4_EXECUTION = NOT AUTHORIZED BY THIS ASSIGNMENT
P5_STATE = NOT STARTED
NEXT_AUTHORIZED_BOUNDARY = SA_REVIEW_ONLY
```

Earlier immutable checkpoint entries below retain their historical state at acceptance.

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

## 9. P1.3 immutable acceptance entry

Systems Architect final technical review accepted P1.3 through
`C03_P1_3_DURABLE_ACCEPTANCE_BINDING_V1`. This entry records that supplied
verdict and previously executed evidence. This docs-only binding performs
no backend runtime, frontend, Product, architecture, schema, migration, AWS,
production, or provider operation. No test/build rerun is claimed here.

| Field | Evidence |
|---|---|
| Checkpoint | `P1.3 — Application commands and history` |
| Prior accepted backend SHA | `c2f5f1461b847f811edbf1f54e4b427366664989` |
| Prior accepted backend tree | `62ed8af61f3e7c40c7a20a60b142507696062872` |
| Final accepted backend SHA | `4780c4924e85039a3cbb9e235b7c3af5a8b4e7dd` |
| Final accepted backend tree | `fdb482942380dbc1cbf086de5907fac798b3e004` |
| Backend chain | `c2f5f1461b847f811edbf1f54e4b427366664989` → `4780c4924e85039a3cbb9e235b7c3af5a8b4e7dd` |
| Linear | YES; one direct child |
| Merge/rebase/cherry-pick | NONE |
| Migration count | 78 |
| Schema changes | NONE |
| Migration changes | NONE |
| Backend publication | One coherent P1.3 commit, non-force push, exact SHA/tree fetch-back and clean worktree; PASS |
| Verdict | `PASS`; supplied Systems Architect acceptance |
| Systems Architect acceptance SHA | `05e26f6d220a490d107556a3ecb72dfe358ea13a` (the immutable documentation commit that first published this P1.3 PASS entry) |

### 9.1 Full correction history

1. **Initial implementation:** focused Application tests passed; real
   PostgreSQL exposed mapped Asset-column failures. The ordinary full suite
   also exposed legacy-retirement and test-fixture issues.
2. **Correction 1:** fixed exact physical Asset/Brief SQL mapping,
   PostgreSQL advisory-lock return typing, test fixture placement, the legacy
   Apply retirement assertion, and historical Creator projection/evidence
   checks. Result: PostgreSQL **55 PASS / 1 test-assertion failure**. The
   database correctly rejected duplicate receipt scope; the assertion expected
   a constraint name instead of the returned column tuple.
3. **Correction 2:** fixed the receipt uniqueness assertion to SQLSTATE
   `23505` and the exact four-column scope (`command_type`, `actor_user_id`,
   `authority_subject_id`, `idempotency_key_digest`); added
   history-after-invitation-expiry coverage. Result: PostgreSQL **57/57 PASS**
   and focused **4918/4918 PASS**.
4. **Final integration review — STOP:** canonical `Idempotency-Key` was
   missing from the global CORS allowlist. The runner stopped under
   `P1_3_CORRECTION_BUDGET_EXHAUSTED`; it did not publish the blocked candidate.
5. **Systems-authorized residual lane:** preserved the unpublished P1.3
   candidate, added canonical `Idempotency-Key` to bootstrap CORS, and added
   CORS/header regression coverage plus real compiled-Nest OPTIONS preflights.
6. **Residual correction 1:** fixed test-only Nest constructor metadata
   required by Vitest, following the repository's HTTP-test pattern. No
   Application/domain behavior changed.
7. **Final result:** all residual and complete acceptance gates passed;
   the coherent P1.3 candidate was committed, pushed, and fetched back.

```text
ORIGINAL_CORRECTION_COUNT_P1_3 = 2
P1_3_RESIDUAL_LANE = 1
P1_3_RESIDUAL_CORRECTION_COUNT = 1
P1_3_RESIDUAL_CORRECTION_BUDGET_REMAINING = 0
```

### 9.2 Accepted implementation contract

- Canonical Submit revalidates the current actor/Owner subject and accepted
  P1.2 Opportunity policy at submission time.
- `Idempotency-Key` command contract, digest-only `ApplicationCommandReceipt`,
  and immutable `C03_APPLICATION_SNAPSHOT_V1`.
- Same-opportunity/reapply rules, subject×Campaign quota **<= 2**, and
  subject×Brand quota **<= 5**; safe first/conversion attribution.
- Durable `application.submitted`, `application.rejected`,
  `application.withdrawn`, and `application.expired` events.
- My Applications and Application detail; Owner/Manager pending Withdraw;
  Assistant historical VIEW without Withdraw authority.
- Brand canonical Applicant adapter and Reject, bounded internal Expire,
  and legacy Creator Apply retirement.

Canonical Creator routes:

```text
POST /api/v1/creator/campaigns/:campaignId/applications
GET /api/v1/creator/applications
GET /api/v1/creator/applications/:applicationId
POST /api/v1/creator/applications/:applicationId/withdraw
```

Brand canonical surfaces:

```text
GET /api/v1/brand-uce/campaigns/:campaignId/applications
POST /api/v1/brand-uce/campaigns/:campaignId/applications/:applicationId/reject
POST /api/v1/brand-uce/campaigns/:campaignId/applications/:applicationId/approve

FAIL_CLOSED_PENDING_P1_4_HANDOFF =
C03_CANONICAL_APPLICATION_HANDOFF_NOT_AVAILABLE
```

Canonical Approve intentionally fails closed. No canonical APPROVED
Application is committed without its required P1.4 Collaboration handoff.

```text
POST /api/v1/creator-uce/campaigns/:campaignId/apply
→ 410 LEGACY_APPLICATION_ENDPOINT_RETIRED
```

### 9.3 Accepted concurrency and PostgreSQL evidence

P1.3 PostgreSQL total: **57/57 PASS**, including:

- Same Idempotency-Key/same request replay, same key/changed fingerprint
  conflict, and different-key same-opportunity contention.
- Owner + Assistant same-opportunity race; subject×Campaign and subject×Brand
  concurrent quota races.
- Withdraw vs Reject, Reject vs Expire, and Withdraw vs Expire: one durable
  terminal winner without history rewrite.
- Snapshot exactly-one constraint and immutability; Application deletion,
  identity/selection mutation, and status-transition guards.
- Append-only event guards, event-version uniqueness, same-opportunity
  database uniqueness, and receipt scope uniqueness.

| Retained affected PostgreSQL regression | Accepted result |
|---|---|
| P1.2 Opportunity | 9/9 PASS |
| C01 I1 persistence | 22/22 PASS |
| C01 I5 continuation | 21/21 PASS |
| C05 Team | 5/5 PASS |

The CORS-only residual changed no Application/domain/database implementation.
It did not require a PostgreSQL rerun and retained the previously completed
57/57 domain/database evidence. This docs-only binding also reruns no database
tests.

### 9.4 Final accepted candidate evidence

| Gate | Accepted result |
|---|---|
| Focused residual/regression | 4947 PASS, 0 FAIL |
| Full backend suite | 6187 PASS, 0 FAIL; 719 canonical guarded skips; 194 files passed, 52 skipped; normal completion |
| Changed-file format | PASS |
| Changed-file lint | PASS |
| Production build | PASS |
| Startup smoke | PASS |
| Real Creator OPTIONS preflight | PASS; submit and withdraw |
| Real Brand OPTIONS preflight | PASS; reject and approve |
| CORS mutation proof | PASS; Application, snapshot, event and receipt counts unchanged; preflight does not enter the command |
| Security diff review | PASS |
| Schema/migration integrity | PASS; 78 migrations; no delta |

### 9.5 Security boundary

```text
canonical command header = Idempotency-Key
compatibility CORS header = x-idempotency-key
x-idempotency-key is NOT canonical command authority
raw Idempotency-Key = not persisted; not logged; not echoed
Application responses = Cache-Control: private, no-store
historical Application reads = current Creator Team authorization
historical Application reads require current Instagram usability = NO
AWS / production / live provider activity = NONE
```

The residual preserves the existing origin and credential policy; it adds no
wildcard credential allowance or origin relaxation. Real preflights accept
the canonical header without reflecting credential values. Missing canonical
keys and compatibility-only keys remain rejected by canonical commands.

### 9.6 P1.4 boundary carried forward

```text
P1_4 = NOT STARTED
```

P1.4 remains responsible for the frozen narrow atomic handoff:

```text
canonical PENDING → APPROVED
+ unique Application-sourced Collaboration
+ approved Application event
+ Creator notification intent
```

P1.3 did not implement Collaboration provisioning, Notification dual-scope
persistence, negotiation implementation, Creator Brief Pack, or frontend.
Recording the next checkpoint does not authorize or begin that implementation.

### 9.7 Systems Architect verdict and execution boundary

```text
P1_3 = PASS
P1_3_ACCEPTED_BACKEND_SHA = 4780c4924e85039a3cbb9e235b7c3af5a8b4e7dd
P1_3_ACCEPTED_BACKEND_TREE = fdb482942380dbc1cbf086de5907fac798b3e004
PRODUCT_QUESTIONS = NONE
ARCHITECTURE_CONFLICTS = NONE
SECURITY_BOUNDARY_CHANGES = NONE
NEXT_INTERNAL_CHECKPOINT = P1.4
P1_4_EXECUTION = NOT STARTED AT TIME OF P1.3 ACCEPTANCE BINDING
P2_EXECUTION = NOT STARTED
NEXT_AUTHORIZED_BOUNDARY = SA_REVIEW_ONLY
```

## 10. P1.4 immutable acceptance entry

Systems Architect final technical verdict supplied through
`C03_P1_4_DURABLE_ACCEPTANCE_AND_P1_BACKEND_CONTRACT_FREEZE_V1` accepts P1.4
and declares P1 backend implementation complete. This docs-only binding
records the accepted execution evidence; it does not rerun tests/builds or
modify any runtime, frontend, schema, migration, Product or architecture.
Historical entries above retain their checkpoint-time exclusions and verdicts.

| Field | Evidence |
|---|---|
| Checkpoint | P1.4 — Collaboration / Notifications handoff |
| Prior accepted backend SHA | `4780c4924e85039a3cbb9e235b7c3af5a8b4e7dd` |
| Prior accepted tree | `fdb482942380dbc1cbf086de5907fac798b3e004` |
| Accepted backend SHA | `4b51d52de6d9206545b0a38497c7436bc9d3e095` |
| Accepted backend tree | `0df8adf9a4a45089918dc0f5d3cccd9f4317fede` |
| Chain | `4780c4924e85039a3cbb9e235b7c3af5a8b4e7dd` → `4b51d52de6d9206545b0a38497c7436bc9d3e095` |
| Linear | YES; one direct child |
| Merge/rebase/cherry-pick | NONE |
| Migration | `20260910122000_c03_application_handoff_notifications` |
| Migration count | 78 → 79 |
| Historical CRLF-transformed migration SQL SHA-256 (corrected by P3 evidence authority below) | `55d8dd3cc66264a45a6ad9e8838894d446915d9e55a5e4e128980367d4f7c96b` |
| Historical reported checksum method (evidence identity superseded by P3 correction below) | SHA-256 of exact SQL bytes extracted by `git archive` from accepted backend commit; checkout EOL conversion is not migration identity |
| Backend publication | Non-force push, exact fetch-back SHA/tree, clean worktree; PASS |
| Verdict | PASS; supplied Systems Architect acceptance |

### 10.1 Actual bounded correction history

1. **Initial implementation:** five focused failures: three prohibited
   provisional fixture transitions, one finite test timeout, and one obsolete
   P1.3 notification-ban assertion. Initial lint/build reached finite timeout
   before completion; neither was represented as passing.
2. **Correction 1:** replaced prohibited fixture state with legal DISABLED
   state, updated the assertion to now-authorized transactional notification
   behavior, and corrected finite PostgreSQL test bounds. Duplicate Creator
   membership fixtures then exposed the existing C05 uniqueness constraint.
3. **Correction 2:** asserted existing C05 duplicate-membership rejection,
   retained one recipient per active User, preserved legacy Collaboration
   response metadata, and added explicit worker/replay/race proof.
4. **Final:** all mandatory gates PASS; no third correction.

```text
P1_4_CORRECTION_COUNT = 2
P1_4_CORRECTION_BUDGET_REMAINING = 0
```

### 10.2 Accepted persistence and commercial handoff

`Collaboration.sourceApplicationId` is unique immutable canonical Application
lineage: exactly one Collaboration per approved Application at commit.
Global Campaign × Creator uniqueness is removed for canonical source rows;
legacy Campaign × Creator uniqueness remains for `sourceApplicationId IS NULL`.
Different approved sibling Applications may create independent Collaborations
for the same Creator × Campaign.

`Collaboration.handoffCommercialState` uses `FIXED_AGREED` or
`AWAITING_CREATOR_PROPOSAL`; legacy rows remain null. FIXED final commercial
basis is the immutable Application snapshot fixed offer, with Creator proposal
null, Brand counter null and `negotiationRound = 0`. NEGOTIABLE begins
`AWAITING_CREATOR_PROPOSAL`, with Creator proposal, Brand counter and
agreed/final amount all null and `negotiationRound = 0`.

```text
canonical brief synthesis = NONE
canonical product synthesis = NONE
legacy pipeline Collaboration synthesis = NONE
canonical provisional User creation = NONE
canonical inventory mutation = NONE
canonical sibling supersession = NONE
canonical 30/70 initialization = NONE
```

### 10.3 Atomic approval invariant

```text
PENDING Application
→ APPROVED
→ Application-sourced Collaboration
→ application.approved event
→ Creator notification job + recipient snapshot
→ command receipt
→ COMMIT
```

All steps share one transaction. Approved Application without Collaboration
is INVALID. Approved event without matching Collaboration is DATABASE REJECTED.
`ApplicationDomainEvent.approvedCollaborationId` binds the approved transition
to its matching Collaboration. One Application has at most one Collaboration;
different sibling Applications for the same Creator × Campaign may have
independent Collaborations. Replay does not duplicate handoff or output.

### 10.4 Notification dual scope and delivery

Notification and NotificationJob require exactly one scope: Brand workspace
OR Creator workspace, never both/neither. Brand compatibility `workspaceId`
references `BrandProfile`; `creatorWorkspaceId` references `CreatorWorkspace`.
Semantic uniqueness is independent for Brand and Creator scopes.

| Durable Application event | Accepted output |
|---|---|
| `application.submitted` | Brand `campaigns.application_received` |
| `application.approved` | Creator `campaigns.application_approved` |
| `application.rejected` | Creator `campaigns.application_rejected` |
| `application.withdrawn` | Durable event only |
| `application.expired` | Durable event only |

Creator recipients are active OWNER, MANAGER and ASSISTANT memberships with
an active bound User, deduplicated by User ID. Associated email, Instagram
handle and historic actor are not recipient authority. Payloads contain only
accepted safe IDs. Creator in-app is REQUIRED; email registry policy is
OPTIONAL. Without canonical Creator opt-in authority, accepted current P1
behavior is NOT_REQUIRED email recipient status. This is not a future Product
decision and does not waive the required in-app obligation.

```text
GET  /api/v1/creator/notifications
GET  /api/v1/creator/notifications/unread-count
PATCH /api/v1/creator/notifications/:notificationId/read
POST /api/v1/creator/notifications/mark-all-read
```

These routes require current active C05 Creator Team membership, current
canonical Creator workspace and current User recipient. Current Instagram
usability is NOT REQUIRED. Brand/cross-workspace/cross-recipient access remains
excluded, with non-enumerating read-mark 404s and private/no-store responses.

### 10.5 Accepted evidence

| Gate | Accepted result |
|---|---|
| Fresh 0→79 migration replay | PASS |
| 78→79 upgrade | PASS; captured original fields/rows and first 78 migration checksums preserved |
| Legacy Collaboration preservation | PASS |
| Legacy Notification preservation | PASS |
| P1.4 PostgreSQL approval/notification | 30/30 PASS; one combined suite, not two separate counts |
| Focused PostgreSQL total | 100/100 PASS, including the 30 P1.4 cases |
| Existing Brand Notification PostgreSQL | 14/14 PASS |
| P1.3 regression | PASS; 57 PostgreSQL command/history/contention cases within focused total |
| P1.2 regression | PASS; 9 PostgreSQL cases within focused total |
| C01 regression | PASS; 75 tests including 21 continuation PostgreSQL; 77 unrelated guarded skips |
| C05 regression | PASS; 123 tests including 5 Team PostgreSQL |
| Collaboration regression | PASS; 4 legacy PostgreSQL cases within focused total |
| Notification regression | PASS; 31 engine/policy/worker tests plus 2 separately enabled operational PostgreSQL tests |
| Focused complete gate | 5041 PASS; zero failures/skips/timeouts |
| Full ordinary backend suite | 6187 PASS, 0 FAIL, 753 guarded skips; 194 files passed, 54 skipped; normal completion |
| Format / lint | PASS / PASS |
| Production build / startup smoke | PASS / PASS |
| Security review | PASS |
| AWS / production / live provider | NONE / NONE / NONE |

Previously produced runner artifacts are
`C03_P1_4_CODEX_CHECKPOINT_REPORT_V1` and `C03_P1_4_EVIDENCE_BUNDLE.zip`.
This entry records their accepted evidence rather than claiming a docs-only
runtime rerun. The required PostgreSQL families executed separately from the
ordinary suite total 140 cases (100 focused + 14 Brand notifications +
21 C01 + 5 C05); these overlap the listed regression totals and are not additive to
all test counts above.

## 11. P1 aggregate freeze and current continuation

The derived frozen interface/state contract is
[`C03_BACKEND_API_STATE_CONTRACT_V1`](../architecture/c03/c03_backend_api_state_contract_v1.md).
It extracts accepted routes, projection fields, states, role capabilities,
idempotency/reapply/quota rules, initial Collaboration handoff, notification
scope/delivery and exact implemented reason codes from accepted backend P1
and frozen Stage B authority. It adds no architecture or Product decision.

```text
P1.1 = PASS
P1.2 = PASS
P1.3 = PASS
P1.4 = PASS
P1 = PASS
P1_BACKEND_IMPLEMENTATION = COMPLETE
C03_BACKEND_API_STATE_CONTRACT_V1 = FROZEN
P1_BACKEND_ACCEPTED_SHA = 4b51d52de6d9206545b0a38497c7436bc9d3e095
P1_BACKEND_ACCEPTED_TREE = 0df8adf9a4a45089918dc0f5d3cccd9f4317fede
LAST_ACCEPTED_CHECKPOINT = P1.4
CURRENT_CHECKPOINT = P2
NEXT_INTERNAL_CHECKPOINT = P2
P2_STATE = NOT STARTED
P2_EXECUTION = NOT STARTED AT TIME OF P1 FREEZE
P2_AUTHORIZATION = NOT AUTHORIZED BY THIS ASSIGNMENT
PRODUCT_QUESTIONS = NONE
ARCHITECTURE_CONFLICTS = NONE
NEXT_AUTHORIZED_BOUNDARY = SA_REVIEW_ONLY
```

Creator Brief Pack remains P5 responsibility, not an accepted P1 endpoint.
Frontend implementation and post-acceptance C04 workflow commands are outside
this freeze. AWS, production and live provider operations are outside P1
acceptance. Publication stops at SA review; P2 does not begin here.

Systems Architect acceptance SHA =
`71b449546a7f5d3ef627576e82013fb0ff887d25`

This immutable acceptance record binds P1.4 and the P1 aggregate freeze.

## 12. P2 immutable frontend acceptance and current continuation

The Systems Architect substantive P2 review passed under `C03_P2_ENTRY_PROOF_AND_DURABLE_FRONTEND_CONTRACT_FREEZE_V1`; final acceptance was conditional only on the two entry proofs below and this durable binding. Both proofs pass. Earlier P1 checkpoint statements remain historical; this entry is the current continuation authority.

Starting recovery authority: `706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb`. The completed audit is reused without repeating its 135 states or 447 occurrences: 135 states, 9 proposed surfaces, 11 current route entries, 71 reuse entries, 15 reference entries, 62 reason/status/message mappings, 447 occurrences across 71 files.

```text
P1 = PASS
P2 = PASS
P2_FRONTEND_STATE_FAMILY_REGISTER = ACCEPTED
P2_CURRENT_FRONTEND_REUSE_AUDIT = PASS
P2_ACCEPTED_REFERENCE_REUSE_AUDIT = PASS
P2_AURORA_CONSTRUCTION_ASSESSMENT = PASS
P2_STITCH_DECISION = NOT_REQUIRED
P2_REQUIRED_VISUAL_AUTHORITY = ACCEPTED
P2_FRONTEND_SEMANTIC_ACCESSIBILITY_GATE = PASS
STITCH_EXECUTOR_ACCESS = READY
P2_TYPED_FIXTURE_ENTRY_COVERAGE = PASS
FRONTEND_AUTHORITY_SHA = 323658d4b147b95b5629ff8d91fa90b8fe9077e4
P1_BACKEND_AUTHORITY_SHA = 4b51d52de6d9206545b0a38497c7436bc9d3e095
LAST_ACCEPTED_CHECKPOINT = P2
CURRENT_CHECKPOINT = P3
P3_STATE = NOT STARTED
P4_STATE = NOT STARTED
P5_STATE = NOT STARTED
PRODUCT_QUESTIONS = NONE
BACKEND_CONTRACT_GAPS = NONE
DESIGN_GAPS = NONE
NEXT_AUTHORIZED_BOUNDARY = SA_REVIEW_ONLY
```

## Entry proofs

STITCH_EXECUTOR_ACCESS = READY

Tool registry exposed `mcp__stitch_gv__list_projects`. Calling it with `{}` succeeded (isError=false), returning 51 accessible projects. Example resource: `projects/14541378723209492964`. Recorded UTC: `2026-09-05T17:46:45.939Z`. This was one non-mutating metadata/list call. No project/screen creation, generation, modification, deletion, configuration change or generation quota request occurred. Access proof does not promote any returned project content to design authority.

P2_TYPED_FIXTURE_ENTRY_COVERAGE = PASS

All sources below are in `Piyush1087/creator-commerce-backend-v2-clone@4b51d52de6d9206545b0a38497c7436bc9d3e095`, tree `0df8adf9a4a45089918dc0f5d3cccd9f4317fede`. Coverage is inspection of accepted typed tests/fixtures and production types, not a fresh runtime test run or new frontend fixture implementation. The finite policy fixture provides the access matrix; Prisma-backed fixtures provide realistic UUID ancestry, canonical commercials, rich Briefs/Deliverables, actors and immutable Applications. No material requested family lacks accepted typed authority.

| Family | Representative coverage | Exact accepted source | Typed evidence | Verdict |
|---|---|---|---|---|
| Opportunity projections | TEASER; LOCKED; AUTHORIZED | `src/features/campaign-opportunities/opportunity-policy.test.ts:187` (blob `46333864c93caf80c4150d46d92998c58a774100`) | Typed OpportunityPolicyInput/CampaignRead finite matrix asserts all three projection branches and structural redaction; OpportunityAccess discriminated union in src/features/campaign-opportunities/campaign-opportunity-policy.service.ts. | PASS |
| Visibility | PUBLIC / EVERYONE; ELIGIBLE_ONLY; INVITE_ONLY / INVITED_ONLY | `src/features/campaign-opportunities/opportunity-policy.test.ts:115` (blob `46333864c93caf80c4150d46d92998c58a774100`) | Typed literal visibility dimension exercises all three accepted persisted values; frozen contract owns public names. | PASS |
| Instagram | NOT_CONNECTED; CONNECTED_HEALTHY; REVALIDATION_REQUIRED; RECONNECT_REQUIRED; PROVIDER_BLOCKED_RECOVERABLE; DISCONNECTED_IDENTITY_RETAINED | `src/features/campaign-opportunities/opportunity-policy.test.ts:21` (blob `46333864c93caf80c4150d46d92998c58a774100`) | Persisted-state objects evaluated by evaluateInstagramOpportunity; six expected lifecycle outputs and exact recovery actions asserted. | PASS |
| Eligibility | ELIGIBLE; INELIGIBLE; UNAVAILABLE | `src/features/campaign-opportunities/opportunity-policy.test.ts:121` (blob `46333864c93caf80c4150d46d92998c58a774100`) | Typed eligibility dimension and actual policy result; no Boolean-only fixture authority. | PASS |
| Invitation | VALID; required/ABSENT; EXPIRED; REVOKED; SUBJECT_MISMATCH | `src/features/campaign-opportunities/opportunity-policy.test.ts:126` (blob `46333864c93caf80c4150d46d92998c58a774100`) | InvitationResult typed finite dimension. Generic non-enumerating suppression remains policy-owned; not every matrix cell discloses an invitation reason. | PASS |
| Invitation required reason | INVITATION_REQUIRED from ABSENT in proven context | `src/features/campaign-opportunities/campaign-opportunity-policy.service.ts:146` (blob `5d93e75ebc8a0edcfe37f1c36450b89b4e658b71`) | Accepted typed policy explicitly maps ABSENT to REQUIRED when this branch is reached; initial unproven absence remains generic. Other typed authority allowed by entry-proof instruction. | PASS |
| Commercial model and intentional zero | FIXED; NEGOTIABLE; explicit offer 0 | `src/features/campaign-applications/applications.postgres.test.ts:705` (blob `b22deae0fee96e511ebea1d17e6dac61e38b80e5`) | Prisma-backed parameterized test uses FIXED_FEE/NEGOTIABLE; snapshot asserts decimal-string zero and projected model; no Creator proposal. | PASS |
| Brand support present | receivesBrandSupport=true; PRODUCT; explicit estimated value0 | `src/features/campaign-applications/applications.postgres.test.ts:713` (blob `b22deae0fee96e511ebea1d17e6dac61e38b80e5`) | Accepted Prisma update in zero-offer test; canonical snapshot preserves support estimate. | PASS |
| Brand support absent | receivesBrandSupport=false | `test/fixtures/c03-application-fixtures.ts:213` (blob `74b454ef71a8edaa80e8cf53418adcf360b05418`) | Typed Prisma campaignFixture persists canonical version1 commercial offer/currency with support absent; reused in successful command/history suites. | PASS |
| Commercial unavailable | UNAVAILABLE; legacy/missing authored evidence rejected | `src/features/brand-uce/services/canonical-campaign-application-read.service.test.ts:106` (blob `ed827ae1c6ef0913ec394fa4d3443d95e8598886`) | Accepted adapter fixture and actual typed projection assertion reject missing canonical commercial provenance; production ReturnType is CampaignRead. | PASS |
| Single valid pair | One selectable canonical Asset/Brief pair | `src/features/campaign-applications/applications.postgres.test.ts:579` (blob `b22deae0fee96e511ebea1d17e6dac61e38b80e5`) | Real Prisma campaignFixture called with briefCount1; typed selection returns paired UUIDs, command outcome checked. | PASS |
| Multiple pairs | Three Brief pairs beneath one Brand Asset | `test/fixtures/c03-application-fixtures.ts:179` (blob `74b454ef71a8edaa80e8cf53418adcf360b05418`) | Typed Prisma fixture creates published Briefs and ordered Deliverables; selection(i) returns exact associated pair. Used by sibling tests. | PASS |
| Brand-only Asset | BRAND Asset; no product/stock prerequisite | `test/fixtures/c03-application-fixtures.ts:218` (blob `74b454ef71a8edaa80e8cf53418adcf360b05418`) | Real canonical Asset persisted with kind BRAND, active status and published associated Briefs. | PASS |
| Unavailable Asset and Brief | Paused Asset; Draft Brief; mismatched pair | `src/features/campaign-applications/applications.postgres.test.ts:155` (blob `b22deae0fee96e511ebea1d17e6dac61e38b80e5`) | Prisma state mutations exercise asset/brief/mismatch rejection; typed command authority and no Application/receipt assertions. | PASS |
| Pending Application | PENDING | `src/features/campaign-applications/applications.postgres.test.ts:317` (blob `b22deae0fee96e511ebea1d17e6dac61e38b80e5`) | Accepted real submit creates Pending row and blocking duplicate case. | PASS |
| Terminal Application states | WITHDRAWN; EXPIRED; REJECTED | `src/features/campaign-applications/applications.postgres.test.ts:316` (blob `b22deae0fee96e511ebea1d17e6dac61e38b80e5`) | Real withdraw/expire/reject transitions establish accepted typed terminal states and reapply/quota behavior. | PASS |
| Approved Application and link | APPROVED; collaborationId | `src/features/campaign-applications/application-handoff.postgres.test.ts:99` (blob `ad2126e29690c583c7abb1a1d5c872241a0a95c6`) | Real approval asserts APPROVED/statusVersion2, one linked Collaboration/event/job/receipt and history.detail collaborationId. | PASS |
| Sibling Applications | Independent sibling rows; two approved Collaborations | `src/features/campaign-applications/application-handoff.postgres.test.ts:153` (blob `ad2126e29690c583c7abb1a1d5c872241a0a95c6`) | Real selected Brief0/Brief1 commands and concurrent approval outcomes preserve distinct Application-sourced Collaborations. | PASS |
| Actor role | OWNER; MANAGER; ASSISTANT | `src/features/campaign-applications/applications.postgres.test.ts:54` (blob `b22deae0fee96e511ebea1d17e6dac61e38b80e5`) | Prisma-backed role matrix uses creatorFixture/teamFixture, separates actor from Owner business subject and snapshots current role. | PASS |
| Historical access without usable Instagram | Disconnected Instagram; history collection/detail readable for all three roles | `src/features/campaign-applications/applications.postgres.test.ts:352` (blob `b22deae0fee96e511ebea1d17e6dac61e38b80e5`) | Test disconnects provider and archives/mutates current Campaign/Brief, then verifies immutable history and role-specific canWithdrawPending. | PASS |

### Durable artifacts and frozen scope

- [Complete accepted state register](../architecture/c03/c03_frontend_state_family_register_v1.md)
- [Frozen frontend execution contract](../architecture/c03/c03_frontend_execution_contract_v1.md)
- [Preserved full P2 runner report](../../ai-collaboration/c03-p2-frontend-state-and-reuse-preflight-report-v1.md), SHA-256 `27f6d6f5915b7a6da77e0b4e8c481ae8f08088153f639c2f7500866b055d86ef`

P2 freezes the canonical Campaigns routes, current C05 auth/guard decomposition, bounded notification presentation, rejected legacy semantics, current/reference/Aurora visual authority, responsive/accessibility requirements, and mandatory P4 actor-action compatibility correction. NEW_UIUX_DESIGN_REQUIRED = NO; STITCH_REQUIRED = NO. No frontend/backend source, Product, architecture, P3/P4/P5 execution, provider configuration, or generation is changed.

Only the four authorized documentation files are changed. No runtime tests are required or rerun; accepted backend fixture/test source is inspected as coverage authority. Commit A records acceptance; the following binding commit will cite Commit A in this entry and the execution contract, with no self-referential SHA. Publication stops at SA review.

Systems Architect acceptance SHA =
c821d5b55194c50726a0b253ad32f211a3097682

## P3 durable backend runtime acceptance

Authorization: `C03_P3_DURABLE_BACKEND_RUNTIME_ACCEPTANCE_BINDING_V1`. Systems Architect verdict: **P3 = ACCEPTED**. Starting recovery authority: `6cb664cf9361755e24bc85a9c600311301082739`. This entry supersedes earlier current-checkpoint snapshots without rewriting their acceptance history.

```text
P1_BACKEND_SEMANTIC_ACCEPTED_SHA = 4b51d52de6d9206545b0a38497c7436bc9d3e095
P1_BACKEND_SEMANTIC_ACCEPTED_TREE = 0df8adf9a4a45089918dc0f5d3cccd9f4317fede
P3_BACKEND_RUNTIME_ACCEPTED_SHA = 8bedbebf9712b6ffe0acb11339813787ef669e62
P3_BACKEND_RUNTIME_ACCEPTED_TREE = 0c9a87f688388533911730b4b77cbc08f75c640b
P3_RUNTIME_PARENT_SHA = 4b51d52de6d9206545b0a38497c7436bc9d3e095
```

The P3 runtime is a direct transport/security correction descendant of the frozen P1 semantic backend. C03 Product semantics and API/state semantics are UNCHANGED. P4 must consume `C03_BACKEND_API_STATE_CONTRACT_V1` as semantic contract and `8bedbebf9712b6ffe0acb11339813787ef669e62` as runtime integration backend. P4 is architecturally eligible but not started or authorized by this binding.

### Checksum evidence correction history

```text
P3_INITIAL_BLOCKED_RUN = MIGRATION_CHECKSUM_DRIFT
DIAGNOSIS = LINE_ENDING_EVIDENCE_IDENTITY_ERROR
MIGRATION_SQL_DEFECT = NO
SCHEMA_DEFECT = NO
AUTHORITY_CORRECTION = canonical checksum switched from platform-transformed checkout bytes to immutable Git blob bytes
MIGRATION_COUNT = 79
FINAL_MIGRATION = 20260910122000_c03_application_handoff_notifications
IMMUTABLE_GIT_BLOB = 49b858278a963b14653e06937c193e8d9bca3236
EXACT_COMMITTED_BYTES = 5294
CANONICAL_IMMUTABLE_GIT_BLOB_SHA256 = 69afa7a872131ad6f0ce80b5ba232c1df0a0010589089bae56ec213559d2b255
HISTORICAL_CRLF_TRANSFORMED_SHA256 = 55d8dd3cc66264a45a6ad9e8838894d446915d9e55a5e4e128980367d4f7c96b
```

### Notification timeout residual history

```text
P3_SECOND_BLOCKED_RUN = CREATOR_NOTIFICATION_POSTGRESQL_TIMEOUT
AFFECTED_CASES = OWNER, MANAGER, ASSISTANT
OBSERVED_DEFAULT_CEILING_MS = 5000
P3_NOTIFICATION_TIMEOUT_DIAGNOSIS = HARNESS_TIMEOUT_ONLY
BOUNDED_ROLE_CASES = PASS under 30000ms integration ceiling
SLOWEST_MEASURED_NOTIFICATION_QUERY_READ_MS = 187.688
POSTGRESQL_BLOCKING_PID = NONE
DEADLOCK = NONE
ORPHANED_TRANSACTION = NONE
RUNTIME_SOURCE_CORRECTION_CONSUMED_BY_TIMEOUT = NO
```

The 30000ms ceiling is a finite integration-test bound, not a Product or runtime SLA.

### Final runtime correction and accounting

```text
P3_RUNTIME_CORRECTION_1 = OPPORTUNITY_PRIVATE_RESPONSE_HEADER_PLACEMENT
BASE_SHA = 4b51d52de6d9206545b0a38497c7436bc9d3e095
ACCEPTED_CORRECTION_SHA = 8bedbebf9712b6ffe0acb11339813787ef669e62
CHANGED_FILES = src/features/campaign-opportunities/campaign-opportunity.module.ts; src/features/campaign-opportunities/opportunity-private-response.test.ts
PRODUCT_BEHAVIOR_CHANGED = NO
OPPORTUNITY_ENTITLEMENT_CHANGED = NO
AUTHENTICATION_REQUIREMENT_CHANGED = NO
TEASER_LOCKED_AUTHORIZED_SEMANTICS_CHANGED = NO
CORS_PERMISSIONS_CHANGED = NO
SCHEMA_CHANGED = NO
MIGRATION_CHANGED = NO
P3_AUTHORITY_CORRECTION_COUNT = 1
P3_TIMEOUT_RESIDUAL_LANE = 1
P3_RUNTIME_CORRECTION_COUNT = 1
P3_RUNTIME_CORRECTION_BUDGET_REMAINING = 0
```

The already-frozen private/no-store and Authorization/Cookie variance now apply before authentication guards reject. Origin introduced by CORS remains present. Missing/invalid authentication on the protected collection returns generic 401, no protected payload, and does not execute the handler. See the backend runtime overlay for all three canonical routes.

### Final V4 evidence, preserved provenance

[Full runner report, preserved verbatim](../../ai-collaboration/c03-p3-backend-runtime-acceptance-report-v4.md). Its READY_FOR_SA_REVIEW and pre-binding ledger state are historical runner results; the verdict above records the subsequent SA acceptance. The following is the exact V4 result block; retained V2/V3 checks were not rerun for this docs-only binding.

```text
RESULT = READY_FOR_SA_REVIEW
RECOVERY_AUTHORITY_SHA = 6cb664cf9361755e24bc85a9c600311301082739
P3_CORRECTION_BASE_SHA = 4b51d52de6d9206545b0a38497c7436bc9d3e095
P3_CORRECTION_SHA = 8bedbebf9712b6ffe0acb11339813787ef669e62
P3_CORRECTION_TREE = 0c9a87f688388533911730b4b77cbc08f75c640b
P3_RUNTIME_CORRECTION = OPPORTUNITY_PRIVATE_RESPONSE_HEADER_PLACEMENT
FILES_CHANGED = src/features/campaign-opportunities/campaign-opportunity.module.ts; src/features/campaign-opportunities/opportunity-private-response.test.ts
PROTECTED_OPPORTUNITY_UNAUTH_401 = PASS
PROTECTED_OPPORTUNITY_INVALID_AUTH_401 = PASS
CACHE_CONTROL = private, no-store
VARY_TOKENS = Origin, Authorization, Cookie (token/order-insensitive)
GENERIC_401_BODY = PASS
HANDLER_SHORT_CIRCUIT_REGRESSION = PASS
CORS_ORIGIN_VARY_PRESERVED = PASS
PUBLIC_OPPORTUNITY_PRIVATE_HEADERS = PASS
OPPORTUNITY_TEASER_HTTP = PASS
OPPORTUNITY_LOCKED_HTTP = PASS
OPPORTUNITY_AUTHORIZED_HTTP = PASS
LEGACY_APPLY_RETIREMENT_HTTP = PASS — 410 LEGACY_APPLICATION_ENDPOINT_RETIRED; no durable mutation
MATERIALIZED_NOTIFICATION_SECURITY = PASS — 2 materialized notifications; raw credential marker and field checks
OPPORTUNITY_SECURITY_CONTRACT = 4906 PASS / 9 guarded PostgreSQL skips / zero failures; PostgreSQL coverage retained from V3
P3_NOTIFICATION_TIMEOUT_DIAGNOSIS = HARNESS_TIMEOUT_ONLY — RETAINED_FROM_V3
FOCUSED_POSTGRESQL = 100/100 PASS — RETAINED_FROM_V3_PRE_CORRECTION
P3_ADDITIONAL_CONTENTION = 14/14 PASS — RETAINED_FROM_V3_PRE_CORRECTION
ADDITIONAL_POSTGRESQL = 62/62 PASS — RETAINED_FROM_V3_PRE_CORRECTION
FRESH_0_TO_79 = PASS — RETAINED_FROM_V2
LEGACY_74_TO_79 = PASS — RETAINED_FROM_V2
PRISMA_INTEGRITY = PASS — RETAINED_FROM_V2
LEGACY_PERSISTENCE_PRESERVATION = PASS — RETAINED_FROM_V2
MIGRATION_COUNT = 79
FINAL_MIGRATION_SHA256 = 69afa7a872131ad6f0ce80b5ba232c1df0a0010589089bae56ec213559d2b255
FINAL_MIGRATION_COMMITTED_BYTES = 5294
FULL_TEST_SUITE = 6188 PASS / 753 guarded skips / zero failures; 195 passed files / 54 skipped files; exit0; 307.685s
PRODUCTION_BUILD = PASS — npm run build exit0; 72.646s; byte-verified scratch source
STARTUP_SMOKE = PASS
SECURITY_DIFF_REVIEW = PASS
P3_AUTHORITY_CORRECTION_COUNT = 1
P3_TIMEOUT_RESIDUAL_LANE = 1
P3_RUNTIME_CORRECTION_COUNT = 1
P3_RUNTIME_CORRECTION_BUDGET_REMAINING = 0
COMMIT = 8bedbebf9712b6ffe0acb11339813787ef669e62
PUSH = PASS — NON_FORCE
FETCH_BACK_SHA = 8bedbebf9712b6ffe0acb11339813787ef669e62
CLEAN_WORKTREE = YES
PRODUCT_QUESTIONS = NONE
ARCHITECTURE_CONFLICTS = NONE
SECURITY_BOUNDARY_CHANGES = NONE — existing frozen privacy boundary made effective before guard rejection
P4_STARTED = NO
P5_STARTED = NO
AWS_CALLS = NONE
LIVE_PROVIDER_CALLS = NONE
PRODUCTION_ACCESS = NONE
RECOVERY_LEDGER_MODIFIED = NO
NEXT_AUTHORIZED_BOUNDARY = SA_REVIEW_ONLY
```

```text
CHECKSUM_AUTHORITY_GATE = PASS — RETAINED_FROM_V2
LEGACY_PRESERVATION = PASS — RETAINED_FROM_V2
EVIDENCE_ZIP_SHA256 = 10c0138beb31f1048978cc8550d1e5a52ec45568599d614c3a6e48a6d21ac02c
```

The ZIP is preserved externally and is not committed. No runtime tests/build, AWS, provider operation, production access, frontend changes, P4 or P5 implementation are part of this binding.

Systems Architect acceptance SHA = c32841516330f37f19effc63423317619ec1ecd5

## 14. P4 durable frontend runtime acceptance

Authorization: `C03_P4_DURABLE_FRONTEND_ACCEPTANCE_BINDING_V1`. Systems Architect verdict: **P4 = ACCEPTED**. Starting recovery authority: `5528b131c66faba9b8203b482230a47cda42f989`. Earlier checkpoint snapshots remain immutable historical records; this entry is the current continuation authority.

```text
P1 = PASS
P2 = PASS
P3 = PASS
P4 = PASS

LAST_ACCEPTED_CHECKPOINT = P4
CURRENT_CHECKPOINT = P5

P4_FRONTEND_RUNTIME_ACCEPTED_SHA = cbba723f10ca3a6df06e1feba263fe14a03ddc28
P4_FRONTEND_RUNTIME_ACCEPTED_TREE = cfa23e89e5132a743b60f09df6c901f4a2ed0a77
P4_BACKEND_INTEGRATION_SHA = 8bedbebf9712b6ffe0acb11339813787ef669e62

P4_INITIAL_PASS = 1
P4_CORRECTION_COUNT = 2
P4_CORRECTION_BUDGET_REMAINING = 0

P5_FRONTEND_SHELL_AUTHORITY = cbba723f10ca3a6df06e1feba263fe14a03ddc28
P5_BACKEND_BASE_AUTHORITY = 8bedbebf9712b6ffe0acb11339813787ef669e62
P5_STATE = NOT STARTED
P6_STATE = NOT STARTED
P7_STATE = NOT STARTED
NEXT_AUTHORIZED_BOUNDARY = SA_REVIEW_ONLY
```

### Accepted frontend chain and result

The accepted frontend chain is linear, contains no merge or rebase, and has the following exact commit meanings:

```text
66d6a9bc992afcdfb900d7837defd867670bf640
→ f9b8c6ec3dd70d43d770e3364379ce0ac1aa0904  feat(c03): establish creator campaign frontend contracts
→ 0b0ffd3fdf8e07115f8f9f3547c53435e00672b5  feat(c03): implement opportunity and apply experience
→ 400d269bc82342224e7f359aa2f45e2dd2a30d11  feat(c03): implement application history and notifications
→ cbba723f10ca3a6df06e1feba263fe14a03ddc28  test(c03): complete frontend acceptance hardening
```

```text
ROUTE_CONTRACT = PASS
ACTOR_ACTION_COMPATIBILITY = PASS
ROUTE_GUARD_DECOMPOSITION = PASS
PUBLIC_CAMPAIGN_ENTRY = PASS
INVITATION_CONTINUATION_SECURITY = PASS
OPPORTUNITIES = PASS
OPPORTUNITY_DOSSIER = PASS
INSTAGRAM_RECOVERY = PASS
ASSET_BRIEF_EXPLORER = PASS
APPLY_REVIEW_SUBMIT = PASS
IDEMPOTENCY_CLIENT = PASS
MY_APPLICATIONS = PASS
WITHDRAW_ROLE_PROJECTION = PASS
HISTORICAL_WITHOUT_INSTAGRAM = PASS
COLLABORATION_LINK = PASS
CREATOR_NOTIFICATIONS = PASS
SUBJECT_AWARE_CACHE_CLEARING = PASS
STALE_MARKETPLACE_SEMANTICS = REMOVED_FROM_REACHABLE_C03
BACKEND_CODE_ERROR_MAPPING = PASS
NO_IMAGE = PASS
RESPONSIVE_DESKTOP = PASS
RESPONSIVE_TABLET = PASS
RESPONSIVE_390 = PASS
RESPONSIVE_375 = PASS
KEYBOARD_ACCESSIBILITY = PASS
FOCUS_MANAGEMENT = PASS
LIVE_REGIONS = PASS
TOUCH_TARGETS = PASS
HORIZONTAL_OVERFLOW = PASS
NETWORK_SECURITY = PASS
DOM_REDACTION = PASS
STORAGE_SECURITY = PASS
REAL_BACKEND_INTEGRATION = PASS
STITCH_USED = NO
BACKEND_CHANGES = NONE
```

### Validation and evidence

```text
TYPECHECK = PASS
FULL_TEST_SUITE = 952 passed / 118 files / 0 failed
PRODUCTION_BUILD = PASS
CHANGED_FILE_LINT = PASS
FULL_LINT = BASELINE_DEBT_UNCHANGED
BASELINE_LINT_ERRORS = 26
BASELINE_LINT_WARNINGS = 13
P4_CHANGED_FILE_LINT = PASS
P4_LINT_BLOCKER = NO
P4_LINT_DEBT = PRE_EXISTING_REPOSITORY_DEBT
```

The full lint result is not a PASS. Its 26 errors and 13 warnings are unchanged pre-existing repository debt; all P4 changed files pass lint. The preserved [P4 runner report](../../ai-collaboration/c03-p4-frontend-implementation-and-acceptance-report-v1.md) records the full result and exact correction history.

The external `C03_P4_FRONTEND_ACCEPTANCE_EVIDENCE.zip` has SHA-256 `aa1f99dd5a8a61f988e3ee5a1ccd71f526493d8303dd65885a364b0801924792` and is not committed. Browser and real-backend acceptance ran against backend `8bedbebf9712b6ffe0acb11339813787ef669e62` and frontend `cbba723f10ca3a6df06e1feba263fe14a03ddc28`.

P5 may consume the exact accepted frontend shell and backend base authorities above, but P5 implementation is not authorized by this assignment. P6 and P7 are not started. Publication stops at SA review.

Systems Architect acceptance SHA =
PENDING_P4_ACCEPTANCE_RECORD_SHA
