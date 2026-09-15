# A1 Exact Authority and Clean Convergence

```text
PACKET = A1
RESULT = READY_FOR_CHILD_SA_REVIEW_WITH_REMOTE_PUBLICATION_BLOCKED
EXECUTED_AT = 2026-09-10 UTC
FEATURE_SOURCE_WORK = NONE
MIGRATIONS = NONE
PROVIDER_OR_META_CALLS = NONE
FORCE_PUSH = NONE
```

## 1. Scope and authority

This checkpoint executes only Packet A1 of `INSTAGRAM_INTELLIGENCE_DEFINITIVE_ARCHITECTURE_AND_FINITE_EXECUTION_PLAN_V1_1`: fetch and anchor verification, dependency convergence evidence, dirty-state isolation, local normal implementation branches/worktrees, and execution documentation.

No backend/frontend feature source, Prisma schema, migration, product contract, provider configuration, Meta state, or UX was changed.

## 2. Original checkout state

The three supplied roots were inspected before any mutation with:

```bash
git status --porcelain=v2 --branch
git rev-parse HEAD HEAD^{tree}
git remote -v
git worktree list --porcelain
```

| Supplied root | Initial state | Initial SHA | Initial tree | Preservation decision |
|---|---|---|---|---|
| `dummy_tcs` | clean, detached | `3ac9895901092e3de2e4e803501b3c0db0aa8c75` | `c827836ea3f7dfc52470ea6ffca8b7c2eebbfdfb` | Left untouched; separate authority worktree created |
| `backend` | clean, detached | `4c5f42858b950b7cd342f8972f99f548f3daa942` | `5f9b82c09abfe021e2421a0e8debea6ac777429d` | Left untouched; separate backend worktree created |
| `frontend` | clean, detached | `323658d4b147b95b5629ff8d91fa90b8fe9077e4` | `4ff40849c64a98429a89cc8e4f1ff6949815070c` | Left untouched; separate frontend worktree created |

No staged, unstaged, untracked, conflicted, or ignored user change required relocation. The original checkout roots remain untouched.

## 3. Fetch and exact anchor proof

Each repository completed:

```bash
git fetch --prune origin '+refs/heads/*:refs/remotes/origin/*'
```

All fetches exited `0`. A moving branch name was not accepted by itself: the fetched SHA, commit existence, tree, ancestry, merge base, and left/right count were verified against the frozen values.

| Repository | Fetched freeze SHA | Tree | Parent lineage | Merge base | Left/right count | Result |
|---|---|---|---|---|---|---|
| `dummy_tcs` | `1748c97b65e8c57d5a640b262c1f9ec4f6c54170` | `f47e18b32157cc9924fa97bc6e5efe9f9fd540ac` | `origin/main` = `3ac9895901092e3de2e4e803501b3c0db0aa8c75` | same main SHA | `0 13` | exact match; main is ancestor |
| backend | `a95d0d871cbb04d37ab9cb042e17a1e397a1fb9d` | `d5a31a9bff38b56ad01c2197b3d37514e0f39955` | `origin/development` = `4c5f42858b950b7cd342f8972f99f548f3daa942` | same development SHA | `0 132` | exact match; development is ancestor |
| frontend | `249de1a2fcaeffa013dbeb9d042f7387f8d3f972` | `a8e3a5937e4001997736d0c05a0e06f1c99b7d1b` | `origin/development` = `323658d4b147b95b5629ff8d91fa90b8fe9077e4` | same development SHA | `0 63` | exact match; development is ancestor |

The freeze refs have not moved from the V1.1 plan anchors. No replacement-authority reconciliation is required.

## 4. Dependency ancestry and convergence

### Backend

| Dependency ref | SHA | Tree | Relation to backend freeze | Merge base | Left/right |
|---|---|---|---|---|---|
| `origin/phase-g/brand-intelligence-w1-3d-serviceability` | `7d87fc5c233a1ce3e1f4381322479b0c4e242d4b` | `3b4304334a7853c59e1da1cf2f12d4982034f92a` | ancestor | dependency SHA | `0 201` |
| `origin/phase-g/data-extraction-wave2-brand-mvp` | `a67afb5e4877605fb7a1b6401434e13f84b96cba` | `99b9d52e5827eb804b9abb6021d5235a9f647250` | ancestor | dependency SHA | `0 205` |
| `origin/program/brand-settings-mvp` | `517531682f6286d5ee45bd48ec4e145e96d583a7` | `33fa262c0ff5f02036771b71c1bf033330d037ee` | ancestor | dependency SHA | `0 174` |
| `origin/c03/recovery-campaign-participation-v1` | `aebeb85fd6bba37f88c3805c213c61e7f63b2f5f` | `86c5bb769598dd19a634dcd867350e53eaa06f75` | ancestor | dependency SHA | `0 113` |
| `origin/c04/shared-collaboration-backend-v1` | `fc4d4b59e2a44d7ddced6bc5dde5119c501ec275` | `083c52dc06c19a23f47491935b472ee5e62bd1c5` | divergent | `aebeb85fd6bba37f88c3805c213c61e7f63b2f5f` | `7 113` |
| `origin/phase-g/product-intelligence-v1` | `f3a2d7b19f5692ad10e5d13751ee880e1604f93a` | `ad93a6b26af2af767b47b2a706ef91f6bd43dbf8` | ancestor | dependency SHA | `0 184` |

### Frontend

| Dependency ref | SHA | Tree | Relation to frontend freeze | Merge base | Left/right |
|---|---|---|---|---|---|
| `origin/program/brand-settings-mvp` | `3e2cabbe95c16ee23bd77fe20a44fe9b1d8670d2` | `e419a0ae1a12e7e39e8c83502f47cdad170ab8c0` | ancestor | dependency SHA | `0 76` |
| `origin/c03/recovery-campaign-participation-v1` | `66d6a9bc992afcdfb900d7837defd867670bf640` | `50bddd231d4fcab3f4df20867b977343b0443225` | ancestor | dependency SHA | `0 60` |
| `origin/c04/shared-collaboration-frontend-v1` | `106de9988ea2d4bd534205b083f63ae7ecd1878c` | `6481cad5ca026ffeac6010f2e9724a1ee160c201` | divergent | `82ed3c9ef849be8353565a1901b6f5fb065c37e1` | `1 55` |
| `origin/feature/product-intelligence-v1-frontend` | `6bc9659ec87d9b960caaf3c6314e0f4da7b2596f` | `66f89743da40155012f728507ab6bec5ef05ca5c` | ancestor | dependency SHA | `0 86` |
| `origin/phase-g/brand-centre-brand-reconciliation` | `d89810cfcb70c780054357c6571e51f1f13e258c` | `a0279c946152e352b0cc4dbc37900886e28a3969` | ancestor | dependency SHA | `0 88` |

All planned dependency SHAs and trees match their fetched refs.

## 5. C04 boundary

C04 remains divergent and is not a convergence target:

- Backend: 7 C04-only and 113 freeze-only commits from Campaign C03 merge base; 44 changed-on-both paths.
- Frontend: 1 C04-only and 55 freeze-only commits; no changed-on-both path in the computed diff intersection.
- Backend changed-on-both paths include `prisma/schema.prisma` plus Collaboration, escrow, pricing, and integrity surfaces.

Decision:

```text
C04_ROLE = CREATOR_AND_COLLABORATION_VOCABULARY_AND_CONTRACT_AUTHORITY_ONLY
C04_WHOLESALE_MERGE = PROHIBITED
INSTAGRAM_IMPLEMENTATION_BASE = ACCEPTED_FREEZE_LINEAGE
LATER_C04_INTEGRATION = NORMAL_SEPARATELY_AUTHORIZED_RECONCILIATION_ONLY
```

This avoids importing unrelated divergent persistence and Collaboration runtime changes merely to implement Instagram Intelligence.

## 6. Campaign terminology authority

The accepted backend freeze's executable Prisma contract contains:

```prisma
enum CampaignObjective {
  PULSE
  PROOF
  PUSH
  PRODUCTION
}
```

Therefore:

```text
CAMPAIGN_OBJECTIVE_AUTHORITY = PULSE | PROOF | PRODUCTION | PUSH
AWARENESS_TRUST_ASSETS_ACTION = NOT_IMPLEMENTATION_AUTHORITY
INSTAGRAM_OWNS_CAMPAIGN_OBJECTIVE = FALSE
```

The order used in prose does not change enum meaning.

## 7. Isolated implementation worktrees

Normal local branches were created directly from the exact frozen SHAs with `git worktree add -b`; no merge, cherry-pick, rebase, reset, checkout-overwrite, or force operation occurred.

| Repository | Local branch | Worktree | Starting/ending implementation SHA | Starting/ending implementation tree | State before A2 |
|---|---|---|---|---|---|
| `dummy_tcs` | `program/instagram-intelligence-v1-authority` | `/workspace/scratch/d54011533d60/instagram-intelligence-v1-worktrees/authority` | starts `1748c97b65e8c57d5a640b262c1f9ec4f6c54170`; ends at the A1 docs commit reported by the runner | starts `f47e18b32157cc9924fa97bc6e5efe9f9fd540ac`; ending tree reported by the runner | only the two A1 documents differ |
| backend | `program/instagram-intelligence-v1-backend` | `/workspace/scratch/d54011533d60/instagram-intelligence-v1-worktrees/backend` | `a95d0d871cbb04d37ab9cb042e17a1e397a1fb9d` | `d5a31a9bff38b56ad01c2197b3d37514e0f39955` | clean, no feature changes |
| frontend | `program/instagram-intelligence-v1-frontend` | `/workspace/scratch/d54011533d60/instagram-intelligence-v1-worktrees/frontend` | `249de1a2fcaeffa013dbeb9d042f7387f8d3f972` | `a8e3a5937e4001997736d0c05a0e06f1c99b7d1b` | clean, no feature changes |

The authority artifact cannot contain the SHA of the commit that contains itself. The runner's signed-off command evidence supplies that exact commit/tree, and the accepted successor checkpoint must cite it.

## 8. Remote publication and fetch-back

The Child SA requested normal remote branch creation if credentials permitted. A normal `git push --set-upstream origin <implementation-branch>` was attempted for backend/frontend as one bounded operation. The execution environment rejected the external mutation before either Git command ran because the user had not separately authorized disclosure/publication to the remote destination. No workaround or force push was attempted.

Independent read-only verification then showed all three remote implementation refs absent:

```text
refs/heads/program/instagram-intelligence-v1-authority = ABSENT
refs/heads/program/instagram-intelligence-v1-backend = ABSENT
refs/heads/program/instagram-intelligence-v1-frontend = ABSENT
```

```text
REMOTE_REPOSITORY_MUTATION = NONE
FETCH_BACK = NOT_APPLICABLE_NO_REMOTE_WRITE
LOCAL_BRANCHES = PRESENT_AND_CLEAN
REMOTE_PUBLICATION = BLOCKED_BY_EXECUTION_POLICY
FORCE_OR_BYPASS_ATTEMPT = NONE
```

This is an execution-environment publication constraint, not a base-authority, architecture, schema, or Product conflict. The Child SA must decide whether a later explicitly authorized normal publication step is required before A2; the runner must not infer that authority.

## 9. Focused acceptance commands

The evidence was produced with read-only variants of:

```bash
git show-ref --verify <exact remote ref>
git cat-file -e <frozen SHA>^{commit}
git rev-parse <SHA>^{tree}
git merge-base --is-ancestor <parent-or-dependency> <freeze>
git merge-base <dependency> <freeze>
git rev-list --left-right --count <dependency>...<freeze>
comm -12 <(git diff --name-only <merge-base> <dependency> | sort) \
         <(git diff --name-only <merge-base> <freeze> | sort)
git status --porcelain=v2 --branch
git ls-remote --heads origin <implementation-ref>
```

Expected results were observed: all exact refs/trees present; all non-C04 dependencies are ancestors; C04 divergence matches the plan; worktrees start at exact anchors; backend/frontend remain clean; no user changes were lost.

## 10. A1 boundary

```text
A1_LOCAL_WORK = COMPLETE
A1_REMOTE_PUBLICATION = BLOCKED_NOT_BYPASSED
A2 = NOT_STARTED
FEATURE_IMPLEMENTATION = NOT_STARTED
SCHEMA_OR_MIGRATION = NOT_STARTED
META_OR_PROVIDER_MUTATION = NOT_STARTED
UX_IMPLEMENTATION = NOT_STARTED
NEXT_AUTHORITY = CHILD_SA_REVIEW_OF_A1_EVIDENCE
```
