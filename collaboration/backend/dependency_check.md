# Collaboration Backend — Final Dependency Check Before Canonical Prisma

**Status:** COMPLETE WITH ONE EXPLICIT PRODUCT-DATA GAP  
**Purpose:** Resolve upstream Campaign/Application/Brief lineage and audit production timer + asset infrastructure before drafting canonical Collaboration Prisma.  
**Do not treat this file as canonical Prisma.** It records the dependency decisions the canonical schema must honor.

## 1. Source Application lineage — RESOLVED

Frozen Campaign persistence defines `UceApplication` as the individual creator submission. It has stable `id`, `campaignId`, `campaignCreatorId`, `campaignAssetId`, `briefId`, status, source, timestamps and optional immutable `UceApplicationSnapshot`.

Canonical Collaboration creation remains:

`specific UceApplication.status == APPROVED -> create at most one Collaboration`

Required canonical mapping:

- `Collaboration.sourceApplicationId -> UceApplication.id`
- `sourceApplicationId` must be unique on Collaboration.
- Remove production `@@unique([campaignId, creatorUserId])`; multiple approved Applications for the same Campaign + Creator may produce multiple Collaborations.
- Retain `campaignId`, creator identity, Campaign Asset/Product context and Brief lineage for query/read convenience, but Application is the creation identity.
- Applicants/Campaign remains authoritative for Application status/history. Collaboration must not rewrite Application history.

The integrated Prisma schema will require the reverse relation on `UceApplication` (for example an optional `collaboration` relation) even though Campaign does not own Collaboration lifecycle.

## 2. Application creation package — RESOLVED

`UceApplication` already points to the exact Campaign, CampaignCreator, CampaignAsset and Brief selected by that submission. `UceApplicationSnapshot` also preserves submission-time Campaign, Campaign Asset, Brief, commercial and Creator identity context.

Collaboration should not use the Application snapshot as its complete execution contract, because Collaboration must lock the execution obligations that are authoritative at Collaboration creation/terms lock. Instead:

- Application references establish lineage.
- Application snapshot is upstream decision evidence.
- Collaboration stores its own locked execution snapshot for the agreed execution contract.

## 3. Exact Create Campaign commercial / Brand Support mapping — RESOLVED

Frozen Create Campaign owns `commercial_policy`. The exact persistence fields relevant to Collaboration are:

- `UceCampaignCommercials.receivesBrandSupport`
- `UceCampaignCommercials.brandSupportType`
- `UceCampaignCommercials.brandSupportEstimatedValue`
- `UceCampaignCommercials.compensationType`
- `UceCampaignCommercials.commercialOffer`
- `UceCampaignCommercials.advancePaymentPercentage`
- `UceCampaignCommercials.payoutTerms`
- `UceCampaignCommercials.currency`

Canonical product vocabulary for Brand Support is:

`PRODUCT | SERVICE | EXPERIENCE | ACCESS_SUBSCRIPTION | OTHER`

Create Campaign explicitly defines Brand Support as non-cash consideration. Do not replace this with an industry-derived physical/digital/service taxonomy.

### Collaboration fulfillment snapshot

At Collaboration creation/terms lock, snapshot the exact upstream Brand Support facts needed for execution, conceptually:

- whether Brand Support applies;
- Brand Support type;
- estimated non-cash value;
- relevant Campaign Asset/Product/service identity;
- operational fulfillment requirements/evidence subsequently created inside Collaboration.

If `receivesBrandSupport == false`, Fulfillment is not applicable and is server-skipped with history.

If `receivesBrandSupport == true`, Collaboration uses the frozen `UceBrandSupportType`; runtime/UI may render type-appropriate fields, but must not persist a competing industry-derived contract taxonomy.

Operational shipment/access/redemption/service evidence remains Collaboration-owned because Create Campaign does not persist those execution events.

## 4. Advance and currency dependency — RESOLVED

The canonical upstream source is:

- `advancePaymentPercentage` — frozen Create Campaign allowed values are `0 | 25 | 50 | 75 | 100`.
- `currency` — Campaign commercial currency.
- Campaign compensation/offer values define the upstream framework; final creator-specific cash fee is locked by Collaboration Negotiation.

Canonical Collaboration must therefore persist/snapshot the actual Advance percentage used for the agreement and calculate protected Advance amount from the final agreed creator fee. It must not retain the production semantic assumption that fields named `advance30` / `balance70` are always 30/70.

## 5. Deliverable lineage — RESOLVED

Frozen Campaign hierarchy is:

`Campaign -> CampaignAsset -> Brief -> Deliverable`

`UceBrief` owns first-class `UceBriefDeliverable[]`. Each `UceBriefDeliverable` has a stable `id`, `format`, `displayOrder`, `configuration`, `creativeGuidance` and optional `amplifyTargetDeliverableId`.

`UceApplication.briefId` identifies the exact Brief for the approved Application. Therefore the Collaboration creation path can deterministically resolve the required Deliverable definitions from that Brief.

Canonical target:

`UceBriefDeliverable -> CollaborationDeliverableExecution -> CollaborationSubmissionVersion[]`

Each Collaboration Deliverable Execution should keep a stable source reference such as `sourceBriefDeliverableId` and a locked snapshot of the Deliverable definition. Later Brief edits must not rewrite active execution obligations.

Global production `revisionCount` must not remain authoritative. Revision count/state belongs to each Collaboration Deliverable Execution.

The Brief-level `usageRights` and `creatorRequirements` should also be included in the locked execution snapshot because they apply across the Brief's Deliverables.

## 6. Publishing applicability — EXPLICIT REMAINING DATA GAP

The frozen Brief schema defines first-class Deliverables and their configuration, but it does **not** currently expose a dedicated per-Deliverable `publishingRequired` / publication-authorization field.

Collaboration contracts require Deliverable-aware Publishing and also distinguish:

- Brand manual approval, which can authorize publishing where publishing is required;
- 72h `AUTO_APPROVED`, which satisfies Production but does **not** itself authorize public posting.

Therefore canonical Collaboration Prisma may safely model the *resolved locked execution fact* that a Deliverable requires publishing, but the upstream rule/source used to derive that fact must be finalized before implementation. Do not infer it from industry and do not silently assume every Deliverable must be posted.

This is the only upstream product-data gap found in this dependency check. It does not block drafting the Collaboration persistence structure, but it must be marked as an unresolved creation/runtime mapping rather than invented in Prisma.

## 7. Production 72h timer audit — DEADLINE EXISTS; EXECUTOR NOT FOUND

Production Collaboration currently creates `autoApprovalDeadline = now + 72h` when a Creator submits media and stores it on `CollaborationMedia`. Production messages also state that the 72-hour review clock has started.

However, the production `CollaborationModule` registers Collaboration services/gateway/controller but no Collaboration scheduler/worker. Repository searches found no `ScheduleModule`, `@Cron`, Bull queue, `node-cron`, or interval-based Collaboration timer executor.

The reviewed `CollaborationService` contains submission and Brand review commands but no code that scans expired `autoApprovalDeadline` rows and changes them to approved.

### Canonical implication

Keep explicit deadline persistence, but do not assume the current backend actually executes auto-approval.

Canonical runtime needs a SYSTEM command path such as:

`expired review deadline -> stale-safe AUTO_APPROVE_DELIVERABLE_VERSION command -> atomic state/event update`

Exact scheduling technology remains implementation choice. Prisma should support the deadline and queryability; it should not encode scheduler technology.

Pause × timer behavior remains intentionally unassigned by the frozen Collaboration contracts.

## 8. Production asset/storage audit — URL REFERENCES ONLY; PROVIDER NOT FOUND

Current production Collaboration submission DTO accepts `media_url` as an external URL. Publishing accepts `live_post_url`; manual payment evidence accepts `receipt_url`. `CollaborationMedia` persists `mediaUrl`.

Repository searches found no Collaboration upload endpoint or confirmed S3/Cloudinary/presigned-upload/FileInterceptor implementation, and no `@aws-sdk/client-s3` integration was found in the production backend search.

Therefore current production evidence supports **URL/reference persistence**, not a specific owned asset-storage provider.

### Canonical implication

Preserve the frozen Asset boundary:

- Collaboration stores a logical `assetRef` / evidence reference on submission versions.
- Do not make S3, Drive, Frame.io, Cloudinary or any other vendor part of the Collaboration domain schema.
- A later Asset service may resolve `assetRef` to upload/storage/preview/download metadata.
- Migration may initially adapt existing `mediaUrl` values into the asset-reference abstraction.

## 9. Production provisioning conflict — CONFIRMED

Production `CollaborationProvisionService.provisionFromUceApproval()` deduplicates using `campaignId_creatorUserId`, then creates the Collaboration from Campaign/Brief/Creator fields. Its input has no canonical Application reference.

Canonical migration must replace that idempotency identity with approved-Application identity:

`sourceApplicationId unique -> one Collaboration per approved Application`

Provisioning should load/validate the APPROVED Application, derive its Campaign/CampaignCreator/CampaignAsset/Brief lineage, build the locked execution snapshot and then create the Collaboration atomically/idempotently.

## 10. Readiness for canonical Prisma

The dependency check is sufficient to draft canonical Collaboration Prisma without copying accidental production assumptions.

Resolved dependencies:

- approved Application identity and uniqueness;
- Campaign/CampaignCreator/CampaignAsset/Brief lineage;
- exact Create Campaign Brand Support taxonomy and fields;
- Advance percentage/currency source;
- first-class Brief Deliverable lineage;
- Brief-level rights/creator requirements;
- production timer reality (deadline persistence exists; executor not found);
- production asset reality (URL references exist; storage provider not established).

One explicit product-data dependency remains open:

**How `publishingRequired` / publication applicability is authored or derived upstream per Deliverable.**

Canonical Prisma should represent this as a locked execution fact while marking its creation rule unresolved. Do not delay the schema structure for this, and do not invent the rule.

## Source evidence

Canonical/frozen:

- `backend/campaign_schema.prisma` — Campaign persistence working view v1.9.
- `campaign/create_campaign/field_object_contract.yaml` — frozen Create Campaign field ownership and commercial policy.
- `campaign/add_brief/domain_contract.md`
- `campaign/add_brief/field_contract.md`
- `campaign/add_brief/runtime_contract.md`
- `collaboration/contracts/*`

Production evidence:

- `AatishBrianDSilva/creator-commerce-backend-v2-clone/prisma/schema.prisma`
- `src/features/collaboration/services/collaboration-provision.service.ts`
- `src/features/collaboration/services/collaboration.service.ts`
- `src/features/collaboration/collaboration.module.ts`
- `src/features/collaboration/dto/collaboration-actions.dto.ts`

Production schema baseline remains preserved separately at `collaboration/backend/production_schema_baseline.prisma`. Schema migration instructions remain separately at `collaboration/backend/schema_reconciliation.md`.
