# Instagram Intelligence — Incremental Reel Capability Release Charter V1

`INSTAGRAM_INTELLIGENCE_INCREMENTAL_REEL_CAPABILITY_RELEASE_CHARTER_V1`

Status: `PARENT_ACCEPTED`

This charter governs the eight-week post-V1 incremental Reel/video capability
program for Creator Shop. It extends the accepted Instagram Intelligence V1
implementation without reopening its Product, ownership, provider, security,
truth-state, deletion, or workspace decisions.

The purpose is:

```text
BUILD THE REEL/VIDEO FOUNDATION ONCE
+
REUSE VERSIONED ATOMIC MEDIA EVIDENCE
+
SHIP SMALL DOMAIN-OWNED CAPABILITY PACKS INCREMENTALLY
```

This charter is finite execution authority only for **Week 1**. Weeks 2–8 are
frozen roadmap boundaries and remain separately authorized.

---

## 1. Accepted predecessor authority

Instagram Intelligence V1 is technically accepted at:

| Repository | Branch | SHA | Tree |
| --- | --- | --- | --- |
| Backend | `program/instagram-intelligence-v1-backend` | `d5b9de557ed983a9c3af26b1edc305ba8b77d6f3` | `67d2642871899fda9e7bd9248b8d56892c3d6e6d` |
| Frontend | `program/instagram-intelligence-v1-frontend` | `5866d0ac82f742957f53a8db2144a9a166628b75` | `7c095290ffdef4c84f37382bc594bef536c92a49` |
| Program authority | `program/instagram-intelligence-v1-authority` | `261bd1d4ddb6ffe4cb3a06ab00b83f3b0a9ef320` | `4305067d3d29d0d5429a29e103cf2ab5b3e92249` |

Backend migration count is exactly `90` at the accepted predecessor.

The program branches have not been merged into `development` and have not been
deployed. Merge, target-environment migration, deployment, and production
monitoring remain separate Parent/developer actions.

---

## 2. Preserved V1 authority

Do not reopen:

```text
fixed 30-day V1 window
at most 24 deeply selected posts
all eligible posts receive metadata/caption/metrics/coverage
three Instagram Intelligence Objects
shared current/candidate/generation behavior
failure-current preservation
Settings-owned connection lifecycle and delete-data
tenant / Brand / provider-account / authorization-generation fencing
Capture start -> bounded material -> completed capturedAt -> Evidence
MODEL_DERIVATION provenance and exact parent Evidence
likely_collab remains inference, not Collaboration truth
exact Offering links do not mutate Offering truth
hidden Instagram-to-Brand lane remains generation-only
singular Instagram workspace with no inner tabs
manual refresh roles and 15-minute cooldown
daily profile/media/performance and weekly audience cadence
hourly dispatcher with due gates and deterministic jitter
raw media is not durably persisted
```

Campaign objective authority remains:

```text
AWARENESS / TRUST / ASSETS / ACTION
```

`PULSE / PROOF / PRODUCTION / PUSH` is legacy vocabulary only.

---

## 3. Shared Reel/video architecture boundary

The reusable stack is intentionally split into two layers.

### 3.1 Shared Instagram video-media foundation

This layer owns only reusable source/media mechanics:

```text
provider locator acquisition
bounded secure video download
video validation/probing
deterministic frame selection
temporary video/frame containment and cleanup
timestamped frame manifest
low-level visual observation invocation
exact media/frame Evidence lineage
idempotent/versioned execution identity
failure and availability semantics
cost/concurrency/timeout controls
```

It must not depend on Brand Object schemas, Creator Object schemas, Campaign
recommendation output, Collaboration workflow state, or frontend composition.

Provider credential resolution remains outside the low-level media primitive.
The provider adapter may obtain credentials through the owning Settings path and
pass only the bounded acquisition input to the foundation.

### 3.2 Domain-owned consumers

Domain consumers separately own their conclusions and actions:

| Consumer | Owns |
| --- | --- |
| Brand Instagram Intelligence | Source-native Reel observations, patterns, coverage, and its three Objects |
| Creator Instagram Intelligence | Future Creator-owned Reel semantics and Objects, after its own Product freeze |
| Campaign Recommendation | Whether to recommend Brand-Led strategy and suggested shot/segment guidance |
| Campaign | Canonical Objective, Offering, target, deliverables, brief and brief instructions |
| Collaboration | Canonical submission, resubmission, approval, publishing evidence and resolution |
| Collaboration Intelligence | Future advisory comparison of submitted media against canonical brief requirements |

Shared media evidence does not transfer canonical ownership to Instagram
Intelligence.

---

## 4. Reusable atomic evidence model

The foundation and later modality packets may produce versioned, bounded,
time-addressable atomic evidence such as:

```text
video technical metadata
selected frame timestamps
low-level frame observations
scene boundaries
on-screen text
timestamped transcript segments
product/person/brand-asset presence
product-use observations
CTA observations
hook observations
ordered content segments
```

Atomic evidence is not itself a Campaign recommendation, Creator conclusion, or
Collaboration decision. Every derived field must cite the exact admissible
subset of source evidence that supports it.

No later capability may convert an uninspected interval into a negative fact.

```text
NOT OBSERVED IN SELECTED FRAMES
!=
NOT PRESENT IN THE VIDEO
```

Use `UNKNOWN`, `NOT_INSPECTED`, `UNAVAILABLE`, or `UNABLE_TO_VERIFY` when
coverage cannot support a conclusion.

---

## 5. Eight-week frozen roadmap

The roadmap is a sequence of capability packs, not permission to implement all
weeks at once.

| Week | Capability pack | Frozen outcome | Current authority |
| --- | --- | --- | --- |
| 1 | Shared video foundation + selected Brand Reel frames | Secure deterministic frame evidence enriches existing Brand Instagram content behavior | `AUTHORIZED` |
| 2 | Carousel + visual-text pack | Full bounded carousel-child inspection, OCR, on-screen CTA/product/disclosure evidence | `PLANNED_NOT_AUTHORIZED` |
| 3 | Creator foundation adoption | Creator SA uplifts to the accepted shared foundation and adds only Creator-frozen adapters/semantics | `PLANNED_NOT_AUTHORIZED` |
| 4 | Speech foundation | Temporary audio extraction, timestamped transcription, spoken hook/CTA/product phrase | `PLANNED_NOT_AUTHORIZED` |
| 5 | Temporal structure | Scene segmentation, ordered segments, product/creator introduction timing, coarse pacing | `PLANNED_NOT_AUTHORIZED` |
| 6 | Brand-Led Campaign Recommendation beta | Evidence-grounded cross-Reel patterns become advisory Campaign Recommendation input | `PLANNED_NOT_AUTHORIZED` |
| 7 | Collaboration compliance foundation | Canonical brief requirement compiler plus show/say/text/timing advisory checks | `PLANNED_NOT_AUTHORIZED` |
| 8 | Compliance completion + rollout hardening | Order/materiality/confidence, resubmission preservation, integrated operational acceptance | `PLANNED_NOT_AUTHORIZED` |

Weeks may be re-estimated after predecessor evidence, but their ownership
boundaries may not be silently merged or reinterpreted.

---

## 6. Weekly execution rule

The target throughput is:

```text
2-3 SMALL SEMANTIC EXTENSIONS PER WEEK
OR
1 MEDIUM FOUNDATION / DOMAIN-INTEGRATION PACK PER WEEK
OR
1 LARGE CAPABILITY ACROSS TWO WEEKS
```

Two or three extensions may share one packet only when they:

- consume the same already-accepted modality;
- preserve the same owner and consumer;
- share one coherent acceptance matrix;
- do not add a new provider permission, persistence architecture, or user
  workflow; and
- remain reviewable and reversible as one release.

New modality foundations, new canonical-domain integrations, and complete
workflows are not treated as small simply because the shared video runtime
exists.

---

## 7. Week 1 canonical packet

Packet:

```text
W1_SHARED_VIDEO_FOUNDATION_AND_SELECTED_BRAND_REEL_ANALYSIS
```

Purpose:

```text
REPLACE COVER-ONLY ANALYSIS FOR DEEP-SELECTED REEL/VIDEO MEDIA
WITH A SAFE, BOUNDED, DETERMINISTIC MULTI-FRAME PATH

AND

MAKE THE LOW-LEVEL VIDEO FOUNDATION REUSABLE BY A FUTURE CREATOR ADAPTER
```

### 7.1 Eligible corpus

- Preserve the accepted 30-day eligible corpus.
- Preserve the accepted at-most-24-post deep corpus across all formats.
- Only already deep-selected `REEL` / `REELS` / `VIDEO` media receive
  multi-frame inspection.
- Unselected media remains `NOT_INSPECTED` with visual semantics `UNKNOWN`.
- IMAGE and CAROUSEL behavior remains unchanged in Week 1.

### 7.2 Versioned technical constants

These are adjustable algorithm/safety constants, not permanent Product
semantics:

```text
VIDEO_ANALYSIS_PROFILE = selected-reel-frames-v1
MAX_VIDEO_DOWNLOAD_BYTES = 104,857,600
MAX_VIDEO_DURATION_SECONDS = 180
MAX_SELECTED_FRAMES_PER_VIDEO = 6
FRAME_LONG_EDGE_MAX_PIXELS = 1280
FRAME_ENCODED_MAX_BYTES = 4,194,304
RAW_VIDEO_RETENTION = NONE_AFTER_EXECUTION
RAW_FRAME_RETENTION = NONE_AFTER_EXECUTION
```

The runner may choose stricter limits if required by an existing deployment or
security contract, but must record the exact reason. It may not silently choose
larger limits.

### 7.3 Deterministic frame profile

Construct candidate timestamps from:

```text
0 seconds
1.5 seconds
3 seconds
50% of duration
80% of duration
max(duration - 0.25 seconds, 0)
```

Then:

1. remove timestamps outside the verified duration;
2. normalize to a stable millisecond representation;
3. deduplicate;
4. sort ascending; and
5. extract at most six frames.

Week 1 does not implement adaptive scene-change selection. That belongs to the
Week 5 temporal-structure pack.

### 7.4 Low-level observation and semantic use

Each successfully inspected frame must retain:

```text
provider media identity
verified video fingerprint
analysis-profile version
frame ordinal
requested timestamp
actual decoded timestamp when available
bounded frame technical metadata
low-level observation contract/model/profile identity
exact Capture and Evidence lineage
```

The existing low-level visual observation boundary remains descriptive and
must not itself make Campaign, Creator, Offering, Collaboration, performance,
pattern, or recommendation claims.

Brand Instagram semantics may consume the ordered frame evidence to enrich only
the existing `instagram_content_behavior` contract, especially:

```text
creative_structure_patterns
visual execution/theme observations
offering_presence_patterns
creator_presence_patterns
representative_media_refs
bounded_learnings
coverage
```

No fourth Instagram Object and no new top-level Brand Centre workspace section
is authorized.

Week 1 may support bounded labels such as product-led opening, person-led
opening, product visible early, product-use demonstration, brand/logo visible,
and visual CTA where the selected evidence supports them. These remain
observations or cross-Reel associations—not causal claims.

### 7.5 Performance boundary

Existing post-level metrics may be associated with Reel-level semantic cohorts
using the accepted deterministic C2/C4 sample, coverage, comparator, and
inconclusive-state rules.

Week 1 does not add or fabricate a three-second-view metric. Any future early-
view rate must use an explicitly provider-supported numerator and denominator.
Reach, views, or total interactions must not be relabelled as a three-second
view rate.

### 7.6 Consumer/frontend boundary

Prefer the existing three-Object aggregate and media-detail routes. Existing
workspace hierarchy and actions remain unchanged.

An additive consumer/frontend change is allowed only when necessary to show:

- that a selected Reel received multi-frame inspection;
- inspected-frame count and truthful coverage/limitations;
- existing content-behavior conclusions that are now supported by multi-frame
  Evidence; and
- preserved-current degradation if video analysis fails.

Do not add a new tab, navigation peer, settings mutation, semantic editor,
Campaign recommendation UI, Creator UI, or Collaboration UI.

---

## 8. Week 1 security and containment

The video path must preserve or strengthen the accepted B3A/B3B controls:

```text
HTTPS-only remote acquisition
scheme/hostname allowlisting
DNS and private/reserved IP rejection
redirect revalidation at every hop
bounded redirects
connect/read/overall timeout
Content-Length precheck plus streamed byte enforcement
dishonest Content-Length rejection
content signature/MIME/container verification
duration/dimension/frame-count limits
unique task/tenant isolation scope
no access token or locator in logs, Evidence or DTOs
no raw bytes/base64 in durable persistence
guaranteed temporary cleanup on success, failure, abort and timeout
```

Do not hold a database transaction open across provider download, video decode,
frame extraction, or model invocation.

The decoder/extractor must be demonstrably available in the production runtime,
not only on the Local Codex host. Repository-scoped dependencies are allowed
only when necessary, reviewed, deployable, license-compatible, and recorded.
The runner must not silently install or reconfigure system-wide software.

If no production-deployable bounded decoder route exists, stop with:

```text
VIDEO_DECODER_DEPLOYMENT_PREREQUISITE_REQUIRED
```

---

## 9. Execution identity and backfill

At minimum, deterministic identity must bind:

```text
Brand/tenant subject
provider account
authorization generation
provider media identity
video fingerprint when obtainable without retaining raw media
Capture/source Evidence manifest
video acquisition profile version
frame-selection profile version
visual observation profile/model version
semantic processor version
window/cutoff identity
```

Exact replay must not duplicate valid observations, derived Evidence,
generations, or current pointers.

Week 1 may perform a bounded provider-neutral backfill for the selected 30-day
fixture corpus. Production backfill scheduling, rollout percentages, and AWS
deployment are not authorized by this implementation packet.

Unchanged media must not be reprocessed on every daily refresh when the exact
successful analysis identity remains reusable. A changed analysis/profile
version may trigger a bounded new execution while preserving prior current
until a valid replacement succeeds.

---

## 10. Creator SA compatibility rule

The Creator SA's previously accepted SHA remains immutable authority for what
it reviewed. Week 1 creates a newer additive descendant checkpoint; it does not
retroactively invalidate that review.

The Week 1 acceptance artifact must publish a compact Creator reuse manifest:

```text
accepted backend predecessor and resulting SHA/tree
shared source/media modules and exported ports
configuration names without values
technical constants/profile versions
persistence/Evidence contracts reused
new dependencies and production requirements, if any
known Brand-bound surfaces that must not be reused
Creator adapter integration seams
tests proving subject/domain neutrality of the low-level foundation
```

Before Creator implementation mutates the shared media/Evidence surfaces, its SA
must perform one explicit base-uplift/reconciliation packet to the accepted Week
1 checkpoint. It must not follow moving `HEAD` or absorb weekly Brand semantic
commits automatically.

During a shared-runtime packet, one execution owner at a time governs:

```text
media acquisition
video validation/extraction
shared Evidence primitives
common model adapters
shared migrations
Settings-owned delete hooks
```

Brand and Creator domain processors may then advance independently against the
stable versioned foundation.

---

## 11. Incremental rollout contract

Every capability pack must be independently controllable by environment,
account/domain, and capability. Deploy code disabled first where an existing
feature-flag mechanism permits it.

Recommended release stages are:

```text
fixture/PostgreSQL acceptance
-> disabled deployment
-> internal shadow processing
-> small canary
-> user-visible projection
-> measured expansion
```

Absence of an existing generic feature-flag service does not authorize building
a new generalized platform in Week 1. Use the smallest established
configuration/rollout mechanism or return a separately classified operational
follow-up.

At minimum observe without sensitive payloads:

```text
acquisition/probe/extraction success and failure categories
unsupported codec/container/duration/size counts
frames requested/extracted/inspected
processing latency and timeout
model invocation count/cost identity where available
cleanup success/failure
UNKNOWN / NOT_INSPECTED / UNAVAILABLE rates
backfill/reprocessing count
current-preservation events
```

---

## 12. Weekly acceptance model

Each packet uses:

```text
changed-surface unit/contract tests
security and adversarial transport/decoder tests
focused PostgreSQL lineage/replay/isolation/deletion proof where persistence changes
production build
scoped lint
diff integrity
secret/raw-media/forbidden-artifact scan
normal non-force publication
independent fetch-back SHA/tree equality
```

For Week 1 additionally require:

- deterministic timestamp selection and short-video deduplication;
- IMAGE/CAROUSEL predecessor behavior unchanged;
- selected Reel success, partial extraction, unsupported media, oversize,
  over-duration, corrupt container, timeout, abort, model failure, and cleanup;
- exact frame-to-Capture/Evidence-to-semantic-to-current lineage;
- no false negative from missing/uninspected frames;
- exact replay with stable row counts;
- changed-profile failure preserves prior valid current;
- tenant/account/authorization-generation substitution fails atomically;
- Settings delete-data removes only the target Brand's new derived rows;
- a production-runtime decoder availability/boot proof;
- no live provider/model call required for acceptance; and
- no frontend browser matrix unless a visible frontend surface changes.

---

## 13. Week 1 prohibited work

Do not implement:

```text
full carousel-child sweep
OCR
audio extraction or analysis
transcription
adaptive scene segmentation
precise pacing or full temporal interpretation
multi-frame analysis for unselected media
seven-day or fourteen-day windows
three-second-view metric invention
new provider permission or OAuth route
Facebook Login
Business Discovery
Creator Marketplace Discovery
Creator Intelligence Objects or workspace
Campaign Recommendation output or brief mutation
Collaboration submission/compliance workflow
canonical Creator or Collaboration mutation
semantic editing/manual override
new generalized media, scheduler, feature-flag, research, or statistics platform
AWS deployment or production migration
development-branch merge
```

No live Meta/OAuth mutation is authorized.

---

## 14. Circuit breakers

Stop before broad mutation when Week 1 requires:

```text
new Product ownership or fourth Instagram Object
new provider permission/OAuth behavior
new general Intelligence current/candidate architecture
weakening Capture/Evidence or MODEL_DERIVATION invariants
weakening tenant/account/generation isolation
durable raw-video or raw-frame persistence
unbounded media download or extraction
system-wide decoder installation/reconfiguration
non-deployable local-only media tooling
material schema/migration redesign
parallel Creator implementation in the same shared files
Campaign/Collaboration/Offering/Creator canonical mutation
```

Ordinary implementation, contract-version, fixture, test, DTO, mapper, decoder
integration, and existing-UI projection defects inside this charter are normal
bounded correction work.

---

## 15. Authorization state

```text
INSTAGRAM_INTELLIGENCE_V1 = ACCEPTED
INCREMENTAL_REEL_RELEASE_CHARTER = ACCEPTED
WEEK_1 = AUTHORIZED_FOR_EXTERNAL_LOCAL_CODEX
WEEKS_2_TO_8 = PLANNED_NOT_AUTHORIZED
CREATOR_SA_BASE_UPLIFT = NOT_YET_AUTHORIZED
DEVELOPMENT_MERGE = NOT_AUTHORIZED_BY_THIS_CHARTER
DEPLOYMENT = NOT_AUTHORIZED_BY_THIS_CHARTER
```
