# Brand Campaign Canonical Objective Unblock — Preflight Report V1

Authority result: `BRAND_CAMPAIGN_CANONICAL_OBJECTIVE_UNBLOCK_PREFLIGHT_REPORT_V1`

Status: `PREFLIGHT_ACCEPTED_IMPLEMENTATION_NOT_STARTED`

Date: 2026-09-16 (Asia/Calcutta)

Scope: Brand-side Campaign authority only. This publication defines the Campaign-owned objective contract and a finite implementation plan. It does not alter backend/frontend source, create or run a migration, start Applicant Match P1, merge development, call a provider/model, or deploy.

## 1. Immutable input and review boundary

The complete Applicant Match authority package was read from:

- repository: `Piyush1087/dummy_tcs`
- branch: `program/campaign-applicant-ai-match-v1-authority`
- commit: `f3f2cf5869c29cbb2ed3433088d6555d69b4575b`
- tree: `4763ea120cc66554cfb553c95a5b50c75e7d0c73`
- path: `docs/ai-collaboration/campaign-page/campaign-applicant-ai-match-v1/`

The corrected Applicant Match P0 and its ledger were treated as the consumer contract and blocker record. This report does not rewrite Applicant Match authority. It supplies the missing upstream Brand Campaign authority.

The executable-current-state audit used these clean, fetched Portfolio bases because both already contain the accepted Brand Campaign commits and the downstream C03 implementation:

| Repository | Base commit | Tree | Accepted Campaign ancestry |
|---|---|---|---|
| `Piyush1087/creator-commerce-backend-v2-clone` | `aaae1e3062137eda30e13e2fd7bcddbb1b239842` | `458517fa01a50f43f0b1cd8a948767e4f7600d50` | `29224609d18e876776841802a47fc54434b82ceb` and reconciliation `f7eb11bc72051f034f7d46ff2ad5c6b4d4b9e0fd` are ancestors |
| `Piyush1087/creator-commerce-frontend-v2-clone` | `9631e8b261f02f331dcf84f09dfd61dcc28eea83` | `25a89b63cec1a576ef605076c717a7cc447e5acc` | `d39c5ee8d9763882359148dd77e34c72dd6a5061` is an ancestor |

Campaign Reporting convergence commits `ebe1b4a8faa6dab59fb924b4c42be8f9e3f1e6f2` and `3d04cd9c84585218fcdc0f1412662a165c38400c` need not be merged into these bases: their accepted Campaign/Instagram parents are already in the Portfolio ancestry, and Reporting authority itself stopped at `CAMPAIGN_OBJECTIVE_AUTHORITY_GAP` without objective implementation.

## 2. Executable objective reconciliation

No currently executable representation is the Product contract `AWARENESS | TRUST | ASSETS | ACTION`.

| Surface | Executable representation | Current behavior | Authority classification |
|---|---|---|---|
| Prisma enum `CampaignObjective` | `PULSE | PROOF | PUSH | PRODUCTION` | Created by Brand Centre migration; no accepted Campaign canonical persistence owner was found on the audited UCE strategy path. | Legacy naming; compatibility-only. |
| Canonical wizard backend schema/readiness | `PULSE | PROOF | PRODUCTION | PUSH` | Validates autosave/publish payloads and selects KPIs. | Legacy canonical-wizard vocabulary; compatibility-only after migration. |
| Canonical wizard frontend contracts/cards | `PULSE | PROOF | PRODUCTION | PUSH` | Frontend labels visually associate the values with Awareness, Trust, Assets and Action. | Compatibility-only. Labels are not an accepted executable mapping. |
| `UceCampaignObjective` | `BRAND_AWARENESS | TRAFFIC_CLICKS | SALES_CONVERSIONS` | Non-null `UceCampaignStrategy.coreObjective`; used by legacy create/edit/filter/list/read/reporting APIs. | Legacy UCE vocabulary; compatibility-only. |
| Canonical publish adapter | P values to three-value UCE enum | `PUSH -> SALES_CONVERSIONS`; every other P value -> `BRAND_AWARENESS`. | Lossy adapter; prohibited as canonical authority. |
| `UceCampaign.canonicalDefinition` JSON | version `1.2`, includes the selected P value | Canonical-draft autosave and publish preserve wizard JSON. | Historical input evidence only; not a typed, immutable Campaign objective authority. |
| `UceCampaignStrategy.platformDeliverables` JSON | `canonicalObjective: <P value>` | Canonical publish duplicates the P value in compatibility JSON. | Compatibility payload only; not authoritative. |
| Campaign list/shell/page APIs | three-value `coreObjective` | Filters and renders the legacy UCE enum. | Compatibility read surface. |
| Campaign application projection | `campaign.strategy.coreObjective` | Application eligibility projects the three-value legacy value. | Incorrect source for the Product objective; must be replaced for Snapshot V2. |
| C03 Application submit | projected `campaign.objective` | Freezes that legacy value into `application_snapshot.campaignContext.objective`. | Immutable V1 historical snapshot only. Never reinterpret. |
| Creator brief pack | snapshot `campaignContext.objective` | Reads immutable submitted application context. | Historical V1 consumer; never rewrite. |
| `UceCampaignReportingSnapshot.primaryObjective` | three-value UCE enum | Canonical publish creates a legacy snapshot through the lossy adapter. | Historical compatibility-only and not a canonical objective source. |

The P labels are suggestive but cannot authorize `PULSE -> AWARENESS`, `PROOF -> TRUST`, `PRODUCTION -> ASSETS`, or `PUSH -> ACTION`. The three-value enum cannot express all four Product meanings. Neither vocabulary may be translated into the canonical field automatically.

### 2.1 Current endpoint and data-flow inventory

The audited executable flows are:

- Legacy create: `POST /api/v1/brand-uce/campaigns/wizard` accepts `marketing_objective` in the three-value enum, persists `UceCampaignStrategy.coreObjective`, and creates a reporting snapshot with the same value.
- Legacy draft edit: `PATCH /api/v1/brand-uce/campaigns/{campaignId}/wizard` accepts the same three-value `marketing_objective` and updates `coreObjective`.
- Legacy list/filter/read: `GET /api/v1/brand-uce/campaigns`, `GET /api/v1/brand-uce/campaigns/{campaignId}`, and Campaign page/workspace queries filter/project `strategy.coreObjective`.
- Transitional canonical create: `POST /api/v1/brand-uce/campaigns/canonical-wizard` validates a P-valued `strategy.core_objective` and publishes through the lossy adapter.
- Canonical draft create/read/autosave/publish: `POST /campaigns/canonical-drafts`, `GET /campaigns/canonical-drafts/{campaignId}`, `PATCH /campaigns/canonical-drafts/{campaignId}/field`, and `POST /campaigns/canonical-drafts/{campaignId}/publish` preserve the P value in `canonicalDefinition`; publish writes the lossy three-value strategy/reporting values.
- Canonical readiness: `GET /campaigns/canonical-drafts/{campaignId}/readiness` reads a P value and resolves a P-keyed KPI table.
- Lifecycle publish/go-live: `POST /campaigns/{campaignId}/publish` and `POST /campaigns/{campaignId}/go-live` do not supply a missing canonical Product objective fence.
- Application read/submit: the Campaign application projection selects `strategy.coreObjective`; Application submit copies the projected Campaign context into the immutable snapshot.
- Frontend canonical wizard, draft client, autosave, readiness and summaries send/render P values. Campaign list filters and legacy contracts send/render the three-value enum. Campaign page details render the server objective as an untyped string.

The implementation must cover every item above: canonical flows move to the new contract; explicitly deprecated legacy flows stay isolated and cannot establish canonical authority.

## 3. Canonical Campaign objective contract

Brand Campaign now owns exactly this Product contract:

```text
BrandCampaignObjectiveV1 = AWARENESS | TRUST | ASSETS | ACTION
```

There are no aliases in the canonical type. `PULSE`, `PROOF`, `PRODUCTION`, `PUSH`, `BRAND_AWARENESS`, `TRAFFIC_CLICKS`, and `SALES_CONVERSIONS` are invalid values at every canonical write boundary.

### 3.1 Persistence contract

The finite backend implementation shall add these enums and fields:

```prisma
enum UceCanonicalCampaignObjective {
  AWARENESS
  TRUST
  ASSETS
  ACTION
}

enum UceCampaignObjectiveAuthorityState {
  CANONICAL
  REAUTHOR_REQUIRED
}

model UceCampaignStrategy {
  // existing ownership and strategy fields remain
  canonicalObjective           UceCanonicalCampaignObjective?       @map("canonical_objective")
  canonicalObjectiveVersion    Int                                  @default(0) @map("canonical_objective_version")
  objectiveAuthorityState      UceCampaignObjectiveAuthorityState   @default(REAUTHOR_REQUIRED) @map("objective_authority_state")
  canonicalObjectiveRevisionId String?                              @map("canonical_objective_revision_id")

  // legacy compatibility only; made nullable so canonical writes need no invented translation
  coreObjective UceCampaignObjective? @map("core_objective")
}

model UceCampaignObjectiveRevision {
  id             String                        @id @default(uuid()) @map("objective_revision_id")
  campaignId     String                        @map("campaign_id")
  brandProfileId String                        @map("brand_profile_id")
  version        Int                           @map("objective_version")
  objective      UceCanonicalCampaignObjective
  source         UceCampaignObjectiveRevisionSource
  actorUserId    String                        @map("actor_user_id")
  createdAt      DateTime                      @default(now()) @map("created_at")

  @@unique([campaignId, version])
  @@unique([campaignId, id])
  @@index([brandProfileId, campaignId])
  @@map("uce_campaign_objective_revision")
}

enum UceCampaignObjectiveRevisionSource {
  INITIAL_CANONICAL_AUTHORING
  EXPLICIT_REAUTHOR
}
```

The migration shall enforce database constraints equivalent to:

- `CANONICAL` requires non-null objective, revision id, and version greater than zero.
- `REAUTHOR_REQUIRED` requires null objective, null revision id, and version zero.
- the current strategy revision must belong to the same Campaign and brand fence;
- `(campaign_id, objective_version)` is unique and monotonically incremented by the serialized command;
- revision rows are append-only: update/delete is rejected by a database guard;
- new Campaign publish and objective-dependent lifecycle transitions require `CANONICAL`.

The authoritative scalar is `UceCampaignStrategy.canonicalObjective`, whose provenance and immutable version are the referenced revision row. `canonicalDefinition`, `platformDeliverables`, `coreObjective`, and reporting snapshots are explicitly non-authoritative.

### 3.2 Campaign API contract

All new or versioned canonical APIs use:

```json
{
  "objective": {
    "state": "CANONICAL",
    "value": "AWARENESS",
    "version": 1,
    "revisionId": "uuid"
  }
}
```

Unresolved existing Campaigns read as:

```json
{
  "objective": {
    "state": "REAUTHOR_REQUIRED",
    "value": null,
    "version": 0,
    "revisionId": null
  }
}
```

Canonical create/autosave/publish and edit accept only `strategy.objective` with a `BrandCampaignObjectiveV1` value. The old request key `strategy.core_objective` and all old enum values remain valid only on explicitly deprecated compatibility endpoints. They cannot populate, update, or infer the canonical field.

The explicit existing-row recovery command is:

```http
POST /api/v1/brand-uce/campaigns/{campaignId}/objective/reauthor
Idempotency-Key: <required>

{
  "contract": "BRAND_CAMPAIGN_OBJECTIVE_REAUTHOR_V1",
  "objective": "AWARENESS",
  "expectedState": "REAUTHOR_REQUIRED",
  "expectedVersion": 0
}
```

It requires the existing Campaign owner/manager edit authority, the composite brand/Campaign ownership fence, the Campaign lifecycle lock, a transaction-scoped idempotency record, compare-and-set of state/version, one append-only revision, current-strategy update, and an auditable domain event. Replays return the original result; key/payload mismatch is a conflict. A concurrent or stale request returns `409 OBJECTIVE_REVISION_CONFLICT`.

The UI must show all four Product values with no legacy preselection. For existing drafts, the user selects before publish. For existing published/live/paused Campaigns, an explicit confirmation flow invokes re-authoring. Completed/archived Campaigns may remain unresolved unless an authorized Product flow explicitly reopens them; their immutable history is never changed.

### 3.3 C03 ApplicationSnapshot V2 freeze contract

C03 shall freeze exactly this Campaign-owned projection, obtained from the Campaign application-read boundary inside the application submit transaction:

```ts
type CampaignObjectiveSnapshotV2 = Readonly<{
  value: "AWARENESS" | "TRUST" | "ASSETS" | "ACTION";
  version: number;       // positive UceCampaignObjectiveRevision.version
  revisionId: string;    // immutable UceCampaignObjectiveRevision.id
}>;
```

Source proof:

- value: `UceCampaignStrategy.canonicalObjective`;
- version: `UceCampaignStrategy.canonicalObjectiveVersion`;
- revision identity: `UceCampaignStrategy.canonicalObjectiveRevisionId`;
- ownership: Brand Campaign UCE strategy/revision under the composite Campaign/brand fence.

The Campaign application projection returns this only when `objectiveAuthorityState = CANONICAL` and the current strategy and revision agree. Otherwise the projection returns a typed unavailable reason `CAMPAIGN_OBJECTIVE_REAUTHOR_REQUIRED`; it must not fall back to `coreObjective` or JSON.

C03 copies the three fields byte-for-byte into `ApplicationSnapshot V2.campaignContext.objective`. C03 does not map, normalize, or query them later. Existing ApplicationSnapshot V1 rows keep their original legacy objective forever and are never reclassified. Applicant Match remains unavailable for V1 and for V2 submissions missing the canonical objective fence.

This publication establishes the missing objective authority. It does not authorize C03 or Applicant Match source changes.

## 4. Existing-row and compatibility policy

### 4.1 Safe data treatment

All rows that predate the canonical migration are initialized as:

```text
objective_authority_state = REAUTHOR_REQUIRED
canonical_objective = NULL
canonical_objective_version = 0
canonical_objective_revision_id = NULL
```

There is no automatic backfill, including when a row contains a P value in JSON or a three-value `core_objective`. The only canonicalization path is an explicit authorized choice of one Product value. This is fail-closed and preserves the possibility that historical UI labels or lossy adapters do not represent the user's intended Product meaning.

While unresolved:

- canonical Campaign reads disclose `REAUTHOR_REQUIRED`;
- canonical publish/go-live and objective-dependent read capabilities fail closed with `CAMPAIGN_OBJECTIVE_REAUTHOR_REQUIRED`;
- new Application submission is unavailable where C03 V2 requires the canonical fence;
- existing Campaign, application, reporting, and collaboration history remains readable through compatibility projections;
- no immutable application snapshot or historical reporting snapshot is rewritten.

### 4.2 Legacy classification

- `PULSE | PROOF | PRODUCTION | PUSH`: legacy canonical-wizard vocabulary, compatibility-only.
- `BRAND_AWARENESS | TRAFFIC_CLICKS | SALES_CONVERSIONS`: legacy UCE strategy/list/reporting vocabulary, compatibility-only.
- the current `legacyObjective()` adapter: prohibited from canonical paths and deleted only during the authorized implementation phase.
- existing `UceCampaignReportingSnapshot.primaryObjective`: historical compatibility-only; not a Product objective.

Deprecated read responses may expose a separately named `legacyObjective` with `authority: "COMPATIBILITY_ONLY"`. They must never label it `canonical`, use it for C03 V2, Applicant Match, or new Reporting decisions. Deprecated filters may continue to filter the legacy field during a bounded compatibility window; the new canonical filter targets only `canonicalObjective`.

The compatibility window ends only after telemetry proves no active supported caller sends old write values. Removal is a separately authorized migration. No dual-write is allowed because dual-writing would require the forbidden mapping.

## 5. Schema and migration plan

No migration is created by this preflight. The implementation uses additive, deploy-safe stages:

1. **Schema A — types and revision table.** Create `UceCanonicalCampaignObjective`, authority-state and revision-source enums; create the append-only revision table with composite Campaign/brand foreign keys and unique constraints.
2. **Schema B — strategy fence.** Add nullable canonical value/revision columns and non-null state/version defaults. Make legacy `core_objective` nullable. Add consistency check and indexes. Explicitly set every preexisting strategy row to `REAUTHOR_REQUIRED/NULL/0/NULL` in the migration; do not inspect JSON to backfill.
3. **Backend contract deploy.** Add the typed canonical projection, new create/edit/reauthor commands, idempotency, locks, events, and fail-closed capability reasons. Preserve legacy reads behind explicit compatibility names.
4. **Frontend contract deploy.** Replace P-valued Product controls with the four Product values, show re-authoring state and confirmation, and update create/edit/list/page/readiness contracts.
5. **C03 dependency handoff.** After the Campaign contract is deployed and accepted, C03 may separately implement ApplicationSnapshot V2 against the exact projection above. This is outside this authority publication.
6. **Compatibility retirement.** After supported callers and historical read needs are proven, publish a separate retirement authority before dropping old enum/columns or adapters.

Every schema stage must pass `prisma format`, `prisma validate`, `prisma generate`, migration-history/inventory checks, PostgreSQL migration application from an empty database, and upgrade from a representative pre-migration database.

## 6. Backend and frontend implementation surface

### Backend base

Implement from `aaae1e3062137eda30e13e2fd7bcddbb1b239842` / tree `458517fa01a50f43f0b1cd8a948767e4f7600d50`, or a normal descendant that proves those accepted Campaign ancestors are still present.

Minimum owned surfaces:

- `prisma/schema.prisma` and new forward-only migration directories;
- canonical wizard/draft schemas and readiness resolver;
- canonical Campaign create/publish service (remove the lossy adapter from canonical writes);
- legacy Campaign DTO/service/list/query projections (rename and isolate compatibility fields);
- Campaign application-read projection (canonical objective availability fence);
- lifecycle/readiness gates and objective revision/idempotency event persistence;
- contract, service, PostgreSQL, authorization, contention, migration, and architecture tests.

### Frontend base

Implement from `9631e8b261f02f331dcf84f09dfd61dcc28eea83` / tree `25a89b63cec1a576ef605076c717a7cc447e5acc`, or a normal descendant with the accepted Campaign merge ancestor.

Minimum owned surfaces:

- canonical Campaign wizard types, Zod schema, request mapping, draft client and autosave/readiness controller;
- objective cards and summaries;
- Campaign list/page/detail contracts, formatting, filters and unavailable-state presentation;
- explicit re-authoring UI and conflict/idempotent-retry behavior;
- API contract and component/model/accessibility tests.

## 7. Required verification

Backend acceptance must include:

- enum exhaustiveness proving exactly four canonical values and rejecting every legacy value;
- canonical create, autosave, edit, publish, read, list and filter round trips for each value;
- all preexisting rows migrate to `REAUTHOR_REQUIRED` with no revision and no inferred value;
- re-author command authorization, brand/Campaign fence, lifecycle lock, idempotent replay, mismatch, contention, and monotonically increasing version tests;
- revision update/delete database guard tests;
- consistency/check/foreign-key violation tests;
- canonical projection returns exact value/version/revision and fails closed for unresolved or inconsistent rows;
- legacy endpoints cannot write the canonical field and canonical endpoints cannot accept legacy values;
- no canonical path creates or requires a lossy legacy reporting objective;
- existing ApplicationSnapshot V1 and reporting rows remain byte-for-byte unchanged;
- C03 consumer contract fixture for the exact Snapshot V2 objective shape, without implementing C03 in this phase.

Frontend acceptance must include:

- four cards and request values exactly `AWARENESS`, `TRUST`, `ASSETS`, `ACTION`;
- no P or three-value Product control, preselection, or canonical label;
- draft hydration and publish for all four values;
- unresolved existing Campaign displays a blocking re-author prompt and no guessed selection;
- re-author success, retry, conflict, forbidden, stale-version and accessibility behavior;
- canonical list/page/detail/filter labels and explicit compatibility-only rendering where retained;
- contract failure when an unknown or legacy value appears in a canonical response.

Repository acceptance must include clean builds, focused and full relevant test suites, schema/migration inventory evidence, clean worktrees, normal pushes, and independent fetch-back SHA/tree equality for backend, frontend, and authority publications.

## 8. Circuit breakers

Stop the objective implementation and return the named breaker if any condition occurs:

| Circuit breaker | Trigger |
|---|---|
| `CAMPAIGN_CANONICAL_OBJECTIVE_CONTRACT_DIVERGENCE` | Any canonical surface uses a value outside the exact four-value Product enum or renames a value. |
| `CAMPAIGN_OBJECTIVE_LOSSY_MAPPING_REQUIRED` | A proposed path requires translating P or three-value legacy values into the canonical field. |
| `CAMPAIGN_OBJECTIVE_REAUTHOR_AUTHORITY_MISSING` | Existing rows cannot be re-authored by a proven Campaign owner/manager authority and composite ownership fence. |
| `CAMPAIGN_OBJECTIVE_REVISION_INTEGRITY_GAP` | Value/version/revision cannot be atomically serialized and proven immutable. |
| `CAMPAIGN_OBJECTIVE_COMPATIBILITY_LEAK` | A compatibility field can reach C03 V2, Applicant Match, new Reporting authority, or a canonical API response as authoritative. |
| `CAMPAIGN_OBJECTIVE_MIGRATION_SAFETY_GAP` | Upgrade would infer a value, rewrite immutable history, fail on existing rows, or require a destructive/non-forward-only operation. |
| `CAMPAIGN_OBJECTIVE_BASE_DIVERGENCE` | Implementation bases no longer contain the accepted Brand Campaign ancestry or materially change the audited objective surfaces without renewed preflight. |

Applicant Match retains its own blockers. Until a separately authorized C03 implementation publishes a valid ApplicationSnapshot V2 using this contract, Match must continue to return `APPLICANT_AI_MATCH_UNSUPPORTED_SNAPSHOT` for legacy snapshots and must not start P1 on them.

## 9. Finite implementation sequence and convergence DAG

```text
accepted Brand Campaign backend: 29224609 + f7eb11bc
                                     \
backend Portfolio base aaae1e30 ------> Campaign objective backend branch
                                         [Schema A -> Schema B -> API -> tests]
                                                                  \
                                                                   +--> normal Campaign objective convergence
                                                                  /
frontend Portfolio base 9631e8b2 -----> Campaign objective frontend branch
                                         [contracts -> UI -> tests]

Campaign objective convergence + this authority acceptance
    -> separately authorized C03 ApplicationSnapshot V2 implementation
    -> corrected Applicant Match P0 revalidation
    -> only then Applicant Match P1 authorization
```

The finite execution order is:

1. Re-fetch/prune and verify the exact implementation bases and accepted Campaign ancestors.
2. Implement and prove Schema A and Schema B without backfill inference.
3. Implement the backend canonical projection and commands, then the explicit compatibility boundary.
4. Implement the frontend four-value authoring and re-authoring flows.
5. Run the complete verification matrix and adversarial migration/contention tests.
6. Publish backend and frontend descendant commits by normal push; independently fetch back and verify SHA/tree.
7. Publish an implementation acceptance record on this authority line.
8. Hand the exact Campaign projection to C03. Do not modify C03 in the Campaign phase.
9. After C03 V2 publication, rerun Applicant Match P0 against the new immutable checkpoint. Do not infer P1 authorization from this preflight.

## 10. Disposition

The Brand Campaign canonical-objective authority gap is resolved at the contract/preflight level: the only canonical executable values are `AWARENESS | TRUST | ASSETS | ACTION`, and C03 has an exact Campaign-owned value/version/revision source to freeze.

Implementation has not started. Existing Campaign rows remain semantically unresolved until explicit re-authoring. Therefore this report does not, by itself, clear Applicant Match P1 or alter the corrected Applicant Match circuit-breaker state.
