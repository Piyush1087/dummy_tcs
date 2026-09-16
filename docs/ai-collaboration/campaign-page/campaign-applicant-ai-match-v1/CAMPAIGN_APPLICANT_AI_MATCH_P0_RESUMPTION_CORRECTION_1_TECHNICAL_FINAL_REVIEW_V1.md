# Campaign Applicant AI Match — P0 Resumption Correction 1 Technical Final Review V1

Identifier: `CAMPAIGN_APPLICANT_AI_MATCH_P0_RESUMPTION_CORRECTION_1_TECHNICAL_FINAL_REVIEW_V1`

## 1. Disposition

```text
P0_RESUMPTION_CORRECTION_1_REPORT = ACCEPTABLE_WITH_CORRECTION
P0_FINAL_ACCEPTANCE = NOT_YET_GRANTED

C03_V2_NONBLOCKING_APPLICATION = ACCEPTED
CAMPAIGN_TARGETING_HANDOFF_OWNERSHIP = ACCEPTED
EXPLANATION_SELECTION_DIRECTION = ACCEPTED
DEPENDENCY_WAIT_POLICY_VERSIONING = ACCEPTED_WITH_CORRECTION

EXECUTABLE_HANDOFF_CONTRACT_FIDELITY = CORRECTION_REQUIRED
TARGETING_PERSISTENCE_FIELD_FIDELITY = CORRECTION_REQUIRED
MATCH_TERMINAL_STATE_FIDELITY = CORRECTION_REQUIRED
SEMANTIC_SCORING_DETERMINISM = CORRECTION_REQUIRED

P1 = NOT_AUTHORIZED
P2 = NOT_AUTHORIZED
P3 = NOT_AUTHORIZED
P4 = NOT_AUTHORIZED
```

The correction resolves the earlier nonblocking-Application, targeting ownership, explanation-selection and wait-policy structure gaps. It cannot receive final P0 acceptance because four statements conflict with accepted Product or executable repository authority.

This is a bounded documentation correction. No implementation phase is authorized.

## 2. Immutable reviewed checkpoint

- Repository: `Piyush1087/dummy_tcs`
- Branch: `program/campaign-applicant-ai-match-v1-authority`
- Report SHA: `1d06dbbc994c33ae02cffdcb90065b5dfa90a77f`
- Report tree: `09954c07218e4ea001c30782b1b64840deaef6cb`
- Direct parent: `f382dccb9a35e4fcd2dc4a91bf74a2ee911f5a6c`
- Direct-parent relationship: verified
- Independent remote fetch-back SHA/tree equality: verified

Accepted executable Campaign backend remains:

- SHA: `3c1c523a178c452023add9745628ecff8a6e5e55`
- Tree: `0138efccc1d83ad5c558571b971731e0c45499ec`

## 3. Accepted findings preserved

The next correction must preserve:

- the complete nonblocking Application-submission behavior;
- an owner-produced `UNAVAILABLE` handoff as valid snapshot data rather than an Application eligibility failure;
- Campaign ownership of targeting parsing and integrity semantics;
- C03 transactional copying of owner-produced objective and targeting unions;
- affinity as `UNAVAILABLE` with empty IDs;
- the versioned semantic registry and provider-neutral structured-candidate direction;
- deterministic, code-based maximum-two Strengths, Areas and Unknowns selection;
- the 24-hour half-open dependency horizon, deterministic jitter, event-first CAS, single outstanding shared-runtime retry, late-start behavior and bounded-load proof;
- shared Intelligence runtime reuse and the prohibition on a parallel Applicant Match scheduler;
- C03 V2 as a separately governed pre-P1 dependency;
- P1 through P4 as unstarted and unauthorized.

## 4. Correction A — preserve the executable objective handoff exactly

The report says C03 copies `CampaignObjectiveHandoffV1` exactly, but its displayed type changes the accepted executable field shape to:

```text
availability
contract
campaignDefinitionVersion
campaignDefinitionSnapshotRef
canonicalDefinitionHash
```

The accepted Campaign backend at `3c1c523...` actually exports:

```ts
type CampaignObjectiveHandoffV1 =
  | {
      status: "AVAILABLE";
      objective: "AWARENESS" | "TRUST" | "ASSETS" | "ACTION";
      objectiveContract: "CAMPAIGN_OBJECTIVE_V1";
      campaignDefinition: {
        version: "2.0";
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

Required correction:

- reference or reproduce that executable union without renaming, flattening or widening its fields;
- state that Campaign owns the type and C03 consumes/copies it;
- remove every conflicting alternate objective-handoff shape from the corrected P0 report;
- preserve all three unavailable reasons exactly.

This is contract fidelity, not a request to change the accepted Campaign backend.

## 5. Correction B — use the actual targeting persistence fields

The report identifies:

```text
UceCampaignTargeting.minAge
UceCampaignTargeting.maxAge
UceCampaignTargeting.gender
```

Those fields do not exist at the accepted Campaign backend checkpoint. The actual accepted fields are:

```text
UceCampaignTargeting.targetLocations
UceCampaignTargeting.audienceAgeMin
UceCampaignTargeting.audienceAgeMax
UceCampaignTargeting.audienceGender
```

Required correction:

- use those exact persistence field names everywhere;
- preserve the previously accepted behavior: `ALL` becomes target-gender `NOT_APPLICABLE`; no value is inferred;
- keep Campaign responsible for strict parsing, normalization, validation and integrity classification;
- keep C03 prohibited from interpreting the raw fields itself;
- do not recover affinity from canonical-definition or wizard JSON.

The new Campaign-owned targeting handoff may define its own output property names, but it must clearly distinguish those contract properties from the exact persistence-source names.

## 6. Correction C — remove the nonexistent Match terminal state

The wait-policy section says the terminal inspection may publish:

```text
READY/PARTIAL/UNAVAILABLE
```

Applicant Match Product states are only:

```text
PROCESSING
READY
UNAVAILABLE
```

`PARTIAL` is not an Applicant Match state and must not be introduced as an alias, result state or terminal publication.

Required correction:

```text
at final inspection:
  readiness satisfied
  -> READY

  readiness not satisfied and no retry remains
  -> UNAVAILABLE, score = null

  technical execution failure with no accepted current
  -> bounded failed attempt / FAILED_NO_CURRENT execution disposition
  -> no invented Match result state
```

An individual semantic item classification named `PARTIAL` may remain; it is not a Match lifecycle state. The corrected text must make this distinction explicit.

## 7. Correction D — make semantic anchor finalization mutually exclusive

The criterion tables add useful bounded labels, but several score predicates overlap. Examples:

- `CNT_BRIEF_ALIGN_V1`: score `0` (two contradictions and no support) also satisfies score `25` (two incompatibilities and at most one support).
- `CNT_VERIFIED_WORK_V1`: “all work contradicts” also satisfies “predominantly incompatible.”
- Brand criteria use unquantified terms such as “predominantly,” “adjacent,” “mixed,” “major,” “materially opposing,” or “weak,” leaving two anchors possible for the same classified set.

This does not meet the required deterministic finalizer contract.

Required correction for each of the seven semantic criteria:

1. Define an allowlisted per-item semantic classification vocabulary.
2. Define the minimum classifiable evidence count and independence/date constraints.
3. Define a conflict predicate that is evaluated first.
4. Define mutually exclusive score predicates for `0 | 25 | 50 | 75 | 100` over validated classifications/counts/ratios.
5. State an explicit evaluation order only where it is needed to make boundary cases unique.
6. Prove that every accepted `AVAILABLE` candidate maps to exactly one anchor.
7. Prove that no evidence set maps to two anchors.
8. Keep insufficient evidence as `UNAVAILABLE`, never `0`.
9. Keep `0` dependent on affirmative admitted contradiction/incompatibility evidence.
10. Keep self-declaration caps and the repeated-independent-evidence requirement above `50`.

Semantic classification may use the provider-neutral adapter. Score selection after validation must be local and deterministic. Unbounded provider prose must remain discarded.

Required fixtures include:

- every minimum-count boundary;
- every ratio boundary immediately below, at and immediately above the threshold;
- all-contradiction versus predominantly-contradiction cases;
- exact support/contradiction ties;
- conflict precedence;
- self-declaration-only evidence;
- duplicate and foreign refs;
- input/output permutations;
- an assertion that exactly one terminal criterion disposition is selected.

## 8. Correction E — terminology and internal consistency pass

The corrected report must perform a full bounded consistency pass so that:

- objective handoff fields match the executable Campaign type everywhere;
- persistence-source names match Prisma everywhere;
- Match lifecycle states remain exactly `PROCESSING | READY | UNAVAILABLE` everywhere;
- `PARTIAL` appears only as a semantic item classification where applicable;
- “exact” or “deterministic” is claimed only where mutually exclusive predicates and tests are specified;
- no previously accepted finding is silently changed.

## 9. Required corrected result

If every correction is satisfied, publish a new descendant report with:

```text
RESULT = READY_FOR_APPLICANT_AI_MATCH_TECHNICAL_SA_FINAL_P0_REVIEW

EXECUTABLE_HANDOFF_CONTRACT_FIDELITY = PASS
TARGETING_PERSISTENCE_FIELD_FIDELITY = PASS
MATCH_TERMINAL_STATE_FIDELITY = PASS
SEMANTIC_SCORING_MUTUAL_EXCLUSIVITY = PASS
DEPENDENCY_WAIT_POLICY_INTERNAL_CONSISTENCY = PASS

P0_EVIDENCE_READY = YES
C03_APPLICATION_SNAPSHOT_V2 = REQUIRED_PRE_P1_DEPENDENCY

P1 = NOT_STARTED_NOT_AUTHORIZED
P2 = NOT_STARTED
P3 = NOT_STARTED
P4 = NOT_STARTED
```

Do not rewrite or delete the immutable Correction 1 report. Publish the correction as a new descendant report.

## 10. Scope

Correction 2 is documentation/evidence only.

Do not modify backend/frontend source, create migrations, implement Campaign targeting, implement C03 V2, begin Applicant Match P1-P4, invoke providers/models, access production data, merge development/production or deploy.

## 11. Next boundary

```text
NEXT_BOUNDARY =
EXTERNAL_LOCAL_CODEX_P0_RESUMPTION_CORRECTION_2
```
