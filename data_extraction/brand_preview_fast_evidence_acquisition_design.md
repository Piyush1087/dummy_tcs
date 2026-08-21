# Brand Preview — Fast Evidence Acquisition Design

**Status:** FROZEN — PRODUCT / ARCHITECTURE APPROVED  
**Owner:** Data Extraction Engine  
**Scope:** Evidence acquisition required to satisfy the frozen Brand Preview `PREVIEW_READY` contract after Gatekeeper admission and confirmed supported Industry.  
**Approval boundary:** Product / Architecture approved with bounded architectural decisions on 2026-08-21.  
**Non-goal:** This design does not define Brand meaning, Audience semantics, creator-marketing reasoning, archetype selection, processor prompts, or IE-owned cross-provider fallback policy.

## 1. Design objective

Brand Preview should receive the smallest evidence package that gives Intelligence a credible opportunity to synthesize:

- grounded Brand understanding;
- at least one credible Audience hypothesis;
- at least one creator-marketing opportunity;
- at least one canonical creator-archetype recommendation.

The permanent acquisition principle is:

```text
reuse
  ↓
fast direct acquisition
  ↓
lightweight deterministic extraction
  ↓
selective bounded escalation
  ↓
early stop once minimum evidence is sufficient
```

Do not run a full Surface crawl merely to make Brand Preview richer.

## 2. Gatekeeper evidence reuse

Evidence from the **same active onboarding run** is reusable by default. Do not introduce an arbitrary Product TTL at this stage.

Reuse, where traceable and still valid:

- normalized website URL/domain;
- final reachable URL;
- reachability and redirect/content-quality signals;
- confirmed supported Industry;
- useful Gatekeeper English/serviceability context;
- commercial-destination signals such as website, app store, booking, signup or lead-generation modes;
- Gatekeeper owned-domain/public-web provenance references;
- acquisition-run and execution references.

Invalidate reuse only when a material authority/runtime change occurs, including:

- authoritative URL/domain change;
- confirmed Industry change;
- failed provenance or Evidence-quality validation;
- explicit runtime invalidation;
- another material authority change that makes the prior Evidence no longer applicable.

Reuse does not promote Gatekeeper admission-only conclusions into canonical Brand Intelligence. The goal is to avoid duplicate acquisition while preserving provenance.

Gatekeeper Evidence alone will not normally contain a reusable clean website-content package, so lightweight website acquisition remains the normal next step.

## 3. Provider-neutral website-evidence capability

Intelligence should request **one provider-neutral Brand Preview website-evidence capability**.

Conceptually:

```text
brand_preview.website_evidence
```

Intelligence must not need to choose:

```text
DIRECT_HTTP
ZYTE_HTTP
ZYTE_BROWSER
```

Those are internal Data Extraction acquisition modes for fulfilling the same requested website-evidence capability.

Internal execution order is:

```text
Direct HTTP
   ↓ unusable / technically insufficient
Zyte HTTP
   ↓ still unusable / rendering required
Zyte rendered
```

This internal escalation does not change the requested evidence source or Intelligence strategy and therefore remains owned by Data Extraction.

## 4. Recommended normal acquisition path

The normal path is:

```text
Reusable Gatekeeper Evidence
        +
Homepage
        +
About / company-context page
        +
One primary commercial / offering page
        ↓
Cheerio clean-text + metadata normalization
        ↓
Evidence sufficiency check
        ↓
EARLY STOP if sufficient
        ↓
IE Brand Preview synthesis attempt
```

This is the preferred default across D2C, SAAS_AI, HEALTHCARE and OFFLINE_SERVICES.

### Homepage

Attempt first unless equivalent valid homepage Evidence already exists in the active run.

Extract at minimum:

- title / OpenGraph title;
- description / OpenGraph description;
- visible clean body text;
- logo candidate where available;
- navigation labels;
- same-origin links;
- obvious external commercial destinations where relevant;
- page URL/final URL and acquisition metadata.

The homepage is also the discovery surface for the next high-signal pages.

### About / company-context page

Prefer when discoverable through same-origin navigation or links. Likely signals include `about`, `about-us`, `our-story`, `company`, `who-we-are`, or `mission`.

If no credible About page exists, select the next highest-signal first-party context page instead of forcing a page type.

### Primary commercial / offering page

Acquire one representative page that most clearly establishes what the business offers or how a customer acts.

Examples:

- D2C: collection/category page or representative flagship PDP;
- SaaS/AI: product, features, solutions or pricing page;
- Healthcare: treatment, service, specialty or consultation page;
- Offline services: services, experience, location or booking page;
- app-first: product/features/download page or canonical App Store / Play Store destination where required.

This is representative commercial Evidence, not catalogue acquisition.

## 5. Minimum high-signal page/evidence set

Normal target:

```text
Homepage
+ About / company context
+ one primary commercial / offering page
```

This is a target, not a rigid three-page prerequisite.

Acquisition may stop with fewer pages when evidence density is already sufficient, for example:

```text
rich homepage + About

rich homepage + offering page

rich homepage
+ reusable same-run Gatekeeper Evidence
+ clearly evidenced commercial destination
```

A thin homepage is not sufficient merely because the HTML is technically readable.

A fourth page is exceptional and should be acquired only when a specific required evidence dimension remains weak or absent. Do not expand into the existing 5–7 page Surface planning pattern simply because more links exist.

## 6. Direct HTTP, Cheerio and Zyte boundaries

### Direct HTTP

Direct HTTP is the default internal acquisition mode when:

- HTML returns successfully;
- redirects remain safe and expected;
- meaningful server-rendered text exists;
- navigation/key links are discoverable;
- response content is not a challenge/interstitial/placeholder shell.

Do not route every Preview page through Zyte.

### Cheerio

Cheerio is the normal deterministic transformer when the acquired HTML contains usable content.

Normalize only the bounded fields required for Preview Evidence, such as:

- clean text;
- title;
- page type;
- internal links;
- selected metadata/logo candidate;
- navigation labels where useful;
- acquisition/provenance references.

Cheerio is a transformer, not an acquisition provider or fallback.

The existing `TextContextBuilderService` is a strong reusable implementation basis, but the Preview capability must not invoke the full Surface pipeline merely to reuse it.

### Zyte

Zyte is a selective internal mode when direct HTTP fails or produces unusable Evidence because of:

- access/blocking behavior;
- challenge/interstitial shells;
- materially empty/short HTML;
- required client-side rendering;
- useful content absent from static response;
- bounded transient direct-fetch failure.

Escalate only the affected high-signal page. Do not automatically Zyte-fetch every discovered link.

## 7. Evidence sufficiency for an IE synthesis attempt

Data Extraction reports source-material coverage; it does not decide Brand meaning, Audience, creator opportunity or archetype.

Required reusable facts:

- reliable Brand identity reference;
- authoritative website URL/domain;
- confirmed supported Industry;
- intact source/provenance references.

Required Evidence dimensions:

1. **Brand/proposition context** — what the business is/offers or the problem/use context it serves.
2. **Customer/use-context signal** — intended customer/use case/decision context/need/experience signal without DE making an Audience conclusion.
3. **Commercial/offering/conversion signal** — externally verifiable product/service/capability/booking/install/signup/lead or similar customer action.

DE may classify each Evidence dimension only as:

```text
PRESENT
WEAK
ABSENT
```

These are Evidence-coverage states, not semantic confidence.

The package is sufficient for an IE synthesis attempt when:

- required reusable facts are present;
- Brand/proposition context = PRESENT;
- customer/use-context >= WEAK;
- commercial/offering/conversion >= WEAK;
- at least one of those latter two dimensions = PRESENT;
- usable first-party clean text exists;
- Evidence is not dominated by boilerplate/challenge/placeholder content;
- provenance and quality gates pass.

IE remains responsible for determining whether the supplied Evidence can produce the frozen Preview outputs.

## 8. Frozen early-stop rule

Early stopping is mandatory once the minimum Evidence dimensions are sufficient.

```text
IF
  same-run Gatekeeper / identity Evidence is reusable
  AND Brand/proposition evidence is PRESENT
  AND customer/use-context evidence >= WEAK
  AND commercial/offering/conversion evidence >= WEAK
  AND at least one of those latter two dimensions is PRESENT
  AND provenance/quality gates pass
THEN
  STOP ACQUISITION
  deliver normalized Evidence package to IE
```

Do not acquire more pages to:

- produce 2–3 Audience groups instead of one;
- produce three creator opportunities instead of one;
- maximize archetype recommendations;
- complete catalogue/Product understanding;
- discover Competitors;
- improve visual density of Preview;
- build full Brand DNA;
- wait for Instagram or deeper Intelligence.

The frozen Preview contract permits one credible Audience group, one opportunity and one archetype. Acquisition must respect that boundary.

## 9. Gemini URL Context / public-web boundary

Gemini URL Context + public-web acquisition is **not** an internal mode of `brand_preview.website_evidence`.

It is a separate bounded acquisition capability that IE may request when the website Evidence package remains insufficient and IE's execution policy authorizes enrichment/corroboration/fallback.

Canonical boundary:

```text
DE website capability
  Direct HTTP → Zyte HTTP → Zyte rendered
        ↓
returns sufficient or insufficient website Evidence
        ↓
IE evaluates Evidence need
        ↓ if authorized/required
IE requests Gemini URL Context + public-web capability
        ↓
DE executes requested Gemini capability
```

DE must **not** independently perform:

```text
weak website → Gemini
```

Gemini output must preserve distinct provenance such as:

```text
OWNED_DOMAIN
PUBLIC_WEB_SEARCH
```

Same-run Gatekeeper Gemini Evidence should be reused where valid rather than reacquired automatically.

## 10. App-first and weak-website brands

### App-first

App-first brands remain first-class.

Use available Evidence from:

- Gatekeeper commercial-destination signals;
- homepage/company page;
- product/features/download page;
- canonical App Store / Play Store destination linked by the Brand;
- IE-requested Gemini/public-web Evidence only when IE authorizes it.

Do not attempt to acquire inaccessible app internals or manufacture an internal catalogue.

### Weak but legitimate website

For sparse sites:

1. use available homepage/About/offering Evidence;
2. attempt only the most useful additional destination when a clear Evidence gap remains;
3. use Zyte only for technical acquisition/rendering problems;
4. return partial/weak coverage truthfully when content is genuinely sparse;
5. allow IE to decide whether a separate Gemini/public-web acquisition request is necessary.

Do not manufacture page density by crawling privacy, legal, careers, press archives or unrelated blog pages.

## 11. Timeout and escalation boundaries

These are **benchmark targets, not SLAs**.

### Normal direct/Cheerio path

```text
~1–5 s typical target
~8 s soft upper / slow-path threshold
```

Homepage should be acquired first. Once candidate URLs are known, independent About/offering acquisitions may run concurrently within bounded concurrency.

Cheerio/local transformation should be negligible relative to network time.

### Selective Zyte escalation

Keep escalation page-specific and bounded. Reuse the current provider timeout mechanics initially rather than creating an unbounded multi-page serial path.

Selective escalation should remain substantially smaller than a full Surface crawl.

### IE-requested Gemini/public-web step

Use the established Data Extraction provider timeout/retry contract. It is a selective, IE-requested enrichment/fallback step, not a normal prerequisite.

### Whole Preview acquisition envelope

Prefer truthful recovery/terminal UX around approximately:

```text
~20–30 s
```

rather than expanding acquisition into a full Surface crawl.

Runtime telemetry should establish actual p50/p95 and refine these benchmark targets later.

## 12. Recoverable vs non-recoverable acquisition states

Recoverable examples:

- direct fetch timeout/network interruption;
- temporary 429/5xx;
- temporary Zyte provider failure;
- rendering-required page;
- optional/high-value page missing while useful Evidence remains;
- first-party Evidence too thin while another IE-approved acquisition capability remains available;
- temporary requested-provider failure.

These are structured Evidence/provider states, not product rejection.

Non-recoverable for the current Preview acquisition attempt includes:

- Gatekeeper admitted/confirmed-Industry precondition no longer valid;
- authoritative domain becomes invalid/unsafe;
- all IE-approved acquisition paths are exhausted without reliable proposition Evidence;
- required Evidence cannot be obtained under provider authorization/policy constraints;
- no traceable source material remains sufficient for an IE synthesis attempt.

Product/IE owns the resulting retry/manual recovery/abandonment UX or orchestration decision.

## 13. Provider-neutral normalized Evidence package

Conceptually:

```yaml
brand_preview_evidence:
  acquisition_run_id:
  reused_gatekeeper:
    normalized_url:
    confirmed_industry:
    content_quality_signals:
    commercial_destination_types:
    evidence_refs: []

  pages:
    - url:
      page_type: homepage | about | offering | app_store | general_context
      provider_neutral_capability: brand_preview.website_evidence
      internal_acquisition_mode: DIRECT_HTTP | ZYTE_HTTP | ZYTE_RENDERED
      clean_text:
      title:
      internal_links: []
      acquired_at:
      quality_state:
      provenance_ref:

  coverage:
    brand_proposition: PRESENT | WEAK | ABSENT
    customer_use_context: PRESENT | WEAK | ABSENT
    commercial_offering_conversion: PRESENT | WEAK | ABSENT

  availability: AVAILABLE | PARTIALLY_AVAILABLE | UNAVAILABLE
  quality_state: VALID | DEGRADED | INVALID
  sufficient_for_preview_synthesis_attempt: boolean
  quality_flags: []
```

`internal_acquisition_mode` is operational telemetry/provenance information. It is not something IE must choose when requesting the website Evidence capability.

The package must not contain Audience conclusions, creator-opportunity recommendations, archetype decisions or other IE semantics.

## 14. Reuse assessment of current backend

Reuse/wrap rather than rewrite:

- `DiscoveryReachabilityService` — reuse same-run reachability/final-URL/content signals rather than reacquiring them solely for Preview.
- native fetch mechanics already present in website acquisition/enrichment code — basis for bounded direct page acquisition.
- `TextContextBuilderService` — Cheerio clean-text/title/link normalization basis.
- `ZyteHomepageStrategy.fetchHtml` mechanics — basis for internal static→rendered website acquisition modes.
- existing Data Extraction Gemini runtime/provenance capability — available only when separately requested by IE.

Do not invoke wholesale:

- existing seven-page `McpPlannerService` planning;
- full `Stage1bCoordinatorService` acquisition pipeline;
- Brand DNA extraction/archive merely to make Preview ready;
- Product/Competitor/Instagram/Performance acquisition prerequisites.

## 15. Frozen architecture summary

```text
Gatekeeper ADMITTED + confirmed Industry
        ↓
Reuse same-run valid Gatekeeper Evidence
        ↓
IE requests provider-neutral Brand Preview website Evidence
        ↓
DE internal modes:
Direct HTTP → Zyte HTTP → Zyte rendered
        ↓
Cheerio normalization
        ↓
Evidence sufficiency check after each useful acquisition step
        ├── sufficient → EARLY STOP → IE synthesis attempt
        └── insufficient → return bounded insufficiency
                             ↓
                       IE may request Gemini
                       URL Context + public-web
                       enrichment/fallback
        ↓
No full Surface crawl before Preview
```

This design is frozen for Product / Architecture. Provider/runtime implementation must not begin until separately authorized.
