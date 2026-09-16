# Campaign Applicant AI Match P0 Resumption Correction 2 — Scope Expansion Review V1

Identifier: `CAMPAIGN_APPLICANT_AI_MATCH_P0_RESUMPTION_CORRECTION_2_SCOPE_EXPANSION_REVIEW_V1`

## Disposition

```text
CURRENT_CORRECTION_2_PROMPT_V1 = SUPERSEDED_NOT_EXECUTABLE
SEND_CHECKPOINT_4E20E6D611ED1F59E39D03E5FF4EE21D3369C083 = NO
P0_STATUS = ACCEPTABLE_WITH_CORRECTION
P1_TO_P4 = NOT_AUTHORIZED
```

The four defects recorded by the preceding Technical Final Review remain valid, but a final cross-contract review found additional executable gaps in the Correction 1 report. Sending the V1 Correction 2 prompt would invite another partial correction cycle. The replacement V2 runner prompt therefore consolidates every known unresolved P0 gate below.

This review does not change Product authority and does not authorize implementation.

## 1. Previously identified defects still required

1. Preserve the exact executable `CampaignObjectiveHandoffV1` shape from accepted Campaign backend `3c1c523a178c452023add9745628ecff8a6e5e55`.
2. Use the actual Campaign targeting persistence sources: `targetLocations`, `audienceAgeMin`, `audienceAgeMax`, `audienceGender`, and the existing `targetingVersion` where relevant.
3. Remove terminal Match `PARTIAL`; Match lifecycle remains exactly `PROCESSING | READY | UNAVAILABLE`.
4. Replace overlapping semantic predicates with mutually exclusive, exhaustive, deterministic finalization and proof fixtures.

## 2. C03 ApplicationSnapshot V2 executable fidelity

The Correction 1 report contains non-executable or conflicting C03 vocabulary. The corrected candidate must:

- use snapshot contract identity `C03_APPLICATION_SNAPSHOT_V2`, not `APPLICATION_SNAPSHOT_V2`;
- preserve the submission status fence as executable `PENDING` plus captured Application status/version; `SUBMITTED` is an event name, not an Application status;
- preserve exact canonical identities, including `brandProfileId`, `subjectCreatorProfileId`, `subjectCreatorWorkspaceId`, `campaignId`, `canonicalCampaignAssetId`, and `canonicalBriefId`, plus existing actor identity where the accepted snapshot already carries it;
- preserve all V1 snapshot contexts additively: `campaignContext`, `campaignAssetContext`, `briefContext`, `commercialContext`, `creatorIdentity`, optional `actorContext`, optional `attributionContext`, and `createdAt`;
- keep Match input selection as a strict allowlist so preserved commercial, actor, and attribution data cannot become Match scoring inputs;
- keep V1 snapshots immutable/readable but Match-ineligible; do not reconstruct or backfill Match inputs from mutable Campaign rows;
- define an atomic, one-insert immutable snapshot/hash construction. Because a snapshot hash that includes `snapshotId` requires the ID before hashing, preassign the ID or prove an equivalent atomic method. Insert-then-update is prohibited.

## 3. Campaign targeting handoff and definition integrity

Campaign, not C03 or Match, owns targeting interpretation. The P0 candidate must define `CampaignTargetingHandoffV1` as a strict AVAILABLE/UNAVAILABLE projection and establish:

- exact source fields from `UceCampaignTargeting`;
- structured geography preserving `LOCALITY | REGION | COUNTRY | GLOBAL`;
- age bounds `13..65` with `min <= max`;
- `ALL` gender projects to `NOT_APPLICABLE`;
- affinity is always `UNAVAILABLE` with `ids = []` for V1; no recovery from draft/canonical-definition JSON or wizard data;
- the handoff validates targeting values and version against the same accepted Campaign definition and definition hash fenced by `CampaignObjectiveHandoffV1`;
- `targetingVersion` alone is not a definition-integrity fence;
- targeting contract identity is frozen in-band or is unambiguous from `C03_APPLICATION_SNAPSHOT_V2`;
- report output-property names are distinguished from persistence-column/property names.

No Campaign targeting implementation is authorized by this P0 correction. Campaign SA acceptance and a separately authorized Campaign backend checkpoint are required before C03 V2 implementation.

## 4. Reliable Match-ready signal ownership

Current C03 submission writes an `ApplicationDomainEvent` whose event name is `SUBMITTED` and uses an existing notification-outbox callback. No accepted Applicant Match consumer or Match-ready outbox exists yet.

The P0 report must not describe an existing Match consumer. It must define the future ownership boundary:

- C03 V2 may own a transactionally durable Match-ready signal/outbox alongside successful immutable snapshot creation, subject to C03 authorization;
- Applicant Match later owns the idempotent consumer and Match request service;
- the signal carries only stable identity/fence data, not a mutable donor manifest;
- no GET-triggered execution and no second scheduler are introduced;
- failure to create/publish Match work remains nonblocking to the already successful Application submission, with reliable recovery through the accepted outbox/runtime pattern.

## 5. Terminal Application race

Before dependency inspection, manifest freeze, calculation acceptance, and publication, Match must prove the Application remains `PENDING` at the captured status/version.

The executable enum is:

```text
PENDING | APPROVED | REJECTED | WITHDRAWN | EXPIRED | SUPERSEDED
```

Product names `APPROVED | REJECTED | EXPIRED` as primary terminal races. For technical safety and compatibility, every non-`PENDING` status, including `WITHDRAWN | SUPERSEDED`, stops Match. Terminalization versus Match publication must be settled through a lock/CAS fence. If terminalization wins, there is no new current or user-visible Match result; only bounded execution/audit disposition is recorded.

## 6. Donor manifest lifecycle ordering

The Correction 1 report conflates manifest freeze with result publication. The corrected lifecycle is:

1. dependency observations before freeze are execution metadata only;
2. at the first coherent readiness point, or terminal insufficiency, atomically freeze the admitted donor manifest using CAS;
3. numeric/semantic calculation reads only that frozen manifest and does not hold a database transaction across model/provider work;
4. publication validates the same manifest hash, live execution/lease, `PENDING` status/version, and absence of accepted current before atomically completing immutable graph/current CAS;
5. terminal `UNAVAILABLE` may freeze its manifest and publish in one transaction when no calculation is needed.

Wait/dependency-registration metadata is not accepted Match input provenance. Later donor current is ignored after manifest freeze/accepted V1 result.

## 7. Dependency wait completeness and bounded load

The corrected wait policy must additionally establish:

- immediate terminal `UNAVAILABLE` when all relevant donors are terminal and the threshold is mathematically unreachable before the 24-hour horizon;
- immediate manifest freeze when the first coherent threshold is reached; optional, irrelevant, or unusable donors cannot delay it;
- terminal Application fencing at every wait/attempt boundary;
- internally consistent event-wake math. If the maximum load assumes at most one accepted event wake per donor identity, the CAS rule must enforce that. Otherwise define the true transition cap and recompute `maxAttempts`;
- revalidation of the previously stated `338` attempt/load bound after correcting event-wake semantics;
- preservation of exact deadline, half-open boundary, deterministic jitter, late-start, technical-retry, one-outstanding-retry, post-current-zero-work, and GET-zero-work behavior.

## 8. Coverage arithmetic and deterministic registry completeness

The report must decide whether a subcriterion can have fractional evidence coverage. This affects required-format content comparison, performance metric/format comparison, and any partially comparable geography/age evidence.

- If fractional coverage is supported, define exact rational numerator/denominator, admitted score weight, dimension coverage, and the dimension `>= 50%` numeric-readiness calculation.
- If it is not supported, every subcriterion must resolve to a whole mutually exclusive evidence state and the report must remove claims of partial coverage.
- Missing or unavailable evidence never becomes score zero.
- Every deterministic criterion, not only the seven semantic criteria, needs mutually exclusive state and score precedence with exact boundary fixtures.
- Overall readiness remains exact rational weighted coverage `>= 60%` plus numeric `AUDIENCE_FIT` or `CONTENT_AND_DELIVERABLE_FIT`.

## 9. Semantic/model failure disposition

The provider-neutral semantic design must explicitly and separately handle:

- adapter unconfigured;
- malformed or schema-invalid candidate;
- transient provider failure;
- retry exhaustion.

It must state whether each outcome makes the affected criterion unavailable or keeps the execution in a bounded retry/failure state, how coverage/readiness changes, and when terminal `UNAVAILABLE` is possible. Deterministic criteria remain operational. No heuristic/model fallback may be invented. Production remains fail-closed where a required semantic adapter is unavailable.

## 10. Immutable request identity and version bundle

The report must define canonical serialization/hash construction for the single V1 request identity and bind all execution-affecting versions, including at least:

- immutable Application snapshot identity/hash;
- scoring registry;
- semantic rubric;
- performance normalization;
- objective-weight contract;
- wait-policy/processor bundle where applicable.

The same request and same frozen manifest replay idempotently. Version changes do not create re-evaluation, supersession, refresh, or another current in V1.

## 11. Required governance sequence

Even if P0 becomes technically acceptable, P1 remains blocked until all of the following occur in order:

1. Campaign SA reviews and accepts `CampaignTargetingHandoffV1`.
2. Campaign backend targeting handoff implementation is separately authorized, published, and accepted.
3. C03 SA reviews and accepts `C03_APPLICATION_SNAPSHOT_V2` plus its durable Match-ready signal boundary.
4. C03 implementation is separately authorized, published, and accepted.
5. Parent accepts the converged immutable Campaign/C03 checkpoint.
6. Only then may Applicant Match P1 be separately authorized.

P0 documentation must not collapse these ownership gates or authorize implementation.

## 12. Invariants that must survive the correction

- Product Clarification supersedes conflicting base Product provisions only where explicit.
- Match is neutral to donor lifecycle cause and never reacquires unavailable data.
- Four scored dimensions only; no fifth dimension or replacement weights.
- Commercial/work fit is globally not applicable. Work Preferences, Rate Card, KYC/payout readiness, availability and commercial willingness are prohibited scoring inputs.
- One initial evaluation only; no refresh, re-evaluation, supersession, or stale-current behavior.
- Match lifecycle is exactly `PROCESSING | READY | UNAVAILABLE`.
- C03 decisions remain nonblocking and authoritative.
- Applicant Match appears only in Campaign Page Applicants; Creator visibility is none; Discovery is separately governed.
- Shared Evidence/Observation/generation/current/CAS/execution architecture is reused; no parallel runtime or scheduler.
- Optional Portfolio/C04 absence never causes waiting. Prior C04 work is not admitted without an accepted privacy-safe contract.
- Sensitive/proxy evidence and provider prose remain fail-closed and bounded by accepted structured contracts.

## Next authorized action

Use only:

`runner-prompts/CAMPAIGN_APPLICANT_AI_MATCH_P0_RESUMPTION_CORRECTION_2_LOCAL_CODEX_EXECUTION_V2.md`

No attachment accompanies that prompt. Every required input is Git-hosted at the immutable launch checkpoint.
