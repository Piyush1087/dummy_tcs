# Brand Intelligence — Geography

**Status:** PROPOSED FOR SYSTEMS ARCHITECT FREEZE  
**Object authority:** `objects.yaml`

## Purpose

Geography maintains Creator Shop's durable Brand-level serviceability understanding: where the Brand can currently and credibly provide its Offerings to customers.

## Location / business-state boundary

Primary Brand country/geography, canonical Locations, Location CRUD, Offering availability and Offering-to-Location relationships remain canonical application/business state. Geography may reference them but does not duplicate or own them.

## Serviceability boundary

`serviceability_profile` describes the Brand-level serviceability envelope. It is distinct from headquarters/business base, Persona geography, Campaign target geography, demand geography and competitor geography.

Brand-level serviceability never means every Offering is available everywhere in the Brand envelope. Specific downstream feasibility must combine `serviceability_profile` with canonical Offering availability.

## Legacy Identity compatibility

The existing Identity branch remains `FROZEN_REFERENCE + COMPATIBILITY_ONLY` until explicit remap. `country` is consumed as canonical business state; legacy `business_geography` is superseded in the permanent architecture; legacy `markets_served` is reusable reference semantics superseded by `serviceability_profile`.

## Progressive maturity

`serviceability_profile` is not required for Brand Preview, verification or Home. A partial profile may become useful after Home and mature asynchronously as Location, Offering availability and first-party serviceability evidence improve.

## Industry policy

One Geography schema applies across D2C, AI/SaaS, Healthcare and Offline Services. Industry changes serviceability reasoning, not topology. A globally accessible website never establishes global serviceability by itself.

## Topology status

Geography may be independently frozen, but the complete Brand Intelligence topology remains provisional until the cross-branch Systems Architect reconciliation passes across Brand Expression, Audience, Visual Identity and Geography.
