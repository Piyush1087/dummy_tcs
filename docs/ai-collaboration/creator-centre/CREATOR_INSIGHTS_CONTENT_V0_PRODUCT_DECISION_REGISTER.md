# Creator Centre — Insights / Content V0 Product Decision Register

`CREATOR_INSIGHTS_CONTENT_V0_PRODUCT_DECISION_REGISTER_V1`

STATUS = PRODUCT_FROZEN_FOR_SECOND_INSIGHTS_VERTICAL_SLICE

IMPLEMENTATION = NOT_DEFINED_BY_THIS_DOCUMENT

This document is Product authority for **Content V0**, the second Creator Centre Insights vertical slice after accepted Audience V0.

It freezes only the Product behavior required to design, build and accept Content V0. Exact donor reuse, schemas, processor/Object decomposition, persistence, model/provider adapters, routes, migrations, execution packets and implementation sequencing remain the responsibility of the Creator Instagram Intelligence Technical / Implementation SA.

Legacy Creator Centre / Media Kit implementation is reference-only and is not Product, UX, schema or reconciliation authority.

---

## 1. Program strategy and accepted predecessor

Audience V0 is the accepted first end-to-end Creator Intelligence slice.

Accepted Creator Audience checkpoints at the Product handoff boundary:

```text
BACKEND_SHA = 7028d1fcbd467175a5358fce92ad2edd63ea44cd
FRONTEND_SHA = 4ca6141face77821f546a13bdde12c8c41780a6f
PROGRAM_AUTHORITY_SHA = 52917dfe2bbd7e92ceeb5ffcfe2b628fa49bd598
MIGRATIONS = 101
```

Content V0 must reuse the accepted Brand/Creator owner scope, shared DE/Evidence/Intelligence runtime, shared scheduling foundation, strict authenticated consumer patterns and Creator Insights shell established by Audience V0.

Content V0 must not create a second Creator Intelligence runtime, current store, scheduler or tenancy model.

The bounded technical debt identified by Audience V0 remains a carry-forward requirement:

> Brand-named internal shared validation/address fields using owner-scope compatibility mapping should be generalized before the seam spreads across several Creator Intelligence processors.

That debt is not a Product-design blocker, but technical preflight must classify and sequence it before or within the first Content foundation packet.

---

## 2. Durable Creator Centre IA

Frozen top-level direction remains:

```text
Creator Centre
├── Insights
│   ├── Audience          ✅ accepted V0
│   └── Content           ← this Product authority
├── Creator Brand
├── Portfolio
├── Commercial Setup
└── Media Kit
```

Audience and Content are internal sections of one durable **Insights** workspace.

When Content ships, Insights may expose an internal switch/navigation between:

```text
Audience | Content
```

This does not create a new top-level Creator Centre workspace.

---

## 3. Content V0 purpose

Content helps the Creator:

> understand what they create, identify evidence-backed patterns in how that content performs, and see representative posts that explain those patterns.

Content V0 has three jobs:

```text
UNDERSTAND
What kind of content do I actually create?

LEARN
Which recent formats, themes and creative patterns
receive meaningfully different audience response?

EXPLAIN
Which real posts support those conclusions?
```

Content V0 is not:

- an all-post feed or content library;
- a publishing or scheduling tool;
- a generic Instagram analytics clone;
- a growth/recommendation coach;
- Portfolio management;
- Media Kit curation;
- Campaign Performance;
- canonical Collaboration classification;
- a causal-performance engine;
- a universal Creator/content scoring system.

---

## 4. Source boundary — V0

V0 source:

```text
INSTAGRAM
```

Instagram is the first source, not the permanent canonical Content schema.

Content is a Creator business-concept surface. Social platforms remain underlying Evidence / Intelligence sources.

---

## 5. Content V0 corpus policy

### 5.1 Frozen recent-content corpus

Content V0 uses:

```text
LATEST 24 ELIGIBLE INSTAGRAM POSTS
WITHIN A 90-DAY LOOKBACK
```

Rules:

- recency cutoff = previous 90 calendar days from the accepted processing cutoff;
- maximum admitted content items = 24;
- if fewer than 24 eligible posts exist in 90 days, use all eligible posts;
- do not backfill with posts older than 90 days merely to reach 24;
- select the latest eligible posts by authoritative publication time;
- selection is not performance-ranked;
- the same bounded corpus is the V0 basis for semantic Content understanding and Content performance-pattern analysis.

This policy is a Creator Product decision. It is not inherited merely because Brand-side deep analysis also uses a 24-item cap.

### 5.2 Eligibility boundary

V0 targets persistent Instagram media supported by the accepted provider/runtime contract.

Do not silently add Stories or other ephemeral surfaces merely to increase corpus size. If the donor exposes materially different media semantics, technical preflight must return them to Product authority before inclusion.

### 5.3 Small corpus behavior

A small valid corpus may still support factual Content Snapshot information and per-post evidence.

Pattern/compare conclusions must be withheld when accepted sample/coverage gates are not met.

Do not manufacture a pattern from one or two posts.

Exact minimum sample and metric-coverage constants are `DONOR_TO_CONFIRM`; reuse accepted donor gates wherever semantically valid.

---

## 6. Content V0 user-facing hierarchy

Frozen semantic hierarchy:

```text
CONTENT

[future platform selector — hidden when only one supported source]

1. Content Snapshot

2. Content Highlights

3. What You Create

4. Content Performance

5. Representative Content

6. Data Status
```

Exact visual composition is not frozen here.

---

## 7. Content Snapshot

Content Snapshot is a compact orientation layer, not a metric dashboard.

It should summarize the recent corpus using factual/evidence-backed information such as:

- posts analyzed;
- recent format mix / most-used format where meaningful;
- leading themes where semantic coverage is sufficient;
- posting activity/frequency over the accepted corpus window;
- source and freshness context.

Do not make likes/comments/views/shares the primary Snapshot hierarchy.

If semantic coverage is insufficient for a theme summary, omit the semantic summary rather than fabricate it.

---

## 8. Content Highlights

User-facing name:

```text
Content Highlights
```

Highlights sit directly after Content Snapshot and **above** the detailed analysis sections.

They are not owned by or hidden inside `What You Create`, `Content Performance` or a selected lower subsection.

Content Highlights are:

- 0–3;
- evidence-backed;
- creator-friendly;
- non-causal;
- coverage-aware;
- allowed to combine persisted semantic classification with deterministic performance facts;
- optional: zero Highlights is valid when no sufficiently supported pattern exists.

Examples of allowed Product meaning:

- a format has meaningfully different observed performance under accepted comparison rules;
- a sufficiently supported theme or creative structure shows a meaningful response pattern;
- a content pattern recurs strongly enough to characterize the recent corpus;
- coverage/limitations materially constrain interpretation.

Content Highlights must not say or imply:

- `this caused better performance`;
- `you should make more of this`;
- `the algorithm prefers this`;
- unsupported future-performance prediction.

---

## 9. What You Create

User-facing section name:

```text
What You Create
```

Its purpose is to describe observed recent content behavior.

V0 may include the following families where supported:

```text
THEMES
FORMATS
CREATIVE PATTERNS / STRUCTURES
COMMUNICATION / CAPTION PATTERNS
VISUAL EXECUTION PATTERNS
```

Exact internal Object/component decomposition is not Product authority.

Important boundary:

```text
CONTENT
= observed recent content behavior

CREATOR BRAND
= Creator identity / positioning / self-presentation
```

Content Intelligence may later inform Creator Brand suggestions, but Content V0 must not silently redefine canonical Creator identity.

Semantic/model-derived values must be evidence-grounded and preserve partial/uninspected modality truth. `not inspected` must never become `absent`.

---

## 10. Content Performance

### 10.1 V0 comparison families

Content V0 may compare observed performance by:

```text
1. FORMAT
2. THEME
3. CREATIVE PATTERN / STRUCTURE
```

Performance-by-communication/caption pattern is deferred unless technical donor extraction proves it can be added without expanding the V0 Product surface; default V0 disposition is `DEFER`.

### 10.2 Comparison gates

Performance comparisons are shown only when:

- the compared cohorts have sufficient sample size;
- metric coverage is sufficient;
- semantic labels are grounded and stable enough to group deterministically;
- metric denominator/basis semantics are compatible;
- missing/unsupported/provider failure is not converted to zero.

Exact accepted thresholds/constants are `DONOR_TO_CONFIRM` from current donor/runtime authority.

### 10.3 Metrics

V0 may use accepted source metrics including, where provider semantics support them:

- reach;
- views;
- likes;
- comments;
- saves;
- shares;
- provider-supplied total interactions;
- accepted same-media descriptive rates.

Do not reconstruct provider metrics that are not supplied.

### 10.4 No universal score

```text
CREATOR SHOP CONTENT SCORE = NO
UNIVERSAL ENGAGEMENT SCORE = NO
```

Different content can succeed on different observable metrics. Product must preserve that nuance rather than collapse all performance into one opaque number.

### 10.5 Descriptive, not prescriptive

V0 may say:

> Step-by-step posts received more saves relative to reach than other sufficiently comparable recent posts.

V0 must not turn that fact into:

> Make more step-by-step posts.

Recommendations belong to a later explicitly authorized Product layer.

---

## 11. Representative Content

Representative Content is included in V0.

Purpose:

> provide bounded real-post evidence explaining Content Highlights and recurring content patterns.

Rules:

- maximum 6 representative posts;
- zero to six is valid;
- system-selected, not Creator-curated in V0;
- selection must be evidence-explanatory rather than a `Top Posts` leaderboard;
- selection may represent major themes, creative patterns, formats and/or a highlighted performance pattern;
- each surfaced post should carry enough context to explain why it is representative;
- do not create an all-post feed/library;
- do not make Representative Content a Portfolio curation surface;
- do not add public/Media Kit publication controls here.

Exact deterministic representative-selection algorithm is technical-preflight work, but it must satisfy the Product rules above and must not simply rank by one performance metric.

A bounded post detail drawer/sheet may be reused/added if technically efficient, but a dedicated drilldown is not a Product acceptance requirement for Content V0.

---

## 12. Data Status and truth semantics

Data Status must expose human-readable truth about:

- source/platform;
- corpus size / admitted-post count;
- metric coverage;
- semantic/modality coverage;
- freshness;
- material limitations;
- source/recovery state where relevant.

Technical pipeline vocabulary should remain hidden from normal Creator-facing copy.

Truth principles:

```text
missing != zero
unsupported != zero
provider failure != zero
not selected != absent
not inspected != absent
cover-only != full-video understanding
partial carousel inspection != complete carousel understanding
```

Valid current should remain visible through independent processing/provider failure according to accepted shared-runtime semantics.

---

## 13. Deterministic vs semantic authority

Content V0 deliberately separates responsibilities.

### Semantic/model-assisted layer may determine, when evidence supports it:

- theme labels;
- creative structures/patterns;
- caption/communication patterns;
- bounded visual execution observations;
- source-grounded per-post semantic membership.

### Deterministic layer owns:

- corpus membership and format facts;
- source metrics;
- arithmetic/rates/coverage;
- grouping persisted semantic memberships into comparison cohorts;
- sample/coverage eligibility;
- performance comparisons;
- highlight finalization/ranking;
- representative-content selection;
- final display-safe quantitative facts.

The model must not be the authority for arithmetic, performance ranking, causality or recommendation.

---

## 14. Model use

Unlike Audience V0, Content V0 may legitimately require semantic-model execution.

Model use must remain:

- bounded;
- provider-neutral behind an accepted model port;
- grounded in admitted source Evidence;
- strict-schema validated;
- deterministic-finalizer controlled;
- replayable through persisted derived Evidence;
- unable to write canonical Creator identity, Campaign, Collaboration, Offering, Portfolio or Media Kit truth.

Raw model reasoning/prompt internals are not Creator-facing Product data.

---

## 15. Freshness / source lifecycle

Content V0 does not own OAuth, reconnect, disconnect, source deletion or manual source refresh.

```text
CONTENT WORKSPACE MANUAL REFRESH = NO
```

Content should display freshness/currentness and truthful processing/recovery state.

Exact source acquisition and semantic/performance processing cadence are `DONOR_TO_CONFIRM`; accepted shared scheduler behavior should be reused where semantically valid.

---

## 16. Roles

Content V0 is read-only Insights.

Freeze:

```text
OWNER   → INSIGHTS_CONTENT_READ = YES
MANAGER → INSIGHTS_CONTENT_READ = YES
ASSISTANT → INSIGHTS_CONTENT_READ = YES
```

This read authority grants no source lifecycle, editing, publishing or other mutation authority.

---

## 17. Editing / customization / publication

Content V0 is an understanding surface.

```text
EDIT SOURCE FACTS = NO
EDIT METRICS = NO
EDIT SEMANTIC OBSERVATIONS = NO
MANUAL THEME OVERRIDE = NO
REORDER CONTENT INTELLIGENCE = NO
CURATE REPRESENTATIVE CONTENT = NO
MEDIA KIT PUBLICATION CONTROLS = NO
PORTFOLIO CURATION = NO
```

Future Creator-owned identity/curation layers may consume Content outputs without making Content itself an editing surface.

---

## 18. Collaboration / commercial-content boundary

Content V0 does not classify content as canonical Brand collaboration work.

Keep distinct:

```text
C04 CANONICAL COLLABORATION TRUTH
!=
INSTAGRAM LIKELY-COLLAB INFERENCE
!=
ORDINARY ORGANIC CONTENT
```

Content V0 may preserve source-native likely-collab observations internally where reused by donor semantics, but it must not expose them as canonical Brand-work history or build a `Branded Content Performance` Product section.

That convergence belongs to later Portfolio / Content / Collaboration Product review.

---

## 19. Longitudinal trends

Content V0 is a recent-state and recent-pattern surface.

```text
LONGITUDINAL CONTENT TRENDS = NOT V0
```

V0 may show corpus publication activity needed to understand the current 90-day/24-post snapshot.

Future Content V1 may evaluate:

- persistent vs emerging themes;
- changing format mix;
- changing creative patterns;
- performance change over time;
- repeated patterns across historical snapshots.

Do not prebuild longitudinal Product behavior merely because deterministic history primitives exist.

---

## 20. Multi-platform Content principles

These principles are frozen now so Instagram does not become the permanent canonical Content shape.

### 20.1 One Content product

Content remains one section of Insights as additional sources arrive.

Do not create top-level Instagram / YouTube / TikTok workspaces.

### 20.2 Platform selector

When more than one supported Content source exists, one platform selector sits above the selected platform's Content experience.

Conceptually:

```text
[ Instagram | YouTube | TikTok ]

Content Snapshot
Content Highlights
What You Create
Content Performance
Representative Content
```

Hide the selector when only one source is supported.

### 20.3 Source-native formats and metrics

Do not force Instagram Reel/Post/Carousel semantics onto YouTube or TikTok.

Cross-platform normalization is allowed only where meaning survives explicit semantic review.

Potential future normalized concepts such as short-form video, long-form video, static image or slideshow are not frozen by this document.

### 20.4 No naive metric merging

Do not merge source metrics into synthetic cross-platform averages or totals when denominator, reach/view semantics or audience overlap are not compatible.

### 20.5 Cross-platform Intelligence later

After at least two supported platforms exist and semantics/windows are reconciled, Product may add higher-level observations such as:

> Short-form educational video is a recurring strength across Instagram and TikTok.

Such conclusions must preserve source meaning and cannot rely on fake merged populations/metrics.

Cross-platform Content Intelligence is not Instagram Content V0.

---

## 21. Explicit Content V0 exclusions

Content V0 excludes:

- publishing/scheduling;
- all-post feed/library management;
- Creator recommendations / growth coaching;
- causal claims;
- future-performance prediction;
- universal Content score;
- Campaign Performance;
- canonical branded-content/collaboration classification;
- Portfolio management;
- Media Kit controls;
- semantic editing/manual overrides;
- Creator Brand mutation;
- longitudinal trends;
- cross-platform aggregation;
- Audience Persona;
- AI Match / Marketplace ranking;
- Content-to-Campaign recommendation.

---

## 22. Product-level acceptance criteria

Content V0 is Product-acceptable only when the integrated frontend/backend experience proves at minimum:

1. it runs inside the durable Creator Insights workspace alongside accepted Audience without creating a new top-level workspace;
2. its source corpus is the latest maximum 24 eligible Instagram posts within the last 90 days, never backfilled beyond 90 days merely to hit 24;
3. Snapshot truthfully summarizes the admitted recent corpus;
4. Highlights are 0–3, evidence-backed, non-causal, creator-friendly and independent of lower detailed sections;
5. `What You Create` exposes only grounded recent content observations with explicit modality/coverage truth;
6. performance comparisons are permitted by format, theme and creative pattern only when accepted sample/coverage/basis gates pass;
7. no unavailable metric, missing denominator or provider failure becomes zero;
8. no universal Content/engagement score is introduced;
9. semantic/model output never owns arithmetic, ranking, causality or recommendation;
10. Representative Content is bounded to at most six system-selected explanatory posts and does not become a feed, Portfolio or curation surface;
11. valid current is preserved through independent processing failure under accepted shared runtime semantics;
12. Owner, Manager and Assistant share read authority without mutation authority;
13. no Content-owned manual refresh/OAuth/reconnect/delete control exists;
14. no Campaign/Collaboration/Portfolio/Media Kit canonical truth is mutated;
15. mobile/tablet/desktop UX is usable and accessible;
16. the implementation reuses the accepted Brand/Creator owner scope and shared DE/Evidence/Intelligence runtime instead of introducing parallel infrastructure;
17. the technical plan addresses the bounded Brand-named shared-validation compatibility seam before it proliferates to several Creator processors;
18. the implementation does not prebuild speculative TikTok/YouTube or longitudinal Product behavior.

---

## 23. Donor facts still to confirm before technical freeze

The following are intentionally not reinvented here and must be extracted from accepted Brand Instagram + accepted Creator Audience authority:

```text
EXACT ELIGIBLE MEDIA TYPES
MEDIA METRIC AVAILABILITY BY FORMAT
METRIC COVERAGE RULES
SIGNAL / COMPARATIVE COHORT SAMPLE THRESHOLDS
FORMAT COMPARISON RULES
SEMANTIC LABEL IDENTITY / GROUPING RULES
THEME / CREATIVE-PATTERN SUFFICIENCY RULES
CONTENT / PERFORMANCE FRESHNESS AND CADENCE
MODALITY SELECTION / INSPECTION CAPABILITIES
IMAGE / CAROUSEL / REEL / VIDEO COVERAGE SEMANTICS
VISUAL-TEXT CAPABILITY
VIDEO-FRAME CAPABILITY
SPEECH / TRANSCRIPT CAPABILITY
LIKELY-COLLAB INTERNAL REUSE BOUNDARY
REPRESENTATIVE-MEDIA DETAIL REUSE
MODEL / PROMPT / CONTRACT VERSIONING
FAILURE-CURRENT PRESERVATION
DELETE / PURGE TRAVERSAL
SHARED BRAND-NAMED VALIDATION SEAM GENERALIZATION
```

If donor rules are semantically valid for Creator Content, default disposition is reuse.

Any donor fact that conflicts with this Product register returns to Creator Centre Product authority before implementation.

---

## 24. Authority / next boundary

```text
CREATOR_AUDIENCE_V0 = ACCEPTED

CREATOR_CONTENT_V0_PRODUCT = FROZEN

CONTENT_V1 / LONGITUDINAL_TRENDS = DEFERRED

CREATOR BRAND PRODUCT = NOT_FROZEN
PORTFOLIO PRODUCT = NOT_FROZEN
COMMERCIAL SETUP PRODUCT = NOT_FROZEN
MEDIA KIT PRODUCT = NON_AUTHORITATIVE_COMPOSITION_ONLY

TECHNICAL DONOR / REUSE PREFLIGHT = AUTHORIZED AS NEXT BOUNDARY

FINITE EXECUTION PLAN = NOT YET ACCEPTED
IMPLEMENTATION = NOT AUTHORIZED BY THIS DOCUMENT ALONE
```

Next authority transition:

```text
Creator Centre Product SA
→ immutable Content V0 Product register
→ Creator Instagram Intelligence Technical / Implementation SA
→ donor-semantics extraction + Audience-learning-aware reuse preflight
→ finite implementation plan
→ Parent review
→ bounded implementation only after explicit authorization
```
