# Creator Brand V0 — P1 Correction 1: Publication + Cleanup Closeout — Local Codex Prompt V1

`CREATOR_BRAND_V0_P1_CORRECTION_1_PUBLICATION_AND_CLEANUP_CLOSEOUT_LOCAL_CODEX_PROMPT_V1`

You are the **External Local Codex execution runner**. The Parent is mechanically relaying this exact prompt.

This is a narrow closeout of the already executed P1 primary run. Preserve the existing bounded dirty backend worktree. Do not replay or redesign P1. Do not start P2.

---

## 1. Technical-SA adjudication

The immutable primary report:

```text
CREATOR_BRAND_V0_P1_EXTERNAL_LOCAL_CODEX_REPORT_V1
```

establishes that all Product, schema, migration, PostgreSQL, role, API, isolation, regression, build, boot and health gates passed.

The only blocker was:

```text
runner policy rejected deletion of task-owned local paths
→ publication and authority closeout were withheld
```

Technical-SA disposition:

```text
P1_IMPLEMENTATION_RESULTS = PRESERVED
P1_CORRECTION_1 = AUTHORIZED
CORRECTION_SCOPE = STATE_VERIFICATION + SAFE CLEANUP + PUBLICATION + AUTHORITY CLOSEOUT
P2 = PROHIBITED
```

Local-only cleanup may not block publication a second time if you prove the remaining paths are task-owned, ignored/outside the published repository tree, non-secret, non-running and unable to alter the staged/committed tree. If policy still rejects deletion after one safe bounded attempt, record the exact paths and Parent-safe cleanup command, classify them as a non-blocking local-runner hygiene exception, and continue closeout.

---

## 2. Exact repository checkpoints

### Backend — preserve this dirty worktree

```text
repository = Piyush1087/creator-commerce-backend-v2-clone
branch = program/creator-brand-v0-backend
HEAD SHA = 3a919c2a9a8263c4734df87bda3ed21e092420cf
HEAD tree = fc888dd548ef85246438327588c07bfe835d9e83
state = bounded uncommitted P1 implementation
```

Expected changed-file set, exactly:

```text
prisma/schema.prisma
prisma/migrations/20260915100000_creator_brand_canonical_profile_revision/migration.sql
src/app.module.ts
src/shared/creator/creator-workspace-actor.contract.ts
src/features/creator-settings/team/creator-team.policy.ts
src/features/creator-settings/team/creator-team.policy.test.ts
src/features/creator-settings/team/creator-workspace-actor.service.test.ts
src/features/creator-brand/contracts/creator-brand-p0.contract.test.ts
src/features/creator-brand/creator-brand.repository.ts
src/features/creator-brand/creator-brand.service.ts
src/features/creator-brand/creator-brand.controller.ts
src/features/creator-brand/creator-brand.module.ts
src/features/creator-brand/dto/creator-brand-consumer.schema.ts
src/features/creator-brand/creator-brand-p1.service.test.ts
src/features/creator-brand/creator-brand-p1.postgres.test.ts
src/features/creator-audience/creator-audience.postgres.test.ts
src/features/creator-content/creator-content.postgres.test.ts
src/features/data-extraction/evidence/ownership/intelligence-owner-scope.postgres.test.ts
```

Expected migration SHA-256:

```text
ec6484427c24d5755549ff9e71bae989f5ff592a6fc5da953ca07494b8744452
```

Primary-run reported diff magnitude:

```text
18 files
1,425 insertions
17 deletions
```

### Frontend — unchanged

```text
repository = Piyush1087/creator-commerce-frontend-v2-clone
branch = program/creator-brand-v0-frontend
SHA = 7edd26d3cdad0ec84083884b34039952368a1295
tree = 0cc596ca1ef1d1c4a51857125547de156e487c8b
```

### Authority — clean before correction

```text
repository = Piyush1087/dummy_tcs
branch = program/creator-brand-v0-authority
SHA = 3ea60c9faef4fdb292a1c18c490b249227560dc7
tree = 00c565634da85ae608a2fa3782f6cbdcf172bf1d
```

Do not use a newer `main` Product register. The exact supplied Creator Brand V2 + Amendment 1 + authorization lineage is the only Product authority.

---

## 3. Mandatory recovery-state verification

Before any mutation:

1. Fetch/prune all three repositories.
2. Verify repository identities.
3. Verify backend HEAD and frontend/authority local/fetched identities exactly.
4. Verify the backend changed-file set equals the 18-path set above—no more and no fewer.
5. Verify no staged files unless they are exactly that same set.
6. Verify the migration byte SHA-256 exactly.
7. Verify no changed dependency manifests, lockfiles, predecessor migrations, Dockerfile or unrelated source.
8. Verify migration directory count in the dirty backend tree is 102 and predecessor head/order is unchanged.
9. Run `git diff --check` over the complete dirty change.
10. Create and record a deterministic recovery-state digest covering:
    - base HEAD/tree;
    - sorted changed-file paths;
    - normalized SHA-256 of each changed/new file;
    - migration SHA-256;
    - aggregate manifest SHA-256.

If any condition differs, stop without reset/clean/stash/discard/checkout and return:

```text
CREATOR_BRAND_P1_RECOVERY_STATE_MISMATCH
```

Do not reconstruct the implementation from the report. Continue only from the preserved authorized dirty worktree.

---

## 4. Source-mutation boundary

Backend production/test/schema/migration source changes are **not authorized** in this correction.

Allowed mutations:

- staging and committing the exact verified P1 file set;
- authority ledger/evidence/prompt archival required for closeout;
- removal of exact task-owned local temporary resources;
- line-ending/final-newline normalization only for the archived prompt copy.

If a source change is required to make a gate pass, stop and return:

```text
CREATOR_BRAND_P1_SOURCE_CORRECTION_REQUIRED
```

with exact evidence. Do not silently consume broader correction scope.

---

## 5. Bounded cleanup treatment

Reported remaining task-owned paths:

```text
<P1 task root>\backend\dist
<P1 task root>\accepted-101
```

First inspect without exposing secrets:

- canonical absolute path;
- whether inside the exact isolated P1 task root;
- file/directory/reparse-point/worktree classification;
- Git tracked/ignored/outside-repository status;
- running-process or open-port dependency;
- secret/raw-media/runtime-database content scan by path/type, without printing values.

### `accepted-101`

If it is a registered temporary Git worktree:

1. prove its exact accepted 101 predecessor identity;
2. prove it has no staged/unstaged/untracked user work;
3. remove it using the repository's normal `git worktree remove <exact-path>` route;
4. prune only stale task-owned worktree metadata if needed.

If it is not a registered worktree, prove it is a task-created disposable checkout before one bounded literal-path removal attempt.

### `backend\dist`

Prove it is an ignored, task-created regular build-output directory inside the exact isolated P1 backend worktree and is not a symlink/junction/reparse point. Then make one bounded literal-path removal attempt.

Do not recurse through or delete:

- a junction/symlink target;
- shared dependency stores;
- any path outside the exact P1 task root;
- user work;
- repository history.

### Policy refusal

If policy again blocks deletion:

```text
CLEANUP_DISPOSITION = NON_BLOCKING_LOCAL_RUNNER_HYGIENE_EXCEPTION
```

provided all of these are true:

- exact task ownership proven;
- no tracked/staged inclusion;
- no secret/raw media/database/provider artifact;
- no process/container/port uses the path;
- staged tree and resulting commit are identical whether paths exist or not;
- all Git worktrees are clean after commit;
- the immutable report gives an exact safe manual removal command scoped to each literal path.

Do not withhold publication solely for that proven exception.

---

## 6. Minimal revalidation before commit

Because production source must remain byte-identical to the primary-run implementation, do not repeat the entire PostgreSQL/browser matrix.

Required:

```text
Prisma generate = PASS
Prisma validate = PASS using synthetic/disposable local configuration
backend production build = PASS
focused P1 non-PostgreSQL contract/service/controller/policy tests = PASS
scoped ESLint/Prettier = PASS
git diff --check = PASS
planned-stage secret/forbidden-artifact scan = PASS
```

Accept the primary report's clean-102, 101→102, eight P1 PostgreSQL/API tests, predecessor PostgreSQL matrix, production boot and health evidence only if the recovery-state verification proves the implementation files are the same preserved state.

Do not make live Graph/model/provider calls.

---

## 7. Backend commit and publication

After recovery verification and minimal revalidation pass:

1. Stage exactly the 18 authorized files.
2. Verify staged paths exactly match the recovery manifest.
3. Run `git diff --cached --check`.
4. Re-run planned-commit secret/forbidden-artifact scan.
5. Commit the complete P1 implementation on `program/creator-brand-v0-backend`.
6. Normal non-force push.
7. Independent fetch/prune.
8. Prove local/fetched SHA and tree equality.
9. Prove P0 backend SHA `3a919c2...` is the direct/accepted ancestor.
10. Prove committed migration count 102 and migration SHA-256.
11. Prove backend tracked worktree clean.

No force push, rebase or history rewrite.

---

## 8. Authority closeout

Update only the established Creator Brand authority lineage.

Required files:

```text
docs/ai-collaboration/creator-centre/creator-brand-v0/EXECUTION_LEDGER.md
docs/ai-collaboration/creator-centre/creator-brand-v0/P1_CANONICAL_PERSISTENCE_AND_MANUAL_API.md
docs/ai-collaboration/creator-centre/creator-brand-v0/runner-prompts/CREATOR_BRAND_V0_P1_CORRECTION_1_PUBLICATION_AND_CLEANUP_CLOSEOUT_LOCAL_CODEX_PROMPT_V1.md
```

The ledger/artifact must record:

- `P0 = ACCEPTED_BY_TECHNICAL_SA`, correction cycles 0;
- P0 ignored-artifact exception as non-blocking and not inherited into published trees;
- P1 primary evidence and exact recovery-state manifest/digest;
- exact migration 102 identity;
- all primary-run gates already proven;
- correction closeout revalidation;
- exact cleanup disposition;
- final backend/frontend/authority SHAs and trees where possible;
- P1 evidence-ready but not self-accepted;
- P2 prohibited pending Technical-SA review.

Archive this exact prompt. Permit only CRLF/LF and one terminal-newline normalization; prove normalized SHA-256 equality.

Commit the authority closeout, normal non-force push, fetch/prune and prove local/fetched SHA/tree equality and both required authority ancestries.

Frontend remains unchanged and must be proved locally/fetched equal at its accepted SHA/tree. Do not create a meaningless frontend commit.

---

## 9. Prohibited work

Do not:

- alter P1 backend/schema/migration/test source;
- add or remove an authorized P1 file;
- start P2 suggestions or Content adapter work;
- start P3 frontend;
- add another migration;
- change packages/lockfiles;
- modify Product authority or consume a newer dirty register;
- change Settings, Audience, Content, Campaign, Collaboration, Media Kit, Portfolio or Commercial Setup;
- merge to `development`;
- deploy;
- call live Graph/model/provider systems;
- force push, rebase or reset the preserved dirty worktree;
- delete shared dependencies or user files.

---

## 10. Required immutable return

Return exactly:

```text
CREATOR_BRAND_V0_P1_CORRECTION_1_EXTERNAL_LOCAL_CODEX_REPORT_V1
```

with sections:

```text
A. EXACT RECOVERY SHA/TREE/WORKTREE/REMOTE PROOF
B. AUTHORIZED 18-FILE STATE AND RECOVERY DIGEST
C. MIGRATION 102 BYTE IDENTITY
D. SOURCE-NON-MUTATION PROOF
E. TASK-OWNED CLEANUP CLASSIFICATION
F. CLEANUP ACTION OR NON-BLOCKING POLICY EXCEPTION
G. MINIMAL BUILD/TEST/LINT/DIFF REVALIDATION
H. PRIMARY POSTGRESQL/API/BOOT EVIDENCE PRESERVATION BASIS
I. BACKEND COMMIT AND PUBLICATION/FETCH-BACK
J. FRONTEND UNCHANGED PROOF
K. P0 ACCEPTANCE LEDGER CANONICALIZATION
L. P1 AUTHORITY ARTIFACT/PROMPT ARCHIVE
M. AUTHORITY PUBLICATION/FETCH-BACK
N. SECRET/RAW-MEDIA/FORBIDDEN-ARTIFACT SCAN
O. LIVE CALL COUNTS
P. FINAL WORKTREE/PROCESS/CONTAINER/PORT STATE
Q. CORRECTION-CYCLE ACCOUNTING
R. EXACT BLOCKER, IF ANY
```

End exactly:

```text
RESULT =
READY_FOR_CHILD_SA_PROGRAM_ORCHESTRATOR_REVIEW
| CREATOR_BRAND_P1_SOURCE_CORRECTION_REQUIRED
| CREATOR_BRAND_P1_CIRCUIT_BREAKER

P0 =
ACCEPTED

P1_ACCEPTED =
NO — AWAITING CHILD-SA / PROGRAM-ORCHESTRATOR REVIEW

P1_EVIDENCE_READY =
YES | NO

P1_PRIMARY_RUNS_USED =
1

P1_CORRECTION_CYCLES_USED =
1

P2 =
PROHIBITED

CLEANUP_DISPOSITION =
COMPLETE | NON_BLOCKING_LOCAL_RUNNER_HYGIENE_EXCEPTION

LIVE_GRAPH_CALLS =
NONE

LIVE_MODEL_CALLS =
NONE

META_PROVIDER_MUTATIONS =
NONE

NEW_MIGRATIONS =
1

MIGRATION_COUNT =
102

DEVELOPMENT_MERGE =
NOT_PERFORMED

DEPLOYMENT =
NOT_PERFORMED

NEXT_ACTION =
PARENT RETURNS THIS IMMUTABLE REPORT
TO THE CHILD SA / PROGRAM ORCHESTRATOR
```

Do not self-declare P1 accepted. Do not start P2.
