# Creator Centre — Portfolio V0 Product Decision Register V2

`CREATOR_PORTFOLIO_V0_PRODUCT_DECISION_REGISTER_V2`

**STATUS = PRODUCT_FROZEN_FOR_V0**

**SUPERSEDES = CREATOR_PORTFOLIO_V0_PRODUCT_DECISION_REGISTER_V1 @ 4f15e010010692605a0623b71f86eb9cbc3d11cf**

**IMPLEMENTATION = NOT_AUTHORIZED_BY_THIS DOCUMENT ALONE**

This document is the revised Product authority for the **Portfolio** workspace in Creator Centre.

V2 preserves the V1 commercial-proof model and makes five bounded corrections:

1. completed Creator Shop Collaboration automatically creates or deterministically surfaces an internal Portfolio work record without Creator re-entry, but never auto-publishes it to Media Kit;
2. Brand-facing shareability for Creator Shop work is separated from internal Portfolio eligibility, and Creator attestation alone cannot override locked Creator Shop agreement / confidentiality / rights truth;
3. immutable Creator Shop business facts are separated from source-verified performance facts, which are read-only but time-varying and must preserve observation time / freshness;
4. Portfolio is reconciled with the now-frozen Media Kit V0 rule that Portfolio appears Brand-facing only through explicit Creator feature selection;
5. external-work attestation remains an acceptable V0 shareability basis for Creator-provided work, without upgrading the external Brand relationship to Creator Shop verified.

Portfolio remains a commercial-proof workspace. It is not the Creator's Content feed, not the canonical Collaboration domain, and not the Brand-facing Media Kit publication layer.

---

## 1. Purpose

Portfolio helps the Creator answer:

> What commercial work can I credibly show a Brand as proof that I can deliver?

Portfolio combines structured proof from Creator Shop with Creator-provided external work while preserving provenance and shareability constraints at every step.

The Product objective is to build durable commercial proof over time without forcing the Creator to manually recreate work Creator Shop already knows.

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

Keep distinct:

```text
Content
= what I create and what patterns perform

Portfolio
= what commercial work proves I can deliver

Media Kit
= which eligible proof I explicitly expose to a Brand and how it is presented
```

---

## 3. Portfolio V0 sources

Portfolio V0 supports exactly two source families:

```text
1. CREATOR_SHOP_WORK
2. EXTERNAL_WORK
```

### 3.1 Creator Shop work

Creator Shop work is derived only from canonical Creator Shop Collaboration truth.

A legitimately completed C04 Collaboration is eligible for an internal Creator Shop Portfolio work record.

Freeze:

```text
COMPLETED C04 COLLABORATION
→ INTERNAL PORTFOLIO WORK RECORD / PROJECTION
→ NO CREATOR RE-ENTRY REQUIRED

INTERNAL PORTFOLIO RECORD
!=
MEDIA KIT PUBLICATION
```

Technical implementation may persist, backfill, or deterministically project these records, but Product requires the Creator to see completed Creator Shop work without manually recreating it.

Do not create Creator Shop Portfolio proof from:

- Campaign Applications;
- rejected/withdrawn/expired Applications;
- accepted Application before Collaboration completion;
- in-progress Collaboration;
- terminated/failed Collaboration that did not complete successfully;
- Instagram `likely_collab` inference;
- public mention/tag alone.

### 3.2 External work

A Creator may manually add commercial work completed outside Creator Shop.

The external Brand/client relationship remains `CREATOR_PROVIDED` unless a future explicit verification workflow proves that relationship.

A public post or source metric may independently verify the media/performance fact without upgrading the Brand relationship itself.

---

## 4. Provenance and mutability model

Portfolio V0 preserves at least three provenance classes:

```text
CREATOR_SHOP_VERIFIED
CREATOR_PROVIDED
SOURCE_VERIFIED
```

### 4.1 CREATOR_SHOP_VERIFIED

Facts derived from canonical Creator Shop business state, for example:

- completed Collaboration identity;
- Brand identity from canonical Collaboration context;
- locked Deliverable execution facts;
- publishing-required versus asset-only applicability;
- accepted public publishing evidence identity;
- completion date.

These facts are immutable from Portfolio.

### 4.2 CREATOR_PROVIDED

Creator-authored facts/framing, for example:

- external Brand/client assertion;
- project summary;
- `What I did`;
- outcome/context note;
- presentation title override;
- manually entered result/metric.

These may be edited by authorized Creator roles where Product allows.

### 4.3 SOURCE_VERIFIED

Facts verified from an accepted external source, for example exact connected-Instagram media or source-native performance observations.

Freeze:

```text
SOURCE_VERIFIED
= READ_ONLY TO CREATOR
= MAY CHANGE OVER TIME AS SOURCE FACTS CHANGE
= MUST RETAIN OBSERVATION / CAPTURE TIME
```

Source-verified performance must not be treated as an immutable Collaboration fact.

Where Portfolio shows a retained prior source metric, it must preserve truthful `verified/observed as of` context and must not present stale historical observation as a current metric.

`SOURCE_VERIFIED` content/performance does not upgrade an external Brand relationship to `CREATOR_SHOP_VERIFIED`.

---

## 5. Creator Shop Portfolio work record

A completed Creator Shop Collaboration may contribute immutable verified facts including, where applicable:

- Brand identity;
- Campaign/project identity;
- Campaign Asset / Offering context where public-safe;
- locked Deliverable types and quantities;
- publishing-required versus asset-only applicability;
- completion date;
- exact public publishing evidence / public content reference where available.

Private Brief text, private commercial terms, internal execution notes and private deliverable bytes are not automatically Portfolio-publication facts.

The Creator may add Creator-owned framing around the verified work:

- short project summary;
- `What I did` / contribution summary;
- optional outcome/context note;
- optional title override that does not falsify verified identity.

Creator-owned framing never rewrites underlying verified facts.

---

## 6. Commercial amounts and private execution truth

Portfolio does not expose or use:

- agreed Creator fee;
- Brand reserve;
- payment terms;
- payout status;
- settlement state;
- bank details;
- KYC;
- other private financial execution truth.

```text
PORTFOLIO
!=
COMMERCIAL AGREEMENT HISTORY
```

Rate Card owns standard/reference pricing.

Campaign/Collaboration own opportunity-specific and locked commercial terms.

---

## 7. Shareability / disclosure model

Portfolio internal eligibility and Brand-facing shareability are separate concepts.

```text
INTERNAL PORTFOLIO ELIGIBILITY
!=
BRAND-FACING SHAREABILITY
```

A completed Creator Shop Collaboration may exist in the Creator's internal Portfolio even when it is not eligible for Media Kit publication.

### 7.1 Publishing-required Creator Shop work

When a completed Collaboration has valid public publishing evidence:

- the exact public content reference may be used as public proof;
- public-safe project facts may be eligible for Brand-facing Portfolio projection;
- private Brief/agreement/internal execution facts remain excluded.

The existence of a public post does not authorize exposure of unrelated private Collaboration fields.

### 7.2 Asset-only / UGC / otherwise private Creator Shop work

A completed asset-only / UGC Collaboration is legitimate commercial work and may appear internally in Portfolio.

Creator Shop must not automatically expose:

- submitted private asset bytes;
- private Brand/project details;
- private Brief content;
- non-public performance/evidence;
- any other information whose disclosure is not affirmatively permitted.

Brand-facing publication of private/asset-only Creator Shop work requires an affirmative shareability basis from accepted Creator Shop authority, such as:

```text
locked agreement / rights explicitly permit Portfolio or promotional disclosure
OR
explicit Brand permission / future accepted consent mechanism
```

Freeze:

```text
CREATOR ATTESTATION ALONE
!=
AUTHORITY TO OVERRIDE CREATOR SHOP AGREEMENT / CONFIDENTIALITY / RIGHTS TRUTH
```

If no affirmative shareability basis exists, the work may remain internal Portfolio proof but is `NOT_MEDIA_KIT_ELIGIBLE` in V0.

Do not infer shareability from:

- Collaboration completion;
- Brand payment;
- Brand receiving content usage rights;
- `publishingRequired = false`;
- internal asset storage;
- Creator willingness alone.

### 7.3 External work shareability

For external work, explicit Creator attestation that they have the right/permission to share the work or uploaded media is an acceptable V0 baseline.

This permits Creator-controlled presentation but does not verify the external Brand relationship.

Future external Brand verification/consent may strengthen trust but is not required in V0.

---

## 8. External Work V0 fields

Required:

```text
Brand / client name
Project / collaboration title or short identifier
Approximate completion date or month/year
What I delivered / work summary
```

Optional:

```text
public content URL(s)
work media/reference where safely supported
short project summary
What I did / contribution
Outcome / result note
structured performance/result metrics where provided
```

Manual result/metric values remain `CREATOR_PROVIDED`.

Exact media upload/storage implementation is technical preflight work and should reuse accepted secure asset infrastructure where possible.

---

## 9. External metrics and source verification

V0 may allow Creator-provided metrics/results for external work when clearly labeled Creator-provided.

If an exact public post belongs to the Creator's accepted connected source account and source-native metrics can be truthfully resolved, those facts may be attached separately as `SOURCE_VERIFIED`.

Freeze:

```text
MANUAL METRIC
!= SOURCE_VERIFIED METRIC

SOURCE_VERIFIED CONTENT
!= VERIFIED BRAND RELATIONSHIP

ORGANIC / SOURCE PERFORMANCE
!= CAMPAIGN PERFORMANCE
```

Do not silently merge provenance or fabricate Campaign Performance from organic/source post metrics.

---

## 10. Case-study framing

V0 does not create a separate Case Study object/workspace.

A Portfolio item may support lightweight Creator-owned framing:

```text
Project summary
What I did
Outcome / result context
```

Verified facts remain separately immutable/read-only underneath this framing.

Long-form case-study templates/builders remain deferred.

---

## 11. Organic Content is not Portfolio commercial work

Do not auto-promote ordinary Creator Content into Portfolio because it performs well.

```text
ORGANIC CONTENT EXAMPLE
!=
COMMERCIAL WORK
```

A Creator with no Brand work may still have a useful Media Kit through Creator Brand, Audience and Content.

Portfolio empty state should:

- explain that completed Creator Shop work will appear automatically/deterministically;
- allow `Add external work`;
- avoid completion pressure or negative scoring.

---

## 12. Portfolio vs Media Kit curation

Portfolio is the Creator's commercial-proof library and framing surface.

Media Kit V0 is separately Product-frozen as the Brand-facing composition/publication layer.

Freeze:

```text
PORTFOLIO RECORD EXISTS
!=
PORTFOLIO RECORD PUBLISHED TO MEDIA KIT
```

Media Kit owns:

- Portfolio section SHOW/HIDE;
- explicit feature selection of eligible Portfolio items;
- ordering of selected featured items;
- Brand-facing presentation.

No Creator Shop verified work is auto-published to Media Kit.

Portfolio must expose stable work identity, provenance and current shareability eligibility so Media Kit can enforce its own selection rules.

Portfolio itself does not own public/private/Brand-only visibility or featured ordering.

---

## 13. Editability and deletion

### Creator Shop verified work

The Creator cannot delete or rewrite canonical verified work history through Portfolio.

Creator may edit/clear only Creator-owned framing fields.

If a Creator Shop work record is not shareable or the Creator does not want it published, Media Kit simply does not feature it; canonical history remains intact.

### External work

Owner/Manager may create, edit and delete Creator-owned external records.

Deleting the Portfolio record does not mutate independent source Evidence owned by another domain.

Any attached `SOURCE_VERIFIED` facts remain non-editable while the external record exists.

---

## 14. V0 workspace structure

```text
PORTFOLIO

Summary / concise context

[ All | Creator Shop | External ]

Commercial work cards/list
- Brand/client
- project/work title
- date
- deliverable/work summary
- proof/source badge
- shareability state where operationally useful
- representative media/reference where eligible
- concise result/performance context where available

Portfolio item detail
- verified facts
- Creator-owned project framing
- content/publishing proof
- source performance proof where available
- provenance labels
- shareability/Media-Kit eligibility explanation where needed

+ Add external work
```

Exact visual layout is not frozen.

Use browse/list/grid plus route-addressable or drawer/detail interaction; do not create one giant long-scroll project document.

---

## 15. Relationship to Content / source performance

Portfolio may consume accepted Content/Instagram facts for exact work where appropriate, but must not become another Content Intelligence processor.

Content/source domains own:

- observed content semantics;
- source-native performance observations;
- grouped Content Intelligence;
- source freshness/current semantics.

Portfolio owns:

- commercial project proof;
- provenance;
- Creator-owned project framing;
- reference to accepted supporting content/performance facts.

If source performance changes, Portfolio may reflect newer accepted source observations without rewriting immutable Collaboration facts.

Any displayed source metric must preserve the metric's source semantics and observation/freshness context.

---

## 16. Relationship to Collaboration / C04

C04 remains canonical authority for Creator Shop Collaboration truth.

Portfolio consumes accepted C04 facts and does not mutate or reinterpret:

- commercial agreements;
- fulfillment state;
- deliverable submissions;
- Brand approvals/revisions;
- publishing authorization;
- publishing evidence;
- financial settlement;
- Collaboration completion;
- locked rights/confidentiality/shareability authority where present.

C04 already distinguishes `PUBLISHING_REQUIRED` from `ASSET_ONLY`; Portfolio preserves that execution truth and must not infer public permission merely from completion.

---

## 17. Roles

```text
OWNER
READ = YES
MUTATE CREATOR-OWNED PORTFOLIO FIELDS = YES

MANAGER
READ = YES
MUTATE CREATOR-OWNED PORTFOLIO FIELDS = YES

ASSISTANT
READ = YES
MUTATE CREATOR-OWNED PORTFOLIO FIELDS = NO
```

Verified/source facts remain non-editable for all roles.

Exact action names are technical/domain decisions.

---

## 18. Multi-platform direction

Portfolio is platform-agnostic commercial proof.

Do not create Instagram/TikTok/YouTube Portfolio workspaces.

A Portfolio item may reference multiple platforms while preserving source-native identity, metric semantics and observation time.

Do not merge incompatible platform metrics into one synthetic performance score.

---

## 19. Explicit V0 deferrals

Portfolio V0 defers:

- public Portfolio page independent of Media Kit;
- Portfolio-owned public visibility controls;
- Portfolio-owned featured ordering;
- ratings/reviews/testimonials;
- automated Brand endorsement requests;
- automatic likely-collab → Portfolio promotion;
- Marketplace ranking based on Portfolio;
- AI-generated case-study copy;
- universal Portfolio score;
- synthetic cross-platform performance metrics;
- package/rate information;
- agreed commercial fee publication;
- long-form case-study builder;
- external Brand verification workflow;
- automatic permission inference for private/asset-only Creator Shop work;
- a new rights/licensing system inside Portfolio.

---

## 20. Product-level acceptance criteria

Portfolio V0 is Product-acceptable only when:

1. completed Creator Shop Collaborations appear internally without Creator manual re-entry;
2. non-completed/inferred work is never promoted as Creator Shop verified proof;
3. Creator Shop verified business facts are immutable from Portfolio;
4. source-verified performance facts are non-editable but remain time-aware rather than falsely immutable/current forever;
5. Creator may add, edit and delete external work;
6. external Brand relationships remain Creator-provided unless future explicit verification proves them;
7. source-verified post/performance facts do not falsely verify an external Brand relationship;
8. publishing-required Creator Shop work can use exact public publishing evidence as public proof while private Collaboration fields stay excluded;
9. asset-only/private Creator Shop work may exist internally but is not Brand-facing without affirmative agreement/Brand shareability authority;
10. Creator attestation alone cannot override Creator Shop rights/confidentiality truth;
11. external work/media requires Creator shareability attestation in V0;
12. Portfolio does not expose agreed fees/payment/financial execution history;
13. organic Content is not converted into fake commercial Portfolio history;
14. Media Kit publication requires explicit Creator feature selection of an eligible Portfolio item;
15. Portfolio itself does not own Media Kit visibility/order/presentation;
16. C04 remains canonical Collaboration authority;
17. organic/source performance remains distinct from Campaign Performance;
18. provenance survives every internal and Brand-facing projection;
19. Owner/Manager manage Creator-owned Portfolio fields; Assistant is read-only;
20. Portfolio remains platform-agnostic and does not fabricate combined cross-platform metrics.

---

## 21. Technical preflight requirements

Before implementation, the technical owner must audit at minimum:

- accepted C04 completion/read model and immutable source facts;
- C04 rights/confidentiality/shareability representation, including whether V0 needs a bounded permission projection rather than a new rights system;
- Deliverable/publishing evidence read paths;
- current Creator Content / Instagram stable media identity and source-metric observation semantics;
- external work media/upload/storage infrastructure;
- Creator team/action authorization;
- canonical Brand identity projection;
- field-level provenance representation;
- internal work-record creation/backfill/projection strategy;
- deletion/archive semantics for external records;
- Media Kit V0 feature-selection consumer contract;
- public-safe versus private work projection boundaries.

Reuse C04/content/storage primitives where semantically safe. Do not duplicate canonical Collaboration, performance or asset truth into editable Portfolio fields.

If accepted C04 currently lacks any way to represent an affirmative shareability basis for private Creator Shop work, return that as a bounded cross-module Product/architecture gap. Do not use Creator attestation to bypass it.

---

## 22. Authority / next boundary

```text
CREATOR_PORTFOLIO_V0_PRODUCT = FROZEN_V2

CREATOR_SHOP_VERIFIED_WORK_SOURCE = COMPLETED_C04_COLLABORATION

INTERNAL_PORTFOLIO_RECORD = AUTO/DETERMINISTIC_FROM_COMPLETED_C04

EXTERNAL_WORK = CREATOR_PROVIDED

SOURCE_VERIFIED = READ_ONLY + TIME_AWARE

CREATOR_SHOP_PRIVATE_WORK_SHAREABILITY = REQUIRES_AFFIRMATIVE_CREATOR_SHOP_AUTHORITY

EXTERNAL_WORK_SHAREABILITY = CREATOR_ATTESTATION_ACCEPTED_V0

MEDIA_KIT_PUBLICATION = EXPLICIT_CREATOR_SELECTION OF ELIGIBLE WORK

PORTFOLIO_IMPLEMENTATION = NOT_AUTHORIZED_BY_THIS DOCUMENT ALONE

TECHNICAL_CURRENT_STATE / REUSE / RIGHTS-GAP PREFLIGHT = NEXT POSSIBLE BOUNDARY
```

Portfolio implementation should be sequenced only after Parent chooses the technical implementation boundary relative to Creator Brand, Audience V1, Commercial Setup and Media Kit.
