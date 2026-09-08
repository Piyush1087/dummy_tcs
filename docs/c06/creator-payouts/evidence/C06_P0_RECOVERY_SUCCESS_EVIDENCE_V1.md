# C06 P0 Recovery Success Evidence V1

## Result

```text
RUNNER = C06_LOCAL_CODEX_P0_ENVIRONMENT_RECOVERY_RUNNER_V1
R0 = PASS
P0 = PASS
NEXT_PHASE = P1
```

This evidence is additive. It does not alter or invalidate `C06_P0_CIRCUIT_BREAKER_EVIDENCE_V1.md`, which remains the durable record of the failed local run.

## R0 environment

| Field | Result |
| --- | --- |
| Fresh clones | Backend and frontend cloned under the recovery workspace; failed worktrees preserved untouched |
| Docker | Client/server 29.7.2; Linux containers running |
| Node/npm | Node 20.20.2, npm 10.8.2, matching the backend Dockerfile's Node 20 authority and npm lockfile v3 |
| PostgreSQL | 16.15 (`server_version_num=160015`) |
| Loopback | `127.0.0.1:55406` reachable |
| Database | `c06_recovery` |
| Timezone | UTC |
| SQL proof | Independent PostgreSQL client returned `c06_recovery|16.15|UTC` |
| Bootstrap | All required local auth/mail/runtime values present before P0 startup |
| Postmark | Documented `POSTMARK_API_TEST`; no mail send invoked |
| Provider credentials | None |

## Exact convergence

### Backend

```text
BACKEND_P0_MERGE_SHA = c4e4aa552bba09092fc1b3c25e5cbf95ef9ea73e
BACKEND_P0_MERGE_TREE = dba5c6436b7c426ad004b8479541ab9906ecbc3a
BACKEND_P0_MERGE_PARENTS =
4e082f67953f0d6b55fa791f2cea03c8aef28119
a38102fd9662f1654c9572b19913b9e228385b73

BACKEND_P0_VALIDATION_SHA = 6c7612450ddf033a5ce44be761a4b37b05703eb7
BACKEND_P0_VALIDATION_TREE = e1662d82f459ad2482fdde5b56e1d7e75dc159dc
```

The sole changed-on-both path was `src/features/collaboration/collaboration.module.ts`. Its additive resolution retains both `CollaborationHomeReadService` and `CollaborationTrustedConfirmationService` in module composition. The planned post-convergence migration assertion adaptation is a separate child commit and changes only 85 to 86.

### Frontend

```text
FRONTEND_P0_MERGE_SHA = 056f91af89eb35db6841e29194464ec93bcff241
FRONTEND_P0_MERGE_TREE = a7cab1a9b266ac286b7ae26420dfb1f88a229427
FRONTEND_P0_MERGE_PARENTS =
29e78397fc66676d0134c45aa0bb6af173fbe12b
25441dd4fd228bec4d6c9fe9f39c2297318b6167
```

The sole changed-on-both path was `src/routes/app-routes.tsx`. The merged route composition retains C03 Creator Campaign, C04 Collaboration, C02A Creator Home, Creator Settings, Creator shell behavior, and the Brand Payout route guard.

## Migration proof

```text
MIGRATION_COUNT = 86
FIRST_85_UNCHANGED = YES
MIGRATION_86 = 20260912100000_brand_payouts_wave_b_normal_path
MIGRATION_86_SHA256 = 887e5bb6bd262a4dd02e42a798db55bd136d97bf6a923df7e6466573f11d1f84
POSTGRESQL_0_TO_86 = PASS
PRISMA_MIGRATION_ROWS = 86 total, 86 successful, 0 incomplete/rolled-back
```

Relative to the pinned Creator base, migration 86 is the only migration path added.

## Tests and runtime

```text
PRISMA_FORMAT = PASS
PRISMA_VALIDATE = PASS
PRISMA_GENERATE = PASS
BACKEND_FOCUSED = 8/8 files; 68 passed; 5 skipped
FRONTEND_FOCUSED = 5/5 files; 47 passed
BACKEND_BUILD = PASS
FRONTEND_BUILD = PASS
BACKEND_HEALTH = HTTP 200; database up
CREATOR_PAYOUTS_UNAUTHENTICATED = HTTP 401
APPLIED_MIGRATIONS_RUNTIME = 86
```

The frontend build retained the inherited Vite large-chunk warning. The backend runtime emitted the SDK's future Node-support notice but started successfully on the repository-authoritative Node 20 runtime.

## Deny proof and cleanliness

No provider, Razorpay, external financial network, AWS, or mail operation was invoked. The runtime container had no provider, financial-provider, or AWS credentials. The disposable database was empty apart from migrations, so background workers had no queued work. The backend runtime container was stopped immediately after smoke verification.

```text
PROVIDER_CREDENTIALS = NONE
PROVIDER_METHOD_ACTIONS = ZERO
RAZORPAY_CALLS = ZERO
EXTERNAL_FINANCIAL_NETWORK_CALLS = ZERO
BACKEND_WORKTREE = CLEAN
FRONTEND_WORKTREE = CLEAN
P0_CORRECTION_COUNT = 1
```

