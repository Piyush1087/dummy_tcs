# Gatekeeper v1 — Data Extraction Capability Contracts

Status: implementation-aligned contract for review. Business/admission policy remains frozen in Intelligence authority.

## Common execution envelope

Every capability execution exposes:

- `capabilityId`
- `acquisitionRunId`
- availability: `AVAILABLE | PARTIALLY_AVAILABLE | UNAVAILABLE`
- quality: `VALID | DEGRADED | STALE | INVALID`
- quality flags
- provider/model metadata where applicable
- provenance
- connection state
- bounded technical attempt count
- latency/usage telemetry
- structured technical errors

Common provider error vocabulary:

`CONFIGURATION_ERROR`, `AUTHENTICATION_FAILED`, `CAPABILITY_NOT_AVAILABLE`, `MODEL_NOT_AVAILABLE`, `REQUEST_TIMEOUT`, `NETWORK_ERROR`, `PROVIDER_UNAVAILABLE`, `PROVIDER_ERROR`, `RATE_LIMITED`, `INVALID_PROVIDER_RESPONSE`, `STRUCTURED_OUTPUT_INVALID`, `GROUNDING_UNAVAILABLE`, `PROVENANCE_INCOMPLETE`, `EMPTY_RESULT`, `RETRY_EXHAUSTED`.

Technical retries are bounded to the currently requested provider capability only. Cross-provider escalation is prohibited in this layer.

## 1. gatekeeper_primary_web_assessment

Requested provider/model for frozen Gatekeeper v1: Google Gemini / `gemini-2.5-flash`.

Input:

- acquisition run id
- Intelligence-requested model id
- normalized owned URL
- Intelligence-owned assessment instruction
- structural output schema
- optional timeout override

Execution:

- Gemini URL Context enabled
- Gemini Google Search grounding enabled
- same model/capability technical retry only
- output parsed and structurally validated after the grounded call

Evidence provenance:

- URL Context retrieval metadata → `OWNED_DOMAIN`
- Google Search grounding chunks → `PUBLIC_WEB_SEARCH`

Quality flags include `OWNED_DOMAIN_CONTEXT_MISSING` and `PUBLIC_WEB_GROUNDING_MISSING` when the provider result lacks the corresponding provenance class.

Provider limitation for Product Architecture review: current Google documentation supports URL Context and Google Search on Gemini 2.5 Flash, but provider-enforced structured output combined with built-in tools is documented for Gemini 3-series models. The implementation therefore keeps frozen Gemini 2.5 Flash, asks the grounded call for JSON, parses it and validates it against the Intelligence-supplied structural schema. It does not silently change models.

## 2. company_public_web_research

Provider: Parallel AI.

Input:

- acquisition run id
- Intelligence-supplied research objective
- Intelligence-supplied search queries
- optional session id
- optional content budget

Output Evidence preserves:

- search id
- session id
- source URL
- title
- publish date
- excerpts
- provider warnings/usage where returned

Every source row maps to `PUBLIC_WEB_RESEARCH` provenance. The capability does not return or infer a Gatekeeper admission outcome.

Rate-limit and transient provider failures may retry only within the configured bounded technical retry budget. `Retry-After` is honored up to the local bounded delay cap.

## 3. openai_structured_assessment

Provider: OpenAI Responses API.

Input:

- acquisition run id
- Intelligence-selected model id (required; no default in Data Extraction)
- Intelligence-owned assessment instruction
- approved Evidence context
- Evidence references
- structural output schema
- optional timeout override

Execution uses provider structured output with JSON Schema and `store: false`. Evidence provenance points back to the supplied approved Evidence references as `APPROVED_EVIDENCE_CONTEXT`.

The Data Extraction layer does not select an OpenAI model and does not invoke this capability unless Intelligence requests it.

## Configuration references

Backend secret/config references required for these capabilities:

- `GEMINI_API_KEY`
- `GEMINI_REQUEST_TIMEOUT_MS`
- `PARALLEL_API_KEY`
- `PARALLEL_SEARCH_TIMEOUT_MS`
- `PARALLEL_SEARCH_MAX_CHARS_TOTAL`
- `OPENAI_API_KEY`
- `OPENAI_REQUEST_TIMEOUT_MS`
- `DATA_EXTRACTION_PROVIDER_MAX_ATTEMPTS`

No secret values belong in this repository, Evidence, telemetry or prompts.
