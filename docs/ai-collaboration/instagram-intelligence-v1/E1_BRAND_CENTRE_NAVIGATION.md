# E1 Brand Centre Peer Navigation — External Local Execution Evidence

```text
PACKET = E1_BRAND_CENTRE_NAVIGATION
STATUS = EVIDENCE_READY_AWAITING_CHILD_SA_PROGRAM_ORCHESTRATOR_ACCEPTANCE
C4 = ACCEPTED
C1 = ACCEPTED
D_COMBINED = ACCEPTED
HIDDEN_BRAND_LANE = ACCEPTED_FOR_V1
E1_ACCEPTED = NO
E1_CORRECTION_CYCLES_USED = 0
E2_E3_COMBINED = NOT_STARTED
E4 = NOT_STARTED
WAVE_F = NOT_STARTED
```

## Published checkpoints

| Repository | Starting SHA / tree | Published SHA / tree |
|---|---|---|
| Backend | `006346d39e253cca31a979804c9f17f45761027b` / `9924d09210ef0fe5435a7998ff01851961b3708e` | `d5b9de557ed983a9c3af26b1edc305ba8b77d6f3` / `67d2642871899fda9e7bd9248b8d56892c3d6e6d` |
| Frontend | `dfd08cf95c043049b40847416edea786bb77fe9f` / `50ad0be4ac391ad131681a4a5ce5c8d5ee05606d` | `e36b8755deb4d584150bcaa0097e62f4c0f44d34` / `f263ea3eb92d476c6b8313263165e6512bbc7436` |
| Authority | `cd22693faa7eceb1593f2cfed7a1160ca0d783cf` / `8dcc052d29455e433ab089715e439e45103549a2` | Final SHA/tree reported by the runner after normal publication |

All implementation branches were published normally without force and fetched
back independently. Local and fetched SHAs and trees were equal, with ancestry
from the exact starting checkpoints.

## Bounded predecessor recovery

Recovery 1 moved the existing `INSTAGRAM_DE_CONTRACT` static import ahead of
its top-level use without changing its symbol, source, values or semantics.
Recovery 2 preserved the real `BrandWorkspaceAuthorizationService` dependency
and deferred only the two reciprocal Nest module edges between the Settings
consumer graph and its transitive Brand Centre return path. Providers,
controllers, exports, services, contracts and role/tenant authority remained
unchanged.

Focused runtime metadata, compiled CommonJS initialization, a minimal Nest
testing-module graph, full Nest application context and production boot passed.
The original Instagram contract ReferenceError and Brand Settings undefined
module errors were not reproduced.

## Backend runtime evidence

- Immutable install and Prisma generation/validation passed.
- Focused Evidence, Instagram, Settings and module-wiring matrix: 20 files,
  118 tests passed.
- C1 and D_COMBINED PostgreSQL regressions: 2 files, 7 tests passed.
- Production build and scoped ESLint passed.
- PostgreSQL 17 applied all 90 migrations from clean state; migration status
  was current and schema/migration/dependency identity remained unchanged.
- Nest application context and production backend boot passed.
- `GET /health/live` returned HTTP 200 with `status=ok`.
- `GET /health` returned HTTP 200 with `status=ok` and `database=up`.
- Authenticated Brand Centre API smoke returned HTTP 200, contract `1.0`.

## Shared Brand Centre shell

One typed registry supplies the canonical order `Overview`, `Brand`,
`Offerings`, `Instagram`, `Market`, `Recommendations` to both controls. The
shared shell renders horizontal peer links at 768px and above and one labelled
workspace selector at 767px and below. Matching is segment-safe for root,
nested and future-compatible routes. Page-owned Brand and Offerings navigation
was removed while their accepted content and mutation behavior remained.
Overview, Market and Recommendations truthfully render content-pending states;
the accepted Instagram page remains mounted unchanged.

## Validation and browser evidence

- Full frontend suite: 140 files and 1,103 tests passed; one unrelated test was
  skipped by its existing suite configuration.
- Typecheck, production build, scoped ESLint and `git diff --check` passed.
- At 390px and 767px the mobile selector was visible, desktop navigation absent,
  six destinations ordered, active selection correct and overflow absent.
- At 768px and 1440px six horizontal links were visible, the selector absent,
  `aria-current=page` was singular and correct, and clipping/overflow absent.
- Every canonical route loaded directly; keyboard activation, all-destination
  navigation, active state and browser back/forward passed.
- Brand Owner completed the full four-width matrix. Brand Owner, Campaign
  Manager and Finance Admin completed bounded 390px/1440px direct-route checks.
- Unauthenticated direct API access returned 401. Existing role, tenant and
  caller-selected-Brand protections passed in the test matrix.
- Axe reported zero navigation serious/critical and zero page serious/critical
  violations at every width. Three lesser findings per width were recorded.
- Eight external resource requests were intercepted before network access.

## Scope and hygiene

```text
BACKEND_RECOVERY_1 = INSTAGRAM_DE_CONTRACT_IMPORT_INITIALIZATION_ORDER_ONLY
BACKEND_RECOVERY_2 = BRAND_SETTINGS_CONSUMER_BOUNDED_NEST_MODULE_WIRING
BACKEND_MIGRATIONS = UNCHANGED_AT_90
SHARED_WORKSPACE_ORDER = Overview, Brand, Offerings, Instagram, Market, Recommendations
DESKTOP_TABLET_NAVIGATION = HORIZONTAL_AT_768_AND_ABOVE
MOBILE_NAVIGATION = WORKSPACE_SELECTOR_AT_767_AND_BELOW
BRAND_AND_OFFERINGS_BEHAVIOR = PRESERVED
LIVE_GRAPH_CALLS = NONE
LIVE_META_OR_OAUTH_CALLS = NONE
LIVE_MODEL_CALLS = NONE
META_PROVIDER_MUTATIONS = NONE
RAW_MEDIA_PERSISTED = NO
```

Secret and forbidden-artifact scans passed. No `.env`, credentials, browser
state, signed locator, runtime log, screenshot, build output or disposable
database artifact was committed. E1 does not self-declare Program acceptance.
