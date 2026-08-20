# Gatekeeper v1 — Gemini Primary Model Authority Amendment

**Date:** 2026-08-20  
**Status:** FROZEN AMENDMENT  
**Scope:** Gatekeeper v1 primary Gemini model only

## Decision

The frozen Gatekeeper v1 primary Gemini model is amended from:

```text
gemini-2.5-flash
```

to:

```text
gemini-3.6-flash
```

This amendment supersedes only the model identifier references in the existing Gatekeeper v1 Product & Execution Authority and runtime execution profile.

## Reason

Credentialed provider verification against the active Gemini API project returned:

```text
HTTP 404
status: NOT_FOUND
model: models/gemini-2.5-flash
normalized Data Extraction error: MODEL_NOT_AVAILABLE
```

The provider response stated that `gemini-2.5-flash` is no longer available to new users/projects and instructed migration to `gemini-3.6-flash`.

The failure occurs on a basic model call before URL Context or Google Search tooling is exercised. It is therefore a model-access/availability constraint, not an Evidence-tool, provenance, API-version, retry, or fallback-order defect.

## Unchanged authority

The following remain frozen and unchanged:

```text
provider: GEMINI
primary capability: gatekeeper_primary_web_assessment
owned-domain acquisition: URL Context
public-web acquisition: Google Search Grounding
provenance classes:
  - OWNED_DOMAIN
  - PUBLIC_WEB_SEARCH
```

The primary execution shape remains:

```text
Gemini primary model
+ URL Context
+ Google Search Grounding
        ↓
grounded provider response
        ↓
structural validation
        ↓
normalized Evidence + split provenance
```

Provider ordering remains:

```text
Gemini primary
→ Parallel AI when the Intelligence execution profile requests escalation
→ OpenAI approved model when the Intelligence execution profile requests escalation
```

Data Extraction must not autonomously switch models or providers.

## Implementation requirement

The Intelligence runtime must request:

```text
provider: GEMINI
model: gemini-3.6-flash
capability: gatekeeper_primary_web_assessment
```

Data Extraction must execute the exact requested model and preserve `OWNED_DOMAIN` / `PUBLIC_WEB_SEARCH` provenance independently.

Any backend defaults specifically representing the Gatekeeper primary Gemini model should be reconciled to `gemini-3.6-flash`. Generic Gemini defaults used by unrelated processors must not be changed merely because this Gatekeeper authority changed.

## Verification gate

Before Gatekeeper activation, run a credentialed smoke test using exactly `gemini-3.6-flash` and verify:

1. basic model execution succeeds;
2. URL Context executes successfully;
3. Google Search grounding executes successfully;
4. combined execution succeeds;
5. at least one `OWNED_DOMAIN` provenance record is produced when the owned URL is retrieved;
6. at least one `PUBLIC_WEB_SEARCH` provenance record is produced when search grounding is used;
7. structured output/validation succeeds under the approved Gatekeeper v1 contract;
8. no cross-provider switching occurs inside Data Extraction.

## Prior verification retained

The prior `gemini-2.5-flash` failure remains useful evidence and must continue to normalize as:

```text
MODEL_NOT_AVAILABLE
```

The verified Data Extraction error-normalization fix should be retained.

## No other product change

This is a provider lifecycle amendment only. It does not change Gatekeeper admission logic, confidence policy, reason codes, manual-review policy, Evidence semantics, fallback triggers, or downstream handoff.
