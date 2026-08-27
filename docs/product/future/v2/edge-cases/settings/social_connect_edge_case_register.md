# Settings — Social Connect Edge-Case Register

**Module:** Brand Settings → Connections → Social & Creator Data  
**Current MVP provider:** Instagram API with Instagram Login  
**Future provider family:** Facebook Login for Business / Instagram API with Facebook Login, TikTok, YouTube and additional connection classes  
**Branch purpose:** edge-case continuity + future/V2 parking; current MVP implementation remains governed by the frozen Product Authority.

## Frozen product direction

### Current MVP surface

Only **Instagram Insights** is shown as an operational connection.

The connect card should communicate, in very short icon-led copy:

- your Instagram profile;
- engagement / performance insights;
- fresher Brand Intelligence and Campaign reporting.

The card must not claim Business Discovery, competitor monitoring or Creator Marketplace access from Instagram Login.

### Future Meta surface

Instagram Login and Facebook Login for Business are distinct products and must remain distinct connection cards / identities.

Future shape:

```text
Social & Creator Data

Instagram Insights
[Instagram identity + own-account insights]

Facebook Business
[Page-linked Meta business / approved discovery capabilities]
```

The two products may coexist later; they are not to be collapsed into a generic single `Meta Connected` state.

### Pre-connect experience

`Connect` first opens a compact Creator Shop explainer before redirecting to Instagram.

The explainer is intentionally low-content:

- very short sentences;
- small trust/context icons;
- registered Instagram handle prominently shown;
- why connection helps;
- requested access: Profile + Insights;
- a reminder to keep both requested permissions enabled on Instagram.

Do not create a dense permission/legal wall before the provider screen.

### Reconnect

Reconnect uses the same Creator Shop callback / redirect URI contract as Connect. Creator Shop issues a fresh one-time OAuth state and starts a new authorization attempt. The Instagram-side screen may differ based on the user's existing Instagram session and prior grant; Creator Shop does not need a separate reconnect redirect URL.

---

## Edge-case register

### SC-IG-001 — Wrong Instagram account chosen on first connect

**Status:** `MVP_RESOLVED` / current implementation needs reconciliation.

**Scenario:** registered Brand handle is `@brand`; user authenticates `@other_account`.

**MVP behavior:**

- do not activate the mismatching account;
- do not overwrite the canonical Brand handle;
- discard/clear staged credentials from the failed candidate;
- return to the unconnected state;
- show which account was authenticated and which Brand handle is expected;
- provide `Reconnect with @brand`.

A wrong candidate must never silently become the active Brand connection.

---

### SC-IG-002 — Wrong account selected during reconnect while a valid connection exists

**Status:** `MVP_RESOLVED`.

**Behavior:** reject the new candidate and preserve the existing valid connection unchanged. Clear only the staged candidate credentials.

---

### SC-IG-003 — Instagram username changes but underlying account is the same

**Status:** `MVP_RESOLVED`.

**Behavior:** after first verified connection, bind identity to Meta/Instagram's stable provider account ID. If the stable account ID remains the same but username changes, update the displayed/canonical handle and record the identity-change event. Do not treat this as a different account merely because the username changed.

---

### SC-IG-004 — User wants to intentionally change the Brand's registered Instagram account after Brand Preview

**Status:** `OPEN_PRODUCT_DECISION`.

**Recommended direction:** permit a controlled **Settings-only** change flow rather than exposing Brand handle as an ordinary editable text field.

Recommended rules:

- Brand Owner initiates `Change Instagram account`;
- explicit warning that this changes canonical Brand social identity;
- new account must complete OAuth and become provider-verified before canonical replacement;
- ordinary Campaign Manager reconnect cannot redefine Brand identity;
- history/change event retained;
- a simple same-account username rename is handled under SC-IG-003 and does not need this flow.

---

### SC-IG-005 — User grants Basic Profile but withholds Insights

**Status:** `MVP_RESOLVED`.

**State:** `PARTIALLY_CONNECTED`.

**UI:**

- Basic Profile — connected;
- Insights — permission missing;
- status message: `Permission missing` / `Needs revalidation`;
- replace `Connect` with `Reconnect`.

Existing basic-profile truth remains usable; insight-dependent features must not fabricate readiness.

---

### SC-IG-006 — Permission evidence is absent or ambiguous

**Status:** `MVP_RESOLVED` / `MVP_IMPLEMENTATION_GAP`.

**Behavior:** do not assume full capability. Mark affected capability `UNKNOWN / NEEDS_REVALIDATION` and offer reconnect. Positive provider evidence is required before showing an insight capability as ready.

---

### SC-IG-007 — Basic Profile permission missing

**Status:** `MVP_RESOLVED`.

**Behavior:** connection is incomplete and must not become operational. Show reconnect/revalidation guidance.

---

### SC-IG-008 — Personal Instagram account used

**Status:** `MVP_RESOLVED`.

**Behavior:** reject as unsupported for Brand data connection; explain that an Instagram Professional (Business/Creator) account is required and permit retry after conversion.

---

### SC-IG-009 — User cancels or denies OAuth on Instagram

**Status:** `MVP_RESOLVED`.

**Behavior:** no connection is activated; preserve any pre-existing valid connection; clean callback secrets from browser URL; return a clear cancelled/incomplete state with `Try again`.

---

### SC-IG-010 — OAuth state missing, expired, invalid or replayed

**Status:** `MVP_RESOLVED`; current OAuth-state foundation is aligned.

**Behavior:** reject the callback; never consume/provider-bind credentials; require a new Connect/Reconnect attempt.

---

### SC-IG-011 — Provider token exchange fails after user consent

**Status:** `MVP_RESOLVED`.

**Behavior:** authorization attempt fails safely; no partially active connection; require a fresh attempt because OAuth state is one-time.

---

### SC-IG-012 — Two connect/reconnect attempts occur concurrently

**Status:** `MVP_RESOLVED`.

**Behavior:** each attempt uses a separate one-time state. Only a valid current result may become active. A later successful write must not be overwritten by a stale/older callback without concurrency/identity validation.

---

### SC-IG-013 — Instagram token expires

**Status:** `MVP_RESOLVED`.

**Behavior:** stop new Instagram ingestion, retain historical data/analysis, show `Re-authentication required`, and provide `Reconnect`.

---

### SC-IG-014 — User revokes Creator Shop externally in Instagram / Meta

**Status:** `MVP_RESOLVED` / `MVP_IMPLEMENTATION_GAP`.

**Detection hierarchy:**

1. Meta/Instagram deauthorization/revocation callback where supported/configured — reflect as soon as callback is received and validated;
2. provider API/token validation failure — transition immediately when observed;
3. scheduled connection-health validation — fallback for missed callbacks.

**Settings state:** `Disconnected by provider` / `Reconnect`.

Creator Shop must not assume all disconnects start from its own UI.

---

### SC-IG-015 — User disconnects inside Creator Shop while Campaigns/Collaborations are active

**Status:** `MVP_RESOLVED`.

**Behavior:** do not block disconnect merely because an active Campaign or Collaboration exists. User can always revoke externally, and Instagram access is not the commercial validity authority.

Disconnect must:

- remove/reset active authorization credentials;
- stop future Instagram ingestion;
- preserve historical Instagram data unless separately deleted;
- preserve Creator Shop AI analysis;
- keep Campaign/Collaboration lifecycle active;
- cause reporting surfaces that depend on fresh Instagram data to become connection-aware/stale.

---

### SC-IG-016 — Reporting after Instagram disconnect

**Status:** `MVP_RESOLVED` / cross-module implementation gap.

Any Campaign / Brand Intelligence / analytics surface dependent on Instagram must know the connection is inactive.

It must:

- retain previously collected values;
- retain/display the last successful collection timestamp;
- clearly mark current reporting as stale/unavailable because Instagram is disconnected;
- never silently present old values as current;
- stop provider-derived refresh jobs.

---

### SC-IG-017 — Reporting after Instagram reconnect

**Status:** `MVP_RESOLVED`.

Reconnect triggers a catch-up sync for all metrics the provider can still supply historically.

Metrics that require observation during a lost time window must not be reconstructed falsely.

Example:

`post reach velocity / views in first 12 hours`

If Creator Shop was disconnected during that window and the provider does not expose sufficient historical observations, the metric must be marked `DATA_GAP / UNRECOVERABLE_FOR_WINDOW` rather than estimated as authoritative.

Reporting resumes normally from the restored connection onward.

---

### SC-IG-018 — Provider API outage/rate limit while token remains valid

**Status:** `MVP_RESOLVED`.

Do not mark the account disconnected solely because one sync fails. Separate **identity/authorization health** from **sync/data freshness health**.

Recommended state: `CONNECTED_SYNC_DEGRADED`, with retry/backoff and last-success timestamp.

---

### SC-IG-019 — Account becomes unavailable or changes from Professional to Personal

**Status:** `MVP_RESOLVED`.

When detected, stop unsupported ingestion and show provider/account eligibility action required. Preserve historical data and analysis.

---

### SC-IG-020 — Creator Shop user who originally connected Instagram leaves the Brand workspace

**Status:** `MVP_RESOLVED`.

The connection is Brand-workspace infrastructure, not personal ownership of the initiating Team member. Removing the Team member does not automatically disconnect Instagram. OAuth activity history should retain who initiated the connection/reconnect.

---

### SC-IG-021 — Disconnect while an Instagram sync is in flight

**Status:** `MVP_RESOLVED` / implementation requirement.

Disconnect establishes a connection-generation / ingestion fence before credentials are removed. In-flight workers must revalidate the active generation before persisting new provider data.

---

### SC-IG-022 — Delete Instagram data while sync is in flight

**Status:** `MVP_RESOLVED` / implementation requirement.

Set a deletion/ingestion fence first, then revoke/remove credentials and delete scoped provider-origin data. An in-flight worker must not be able to recreate deleted Meta data after the deletion request.

---

### SC-IG-023 — User clicks `Delete my Instagram data`

**Status:** `MVP_RESOLVED` — Meta/platform compliance capability required for launch.

**UX:** small destructive text link associated with the Instagram connection/data surface; not a primary CTA. It remains discoverable even after disconnect if Instagram-origin data is still retained.

**Behavior:**

- stop future ingestion;
- remove/reset authorization credentials;
- delete Instagram/Meta-origin raw data and direct provider-derived copies within the deletion scope;
- retain Creator Shop-owned workspace/campaign/financial records where legally/product-authorized;
- retain genuinely transformed Creator Shop AI analysis only where the deletion/data-use policy permits and the retained artifact no longer functions as a direct copy of deleted provider data;
- create an auditable, idempotent deletion receipt/state.

A Meta-origin deletion callback and the Creator Shop UI request should invoke the same canonical deletion service.

---

### SC-IG-024 — Distinguish raw Meta data from AI-derived analysis during deletion

**Status:** `MVP_RESOLVED` as a required data-lineage principle; exact table mapping is implementation-owned.

Required data classes:

- `META_RAW` — delete;
- `META_DERIVED_DIRECT` — delete/sanitize if it materially reproduces Meta-origin data;
- `CREATOR_SHOP_DERIVED_ANALYSIS` — retain only where policy permits and lineage proves it is transformed Creator Shop intelligence rather than a disguised copy of source data.

Deletion implementation must be driven by explicit data lineage rather than table-name guesses.

---

### SC-IG-025 — Duplicate / repeated Meta deletion request

**Status:** `MVP_RESOLVED`.

Deletion must be idempotent. A repeated valid request returns/tracks the same completed state or safely confirms no scoped provider data remains.

---

### SC-IG-026 — Reconnect after Instagram data deletion

**Status:** `MVP_RESOLVED`.

Treat as a new clean provider-data baseline. Historical Creator Shop analysis that was legitimately retained remains historical; new raw/provider data begins from the new authorization/collection epoch and must not be conflated with deleted source records.

---

### SC-IG-027 — Campaign/Brand reporting lineage after provider data deletion

**Status:** `MVP_RESOLVED`.

Surfaces must not continue rendering deleted raw Instagram facts from stale cached projections. Retained AI/aggregate outputs must remain distinguishable from current provider reporting. If a report relied on deleted raw data, show the appropriate historical/data-deleted state rather than silently regenerating the source detail.

---

### SC-IG-028 — Platform-wide `Delete my data / account`

**Status:** `DEFERRED_V2`.

This is broader than Instagram data deletion and requires dedicated platform privacy/data-lifecycle authority. See `docs/product/future/v2/privacy/platform_data_deletion_v2_requirements.md`.

---

### SC-IG-029 — Instagram Login vs Facebook Login future expansion

**Status:** `DEFERRED_V2` / `PROVIDER_RESEARCH_PENDING` for exact Facebook capabilities.

Freeze the extensibility pattern now:

- separate provider/product cards;
- separate token/permission/capability state;
- shared lifecycle primitives only where genuinely common;
- no `Meta Connected` umbrella that hides capability differences.

Current MVP frontend shows Instagram Login only.

---

### SC-IG-030 — Creator Marketplace API assumption

**Status:** `PROVIDER_RESEARCH_PENDING`.

Do not show or promise Creator Marketplace API capability until official Meta capability/app approval is verified. Instagram Creator Marketplace as a Meta product does not by itself prove Creator Shop has an API integration path.

---

### SC-IG-031 — Future non-social connections

**Status:** `DEFERRED_V2`.

Connection Centre should be extensible by domain, for example:

```text
Social & Creator Data
- Instagram
- Facebook Business
- TikTok
- YouTube

Commerce & Analytics
- Shopify
- GA4

Productivity & Communication
- Gmail
- future workspace providers
```

Do not force all providers into identical permissions or data-retention semantics merely because all use OAuth-like connection flows.

---

## Cross-module reporting invariant

Every consumer of Instagram-derived data must be able to distinguish:

```text
connection_status
capability_status
last_successful_sync_at
data_freshness
provider_data_deleted_at (when applicable)
known_data_gap / unrecoverable_window
```

This prevents Campaign, Collaboration, Brand Intelligence and reporting screens from presenting stale or deleted provider data as current truth.

## Future research package

A separate Meta/Postman/public-GitHub implementation-pattern research exercise should validate:

- Instagram Login deauthorization callbacks;
- Facebook Login for Business lifecycle;
- App Review / Advanced Access;
- official deletion callback requirements and signed-request handling;
- current Business Discovery capability;
- whether a generally available Creator Marketplace API exists;
- provider token refresh/revalidation behavior.

Research findings may refine implementation but must not collapse Instagram Login and Facebook Login into one product model.
