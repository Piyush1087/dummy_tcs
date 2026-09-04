# C-03 P1.1 Recovery Implementation Delta Manifest V1

Artifact:
C03_P1_1_RECOVERY_IMPLEMENTATION_DELTA_MANIFEST_V1

Status:
READY_FOR_PARENT_REVIEW

Implementation authorization:
NOT GRANTED

## 1. Authority and reconstruction basis

This manifest reconstructs P1.1 from durable repository authority. It does not
adopt unpublished code or remembered progress from the abandoned execution.

| Authority | Immutable ref |
|---|---|
| Accepted C-03 Stage B package | Piyush1087/dummy_tcs at 458875b939b738b8032409b6de72b6de70f53ed1 |
| Accepted recovery baseline | Piyush1087/dummy_tcs, c03/recovery-authority at 7c7cae4ebe89a3d2305bd780aad784e8d9b46b79 |
| Backend P0 recovery tree | Piyush1087/creator-commerce-backend-v2-clone, c03/recovery-campaign-participation-v1 at 6a2bd2e4b815462abc702dea34f7c368c24a0664 |
| Backend P0 tree | cf37ef240ac8f8d72e1b230b80830df682ba63fd |
| Locked Prisma CLI/client | 6.19.3 / 6.19.3 |
| Existing migration count | 74 |

The frozen Product logic and accepted architecture remain unchanged. P1.1 is
only persistence convergence, integrity infrastructure, compatibility adapters,
and their tests. Opportunity policy, canonical Application commands, frontend
work, Collaboration provisioning, Notification dual-scope work, AWS, and
production execution are outside this checkpoint.

## 2. Repository findings that control the delta

The P0 tree already contains:

- one canonical Campaign aggregate, UceCampaign;
- one canonical Asset model, UceCampaignAsset;
- one production canonical Brief family, CanonicalCampaignBrief and
  CanonicalBriefDeliverable;
- one Application family, UceApplication and UceApplicationSnapshot;
- one C-01 continuation family, CreatorEntryContinuation;
- canonical C-05 CreatorWorkspace, CreatorWorkspaceMember, CreatorProfile,
  User, and CreatorSocialIntegration identity state;
- legacy UceCampaignProduct, UceCampaignBrief, UceCampaignCreator, and
  UceCampaignCollaboration state that cannot be inferred into canonical state;
- physical uce_campaigns.creation_source and
  uce_campaigns.canonical_definition columns that are not represented in the
  P0 Prisma model;
- UceApplication.campaign_asset_id and brief_id foreign keys that still point
  to legacy uce_campaign_products and uce_campaign_briefs;
- a cascade-delete Application snapshot foreign key;
- a direct-only, digest-only C-01 Campaign continuation with immutable token,
  intent, Campaign, creation time, and monotonic User binding;
- no shared Campaign row-lock helper and Campaign lifecycle writers that read
  and update without first locking the Campaign row.

These findings prohibit a second Campaign, Brief, Application, snapshot, or
continuation store.

## 3. Exact retained Prisma models

All models below retain their current physical tables and identifiers. “Enrich”
means additive fields, relations, indexes, or explicit Prisma renames mapped to
the same existing columns.

| P0 Prisma model | P1.1 disposition |
|---|---|
| UceCampaign | Retain and enrich; remains aggregate root. |
| UceCampaignStrategy | Retain and enrich with canonical platform projection. |
| UceCampaignTargeting | Retain and enrich with singular canonical visibility and a targeting version. |
| UceCampaignCommercials | Retain and enrich with provenance-bearing canonical commercial/support projection. |
| UceCampaignAsset | Retain; add ancestry key and inverse relations only. |
| CanonicalCampaignBrief | Retain and enrich into the frozen Add Brief model; do not add UceBrief as a second table. |
| CanonicalBriefDeliverable | Retain and enrich into the frozen typed Deliverable model; do not add UceBriefDeliverable as a second table. |
| UceApplication | Retain and discriminate canonical from legacy rows. |
| UceApplicationSnapshot | Retain and version; remains the only Application snapshot table. |
| CreatorEntryContinuation | Retain and extend its persisted typed context. |
| CreatorWorkspace, CreatorWorkspaceMember, CreatorProfile, User | Retain; add only inverse relations/keys required for C-03 referential integrity. |
| CreatorSocialIntegration | Retain unchanged; it is read/locked later and is not copied into Application persistence. |
| BrandProfile | Retain; add inverse C-03 relations only. |
| UceCampaignShare | Retain; add a composite Campaign ancestry key and ingress/continuation inverse relations. |
| UceCampaignCreator | Retain as optional grouping/legacy lineage, never canonical identity. |
| UceCampaignProduct | Retain unchanged as compatibility-only selection state. |
| UceCampaignBrief | Retain unchanged as compatibility-only legacy Brief state. |
| UceCampaignCollaboration | Retain unchanged and quarantine plaintext invitation semantics. |
| Collaboration and Notification | Retain unchanged in P1.1; their C-03 convergence belongs to P1.4. |

## 4. Exact enum delta

Add the following Prisma/PostgreSQL enums:

| Enum | Values |
|---|---|
| UceBriefStatus | DRAFT, PUBLISHED, PAUSED |
| UceBriefCreationSource | MANUAL, AI_RECOMMENDED |
| UceBriefType | CREATOR_LED, BRAND_LED |
| UceDeliverableFormat | REEL_VIDEO, STORY, PHOTOSHOOT, BANNER_CAROUSEL |
| UceBrandSupportType | PRODUCT, SERVICE, EXPERIENCE, ACCESS_SUBSCRIPTION, OTHER |
| UceApplicationAuthorityVersion | LEGACY_COMPATIBILITY, C03_CANONICAL |
| UceApplicationSnapshotVersion | C03_APPLICATION_SNAPSHOT_V1 |
| CampaignOpportunityEntrySurface | DIRECT_CAMPAIGN_LINK, TRACKED_CAMPAIGN_SHARE, BRAND_INVITATION, CREATOR_OPPORTUNITIES |
| CampaignOpportunityEntryAuthorityKind | DIRECT, SHARE, INVITATION |
| CampaignIngressTouchKind | QUALIFIED_INGRESS, APPLICATION_CONVERSION |
| ApplicationCommandType | SUBMIT, WITHDRAW, APPROVE, REJECT |
| ApplicationDomainEventName | SUBMITTED mapped to application.submitted; APPROVED mapped to application.approved; REJECTED mapped to application.rejected; WITHDRAWN mapped to application.withdrawn; EXPIRED mapped to application.expired |
| ApplicationEventActorClass | CREATOR_TEAM_USER, BRAND_USER, SYSTEM |

Retain UceCampaignStatus, UceCampaignAssetKind, UceCampaignAssetStatus,
UceApplicationStatus, UceApplicationSource, UceMediaPlatform,
CreatorEntryContinuationIntent, and CreatorTeamRole unchanged.

The existing uce_campaigns.creation_source TEXT plus CHECK is mapped into
Prisma as a String and validated as MANUAL or AI_RECOMMENDED. P1.1 must not
rewrite that populated TEXT column to a PostgreSQL enum merely for type
cosmetics.

## 5. Exact Campaign, Asset, Brief, and Deliverable delta

### 5.1 UceCampaign

Map the already-existing physical fields and add only the missing C-03/shared
lifecycle fields:

| Prisma field | Type | Physical column | Rule |
|---|---|---|---|
| creationSource | String | creation_source | Existing NOT NULL TEXT; MANUAL or AI_RECOMMENDED CHECK remains. |
| canonicalDefinition | Json? | canonical_definition | Existing nullable JSONB; accepted versioned Campaign definition/provenance. |
| liveAt | DateTime? | live_at | Never inferred for historical LIVE rows; set once by an authorized first-readiness transition. |
| applicationDeadline | DateTime? | application_deadline | Nullable, independently authoritative only; never derived from publishUntil/fixedEndDate. |

Add inverse relations for invitations, ingress touches, canonical Application
selection, and continuations. Add unique (id, brandProfileId) so canonical
Application rows can physically prove Campaign-to-Brand ancestry.

Do not persist applicationsOpen, canApply, applyBlockedReason, readiness, or
any derived Campaign Page state.

### 5.2 UceCampaignStrategy, UceCampaignTargeting, and UceCampaignCommercials

Add:

| Model | Prisma field | Type | Backfill/write rule |
|---|---|---|---|
| UceCampaignStrategy | platforms | UceMediaPlatform[] default [] | Backfill only from a Zod-valid canonical_definition. New canonical writers dual-project it; an empty legacy value is unavailable, not INSTAGRAM by assumption. |
| UceCampaignTargeting | visibilityScope | UceVisibilityScope? | Backfill only when the existing visibilityScopes array has exactly one value, or a valid canonical_definition supplies exactly one mapped value. Conflicting/missing arrays remain null and fail closed. |
| UceCampaignTargeting | targetingVersion | Int default 1 | Increment on every canonical targeting mutation; eligibility later binds to this value. |
| UceCampaignCommercials | canonicalVersion | Int? | Set to 1 only when canonical authored provenance validates. Null means compatibility/ambiguous. |
| UceCampaignCommercials | commercialOffer | Decimal? (12,2) | Canonical Campaign-wide fixed payout or negotiable minimum advertised payout. Zero is meaningful only when canonicalVersion is 1. |
| UceCampaignCommercials | currency | String? Char(3) | INR or USD when canonically derived; null for unresolved legacy rows. |
| UceCampaignCommercials | receivesBrandSupport | Boolean? | Canonical support signal; null is unknown, false is authored no-support. |
| UceCampaignCommercials | brandSupportType | UceBrandSupportType? | Required when receivesBrandSupport is true. |
| UceCampaignCommercials | brandSupportEstimatedValue | Decimal? (12,2) | Optional non-negative support value. |

Retain fixedFeeAmount, negotiableMinFee, negotiableMaxFee,
advancePaymentPercentage, finalBalanceTerms, visibilityScopes, and
applicationScope. They are compatibility inputs, not independent C-03
authority. A canonical adapter may use them only when validated canonical
provenance establishes their meaning.

Database checks require commercialOffer and support value to be non-negative,
currency to be INR or USD, support type/value to be absent when support is
false, and the complete canonical commercial set when canonicalVersion is 1.

### 5.3 UceCampaignAsset

No new scalar Product/Offering fields are added. Retain the exact-one
BRAND/OFFERING/OFFER reference check and ACTIVE/PAUSED status.

Add:

- unique (campaign_id, campaign_asset_id);
- canonicalApplications inverse relation;
- CampaignIngressTouch/continuation relations as needed;
- no campaign readiness or hasBrief columns.

### 5.4 CanonicalCampaignBrief

Retain table campaign_briefs and model CanonicalCampaignBrief. The exact
Prisma working fields are:

| Field | Type | Mapping/disposition |
|---|---|---|
| id | String ID | Existing brief_id. Immutable after insert. |
| campaignAssetId | String | Existing campaign_asset_id. Immutable parent. |
| status | UceBriefStatus default DRAFT | New canonical lifecycle. |
| creationSource | UceBriefCreationSource default MANUAL | New behavioral provenance. |
| briefName | String? | Rename Prisma title while retaining physical title; drop NOT NULL to allow empty Draft creation. |
| creativeIntent | String? Text | New; required by Publish validation. |
| creatorBrief | String? Text | New; required by Publish validation. |
| briefType | UceBriefType? | New; required by Publish validation. |
| platform | UceMediaPlatform? | New; required by Publish; Instagram-only operationally in MVP and must be enabled by Campaign. |
| briefLevelGuidance | Json? | New bounded value object. |
| referenceContent | Json? | New bounded value object. |
| usageRights | Json? | New bounded validated value object. |
| creatorRequirements | String? Text | New frozen field. |
| publishedAt | DateTime? | New; first publication time, never cleared. |
| pausedAt | DateTime? | New; current/latest pause time; cleared on valid resume. |
| legacyCreativeRequirements | String? | Existing creative_requirements renamed in Prisma; compatibility-only, not creatorBrief. |
| legacyIsActive | Boolean | Existing is_active renamed in Prisma; one-way compatibility projection from status. |
| createdAt, updatedAt | DateTime | Retained. |

Backfill existing rows exactly:

- legacyIsActive true maps to status PUBLISHED;
- legacyIsActive false maps to status PAUSED;
- creationSource maps to MANUAL;
- title remains briefName;
- every new rich field remains null;
- legacyCreativeRequirements is not promoted into creativeIntent or
  creatorBrief.

A backfilled minimal row therefore remains displayable but is not
C03-submit-ready. New canonical readiness requires status PUBLISHED plus the
complete frozen publish validator.

Add unique (campaign_asset_id, brief_id). A BEFORE UPDATE trigger rejects
changes to brief_id or campaign_asset_id. This directly closes the P0
ON UPDATE CASCADE identity hole and avoids the previously observed Brief-ID
trigger ambiguity.

The legacyIsActive column becomes a projection:

- DRAFT maps to false;
- PUBLISHED maps to true;
- PAUSED maps to false.

Direct attempts to change legacyIsActive without the corresponding canonical
status are rejected. No ACTIVE Brief status is introduced.

### 5.5 CanonicalBriefDeliverable

Retain table campaign_brief_deliverables and model
CanonicalBriefDeliverable. Add:

| Field | Type | Rule |
|---|---|---|
| format | UceDeliverableFormat? mapped to canonical_format | Null only for pre-P1.1 compatibility rows; required for every new Deliverable. |
| displayOrder | Int? | Null only for compatibility rows; new rows require integer >= 0. Repeated formats are permitted. |
| configuration | Json? | Frozen format-specific validated object. |
| creativeGuidance | Json? | Frozen Brief-type/format/profile-specific validated object. |
| amplifyTargetDeliverableId | String? | Optional self-reference used only by STORY with AMPLIFY_REEL intent. |

Rename the P0 fields in Prisma without deleting them:

- format becomes legacyFormat, still mapped to physical format;
- quantity becomes legacyQuantity;
- creativeRequirements becomes legacyCreativeRequirements;
- publishingRequired becomes legacyPublishingRequired.

Those four columns become nullable so new canonical records do not invent
legacy quantity, prose, or publishing semantics. Existing values remain
unchanged.

Add unique (brief_id, deliverable_id), a composite self foreign key
(brief_id, amplify_target_deliverable_id) to
(brief_id, deliverable_id), and a non-self CHECK. The database proves
same-Brief ancestry and non-self reference; the service/Zod profile validator
proves STORY + AMPLIFY_REEL and REEL_VIDEO target semantics. No unique
(brief_id, format) is allowed.

Deliverable ID and briefId are immutable after insert. Moving a Deliverable to
another Brief is prohibited.

## 6. Canonical-versus-legacy Application discriminator

### 6.1 UceApplication exact delta

Retain table uce_applications and add:

| Field | Type | Required for C03_CANONICAL |
|---|---|---|
| authorityVersion | UceApplicationAuthorityVersion default LEGACY_COMPATIBILITY | Yes |
| brandProfileId | String? | Yes |
| canonicalCampaignAssetId | String? | Yes |
| canonicalBriefId | String? | Yes |
| subjectCreatorProfileId | String? | Yes |
| subjectCreatorWorkspaceId | String? | Yes |
| actorUserId | String? | Yes |
| actorMembershipId | String? | Yes |
| actorRole | CreatorTeamRole? | Yes |
| campaignInvitationId | String? | Optional |
| firstQualifiedTouchId | String? | Optional |
| conversionTouchId | String? | Optional |
| statusVersion | Int default 0 | Canonical starts at 1 |
| terminalAt | DateTime? | Null while PENDING; required for a canonical terminal status |

Retain campaignId, status, source, appliedAt, createdAt, and updatedAt for both
authorities.

For canonical rows, source is server-authored: a proven Campaign Share maps to
SHARE; an invitation maps to OUTREACH only when canonical Outreach lineage is
present; every other invitation/direct/opportunities entry maps to DIRECT
while invitation and ingress IDs preserve exact origin. The client cannot
author source.

Rename in Prisma, without changing physical columns:

| P0 field | P1.1 Prisma name | Disposition |
|---|---|---|
| requestId | legacyRequestId | Nullable; LEGACY_COMPATIBILITY only. Existing unique index remains. |
| campaignAssetId | legacyCampaignProductId | Nullable; still points to uce_campaign_products.product_id. |
| briefId | legacyBriefId | Nullable; still points to uce_campaign_briefs.brief_id. |
| approvedAt | legacyApprovedAt | Compatibility-only. |
| rejectedAt | legacyRejectedAt | Compatibility-only. |
| withdrawnAt | legacyWithdrawnAt | Compatibility-only. |
| expiredAt | legacyExpiredAt | Compatibility-only. |
| supersededAt | legacySupersededAt | Compatibility-only. |
| supersededByApplicationId and relations | Same physical lineage, explicitly legacy-only | Retained for historical/otherwise legitimate rows. |

campaignCreatorId becomes nullable. It is optional grouping lineage and never
identity or authorization.

The authority-shape CHECK is exact:

- LEGACY_COMPATIBILITY requires legacyRequestId, campaignCreatorId,
  legacyCampaignProductId, and legacyBriefId; requires all canonical
  identity/selection fields null; requires statusVersion 0.
- C03_CANONICAL requires brandProfileId, canonicalCampaignAssetId,
  canonicalBriefId, subjectCreatorProfileId, subjectCreatorWorkspaceId,
  actorUserId, actorMembershipId, and actorRole; requires legacyRequestId,
  legacyCampaignProductId, legacyBriefId, all legacy terminal/supersession
  fields null; requires statusVersion >= 1.
- campaignCreatorId may be populated on a canonical row only as non-authority
  grouping lineage.
- attribution/invitation columns are nullable but, when present, must satisfy
  composite Campaign and subject constraints described below.

All P0 rows backfill to LEGACY_COMPATIBILITY with statusVersion 0. P1.1 does
not promote a legacy Application.

### 6.2 Physical ancestry and actor/subject integrity

Add these keys/FKs:

1. unique uce_campaigns(id, brand_profile_id);
2. unique uce_campaign_assets(campaign_id, campaign_asset_id);
3. unique campaign_briefs(campaign_asset_id, brief_id);
4. unique creator_workspaces(id, owner_profile_id);
5. Application (campaign_id, brand_profile_id) references Campaign
   (id, brand_profile_id), RESTRICT;
6. Application (campaign_id, canonical_campaign_asset_id) references Asset
   (campaign_id, campaign_asset_id), RESTRICT;
7. Application (canonical_campaign_asset_id, canonical_brief_id) references
   Brief (campaign_asset_id, brief_id), RESTRICT;
8. Application (subject_creator_workspace_id, subject_creator_profile_id)
   references CreatorWorkspace (id, owner_profile_id), RESTRICT;
9. actorMembershipId references CreatorWorkspaceMember.id, actorUserId
   references User.id, both RESTRICT.

A canonical Application BEFORE INSERT trigger additionally proves that the
stored membership is currently active and, at insertion time, has the stored
workspace, User, and role. This is intentionally a trigger rather than a
composite FK over mutable membership role/active fields: historical
Applications must not prevent a later legitimate role change/removal, and the
stored submission role must remain immutable audit evidence.

The same trigger proves optional invitation and ingress references match the
Application Campaign and bound Creator subject.

### 6.3 Uniqueness and query indexes

Add the partial same-opportunity unique index:

~~~text
(subject_creator_profile_id,
 campaign_id,
 canonical_campaign_asset_id,
 canonical_brief_id)
WHERE authority_version = C03_CANONICAL
  AND status IN (PENDING, APPROVED, REJECTED, SUPERSEDED)
~~~

The SQL must use correctly type-qualified PostgreSQL enum literals. WITHDRAWN
and EXPIRED are intentionally outside the index. C-03 never creates
SUPERSEDED during ordinary approval, but the predicate retains its frozen
historical/future-authorized semantics.

Add partial count/read indexes:

- (subject_creator_profile_id, campaign_id, status, applied_at DESC) for
  canonical rows whose status is not WITHDRAWN;
- (subject_creator_profile_id, brand_profile_id, status, applied_at DESC) for
  canonical rows whose status is not WITHDRAWN;
- (subject_creator_workspace_id, applied_at DESC, id DESC) for canonical
  history;
- (brand_profile_id, campaign_id, status, applied_at DESC) for canonical Brand
  applicants;
- campaignInvitationId, firstQualifiedTouchId, conversionTouchId, and
  actorMembershipId lookup indexes.

Quota values are not persisted. P1.3 counts every status except WITHDRAWN while
holding the Creator workspace lock. EXPIRED may reapply to the same
opportunity, but it still counts toward the frozen non-WITHDRAWN quota.

## 7. Snapshot versioning and immutability

Retain UceApplicationSnapshot and its five P0 JSON partitions:

- campaignContext;
- campaignAssetContext;
- briefContext;
- commercialContext;
- creatorIdentity.

Add:

| Field | Type |
|---|---|
| schemaVersion | UceApplicationSnapshotVersion? |
| actorContext | Json? |
| attributionContext | Json? |

P0 snapshots retain schemaVersion, actorContext, and attributionContext as
null. Their existing JSON is not rewritten.

For a C03_CANONICAL Application, the snapshot must:

- use C03_APPLICATION_SNAPSHOT_V1;
- populate all seven JSON partitions with the exact versioned Zod contract;
- include Brand identity/safe destinations, Campaign context, selected Asset,
  full selected Brief/ordered Deliverables/guidance/references/rights,
  commercial/support values with missing distinct from zero, bounded Creator
  subject display context, submission actor IDs/role, and first/conversion
  attribution;
- exclude raw invitation tokens, provider credentials/diagnostics, unnecessary
  email, selection scores, private Brand notes, and arbitrary client data.

Change the snapshot Application FK from ON DELETE CASCADE to ON DELETE
RESTRICT. A DEFERRABLE INITIALLY DEFERRED constraint trigger requires exactly
one versioned snapshot for every canonical Application by commit. A canonical
snapshot cannot be updated. No Application snapshot may be physically deleted
through the database runtime path. A second snapshot is rejected by the
existing unique application_id key. A legacy snapshot may be changed only by
a separately accepted, explicit reconciliation migration; no normal service
receives that mutation capability.

## 8. Invitation, ingress, continuation, and idempotency persistence

### 8.1 CampaignOpportunityInvitation

Add model/table CampaignOpportunityInvitation /
campaign_opportunity_invitations:

| Field | Type/rule |
|---|---|
| id | String UUID primary key |
| campaignId | String, RESTRICT FK |
| tokenDigest | Char(64), unique, lowercase SHA-256 hex of at least 32 random bytes |
| intendedCreatorProfileId | String? RESTRICT FK |
| intendedNativeInstagramIdHmac | Char(64)? |
| intendedVerifiedEmailHmac | Char(64)? |
| boundCreatorProfileId | String? |
| boundCreatorWorkspaceId | String? |
| issuedByActorUserId | String RESTRICT FK |
| issuedAt | DateTime default now |
| expiresAt | DateTime |
| revokedAt | DateTime? |
| revokedByActorUserId | String? RESTRICT FK |
| bindingVersion | Int default 0 |

Checks/triggers require:

- at least one intended-subject evidence field;
- expiresAt greater than issuedAt;
- digest/HMAC lowercase 64-hex shape;
- bound profile/workspace both null at version 0 or both present at version 1;
- bound workspace owns bound profile;
- initial bind is the only null-to-value transition; rebind/unbind is rejected;
- Campaign, token digest, intended evidence, issuer, issuedAt, and expiresAt are
  immutable;
- revocation is a single null-to-(time, actor) transition; un-revoke/change is
  rejected;
- deletion is prohibited;
- unique (campaign_id, id) supports composite references.

No legacy UceCampaignCollaboration.invitationToken is copied, hashed, or
promoted. It lacks accepted entropy, intended-subject, and binding evidence.

### 8.2 CampaignIngressTouch

Add model/table CampaignIngressTouch / campaign_ingress_touches:

| Field | Type/rule |
|---|---|
| id | String UUID primary key |
| kind | CampaignIngressTouchKind |
| referenceDigest | Char(64)? unique |
| campaignId | String, RESTRICT FK |
| entrySurface | CampaignOpportunityEntrySurface |
| entryAuthorityKind | CampaignOpportunityEntryAuthorityKind |
| campaignShareId | String? |
| campaignInvitationId | String? |
| boundCreatorProfileId | String? |
| boundCreatorWorkspaceId | String? |
| utmSource, utmMedium, utmCampaign | VarChar(100)? |
| utmContent, utmTerm | VarChar(200)? |
| occurredAt | DateTime, server-authored |
| boundAt | DateTime? |
| createdAt | DateTime default now |

QUALIFIED_INGRESS requires a digest-only opaque reference.
APPLICATION_CONVERSION has no client credential and is created server-side.
Authority-shape checks require DIRECT with no share/invitation ID, SHARE with
exactly a same-Campaign share ID, or INVITATION with exactly a same-Campaign
invitation ID.

UTM input is allowlisted, NFKC-normalized, trimmed, control-character stripped,
and length-bounded before persistence. Unknown fields and raw credentials are
dropped. VarChar limits and database CHECKs rejecting control characters
prevent direct-SQL bypass of the same storage boundary.

The row is append-oriented. Only one atomic null-to-value subject binding and
boundAt assignment is permitted after insert. Provenance, Campaign, authority,
UTM, and server time cannot change; rebind/unbind and delete are rejected.
Bound workspace/profile must be the canonical Owner pair.

### 8.3 CreatorEntryContinuation

Retain C-01 ownership and add:

| Field | Type/default |
|---|---|
| contextVersion | Int default 1 |
| entrySurface | CampaignOpportunityEntrySurface default DIRECT_CAMPAIGN_LINK |
| entryAuthorityKind | CampaignOpportunityEntryAuthorityKind default DIRECT |
| campaignShareId | String? |
| campaignInvitationId | String? |
| firstQualifiedTouchId | String? |
| boundCreatorWorkspaceId | String? |
| boundCreatorProfileId | String? |

Backfill every P0 continuation to version 1, DIRECT_CAMPAIGN_LINK, DIRECT, and
null optional references. Preserve its token digest, 43-character opaque-token
transport, HttpOnly cookie, 24-hour TTL, User binding, one-time consumption,
and retry grace unchanged.

Composite FKs prove share, invitation, and first touch belong to the same
Campaign. Workspace/profile is an all-null or exact Owner pair. The existing
immutable-authority trigger is extended so typed context and a completed
workspace/profile binding cannot be rewritten. No arbitrary return URL, raw
UTM, raw invitation token, entitlement result, or Application ID is stored.

### 8.4 ApplicationCommandReceipt

Add model/table ApplicationCommandReceipt /
application_command_receipts:

| Field | Type/rule |
|---|---|
| id | String UUID primary key |
| commandType | ApplicationCommandType |
| actorUserId | String RESTRICT FK |
| authoritySubjectId | String; CreatorProfile ID for SUBMIT/WITHDRAW and BrandProfile ID for APPROVE/REJECT |
| idempotencyKeyDigest | Char(64), SHA-256 digest of the high-entropy request header |
| requestFingerprint | Char(64), canonical request fingerprint |
| applicationId | String RESTRICT FK |
| transitionId | String unique, RESTRICT FK to ApplicationDomainEvent.transitionId |
| createdAt | DateTime default now |

Unique
(command_type, actor_user_id, authority_subject_id, idempotency_key_digest)
implements the accepted scoped key without persisting the raw key. The receipt
stores only committed final resource/transition identity and is immutable and
non-deletable. Failed or rolled-back commands leave no receipt. System expiry
does not use a client command receipt. An insert trigger verifies that
authoritySubjectId equals the Application Creator subject for SUBMIT/WITHDRAW
or the Application Brand for APPROVE/REJECT.

## 9. Application event persistence and database transition guards

### 9.1 ApplicationDomainEvent

Add model/table ApplicationDomainEvent / application_domain_events:

| Field | Type/rule |
|---|---|
| id | String UUID primary key |
| transitionId | String unique |
| applicationId | String RESTRICT FK |
| applicationVersion | Int |
| eventName | ApplicationDomainEventName |
| eventVersion | Int default 1 |
| occurredAt | DateTime, server-authored |
| fromStatus | UceApplicationStatus? |
| toStatus | UceApplicationStatus |
| actorClass | ApplicationEventActorClass |
| actorUserId | String? RESTRICT FK |
| actorMembershipId | String? RESTRICT FK |
| actorRole | CreatorTeamRole? |
| subjectCreatorProfileId | String RESTRICT FK |
| subjectCreatorWorkspaceId | String RESTRICT FK |
| brandProfileId | String RESTRICT FK |
| campaignId | String RESTRICT FK |
| canonicalCampaignAssetId | String RESTRICT FK |
| canonicalBriefId | String RESTRICT FK |
| approvedCollaborationId | String?; relation/FK intentionally deferred to P1.4 |
| createdAt | DateTime default now |

Unique (application_id, application_version) permits one durable event per
committed Application version. Event name/status/actor checks are:

- submitted: null to PENDING, CREATOR_TEAM_USER with User/membership/role;
- approved: PENDING to APPROVED, BRAND_USER with User and no Creator
  membership/role;
- rejected: PENDING to REJECTED, BRAND_USER with User and no Creator
  membership/role;
- withdrawn: PENDING to WITHDRAWN, CREATOR_TEAM_USER with
  User/membership/role;
- expired: PENDING to EXPIRED, SYSTEM with no actor IDs/role.

An insert trigger validates all duplicated identity/selection values against
the current immutable Application and validates applicationVersion/toStatus
against the version being committed. Events are append-only: UPDATE and DELETE
are rejected.

### 9.2 UceApplication transition guard

For C03_CANONICAL rows:

- INSERT is permitted only as PENDING, statusVersion 1, terminalAt null;
- an update that does not change status cannot change statusVersion or
  terminalAt;
- the only transitions are PENDING to APPROVED, REJECTED, WITHDRAWN, or
  EXPIRED;
- a terminal transition increments statusVersion by exactly one and sets one
  server terminalAt;
- return to PENDING, terminal-to-terminal transition, PENDING to SUPERSEDED,
  selection/identity/authority mutation, or physical deletion is rejected;
- source, appliedAt, Campaign, Brand, canonical selection, subject, and
  submission actor evidence are immutable.

Physical deletion is rejected for both C03_CANONICAL and
LEGACY_COMPATIBILITY Applications. Historical legacy rows are not disposable
merely because they remain compatibility-only.

A DEFERRABLE INITIALLY DEFERRED constraint trigger requires the matching
(applicationId, statusVersion) event by commit, in addition to the exactly-one
snapshot rule. Stable trigger/check errors use SQLSTATE 23514 or 23503 plus a
stable C03_* token.

LEGACY_COMPATIBILITY status transitions remain available only to explicitly
quarantined compatibility services during P1.1. Canonical guards never
reinterpret or auto-correct their historical status/timestamp shape.

## 10. Shared Campaign locking seam

Add one shared service:

~~~ts
CampaignLifecycleLockService.lockCampaign(
  tx: Prisma.TransactionClient,
  campaignId: string,
): Promise<void>
~~~

Its only implementation is a transaction-client query equivalent to:

~~~sql
SELECT id
FROM uce_campaigns
WHERE id = $1
FOR UPDATE
~~~

It throws not-found when no row is locked and has no non-transaction fallback.
It follows the accepted C-05 lockCreatorTeam pattern.

P1.1 must route every existing Campaign lifecycle writer through a transaction
and this seam, including:

- BrandUceCampaignService.patchStatus and all publish/go-live/pause/resume/
  complete/archive callers;
- CanonicalCampaignCreateService.publishDraft;
- first executable Brief publication that may move PUBLISHED to LIVE;
- any Asset/Brief lifecycle mutation that can race Application submission.

The common order remains:

~~~text
Creator workspace
→ Campaign
→ Creator Instagram integration
→ invitation
→ Campaign Asset
→ Brief
→ Application
~~~

Brand-only Campaign mutations start at Campaign and must never acquire a
Creator workspace afterward. No provider, email, PDF, analytics, or
Intelligence call occurs while locks are held.

## 11. Canonical read-adapter delta

Introduce one internal, versioned Campaign-for-Application adapter consumed by
Brand projections now and by C-03 Opportunity/Application services later. It
must:

1. resolve one UceCampaign with mapped creationSource/canonicalDefinition,
   Strategy, Targeting, Commercials, Assets, and canonical Brief graph;
2. project visibility from visibilityScope, or from exactly one legacy
   visibilityScopes value; missing/conflicting values return
   CAMPAIGN_VISIBILITY_CONFIGURATION_INVALID;
3. project platforms and commercial/support values only from canonicalVersion
   fields or a Zod-valid canonical_definition; it never treats legacy default
   zero as authored zero;
4. project applicationDeadline only from the dedicated nullable column;
5. project Brief lifecycle from status, never by independently trusting
   legacyIsActive;
6. mark a Brief application-selectable only when Asset is ACTIVE, Brief is
   PUBLISHED, and the complete frozen Brief/Deliverable/rights validator
   passes;
7. preserve Brand-only Assets and repeated same-format Deliverables;
8. return a discriminated unavailable result for incomplete minimal legacy
   canonical Brief rows rather than inventing rich fields.

Update CampaignQueryService and canonical readiness calculation to consume the
same adapter. Keep Products/Briefs summary explicitly
LEGACY_COMPATIBILITY. No P1.1 read adapter may expose Creator Opportunity
commercial/detailed-Brief DTOs; redaction policy belongs to P1.2.

Update CanonicalCampaignBriefService and its DTO/Zod boundary to the accepted
Draft/Publish/Pause/Resume model. Child mutation must be ID-aware and
transactional; the P0 delete-all/recreate Deliverable behavior is retired
because it destroys identity and AMPLIFY_REEL references.

Do not persist isEditable/isLocked. Application existence alone does not lock
Brief content. The service consumes the accepted Collaboration-owned
execution-instantiated check when that port is available; P1.1 must neither
infer execution from an Application nor invent a parallel lock flag.

## 12. Brand-service compatibility implications

P1.1 keeps existing Brand runtime compiling without allowing it to operate on
canonical rows as legacy rows:

- CampaignApplicationService.syncLegacyApplicantsCompatibilityCommand writes
  only LEGACY_COMPATIBILITY and never promotes handle/email lineage.
- Its legacy list/approve/reject queries explicitly filter
  authorityVersion = LEGACY_COMPATIBILITY and pass through a runtime
  legacy-shape assertion before dereferencing nullable legacy fields.
- It must return a stable handoff/not-available result for C03_CANONICAL rows
  until P1.3 supplies the canonical Applicants adapter; it must not decrement
  inventory, supersede siblings, provision Users/Collaborations, or initialize
  30/70 values for a canonical row.
- Campaign application counts may include both authorities, but any
  compatibility detail is labeled by authority and does not collapse multiple
  canonical Applications.
- BrandUceBriefService and the uce_campaign_briefs routes remain
  compatibility-only. They do not become the canonical Brief authoring path.
- UceCampaignProduct/UceCampaignBrief FKs and current legacy routes remain
  intact; no table, column, ID, snapshot, or history is deleted.
- Full canonical Brand approve/reject delegation is P1.3; Collaboration and
  Notification behavior is P1.4.

## 13. Migration preflight and backfill rules

The preflight is read-only, runs before DDL, emits a machine-readable JSON
report, and exits nonzero on structural contradictions. It records row counts
and IDs, never raw tokens, email, JSON bodies, or provider credentials.

Required checks:

1. Verify the exact 74 P0 migration names/checksums and expected P0 columns,
   constraints, enums, and FK targets.
2. Count Campaign creation_source values outside MANUAL/AI_RECOMMENDED.
3. Classify canonical_definition as absent, valid v1.2, or invalid; never
   repair invalid JSON semantics by inference.
4. Classify visibilityScopes as exactly-one, missing, or conflicting.
5. Classify canonical commercial provenance; separately report default zero
   and old 30-percent values.
6. Inventory every campaign_briefs row, legacy is_active value, and all
   Deliverables. Report orphan/cross-parent evidence even though P0 FKs should
   prevent it.
7. Inventory every UceApplication by all six statuses, with a dedicated
   SUPERSEDED count, missing snapshot count, legacy FK ancestry, optional
   CampaignCreator.creatorProfileId, and terminal timestamp inconsistencies.
8. Inventory Creator workspace Owner-pair and active membership contradictions
   using accepted C-01/C-05 identity rules.
9. Inventory CreatorEntryContinuation expiry/binding shape.
10. Count legacy plaintext invitationToken rows without outputting token
    values.

Automatic backfill is limited to:

- map P0 Brief is_active to PUBLISHED/PAUSED and creationSource MANUAL;
- populate Campaign platforms, singular visibility, and canonical commercial
  fields only from a schema-valid canonical_definition or an exact
  unambiguous value;
- map all P0 Applications to LEGACY_COMPATIBILITY/statusVersion 0;
- leave every canonical Application identity/selection/attribution field null;
- leave P0 snapshot schemaVersion/actorContext/attributionContext null and
  preserve the five JSONB values semantically without issuing an UPDATE to
  those partitions;
- initialize P0 continuations to typed DIRECT context without changing digest,
  binding, expiry, or consumption;
- leave liveAt and applicationDeadline null where direct authority is absent.

Prohibited backfill:

- no title/SKU/handle/email similarity;
- no Product-to-Asset or legacy Brief-to-canonical Brief guess;
- no legacy Application promotion in P1.1;
- no legacy invitation token promotion;
- no default-zero-to-authored-zero conversion;
- no publication-end-to-application-deadline conversion;
- no Campaign liveAt inference;
- no history deletion, collapse, reactivation, sibling supersession, or
  synthetic snapshot/event.

An ambiguity report is an accepted migration result when data remains safely
LEGACY_COMPATIBILITY. A contradiction that would violate a new NOT NULL/FK/
CHECK/unique invariant stops before DDL and requires Parent review.

## 14. Fresh-database and seeded legacy-upgrade proof

### Fresh database

Against disposable PostgreSQL 16:

1. start from an empty database;
2. run all 74 immutable migrations plus the four proposed P1.1 migrations;
3. assert 78 successful _prisma_migrations rows and no rolled-back/incomplete
   row;
4. run prisma migrate status, Prisma 6.19.3 generate/validate, schema
   introspection, all P1.1 PostgreSQL tests, full tests, and production build;
5. prove all constraints, partial-index predicates, FK delete/update actions,
   trigger deferrability, and event enum mappings through catalog assertions.

### Seeded legacy upgrade

Use an exact P0-SHA worktree to deploy only the 74 P0 migrations into a named
disposable database, then run and extend
scripts/c03-p0-seed-legacy-fixture.mjs. Switch to the candidate checkpoint and
deploy the P1.1 migrations.

The fixture must cover:

- the existing one legacy LIVE Campaign, Product, independent Brief, PENDING
  Application, snapshot, zero/30 commercial defaults, conflicting visibility,
  and plaintext legacy invitation;
- every UceApplicationStatus, including SUPERSEDED;
- minimal canonical Brief rows with is_active true and false;
- a valid canonical_definition row and invalid/absent definitions;
- exact and unresolved CampaignCreator-to-CreatorProfile lineage;
- current C-01 continuation unbound, bound, consumed, and expired cases.

Post-upgrade assertions:

- all original IDs, row counts, JSON partitions, status values, timestamps,
  Product/Brief FKs, and legacy token columns remain present;
- every old Application is LEGACY_COMPATIBILITY with canonical columns null;
- SUPERSEDED remains a valid legacy status and is not auto-generated;
- old snapshots remain readable and unversioned;
- minimal Brief rows map status but remain C03-submit-unavailable;
- conflicting visibility and ambiguous/default-zero commercial state remain
  unavailable;
- no canonical invitation/Application/event/receipt is synthesized;
- all new constraints are valid and the migration can run exactly once.

## 15. Required negative PostgreSQL acceptance tests

P1.1E must execute real PostgreSQL tests, not mocks, for at least:

1. Campaign/Brand composite mismatch rejection.
2. Application Campaign/Asset mismatch rejection.
3. Application Asset/Brief mismatch rejection.
4. Brief ID and parent mutation rejection.
5. Deliverable ID/parent mutation, cross-Brief AMPLIFY_REEL target, and
   self-target rejection.
6. mixed and incomplete Application authority shapes.
7. canonical INSERT in a non-PENDING state or version other than 1.
8. same-opportunity duplicates in PENDING, APPROVED, REJECTED, and the catalog
   predicate for SUPERSEDED; WITHDRAWN/EXPIRED permit a new row.
9. inactive/wrong-workspace/wrong-User/wrong-role actor evidence at insertion.
10. subject profile that is not the workspace Owner.
11. optional invitation/first-touch/conversion-touch with the wrong Campaign
    or bound subject.
12. commit without exactly one canonical snapshot.
13. second snapshot, wrong snapshot version/shape, snapshot update, and
    snapshot delete.
14. canonical Application identity/selection/source/appliedAt mutation and
    Application delete.
15. PENDING to PENDING with version change; PENDING to SUPERSEDED; return to
    PENDING; terminal-to-terminal; terminalAt/version inconsistency.
16. commit without the matching Application event.
17. wrong event name/from/to/actor class, identity mismatch, duplicate
    application version, duplicate transition ID, event update, and event
    delete.
18. duplicate scoped idempotency key; malformed digest/fingerprint; receipt
    mutation/delete; same transition attached to two receipts.
19. invitation with no intended evidence, weak/malformed digest/HMAC,
    non-positive lifetime, half-binding, wrong Owner pair, rebind/unbind,
    un-revoke/revoke rewrite, and delete.
20. ingress authority/reference mismatch, malformed digest, overlong/control
    value bypass, provenance rewrite, wrong subject binding, rebind/unbind, and
    delete.
21. continuation SHARE/INVITATION reference from another Campaign, invalid
    authority shape, typed-context rewrite, and subject rebind.
22. snapshot/event deferred triggers in both insertion orders inside one
    transaction.
23. legacy PENDING/APPROVED/REJECTED/WITHDRAWN/EXPIRED/SUPERSEDED rows remain
    outside canonical partial uniqueness and remain readable.
24. two transactions proving CampaignLifecycleLockService serialization and
    no reverse lock edge in the Brand-only path.

Service-level quota and command contention proofs remain mandatory in P1.3/P3;
P1.1 supplies the indexes, lock seam, transition guards, and database
foundations they require.

## 16. Explicit exclusions

P1.1 does not:

- open a canonical Creator Apply route or create a canonical Application in
  normal runtime;
- implement Opportunity entitlement/redaction or C-05 Campaign capabilities;
- implement invitation issue/exchange/bind policy beyond persistence;
- implement Submit/Withdraw/Approve/Reject/Expire orchestration;
- change Collaboration uniqueness or Notification scope;
- retire legacy endpoints at cutover;
- add frontend code, PDF rendering, AWS, provider calls, or production data
  access;
- edit any of the existing 74 migrations.

## 17. Reconstruction terminal state

~~~text
C03_P1_1_TECHNICAL_RECONSTRUCTION = READY_FOR_PARENT_REVIEW
PRODUCT_QUESTIONS = NONE
ARCHITECTURE_CONFLICTS = NONE
P1_1_IMPLEMENTATION = NOT_AUTHORIZED
~~~
