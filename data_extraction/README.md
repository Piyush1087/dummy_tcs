# Data Extraction Engine

Status: architecture boundary established for Gatekeeper v1 provider capabilities.

Authority remains `docs/organization/charters/data_extraction_engine_ai_worker_charter.md`.

This directory documents capability-oriented extraction contracts. It must not contain Gatekeeper admission reasoning, confidence thresholds, provider fallback ordering, or model-selection policy.

## Gatekeeper v1 capabilities

- `gatekeeper_primary_web_assessment` — Google Gemini execution requested by Intelligence; Gatekeeper v1 currently requests `gemini-2.5-flash` with owned URL Context and Google Search grounding. Provenance must distinguish `OWNED_DOMAIN` from `PUBLIC_WEB_SEARCH`.
- `company_public_web_research` — Parallel AI public-web research requested by Intelligence when the frozen execution profile calls for it. Returns traceable source Evidence rather than an admission conclusion.
- `openai_structured_assessment` — OpenAI structured execution over an Intelligence-approved Evidence context. Intelligence supplies the model id; Data Extraction must not select it.

## Boundary

Data Extraction owns provider connectivity, credentials, execution, bounded same-capability technical retry, timeouts, rate-limit handling, normalized Evidence, provenance, technical errors, Evidence quality and provider telemetry.

Intelligence owns which capability runs, which model/provider is requested, and all cross-provider escalation.

Data Extraction must never independently perform Gemini → Parallel, Gemini → OpenAI, or Parallel → OpenAI.

See `gatekeeper_v1_capability_contracts.md` for the normalized contracts implemented against the backend clone.
