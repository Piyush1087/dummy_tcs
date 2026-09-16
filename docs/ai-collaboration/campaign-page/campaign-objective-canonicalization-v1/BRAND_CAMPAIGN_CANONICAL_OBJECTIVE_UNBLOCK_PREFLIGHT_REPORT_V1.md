# Brand Campaign Canonical Objective — Preflight Correction 1 Report V1

Authority result: `BRAND_CAMPAIGN_CANONICAL_OBJECTIVE_PREFLIGHT_CORRECTION_1_REPORT_V1`

Status: `CORRECTED_PREFLIGHT_ACCEPTED_IMPLEMENTATION_NOT_STARTED`

Date: 2026-09-16 (Asia/Calcutta)

This document supersedes every conflicting design in its parent version at commit `3f102f45a6819e62842dd0f7b9fc64f578486274`. In particular, it rejects a dedicated objective revision table, a second objective authority, a persisted `REAUTHOR_REQUIRED` state, a re-author endpoint, and a speculative Brand-facing remediation UI.

Scope remains Brand-side Campaign authority and documentation only. No backend/frontend source was modified, no migration was created or run, no C03 or Applicant Match work began, no development branch was merged, no provider/model was called, and nothing was deployed.

## 1. Immutable correction input

The complete parent package was fetched, verified, and read from:

- repository: `Piyush1087/dummy_tcs`
- branch: `program/campaign-objective-canonicalization-v1-authority`
- commit: `3f102f45a6819e62842dd0f7b9fc64f578486274`
- tree: `be9897f9fc77a268c4f70919eee6128900d44c37`
- path: `docs/ai-collaboration/campaign-page/campaign-objective-canonicalization-v1/`

The executable audit bases remain:

| Repository | Commit | Tree |
|---|---|---|
| `Piyush1087/creator-commerce-backend-v2-clone` | `aaae1e3062137eda30e13e2fd7bcddbb1b239842` | `458517fa01a50f43f0b1cd8a948767e4f7600d50` |
| `Piyush1087/creator-commerce-frontend-v2-clone` | `9631e8b261f02f331dcf84f09dfd61dcc28eea83` | `25a89b63cec1a576ef605076c717a7cc447e5acc` |

The accepted Brand Campaign ancestry cited by the parent preflight remains present. This correction changes the planned contract, not the implementation bases or convergence ancestry.

## 2. Corrected authority decision

There is one Campaign aggregate and one objective authority:

```text
UceCampaign
  -> exactly one UceCampaignStrategy (primary key campaignId)
       -> coreObjective: UceCampaignObjective
```

The canonical Product values are exactly:

```text
CAMPAIGN_OBJECTIVE_V1 = AWARENESS | TRUST | ASSETS | ACTION
```

The existing `UceCampaignObjective` enum is extended additively. The existing `UceCampaignStrategy.coreObjective` remains the single persisted objective field and the single Campaign objective authority.

Legacy values remain in the same enum only for compatibility:

- `BRAND_AWARENESS | TRAFFIC_CLICKS | SALES_CONVERSIONS`
- `PULSE | PROOF | PRODUCTION | PUSH` remain legacy wizard/validation values and, where the separate `CampaignObjective` enum exists, compatibility-only values.

No canonical API accepts a legacy value. No runtime or migration translates a legacy value to a canonical value. The visual resemblance between the P labels and the four Product meanings is not executable authority.

## 3. Proof that `coreObjective` can be reused safely

Reuse is accepted and required. A second `canonicalObjective` field is not permitted.

Exact source/schema evidence:

1. `UceCampaignStrategy.campaignId` is the model primary key and foreign key to `UceCampaign.id`; therefore there is at most one strategy/objective row per Campaign aggregate.
2. `UceCampaignStrategy.coreObjective` is already non-null and typed as `UceCampaignObjective`.
3. The originating UCE migration created `uce_campaign_strategy.core_objective` as a non-null `UceCampaignObjective` column and the strategy table primary key as `campaign_id`.
4. Legacy create and draft edit write `coreObjective`; list/filter/shell/page/reporting read it; canonical publish currently writes it through a lossy adapter; Campaign application-read projects it. The executable paths already converge on this field.
5. PostgreSQL enum evolution can add the four values without replacing the column, changing its ownership, creating a parallel field, or weakening nullability.
6. Existing editing fences are compatible with reuse: canonical autosave and legacy edit both require `DRAFT`, recheck `DRAFT` under the Campaign lifecycle lock, and publish requires `DRAFT`. Reuse does not grant a new edit path.

Audited locations on the backend base:

- `prisma/schema.prisma`: `UceCampaign`, `UceCampaignStrategy`, `UceCampaignObjective`, and `UceCampaignReportingSnapshot` definitions;
- `prisma/migrations/20260601120000_uce_universal_campaign_engine/migration.sql`: original enum, non-null `core_objective`, strategy primary key, and Campaign foreign key;
- `src/features/brand-uce/services/canonical-campaign-create.service.ts`: DRAFT-only autosave/publish with lock recheck, versioned `canonicalDefinition`, lossy adapter, strategy and reporting writes;
- `src/features/brand-uce/services/brand-uce-campaign.service.ts`: legacy create/edit/list/filter/shell/reporting and DRAFT-only edit checks;
- `src/features/brand-uce/services/campaign-query.service.ts` and `canonical-campaign-application-read.service.ts`: Campaign page and application projections;
- `src/features/campaign-applications/application-submit.service.ts`: immutable application context freeze.

The current defect is vocabulary and write-boundary divergence, not absence of an objective field. Adding a second field would create dual authority and reconciliation risk. Accordingly:

```prisma
enum UceCampaignObjective {
  // compatibility-only values retained
  BRAND_AWARENESS
  TRAFFIC_CLICKS
  SALES_CONVERSIONS

  // the only canonical values
  AWARENESS
  TRUST
  ASSETS
  ACTION
}

model UceCampaignStrategy {
  campaignId    String               @id @map("campaign_id")
  campaign      UceCampaign          @relation(fields: [campaignId], references: [id], onDelete: Cascade)
  coreObjective UceCampaignObjective @map("core_objective")
  // other existing strategy fields unchanged
}
```

The separate four-P `CampaignObjective` enum is not promoted. It may remain temporarily for compatibility consumers, but canonical code must not import or emit it.

## 4. General Campaign-definition fence

### 4.1 Current evidence

`UceCampaign.canonicalDefinition` is the existing whole-Campaign definition JSON. Canonical publish writes a version marker (`version: "1.2"`) into that JSON. Draft autosave may mutate it only while the Campaign is `DRAFT`; publish writes the final definition and changes status in the same Campaign-locked transaction. Non-draft objective editing is already rejected.

The audited schema has no persisted Campaign-definition hash and no immutable definition snapshot table/reference. The existing version marker alone is insufficient for C03 to prove that the definition it saw has not changed.

### 4.2 Smallest accepted additive fence

Add one general field to the Campaign aggregate, not to an objective-specific table:

```prisma
model UceCampaign {
  // existing fields unchanged
  canonicalDefinition     Json?   @map("canonical_definition")
  canonicalDefinitionHash String? @map("canonical_definition_hash") @db.VarChar(71)
}
```

No separate objective version, objective state, objective revision id, revision table, or objective ledger is added.

For a canonical definition:

- `definitionVersion` is the exact `canonicalDefinition.version` string;
- `definitionHash` is `sha256:` plus 64 lowercase hexadecimal characters over the UTF-8 bytes of the accepted deterministic canonical-JSON serialization of the complete definition;
- `definitionSnapshotRef` is the deterministic projection `uce-campaign-definition:<campaignId>:<definitionVersion>:<definitionHash>`; it need not be persisted as another column;
- canonical-definition contract `2.0` contains `strategy.objective` with one exact `CAMPAIGN_OBJECTIVE_V1` value;
- the final definition, hash, `coreObjective`, and transition out of `DRAFT` are written atomically under the existing Campaign lock;
- after the Campaign leaves `DRAFT`, existing editability restrictions prohibit changing the objective or canonical definition. Canonicalization must not introduce a bypass.

The serializer and hash helper are general Campaign-definition infrastructure. They must not contain objective-specific branching. The Campaign application projection recomputes the hash before exposure and fails closed on mismatch.

This is the minimum general fence needed by C03. If implementation proves that a current accepted general Campaign-definition hash already exists on a newer descendant base, reuse it and do not add the proposed column. Any request for a snapshot table or broader definition history requires renewed Campaign-SA authority.

## 5. Corrected canonical API contract

Canonical create, draft autosave, readiness, publish, read, list/filter, and any permitted canonical edit accept or return only:

```ts
type CampaignObjectiveV1 = "AWARENESS" | "TRUST" | "ASSETS" | "ACTION";
```

The canonical request field remains the strategy objective field appropriate to the existing endpoint shape; implementation should converge on `strategy.objective`. The persistence adapter writes the same value, unchanged, to `UceCampaignStrategy.coreObjective` and the versioned whole-Campaign definition. The lossy `legacyObjective()` function is removed from canonical paths.

Canonical read projection:

```ts
type CanonicalCampaignObjectiveProjection = Readonly<{
  objective: CampaignObjectiveV1;
  objectiveContract: "CAMPAIGN_OBJECTIVE_V1";
  campaignDefinitionVersion: string;
  campaignDefinitionSnapshotRef: string;
  campaignDefinitionHash: `sha256:${string}`;
}>;
```

The projection is available only when all of these are true:

- `coreObjective` is one of the four canonical values;
- the whole definition contains that same exact value;
- the definition version is an accepted canonical Campaign definition version;
- the stored and recomputed whole-definition hashes match;
- the Campaign is at a lifecycle point from which the existing application policy permits projection.

Otherwise canonical objective is unavailable. A bounded response reason `CAMPAIGN_OBJECTIVE_REAUTHOR_REQUIRED` may be returned for a compatibility-readable legacy Campaign, but it is not persisted, is not a Campaign state, is not a lifecycle status, and is not an objective authority.

There is no dedicated objective re-author endpoint. There is no new Brand-facing remediation or confirmation UI. Existing Campaign edit endpoints and lifecycle restrictions remain authoritative; a locked objective stays locked.

## 6. Legacy compatibility and existing Campaign treatment

### 6.1 Compatibility boundary

- Existing compatibility endpoints may continue to read and, only where already authorized, accept old enum labels during the bounded compatibility period.
- Canonical endpoints reject every old label at schema validation before persistence.
- Compatibility responses clearly identify old values as legacy and never populate `CanonicalCampaignObjectiveProjection` from them.
- Canonical list/filter paths filter the same `coreObjective` column but accept only the four canonical query values.
- Legacy reporting snapshots remain historical. New canonical publish writes its exact four-value `coreObjective` to any still-required reporting field typed by the additively extended shared enum; it performs no mapping.
- Existing ApplicationSnapshot V1 values remain byte-for-byte unchanged and are never reinterpreted.

### 6.2 Four-way existing-row disposition

Classification occurs through a controlled internal migration/pre-deploy audit, not through a user API or UI.

| Class | Required evidence | Treatment |
|---|---|---|
| Exact immutable four-value evidence | An accepted immutable Campaign-definition source contains one literal canonical value, is bound to the same Campaign, and is protected by an existing immutable/version fence sufficient to prove equality. P labels and three-value labels do not qualify. | An internal explicit repair may copy that exact value to `coreObjective` and establish/recompute the general definition hash. This is semantic equality repair, not objective editing. Record operational audit evidence. |
| Disposable non-production legacy Campaign | Environment/tenant and Product-approved operational evidence proves the Campaign is disposable and non-production. | Recreate/reseed using a canonical endpoint and four-value input. Do not map the old value. |
| Ambiguous legacy Campaign | Only P values, three-value labels, mutable JSON, or conflicting/unfenced evidence exists, and there is no proof it is a real production Campaign requiring Product adjudication. | Preserve compatibility-readable data; canonical objective projection returns unavailable with bounded reason `CAMPAIGN_OBJECTIVE_REAUTHOR_REQUIRED`. Do not mutate lifecycle or objective. |
| Proven real production ambiguous Campaign | Production provenance is proven but exact canonical meaning is not. | Stop and return `CAMPAIGN_PRODUCTION_OBJECTIVE_PARENT_PRODUCT_AUTHORITY_REQUIRED` for separate Parent Product authority. No repair, deletion, recreation, mapping, or Brand remediation flow. |

The audited current code does not create exact four-value evidence: canonical wizard data uses P values and `coreObjective` uses the three-value enum. Therefore no current row may be presumed eligible for exact repair merely because labels look similar.

### 6.3 Locked-objective rule

Internal repair is permitted only when it copies an exact already-immutable four-value meaning. It must not choose or change meaning. If the Campaign is non-draft and the proposed operation would require a semantic choice, it is not repair; it is an objective edit and is prohibited absent separate Parent Product and Campaign-SA authority.

## 7. C03 handoff contract

After Campaign implementation and separate C03 authorization, C03 freezes exactly:

```ts
type CampaignObjectiveHandoffV1 = Readonly<{
  objective: "AWARENESS" | "TRUST" | "ASSETS" | "ACTION";
  objectiveContract: "CAMPAIGN_OBJECTIVE_V1";
  campaignDefinition: Readonly<{
    version: string;
    snapshotRef: string;
    hash: `sha256:${string}`;
  }>;
}>;
```

Sources:

- objective: `UceCampaignStrategy.coreObjective` after exact canonical projection checks;
- contract: literal `CAMPAIGN_OBJECTIVE_V1`;
- definition version: `UceCampaign.canonicalDefinition.version`;
- snapshot reference: deterministic whole-Campaign definition reference described in section 4;
- hash: `UceCampaign.canonicalDefinitionHash`, recomputed and equality-checked before handoff.

C03 copies these values into its immutable ApplicationSnapshot V2 within its own accepted submission transaction. There is no `objectiveRevisionId`, no objective version counter, and no objective-specific persistence. C03 does not infer or map a value. This correction does not authorize C03 source work.

## 8. Corrected schema and migration plan

No migration is created by this preflight. The finite plan is:

1. Add `AWARENESS`, `TRUST`, `ASSETS`, and `ACTION` to the existing PostgreSQL/Prisma `UceCampaignObjective` enum. Retain old labels. Respect PostgreSQL enum migration transaction constraints and prove empty-database plus upgrade paths.
2. Add nullable general `uce_campaigns.canonical_definition_hash VARCHAR(71)` with a shape check: null or `^sha256:[0-9a-f]{64}$`. Do not add an objective table, objective field, objective state, or objective version.
3. Introduce Campaign definition contract `2.0` with canonical `strategy.objective`; implement deterministic whole-definition serialization/hash in general Campaign infrastructure.
4. Change canonical backend schemas, readiness configuration, create/autosave/publish/read/list/filter projections, and reporting write to the four values and direct `coreObjective` persistence. Remove the lossy adapter from canonical execution.
5. Keep legacy validators/routes explicitly compatibility-scoped. They cannot create definition `2.0`, a definition hash, or a canonical projection.
6. Run the four-way existing-row classification. The migration itself performs no lossy value update. Exact repairs and approved reseeds are controlled operational actions with evidence; production ambiguity triggers the Parent Product breaker.
7. Change frontend canonical contracts/cards/readiness/autosave/list/page labels and filters to the four values. Do not build objective remediation UI. Compatibility-readable legacy Campaigns show objective unavailable without offering an edit.
8. Prove the implementation, publish backend/frontend descendant commits normally, fetch them back independently, then publish Campaign implementation acceptance before any C03 handoff.

The schema keeps `coreObjective` non-null. Ambiguous rows retain their existing compatibility value in that field; availability is determined by the canonical projection predicate, not by nulling the field or persisting a parallel state.

## 9. Backend and frontend implementation surface

### Backend

Base: `aaae1e3062137eda30e13e2fd7bcddbb1b239842` / tree `458517fa01a50f43f0b1cd8a948767e4f7600d50`, or a proven normal descendant retaining accepted Campaign ancestry.

Owned changes are limited to:

- additive enum and general Campaign-definition hash schema/migration;
- general canonical JSON/hash helper;
- canonical Campaign validation, readiness, create/draft/publish/read/list/filter and reporting paths;
- compatibility isolation for old validators/routes;
- Campaign application-read projection for the C03 handoff;
- internal classification/repair tooling only if separately operationally authorized;
- focused contract, migration, PostgreSQL, service, authorization, lifecycle-lock and architecture tests.

Prohibited backend additions include `UceCampaignObjectiveRevision`, any objective ledger/table, `canonicalObjective`, `objectiveAuthorityState`, `canonicalObjectiveVersion`, `canonicalObjectiveRevisionId`, and an objective re-author controller/service.

### Frontend

Base: `9631e8b261f02f331dcf84f09dfd61dcc28eea83` / tree `25a89b63cec1a576ef605076c717a7cc447e5acc`, or a proven normal descendant retaining accepted Campaign ancestry.

Owned changes are limited to canonical wizard types/schema/mapping, four objective cards, draft/readiness clients, summaries, list/page/detail/filter contracts, compatibility unavailable presentation, and associated tests. No re-author/remediation flow is authorized.

## 10. Required tests and evidence

Backend acceptance requires:

- Prisma enum contains all retained legacy values plus exactly the four canonical values;
- every canonical request rejects all legacy/P labels and unknown strings;
- each canonical value round-trips unchanged through draft, readiness, publish, `coreObjective`, whole definition, list/filter/read/reporting and application projection;
- the lossy adapter is unreachable from canonical execution;
- one strategy row per Campaign and non-null `coreObjective` remain enforced;
- definition `2.0` deterministic serialization/hash golden tests, key-order invariance, mismatch/tamper rejection and deterministic snapshot reference tests;
- atomic publish writes final definition/hash/objective under lock and no non-draft endpoint changes them;
- compatibility routes cannot produce a canonical definition/hash/projection;
- exact-evidence repair accepts only literal four-value immutable evidence and proves equality; P/three-value/conflicting/mutable evidence is rejected;
- each existing-row class follows the disposition table, including production ambiguity breaker;
- historical ApplicationSnapshot V1 and reporting rows are unchanged;
- empty-database and representative-upgrade migration tests pass without automatic mapping.

Frontend acceptance requires:

- canonical controls and payloads contain exactly `AWARENESS`, `TRUST`, `ASSETS`, `ACTION`;
- no P or three-value option appears on canonical create/readiness/filter paths;
- all four values hydrate, autosave, render, publish and filter correctly;
- locked/non-draft Campaign UI offers no objective edit;
- legacy compatibility rows render bounded objective-unavailable state and no remediation call to action;
- canonical response containing a legacy/unknown value or invalid definition fence fails closed;
- component, API contract, keyboard, screen-reader and error-state tests pass.

Repository evidence requires clean builds, focused and relevant full tests, schema/migration inventory, clean worktrees, normal non-force pushes, and independent local/remote SHA/tree equality.

## 11. Circuit breakers

| Circuit breaker | Trigger |
|---|---|
| `CAMPAIGN_CANONICAL_OBJECTIVE_CONTRACT_DIVERGENCE` | A canonical path accepts/emits anything outside the exact four values or omits `CAMPAIGN_OBJECTIVE_V1`. |
| `CAMPAIGN_OBJECTIVE_DUAL_AUTHORITY` | A second objective field, state, revision table, ledger, or alternate authoritative JSON path is introduced. |
| `CAMPAIGN_OBJECTIVE_LOSSY_MAPPING_REQUIRED` | Implementation or migration requires translating a P/three-value label to a canonical value. |
| `CAMPAIGN_DEFINITION_FENCE_INTEGRITY_GAP` | Whole-definition version/hash/reference cannot be produced atomically, recomputed, or kept immutable after the existing edit boundary closes. |
| `CAMPAIGN_LOCKED_OBJECTIVE_EDIT_BYPASS` | Canonicalization makes an objective editable where current Campaign lifecycle rules prohibit it. |
| `CAMPAIGN_PRODUCTION_OBJECTIVE_PARENT_PRODUCT_AUTHORITY_REQUIRED` | A proven real production Campaign has ambiguous canonical meaning. |
| `CAMPAIGN_OBJECTIVE_COMPATIBILITY_LEAK` | A legacy value is exposed as canonical or reaches C03 V2, Applicant Match, or new Reporting authority. |
| `CAMPAIGN_OBJECTIVE_BASE_DIVERGENCE` | Implementation bases lose accepted Campaign ancestry or materially change audited ownership/edit fences without renewed preflight. |

## 12. Finite convergence DAG and sequence

```text
accepted Brand Campaign ancestry
          |
backend Portfolio base aaae1e30
          -> additive UceCampaignObjective values
          -> general Campaign definition hash fence
          -> canonical API/coreObjective convergence
          -> compatibility isolation + tests
                                            \
                                             +-> Campaign objective implementation acceptance
                                            /
frontend Portfolio base 9631e8b2
          -> four-value canonical contracts/UI
          -> compatibility-unavailable presentation + tests

Campaign implementation acceptance
          -> separately authorized C03 ApplicationSnapshot V2 handoff
          -> corrected Applicant Match P0 revalidation
          -> only then possible Applicant Match P1 authorization
```

Finite order:

1. Re-fetch/prune and verify implementation bases and accepted Campaign ancestry.
2. Reconfirm no newer accepted general Campaign definition hash fence exists.
3. Implement the additive enum migration and smallest general hash field.
4. Implement backend canonical direct-write/read projection on `coreObjective` and definition fence.
5. Implement compatibility isolation and four-way data classification; stop on production ambiguity.
6. Implement frontend four-value canonical surfaces without remediation UI.
7. Run the complete evidence matrix, including locked-objective and tamper tests.
8. Publish/fetch-back backend and frontend descendants and obtain Campaign implementation acceptance.
9. Hand off to separately authorized C03 work. Do not begin C03 or Applicant Match from this preflight.

## 13. Corrected disposition

The preflight correction proves that `UceCampaignStrategy.coreObjective` is safely reusable as the single objective authority. The accepted design additively extends its enum and adds only the smallest missing general Campaign-definition hash fence. It does not create objective-specific history, state, endpoints, UI, or a second field.

Contract/preflight is corrected. Implementation remains not started. C03 and Applicant Match remain outside this authority and retain their existing circuit breakers until separately accepted implementation checkpoints exist.
