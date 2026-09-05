# C03_P2_FRONTEND_STATE_AND_REUSE_PREFLIGHT_REPORT_V1

P2 state/reuse/design preflight proposal for Systems Architect review. No implementation or new design execution. The PASS fields describe completeness and feasibility of this proposed contract; they do not accept the legacy frontend as a functioning C03 implementation.

```text
RESULT = READY_FOR_SA_REVIEW
RECOVERY_AUTHORITY_SHA = 706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb
P1_BACKEND_ACCEPTED_SHA = 4b51d52de6d9206545b0a38497c7436bc9d3e095
BACKEND_API_STATE_CONTRACT = FROZEN
FRONTEND_REPOSITORY = Piyush1087/creator-commerce-frontend-v2-clone
FRONTEND_BRANCH = development
FRONTEND_SHA = 323658d4b147b95b5629ff8d91fa90b8fe9077e4
FRONTEND_TREE = 4ff40849c64a98429a89cc8e4f1ff6949815070c
C03_FRONTEND_STATE_FAMILY_REGISTER = COMPLETE
C03_FRONTEND_ROUTE_SCREEN_REGISTER = COMPLETE
C03_CURRENT_FRONTEND_REUSE_AUDIT = PASS
C03_STALE_FRONTEND_SEMANTICS_REGISTER = PASS
C03_ACCEPTED_REFERENCE_REUSE_AUDIT = PASS
C03_AURORA_CONSTRUCTION_ASSESSMENT = PASS
C03_UIUX_DESIGN_GAP_REGISTER = NONE — NO_UIUX_GAP
P2_STITCH_DECISION_RECOMMENDATION = NOT_REQUIRED
P2_REQUIRED_VISUAL_AUTHORITY_STATUS = COMPLETE_WITHOUT_NEW_DESIGN
P2_FRONTEND_SEMANTIC_GATE = PASS
P2_ACCESSIBILITY_CONTRACT = COMPLETE
P2_RESPONSIVE_CONTRACT = COMPLETE
KNOWN_LEGACY_MARKETPLACE_SEMANTICS = SEMANTICS_REJECTED; VISUAL_STRUCTURE_REUSABLE; every matched occurrence individually classified in full register
KNOWN_ROUTE_WIDE_INSTAGRAM_GUARD = RECONCILE_IN_P4: canonical C03 routes and historical C04 handoff outside RequireCreatorPlatformAccess; preserve RequireAuth/current C05/C04 authority
FRONTEND_WORKTREE_CHANGED = NO
BACKEND_WORKTREE_CHANGED = NO
AUTHORITY_REPO_CHANGED = NO
FILES_MODIFIED = NONE
COMMITS = NONE
PUSH = NONE
PRODUCT_QUESTIONS = NONE
BACKEND_CONTRACT_GAPS = NONE
DESIGN_GAPS = NONE
NEXT_AUTHORIZED_BOUNDARY = SA_REVIEW_ONLY
P3_STARTED = NO
P4_STARTED = NO
P5_STARTED = NO
```

## Evidence and inspection scope

Fetched/pruned frontend origin before analysis and verified origin/development at the required SHA/tree. Inspected a clean detached worktree at that exact commit; the original checkout was not switched or reset. Read frozen Product/architecture/finite-plan/backend-contract/ledger and worker charters, frontend AGENTS/LAYOUT_DIRECTIVES/DESIGN_SYSTEM, relevant intake notes, current source and accepted reference registry. Backend authority remains the exact accepted SHA/tree with 79 migrations. Repository references below are relative paths bound to the stated commit, not proposed new files.

Static source inspection plus two existing accepted-runtime PNGs (Creator Brand context drawer and Creator mobile inbox) were used. Phase7 HTML reference structure and acceptance registry were inspected without executing remote scripts. No new browser rendering, installs, builds, tests, Playwright acceptance, Stitch, UI/UX worker, frontend edits or backend operations were performed in P2. Unavailable original June24 Stitch exports are explicitly excluded as independent accepted authority.

## Findings and proposed boundary

The current card/grid/detail/review/history geometry and accepted Campaign/C04 visual references are sufficient. P4 must replace stale endpoint/DTO consumption and reconcile selection, disclosure, role and history semantics; file names alone do not justify a rewrite. Existing SideDrawer/Tabs/SelectionCard/Alert primitives need the bounded accessibility and responsive work recorded below. These are implementation requirements with known Aurora solutions, not unresolved design problems.

A critical shared compatibility correction is required before C03 integration: creator-workspace-actor-mapper.ts validates every allowed action against the existing union. The accepted backend adds CAMPAIGN_OPPORTUNITY_VIEW, CAMPAIGN_APPLICATION_APPLY and CAMPAIGN_APPLICATION_WITHDRAW_PENDING; without extending the frontend known contract, the mapper rejects the entire context. Preserve its fail-closed identity checks. Owner/Manager retain Settings capabilities; Assistant has only C03 view/apply and must receive guidance to ask an authorized team member for Instagram recovery.

The collection response contains only items and nextCursor, not a global Instagram reason. An empty collection must remain neutral; lifecycle recovery can be offered only from an actually available authorized C05 Settings result or direct Opportunity reason. Do not infer a failed lifecycle from zero items, and do not call inaccessible Settings for Assistant. This is an observability limit, not a missing P1 endpoint. Current C05 presentation already covers all six states.

The exact Stage B routes are retained. /creator/campaigns becomes the default Opportunities entry. C03 pages sit under RequireAuth, the existing shell and current C05 context, outside RequireCreatorPlatformAccess. Current Opportunity detail renders backend access/recovery rather than redirecting through a broad C01 gate. Historical Applications, notifications and the approved Collaboration destination retain current-team authorization without an Instagram prerequisite. C04 role/workflow authority remains intact. Compatibility URLs must not revive public enumeration or raw-path invitation handling.

NOTIFICATION_VERDICT = BOUNDED_MISSING_NOTIFICATION_PRESENTATION. AppHeader has an inert bell; no current Creator notification list/count/read panel was found. A bounded recipient list in the existing drawer/sheet family is enough. Use accepted endpoints, safe Application deep links and independent unread-count failure handling. The backend offers a bounded list (default 50, maximum 100), not cursor pagination or a guaranteed complete archive; do not invent either. Email opt-in is not a prerequisite for in-app notifications.

## Information hierarchy and data fidelity

Dossier order: Brand identity and Campaign objective/platforms; publishing timing and independent nullable application deadline; available offer/currency and Brand support; canonical Assets and associated Briefs; rich Brief details in a read-only contextual surface. Separate read visibility from canApply/applicationsOpen/applyBlockedReason. Fixed and negotiable offers remain read-only; intentional zero remains zero. Safe Brand Instagram is not present in the accepted Brand DTO and must not be synthesized.

Selection uses an Asset radio group followed by Briefs belonging to that Asset. Changing Asset invalidates an incompatible Brief. One selectable pair may skip selection visually but still has explicit Review and Submit. Review names the exact Asset/Brief and includes commercial snapshot, deliverables and support; rights/guidance/references remain fully reachable and material obligations are not hidden. Current UCE drawers provide section layout only, not Brand API or legacy record semantics.

My Applications is an independent row/card per applicationId in backend cursor order. Campaign grouping may be visual but cannot collapse siblings or imply completeness across pages. Detail uses immutable snapshot fields, not current Opportunity data. The Creator endpoint exposes canonical records; the separately labeled Brand legacy adapter does not authorize inventing a Creator legacy route. SUPERSEDED is display-only if encountered; no producer or automatic sibling action is proposed.

The Apply flow preserves one canonical Idempotency-Key per command intent across an uncertain transport result or shared 401 refresh. Changed selection requires new Review and a new explicit intent. Successful receipts identify one Application/transition; replay must not duplicate local rows, notices or side effects. Backend quotas and same-pair rules remain authoritative. A fresh reapply creates another row; EXPIRED remains quota-counted, WITHDRAWN releases quota.

## Register coverage and reading guide

135 explicit material state rows; 9 proposed surfaces; 11 current route entries; 71 current reuse entries; 15 reference entries; 62 exact reason/status/message mappings; 447 stale-term occurrences across 71 tracked text files. Each state row materializes all 16 requested fields and exactly one disposition. CSV and JSON copies accompany every full register.

Occurrence audit scans every tracked nonbinary frontend file case-insensitively for all required names/fields plus invitation_token and RequireCreatorPlatformAccess. Each matched occurrence has its own path, line, column, term and disposition. Historical documents remain evidence; unrelated Brand/provider Marketplace terminology is explicitly classified and is not an instruction for broad renaming. Semantic hazards without a literal required term are also covered in the semantic proof and current-route register.

All registers follow in full. Repository integrity appears last. No new source files are proposed as existing references.

## C03_FRONTEND_STATE_FAMILY_REGISTER_V1

Full machine-readable copies: [CSV](p2-preflight/C03_FRONTEND_STATE_FAMILY_REGISTER_V1.csv) · [JSON](p2-preflight/C03_FRONTEND_STATE_FAMILY_REGISTER_V1.json)

### PUBLIC_ENTRY_LOADING

| Field | Value |
|---|---|
| FAMILY_ID | PUBLIC_ENTRY_LOADING |
| SURFACE | Public Campaign entry |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §2 |
| TRIGGER | GET pending; fragment removed before fetch |
| MATERIAL_STATE | Initial entry skeleton with neutral title |
| DISCLOSURE_LEVEL | TEASER safe campaign id/name/platforms; LOCKED reason/recovery only |
| PRIMARY_ACTION | Wait |
| RECOVERY_ACTION | Retry only on failure |
| ROLE_VARIATION | Optional auth; wrong account follows backend reason |
| INSTAGRAM_DEPENDENCY | Current Opportunity backend evaluation only |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Header identity followed by one recovery/entry action. No private cached payload. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| VISUAL_REFERENCE | REF-CURRENT-SHELL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### TEASER_AUTHENTICATION_REQUIRED

| Field | Value |
|---|---|
| FAMILY_ID | TEASER_AUTHENTICATION_REQUIRED |
| SURFACE | Public Campaign entry |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §2 |
| TRIGGER | TEASER AUTHENTICATION_REQUIRED |
| MATERIAL_STATE | Safe public teaser; sign-in/create Creator |
| DISCLOSURE_LEVEL | TEASER safe campaign id/name/platforms; LOCKED reason/recovery only |
| PRIMARY_ACTION | Continue through secure entry |
| RECOVERY_ACTION | Sign in/create Creator |
| ROLE_VARIATION | Optional auth; wrong account follows backend reason |
| INSTAGRAM_DEPENDENCY | Current Opportunity backend evaluation only |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Header identity followed by one recovery/entry action. No private cached payload. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| VISUAL_REFERENCE | REF-CURRENT-SHELL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### TEASER_CREATOR_ACCOUNT_REQUIRED

| Field | Value |
|---|---|
| FAMILY_ID | TEASER_CREATOR_ACCOUNT_REQUIRED |
| SURFACE | Public Campaign entry |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §2 |
| TRIGGER | TEASER CREATOR_ACCOUNT_REQUIRED |
| MATERIAL_STATE | Safe teaser with Creator account requirement |
| DISCLOSURE_LEVEL | TEASER safe campaign id/name/platforms; LOCKED reason/recovery only |
| PRIMARY_ACTION | Use/create Creator account |
| RECOVERY_ACTION | Preserve safe Campaign return |
| ROLE_VARIATION | Optional auth; wrong account follows backend reason |
| INSTAGRAM_DEPENDENCY | Current Opportunity backend evaluation only |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Header identity followed by one recovery/entry action. No private cached payload. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| VISUAL_REFERENCE | REF-CURRENT-SHELL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### PUBLIC_CONTINUATION_EXCHANGE

| Field | Value |
|---|---|
| FAMILY_ID | PUBLIC_CONTINUATION_EXCHANGE |
| SURFACE | Public Campaign entry |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §2 |
| TRIGGER | Transient fragment credential -> POST apply-continuation |
| MATERIAL_STATE | Real request pending; no synthetic progress |
| DISCLOSURE_LEVEL | TEASER safe campaign id/name/platforms; LOCKED reason/recovery only |
| PRIMARY_ACTION | Wait; disable duplicate exchange |
| RECOVERY_ACTION | No storage or raw credential echo |
| ROLE_VARIATION | Optional auth; wrong account follows backend reason |
| INSTAGRAM_DEPENDENCY | Current Opportunity backend evaluation only |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Header identity followed by one recovery/entry action. No private cached payload. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| VISUAL_REFERENCE | REF-CURRENT-SHELL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### PUBLIC_CONTINUATION_EXCHANGE_ERROR

| Field | Value |
|---|---|
| FAMILY_ID | PUBLIC_CONTINUATION_EXCHANGE_ERROR |
| SURFACE | Public Campaign entry |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §8 |
| TRIGGER | 404/409/503 or transport error from exchange |
| MATERIAL_STATE | Generic entry failure; no identity disclosure |
| DISCLOSURE_LEVEL | TEASER safe campaign id/name/platforms; LOCKED reason/recovery only |
| PRIMARY_ACTION | Retry only appropriate known-safe operation |
| RECOVERY_ACTION | Fresh secure link if credential lost; no blind loop |
| ROLE_VARIATION | Optional auth; wrong account follows backend reason |
| INSTAGRAM_DEPENDENCY | Current Opportunity backend evaluation only |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Header identity followed by one recovery/entry action. No private cached payload. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| VISUAL_REFERENCE | REF-CURRENT-SHELL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### UNKNOWN_OR_NONDISCLOSABLE_CAMPAIGN

| Field | Value |
|---|---|
| FAMILY_ID | UNKNOWN_OR_NONDISCLOSABLE_CAMPAIGN |
| SURFACE | Public Campaign entry |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §2 |
| TRIGGER | LOCKED OPPORTUNITY_NOT_AVAILABLE or unavailable 404 |
| MATERIAL_STATE | Generic Opportunity unavailable |
| DISCLOSURE_LEVEL | TEASER safe campaign id/name/platforms; LOCKED reason/recovery only |
| PRIMARY_ACTION | Return to permitted Campaigns entry |
| RECOVERY_ACTION | No enumeration/search suggestions |
| ROLE_VARIATION | Optional auth; wrong account follows backend reason |
| INSTAGRAM_DEPENDENCY | Current Opportunity backend evaluation only |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Header identity followed by one recovery/entry action. No private cached payload. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| VISUAL_REFERENCE | REF-CURRENT-SHELL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### AUTHENTICATED_CREATOR_RETURN

| Field | Value |
|---|---|
| FAMILY_ID | AUTHENTICATED_CREATOR_RETURN |
| SURFACE | Public Campaign entry |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §2 |
| TRIGGER | C01 cookie/context return; current actor |
| MATERIAL_STATE | Resolve canonical Campaign and current backend projection |
| DISCLOSURE_LEVEL | TEASER safe campaign id/name/platforms; LOCKED reason/recovery only |
| PRIMARY_ACTION | Open authorized Opportunity or exact recovery |
| RECOVERY_ACTION | Re-fetch scoped projection; never auto-Submit |
| ROLE_VARIATION | Optional auth; wrong account follows backend reason |
| INSTAGRAM_DEPENDENCY | Current Opportunity backend evaluation only |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Header identity followed by one recovery/entry action. No private cached payload. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| VISUAL_REFERENCE | REF-CURRENT-SHELL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### IG_NOT_CONNECTED

| Field | Value |
|---|---|
| FAMILY_ID | IG_NOT_CONNECTED |
| SURFACE | Opportunity access recovery |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §3 |
| TRIGGER | NOT_CONNECTED |
| MATERIAL_STATE | Connect Instagram recovery |
| DISCLOSURE_LEVEL | LOCKED reason/recovery only; healthy still needs entitlement |
| PRIMARY_ACTION | Connect if Settings authorized |
| RECOVERY_ACTION | CONNECT_INSTAGRAM |
| ROLE_VARIATION | All roles view; recovery Settings action only when C05 permits; otherwise ask authorized team member |
| INSTAGRAM_DEPENDENCY | Backend six-state reason/recovery; never browser predicate |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. One status card with exact permitted recovery action. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/settings/utils/creator-instagram-settings-state.ts |
| VISUAL_REFERENCE | REF-CURRENT-SETTINGS |
| DECISION_LADDER_DISPOSITION | RECONCILE_DIRECTLY |

### IG_CONNECTED_HEALTHY

| Field | Value |
|---|---|
| FAMILY_ID | IG_CONNECTED_HEALTHY |
| SURFACE | Opportunity access recovery |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §3 |
| TRIGGER | CONNECTED_HEALTHY |
| MATERIAL_STATE | Proceed to entitlement evaluation; not automatic eligibility |
| DISCLOSURE_LEVEL | LOCKED reason/recovery only; healthy still needs entitlement |
| PRIMARY_ACTION | Load current Opportunity |
| RECOVERY_ACTION | None |
| ROLE_VARIATION | All roles view; recovery Settings action only when C05 permits; otherwise ask authorized team member |
| INSTAGRAM_DEPENDENCY | Backend six-state reason/recovery; never browser predicate |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. One status card with exact permitted recovery action. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/settings/utils/creator-instagram-settings-state.ts |
| VISUAL_REFERENCE | REF-CURRENT-SETTINGS |
| DECISION_LADDER_DISPOSITION | RECONCILE_DIRECTLY |

### IG_REVALIDATION_REQUIRED

| Field | Value |
|---|---|
| FAMILY_ID | IG_REVALIDATION_REQUIRED |
| SURFACE | Opportunity access recovery |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §3 |
| TRIGGER | REVALIDATION_REQUIRED |
| MATERIAL_STATE | Revalidate same identity |
| DISCLOSURE_LEVEL | LOCKED reason/recovery only; healthy still needs entitlement |
| PRIMARY_ACTION | Revalidate if Settings authorized |
| RECOVERY_ACTION | REVALIDATE_INSTAGRAM |
| ROLE_VARIATION | All roles view; recovery Settings action only when C05 permits; otherwise ask authorized team member |
| INSTAGRAM_DEPENDENCY | Backend six-state reason/recovery; never browser predicate |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. One status card with exact permitted recovery action. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/settings/utils/creator-instagram-settings-state.ts |
| VISUAL_REFERENCE | REF-CURRENT-SETTINGS |
| DECISION_LADDER_DISPOSITION | RECONCILE_DIRECTLY |

### IG_RECONNECT_REQUIRED

| Field | Value |
|---|---|
| FAMILY_ID | IG_RECONNECT_REQUIRED |
| SURFACE | Opportunity access recovery |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §3 |
| TRIGGER | RECONNECT_REQUIRED |
| MATERIAL_STATE | Reconnect same identity |
| DISCLOSURE_LEVEL | LOCKED reason/recovery only; healthy still needs entitlement |
| PRIMARY_ACTION | Reconnect if Settings authorized |
| RECOVERY_ACTION | RECONNECT_INSTAGRAM |
| ROLE_VARIATION | All roles view; recovery Settings action only when C05 permits; otherwise ask authorized team member |
| INSTAGRAM_DEPENDENCY | Backend six-state reason/recovery; never browser predicate |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. One status card with exact permitted recovery action. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/settings/utils/creator-instagram-settings-state.ts |
| VISUAL_REFERENCE | REF-CURRENT-SETTINGS |
| DECISION_LADDER_DISPOSITION | RECONCILE_DIRECTLY |

### IG_PROVIDER_BLOCKED_RECOVERABLE

| Field | Value |
|---|---|
| FAMILY_ID | IG_PROVIDER_BLOCKED_RECOVERABLE |
| SURFACE | Opportunity access recovery |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §3 |
| TRIGGER | PROVIDER_BLOCKED_RECOVERABLE |
| MATERIAL_STATE | Temporary provider recovery |
| DISCLOSURE_LEVEL | LOCKED reason/recovery only; healthy still needs entitlement |
| PRIMARY_ACTION | Revalidate when permitted |
| RECOVERY_ACTION | REVALIDATE_INSTAGRAM; retry later guidance |
| ROLE_VARIATION | All roles view; recovery Settings action only when C05 permits; otherwise ask authorized team member |
| INSTAGRAM_DEPENDENCY | Backend six-state reason/recovery; never browser predicate |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. One status card with exact permitted recovery action. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/settings/utils/creator-instagram-settings-state.ts |
| VISUAL_REFERENCE | REF-CURRENT-SETTINGS |
| DECISION_LADDER_DISPOSITION | RECONCILE_DIRECTLY |

### IG_DISCONNECTED_IDENTITY_RETAINED

| Field | Value |
|---|---|
| FAMILY_ID | IG_DISCONNECTED_IDENTITY_RETAINED |
| SURFACE | Opportunity access recovery |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §3 |
| TRIGGER | DISCONNECTED_IDENTITY_RETAINED |
| MATERIAL_STATE | Disconnected with retained identity |
| DISCLOSURE_LEVEL | LOCKED reason/recovery only; healthy still needs entitlement |
| PRIMARY_ACTION | Reconnect if Settings authorized |
| RECOVERY_ACTION | RECONNECT_INSTAGRAM |
| ROLE_VARIATION | All roles view; recovery Settings action only when C05 permits; otherwise ask authorized team member |
| INSTAGRAM_DEPENDENCY | Backend six-state reason/recovery; never browser predicate |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. One status card with exact permitted recovery action. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/settings/utils/creator-instagram-settings-state.ts |
| VISUAL_REFERENCE | REF-CURRENT-SETTINGS |
| DECISION_LADDER_DISPOSITION | RECONCILE_DIRECTLY |

### ENT_PUBLIC

| Field | Value |
|---|---|
| FAMILY_ID | ENT_PUBLIC |
| SURFACE | Opportunity entitlement |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §2 |
| TRIGGER | Backend AUTHORIZED |
| MATERIAL_STATE | Authorized PUBLIC entitlement |
| DISCLOSURE_LEVEL | LOCKED has no campaign details; AUTHORIZED details only after backend result |
| PRIMARY_ACTION | Read dossier |
| RECOVERY_ACTION | None |
| ROLE_VARIATION | Current workspace Owner subject; actor membership distinct |
| INSTAGRAM_DEPENDENCY | Current usable Instagram required by backend |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Generic non-disclosable page; do not reveal restricted campaign existence. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| VISUAL_REFERENCE | REF-CURRENT-SHELL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### ENT_ELIGIBLE

| Field | Value |
|---|---|
| FAMILY_ID | ENT_ELIGIBLE |
| SURFACE | Opportunity entitlement |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §2 |
| TRIGGER | Backend ELIGIBLE yields AUTHORIZED |
| MATERIAL_STATE | Authorized restricted eligibility |
| DISCLOSURE_LEVEL | LOCKED has no campaign details; AUTHORIZED details only after backend result |
| PRIMARY_ACTION | Read dossier |
| RECOVERY_ACTION | None |
| ROLE_VARIATION | Current workspace Owner subject; actor membership distinct |
| INSTAGRAM_DEPENDENCY | Current usable Instagram required by backend |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Generic non-disclosable page; do not reveal restricted campaign existence. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| VISUAL_REFERENCE | REF-CURRENT-SHELL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### ENT_INELIGIBLE

| Field | Value |
|---|---|
| FAMILY_ID | ENT_INELIGIBLE |
| SURFACE | Opportunity entitlement |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §8 |
| TRIGGER | ELIGIBILITY_INELIGIBLE |
| MATERIAL_STATE | Restricted access unavailable |
| DISCLOSURE_LEVEL | LOCKED has no campaign details; AUTHORIZED details only after backend result |
| PRIMARY_ACTION | Return to Opportunities |
| RECOVERY_ACTION | No eligibility facts or score |
| ROLE_VARIATION | Current workspace Owner subject; actor membership distinct |
| INSTAGRAM_DEPENDENCY | Current usable Instagram required by backend |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Generic non-disclosable page; do not reveal restricted campaign existence. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| VISUAL_REFERENCE | REF-CURRENT-SHELL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### ENT_UNAVAILABLE

| Field | Value |
|---|---|
| FAMILY_ID | ENT_UNAVAILABLE |
| SURFACE | Opportunity entitlement |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §8 |
| TRIGGER | ELIGIBILITY_UNAVAILABLE |
| MATERIAL_STATE | Eligibility cannot currently be established |
| DISCLOSURE_LEVEL | LOCKED has no campaign details; AUTHORIZED details only after backend result |
| PRIMARY_ACTION | Retry later |
| RECOVERY_ACTION | RETRY_LATER; no inferred eligible |
| ROLE_VARIATION | Current workspace Owner subject; actor membership distinct |
| INSTAGRAM_DEPENDENCY | Current usable Instagram required by backend |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Generic non-disclosable page; do not reveal restricted campaign existence. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| VISUAL_REFERENCE | REF-CURRENT-SHELL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### ENT_INVITATION_VALID

| Field | Value |
|---|---|
| FAMILY_ID | ENT_INVITATION_VALID |
| SURFACE | Opportunity entitlement |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §2 |
| TRIGGER | Backend validated invitation yields AUTHORIZED |
| MATERIAL_STATE | Authorized matching invitation |
| DISCLOSURE_LEVEL | LOCKED has no campaign details; AUTHORIZED details only after backend result |
| PRIMARY_ACTION | Read dossier |
| RECOVERY_ACTION | None |
| ROLE_VARIATION | Current workspace Owner subject; actor membership distinct |
| INSTAGRAM_DEPENDENCY | Current usable Instagram required by backend |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Generic non-disclosable page; do not reveal restricted campaign existence. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| VISUAL_REFERENCE | REF-CURRENT-SHELL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### ENT_INVITATION_REQUIRED

| Field | Value |
|---|---|
| FAMILY_ID | ENT_INVITATION_REQUIRED |
| SURFACE | Opportunity entitlement |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §8 |
| TRIGGER | INVITATION_REQUIRED |
| MATERIAL_STATE | Invitation required only when backend discloses reason |
| DISCLOSURE_LEVEL | LOCKED has no campaign details; AUTHORIZED details only after backend result |
| PRIMARY_ACTION | Use valid invitation entry |
| RECOVERY_ACTION | No Campaign/identity disclosure |
| ROLE_VARIATION | Current workspace Owner subject; actor membership distinct |
| INSTAGRAM_DEPENDENCY | Current usable Instagram required by backend |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Generic non-disclosable page; do not reveal restricted campaign existence. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| VISUAL_REFERENCE | REF-CURRENT-SHELL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### ENT_INVITATION_EXPIRED

| Field | Value |
|---|---|
| FAMILY_ID | ENT_INVITATION_EXPIRED |
| SURFACE | Opportunity entitlement |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §8 |
| TRIGGER | INVITATION_EXPIRED in proven context |
| MATERIAL_STATE | Invitation expired |
| DISCLOSURE_LEVEL | LOCKED has no campaign details; AUTHORIZED details only after backend result |
| PRIMARY_ACTION | Use fresh authorized invitation |
| RECOVERY_ACTION | No invitation metadata |
| ROLE_VARIATION | Current workspace Owner subject; actor membership distinct |
| INSTAGRAM_DEPENDENCY | Current usable Instagram required by backend |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Generic non-disclosable page; do not reveal restricted campaign existence. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| VISUAL_REFERENCE | REF-CURRENT-SHELL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### ENT_INVITATION_REVOKED

| Field | Value |
|---|---|
| FAMILY_ID | ENT_INVITATION_REVOKED |
| SURFACE | Opportunity entitlement |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §8 |
| TRIGGER | INVITATION_REVOKED in proven context |
| MATERIAL_STATE | Invitation no longer usable |
| DISCLOSURE_LEVEL | LOCKED has no campaign details; AUTHORIZED details only after backend result |
| PRIMARY_ACTION | Return to Opportunities |
| RECOVERY_ACTION | No automatic retry |
| ROLE_VARIATION | Current workspace Owner subject; actor membership distinct |
| INSTAGRAM_DEPENDENCY | Current usable Instagram required by backend |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Generic non-disclosable page; do not reveal restricted campaign existence. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| VISUAL_REFERENCE | REF-CURRENT-SHELL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### ENT_INVITATION_MISMATCH

| Field | Value |
|---|---|
| FAMILY_ID | ENT_INVITATION_MISMATCH |
| SURFACE | Opportunity entitlement |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §8 |
| TRIGGER | INVITATION_SUBJECT_MISMATCH |
| MATERIAL_STATE | Use invited account without showing identity |
| DISCLOSURE_LEVEL | LOCKED has no campaign details; AUTHORIZED details only after backend result |
| PRIMARY_ACTION | Switch to invited account |
| RECOVERY_ACTION | USE_INVITED_ACCOUNT |
| ROLE_VARIATION | Current workspace Owner subject; actor membership distinct |
| INSTAGRAM_DEPENDENCY | Current usable Instagram required by backend |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Generic non-disclosable page; do not reveal restricted campaign existence. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| VISUAL_REFERENCE | REF-CURRENT-SHELL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### ENT_INVITATION_ABSENT

| Field | Value |
|---|---|
| FAMILY_ID | ENT_INVITATION_ABSENT |
| SURFACE | Opportunity entitlement |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §8 |
| TRIGGER | INVITATION_ABSENT |
| MATERIAL_STATE | Proven context no longer resolves invitation |
| DISCLOSURE_LEVEL | LOCKED has no campaign details; AUTHORIZED details only after backend result |
| PRIMARY_ACTION | Use fresh invitation entry |
| RECOVERY_ACTION | Do not map initial unproven 404 to this |
| ROLE_VARIATION | Current workspace Owner subject; actor membership distinct |
| INSTAGRAM_DEPENDENCY | Current usable Instagram required by backend |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Generic non-disclosable page; do not reveal restricted campaign existence. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| VISUAL_REFERENCE | REF-CURRENT-SHELL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### ENT_CONFIGURATION

| Field | Value |
|---|---|
| FAMILY_ID | ENT_CONFIGURATION |
| SURFACE | Opportunity entitlement |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §8 |
| TRIGGER | CAMPAIGN_VISIBILITY_CONFIGURATION_INVALID |
| MATERIAL_STATE | Generic access unavailable |
| DISCLOSURE_LEVEL | LOCKED has no campaign details; AUTHORIZED details only after backend result |
| PRIMARY_ACTION | Return to Opportunities |
| RECOVERY_ACTION | Retry after configuration corrected; no diagnostics |
| ROLE_VARIATION | Current workspace Owner subject; actor membership distinct |
| INSTAGRAM_DEPENDENCY | Current usable Instagram required by backend |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Generic non-disclosable page; do not reveal restricted campaign existence. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| VISUAL_REFERENCE | REF-CURRENT-SHELL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### ENT_IDENTITY_CONFLICT

| Field | Value |
|---|---|
| FAMILY_ID | ENT_IDENTITY_CONFLICT |
| SURFACE | Opportunity entitlement |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §8 |
| TRIGGER | CREATOR_ENTRY_CONTINUATION_IDENTITY_CONFLICT |
| MATERIAL_STATE | Continuation belongs to another subject/workspace |
| DISCLOSURE_LEVEL | LOCKED has no campaign details; AUTHORIZED details only after backend result |
| PRIMARY_ACTION | Resolve correct account/context |
| RECOVERY_ACTION | No silent rebinding |
| ROLE_VARIATION | Current workspace Owner subject; actor membership distinct |
| INSTAGRAM_DEPENDENCY | Current usable Instagram required by backend |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Generic non-disclosable page; do not reveal restricted campaign existence. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| VISUAL_REFERENCE | REF-CURRENT-SHELL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### OC_LOADING

| Field | Value |
|---|---|
| FAMILY_ID | OC_LOADING |
| SURFACE | Opportunities collection |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §2 |
| TRIGGER | Collection GET pending |
| MATERIAL_STATE | Initial scoped loading |
| DISCLOSURE_LEVEL | Only returned AUTHORIZED items; no public enumeration |
| PRIMARY_ACTION | Wait |
| RECOVERY_ACTION | Retry if failed |
| ROLE_VARIATION | Current C05 VIEW capability |
| INSTAGRAM_DEPENDENCY | Backend evaluates items; empty does not imply a lifecycle reason |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Grid to single-column cards; no match ranking/filter strip. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/MarketplaceDiscovery.tsx |
| VISUAL_REFERENCE | REF-PH7-LOCAL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### OC_REFRESHING

| Field | Value |
|---|---|
| FAMILY_ID | OC_REFRESHING |
| SURFACE | Opportunities collection |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §2 |
| TRIGGER | Explicit refresh under unchanged actor/workspace |
| MATERIAL_STATE | Keep same-scope authorized cards while refreshing |
| DISCLOSURE_LEVEL | Only returned AUTHORIZED items; no public enumeration |
| PRIMARY_ACTION | Refresh status |
| RECOVERY_ACTION | If entitlement changes discard revoked payloads |
| ROLE_VARIATION | Current C05 VIEW capability |
| INSTAGRAM_DEPENDENCY | Backend evaluates items; empty does not imply a lifecycle reason |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Grid to single-column cards; no match ranking/filter strip. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/MarketplaceDiscovery.tsx |
| VISUAL_REFERENCE | REF-PH7-LOCAL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### OC_READY

| Field | Value |
|---|---|
| FAMILY_ID | OC_READY |
| SURFACE | Opportunities collection |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §2 |
| TRIGGER | items nonempty |
| MATERIAL_STATE | Authorized cards in backend order |
| DISCLOSURE_LEVEL | Only returned AUTHORIZED items; no public enumeration |
| PRIMARY_ACTION | Open Opportunity |
| RECOVERY_ACTION | None; no match sorting |
| ROLE_VARIATION | Current C05 VIEW capability |
| INSTAGRAM_DEPENDENCY | Backend evaluates items; empty does not imply a lifecycle reason |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Grid to single-column cards; no match ranking/filter strip. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/MarketplaceDiscovery.tsx |
| VISUAL_REFERENCE | REF-PH7-LOCAL |
| DECISION_LADDER_DISPOSITION | RECONCILE_DIRECTLY |

### OC_EMPTY

| Field | Value |
|---|---|
| FAMILY_ID | OC_EMPTY |
| SURFACE | Opportunities collection |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §2 |
| TRIGGER | items empty |
| MATERIAL_STATE | No Opportunities currently available here |
| DISCLOSURE_LEVEL | Only returned AUTHORIZED items; no public enumeration |
| PRIMARY_ACTION | Refresh or use a direct secure Campaign link |
| RECOVERY_ACTION | Do not offer global discovery |
| ROLE_VARIATION | Current C05 VIEW capability |
| INSTAGRAM_DEPENDENCY | Backend evaluates items; empty does not imply a lifecycle reason |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Grid to single-column cards; no match ranking/filter strip. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/MarketplaceDiscovery.tsx |
| VISUAL_REFERENCE | REF-PH7-LOCAL |
| DECISION_LADDER_DISPOSITION | REUSE_ACCEPTED_REFERENCE |

### OC_PAGINATION

| Field | Value |
|---|---|
| FAMILY_ID | OC_PAGINATION |
| SURFACE | Opportunities collection |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §2 |
| TRIGGER | nextCursor nonnull |
| MATERIAL_STATE | Append next authorized page |
| DISCLOSURE_LEVEL | Only returned AUTHORIZED items; no public enumeration |
| PRIMARY_ACTION | Load more |
| RECOVERY_ACTION | Retry failed page without dropping prior items |
| ROLE_VARIATION | Current C05 VIEW capability |
| INSTAGRAM_DEPENDENCY | Backend evaluates items; empty does not imply a lifecycle reason |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Grid to single-column cards; no match ranking/filter strip. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/MarketplaceDiscovery.tsx |
| VISUAL_REFERENCE | REF-PH7-LOCAL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### OC_MALFORMED

| Field | Value |
|---|---|
| FAMILY_ID | OC_MALFORMED |
| SURFACE | Opportunities collection |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §2 |
| TRIGGER | Unknown schema/discriminant/invalid item |
| MATERIAL_STATE | Response cannot be safely displayed |
| DISCLOSURE_LEVEL | Only returned AUTHORIZED items; no public enumeration |
| PRIMARY_ACTION | Retry |
| RECOVERY_ACTION | Fail closed; no legacy cast fallback |
| ROLE_VARIATION | Current C05 VIEW capability |
| INSTAGRAM_DEPENDENCY | Backend evaluates items; empty does not imply a lifecycle reason |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Grid to single-column cards; no match ranking/filter strip. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/MarketplaceDiscovery.tsx |
| VISUAL_REFERENCE | REF-PH7-LOCAL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### OC_AUTH_LOSS

| Field | Value |
|---|---|
| FAMILY_ID | OC_AUTH_LOSS |
| SURFACE | Opportunities collection |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §8 |
| TRIGGER | 401 after shared refresh or session loss |
| MATERIAL_STATE | Clear collection and authenticate |
| DISCLOSURE_LEVEL | Only returned AUTHORIZED items; no public enumeration |
| PRIMARY_ACTION | Sign in |
| RECOVERY_ACTION | Safe internal collection return |
| ROLE_VARIATION | Current C05 VIEW capability |
| INSTAGRAM_DEPENDENCY | Backend evaluates items; empty does not imply a lifecycle reason |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Grid to single-column cards; no match ranking/filter strip. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/MarketplaceDiscovery.tsx |
| VISUAL_REFERENCE | REF-PH7-LOCAL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### OC_CONTEXT_RECOVERY

| Field | Value |
|---|---|
| FAMILY_ID | OC_CONTEXT_RECOVERY |
| SURFACE | Opportunities collection |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §3 |
| TRIGGER | C05 context 403/409 |
| MATERIAL_STATE | Current workspace unresolved |
| DISCLOSURE_LEVEL | Only returned AUTHORIZED items; no public enumeration |
| PRIMARY_ACTION | Resolve current team/account |
| RECOVERY_ACTION | No default first workspace |
| ROLE_VARIATION | Current C05 VIEW capability |
| INSTAGRAM_DEPENDENCY | Backend evaluates items; empty does not imply a lifecycle reason |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Grid to single-column cards; no match ranking/filter strip. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/MarketplaceDiscovery.tsx |
| VISUAL_REFERENCE | REF-PH7-LOCAL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### OC_INSTAGRAM_RECOVERY

| Field | Value |
|---|---|
| FAMILY_ID | OC_INSTAGRAM_RECOVERY |
| SURFACE | Opportunities collection |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §3 |
| TRIGGER | Known lifecycle from authorized C05 Settings or direct detail; NOT inferred from empty |
| MATERIAL_STATE | Backend-proven lifecycle recovery alongside collection |
| DISCLOSURE_LEVEL | Only returned AUTHORIZED items; no public enumeration |
| PRIMARY_ACTION | Permitted Settings recovery |
| RECOVERY_ACTION | If not observable show neutral OC_EMPTY |
| ROLE_VARIATION | Current C05 VIEW capability |
| INSTAGRAM_DEPENDENCY | Backend evaluates items; empty does not imply a lifecycle reason |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Grid to single-column cards; no match ranking/filter strip. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/MarketplaceDiscovery.tsx |
| VISUAL_REFERENCE | REF-PH7-LOCAL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### OC_CURSOR_ERROR

| Field | Value |
|---|---|
| FAMILY_ID | OC_CURSOR_ERROR |
| SURFACE | Opportunities collection |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §8 |
| TRIGGER | OPPORTUNITY_CURSOR_INVALID |
| MATERIAL_STATE | Invalid cursor; recover first page |
| DISCLOSURE_LEVEL | Only returned AUTHORIZED items; no public enumeration |
| PRIMARY_ACTION | Reload first page |
| RECOVERY_ACTION | Discard invalid cursor only |
| ROLE_VARIATION | Current C05 VIEW capability |
| INSTAGRAM_DEPENDENCY | Backend evaluates items; empty does not imply a lifecycle reason |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Grid to single-column cards; no match ranking/filter strip. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/MarketplaceDiscovery.tsx |
| VISUAL_REFERENCE | REF-PH7-LOCAL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### DOS_AUTHORIZED

| Field | Value |
|---|---|
| FAMILY_ID | DOS_AUTHORIZED |
| SURFACE | Authorized Opportunity dossier |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §2 |
| TRIGGER | AUTHORIZED |
| MATERIAL_STATE | Complete Brand/Campaign dossier with separate Apply status |
| DISCLOSURE_LEVEL | AUTHORIZED only; Apply block does not redact authorized dossier |
| PRIMARY_ACTION | Read/select available pair |
| RECOVERY_ACTION | Follow applyBlockedReason without hiding dossier |
| ROLE_VARIATION | Current C05 VIEW; Apply depends on backend canApply |
| INSTAGRAM_DEPENDENCY | Current Opportunity evaluation |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Identity/objective/timing then commercial/support then Assets/Briefs; desktop related columns, mobile linear reading. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| VISUAL_REFERENCE | REF-PH7-DESKTOP |
| DECISION_LADDER_DISPOSITION | RECONCILE_DIRECTLY |

### DOS_APPLICATIONS_CLOSED

| Field | Value |
|---|---|
| FAMILY_ID | DOS_APPLICATIONS_CLOSED |
| SURFACE | Authorized Opportunity dossier |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §2 |
| TRIGGER | applicationsOpen=false / CAMPAIGN_APPLICATIONS_CLOSED |
| MATERIAL_STATE | Dossier visible; application window closed |
| DISCLOSURE_LEVEL | AUTHORIZED only; Apply block does not redact authorized dossier |
| PRIMARY_ACTION | Read dossier/history |
| RECOVERY_ACTION | No local date override |
| ROLE_VARIATION | Current C05 VIEW; Apply depends on backend canApply |
| INSTAGRAM_DEPENDENCY | Current Opportunity evaluation |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Identity/objective/timing then commercial/support then Assets/Briefs; desktop related columns, mobile linear reading. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| VISUAL_REFERENCE | REF-PH7-DESKTOP |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### DOS_BLOCKED

| Field | Value |
|---|---|
| FAMILY_ID | DOS_BLOCKED |
| SURFACE | Authorized Opportunity dossier |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §2 |
| TRIGGER | applicationsOpen and canApply independent |
| MATERIAL_STATE | Dossier visible; canApply false |
| DISCLOSURE_LEVEL | AUTHORIZED only; Apply block does not redact authorized dossier |
| PRIMARY_ACTION | Read available details |
| RECOVERY_ACTION | Map exact backend block; no speculative gate |
| ROLE_VARIATION | Current C05 VIEW; Apply depends on backend canApply |
| INSTAGRAM_DEPENDENCY | Current Opportunity evaluation |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Identity/objective/timing then commercial/support then Assets/Briefs; desktop related columns, mobile linear reading. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| VISUAL_REFERENCE | REF-PH7-DESKTOP |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### DOS_COMMERCIAL_FIXED

| Field | Value |
|---|---|
| FAMILY_ID | DOS_COMMERCIAL_FIXED |
| SURFACE | Authorized Opportunity dossier |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §2 |
| TRIGGER | commercial AVAILABLE FIXED |
| MATERIAL_STATE | Read-only fixed offer and currency |
| DISCLOSURE_LEVEL | AUTHORIZED only; Apply block does not redact authorized dossier |
| PRIMARY_ACTION | Review offer |
| RECOVERY_ACTION | No proposed-amount input |
| ROLE_VARIATION | Current C05 VIEW; Apply depends on backend canApply |
| INSTAGRAM_DEPENDENCY | Current Opportunity evaluation |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Identity/objective/timing then commercial/support then Assets/Briefs; desktop related columns, mobile linear reading. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| VISUAL_REFERENCE | REF-PH7-DESKTOP |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### DOS_COMMERCIAL_NEGOTIABLE

| Field | Value |
|---|---|
| FAMILY_ID | DOS_COMMERCIAL_NEGOTIABLE |
| SURFACE | Authorized Opportunity dossier |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §2 |
| TRIGGER | commercial AVAILABLE NEGOTIABLE |
| MATERIAL_STATE | Read-only Brand starting offer; later negotiation in C04 |
| DISCLOSURE_LEVEL | AUTHORIZED only; Apply block does not redact authorized dossier |
| PRIMARY_ACTION | Review starting offer |
| RECOVERY_ACTION | No proposal at Apply |
| ROLE_VARIATION | Current C05 VIEW; Apply depends on backend canApply |
| INSTAGRAM_DEPENDENCY | Current Opportunity evaluation |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Identity/objective/timing then commercial/support then Assets/Briefs; desktop related columns, mobile linear reading. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| VISUAL_REFERENCE | REF-PH7-DESKTOP |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### DOS_COMMERCIAL_ZERO

| Field | Value |
|---|---|
| FAMILY_ID | DOS_COMMERCIAL_ZERO |
| SURFACE | Authorized Opportunity dossier |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §2 |
| TRIGGER | AVAILABLE offer='0' or equivalent |
| MATERIAL_STATE | Intentional authored decimal zero displayed |
| DISCLOSURE_LEVEL | AUTHORIZED only; Apply block does not redact authorized dossier |
| PRIMARY_ACTION | Review zero as real amount |
| RECOVERY_ACTION | Never convert missing/invalid to zero |
| ROLE_VARIATION | Current C05 VIEW; Apply depends on backend canApply |
| INSTAGRAM_DEPENDENCY | Current Opportunity evaluation |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Identity/objective/timing then commercial/support then Assets/Briefs; desktop related columns, mobile linear reading. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| VISUAL_REFERENCE | REF-PH7-DESKTOP |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### DOS_COMMERCIAL_UNAVAILABLE

| Field | Value |
|---|---|
| FAMILY_ID | DOS_COMMERCIAL_UNAVAILABLE |
| SURFACE | Authorized Opportunity dossier |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §2 |
| TRIGGER | commercial UNAVAILABLE |
| MATERIAL_STATE | Unavailable commercial notice; no fabricated fee |
| DISCLOSURE_LEVEL | AUTHORIZED only; Apply block does not redact authorized dossier |
| PRIMARY_ACTION | Read other authorized details |
| RECOVERY_ACTION | Apply blocked; retry after correction |
| ROLE_VARIATION | Current C05 VIEW; Apply depends on backend canApply |
| INSTAGRAM_DEPENDENCY | Current Opportunity evaluation |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Identity/objective/timing then commercial/support then Assets/Briefs; desktop related columns, mobile linear reading. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| VISUAL_REFERENCE | REF-PH7-DESKTOP |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### DOS_SUPPORT_NONE

| Field | Value |
|---|---|
| FAMILY_ID | DOS_SUPPORT_NONE |
| SURFACE | Authorized Opportunity dossier |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §2 |
| TRIGGER | receivesBrandSupport=false |
| MATERIAL_STATE | No Brand support as explicitly projected |
| DISCLOSURE_LEVEL | AUTHORIZED only; Apply block does not redact authorized dossier |
| PRIMARY_ACTION | Review |
| RECOVERY_ACTION | Do not infer shipping |
| ROLE_VARIATION | Current C05 VIEW; Apply depends on backend canApply |
| INSTAGRAM_DEPENDENCY | Current Opportunity evaluation |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Identity/objective/timing then commercial/support then Assets/Briefs; desktop related columns, mobile linear reading. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| VISUAL_REFERENCE | REF-PH7-DESKTOP |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### DOS_SUPPORT_PRESENT

| Field | Value |
|---|---|
| FAMILY_ID | DOS_SUPPORT_PRESENT |
| SURFACE | Authorized Opportunity dossier |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §2 |
| TRIGGER | receivesBrandSupport=true |
| MATERIAL_STATE | Support type and optional estimated value |
| DISCLOSURE_LEVEL | AUTHORIZED only; Apply block does not redact authorized dossier |
| PRIMARY_ACTION | Review support |
| RECOVERY_ACTION | Null estimate remains unspecified; no fake amount |
| ROLE_VARIATION | Current C05 VIEW; Apply depends on backend canApply |
| INSTAGRAM_DEPENDENCY | Current Opportunity evaluation |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Identity/objective/timing then commercial/support then Assets/Briefs; desktop related columns, mobile linear reading. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| VISUAL_REFERENCE | REF-PH7-DESKTOP |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### DOS_TIMING_NULL

| Field | Value |
|---|---|
| FAMILY_ID | DOS_TIMING_NULL |
| SURFACE | Authorized Opportunity dossier |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §2 |
| TRIGGER | applicationDeadline=null |
| MATERIAL_STATE | Omit absent deadline or say not specified |
| DISCLOSURE_LEVEL | AUTHORIZED only; Apply block does not redact authorized dossier |
| PRIMARY_ACTION | Read publishing timing independently |
| RECOVERY_ACTION | Never use publishingEnd as deadline |
| ROLE_VARIATION | Current C05 VIEW; Apply depends on backend canApply |
| INSTAGRAM_DEPENDENCY | Current Opportunity evaluation |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Identity/objective/timing then commercial/support then Assets/Briefs; desktop related columns, mobile linear reading. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| VISUAL_REFERENCE | REF-PH7-DESKTOP |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### DOS_BRAND_MEDIA

| Field | Value |
|---|---|
| FAMILY_ID | DOS_BRAND_MEDIA |
| SURFACE | Authorized Opportunity dossier |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §2 |
| TRIGGER | Safe brand fields; optional media absent |
| MATERIAL_STATE | Identity-scale logo; absent data honest |
| DISCLOSURE_LEVEL | AUTHORIZED only; Apply block does not redact authorized dossier |
| PRIMARY_ACTION | Read Brand identity |
| RECOVERY_ACTION | No synthesized Instagram/contact data |
| ROLE_VARIATION | Current C05 VIEW; Apply depends on backend canApply |
| INSTAGRAM_DEPENDENCY | Current Opportunity evaluation |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Identity/objective/timing then commercial/support then Assets/Briefs; desktop related columns, mobile linear reading. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx |
| VISUAL_REFERENCE | REF-PH7-DESKTOP |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### SEL_SINGLE_PAIR

| Field | Value |
|---|---|
| FAMILY_ID | SEL_SINGLE_PAIR |
| SURFACE | Canonical Asset/Brief selection |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §2 |
| TRIGGER | Exactly one ACTIVE Asset and one selectable Brief |
| MATERIAL_STATE | May skip selector; explicit Review and Submit remain |
| DISCLOSURE_LEVEL | AUTHORIZED current selected pair |
| PRIMARY_ACTION | Review selected pair |
| RECOVERY_ACTION | Change if backend changes |
| ROLE_VARIATION | All three roles can Apply if backend allows |
| INSTAGRAM_DEPENDENCY | Revalidated by backend on Submit |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Native radio groups; Asset then associated Brief, detail action separate from selection. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| VISUAL_REFERENCE | REF-PH7-MOBILE |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### SEL_MULTIPLE_PAIRS

| Field | Value |
|---|---|
| FAMILY_ID | SEL_MULTIPLE_PAIRS |
| SURFACE | Canonical Asset/Brief selection |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §2 |
| TRIGGER | Multiple selectable Asset/Brief pairs |
| MATERIAL_STATE | Choose one canonical associated pair |
| DISCLOSURE_LEVEL | AUTHORIZED current selected pair |
| PRIMARY_ACTION | Choose and Review |
| RECOVERY_ACTION | Never independent unrelated defaults |
| ROLE_VARIATION | All three roles can Apply if backend allows |
| INSTAGRAM_DEPENDENCY | Revalidated by backend on Submit |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Native radio groups; Asset then associated Brief, detail action separate from selection. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| VISUAL_REFERENCE | REF-PH7-MOBILE |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### SEL_MULTIPLE_BRIEFS

| Field | Value |
|---|---|
| FAMILY_ID | SEL_MULTIPLE_BRIEFS |
| SURFACE | Canonical Asset/Brief selection |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §2 |
| TRIGGER | One Asset with several selectable Briefs |
| MATERIAL_STATE | Brief radio choices restricted to selected Asset |
| DISCLOSURE_LEVEL | AUTHORIZED current selected pair |
| PRIMARY_ACTION | Select Brief |
| RECOVERY_ACTION | Reset incompatible Brief when Asset changes |
| ROLE_VARIATION | All three roles can Apply if backend allows |
| INSTAGRAM_DEPENDENCY | Revalidated by backend on Submit |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Native radio groups; Asset then associated Brief, detail action separate from selection. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| VISUAL_REFERENCE | REF-PH7-MOBILE |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### SEL_MULTIPLE_ASSETS

| Field | Value |
|---|---|
| FAMILY_ID | SEL_MULTIPLE_ASSETS |
| SURFACE | Canonical Asset/Brief selection |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §2 |
| TRIGGER | Several canonical Assets |
| MATERIAL_STATE | Asset choices precede associated Briefs |
| DISCLOSURE_LEVEL | AUTHORIZED current selected pair |
| PRIMARY_ACTION | Select Asset then Brief |
| RECOVERY_ACTION | Preserve only compatible selection |
| ROLE_VARIATION | All three roles can Apply if backend allows |
| INSTAGRAM_DEPENDENCY | Revalidated by backend on Submit |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Native radio groups; Asset then associated Brief, detail action separate from selection. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| VISUAL_REFERENCE | REF-PH7-MOBILE |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### SEL_BRAND_ONLY

| Field | Value |
|---|---|
| FAMILY_ID | SEL_BRAND_ONLY |
| SURFACE | Canonical Asset/Brief selection |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §2 |
| TRIGGER | kind=BRAND and selectable Brief |
| MATERIAL_STATE | Valid BRAND Asset without product/stock requirement |
| DISCLOSURE_LEVEL | AUTHORIZED current selected pair |
| PRIMARY_ACTION | Select and Review |
| RECOVERY_ACTION | No product questionnaire |
| ROLE_VARIATION | All three roles can Apply if backend allows |
| INSTAGRAM_DEPENDENCY | Revalidated by backend on Submit |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Native radio groups; Asset then associated Brief, detail action separate from selection. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| VISUAL_REFERENCE | REF-PH7-MOBILE |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### SEL_NO_IMAGE

| Field | Value |
|---|---|
| FAMILY_ID | SEL_NO_IMAGE |
| SURFACE | Canonical Asset/Brief selection |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §2 |
| TRIGGER | No suitable Asset/Offering media |
| MATERIAL_STATE | Deliberate no-image fill; label retained |
| DISCLOSURE_LEVEL | AUTHORIZED current selected pair |
| PRIMARY_ACTION | Select normally |
| RECOVERY_ACTION | Broken-media fallback; logo never hero-sized |
| ROLE_VARIATION | All three roles can Apply if backend allows |
| INSTAGRAM_DEPENDENCY | Revalidated by backend on Submit |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Native radio groups; Asset then associated Brief, detail action separate from selection. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| VISUAL_REFERENCE | REF-PH7-MOBILE |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### SEL_ASSET_UNAVAILABLE

| Field | Value |
|---|---|
| FAMILY_ID | SEL_ASSET_UNAVAILABLE |
| SURFACE | Canonical Asset/Brief selection |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §8 |
| TRIGGER | CAMPAIGN_ASSET_NOT_ACTIVE |
| MATERIAL_STATE | Visible authorized Asset unavailable for selection |
| DISCLOSURE_LEVEL | AUTHORIZED current selected pair |
| PRIMARY_ACTION | Choose available pair |
| RECOVERY_ACTION | Inline reason; no stock authority |
| ROLE_VARIATION | All three roles can Apply if backend allows |
| INSTAGRAM_DEPENDENCY | Revalidated by backend on Submit |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Native radio groups; Asset then associated Brief, detail action separate from selection. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| VISUAL_REFERENCE | REF-PH7-MOBILE |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### SEL_BRIEF_UNAVAILABLE

| Field | Value |
|---|---|
| FAMILY_ID | SEL_BRIEF_UNAVAILABLE |
| SURFACE | Canonical Asset/Brief selection |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §8 |
| TRIGGER | applicationSelection UNAVAILABLE exact reason |
| MATERIAL_STATE | Brief shown as unavailable if projected |
| DISCLOSURE_LEVEL | AUTHORIZED current selected pair |
| PRIMARY_ACTION | Choose available Brief |
| RECOVERY_ACTION | No draft Brief revelation |
| ROLE_VARIATION | All three roles can Apply if backend allows |
| INSTAGRAM_DEPENDENCY | Revalidated by backend on Submit |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Native radio groups; Asset then associated Brief, detail action separate from selection. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| VISUAL_REFERENCE | REF-PH7-MOBILE |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### SEL_MISMATCH

| Field | Value |
|---|---|
| FAMILY_ID | SEL_MISMATCH |
| SURFACE | Canonical Asset/Brief selection |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §8 |
| TRIGGER | APPLICATION_SELECTION_INVALID |
| MATERIAL_STATE | Selection rejected or stale |
| DISCLOSURE_LEVEL | AUTHORIZED current selected pair |
| PRIMARY_ACTION | Reload choices and review |
| RECOVERY_ACTION | Clear incompatible selected IDs |
| ROLE_VARIATION | All three roles can Apply if backend allows |
| INSTAGRAM_DEPENDENCY | Revalidated by backend on Submit |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Native radio groups; Asset then associated Brief, detail action separate from selection. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| VISUAL_REFERENCE | REF-PH7-MOBILE |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### SEL_NONE_AVAILABLE

| Field | Value |
|---|---|
| FAMILY_ID | SEL_NONE_AVAILABLE |
| SURFACE | Canonical Asset/Brief selection |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §8 |
| TRIGGER | CAMPAIGN_BRIEF_UNAVAILABLE |
| MATERIAL_STATE | No selectable Brief; keep dossier |
| DISCLOSURE_LEVEL | AUTHORIZED current selected pair |
| PRIMARY_ACTION | Read dossier |
| RECOVERY_ACTION | Retry after backend change |
| ROLE_VARIATION | All three roles can Apply if backend allows |
| INSTAGRAM_DEPENDENCY | Revalidated by backend on Submit |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Native radio groups; Asset then associated Brief, detail action separate from selection. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| VISUAL_REFERENCE | REF-PH7-MOBILE |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### DRAW_ASSET

| Field | Value |
|---|---|
| FAMILY_ID | DRAW_ASSET |
| SURFACE | Read-only contextual detail |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §2,4 |
| TRIGGER | Open detail from authorized pair/history |
| MATERIAL_STATE | Read-only canonical Asset detail |
| DISCLOSURE_LEVEL | AUTHORIZED current dossier or authorized immutable history; never unlocked by opening drawer |
| PRIMARY_ACTION | Close/return to selection |
| RECOVERY_ACTION | Preserve selection and invoking focus |
| ROLE_VARIATION | Read authority of parent; no editing capability |
| INSTAGRAM_DEPENDENCY | Parent current/history rule, no independent Instagram check |
| HISTORICAL_OR_CURRENT | CURRENT_OR_HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Desktop right drawer; tablet bounded sheet; mobile full/near-full-screen for long detail; one owned scroll. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. Overlay: named dialog, inert background, initial focus, contained Tab/Shift+Tab, Escape/Close, restore invoking focus; selection/review survives safe close. |
| CURRENT_FRONTEND_MATCH | src/features/uce/campaign-page/CanonicalBriefDetailsDrawer.tsx |
| VISUAL_REFERENCE | REF-C04-DRAWER |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### DRAW_BRIEF

| Field | Value |
|---|---|
| FAMILY_ID | DRAW_BRIEF |
| SURFACE | Read-only contextual detail |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §2,4 |
| TRIGGER | Open Brief details |
| MATERIAL_STATE | Complete read-only rich Brief |
| DISCLOSURE_LEVEL | AUTHORIZED current dossier or authorized immutable history; never unlocked by opening drawer |
| PRIMARY_ACTION | Read and close |
| RECOVERY_ACTION | No Brand edit endpoint or DTO reuse |
| ROLE_VARIATION | Read authority of parent; no editing capability |
| INSTAGRAM_DEPENDENCY | Parent current/history rule, no independent Instagram check |
| HISTORICAL_OR_CURRENT | CURRENT_OR_HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Desktop right drawer; tablet bounded sheet; mobile full/near-full-screen for long detail; one owned scroll. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. Overlay: named dialog, inert background, initial focus, contained Tab/Shift+Tab, Escape/Close, restore invoking focus; selection/review survives safe close. |
| CURRENT_FRONTEND_MATCH | src/features/uce/campaign-page/CanonicalBriefDetailsDrawer.tsx |
| VISUAL_REFERENCE | REF-C04-DRAWER |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### DRAW_DELIVERABLES

| Field | Value |
|---|---|
| FAMILY_ID | DRAW_DELIVERABLES |
| SURFACE | Read-only contextual detail |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §2,4 |
| TRIGGER | Open Deliverables detail |
| MATERIAL_STATE | Ordered typed deliverables including graph relations |
| DISCLOSURE_LEVEL | AUTHORIZED current dossier or authorized immutable history; never unlocked by opening drawer |
| PRIMARY_ACTION | Read and close |
| RECOVERY_ACTION | No flattened quantity-only replacement |
| ROLE_VARIATION | Read authority of parent; no editing capability |
| INSTAGRAM_DEPENDENCY | Parent current/history rule, no independent Instagram check |
| HISTORICAL_OR_CURRENT | CURRENT_OR_HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Desktop right drawer; tablet bounded sheet; mobile full/near-full-screen for long detail; one owned scroll. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. Overlay: named dialog, inert background, initial focus, contained Tab/Shift+Tab, Escape/Close, restore invoking focus; selection/review survives safe close. |
| CURRENT_FRONTEND_MATCH | src/features/uce/campaign-page/CanonicalBriefDetailsDrawer.tsx |
| VISUAL_REFERENCE | REF-C04-DRAWER |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### DRAW_RIGHTS_SUPPORT_REFERENCES

| Field | Value |
|---|---|
| FAMILY_ID | DRAW_RIGHTS_SUPPORT_REFERENCES |
| SURFACE | Read-only contextual detail |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §2,4 |
| TRIGGER | Open supporting detail |
| MATERIAL_STATE | Readable rights/support/reference sections |
| DISCLOSURE_LEVEL | AUTHORIZED current dossier or authorized immutable history; never unlocked by opening drawer |
| PRIMARY_ACTION | Follow safe reference or close |
| RECOVERY_ACTION | Validate link protocol; no hidden required Review facts |
| ROLE_VARIATION | Read authority of parent; no editing capability |
| INSTAGRAM_DEPENDENCY | Parent current/history rule, no independent Instagram check |
| HISTORICAL_OR_CURRENT | CURRENT_OR_HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Desktop right drawer; tablet bounded sheet; mobile full/near-full-screen for long detail; one owned scroll. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. Overlay: named dialog, inert background, initial focus, contained Tab/Shift+Tab, Escape/Close, restore invoking focus; selection/review survives safe close. |
| CURRENT_FRONTEND_MATCH | src/features/uce/campaign-page/CanonicalBriefDetailsDrawer.tsx |
| VISUAL_REFERENCE | REF-C04-DRAWER |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### APPLY_SELECTION

| Field | Value |
|---|---|
| FAMILY_ID | APPLY_SELECTION |
| SURFACE | Apply selection and review |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §4,5 |
| TRIGGER | User chooses Apply with canApply |
| MATERIAL_STATE | Select canonical pair |
| DISCLOSURE_LEVEL | AUTHORIZED exact selection and current commercial; clear if authority lost |
| PRIMARY_ACTION | Continue to Review |
| RECOVERY_ACTION | Preserve valid selection |
| ROLE_VARIATION | OWNER/MANAGER/ASSISTANT subject to CAMPAIGN_APPLICATION_APPLY and canApply |
| INSTAGRAM_DEPENDENCY | Current usable Instagram and entitlement rechecked on Submit |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Review retains exact Asset, Brief, deliverables, commercial and support; persistent footer never obscures body. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. Overlay: named dialog, inert background, initial focus, contained Tab/Shift+Tab, Escape/Close, restore invoking focus; selection/review survives safe close. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| VISUAL_REFERENCE | REF-CURRENT-WIZARD |
| DECISION_LADDER_DISPOSITION | RECONCILE_DIRECTLY |

### APPLY_REVIEW

| Field | Value |
|---|---|
| FAMILY_ID | APPLY_REVIEW |
| SURFACE | Apply selection and review |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §4,5 |
| TRIGGER | Valid pair selected or optimized single pair |
| MATERIAL_STATE | Exact pair/commercial/deliverables/support summary |
| DISCLOSURE_LEVEL | AUTHORIZED exact selection and current commercial; clear if authority lost |
| PRIMARY_ACTION | Review explicit Submit |
| RECOVERY_ACTION | Back to selection; no legal/escrow checkbox |
| ROLE_VARIATION | OWNER/MANAGER/ASSISTANT subject to CAMPAIGN_APPLICATION_APPLY and canApply |
| INSTAGRAM_DEPENDENCY | Current usable Instagram and entitlement rechecked on Submit |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Review retains exact Asset, Brief, deliverables, commercial and support; persistent footer never obscures body. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. Overlay: named dialog, inert background, initial focus, contained Tab/Shift+Tab, Escape/Close, restore invoking focus; selection/review survives safe close. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| VISUAL_REFERENCE | REF-CURRENT-WIZARD |
| DECISION_LADDER_DISPOSITION | RECONCILE_DIRECTLY |

### APPLY_READY

| Field | Value |
|---|---|
| FAMILY_ID | APPLY_READY |
| SURFACE | Apply selection and review |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §4,5 |
| TRIGGER | Backend canApply and unchanged reviewed pair |
| MATERIAL_STATE | Explicit Submit enabled on valid review |
| DISCLOSURE_LEVEL | AUTHORIZED exact selection and current commercial; clear if authority lost |
| PRIMARY_ACTION | Submit strict UUID body with canonical Idempotency-Key |
| RECOVERY_ACTION | No auto-submit |
| ROLE_VARIATION | OWNER/MANAGER/ASSISTANT subject to CAMPAIGN_APPLICATION_APPLY and canApply |
| INSTAGRAM_DEPENDENCY | Current usable Instagram and entitlement rechecked on Submit |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Review retains exact Asset, Brief, deliverables, commercial and support; persistent footer never obscures body. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. Overlay: named dialog, inert background, initial focus, contained Tab/Shift+Tab, Escape/Close, restore invoking focus; selection/review survives safe close. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| VISUAL_REFERENCE | REF-CURRENT-WIZARD |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### APPLY_SUBMITTING

| Field | Value |
|---|---|
| FAMILY_ID | APPLY_SUBMITTING |
| SURFACE | Apply selection and review |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §4,5 |
| TRIGGER | POST command dispatched |
| MATERIAL_STATE | Single command pending with real busy state |
| DISCLOSURE_LEVEL | AUTHORIZED exact selection and current commercial; clear if authority lost |
| PRIMARY_ACTION | Wait; disable duplicate activation |
| RECOVERY_ACTION | Keep same key for same intent retry |
| ROLE_VARIATION | OWNER/MANAGER/ASSISTANT subject to CAMPAIGN_APPLICATION_APPLY and canApply |
| INSTAGRAM_DEPENDENCY | Current usable Instagram and entitlement rechecked on Submit |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Review retains exact Asset, Brief, deliverables, commercial and support; persistent footer never obscures body. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. Overlay: named dialog, inert background, initial focus, contained Tab/Shift+Tab, Escape/Close, restore invoking focus; selection/review survives safe close. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| VISUAL_REFERENCE | REF-CURRENT-WIZARD |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### APPLY_SUCCESS

| Field | Value |
|---|---|
| FAMILY_ID | APPLY_SUCCESS |
| SURFACE | Apply selection and review |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §4,5 |
| TRIGGER | HTTP200 command result |
| MATERIAL_STATE | Receipt acknowledged; fetch independent new Application |
| DISCLOSURE_LEVEL | AUTHORIZED exact selection and current commercial; clear if authority lost |
| PRIMARY_ACTION | View Application |
| RECOVERY_ACTION | Invalidate scoped list/dossier; no sibling collapse |
| ROLE_VARIATION | OWNER/MANAGER/ASSISTANT subject to CAMPAIGN_APPLICATION_APPLY and canApply |
| INSTAGRAM_DEPENDENCY | Current usable Instagram and entitlement rechecked on Submit |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Review retains exact Asset, Brief, deliverables, commercial and support; persistent footer never obscures body. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. Overlay: named dialog, inert background, initial focus, contained Tab/Shift+Tab, Escape/Close, restore invoking focus; selection/review survives safe close. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| VISUAL_REFERENCE | REF-CURRENT-WIZARD |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### APPLY_REPLAY

| Field | Value |
|---|---|
| FAMILY_ID | APPLY_REPLAY |
| SURFACE | Apply selection and review |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §5 |
| TRIGGER | Same key/same fingerprint replay HTTP200 |
| MATERIAL_STATE | Same receipt acknowledged without duplicate success rows |
| DISCLOSURE_LEVEL | AUTHORIZED exact selection and current commercial; clear if authority lost |
| PRIMARY_ACTION | View same Application |
| RECOVERY_ACTION | No second notification/toast duplication |
| ROLE_VARIATION | OWNER/MANAGER/ASSISTANT subject to CAMPAIGN_APPLICATION_APPLY and canApply |
| INSTAGRAM_DEPENDENCY | Current usable Instagram and entitlement rechecked on Submit |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Review retains exact Asset, Brief, deliverables, commercial and support; persistent footer never obscures body. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. Overlay: named dialog, inert background, initial focus, contained Tab/Shift+Tab, Escape/Close, restore invoking focus; selection/review survives safe close. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| VISUAL_REFERENCE | REF-CURRENT-WIZARD |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### APPLY_SELECTION_STALE

| Field | Value |
|---|---|
| FAMILY_ID | APPLY_SELECTION_STALE |
| SURFACE | Apply selection and review |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §8 |
| TRIGGER | Selection/Brief/Asset conflict |
| MATERIAL_STATE | Selection requires re-review |
| DISCLOSURE_LEVEL | AUTHORIZED exact selection and current commercial; clear if authority lost |
| PRIMARY_ACTION | Refresh dossier and choose valid pair |
| RECOVERY_ACTION | New explicit intent after changed pair |
| ROLE_VARIATION | OWNER/MANAGER/ASSISTANT subject to CAMPAIGN_APPLICATION_APPLY and canApply |
| INSTAGRAM_DEPENDENCY | Current usable Instagram and entitlement rechecked on Submit |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Review retains exact Asset, Brief, deliverables, commercial and support; persistent footer never obscures body. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. Overlay: named dialog, inert background, initial focus, contained Tab/Shift+Tab, Escape/Close, restore invoking focus; selection/review survives safe close. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| VISUAL_REFERENCE | REF-CURRENT-WIZARD |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### APPLY_CLOSED

| Field | Value |
|---|---|
| FAMILY_ID | APPLY_CLOSED |
| SURFACE | Apply selection and review |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §8 |
| TRIGGER | CAMPAIGN_APPLICATIONS_CLOSED |
| MATERIAL_STATE | Campaign no longer accepting Applications |
| DISCLOSURE_LEVEL | AUTHORIZED exact selection and current commercial; clear if authority lost |
| PRIMARY_ACTION | Read dossier/My Applications |
| RECOVERY_ACTION | No retry as unchanged valid submit |
| ROLE_VARIATION | OWNER/MANAGER/ASSISTANT subject to CAMPAIGN_APPLICATION_APPLY and canApply |
| INSTAGRAM_DEPENDENCY | Current usable Instagram and entitlement rechecked on Submit |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Review retains exact Asset, Brief, deliverables, commercial and support; persistent footer never obscures body. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. Overlay: named dialog, inert background, initial focus, contained Tab/Shift+Tab, Escape/Close, restore invoking focus; selection/review survives safe close. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| VISUAL_REFERENCE | REF-CURRENT-WIZARD |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### APPLY_ELIGIBILITY_UNAVAILABLE

| Field | Value |
|---|---|
| FAMILY_ID | APPLY_ELIGIBILITY_UNAVAILABLE |
| SURFACE | Apply selection and review |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §8 |
| TRIGGER | ELIGIBILITY_UNAVAILABLE |
| MATERIAL_STATE | Temporary eligibility failure |
| DISCLOSURE_LEVEL | AUTHORIZED exact selection and current commercial; clear if authority lost |
| PRIMARY_ACTION | Retry later after refetch |
| RECOVERY_ACTION | No client eligibility substitution |
| ROLE_VARIATION | OWNER/MANAGER/ASSISTANT subject to CAMPAIGN_APPLICATION_APPLY and canApply |
| INSTAGRAM_DEPENDENCY | Current usable Instagram and entitlement rechecked on Submit |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Review retains exact Asset, Brief, deliverables, commercial and support; persistent footer never obscures body. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. Overlay: named dialog, inert background, initial focus, contained Tab/Shift+Tab, Escape/Close, restore invoking focus; selection/review survives safe close. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| VISUAL_REFERENCE | REF-CURRENT-WIZARD |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### APPLY_INVITATION_INVALIDATED

| Field | Value |
|---|---|
| FAMILY_ID | APPLY_INVITATION_INVALIDATED |
| SURFACE | Apply selection and review |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §8 |
| TRIGGER | Exact invitation policy conflict |
| MATERIAL_STATE | Entitlement changed during review |
| DISCLOSURE_LEVEL | AUTHORIZED exact selection and current commercial; clear if authority lost |
| PRIMARY_ACTION | Follow safe invitation recovery |
| RECOVERY_ACTION | Remove now-unauthorized current detail |
| ROLE_VARIATION | OWNER/MANAGER/ASSISTANT subject to CAMPAIGN_APPLICATION_APPLY and canApply |
| INSTAGRAM_DEPENDENCY | Current usable Instagram and entitlement rechecked on Submit |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Review retains exact Asset, Brief, deliverables, commercial and support; persistent footer never obscures body. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. Overlay: named dialog, inert background, initial focus, contained Tab/Shift+Tab, Escape/Close, restore invoking focus; selection/review survives safe close. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| VISUAL_REFERENCE | REF-CURRENT-WIZARD |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### APPLY_ROLE_LOST

| Field | Value |
|---|---|
| FAMILY_ID | APPLY_ROLE_LOST |
| SURFACE | Apply selection and review |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §8 |
| TRIGGER | APPLICATION_ROLE_DENIED / membership loss |
| MATERIAL_STATE | Command no longer permitted |
| DISCLOSURE_LEVEL | AUTHORIZED exact selection and current commercial; clear if authority lost |
| PRIMARY_ACTION | Refresh actor and allowed actions |
| RECOVERY_ACTION | Clear unauthorized scoped state |
| ROLE_VARIATION | OWNER/MANAGER/ASSISTANT subject to CAMPAIGN_APPLICATION_APPLY and canApply |
| INSTAGRAM_DEPENDENCY | Current usable Instagram and entitlement rechecked on Submit |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Review retains exact Asset, Brief, deliverables, commercial and support; persistent footer never obscures body. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. Overlay: named dialog, inert background, initial focus, contained Tab/Shift+Tab, Escape/Close, restore invoking focus; selection/review survives safe close. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| VISUAL_REFERENCE | REF-CURRENT-WIZARD |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### APPLY_CAMPAIGN_QUOTA

| Field | Value |
|---|---|
| FAMILY_ID | APPLY_CAMPAIGN_QUOTA |
| SURFACE | Apply selection and review |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §5,8 |
| TRIGGER | APPLICATION_CAMPAIGN_LIMIT_REACHED |
| MATERIAL_STATE | Campaign limit reached |
| DISCLOSURE_LEVEL | AUTHORIZED exact selection and current commercial; clear if authority lost |
| PRIMARY_ACTION | View independent Applications |
| RECOVERY_ACTION | 2 non-WITHDRAWN; only lawful withdrawal releases |
| ROLE_VARIATION | OWNER/MANAGER/ASSISTANT subject to CAMPAIGN_APPLICATION_APPLY and canApply |
| INSTAGRAM_DEPENDENCY | Current usable Instagram and entitlement rechecked on Submit |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Review retains exact Asset, Brief, deliverables, commercial and support; persistent footer never obscures body. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. Overlay: named dialog, inert background, initial focus, contained Tab/Shift+Tab, Escape/Close, restore invoking focus; selection/review survives safe close. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| VISUAL_REFERENCE | REF-CURRENT-WIZARD |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### APPLY_BRAND_QUOTA

| Field | Value |
|---|---|
| FAMILY_ID | APPLY_BRAND_QUOTA |
| SURFACE | Apply selection and review |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §5,8 |
| TRIGGER | APPLICATION_BRAND_LIMIT_REACHED |
| MATERIAL_STATE | Brand limit reached |
| DISCLOSURE_LEVEL | AUTHORIZED exact selection and current commercial; clear if authority lost |
| PRIMARY_ACTION | View My Applications |
| RECOVERY_ACTION | 5 non-WITHDRAWN; no inventory metaphor |
| ROLE_VARIATION | OWNER/MANAGER/ASSISTANT subject to CAMPAIGN_APPLICATION_APPLY and canApply |
| INSTAGRAM_DEPENDENCY | Current usable Instagram and entitlement rechecked on Submit |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Review retains exact Asset, Brief, deliverables, commercial and support; persistent footer never obscures body. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. Overlay: named dialog, inert background, initial focus, contained Tab/Shift+Tab, Escape/Close, restore invoking focus; selection/review survives safe close. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| VISUAL_REFERENCE | REF-CURRENT-WIZARD |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### APPLY_SAME_USED

| Field | Value |
|---|---|
| FAMILY_ID | APPLY_SAME_USED |
| SURFACE | Apply selection and review |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §5,8 |
| TRIGGER | APPLICATION_OPPORTUNITY_ALREADY_USED |
| MATERIAL_STATE | This exact Asset/Brief already has blocking Application |
| DISCLOSURE_LEVEL | AUTHORIZED exact selection and current commercial; clear if authority lost |
| PRIMARY_ACTION | View Applications |
| RECOVERY_ACTION | Other selectable pair only if backend permits |
| ROLE_VARIATION | OWNER/MANAGER/ASSISTANT subject to CAMPAIGN_APPLICATION_APPLY and canApply |
| INSTAGRAM_DEPENDENCY | Current usable Instagram and entitlement rechecked on Submit |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Review retains exact Asset, Brief, deliverables, commercial and support; persistent footer never obscures body. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. Overlay: named dialog, inert background, initial focus, contained Tab/Shift+Tab, Escape/Close, restore invoking focus; selection/review survives safe close. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| VISUAL_REFERENCE | REF-CURRENT-WIZARD |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### APPLY_CONFLICT

| Field | Value |
|---|---|
| FAMILY_ID | APPLY_CONFLICT |
| SURFACE | Apply selection and review |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §8 |
| TRIGGER | 409 recognized domain code or safe generic conflict |
| MATERIAL_STATE | Command could not commit current intent |
| DISCLOSURE_LEVEL | AUTHORIZED exact selection and current commercial; clear if authority lost |
| PRIMARY_ACTION | Refresh authoritative state |
| RECOVERY_ACTION | Never automatically change key and resubmit |
| ROLE_VARIATION | OWNER/MANAGER/ASSISTANT subject to CAMPAIGN_APPLICATION_APPLY and canApply |
| INSTAGRAM_DEPENDENCY | Current usable Instagram and entitlement rechecked on Submit |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Review retains exact Asset, Brief, deliverables, commercial and support; persistent footer never obscures body. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. Overlay: named dialog, inert background, initial focus, contained Tab/Shift+Tab, Escape/Close, restore invoking focus; selection/review survives safe close. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| VISUAL_REFERENCE | REF-CURRENT-WIZARD |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### APPLY_AUTH_FAILURE

| Field | Value |
|---|---|
| FAMILY_ID | APPLY_AUTH_FAILURE |
| SURFACE | Apply selection and review |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §8 |
| TRIGGER | 401 after shared single refresh |
| MATERIAL_STATE | Session expired mid-command |
| DISCLOSURE_LEVEL | AUTHORIZED exact selection and current commercial; clear if authority lost |
| PRIMARY_ACTION | Sign in and refetch |
| RECOVERY_ACTION | No raw credentials or protected DTO in return path |
| ROLE_VARIATION | OWNER/MANAGER/ASSISTANT subject to CAMPAIGN_APPLICATION_APPLY and canApply |
| INSTAGRAM_DEPENDENCY | Current usable Instagram and entitlement rechecked on Submit |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Review retains exact Asset, Brief, deliverables, commercial and support; persistent footer never obscures body. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. Overlay: named dialog, inert background, initial focus, contained Tab/Shift+Tab, Escape/Close, restore invoking focus; selection/review survives safe close. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| VISUAL_REFERENCE | REF-CURRENT-WIZARD |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### APPLY_KEY_REQUIRED

| Field | Value |
|---|---|
| FAMILY_ID | APPLY_KEY_REQUIRED |
| SURFACE | Apply selection and review |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §5,8 |
| TRIGGER | APPLICATION_IDEMPOTENCY_KEY_REQUIRED |
| MATERIAL_STATE | Client request incomplete |
| DISCLOSURE_LEVEL | AUTHORIZED exact selection and current commercial; clear if authority lost |
| PRIMARY_ACTION | Return to Review; correct request integration |
| RECOVERY_ACTION | No endless retry; no raw key display |
| ROLE_VARIATION | OWNER/MANAGER/ASSISTANT subject to CAMPAIGN_APPLICATION_APPLY and canApply |
| INSTAGRAM_DEPENDENCY | Current usable Instagram and entitlement rechecked on Submit |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Review retains exact Asset, Brief, deliverables, commercial and support; persistent footer never obscures body. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. Overlay: named dialog, inert background, initial focus, contained Tab/Shift+Tab, Escape/Close, restore invoking focus; selection/review survives safe close. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| VISUAL_REFERENCE | REF-CURRENT-WIZARD |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### APPLY_KEY_REUSED

| Field | Value |
|---|---|
| FAMILY_ID | APPLY_KEY_REUSED |
| SURFACE | Apply selection and review |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §5,8 |
| TRIGGER | APPLICATION_IDEMPOTENCY_KEY_REUSED |
| MATERIAL_STATE | Same key used with changed selection |
| DISCLOSURE_LEVEL | AUTHORIZED exact selection and current commercial; clear if authority lost |
| PRIMARY_ACTION | Re-review changed intent |
| RECOVERY_ACTION | New key only for new explicit intent |
| ROLE_VARIATION | OWNER/MANAGER/ASSISTANT subject to CAMPAIGN_APPLICATION_APPLY and canApply |
| INSTAGRAM_DEPENDENCY | Current usable Instagram and entitlement rechecked on Submit |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Review retains exact Asset, Brief, deliverables, commercial and support; persistent footer never obscures body. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. Overlay: named dialog, inert background, initial focus, contained Tab/Shift+Tab, Escape/Close, restore invoking focus; selection/review survives safe close. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| VISUAL_REFERENCE | REF-CURRENT-WIZARD |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### APPLY_REAPPLY

| Field | Value |
|---|---|
| FAMILY_ID | APPLY_REAPPLY |
| SURFACE | Apply selection and review |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §5 |
| TRIGGER | Fresh Opportunity projection permits Apply |
| MATERIAL_STATE | New row may be allowed for WITHDRAWN/EXPIRED pair |
| DISCLOSURE_LEVEL | AUTHORIZED exact selection and current commercial; clear if authority lost |
| PRIMARY_ACTION | Review and explicitly submit new Application |
| RECOVERY_ACTION | EXPIRED still counts quotas; no revive old row |
| ROLE_VARIATION | OWNER/MANAGER/ASSISTANT subject to CAMPAIGN_APPLICATION_APPLY and canApply |
| INSTAGRAM_DEPENDENCY | Current usable Instagram and entitlement rechecked on Submit |
| HISTORICAL_OR_CURRENT | CURRENT |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Review retains exact Asset, Brief, deliverables, commercial and support; persistent footer never obscures body. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. Overlay: named dialog, inert background, initial focus, contained Tab/Shift+Tab, Escape/Close, restore invoking focus; selection/review survives safe close. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/CampaignApplicationWizard.tsx |
| VISUAL_REFERENCE | REF-CURRENT-WIZARD |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### HIST_LOADING

| Field | Value |
|---|---|
| FAMILY_ID | HIST_LOADING |
| SURFACE | My Applications and detail |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §4 |
| TRIGGER | History GET pending |
| MATERIAL_STATE | History loading without IG redirect |
| DISCLOSURE_LEVEL | Current-team authorized immutable snapshot; no current Opportunity fetch required |
| PRIMARY_ACTION | Wait |
| RECOVERY_ACTION | Retry if failed |
| ROLE_VARIATION | All three current roles view; canWithdrawPending governs control |
| INSTAGRAM_DEPENDENCY | NONE: history remains readable with disconnected/revalidation/reconnect states |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Desktop rows or cards; tablet/mobile independent cards with visible status, selected pair and actions; no sibling collapse. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/HistoryArchiveWorkspace.tsx |
| VISUAL_REFERENCE | REF-PH7-APPLICANTS |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### HIST_EMPTY

| Field | Value |
|---|---|
| FAMILY_ID | HIST_EMPTY |
| SURFACE | My Applications and detail |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §4 |
| TRIGGER | items empty |
| MATERIAL_STATE | No Applications for current subject |
| DISCLOSURE_LEVEL | Current-team authorized immutable snapshot; no current Opportunity fetch required |
| PRIMARY_ACTION | Open Opportunities |
| RECOVERY_ACTION | No fabricated closed-collaboration history |
| ROLE_VARIATION | All three current roles view; canWithdrawPending governs control |
| INSTAGRAM_DEPENDENCY | NONE: history remains readable with disconnected/revalidation/reconnect states |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Desktop rows or cards; tablet/mobile independent cards with visible status, selected pair and actions; no sibling collapse. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/HistoryArchiveWorkspace.tsx |
| VISUAL_REFERENCE | REF-PH7-APPLICANTS |
| DECISION_LADDER_DISPOSITION | REUSE_ACCEPTED_REFERENCE |

### HIST_READY

| Field | Value |
|---|---|
| FAMILY_ID | HIST_READY |
| SURFACE | My Applications and detail |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §4 |
| TRIGGER | items nonempty |
| MATERIAL_STATE | Independent rows in backend order |
| DISCLOSURE_LEVEL | Current-team authorized immutable snapshot; no current Opportunity fetch required |
| PRIMARY_ACTION | View selected Application |
| RECOVERY_ACTION | No campaign-wide already-applied state |
| ROLE_VARIATION | All three current roles view; canWithdrawPending governs control |
| INSTAGRAM_DEPENDENCY | NONE: history remains readable with disconnected/revalidation/reconnect states |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Desktop rows or cards; tablet/mobile independent cards with visible status, selected pair and actions; no sibling collapse. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/HistoryArchiveWorkspace.tsx |
| VISUAL_REFERENCE | REF-PH7-APPLICANTS |
| DECISION_LADDER_DISPOSITION | RECONCILE_DIRECTLY |

### HIST_PAGINATION

| Field | Value |
|---|---|
| FAMILY_ID | HIST_PAGINATION |
| SURFACE | My Applications and detail |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §4 |
| TRIGGER | nextCursor nonnull |
| MATERIAL_STATE | Append immutable history page |
| DISCLOSURE_LEVEL | Current-team authorized immutable snapshot; no current Opportunity fetch required |
| PRIMARY_ACTION | Load more |
| RECOVERY_ACTION | No offset conversion or inferred full Campaign grouping |
| ROLE_VARIATION | All three current roles view; canWithdrawPending governs control |
| INSTAGRAM_DEPENDENCY | NONE: history remains readable with disconnected/revalidation/reconnect states |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Desktop rows or cards; tablet/mobile independent cards with visible status, selected pair and actions; no sibling collapse. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/HistoryArchiveWorkspace.tsx |
| VISUAL_REFERENCE | REF-PH7-APPLICANTS |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### HIST_PENDING

| Field | Value |
|---|---|
| FAMILY_ID | HIST_PENDING |
| SURFACE | My Applications and detail |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §4 |
| TRIGGER | status=PENDING |
| MATERIAL_STATE | Pending selected-pair snapshot |
| DISCLOSURE_LEVEL | Current-team authorized immutable snapshot; no current Opportunity fetch required |
| PRIMARY_ACTION | View detail; Withdraw only if permitted |
| RECOVERY_ACTION | No status inference from dates |
| ROLE_VARIATION | All three current roles view; canWithdrawPending governs control |
| INSTAGRAM_DEPENDENCY | NONE: history remains readable with disconnected/revalidation/reconnect states |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Desktop rows or cards; tablet/mobile independent cards with visible status, selected pair and actions; no sibling collapse. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/HistoryArchiveWorkspace.tsx |
| VISUAL_REFERENCE | REF-PH7-APPLICANTS |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### HIST_APPROVED

| Field | Value |
|---|---|
| FAMILY_ID | HIST_APPROVED |
| SURFACE | My Applications and detail |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §4,6 |
| TRIGGER | status=APPROVED |
| MATERIAL_STATE | Approved snapshot and own Collaboration link |
| DISCLOSURE_LEVEL | Current-team authorized immutable snapshot; no current Opportunity fetch required |
| PRIMARY_ACTION | Open own C04 Collaboration |
| RECOVERY_ACTION | No sibling supersession |
| ROLE_VARIATION | All three current roles view; canWithdrawPending governs control |
| INSTAGRAM_DEPENDENCY | NONE: history remains readable with disconnected/revalidation/reconnect states |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Desktop rows or cards; tablet/mobile independent cards with visible status, selected pair and actions; no sibling collapse. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/HistoryArchiveWorkspace.tsx |
| VISUAL_REFERENCE | REF-PH7-APPLICANTS |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### HIST_REJECTED

| Field | Value |
|---|---|
| FAMILY_ID | HIST_REJECTED |
| SURFACE | My Applications and detail |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §4,5 |
| TRIGGER | status=REJECTED |
| MATERIAL_STATE | Rejected terminal snapshot |
| DISCLOSURE_LEVEL | Current-team authorized immutable snapshot; no current Opportunity fetch required |
| PRIMARY_ACTION | Read detail |
| RECOVERY_ACTION | No same-pair reapply; respect current backend |
| ROLE_VARIATION | All three current roles view; canWithdrawPending governs control |
| INSTAGRAM_DEPENDENCY | NONE: history remains readable with disconnected/revalidation/reconnect states |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Desktop rows or cards; tablet/mobile independent cards with visible status, selected pair and actions; no sibling collapse. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/HistoryArchiveWorkspace.tsx |
| VISUAL_REFERENCE | REF-PH7-APPLICANTS |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### HIST_WITHDRAWN

| Field | Value |
|---|---|
| FAMILY_ID | HIST_WITHDRAWN |
| SURFACE | My Applications and detail |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §4,5 |
| TRIGGER | status=WITHDRAWN |
| MATERIAL_STATE | Withdrawn immutable row remains |
| DISCLOSURE_LEVEL | Current-team authorized immutable snapshot; no current Opportunity fetch required |
| PRIMARY_ACTION | Read detail; separately revisit Opportunity |
| RECOVERY_ACTION | New Application on reapply; quota released |
| ROLE_VARIATION | All three current roles view; canWithdrawPending governs control |
| INSTAGRAM_DEPENDENCY | NONE: history remains readable with disconnected/revalidation/reconnect states |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Desktop rows or cards; tablet/mobile independent cards with visible status, selected pair and actions; no sibling collapse. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/HistoryArchiveWorkspace.tsx |
| VISUAL_REFERENCE | REF-PH7-APPLICANTS |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### HIST_EXPIRED

| Field | Value |
|---|---|
| FAMILY_ID | HIST_EXPIRED |
| SURFACE | My Applications and detail |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §4,5 |
| TRIGGER | status=EXPIRED |
| MATERIAL_STATE | Expired immutable row remains |
| DISCLOSURE_LEVEL | Current-team authorized immutable snapshot; no current Opportunity fetch required |
| PRIMARY_ACTION | Read detail; separately revisit Opportunity |
| RECOVERY_ACTION | Backend reapply subject to quotas; no frontend expiry |
| ROLE_VARIATION | All three current roles view; canWithdrawPending governs control |
| INSTAGRAM_DEPENDENCY | NONE: history remains readable with disconnected/revalidation/reconnect states |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Desktop rows or cards; tablet/mobile independent cards with visible status, selected pair and actions; no sibling collapse. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/HistoryArchiveWorkspace.tsx |
| VISUAL_REFERENCE | REF-PH7-APPLICANTS |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### HIST_SUPERSEDED

| Field | Value |
|---|---|
| FAMILY_ID | HIST_SUPERSEDED |
| SURFACE | My Applications and detail |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §4 |
| TRIGGER | Supported status=SUPERSEDED returned |
| MATERIAL_STATE | Bounded historical Superseded label |
| DISCLOSURE_LEVEL | Current-team authorized immutable snapshot; no current Opportunity fetch required |
| PRIMARY_ACTION | Read detail |
| RECOVERY_ACTION | No automatic producer or sibling collapse |
| ROLE_VARIATION | All three current roles view; canWithdrawPending governs control |
| INSTAGRAM_DEPENDENCY | NONE: history remains readable with disconnected/revalidation/reconnect states |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Desktop rows or cards; tablet/mobile independent cards with visible status, selected pair and actions; no sibling collapse. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/HistoryArchiveWorkspace.tsx |
| VISUAL_REFERENCE | REF-PH7-APPLICANTS |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### HIST_LEGACY_COMPATIBILITY

| Field | Value |
|---|---|
| FAMILY_ID | HIST_LEGACY_COMPATIBILITY |
| SURFACE | My Applications and detail |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §4 |
| TRIGGER | P1 Creator response is C03_CANONICAL only |
| MATERIAL_STATE | No invented Creator legacy adapter |
| DISCLOSURE_LEVEL | Current-team authorized immutable snapshot; no current Opportunity fetch required |
| PRIMARY_ACTION | Render supported canonical record |
| RECOVERY_ACTION | Legacy Brand adapter is not Creator history API; unexpected authority -> malformed |
| ROLE_VARIATION | All three current roles view; canWithdrawPending governs control |
| INSTAGRAM_DEPENDENCY | NONE: history remains readable with disconnected/revalidation/reconnect states |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Desktop rows or cards; tablet/mobile independent cards with visible status, selected pair and actions; no sibling collapse. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/HistoryArchiveWorkspace.tsx |
| VISUAL_REFERENCE | REF-PH7-APPLICANTS |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### HIST_DETAIL

| Field | Value |
|---|---|
| FAMILY_ID | HIST_DETAIL |
| SURFACE | My Applications and detail |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §4 |
| TRIGGER | GET applicationId succeeds |
| MATERIAL_STATE | Rich immutable snapshot detail |
| DISCLOSURE_LEVEL | Current-team authorized immutable snapshot; no current Opportunity fetch required |
| PRIMARY_ACTION | Read Brief/commercial; permitted action/link |
| RECOVERY_ACTION | No current Campaign hydration |
| ROLE_VARIATION | All three current roles view; canWithdrawPending governs control |
| INSTAGRAM_DEPENDENCY | NONE: history remains readable with disconnected/revalidation/reconnect states |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Desktop rows or cards; tablet/mobile independent cards with visible status, selected pair and actions; no sibling collapse. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/HistoryArchiveWorkspace.tsx |
| VISUAL_REFERENCE | REF-PH7-APPLICANTS |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### HIST_NOT_FOUND

| Field | Value |
|---|---|
| FAMILY_ID | HIST_NOT_FOUND |
| SURFACE | My Applications and detail |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §8 |
| TRIGGER | APPLICATION_NOT_FOUND |
| MATERIAL_STATE | Generic Application unavailable |
| DISCLOSURE_LEVEL | Current-team authorized immutable snapshot; no current Opportunity fetch required |
| PRIMARY_ACTION | Return to My Applications |
| RECOVERY_ACTION | Do not disclose other workspace record |
| ROLE_VARIATION | All three current roles view; canWithdrawPending governs control |
| INSTAGRAM_DEPENDENCY | NONE: history remains readable with disconnected/revalidation/reconnect states |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Desktop rows or cards; tablet/mobile independent cards with visible status, selected pair and actions; no sibling collapse. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/HistoryArchiveWorkspace.tsx |
| VISUAL_REFERENCE | REF-PH7-APPLICANTS |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### HIST_CURSOR_ERROR

| Field | Value |
|---|---|
| FAMILY_ID | HIST_CURSOR_ERROR |
| SURFACE | My Applications and detail |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §8 |
| TRIGGER | APPLICATION_CURSOR_INVALID |
| MATERIAL_STATE | Reload first history page |
| DISCLOSURE_LEVEL | Current-team authorized immutable snapshot; no current Opportunity fetch required |
| PRIMARY_ACTION | Reload first page |
| RECOVERY_ACTION | Keep invalid cursor out of future requests |
| ROLE_VARIATION | All three current roles view; canWithdrawPending governs control |
| INSTAGRAM_DEPENDENCY | NONE: history remains readable with disconnected/revalidation/reconnect states |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Desktop rows or cards; tablet/mobile independent cards with visible status, selected pair and actions; no sibling collapse. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/HistoryArchiveWorkspace.tsx |
| VISUAL_REFERENCE | REF-PH7-APPLICANTS |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### HIST_IG_DISCONNECTED

| Field | Value |
|---|---|
| FAMILY_ID | HIST_IG_DISCONNECTED |
| SURFACE | My Applications and detail |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §3,4 |
| TRIGGER | IG DISCONNECTED_IDENTITY_RETAINED + current team |
| MATERIAL_STATE | History remains available |
| DISCLOSURE_LEVEL | Current-team authorized immutable snapshot; no current Opportunity fetch required |
| PRIMARY_ACTION | Read history/detail |
| RECOVERY_ACTION | Optional Settings action never blocks content |
| ROLE_VARIATION | All three current roles view; canWithdrawPending governs control |
| INSTAGRAM_DEPENDENCY | NONE: history remains readable with disconnected/revalidation/reconnect states |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Desktop rows or cards; tablet/mobile independent cards with visible status, selected pair and actions; no sibling collapse. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/HistoryArchiveWorkspace.tsx |
| VISUAL_REFERENCE | REF-PH7-APPLICANTS |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### HIST_IG_REVALIDATION

| Field | Value |
|---|---|
| FAMILY_ID | HIST_IG_REVALIDATION |
| SURFACE | My Applications and detail |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §3,4 |
| TRIGGER | IG REVALIDATION_REQUIRED + current team |
| MATERIAL_STATE | History remains available |
| DISCLOSURE_LEVEL | Current-team authorized immutable snapshot; no current Opportunity fetch required |
| PRIMARY_ACTION | Read history/detail |
| RECOVERY_ACTION | No route-wide IG gate |
| ROLE_VARIATION | All three current roles view; canWithdrawPending governs control |
| INSTAGRAM_DEPENDENCY | NONE: history remains readable with disconnected/revalidation/reconnect states |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Desktop rows or cards; tablet/mobile independent cards with visible status, selected pair and actions; no sibling collapse. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/HistoryArchiveWorkspace.tsx |
| VISUAL_REFERENCE | REF-PH7-APPLICANTS |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### HIST_IG_RECONNECT

| Field | Value |
|---|---|
| FAMILY_ID | HIST_IG_RECONNECT |
| SURFACE | My Applications and detail |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §3,4 |
| TRIGGER | IG RECONNECT_REQUIRED + current team |
| MATERIAL_STATE | History remains available |
| DISCLOSURE_LEVEL | Current-team authorized immutable snapshot; no current Opportunity fetch required |
| PRIMARY_ACTION | Read history/detail |
| RECOVERY_ACTION | No route-wide IG gate |
| ROLE_VARIATION | All three current roles view; canWithdrawPending governs control |
| INSTAGRAM_DEPENDENCY | NONE: history remains readable with disconnected/revalidation/reconnect states |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Desktop rows or cards; tablet/mobile independent cards with visible status, selected pair and actions; no sibling collapse. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/HistoryArchiveWorkspace.tsx |
| VISUAL_REFERENCE | REF-PH7-APPLICANTS |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### HIST_MULTIPLE_SIBLINGS

| Field | Value |
|---|---|
| FAMILY_ID | HIST_MULTIPLE_SIBLINGS |
| SURFACE | My Applications and detail |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §4,5 |
| TRIGGER | Distinct applicationId values |
| MATERIAL_STATE | Multiple Applications for same Campaign remain separate |
| DISCLOSURE_LEVEL | Current-team authorized immutable snapshot; no current Opportunity fetch required |
| PRIMARY_ACTION | Open each row individually |
| RECOVERY_ACTION | Do not imply page contains every sibling |
| ROLE_VARIATION | All three current roles view; canWithdrawPending governs control |
| INSTAGRAM_DEPENDENCY | NONE: history remains readable with disconnected/revalidation/reconnect states |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Desktop rows or cards; tablet/mobile independent cards with visible status, selected pair and actions; no sibling collapse. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/creator-campaigns/components/HistoryArchiveWorkspace.tsx |
| VISUAL_REFERENCE | REF-PH7-APPLICANTS |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### ROLE_OWNER_PENDING

| Field | Value |
|---|---|
| FAMILY_ID | ROLE_OWNER_PENDING |
| SURFACE | Application role and capability |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §3,4 |
| TRIGGER | OWNER and PENDING and canWithdrawPending=true |
| MATERIAL_STATE | Withdraw shown only when projection allows |
| DISCLOSURE_LEVEL | Immutable Application read with backend canWithdrawPending |
| PRIMARY_ACTION | Withdraw |
| RECOVERY_ACTION | Re-resolve authority on command |
| ROLE_VARIATION | Backend projection plus C05 actions; no frontend role policy substitute |
| INSTAGRAM_DEPENDENCY | NONE for historical read/withdraw |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Status and permitted action colocated; absent Withdraw is not a disabled fake permission. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/shared/creator/creator-workspace-actor-mapper.ts |
| VISUAL_REFERENCE | REF-CURRENT-SHELL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### ROLE_MANAGER_PENDING

| Field | Value |
|---|---|
| FAMILY_ID | ROLE_MANAGER_PENDING |
| SURFACE | Application role and capability |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §3,4 |
| TRIGGER | MANAGER and PENDING and canWithdrawPending=true |
| MATERIAL_STATE | Withdraw shown only when projection allows |
| DISCLOSURE_LEVEL | Immutable Application read with backend canWithdrawPending |
| PRIMARY_ACTION | Withdraw |
| RECOVERY_ACTION | Re-resolve authority on command |
| ROLE_VARIATION | Backend projection plus C05 actions; no frontend role policy substitute |
| INSTAGRAM_DEPENDENCY | NONE for historical read/withdraw |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Status and permitted action colocated; absent Withdraw is not a disabled fake permission. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/shared/creator/creator-workspace-actor-mapper.ts |
| VISUAL_REFERENCE | REF-CURRENT-SHELL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### ROLE_ASSISTANT_PENDING

| Field | Value |
|---|---|
| FAMILY_ID | ROLE_ASSISTANT_PENDING |
| SURFACE | Application role and capability |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §3,4 |
| TRIGGER | ASSISTANT and backend canWithdrawPending=false |
| MATERIAL_STATE | Read and Apply rights; no Withdraw |
| DISCLOSURE_LEVEL | Immutable Application read with backend canWithdrawPending |
| PRIMARY_ACTION | Read Application |
| RECOVERY_ACTION | No frontend role-label override |
| ROLE_VARIATION | Backend projection plus C05 actions; no frontend role policy substitute |
| INSTAGRAM_DEPENDENCY | NONE for historical read/withdraw |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Status and permitted action colocated; absent Withdraw is not a disabled fake permission. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/shared/creator/creator-workspace-actor-mapper.ts |
| VISUAL_REFERENCE | REF-CURRENT-SHELL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### ROLE_TERMINAL

| Field | Value |
|---|---|
| FAMILY_ID | ROLE_TERMINAL |
| SURFACE | Application role and capability |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §3,4 |
| TRIGGER | Terminal status and canWithdrawPending=false |
| MATERIAL_STATE | No Withdraw on terminal row |
| DISCLOSURE_LEVEL | Immutable Application read with backend canWithdrawPending |
| PRIMARY_ACTION | Read detail/open C04 when linked |
| RECOVERY_ACTION | Refresh on stale action conflict |
| ROLE_VARIATION | Backend projection plus C05 actions; no frontend role policy substitute |
| INSTAGRAM_DEPENDENCY | NONE for historical read/withdraw |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Status and permitted action colocated; absent Withdraw is not a disabled fake permission. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/shared/creator/creator-workspace-actor-mapper.ts |
| VISUAL_REFERENCE | REF-CURRENT-SHELL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### WITHDRAW_CONFIRM

| Field | Value |
|---|---|
| FAMILY_ID | WITHDRAW_CONFIRM |
| SURFACE | Withdraw pending Application |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §4,5 |
| TRIGGER | Permitted Withdraw clicked |
| MATERIAL_STATE | Explain withdrawal of exact pending Application |
| DISCLOSURE_LEVEL | Current-team immutable history and command result |
| PRIMARY_ACTION | Confirm Withdraw |
| RECOVERY_ACTION | Cancel returns focus; no sibling effect |
| ROLE_VARIATION | Owner/Manager only with canWithdrawPending; Assistant no action |
| INSTAGRAM_DEPENDENCY | NONE; current Team authority required |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Small confirmation dialog/compact mobile sheet; name exact Application/selection; Cancel first safe focus. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. Overlay: named dialog, inert background, initial focus, contained Tab/Shift+Tab, Escape/Close, restore invoking focus; selection/review survives safe close. |
| CURRENT_FRONTEND_MATCH | src/design-system/aurora/components/SideDrawer.tsx |
| VISUAL_REFERENCE | REF-C04-DRAWER |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### WITHDRAW_SUBMITTING

| Field | Value |
|---|---|
| FAMILY_ID | WITHDRAW_SUBMITTING |
| SURFACE | Withdraw pending Application |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §4,5 |
| TRIGGER | POST withdraw with Idempotency-Key |
| MATERIAL_STATE | Single withdrawal pending |
| DISCLOSURE_LEVEL | Current-team immutable history and command result |
| PRIMARY_ACTION | Wait |
| RECOVERY_ACTION | Retry same key for same intent only |
| ROLE_VARIATION | Owner/Manager only with canWithdrawPending; Assistant no action |
| INSTAGRAM_DEPENDENCY | NONE; current Team authority required |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Small confirmation dialog/compact mobile sheet; name exact Application/selection; Cancel first safe focus. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. Overlay: named dialog, inert background, initial focus, contained Tab/Shift+Tab, Escape/Close, restore invoking focus; selection/review survives safe close. |
| CURRENT_FRONTEND_MATCH | src/design-system/aurora/components/SideDrawer.tsx |
| VISUAL_REFERENCE | REF-C04-DRAWER |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### WITHDRAW_SUCCESS

| Field | Value |
|---|---|
| FAMILY_ID | WITHDRAW_SUCCESS |
| SURFACE | Withdraw pending Application |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §4,5 |
| TRIGGER | HTTP200 withdrawal receipt |
| MATERIAL_STATE | Updated WITHDRAWN row retained |
| DISCLOSURE_LEVEL | Current-team immutable history and command result |
| PRIMARY_ACTION | Return to Application |
| RECOVERY_ACTION | Refresh row/list; no deletion |
| ROLE_VARIATION | Owner/Manager only with canWithdrawPending; Assistant no action |
| INSTAGRAM_DEPENDENCY | NONE; current Team authority required |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Small confirmation dialog/compact mobile sheet; name exact Application/selection; Cancel first safe focus. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. Overlay: named dialog, inert background, initial focus, contained Tab/Shift+Tab, Escape/Close, restore invoking focus; selection/review survives safe close. |
| CURRENT_FRONTEND_MATCH | src/design-system/aurora/components/SideDrawer.tsx |
| VISUAL_REFERENCE | REF-C04-DRAWER |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### WITHDRAW_REPLAY

| Field | Value |
|---|---|
| FAMILY_ID | WITHDRAW_REPLAY |
| SURFACE | Withdraw pending Application |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §5 |
| TRIGGER | Same withdrawal receipt replay |
| MATERIAL_STATE | Same transition acknowledged |
| DISCLOSURE_LEVEL | Current-team immutable history and command result |
| PRIMARY_ACTION | View updated row |
| RECOVERY_ACTION | No duplicate success side effects |
| ROLE_VARIATION | Owner/Manager only with canWithdrawPending; Assistant no action |
| INSTAGRAM_DEPENDENCY | NONE; current Team authority required |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Small confirmation dialog/compact mobile sheet; name exact Application/selection; Cancel first safe focus. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. Overlay: named dialog, inert background, initial focus, contained Tab/Shift+Tab, Escape/Close, restore invoking focus; selection/review survives safe close. |
| CURRENT_FRONTEND_MATCH | src/design-system/aurora/components/SideDrawer.tsx |
| VISUAL_REFERENCE | REF-C04-DRAWER |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### WITHDRAW_CONFLICT

| Field | Value |
|---|---|
| FAMILY_ID | WITHDRAW_CONFLICT |
| SURFACE | Withdraw pending Application |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §8 |
| TRIGGER | APPLICATION_TRANSITION_CONFLICT |
| MATERIAL_STATE | Application is no longer pending |
| DISCLOSURE_LEVEL | Current-team immutable history and command result |
| PRIMARY_ACTION | Refresh Application |
| RECOVERY_ACTION | Do not force Withdraw |
| ROLE_VARIATION | Owner/Manager only with canWithdrawPending; Assistant no action |
| INSTAGRAM_DEPENDENCY | NONE; current Team authority required |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Small confirmation dialog/compact mobile sheet; name exact Application/selection; Cancel first safe focus. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. Overlay: named dialog, inert background, initial focus, contained Tab/Shift+Tab, Escape/Close, restore invoking focus; selection/review survives safe close. |
| CURRENT_FRONTEND_MATCH | src/design-system/aurora/components/SideDrawer.tsx |
| VISUAL_REFERENCE | REF-C04-DRAWER |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### WITHDRAW_FAILURE

| Field | Value |
|---|---|
| FAMILY_ID | WITHDRAW_FAILURE |
| SURFACE | Withdraw pending Application |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §8 |
| TRIGGER | 403/401/transport/recognized conflict |
| MATERIAL_STATE | Safe inline failure |
| DISCLOSURE_LEVEL | Current-team immutable history and command result |
| PRIMARY_ACTION | Follow exact recovery |
| RECOVERY_ACTION | No optimistic terminal state without receipt |
| ROLE_VARIATION | Owner/Manager only with canWithdrawPending; Assistant no action |
| INSTAGRAM_DEPENDENCY | NONE; current Team authority required |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Small confirmation dialog/compact mobile sheet; name exact Application/selection; Cancel first safe focus. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. Overlay: named dialog, inert background, initial focus, contained Tab/Shift+Tab, Escape/Close, restore invoking focus; selection/review survives safe close. |
| CURRENT_FRONTEND_MATCH | src/design-system/aurora/components/SideDrawer.tsx |
| VISUAL_REFERENCE | REF-C04-DRAWER |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### HANDOFF_APPROVED

| Field | Value |
|---|---|
| FAMILY_ID | HANDOFF_APPROVED |
| SURFACE | Approved Application to C04 |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §6 |
| TRIGGER | APPROVED with collaborationId |
| MATERIAL_STATE | Navigate own approved Collaboration |
| DISCLOSURE_LEVEL | Snapshot and backend collaborationId only |
| PRIMARY_ACTION | /creator/collaborations?thread=<collaborationId> |
| RECOVERY_ACTION | Existing C04 guard owns destination; remove only IG pre-gate |
| ROLE_VARIATION | Current-team historical read; C04 owns destination authority |
| INSTAGRAM_DEPENDENCY | NONE in C03 history/link |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Named link per approved Application; keep sibling identities distinct. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/collaboration/utils/collaboration-selection.ts |
| VISUAL_REFERENCE | REF-C04-DRAWER |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### HANDOFF_MULTIPLE

| Field | Value |
|---|---|
| FAMILY_ID | HANDOFF_MULTIPLE |
| SURFACE | Approved Application to C04 |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §6 |
| TRIGGER | Multiple approved Applications with distinct collaborationId |
| MATERIAL_STATE | Separate links for approved siblings |
| DISCLOSURE_LEVEL | Snapshot and backend collaborationId only |
| PRIMARY_ACTION | Open chosen link |
| RECOVERY_ACTION | No Campaign x Creator deduplication |
| ROLE_VARIATION | Current-team historical read; C04 owns destination authority |
| INSTAGRAM_DEPENDENCY | NONE in C03 history/link |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Named link per approved Application; keep sibling identities distinct. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/collaboration/utils/collaboration-selection.ts |
| VISUAL_REFERENCE | REF-C04-DRAWER |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### HANDOFF_INVALID

| Field | Value |
|---|---|
| FAMILY_ID | HANDOFF_INVALID |
| SURFACE | Approved Application to C04 |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §6 |
| TRIGGER | APPROVED missing required collaboration lineage |
| MATERIAL_STATE | Malformed approved record; no invented pending handoff |
| DISCLOSURE_LEVEL | Snapshot and backend collaborationId only |
| PRIMARY_ACTION | Refresh history; report unavailable link |
| RECOVERY_ACTION | Do not synthesize Collaboration or run repair |
| ROLE_VARIATION | Current-team historical read; C04 owns destination authority |
| INSTAGRAM_DEPENDENCY | NONE in C03 history/link |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Named link per approved Application; keep sibling identities distinct. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/features/collaboration/utils/collaboration-selection.ts |
| VISUAL_REFERENCE | REF-C04-DRAWER |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### NOTIF_LOADING

| Field | Value |
|---|---|
| FAMILY_ID | NOTIF_LOADING |
| SURFACE | Creator notification panel |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §7 |
| TRIGGER | GET list pending |
| MATERIAL_STATE | Named bell/panel loading |
| DISCLOSURE_LEVEL | Recipient/workspace scoped safe payload; no commercial or Brief payload |
| PRIMARY_ACTION | Wait |
| RECOVERY_ACTION | Retry list independently from count |
| ROLE_VARIATION | Current active Owner/Manager/Assistant recipient; never associated email |
| INSTAGRAM_DEPENDENCY | NONE |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Existing header bell opens bounded list drawer; mobile sheet; no new bottom-nav slot or global system. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. Overlay: named dialog, inert background, initial focus, contained Tab/Shift+Tab, Escape/Close, restore invoking focus; selection/review survives safe close. |
| CURRENT_FRONTEND_MATCH | src/layouts/app-shell/AppHeader.tsx |
| VISUAL_REFERENCE | REF-CURRENT-SHELL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### NOTIF_LIST_FAILED

| Field | Value |
|---|---|
| FAMILY_ID | NOTIF_LIST_FAILED |
| SURFACE | Creator notification panel |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §7,8 |
| TRIGGER | List transport/error or malformed response |
| MATERIAL_STATE | List request failed without pretending empty |
| DISCLOSURE_LEVEL | Recipient/workspace scoped safe payload; no commercial or Brief payload |
| PRIMARY_ACTION | Explicit Retry |
| RECOVERY_ACTION | Keep count separate; clear list on authority loss |
| ROLE_VARIATION | Current active Owner/Manager/Assistant recipient; never associated email |
| INSTAGRAM_DEPENDENCY | NONE |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Existing header bell opens bounded list drawer; mobile sheet; no new bottom-nav slot or global system. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. Overlay: named dialog, inert background, initial focus, contained Tab/Shift+Tab, Escape/Close, restore invoking focus; selection/review survives safe close. |
| CURRENT_FRONTEND_MATCH | src/layouts/app-shell/AppHeader.tsx |
| VISUAL_REFERENCE | REF-CURRENT-SHELL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### NOTIF_EMPTY

| Field | Value |
|---|---|
| FAMILY_ID | NOTIF_EMPTY |
| SURFACE | Creator notification panel |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §7 |
| TRIGGER | notifications=[] |
| MATERIAL_STATE | No recipient notifications |
| DISCLOSURE_LEVEL | Recipient/workspace scoped safe payload; no commercial or Brief payload |
| PRIMARY_ACTION | Close or refresh |
| RECOVERY_ACTION | No global workspace feed fallback |
| ROLE_VARIATION | Current active Owner/Manager/Assistant recipient; never associated email |
| INSTAGRAM_DEPENDENCY | NONE |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Existing header bell opens bounded list drawer; mobile sheet; no new bottom-nav slot or global system. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. Overlay: named dialog, inert background, initial focus, contained Tab/Shift+Tab, Escape/Close, restore invoking focus; selection/review survives safe close. |
| CURRENT_FRONTEND_MATCH | src/layouts/app-shell/AppHeader.tsx |
| VISUAL_REFERENCE | REF-CURRENT-SHELL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### NOTIF_UNREAD

| Field | Value |
|---|---|
| FAMILY_ID | NOTIF_UNREAD |
| SURFACE | Creator notification panel |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §7 |
| TRIGGER | is_read=false and unread_count |
| MATERIAL_STATE | Unread rows and textual badge count |
| DISCLOSURE_LEVEL | Recipient/workspace scoped safe payload; no commercial or Brief payload |
| PRIMARY_ACTION | Open Application; optionally mark read |
| RECOVERY_ACTION | Do not depend on email opt-in |
| ROLE_VARIATION | Current active Owner/Manager/Assistant recipient; never associated email |
| INSTAGRAM_DEPENDENCY | NONE |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Existing header bell opens bounded list drawer; mobile sheet; no new bottom-nav slot or global system. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. Overlay: named dialog, inert background, initial focus, contained Tab/Shift+Tab, Escape/Close, restore invoking focus; selection/review survives safe close. |
| CURRENT_FRONTEND_MATCH | src/layouts/app-shell/AppHeader.tsx |
| VISUAL_REFERENCE | REF-CURRENT-SHELL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### NOTIF_READ

| Field | Value |
|---|---|
| FAMILY_ID | NOTIF_READ |
| SURFACE | Creator notification panel |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §7 |
| TRIGGER | is_read=true |
| MATERIAL_STATE | Read row remains in history |
| DISCLOSURE_LEVEL | Recipient/workspace scoped safe payload; no commercial or Brief payload |
| PRIMARY_ACTION | Open Application |
| RECOVERY_ACTION | No IG gate |
| ROLE_VARIATION | Current active Owner/Manager/Assistant recipient; never associated email |
| INSTAGRAM_DEPENDENCY | NONE |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Existing header bell opens bounded list drawer; mobile sheet; no new bottom-nav slot or global system. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. Overlay: named dialog, inert background, initial focus, contained Tab/Shift+Tab, Escape/Close, restore invoking focus; selection/review survives safe close. |
| CURRENT_FRONTEND_MATCH | src/layouts/app-shell/AppHeader.tsx |
| VISUAL_REFERENCE | REF-CURRENT-SHELL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### NOTIF_APPROVED

| Field | Value |
|---|---|
| FAMILY_ID | NOTIF_APPROVED |
| SURFACE | Creator notification panel |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §7 |
| TRIGGER | campaigns.application_approved |
| MATERIAL_STATE | Application approved notification with safe link |
| DISCLOSURE_LEVEL | Recipient/workspace scoped safe payload; no commercial or Brief payload |
| PRIMARY_ACTION | Open Application; C04 link via application or safe collaboration_id |
| RECOVERY_ACTION | No commercial/Brief in notification payload |
| ROLE_VARIATION | Current active Owner/Manager/Assistant recipient; never associated email |
| INSTAGRAM_DEPENDENCY | NONE |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Existing header bell opens bounded list drawer; mobile sheet; no new bottom-nav slot or global system. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. Overlay: named dialog, inert background, initial focus, contained Tab/Shift+Tab, Escape/Close, restore invoking focus; selection/review survives safe close. |
| CURRENT_FRONTEND_MATCH | src/layouts/app-shell/AppHeader.tsx |
| VISUAL_REFERENCE | REF-CURRENT-SHELL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### NOTIF_REJECTED

| Field | Value |
|---|---|
| FAMILY_ID | NOTIF_REJECTED |
| SURFACE | Creator notification panel |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §7 |
| TRIGGER | campaigns.application_rejected |
| MATERIAL_STATE | Application rejected notification |
| DISCLOSURE_LEVEL | Recipient/workspace scoped safe payload; no commercial or Brief payload |
| PRIMARY_ACTION | Open Application detail |
| RECOVERY_ACTION | No rejection reason fabricated |
| ROLE_VARIATION | Current active Owner/Manager/Assistant recipient; never associated email |
| INSTAGRAM_DEPENDENCY | NONE |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Existing header bell opens bounded list drawer; mobile sheet; no new bottom-nav slot or global system. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. Overlay: named dialog, inert background, initial focus, contained Tab/Shift+Tab, Escape/Close, restore invoking focus; selection/review survives safe close. |
| CURRENT_FRONTEND_MATCH | src/layouts/app-shell/AppHeader.tsx |
| VISUAL_REFERENCE | REF-CURRENT-SHELL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### NOTIF_MARK_PENDING

| Field | Value |
|---|---|
| FAMILY_ID | NOTIF_MARK_PENDING |
| SURFACE | Creator notification panel |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §7 |
| TRIGGER | PATCH id/read or POST mark-all-read |
| MATERIAL_STATE | Read marking in progress |
| DISCLOSURE_LEVEL | Recipient/workspace scoped safe payload; no commercial or Brief payload |
| PRIMARY_ACTION | Wait |
| RECOVERY_ACTION | Do not discard unrelated rows |
| ROLE_VARIATION | Current active Owner/Manager/Assistant recipient; never associated email |
| INSTAGRAM_DEPENDENCY | NONE |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Existing header bell opens bounded list drawer; mobile sheet; no new bottom-nav slot or global system. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. Overlay: named dialog, inert background, initial focus, contained Tab/Shift+Tab, Escape/Close, restore invoking focus; selection/review survives safe close. |
| CURRENT_FRONTEND_MATCH | src/layouts/app-shell/AppHeader.tsx |
| VISUAL_REFERENCE | REF-CURRENT-SHELL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### NOTIF_MARK_FAILED

| Field | Value |
|---|---|
| FAMILY_ID | NOTIF_MARK_FAILED |
| SURFACE | Creator notification panel |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §7,8 |
| TRIGGER | 404/403/network read-mark failure |
| MATERIAL_STATE | Read mark failed but list retained if still authorized |
| DISCLOSURE_LEVEL | Recipient/workspace scoped safe payload; no commercial or Brief payload |
| PRIMARY_ACTION | Retry when safe or reload |
| RECOVERY_ACTION | Reconcile server read state; non-enumerating missing item |
| ROLE_VARIATION | Current active Owner/Manager/Assistant recipient; never associated email |
| INSTAGRAM_DEPENDENCY | NONE |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Existing header bell opens bounded list drawer; mobile sheet; no new bottom-nav slot or global system. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. Overlay: named dialog, inert background, initial focus, contained Tab/Shift+Tab, Escape/Close, restore invoking focus; selection/review survives safe close. |
| CURRENT_FRONTEND_MATCH | src/layouts/app-shell/AppHeader.tsx |
| VISUAL_REFERENCE | REF-CURRENT-SHELL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### NOTIF_COUNT_FAILED

| Field | Value |
|---|---|
| FAMILY_ID | NOTIF_COUNT_FAILED |
| SURFACE | Creator notification panel |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §7 |
| TRIGGER | Unread count request failure |
| MATERIAL_STATE | Count unavailable; bell still opens list |
| DISCLOSURE_LEVEL | Recipient/workspace scoped safe payload; no commercial or Brief payload |
| PRIMARY_ACTION | Open list |
| RECOVERY_ACTION | Never display failed count as zero |
| ROLE_VARIATION | Current active Owner/Manager/Assistant recipient; never associated email |
| INSTAGRAM_DEPENDENCY | NONE |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Existing header bell opens bounded list drawer; mobile sheet; no new bottom-nav slot or global system. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. Overlay: named dialog, inert background, initial focus, contained Tab/Shift+Tab, Escape/Close, restore invoking focus; selection/review survives safe close. |
| CURRENT_FRONTEND_MATCH | src/layouts/app-shell/AppHeader.tsx |
| VISUAL_REFERENCE | REF-CURRENT-SHELL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### NOTIF_MEMBERSHIP_LOST

| Field | Value |
|---|---|
| FAMILY_ID | NOTIF_MEMBERSHIP_LOST |
| SURFACE | Creator notification panel |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §3,7 |
| TRIGGER | Current team/session no longer authorized |
| MATERIAL_STATE | Clear recipient-scoped list/count |
| DISCLOSURE_LEVEL | Recipient/workspace scoped safe payload; no commercial or Brief payload |
| PRIMARY_ACTION | Resolve account/workspace |
| RECOVERY_ACTION | Cancel in-flight old responses |
| ROLE_VARIATION | Current active Owner/Manager/Assistant recipient; never associated email |
| INSTAGRAM_DEPENDENCY | NONE |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Existing header bell opens bounded list drawer; mobile sheet; no new bottom-nav slot or global system. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. Overlay: named dialog, inert background, initial focus, contained Tab/Shift+Tab, Escape/Close, restore invoking focus; selection/review survives safe close. |
| CURRENT_FRONTEND_MATCH | src/layouts/app-shell/AppHeader.tsx |
| VISUAL_REFERENCE | REF-CURRENT-SHELL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### NOTIF_IG_DISCONNECTED

| Field | Value |
|---|---|
| FAMILY_ID | NOTIF_IG_DISCONNECTED |
| SURFACE | Creator notification panel |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §3,7 |
| TRIGGER | Disconnected current IG + active membership |
| MATERIAL_STATE | Notification history readable |
| DISCLOSURE_LEVEL | Recipient/workspace scoped safe payload; no commercial or Brief payload |
| PRIMARY_ACTION | Read/open Application |
| RECOVERY_ACTION | No Instagram route redirect |
| ROLE_VARIATION | Current active Owner/Manager/Assistant recipient; never associated email |
| INSTAGRAM_DEPENDENCY | NONE |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Existing header bell opens bounded list drawer; mobile sheet; no new bottom-nav slot or global system. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. Overlay: named dialog, inert background, initial focus, contained Tab/Shift+Tab, Escape/Close, restore invoking focus; selection/review survives safe close. |
| CURRENT_FRONTEND_MATCH | src/layouts/app-shell/AppHeader.tsx |
| VISUAL_REFERENCE | REF-CURRENT-SHELL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### NOTIF_IG_REVALIDATION

| Field | Value |
|---|---|
| FAMILY_ID | NOTIF_IG_REVALIDATION |
| SURFACE | Creator notification panel |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §3,7 |
| TRIGGER | Revalidation required + active membership |
| MATERIAL_STATE | Notification history readable |
| DISCLOSURE_LEVEL | Recipient/workspace scoped safe payload; no commercial or Brief payload |
| PRIMARY_ACTION | Read/open Application |
| RECOVERY_ACTION | Optional recovery separate |
| ROLE_VARIATION | Current active Owner/Manager/Assistant recipient; never associated email |
| INSTAGRAM_DEPENDENCY | NONE |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Existing header bell opens bounded list drawer; mobile sheet; no new bottom-nav slot or global system. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. Overlay: named dialog, inert background, initial focus, contained Tab/Shift+Tab, Escape/Close, restore invoking focus; selection/review survives safe close. |
| CURRENT_FRONTEND_MATCH | src/layouts/app-shell/AppHeader.tsx |
| VISUAL_REFERENCE | REF-CURRENT-SHELL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### NOTIF_IG_RECONNECT

| Field | Value |
|---|---|
| FAMILY_ID | NOTIF_IG_RECONNECT |
| SURFACE | Creator notification panel |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §3,7 |
| TRIGGER | Reconnect required + active membership |
| MATERIAL_STATE | Notification history readable |
| DISCLOSURE_LEVEL | Recipient/workspace scoped safe payload; no commercial or Brief payload |
| PRIMARY_ACTION | Read/open Application |
| RECOVERY_ACTION | Optional recovery separate |
| ROLE_VARIATION | Current active Owner/Manager/Assistant recipient; never associated email |
| INSTAGRAM_DEPENDENCY | NONE |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Existing header bell opens bounded list drawer; mobile sheet; no new bottom-nav slot or global system. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. Overlay: named dialog, inert background, initial focus, contained Tab/Shift+Tab, Escape/Close, restore invoking focus; selection/review survives safe close. |
| CURRENT_FRONTEND_MATCH | src/layouts/app-shell/AppHeader.tsx |
| VISUAL_REFERENCE | REF-CURRENT-SHELL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### NOTIF_BOUNDED_LIST

| Field | Value |
|---|---|
| FAMILY_ID | NOTIF_BOUNDED_LIST |
| SURFACE | Creator notification panel |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §7 |
| TRIGGER | GET limit <=100 (default50) |
| MATERIAL_STATE | Recent notifications only; no fabricated next cursor |
| DISCLOSURE_LEVEL | Recipient/workspace scoped safe payload; no commercial or Brief payload |
| PRIMARY_ACTION | Refresh bounded list; unread filter |
| RECOVERY_ACTION | Do not claim full archive or infinite pagination |
| ROLE_VARIATION | Current active Owner/Manager/Assistant recipient; never associated email |
| INSTAGRAM_DEPENDENCY | NONE |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Existing header bell opens bounded list drawer; mobile sheet; no new bottom-nav slot or global system. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. Overlay: named dialog, inert background, initial focus, contained Tab/Shift+Tab, Escape/Close, restore invoking focus; selection/review survives safe close. |
| CURRENT_FRONTEND_MATCH | src/layouts/app-shell/AppHeader.tsx |
| VISUAL_REFERENCE | REF-CURRENT-SHELL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### UTIL_NETWORK

| Field | Value |
|---|---|
| FAMILY_ID | UTIL_NETWORK |
| SURFACE | Shared request/session/recovery |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §8 |
| TRIGGER | Fetch rejected/no response |
| MATERIAL_STATE | Honest scoped network error |
| DISCLOSURE_LEVEL | Least disclosure for current response; clear private state on authority change |
| PRIMARY_ACTION | Explicit Retry |
| RECOVERY_ACTION | Commands preserve same intent/key; no blind double submit |
| ROLE_VARIATION | Current authenticated actor and workspace scope |
| INSTAGRAM_DEPENDENCY | Preserve historical access; current Opportunity obeys backend |
| HISTORICAL_OR_CURRENT | CURRENT_OR_HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Inline scoped error with retry where safe; full-page only if no usable parent. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/shared/api/parse-api-error.ts |
| VISUAL_REFERENCE | REF-PH7-LOCAL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### UTIL_SERVER_FAILURE

| Field | Value |
|---|---|
| FAMILY_ID | UTIL_SERVER_FAILURE |
| SURFACE | Shared request/session/recovery |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §8 |
| TRIGGER | Unrecognized HTTP5xx response |
| MATERIAL_STATE | Safe bounded server failure |
| DISCLOSURE_LEVEL | Least disclosure for current response; clear private state on authority change |
| PRIMARY_ACTION | Explicit Retry when appropriate |
| RECOVERY_ACTION | No raw diagnostics; preserve command intent/key and refetch authority |
| ROLE_VARIATION | Current authenticated actor and workspace scope |
| INSTAGRAM_DEPENDENCY | Preserve historical access; current Opportunity obeys backend |
| HISTORICAL_OR_CURRENT | CURRENT_OR_HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Inline scoped error with retry where safe; full-page only if no usable parent. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/shared/api/parse-api-error.ts |
| VISUAL_REFERENCE | REF-PH7-LOCAL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### UTIL_MALFORMED

| Field | Value |
|---|---|
| FAMILY_ID | UTIL_MALFORMED |
| SURFACE | Shared request/session/recovery |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §2,4,7 |
| TRIGGER | Unknown schema/status/required shape |
| MATERIAL_STATE | Cannot safely interpret response |
| DISCLOSURE_LEVEL | Least disclosure for current response; clear private state on authority change |
| PRIMARY_ACTION | Reload |
| RECOVERY_ACTION | No unchecked cast or raw debug dump |
| ROLE_VARIATION | Current authenticated actor and workspace scope |
| INSTAGRAM_DEPENDENCY | Preserve historical access; current Opportunity obeys backend |
| HISTORICAL_OR_CURRENT | CURRENT_OR_HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Inline scoped error with retry where safe; full-page only if no usable parent. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/shared/api/parse-api-error.ts |
| VISUAL_REFERENCE | REF-PH7-LOCAL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### UTIL_DEPENDENCY

| Field | Value |
|---|---|
| FAMILY_ID | UTIL_DEPENDENCY |
| SURFACE | Shared request/session/recovery |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §8 |
| TRIGGER | 503 INVITATION_IDENTITY_CONFIGURATION_UNAVAILABLE |
| MATERIAL_STATE | Temporary dependency unavailable |
| DISCLOSURE_LEVEL | Least disclosure for current response; clear private state on authority change |
| PRIMARY_ACTION | Retry later |
| RECOVERY_ACTION | No diagnostic secrets |
| ROLE_VARIATION | Current authenticated actor and workspace scope |
| INSTAGRAM_DEPENDENCY | Preserve historical access; current Opportunity obeys backend |
| HISTORICAL_OR_CURRENT | CURRENT_OR_HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Inline scoped error with retry where safe; full-page only if no usable parent. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/shared/api/parse-api-error.ts |
| VISUAL_REFERENCE | REF-PH7-LOCAL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### UTIL_SESSION

| Field | Value |
|---|---|
| FAMILY_ID | UTIL_SESSION |
| SURFACE | Shared request/session/recovery |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §8 |
| TRIGGER | 401 after one shared refresh |
| MATERIAL_STATE | Session expired; clear private state |
| DISCLOSURE_LEVEL | Least disclosure for current response; clear private state on authority change |
| PRIMARY_ACTION | Sign in |
| RECOVERY_ACTION | Safe return only; no payload in browser storage |
| ROLE_VARIATION | Current authenticated actor and workspace scope |
| INSTAGRAM_DEPENDENCY | Preserve historical access; current Opportunity obeys backend |
| HISTORICAL_OR_CURRENT | CURRENT_OR_HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Inline scoped error with retry where safe; full-page only if no usable parent. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/shared/api/parse-api-error.ts |
| VISUAL_REFERENCE | REF-PH7-LOCAL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### UTIL_PERMISSION

| Field | Value |
|---|---|
| FAMILY_ID | UTIL_PERMISSION |
| SURFACE | Shared request/session/recovery |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §3,8 |
| TRIGGER | C05 403/409 or role denial |
| MATERIAL_STATE | Current membership/permission changed |
| DISCLOSURE_LEVEL | Least disclosure for current response; clear private state on authority change |
| PRIMARY_ACTION | Reload actor/resolve account |
| RECOVERY_ACTION | Cancel stale scoped reads and clear caches |
| ROLE_VARIATION | Current authenticated actor and workspace scope |
| INSTAGRAM_DEPENDENCY | Preserve historical access; current Opportunity obeys backend |
| HISTORICAL_OR_CURRENT | CURRENT_OR_HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Inline scoped error with retry where safe; full-page only if no usable parent. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/shared/api/parse-api-error.ts |
| VISUAL_REFERENCE | REF-PH7-LOCAL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### UTIL_REFRESH

| Field | Value |
|---|---|
| FAMILY_ID | UTIL_REFRESH |
| SURFACE | Shared request/session/recovery |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §2,4,7 |
| TRIGGER | GET refresh pending |
| MATERIAL_STATE | Nonblocking same-scope refresh |
| DISCLOSURE_LEVEL | Least disclosure for current response; clear private state on authority change |
| PRIMARY_ACTION | Keep readable current state only while authority unchanged |
| RECOVERY_ACTION | Discard on user/workspace/entitlement change |
| ROLE_VARIATION | Current authenticated actor and workspace scope |
| INSTAGRAM_DEPENDENCY | Preserve historical access; current Opportunity obeys backend |
| HISTORICAL_OR_CURRENT | CURRENT_OR_HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Inline scoped error with retry where safe; full-page only if no usable parent. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/shared/api/parse-api-error.ts |
| VISUAL_REFERENCE | REF-PH7-LOCAL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### UTIL_THROTTLED

| Field | Value |
|---|---|
| FAMILY_ID | UTIL_THROTTLED |
| SURFACE | Shared request/session/recovery |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §8 |
| TRIGGER | Framework429 |
| MATERIAL_STATE | Request rate limited |
| DISCLOSURE_LEVEL | Least disclosure for current response; clear private state on authority change |
| PRIMARY_ACTION | Wait then explicit retry |
| RECOVERY_ACTION | Honor available retry delay; no invented C03 code |
| ROLE_VARIATION | Current authenticated actor and workspace scope |
| INSTAGRAM_DEPENDENCY | Preserve historical access; current Opportunity obeys backend |
| HISTORICAL_OR_CURRENT | CURRENT_OR_HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Inline scoped error with retry where safe; full-page only if no usable parent. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/shared/api/parse-api-error.ts |
| VISUAL_REFERENCE | REF-PH7-LOCAL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### UTIL_LEGACY_RECONCILIATION

| Field | Value |
|---|---|
| FAMILY_ID | UTIL_LEGACY_RECONCILIATION |
| SURFACE | Shared request/session/recovery |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §8 |
| TRIGGER | LEGACY_APPLICATION_RECONCILIATION_REQUIRED |
| MATERIAL_STATE | Application cannot proceed with ambiguous legacy evidence |
| DISCLOSURE_LEVEL | Least disclosure for current response; clear private state on authority change |
| PRIMARY_ACTION | View existing history/return |
| RECOVERY_ACTION | No client migration or fabricated canonical row |
| ROLE_VARIATION | Current authenticated actor and workspace scope |
| INSTAGRAM_DEPENDENCY | Preserve historical access; current Opportunity obeys backend |
| HISTORICAL_OR_CURRENT | CURRENT_OR_HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. Inline scoped error with retry where safe; full-page only if no usable parent. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | src/shared/api/parse-api-error.ts |
| VISUAL_REFERENCE | REF-PH7-LOCAL |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |

### BRIEF_PACK_DEFERRED

| Field | Value |
|---|---|
| FAMILY_ID | BRIEF_PACK_DEFERRED |
| SURFACE | Brief Pack deferred |
| BACKEND_AUTHORITY | dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §9 |
| TRIGGER | P1 contract explicitly excludes Brief Pack |
| MATERIAL_STATE | No active Brief Pack endpoint/button |
| DISCLOSURE_LEVEL | No accepted endpoint in P1 |
| PRIMARY_ACTION | Read existing immutable Brief detail |
| RECOVERY_ACTION | Separate P5 authorization required |
| ROLE_VARIATION | No invented capability |
| INSTAGRAM_DEPENDENCY | NONE |
| HISTORICAL_OR_CURRENT | HISTORICAL |
| RESPONSIVE_NOTES | Desktop: constrained readable content and existing sidebar. Tablet: reflow before compression, existing shell menu. 390px/375px: one column, wrapped labels/URLs, full-width primary action, >=14px body, retained data/actions; bottom-nav plus env(safe-area-inset-bottom) clearance. No active download action until separate P5 acceptance. |
| ACCESSIBILITY_NOTES | One page h1; ordered h2/h3; DOM and keyboard order match reading order; named native controls and visible focus; no color-only state; errors linked with aria-describedby; polite status updates, assertive command errors once; >=44px targets; safe-area clearance; no page-level horizontal overflow at zoom. |
| CURRENT_FRONTEND_MATCH | NOT_FOUND |
| VISUAL_REFERENCE | Aurora Button omission |
| DECISION_LADDER_DISPOSITION | CONSTRUCT_FROM_AURORA_EXISTING_PATTERNS |


## C03_AURORA_CONSTRUCTION_ASSESSMENT_V1

Full machine-readable copies: [CSV](p2-preflight/C03_AURORA_CONSTRUCTION_ASSESSMENT_V1.csv) · [JSON](p2-preflight/C03_AURORA_CONSTRUCTION_ASSESSMENT_V1.json)

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


## C03_UIUX_DESIGN_GAP_REGISTER_V1

Full machine-readable copies: [CSV](p2-preflight/C03_UIUX_DESIGN_GAP_REGISTER_V1.csv) · [JSON](p2-preflight/C03_UIUX_DESIGN_GAP_REGISTER_V1.json)

### NONE

| Field | Value |
|---|---|
| GAP_ID | NONE |
| STATUS | NO_UIUX_GAP |
| EVIDENCE | Current shell/cards/review flow; accepted Phase7 reference inputs; C04 context drawer; Aurora v5 semantic and responsive patterns cover every registered state. |
| STITCH_RECOMMENDATION | NOT_REQUIRED |
| LIMITATION | P2 composition feasibility only. Legacy source is not accepted C03 runtime; specified P4 corrections remain mandatory. |
| NEXT_BOUNDARY | SA_REVIEW_ONLY |


## C03_FRONTEND_ROUTE_SCREEN_REGISTER_V1

Full machine-readable copies: [CSV](p2-preflight/C03_FRONTEND_ROUTE_SCREEN_REGISTER_V1.csv) · [JSON](p2-preflight/C03_FRONTEND_ROUTE_SCREEN_REGISTER_V1.json)

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

Full machine-readable copies: [CSV](p2-preflight/C03_CURRENT_ROUTE_INVENTORY_V1.csv) · [JSON](p2-preflight/C03_CURRENT_ROUTE_INVENTORY_V1.json)

### /marketplace

| Field | Value |
|---|---|
| CURRENT_ROUTE | /marketplace |
| CURRENT_GUARD | Guest layout; no auth |
| CURRENT_COMPONENT | src/pages/public/marketplace/public-marketplace-page.tsx |
| CURRENT_SEMANTICS | Public search/filter Campaign enumeration |
| TARGET_C03_DISPOSITION | Retire browsing for C03; neutral unavailable/entry compatibility only, no API enumeration or new Marketplace IA |

### /marketplace/:campaignId

| Field | Value |
|---|---|
| CURRENT_ROUTE | /marketplace/:campaignId |
| CURRENT_GUARD | Guest layout; no auth |
| CURRENT_COMPONENT | src/pages/public/marketplace/public-campaign-detail-page.tsx |
| CURRENT_SEMANTICS | Legacy public detail DTO |
| TARGET_C03_DISPOSITION | Compatibility canonical Campaign-ID redirect to Stage B /campaigns/:campaignId; sanitize query, no legacy payload hydration |

### /marketplace/invite/:token

| Field | Value |
|---|---|
| CURRENT_ROUTE | /marketplace/invite/:token |
| CURRENT_GUARD | Guest layout; no auth |
| CURRENT_COMPONENT | src/pages/public/marketplace/public-invite-landing-page.tsx |
| CURRENT_SEMANTICS | Raw token in path; invitation lookup/claim |
| TARGET_C03_DISPOSITION | REMOVE_IN_P4 raw-path flow; cannot safely convert already exposed credential. Generic fresh secure-link recovery; do not carry token to new URL/storage |

### /creator/marketplace

| Field | Value |
|---|---|
| CURRENT_ROUTE | /creator/marketplace |
| CURRENT_GUARD | RequireAuth > AppShell > RequireCreatorPlatformAccess |
| CURRENT_COMPONENT | src/pages/creator/marketplace/creator-marketplace-page.tsx |
| CURRENT_SEMANTICS | Dormant legacy marketplace |
| TARGET_C03_DISPOSITION | Compatibility redirect to /creator/campaigns/opportunities; no legacy GET |

### /creator/marketplace/:campaignId

| Field | Value |
|---|---|
| CURRENT_ROUTE | /creator/marketplace/:campaignId |
| CURRENT_GUARD | RequireAuth > AppShell > RequireCreatorPlatformAccess |
| CURRENT_COMPONENT | src/pages/creator/marketplace/creator-campaign-detail-page.tsx |
| CURRENT_SEMANTICS | Legacy detail, match/stock/boolean Apply |
| TARGET_C03_DISPOSITION | Canonical-ID compatibility redirect outside IG pre-gate; canonical detail is Stage B route |

### /creator/campaigns

| Field | Value |
|---|---|
| CURRENT_ROUTE | /creator/campaigns |
| CURRENT_GUARD | RequireAuth > AppShell > RequireCreatorPlatformAccess |
| CURRENT_COMPONENT | src/pages/creator/campaigns/creator-campaigns-command-center-page.tsx |
| CURRENT_SEMANTICS | Command Center active production and pending Collaboration pipeline |
| TARGET_C03_DISPOSITION | Campaigns default Opportunities; retain nav identity, remove only C03 platform gate |

### /creator/campaigns/history

| Field | Value |
|---|---|
| CURRENT_ROUTE | /creator/campaigns/history |
| CURRENT_GUARD | RequireAuth > AppShell > RequireCreatorPlatformAccess |
| CURRENT_COMPONENT | src/pages/creator/campaigns/creator-campaigns-history-page.tsx |
| CURRENT_SEMANTICS | Closed Collaborations and payout/history metrics |
| TARGET_C03_DISPOSITION | Navigation alias to My Applications; do not convert Collaboration IDs/data into Applications. C04 remains owner of old execution records |

### /creator/collaborations

| Field | Value |
|---|---|
| CURRENT_ROUTE | /creator/collaborations |
| CURRENT_GUARD | RequireAuth > AppShell > RequireCreatorPlatformAccess > CollaborationRouteGuard CREATOR |
| CURRENT_COMPONENT | src/pages/creator/collaborations/creator-collaborations-page.tsx |
| CURRENT_SEMANTICS | Existing C04 workspace selected by thread query |
| TARGET_C03_DISPOSITION | Retain exact C04 destination and guard, remove current-Instagram entry gate for accepted history/link |

### Creator notifications: no current route

| Field | Value |
|---|---|
| CURRENT_ROUTE | Creator notifications: no current route |
| CURRENT_GUARD | N/A; inert AppHeader bell |
| CURRENT_COMPONENT | src/layouts/app-shell/AppHeader.tsx |
| CURRENT_SEMANTICS | No Creator inbox/read/count integration |
| TARGET_C03_DISPOSITION | Bounded panel within existing header; current C05 authority, no IG guard |

### /brand/:slug

| Field | Value |
|---|---|
| CURRENT_ROUTE | /brand/:slug |
| CURRENT_GUARD | Guest layout; no auth |
| CURRENT_COMPONENT | src/pages/public/brand/public-brand-landing-page.tsx |
| CURRENT_SEMANTICS | Public Brand landing with marketplace navigation helper |
| TARGET_C03_DISPOSITION | Preserve Brand surface; reconcile C03-linked browsing/return links only, never invent public enumeration |

### /creator/settings/instagram

| Field | Value |
|---|---|
| CURRENT_ROUTE | /creator/settings/instagram |
| CURRENT_GUARD | RequireAuth > AppShell > C05 Settings capability guard (outside platform gate) |
| CURRENT_COMPONENT | src/features/settings/utils/creator-instagram-settings-state.ts |
| CURRENT_SEMANTICS | C05 six-state same-identity recovery |
| TARGET_C03_DISPOSITION | Reuse as authorized recovery destination; Assistant cannot read/administer Settings |


## C03_CURRENT_FRONTEND_REUSE_AUDIT_V1

Full machine-readable copies: [CSV](p2-preflight/C03_CURRENT_FRONTEND_REUSE_AUDIT_V1.csv) · [JSON](p2-preflight/C03_CURRENT_FRONTEND_REUSE_AUDIT_V1.json)

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

Full machine-readable copies: [CSV](p2-preflight/C03_ACCEPTED_REFERENCE_REUSE_AUDIT_V1.csv) · [JSON](p2-preflight/C03_ACCEPTED_REFERENCE_REUSE_AUDIT_V1.json)

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


## C03_BACKEND_REASON_VIEW_MAPPING_V1

Full machine-readable copies: [CSV](p2-preflight/C03_BACKEND_REASON_VIEW_MAPPING_V1.csv) · [JSON](p2-preflight/C03_BACKEND_REASON_VIEW_MAPPING_V1.json)

### OPPORTUNITY_NOT_AVAILABLE

| Field | Value |
|---|---|
| BACKEND_CODE | OPPORTUNITY_NOT_AVAILABLE |
| HTTP_OR_PROJECTION_CONTEXT | LOCKED projection; continuation/Submit404 |
| VIEW_STATE | UNKNOWN_OR_NONDISCLOSABLE_CAMPAIGN |
| USER_COPY_INTENT | This Opportunity is unavailable. |
| RECOVERY_ACTION | Return to permitted Campaigns; no existence/details inference |
| PRESENTATION | PAGE |
| RETRYABLE | NO |

### AUTHENTICATION_REQUIRED

| Field | Value |
|---|---|
| BACKEND_CODE | AUTHENTICATION_REQUIRED |
| HTTP_OR_PROJECTION_CONTEXT | TEASER projection |
| VIEW_STATE | TEASER_AUTHENTICATION_REQUIRED |
| USER_COPY_INTENT | Sign in or use a Creator account to continue. |
| RECOVERY_ACTION | SIGN_IN_OR_CREATE_CREATOR; preserve safe Campaign return |
| PRESENTATION | PAGE |
| RETRYABLE | NO |

### CREATOR_ACCOUNT_REQUIRED

| Field | Value |
|---|---|
| BACKEND_CODE | CREATOR_ACCOUNT_REQUIRED |
| HTTP_OR_PROJECTION_CONTEXT | TEASER projection |
| VIEW_STATE | TEASER_CREATOR_ACCOUNT_REQUIRED |
| USER_COPY_INTENT | Sign in or use a Creator account to continue. |
| RECOVERY_ACTION | SIGN_IN_OR_CREATE_CREATOR; preserve safe Campaign return |
| PRESENTATION | PAGE |
| RETRYABLE | NO |

### CREATOR_CONTEXT_REQUIRED

| Field | Value |
|---|---|
| BACKEND_CODE | CREATOR_CONTEXT_REQUIRED |
| HTTP_OR_PROJECTION_CONTEXT | LOCKED projection |
| VIEW_STATE | OC_CONTEXT_RECOVERY |
| USER_COPY_INTENT | Resolve your current Creator workspace. |
| RECOVERY_ACTION | RESOLVE_CREATOR_CONTEXT |
| PRESENTATION | PAGE |
| RETRYABLE | NO |

### NOT_CONNECTED

| Field | Value |
|---|---|
| BACKEND_CODE | NOT_CONNECTED |
| HTTP_OR_PROJECTION_CONTEXT | LOCKED projection; Submit conflict |
| VIEW_STATE | IG_NOT_CONNECTED |
| USER_COPY_INTENT | Connect Instagram to access current Opportunities. |
| RECOVERY_ACTION | CONNECT_INSTAGRAM through permitted C05 Settings; Assistant asks Owner/Manager |
| PRESENTATION | PAGE / INLINE |
| RETRYABLE | AFTER_RECOVERY |

### REVALIDATION_REQUIRED

| Field | Value |
|---|---|
| BACKEND_CODE | REVALIDATION_REQUIRED |
| HTTP_OR_PROJECTION_CONTEXT | LOCKED projection; Submit conflict |
| VIEW_STATE | IG_REVALIDATION_REQUIRED |
| USER_COPY_INTENT | Check the existing Instagram authorization. |
| RECOVERY_ACTION | REVALIDATE_INSTAGRAM through permitted C05 Settings; Assistant asks Owner/Manager |
| PRESENTATION | PAGE / INLINE |
| RETRYABLE | AFTER_RECOVERY |

### RECONNECT_REQUIRED

| Field | Value |
|---|---|
| BACKEND_CODE | RECONNECT_REQUIRED |
| HTTP_OR_PROJECTION_CONTEXT | LOCKED projection; Submit conflict |
| VIEW_STATE | IG_RECONNECT_REQUIRED |
| USER_COPY_INTENT | Reconnect the same Instagram identity. |
| RECOVERY_ACTION | RECONNECT_INSTAGRAM through permitted C05 Settings; Assistant asks Owner/Manager |
| PRESENTATION | PAGE / INLINE |
| RETRYABLE | AFTER_RECOVERY |

### PROVIDER_BLOCKED_RECOVERABLE

| Field | Value |
|---|---|
| BACKEND_CODE | PROVIDER_BLOCKED_RECOVERABLE |
| HTTP_OR_PROJECTION_CONTEXT | LOCKED projection; Submit conflict |
| VIEW_STATE | IG_PROVIDER_BLOCKED_RECOVERABLE |
| USER_COPY_INTENT | Instagram access needs a check; retry later if unavailable. |
| RECOVERY_ACTION | REVALIDATE_INSTAGRAM through permitted C05 Settings; Assistant asks Owner/Manager |
| PRESENTATION | PAGE / INLINE |
| RETRYABLE | AFTER_RECOVERY |

### DISCONNECTED_IDENTITY_RETAINED

| Field | Value |
|---|---|
| BACKEND_CODE | DISCONNECTED_IDENTITY_RETAINED |
| HTTP_OR_PROJECTION_CONTEXT | LOCKED projection; Submit conflict |
| VIEW_STATE | IG_DISCONNECTED_IDENTITY_RETAINED |
| USER_COPY_INTENT | Reconnect the retained Instagram identity. |
| RECOVERY_ACTION | RECONNECT_INSTAGRAM through permitted C05 Settings; Assistant asks Owner/Manager |
| PRESENTATION | PAGE / INLINE |
| RETRYABLE | AFTER_RECOVERY |

### CONNECTED_HEALTHY

| Field | Value |
|---|---|
| BACKEND_CODE | CONNECTED_HEALTHY |
| HTTP_OR_PROJECTION_CONTEXT | Success lifecycle; not error |
| VIEW_STATE | IG_CONNECTED_HEALTHY |
| USER_COPY_INTENT | Connected. |
| RECOVERY_ACTION | Continue backend entitlement evaluation |
| PRESENTATION | INLINE |
| RETRYABLE | NOT_APPLICABLE |

### ELIGIBILITY_INELIGIBLE

| Field | Value |
|---|---|
| BACKEND_CODE | ELIGIBILITY_INELIGIBLE |
| HTTP_OR_PROJECTION_CONTEXT | Restricted LOCKED / Submit conflict |
| VIEW_STATE | ENT_INELIGIBLE |
| USER_COPY_INTENT | This Opportunity is not available to this Creator. |
| RECOVERY_ACTION | Return to Opportunities without exposing eligibility evidence |
| PRESENTATION | PAGE |
| RETRYABLE | NO |

### ELIGIBILITY_UNAVAILABLE

| Field | Value |
|---|---|
| BACKEND_CODE | ELIGIBILITY_UNAVAILABLE |
| HTTP_OR_PROJECTION_CONTEXT | Restricted LOCKED / Submit conflict |
| VIEW_STATE | ENT_UNAVAILABLE |
| USER_COPY_INTENT | Eligibility cannot be checked right now. |
| RECOVERY_ACTION | RETRY_LATER |
| PRESENTATION | PAGE / INLINE |
| RETRYABLE | LATER |

### INVITATION_REQUIRED

| Field | Value |
|---|---|
| BACKEND_CODE | INVITATION_REQUIRED |
| HTTP_OR_PROJECTION_CONTEXT | Policy LOCKED or proven-context validation/Submit conflict |
| VIEW_STATE | ENT_INVITATION_REQUIRED |
| USER_COPY_INTENT | A valid invitation is required. |
| RECOVERY_ACTION | Use valid secure invitation entry |
| PRESENTATION | PAGE / INLINE |
| RETRYABLE | NO |

### INVITATION_EXPIRED

| Field | Value |
|---|---|
| BACKEND_CODE | INVITATION_EXPIRED |
| HTTP_OR_PROJECTION_CONTEXT | Policy LOCKED or proven-context validation/Submit conflict |
| VIEW_STATE | ENT_INVITATION_EXPIRED |
| USER_COPY_INTENT | This invitation has expired. |
| RECOVERY_ACTION | Use a fresh invitation |
| PRESENTATION | PAGE / INLINE |
| RETRYABLE | NO |

### INVITATION_REVOKED

| Field | Value |
|---|---|
| BACKEND_CODE | INVITATION_REVOKED |
| HTTP_OR_PROJECTION_CONTEXT | Policy LOCKED or proven-context validation/Submit conflict |
| VIEW_STATE | ENT_INVITATION_REVOKED |
| USER_COPY_INTENT | This invitation is no longer usable. |
| RECOVERY_ACTION | Return to Opportunities |
| PRESENTATION | PAGE / INLINE |
| RETRYABLE | NO |

### INVITATION_SUBJECT_MISMATCH

| Field | Value |
|---|---|
| BACKEND_CODE | INVITATION_SUBJECT_MISMATCH |
| HTTP_OR_PROJECTION_CONTEXT | Policy LOCKED or proven-context validation/Submit conflict |
| VIEW_STATE | ENT_INVITATION_MISMATCH |
| USER_COPY_INTENT | Use the invited account. |
| RECOVERY_ACTION | USE_INVITED_ACCOUNT; never show identity |
| PRESENTATION | PAGE / INLINE |
| RETRYABLE | NO |

### INVITATION_ABSENT

| Field | Value |
|---|---|
| BACKEND_CODE | INVITATION_ABSENT |
| HTTP_OR_PROJECTION_CONTEXT | Dynamic proven-context validation, distinct from unproven generic404 |
| VIEW_STATE | ENT_INVITATION_ABSENT |
| USER_COPY_INTENT | This invitation can no longer be resolved. |
| RECOVERY_ACTION | Use a valid fresh invitation |
| PRESENTATION | PAGE / INLINE |
| RETRYABLE | NO |

### INVITATION_IDENTITY_CONFIGURATION_UNAVAILABLE

| Field | Value |
|---|---|
| BACKEND_CODE | INVITATION_IDENTITY_CONFIGURATION_UNAVAILABLE |
| HTTP_OR_PROJECTION_CONTEXT | 503 identity resolver |
| VIEW_STATE | UTIL_DEPENDENCY |
| USER_COPY_INTENT | Invitation entry is temporarily unavailable. |
| RECOVERY_ACTION | RETRY_LATER; no configuration diagnostic |
| PRESENTATION | PAGE |
| RETRYABLE | LATER |

### CREATOR_ENTRY_CONTINUATION_IDENTITY_CONFLICT

| Field | Value |
|---|---|
| BACKEND_CODE | CREATOR_ENTRY_CONTINUATION_IDENTITY_CONFLICT |
| HTTP_OR_PROJECTION_CONTEXT | 409 continuation binding |
| VIEW_STATE | ENT_IDENTITY_CONFLICT |
| USER_COPY_INTENT | This entry belongs to a different Creator context. |
| RECOVERY_ACTION | Resolve correct account/workspace; no rebinding |
| PRESENTATION | PAGE |
| RETRYABLE | NO |

### CAMPAIGN_VISIBILITY_CONFIGURATION_INVALID

| Field | Value |
|---|---|
| BACKEND_CODE | CAMPAIGN_VISIBILITY_CONFIGURATION_INVALID |
| HTTP_OR_PROJECTION_CONTEXT | LOCKED projection |
| VIEW_STATE | ENT_CONFIGURATION |
| USER_COPY_INTENT | This Opportunity is unavailable. |
| RECOVERY_ACTION | Return; no private configuration detail |
| PRESENTATION | PAGE |
| RETRYABLE | NO |

### CAMPAIGN_APPLICATIONS_CLOSED

| Field | Value |
|---|---|
| BACKEND_CODE | CAMPAIGN_APPLICATIONS_CLOSED |
| HTTP_OR_PROJECTION_CONTEXT | AUTHORIZED Apply block / Submit409 |
| VIEW_STATE | APPLY_CLOSED |
| USER_COPY_INTENT | This Campaign is not accepting Applications. |
| RECOVERY_ACTION | Read authorized dossier or My Applications |
| PRESENTATION | INLINE |
| RETRYABLE | NO |

### CAMPAIGN_COMMERCIAL_CONFIGURATION_INVALID

| Field | Value |
|---|---|
| BACKEND_CODE | CAMPAIGN_COMMERCIAL_CONFIGURATION_INVALID |
| HTTP_OR_PROJECTION_CONTEXT | AUTHORIZED Apply block / Submit409 |
| VIEW_STATE | DOS_COMMERCIAL_UNAVAILABLE |
| USER_COPY_INTENT | Commercial details are unavailable for applying. |
| RECOVERY_ACTION | Keep other authorized detail; retry after correction |
| PRESENTATION | INLINE |
| RETRYABLE | AFTER_CORRECTION |

### CAMPAIGN_BRIEF_UNAVAILABLE

| Field | Value |
|---|---|
| BACKEND_CODE | CAMPAIGN_BRIEF_UNAVAILABLE |
| HTTP_OR_PROJECTION_CONTEXT | AUTHORIZED Apply block / Submit409 |
| VIEW_STATE | SEL_NONE_AVAILABLE |
| USER_COPY_INTENT | No Brief is currently available to select. |
| RECOVERY_ACTION | Read dossier; retry after correction |
| PRESENTATION | INLINE |
| RETRYABLE | AFTER_CORRECTION |

### CAMPAIGN_ASSET_NOT_ACTIVE

| Field | Value |
|---|---|
| BACKEND_CODE | CAMPAIGN_ASSET_NOT_ACTIVE |
| HTTP_OR_PROJECTION_CONTEXT | applicationSelection.reason; Submit conflict when reached |
| VIEW_STATE | SEL_ASSET_UNAVAILABLE |
| USER_COPY_INTENT | This Asset is not currently selectable. |
| RECOVERY_ACTION | Refresh choices and select available canonical pair |
| PRESENTATION | INLINE |
| RETRYABLE | AFTER_CORRECTION |

### BRIEF_NOT_PUBLISHED

| Field | Value |
|---|---|
| BACKEND_CODE | BRIEF_NOT_PUBLISHED |
| HTTP_OR_PROJECTION_CONTEXT | applicationSelection.reason; Submit conflict when reached |
| VIEW_STATE | SEL_BRIEF_UNAVAILABLE |
| USER_COPY_INTENT | This Brief is not currently selectable. |
| RECOVERY_ACTION | Refresh choices and select available canonical pair |
| PRESENTATION | INLINE |
| RETRYABLE | AFTER_CORRECTION |

### BRIEF_DEFINITION_INCOMPLETE

| Field | Value |
|---|---|
| BACKEND_CODE | BRIEF_DEFINITION_INCOMPLETE |
| HTTP_OR_PROJECTION_CONTEXT | applicationSelection.reason; Submit conflict when reached |
| VIEW_STATE | SEL_BRIEF_UNAVAILABLE |
| USER_COPY_INTENT | This Brief is not ready for Applications. |
| RECOVERY_ACTION | Refresh choices and select available canonical pair |
| PRESENTATION | INLINE |
| RETRYABLE | AFTER_CORRECTION |

### BRIEF_DELIVERABLE_GRAPH_INVALID

| Field | Value |
|---|---|
| BACKEND_CODE | BRIEF_DELIVERABLE_GRAPH_INVALID |
| HTTP_OR_PROJECTION_CONTEXT | applicationSelection.reason; Submit conflict when reached |
| VIEW_STATE | SEL_BRIEF_UNAVAILABLE |
| USER_COPY_INTENT | This Brief is not ready for Applications. |
| RECOVERY_ACTION | Refresh choices and select available canonical pair |
| PRESENTATION | INLINE |
| RETRYABLE | AFTER_CORRECTION |

### APPLICATION_SELECTION_INVALID

| Field | Value |
|---|---|
| BACKEND_CODE | APPLICATION_SELECTION_INVALID |
| HTTP_OR_PROJECTION_CONTEXT | 400 malformed strict body /409 ancestry mismatch |
| VIEW_STATE | SEL_MISMATCH |
| USER_COPY_INTENT | The selected Asset and Brief are no longer a valid pair. |
| RECOVERY_ACTION | Reload and explicitly review a valid pair |
| PRESENTATION | INLINE |
| RETRYABLE | AFTER_REVIEW |

### APPLICATION_IDEMPOTENCY_KEY_REQUIRED

| Field | Value |
|---|---|
| BACKEND_CODE | APPLICATION_IDEMPOTENCY_KEY_REQUIRED |
| HTTP_OR_PROJECTION_CONTEXT | 400 missing/invalid canonical key |
| VIEW_STATE | APPLY_KEY_REQUIRED |
| USER_COPY_INTENT | The request could not be submitted. |
| RECOVERY_ACTION | Correct integration and return to Review; do not expose key |
| PRESENTATION | INLINE |
| RETRYABLE | AFTER_CORRECTION |

### APPLICATION_IDEMPOTENCY_KEY_REUSED

| Field | Value |
|---|---|
| BACKEND_CODE | APPLICATION_IDEMPOTENCY_KEY_REUSED |
| HTTP_OR_PROJECTION_CONTEXT | 409 changed fingerprint in receipt scope |
| VIEW_STATE | APPLY_KEY_REUSED |
| USER_COPY_INTENT | The selection changed; review it before submitting. |
| RECOVERY_ACTION | New explicit intent uses new key; never auto-resubmit |
| PRESENTATION | INLINE |
| RETRYABLE | AFTER_REVIEW |

### APPLICATION_OPPORTUNITY_ALREADY_USED

| Field | Value |
|---|---|
| BACKEND_CODE | APPLICATION_OPPORTUNITY_ALREADY_USED |
| HTTP_OR_PROJECTION_CONTEXT | Apply block /Submit409 |
| VIEW_STATE | APPLY_SAME_USED |
| USER_COPY_INTENT | An Application already exists for this selection. |
| RECOVERY_ACTION | View independent Applications; no campaign-wide already_applied |
| PRESENTATION | INLINE |
| RETRYABLE | NO |

### APPLICATION_CAMPAIGN_LIMIT_REACHED

| Field | Value |
|---|---|
| BACKEND_CODE | APPLICATION_CAMPAIGN_LIMIT_REACHED |
| HTTP_OR_PROJECTION_CONTEXT | Apply block /Submit409 |
| VIEW_STATE | APPLY_CAMPAIGN_QUOTA |
| USER_COPY_INTENT | The Campaign Application limit has been reached. |
| RECOVERY_ACTION | View My Applications; 2 non-WITHDRAWN limit |
| PRESENTATION | INLINE |
| RETRYABLE | NO |

### APPLICATION_BRAND_LIMIT_REACHED

| Field | Value |
|---|---|
| BACKEND_CODE | APPLICATION_BRAND_LIMIT_REACHED |
| HTTP_OR_PROJECTION_CONTEXT | Apply block /Submit409 |
| VIEW_STATE | APPLY_BRAND_QUOTA |
| USER_COPY_INTENT | The Brand Application limit has been reached. |
| RECOVERY_ACTION | View My Applications; 5 non-WITHDRAWN limit |
| PRESENTATION | INLINE |
| RETRYABLE | NO |

### APPLICATION_ROLE_DENIED

| Field | Value |
|---|---|
| BACKEND_CODE | APPLICATION_ROLE_DENIED |
| HTTP_OR_PROJECTION_CONTEXT | Apply projection block or command403 |
| VIEW_STATE | APPLY_ROLE_LOST / WITHDRAW_FAILURE |
| USER_COPY_INTENT | Your current team permissions do not allow this action. |
| RECOVERY_ACTION | Refresh actor and projection; Assistant never Withdraw |
| PRESENTATION | INLINE / DIALOG |
| RETRYABLE | NO |

### CREATOR_WORKSPACE_SELECTION_REQUIRED

| Field | Value |
|---|---|
| BACKEND_CODE | CREATOR_WORKSPACE_SELECTION_REQUIRED |
| HTTP_OR_PROJECTION_CONTEXT | 409 shared C05 actor resolver |
| VIEW_STATE | OC_CONTEXT_RECOVERY / UTIL_PERMISSION |
| USER_COPY_INTENT | Your current Creator workspace needs attention before continuing. |
| RECOVERY_ACTION | Use existing account/team recovery; no first-workspace default or frontend identity repair |
| PRESENTATION | PAGE |
| RETRYABLE | AFTER_RECOVERY |

### CREATOR_OWNER_MEMBERSHIP_INCONSISTENT

| Field | Value |
|---|---|
| BACKEND_CODE | CREATOR_OWNER_MEMBERSHIP_INCONSISTENT |
| HTTP_OR_PROJECTION_CONTEXT | 409 shared C05 actor resolver |
| VIEW_STATE | OC_CONTEXT_RECOVERY / UTIL_PERMISSION |
| USER_COPY_INTENT | Your current Creator workspace needs attention before continuing. |
| RECOVERY_ACTION | Use existing account/team recovery; no first-workspace default or frontend identity repair |
| PRESENTATION | PAGE |
| RETRYABLE | AFTER_RECOVERY |

### CREATOR_CANONICAL_CONTEXT_INCONSISTENT

| Field | Value |
|---|---|
| BACKEND_CODE | CREATOR_CANONICAL_CONTEXT_INCONSISTENT |
| HTTP_OR_PROJECTION_CONTEXT | 409 shared C05 actor resolver |
| VIEW_STATE | OC_CONTEXT_RECOVERY / UTIL_PERMISSION |
| USER_COPY_INTENT | Your current Creator workspace needs attention before continuing. |
| RECOVERY_ACTION | Use existing account/team recovery; no first-workspace default or frontend identity repair |
| PRESENTATION | PAGE |
| RETRYABLE | AFTER_RECOVERY |

### CREATOR_ONE_OWNER_INVARIANT_VIOLATED

| Field | Value |
|---|---|
| BACKEND_CODE | CREATOR_ONE_OWNER_INVARIANT_VIOLATED |
| HTTP_OR_PROJECTION_CONTEXT | 409 shared C05 actor resolver |
| VIEW_STATE | OC_CONTEXT_RECOVERY / UTIL_PERMISSION |
| USER_COPY_INTENT | Your current Creator workspace needs attention before continuing. |
| RECOVERY_ACTION | Use existing account/team recovery; no first-workspace default or frontend identity repair |
| PRESENTATION | PAGE |
| RETRYABLE | AFTER_RECOVERY |

### CREATOR_OWNER_IDENTITY_RECONCILIATION_REQUIRED

| Field | Value |
|---|---|
| BACKEND_CODE | CREATOR_OWNER_IDENTITY_RECONCILIATION_REQUIRED |
| HTTP_OR_PROJECTION_CONTEXT | 409 shared C05 actor resolver |
| VIEW_STATE | OC_CONTEXT_RECOVERY / UTIL_PERMISSION |
| USER_COPY_INTENT | Your current Creator workspace needs attention before continuing. |
| RECOVERY_ACTION | Use existing account/team recovery; no first-workspace default or frontend identity repair |
| PRESENTATION | PAGE |
| RETRYABLE | AFTER_RECOVERY |

### APPLICATION_NOT_FOUND

| Field | Value |
|---|---|
| BACKEND_CODE | APPLICATION_NOT_FOUND |
| HTTP_OR_PROJECTION_CONTEXT | 404 non-enumerating current subject lookup |
| VIEW_STATE | HIST_NOT_FOUND |
| USER_COPY_INTENT | This Application is unavailable. |
| RECOVERY_ACTION | Return to My Applications |
| PRESENTATION | PAGE |
| RETRYABLE | NO |

### APPLICATION_TRANSITION_CONFLICT

| Field | Value |
|---|---|
| BACKEND_CODE | APPLICATION_TRANSITION_CONFLICT |
| HTTP_OR_PROJECTION_CONTEXT | 409 terminal transition lost/no longer Pending |
| VIEW_STATE | WITHDRAW_CONFLICT |
| USER_COPY_INTENT | This Application changed before the action completed. |
| RECOVERY_ACTION | Refresh authoritative row; no force transition |
| PRESENTATION | DIALOG / INLINE |
| RETRYABLE | AFTER_REFRESH |

### LEGACY_APPLICATION_RECONCILIATION_REQUIRED

| Field | Value |
|---|---|
| BACKEND_CODE | LEGACY_APPLICATION_RECONCILIATION_REQUIRED |
| HTTP_OR_PROJECTION_CONTEXT | Apply capability/Submit conflict |
| VIEW_STATE | UTIL_LEGACY_RECONCILIATION |
| USER_COPY_INTENT | This Application cannot proceed yet. |
| RECOVERY_ACTION | Read existing history; no browser migration |
| PRESENTATION | INLINE |
| RETRYABLE | AFTER_CORRECTION |

### LEGACY_APPLICATION_ENDPOINT_RETIRED

| Field | Value |
|---|---|
| BACKEND_CODE | LEGACY_APPLICATION_ENDPOINT_RETIRED |
| HTTP_OR_PROJECTION_CONTEXT | 410 retired Creator Apply route |
| VIEW_STATE | UTIL_LEGACY_RECONCILIATION |
| USER_COPY_INTENT | This older application entry is no longer supported. |
| RECOVERY_ACTION | Open canonical Opportunity; never fallback to retired API |
| PRESENTATION | PAGE |
| RETRYABLE | NO |

### C03_APPLICATION_HANDOFF_EVIDENCE_INVALID

| Field | Value |
|---|---|
| BACKEND_CODE | C03_APPLICATION_HANDOFF_EVIDENCE_INVALID |
| HTTP_OR_PROJECTION_CONTEXT | 409 Brand approval path; not emitted as Creator approval command |
| VIEW_STATE | HANDOFF_INVALID (defensive display only) |
| USER_COPY_INTENT | Application approval could not complete. |
| RECOVERY_ACTION | Brand authority handles correction; C03 Creator UI only refreshes history if invalid read |
| PRESENTATION | INLINE (Brand owner surface only) |
| RETRYABLE | AFTER_CORRECTION |

### C03_APPLICATION_CREATOR_IDENTITY_CONFLICT

| Field | Value |
|---|---|
| BACKEND_CODE | C03_APPLICATION_CREATOR_IDENTITY_CONFLICT |
| HTTP_OR_PROJECTION_CONTEXT | 409 Brand approval path; not emitted as Creator approval command |
| VIEW_STATE | HANDOFF_INVALID (defensive display only) |
| USER_COPY_INTENT | Application approval could not complete. |
| RECOVERY_ACTION | Brand authority handles correction; C03 Creator UI only refreshes history if invalid read |
| PRESENTATION | INLINE (Brand owner surface only) |
| RETRYABLE | AFTER_CORRECTION |

### OPPORTUNITY_CURSOR_INVALID

| Field | Value |
|---|---|
| BACKEND_CODE | OPPORTUNITY_CURSOR_INVALID |
| HTTP_OR_PROJECTION_CONTEXT | 400 collection cursor |
| VIEW_STATE | OC_CURSOR_ERROR |
| USER_COPY_INTENT | This page could not be loaded. |
| RECOVERY_ACTION | Reload first Opportunity page |
| PRESENTATION | INLINE |
| RETRYABLE | YES_FIRST_PAGE |

### APPLICATION_CURSOR_INVALID

| Field | Value |
|---|---|
| BACKEND_CODE | APPLICATION_CURSOR_INVALID |
| HTTP_OR_PROJECTION_CONTEXT | 400 collection cursor |
| VIEW_STATE | HIST_CURSOR_ERROR |
| USER_COPY_INTENT | This page could not be loaded. |
| RECOVERY_ACTION | Reload first Application page |
| PRESENTATION | INLINE |
| RETRYABLE | YES_FIRST_PAGE |

### NO_CODE; message=Creator access required

| Field | Value |
|---|---|
| BACKEND_CODE | NO_CODE; message=Creator access required |
| HTTP_OR_PROJECTION_CONTEXT | 403 shared C05 |
| VIEW_STATE | UTIL_PERMISSION |
| USER_COPY_INTENT | Your current account cannot access this Creator workspace. |
| RECOVERY_ACTION | Clear private state; resolve current active Creator membership |
| PRESENTATION | PAGE |
| RETRYABLE | AFTER_RECOVERY |

### NO_CODE; message=An active Creator account is required

| Field | Value |
|---|---|
| BACKEND_CODE | NO_CODE; message=An active Creator account is required |
| HTTP_OR_PROJECTION_CONTEXT | 403 shared C05 |
| VIEW_STATE | UTIL_PERMISSION |
| USER_COPY_INTENT | Your current account cannot access this Creator workspace. |
| RECOVERY_ACTION | Clear private state; resolve current active Creator membership |
| PRESENTATION | PAGE |
| RETRYABLE | AFTER_RECOVERY |

### NO_CODE; message=No active Creator workspace membership

| Field | Value |
|---|---|
| BACKEND_CODE | NO_CODE; message=No active Creator workspace membership |
| HTTP_OR_PROJECTION_CONTEXT | 403 shared C05 |
| VIEW_STATE | UTIL_PERMISSION |
| USER_COPY_INTENT | Your current account cannot access this Creator workspace. |
| RECOVERY_ACTION | Clear private state; resolve current active Creator membership |
| PRESENTATION | PAGE |
| RETRYABLE | AFTER_RECOVERY |

### NO_CODE; message=Notification not found

| Field | Value |
|---|---|
| BACKEND_CODE | NO_CODE; message=Notification not found |
| HTTP_OR_PROJECTION_CONTEXT | 404 recipient read-mark missing/cross-scope |
| VIEW_STATE | NOTIF_MARK_FAILED |
| USER_COPY_INTENT | This notification is unavailable. |
| RECOVERY_ACTION | Refresh own list; no cross-scope disclosure |
| PRESENTATION | INLINE |
| RETRYABLE | NO |

### NO_CODE; message=Notification limit must be between 1 and 100

| Field | Value |
|---|---|
| BACKEND_CODE | NO_CODE; message=Notification limit must be between 1 and 100 |
| HTTP_OR_PROJECTION_CONTEXT | 400 notification limit |
| VIEW_STATE | NOTIF_LIST_FAILED |
| USER_COPY_INTENT | Notifications could not be loaded. |
| RECOVERY_ACTION | Use accepted fixed default 50 or integer1..100; no user raw query input |
| PRESENTATION | INLINE |
| RETRYABLE | AFTER_CORRECTION |

### NO_CODE; message=Brand Centre is available to active brand users only

| Field | Value |
|---|---|
| BACKEND_CODE | NO_CODE; message=Brand Centre is available to active brand users only |
| HTTP_OR_PROJECTION_CONTEXT | 403 existing Brand surface only |
| VIEW_STATE | OUTSIDE_CREATOR_C03 |
| USER_COPY_INTENT | Use existing Brand access/unavailable copy. |
| RECOVERY_ACTION | No Creator integration with Brand endpoints |
| PRESENTATION | PAGE (Brand only) |
| RETRYABLE | NO |

### NO_CODE; message=Active Brand team membership required

| Field | Value |
|---|---|
| BACKEND_CODE | NO_CODE; message=Active Brand team membership required |
| HTTP_OR_PROJECTION_CONTEXT | 403 existing Brand surface only |
| VIEW_STATE | OUTSIDE_CREATOR_C03 |
| USER_COPY_INTENT | Use existing Brand access/unavailable copy. |
| RECOVERY_ACTION | No Creator integration with Brand endpoints |
| PRESENTATION | PAGE (Brand only) |
| RETRYABLE | NO |

### NO_CODE; message=Campaign not found

| Field | Value |
|---|---|
| BACKEND_CODE | NO_CODE; message=Campaign not found |
| HTTP_OR_PROJECTION_CONTEXT | 404 existing Brand surface only |
| VIEW_STATE | OUTSIDE_CREATOR_C03 |
| USER_COPY_INTENT | Use existing Brand access/unavailable copy. |
| RECOVERY_ACTION | No Creator integration with Brand endpoints |
| PRESENTATION | PAGE (Brand only) |
| RETRYABLE | NO |

### NO_CODE; message=Brand profile not found

| Field | Value |
|---|---|
| BACKEND_CODE | NO_CODE; message=Brand profile not found |
| HTTP_OR_PROJECTION_CONTEXT | 404 existing Brand surface only |
| VIEW_STATE | OUTSIDE_CREATOR_C03 |
| USER_COPY_INTENT | Use existing Brand access/unavailable copy. |
| RECOVERY_ACTION | No Creator integration with Brand endpoints |
| PRESENTATION | PAGE (Brand only) |
| RETRYABLE | NO |

### C03_CANONICAL_APPLICATION_HANDOFF_NOT_AVAILABLE

| Field | Value |
|---|---|
| BACKEND_CODE | C03_CANONICAL_APPLICATION_HANDOFF_NOT_AVAILABLE |
| HTTP_OR_PROJECTION_CONTEXT | Defensive missing optional dependency; accepted module supplies it |
| VIEW_STATE | OUTSIDE_NORMAL_P14 |
| USER_COPY_INTENT | Action temporarily unavailable. |
| RECOVERY_ACTION | No normal Creator state or fallback synthesized |
| PRESENTATION | INLINE (Brand only) |
| RETRYABLE | AFTER_CORRECTION |

### NO_CODE; message=C03_LEGACY_APPLICATION_SHAPE_INVALID

| Field | Value |
|---|---|
| BACKEND_CODE | NO_CODE; message=C03_LEGACY_APPLICATION_SHAPE_INVALID |
| HTTP_OR_PROJECTION_CONTEXT | 409 legacy adapter message, not code field |
| VIEW_STATE | OUTSIDE_CREATOR_CANONICAL_HISTORY |
| USER_COPY_INTENT | This legacy Application cannot be shown. |
| RECOVERY_ACTION | Do not cast legacy records to canonical |
| PRESENTATION | INLINE (legacy Brand adapter only) |
| RETRYABLE | NO |

### APPLICATION_EXPIRY_BATCH_TOO_LARGE

| Field | Value |
|---|---|
| BACKEND_CODE | APPLICATION_EXPIRY_BATCH_TOO_LARGE |
| HTTP_OR_PROJECTION_CONTEXT | Internal only; no public route |
| VIEW_STATE | NOT_FRONTEND_CONSUMABLE |
| USER_COPY_INTENT | No frontend copy. |
| RECOVERY_ACTION | Exclude from public API error union |
| PRESENTATION | NONE |
| RETRYABLE | NOT_APPLICABLE |

### NO_CODE; framework authentication response

| Field | Value |
|---|---|
| BACKEND_CODE | NO_CODE; framework authentication response |
| HTTP_OR_PROJECTION_CONTEXT | 401 after authenticatedFetch single refresh |
| VIEW_STATE | UTIL_SESSION |
| USER_COPY_INTENT | Sign in to continue. |
| RECOVERY_ACTION | Clear scope; safe internal return |
| PRESENTATION | PAGE |
| RETRYABLE | AFTER_AUTH |

### NO_CODE; framework UUID validation response

| Field | Value |
|---|---|
| BACKEND_CODE | NO_CODE; framework UUID validation response |
| HTTP_OR_PROJECTION_CONTEXT | 400 UUID pipe |
| VIEW_STATE | UTIL_MALFORMED |
| USER_COPY_INTENT | This link or request is invalid. |
| RECOVERY_ACTION | Return to safe collection; do not echo input |
| PRESENTATION | PAGE |
| RETRYABLE | NO |

### NO_CODE; framework throttling response

| Field | Value |
|---|---|
| BACKEND_CODE | NO_CODE; framework throttling response |
| HTTP_OR_PROJECTION_CONTEXT | 429 |
| VIEW_STATE | UTIL_THROTTLED |
| USER_COPY_INTENT | Please wait before trying again. |
| RECOVERY_ACTION | Honor Retry-After when supplied; bounded explicit retry |
| PRESENTATION | INLINE |
| RETRYABLE | LATER |


## C03_STALE_FRONTEND_SEMANTICS_REGISTER_V1

Full machine-readable copies: [CSV](p2-preflight/C03_STALE_FRONTEND_SEMANTICS_REGISTER_V1.csv) · [JSON](p2-preflight/C03_STALE_FRONTEND_SEMANTICS_REGISTER_V1.json)

| Occurrence / location | Term | Classification | Why / authority / P4 action |
|---|---|---|---|
| OCC-00001 / docs/ai-collaboration/2026-06-24-creator-campaigns-stitch-intake.md:9:3 | Marketplace | LEGACY_REFERENCE_ONLY | Tracked documentation/reference/config occurrence; not executable C03 authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Retain historical evidence; do not import its Marketplace/stock/legacy authority into P4. |
| OCC-00002 / docs/ai-collaboration/2026-06-24-creator-campaigns-stitch-intake.md:9:28 | marketplace | LEGACY_REFERENCE_ONLY | Tracked documentation/reference/config occurrence; not executable C03 authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Retain historical evidence; do not import its Marketplace/stock/legacy authority into P4. |
| OCC-00003 / docs/ai-collaboration/2026-06-24-creator-campaigns-stitch-intake.md:10:19 | marketplace | LEGACY_REFERENCE_ONLY | Tracked documentation/reference/config occurrence; not executable C03 authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Retain historical evidence; do not import its Marketplace/stock/legacy authority into P4. |
| OCC-00004 / docs/ai-collaboration/2026-06-24-creator-campaigns-stitch-intake.md:11:28 | marketplace | LEGACY_REFERENCE_ONLY | Tracked documentation/reference/config occurrence; not executable C03 authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Retain historical evidence; do not import its Marketplace/stock/legacy authority into P4. |
| OCC-00005 / docs/ai-collaboration/2026-06-24-creator-campaigns-stitch-intake.md:12:25 | marketplace | LEGACY_REFERENCE_ONLY | Tracked documentation/reference/config occurrence; not executable C03 authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Retain historical evidence; do not import its Marketplace/stock/legacy authority into P4. |
| OCC-00006 / docs/ai-collaboration/2026-06-24-creator-campaigns-stitch-intake.md:13:25 | marketplace | LEGACY_REFERENCE_ONLY | Tracked documentation/reference/config occurrence; not executable C03 authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Retain historical evidence; do not import its Marketplace/stock/legacy authority into P4. |
| OCC-00007 / docs/ai-collaboration/2026-06-24-creator-campaigns-stitch-intake.md:32:13 | marketplace | LEGACY_REFERENCE_ONLY | Tracked documentation/reference/config occurrence; not executable C03 authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Retain historical evidence; do not import its Marketplace/stock/legacy authority into P4. |
| OCC-00008 / docs/ai-collaboration/2026-06-24-creator-campaigns-stitch-intake.md:32:28 | Marketplace | LEGACY_REFERENCE_ONLY | Tracked documentation/reference/config occurrence; not executable C03 authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Retain historical evidence; do not import its Marketplace/stock/legacy authority into P4. |
| OCC-00009 / docs/ai-collaboration/2026-06-24-creator-campaigns-stitch-intake.md:33:13 | marketplace | LEGACY_REFERENCE_ONLY | Tracked documentation/reference/config occurrence; not executable C03 authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Retain historical evidence; do not import its Marketplace/stock/legacy authority into P4. |
| OCC-00010 / docs/ai-collaboration/c01-i6-creator-entry-frontend-reconciliation-execution-ledger.yaml:35:29 | marketplace | LEGACY_REFERENCE_ONLY | Tracked documentation/reference/config occurrence; not executable C03 authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Retain historical evidence; do not import its Marketplace/stock/legacy authority into P4. |
| OCC-00011 / docs/ai-collaboration/c01-i6-creator-entry-frontend-reconciliation-execution-ledger.yaml:54:26 | marketplace | LEGACY_REFERENCE_ONLY | Tracked documentation/reference/config occurrence; not executable C03 authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Retain historical evidence; do not import its Marketplace/stock/legacy authority into P4. |
| OCC-00012 / docs/ai-collaboration/c01-i6-creator-entry-state-family-register.md:20:236 | marketplace | LEGACY_REFERENCE_ONLY | Tracked documentation/reference/config occurrence; not executable C03 authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Retain historical evidence; do not import its Marketplace/stock/legacy authority into P4. |
| OCC-00013 / docs/ai-collaboration/c01-i6-creator-entry-state-family-register.md:21:230 | Marketplace | LEGACY_REFERENCE_ONLY | Tracked documentation/reference/config occurrence; not executable C03 authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Retain historical evidence; do not import its Marketplace/stock/legacy authority into P4. |
| OCC-00014 / docs/ai-collaboration/c01-i6-creator-entry-state-family-register.md:27:4 | RequireCreatorPlatformAccess | LEGACY_REFERENCE_ONLY | Tracked documentation/reference/config occurrence; not executable C03 authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Retain historical evidence; do not import its Marketplace/stock/legacy authority into P4. |
| OCC-00015 / docs/ai-collaboration/c01-i7-frontend-runtime-acceptance-ledger.yaml:79:35 | marketplace | LEGACY_REFERENCE_ONLY | Tracked documentation/reference/config occurrence; not executable C03 authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Retain historical evidence; do not import its Marketplace/stock/legacy authority into P4. |
| OCC-00016 / docs/ai-collaboration/c01-i7-frontend-runtime-acceptance-ledger.yaml:83:3 | invite_token | LEGACY_REFERENCE_ONLY | Tracked documentation/reference/config occurrence; not executable C03 authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Retain historical evidence; do not import its Marketplace/stock/legacy authority into P4. |
| OCC-00017 / docs/ai-collaboration/c01-i7-frontend-runtime-acceptance-ledger.yaml:90:16 | marketplace | LEGACY_REFERENCE_ONLY | Tracked documentation/reference/config occurrence; not executable C03 authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Retain historical evidence; do not import its Marketplace/stock/legacy authority into P4. |
| OCC-00018 / docs/ai-collaboration/c01-i7-frontend-runtime-acceptance-ledger.yaml:171:28 | marketplace | LEGACY_REFERENCE_ONLY | Tracked documentation/reference/config occurrence; not executable C03 authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Retain historical evidence; do not import its Marketplace/stock/legacy authority into P4. |
| OCC-00019 / docs/brand-onboarding/LANDING_STEP1_UI_TESTING.md:103:3 | Marketplace | LEGACY_REFERENCE_ONLY | Tracked documentation/reference/config occurrence; not executable C03 authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Retain historical evidence; do not import its Marketplace/stock/legacy authority into P4. |
| OCC-00020 / docs/gatekeeper/frontend-reconciliation-runtime-gate.md:199:12 | marketplace | LEGACY_REFERENCE_ONLY | Tracked documentation/reference/config occurrence; not executable C03 authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Retain historical evidence; do not import its Marketplace/stock/legacy authority into P4. |
| OCC-00021 / src/features/auth/components/sign-in-card.test.ts:146:20 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00022 / src/features/auth/components/sign-in-card.test.ts:149:13 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00023 / src/features/auth/components/sign-in-card.test.ts:149:39 | invite_token | REUSE_WITH_RECONCILIATION | Raw invitation credential in legacy DTO/query/path or propagation violates secure C03 exchange. Test occurrence records legacy behavior, not independent permission. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Rewrite legacy-positive expectation for frozen behavior; retain or add relevant negative guard coverage only in authorized P4. |
| OCC-00024 / src/features/auth/components/sign-in-card.test.ts:236:43 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00025 / src/features/auth/components/sign-in-card.test.ts:238:21 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00026 / src/features/auth/constants.ts:27:3 | creatorMarketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00027 / src/features/auth/constants.ts:27:33 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00028 / src/features/auth/constants.ts:28:3 | creatorMarketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00029 / src/features/auth/constants.ts:28:41 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00030 / src/features/auth/constants.ts:43:18 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00031 / src/features/auth/constants.ts:45:3 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00032 / src/features/auth/constants.ts:45:18 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00033 / src/features/auth/constants.ts:46:3 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00034 / src/features/auth/constants.ts:46:26 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00035 / src/features/auth/constants.ts:47:3 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00036 / src/features/auth/constants.ts:47:24 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00037 / src/features/auth/post-login-redirect.test.ts:11:9 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00038 / src/features/auth/post-login-redirect.test.ts:12:9 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00039 / src/features/auth/post-login-redirect.test.ts:20:15 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00040 / src/features/auth/post-login-redirect.test.ts:21:15 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00041 / src/features/auth/post-login-redirect.test.ts:22:7 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00042 / src/features/auth/post-login-redirect.test.ts:23:7 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00043 / src/features/auth/post-login-redirect.test.ts:25:35 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00044 / src/features/auth/post-login-redirect.ts:5:21 | MARKETPLACE | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00045 / src/features/auth/post-login-redirect.ts:5:53 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00046 / src/features/auth/post-login-redirect.ts:6:14 | MARKETPLACE | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00047 / src/features/auth/post-login-redirect.ts:6:37 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00048 / src/features/auth/post-login-redirect.ts:9:4 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00049 / src/features/auth/post-login-redirect.ts:23:21 | MARKETPLACE | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00050 / src/features/auth/post-login-redirect.ts:24:14 | MARKETPLACE | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00051 / src/features/brand-onboarding/components/social-sync-view.test.ts:101:7 | creatorMarketplace | NOT_RELEVANT | Provider Settings/OAuth naming or Brand integration/commerce vocabulary; not C03 Marketplace discovery or Apply eligibility. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Preserve unrelated provider/Brand/Settings contract; no global search-and-replace. |
| OCC-00052 / src/features/brand-onboarding/contracts/discovery.contracts.ts:53:16 | MARKETPLACE | NOT_RELEVANT | Provider Settings/OAuth naming or Brand integration/commerce vocabulary; not C03 Marketplace discovery or Apply eligibility. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Preserve unrelated provider/Brand/Settings contract; no global search-and-replace. |
| OCC-00053 / src/features/brand-onboarding/schemas/url-schema.test.ts:22:23 | marketplace | NOT_RELEVANT | Provider Settings/OAuth naming or Brand integration/commerce vocabulary; not C03 Marketplace discovery or Apply eligibility. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Preserve unrelated provider/Brand/Settings contract; no global search-and-replace. |
| OCC-00054 / src/features/brand-onboarding/schemas/url-schema.ts:15:7 | MARKETPLACE | NOT_RELEVANT | Provider Settings/OAuth naming or Brand integration/commerce vocabulary; not C03 Marketplace discovery or Apply eligibility. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Preserve unrelated provider/Brand/Settings contract; no global search-and-replace. |
| OCC-00055 / src/features/brand-onboarding/schemas/url-schema.ts:51:19 | Marketplace | NOT_RELEVANT | Provider Settings/OAuth naming or Brand integration/commerce vocabulary; not C03 Marketplace discovery or Apply eligibility. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Preserve unrelated provider/Brand/Settings contract; no global search-and-replace. |
| OCC-00056 / src/features/brand-onboarding/schemas/url-schema.ts:53:10 | MARKETPLACE | NOT_RELEVANT | Provider Settings/OAuth naming or Brand integration/commerce vocabulary; not C03 Marketplace discovery or Apply eligibility. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Preserve unrelated provider/Brand/Settings contract; no global search-and-replace. |
| OCC-00057 / src/features/brand-onboarding/schemas/url-schema.ts:71:31 | Marketplace | NOT_RELEVANT | Provider Settings/OAuth naming or Brand integration/commerce vocabulary; not C03 Marketplace discovery or Apply eligibility. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Preserve unrelated provider/Brand/Settings contract; no global search-and-replace. |
| OCC-00058 / src/features/brand-onboarding/schemas/url-schema.ts:73:59 | marketplace | NOT_RELEVANT | Provider Settings/OAuth naming or Brand integration/commerce vocabulary; not C03 Marketplace discovery or Apply eligibility. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Preserve unrelated provider/Brand/Settings contract; no global search-and-replace. |
| OCC-00059 / src/features/creator-campaigns/api/creator-campaigns-client.ts:8:3 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00060 / src/features/creator-campaigns/api/creator-campaigns-client.ts:9:3 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00061 / src/features/creator-campaigns/api/creator-campaigns-client.ts:10:3 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00062 / src/features/creator-campaigns/api/creator-campaigns-client.ts:11:3 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00063 / src/features/creator-campaigns/api/creator-campaigns-client.ts:12:3 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00064 / src/features/creator-campaigns/api/creator-campaigns-client.ts:19:7 | MARKETPLACE | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00065 / src/features/creator-campaigns/api/creator-campaigns-client.ts:19:56 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00066 / src/features/creator-campaigns/api/creator-campaigns-client.ts:50:31 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00067 / src/features/creator-campaigns/api/creator-campaigns-client.ts:74:28 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00068 / src/features/creator-campaigns/api/creator-campaigns-client.ts:75:10 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00069 / src/features/creator-campaigns/api/creator-campaigns-client.ts:76:12 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00070 / src/features/creator-campaigns/api/creator-campaigns-client.ts:78:8 | MARKETPLACE | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00071 / src/features/creator-campaigns/api/creator-campaigns-client.ts:81:47 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00072 / src/features/creator-campaigns/api/creator-campaigns-client.ts:84:28 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00073 / src/features/creator-campaigns/api/creator-campaigns-client.ts:87:12 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00074 / src/features/creator-campaigns/api/creator-campaigns-client.ts:89:9 | invite_token | REMOVE_IN_P4 | Raw invitation credential in legacy DTO/query/path or propagation violates secure C03 exchange. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove production raw credential propagation; replace positive legacy tests with fragment cleanup + one POST + opaque cookie behavior; retain negative security assertions. |
| OCC-00075 / src/features/creator-campaigns/api/creator-campaigns-client.ts:92:8 | MARKETPLACE | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00076 / src/features/creator-campaigns/api/creator-campaigns-client.ts:95:47 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00077 / src/features/creator-campaigns/api/creator-campaigns-client.ts:98:28 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00078 / src/features/creator-campaigns/api/creator-campaigns-client.ts:100:12 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00079 / src/features/creator-campaigns/api/creator-campaigns-client.ts:102:8 | MARKETPLACE | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00080 / src/features/creator-campaigns/api/creator-campaigns-client.ts:105:47 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00081 / src/features/creator-campaigns/api/creator-campaigns-client.ts:108:28 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00082 / src/features/creator-campaigns/api/creator-campaigns-client.ts:111:12 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00083 / src/features/creator-campaigns/api/creator-campaigns-client.ts:114:8 | MARKETPLACE | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00084 / src/features/creator-campaigns/api/creator-campaigns-client.ts:117:47 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00085 / src/features/creator-campaigns/api/creator-campaigns-client.ts:120:28 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00086 / src/features/creator-campaigns/api/creator-campaigns-client.ts:127:35 | MARKETPLACE | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00087 / src/features/creator-campaigns/api/creator-campaigns-client.ts:130:28 | invite_token | REMOVE_IN_P4 | Raw invitation credential in legacy DTO/query/path or propagation violates secure C03 exchange. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove production raw credential propagation; replace positive legacy tests with fragment cleanup + one POST + opaque cookie behavior; retain negative security assertions. |
| OCC-00088 / src/features/creator-campaigns/api/public-marketplace-client.ts:4:3 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00089 / src/features/creator-campaigns/api/public-marketplace-client.ts:5:3 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00090 / src/features/creator-campaigns/api/public-marketplace-client.ts:6:3 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00091 / src/features/creator-campaigns/api/public-marketplace-client.ts:9:50 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00092 / src/features/creator-campaigns/api/public-marketplace-client.ts:31:31 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00093 / src/features/creator-campaigns/api/public-marketplace-client.ts:50:28 | PublicMarketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00094 / src/features/creator-campaigns/api/public-marketplace-client.ts:51:10 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00095 / src/features/creator-campaigns/api/public-marketplace-client.ts:52:12 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00096 / src/features/creator-campaigns/api/public-marketplace-client.ts:57:47 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00097 / src/features/creator-campaigns/api/public-marketplace-client.ts:60:28 | PublicMarketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00098 / src/features/creator-campaigns/api/public-marketplace-client.ts:63:12 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00099 / src/features/creator-campaigns/api/public-marketplace-client.ts:65:9 | invite_token | REMOVE_IN_P4 | Raw invitation credential in legacy DTO/query/path or propagation violates secure C03 exchange. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove production raw credential propagation; replace positive legacy tests with fragment cleanup + one POST + opaque cookie behavior; retain negative security assertions. |
| OCC-00100 / src/features/creator-campaigns/api/public-marketplace-client.ts:71:47 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00101 / src/features/creator-campaigns/components/CampaignApplicationWizard.tsx:6:15 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00102 / src/features/creator-campaigns/components/CampaignApplicationWizard.tsx:13:11 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00103 / src/features/creator-campaigns/components/CampaignApplicationWizard.tsx:26:53 | out_of_stock | REMOVE_IN_P4 | Stock is not canonical Asset/Brief availability. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove from reachable C03 consumption; replace with frozen projection/reason/applicationSelection/current capability; no broad deletion of unrelated owner code. |
| OCC-00104 / src/features/creator-campaigns/components/CampaignApplicationWizard.tsx:114:39 | out_of_stock | REMOVE_IN_P4 | Stock is not canonical Asset/Brief availability. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove from reachable C03 consumption; replace with frozen projection/reason/applicationSelection/current capability; no broad deletion of unrelated owner code. |
| OCC-00105 / src/features/creator-campaigns/components/CampaignApplicationWizard.tsx:118:31 | out_of_stock | REMOVE_IN_P4 | Stock is not canonical Asset/Brief availability. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove from reachable C03 consumption; replace with frozen projection/reason/applicationSelection/current capability; no broad deletion of unrelated owner code. |
| OCC-00106 / src/features/creator-campaigns/components/CampaignApplicationWizard.tsx:123:35 | out_of_stock | REMOVE_IN_P4 | Stock is not canonical Asset/Brief availability. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove from reachable C03 consumption; replace with frozen projection/reason/applicationSelection/current capability; no broad deletion of unrelated owner code. |
| OCC-00107 / src/features/creator-campaigns/components/CampaignApplicationWizard.tsx:135:58 | inventory_count | REMOVE_IN_P4 | Product inventory is not Apply authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove from reachable C03 consumption; replace with frozen projection/reason/applicationSelection/current capability; no broad deletion of unrelated owner code. |
| OCC-00108 / src/features/creator-campaigns/components/CampaignApplicationWizard.tsx:136:34 | out_of_stock | REMOVE_IN_P4 | Stock is not canonical Asset/Brief availability. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove from reachable C03 consumption; replace with frozen projection/reason/applicationSelection/current capability; no broad deletion of unrelated owner code. |
| OCC-00109 / src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx:15:8 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00110 / src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx:16:8 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00111 / src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx:17:8 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00112 / src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx:21:3 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00113 / src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx:22:3 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00114 / src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx:35:11 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00115 / src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx:40:3 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00116 / src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx:50:3 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00117 / src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx:58:52 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00118 / src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx:66:5 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00119 / src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx:67:30 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00120 / src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx:67:56 | creatorMarketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00121 / src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx:71:58 | compensation_teaser | REMOVE_IN_P4 | Commercial details only in structurally AUTHORIZED projection. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove from reachable C03 consumption; replace with frozen projection/reason/applicationSelection/current capability; no broad deletion of unrelated owner code. |
| OCC-00122 / src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx:78:13 | already_applied | REMOVE_IN_P4 | Applications are independent canonical rows, not a Campaign Boolean. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove from reachable C03 consumption; replace with frozen projection/reason/applicationSelection/current capability; no broad deletion of unrelated owner code. |
| OCC-00123 / src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx:84:14 | already_applied | REMOVE_IN_P4 | Applications are independent canonical rows, not a Campaign Boolean. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove from reachable C03 consumption; replace with frozen projection/reason/applicationSelection/current capability; no broad deletion of unrelated owner code. |
| OCC-00124 / src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx:100:15 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00125 / src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx:108:61 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00126 / src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx:114:30 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00127 / src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx:121:18 | invitation_token | REMOVE_IN_P4 | Raw invitation credential in legacy DTO/query/path or propagation violates secure C03 exchange. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove production raw credential propagation; replace positive legacy tests with fragment cleanup + one POST + opaque cookie behavior; retain negative security assertions. |
| OCC-00128 / src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx:147:32 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00129 / src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx:170:45 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00130 / src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx:173:30 | invite_token | REMOVE_IN_P4 | Raw invitation credential in legacy DTO/query/path or propagation violates secure C03 exchange. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove production raw credential propagation; replace positive legacy tests with fragment cleanup + one POST + opaque cookie behavior; retain negative security assertions. |
| OCC-00131 / src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx:175:23 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00132 / src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx:198:20 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00133 / src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx:245:29 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00134 / src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx:317:25 | match_score_percent | REMOVE_IN_P4 | No Marketplace ranking. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove from reachable C03 consumption; replace with frozen projection/reason/applicationSelection/current capability; no broad deletion of unrelated owner code. |
| OCC-00135 / src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx:318:44 | match_score_percent | REMOVE_IN_P4 | No Marketplace ranking. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove from reachable C03 consumption; replace with frozen projection/reason/applicationSelection/current capability; no broad deletion of unrelated owner code. |
| OCC-00136 / src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx:327:38 | application_scope | REMOVE_IN_P4 | Legacy scope is not strict canonical Asset/Brief selection. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove from reachable C03 consumption; replace with frozen projection/reason/applicationSelection/current capability; no broad deletion of unrelated owner code. |
| OCC-00137 / src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx:501:43 | creatorMarketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00138 / src/features/creator-campaigns/components/CommandCenterWorkspace.tsx:33:31 | creatorMarketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00139 / src/features/creator-campaigns/components/CommandCenterWorkspace.tsx:34:40 | invitation_token | REMOVE_IN_P4 | Raw invitation credential in legacy DTO/query/path or propagation violates secure C03 exchange. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove production raw credential propagation; replace positive legacy tests with fragment cleanup + one POST + opaque cookie behavior; retain negative security assertions. |
| OCC-00140 / src/features/creator-campaigns/components/CommandCenterWorkspace.tsx:35:21 | invite_token | REMOVE_IN_P4 | Raw invitation credential in legacy DTO/query/path or propagation violates secure C03 exchange. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove production raw credential propagation; replace positive legacy tests with fragment cleanup + one POST + opaque cookie behavior; retain negative security assertions. |
| OCC-00141 / src/features/creator-campaigns/components/CommandCenterWorkspace.tsx:35:59 | invitation_token | REMOVE_IN_P4 | Raw invitation credential in legacy DTO/query/path or propagation violates secure C03 exchange. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove production raw credential propagation; replace positive legacy tests with fragment cleanup + one POST + opaque cookie behavior; retain negative security assertions. |
| OCC-00142 / src/features/creator-campaigns/components/CommandCenterWorkspace.tsx:297:40 | creatorMarketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00143 / src/features/creator-campaigns/components/CrossSellTray.tsx:5:15 | Marketplace | LEGACY_REFERENCE_ONLY | Filter/recommendation behavior has no accepted C03 endpoint/product contract. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Do not expose in P4; drawer/card geometry may be reused with canonical meaning. |
| OCC-00144 / src/features/creator-campaigns/components/CrossSellTray.tsx:13:14 | Marketplace | LEGACY_REFERENCE_ONLY | Filter/recommendation behavior has no accepted C03 endpoint/product contract. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Do not expose in P4; drawer/card geometry may be reused with canonical meaning. |
| OCC-00145 / src/features/creator-campaigns/components/CrossSellTray.tsx:21:36 | marketplace | LEGACY_REFERENCE_ONLY | Filter/recommendation behavior has no accepted C03 endpoint/product contract. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Do not expose in P4; drawer/card geometry may be reused with canonical meaning. |
| OCC-00146 / src/features/creator-campaigns/components/CrossSellTray.tsx:31:23 | marketplace | LEGACY_REFERENCE_ONLY | Filter/recommendation behavior has no accepted C03 endpoint/product contract. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Do not expose in P4; drawer/card geometry may be reused with canonical meaning. |
| OCC-00147 / src/features/creator-campaigns/components/CrossSellTray.tsx:39:64 | compensation_teaser | REMOVE_IN_P4 | Commercial details only in structurally AUTHORIZED projection. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove from reachable C03 consumption; replace with frozen projection/reason/applicationSelection/current capability; no broad deletion of unrelated owner code. |
| OCC-00148 / src/features/creator-campaigns/components/CrossSellTray.tsx:56:25 | match_score_percent | REMOVE_IN_P4 | No Marketplace ranking. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove from reachable C03 consumption; replace with frozen projection/reason/applicationSelection/current capability; no broad deletion of unrelated owner code. |
| OCC-00149 / src/features/creator-campaigns/components/CrossSellTray.tsx:58:42 | match_score_percent | REMOVE_IN_P4 | No Marketplace ranking. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove from reachable C03 consumption; replace with frozen projection/reason/applicationSelection/current capability; no broad deletion of unrelated owner code. |
| OCC-00150 / src/features/creator-campaigns/components/CrossSellTray.tsx:67:23 | marketplace | LEGACY_REFERENCE_ONLY | Filter/recommendation behavior has no accepted C03 endpoint/product contract. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Do not expose in P4; drawer/card geometry may be reused with canonical meaning. |
| OCC-00151 / src/features/creator-campaigns/components/MarketplaceDiscovery.tsx:8:15 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00152 / src/features/creator-campaigns/components/MarketplaceDiscovery.tsx:17:3 | MarketplaceFilterDrawer | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00153 / src/features/creator-campaigns/components/MarketplaceDiscovery.tsx:18:8 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00154 / src/features/creator-campaigns/components/MarketplaceDiscovery.tsx:19:11 | MarketplaceFilterDrawer | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00155 / src/features/creator-campaigns/components/MarketplaceDiscovery.tsx:24:6 | MarketplaceDiscovery | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00156 / src/features/creator-campaigns/components/MarketplaceDiscovery.tsx:25:14 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00157 / src/features/creator-campaigns/components/MarketplaceDiscovery.tsx:33:20 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00158 / src/features/creator-campaigns/components/MarketplaceDiscovery.tsx:34:36 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00159 / src/features/creator-campaigns/components/MarketplaceDiscovery.tsx:42:10 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00160 / src/features/creator-campaigns/components/MarketplaceDiscovery.tsx:47:13 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00161 / src/features/creator-campaigns/components/MarketplaceDiscovery.tsx:51:49 | match_score_percent | REMOVE_IN_P4 | No Marketplace ranking. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove from reachable C03 consumption; replace with frozen projection/reason/applicationSelection/current capability; no broad deletion of unrelated owner code. |
| OCC-00162 / src/features/creator-campaigns/components/MarketplaceDiscovery.tsx:52:58 | compensation_teaser | REMOVE_IN_P4 | Commercial details only in structurally AUTHORIZED projection. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove from reachable C03 consumption; replace with frozen projection/reason/applicationSelection/current capability; no broad deletion of unrelated owner code. |
| OCC-00163 / src/features/creator-campaigns/components/MarketplaceDiscovery.tsx:68:22 | match_score_percent | REMOVE_IN_P4 | No Marketplace ranking. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove from reachable C03 consumption; replace with frozen projection/reason/applicationSelection/current capability; no broad deletion of unrelated owner code. |
| OCC-00164 / src/features/creator-campaigns/components/MarketplaceDiscovery.tsx:73:44 | match_score_percent | REMOVE_IN_P4 | No Marketplace ranking. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove from reachable C03 consumption; replace with frozen projection/reason/applicationSelection/current capability; no broad deletion of unrelated owner code. |
| OCC-00165 / src/features/creator-campaigns/components/MarketplaceDiscovery.tsx:79:53 | application_scope | REMOVE_IN_P4 | Legacy scope is not strict canonical Asset/Brief selection. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove from reachable C03 consumption; replace with frozen projection/reason/applicationSelection/current capability; no broad deletion of unrelated owner code. |
| OCC-00166 / src/features/creator-campaigns/components/MarketplaceDiscovery.tsx:116:17 | MarketplaceDiscovery | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00167 / src/features/creator-campaigns/components/MarketplaceDiscovery.tsx:132:4 | MarketplaceDiscovery | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00168 / src/features/creator-campaigns/components/MarketplaceDiscovery.tsx:136:65 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00169 / src/features/creator-campaigns/components/MarketplaceDiscovery.tsx:136:91 | creatorMarketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00170 / src/features/creator-campaigns/components/MarketplaceDiscovery.tsx:183:47 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00171 / src/features/creator-campaigns/components/MarketplaceDiscovery.tsx:193:53 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00172 / src/features/creator-campaigns/components/MarketplaceDiscovery.tsx:199:56 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00173 / src/features/creator-campaigns/components/MarketplaceDiscovery.tsx:298:28 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00174 / src/features/creator-campaigns/components/MarketplaceDiscovery.tsx:300:14 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00175 / src/features/creator-campaigns/components/MarketplaceDiscovery.tsx:310:8 | MarketplaceFilterDrawer | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00176 / src/features/creator-campaigns/components/MarketplaceFilterDrawer.tsx:3:15 | Marketplace | LEGACY_REFERENCE_ONLY | Filter/recommendation behavior has no accepted C03 endpoint/product contract. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Do not expose in P4; drawer/card geometry may be reused with canonical meaning. |
| OCC-00177 / src/features/creator-campaigns/components/MarketplaceFilterDrawer.tsx:5:13 | Marketplace | LEGACY_REFERENCE_ONLY | Filter/recommendation behavior has no accepted C03 endpoint/product contract. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Do not expose in P4; drawer/card geometry may be reused with canonical meaning. |
| OCC-00178 / src/features/creator-campaigns/components/MarketplaceFilterDrawer.tsx:13:20 | MARKETPLACE | LEGACY_REFERENCE_ONLY | Filter/recommendation behavior has no accepted C03 endpoint/product contract. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Do not expose in P4; drawer/card geometry may be reused with canonical meaning. |
| OCC-00179 / src/features/creator-campaigns/components/MarketplaceFilterDrawer.tsx:13:41 | Marketplace | LEGACY_REFERENCE_ONLY | Filter/recommendation behavior has no accepted C03 endpoint/product contract. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Do not expose in P4; drawer/card geometry may be reused with canonical meaning. |
| OCC-00180 / src/features/creator-campaigns/components/MarketplaceFilterDrawer.tsx:21:6 | MarketplaceFilterDrawer | LEGACY_REFERENCE_ONLY | Filter/recommendation behavior has no accepted C03 endpoint/product contract. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Do not expose in P4; drawer/card geometry may be reused with canonical meaning. |
| OCC-00181 / src/features/creator-campaigns/components/MarketplaceFilterDrawer.tsx:24:12 | Marketplace | LEGACY_REFERENCE_ONLY | Filter/recommendation behavior has no accepted C03 endpoint/product contract. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Do not expose in P4; drawer/card geometry may be reused with canonical meaning. |
| OCC-00182 / src/features/creator-campaigns/components/MarketplaceFilterDrawer.tsx:25:20 | Marketplace | LEGACY_REFERENCE_ONLY | Filter/recommendation behavior has no accepted C03 endpoint/product contract. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Do not expose in P4; drawer/card geometry may be reused with canonical meaning. |
| OCC-00183 / src/features/creator-campaigns/components/MarketplaceFilterDrawer.tsx:43:17 | marketplace | LEGACY_REFERENCE_ONLY | Filter/recommendation behavior has no accepted C03 endpoint/product contract. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Do not expose in P4; drawer/card geometry may be reused with canonical meaning. |
| OCC-00184 / src/features/creator-campaigns/components/MarketplaceFilterDrawer.tsx:44:12 | Marketplace | LEGACY_REFERENCE_ONLY | Filter/recommendation behavior has no accepted C03 endpoint/product contract. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Do not expose in P4; drawer/card geometry may be reused with canonical meaning. |
| OCC-00185 / src/features/creator-campaigns/components/MarketplaceFilterDrawer.tsx:46:3 | Marketplace | LEGACY_REFERENCE_ONLY | Filter/recommendation behavior has no accepted C03 endpoint/product contract. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Do not expose in P4; drawer/card geometry may be reused with canonical meaning. |
| OCC-00186 / src/features/creator-campaigns/components/MarketplaceFilterDrawer.tsx:59:45 | Marketplace | LEGACY_REFERENCE_ONLY | Filter/recommendation behavior has no accepted C03 endpoint/product contract. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Do not expose in P4; drawer/card geometry may be reused with canonical meaning. |
| OCC-00187 / src/features/creator-campaigns/components/MarketplaceFilterDrawer.tsx:69:17 | MarketplaceFilterDrawer | LEGACY_REFERENCE_ONLY | Filter/recommendation behavior has no accepted C03 endpoint/product contract. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Do not expose in P4; drawer/card geometry may be reused with canonical meaning. |
| OCC-00188 / src/features/creator-campaigns/components/MarketplaceFilterDrawer.tsx:75:4 | MarketplaceFilterDrawer | LEGACY_REFERENCE_ONLY | Filter/recommendation behavior has no accepted C03 endpoint/product contract. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Do not expose in P4; drawer/card geometry may be reused with canonical meaning. |
| OCC-00189 / src/features/creator-campaigns/components/MarketplaceFilterDrawer.tsx:95:24 | marketplace | LEGACY_REFERENCE_ONLY | Filter/recommendation behavior has no accepted C03 endpoint/product contract. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Do not expose in P4; drawer/card geometry may be reused with canonical meaning. |
| OCC-00190 / src/features/creator-campaigns/components/MarketplaceFilterDrawer.tsx:101:43 | MARKETPLACE | LEGACY_REFERENCE_ONLY | Filter/recommendation behavior has no accepted C03 endpoint/product contract. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Do not expose in P4; drawer/card geometry may be reused with canonical meaning. |
| OCC-00191 / src/features/creator-campaigns/components/campaign-detail-continuation.test.ts:17:15 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00192 / src/features/creator-campaigns/components/campaign-detail-continuation.test.ts:25:8 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00193 / src/features/creator-campaigns/components/campaign-detail-continuation.test.ts:26:8 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00194 / src/features/creator-campaigns/components/campaign-detail-continuation.test.ts:27:8 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00195 / src/features/creator-campaigns/components/campaign-detail-continuation.test.ts:33:3 | already_applied | REUSE_WITH_RECONCILIATION | Applications are independent canonical rows, not a Campaign Boolean. Test occurrence records legacy behavior, not independent permission. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Rewrite legacy-positive expectation for frozen behavior; retain or add relevant negative guard coverage only in authorized P4. |
| OCC-00196 / src/features/creator-campaigns/components/campaign-detail-continuation.test.ts:35:3 | application_scope | REUSE_WITH_RECONCILIATION | Legacy scope is not strict canonical Asset/Brief selection. Test occurrence records legacy behavior, not independent permission. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Rewrite legacy-positive expectation for frozen behavior; retain or add relevant negative guard coverage only in authorized P4. |
| OCC-00197 / src/features/creator-campaigns/components/campaign-detail-continuation.test.ts:47:5 | compensation_teaser | REUSE_WITH_RECONCILIATION | Commercial details only in structurally AUTHORIZED projection. Test occurrence records legacy behavior, not independent permission. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Rewrite legacy-positive expectation for frozen behavior; retain or add relevant negative guard coverage only in authorized P4. |
| OCC-00198 / src/features/creator-campaigns/components/campaign-detail-continuation.test.ts:53:3 | match_score_percent | REUSE_WITH_RECONCILIATION | No Marketplace ranking. Test occurrence records legacy behavior, not independent permission. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Rewrite legacy-positive expectation for frozen behavior; retain or add relevant negative guard coverage only in authorized P4. |
| OCC-00199 / src/features/creator-campaigns/components/campaign-detail-continuation.test.ts:55:17 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00200 / src/features/creator-campaigns/components/campaign-detail-continuation.test.ts:61:28 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00201 / src/features/creator-campaigns/components/campaign-detail-continuation.test.ts:66:19 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00202 / src/features/creator-campaigns/components/campaign-detail-continuation.test.ts:127:32 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00203 / src/features/creator-campaigns/components/campaign-detail-continuation.test.ts:127:55 | invite_token | REUSE_WITH_RECONCILIATION | Raw invitation credential in legacy DTO/query/path or propagation violates secure C03 exchange. Test occurrence records legacy behavior, not independent permission. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Rewrite legacy-positive expectation for frozen behavior; retain or add relevant negative guard coverage only in authorized P4. |
| OCC-00204 / src/features/creator-campaigns/contracts/creator-campaigns.contracts.ts:1:13 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00205 / src/features/creator-campaigns/contracts/creator-campaigns.contracts.ts:8:13 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00206 / src/features/creator-campaigns/contracts/creator-campaigns.contracts.ts:18:3 | match_score_percent | REMOVE_IN_P4 | No Marketplace ranking. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove from reachable C03 consumption; replace with frozen projection/reason/applicationSelection/current capability; no broad deletion of unrelated owner code. |
| OCC-00207 / src/features/creator-campaigns/contracts/creator-campaigns.contracts.ts:19:3 | is_eligible | REMOVE_IN_P4 | Eligibility is backend tri-state; Boolean is insufficient. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove from reachable C03 consumption; replace with frozen projection/reason/applicationSelection/current capability; no broad deletion of unrelated owner code. |
| OCC-00208 / src/features/creator-campaigns/contracts/creator-campaigns.contracts.ts:21:3 | already_applied | REMOVE_IN_P4 | Applications are independent canonical rows, not a Campaign Boolean. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove from reachable C03 consumption; replace with frozen projection/reason/applicationSelection/current capability; no broad deletion of unrelated owner code. |
| OCC-00209 / src/features/creator-campaigns/contracts/creator-campaigns.contracts.ts:22:3 | application_scope | REMOVE_IN_P4 | Legacy scope is not strict canonical Asset/Brief selection. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove from reachable C03 consumption; replace with frozen projection/reason/applicationSelection/current capability; no broad deletion of unrelated owner code. |
| OCC-00210 / src/features/creator-campaigns/contracts/creator-campaigns.contracts.ts:23:3 | compensation_teaser | REMOVE_IN_P4 | Commercial details only in structurally AUTHORIZED projection. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove from reachable C03 consumption; replace with frozen projection/reason/applicationSelection/current capability; no broad deletion of unrelated owner code. |
| OCC-00211 / src/features/creator-campaigns/contracts/creator-campaigns.contracts.ts:23:24 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00212 / src/features/creator-campaigns/contracts/creator-campaigns.contracts.ts:26:13 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00213 / src/features/creator-campaigns/contracts/creator-campaigns.contracts.ts:27:3 | access_tier | REMOVE_IN_P4 | Backend discriminated Opportunity projection owns disclosure. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove from reachable C03 consumption; replace with frozen projection/reason/applicationSelection/current capability; no broad deletion of unrelated owner code. |
| OCC-00214 / src/features/creator-campaigns/contracts/creator-campaigns.contracts.ts:28:3 | is_social_connected | REMOVE_IN_P4 | Six persisted lifecycle outcomes; Boolean is insufficient. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove from reachable C03 consumption; replace with frozen projection/reason/applicationSelection/current capability; no broad deletion of unrelated owner code. |
| OCC-00215 / src/features/creator-campaigns/contracts/creator-campaigns.contracts.ts:31:14 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00216 / src/features/creator-campaigns/contracts/creator-campaigns.contracts.ts:34:13 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00217 / src/features/creator-campaigns/contracts/creator-campaigns.contracts.ts:40:13 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00218 / src/features/creator-campaigns/contracts/creator-campaigns.contracts.ts:44:3 | inventory_count | REMOVE_IN_P4 | Product inventory is not Apply authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove from reachable C03 consumption; replace with frozen projection/reason/applicationSelection/current capability; no broad deletion of unrelated owner code. |
| OCC-00219 / src/features/creator-campaigns/contracts/creator-campaigns.contracts.ts:45:3 | out_of_stock | REMOVE_IN_P4 | Stock is not canonical Asset/Brief availability. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove from reachable C03 consumption; replace with frozen projection/reason/applicationSelection/current capability; no broad deletion of unrelated owner code. |
| OCC-00220 / src/features/creator-campaigns/contracts/creator-campaigns.contracts.ts:48:13 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00221 / src/features/creator-campaigns/contracts/creator-campaigns.contracts.ts:56:13 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00222 / src/features/creator-campaigns/contracts/creator-campaigns.contracts.ts:67:13 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00223 / src/features/creator-campaigns/contracts/creator-campaigns.contracts.ts:69:13 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00224 / src/features/creator-campaigns/contracts/creator-campaigns.contracts.ts:70:3 | access_tier | REMOVE_IN_P4 | Backend discriminated Opportunity projection owns disclosure. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove from reachable C03 consumption; replace with frozen projection/reason/applicationSelection/current capability; no broad deletion of unrelated owner code. |
| OCC-00225 / src/features/creator-campaigns/contracts/creator-campaigns.contracts.ts:71:3 | is_social_connected | REMOVE_IN_P4 | Six persisted lifecycle outcomes; Boolean is insufficient. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove from reachable C03 consumption; replace with frozen projection/reason/applicationSelection/current capability; no broad deletion of unrelated owner code. |
| OCC-00226 / src/features/creator-campaigns/contracts/creator-campaigns.contracts.ts:73:3 | is_eligible | REMOVE_IN_P4 | Eligibility is backend tri-state; Boolean is insufficient. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove from reachable C03 consumption; replace with frozen projection/reason/applicationSelection/current capability; no broad deletion of unrelated owner code. |
| OCC-00227 / src/features/creator-campaigns/contracts/creator-campaigns.contracts.ts:75:3 | invite_token | REMOVE_IN_P4 | Raw invitation credential in legacy DTO/query/path or propagation violates secure C03 exchange. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove production raw credential propagation; replace positive legacy tests with fragment cleanup + one POST + opaque cookie behavior; retain negative security assertions. |
| OCC-00228 / src/features/creator-campaigns/contracts/creator-campaigns.contracts.ts:76:20 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00229 / src/features/creator-campaigns/contracts/creator-campaigns.contracts.ts:77:3 | match_score_percent | REMOVE_IN_P4 | No Marketplace ranking. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove from reachable C03 consumption; replace with frozen projection/reason/applicationSelection/current capability; no broad deletion of unrelated owner code. |
| OCC-00230 / src/features/creator-campaigns/contracts/creator-campaigns.contracts.ts:78:3 | already_applied | REMOVE_IN_P4 | Applications are independent canonical rows, not a Campaign Boolean. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove from reachable C03 consumption; replace with frozen projection/reason/applicationSelection/current capability; no broad deletion of unrelated owner code. |
| OCC-00231 / src/features/creator-campaigns/contracts/creator-campaigns.contracts.ts:79:3 | application_scope | REMOVE_IN_P4 | Legacy scope is not strict canonical Asset/Brief selection. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove from reachable C03 consumption; replace with frozen projection/reason/applicationSelection/current capability; no broad deletion of unrelated owner code. |
| OCC-00232 / src/features/creator-campaigns/contracts/creator-campaigns.contracts.ts:93:5 | compensation_teaser | REMOVE_IN_P4 | Commercial details only in structurally AUTHORIZED projection. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove from reachable C03 consumption; replace with frozen projection/reason/applicationSelection/current capability; no broad deletion of unrelated owner code. |
| OCC-00233 / src/features/creator-campaigns/contracts/creator-campaigns.contracts.ts:93:26 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00234 / src/features/creator-campaigns/contracts/creator-campaigns.contracts.ts:98:19 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00235 / src/features/creator-campaigns/contracts/creator-campaigns.contracts.ts:99:13 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00236 / src/features/creator-campaigns/contracts/creator-campaigns.contracts.ts:100:11 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00237 / src/features/creator-campaigns/contracts/creator-campaigns.contracts.ts:103:13 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00238 / src/features/creator-campaigns/contracts/creator-campaigns.contracts.ts:105:14 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00239 / src/features/creator-campaigns/contracts/creator-campaigns.contracts.ts:108:13 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00240 / src/features/creator-campaigns/contracts/creator-campaigns.contracts.ts:112:3 | invite_token | REMOVE_IN_P4 | Raw invitation credential in legacy DTO/query/path or propagation violates secure C03 exchange. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove production raw credential propagation; replace positive legacy tests with fragment cleanup + one POST + opaque cookie behavior; retain negative security assertions. |
| OCC-00241 / src/features/creator-campaigns/contracts/creator-campaigns.contracts.ts:113:8 | invitation_token | REMOVE_IN_P4 | Raw invitation credential in legacy DTO/query/path or propagation violates secure C03 exchange. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove production raw credential propagation; replace positive legacy tests with fragment cleanup + one POST + opaque cookie behavior; retain negative security assertions. |
| OCC-00242 / src/features/creator-campaigns/contracts/creator-campaigns.contracts.ts:117:3 | invitation_token | REMOVE_IN_P4 | Raw invitation credential in legacy DTO/query/path or propagation violates secure C03 exchange. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove production raw credential propagation; replace positive legacy tests with fragment cleanup + one POST + opaque cookie behavior; retain negative security assertions. |
| OCC-00243 / src/features/creator-campaigns/contracts/creator-campaigns.contracts.ts:121:3 | application_scope | REMOVE_IN_P4 | Legacy scope is not strict canonical Asset/Brief selection. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove from reachable C03 consumption; replace with frozen projection/reason/applicationSelection/current capability; no broad deletion of unrelated owner code. |
| OCC-00244 / src/features/creator-campaigns/contracts/creator-campaigns.contracts.ts:188:3 | invitation_token | REMOVE_IN_P4 | Raw invitation credential in legacy DTO/query/path or propagation violates secure C03 exchange. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove production raw credential propagation; replace positive legacy tests with fragment cleanup + one POST + opaque cookie behavior; retain negative security assertions. |
| OCC-00245 / src/features/creator-campaigns/creator-campaigns.css:134:4 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00246 / src/features/creator-campaigns/creator-campaigns.css:374:4 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00247 / src/features/creator-campaigns/creator-campaigns.css:375:5 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00248 / src/features/creator-campaigns/creator-campaigns.css:1141:7 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00249 / src/features/creator-campaigns/creator-campaigns.css:1194:7 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00250 / src/features/creator-campaigns/creator-campaigns.css:1200:7 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00251 / src/features/creator-campaigns/hooks/use-creator-campaign-detail.ts:4:8 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00252 / src/features/creator-campaigns/hooks/use-creator-campaign-detail.ts:6:15 | PublicMarketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00253 / src/features/creator-campaigns/hooks/use-creator-campaign-detail.ts:6:69 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00254 / src/features/creator-campaigns/hooks/use-creator-campaign-detail.ts:7:15 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00255 / src/features/creator-campaigns/hooks/use-creator-campaign-detail.ts:16:40 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00256 / src/features/creator-campaigns/hooks/use-creator-campaign-detail.ts:30:24 | PublicMarketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00257 / src/features/creator-campaigns/hooks/use-creator-campaign-detail.ts:31:24 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00258 / src/features/creator-campaigns/hooks/use-creator-marketplace.ts:4:8 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00259 / src/features/creator-campaigns/hooks/use-creator-marketplace.ts:6:15 | PublicMarketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00260 / src/features/creator-campaigns/hooks/use-creator-marketplace.ts:6:64 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00261 / src/features/creator-campaigns/hooks/use-creator-marketplace.ts:8:3 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00262 / src/features/creator-campaigns/hooks/use-creator-marketplace.ts:9:3 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00263 / src/features/creator-campaigns/hooks/use-creator-marketplace.ts:12:6 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00264 / src/features/creator-campaigns/hooks/use-creator-marketplace.ts:13:14 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00265 / src/features/creator-campaigns/hooks/use-creator-marketplace.ts:21:20 | CreatorMarketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00266 / src/features/creator-campaigns/hooks/use-creator-marketplace.ts:22:10 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00267 / src/features/creator-campaigns/hooks/use-creator-marketplace.ts:25:38 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00268 / src/features/creator-campaigns/hooks/use-creator-marketplace.ts:39:24 | PublicMarketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00269 / src/features/creator-campaigns/hooks/use-creator-marketplace.ts:40:24 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00270 / src/features/creator-campaigns/hooks/use-creator-marketplace.ts:44:37 | is_social_connected | REMOVE_IN_P4 | Six persisted lifecycle outcomes; Boolean is insufficient. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove from reachable C03 consumption; replace with frozen projection/reason/applicationSelection/current capability; no broad deletion of unrelated owner code. |
| OCC-00271 / src/features/creator-campaigns/hooks/use-creator-marketplace.ts:53:73 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00272 / src/features/creator-campaigns/utils/format-campaign-display.ts:1:15 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00273 / src/features/creator-campaigns/utils/format-campaign-display.ts:5:11 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00274 / src/features/creator-onboarding/api/creator-entry-client.ts:139:36 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00275 / src/features/creator-onboarding/components/creator-entry-view.test.ts:100:19 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00276 / src/features/creator-onboarding/components/creator-entry-view.test.ts:101:46 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00277 / src/features/creator-onboarding/components/creator-entry-view.test.ts:104:27 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00278 / src/features/creator-onboarding/components/creator-entry-view.test.ts:342:62 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00279 / src/features/creator-onboarding/components/creator-entry-view.test.ts:358:53 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00280 / src/features/creator-onboarding/components/creator-entry-view.tsx:81:27 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00281 / src/features/creator-onboarding/components/creator-entry-view.tsx:129:25 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00282 / src/features/creator-onboarding/components/creator-entry-view.tsx:445:61 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00283 / src/features/creator-onboarding/components/creator-entry-view.tsx:446:27 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00284 / src/features/creator-onboarding/components/creator-platform-route-guard.test.ts:7:10 | RequireCreatorPlatformAccess | REUSE_WITH_RECONCILIATION | C01 platform-entry guard is valid elsewhere but blocks C03 historical/recovery access when used route-wide. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Keep guard implementation for C01; remove enclosing guard from canonical C03 history/notification and approved C04 entry routes. |
| OCC-00285 / src/features/creator-onboarding/components/creator-platform-route-guard.test.ts:51:36 | RequireCreatorPlatformAccess | REUSE_WITH_RECONCILIATION | C01 platform-entry guard is valid elsewhere but blocks C03 historical/recovery access when used route-wide. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Keep guard implementation for C01; remove enclosing guard from canonical C03 history/notification and approved C04 entry routes. |
| OCC-00286 / src/features/creator-onboarding/components/creator-platform-route-guard.tsx:8:17 | RequireCreatorPlatformAccess | REUSE_WITH_RECONCILIATION | C01 platform-entry guard is valid elsewhere but blocks C03 historical/recovery access when used route-wide. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Keep guard implementation for C01; remove enclosing guard from canonical C03 history/notification and approved C04 entry routes. |
| OCC-00287 / src/features/creator-onboarding/constants.ts:7:32 | marketplace | NOT_RELEVANT | Provider Settings/OAuth naming or Brand integration/commerce vocabulary; not C03 Marketplace discovery or Apply eligibility. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Preserve unrelated provider/Brand/Settings contract; no global search-and-replace. |
| OCC-00288 / src/features/creator-onboarding/creator-entry-architecture.test.ts:65:25 | RequireCreatorPlatformAccess | REUSE_WITH_RECONCILIATION | C01 platform-entry guard is valid elsewhere but blocks C03 historical/recovery access when used route-wide. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Keep guard implementation for C01; remove enclosing guard from canonical C03 history/notification and approved C04 entry routes. |
| OCC-00289 / src/features/creator-onboarding/creator-settings-guard-scope.test.ts:34:30 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00290 / src/features/creator-onboarding/creator-settings-guard-scope.test.ts:34:50 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00291 / src/features/creator-onboarding/creator-settings-guard-scope.test.ts:35:3 | CreatorMarketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00292 / src/features/creator-onboarding/creator-settings-guard-scope.test.ts:35:42 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00293 / src/features/creator-onboarding/creator-settings-guard-scope.test.ts:146:18 | creatorMarketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00294 / src/features/creator-onboarding/creator-settings-guard-scope.test.ts:146:39 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00295 / src/features/creator-onboarding/creator-settings-guard-scope.test.ts:226:26 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00296 / src/features/creator-uce/components/CreatorCampaignsPanel.tsx:44:62 | inventory_count | REMOVE_IN_P4 | Product inventory is not Apply authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove from reachable C03 consumption; replace with frozen projection/reason/applicationSelection/current capability; no broad deletion of unrelated owner code. |
| OCC-00297 / src/features/creator-uce/components/CreatorCampaignsPanel.tsx:88:16 | already_applied | REMOVE_IN_P4 | Applications are independent canonical rows, not a Campaign Boolean. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove from reachable C03 consumption; replace with frozen projection/reason/applicationSelection/current capability; no broad deletion of unrelated owner code. |
| OCC-00298 / src/features/creator-uce/contracts/creator-uce.contracts.ts:13:3 | inventory_count | REMOVE_IN_P4 | Product inventory is not Apply authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove from reachable C03 consumption; replace with frozen projection/reason/applicationSelection/current capability; no broad deletion of unrelated owner code. |
| OCC-00299 / src/features/creator-uce/contracts/creator-uce.contracts.ts:14:3 | out_of_stock | REMOVE_IN_P4 | Stock is not canonical Asset/Brief availability. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove from reachable C03 consumption; replace with frozen projection/reason/applicationSelection/current capability; no broad deletion of unrelated owner code. |
| OCC-00300 / src/features/creator-uce/contracts/creator-uce.contracts.ts:22:3 | already_applied | REMOVE_IN_P4 | Applications are independent canonical rows, not a Campaign Boolean. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove from reachable C03 consumption; replace with frozen projection/reason/applicationSelection/current capability; no broad deletion of unrelated owner code. |
| OCC-00301 / src/features/public-brand/components/PublicBrandLandingWorkspace.tsx:17:15 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00302 / src/features/public-brand/components/PublicBrandLandingWorkspace.tsx:90:12 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00303 / src/features/public-brand/contracts/public-brand.contracts.ts:48:3 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00304 / src/features/public-brand/utils/brand-page-session.ts:27:11 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00305 / src/features/public-brand/utils/brand-page-session.ts:28:22 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00306 / src/features/public-brand/utils/brand-page-session.ts:34:27 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00307 / src/features/settings/api/instagram-integrations-client.test.ts:53:7 | creatorMarketplace | NOT_RELEVANT | Provider Settings/OAuth naming or Brand integration/commerce vocabulary; not C03 Marketplace discovery or Apply eligibility. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Preserve unrelated provider/Brand/Settings contract; no global search-and-replace. |
| OCC-00308 / src/features/settings/components/brand/brand-integrations-settings.test.ts:94:7 | creatorMarketplace | NOT_RELEVANT | Provider Settings/OAuth naming or Brand integration/commerce vocabulary; not C03 Marketplace discovery or Apply eligibility. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Preserve unrelated provider/Brand/Settings contract; no global search-and-replace. |
| OCC-00309 / src/features/settings/components/brand/brand-integrations-settings.test.ts:251:15 | creatorMarketplace | NOT_RELEVANT | Provider Settings/OAuth naming or Brand integration/commerce vocabulary; not C03 Marketplace discovery or Apply eligibility. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Preserve unrelated provider/Brand/Settings contract; no global search-and-replace. |
| OCC-00310 / src/features/settings/components/brand/brand-integrations-settings.test.ts:513:15 | creatorMarketplace | NOT_RELEVANT | Provider Settings/OAuth naming or Brand integration/commerce vocabulary; not C03 Marketplace discovery or Apply eligibility. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Preserve unrelated provider/Brand/Settings contract; no global search-and-replace. |
| OCC-00311 / src/features/settings/components/brand/brand-integrations-settings.test.ts:525:45 | Marketplace | NOT_RELEVANT | Provider Settings/OAuth naming or Brand integration/commerce vocabulary; not C03 Marketplace discovery or Apply eligibility. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Preserve unrelated provider/Brand/Settings contract; no global search-and-replace. |
| OCC-00312 / src/features/settings/components/brand/brand-integrations-settings.tsx:495:31 | Marketplace | NOT_RELEVANT | Provider Settings/OAuth naming or Brand integration/commerce vocabulary; not C03 Marketplace discovery or Apply eligibility. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Preserve unrelated provider/Brand/Settings contract; no global search-and-replace. |
| OCC-00313 / src/features/settings/components/brand/brand-integrations-settings.tsx:498:40 | creatorMarketplace | NOT_RELEVANT | Provider Settings/OAuth naming or Brand integration/commerce vocabulary; not C03 Marketplace discovery or Apply eligibility. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Preserve unrelated provider/Brand/Settings contract; no global search-and-replace. |
| OCC-00314 / src/features/settings/components/creator-settings-shell.test.ts:21:33 | Marketplace | NOT_RELEVANT | Provider Settings/OAuth naming or Brand integration/commerce vocabulary; not C03 Marketplace discovery or Apply eligibility. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Preserve unrelated provider/Brand/Settings contract; no global search-and-replace. |
| OCC-00315 / src/features/settings/components/creator/creator-instagram-settings-oauth-callback.test.ts:36:21 | marketplace | NOT_RELEVANT | Provider Settings/OAuth naming or Brand integration/commerce vocabulary; not C03 Marketplace discovery or Apply eligibility. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Preserve unrelated provider/Brand/Settings contract; no global search-and-replace. |
| OCC-00316 / src/features/settings/components/creator/creator-instagram-settings-oauth-callback.test.ts:43:27 | marketplace | NOT_RELEVANT | Provider Settings/OAuth naming or Brand integration/commerce vocabulary; not C03 Marketplace discovery or Apply eligibility. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Preserve unrelated provider/Brand/Settings contract; no global search-and-replace. |
| OCC-00317 / src/features/settings/components/creator/creator-instagram-settings-oauth-callback.test.ts:62:15 | marketplace | NOT_RELEVANT | Provider Settings/OAuth naming or Brand integration/commerce vocabulary; not C03 Marketplace discovery or Apply eligibility. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Preserve unrelated provider/Brand/Settings contract; no global search-and-replace. |
| OCC-00318 / src/features/settings/components/creator/creator-instagram-settings.architecture.test.ts:31:47 | Marketplace | NOT_RELEVANT | Provider Settings/OAuth naming or Brand integration/commerce vocabulary; not C03 Marketplace discovery or Apply eligibility. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Preserve unrelated provider/Brand/Settings contract; no global search-and-replace. |
| OCC-00319 / src/features/settings/components/creator/creator-instagram-settings.architecture.test.ts:38:41 | MARKETPLACE | NOT_RELEVANT | Provider Settings/OAuth naming or Brand integration/commerce vocabulary; not C03 Marketplace discovery or Apply eligibility. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Preserve unrelated provider/Brand/Settings contract; no global search-and-replace. |
| OCC-00320 / src/features/settings/components/creator/creator-instagram-settings.test.ts:70:70 | Marketplace | NOT_RELEVANT | Provider Settings/OAuth naming or Brand integration/commerce vocabulary; not C03 Marketplace discovery or Apply eligibility. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Preserve unrelated provider/Brand/Settings contract; no global search-and-replace. |
| OCC-00321 / src/features/settings/components/creator/creator-instagram-settings.test.ts:76:8 | Marketplace | NOT_RELEVANT | Provider Settings/OAuth naming or Brand integration/commerce vocabulary; not C03 Marketplace discovery or Apply eligibility. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Preserve unrelated provider/Brand/Settings contract; no global search-and-replace. |
| OCC-00322 / src/features/settings/contracts/instagram-integrations.contracts.ts:100:5 | creatorMarketplace | NOT_RELEVANT | Provider Settings/OAuth naming or Brand integration/commerce vocabulary; not C03 Marketplace discovery or Apply eligibility. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Preserve unrelated provider/Brand/Settings contract; no global search-and-replace. |
| OCC-00323 / src/features/settings/contracts/instagram-integrations.contracts.ts:217:6 | creatorMarketplace | NOT_RELEVANT | Provider Settings/OAuth naming or Brand integration/commerce vocabulary; not C03 Marketplace discovery or Apply eligibility. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Preserve unrelated provider/Brand/Settings contract; no global search-and-replace. |
| OCC-00324 / src/features/uce/components/CampaignHeroEditDrawer.tsx:18:54 | inventory_count | NOT_RELEVANT | Brand-owned Campaign configuration/adapter occurrence; not Creator Apply authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Preserve owner contract; never consume this field as C03 stock/eligibility authority. |
| OCC-00325 / src/features/uce/components/CampaignHeroEditDrawer.tsx:44:71 | inventory_count | NOT_RELEVANT | Brand-owned Campaign configuration/adapter occurrence; not Creator Apply authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Preserve owner contract; never consume this field as C03 stock/eligibility authority. |
| OCC-00326 / src/features/uce/components/CampaignHeroEditDrawer.tsx:64:59 | inventory_count | NOT_RELEVANT | Brand-owned Campaign configuration/adapter occurrence; not Creator Apply authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Preserve owner contract; never consume this field as C03 stock/eligibility authority. |
| OCC-00327 / src/features/uce/components/CampaignHeroEditDrawer.tsx:74:9 | inventory_count | NOT_RELEVANT | Brand-owned Campaign configuration/adapter occurrence; not Creator Apply authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Preserve owner contract; never consume this field as C03 stock/eligibility authority. |
| OCC-00328 / src/features/uce/components/campaign-strategy/CampaignStrategyStep.tsx:34:133 | marketplace | NOT_RELEVANT | Brand-owned Campaign configuration/adapter occurrence; not Creator Apply authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Preserve owner contract; never consume this field as C03 stock/eligibility authority. |
| OCC-00329 / src/features/uce/contracts/brand-uce.contracts.ts:51:3 | inventory_count | NOT_RELEVANT | Brand-owned Campaign configuration/adapter occurrence; not Creator Apply authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Preserve owner contract; never consume this field as C03 stock/eligibility authority. |
| OCC-00330 / src/features/uce/contracts/brand-uce.contracts.ts:52:3 | out_of_stock | NOT_RELEVANT | Brand-owned Campaign configuration/adapter occurrence; not Creator Apply authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Preserve owner contract; never consume this field as C03 stock/eligibility authority. |
| OCC-00331 / src/features/uce/contracts/brand-uce.contracts.ts:138:3 | inventory_count | NOT_RELEVANT | Brand-owned Campaign configuration/adapter occurrence; not Creator Apply authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Preserve owner contract; never consume this field as C03 stock/eligibility authority. |
| OCC-00332 / src/features/uce/contracts/brand-uce.contracts.ts:139:3 | out_of_stock | NOT_RELEVANT | Brand-owned Campaign configuration/adapter occurrence; not Creator Apply authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Preserve owner contract; never consume this field as C03 stock/eligibility authority. |
| OCC-00333 / src/features/uce/contracts/brand-uce.contracts.ts:201:5 | inventory_count | NOT_RELEVANT | Brand-owned Campaign configuration/adapter occurrence; not Creator Apply authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Preserve owner contract; never consume this field as C03 stock/eligibility authority. |
| OCC-00334 / src/features/uce/contracts/brand-uce.contracts.ts:206:3 | inventory_count | NOT_RELEVANT | Brand-owned Campaign configuration/adapter occurrence; not Creator Apply authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Preserve owner contract; never consume this field as C03 stock/eligibility authority. |
| OCC-00335 / src/features/uce/mappers/map-shell-to-repository.ts:15:23 | inventory_count | NOT_RELEVANT | Brand-owned Campaign configuration/adapter occurrence; not Creator Apply authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Preserve owner contract; never consume this field as C03 stock/eligibility authority. |
| OCC-00336 / src/features/uce/mappers/map-shell-to-repository.ts:16:19 | out_of_stock | NOT_RELEVANT | Brand-owned Campaign configuration/adapter occurrence; not Creator Apply authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Preserve owner contract; never consume this field as C03 stock/eligibility authority. |
| OCC-00337 / src/layouts/app-shell/bottom-nav-items.test.ts:26:60 | Marketplace | REUSE | Current shell regression evidence keeps Marketplace out of Creator navigation. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Retain no-Marketplace navigation assertion while extending canonical route coverage. |
| OCC-00338 / src/layouts/app-shell/creator-shell-capabilities.test.ts:52:56 | Marketplace | REUSE | Current shell regression evidence keeps Marketplace out of Creator navigation. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Retain no-Marketplace navigation assertion while extending canonical route coverage. |
| OCC-00339 / src/layouts/app-shell/creator-shell-capabilities.test.ts:66:35 | Marketplace | REUSE | Current shell regression evidence keeps Marketplace out of Creator navigation. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Retain no-Marketplace navigation assertion while extending canonical route coverage. |
| OCC-00340 / src/layouts/app-shell/creator-shell-rendering.test.ts:36:76 | Marketplace | REUSE | Current shell regression evidence keeps Marketplace out of Creator navigation. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Retain no-Marketplace navigation assertion while extending canonical route coverage. |
| OCC-00341 / src/layouts/app-shell/creator-shell-rendering.test.ts:56:33 | Marketplace | REUSE | Current shell regression evidence keeps Marketplace out of Creator navigation. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Retain no-Marketplace navigation assertion while extending canonical route coverage. |
| OCC-00342 / src/layouts/app-shell/creator-shell-rendering.test.ts:70:42 | marketplace | REUSE | Current shell regression evidence keeps Marketplace out of Creator navigation. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Retain no-Marketplace navigation assertion while extending canonical route coverage. |
| OCC-00343 / src/layouts/app-shell/creator-shell-rendering.test.ts:88:42 | marketplace | REUSE | Current shell regression evidence keeps Marketplace out of Creator navigation. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Retain no-Marketplace navigation assertion while extending canonical route coverage. |
| OCC-00344 / src/layouts/marketplace-guest/MarketplaceGuestLayout.tsx:6:11 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00345 / src/layouts/marketplace-guest/MarketplaceGuestLayout.tsx:8:17 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00346 / src/layouts/marketplace-guest/MarketplaceGuestLayout.tsx:15:20 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00347 / src/layouts/marketplace-guest/MarketplaceGuestLayout.tsx:16:19 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00348 / src/pages/creator/marketplace/creator-campaign-detail-page.tsx:11:41 | invite_token | REMOVE_IN_P4 | Raw invitation credential in legacy DTO/query/path or propagation violates secure C03 exchange. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove production raw credential propagation; replace positive legacy tests with fragment cleanup + one POST + opaque cookie behavior; retain negative security assertions. |
| OCC-00349 / src/pages/creator/marketplace/creator-campaign-detail-page.tsx:19:38 | creatorMarketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00350 / src/pages/creator/marketplace/creator-marketplace-page.tsx:7:10 | MarketplaceDiscovery | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00351 / src/pages/creator/marketplace/creator-marketplace-page.tsx:7:86 | MarketplaceDiscovery | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00352 / src/pages/creator/marketplace/creator-marketplace-page.tsx:11:9 | MARKETPLACE | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00353 / src/pages/creator/marketplace/creator-marketplace-page.tsx:13:3 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00354 / src/pages/creator/marketplace/creator-marketplace-page.tsx:15:8 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00355 / src/pages/creator/marketplace/creator-marketplace-page.tsx:17:56 | MarketplaceFilterDrawer | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00356 / src/pages/creator/marketplace/creator-marketplace-page.tsx:19:13 | CreatorMarketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00357 / src/pages/creator/marketplace/creator-marketplace-page.tsx:19:94 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00358 / src/pages/creator/marketplace/creator-marketplace-page.tsx:25:17 | CreatorMarketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00359 / src/pages/creator/marketplace/creator-marketplace-page.tsx:39:14 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00360 / src/pages/creator/marketplace/creator-marketplace-page.tsx:39:45 | MARKETPLACE | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00361 / src/pages/creator/marketplace/creator-marketplace-page.tsx:53:10 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00362 / src/pages/creator/marketplace/creator-marketplace-page.tsx:63:56 | CreatorMarketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00363 / src/pages/creator/marketplace/creator-marketplace-page.tsx:97:6 | MarketplaceDiscovery | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00364 / src/pages/creator/marketplace/creator-marketplace-page.tsx:133:34 | MARKETPLACE | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00365 / src/pages/creator/onboarding/creator-instagram-oauth-callback-page.test.ts:29:27 | marketplace | NOT_RELEVANT | Provider Settings/OAuth naming or Brand integration/commerce vocabulary; not C03 Marketplace discovery or Apply eligibility. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Preserve unrelated provider/Brand/Settings contract; no global search-and-replace. |
| OCC-00366 / src/pages/creator/onboarding/creator-instagram-oauth-callback-page.test.ts:54:17 | marketplace | NOT_RELEVANT | Provider Settings/OAuth naming or Brand integration/commerce vocabulary; not C03 Marketplace discovery or Apply eligibility. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Preserve unrelated provider/Brand/Settings contract; no global search-and-replace. |
| OCC-00367 / src/pages/creator/onboarding/creator-instagram-oauth-callback-page.test.ts:74:17 | marketplace | NOT_RELEVANT | Provider Settings/OAuth naming or Brand integration/commerce vocabulary; not C03 Marketplace discovery or Apply eligibility. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Preserve unrelated provider/Brand/Settings contract; no global search-and-replace. |
| OCC-00368 / src/pages/creator/onboarding/creator-instagram-oauth-callback-page.test.ts:92:17 | marketplace | NOT_RELEVANT | Provider Settings/OAuth naming or Brand integration/commerce vocabulary; not C03 Marketplace discovery or Apply eligibility. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Preserve unrelated provider/Brand/Settings contract; no global search-and-replace. |
| OCC-00369 / src/pages/public/brand/public-brand-landing-page.tsx:37:40 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00370 / src/pages/public/marketplace/public-campaign-detail-page.tsx:11:41 | invite_token | REMOVE_IN_P4 | Raw invitation credential in legacy DTO/query/path or propagation violates secure C03 exchange. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove production raw credential propagation; replace positive legacy tests with fragment cleanup + one POST + opaque cookie behavior; retain negative security assertions. |
| OCC-00371 / src/pages/public/marketplace/public-campaign-detail-page.tsx:19:40 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00372 / src/pages/public/marketplace/public-invite-landing-page.test.ts:12:89 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00373 / src/pages/public/marketplace/public-invite-landing-page.test.ts:16:51 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00374 / src/pages/public/marketplace/public-invite-landing-page.test.ts:33:28 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00375 / src/pages/public/marketplace/public-invite-landing-page.test.ts:38:19 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00376 / src/pages/public/marketplace/public-invite-landing-page.test.ts:42:19 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00377 / src/pages/public/marketplace/public-invite-landing-page.test.ts:56:7 | invitation_token | REUSE_WITH_RECONCILIATION | Raw invitation credential in legacy DTO/query/path or propagation violates secure C03 exchange. Test occurrence records legacy behavior, not independent permission. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Rewrite legacy-positive expectation for frozen behavior; retain or add relevant negative guard coverage only in authorized P4. |
| OCC-00378 / src/pages/public/marketplace/public-invite-landing-page.test.ts:60:7 | application_scope | REUSE_WITH_RECONCILIATION | Legacy scope is not strict canonical Asset/Brief selection. Test occurrence records legacy behavior, not independent permission. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Rewrite legacy-positive expectation for frozen behavior; retain or add relevant negative guard coverage only in authorized P4. |
| OCC-00379 / src/pages/public/marketplace/public-invite-landing-page.test.ts:68:24 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00380 / src/pages/public/marketplace/public-invite-landing-page.test.ts:68:73 | invite_token | REUSE_WITH_RECONCILIATION | Raw invitation credential in legacy DTO/query/path or propagation violates secure C03 exchange. Test occurrence records legacy behavior, not independent permission. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Rewrite legacy-positive expectation for frozen behavior; retain or add relevant negative guard coverage only in authorized P4. |
| OCC-00381 / src/pages/public/marketplace/public-invite-landing-page.test.ts:73:21 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00382 / src/pages/public/marketplace/public-invite-landing-page.test.ts:75:7 | invitation_token | REUSE_WITH_RECONCILIATION | Raw invitation credential in legacy DTO/query/path or propagation violates secure C03 exchange. Test occurrence records legacy behavior, not independent permission. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Rewrite legacy-positive expectation for frozen behavior; retain or add relevant negative guard coverage only in authorized P4. |
| OCC-00383 / src/pages/public/marketplace/public-invite-landing-page.test.ts:79:7 | application_scope | REUSE_WITH_RECONCILIATION | Legacy scope is not strict canonical Asset/Brief selection. Test occurrence records legacy behavior, not independent permission. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Rewrite legacy-positive expectation for frozen behavior; retain or add relevant negative guard coverage only in authorized P4. |
| OCC-00384 / src/pages/public/marketplace/public-invite-landing-page.test.ts:85:51 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00385 / src/pages/public/marketplace/public-invite-landing-page.tsx:6:89 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00386 / src/pages/public/marketplace/public-invite-landing-page.tsx:27:30 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00387 / src/pages/public/marketplace/public-invite-landing-page.tsx:27:87 | invite_token | REMOVE_IN_P4 | Raw invitation credential in legacy DTO/query/path or propagation violates secure C03 exchange. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Remove production raw credential propagation; replace positive legacy tests with fragment cleanup + one POST + opaque cookie behavior; retain negative security assertions. |
| OCC-00388 / src/pages/public/marketplace/public-invite-landing-page.tsx:28:27 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00389 / src/pages/public/marketplace/public-marketplace-page.tsx:7:10 | MarketplaceDiscovery | REMOVE_IN_P4 | Public Campaign enumeration is prohibited in C03. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Retire browsing/fetch path; compatibility entry is neutral, not a public collection. |
| OCC-00390 / src/pages/public/marketplace/public-marketplace-page.tsx:7:86 | MarketplaceDiscovery | REMOVE_IN_P4 | Public Campaign enumeration is prohibited in C03. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Retire browsing/fetch path; compatibility entry is neutral, not a public collection. |
| OCC-00391 / src/pages/public/marketplace/public-marketplace-page.tsx:11:9 | MARKETPLACE | REMOVE_IN_P4 | Public Campaign enumeration is prohibited in C03. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Retire browsing/fetch path; compatibility entry is neutral, not a public collection. |
| OCC-00392 / src/pages/public/marketplace/public-marketplace-page.tsx:13:3 | marketplace | REMOVE_IN_P4 | Public Campaign enumeration is prohibited in C03. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Retire browsing/fetch path; compatibility entry is neutral, not a public collection. |
| OCC-00393 / src/pages/public/marketplace/public-marketplace-page.tsx:15:8 | Marketplace | REMOVE_IN_P4 | Public Campaign enumeration is prohibited in C03. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Retire browsing/fetch path; compatibility entry is neutral, not a public collection. |
| OCC-00394 / src/pages/public/marketplace/public-marketplace-page.tsx:17:56 | MarketplaceFilterDrawer | REMOVE_IN_P4 | Public Campaign enumeration is prohibited in C03. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Retire browsing/fetch path; compatibility entry is neutral, not a public collection. |
| OCC-00395 / src/pages/public/marketplace/public-marketplace-page.tsx:19:13 | CreatorMarketplace | REMOVE_IN_P4 | Public Campaign enumeration is prohibited in C03. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Retire browsing/fetch path; compatibility entry is neutral, not a public collection. |
| OCC-00396 / src/pages/public/marketplace/public-marketplace-page.tsx:19:94 | marketplace | REMOVE_IN_P4 | Public Campaign enumeration is prohibited in C03. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Retire browsing/fetch path; compatibility entry is neutral, not a public collection. |
| OCC-00397 / src/pages/public/marketplace/public-marketplace-page.tsx:25:17 | PublicMarketplace | REMOVE_IN_P4 | Public Campaign enumeration is prohibited in C03. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Retire browsing/fetch path; compatibility entry is neutral, not a public collection. |
| OCC-00398 / src/pages/public/marketplace/public-marketplace-page.tsx:37:14 | Marketplace | REMOVE_IN_P4 | Public Campaign enumeration is prohibited in C03. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Retire browsing/fetch path; compatibility entry is neutral, not a public collection. |
| OCC-00399 / src/pages/public/marketplace/public-marketplace-page.tsx:37:45 | MARKETPLACE | REMOVE_IN_P4 | Public Campaign enumeration is prohibited in C03. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Retire browsing/fetch path; compatibility entry is neutral, not a public collection. |
| OCC-00400 / src/pages/public/marketplace/public-marketplace-page.tsx:49:10 | marketplace | REMOVE_IN_P4 | Public Campaign enumeration is prohibited in C03. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Retire browsing/fetch path; compatibility entry is neutral, not a public collection. |
| OCC-00401 / src/pages/public/marketplace/public-marketplace-page.tsx:59:56 | CreatorMarketplace | REMOVE_IN_P4 | Public Campaign enumeration is prohibited in C03. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Retire browsing/fetch path; compatibility entry is neutral, not a public collection. |
| OCC-00402 / src/pages/public/marketplace/public-marketplace-page.tsx:93:6 | MarketplaceDiscovery | REMOVE_IN_P4 | Public Campaign enumeration is prohibited in C03. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Retire browsing/fetch path; compatibility entry is neutral, not a public collection. |
| OCC-00403 / src/pages/public/marketplace/public-marketplace-page.tsx:129:34 | MARKETPLACE | REMOVE_IN_P4 | Public Campaign enumeration is prohibited in C03. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Retire browsing/fetch path; compatibility entry is neutral, not a public collection. |
| OCC-00404 / src/routes/app-routes.tsx:31:61 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00405 / src/routes/app-routes.tsx:32:10 | CreatorMarketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00406 / src/routes/app-routes.tsx:32:58 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00407 / src/routes/app-routes.tsx:32:78 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00408 / src/routes/app-routes.tsx:39:59 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00409 / src/routes/app-routes.tsx:40:58 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00410 / src/routes/app-routes.tsx:41:10 | PublicMarketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00411 / src/routes/app-routes.tsx:41:56 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00412 / src/routes/app-routes.tsx:41:75 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00413 / src/routes/app-routes.tsx:43:10 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00414 / src/routes/app-routes.tsx:43:52 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00415 / src/routes/app-routes.tsx:43:70 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00416 / src/routes/app-routes.tsx:50:10 | RequireCreatorPlatformAccess | REUSE_WITH_RECONCILIATION | C01 platform-entry guard is valid elsewhere but blocks C03 historical/recovery access when used route-wide. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Keep guard implementation for C01; remove enclosing guard from canonical C03 history/notification and approved C04 entry routes. |
| OCC-00417 / src/routes/app-routes.tsx:72:24 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00418 / src/routes/app-routes.tsx:78:31 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00419 / src/routes/app-routes.tsx:79:21 | PublicMarketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00420 / src/routes/app-routes.tsx:82:31 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00421 / src/routes/app-routes.tsx:86:31 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00422 / src/routes/app-routes.tsx:193:26 | RequireCreatorPlatformAccess | REUSE_WITH_RECONCILIATION | C01 platform-entry guard is valid elsewhere but blocks C03 historical/recovery access when used route-wide. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Keep guard implementation for C01; remove enclosing guard from canonical C03 history/notification and approved C04 entry routes. |
| OCC-00423 / src/routes/app-routes.tsx:217:31 | creatorMarketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00424 / src/routes/app-routes.tsx:218:23 | CreatorMarketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00425 / src/routes/app-routes.tsx:221:31 | creatorMarketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00426 / src/routes/c05-frontend-convergence.architecture.test.ts:57:13 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00427 / src/routes/c05-frontend-convergence.architecture.test.ts:73:44 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00428 / src/routes/c05-frontend-convergence.architecture.test.ts:74:43 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00429 / src/routes/c05-frontend-convergence.architecture.test.ts:75:38 | Marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00430 / src/routes/c05-frontend-convergence.architecture.test.ts:76:39 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00431 / src/routes/c05-frontend-convergence.architecture.test.ts:77:43 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00432 / src/routes/unmatched-route-handler.tsx:19:15 | creatorMarketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00433 / src/routes/unmatched-route-handler.tsx:25:17 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00434 / src/routes/unmatched-route-handler.tsx:41:17 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00435 / src/shared/navigation/safe-internal-path.test.ts:11:15 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00436 / src/shared/navigation/safe-internal-path.test.ts:12:15 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00437 / src/shared/navigation/safe-internal-path.test.ts:18:7 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00438 / src/shared/navigation/safe-internal-path.test.ts:19:7 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00439 / src/shared/navigation/safe-internal-path.test.ts:20:7 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00440 / src/shared/navigation/safe-internal-path.ts:17:25 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00441 / src/shared/navigation/safe-internal-path.ts:21:15 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00442 / src/shared/navigation/safe-internal-path.ts:23:7 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00443 / src/shared/navigation/safe-internal-path.ts:24:17 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00444 / src/shared/navigation/safe-internal-path.ts:25:17 | marketplace | REUSE_WITH_RECONCILIATION | Legacy C03 names/links/DTO references are not frozen Product authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: Reconcile this occurrence with canonical C03 routes/projections; preserve useful composition. |
| OCC-00445 / src/temp/aurora-playground/AuroraPlayground.tsx:16:13 | Marketplace | LEGACY_REFERENCE_ONLY | Temporary playground/reference, not production C03 authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: No promotion to canonical C03 semantics; keep mock-only. |
| OCC-00446 / src/temp/aurora-playground/AuroraPlayground.tsx:16:43 | marketplace | LEGACY_REFERENCE_ONLY | Temporary playground/reference, not production C03 authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: No promotion to canonical C03 semantics; keep mock-only. |
| OCC-00447 / src/temp/aurora-playground/AuroraPlayground.tsx:23:34 | Marketplace | LEGACY_REFERENCE_ONLY | Temporary playground/reference, not production C03 authority. Authority: dummy_tcs@706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb:docs/organization/architecture/c03/c03_backend_api_state_contract_v1.md §§2–8; Stage B Campaigns IA Action: No promotion to canonical C03 semantics; keep mock-only. |

## C03_STALE_OCCURRENCE_FILE_COUNTS_V1

Full machine-readable copies: [CSV](p2-preflight/C03_STALE_OCCURRENCE_FILE_COUNTS_V1.csv) · [JSON](p2-preflight/C03_STALE_OCCURRENCE_FILE_COUNTS_V1.json)

| File | Occurrences |
|---|---:|
| docs/ai-collaboration/2026-06-24-creator-campaigns-stitch-intake.md | 9 |
| docs/ai-collaboration/c01-i6-creator-entry-frontend-reconciliation-execution-ledger.yaml | 2 |
| docs/ai-collaboration/c01-i6-creator-entry-state-family-register.md | 3 |
| docs/ai-collaboration/c01-i7-frontend-runtime-acceptance-ledger.yaml | 4 |
| docs/brand-onboarding/LANDING_STEP1_UI_TESTING.md | 1 |
| docs/gatekeeper/frontend-reconciliation-runtime-gate.md | 1 |
| src/features/auth/components/sign-in-card.test.ts | 5 |
| src/features/auth/constants.ts | 11 |
| src/features/auth/post-login-redirect.test.ts | 7 |
| src/features/auth/post-login-redirect.ts | 7 |
| src/features/brand-onboarding/components/social-sync-view.test.ts | 1 |
| src/features/brand-onboarding/contracts/discovery.contracts.ts | 1 |
| src/features/brand-onboarding/schemas/url-schema.test.ts | 1 |
| src/features/brand-onboarding/schemas/url-schema.ts | 5 |
| src/features/creator-campaigns/api/creator-campaigns-client.ts | 29 |
| src/features/creator-campaigns/api/public-marketplace-client.ts | 13 |
| src/features/creator-campaigns/components/CampaignApplicationWizard.tsx | 8 |
| src/features/creator-campaigns/components/CampaignDetailWorkspace.tsx | 29 |
| src/features/creator-campaigns/components/CommandCenterWorkspace.tsx | 5 |
| src/features/creator-campaigns/components/CrossSellTray.tsx | 8 |
| src/features/creator-campaigns/components/MarketplaceDiscovery.tsx | 25 |
| src/features/creator-campaigns/components/MarketplaceFilterDrawer.tsx | 15 |
| src/features/creator-campaigns/components/campaign-detail-continuation.test.ts | 13 |
| src/features/creator-campaigns/contracts/creator-campaigns.contracts.ts | 41 |
| src/features/creator-campaigns/creator-campaigns.css | 6 |
| src/features/creator-campaigns/hooks/use-creator-campaign-detail.ts | 7 |
| src/features/creator-campaigns/hooks/use-creator-marketplace.ts | 14 |
| src/features/creator-campaigns/utils/format-campaign-display.ts | 2 |
| src/features/creator-onboarding/api/creator-entry-client.ts | 1 |
| src/features/creator-onboarding/components/creator-entry-view.test.ts | 5 |
| src/features/creator-onboarding/components/creator-entry-view.tsx | 4 |
| src/features/creator-onboarding/components/creator-platform-route-guard.test.ts | 2 |
| src/features/creator-onboarding/components/creator-platform-route-guard.tsx | 1 |
| src/features/creator-onboarding/constants.ts | 1 |
| src/features/creator-onboarding/creator-entry-architecture.test.ts | 1 |
| src/features/creator-onboarding/creator-settings-guard-scope.test.ts | 7 |
| src/features/creator-uce/components/CreatorCampaignsPanel.tsx | 2 |
| src/features/creator-uce/contracts/creator-uce.contracts.ts | 3 |
| src/features/public-brand/components/PublicBrandLandingWorkspace.tsx | 2 |
| src/features/public-brand/contracts/public-brand.contracts.ts | 1 |
| src/features/public-brand/utils/brand-page-session.ts | 3 |
| src/features/settings/api/instagram-integrations-client.test.ts | 1 |
| src/features/settings/components/brand/brand-integrations-settings.test.ts | 4 |
| src/features/settings/components/brand/brand-integrations-settings.tsx | 2 |
| src/features/settings/components/creator-settings-shell.test.ts | 1 |
| src/features/settings/components/creator/creator-instagram-settings-oauth-callback.test.ts | 3 |
| src/features/settings/components/creator/creator-instagram-settings.architecture.test.ts | 2 |
| src/features/settings/components/creator/creator-instagram-settings.test.ts | 2 |
| src/features/settings/contracts/instagram-integrations.contracts.ts | 2 |
| src/features/uce/components/CampaignHeroEditDrawer.tsx | 4 |
| src/features/uce/components/campaign-strategy/CampaignStrategyStep.tsx | 1 |
| src/features/uce/contracts/brand-uce.contracts.ts | 6 |
| src/features/uce/mappers/map-shell-to-repository.ts | 2 |
| src/layouts/app-shell/bottom-nav-items.test.ts | 1 |
| src/layouts/app-shell/creator-shell-capabilities.test.ts | 2 |
| src/layouts/app-shell/creator-shell-rendering.test.ts | 4 |
| src/layouts/marketplace-guest/MarketplaceGuestLayout.tsx | 4 |
| src/pages/creator/marketplace/creator-campaign-detail-page.tsx | 2 |
| src/pages/creator/marketplace/creator-marketplace-page.tsx | 15 |
| src/pages/creator/onboarding/creator-instagram-oauth-callback-page.test.ts | 4 |
| src/pages/public/brand/public-brand-landing-page.tsx | 1 |
| src/pages/public/marketplace/public-campaign-detail-page.tsx | 2 |
| src/pages/public/marketplace/public-invite-landing-page.test.ts | 13 |
| src/pages/public/marketplace/public-invite-landing-page.tsx | 4 |
| src/pages/public/marketplace/public-marketplace-page.tsx | 15 |
| src/routes/app-routes.tsx | 22 |
| src/routes/c05-frontend-convergence.architecture.test.ts | 6 |
| src/routes/unmatched-route-handler.tsx | 3 |
| src/shared/navigation/safe-internal-path.test.ts | 5 |
| src/shared/navigation/safe-internal-path.ts | 5 |
| src/temp/aurora-playground/AuroraPlayground.tsx | 3 |

## C03_FRONTEND_SEMANTIC_PROOF_V1

Full machine-readable copies: [CSV](p2-preflight/C03_FRONTEND_SEMANTIC_PROOF_V1.csv) · [JSON](p2-preflight/C03_FRONTEND_SEMANTIC_PROOF_V1.json)

### Marketplace/global enumeration

| Field | Value |
|---|---|
| HAZARD | Marketplace/global enumeration |
| FROZEN_INVARIANT | No Creator Marketplace destination; current Opportunities only returned AUTHORIZED candidates; public direct Campaign entry only. |
| STATE_FAMILIES | OC_*; PUBLIC_* |
| P4_RECONCILIATION | Legacy discovery APIs, filter drawer and public browsing removed from reachable C03. |
| P2_SEMANTIC_GATE | PASS_AS_PROPOSED_CONTRACT; CURRENT_RUNTIME_NOT_ACCEPTED |

### Matching/ranking

| Field | Value |
|---|---|
| HAZARD | Matching/ranking |
| FROZEN_INVARIANT | Backend collection ID order and opaque cursor; no score or arbitrary sorting. |
| STATE_FAMILIES | OC_READY; OC_PAGINATION |
| P4_RECONCILIATION | Remove match_score_percent and matching filters; preserve card grid. |
| P2_SEMANTIC_GATE | PASS_AS_PROPOSED_CONTRACT; CURRENT_RUNTIME_NOT_ACCEPTED |

### Disclosure

| Field | Value |
|---|---|
| HAZARD | Disclosure |
| FROZEN_INVARIANT | TEASER only safe id/name/platforms; LOCKED only reason/recovery; AUTHORIZED contains detailed commercial and Brief. |
| STATE_FAMILIES | PUBLIC_*; ENT_*; DOS_* |
| P4_RECONCILIATION | Model discriminant; do not prefetch/hydrate hidden commercial/Brief DOM; discard protected cache on identity/entitlement change. Existing blur is a placeholder, not evidence of safety for the legacy full DTO. |
| P2_SEMANTIC_GATE | PASS_AS_PROPOSED_CONTRACT; CURRENT_RUNTIME_NOT_ACCEPTED |

### Credentials

| Field | Value |
|---|---|
| HAZARD | Credentials |
| FROZEN_INVARIANT | Fragment -> cleanup -> one secure POST -> opaque C01 cookie -> safe internal return; no raw query/path/storage/analytics. |
| STATE_FAMILIES | PUBLIC_CONTINUATION_* |
| P4_RECONCILIATION | Read transient fragment and history.replaceState synchronously before analytics/media/external fetch; suppress logging, no navigation-state/sessionStorage/localStorage credential persistence. Lost credential after failed/uncertain exchange may require fresh link; no new token store. |
| P2_SEMANTIC_GATE | PASS_AS_PROPOSED_CONTRACT; CURRENT_RUNTIME_NOT_ACCEPTED |

### Apply inputs

| Field | Value |
|---|---|
| HAZARD | Apply inputs |
| FROZEN_INVARIANT | Strict campaignAssetId/briefId; no generic pitch, proposed amount, shipping/contact questionnaire or legal/escrow checkbox. |
| STATE_FAMILIES | SEL_*; APPLY_* |
| P4_RECONCILIATION | Reconcile Wizard; no first-stocked-product or independent Brief default. |
| P2_SEMANTIC_GATE | PASS_AS_PROPOSED_CONTRACT; CURRENT_RUNTIME_NOT_ACCEPTED |

### Stock and canonical selection

| Field | Value |
|---|---|
| HAZARD | Stock and canonical selection |
| FROZEN_INVARIANT | ACTIVE Asset + backend AVAILABLE Brief selection; BRAND-only valid. |
| STATE_FAMILIES | SEL_* |
| P4_RECONCILIATION | No inventory_count/out_of_stock/quota-as-stock condition. |
| P2_SEMANTIC_GATE | PASS_AS_PROPOSED_CONTRACT; CURRENT_RUNTIME_NOT_ACCEPTED |

### Commercials

| Field | Value |
|---|---|
| HAZARD | Commercials |
| FROZEN_INVARIANT | Read exact fixed/negotiable Brand offer in currency; authored zero real; null/unavailable never zero. |
| STATE_FAMILIES | DOS_COMMERCIAL_*; APPLY_REVIEW |
| P4_RECONCILIATION | No Creator proposed amount; support shown independently, optional estimate honest. Negotiation only later in C04. |
| P2_SEMANTIC_GATE | PASS_AS_PROPOSED_CONTRACT; CURRENT_RUNTIME_NOT_ACCEPTED |

### Independent history

| Field | Value |
|---|---|
| HAZARD | Independent history |
| FROZEN_INVARIANT | Snapshot per applicationId; PENDING/APPROVED/REJECTED/WITHDRAWN/EXPIRED and bounded SUPERSEDED; multiple sibling approvals. |
| STATE_FAMILIES | HIST_*; HANDOFF_MULTIPLE |
| P4_RECONCILIATION | No already_applied, campaign-wide dedup or supersession. Old closed Collaboration rows are not Applications. |
| P2_SEMANTIC_GATE | PASS_AS_PROPOSED_CONTRACT; CURRENT_RUNTIME_NOT_ACCEPTED |

### Role

| Field | Value |
|---|---|
| HAZARD | Role |
| FROZEN_INVARIANT | All current three roles view/apply; only backend-authorized Owner/Manager pending Withdraw. |
| STATE_FAMILIES | ROLE_*; WITHDRAW_* |
| P4_RECONCILIATION | Extend known C03 actor actions; preserve current identity resolution; Assistant has no Settings CTA or Withdraw. |
| P2_SEMANTIC_GATE | PASS_AS_PROPOSED_CONTRACT; CURRENT_RUNTIME_NOT_ACCEPTED |

### Historical Instagram independence

| Field | Value |
|---|---|
| HAZARD | Historical Instagram independence |
| FROZEN_INVARIANT | History, detail, notifications and approved C04 links do not require current usable IG. |
| STATE_FAMILIES | HIST_IG_*; NOTIF_IG_*; HANDOFF_* |
| P4_RECONCILIATION | Move outside RequireCreatorPlatformAccess; preserve RequireAuth/current team/C04 role checks. |
| P2_SEMANTIC_GATE | PASS_AS_PROPOSED_CONTRACT; CURRENT_RUNTIME_NOT_ACCEPTED |

### Idempotency

| Field | Value |
|---|---|
| HAZARD | Idempotency |
| FROZEN_INVARIANT | Canonical Idempotency-Key grammar22–128 URL-safe chars; same command intent/fingerprint preserves key on explicit retry. |
| STATE_FAMILIES | APPLY_REPLAY; WITHDRAW_REPLAY |
| P4_RECONCILIATION | Use crypto-random key in command intent; no raw logging; changed selection requires new explicit Review/key;401 shared retry keeps headers. |
| P2_SEMANTIC_GATE | PASS_AS_PROPOSED_CONTRACT; CURRENT_RUNTIME_NOT_ACCEPTED |

### C04 boundary

| Field | Value |
|---|---|
| HAZARD | C04 boundary |
| FROZEN_INVARIANT | Only exact Collaboration link from immutable accepted record; no execution commands in C03. |
| STATE_FAMILIES | HANDOFF_* |
| P4_RECONCILIATION | Use /creator/collaborations?thread=ID, no negotiation/shipping/content review/payout controls. |
| P2_SEMANTIC_GATE | PASS_AS_PROPOSED_CONTRACT; CURRENT_RUNTIME_NOT_ACCEPTED |

### Notification boundary

| Field | Value |
|---|---|
| HAZARD | Notification boundary |
| FROZEN_INVARIANT | Required recipient in-app history/read/count; no assumed email opt-in or new global notification framework. |
| STATE_FAMILIES | NOTIF_* |
| P4_RECONCILIATION | Current bell+bounded drawer; safe ID payload only; approved/rejected types; no withdrawn/expired notice invented. |
| P2_SEMANTIC_GATE | PASS_AS_PROPOSED_CONTRACT; CURRENT_RUNTIME_NOT_ACCEPTED |

### P5 boundary

| Field | Value |
|---|---|
| HAZARD | P5 boundary |
| FROZEN_INVARIANT | Brief Pack endpoint not in accepted P1. |
| STATE_FAMILIES | BRIEF_PACK_DEFERRED |
| P4_RECONCILIATION | No download endpoint or speculative CTA; rich immutable Brief read remains available. |
| P2_SEMANTIC_GATE | PASS_AS_PROPOSED_CONTRACT; CURRENT_RUNTIME_NOT_ACCEPTED |


## C03_RESPONSIVE_ACCESSIBILITY_CONTRACT_V1

Full machine-readable copies: [CSV](p2-preflight/C03_RESPONSIVE_ACCESSIBILITY_CONTRACT_V1.csv) · [JSON](p2-preflight/C03_RESPONSIVE_ACCESSIBILITY_CONTRACT_V1.json)

### Navigation

| Field | Value |
|---|---|
| SURFACE | Navigation |
| DESKTOP | Retain sidebar/header, Campaigns item active for both subroutes |
| TABLET_INTERMEDIATE | Existing shell menu before content crowding |
| MOBILE_390PX | Four existing bottom destinations; Opportunities/My Applications local route links wrap; no fifth slot |
| MOBILE_375PX | Four existing bottom destinations; Opportunities/My Applications local route links wrap; no fifth slot Confirm no page-level horizontal scroll at375px and text zoom. |
| ACCESSIBILITY | Native links aria-current; safe-area and footer clearance |
| AUTHORITY | Aurora v5 §§3,6,7,8,15,16; frozen StageB; current frontend shell |

### Opportunity header

| Field | Value |
|---|---|
| SURFACE | Opportunity header |
| DESKTOP | Brand identity-scale logo, title/objective and timing in readable order |
| TABLET_INTERMEDIATE | Wrap metadata and action group; avoid cramped columns |
| MOBILE_390PX | Stack title/objective/timing; long names wrap; no title ellipsis as only source of identity |
| MOBILE_375PX | Stack title/objective/timing; long names wrap; no title ellipsis as only source of identity Confirm no page-level horizontal scroll at375px and text zoom. |
| ACCESSIBILITY | h1 then ordered section headings; logo alt appropriate |
| AUTHORITY | Aurora v5 §§3,6,7,8,15,16; frozen StageB; current frontend shell |

### Commercial/support

| Field | Value |
|---|---|
| SURFACE | Commercial/support |
| DESKTOP | Related read-only card near selection, separate offer/currency/support lines |
| TABLET_INTERMEDIATE | Stack cards as needed |
| MOBILE_390PX | Full-width card; exact amount and currency visible, null honest; no proposed input |
| MOBILE_375PX | Full-width card; exact amount and currency visible, null honest; no proposed input Confirm no page-level horizontal scroll at375px and text zoom. |
| ACCESSIBILITY | Non-color availability message; meaningful labels |
| AUTHORITY | Aurora v5 §§3,6,7,8,15,16; frozen StageB; current frontend shell |

### Asset/Brief selection

| Field | Value |
|---|---|
| SURFACE | Asset/Brief selection |
| DESKTOP | Related Asset then associated Brief groups; independent details buttons |
| TABLET_INTERMEDIATE | Two columns only while radio labels and content fit |
| MOBILE_390PX | Single column >=44px choices; no horizontal carousel hiding options |
| MOBILE_375PX | Single column >=44px choices; no horizontal carousel hiding options Confirm no page-level horizontal scroll at375px and text zoom. |
| ACCESSIBILITY | Native radio group legends; arrow-key selection; unavailable reason associated; details link outside radio |
| AUTHORITY | Aurora v5 §§3,6,7,8,15,16; frozen StageB; current frontend shell |

### Drawers

| Field | Value |
|---|---|
| SURFACE | Drawers |
| DESKTOP | Contextual right drawer with bounded readable width |
| TABLET_INTERMEDIATE | Near-full sheet when long content cannot fit |
| MOBILE_390PX | Full/near-full-screen sheet for rich Brief; compact sheet only for short confirmation; no universal70vh |
| MOBILE_375PX | Full/near-full-screen sheet for rich Brief; compact sheet only for short confirmation; no universal70vh Confirm no page-level horizontal scroll at375px and text zoom. |
| ACCESSIBILITY | Named modal; inert background; focus trap/restore; Escape; one scroll; safe areas |
| AUTHORITY | Aurora v5 §§3,6,7,8,15,16; frozen StageB; current frontend shell |

### Review and Submit

| Field | Value |
|---|---|
| SURFACE | Review and Submit |
| DESKTOP | Exact selected pair and key obligations before footer |
| TABLET_INTERMEDIATE | Reflow summary, preserve information |
| MOBILE_390PX | Single column; full-width primary Submit; footer has reserved space and scrollable long body |
| MOBILE_375PX | Single column; full-width primary Submit; footer has reserved space and scrollable long body Confirm no page-level horizontal scroll at375px and text zoom. |
| ACCESSIBILITY | Review focus heading; errors summary associated; busy announced once; no legal checkbox |
| AUTHORITY | Aurora v5 §§3,6,7,8,15,16; frozen StageB; current frontend shell |

### Application history

| Field | Value |
|---|---|
| SURFACE | Application history |
| DESKTOP | Independent rows/cards, status selected pair date and action visible |
| TABLET_INTERMEDIATE | Switch to cards when columns become cramped |
| MOBILE_390PX | Cards per applicationId; status/actions wrap, siblings preserved |
| MOBILE_375PX | Cards per applicationId; status/actions wrap, siblings preserved Confirm no page-level horizontal scroll at375px and text zoom. |
| ACCESSIBILITY | List/table appropriate semantics; text status; no clickable nonsemantic rows |
| AUTHORITY | Aurora v5 §§3,6,7,8,15,16; frozen StageB; current frontend shell |

### Rich Brief content

| Field | Value |
|---|---|
| SURFACE | Rich Brief content |
| DESKTOP | Sectioned guidance, ordered format-specific Deliverables, rights and references |
| TABLET_INTERMEDIATE | Reflow long content rather than shrink |
| MOBILE_390PX | Wrap URLs/long words; preserve all required content, safe external links, deliberate no-image |
| MOBILE_375PX | Wrap URLs/long words; preserve all required content, safe external links, deliberate no-image Confirm no page-level horizontal scroll at375px and text zoom. |
| ACCESSIBILITY | Meaningful link text; headings; ordered deliverable list; no hidden business-critical Review facts |
| AUTHORITY | Aurora v5 §§3,6,7,8,15,16; frozen StageB; current frontend shell |

### Notifications

| Field | Value |
|---|---|
| SURFACE | Notifications |
| DESKTOP | Existing header bell opens bounded recipient list drawer |
| TABLET_INTERMEDIATE | Drawer/sheet adapts to available width |
| MOBILE_390PX | Full-width readable rows in sheet; no count truncation as only label |
| MOBILE_375PX | Full-width readable rows in sheet; no count truncation as only label Confirm no page-level horizontal scroll at375px and text zoom. |
| ACCESSIBILITY | Bell named with unread count when known; aria-expanded; row link and mark-read separate; polite result |
| AUTHORITY | Aurora v5 §§3,6,7,8,15,16; frozen StageB; current frontend shell |

### Loading/errors

| Field | Value |
|---|---|
| SURFACE | Loading/errors |
| DESKTOP | Scoped skeleton/text status, useful inline retry |
| TABLET_INTERMEDIATE | Same semantic state |
| MOBILE_390PX | No overflow or fabricated progress; keep retry accessible |
| MOBILE_375PX | No overflow or fabricated progress; keep retry accessible Confirm no page-level horizontal scroll at375px and text zoom. |
| ACCESSIBILITY | aria-busy; decorative skeleton; live error once; no raw diagnostics |
| AUTHORITY | Aurora v5 §§3,6,7,8,15,16; frozen StageB; current frontend shell |


## C03_P2_REPOSITORY_INTEGRITY_V1

Full machine-readable copies: [CSV](p2-preflight/C03_P2_REPOSITORY_INTEGRITY_V1.csv) · [JSON](p2-preflight/C03_P2_REPOSITORY_INTEGRITY_V1.json)

### Frontend exact detached inspection

| Field | Value |
|---|---|
| REPOSITORY | Frontend exact detached inspection |
| PATH | C:\Users\piyus\Documents\Codex\2026-09-05\files-pasted-by-the-user-c\work\p2-frontend |
| HEAD | 323658d4b147b95b5629ff8d91fa90b8fe9077e4 |
| TREE | 4ff40849c64a98429a89cc8e4f1ff6949815070c |
| STATUS_PORCELAIN |  |
| TRACKED_DIFF_CHECK |  |
| CHECKED_AT_UTC | 2026-09-05T16:47:10.114Z |

### Frontend original clean checkout

| Field | Value |
|---|---|
| REPOSITORY | Frontend original clean checkout |
| PATH | C:/Users/piyus/Documents/Codex/2026-09-01/files-pasted-by-the-user-c/work/creator-commerce-frontend-v2-clone |
| HEAD | 17e44abf68d9e107cdaad6454d1ba9c73c05a680 |
| TREE | 4866fff54717d9edb98549614e88f8c298bfdbff |
| STATUS_PORCELAIN |  |
| TRACKED_DIFF_CHECK |  |
| CHECKED_AT_UTC | 2026-09-05T16:47:10.390Z |

### Backend accepted

| Field | Value |
|---|---|
| REPOSITORY | Backend accepted |
| PATH | C:/Users/piyus/c03/backend-p12 |
| HEAD | 4b51d52de6d9206545b0a38497c7436bc9d3e095 |
| TREE | 0df8adf9a4a45089918dc0f5d3cccd9f4317fede |
| STATUS_PORCELAIN |  |
| TRACKED_DIFF_CHECK |  |
| CHECKED_AT_UTC | 2026-09-05T16:47:10.740Z |

### Recovery authority

| Field | Value |
|---|---|
| REPOSITORY | Recovery authority |
| PATH | C:\Users\piyus\Documents\Codex\2026-09-05\files-pasted-by-the-user-c\work\p14-authority |
| HEAD | 706a1654bdca8a6fe10bc50bd3ea7f89e32da2cb |
| TREE | 3f0e56b372de7ecbee9ca36065dba947f5b8d6fd |
| STATUS_PORCELAIN |  |
| TRACKED_DIFF_CHECK |  |
| CHECKED_AT_UTC | 2026-09-05T16:47:10.964Z |


## Stop boundary

NEXT_AUTHORIZED_BOUNDARY = SA_REVIEW_ONLY. SA may accept or amend the proposed register and NOT_REQUIRED Stitch recommendation. P3, P4 and P5 have not started.

Verification evidence: [Independent coverage check](p2-preflight/independent-verification.json) confirms 135 states, all required state fields, source/reference bindings, complete exact-code mapping, 447 matching occurrences independently counted by rg, exact origin/development SHA/tree, and 79 backend migrations. [Repository integrity](p2-preflight/C03_P2_REPOSITORY_INTEGRITY_V1.json) records empty porcelain status for all four inspected checkouts.
