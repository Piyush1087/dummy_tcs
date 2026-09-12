# E2/E3 Combined Instagram Workspace — External Local Execution Evidence

```text
PACKET = E2_E3_COMBINED_WORKSPACE
STATUS = EVIDENCE_READY_AWAITING_CHILD_SA_PROGRAM_ORCHESTRATOR_ACCEPTANCE
C4 = ACCEPTED
C1 = ACCEPTED
D_COMBINED = ACCEPTED
HIDDEN_BRAND_LANE = ACCEPTED_FOR_V1
E1_PREDECESSOR_BOOT_RECOVERY = ACCEPTED
E1 = ACCEPTED
E2_E3_COMBINED_ACCEPTED = NO
E2_E3_COMBINED_CORRECTION_CYCLES_USED = 1
E4 = NOT_STARTED
WAVE_F = NOT_STARTED
```

## Published checkpoints

| Repository | Starting SHA / tree | Published SHA / tree |
|---|---|---|
| Backend | `d5b9de557ed983a9c3af26b1edc305ba8b77d6f3` / `67d2642871899fda9e7bd9248b8d56892c3d6e6d` | unchanged |
| Frontend | `e36b8755deb4d584150bcaa0097e62f4c0f44d34` / `f263ea3eb92d476c6b8313263165e6512bbc7436` | `e99ef1eb04615213a93250714be85f21c47aeefc` / `cb48092812129c06c75971787f8b801eef0c4d35` |
| Authority | `2e0497601491bd7d63e7b307a4fdc3e70cf30948` / `84223c102cd9445898ca8c48f7757cdce768b3e6` | final SHA/tree reported by the runner after normal publication |

Both changed implementation branches were published normally without force and
fetched back independently. Local and fetched SHAs and trees were equal, with
ancestry from the exact starting checkpoints.

## Consumer and workspace contract

The accepted C4/C1 consumer was sufficient without backend or API changes. A
strict frontend parser consumes the complete authenticated aggregate and keeps
missing, unavailable and observed zero distinct. One workspace with no inner
tabs renders this fixed order:

1. Account and connection context
2. Account performance
3. What is working
4. Content behavior
5. Audience response
6. Creator and collaboration signals
7. Representative posts
8. Coverage and freshness

The window is fixed at 30 days. Manual refresh is governed by the accepted C1
role and cooldown contract, refetches server truth after acceptance and does not
optimistically claim completion. Owner and Campaign Manager are allowed;
Finance Admin is read-only. Settings owns lifecycle mutations and is reached by
a deep link only. Semantic editing, hidden Brand display, canonical Creator or
Collaboration links, E4 detail drilldown and cross-source reconciliation are not
implemented.

## Validation evidence

- Immutable dependency identity passed; package and lockfiles are unchanged.
- Frontend scoped regression matrix: 14 files and 145 tests passed.
- Focused backend active/inactive membership and PostgreSQL tenant authorization:
  2 files and 20 tests passed against the disposable PostgreSQL 17 database.
- Typecheck, production build, scoped ESLint and `git diff --check` passed. The
  existing Vite large-chunk warning was non-failing and unchanged in authority.
- Production-built browser proof passed at 390, 767, 768 and 1440 px. Mobile
  uses the accepted E1 selector through 767; 768 and desktop retain horizontal
  peer navigation. All widths had the exact hierarchy and no horizontal overflow.
- Keyboard navigation, visible focus and refresh-result focus preservation passed.
- Axe returned zero serious and zero critical findings for current,
  not-connected and preserved-current states at every width. Three lesser
  findings were recorded per case: `landmark-main-is-top-level`,
  `landmark-no-duplicate-main`, and `landmark-unique`; these reflect the accepted
  outer E1 shell plus the route-owned main landmark and do not waive a mandatory
  gate.
- Real-backend Owner, Campaign Manager and Finance Admin fixtures passed their
  role checks. Primary no-connection and second-tenant isolation passed, and
  unauthenticated direct API access returned 401.
- Connection/sync lifecycle fixtures passed for connecting/initializing,
  connected/refreshing, partial and unknown capability, reauthorization,
  authorization degradation, same-account reconnect, different-account
  conflict, transient provider failure with current preservation, and disconnect.
- External browser resources were intercepted before network. No live Graph,
  Meta/OAuth or model call occurred.

## Frozen closeout state

```text
INSTAGRAM_WORKSPACE = SINGULAR_NO_INNER_TABS
WINDOW = FIXED_30_DAYS_V1
WORKSPACE_HIERARCHY = ACCOUNT_AND_CONNECTION_CONTEXT -> ACCOUNT_PERFORMANCE -> WHAT_IS_WORKING -> CONTENT_BEHAVIOR -> AUDIENCE_RESPONSE -> CREATOR_AND_COLLABORATION_SIGNALS -> REPRESENTATIVE_POSTS -> COVERAGE_AND_FRESHNESS
MANUAL_REFRESH = C1_ROLE_AND_COOLDOWN_GOVERNED
SETTINGS_MUTATIONS = DEEP_LINK_ONLY
SEMANTIC_EDITING = NOT_SUPPORTED
HIDDEN_BRAND_LANE_DISPLAY = PROHIBITED
E4_DETAIL_DRILLDOWN = NOT_STARTED
BACKEND = UNCHANGED
NEW_MIGRATIONS = NONE
LIVE_GRAPH_CALLS = NONE
LIVE_META_OR_OAUTH_CALLS = NONE
LIVE_MODEL_CALLS = NONE
META_PROVIDER_MUTATIONS = NONE
RAW_MEDIA_PERSISTED = NO
```

Secret and forbidden-artifact scans passed. No `.env`, credential, browser auth
state, raw media, signed locator, runtime log, screenshot, build output or
disposable database artifact was committed. This packet does not self-declare
Program acceptance and does not start E4 or Wave F.
