# Instagram Intelligence V1 — Product Authority Register

**Status:** FROZEN PRODUCT AUTHORITY  
**Date:** 2026-08-29  
**Scope:** Brand-owned organic Instagram Intelligence V1 semantics required before execution planning  
**Parent authority:** `intelligence/master_intelligence_schema.md`, accepted Instagram Intelligence Phase A readiness audit, frozen Intelligence Engine portfolio order, and live Meta capability handoff for The Creator Shop App ID `1180027506417007`

---

## 1. Ownership boundary

Instagram Intelligence V1 answers:

> How does this Brand use Instagram, who does it currently reach, and what recurring patterns are visible in its organic content and organic account performance?

V1 scope is strictly:

- Brand-owned Instagram;
- organic Instagram understanding.

Instagram Intelligence V1 does **not** own:

- Campaign performance;
- creator performance;
- competitor Instagram;
- creator discovery;
- Creator Marketplace;
- messaging / DMs / outreach;
- publishing;
- comment moderation;
- paid-media performance.

Instagram Intelligence must not become Campaign Reporting or social-media management.

---

## 2. PI-IG-01 — V1 business meaning

Freeze the business question and scope exactly as defined in Section 1.

Instagram Intelligence owns Instagram-specific derived understanding only. Integration owns credentials/account connection truth. Data Extraction owns provider acquisition, normalized Evidence, availability and lineage.

---

## 3. PI-IG-02 — Derived Intelligence Objects

Freeze exactly three derived semantic Objects for V1:

1. `instagram_content_behavior`
2. `instagram_audience_profile`
3. `instagram_organic_performance_profile`

### `instagram_content_behavior`

Owns Instagram-specific derived understanding including:

- content themes/topics;
- format mix;
- posting cadence;
- caption/communication patterns;
- recurring content behavior;
- Instagram-specific visual/content tendencies.

### `instagram_audience_profile`

Owns Instagram-specific audience understanding including:

- follower audience;
- engaged audience;
- material differences between those audiences;
- meaningful demographic/geographic concentration.

No inferred demographic dimension may be invented where Meta does not supply support.

### `instagram_organic_performance_profile`

Owns Brand organic Instagram performance understanding including:

- account organic performance context;
- media performance patterns;
- format-performance patterns;
- engagement behavior;
- recurring high-response / low-response patterns.

It does not own Campaign-specific or creator-specific performance.

---

## 4. Account/profile factual state is not a fourth AI Object

Do not create a derived Intelligence Object merely to mirror factual Meta account state.

Provider/integration facts such as:

- native Instagram account ID;
- username;
- account type;
- follower count;
- following count;
- media count;
- profile metadata;

remain Integration / provider factual / DE Evidence context.

A derived account-level semantic concept may be introduced later only if Product identifies a genuine business question the three frozen Objects cannot answer.

---

## 5. PI-IG-03 — Content analysis window

Freeze:

- rolling analysis window = **30 days**;
- bounded maximum media count.

The exact maximum media count is a technical/performance decision, not Product Authority.

The hybrid rule exists to avoid pure last-N distortion for inactive accounts while preventing unbounded capture for high-volume accounts.

---

## 6. PI-IG-04 — Refresh model

Freeze Product cadence classes:

- initial Brand connection → immediate full V1 sync;
- manual refresh → allowed, subject to technical freshness/rate-limit guards;
- account/profile → daily class;
- media/content → daily class;
- performance insights → daily class;
- audience demographics → weekly class by default.

Exact scheduler times, jitter and technical guards are implementation decisions.

V1 has **no webhook dependency** and no real-time requirement.

---

## 7. PI-IG-05 — Audience semantics

Freeze two distinct factual audience bases:

- `FOLLOWER_AUDIENCE`
- `ENGAGED_AUDIENCE`

They may share a provider capability but must remain semantically distinguishable.

Instagram Intelligence may derive material differences only when both datasets are sufficiently available.

No dataset may be fabricated when Meta suppresses or omits demographics.

---

## 8. PI-IG-06 — Missing-data semantics

Freeze these hard invariants:

- missing metric != zero;
- unsupported metric != zero;
- suppressed demographic output != no audience;
- empty valid dataset != provider failure;
- provider failure != empty valid dataset.

Metric/data unavailability must remain explicit through Data Extraction Evidence and consumer state.

Any existing adapter that collapses unavailable/error states into numeric zero must be reconciled.

---

## 9. PI-IG-07 — Metric normalization

Provider-observed metrics remain factual Evidence.

Derived arithmetic is deterministic. Use deterministic logic for:

- sums;
- averages;
- counts;
- posting intervals;
- format mix;
- rate calculations;
- snapshot comparisons.

AI processors must not perform arithmetic that can be deterministically computed.

Do not freeze or imply one universal engagement-rate formula across Instagram formats.

A normalized rate may be produced only where denominator and comparison semantics are valid for that data surface/media type.

Exact metric/rate formulas remain execution-planning decisions constrained by this authority.

---

## 10. PI-IG-08 — Growth and trend

V1 begins retaining factual snapshots from the first valid connection/sync.

Interpretation rules:

- 1 valid snapshot → current state only;
- 2 valid snapshots → observed change may be described, but must not be called a trend;
- 3 or more valid observations **and** at least 14 elapsed days between earliest and latest valid observations → bounded growth/trend interpretation may be produced.

Longer history may increase confidence.

Do not fabricate growth from one current count or two adjacent observations.

---

## 11. PI-IG-09 — Token loss / expiry / ordinary disconnect

Token expiry, permission loss or ordinary Instagram disconnect means:

- stop new acquisition;
- retain prior current Instagram Intelligence;
- freshness degrades naturally;
- consumer exposes disconnected / reauthorization state;
- prior Intelligence is not silently erased.

Integration remains owner of credential and connection lifecycle.

Ordinary disconnect is not delete-data.

---

## 12. PI-IG-10 — Explicit Delete Instagram Data

Freeze a distinct user action: **DELETE INSTAGRAM DATA**.

Its Product meaning is to delete retained:

- Instagram provider Evidence;
- Instagram snapshots/media observations;
- Instagram-derived current/candidate Intelligence.

Preserve unrelated:

- Brand Intelligence;
- Product Intelligence;
- canonical Brand/business state;
- non-Instagram application state.

Exact deletion mechanics, audit requirements and referential handling remain implementation/security concerns.

### Retention while connected

The 30-day analysis window is not a retention rule.

While connected, normalized Instagram Evidence and repeated factual snapshots may be retained to support current Intelligence, historical comparison, growth/trend, freshness and recovery.

Retention continues until explicit Delete Instagram Data or a future platform-wide retention policy supersedes this authority.

Any stricter provider/legal requirement is a Product/security conflict and must be surfaced rather than silently applied.

---

## 13. PI-IG-11 — Manual override / protection

V1 has **no manual semantic override** for Instagram-derived Objects.

Provider factual data including native account ID, provider metrics, provider demographics and media timestamps cannot be user-overridden as Intelligence.

Account identity errors are resolved through Integration/account reconciliation.

Do not introduce Brand-confirmed/protected Instagram semantic output in V1 unless later Product Authority creates a concrete use case.

Shared current/candidate infrastructure may still be reused for runtime safety; this decision concerns user semantic override/protection.

---

## 14. PI-IG-12 — Brand Intelligence relationship

Freeze:

`Instagram Intelligence → Brand Intelligence = OPTIONAL_ENRICHMENT`

V1 does not create a mandatory invalidation dependency from Instagram into Brand Intelligence.

Instagram-specific truth remains owned by Instagram Intelligence.

Brand Intelligence continues to own global:

- communication;
- meaning/positioning;
- personality;
- reusable Brand audience;
- visual style.

Do not create competing global Brand truth inside Instagram Intelligence.

Selective Brand enrichment may be designed later.

---

## 15. PI-IG-13 — Consumer placement

Instagram Intelligence is consumed inside **Brand Centre**.

It does not become a new global application module merely because it is a top-level Intelligence Engine.

Connection lifecycle remains in **Settings → Instagram / Integrations**.

Conceptual UX ownership:

- Settings → connect / reauthorize / disconnect / permission state;
- Brand Centre → what Creator Shop understands about the Brand's Instagram.

Exact Brand Centre workspace/tab hierarchy remains FE/UX reconciliation work.

---

## 16. PI-IG-14 — V1 scope exclusions

Freeze Brand-owned-only execution scope.

Out of this V1 program:

- Creator Instagram Intelligence;
- competitor Instagram Intelligence;
- Creator Marketplace data;
- Campaign-specific performance;
- creator/deliverable performance;
- messaging;
- publishing;
- comment moderation;
- paid social intelligence.

These areas may reuse the provider foundation later but must not expand this V1 program.

---

## 17. Frozen provider boundary

The live Meta capability handoff for The Creator Shop App ID `1180027506417007` establishes advanced/approved access for:

- `instagram_business_basic`
- `instagram_business_manage_insights`

V1 may rely, after Brand user authorization, on:

- Instagram Professional account profile/identity;
- own media/content;
- account-level insights;
- media-level insights;
- follower/audience demographics;
- engaged-audience demographics.

Explicitly excluded from the V1 minimum dependency:

- Creator Marketplace discovery;
- Business Discovery;
- DMs/messaging;
- content publishing;
- comment management;
- active webhook delivery.

---

## 18. Preserved Phase A technical direction

Subject to technical validation during execution planning:

- reuse/reconcile the existing OAuth/provider path rather than replacing it;
- Integration owns credentials, token health and exact grants;
- Data Extraction owns acquisition, data-surface availability and Evidence;
- Intelligence owns derived meaning/readiness;
- requested permission != proven granted permission;
- empty permission response must not imply granted capability;
- native Meta account/media IDs anchor provider resource identity;
- direct Graph JSON must not become permanent Intelligence input contracts;
- new bounded Instagram DE capabilities are expected;
- shared Intelligence runtime should be reused;
- `subject_type = BRAND` is preferred for V1;
- no new Instagram-account Intelligence subject is required unless execution planning proves otherwise;
- media remain Evidence/items, not independent Intelligence subjects;
- first vertical slice should prove content behavior before demographics/performance expansion where technically sound.

---

## 19. Superseded Phase A recommendations

Product confirmation supersedes any earlier provisional Phase A uncertainty on:

- business meaning and V1 exclusions;
- exact derived Object count and IDs;
- 30-day rolling analysis window;
- cadence classes;
- follower vs engaged audience semantics;
- missing-data invariants;
- deterministic arithmetic requirement;
- growth/trend minimum history;
- disconnect/retention behavior;
- explicit Delete Instagram Data semantics;
- no manual semantic override;
- optional Brand Intelligence enrichment;
- Brand Centre vs Settings placement;
- Brand-owned-only execution scope.

Technical details explicitly left open by Product Authority remain implementation/execution-planning decisions, not new Product decisions.

---

## 20. Governance note

This document freezes Product meaning only.

It does not freeze:

- database schema shape;
- exact DE capability identifiers;
- exact normalized Evidence field schemas;
- exact bounded media cap;
- scheduler timestamps/jitter;
- exact Graph metric formulas where format semantics differ;
- processor graph/count beyond ownership of the three frozen Objects;
- model/provider selection for semantic synthesis;
- API representation;
- frontend component hierarchy;
- deletion transaction/audit mechanics;
- deployment topology.

Those belong to execution planning/implementation provided they preserve PI-IG-01 through PI-IG-14.

---

## 21. Product decision status

Open Product decisions blocking first vertical slice: **NONE**  
Open Product decisions blocking full Instagram Intelligence V1: **NONE**

Next phase:

`INSTAGRAM_INTELLIGENCE_V1_EXECUTION_PLANNING`
