# Brand Intelligence — Identity

**Status:** active freeze / reference implementation

## Purpose

Identity establishes the canonical facts required to know which brand the platform is operating on and to safely run downstream Brand Intelligence.

Identity is the first reference branch for the Creator Shop Intelligence architecture. Its metadata pattern will be reused across later branches and engines.

## Current onboarding flow

```text
Website URL entered
  ↓
Industry classification — direct Gemini website call
  ↓
Supported-industry check
  ↓
Minimal identity acquisition
  ↓
Normalized identity evidence
  ↓
Remaining Identity processing
  ↓
One-time Identity checkpoint
  ↓
Permanent lock of checkpoint anchors
  ↓
Surface Intelligence continues
```

### Gatekeeper implementation decision

For MVP, industry/sub-industry classification continues to use the existing direct Gemini website call. We are not inserting Zyte + Cheerio before this call because latency and null-content risk undermine the gatekeeper's purpose.

Architecturally, this classification is still an Identity processor. The implementation/acquisition mode does not move it outside the Intelligence System.

## One-time checkpoint

Before Surface Intelligence begins, the brand gets one normal-product-flow opportunity to review/correct:

- brand name;
- social handles;
- industry;
- sub-industry;
- country;
- website currency.

After confirmation, these values become permanent Identity anchors and are not refreshable/overwritable by later Intelligence executions. Any exceptional support/admin correction, if supported, is outside the normal object lifecycle.

## Currency distinction

`website_currency` records the primary currency exposed by the brand website and is used as context for catalogue/product intelligence.

`reporting_currency` is Creator Shop's platform reporting and transaction currency. It is deterministically derived from confirmed country and is restricted to:

- India → INR
- United States → USD
- Rest of World → USD

It must never be inferred from `website_currency`.

## Geography distinction

Identity separates where the business is based/registered from the markets it serves. The exact canonical structure for business geography and served markets will be finalized as the relevant objects/backend mapping are frozen. The existing `Location` model is a physical-location structure and must not automatically be overloaded to represent markets.

## Files

- `objects.yaml` — canonical Identity object definitions and lifecycle metadata.
- `processors/` — processor definitions, added after object boundaries are frozen.
- `artifacts/` — reasoning, taxonomy, examples and output contracts only where required.
- `validation.yaml` — Identity-specific integrity rules, added after processors/artifacts are frozen.

## Historical architecture note

Earlier Prompt A / Stage 1A work already identified Brand Name, Logo, Website URL, Industry, Sub-industry, Primary Geography, Primary Language, Primary Market, Website Currency and Social Handles as Core Identity outputs. The current implementation retains that coverage as source material but revises object semantics, processor boundaries, currency handling and lifecycle rules where later architecture decisions supersede it.
