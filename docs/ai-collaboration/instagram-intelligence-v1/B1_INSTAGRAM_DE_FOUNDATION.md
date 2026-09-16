# Instagram Intelligence B1 — Data Extraction Persistence Foundation

## Checkpoint state

```text
PACKET = B1_INSTAGRAM_DE_FOUNDATION
STATE = EVIDENCE_READY_FOR_CHILD_SA_REVIEW
B1_ACCEPTED = NO
B2 = PROHIBITED
META_PROVIDER_CALLS = NONE
```

Program-Orchestrator authority accepted A3 and authorized B1. This checkpoint
records the completed provider-neutral B1 persistence foundation and the
Parent-authorized writer-sequencing recovery. It does not claim Program
acceptance and does not authorize B2.

## Exact repository lineage

| Repository | Branch | Accepted predecessor SHA / tree | Published B1 SHA / tree |
|---|---|---|---|
| Backend | `program/instagram-intelligence-v1-backend` | `4ab0e5f4ac124911a30ccc434934b6f645a4cded` / `747ca7878ea465e82d927c0ea22f1e86efe95b0f` | `0725a36fa39c4a599e88cd008fddfacf21a9e44c` / `dc98b3af4d1f1ab225a8d5b1d983d0c50c10d781` |
| Frontend | `program/instagram-intelligence-v1-frontend` | `97efcaae7ad69da6bd1c18ab8cebb44ca82c4c9e` / `18c7cb0edd173960d15fcc29d71583a1ea429586` | unchanged |

The backend predecessor is a direct ancestor of the B1 checkpoint. Publication
used a normal non-force push. An independent fetch/prune resolved the local and
remote-tracking branches to the same final SHA and tree. The authority commit
containing this file is intentionally reported only in the immutable runner
report because a commit cannot encode its own identity.

## Migration identity and upgrade safety

- Final migration: `20260911020000_instagram_de_persistence_foundation`.
- Migration ordinal: 88 of 88.
- SHA-256: `d02b75e50f883150c9d14908c82ef10d9b0de4c2b464168567634dd0157009e4`.
- Clean PostgreSQL 17 route: all 88 migrations applied from zero; Prisma status
  reported current.
- All seven durable capability constraints existed once, were validated, shared
  one identical definition, and contained exactly nineteen values.
- Direct negative checks rejected both an unknown website capability and an
  unknown Instagram capability on every populated constrained table: 14 of 14
  rejected.
- Separate 87→88 route: the exact backend predecessor supplied migrations 1–87;
  ten representative Owned Website capability graphs were seeded; the current
  worktree's normal Prisma deploy route applied only migration 88; status then
  reported current at 88.
- The upgrade constraint matrix was seven of seven validated, each with ten
  accepted website IDs plus exactly nine accepted Instagram IDs.
- Stable pre/post counts and deterministic hashes matched on all affected
  surfaces:

| Surface | Count | Deterministic hash before and after |
|---|---:|---|
| `data_extraction_resources` | 10 | `2607e364571ffa7f2ba56b467a4d2917` |
| `data_extraction_captures` | 10 | `d1fa8cbd83a9abace616c906104e33d4` |
| `data_extraction_capability_executions` | 10 | `3d097c59683fb1aaacff177066ec693e` |
| `data_extraction_capability_resources` | 10 | `2c848ea2996702d2ab6e5da8d775b86f` |
| `data_extraction_evidence_items` | 10 | `3ba7f776c5f2351f43271add903d69fe` |
| `data_extraction_capability_evidence` | 10 | `48b6c6c5cee385ff7db5ccec34bfddd7` |
| `data_extraction_semantic_observations` | 20 | `8f2cb93532b166ce5f07469d8a2fbecf` |
| `data_extraction_observation_support` | 10 | `934556526206c3bf4cb01bc82a07b9b7` |
| `data_extraction_observation_relations` | 10 | `2dc48e7aa955ed13ad3a9dca26447d50` |

The hashes omit only the three new nullable provider-fence columns when those
columns did not exist at migration 87. Stable row identity, existing values,
capability membership, and semantic relationships were unchanged.

## Lifecycle ordering and runtime recovery

The accepted shared Owned Website lifecycle creates a Capture, persists source
material, marks the Capture completed with non-null `capturedAt`, and only then
admits normalized Evidence. The shared Evidence repository correctly rejects
Evidence against a running, failed, or timestamp-less Capture.

The confirmed B1 recovery root cause was an Instagram adapter ordering error:
the writer attempted Evidence insertion while its Capture was still `RUNNING`.
The bounded recovery moved only the existing terminal Capture transition:

```text
create Capture
→ persist bounded artifact and provider-execution lineage
→ mark AVAILABLE/PARTIAL Capture COMPLETED with input.capturedAt
→ insert Evidence referencing that exact Capture/artifact
→ complete capability execution
```

`input.capturedAt` remains the authoritative source timestamp; no wall-clock or
synthetic timestamp was introduced. `UNAVAILABLE` retains its explicit failed
Capture state and produces no artifact, Evidence, `capturedAt`, `observedAt`, or
fabricated numeric zero. Because the full sequence remains in the caller-owned
transaction, a later Evidence-lineage failure rolls back the earlier completion
operation and all related writes.

Regression coverage freezes completion-before-Evidence source order and proves
the real PostgreSQL repository observes the completed Capture. A successful
account write and identical replay both produced the stable row-count vector
`[1,1,1,1,1,1,1,1,1,2]` for Resource, Capture, artifact, execution,
capability-resource, Evidence, capability-Evidence, semantic observation,
observation support, and provider-execution link respectively. Invalid, stale,
cross-Brand, unsafe, and induced late-failure cases retained the zero vector.

## Persistence and contract evidence

- Account identity is `instagram:<providerAccountId>:account`.
- Media identity is `instagram:<providerAccountId>:media:<mediaId>`; handle and
  authorization-generation changes do not change identity; a carousel remains
  one media Resource.
- Capture and capability-execution lineage both retain integration identity,
  provider account identity, and authorization generation.
- All nine Instagram capabilities round-trip through real PostgreSQL.
- `AVAILABLE`, `PARTIAL`, and `UNAVAILABLE` remain distinct.
- Multiple Evidence records can reference one declared artifact.
- Duplicate artifact declarations, dangling artifact references, duplicate
  Evidence identities, malformed identities, unsafe payloads, stale generation,
  changed provider account, and cross-Brand use reject atomically.
- Repeated identical requests reuse immutable lineage without row inflation.
- No valid Evidence can reference an incomplete or failed Capture.

## Validation matrix

Environment: Windows `10.0.26200` x64, Node `v24.19.0`, npm `11.17.0`, Prisma
`6.19.3`, Docker client/server `29.7.2`, PostgreSQL `17.11`. All credentials were
synthetic, task-local, and omitted.

| Gate | Exact command or procedure | Result |
|---|---|---|
| Prisma generation | `npm run prisma:generate` | PASS, exit 0 |
| Prisma validation | `npx prisma validate` with local synthetic `DATABASE_URL` | PASS, exit 0 |
| Production build | `npm run build` | PASS, exit 0 |
| Scoped lint | `npx eslint` over all 12 changed TypeScript paths | PASS, exit 0 |
| Diff integrity | `git diff --check` and staged equivalent | PASS, exit 0 |
| Static/contract regressions | `npx vitest run --config vitest.config.ts` over the two Instagram contract tests, Evidence persistence/repository/runtime architecture and contract tests, Intelligence adapter unit/architecture tests, and Instagram identity/persistence architecture tests | PASS, 10 files / 63 tests |
| PostgreSQL regressions | `npx vitest run --config vitest.config.ts` over Instagram writer, Evidence repository/persistence, Owned Website acquisition/normalization, and DE-to-Intelligence PostgreSQL tests | PASS, 6 files / 49 tests |
| Clean migration | normal `npx prisma migrate deploy` plus `npx prisma migrate status` | PASS, 88 / current |
| 87→88 upgrade | predecessor schema deploy, deterministic seed/snapshot, current normal deploy/status | PASS, only migration 88 applied; all hashes equal |

One combined PostgreSQL test invocation initially omitted the legacy test's
additional `DATABASE_URL` alias and therefore could not initialize that suite.
The command was rerun with the same synthetic disposable URL under both expected
environment-variable names and passed 49 of 49 tests. No source change or B1
recovery correction cycle resulted.

## Frozen boundaries and hygiene

- Exactly three future Instagram Intelligence Objects remain unchanged; B1
  creates no Intelligence Object, candidate, or current state.
- `sourceClass` remains `INSTAGRAM_OWNED`.
- Manual-refresh authority remains Brand Owner `ALLOW`, Campaign Manager
  `ALLOW`, Finance Admin `DENY_READ_ONLY`.
- Settings lifecycle ownership and the website-only Intelligence consumer
  allowlist are unchanged.
- No controller, scheduler, provider client, Graph request, Object writer,
  frontend change, B2 behavior, dependency, lockfile, `.env`, raw media, signed
  URL, credential, generated runtime output, or secret was added.
- R1 text-safe enum behavior, R2 artifact declaration/reference semantics, all
  ten website capabilities, and the exact nineteen-capability durable allowlist
  remain intact.
- Final secret-pattern and artifact hygiene scans passed without exposing any
  value.

## Exact backend changed-file inventory

1. `prisma/migrations/20260911020000_instagram_de_persistence_foundation/migration.sql`
2. `prisma/schema.prisma`
3. `src/features/data-extraction/data-extraction.module.ts`
4. `src/features/data-extraction/evidence/domain/evidence-records.ts`
5. `src/features/data-extraction/evidence/domain/evidence-vocabulary.ts`
6. `src/features/data-extraction/evidence/identity/resource-identity.ts`
7. `src/features/data-extraction/evidence/instagram/instagram-capture-writer.postgres.test.ts`
8. `src/features/data-extraction/evidence/instagram/instagram-capture-writer.service.ts`
9. `src/features/data-extraction/evidence/instagram/instagram-persistence-foundation.architecture.test.ts`
10. `src/features/data-extraction/evidence/instagram/instagram-resource-identity.test.ts`
11. `src/features/data-extraction/evidence/intelligence/data-extraction-intelligence-evidence.adapter.ts`
12. `src/features/data-extraction/evidence/persistence/evidence-persistence.errors.ts`
13. `src/features/data-extraction/evidence/persistence/prisma-evidence-repositories.ts`
14. `src/features/data-extraction/evidence/ports/evidence-repositories.ts`

The recovery itself changed only the Instagram writer service and its two
direct regression files. Migration 88 remained byte-identical.

## Recovery history and next boundary

The preserved B1 chain includes the migration-safety R1 correction, the
artifact-reference R2 correction, the Parent-authorized capability-constraint
closeout, and this Parent-authorized runtime-sequencing recovery. This recovery
used one primary run and zero correction runs. Backend and authority publication
used normal pushes and independent fetch-back. B1 remains awaiting Child-SA /
Program-Orchestrator review; B2 remains prohibited.
