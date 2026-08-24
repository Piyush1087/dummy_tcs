# Brand Intelligence — Brand Expression

**Status:** PROPOSED FOR SYSTEMS ARCHITECT FREEZE  
**Object authority:** `objects.yaml`

## Purpose

Brand Expression holds Creator Shop's durable reusable understanding of what a Brand is, what it stands for, how it creates customer value, what makes it credible or differentiated, and how it should communicate.

It is designed for reuse by Brand Centre, Chat, Creator Strategy and Campaign Brief generation.

## Non-owned scope

Brand Expression does not own canonical Brand account/identity anchors, Visual Identity, Audience, Geography, Product/Offering Intelligence, Campaign-specific strategy, Campaign Brief instructions, provider mechanics or persistence implementation.

Canonical Brand identity/business state is consumed as authoritative context rather than duplicated as Brand Expression Intelligence.

## Brand Preview boundary

Brand Preview bounded synthesis is not durable Brand Expression Intelligence.

In particular, Preview `brand_descriptor` and `brand_understanding_narrative` must not be silently promoted into `brand_description`, `positioning` or any other durable Brand Expression Object merely because they were generated from similar Evidence.

## Progressive maturity

No Brand Expression Object is an onboarding gate or a Brand Preview readiness prerequisite.

Objects may be `PARTIAL`, `NOT_READY` or absent while the user proceeds through verification, Home and progressively maturing Brand Centre. Initial useful Brand Expression may become available after Home and deepen asynchronously.

## Legacy Identity compatibility

The existing `intelligence/engines/brand_intelligence/branches/identity/` implementation remains:

```text
FROZEN_REFERENCE
+
COMPATIBILITY_ONLY
```

It must remain unchanged until its existing consumers, including frozen Brand Preview references, are explicitly remapped. This branch does not redefine or remove the pre-verification identity-candidate producer path.
