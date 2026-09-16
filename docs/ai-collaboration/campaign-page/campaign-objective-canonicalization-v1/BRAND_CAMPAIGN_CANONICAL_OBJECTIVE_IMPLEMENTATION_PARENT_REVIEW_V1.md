# Brand Campaign Canonical Objective Implementation — Parent Review V1

Identifier: BRAND_CAMPAIGN_CANONICAL_OBJECTIVE_IMPLEMENTATION_PARENT_REVIEW_V1

## Disposition

    IMPLEMENTATION_REPORT =
    INDEPENDENTLY_VERIFIED

    CAMPAIGN_CORE_IMPLEMENTATION =
    ACCEPTABLE_WITH_CORRECTION

    BACKEND_CHECKPOINT =
    NOT_YET_ACCEPTED

    FRONTEND_CORRECTION_REQUIRED =
    NO

    OVERALL_IMPLEMENTATION =
    NOT_YET_ACCEPTED

The authority report, backend commit/tree, frontend commit/tree, ancestry, changed-file inventories, and feature-branch publication were independently verified.

The migrations, additive four-value enum, sole UceCampaignStrategy.coreObjective persistence authority, deterministic Campaign-definition hash, canonical create/publish path, legacy non-mapping, and frontend four-value implementation are acceptable within their reviewed scope.

Repository-wide pre-existing lint debt is not a checkpoint blocker because implementation-owned lint, relevant tests, builds, PostgreSQL migration paths, startup smoke, browser evidence, and secret scans passed.

## Correction 1 findings

### Complete Campaign-owned handoff is not exposed

projectCanonicalCampaignObjective() constructs the accepted objective contract and definition fence, but projectCanonicalCampaignForApplication() currently preserves only the objective value. It drops the contract identifier, definition version, snapshot reference, hash, and exact unavailable reason.

The Campaign-owned application projection must expose a complete CampaignObjectiveHandoffV1. The existing campaign.objective field may remain temporarily for C03 V1 compatibility. No C03 source change is authorized.

### Legacy Reporting silently misinterprets canonical objectives

BrandUceReportingService.buildRoiSummary() branches on legacy objective values and otherwise uses its awareness-style default. Canonical TRUST, ASSETS, and ACTION can therefore receive incorrect semantics.

Campaign SA owns no Reporting metric semantics. Until Campaign Reporting authority separately defines the canonical four-objective behavior, the legacy Reporting path must fail closed for canonical objectives. This correction may add only a bounded unavailability guard; it must not define or map Reporting metrics.

### Integrity failures require their own reason

Definition/objective disagreement, missing definition-fence fields, stored/recomputed hash mismatch, and tampering are:

    CAMPAIGN_DEFINITION_INTEGRITY_INVALID

They must not be reported as:

    CANONICAL_OBJECTIVE_REQUIRED
    LEGACY_OBJECTIVE_UNRESOLVED

## Accepted correction contract

    CampaignObjectiveHandoffV1 =
      | {
          status: AVAILABLE
          objective: AWARENESS | TRUST | ASSETS | ACTION
          objectiveContract: CAMPAIGN_OBJECTIVE_V1
          campaignDefinition: {
            version
            snapshotRef
            hash
          }
        }
      | {
          status: UNAVAILABLE
          reason:
            CANONICAL_OBJECTIVE_REQUIRED
            | LEGACY_OBJECTIVE_UNRESOLVED
            | CAMPAIGN_DEFINITION_INTEGRITY_INVALID
        }

Partial AVAILABLE output is prohibited. Every available field must describe the same accepted Campaign definition.

## Sequencing

    CORRECTION_1 =
    AUTHORIZED_BY_PARENT

    SCOPE =
    BACKEND_ONLY

    FRONTEND =
    UNCHANGED

    C03 =
    NOT_AUTHORIZED

    APPLICANT_MATCH =
    NOT_AUTHORIZED

    CAMPAIGN_REPORTING_PRODUCT_SEMANTICS =
    NOT_AUTHORIZED

    NEXT_BOUNDARY_AFTER_CORRECTION =
    PARENT_PROGRAM_ORCHESTRATOR_FINAL_ACCEPTANCE_REVIEW
