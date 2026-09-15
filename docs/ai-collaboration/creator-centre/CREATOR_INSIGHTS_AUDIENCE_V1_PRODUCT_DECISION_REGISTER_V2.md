# Creator Centre — Insights / Audience V1 Product Decision Register V2

`CREATOR_INSIGHTS_AUDIENCE_V1_PRODUCT_DECISION_REGISTER_V2`

**STATUS = PRODUCT_FROZEN_FOR_V1**

**SUPERSEDES = CREATOR_INSIGHTS_AUDIENCE_V1_PRODUCT_DECISION_REGISTER_V1 @ f957c7cb7766c15a757994f98fca01e728be2fb3**

**IMPLEMENTATION = NOT_AUTHORIZED_BY_THIS DOCUMENT ALONE**

This document is the revised Product authority for **Creator Insights → Audience V1**.

V2 preserves the strong V1 evidence discipline and makes five bounded corrections:

1. Creator Brand is explicitly **not** an Audience V1 evidence input and Audience V1 does not create Creator Brand suggestions or mutations;
2. `Audience & Content Context` is narrowed into a small number of explicitly separate, independently grounded context pairs rather than a blended inference layer;
3. longitudinal `Audience Change` comparability rules are strengthened so source/account/cohort/provider-definition breaks cannot be treated as one continuous series;
4. Media Kit projection is reconciled with the now-frozen Media Kit V0 authority rather than described as a future/open projection;
5. the program-order dependency on Creator Brand is clarified as a sequencing/convergence dependency, not a semantic evidence dependency.

Audience V0 remains authoritative for source-native demographic truth, Follower / Engaged separation, missingness semantics, freshness, whole-section cohort interaction and factual read-only ownership.

Content V0 remains authoritative for observed recent Content behavior and Content performance patterns.

Creator Brand V2 + Amendment 1 remain authoritative for Creator-controlled commercial identity and its five authorized Content-derived suggestion families. Audience V1 does not add a sixth Creator Brand suggestion family.

---

## 1. Product purpose

Audience V1 helps the Creator move from:

> What does my audience data say?

into:

> What is the clearest evidence-backed story about the audience I reach and the audience that engages with me — and how is that audience changing over time?

Audience V1 adds bounded interpretation, concise cohort profiles, selected cross-workspace Content context and longitudinal change without inventing demographic-to-content-response relationships that the source does not prove.

Audience V1 remains an **understanding surface**, not a targeting planner, recommendation engine, persona generator or Creator identity editor.

---

## 2. Durable IA and program position

The durable Creator Centre hierarchy remains:

```text
Creator Centre
├── Insights
│   ├── Audience
│   └── Content
├── Creator Brand
├── Portfolio
├── Commercial Setup
└── Media Kit
```

Audience V1 upgrades the existing Audience section in place.

No new top-level or peer `Audience Persona` workspace is created.

Program order remains:

```text
Audience V0 — accepted
Content V0 — accepted
Creator Brand V0 — Product frozen / implementation predecessor in program sequence
Audience V1 — this Product authority
```

Important clarification:

```text
CREATOR BRAND BEFORE AUDIENCE V1
= PROGRAM / CONVERGENCE ORDER

CREATOR BRAND
!= AUDIENCE V1 EVIDENCE SOURCE
```

Audience V1 must not use Creator Brand positioning, niches, archetypes, voice/personality, palette or Creator-authored identity as evidence about who the audience is.

---

## 3. Accepted Audience V0 behavior preserved

Audience V1 preserves the accepted Audience V0 structure and truth model:

- Instagram is the first source;
- Follower and Engaged remain separate source-native cohorts;
- when both cohorts are usable, one whole-section `Followers | Engaged` switch controls the selected cohort view;
- unusable cohorts are hidden from primary selection and remain truthfully explained through status/limitations;
- age, gender, country and city remain source-native dimensions where available;
- missing / unavailable / suppressed / unsupported / provider failure never become zero;
- Audience owns no source lifecycle mutation or manual refresh;
- Owner, Manager and Assistant may read Audience;
- Audience remains non-editable factual/Intelligence output;
- valid current remains independently usable through provider/processing failure under accepted shared-runtime semantics;
- Media Kit owns Brand-facing Audience visibility and presentation.

Audience V1 does not replace these rules.

---

## 4. Critical evidence boundary — no demographic × Content-response invention

Content V0 can establish:

- what recent content the Creator makes;
- themes, formats, creative structures and communication/visual patterns;
- evidence-backed performance differences across sufficiently supported content cohorts.

Audience V0/V1 can establish source-native audience distributions such as age, gender, country, city and Follower / Engaged differences.

These two evidence families do **not** by themselves prove which demographic segment responded to which Content pattern.

Therefore Audience V1 must not make unsupported claims such as:

```text
25–34-year-olds prefer tutorials.
Women in Mumbai engage most with skincare reviews.
UK followers respond better to Reels.
```

unless a future provider/source supplies a trustworthy demographic-segment × Content-response linkage and Product explicitly authorizes it.

Allowed juxtaposition keeps the evidence separate, for example:

> Your engaged audience skews older than your follower audience.
>
> Separately, across your recent Content overall, tutorial-style posts were one of the stronger-performing patterns.

Do not convert separately grounded facts into a causal, preference or segment-response relationship.

---

## 5. Audience V1 user-facing hierarchy

Audience V1 uses the existing Audience page and adds bounded interpretive layers.

Frozen semantic hierarchy:

```text
AUDIENCE

[source/platform context]

1. Audience Overview

2. Audience Highlights

3. Audience Profiles
   [ Followers | Engaged ]

4. Audience & Content Context
   optional / bounded

5. Audience Change
   only when sufficient comparable history exists

6. Data Status
```

Exact visual composition is not frozen here.

The existing whole-section Follower / Engaged interaction remains the primary cohort exploration model.

---

## 6. Audience Overview

Audience Overview is a concise orientation layer using accepted factual/source-native truth.

It may summarize, where available:

- follower count as an account-level fact;
- dominant/top Follower audience facts;
- dominant/top Engaged audience facts;
- strongest geographies;
- source/freshness;
- material Follower ↔ Engaged differences already accepted by Audience reasoning.

The Overview must not create a new synthetic cross-dimensional persona.

For example, if age, gender and country are independent provider distributions, Product must not turn:

```text
largest age bucket = 25–34
largest gender bucket = women
largest country bucket = India
```

into:

> Your typical audience member is a 25–34-year-old woman in India.

unless the source actually supplies a joint distribution proving that combination.

Overview is projection and prioritization of accepted facts, not a new inference domain.

---

## 7. Audience Highlights V1

The user-facing name remains:

```text
Audience Highlights
```

V1 Highlights may draw from exactly these Audience evidence classes:

1. source-native Audience facts;
2. Follower ↔ Engaged differences;
3. accepted historical Audience change when sufficient comparable history exists.

Content V0 facts belong in the separate `Audience & Content Context` section and must not be silently promoted into demographic Audience Highlights.

Audience Highlights remain:

- 0–3;
- deterministic-first;
- evidence-backed;
- non-causal;
- creator-friendly;
- optional;
- never manufactured to fill space.

Examples of acceptable V1 meaning:

> Your engaged audience skews older than your follower audience.

> India remains your strongest audience market across recent comparable snapshots.

> Your engaged audience has become more concentrated in the 25–34 age group across the available comparison period.

Exact change/materiality thresholds remain technical-contract work and should reuse accepted deterministic foundations where semantically valid rather than inventing weaker rules to populate the UI.

---

## 8. Audience Profiles — bounded cohort summaries, not Personas

Audience V1 introduces **Audience Profiles** as structured cohort summaries, not traditional marketing Personas.

For Instagram V1:

```text
Follower Profile
Engaged Profile
```

subject to the same cohort-usability rules as Audience V0.

### 8.1 Profile contents

A Profile may summarize, where available:

- cohort identity (`Followers` or `Engaged`);
- cohort size only where the provider supplies a semantically valid count;
- largest / material age distribution facts;
- largest / material gender distribution facts;
- largest / material country/city facts;
- distribution concentration where technically supported and Product-safe;
- meaningful differences from the peer cohort;
- freshness / limitations.

### 8.2 No synthetic person

Audience Profiles must not collapse independent demographic breakdowns into one invented person.

Do not generate labels such as:

```text
Urban Gen-Z Beauty Explorer
Young Affluent Skincare Enthusiast
Millennial Wellness Seeker
```

merely from age/gender/geography distributions.

### 8.3 No unsupported psychographics

Audience V1 does not infer:

- motivations;
- values;
- lifestyle;
- income;
- profession;
- education;
- purchase intent;
- interests/affinities not supplied by accepted source evidence;
- Brand preference;
- personality type.

A future source may justify richer Persona semantics, but that requires new Product authority.

---

## 9. Audience & Content Context — separate truths, bounded presentation

Audience V1 may consume accepted Content V0 outputs to help the Creator view healthy Audience and Content truths side-by-side.

This section is **context**, not synthesis.

V1 freezes:

```text
AUDIENCE_CONTENT_CONTEXT_ITEMS = 0..2
```

Each context item must preserve two explicitly separate evidence blocks:

```text
AUDIENCE FACT
<source-native Audience conclusion>

CONTENT FACT
<accepted Content conclusion>
```

The UI/copy must not imply that the Audience fact caused, preferred, responded to, or explains the Content fact.

Permitted example:

```text
Audience
Your engaged audience is strongest in the 25–34 age group.

Content
Across your recent Content overall, step-by-step educational posts showed one of the stronger save-rate patterns.
```

Not permitted:

> Your 25–34 audience prefers step-by-step educational posts.

Not permitted:

> Because your audience skews 25–34, educational posts perform better.

### 9.1 Content remains canonical owner

Audience does not copy or become canonical owner of Content semantic/performance truth.

It consumes current accepted Content outputs by bounded reference/projection.

If Content current is unavailable, stale beyond the accepted use boundary, partial for the relevant fact, or insufficient, the corresponding context item is omitted/degraded without invalidating healthy Audience data.

### 9.2 No mini Content dashboard

Audience & Content Context must not reproduce Content Snapshot, full Content Highlights, Representative Content or Content Performance sections.

Its purpose is orientation, not duplication.

### 9.3 No recommendation layer

Audience & Content Context remains descriptive and must not say:

- make more of this;
- target this age group;
- stop creating another format;
- this audience will buy more;
- this Content caused audience growth.

---

## 10. Audience Change

Audience V1 may add a bounded longitudinal section when sufficient accepted comparable history exists.

Purpose:

> show whether material source-native audience characteristics are changing across trustworthy snapshots.

### 10.1 Continuity / comparability contract

Audience Change may compare snapshots only when all relevant identity/semantic bases remain comparable, including:

```text
same canonical Creator subject
same source/platform
same provider account identity
same source-native cohort meaning
same metric/breakdown definition
compatible provider semantics
compatible denominator/basis where required
```

A provider account change, cohort-definition change, materially incompatible provider-method change, or other semantic break starts a new comparison series for the affected fact.

Do not bridge those breaks merely to preserve a trend line.

### 10.2 Source of history

Audience Change must use accepted historical Audience snapshots / Evidence under the exact continuity constraints above.

It must not compare changed provider accounts as if they were one continuous audience.

### 10.3 Eligible change families

V1 may evaluate factual change in:

- follower count where comparable observed snapshots exist;
- age distribution;
- gender distribution;
- country distribution;
- city distribution;
- Follower ↔ Engaged differences;
- accepted concentration measures where technically supported.

### 10.4 Sufficiency

Audience Change is shown only when historical evidence satisfies accepted deterministic trend/change gates.

Product does not invent a weaker threshold solely to populate this section.

If history is insufficient, the section is omitted rather than rendered as an empty trend chart.

Do not interpolate or manufacture missing historical snapshots.

### 10.5 No causal claims

Allowed:

> The 25–34 share of your engaged audience increased across the available comparable period.

Not allowed:

> Your recent Reels caused your audience to become older.

Audience V1 does not establish causality between Content history and Audience change.

---

## 11. Model / reasoning boundary

Audience V1 remains deterministic-first.

### Deterministic authority owns:

- demographic/source facts;
- Follower / Engaged comparisons;
- historical change arithmetic;
- materiality/sufficiency gates;
- concentration calculations where authorized;
- selection/ranking of facts used in Profiles/Highlights;
- cross-workspace compatibility checks.

### Model use

Audience V1 does **not require an LLM** to create Profiles, Audience Highlights or change conclusions.

If a later presentation layer uses model assistance solely to rewrite already-finalized facts into more natural copy, that wording layer must not add new semantic claims and is not required for V1 acceptance.

Classic generative Persona creation is not authorized.

---

## 12. Interaction with Content V0

Content V0 and Audience V1 remain peer sections under Insights.

```text
Audience
= who follows / engages + how that audience is changing

Content
= what the Creator makes + how recent Content patterns perform
```

Audience may consume only the bounded contextual projection in Section 9.

Content does not consume or mutate Audience Profile output merely because Audience V1 exists.

Any future demographic-specific Content-response analysis requires direct source evidence and new Product authority.

---

## 13. Interaction with Creator Brand — no evidence or mutation authority

Creator Brand is canonical Creator-controlled commercial identity.

Audience V1 is measured / source-derived Audience Intelligence.

Freeze:

```text
CREATOR BRAND
!= AUDIENCE V1 EVIDENCE INPUT

AUDIENCE V1
!= CREATOR BRAND SUGGESTION SOURCE

AUDIENCE V1
!= CREATOR BRAND MUTATION AUTHORITY
```

Audience facts must not be used to infer or rewrite Creator Brand positioning, niches, archetypes, voice/personality, visual identity, Bio or languages under this Product authority.

The frozen Creator Brand V0 suggestion map remains limited to its five explicitly authorized Content/source-derived families.

Any future use of Audience facts inside Creator Brand requires a **Creator Brand Product amendment** and separate technical authorization.

Creator Brand may coexist in the UI/program as a separate workspace, but Creator-authored identity must not feed back into Audience Profiles/Highlights/change as if it were Audience evidence.

---

## 14. Interaction with Media Kit — reconciled with frozen Media Kit V0

Media Kit V0 is now separately Product-frozen as the Brand-facing composition/presentation layer.

Audience V1 does not add publication controls.

Media Kit owns the coarse control:

```text
SHOW AUDIENCE IN MEDIA KIT
ON / OFF
```

and the compact Brand-facing projection allowed by Media Kit authority.

Audience V1 does **not** automatically make every V1 field/Profile/change conclusion Brand-facing.

Media Kit remains responsible for deciding the bounded publishable projection under its own accepted Product contract.

Audience itself remains an understanding surface.

---

## 15. Multi-platform V1 principles

The accepted Audience V0 multi-platform principles remain authoritative.

Audience Profiles stay source-native when additional platforms arrive.

Examples:

```text
Instagram
→ Follower Profile / Engaged Profile

YouTube
→ source-native subscriber/viewer profiles as supported

TikTok
→ source-native profiles as supported
```

Do not force all sources into Instagram Follower/Engaged semantics.

Cross-platform Audience conclusions may be added only after semantic/window compatibility is explicitly reviewed.

Do not create:

- fake unique cross-platform audience totals;
- naive merged demographics;
- synthetic cross-platform Personas from incompatible sources.

Platform capability absence remains distinct from integration failure.

---

## 16. Roles / customization / lifecycle

Audience V1 remains read-only Insights.

```text
OWNER = READ
MANAGER = READ
ASSISTANT = READ
```

No Audience V1 surface owns:

- editing source facts;
- editing Profile conclusions;
- manual Persona authoring;
- source refresh;
- OAuth/reconnect/disconnect;
- source deletion;
- Creator Brand mutation;
- Media Kit publication;
- Marketplace targeting controls.

Source lifecycle remains Settings-owned.

---

## 17. Explicit V1 exclusions

Audience V1 excludes:

- unsupported psychographic Personas;
- synthetic cross-dimensional demographic persons;
- demographic-segment × Content-response inference without direct source evidence;
- causal attribution between Content and audience change;
- Audience → Creator Brand inference/suggestion/mutation;
- Creator Brand → Audience evidence contamination;
- recommendations / growth coaching;
- audience-targeting advice;
- fake-follower scoring;
- inferred purchase intent;
- income/profession/education inference;
- Brand affinity inference without source evidence;
- Marketplace/AI Match scoring;
- Media Kit curation controls;
- public Audience publication;
- cross-platform demographic merging;
- unique cross-platform audience claims;
- Creator-editable Audience facts;
- longitudinal forecasting/prediction;
- interpolation across missing history;
- continuity across source/account/provider-semantic breaks;
- duplication of the Content workspace inside Audience.

---

## 18. Product-level acceptance criteria

Audience V1 is Product-acceptable only when:

1. accepted Audience V0 factual/cohort behavior remains intact;
2. Audience Profiles summarize source-native cohort facts without inventing a synthetic person;
3. independent demographic distributions are never silently cross-joined into unsupported combined segments;
4. no unsupported psychographic Persona is generated;
5. Audience & Content Context consumes accepted Content truth by projection rather than duplicating ownership;
6. Audience & Content Context exposes at most two bounded context items and keeps Audience and Content evidence explicitly separate;
7. Content context does not create demographic-segment × Content-response claims without direct evidence;
8. Audience Change appears only with sufficient comparable historical evidence;
9. account/provider/cohort-definition/metric-semantic breaks cannot be treated as one continuous historical audience;
10. missing history is not interpolated merely to create a trend;
11. change conclusions remain descriptive and non-causal;
12. deterministic reasoning remains authority for Profile/Highlight/change selection;
13. LLM execution is not required for V1 acceptance;
14. valid Audience current remains usable independently of Content degradation;
15. Audience V1 does not use Creator Brand as evidence and does not mutate/suggest Creator Brand truth;
16. Audience V1 does not mutate Content, Settings, Media Kit, Campaign or Collaboration truth;
17. Media Kit projection remains governed by the separate frozen Media Kit V0 Product authority;
18. multi-platform source-native semantics remain preserved;
19. no mini Content dashboard or recommendation layer is introduced inside Audience.

---

## 19. Authority / next boundary

```text
CREATOR_AUDIENCE_V0_PRODUCT = PRESERVED

CREATOR_AUDIENCE_V1_PRODUCT = FROZEN_V2

AUDIENCE_PROFILES = FROZEN_AS_BOUNDED_COHORT_SUMMARIES

CLASSIC_PSYCHOGRAPHIC_PERSONA = NOT_AUTHORIZED

AUDIENCE_CONTENT_CONTEXT = FROZEN_AS_0..2_SEPARATE_EVIDENCE_CONTEXT_ITEMS

DEMOGRAPHIC_CONTENT_SEGMENT_ATTRIBUTION = NOT_AUTHORIZED

AUDIENCE_CHANGE = FROZEN_AS_CAPABILITY_GATED_WITH_STRICT_CONTINUITY

CREATOR_BRAND_AS_AUDIENCE_EVIDENCE = NO

AUDIENCE_TO_CREATOR_BRAND_SUGGESTION = NO

MEDIA_KIT_AUDIENCE_PROJECTION = OWNED_BY_SEPARATE_FROZEN_MEDIA_KIT_V0 AUTHORITY

TECHNICAL_PREFLIGHT = NOT_AUTHORIZED BY THIS DOCUMENT ALONE

IMPLEMENTATION = NOT_AUTHORIZED
```

Next authority transition should occur only after Parent chooses the implementation sequencing and technical owner against the accepted Creator Audience V0, Content V0 and then-current canonical application base.
