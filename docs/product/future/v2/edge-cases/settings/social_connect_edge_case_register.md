# Settings — Social Connect Edge-Case Register

**Module:** Brand Settings → Connections → Social & Creator Data  
**Current MVP provider:** Instagram API with Instagram Login  
**Future provider family:** Facebook Login for Business / Instagram API with Facebook Login, TikTok, YouTube and additional connection classes  
**Branch purpose:** edge-case continuity + future/V2 parking; current MVP implementation remains governed by the frozen Product Authority.

## Frozen product direction

### Current MVP surface

Only **Instagram Insights** is shown as an operational connection.

The connect card communicates through very short, icon-led copy:

- your Instagram profile;
- engagement / performance insights;
- fresher Brand Intelligence and Campaign reporting.

It must not claim Business Discovery, competitor monitoring or Creator Marketplace access from Instagram Login.

### Future Meta surface

Instagram Login and Facebook Login for Business are distinct products and remain distinct cards / identities.

```text
Social & Creator Data

Instagram Insights
[Instagram identity + own-account insights]

Facebook Business
[Page-linked Meta business / approved discovery capabilities]
```

They may coexist later. Do not collapse them into one generic `Meta Connected` state.

### Pre-connect experience

`Connect` first opens a compact Creator Shop explainer before redirecting to Instagram.

Keep it deliberately light:

- small icons;
- one-line benefit statements;
- registered Instagram handle prominently shown;
- requested access: Profile + Insights;
- reminder to keep both requested permissions enabled on Instagram.

Do not create a dense permission/legal wall before the provider screen.

### Reconnect

Reconnect uses the same Creator Shop callback / redirect URI contract as Connect. Creator Shop issues a fresh one-time OAuth state and starts a new authorization attempt. Only Instagram's own screen/behavior may differ based on the user's active session and existing grant.

---

## Edge-case register

| ID | Scenario | Status | Frozen handling |
|---|---|---|---|
| SC-IG-001 | Wrong account on first connect | `MVP_RESOLVED` | Do not activate or overwrite Brand identity. Clear staged candidate credentials, return to unconnected state, show expected vs authenticated handle, offer reconnect. |
| SC-IG-002 | Wrong account during reconnect with valid existing connection | `MVP_RESOLVED` | Reject candidate and preserve existing valid connection unchanged. |
| SC-IG-003 | Username changes on same Instagram account | `MVP_RESOLVED` | Bind verified connection to provider stable account ID. Same ID + new username updates canonical/display handle and records identity change. |
| SC-IG-004 | Brand intentionally changes its Instagram account after Brand Preview | `MVP_RESOLVED` | Allow only through a controlled **Settings-only, Brand-Owner initiated `Change Instagram account` flow**. It is not a free-text field. New account must complete OAuth/provider verification before canonical replacement. Same-account username rename remains SC-IG-003. |
| SC-IG-005 | Basic Profile granted, Insights withheld | `MVP_RESOLVED` | `PARTIALLY_CONNECTED`; show `Permission missing / Needs revalidation`; Basic usable, Insights unavailable; CTA becomes `Reconnect`. |
| SC-IG-006 | Permission evidence absent/ambiguous | `MVP_RESOLVED` + `MVP_IMPLEMENTATION_GAP` | Never assume full access. Mark capability `UNKNOWN / NEEDS_REVALIDATION`; require positive evidence. |
| SC-IG-007 | Basic Profile missing | `MVP_RESOLVED` | Connection incomplete; do not make operational; reconnect/revalidation required. |
| SC-IG-008 | Personal Instagram account | `MVP_RESOLVED` | Reject; explain Professional Business/Creator account requirement; allow retry after conversion. |
| SC-IG-009 | User cancels/denies Instagram OAuth | `MVP_RESOLVED` | No new connection; keep pre-existing valid connection; clear callback secrets from browser URL; show retry. |
| SC-IG-010 | OAuth state missing/expired/invalid/replayed | `MVP_RESOLVED` | Reject callback and require fresh Connect/Reconnect. Existing secure one-time state foundation should remain. |
| SC-IG-011 | Token exchange fails after consent | `MVP_RESOLVED` | Fail safely; no partially active connection; require fresh authorization because state is single-use. |
| SC-IG-012 | Concurrent connect/reconnect attempts | `MVP_RESOLVED` | Separate one-time state per attempt; stale callback must not overwrite a later valid connection. |
| SC-IG-013 | Token expires | `MVP_RESOLVED` | Stop new ingestion, retain historical data/analysis, show `Re-authentication required`, offer reconnect. |
| SC-IG-014 | User revokes Creator Shop externally | `MVP_RESOLVED` + `MVP_IMPLEMENTATION_GAP` | Detect primarily from provider deauthorization/revocation callback; API/token failure second; scheduled health validation fallback. Reflect `Disconnected by provider` as soon as detected. |
| SC-IG-015 | User disconnects while Campaign/Collaboration active | `MVP_RESOLVED` | Do **not** block disconnect. Remove credentials, stop future ingestion, retain prior data/AI analysis, keep Campaign/Collaboration lifecycle active; reporting becomes stale/connection-lost. |
| SC-IG-016 | Reporting after disconnect | `MVP_RESOLVED` | Preserve last data + `last_successful_sync_at`; show connection-loss/stale state; do not present historical figures as current. |
| SC-IG-017 | Reporting after reconnect | `MVP_RESOLVED` | Trigger catch-up for provider-recoverable history. Time-window metrics missed during disconnection are marked `DATA_GAP / UNRECOVERABLE_FOR_WINDOW`, not fabricated. |
| SC-IG-018 | API outage/rate limit but authorization valid | `MVP_RESOLVED` | Keep identity connected; use `CONNECTED_SYNC_DEGRADED`, retry/backoff, last-success timestamp. |
| SC-IG-019 | Account unavailable or later becomes Personal | `MVP_RESOLVED` | Stop unsupported ingestion, preserve history, show eligibility/provider action required. |
| SC-IG-020 | Team member who connected Instagram leaves workspace | `MVP_RESOLVED` | Connection belongs to Brand workspace, not initiating Team member. Do not auto-disconnect; retain initiator in activity/audit history. |
| SC-IG-021 | Disconnect while sync job is in flight | `MVP_RESOLVED` | Establish connection-generation/ingestion fence before credential removal; in-flight writer revalidates before persistence. |
| SC-IG-022 | Delete Instagram data while sync job is in flight | `MVP_RESOLVED` | Establish deletion fence first; no worker may recreate deleted provider data after deletion begins. |
| SC-IG-023 | `Delete my Instagram data` | `MVP_RESOLVED` | Small destructive text link, not primary CTA; remains reachable after disconnect while Meta-origin data exists. Stop ingestion, remove credentials, delete Meta-origin raw/direct-copy data, process idempotently, issue deletion status/receipt. |
| SC-IG-024 | Raw Meta data vs AI analysis deletion | `MVP_RESOLVED` | Classify `META_RAW` → delete; `META_DERIVED_DIRECT` → delete/sanitize; `CREATOR_SHOP_DERIVED_ANALYSIS` → retain only where policy permits and it is genuinely transformed, not a disguised copy. |
| SC-IG-025 | Duplicate Meta deletion callback/request | `MVP_RESOLVED` | Deletion is idempotent; repeated valid request safely confirms completed/no scoped data remains. |
| SC-IG-026 | Reconnect after Instagram deletion | `MVP_RESOLVED` | Start a new clean provider-data epoch; do not recreate deleted historical raw records. |
| SC-IG-027 | Reporting after provider-data deletion | `MVP_RESOLVED` | Do not render deleted raw facts from stale caches; distinguish retained Creator Shop analysis from current provider reporting. |
| SC-IG-028 | Platform-wide `Delete my data/account` | `DEFERRED_V2` | Separate privacy/data-lifecycle program. See `docs/product/future/v2/privacy/platform_data_deletion_v2_requirements.md`. |
| SC-IG-029 | Facebook Login future expansion | `DEFERRED_V2` + `PROVIDER_RESEARCH_PENDING` | Separate product card, token model, permission/capability state; shared lifecycle primitives only where genuinely common. MVP frontend shows Instagram Login only. |
| SC-IG-030 | Creator Marketplace API assumption | `PROVIDER_RESEARCH_PENDING` | Do not promise/show API capability until official Meta availability and Creator Shop approval are verified. |
| SC-IG-031 | TikTok/YouTube/Shopify/GA4/Gmail future connections | `DEFERRED_V2` | Connection Centre expands by domain; do not force all providers into identical permissions/data-retention semantics. |

---

## Cross-module reporting invariant

Every consumer of Instagram-derived data must be able to distinguish at least:

```text
connection_status
capability_status
last_successful_sync_at
data_freshness
provider_data_deleted_at
known_data_gap / unrecoverable_window
```

Campaign, Collaboration, Brand Intelligence and reporting must never present stale, disconnected or deleted provider data as current truth.

## Connection Centre extension pattern

```text
Connections

Social & Creator Data
- Instagram Insights
- Facebook Business (future)
- TikTok (future)
- YouTube (future)

Commerce & Analytics
- Shopify (future)
- GA4 (future)

Productivity & Communication
- Gmail (future)
- additional workspace providers
```

## Future research package

Separate Meta/Postman/public-GitHub research should validate:

- Instagram Login deauthorization callbacks;
- Facebook Login for Business lifecycle;
- App Review / Advanced Access;
- signed deletion-request handling and provider receipt requirements;
- current Business Discovery capabilities;
- whether a generally available Creator Marketplace API exists;
- token refresh/revalidation behavior.

Research may refine implementation details but must not merge Instagram Login and Facebook Login into one Product connection.
