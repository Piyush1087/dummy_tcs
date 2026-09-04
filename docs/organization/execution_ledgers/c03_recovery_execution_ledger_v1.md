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
| P1.1B canonical Application + snapshot | NOT STARTED | — | — | P1.1A PASS |
| P1.1C invitation / ingress / idempotency / events | NOT STARTED | — | — | P1.1B PASS |
| P1.1D guards / locking / adapters / compatibility | NOT STARTED | — | — | P1.1C PASS |
| P1.1E PostgreSQL acceptance | NOT STARTED | — | — | P1.1D PASS |
| P1.2 Opportunity entitlement/read APIs | NOT STARTED | — | — | P1.1 PASS |
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
| Systems Architect acceptance binding | The immutable documentation commit that first publishes this PASS entry; its exact SHA is recorded in the next authority commit without changing this evidence or verdict. |

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

## 4. Current continuation

```text
LAST_ACCEPTED_CHECKPOINT = P1.1A
CURRENT_CHECKPOINT = P1.1B
P2_EXECUTION = NOT_AUTHORIZED
```
