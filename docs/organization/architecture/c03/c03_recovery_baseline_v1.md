# C-03 Recovery Baseline V1

**Artifact:** `C03_RECOVERY_BASELINE_V1`  
**Module:** C-03 — Creator Campaign Participation / Apply  
**Status:** ACCEPTED  
**Recovery cutoff:** `2026-09-04T17:33:39Z`  
**Authority effect:** Repository evidence at or before the cutoff is classified below. Any write from the abandoned execution after the cutoff is non-authoritative until explicitly reviewed.

## 1. Recovery authority

| Authority | Immutable reference |
|---|---|
| Accepted Stage B authority | `Piyush1087/dummy_tcs:c03/stage-b-architecture-execution-base@458875b939b738b8032409b6de72b6de70f53ed1` |
| Accepted backend P0 | `Piyush1087/creator-commerce-backend-v2-clone@6a2bd2e4b815462abc702dea34f7c368c24a0664` |
| Accepted frontend P0 | `Piyush1087/creator-commerce-frontend-v2-clone@66d6a9bc992afcdfb900d7837defd867670bf640` |
| Durable P0 execution ledger | `Piyush1087/dummy_tcs:c03/hybrid-autonomous-execution@f5e54af7d51409639df38f117d686d7a132045d1`, `docs/organization/execution_ledgers/c03_execution_ledger_v1.md` |

No Product or architecture decision is changed by this recovery artifact.

## 2. Original-branch verification at cutoff

| Repository/ref | Expected P0 | Observed head | Result |
|---|---|---|---|
| Backend `c03/campaign-participation-v1` | `6a2bd2e4b815462abc702dea34f7c368c24a0664` | `6a2bd2e4b815462abc702dea34f7c368c24a0664` | EXACT |
| Frontend `c03/campaign-participation-v1` | `66d6a9bc992afcdfb900d7837defd867670bf640` | `66d6a9bc992afcdfb900d7837defd867670bf640` | EXACT |
| Stage B `c03/stage-b-architecture-execution-base` | `458875b939b738b8032409b6de72b6de70f53ed1` | `458875b939b738b8032409b6de72b6de70f53ed1` | EXACT |

Backend P0 is three commits ahead of and zero behind canonical base `4c5f42858b950b7cd342f8972f99f548f3daa942`; its merge base is exactly that canonical base. Frontend P0 is three commits ahead of and zero behind canonical base `323658d4b147b95b5629ff8d91fa90b8fe9077e4`; its merge base is exactly that canonical base.

## 3. P0 durable evidence

| Lane | Evidence | Result |
|---|---|---|
| Backend Actions | run `33845011768`, job `100934880092`, head `6a2bd2e4b815462abc702dea34f7c368c24a0664` | SUCCESS |
| Frontend Actions | run `33845013621`, job `100934885287`, head `66d6a9bc992afcdfb900d7837defd867670bf640` | SUCCESS |
| Frontend browser artifact | `c03-p0-frontend-browser`, artifact `9926229600` | PRESENT / UNEXPIRED |
| Execution ledger | `C03_EXECUTION_LEDGER_V1` at `f5e54af7d51409639df38f117d686d7a132045d1` | P0 PASS; P1.1 IN PROGRESS only |
| C-03 PR inventory | backend PR #6 and frontend PR #3 are Stage B proof PRs; dummy_tcs PR #1 is Stage B authority | NO P1.1 PR |

The Actions job steps confirm immutable-base identity, locked installs, fresh migration replay where applicable, PostgreSQL/runtime checks, builds/startup, Chromium evidence, and final repository integrity.

## 4. Remote late-write review

Before recovery-copy creation, the complete `refs/heads/c03/*` inventory contained only:

- backend: original execution and Stage B proof branches;
- frontend: original execution and Stage B proof branches;
- authority: Stage B authority and the durable hybrid-execution ledger branch.

The original execution branches had no workflow run or reachable commit after the accepted P0 commits. No remote `c03/p1-1-persistence` ref, P1.1 commit, P1.1 PR, migration, or other published feature write was found.

The hybrid-execution authority commits `e8d9958216034f39ac6022ca582554fedbac3c4c` and `f5e54af7d51409639df38f117d686d7a132045d1` predate the recovery cutoff and contain only the durable execution ledger; they are explained P0 evidence, not late implementation.

```text
LATE_OR_UNEXPLAINED_REMOTE_WRITES = NONE_FOUND
UNPUBLISHED_P1_1_WORK = NON_AUTHORITATIVE_HISTORICAL_EVIDENCE_ONLY
```

## 5. Recovery copies

| Lane | Recovery branch/head | Verified tree | Result |
|---|---|---|---|
| Backend | `c03/recovery-campaign-participation-v1@6a2bd2e4b815462abc702dea34f7c368c24a0664` | `cf37ef240ac8f8d72e1b230b80830df682ba63fd` | EXACTLY EQUAL TO ACCEPTED BACKEND P0 |
| Frontend | `c03/recovery-campaign-participation-v1@66d6a9bc992afcdfb900d7837defd867670bf640` | `50bddd231d4fcab3f4df20867b977343b0443225` | EXACTLY EQUAL TO ACCEPTED FRONTEND P0 |

No source, migration, merge, cherry-pick, rebase, or canonical branch was changed while creating the recovery copies.

## 6. Quarantine and checkpoint classification

```text
ORIGINAL_C03_EXECUTION_BRANCHES = HISTORICAL / QUARANTINED
RECOVERY_C03_EXECUTION_BRANCHES = CURRENT CANDIDATE EXECUTION LINE

LAST_FULLY_ACCEPTED_CHECKPOINT = P0
FIRST_INCOMPLETE_CHECKPOINT = P1.1

P1_1_IMPLEMENTATION = NOT_AUTHORIZED
```

A late artifact from the abandoned Systems Architect cannot regain authority through timestamp or branch placement. It requires explicit evidence review against this recovery baseline and the accepted Stage B authority.
