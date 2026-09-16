# Campaign Applicant AI Match — P0 Resumption Technical Review V1

Identifier: `CAMPAIGN_APPLICANT_AI_MATCH_P0_RESUMPTION_TECHNICAL_REVIEW_V1`

## 1. Disposition

```text
P0_RESUMPTION_REPORT = ACCEPTABLE_WITH_CORRECTION
P0_FINAL_ACCEPTANCE = NOT_YET_GRANTED

CAMPAIGN_OBJECTIVE_UNBLOCK = ACCEPTED
AUTHORITY_AND_CONVERGENCE = ACCEPTED
DONOR_AND_SHARED_RUNTIME_REUSE = ACCEPTED
IMPLEMENTATION_BASE_SEQUENCE = ACCEPTED

C03_V2_CONTRACT = CORRECTION_REQUIRED
SEMANTIC_SCORING_REGISTRY = CORRECTION_REQUIRED
DEPENDENCY_WAIT_POLICY = ACCEPTABLE_WITH_VERSIONING_COMPLETION

P1 = NOT_AUTHORIZED
P2 = NOT_AUTHORIZED
P3 = NOT_AUTHORIZED
P4 = NOT_AUTHORIZED
```

The report correctly clears the Campaign-objective circuit breaker and correctly keeps C03 ApplicationSnapshot V2 outside Applicant Match ownership. One bounded documentation-only correction is required before P0 acceptance.

## 2. Accepted P0 findings

The following are technically accepted and need only be carried forward unchanged unless the correction discovers contradictory repository evidence:

- the exact Campaign authority/backend/frontend checkpoints and ancestry;
- `UceCampaignStrategy.coreObjective` as the sole objective authority;
- exact canonical values `AWARENESS | TRUST | ASSETS | ACTION`;
- no legacy objective mapping;
- complete Campaign-owned `CampaignObjectiveHandoffV1` projection;
- current Campaign backend `3c1c523a178c452023add9745628ecff8a6e5e55` and frontend `0662cd6963859d9e46abe53910b174d4826adaa3` as pre-C03 convergence candidates;
- actual Applicant Match P1 backend base must be a future accepted descendant containing C03 V2;
- donor classifications and prohibited donor/input list from the P0 report;
- additive `APPLICATION` shared Intelligence subject with exact ownership fences;
- reuse of shared execution, attempt, lease, retry, manifest, generation, current and CAS primitives;
- no second scheduler, mutable score column, re-evaluation or refresh;
- four scored dimensions and objective-weight normalization;
- deterministic arithmetic, coverage thresholds and creator-relative performance direction;
- Applicants-only, Brand-only, nonblocking consumer location.

## 3. Correction A — preserve the complete handoff union

The report's proposed C03 V2 type narrows `objectiveHandoff` to `AVAILABLE`. That is not the complete accepted Campaign handoff.

The accepted Campaign-owned type is a union:

```ts
type CampaignObjectiveHandoffV1 =
  | {
      status: "AVAILABLE";
      objective: "AWARENESS" | "TRUST" | "ASSETS" | "ACTION";
      objectiveContract: "CAMPAIGN_OBJECTIVE_V1";
      campaignDefinition: {
        version: string;
        snapshotRef: string;
        hash: `sha256:${string}`;
      };
    }
  | {
      status: "UNAVAILABLE";
      reason:
        | "CANONICAL_OBJECTIVE_REQUIRED"
        | "LEGACY_OBJECTIVE_UNRESOLVED"
        | "CAMPAIGN_DEFINITION_INTEGRITY_INVALID";
    };
```

C03 V2 must freeze this complete union exactly. It must not locally collapse or reinterpret the reason.

## 4. Correction B — Match readiness must not block Application submission

Current C03 creates the Application, immutable snapshot, submit event, command receipt/outbox state and notification work in one transaction. Applicant Match is nonblocking decision support.

Therefore:

```text
MATCH CONTEXT UNAVAILABLE
!=
APPLICATION SUBMISSION FAILURE
```

C03 V2 design must preserve successful Application submission whenever existing C03 opportunity/Application rules authorize it, even when:

- objective handoff is unavailable;
- one or more target criteria are unavailable;
- Campaign target projection detects Match-specific integrity insufficiency;
- Applicant Match cannot produce a numeric score.

The snapshot must preserve truthful immutable availability rather than fall back to mutable reconstruction or fail the Application solely for Match.

Required behavior:

```text
objectiveHandoff AVAILABLE
→ normal dependency-readiness path

objectiveHandoff UNAVAILABLE
→ one initial Match request may terminally publish UNAVAILABLE immediately
→ score = null
→ no donor waiting is required
→ C03 Application remains valid and decision-capable

target criterion unavailable
→ freeze bounded unavailable target state
→ affected Match subcriteria become UNAVAILABLE
→ remaining dimensions may still satisfy readiness
```

Only failures that already violate C03/Campaign opportunity authority, tenant identity, snapshot identity/immutability or the atomic submission transaction may fail Application submission. Match-specific scoring availability must not create a new eligibility gate.

## 5. Correction C — strict Campaign target handoff

Do not make C03 reinterpret raw Campaign persistence.

The separately governed dependency packet must expose one Campaign-owned strict target handoff at the existing application-read seam:

```ts
type CampaignTargetingHandoffV1 =
  | {
      status: "AVAILABLE";
      targetingVersion: number;
      geography: {
        state: "AVAILABLE";
        values: StructuredCampaignGeography[];
      };
      age: { state: "AVAILABLE"; min: number; max: number };
      gender:
        | { state: "AVAILABLE"; value: "FEMALE" | "MALE" }
        | { state: "NOT_APPLICABLE"; value: null };
      affinity: { state: "UNAVAILABLE"; ids: [] };
    }
  | {
      status: "UNAVAILABLE";
      reason: "CAMPAIGN_TARGETING_INTEGRITY_INVALID";
      affinity: { state: "UNAVAILABLE"; ids: [] };
    };
```

The exact final shape may be boundedly corrected if current types require it, but these invariants are mandatory:

- Campaign owns parsing and integrity semantics;
- C03 copies the handoff transactionally while current locks are held;
- malformed targeting becomes immutable unavailable Match context, not guessed values;
- affinity remains unavailable/empty;
- no canonical-definition JSON recovery becomes a new affinity persistence source;
- Application submission is not rejected solely because Match target context is unavailable.

## 6. Correction D — complete semantic scoring anchors

The deterministic evaluator candidates are reviewable, but the semantic criteria currently use labels such as `bounded semantic anchors` without complete criterion-specific meanings for every `0 | 25 | 50 | 75 | 100` value.

The corrected registry must define exact anchors, minimum Evidence and conflict rules for:

```text
CNT_BRIEF_ALIGN_V1
CNT_CONSISTENCY_V1
CNT_VERIFIED_WORK_V1
BRD_CATEGORY_V1
BRD_POSITIONING_V1
BRD_EXPRESSION_V1
BRD_RELEVANT_WORK_V1
```

Required invariants:

- absence or insufficient evidence is `UNAVAILABLE`, never score `0`;
- `0` requires admitted affirmative contradiction/incompatibility evidence;
- `CONFLICT` is used when material admitted evidence supports incompatible conclusions without precedence;
- self-declaration alone remains capped at `50` where already proposed;
- score above `50` requires repeated independent Evidence;
- `CNT_CONSISTENCY_V1` must identify whether it is deterministic, semantic, or a semantic per-item classification followed by deterministic aggregation;
- exact canonical ordering, tie-breaking and permutation rules are required;
- no free-form model judgement remains.

The correction must also define deterministic selection for at most two:

```text
Strengths
Areas to consider
Unknowns
```

Missing evidence may create an Unknown but must not become an Area to consider. Selection must use bounded reason codes and deterministic priority/tie-breaking, not model prose preference.

## 7. Correction E — finish wait-policy versioning

The 24-hour horizon and retry direction are acceptable technical candidates. Before acceptance, publish the exact versioned configuration:

- policy identifier/version;
- deadline origin and inclusive/exclusive boundary;
- event-first wake-up behavior;
- one outstanding shared-runtime retry at a time;
- deterministic jitter seed/range;
- exact dependency inspection delays and cap;
- exact technical retry delays/count;
- terminal-Application check before every inspection/calculation/publication;
- behavior when the request begins after the horizon;
- proof that GET and accepted donor changes after current create no work;
- bounded worker-load calculation showing this is not a second scheduler.

This is technical configuration, not a new Product re-evaluation flow.

## 8. Required corrected P0 result

The correction must publish a new report without rewriting the immutable resumption report.

If every correction is satisfied:

```text
RESULT = READY_FOR_APPLICANT_AI_MATCH_TECHNICAL_SA_FINAL_REVIEW
P0_EVIDENCE_READY = YES

C03_V2_NONBLOCKING_COMPLETE_HANDOFF = PASS
SEMANTIC_SCORING_REGISTRY_COMPLETENESS = PASS
DEPENDENCY_WAIT_POLICY_VERSIONING = PASS

P1 = NOT_STARTED_NOT_AUTHORIZED
P2 = NOT_STARTED
P3 = NOT_STARTED
P4 = NOT_STARTED
```

## 9. Scope

This correction is documentation/evidence only.

Do not modify backend/frontend source, create migrations, implement C03 V2, begin Applicant Match P1-P4, call live providers/models, access production data, merge development/production, or deploy.

## 10. Next boundary

```text
NEXT_BOUNDARY =
EXTERNAL_LOCAL_CODEX_P0_RESUMPTION_CORRECTION_1
```
