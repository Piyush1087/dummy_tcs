# A2 Contract and Semantic Registry

```text
PACKET = A2
RESULT = READY_FOR_CHILD_SA_REVIEW
EXECUTED_AT = 2026-09-10 UTC
RUNTIME_PIPELINE = NOT_IMPLEMENTED
PRISMA_SCHEMA = UNCHANGED
MIGRATION = NOT_CREATED_OR_EXECUTED
PROVIDER_OR_META_CALLS = NONE
FRONTEND_OR_NAVIGATION = NONE
A3 = NOT_STARTED
```

## 1. Starting authority

| Repository | Accepted A1 SHA | Accepted A1 tree | A2 branch |
|---|---|---|---|
| `Piyush1087/dummy_tcs` | `3c924daac420ecfe2bce6533294522fb9821ad94` | `d53bb93ad99435a27df6033a7fae1459fd8342d6` | `program/instagram-intelligence-v1-authority` |
| backend | `a95d0d871cbb04d37ab9cb042e17a1e397a1fb9d` | `d5a31a9bff38b56ad01c2197b3d37514e0f39955` | `program/instagram-intelligence-v1-backend` |

The A2 backend checkpoint is:

```text
BACKEND_A2_SHA = 978a0dba5b0bdf5e16e3ebe96057bb6b8c0c84da
BACKEND_A2_TREE = 18c02098e75aac53696269f8b443f930c8adb514
BACKEND_DIFF_FROM_A1_BASE = 8 files, 2167 insertions, 0 deletions
BACKEND_COMMIT_CHAIN = ef28617633686e8a6b054bdbf8f0615d1097760b -> 978a0dba5b0bdf5e16e3ebe96057bb6b8c0c84da
```

The exact authority commit/tree containing this artifact must be supplied by
the Local Codex runner because a commit cannot encode its own identity.

## 2. Additive executable contracts

The backend adds one isolated contract surface under
`src/features/instagram-intelligence/contracts`:

- one versioned V1 algorithm/safety constant registry;
- one DE source/resource/capability contract;
- exactly three Object definitions and their exact component keys;
- per-media observation, metric, Result, Signal, Learning, sync-state and
  workspace-consumer Zod parsers;
- source-native existing-Brand-processor profiles;
- hidden Brand-lane generation-only persistence policy;
- manual-refresh action authority;
- installed Graph-version metric allowlist;
- ready/partial/registry JSON compatibility fixtures.

Canonical machine-readable authority is
`intelligence/architecture/instagram_intelligence_v1_contract_registry.json`
(SHA-256
`ffc83621d6646182f8623783d83661adcaae83ddc839c664343ac64959dce3e4`).

## 3. DE A2/B1 boundary

The inherited unstaged proposal to widen the shared runnable DE TypeScript
union was preserved and inspected. It contained the correct desired semantic
IDs, but accepting it during A2 would create a broken intermediate runtime:
Prisma still admits only website source/resource enum values, while repository
adapters would become typed as if Instagram persistence already existed.

The attempted compile produced exact incompatibilities at the DE→Intelligence
adapter and Prisma evidence repository for `INSTAGRAM_OWNED`,
`INSTAGRAM_ACCOUNT`, `INSTAGRAM_MEDIA`, and the nine `instagram.*`
capabilities. No migration was authorized in A2.

Resolution accepted by the Child SA:

```text
A2_INSTAGRAM_DE_SEMANTICS = INSTAGRAM_DE_CONTRACT
SHARED_RUNNABLE_DE_VOCABULARY = CONTENT_EQUIVALENT_TO_A1
B1 = ATOMIC_PRISMA_ENUM + SHARED_RUNTIME_UNION + ADAPTER EXTENSION
MIGRATION_REVIEW = REQUIRED_IN_B1
```

This is not a semantic deferral: the exact source class, two resource types and
nine capabilities are machine registered. It prevents A2 from claiming that
unmigrated persistence can already accept them.

## 4. Exact three-Object registry

| Object | Freshness | Exact component count |
|---|---:|---:|
| `instagram_content_behavior` | daily / stale after 36 hours | 12 |
| `instagram_audience_profile` | weekly / stale after 8 days | 8 |
| `instagram_organic_performance_profile` | daily / stale after 36 hours | 12 |

The parser requires exactly one of each Object in the workspace consumer. Each
Object must include every registered component key. Unavailable,
not-inspected, intentionally absent, and unknown values therefore remain
explicit rather than disappearing. Extra or pipeline-only component keys fail
closed.

No account-facts fourth Object, source-as-subject type, candidate/reconciliation
contract, Campaign-performance Object, or future-consumer API was introduced.

## 5. Null, unknown, metric and inference semantics

- `AVAILABLE` rejects `null` and `undefined`.
- `EXPLICIT_NULL`, `UNKNOWN`, `NOT_INSPECTED`, and
  `INTENTIONALLY_ABSENT` are separate tagged states and require a registered
  reason code.
- Metric `OBSERVED_ZERO` is distinct from positive `OBSERVED`,
  `UNAVAILABLE`, `UNSUPPORTED`, and `PROVIDER_FAILURE`; unavailable/failure
  states cannot carry a numeric value.
- Metric observations carry explicit denominator state and Evidence refs.
- Per-media identity includes Brand profile, provider account, media, capture,
  authorization generation and observation-profile version.
- Caption availability requires its content hash; unavailable caption cannot
  carry a hash.
- Light/uninspected/cover-only visual coverage cannot assert visual creator
  absence.
- `NO_COLLAB_SIGNAL` requires successful caption and required selected-media
  inspection with no positive signal; `UNKNOWN` cannot carry a positive signal;
  `POSSIBLE_COLLAB` requires one.
- Non-provider `LIKELY_COLLAB` requires two independent classes including an
  explicit cue and has `MEDIUM` confidence. `HIGH` requires verified provider
  collaborator metadata.
- Canonical Offering, Creator, and Collaboration IDs require an explicit
  `EXACT_PREEXISTING` match marker. A semantic PRESENT/LIKELY state alone cannot
  authorize a canonical reference.
- Signals require `n>=3`, metric coverage `>=50%`, and comparative cohorts of
  at least three. `MEDIUM` additionally requires `n>=5`, coverage `>=70%`, and
  two publication dates. Learnings require supporting Signal IDs and cannot use
  `HIGH` confidence.

## 6. Versioned V1 algorithm/safety constants

The 30-day window, inventory/deep/child/frame caps, sample and coverage
thresholds, audience-difference thresholds, trend threshold, freshness grace,
manual cooldown, dispatcher cadence and jitter are registered under algorithm
contract `1.0` as `VERSIONED_V1_ALGORITHMIC_OR_SAFETY_CONSTANTS`.

They are not permanent Product semantics. Any later permitted adjustment must
create a versioned contract and retain the prior values for replay. A Product-
material change remains a circuit breaker.

## 7. Brand processor minimum version map

No generated/frozen bundle was mutated.

| Processor | Website processor | Instagram processor profile | Object | Output | Evidence | Validator | Run policy |
|---|---:|---:|---:|---:|---:|---:|---|
| `brand_character` | 1.0 unchanged | 1.1 | 1.0 reuse | 1.0 reuse | 1.0 reuse | 1.1 | run |
| `brand_communication` | 1.0 unchanged | 1.1 | 1.0 reuse | 1.0 reuse | 1.0 reuse | 1.1 | run |
| `audience_persona_synthesis` | 1.0 unchanged | 1.1 | 1.0 reuse | 1.0 reuse | 1.0 reuse | 1.1 | evidence threshold |
| `visual_style_synthesis` | 1.0 unchanged | 1.1 | 1.0 reuse | 1.0 reuse | 1.0 reuse | 1.1 | run |
| `brand_meaning` | 1.0 unchanged | 1.1 | 1.0 reuse | 1.1 additive | 1.1 additive | 1.1 | evidence threshold |
| `brand_differentiation` | 1.0 unchanged | 1.1 | 1.0 reuse | 1.1 additive | 1.1 additive | 1.1 | evidence threshold |
| `serviceability_synthesis` | 1.0 unchanged | N/A | N/A | N/A | N/A | N/A | excluded |

The executable registry only declares D2 additions; A2 does not generate the
1.1 bundles or adapt processors. D2 must remain the planned small adaptation.

## 8. Hidden Brand lane protection

```text
SOURCE_SCOPE = INSTAGRAM_OWNED
MODE = GENERATION_ONLY
WRITES = OBJECT_GENERATION + COMPONENT_GENERATION + EVIDENCE_REFS
CURRENT_WRITE = FALSE
CANDIDATE_WRITE = FALSE
TRANSITION_WRITE = FALSE
RECONCILIATION_WRITE = FALSE
LATEST_READ = LATEST_SUCCESSFUL_BY_EXACT_SOURCE_SCOPE
SERVICEABILITY = EXCLUDED
```

The workspace consumer schema is strict and rejects hidden Brand-lane fields.

## 9. Manual-refresh authority conflict and Parent resolution

Authority discovery found a material conflict before any role choice:

- `src/features/brand-centre/brand-centre.controller.ts`, method
  `refreshIntelligence`, exposes `POST intelligence/refresh` after only
  `BrandCentreAuthService.resolveBrandProfileId`.
- `src/features/brand-centre/brand-centre-auth.service.ts`, method
  `resolveBrandProfileIdInTransaction`, admits an active `UserRole.BRAND` with
  exactly one active Brand membership and does not exclude any `BrandRole`.
- `src/features/brand-centre/brand-workspace-authorization.service.test.ts`
  proves current membership resolution for `BRAND_OWNER`, `FINANCE_ADMIN`, and
  `CAMPAIGN_MANAGER`.
- `src/features/brand-settings/services/brand-settings-access.service.ts` and
  `brand-settings-instagram-access.test.ts` prove a different Settings-owned
  lifecycle matrix: Owner full; Campaign Manager read/same-ID reconnect;
  Finance Admin read only. Same-ID reconnect was not used as an analogy for a
  new Intelligence action.

The Program Orchestrator stopped A2. Parent then issued an explicit narrow
Product decision:

```text
INSTAGRAM_INTELLIGENCE_MANUAL_REFRESH:
  BRAND_OWNER = ALLOW
  CAMPAIGN_MANAGER = ALLOW
  FINANCE_ADMIN = DENY_READ_ONLY
```

This new action contract overrides the broader generic Brand Centre refresh
authority only for Instagram Intelligence manual refresh. It does not change
the existing generic endpoint, Settings lifecycle authority, reading rights,
or unrelated policies.

## 10. Installed provider contract

The accepted backend has `DEFAULT_INSTAGRAM_GRAPH_VERSION = "v26.0"` in
`src/features/instagram/instagram-provider.config.ts`. The installed Graph
client currently selects:

- Image: `reach`, `saved`, `shares`;
- Carousel: `reach`, `saved`, `shares`, `likes`;
- Reels/video: `reach`, `saved`, `shares`, `views`.

A2 pins this as
`INSTALLED_CLIENT_ALLOWLIST_PENDING_B2_PROVIDER_VERIFICATION`. It does not claim
live/provider verification. B2 must verify every format/metric pair and may
remove unsupported pairs without converting them to zero.

## 11. Consumer and packet boundaries

Contract routes match accepted Brand Centre controller convention:

```text
GET  /api/v1/brand-centre/instagram
POST /api/v1/brand-centre/instagram/refresh
GET  /api/v1/brand-centre/instagram/media/:mediaId
```

The consumer schema returns connection/account projection, exact window,
account facts/results, exactly three Objects, representative media, independent
coverage, sync preservation and server-projected actions. It is strict and
contains neither secrets, pipeline internals, candidates, hidden Brand
semantics nor future consumer contracts.

```text
B4 = OWNS_DIRECT_AUTHENTICATED_PROOF_ROUTE_ONLY
B4_PEER_NAVIGATION = FALSE
E1 = SOLE_OWNER_OF_PEER_NAVIGATION_CONVERGENCE
```

## 12. Draft persistence delta

Backend artifact:
`docs/database/instagram-intelligence-v1-schema-delta.md`.

It records expected reuse, per-media observation and sync concepts, source
generation-only metadata, deletion/isolation invariants and the exact three
Objects. It changes neither `prisma/schema.prisma` nor migrations.

## 13. Validation evidence

After dependency installation and successful Prisma client generation:

```text
npx vitest run --config vitest.config.ts \
  src/features/instagram-intelligence/contracts/instagram-intelligence.contracts.test.ts \
  src/features/data-extraction/evidence/evidence-runtime-contracts.test.ts

RESULT = PASS
TEST_FILES = 2
TESTS = 31
```

```text
npx eslint src/features/instagram-intelligence/contracts/**/*.ts
RESULT = PASS
```

```text
npm run build
RESULT = PASS
```

Existing frozen bundle verification required its exact pinned source checkout,
not the later A1 authority HEAD:

```text
npm run intelligence:contracts:verify -- \
  --source <detached-clean-checkout-at-bbb0be3> \
  --commit bbb0be3345c36e9cc7c4f06ca68fb491b742b83f

RESULT = PASS
OUTPUT = verified contract bundles from bbb0be3345c36e9cc7c4f06ca68fb491b742b83f
```

This proves the website profiles/frozen generated bundles remain compatible and
unchanged. `git diff --check` also passed.

## 14. Remote publication and next boundary

A1 already recorded that normal remote publication is denied by execution
policy and deferred to A3 preflight. A2 made no push attempt and used no bypass.

```text
A2_BACKEND = COMMITTED
A2_AUTHORITY = COMMIT_REPORTED_BY_RUNNER
PRODUCT_AUTHORITY_CONFLICT = RESOLVED_BY_PARENT_FOR_INSTAGRAM_REFRESH_ONLY
CORRECTION_CYCLES = TWO_BOUNDED_RECONCILIATIONS
REMOTE_PUBLICATION = DEFERRED_TO_A3_NO_BYPASS
A3 = NOT_STARTED
NEXT_AUTHORITY = CHILD_SA_REVIEW_OF_A2
```
