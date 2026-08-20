# Gatekeeper v1 — Gemini 3.6 Flash Data Extraction Activation Amendment

**Date:** 2026-08-20  
**Status:** IMPLEMENTATION RECONCILIATION REQUIRED  
**Authority:** `intelligence/product_authority/gatekeeper_v1_model_authority_amendment_20260820.md`

## Purpose

Reconcile the verified Gatekeeper Data Extraction implementation after Product/Intelligence authority changed the primary Gemini model from `gemini-2.5-flash` to `gemini-3.6-flash`.

This is not a fallback-policy change and not a provider change.

## Required backend reconciliation

Preserve the existing capability interface:

```text
gatekeeper_primary_web_assessment
```

Preserve provider:

```text
GOOGLE_GEMINI
```

The Intelligence caller must now request:

```text
modelId = gemini-3.6-flash
```

Data Extraction must not silently substitute this model when another model id is requested; it continues to execute the exact caller-supplied model.

Reconcile only Gatekeeper-specific defaults/references that still encode `gemini-2.5-flash`.

Do not change generic Gemini model defaults used by unrelated processors unless a separate authority change exists.

## Preserve verified error normalization

The prior live call to `gemini-2.5-flash` returned provider HTTP 404 / `NOT_FOUND` because that model is unavailable to the active API project.

The locally verified fix mapping a model-specific 404 to:

```text
MODEL_NOT_AVAILABLE
```

must be retained.

Unrelated HTTP 404 failures should remain `PROVIDER_ERROR` unless separately proven to represent another normalized condition.

## Required smoke-test sequence

Use the existing secure `GEMINI_API_KEY` without printing it.

Execute using exactly:

```text
gemini-3.6-flash
```

Verify:

### Basic

No-tool model call succeeds.

### Search only

```text
tools: [{ googleSearch: {} }]
```

Confirm grounding metadata exists.

### URL Context only

```text
tools: [{ urlContext: {} }]
```

Confirm URL-context metadata exists.

### Combined Gatekeeper capability

```text
tools:
  - { urlContext: {} }
  - { googleSearch: {} }
```

Confirm normalized Evidence contains distinguishable provenance:

```text
OWNED_DOMAIN
PUBLIC_WEB_SEARCH
```

## Structured validation

Use the currently approved Gatekeeper structural validation path. Do not change business reasoning or output semantics solely because the model changed.

If Gemini 3.6 allows a cleaner provider-enforced structured-output implementation, treat that as a separate implementation optimization unless required for correctness. The immediate activation requirement is functional compatibility with the frozen Gatekeeper output contract.

## Regression gates

After reconciliation:

```text
npm run build
npm test
```

No-cross-provider-switching must remain PASS.

Parallel verification remains valid and does not need to be repeated unless its code changes.

OpenAI remains model-deferred and must not be invoked merely because the Gemini model changed.

## Readiness rule

`gatekeeper_primary_web_assessment` moves to READY only when a credentialed `gemini-3.6-flash` combined-tool smoke test succeeds with both provenance classes and structural validation.
