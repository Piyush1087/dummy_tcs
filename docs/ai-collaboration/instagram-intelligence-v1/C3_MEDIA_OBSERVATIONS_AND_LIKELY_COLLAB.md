# Instagram Intelligence C3 — Per-media semantics and likely collaboration

**Status:** `CORRECTION_2_EVIDENCE_READY_FOR_CHILD_SA_REVIEW`

**Execution date:** 2026-09-12

**Scope:** resumed C3 only; no C4, frontend, API, provider acquisition, scheduler, or canonical-domain mutation

## Exact authority and implementation identity

The resumed run started from and independently matched the fetched implementation branches:

| Repository | Starting SHA | Starting tree | Final checkpoint |
|---|---|---|---|
| backend | `896a8d23e9956cf35faf627dc6738d358995981f` | `5fc55603a7fba155372290d1bbb44c18628000ac` | `2b56fc4eea16c52a5cb544aedefa0d7ce809b425` / `7bdca009a11b34bb682eafbe320e14c550dabb27` |
| authority | `41cebd920d2578745d25cc2cfe581da3b4bbfc23` | `9ad5c4d8b90e8eda7cc48586e395bb74fcb4ad5e` | final authority identity is reported by the runner after this artifact is committed |
| frontend | `bc8523183ae4892c0b538474d2f5444a1ea356d8` | `7f3016c01500083ae2f536ebd0540219c9228dd7` | unchanged |

All starting worktrees were clean; local/fetched SHA and tree equality and accepted ancestry passed. The C3-R0 migration and evidence were present. The initial C3 scope-expansion stop remains valid historical discovery; Parent-transmitted authority accepted C3-R0 and authorized this resumed execution.

## Implemented boundary

C3 is installed under `src/features/instagram-intelligence/semantics` and exported by the existing Instagram Intelligence module. It uses:

- contract `1.0`, observation profile `1.0`, normalization `instagram.per-media-semantics.c3.v1`, and prompt/profile `instagram-c3-per-media-v1`;
- one provider-neutral `InstagramC3SemanticModelPort`;
- the existing `StructuredEvidenceExecutionService` adapter, with provider/model selection owned by configuration, temperature zero, and one provider attempt;
- a deterministic fixture model for acceptance; an unconfigured production adapter fails closed before dispatch;
- strict Zod validation followed by server-owned normalization, finalization, identity, hashing, canonical-linking, and persistence.

No live model or provider call ran. No provider-specific type enters the C3 domain contract.

## Input manifest and modality policy

Each execution identity canonically binds Brand, provider account, authorization generation, media/resource identity, exact 30-day window and cutoff, B3B inspection state, source Evidence refs and content hashes, exact persisted C2 Evidence ref/hash, model/profile/contract versions, and the read-only canonical Offering snapshot hash. Source rows are bounded to completed Instagram captures, exact account/generation/source scope, cutoff, and window. Repeated source captures are reduced deterministically to one latest eligible row per provider media identity.

The exact C2 media-inventory result must match contract `instagram-c2-deterministic-foundations-v1`, Brand/account/generation/window/cutoff, and must contain the admitted media Evidence ref plus its exact canonical payload hash. C3 projects already-persisted C2 rates; it does not recalculate sums, rates, medians, cohorts, distributions, coverage, or deltas, and it does not send metrics to the model.

Modality handling is preserved:

- unselected media permits caption semantics and deterministic hashtag/mention tokens; visual state remains unknown and no visual negative is admitted;
- selected IMAGE admits the complete still;
- selected CAROUSEL admits only the representative child and persists `PARTIAL_DEEP` child counts;
- selected REEL/VIDEO admits only cover evidence and preserves `COVER_ONLY`, `VIDEO_NOT_ANALYZED`, `AUDIO_NOT_ANALYZED`, and `TRANSCRIPT_NOT_ACQUIRED`;
- unavailable modalities remain explicit and cannot support positive or negative model claims.

## Strict semantic and safety contract

The internal candidate rejects unknown keys, identity, Evidence refs, canonical IDs, metrics/arithmetic, HIGH confidence, provider collaborator truth, unsupported modalities, oversized strings/arrays, recommendation/performance/causal/cross-post vocabulary, and prompt-like recursive instructions. Caption text is checked for prompt injection before model dispatch and is explicitly framed as untrusted quoted source data.

Themes, caption patterns, creative structures, visual executions, and creator-role signals persist as field envelopes. `AVAILABLE` requires at least one bounded value and supporting Evidence; `UNKNOWN` has no values and includes `INSUFFICIENT_EVIDENCE`. Values are Unicode-normalized, deduplicated, deterministically sorted, and assigned stable semantic IDs. One admitted modality is at most LOW; MEDIUM requires independent caption and visual Evidence. Empty public arrays are backed by explicit persisted UNKNOWN envelopes and therefore never silently assert absence.

Creator role/presence remains Instagram source-native. `Educator` does not become a canonical archetype, Campaign strategy, or collaborator identity. C3 creates or updates no Creator, Collaboration, Campaign, or Offering. Canonical Creator and Collaboration IDs remain `null`/`NONE`. A canonical Offering ID is attached only for one active Offering belonging to the exact Brand with one normalized exact-name match and admitted source support; fuzzy or ambiguous matches remain `null`/`NONE` with `OFFERING_MATCH_UNVERIFIED`.

## Deterministic likely-collab finalizer

Atomic cues have a stable hash identity, admitted modality, bounded support hash, and server-owned Evidence refs. One source span is one vote even if repeated or relabelled. Mentions are extracted deterministically and are never treated as verified collaboration or creator identity. Current B2 input cannot emit `PROVIDER_COLLABORATOR_RELATION`, so C3 cannot emit HIGH.

| Admitted cue/coverage | Result | Confidence |
|---|---|---|
| verified provider collaborator relation | `LIKELY_COLLAB` | `HIGH` (not available in current B2/C3) |
| two independent classes including an explicit cue | `LIKELY_COLLAB` | `MEDIUM` |
| mention only | `POSSIBLE_COLLAB` | `LOW` |
| joint appearance only | `POSSIBLE_COLLAB` | `LOW` |
| mention plus joint appearance | `POSSIBLE_COLLAB` | `LOW` |
| one explicit cue | `POSSIBLE_COLLAB` | `LOW` |
| no cue plus complete caption and full selected IMAGE inspection | `NO_COLLAB_SIGNAL` | `LOW` |
| unselected, cover-only, partial-carousel negative, or unavailable required modality | `UNKNOWN` | `null` |

`NO_COLLAB_SIGNAL` is only a bounded statement about inspected V1 modalities, never canonical non-collaboration truth.

## C3-R0 persistence and replay

One validated model candidate produces four capability-owned derived Evidence slices: caption context, visual observations, creator signals/likely-collab, and Offering signals. Each row:

- uses `MODEL_DERIVATION` truthfully;
- contains only its capability-relevant normalized semantic payload;
- carries only its relevant source/C2 parent subset;
- preserves the shared execution identity and exact manifest;
- is attached to one same-capability Semantic Observation only through its own derived Evidence;
- reaches cross-capability source/C2 Evidence only through `provenance.parentEvidenceRefs`.

Direct cross-capability ObservationSupport remains rejected by the accepted R0 constraint. A successful replay reconstructs the strict public observation from the four persisted slices, avoids a second model call, and leaves Evidence, Observation, and support row counts unchanged. A peer-media failure persists no fabricated C3 value; successful peers and prior completed results remain intact.

## Verification evidence

Environment: Windows NT `10.0.26200.0` AMD64; Node `v24.19.0`; npm `11.17.0`; Docker `29.7.2`; PostgreSQL `17.11`; Git `2.55.0.windows.3`.

- `npm ci`: PASS; package and lockfile unchanged. Existing dependency audit reported 52 advisories (4 low, 24 moderate, 23 high, 1 critical); no dependency change or audit remediation was authorized by C3.
- `npx prisma generate`: PASS.
- `npx prisma validate` with local disposable database configuration: PASS.
- clean PostgreSQL 17 apply/status: all 89 migrations applied; schema current.
- focused C3 contract/model/PostgreSQL: 24/24 PASS.
- B1/B2/B3A/B3B/C2/C3-R0/B4 focused regression set: 108/108 PASS across 18 files.
- production backend build: PASS after the repository-required Prisma generation.
- scoped ESLint: PASS.
- `git diff --check`: PASS.
- scoped secret pattern scan: zero files; forbidden runtime/media artifact scan: zero files.
- no `.env`, raw provider payload, prompt/response, raw media, signed locator, token, or credential was tracked or persisted.
- migration count remains 89. Migration 88 SHA-256 remains `d02b75e50f883150c9d14908c82ef10d9b0de4c2b464168567634dd0157009e4`; migration 89 SHA-256 remains `12b5a234d322235199dc8ad1173fc4835517ed0a3ed5a6ff910aa48165f118a8`.
- backend normal push and independent fetch-back: local/remote SHA and tree equal; starting C3-R0 checkpoint is an ancestor.
- frontend exact SHA/tree unchanged.

The PostgreSQL fixture proved a mixed IMAGE/CAROUSEL/REEL/VIDEO corpus, one observation per successful eligible media, unselected caption-only behavior, representative-child and cover limitations, exact C2 membership/hash consumption, four target-capability derived rows per success, same-capability support, partial peer failure, replay stability, Brand/account/generation/C2 substitution rejection, no current/ObjectGeneration write, no canonical-domain mutation, Settings deletion of target Instagram C3 data, and survival of other-Brand data.

## C3 correction cycle 1 — semantic-evidence grounding

Correction cycle 1 started from exact backend `2b56fc4eea16c52a5cb544aedefa0d7ce809b425` / tree `7bdca009a11b34bb682eafbe320e14c550dabb27`, authority `fcac0f97e9cb8e5f76784ddc2263125d5631e4cb` / tree `ed9c8ad6689660cdbf5941d50fc4385b92a8d736`, and unchanged frontend `bc8523183ae4892c0b538474d2f5444a1ea356d8` / tree `7f3016c01500083ae2f536ebd0540219c9228dd7`. Local/fetched equality, clean status, and predecessor ancestry passed before work.

The internal creator/Offering presence candidates are now strict `{ state, supportModalities }` objects. Positive states require one or more deduplicated, admitted, available caption/visual modalities; `EXPLICIT_EMPTY` cannot support a positive; `UNKNOWN` requires no modalities and emits no refs; and `NOT_OBSERVED` requires exactly caption plus a complete selected-image visual inspection. Final field refs come only from the declared modalities.

An exact canonical Offering ID now additionally requires the exact normalized Offering name to occur in at least one declared, admitted source modality. Unique same-Brand catalog identity without source occurrence remains `null` / `NONE` / `OFFERING_MATCH_UNVERIFIED`. No Offering is created or changed.

`MENTION_ONLY` was removed from model candidate output. It is produced only by deterministic extraction of an actual admitted caption `@mention`, with the caption Evidence ref and LOW/POSSIBLE semantics. Cue admission now enforces the class/modality matrix, verifies normalized support text in the declared admitted caption or bounded visual observation, rejects unavailable or empty support, and collapses duplicate modality/source spans to one vote. Provider relation and HIGH remain unavailable.

Capability slices retain C3-R0 `MODEL_DERIVATION` lineage and same-capability ObservationSupport. Every field Evidence ref was checked as a subset of its derived slice's parent refs; parent sets include only the caption/C2, inspection visual, creator, or Offering Evidence used by that slice and never the derived row itself.

A real PostgreSQL 17 sequence persisted 12 C3 Evidence rows, 12 Semantic Observations, and 12 support rows for three successful peers (four slices each). After the selected image received a later visual Evidence identity and its model fixture failed, no replacement C3 row was published: the 12/12/12 counts remained fixed; that media's four refs, hashes, keys, support rows, and provenance were byte-for-byte equal; the other eight peer refs were unchanged; and exact replay of the prior successful identity returned the same four refs without mutation. Settings deletion reduced the target Brand's Instagram Evidence/Observation/support counts to zero while preserving the other Brand.

Verification: immutable `npm ci` left `package.json` and `package-lock.json` byte-identical (the pre-existing audit result remains 52 advisories: 4 low, 24 moderate, 23 high, 1 critical); Prisma generate/validate passed; a clean disposable database applied all 89 migrations and reported current; 111/111 focused B1/B2/B3A/B3B/B4/C2/C3-R0/C3 tests passed across 18 files; production build, scoped ESLint, and `git diff --check` passed. The scoped secret and forbidden-artifact scan found zero matches. Migration 89 remains `12b5a234d322235199dc8ad1173fc4835517ed0a3ed5a6ff910aa48165f118a8`.

The bounded backend correction was normally pushed and fetched back equal at `6de358233cba92652057817cfd215f16ec8523ce` / tree `c369d9b8fd8d15210916825da52e3715fd904a9e`; the accepted C3 predecessor is an ancestor. No live Graph/model call, schema/migration, capability, public contract, frontend, API, canonical mutation, current/Object, or C4 work occurred.

## C3 correction cycle 2 — token boundaries and deterministic canonicalization

Correction cycle 2 started from exact backend `6de358233cba92652057817cfd215f16ec8523ce` / tree `c369d9b8fd8d15210916825da52e3715fd904a9e`, authority `41ff597bebd30c9326d54bf87bc95313f5994d92` / tree `c363cebba23f6b8777f6a21f22980f01d34b6102`, and unchanged frontend `bc8523183ae4892c0b538474d2f5444a1ea356d8` / tree `7f3016c01500083ae2f536ebd0540219c9228dd7`. Local/fetched equality, clean worktrees, migration identity, and correction-cycle-1 ancestry passed before mutation.

Mention tokenization now admits only bounded Instagram-style handles at textual/token boundaries. Email domains, embedded word/identifier fragments, `foo.@maker`, URL path/query fragments, and repeated email-like fragments produce no mention. Genuine mentions at caption start or after whitespace, parentheses, quotes, commas, and ordinary punctuation are Unicode-normalized, lowercased, deduplicated, and code-point sorted. `MENTION_ONLY` remains deterministic-only; model candidates still cannot emit it.

One shared normalized phrase-boundary matcher now grounds exact Offering names and collaboration-cue support. It normalizes Unicode, case, and whitespace, requires a contiguous phrase with complete token boundaries, accepts punctuation-delimited phrases, and rejects larger-word/token substrings such as `Serum A` in `Serum Advanced`, `MySerum A`, or `Serum` in `SerumPlus`. No fuzzy, stemming, semantic-similarity, or generalized search behavior was added.

Semantic values are grouped by normalized label identity, union all admitted support modalities, code-point sort the union, recalculate refs/confidence server-side, and select a deterministic display label. Every permutation of the same logical candidates produces identical normalized output and canonical hash; CAPTION plus VISUAL yields one value, exactly two refs, and MEDIUM. Candidate-provided confidence does not override the server result.

Exact duplicate cues now collapse deterministically by modality, normalized support span, and signal class. The same modality/span under different classes fails closed with `AMBIGUOUS_CUE_CLASSIFICATION` independent of array order. One source span remains one vote. The missing regression confirms deterministic mention plus joint visual appearance without an explicit cue remains `POSSIBLE_COLLAB` / LOW; partnership disclosure plus a distinct joint appearance remains `LIKELY_COLLAB` / MEDIUM; provider relation and HIGH remain unavailable.

Cycle-1 presence grounding, complete negatives, source-grounded exact Offering ownership, same-media changed-input failure preservation, field-parent subsets, C3-R0 provenance, same-capability support, C2 no-recalculation, isolation, replay, and Settings deletion remain green. A clean PostgreSQL 17 database applied all 89 migrations and reported current. The final matrix passed 128 non-C3-PostgreSQL tests serially plus 3/3 isolated C3 PostgreSQL tests (131 total across the same 18 files); focused semantic/model tests were 44/44. Immutable install, Prisma generate/validate, production build, scoped ESLint, diff check, and secret/forbidden-artifact scans passed. Migration 89 remains `12b5a234d322235199dc8ad1173fc4835517ed0a3ed5a6ff910aa48165f118a8`.

The cycle-2 backend correction was normally pushed and fetched back equal at `c592d7b1731b15cce9609efafbe7d689a5ca8744` / tree `922ad1bb363ce85c3dd73cee1daf65062d99b0a0`; correction cycle 1 is an ancestor. No schema, migration, capability, public contract, frontend, API, provider, canonical-domain, raw-media, current/Object, or C4 change occurred.

## Scope/accounting

`C3_RESUMED_PRIMARY_RUNS_USED = 1`

`C3_NORMAL_CORRECTION_CYCLES_USED = 2`

`C3_R0_CORRECTION_CYCLES_USED = 1`

`C3_ACCEPTED = NO`

`C4 = PROHIBITED_PENDING_C3_ACCEPTANCE`
