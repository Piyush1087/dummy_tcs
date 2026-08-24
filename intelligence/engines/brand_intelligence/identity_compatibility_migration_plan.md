# Brand Intelligence — Identity Compatibility Migration Plan

**Version:** 1.0  
**Status:** FROZEN SEMANTIC MIGRATION AUTHORITY  
**Scope:** semantic migration planning only  
**Execution authorized:** no

## Purpose

Define how the legacy `intelligence/engines/brand_intelligence/branches/identity/` compatibility/reference implementation maps into the permanent Brand Intelligence topology and canonical application/business state without executing migration in this artifact.

The existing Identity branch remains:

```text
FROZEN_REFERENCE
+
COMPATIBILITY_ONLY
```

until its existing consumers are deliberately remapped and verified.

## Permanent replacement architecture

```text
Brand Intelligence
├── Brand Expression
├── Audience
├── Visual Identity
└── Serviceability
```

Identity is not a permanent Brand Intelligence branch.

## Final semantic migration map

| Legacy Identity Object | Final disposition | Replacement semantic owner / target | Compatibility note |
|---|---|---|---|
| `website_url` | `CANONICAL_BUSINESS_STATE_INPUT` | Canonical Brand website/domain | Retain legacy reads until consumers use canonical Brand state directly. |
| `brand_name` | `CANONICAL_BUSINESS_STATE_INPUT` | Canonical Brand identity/account state | No parallel Brand Intelligence copy. |
| `brand_logo` | `CANONICAL_BUSINESS_STATE_INPUT` | Future canonical primary visual asset/state | Current compatibility path retained for Brand Preview/runtime until explicit remap. |
| `tagline` | `SUPERSEDED` as permanent Intelligence Object | Explicit tagline may remain canonical/source content where applicable | Do not promote into a new permanent Brand Intelligence Object. |
| `industry` | `CANONICAL_BUSINESS_STATE_INPUT` | Confirmed Brand Industry anchor | Gatekeeper/confirmation authority remains upstream of permanent Brand Intelligence. |
| `sub_industry` | `CANONICAL_BUSINESS_STATE_INPUT` | Confirmed Brand category/sub-industry anchor | No parallel AI-owned copy. |
| `industry_niche` | `DEFERRED` | No permanent owner frozen yet | Reconsider only if a downstream consumer later justifies a durable semantic. |
| `country` | `CANONICAL_BUSINESS_STATE_INPUT` | Primary Brand country/geography anchor | Serviceability consumes it; Serviceability does not own it. |
| `business_geography` | `SUPERSEDED` | Canonical Brand geography anchor + canonical Locations | Keep compatibility until existing runtime/persistence consumers are remapped. |
| `markets_served` | `SERVICEABILITY` | `serviceability_profile` | Reuse legacy reasoning/compatibility semantics only; permanent semantic is `serviceability_profile`. |
| `primary_language` | `BRAND_EXPRESSION` | `communication_profile.primary_language` | Current Identity value may seed/reconcile during migration; permanent owner is Brand Expression. |
| `website_currency` | `DEFER_TO_PRODUCT_INTELLIGENCE_RECONCILIATION` | Deferred | This plan does not assign it as a permanent Product Intelligence Object. |
| `reporting_currency` | `CANONICAL_BUSINESS_STATE_INPUT` | Canonical platform/commercial currency basis | Deterministic/application context rather than permanent Brand Intelligence Object. |
| `instagram_handle` | `CANONICAL_BUSINESS_STATE_INPUT` | Canonical Brand social state | Consumed by Instagram Intelligence / application flows. |
| `youtube_handle` | `CANONICAL_BUSINESS_STATE_INPUT` | Canonical Brand social state | Compatibility retained until consumer remap. |
| `tiktok_handle` | `CANONICAL_BUSINESS_STATE_INPUT` | Canonical Brand social state | Compatibility retained until consumer remap. |
| `facebook_handle` | `CANONICAL_BUSINESS_STATE_INPUT` | Canonical Brand social state | Compatibility retained until consumer remap. |
| `linkedin_handle` | `CANONICAL_BUSINESS_STATE_INPUT` | Canonical Brand social state | Compatibility retained until consumer remap. |

## Current consumer classes to preserve during migration

At minimum the migration must inspect and preserve:

```text
Brand Preview identity references
pre-verification / claim runtime state
Identity-specific runtime loaders
Identity validator schemas
Identity execution/test profiles
Identity persistence mapping
backend/application reads of mapped BrandProfile fields
```

This file does not assert that each implementation consumer still exists unchanged. The implementation-planning stage must inventory exact current references before changing them.

## Brand Preview compatibility

Frozen Brand Preview currently consumes Identity compatibility semantics including optional `brand_logo` and identity anchors.

Migration must preserve the frozen Preview boundary:

```text
brand_descriptor
→ BOUNDED_PRESENTATION_OUTPUT

brand_understanding_narrative
→ BOUNDED_PRESENTATION_OUTPUT

audience_groups[]
→ CANDIDATE_SEED + RECONCILIATION_CONTEXT

creator opportunities
→ BOUNDED_PRESENTATION_OUTPUT

archetype recommendations
→ BOUNDED_PRESENTATION_OUTPUT

optional brand_logo
→ COMPATIBILITY_INPUT
```

No Preview output should be promoted into durable Brand Intelligence merely as part of Identity migration.

## Migration prerequisites

A legacy Identity semantic may be remapped only when all applicable prerequisites are satisfied:

1. replacement semantic owner or canonical business-state target is accepted;
2. current runtime/application consumers are enumerated;
3. replacement read/write contract is available;
4. authority and overwrite semantics are preserved;
5. historical/provenance requirements are preserved where relevant;
6. Brand Preview/onboarding compatibility is verified when affected;
7. migration tests prove no consumer loses required semantics.

## Remap conditions by disposition

### Canonical business-state inputs

Remap when consumers can read the canonical application/backend state directly and no Intelligence-owned duplicate is required.

### Brand Expression

`primary_language` may move only after `communication_profile.primary_language` has accepted processor/runtime/persistence semantics and downstream consumers are verified.

### Serviceability

`markets_served` may move only after `serviceability_profile` has accepted runtime/persistence semantics and consumers no longer require the legacy Identity shape.

### Superseded semantics

`tagline` and `business_geography` may be retired from permanent Intelligence ownership only after all legacy reads/writes are remapped or explicitly preserved as canonical/source business state where appropriate.

### Deferred semantics

`industry_niche` and `website_currency` remain unchanged in compatibility paths until separate accepted authority resolves their permanent destination or retirement.

## Compatibility removal condition

The legacy Identity branch must not be removed merely because permanent topology is frozen.

Compatibility may be removed only when:

```text
all active consumers remapped
+
replacement semantics/runtime verified
+
Brand Preview compatibility verified
+
persistence/backfill or adapter work completed where needed
+
regression tests pass
+
no accepted authority still points at legacy Identity as canonical semantic owner
```

Until then, Identity remains a frozen compatibility/reference layer.

## Explicit non-actions

This plan does not:

- modify Identity Objects;
- modify Identity processors/artifacts;
- migrate database fields;
- change Brand Preview runtime;
- change backend/frontend code;
- select new persistence models;
- implement adapters;
- delete compatibility files;
- redefine Product Authority.

Implementation planning is a later stage after permanent topology canonicalization.
