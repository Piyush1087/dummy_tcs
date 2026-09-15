# Creator Content V0 — P2 backend vertical-slice evidence

`CREATOR_CONTENT_V0_P2_BACKEND_VERTICAL_SLICE_V1`

## Disposition

`P2 = CORRECTED_EVIDENCE_READY`

Correction 1 supersedes the original runner acceptance claim. P0/P1 remain accepted; P2 requires Child-SA / Program-Orchestrator review. See `P2_P4_CORRECTION_1_EVIDENCE.md` for the corrected production binding, real 90-day provider request and final proof. The original evidence below is historical and is not sufficient acceptance evidence: its inventory used the Brand default window and its integration replaced the whole semantic analyzer.

The backend publishes one Creator-owned `creator_content` Object through the existing owner-scoped Data Extraction, Evidence, verified bundle, generation, transition/CAS and current runtime. The public route is read-only and server-resolves the Creator subject.

## Frozen behavior implemented

- Exact eight-path V0 contract and strict runtime validation.
- Instagram-only exact 90-day window; latest 24 eligible persistent posts ordered by publication time and provider media ID; Stories excluded.
- Metrics and deterministic arithmetic are separated from bounded per-media semantic input. The semantic adapter receives no performance metrics and fails closed when unavailable.
- Median cohort-versus-complement comparisons enforce minimum samples, coverage, interaction-rate and reach/views materiality, zero-baseline behavior, and LOW/MEDIUM confidence only.
- Zero-to-three deterministic Highlights and zero-to-six explanatory representatives; no ranking, causal or prescriptive claims.
- Owner, Manager and Assistant receive explicit `INSIGHTS_CONTENT_READ`; no lifecycle or manual-refresh authority is introduced.
- Initial Content work is due immediately and recurs daily through the existing hourly Creator Instagram dispatcher using the existing media-performance capability class. Audience cadence remains separate.
- Creator Settings-owned source purge traverses both Audience and Content lineage while preserving other owners.
- No schema, migration, package, lockfile, public Brand contract, or frontend change.

## Evidence

- Strict contract/calculation/pipeline/consumer/scheduler and predecessor unit matrix: 108 PASS; 9 database-gated tests intentionally excluded from that unit command.
- Provider-neutral Content PostgreSQL vertical slice: 3 PASS.
- Clean PostgreSQL 17 route: all 101 migrations applied; migration status current.
- Provider DI call path: inventory once plus eight media-insight reads; bounded semantic fixture receives no metric fields.
- Exact replay: second execution performs zero provider/semantic work and leaves Capture, Evidence, Object, component and current counts unchanged.
- First execution row counts: 1 completed Capture, 8 Evidence items, 1 Object generation, 8 component generations and 8 current rows.
- Failure-current preservation, cross-owner isolation and target-only Creator Instagram purge: PASS.
- Existing hourly coordinator, immediate first due state and 24-hour-plus-bounded-jitter recurrence: PASS.
- Backend production build, scoped ESLint, Prettier and diff integrity: PASS.
- Schema/migrations/dependencies: unchanged; migration count remains 101.
- Secret/credential/raw-media/locator/temporary-path scan: PASS; no value is recorded.
- Live Graph calls: NONE. Live model calls: NONE.

## Published checkpoint

- Backend commit: `08c4dec1eb8a1c9a545c8da4cc08dfe0d3ceb1b4`.
- Backend tree: `0df1e3ccc379332dde1cbe57a7d1cf9e14d6cce4`.
- P1 ancestor: `39e4737e71b8aa22260587da8ed557fc73c09460`.
- Frontend remains unchanged at `4ca6141face77821f546a13bdde12c8c41780a6f` / `f14d5076021a97137f505a91c81736021a8dc30a`.

`P3 = AUTHORIZED`
