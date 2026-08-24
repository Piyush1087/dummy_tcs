# M1 Core Canonical Brand-State Read Contract

**Version:** 0.1  
**Status:** PROPOSED_FOR_SYSTEMS_ARCHITECT_FREEZE  
**Owner:** Backend / application-state boundary  
**Canonical architecture repository:** `Piyush1087/dummy_tcs`  
**Backend audit baseline:** `Piyush1087/creator-commerce-backend-v2-clone` `development@89d7dcc7e00c12b499850e2ff1c74364c4a83c19`

## 1. Purpose

This contract defines the smallest application/backend read boundary for M1 Core Brand state so Brand Preview and later Intelligence consumers stop reading candidate or legacy Identity values once canonical application state exists.

Permanent precedence is:

```text
canonical application/business state
>
temporary candidate/compatibility state
>
legacy Identity projection
```

The facade is a read boundary only. It is not a persistence store, does not create a second Brand record, does not mutate on conflict, and does not elevate semantic authority merely because a value is stored in `BrandProfile`.

M1 Core semantics:

```text
website_url
brand_name
brand_logo
industry
sub_industry
country
reporting_currency
instagram_handle
youtube_handle
tiktok_handle
```

Explicitly deferred from M1 Core:

```text
Facebook -> DEFERRED_SOCIAL_SCHEMA_EXPANSION
LinkedIn -> DEFERRED_SOCIAL_SCHEMA_EXPANSION
```

## 2. Backend baseline reverified

At contract design time, backend `development` remained exactly:

```text
89d7dcc7e00c12b499850e2ff1c74364c4a83c19
```

No newer backend commit materially changed the audited M1 fields.

## 3. Lifecycle modes

The facade MUST support two explicit lifecycle modes.

### PRE_PROFILE

`BrandProfile` does not yet exist or is not the applicable canonical lifecycle record. Reads may use `DiscoveryLead`, confirmed/provisional Gatekeeper state, and bounded pre-verification candidates according to the field rules below.

### POST_PROFILE

A `BrandProfile` exists and is the canonical application record for Brand-state fields it owns. Candidate and legacy values may be exposed as conflict/fallback context, but MUST NOT silently replace a present canonical value.

The caller SHOULD supply the lifecycle context it already knows. The facade MAY derive POST_PROFILE when a BrandProfile identifier exists, but must not require profile existence for pre-verification flows.

## 4. Proposed facade boundary

Conceptual backend interface:

```ts
type BrandStateSemantic =
  | "website_url"
  | "brand_name"
  | "brand_logo"
  | "industry"
  | "sub_industry"
  | "country"
  | "reporting_currency"
  | "instagram_handle"
  | "youtube_handle"
  | "tiktok_handle";

type BrandStateLifecycleMode = "PRE_PROFILE" | "POST_PROFILE";

type BrandStateRead<T> = {
  semantic: BrandStateSemantic;
  value: T | null;
  source: BrandStateSource;
  authority: BrandStateAuthority;
  fallback_used: boolean;
  conflict_detected: boolean;
  candidate_value?: T | null;
  provenance_status?: BrandStateProvenanceStatus;
  resolution_status?: CurrencyResolutionStatus;
};

type CanonicalBrandStateSnapshot = {
  lifecycle_mode: BrandStateLifecycleMode;
  website_url: BrandStateRead<string>;
  brand_name: BrandStateRead<string>;
  brand_logo: BrandStateRead<string>;
  industry: BrandStateRead<string>;
  sub_industry: BrandStateRead<string>;
  country: BrandStateRead<string>;
  reporting_currency: BrandStateRead<string>;
  instagram_handle: BrandStateRead<string>;
  youtube_handle: BrandStateRead<string>;
  tiktok_handle: BrandStateRead<string>;
};
```

Exact NestJS class and DTO names are implementation-stage decisions. The semantic shape is the contract.

## 5. Source vocabulary

`source` describes the immediate application-level origin selected by the facade. It is provider-neutral and is not Intelligence Evidence-source vocabulary.

```text
BRAND_PROFILE
DISCOVERY_LEAD
GATEKEEPER_CONFIRMED
GATEKEEPER_PROVISIONAL
PRE_VERIFICATION_CANDIDATE
AUTHORIZED_BRAND_UPDATE
LEGACY_IDENTITY_COMPATIBILITY
DATABASE_DEFAULT
UNKNOWN
```

Rules:

- `BRAND_PROFILE` means the selected read came from the canonical BrandProfile field; it does not by itself prove how that field was originally written.
- `AUTHORIZED_BRAND_UPDATE` may only be returned when the backend can actually prove that write origin.
- `DATABASE_DEFAULT` may only be returned when the backend can actually prove the value is unresolved default state.
- Under the current schema, currency write origin generally cannot be distinguished after the fact; do not fabricate either `AUTHORIZED_BRAND_UPDATE` or `DATABASE_DEFAULT`.
- No provider/model names belong in this vocabulary.

## 6. Authority vocabulary

Storage location and semantic authority are separate.

```text
APPLICATION_CANONICAL
BRAND_CONFIRMED
GATEKEEPER_CONFIRMED
PROVISIONAL
OBSERVED
UNVERIFIED_PROVENANCE
UNKNOWN
```

Meaning:

- `APPLICATION_CANONICAL`: application/business state has precedence for reads even if original write provenance is not represented.
- `BRAND_CONFIRMED`: explicitly authored/accepted/corrected by an authorized Brand actor where that fact is provable.
- `GATEKEEPER_CONFIRMED`: explicit supported Industry handoff after confirmation; protected from legacy classification precedence.
- `PROVISIONAL`: stored/usable context that has not crossed a Brand-confirmation boundary.
- `OBSERVED`: bounded candidate/observed value safe as context but not canonical truth.
- `UNVERIFIED_PROVENANCE`: value is stored in the designated canonical field but the current backend cannot prove a writer/confirmation lineage sufficient to elevate authority.
- `UNKNOWN`: no defensible stronger classification is available.

This application facade vocabulary does not replace the frozen shared Intelligence metadata contract. It is the narrower backend read-authority projection needed to avoid treating persistence location as semantic authority.

## 7. Provenance status

For fields whose storage is canonical but write lineage is incomplete:

```text
PROVEN
UNATTRIBUTED_CANONICAL_FIELD
LEGACY_MIGRATION_POSSIBLE
NOT_APPLICABLE
```

The facade SHOULD prefer conservative under-claiming over invented provenance.

## 8. Website/domain

### PRE_PROFILE

```text
DiscoveryLead.normalizedUrl
```

Selected source: `DISCOVERY_LEAD`  
Authority: `APPLICATION_CANONICAL` for the pre-profile lifecycle.

If no DiscoveryLead value exists, no legacy Identity fallback is required by M1 Core. Return null rather than reintroducing permanent Identity dependency.

### POST_PROFILE

```text
BrandProfile.domain
>
DiscoveryLead.normalizedUrl
```

Selected source: `BRAND_PROFILE`  
Authority: `APPLICATION_CANONICAL`.

If both values exist and differ:

```text
value = BrandProfile.domain
candidate_value = DiscoveryLead.normalizedUrl
conflict_detected = true
fallback_used = false
```

Read MUST NOT overwrite either record.

Legacy Identity fallback: **NOT REQUIRED** once lifecycle reads are available.

Persistence classification: `READ_FACADE_SUFFICIENT`.

## 9. Brand name

### PRE_PROFILE

```text
fresh grounded candidate
>
legacy Identity compatibility only if continuity is still required
```

Candidate authority: `OBSERVED`.

### POST_PROFILE

```text
BrandProfile.name
>
fresh grounded candidate
>
legacy Identity compatibility
```

`BrandProfile.name` always remains the returned value when present.

If candidate differs:

```text
value = BrandProfile.name
candidate_value = fresh candidate
conflict_detected = true
```

A Settings-edited canonical name MUST survive all later candidate observations.

Because current generic BrandProfile state does not prove whether a particular historical `name` was created by Preview or later Brand-edited, selected source SHOULD be `BRAND_PROFILE`; authority is `APPLICATION_CANONICAL` unless an explicit Brand edit event is provable.

Legacy fallback: temporary PRE_PROFILE-only continuity fallback if the accepted Preview flow still requires it and no current candidate exists. It MUST NOT participate once a BrandProfile name exists.

Persistence classification: `READ_FACADE_SUFFICIENT` for read precedence; richer writer provenance is optional future metadata, not required to protect the canonical value.

## 10. Brand logo

No richer canonical Brand visual-asset model is introduced in M1.

### PRE_PROFILE

```text
pre-verification observed logo candidate
>
legacy Identity compatibility logo
```

Candidate authority: `OBSERVED`.

### POST_PROFILE

```text
BrandProfile.logoUrl when non-null
>
pre-verification observed logo candidate
>
legacy Identity compatibility logo
```

When `BrandProfile.logoUrl` is non-null it wins. Candidate disagreement is a non-mutating conflict.

When `BrandProfile.logoUrl` is null, candidate use is allowed and does not create canonical persistence. Missing logo remains a valid result and must not affect Brand Preview readiness.

Legacy fallback: allowed only when canonical logo is null, current candidate is unavailable, and an accepted consumer still requires continuity.

Persistence classification: `READ_FACADE_SUFFICIENT` for M1 interim semantics.

## 11. Industry

Production precedence after the confirmation boundary is:

```text
confirmed Gatekeeper Industry represented in canonical application state
```

Acceptable post-confirmation storage reads:

```text
BrandProfile.industry
DiscoveryLead.industry
```

provided the facade is operating from the confirmed handoff state.

### PRE_PROFILE

After explicit Gatekeeper confirmation:

- selected source: `GATEKEEPER_CONFIRMED`
- authority: `GATEKEEPER_CONFIRMED`

Before confirmation, provisional classification is not returned as confirmed Industry.

### POST_PROFILE

`BrandProfile.industry` is preferred for the Brand record. `DiscoveryLead.industry` is a confirmation cross-check.

If historical values disagree:

```text
value = BrandProfile.industry
candidate_value = DiscoveryLead.industry
conflict_detected = true
```

The facade does not auto-reconcile.

`industry_classification.gatekeeper` legacy Identity output is explicitly forbidden from production read precedence in both lifecycle modes.

Legacy Identity fallback: **FORBIDDEN**.

Persistence classification: `READ_FACADE_SUFFICIENT` for accepted current flow; historical mismatch remediation is separate migration work.

## 12. Sub-industry

Critical invariant:

```text
BrandProfile.subIndustry storage
!=
BRAND_CONFIRMED authority
```

Current accepted source is Gatekeeper `provisional_sub_industry`.

### PRE_PROFILE

When present:

- source: `GATEKEEPER_PROVISIONAL`
- authority: `PROVISIONAL`
- usable as context only.

### POST_PROFILE

A non-null `BrandProfile.subIndustry` MAY be returned as the current application value, but authority MUST remain `PROVISIONAL` under M1 unless a future explicit confirmation contract exists.

For historical rows whose write lineage is not provable, the facade still MUST NOT elevate authority. Conservative treatment is `PROVISIONAL` with `provenance_status = UNATTRIBUTED_CANONICAL_FIELD` where appropriate.

No confirmation flow is invented. No Brand editability is implied.

Legacy fallback: allowed only as compatibility context when both current stored/provisional application values are absent and continuity is required. Authority remains `PROVISIONAL` or `UNKNOWN`, never Brand-confirmed.

Persistence classification: `READ_FACADE_PLUS_PROVENANCE_GAP`.

Reason: the facade can safely prevent authority elevation now, but persistence does not encode durable origin/confirmation lineage if future writers are introduced.

## 13. Country

### PRE_PROFILE

No canonical country is required. If current application flow does not maintain a bounded country candidate, return null.

Forbidden canonical inference:

```text
currency -> country
Industry -> country
language -> country
website TLD -> country
```

### POST_PROFILE

```text
BrandProfile.countryCode
```

may legitimately be null.

- source when populated: `BRAND_PROFILE`
- authority: `APPLICATION_CANONICAL`
- null is valid and does not trigger inference.

If a real candidate exists and disagrees, canonical country wins and conflict is reported; candidate does not overwrite.

Legacy fallback: not required for canonical country. Prefer null to invented/legacy inference unless a specifically accepted consumer continuity requirement is documented later.

Persistence classification: `READ_FACADE_SUFFICIENT`.

## 14. Reporting / collaboration currency

Current storage:

```text
BrandProfile.currencyCode
```

can reflect either an authorized user update or an unresolved database default (`USD`). Current persisted state does not reliably distinguish those histories for an arbitrary existing row.

Therefore the facade MUST separate `value` from `resolution_status`.

```text
type CurrencyResolutionStatus =
  | "RESOLVED"
  | "USER_SELECTED"
  | "DATABASE_DEFAULT_UNRESOLVED"
  | "UNKNOWN_PROVENANCE";
```

### PRE_PROFILE

Until a future application/commercial resolver exists, return a currency only when a current application path explicitly supplies one with defensible provenance. Otherwise return null / `UNKNOWN_PROVENANCE` rather than running the legacy country-to-currency Identity rule.

### POST_PROFILE

The facade may return `BrandProfile.currencyCode` as the stored application value, but MUST NOT claim that non-null means resolved commercial policy.

Under the current schema, if the facade cannot prove whether `USD` came from the DB default or an explicit user action:

```text
value = BrandProfile.currencyCode
authority = UNVERIFIED_PROVENANCE
resolution_status = UNKNOWN_PROVENANCE
source = BRAND_PROFILE
```

It MUST NOT guess `DATABASE_DEFAULT_UNRESOLVED` merely because the value is `USD`, because an authorized user can explicitly select USD too.

If a future persisted write-origin marker proves an authorized selection, the same contract can emit `USER_SELECTED`. If a future marker proves untouched default state, it can emit `DATABASE_DEFAULT_UNRESOLVED`.

Legacy deterministic rule `country == IN ? INR : USD` is compatibility-only and must not be treated as canonical resolution.

Legacy fallback: temporary only if an accepted consumer cannot operate without currency; if used, authority must remain non-canonical/unknown and telemetry is mandatory. Preferred M1 behavior is no silent legacy resolution.

Persistence classification: `FUTURE_PERSISTENCE_RECONCILIATION_REQUIRED`.

Reason: the read facade alone cannot reliably distinguish explicit USD from default USD for historical/current rows. A later provenance field/event/metadata mechanism is required before the backend can truthfully emit resolved-vs-default history for every record.

No currency resolver or persistence change is authorized by this contract.

## 15. Instagram

Canonical storage:

```text
BrandProfile.igHandle
```

Existing authenticated OAuth/explicit identity-conflict handling is stronger than scraped/observed candidate values.

### PRE_PROFILE

```text
pre-verification candidate
>
legacy Identity compatibility
```

Authority: `OBSERVED` until authenticated/authorized canonical state exists.

### POST_PROFILE

```text
authenticated/authorized BrandProfile.igHandle
>
pre-verification candidate
>
legacy Identity compatibility
```

When `BrandProfile.igHandle` is non-null it wins. A differing candidate sets conflict state but cannot overwrite it.

Existing explicit mismatch resolution remains outside the read facade. The facade never performs `OVERWRITE_HANDLE`; it only reads the resulting canonical state.

Where the backend can prove authenticated/authorized lineage, authority may be `BRAND_CONFIRMED`; otherwise source remains `BRAND_PROFILE` and authority may conservatively be `APPLICATION_CANONICAL`.

Legacy fallback: allowed only when canonical handle and current candidate are absent and consumer continuity still requires it.

Persistence classification: `READ_FACADE_SUFFICIENT` for precedence, because the active OAuth path already provides an authorized mutation boundary.

## 16. YouTube

Canonical storage field exists:

```text
BrandProfile.ytHandle
```

but the M1 audit did not establish a current active canonical writer.

Therefore a non-null field MUST NOT be presented as verified/Brand-confirmed merely because it lives in BrandProfile.

### POST_PROFILE

When non-null:

```text
value = BrandProfile.ytHandle
source = BRAND_PROFILE
authority = UNVERIFIED_PROVENANCE
provenance_status = UNATTRIBUTED_CANONICAL_FIELD
```

This preserves application-field precedence without fabricating confirmation history.

If a current candidate exists and differs, return the BrandProfile value and report conflict.

### PRE_PROFILE / missing canonical value

```text
current candidate
>
legacy Identity compatibility
```

Legacy fallback is temporary continuity only and must be distinguishable.

Persistence classification: `READ_FACADE_PLUS_PROVENANCE_GAP`.

Future writer/provenance reconciliation is needed before authority can be elevated beyond `UNVERIFIED_PROVENANCE`.

## 17. TikTok

Same contract as YouTube for:

```text
BrandProfile.tiktokHandle
```

A non-null BrandProfile value has application-field precedence but does not prove an active canonical writer or Brand confirmation.

POST_PROFILE classification:

```text
source = BRAND_PROFILE
authority = UNVERIFIED_PROVENANCE
provenance_status = UNATTRIBUTED_CANONICAL_FIELD
```

Candidate disagreement produces conflict only.

Legacy fallback: temporary continuity only when canonical and current candidate are absent.

Persistence classification: `READ_FACADE_PLUS_PROVENANCE_GAP`.

## 18. Facebook / LinkedIn

Explicitly outside M1 Core:

```text
Facebook -> DEFERRED_SOCIAL_SCHEMA_EXPANSION
LinkedIn -> DEFERRED_SOCIAL_SCHEMA_EXPANSION
```

No schema field, migration, canonical writer, or facade semantic is introduced here. Existing Identity values may remain compatibility-only until a later separately authorized expansion.

## 19. Conflict contract

Reads are side-effect free.

For any semantic with a present canonical value and a differing candidate/compatibility value:

```text
return canonical value
preserve candidate_value when useful
conflict_detected = true
fallback_used = false
```

If no canonical value exists and a candidate is selected:

```text
value = candidate
fallback_used = true
conflict_detected = false unless two non-canonical sources disagree materially
```

Legacy values never overwrite canonical fields and never trigger mutation from this facade.

Normalization before conflict comparison is semantic-specific and implementation-stage work. It may normalize harmless representational differences (for example `@handle` vs `handle`, hostname casing, URL trailing slash) but must not erase genuine semantic disagreement.

## 20. Legacy fallback contract

A legacy Identity fallback is allowed only when all are true:

```text
canonical source absent
+
current candidate/application source unavailable or insufficient
+
accepted consumer still requires continuity
```

Mandatory behavior for every legacy fallback:

- `source = LEGACY_IDENTITY_COMPATIBILITY`
- `fallback_used = true`
- `legacy_fallback_used = true` in telemetry
- never mutate canonical state
- never elevate authority based on the legacy projection
- define and measure retirement criteria.

Field disposition:

| Semantic | Legacy fallback in M1 Core |
|---|---|
| website_url | Not required |
| brand_name | Temporary PRE_PROFILE continuity only |
| brand_logo | Temporary if canonical null and candidate unavailable |
| industry | Forbidden |
| sub_industry | Temporary compatibility context only |
| country | Normally not required; prefer null |
| reporting_currency | Avoid as policy resolution; temporary only if consumer continuity requires |
| instagram_handle | Temporary when canonical + candidate absent |
| youtube_handle | Temporary when canonical + candidate absent |
| tiktok_handle | Temporary when canonical + candidate absent |

## 21. Brand Preview consumer contract

Brand Preview semantics remain frozen. Only its anchor read source changes.

Expected facade consumption:

```text
website_url
  PRE_PROFILE -> DiscoveryLead.normalizedUrl
  POST_PROFILE -> BrandProfile.domain

brand_name
  PRE_PROFILE -> grounded candidate
  POST_PROFILE -> BrandProfile.name; candidate only as conflict context

industry
  -> confirmed Gatekeeper canonical state only

brand_logo
  PRE_PROFILE -> observed candidate allowed
  POST_PROFILE -> BrandProfile.logoUrl when present; candidate fallback when null
```

Preview must remain valid when logo is null.

This contract does not change:

```text
PREVIEW_READY
PARTIAL density
retry semantics
verification handoff
```

It explicitly removes the need for a legacy Identity checkpoint in Preview's production anchor precedence.

## 22. Persistence-gap classification

| Semantic | Classification | Rationale |
|---|---|---|
| website_url | `READ_FACADE_SUFFICIENT` | lifecycle sources and precedence are explicit |
| brand_name | `READ_FACADE_SUFFICIENT` | canonical post-profile value can be protected now |
| brand_logo | `READ_FACADE_SUFFICIENT` | interim logoUrl rule is sufficient for M1 |
| industry | `READ_FACADE_SUFFICIENT` | confirmation boundary is explicit |
| sub_industry | `READ_FACADE_PLUS_PROVENANCE_GAP` | safe to keep provisional; storage does not future-proof origin lineage |
| country | `READ_FACADE_SUFFICIENT` | null is valid; no inference needed |
| reporting_currency | `FUTURE_PERSISTENCE_RECONCILIATION_REQUIRED` | cannot distinguish selected USD from default USD reliably |
| instagram_handle | `READ_FACADE_SUFFICIENT` | active authenticated mutation/conflict boundary exists |
| youtube_handle | `READ_FACADE_PLUS_PROVENANCE_GAP` | field exists, active writer provenance unclear |
| tiktok_handle | `READ_FACADE_PLUS_PROVENANCE_GAP` | field exists, active writer provenance unclear |

`FUTURE_PERSISTENCE_RECONCILIATION_REQUIRED` does not block defining or using the read facade. It blocks claiming provenance/resolution that the current persistence cannot prove.

## 23. Telemetry contract

Minimum per-semantic migration telemetry:

```text
semantic
lifecycle_mode
selected_source
authority
fallback_used
conflict_detected
candidate_present
legacy_fallback_used
provenance_status (when applicable)
resolution_status (currency only, when applicable)
```

Telemetry SHOULD also carry a non-sensitive correlation/execution/request identifier already permitted by backend observability conventions.

Do not log raw URLs, names, social handles, or other field values merely to measure facade migration. Conflict telemetry should be boolean/categorical unless existing backend telemetry policy explicitly permits hashed/redacted identifiers.

## 24. Retirement conditions

No fallback is removed by this contract.

A field's legacy fallback becomes eligible for removal only after all are true:

```text
canonical/application source coverage is sufficient
+
all active consumers use the facade
+
legacy fallback telemetry is zero for an accepted observation window
+
conflict/migration audit is understood
+
regression and migration tests pass
```

For fields with a provenance gap, fallback retirement does not automatically mean authority elevation. YouTube/TikTok can stop using legacy fallback while their BrandProfile value remains `UNVERIFIED_PROVENANCE` until writer lineage is established.

## 25. Test contract

### Website/domain

- PRE_PROFILE DiscoveryLead only.
- POST_PROFILE BrandProfile only.
- both equal.
- mismatch: BrandProfile wins; conflict true; no write.
- no legacy Identity read after lifecycle sources available.

### Brand name

- candidate only PRE_PROFILE.
- canonical only POST_PROFILE.
- canonical + equal candidate.
- canonical + differing candidate: canonical wins, candidate exposed, conflict true.
- Settings-edited canonical survives a later Preview candidate.
- legacy fallback cannot replace BrandProfile name.

### Logo

- candidate only.
- canonical only.
- canonical/candidate mismatch.
- POST_PROFILE canonical null -> candidate allowed.
- null canonical + null candidate -> null is valid.
- missing logo does not affect Preview readiness.

### Industry

- confirmed accepted classification.
- confirmed supported override.
- historical DiscoveryLead/BrandProfile mismatch: conflict, no mutation.
- legacy classifier absent from precedence.
- provisional pre-confirmation classification is not emitted as confirmed Industry.

### Sub-industry

- provisional Gatekeeper value before profile.
- provisional value stored in BrandProfile.
- stored value authority remains `PROVISIONAL`.
- never returned as `BRAND_CONFIRMED`.
- historical unattributed row is not silently elevated.

### Country

- null BrandProfile country returns null.
- populated canonical country.
- canonical/candidate disagreement: canonical wins.
- no inference from currency.
- no inference from Industry/language/TLD.

### Currency

- DB-created USD with no provable write origin -> `UNKNOWN_PROVENANCE`, not resolved.
- explicitly user-selected USD only becomes `USER_SELECTED` when proof is available; current storage alone is insufficient.
- explicitly selected INR when proof is available.
- non-null stored currency does not imply policy resolution.
- no use of legacy country-to-currency rule as canonical authority.
- facade remains compatible with future provenance metadata without response-shape break.

### Instagram

- canonical OAuth handle only.
- canonical + equal candidate.
- canonical + mismatching candidate: canonical wins/conflict true.
- explicit overwrite occurs outside facade; subsequent read returns updated canonical value.
- scraped candidate cannot overwrite authenticated canonical handle.
- null canonical permits candidate/fallback behavior.

### YouTube / TikTok

For each:

- null canonical field.
- populated BrandProfile field.
- populated field returns `UNVERIFIED_PROVENANCE` when writer lineage is unknown.
- candidate disagreement does not replace BrandProfile value.
- legacy fallback only when canonical + current candidate are absent.
- legacy fallback never elevates authority.

### Brand Preview regression

- NORMAL Preview.
- PARTIAL Preview.
- logo absent.
- canonical/candidate brand-name mismatch.
- canonical/candidate logo mismatch.
- confirmed Industry handoff.
- retry flow.
- verification handoff unchanged.
- no production legacy Identity checkpoint.

## 26. Implementation-stage constraints

When implementation is separately authorized:

- one application/backend read service/facade SHOULD own these precedence rules;
- consumers SHOULD not reimplement precedence independently;
- facade should batch/load lifecycle records rather than issue one query per semantic where practical;
- no facade-owned database/table is created;
- reads must remain side-effect free;
- conflict detection is observational only;
- exact DTO/class names may follow NestJS repository conventions without changing this semantic contract.

## 27. Explicit non-goals

This contract does not authorize:

```text
backend implementation
Prisma/schema changes
migrations
Brand Preview changes
Gatekeeper changes
Identity changes
Facebook/LinkedIn expansion
visual asset redesign
currency resolver implementation
data migration/backfill
legacy fallback removal
```

## 28. Readiness conclusion

The narrowed M1 Core can proceed to a freeze review as a backend contract.

The facade is sufficient to establish truthful read precedence now. The known provenance gaps are explicitly represented rather than hidden:

- Sub-industry remains `PROVISIONAL`.
- Currency remains unresolved/unknown where current persistence cannot distinguish default from explicit selection.
- YouTube and TikTok BrandProfile values retain application-field precedence but remain `UNVERIFIED_PROVENANCE` until writer lineage is established.

These are bounded future persistence/provenance reconciliations, not reasons to preserve permanent legacy Identity ownership.

**Proposed verdict:** `M1_CORE_FACADE_CONTRACT_READY_FOR_FREEZE`
