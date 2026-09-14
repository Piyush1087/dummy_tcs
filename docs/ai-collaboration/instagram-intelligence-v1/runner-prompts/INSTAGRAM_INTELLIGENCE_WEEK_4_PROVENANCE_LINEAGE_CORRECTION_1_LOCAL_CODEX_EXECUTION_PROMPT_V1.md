# INSTAGRAM INTELLIGENCE — WEEK 4 PROVENANCE LINEAGE CORRECTION 1 — LOCAL CODEX EXECUTION PROMPT V1

`INSTAGRAM_INTELLIGENCE_WEEK_4_PROVENANCE_LINEAGE_CORRECTION_1_LOCAL_CODEX_EXECUTION_PROMPT_V1`

You are the authorized external Local Codex runner for one bounded Week 4 correction.

This is not a new Week 4 implementation run. Preserve the published Week 4 implementation and correct only the provenance/lineage defect defined below.

## 1. Operating topology

```text
PROGRAM ORCHESTRATOR / CHILD SA
= Product and technical acceptance authority

PARENT / USER
= manual prompt/report relay

EXTERNAL LOCAL CODEX
= local repository implementation, PostgreSQL, tests, Git publication,
  fetch-back, and immutable evidence
```

Do not self-accept Week 4. Do not start Week 5.

## 2. Exact required starting checkpoints

Fetch/prune normally, then require exact local/fetched equality and clean worktrees:

```text
BACKEND_BRANCH = program/instagram-intelligence-v1-backend
BACKEND_SHA = 41fbe7c888208829f10ae49703da690d02f10d0f
BACKEND_TREE = 0ba5cc6880120bbb294048261ea81c1a7704738d

FRONTEND_BRANCH = program/instagram-intelligence-v1-frontend
FRONTEND_SHA = 5866d0ac82f742957f53a8db2144a9a166628b75
FRONTEND_TREE = 7c095290ffdef4c84f37382bc594bef536c92a49

AUTHORITY_BRANCH = program/instagram-intelligence-v1-authority
AUTHORITY_SHA = 750c284fcc961968ee7a80bece20a251a01276f8
AUTHORITY_TREE = 4b3d13179f4f564b1fdccc7bffa1fa489728f438
```

Verify that each accepted checkpoint is descended from its previously accepted predecessor and that no overlapping user work exists.

If any identity or worktree gate fails, stop without mutation and return:

```text
W4_CORRECTION_1_STARTING_STATE_MISMATCH
```

Do not reset, clean, stash, discard, force-checkout, or rewrite history.

## 3. Accepted Week 4 state to preserve

Preserve all successful Week 4 work and evidence except the exact defect below, including:

- selected deep-corpus Reel/video scope;
- bounded temporary video/audio handling and cleanup;
- production FFmpeg/FFprobe route;
- WAV PCM signed 16-bit, mono, 16 kHz extraction;
- 6,291,456-byte maximum audio artifact;
- provider-neutral transcription port and env-selected Gemini adapter;
- missing-provider fail-closed behavior;
- strict `OBSERVED / EXPLICIT_EMPTY / UNKNOWN` transcript semantics;
- source-language preservation and no translation/speaker/demographic inference;
- injection-as-data-only boundary;
- deterministic first-three-second hook observation;
- bounded CTA phrase vocabulary and exact Offering phrase matching;
- no collaboration inference;
- completed Capture before Evidence;
- replay, authorization-generation fencing, current preservation, isolation and Settings delete-data behavior;
- migration 91 and the exact Week 4 capability allowlist;
- no frontend, consumer DTO, Object, workspace, Product, Campaign, Collaboration or Creator changes.

Do not reinterpret Week 4 Product scope.

## 4. Accepted correction finding

The published implementation persists:

```text
audio technical Evidence
captureMethodClass = PROVIDER_MEDIATED_FETCH
parentEvidenceRefs = []

transcript Evidence
captureMethodClass = MODEL_DERIVATION
parentEvidenceRefs = [audio technical Evidence]
```

But the audio artifact and its technical properties are produced locally and deterministically by FFmpeg from an already captured provider video. They are not fetched from Instagram as provider-authored truth.

The current PostgreSQL proof also passes a source Evidence reference that does not exist, so the claimed complete source-media lineage is not proven.

Canonical Week 4 provenance must be:

```text
EXACT ADMITTED SOURCE MEDIA EVIDENCE
    ↓
AUDIO TECHNICAL EVIDENCE
captureMethodClass = DETERMINISTIC_DERIVATION
parentEvidenceRefs = exact admitted source media Evidence refs
parentCaptureRefs = exact source Capture refs derived from those Evidence rows
    ↓
TRANSCRIPT EVIDENCE
captureMethodClass = MODEL_DERIVATION
parentEvidenceRefs = [exact audio technical Evidence ref]
parentCaptureRefs = [the completed Week 4 Capture that owns that audio Evidence]
    ↓
SAME-CAPABILITY TRANSCRIPT SEMANTIC OBSERVATION SUPPORT
```

Do not label local FFmpeg output as provider truth. Do not label transcription as deterministic derivation.

## 5. Authorized correction scope

Modify only backend code/tests and authority evidence/ledger material directly required to make the above chain true and prove it.

Expected surfaces to inspect include:

```text
src/features/instagram-intelligence/media/instagram-w4-speech-pipeline.service.ts
src/features/instagram-intelligence/media/instagram-w4-speech-pipeline.service.test.ts
src/features/instagram-intelligence/media/instagram-w4-speech-pipeline.postgres.test.ts
src/features/data-extraction/evidence/instagram/instagram-capture-writer.service.ts
accepted C2/C3 deterministic/model provenance persistence patterns
Evidence repository exact-parent validation
Week 4 authority artifact
single EXECUTION_LEDGER.md
```

Choose the smallest compatible implementation. A narrowly typed extension of the existing Instagram writer is allowed only if it:

- preserves default provenance for every existing caller;
- explicitly distinguishes external deterministic parents from an in-request model parent;
- validates the complete parent set inside the same persistence transaction;
- cannot admit arbitrary/cross-tenant/cross-account/cross-generation/cross-media parents;
- does not weaken shared Evidence or same-capability ObservationSupport invariants.

Do not duplicate the shared DE lifecycle. Do not hold a database transaction open across download, FFmpeg or model execution.

## 6. Required lineage validation

Before publishing the Week 4 derived Evidence, prove transactionally that every admitted source Evidence ref:

- exists;
- belongs to the same Brand;
- is `INSTAGRAM_OWNED`;
- belongs to the exact input source Capture lineage;
- resolves to the exact Instagram media Resource/provider media identity;
- carries the expected provider-account and authorization-generation lineage through its completed Capture;
- is from a completed Capture with non-null authoritative `capturedAt`;
- is not a Week 4 audio/transcript self-parent or circular parent.

Canonicalize, deduplicate and deterministically sort parent refs. Empty source-parent input is invalid for a successful Week 4 publication.

If the existing B3B caller can truthfully provide only one exact source Evidence ref, use that exact ref. Do not invent or mirror source Evidence solely to satisfy this correction.

Reject the write atomically for nonexistent, deleted, cross-Brand, different-account, stale-generation, different-media, wrong-Capture or circular parent substitution. No artifact, Capture completion, Evidence, Observation or support row may survive a rejected transaction.

## 7. Replay and identity

Preserve the accepted replay boundary. The execution identity must continue to include the canonical source manifest.

Replayed successful Week 4 execution must:

- re-run the current authorization fence;
- return exactly the same audio and transcript Evidence refs;
- preserve the exact parent chains;
- perform zero new download, probe, audio extraction and model calls;
- create no duplicate rows.

A changed source manifest must not collide. A failed changed-input run must preserve the prior valid Week 4 rows/current.

## 8. Truth states outside this correction

Do not redesign transcript truth states in this correction.

Preserve:

```text
OBSERVED = validated non-empty timestamped speech segments
EXPLICIT_EMPTY = successful audio extraction and successful transcription establishes no intelligible speech
UNKNOWN = configuration absence, acquisition/extraction/transcription failure, invalid output, timeout or other inability to establish transcript truth
```

No-audio-track behavior remains within the already accepted Week 4 contract. Do not add a new public state or schema solely in this correction.

## 9. Database and migration boundary

```text
NEW MIGRATION = NOT EXPECTED
SCHEMA CHANGE = NOT EXPECTED
MIGRATION COUNT = MUST REMAIN 91
```

Do not alter migration 91 or any earlier migration.

If truthful correction unexpectedly requires a schema migration, new provenance class, changed shared Evidence invariant, parallel persistence path, or broad lifecycle redesign, stop and return:

```text
W4_CORRECTION_1_SCOPE_EXPANSION_REQUIRED
```

with exact repository evidence.

## 10. Required focused proof

Run the optimized changed-surface matrix, including:

1. Unit/contract tests proving:
   - audio technical Evidence is `DETERMINISTIC_DERIVATION`;
   - transcript Evidence is `MODEL_DERIVATION`;
   - exact parent ordering and canonicalization;
   - default writer behavior for pre-Week-4 callers is unchanged;
   - invalid external parent input fails closed.

2. Fresh PostgreSQL proof with real source rows:
   - create the actual accepted B3B/media source Resource, completed Capture and source Evidence;
   - run Week 4 from those real refs;
   - prove exact source → audio → transcript chain through persisted provenance;
   - prove transcript Observation support remains same-capability;
   - prove row counts, hashes, capture states and capturedAt ordering;
   - prove no fabricated placeholder parent ref exists.

3. Atomic rejection matrix:
   - nonexistent parent;
   - cross-Brand parent;
   - provider-account mismatch;
   - authorization-generation mismatch;
   - media/Resource mismatch;
   - source-Capture mismatch;
   - circular/self-parent attempt.

4. Replay and failure-current preservation.

5. Settings delete-data removes the target Brand source/audio/transcript lineage while preserving another Brand and website rows.

6. Focused predecessor regressions for B1/B2/B3A/B3B/C2/C3/C4/C1, Week 1, Week 2, provider-neutral module boot and existing writer callers affected by the typed extension.

7. Clean 91-migration application/status. No new migration.

8. Backend production build, scoped lint, `git diff --check`, dependency/lockfile identity, secret/raw-media/locator/forbidden-artifact scan.

Do not run unrelated frontend/browser suites because the frontend must remain unchanged.

## 11. Security and cleanup

Preserve all accepted video/audio transport and temporary-media controls. Never print or persist credentials, signed locators, raw provider payloads, raw video, raw audio, frames, transcript provider payloads or prompt internals.

Remove every task-owned PostgreSQL container/volume, process, temporary video/audio/frame and log. Prove all worktrees clean after publication.

No live Graph, Meta, OAuth or model call is required. Fixture/model DI remains authoritative for this correction.

## 12. Publication

Only after every mandatory gate passes:

1. commit the complete backend correction;
2. normal non-force push to `program/instagram-intelligence-v1-backend`;
3. independently fetch/prune and prove local/fetched SHA and tree equality plus required ancestry;
4. update the existing Week 4 authority artifact and the single execution ledger;
5. archive this exact prompt under the existing authority `runner-prompts/` directory;
6. commit and normally push `program/instagram-intelligence-v1-authority`;
7. independently fetch back and prove SHA/tree equality;
8. prove frontend unchanged at its accepted SHA/tree.

Do not merge to development. Do not deploy. Do not force-push or rewrite accepted history.

## 13. Immutable return contract

Return exactly one report headed:

```text
INSTAGRAM_INTELLIGENCE_WEEK_4_PROVENANCE_LINEAGE_CORRECTION_1_EXTERNAL_LOCAL_CODEX_REPORT_V1
```

Include:

```text
A. exact starting SHA/tree/worktree verification
B. standards and accepted Week 4 reconciliation
C. exact changed files and diff statistics
D. corrected provenance architecture
E. source-parent transactional admission proof
F. deterministic audio Evidence provenance proof
G. model transcript Evidence provenance proof
H. exact source → audio → transcript → Observation lineage
I. invalid-parent atomic rejection matrix
J. replay/idempotency and expensive-work reuse
K. partial/failure/current preservation
L. tenant/account/generation/media isolation
M. Settings delete-data and cross-Brand/website preservation
N. focused predecessor regression results
O. PostgreSQL version, migrations, row counts and capturedAt ordering
P. build/lint/diff/dependency results
Q. secret/raw-media/locator/forbidden-artifact scan
R. live-call counts
S. backend publication/fetch-back SHA/tree equality
T. frontend unchanged proof
U. authority publication/fetch-back SHA/tree equality
V. cleanup
W. correction-cycle accounting
X. exact blocker, if any
```

End with:

```text
RESULT =
READY_FOR_CHILD_SA_PROGRAM_ORCHESTRATOR_REVIEW
|
W4_CORRECTION_1_REQUIRED
|
W4_CORRECTION_1_SCOPE_EXPANSION_REQUIRED
|
W4_CORRECTION_1_TRUE_CIRCUIT_BREAKER_CANDIDATE

W4_ACCEPTED =
NO — AWAITING CHILD-SA / PROGRAM-ORCHESTRATOR REVIEW

W4_EVIDENCE_READY =
YES | NO

W4_CORRECTION_CYCLES_USED =
1

W5 =
PROHIBITED

BRAND_CENTRE_EDIT =
PAUSED_NOT_AUTHORIZED

LIVE_GRAPH_CALLS =
NONE

LIVE_MODEL_CALLS =
NONE

META_PROVIDER_MUTATIONS =
NONE

RAW_VIDEO_PERSISTED =
NO

RAW_AUDIO_PERSISTED =
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

Then stop.
