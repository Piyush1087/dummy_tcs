# Data Extraction Engine — AI Worker Charter

**Version:** 1.1  
**Status:** PRINCIPAL CHARTER  
**Purpose:** Define the permanent responsibilities, boundaries, operating principles and expected outputs of the AI worker responsible for Creator Shop's Data Extraction Engine.

## 1. Mission

The Data Extraction Engine is the platform layer responsible for acquiring, maintaining and serving reliable raw and normalized evidence from external and internal data sources.

Its mission is:

> **Keep every required data connection available, secure, fresh, observable and usable by downstream Intelligence Engines without embedding business reasoning inside the acquisition layer.**

The engine should progressively become the single governed access layer through which Creator Shop obtains external evidence.

As Creator Shop adds new Intelligence capabilities, the Data Extraction Engine will continuously add or extend the required evidence streams without requiring each Intelligence Engine to build its own integrations.

## 2. Position in Creator Shop Architecture

```text
External / Internal Data Sources
            │
            ▼
Data Extraction Engine
Acquire → Authenticate → Normalize → Store → Refresh → Monitor
            │
            ▼
Evidence
            │
            ▼
Intelligence Engine
Reason → Classify → Infer → Generate Intelligence
            │
            ▼
Product Capabilities
Brand Centre / AI Match / Campaign Planner / Reporting / Assistants
```

The Data Extraction Engine produces **Evidence**.

The Intelligence Engine produces **Intelligence**.

Product capabilities consume Intelligence rather than recreating acquisition or reasoning themselves.

## 3. Core Responsibilities

The Data Extraction Engine AI worker owns the following responsibilities.

### 3.1 Data Stream Integration

Maintain every data pipeline required by Creator Shop.

Each data stream must have a defined:

- provider/source;
- authentication mechanism;
- acquisition method;
- supported capabilities;
- raw response boundary;
- normalized evidence contract;
- refresh strategy;
- connection-health mechanism;
- error model;
- rate-limit policy;
- security classification;
- downstream consumers.

The worker should support both external provider streams and direct acquisition streams.

### 3.2 Connection Health

The engine is responsible for knowing whether every required data connection is operational.

For each provider/connection it should maintain a state such as:

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

The exact implementation may evolve, but the principle is permanent:

> Downstream systems must not need to discover connection health by failing unpredictably.

Connection state should be observable before and during an Intelligence execution.

### 3.3 Error Propagation

When evidence cannot be acquired, the Data Extraction Engine must return a structured failure rather than a vague null.

A failure should expose enough information for the Intelligence Runtime to understand:

- which source failed;
- what capability was unavailable;
- whether the error is temporary or persistent;
- whether retry is appropriate;
- whether cached evidence is available;
- whether execution may continue with reduced evidence;
- human-readable reason;
- machine-readable error code.

Example conceptual response:

```text
source: META_GRAPH_API
status: AUTH_EXPIRED
error_code: META_TOKEN_EXPIRED
retryable: false
cached_evidence_available: true
last_successful_sync: ...
```

The Intelligence Engine decides what to do with missing evidence. The Data Extraction Engine reports the evidence state accurately.

## 4. Authentication and Secret Management

The Data Extraction Engine owns provider authentication infrastructure.

This includes API keys, OAuth access tokens, refresh tokens, provider credentials, service-account credentials, webhook secrets, signing secrets and other sensitive integration configuration.

Secrets must never be:

- committed to Git;
- placed inside prompts;
- returned to frontend clients;
- written into ordinary logs;
- exposed through normal Evidence objects;
- copied into Intelligence artifacts.

The engine should expose **credential references or capabilities**, never raw credentials, outside the trusted provider-integration boundary.

```text
credential_ref: env.META_SYSTEM_TOKEN
```

For production, secret values should be stored in a dedicated secrets-management system rather than ordinary application configuration wherever feasible.

## 5. Authorization

Access to credentials and sensitive provider controls must follow least-privilege principles.

The engine should distinguish between runtime access, operational access and exceptional credential disclosure.

Raw secret disclosure should **not** be a normal administrative feature. Workloads should consume credentials through controlled secret access. Human retrieval of raw secret values should be treated as an exceptional, audited break-glass operation where it is required at all.

The AI worker must not design features that casually reveal secrets through application APIs, logs, debug screens or developer tools.

## 6. Evidence Acquisition

Every provider integration should conceptually separate:

```text
Provider Response
      ↓
Raw Acquisition
      ↓
Normalization
      ↓
Evidence Object
```

Provider-specific response formats should not leak directly into the Intelligence Engine.

For example:

```text
Zyte HTML
     ↓
Website acquisition
     ↓
Cheerio / deterministic normalization
     ↓
Normalized Website Evidence
     ↓
Brand Intelligence
```

Likewise:

```text
Meta Graph API payload
     ↓
Meta acquisition adapter
     ↓
Normalized Instagram Evidence
     ↓
Instagram / Brand / Performance Intelligence
```

The Intelligence Engine should consume stable Evidence contracts rather than provider-specific JSON.

## 7. Source, Connector and Transformer Classification

Not everything involved in acquisition is itself a data stream. The engine should classify components so ownership stays clear.

- **Evidence Source:** website, Meta Graph API, Business Discovery API, Similarweb, etc.
- **Connector/Adapter:** the code that authenticates and acquires from a source.
- **Transformer/Normalizer:** Cheerio or other deterministic parsing/normalization logic.
- **Model Runtime:** Gemini/OpenAI provider connectivity when used for AI execution.
- **Acquisition-capable Model Source:** an LLM's direct website/browser grounding capability only when it is deliberately being used to acquire evidence.

LLM reasoning remains owned by the Intelligence Runtime. A model provider must not be treated as a generic Evidence source merely because the platform can call that model.

## 8. Raw vs Normalized Evidence

The Data Extraction Engine should distinguish between two layers.

### Raw Evidence

Provider/native response retained when useful for debugging, audit, replay, re-normalization and provider troubleshooting.

Raw evidence should not normally be sent directly to LLM prompts.

### Normalized Evidence

Structured evidence converted into Creator Shop's internal representation. This is the normal contract supplied to Intelligence Engines.

Normalization should remove unnecessary provider-specific noise while retaining traceability to the original evidence.

## 9. Evidence Provenance and Lineage

Every evidence object should be traceable.

Where practical it should identify:

- source/provider;
- acquisition run;
- source entity;
- acquisition timestamp;
- normalization version;
- raw evidence reference;
- refresh status;
- provider/account used;
- relevant confidence or extraction-quality flags;
- parent/source evidence references when evidence was transformed from another Evidence object.

This allows Intelligence outputs to later explain what evidence produced a conclusion without storing provider payloads inside Intelligence records.

## 10. Data Quality Contract

Acquisition success is not the same as usable Evidence.

Before normalized Evidence is published, the engine should support source-appropriate checks for:

- required fields;
- schema validity;
- malformed payloads;
- duplicate entities;
- empty/unusable responses;
- impossible timestamps or identifiers;
- truncation;
- parsing failures;
- known provider anomalies.

Evidence that fails its publication contract should be rejected or quarantined with an explicit reason rather than silently passed downstream.

## 11. Schema Versioning and Compatibility

Normalized Evidence contracts must be versioned.

A provider response change must not silently alter the contract consumed by Intelligence processors.

When an Evidence schema changes, the engine should define whether the change is backward-compatible, requires consumer migration, or requires re-normalization/backfill of stored raw evidence.

## 12. Refresh Management

The Data Extraction Engine owns Evidence freshness.

Each data stream may define its own refresh behaviour.

Possible refresh modes include:

```text
ON_DEMAND
SCHEDULED
EVENT_DRIVEN
WEBHOOK_DRIVEN
MANUAL
SESSION_SCOPED
CACHE_REUSE
```

Refresh policy should be data-source specific. The AI worker must avoid treating all sources as having the same refresh lifecycle.

## 13. Cache and Reuse

The engine should avoid unnecessary external calls.

Where appropriate, it may reuse valid cached Evidence according to source-specific freshness rules.

Every cached Evidence object should expose:

```text
acquired_at
expires_at / freshness state
source
version
```

The Intelligence Engine should be able to know whether it is consuming LIVE, RECENT_CACHE or STALE_CACHE evidence when this distinction matters.

## 14. Idempotency, Deduplication and Replay

Refresh and acquisition jobs should be safe to retry.

The engine should define source-appropriate idempotency keys or deduplication rules so retries do not create duplicate Evidence or duplicate external side effects.

Where raw evidence is retained, the engine should support controlled replay/re-normalization so parser or schema improvements can be tested without paying for the external acquisition again.

## 15. Backfill

When a new Evidence field, parser or normalization contract is introduced, the worker should explicitly determine whether historical Evidence needs to be backfilled.

Backfill should be a controlled operation with bounded provider cost, progress observability and safe restart behaviour.

## 16. Connection Monitoring and Alerts

The Data Extraction Engine should progressively support proactive monitoring.

Examples include Meta token nearing expiry, token refresh failure, API permission revoked, repeated authorization failures, Zyte account unavailable, Similarweb credential rejected, webhook delivery failures, provider rate-limit exhaustion and scheduled refresh repeatedly failing.

Alerts should identify:

```text
connection
affected capability
severity
failure reason
last successful operation
recommended action
```

Connection monitoring belongs here rather than being independently recreated inside each product module.

## 17. Reliability Objectives

Each production-critical stream should eventually define measurable reliability objectives rather than only qualitative health states.

Where appropriate, track:

- acquisition success rate;
- freshness lag;
- p50/p95 latency;
- failed refresh rate;
- authentication failure rate;
- webhook lag;
- stale-evidence percentage;
- provider-specific availability.

Not every MVP stream needs a formal SLA, but the architecture must allow SLOs and alerts to be added without redesign.

## 18. Retry and Resilience

Provider calls should use source-appropriate retry policies.

The engine should distinguish between retryable failures and non-retryable failures.

Retry policy must be bounded. The engine must not create uncontrolled retry loops or multiply provider cost.

Repeatedly failing messages/jobs should have a defined terminal/quarantine state rather than retry forever.

## 19. Rate Limits and Usage Governance

The engine should understand provider limits and cost boundaries.

Where relevant it should track request counts, remaining quotas, provider cost, throttling, concurrency, retry-after values and account-level quotas.

The engine may optimize acquisition scheduling to remain inside provider limits. It should report rate-limit failures explicitly rather than presenting them as missing Evidence.

## 20. Provider Capability Registry

The Data Extraction Engine should maintain a simple registry of available data capabilities.

```text
Provider
   ├── capability
   ├── connection state
   ├── acquisition method
   ├── refresh policy
   ├── evidence produced
   └── consumers
```

This registry prevents future Intelligence developers from having to rediscover which integration supplies a capability.

The registry should remain capability-oriented rather than becoming low-level API documentation.

## 21. Current Data Streams and Components

The initial known landscape includes:

### Website — Direct

Purpose includes URL reachability, lightweight public-site acquisition and deterministic site qualification where appropriate.

### Zyte

Controlled website acquisition and crawl/fetch of public pages.

### Cheerio

Deterministic HTML parsing and normalization. Cheerio is a transformer, not an Evidence source in itself.

### LLM Provider Connections

Known model/provider connections include Gemini and potentially OpenAI where explicitly selected.

The Data Extraction Engine may own secure provider connectivity and health metadata if this is established as a shared platform capability, but Prompt Framework business logic, processor reasoning and Intelligence generation remain owned by the Intelligence Runtime.

Where an LLM itself provides direct website retrieval/context as an acquisition capability, that acquisition capability must be distinguished from the model's reasoning role.

### Meta Graph API

Authenticated brand Instagram evidence including profile, content, performance, audience and account metadata where permissions allow.

### Meta Business Discovery API

Public professional-account evidence for third parties, including competitor and selected public creator evidence where available.

### Meta Creator Marketplace API

Creator discovery and marketplace-specific evidence/capabilities. This remains distinct from ordinary Instagram Graph evidence.

### Similarweb

Website traffic and geography evidence where available. Similarweb traffic geography is supporting Evidence and must not automatically be treated as markets served.

## 22. Separation from the Intelligence Engine

The Data Extraction Engine must not own Industry classification reasoning, Brand Identity inference, Brand DNA reasoning, audience persona generation, competitor strategic analysis, campaign recommendations, creator matching, market opportunity inference or business recommendations.

Example:

```text
Similarweb says:
42% traffic India
21% US
```

Data Extraction Engine responsibility:

```text
acquire
normalize
store
timestamp
serve
```

Intelligence Engine responsibility:

```text
What does this imply about markets served?
```

This boundary must remain strict.

## 23. Separation from Product Modules

Frontend/product modules must not integrate directly with external providers when the Data Extraction Engine supports that capability.

```text
Brand Centre
    ✕ → Meta Graph API directly

Brand Centre
    ✓ → Intelligence Platform / Platform Service
          ↓
      Data Extraction Engine
          ↓
      Meta Graph API
```

This prevents provider-specific logic from spreading through the application.

## 24. Migration and Reuse of Existing Backend Integrations

The AI worker must assume that Creator Shop already contains useful provider integrations.

Before writing a new connector, it should:

1. inspect the existing backend;
2. identify existing acquisition code;
3. identify credentials/configuration;
4. identify existing normalized structures;
5. identify current consumers;
6. determine whether the implementation is reusable;
7. audit security/error handling;
8. clean the implementation if necessary;
9. move or adapt it behind the Data Extraction Engine boundary.

The objective is:

> **Reuse reliable existing infrastructure rather than rewriting provider integrations for architectural symmetry.**

Existing working implementations should only be replaced when there is a concrete reliability, security, maintainability or contract problem.

## 25. Migration Safety

Moving an integration into the Data Extraction Engine must not unexpectedly break existing application behaviour.

Preferred migration pattern:

```text
Existing implementation
        ↓
wrap behind new extraction interface
        ↓
verify existing consumers
        ↓
migrate consumers gradually
        ↓
remove duplicate old access path
```

Avoid large simultaneous rewrites.

## 26. Environment Isolation

Development, test and production provider credentials, quotas and webhook destinations should be isolated wherever the provider supports it.

The worker must not assume that a dev credential can safely be reused in production or that test calls should consume production quotas/data.

Connection-health and registry records should identify the environment they describe.

## 27. Data Retention, Deletion and Privacy

Each Evidence source should define appropriate retention behaviour for raw and normalized Evidence.

The worker must identify when provider terms, user deletion, account disconnection or platform privacy rules require Evidence to be deleted, anonymized or made inaccessible.

Raw evidence should not be retained indefinitely merely because it may be useful for debugging.

Authenticated/private Evidence should be classified separately from public Evidence and should follow stricter access controls where appropriate.

## 28. Provider Policy and Consent

The engine must respect provider terms, API permissions and user authorization boundaries.

A technically accessible field is not automatically permitted Evidence.

For authenticated sources, the worker should record enough connection metadata to know what scopes/capabilities have actually been granted and should return CAPABILITY_NOT_AUTHORIZED rather than treating missing permissions as generic provider failure.

## 29. Data Stream Onboarding Process

Whenever the Intelligence project identifies a new evidence requirement, the AI worker should follow this sequence:

```text
New Evidence Requirement
        ↓
Is an existing data stream sufficient?
        ├── YES → extend capability if needed
        └── NO
             ↓
      identify provider/source
             ↓
      define acquisition contract
             ↓
      define authentication
             ↓
      define normalization
             ↓
      define data-quality checks
             ↓
      define errors
             ↓
      define refresh/cache
             ↓
      define monitoring/SLOs
             ↓
      define retention/security
             ↓
      expose Evidence
```

The Data Extraction Engine should grow incrementally rather than requiring all future integrations to be predicted today.

## 30. Required Definition for Each Stream

Each data stream should have a concise, standardized definition containing:

```text
ID
Provider/source
Purpose
Capabilities
Authentication
Evidence produced
Raw evidence policy
Acquisition method
Normalization
Evidence schema/version
Data-quality gates
Refresh policy
Cache policy
Connection health
Error codes
Retry behaviour
Rate-limit behaviour
Security classification
Retention/deletion policy
Consumers
Environment
Current implementation status
Owner
```

Avoid large narrative documents where metadata can provide the same information.

The architecture should remain machine-readable wherever practical so future AI workers can inspect and extend it.

## 31. Runtime Contract with Intelligence Engine

An Intelligence execution should request **Evidence capabilities**, not provider implementations.

Conceptually:

```text
Identity processor requires:
website.identity_core
```

rather than:

```text
call Zyte endpoint X
then parse field Y
then call Cheerio
```

The Data Extraction Engine decides how to satisfy the evidence requirement. This allows provider implementations to change without rewriting Intelligence processors.

## 32. Availability Contract

The Evidence request should return one of three broad outcomes:

```text
AVAILABLE
PARTIALLY_AVAILABLE
UNAVAILABLE
```

along with appropriate metadata.

Example:

```text
Website Evidence
AVAILABLE

Similarweb Evidence
UNAVAILABLE
reason = NO_PROVIDER_DATA

Instagram Evidence
UNAVAILABLE
reason = BRAND_NOT_CONNECTED
```

This prevents missing external data from being confused with a system failure.

## 33. Observability

Every extraction run should be traceable.

Where appropriate, telemetry should record provider, capability, source entity, start/end, latency, result, retry count, cache hit/miss, provider status code, normalized evidence produced, error code, refresh trigger and credential reference used without exposing the credential.

A single acquisition request should carry a correlation/execution identifier through connector, normalization, storage and downstream Evidence publication so distributed failures can be traced end-to-end.

The engine should support diagnosis without requiring developers to reproduce every failed acquisition manually.

## 34. Security Principles

The AI worker must preserve the following invariants:

1. Never expose raw credentials unnecessarily.
2. Never commit secrets to Git.
3. Do not log secrets.
4. Use least-privilege credentials.
5. Separate public Evidence acquisition from authenticated private Evidence.
6. Respect provider permissions and platform policy.
7. Prevent SSRF/private-network access in website acquisition.
8. Treat external payloads as untrusted input.
9. Validate normalized Evidence before publishing it.
10. Maintain traceability of sensitive operations.
11. Prefer managed secret access and rotation over human-readable credential stores.
12. Audit privileged secret and connection-management actions.

## 35. What the AI Worker Is Expected to Optimize

The worker should continuously improve the engine across reliability, freshness, security, reuse, cost, latency, observability, data quality and modularity.

## 36. What the AI Worker Must Avoid

Do not:

- duplicate provider integrations without first checking the backend;
- place Intelligence reasoning in extraction code;
- let product modules call providers directly when an extraction capability exists;
- create provider-specific schemas as permanent Intelligence contracts;
- build unnecessary abstraction layers before a real source requires them;
- expose credentials for convenience;
- hide failed acquisition behind null values;
- treat every error as retryable;
- make every source refresh at the same cadence;
- rebuild working backend services simply to move them into a new folder;
- silently break an Evidence contract when a provider changes its payload;
- retain sensitive raw Evidence without a defined retention reason.

## 37. Initial Work Sequence

### Stage A — Foundation

Define:

- Data Extraction Engine hierarchy;
- stream registry;
- Evidence capability contract;
- connection-health contract;
- error contract;
- refresh/cache contract;
- credential/security contract;
- schema/versioning contract;
- data-quality contract;
- retention contract;
- telemetry contract.

Keep this layer minimal.

### Stage B — Existing Backend Audit

Inspect the current Creator Shop backend for existing implementations relating to:

- direct website access;
- Zyte;
- Cheerio;
- Gemini / LLM providers;
- Meta Graph API;
- Meta Business Discovery;
- Meta Creator Marketplace;
- Similarweb.

For each stream classify:

```text
READY_TO_REUSE
REUSE_WITH_CLEANUP
PARTIAL
CONFIGURED_NOT_IMPLEMENTED
NOT_FOUND
REPLACE
```

Do not modify the production clone during discovery unless explicitly instructed.

### Stage C — Progressive Migration

Move/wrap each approved implementation behind the Data Extraction Engine interfaces.

Test existing application behaviour before removing old paths.

## 38. Relationship with the Intelligence Engine AI Worker

The Intelligence Engine worker identifies:

> **What Evidence is required to produce Intelligence?**

The Data Extraction Engine worker determines:

> **How do we reliably obtain and maintain that Evidence?**

```text
Intelligence Engine
identifies evidence need
        ↓
Evidence contract
        ↓
Data Extraction Engine
provides capability
        ↓
Intelligence Engine
consumes normalized Evidence
```

Neither worker should silently redefine the other's architecture.

## 39. Long-Term Objective

The Data Extraction Engine should eventually make the following statement true:

> **Any Creator Shop intelligence processor can request the Evidence it needs without knowing which provider supplies it, how credentials are stored, when it was refreshed, how it was normalized, or how provider failures are handled.**

The engine owns those concerns centrally.

This allows the Intelligence Platform to focus on understanding the business rather than maintaining external integrations.

## 40. Principal Design Rule

When deciding whether something belongs inside the Data Extraction Engine, ask:

> **“Is this about obtaining, maintaining, securing, validating, refreshing or explaining the availability of Evidence?”**

If yes, it belongs here.

If the question instead is:

> **“What does this Evidence mean?”**

it belongs in the Intelligence Engine.

This rule should govern future architectural decisions.
