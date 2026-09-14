# Brand Campaign Creator NDA at Application — Future Requirement

STATUS = DEFERRED_FUTURE_REQUIREMENT

## Purpose

Allow a Brand to require a Creator to review and sign an NDA as part of applying to a Campaign.

This is a distinct future Brand/Campaign requirement. It is not part of the current Creator Rate Card or Commercial Setup implementation.

## Product intent

A Brand may mark a Campaign as requiring NDA acceptance/signature before a Creator can complete the Application flow.

Conceptually:

```text
Campaign requires NDA
→ Creator reaches Apply
→ NDA document/version is presented
→ authorized Creator actor signs/accepts
→ signed acceptance is recorded
→ Application submission may proceed
```

The NDA must be a real versioned Campaign document/artifact, not a generic checkbox.

## Required future semantics

Future Product/architecture work should define:

- Brand upload/selection and lifecycle of the Campaign NDA;
- exact NDA version/hash signed by the Creator;
- signer actor and canonical Creator business subject;
- signature/acceptance timestamp and audit evidence;
- whether Owner only, Owner/Manager, or another explicitly authorized legal actor may sign;
- whether an Assistant may initiate Apply but must hand off NDA signature to an authorized signer;
- handling when the Brand replaces/updates the NDA;
- preservation of the exact signed version with the historical Application;
- downloadable signed artifact for authorized Brand/Creator users;
- e-signature/provider/legal requirements;
- effect of NDA refusal/expiry on Application state;
- whether NDA acceptance is required before viewing any sensitive Campaign information or only before final Application submission.

## Boundary

NDA acceptance must not silently become Creator Shop Terms acceptance, Collaboration terms acceptance, or Campaign commercial agreement acceptance. Those remain distinct legal/product events.

Existing submitted Applications must preserve their signed NDA snapshot/version even if the Campaign NDA later changes.

## Current disposition

```text
CURRENT MVP IMPLEMENTATION = NOT AUTHORIZED HERE
CAMPAIGN / C03 / LEGAL RECONCILIATION = REQUIRED LATER
```
