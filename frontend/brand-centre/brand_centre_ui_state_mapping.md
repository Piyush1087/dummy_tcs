# Brand Centre — UI State Mapping

**Status:** `PROPOSED_FOR_SYSTEMS_ARCHITECT_REVIEW`  
**Owner:** Frontend AI Worker  
**Authority baseline:** `Piyush1087/dummy_tcs@017dbceac494f0861ec9a6bea7af3129b70fa5cb`

## 1. Purpose

This document maps canonical business/Intelligence state into **user-safe frontend presentation states**. It does not define visual composition, copy, component styling or backend APIs.

The mapping rule is:

```text
request state
+ current value state
+ consumer readiness
+ result readiness
+ freshness
+ authority/editability
+ candidate/discrepancy
+ optional neutral runtime activity
        ↓
frontend presentation state
```

No single backend enum should be rendered mechanically as a UI state.

## 2. Request state vs semantic state

| Condition | Frontend meaning | Normal behavior |
|---|---|---|
| Initial request in flight, no cache | `REQUEST_LOADING` | show workspace/section loading treatment |
| Request succeeds, section READY | `CONTENT_READY` | show content |
| Request succeeds, section PARTIAL | `CONTENT_PARTIAL` | show usable content; missing pieces degrade naturally |
| Request succeeds, section NOT_READY | `INTELLIGENCE_NOT_READY` | show learning/not-ready treatment, not an API error |
| Background request with current content | `BACKGROUND_LOADING` | retain content; optional subtle activity |
| Request fails with previous content | `REQUEST_ERROR_WITH_CURRENT` | retain prior data; bounded request issue |
| Request fails with no content | `REQUEST_ERROR_EMPTY` | workspace/section error treatment |
| Current content STALE | `CONTENT_STALE` | retain content; indicate update may be needed |
| Current content REFRESHING | `CONTENT_REFRESHING` | retain content; show non-blocking refresh |

## 3. Null / absent mapping

### `VALUE`

Render the value according to the owning semantic contract.

An empty array under `VALUE` means the collection was evaluated and is genuinely empty. It is not loading and not missing.

### `EXPLICIT_NULL`

Meaning: evaluation occurred but there is no defensible current semantic value.

Presentation priority:

1. if optional and omission is truthful → omit the optional content;
2. if the absence itself matters to user understanding → show a restrained `not enough grounded information yet` state defined later by UX copy;
3. never insert guessed/filler content.

### `INTENTIONALLY_ABSENT`

Meaning: optional content/item is deliberately absent under contract-valid semantics.

Normal behavior: omit it. Do not show error, skeleton or placeholder slot.

### `NO_CURRENT`

Meaning: no current durable value exists.

Mapping depends on neutral runtime activity:

- `LEARNING` → learning presentation;
- no activity + consumer NOT_READY → not-ready/immature presentation;
- temporary runtime unavailable → temporarily unavailable;
- never infer that the field is empty.

### `NOT_EVALUATED`

Meaning: semantic has not yet been evaluated.

If backend/runtime explicitly reports `LEARNING`, show learning. Otherwise show bounded not-yet-evaluated/immature treatment only when the section needs to be visible.

Do not infer a job queue or processor state.

### `NOT_OWNED`

Meaning: the value belongs to canonical business/application state, not this Intelligence Object.

Frontend action: resolve from the owning workspace projection. It is an adapter/contract state, not user-facing missing data.

Examples:

- canonical logo is business state, not `visual_style_profile`;
- Locations are canonical business entities, not `serviceability_profile`;
- Offering lifecycle/availability is canonical business state, not Product Intelligence current-generation ownership.

## 4. Readiness mapping

### Consumer `READY`

- render normally;
- section may still contain optional absent/null components;
- do not equate READY with maximal enrichment.

### Consumer `PARTIAL`

- render available grounded content;
- omit unsupported optional fields/items;
- do not add empty cards to reach expected density;
- section-level `partial` treatment should be restrained and only visible when it helps user interpretation.

Examples:

- one strong Audience Persona may be a valid partial/usable state;
- Serviceability may show a bounded supported market without claiming universal Offering availability;
- derived Visual Style may be partial while approved logo/palette remains fully usable canonical state.

### Consumer `NOT_READY`

- do not render fabricated semantic content;
- do not globally block Brand Centre if sibling sections are usable;
- if neutral runtime activity = `LEARNING`, presentation may communicate that Creator Shop is still learning;
- otherwise show a bounded unavailable/not-yet-understood state as UX later defines.

### Result `FAILED`

`FAILED` does not become a fake current value. If usable previous current data exists, retain it and let freshness/activity express the state. Only when no usable current consumer projection exists should the user see temporary unavailability.

## 5. Freshness mapping

| Freshness | Data behavior | Presentation rule |
|---|---|---|
| `CURRENT` | show current | no freshness treatment normally |
| `STALE` | keep current | optional restrained stale/update cue; never blank data |
| `UNKNOWN` | keep current | do not show error merely because freshness is unknown |
| `REFRESHING` | keep current | non-blocking refresh/learning cue where useful |

### Stale + confirmed

`BRAND_CONFIRMED + STALE` remains authoritative current truth. UI must never imply that newer observed/derived Evidence has already replaced it.

### Stale + candidate conflict

Show confirmed/protected current value. A conflict/candidate notice may appear according to later UX policy. Candidate content remains hidden unless separately authorized.

## 6. Authority presentation

Backend authority is not automatically a badge.

Recommended semantic-to-presentation map:

| Backend | Frontend presentation key | User implication |
|---|---|---|
| `OBSERVED` | `observed` | current value grounded in a source |
| `CREATOR_SHOP_DERIVED` | `creator_shop` | Creator Shop interpretation/understanding |
| `BRAND_CONFIRMED` | `confirmed` | Brand-confirmed current truth |
| `SUPPORT_CONTROLLED` | `protected` | stable anchor; change through support/exception path |
| `SYSTEM_DERIVED` | `system_managed` | deterministic system-managed value |
| child components differ | `mixed` | aggregate display cannot truthfully claim one authority |

### Badge restraint

Do not attach an authority badge to every line. Metadata should become visible only where it helps answer:

- why can/can't I edit this?
- why wasn't this automatically updated?
- is Creator Shop interpreting this or is it confirmed truth?
- is there a conflict to resolve?

## 7. Editability mapping

Authority and editability are separate.

### `EDITABLE`

Product/application policy permits future Brand self-service edit at detail granularity.

### `SUPPORT_CONTROLLED`

Display stable current value normally. UX may expose `Contact support to change` contextually. Avoid pervasive lock iconography.

### `READ_ONLY`

No Brand write path is authorized.

### `POLICY_PENDING`

Read architecture contains mutation metadata, but frontend must not expose an edit/candidate action until later policy is frozen.

## 8. Candidate / discrepancy states

### `NONE`

No candidate UI.

### `AVAILABLE`

A validated alternative exists but Product policy does not necessarily require urgency. Current value remains displayed.

### `CONFLICT`

New information materially disagrees with protected current state. Current remains preserved.

Minimum presentation contract:

```text
current value remains visible
+ bounded conflict/update-available notice
+ candidate count/summary only if Product permits
```

Do not:

- silently swap values;
- infer accept/reject permission;
- expose raw Evidence graph;
- expose processor reasoning;
- assume the candidate itself is authoritative.

## 9. Mixed-generation presentation

Mixed generation is normal when separately protected or independently refreshed components coexist.

### Default workspace behavior

Do not display `Generated at <one time>` or `Source: <one source>` for the whole Object when components differ.

### Meaningful component metadata

Retain metadata at component granularity for:

- independently editable/protected scalar fields;
- list items with independent semantic IDs;
- proof points whose authority differs from their differentiator;
- communication constraints/tone items;
- candidate-bearing components;
- stale components inside otherwise current Objects.

### Hidden implementation detail

Never surface:

- object generation ID;
- component generation ID;
- processor execution ID;
- mixed-generation mechanics terminology.

## 10. Brand workspace mapping examples

### Brand Description

- `VALUE + READY + CURRENT + CREATOR_SHOP_DERIVED` → normal Creator Shop understanding.
- `VALUE + PARTIAL + STALE + BRAND_CONFIRMED` → retain confirmed copy; subtle stale/conflict context only if useful.
- `EXPLICIT_NULL + PARTIAL` → omit description or show bounded learning state; never fall back to Brand Preview narrative automatically.

### Values / Personality

- array `VALUE=[]` → evaluated empty collection; do not create filler traits.
- one or more items → key by stable `semantic_id`.
- mixed confirmed/derived items → no aggregate `AI generated` label.

### Differentiation and Proof

- differentiator may be derived while proof item is observed;
- UI must not make proof look like it gained the differentiator's authority;
- proof can stale independently;
- null proof list is valid and must not generate invented reasons-to-believe.

### Communication Profile

Tone traits, free-text guidance, communication constraints and primary language may mature independently. A whole-card READY/derived label must not erase those distinctions where edit/protection behavior differs.

### Audience Personas

- `0 ACTIVE` + evaluated current collection → legitimate empty/immature Audience state, not loading;
- `1 ACTIVE` → render one intentional Persona; no blank slots;
- `2–3 ACTIVE` → normal target density;
- partial Persona → show grounded fields only;
- INACTIVE/SUPERSEDED → excluded from normal workspace;
- candidate Persona → not admitted to normal active list.

### Visual Identity

Canonical asset state and derived style interpretation render as related but separate semantics.

Never map:

```text
derived style trait
→ approved palette/font/reference image
```

and never map an observed visual pattern to a hard Brand constraint.

### Serviceability

- PARTIAL → show supported serviceability context only;
- no mature Serviceability → learning/not-ready state;
- never borrow Audience location, primary country or demand geography as replacement serviceability;
- `coverage_is_heterogeneous=true` must prevent wording that implies every Offering is available across the whole Brand envelope.

## 11. Offerings mapping

Canonical Offering lifecycle controls availability for new Campaign use. Frontend receives lifecycle; it does not derive it.

- `ACTIVE` → browse/detail normally; eligible flag supplied by backend/application policy.
- `DRAFT/INCOMPLETE` → visible where Product wants management, not selectable as new Campaign Offering.
- `PAUSED/INACTIVE` → preserve identity/history; excluded from new use.

Brand-confirmed non-price fields remain protected. Price can follow the explicit first-party refresh exception; frontend must not generalize that exception to other fields.

## 12. Overview mapping

Overview sections load independently and compose domain-owned semantics.

Valid state:

```text
Overview workspace READY
Brand summary READY
Offerings PARTIAL
Competitor enrichment NOT_READY
Recommendations READY
```

Do not block Overview because an optional enrichment domain is immature.

Overview does not write back a new `overview truth` object.

## 13. Market mapping

Current architecture must tolerate:

- own Brand/website context available;
- Instagram unavailable/not connected/not ready;
- competitor enrichment unavailable;
- Performance partial;
- Observations empty.

These are separate semantic states. Do not turn all absent Market enrichment into a single error.

The current Product base case requires website + own Instagram; website-only `base 0` remains unresolved and must not be invented by frontend.

## 14. Recommendations mapping

Recommendations may validly be:

- one recommendation;
- 1–3 requiring attention;
- larger underlying portfolio but only bounded immediate decisions;
- `NO NEW CAMPAIGN`.

`Refresh recommendations` maps to reevaluation, not novelty generation.

During refresh, retain existing recommendation state with `REFRESHING` unless backend authority says it is no longer current/safe.

## 15. Responsive independence

The semantic state mappings above are identical on desktop and 390px mobile.

Responsive components may change:

- stacking;
- disclosure pattern;
- secondary navigation;
- density;
- detail navigation.

They may not change:

- readiness meaning;
- authority meaning;
- field identity;
- candidate status;
- current-vs-stale behavior;
- which domain owns the value.

## 16. Safe state priority order

When multiple conditions exist, components should reason in this order:

```text
1. authorization/request availability
2. validated current value presence
3. consumer readiness
4. freshness/runtime refresh
5. authority/editability
6. candidate/discrepancy
7. optional presentation metadata
```

This prevents a stale badge, candidate notice or background refresh from incorrectly replacing usable current content.
