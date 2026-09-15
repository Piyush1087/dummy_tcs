# Creator Content V0 — external Local Codex autonomous P1→P4 execution prompt V1

You are the authorized external Local Codex execution runner for Creator Content V0.

Execute the accepted Creator Content V0 program autonomously from P1 through P4. Do not return between successful packets. Stop only for a defined circuit breaker, an unresolved Product ambiguity, a required schema expansion outside the accepted boundary, a material authority conflict, inability to preserve accepted Brand/Creator Audience behavior, or final successful P4 closeout.

## Inputs supplied by Parent

Parent will provide local paths for:

1. `Piyush1087/creator-commerce-backend-v2-clone`
2. `Piyush1087/creator-commerce-frontend-v2-clone`
3. `Piyush1087/dummy_tcs`
4. this prompt
5. `0001-refactor-intelligence-neutralize-semantic-owner-scop.patch`
6. `0001-docs-creator-content-freeze-P0-executable-contracts.patch`
7. `0002-docs-creator-content-accept-P0-and-authorize-P1.patch`

Do not request or emit secret values. Use existing repository-local and system runtime facilities. Do not silently install or materially reconfigure system-wide software.

## Canonical authority

Read and obey repository `AGENTS.md`, `AI_ENGINEERING_STANDARD.md`, the applicable backend/frontend/database/validation/AI integration standards, and these exact Product/program documents from `Piyush1087/dummy_tcs`:

- Product register at commit `acccc35a41a0f7a57f72b313114a8156d9245650`:
  `docs/ai-collaboration/creator-centre/CREATOR_INSIGHTS_CONTENT_V0_PRODUCT_DECISION_REGISTER.md`
- Technical handoff at commit `13e1aaffffa84ac8e43ae7c5c036c0afb2211c8e`:
  `docs/ai-collaboration/creator-centre/CREATOR_INSIGHTS_CONTENT_V0_TECHNICAL_HANDOFF.md`
- Parent authorization at commit `179ba0860cba0d256b5ee13757f308ebe99a078d`:
  `docs/ai-collaboration/creator-centre/creator-content-v0/CREATOR_CONTENT_V0_PARENT_REVIEW_AND_AUTONOMOUS_EXECUTION_AUTHORIZATION_V1.md`

Product semantics are frozen. Existing Brand Instagram and Creator Audience implementations are donors, not authority to change Creator Content Product decisions.

## Exact accepted predecessors

Verify after ordinary fetch/prune:

```text
BACKEND_BASE_SHA = 7028d1fcbd467175a5358fce92ad2edd63ea44cd
BACKEND_BASE_TREE = dbc9b8e00936d4ecbc700b516b17ad8ce78f2d17

FRONTEND_BASE_SHA = 4ca6141face77821f546a13bdde12c8c41780a6f
FRONTEND_BASE_TREE = f14d5076021a97137f505a91c81736021a8dc30a

AUDIENCE_AUTHORITY_BASE_SHA = 52917dfe2bbd7e92ceeb5ffcfe2b628fa49bd598
AUDIENCE_AUTHORITY_BASE_TREE = 962ae60987d83fba313f81265faa3aa1f0163a50

MIGRATION_COUNT = 101
MIGRATION_HEAD = 20260914191000_creator_audience_owner_scope_lineage
```

All worktrees must be clean and free of overlapping user work before reconstruction. If not, stop without reset, clean, stash, discard, or checkout-over and return `CREATOR_CONTENT_STARTING_WORKTREE_CONFLICT`.

## Portable transfer verification

Verify exact SHA-256 values before applying:

```text
0001-refactor-intelligence-neutralize-semantic-owner-scop.patch
= 68f3667f382aa55a963ea31189a8306c1b6632fbe375b7558e17e4384d38acd5

0001-docs-creator-content-freeze-P0-executable-contracts.patch
= 98d690833e0ead16af63e424134fade1d0296470634b50b039817f0ed9ea61c1

0002-docs-creator-content-accept-P0-and-authorize-P1.patch
= 14468df4b31fff185bf6b79fac0a749fd497e0839e7ba58141f1273d00e09712
```

If any digest differs, stop with `CREATOR_CONTENT_TRANSFER_INTEGRITY_FAILURE`.

## Phase 0 — reconstruct accepted P0 and P1 candidate

Use ordinary non-destructive Git operations only.

### Authority

1. Create/checkout `program/creator-content-v0-authority` from exact `52917dfe...`.
2. Merge exact `179ba086...` with an ordinary non-fast-forward merge. Do not squash or rewrite either lineage.
3. Apply the two supplied P0 authority patches in order with `git am`.
4. Prove the resulting authority tree is exactly:
   `d962604c42da8321f976129633828117881fe9d8`.
5. Confirm the single ledger is:
   `docs/ai-collaboration/creator-centre/creator-content-v0/EXECUTION_LEDGER.md`.

### Backend

1. Create/checkout `program/creator-content-v0-backend` from exact `7028d1fc...`.
2. Apply the supplied P1 backend patch with `git am`.
3. Prove the candidate tree is exactly:
   `0c71036b496f3b69be285e50545732de34e5f14b`.

### Frontend

Create/checkout `program/creator-content-v0-frontend` from exact `4ca6141f...`. P1 must not change it.

If exact tree reconstruction fails, stop with `CREATOR_CONTENT_TRANSFER_RECONSTRUCTION_MISMATCH`; do not independently reinterpret or recreate P0/P1.

## P1 — shared semantic owner-scope neutralization

Validate the supplied bounded change. It generalizes only the internal semantic-address discriminator from `brandId` to `ownerScopeId`, keeps physical Brand persistence fields and public contracts unchanged, and preserves read/replay compatibility for historical Brand-shaped addresses.

Mandatory P1 proof:

- no Prisma schema or migration change;
- no package or lockfile change;
- backend production build;
- scoped lint and diff integrity;
- changed-surface contract/execution/Creator Audience tests;
- full relevant Brand processor/executor regression;
- real PostgreSQL proof using all 101 migrations for Brand and Creator Audience generation/current transition, historic Brand-address readability/replay, Creator owner isolation, and no cross-owner collision for identical subject/object/component paths;
- no direct current-row write or bypass of verified bundle/path ownership;
- secret/forbidden-artifact scan.

The cloud preflight observed a repository-wide non-database run of 6,965 passes and eight inherited failures in already-stale migration-count, registry-size, module-provider, and Collaboration-enum snapshot assertions. Independently compare any such failure with the exact accepted predecessor before classifying it as inherited. Do not weaken or rewrite unrelated assertions merely to obtain green output.

If P1 passes, create/update an immutable P1 evidence artifact and the single execution ledger, commit the complete P1 checkpoint, normal non-force push backend and authority branches, fetch/prune independently, prove local/fetched SHA and tree equality and predecessor ancestry, mark P1 accepted, authorize P2, and continue without Parent relay.

If P1 requires a schema/migration or cannot preserve accepted Brand/Audience behavior, stop with `CREATOR_CONTENT_P1_CIRCUIT_BREAKER`.

## Frozen executable Content contract

Implement one Creator-owned Object:

```text
creator_content
```

Owned paths:

```text
$/f/source_status
$/f/content_snapshot
$/f/content_highlights
$/f/what_you_create
$/f/content_performance
$/f/representative_content
$/f/freshness
$/f/limitations
```

Corpus:

- Instagram only;
- exact 90-day UTC lookback;
- latest maximum 24 eligible persistent posts ordered by authoritative publication time descending, then stable provider media ID;
- no performance-based admission and no older backfill merely to reach 24;
- image, carousel album, Reel and video supported; stories excluded.

Semantic model owns only grounded per-media themes, caption/communication patterns, creative structures, and visual execution. It receives no performance metrics and owns no arithmetic, cohort comparison, Highlight, representative selection, recommendation, causality, Offering/Creator/Collaboration identity, likely-collab, Brand Persona, or campaign compliance.

Deterministic code owns corpus admission, metric truth, arithmetic, coverage, cohort membership, comparisons, Highlights, representatives, readiness, freshness and limitations.

Comparison profile is `CREATOR_CONTENT_COMPARISON_PROFILE = v0.1`:

- cohort versus exact eligible complement on compatible provider metric definition/window/denominator basis;
- median center;
- minimum sample 3 per side;
- minimum metric coverage 50% per side;
- MEDIUM requires sample at least 5, coverage at least 70%, publication dates at least 2; HIGH unavailable;
- total interactions/likes/comments/saves/shares performance claims require same-media reach-denominated rates;
- interaction-rate materiality requires absolute delta at least 0.5 percentage points AND relative delta at least 20%;
- reach/views descriptive count materiality requires relative median difference at least 20%;
- zero baseline produces no relative lift and no meaningful Highlight;
- raw interaction counts may be factual detail but cannot independently drive stronger/weaker audience-response Highlights;
- descriptive, non-causal, non-prescriptive language only.

Highlights: zero to three, Evidence-backed; performance before recurrence, MEDIUM before LOW, stable magnitude/support/coverage/date tie-breaks; maximum two performance claims, maximum one per normalized cohort, maximum one limitation, no filler.

Representatives: zero to six explanatory posts; never a leaderboard. For performance, choose a cohort member nearest the cohort median. For recurrence, choose recent fully supported media. Use deterministic greedy target coverage and stable ties. Safe validated Instagram permalinks may be used.

Roles: explicit `INSIGHTS_CONTENT_READ` for Owner, Manager and Assistant. Read-only; no source lifecycle, refresh, delete, edit, or Settings mutation authority.

Lifecycle: initial eligible run immediate; Content daily through the existing hourly due-gated Creator Instagram dispatcher; no Content-specific scheduler and no manual refresh. Failure preserves valid current. Freshness is computed from authoritative timestamps at read time. Creator Settings owns connection lifecycle and internal Creator-source purge.

Multimodal bounds: bounded image visual/OCR; bounded carousel child sweep under existing cap; bounded sampled Reel/video frames and bounded speech when enabled. Preserve accepted security, size, duration, concurrency, temporary-storage, cleanup, replay and fail-closed controls. Missing/unavailable modality means partial/unknown, never absence.

## P2 — complete Creator Content backend vertical slice

Implement the smallest complete backend slice while reusing the accepted owner-scoped DE/Evidence/Intelligence/current/CAS/scheduler substrate.

Required P2 surfaces:

1. Strict frozen executable processor/output/evidence/reasoning bundle for `creator_content` and exactly the eight paths.
2. Owner-scoped Creator subject/runtime registration; no synthetic Brand and no parallel current store.
3. Corpus selection and availability semantics exactly as frozen.
4. Provider-neutral multimodal semantic execution using existing secure image/carousel/video-frame/speech foundations and exact Evidence/provenance; fail closed when adapters/capabilities are unavailable.
5. Deterministic Snapshot, normalized semantic grouping, comparison profile, 0–3 Highlights, 0–6 representative selection, readiness/freshness/limitations.
6. Strict authenticated Creator consumer route with server-resolved Creator scope and no caller-selected Creator/account IDs. Follow existing Creator Audience API/client conventions. Preserve public Content hierarchy.
7. Explicit `INSIGHTS_CONTENT_READ` authorization for Owner/Manager/Assistant only.
8. Existing hourly due-gated Creator scheduler extended for immediate first run and daily Content cadence; no second scheduler/manual refresh.
9. Creator Settings internal purge traversal includes Content-derived rows and preserves other Creator/Brand/website data.
10. Failure-current preservation, exact replay/idempotency, tenant/account/authorization-generation/media isolation.

Avoid schema/migration changes if the accepted owner-scoped runtime can represent Content. If a migration is genuinely required, stop before creating it with `CREATOR_CONTENT_P2_SCHEMA_EXPANSION_REVIEW_REQUIRED` and exact evidence.

Mandatory P2 proof:

- provider-DI fixture enters the real acquisition route, not direct repository seeding as final proof;
- Resource → completed Capture with authoritative `capturedAt` → Evidence/Observation/model-derivation lineage → deterministic Content calculation → generation/components/Evidence refs → shared CAS current → authenticated consumer;
- all metric missing/zero/unsupported/failure distinctions;
- corpus boundary/order/cap/tie behavior;
- multimodal selected/unselected/partial/failure behavior;
- comparison sample, coverage, denominator, materiality, zero-baseline and complement gates;
- deterministic output/hash/replay and permutation stability;
- model input contains no performance metrics;
- no causal/prescriptive wording;
- Settings purge and cross-owner preservation;
- full changed-surface tests, focused PostgreSQL round-trip, predecessor regressions, build, lint, diff, migration/schema/dependency identity, secret/raw-media/forbidden-artifact scan.

If P2 passes, write immutable evidence, update the single ledger, commit, normal non-force push, independent fetch-back equality/ancestry proof, mark P2 accepted, authorize P3, and continue.

## P3 — Creator Insights Content frontend

Extend the accepted Creator Insights shell; do not create a second Creator navigation system.

Required hierarchy:

```text
Content Snapshot
→ Content Highlights
→ What You Create
→ Content Performance
→ Representative Content
→ Data Status
```

Required P3 behavior:

- Audience and Content are peer sections within Creator Insights;
- strict schema/parser and authenticated fetch with last-good/current-preservation behavior following Creator Audience;
- truthful loading, no-current, partial, stale, unavailable, re-auth/degraded, and error states;
- metrics/facts support understanding and do not become an analytics dashboard;
- no edit/customization/manual refresh controls;
- safe representative permalink behavior only;
- Aurora primitives/tokens and existing shell patterns;
- explicit role access for Owner/Manager/Assistant;
- responsive behavior at 390, 767, 768 and desktop with no page-level horizontal overflow;
- keyboard/focus semantics and Axe;
- no raw pipeline/model/provider details.

Do not implement Content V1, recommendations, Portfolio/Media Kit curation, post detail, editing, or other Creator workspaces.

Mandatory P3 proof: strict parser/client/view tests, frontend typecheck/build/scoped lint/diff, authenticated browser evidence for all three roles and responsive breakpoints, keyboard/focus and Axe, plus backend API authorization/current-preservation integration. If P3 passes, write immutable evidence, update ledger, commit/push/fetch-back both changed repositories, mark accepted, authorize P4, and continue.

## P4 — integrated acceptance and closeout

Run the final provider-neutral end-to-end acceptance from real fixture provider DI through production pipeline:

```text
provider DI
→ Creator Settings/account/generation fence
→ DE Resource/Capture/Evidence
→ bounded multimodal observations
→ grounded per-media semantics
→ deterministic Content calculations
→ verified creator_content generation/current
→ authenticated API
→ production Creator Insights Content UI
```

P4 must additionally prove:

- exact accepted P0→P3 ancestry and clean worktrees;
- all migrations clean-apply and current; migration count unchanged unless separately authorized;
- independent failed/degraded execution preserves prior valid current and exposes truthful processing/freshness state;
- tenant/Creator/account/generation/media isolation;
- internal Settings-owned Creator-source purge removes target Content lineage and leaves other owner/source data intact;
- latest-24/90-day corpus, all comparison gates, deterministic Highlights and representatives;
- multimodal cleanup and no durable raw media;
- authenticated Owner/Manager/Assistant UI and denial for unauthorized/inactive actors;
- 390/767/768/desktop, keyboard/focus, Axe, no console/page errors and no horizontal overflow;
- no live Graph/model call required; deterministic fixtures are authoritative provider-neutral acceptance;
- optional live Graph read may run only if existing Settings-managed credentials already work, read-only, with no OAuth/permission/provider mutation and no secrets in evidence; absence is non-blocking;
- full relevant backend/frontend integration/regression suites, builds, lint, diff, secret/forbidden-artifact scan;
- no merge to development and no deployment.

Create/update in the single authority lineage:

- an exact archived copy of this runner prompt under the Creator Content V0 `runner-prompts/` directory;
- immutable P1, P2, P3 and P4 evidence artifacts;
- the single execution ledger;
- a Creator Content V0 developer handoff;
- `CREATOR_CONTENT_V0_FINAL_ACCEPTANCE_AND_PRODUCT_LEARNING_HANDOFF_V1.md`.

The Product-learning handoff must distinguish Product facts from implementation learning, record reuse achieved, actual effort/risk, inherited diagnostics, remaining debt/deferrals, and recommendations for the next Creator Insights slice without starting it.

After every mandatory gate passes:

1. mark P4 accepted;
2. commit all authorized changes;
3. normal non-force push backend/frontend/authority program branches;
4. independent fetch/prune and prove local/fetched SHA/tree equality plus exact ancestry;
5. leave all worktrees clean and remove task-owned PostgreSQL/browser/process/temp-media resources;
6. return one immutable report headed exactly:

```text
CREATOR_CONTENT_V0_FINAL_ACCEPTANCE_AND_PRODUCT_LEARNING_HANDOFF_V1
```

Include final backend/frontend/authority SHAs and trees, migration identity, test/browser evidence, live-call counts, cleanup, deferred scope, and confirm:

```text
P0 = ACCEPTED
P1 = ACCEPTED
P2 = ACCEPTED
P3 = ACCEPTED
P4 = ACCEPTED
CREATOR_CONTENT_V0 = TECHNICALLY_ACCEPTED
DEVELOPMENT_MERGE = NOT_PERFORMED
DEPLOYMENT = NOT_PERFORMED
NEXT_BOUNDARY = PARENT / CREATOR PRODUCT PROGRAM REVIEW
```

## Universal prohibitions

Do not merge to development; deploy; start Content V1/longitudinal; start Creator Brand, Portfolio, Commercial Setup or Media Kit; add recommendations, causal claims, predictions, semantic editing/manual override, manual refresh, canonical Collaboration promotion, cross-platform aggregation, or live Meta/OAuth mutations. Do not expose raw provider/model/pipeline data, credentials, locators, raw media, temporary paths, prompts, leases or internal bundle details.

Use normal non-force Git operations only. Never reset/clean/stash/discard unrelated work or rewrite accepted history.
