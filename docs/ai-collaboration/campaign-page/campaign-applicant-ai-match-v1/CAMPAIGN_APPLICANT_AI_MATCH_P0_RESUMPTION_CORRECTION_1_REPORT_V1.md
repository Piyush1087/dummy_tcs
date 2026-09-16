# Campaign Applicant AI Match P0 Resumption Correction 1 Report V1

Identifier: `CAMPAIGN_APPLICANT_AI_MATCH_P0_RESUMPTION_CORRECTION_1_EXTERNAL_LOCAL_CODEX_REPORT_V1`

## 1. Result

```text
RESULT = READY_FOR_APPLICANT_AI_MATCH_TECHNICAL_SA_FINAL_REVIEW
P0_EVIDENCE_READY = YES
C03_APPLICATION_SNAPSHOT_V2 = REQUIRED_PRE_P1_DEPENDENCY

P1 = NOT_STARTED_NOT_AUTHORIZED
P2 = NOT_STARTED
P3 = NOT_STARTED
P4 = NOT_STARTED
```

The five corrections required by `CAMPAIGN_APPLICANT_AI_MATCH_P0_RESUMPTION_TECHNICAL_REVIEW_V1` are complete at documentation/preflight level. This correction does not grant final acceptance and does not authorize implementation.

No P0 circuit breaker fired. The Campaign objective authority remains established. The missing Campaign targeting handoff and C03 ApplicationSnapshot V2 remain separately governed implementation dependencies before Applicant Match P1; their absence does not authorize Applicant Match to reinterpret raw Campaign persistence and does not make Application submission fail.

## 2. Immutable authority gate

- Repository: `Piyush1087/dummy_tcs`
- Branch: `program/campaign-applicant-ai-match-v1-authority`
- Input SHA: `f382dccb9a35e4fcd2dc4a91bf74a2ee911f5a6c`
- Input tree: `b374d1b1d1ba517537219c45f253d5007ac23324`
- Remote branch equality after fetch/prune: PASS
- Prior P0 resumption report ancestor: `ef244f9cb937b87c3334b3f85b61b5a312a59bc6`, tree `3bc583c2989eec129c371137423bd35527ed6b84`: PASS
- Task-owned authority, backend, and frontend audit worktrees were clean before documentation publication.

The complete launch package and every authority named by the correction runner were read from Git. The launch delta from the prior report adds the Technical-SA review and correction runner and appends the ledger; it does not change the frozen Product, Clarification, Technical Plan, prior P0, prior resumption report, accepted Campaign authority, backend, or frontend.

Accepted executable checkpoints remain:

| Surface | SHA | Tree | Disposition |
|---|---|---|---|
| Campaign backend | `3c1c523a178c452023add9745628ecff8a6e5e55` | `0138efccc1d83ad5c558571b971731e0c45499ec` | immutable accepted input |
| Campaign frontend | `0662cd6963859d9e46abe53910b174d4826adaa3` | `02243e16ed283810936fdaee0601981fe316688d` | immutable accepted input |
| Applicant Match prior P0 report | `ef244f9cb937b87c3334b3f85b61b5a312a59bc6` | `3bc583c2989eec129c371137423bd35527ed6b84` | preserved; corrected only by this descendant report |

## 3. Scope and accepted findings preserved

This correction preserves without reopening:

- the sole Campaign objective authority `UceCampaignStrategy.coreObjective`;
- canonical values `AWARENESS | TRUST | ASSETS | ACTION` and compatibility-only legacy values;
- `CampaignObjectiveHandoffV1` and the existing Campaign definition version/hash fence;
- the accepted backend/frontend convergence DAG;
- donor and shared Intelligence runtime reuse;
- the four scored dimensions, their weights, readiness arithmetic, coverage arithmetic, and creator-relative performance direction;
- C03 ApplicationSnapshot V2 as an external, separately accepted pre-P1 dependency;
- the prohibition on Applicant Match owning C03 schema, submission, event, or migration changes;
- P1 through P4 as unstarted and unauthorized.

Only the five Technical-SA corrections are resolved below.

## 4. C03 V2 complete objective handoff union

C03 must copy the entire Campaign-owned union. It must not require `AVAILABLE`, extract only `objective`, translate a legacy label, or recompute Campaign integrity.

```ts
type CanonicalCampaignObjective =
  | "AWARENESS"
  | "TRUST"
  | "ASSETS"
  | "ACTION";

type CampaignObjectiveHandoffV1 =
  | {
      availability: "AVAILABLE";
      objective: CanonicalCampaignObjective;
      contract: "CAMPAIGN_OBJECTIVE_V1";
      campaignDefinitionVersion: number;
      campaignDefinitionSnapshotRef: string;
      canonicalDefinitionHash: string;
    }
  | {
      availability: "UNAVAILABLE";
      reason:
        | "CANONICAL_OBJECTIVE_REQUIRED"
        | "LEGACY_OBJECTIVE_UNRESOLVED"
        | "CAMPAIGN_DEFINITION_INTEGRITY_INVALID";
    };
```

The executable owner is the accepted Campaign canonical-definition service. C03 accepts only a structurally valid instance returned by that owner and freezes it byte-for-byte after canonical JSON normalization. The three unavailable reasons remain distinct. They are not merged into a generic legacy reason and are not inferred by C03.

## 5. Campaign-owned targeting handoff

### 5.1 Exact contract

Campaign must publish this strict projection before C03 V2 is implemented:

```ts
type StructuredCampaignGeography = {
  scope: "LOCALITY" | "REGION" | "COUNTRY" | "GLOBAL";
  label: string;
  country_code: string | null;
  locality: string | null;
  region: string | null;
  radius_km: number | null;
  is_primary: boolean;
};

type CampaignTargetingHandoffV1 =
  | {
      availability: "AVAILABLE";
      targetingVersion: number;
      geography: {
        availability: "AVAILABLE";
        values: readonly StructuredCampaignGeography[];
      };
      age: {
        availability: "AVAILABLE";
        minAge: number;
        maxAge: number;
      };
      gender:
        | {
            availability: "AVAILABLE";
            value: "FEMALE" | "MALE";
          }
        | {
            availability: "NOT_APPLICABLE";
            value: null;
          };
      affinity: {
        availability: "UNAVAILABLE";
        ids: readonly [];
        reason: "NO_ACCEPTED_IMMUTABLE_AFFINITY_SOURCE";
      };
    }
  | {
      availability: "UNAVAILABLE";
      reason: "CAMPAIGN_TARGETING_INTEGRITY_INVALID";
      affinity: {
        availability: "UNAVAILABLE";
        ids: readonly [];
        reason: "NO_ACCEPTED_IMMUTABLE_AFFINITY_SOURCE";
      };
    };
```

Contract identifier: `CAMPAIGN_TARGETING_HANDOFF_V1`.

### 5.2 Ownership and validation

The accepted immutable persistence sources are:

| Criterion | Accepted source | Owner treatment |
|---|---|---|
| Geography | `UceCampaignTargeting.targetLocations` | Campaign validates the existing strict structured geography schema, including primary and GLOBAL exclusivity rules, then publishes typed values. |
| Age | `UceCampaignTargeting.minAge` and `maxAge` | Campaign validates finite integral bounds and `minAge <= maxAge`. |
| Gender | `UceCampaignTargeting.gender` | Campaign publishes `FEMALE`, `MALE`, or explicit `NOT_APPLICABLE`; it does not infer a value. |
| Affinity | none | Always `UNAVAILABLE`, `ids: []`; no recovery from wizard or canonical-definition JSON. |

Campaign owns parsing, range checks, enum checks, geography normalization, version integrity, and unavailable classification. Any malformed accepted source makes the whole targeting handoff `UNAVAILABLE/CAMPAIGN_TARGETING_INTEGRITY_INVALID`. C03 copies the returned union under its existing Campaign/targeting locks. It does not parse `targetLocations`, read wizard JSON, synthesize `affinityIds`, or downgrade malformed values to empty criteria.

The handoff is a projection of the single Campaign aggregate, not a second targeting authority. The current absence of this projection is an external dependency, not permission for Applicant Match or C03 to invent one.

## 6. Corrected C03 ApplicationSnapshot V2 contract

### 6.1 Snapshot shape

```ts
type ApplicationSnapshotV2 = {
  snapshotSchemaVersion: "APPLICATION_SNAPSHOT_V2";
  snapshotId: string;
  applicationId: string;
  creatorId: string;
  campaignId: string;
  brandId: string;
  submittedAt: string;
  applicationStatusAtSubmission: "SUBMITTED";
  applicationStatusVersionAtSubmission: number;
  campaignObjectiveHandoff: CampaignObjectiveHandoffV1;
  campaignTargetingHandoff: CampaignTargetingHandoffV1;
  creatorContext: ApplicationSnapshotV1["creatorContext"];
  campaignContext: ApplicationSnapshotV1["campaignContext"];
  snapshotHashAlgorithm: "SHA-256";
  snapshotHash: string;
};
```

V2 retains every V1 identity and admitted creator/Campaign context field. The two handoffs are additive and immutable. The hash is SHA-256 over UTF-8 RFC 8785/JCS canonical JSON of all fields except `snapshotHash`, including unavailable variants and reason codes. C03 stores the schema version and hash and rejects post-insert mutation with the existing immutable-snapshot guard pattern.

### 6.2 Nonblocking Application semantics

Application submission succeeds with any structurally valid Campaign-owned objective and targeting handoff variant, including either `UNAVAILABLE` variant. Match input availability is not an Application eligibility rule.

The existing C03 submission transaction remains authoritative:

1. authorize the creator and Campaign using existing C03 rules;
2. lock the Campaign/targeting rows as C03 already does;
3. obtain the two Campaign-owned handoff unions;
4. create Application and immutable V2 snapshot;
5. write the existing `application.submitted` event/outbox and existing notifications in the same transaction;
6. commit;
7. only after commit, the existing event consumer may idempotently create-or-return the Applicant Match request keyed by the immutable snapshot identity/hash.

No donor read, semantic call, score calculation, or Match terminal write belongs in the submission transaction. A rollback emits no event and creates no Match request.

Only existing C03 hard failures may fail submission: authorization/lifecycle failure, missing required aggregate, lock/integrity failure that prevents C03 from obtaining a structurally valid owner-produced union, or failure to atomically persist the Application/snapshot/outbox. An owner-produced `UNAVAILABLE` handoff is valid data and is not such a failure.

### 6.3 Exact availability consequences

| Condition | Application result | Match result |
|---|---|---|
| C03 hard failure before commit | submission fails/rolls back under existing C03 semantics | no request and no Match row |
| Objective handoff `UNAVAILABLE` | submission succeeds | create accepted current terminal `UNAVAILABLE`, `score = null`, preserve the exact Campaign reason, perform no donor wait or semantic scoring |
| Targeting handoff `UNAVAILABLE` | submission succeeds | every target-dependent subcriterion is unavailable; other dimensions may still satisfy READY rules |
| Targeting handoff `AVAILABLE`, affinity unavailable | submission succeeds | affinity subcriterion unavailable only; geography/age/gender remain independently usable |
| Individual donor/subcriterion unavailable | unaffected | coverage/readiness arithmetic only; absence is not zero |
| Match processor technical failure without current | unaffected | latest attempt is failed; no current result is published |

`UNAVAILABLE` Match is a terminal accepted current result with null score and bounded limitations. `FAILED_NO_CURRENT` is runtime history, not a result and not a substitute for unavailable evidence.

### 6.4 Request boundary

```ts
type ApplicantAIMatchRequestV1 = {
  schemaVersion: "APPLICANT_AI_MATCH_REQUEST_V1";
  requestIdentity: string; // applicationId + snapshotHash + registryVersion
  applicationId: string;
  snapshotId: string;
  snapshotSchemaVersion: "APPLICATION_SNAPSHOT_V2";
  snapshotHash: string;
  applicationStatusVersionAtSubmission: number;
  submittedEventId: string;
  requestedAt: string;
};
```

Processing reads only the referenced immutable V2 snapshot plus versioned donor outputs. It never re-reads mutable Campaign targeting/objective fields to alter the frozen evaluation.

## 7. Semantic scoring contract family

### 7.1 Registry and common envelope

Registry identifier: `APPLICANT_AI_MATCH_SEMANTIC_SCORING_REGISTRY_V1`, version `1.0.0`.

All semantic candidates must validate against:

```ts
type SemanticCriterionCandidateV1 = {
  schemaVersion: "SEMANTIC_CRITERION_CANDIDATE_V1";
  registryVersion: "1.0.0";
  criterionId:
    | "CNT_BRIEF_ALIGN_V1"
    | "CNT_CONSISTENCY_V1"
    | "CNT_VERIFIED_WORK_V1"
    | "BRD_CATEGORY_V1"
    | "BRD_POSITIONING_V1"
    | "BRD_EXPRESSION_V1"
    | "BRD_RELEVANT_WORK_V1";
  state: "AVAILABLE" | "UNAVAILABLE" | "CONFLICT";
  scoreAnchor: 0 | 25 | 50 | 75 | 100 | null;
  evidenceRefs: readonly string[];
  observationCodes: readonly string[];
  reasonCodes: readonly string[];
  itemClassifications?: readonly {
    itemRef: string;
    classification:
      | "COMPATIBLE"
      | "PARTIAL"
      | "INCOMPATIBLE"
      | "UNCLASSIFIABLE";
    evidenceRefs: readonly string[];
  }[];
};
```

Common bounded inputs:

- at most 20 Campaign/Brief/Brand/Offering statements, each at most 500 Unicode code points and 4,000 total;
- at most 12 creator observations per criterion, each at most 500 code points;
- at most 8 verified-work records per work criterion;
- at most 32 opaque evidence references, each at most 128 ASCII characters;
- NFKC normalization and whitespace canonicalization before semantic evaluation;
- only immutable, authorization-admitted references; no raw access tokens, handles used as identity proxies, sensitive traits, inferred protected classes, or mutable URLs;
- maximum validated candidate size 16 KiB.

Independent evidence means different immutable source items, not duplicated extracts or multiple labels from one item. A self-declared niche/style/positioning statement is one source and can never produce a score above 50 without repeated independent behavioral/work evidence. Every score above 50 requires at least two independent creator evidence items. Missing evidence never becomes score 0. A criterion with insufficient evidence is `UNAVAILABLE`; irreconcilable affirmative evidence is `CONFLICT`; both have `scoreAnchor = null`.

### 7.2 Criterion-specific anchors

The following anchors are exact. “No contradiction” means no admitted affirmative item classified incompatible. Date diversity means immutable items from at least two distinct publication/work dates.

| Criterion | Minimum for `AVAILABLE` | 0 | 25 | 50 | 75 | 100 | `CONFLICT` |
|---|---|---|---|---|---|---|---|
| `CNT_BRIEF_ALIGN_V1` | 2 classifiable creator-content items and 2 evidence refs | at least 2 items directly contradict explicit Brief requirements, with no support | at least 2 incompatibilities and at most 1 weak/partial support | mixed, indirect, or adjacent alignment with no dominant conclusion | at least 2 independent items directly align to one explicit requirement, no contradiction | at least 4 items across 2 dates align to at least 2 distinct requirements, no contradiction | at least 2 direct-support and 2 direct-contradiction items, each side at least 40% of classifiable items, neither side over 60% |
| `CNT_CONSISTENCY_V1` | 4 classifiable content items across 2 dates | deterministic compatibility ratio `<= 0.20` | ratio `> 0.20` and `<= 0.40` | ratio `> 0.40` and `<= 0.60` | ratio `> 0.60` and `<= 0.80` | ratio `> 0.80`, at least 4 compatible items, no incompatible item | at least 2 compatible and 2 incompatible items and ratio in `[0.40, 0.60]`; conflict overrides the 50 bucket |
| `CNT_VERIFIED_WORK_V1` | 1 C04-admitted verified-work item | all admitted work directly contradicts required observable format/content and none is relevant | work is predominantly tangential/incompatible with one weak partial link | one verified work is generically or partially relevant; single-item evidence is capped here | at least 2 independent verified works directly support one major requirement, no contradiction | at least 3 independent works across 2 dates support at least 2 distinct requirements, no contradiction | at least 1 directly relevant and 1 directly incompatible verified work with no accepted precedence rule |
| `BRD_CATEGORY_V1` | 2 source refs spanning Campaign category and creator declaration/content | at least 2 content items are directly incompatible with the explicit Campaign category, no support | predominantly tangential category evidence with at least 2 weak/incompatible items | adjacent/mixed category, or exact self-declaration without repeated behavioral evidence | at least 2 independent content/work items directly match Campaign category, no contradiction | at least 4 items across 2 dates match both Campaign category and Offering context, no contradiction | creator declaration and at least 2 behavioral items affirm materially opposing categories without accepted precedence |
| `BRD_POSITIONING_V1` | 2 source refs spanning Campaign positioning and creator declaration/content | at least 2 behavioral items directly oppose a stated positioning/value requirement | predominantly inconsistent positioning evidence | adjacent/mixed positioning, or declaration-only claimed alignment | at least 2 independent behavioral/work items align to one positioning facet, no contradiction | at least 4 items across 2 dates align to at least 2 positioning facets, no contradiction | at least 2 direct-support and 2 direct-opposition items, neither side over 60% |
| `BRD_EXPRESSION_V1` | 2 classifiable items against explicit voice/personality/visual requirements | at least 2 items directly contradict required expression, no support | predominantly incompatible expression | adjacent/mixed expression or declaration-only claimed fit | at least 2 independent items directly align to one expression facet, no contradiction | at least 4 items across 2 dates align to at least 2 expression facets, no contradiction | at least 2 direct-alignment and 2 direct-contradiction items, neither side over 60% |
| `BRD_RELEVANT_WORK_V1` | 1 C04-admitted verified-work item plus explicit Brand/Offering context | all admitted work directly contradicts observable current Brand/Offering requirements; competitor identity is ignored | predominantly tangential/incompatible observable work | one work is adjacent/partially relevant; single-item evidence is capped here | at least 2 independent works directly support one current Brand/Offering requirement, no contradiction | at least 3 independent works across 2 dates support at least 2 current requirements, no contradiction | at least 1 directly relevant and 1 directly incompatible work with no accepted precedence rule |

`CNT_CONSISTENCY_V1` is the required hybrid:

1. semantic evaluation emits exactly one classification for each admitted item;
2. schema validation rejects missing, duplicate, foreign, or extra item refs;
3. deterministic finalization maps `COMPATIBLE = 1`, `PARTIAL = 0.5`, `INCOMPATIBLE = 0`, excludes `UNCLASSIFIABLE`, and computes `ratio = sum / classifiableCount` using integer halves;
4. the conflict rule is evaluated first; otherwise the fixed interval table selects the anchor;
5. input item order and candidate array order cannot change the result.

### 7.3 Criterion reason codes and unavailable rules

Each criterion accepts only its bounded codes:

| Criterion | Unavailable code | Conflict code | Positive/limitation observation codes |
|---|---|---|---|
| Brief alignment | `BRIEF_ALIGNMENT_EVIDENCE_INSUFFICIENT` | `BRIEF_ALIGNMENT_CONFLICT` | `BRIEF_DIRECT_ALIGNMENT`, `BRIEF_PARTIAL_ALIGNMENT`, `BRIEF_DIRECT_CONTRADICTION` |
| Consistency | `CREATIVE_SAMPLE_INSUFFICIENT` | `CREATIVE_CLASSIFICATION_CONFLICT` | `CREATIVE_COMPATIBLE`, `CREATIVE_PARTIAL`, `CREATIVE_INCOMPATIBLE` |
| Verified work | `VERIFIED_WORK_EVIDENCE_INSUFFICIENT` | `VERIFIED_WORK_CONFLICT` | `WORK_DIRECT_RELEVANCE`, `WORK_PARTIAL_RELEVANCE`, `WORK_DIRECT_INCOMPATIBILITY` |
| Category | `CATEGORY_EVIDENCE_INSUFFICIENT` | `CATEGORY_EVIDENCE_CONFLICT` | `CATEGORY_DIRECT_MATCH`, `CATEGORY_ADJACENT`, `CATEGORY_DIRECT_INCOMPATIBILITY`, `SELF_DECLARATION_ONLY` |
| Positioning | `POSITIONING_EVIDENCE_INSUFFICIENT` | `POSITIONING_EVIDENCE_CONFLICT` | `POSITIONING_DIRECT_MATCH`, `POSITIONING_ADJACENT`, `POSITIONING_DIRECT_OPPOSITION`, `SELF_DECLARATION_ONLY` |
| Expression | `EXPRESSION_EVIDENCE_INSUFFICIENT` | `EXPRESSION_EVIDENCE_CONFLICT` | `EXPRESSION_DIRECT_MATCH`, `EXPRESSION_ADJACENT`, `EXPRESSION_DIRECT_CONTRADICTION`, `SELF_DECLARATION_ONLY` |
| Relevant work | `BRAND_WORK_EVIDENCE_INSUFFICIENT` | `BRAND_WORK_CONFLICT` | `BRAND_WORK_DIRECT_RELEVANCE`, `BRAND_WORK_PARTIAL_RELEVANCE`, `BRAND_WORK_DIRECT_INCOMPATIBILITY` |

The finalizer, not the semantic provider, owns the persisted state/score. It verifies input ownership, evidence cardinality, independence, date diversity, self-declaration cap, conflict precedence, anchor arithmetic, reason-code allowlists, size, and sensitive/proxy exclusions. Invalid output is a validation failure and cannot become current.

The finalizer canonicalizes by criterion ID, then evidence ref, then observation/reason code; it deduplicates exact refs and rejects contradictory duplicate classifications. Provider prose is discarded. Only validated codes, anchors, and immutable refs are persisted.

Permutation tests must shuffle all input and output arrays and prove byte-identical finalized JSON and score. Boundary tests cover every anchor interval, minimum count, self-declaration cap, conflict override, duplicated reference, foreign reference, excessive size, and unavailable-not-zero rule.

## 8. Deterministic explanation selection

Explanation contract: `APPLICANT_AI_MATCH_EXPLANATION_SELECTION_V1`, version `1.0.0`.

Only finalized criteria enter the candidate pool. Approved UI copy is selected locally from reason/observation codes; semantic prose is never shown or stored.

For criterion `c`:

```text
baseWeight(c) = dimensionWeightBasisPoints * criterionWeightBasisPoints
strengthImpact(c) = baseWeight(c) * (scoreAnchor - 50)
areaImpact(c) = baseWeight(c) * (50 - scoreAnchor)
unknownImpact(c) = baseWeight(c)
```

Selection is exact:

- Strength candidate: `AVAILABLE` and score 75 or 100, with affirmative supporting evidence.
- Area candidate: `AVAILABLE` and score 0 or 25, with affirmative incompatibility evidence. Missing, unavailable, unclassifiable, or conflicting evidence is never an Area.
- Unknown candidate: `UNAVAILABLE` or `CONFLICT`.
- Strength sort: descending `strengthImpact`, descending score, canonical dimension order `CONTENT, BRAND, AUDIENCE, PERFORMANCE`, then criterion ID.
- Area sort: descending `areaImpact`, ascending score, canonical dimension order, then criterion ID.
- Unknown sort: descending `unknownImpact`, `CONFLICT` before `UNAVAILABLE`, canonical dimension order, then criterion ID.
- For each list, choose the first candidate; choose the next candidate from a different dimension if one exists; otherwise choose the next sorted candidate. Stop at two.
- Duplicate criterion IDs or duplicate evidence refs within one explanation list are rejected.

Output is exactly zero to two Strengths, zero to two Areas, and zero to two Unknowns/Limitations. Tie-breaking is stable and independent of provider/input order. Tests must prove missing evidence appears only in Unknowns, conflicts never appear as Areas, affirmative low anchors may appear as Areas, and permutations produce byte-identical output.

Worked fixtures:

- Consistency classifications `COMPATIBLE, COMPATIBLE, PARTIAL, INCOMPATIBLE` produce exact half-unit ratio `5/8 = 0.625`, hence anchor 75. Three tested permutations all produced `5/8` and 75.
- `COMPATIBLE, COMPATIBLE, INCOMPATIBLE, INCOMPATIBLE` produces `4/8 = 0.5`, but the two-versus-two conflict rule runs first, so the final state is `CONFLICT`, score null—not 50.
- For AWARENESS, a Brand Category score 100 has strength impact `15 * 35 * 50 = 26,250`; a Content Brief score 75 has `20 * 35 * 25 = 17,500`. Category sorts first and Brief second. Reversing the candidate input array does not change that order.
- For AWARENESS, a Brand Expression score 0 has area impact `15 * 25 * 50 = 18,750`; a Content Verified Work score 25 has `20 * 15 * 25 = 7,500`. Expression sorts first. If either is unavailable rather than affirmatively low, it leaves the Area pool and is considered only for Unknowns.
- An unavailable Audience Geography has unknown impact `35 * 35 = 1,225`; unavailable Content Verified Work has `20 * 15 = 300`. The Audience item sorts first and the Content item supplies the different-dimension second selection. Input permutation cannot change the pair.

## 9. Versioned dependency wait policy

Policy identifier: `APPLICANT_AI_MATCH_DEPENDENCY_WAIT_POLICY_V1`, semantic version `1.0.0`.

### 9.1 Horizon and boundary

- Origin: immutable `ApplicationSnapshotV2.submittedAt`, not request creation or first worker claim.
- Deadline: `deadlineAt = submittedAt + 24 hours` using UTC instants.
- Waiting interval: half-open `[submittedAt, deadlineAt)`.
- At `now >= deadlineAt`, waiting is forbidden. One final terminal inspection runs and atomically publishes READY/PARTIAL/UNAVAILABLE according to the accepted coverage rules, or records `FAILED_NO_CURRENT` for a technical failure.
- Late start at or after the deadline performs exactly that one terminal inspection. It does not replay missed polls.

### 9.2 Dependency inspection schedule and jitter

Base delays after an insufficient inspection are exactly:

```text
15s, 30s, 60s, 120s, then 300s repeatedly
```

For inspection ordinal `n`, compute:

```text
seedBytes = SHA-256(
  UTF8(requestIdentity + "\u0000" + n + "\u0000" +
       "APPLICANT_AI_MATCH_DEPENDENCY_WAIT_POLICY_V1")
)
seed = unsigned big-endian uint64(seedBytes[0..7])
jitterPercent = (seed mod 21) - 10        // integer -10 through +10
jitteredMs = roundHalfUp(baseMs * (100 + jitterPercent) / 100)
nextEligibleAt = min(now + max(1000, jitteredMs), deadlineAt)
```

The jitter is deterministic per request and ordinal, bounded to +/-10%, and cannot schedule after the deadline. Inspection ordinal starts at zero for the initial inspection; delay index uses the ordinal of the just-completed insufficient inspection.

### 9.3 Event-first wake-up and one outstanding retry

The immutable dependency manifest admits at most eight donor identities. Each identity names the expected subject, donor contract/version, source identity/hash, and acceptable terminal/current state.

- A donor current/terminal event may wake a waiting request only when its identity matches an admitted manifest entry.
- At most one wake is accepted per admitted donor transition. Duplicate events are idempotent.
- Under row lock, the event consumer compares `requestIdentity`, `manifestVersion`, `waitGeneration`, and expected attempt count. A successful CAS increments `waitGeneration`, changes the shared processor execution from `WAITING_FOR_DEPENDENCY` to `QUEUED`, and sets `eligibleAt = databaseNow`.
- The CAS supersedes the pending time-based retry; there is never a second retry row or an external scheduler entry.
- A stale timer/event observes the changed generation/state and performs no work.
- A readiness-satisfying inspection or terminal deadline inspection clears `eligibleAt` and atomically freezes the accepted current manifest/result under the live lease.

### 9.4 Technical retries

Technical failure retries are distinct from dependency insufficiency:

- initial technical attempt plus at most five technical retries, six technical attempts total;
- retry delays exactly `30s, 120s, 600s, 1800s, 7200s` after technical failure ordinals 1 through 5;
- each retry is `min(now + delay, deadlineAt)` and is skipped if `now >= deadlineAt`;
- the sixth technical failure, non-retryable validation/configuration failure, or a retry whose eligibility would not precede the deadline records terminal `FAILED_NO_CURRENT` unless an accepted current result already exists;
- lease loss uses the existing shared reclaimer and counts as a technical attempt; stale completion cannot publish current.

Dependency-insufficient inspections do not consume the five technical-retry allowance. The policy manifest stores independent `inspectionOrdinal` and `technicalFailureCount` counters and updates them under the same row lock/lease fence.

### 9.5 Shared runtime reuse and required additive extension

The accepted runtime already proves trigger idempotency, one processor identity, `eligibleAt`, `WAITING_FOR_DEPENDENCY`, event resume by expected attempt count, `FOR UPDATE SKIP LOCKED`, leases/heartbeats, stale-completion rejection, attempt history, and completion/failure fencing.

P1 must add subject `APPLICATION` and its contracts/adapters to that runtime. It must not introduce an Applicant Match scheduler or parallel execution ledger. The present owner-scoped finalization path makes every failure terminal; therefore P1 must additively route APPLICATION through shared retry/dependency dispositions (or generalize owner-scoped finalization to the already proven shared semantics). Treating the current owner-scoped path as sufficient is forbidden.

The processor `maxAttempts` for this policy is 338: maximum 325 scheduled inspections, eight admitted donor-transition wake inspections, and five technical retry attempts beyond displaced failed claims. Counters and deadline remain the authoritative caps even if a claim is reclaimed.

### 9.6 Load proof

With -10% jitter, the first four minimum delays total 202.5 seconds and the repeated delay is 270 seconds. Before the 24-hour boundary there can be at most:

```text
1 initial + 4 ramp inspections + 319 repeated inspections
+ 1 deadline inspection = 325 scheduled inspections/request
```

At most eight distinct admitted donor transitions can advance an inspection, so event-first wake-ups produce at most eight additional inspections. Technical retries add at most five. The absolute policy cap is therefore 338 worker claims/request over 24 hours, while the poll-only steady-state is approximately one inspection per five minutes. Duplicate/out-of-manifest events add zero claims.

### 9.7 Current-result and read behavior

- Create-or-return POST with an identical request identity returns the existing execution/current result and schedules zero work.
- GET is read-only and schedules zero work.
- Once an accepted current result exists, late events, retries, GETs, and replayed POSTs schedule zero work.
- Current publication uses the existing one-current/CAS fence and only occurs in the same transaction that validates the live lease and freezes the consumed dependency/evidence manifest.
- If a prior current exists, later technical failure cannot erase it; this one-evaluation product path does not automatically supersede the immutable initial result.

Required time-controlled tests cover exact-deadline, one millisecond before/after, late start, every ramp transition, jitter endpoints, duplicate events, event/timer race, current/event race, lease expiry, retry exhaustion, max-load count, and zero-work GET/post-current behavior.

## 10. Readiness and arithmetic unchanged

The correction does not change the accepted Product arithmetic:

- scored dimensions: Content, Brand, Audience, Performance only;
- global Commercial and Work are not applicable and do not dilute the denominator;
- unavailable criteria are removed from the available denominator, never converted to zero;
- READY requires at least 60% total scored coverage and at least one of Audience or Content available;
- otherwise the accepted terminal classification and limitations apply;
- objective handoff unavailable short-circuits to terminal Match `UNAVAILABLE` with null score before donor waiting;
- targeting handoff unavailable affects target-dependent criteria/coverage only and does not itself prohibit READY.

All integer/basis-point weighting, half-up rounding, score bounds, and one-evaluation semantics from the prior P0 report remain authoritative.

## 11. Finite implementation sequence

No step below is authorized by this report; it is the corrected finite order for later authority.

1. Applicant Match Technical-SA and Parent Program final P0 review of this correction.
2. Separate Campaign authority implements/tests/publishes `CampaignTargetingHandoffV1` as a descendant of accepted Campaign backend `3c1c523...`.
3. Separate C03 authority implements/tests/publishes ApplicationSnapshot V2, copying both complete handoff unions and preserving nonblocking submission.
4. Parent Product, Campaign, C03, Security, and Technical-SA accept the converged C03 backend checkpoint. Any frontend checkpoint is accepted separately if changed.
5. Applicant Match P1 begins only from that accepted descendant: schemas/migrations, APPLICATION shared-runtime arm, strict scoring registry/finalizers, wait policy, manifests, authorization/tenant fences, and API contracts.
6. P1 publishes immutable checkpoint and evidence; P2 scoring evaluation begins only after acceptance.
7. P2, P3 Applicants integration, and P4 hardening proceed as separate finite gates.

P1 may not absorb steps 2 or 3. C03 may not implement semantic scoring. Campaign may not own Match state.

## 12. Required verification matrix for later implementation

The later implementations must prove:

- all objective available/unavailable variants snapshot exactly;
- targeting available/unavailable, malformed geography, age, gender, and affinity-always-unavailable cases;
- Application succeeds for each structurally valid unavailable handoff;
- no Match request on rolled-back submission;
- objective unavailable publishes terminal null-score Match without donor work;
- target unavailable affects only dependent subcriteria;
- cross-tenant/unauthorized snapshot, donor, result, and Applicants reads fail closed;
- immutable snapshot/hash/version and status-version fences;
- each semantic anchor and threshold; self-declaration cap; conflict precedence; missing-not-zero; permutation invariance;
- deterministic maximum-two Strengths/Areas/Unknowns selection;
- exact deadline/jitter/retry/event/CAS/load policy;
- no provider prose persisted and no sensitive/proxy input admitted;
- one current result, stale lease/CAS rejection, immutable consumed manifest, idempotent replay;
- frontend Applicants desktop/tablet/mobile states only after P3 authority.

## 13. Documentation-only execution evidence

Read-only source inspection at the accepted backend checkpoint verified:

- Campaign canonical objective union and exact unavailable reasons in the canonical-definition service;
- strict target geography schema and Campaign targeting persistence fields;
- no accepted immutable affinity persistence source;
- C03 locks Campaign/targeting during submit and currently writes only ApplicationSnapshot V1;
- the submission transaction creates Application/snapshot/event/outbox boundaries that V2 must preserve;
- shared Intelligence execution supports leases, heartbeats, `eligibleAt`, dependency waiting/wake, expected-attempt CAS, retry attempts, stale-lease rejection, and idempotent create-or-return;
- the current owner-scoped finalizer is terminal on failure, producing the explicit P1 extension requirement above.

No backend/frontend tests were rerun because this correction changes no executable source and the accepted checkpoint/test evidence is preserved. Documentation/static/Git verification is the proportional verification for this bounded correction.

## 14. Circuit-breaker disposition

| Circuit breaker | Disposition |
|---|---|
| canonical Campaign objective unavailable | cleared by accepted Campaign authority |
| dual/lossy objective authority | not observed |
| full objective handoff unavailable to C03 candidate | corrected: complete union frozen |
| Match availability becomes Application gate | corrected: explicitly prohibited |
| immutable target source absent | targeting handoff required; affinity explicitly unavailable, no invention |
| semantic anchors underdefined | corrected by versioned criterion registry and exact anchors |
| explanation selection nondeterministic | corrected by exact candidate/sort/diversity rules |
| wait deadline/jitter/retries/load underdefined | corrected by `APPLICANT_AI_MATCH_DEPENDENCY_WAIT_POLICY_V1` |
| parallel scheduler/runtime proposed | prohibited; shared-runtime additive extension required |
| C03 V2 missing | external pre-P1 dependency, not implemented here |

If Campaign cannot publish the strict targeting union from the accepted sources, or C03 cannot persist both complete unions without changing existing Application eligibility/lifecycle semantics, the applicable implementation authority must stop. Applicant Match may not work around either failure.

## 15. Scope attestations

```text
BACKEND_CHANGED = NO
FRONTEND_CHANGED = NO
NEW_MIGRATIONS = NONE
LIVE_GRAPH_CALLS = NONE
LIVE_MODEL_CALLS = NONE
PRODUCTION_DATA_ACCESSED = NO
DEVELOPMENT_MERGE = NOT_PERFORMED
DEPLOYMENT = NOT_PERFORMED
```

C03 source, Campaign source, backend source, frontend source, migrations, providers, and production data were not changed or invoked. Applicant Match P1-P4 were not started.

## 16. Review boundary

This report is ready only for:

`PARENT_PROGRAM_ORCHESTRATOR_AND_APPLICANT_MATCH_TECHNICAL_SA_FINAL_P0_REVIEW_ONLY`

It does not authorize the Campaign targeting handoff, C03 V2, Applicant Match P1, a merge, or deployment. Final P0 acceptance must explicitly accept this correction and then authorize the separately governed Campaign/C03 dependency sequence.
