# C-03 Architecture Freeze V1

**Artifact:** `C03_ARCHITECTURE_FREEZE_V1`
**Module:** C-03 — Creator Campaign Participation / Apply
**Status:** ACCEPTED
**Canonical backend base:** `development@4c5f42858b950b7cd342f8972f99f548f3daa942`
**Canonical frontend base:** `development@323658d4b147b95b5629ff8d91fa90b8fe9077e4`

## 1. Freeze verdict

```text
PRODUCT_QUESTIONS = NONE
ARCHITECTURE_QUESTIONS = NONE
UNRESOLVED_CROSS_CONTRACT_CONFLICTS = NONE
C03_ARCHITECTURE = ACCEPTED
```

This architecture consumes the frozen C-03 Product register and accepted C-01/C-05 authority. It does not authorize implementation, production migration, AWS work, live Meta state, or C-04 workflow implementation.

## 2. System boundary

| Boundary | Authority used by C-03 |
|---|---|
| Campaign | Brand/shared Campaign aggregate, lifecycle, singular visibility, targeting, commercials, application availability, Assets, Briefs, Deliverables, rights, and support. |
| Identity | C-05 `CreatorWorkspaceActorService`: signed-in User/membership/role as actor; workspace Owner Creator profile as subject. |
| Instagram | One provider-neutral capability projection over C-01/C-05 persisted authorization state. No live provider call in Opportunity or Submit. |
| C-01 | Authentication and digest-only continuation transport/bind/consume lifecycle. |
| C-03 | Opportunity entitlement/redaction, invitation, ingress attribution, Application commands/history/snapshot/events, and Application Brief Pack. |
| Applicants | Brand-side Application decision surfaces consume the same canonical Application service. |
| C-04 | Provision exactly one Collaboration from one approved Application and its immutable snapshot. |
| Notifications | Materialize/deliver from durable Application events and transactionally queued intent. |

C-03 creates no parallel Campaign, Creator, Instagram, Application, or Collaboration truth.

## 3. One Opportunity authority

`CampaignOpportunityPolicyService` is the only backend authority allowed to decide Opportunity disclosure and Apply capability. Controllers, frontend routes, notification deep links, and legacy adapters may consume its projection; they may not duplicate its predicate.

Conceptual input:

```ts
type OpportunityPolicyInputV1 = {
  campaignId: string;
  requestClass: "ANONYMOUS" | "AUTHENTICATED_CREATOR" | "OTHER_ACCOUNT";
  actorContext?: CreatorWorkspaceActorContext;
  instagramCapability?: CreatorInstagramOpportunityCapabilityV1;
  invitationId?: string;
  ingressTouchId?: string;
  now: Date;
};
```

The service reads current canonical Campaign/Asset/Brief state, current Creator subject/team state, current persisted Instagram state, backend eligibility, and invitation authority. It returns a versioned discriminated projection:

```ts
type OpportunityAccessV1 =
  | {
      state: "TEASER";
      reason: "AUTHENTICATION_REQUIRED" | "CREATOR_ACCOUNT_REQUIRED";
      recoveryAction: "SIGN_IN_OR_CREATE_CREATOR";
    }
  | {
      state: "LOCKED";
      reason: OpportunityBlockedReasonV1;
      recoveryAction:
        | "CONNECT_INSTAGRAM"
        | "REVALIDATE_INSTAGRAM"
        | "RECONNECT_INSTAGRAM"
        | "USE_INVITED_ACCOUNT"
        | null;
    }
  | {
      state: "AUTHORIZED";
      applicationsOpen: boolean;
      canApply: boolean;
      applyBlockedReason: ApplicationBlockedReasonV1 | null;
      applicationDeadline: string | null;
    };
```

Response construction is allowlist-based:

- `TEASER` contains only a safe PUBLIC summary and never commercials or detailed Briefs.
- A restricted Campaign without entitlement returns a generic `LOCKED` projection with no restricted Campaign, Asset, Brief, targeting, or commercial payload. Unknown and non-disclosable IDs remain non-enumerating.
- `AUTHORIZED` may contain complete Creator-facing Campaign, Asset, Brief, Deliverable, rights, support, and commercial projections.
- Commercial and detailed Brief fields are structurally absent before authorization; they are never sent as `null`, blurred, hidden with CSS, or embedded in hydration state.
- `applicationsOpen`, `canApply`, `applyBlockedReason`, and `applicationDeadline` are backend-authored. `publishUntil` is never presented as an Application deadline.
- Existing Application summaries are independent records, not an `already_applied` boolean.

Sensitive Opportunity responses use `Cache-Control: private, no-store` and an appropriate `Vary` policy. Shared/public caches must never cache an authorized projection.

## 4. Opportunity Access Gate

```text
authenticated canonical Creator subject
+ usable canonical Instagram connection
+ Campaign visibility entitlement
= commercial and detailed-Opportunity access
```

| Visibility | Entitlement predicate |
|---|---|
| `PUBLIC` | Authenticated Creator subject + usable Instagram. |
| `ELIGIBLE_CREATORS_ONLY` | PUBLIC identity predicates + authoritative backend `ELIGIBLE`. |
| `INVITE_ONLY` | PUBLIC identity predicates + valid, matching, bound/bindable invitation. |

Apply requires the same gate plus current Campaign application availability, active Asset, published associated Brief, same-opportunity policy, quotas, and command safety. An Application-level block does not redact commercials from a Creator who still passes the Opportunity Access Gate.

The evaluator returns reason codes, never Boolean-only authority. Eligibility has exactly `ELIGIBLE | INELIGIBLE | UNAVAILABLE`; `UNAVAILABLE` fails closed and Submit returns a retryable authoritative-dependency response. Discovery review state, match score, selection likelihood, QA email, public Product stock, and frontend state are never entitlement inputs.

Eligibility is exposed through a transaction-aware `CampaignOpportunityEligibilityPort`. Its result carries the Campaign targeting version and canonical Creator-facts version used. Submit evaluates from persisted authority after locking the Campaign and the applicable Creator-fact/Instagram rows; a materialized result is usable only when both versions still match. No live provider or Intelligence call occurs in the transaction. A concurrent facts/targeting change therefore either commits before the locked evaluation and is observed, or commits after the Application; stale or unavailable evidence fails closed.

## 5. Creator subject and actor authorization

The accepted C-05 transaction-aware resolver supplies:

```ts
type CreatorCampaignActorV1 = {
  actorUserId: string;
  actorMembershipId: string;
  actorRole: "OWNER" | "MANAGER" | "ASSISTANT";
  subjectCreatorProfileId: string;
  subjectCreatorWorkspaceId: string;
  subjectOwnerUserId: string;
};
```

Permissions are frozen:

| Role | Opportunity view | Apply | Own-subject history | Withdraw pending Application |
|---|---:|---:|---:|---:|
| OWNER | yes | yes | yes | yes |
| MANAGER | yes | yes | yes | yes |
| ASSISTANT | yes | yes | yes | no |

For this module, `APPLY` means explicit Application submission only; it does not confer withdrawal authority. Withdrawal requires both `Application.status = PENDING` and a current OWNER or MANAGER actor. ASSISTANT may view and submit for the Owner subject but may not withdraw. Every protected read resolves current active membership. Every mutation re-resolves after taking the workspace lock. An open page, stale JWT claim, old membership row, email match, or cached frontend role never authorizes a command. Applications persist actor and subject separately. Actor email and mutable handle are audit display inputs at most, never identity keys.

## 6. Provider-neutral Instagram capability

One pure evaluator is shared across C-01, C-05, and C-03:

```ts
type CreatorInstagramOpportunityCapabilityV1 = {
  lifecycleState:
    | "NOT_CONNECTED"
    | "CONNECTED_HEALTHY"
    | "REVALIDATION_REQUIRED"
    | "RECONNECT_REQUIRED"
    | "PROVIDER_BLOCKED_RECOVERABLE"
    | "DISCONNECTED_IDENTITY_RETAINED";
  usableForOpportunity: boolean;
  recoveryAction:
    | "CONNECT_INSTAGRAM"
    | "REVALIDATE_INSTAGRAM"
    | "RECONNECT_INSTAGRAM"
    | null;
};
```

`usableForOpportunity` is true only when all are true:

```text
stable native Instagram user ID exists
tokenStateCondition = ACTIVE
known token expiry has not passed
disconnectedAt is null
authorizationHealth = USABLE
basicAuthorizationCapability = AVAILABLE
```

Insights capability and mutable Instagram handle are not gates. Public DTOs never expose provider ID, tokens, scopes, integration ID, generation/version, or provider diagnostics. Submit locks/reads the subject's integration again; a revocation racing Submit produces one serializable outcome without a provider request in the transaction.

## 7. Invitation authority

Introduce `CampaignOpportunityInvitation` as a C-03 pre-Application security aggregate, not a Collaboration or outreach status.

Required persistence:

```text
id
campaignId
tokenDigest                    UNIQUE, SHA-256 of >=32 random bytes
intendedCreatorProfileId?      preferred direct subject evidence
intendedNativeInstagramIdHmac? stable provider identity evidence
intendedVerifiedEmailHmac?     pre-binding fallback only
boundCreatorProfileId?
boundCreatorWorkspaceId?
issuedByActorUserId
issuedAt
expiresAt
revokedAt?
revokedByActorUserId?
bindingVersion
```

At least one intended-subject evidence field is required. The email HMAC is permitted only over an already verified canonical Owner-account address using a server-held pepper; it is invitation claim evidence, never Creator identity or actor authorization. Team actor email is not matched. A handle is never binding evidence.

On first entitled use, the backend locks the invitation and atomically validates Campaign, expiry/revocation, intended subject evidence, C-05 subject, and stable Instagram identity, then monotonically binds Creator profile/workspace. A bound invitation can never rebind. It remains usable for the same subject's permitted Applications until expiry/revocation; viewing or first submission does not consume it. Quotas and duplicate policy remain authoritative.

Canonical invitation links place the high-entropy credential in a URL fragment. The frontend applies `Referrer-Policy: no-referrer`, removes the fragment with `history.replaceState` before analytics or external requests, and exchanges the raw credential once through a no-store POST. The backend stores only its digest and a safe internal invitation ID in C-01 continuation context. Raw tokens are forbidden in paths, query strings, logs, analytics, events, notification payloads, snapshots, browser storage, and returned JSON.

`invitationId` in an Opportunity-policy input is trusted server-resolved context, never a client-authoritative UUID. Before authentication it can originate only from a successfully digested exchange held in the HttpOnly continuation context; after binding it can originate from that consumed context or a server lookup by the exact bound Creator subject. Supplying or guessing an internal invitation ID cannot establish possession, intended-subject evidence, or entitlement.

Anonymous failures are non-enumerating. After a token digest is proven, `EXPIRED`/`REVOKED` may be shown without revealing intended identity. An authenticated wrong subject receives `INVITATION_SUBJECT_MISMATCH`, never the expected person's details.

## 8. Typed C-01 continuation and attribution

C-01 continues to own the opaque 43-character digest-only token, HttpOnly host cookie, 24-hour TTL, monotonic User binding, one-time consume, and bounded retry grace. C-03 extends its persisted context only:

```ts
type CampaignOpportunityContinuationSeedV1 = {
  schemaVersion: 1;
  campaignId: string;
  entrySurface:
    | "DIRECT_CAMPAIGN_LINK"
    | "TRACKED_CAMPAIGN_SHARE"
    | "BRAND_INVITATION"
    | "CREATOR_OPPORTUNITIES";
  entryAuthority:
    | { kind: "DIRECT" }
    | { kind: "SHARE"; campaignShareId: string }
    | { kind: "INVITATION"; campaignInvitationId: string };
  firstQualifiedTouchId?: string;
};
```

The continuation adds monotonic `boundCreatorWorkspaceId` and `boundCreatorProfileId`. Resolution returns only a canonical Campaign ID and safe internal return path. It returns no UTM, invitation, provider, or entitlement evidence and never creates an Application.

`CampaignIngressTouch` is append-oriented correlation data separate from access authority. It stores Campaign, server time, allowlisted entry surface, internal share/invitation IDs, and normalized `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, and `utm_term`. Values are NFKC-normalized, trimmed, stripped of control characters, bounded to 100/200 characters, and treated only as data. Unknown fields and raw credentials are dropped.

At Submit, a supplied opaque attribution reference is accepted only if it matches Campaign and bound subject. Invalid or missing attribution is ignored and cannot block a valid Application. The snapshot records first qualified touch and conversion touch. Analytics/event export is after commit and best effort.

Existing Application `source` remains `DIRECT | OUTREACH | SHARE`: a proven Share maps to `SHARE`; a Campaign invitation maps to `OUTREACH` only when it has canonical Outreach lineage; otherwise it remains `DIRECT` while the separate invitation/ingress snapshot preserves its exact origin. The client cannot author `source`.

## 9. Campaign Asset, Brief, Deliverable, and rights projection

Canonical ancestry is:

```text
UceCampaign
└── UceCampaignAsset (BRAND | OFFERING | OFFER)
    └── canonical Brief (DRAFT | PUBLISHED | PAUSED)
        └── ordered typed Deliverables
```

The production `CanonicalCampaignBrief` persistence is enriched to the frozen Add Brief contract rather than supplemented by another C-03 Brief store. It must carry name, creative intent, Creator Brief, type, platform, rich brief-level guidance, references, usage rights, Creator requirements, and ordered format-specific Deliverables. The existing minimal `isActive` representation is compatibility input only after explicit mapping to `PUBLISHED` or `PAUSED`; it is not sufficient for new C-03 submission.

New Applications require an `ACTIVE` Asset and `PUBLISHED` Brief. Database relationships and transactional validation enforce:

```text
Application.campaignId == CampaignAsset.campaignId
Application.canonicalBriefId belongs to Application.canonicalCampaignAssetId
```

The frontend may only offer associated pairs, but backend and database checks remain mandatory. A Brand-only Asset is valid. Creator-facing Asset type/name/media/destination comes from the canonical Asset/Offering adapter. Hero media uses suitable Asset/Offering media or a deliberate no-image fill; Brand logo remains identity-scale only.

The legacy visibility adapter maps only one unambiguous value: `EVERYONE → PUBLIC`, `ELIGIBLE_ONLY → ELIGIBLE_CREATORS_ONLY`, and `INVITED_ONLY → INVITE_ONLY`. Missing or conflicting multi-value configurations fail closed with `CAMPAIGN_VISIBILITY_CONFIGURATION_INVALID`; the adapter never invents precedence. Legacy default-zero commercial rows are not proof of an intentional zero offer. Zero is projected only when backed by canonical authored provenance; missing/ambiguous values remain unavailable and cannot be snapshotted as zero.

Application availability is a backend semantic projection over canonical Campaign lifecycle/readiness and any explicit Application window. An optional authoritative `applicationDeadline` may be stored/projected; absence remains `null`. Publishing end is never substituted. C-03 adds no Brand-side deadline authoring behavior unless shared Campaign authority already supplies it.

## 10. Canonical Application persistence

`uce_applications` and `uce_application_snapshots` remain the single persistence family. Add an authority discriminator and additive canonical columns; do not repoint legacy Product/Brief foreign keys in place.

Canonical Application fields include:

```text
authorityVersion = C03_CANONICAL
campaignId
brandProfileId
canonicalCampaignAssetId
canonicalBriefId
subjectCreatorProfileId
subjectCreatorWorkspaceId
actorUserId
actorMembershipId
actorRole
campaignInvitationId?
firstQualifiedTouchId?
conversionTouchId?
status
statusVersion
appliedAt and terminal timestamp
```

Legacy `campaign_asset_id`/`brief_id` columns that currently reference legacy Product/Brief remain nullable compatibility fields after an additive migration. New canonical rows must use canonical columns; a database check prohibits mixed or incomplete authority shapes.

`campaignCreatorId` remains optional grouping lineage, not identity or authorization. Canonical subject, workspace, and actor columns are authoritative. Existing CampaignCreator handle/email/review fields may inform legacy read projections only.

### Immutable snapshot

Every canonical Application has exactly one `C03_APPLICATION_SNAPSHOT_V1` containing:

- Brand identity and safe destinations;
- Campaign name, purpose/objective, platform, timing, application deadline if authoritative, support, and commercial values;
- selected Campaign Asset type/name/description/media/destination;
- full selected Brief, ordered Deliverables, guidance, references, rights, and publishing requirements;
- Creator subject ID/workspace and bounded display context;
- submission actor IDs/role;
- first and conversion attribution context;
- schema version and server-authored creation time.

Raw invitation tokens, provider credentials/diagnostics, unnecessary emails, selection scores, and private Brand notes are excluded. A deferred constraint trigger requires the snapshot before commit; update/delete triggers make canonical snapshots immutable; foreign keys use `RESTRICT`. Application rows are non-deletable through normal runtime.

## 11. Idempotency, duplicates, quotas, and reapply

Application commands require a high-entropy `Idempotency-Key`. `ApplicationCommandReceipt` is unique on:

```text
(commandType, actorUserId, authoritySubjectId, idempotencyKey)
```

It stores a canonical request fingerprint and final resource/transition identity. Same key + same fingerprint returns the committed result. Same key + different fingerprint returns `APPLICATION_IDEMPOTENCY_KEY_REUSED`. Failed/uncommitted commands leave no successful receipt. Semantic uniqueness and quotas are enforced independently, so different keys cannot create invalid duplicates.

Same-opportunity identity is:

```text
subjectCreatorProfileId
+ campaignId
+ canonicalCampaignAssetId
+ canonicalBriefId
```

A partial unique index covers canonical rows in `PENDING`, `APPROVED`, `REJECTED`, and `SUPERSEDED`. `WITHDRAWN` and `EXPIRED` permit a new row, subject to quotas. Reapply always creates a new Application.

Quotas count all statuses except `WITHDRAWN`:

```text
subject × Campaign <= 2
subject × Brand    <= 5
```

All submitters for one Creator subject serialize on the canonical Creator workspace row. Under that lock the service re-resolves membership, then counts Campaign and Brand rows and inserts. This makes Owner/Manager/Assistant and multi-tab races deterministic under PostgreSQL `READ COMMITTED`; database uniqueness remains the final same-opportunity guard.

Global lock order is:

```text
Creator workspace
→ Campaign
→ Creator Instagram integration
→ invitation when present
→ Campaign Asset
→ Brief
→ Application
```

All C-03 commands and expiry jobs use this order. External provider, email, PDF, analytics, and Intelligence calls are forbidden inside these transactions.

Cross-module mutations that can race C-03 participate in the same ordering contract. Accepted C-05 Team role/removal operations lock the Creator workspace before changing membership. Instagram disconnect/recovery mutations lock the integration row and must never acquire the Creator workspace afterward; if a future path needs both, it takes workspace first. Shared Campaign lifecycle mutations lock Campaign before Asset/Brief, and must not acquire a Creator workspace after those locks. This makes membership loss, provider revocation, and Campaign/Asset/Brief pause races serialize on an authoritative row without creating a reverse lock edge.

## 12. Submit transaction

Canonical Submit performs:

1. Validate IDs and idempotency input.
2. Resolve preliminary C-05 actor/subject.
3. Begin transaction and lock Creator workspace.
4. Re-resolve active membership and C-03 capability inside the transaction.
5. Resolve matching command receipt/replay.
6. Lock/read Campaign and current application availability/visibility.
7. Lock/read persisted Instagram capability.
8. Evaluate eligibility or lock/validate/bind invitation.
9. Lock/read selected canonical Asset and Brief; verify ancestry and lifecycle.
10. Enforce same-opportunity policy and Campaign/Brand quotas.
11. Build and validate the versioned immutable snapshot.
12. Insert canonical Application, snapshot, submitted event, notification/outbox intent, and command receipt atomically.
13. Commit, then dispatch asynchronous side effects.

No public inventory query or mutation occurs. Client-authored commercial, actor, subject, source, or status values are ignored/rejected.

## 13. Serialized terminal transitions

For canonical rows, database and service guards permit only:

```text
INSERT → PENDING
PENDING → APPROVED | REJECTED | WITHDRAWN | EXPIRED
```

C-03 does not automatically produce `SUPERSEDED`; the enum remains for legitimate history or separately authorized future behavior. Terminal-to-terminal transitions, return to PENDING, identity/selection mutation, timestamp inconsistency, and physical deletion are database-rejected.

Withdraw and Brand Approve/Reject lock workspace, Campaign, and Application in the common order and perform a conditional PENDING transition. Before a Withdraw transition, the command re-resolves current membership and requires OWNER or MANAGER; ASSISTANT receives a stable authorization failure without state change. Expiry identifies candidates without claiming state, then uses the same locked transition. Exactly one concurrent authorized terminal command wins; losers receive persisted current state/`APPLICATION_TRANSITION_CONFLICT`. History and siblings remain untouched.

Brand decision authority comes from the existing Campaign/Applicants Brand policy. It consumes the immutable Application; it does not rerun the Creator's current Instagram, invitation, eligibility, public inventory, or pre-application Asset/Brief gate.

## 14. Approved Application to Collaboration

C-04 exposes one trusted port:

```ts
interface ApprovedApplicationCollaborationPort {
  provisionFromApprovedApplication(
    tx: Prisma.TransactionClient,
    input: { applicationId: string; approvalTransitionId: string },
  ): Promise<{ collaborationId: string; created: boolean }>;
}
```

The port loads the APPROVED Application and snapshot itself. `Collaboration.sourceApplicationId` is required and unique for new rows; `UNIQUE(campaignId, creatorUserId)` is removed and replaced by a non-unique lookup index. A replay for one Application returns one Collaboration. Different approved Applications for the same Creator × Campaign create distinct Collaborations.

Approval transaction order is status transition → Collaboration provision/reuse → approved event → Creator notification intent → commit. A canonical approved Application without its Collaboration after commit is an invariant violation, not permission for an out-of-band second source.

For FIXED, the Campaign fixed amount snapshot may seed the agreed commercial basis. For NEGOTIABLE, Creator proposal and agreed amount are null and the Collaboration begins `AWAITING_CREATOR_PROPOSAL`; the first C-04 Negotiation command supplies it. C-03 never captures or fabricates that proposal.

## 15. Domain events and notifications

Append-only `ApplicationDomainEvent` names are:

```text
application.submitted
application.approved
application.rejected
application.withdrawn
application.expired
```

Each event has unique `(applicationId, applicationVersion)` and transition identity; records event version/time, from/to status, actor class/IDs/role, subject/workspace, Brand, Campaign, Asset, Brief, and approved Collaboration ID where applicable. Event update/delete is prohibited.

Application state, event, notification/outbox intent, and recipient snapshot intent are committed together. Provider/email/socket delivery is asynchronous and cannot roll back an Application.

| Domain event | Product output | Recipient |
|---|---|---|
| submitted | Existing `campaigns.application_received` | Active authorized Brand recipients. |
| approved | New `campaigns.application_approved` | Active Owner/Manager/Assistant Users in the Creator workspace. |
| rejected | New `campaigns.application_rejected` | Active Owner/Manager/Assistant Users in the Creator workspace. |
| withdrawn | Durable event | No mandatory C-03 channel delivery. |
| expired | Durable event | No mandatory C-03 channel delivery. |

Notification persistence becomes dual-scoped through additive nullable Brand/Creator workspace references plus exactly-one-scope checks and partial semantic unique indexes. Payloads contain IDs and safe deep links only. They exclude commercials, Brief/snapshot bodies, UTM, tokens, provider data, emails, eligibility evidence, and private rejection notes.

Creator approval/rejection use required in-app delivery and optional email policy with deep link `/creator/campaigns/applications/{applicationId}`. Recipient membership is snapshotted transactionally; inactive memberships/Users and duplicate User memberships are excluded.

## 16. Historical access and Creator Brief Pack

The following use current active C-05 subject/team authorization but do not require current Instagram usability, Campaign visibility/eligibility/invitation, or a non-terminal status:

- My Applications;
- Application detail;
- Application commercial snapshot;
- Application Brief Pack.

Cross-subject IDs return a non-enumerating not-found response. A removed/inactive Team member loses access; historical data remains with the canonical Owner subject/workspace.

```text
GET /api/v1/creator/applications/:applicationId/brief-pack
→ authorize current Team against stored Application subject
→ read immutable snapshot only
→ return CreatorBriefPackV1
→ frontend deterministic jsPDF renderer
```

The route is `private, no-store`. No binary persistence, AWS, or mutable current Brief fetch is required. The pack contains suitable Brand, Campaign, Asset, Brief, Deliverables/rights/support/commercial snapshot, submission time, and Application reference. It omits actor detail, Creator private data, attribution, invitation/eligibility evidence, and review notes. Media failure yields an intentional no-image state; a Brand logo is never stretched into a hero.

Legacy rows without a complete versioned snapshot return `APPLICATION_BRIEF_PACK_UNAVAILABLE`; they are never silently rebuilt from mutable current data. Renderer acceptance includes deterministic content tests, long-content/page-break fixtures, special characters, missing media, both currencies/models, and visual PDF render inspection.

## 17. Canonical API surface

```text
GET  /api/v1/campaign-opportunities/:campaignId
POST /api/v1/campaign-opportunities/:campaignId/apply-continuation

GET  /api/v1/creator/campaigns/opportunities
POST /api/v1/creator/campaigns/:campaignId/applications

GET  /api/v1/creator/applications
GET  /api/v1/creator/applications/:applicationId
POST /api/v1/creator/applications/:applicationId/withdraw
GET  /api/v1/creator/applications/:applicationId/brief-pack

POST /api/v1/brand-uce/campaigns/:campaignId/applications/:applicationId/approve
POST /api/v1/brand-uce/campaigns/:campaignId/applications/:applicationId/reject
```

The Opportunities collection is not PUBLIC Campaign enumeration. Candidates come only from valid invitations, authoritative eligible-target results, or a qualified direct/share Campaign ingress already bound to the subject. A PUBLIC detail link remains directly accessible even if absent from the collection.

My Applications groups by Campaign in presentation while preserving independent Application IDs, statuses, selections, timestamps, actions, and Collaboration links. Each Application projection includes backend-authored action capability; `canWithdrawPending` is true only for a current OWNER or MANAGER viewing a PENDING Application. ASSISTANT retains history visibility but receives no Withdraw control, and the mutation independently re-authorizes any stale client attempt. Cursor pagination and stable server sort are required for both collections.

Stable reason codes include authentication/context, Instagram recovery, eligibility unavailable/ineligible, invitation required/expired/revoked/mismatch, Campaign/Asset/Brief unavailable or mismatched, duplicate/reapply, both quota limits, transition conflict, idempotency conflict, legacy reconciliation, and Brief Pack unavailable. Frontend copy maps codes; it never derives policy from status text.

## 18. Frontend state architecture

Canonical routes:

```text
/campaigns/:campaignId                              public/direct entry
/creator/campaigns/opportunities                    authenticated collection
/creator/campaigns/opportunities/:campaignId        authenticated detail
/creator/campaigns/applications                     historical collection
/creator/campaigns/applications/:applicationId      historical detail
```

The accepted C-05 shell owns authenticated navigation. `Campaigns` has `Opportunities` and `My Applications`; the historical routes sit outside the route-wide Instagram guard. Query keys include the authenticated subject/workspace and are cleared on account/workspace transition.

Required screen families are Opportunities, My Applications, gated Opportunity, authorized Opportunity, Apply selection, review/submit, post-submission/multiple Applications, Asset/Brief drawers, withdrawal feedback, Brief Pack action, and utility states. Apply optimization is frozen:

- one Asset/one Brief → Review;
- one Asset/many Briefs → Brief selection;
- many Assets → Asset then associated Brief;
- Apply from Brief → preselected Review.

Submit remains explicit. Stale selections are invalidated by server response and never silently substituted. On success the Opportunity stays mounted and refreshes independent Application state.

Commercial/detailed Brief data is absent from DOM, query cache, serialized route state, logs, and analytics until authorized. Tabs/radios/drawers/dialogs have native semantics, keyboard behavior, focus trap/restore, live announcements, and 44px touch targets. Mobile sheets never stack, never overlap the accepted bottom navigation/safe area, and have no document-level horizontal scroll at 375, 390, or 767px.

## 19. UI/UX and Stitch checkpoint

```text
STITCH_FOR_ARCHITECTURE_FREEZE = NOT_REQUIRED
STITCH_FOR_FRONTEND_RECONCILIATION = EXPECTED
```

After API/state contracts and realistic typed fixtures are frozen, generate seven paired desktop/mobile families, fourteen references total:

```text
C03-ST-A01-D/M  Opportunities
C03-ST-A02-D/M  My Applications with multiplicity
C03-ST-B01-D/M  authorized Opportunity
C03-ST-B02-D/M  guest/access-gated Opportunity
C03-ST-B03-D/M  multiple existing Applications
C03-ST-C01-D/M  Asset/Brief selection
C03-ST-C02-D/M  review and explicit Submit
```

Asset/Brief drawers, withdrawal feedback, Brief Pack actions, and utilities reuse accepted Aurora patterns unless a specialist records a concrete structural gap. Desktop precedes its mobile derivative. One structural correction cycle per family is allowed; unresolved structure triggers `VISUAL_RETHINK_REQUIRED`. UI/UX visual acceptance and frontend semantic/accessibility acceptance are independent required gates.

## 20. Legacy retirement and migration sequence

Migration is additive and reversible until cutover:

1. Preflight representative legacy data and emit an ambiguity report.
2. Add canonical columns/tables/indexes/checks/triggers without deleting legacy state.
3. Introduce canonical adapters and read projections.
4. Write only canonical Applications through the new service.
5. Delegate Brand decisions to the canonical service.
6. Close legacy Creator Apply/invitation mutation paths.
7. Retain bounded read-only compatibility projections and reconcile provable rows.

At cutover:

- `POST /api/v1/creator-uce/campaigns/:campaignId/apply` returns `410 LEGACY_APPLICATION_ENDPOINT_RETIRED`;
- legacy invitation claim cannot mutate `UceCampaignCollaboration`;
- legacy Brand decision paths delegate to canonical Application commands or return 410;
- legacy applicant sync is removed from normal runtime;
- no new `APPLICANT_*` transition may be written to legacy Collaboration applicant state;
- legacy GETs, if retained, are labeled compatibility-only;
- no table/column/history is dropped in C-03.

Promotion requires explicit Creator profile/workspace and exact canonical Asset/Brief lineage plus a complete valid snapshot. Email/handle/title/SKU similarity is insufficient. Ambiguous rows remain `LEGACY_COMPATIBILITY`, count conservatively where their subject/Campaign is known, and may block an ambiguous submission with `LEGACY_APPLICATION_RECONCILIATION_REQUIRED`.

## 21. Security and telemetry gates

| Risk | Frozen control |
|---|---|
| Commercial/Brief leak | Discriminated allowlist DTOs; absent-before-gate fields; no-store; contract and browser response/DOM tests. |
| Forwarded invitation | High-entropy digest-only token plus intended-subject evidence and monotonic subject binding. |
| Team/stale-role race | Workspace-first lock and in-transaction actor re-resolution. |
| Instagram/lifecycle race | Lock and re-evaluate persisted authoritative rows at Submit. |
| Replay/double click | Scoped receipt + fingerprint + semantic unique index + workspace lock. |
| Quota oversubscription | Workspace serialization and real PostgreSQL contention tests. |
| Terminal race | One lock order and conditional PENDING transition. |
| Cross-subject history | Current C-05 subject authorization and non-enumerating lookup. |
| Token/PII telemetry | Allowlisted structured events; tokens/emails/provider data/Brief bodies/commercial amounts excluded. |
| Unsafe attribution | Normalization, bounded allowlist, server correlation, never authority, best-effort processing. |
| Legacy mutation bypass | Route quarantine, service delegation/410, architecture tests, and cutover database guard. |

Security-relevant events record internal IDs, result/reason code, actor/subject, and correlation ID without sensitive payload. Public/invitation endpoints receive bounded rate limits. Existing authentication/CSRF/origin protections apply to mutations; C-01 and invitation cookies are HttpOnly, Secure outside local development, SameSite=Lax, narrowly scoped, and cleared/shortened according to accepted continuation behavior.

## 22. Required real-PostgreSQL proofs

Implementation acceptance requires fresh 0→latest replay and legacy-shaped upgrade plus real contention for:

- same-opportunity partial uniqueness;
- two-per-Campaign and five-per-Brand boundaries;
- Owner + Assistant concurrent Submit;
- Owner/Manager withdrawal of PENDING and Assistant withdrawal denial;
- same and different idempotency keys/fingerprints;
- Team removal, Instagram revoke, Campaign/Asset/Brief pause, and invitation bind/revoke versus Submit;
- Withdraw versus Approve/Reject/Expire and Approve versus Reject;
- immutable exactly-one snapshot and append-only events;
- two distinct approved Applications producing two Collaborations;
- repeated approval producing one Collaboration;
- no sibling supersession and no inventory mutation;
- NEGOTIABLE handoff with no Creator proposal;
- canonical/legacy authority checks and closed legacy mutations.

Unit mocks are insufficient for these gates.

## 23. Architecture-question closure

| Previously open architecture area | Frozen answer |
|---|---|
| Entitlement/redaction | One backend Opportunity policy and discriminated absent-before-gate DTO. |
| Actor/subject | C-05 resolver; all three roles VIEW + APPLY; only Owner/Manager WITHDRAW_PENDING; four actor/subject audit fields persisted. |
| Instagram/visibility | Shared pure capability plus backend eligibility/invitation authority; rechecked at Submit. |
| Historical access | Team/subject gate only; no current Instagram/visibility dependency. |
| Invitation | Digest-only, Campaign-bound, intended-subject evidence, monotonic binding, expiry/revocation. |
| Continuation/attribution | Typed C-01 context plus separate append-oriented ingress; no raw token or auto-submit. |
| Asset/Brief | Canonical Asset → rich published Brief with database ancestry. |
| Application/snapshot | One extended aggregate, versioned exactly-one immutable snapshot. |
| Idempotency/concurrency | Scoped receipt, workspace-first locks, partial uniqueness, real PostgreSQL proof. |
| Quotas/reapply | Count every non-WITHDRAWN row; active same-opportunity partial unique; new row after Withdrawn/Expired. |
| Transitions/siblings | Conditional PENDING terminal transition; no automatic sibling supersession. |
| Collaboration | Unique Application source; multiple same-Campaign Collaborations allowed. |
| NEGOTIABLE | No C-03 proposal; C-04 begins awaiting Creator proposal. |
| Events/notifications | Transactional append-only event/outbox; Brand submitted and Creator approved/rejected outputs. |
| Brief Pack | Snapshot-only projection, client PDF renderer, historical team access, no AWS. |
| Frontend | Opportunities + My Applications, backend reason codes, multiplicity, bounded Stitch checkpoint. |
| Legacy | Additive compatibility, exact-only promotion, mutation retirement, no destructive drop. |

## 24. Final architecture gate

```text
C03_PRODUCT_LOGIC = FROZEN
C03_SYSTEMS_AUDIT = ACCEPTED
C03_ARCHITECTURE = ACCEPTED
C03_HYBRID_AUTONOMOUS_EXECUTION = NOT_YET_AUTHORIZED
```
