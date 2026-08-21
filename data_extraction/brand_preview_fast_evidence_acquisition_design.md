# Brand Preview — Fast Evidence Acquisition Design

**Status:** READY FOR PRODUCT / INTELLIGENCE REVIEW  
**Owner:** Data Extraction Engine  
**Scope:** Evidence acquisition required to satisfy the frozen Brand Preview `PREVIEW_READY` contract after Gatekeeper admission and confirmed supported Industry.  
**Non-goal:** This design does not define Brand meaning, Audience semantics, creator-marketing reasoning, archetype selection, processor prompts, or provider fallback policy owned by Intelligence.

## 1. Design objective

Brand Preview should receive the smallest evidence package that gives Intelligence a credible opportunity to synthesize:

- grounded Brand understanding;
- at least one credible Audience hypothesis;
- at least one creator-marketing opportunity;
- at least one canonical creator-archetype recommendation.

The acquisition principle is:

```text
reuse existing evidence
        ↓
fast direct website acquisition
        ↓
lightweight deterministic extraction
        ↓
selective acquisition escalation only when evidence is insufficient
        ↓
stop as soon as the minimum evidence package is sufficient
```

Do not run the existing full Stage 1B / Surface-style crawl merely to make Brand Preview richer.

## 2. Evidence that should be reused from Gatekeeper

Do not reacquire or re-decide the following when the Gatekeeper result is fresh and traceable:

- normalized website URL/domain;
- reachability result and final reachable URL;
- redirect/content-quality signals;
- confirmed supported Industry at the confirmation boundary;
- English-evidence/serviceability signals where useful as context;
- commercial-destination signals, including app/store/booking/lead-generation modes;
- Gatekeeper acquisition provenance indicating owned-domain and public-web evidence availability;
- admission execution timestamp and acquisition-run references.

Gatekeeper semantic admission signals remain Gatekeeper outputs. Reuse here means avoiding duplicate acquisition and preserving source/provenance references; Data Extraction does not promote admission-only conclusions into canonical Brand Intelligence.

Gatekeeper provenance alone is not normally enough to synthesize Brand Preview because the current Gatekeeper capability delivers bounded assessment output/provenance rather than a reusable clean website-content package. Fast Brand Analysis therefore normally acquires lightweight website content after admission.

## 3. Recommended normal acquisition path

The normal path should be:

```text
Gatekeeper reusable evidence
        +
homepage
        +
About / company-story page
        +
one primary commercial / offering page
        ↓
Cheerio clean-text + metadata normalization
        ↓
Evidence sufficiency check
        ↓
EARLY STOP if sufficient
```

This is the preferred default across D2C, SAAS_AI, HEALTHCARE and OFFLINE_SERVICES.

### 3.1 Page 1 — Homepage

Always attempt first unless a fresh reusable homepage Evidence object already exists from the same onboarding run.

Extract at minimum:

- title / OpenGraph title;
- description / OpenGraph description;
- visible clean body text;
- logo candidate where available;
- navigation labels;
- same-origin links;
- obvious external commercial destinations where relevant;
- page URL/final URL and acquisition metadata.

Homepage is also the page-discovery surface for choosing the next two pages.

### 3.2 Page 2 — About / company-story page

Preferred second page when discoverable through same-origin navigation/link inventory.

Candidate path/label signals include:

```text
about
about-us
our-story
our-company
company
who-we-are
mission
```

Its role is to add first-party context that is often missing from conversion-heavy homepages.

If no credible About page exists, do not force one; substitute the next highest-signal first-party context page.

### 3.3 Page 3 — primary commercial / offering page

Select one page that most clearly represents what the business offers or how a customer acts.

Industry-adaptive examples:

- D2C: collection/category page or representative flagship PDP when the homepage is insufficient;
- SaaS/AI: product/features/solutions/pricing page;
- Healthcare: treatments/services/specialties/consultation page;
- Offline services: services/experiences/locations/booking page;
- app-first: product/features/download page or the externally linked canonical App Store / Play Store destination when first-party site content is intentionally thin.

This is **one representative commercial page**, not catalogue acquisition.

## 4. Minimum high-signal page set

### Normal target

```text
1. Homepage
2. About / company context
3. One primary commercial / offering page
```

Yes: this should be the normal Brand Preview path.

### Minimum successful variants

The three-page target is not a rigid count requirement. Evidence acquisition may stop with fewer pages when content density is high.

Acceptable examples:

```text
Rich homepage + About

Rich homepage + offering page

Rich homepage
+ fresh Gatekeeper owned-domain/public-web Evidence
+ clearly evidenced commercial destination
```

Conversely, one thin homepage must not be treated as sufficient merely because it is technically readable.

## 5. Direct HTTP vs Cheerio vs Zyte

### 5.1 Direct HTTP acquisition — first choice

Use direct native HTTP GET as the normal acquisition mechanism for these bounded pages when:

- the page returns successful HTML;
- redirects remain safe/expected;
- content length is usable;
- meaningful visible/server-rendered text exists;
- navigation and key links are discoverable;
- no strong bot/challenge shell is detected.

Do not route every Preview page through Zyte by default.

Direct HTTP should use the existing Data Extraction network-safety controls and bounded per-request timeouts.

### 5.2 Cheerio — normal deterministic transformer

Cheerio is sufficient when acquired HTML contains the content required for deterministic normalization.

Use it to produce a compact normalized page Evidence object containing:

- `clean_text`;
- title;
- page type;
- internal links;
- selected metadata/logo candidate;
- optional navigation labels;
- acquisition/provenance metadata.

The existing `TextContextBuilderService` is a strong reusable basis, but Preview implementation should expose a bounded capability rather than invoke the complete Surface pipeline.

Cheerio is a transformer, not an acquisition fallback.

### 5.3 Zyte — selective escalation

Escalate a requested page to Zyte when direct acquisition fails or produces unusable evidence because of conditions such as:

- blocked/denied direct HTTP despite Gatekeeper having admitted the domain;
- challenge/interstitial shell;
- empty or materially short HTML;
- content requiring rendering;
- page content not represented in the static response;
- repeated transient direct-fetch failure within the bounded direct technical retry policy.

Recommended page-level escalation:

```text
direct HTTP
   ↓ unusable
Zyte httpResponseBody
   ↓ still unusable
Zyte browserHtml
```

This is same-source capability escalation within Data Extraction mechanics. It must remain bounded per requested page.

Do not automatically Zyte-fetch every discovered link.

## 6. Additional pages — when actually needed

Acquire a fourth page only when the normal evidence package still has a clear acquisition gap.

Examples:

- homepage/About explain company identity but not what customers can actually buy/use;
- the selected commercial page is a directory/shell with no useful offering text;
- SaaS site separates product capability from customer/use-case context and both are needed for a minimally useful evidence package;
- Healthcare or offline service site separates service description from patient/customer journey/location/booking context;
- app-first brand has a thin marketing homepage and the app-store destination supplies the clearest product/customer-facing description.

Default maximum before non-website escalation:

```text
3 pages normal
4 pages exceptional
```

Do not expand to the existing 5–7 page Stage 1B crawl solely because more links are available.

## 7. Evidence sufficiency for IE synthesis attempt

Data Extraction should not decide whether the Brand is attractive, who the Audience is, or which archetype is correct.

It should report whether the acquired package contains enough **source material dimensions** for IE to attempt the frozen Preview synthesis.

Recommended extraction-level sufficiency contract:

### Required reusable facts

- reliable brand identity reference (`brand_name` from existing identity state or evidence);
- authoritative website URL/domain;
- confirmed supported Industry;
- acquisition provenance for every new page.

### Required content coverage

The normalized package should contain grounded text supporting all three evidence dimensions below:

1. **Brand/proposition context**  
   First-party text describing what the business is/offers or the problem/use context it serves.

2. **Customer/use-context signal**  
   First-party or approved public evidence exposing intended customer, use case, decision context, need, experience or reason-to-engage. No specific Audience conclusion is made by Data Extraction.

3. **Commercial/offering/conversion signal**  
   Evidence of an offering, service, capability, product, booking/install/signup/lead journey, or other externally verifiable customer action.

Data Extraction may report each dimension as:

```text
PRESENT
WEAK
ABSENT
```

These are evidence-coverage states, not Intelligence confidence.

### Attemptable package

Recommend reporting `EVIDENCE_SUFFICIENT_FOR_PREVIEW_SYNTHESIS = true` when:

- required reusable facts are present;
- Brand/proposition context = PRESENT;
- at least one of customer/use-context or commercial/offering signal = PRESENT and the other is at least WEAK;
- usable first-party clean text exists from at least one page;
- evidence is not dominated by boilerplate/challenge/placeholder content;
- source/provenance references are intact.

IE remains responsible for determining whether that package can actually produce the required Preview narrative, Audience, opportunity and archetype outputs.

## 8. Early-stop rule

Acquisition should stop immediately once the above evidence-sufficiency package is achieved.

Canonical early-stop rule:

```text
IF
  Gatekeeper/identity facts are reusable
  AND Brand/proposition evidence is PRESENT
  AND customer/use-context evidence >= WEAK
  AND commercial/offering/conversion evidence >= WEAK
  AND at least one of those latter two dimensions is PRESENT
  AND provenance/quality gates pass
THEN
  stop website acquisition
  deliver normalized package to IE
```

Do not wait for:

- more audience clues merely to produce 2–3 groups;
- more pages to produce three opportunities;
- product catalogue completeness;
- competitor discovery;
- maximum archetype recommendation count;
- visual palette/tone extraction;
- Instagram connection;
- full Brand DNA.

The frozen Preview contract permits one credible Audience group, one opportunity and one archetype; acquisition must respect that boundary.

## 9. Gemini URL-context / public-web role

For Brand Preview, Gemini acquisition-capable evidence should **not** be the normal first website-content path when the first-party pages are cheaply accessible through direct HTML.

Recommended role order:

### A. Reuse

Reuse fresh Gatekeeper Gemini provenance/signals from the immediately preceding admission run. Do not rerun the same Gatekeeper acquisition simply to restate serviceability evidence.

### B. Enrichment / corroboration

Gemini URL Context + public-web search may be requested by Intelligence when first-party evidence is usable but a specific evidence dimension remains weak and IE requires additional grounded context.

Data Extraction executes the requested Gemini capability and returns distinct `OWNED_DOMAIN` / `PUBLIC_WEB_SEARCH` provenance.

### C. Fallback for weak website evidence

Gemini may serve as a requested acquisition fallback when direct/Zyte website evidence cannot provide enough content, especially for:

- app-first companies with intentionally sparse sites;
- brands whose public identity is documented more clearly in reputable external sources;
- sites inaccessible to ordinary HTML acquisition but accessible through approved Gemini URL context.

The decision to request Gemini enrichment/fallback belongs to the IE execution profile. Data Extraction must not independently decide `website weak → Gemini` across provider boundaries.

## 10. App-first and weak-website brands

### App-first

Do not penalize app-first brands for lacking a catalogue or transaction-heavy website.

Use:

- Gatekeeper `commercial_destination_types`;
- homepage/company page;
- product/features/download page where available;
- canonical App Store / Play Store destination linked by the brand when needed;
- IE-requested Gemini/public-web evidence if first-party web content remains too thin.

The minimum evidence package may describe the app/platform and externally evidenced capabilities without acquiring internal app content.

### Weak but legitimate website

If the website is reachable but sparse:

1. use available first-party homepage/About/offering evidence;
2. attempt the one most useful additional destination if evident;
3. use Zyte only when the problem is technical rendering/access;
4. report `PARTIALLY_AVAILABLE` / weak coverage when content is genuinely sparse;
5. allow IE to request approved public-web/Gemini corroboration when required.

Never manufacture page density by crawling legal, careers, privacy, press archives or unrelated blog pages.

## 11. Timeout and escalation boundaries

These are proposed **design targets to benchmark**, not product SLAs.

### Direct path

- direct HTTP per page: target budget ~3–5 s; hard ceiling should remain materially below the existing 8–10 s admission/enricher fetch budgets where practical;
- homepage first;
- once homepage discovers candidates, About + offering may execute in parallel;
- Cheerio/local normalization should be negligible relative to network time.

### Zyte path

Reuse the existing ~15 s Zyte request timeout as an upper technical ceiling initially.

Avoid serial multi-page Zyte chains. Escalate only failed/weak pages and parallelize independent page acquisitions within bounded concurrency.

### Gemini/public-web path

Use the established provider timeout/retry contract from Data Extraction. A Gemini enrichment request should be treated as a selective escalation path rather than a prerequisite to normal Preview acquisition.

### Whole acquisition envelope

Recommended initial target bands after Gatekeeper completion:

```text
NORMAL — direct HTTP + Cheerio, 2–3 pages:
~1–5 s typical target
~8 s soft upper band

SELECTIVE ZYTE — one or more requested pages need provider acquisition/rendering:
~5–20 s

GEMINI / PUBLIC-WEB ENRICHMENT REQUESTED BY IE:
~7–15 s additional typical band based on current provider behavior

HEAVILY ESCALATED BUT STILL PREVIEW-BOUNDED:
prefer terminal/recovery around ~20–30 s rather than expanding into a full Surface crawl
```

Actual p50/p95 must be measured in runtime telemetry and these bands revised from evidence.

## 12. Recoverable vs non-recoverable acquisition states

### Recoverable acquisition states

Return a recoverable technical/evidence state when a useful Preview may still be possible after bounded retry or a different IE-requested capability, for example:

- direct fetch timeout/network interruption;
- HTTP 429/temporary 5xx;
- Zyte temporary provider failure;
- rendered-content requirement;
- one optional/high-value page missing while other evidence remains usable;
- first-party evidence too thin but approved public-web acquisition remains possible;
- Gemini/provider temporary failure where another allowed IE path exists.

These should map to structured availability/error state, not to product rejection.

### Non-recoverable for the current Preview acquisition attempt

Examples:

- Gatekeeper no longer has an admitted/confirmed-Industry precondition;
- authoritative domain becomes invalid or unsafe;
- every usable first-party/acquisition source remains empty/unreadable after all IE-approved capability paths are exhausted;
- no traceable evidence can establish reliable Brand/proposition context;
- required evidence cannot be obtained under provider authorization/policy constraints.

The acquisition layer should return explicit insufficiency/terminal state. Product/IE decides retry UX, manual recovery or abandonment.

## 13. Proposed normalized Preview evidence package

Conceptually deliver:

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
      acquisition_method: DIRECT_HTTP | ZYTE_HTTP | ZYTE_BROWSER | OTHER_APPROVED
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

This package contains Evidence and acquisition-quality state only. It must not contain Audience conclusions, opportunity recommendations or archetype decisions.

## 14. Reuse assessment of current backend

### Reuse directly / wrap

- `DiscoveryReachabilityService`: reuse its existing final URL/reachability/content signals from Gatekeeper; do not call it again solely for Preview when the result is fresh.
- native fetch patterns in `DiscoveryReachabilityService` / `MetaHtmlEnricher`: reusable basis for bounded direct page acquisition.
- `TextContextBuilderService`: reuse/wrap its Cheerio clean-text/title/link normalization.
- `ZyteHomepageStrategy.fetchHtml`: reuse its Zyte static → browser behavior as selective page escalation.
- existing Data Extraction Gemini Gatekeeper runtime/provenance mechanics: reusable if IE requests Gemini acquisition/enrichment.

### Do not invoke wholesale

- `McpPlannerService` seven-page planning behavior;
- `Stage1bCoordinatorService` full multi-page Zyte acquisition;
- Stage 2 Brand DNA extraction/archive pipeline.

Those flows are broader than Preview readiness.

## 15. Review decisions requested

No new Product semantic decision is required to approve this acquisition design if Product accepts that the normal path may stop after homepage + About + one offering page.

The following IE/runtime work remains intentionally unresolved until review:

1. exact Preview Evidence capability ID(s) and machine-readable schema;
2. exact IE rule for requesting Gemini/public-web enrichment when website coverage is weak;
3. whether first-party direct acquisition and Zyte page escalation are represented as one capability with internal equivalent acquisition modes or separate requested capabilities;
4. exact freshness window for reusing Gatekeeper/page Evidence within the continuous onboarding session;
5. measured runtime p50/p95 targets after implementation.

## 16. Recommended freeze

Freeze the Brand Preview normal acquisition strategy as:

```text
REUSE GATEKEEPER EVIDENCE
        ↓
DIRECT HOMEPAGE
        ↓
CHEERIO NORMALIZE + DISCOVER
        ↓
ABOUT + ONE OFFERING PAGE (parallel where available)
        ↓
SUFFICIENCY CHECK
        ├── sufficient → EARLY STOP → IE Preview synthesis
        └── insufficient
              ↓
          selective page-level Zyte
              ↓
          sufficiency check
              ├── sufficient → EARLY STOP
              └── insufficient → return partial/insufficient evidence
                                  and await IE-requested Gemini/public-web
                                  enrichment/fallback if allowed
```

This provides a materially faster boundary than the existing Surface pipeline while preserving truthful evidence quality and app-first support.