# Creator Media Kit V3 — Parent Availability Clarification V1

`CREATOR_MEDIA_KIT_V3_PARENT_AVAILABILITY_CLARIFICATION_V1`

## Authority

This document durably records the explicit Parent Product clarification supplied for Creator Media Kit V3 final acceptance.

```text
PUBLIC / UNAUTHENTICATED MEDIA KIT
= AVAILABILITY IS NOT DISPLAYED

VERIFIED BRAND AFTER AUTHENTICATION
= CURRENT AVAILABILITY MAY BE DISPLAYED
```

Equivalent authority:

```text
AVAILABILITY IS NOT PUBLIC MEDIA-KIT DATA.

AVAILABILITY MAY APPEAR IN THE VERIFIED-BRAND
MEDIA-KIT PROJECTION AFTER AUTHENTICATION.
```

## Relationship to frozen Product authority

The governing Product register remains:

```text
Creator Media Kit V0 Product Decision Register V3
commit d74184568d64155e0fab22739210805f954f01e6
blob 414c32c014f0a1ac1a9416fff3770cc452fe93f8
```

This clarification confirms and does not otherwise rewrite that register. The register already states that Availability is absent from the unauthenticated public shell and may be shown only to a separately verified Brand viewer.

## Acceptance interpretation

```text
SOURCE_CORRECTION_REQUIRED = NO
PUBLIC_API_MUST_EXCLUDE_AVAILABILITY = YES
PUBLIC_UI_MUST_EXCLUDE_AVAILABILITY = YES
VERIFIED_BRAND_MAY_RECEIVE_CURRENT_AVAILABILITY = YES
BRAND_AUTHENTICATION_AND_VERIFICATION = SERVER_AUTHORITATIVE
AVAILABILITY_HISTORY_EXPOSED = NO
AVAILABILITY_AS_CTA_FILTER = NO
```

The clarification must not be reinterpreted as requiring Availability to be absent from every Media Kit projection.

## Other frozen boundaries preserved

```text
REVEAL EMAIL = DEFAULT
REVEAL EMAIL = NOT CREATOR CONTROLLED

MEDIA KIT AUTHORITY
= CTA PRESENTATION
→ CTA CLICK
→ END MEDIA KIT AUTHORITY
```

Downstream Brand signup, authentication, onboarding, Intelligence triggers, destination selection, Campaign creation, C04 entry, enquiry creation, and Collaboration execution remain separately governed and outside Media Kit V3 acceptance.

## Mutation boundary

This is a docs-only Product clarification. It authorizes no backend, frontend, schema, migration, branch, merge, deployment, or canonical reconciliation mutation.
