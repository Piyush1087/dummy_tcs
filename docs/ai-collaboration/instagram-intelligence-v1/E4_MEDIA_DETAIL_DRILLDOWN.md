# E4 Media Detail Drill-down — External Local Execution Evidence

```text
PACKET = E4_MEDIA_DETAIL_DRILLDOWN
STATUS = EVIDENCE_READY_AWAITING_CHILD_SA_PROGRAM_ORCHESTRATOR_ACCEPTANCE
C4 = ACCEPTED
C1 = ACCEPTED
D_COMBINED = ACCEPTED
HIDDEN_BRAND_LANE = ACCEPTED_FOR_V1
E1_PREDECESSOR_BOOT_RECOVERY = ACCEPTED
E1 = ACCEPTED
E2_E3_COMBINED = ACCEPTED
E4_ACCEPTED = NO
E4_CORRECTION_CYCLES_USED = 1
WAVE_F = NOT_STARTED
```

## Exact checkpoints

| Repository | Starting SHA / tree | Published E4 SHA / tree |
|---|---|---|
| Backend | `d5b9de557ed983a9c3af26b1edc305ba8b77d6f3` / `67d2642871899fda9e7bd9248b8d56892c3d6e6d` | unchanged |
| Frontend | `e99ef1eb04615213a93250714be85f21c47aeefc` / `cb48092812129c06c75971787f8b801eef0c4d35` | `b8f4f966bd7772cc5d716f8e2134401eeeb0bb4c` / `45f3dfad39bfc2a616f09faf27aa45c055097dda` |
| Authority | `24834cda2d139dc956e574e54a6ca943e58301fa` / `139949eea31ee24ac399ebc38ad02a84a5e2888c` | final SHA/tree reported by the runner after normal publication |

Starting local and fetched-remote identities, trees and accepted ancestry were
equal before mutation. The frontend implementation was published by normal
non-force push, fetched independently, and proved local/fetched SHA and tree
equality with E2/E3 ancestry.

## Frozen consumer and Product disposition

```text
MEDIA_DETAIL_ROUTE = /brand-centre/instagram/media/:mediaId
MEDIA_DETAIL_API = GET /api/v1/brand-centre/instagram/media/:mediaId
DESKTOP_PRESENTATION = RIGHT_SIDE_MODAL_DRAWER_AT_768_AND_ABOVE
MOBILE_PRESENTATION = FULL_SCREEN_MODAL_SHEET_AT_767_AND_BELOW
DETAIL_AUTHORITY = ROUTE_DRIVEN
DETAIL_FIELDS = CONSUMER_SAFE_ONLY
RAW_EVIDENCE_REFERENCE_DISPLAY = PROHIBITED
RAW_PROVIDER_OR_MEDIA_DISPLAY = PROHIBITED
LIKELY_COLLAB = INFERENCE_ONLY_NOT_CANONICAL_COLLABORATION
DETAIL_MUTATIONS = NONE
BACKEND = UNCHANGED
```

The accepted backend media-detail DTO and endpoint were sufficient. The strict
frontend parser requires contract `1.0`, validates exact discriminants/enums,
bounds consumer data, preserves null, unavailable, not-inspected and observed
zero semantics, and rejects malformed or unknown-version data. Evidence refs
are parsed for contract integrity but never rendered, copied, linked, logged,
stored or placed in DOM attributes.

The E2/E3 workspace remains mounted behind one route-owned modal surface. Each
bounded representative-post summary has one distinguishable `View post details`
button. Opening or closing detail neither refreshes nor refetches the aggregate.
The detail reader is keyed by authenticated user/provider-account context and
media identity, aborts obsolete requests, ignores stale responses, and retries
only the detail GET. No Brand, tenant, account or generation selector is sent.

The six-section view renders only media context, observed performance, content
observations, source-native Creator/Offering presence, likely-collab inference,
and safe inspection/coverage/provenance. Arbitrary user text is rendered as
text. Only absolute HTTPS links on the accepted Instagram hostname allowlist
are exposed, with `noopener noreferrer`; media is never fetched or embedded.
Internal IDs, Evidence refs, raw payloads, signed locators and pipeline/model
internals are absent from the UI.

## Validation evidence

- Windows 11 `10.0.26200` AMD64; Node `24.19.0`; npm `11.17.0`; Git
  `2.55.0.windows.3`; Docker `29.7.2`; Chrome `152.0.7977.83`.
- Immutable `npm ci` completed in frontend and backend. Frontend package and
  lockfile blobs remained exactly equal to the starting commit.
- Focused E4/Instagram/Aurora tests passed: 7 files, 55 tests. The final
  E1/E2/E3, Brand Centre, auth and direct-route regression run passed: 29 files,
  321 tests. Typecheck, production build, scoped ESLint and `git diff --check`
  passed. The existing non-failing Vite large-chunk warning remains.
- Production backend booted unchanged. `/health/live` returned HTTP 200
  `status=ok`; `/health` returned HTTP 200 with database `up`.
- A uniquely named disposable PostgreSQL 17 container used an ephemeral tmpfs
  and isolated local port/database. All 90 migrations had applied and Prisma
  reported the schema current. The accepted C4 PostgreSQL integration test
  passed and supplied provider-neutral current-generation evidence.
- Production-built authenticated browser proof passed at exactly 390, 767, 768
  and 1440 px. 390/767 used the full-screen sheet; 768/1440 used the bounded
  right drawer. Every width preserved the workspace, active Instagram
  navigation, internal scrolling, close access, focus containment/return and
  zero horizontal overflow.
- Axe ran for loading, real success and fixture-only not-found/error at every
  required width: zero critical, serious, moderate and minor violations in all
  final cases. No dialog, naming, focus, landmark or hidden-content finding was
  introduced.
- Keyboard activation, focus entry/trap, Escape, close, Back/Forward, direct
  link, query/hash retention, stable media-identity focus return and direct-link
  heading fallback passed. One normal uncached detail request was observed per
  open; obsolete cancellation and stale-response suppression passed unit proof.
- Real backend reads passed for Brand Owner, Campaign Manager and Finance Admin.
  Finance Admin remained read-only and C1 refresh authority was unchanged.
  Inactive and non-member reads returned non-disclosing 403, second-tenant
  media returned 404, and unauthenticated access returned 401. Cross-account,
  generation and removed-media non-disclosure is enforced by the unchanged C4
  active connection/account/generation query and covered by accepted C4
  PostgreSQL evidence plus E4 not-found UI proof.
- Loading and not-found/error transport were fixture-only; aggregate, successful
  detail, active roles, isolation, health and database evidence used the real
  unchanged backend. External font requests were blocked before network during
  the final harness. No Graph, Meta/OAuth, model or media-provider call occurred.

## Frontend changed files

```text
scripts/e4-instagram-media-detail-proof.mjs
src/design-system/aurora/components.css
src/design-system/aurora/components/Button.tsx
src/design-system/aurora/components/SideDrawer.tsx
src/features/auth/constants.ts
src/features/instagram-intelligence/api/instagram-b4-client.ts
src/features/instagram-intelligence/components/instagram-b4-view.tsx
src/features/instagram-intelligence/components/instagram-media-detail-safety.ts
src/features/instagram-intelligence/components/instagram-media-detail.tsx
src/features/instagram-intelligence/components/instagram-workspace.tsx
src/features/instagram-intelligence/contracts/instagram-b4.schemas.ts
src/features/instagram-intelligence/hooks/use-instagram-media-detail.ts
src/features/instagram-intelligence/instagram-b4-route.architecture.test.ts
src/features/instagram-intelligence/instagram-b4-view.test.ts
src/features/instagram-intelligence/instagram-b4.contract.test.ts
src/features/instagram-intelligence/instagram-b4.css
src/features/instagram-intelligence/instagram-e4-detail.test.tsx
src/features/instagram-intelligence/instagram-e4-route.test.tsx
src/features/instagram-intelligence/testing/instagram-b4-fixture.ts
src/features/instagram-intelligence/use-instagram-media-detail.test.tsx
vitest.config.ts
```

The one bounded correction cycle addressed the runtime-discovered scroll-region
accessibility requirement and stable focus restoration across route-driven
workspace remounts, then reran the complete mandatory matrix. Secret and
forbidden-artifact scans passed. No dependency, backend file, schema, migration,
credential, browser auth state, raw media, provider response, Evidence value,
signed locator, runtime artifact or build output is committed. E4 is not
self-accepted and Wave F is not started.
