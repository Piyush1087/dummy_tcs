# C-03 Frontend Execution Contract V1

**Artifact:** `C03_FRONTEND_EXECUTION_CONTRACT_V1`
**Status:** FROZEN_AFTER_ACCEPTED_P2

Authorization: `C03_P2_ENTRY_PROOF_AND_DURABLE_FRONTEND_CONTRACT_FREEZE_V1`. Starting authority `706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb`; frontend `323658d4b147b95b5629ff8d91fa90b8fe9077e4`, tree `4ff40849c64a98429a89cc8e4f1ff6949815070c`; backend `4b51d52de6d9206545b0a38497c7436bc9d3e095`, tree `0df8adf9a4a45089918dc0f5d3cccd9f4317fede`. Frozen Product/Stage B and [backend contract](c03_backend_api_state_contract_v1.md) remain principal authority.

The following is the historical P2 acceptance snapshot; the P3 runtime integration overlay below supplies the current checkpoint and runtime authority.

```text
P1 = PASS
P2 = PASS
P2_FRONTEND_STATE_FAMILY_REGISTER = ACCEPTED
P2_CURRENT_FRONTEND_REUSE_AUDIT = PASS
P2_ACCEPTED_REFERENCE_REUSE_AUDIT = PASS
P2_AURORA_CONSTRUCTION_ASSESSMENT = PASS
P2_STITCH_DECISION = NOT_REQUIRED
P2_REQUIRED_VISUAL_AUTHORITY = ACCEPTED
P2_FRONTEND_SEMANTIC_ACCESSIBILITY_GATE = PASS
STITCH_EXECUTOR_ACCESS = READY
P2_TYPED_FIXTURE_ENTRY_COVERAGE = PASS
FRONTEND_AUTHORITY_SHA = 323658d4b147b95b5629ff8d91fa90b8fe9077e4
P1_BACKEND_AUTHORITY_SHA = 4b51d52de6d9206545b0a38497c7436bc9d3e095
LAST_ACCEPTED_CHECKPOINT = P2
CURRENT_CHECKPOINT = P3
P3_STATE = NOT STARTED
P4_STATE = NOT STARTED
P5_STATE = NOT STARTED
PRODUCT_QUESTIONS = NONE
BACKEND_CONTRACT_GAPS = NONE
DESIGN_GAPS = NONE
NEXT_AUTHORIZED_BOUNDARY = SA_REVIEW_ONLY
```

## Entry proofs

STITCH_EXECUTOR_ACCESS = READY

Tool registry exposed `mcp__stitch_gv__list_projects`. Calling it with `{}` succeeded (isError=false), returning 51 accessible projects. Example resource: `projects/14541378723209492964`. Recorded UTC: `2026-09-05T17:46:45.939Z`. This was one non-mutating metadata/list call. No project/screen creation, generation, modification, deletion, configuration change or generation quota request occurred. Access proof does not promote any returned project content to design authority.

P2_TYPED_FIXTURE_ENTRY_COVERAGE = PASS

All sources below are in `Piyush1087/creator-commerce-backend-v2-clone@4b51d52de6d9206545b0a38497c7436bc9d3e095`, tree `0df8adf9a4a45089918dc0f5d3cccd9f4317fede`. Coverage is inspection of accepted typed tests/fixtures and production types, not a fresh runtime test run or new frontend fixture implementation. The finite policy fixture provides the access matrix; Prisma-backed fixtures provide realistic UUID ancestry, canonical commercials, rich Briefs/Deliverables, actors and immutable Applications. No material requested family lacks accepted typed authority.

| Family | Representative coverage | Exact accepted source | Typed evidence | Verdict |
|---|---|---|---|---|
| Opportunity projections | TEASER; LOCKED; AUTHORIZED | `src/features/campaign-opportunities/opportunity-policy.test.ts:187` (blob `46333864c93caf80c4150d46d92998c58a774100`) | Typed OpportunityPolicyInput/CampaignRead finite matrix asserts all three projection branches and structural redaction; OpportunityAccess discriminated union in src/features/campaign-opportunities/campaign-opportunity-policy.service.ts. | PASS |
| Visibility | PUBLIC / EVERYONE; ELIGIBLE_ONLY; INVITE_ONLY / INVITED_ONLY | `src/features/campaign-opportunities/opportunity-policy.test.ts:115` (blob `46333864c93caf80c4150d46d92998c58a774100`) | Typed literal visibility dimension exercises all three accepted persisted values; frozen contract owns public names. | PASS |
| Instagram | NOT_CONNECTED; CONNECTED_HEALTHY; REVALIDATION_REQUIRED; RECONNECT_REQUIRED; PROVIDER_BLOCKED_RECOVERABLE; DISCONNECTED_IDENTITY_RETAINED | `src/features/campaign-opportunities/opportunity-policy.test.ts:21` (blob `46333864c93caf80c4150d46d92998c58a774100`) | Persisted-state objects evaluated by evaluateInstagramOpportunity; six expected lifecycle outputs and exact recovery actions asserted. | PASS |
| Eligibility | ELIGIBLE; INELIGIBLE; UNAVAILABLE | `src/features/campaign-opportunities/opportunity-policy.test.ts:121` (blob `46333864c93caf80c4150d46d92998c58a774100`) | Typed eligibility dimension and actual policy result; no Boolean-only fixture authority. | PASS |
| Invitation | VALID; required/ABSENT; EXPIRED; REVOKED; SUBJECT_MISMATCH | `src/features/campaign-opportunities/opportunity-policy.test.ts:126` (blob `46333864c93caf80c4150d46d92998c58a774100`) | InvitationResult typed finite dimension. Generic non-enumerating suppression remains policy-owned; not every matrix cell discloses an invitation reason. | PASS |
| Invitation required reason | INVITATION_REQUIRED from ABSENT in proven context | `src/features/campaign-opportunities/campaign-opportunity-policy.service.ts:146` (blob `5d93e75ebc8a0edcfe37f1c36450b89b4e658b71`) | Accepted typed policy explicitly maps ABSENT to REQUIRED when this branch is reached; initial unproven absence remains generic. Other typed authority allowed by entry-proof instruction. | PASS |
| Commercial model and intentional zero | FIXED; NEGOTIABLE; explicit offer 0 | `src/features/campaign-applications/applications.postgres.test.ts:705` (blob `b22deae0fee96e511ebea1d17e6dac61e38b80e5`) | Prisma-backed parameterized test uses FIXED_FEE/NEGOTIABLE; snapshot asserts decimal-string zero and projected model; no Creator proposal. | PASS |
| Brand support present | receivesBrandSupport=true; PRODUCT; explicit estimated value0 | `src/features/campaign-applications/applications.postgres.test.ts:713` (blob `b22deae0fee96e511ebea1d17e6dac61e38b80e5`) | Accepted Prisma update in zero-offer test; canonical snapshot preserves support estimate. | PASS |
| Brand support absent | receivesBrandSupport=false | `test/fixtures/c03-application-fixtures.ts:213` (blob `74b454ef71a8edaa80e8cf53418adcf360b05418`) | Typed Prisma campaignFixture persists canonical version1 commercial offer/currency with support absent; reused in successful command/history suites. | PASS |
| Commercial unavailable | UNAVAILABLE; legacy/missing authored evidence rejected | `src/features/brand-uce/services/canonical-campaign-application-read.service.test.ts:106` (blob `ed827ae1c6ef0913ec394fa4d3443d95e8598886`) | Accepted adapter fixture and actual typed projection assertion reject missing canonical commercial provenance; production ReturnType is CampaignRead. | PASS |
| Single valid pair | One selectable canonical Asset/Brief pair | `src/features/campaign-applications/applications.postgres.test.ts:579` (blob `b22deae0fee96e511ebea1d17e6dac61e38b80e5`) | Real Prisma campaignFixture called with briefCount1; typed selection returns paired UUIDs, command outcome checked. | PASS |
| Multiple pairs | Three Brief pairs beneath one Brand Asset | `test/fixtures/c03-application-fixtures.ts:179` (blob `74b454ef71a8edaa80e8cf53418adcf360b05418`) | Typed Prisma fixture creates published Briefs and ordered Deliverables; selection(i) returns exact associated pair. Used by sibling tests. | PASS |
| Brand-only Asset | BRAND Asset; no product/stock prerequisite | `test/fixtures/c03-application-fixtures.ts:218` (blob `74b454ef71a8edaa80e8cf53418adcf360b05418`) | Real canonical Asset persisted with kind BRAND, active status and published associated Briefs. | PASS |
| Unavailable Asset and Brief | Paused Asset; Draft Brief; mismatched pair | `src/features/campaign-applications/applications.postgres.test.ts:155` (blob `b22deae0fee96e511ebea1d17e6dac61e38b80e5`) | Prisma state mutations exercise asset/brief/mismatch rejection; typed command authority and no Application/receipt assertions. | PASS |
| Pending Application | PENDING | `src/features/campaign-applications/applications.postgres.test.ts:317` (blob `b22deae0fee96e511ebea1d17e6dac61e38b80e5`) | Accepted real submit creates Pending row and blocking duplicate case. | PASS |
| Terminal Application states | WITHDRAWN; EXPIRED; REJECTED | `src/features/campaign-applications/applications.postgres.test.ts:316` (blob `b22deae0fee96e511ebea1d17e6dac61e38b80e5`) | Real withdraw/expire/reject transitions establish accepted typed terminal states and reapply/quota behavior. | PASS |
| Approved Application and link | APPROVED; collaborationId | `src/features/campaign-applications/application-handoff.postgres.test.ts:99` (blob `ad2126e29690c583c7abb1a1d5c872241a0a95c6`) | Real approval asserts APPROVED/statusVersion2, one linked Collaboration/event/job/receipt and history.detail collaborationId. | PASS |
| Sibling Applications | Independent sibling rows; two approved Collaborations | `src/features/campaign-applications/application-handoff.postgres.test.ts:153` (blob `ad2126e29690c583c7abb1a1d5c872241a0a95c6`) | Real selected Brief0/Brief1 commands and concurrent approval outcomes preserve distinct Application-sourced Collaborations. | PASS |
| Actor role | OWNER; MANAGER; ASSISTANT | `src/features/campaign-applications/applications.postgres.test.ts:54` (blob `b22deae0fee96e511ebea1d17e6dac61e38b80e5`) | Prisma-backed role matrix uses creatorFixture/teamFixture, separates actor from Owner business subject and snapshots current role. | PASS |
| Historical access without usable Instagram | Disconnected Instagram; history collection/detail readable for all three roles | `src/features/campaign-applications/applications.postgres.test.ts:352` (blob `b22deae0fee96e511ebea1d17e6dac61e38b80e5`) | Test disconnects provider and archives/mutates current Campaign/Brief, then verifies immutable history and role-specific canWithdrawPending. | PASS |

## Canonical route and guard freeze

Routes: `/campaigns/:campaignId`; `/creator/campaigns` defaults to Opportunities; `/creator/campaigns/opportunities`; `/creator/campaigns/opportunities/:campaignId`; `/creator/campaigns/applications`; `/creator/campaigns/applications/:applicationId`. Approved Collaboration destination is `/creator/collaborations?thread=<collaborationId>`. Notification entry is the existing AppHeader bell opening a bounded drawer/sheet; no global notification route.

Authenticated C03 routes require RequireAuth plus current C05 actor/workspace authority. Do not wrap the entire family in RequireCreatorPlatformAccess. Current usable Instagram remains backend authority for current Opportunity disclosure and Submit, not a route prerequisite for My Applications, detail, Withdraw, notifications or approved Collaboration navigation. Preserve the existing C04 CollaborationRouteGuard and C04 workflow ownership.

## Interaction and disclosure contract

TEASER carries only safe Campaign identity; LOCKED carries only reason/recovery; detailed commercials and Briefs exist only in AUTHORIZED. Never hide protected payload in CSS/DOM or retain another actor/workspace cache. An empty Opportunities collection does not prove Instagram failure; only actual backend reasons/authorized Settings evidence may drive recovery.

Canonical Asset then associated Brief selection uses native radio groups. A single valid pair may skip selection visually but explicit Review and Submit remain. Review shows exact Asset, Brief, commercial, Deliverables and support. No stock gate, proposed amount, generic pitch, shipping/contact questionnaire or legal/escrow checkbox. Preserve one Idempotency-Key per explicit unchanged command intent and safe replay; changed selection requires re-review/new intent.

History is an independent immutable snapshot per Application ID, not live Campaign reconstruction. Backend canWithdrawPending and current C05 capabilities govern Withdraw; Assistant cannot Withdraw. Siblings remain independent, including multiple approved Collaborations. C03 only links to C04, never duplicates negotiation, shipping, content review or payout. Brief Pack remains separately owned P5; no speculative endpoint/CTA.

## Mandatory P4 shared compatibility prerequisite

Reconcile `src/shared/creator/creator-workspace-actor.contract.ts` and `src/shared/creator/creator-workspace-actor-mapper.ts` to accept `CAMPAIGN_OPPORTUNITY_VIEW`, `CAMPAIGN_APPLICATION_APPLY`, `CAMPAIGN_APPLICATION_WITHDRAW_PENDING`. The current every-action validator otherwise rejects the complete accepted backend actor context. Preserve unknown-action fail-closed behavior, actor identity checks and Owner-subject separation. Assistant recovery guidance must not grant inaccessible Settings capability. No source change is made by this freeze.

## Rejected stale semantics

Creator Marketplace IA; global Campaign enumeration; match_score_percent; Marketplace filters/ranking; already_applied Boolean; inventory_count/out_of_stock Apply authority; compensation_teaser; raw invite_token; legacy application_scope authority; Boolean-only is_eligible/is_social_connected authority; raw invitation credentials in path/query/storage are rejected. Credentials enter only by fragment, cleaned before external activity, one secure exchange, opaque C01 context and safe Campaign return. P4 changes only executable/reachable C03 behavior; historical documents remain traceability and must not undergo broad renaming. The preserved report contains all 447 individually classified occurrences across 71 files.

## Notification presentation freeze

NOTIFICATION_PRESENTATION = BOUNDED_MISSING_PRESENTATION

Existing AppHeader bell → existing Aurora drawer/sheet pattern, using GET /api/v1/creator/notifications, GET /api/v1/creator/notifications/unread-count, PATCH /api/v1/creator/notifications/:notificationId/read and POST /api/v1/creator/notifications/mark-all-read. Preserve current User-recipient/workspace scope, no Instagram prerequisite, safe approved/rejected Application links. No cursor pagination, complete archive guarantee, new global framework, new bottom-navigation destination or Creator email preference behavior.

## Visual and Aurora decision

NEW_UIUX_DESIGN_REQUIRED = NO
STITCH_REQUIRED = NO

The bounded visual authority combines the canonical Creator shell, existing Campaign card/detail/review/history geometry after semantic reconciliation, accepted Phase7 Campaign references as visual grammar only, accepted C04 contextual drawer/mobile-card grammar, current C05 Instagram recovery presentation, and Aurora v5 primitives/responsive/accessibility rules. Stale references never become Product/API authority. No generation or UIUX execution is required.

## Responsive and accessibility freeze

Desktop, tablet/intermediate, 390px and 375px use one semantic model. Require no page-level horizontal overflow; >=44px touch targets; safe-area/bottom-nav clearance; native radio groups; named dialogs/drawers; focus trap and restore; Escape close where appropriate; semantic headings; text status independent of color; associated errors; honest busy/live-region announcements; long-content wrapping. Existing primitives require the bounded hardening in the manifest. P4 runtime acceptance, not this documentation freeze, proves rendered compliance.

## Durable evidence

The [complete state register](c03_frontend_state_family_register_v1.md) contains all 135 accepted rows unchanged. The [full runner report](../../../ai-collaboration/c03-p2-frontend-state-and-reuse-preflight-report-v1.md) is preserved in full (Git may normalize line endings); original runner artifact SHA-256 `27f6d6f5915b7a6da77e0b4e8c481ae8f08088153f639c2f7500866b055d86ef`. Its earlier READY_FOR_SA_REVIEW/SA_REVIEW_ONLY text is historical evidence; this freeze and latest ledger entry supersede that checkpoint status. Original report bundle links refer to runner artifacts; all registers are also present inline in the preserved report. No ZIP is committed.

## C03_FRONTEND_ROUTE_SCREEN_REGISTER_V1

### Neutral Campaign entry

| Field | Value |
|---|---|
| PURPOSE | Neutral Campaign entry |
| ENTRY_ROUTE | /campaigns/:campaignId |
| AUTH_REQUIREMENT | Optional |
| CURRENT_INSTAGRAM_REQUIREMENT | Backend projection only; no route-wide guard |
| BACKEND_CALL | GET /api/v1/campaign-opportunities/:campaignId; POST /api/v1/campaign-opportunities/:campaignId/apply-continuation |
| VIEW_STATE_FAMILIES | PUBLIC_*; TEASER_*; UNKNOWN_*; AUTHENTICATED_CREATOR_RETURN; ENT_*; IG_* |
| SHELL_LOCATION | Neutral existing guest chrome; authenticated return into Creator shell |
| SURFACE_CLASS | PUBLIC |
| CURRENT_ROUTE_REUSE | Stage B exact route; old /marketplace/:campaignId composition |
| RECONCILIATION_REQUIRED | Replace legacy DTO/claim/continuation; fragment cleanup before external activity; structural disclosure |

### Campaigns default

| Field | Value |
|---|---|
| PURPOSE | Campaigns default |
| ENTRY_ROUTE | /creator/campaigns |
| AUTH_REQUIREMENT | RequireAuth + current C05 actor |
| CURRENT_INSTAGRAM_REQUIREMENT | No redirect based on current IG |
| BACKEND_CALL | None; navigation redirect |
| VIEW_STATE_FAMILIES | OC_* |
| SHELL_LOCATION | AppShell Campaigns |
| SURFACE_CLASS | CREATOR_AUTH |
| CURRENT_ROUTE_REUSE | Existing Campaigns mount and sidebar/bottom-nav item |
| RECONCILIATION_REQUIRED | Default redirect to Opportunities; remove Command Center production/pipeline semantics |

### Opportunities collection

| Field | Value |
|---|---|
| PURPOSE | Opportunities collection |
| ENTRY_ROUTE | /creator/campaigns/opportunities |
| AUTH_REQUIREMENT | RequireAuth + current C05 VIEW |
| CURRENT_INSTAGRAM_REQUIREMENT | Current usable IG required by backend for returned Opportunities, not a route redirect |
| BACKEND_CALL | GET /api/v1/creator/campaigns/opportunities?cursor=... |
| VIEW_STATE_FAMILIES | OC_*; IG_*; UTIL_* |
| SHELL_LOCATION | AppShell > Campaigns > Opportunities |
| SURFACE_CLASS | CREATOR_AUTH |
| CURRENT_ROUTE_REUSE | Stage B exact route; reuse Discovery card geometry |
| RECONCILIATION_REQUIRED | Outside RequireCreatorPlatformAccess; no public enumeration, matching filters or scores |

### Current Opportunity detail

| Field | Value |
|---|---|
| PURPOSE | Current Opportunity detail |
| ENTRY_ROUTE | /creator/campaigns/opportunities/:campaignId |
| AUTH_REQUIREMENT | RequireAuth + current C05 VIEW |
| CURRENT_INSTAGRAM_REQUIREMENT | Backend reason/recovery and entitlement |
| BACKEND_CALL | GET /api/v1/campaign-opportunities/:campaignId; POST /api/v1/creator/campaigns/:campaignId/applications |
| VIEW_STATE_FAMILIES | DOS_*; SEL_*; DRAW_*; APPLY_*; ENT_*; IG_* |
| SHELL_LOCATION | AppShell > Campaigns > Opportunities |
| SURFACE_CLASS | CREATOR_AUTH |
| CURRENT_ROUTE_REUSE | Stage B exact route; existing CampaignDetail/Wizard structure |
| RECONCILIATION_REQUIRED | No local eligibility/stock predicate; Review/Submit explicit; Apply is feature overlay, no extra URL required |

### My Applications

| Field | Value |
|---|---|
| PURPOSE | My Applications |
| ENTRY_ROUTE | /creator/campaigns/applications |
| AUTH_REQUIREMENT | RequireAuth + current active Creator team |
| CURRENT_INSTAGRAM_REQUIREMENT | NONE |
| BACKEND_CALL | GET /api/v1/creator/applications?cursor=... |
| VIEW_STATE_FAMILIES | HIST_*; ROLE_*; UTIL_* |
| SHELL_LOCATION | AppShell > Campaigns > My Applications |
| SURFACE_CLASS | CREATOR_AUTH |
| CURRENT_ROUTE_REUSE | Stage B route; HistoryArchive rows/cards visual grammar |
| RECONCILIATION_REQUIRED | Outside platform guard; replace closed-Collaboration archive API with canonical history |

### Immutable Application detail

| Field | Value |
|---|---|
| PURPOSE | Immutable Application detail |
| ENTRY_ROUTE | /creator/campaigns/applications/:applicationId |
| AUTH_REQUIREMENT | RequireAuth + current active Creator team |
| CURRENT_INSTAGRAM_REQUIREMENT | NONE |
| BACKEND_CALL | GET /api/v1/creator/applications/:applicationId; POST /api/v1/creator/applications/:applicationId/withdraw |
| VIEW_STATE_FAMILIES | HIST_*; ROLE_*; WITHDRAW_*; DRAW_*; HANDOFF_* |
| SHELL_LOCATION | AppShell > Campaigns > My Applications |
| SURFACE_CLASS | CREATOR_AUTH |
| CURRENT_ROUTE_REUSE | Stage B exact route; new bounded composition from existing drawers/cards |
| RECONCILIATION_REQUIRED | Use immutable snapshot; backend canWithdrawPending; no live Opportunity hydration; no Brief Pack call |

### Approved handoff

| Field | Value |
|---|---|
| PURPOSE | Approved handoff |
| ENTRY_ROUTE | /creator/collaborations?thread=<collaborationId> |
| AUTH_REQUIREMENT | RequireAuth + existing CollaborationRouteGuard CREATOR |
| CURRENT_INSTAGRAM_REQUIREMENT | NONE as C03 entry precondition; C04 owns its subsequent authority |
| BACKEND_CALL | Existing C04 requests remain C04-owned |
| VIEW_STATE_FAMILIES | HANDOFF_* |
| SHELL_LOCATION | Existing AppShell > Collaborations |
| SURFACE_CLASS | CREATOR_AUTH |
| CURRENT_ROUTE_REUSE | Exact current query selector; legacy ?collaboration accepted by existing reader |
| RECONCILIATION_REQUIRED | Remove C01 platform pre-gate around handoff route; retain C04 role guard; do not implement negotiation/shipping/review/payout |

### Recipient notifications

| Field | Value |
|---|---|
| PURPOSE | Recipient notifications |
| ENTRY_ROUTE | Existing AppHeader bell; bounded drawer/sheet, no new global route |
| AUTH_REQUIREMENT | RequireAuth + current active team and recipient User |
| CURRENT_INSTAGRAM_REQUIREMENT | NONE |
| BACKEND_CALL | GET /api/v1/creator/notifications; GET /unread-count; PATCH /:notificationId/read; POST /mark-all-read (same base) |
| VIEW_STATE_FAMILIES | NOTIF_*; UTIL_* |
| SHELL_LOCATION | Existing Creator AppHeader |
| SURFACE_CLASS | CREATOR_AUTH |
| CURRENT_ROUTE_REUSE | Bell exists but inert; list presentation NOT_FOUND |
| RECONCILIATION_REQUIRED | BOUNDED_MISSING_NOTIFICATION_PRESENTATION; safe Application links; no bottom-nav addition; no new global notification framework |

### Instagram recovery destination

| Field | Value |
|---|---|
| PURPOSE | Instagram recovery destination |
| ENTRY_ROUTE | /creator/settings/instagram |
| AUTH_REQUIREMENT | Existing C05 Settings action guard |
| CURRENT_INSTAGRAM_REQUIREMENT | Recovery itself must remain reachable when current IG unusable |
| BACKEND_CALL | Existing C05 Instagram Settings API; C03 does not replace it |
| VIEW_STATE_FAMILIES | IG_* |
| SHELL_LOCATION | Existing Creator Settings shell |
| SURFACE_CLASS | CREATOR_AUTH |
| CURRENT_ROUTE_REUSE | Existing route and six-state presentation |
| RECONCILIATION_REQUIRED | Use only allowed Settings action; Assistant receives ask Owner/Manager guidance instead of inaccessible CTA |

## C03_CURRENT_ROUTE_INVENTORY_V1

### 1

| Field | Value |
|---|---|
| CURRENT_ROUTE | /marketplace |
| CURRENT_GUARD | Guest layout; no auth |
| CURRENT_COMPONENT | src/pages/public/marketplace/public-marketplace-page.tsx |
| CURRENT_SEMANTICS | Public search/filter Campaign enumeration |
| TARGET_C03_DISPOSITION | Retire browsing for C03; neutral unavailable/entry compatibility only, no API enumeration or new Marketplace IA |

### 2

| Field | Value |
|---|---|
| CURRENT_ROUTE | /marketplace/:campaignId |
| CURRENT_GUARD | Guest layout; no auth |
| CURRENT_COMPONENT | src/pages/public/marketplace/public-campaign-detail-page.tsx |
| CURRENT_SEMANTICS | Legacy public detail DTO |
| TARGET_C03_DISPOSITION | Compatibility canonical Campaign-ID redirect to Stage B /campaigns/:campaignId; sanitize query, no legacy payload hydration |

### 3

| Field | Value |
|---|---|
| CURRENT_ROUTE | /marketplace/invite/:token |
| CURRENT_GUARD | Guest layout; no auth |
| CURRENT_COMPONENT | src/pages/public/marketplace/public-invite-landing-page.tsx |
| CURRENT_SEMANTICS | Raw token in path; invitation lookup/claim |
| TARGET_C03_DISPOSITION | REMOVE_IN_P4 raw-path flow; cannot safely convert already exposed credential. Generic fresh secure-link recovery; do not carry token to new URL/storage |

### 4

| Field | Value |
|---|---|
| CURRENT_ROUTE | /creator/marketplace |
| CURRENT_GUARD | RequireAuth > AppShell > RequireCreatorPlatformAccess |
| CURRENT_COMPONENT | src/pages/creator/marketplace/creator-marketplace-page.tsx |
| CURRENT_SEMANTICS | Dormant legacy marketplace |
| TARGET_C03_DISPOSITION | Compatibility redirect to /creator/campaigns/opportunities; no legacy GET |

### 5

| Field | Value |
|---|---|
| CURRENT_ROUTE | /creator/marketplace/:campaignId |
| CURRENT_GUARD | RequireAuth > AppShell > RequireCreatorPlatformAccess |
| CURRENT_COMPONENT | src/pages/creator/marketplace/creator-campaign-detail-page.tsx |
| CURRENT_SEMANTICS | Legacy detail, match/stock/boolean Apply |
| TARGET_C03_DISPOSITION | Canonical-ID compatibility redirect outside IG pre-gate; canonical detail is Stage B route |

### 6

| Field | Value |
|---|---|
| CURRENT_ROUTE | /creator/campaigns |
| CURRENT_GUARD | RequireAuth > AppShell > RequireCreatorPlatformAccess |
| CURRENT_COMPONENT | src/pages/creator/campaigns/creator-campaigns-command-center-page.tsx |
| CURRENT_SEMANTICS | Command Center active production and pending Collaboration pipeline |
| TARGET_C03_DISPOSITION | Campaigns default Opportunities; retain nav identity, remove only C03 platform gate |

### 7

| Field | Value |
|---|---|
| CURRENT_ROUTE | /creator/campaigns/history |
| CURRENT_GUARD | RequireAuth > AppShell > RequireCreatorPlatformAccess |
| CURRENT_COMPONENT | src/pages/creator/campaigns/creator-campaigns-history-page.tsx |
| CURRENT_SEMANTICS | Closed Collaborations and payout/history metrics |
| TARGET_C03_DISPOSITION | Navigation alias to My Applications; do not convert Collaboration IDs/data into Applications. C04 remains owner of old execution records |

### 8

| Field | Value |
|---|---|
| CURRENT_ROUTE | /creator/collaborations |
| CURRENT_GUARD | RequireAuth > AppShell > RequireCreatorPlatformAccess > CollaborationRouteGuard CREATOR |
| CURRENT_COMPONENT | src/pages/creator/collaborations/creator-collaborations-page.tsx |
| CURRENT_SEMANTICS | Existing C04 workspace selected by thread query |
| TARGET_C03_DISPOSITION | Retain exact C04 destination and guard, remove current-Instagram entry gate for accepted history/link |

### 9

| Field | Value |
|---|---|
| CURRENT_ROUTE | Creator notifications: no current route |
| CURRENT_GUARD | N/A; inert AppHeader bell |
| CURRENT_COMPONENT | src/layouts/app-shell/AppHeader.tsx |
| CURRENT_SEMANTICS | No Creator inbox/read/count integration |
| TARGET_C03_DISPOSITION | Bounded panel within existing header; current C05 authority, no IG guard |

### 10

| Field | Value |
|---|---|
| CURRENT_ROUTE | /brand/:slug |
| CURRENT_GUARD | Guest layout; no auth |
| CURRENT_COMPONENT | src/pages/public/brand/public-brand-landing-page.tsx |
| CURRENT_SEMANTICS | Public Brand landing with marketplace navigation helper |
| TARGET_C03_DISPOSITION | Preserve Brand surface; reconcile C03-linked browsing/return links only, never invent public enumeration |

### 11

| Field | Value |
|---|---|
| CURRENT_ROUTE | /creator/settings/instagram |
| CURRENT_GUARD | RequireAuth > AppShell > C05 Settings capability guard (outside platform gate) |
| CURRENT_COMPONENT | src/features/settings/utils/creator-instagram-settings-state.ts |
| CURRENT_SEMANTICS | C05 six-state same-identity recovery |
| TARGET_C03_DISPOSITION | Reuse as authorized recovery destination; Assistant cannot read/administer Settings |

## C03_CURRENT_FRONTEND_REUSE_AUDIT_V1

### src/features/creator-campaigns/components/CampaignApplicationWizard.tsx

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | Stock selection, unrelated Product/Brief defaults and Terms & escrow lock rejected |
| VISUAL_REUSE_VALUE | Step header, choice cards, review/footer |
| INTERACTION_REUSE_VALUE | Back/next structure; no auto-submit |
| RESPONSIVE_REUSE_VALUE | Existing grids/stack/footer geometry; reconcile tablet/390/375 and safe area |
| ACCESSIBILITY_REUSE_VALUE | Dialog role exists; missing complete focus trap/Escape/return |
| P4_EXPECTED_ACTION | Canonical dependent selection; optional one-pair skip; explicit Review/Submit; strict body and idempotency; remove legal/stock |

### src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | Legacy unlocked/invite booleans, already_applied, match, compensation and raw invite flow rejected |
| VISUAL_REUSE_VALUE | Hero, metadata, commercial card, section hierarchy |
| INTERACTION_REUSE_VALUE | Open detail/review structure |
| RESPONSIVE_REUSE_VALUE | Existing grids/stack/footer geometry; reconcile tablet/390/375 and safe area |
| ACCESSIBILITY_REUSE_VALUE | Useful structure only; native semantics/focus/live announcements still required |
| P4_EXPECTED_ACTION | Discriminated safe DTO; authorized-only commercial; canApply independent from read; safe continuation exchange |

### src/features/creator-campaigns/components/MarketplaceDiscovery.tsx

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/features/creator-campaigns/components/MarketplaceDiscovery.tsx |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | Marketplace matching/filter/teaser semantics rejected |
| VISUAL_REUSE_VALUE | Card grid and empty-space hierarchy |
| INTERACTION_REUSE_VALUE | Explicit card action retained after semantic cleanup |
| RESPONSIVE_REUSE_VALUE | Existing grids/stack/footer geometry; reconcile tablet/390/375 and safe area |
| ACCESSIBILITY_REUSE_VALUE | Remove nested Link/Button interactive structure |
| P4_EXPECTED_ACTION | Only scoped authorized collection; backend ID order, cursor; Campaigns/Opportunities labels |

### src/features/creator-campaigns/components/MarketplaceFilterDrawer.tsx

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/features/creator-campaigns/components/MarketplaceFilterDrawer.tsx |
| CLASSIFICATION | LEGACY_REFERENCE_ONLY |
| SEMANTIC_COMPATIBILITY | No matching/ranking/filter contract in C03 P1 |
| VISUAL_REUSE_VALUE | Drawer layout only |
| INTERACTION_REUSE_VALUE | No live filter behavior reused |
| RESPONSIVE_REUSE_VALUE | Existing grids/stack/footer geometry; reconcile tablet/390/375 and safe area |
| ACCESSIBILITY_REUSE_VALUE | Labelled native fields useful; chip semantics need work |
| P4_EXPECTED_ACTION | Do not expose legacy filter controls or query parameters in C03 |

### src/features/creator-campaigns/components/CommandCenterWorkspace.tsx

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/features/creator-campaigns/components/CommandCenterWorkspace.tsx |
| CLASSIFICATION | PARTIAL |
| SEMANTIC_COMPATIBILITY | Production/pending Collaboration pipeline and velocity alerts are not Applications |
| VISUAL_REUSE_VALUE | Header, row sections, action placement |
| INTERACTION_REUSE_VALUE | Only read navigation shape |
| RESPONSIVE_REUSE_VALUE | Existing grids/stack/footer geometry; reconcile tablet/390/375 and safe area |
| ACCESSIBILITY_REUSE_VALUE | Useful structure only; native semantics/focus/live announcements still required |
| P4_EXPECTED_ACTION | Recompose Campaigns Opportunities/My Applications, leave C04 workflows owned by C04 |

### src/features/creator-campaigns/components/HistoryArchiveWorkspace.tsx

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/features/creator-campaigns/components/HistoryArchiveWorkspace.tsx |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | Closed-Collaboration archive/payouts are not immutable Applications |
| VISUAL_REUSE_VALUE | Table-to-mobile-card layout |
| INTERACTION_REUSE_VALUE | Per-row navigation and pagination placement |
| RESPONSIVE_REUSE_VALUE | Existing grids/stack/footer geometry; reconcile tablet/390/375 and safe area |
| ACCESSIBILITY_REUSE_VALUE | Status labels and named row links required |
| P4_EXPECTED_ACTION | Canonical cursor history per Application; no campaign-wide collapse or payout stats |

### src/features/creator-campaigns/components/CrossSellTray.tsx

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/features/creator-campaigns/components/CrossSellTray.tsx |
| CLASSIFICATION | LEGACY_REFERENCE_ONLY |
| SEMANTIC_COMPATIBILITY | Alternative marketplace recommendation tray outside contract |
| VISUAL_REUSE_VALUE | Card spacing reference only |
| INTERACTION_REUSE_VALUE | None for P4 |
| RESPONSIVE_REUSE_VALUE | No need to port |
| ACCESSIBILITY_REUSE_VALUE | Useful structure only; native semantics/focus/live announcements still required |
| P4_EXPECTED_ACTION | Do not fetch or render public alternatives |

### src/features/creator-campaigns/components/OptionalMedia.tsx

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/features/creator-campaigns/components/OptionalMedia.tsx |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | No-image pattern compatible; no inventory meaning |
| VISUAL_REUSE_VALUE | Media frame useful |
| INTERACTION_REUSE_VALUE | N/A |
| RESPONSIVE_REUSE_VALUE | Preserve aspect ratio, object-fit and no-image size |
| ACCESSIBILITY_REUSE_VALUE | Deliberate alt text; placeholder decorative; broken-image fallback missing |
| P4_EXPECTED_ACTION | Add bounded error fallback; do not stretch Brand logo as hero |

### src/features/creator-campaigns/api/creator-campaigns-client.ts

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/features/creator-campaigns/api/creator-campaigns-client.ts |
| CLASSIFICATION | REPLACE_ONLY_IF_JUSTIFIED |
| SEMANTIC_COMPATIBILITY | Old routes/DTOs/claim and error shape incompatible |
| VISUAL_REUSE_VALUE | N/A |
| INTERACTION_REUSE_VALUE | Shared authenticatedFetch transport can remain |
| RESPONSIVE_REUSE_VALUE | N/A |
| ACCESSIBILITY_REUSE_VALUE | Preserve structured error codes for accessible recovery |
| P4_EXPECTED_ACTION | Replace C03 endpoint/schema adapters only; do not rewrite shared transport |

### src/features/creator-campaigns/api/public-marketplace-client.ts

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/features/creator-campaigns/api/public-marketplace-client.ts |
| CLASSIFICATION | REPLACE_ONLY_IF_JUSTIFIED |
| SEMANTIC_COMPATIBILITY | Old routes/DTOs/claim and error shape incompatible |
| VISUAL_REUSE_VALUE | N/A |
| INTERACTION_REUSE_VALUE | Shared authenticatedFetch transport can remain |
| RESPONSIVE_REUSE_VALUE | N/A |
| ACCESSIBILITY_REUSE_VALUE | Preserve structured error codes for accessible recovery |
| P4_EXPECTED_ACTION | Replace C03 endpoint/schema adapters only; do not rewrite shared transport |

### src/features/creator-campaigns/contracts/creator-campaigns.contracts.ts

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/features/creator-campaigns/contracts/creator-campaigns.contracts.ts |
| CLASSIFICATION | REPLACE_ONLY_IF_JUSTIFIED |
| SEMANTIC_COMPATIBILITY | Legacy booleans, product inventory, raw invitation fields and old history incompatible |
| VISUAL_REUSE_VALUE | N/A |
| INTERACTION_REUSE_VALUE | N/A |
| RESPONSIVE_REUSE_VALUE | Single semantic model |
| ACCESSIBILITY_REUSE_VALUE | Discriminated state enables truthful controls |
| P4_EXPECTED_ACTION | Model frozen schemaVersion1 projections and strict commands; no fabricated fields |

### src/features/creator-campaigns/hooks/use-creator-marketplace.ts

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/features/creator-campaigns/hooks/use-creator-marketplace.ts |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | Old fetch/state assumptions stale |
| VISUAL_REUSE_VALUE | Loading/error state composition only |
| INTERACTION_REUSE_VALUE | Explicit refresh callback structure |
| RESPONSIVE_REUSE_VALUE | One source of state across widths |
| ACCESSIBILITY_REUSE_VALUE | Bounded status/error announcements required |
| P4_EXPECTED_ACTION | Canonical APIs/cursors, validate shape, abort/ignore late responses by actor+workspace; clear on scope loss |

### src/features/creator-campaigns/hooks/use-creator-campaign-detail.ts

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/features/creator-campaigns/hooks/use-creator-campaign-detail.ts |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | Old fetch/state assumptions stale |
| VISUAL_REUSE_VALUE | Loading/error state composition only |
| INTERACTION_REUSE_VALUE | Explicit refresh callback structure |
| RESPONSIVE_REUSE_VALUE | One source of state across widths |
| ACCESSIBILITY_REUSE_VALUE | Bounded status/error announcements required |
| P4_EXPECTED_ACTION | Canonical APIs/cursors, validate shape, abort/ignore late responses by actor+workspace; clear on scope loss |

### src/features/creator-campaigns/hooks/use-creator-campaigns-workspace.ts

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/features/creator-campaigns/hooks/use-creator-campaigns-workspace.ts |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | Old fetch/state assumptions stale |
| VISUAL_REUSE_VALUE | Loading/error state composition only |
| INTERACTION_REUSE_VALUE | Explicit refresh callback structure |
| RESPONSIVE_REUSE_VALUE | One source of state across widths |
| ACCESSIBILITY_REUSE_VALUE | Bounded status/error announcements required |
| P4_EXPECTED_ACTION | Canonical APIs/cursors, validate shape, abort/ignore late responses by actor+workspace; clear on scope loss |

### src/features/creator-campaigns/creator-campaigns.css

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/features/creator-campaigns/creator-campaigns.css |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | Style names are not Product authority |
| VISUAL_REUSE_VALUE | Hero/card/grid/table/mobile row geometry |
| INTERACTION_REUSE_VALUE | Footer/overlay layout |
| RESPONSIVE_REUSE_VALUE | Existing grids/stack/footer geometry; reconcile tablet/390/375 and safe area |
| ACCESSIBILITY_REUSE_VALUE | Existing mobile padding16 is not proof of frozen 24px overlay padding/safe-area compliance |
| P4_EXPECTED_ACTION | Retain useful selectors locally; remove unused ranking/filter presentation; conform Aurora v5 overlays |

### src/features/creator-campaigns/utils/format-campaign-display.ts

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/features/creator-campaigns/utils/format-campaign-display.ts |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | Formatting utility reusable after field semantics correction |
| VISUAL_REUSE_VALUE | Readable metadata |
| INTERACTION_REUSE_VALUE | N/A |
| RESPONSIVE_REUSE_VALUE | Existing grids/stack/footer geometry; reconcile tablet/390/375 and safe area |
| ACCESSIBILITY_REUSE_VALUE | Useful structure only; native semantics/focus/live announcements still required |
| P4_EXPECTED_ACTION | Use exact decimal-string offer and INR/USD currency; no hardcoded INR/integer rounding; null never zero/deadline fallback |

### src/features/creator-campaigns/utils/display-value.ts

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/features/creator-campaigns/utils/display-value.ts |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | Formatting utility reusable after field semantics correction |
| VISUAL_REUSE_VALUE | Readable metadata |
| INTERACTION_REUSE_VALUE | N/A |
| RESPONSIVE_REUSE_VALUE | Existing grids/stack/footer geometry; reconcile tablet/390/375 and safe area |
| ACCESSIBILITY_REUSE_VALUE | Useful structure only; native semantics/focus/live announcements still required |
| P4_EXPECTED_ACTION | Use exact decimal-string offer and INR/USD currency; no hardcoded INR/integer rounding; null never zero/deadline fallback |

### src/pages/public/marketplace/public-marketplace-page.tsx

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/pages/public/marketplace/public-marketplace-page.tsx |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | Public search/filter Campaign enumeration |
| VISUAL_REUSE_VALUE | Thin route composition |
| INTERACTION_REUSE_VALUE | Route params and feature composition |
| RESPONSIVE_REUSE_VALUE | Existing shell |
| ACCESSIBILITY_REUSE_VALUE | Useful structure only; native semantics/focus/live announcements still required |
| P4_EXPECTED_ACTION | Retire browsing for C03; neutral unavailable/entry compatibility only, no API enumeration or new Marketplace IA |

### src/pages/public/marketplace/public-campaign-detail-page.tsx

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/pages/public/marketplace/public-campaign-detail-page.tsx |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | Legacy public detail DTO |
| VISUAL_REUSE_VALUE | Thin route composition |
| INTERACTION_REUSE_VALUE | Route params and feature composition |
| RESPONSIVE_REUSE_VALUE | Existing shell |
| ACCESSIBILITY_REUSE_VALUE | Useful structure only; native semantics/focus/live announcements still required |
| P4_EXPECTED_ACTION | Compatibility canonical Campaign-ID redirect to Stage B /campaigns/:campaignId; sanitize query, no legacy payload hydration |

### src/pages/public/marketplace/public-invite-landing-page.tsx

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/pages/public/marketplace/public-invite-landing-page.tsx |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | Raw token in path; invitation lookup/claim |
| VISUAL_REUSE_VALUE | Thin route composition |
| INTERACTION_REUSE_VALUE | Route params and feature composition |
| RESPONSIVE_REUSE_VALUE | Existing shell |
| ACCESSIBILITY_REUSE_VALUE | Useful structure only; native semantics/focus/live announcements still required |
| P4_EXPECTED_ACTION | REMOVE_IN_P4 raw-path flow; cannot safely convert already exposed credential. Generic fresh secure-link recovery; do not carry token to new URL/storage |

### src/pages/creator/marketplace/creator-marketplace-page.tsx

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/pages/creator/marketplace/creator-marketplace-page.tsx |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | Dormant legacy marketplace |
| VISUAL_REUSE_VALUE | Thin route composition |
| INTERACTION_REUSE_VALUE | Route params and feature composition |
| RESPONSIVE_REUSE_VALUE | Existing shell |
| ACCESSIBILITY_REUSE_VALUE | Useful structure only; native semantics/focus/live announcements still required |
| P4_EXPECTED_ACTION | Compatibility redirect to /creator/campaigns/opportunities; no legacy GET |

### src/pages/creator/marketplace/creator-campaign-detail-page.tsx

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/pages/creator/marketplace/creator-campaign-detail-page.tsx |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | Legacy detail, match/stock/boolean Apply |
| VISUAL_REUSE_VALUE | Thin route composition |
| INTERACTION_REUSE_VALUE | Route params and feature composition |
| RESPONSIVE_REUSE_VALUE | Existing shell |
| ACCESSIBILITY_REUSE_VALUE | Useful structure only; native semantics/focus/live announcements still required |
| P4_EXPECTED_ACTION | Canonical-ID compatibility redirect outside IG pre-gate; canonical detail is Stage B route |

### src/pages/creator/campaigns/creator-campaigns-command-center-page.tsx

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/pages/creator/campaigns/creator-campaigns-command-center-page.tsx |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | Command Center active production and pending Collaboration pipeline |
| VISUAL_REUSE_VALUE | Thin route composition |
| INTERACTION_REUSE_VALUE | Route params and feature composition |
| RESPONSIVE_REUSE_VALUE | Existing shell |
| ACCESSIBILITY_REUSE_VALUE | Useful structure only; native semantics/focus/live announcements still required |
| P4_EXPECTED_ACTION | Campaigns default Opportunities; retain nav identity, remove only C03 platform gate |

### src/pages/creator/campaigns/creator-campaigns-history-page.tsx

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/pages/creator/campaigns/creator-campaigns-history-page.tsx |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | Closed Collaborations and payout/history metrics |
| VISUAL_REUSE_VALUE | Thin route composition |
| INTERACTION_REUSE_VALUE | Route params and feature composition |
| RESPONSIVE_REUSE_VALUE | Existing shell |
| ACCESSIBILITY_REUSE_VALUE | Useful structure only; native semantics/focus/live announcements still required |
| P4_EXPECTED_ACTION | Navigation alias to My Applications; do not convert Collaboration IDs/data into Applications. C04 remains owner of old execution records |

### src/pages/creator/collaborations/creator-collaborations-page.tsx

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/pages/creator/collaborations/creator-collaborations-page.tsx |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | Existing C04 workspace selected by thread query |
| VISUAL_REUSE_VALUE | Thin route composition |
| INTERACTION_REUSE_VALUE | Route params and feature composition |
| RESPONSIVE_REUSE_VALUE | Existing shell |
| ACCESSIBILITY_REUSE_VALUE | Useful structure only; native semantics/focus/live announcements still required |
| P4_EXPECTED_ACTION | Retain exact C04 destination and guard, remove current-Instagram entry gate for accepted history/link |

### src/pages/public/brand/public-brand-landing-page.tsx

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/pages/public/brand/public-brand-landing-page.tsx |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | Public Brand landing with marketplace navigation helper |
| VISUAL_REUSE_VALUE | Thin route composition |
| INTERACTION_REUSE_VALUE | Route params and feature composition |
| RESPONSIVE_REUSE_VALUE | Existing shell |
| ACCESSIBILITY_REUSE_VALUE | Useful structure only; native semantics/focus/live announcements still required |
| P4_EXPECTED_ACTION | Preserve Brand surface; reconcile C03-linked browsing/return links only, never invent public enumeration |

### src/routes/app-routes.tsx

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/routes/app-routes.tsx |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | C03 routes/returns and guard scope need exact Stage B convergence |
| VISUAL_REUSE_VALUE | Existing route conventions |
| INTERACTION_REUSE_VALUE | Retain allowlist and current auth safety |
| RESPONSIVE_REUSE_VALUE | Same routes at every width |
| ACCESSIBILITY_REUSE_VALUE | Named navigation; route focus on heading |
| P4_EXPECTED_ACTION | Add exact Stage B routes/allowlist; preserve safe-path separator/control/origin checks; canonical safe return not generic fallback loss |

### src/features/auth/constants.ts

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/features/auth/constants.ts |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | C03 routes/returns and guard scope need exact Stage B convergence |
| VISUAL_REUSE_VALUE | Existing route conventions |
| INTERACTION_REUSE_VALUE | Retain allowlist and current auth safety |
| RESPONSIVE_REUSE_VALUE | Same routes at every width |
| ACCESSIBILITY_REUSE_VALUE | Named navigation; route focus on heading |
| P4_EXPECTED_ACTION | Add exact Stage B routes/allowlist; preserve safe-path separator/control/origin checks; canonical safe return not generic fallback loss |

### src/shared/navigation/safe-internal-path.ts

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/shared/navigation/safe-internal-path.ts |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | C03 routes/returns and guard scope need exact Stage B convergence |
| VISUAL_REUSE_VALUE | Existing route conventions |
| INTERACTION_REUSE_VALUE | Retain allowlist and current auth safety |
| RESPONSIVE_REUSE_VALUE | Same routes at every width |
| ACCESSIBILITY_REUSE_VALUE | Named navigation; route focus on heading |
| P4_EXPECTED_ACTION | Add exact Stage B routes/allowlist; preserve safe-path separator/control/origin checks; canonical safe return not generic fallback loss |

### src/features/auth/post-login-redirect.ts

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/features/auth/post-login-redirect.ts |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | C03 routes/returns and guard scope need exact Stage B convergence |
| VISUAL_REUSE_VALUE | Existing route conventions |
| INTERACTION_REUSE_VALUE | Retain allowlist and current auth safety |
| RESPONSIVE_REUSE_VALUE | Same routes at every width |
| ACCESSIBILITY_REUSE_VALUE | Named navigation; route focus on heading |
| P4_EXPECTED_ACTION | Add exact Stage B routes/allowlist; preserve safe-path separator/control/origin checks; canonical safe return not generic fallback loss |

### src/routes/unmatched-route-handler.tsx

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/routes/unmatched-route-handler.tsx |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | C03 routes/returns and guard scope need exact Stage B convergence |
| VISUAL_REUSE_VALUE | Existing route conventions |
| INTERACTION_REUSE_VALUE | Retain allowlist and current auth safety |
| RESPONSIVE_REUSE_VALUE | Same routes at every width |
| ACCESSIBILITY_REUSE_VALUE | Named navigation; route focus on heading |
| P4_EXPECTED_ACTION | Add exact Stage B routes/allowlist; preserve safe-path separator/control/origin checks; canonical safe return not generic fallback loss |

### src/features/creator-onboarding/components/creator-platform-route-guard.tsx

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/features/creator-onboarding/components/creator-platform-route-guard.tsx |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | C01 platform guard valid for its owner; invalid around C03 historical/read recovery |
| VISUAL_REUSE_VALUE | Existing bounded gate visuals |
| INTERACTION_REUSE_VALUE | Keep unrelated C01 behavior |
| RESPONSIVE_REUSE_VALUE | Same decomposition all widths |
| ACCESSIBILITY_REUSE_VALUE | Useful structure only; native semantics/focus/live announcements still required |
| P4_EXPECTED_ACTION | Move C03 routes and historical C04 handoff outside this guard; no global predicate rewrite |

### src/layouts/app-shell/AppShell.tsx

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/layouts/app-shell/AppShell.tsx |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | Campaigns nav compatible; existing four Creator destinations retained |
| VISUAL_REUSE_VALUE | Accepted current shell/chrome |
| INTERACTION_REUSE_VALUE | Native links/aria-current and mobile navigation structure |
| RESPONSIVE_REUSE_VALUE | Existing desktop/sidebar/mobile adaptation |
| ACCESSIBILITY_REUSE_VALUE | Preserve current nav accessibility and test safe-area clearance |
| P4_EXPECTED_ACTION | Bounded active-route/breadcrumb/capability updates; no new shell/nav model |

### src/layouts/app-shell/AppShellLayout.tsx

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/layouts/app-shell/AppShellLayout.tsx |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | Campaigns nav compatible; existing four Creator destinations retained |
| VISUAL_REUSE_VALUE | Accepted current shell/chrome |
| INTERACTION_REUSE_VALUE | Native links/aria-current and mobile navigation structure |
| RESPONSIVE_REUSE_VALUE | Existing desktop/sidebar/mobile adaptation |
| ACCESSIBILITY_REUSE_VALUE | Preserve current nav accessibility and test safe-area clearance |
| P4_EXPECTED_ACTION | Bounded active-route/breadcrumb/capability updates; no new shell/nav model |

### src/layouts/app-shell/AppSidebar.tsx

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/layouts/app-shell/AppSidebar.tsx |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | Campaigns nav compatible; existing four Creator destinations retained |
| VISUAL_REUSE_VALUE | Accepted current shell/chrome |
| INTERACTION_REUSE_VALUE | Native links/aria-current and mobile navigation structure |
| RESPONSIVE_REUSE_VALUE | Existing desktop/sidebar/mobile adaptation |
| ACCESSIBILITY_REUSE_VALUE | Preserve current nav accessibility and test safe-area clearance |
| P4_EXPECTED_ACTION | Bounded active-route/breadcrumb/capability updates; no new shell/nav model |

### src/layouts/app-shell/sidebar-items.ts

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/layouts/app-shell/sidebar-items.ts |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | Campaigns nav compatible; existing four Creator destinations retained |
| VISUAL_REUSE_VALUE | Accepted current shell/chrome |
| INTERACTION_REUSE_VALUE | Native links/aria-current and mobile navigation structure |
| RESPONSIVE_REUSE_VALUE | Existing desktop/sidebar/mobile adaptation |
| ACCESSIBILITY_REUSE_VALUE | Preserve current nav accessibility and test safe-area clearance |
| P4_EXPECTED_ACTION | Bounded active-route/breadcrumb/capability updates; no new shell/nav model |

### src/layouts/app-shell/bottom-nav-items.ts

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/layouts/app-shell/bottom-nav-items.ts |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | Campaigns nav compatible; existing four Creator destinations retained |
| VISUAL_REUSE_VALUE | Accepted current shell/chrome |
| INTERACTION_REUSE_VALUE | Native links/aria-current and mobile navigation structure |
| RESPONSIVE_REUSE_VALUE | Existing desktop/sidebar/mobile adaptation |
| ACCESSIBILITY_REUSE_VALUE | Preserve current nav accessibility and test safe-area clearance |
| P4_EXPECTED_ACTION | Bounded active-route/breadcrumb/capability updates; no new shell/nav model |

### src/layouts/app-shell/MobileBottomNav.tsx

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/layouts/app-shell/MobileBottomNav.tsx |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | Campaigns nav compatible; existing four Creator destinations retained |
| VISUAL_REUSE_VALUE | Accepted current shell/chrome |
| INTERACTION_REUSE_VALUE | Native links/aria-current and mobile navigation structure |
| RESPONSIVE_REUSE_VALUE | Existing desktop/sidebar/mobile adaptation |
| ACCESSIBILITY_REUSE_VALUE | Preserve current nav accessibility and test safe-area clearance |
| P4_EXPECTED_ACTION | Bounded active-route/breadcrumb/capability updates; no new shell/nav model |

### src/layouts/app-shell/MobileNavigation.tsx

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/layouts/app-shell/MobileNavigation.tsx |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | Campaigns nav compatible; existing four Creator destinations retained |
| VISUAL_REUSE_VALUE | Accepted current shell/chrome |
| INTERACTION_REUSE_VALUE | Native links/aria-current and mobile navigation structure |
| RESPONSIVE_REUSE_VALUE | Existing desktop/sidebar/mobile adaptation |
| ACCESSIBILITY_REUSE_VALUE | Preserve current nav accessibility and test safe-area clearance |
| P4_EXPECTED_ACTION | Bounded active-route/breadcrumb/capability updates; no new shell/nav model |

### src/layouts/app-shell/MobileShellNav.tsx

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/layouts/app-shell/MobileShellNav.tsx |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | Campaigns nav compatible; existing four Creator destinations retained |
| VISUAL_REUSE_VALUE | Accepted current shell/chrome |
| INTERACTION_REUSE_VALUE | Native links/aria-current and mobile navigation structure |
| RESPONSIVE_REUSE_VALUE | Existing desktop/sidebar/mobile adaptation |
| ACCESSIBILITY_REUSE_VALUE | Preserve current nav accessibility and test safe-area clearance |
| P4_EXPECTED_ACTION | Bounded active-route/breadcrumb/capability updates; no new shell/nav model |

### src/layouts/app-shell/creator-shell-capabilities.ts

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/layouts/app-shell/creator-shell-capabilities.ts |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | Campaigns nav compatible; existing four Creator destinations retained |
| VISUAL_REUSE_VALUE | Accepted current shell/chrome |
| INTERACTION_REUSE_VALUE | Native links/aria-current and mobile navigation structure |
| RESPONSIVE_REUSE_VALUE | Existing desktop/sidebar/mobile adaptation |
| ACCESSIBILITY_REUSE_VALUE | Preserve current nav accessibility and test safe-area clearance |
| P4_EXPECTED_ACTION | Bounded active-route/breadcrumb/capability updates; no new shell/nav model |

### src/layouts/app-shell/app-shell.css

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/layouts/app-shell/app-shell.css |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | Campaigns nav compatible; existing four Creator destinations retained |
| VISUAL_REUSE_VALUE | Accepted current shell/chrome |
| INTERACTION_REUSE_VALUE | Native links/aria-current and mobile navigation structure |
| RESPONSIVE_REUSE_VALUE | Existing desktop/sidebar/mobile adaptation |
| ACCESSIBILITY_REUSE_VALUE | Preserve current nav accessibility and test safe-area clearance |
| P4_EXPECTED_ACTION | Bounded active-route/breadcrumb/capability updates; no new shell/nav model |

### src/layouts/app-shell/AppHeader.tsx

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/layouts/app-shell/AppHeader.tsx |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | Existing bell has no inbox integration |
| VISUAL_REUSE_VALUE | Header/icon entry compatible |
| INTERACTION_REUSE_VALUE | Wire bounded panel to existing bell |
| RESPONSIVE_REUSE_VALUE | Header then mobile sheet |
| ACCESSIBILITY_REUSE_VALUE | Accessible name, aria-expanded/controls, focus return and count wording |
| P4_EXPECTED_ACTION | BOUNDED_MISSING_NOTIFICATION_PRESENTATION; C03 events/read/count only |

### src/shared/creator/creator-workspace-actor.contract.ts

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/shared/creator/creator-workspace-actor.contract.ts |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | Current action union lacks all three accepted C03 actions |
| VISUAL_REUSE_VALUE | N/A |
| INTERACTION_REUSE_VALUE | Preserve current actor/Owner-subject separation |
| RESPONSIVE_REUSE_VALUE | N/A |
| ACCESSIBILITY_REUSE_VALUE | Capability errors must be meaningful |
| P4_EXPECTED_ACTION | Add CAMPAIGN_OPPORTUNITY_VIEW, CAMPAIGN_APPLICATION_APPLY, CAMPAIGN_APPLICATION_WITHDRAW_PENDING from accepted backend |

### src/shared/creator/creator-workspace-actor-mapper.ts

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/shared/creator/creator-workspace-actor-mapper.ts |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | every(isActorAction) rejects whole context containing new backend actions |
| VISUAL_REUSE_VALUE | N/A |
| INTERACTION_REUSE_VALUE | Fail-closed shape/identity validation valuable |
| RESPONSIVE_REUSE_VALUE | N/A |
| ACCESSIBILITY_REUSE_VALUE | Do not hide context failure as no Opportunities |
| P4_EXPECTED_ACTION | Update known action contract; keep unknown-action and identity validation |

### src/shared/creator/creator-workspace-actor-context.tsx

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/shared/creator/creator-workspace-actor-context.tsx |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | Current actor loading/clear-on-user-change pattern compatible |
| VISUAL_REUSE_VALUE | Context states |
| INTERACTION_REUSE_VALUE | Late-response active guard reusable |
| RESPONSIVE_REUSE_VALUE | N/A |
| ACCESSIBILITY_REUSE_VALUE | Useful structure only; native semantics/focus/live announcements still required |
| P4_EXPECTED_ACTION | Use actual provider path from inventory; extend C03 queries to actor+workspace scope and membership invalidation |

### src/shared/api/authenticated-fetch.ts

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/shared/api/authenticated-fetch.ts |
| CLASSIFICATION | REUSE |
| SEMANTIC_COMPATIBILITY | Cookie credentials and one401 refresh preserve request init |
| VISUAL_REUSE_VALUE | N/A |
| INTERACTION_REUSE_VALUE | Same headers/key survive shared retry;403 not disguised |
| RESPONSIVE_REUSE_VALUE | N/A |
| ACCESSIBILITY_REUSE_VALUE | Consumers announce only final error |
| P4_EXPECTED_ACTION | Use directly; do not add second token/refresh stack |

### src/shared/api/parse-api-error.ts

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/shared/api/parse-api-error.ts |
| CLASSIFICATION | REUSE |
| SEMANTIC_COMPATIBILITY | Status/code/nested message preservation fits frozen errors |
| VISUAL_REUSE_VALUE | N/A |
| INTERACTION_REUSE_VALUE | Typed error boundary |
| RESPONSIVE_REUSE_VALUE | N/A |
| ACCESSIBILITY_REUSE_VALUE | Consumers associate domain recovery |
| P4_EXPECTED_ACTION | Use safe domain copy allowlist; no raw provider/database strings |

### src/features/settings/utils/creator-instagram-settings-state.ts

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/features/settings/utils/creator-instagram-settings-state.ts |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | All six lifecycle presentations already exist; C03 recoveryAction remains authoritative |
| VISUAL_REUSE_VALUE | Status/recovery card wording and badge grammar |
| INTERACTION_REUSE_VALUE | Use existing C05 Settings routes when capability permits |
| RESPONSIVE_REUSE_VALUE | Current Settings responsive patterns |
| ACCESSIBILITY_REUSE_VALUE | No assistant inaccessible Settings action |
| P4_EXPECTED_ACTION | Reuse presentation without adopting separate Settings/C01 capability as Opportunity eligibility predicate |

### src/features/creator-onboarding/api/creator-entry-client.ts

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/features/creator-onboarding/api/creator-entry-client.ts |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | Existing issue helper uses old public/marketplace path |
| VISUAL_REUSE_VALUE | N/A |
| INTERACTION_REUSE_VALUE | C01 opaque cookie continuation mechanism retained |
| RESPONSIVE_REUSE_VALUE | N/A |
| ACCESSIBILITY_REUSE_VALUE | Real request pending/error |
| P4_EXPECTED_ACTION | C03 callers use accepted campaign-opportunities POST; fragment memory only; no credential return/storage |

### src/features/collaboration/utils/collaboration-selection.ts

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/features/collaboration/utils/collaboration-selection.ts |
| CLASSIFICATION | REUSE |
| SEMANTIC_COMPATIBILITY | thread query is actual existing C04 selector |
| VISUAL_REUSE_VALUE | N/A |
| INTERACTION_REUSE_VALUE | Exact handoff URL navigation |
| RESPONSIVE_REUSE_VALUE | Existing C04 responsive workspace |
| ACCESSIBILITY_REUSE_VALUE | Name link by Application/Campaign |
| P4_EXPECTED_ACTION | Use ?thread=collaborationId; preserve C04 ownership |

### src/features/collaboration/components/CollaborationRouteGuard.tsx

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/features/collaboration/components/CollaborationRouteGuard.tsx |
| CLASSIFICATION | REUSE |
| SEMANTIC_COMPATIBILITY | Existing role authority separate from route-wide IG guard |
| VISUAL_REUSE_VALUE | Existing route guard |
| INTERACTION_REUSE_VALUE | Retain C04 authority checks |
| RESPONSIVE_REUSE_VALUE | Same all widths |
| ACCESSIBILITY_REUSE_VALUE | Useful structure only; native semantics/focus/live announcements still required |
| P4_EXPECTED_ACTION | No C03 workflow added; only outer IG guard removed from accepted historical entry |

### src/features/uce/campaign-page/CanonicalAssetDetailsDrawer.tsx

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/features/uce/campaign-page/CanonicalAssetDetailsDrawer.tsx |
| CLASSIFICATION | PARTIAL |
| SEMANTIC_COMPATIBILITY | Brand read API and old record shape not Creator DTO |
| VISUAL_REUSE_VALUE | Read-only sectioned drawer |
| INTERACTION_REUSE_VALUE | Open/close/context preservation |
| RESPONSIVE_REUSE_VALUE | SideDrawer transform basis |
| ACCESSIBILITY_REUSE_VALUE | SideDrawer focus mechanics useful |
| P4_EXPECTED_ACTION | Reuse section composition only; feed already authorized C03 or immutable history data, never Brand API |

### src/features/uce/campaign-page/CanonicalBriefDetailsDrawer.tsx

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/features/uce/campaign-page/CanonicalBriefDetailsDrawer.tsx |
| CLASSIFICATION | PARTIAL |
| SEMANTIC_COMPATIBILITY | Brand read API and old record shape not Creator DTO |
| VISUAL_REUSE_VALUE | Read-only sectioned drawer |
| INTERACTION_REUSE_VALUE | Open/close/context preservation |
| RESPONSIVE_REUSE_VALUE | SideDrawer transform basis |
| ACCESSIBILITY_REUSE_VALUE | SideDrawer focus mechanics useful |
| P4_EXPECTED_ACTION | Reuse section composition only; feed already authorized C03 or immutable history data, never Brand API |

### src/design-system/aurora/components/SideDrawer.tsx

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/design-system/aurora/components/SideDrawer.tsx |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | Primitive only; no Product authority |
| VISUAL_REUSE_VALUE | Aurora token/geometry grammar |
| INTERACTION_REUSE_VALUE | Portal, body lock, initial close focus, Tab wrapping, Escape, restore |
| RESPONSIVE_REUSE_VALUE | Conform responsive contract; no blind fixed geometry |
| ACCESSIBILITY_REUSE_VALUE | Add background inertness and mobile safe-area behavior |
| P4_EXPECTED_ACTION | Reuse primitive; bounded hardening as specified, no custom UI stack |

### src/design-system/aurora/components/Tabs.tsx

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/design-system/aurora/components/Tabs.tsx |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | Primitive only; no Product authority |
| VISUAL_REUSE_VALUE | Aurora token/geometry grammar |
| INTERACTION_REUSE_VALUE | Presentational tabs lack full selection/keyboard plumbing |
| RESPONSIVE_REUSE_VALUE | Conform responsive contract; no blind fixed geometry |
| ACCESSIBILITY_REUSE_VALUE | Verify consumer naming/keyboard behavior |
| P4_EXPECTED_ACTION | Reuse primitive; bounded hardening as specified, no custom UI stack |

### src/design-system/aurora/components/SelectionCard.tsx

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/design-system/aurora/components/SelectionCard.tsx |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | Primitive only; no Product authority |
| VISUAL_REUSE_VALUE | Aurora token/geometry grammar |
| INTERACTION_REUSE_VALUE | Button shape; native radio group needed |
| RESPONSIVE_REUSE_VALUE | Conform responsive contract; no blind fixed geometry |
| ACCESSIBILITY_REUSE_VALUE | Verify consumer naming/keyboard behavior |
| P4_EXPECTED_ACTION | Reuse primitive; bounded hardening as specified, no custom UI stack |

### src/design-system/aurora/components/Alert.tsx

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/design-system/aurora/components/Alert.tsx |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | Primitive only; no Product authority |
| VISUAL_REUSE_VALUE | Aurora token/geometry grammar |
| INTERACTION_REUSE_VALUE | Use native semantics as appropriate |
| RESPONSIVE_REUSE_VALUE | Conform responsive contract; no blind fixed geometry |
| ACCESSIBILITY_REUSE_VALUE | Add consumer live-region role |
| P4_EXPECTED_ACTION | Reuse primitive; bounded hardening as specified, no custom UI stack |

### src/design-system/aurora/components/Card.tsx

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/design-system/aurora/components/Card.tsx |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | Primitive only; no Product authority |
| VISUAL_REUSE_VALUE | Aurora token/geometry grammar |
| INTERACTION_REUSE_VALUE | Use native semantics as appropriate |
| RESPONSIVE_REUSE_VALUE | Conform responsive contract; no blind fixed geometry |
| ACCESSIBILITY_REUSE_VALUE | Do not make clickable section substitute for link |
| P4_EXPECTED_ACTION | Reuse primitive; bounded hardening as specified, no custom UI stack |

### src/design-system/aurora/components/Badge.tsx

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/design-system/aurora/components/Badge.tsx |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | Primitive only; no Product authority |
| VISUAL_REUSE_VALUE | Aurora token/geometry grammar |
| INTERACTION_REUSE_VALUE | Use native semantics as appropriate |
| RESPONSIVE_REUSE_VALUE | Conform responsive contract; no blind fixed geometry |
| ACCESSIBILITY_REUSE_VALUE | Textual noninteractive status; no onClick span action |
| P4_EXPECTED_ACTION | Reuse primitive; bounded hardening as specified, no custom UI stack |

### src/design-system/aurora/components/Button.tsx

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/design-system/aurora/components/Button.tsx |
| CLASSIFICATION | REUSE |
| SEMANTIC_COMPATIBILITY | Primitive only; no Product authority |
| VISUAL_REUSE_VALUE | Aurora token/geometry grammar |
| INTERACTION_REUSE_VALUE | Use native semantics as appropriate |
| RESPONSIVE_REUSE_VALUE | Conform responsive contract; no blind fixed geometry |
| ACCESSIBILITY_REUSE_VALUE | Verify consumer naming/keyboard behavior |
| P4_EXPECTED_ACTION | Reuse primitive; bounded hardening as specified, no custom UI stack |

### src/design-system/aurora/components/Toast.tsx

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/design-system/aurora/components/Toast.tsx |
| CLASSIFICATION | REUSE |
| SEMANTIC_COMPATIBILITY | Primitive only; no Product authority |
| VISUAL_REUSE_VALUE | Aurora token/geometry grammar |
| INTERACTION_REUSE_VALUE | Use native semantics as appropriate |
| RESPONSIVE_REUSE_VALUE | Conform responsive contract; no blind fixed geometry |
| ACCESSIBILITY_REUSE_VALUE | Verify consumer naming/keyboard behavior |
| P4_EXPECTED_ACTION | Reuse primitive; bounded hardening as specified, no custom UI stack |

### src/design-system/aurora/components/TextField.tsx

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/design-system/aurora/components/TextField.tsx |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | Primitive only; no Product authority |
| VISUAL_REUSE_VALUE | Aurora token/geometry grammar |
| INTERACTION_REUSE_VALUE | Use native semantics as appropriate |
| RESPONSIVE_REUSE_VALUE | Conform responsive contract; no blind fixed geometry |
| ACCESSIBILITY_REUSE_VALUE | Verify consumer naming/keyboard behavior |
| P4_EXPECTED_ACTION | Reuse primitive; bounded hardening as specified, no custom UI stack |

### src/design-system/aurora/components/SelectField.tsx

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/design-system/aurora/components/SelectField.tsx |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | Primitive only; no Product authority |
| VISUAL_REUSE_VALUE | Aurora token/geometry grammar |
| INTERACTION_REUSE_VALUE | Use native semantics as appropriate |
| RESPONSIVE_REUSE_VALUE | Conform responsive contract; no blind fixed geometry |
| ACCESSIBILITY_REUSE_VALUE | Verify consumer naming/keyboard behavior |
| P4_EXPECTED_ACTION | Reuse primitive; bounded hardening as specified, no custom UI stack |

### src/design-system/aurora/components.css

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/design-system/aurora/components.css |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | Aurora baseline compatible |
| VISUAL_REUSE_VALUE | Shared styling/tokens |
| INTERACTION_REUSE_VALUE | Focus/state baseline |
| RESPONSIVE_REUSE_VALUE | SideDrawer mobile width100% alone is not full sheet/safe-area contract |
| ACCESSIBILITY_REUSE_VALUE | Do not assume all primitive a11y complete |
| P4_EXPECTED_ACTION | Feature composition first; promote shared fix only when justified by repeatable primitive defect |

### src/design-system/aurora/tokens.css

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/design-system/aurora/tokens.css |
| CLASSIFICATION | REUSE |
| SEMANTIC_COMPATIBILITY | Existing tokens remain authority for frontend styling |
| VISUAL_REUSE_VALUE | Color/spacing/type |
| INTERACTION_REUSE_VALUE | N/A |
| RESPONSIVE_REUSE_VALUE | Use available tokens and canonical sizes |
| ACCESSIBILITY_REUSE_VALUE | Check contrast and focus in P4 acceptance |
| P4_EXPECTED_ACTION | No new palette/framework |

### src/layouts/marketplace-guest/MarketplaceGuestLayout.tsx

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/layouts/marketplace-guest/MarketplaceGuestLayout.tsx |
| CLASSIFICATION | REUSE_WITH_RECONCILIATION |
| SEMANTIC_COMPATIBILITY | Current Creator Marketplace brand/link and full location.search in login state incompatible |
| VISUAL_REUSE_VALUE | Simple neutral header/main shell reusable |
| INTERACTION_REUSE_VALUE | Keep Sign in link with canonical safe return only |
| RESPONSIVE_REUSE_VALUE | Current guest shell stack |
| ACCESSIBILITY_REUSE_VALUE | Remove nested Link/Button; native named sign-in link |
| P4_EXPECTED_ACTION | Use neutral Campaign entry chrome; never copy invite query into router state; no public browsing link |

### src/features/collaboration/components/CollaborationEmptyWorkspace.tsx

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/features/collaboration/components/CollaborationEmptyWorkspace.tsx |
| CLASSIFICATION | PARTIAL |
| SEMANTIC_COMPATIBILITY | C04 copy is not C03 copy |
| VISUAL_REUSE_VALUE | Icon/title/body loading/error/empty composition |
| INTERACTION_REUSE_VALUE | Read-only scoped feedback |
| RESPONSIVE_REUSE_VALUE | Existing responsive empty surface |
| ACCESSIBILITY_REUSE_VALUE | Decorative icon; add appropriate status live region for request changes |
| P4_EXPECTED_ACTION | Reuse section hierarchy with C03 copy and explicit retry where appropriate; do not import C04 business states |

### src/features/creator-uce/components/CreatorCampaignsPanel.tsx

| Field | Value |
|---|---|
| REPOSITORY_PATH | src/features/creator-uce/components/CreatorCampaignsPanel.tsx |
| CLASSIFICATION | LEGACY_REFERENCE_ONLY |
| SEMANTIC_COMPATIBILITY | First brief + stocked product + old Apply + already_applied incompatible |
| VISUAL_REUSE_VALUE | Simple cards only |
| INTERACTION_REUSE_VALUE | No command reuse |
| RESPONSIVE_REUSE_VALUE | Simple stack |
| ACCESSIBILITY_REUSE_VALUE | No explicit Review; cannot reuse behavior |
| P4_EXPECTED_ACTION | Retire any C03 reachable shortcut to old /creator-uce apply; preserve unrelated UCE owner behavior |

### Creator notification list/count/read feature

| Field | Value |
|---|---|
| REPOSITORY_PATH | Creator notification list/count/read feature |
| CLASSIFICATION | NOT_FOUND |
| SEMANTIC_COMPATIBILITY | No current Creator inbox; Brand notification settings are preferences |
| VISUAL_REUSE_VALUE | Existing bell + SideDrawer + Card/Badge cover bounded presentation |
| INTERACTION_REUSE_VALUE | Need list/read/count integration |
| RESPONSIVE_REUSE_VALUE | Mobile sheet fits existing primitive family |
| ACCESSIBILITY_REUSE_VALUE | Named dialog/list/read buttons and status required |
| P4_EXPECTED_ACTION | Build only bounded missing presentation after P4 authorization |

### Dedicated shared Skeleton/EmptyState component

| Field | Value |
|---|---|
| REPOSITORY_PATH | Dedicated shared Skeleton/EmptyState component |
| CLASSIFICATION | NOT_FOUND |
| SEMANTIC_COMPATIBILITY | Existing text loading/Alert/Card patterns available |
| VISUAL_REUSE_VALUE | Aurora v5 skeleton and empty-state specifications plus Phase7 board |
| INTERACTION_REUSE_VALUE | No fabricated technical progress |
| RESPONSIVE_REUSE_VALUE | Same structural placeholder layout |
| ACCESSIBILITY_REUSE_VALUE | aria-busy plus one named loading status; skeleton decorative |
| P4_EXPECTED_ACTION | Compose bounded feature loading/empty states, not a new global framework |

## C03_ACCEPTED_REFERENCE_REUSE_AUDIT_V1

### REF-PH7-MOBILE

| Field | Value |
|---|---|
| REFERENCE_ID | REF-PH7-MOBILE |
| REFERENCE_NAME | mobile-campaign-shell-steady-state.html |
| REPOSITORY_PATH | dummy_tcs:frontend/campaign/stitch/references/phase-7/html/mobile-campaign-shell-steady-state.html |
| COMMIT_OR_ACCEPTED_ID | 706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb / Stitch 13292ed16a3542459c3d658ad78daf3c |
| DESKTOP_MOBILE | MOBILE |
| WHAT_VISUAL_GRAMMAR_IS_REUSABLE | Campaign header, vertically sectioned Products/Briefs, card spacing |
| WHAT_PRODUCT_SEMANTICS_ARE_STALE | Brand discovery/outreach/approve/reject, stock/product authority, performance and Copilot not C03 Product semantics |
| TARGET_C03_STATE_FAMILIES | DOS_*; SEL_* |
| CLASSIFICATION | VISUAL_GRAMMAR_ONLY |
| ACCEPTANCE_AND_INSPECTION_EVIDENCE | Registry status APPROVED REFERENCE INPUT; immutable HTML source inspected, not executed or screenshot-rendered in P2. reference-registry.md/README.md define visual-only scope. |

### REF-PH7-DISCOVERY

| Field | Value |
|---|---|
| REFERENCE_ID | REF-PH7-DISCOVERY |
| REFERENCE_NAME | mobile-discovery-workspace.html |
| REPOSITORY_PATH | dummy_tcs:frontend/campaign/stitch/references/phase-7/html/mobile-discovery-workspace.html |
| COMMIT_OR_ACCEPTED_ID | 706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb / Stitch c28a8a6958cb4beb8904bacdc00c9a11 |
| DESKTOP_MOBILE | MOBILE |
| WHAT_VISUAL_GRAMMAR_IS_REUSABLE | Collapsed/expanded card density only |
| WHAT_PRODUCT_SEMANTICS_ARE_STALE | Brand discovery/outreach/approve/reject, stock/product authority, performance and Copilot not C03 Product semantics |
| TARGET_C03_STATE_FAMILIES | OC_* |
| CLASSIFICATION | VISUAL_GRAMMAR_ONLY |
| ACCEPTANCE_AND_INSPECTION_EVIDENCE | Registry status APPROVED REFERENCE INPUT; immutable HTML source inspected, not executed or screenshot-rendered in P2. reference-registry.md/README.md define visual-only scope. |

### REF-PH7-APPLICANTS

| Field | Value |
|---|---|
| REFERENCE_ID | REF-PH7-APPLICANTS |
| REFERENCE_NAME | mobile-applicants-workspace.html |
| REPOSITORY_PATH | dummy_tcs:frontend/campaign/stitch/references/phase-7/html/mobile-applicants-workspace.html |
| COMMIT_OR_ACCEPTED_ID | 706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb / Stitch fc57151086b147508c91ee4964d48854 |
| DESKTOP_MOBILE | MOBILE |
| WHAT_VISUAL_GRAMMAR_IS_REUSABLE | Independent row/card status/action placement |
| WHAT_PRODUCT_SEMANTICS_ARE_STALE | Brand discovery/outreach/approve/reject, stock/product authority, performance and Copilot not C03 Product semantics |
| TARGET_C03_STATE_FAMILIES | HIST_*; ROLE_* |
| CLASSIFICATION | VISUAL_GRAMMAR_ONLY |
| ACCEPTANCE_AND_INSPECTION_EVIDENCE | Registry status APPROVED REFERENCE INPUT; immutable HTML source inspected, not executed or screenshot-rendered in P2. reference-registry.md/README.md define visual-only scope. |

### REF-PH7-DESKTOP

| Field | Value |
|---|---|
| REFERENCE_ID | REF-PH7-DESKTOP |
| REFERENCE_NAME | desktop-campaign-steady-state.html |
| REPOSITORY_PATH | dummy_tcs:frontend/campaign/stitch/references/phase-7/html/desktop-campaign-steady-state.html |
| COMMIT_OR_ACCEPTED_ID | 706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb / Stitch 29218ca51f874178a29fea676bba6bbb |
| DESKTOP_MOBILE | DESKTOP |
| WHAT_VISUAL_GRAMMAR_IS_REUSABLE | Campaign identity and Products/Briefs section hierarchy |
| WHAT_PRODUCT_SEMANTICS_ARE_STALE | Brand discovery/outreach/approve/reject, stock/product authority, performance and Copilot not C03 Product semantics |
| TARGET_C03_STATE_FAMILIES | DOS_*; DRAW_* |
| CLASSIFICATION | VISUAL_GRAMMAR_ONLY |
| ACCEPTANCE_AND_INSPECTION_EVIDENCE | Registry status APPROVED REFERENCE INPUT; immutable HTML source inspected, not executed or screenshot-rendered in P2. reference-registry.md/README.md define visual-only scope. |

### REF-PH7-LIFECYCLE

| Field | Value |
|---|---|
| REFERENCE_ID | REF-PH7-LIFECYCLE |
| REFERENCE_NAME | campaign-lifecycle-state-board.html |
| REPOSITORY_PATH | dummy_tcs:frontend/campaign/stitch/references/phase-7/html/campaign-lifecycle-state-board.html |
| COMMIT_OR_ACCEPTED_ID | 706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb / Stitch 9274c522184f4736be193c067fc8a060 |
| DESKTOP_MOBILE | DESKTOP/STATE BOARD |
| WHAT_VISUAL_GRAMMAR_IS_REUSABLE | Explicit lifecycle notices and bounded actions |
| WHAT_PRODUCT_SEMANTICS_ARE_STALE | Brand discovery/outreach/approve/reject, stock/product authority, performance and Copilot not C03 Product semantics |
| TARGET_C03_STATE_FAMILIES | DOS_* |
| CLASSIFICATION | VISUAL_GRAMMAR_ONLY |
| ACCEPTANCE_AND_INSPECTION_EVIDENCE | Registry status APPROVED REFERENCE INPUT; immutable HTML source inspected, not executed or screenshot-rendered in P2. reference-registry.md/README.md define visual-only scope. |

### REF-PH7-LOCAL

| Field | Value |
|---|---|
| REFERENCE_ID | REF-PH7-LOCAL |
| REFERENCE_NAME | campaign-local-state-board.html |
| REPOSITORY_PATH | dummy_tcs:frontend/campaign/stitch/references/phase-7/html/campaign-local-state-board.html |
| COMMIT_OR_ACCEPTED_ID | 706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb / Stitch 844f6737c99b450082e03ac4f16964b3 |
| DESKTOP_MOBILE | STATE BOARD |
| WHAT_VISUAL_GRAMMAR_IS_REUSABLE | Empty/error/retry cards and local section feedback |
| WHAT_PRODUCT_SEMANTICS_ARE_STALE | Brand discovery/outreach/approve/reject, stock/product authority, performance and Copilot not C03 Product semantics |
| TARGET_C03_STATE_FAMILIES | OC_EMPTY; HIST_EMPTY; UTIL_* |
| CLASSIFICATION | VISUAL_GRAMMAR_ONLY |
| ACCEPTANCE_AND_INSPECTION_EVIDENCE | Registry status APPROVED REFERENCE INPUT; immutable HTML source inspected, not executed or screenshot-rendered in P2. reference-registry.md/README.md define visual-only scope. |

### REF-C04-DRAWER

| Field | Value |
|---|---|
| REFERENCE_ID | REF-C04-DRAWER |
| REFERENCE_NAME | G1 Creator Brand context drawer |
| REPOSITORY_PATH | frontend:docs/collaboration/phase-g/g2-visual-observations/03_creator_brand_context_drawer.png |
| COMMIT_OR_ACCEPTED_ID | 323658d4b147b95b5629ff8d91fa90b8fe9077e4; Phase G documentation tip 9eab0803bf0ce68453653d0dba48e3ae436169f7 |
| DESKTOP_MOBILE | DESKTOP |
| WHAT_VISUAL_GRAMMAR_IS_REUSABLE | Read-only labeled Brand/Campaign/Asset/Brief context drawer |
| WHAT_PRODUCT_SEMANTICS_ARE_STALE | C04 execution authority and current funding behavior not imported |
| TARGET_C03_STATE_FAMILIES | DRAW_*; HANDOFF_* |
| CLASSIFICATION | PARTIALLY_REUSABLE |
| ACCEPTANCE_AND_INSPECTION_EVIDENCE | PNG viewed; README identifies accepted G1 runtime evidence; G2 acceptance is documentation-only, not new visual/product authority. |

### REF-C04-MOBILE

| Field | Value |
|---|---|
| REFERENCE_ID | REF-C04-MOBILE |
| REFERENCE_NAME | G1 Creator mobile inbox |
| REPOSITORY_PATH | frontend:docs/collaboration/phase-g/g2-visual-observations/04_creator_mobile_inbox.png |
| COMMIT_OR_ACCEPTED_ID | 323658d4b147b95b5629ff8d91fa90b8fe9077e4 |
| DESKTOP_MOBILE | MOBILE |
| WHAT_VISUAL_GRAMMAR_IS_REUSABLE | Compact independent cards, textual status, navigation clearance |
| WHAT_PRODUCT_SEMANTICS_ARE_STALE | Old bottom navigation Profile slot differs from current Creator Center; Collaboration status != Application status |
| TARGET_C03_STATE_FAMILIES | HIST_*; NOTIF_* |
| CLASSIFICATION | VISUAL_GRAMMAR_ONLY |
| ACCEPTANCE_AND_INSPECTION_EVIDENCE | PNG viewed; accepted G1 evidence with documented visual debt; do not copy screenshot nav semantics. |

### REF-CURRENT-SHELL

| Field | Value |
|---|---|
| REFERENCE_ID | REF-CURRENT-SHELL |
| REFERENCE_NAME | Canonical frontend shell |
| REPOSITORY_PATH | frontend:src/layouts/app-shell/ |
| COMMIT_OR_ACCEPTED_ID | 323658d4b147b95b5629ff8d91fa90b8fe9077e4 |
| DESKTOP_MOBILE | DESKTOP/MOBILE |
| WHAT_VISUAL_GRAMMAR_IS_REUSABLE | Current shell/sidebar/header/four Creator bottom destinations |
| WHAT_PRODUCT_SEMANTICS_ARE_STALE | Command Center subtitle must reconcile; inert bell not inbox |
| TARGET_C03_STATE_FAMILIES | ALL |
| CLASSIFICATION | RELEVANT_AND_REUSABLE |
| ACCEPTANCE_AND_INSPECTION_EVIDENCE | Exact production source inspected; current frontend authority, not a new P2 rendering acceptance. |

### REF-CURRENT-SETTINGS

| Field | Value |
|---|---|
| REFERENCE_ID | REF-CURRENT-SETTINGS |
| REFERENCE_NAME | Creator Instagram Settings |
| REPOSITORY_PATH | frontend:src/features/settings/utils/creator-instagram-settings-state.ts |
| COMMIT_OR_ACCEPTED_ID | 323658d4b147b95b5629ff8d91fa90b8fe9077e4 |
| DESKTOP_MOBILE | DESKTOP/MOBILE |
| WHAT_VISUAL_GRAMMAR_IS_REUSABLE | Six lifecycle status/recovery presentations |
| WHAT_PRODUCT_SEMANTICS_ARE_STALE | Only C03 backend decides Opportunity access; Assistant lacks Settings actions |
| TARGET_C03_STATE_FAMILIES | IG_* |
| CLASSIFICATION | RELEVANT_AND_REUSABLE |
| ACCEPTANCE_AND_INSPECTION_EVIDENCE | Exact current source inspected; C05 actions remain authoritative. |

### REF-CURRENT-WIZARD

| Field | Value |
|---|---|
| REFERENCE_ID | REF-CURRENT-WIZARD |
| REFERENCE_NAME | Current Campaign Apply wizard port |
| REPOSITORY_PATH | frontend:src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| COMMIT_OR_ACCEPTED_ID | 323658d4b147b95b5629ff8d91fa90b8fe9077e4 |
| DESKTOP_MOBILE | DESKTOP/MOBILE |
| WHAT_VISUAL_GRAMMAR_IS_REUSABLE | Step/review/footer and choice-card structure |
| WHAT_PRODUCT_SEMANTICS_ARE_STALE | Stock/independent Product+Brief/escrow checkbox rejected |
| TARGET_C03_STATE_FAMILIES | SEL_*; APPLY_* |
| CLASSIFICATION | PARTIALLY_REUSABLE |
| ACCEPTANCE_AND_INSPECTION_EVIDENCE | Current port inspected. Original June24 Stitch package not found; no claim that unavailable raw designs were reviewed or accepted. |

### REF-LEGACY-INTAKE

| Field | Value |
|---|---|
| REFERENCE_ID | REF-LEGACY-INTAKE |
| REFERENCE_NAME | June24 Creator Campaigns Stitch intake |
| REPOSITORY_PATH | frontend:docs/ai-collaboration/2026-06-24-creator-campaigns-stitch-intake.md |
| COMMIT_OR_ACCEPTED_ID | 323658d4b147b95b5629ff8d91fa90b8fe9077e4 |
| DESKTOP_MOBILE | DESKTOP/MOBILE |
| WHAT_VISUAL_GRAMMAR_IS_REUSABLE | Documents lineage of nine ported screens |
| WHAT_PRODUCT_SEMANTICS_ARE_STALE | Marketplace, match scores, pre-social gate, pipeline semantics rejected |
| TARGET_C03_STATE_FAMILIES | Historical context only |
| CLASSIFICATION | REJECTED_STALE_SEMANTICS |
| ACCEPTANCE_AND_INSPECTION_EVIDENCE | Intake read; raw stitch_v2_campaign_creator_view package absent. Intake is not proof of accepted final C03 visuals; excluded as independent accepted design. |

### REF-COLLAB-INTAKE

| Field | Value |
|---|---|
| REFERENCE_ID | REF-COLLAB-INTAKE |
| REFERENCE_NAME | June4 Collaboration frontend intake |
| REPOSITORY_PATH | frontend:docs/ai-collaboration/2026-06-04-collaboration-frontend-intake.md |
| COMMIT_OR_ACCEPTED_ID | 323658d4b147b95b5629ff8d91fa90b8fe9077e4 |
| DESKTOP_MOBILE | DESKTOP/MOBILE |
| WHAT_VISUAL_GRAMMAR_IS_REUSABLE | Three-pane -> Inbox/Chat/Execution historical decomposition |
| WHAT_PRODUCT_SEMANTICS_ARE_STALE | C04 workflow never copied into C03 |
| TARGET_C03_STATE_FAMILIES | HANDOFF_* only |
| CLASSIFICATION | NOT_RELEVANT |
| ACCEPTANCE_AND_INSPECTION_EVIDENCE | Intake read; current C04 route and accepted G1 PNGs are more concrete evidence. |

### REF-BRAND-CENTRE

| Field | Value |
|---|---|
| REFERENCE_ID | REF-BRAND-CENTRE |
| REFERENCE_NAME | Brand Centre Stage3 current source/intake |
| REPOSITORY_PATH | frontend:docs/ai-collaboration/2026-08-26-brand-centre-stage-3.md |
| COMMIT_OR_ACCEPTED_ID | 323658d4b147b95b5629ff8d91fa90b8fe9077e4 |
| DESKTOP_MOBILE | DESKTOP/MOBILE |
| WHAT_VISUAL_GRAMMAR_IS_REUSABLE | Sectioned overview/card hierarchy as current production pattern |
| WHAT_PRODUCT_SEMANTICS_ARE_STALE | Brand management/data authority excluded |
| TARGET_C03_STATE_FAMILIES | DOS_* |
| CLASSIFICATION | VISUAL_GRAMMAR_ONLY |
| ACCEPTANCE_AND_INSPECTION_EVIDENCE | Current repository note references Stage2 PASS; not promoted to unproven Stage3 final design acceptance. Not needed to close a design gap. |

### REF-BRAND-PREVIEW

| Field | Value |
|---|---|
| REFERENCE_ID | REF-BRAND-PREVIEW |
| REFERENCE_NAME | Brand Preview prepared context |
| REPOSITORY_PATH | dummy_tcs:frontend/brand-onboarding/stitch/brand_preview_stitch_context.md |
| COMMIT_OR_ACCEPTED_ID | 706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb |
| DESKTOP_MOBILE | DESKTOP/MOBILE |
| WHAT_VISUAL_GRAMMAR_IS_REUSABLE | None relied on |
| WHAT_PRODUCT_SEMANTICS_ARE_STALE | Unreviewed proposal is not accepted authority |
| TARGET_C03_STATE_FAMILIES | NONE |
| CLASSIFICATION | NOT_RELEVANT |
| ACCEPTANCE_AND_INSPECTION_EVIDENCE | Status PREPARED FOR PRODUCT REVIEW; do not invoke. Explicitly excluded from accepted reuse. |

## C03_AURORA_CONSTRUCTION_ASSESSMENT_V1

### PUBLIC_ENTRY_LOADING

| Field | Value |
|---|---|
| FAMILY_ID | PUBLIC_ENTRY_LOADING |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| WHY | Header identity followed by one recovery/entry action. No private cached payload. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### TEASER_AUTHENTICATION_REQUIRED

| Field | Value |
|---|---|
| FAMILY_ID | TEASER_AUTHENTICATION_REQUIRED |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| WHY | Header identity followed by one recovery/entry action. No private cached payload. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### TEASER_CREATOR_ACCOUNT_REQUIRED

| Field | Value |
|---|---|
| FAMILY_ID | TEASER_CREATOR_ACCOUNT_REQUIRED |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| WHY | Header identity followed by one recovery/entry action. No private cached payload. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### PUBLIC_CONTINUATION_EXCHANGE

| Field | Value |
|---|---|
| FAMILY_ID | PUBLIC_CONTINUATION_EXCHANGE |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| WHY | Header identity followed by one recovery/entry action. No private cached payload. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### PUBLIC_CONTINUATION_EXCHANGE_ERROR

| Field | Value |
|---|---|
| FAMILY_ID | PUBLIC_CONTINUATION_EXCHANGE_ERROR |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| WHY | Header identity followed by one recovery/entry action. No private cached payload. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### UNKNOWN_OR_NONDISCLOSABLE_CAMPAIGN

| Field | Value |
|---|---|
| FAMILY_ID | UNKNOWN_OR_NONDISCLOSABLE_CAMPAIGN |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| WHY | Header identity followed by one recovery/entry action. No private cached payload. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### AUTHENTICATED_CREATOR_RETURN

| Field | Value |
|---|---|
| FAMILY_ID | AUTHENTICATED_CREATOR_RETURN |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| WHY | Header identity followed by one recovery/entry action. No private cached payload. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### IG_NOT_CONNECTED

| Field | Value |
|---|---|
| FAMILY_ID | IG_NOT_CONNECTED |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/settings/utils/creator-instagram-settings-state.ts |
| WHY | One status card with exact permitted recovery action. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | RECONCILE_DIRECTLY |

### IG_CONNECTED_HEALTHY

| Field | Value |
|---|---|
| FAMILY_ID | IG_CONNECTED_HEALTHY |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/settings/utils/creator-instagram-settings-state.ts |
| WHY | One status card with exact permitted recovery action. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | RECONCILE_DIRECTLY |

### IG_REVALIDATION_REQUIRED

| Field | Value |
|---|---|
| FAMILY_ID | IG_REVALIDATION_REQUIRED |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/settings/utils/creator-instagram-settings-state.ts |
| WHY | One status card with exact permitted recovery action. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | RECONCILE_DIRECTLY |

### IG_RECONNECT_REQUIRED

| Field | Value |
|---|---|
| FAMILY_ID | IG_RECONNECT_REQUIRED |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/settings/utils/creator-instagram-settings-state.ts |
| WHY | One status card with exact permitted recovery action. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | RECONCILE_DIRECTLY |

### IG_PROVIDER_BLOCKED_RECOVERABLE

| Field | Value |
|---|---|
| FAMILY_ID | IG_PROVIDER_BLOCKED_RECOVERABLE |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/settings/utils/creator-instagram-settings-state.ts |
| WHY | One status card with exact permitted recovery action. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | RECONCILE_DIRECTLY |

### IG_DISCONNECTED_IDENTITY_RETAINED

| Field | Value |
|---|---|
| FAMILY_ID | IG_DISCONNECTED_IDENTITY_RETAINED |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/settings/utils/creator-instagram-settings-state.ts |
| WHY | One status card with exact permitted recovery action. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | RECONCILE_DIRECTLY |

### ENT_PUBLIC

| Field | Value |
|---|---|
| FAMILY_ID | ENT_PUBLIC |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| WHY | Generic non-disclosable page; do not reveal restricted campaign existence. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### ENT_ELIGIBLE

| Field | Value |
|---|---|
| FAMILY_ID | ENT_ELIGIBLE |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| WHY | Generic non-disclosable page; do not reveal restricted campaign existence. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### ENT_INELIGIBLE

| Field | Value |
|---|---|
| FAMILY_ID | ENT_INELIGIBLE |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| WHY | Generic non-disclosable page; do not reveal restricted campaign existence. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### ENT_UNAVAILABLE

| Field | Value |
|---|---|
| FAMILY_ID | ENT_UNAVAILABLE |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| WHY | Generic non-disclosable page; do not reveal restricted campaign existence. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### ENT_INVITATION_VALID

| Field | Value |
|---|---|
| FAMILY_ID | ENT_INVITATION_VALID |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| WHY | Generic non-disclosable page; do not reveal restricted campaign existence. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### ENT_INVITATION_REQUIRED

| Field | Value |
|---|---|
| FAMILY_ID | ENT_INVITATION_REQUIRED |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| WHY | Generic non-disclosable page; do not reveal restricted campaign existence. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### ENT_INVITATION_EXPIRED

| Field | Value |
|---|---|
| FAMILY_ID | ENT_INVITATION_EXPIRED |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| WHY | Generic non-disclosable page; do not reveal restricted campaign existence. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### ENT_INVITATION_REVOKED

| Field | Value |
|---|---|
| FAMILY_ID | ENT_INVITATION_REVOKED |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| WHY | Generic non-disclosable page; do not reveal restricted campaign existence. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### ENT_INVITATION_MISMATCH

| Field | Value |
|---|---|
| FAMILY_ID | ENT_INVITATION_MISMATCH |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| WHY | Generic non-disclosable page; do not reveal restricted campaign existence. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### ENT_INVITATION_ABSENT

| Field | Value |
|---|---|
| FAMILY_ID | ENT_INVITATION_ABSENT |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| WHY | Generic non-disclosable page; do not reveal restricted campaign existence. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### ENT_CONFIGURATION

| Field | Value |
|---|---|
| FAMILY_ID | ENT_CONFIGURATION |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| WHY | Generic non-disclosable page; do not reveal restricted campaign existence. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### ENT_IDENTITY_CONFLICT

| Field | Value |
|---|---|
| FAMILY_ID | ENT_IDENTITY_CONFLICT |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| WHY | Generic non-disclosable page; do not reveal restricted campaign existence. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### OC_LOADING

| Field | Value |
|---|---|
| FAMILY_ID | OC_LOADING |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/MarketplaceDiscovery.tsx |
| WHY | Grid to single-column cards; no match ranking/filter strip. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### OC_REFRESHING

| Field | Value |
|---|---|
| FAMILY_ID | OC_REFRESHING |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/MarketplaceDiscovery.tsx |
| WHY | Grid to single-column cards; no match ranking/filter strip. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### OC_READY

| Field | Value |
|---|---|
| FAMILY_ID | OC_READY |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/MarketplaceDiscovery.tsx |
| WHY | Grid to single-column cards; no match ranking/filter strip. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | RECONCILE_DIRECTLY |

### OC_EMPTY

| Field | Value |
|---|---|
| FAMILY_ID | OC_EMPTY |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/MarketplaceDiscovery.tsx |
| WHY | Grid to single-column cards; no match ranking/filter strip. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | REUSE_ACCEPTED_REFERENCE |

### OC_PAGINATION

| Field | Value |
|---|---|
| FAMILY_ID | OC_PAGINATION |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/MarketplaceDiscovery.tsx |
| WHY | Grid to single-column cards; no match ranking/filter strip. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### OC_MALFORMED

| Field | Value |
|---|---|
| FAMILY_ID | OC_MALFORMED |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/MarketplaceDiscovery.tsx |
| WHY | Grid to single-column cards; no match ranking/filter strip. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### OC_AUTH_LOSS

| Field | Value |
|---|---|
| FAMILY_ID | OC_AUTH_LOSS |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/MarketplaceDiscovery.tsx |
| WHY | Grid to single-column cards; no match ranking/filter strip. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### OC_CONTEXT_RECOVERY

| Field | Value |
|---|---|
| FAMILY_ID | OC_CONTEXT_RECOVERY |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/MarketplaceDiscovery.tsx |
| WHY | Grid to single-column cards; no match ranking/filter strip. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### OC_INSTAGRAM_RECOVERY

| Field | Value |
|---|---|
| FAMILY_ID | OC_INSTAGRAM_RECOVERY |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/MarketplaceDiscovery.tsx |
| WHY | Grid to single-column cards; no match ranking/filter strip. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### OC_CURSOR_ERROR

| Field | Value |
|---|---|
| FAMILY_ID | OC_CURSOR_ERROR |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/MarketplaceDiscovery.tsx |
| WHY | Grid to single-column cards; no match ranking/filter strip. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### DOS_AUTHORIZED

| Field | Value |
|---|---|
| FAMILY_ID | DOS_AUTHORIZED |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| WHY | Identity/objective/timing then commercial/support then Assets/Briefs; desktop related columns, mobile linear reading. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | RECONCILE_DIRECTLY |

### DOS_APPLICATIONS_CLOSED

| Field | Value |
|---|---|
| FAMILY_ID | DOS_APPLICATIONS_CLOSED |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| WHY | Identity/objective/timing then commercial/support then Assets/Briefs; desktop related columns, mobile linear reading. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### DOS_BLOCKED

| Field | Value |
|---|---|
| FAMILY_ID | DOS_BLOCKED |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| WHY | Identity/objective/timing then commercial/support then Assets/Briefs; desktop related columns, mobile linear reading. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### DOS_COMMERCIAL_FIXED

| Field | Value |
|---|---|
| FAMILY_ID | DOS_COMMERCIAL_FIXED |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| WHY | Identity/objective/timing then commercial/support then Assets/Briefs; desktop related columns, mobile linear reading. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### DOS_COMMERCIAL_NEGOTIABLE

| Field | Value |
|---|---|
| FAMILY_ID | DOS_COMMERCIAL_NEGOTIABLE |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| WHY | Identity/objective/timing then commercial/support then Assets/Briefs; desktop related columns, mobile linear reading. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### DOS_COMMERCIAL_ZERO

| Field | Value |
|---|---|
| FAMILY_ID | DOS_COMMERCIAL_ZERO |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| WHY | Identity/objective/timing then commercial/support then Assets/Briefs; desktop related columns, mobile linear reading. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### DOS_COMMERCIAL_UNAVAILABLE

| Field | Value |
|---|---|
| FAMILY_ID | DOS_COMMERCIAL_UNAVAILABLE |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| WHY | Identity/objective/timing then commercial/support then Assets/Briefs; desktop related columns, mobile linear reading. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### DOS_SUPPORT_NONE

| Field | Value |
|---|---|
| FAMILY_ID | DOS_SUPPORT_NONE |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| WHY | Identity/objective/timing then commercial/support then Assets/Briefs; desktop related columns, mobile linear reading. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### DOS_SUPPORT_PRESENT

| Field | Value |
|---|---|
| FAMILY_ID | DOS_SUPPORT_PRESENT |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| WHY | Identity/objective/timing then commercial/support then Assets/Briefs; desktop related columns, mobile linear reading. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### DOS_TIMING_NULL

| Field | Value |
|---|---|
| FAMILY_ID | DOS_TIMING_NULL |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| WHY | Identity/objective/timing then commercial/support then Assets/Briefs; desktop related columns, mobile linear reading. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### DOS_BRAND_MEDIA

| Field | Value |
|---|---|
| FAMILY_ID | DOS_BRAND_MEDIA |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| WHY | Identity/objective/timing then commercial/support then Assets/Briefs; desktop related columns, mobile linear reading. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### SEL_SINGLE_PAIR

| Field | Value |
|---|---|
| FAMILY_ID | SEL_SINGLE_PAIR |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| WHY | Native radio groups; Asset then associated Brief, detail action separate from selection. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### SEL_MULTIPLE_PAIRS

| Field | Value |
|---|---|
| FAMILY_ID | SEL_MULTIPLE_PAIRS |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| WHY | Native radio groups; Asset then associated Brief, detail action separate from selection. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### SEL_MULTIPLE_BRIEFS

| Field | Value |
|---|---|
| FAMILY_ID | SEL_MULTIPLE_BRIEFS |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| WHY | Native radio groups; Asset then associated Brief, detail action separate from selection. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### SEL_MULTIPLE_ASSETS

| Field | Value |
|---|---|
| FAMILY_ID | SEL_MULTIPLE_ASSETS |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| WHY | Native radio groups; Asset then associated Brief, detail action separate from selection. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### SEL_BRAND_ONLY

| Field | Value |
|---|---|
| FAMILY_ID | SEL_BRAND_ONLY |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| WHY | Native radio groups; Asset then associated Brief, detail action separate from selection. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### SEL_NO_IMAGE

| Field | Value |
|---|---|
| FAMILY_ID | SEL_NO_IMAGE |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| WHY | Native radio groups; Asset then associated Brief, detail action separate from selection. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### SEL_ASSET_UNAVAILABLE

| Field | Value |
|---|---|
| FAMILY_ID | SEL_ASSET_UNAVAILABLE |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| WHY | Native radio groups; Asset then associated Brief, detail action separate from selection. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### SEL_BRIEF_UNAVAILABLE

| Field | Value |
|---|---|
| FAMILY_ID | SEL_BRIEF_UNAVAILABLE |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| WHY | Native radio groups; Asset then associated Brief, detail action separate from selection. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### SEL_MISMATCH

| Field | Value |
|---|---|
| FAMILY_ID | SEL_MISMATCH |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| WHY | Native radio groups; Asset then associated Brief, detail action separate from selection. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### SEL_NONE_AVAILABLE

| Field | Value |
|---|---|
| FAMILY_ID | SEL_NONE_AVAILABLE |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| WHY | Native radio groups; Asset then associated Brief, detail action separate from selection. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### DRAW_ASSET

| Field | Value |
|---|---|
| FAMILY_ID | DRAW_ASSET |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/features/uce/campaign-page/CanonicalBriefDetailsDrawer.tsx |
| WHY | Desktop right drawer; tablet bounded sheet; mobile full/near-full-screen for long detail; one owned scroll. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### DRAW_BRIEF

| Field | Value |
|---|---|
| FAMILY_ID | DRAW_BRIEF |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/features/uce/campaign-page/CanonicalBriefDetailsDrawer.tsx |
| WHY | Desktop right drawer; tablet bounded sheet; mobile full/near-full-screen for long detail; one owned scroll. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### DRAW_DELIVERABLES

| Field | Value |
|---|---|
| FAMILY_ID | DRAW_DELIVERABLES |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/features/uce/campaign-page/CanonicalBriefDetailsDrawer.tsx |
| WHY | Desktop right drawer; tablet bounded sheet; mobile full/near-full-screen for long detail; one owned scroll. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### DRAW_RIGHTS_SUPPORT_REFERENCES

| Field | Value |
|---|---|
| FAMILY_ID | DRAW_RIGHTS_SUPPORT_REFERENCES |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/features/uce/campaign-page/CanonicalBriefDetailsDrawer.tsx |
| WHY | Desktop right drawer; tablet bounded sheet; mobile full/near-full-screen for long detail; one owned scroll. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### APPLY_SELECTION

| Field | Value |
|---|---|
| FAMILY_ID | APPLY_SELECTION |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| WHY | Review retains exact Asset, Brief, deliverables, commercial and support; persistent footer never obscures body. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | RECONCILE_DIRECTLY |

### APPLY_REVIEW

| Field | Value |
|---|---|
| FAMILY_ID | APPLY_REVIEW |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| WHY | Review retains exact Asset, Brief, deliverables, commercial and support; persistent footer never obscures body. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | RECONCILE_DIRECTLY |

### APPLY_READY

| Field | Value |
|---|---|
| FAMILY_ID | APPLY_READY |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| WHY | Review retains exact Asset, Brief, deliverables, commercial and support; persistent footer never obscures body. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### APPLY_SUBMITTING

| Field | Value |
|---|---|
| FAMILY_ID | APPLY_SUBMITTING |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| WHY | Review retains exact Asset, Brief, deliverables, commercial and support; persistent footer never obscures body. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### APPLY_SUCCESS

| Field | Value |
|---|---|
| FAMILY_ID | APPLY_SUCCESS |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| WHY | Review retains exact Asset, Brief, deliverables, commercial and support; persistent footer never obscures body. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### APPLY_REPLAY

| Field | Value |
|---|---|
| FAMILY_ID | APPLY_REPLAY |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| WHY | Review retains exact Asset, Brief, deliverables, commercial and support; persistent footer never obscures body. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### APPLY_SELECTION_STALE

| Field | Value |
|---|---|
| FAMILY_ID | APPLY_SELECTION_STALE |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| WHY | Review retains exact Asset, Brief, deliverables, commercial and support; persistent footer never obscures body. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### APPLY_CLOSED

| Field | Value |
|---|---|
| FAMILY_ID | APPLY_CLOSED |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| WHY | Review retains exact Asset, Brief, deliverables, commercial and support; persistent footer never obscures body. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### APPLY_ELIGIBILITY_UNAVAILABLE

| Field | Value |
|---|---|
| FAMILY_ID | APPLY_ELIGIBILITY_UNAVAILABLE |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| WHY | Review retains exact Asset, Brief, deliverables, commercial and support; persistent footer never obscures body. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### APPLY_INVITATION_INVALIDATED

| Field | Value |
|---|---|
| FAMILY_ID | APPLY_INVITATION_INVALIDATED |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| WHY | Review retains exact Asset, Brief, deliverables, commercial and support; persistent footer never obscures body. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### APPLY_ROLE_LOST

| Field | Value |
|---|---|
| FAMILY_ID | APPLY_ROLE_LOST |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| WHY | Review retains exact Asset, Brief, deliverables, commercial and support; persistent footer never obscures body. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### APPLY_CAMPAIGN_QUOTA

| Field | Value |
|---|---|
| FAMILY_ID | APPLY_CAMPAIGN_QUOTA |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| WHY | Review retains exact Asset, Brief, deliverables, commercial and support; persistent footer never obscures body. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### APPLY_BRAND_QUOTA

| Field | Value |
|---|---|
| FAMILY_ID | APPLY_BRAND_QUOTA |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| WHY | Review retains exact Asset, Brief, deliverables, commercial and support; persistent footer never obscures body. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### APPLY_SAME_USED

| Field | Value |
|---|---|
| FAMILY_ID | APPLY_SAME_USED |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| WHY | Review retains exact Asset, Brief, deliverables, commercial and support; persistent footer never obscures body. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### APPLY_CONFLICT

| Field | Value |
|---|---|
| FAMILY_ID | APPLY_CONFLICT |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| WHY | Review retains exact Asset, Brief, deliverables, commercial and support; persistent footer never obscures body. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### APPLY_AUTH_FAILURE

| Field | Value |
|---|---|
| FAMILY_ID | APPLY_AUTH_FAILURE |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| WHY | Review retains exact Asset, Brief, deliverables, commercial and support; persistent footer never obscures body. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### APPLY_KEY_REQUIRED

| Field | Value |
|---|---|
| FAMILY_ID | APPLY_KEY_REQUIRED |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| WHY | Review retains exact Asset, Brief, deliverables, commercial and support; persistent footer never obscures body. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### APPLY_KEY_REUSED

| Field | Value |
|---|---|
| FAMILY_ID | APPLY_KEY_REUSED |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| WHY | Review retains exact Asset, Brief, deliverables, commercial and support; persistent footer never obscures body. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### APPLY_REAPPLY

| Field | Value |
|---|---|
| FAMILY_ID | APPLY_REAPPLY |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| WHY | Review retains exact Asset, Brief, deliverables, commercial and support; persistent footer never obscures body. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### HIST_LOADING

| Field | Value |
|---|---|
| FAMILY_ID | HIST_LOADING |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/HistoryArchiveWorkspace.tsx |
| WHY | Desktop rows or cards; tablet/mobile independent cards with visible status, selected pair and actions; no sibling collapse. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### HIST_EMPTY

| Field | Value |
|---|---|
| FAMILY_ID | HIST_EMPTY |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/HistoryArchiveWorkspace.tsx |
| WHY | Desktop rows or cards; tablet/mobile independent cards with visible status, selected pair and actions; no sibling collapse. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | REUSE_ACCEPTED_REFERENCE |

### HIST_READY

| Field | Value |
|---|---|
| FAMILY_ID | HIST_READY |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/HistoryArchiveWorkspace.tsx |
| WHY | Desktop rows or cards; tablet/mobile independent cards with visible status, selected pair and actions; no sibling collapse. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | RECONCILE_DIRECTLY |

### HIST_PAGINATION

| Field | Value |
|---|---|
| FAMILY_ID | HIST_PAGINATION |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/HistoryArchiveWorkspace.tsx |
| WHY | Desktop rows or cards; tablet/mobile independent cards with visible status, selected pair and actions; no sibling collapse. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### HIST_PENDING

| Field | Value |
|---|---|
| FAMILY_ID | HIST_PENDING |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/HistoryArchiveWorkspace.tsx |
| WHY | Desktop rows or cards; tablet/mobile independent cards with visible status, selected pair and actions; no sibling collapse. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### HIST_APPROVED

| Field | Value |
|---|---|
| FAMILY_ID | HIST_APPROVED |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/HistoryArchiveWorkspace.tsx |
| WHY | Desktop rows or cards; tablet/mobile independent cards with visible status, selected pair and actions; no sibling collapse. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### HIST_REJECTED

| Field | Value |
|---|---|
| FAMILY_ID | HIST_REJECTED |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/HistoryArchiveWorkspace.tsx |
| WHY | Desktop rows or cards; tablet/mobile independent cards with visible status, selected pair and actions; no sibling collapse. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### HIST_WITHDRAWN

| Field | Value |
|---|---|
| FAMILY_ID | HIST_WITHDRAWN |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/features/creator-campaigns/components/HistoryArchiveWorkspace.tsx |
| WHY | Desktop rows or cards; tablet/mobile independent cards with visible status, selected pair and actions; no sibling collapse. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### HIST_EXPIRED

| Field | Value |
|---|---|
| FAMILY_ID | HIST_EXPIRED |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/HistoryArchiveWorkspace.tsx |
| WHY | Desktop rows or cards; tablet/mobile independent cards with visible status, selected pair and actions; no sibling collapse. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### HIST_SUPERSEDED

| Field | Value |
|---|---|
| FAMILY_ID | HIST_SUPERSEDED |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/HistoryArchiveWorkspace.tsx |
| WHY | Desktop rows or cards; tablet/mobile independent cards with visible status, selected pair and actions; no sibling collapse. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### HIST_LEGACY_COMPATIBILITY

| Field | Value |
|---|---|
| FAMILY_ID | HIST_LEGACY_COMPATIBILITY |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/HistoryArchiveWorkspace.tsx |
| WHY | Desktop rows or cards; tablet/mobile independent cards with visible status, selected pair and actions; no sibling collapse. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### HIST_DETAIL

| Field | Value |
|---|---|
| FAMILY_ID | HIST_DETAIL |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/HistoryArchiveWorkspace.tsx |
| WHY | Desktop rows or cards; tablet/mobile independent cards with visible status, selected pair and actions; no sibling collapse. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### HIST_NOT_FOUND

| Field | Value |
|---|---|
| FAMILY_ID | HIST_NOT_FOUND |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/HistoryArchiveWorkspace.tsx |
| WHY | Desktop rows or cards; tablet/mobile independent cards with visible status, selected pair and actions; no sibling collapse. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### HIST_CURSOR_ERROR

| Field | Value |
|---|---|
| FAMILY_ID | HIST_CURSOR_ERROR |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/HistoryArchiveWorkspace.tsx |
| WHY | Desktop rows or cards; tablet/mobile independent cards with visible status, selected pair and actions; no sibling collapse. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### HIST_IG_DISCONNECTED

| Field | Value |
|---|---|
| FAMILY_ID | HIST_IG_DISCONNECTED |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/HistoryArchiveWorkspace.tsx |
| WHY | Desktop rows or cards; tablet/mobile independent cards with visible status, selected pair and actions; no sibling collapse. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### HIST_IG_REVALIDATION

| Field | Value |
|---|---|
| FAMILY_ID | HIST_IG_REVALIDATION |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/HistoryArchiveWorkspace.tsx |
| WHY | Desktop rows or cards; tablet/mobile independent cards with visible status, selected pair and actions; no sibling collapse. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### HIST_IG_RECONNECT

| Field | Value |
|---|---|
| FAMILY_ID | HIST_IG_RECONNECT |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/HistoryArchiveWorkspace.tsx |
| WHY | Desktop rows or cards; tablet/mobile independent cards with visible status, selected pair and actions; no sibling collapse. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### HIST_MULTIPLE_SIBLINGS

| Field | Value |
|---|---|
| FAMILY_ID | HIST_MULTIPLE_SIBLINGS |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/creator-campaigns/components/HistoryArchiveWorkspace.tsx |
| WHY | Desktop rows or cards; tablet/mobile independent cards with visible status, selected pair and actions; no sibling collapse. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### ROLE_OWNER_PENDING

| Field | Value |
|---|---|
| FAMILY_ID | ROLE_OWNER_PENDING |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/shared/creator/creator-workspace-actor-mapper.ts |
| WHY | Status and permitted action colocated; absent Withdraw is not a disabled fake permission. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### ROLE_MANAGER_PENDING

| Field | Value |
|---|---|
| FAMILY_ID | ROLE_MANAGER_PENDING |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/shared/creator/creator-workspace-actor-mapper.ts |
| WHY | Status and permitted action colocated; absent Withdraw is not a disabled fake permission. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### ROLE_ASSISTANT_PENDING

| Field | Value |
|---|---|
| FAMILY_ID | ROLE_ASSISTANT_PENDING |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/shared/creator/creator-workspace-actor-mapper.ts |
| WHY | Status and permitted action colocated; absent Withdraw is not a disabled fake permission. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### ROLE_TERMINAL

| Field | Value |
|---|---|
| FAMILY_ID | ROLE_TERMINAL |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/shared/creator/creator-workspace-actor-mapper.ts |
| WHY | Status and permitted action colocated; absent Withdraw is not a disabled fake permission. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### WITHDRAW_CONFIRM

| Field | Value |
|---|---|
| FAMILY_ID | WITHDRAW_CONFIRM |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/design-system/aurora/components/SideDrawer.tsx |
| WHY | Small confirmation dialog/compact mobile sheet; name exact Application/selection; Cancel first safe focus. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### WITHDRAW_SUBMITTING

| Field | Value |
|---|---|
| FAMILY_ID | WITHDRAW_SUBMITTING |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/design-system/aurora/components/SideDrawer.tsx |
| WHY | Small confirmation dialog/compact mobile sheet; name exact Application/selection; Cancel first safe focus. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### WITHDRAW_SUCCESS

| Field | Value |
|---|---|
| FAMILY_ID | WITHDRAW_SUCCESS |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/design-system/aurora/components/SideDrawer.tsx |
| WHY | Small confirmation dialog/compact mobile sheet; name exact Application/selection; Cancel first safe focus. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### WITHDRAW_REPLAY

| Field | Value |
|---|---|
| FAMILY_ID | WITHDRAW_REPLAY |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/design-system/aurora/components/SideDrawer.tsx |
| WHY | Small confirmation dialog/compact mobile sheet; name exact Application/selection; Cancel first safe focus. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### WITHDRAW_CONFLICT

| Field | Value |
|---|---|
| FAMILY_ID | WITHDRAW_CONFLICT |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/design-system/aurora/components/SideDrawer.tsx |
| WHY | Small confirmation dialog/compact mobile sheet; name exact Application/selection; Cancel first safe focus. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### WITHDRAW_FAILURE

| Field | Value |
|---|---|
| FAMILY_ID | WITHDRAW_FAILURE |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/design-system/aurora/components/SideDrawer.tsx |
| WHY | Small confirmation dialog/compact mobile sheet; name exact Application/selection; Cancel first safe focus. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### HANDOFF_APPROVED

| Field | Value |
|---|---|
| FAMILY_ID | HANDOFF_APPROVED |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/collaboration/utils/collaboration-selection.ts |
| WHY | Named link per approved Application; keep sibling identities distinct. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### HANDOFF_MULTIPLE

| Field | Value |
|---|---|
| FAMILY_ID | HANDOFF_MULTIPLE |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/collaboration/utils/collaboration-selection.ts |
| WHY | Named link per approved Application; keep sibling identities distinct. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### HANDOFF_INVALID

| Field | Value |
|---|---|
| FAMILY_ID | HANDOFF_INVALID |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/features/collaboration/utils/collaboration-selection.ts |
| WHY | Named link per approved Application; keep sibling identities distinct. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### NOTIF_LOADING

| Field | Value |
|---|---|
| FAMILY_ID | NOTIF_LOADING |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/layouts/app-shell/AppHeader.tsx |
| WHY | Existing header bell opens bounded list drawer; mobile sheet; no new bottom-nav slot or global system. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### NOTIF_LIST_FAILED

| Field | Value |
|---|---|
| FAMILY_ID | NOTIF_LIST_FAILED |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/layouts/app-shell/AppHeader.tsx |
| WHY | Existing header bell opens bounded list drawer; mobile sheet; no new bottom-nav slot or global system. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### NOTIF_EMPTY

| Field | Value |
|---|---|
| FAMILY_ID | NOTIF_EMPTY |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/layouts/app-shell/AppHeader.tsx |
| WHY | Existing header bell opens bounded list drawer; mobile sheet; no new bottom-nav slot or global system. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### NOTIF_UNREAD

| Field | Value |
|---|---|
| FAMILY_ID | NOTIF_UNREAD |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/layouts/app-shell/AppHeader.tsx |
| WHY | Existing header bell opens bounded list drawer; mobile sheet; no new bottom-nav slot or global system. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### NOTIF_READ

| Field | Value |
|---|---|
| FAMILY_ID | NOTIF_READ |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/layouts/app-shell/AppHeader.tsx |
| WHY | Existing header bell opens bounded list drawer; mobile sheet; no new bottom-nav slot or global system. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### NOTIF_APPROVED

| Field | Value |
|---|---|
| FAMILY_ID | NOTIF_APPROVED |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/layouts/app-shell/AppHeader.tsx |
| WHY | Existing header bell opens bounded list drawer; mobile sheet; no new bottom-nav slot or global system. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### NOTIF_REJECTED

| Field | Value |
|---|---|
| FAMILY_ID | NOTIF_REJECTED |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/layouts/app-shell/AppHeader.tsx |
| WHY | Existing header bell opens bounded list drawer; mobile sheet; no new bottom-nav slot or global system. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### NOTIF_MARK_PENDING

| Field | Value |
|---|---|
| FAMILY_ID | NOTIF_MARK_PENDING |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/layouts/app-shell/AppHeader.tsx |
| WHY | Existing header bell opens bounded list drawer; mobile sheet; no new bottom-nav slot or global system. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### NOTIF_MARK_FAILED

| Field | Value |
|---|---|
| FAMILY_ID | NOTIF_MARK_FAILED |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/layouts/app-shell/AppHeader.tsx |
| WHY | Existing header bell opens bounded list drawer; mobile sheet; no new bottom-nav slot or global system. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### NOTIF_COUNT_FAILED

| Field | Value |
|---|---|
| FAMILY_ID | NOTIF_COUNT_FAILED |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/layouts/app-shell/AppHeader.tsx |
| WHY | Existing header bell opens bounded list drawer; mobile sheet; no new bottom-nav slot or global system. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### NOTIF_MEMBERSHIP_LOST

| Field | Value |
|---|---|
| FAMILY_ID | NOTIF_MEMBERSHIP_LOST |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/layouts/app-shell/AppHeader.tsx |
| WHY | Existing header bell opens bounded list drawer; mobile sheet; no new bottom-nav slot or global system. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### NOTIF_IG_DISCONNECTED

| Field | Value |
|---|---|
| FAMILY_ID | NOTIF_IG_DISCONNECTED |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/layouts/app-shell/AppHeader.tsx |
| WHY | Existing header bell opens bounded list drawer; mobile sheet; no new bottom-nav slot or global system. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### NOTIF_IG_REVALIDATION

| Field | Value |
|---|---|
| FAMILY_ID | NOTIF_IG_REVALIDATION |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/layouts/app-shell/AppHeader.tsx |
| WHY | Existing header bell opens bounded list drawer; mobile sheet; no new bottom-nav slot or global system. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### NOTIF_IG_RECONNECT

| Field | Value |
|---|---|
| FAMILY_ID | NOTIF_IG_RECONNECT |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/layouts/app-shell/AppHeader.tsx |
| WHY | Existing header bell opens bounded list drawer; mobile sheet; no new bottom-nav slot or global system. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### NOTIF_BOUNDED_LIST

| Field | Value |
|---|---|
| FAMILY_ID | NOTIF_BOUNDED_LIST |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/design-system/aurora/components/SideDrawer.tsx; src/layouts/app-shell/AppHeader.tsx |
| WHY | Existing header bell opens bounded list drawer; mobile sheet; no new bottom-nav slot or global system. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### UTIL_NETWORK

| Field | Value |
|---|---|
| FAMILY_ID | UTIL_NETWORK |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/shared/api/parse-api-error.ts |
| WHY | Inline scoped error with retry where safe; full-page only if no usable parent. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### UTIL_SERVER_FAILURE

| Field | Value |
|---|---|
| FAMILY_ID | UTIL_SERVER_FAILURE |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/shared/api/parse-api-error.ts |
| WHY | Inline scoped error with retry where safe; full-page only if no usable parent. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### UTIL_MALFORMED

| Field | Value |
|---|---|
| FAMILY_ID | UTIL_MALFORMED |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/shared/api/parse-api-error.ts |
| WHY | Inline scoped error with retry where safe; full-page only if no usable parent. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### UTIL_DEPENDENCY

| Field | Value |
|---|---|
| FAMILY_ID | UTIL_DEPENDENCY |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/shared/api/parse-api-error.ts |
| WHY | Inline scoped error with retry where safe; full-page only if no usable parent. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### UTIL_SESSION

| Field | Value |
|---|---|
| FAMILY_ID | UTIL_SESSION |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/shared/api/parse-api-error.ts |
| WHY | Inline scoped error with retry where safe; full-page only if no usable parent. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### UTIL_PERMISSION

| Field | Value |
|---|---|
| FAMILY_ID | UTIL_PERMISSION |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/shared/api/parse-api-error.ts |
| WHY | Inline scoped error with retry where safe; full-page only if no usable parent. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### UTIL_REFRESH

| Field | Value |
|---|---|
| FAMILY_ID | UTIL_REFRESH |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/shared/api/parse-api-error.ts |
| WHY | Inline scoped error with retry where safe; full-page only if no usable parent. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### UTIL_THROTTLED

| Field | Value |
|---|---|
| FAMILY_ID | UTIL_THROTTLED |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/shared/api/parse-api-error.ts |
| WHY | Inline scoped error with retry where safe; full-page only if no usable parent. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### UTIL_LEGACY_RECONCILIATION

| Field | Value |
|---|---|
| FAMILY_ID | UTIL_LEGACY_RECONCILIATION |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; src/shared/api/parse-api-error.ts |
| WHY | Inline scoped error with retry where safe; full-page only if no usable parent. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### BRIEF_PACK_DEFERRED

| Field | Value |
|---|---|
| FAMILY_ID | BRIEF_PACK_DEFERRED |
| CAN_CONSTRUCT_CONFIDENTLY_FROM_AURORA | YES |
| EXACT_PRIMITIVES_OR_PATTERNS | src/design-system/aurora/components/Card.tsx; src/design-system/aurora/components/Button.tsx; src/design-system/aurora/components/Alert.tsx; src/design-system/aurora/components/Badge.tsx; NOT_FOUND |
| WHY | No active download action until separate P5 acceptance. Existing hierarchy plus bounded capability/schema/interaction reconciliation; not new visual grammar. |
| BOUNDED_REQUIREMENTS | Use native link/radio semantics; harden focus/live-region/safe-area behavior as applicable. Source inspection establishes feasibility, not P4 visual acceptance. |
| DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

## C03_RESPONSIVE_ACCESSIBILITY_CONTRACT_V1

### 1

| Field | Value |
|---|---|
| SURFACE | Navigation |
| DESKTOP | Retain sidebar/header, Campaigns item active for both subroutes |
| TABLET_INTERMEDIATE | Existing shell menu before content crowding |
| MOBILE_390PX | Four existing bottom destinations; Opportunities/My Applications local route links wrap; no fifth slot |
| MOBILE_375PX | Four existing bottom destinations; Opportunities/My Applications local route links wrap; no fifth slot Confirm no page-level horizontal scroll at375px and text zoom. |
| ACCESSIBILITY | Native links aria-current; safe-area and footer clearance |
| AUTHORITY | Aurora v5 §§3,6,7,8,15,16; frozen StageB; current frontend shell |

### 2

| Field | Value |
|---|---|
| SURFACE | Opportunity header |
| DESKTOP | Brand identity-scale logo, title/objective and timing in readable order |
| TABLET_INTERMEDIATE | Wrap metadata and action group; avoid cramped columns |
| MOBILE_390PX | Stack title/objective/timing; long names wrap; no title ellipsis as only source of identity |
| MOBILE_375PX | Stack title/objective/timing; long names wrap; no title ellipsis as only source of identity Confirm no page-level horizontal scroll at375px and text zoom. |
| ACCESSIBILITY | h1 then ordered section headings; logo alt appropriate |
| AUTHORITY | Aurora v5 §§3,6,7,8,15,16; frozen StageB; current frontend shell |

### 3

| Field | Value |
|---|---|
| SURFACE | Commercial/support |
| DESKTOP | Related read-only card near selection, separate offer/currency/support lines |
| TABLET_INTERMEDIATE | Stack cards as needed |
| MOBILE_390PX | Full-width card; exact amount and currency visible, null honest; no proposed input |
| MOBILE_375PX | Full-width card; exact amount and currency visible, null honest; no proposed input Confirm no page-level horizontal scroll at375px and text zoom. |
| ACCESSIBILITY | Non-color availability message; meaningful labels |
| AUTHORITY | Aurora v5 §§3,6,7,8,15,16; frozen StageB; current frontend shell |

### 4

| Field | Value |
|---|---|
| SURFACE | Asset/Brief selection |
| DESKTOP | Related Asset then associated Brief groups; independent details buttons |
| TABLET_INTERMEDIATE | Two columns only while radio labels and content fit |
| MOBILE_390PX | Single column >=44px choices; no horizontal carousel hiding options |
| MOBILE_375PX | Single column >=44px choices; no horizontal carousel hiding options Confirm no page-level horizontal scroll at375px and text zoom. |
| ACCESSIBILITY | Native radio group legends; arrow-key selection; unavailable reason associated; details link outside radio |
| AUTHORITY | Aurora v5 §§3,6,7,8,15,16; frozen StageB; current frontend shell |

### 5

| Field | Value |
|---|---|
| SURFACE | Drawers |
| DESKTOP | Contextual right drawer with bounded readable width |
| TABLET_INTERMEDIATE | Near-full sheet when long content cannot fit |
| MOBILE_390PX | Full/near-full-screen sheet for rich Brief; compact sheet only for short confirmation; no universal70vh |
| MOBILE_375PX | Full/near-full-screen sheet for rich Brief; compact sheet only for short confirmation; no universal70vh Confirm no page-level horizontal scroll at375px and text zoom. |
| ACCESSIBILITY | Named modal; inert background; focus trap/restore; Escape; one scroll; safe areas |
| AUTHORITY | Aurora v5 §§3,6,7,8,15,16; frozen StageB; current frontend shell |

### 6

| Field | Value |
|---|---|
| SURFACE | Review and Submit |
| DESKTOP | Exact selected pair and key obligations before footer |
| TABLET_INTERMEDIATE | Reflow summary, preserve information |
| MOBILE_390PX | Single column; full-width primary Submit; footer has reserved space and scrollable long body |
| MOBILE_375PX | Single column; full-width primary Submit; footer has reserved space and scrollable long body Confirm no page-level horizontal scroll at375px and text zoom. |
| ACCESSIBILITY | Review focus heading; errors summary associated; busy announced once; no legal checkbox |
| AUTHORITY | Aurora v5 §§3,6,7,8,15,16; frozen StageB; current frontend shell |

### 7

| Field | Value |
|---|---|
| SURFACE | Application history |
| DESKTOP | Independent rows/cards, status selected pair date and action visible |
| TABLET_INTERMEDIATE | Switch to cards when columns become cramped |
| MOBILE_390PX | Cards per applicationId; status/actions wrap, siblings preserved |
| MOBILE_375PX | Cards per applicationId; status/actions wrap, siblings preserved Confirm no page-level horizontal scroll at375px and text zoom. |
| ACCESSIBILITY | List/table appropriate semantics; text status; no clickable nonsemantic rows |
| AUTHORITY | Aurora v5 §§3,6,7,8,15,16; frozen StageB; current frontend shell |

### 8

| Field | Value |
|---|---|
| SURFACE | Rich Brief content |
| DESKTOP | Sectioned guidance, ordered format-specific Deliverables, rights and references |
| TABLET_INTERMEDIATE | Reflow long content rather than shrink |
| MOBILE_390PX | Wrap URLs/long words; preserve all required content, safe external links, deliberate no-image |
| MOBILE_375PX | Wrap URLs/long words; preserve all required content, safe external links, deliberate no-image Confirm no page-level horizontal scroll at375px and text zoom. |
| ACCESSIBILITY | Meaningful link text; headings; ordered deliverable list; no hidden business-critical Review facts |
| AUTHORITY | Aurora v5 §§3,6,7,8,15,16; frozen StageB; current frontend shell |

### 9

| Field | Value |
|---|---|
| SURFACE | Notifications |
| DESKTOP | Existing header bell opens bounded recipient list drawer |
| TABLET_INTERMEDIATE | Drawer/sheet adapts to available width |
| MOBILE_390PX | Full-width readable rows in sheet; no count truncation as only label |
| MOBILE_375PX | Full-width readable rows in sheet; no count truncation as only label Confirm no page-level horizontal scroll at375px and text zoom. |
| ACCESSIBILITY | Bell named with unread count when known; aria-expanded; row link and mark-read separate; polite result |
| AUTHORITY | Aurora v5 §§3,6,7,8,15,16; frozen StageB; current frontend shell |

### 10

| Field | Value |
|---|---|
| SURFACE | Loading/errors |
| DESKTOP | Scoped skeleton/text status, useful inline retry |
| TABLET_INTERMEDIATE | Same semantic state |
| MOBILE_390PX | No overflow or fabricated progress; keep retry accessible |
| MOBILE_375PX | No overflow or fabricated progress; keep retry accessible Confirm no page-level horizontal scroll at375px and text zoom. |
| ACCESSIBILITY | aria-busy; decorative skeleton; live error once; no raw diagnostics |
| AUTHORITY | Aurora v5 §§3,6,7,8,15,16; frozen StageB; current frontend shell |

## C03_BACKEND_REASON_VIEW_MAPPING_V1

### 1

| Field | Value |
|---|---|
| BACKEND_CODE | OPPORTUNITY_NOT_AVAILABLE |
| HTTP_OR_PROJECTION_CONTEXT | LOCKED projection; continuation/Submit404 |
| VIEW_STATE | UNKNOWN_OR_NONDISCLOSABLE_CAMPAIGN |
| USER_COPY_INTENT | This Opportunity is unavailable. |
| RECOVERY_ACTION | Return to permitted Campaigns; no existence/details inference |
| PRESENTATION | PAGE |
| RETRYABLE | NO |

### 2

| Field | Value |
|---|---|
| BACKEND_CODE | AUTHENTICATION_REQUIRED |
| HTTP_OR_PROJECTION_CONTEXT | TEASER projection |
| VIEW_STATE | TEASER_AUTHENTICATION_REQUIRED |
| USER_COPY_INTENT | Sign in or use a Creator account to continue. |
| RECOVERY_ACTION | SIGN_IN_OR_CREATE_CREATOR; preserve safe Campaign return |
| PRESENTATION | PAGE |
| RETRYABLE | NO |

### 3

| Field | Value |
|---|---|
| BACKEND_CODE | CREATOR_ACCOUNT_REQUIRED |
| HTTP_OR_PROJECTION_CONTEXT | TEASER projection |
| VIEW_STATE | TEASER_CREATOR_ACCOUNT_REQUIRED |
| USER_COPY_INTENT | Sign in or use a Creator account to continue. |
| RECOVERY_ACTION | SIGN_IN_OR_CREATE_CREATOR; preserve safe Campaign return |
| PRESENTATION | PAGE |
| RETRYABLE | NO |

### 4

| Field | Value |
|---|---|
| BACKEND_CODE | CREATOR_CONTEXT_REQUIRED |
| HTTP_OR_PROJECTION_CONTEXT | LOCKED projection |
| VIEW_STATE | OC_CONTEXT_RECOVERY |
| USER_COPY_INTENT | Resolve your current Creator workspace. |
| RECOVERY_ACTION | RESOLVE_CREATOR_CONTEXT |
| PRESENTATION | PAGE |
| RETRYABLE | NO |

### 5

| Field | Value |
|---|---|
| BACKEND_CODE | NOT_CONNECTED |
| HTTP_OR_PROJECTION_CONTEXT | LOCKED projection; Submit conflict |
| VIEW_STATE | IG_NOT_CONNECTED |
| USER_COPY_INTENT | Connect Instagram to access current Opportunities. |
| RECOVERY_ACTION | CONNECT_INSTAGRAM through permitted C05 Settings; Assistant asks Owner/Manager |
| PRESENTATION | PAGE / INLINE |
| RETRYABLE | AFTER_RECOVERY |

### 6

| Field | Value |
|---|---|
| BACKEND_CODE | REVALIDATION_REQUIRED |
| HTTP_OR_PROJECTION_CONTEXT | LOCKED projection; Submit conflict |
| VIEW_STATE | IG_REVALIDATION_REQUIRED |
| USER_COPY_INTENT | Check the existing Instagram authorization. |
| RECOVERY_ACTION | REVALIDATE_INSTAGRAM through permitted C05 Settings; Assistant asks Owner/Manager |
| PRESENTATION | PAGE / INLINE |
| RETRYABLE | AFTER_RECOVERY |

### 7

| Field | Value |
|---|---|
| BACKEND_CODE | RECONNECT_REQUIRED |
| HTTP_OR_PROJECTION_CONTEXT | LOCKED projection; Submit conflict |
| VIEW_STATE | IG_RECONNECT_REQUIRED |
| USER_COPY_INTENT | Reconnect the same Instagram identity. |
| RECOVERY_ACTION | RECONNECT_INSTAGRAM through permitted C05 Settings; Assistant asks Owner/Manager |
| PRESENTATION | PAGE / INLINE |
| RETRYABLE | AFTER_RECOVERY |

### 8

| Field | Value |
|---|---|
| BACKEND_CODE | PROVIDER_BLOCKED_RECOVERABLE |
| HTTP_OR_PROJECTION_CONTEXT | LOCKED projection; Submit conflict |
| VIEW_STATE | IG_PROVIDER_BLOCKED_RECOVERABLE |
| USER_COPY_INTENT | Instagram access needs a check; retry later if unavailable. |
| RECOVERY_ACTION | REVALIDATE_INSTAGRAM through permitted C05 Settings; Assistant asks Owner/Manager |
| PRESENTATION | PAGE / INLINE |
| RETRYABLE | AFTER_RECOVERY |

### 9

| Field | Value |
|---|---|
| BACKEND_CODE | DISCONNECTED_IDENTITY_RETAINED |
| HTTP_OR_PROJECTION_CONTEXT | LOCKED projection; Submit conflict |
| VIEW_STATE | IG_DISCONNECTED_IDENTITY_RETAINED |
| USER_COPY_INTENT | Reconnect the retained Instagram identity. |
| RECOVERY_ACTION | RECONNECT_INSTAGRAM through permitted C05 Settings; Assistant asks Owner/Manager |
| PRESENTATION | PAGE / INLINE |
| RETRYABLE | AFTER_RECOVERY |

### 10

| Field | Value |
|---|---|
| BACKEND_CODE | CONNECTED_HEALTHY |
| HTTP_OR_PROJECTION_CONTEXT | Success lifecycle; not error |
| VIEW_STATE | IG_CONNECTED_HEALTHY |
| USER_COPY_INTENT | Connected. |
| RECOVERY_ACTION | Continue backend entitlement evaluation |
| PRESENTATION | INLINE |
| RETRYABLE | NOT_APPLICABLE |

### 11

| Field | Value |
|---|---|
| BACKEND_CODE | ELIGIBILITY_INELIGIBLE |
| HTTP_OR_PROJECTION_CONTEXT | Restricted LOCKED / Submit conflict |
| VIEW_STATE | ENT_INELIGIBLE |
| USER_COPY_INTENT | This Opportunity is not available to this Creator. |
| RECOVERY_ACTION | Return to Opportunities without exposing eligibility evidence |
| PRESENTATION | PAGE |
| RETRYABLE | NO |

### 12

| Field | Value |
|---|---|
| BACKEND_CODE | ELIGIBILITY_UNAVAILABLE |
| HTTP_OR_PROJECTION_CONTEXT | Restricted LOCKED / Submit conflict |
| VIEW_STATE | ENT_UNAVAILABLE |
| USER_COPY_INTENT | Eligibility cannot be checked right now. |
| RECOVERY_ACTION | RETRY_LATER |
| PRESENTATION | PAGE / INLINE |
| RETRYABLE | LATER |

### 13

| Field | Value |
|---|---|
| BACKEND_CODE | INVITATION_REQUIRED |
| HTTP_OR_PROJECTION_CONTEXT | Policy LOCKED or proven-context validation/Submit conflict |
| VIEW_STATE | ENT_INVITATION_REQUIRED |
| USER_COPY_INTENT | A valid invitation is required. |
| RECOVERY_ACTION | Use valid secure invitation entry |
| PRESENTATION | PAGE / INLINE |
| RETRYABLE | NO |

### 14

| Field | Value |
|---|---|
| BACKEND_CODE | INVITATION_EXPIRED |
| HTTP_OR_PROJECTION_CONTEXT | Policy LOCKED or proven-context validation/Submit conflict |
| VIEW_STATE | ENT_INVITATION_EXPIRED |
| USER_COPY_INTENT | This invitation has expired. |
| RECOVERY_ACTION | Use a fresh invitation |
| PRESENTATION | PAGE / INLINE |
| RETRYABLE | NO |

### 15

| Field | Value |
|---|---|
| BACKEND_CODE | INVITATION_REVOKED |
| HTTP_OR_PROJECTION_CONTEXT | Policy LOCKED or proven-context validation/Submit conflict |
| VIEW_STATE | ENT_INVITATION_REVOKED |
| USER_COPY_INTENT | This invitation is no longer usable. |
| RECOVERY_ACTION | Return to Opportunities |
| PRESENTATION | PAGE / INLINE |
| RETRYABLE | NO |

### 16

| Field | Value |
|---|---|
| BACKEND_CODE | INVITATION_SUBJECT_MISMATCH |
| HTTP_OR_PROJECTION_CONTEXT | Policy LOCKED or proven-context validation/Submit conflict |
| VIEW_STATE | ENT_INVITATION_MISMATCH |
| USER_COPY_INTENT | Use the invited account. |
| RECOVERY_ACTION | USE_INVITED_ACCOUNT; never show identity |
| PRESENTATION | PAGE / INLINE |
| RETRYABLE | NO |

### 17

| Field | Value |
|---|---|
| BACKEND_CODE | INVITATION_ABSENT |
| HTTP_OR_PROJECTION_CONTEXT | Dynamic proven-context validation, distinct from unproven generic404 |
| VIEW_STATE | ENT_INVITATION_ABSENT |
| USER_COPY_INTENT | This invitation can no longer be resolved. |
| RECOVERY_ACTION | Use a valid fresh invitation |
| PRESENTATION | PAGE / INLINE |
| RETRYABLE | NO |

### 18

| Field | Value |
|---|---|
| BACKEND_CODE | INVITATION_IDENTITY_CONFIGURATION_UNAVAILABLE |
| HTTP_OR_PROJECTION_CONTEXT | 503 identity resolver |
| VIEW_STATE | UTIL_DEPENDENCY |
| USER_COPY_INTENT | Invitation entry is temporarily unavailable. |
| RECOVERY_ACTION | RETRY_LATER; no configuration diagnostic |
| PRESENTATION | PAGE |
| RETRYABLE | LATER |

### 19

| Field | Value |
|---|---|
| BACKEND_CODE | CREATOR_ENTRY_CONTINUATION_IDENTITY_CONFLICT |
| HTTP_OR_PROJECTION_CONTEXT | 409 continuation binding |
| VIEW_STATE | ENT_IDENTITY_CONFLICT |
| USER_COPY_INTENT | This entry belongs to a different Creator context. |
| RECOVERY_ACTION | Resolve correct account/workspace; no rebinding |
| PRESENTATION | PAGE |
| RETRYABLE | NO |

### 20

| Field | Value |
|---|---|
| BACKEND_CODE | CAMPAIGN_VISIBILITY_CONFIGURATION_INVALID |
| HTTP_OR_PROJECTION_CONTEXT | LOCKED projection |
| VIEW_STATE | ENT_CONFIGURATION |
| USER_COPY_INTENT | This Opportunity is unavailable. |
| RECOVERY_ACTION | Return; no private configuration detail |
| PRESENTATION | PAGE |
| RETRYABLE | NO |

### 21

| Field | Value |
|---|---|
| BACKEND_CODE | CAMPAIGN_APPLICATIONS_CLOSED |
| HTTP_OR_PROJECTION_CONTEXT | AUTHORIZED Apply block / Submit409 |
| VIEW_STATE | APPLY_CLOSED |
| USER_COPY_INTENT | This Campaign is not accepting Applications. |
| RECOVERY_ACTION | Read authorized dossier or My Applications |
| PRESENTATION | INLINE |
| RETRYABLE | NO |

### 22

| Field | Value |
|---|---|
| BACKEND_CODE | CAMPAIGN_COMMERCIAL_CONFIGURATION_INVALID |
| HTTP_OR_PROJECTION_CONTEXT | AUTHORIZED Apply block / Submit409 |
| VIEW_STATE | DOS_COMMERCIAL_UNAVAILABLE |
| USER_COPY_INTENT | Commercial details are unavailable for applying. |
| RECOVERY_ACTION | Keep other authorized detail; retry after correction |
| PRESENTATION | INLINE |
| RETRYABLE | AFTER_CORRECTION |

### 23

| Field | Value |
|---|---|
| BACKEND_CODE | CAMPAIGN_BRIEF_UNAVAILABLE |
| HTTP_OR_PROJECTION_CONTEXT | AUTHORIZED Apply block / Submit409 |
| VIEW_STATE | SEL_NONE_AVAILABLE |
| USER_COPY_INTENT | No Brief is currently available to select. |
| RECOVERY_ACTION | Read dossier; retry after correction |
| PRESENTATION | INLINE |
| RETRYABLE | AFTER_CORRECTION |

### 24

| Field | Value |
|---|---|
| BACKEND_CODE | CAMPAIGN_ASSET_NOT_ACTIVE |
| HTTP_OR_PROJECTION_CONTEXT | applicationSelection.reason; Submit conflict when reached |
| VIEW_STATE | SEL_ASSET_UNAVAILABLE |
| USER_COPY_INTENT | This Asset is not currently selectable. |
| RECOVERY_ACTION | Refresh choices and select available canonical pair |
| PRESENTATION | INLINE |
| RETRYABLE | AFTER_CORRECTION |

### 25

| Field | Value |
|---|---|
| BACKEND_CODE | BRIEF_NOT_PUBLISHED |
| HTTP_OR_PROJECTION_CONTEXT | applicationSelection.reason; Submit conflict when reached |
| VIEW_STATE | SEL_BRIEF_UNAVAILABLE |
| USER_COPY_INTENT | This Brief is not currently selectable. |
| RECOVERY_ACTION | Refresh choices and select available canonical pair |
| PRESENTATION | INLINE |
| RETRYABLE | AFTER_CORRECTION |

### 26

| Field | Value |
|---|---|
| BACKEND_CODE | BRIEF_DEFINITION_INCOMPLETE |
| HTTP_OR_PROJECTION_CONTEXT | applicationSelection.reason; Submit conflict when reached |
| VIEW_STATE | SEL_BRIEF_UNAVAILABLE |
| USER_COPY_INTENT | This Brief is not ready for Applications. |
| RECOVERY_ACTION | Refresh choices and select available canonical pair |
| PRESENTATION | INLINE |
| RETRYABLE | AFTER_CORRECTION |

### 27

| Field | Value |
|---|---|
| BACKEND_CODE | BRIEF_DELIVERABLE_GRAPH_INVALID |
| HTTP_OR_PROJECTION_CONTEXT | applicationSelection.reason; Submit conflict when reached |
| VIEW_STATE | SEL_BRIEF_UNAVAILABLE |
| USER_COPY_INTENT | This Brief is not ready for Applications. |
| RECOVERY_ACTION | Refresh choices and select available canonical pair |
| PRESENTATION | INLINE |
| RETRYABLE | AFTER_CORRECTION |

### 28

| Field | Value |
|---|---|
| BACKEND_CODE | APPLICATION_SELECTION_INVALID |
| HTTP_OR_PROJECTION_CONTEXT | 400 malformed strict body /409 ancestry mismatch |
| VIEW_STATE | SEL_MISMATCH |
| USER_COPY_INTENT | The selected Asset and Brief are no longer a valid pair. |
| RECOVERY_ACTION | Reload and explicitly review a valid pair |
| PRESENTATION | INLINE |
| RETRYABLE | AFTER_REVIEW |

### 29

| Field | Value |
|---|---|
| BACKEND_CODE | APPLICATION_IDEMPOTENCY_KEY_REQUIRED |
| HTTP_OR_PROJECTION_CONTEXT | 400 missing/invalid canonical key |
| VIEW_STATE | APPLY_KEY_REQUIRED |
| USER_COPY_INTENT | The request could not be submitted. |
| RECOVERY_ACTION | Correct integration and return to Review; do not expose key |
| PRESENTATION | INLINE |
| RETRYABLE | AFTER_CORRECTION |

### 30

| Field | Value |
|---|---|
| BACKEND_CODE | APPLICATION_IDEMPOTENCY_KEY_REUSED |
| HTTP_OR_PROJECTION_CONTEXT | 409 changed fingerprint in receipt scope |
| VIEW_STATE | APPLY_KEY_REUSED |
| USER_COPY_INTENT | The selection changed; review it before submitting. |
| RECOVERY_ACTION | New explicit intent uses new key; never auto-resubmit |
| PRESENTATION | INLINE |
| RETRYABLE | AFTER_REVIEW |

### 31

| Field | Value |
|---|---|
| BACKEND_CODE | APPLICATION_OPPORTUNITY_ALREADY_USED |
| HTTP_OR_PROJECTION_CONTEXT | Apply block /Submit409 |
| VIEW_STATE | APPLY_SAME_USED |
| USER_COPY_INTENT | An Application already exists for this selection. |
| RECOVERY_ACTION | View independent Applications; no campaign-wide already_applied |
| PRESENTATION | INLINE |
| RETRYABLE | NO |

### 32

| Field | Value |
|---|---|
| BACKEND_CODE | APPLICATION_CAMPAIGN_LIMIT_REACHED |
| HTTP_OR_PROJECTION_CONTEXT | Apply block /Submit409 |
| VIEW_STATE | APPLY_CAMPAIGN_QUOTA |
| USER_COPY_INTENT | The Campaign Application limit has been reached. |
| RECOVERY_ACTION | View My Applications; 2 non-WITHDRAWN limit |
| PRESENTATION | INLINE |
| RETRYABLE | NO |

### 33

| Field | Value |
|---|---|
| BACKEND_CODE | APPLICATION_BRAND_LIMIT_REACHED |
| HTTP_OR_PROJECTION_CONTEXT | Apply block /Submit409 |
| VIEW_STATE | APPLY_BRAND_QUOTA |
| USER_COPY_INTENT | The Brand Application limit has been reached. |
| RECOVERY_ACTION | View My Applications; 5 non-WITHDRAWN limit |
| PRESENTATION | INLINE |
| RETRYABLE | NO |

### 34

| Field | Value |
|---|---|
| BACKEND_CODE | APPLICATION_ROLE_DENIED |
| HTTP_OR_PROJECTION_CONTEXT | Apply projection block or command403 |
| VIEW_STATE | APPLY_ROLE_LOST / WITHDRAW_FAILURE |
| USER_COPY_INTENT | Your current team permissions do not allow this action. |
| RECOVERY_ACTION | Refresh actor and projection; Assistant never Withdraw |
| PRESENTATION | INLINE / DIALOG |
| RETRYABLE | NO |

### 35

| Field | Value |
|---|---|
| BACKEND_CODE | CREATOR_WORKSPACE_SELECTION_REQUIRED |
| HTTP_OR_PROJECTION_CONTEXT | 409 shared C05 actor resolver |
| VIEW_STATE | OC_CONTEXT_RECOVERY / UTIL_PERMISSION |
| USER_COPY_INTENT | Your current Creator workspace needs attention before continuing. |
| RECOVERY_ACTION | Use existing account/team recovery; no first-workspace default or frontend identity repair |
| PRESENTATION | PAGE |
| RETRYABLE | AFTER_RECOVERY |

### 36

| Field | Value |
|---|---|
| BACKEND_CODE | CREATOR_OWNER_MEMBERSHIP_INCONSISTENT |
| HTTP_OR_PROJECTION_CONTEXT | 409 shared C05 actor resolver |
| VIEW_STATE | OC_CONTEXT_RECOVERY / UTIL_PERMISSION |
| USER_COPY_INTENT | Your current Creator workspace needs attention before continuing. |
| RECOVERY_ACTION | Use existing account/team recovery; no first-workspace default or frontend identity repair |
| PRESENTATION | PAGE |
| RETRYABLE | AFTER_RECOVERY |

### 37

| Field | Value |
|---|---|
| BACKEND_CODE | CREATOR_CANONICAL_CONTEXT_INCONSISTENT |
| HTTP_OR_PROJECTION_CONTEXT | 409 shared C05 actor resolver |
| VIEW_STATE | OC_CONTEXT_RECOVERY / UTIL_PERMISSION |
| USER_COPY_INTENT | Your current Creator workspace needs attention before continuing. |
| RECOVERY_ACTION | Use existing account/team recovery; no first-workspace default or frontend identity repair |
| PRESENTATION | PAGE |
| RETRYABLE | AFTER_RECOVERY |

### 38

| Field | Value |
|---|---|
| BACKEND_CODE | CREATOR_ONE_OWNER_INVARIANT_VIOLATED |
| HTTP_OR_PROJECTION_CONTEXT | 409 shared C05 actor resolver |
| VIEW_STATE | OC_CONTEXT_RECOVERY / UTIL_PERMISSION |
| USER_COPY_INTENT | Your current Creator workspace needs attention before continuing. |
| RECOVERY_ACTION | Use existing account/team recovery; no first-workspace default or frontend identity repair |
| PRESENTATION | PAGE |
| RETRYABLE | AFTER_RECOVERY |

### 39

| Field | Value |
|---|---|
| BACKEND_CODE | CREATOR_OWNER_IDENTITY_RECONCILIATION_REQUIRED |
| HTTP_OR_PROJECTION_CONTEXT | 409 shared C05 actor resolver |
| VIEW_STATE | OC_CONTEXT_RECOVERY / UTIL_PERMISSION |
| USER_COPY_INTENT | Your current Creator workspace needs attention before continuing. |
| RECOVERY_ACTION | Use existing account/team recovery; no first-workspace default or frontend identity repair |
| PRESENTATION | PAGE |
| RETRYABLE | AFTER_RECOVERY |

### 40

| Field | Value |
|---|---|
| BACKEND_CODE | APPLICATION_NOT_FOUND |
| HTTP_OR_PROJECTION_CONTEXT | 404 non-enumerating current subject lookup |
| VIEW_STATE | HIST_NOT_FOUND |
| USER_COPY_INTENT | This Application is unavailable. |
| RECOVERY_ACTION | Return to My Applications |
| PRESENTATION | PAGE |
| RETRYABLE | NO |

### 41

| Field | Value |
|---|---|
| BACKEND_CODE | APPLICATION_TRANSITION_CONFLICT |
| HTTP_OR_PROJECTION_CONTEXT | 409 terminal transition lost/no longer Pending |
| VIEW_STATE | WITHDRAW_CONFLICT |
| USER_COPY_INTENT | This Application changed before the action completed. |
| RECOVERY_ACTION | Refresh authoritative row; no force transition |
| PRESENTATION | DIALOG / INLINE |
| RETRYABLE | AFTER_REFRESH |

### 42

| Field | Value |
|---|---|
| BACKEND_CODE | LEGACY_APPLICATION_RECONCILIATION_REQUIRED |
| HTTP_OR_PROJECTION_CONTEXT | Apply capability/Submit conflict |
| VIEW_STATE | UTIL_LEGACY_RECONCILIATION |
| USER_COPY_INTENT | This Application cannot proceed yet. |
| RECOVERY_ACTION | Read existing history; no browser migration |
| PRESENTATION | INLINE |
| RETRYABLE | AFTER_CORRECTION |

### 43

| Field | Value |
|---|---|
| BACKEND_CODE | LEGACY_APPLICATION_ENDPOINT_RETIRED |
| HTTP_OR_PROJECTION_CONTEXT | 410 retired Creator Apply route |
| VIEW_STATE | UTIL_LEGACY_RECONCILIATION |
| USER_COPY_INTENT | This older application entry is no longer supported. |
| RECOVERY_ACTION | Open canonical Opportunity; never fallback to retired API |
| PRESENTATION | PAGE |
| RETRYABLE | NO |

### 44

| Field | Value |
|---|---|
| BACKEND_CODE | C03_APPLICATION_HANDOFF_EVIDENCE_INVALID |
| HTTP_OR_PROJECTION_CONTEXT | 409 Brand approval path; not emitted as Creator approval command |
| VIEW_STATE | HANDOFF_INVALID (defensive display only) |
| USER_COPY_INTENT | Application approval could not complete. |
| RECOVERY_ACTION | Brand authority handles correction; C03 Creator UI only refreshes history if invalid read |
| PRESENTATION | INLINE (Brand owner surface only) |
| RETRYABLE | AFTER_CORRECTION |

### 45

| Field | Value |
|---|---|
| BACKEND_CODE | C03_APPLICATION_CREATOR_IDENTITY_CONFLICT |
| HTTP_OR_PROJECTION_CONTEXT | 409 Brand approval path; not emitted as Creator approval command |
| VIEW_STATE | HANDOFF_INVALID (defensive display only) |
| USER_COPY_INTENT | Application approval could not complete. |
| RECOVERY_ACTION | Brand authority handles correction; C03 Creator UI only refreshes history if invalid read |
| PRESENTATION | INLINE (Brand owner surface only) |
| RETRYABLE | AFTER_CORRECTION |

### 46

| Field | Value |
|---|---|
| BACKEND_CODE | OPPORTUNITY_CURSOR_INVALID |
| HTTP_OR_PROJECTION_CONTEXT | 400 collection cursor |
| VIEW_STATE | OC_CURSOR_ERROR |
| USER_COPY_INTENT | This page could not be loaded. |
| RECOVERY_ACTION | Reload first Opportunity page |
| PRESENTATION | INLINE |
| RETRYABLE | YES_FIRST_PAGE |

### 47

| Field | Value |
|---|---|
| BACKEND_CODE | APPLICATION_CURSOR_INVALID |
| HTTP_OR_PROJECTION_CONTEXT | 400 collection cursor |
| VIEW_STATE | HIST_CURSOR_ERROR |
| USER_COPY_INTENT | This page could not be loaded. |
| RECOVERY_ACTION | Reload first Application page |
| PRESENTATION | INLINE |
| RETRYABLE | YES_FIRST_PAGE |

### 48

| Field | Value |
|---|---|
| BACKEND_CODE | NO_CODE; message=Creator access required |
| HTTP_OR_PROJECTION_CONTEXT | 403 shared C05 |
| VIEW_STATE | UTIL_PERMISSION |
| USER_COPY_INTENT | Your current account cannot access this Creator workspace. |
| RECOVERY_ACTION | Clear private state; resolve current active Creator membership |
| PRESENTATION | PAGE |
| RETRYABLE | AFTER_RECOVERY |

### 49

| Field | Value |
|---|---|
| BACKEND_CODE | NO_CODE; message=An active Creator account is required |
| HTTP_OR_PROJECTION_CONTEXT | 403 shared C05 |
| VIEW_STATE | UTIL_PERMISSION |
| USER_COPY_INTENT | Your current account cannot access this Creator workspace. |
| RECOVERY_ACTION | Clear private state; resolve current active Creator membership |
| PRESENTATION | PAGE |
| RETRYABLE | AFTER_RECOVERY |

### 50

| Field | Value |
|---|---|
| BACKEND_CODE | NO_CODE; message=No active Creator workspace membership |
| HTTP_OR_PROJECTION_CONTEXT | 403 shared C05 |
| VIEW_STATE | UTIL_PERMISSION |
| USER_COPY_INTENT | Your current account cannot access this Creator workspace. |
| RECOVERY_ACTION | Clear private state; resolve current active Creator membership |
| PRESENTATION | PAGE |
| RETRYABLE | AFTER_RECOVERY |

### 51

| Field | Value |
|---|---|
| BACKEND_CODE | NO_CODE; message=Notification not found |
| HTTP_OR_PROJECTION_CONTEXT | 404 recipient read-mark missing/cross-scope |
| VIEW_STATE | NOTIF_MARK_FAILED |
| USER_COPY_INTENT | This notification is unavailable. |
| RECOVERY_ACTION | Refresh own list; no cross-scope disclosure |
| PRESENTATION | INLINE |
| RETRYABLE | NO |

### 52

| Field | Value |
|---|---|
| BACKEND_CODE | NO_CODE; message=Notification limit must be between 1 and 100 |
| HTTP_OR_PROJECTION_CONTEXT | 400 notification limit |
| VIEW_STATE | NOTIF_LIST_FAILED |
| USER_COPY_INTENT | Notifications could not be loaded. |
| RECOVERY_ACTION | Use accepted fixed default 50 or integer1..100; no user raw query input |
| PRESENTATION | INLINE |
| RETRYABLE | AFTER_CORRECTION |

### 53

| Field | Value |
|---|---|
| BACKEND_CODE | NO_CODE; message=Brand Centre is available to active brand users only |
| HTTP_OR_PROJECTION_CONTEXT | 403 existing Brand surface only |
| VIEW_STATE | OUTSIDE_CREATOR_C03 |
| USER_COPY_INTENT | Use existing Brand access/unavailable copy. |
| RECOVERY_ACTION | No Creator integration with Brand endpoints |
| PRESENTATION | PAGE (Brand only) |
| RETRYABLE | NO |

### 54

| Field | Value |
|---|---|
| BACKEND_CODE | NO_CODE; message=Active Brand team membership required |
| HTTP_OR_PROJECTION_CONTEXT | 403 existing Brand surface only |
| VIEW_STATE | OUTSIDE_CREATOR_C03 |
| USER_COPY_INTENT | Use existing Brand access/unavailable copy. |
| RECOVERY_ACTION | No Creator integration with Brand endpoints |
| PRESENTATION | PAGE (Brand only) |
| RETRYABLE | NO |

### 55

| Field | Value |
|---|---|
| BACKEND_CODE | NO_CODE; message=Campaign not found |
| HTTP_OR_PROJECTION_CONTEXT | 404 existing Brand surface only |
| VIEW_STATE | OUTSIDE_CREATOR_C03 |
| USER_COPY_INTENT | Use existing Brand access/unavailable copy. |
| RECOVERY_ACTION | No Creator integration with Brand endpoints |
| PRESENTATION | PAGE (Brand only) |
| RETRYABLE | NO |

### 56

| Field | Value |
|---|---|
| BACKEND_CODE | NO_CODE; message=Brand profile not found |
| HTTP_OR_PROJECTION_CONTEXT | 404 existing Brand surface only |
| VIEW_STATE | OUTSIDE_CREATOR_C03 |
| USER_COPY_INTENT | Use existing Brand access/unavailable copy. |
| RECOVERY_ACTION | No Creator integration with Brand endpoints |
| PRESENTATION | PAGE (Brand only) |
| RETRYABLE | NO |

### 57

| Field | Value |
|---|---|
| BACKEND_CODE | C03_CANONICAL_APPLICATION_HANDOFF_NOT_AVAILABLE |
| HTTP_OR_PROJECTION_CONTEXT | Defensive missing optional dependency; accepted module supplies it |
| VIEW_STATE | OUTSIDE_NORMAL_P14 |
| USER_COPY_INTENT | Action temporarily unavailable. |
| RECOVERY_ACTION | No normal Creator state or fallback synthesized |
| PRESENTATION | INLINE (Brand only) |
| RETRYABLE | AFTER_CORRECTION |

### 58

| Field | Value |
|---|---|
| BACKEND_CODE | NO_CODE; message=C03_LEGACY_APPLICATION_SHAPE_INVALID |
| HTTP_OR_PROJECTION_CONTEXT | 409 legacy adapter message, not code field |
| VIEW_STATE | OUTSIDE_CREATOR_CANONICAL_HISTORY |
| USER_COPY_INTENT | This legacy Application cannot be shown. |
| RECOVERY_ACTION | Do not cast legacy records to canonical |
| PRESENTATION | INLINE (legacy Brand adapter only) |
| RETRYABLE | NO |

### 59

| Field | Value |
|---|---|
| BACKEND_CODE | APPLICATION_EXPIRY_BATCH_TOO_LARGE |
| HTTP_OR_PROJECTION_CONTEXT | Internal only; no public route |
| VIEW_STATE | NOT_FRONTEND_CONSUMABLE |
| USER_COPY_INTENT | No frontend copy. |
| RECOVERY_ACTION | Exclude from public API error union |
| PRESENTATION | NONE |
| RETRYABLE | NOT_APPLICABLE |

### 60

| Field | Value |
|---|---|
| BACKEND_CODE | NO_CODE; framework authentication response |
| HTTP_OR_PROJECTION_CONTEXT | 401 after authenticatedFetch single refresh |
| VIEW_STATE | UTIL_SESSION |
| USER_COPY_INTENT | Sign in to continue. |
| RECOVERY_ACTION | Clear scope; safe internal return |
| PRESENTATION | PAGE |
| RETRYABLE | AFTER_AUTH |

### 61

| Field | Value |
|---|---|
| BACKEND_CODE | NO_CODE; framework UUID validation response |
| HTTP_OR_PROJECTION_CONTEXT | 400 UUID pipe |
| VIEW_STATE | UTIL_MALFORMED |
| USER_COPY_INTENT | This link or request is invalid. |
| RECOVERY_ACTION | Return to safe collection; do not echo input |
| PRESENTATION | PAGE |
| RETRYABLE | NO |

### 62

| Field | Value |
|---|---|
| BACKEND_CODE | NO_CODE; framework throttling response |
| HTTP_OR_PROJECTION_CONTEXT | 429 |
| VIEW_STATE | UTIL_THROTTLED |
| USER_COPY_INTENT | Please wait before trying again. |
| RECOVERY_ACTION | Honor Retry-After when supplied; bounded explicit retry |
| PRESENTATION | INLINE |
| RETRYABLE | LATER |

## C03_FRONTEND_SEMANTIC_PROOF_V1

### 1

| Field | Value |
|---|---|
| HAZARD | Marketplace/global enumeration |
| FROZEN_INVARIANT | No Creator Marketplace destination; current Opportunities only returned AUTHORIZED candidates; public direct Campaign entry only. |
| STATE_FAMILIES | OC_*; PUBLIC_* |
| P4_RECONCILIATION | Legacy discovery APIs, filter drawer and public browsing removed from reachable C03. |
| P2_SEMANTIC_GATE | PASS_AS_PROPOSED_CONTRACT; CURRENT_RUNTIME_NOT_ACCEPTED |

### 2

| Field | Value |
|---|---|
| HAZARD | Matching/ranking |
| FROZEN_INVARIANT | Backend collection ID order and opaque cursor; no score or arbitrary sorting. |
| STATE_FAMILIES | OC_READY; OC_PAGINATION |
| P4_RECONCILIATION | Remove match_score_percent and matching filters; preserve card grid. |
| P2_SEMANTIC_GATE | PASS_AS_PROPOSED_CONTRACT; CURRENT_RUNTIME_NOT_ACCEPTED |

### 3

| Field | Value |
|---|---|
| HAZARD | Disclosure |
| FROZEN_INVARIANT | TEASER only safe id/name/platforms; LOCKED only reason/recovery; AUTHORIZED contains detailed commercial and Brief. |
| STATE_FAMILIES | PUBLIC_*; ENT_*; DOS_* |
| P4_RECONCILIATION | Model discriminant; do not prefetch/hydrate hidden commercial/Brief DOM; discard protected cache on identity/entitlement change. Existing blur is a placeholder, not evidence of safety for the legacy full DTO. |
| P2_SEMANTIC_GATE | PASS_AS_PROPOSED_CONTRACT; CURRENT_RUNTIME_NOT_ACCEPTED |

### 4

| Field | Value |
|---|---|
| HAZARD | Credentials |
| FROZEN_INVARIANT | Fragment -> cleanup -> one secure POST -> opaque C01 cookie -> safe internal return; no raw query/path/storage/analytics. |
| STATE_FAMILIES | PUBLIC_CONTINUATION_* |
| P4_RECONCILIATION | Read transient fragment and history.replaceState synchronously before analytics/media/external fetch; suppress logging, no navigation-state/sessionStorage/localStorage credential persistence. Lost credential after failed/uncertain exchange may require fresh link; no new token store. |
| P2_SEMANTIC_GATE | PASS_AS_PROPOSED_CONTRACT; CURRENT_RUNTIME_NOT_ACCEPTED |

### 5

| Field | Value |
|---|---|
| HAZARD | Apply inputs |
| FROZEN_INVARIANT | Strict campaignAssetId/briefId; no generic pitch, proposed amount, shipping/contact questionnaire or legal/escrow checkbox. |
| STATE_FAMILIES | SEL_*; APPLY_* |
| P4_RECONCILIATION | Reconcile Wizard; no first-stocked-product or independent Brief default. |
| P2_SEMANTIC_GATE | PASS_AS_PROPOSED_CONTRACT; CURRENT_RUNTIME_NOT_ACCEPTED |

### 6

| Field | Value |
|---|---|
| HAZARD | Stock and canonical selection |
| FROZEN_INVARIANT | ACTIVE Asset + backend AVAILABLE Brief selection; BRAND-only valid. |
| STATE_FAMILIES | SEL_* |
| P4_RECONCILIATION | No inventory_count/out_of_stock/quota-as-stock condition. |
| P2_SEMANTIC_GATE | PASS_AS_PROPOSED_CONTRACT; CURRENT_RUNTIME_NOT_ACCEPTED |

### 7

| Field | Value |
|---|---|
| HAZARD | Commercials |
| FROZEN_INVARIANT | Read exact fixed/negotiable Brand offer in currency; authored zero real; null/unavailable never zero. |
| STATE_FAMILIES | DOS_COMMERCIAL_*; APPLY_REVIEW |
| P4_RECONCILIATION | No Creator proposed amount; support shown independently, optional estimate honest. Negotiation only later in C04. |
| P2_SEMANTIC_GATE | PASS_AS_PROPOSED_CONTRACT; CURRENT_RUNTIME_NOT_ACCEPTED |

### 8

| Field | Value |
|---|---|
| HAZARD | Independent history |
| FROZEN_INVARIANT | Snapshot per applicationId; PENDING/APPROVED/REJECTED/WITHDRAWN/EXPIRED and bounded SUPERSEDED; multiple sibling approvals. |
| STATE_FAMILIES | HIST_*; HANDOFF_MULTIPLE |
| P4_RECONCILIATION | No already_applied, campaign-wide dedup or supersession. Old closed Collaboration rows are not Applications. |
| P2_SEMANTIC_GATE | PASS_AS_PROPOSED_CONTRACT; CURRENT_RUNTIME_NOT_ACCEPTED |

### 9

| Field | Value |
|---|---|
| HAZARD | Role |
| FROZEN_INVARIANT | All current three roles view/apply; only backend-authorized Owner/Manager pending Withdraw. |
| STATE_FAMILIES | ROLE_*; WITHDRAW_* |
| P4_RECONCILIATION | Extend known C03 actor actions; preserve current identity resolution; Assistant has no Settings CTA or Withdraw. |
| P2_SEMANTIC_GATE | PASS_AS_PROPOSED_CONTRACT; CURRENT_RUNTIME_NOT_ACCEPTED |

### 10

| Field | Value |
|---|---|
| HAZARD | Historical Instagram independence |
| FROZEN_INVARIANT | History, detail, notifications and approved C04 links do not require current usable IG. |
| STATE_FAMILIES | HIST_IG_*; NOTIF_IG_*; HANDOFF_* |
| P4_RECONCILIATION | Move outside RequireCreatorPlatformAccess; preserve RequireAuth/current team/C04 role checks. |
| P2_SEMANTIC_GATE | PASS_AS_PROPOSED_CONTRACT; CURRENT_RUNTIME_NOT_ACCEPTED |

### 11

| Field | Value |
|---|---|
| HAZARD | Idempotency |
| FROZEN_INVARIANT | Canonical Idempotency-Key grammar22–128 URL-safe chars; same command intent/fingerprint preserves key on explicit retry. |
| STATE_FAMILIES | APPLY_REPLAY; WITHDRAW_REPLAY |
| P4_RECONCILIATION | Use crypto-random key in command intent; no raw logging; changed selection requires new explicit Review/key;401 shared retry keeps headers. |
| P2_SEMANTIC_GATE | PASS_AS_PROPOSED_CONTRACT; CURRENT_RUNTIME_NOT_ACCEPTED |

### 12

| Field | Value |
|---|---|
| HAZARD | C04 boundary |
| FROZEN_INVARIANT | Only exact Collaboration link from immutable accepted record; no execution commands in C03. |
| STATE_FAMILIES | HANDOFF_* |
| P4_RECONCILIATION | Use /creator/collaborations?thread=ID, no negotiation/shipping/content review/payout controls. |
| P2_SEMANTIC_GATE | PASS_AS_PROPOSED_CONTRACT; CURRENT_RUNTIME_NOT_ACCEPTED |

### 13

| Field | Value |
|---|---|
| HAZARD | Notification boundary |
| FROZEN_INVARIANT | Required recipient in-app history/read/count; no assumed email opt-in or new global notification framework. |
| STATE_FAMILIES | NOTIF_* |
| P4_RECONCILIATION | Current bell+bounded drawer; safe ID payload only; approved/rejected types; no withdrawn/expired notice invented. |
| P2_SEMANTIC_GATE | PASS_AS_PROPOSED_CONTRACT; CURRENT_RUNTIME_NOT_ACCEPTED |

### 14

| Field | Value |
|---|---|
| HAZARD | P5 boundary |
| FROZEN_INVARIANT | Brief Pack endpoint not in accepted P1. |
| STATE_FAMILIES | BRIEF_PACK_DEFERRED |
| P4_RECONCILIATION | No download endpoint or speculative CTA; rich immutable Brief read remains available. |
| P2_SEMANTIC_GATE | PASS_AS_PROPOSED_CONTRACT; CURRENT_RUNTIME_NOT_ACCEPTED |

## C03_UIUX_DESIGN_GAP_REGISTER_V1

### 1

| Field | Value |
|---|---|
| GAP_ID | NONE |
| STATUS | NO_UIUX_GAP |
| EVIDENCE | Current shell/cards/review flow; accepted Phase7 reference inputs; C04 context drawer; Aurora v5 semantic and responsive patterns cover every registered state. |
| STITCH_RECOMMENDATION | NOT_REQUIRED |
| LIMITATION | P2 composition feasibility only. Legacy source is not accepted C03 runtime; specified P4 corrections remain mandatory. |
| NEXT_BOUNDARY | SA_REVIEW_ONLY |

## Execution boundary

At the original P2 binding, P3 was the next checkpoint and NOT STARTED. The P3 acceptance overlay below supersedes that execution checkpoint only. P4/P5 remain NOT STARTED. Stop at SA_REVIEW_ONLY.

Systems Architect acceptance SHA =
c821d5b55194c50726a0b253ad32f211a3097682

## P3 acceptance — P4 backend runtime integration authority

Authorization: `C03_P3_DURABLE_BACKEND_RUNTIME_ACCEPTANCE_BINDING_V1`. P2 state-family register remains frontend state authority; `C03_BACKEND_API_STATE_CONTRACT_V1` remains semantic/state authority. No P2 state, route, UI or Product decision changes.

```text
P4_BACKEND_RUNTIME_INTEGRATION_AUTHORITY = 8bedbebf9712b6ffe0acb11339813787ef669e62
P4_BACKEND_RUNTIME_TREE = 0c9a87f688388533911730b4b77cbc08f75c640b
P1_BACKEND_SEMANTIC_ACCEPTED_SHA = 4b51d52de6d9206545b0a38497c7436bc9d3e095
P1_BACKEND_SEMANTIC_ACCEPTED_TREE = 0df8adf9a4a45089918dc0f5d3cccd9f4317fede
P3_BACKEND_RUNTIME_ACCEPTED_SHA = 8bedbebf9712b6ffe0acb11339813787ef669e62
P3_BACKEND_RUNTIME_ACCEPTED_TREE = 0c9a87f688388533911730b4b77cbc08f75c640b
P3_RUNTIME_PARENT_SHA = 4b51d52de6d9206545b0a38497c7436bc9d3e095
P1 = PASS
P2 = PASS
P3 = PASS
LAST_ACCEPTED_CHECKPOINT = P3
CURRENT_CHECKPOINT = P4
P3_RUNTIME_ACCEPTED_BACKEND_SHA = 8bedbebf9712b6ffe0acb11339813787ef669e62
P3_RUNTIME_ACCEPTED_BACKEND_TREE = 0c9a87f688388533911730b4b77cbc08f75c640b
P4_ARCHITECTURAL_ELIGIBILITY = YES
P4_STATE = NOT STARTED AT TIME OF P3 ACCEPTANCE BINDING
P4_EXECUTION = NOT AUTHORIZED BY THIS ASSIGNMENT
P5_STATE = NOT STARTED
NEXT_AUTHORIZED_BOUNDARY = SA_REVIEW_ONLY
```

The P3 runtime is the direct transport/security correction descendant of the P1 semantic backend. Product and API/state semantics remain unchanged. The accepted Opportunity private/no-store and Authorization/Cookie variance now survive guard rejection, preserving CORS Origin. P4 must integrate against this runtime while preserving the frozen semantic contract and P2 state-family register.

[Backend runtime acceptance overlay](c03_backend_api_state_contract_v1.md#p3_runtime_acceptance_overlay) and [verbatim V4 report](../../../ai-collaboration/c03-p3-backend-runtime-acceptance-report-v4.md) supply the accepted backend evidence. P4 architectural eligibility is YES; implementation is NOT STARTED and is not authorized by this assignment. P5 is NOT STARTED. No frontend source is modified.

Systems Architect acceptance SHA = c32841516330f37f19effc63423317619ec1ecd5

## P4_RUNTIME_ACCEPTANCE_OVERLAY

Authorization: `C03_P4_DURABLE_FRONTEND_ACCEPTANCE_BINDING_V1`. This overlay binds the accepted executable P4 realization without changing the frozen P2 state, design, interaction, Product, or backend semantic authority.

```text
P2_FRONTEND_STATE_AUTHORITY = UNCHANGED
P4_FRONTEND_RUNTIME_ACCEPTED_SHA = cbba723f10ca3a6df06e1feba263fe14a03ddc28
P4_FRONTEND_RUNTIME_ACCEPTED_TREE = cfa23e89e5132a743b60f09df6c901f4a2ed0a77
P4_RUNTIME_PARENT = 66d6a9bc992afcdfb900d7837defd867670bf640
BACKEND_INTEGRATION_AUTHORITY = 8bedbebf9712b6ffe0acb11339813787ef669e62
SEMANTIC_CONTRACT_DELTA = NONE
STITCH = NOT_USED
```

P2 remains the state, design, and interaction authority. P4 is the accepted executable frontend realization of that authority. The accepted P4 runtime preserves the canonical Campaign routes, actor/action separation, route-guard decomposition, public-entry redaction, secure invitation continuation, Opportunity and Apply behavior, immutable history, projected Withdraw authority, Collaboration handoff, Creator notifications, subject-aware private-state clearing, responsive behavior, accessibility, and no-image behavior.

```text
TYPECHECK = PASS
FULL_TEST_SUITE = 952 passed / 118 files / 0 failed
PRODUCTION_BUILD = PASS
CHANGED_FILE_LINT = PASS
FULL_LINT = BASELINE_DEBT_UNCHANGED
BASELINE_LINT_ERRORS = 26
BASELINE_LINT_WARNINGS = 13
P4_LINT_BLOCKER = NO
P4_LINT_DEBT = PRE_EXISTING_REPOSITORY_DEBT
P4_CORRECTION_COUNT = 2
P4_CORRECTION_BUDGET_REMAINING = 0
```

The unchanged full-lint debt is non-blocking and is not classified as a P4 change. The external evidence ZIP is `C03_P4_FRONTEND_ACCEPTANCE_EVIDENCE.zip`, SHA-256 `aa1f99dd5a8a61f988e3ee5a1ccd71f526493d8303dd65885a364b0801924792`. Browser and real-backend acceptance used backend `8bedbebf9712b6ffe0acb11339813787ef669e62` and frontend `cbba723f10ca3a6df06e1feba263fe14a03ddc28`.

```text
P5_FRONTEND_SHELL_AUTHORITY = cbba723f10ca3a6df06e1feba263fe14a03ddc28
P5_BACKEND_BASE_AUTHORITY = 8bedbebf9712b6ffe0acb11339813787ef669e62
P5_STATE = NOT STARTED
P6_STATE = NOT STARTED
P7_STATE = NOT STARTED
NEXT_AUTHORIZED_BOUNDARY = SA_REVIEW_ONLY
```

P5 may build Creator Brief Pack on these exact accepted surfaces only after separate authorization. This binding performs no P5 implementation.

Systems Architect acceptance SHA =
PENDING_P4_ACCEPTANCE_RECORD_SHA
