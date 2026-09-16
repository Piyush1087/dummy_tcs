# INSTAGRAM INTELLIGENCE — WEEK 2 CORRECTION 1: MODALITY-PARTIAL TRUTH V1

`INSTAGRAM_INTELLIGENCE_WEEK_2_CORRECTION_1_MODALITY_PARTIAL_TRUTH_LOCAL_CODEX_PROMPT_V1`

You are the authorized external Local Codex runner for one bounded Week 2 correction cycle.

Continue from the exact published Week 2 checkpoint. Do not restart Week 2, reopen Product decisions, or begin Week 3/Creator implementation.

## 1. Adjudication

```text
W1 = ACCEPTED
W2 = CORRECTION_1_REQUIRED
W2_CORRECTION_CYCLES_USED = 0
W3 = PROHIBITED
CREATOR_IMPLEMENTATION_STARTED = NO
```

The Week 2 architecture, carousel scope, provider boundary, persistence placement and public/frontend boundaries are accepted. Correct only the modality-partial truth defects described here.

## 2. Exact starting checkpoints

Fetch/prune normally and independently verify local/fetched SHA/tree equality, accepted ancestry and clean worktrees before mutation.

### Backend

```text
repository = Piyush1087/creator-commerce-backend-v2-clone
branch = program/instagram-intelligence-v1-backend
SHA = 36dbcb216ad3fa2e979c0d2778ae6675d6355cbd
tree = b0ce0192ef259758792979b4e136f0867f87654e
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
SHA = 24d42f50ae42fa9d7426348a1966324d13081b0d
tree = 65b84118c02a3660d8f5b1b13ed1d4daf91f0299
```

Expected migration count remains exactly `90`.

If any identity differs, a worktree is dirty, or overlapping work exists, do not reset, clean, stash, discard or overwrite it. Stop with:

```text
W2_CORRECTION_1_STARTING_STATE_MISMATCH
```

## 3. Required reconciliation

Read the applicable repository instructions/standards, the incremental capability charter, Week 1 acceptance/correction evidence, Week 2 evidence, single execution ledger, Creator reuse manifest and the published Week 2 source/tests.

Inspect especially:

```text
src/features/instagram-intelligence/media/instagram-w2-carousel-pipeline.service.ts
src/features/instagram-intelligence/media/instagram-w2-carousel-pipeline.service.test.ts
src/features/instagram-intelligence/media/instagram-w2-carousel-pipeline.postgres.test.ts
src/features/instagram/media/instagram-visual-text.ts
src/features/instagram/media/instagram-visual-text.test.ts
src/features/instagram-intelligence/semantics/instagram-c3-semantics.service.ts
src/features/instagram-intelligence/semantics/instagram-c3-semantics.ts
affected C3/C4 tests
```

Preserve all accepted Week 2 behavior not explicitly corrected below.

## 4. Confirmed defect A — visual and OCR results are incorrectly all-or-nothing

The current child inspection uses one `Promise.all` followed by one shared `try/catch` for:

```text
visual observation
+
visual-text/OCR observation
```

If either modality fails or returns invalid output, the implementation discards the other successful modality and records the complete child as `UNKNOWN` with no Evidence.

This violates the Week 2 requirement:

```text
partial execution
→ persist supported successful positive observations
→ record exact failed modality
→ do not manufacture negatives
```

Required correction:

- settle and validate visual and OCR/model results independently;
- retain valid visual observation when OCR is unavailable/invalid;
- retain valid visual-text observation when the descriptive visual model is unavailable/invalid;
- persist only the supported modality payloads and exact state/reason codes;
- keep both unknown only when neither modality succeeds;
- never convert OCR failure to `EXPLICIT_EMPTY`;
- never convert visual failure to a visual negative.

Do not create separate canonical child posts or a parallel Capture/Evidence lifecycle. One bounded parent-owned child Evidence item may carry independent modality states when at least one modality succeeds, provided exact provenance and support remain truthful.

## 5. Confirmed defect B — coverage and child truth conflate modalities

The current coverage computation derives one child `state` from visual-text state and then sets:

```text
childCountVisuallyInspected = childCountOcrInspected
```

It can also label an entire successfully visualized child `EXPLICIT_EMPTY` merely because OCR found no text.

Required correction:

Represent independent per-child truth, conceptually:

```text
visualState = AVAILABLE | UNKNOWN
visualReasonCode

visualTextState = OBSERVED | EXPLICIT_EMPTY | UNKNOWN
visualTextReasonCode

overall child support =
  AVAILABLE | PARTIAL | UNKNOWN
```

Exact field names may follow established repository style, but the states must remain distinct in persisted payloads, replay metadata and internal results.

Coverage must calculate independently:

```text
childCountAttempted
childCountVisuallyInspected
childCountOcrInspected
visualUnavailableCount
ocrUnavailableCount
unsupportedChildCount
imageFullCount
videoCoverOnlyCount
completeVisualScope
completeVisualTextScope
completeVideoScope
overall COMPLETE / PARTIAL / UNAVAILABLE
```

Do not require the two inspected counts to be equal during replay validation.

Examples:

```text
visual succeeds + OCR fails
→ visual inspected count increases
→ OCR inspected count does not
→ valid visual Evidence persists
→ visual-text state UNKNOWN
→ overall coverage PARTIAL
```

```text
visual fails + OCR observes “Shop now”
→ visual inspected count does not
→ OCR inspected count increases
→ exact text/CTA Evidence persists
→ descriptive visual state UNKNOWN
→ overall coverage PARTIAL
```

```text
visual succeeds + OCR EXPLICIT_EMPTY
→ child visual AVAILABLE
→ child visual-text EXPLICIT_EMPTY
→ child is not globally “empty”
```

## 6. Negative-safety correction

Update C3 admission/inspection projection only as needed so negative decisions use the exact required modality coverage.

At minimum:

```text
visual presence negative
requires complete admitted visual scope

text/CTA/disclosure absence
requires complete admitted visual-text scope

combined presence/collaboration negative
requires every modality declared by the rule to be complete

video-cover-only child
cannot support complete-video negative
```

Any visual or OCR failure must prevent the applicable complete negative. A valid positive from one modality remains admissible even if the other modality is unknown.

Do not weaken the existing C3 rule that asserted fields cite only their exact supporting Evidence subset. Do not let one child’s successful modality provide support for a different child or failed modality.

## 7. Confirmed defect C — post-normalization per-span bound

`instagramVisualTextCandidateSchema` applies the 160-character span bound before NFKC normalization. Compatibility normalization can expand a string. The finalizer rechecks total normalized length but does not recheck each normalized span.

Required correction:

```text
after NFKC + whitespace normalization + deduplication
each persisted span <= INSTAGRAM_VISUAL_TEXT_MAX_SPAN_CHARS
normalized total <= INSTAGRAM_VISUAL_TEXT_MAX_TOTAL_CHARS
span count <= INSTAGRAM_VISUAL_TEXT_MAX_SPANS
```

Reject a candidate if any normalized span exceeds the bound. Do not truncate silently because truncation could change exact CTA/disclosure/Offering phrase evidence.

Add a regression using compatibility characters whose NFKC form expands beyond the per-span maximum.

## 8. Replay requirements

Exact successful or partial replay must preserve:

```text
independent per-child visual and OCR states
independent inspected/failure counts
completeVisualScope
completeVisualTextScope
completeVideoScope
overall coverage
ordered Evidence references
```

It must still avoid repeat child locator/download/visual-model/OCR-model work and retain the non-secret Settings authorization fence.

Do not treat zero-Evidence/all-modality failure as successful replay. Changed Brand/account/generation/parent/child/source/window/profile/model identity must not collide.

## 9. Required unit/contract proof

Add explicit tests for:

```text
visual success + OCR failure
visual success + invalid OCR output
visual failure + OCR success
invalid visual output + OCR success
both fail
visual success + OCR EXPLICIT_EMPTY
mixed children with different modality outcomes
```

For each prove exact payload, child truth, coverage counters, Evidence refs and absence rules.

Also prove:

```text
normalized per-span expansion over 160 is rejected
normalized in-bound span remains accepted
normalized total/count/deduplication/order remain bounded and deterministic
```

Preserve the CTA/product/disclosure, exact Offering match, Collaboration non-ownership, prompt-injection and mixed IMAGE/VIDEO-cover matrices.

## 10. Required PostgreSQL proof

Use disposable PostgreSQL 17 with all 90 migrations and prove:

```text
visual-only supported child persists exact Evidence and lineage
OCR-only supported child persists exact Evidence and lineage
mixed-modality partial carousel preserves correct parent Capture/Evidence rows
all-failed carousel emits no fabricated Evidence
exact partial replay keeps row counts/refs/states/counters unchanged
exact replay repeats no acquisition or model work
C3 consumes supported positive subsets and keeps unavailable modality unknown
applicable incomplete negative remains UNKNOWN
changed-input failure preserves prior valid current
tenant/account/generation/parent-child isolation remains atomic
Settings delete-data remains target-only
```

Run affected B3A/B3B/C2/C3/C4/C1/Week 1 regressions proportionally. Do not run unrelated full suites solely for volume.

## 11. Preserved boundaries

Do not change:

```text
30-day window or 24-post deep corpus
10-child provider bound or concurrency 3
Settings connection/deletion ownership
provider permissions or OAuth route
three Instagram Objects / 35 components
public consumer/API contract
frontend
Creator implementation
Campaign/Collaboration/Offering canonical truth
Week 1 video foundation
raw-media non-persistence
Capture completion → Evidence ordering
```

No schema/migration, dependency or Docker change is expected.

If correction requires a schema/migration, new Product taxonomy, public API/frontend change, parallel lifecycle or materially different architecture, stop with:

```text
W2_CORRECTION_1_SCOPE_EXPANSION_REQUIRED
```

## 12. Prohibited work

Do not:

```text
start Week 3/Creator adoption
start audio/transcription
start temporal/scene/pacing work
start Campaign Recommendation
start Collaboration compliance
perform live Graph/model calls
add permissions or Facebook Login
persist raw media, signed locators, prompts, tokens or temporary paths
merge to development
deploy
force push or rewrite history
```

## 13. Verification and hygiene

Run:

```text
immutable dependency install where needed
Prisma generate/validate
backend production build
changed-surface and affected focused tests
focused PostgreSQL proof
scoped ESLint and formatter
git diff --check
secret/raw-media/locator/temporary-artifact scan
```

Frontend should remain byte-identical and needs identity proof only. Migration count must remain exactly 90.

## 14. Publication and authority update

Only after every mandatory gate passes:

1. commit the bounded backend correction;
2. normal non-force push;
3. independently fetch/prune and prove local/fetched SHA/tree equality and Week 2 ancestry;
4. update `W2_CAROUSEL_AND_VISUAL_TEXT.md` with correction evidence;
5. update the single `EXECUTION_LEDGER.md`, keeping W2 evidence-ready but not self-accepted;
6. update the existing Creator reuse manifest only where modality-partial semantics affect reusable contracts;
7. archive a content-complete copy of this prompt under `runner-prompts/`;
8. normal non-force push authority and independently fetch back;
9. leave all repositories and task runtime clean.

Do not self-accept Week 2. Week 3 remains prohibited.

## 15. Immutable return contract

Return one report headed:

```text
INSTAGRAM_INTELLIGENCE_WEEK_2_CORRECTION_1_EXTERNAL_LOCAL_CODEX_REPORT_V1
```

Include:

```text
A. exact starting SHA/tree/worktree verification
B. authority/standards reconciliation
C. exact changed files and diff statistics
D. independent visual/OCR execution and validation
E. visual-success/OCR-failure preservation proof
F. visual-failure/OCR-success preservation proof
G. EXPLICIT_EMPTY versus child-global truth
H. independent coverage counters and completeness scopes
I. negative-safety/C3 admission proof
J. normalized per-span bound proof
K. CTA/product/disclosure and ownership regressions
L. replay call counts, row stability and modality truth
M. PostgreSQL lineage and exact row counts
N. failure-current preservation
O. isolation and Settings deletion
P. predecessor regression matrix
Q. schema/migration/dependency/Docker identity
R. build/lint/format/diff/secret scan
S. live-call proof
T. backend publication/fetch-back equality
U. frontend unchanged proof
V. authority publication/fetch-back equality
W. cleanup
X. correction-cycle accounting
Y. exact blocker, if any
```

End with:

```text
RESULT =
READY_FOR_CHILD_SA_PROGRAM_ORCHESTRATOR_REVIEW
|
W2_CORRECTION_1_REQUIRED
|
W2_CORRECTION_1_SCOPE_EXPANSION_REQUIRED
|
W2_CORRECTION_1_TRUE_CIRCUIT_BREAKER_CANDIDATE

W1 =
ACCEPTED

W2_ACCEPTED =
NO — AWAITING CHILD-SA / PROGRAM-ORCHESTRATOR REVIEW

W2_EVIDENCE_READY =
YES | NO

W2_CORRECTION_CYCLES_USED =
1

W3 =
PROHIBITED

CREATOR_IMPLEMENTATION_STARTED =
NO

LIVE_GRAPH_CALLS =
NONE

LIVE_MODEL_CALLS =
NONE

META_PROVIDER_MUTATIONS =
NONE

RAW_MEDIA_PERSISTED =
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
