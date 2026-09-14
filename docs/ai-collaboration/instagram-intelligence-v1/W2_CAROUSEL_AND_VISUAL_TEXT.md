# Instagram Intelligence — Week 2 Carousel and Visual Text

Status: `READY_FOR_CHILD_SA_PROGRAM_ORCHESTRATOR_REVIEW`

Week 1 is accepted by explicit Parent-transmitted Program-Orchestrator
adjudication. This artifact records Week 2 evidence readiness; it does not
self-accept Week 2. Week 3 and Creator implementation remain prohibited.

## Exact starting state

| Repository | Starting SHA | Starting tree | Result |
| --- | --- | --- | --- |
| backend | `c634387e06cff5e20fd2588b3a9d1d1d6a78a21a` | `ef8e762e26892481da590f418df6ab4d5193b42a` | clean local/fetched equality and accepted ancestry |
| frontend | `5866d0ac82f742957f53a8db2144a9a166628b75` | `7c095290ffdef4c84f37382bc594bef536c92a49` | clean, fetched-equal and unchanged |
| authority | `7e660c98c233d27d2e6c52385c15855f2ffb862b` | `bb1003f2c75c4dc136e84482be94a7c69a754d4f` | clean local/fetched equality |

The runner reconciled repository AGENTS/engineering standards, the incremental
charter, Week 1 and correction evidence, Creator reuse manifest, single ledger,
accepted B3A/B3B/C2/C3/C4/C1 contracts, provider child truth and current image,
temporary-store, replay, C3 and C4 implementations before mutation.

## Implemented boundary

Selected deep-corpus carousels now route the exact ordered provider child
manifest into one parent-owned Week 2 service. It represents every child within
`INSTAGRAM_CAROUSEL_MAX_CHILDREN = 10`, processes at concurrency three and
retains the accepted 24-post maximum. IMAGE children use full still inspection;
VIDEO/REEL children use cover-only inspection and cannot establish temporal
negatives. Unsupported, unavailable and failed children remain explicit
UNKNOWN. Unselected carousels remain NOT_INSPECTED/UNKNOWN.

Each successful parent sweep writes one parent Instagram media Resource and one
completed Capture with authoritative completion `capturedAt`, a bounded
coverage artifact and one Evidence/Observation pair per successful child.
Persisted child lineage binds parent/child media identity, ordinal, media type,
inspection mode, content SHA-256, visual/OCR contracts, profiles and model
identities, admitted source Capture/Evidence, exact artifact/Evidence support
and failure/coverage truth. Provider access, downloads and models remain outside
database transactions. Raw bytes, signed locators, provider bodies, secrets,
prompts, reasoning and temporary paths are never persisted.

The low-level visual-text candidate is strict and fail-closed: at most 20 spans,
160 characters per span and 1,600 total; NFKC/whitespace normalization;
deterministic ordering/deduplication; EXPLICIT_EMPTY distinct from UNKNOWN; and
data-only prompt-injection treatment. Deterministic exact-token vocabularies
produce only bounded CTA, generic product and visible disclosure observations.
One active same-Brand exact Offering-name occurrence may link an existing
Offering; ambiguous, fuzzy, unnamed and cross-Brand cases remain null. A
disclosure remains a collaboration cue, never canonical Collaboration truth or
HIGH confidence by itself.

C3 admits the ordered child observations under
`instagram-c3-carousel-visual-text-v1`, keeps caption and visual text distinct,
strips Evidence references from model input, and server-finalizes exact child
Evidence subsets for visual Offering/disclosure support. Complete bounded
negative eligibility requires an exhausted provider enumeration, complete
still/cover acquisition and OCR, and no cover-only temporal interval for the
claim. C4 remains the existing three Objects and 35 paths; its regression proves
replay, failure-current preservation and no single-post learning expansion.

## Replay, isolation and deletion

Every execution first passes the current non-secret Settings fence without
credential selection/decryption. The deterministic replay identity binds Brand,
account, authorization generation, parent and ordered typed child manifest,
provider availability/stop truth, source Capture/Evidence, window cutoff,
visual/OCR/finalizer contracts/profiles and both model identities. Exact replay
returns ordered refs and exact coverage before child locator, acquisition,
model or persistence work. Changed child set/order/type, source, window, model,
Brand, account or generation does not collide; zero-Evidence failure is not a
successful replay.

Temporary child artifacts are removed in `finally` on success and every child
failure. Settings deletion removes only the target Brand's Instagram Week 2
lineage and temporary scope; another Brand and target-owned website Resource
survive. Failed changed C3/C4 work cannot replace prior current.

## Verification

- Immutable `npm ci`: passed with unchanged manifest/lockfile. Existing audit
  advisories were reported by npm; no dependency mutation was authorized.
- Prisma generate/validate and production build: passed with Node 24.19.0 and
  npm 11.17.0 on Windows 11 x64.
- Disposable PostgreSQL 17 on Docker 29.7.2: all 90 unchanged migrations
  applied from clean and migration status is current; no extension or new
  migration is required.
- Week 2 PostgreSQL first/replay counts were exactly: Resource 1, Capture 2,
  artifact 4, Evidence 3, capability execution 2, capability resource 2,
  capability Evidence 3, semantic Observation 2, ObservationSupport 2 and
  provider link 4. Replay changed none. After target deletion only the one
  unrelated website Resource remained; all target Instagram counts were zero.
- Concentrated final Week 2/C3/C4 matrix: 75/75 passed. The broader affected
  B3A/B3B/Week 1/C2/C3/C4/C1 run passed 122/123 concurrently; its sole C2
  five-second timeout passed with the complete C2 PostgreSQL file 3/3 in
  isolation. Contract/provider-neutral/architecture matrix passed 41/41.
- Scoped ESLint, Prettier and `git diff --check`: passed. Frozen Brand contract
  bundles verified from clean exact authority pin
  `bbb0be3345c36e9cc7c4f06ca68fb491b742b83f`.
- Schema, 90-migration tree, dependency manifests/lockfile, Dockerfile/runtime,
  public API/consumer and frontend are unchanged.
- Secret/raw-media/signed-locator/temporary-artifact scans passed. Live Graph
  calls, live model calls and Meta/provider mutations were none.

## Publication

Backend implementation commit:
`08651bbbdddb92698dc2bd4b67a061076f958074` / tree
`0ad3dd4132f9ad5e5c94aa377f2bd0ac155a449a`. Exact PostgreSQL row-count proof
commit: `36dbcb216ad3fa2e979c0d2778ae6675d6355cbd` / final tree
`b0ce0192ef259758792979b4e136f0867f87654e`. Both used normal non-force pushes;
independent fetch-back SHA/tree equality and Week 1 ancestry passed.

The archived runner prompt has normalized SHA-256
`05f6fb5ba2b6483ca74f1c31dcaa6d52ffda215a457665468998c7b769c9a3da`.
Its instructions are content-complete; line endings were normalized. The
authority commit/tree containing this record is reported by the
runner because a commit cannot encode its own identity.

Week 2 used one primary run and zero formal correction cycles. No schema,
migration, dependency, frontend, public API, new provider permission, live
provider/model call, raw-media persistence, Creator implementation, Week 3,
development merge or deployment occurred.

## Correction 1 — modality-partial truth

Status: `READY_FOR_CHILD_SA_PROGRAM_ORCHESTRATOR_REVIEW`

The Program Orchestrator required one bounded Week 2 correction while accepting
the Week 2 architecture, ownership and product boundaries. Starting backend,
frontend and authority checkpoints were independently fetched, clean and exact
at `36dbcb216ad3fa2e979c0d2778ae6675d6355cbd`,
`5866d0ac82f742957f53a8db2144a9a166628b75` and
`24d42f50ae42fa9d7426348a1966324d13081b0d` respectively.

Visual description and visual-text/OCR now settle and validate independently.
A supported child persists one parent-owned Evidence item when either modality
succeeds, with independent visual state/reason, visual-text state/reason and
overall AVAILABLE/PARTIAL/UNKNOWN truth. OCR failure never becomes
EXPLICIT_EMPTY; visual failure never becomes a visual negative. Coverage and
replay now preserve independent visual/OCR inspected and unavailable counts,
unsupported count, complete visual scope, complete visual-text scope and
complete-video scope. Replay no longer requires the modality counts to match
and repeats no child acquisition or model work. C3 retains exact positive child
Evidence while combined negatives fail closed when any rule-required modality
or video scope is incomplete.

The visual-text finalizer rechecks every span after NFKC, whitespace
normalization and deduplication; compatibility expansion past 160 characters is
rejected without truncation. Focused unit/contract tests passed 61/61. Clean
disposable PostgreSQL 17 applied all 90 migrations; the final Week 2 lineage
suite passed 2/2 and the broader affected PostgreSQL predecessor matrix passed
22/22. The modality-partial fixture persisted Resource 2, Capture 2, artifact
4, Evidence 3, capability execution 2, capability resource 2, capability
Evidence 3, semantic Observation 2, ObservationSupport 2 and provider link 4;
exact replay changed none and repeated no acquisition or model work.

Immutable install, Prisma generate/validate, production build, scoped ESLint,
Prettier, diff checks, exact pinned Brand bundle verification and added-line
secret/locator/forbidden-artifact scans passed. Schema, all 90 migrations,
dependency manifests/lockfile, Dockerfile, public API, frontend and Week 1 are
unchanged. No live Graph/model call, provider mutation, raw-media persistence,
Creator implementation, Week 3 work, development merge or deployment occurred.

The final backend checkpoint is
`d6b76c2272bf73756e8544526421cdee5fbcc08c` / tree
`f6d022a924124c5c16b41f4e9cddf2ecd0793270`; normal non-force publication and
independent fetch-back SHA/tree equality passed. Week 2 remains evidence-ready,
not self-accepted. Correction cycles used: 1.
