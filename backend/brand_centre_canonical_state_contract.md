# Brand Centre Canonical State Contract

**Status:** FROZEN  
**Version:** 1.0  
**Owner:** Systems Architecture / canonical application state  
**Scope:** Brand Centre Brand consumer unblock  
**Backend reconciliation baseline:** `Piyush1087/creator-commerce-backend-v2-clone development@ab798c563e8ee3bfb152941d076ded6553cf6944`

## 1. Decision

This contract freezes the smallest canonical application/business-state boundary required to unblock the Brand Centre Brand consumer.

It does not redefine Brand Intelligence objects, Brand Centre Product IA, frontend readiness/freshness vocabulary, UX architecture, or Stitch artifacts.

Two permanent separations are authoritative:

```text
observed/scanned visual evidence != approved canonical Brand visual state

derived visual_style_profile != approved canonical Brand visual state

observed/discovered Location fields != protected Brand-confirmed Location fields

Location identity != extraction-run identity
```

Visual Identity Intelligence does not own canonical visual asset CRUD. Serviceability Intelligence does not own canonical Location CRUD.

---

# Part A — Canonical Brand Visual State

## 2. Current backend compatibility surface

The existing backend contains:

- `BrandProfile.logoUrl`;
- `BrandProfile.visualIdentity` JSON;
- scan/deep-scan code that can populate those fields from observed/scanned material.

These fields are insufficient to establish approved/current palette, approved/current typography, durable alternate-mark identity, or approved reference imagery.

`BrandProfile.visualIdentity` remains legacy/observed compatibility state. It must not be treated as canonical approval authority.

`BrandProfile.logoUrl` remains a legacy compatibility field. An observed scan result must not establish or replace canonical primary-logo authority.

## 3. Canonical visual aggregate

The backend shall expose one canonical visual-state aggregate per Brand.

Conceptually:

```text
BrandVisualState
├── primaryLogoAssetId?       -> BrandVisualAsset
├── alternateMarks[]          -> BrandVisualAsset
├── approvedPalette[]         -> BrandVisualColor
├── approvedTypography[]      -> BrandVisualTypography
└── approvedReferenceImagery[]-> BrandVisualAsset
```

The exact Prisma table names may follow repository conventions, but the semantic split above is mandatory.

## 4. Durable visual identity

Every canonical visual asset/item has an immutable durable ID independent of URL, label, array order, file name, colour value, font name, or scan execution.

Required identities:

- `visual_asset_id` for logos, alternate marks, and approved reference images;
- `visual_color_id` for approved palette entries;
- `visual_typography_id` for approved typography entries;
- one durable Brand visual-state aggregate identity or a one-to-one Brand key.

Changing a value or display label does not require a new ID when the Brand action is an edit of the same materially continuous canonical item.

A materially new asset/item receives a new ID.

No lexical/fuzzy/numeric identity threshold is authoritative.

## 5. Primary logo semantics

A Brand has zero or one current canonical primary logo.

The primary logo is represented by a canonical reference to a durable visual asset, not by interpreting the latest scanned URL as approved truth.

Changing the primary-logo pointer does not by itself delete the previous asset. Removal/deactivation of the previous asset is a separate authorized application action.

## 6. Alternate marks

Alternate marks are canonical visual assets with their own stable IDs.

Array order is presentation metadata only and is not identity.

Scan-discovered logo variants are candidates/observations until an authorized canonical action accepts them.

## 7. Approved palette

Approved palette entries are durable canonical items.

Each entry has at minimum:

- durable item ID;
- normalized colour value;
- optional label/usage metadata;
- lifecycle state;
- authority/source metadata;
- revision timestamps/version information.

A frequently observed website colour is not automatically an approved palette colour.

## 8. Approved typography

Approved typography entries are durable canonical items.

Each entry has at minimum:

- durable item ID;
- canonical family/name value;
- optional usage-role metadata;
- lifecycle state;
- authority/source metadata;
- revision timestamps/version information.

An observed typeface is not automatically an approved Brand font.

## 9. Approved reference imagery

Approved reference imagery consists of canonical visual assets with durable IDs and explicit canonical authority.

Scan-discovered imagery may be Evidence/candidate context but is not automatically approved reference imagery.

## 10. Visual authority and source

Canonical visual state accepts only explicit application authority.

Allowed authority classes for canonical current state:

- `BRAND_CONFIRMED` — explicitly approved/selected/edited by an authorized Brand actor;
- `APPLICATION_CANONICAL` — established by an already-authorized application workflow with explicit canonical semantics.

Observed/scanned values remain outside canonical approval state.

Canonical records should preserve source/provenance sufficient to distinguish, at minimum:

- explicit Brand upload/selection/edit;
- explicit onboarding/Brand Centre confirmation where already authorized;
- verified compatibility migration, if any;
- application-created canonical state.

Generic historical `isUserEdited` flags or scan-written JSON are not sufficient by themselves to prove canonical visual approval.

## 11. Scan candidate -> canonical boundary

A scan may:

- observe logo candidates;
- observe colour/font/imagery patterns;
- provide candidate/reconciliation context;
- refresh observed Evidence.

A scan must not:

- set the canonical primary logo merely because a logo URL was observed;
- replace an approved primary logo;
- approve palette entries;
- approve typography entries;
- approve alternate marks;
- approve reference imagery.

Promotion from observed candidate to canonical state requires an authorized application/Brand action.

## 12. Brand confirmation/edit boundary

This contract authorizes no new Product behavior beyond the existing principle that explicit authorized Brand/application actions may establish or edit canonical Brand state.

Backend implementation may expose canonical reads immediately.

Mutation endpoints must map to an already-authorized Brand Centre/onboarding action. If a specific palette/font/asset mutation has no frozen Product permission yet, leave that mutation unavailable rather than inventing approval behavior.

This does not block the canonical read model.

## 13. Visual compatibility migration

For existing Brands:

1. Do not bulk-promote `BrandProfile.visualIdentity` into approved canonical state.
2. Do not treat scan-populated `BrandProfile.logoUrl` as approved primary-logo truth without explicit authoritative provenance.
3. Preserve legacy fields for compatibility while consumers migrate.
4. When a canonical primary logo is established, `BrandProfile.logoUrl` may be maintained as a one-way compatibility mirror from canonical state until legacy consumers retire.
5. Legacy `visualIdentity` remains compatibility/candidate context and must not overwrite canonical approved state.
6. Existing Brands with no provably approved visual state legitimately project canonical visual fields as absent/not-ready, while separately exposing candidate/legacy context only where the consumer contract permits it.

No destructive migration is authorized.

---

# Part B — Canonical Location Identity

## 14. Current backend compatibility surface

The existing `Location` row already has a UUID `id` and Brand ownership, but it lacks explicit lifecycle, authority/protection, source/reconciliation metadata, and safe rescan continuity semantics.

The current durable row ID shall become the canonical `location_id`; it must not be replaced merely because extraction reruns.

## 15. Stable Location identity invariant

Authoritative invariant:

```text
same materially continuous business Location
-> same location_id across refresh/rescan
```

`location_id` is an opaque immutable application identity. It is not recomputed from address text, coordinates, name, array position, or scan execution.

Address/name/coordinates are mutable attributes, not the durable primary identity.

## 16. Reconciliation hierarchy

A discovered Location candidate is reconciled deterministically in this order:

1. explicit existing canonical `location_id` reference, when available;
2. persisted durable external/source Location identifier for the same Brand, when available;
3. exact match against a persisted normalized Location identity alias/fingerprint derived from sufficiently complete stable business-location signals, such as normalized full postal address and known source identifiers;
4. otherwise, no automatic merge.

No fuzzy numeric similarity threshold is canonical identity authority.

If a candidate could match multiple canonical Locations, it is a reconciliation conflict and must not mutate either row automatically.

If no deterministic match exists:

- a sufficiently identified discovered business Location may create a new **provisional** canonical Location with a new durable `location_id`;
- an insufficient/ambiguous observation remains candidate/Evidence context and must not overwrite an existing Location.

## 17. Location canonical fields and authority

At minimum the current backend fields remain supported:

- name;
- address;
- city;
- postal/zip;
- latitude/longitude;
- contact details.

Backend reconciliation must additionally preserve enough metadata to express:

- durable identity/reconciliation aliases or fingerprint(s);
- lifecycle (`ACTIVE` / `INACTIVE` at minimum);
- current observation/freshness state;
- field or row authority sufficient to protect Brand-confirmed values from scan overwrite;
- source/provenance;
- `lastObservedAt` or equivalent observation revision.

Exact storage shape may be normalized or structured metadata, but these semantics are mandatory.

## 18. Update versus new Location

When a candidate deterministically matches an existing `location_id`:

- retain the existing ID;
- update only fields whose authority permits observed refresh;
- preserve Brand-confirmed/protected fields;
- update observation/source metadata;
- preserve all Offering/Serviceability/downstream references to the same ID.

When no deterministic match exists and the candidate is sufficiently identified:

- create a new provisional Location with a new ID;
- do not reuse another Location's ID;
- do not rewrite an existing Location merely because names are similar.

## 19. Brand-confirmed field preservation

An ordinary scan/rescan must never silently replace a Brand-confirmed Location field.

New conflicting observed values may be retained as candidate/discrepancy/reconciliation context but may not overwrite protected canonical values.

The exact UI for resolving a discrepancy is outside this contract.

## 20. Inactive/removed behavior

Scan omission alone is not hard-delete authority.

A rescan must not delete and recreate Location rows.

When a previously observed Location is absent from a later scan:

- preserve the Location row and ID;
- mark observation/freshness as potentially stale where supported;
- preserve all relationships;
- do not infer permanent closure/removal from one omission.

`INACTIVE` is an application lifecycle state. It may be set by an authorized Brand/application action or by a separately frozen deterministic policy. No such automatic rescan-deactivation policy is created by this contract.

Hard deletion is not part of ordinary scan reconciliation.

## 21. Relationship preservation

Existing and future references must remain stable across refresh, including:

- Offering -> Location references;
- Serviceability basis/references;
- Brand Centre consumer references;
- later Campaign geography references;
- Intelligence dependency/invalidation references.

A rescan must not require downstream references to be rewritten solely because extraction reran.

## 22. Location compatibility migration

For existing `Location` rows:

1. Preserve every existing `Location.id` exactly.
2. Do not merge duplicate-looking rows automatically during migration.
3. Initialize lifecycle as `ACTIVE` unless existing authoritative state says otherwise.
4. Initialize authority/provenance conservatively as provisional/unverified where explicit Brand confirmation cannot be proven.
5. Seed observation timestamps from the best existing durable timestamp (`updatedAt`/`createdAt`) where required.
6. Generate reconciliation aliases/fingerprints from existing fields only as matching aids; they do not become the canonical identity.
7. Preserve existing `Offering.locationIds` values and other references unchanged.
8. If existing rows collide on a generated reconciliation fingerprint, preserve both IDs and record/flag reconciliation ambiguity; do not merge.

No delete/recreate migration is authorized.

## 23. Legacy Surface/deep-scan correction

Any scan path that currently performs destructive Location replacement must be reconciled to the rules above.

The permitted shape is:

```text
scan candidate
-> deterministic Location reconciliation
   -> update existing stable location_id
   OR create new provisional location_id
   OR preserve unresolved candidate
-> stale observation marking for unmatched prior rows
```

The forbidden shape is:

```text
delete Brand Locations
-> recreate rows from latest extraction
```

---

# Part C — Brand Centre consumer unblock

## 24. W1.0 current-read registration

The frontend audit identified missing current-read registrations for six already-frozen Brand Intelligence Objects.

This is an implementation gap, not a semantic-authority gap.

After the canonical visual and Location state boundaries above are implemented, the Backend worker is authorized to add the missing W1.0 current-read registrations using the existing current-projection architecture.

Do not send those Objects back to Intelligence for redesign unless an actual representation conflict is found.

## 25. Backend consumer implementation sequence

Authorized sequence:

```text
1. reconcile persistence/schema for canonical visual state
2. reconcile stable Location identity/lifecycle and remove destructive rescan replacement
3. implement canonical visual-state read projection
4. implement Location read/reconciliation projection
5. register the six missing frozen W1.0 current-read Objects
6. implement authenticated Brand consumer route
7. project candidate/current/protected/readiness/freshness states without fabrication
8. run PostgreSQL/runtime/ownership regressions
```

## 26. Frontend gate

Brand Centre frontend Stage 2 remains paused until Backend returns:

```text
READY_FOR_BRAND_CENTRE_BRAND_FRONTEND_RECONCILIATION
```

Frontend must not invent temporary canonical visual or Location contracts while this gate is closed.

## 27. Product questions

For the canonical read-state and identity model: **NONE**.

A Product decision is required only if implementation needs to introduce a user mutation/approval action that is not already authorized by existing Brand Centre/onboarding Product authority.

Absence of such a mutation permission does not block implementing canonical reads, stable identities, compatibility migration, or scan/canonical separation.

## 28. Freeze verdict

```text
BRAND_CENTRE_CANONICAL_STATE_BLOCKER_REVIEW

status: READY_TO_FREEZE

visual_state:
  backend_implementation_readiness: READY

locations:
  backend_implementation_readiness: READY

w1_current_read_registration:
  semantic_authority_gap: NO

next_gate: READY_FOR_BACKEND_CONSUMER_IMPLEMENTATION
```
