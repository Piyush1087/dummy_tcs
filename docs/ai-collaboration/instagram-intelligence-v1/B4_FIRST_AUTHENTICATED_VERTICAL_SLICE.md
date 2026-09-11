# B4 First Authenticated Vertical Slice

```text
PACKET = B4_FIRST_AUTHENTICATED_VERTICAL_SLICE
STATUS = EVIDENCE_READY_FOR_CHILD_SA_REVIEW
B4_ACCEPTED = NO
B3A = ACCEPTED
B3B = PROHIBITED
PRIMARY_RUNS_USED = 1
CORRECTION_CYCLES_USED = 0
LIVE_GRAPH_CALLS = NONE
LIVE_MODEL_CALLS = NONE
META_PROVIDER_MUTATIONS = NONE
RAW_MEDIA_PERSISTED = NO
NEW_MIGRATIONS = NONE
```

## Authority and implementation identity

The run started only from the exact fetched predecessor checkpoints:

| Repository | Starting SHA | Starting tree | B4 implementation SHA | B4 implementation tree |
|---|---|---|---|---|
| backend | `2005bf4371210f5515635530da7f3d26cbaf9005` | `6eccbda2dcfcb85638d15d19a52d95be8aa4392f` | `ad9cd776e31df30d153689ee9d39d2cdfad7cbb0` | `aa7c94bc52792f3b7d87cc0e2d141839d3d93245` |
| frontend | `97efcaae7ad69da6bd1c18ab8cebb44ca82c4c9e` | `18c7cb0edd173960d15fcc29d71583a1ea429586` | `bc8523183ae4892c0b538474d2f5444a1ea356d8` | `7f3016c01500083ae2f536ebd0540219c9228dd7` |
| authority | `70add5add8e600359b728d1cbb728c700f50acc2` | `46db74306200c2a87bd8f62186105bd0534e8858` | reported by the external runner after this non-self-referential commit | reported by the external runner after this non-self-referential commit |

All three starting local and fetched remote identities were equal, clean, and on the accepted predecessor chain.

## Bounded implementation

The backend admits exactly processor/Object `instagram_content_behavior` 1.0, output contract 1.0, source `INSTAGRAM_OWNED`, and the single owned/materialized component path `$`. It reuses the Brand subject, shared execution and processor-attempt records, verified contract/path gate, immutable generation repository, Evidence-reference persistence, transition/CAS service, shared current, projection, finalization, and failure-current preservation. It creates no Instagram-specific current framework and writes no current row directly.

One deterministic selected IMAGE flows through the production B3A pipeline with fixture acquisition/model DI into a completed Capture, one Evidence item and one semantic observation. The B4 processor fences Brand, integration, provider account, authorization generation, completed Capture and exact Evidence capability. The one-post value is `PARTIAL_CURRENT` / `PARTIAL` / `CURRENT`; `signals=[]`, `learnings=[]`; unsupported patterns are `UNKNOWN / INSUFFICIENT_EVIDENCE`; bounded learnings are `INTENTIONALLY_ABSENT / INSUFFICIENT_SAMPLE`.

The narrow authenticated `GET /api/v1/brand-centre/instagram` uses the existing throttling/JWT guards and server-resolved active Brand membership. It exposes Settings connection context and the bounded current projection only. The frontend adds only the authenticated direct route `/brand-centre/instagram`, strict parser/client/query state, a minimal Aurora-aligned page, and no navigation migration.

## Database and failure-current evidence

A uniquely named disposable PostgreSQL 17 container received all 88 migrations from clean state; Prisma status was current. Migration 88 remained byte-identical at SHA-256 `d02b75e50f883150c9d14908c82ef10d9b0de4c2b464168567634dd0157009e4`. No schema or migration changed.

The focused PostgreSQL test proves Resource → completed Capture with non-null `capturedAt` → Evidence → semantic observation → Brand Intelligence subject → execution → processor attempt → Object generation → root component generation → exact Evidence reference → transition/CAS current → consumer. Replay retained one Object generation. A distinct later missing-Evidence execution became terminal failure and created no replacement: current ID, revision, component-generation ID, value hash and Evidence reference were unchanged. The consumer retained the successful current, returned `currentPreserved=true`, reported processing degradation separately, and retained truthful current freshness. Second-tenant, changed-account and stale-generation probes exposed no current; the processor rejected the two lineage drifts.

## Validation evidence

- Backend focused run: 49 assertions across B4 contracts/controller, PostgreSQL round-trip, B3A service/PostgreSQL regressions, verified runtime, execution architecture and current projection; a contention-only 5-second B3A timeout was rerun alone and all 4 PostgreSQL B3A tests passed. Prisma generate/validate, build, and scoped ESLint passed.
- Frontend: 6 assertions across strict parser/authenticated client, page states, and authenticated direct-route architecture; typecheck, production build and scoped ESLint passed.
- Authenticated Chrome desktop proof at 1440px: login succeeded; consumer GET returned 200; partial limitation and preserved-current degradation rendered; no horizontal overflow; zero page errors; zero console errors; zero live provider/model requests.
- Immutable installs used `npm ci` in both repositories. High-confidence secret/raw-media/forbidden-artifact scans and `git diff --check` passed. No credential value, provider payload, locator, raw media, temporary path, browser state, build output or runtime log was tracked.

## Deferred boundary

The B3A locator acquisition implementation was not modified. Its mandatory 65,536-byte streamed Graph-response limit—including chunked and dishonest-Content-Length coverage—remains assigned to B3B before production-triggerable live acquisition. B3B, C2–C4, C1, D1–D3, E1–E4 and F1–F3 were not started. There was no Product, navigation, provider-permission, canonical-domain, Campaign, Collaboration, Creator, Offering, AI Match or recommendation expansion.

This record is evidence only. Child SA / Program Orchestrator review alone can accept B4.
