# R2 Static Compliance Review

**Status:** STATIC REMEDIATION COMPLETE — runtime verification pending  
**Reviewed:** 2026-08-12

## Frozen authorities

- `campaign/campaign_page/lifecycle_readiness_contract.yaml`
- `backend/applicants/applicants_domain_contract.md`
- `backend/applicants/applicants_orchestration_contract.md`
- `backend/applicants/applicants_runtime_validation_contract.md`
- `campaign/frontend/view_dto_api_contract.md`

## Corrected in production source

### Campaign execution readiness

`CampaignQueryService` derives `executionReady` from the frozen rule:

```text
EXISTS_ACTIVE_CAMPAIGN_ASSET_WITH_ACTIVE_BRIEF
```

Budget is not used as an execution-readiness primitive. Campaign Page counts active Campaign Assets and active Briefs rather than raw rows.

### Application-owned Applicants projection

Campaign Page Applicants workspace state/counts are derived from `UceApplication`, not legacy Collaboration applicant statuses or persisted aggregate applicant counts. Collaboration rows remain only for independently owned Discovery / Collaboration projections.

### creationSource projection

Campaign Page reads persisted `uce_campaigns.creation_source` and projects `MANUAL | AI_RECOMMENDED`; it no longer hard-codes `MANUAL`.

### Applicant approval atomicity

Application approval is now one outer Prisma transaction covering:

```text
re-read Application
validate PENDING
validate Campaign eligibility
validate active Campaign Asset
validate active Brief belonging to that Asset
claim PENDING -> APPROVED
supersede sibling PENDING Applications
preserve superseded-by provenance
perform transitional legacy pipeline/inventory/audit effects
resolve/create creator user
create exactly one canonical Collaboration
commit or roll back as one operation
```

`CollaborationProvisionService` now exposes transaction-aware creator resolution and provisioning helpers. The approval path requests strict new Collaboration creation rather than silently reusing an existing Campaign+creator Collaboration. The schema-level Campaign+creator uniqueness constraint remains the final concurrency guard.

### Campaign Copilot / Intelligence boundary

Campaign Page no longer fabricates Campaign Copilot summaries or actions. Until the Creator Shop Intelligence Engine supplies an accepted Campaign-facing Intelligence projection, `copilotSummary` is projected as `UNAVAILABLE` with no generated summary/actions.

### Lifecycle vocabulary

Campaign Co-Pilot classifier vocabulary was reconciled to `DRAFT / PUBLISHED / LIVE / PAUSED / COMPLETED / ARCHIVED`; `ACTIVE` is not treated as a persisted Campaign lifecycle state.

## AI-recommended Campaign creation — deliberately deferred

The Campaign module does **not** own AI recommendation generation or AI-to-Campaign field translation. That responsibility belongs to the Creator Shop Intelligence Engine.

Existing Co-Pilot/HITL code that translates recommendation-like inputs into the legacy Campaign wizard path is therefore legacy/deprecation debt, not a Campaign-core implementation requirement. It must not be treated as the canonical AI-recommended Campaign creation path. Remove or replace it only when the Intelligence Engine owns the recommendation acceptance integration and current production usage has been checked.

Campaign retains only the future integration requirements needed to accept authoritative Intelligence output, including `creationSource = AI_RECOMMENDED` and recommendation provenance where supplied.

## Phase 3 frontend boundaries now present

The production Campaign Page now has explicit SideDrawer boundaries for Campaign Details, Creator Profile, Outreach composer, and Reporting detail. The legacy SaaS reporting payload is not used by the new Campaign Page; detailed Reporting remains reserved for the future accepted Reporting/Intelligence projection. Outreach compose is available, but final Email / Priority DM execution remains deliberately unavailable until the canonical execution commands exist.

## Static exit assessment

The previously identified Campaign-core blockers are statically remediated:

1. execution readiness uses active Asset + active Brief semantics — **PASS**;
2. Applicants workspace is Application-owned — **PASS**;
3. approval/supersession/Collaboration creation is transaction-coordinated — **PASS (static)**;
4. Campaign+creator Collaboration uniqueness is enforced — **PASS (static)**;
5. actual `creationSource` is projected — **PASS**;
6. fabricated Campaign Copilot output removed — **PASS**;
7. Phase 3 Details/Profile/Outreach/Reporting surface boundaries exist — **PASS (static)**;
8. AI recommendation translation is assigned to Intelligence rather than Campaign — **DEFERRED BY OWNERSHIP, not a Campaign blocker**.

## Remaining acceptance gate

Runtime acceptance is still required. The source repositories currently expose no GitHub status checks for the reviewed feature heads. Before merge, run the repository-native verification commands and exercise the Campaign journeys against a real backend/database:

### Frontend

```text
npm/pnpm install using the repository lockfile/package-manager policy
npm/pnpm run typecheck
npm/pnpm run lint
npm/pnpm run build
```

### Backend

```text
npm/pnpm install using the repository lockfile/package-manager policy
prisma generate
npm/pnpm run lint
npm/pnpm run build
```

Also execute focused Campaign schema/hydration/Application tests and end-to-end Campaign lifecycle/Application approval scenarios. Static review must not be represented as runtime verification.
