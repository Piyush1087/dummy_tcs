# Campaign Applicant AI Match V1 — P0 Current-State, Donor, Scoring and Dependency Preflight

Status: `EVIDENCE_READY_FOR_TECHNICAL_SA_REVIEW`  
Runner: External Local Codex  
Date: 2026-09-16  
Scope: authority/current-state/donor/shared-runtime audit and finite P1–P4 design only. No backend or frontend source was changed.

## 1. Decision summary

P0 is viable. The backend and frontend Creator Portfolio V3 tips are the smallest executable implementation bases because they already contain the canonical freeze, C03/C04, shared Intelligence, Instagram, Creator Audience V1, Creator Content V0, Creator Brand V0 and Portfolio V3 ancestries. Match must extend the shared Intelligence runtime with a real `APPLICATION` subject; it must not create a synthetic Brand/Offering subject or a parallel scheduler.

One required P1 compatibility correction was found. `C03_APPLICATION_SNAPSHOT_V1` freezes objective, Brand, asset, Offering, Brief, deliverables, commercial context and Creator identity, but does not freeze Campaign targeting. P1 must add `C03_APPLICATION_SNAPSHOT_V2` for new applications, with strict target fields. V1 snapshots cannot be reconstructed from mutable Campaign rows and therefore produce accepted `UNAVAILABLE/APPLICATION_SNAPSHOT_VERSION_UNSUPPORTED`. This is a safe additive adapter path, not a C03 authority gap.

Clarification V1 controls all conflicts: four scored dimensions; Commercial/Work globally not applicable; one initial evaluation only; no refresh or re-evaluation; donor lifecycle causes never enter Match artifacts.

## 2. Inputs, standards and supersession

| Input | Raw SHA-256 | Result |
|---|---|---|
| Product and Consumer Contract V1 | `74626c7a58040289b1e1b389038e9228fb07f74970975d8c7f1d9ce6fc62d4a0` | verified |
| Product Clarification V1 | `d7391569edcc180177201245bb1648735c1f7271878953377f6a8b6b31b3f4da` | verified; superseding authority |
| Technical Preflight and Finite Plan V1 | `6e6630aa39ecef41f68fd844e0c27d3a706bddeb09b1b7be91cdc75a7d552bf5` | verified |
| P0 runner prompt | `31a722cfe618f806c378723b3b1dc490e7e23e692e61aace7a663b63b7ab95b6` | exact byte archive |

Applicable instructions read: repository `AGENTS.md`; universal AI Engineering; backend, database, validation, AI-integration and frontend standards; Aurora v5 responsive, content-resilience, status, processing, data-display and accessibility rules; Campaign Page information architecture. Product semantics outrank the Technical Plan, and Clarification V1 outranks conflicting Product V1 clauses. Product fixtures `MATCH-14` and `MATCH-15` are retained as identifiers but their re-evaluation behavior is explicitly superseded.

## 3. Exact bases and convergence DAG

```text
authority main 3415a8b7ef155e115b77da3335795ff8ab05de3f
  + normal merge c03/recovery-authority df32e63e4ca44de57b40be59167c300ecb886ddd
  + normal merge creator-portfolio-v3-authority 6697ba5d4fc99beb3ace86869fa2ec146ce7483e
  -> program/campaign-applicant-ai-match-v1-authority

backend canonical freeze 129b291ecbca4a1e79451215a81726000cfb5bff
  -> C03 aebeb85 -> C04 fc4d4b59
  -> Brand Intelligence e066265 / Product Intelligence f3a2d7
  -> Instagram fef32afb -> Audience 6f000bd -> Content 0fa145ac
  -> Creator Brand 6206f43 -> Portfolio V3 aaae1e3062137eda30e13e2fd7bcddbb1b239842

frontend canonical freeze 6ea628b
  -> C03 82ed3c9 -> C04 106de998 -> Product Intelligence 6bc965
  -> Instagram 5866d0 -> Audience 36d75f -> Content 7edd26d
  -> Creator Brand c505c067 -> Portfolio V3 9631e8b261f02f331dcf84f09dfd61dcc28eea83
```

Every listed predecessor is an ancestor of its Portfolio tip. Read-only merge-tree previews for `main + C03`, `main + Portfolio`, and `C03 + Portfolio` were conflict-free. Backend candidate tree is `458517fa01a50f43f0b1cd8a948767e4f7600d50`; frontend candidate tree is `25a89b63cec1a576ef605076c717a7cc447e5acc`. The discarded Campaign Intelligence Integration branch is excluded. Development and production are excluded. Portfolio/C04 are capability-gated enhancers, not required dependencies.

## 4. C03 Application and immutable request fence

Executable truth:

- `UceApplication` holds Brand/Campaign/asset/Brief/Creator profile/workspace/actor fences, `statusVersion`, `terminalAt`, and a one-to-one snapshot.
- Canonical lifecycle is `PENDING -> APPROVED|REJECTED|WITHDRAWN|EXPIRED`; `SUPERSEDED` is legacy compatibility. Match treats every non-`PENDING` application as terminal.
- Submit creates Application, immutable snapshot, `application.submitted` event and notification outbox in one transaction. Database constraints forbid snapshot update/delete and require exactly one matching snapshot/event.
- Terminalization locks and CASes `(applicationId,status=PENDING,statusVersion)`. Approval provisions the C04 Collaboration in the same transaction through `sourceApplicationId`.
- Brand list/approve/reject authority remains C03. P3 adds server-derived `availableActions`; Match never derives or gates decisions. Approve/Reject requires `Idempotency-Key`; the current frontend omission is a P3 correction.

`ApplicantAIMatchRequestAdapterV1` accepts only a canonical `PENDING` application with exactly one supported immutable snapshot. It strictly parses the snapshot, canonicalizes it, and derives:

```text
snapshotHash = SHA256(JCS({snapshotId, applicationId, schemaVersion,
  createdAtUtc, campaignContext, campaignAssetContext, briefContext,
  commercialContext, creatorIdentity}))
requestIdentity = SHA256("applicant-ai-match-v1\0" + applicationId + "\0" + snapshotHash)
```

Strings are Unicode NFKC; object keys are lexicographically sorted; numeric forms are canonical decimal; arrays retain authored order except Brief deliverables, which sort by `(displayOrder,id)`. Actor and attribution context are excluded from scoring input. Commercial context may be retained as non-scoring audit context but is not copied into a donor manifest or evaluator input.

P1 adds `C03_APPLICATION_SNAPSHOT_V2` with immutable target `{ageMin,ageMax,gender,affinityIds,geographies}` and objective mapping `PULSE->AWARENESS`, `PROOF->TRUST`, `PRODUCTION->ASSETS`, `PUSH->ACTION` under `ApplicantAIMatchObjectiveAdapterV1`. It does not mutate V1 snapshots. Unsupported/malformed snapshots accept no-score `UNAVAILABLE`.

Late publication uses one transaction: lock Application and Match execution; require Application still `PENDING` with captured `statusVersion`; require manifest frozen and no current; insert complete immutable result graph; CAS current from null; commit. Terminalization that wins first cancels waiting/calculation. Match that loses rejects publication and leaves no current. A terminal Application never waits for Match and its C03 action succeeds independently.

## 5. Donor technical/current adapter matrix

| Donor | Current authority and contract | Admitted Match truth | Evidence/freshness/state | Classification |
|---|---|---|---|---|
| Creator Audience V1 | backend `6f000bd`, `creator_audience_v0.1`, object `creator_audience`, processor `1.0` | follower/engaged age, gender, country, city counts/percentages with valid denominator | persistent manifest; CURRENT/STALE/UNKNOWN; READY/PARTIAL/UNAVAILABLE | `REUSE_WITH_STRICT_MATCH_ADAPTER`; Technical SA must affirm predecessor acceptance |
| Creator Content V0 | backend `0fa145ac`, `creator_content_v0` | 90-day/latest-24 format, metrics, themes, caption patterns, structures, visual execution | exact current object/component/value/manifest hashes and Evidence refs | `REUSE_WITH_STRICT_MATCH_ADAPTER` |
| Creator Brand V0 | backend `6206f43` | confirmed manual profile as context; evidence-derived positioning/voice/style/visual/language suggestions as scoring observations | immutable revisions; suggestion Evidence and LOW/MEDIUM confidence | `REUSE_WITH_EVIDENCE_RULE`; self-declaration alone is not proof |
| Brand Intelligence | backend Portfolio ancestry, BRAND subject | description, category/positioning/value/personality/communication/audience/visual facts | strict current metadata and provenance | `ADDITIVE_INTERNAL_READ_PORT` fenced to Application Brand |
| Offering Intelligence | backend Portfolio ancestry, OFFERING subject | factual, Creator-communication and actionability profiles | strict current metadata and provenance | `ADDITIVE_INTERNAL_READ_PORT` fenced to snapshotted Offering |
| Instagram Evidence/current | backend `fef32afb` and later donor tips | only accepted donor-owned current/Evidence projections | observed-through and immutable Evidence refs | `REUSE_BEHIND_DONOR`; never direct Graph/raw payload |
| Portfolio V3 | backend `aaae1e3` | optional verified/relevant work only | immutable item/revision plus source Evidence | `CAPABILITY_GATED_OPTIONAL`; Technical acceptance required |
| C04 prior work | C04 ancestry and `sourceApplicationId` | optional verified relevant work only after privacy-safe read contract | no accepted Match-safe cross-Brand projection yet | `NOT_ADMITTED_V1` until separate acceptance |

Each Match adapter emits only `CURRENT`, `PROCESSING`, or `TERMINAL_UNAVAILABLE`, plus admitted values, `observedThrough`, generation/value/manifest hashes and Evidence references. OAuth state, provider error, token state, sync cause, Settings state, credentials and raw payload never cross the adapter.

Work Preferences, Rate Card, Commercial Setup, payout/KYC, Marketplace score/rank/current, raw provider payload/token and private other-Brand history are `PROHIBITED_INPUT`. They are not queried, hashed, manifested, scored, reasoned about, or shown.

## 6. Shared Intelligence placement and schema classification

| Delta | Classification |
|---|---|
| `IntelligenceSubjectType.APPLICATION` | `ADDITIVE_SHARED_ADAPTATION` |
| nullable subject `applicationId/campaignId/creatorProfileId/creatorWorkspaceId` plus exact Brand/Campaign/Application/Creator FKs/checks | `ADDITIVE_SHARED_ADAPTATION` |
| C03 Application/snapshot/status/statusVersion reference | `C03_OWNED_REFERENCE_ONLY` |
| execution identity, processor bundle, attempts, leases, heartbeats, retry, dependency/evidence manifests | `REUSE` |
| immutable Match object/component generations and accepted current | `MATCH_OWNED_IMMUTABLE_OUTPUT` |
| second scheduler, mutable score row, synthetic Brand subject | `PROHIBITED_DUPLICATION` |
| re-evaluation/history supersession API | `NOT_REQUIRED` and prohibited in V1 |

Subject `subjectRef=applicationId`; ownership requires the same Application Brand, Campaign, Creator profile and Creator workspace. Request uniqueness is `(processorBundleHash, subjectId, requestIdentity)`; accepted current uniqueness is one per Application subject/object. Object generation `applicant_ai_match` owns all four dimensions, manifest, reasons and result. Components are inserted as one complete graph and become current only in the same CAS transaction.

PostgreSQL safety requires two committed migrations: A only `ALTER TYPE ... ADD VALUE 'APPLICATION'`; B adds columns, indexes, FKs/checks and code that writes the new value. Never add and use an enum value in one transaction. Rollback is forward-only: disable enqueue, retain enum value/history, remove consumers after evidence, and add a corrective migration rather than destructive enum removal.

## 7. Dependency readiness and runtime failure

`ApplicantAIMatchDependencyWaitPolicyV1`:

```text
SNAPSHOT_READY -> REQUESTED -> INSPECTING
  -> WAITING_FOR_DEPENDENCY -> INSPECTING (same request; no generation)
  -> MANIFEST_FROZEN -> CALCULATING -> READY|UNAVAILABLE
terminal Application at any pre-current state -> CANCELLED_NO_CURRENT
technical exhaustion before current -> FAILED_NO_CURRENT (consumer latestAttempt only)
```

Material donors are those that could change the frozen readiness decision: Brand/Offering plus Audience or Content, and any donor needed to reach 60% coverage. Optional Portfolio/C04 never cause waiting. If sufficient coherent current exists, freeze immediately. If a material donor is processing and could make readiness possible, wait up to 24 hours from `application.submitted`. Event completion enqueues the same request identity; safety polling uses deterministic jittered delays `15s,30s,60s,2m,5m` capped at 5 minutes. Existing execution/lease primitives ensure one active attempt. Concurrent completions race on one manifest-freeze CAS; losers reread it.

At the horizon, freeze all then-current or terminal-unavailable donor decisions. Accept `UNAVAILABLE` when coverage/readiness cannot pass. Technical execution retries use existing attempts with `30s,2m,10m,30m,2h`, maximum five failures within the horizon. Exhaustion creates no accepted current; consumer has `current:null`, `latestAttempt.phase:FAILED`, bounded `RUNTIME_RETRY_EXHAUSTED`, while C03 actions remain available. No donor change, timer, GET, user action or C03 decision creates another evaluation after accepted READY/UNAVAILABLE.

## 8. ApplicantAIMatchScoringRegistryV1

All weights are integer basis points relative to their table. State is `AVAILABLE|UNAVAILABLE|CONFLICT|NOT_APPLICABLE`. Only AVAILABLE contributes admitted score weight; UNAVAILABLE/CONFLICT reduce coverage without score zero; NOT_APPLICABLE leaves both numerator and denominator. Every AVAILABLE semantic criterion needs the stated Evidence refs and the strict semantic candidate/finalizer below.

| Stable ID | Dimension / weight | Inputs and admission | Exact evaluator; anchors/sample | Evidence and codes |
|---|---:|---|---|---|
| `AUD_GEO_V1` | Audience 35 | V2 target geographies + current Audience country/city denominator | choose FOLLOWERS else ENGAGED; use most-specific authored level; normalize country ISO-3166-1 alpha-2 and city NFKC/casefold/space; score `100*targetBucketCount/knownDenominator`; union/dedupe targets | manifest + buckets; `AUDIENCE_GEO_UNAVAILABLE`, `AUDIENCE_DENOMINATOR_INVALID`, `AUDIENCE_BUCKET_CONFLICT` |
| `AUD_AGE_V1` | Audience 25 | target age range + current age buckets | weighted overlap count / known age denominator; closed bucket prorates by inclusive integer-year overlap; open-ended bucket admitted only for exact compatible open target; round only output | bucket refs; `AGE_BUCKET_UNSUPPORTED`, `AGE_DENOMINATOR_INVALID` |
| `AUD_GENDER_V1` | Audience 20 | explicitly authored FEMALE/MALE target + authorized provider buckets | exact authorized token map to FEMALE/MALE/UNKNOWN; selected count/known denominator; target ALL is N/A; never infer Creator gender | bucket refs; `GENDER_NOT_TARGETED`, `GENDER_BUCKET_UNAUTHORIZED` |
| `AUD_AFFINITY_V1` | Audience 20 | authored affinity IDs + Content/Creator Brand evidence observations | semantic rubric 0/25/50/75/100: strong counterevidence / weak counterevidence / mixed / multiple aligned / repeated multi-source aligned; min 2 refs from 2 posts | exact refs; `AFFINITY_EVIDENCE_INSUFFICIENT`, `SENSITIVE_TRAIT_REJECTED` |
| `CNT_REQUIRED_FORMAT_V1` | Content 35 | required Brief formats + current Content items | map `REEL_VIDEO->REEL`, `PHOTOSHOOT->IMAGE`, `BANNER_CAROUSEL->CAROUSEL_ALBUM`; Story unsupported; per supported format count score 1=60,2=75,3–4=90,>=5=100; mean supported formats; coverage supported/required | item refs; `REQUIRED_FORMAT_UNAVAILABLE`, `FORMAT_MAPPING_UNSUPPORTED` |
| `CNT_BRIEF_ALIGN_V1` | Content 35 | bounded Brief intent/guidance + admitted Content observations | semantic 0/25/50/75/100 from evidenced contradiction to repeated direct alignment; min 2 posts and 2 refs | `BRIEF_ALIGNMENT_EVIDENCE_INSUFFICIENT`, `SEMANTIC_CONFLICT` |
| `CNT_CONSISTENCY_V1` | Content 15 | themes/structures/visual observations | dominant compatible pattern share across >=4 posts on >=2 dates: <=20%=0, <=40=25, <=60=50, <=80=75, >80=100 | post refs; `CREATIVE_SAMPLE_INSUFFICIENT` |
| `CNT_VERIFIED_WORK_V1` | Content 15 | accepted Portfolio or C04 Match-safe adapter | semantic relevance rubric 0/25/50/75/100; min 1 independently verified work ref | optional; otherwise `VERIFIED_WORK_NOT_ADMITTED` |
| `BRD_CATEGORY_V1` | Brand/Offering 35 | Brand/Offering category facts + evidence-derived Creator niches/content | semantic 0/25/50/75/100; self-declared niche alone capped at 50; >=2 Content refs for >50 | `CATEGORY_EVIDENCE_INSUFFICIENT` |
| `BRD_POSITIONING_V1` | Brand/Offering 25 | Brand positioning/value + Creator Brand positioning and Content | bounded semantic anchors; self-declared archetype alone capped at 50; >=2 refs for >50 | `POSITIONING_EVIDENCE_INSUFFICIENT` |
| `BRD_EXPRESSION_V1` | Brand/Offering 25 | communication/personality/visual + voice/style/visual execution | bounded semantic anchors; conflict if canonical declaration materially opposes current evidence with no rule | `EXPRESSION_EVIDENCE_INSUFFICIENT`, `CANONICAL_EVIDENCE_CONFLICT` |
| `BRD_RELEVANT_WORK_V1` | Brand/Offering 15 | accepted Portfolio/C04 only | semantic relevance 0/25/50/75/100; >=1 verified ref | optional; `RELEVANT_WORK_NOT_ADMITTED` |
| `PER_REACH_VIEW_V1` | Performance 35 | required-format Content REACH/VIEWS | creator-relative format-matched normalization below; combine available metrics equally | >=2 eval +3 baseline per metric/format; `PERFORMANCE_BASELINE_INSUFFICIENT` |
| `PER_HIGH_INTENT_V1` | Performance 30 | comments+saves+shares and reach | per-item high-intent rate; creator-relative format baseline normalization | same sample/denominator; `ENGAGEMENT_DENOMINATOR_INVALID` |
| `PER_CONSISTENCY_V1` | Performance 20 | normalized per-item reach/view/high-intent ratios | median absolute deviation anchors: <=.10=100,.20=75,.35=50,.50=25,>=.75=0, linear rational interpolation | >=4 items, >=2 dates; `PERFORMANCE_SAMPLE_INSUFFICIENT` |
| `PER_RECENCY_SAMPLE_V1` | Performance 15 | compatible item dates/count | sample: 4=50,5–7=70,8–11=85,>=12=100; latest <=14d=100, <=30=80, <=60=60, <=90=40; score=min | >=4 items/2 dates; `RECENCY_SAMPLE_INSUFFICIENT` |
| `COMMERCIAL_AND_WORK_FIT` | globally N/A | prohibited donors | no evaluator; removed from denominator | `NOT_APPLICABLE_V1` |

Unknown Audience buckets remain in the all-observed denominator and therefore reduce evidence coverage, never become mismatch score. Duplicate normalized buckets with unequal values are CONFLICT. Multi-location targets use set union. Suppressed/missing rows are UNAVAILABLE. Arrays used as sets sort by canonical ID before hashing; authored Brief order uses `(displayOrder,id)`.

## 9. ApplicantAIMatchSemanticRubricV1

Each semantic evaluator receives only a versioned bounded JSON object: criterion ID, canonical Campaign/Brief/Brand/Offering statements (max 20 entries/4,000 chars), admitted Creator observations (max 24, 500 chars each), and opaque Evidence IDs. Untrusted text is delimited as data; instructions, URLs, markup and tool directives inside it have no authority. No raw provider payload, demographic proxy, private Brand history or chain-of-thought is admitted.

Candidate schema is strict/no additional properties:

```ts
{schemaVersion:"ApplicantAIMatchSemanticCandidateV1";
 criterionId: AllowedCriterionId; scoreAnchor:0|25|50|75|100|null;
 state:"AVAILABLE"|"UNAVAILABLE"|"CONFLICT";
 evidenceRefs:string[]; observationCodes:AllowedObservationCode[];
 reasonCodes:AllowedReasonCode[]}
```

Server finalizer checks criterion identity, allowed score, evidence ownership and cardinality, per-field sufficiency, no sensitive/proxy code, output size <=16 KiB, no unknown fields, and deterministic sorting/deduplication. Any violation becomes UNAVAILABLE/CONFLICT; it never partially trusts output. Provider-neutral DI uses a fail-closed unconfigured production adapter and deterministic fixture adapter. Persist only finalized fields, provider-neutral invocation metadata and evidence refs—never prompts, raw completion, hidden reasoning or chain-of-thought.

## 10. ApplicantAIMatchPerformanceNormalizationV1

Window is the donor's current 90-day content set, limited by its accepted latest-24 inventory. Partition by required canonical format and metric. Evaluation sample is latest up to 6 compatible items; baseline is preceding up to 12. Require >=2 evaluation and >=3 baseline values with denominator >0. Baseline is exact median. Each ratio is `evaluation/baseline`, winsorized to `[0.50,1.50]`; the sample median maps piecewise-linearly through `.50=0,.75=25,1.00=50,1.25=75,1.50=100`. Reach and Views combine equally when both available. High-intent metric is `(comments+saves+shares)/reach`; absent/zero reach is unavailable. All operations use integer rationals/basis points. No follower-count, global, industry or cross-Creator benchmark exists. Consistency uses MAD and cannot be high from one viral post.

## 11. Objective weights and arithmetic proof

Commercial removal leaves these applicable weights and exact normalized fractions:

| Objective adapter | Audience | Content | Brand | Performance | denominator |
|---|---:|---:|---:|---:|---:|
| AWARENESS / PULSE | 35 | 20 | 15 | 20 | 90 |
| TRUST / PROOF | 25 | 25 | 25 | 15 | 90 |
| ASSETS / PRODUCTION | 15 | 35 | 25 | 10 | 85 |
| ACTION / PUSH | 30 | 20 | 15 | 25 | 90 |

Use integer fractions throughout and `roundHalfUp(n/d)=floor((2n+d)/(2d))` once at dimension output, coverage output and final score. Dimension availability requires AVAILABLE applicable subweight >=50%. Overall coverage is `sum(objectiveWeight*dimensionCoverage)/sum(applicableObjectiveWeight)`. READY requires coverage >=60% and numeric Audience or Content. Overall score is over numeric available dimension weights only.

Worked fixtures:

- AWARENESS: dimension scores `80,70,60,50`; all coverage 100 => `(2800+1400+900+1000)/90=67.777... -> 68`, HIGH coverage 100.
- TRUST: `80,70,60,50` => `(2000+1750+1500+750)/90=66.666... -> 67`.
- ASSETS: same => `(1200+2450+1500+500)/85=66.470... -> 66`.
- ACTION: same => `(2400+1400+900+1250)/90=66.111... -> 66`.
- N/A removal: AWARENESS weights total 90, not 100; no replacement weight is invented.
- unavailable reduction: Audience subweights GEO35+AGE25 available =60%, Gender/Affinity unavailable; scores 80/60 => dimension `(2800+1500)/60=71.666... ->72`; unavailable inputs are not zero.
- 50% boundary: admitted subweight 50 is numeric; 49 is unavailable.
- 60% boundary: weighted coverage exactly `5400/90=60` is READY-eligible; `5399/90=59.988... ->60` is still evaluated against the unrounded rational and fails. Thresholds always compare exact rational values before display rounding.
- Audience-or-Content: Brand+Performance coverage 100 with both Audience/Content unavailable remains UNAVAILABLE.
- confidence: exact coverage `[60,70)` LOW, `[70,85)` MEDIUM, `[85,100]` HIGH; 69.999 is LOW, 70 MEDIUM, 84.999 MEDIUM, 85 HIGH.
- round-half-up: `66.5->67`, `66.499->66`; final score 0..100 is clamped only after validated inputs, never to hide invalid arithmetic.
- non-READY always has `score:null` and `confidence:null`.
- canonical set permutations and JSON key permutations produce identical JCS hashes; authored-order changes produce different hashes unless the field is declared unordered.

## 12. Strict contract family

All schemas reject unknown fields and are capped in size/count.

```ts
type RequestV1={schemaVersion:"ApplicantAIMatchRequestV1";requestIdentity:string;
 applicationId:string;snapshotId:string;snapshotVersion:"C03_APPLICATION_SNAPSHOT_V2";
 snapshotHash:string;applicationStatusVersion:number;requestedAt:string}
type ReadinessV1={schemaVersion:"ApplicantAIMatchDependencyReadinessV1";
 phase:"INSPECTING"|"WAITING"|"READY_TO_FREEZE"|"TERMINAL_INSUFFICIENT";
 deadlineAt:string;donors:{donorId:DonorId;state:"CURRENT"|"PROCESSING"|"TERMINAL_UNAVAILABLE"}[]}
type ManifestV1={schemaVersion:"ApplicantAIMatchInputManifestV1";manifestHash:string;
 application:{applicationId:string;snapshotId:string;snapshotHash:string;statusVersion:number};
 registryVersions:RegistryVersions;donors:FrozenDonorRef[];frozenAt:string}
type OutputV1={schemaVersion:"ApplicantAIMatchOutputV1";state:"READY"|"UNAVAILABLE";
 score:number|null;confidence:"LOW"|"MEDIUM"|"HIGH"|null;
 weightedEvidenceCoveragePercent:number;dimensions:DimensionV1[];
 reasons:ReasonV1[];limitations:LimitationV1[];manifestHash:string}
type ConsumerV1={schemaVersion:"ApplicantAIMatchConsumerV1";
 current:OutputV1|null;latestAttempt:{phase:"WAITING"|"CALCULATING"|"FAILED"|"CANCELLED";codes:string[]}|null;
 availableActions:("APPROVE"|"REJECT")[]}
```

Dimension/subcriterion records include stable ID, version, weight, state, score/null, exact coverage basis points, Evidence refs and bounded codes. No refresh action exists. GET is projection-only and cannot enqueue, inspect donors, invoke a model or mutate.

Bounded reason/limitation registry:

```text
MATCH_CALCULATED, STRONG_AUDIENCE_ALIGNMENT, STRONG_CONTENT_ALIGNMENT,
BRAND_EXPRESSION_ALIGNMENT, CREATOR_RELATIVE_PERFORMANCE_ALIGNMENT,
APPLICATION_SNAPSHOT_VERSION_UNSUPPORTED, APPLICATION_SNAPSHOT_INVALID,
OBJECTIVE_UNSUPPORTED, TARGET_CONTEXT_UNAVAILABLE, DONOR_CURRENT_UNAVAILABLE,
DONOR_PROCESSING_WAIT_EXPIRED, MATERIAL_EVIDENCE_INSUFFICIENT,
AUDIENCE_OR_CONTENT_REQUIRED, DIMENSION_SUPPORT_BELOW_50,
OVERALL_COVERAGE_BELOW_60, DONOR_MANIFEST_CONFLICT, EVIDENCE_OWNERSHIP_INVALID,
SEMANTIC_EVIDENCE_INSUFFICIENT, SEMANTIC_OUTPUT_REJECTED,
SENSITIVE_OR_PROXY_INPUT_REJECTED, RUNTIME_RETRY_EXHAUSTED,
APPLICATION_TERMINAL, STALE_APPLICATION_STATUS_VERSION,
VERIFIED_WORK_NOT_ADMITTED, RELEVANT_WORK_NOT_ADMITTED
```

No provider/OAuth/error cause may be interpolated into copy. Approved consumer copy maps codes to bounded statements such as “AI Match is being prepared,” “AI Match is ready,” “There wasn’t enough current evidence to calculate AI Match,” and “AI Match couldn’t be calculated.”

## 13. Frontend integration map

Canonical route is `/brand/uce/campaigns/:id`: `src/routes/app-routes.tsx` -> `pages/brand/uce/BrandUceCampaignDetailPage.tsx` -> `features/uce/campaign-page/CanonicalCampaignPage.tsx`. Applicants implementation is in `CampaignWorkspaceContent.tsx`, `CreatorCard.tsx`, `types.ts`, and `api/brand-uce-client.ts`, with responsive behavior in `features/uce/uce-responsive.css`.

P3 extends only the Applicants workspace. Card shows PROCESSING/READY/UNAVAILABLE label, numeric score only when READY, one bounded reason, and independent C03 actions. Applicant inspection uses the existing Aurora drawer/detail grammar for a four-dimension Decision Brief, evidence limitations and confidence. Mobile stacks/transforms without removing required truth; status uses text/icon, not color alone; controls remain keyboard-operable with visible focus; drawer traps/restores focus; processing uses Aurora Processing State without fake percentage; long content wraps. Discovery Match Potential is unchanged. No fourth workspace, Creator route, frontend calculation, score editing or refresh UI is permitted.

P3 also replaces permissive response casts with strict DTO parsing, corrects canonical identity fields, adds server `availableActions`, and sends `Idempotency-Key` for approve/reject.

## 14. Migration, implementation and rollback packets

### P1 — foundation and deterministic vertical slice

Purpose: V2 ApplicationSnapshot targeting; APPLICATION shared subject; request/readiness/manifest/current persistence; deterministic objective, Audience and arithmetic engines. Allowed: additive backend/schema/tests and authority checkpoint. Migrations: enum-only commit, subject/FK/check/current tables commit, snapshot enum/version/additive submit projection commit. Gates: unit, migration lint, fresh PostgreSQL migrate, tenant/substitution/immutability/CAS tests, build. Circuit breakers: cannot prove V2 snapshot transaction, tenant fence, or one-current CAS. Correction scope stays within foundation. Rollback disables enqueue and preserves immutable history.

### P2 — semantic evaluators and complete Match object

Purpose: Content, Brand/Offering and Performance plus strict model boundary and optional capability adapters. Allowed: backend adapters/processors/contracts/tests only. No live model call required. Gates: deterministic fixture provider, malformed/oversized/injection/sensitive rejection, evidence ownership, permutation/hash, fail-closed production adapter, full arithmetic. Circuit breaker: unbounded semantic judgment or donor lifecycle leakage.

### P3 — C03 orchestration/API and Applicants UI

Purpose: submission outbox/worker orchestration, read-only consumer GET, C03-owned availableActions, Applicants card/detail. Allowed: C03 integration without decision coupling, frontend files mapped above. Gates: GET zero execution, approve/reject during all Match states, terminal race, strict DTO, component/browser 390px/desktop, keyboard/focus/non-color cues. Circuit breaker: Match gates a decision or exposes to Creator.

### P4 — integrated acceptance and closeout

Purpose: fresh-db, concurrency, privacy, full fixtures, observability and immutable handoff. Gates: all `MATCH-01..32` plus adversarial cases, builds/lint, PostgreSQL, browser, secret/forbidden scans, exact ancestry, no live calls. Normal corrections may touch only accepted P1–P3 surfaces. No deployment or development merge without separate authority.

After Technical-SA P0 acceptance, P1–P4 can run as one autonomous finite execution with packet checkpoints and circuit breakers. P0 itself does not authorize it.

## 15. Fixture and acceptance matrix

Product `MATCH-01..13` and `MATCH-16..22` retain their original non-conflicting meanings. `MATCH-14` and `MATCH-15` retain identifiers but are superseded: accepted UNAVAILABLE/READY never re-evaluates; donor changes create zero execution. Technical fixtures:

| Fixture | Required result |
|---|---|
| MATCH-23 | processing material donor waits; no accepted current/generation |
| MATCH-24 | wait expiry freezes once and accepts truthful UNAVAILABLE if insufficient |
| MATCH-25 | terminal Application during wait/calc cancels and rejects late CAS |
| MATCH-26 | concurrent donor completions freeze one manifest/evaluation |
| MATCH-27 | duplicate initial request returns same execution/current |
| MATCH-28 | GET creates no execution or donor/model call |
| MATCH-29 | Work Preferences and Rate Card present but never queried |
| MATCH-30 | commercial mismatch-like facts cannot affect score/reasons |
| MATCH-31 | Commercial weight absent; four weights normalize exactly |
| MATCH-32 | donor lifecycle cause absent from manifest/output/UI |

Additional mandatory cases: cross-tenant Application/Creator/Evidence substitution rejected; stale snapshot hash/version rejected; V1 snapshot accepted UNAVAILABLE; malformed/oversized/unknown/sensitive/proxy semantic output rejected; deterministic-only readiness can succeed with semantic criteria unavailable; Approve/Reject available during PROCESSING/UNAVAILABLE subject to C03 authority; Marketplace score never copied; wrong objective mapping rejected; enum migration split; lease expiry replay remains one current; application terminal before request creates no subject execution.

## 16. Validation evidence and invariants

- Backend focused donor/runtime/C03 unit run: 17 files; 190 passed, 7 skipped, with two HTTP tests initially timing out under parallel load. Isolated retry with 15s timeout: 2 files/27 tests passed. No assertion failure remained.
- Backend `npm run build`: pass.
- Frontend `npm run build` (`tsc -b && vite build`): pass; existing chunk-size warning only.
- Backend schema SHA-256: `3500554259fd88874212a71ef2db068857279a09579dfcf9f9a03b8f1bc4a6ba`.
- Migration files: 107 including `migration_lock.toml`; deterministic sorted path+hash manifest SHA-256 `943877610d37a9b4f1ea86253552918c2905039fbeca36792aefd3fdebf52c8a`.
- No P0 migration was created. No live database, Graph, provider, OAuth or model call was made.

Security controls: exact tenant/subject/Evidence ownership before scoring; no secret/token/signed locator/raw media/raw payload; no other-Brand private history; no sensitive-trait inference or proxy features; bounded evidence excerpts; no chain-of-thought; provider-neutral metadata only; audit codes are bounded.

## 17. Technical-SA decisions requested

Accept or boundedly correct:

1. Portfolio backend/frontend tips as implementation bases.
2. additive C03 snapshot V2 and fail-closed V1 treatment.
3. APPLICATION shared subject and two-step enum migration.
4. 24-hour wait policy and retry schedule.
5. three candidate registries and exact rubric anchors.
6. Portfolio/C04 optional admission; default C04 not admitted.
7. Creator Audience/Creator Brand/Portfolio predecessor acceptance status for Match consumption.

No defined P0 circuit breaker remains. P1–P4 are `NOT_STARTED`.
