# Agency Creator Collaboration Onboarding — V2 Future Requirement

STATUS = DEFERRED_V2

## Purpose

Support agencies that contact Creators on behalf of a Brand without weakening Creator Shop's Brand identity model.

This requirement is explicitly out of Creator Centre / Media Kit MVP scope.

## Problem

A legitimate agency may contact a Creator using the agency's own work-email domain while representing a separate client Brand. Requiring the client Brand's own domain email would reject this legitimate path, while allowing the agency to present itself as the Brand would corrupt Brand identity authority.

## V2 product requirement

Create a dedicated Agency onboarding / identity path.

The Agency must first establish ownership/control of its own organization through the normal business-domain verification principles.

The system must then allow the Agency to declare that it manages Creator collaboration activity for a represented Brand.

Before the Agency can receive the same authority as a Brand representative, Creator Shop must require an additional proof-of-representation step showing that the Agency is authorized to manage creator collaborations for that Brand.

The exact proof mechanism is NOT YET FROZEN and requires a later Product / legal / operational design review.

Potential evidence categories may be evaluated later, but this document does not authorize any specific mechanism.

## Identity semantics

Agency identity and represented Brand identity must remain distinct.

Do not model an Agency user as if their email domain belongs to the represented Brand.

Future UI must distinguish at least:

- Agency organization identity;
- represented Brand identity;
- representation/authorization status.

## MVP disposition

For Creator Centre / Media Kit MVP:

- Agency-specific onboarding is NOT implemented.
- Agency users that cannot satisfy the normal Brand onboarding route are not admitted into the authenticated Creator Shop collaboration path through an Agency exception.
- Creator business-email reveal is the intentional fallback so the Creator can still receive the opportunity outside Creator Shop.
- No generic-email bypass is introduced merely to support Agencies.

## Future integration targets

The future Agency identity model may need to integrate with:

- Media Kit inbound enquiry;
- direct/inbound Collaboration origin;
- Campaign creation/invitation;
- Collaboration role/authority;
- Brand workspace access where explicitly authorized;
- commercial agreement and payout-related actor attribution;
- audit/history of which Agency represented which Brand.

## Non-goals of this requirement

This document does not freeze:

- Agency tenancy architecture;
- agency team roles;
- proof-of-representation mechanism;
- duration/revocation of representation;
- multi-client Agency UX;
- billing model;
- Campaign permissions;
- Collaboration command permissions;
- Brand Centre access.

Those require a dedicated V2 Product and architecture phase.
