# Creator Orchestrator — Creator Centre Resumption Handoff V1

`CREATOR_ORCHESTRATOR_RESUMPTION_HANDOFF_V1`

Date: 2026-09-15

## Status

```text
CREATOR_CENTRE_PRODUCT_PROGRAM = ACTIVE
AUDIENCE_V0 = PRODUCT + TECHNICALLY ACCEPTED
CONTENT_V0 = PRODUCT_FROZEN + AUTONOMOUS_IMPLEMENTATION UNDERWAY
NEXT_PRODUCT_AFTER_CONTENT_ACCEPTANCE = CREATOR_BRAND
```

This handoff transfers the current Creator Centre Product / Program authority from the long-running Creator Centre conversation to the existing **Creator Orchestrator** chat. It is a continuation handoff, not a new Product architecture exercise.

Do not restart accepted Creator modules or rediscover decisions already frozen below.

---

# 1. Operating topology

```text
CREATOR ORCHESTRATOR / CREATOR CENTRE SA
=
Product + Program authority
Creator lifecycle/business value
workspace purpose and IA
Product semantics
V0/V1 cutlines
cross-workspace boundaries
required Intelligence outputs
Product acceptance

BRAND CENTRE / INSTAGRAM INTELLIGENCE SA
=
Creator Instagram Intelligence Technical / Implementation SA
Brand donor interpretation
donor-semantics extraction
reuse classification
Creator subject adaptation
technical architecture
finite execution plans
Local Codex prompts
technical checkpoint review / acceptance

EXTERNAL LOCAL CODEX
=
repository implementation
PostgreSQL / migrations
tests / runtime / browser evidence
Git publication

PARENT / USER
=
final authority
Product adjudication
manual relay between chats
```

Do **not** create a third SA for Creator Instagram Intelligence.

The established direction is always:

```text
CREATOR PRODUCT NEED
→ required facts / Intelligence / UX
→ inspect accepted Brand donor
→ reuse what remains semantically valid
→ add only the true Creator delta
```

Never let Creator Product be reinterpreted simply because the Brand donor already has a convenient shape.

---

# 2. Git-first orchestration rule

To preserve chat context and reduce long inline rendering, substantial artifacts should be stored in Git.

Default workflow:

```text
1. write Product register / technical handoff / Parent authorization / correction / handoff as Markdown in Piyush1087/dummy_tcs
2. commit it
3. return only path + commit SHA + a short relay message
```

Use long inline prompts only when there is a concrete reason Git cannot be used.

---

# 3. Durable Creator Centre IA

Current preferred topology:

```text
CREATOR CENTRE

1. Insights
   ├── Audience
   └── Content

2. Creator Brand

3. Portfolio

4. Commercial Setup
   ├── Work Preferences / Operational Readiness
   └── Rate Card

5. Media Kit
```

Important merge decisions:

- Audience + Content are internal sections of **Insights**, not separate top-level workspaces.
- Operational Identity / Work Preferences + Rate Card live under **Commercial Setup**.
- Creator Brand remains separate from Media Kit.
- Portfolio remains separate from Content and Media Kit.
- Media Kit is the final composition / publication layer.

Avoid both extremes:

```text
too many thin top-level workspaces
```

and:

```text
one huge long-scroll workspace containing unrelated jobs
```

Use route-addressable internal modes/tabs when user jobs differ, e.g. `Audience | Content` and later `Work Preferences | Rate Card`.

---

# 4. Required program order

Parent has frozen this sequence:

```text
1. Audience V0                       COMPLETED
2. Content V0                        CURRENT IMPLEMENTATION
3. Creator Brand                     NEXT
4. Audience V1                       AFTER Content + Creator Brand
5. Any remaining Instagram-linked
   Creator Intelligence              THEN
6. Operational Setup / Work Preferences
7. Rate Card
8. Media Kit                         FINAL
```

Timing discipline:

- Do not start the next Instagram-dependent Product deep dive while the technical SA still requires Creator Product / Parent engagement on the current slice.
- Once the current technical SA is in autonomous final implementation and no longer needs this chat, Product work may continue on independent/manual areas.
- Before handing the next Instagram-dependent workspace into implementation, review the final Product-learning output from the prior technical slice.

Commercial Setup / Rate Card Product decisions have already been substantially frozen while Content implementation runs because they do not depend on Instagram-derived Intelligence. Their **implementation order remains later**, unless Parent explicitly changes priority.

---

# 5. Cross-workspace principles

## 5.1 Social networks are sources, not Creator Centre workspaces

Do not create top-level Creator Centre destinations called Instagram, TikTok or YouTube.

Future pattern:

```text
Creator business workspace
→ platform selector when >1 supported source exists
→ source-native facts / Intelligence
```

Examples:

```text
Insights / Audience
[ Instagram | YouTube | TikTok ]

Insights / Content
[ Instagram | YouTube | TikTok ]
```

Instagram V0 is the first source, not the permanent canonical data shape.

Preserve source-native cohort and format semantics. Do not force future platforms into Instagram's exact `Followers / Engaged` or Reel/Post meanings for UI symmetry.

## 5.2 Normalize only where meaning survives

Do not:

- sum followers/subscribers and call the result unique audience;
- merge demographic percentages without a future explicit methodology;
- fabricate common time windows;
- interpret a platform capability absence as an integration failure.

Cross-platform Intelligence may eventually compare source-specific truths while retaining source/cohort semantics.

## 5.3 Source truth vs presentation

Source/understanding workspaces own factual or Intelligence truth.

Media Kit owns Brand-facing:

- section visibility;
- selection;
- ordering;
- presentation/theme;
- sharing;
- privacy/authentication;
- CTA.

Do not spread Media Kit presentation controls into every source workspace.

## 5.4 Truth/control classes

```text
VERIFIED / MEASURED
provider facts
Audience / performance
canonical C04 work history

CREATOR-CONTROLLED
positioning
bio
Rate Card
availability
commercial preferences

CURATED VERIFIED PROOF
Portfolio selection/order
Media Kit selection/order
```

Creator curation may hide/select verified proof, but measured facts cannot be edited into false values.

---

# 6. Audience V0 — Product + technical acceptance

## Product authority

Path:

`docs/ai-collaboration/creator-centre/CREATOR_INSIGHTS_AUDIENCE_V0_PRODUCT_DECISION_REGISTER.md`

Product freeze commit:

`64bf4c454213277bb9fbe247e61bc78a203a227d`

Technical handoff:

`docs/ai-collaboration/creator-centre/CREATOR_INSIGHTS_AUDIENCE_V0_TECHNICAL_HANDOFF.md`

Commit:

`59e05b25e4ff2dea29d89026643bb4e21e0cef60`

## Final accepted implementation

```text
BACKEND_SHA =
7028d1fcbd467175a5358fce92ad2edd63ea44cd

BACKEND_TREE =
dbc9b8e00936d4ecbc700b516b17ad8ce78f2d17

FRONTEND_SHA =
4ca6141face77821f546a13bdde12c8c41780a6f

FRONTEND_TREE =
f14d5076021a97137f505a91c81736021a8dc30a

PROGRAM_AUTHORITY_SHA =
52917dfe2bbd7e92ceeb5ffcfe2b628fa49bd598

PROGRAM_AUTHORITY_TREE =
962ae60987d83fba313f81265faa3aa1f0163a50

MIGRATIONS = 101
```

Product-learning review:

`docs/ai-collaboration/creator-centre/creator-audience-v0/CREATOR_AUDIENCE_V0_PRODUCT_LEARNING_REVIEW.md`

Commit:

`1601aadac5688fc2b963ff7870d97a43c7f9ca0f`

## Frozen Audience V0 Product behavior

Audience lives under `Insights`.

Core hierarchy:

```text
Audience

source / freshness

Audience Highlights
0–3 deterministic observations

Followers | Engaged
whole-section switch when both are usable

selected cohort
- count where semantically valid
- age
- gender
- country
- city

Data Status
```

Rules:

- Follower and Engaged remain separate source-native cohorts.
- If only one cohort is usable, render it directly; no one-option toggle.
- If a cohort is unusable/suppressed/unavailable, hide it from primary selection while preserving truthful status/limitations.
- If neither cohort is usable, show a truthful data/recovery state rather than empty charts.
- Observed follower count may remain account-level context even when demographics are suppressed; it does not make the demographic cohort usable.
- Missing/unavailable/suppressed/provider failure is never zero.
- Audience Highlights are deterministic, plain-language, 0–3; they may compare Follower vs Engaged when bases are compatible.
- No Audience V0 LLM.
- No Audience Persona V0.
- No factual editing/customization inside Audience.
- Media Kit later owns coarse Audience visibility.
- No Audience manual refresh.
- Owner / Manager / Assistant all have read access.
- Weekly processing.
- Stale at exactly 192 hours.
- Prior valid same-account current survives independent processing/provider failure.

## Major implementation learning

Audience established one shared typed `BRAND | CREATOR` owner scope across:

- Data Extraction;
- Evidence;
- shared Intelligence execution/generation/current;
- scheduling/lineage.

Future Creator Intelligence must reuse this shared platform rather than create another Creator-specific runtime/current/scheduler.

Final acceptance for Creator Intelligence must exercise a production-shaped path:

```text
Settings-compatible provider DI
→ pipeline
→ DE / Evidence
→ Intelligence runtime/current
→ API
→ production UI
```

A direct feature-repository fixture alone is not sufficient final proof.

Audience also exposed one Brand-named internal compatibility seam; Content P1 was explicitly authorized to neutralize it before further Creator processors proliferate the debt.

---

# 7. Content V0 — frozen Product, implementation underway

## Product authority

`docs/ai-collaboration/creator-centre/CREATOR_INSIGHTS_CONTENT_V0_PRODUCT_DECISION_REGISTER.md`

Commit:

`acccc35a41a0f7a57f72b313114a8156d9245650`

Technical handoff:

`docs/ai-collaboration/creator-centre/CREATOR_INSIGHTS_CONTENT_V0_TECHNICAL_HANDOFF.md`

Commit:

`13e1aaffffa84ac8e43ae7c5c036c0afb2211c8e`

Parent execution authorization:

`docs/ai-collaboration/creator-centre/creator-content-v0/CREATOR_CONTENT_V0_PARENT_REVIEW_AND_AUTONOMOUS_EXECUTION_AUTHORIZATION_V1.md`

Commit:

`179ba0860cba0d256b5ee13757f308ebe99a078d`

## Current status

```text
CONTENT V0 PRODUCT = FROZEN
CONTENT V0 P0→P4 AUTONOMOUS IMPLEMENTATION = UNDERWAY
FINAL TECHNICAL ACCEPTANCE = NOT YET REVIEWED BY CREATOR ORCHESTRATOR
```

Expected final return from Brand Centre / Instagram Intelligence SA:

`CREATOR_CONTENT_V0_FINAL_ACCEPTANCE_AND_PRODUCT_LEARNING_HANDOFF_V1`

### Immediate duty of Creator Orchestrator

When Parent supplies the final Content response:

1. independently review exact backend/frontend/program SHAs + trees + migration inventory;
2. review P0–P4 packet status and correction cycles;
3. confirm frozen Product behavior was preserved;
4. confirm shared Brand/Audience runtime regressions are green;
5. confirm multimodal, metric, semantic, tenancy and failure-current truth;
6. accept, authorize bounded correction, or circuit-break;
7. if accepted, publish a Content Product-learning review in Git;
8. only then start the Creator Brand Product deep dive.

## Frozen Content V0 Product

Purpose:

> understand what the Creator creates and which recent content patterns receive stronger audience response.

Content is not an all-post library, publisher/scheduler, generic growth coach, Portfolio, Campaign Performance, or Media Kit editor.

Corpus:

```text
LOOKBACK = 90 DAYS
CORPUS = latest maximum 24 eligible persistent posts
ORDER = authoritative publication time DESC then stable media ID
SELECTION = recency, never performance
OLDER BACKFILL = NO
```

Stories/ephemeral content are outside V0 corpus.

Hierarchy:

```text
Insights
[ Audience | Content ]

1. Content Snapshot
2. Content Highlights      0–3
3. What You Create
4. Content Performance
5. Representative Content 0–6
6. Data Status
```

`What You Create` may include:

- themes;
- formats;
- creative structures;
- caption/communication patterns;
- visual execution.

`Content Performance` compares only:

```text
FORMAT
THEME
CREATIVE_PATTERN
```

Caption-pattern performance comparison is deferred by default.

Semantic boundary:

```text
MODEL
→ what a content item is

DETERMINISTIC APPLICATION LOGIC
→ arithmetic
→ grouping
→ comparison eligibility
→ Highlights
→ Representative Content
```

The model must not receive performance metrics and must not author performance/causal/recommendation claims.

No universal Content Score.

No causal claims.

No recommendation engine.

No longitudinal Content trend interpretation V0.

No cross-platform merge V0.

### Meaningful-difference rule

For likes/comments/saves/shares/provider total-interactions response claims:

- require valid same-media reach denominator;
- compare reach-denominated rates;
- require >= 0.5 percentage-point absolute difference AND >= 20% relative difference;
- accepted sample/coverage gates still apply.

Raw reach/views may support descriptive median comparisons at >=20% relative difference but must not be described as stronger engagement/audience response.

Raw interaction counts may be displayed as facts but cannot alone generate a stronger-response Highlight.

Zero baseline produces no relative-lift claim.

### Representative Content

- 0–6 deterministic system-selected posts;
- explains Highlights/patterns;
- not a leaderboard;
- not Creator-curated Portfolio;
- performance rank is not selection input.

## Accepted execution packets

```text
P0 authority convergence + executable contract freeze
P1 shared validation-seam neutralization
P2 complete Creator Content backend vertical slice
P3 Creator Insights / Content frontend
P4 integrated acceptance + immutable handoff
```

The technical SA is authorized to proceed autonomously P0→P4 unless a defined circuit breaker/Product ambiguity occurs.

---

# 8. Creator Brand — next Product deep dive after Content acceptance

Creator Brand is **not yet frozen**.

Legacy Media Kit Bio/Profile is not Product authority.

Working thesis:

```text
CREATOR BRAND
=
Creator-controlled identity / positioning
possibly informed by observed Content Intelligence
```

versus:

```text
CONTENT
=
what Creator Shop observes the Creator actually creates
```

Candidate areas to deep-dive:

- positioning;
- bio / commercial identity;
- niche/category positioning;
- tone/personality;
- visual identity / palette;
- languages/expression where commercially useful;
- Creator-confirmed suggestions derived from source Intelligence.

Critical rule:

Source/Content Intelligence may **suggest** tone, palette, themes or positioning. It must not silently redefine Creator-owned identity.

Once Creator confirms/edits identity, future source refresh must not silently overwrite Creator-owned truth unless Product explicitly freezes a reconciliation policy.

Potential consumers:

- Media Kit;
- Marketplace / Creator discovery;
- AI Match;
- Campaign/Application context;
- Portfolio presentation.

### Product method after Content acceptance

```text
Creator lifecycle/business value
→ Creator-owned vs source-observed truth
→ proven Content outputs
→ Creator Brand sections
→ suggestion/confirmation semantics
→ editing/customization boundaries
→ multi-platform implications
→ Media Kit projection needs
→ V0 cutline
```

Do not hand to technical SA until Product is genuinely frozen.

---

# 9. Audience V1 — after Content + Creator Brand

Audience Persona/Profile was intentionally excluded from Audience V0.

Revisit only after Content + Creator Brand because richer Audience interpretation may combine:

```text
Audience demographics
+
Follower vs Engaged differences
+
Content themes
+
content-response patterns
+
possibly Creator Brand context
```

Do not create fake psychographics from demographic buckets.

Reuse Brand Persona reasoning discipline only where semantics survive. A Brand target-customer Persona is not automatically the same concept as a Creator's observed audience profile.

Do not infer unsupported motivations, income, profession, education or affinities.

---

# 10. Remaining Instagram-linked Intelligence / Portfolio

After Creator Brand + Audience V1, identify any additional Creator capability that genuinely requires source-derived Intelligence before moving to deterministic Commercial Setup implementation.

Likely important workspace:

## Portfolio

```text
Content
= what I create and what works

Portfolio
= what commercial proof I want Brands to judge me by

Media Kit
= which selected proof is exposed in the Brand-facing sales surface
```

Portfolio likely combines:

- canonical C04 Creator Shop Collaboration history;
- Brand/commercial relationship truth;
- publishing evidence;
- Instagram performance/context;
- external work if explicitly supported;
- case-study framing;
- featured work curation.

Instagram `likely_collab` inference must never become canonical C04 Collaboration truth.

---

# 11. Commercial Setup / Work Preferences V0 — Product frozen

Register:

`docs/ai-collaboration/creator-centre/CREATOR_COMMERCIAL_SETUP_WORK_PREFERENCES_V0_PRODUCT_DECISION_REGISTER.md`

Freeze commit:

`2efdea2aed521d59f1deb64acef50027944e3960`

Core Product:

```text
WORK PREFERENCES
- Based in / base country
- Open to international Brands YES/NO
- Preferred industries
- Industries I do not work with
- Availability
- Physical-product collaborations YES/NO
- gifting/barter willingness
- UGC-project willingness

OPERATIONAL READINESS
- Shipping setup status
- Payout / bank setup status
- KYC = COMING SOON in current pass
```

Rules:

- Base country is collected when Creator configures Commercial Setup, not forced into early onboarding merely to enter the platform.
- `CREATOR BASE COUNTRY != AUDIENCE COUNTRY`.
- International Brand preference V0 is YES/NO, not granular country allowlist.
- `PREFERRED != REQUIRED` and `NOT PREFERRED != EXCLUDED`.
- Availability states:

```text
ACCEPTING_COLLABORATIONS
PAUSED_UNTIL <date>
NOT_ACCEPTING_NEW_COLLABORATIONS
```

Availability affects new opportunities only and never mutates existing Collaboration obligations.

Shipping address remains Settings-owned; Commercial Setup shows readiness only.

Payout/bank setup is a critical readiness dependency. Product direction for a later C04/C06/Brand-financial sweep:

```text
PAID COLLABORATION AGREEMENT FINALIZATION
SHOULD REQUIRE
CREATOR PAYOUT / BANK SETUP READY
```

If current Collaboration runtime lacks this, Product intends a bounded reconciliation before real-money launch.

KYC is intended for MVP, not deferred to V2. It is waiting for a near-term cross-module KYC/compliance sweep. Current V0 displays:

```text
KYC
COMING SOON
```

Canonical KYC ownership later remains Settings/payout/compliance infrastructure; Commercial Setup projects status.

Gifting/barter:

```text
Open to gifting / barter collaborations
YES / NO
```

UGC:

```text
Open to UGC projects
YES / NO
```

Both mean willing to consider, never automatic acceptance.

UGC is a use case, not a Deliverable format.

---

# 12. Rate Card V0 — Product frozen

Register:

`docs/ai-collaboration/creator-centre/CREATOR_COMMERCIAL_SETUP_RATE_CARD_V0_PRODUCT_DECISION_REGISTER.md`

Original freeze commit:

`f34e0ad594e8bfa8b21ed4e30a1958c3dec155ed`

UGC correction commit:

`dea5aeab791b5a1db83999d2a23eb6370b82d158`

Current corrected blob:

`7bc948af6d58e14de1f2108da18bf2cd7e776e39`

## Core philosophy

Creator Rate Card is a **standard/reference commercial baseline**, never a binding offer.

Every V0 monetary line means:

```text
STARTING FROM
```

No Creator Rate Card `FIXED` posture in V0.

For Campaign-origin opportunities:

```text
CAMPAIGN COMMERCIAL
>
CREATOR RATE CARD
```

Campaign currency, offer/minimum and payment terms supersede Rate Card.

A higher Rate Card must not block/discourage Creator application. Future Marketplace economics may be advisory, not hard eligibility by default.

## Atomic V0 rate items

```text
Reel
Story
Carousel
Photoshoot / static asset creation
```

Reference scopes:

- Reel: 1 Reel, approx 15–20 seconds;
- Story: 1 Story; no Story bundle V0;
- Carousel: 1 Carousel; slide count brief-specific;
- Photoshoot/static: 1 delivered photo/static asset.

## UGC corrected semantics

UGC is **not** a separate Deliverable/rate item.

It is the same Campaign → Brief → Deliverable construct where Creator-made content may be delivered for Brand use without Creator-handle publication.

Commercial Setup / Rate Card may surface:

```text
Open to UGC projects
YES / NO
```

For an explicit UGC opportunity, content usage rights begin/default `YES` because Brand use is intrinsic to the use case. Exact rights scope/duration and paid amplification remain final opportunity/agreement truth.

Do not introduce `UGC_VIDEO` merely for Rate Card.

## Add-ons / rights

Link in Bio:

```text
Starting from <amount>
Duration days
```

One duration only; V0 default/reference may initialize to 7 days.

Partnership/Spark Ad:

```text
Starting from <amount>
Authorization days
```

One duration only; V0 default/reference may initialize to 15 days.

Content usage rights:

```text
YES / NO
optional standard/reference duration when YES
```

No separately required published usage-right price V0; exact rights fee/scope can be negotiated.

## Preferred payment terms

Advance:

```text
0 / 25 / 50 / 75 / 100
```

Net terms:

```text
NET_7
NET_15
NET_30
NET_45
NET_60
```

`IMMEDIATE` is not selectable while current Create Campaign does not allow it.

Campaign terms supersede Rate Card preferences. Direct final quote/agreement supersedes Rate Card preferences.

## Currency

Creator does not manually choose Rate Card currency V0.

Auto-resolve from base country initially and later KYC/legal identity where authoritative.

Do not assume localized FX conversion exists today. Current C03 authority says Campaign commercial remains Campaign currency rather than local-converted canonical fee.

Localized cross-currency display is a future requirement.

## Standard explanatory conditions

Platform-supplied Rate Card terms should make clear:

- rates are indicative starting points;
- final pricing depends on brief/scope/complexity;
- Creator may accept/reject/counter until final agreement;
- Campaign terms supersede Rate Card;
- direct accepted quote/agreement supersedes Rate Card;
- rights are explicit and duration/scope bound;
- gifting/barter willingness is optional;
- UGC willingness is optional and UGC is not a special Deliverable;
- Rate Card updates are prospective;
- payment terms are preferences.

No arbitrary Creator-authored legal T&C V0.

## Future C04 Quick Action

Future chat may use Rate Card as a draft quote source:

```text
Brand + Creator establish scope
2 Reels + 1 Story

Creator taps + Send Quote
→ Rate Card prefills draft arithmetic
→ Creator reviews/edits
→ Creator explicitly sends
```

Never auto-send or auto-lock.

Final accepted quote / C04 agreement is authoritative.

## Deferrals

- packages;
- multiple duration tiers;
- Story bundles;
- minimum project fee;
- multi-currency Rate Card;
- item-level visibility;
- exclusivity pricing;
- detailed rights pricing;
- rush/travel/in-person pricing;
- automatic Campaign blocking;
- direct-C04 implementation itself.

---

# 13. Relevant future requirements already parked

Future branch:

`future-enhancements/v2`

Known relevant files:

- `docs/product/future/v2/creator_rate_card_packages_v2_requirement.md`
- `docs/product/future/v2/brand_campaign_creator_nda_application_requirement.md`
- `docs/product/future/v2/commercial_currency_localized_display_conversion_requirement.md`
- `docs/product/future/v2/localized_cross_currency_commercial_display.md`
- `docs/product/future/v2/agency_creator_collaboration_onboarding_v2_requirements.md`

### Packages V2

Future packages can compose canonical commercial atoms such as quantity, duration and rights, then apply an overall discount/package starting price or later richer customization.

### Brand Campaign NDA

Future Brand-side requirement: Brand may require Creator to sign an NDA when applying to a Campaign.

Later work must reconcile:

- Campaign authoring;
- Application gating/acceptance;
- legal artifact/version/audit semantics;
- Creator application UX.

Do not implement ad hoc inside Creator Centre/Rate Card.

### Localized currency display

A future display layer may show commercial amounts in a viewer's relevant INR/USD currency while preserving canonical source/agreement currency and exact audit truth.

Do not assume it already exists.

### Agency V2

Agency onboarding is deliberately outside MVP.

Future path should:

- verify Agency's own organization/domain;
- distinguish Agency identity from represented Brand identity;
- require proof that Agency is authorized to manage Creator collaborations for that Brand.

MVP unsupported Agency path falls back to Creator business-email reveal if enabled, not a generic-email bypass into Creator Shop Collaboration.

---

# 14. Media Kit — final workspace

Current non-authoritative working composition:

`docs/ai-collaboration/creator-centre/CREATOR_MEDIA_KIT_V0_NON_AUTHORITATIVE_COMPOSITION.md`

Commit:

`9532aadd63446ae5bb6a799bc93bad13b8782191`

Media Kit must be designed/implemented **last**, after underlying workspace truth is mature.

Inputs:

```text
Creator Brand
Audience
Content / Insights
Portfolio
Commercial Setup / Rate Card
        ↓
     MEDIA KIT
```

Media Kit primarily owns:

- selection;
- ordering;
- section visibility;
- presentation/theme;
- sharing;
- privacy/authentication wall;
- conversion CTA.

Legacy Creator Shop Media Kit is **REFERENCE ONLY**, not Product/frontend/backend/schema/reconciliation authority.

## Privacy/discoverability direction

MVP:

```text
DISCOVERABILITY = LINK_ONLY / UNLISTED
```

No public search indexing / Marketplace discovery from Media Kit V0.

Unauthenticated visitor sees only limited non-sensitive Creator shell/identity.

Detailed Audience, performance, Portfolio/Brand proof and Rate Card remain behind Brand authentication.

Hidden/empty sections collapse cleanly.

## Brand CTA / identity gate

Normal path:

```text
Media Kit
→ existing website/domain-linked work-email Brand verification
→ authenticated Brand
→ commercial Media Kit unlock
→ Creator Shop enquiry / future direct-C04 path
```

This is a fast path through existing Brand identity onboarding, not a second/weaker Brand identity model.

For this journey Brand Preview / Connect Instagram / initial Brand Centre landing can be deferred so the Brand returns directly to Creator context. After enquiry the Brand can continue normal Brand lifecycle.

No generic-email bypass to commercial Media Kit or C04.

Fallback when normal Brand verification cannot be satisfied and Creator has enabled it:

```text
Reveal Creator business email
```

This exposes only the Creator-designated business/contact email, does not unlock private commercial sections, does not create Brand workspace authority, and does not unlock C04.

## Future direct Collaboration direction

```text
Media Kit
→ verified Brand enquiry
→ conversation
→ + Send Quote
→ structured proposal
→ accept / counter
→ locked commercial agreement
→ operational C04 checkpoints
```

Likely future Collaboration origins:

```text
CAMPAIGN
DIRECT_INQUIRY
```

Do not manufacture fake Campaigns solely to satisfy current C04 when direct origin becomes legitimate.

---

# 15. Creator-side strategic context

Creators are free in MVP.

Media Kit / Creator Centre helps create an organic Brand acquisition loop:

```text
Creator joins free
→ useful live commercial profile
→ Creator shares link in email/DM
→ Brand visits
→ Brand verifies business identity
→ enquiry / Collaboration
→ later Brand Home / Brand Centre / Campaigns
→ retained Brand / Marketplace liquidity
```

The moat is not static page design. The stronger value is live verified social data + Creator Shop commercial history + structured enquiry/negotiation/agreement/payment path.

---

# 16. Future Instagram-dependent technical handoff protocol

For Creator Brand / Audience V1 / other source-linked Creator Intelligence:

## Product phase — Creator Orchestrator

Deep-dive and freeze Product first.

Publish one immutable Product decision register covering at minimum:

```text
purpose
Creator lifecycle/business value
V0 UX/output
truth ownership
Creator-controlled vs source-derived fields
required Intelligence/facts
suggestion/edit/confirmation semantics
empty/partial behavior
multi-platform implications
cross-workspace consumers
V0 exclusions
Product acceptance criteria
```

## Technical preflight — Brand Centre SA

Create a Git technical handoff referencing:

- exact Product register path/commit;
- latest accepted Creator Intelligence backend/frontend/program predecessor;
- prior implementation-learning artifact;
- exclusions;
- required report name.

Short relay pattern:

```text
Adopt Product authority at <path> @ <commit>.
Adopt technical handoff at <path> @ <commit>.
Execute donor-semantics extraction + current-state/reuse preflight + finite execution plan only.
Do not mutate source or begin implementation.
Return <NAMED_REPORT>.
```

Require explicit classifications:

```text
REUSE_BYTE_IDENTICAL
REUSE_WITH_OWNER/SUBJECT_ADAPTER
REUSE_WITH_CONTRACT_VERSION
CREATOR_SPECIFIC_NEW_WORK
BRAND_SPECIFIC_NOT_REUSABLE
DEFER
```

Donor facts should be returned explicitly rather than merely assumed from SA memory.

## Comprehension audit

A separate comprehension-only audit is **optional, not default**.

The working relationship is established. The donor/reuse preflight itself normally serves as the understanding check.

Use a separate comprehension audit only if:

- the workspace introduces materially new ownership semantics;
- Product boundaries are unusually subtle;
- the SA appears to reason from stale Brand assumptions;
- Parent wants explicit confirmation before planning.

## Parent review / execution

Creator Orchestrator / Parent reviews preflight and resolves Product gaps.

Then write full execution authorization to Git and send only a short relay, preferably authorizing sequential autonomous packets with SA checkpoint acceptance.

Typical relay:

```text
Adopt Parent authorization at <path> @ <commit>.
Proceed autonomously through accepted P0→Pn.
Return only on a defined circuit breaker/Product ambiguity or with <FINAL_HANDOFF>.
```

## Final acceptance / learning

After technical SA return:

- independently review final SHAs/trees/migrations;
- review correction cycles/circuit breakers;
- confirm Product acceptance criteria;
- publish Product-learning review;
- feed learning into next Product slice.

---

# 17. Immediate next boundary

At the time of this handoff, do **not** start Creator Brand before reviewing Content V0 final technical return.

Immediate sequence:

```text
RECEIVE
CREATOR_CONTENT_V0_FINAL_ACCEPTANCE_AND_PRODUCT_LEARNING_HANDOFF_V1

→ technical + Product review

→ accept / bounded correction / circuit breaker

→ if accepted, publish Content Product-learning review

→ begin Creator Brand Product deep dive
```

If Content returns Product conflict or technical circuit breaker, resolve it before moving to Creator Brand.

---

# 18. Near-term cross-module sweeps recorded but outside current sequence

## KYC

KYC is intended for MVP but not yet implemented. Parent expects a near-term cross-module KYC/compliance sweep.

Current Commercial Setup displays:

```text
KYC = COMING SOON
```

Real flow should remain Settings/payout/compliance-owned.

## Payout/bank pre-agreement gate

Audit C04 Creator Collaboration + Brand Collaboration + C06 Creator Payouts / Brand financial path.

Desired Product direction:

```text
Creator may not finalize/sign paid commercial agreement
until required payout/bank setup is READY.
```

Do not implement this from Creator Centre in isolation; reconcile accepted Collaboration/Payout authority first.

---

# 19. Existing Creator-side module authority relevant later

Accepted modules:

```text
C01 Creator Entry / Onboarding
C02A Creator Home Foundation
C03 Creator Campaign Participation / Apply
C04 Creator Collaboration
C05 Creator Settings
C06 Creator Payouts
```

C04 remains canonical owner of Collaboration commercial/operational checkpoints.

C05 remains canonical owner of shipping/settings state.

C06 is accepted provider-disabled; KYC/provider enablement remains later work.

Campaign objective authority:

```text
AWARENESS
TRUST
ASSETS
ACTION
```

Legacy `PULSE / PROOF / PRODUCTION / PUSH` is not current authority.

Campaign compensation:

```text
FIXED
NEGOTIABLE
```

Creator Rate Card:

```text
STARTING FROM only
```

`STARTING FROM != NEGOTIABLE`.

---

# 20. Anti-patterns

Do not:

- revive legacy Creator Centre / legacy Media Kit as Product or reconciliation authority;
- create a second Creator Intelligence runtime/current/scheduler;
- make Instagram a top-level workspace;
- invent fake normalized source data for multi-platform symmetry;
- let semantic models own arithmetic/performance claims;
- promote `likely_collab` into canonical C04 Collaboration truth;
- use Rate Card to block Campaign application because the Rate Card is higher;
- create UGC as a new Deliverable format/rate item;
- duplicate Settings-owned shipping/bank/KYC mutations inside Commercial Setup;
- build Media Kit before the underlying workspaces mature;
- create fake Campaigns only to support future direct Media Kit enquiries;
- paste very long SA prompts inline when Git can hold durable authority.

---

# 21. Resumption instruction

The existing Creator Orchestrator should now:

1. adopt this handoff as the current Creator Centre program delta;
2. preserve compatible prior Creator Orchestrator context;
3. not restart accepted modules;
4. first review the final Content V0 implementation response when Parent supplies it;
5. if Content is accepted, publish Product learning and begin **Creator Brand**;
6. continue the established Product → donor/reuse preflight → Parent review → autonomous implementation → final-learning cycle;
7. keep the ordered Creator Centre program intact unless Parent explicitly changes priority.

```text
NEXT EXPECTED TECHNICAL INPUT =
CREATOR_CONTENT_V0_FINAL_ACCEPTANCE_AND_PRODUCT_LEARNING_HANDOFF_V1

NEXT PRODUCT AFTER ACCEPTED CONTENT =
CREATOR BRAND
```
