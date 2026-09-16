# Instagram Intelligence C3-R0 — Shared Evidence Model-Derivation Provenance

**Execution status:** `EVIDENCE_READY_FOR_CHILD_SA_REVIEW`  
**Program acceptance:** not self-declared  
**Primary runs:** 1  
**Correction cycles:** 1

## Exact starting authority

Normal fetch/prune, local/fetched equality, clean-worktree, and ancestry checks
passed before mutation.

| Repository | Starting SHA | Starting tree |
|---|---|---|
| backend | `bb8acafb63b74419a7188c52fe1a154b44904c73` | `f9c3e2e6cffb2c749f9911ebea093edd79ba428e` |
| frontend | `bc8523183ae4892c0b538474d2f5444a1ea356d8` | `7f3016c01500083ae2f536ebd0540219c9228dd7` |
| authority | `c89a717ef356142d48236213481dd496b14a9234` | `c0ef4bf53c8170bcb59527fff78d20a33b54f737` |
| immutable B4 authority ancestor | `c98b4edfa64b6711d290947ea61236573e029dd2` | `15be1c29422b0079acce3c9220e0413eab750df8` |

The exact starting identities matched their fetched remotes, every worktree was
clean, predecessor ancestry was intact, and no overlapping user work existed.

## Bounded recovery design

The Evidence domain vocabulary now contains exactly these capture-method
classes: `DIRECT_FETCH`, `RENDERED_FETCH`, `PROVIDER_MEDIATED_FETCH`,
`DETERMINISTIC_DERIVATION`, and `MODEL_DERIVATION`.

Migration 89 adds two fields to `DataExtractionEvidenceItem`:

- nullable enum `captureMethodClass`, allowing legacy rows to retain the bounded
  established inference path; and
- ordered `String[] parentEvidenceRefs` with an empty-array default.

New writes persist the explicit method and a sorted, deduplicated parent set.
Before insertion, every parent is required to exist, belong to the same Brand,
and reference a completed Capture with non-null `capturedAt`. Missing,
self-referencing, cross-Brand, running-Capture, and failed-Capture lineage fails
before a child row is admitted. Capture method and canonical parents participate
in exact idempotency comparison.

Hydration uses explicit persisted provenance when present. Legacy-null rows keep
the established capability/provider fallback and accept only the existing
`supporting_evidence_refs` or `supportingEvidenceRefs` compatibility keys.
Migration 89 safely backfills the exact accepted
`instagram-c2-deterministic-foundations-v1` marker to
`DETERMINISTIC_DERIVATION` and canonical parent refs. It does not infer
`MODEL_DERIVATION` from any capability name.

Parent Capture refs are derived from validated parent Evidence when parents
exist. Parentless Evidence retains its established own-Capture projection for
website compatibility. Same-capability ObservationSupport repository checks
and database foreign keys are unchanged. Cross-capability lineage is represented
only as Observation → target-capability Evidence → parent Evidence.

## Migration and PostgreSQL proof

Migration 89 is additive: one enum, two columns, and a narrow exact-C2 backfill.
It contains no destructive table operation, capability change, Resource/Capture
redesign, ObservationSupport change, or migration-history rewrite.

- Migration count: exactly 89.
- Migration 88 SHA-256 remained
  `d02b75e50f883150c9d14908c82ef10d9b0de4c2b464168567634dd0157009e4`.
- Migration 89 SHA-256 is
  `12b5a234d322235199dc8ad1173fc4835517ed0a3ed5a6ff910aa48165f118a8`.
- Clean PostgreSQL 17 application of all 89 migrations: PASS; status current.
- Separate 88→89 upgrade: PASS. Representative website and accepted Instagram
  predecessor data held 2 Resources, 2 completed Captures, and 5 Evidence rows
  before and after. Four ordinary legacy rows remained nullable; the exact C2
  row backfilled to `DETERMINISTIC_DERIVATION` with its source parent intact.

## Persistence fixture and regressions

The deterministic PostgreSQL R0 fixture proved all five explicit method classes,
legacy-null fallback, both bounded legacy parent-key spellings, C2 deterministic
round-trip, fresh-read `MODEL_DERIVATION`, canonical parent/capture refs, stable
replay, and idempotency rejection for changed method or parents.

Its cross-capability fixture held 3 Evidence rows (source, C2, target), 1 target
Semantic Observation, and 1 same-capability support row. Replay preserved those
counts and hydrated provenance. Direct attachment of source Evidence to the
target capability was rejected. Missing, self, cross-Brand, running, and failed
lineage admissions were atomic. Settings deletion removed the target Brand's 2
Instagram Evidence rows while preserving its website Evidence and another
Brand's Instagram Evidence.

Focused Evidence/website/C2/B3A/B3B/Settings tests produced 90 passes before the
single compatibility correction. The affected final-state Wave 2 and R0 suites
were rerun with 16/16 passes. The correction retained the established own-Capture
projection for parentless website Evidence; it did not weaken parent validation.

## Validation and publication

Environment: Windows 11 x86_64, Node `v24.19.0`, npm `11.17.0`, Docker Engine
`29.7.2`, PostgreSQL `17` Alpine.

- `npm ci`: PASS, 813 packages from the immutable lockfile. Package and lockfile
  stayed unchanged. The existing audit reported 52 advisories; R0 added no
  dependency.
- Prisma generate/validate, scoped ESLint, production build, and
  `git diff --check`: PASS.
- Scoped secret/forbidden-artifact scan: PASS. No `.env`, credential, token,
  signed locator, raw media, database volume, build output, or runtime log was
  tracked.
- Backend commit `896a8d23e9956cf35faf627dc6738d358995981f`, tree
  `5fc55603a7fba155372290d1bbb44c18628000ac`, was normally pushed and fetched
  back with exact SHA/tree equality and accepted C2 ancestry.
- Frontend remained unchanged and clean at
  `bc8523183ae4892c0b538474d2f5444a1ea356d8` /
  `7f3016c01500083ae2f536ebd0540219c9228dd7`.

No C3 semantic processor, likely-collab logic, prompt, model candidate, live
Graph/model/provider call, new capability, canonical-domain mutation, frontend,
API, C4, C1, D1–D3, or Wave E/F work occurred. C3 remains paused pending R0
acceptance. The final authority commit cannot encode its own identity; the runner
report records its independently fetched SHA/tree.
