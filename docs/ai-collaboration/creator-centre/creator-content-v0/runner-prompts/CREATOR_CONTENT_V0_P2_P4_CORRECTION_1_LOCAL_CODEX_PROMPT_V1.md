Creator Content V0 — P2/P4 correction 1 Local Codex prompt V1
You are the authorized external Local Codex runner for Creator Content V0 correction cycle 1.
The Child Technical SA independently accepted the published repository identities and P0/P1 evidence, but rejected final P4 acceptance after finding two mandatory backend-contract gaps in the published P2/P4 implementation. Correct only those gaps, preserve all accepted work, rerun the affected gates, update the single authority lineage, and return an immutable report.
1. Exact published starting state
After ordinary fetch/prune, verify clean worktrees and exact local/fetched equality:
```text
BACKEND_BRANCH = program/creator-content-v0-backend
BACKEND_SHA = 5f7712108886305b40cbcf1c0d89f5ecdc22ab24
BACKEND_TREE = 343e03b3c5bd6ee1749259841f622e1f7012cb75

FRONTEND_BRANCH = program/creator-content-v0-frontend
FRONTEND_SHA = 7edd26d3cdad0ec84083884b34039952368a1295
FRONTEND_TREE = 0cc596ca1ef1d1c4a51857125547de156e487c8b

AUTHORITY_BRANCH = program/creator-content-v0-authority
AUTHORITY_SHA = 5df3bff917dd294f3f86642809c66558e37a3b8c
AUTHORITY_TREE = 2bcbde3e893adb5f7675ed894e2065651554f7f4

MIGRATIONS = 101
```
Verify Audience predecessor ancestry and Parent Product authority ancestry. If any identity differs or overlapping work exists, stop without reset/clean/stash/discard/checkout-over and return `CREATOR_CONTENT_CORRECTION_1_STARTING_STATE_MISMATCH`.
Read repository `AGENTS.md`, engineering standards, the frozen Product register, Parent authorization, P0 contract, P1–P4 evidence, final handoff, and single execution ledger before mutation.
2. Review disposition to preserve
```text
P0 = ACCEPTED
P1 = ACCEPTED
P2 = CORRECTION_REQUIRED
P3 = EVIDENCE_PRESERVED_PENDING_CORRECTED_P2
P4 = NOT_ACCEPTED
CREATOR_CONTENT_V0 = NOT_YET_TECHNICALLY_ACCEPTED
CORRECTION_CYCLE = 1
```
Do not reopen Product decisions or the P1 owner-scope generalization.
3. Defect A — provider acquisition is 30 days, not the frozen 90 days
The published Content pipeline calls:
```text
InstagramIntelligenceProviderReadClient.readMediaInventory(credential, windowEnd)
```
The production client computes `since` using the shared constant `INSTAGRAM_MEDIA_WINDOW_DAYS = 30`. Filtering those returned rows with `selectCreatorContentCorpus(..., 90 days)` cannot recover posts from days 31–90.
Therefore the published implementation does not satisfy:
```text
exact 90-day UTC lookback
→ latest maximum 24 eligible persistent posts
```
Required correction
Generalize the provider-neutral inventory read contract by the smallest typed, bounded mechanism that allows a caller to request the accepted window (for example, an explicit bounded window-days/window-start input).
Requirements:
Creator Content requests exactly 90 days.
Existing Brand Instagram callers retain their accepted 30-day behavior without Product drift.
Provider request `since`/`until`, returned coverage `windowStart/windowEnd`, selection logic, request identity and replay all agree on the exact Content window.
Admit an eligible post 31–90 days old when it belongs in the latest 24.
Exclude a post older than 90 days.
Select latest 24 by publication time with stable provider-media-ID tie-break across the complete acquired 90-day inventory.
No performance-based admission and no older backfill.
Partial pagination/provider failure remains truthful; missing rows are never treated as zero or absence.
Update all affected provider fixtures, mocks and contract tests without changing unrelated provider semantics.
Required proof must inspect the actual provider request parameters, not only pass a preconstructed 90-day array directly to the calculator.
4. Defect B — production multimodal semantic path is absent
The published production module binds `CREATOR_CONTENT_SEMANTIC_ANALYZER` directly to `MissingCreatorContentSemanticAnalyzer`. Its input is only `InstagramMediaTruth` metadata/caption. It does not route Content media through the accepted secure image, carousel-child, sampled-video-frame, OCR/visual-text or bounded speech/transcript foundations.
The P4 fixture replaced the whole semantic analyzer, so it proved a test candidate can enter deterministic calculation; it did not prove the frozen production multimodal orchestration path.
This does not satisfy the frozen V0 authority:
```text
IMAGE = bounded full visual/OCR when capability available
CAROUSEL = bounded child sweep up to accepted child cap
REEL/VIDEO = bounded sampled frames + bounded speech when enabled
```
Staged kill switches may disable a modality, but the production-capable bounded adapter/orchestration must exist and be wired. Disabled/unconfigured capability must return truthful partial/unknown state rather than silently making the implementation metadata-only.
Required correction
Inspect and reuse the accepted Brand Instagram image, carousel, visual-text/OCR, Week 1 selected-video-frame, Week 2 expanded visual-text/frame and Week 4 speech/transcript foundations. Do not create a second media-security or temporary-media platform.
Implement the smallest Creator Content production semantic orchestration adapter that:
is the production binding for `CREATOR_CONTENT_SEMANTIC_ANALYZER`;
receives the owner/integration/account/authorization-generation/media context needed for secure acquisition and exact provenance;
never receives performance metrics;
routes IMAGE through accepted bounded visual/OCR capability when enabled;
routes CAROUSEL through accepted bounded child enumeration/acquisition and child cap when enabled;
routes REEL/VIDEO through accepted deterministic sampled-frame path and bounded speech/transcript path when enabled;
uses provider-neutral bounded model ports; the underlying unconfigured model may fail closed and live model calls are not required;
preserves per-modality AVAILABLE/PARTIAL/UNAVAILABLE/UNKNOWN truth and never converts uninspected or failed media into negative semantic claims;
preserves exact source → derived Evidence/Observation lineage and the accepted Capture completion ordering;
reuses deterministic identities/hashes so exact replay performs no new acquisition, decoding, extraction or model work;
preserves authorization-generation/account/owner/media fences;
enforces accepted SSRF, redirect, DNS/IP, size, duration, codec, concurrency, temporary-storage and cleanup controls;
durably persists no raw image/video/audio/frame, signed locator or temporary path;
remains compatible with Creator Settings target-only purge.
Do not invent Product semantics. The semantic model may emit only grounded themes, caption/communication patterns, creative structures and visual execution under the frozen strict contract.
If the existing shared foundations cannot be reused without a materially new architecture or schema, stop before broadening and return `CREATOR_CONTENT_MULTIMODAL_SCOPE_CIRCUIT_BREAKER` with exact evidence.
5. Mandatory corrected integration proof
Use production orchestration with fixture implementations only at the true external boundaries: provider transport/locator, bounded visual/OCR model, decoder/frame extractor and speech model. Do not replace the whole Creator Content semantic analyzer in final proof.
At minimum prove in real PostgreSQL 17 with all 101 clean-applied migrations:
A 90-day inventory where at least one admitted latest-24 post is older than 30 days.
One IMAGE routed through bounded image visual/OCR handling.
One CAROUSEL routed through child enumeration and bounded child inspection.
One REEL/VIDEO routed through deterministic sampled frames and bounded speech/transcript when the respective kill switches are enabled.
A disabled/unavailable modality yields partial/unknown—not absence or a fabricated negative.
Exact Resource/Capture/Evidence/Observation/model-derivation/generation/component/current lineage.
Exact replay adds zero provider, acquisition, decoding, extraction, model, Evidence, generation or current work.
A changed failed execution preserves prior valid current and truthful freshness/processing degradation.
Cross-Creator, account, authorization-generation and media substitution fail atomically.
Creator Settings target-only purge removes target Content lineage and temporary media while another owner/source survives.
No raw media or temporary locator/path is durable or tracked; all task-owned media is removed after success and failure.
Also rerun:
provider inventory 30-day Brand regression and new explicit 90-day Content tests;
Content corpus/calculator/comparison/Highlight/representative tests;
secure image/carousel/video-frame/visual-text/speech donor regressions affected by wiring;
Creator Audience and shared owner-scope regressions;
Content scheduler, consumer, role and purge tests;
backend production build, Prisma generate/validate, scoped lint/Prettier, diff integrity, migration/schema/dependency identity and secret/forbidden-artifact scan.
Frontend behavior/DTO should remain unchanged unless the corrected truthful modality/coverage projection requires a bounded contract correction. If frontend remains unchanged, prove exact SHA/tree equality and rerun the focused parser/view plus final authenticated browser checks against the corrected backend. If it changes, explain why it was unavoidable and rerun all P3 gates.
Browser final proof remains Owner/Manager/Assistant, inactive/anonymous denial, 390/767/768/desktop, keyboard/focus, no overflow, Axe, no console/page errors, and preserved-current degraded state.
6. Publication and authority correction
After all mandatory gates pass:
Commit bounded backend correction; frontend only if legitimately required.
Update the existing P2/P4 evidence, developer handoff, final Product-learning handoff and single ledger so they no longer claim the deficient path was accepted.
Archive an exact copy of this correction prompt under the existing Creator Content V0 `runner-prompts/` directory.
Mark P2/P3/P4 accepted only on corrected evidence.
Normal non-force push the existing program branches.
Independently fetch/prune and prove local/fetched SHA/tree equality plus ancestry from the published starting checkpoints.
Leave all worktrees clean; remove task PostgreSQL/browser/process/temp-media resources.
Return:
```text
CREATOR_CONTENT_V0_P2_P4_CORRECTION_1_EXTERNAL_LOCAL_CODEX_REPORT_V1
```
The report must include exact starting/final SHAs and trees, changed files, 90-day provider-request evidence, per-modality production-orchestration evidence, PostgreSQL row/lineage/replay/failure/purge proof, all tests/build/browser/accessibility results, migration/dependency identity, live-call counts, scans, publication/fetch-back, cleanup, correction-cycle accounting and any blocker.
Successful ending:
```text
RESULT = READY_FOR_CHILD_SA_PROGRAM_ORCHESTRATOR_REVIEW
P0 = ACCEPTED
P1 = ACCEPTED
P2 = CORRECTED_EVIDENCE_READY
P3 = CORRECTED_EVIDENCE_READY
P4 = CORRECTED_EVIDENCE_READY
CREATOR_CONTENT_V0_TECHNICAL_ACCEPTANCE = AWAITING_CHILD_SA_REVIEW
CORRECTION_CYCLES_USED = 1
DEVELOPMENT_MERGE = NOT_PERFORMED
DEPLOYMENT = NOT_PERFORMED
```
7. Prohibited work
Do not merge to development, deploy, add schema/migrations unless separately authorized, start Content V1/longitudinal analysis, recommendations, Creator Brand, Portfolio, Media Kit, Commercial Setup, editing/manual override, manual refresh, cross-platform aggregation, canonical Collaboration promotion, or live Meta/OAuth mutations. Do not weaken existing Brand, Audience, Evidence, security, isolation, deletion, freshness or current-preservation invariants.
