# Canonical Reconciliation Gate C Campaign Objectives Preflight — Parent Acceptance V1

~~~text
PARENT_ACCEPTANCE_RESULT =
ACCEPTED_WITH_MANDATORY_MECHANICAL_CORRECTIONS

ACCEPTANCE_SCOPE =
GATE_C_CAMPAIGN_OBJECTIVES_READ_ONLY_CONVERGENCE_PREFLIGHT

IMPLEMENTATION_CAN_BEGIN =
YES

PARENT_DECISIONS_REQUIRED_BEFORE_IMPLEMENTATION =
NO

PRODUCT_CHANGE =
NO

ARCHITECTURE_DECISION_CHANGE =
NO

BLOCKERS =
NONE
~~~

## Parent decision

The Gate C Campaign Objectives read-only convergence preflight is accepted.

The Campaign Objectives authority chain is complete and immutable. The accepted semantic donors can be transplanted onto the exact Gate B C06 bases without reopening Product or architecture and without resuming Campaign Performance/Reporting, Applicant AI Match, or Marketplace recommendation-score work.

The preflight's two required corrections are mechanical and mandatory:

1. reissue the two accepted migration SQL payloads as new append-only migrations after the existing 106 migrations;
2. merge only the accepted enum and canonical-definition-hash additions into the Gate B Prisma schema instead of replacing it with the older donor schema.

## Accepted Gate C starting bases

### Backend

~~~text
REPOSITORY =
Piyush1087/creator-commerce-backend-v2-clone

STARTING_BRANCH =
reconcile/mvp-canonical-application-v1-gate-b-c06-backend

STARTING_COMMIT =
7883286d8e74b1759518c758c9683fc926374441

STARTING_TREE =
faaaa49f82ca93c482bedbb0f9b0cf3385a1bada

PRISMA_SCHEMA_BLOB =
8d5833ca756b837cdaaafdc4fe9c746676d63d8a

MIGRATION_COUNT =
106

MIGRATION_SUBTREE =
3894d6d2009fdbdf6bce94708d955c24cf5804ce
~~~

### Frontend

~~~text
REPOSITORY =
Piyush1087/creator-commerce-frontend-v2-clone

STARTING_BRANCH =
reconcile/mvp-canonical-application-v1-gate-b-c06-frontend

STARTING_COMMIT =
b10a23f67ce9a813cd5664e45e31870c6bd2a7e1

STARTING_TREE =
ecdcf27c9e4271342c413162bd2993138e4b263c

PROTECTED_CAMPAIGN_DETAIL_WORKSPACE_BLOB =
62cd7684410144de816363e0f943e244da2225be
~~~

## Accepted semantic donors

~~~text
BACKEND_DONOR_COMMIT =
3c1c523a178c452023add9745628ecff8a6e5e55

BACKEND_DONOR_TREE =
0138efccc1d83ad5c558571b971731e0c45499ec

BACKEND_DONOR_PARENT =
d7ff0f33d12b45d378c02a9d2adfbc2e05eb6b18

BACKEND_CUMULATIVE_SEMANTIC_PATHS =
26

FRONTEND_DONOR_COMMIT =
0662cd6963859d9e46abe53910b174d4826adaa3

FRONTEND_DONOR_TREE =
02243e16ed283810936fdaee0601981fe316688d

FRONTEND_DONOR_PARENT =
9631e8b261f02f331dcf84f09dfd61dcc28eea83

FRONTEND_SEMANTIC_PATHS =
19
~~~

The donors are semantic sources only. Wholesale merges, cherry-pick chains, and donor-history replay are prohibited.

## Controlling Campaign Objective behavior

~~~text
CANONICAL_OBJECTIVES =
AWARENESS
TRUST
ASSETS
ACTION

LEGACY_REFERENCE_ONLY =
PULSE
PROOF
PRODUCTION
PUSH

DATABASE_COMPATIBILITY_ONLY =
BRAND_AWARENESS
TRAFFIC_CLICKS
SALES_CONVERSIONS

LOSSY_MAPPING =
PROHIBITED
~~~

Accepted behavior:

- canonical create, autosave, readiness, publish, read, list/filter, and Campaign-owned C03 handoff use only the four canonical objectives;
- persisted legacy values remain unchanged;
- recognized legacy values fail closed as `LEGACY_OBJECTIVE_UNRESOLVED`;
- missing or unknown noncanonical values fail closed as `CANONICAL_OBJECTIVE_REQUIRED`;
- definition-fence failure returns `CAMPAIGN_DEFINITION_INTEGRITY_INVALID`;
- bounded frontend presentation is `Objective unavailable`;
- no remediation CTA, reauthor endpoint, new lifecycle state, or lossy translation is authorized;
- canonical objectives remain unavailable to legacy Reporting, which must reject them before metric projection or snapshot writes.

## Mandatory migration correction

The accepted donor SQL blobs are:

~~~text
ENUM_MIGRATION_DONOR_BLOB =
a8215f86e2f48c0a7f0f94a4aaad48d745795699

DEFINITION_HASH_MIGRATION_DONOR_BLOB =
b900744912001e004523d471570f48f6f54c050b
~~~

The donor directory names sort before an already-applied Gate B migration and must not be transplanted.

Required target identities:

~~~text
MIGRATION_107 =
20260917130000_campaign_objective_v1_enum

MIGRATION_108 =
20260917131000_campaign_definition_hash

EXPECTED_MIGRATION_COUNT =
108
~~~

Only directory identities may change. The SQL content must remain byte-identical to the accepted donor payloads. All existing 106 migration directories and files must remain byte-identical.

## Mandatory schema correction

The Gate B schema must remain the merge base.

Only these accepted additions are authorized:

- enum labels `AWARENESS`, `TRUST`, `ASSETS`, and `ACTION` on `UceCampaignObjective`;
- nullable `canonicalDefinitionHash` mapped to `canonical_definition_hash` on `UceCampaign`.

All Gate B Media Kit state and the corrected C04 Prisma relation state must remain unchanged.

## Reporting and C03 boundary

Exactly the accepted two-file Reporting guard/test delta may be included solely to fail closed before legacy metric projection or snapshot creation.

No Reporting Product semantics, metrics, frontend Reporting UI, historical Reporting branch, or Reporting resumption is authorized.

Campaign may expose the complete accepted `CampaignObjectiveHandoffV1` through its application-read projection. C03 source and persistence must remain unchanged.

## Required implementation branches

~~~text
BACKEND_BRANCH =
reconcile/mvp-canonical-application-v1-gate-c-campaign-objectives-backend

FRONTEND_BRANCH =
reconcile/mvp-canonical-application-v1-gate-c-campaign-objectives-frontend

AUTHORITY_BRANCH =
reconcile/mvp-canonical-application-v1-gate-c-campaign-objectives-authority
~~~

All were independently confirmed absent before this acceptance.

## Required validation

Implementation acceptance requires:

- exact backend and frontend path allowlists;
- protected Gate B and C06 boundaries unchanged;
- Prisma generate and validate;
- objective, definition-fence, readiness, create, C03 handoff, and Reporting fail-closed focused tests;
- C04 and C06 preservation suites;
- clean PostgreSQL 0→108;
- populated PostgreSQL 106→108 with all legacy values preserved and no mapping/backfill;
- migration uniqueness, order, checksum, and original-106 identity proof;
- zero Reporting projection/snapshot writes for canonical objectives;
- zero provider calls and unauthorized financial writes;
- complete backend and frontend suites;
- backend lint/build, Campaign readiness, and Intelligence contract verification;
- frontend typecheck/lint/autosave/build;
- repository-defined responsive, keyboard/focus, and accessibility tests;
- exact branch publication and independent fetch-back.

The coordinated integrated-browser gate may remain deferred to final whole-application acceptance if the seeded role/session/browser fixture is still unavailable. Repository-defined UI tests are mandatory.

## Preserved exclusions

~~~text
C06_REOPENED =
NO

CAMPAIGN_PERFORMANCE_REPORTING_RESUMED =
NO

APPLICANT_AI_MATCH_RESUMED =
NO

MARKETPLACE_RECOMMENDATION_SCORE_ENTERED =
NO

CREATOR_CHAT_ENTERED =
NO

DEPLOYMENT_AUTHORIZED =
NO

FINAL_CANONICAL_PUBLICATION_AUTHORIZED =
NO
~~~

## Next authorized boundary

~~~text
NEXT_BOUNDARY =
ONE BOUNDED GATE C CAMPAIGN OBJECTIVES SEMANTIC CONVERGENCE IMPLEMENTATION RUN

RESULT_AFTER_RUN =
PARENT REVIEW ONLY
~~~

Implementation must stop and return without publication if authority, base, protected-object, allowlist, migration, database, validation, or paused-lane boundaries fail.
