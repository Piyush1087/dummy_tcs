# Collaboration Canonical Prisma — Integrated Relation / Type Check

**Status:** COMPLETE — PASS WITH EXPLICIT INTEGRATION PATCHES  
**Reviewed schema:** `collaboration/backend/collaboration_schema.prisma` v1.1  
**Campaign reference:** `backend/campaign_schema.prisma` v1.9 working view  

## Purpose

This is the final mechanical relation/type pass required before treating the Collaboration Prisma working view as frozen. It checks that Collaboration's cross-module Prisma references map to real frozen Campaign types/IDs and identifies the reverse relation fields that must be added when the working views are merged into the full production schema.

This is not a production migration or a claim that `collaboration_schema.prisma` compiles standalone. The Collaboration file intentionally references models/enums owned by Campaign and therefore requires integration into the complete Prisma schema.

## 1. `sourceApplicationId -> UceApplication.id` — PASS

Campaign persistence defines:

```prisma
model UceApplication {
  id String @id @default(cuid())
  ...
}
```

Collaboration v1.1 defines:

```prisma
sourceApplicationId String @unique @map("source_application_id")
sourceApplication UceApplication @relation(
  fields: [sourceApplicationId],
  references: [id],
  onDelete: Restrict
)
```

Type compatibility: `String -> String` — PASS.  
Cardinality: unique FK gives one Application -> at most one Collaboration — PASS.  
Deletion semantics: `Restrict` preserves Collaboration lineage — PASS.

### Integrated-schema patch required

The owning Campaign model must gain the reverse relation:

```prisma
collaboration Collaboration?
```

This reverse field does not make Campaign the owner of Collaboration lifecycle.

## 2. `sourceBriefDeliverableId -> UceBriefDeliverable.id` — PASS

Campaign persistence defines `UceBriefDeliverable.id String` and one row per independent Brief Deliverable.

Collaboration defines:

```prisma
sourceBriefDeliverableId String
sourceBriefDeliverable UceBriefDeliverable @relation(
  fields: [sourceBriefDeliverableId],
  references: [id],
  onDelete: Restrict
)
```

Type compatibility: `String -> String` — PASS.  
The unique `(collaborationId, sourceBriefDeliverableId)` constraint correctly permits the same source Deliverable to be instantiated in different Collaborations while allowing only one execution instance inside a given Collaboration — PASS.

### Integrated-schema patch required

`UceBriefDeliverable` must gain:

```prisma
collaborationExecutions CollaborationDeliverableExecution[]
```

## 3. `UceBrandSupportType` reuse — PASS

Campaign persistence owns the enum:

```prisma
enum UceBrandSupportType {
  PRODUCT
  SERVICE
  EXPERIENCE
  ACCESS_SUBSCRIPTION
  OTHER
}
```

Collaboration reuses this exact type in `CollaborationExecutionSnapshot.brandSupportType`; it does not introduce a competing fulfillment taxonomy — PASS.

## 4. Scalar upstream lineage — PASS

`campaignId`, `campaignCreatorId`, `campaignAssetId`, `briefId`, `brandProfileId`, and `creatorUserId` remain `String` scalar lineage/query fields in the Collaboration working view.

The frozen Campaign records use String IDs for Campaign, CampaignCreator, CampaignAsset and Brief. These scalar types are compatible — PASS.

The Collaboration working view intentionally does not add direct relation fields for every one of these references. Source Application is the creation identity; the additional IDs are retained for lineage/query efficiency. This avoids forcing cross-module delete semantics into the working view.

## 5. Decimal and currency compatibility — PASS

Campaign commercial persistence uses Decimal amounts and a three-character currency string. Collaboration uses:

- `Decimal(14,2)` for creator cash agreement/entitlement/settlement amounts;
- `Decimal(12,2)` for snapshotted Brand Support estimated value;
- `String @db.VarChar(3)` for commercial currencies.

These are mechanically compatible with the upstream source values. The larger Collaboration cash precision is non-lossy relative to the Campaign commercial offer representation — PASS.

## 6. Required explicit `publishingRequired` — PASS

`CollaborationDeliverableExecution.publishingRequired` is now:

```prisma
publishingRequired Boolean
```

with no Prisma default.

This mechanically forces creation/provisioning to supply a resolved value and prevents the unresolved upstream publishing rule from silently becoming `false` — PASS.

The upstream authoring/derivation rule itself remains an explicit product-data dependency and is not invented by this check.

## 7. Securement initialization — PASS

`CollaborationCommercialAgreement.negotiationState` is required with no default, forcing provisioning to evaluate Negotiation applicability explicitly.

`securementState` is nullable with no default. `null` means Securement has not yet been evaluated; `NOT_REQUIRED` remains a real evaluated result. This removes the previous premature `AWAITING_ESCROW_FUNDING` fact — PASS.

## 8. Derived `actionRequiredBy` — PASS

The aggregate no longer persists `actionRequiredBy` or the associated Prisma enum. The frozen workflow rule is preserved: backend read models derive action ownership from authoritative lifecycle/stage/substate/available-action state — PASS.

## 9. Conversation/inbox persistence — PASS

`CollaborationMessage` is restored with:

- Collaboration FK;
- nullable sender for system messages;
- `USER | SYSTEM` kind;
- body;
- system event tag;
- created timestamp.

`Collaboration` also retains `lastMessageSnippet`, `lastMessageAt`, `unreadCountBrand`, and `unreadCountCreator` as explicitly denormalized inbox projections. They are not workflow authority — PASS.

The model/table name intentionally matches the existing production Collaboration message concept so migration can preserve working chat history rather than create a second conversation store.

## 10. Owned-child relation direction — PASS

Collaboration-owned 1:1/1:N records use `collaborationId` with `onDelete: Cascade`, including snapshot, commercial agreement, fulfillment, deliverables, settlement, financial resolution, feedback, messages and events.

This is mechanically consistent with aggregate ownership. Upstream source relations use `Restrict`; ordinary Campaign/Brief/Application lifecycle therefore cannot cascade-delete Collaboration history — PASS.

## 11. Event uniqueness — PASS

`CollaborationEvent` uses:

```prisma
@@unique([collaborationId, aggregateVersion])
```

and `Collaboration.aggregateVersion` is Int. Types align, and the constraint supports one consequential aggregate event per committed version — PASS.

## 12. No duplicate cross-module enum/type conflicts introduced — PASS

The Collaboration working view defines Collaboration-owned enums under `Collaboration*` names and reuses the existing Campaign-owned `UceBrandSupportType`. No new `UceApplication`, `UceBriefDeliverable`, Campaign commercial or Product/Brief model is duplicated — PASS.

## 13. Full-schema merge requirements

When integrating these working views into the production `prisma/schema.prisma`, the mechanical merge must:

1. replace/remodel the existing operational `Collaboration` family rather than define a second model with the same Prisma names;
2. add `UceApplication.collaboration Collaboration?`;
3. add `UceBriefDeliverable.collaborationExecutions CollaborationDeliverableExecution[]`;
4. preserve/migrate the existing `CollaborationMessage` data into the canonical compatible message model;
5. reconcile existing production enum/model names before Prisma generation so legacy `Collaboration*` definitions are not duplicated;
6. keep existing Escrow/Payout infrastructure outside this canonical Collaboration working view and adapt its fixed 30/70 semantics separately as already documented in `schema_reconciliation.md`.

These are migration/integration steps, not unresolved canonical domain decisions.

## Final result

**PASS.** No relation/type mismatch was found in the canonical Collaboration v1.1 working view against the frozen Campaign persistence types reviewed here.

The two required reverse relation fields are explicitly identified for the eventual integrated Prisma merge. They are required by Prisma when the models coexist in one schema, but they do not require reopening Campaign or Collaboration domain ownership decisions.

The only remaining product-data gap is still the already-recorded upstream derivation/authorship rule for `publishingRequired`. The schema correctly prevents that gap from silently defaulting into runtime behavior.

**Freeze conclusion:** `collaboration/backend/collaboration_schema.prisma` v1.1 is canonical/frozen as a target working view. Production integration/migration and executable command/read-model validation are the next phase.