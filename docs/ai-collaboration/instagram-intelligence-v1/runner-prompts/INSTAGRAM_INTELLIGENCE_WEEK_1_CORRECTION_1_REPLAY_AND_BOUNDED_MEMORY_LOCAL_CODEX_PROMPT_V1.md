# INSTAGRAM INTELLIGENCE — WEEK 1 CORRECTION 1: REPLAY + BOUNDED MEMORY V1

`INSTAGRAM_INTELLIGENCE_WEEK_1_CORRECTION_1_REPLAY_AND_BOUNDED_MEMORY_LOCAL_CODEX_PROMPT_V1`

You are the authorized external Local Codex runner for a single bounded Week 1 correction.

Do not restart Week 1. Do not reinterpret Product decisions. Continue from the exact published Week 1 implementation checkpoint and correct only the defects named here.

## 1. Accepted execution topology
```text
PROGRAM ORCHESTRATOR / CHILD SA
= technical acceptance authority

PARENT / USER
= manual prompt/report relay

EXTERNAL LOCAL CODEX
= local implementation, PostgreSQL, Docker/runtime, tests, Git publication
```

This prompt authorizes one normal Week 1 correction cycle.

## 2. Exact required starting state

Fetch/prune normally, then verify clean local/fetched equality and exact SHA/tree identity before mutation.

### Backend
```text
repository = Piyush1087/creator-commerce-backend-v2-clone
branch = program/instagram-intelligence-v1-backend
SHA = 4eb459d01d45e21f63fd7e85e0eb57784c0c1b83
tree = 2c96a589a48a214c9c2980961dfe3a7a8885b926
```

### Frontend
```text
repository = Piyush1087/creator-commerce-frontend-v2-clone
branch = program/instagram-intelligence-v1-frontend
SHA = 5866d0ac82f742957f53a8db2144a9a166628b75
tree = 7c095290ffdef4c84f37382bc594bef536c92a49
```

### Program authority
```text
repository = Piyush1087/dummy_tcs
branch = program/instagram-intelligence-v1-authority
SHA = 7c4a76df7910c8e23c1b89982b35fb00c9fc39be
tree = c86562b04f48da9fe25a86ddb053a3ec52bc2e55
```

If any identity differs, a worktree is dirty, or overlapping user work exists, do not reset, clean, stash, discard, or overwrite it. Stop with:
```text
W1_CORRECTION_1_STARTING_STATE_MISMATCH
```

## 3. Accepted Week 1 authority to preserve

Read and reconcile:
```text
AGENTS.md
AI_ENGINEERING_STANDARD.md
applicable backend / validation / database / AI-integration standards
docs/ai-collaboration/instagram-intelligence-v1/INSTAGRAM_INTELLIGENCE_INCREMENTAL_REEL_CAPABILITY_RELEASE_CHARTER_V1.md
docs/ai-collaboration/instagram-intelligence-v1/W1_SHARED_VIDEO_FOUNDATION_AND_SELECTED_BRAND_REEL_ANALYSIS.md
docs/ai-collaboration/instagram-intelligence-v1/INSTAGRAM_INTELLIGENCE_CREATOR_VIDEO_FOUNDATION_REUSE_MANIFEST_V1.md
docs/ai-collaboration/instagram-intelligence-v1/EXECUTION_LEDGER.md
the published Week 1 backend implementation and tests
```

Preserve all accepted Week 1 behavior except the exact defects below. Week 2 remains prohibited.

## 4. Confirmed correction findings

### Finding A — replay occurs after acquisition

The published pipeline currently performs:
```text
Settings-authorized locator
→ video download
→ verified SHA
→ replay lookup
```

Therefore an exact replay still repeats locator acquisition and the complete video download. This contradicts the Week 1 evidence statement that exact replay avoids locator/download and the frozen requirement that an unchanged exact successful identity not repeat unnecessary expensive video work.

### Finding B — replay changes coverage truth

The published replay projection derives:
```text
framesRequested = Evidence row count
framesExtracted = Evidence row count
framesObserved = Evidence row count
```

A prior partial execution such as `6 requested / 3 extracted / 2 observed` is therefore replayed as `2 / 2 / 2`. Exact replay must preserve the original coverage truth and must not silently turn partial coverage into apparent completeness.

### Finding C — signature validation reads the whole video

`instagram-secure-video-downloader.ts` reads the first 12 bytes for the MP4 signature and then calls `readFile(path)` on the entire already bounded video only to repeat a length check. With a 100 MiB accepted maximum, this creates an unnecessary full-file memory allocation.

The signature check must remain bounded to the minimum required bytes. Do not weaken the streamed download limit, signature validation, ffprobe validation, or any secure-media control.

## 5. Authorized correction scope

Authorize only the backend source/tests and authority documents directly required to:

1. perform a safe pre-acquisition exact-success replay lookup;
2. preserve original replay coverage/partial truth;
3. eliminate the unnecessary full-video memory read; and
4. correct the Week 1 evidence/ledger statements after proof.

Expected primary surfaces include:
```text
src/features/instagram-intelligence/media/instagram-w1-video-pipeline.service.ts
src/features/instagram-intelligence/media/instagram-w1-video-pipeline.service.test.ts
src/features/instagram-intelligence/media/instagram-w1-video-pipeline.postgres.test.ts
src/features/instagram/media/video/instagram-secure-video-downloader.ts
src/features/instagram/media/video/instagram-video-foundation.test.ts
src/features/brand-settings/services/instagram-intelligence-video-acquisition.service.ts
```

The Settings service is listed only because replay must retain a current non-secret authorization fence without forcing credential decryption or provider access. Inspect and reuse existing authorization semantics; do not duplicate Settings lifecycle ownership.

No frontend change is expected.

## 6. Required replay behavior

Implement the smallest compatible design satisfying all of the following:
```text
current Settings/Brand/account/authorization-generation/status/capability fence
→ pre-acquisition exact replay lookup
→ if valid successful replay exists, return it without locator or video download
→ otherwise acquire safely
→ compute/retain verified video SHA
→ decode/extract/observe/persist as already accepted
```

The pre-acquisition replay key/manifest must be deterministic and must bind at least:
```text
Brand/tenant subject
provider account
authorization generation
provider media identity
exact admitted source Capture/Evidence identity
window/cutoff identity
video analysis profile
frame-selection profile
frame observation contract and prompt profile
model provider/identity/profile version
C3 semantic profile/version where already part of the accepted identity
```

Preserve the verified video fingerprint in the persisted full execution identity and lineage after actual acquisition. Do not pretend an unverified provider locator or URL is a content fingerprint.

An implementation may add a bounded replay-manifest field to already permitted structured Evidence/artifact payloads. It must not add a schema/migration, raw-media cache, signed-locator cache, parallel lifecycle, or direct database current write.

Before accepting a replay, retain the current non-secret Settings authorization fence. A disconnected, inactive, mismatched-account, stale-generation, unverified-capability, or cross-Brand request must not reuse prior rows as though execution were currently authorized. The replay path must not require token decryption or a provider call.

Changed source identity, media identity, Brand, account, authorization generation, window/cutoff, profile, contract, or model identity must not collide with the replay identity.

For compatibility with rows created by the published Week 1 checkpoint, a bounded post-acquisition legacy replay lookup may remain if needed. It must not weaken the new no-acquisition replay proof for newly corrected executions.

## 7. Required coverage preservation

Persist or retrieve sufficient bounded metadata so that replay returns the original truthful values:
```text
framesRequested
framesExtracted
framesObserved
original AVAILABLE/PARTIAL semantic coverage
Evidence refs
```

Required example:
```text
first execution = 6 requested / 3 extracted / 2 observed / PARTIAL
exact replay = 6 requested / 3 extracted / 2 observed / PARTIAL
```

Do not infer requested/extracted counts from Evidence count. Do not convert a prior partial execution into complete coverage. Do not reuse a zero-Evidence failure as a successful replay.

If adding a bounded result field or internal projection is necessary to preserve availability truth, keep it internal/backward-compatible and do not expand the public Instagram workspace API.

## 8. Required bounded-memory correction

In the secure video downloader:
```text
retain streamed 100 MiB enforcement
retain declared/dishonest/chunked length checks
retain MP4 signature validation
retain ffprobe container/codec/duration checks
remove whole-video readFile buffering from signature validation
read only the bounded signature bytes needed
```

Add regression/architecture proof that the downloader does not load the complete video into a Buffer for validation. Per-frame reads remain allowed because each frame is independently capped at 4 MiB.

## 9. Mandatory tests and evidence

Run changed-surface tests plus the focused Week 1 gates affected by this correction.

At minimum prove:

### Unit/contract
```text
two sequential exact executions call the authorization-only fence twice
two sequential exact executions call locator/acquisition/download exactly once
probe/extraction/model run exactly once
second result is marked reused
Evidence refs remain exact
row counts remain stable
```
```text
partial first execution preserves exact 6/3/2 coverage on replay
partial replay remains truthfully partial
zero-Evidence failure is not treated as successful replay
changed profile/model/source/window/media/account/generation does not reuse
disconnected/inactive/stale/mismatched/cross-Brand replay is rejected before reuse
```
```text
video signature validation reads only a bounded prefix
100 MiB-capable path has no whole-file Buffer read
oversized declared/chunked/dishonest responses still fail and clean up
valid MP4 still passes
```

### PostgreSQL

Using disposable PostgreSQL with all 90 accepted migrations:
```text
first successful/partial execution persists accepted lineage
exact replay makes no new Capture/Evidence/Observation/generation/current rows
exact replay performs no acquisition/download/probe/extract/model work
original coverage metadata is recovered exactly
tenant/account/generation/media/source isolation remains atomic
Settings delete-data remains target-only
changed-profile failure preserves prior current
```

No new migration is expected. If a schema/migration or public-contract change is genuinely required, stop with:
```text
W1_CORRECTION_1_SCOPE_EXPANSION_REQUIRED
```

Also run:
```text
Prisma generate/validate
backend production build
scoped ESLint/format checks
git diff --check
focused B1–C4/Week 1 regression tests touched by the change
secret/raw-media/locator/temporary-artifact scan
```

Re-run the production Docker decoder proof only if the Docker/runtime surface changes. Otherwise prove the accepted Dockerfile and decoder configuration remain byte-identical.

## 10. Prohibited work

Do not:
```text
start Week 2 or any later weekly capability
add transcript/audio/scene/pacing/brief-compliance work
change Product or UX
change the public Instagram consumer API
change the frontend
change C2 arithmetic or C3/C4 semantics beyond replay preservation
change the 30-day window
add a migration or durable raw-media cache
persist raw video, frames, signed locators, provider payloads, tokens, or temporary paths
weaken SSRF, streamed limits, redirects, timeouts, decoder bounds, cleanup, or fencing
bypass Settings authority
perform live Graph/model calls
merge to development
deploy
force push or rewrite history
```

## 11. Authority evidence and publication

Only after all mandatory gates pass:

1. commit the bounded backend correction;
2. normal non-force push;
3. fetch/prune independently and prove local/fetched SHA/tree equality;
4. update the existing Week 1 authority artifact and single execution ledger;
5. add a concise Week 1 correction-1 evidence record if consistent with repository convention;
6. correct the prior claim so documentation states only what the tested replay path actually avoids;
7. store an exact copy of this prompt under the existing authority `runner-prompts/` directory;
8. normal non-force push the authority branch and independently fetch back;
9. leave all worktrees clean.

Do not self-accept Week 1. Record it as evidence-ready for Child-SA / Program-Orchestrator review.

## 12. Immutable return contract

Return exactly one report headed:
```text
INSTAGRAM_INTELLIGENCE_WEEK_1_CORRECTION_1_EXTERNAL_LOCAL_CODEX_REPORT_V1
```

Include:
```text
A. exact starting SHA/tree/worktree verification
B. standards/authority reconciliation
C. changed files and diff statistics
D. pre-acquisition replay architecture and Settings fence proof
E. deterministic replay identity/manifest fields
F. no-locator/no-download/no-decode/no-model replay call-count proof
G. original partial coverage preservation proof
H. zero-Evidence and changed-identity non-reuse proof
I. bounded-prefix signature validation and memory proof
J. secure downloader regression proof
K. PostgreSQL row counts, lineage and replay stability
L. failure-current preservation
M. tenant/account/generation/media/source isolation
N. Settings delete-data proof
O. predecessor/Week 1 regression matrix
P. schema/migration/dependency/Docker identity
Q. build/lint/diff/secret/forbidden-artifact results
R. live-call proof
S. backend publication/fetch-back equality
T. frontend unchanged proof
U. authority publication/fetch-back equality
V. final cleanup
W. correction-cycle accounting
X. exact blocker, if any
```

End with:
```text
RESULT =
READY_FOR_CHILD_SA_PROGRAM_ORCHESTRATOR_REVIEW
|
W1_CORRECTION_1_REQUIRED
|
W1_CORRECTION_1_SCOPE_EXPANSION_REQUIRED
|
W1_CORRECTION_1_TRUE_CIRCUIT_BREAKER_CANDIDATE

W1_ACCEPTED =
NO — AWAITING CHILD-SA / PROGRAM-ORCHESTRATOR REVIEW

W1_EVIDENCE_READY =
YES | NO

W1_CORRECTION_CYCLES_USED =
1

W2 =
PROHIBITED

LIVE_GRAPH_CALLS =
NONE

LIVE_MODEL_CALLS =
NONE

META_PROVIDER_MUTATIONS =
NONE

RAW_VIDEO_PERSISTED =
NO

RAW_FRAMES_PERSISTED =
NO

NEW_MIGRATIONS =
NONE

DEVELOPMENT_MERGE =
NOT_PERFORMED

DEPLOYMENT =
NOT_PERFORMED

NEXT_ACTION =
PARENT RETURNS THIS IMMUTABLE REPORT
TO THE CHILD SA / PROGRAM ORCHESTRATOR
```
