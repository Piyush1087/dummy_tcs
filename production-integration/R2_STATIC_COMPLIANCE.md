# R2 Static Compliance Review

**Status:** IN PROGRESS — static contract reconciliation  
**Reviewed:** 2026-08-12

## Frozen authorities

- `campaign/campaign_page/lifecycle_readiness_contract.yaml`
- `backend/applicants/applicants_domain_contract.md`
- `backend/applicants/applicants_orchestration_contract.md`
- `backend/applicants/applicants_runtime_validation_contract.md`

## Corrected in production source

### Campaign execution readiness

`CampaignQueryService` now derives `executionReady` from the frozen rule:

```text
EXISTS_ACTIVE_CAMPAIGN_ASSET_WITH_ACTIVE_BRIEF
```

Budget is no longer used as an execution-readiness primitive. The projection counts active Campaign Assets and active Briefs rather than raw rows.

### Application-owned Applicants projection

Campaign Page Applicants workspace state/counts are now derived from `UceApplication`, not legacy Collaboration applicant statuses or persisted aggregate applicant counts.

The Campaign Page continues to use Collaboration rows only for Discovery / Collaboration-owned projections.

### creationSource projection

Campaign Page no longer hard-codes `MANUAL`. It reads persisted `uce_campaigns.creation_source` and projects `MANUAL | AI_RECOMMENDED`.

## Remaining R2 blocker — approval atomicity

The current `CampaignApplicationService.approve()` still performs Application approval/sibling supersession first and invokes the legacy pipeline Collaboration handoff afterward.

That is **not yet compliant** with the frozen Applicants runtime contract, which requires one business-operation transaction covering:

```text
validate selected Application = PENDING
validate Campaign/Product/Brief execution eligibility
validate no existing Campaign Collaboration for CampaignCreator
selected Application -> APPROVED
sibling PENDING Applications -> SUPERSEDED
record superseded-by provenance
create exactly one Collaboration from approved Application
```

The current pipeline service owns Collaboration activation/provisioning in a separate transaction and may depend on a pre-existing legacy applicant Collaboration. Therefore this cannot be called R2-complete by merely changing the Applicants query layer.

## Remaining R2 blocker — Co-Pilot AI Campaign creation

Current Co-Pilot `CAMPAIGN_LAUNCH` still calls the legacy manual `createFromWizard` path and creates a Draft. This conflicts with the frozen AI-recommended Campaign semantics:

- provenance must be `AI_RECOMMENDED` with recommendation identity/version;
- AI-recommended acceptance is a Campaign + Campaign Asset + Brief review/accept flow;
- accepted AI-recommended Campaign enters `LIVE` once the accepted Campaign Asset has an active Brief;
- it must not masquerade as a manual Draft.

Until a canonical atomic AI-recommended creation boundary is implemented, the legacy Co-Pilot launch path must not be treated as compliant.

## Additional Co-Pilot debt

The Campaign classifier prompt still contains stale legacy wording such as `DRAFT -> ACTIVE` / `LIVE maps to ACTIVE`. Runtime enums have moved to `DRAFT / PUBLISHED / LIVE / PAUSED / COMPLETED / ARCHIVED`; classifier copy should be reconciled after the AI-recommended launch boundary is corrected.

## R2 exit criteria

R2 should only be marked complete after:

1. approval + supersession + Collaboration creation are atomic and concurrency-safe;
2. approval checks current Campaign, Campaign Asset and Brief eligibility;
3. exactly one Collaboration can exist per CampaignCreator per Campaign;
4. Co-Pilot AI launch persists correct `AI_RECOMMENDED` provenance and uses the canonical atomic AI launch path;
5. Co-Pilot Applicants reads Application-owned truth;
6. stale ACTIVE lifecycle vocabulary is removed from Campaign Co-Pilot behavior/prompts;
7. source build/tests or CI verify the resulting runtime.
