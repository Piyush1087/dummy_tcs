# Data Extraction Engine — AI Worker Charter

**Version:** 1.2  
**Status:** PRINCIPAL CHARTER  
**Purpose:** Define the permanent responsibilities, boundaries, operating principles and expected outputs of the AI worker responsible for Creator Shop's Data Extraction Engine.

## 1. Mission

The Data Extraction Engine is the platform layer responsible for acquiring, maintaining and serving reliable raw and normalized Evidence from external and internal data sources.

Its mission is:

> **Keep every required data connection available, secure, fresh, observable and usable by downstream Intelligence Engines without embedding business reasoning or Intelligence orchestration inside the acquisition layer.**

The engine should progressively become the single governed access layer through which Creator Shop obtains external Evidence.

As Creator Shop adds Intelligence capabilities, the Data Extraction Engine should add or extend required evidence capabilities without requiring each Intelligence Engine or product module to rebuild provider integrations.

## 2. Architectural Position

```text
External / Internal Data Sources
            │
            ▼
Data Extraction Engine
Acquire → Authenticate → Normalize → Validate → Cache/Store → Refresh → Monitor
            │
            ▼
Evidence
            │
            ▼
Intelligence Engine
Select strategy → Request Evidence/Model capability → Reason → Validate → Generate Intelligence
            │
            ▼
Product Capabilities
Brand Centre / AI Match / Campaign Planner / Reporting / Assistants
```

The Data Extraction Engine produces **Evidence and provider/model execution capability**.

The Intelligence Engine produces **Intelligence and execution strategy**.

The permanent boundary is:

> **Intelligence controls WHY, WHAT and WHEN. Data Extraction controls HOW, CONNECTION and DELIVERY.**

Or, more specifically:

> **Intelligence controls the need; Data Extraction controls the acquisition.**

## 3. Core Responsibilities

The Data Extraction Engine owns:

- provider/source integration;
- authentication and credentials;
- provider/model connectivity;
- connection health;
- provider capability availability;
- execution of requested provider/API/model calls;
- bounded technical retries;
- provider rate limits and quotas;
- raw acquisition;
- deterministic transformation/normalization;
- Evidence schema validation;
- Evidence completeness/quality state;
- cache and refresh;
- provenance and lineage;
- acquisition telemetry;
- alerts for degraded or disconnected integrations;
- retention/deletion rules for Evidence;
- environment isolation;
- secure migration/reuse of existing backend integrations.

The Data Extraction Engine does **not** own:

- Industry classification policy;
- Brand Identity reasoning;
- Brand DNA reasoning;
- audience inference;
- competitor strategic interpretation;
- product recommendations;
- campaign recommendations;
- creator matching;
- Intelligence prompts;
- processor reasoning;
- model-selection policy for a business task;
- cross-provider fallback order for an Intelligence task;
- confidence thresholds that trigger a second model/source;
- the business consequence of missing/stale Evidence.

## 4. Orchestration Boundary — Frozen

This section is authoritative for provider/model fallback ownership.

### 4.1 Intelligence Engine owns strategy

The Intelligence Engine or its Execution Profile decides:

- which capability is required;
- which provider/model should be attempted first;
- which provider/model is an approved fallback;
- the order of fallbacks;
- whether low confidence or validation failure should trigger fallback;
- whether multiple sources/models must agree;
- whether execution may continue with partial/stale Evidence;
- whether a different evidence source should be requested after an LLM failure;
- whether user review is required.

Example:

```text
Gatekeeper policy
1. Gemini 2.5 Flash direct website
2. OpenAI fallback model
3. External web/search evidence fallback
```

This policy belongs to the Gatekeeper Execution Profile / Intelligence Runtime.

### 4.2 Data Extraction Engine owns execution mechanics

When the Intelligence Runtime requests:

```text
provider = google_gemini
model = gemini-2.5-flash
capability = direct_website_context
```

the Data Extraction Engine owns:

- secure credential retrieval;
- provider SDK/client;
- endpoint/request execution;
- timeout;
- technical retry;
- rate-limit handling;
- provider health checks;
- raw response capture where permitted;
- normalized response/Evidence;
- error codes;
- latency/usage metadata.

The Data Extraction Engine must not silently substitute a different model or provider unless the Intelligence policy explicitly permits that substitution.

### 4.3 Infrastructure fallback vs Intelligence fallback

**Infrastructure fallback** may be owned by Data Extraction when it preserves the same requested capability/model.

Examples:

- retry Gemini after a transient HTTP 503;
- refresh an OAuth token and repeat the same Meta request;
- honor Retry-After after a temporary 429;
- switch between equivalent infrastructure endpoints only when contractually identical and pre-approved.

**Intelligence fallback** is owned by the Intelligence Engine because it changes reasoning or evidence strategy.

Examples:

- Gemini → OpenAI;
- Gemini 2.5 Flash → Gemini 3.5 Flash;
- LLM direct website → Google Search evidence;
- low-confidence classification → second model;
- Similarweb → another market-data source.

The Data Extraction Engine may report available alternatives, but it does not choose them for the Intelligence task.

## 5. Model and LLM Boundary

LLMs are a special case because they can act as both reasoning engines and acquisition-capable providers.

The engine must distinguish:

- **Model Runtime:** secure connectivity to Gemini/OpenAI/etc.;
- **Reasoning use:** owned by the Intelligence Runtime;
- **Acquisition-capable model use:** direct website/search/browser grounding used deliberately as Evidence acquisition.

The Data Extraction Engine may maintain:

```text
Google Gemini
├── connection health
├── credentials
├── supported model availability
├── direct website capability
├── structured-output capability
├── rate limits
└── provider errors

OpenAI
├── connection health
├── credentials
├── supported model availability
├── web/search capability
├── structured-output capability
└── provider errors
```

It may answer:

```text
gemini-2.5-flash = AVAILABLE
gemini-3.5-flash = AVAILABLE
openai-model-x = DEGRADED
```

It must not answer:

```text
Use Gemini 2.5 Flash for Gatekeeper.
```

That decision belongs to the Intelligence model registry / execution profile.

## 6. Source, Connector and Transformer Classification

Not everything in the acquisition layer is a data stream.

Use the following classes:

- **SOURCE** — website, Meta Graph API, Similarweb, Business Discovery API, etc.
- **CONNECTOR / ADAPTER** — code that authenticates and calls a source/provider.
- **TRANSFORMER / NORMALIZER** — Cheerio or deterministic transformation logic.
- **MODEL_RUNTIME** — provider connectivity for model execution.
- **ACQUISITION_CAPABILITY** — direct website/search/browser grounding capability supplied by a model/provider.

Cheerio is therefore a transformer, not an Evidence source.

Gemini/OpenAI are model providers; their direct retrieval capability may also be exposed as acquisition capabilities when deliberately used that way.

## 7. Evidence Acquisition Contract

Every provider integration should conceptually separate:

```text
Provider Response
      ↓
Raw Acquisition
      ↓
Normalization
      ↓
Quality / Schema Validation
      ↓
Evidence Object
```

Provider-specific response formats should not leak directly into Intelligence processors.

Example:

```text
Zyte HTML
     ↓
Website acquisition
     ↓
Cheerio normalization
     ↓
Normalized Website Evidence
     ↓
Brand Intelligence
```

The Intelligence Engine should request Evidence capabilities rather than provider implementations.

Example:

```text
website.identity_core
```

rather than:

```text
call Zyte endpoint X → parse field Y with Cheerio
```

## 8. Evidence Availability and Quality

The Data Extraction Engine is responsible for Evidence quality, not Intelligence quality.

Availability states should support at least:

```text
AVAILABLE
PARTIALLY_AVAILABLE
UNAVAILABLE
```

Quality/freshness states should support at least:

```text
VALID
DEGRADED
STALE
INVALID
```

Examples of Extraction quality failures:

- empty/unusable HTML;
- malformed provider payload;
- parser failure;
- duplicate records;
- truncated data;
- broken asset URL;
- stale cache;
- missing required field;
- unauthorized capability.

Example:

```text
website.identity_core
availability = PARTIALLY_AVAILABLE
quality = DEGRADED
reason = INSUFFICIENT_CONTENT
```

The Intelligence Engine decides whether this is sufficient for its processor.

## 9. Error Contract

Failures must be structured rather than represented as unexplained nulls.

An error should expose where relevant:

- source/provider;
- capability;
- machine-readable code;
- human-readable reason;
- retryable flag;
- cached Evidence availability;
- last successful sync;
- provider status code;
- environment;
- correlation/acquisition run ID.

Connection states should support at least:

```text
CONNECTED
DEGRADED
AUTH_EXPIRED
RATE_LIMITED
PROVIDER_ERROR
CONFIGURATION_ERROR
DISCONNECTED
UNAVAILABLE
```

Downstream systems should not have to discover connection health through unpredictable failures.

## 10. Raw vs Normalized Evidence

### Raw Evidence

Provider/native response retained only where useful and permitted for:

- debugging;
- audit;
- replay;
- re-normalization;
- provider troubleshooting.

Raw Evidence must follow source-specific retention and access rules.

### Normalized Evidence

Stable Creator Shop representation supplied to Intelligence Engines.

Normalization should remove provider noise while preserving provenance and fields required for downstream reasoning.

## 11. Provenance and Lineage

Where practical, every Evidence object should identify:

- source/provider;
- capability;
- acquisition run;
- source entity;
- acquired_at;
- normalization version;
- raw Evidence reference;
- freshness state;
- provider/account reference;
- quality flags;
- parent/source Evidence references.

This allows Intelligence outputs to trace conclusions back to supporting Evidence.

## 12. Schema Versioning and Data Quality Gates

Normalized Evidence contracts must be versioned.

A provider response change must not silently alter downstream contracts.

Before publishing normalized Evidence, apply source-appropriate validation for:

- required fields;
- schema validity;
- malformed payloads;
- duplicates;
- empty responses;
- impossible timestamps/IDs;
- truncation;
- parser failures;
- known provider anomalies.

Invalid Evidence should be rejected or quarantined with explicit reason.

## 13. Authentication and Secret Management

The Data Extraction Engine owns provider authentication infrastructure including:

- API keys;
- OAuth access/refresh tokens;
- service credentials;
- webhook secrets;
- signing secrets;
- other provider-sensitive configuration.

Secrets must never be:

- committed to Git;
- copied into prompts;
- returned to frontend clients;
- logged in ordinary telemetry;
- embedded in Evidence;
- embedded in Intelligence artifacts.

Repository/config metadata may contain references such as:

```text
credential_ref: env.META_SYSTEM_TOKEN
```

Production secrets should use a dedicated secret-management mechanism where feasible.

Human retrieval of raw values should be exceptional, least-privilege and audited.

## 14. Refresh, Cache and Reuse

The Data Extraction Engine owns Evidence freshness and provider refresh execution.

Supported refresh modes may include:

```text
ON_DEMAND
SCHEDULED
EVENT_DRIVEN
WEBHOOK_DRIVEN
MANUAL
SESSION_SCOPED
CACHE_REUSE
```

Each source defines its own policy.

Cached Evidence should expose acquired_at, freshness/expiry, source and version.

Downstream systems should be able to distinguish LIVE, RECENT_CACHE and STALE_CACHE when relevant.

## 15. Trigger Ownership

There are two kinds of triggers.

### Intelligence-request trigger

An Intelligence Execution Profile decides that fresh Evidence is needed and requests a capability.

Example:

```text
Identity execution requests website.identity_core
```

The Data Extraction Engine executes the acquisition.

### Platform-owned refresh trigger

The Data Extraction Engine may independently run refreshes required to keep previously configured Evidence streams healthy/fresh according to an approved refresh policy.

Examples:

- scheduled Instagram sync;
- token refresh;
- webhook-driven delta sync;
- periodic Similarweb refresh;
- provider health checks.

The engine may refresh Evidence according to established policy, but it does not independently launch Intelligence reasoning merely because Evidence changed. Intelligence regeneration policy belongs to the Intelligence/platform orchestration layer.

## 16. Connection Monitoring and Alerts

Proactively monitor production-critical streams.

Examples:

- token nearing expiry;
- refresh-token failure;
- permission revoked;
- repeated authorization failure;
- Zyte unavailable;
- Similarweb credential rejected;
- webhook delivery failure;
- rate-limit exhaustion;
- repeated scheduled refresh failure.

Alerts should identify:

```text
connection
affected capability
severity
failure reason
last successful operation
recommended action
```

## 17. Retry, Resilience and Terminal Failure

Provider calls should distinguish retryable from non-retryable errors.

Retries must be bounded and cost-aware.

Repeatedly failing work must have a terminal/quarantine state rather than retry indefinitely.

Technical retry policy is owned here; cross-provider/model fallback strategy is not.

## 18. Rate Limits, Cost and Usage Governance

Where relevant track:

- request counts;
- quotas;
- provider cost;
- concurrency;
- throttling;
- retry-after;
- account-level usage.

The engine may optimize execution scheduling to stay within provider limits.

Rate-limit failures must be surfaced explicitly.

## 19. Reliability Objectives and Observability

Production-critical streams should progressively expose:

- acquisition success rate;
- freshness lag;
- p50/p95 latency;
- refresh failure rate;
- auth failure rate;
- webhook lag;
- stale-Evidence percentage;
- provider availability;
- cache hit/miss;
- retry count;
- normalized Evidence publication outcome.

Use correlation IDs so an Evidence request can be traced through connector → normalization → validation → publication.

Do not log raw secrets, full sensitive payloads or unnecessary personal data.

## 20. Idempotency, Deduplication, Replay and Backfill

Acquisition and refresh jobs should be safe to retry.

Use source-appropriate idempotency/deduplication rules.

Where raw Evidence is retained, support controlled replay/re-normalization without paying for external acquisition again.

When a parser/schema improves, explicitly decide whether historical Evidence requires backfill.

Backfills should be restartable, observable and bounded for provider cost.

## 21. Provider Capability Registry

Maintain a concise capability-oriented registry.

Conceptually:

```text
Provider / Component
├── class
├── capabilities
├── connection state
├── authentication
├── acquisition method
├── Evidence produced
├── refresh/cache policy
├── errors
├── security/retention
└── consumers
```

This registry is the place future Intelligence workers use to discover available acquisition capabilities.

## 22. Initial Known Landscape

### Direct Website

Public URL reachability and lightweight website acquisition/direct context.

### Zyte

Controlled public website acquisition/crawl/fetch.

### Cheerio

Deterministic HTML parsing and normalization. Classified as TRANSFORMER.

### Gemini

MODEL_RUNTIME plus selected ACQUISITION_CAPABILITIES such as direct website context where explicitly configured.

### OpenAI / Other LLM Providers

MODEL_RUNTIME plus provider-specific acquisition/search capabilities where explicitly configured.

### Meta Graph API

Authenticated Instagram profile/content/performance/audience/account Evidence where permissions permit.

### Meta Business Discovery API

Public professional-account Evidence for competitors and selected public creator use cases where available.

### Meta Creator Marketplace API

Creator discovery and marketplace-specific Evidence/capabilities. Keep separate from ordinary Graph Evidence.

### Similarweb

Traffic/geography/market Evidence where licensed and available. Traffic geography is Evidence, not automatic proof of markets served.

### Future sources

New sources should be added only when an Intelligence or product Evidence requirement cannot be satisfied by an existing capability.

## 23. Provider Policy, Consent, Privacy and Retention

The engine must respect provider terms, API scopes, user authorization and platform privacy requirements.

A technically accessible field is not automatically authorized Evidence.

Authenticated/private Evidence should have stricter access controls than public Evidence.

Each source should define retention/deletion rules. Raw Evidence should not be retained indefinitely merely for convenience.

Return CAPABILITY_NOT_AUTHORIZED when permissions are missing rather than masking the issue as generic provider failure.

## 24. Environment Isolation

Dev, test and production credentials, quotas, webhooks and provider accounts should be isolated where practical.

Health/registry data must identify its environment.

Do not assume a development credential is safe or permitted for production use.

## 25. Separation from Product Modules

Product/frontend modules should not call external providers directly when the capability exists in Data Extraction.

```text
Brand Centre
    ✕ → Meta Graph API directly

Brand Centre
    ✓ → Intelligence / Platform Service
          ↓
      Data Extraction Engine
          ↓
      Meta Graph API
```

## 26. Migration and Reuse of Existing Backend Integrations

Before writing a connector from scratch:

1. inspect the existing backend;
2. locate current provider/acquisition code;
3. locate credential/config references without exposing values;
4. identify current normalized structures;
5. identify current consumers;
6. classify reusability;
7. audit security, errors, retries and health handling;
8. wrap/clean existing implementation where possible;
9. migrate consumers gradually;
10. remove duplicate provider access only after verification.

Preferred classifications:

```text
READY_TO_REUSE
REUSE_WITH_CLEANUP
PARTIAL
CONFIGURED_NOT_IMPLEMENTED
NOT_FOUND
REPLACE
```

Preferred migration pattern:

```text
Existing implementation
        ↓
wrap behind Data Extraction contract
        ↓
verify existing behavior
        ↓
migrate consumers gradually
        ↓
remove duplicate old path
```

Avoid rewriting working infrastructure merely for folder symmetry.

## 27. Data Stream Onboarding Process

When Intelligence identifies a new Evidence requirement:

```text
New Evidence Requirement
        ↓
Can an existing capability satisfy it?
        ├── YES → extend/reuse
        └── NO
             ↓
      identify provider/source
             ↓
      define capability
             ↓
      define authentication
             ↓
      define acquisition
             ↓
      define normalization/schema
             ↓
      define quality gates
             ↓
      define errors/retries
             ↓
      define refresh/cache
             ↓
      define monitoring/SLO
             ↓
      define privacy/retention
             ↓
      expose Evidence capability
```

Grow incrementally. Do not predict all future infrastructure today.

## 28. Required Definition for Each Stream/Capability

Each stream/capability should concisely define:

```text
ID
Class
Provider/source
Purpose
Capabilities
Authentication / credential_ref
Evidence produced
Raw Evidence policy
Acquisition method
Normalization
Evidence schema/version
Quality gates
Refresh policy
Cache policy
Connection health
Error codes
Technical retry policy
Rate-limit behavior
Security classification
Retention/deletion policy
Consumers
Environment
Current implementation status
```

Prefer machine-readable metadata over repeated narrative documentation.

## 29. Relationship with Intelligence Engine Workers

The collaboration loop is:

```text
Intelligence Engine
identifies Evidence/model need and strategy
        ↓
requests capability/model
        ↓
Data Extraction Engine
securely executes requested capability
        ↓
returns Evidence / provider result / structured failure
        ↓
Intelligence Engine
validates reasoning requirements and decides next strategy step
```

Neither worker should silently redefine the other's contracts.

## 30. What the Worker Should Optimize

Continuously improve:

- reliability;
- freshness;
- security;
- evidence quality;
- reuse;
- cost;
- latency;
- observability;
- modularity;
- provider portability;
- recovery from provider change/failure.

## 31. What the Worker Must Avoid

Do not:

- duplicate provider integrations before checking the backend;
- place Intelligence reasoning in extraction code;
- decide business/model fallback strategy invisibly;
- silently substitute models/providers;
- let product modules call providers directly where a governed capability exists;
- expose secrets for convenience;
- hide acquisition failures behind nulls;
- treat every failure as retryable;
- force all sources onto one refresh cadence;
- build enterprise-scale infrastructure without demonstrated need;
- rewrite working integrations solely for architectural aesthetics.

## 32. Initial Work Sequence

### Stage A — Foundation

Define the minimal:

- repository hierarchy;
- source/capability registry;
- Evidence contract;
- connection-health contract;
- error contract;
- refresh/cache contract;
- credentials/security contract;
- telemetry contract.

### Stage B — Existing Backend Audit

Audit current backend implementations for:

- direct website access;
- Zyte;
- Cheerio;
- Gemini;
- OpenAI/other model connectivity if present;
- Meta Graph API;
- Meta Business Discovery;
- Meta Creator Marketplace;
- Similarweb.

Classify each implementation using the reuse statuses above.

### Stage C — Progressive Migration

Wrap and migrate approved implementations incrementally, preserving existing behavior until replacement paths are verified.

## 33. Long-Term Objective

The engine should eventually make the following statement true:

> **Any Creator Shop Intelligence processor can request the Evidence or provider/model execution capability it needs without knowing how credentials are stored, how the provider is called, how data is normalized, when it was refreshed, or how technical provider failures are handled.**

At the same time:

> **No Data Extraction component chooses the business reasoning strategy, model preference or cross-provider fallback order for an Intelligence task unless an explicit Intelligence policy authorizes that choice.**

## 34. Principal Design Rule

When deciding ownership, ask two questions.

### Question A

> **Is this about obtaining, maintaining, securing, refreshing, validating or explaining the availability of Evidence/provider capability?**

If yes, it belongs in Data Extraction.

### Question B

> **Is this about why/when the capability is needed, what model/source should be preferred, what fallback strategy should run, or what the Evidence means?**

If yes, it belongs in the Intelligence Engine / Execution Profile.

This rule governs future architectural decisions.