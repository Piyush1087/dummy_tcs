# Creator Centre — Creator Brand V0 Product Decision Register V2

`CREATOR_BRAND_V0_PRODUCT_DECISION_REGISTER_V2`

**STATUS = PRODUCT_FROZEN_FOR_V0**

**SUPERSEDES = CREATOR_BRAND_V0_PRODUCT_DECISION_REGISTER_V1 @ 2d99ad1cf62e185371e7946e018bd6f600bb5194**

**IMPLEMENTATION = NOT_AUTHORIZED_BY_THIS DOCUMENT ALONE**

This document is the current Product authority for **Creator Brand V0** inside Creator Centre.

V2 preserves the V1 ownership model and adds the material Product decisions recovered from the prior Creator Product discussion: shared Creator Archetypes, explicit Creator Style, fixed niche/voice cardinality, a mandatory projected identity header, an explicit Content→Creator Brand suggestion map, and the rule that Intelligence accelerates setup but is never a prerequisite.

Legacy Creator Profile / Media Kit / Instagram profile implementation is reference-only and is not Creator Brand Product, UX, schema, reconciliation or persistence authority.

---

## 1. Program position and accepted predecessors

Creator Brand follows accepted Creator Insights / Audience V0 and Content V0.

Durable program order remains:

```text
1. Audience V0 — completed
2. Content V0 — completed / technically accepted
3. Creator Brand V0 — this Product authority
4. Audience V1 — after Creator Brand
5. other Instagram-linked Creator Intelligence — individually bounded
6. Operational Setup / Work Preferences
7. Rate Card
8. Media Kit — final
```

Portfolio remains deferred and has no implementation position unless Parent/user later makes an explicit Product decision.

Creator Brand must reuse accepted Creator Centre / Intelligence foundations where technically relevant; it must not create a parallel Creator Intelligence runtime merely because it consumes suggestions.

---

## 2. Durable Creator Centre placement

```text
Creator Centre
├── Insights
│   ├── Audience
│   └── Content
├── Creator Brand
├── Portfolio
├── Commercial Setup
│   ├── Work Preferences / Operational Readiness
│   └── Rate Card
└── Media Kit
```

Creator Brand is a separate Creator Centre workspace because its job is distinct from:

```text
Content
= observed recent content behavior / performance

Creator Brand
= Creator-controlled identity / positioning / self-presentation

Portfolio
= curated / verified commercial proof

Commercial Setup
= how the Creator wants to work commercially

Media Kit
= Brand-facing composition / presentation / visibility
```

---

## 3. Creator Brand V0 purpose

Creator Brand helps the Creator:

> define how Brands should understand them as a Creator — what they are known for, how they create, how they communicate, and the identity they want to carry across Creator Shop.

Creator Brand V0 is neither:

- a read-only AI profile;
- a copy of Instagram profile fields;
- a generic personal-profile editor;
- a Media Kit editor;
- a Portfolio manager;
- a Rate Card / Commercial Setup surface;
- a legal identity / KYC surface;
- an automatic Marketplace / AI Match profile;
- a source-derived identity that silently changes on refresh.

---

## 4. Canonical ownership model

Freeze:

```text
CREATOR BRAND V0
= CREATOR-CONTROLLED CANONICAL COMMERCIAL IDENTITY
  ASSISTED BY EVIDENCE-BACKED SUGGESTIONS
```

Creator Brand uses three distinct truth states:

```text
OBSERVED
!=
SUGGESTED
!=
CREATOR_CONFIRMED
```

### 4.1 Observed

Observed source / Content Intelligence may identify evidence-backed patterns such as recurring themes, communication patterns, creative structures, visual execution patterns and source-supported language observations.

Observed facts remain source-derived Intelligence. They are not canonical Creator Brand identity.

### 4.2 Suggested

Creator Shop may convert sufficiently supported source-derived observations into bounded suggestions for eligible Creator Brand fields.

A suggestion is neither measured fact nor canonical Creator identity.

### 4.3 Confirmed

Only an explicit authorized Creator action may establish or change canonical Creator Brand truth.

```text
SUGGEST
→ CREATOR USES / EDITS / WRITES
→ EXPLICIT CONFIRMATION
→ CANONICAL CREATOR BRAND
```

No suggestion may auto-apply.

---

## 5. Source refresh / reconciliation rule

Freeze:

```text
CONFIRMED CREATOR BRAND
= STABLE UNTIL AN AUTHORIZED CREATOR CHANGES IT
```

A later source refresh may create a new optional suggestion when accepted evidence rules support one.

It must never silently overwrite a confirmed/edited Creator Brand value.

V0 does not require automatic reconciliation, conflict resolution or longitudinal identity trend history beyond this non-overwrite rule.

---

## 6. Source lifecycle independence and manual-first setup

Creator Brand is Creator-owned business truth, not Instagram-owned truth.

Freeze:

```text
INSTAGRAM / SOURCE DISCONNECT OR FAILURE
!=
DELETE CREATOR BRAND
```

Creator Brand must remain fully usable when no current source Intelligence is available.

```text
INTELLIGENCE
= OPTIONAL SETUP ACCELERATOR
!=
CREATOR BRAND PREREQUISITE
```

If accepted Content/Instagram Intelligence exists, Creator Brand may surface suggestions. If it does not, the Creator may create and maintain the complete V0 Creator Brand manually.

Creator Settings remains authority for social connection / OAuth / reconnect / disconnect / token lifecycle / purge initiation.

---

## 7. Mandatory projected identity header

Creator Brand V0 displays a compact read-only identity header projected from canonical Creator/profile/source authority where available:

```text
Creator name
profile/avatar image
primary connected Instagram handle
```

These are context only. Creator Brand must not create competing mutation surfaces for name, avatar or Instagram account identity.

---

## 8. Creator Brand V0 structure and fields

V0 freezes four Product sections:

```text
1. Profile & Positioning
2. Creator Style
3. Voice & Personality
4. Visual Identity
```

Exact persistence decomposition / Object-component architecture is not Product authority.

### 8.1 Profile & Positioning

Creator-owned fields:

```text
Headline / Positioning
Short commercial Bio
Primary Niches — maximum 3
Languages I create in
```

#### Headline / Positioning

One concise Creator-controlled statement answering:

> What should a Brand understand about me quickly?

The Creator may write manually, use a suggestion, or edit a suggestion before confirmation.

#### Commercial Bio

A Creator-controlled Creator Shop commercial identity description.

```text
INSTAGRAM BIO
!=
CREATOR BRAND BIO
```

Instagram/source profile text may inform a suggestion but does not silently become Creator Brand truth.

#### Primary Niches

Freeze:

```text
PRIMARY NICHES
MAXIMUM = 3
```

Niches describe what the Creator positions themselves around / wants to be known for.

```text
CREATOR BRAND NICHE
!=
COMMERCIAL SETUP PREFERRED BRAND INDUSTRY
```

Technical implementation should reuse a canonical/shared category or industry vocabulary where semantics genuinely overlap, but must not collapse the two Product meanings into one field.

#### Languages I create in

This is Creator-confirmed commercial language/expression information.

```text
LANGUAGES I CREATE IN
!= AUDIENCE GEOGRAPHY
!= CREATOR LEGAL / ACCOUNT LOCALE
```

Source/caption observations may suggest values, but the Creator confirms them.

### 8.2 Creator Style — canonical Creator Archetypes

Creator Brand V0 uses the existing frozen canonical Creator Archetype library as the structured self-description vocabulary:

```text
campaign/canonical/creator_archetypes.yaml
```

Freeze:

```text
CREATOR BRAND ARCHETYPES
MINIMUM = 1
MAXIMUM = 3
CUSTOM ENTRIES = NO
CANONICAL IDS ONLY = YES
```

Examples from the shared library include `EDUCATOR`, `STORYTELLER`, `PRODUCT_REVIEWER`, `RELATABLE_PEER`, `VISUAL_ARTIST`, `THOUGHT_LEADER`, `DEMONSTRATOR`, `UGC_CREATOR`, etc.

This intentionally converges Creator self-description with Brand Campaign Creator Strategy vocabulary without making self-declaration proof of fit.

```text
CREATOR SELF-DECLARED ARCHETYPE
!=
PROVEN MATCH
```

Future matching may combine confirmed archetypes with observed Content behavior, Audience and performance. This Product register does not authorize a matching score.

Special semantic guardrail:

```text
UGC_CREATOR archetype
!=
OPEN_TO_UGC_PROJECTS Work Preference
```

The archetype describes Creator style/identity. The Work Preference describes commercial willingness. Neither field substitutes for the other.

### 8.3 Voice & Personality

Freeze:

```text
VOICE / PERSONALITY DESCRIPTORS
MAXIMUM = 3
```

Use a bounded controlled descriptor vocabulary rather than free-text-only canonical semantics.

V0 also allows one optional bounded short Creator-written description that adds nuance to the selected descriptors.

Illustrative descriptors such as `Educational`, `Warm`, `Direct`, `Playful`, `Aspirational`, `Practical`, `Analytical`, `Conversational` or `Bold` are examples only. Technical preflight must determine whether an accepted shared vocabulary exists; otherwise it must return a proposed bounded vocabulary for Product review before implementation authorization.

### 8.4 Visual Identity

V0 supports a lightweight Creator-controlled visual identity consisting only of:

- bounded visual-style descriptors; and
- an optional Creator-selected palette.

Observed visual execution / dominant colors may support a suggestion but never automatically become Creator-confirmed visual identity.

V0 excludes custom fonts, creator logo builder, moodboard, image asset library, website builder and custom Media Kit layout tooling.

---

## 9. Frozen Content → Creator Brand suggestion map

The following family-level suggestion relationships are Product-authorized when evidence/sufficiency rules pass:

```text
CONTENT THEMES
→ may suggest CREATOR BRAND NICHE / POSITIONING

CONTENT COMMUNICATION PATTERNS
→ may suggest VOICE / PERSONALITY

CONTENT CREATIVE STRUCTURES / PATTERNS
→ may suggest CREATOR ARCHETYPE

CONTENT VISUAL EXECUTION
→ may suggest VISUAL-STYLE DESCRIPTORS / PALETTE CUES

SOURCE-SUPPORTED LANGUAGE OBSERVATIONS
→ may suggest LANGUAGES I CREATE IN
```

This is an admissible suggestion map, not an automatic inference-to-truth map.

The model / technical SA must not invent additional Creator Brand suggestion families without Product authority.

Exact sufficiency, evidence, confidence, provenance and deterministic/model responsibility remain technical-preflight work.

---

## 10. Suggestion interaction model

Suggestions appear inline with the field they can help.

V0 behavior:

```text
CURRENT CONFIRMED VALUE
<Creator-controlled value>

OPTIONAL EVIDENCE-BACKED SUGGESTION
<suggestion>

[Use suggestion]
[Edit]
```

If no confirmed value exists:

```text
Suggested for you
<suggestion>

[Use this]
[Edit before using]
[Write my own]
```

V0 does not require an AI Suggestions tab, multiple competing suggestions, confidence sliders, AI-chat editing, permanent suppression policy or automatic periodic rewrites.

---

## 11. Team roles

Freeze:

```text
OWNER
READ = YES
EDIT = YES
CONFIRM_SUGGESTIONS = YES

MANAGER
READ = YES
EDIT = YES
CONFIRM_SUGGESTIONS = YES

ASSISTANT
READ = YES
EDIT = NO
CONFIRM_SUGGESTIONS = NO
```

Changing Creator Brand is authoritative business mutation. Use explicit Creator Brand actions rather than inferring mutation authority from unrelated permissions.

---

## 12. Multi-platform Product direction

Creator Brand is one platform-neutral canonical identity. It has no platform selector in V0.

Future source-native observations may produce suggestions from Instagram, YouTube or TikTok, but contradictory source observations are not averaged or silently reconciled.

```text
Instagram observations
YouTube observations
TikTok observations
        ↓
source-native suggestions
        ↓
Creator decision
        ↓
ONE canonical Creator Brand
```

Platform-specific Creator Brand variants are deferred unless future Product evidence justifies them.

---

## 13. Ownership exclusions

Creator Brand V0 does not own or duplicate mutation authority for:

- legal identity;
- email / phone;
- shipping address;
- Creator base country / commercial geography;
- payout / bank / KYC;
- provider credentials;
- OAuth / Instagram connection lifecycle;
- Instagram handle/account lifecycle;
- Audience demographics;
- Content metrics / factual Content Intelligence;
- Collaboration history;
- Portfolio proof/history;
- Commercial Setup availability;
- preferred/excluded Brand industries;
- gifting/barter or UGC willingness;
- Rate Card;
- Media Kit visibility / section ordering;
- Campaign/Application state.

---

## 14. Downstream consumer boundary

Creator Brand owns canonical Creator identity truth.

Potential later consumers include Media Kit, Marketplace / Creator discovery, AI Match, Campaign / Application context and Portfolio presentation.

This register does **not** automatically authorize those consumers to receive every Creator Brand field, nor does it authorize eligibility/ranking/matching behavior.

Each downstream Product surface retains its own authority for projection, privacy, ranking, eligibility and visibility.

---

## 15. V0 UX hierarchy

Frozen semantic hierarchy:

```text
CREATOR BRAND

[read-only projected identity]
Name · Avatar · Instagram handle

PROFILE & POSITIONING
Headline / Positioning
Commercial Bio
Primary Niches — max 3
Languages I create in

CREATOR STYLE
Creator Archetypes — 1–3

VOICE & PERSONALITY
Controlled descriptors — max 3
Optional short description

VISUAL IDENTITY
Style descriptors
Optional palette

Evidence-backed suggestions
→ shown inline with eligible fields
```

Exact visual composition is not frozen here.

Creator Brand remains one coherent workspace rather than many top-level tabs.

---

## 16. Explicit V0 exclusions

Creator Brand V0 excludes:

- automatic source-driven identity mutation;
- Creator Brand score / brand-strength score;
- AI Match score;
- public discoverability controls;
- Media Kit section visibility;
- Portfolio curation;
- Rate Card / Work Preferences;
- UGC willingness as a Creator Brand field;
- Campaign eligibility rules;
- recommendation / growth coaching;
- automatic cross-platform synthesis;
- longitudinal Creator Brand trend analysis;
- social publishing;
- Content editing;
- legal identity / KYC;
- custom domain / website builder;
- AI-chat persona generator;
- multiple Creator Brand personas;
- agency-managed Creator Brand;
- structured Creator Values section;
- custom fonts;
- logo builder;
- moodboard / asset library;
- Audience Persona/Profile.

---

## 17. Product-level acceptance criteria

Creator Brand V0 is Product-acceptable only when:

1. one canonical Creator Brand identity exists independently of Instagram/source lifecycle;
2. the workspace is fully usable without current Intelligence suggestions;
3. canonical name/avatar/Instagram identity is projected read-only rather than duplicated;
4. Positioning and commercial Bio are Creator-controlled;
5. Creator may maintain up to three structured primary niches without conflating them with preferred Brand industries;
6. Creator may select 1–3 canonical Creator Archetypes from the shared Campaign library;
7. self-declared archetypes are never treated as proven match evidence;
8. `UGC_CREATOR` archetype does not replace `Open to UGC projects` commercial willingness;
9. Creator may maintain up to three controlled Voice/Personality descriptors plus an optional short description;
10. Creator may maintain lightweight visual identity / optional palette;
11. Creator may maintain confirmed `Languages I create in`;
12. only the frozen Content→Creator Brand suggestion families may be used without new Product authority;
13. accepted Creator Intelligence may provide evidence-backed suggestions where sufficient;
14. no suggestion becomes canonical without explicit authorized Creator action;
15. Creator may edit a suggestion before confirming it;
16. later source refresh never silently overwrites confirmed Creator Brand truth;
17. missing/unavailable/partial/failing source Intelligence does not fabricate a suggestion or block manual setup;
18. Creator Brand remains distinct from observed Content Intelligence;
19. Creator Brand remains distinct from operational/account/legal identity and Commercial Setup;
20. Creator Brand remains distinct from Portfolio and Media Kit;
21. Owner and Manager may mutate; Assistant is read-only;
22. no downstream consumer automatically gains authority merely because Creator Brand exists;
23. canonical identity remains platform-neutral even though Instagram is the V0 suggestion source;
24. no Creator Brand score, automatic recommendation engine or source-driven identity mutation is introduced;
25. integrated implementation preserves accepted Audience / Content / Brand shared-runtime behavior and tenant/subject isolation.

---

## 18. Technical questions intentionally left to preflight

The existing Brand Centre / Instagram Intelligence Technical SA must audit and return these before implementation authorization:

```text
CURRENT CANONICAL BACKEND / FRONTEND BASE
LATEST ACCEPTED CONTENT V0 RUNTIME / AUTHORITY AFTER CORRECTION 1
EXISTING CREATOR PROFILE / MEDIA KIT LEGACY FIELDS AND DISPOSITION
CANONICAL CREATOR ARCHETYPE LIBRARY + CONSUMERS + SAFE REUSE
EXISTING BRAND IDENTITY / BRAND INTELLIGENCE DONOR SEMANTICS
EXISTING CONTENT SEMANTIC OUTPUTS ADMISSIBLE FOR EACH FROZEN SUGGESTION FAMILY
SUGGESTION EVIDENCE / SUFFICIENCY / PROVENANCE CONTRACT
VOICE / PERSONALITY TAXONOMY REUSE OR PROPOSED BOUNDED VOCABULARY
NICHE / CATEGORY TAXONOMY REUSE OR PROPOSED SHARED CONTRACT
VISUAL-STYLE / PALETTE DONOR REUSE
LANGUAGE SOURCE OBSERVATION CAPABILITY
CANONICAL PERSISTENCE MODEL FOR CREATOR-CONTROLLED BRAND TRUTH
VERSIONING / AUDIT / PROSPECTIVE EDIT SEMANTICS
ROLE / ACTION / ACTOR-SUBJECT AUTHORIZATION
SOURCE-DISCONNECT / PURGE BOUNDARY
MANUAL-FIRST NO-INTELLIGENCE FLOW
MULTI-PLATFORM FUTURE-PROOFING
FRONTEND CREATOR CENTRE / AURORA REUSE
MIGRATION / SCHEMA IMPACT
ACCEPTANCE / BROWSER / POSTGRESQL PLAN
```

A donor/runtime fact that materially conflicts with this Product register must return to Creator Product authority rather than silently changing Product.

---

## 19. Authority / next boundary

```text
CREATOR_BRAND_V0_PRODUCT = FROZEN_V2

SUPERSEDES_V1 = YES

CANONICAL_OWNERSHIP = CREATOR_CONTROLLED

CREATOR_STYLE_ARCHETYPES = 1_TO_3_CANONICAL_IDS

PRIMARY_NICHES_MAX = 3

VOICE_DESCRIPTORS_MAX = 3

SOURCE_INTELLIGENCE = OPTIONAL_SUGGESTION_INPUT_ONLY

MANUAL_SETUP_WITHOUT_INTELLIGENCE = REQUIRED

AUTO_APPLY_SUGGESTIONS = NO

AUTO_OVERWRITE_CONFIRMED_BRAND = NO

OWNER_MUTATION = YES
MANAGER_MUTATION = YES
ASSISTANT_MUTATION = NO

PLATFORM_NEUTRAL_CANONICAL_IDENTITY = YES

TECHNICAL ROLE / DONOR / CURRENT-STATE / REUSE PREFLIGHT = AUTHORIZED

IMPLEMENTATION = NOT AUTHORIZED BY THIS DOCUMENT ALONE
```

Next authority transition:

```text
Creator Orchestrator / Parent
→ immutable Creator Brand V0 Product Register V2
→ existing Brand Centre / Instagram Intelligence Technical SA
→ restart bounded role/authority comprehension + current-state/donor-reuse preflight under V2
→ architecture delta + finite execution plan
→ Creator Orchestrator / Parent review
→ separate explicit implementation authorization
→ bounded Local Codex execution
→ technical acceptance
→ Creator Product post-implementation learning review
```
