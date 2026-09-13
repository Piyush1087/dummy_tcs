# Creator Media Kit V0 — Non-Authoritative Composition Note

STATUS = NON_AUTHORITATIVE_WORKING_CONTEXT

PURPOSE = Help define upstream Creator Centre workspaces and their V0 outputs. This document is not Product Authority, does not authorize implementation, and must not be used for frontend/backend reconciliation.

## Working product role

Media Kit is a Brand-facing composition / curation / conversion layer. It should consume truths owned by other Creator Centre workspaces rather than becoming the canonical owner of those truths.

Working dependency model:

```text
Creator Brand / Profile
Audience
Content & Insights
Portfolio
Rate Card & Availability
Operational / Work Preferences where relevant
        ↓
      Media Kit
        ↓
 Brand-facing commercial profile
        ↓
 Work with Creator CTA
```

Instagram is expected to be an Evidence / Intelligence source underneath multiple workspaces, not necessarily a standalone Creator Centre workspace.

## Working public / authenticated composition

### Link-only unauthenticated shell

Potentially show:
- Creator identity / avatar / handle;
- Bio / positioning;
- Creator-brand personality / visual presentation;
- other explicitly non-commercial identity information.

V0 discoverability assumption:
- unlisted / link-only;
- no Marketplace/discovery implication;
- no commercial information exposed anonymously.

### Authenticated Brand-only commercial sections

Creator-controlled show/hide candidates:
- Audience demographics / audience insights;
- Portfolio / past Brand work;
- selected content performance proof;
- Rate Card;
- commercial availability;
- other detailed commercial proof.

An early-stage Creator may hide weak/empty sections without making the Media Kit appear incomplete.

## Working composition responsibilities

Media Kit may own:
- section visibility;
- selection / curation;
- ordering of selected proof;
- presentation / theme application;
- sharing / link behavior;
- Brand-facing CTA.

Media Kit should not own underlying canonical truth for:
- Creator identity / operational profile;
- Audience;
- Content Intelligence;
- Portfolio / Collaboration history;
- rates / commercial terms;
- payout / KYC / bank details;
- shipping destination;
- Campaign / Collaboration state.

## Working CTA decision context

Current MVP direction:

```text
Media Kit link
→ unauthenticated identity shell
→ Work with Creator
→ normal Brand website + domain-linked work-email verification
→ skip Brand Preview / Instagram connection / initial Brand Centre landing for this intent
→ return to the Creator context
→ Brand can proceed toward Creator enquiry / collaboration journey
```

For actors who cannot satisfy normal Brand verification:
- do not unlock commercial Media Kit information;
- do not unlock Creator Shop Collaboration/C04;
- optionally reveal the Creator-designated business email as a Creator-controlled fallback;
- conversation then continues outside Creator Shop.

Agency-specific onboarding is separately deferred to V2.

Future C04 direction under discussion:
- direct/inbound Collaboration origin without requiring Campaign creation first;
- conversational / chat-first early journey;
- structured state-changing actions such as commercial quote, counter/acceptance, fulfillment, deliverables, publishing evidence, etc.;
- preserve C04 authority/checkpoints rather than replacing them with free-form chat semantics.

## Working Media Kit section families

Possible composition, subject to upstream workspace decisions:

1. Creator identity / positioning
2. Audience
3. Selected performance proof
4. Featured Portfolio / Brand work
5. Past Brand relationships
6. Rate Card / services / add-ons
7. Availability / collaboration preferences
8. Appearance / creator-brand personality
9. Work with Creator CTA

Exact section order, labels, visibility model and public/authenticated treatment remain OPEN until upstream workspace V0 decisions are frozen.

## Important note

Legacy Creator Shop Media Kit implementation is REFERENCE ONLY. It is not Product Authority and must not drive new frontend/backend reconciliation merely because legacy code or schema exists.
