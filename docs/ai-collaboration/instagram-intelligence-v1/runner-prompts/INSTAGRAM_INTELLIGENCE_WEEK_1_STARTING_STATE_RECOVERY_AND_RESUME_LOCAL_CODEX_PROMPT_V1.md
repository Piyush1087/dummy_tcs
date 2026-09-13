# Instagram Intelligence — Week 1 Starting-State Recovery + Execution Resume — External Local Codex V1

`INSTAGRAM_INTELLIGENCE_WEEK_1_STARTING_STATE_RECOVERY_AND_RESUME_LOCAL_CODEX_V1`

You are the authorized **External Local Codex runner** for a bounded Week 1
starting-state recovery followed by the unchanged Week 1 implementation.

This instruction responds to:

```text
INSTAGRAM_INTELLIGENCE_WEEK_1_EXTERNAL_LOCAL_CODEX_REPORT_V1
RESULT = W1_STARTING_STATE_MISMATCH
```

The prior stop was correct. It found no implementation defect, changed no file,
and consumed no Week 1 correction cycle.

This file is delivered from the docs-only branch:

```text
program/instagram-intelligence-week1-prompt-v1
```

That branch is transport only. Do not use it as implementation or authority
base.

---

## 1. Program-Orchestrator adjudication

```text
W1_STARTING_STATE_MISMATCH = ACCEPTED_AS_ACCURATE_PREFLIGHT_STOP
ROOT_CAUSE = CLEAN_LOCAL_AUTHORITY_BRANCH_ONE_COMMIT_BEHIND_ACCEPTED_REMOTE
W1_TRUE_CIRCUIT_BREAKER = NO
W1_CORRECTION_REQUIRED = NO
W1_CORRECTION_CYCLES_USED = 0
W1_PRIMARY_IMPLEMENTATION_RUNS_USED = 0
W1_STARTING_STATE_RECOVERY_RUNS_USED = 1
W1 = AUTHORIZED_TO_RESUME_AFTER_EXACT_FAST_FORWARD
W2 = PROHIBITED
```

The previous runner invocation is reclassified as a starting-state recovery
attempt, not the Week 1 implementation primary run.

---

## 2. Exact accepted state

### Authority local state reported by the runner

```text
REPOSITORY = Piyush1087/dummy_tcs
BRANCH = program/instagram-intelligence-v1-authority
LOCAL_SHA = 261bd1d4ddb6ffe4cb3a06ab00b83f3b0a9ef320
LOCAL_TREE = 4305067d3d29d0d5429a29e103cf2ab5b3e92249
LOCAL_WORKTREE = CLEAN
```

### Required accepted authority state

```text
FETCHED_REMOTE_SHA = 55efc544234758b2c694b3d5fbd3bdcf8b8877da
FETCHED_REMOTE_TREE = 37775870c7e91c21c44621097d032fb004d9f27c
RELATIONSHIP = LOCAL_SHA_IS_DIRECT_PARENT_OF_FETCHED_REMOTE_SHA
```

### Backend

```text
SHA = d5b9de557ed983a9c3af26b1edc305ba8b77d6f3
TREE = 67d2642871899fda9e7bd9248b8d56892c3d6e6d
BRANCH = program/instagram-intelligence-v1-backend
EXPECTED_WORKTREE = CLEAN
EXPECTED_MIGRATION_COUNT = 90
```

### Frontend

```text
SHA = 5866d0ac82f742957f53a8db2144a9a166628b75
TREE = 7c095290ffdef4c84f37382bc594bef536c92a49
BRANCH = program/instagram-intelligence-v1-frontend
EXPECTED_WORKTREE = CLEAN
```

---

## 3. Authorized recovery mutation

Before any source implementation:

1. Resolve the same three local repository paths used in the prior run.
2. Run normal `fetch --prune` in each repository.
3. Reverify backend/frontend exact equality and clean worktrees.
4. In the authority repository, verify all of:

```text
current local branch is program/instagram-intelligence-v1-authority
local SHA/tree equals 261bd1d4... / 4305067d...
fetched remote SHA/tree equals 55efc544... / 37775870...
git merge-base --is-ancestor LOCAL_SHA FETCHED_REMOTE_SHA succeeds
git rev-list --count LOCAL_SHA..FETCHED_REMOTE_SHA equals 1
authority worktree is clean
```

5. Fast-forward the local authority branch using only:

```text
git merge --ff-only origin/program/instagram-intelligence-v1-authority
```

Equivalent `git pull --ff-only` is allowed only if it resolves the same already-
fetched remote branch.

6. Verify after the fast-forward:

```text
LOCAL_SHA = FETCHED_REMOTE_SHA = 55efc544234758b2c694b3d5fbd3bdcf8b8877da
LOCAL_TREE = FETCHED_REMOTE_TREE = 37775870c7e91c21c44621097d032fb004d9f27c
WORKTREE = CLEAN
```

This exact clean one-commit fast-forward is authorized. It is not a reset,
reconstruction, correction cycle, history rewrite, or Product change.

Do not reset, clean, stash, discard, rebase, force checkout, force push, create
a merge commit, or modify the authority files during the recovery step.

If any prerequisite differs, stop with:

```text
W1_RECOVERY_STATE_MISMATCH
```

and report the exact SHA/tree/ancestry/worktree difference.

---

## 4. Resume the original Week 1 execution

After the exact fast-forward succeeds, execute the original Week 1 instruction
in full without reinterpretation:

```text
FILE = INSTAGRAM_INTELLIGENCE_WEEK_1_SHARED_VIDEO_FOUNDATION_LOCAL_CODEX_EXECUTION_PROMPT_V1.md
PATH = docs/ai-collaboration/instagram-intelligence-v1/runner-prompts/INSTAGRAM_INTELLIGENCE_WEEK_1_SHARED_VIDEO_FOUNDATION_LOCAL_CODEX_EXECUTION_PROMPT_V1.md
SOURCE_COMMIT = e08469f67b90108661e9cd85fd25c8a4803f7ad0
SOURCE_BLOB_SHA = 48acac9b0fda0c839cdd34fd40193e2fbd5fbc10
SOURCE_FILE_SHA256 = 46dc3bfb9ba53899a4f930f5be3e944820b591e78a59f20fe8251308796bf55b
```

The Parent should supply the original prompt file alongside this recovery file.
Verify its byte hash before execution.

Do not check out or merge the prompt-delivery branch. Treat the supplied prompt
as an immutable instruction artifact while continuing from the accepted
authority/backend/frontend program branches.

All original scope, technical constants, security requirements, test gates,
prohibitions, publication rules, circuit breakers, and return-contract fields
remain unchanged.

In particular:

```text
WEEK_1 = SHARED VIDEO FOUNDATION + SELECTED BRAND REEL FRAME ANALYSIS
WEEK_2 = PROHIBITED
CREATOR IMPLEMENTATION = PROHIBITED
DEVELOPMENT MERGE = PROHIBITED
DEPLOYMENT = PROHIBITED
```

---

## 5. Prompt and authority publication

If the resumed Week 1 run becomes evidence-ready, copy both exact files into the
authority repository:

```text
INSTAGRAM_INTELLIGENCE_WEEK_1_SHARED_VIDEO_FOUNDATION_LOCAL_CODEX_EXECUTION_PROMPT_V1.md
INSTAGRAM_INTELLIGENCE_WEEK_1_STARTING_STATE_RECOVERY_AND_RESUME_LOCAL_CODEX_PROMPT_V1.md
```

Also create the Week 1 evidence artifact and Creator reuse manifest and update
the single execution ledger exactly as required by the original prompt.

Record the setup event separately:

```text
W1_STARTING_STATE_RECOVERY_RUNS_USED = 1
W1_PRIMARY_IMPLEMENTATION_RUNS_USED = 1
W1_CORRECTION_CYCLES_USED = 0
```

The primary implementation count becomes `1` only after the resumed run enters
implementation. Do not count the earlier preflight stop again.

Use normal non-force publication and independent fetch-back. Do not self-accept
Week 1.

---

## 6. Required return

Return the complete original:

```text
INSTAGRAM_INTELLIGENCE_WEEK_1_EXTERNAL_LOCAL_CODEX_REPORT_V1
```

with every section `A` through `AK` from the original prompt.

Prepend to Section A:

```text
STARTING_STATE_RECOVERY = PASS | FAIL
PRE_RECOVERY_LOCAL_AUTHORITY_SHA/TREE =
FETCHED_AUTHORITY_SHA/TREE =
ANCESTRY_DISTANCE =
FAST_FORWARD_COMMAND =
POST_RECOVERY_LOCAL/FETCHED_SHA/TREE_EQUALITY =
POST_RECOVERY_WORKTREE =
```

If recovery fails, later sections may state `NOT_RUN — W1_RECOVERY_STATE_MISMATCH`.

End using the original result contract, with this additional allowed result:

```text
RESULT = W1_RECOVERY_STATE_MISMATCH
```

On a successful resumed run, end with the original evidence-ready/correction/
circuit-breaker classification and additionally include:

```text
W1_STARTING_STATE_RECOVERY_RUNS_USED = 1
W1_PRIMARY_IMPLEMENTATION_RUNS_USED = 1
W1_CORRECTION_CYCLES_USED = <COUNT>
```

Then stop for Child-SA / Program-Orchestrator review.
