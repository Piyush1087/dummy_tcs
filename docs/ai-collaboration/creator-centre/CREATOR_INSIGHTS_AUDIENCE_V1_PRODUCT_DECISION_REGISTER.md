# Creator Centre — Insights / Audience V1 Product Decision Register

`CREATOR_INSIGHTS_AUDIENCE_V1_PRODUCT_DECISION_REGISTER_V1`

STATUS = PRODUCT_FROZEN_FOR_V1

IMPLEMENTATION = NOT_AUTHORIZED_BY_THIS DOCUMENT ALONE

This document extends the accepted Creator Audience V0 Product model after Creator Content V0 became technically accepted.

Audience V1 is a bounded evolution of the existing **Insights → Audience** section. It does not create a new workspace, new source lifecycle, new public profile surface, or new Media Kit authority.

Audience V0 remains authoritative for source-native demographic truth, Follower / Engaged separation, missingness semantics, freshness, and the whole-section cohort interaction.

Content V0 remains authoritative for observed recent Content behavior and Content performance patterns.

Audience V1 may consume accepted Content outputs only where the meaning remains evidence-bounded.

---

## 1. Product purpose

Audience V1 helps the Creator move from:

> What does my audience data say?

into:

> What is the clearest evidence-backed story about the audience I reach and the audience that engages with me?

Audience V1 adds interpretation and longitudinal context without inventing demographic-to-content-response relationships that the source does not prove.

---

## 2. Durable IA

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

---

## 3. Accepted V0 behavior preserved

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
- Media Kit later owns Brand-facing Audience visibility and curation.

Audience V1 does not replace these rules.

---

## 4. Critical evidence boundary — no demographic × content-response invention

Content V0 can establish:

- what recent content the Creator makes;
- themes, formats, creative structures and communication/visual patterns;
- evidence-backed performance differences across sufficiently supported content cohorts.

Audience V0 can establish source-native audience distributions such as age, gender, country, city and Follower / Engaged population differences.

These two evidence families do **not** by themselves prove which demographic segment responded to which content pattern.

Therefore Audience V1 must not make unsupported claims such as:

```text
25–34-year-olds prefer tutorials.
Women in Mumbai engage most with skincare reviews.
UK followers respond better to Reels.
```

unless a future provider/source supplies a trustworthy demographic-segment × content-response linkage and Product explicitly authorizes it.

Allowed whole-audience juxtaposition may instead say:

> Your engaged audience skews older than your follower audience. Across your recent content overall, tutorial-style posts were among the stronger-performing patterns.

The two facts remain separately grounded and are not converted into a causal/segment linkage.

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

5. Audience Change
   only when sufficient historical evidence exists

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

The Overview must not synthesize unsupported cross-dimensional personas.

For example, if age, gender and country are separate provider distributions, Product must not turn:

```text
largest age bucket = 25–34
largest gender bucket = women
largest country bucket = India
```

into:

> Your typical audience member is a 25–34-year-old woman in India.

unless the source actually supplies a joint distribution proving that combination.

---

## 7. Audience Highlights V1

The user-facing name remains:

```text
Audience Highlights
```

V1 allows Highlights to draw from three bounded evidence classes:

1. source-native Audience facts;
2. Follower ↔ Engaged differences;
3. accepted historical Audience change when sufficient history exists.

Content V0 facts may be referenced in the separate `Audience & Content Context` section rather than being silently merged into demographic Highlights.

Audience Highlights remain:

- 0–3;
- evidence-backed;
- non-causal;
- creator-friendly;
- optional;
- never manufactured to fill space.

Examples of acceptable V1 meaning:

> Your engaged audience skews older than your follower audience.

> India remains your strongest audience market across recent snapshots.

> Your engaged audience has become more concentrated in the 25–34 age group across the available comparison period.

Exact change/materiality thresholds remain technical-contract work and must reuse accepted deterministic foundations wherever semantically valid.

---

## 8. Audience Profiles — V1 replacement for classic Persona

Audience V1 introduces **Audience Profiles**, not traditional marketing Personas.

The purpose is:

> give the Creator a concise, evidence-bounded description of each source-native audience cohort without inventing motivations, lifestyles or unsupported cross-dimensional identities.

For Instagram V1 the profiles are:

```text
Follower Profile
Engaged Profile
```

subject to the same usability rules as the existing cohorts.

### 8.1 Profile contents

A profile may summarize, where available:

- cohort identity (`Followers` or `Engaged`);
- cohort size only where the provider supplies a semantically valid count;
- largest / material age distribution facts;
- largest / material gender distribution facts;
- largest / material country/city facts;
- distribution concentration where technically supported and Product-approved;
- meaningful differences from the peer cohort;
- freshness / limitations.

### 8.2 No synthetic person

Audience Profiles must not collapse independent demographic breakdowns into one invented person.

Do not create labels such as:

```text
Urban Gen-Z Beauty Explorer
Young Affluent Skincare Enthusiast
Millennial Wellness Seeker
```

merely from age/gender/geography distributions.

Such labels imply psychographic or cross-dimensional knowledge the source may not support.

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

A future provider/source may justify richer Audience Personas, but that is not Audience V1 authority.

---

## 9. Audience & Content Context

Audience V1 may consume accepted Content V0 outputs to help the Creator understand their audience and recent Content side-by-side.

This section is explicitly **whole-audience / cross-workspace context**, not demographic-segment attribution.

It may show a small number of Content-derived facts such as:

- recurring recent themes;
- recurring creative structures;
- sufficiently supported Content performance patterns;
- representative Content references where useful.

Example:

> Your engaged audience is strongest in the 25–34 age group. Across your recent Content overall, step-by-step educational posts were one of the stronger save-rate patterns.

This is allowed because each clause retains its own evidence basis.

Not allowed:

> Your 25–34 audience prefers step-by-step educational posts.

unless a future source explicitly proves that linkage.

### 9.1 Content remains canonical owner

Audience does not copy or become canonical owner of Content semantic/performance truth.

It consumes current accepted Content outputs by reference/projection.

If Content current is unavailable, stale beyond accepted use, or insufficient, Audience & Content Context hides/degrades truthfully without invalidating healthy Audience data.

### 9.2 No recommendation layer

Audience & Content Context is descriptive.

It must not say:

- make more of this;
- target this age group;
- stop creating another format;
- this audience will buy more;
- this Content caused audience growth.

Recommendations remain outside Audience V1.

---

## 10. Audience Change

Audience V1 may add a bounded longitudinal section when sufficient accepted history exists.

Purpose:

> show whether material audience characteristics are changing across trustworthy historical snapshots.

### 10.1 Source of history

Audience Change must use accepted source-native historical Audience snapshots / Evidence under the same Creator + platform/account identity constraints.

It must not compare across changed provider accounts as if they were one continuous audience.

### 10.2 Eligible change families

V1 may evaluate factual change in:

- follower count where comparable observed snapshots exist;
- age distribution;
- gender distribution;
- country distribution;
- city distribution;
- Follower ↔ Engaged differences;
- accepted concentration measures where technically supported.

### 10.3 Sufficiency

Audience Change is shown only when historical evidence satisfies accepted deterministic trend/change gates.

Product does not invent a weaker threshold solely to populate this section.

If history is insufficient, the section is omitted rather than rendered as an empty trend chart.

### 10.4 No causal claims

Allowed:

> The 25–34 share of your engaged audience increased across the available comparison period.

Not allowed:

> Your recent Reels caused your audience to become older.

Content and Audience history may later support separate research, but Audience V1 does not establish causality between them.

---

## 11. Model / reasoning boundary

Audience V1 should remain deterministic-first.

### Deterministic authority owns:

- demographic/source facts;
- Follower / Engaged comparisons;
- historical change arithmetic;
- materiality/sufficiency gates;
- concentration calculations where authorized;
- selection/ranking of facts used in Profiles/Highlights;
- cross-workspace compatibility checks.

### Model use

Audience V1 does **not require an LLM** to create demographic Profiles, Audience Highlights or change conclusions.

If a later UX layer uses model assistance solely to rewrite already-finalized facts into more natural copy, that wording layer must not add new semantic claims and is not required for V1 acceptance.

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

Audience may consume a bounded projection from Content for contextual explanation.

Content does not consume or mutate Audience Profile output merely because Audience V1 exists.

Any future demographic-specific Content performance analysis requires explicit new source evidence and Product authority.

---

## 13. Interaction with Creator Brand

Audience V1 is not Creator identity authority.

Future Creator Brand may consume Audience facts such as:

- strongest markets;
- broad age range evidence;
- audience change context;
- source-native audience facts relevant to positioning.

Creator Brand remains Creator-controlled identity/positioning authority.

Audience V1 must not silently mutate Creator Brand, niche, positioning, bio, tone or commercial preferences.

---

## 14. Interaction with Media Kit

Media Kit remains the future Brand-facing composition/presentation layer.

Audience V1 does not add field-level publication controls.

Current Product direction remains one coarse Media Kit control:

```text
Show Audience in Media Kit
ON / OFF
```

Media Kit may later decide which accepted Audience facts/profiles are shown to authenticated Brands.

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
- Media Kit publication;
- Marketplace targeting controls.

Source lifecycle remains Settings-owned.

---

## 17. Explicit V1 exclusions

Audience V1 excludes:

- unsupported psychographic Personas;
- demographic-segment × Content-response inference without direct source evidence;
- causal attribution between Content and audience change;
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
- longitudinal forecasting/prediction.

---

## 18. Product-level acceptance criteria

Audience V1 is Product-acceptable only when:

1. accepted Audience V0 factual/cohort behavior remains intact;
2. Audience Profiles summarize source-native cohort facts without inventing a synthetic person;
3. independent demographic distributions are never silently cross-joined into unsupported combined segments;
4. no unsupported psychographic Persona is generated;
5. Audience & Content Context consumes accepted Content truth by projection rather than duplicating ownership;
6. Content context does not create demographic-segment × Content-response claims without direct evidence;
7. Audience Change appears only with sufficient comparable historical evidence;
8. account/provider identity changes cannot be treated as one continuous historical audience;
9. change conclusions remain descriptive and non-causal;
10. deterministic reasoning remains authority for profile/highlight/change selection;
11. LLM execution is not required for V1 acceptance;
12. valid Audience current remains usable independently of Content degradation;
13. Audience V1 does not mutate Creator Brand, Content, Settings, Media Kit, Campaign or Collaboration truth;
14. multi-platform source-native semantics remain preserved.

---

## 19. Authority / next boundary

```text
CREATOR_AUDIENCE_V0_PRODUCT = PRESERVED

CREATOR_AUDIENCE_V1_PRODUCT = FROZEN

AUDIENCE_PROFILES = FROZEN

CLASSIC_PSYCHOGRAPHIC_PERSONA = NOT_AUTHORIZED

AUDIENCE_CONTENT_CONTEXT = FROZEN_WITH_NO_SEGMENT_ATTRIBUTION

AUDIENCE_CHANGE = FROZEN_AS_CAPABILITY_GATED

MEDIA_KIT_AUDIENCE_PROJECTION = NOT_FROZEN HERE

TECHNICAL PREFLIGHT = NOT AUTHORIZED BY THIS DOCUMENT ALONE
```

This register is ready for a future bounded technical/reuse preflight after the Creator Product program decides the next implementation order.
