# Brand Campaign — Creator NDA at Application — Future Requirement

STATUS = DEFERRED_FUTURE_REQUIREMENT

## Purpose

Allow a Brand to require a Creator to execute an NDA/confidentiality agreement as part of access/apply for a Campaign where sensitive Campaign, Product, launch, pricing, creative or other confidential information must be protected.

This is a future Brand-side Campaign/Application requirement and is not part of Creator Rate Card V0.

## Product direction

A future Campaign may declare:

```text
NDA_REQUIRED = YES | NO
```

When required, the Creator must satisfy the NDA requirement before the Product-defined confidential Campaign/Application boundary is crossed.

The exact gate is not frozen here. Later Product work must decide whether NDA acceptance/signature occurs before:

- seeing confidential Brief / Campaign details;
- seeing commercial terms;
- submitting Application;
- or another explicitly defined access point.

## Required future capabilities

The eventual design should evaluate:

- Brand-supplied NDA vs Creator Shop template;
- document/version identity;
- signer identity and Team actor/Creator subject semantics;
- electronic acceptance/signature provider;
- signed timestamp and immutable evidence;
- re-sign requirement after NDA version change;
- access revocation / Campaign withdrawal behavior;
- whether historical signed NDA remains viewable;
- direct-invite and public/eligible Campaign paths;
- Assistant/Manager signing authority;
- audit/export requirements;
- legal jurisdiction / governing-law handling;
- confidentiality period and expiration.

## Authority boundary

NDA status must remain distinct from:

- Campaign eligibility;
- Application status;
- Collaboration commercial agreement;
- Creator Shop platform Terms;
- Brand verification;
- Rate Card terms.

A signed NDA does not itself create an Application or Collaboration.

IMPLEMENTATION = NOT_AUTHORIZED
