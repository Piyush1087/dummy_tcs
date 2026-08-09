# Collaboration Creator / Brand Context Contract

Status: FROZEN from Collaboration 6.7B UX reconciliation.

## Purpose

Define the read-only counterpart context opened from the Collaboration chat header. This surface provides enough relationship context to support Collaboration decisions without navigating away from the workspace or duplicating Creator/Brand Intelligence ownership.

## Brand -> Creator context

Trigger: Brand clicks Creator identity/avatar in Collaboration chat header.

Presentation: drawer or equivalent lightweight overlay within the existing Collaboration workspace.

### Section 1 — Creator summary

Show factual/profile context such as:

- avatar;
- display name;
- creator handle;
- primary platform;
- follower count where available;
- location where available;
- creator category/niche where available.

These fields are read projections from Creator/Profile/Intelligence owners; Collaboration does not own them.

Do not expose:

- internal Trust/risk scores;
- Admin notes;
- hidden platform classifications;
- other Brands' private Collaboration history.

### Section 2 — This Collaboration

Show:

- Campaign;
- Product;
- Brief;
- locked Deliverable scope summary;
- agreed Creator fee / commercial summary appropriate for Brand;
- lifecycle;
- current stage/status;
- action-required/waiting state where useful.

This is a projection of the current Collaboration.

### Section 3 — Relationship with this Brand

Show factual historical relationship between this Brand and this Creator only.

Summary may include:

- previous Collaboration count;
- completed count;
- cancelled/ended count;
- prior Collaboration rows with Campaign/title, completion/end status and date.

Previous Collaboration row may link/open the historical Collaboration when product routing supports it.

Do not expose the Creator's Collaboration history with unrelated Brands.

### Feedback/history

Historical feedback between this Brand and Creator may be shown where visibility rules permit. It must come from persisted Collaboration feedback/read models, not inferred Trust scores.

## Creator -> Brand context

Trigger: Creator clicks Brand identity/avatar in Collaboration chat header.

MVP presentation is intentionally lighter than Brand -> Creator context.

Show:

- Brand logo/name;
- website/category where available;
- Campaign;
- Product;
- Brief;
- current Collaboration status/context.

Extended Brand relationship analytics are not required for MVP.

## Interaction rules

- read-only surface;
- opening/closing does not mutate Collaboration;
- context load failure must not break the underlying Collaboration workspace;
- current Collaboration remains selected behind the drawer;
- data should be fetched through dedicated read/query contracts rather than assembled from chat messages;
- no frontend inference of Trust, reliability or relationship scoring.

## Backend/read-model requirement

A future read-model query should support at least:

- Creator summary;
- current Collaboration summary;
- Brand-Creator relationship history for the authenticated Brand;
- historical Collaboration identity/status/date summaries.

Exact DTO field names are deferred to backend/read-model reconciliation.

## Privacy invariant

The drawer is scoped to information the viewing party is authorized to see. Brand relationship history is limited to that Brand's relationship with the Creator. Internal Trust/admin intelligence and other Brands' private history remain outside this surface.