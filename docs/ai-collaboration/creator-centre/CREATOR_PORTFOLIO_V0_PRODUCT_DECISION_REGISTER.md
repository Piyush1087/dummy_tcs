# Creator Centre — Portfolio V0 Product Decision Register

`CREATOR_PORTFOLIO_V0_PRODUCT_DECISION_REGISTER_V1`

STATUS = PRODUCT_FROZEN_FOR_V0

IMPLEMENTATION = NOT_AUTHORIZED_BY_THIS DOCUMENT ALONE

This document freezes the V0 Product behavior for the **Portfolio** workspace in Creator Centre.

Portfolio is a commercial-proof workspace. It is not the Creator's Content feed, not the canonical Collaboration domain, and not the Brand-facing Media Kit publication layer.

---

## 1. Purpose

Portfolio helps the Creator answer:

> What commercial work can I credibly show a Brand as proof that I can deliver?

Portfolio combines structured proof from Creator Shop with Creator-provided external work while preserving the provenance of every fact.

Portfolio V0 should help a Creator build durable commercial proof over time without forcing them to manually recreate work that Creator Shop already knows.

---

## 2. Durable Creator Centre placement

Current top-level direction remains:

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

Portfolio remains separate because its job is distinct from both Content and Media Kit.

```text
Content
= what I create and what patterns perform

Portfolio
= what commercial work proves I can deliver

Media Kit
= which selected proof is exposed to a Brand and how it is presented
```

---

## 3. Portfolio V0 sources

Portfolio V0 supports exactly two source families:

```text
1. CREATOR_SHOP_WORK
2. EXTERNAL_WORK
```

### 3.1 Creator Shop work

Creator Shop work is derived from canonical Creator Shop Collaboration truth.

Only a legitimately completed Collaboration is automatically eligible to become a Creator Shop Portfolio record.

Do not auto-create Portfolio proof from:

- Campaign Applications;
- rejected/withdrawn/expired Applications;
- an accepted Application before Collaboration completion;
- an in-progress Collaboration;
- a terminated/failed Collaboration that did not complete successfully;
- Instagram `likely_collab` inference;
- a public mention/tag alone.

### 3.2 External work

A Creator may manually add commercial work completed outside Creator Shop.

External work remains explicitly Creator-provided unless another source independently verifies a specific fact.

Do not label the external Brand relationship itself `verified` merely because a public post or Instagram metric can be resolved.

---

## 4. Provenance / trust model

Portfolio V0 preserves provenance at fact level.

At minimum distinguish:

```text
CREATOR_SHOP_VERIFIED
CREATOR_PROVIDED
SOURCE_VERIFIED
```

Meaning:

### CREATOR_SHOP_VERIFIED

A fact comes from canonical Creator Shop business state, for example a completed C04 Collaboration, its Brand, locked deliverable execution or publishing evidence.

### CREATOR_PROVIDED

A fact is manually asserted by the Creator, for example an external Brand relationship, project description or manually entered result.

### SOURCE_VERIFIED

A fact is verified from an accepted external source such as exact connected-Instagram media/performance Evidence.

`SOURCE_VERIFIED` for a post/performance fact does **not** upgrade an external Brand relationship to `CREATOR_SHOP_VERIFIED`.

The UI may simplify labels, for example:

```text
Creator Shop verified
Creator-provided
Instagram verified
```

but must preserve the underlying distinction.

---

## 5. Creator Shop Portfolio record

A completed Creator Shop Collaboration may contribute immutable verified facts including, where applicable:

- Brand identity;
- Campaign / project identity;
- Campaign Asset / Offering context;
- Brief context;
- locked Deliverable types and quantities;
- whether each Deliverable required public publishing or was asset-only;
- completion date;
- exact public publishing evidence / public content reference where available;
- source-native performance facts where exact publishing evidence can safely resolve to accepted Content/Instagram performance truth.

Creator Shop verified facts cannot be rewritten by the Creator.

The Creator may add Creator-owned framing around the verified project, such as:

- short project summary;
- `What I did` / contribution summary;
- optional outcome/context note;
- optional title override for presentation within Portfolio, provided it does not falsify the verified project identity.

Creator-owned commentary never changes the underlying verified facts.

---

## 6. Commercial amounts and private agreement terms

Portfolio does not expose or use the Creator's agreed cash fee, Brand reserve, payment terms, payout status, bank details or other private financial execution facts as commercial proof.

```text
PORTFOLIO
!=
COMMERCIAL AGREEMENT HISTORY
```

Rate Card owns standard/reference pricing.

Campaign/Collaboration own opportunity-specific and locked commercial terms.

Portfolio may prove that work occurred; it does not publish what the Brand paid unless a later explicit Product decision authorizes such a feature.

---

## 7. Publishing-required versus asset-only / UGC work

Portfolio must preserve the accepted Collaboration distinction:

```text
PUBLISHING_REQUIRED
vs
ASSET_ONLY
```

UGC is a use case of the same campaign/collaboration construct, not a separate canonical deliverable format.

### 7.1 Publishing-required work

When a completed Collaboration contains valid public publishing evidence, Portfolio may use the verified public content reference as proof.

### 7.2 Asset-only / UGC work

A completed asset-only / UGC Collaboration is still legitimate commercial work and may exist as a Portfolio record.

However, Creator Shop must not automatically expose private submitted asset bytes/media merely because the Collaboration completed.

Asset-only media becomes eligible for later Brand-facing Portfolio/Media Kit display only when an accepted permission/right basis exists. In V0, if the platform does not already hold such a shareability right, require an explicit Creator attestation before user-supplied media is treated as shareable.

Do not infer Portfolio-display permission from:

- Collaboration completion;
- Brand payment;
- Brand receiving content rights;
- `publishingRequired = false`;
- internal deliverable storage.

---

## 8. External Work V0 fields

External Work should support a compact, useful proof record.

Product-required fields:

```text
Brand / client name
Project / collaboration title or short identifier
Approximate completion date or month/year
What I delivered / work summary
```

Optional fields:

```text
public content URL(s)
work media/reference where safely supported
short project summary
What I did / contribution
Outcome / result note
structured performance/result metrics where provided
```

Exact storage/media-upload implementation is a technical preflight decision and must reuse accepted secure asset infrastructure where possible.

The Creator must explicitly attest that they have the right/permission to share external work or uploaded work media through Creator Shop.

This attestation does not make the external Brand relationship Creator Shop verified.

---

## 9. External metrics and verification

V0 may allow Creator-provided metrics/results for external work if they are clearly labeled as Creator-provided.

If an exact external public post belongs to the Creator's accepted connected account and the platform can truthfully resolve accepted source metrics, those source facts may be attached separately as source-verified facts.

Rules:

```text
manual metric != source-verified metric
source-verified content != verified Brand relationship
```

Do not silently overwrite or merge provenance.

Do not fabricate Campaign Performance from organic post metrics.

```text
ORGANIC / SOURCE PERFORMANCE
!=
CAMPAIGN PERFORMANCE
```

Campaign Performance, where supported later, remains its own canonical domain.

---

## 10. Case-study framing

V0 does not create a separate Case Study object/workspace.

A Portfolio record may be enriched into a lightweight case-study presentation through optional Creator-owned framing:

```text
Project summary
What I did
Outcome / result context
```

Verified facts remain immutable underneath this framing.

A richer case-study builder, reusable templates, long-form storytelling and custom section composition are deferred.

---

## 11. Representative organic content is not Portfolio work

Do not auto-promote ordinary Creator Content into Portfolio simply because it performs well.

```text
ORGANIC CONTENT EXAMPLE
!=
COMMERCIAL WORK
```

Early Creators with no Brand work may still have a useful Media Kit later through Creator Brand, Audience and Content examples.

Portfolio should not manufacture fake commercial history to avoid an empty state.

The Portfolio empty state should instead:

- explain that verified Creator Shop work will appear automatically after completed Collaborations;
- allow `Add external work`;
- avoid completion-pressure or a negative profile score.

---

## 12. Portfolio curation versus Media Kit curation

Portfolio V0 is the Creator's commercial-proof library and editing surface for Creator-owned context.

Media Kit remains the Brand-facing publication/composition layer.

Therefore Portfolio V0 does **not** own:

- Media Kit visibility;
- public/private/Brand-only publication policy;
- final featured-work selection for a specific Media Kit;
- Media Kit ordering;
- Media Kit theme/layout.

Media Kit may later select/order a subset of eligible Portfolio records.

Portfolio itself should default to useful internal organization such as recent-first plus source/status filters rather than requiring a public-facing custom order.

A future Portfolio-specific `Featured` concept may be introduced only if a distinct non-Media-Kit consumer requires it.

---

## 13. Editability / deletion

### Creator Shop verified work

Creator cannot delete or rewrite the canonical verified work history through Portfolio.

Creator may edit/remove only their Creator-owned framing fields.

If a verified record should not appear in Media Kit, that is a later Media Kit visibility/selection decision rather than deletion of canonical history.

### External work

Creator may create, edit and delete their manually added external Portfolio records.

Any source-verified facts attached to an external record retain their provenance and cannot be edited into different measured values.

---

## 14. V0 workspace structure

Recommended Product structure:

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
- representative media/reference where eligible
- concise result/performance context where available

Portfolio item detail
- verified facts
- Creator-owned project framing
- content/publishing proof
- performance/result proof
- provenance labels

+ Add external work
```

Exact visual layout is not frozen here.

Avoid turning Portfolio into one enormous long-scroll page of every field for every project.

Use a browse/list/grid plus route-addressable or drawer/detail experience appropriate to the active Creator shell.

---

## 15. Relationship to Content V0

Portfolio may consume accepted Content/Instagram facts for exact public work where appropriate, but must not become another Content Intelligence processor.

Content owns:

- observed content semantics;
- source performance facts / grouped performance Intelligence;
- representative organic content.

Portfolio owns:

- commercial project proof;
- relationship/work provenance;
- Creator-owned project framing;
- links from a commercial work record to accepted supporting content/performance facts.

If Content Intelligence changes or refreshes, Portfolio should read current accepted source facts where appropriate without rewriting immutable commercial history.

---

## 16. Relationship to Collaboration / C04

C04 remains canonical authority for Creator Shop Collaboration truth.

Portfolio consumes C04; it does not mutate or reinterpret Collaboration lifecycle.

Portfolio must not create or change:

- commercial agreements;
- fulfillment state;
- deliverable submissions;
- Brand approvals/revisions;
- publishing authorization;
- publishing evidence;
- financial settlement;
- Collaboration completion.

Only accepted C04 facts may be projected as Creator Shop verified proof.

---

## 17. Relationship to Media Kit

Media Kit later consumes Portfolio.

Potential Media Kit use:

```text
Portfolio library
→ select eligible projects
→ order selected proof
→ show/hide Portfolio section
→ Brand-facing presentation
```

Portfolio should therefore preserve stable item identity, provenance and shareability constraints without embedding Media Kit presentation rules.

---

## 18. Roles

Portfolio V0 should follow the established Creator team distinction:

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

Assistant may understand commercial proof but does not author or delete Creator-owned Portfolio representations in V0.

Verified C04 facts are immutable for all Creator-side roles.

Exact action names are technical/domain decisions.

---

## 19. Multi-platform direction

Portfolio is platform-agnostic commercial proof.

Do not create Instagram/TikTok/YouTube Portfolio workspaces.

A Portfolio item may reference work from one or more platforms while preserving source-native content identity and performance semantics.

Do not merge incompatible platform metrics into one synthetic performance number.

Future source-specific metrics remain individually attributable.

---

## 20. Explicit V0 deferrals

Portfolio V0 defers:

- public Portfolio page independent of Media Kit;
- Portfolio-specific public visibility controls;
- Portfolio-specific featured ordering;
- ratings/reviews/testimonials;
- automated Brand endorsement requests;
- automatic likely-collab → Portfolio promotion;
- Marketplace ranking based on Portfolio;
- AI-generated case-study copy;
- a universal Portfolio score;
- cross-platform synthetic performance metrics;
- package/rate information inside Portfolio;
- agreed commercial fee publication;
- Brand-facing Creator Shop work verification beyond the provenance labels frozen here;
- complex rights/licensing workflow for Portfolio reuse;
- automatic permission inference for asset-only work;
- long-form case-study builder;
- external Brand verification workflow.

---

## 21. Product-level acceptance criteria

Portfolio V0 is Product-acceptable only if:

1. completed Creator Shop Collaborations can produce Portfolio records without manual re-entry;
2. non-completed/inferred work is not silently promoted as verified commercial proof;
3. Creator Shop verified facts remain immutable;
4. Creator can add, edit and delete external work;
5. external Brand relationships remain clearly Creator-provided unless independently verified by a future explicit workflow;
6. source-verified post/performance facts do not falsely verify an external Brand relationship;
7. published Creator Shop content can carry exact publishing/source proof where available;
8. asset-only/UGC work can exist as commercial proof without automatically exposing private deliverable assets;
9. Creator attestation is required before manually supplied external/private work media is treated as shareable;
10. Portfolio does not expose agreed Creator fees/payment terms/financial execution history;
11. organic Content is not automatically converted into commercial Portfolio history;
12. Portfolio supports a useful empty state and `Add external work`;
13. Media Kit selection/order/visibility remain outside Portfolio authority;
14. C04 remains canonical Collaboration authority;
15. organic/source performance remains distinct from Campaign Performance;
16. provenance survives every Creator/Brand-facing projection;
17. Owner/Manager can manage Creator-owned Portfolio fields; Assistant is read-only;
18. Portfolio remains platform-agnostic and does not fabricate cross-platform combined metrics.

---

## 22. Technical preflight requirements for later implementation

Before implementation, the Portfolio Systems Architect / implementation owner must audit at minimum:

- accepted C04 Collaboration read model and final completion truth;
- Deliverable/publishing evidence read paths;
- current Creator Content / Instagram performance consumer and stable media identity;
- existing asset/upload/storage infrastructure suitable for external work media;
- Creator team/action authorization;
- canonical Brand identity projection for completed C04 work;
- exact source/field provenance representation;
- deletion/archive semantics for external records;
- shareability/permission representation for asset-only/external work;
- Media Kit future-consumer identity requirements without prematurely implementing Media Kit.

Reuse existing C04/content/storage primitives where semantically safe. Do not duplicate canonical Collaboration, performance or asset truth into editable Portfolio fields.

---

## 23. Authority / next boundary

```text
CREATOR_PORTFOLIO_V0_PRODUCT = FROZEN

CREATOR_SHOP_VERIFIED_WORK_SOURCE = COMPLETED_C04_COLLABORATION

EXTERNAL_WORK = CREATOR_PROVIDED

MEDIA_KIT_SELECTION / VISIBILITY = NOT_PORTFOLIO_OWNED

PORTFOLIO_IMPLEMENTATION = NOT_AUTHORIZED_BY_THIS DOCUMENT ALONE

TECHNICAL_CURRENT_STATE / REUSE PREFLIGHT = NEXT POSSIBLE BOUNDARY
```

Portfolio implementation should be sequenced only when Parent authorizes it relative to the remaining Creator Centre program and accepted Creator Content / Creator Brand / C04 authority.
