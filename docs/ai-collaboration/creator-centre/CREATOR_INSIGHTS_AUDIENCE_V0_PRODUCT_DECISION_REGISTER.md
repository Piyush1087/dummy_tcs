# Creator Centre — Insights / Audience V0 Product Decision Register

`CREATOR_INSIGHTS_AUDIENCE_V0_PRODUCT_DECISION_REGISTER_V1`

STATUS = PRODUCT_FROZEN_FOR_FIRST_VERTICAL_SLICE

IMPLEMENTATION = NOT_DEFINED_BY_THIS_DOCUMENT

This document is Product authority for the first Creator Centre Insights vertical slice: **Audience V0**.

It intentionally freezes only the Product behavior needed to build and accept Audience V0. Exact technical reuse, persistence, routes, schemas, migration need, donor constants, and execution sequencing remain the responsibility of the Creator Instagram Intelligence Technical / Implementation SA.

Legacy Creator Centre / Media Kit frontend and backend are reference-only and are not Product, UX, schema, or reconciliation authority.

---

## 1. Program strategy

Audience V0 will be completed as the first end-to-end Creator Centre Intelligence slice before Product proceeds to Content & Insights or other Creator Centre workspaces.

Target learning loop:

```text
PRODUCT FREEZE
→ technical donor/reuse preflight
→ backend Audience V0
→ frontend Audience V0
→ integrated acceptance
→ publish immutable handoff/evidence
→ review implementation learning
→ only then design/extend Content and later workspaces
```

The objective is to learn from a real frontend + backend Creator Intelligence implementation before extending the same Insights workspace or designing further Creator Centre workspaces in detail.

---

## 2. Durable Creator Centre IA direction

The current durable top-level Creator Centre direction is:

```text
Creator Centre
├── Insights
│   ├── Audience          ← V0 first slice
│   └── Content           ← later; not designed/frozen here
├── Creator Brand
├── Portfolio
├── Commercial Setup
└── Media Kit
```

Audience and future Content live inside one durable **Insights** workspace because both are primarily source-derived, read-mostly Intelligence surfaces.

For Audience V0:

- top-level workspace identity is `Insights`;
- Audience is the only implemented Insights section;
- do not show disabled/placeholder Content navigation merely because Content is planned;
- when Content is later implemented, Insights may gain an Audience / Content internal switch without changing the top-level Creator Centre IA.

Exact routes and component composition are technical decisions subject to Product semantics above.

---

## 3. Audience V0 purpose

Audience helps the Creator:

> understand who follows them, who meaningfully engages with them, and the most useful evidence-backed characteristics and differences in those audiences.

Audience V0 is not:

- a target-audience planner;
- a follower-growth tool;
- a Media Kit editor;
- a generic raw Instagram analytics dashboard;
- a publishing surface;
- a Campaign recommendation surface;
- an AI Match surface;
- an Audience Persona surface.

---

## 4. Source boundary — V0

V0 source:

```text
INSTAGRAM
```

Instagram is the first source, not the canonical shape that all future platforms must imitate.

Audience is a Creator business-concept workspace. Social platforms are underlying Evidence / Intelligence sources, not top-level Creator Centre workspaces.

---

## 5. Audience V0 user-facing structure

Audience V0 must provide the following Product structure:

```text
AUDIENCE

[future platform selector — hidden when only one supported source]

[ Followers | Engaged ]

selected cohort:
- cohort size/count where the provider supplies a semantically valid count
- age distribution where available
- gender distribution where available
- country distribution where available
- city distribution where available
- concise dominant/top cohort facts

Audience Highlights
- 0–3 deterministic, evidence-backed, creator-friendly observations

Data status
- source
- freshness
- availability / limitation truth
```

Exact visual layout is not frozen here. The semantic hierarchy is frozen.

---

## 6. Cohort interaction

### 6.1 Separate cohorts

Follower Audience and Engaged Audience remain semantically separate.

They must not be blended into one synthetic audience distribution.

### 6.2 Whole-section toggle

When both cohorts are usable, the workspace uses one whole-section cohort toggle:

```text
Followers | Engaged
```

Selecting a cohort switches the complete cohort view. The switch is not repeated at individual metric/data-point level.

The selected cohort view may include:

- count/size where semantically valid;
- age;
- gender;
- country;
- city;
- cohort-specific summary facts;
- applicable coverage/limitation context.

### 6.3 Insufficient / unavailable cohort

If one cohort is insufficient, suppressed, unsupported, or otherwise unavailable under accepted provider/runtime semantics:

- do not show that cohort as a selectable toggle option;
- show the usable cohort directly;
- do not render `0`, `N/A` or an empty demographic chart as if it were measured truth;
- Data status may truthfully explain why the other cohort is unavailable.

If neither cohort is usable, show an honest data-state surface rather than fabricated Audience data.

The exact sufficiency / provider / coverage constants are `DONOR_TO_CONFIRM` and must be extracted from accepted Brand Instagram authority before Creator implementation freezes technical behavior.

---

## 7. Audience Highlights

User-facing name:

```text
Audience Highlights
```

Do not use technical language such as `material demographic delta` in Creator-facing copy.

Audience Highlights are:

- maximum approximately three;
- deterministic in V0;
- evidence-backed;
- plain-language;
- optional: zero, one, two or three are all valid;
- never manufactured simply to fill the section.

They may describe:

- dominant audience characteristics;
- audience concentration;
- meaningful geographic/demographic facts;
- meaningful Follower ↔ Engaged differences when both cohorts are usable.

Exact calculation thresholds/constants are not re-invented by Product here. Reuse accepted donor semantics wherever semantically valid; any Creator-specific change requires explicit Product review.

Audience V0 requires no LLM/model-generated conclusions.

---

## 8. Data truth and missingness

Audience V0 preserves these truth principles:

```text
missing != zero
unavailable != zero
suppressed != zero
unsupported != zero
provider failure != zero
insufficient != empty audience
```

The primary workspace hides unusable cohort sections/options rather than presenting misleading placeholders.

Data status retains truthful source/freshness/availability information so hidden data does not look like a Creator Shop malfunction.

---

## 9. Customization / editing

Audience is a measured-understanding workspace.

V0 permits no factual editing or presentation customization inside Audience.

```text
EDIT AUDIENCE FACTS = NO
EDIT DISTRIBUTIONS = NO
REORDER AUDIENCE DATA = NO
SELECT INDIVIDUAL AUDIENCE METRICS FOR PUBLICATION = NO
FIELD-LEVEL SHOW/HIDE = NO
```

Brand-facing visibility is not owned here.

MVP Media Kit is expected to own one coarse Audience visibility control:

```text
Show Audience in Media Kit
ON / OFF
```

Exact Media Kit projection remains Media Kit Product authority and is not frozen by this document.

---

## 10. Audience Persona

```text
AUDIENCE PERSONA V0 = NO
```

Audience V0 remains factual / deterministic.

After Content is implemented inside Insights, Product will revisit Audience V1 and assess whether content-response Evidence is sufficient for richer evidence-bounded Audience Profiles / Personas.

No unsupported psychographics, motivations, income, profession, education, affinity, or similar inference belongs in Audience V0.

---

## 11. Freshness / refresh ownership

Audience displays current freshness / data status but does not own Instagram synchronization.

```text
AUDIENCE WORKSPACE MANUAL REFRESH = NO
```

Source connection, sync, refresh, reconnect, token lifecycle and deletion remain shared source / Settings / provider responsibilities according to accepted architecture.

If manual source refresh is introduced later, it should have one shared source-control home rather than being duplicated across Audience, Content, Creator Brand and Portfolio.

Exact audience cadence and stale constants are `DONOR_TO_CONFIRM` from accepted Brand Instagram implementation before technical freeze.

Valid current should remain visible through independent refresh/failure wherever accepted donor runtime semantics already provide that behavior.

---

## 12. Multi-platform Product principles

These principles are frozen now so Instagram V0 does not accidentally become the permanent canonical shape.

### 12.1 One Audience product

Audience remains one Creator Centre capability/workspace as additional sources arrive.

Do not create separate top-level Creator Centre workspaces named Instagram, YouTube, TikTok, etc.

### 12.2 Platform selector

When more than one supported audience source is live, one platform selector sits above the selected platform's cohort/data experience.

Conceptually:

```text
[ Instagram | YouTube | TikTok ]

<source-native cohort controls>

<source-native snapshot/distributions>
```

In Instagram V0 there is only one source, so a redundant single-option platform selector need not be displayed.

### 12.3 Source-native cohort semantics

Do not force every source into Instagram's `Follower Audience / Engaged Audience` model.

Future sources may expose semantically different cohorts such as subscribers, viewers, followers, engaged audience, etc.

Source-native meaning must be preserved.

### 12.4 Normalize only when meaning survives

Cross-source normalization is allowed only for concepts whose meaning is sufficiently compatible.

Potentially comparable concepts may include age distribution, geography, gender and source-specific audience size, subject to provider semantics.

Do not equate cohorts merely because the UI benefits from symmetry.

### 12.5 No fake cross-platform unique audience

Do not sum follower/subscriber counts and label the result `unique audience`.

Audience overlap across platforms is unknown unless a future explicitly authorized methodology establishes it.

### 12.6 No naive demographic merging

Do not merge demographic percentages across platforms into one synthetic distribution without future explicit normalization methodology and semantic/window review.

### 12.7 Cross-platform Intelligence later

Once at least two sources are supported and their semantics/windows are explicitly reconciled, Audience may add cross-platform observations such as:

> Your Instagram audience skews younger, while YouTube reaches relatively more 25–34-year-olds.

Such statements must preserve source/cohort meaning and must not imply fake merged populations.

Cross-platform comparative Intelligence is not part of Instagram Audience V0.

### 12.8 Source facts retain lineage

Every audience fact must preserve sufficient internal lineage for:

- platform/source;
- subject/account;
- cohort semantics;
- effective window/snapshot semantics;
- capture/freshness;
- coverage/availability.

The user-facing workspace may simplify presentation but architecture must not erase these distinctions.

### 12.9 Capability absence is not integration failure

A future platform may legitimately lack a demographic/audience capability available on another source.

```text
PLATFORM CAPABILITY ABSENCE != INTEGRATION FAILURE
```

Do not fabricate equivalent data merely to make platform views symmetrical.

---

## 13. Reuse philosophy

Creator Audience implementation must first test accepted Brand-side Instagram architecture at four levels:

1. Evidence / provider acquisition;
2. deterministic calculations;
3. reasoning / comparison semantics;
4. shared Intelligence runtime / projection.

Preferred disposition order:

```text
REUSE_BYTE_IDENTICAL
REUSE_WITH_SUBJECT_ADAPTER
REUSE_WITH_CONTRACT_VERSION
CREATOR_SPECIFIC_NEW_WORK
NOT_APPLICABLE
DEFER
```

Do not duplicate provider pagination/error handling, DE lifecycle, Evidence persistence, freshness/current preservation, deterministic audience calculations, generation/current runtime or deletion semantics unless concrete Creator-specific evidence proves the donor unsafe.

Brand UI is reference only, not Creator UX authority.

---

## 14. Explicit V0 exclusions

Audience V0 excludes:

- Content & Insights;
- Audience Persona;
- psychographic inference;
- audience-growth recommendations;
- target-audience planning;
- best-time-to-post advice;
- fake-follower/authenticity scoring;
- Brand affinity inference;
- Campaign recommendations;
- AI Match / Marketplace score;
- cross-platform combined demographics;
- cross-platform unique-audience claim;
- Creator-editable demographic facts;
- manual per-field Media Kit publication controls;
- LLM-generated Audience conclusions;
- platform-specific publishing or post management.

---

## 15. Product-level acceptance criteria

Audience V0 is Product-acceptable only when the integrated frontend/backend experience proves at minimum:

1. a Creator-scoped Instagram audience projection exists without leaking Brand/other Creator data;
2. Follower and Engaged remain separate source-native cohorts;
3. one whole-section cohort toggle controls the complete cohort view when both are usable;
4. unusable cohorts are hidden from primary selection without fabricating zero/empty values;
5. available demographic dimensions render truthfully;
6. Audience Highlights are deterministic, evidence-backed, creator-friendly and capped/bounded;
7. no LLM is required for V0;
8. freshness/availability truth is visible without turning missingness into zero;
9. Audience does not expose factual-edit/customization controls;
10. Audience does not own source refresh/OAuth/reconnect/delete;
11. valid current remains usable through independent refresh/failure where donor runtime supports it;
12. mobile/tablet/desktop UX remains usable and accessible;
13. the implementation does not prebuild speculative Content, YouTube or TikTok Product behavior;
14. the architecture does not hard-code Instagram cohort semantics as the permanent multi-platform canonical model.

---

## 16. Donor facts still to confirm before technical freeze

The following are intentionally not invented in Product authority and must be extracted from accepted Brand Instagram donor behavior:

```text
FOLLOWER_AUDIENCE_SUFFICIENCY
ENGAGED_AUDIENCE_SUFFICIENCY
PROVIDER_SUPPRESSION / MINIMUMS
AVAILABLE DEMOGRAPHIC DIMENSIONS
COUNT / TOTAL SEMANTICS PER COHORT
CONCENTRATION CONSTANTS
MATERIAL_DIFFERENCE CONSTANTS
COVERAGE CONSTANTS
AUDIENCE REFRESH CADENCE
AUDIENCE STALE THRESHOLD
MANUAL-REFRESH INTERACTION
FIRST-CONNECTION AUDIENCE BEHAVIOR
```

If the donor already has semantically valid accepted rules, default disposition is reuse.

If any donor rule conflicts with this Product register, the conflict returns to Creator Centre Product authority before implementation.

---

## 17. Authority / next boundary

```text
CREATOR_AUDIENCE_V0_PRODUCT = FROZEN

MULTI_PLATFORM_AUDIENCE_PRINCIPLES = FROZEN

CONTENT_PRODUCT = NOT_FROZEN

AUDIENCE_V1 / PERSONA = DEFERRED

TECHNICAL DONOR / REUSE PREFLIGHT = AUTHORIZED AS NEXT BOUNDARY

FINITE EXECUTION PLAN = NOT YET ACCEPTED

SOURCE IMPLEMENTATION = NOT AUTHORIZED BY THIS DOCUMENT ALONE
```

Next authority transition:

```text
Creator Centre Product SA
→ immutable Audience V0 Product register
→ Creator Instagram Intelligence Technical / Implementation SA
→ donor-semantics extraction + base/reuse preflight
→ finite implementation plan
→ Parent acceptance
→ bounded Local Codex execution
→ integrated frontend/backend Audience V0 acceptance
```
