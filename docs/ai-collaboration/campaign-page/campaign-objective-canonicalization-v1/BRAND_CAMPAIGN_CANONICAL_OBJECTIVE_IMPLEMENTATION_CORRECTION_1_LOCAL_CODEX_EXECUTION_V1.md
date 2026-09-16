# Brand Campaign Canonical Objective — Implementation Correction 1 External Local Codex Execution V1

Identifier: BRAND_CAMPAIGN_CANONICAL_OBJECTIVE_IMPLEMENTATION_CORRECTION_1_LOCAL_CODEX_EXECUTION_V1

## 1. Assignment

Execute one bounded backend-only correction to the published Brand Campaign canonical-objective implementation.

    AUTHORIZED_WORK =
    COMPLETE_CAMPAIGN_OBJECTIVE_HANDOFF
    +
    TEMPORARY_FAIL_CLOSED_LEGACY_REPORTING_GUARD
    +
    CORRECTION_EVIDENCE_AND_PUBLICATION

    FRONTEND_SOURCE_CHANGE = NOT_AUTHORIZED
    C03_SOURCE_CHANGE = NOT_AUTHORIZED
    APPLICANT_MATCH_SOURCE_CHANGE = NOT_AUTHORIZED
    CAMPAIGN_REPORTING_PRODUCT_SEMANTICS = NOT_AUTHORIZED
    NEW_MIGRATION = NOT_EXPECTED_OR_AUTHORIZED
    MERGE_OR_DEPLOYMENT = NOT_AUTHORIZED

## 2. Mandatory Git-first authority gate

The launch message supplies an immutable SHA/tree for:

    REPOSITORY =
    Piyush1087/dummy_tcs

    BRANCH =
    program/campaign-objective-canonicalization-v1-authority

    PATH =
    docs/ai-collaboration/campaign-page/campaign-objective-canonicalization-v1/

The supplied authority commit must be a normal descendant of:

    IMPLEMENTATION_REPORT_SHA =
    115ac4ea16bc1a4b89c247afc189f11c69d69288

    IMPLEMENTATION_REPORT_TREE =
    698c0e77bde55c40f18b1c02c7670b3fd251fdce

Fetch/prune and verify the exact launch SHA/tree, ancestry, branch equality, and clean authority worktree.

Read completely from that exact commit:

    BRAND_CAMPAIGN_CANONICAL_OBJECTIVE_UNBLOCK_PREFLIGHT_REPORT_V1.md
    CAMPAIGN_SA_CANONICAL_OBJECTIVE_FEEDBACK_V1.md
    CAMPAIGN_SA_CANONICAL_OBJECTIVE_BOUNDARY_REVIEW_COMPLETION_V1.md
    BRAND_CAMPAIGN_CANONICAL_OBJECTIVE_IMPLEMENTATION_LOCAL_CODEX_EXECUTION_V1.md
    BRAND_CAMPAIGN_CANONICAL_OBJECTIVE_IMPLEMENTATION_REPORT_V1.md
    BRAND_CAMPAIGN_CANONICAL_OBJECTIVE_IMPLEMENTATION_PARENT_REVIEW_V1.md
    BRAND_CAMPAIGN_CANONICAL_OBJECTIVE_IMPLEMENTATION_CORRECTION_1_LOCAL_CODEX_EXECUTION_V1.md
    EXECUTION_LEDGER.md

Also read repository-root AGENTS.md, AI_ENGINEERING_STANDARD.md, and only the routed standards relevant to this backend correction.

Stop before source mutation with CAMPAIGN_OBJECTIVE_CORRECTION_1_AUTHORITY_INPUT_MISMATCH if any required file, SHA/tree, ancestry, or authority relationship fails.

Do not substitute chat content, attachments, summaries, or local uncommitted copies.

## 3. Implementation checkpoint gate

Backend:

    REPOSITORY =
    Piyush1087/creator-commerce-backend-v2-clone

    BRANCH =
    program/campaign-objective-canonicalization-v1-backend

    REQUIRED_PARENT_SHA =
    d7ff0f33d12b45d378c02a9d2adfbc2e05eb6b18

    REQUIRED_PARENT_TREE =
    b45e314404dd2318bf74f2e13de04669539c9dda

The correction must be a normal descendant on the same backend feature branch. Fetch/prune, verify exact remote SHA/tree, and verify a clean worktree before mutation. Stop on divergence.

Frontend is verification-only:

    REPOSITORY =
    Piyush1087/creator-commerce-frontend-v2-clone

    BRANCH =
    program/campaign-objective-canonicalization-v1-frontend

    IMMUTABLE_SHA =
    0662cd6963859d9e46abe53910b174d4826adaa3

    IMMUTABLE_TREE =
    02243e16ed283810936fdaee0601981fe316688d

Verify it remains unchanged. Do not create a frontend correction commit.

## 4. Correction A — complete Campaign objective handoff

Define and expose the exact Campaign-owned contract:

    type CampaignObjectiveHandoffV1 =
      | {
          status: "AVAILABLE";
          objective: "AWARENESS" | "TRUST" | "ASSETS" | "ACTION";
          objectiveContract: "CAMPAIGN_OBJECTIVE_V1";
          campaignDefinition: {
            version: string;
            snapshotRef: string;
            hash: "sha256:<64 lowercase hexadecimal characters>";
          };
        }
      | {
          status: "UNAVAILABLE";
          reason:
            | "CANONICAL_OBJECTIVE_REQUIRED"
            | "LEGACY_OBJECTIVE_UNRESOLVED"
            | "CAMPAIGN_DEFINITION_INTEGRITY_INVALID";
        };

The Campaign-owned application projection must expose this complete object as an additive typed field:

    campaign.objectiveHandoff

The existing:

    campaign.objective

may remain temporarily and must equal objectiveHandoff.objective only when the handoff is AVAILABLE; otherwise it is null.

Do not change C03 source or persist a C03 V2 snapshot.

### Availability requirements

AVAILABLE may be emitted only when all fields are present, valid, and mutually consistent:

- objective is one exact canonical value;
- objective contract is the literal CAMPAIGN_OBJECTIVE_V1;
- Campaign definition version is present and accepted;
- deterministic snapshot reference is present;
- canonical Campaign-definition hash is present;
- stored and recomputed hash agree;
- definition objective equals UceCampaignStrategy.coreObjective;
- every exposed value describes the same accepted Campaign definition.

Partial available output is prohibited.

### Unavailable reasons

Return LEGACY_OBJECTIVE_UNRESOLVED only for a recognized compatibility-only legacy objective.

Return CANONICAL_OBJECTIVE_REQUIRED when no accepted canonical objective is available and the input is not a recognized legacy value or definition-integrity failure.

Return CAMPAIGN_DEFINITION_INTEGRITY_INVALID for:

- definition/objective disagreement;
- missing or unaccepted definition version after a canonical objective is present;
- missing snapshot-reference inputs;
- missing definition hash;
- malformed definition hash;
- stored/recomputed hash mismatch;
- tampered, corrupt, or invalid canonical definition.

Never classify definition-integrity failure as missing canonical objective or legacy reauthoring.

No legacy objective may be translated to a canonical objective.

## 5. Correction B — temporary fail-closed legacy Reporting guard

The existing legacy Reporting implementation is not canonical Reporting authority.

For every canonical objective:

    AWARENESS
    TRUST
    ASSETS
    ACTION

the legacy Reporting dashboard and explicit refresh path must fail closed before applying:

- the awareness/default ROI summary;
- a legacy traffic/conversion branch;
- a fabricated mapping;
- any newly invented canonical Reporting metric family.

Use one stable backend reason:

    CAMPAIGN_REPORTING_CANONICAL_OBJECTIVE_UNAVAILABLE

Return it through the repository's established bounded HTTP/domain-error pattern. Do not add frontend behavior or a new Reporting response model.

Legacy compatibility objectives retain their existing behavior. This correction must not redefine or improve legacy Reporting semantics.

Do not define:

- canonical TRUST metrics;
- canonical ASSETS metrics;
- canonical ACTION metrics;
- canonical Reporting dashboard composition;
- canonical Reporting calculations;
- canonical Reporting refresh behavior beyond the temporary unavailability guard.

This is a safety boundary, not Campaign Reporting Product implementation.

## 6. Required tests

Add focused backend tests proving:

1. each of the four canonical objectives produces a complete AVAILABLE application handoff;
2. objective, contract, version, reference, and hash are exact;
3. compatibility campaign.objective agrees only for AVAILABLE;
4. each recognized legacy objective returns LEGACY_OBJECTIVE_UNRESOLVED;
5. missing or noncanonical objective returns CANONICAL_OBJECTIVE_REQUIRED;
6. definition/objective disagreement returns CAMPAIGN_DEFINITION_INTEGRITY_INVALID;
7. missing version/hash, malformed hash, mismatch, and tampering return the integrity reason;
8. no partial available handoff can be emitted;
9. the application projection preserves the complete handoff rather than only the objective;
10. legacy Reporting dashboard rejects all four canonical objectives with the stable unavailable reason;
11. legacy Reporting refresh rejects all four canonical objectives and performs no snapshot write;
12. legacy Reporting compatibility tests remain passing;
13. Brand authorization and tenant isolation remain intact;
14. no C03 or Applicant Match file changes;
15. the existing two migrations remain unchanged and no migration is added.

Run:

- relevant focused suites for objective projection, application read, Campaign query/list/status, and Reporting;
- relevant Campaign regression suites;
- implementation-owned lint;
- typecheck/build;
- startup smoke;
- secret scan;
- git diff --check.

Real PostgreSQL migration reruns and browser reruns are not required when the correction creates no schema/frontend change and the previous evidence remains unchanged. If source inspection reveals either is materially affected, run the relevant proof or stop and report why.

Repository-wide pre-existing lint debt remains non-blocking only if correction-owned files pass.

## 7. Prohibitions

Do not:

- modify frontend source;
- modify C03 source, contracts, schema, or migrations;
- modify Applicant Match;
- create any migration;
- change the canonical four-value enum;
- change definition-hash semantics;
- create an objective revision ID/table/ledger;
- map legacy objective values;
- define Campaign Reporting Product semantics;
- access production data;
- invoke provider/model APIs;
- merge development or production;
- deploy;
- force-push.

## 8. Circuit breakers

Stop on:

    CAMPAIGN_OBJECTIVE_CORRECTION_1_AUTHORITY_INPUT_MISMATCH
    CAMPAIGN_OBJECTIVE_CORRECTION_1_BACKEND_BASE_DIVERGENCE
    CAMPAIGN_OBJECTIVE_HANDOFF_PARTIAL_AVAILABLE
    CAMPAIGN_OBJECTIVE_INTEGRITY_REASON_COLLAPSE
    CAMPAIGN_OBJECTIVE_LEGACY_MAPPING_REQUIRED
    CAMPAIGN_REPORTING_FAIL_CLOSED_BOUNDARY_UNSAFE
    CAMPAIGN_REPORTING_PRODUCT_SEMANTICS_REQUIRED
    UNAUTHORIZED_FRONTEND_OR_C03_OR_MATCH_CHANGE

## 9. Publication

After all gates pass:

1. commit the backend correction coherently on the existing backend feature branch;
2. push normally without force;
3. independently fetch back and verify exact backend SHA/tree equality;
4. verify the frontend branch still equals its immutable SHA/tree;
5. publish the report below to the authority branch as a normal descendant of the launch checkpoint;
6. append the correction evidence to EXECUTION_LEDGER.md;
7. independently fetch back the authority branch and verify exact SHA/tree equality.

Required report:

    BRAND_CAMPAIGN_CANONICAL_OBJECTIVE_IMPLEMENTATION_CORRECTION_1_REPORT_V1.md

The report must include:

- authority input SHA/tree and required-file inventory;
- backend parent/final SHA/tree and clean-worktree state;
- frontend unchanged SHA/tree proof;
- exact changed-file inventory;
- exact final handoff contract and reason classification;
- Reporting fail-closed error contract;
- test/lint/build/startup/diff-check/secret-scan commands and results;
- migration count and proof of zero migration change;
- independent fetch-back proof;
- confirmation of no frontend, C03, Applicant Match, provider, production-data, merge, or deployment action;
- limitations and circuit-breaker disposition.

## 10. Final return

    BRAND_CAMPAIGN_CANONICAL_OBJECTIVE_IMPLEMENTATION_CORRECTION_1_V1

    RESULT =
    READY_FOR_PARENT_REVIEW
    | <EXACT_CIRCUIT_BREAKER>

    AUTHORITY_INPUT_SHA =
    AUTHORITY_INPUT_TREE =

    BACKEND_PARENT_SHA =
    d7ff0f33d12b45d378c02a9d2adfbc2e05eb6b18

    BACKEND_FINAL_SHA =
    BACKEND_FINAL_TREE =
    BACKEND_FETCH_BACK =

    FRONTEND_SHA =
    0662cd6963859d9e46abe53910b174d4826adaa3

    FRONTEND_TREE =
    02243e16ed283810936fdaee0601981fe316688d

    FRONTEND_UNCHANGED =

    NEW_MIGRATIONS =
    NONE

    HANDOFF_ACCEPTANCE =
    PASS | FAIL | NOT_REACHED

    REPORTING_FAIL_CLOSED_ACCEPTANCE =
    PASS | FAIL | NOT_REACHED

    BACKEND_TESTS =
    LINT =
    BUILD =
    STARTUP_SMOKE =
    SECRET_SCAN =

    FRONTEND_CHANGED =
    NO

    C03_CHANGED =
    NO

    APPLICANT_MATCH_CHANGED =
    NO

    PRODUCTION_DATA_ACCESSED =
    NO

    MERGE =
    NOT_PERFORMED

    DEPLOYMENT =
    NOT_PERFORMED

    AUTHORITY_REPORT_SHA =
    AUTHORITY_REPORT_TREE =
    AUTHORITY_FETCH_BACK =

    NEXT_BOUNDARY =
    PARENT_PROGRAM_ORCHESTRATOR_FINAL_ACCEPTANCE_REVIEW_ONLY
