# C-03 Frontend State Family Register V1

**Artifact:** `C03_FRONTEND_STATE_FAMILY_REGISTER_V1`
**Status:** ACCEPTED_AFTER_P2_ENTRY_PROOFS
**Frontend authority:** `323658d4b147b95b5629ff8d91fa90b8fe9077e4`
**Backend authority:** `4b51d52de6d9206545b0a38497c7436bc9d3e095`

Accepted unchanged from the 135-state P2 register under `C03_P2_ENTRY_PROOF_AND_DURABLE_FRONTEND_CONTRACT_FREEZE_V1`. This documentation freeze does not begin implementation. Every row retains all 16 original fields and its single decision-ladder disposition. Historical source/reference identifiers are resolved by the [execution contract](c03_frontend_execution_contract_v1.md) and full preserved report; they do not override Product or backend authority.

## Complete accepted material states

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
