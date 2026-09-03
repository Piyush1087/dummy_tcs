# C-03 — Creator Campaign Participation / Apply

## Product Decision Register V1

**Status:** FROZEN  
**Module:** C-03 Creator Campaign Participation / Apply  
**Authority:** Parent Product Orchestrator  
**Next stage:** C-03 Systems Architect current-state audit and architecture freeze  

```text
C03_PRODUCT_LOGIC = FROZEN
OPEN_PRODUCT_DECISIONS = NONE
READY_FOR_SYSTEMS_ARCHITECT_INITIATION = YES
IMPLEMENTATION_AUTHORIZED = NO
```

## 1. Core product principle

The Creator Campaign page is the complete opportunity-understanding surface.

The Apply flow is intentionally short: select the exact Campaign Asset + Brief where needed, review the concrete Application context, and explicitly submit.

Anything operational after Brand acceptance belongs to Collaboration (C-04), not C-03.

Marketplace is a future discovery layer that will route into the same canonical Campaign Opportunity Page and Apply flow. C-03 must therefore be reusable from invite links, direct/public Campaign links, the MVP Campaigns workspace, and future Marketplace cards without creating parallel Campaign-detail or Apply systems.

## 2. Authority hierarchy

C-03 must consume rather than redefine:

1. frozen Brand/shared Campaign authority;
2. frozen Applicants/Application authority;
3. C-01 Creator Entry/auth/continuation authority;
4. C-05 Creator subject/team/Instagram/shell authority;
5. frozen Collaboration handoff authority, except where this register explicitly creates a C-04 reconciliation requirement;
6. latest Creator Campaign/Apply legacy implementation as the primary legacy UX/behavior reference only;
7. older legacy Creator Apply implementations as learning/reference only.

Legacy implementation never outranks frozen Product or architecture authority.

## 3. Creator Campaigns information architecture

MVP Creator shell destination:

```text
Campaigns
├── Opportunities
└── My Applications
```

This is not Marketplace.

Do not add Marketplace-style browse-all, recommendation carousels, trending, category search, payout sorting, all-brand discovery, or other discovery surfaces to C-03 MVP.

Future Marketplace may absorb this destination as a workspace while reusing the same Campaign Opportunity Page and Application domain.

## 4. Campaign visibility and opportunity entry

Canonical Campaign visibility values remain:

- `PUBLIC`
- `ELIGIBLE_CREATORS_ONLY`
- `INVITE_ONLY`

### PUBLIC

A guest may access the public Campaign Opportunity Page through a legitimate public/shared/direct link.

PUBLIC does not mean all PUBLIC Campaigns are automatically enumerated in the Creator Opportunities workspace.

### ELIGIBLE_CREATORS_ONLY

A Creator may access/apply only after the backend authoritatively establishes Creator eligibility.

### INVITE_ONLY

A Creator may access/apply only with valid invitation authority.

A valid Brand invitation may bypass ordinary Creator-targeting eligibility, but does not bypass:

- account/authentication requirements;
- required usable Instagram connection;
- Campaign/Brief/Application state;
- Application limits;
- account/security restrictions.

Forwarding an invitation URL/token never transfers Creator identity or invitation authority.

## 5. Commercial visibility gate

Commercial visibility and Apply eligibility must sit at the same identity/access hierarchy.

Commercial values must not be exposed to ordinary Brand consumers or anonymous visitors.

Define a pre-application **Opportunity Access Gate**:

```text
authenticated Creator subject
+ usable canonical Instagram connection
+ Campaign visibility entitlement
```

Visibility entitlement means:

- PUBLIC: authenticated Creator + usable Instagram;
- ELIGIBLE_CREATORS_ONLY: authenticated Creator + usable Instagram + backend-confirmed eligibility;
- INVITE_ONLY: authenticated Creator + usable Instagram + valid invitation.

Only after this gate passes may the Creator see Campaign commercial terms.

Before the gate passes, the UI may state that commercial details are available to eligible/verified creators, but must not expose exact payout, payment terms, negotiated starting payout, or commercial-value details.

Apply requires the same Opportunity Access Gate plus current application-level requirements such as Campaign open state, Application limits, duplicate rules, and selected Asset/Brief validity.

An Application limit or existing Application may block a new Apply without retroactively removing commercial information from a Creator who already passed the Opportunity Access Gate.

Once a Creator has legitimately submitted an Application, the immutable Application commercial snapshot remains available to the authorized Creator subject/team even if Instagram later requires recovery. Provider revocation does not erase historical authorized Application records.

## 6. Campaign Opportunity Page

The Creator Campaign page is a Creator projection of canonical Campaign authority, not a clone of the Brand Campaign workspace.

It should enable rapid understanding of:

- Brand identity;
- Campaign name and purpose/objective;
- execution/publishing timing where authoritative;
- platform;
- Campaign Asset(s)/Offering(s);
- applicable Briefs;
- Deliverables;
- usage-right context;
- Brand support/consideration;
- commercial terms only after the Opportunity Access Gate;
- About the Brand;
- current Creator access/Application state.

Creator-specific future additions such as Brand trust/ratings or selection likelihood may extend this projection later without changing canonical Campaign ownership.

## 7. Brand external links

About the Brand may include:

- canonical Brand website link;
- canonical/authorized Brand Instagram link when available.

External links should open separately so Campaign context is preserved.

The Campaign platform label `Instagram` is not itself a Brand Instagram hyperlink. Campaign platform and Brand social identity are separate semantics.

## 8. Campaign hero/media

Preferred hero media source:

1. relevant canonical Campaign Asset / Offering media;
2. otherwise a deliberate solid-fill `NO IMAGE` visual state.

Do not substitute or stretch a low-resolution scraped Brand logo into Campaign cover/hero art.

The Brand logo may still appear at normal identity/avatar scale.

Do not create a new Brand Assets Intelligence branch solely for C-03. Canonical visual assets remain application/business state; scan-discovered imagery remains candidate/evidence unless explicitly promoted through authorized Brand/application state.

## 9. Campaign Asset terminology

C-03 must not be architected around the legacy assumption that every opportunity contains a D2C `Product`.

Canonical internal model:

```text
Campaign
→ Campaign Asset
  → Brief(s)
```

Campaign Asset kinds and creator-facing terminology may resolve contextually, including:

- Brand;
- Product;
- Collection;
- Offer;
- SaaS Product / Plan / Feature;
- Treatment / Service / Program;
- Service / Experience;
- other canonical Offering projections.

A Brand-only Campaign may legitimately have no Product selection step.

## 10. Brief Explorer

A Creator should be able to understand all relevant Campaign Assets and Briefs before entering the Apply flow.

The Campaign page therefore contains a Brief/Asset explorer.

Use the accepted shared Aurora SideDrawer interaction/component pattern for read-only Creator projections.

### Creator Brief drawer may show

- Brief name;
- creative intent;
- Creator Brief;
- Deliverables and per-deliverable configuration;
- platform;
- creative guidance;
- Creator requirements;
- reference content where appropriate;
- usage rights;
- relevant timing/publishing context.

### Creator Asset/Offering drawer may show

- applicable image/media;
- name/type;
- description;
- current relevant factual/product/service information;
- customer-facing destination;
- linked Briefs.

No Brand edit/readiness/admin controls appear in Creator drawers.

## 11. Apply from Brief and optimized Apply journey

Eligible/access-authorized Briefs may expose:

`Apply to this Brief`

This does not immediately create an Application.

It preselects the Campaign Asset + Brief and opens Application Review.

Explicit `Submit application` remains the atomic human command.

Journey optimization:

- one Asset + one Brief -> Apply goes directly to Review;
- one Asset + multiple Briefs -> begin at Brief selection;
- multiple Assets -> select Asset then a Brief belonging to it;
- Apply from a specific Brief -> preselect Asset + Brief and go directly to Review.

During Review, Product/Asset and Brief details remain inspectable through the same read-only drawers.

The Apply flow is selection + review + explicit submission, not a discovery interface.

## 12. Asset/Brief relationship

A Creator may only apply to a Brief that belongs to the selected Campaign Asset.

The frontend must make invalid combinations impossible to select.

The backend must independently enforce this relationship at submission.

Legacy independent Product and Brief selection is retired.

## 13. Platform

Instagram is the only operational MVP platform.

Platform remains visibly represented on Campaign and Apply surfaces but is not selectable in MVP.

Do not use an artificial disabled platform dropdown merely to signal future readiness.

Underlying contracts should remain extensible to future platforms such as TikTok/YouTube.

## 14. Commercial model and currency

Canonical compensation models:

- FIXED
- NEGOTIABLE

Campaign commercial currency is the canonical Campaign currency, not the Creator's local currency.

Current Campaign authority derives:

- Brand India -> INR;
- Brand United States -> USD;
- Rest of world -> USD.

A Creator or guest does not receive a locally converted canonical fee.

When commercial visibility is permitted, all Campaign commercial values render in Campaign currency.

Product/Offering retail values may carry their own actual currency and must not be silently added to or converted into Creator cash compensation.

## 15. FIXED Campaign Apply

The Creator enters no amount.

The Campaign-wide fixed offer is authoritative once commercial visibility is unlocked.

## 16. NEGOTIABLE Campaign Apply and C-04 boundary

The Creator enters no proposed amount in C-03.

Once commercial visibility is unlocked, C-03 may show the Brand's Campaign-wide minimum advertised payout and explain:

> You can negotiate your fee after the Brand accepts your application.

Canonical journey:

```text
Creator submits Application
→ Brand accepts Application
→ Collaboration is created
→ C-04 Negotiation begins
→ Creator's first Negotiation action enters proposed amount
```

C-03 must not design post-acceptance negotiation.

### Required C-04 reconciliation

Older Collaboration authority assumes the Application may already carry the Creator-specific initial commercial proposal.

C-04 must reconcile this so the initial Creator proposal is captured in the first Collaboration Negotiation action instead.

This C-03 Product decision supersedes the older assumption for this boundary only.

## 17. No shipping/contact or application questionnaire

C-03 does not collect:

- shipping address;
- permanent contact profile;
- follower/profile questionnaire data already known to Creator Shop;
- generic pitch/note unless a later explicit Product decision adds it;
- Creator commercial proposal for NEGOTIABLE Campaigns.

C-05 canonical Creator subject/profile/shipping/contact state is reused downstream.

## 18. Application acknowledgement

Do not reuse legacy `Terms & escrow lock` wording.

Use explicit Application review and `Submit application`.

Do not add a legal checkbox unless a real application-level legal/contract acceptance requirement exists.

## 19. Inventory

Legacy retail inventory gating is explicitly incorrect and retired.

Public Product/Offering stock state does not determine whether a Creator can apply.

Creator provisioning/fulfillment is a separate Campaign/Collaboration concern and must use authoritative support/fulfillment state rather than ecommerce stock inference.

## 20. Application limits and duplicate policy

Preserve frozen Applicants policy:

```text
Creator × Campaign
≤ 2 non-WITHDRAWN Applications

Creator × Brand
≤ 5 non-WITHDRAWN Applications
```

Statuses that consume allowance remain governed by frozen Applicants authority.

For the same Creator × Campaign × Campaign Asset × Brief opportunity:

- PENDING -> reapply blocked;
- APPROVED -> blocked;
- REJECTED -> blocked;
- SUPERSEDED -> blocked where legitimately present;
- WITHDRAWN -> fresh Application may be permitted subject to all other rules;
- EXPIRED -> fresh Application may be permitted subject to all other rules.

Permitted reapplication always creates a new Application record. Never reactivate the old record.

## 21. Multiple approved Applications / Collaborations

A Creator may have multiple Applications in one Campaign subject to canonical limits.

Each Application references exactly one Campaign Asset + one Brief.

Each approved Application may create at most one Collaboration.

Multiple distinct approved Applications from the same Creator × Campaign may therefore create multiple Collaborations.

Approving one Application does not automatically supersede unrelated sibling Applications solely because they belong to the same Creator × Campaign.

## 22. Assistant Apply

C-05 Assistant may view Campaign opportunities and submit Applications on behalf of the canonical Creator business subject.

Authorization/audit must distinguish:

- subject = canonical Creator/Owner profile/workspace;
- actor = signed-in Team User.

Both must be recorded where relevant.

## 23. Submission behavior

`Submit application` must be backend-authoritative, idempotent/replay-safe, and revalidate current Campaign/Application authority.

The backend must defend against:

- double-click/replay;
- concurrent browser tabs;
- Owner + Assistant simultaneous submission;
- Campaign/Application limit races;
- stale Campaign/Brief/Asset state;
- Instagram revocation between page load and Submit;
- eligibility/invitation changes;
- invalid Asset × Brief association.

## 24. After submission

Remain on the same Campaign Opportunity Page.

Replace the Apply state with contextual Application state, e.g.:

- Application submitted;
- selected Campaign Asset;
- selected Brief;
- submitted date;
- current canonical status;
- `Withdraw application` when and only when canonical policy permits;
- `View all my applications`;
- `Open Collaboration` when an accepted Application has handed off.

The Creator may have multiple Applications under the same Campaign and the page should project them separately.

## 25. My Applications

`Campaigns → My Applications` groups naturally by Campaign while preserving each Application as an independently inspectable record.

At minimum show:

- Campaign/Brand;
- selected Campaign Asset;
- selected Brief;
- applied date;
- canonical Application status;
- applicable action such as Withdraw or Open Collaboration.

Historical Application records remain visible.

## 26. Downloadable Creator Brief Pack

After successful Application submission, the Creator receives `Download Brief` for that specific Application.

The downloadable document is a **Creator Brief Pack**, not merely a raw Brief export.

It should be generated from the immutable Application snapshot and include appropriate current-at-submission context such as:

### Brand
- Brand name;
- Brand logo where suitable;
- Brand website;
- canonical Brand Instagram where suitable.

### Campaign
- Campaign name;
- purpose/objective;
- platform;
- relevant timing;
- commercial model and commercial snapshot when the Creator was authorized to see it;
- Brand support/consideration.

### Selected Campaign Asset
- contextual type/name;
- media where available;
- description/relevant grounded facts;
- customer-facing destination.

### Selected Brief
- Brief name;
- creative intent;
- Creator Brief;
- Creator requirements;
- Deliverables;
- creative guidance;
- reference content where appropriate;
- usage rights;
- relevant publishing requirements.

### Application
- submission timestamp;
- Application reference.

The Application Brief Pack remains historically available to the authorized Creator subject/team even if the Application is later Rejected, Withdrawn or Expired.

## 27. C-04 downloadable Brief requirement

C-04 Collaboration must carry forward `Download Brief`.

The Collaboration version should be based on the locked Collaboration execution snapshot and may include final agreed commercial terms and any other Collaboration-owned locked execution context.

Conceptual distinction:

```text
Application Brief Pack
= what I applied to

Collaboration Brief Pack
= what we agreed to execute
```

C-03 implements/owns the Application artifact requirement. C-04 owns the Collaboration artifact requirement.

## 28. Notifications

Freeze Application-domain events needed for downstream notifications, including at minimum:

- Application submitted;
- Application approved;
- Application rejected;
- Application withdrawn;
- Application expired where applicable.

Creator-facing approval and rejection notification requirements are mandatory Product outputs.

Exact delivery mechanism/channel may remain Notifications implementation debt if that infrastructure is not ready during C-03 execution.

## 29. C-01 continuation and Campaign persistence

Guest/direct Campaign Apply must preserve Campaign intent across C-01:

```text
Campaign Opportunity Page
→ explicit Apply intent
→ C-01 signup/signin
→ required Instagram connection
→ return to the same Campaign Opportunity Page
→ explicit Application submission
```

C-01 must never auto-create an Application after authentication/onboarding.

Campaign context should remain visually obvious when the Creator returns.

## 30. Attribution / invite tracking

C-03 must preserve Campaign ingress attribution across C-01 continuation.

Capture at minimum two conceptual moments:

1. qualified Campaign landing/ingress;
2. Application submission/conversion.

Allowlisted attribution may include:

- `utm_source`;
- `utm_medium`;
- `utm_campaign`;
- `utm_content`;
- `utm_term`;
- `entry_surface`;
- invitation reference;
- Campaign ID;
- landing timestamp.

Never persist the raw invitation token as analytics provenance.

Where useful, preserve both first qualified Campaign touch and Application conversion touch rather than forcing one attribution model.

Analytics failure must never block Campaign viewing or Application submission.

## 31. Application closing/deadline

C-03 consumes backend-authoritative Application availability.

The UI may display an application deadline only when an authoritative deadline exists.

Do not derive or invent an Application deadline from Campaign publishing-end date.

C-03 should consume semantic backend state such as:

- `applicationsOpen`;
- `canApply`;
- `applyBlockedReason`;
- optional authoritative `applicationDeadline`.

Absence of an explicit Application deadline does not block C-03 MVP.

## 32. Brief/privacy progressive disclosure

Detailed Brief and commercial information must not leak simply because a Campaign URL is known.

Guest/public teaser views may expose enough Campaign information to understand the opportunity category and decide to authenticate, but must respect the Opportunity Access Gate and Campaign visibility.

Commercial details require the Opportunity Access Gate.

Detailed Brief visibility should be implemented conservatively according to authenticated/access-authorized Creator state, especially for ELIGIBLE_CREATORS_ONLY and INVITE_ONLY Campaigns.

## 33. Future trust and Intelligence

Future Brand trust/rating signals may be added to About the Brand, such as creator ratings or prior collaboration counts, only when a canonical Trust/relationship authority exists.

Future Creator selection likelihood may be added as advisory Intelligence.

Permanent distinction:

```text
eligibility
= am I allowed to apply?

selection likelihood
= how competitive am I?
```

Selection likelihood must not silently become authorization.

## 34. Required edge-case acceptance matrix

C-03 architecture/runtime acceptance must explicitly cover at minimum:

- PUBLIC guest -> C-01 continuation -> return;
- PUBLIC signed-in but Instagram disconnected;
- ELIGIBLE_ONLY signed-in + Instagram connected but ineligible;
- ELIGIBLE_ONLY eligible Creator;
- INVITE_ONLY guest with valid invite;
- INVITE_ONLY wrong-account/forwarded invite;
- expired/revoked invite;
- Brand user opening Creator Apply URL;
- Assistant actor applying for canonical Creator subject;
- Team role/membership loss during an open Apply flow;
- Instagram revocation between load and Submit;
- Campaign pause/completion/application closure after page load;
- Asset/Brief pause/removal/change after page load;
- invalid Asset × Brief pairing;
- one Asset/one Brief optimized path;
- Brand-only Campaign Asset;
- double Submit/replay;
- concurrent Owner/Assistant submission;
- Application-limit concurrency;
- Withdraw vs Brand decision race;
- same-opportunity reapplication rules;
- multiple Applications and multiple approved Collaborations;
- FIXED vs NEGOTIABLE display;
- zero-cash + non-cash support without treating missing value as zero;
- Campaign currency vs Product/Offering currency;
- media absent/failure -> solid-fill no-image state;
- external Brand/Offering links preserving Campaign context;
- attribution surviving signup/Instagram continuation;
- analytics failure not blocking Apply;
- Application Brief Pack historical access.

## 35. Explicitly out of C-03 scope

- Marketplace discovery/ranking/carousels;
- C-04 commercial negotiation implementation;
- Collaboration fulfillment/production/publishing/settlement;
- payout/KYC execution;
- Creator Centre content;
- new Creator Intelligence/selection-likelihood implementation;
- Brand trust/rating implementation;
- inventory automation;
- new Brand visual-asset acquisition architecture solely for Campaign hero imagery;
- AWS/production deployment.

## 36. Product freeze verdict

```text
C03_PRODUCT_DECISION_REGISTER_V1

status: FROZEN
open_product_decisions: NONE
ready_for_systems_architect_initiation: YES
implementation_authorized: NO

next_gate:
C03_SYSTEMS_ARCHITECT_CURRENT_STATE_AUDIT_AND_ARCHITECTURE_FREEZE
```
