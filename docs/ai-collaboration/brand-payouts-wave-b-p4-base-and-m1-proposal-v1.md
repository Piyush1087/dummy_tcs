# Brand Payouts — Wave B P4 Base and M1 Proposal Evidence V1

`BRAND_PAYOUTS_WAVE_B_P4_BASE_AND_M1_PROPOSAL_EVIDENCE_V1`

## Result

```text
PREFLIGHT_STATUS = PASS
P4_BASE_STATUS = COMPLETE
M1_STATUS = NOT_APPROVED_NOT_APPLIED
NEXT_GATE = BP-G10_PARENT_M1_APPROVAL
P4A_STARTED = NO
PROVIDER_ACTIONS = NONE
```

## Immutable bindings

- Runner authority head: `d5b97495507c248d606a977050e771be4998f90e`.
- C03 accepted head: `aebeb85fd6bba37f88c3805c213c61e7f63b2f5f`.
- C04 tested runtime: `373eaa382f555c376df78c0e95c72ff55cc43791`.
- C04 docs-only handoff/base: `fc4d4b59e2a44d7ddced6bc5dde5119c501ec275`, tree `083c52dc06c19a23f47491935b472ee5e62bd1c5`.
- Campaign BP-G05 runtime/handoff: `2c390802a4cebd7e6ce5086c7609774b1ff3f3d1` / `7901c7743ac1bb46b6ed4f74b768998dbebd28f4`.
- Accepted P3A backend input: `12d235345e2748f676d36d61c62ed4bd9c049592`.
- Frozen frontend (read-only): `7c75a4c8f5a0df3a1fb82d2f707b1c6b03d56d2a`, tree `956bae22a91aeaf53733f9e913d500b9750577e2`.
- C05 runtime seam: backend `156d5834266077be7e2b6a2d459bae5489edbbd6`; destination identity/version/current-readiness remains a P5A fence, not P4 Base work.

Git proved C03 is an ancestor of the C04 runtime and the C04 handoff is exactly
one docs-only child. Campaign and C04 remain divergent descendants of
`4c5f42858b950b7cd342f8972f99f548f3daa942`; no merge, rebase, or cherry-pick
was used. The Campaign five-term correction is already adapted by C04.

## Consolidated readiness

| Capability | Result |
| --- | --- |
| Clean isolated worktrees and exact refs | READY |
| Node/npm/Prisma | READY (`v24.19.0` / `11.17.0` / `6.19.3`) |
| C03 first 79 migrations vs C04 prefix | READY; Git blob lists identical 79/79 |
| C04 accepted history | READY; 84 migrations, unchanged by P4 Base |
| Prisma generate/validate | PASS |
| Fresh PostgreSQL 16 UTC 0→84 | PASS |
| Supported 79→84 replay | PASS |
| Accepted legacy-shaped 82→84 proof | REUSED immutable C04 handoff evidence |
| Baseline C04 focused suite | PASS, 17/17 |
| Full built AppModule, route mapping, root/health | PASS; 200/200; controlled shutdown |
| Provider-disabled/no-provider action | READY; no provider credential or provider request used |
| Evidence push/fetch and cleanup | PASS |

The first startup attempt failed closed on missing local-only auth/mail
configuration, then the owned harness supplied ephemeral non-production values.
No values are retained in evidence. Runtime initialization and route mapping
included the Brand Payouts V2 endpoints.

## P4 Base convergence

Branch `brand-payouts/v1-backend-convergence` was created from the exact C04
handoff. P0–P3A was ported file-by-file from the accepted P3A tree. The one
P4 Base commit is:

```text
SHA = 5dc9eef4923ae383b94b36cbf9bbb632b1b84cf1
TREE = 6c01d65e5a32eecfcd7e42715923ea8478d071fb
PARENT = fc4d4b59e2a44d7ddced6bc5dde5119c501ec275
CHANGED_FILES = 31
MIGRATION_FILES_CHANGED = 0
PRISMA_SCHEMA_CHANGED = NO
```

Two Class B reconciliation corrections preserved both the C04
transaction-aware membership resolver and P3A side-effect-free financial read
resolver, and adjusted notification composition/count tests for the combined
module/event set. Focused convergence results: 10 files, 63 passed, 5 guarded,
zero failures. Prisma generation/validation and production build passed. The
remote branch fetched back to the exact commit.

## Exact M1 review package

- Prisma review delta: `evidence/brand-payouts-wave-b-p4-base-m1-v1/NOT_APPROVED_NOT_APPLIED-brand-payouts-m1-prisma-delta.patch`.
- SQL: `evidence/brand-payouts-wave-b-p4-base-m1-v1/NOT_APPROVED_NOT_APPLIED-brand-payouts-m1.sql`.
- SQL SHA-256: `683e5266c3e1913e39f151f70d8bd449f0816b5926913220156f97ddda6ec805`.

The proposal is additive and includes reserve approval/audit state,
append-only execution attempts, C04 authority/due provenance on obligations,
destination/readiness milestones on transfer attempts, FKs, uniqueness,
partial-one-success, check constraints, immutable authority, append-only and
set-once triggers. There is no backfill; legacy rows remain null and fail
closed. M1 was not copied into the backend, committed, generated as a migration,
or applied to any database.

Rollback is forward recovery: retain additive structures, stop writers, repair
only from immutable instruction/receipt evidence, and never remove enum/data or
infer historical values. Approval proof must run fresh 0→85 and 84→85 plus
legacy-shaped upgrade, direct-SQL negative constraints/triggers, transaction
rollback, lock/concurrency/idempotency, Owner/Finance allow, Campaign Manager
deny, cross-Brand isolation, shortfall/resume, supersession, exactly one
allocation/lock/ledger result, and migration rollback/forward rehearsal.

## Cleanup and stop

Both owned PostgreSQL containers and the temporary 79-migration projection were
removed after proof. Source worktrees are clean, no private session remains,
no external provider attempt occurred, and the frontend was not changed.
Execution stops here for exact BP-G10 Parent M1 approval. P4A and P5A were not
started.
