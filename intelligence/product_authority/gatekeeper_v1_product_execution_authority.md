# Gatekeeper v1 — Product & Execution Authority Freeze

**Status:** FROZEN FOR INTELLIGENCE FORMALIZATION  
**Scope:** Brand onboarding Gatekeeper  
**Purpose:** Canonical product authority for Gatekeeper admission, serviceability, fallback behavior, recovery, and downstream handoff.

## 1. Gatekeeper purpose

Gatekeeper answers:

> **Can Creator Shop safely and usefully begin automated onboarding for this submitted brand?**

It is an admission/serviceability capability, not merely an Industry classifier.

Gatekeeper must not build full Brand, Product, Competitor or Instagram Intelligence.

## 2. Submission requirements

The URL-entry experience must collect:

- website URL;
- confirmation that the user owns or is authorized to represent the brand;
- Terms acceptance;
- Privacy Policy acceptance.

The system should persist appropriate submission metadata including normalized domain, attestation state, Terms/Privacy versions, acceptance timestamp, and user/session reference where available.

The attestation is an authorization/control mechanism but does not replace platform policy, privacy, access-control or other applicable legal obligations.

## 3. Deterministic admission before AI

Before expensive AI reasoning, resolve deterministic conditions including:

- URL normalization and validity;
- private/local-network restrictions;
- prohibited social/marketplace URL cases;
- domain/TLD restrictions;
- existing brand;
- existing organization;
- recent resumable scan;
- scan/rate limits;
- verification requirement;
- approved domain-specific override;
- reachability;
- redirect integrity;
- parked/unusable website conditions.

Cheap and authoritative checks should resolve before unnecessary AI calls.

## 4. Language capability

MVP automated Intelligence supports English only:

```text
supported_intelligence_languages:
  - en
```

Eligibility means **sufficient English Evidence is available**, not that the company is based in an English-speaking country.

Examples:

- Japanese company + sufficient English site → eligible.
- Italian company + sufficient English site → eligible.
- Japanese-only site → unsupported for automated onboarding v1.
- Italian-only site → unsupported for automated onboarding v1.
- Hindi-only site → unsupported for automated onboarding v1.
- Multilingual site with sufficient English commercial Evidence → eligible.

Country must not be used as a proxy for language.

Architecture must allow future addition of Hindi and other languages without redesign.

## 5. Geography boundary

Gatekeeper v1 does not need to establish complete:

- business geography;
- markets served;
- audience geography;
- commercial market availability.

These belong to downstream Brand / Surface / Deep Intelligence.

An English-first product may legitimately target users in non-English-majority countries.

## 6. App-first brands

App-first brands are first-class serviceable businesses.

Gatekeeper must not require a transactional website.

Possible commercial destinations include:

```text
WEBSITE
APP_STORE
PLAY_STORE
DIRECT_APK
LEAD_GENERATION
BOOKING
OFFLINE_LOCATION
SALES_CONTACT
MULTI_DESTINATION
```

An informational website pointing primarily to an application is not a negative admission signal.

Gatekeeper should not inspect or classify inaccessible products inside an application.

## 7. Product Intelligence authority for app-first businesses

Detailed app offerings belong to **Product Intelligence**, not Gatekeeper.

Product Intelligence must not invent inaccessible products.

If individual products are not reliably accessible as Evidence, Product Intelligence represents the app and its externally verifiable offerings rather than inventing an internal product catalogue.

Examples:

- Slack → canonical Product can be Slack; Slack AI may be an offering/capability, not an independent campaign Product asset.
- App-only ecommerce → campaignable entity may be the app/marketplace experience itself. Do not manufacture individual internal catalogue products solely from promotional copy; campaign destination remains install/open app where appropriate.

## 8. Serviceability policy

Gatekeeper v1 intentionally uses a small evolving serviceability policy.

Default admission principle:

```text
legitimate commercial brand/business
+
sufficient English Evidence
+
supported Industry
+
not explicitly hard-blocked
+
not explicitly unsupported by known serviceability policy
+
sufficient classification certainty
=
ADMITTED
```

Do not invent an exhaustive entity ontology or serviceability taxonomy.

Serviceability rules should be represented as discoverable metadata/configuration so observed cases can be added without redesigning Gatekeeper.

## 9. Minimal entity classification

Only introduce entity categories required by actual admission decisions.

Initial conceptual set:

```text
BRAND
MARKETPLACE
CREATOR_MARKETING_PLATFORM
NON_COMMERCIAL_ENTITY
UNKNOWN
```

Extend only when a real product decision requires different behavior.

## 10. Creator-marketing applicability

Creator-marketing applicability asks:

> Can creator-led discovery, trust, consideration or acquisition meaningfully support this business?

It does not mean that the business must have ecommerce PDPs.

App installs, booking, lead generation, offline visits, SaaS signups and other conversion journeys can all be valid.

Known explicitly unsupported use cases may be added progressively. A creator/influencer-marketing platform itself is an example of a business that may technically belong to a supported Industry while not fitting Creator Shop's current service proposition.

## 11. Regulation and advertising-policy sensitivity

Gatekeeper hard-blocks only explicit Creator Shop admission prohibitions.

Regulated or advertising-sensitive businesses are not automatically rejected solely because additional compliance applies.

Future Brand/Product Intelligence may own structured capabilities such as:

```text
regulatory_sensitivity
advertising_policy_sensitivity
```

for downstream Brand Centre, Product, Campaign and creator-guidance use.

Do not expand Gatekeeper into a regulatory reasoning engine.

## 12. Similarweb boundary

Similarweb is explicitly **OUT OF SCOPE for Gatekeeper v1**.

Similarweb belongs in Surface / Deep Intelligence.

Initial intended downstream use cases include:

- brand scale / commercial-capacity signals;
- potential campaign-budget reasoning;
- competitor identification;
- traffic / geography context.

## 13. Gatekeeper AI escalation order

### Primary

```text
Gemini 2.5 Flash
+ URL Context
+ Google Search Grounding
```

This is the default Gatekeeper Intelligence path.

Owned-domain Evidence and Google Search-derived Evidence should remain distinguishable in provenance.

### Secondary

```text
Parallel AI
```

Parallel is used as deeper external web/company research when primary Evidence/result is inadequate or ambiguous.

Parallel may also be evaluated later for Surface Intelligence.

### Tertiary

```text
OpenAI approved model
```

OpenAI provides an independent provider/model fallback. Exact model remains configurable/open until benchmarking.

### Final

```text
MANUAL REVIEW
```

No automatic provider may manufacture a confident admission decision when reliable Evidence is insufficient.

## 14. Fallback ownership

The Intelligence Execution Profile owns:

- model/provider order;
- fallback triggers;
- semantic corroboration;
- confidence policy;
- final admission reasoning.

The Data Extraction Engine owns:

- provider connection;
- authentication;
- actual request execution;
- bounded technical retries of the requested capability;
- availability;
- rate limits;
- normalization;
- Evidence quality/error reporting.

Data Extraction must not independently switch provider/model unless permitted by the Intelligence execution policy.

## 15. Technical vs semantic fallback

Technical failure and semantic uncertainty are distinct.

### Technical failure examples

- timeout;
- provider unavailable;
- malformed structured output;
- invalid response;
- connection failure.

### Semantic uncertainty examples

- low confidence;
- UNKNOWN classification;
- conflicting Evidence;
- ambiguous entity identity;
- insufficient Evidence.

The execution profile must distinguish these conditions.

## 16. Canonical Gatekeeper outcomes

Top-level outcomes are:

```text
ADMITTED
RESUME_AVAILABLE
EXISTING_BRAND
ORG_CLAIMED
VERIFICATION_REQUIRED
UNSUPPORTED
UNSUPPORTED_LANGUAGE
CLASSIFICATION_UNCERTAIN
MANUAL_REVIEW_AVAILABLE
HARD_BLOCKED
DOMAIN_UNREACHABLE
DOMAIN_INVALID
TECHNICAL_FAILURE
```

Specific conditions should use structured `reason_code` values rather than proliferating top-level states.

Frontend should render these states and permitted actions rather than reconstruct business logic from UI text.

## 17. Recovery

Potential recovery actions include:

```text
CONTINUE
RESUME
SIGN_IN
REQUEST_ORG_ACCESS
VERIFY_DOMAIN
JOIN_WAITLIST
REQUEST_CLASSIFICATION_REVIEW
RETRY
CONTACT_SUPPORT
```

Users must not directly self-change Industry to bypass Gatekeeper.

Approved manual review may create a narrowly scoped domain/admission override.

Hard blocks fail closed and should not have an ordinary self-service bypass.

## 18. Confidence policy

Do not freeze arbitrary numeric thresholds yet.

Use semantic levels initially:

```text
HIGH
MEDIUM
LOW
```

General policy:

```text
HIGH
→ may resolve automatically

MEDIUM
→ corroborate when decision-sensitive

LOW
→ further Evidence/fallback required
```

Numeric thresholds should be benchmark-derived later.

## 19. Pre-scan confirmation UX

The existing two-modal approach should be replaced with one concise confirmation modal.

It should communicate through short copy/icons:

- what Creator Shop is about to do;
- estimated time;
- what the user may need shortly;
- domain-linked work email;
- Meta / Instagram login for deeper grounding;
- ability to review resulting Intelligence.

The modal must not claim verification has happened when it has not.

## 20. Scan progress UX

Post-confirmation progress should reflect **actual runtime activity**, not purely static fictional messages.

Backend/runtime telemetry should emit normalized execution events; presentation logic may convert them into understandable user-facing progress copy.

Internal provider/component names such as Zyte or Cheerio do not need to be exposed to users.

Internal telemetry and customer-facing progress copy remain separate layers.

## 21. Core execution principle

Gatekeeper must remain:

```text
FAST HAPPY PATH
+
PROGRESSIVE ESCALATION
```

Conceptual escalation:

```text
Submission
  ↓
Deterministic admission
  ↓
Existing state / resume / verification
  ↓
Technical qualification
  ↓
Gemini 2.5 Flash + URL Context + Google Search Grounding
  ↓ unresolved
Parallel AI
  ↓ unresolved
OpenAI approved model
  ↓ unresolved
MANUAL REVIEW
```

This structure may later be optimized based on observed latency, accuracy and cost without changing the ownership boundary.

## 22. Authority boundary for Intelligence formalization

This document freezes product and execution authority only.

The Intelligence Engine AI Worker must derive and propose, rather than assume:

- whether Gatekeeper requires a dedicated Intelligence branch;
- which outputs are reusable Intelligence vs admission-only values;
- processor boundaries;
- exact machine-readable output contract;
- Evidence capability contracts;
- semantic validation;
- persistence mapping;
- `gatekeeper_scan` canonical execution profile;
- Surface Intelligence handoff.

Those proposed Intelligence contracts require review before being marked frozen or implemented.
