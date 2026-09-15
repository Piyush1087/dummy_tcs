# Creator Brand V0 — Product Amendment 1: Taxonomies and Bounds

`CREATOR_BRAND_V0_PRODUCT_AMENDMENT_1_TAXONOMIES_AND_BOUNDS_V1`

**STATUS = PRODUCT_FROZEN_AMENDMENT**

This amendment supplements:

`CREATOR_BRAND_V0_PRODUCT_DECISION_REGISTER_V2`

Authority commit at amendment creation:

`2d561da03ae5df296443f32f79f24264cc8a9361`

It closes the bounded Product gaps returned by:

`CREATOR_BRAND_V0_V2_ROLE_COMPREHENSION_DONOR_REUSE_PREFLIGHT_AND_FINITE_PLAN_V1`

All other Creator Brand V2 Product decisions remain unchanged.

---

## 1. Creator niche taxonomy — accepted for V0

Freeze the proposed bounded Creator/content-topic taxonomy as the Creator Brand V0 `Primary Niches` vocabulary:

```text
BEAUTY
FASHION
LIFESTYLE
HEALTH_WELLNESS
FITNESS
FOOD_COOKING
TRAVEL
PARENTING_FAMILY
HOME_INTERIORS
TECHNOLOGY
GAMING
EDUCATION
CAREER_PRODUCTIVITY
BUSINESS_ENTREPRENEURSHIP
PERSONAL_FINANCE
ARTS_CULTURE
ENTERTAINMENT_COMEDY
MUSIC
PHOTOGRAPHY_FILM
BOOKS_WRITING
SPORTS
AUTOMOTIVE
PETS_ANIMALS
SUSTAINABILITY
DIY_CRAFTS
RELATIONSHIPS
SPIRITUALITY_MINDFULNESS
```

Rules:

```text
PRIMARY_NICHES_MAX = 3
CUSTOM_NICHE_IDS = NO in V0
```

This is a Creator/content-topic vocabulary, not `IndustryVertical`, not Campaign Audience affinities, and not Commercial Setup preferred/excluded Brand industries.

V0 niche values are intentionally broad primary positioning categories. More granular observed themes such as `skincare`, `ingredient education`, `product comparison`, etc. may remain Content Intelligence and may inform Positioning suggestions without becoming separate hidden niche IDs.

---

## 2. Voice / Personality taxonomy — accepted for V0

Freeze the proposed controlled descriptor vocabulary:

```text
EDUCATIONAL
WARM
DIRECT
PLAYFUL
ASPIRATIONAL
PRACTICAL
ANALYTICAL
CONVERSATIONAL
BOLD
HUMOROUS
CALM
ENERGETIC
```

Rules:

```text
VOICE_DESCRIPTOR_MAX = 3
CUSTOM_DESCRIPTOR_IDS = NO in V0
OPTIONAL_VOICE_DESCRIPTION_MAX_CHARS = 300
```

The optional short description is Creator-authored canonical truth and may add nuance beyond the controlled descriptors.

---

## 3. Visual identity bounds — accepted

Freeze technical/Product bounds for Creator Brand V0:

```text
VISUAL_STYLE_DESCRIPTOR_MAX = 5
PALETTE_COLOR_MAX = 5
PALETTE_CANONICAL_FORMAT = #RRGGBB
```

Palette values are optional Creator-controlled identity.

A source-derived color word or loose visual observation must not be converted into an exact hex value unless the technical evidence can deterministically support the exact color value. Otherwise palette remains manual-only.

---

## 4. Confirmed language bounds — accepted

Freeze:

```text
CONFIRMED_LANGUAGE_MAX = 10
CANONICAL_LANGUAGE_STORAGE = normalized BCP-47 tags
```

Creator-facing labels may use appropriate CLDR display names.

Creator Brand language means languages the Creator creates/communicates in for commercial Creator identity. It does not assert fluency, legal locale, Audience language, geography, or account locale.

---

## 5. Commercial Bio suggestion boundary — confirmed

Freeze:

```text
COMMERCIAL_BIO_CONTENT_SUGGESTION = NOT AUTHORIZED IN V0
```

Commercial Bio remains Creator-authored/manual-only in V0.

The five authorized Content → Creator Brand suggestion families remain:

```text
Content themes
→ niche / positioning suggestion

Content communication patterns
→ Voice / Personality suggestion

Content creative structures
→ Creator Archetype suggestion

Content visual execution
→ visual-style / palette cue suggestion

source-supported language observation
→ language suggestion
```

No sixth suggestion family may be introduced without new Product authority.

---

## 6. Partial setup / Creator Archetype interpretation — confirmed

Creator Brand may be saved progressively.

Freeze:

```text
creatorArchetypeIds = []
= NOT_YET_CONFIGURED / PARTIAL_SETUP
```

Once the Creator confirms an archetype selection:

```text
CREATOR_ARCHETYPE_SELECTED_COUNT = 1..3
CANONICAL_IDS_ONLY = YES
```

Zero selected archetypes is therefore valid only as an incomplete/unconfigured state; it is not a confirmed `no archetype` declaration.

Campaign Creator Strategy remains independently governed by its existing 1–5 selection cardinality.

`UGC_CREATOR` archetype remains Creator style/identity and must never be treated as the Commercial Setup `Open to UGC projects` willingness flag.

---

## 7. Suggestion evidence profile — accepted as V0 implementation contract

The preflight-proposed Content recurrence/coverage profile is accepted for Creator Brand V0 suggestions:

```text
LOW
= >=3 distinct eligible posts
+ complete provider inventory
+ semantic coverage >=50%

MEDIUM
= >=5 distinct eligible posts
+ semantic coverage >=70%
+ >=2 publication dates

HIGH
= not authorized in V0
```

These confidence labels govern suggestion support only. They must never become Creator Brand strength/match scores and must never cause automatic canonical mutation.

Missing/unknown/partial Content Evidence removes or weakens a suggestion; it never fabricates absence or identity truth.

---

## 8. Product authority conclusion

```text
CREATOR_BRAND_V0_PRODUCT = FROZEN_V2_PLUS_AMENDMENT_1

NICHE_TAXONOMY = FROZEN_V0
VOICE_TAXONOMY = FROZEN_V0
VISUAL_BOUNDS = FROZEN_V0
LANGUAGE_BOUND = FROZEN_V0
COMMERCIAL_BIO_SUGGESTION = NO
PARTIAL_ARCHETYPE_SETUP = ACCEPTED
SUGGESTION_EVIDENCE_PROFILE = ACCEPTED_V0
```

No implementation is authorized by this amendment alone.
