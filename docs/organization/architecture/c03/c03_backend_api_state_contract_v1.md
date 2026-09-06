# C-03 Backend API State Contract V1

**Artifact:** `C03_BACKEND_API_STATE_CONTRACT_V1`

**Module:** C-03 — Creator Campaign Participation / Apply

**Status:** `FROZEN_AFTER_ACCEPTED_P1`

**Backend authority SHA:** `4b51d52de6d9206545b0a38497c7436bc9d3e095`

**Backend authority tree:** `0df8adf9a4a45089918dc0f5d3cccd9f4317fede`

**Migration count:** 79

## 1. Authority and scope

This is a derived frozen interface/state contract, not a new architecture
decision. It records the accepted backend at the SHA above and frozen Stage B
authority in `Piyush1087/dummy_tcs@458875b939b738b8032409b6de72b6de70f53ed1`,
particularly `docs/organization/architecture/c03/c03_architecture_freeze_v1.md`.
The supplied Systems Architect verdict is
`C03_P1_4_DURABLE_ACCEPTANCE_AND_P1_BACKEND_CONTRACT_FREEZE_V1`.
Historical checkpoint exclusions in the execution ledger remain historical;
this document describes the aggregate accepted P1 surface.

All implementation paths below are relative to
`Piyush1087/creator-commerce-backend-v2-clone` at the backend authority SHA.
They identify the executable source of each contract, including existing
shared authority consumed by C-03. No frontend behavior is implemented or
newly prescribed by this freeze.

## 2. Opportunity routes and projections

| Method | Route | Input / result |
|---|---|---|
| GET | `/api/v1/campaign-opportunities/:campaignId` | UUID Campaign ID; optional authentication; discriminated Opportunity projection |
| POST | `/api/v1/campaign-opportunities/:campaignId/apply-continuation` | Optional authentication; supported inputs `invitationCredential`, `shareToken`, `entrySurface`, `attribution`; returns `intent`, `expiresAt`, `continuationPresent: true`; opaque credential is set through the existing C-01 cookie |
| GET | `/api/v1/creator/campaigns/opportunities` | Authenticated Creator; optional `cursor`; `{ items, nextCursor }`, up to 20 authorized projections |

`CampaignOpportunityPolicyService` owns entitlement and Apply capability.
All three projections carry `schemaVersion: 1`:

| State | Structural response |
|---|---|
| `TEASER` | `reason`, `recoveryAction: SIGN_IN_OR_CREATE_CREATOR`, and safe PUBLIC `campaign: { id, name, platforms }` |
| `LOCKED` | `reason`, `recoveryAction`; no Campaign, Asset, Brief or commercial payload |
| `AUTHORIZED` | `applicationsOpen`, `canApply`, `applyBlockedReason`, `applicationDeadline`, `campaign`, `assets` |

Commercials and detailed Briefs are structurally absent before authorization.
An Application-level block does not remove commercial access from an otherwise
entitled Creator. The backend authors all four capability/deadline fields;
absence of an Application deadline is `null`, never a publishing-date fallback.
`applicationsOpen` requires Campaign status `PUBLISHED` or `LIVE` and either
no deadline or a deadline strictly later than server time. Apply additionally
requires APPLY authority, selectable Brief, available commercials, duplicate
and quota checks.

The authorized Campaign contains `id`, `name`, `platforms`, `brand`,
`objective`, `publishingStart`, `publishingEnd`, and `commercial`.
Available `commercial` contains `compensationModel` (`FIXED` / `NEGOTIABLE`),
decimal-string `offer`, `currency`, `receivesBrandSupport`, `brandSupportType`,
and nullable decimal-string `brandSupportEstimatedValue`; unavailable
commercials return `{ state: "UNAVAILABLE" }`.

Each Asset contains `id`, `campaignId`, `kind`, `status`, `offering`, `offer`,
and `briefs`. Briefs contain `id`, `campaignAssetId`, `status`, `creationSource`,
`applicationSelection`, and `definition`. Selection is `AVAILABLE` or
`UNAVAILABLE` with a reason. Definition contains `briefName`, `creativeIntent`,
`creatorBrief`, `briefType`, `platform`, `briefLevelGuidance`, `referenceContent`,
`usageRights`, `creatorRequirements`, and ordered `deliverables`. Deliverables
contain `id`, `format`, `displayOrder`, `configuration`, `creativeGuidance`,
and `amplifyTargetDeliverableId`. Draft Briefs are filtered from the authorized
Opportunity projection. An active Asset and a complete published Brief with
a valid deliverable graph are required for selection.

| Product visibility | Persisted policy value | Entitlement after current Creator context and usable Instagram |
|---|---|---|
| `PUBLIC` | `EVERYONE` | Entitled |
| `ELIGIBLE_CREATORS_ONLY` | `ELIGIBLE_ONLY` | Authoritative backend `ELIGIBLE` |
| `INVITE_ONLY` | `INVITED_ONLY` | Valid matching invitation |

Missing/conflicting visibility fails closed. Eligibility is exactly
`ELIGIBLE`, `INELIGIBLE`, or `UNAVAILABLE`; unsupported/missing canonical
facts are unavailable, never an inferred positive. Invitation validity uses
Campaign binding, expiry, revocation, intended Owner-subject evidence and
monotonic Creator profile/workspace binding. Team email, mutable handle and
client-supplied internal invitation ID are not authority. Raw invitation
credentials are exchanged through POST, not returned in JSON or persisted.

The collection is not PUBLIC Campaign enumeration. Its candidates come from
valid bound invitations, eligible-only Campaigns, or direct/share ingress bound
to the current subject; only `AUTHORIZED` items are returned, sorted by ID.
Unknown/non-disclosable detail IDs return generic `LOCKED` with
`OPPORTUNITY_NOT_AVAILABLE`. Continuation and Submit use a non-enumerating
404 for the corresponding unavailable cases.

Sources: `src/features/campaign-opportunities/campaign-opportunity.controller.ts`,
`campaign-opportunity.service.ts`, `campaign-opportunity-policy.service.ts`,
`campaign-opportunity-eligibility.ts`, `campaign-invitation.service.ts`, and
`src/features/brand-uce/services/canonical-campaign-application-read.service.ts`.

## 3. Instagram and current Team authority

The pure provider-neutral Opportunity evaluator consumes persisted state:

| Lifecycle state | Usable for Opportunity | Recovery action |
|---|---|---|
| `NOT_CONNECTED` | false | `CONNECT_INSTAGRAM` |
| `CONNECTED_HEALTHY` | true | null |
| `REVALIDATION_REQUIRED` | false | `REVALIDATE_INSTAGRAM` |
| `RECONNECT_REQUIRED` | false | `RECONNECT_INSTAGRAM` |
| `PROVIDER_BLOCKED_RECOVERABLE` | false | `REVALIDATE_INSTAGRAM` |
| `DISCONNECTED_IDENTITY_RETAINED` | false | `RECONNECT_INSTAGRAM` |

Healthy requires a stable native identity, ACTIVE token, no known expired
token, no disconnect, USABLE authorization and AVAILABLE basic authorization.
Insights and mutable handle are not gates. No live provider call occurs.
This Opportunity evaluator does not replace the separately accepted C-01
platform-entry semantics.

| Current C05 role | VIEW / own-subject history | APPLY | WITHDRAW_PENDING |
|---|---|---|---|
| `OWNER` | yes | yes | yes |
| `MANAGER` | yes | yes | yes |
| `ASSISTANT` | yes | yes | no |

The actor User/membership/role is distinct from the workspace Owner Creator
subject. Protected reads resolve current active C05 membership and canonical
workspace; mutations re-resolve under the workspace lock. Historical
Application reads and Creator notification reads require current Team
authority, not current Instagram usability, invitation validity or Opportunity
entitlement. No email/handle matching substitutes for identity.

Sources: `src/shared/creator/instagram-opportunity-capability.ts`,
`src/features/creator-settings/team/creator-workspace-actor.service.ts`,
`creator-team.policy.ts`, and `src/shared/creator/creator-workspace-actor.contract.ts`.

## 4. Application command and history surface

| Method | Route | Accepted canonical behavior |
|---|---|---|
| POST | `/api/v1/creator/campaigns/:campaignId/applications` | Submit strict `{ campaignAssetId, briefId }` UUID selection; HTTP 200 |
| GET | `/api/v1/creator/applications` | Current subject history; optional opaque `cursor`; `{ items, nextCursor }` |
| GET | `/api/v1/creator/applications/:applicationId` | Current subject detail with immutable snapshot projection |
| POST | `/api/v1/creator/applications/:applicationId/withdraw` | Owner/Manager pending withdrawal; HTTP 200 |
| GET | `/api/v1/brand-uce/campaigns/:campaignId/applications` | Current Brand Campaign ownership; canonical and labeled legacy Applicants adapter |
| POST | `/api/v1/brand-uce/campaigns/:campaignId/applications/:applicationId/approve` | Canonical approval plus atomic handoff; HTTP 200 |
| POST | `/api/v1/brand-uce/campaigns/:campaignId/applications/:applicationId/reject` | Canonical rejection; HTTP 200 |
| POST | `/api/v1/creator-uce/campaigns/:campaignId/apply` | HTTP 410, `LEGACY_APPLICATION_ENDPOINT_RETIRED` |

Canonical Submit/Withdraw/Approve/Reject require `Idempotency-Key` and return
`applicationId`, `transitionId`, `status`, `statusVersion`, `occurredAt`.
The Brand Reject controller accepts optional `reason` for legacy compatibility;
canonical decision dispatch uses Campaign ID and Application ID, not that text.
There is no public Expire route; bounded internal expiry transitions pending
Applications without deriving an Application deadline from publishing dates.

The schema supports `PENDING`, `APPROVED`, `REJECTED`, `WITHDRAWN`, `EXPIRED`,
`SUPERSEDED`. Accepted canonical writes are `INSERT → PENDING`, then
`PENDING → APPROVED | REJECTED | WITHDRAWN | EXPIRED`. No automatic
`SUPERSEDED` producer is implemented. Terminal-to-terminal changes, return to
PENDING, identity/selection mutation and deletion are database rejected.
Siblings are independent; approval/rejection never automatically supersedes
another Application.

Historical projection fields are `schemaVersion: 1`, `applicationId`,
`referenceAuthority: C03_CANONICAL`, `campaignId`, `canonicalCampaignAssetId`,
`canonicalBriefId`, `status`, `statusVersion`, `appliedAt`, `terminalAt`,
`campaign`, `asset`, `brief`, `creator`, `commercial`, `canWithdrawPending`,
and nullable `collaborationId`. Campaign/Asset/Brief/Creator/commercial content
comes from the immutable `C03_APPLICATION_SNAPSHOT_V1`, not rebuilt live data.
List Brief content is `id`, `campaignAssetId`, `briefName`; detail adds the
accepted rich Brief definition. Creator display is limited to `displayName`
and `avatarUrl`. History orders by `appliedAt DESC, id DESC`, takes 20, and
uses a base64url cursor containing timestamp and UUID.

The Brand adapter adds `name`, `applicationStatus`, `source`, `campaignAssetId`,
`briefId`, `canApprove`, `canApprovePending`, `canReject`; the three decision
flags are true for PENDING canonical rows. It returns `state: READY | EMPTY`,
`reason: null`, `canonicalApplicationCount`, `applicants`, with up to 50 rows
per canonical/legacy arm. Legacy authority stays explicitly labeled.

Sources: `src/features/campaign-applications/` command, submit, context,
terminal, history and evidence services/controllers; `src/features/brand-uce/brand-uce.controller.ts`,
`services/campaign-application.service.ts`; `src/features/creator-uce/creator-uce.controller.ts`;
`prisma/schema.prisma` and accepted Application guard migrations.

## 5. Idempotency, selection, quota and reapply

Canonical header: `Idempotency-Key`; accepted key grammar is
`^[A-Za-z0-9_-]{22,128}$`. Raw keys are not persisted, logged or echoed.
Only SHA-256 digest and canonical request fingerprint are persisted.
Receipt uniqueness is `(commandType, actorUserId, authoritySubjectId,
idempotencyKeyDigest)`. Creator command subject is the Owner Creator profile;
Brand decision subject is the Brand profile. Same key/same fingerprint gives
stable replay after current authorization. Same key/changed fingerprint gives
`APPLICATION_IDEMPOTENCY_KEY_REUSED`. Failed transactions leave no receipt.
`x-idempotency-key` is CORS compatibility only, not canonical command authority.

Same opportunity is `subjectCreatorProfileId + campaignId +
canonicalCampaignAssetId + canonicalBriefId`. The selected Asset must belong
to the Campaign and Brief to that Asset; stale/mismatched selection is rejected.

- `PENDING / APPROVED / REJECTED / SUPERSEDED`: same opportunity blocked.
- `WITHDRAWN / EXPIRED`: a fresh Application may be created, subject to quotas.
- Reapply always creates a new row.
- Subject × Campaign <= 2 non-WITHDRAWN Applications.
- Subject × Brand <= 5 non-WITHDRAWN Applications.
- EXPIRED therefore permits same-opportunity reapply but still counts toward
  both quotas. WITHDRAWN releases quota.

Submit revalidates current entitlement, availability, selection and limits
under locks. Immutable snapshot, submitted event, Brand notification job and
recipient snapshot, and receipt commit with the Application. Different keys
cannot bypass semantic uniqueness. Sources: `application-command.ts`,
`application-submit.service.ts`, `application-submit-context.service.ts`,
`application-evidence.ts`, and `src/main.ts` (CORS).

## 6. Collaboration persistence and atomic approval

`Collaboration.sourceApplicationId` is unique, immutable canonical lineage.
One approved Application has exactly one source Collaboration on commit;
at most one can exist for that Application. Different approved sibling
Applications for the same Creator × Campaign may have independent Collaborations.
Global Campaign × Creator uniqueness is removed for canonical source rows;
the partial legacy unique constraint remains for `sourceApplicationId IS NULL`.
`ApplicationDomainEvent.approvedCollaborationId` binds the approved event to
the matching Collaboration; missing or mismatching links are database rejected.

```text
PENDING Application
→ APPROVED
→ Application-sourced Collaboration
→ application.approved event
→ Creator notification job + recipient snapshot
→ command receipt
→ COMMIT
```

Every step uses the same transaction. An approved Application without its
Collaboration is invalid. Replay returns the same transition identity and
cannot duplicate Collaboration or notification intent. Brand decisions use
current Brand authority and immutable Application evidence; approval requires
the canonical active Owner User identity, with no provisional User creation.

| Initial commercial field | FIXED | NEGOTIABLE |
|---|---|---|
| `handoffCommercialState` | `FIXED_AGREED` | `AWAITING_CREATOR_PROPOSAL` |
| `commercials.initialQuote` (Creator proposal) | null | null |
| `commercials.brandCounterOffer` | null | null |
| `commercials.finalQuote` | Immutable snapshot fixed offer | null |
| `negotiationRound` | 0 | 0 |
| `advance30Amount` / `balance70Amount` | 0 / 0, no split initialization | 0 / 0, no split initialization |

Canonical brief synthesis, product synthesis, legacy pipeline Collaboration
synthesis, provisional User creation, inventory mutation, sibling supersession
and 30/70 initialization are all NONE. The source Collaboration's legacy
`briefId`, `productId`, `ucePipelineCollaborationId` are null. Legacy rows keep
their existing compatibility contract; legacy handoff state remains null.
This contract stops at initial handoff and defines no later C-04 commands.

Sources: `src/features/collaboration/services/approved-application-collaboration.service.ts`,
`src/features/campaign-applications/application-terminal.service.ts`,
`application-evidence.ts`, `prisma/schema.prisma`, and migration
`20260910122000_c03_application_handoff_notifications`.
Canonical committed migration SQL SHA-256 (`CANONICAL_IMMUTABLE_GIT_BLOB_SHA256`):
`69afa7a872131ad6f0ce80b5ba232c1df0a0010589089bae56ec213559d2b255`.
Immutable Git blob `49b858278a963b14653e06937c193e8d9bca3236`, exactly 5294 committed bytes.
Historical `HISTORICAL_CRLF_TRANSFORMED_SHA256`: `55d8dd3cc66264a45a6ad9e8838894d446915d9e55a5e4e128980367d4f7c96b`.
P3 corrected evidence identity from CRLF-transformed checkout bytes to immutable Git blob bytes; no migration SQL or schema defect/change.

## 7. Notification scope, outputs and reads

Notification and NotificationJob have exactly one scope: Brand `workspaceId`
referencing `BrandProfile`, OR `creatorWorkspaceId` referencing
`CreatorWorkspace`. Neither both nor neither is legal. Semantic uniqueness
is independent in each scope on workspace, event type and semantic key;
Brand compatibility and Creator identities cannot collapse into each other.

| Durable event | Accepted output | Safe payload keys |
|---|---|---|
| `application.submitted` | Brand `campaigns.application_received` | `application_id`, `campaign_id` |
| `application.approved` | Creator `campaigns.application_approved` | `application_id`, `campaign_id`, `collaboration_id` |
| `application.rejected` | Creator `campaigns.application_rejected` | `application_id`, `campaign_id` |
| `application.withdrawn` | Durable event only | No notification |
| `application.expired` | Durable event only | No notification |

These semantic event names correspond to persisted Application event enum
values `SUBMITTED`, `APPROVED`, `REJECTED`, `WITHDRAWN`, `EXPIRED`.
Notification payloads contain safe internal IDs only; no Brief body, commercial
value, invitation credential, email, provider data or historical actor identity.

Creator recipient policy `CREATOR_WORKSPACE_ACTIVE_TEAM` selects active OWNER,
MANAGER and ASSISTANT memberships with an active bound Creator User, deduplicated
by User ID. Associated email, Instagram handle and historic actor are not
recipient authority. Creator in-app is REQUIRED; email registry policy is
OPTIONAL. Current accepted behavior without canonical Creator opt-in authority
is `NOT_REQUIRED` email recipient status, retaining required in-app delivery.
This is accepted current backend behavior, not an open Product decision.
The worker carries the selected scope through materialization; realtime
delivery occurs after materialization commits.

| Method | Route | Result |
|---|---|---|
| GET | `/api/v1/creator/notifications` | `{ notifications }`; `unread_only=true` filters unread; `limit` integer 1–100, default 50 |
| GET | `/api/v1/creator/notifications/unread-count` | `{ unread_count }` |
| PATCH | `/api/v1/creator/notifications/:notificationId/read` | `{ notification_id, is_read, read_at }` |
| POST | `/api/v1/creator/notifications/mark-all-read` | `{ updated_count }`; HTTP 200 |

List rows expose `id`, `event_type`, `category`, `urgency_level`, `actionable`,
safe `payload`, `created_at`, `is_read`, `is_emailed`, `read_at`. Reads use
current active C05 Team authority, current canonical Creator workspace and
current User recipient, with Brand scope null. Current Instagram usability is
not required. Other users/workspaces/Brand notifications are not exposed;
unowned read-mark targets return non-enumerating 404. JWT and throttling apply.
Creator notification responses use `Cache-Control: private, no-store` and
`Vary: Authorization, Cookie`, including authentication errors. Application
responses likewise retain private/no-store behavior.

Sources: `src/features/notifications/creator-notifications.controller.ts`,
`notifications.module.ts`, `config/notification-event-registry.ts`,
`services/creator-notification-query.service.ts`, `notification-dispatch.service.ts`,
`notification-recipient-policy.service.ts`, `notification-worker.service.ts`,
`notification-processor.service.ts`, and migration 79.

## 8. Exact implemented reason/error inventory

This inventory is P2 error-copy authority for accepted C-03 outputs. A reason
on a successful discriminated projection is not necessarily an HTTP error.
The table lists exact implemented strings; it does not promise every code
on every route. The policy controls precedence, including non-enumeration.

| Area | Exact codes / reasons | Emission and meaning |
|---|---|---|
| Entitlement | `OPPORTUNITY_NOT_AVAILABLE` | Generic LOCKED for missing/DRAFT/ARCHIVED or non-disclosable Campaign; non-enumerating 404 on unavailable continuation/Submit |
| Authentication | `AUTHENTICATION_REQUIRED`, `CREATOR_ACCOUNT_REQUIRED` | PUBLIC TEASER reasons; `SIGN_IN_OR_CREATE_CREATOR` recovery |
| Context | `CREATOR_CONTEXT_REQUIRED` | Policy LOCKED; `RESOLVE_CREATOR_CONTEXT` recovery |
| Instagram | `NOT_CONNECTED`, `REVALIDATION_REQUIRED`, `RECONNECT_REQUIRED`, `PROVIDER_BLOCKED_RECOVERABLE`, `DISCONNECTED_IDENTITY_RETAINED` | LOCKED lifecycle reasons; Submit propagates policy reason as conflict; recovery mapping in section 3; `CONNECTED_HEALTHY` is the success state, not an error |
| Eligibility | `ELIGIBILITY_INELIGIBLE`, `ELIGIBILITY_UNAVAILABLE` | Restricted eligibility failure; unavailable uses `RETRY_LATER` in policy |
| Invitation | `INVITATION_REQUIRED`, `INVITATION_EXPIRED`, `INVITATION_REVOKED`, `INVITATION_SUBJECT_MISMATCH` | INVITED_ONLY policy reasons; mismatch recovery `USE_INVITED_ACCOUNT`; validation paths also emit the corresponding dynamic result code |
| Invitation lookup during proven-context validation | `INVITATION_ABSENT` | `INVITATION_${result}` when validation returns ABSENT; distinct from policy's ABSENT→REQUIRED mapping; initial unproven/invalid exchange uses generic 404 instead |
| Invitation configuration | `INVITATION_IDENTITY_CONFIGURATION_UNAVAILABLE` | HTTP 503 from dedicated identity-HMAC configuration resolver; `RETRY_LATER` |
| Continuation binding | `CREATOR_ENTRY_CONTINUATION_IDENTITY_CONFLICT` | C-03 typed context cannot bind to a different subject/workspace |
| Campaign visibility | `CAMPAIGN_VISIBILITY_CONFIGURATION_INVALID` | Missing/conflicting visibility; LOCKED |
| Campaign availability | `CAMPAIGN_APPLICATIONS_CLOSED` | Authorized Apply block; Submit conflict |
| Campaign commercials | `CAMPAIGN_COMMERCIAL_CONFIGURATION_INVALID` | Authorized Apply block; Submit conflict |
| Brief availability | `CAMPAIGN_BRIEF_UNAVAILABLE` | No selectable Brief on Campaign |
| Selected Asset / Brief | `CAMPAIGN_ASSET_NOT_ACTIVE`, `BRIEF_NOT_PUBLISHED`, `BRIEF_DEFINITION_INCOMPLETE`, `BRIEF_DELIVERABLE_GRAPH_INVALID` | Canonical `applicationSelection.reason`; selected unavailable pair propagates on Submit when reached |
| Selection mismatch | `APPLICATION_SELECTION_INVALID` | HTTP 400 malformed strict selection, or 409 missing/mismatched canonical Campaign/Asset/Brief |
| Idempotency | `APPLICATION_IDEMPOTENCY_KEY_REQUIRED`, `APPLICATION_IDEMPOTENCY_KEY_REUSED` | HTTP 400 missing/invalid canonical key; HTTP 409 changed fingerprint in same receipt scope |
| Same opportunity / reapply | `APPLICATION_OPPORTUNITY_ALREADY_USED` | Existing blocking status for same selection; Apply block or Submit conflict |
| Campaign quota | `APPLICATION_CAMPAIGN_LIMIT_REACHED` | Two non-WITHDRAWN subject/Campaign rows reached |
| Brand quota | `APPLICATION_BRAND_LIMIT_REACHED` | Five non-WITHDRAWN subject/Brand rows reached |
| Role capability | `APPLICATION_ROLE_DENIED` | Policy Apply block or HTTP 403 command capability denial, including Assistant Withdraw |
| Current C05 workspace | `CREATOR_WORKSPACE_SELECTION_REQUIRED`, `CREATOR_OWNER_MEMBERSHIP_INCONSISTENT`, `CREATOR_CANONICAL_CONTEXT_INCONSISTENT`, `CREATOR_ONE_OWNER_INVARIANT_VIOLATED`, `CREATOR_OWNER_IDENTITY_RECONCILIATION_REQUIRED` | HTTP 409 shared actor resolver errors; consumed by Opportunity, Application and Creator notification access |
| Application lookup | `APPLICATION_NOT_FOUND` | Non-enumerating HTTP 404 for missing/out-of-authority canonical Application |
| Terminal conflict | `APPLICATION_TRANSITION_CONFLICT` | HTTP 409 when no longer PENDING / conditional transition loses |
| Legacy reconciliation | `LEGACY_APPLICATION_RECONCILIATION_REQUIRED` | Legacy ambiguity blocks canonical Submit/Apply capability |
| Legacy retirement | `LEGACY_APPLICATION_ENDPOINT_RETIRED` | HTTP 410 retired Creator Apply route |
| Handoff evidence | `C03_APPLICATION_HANDOFF_EVIDENCE_INVALID`, `C03_APPLICATION_CREATOR_IDENTITY_CONFLICT` | HTTP 409 invalid snapshot lineage or unavailable/inconsistent canonical Owner identity; transaction rolls back |
| Cursor input | `OPPORTUNITY_CURSOR_INVALID`, `APPLICATION_CURSOR_INVALID` | HTTP 400 invalid collection cursor |

Sources for rows above: policy/evaluator, invitation/continuation context and
identity resolver, canonical Campaign read adapter, Application command/context/
submit/history/terminal services, canonical Collaboration provision service,
Creator workspace actor service and retired Creator controller cited above.

### Existing errors without a dedicated C-03 code

Do not invent notification-specific or role-specific code names for these
implemented Nest exceptions:

| Surface | HTTP status | Exact message |
|---|---|---|
| C05 actor role | 403 | `Creator access required` |
| C05 active User | 403 | `An active Creator account is required` |
| C05 membership | 403 | `No active Creator workspace membership` |
| Creator notification read mark, missing or cross-scope | 404 | `Notification not found` |
| Creator notification limit | 400 | `Notification limit must be between 1 and 100` |
| Brand active User | 403 | `Brand Centre is available to active brand users only` |
| Brand membership | 403 | `Active Brand team membership required` |
| Brand Campaign ownership | 404 | `Campaign not found` |
| Brand profile lookup | 404 | `Brand profile not found` |

Creator notification access inherits the C05 codes/messages above; there is
no custom `NOTIFICATION_NOT_FOUND` code. Standard authentication, UUID-pipe
and throttling failures remain framework/shared-auth responses, not additional
C-03 domain vocabulary. Sources: Creator actor service, Creator notification
controller/query service, `src/features/brand-centre/brand-centre-auth.service.ts`,
and `src/features/brand-uce/services/brand-uce-access.service.ts`.

The retained adapter contains defensive
`C03_CANONICAL_APPLICATION_HANDOFF_NOT_AVAILABLE` only if its optional canonical
terminal dependency is absent; the accepted module supplies that dependency,
so it is not the normal P1.4 approval result. Legacy malformed-shape handling
uses HTTP 409 message `C03_LEGACY_APPLICATION_SHAPE_INVALID` (not an object
`code` field). `APPLICATION_EXPIRY_BATCH_TOO_LARGE` is internal-only, not a
public frontend route code. Internal thrown invariant strings and raw database
errors are not promoted into this frontend-copy inventory.

## 9. Explicit non-contract and aggregate verdict

Creator Brief Pack endpoint is NOT YET PART OF ACCEPTED P1; it is P5
responsibility. Its proposed Stage B route/error is not added to the accepted
route/code inventory. Frontend implementation is NOT PART OF P1.
Post-acceptance C04 workflow commands are NOT PART OF C03 P1 beyond the initial
handoff above. AWS / production / live provider operations are NOT PART OF P1
ACCEPTANCE. No frontend may compensate for missing backend behavior outside
this frozen contract.

```text
P1.1 = PASS
P1.2 = PASS
P1.3 = PASS
P1.4 = PASS
P1 = PASS
C03_BACKEND_API_STATE_CONTRACT_V1 = FROZEN
P1_BACKEND_ACCEPTED_SHA = 4b51d52de6d9206545b0a38497c7436bc9d3e095
P1_BACKEND_ACCEPTED_TREE = 0df8adf9a4a45089918dc0f5d3cccd9f4317fede
NEXT_INTERNAL_CHECKPOINT = P2
P2_EXECUTION = NOT STARTED AT TIME OF P1 FREEZE
PRODUCT_QUESTIONS = NONE
ARCHITECTURE_CONFLICTS = NONE
NEXT_AUTHORIZED_BOUNDARY = SA_REVIEW_ONLY
```

Systems Architect acceptance SHA =
`71b449546a7f5d3ef627576e82013fb0ff887d25`

This immutable acceptance record binds P1.4 and the P1 aggregate freeze.

## P3_RUNTIME_ACCEPTANCE_OVERLAY

The status remains `FROZEN_AFTER_ACCEPTED_P1`; the original backend authority above remains the P1 semantic authority. This bounded overlay records accepted executable runtime evidence without refreezing Product or API/state fields.

```text
P1_BACKEND_SEMANTIC_ACCEPTED_SHA = 4b51d52de6d9206545b0a38497c7436bc9d3e095
P1_BACKEND_SEMANTIC_ACCEPTED_TREE = 0df8adf9a4a45089918dc0f5d3cccd9f4317fede
P3_BACKEND_RUNTIME_ACCEPTED_SHA = 8bedbebf9712b6ffe0acb11339813787ef669e62
P3_BACKEND_RUNTIME_ACCEPTED_TREE = 0c9a87f688388533911730b4b77cbc08f75c640b
P3_RUNTIME_PARENT_SHA = 4b51d52de6d9206545b0a38497c7436bc9d3e095
Runtime accepted SHA = 8bedbebf9712b6ffe0acb11339813787ef669e62
Runtime accepted tree = 0c9a87f688388533911730b4b77cbc08f75c640b
Parent semantic SHA = 4b51d52de6d9206545b0a38497c7436bc9d3e095
Semantic contract delta = NONE
Runtime/security correction = Opportunity private response headers made effective before guard rejection
```

The runtime is the direct transport/security correction descendant of P1. Only `src/features/campaign-opportunities/campaign-opportunity.module.ts` and `src/features/campaign-opportunities/opportunity-private-response.test.ts` changed. Authentication requirements, entitlement, disclosure, TEASER/LOCKED/AUTHORIZED semantics, CORS permissions, schema and all 79 migrations remain unchanged.

| Canonical surface | Accepted private response boundary |
|---|---|
| GET `/api/v1/campaign-opportunities/:campaignId` | `Cache-Control: private, no-store`; Vary contains Authorization and Cookie |
| POST `/api/v1/campaign-opportunities/:campaignId/apply-continuation` | Same boundary; optional authentication remains unchanged |
| GET `/api/v1/creator/campaigns/opportunities` | Same boundary, including missing/invalid authentication rejection |

CORS-added Origin remains in Vary; assertions are token/order insensitive. Protected collection missing/invalid authentication returns 401 with generic Unauthorized, no protected payload and no handler execution. Middleware applies before guards and later validation. Unchanged successful-handler header metadata cannot erase Origin. This is the accepted executable runtime contract.

P4 consumes this document as semantic/state authority and the P3 runtime SHA above as integration backend. P4/P5 remain NOT STARTED; P4 execution is not authorized by this binding.

[Preserved V4 evidence](../../../ai-collaboration/c03-p3-backend-runtime-acceptance-report-v4.md): full suite 6188 PASS / 753 GUARDED SKIPS / 0 FAIL; build, startup, HTTP privacy/CORS/projections, legacy Apply 410, materialized Notification security and security diff PASS. V2 migration and V3 PostgreSQL/timeout evidence retain their original provenance. ZIP SHA-256 `10c0138beb31f1048978cc8550d1e5a52ec45568599d614c3a6e48a6d21ac02c`. Correction accounting remains authority=1, timeout lane=1, runtime=1, runtime budget remaining=0.

Systems Architect acceptance SHA = c32841516330f37f19effc63423317619ec1ecd5

## P5_CREATOR_BRIEF_PACK_ACCEPTANCE_OVERLAY

Authorization: `C03_P5_DURABLE_CREATOR_BRIEF_PACK_ACCEPTANCE_BINDING_V1`. P1 semantic authority and the P3 runtime overlay above remain unchanged. This overlay freezes the accepted P5 addition; earlier not-started statements retain their checkpoint-time meaning.

```text
P5_BACKEND_ACCEPTED_SHA = 3712f56930a8785b5cb61a9ed31fb43b240cb421
P5_BACKEND_ACCEPTED_TREE = 16d559c9f0e349717b31f41c6ba2fa8b39213060
P5_FRONTEND_ACCEPTED_SHA = 82ed3c9ef849be8353565a1901b6f5fb065c37e1
P5_FRONTEND_ACCEPTED_TREE = f039d59aef7b0c8dd1fdb6ebb34cda961761c597
```

### Route and current authorization

`GET /api/v1/creator/applications/:applicationId/brief-pack` requires an authenticated User, current active C05 Creator Team membership, and stored Application subject/workspace match. Owner, Manager and Assistant access is accepted; inactive membership is denied. Wrong current Creator subject/workspace returns non-enumerating `404 APPLICATION_NOT_FOUND`.

```text
CURRENT_INSTAGRAM_REQUIRED = NO
CURRENT_CAMPAIGN_REQUIRED = NO
CURRENT_ASSET_REQUIRED = NO
CURRENT_BRIEF_REQUIRED = NO
CURRENT_ELIGIBILITY_REQUIRED = NO
CURRENT_INVITATION_REQUIRED = NO
APPLICATION_TERMINAL_STATUS_BLOCKS_ACCESS = NO
```

### CreatorBriefPackV1 projection

Source authority is the immutable C03 Application snapshot only. Complete evidence requires `authorityVersion = C03_CANONICAL` and `snapshot.schemaVersion = C03_APPLICATION_SNAPSHOT_V1`; exact Application/Campaign/Asset/Brief/Creator-subject and workspace lineage and submission timestamps must match. Malformed or incomplete evidence returns `409 APPLICATION_BRIEF_PACK_UNAVAILABLE`.

The accepted projection has `schemaVersion: 1` and the following explicit partitions:

| Partition | Accepted fields |
|---|---|
| application | applicationId, reference, submittedAt |
| brand | name, description, logoUrl, domain; nullable |
| campaign | name, objective, platforms, publishingStart, publishingEnd, applicationDeadline |
| commercial | compensationModel, offer, currency, receivesBrandSupport, brandSupportType, brandSupportEstimatedValue |
| asset | kind; nullable offering (name, description, imageUrl, url); nullable offer (offerName, description, entityLink) |
| brief | briefName, creativeIntent, creatorBrief, briefType, platform, briefLevelGuidance, referenceContent, usageRights, creatorRequirements, deliverables |
| ordered deliverables | id, format, displayOrder, configuration, creativeGuidance, amplifyTargetDeliverableId; ordered by displayOrder then id |

Commercial amounts remain exact decimal strings, including authored zero, with FIXED/NEGOTIABLE and INR/USD. Guidance, requirements, references, usage rights, selected Asset and Brief are snapshotted authored content. Current mutable Campaign, Asset, Brief, Instagram, eligibility and invitation evidence are not read as pack content.

Actor identity, membership identity, Creator private data, email/contact/shipping, attribution, UTMs, invitation evidence, eligibility evidence, provider identifiers/credentials/diagnostics, internal/private notes, Notification internals, Idempotency-Key and command receipt/event internals are structurally excluded from the backend pack itself. This is not a frontend-ignore-only policy. Creator-subject evidence validates lineage without entering the projection; authored structured trees reject private metadata keys.

### Private response and persistence

The route inherits the existing Application pre-guard private response boundary: `Cache-Control: private, no-store` and `Vary` containing `Authorization` and `Cookie`, for success and pre-handler failures. Existing CORS variance is preserved. No new privacy mechanism is introduced.

```text
P5_SCHEMA_CHANGE = NONE
P5_MIGRATION_CHANGE = NONE
MIGRATION_COUNT = 79
PDF_PERSISTENCE = NONE
BINARY_BACKEND_STORAGE = NONE
AWS_STORAGE = NONE
```

C03 Application Brief Pack records **what the Creator applied to**. C04 Collaboration Brief Pack records **what Brand + Creator agreed to execute**. P5 does not create or redefine C04 Collaboration artifact behavior.

The external evidence bundle is `C03_P5_CREATOR_BRIEF_PACK_ACCEPTANCE_EVIDENCE.zip`, SHA-256 `3718c40c76c4e5fc0bbb223f1c550df039d7380f968c3e626fdfd431f900841f`. The ZIP and sample PDFs are not committed. Validation below is preserved accepted P5 evidence; this documentation binding performs no new runtime tests, builds, or PDF regeneration.

Accepted evidence and validation are recorded in the [P5 ledger continuation](../../execution_ledgers/c03_recovery_execution_ledger_v1.md#15-p5-durable-creator-brief-pack-acceptance) and [preserved runner report](../../../ai-collaboration/c03-p5-creator-brief-pack-implementation-and-acceptance-report-v1.md).

```text
P6_BACKEND_CANDIDATE_INPUT = 3712f56930a8785b5cb61a9ed31fb43b240cb421
P6_BACKEND_CANDIDATE_TREE = 16d559c9f0e349717b31f41c6ba2fa8b39213060
P6_FRONTEND_CANDIDATE_INPUT = 82ed3c9ef849be8353565a1901b6f5fb065c37e1
P6_FRONTEND_CANDIDATE_TREE = f039d59aef7b0c8dd1fdb6ebb34cda961761c597
P6_ARCHITECTURAL_ELIGIBILITY = YES
P6_STATE = NOT STARTED
P7_STATE = NOT STARTED
NEXT_AUTHORIZED_BOUNDARY = SA_REVIEW_ONLY
```

P6 requires later SA authorization. P5 correction count is 1, remaining budget 1, historical accounting only with no post-acceptance mutation authority.

Systems Architect acceptance SHA = 494679e72daa257f3b76a105094fe02cac1c3f04

## P6_AUTHORITY_RECONCILIATION

Authorization: `C03_P6_ELIGIBLE_ONLY_INVITATION_AUTHORITY_RECONCILIATION_AND_BACKEND_CORRECTION_V1`. The former derived entitlement text (Backend ELIGIBLE or valid invitation) was DERIVED_CONTRACT_DRIFT. Historical backend `3712f56930a8785b5cb61a9ed31fb43b240cb421` implemented that incorrect derived text; P6 identified a LATENT_RUNTIME_PRODUCT_CONTRACT_DEFECT. P5 acceptance remains historical evidence and is not rewritten. That SHA is not an acceptable final P6 backend until corrected.

```text
P6_V1_DISCOVERY = ELIGIBLE_ONLY_INVITATION_BYPASS_DRIFT
FROZEN_PRODUCT_RULE = ELIGIBLE_ONLY_REQUIRES_BACKEND_ELIGIBLE
INVITE_ONLY_RULE = VALID_MATCHING_INVITATION
PRODUCT_CHANGE = NONE
ARCHITECTURE_CHANGE = NONE
PREVIOUS_DERIVED_CONTRACT_TEXT = SUPERSEDED_BY_AUTHORITY_RECONCILIATION
```

For PUBLIC, invitation may provide ingress/attribution context but is not needed for entitlement. For ELIGIBLE_CREATORS_ONLY, invitation may provide ingress/attribution/continuation context but MUST NOT substitute for authoritative backend ELIGIBLE. For INVITE_ONLY, valid matching invitation supplies visibility entitlement and bypasses ordinary targeting eligibility only. All classes preserve current Creator/Team and usable Instagram gates.

INVITATION_IS_NOT_ELIGIBLE_ONLY_ENTITLEMENT. Invitation records and continuation are not prohibited for ELIGIBLE_ONLY. Product and architecture semantics and the P6 matrix expectation remain unchanged. Full P6 resume requires SA acceptance of the separately authorized backend correction.

## P6_COMPOUND_ELIGIBLE_ONLY_CORRECTION_ACCEPTANCE

Authorization: `C03_P6_CORRECTED_BACKEND_CANDIDATE_DURABLE_BINDING_V1`. The accepted compound correction establishes the current backend candidate for resumed P6 while preserving the P1 semantic authority, P3 runtime overlay, P5 Brief Pack overlay, and P6 authority reconciliation above.

```text
P6_BACKEND_CANDIDATE_SHA = aebeb85fd6bba37f88c3805c213c61e7f63b2f5f
P6_BACKEND_CANDIDATE_TREE = 86c5bb769598dd19a634dcd867350e53eaa06f75
P6_BACKEND_PARENT_SHA = 3712f56930a8785b5cb61a9ed31fb43b240cb421
P6_FRONTEND_CANDIDATE_SHA = 82ed3c9ef849be8353565a1901b6f5fb065c37e1
P6_FRONTEND_CANDIDATE_TREE = f039d59aef7b0c8dd1fdb6ebb34cda961761c597
PRODUCT_DELTA = NONE
ARCHITECTURE_DELTA = NONE
SCHEMA_DELTA = NONE
MIGRATION_DELTA = NONE
```

The exact correction chain is `3712f56930a8785b5cb61a9ed31fb43b240cb421` → `aebeb85fd6bba37f88c3805c213c61e7f63b2f5f`, one direct child with no merge or rebase. The former SHA remains the historical accepted P5 backend. The latter is the current P6 backend candidate after correcting the latent Product-contract defect.

The five-file delta is:

```text
src/features/campaign-opportunities/campaign-opportunity-policy.service.ts
src/features/campaign-opportunities/campaign-opportunity.service.ts
src/features/campaign-opportunities/opportunity-contract.test.ts
src/features/campaign-opportunities/opportunity-policy.test.ts
src/features/campaign-opportunities/opportunity.postgres.test.ts
```

```text
DEFECT_1 = GLOBAL_VALID_INVITATION_VISIBILITY_ENTITLEMENT
DEFECT_2 = VALID_INVITATION_SUPPRESSED_ELIGIBLE_ONLY_ELIGIBILITY_EVALUATION
ROOT_CAUSE = COMPOUND_ELIGIBLE_ONLY_INVITATION_ENTITLEMENT_DRIFT
```

The final visibility entitlement is:

```text
PUBLIC = authenticated Creator + usable Instagram
ELIGIBLE_CREATORS_ONLY = authenticated Creator + usable Instagram + authoritative backend ELIGIBLE
INVITE_ONLY = authenticated Creator + usable Instagram + valid matching invitation

ELIGIBLE_ONLY: invitation is NOT entitlement
INVITE_ONLY: invitation bypasses ordinary targeting eligibility
PUBLIC: eligibility and invitation do not determine entitlement
```

Invitation context may remain valid ingress, continuation, and attribution lineage without becoming ELIGIBLE_ONLY entitlement. No other runtime semantic delta is accepted.

Accepted correction evidence records 6,206 ordinary backend passes with 765 guarded skips, 61 separately executed PostgreSQL passes, and passing build, startup, raw HTTP redaction, and changed-scope lint. These are preserved runner results; this docs-only binding reruns no runtime check. External evidence: `C03_P6_COMPOUND_ELIGIBLE_ONLY_CORRECTION_EVIDENCE.zip`, SHA-256 `fd7434434fc5bc9d423a00aaa94c24f7e7089ae1a72a5101c9447fa44c4c03f9`.

```text
P6_TRACKED_CORRECTION_COUNT = 1
P6_HARNESS_CORRECTION_COUNT = 2
P6_HARNESS_CORRECTION_BUDGET_REMAINING = 0
```

The two harness-only corrections were: (1) the auxiliary TypeScript token-comparison checker mishandled template literals after formatting; its result was discarded and final lint plus executable tests supplied validation, and (2) the initial compiled HTTP harness expected an empty collection in a database containing unrelated eligible Campaign fixtures; it was rerun in a fresh single-Campaign database with the same empty-collection and redaction assertions. Both are `HARNESS_ONLY`, with `NO_PRODUCT_SEMANTIC_CHANGE` and `NO_CANDIDATE_BEHAVIOR_CHANGE`.

P6 V1 remains historically blocked before the 13,271,040-cell matrix (`0 / 13,271,040`) by derived-contract/implementation drift. The subsequent correction attempt remains historically blocked before backend mutation after discovering the eligibility-evaluation suppression; its backend commit was `NONE`. Neither blocked run is a failure of the corrected candidate.

Full P6 matrix/runtime execution is not resumed by this binding. No further tracked correction is authorized; a later candidate defect returns to SA review.

Systems Architect acceptance SHA = P6_CORRECTION_ACCEPTANCE_RECORD_SHA_PENDING
