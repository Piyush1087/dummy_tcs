# D_COMBINED Hidden Brand Lane — External Local Execution Evidence

```text
PACKET = D_COMBINED_HIDDEN_BRAND_LANE
RESULT = EVIDENCE_READY_AWAITING_CHILD_SA_PROGRAM_ORCHESTRATOR_ACCEPTANCE
C1 = ACCEPTED
D1 / D2 / D3 = SUPERSEDED_BY_D_COMBINED
D_COMBINED_ACCEPTED = NO
HIDDEN_BRAND_LANE = MANDATORY_V1_IMPLEMENTED_AWAITING_ACCEPTANCE
WAVE_E = NOT_STARTED
WAVE_E_DOES_NOT_CONSUME_D_COMBINED = YES
LIVE_GRAPH_CALLS = NONE
LIVE_META_OR_OAUTH_CALLS = NONE
LIVE_MODEL_CALLS = NONE
NEW_MIGRATIONS = NONE
```

## Immutable checkpoints

| Repository | Accepted start SHA / tree | D_COMBINED result |
|---|---|---|
| backend | `6fd0b9077d46fde08b2de3ed05f2dc4db3f18a98` / `172171898b728c4e6a1c2b801e66ccc5b959c01b` | `006346d39e253cca31a979804c9f17f45761027b` / `9924d09210ef0fe5435a7998ff01851961b3708e` |
| frontend | `dfd08cf95c043049b40847416edea786bb77fe9f` / `50ad0be4ac391ad131681a4a5ce5c8d5ee05606d` | unchanged |
| authority | `d7cbbe690b8143ef549fe7d0c8710eada1b98f7e` / `6b66fe6e5e8b89558f5e73c69dcf91b3ec2c2985` | final commit/tree reported by the runner after publication because a commit cannot self-encode its identity |

All three worktrees were clean, equal to fetched remote tracking refs, and on
the accepted predecessor chain before mutation. Remotes identified only the
expected `Piyush1087` repositories. No overlapping user work was present.

## Accepted semantic reuse matrix

| Semantic area | Eligibility | Object/output | Evidence | Processor | Validator | Exact Instagram Evidence |
|---|---|---|---|---|---|---|
| Brand Character | `RUN` | 1.0 reused unchanged | bounded source profile 1.1 | existing `brand_character` with bounded input adaptation | bounded 1.1 source adaptation | repeated current `instagram.caption_context` |
| Brand Communication | `RUN` | 1.0 reused unchanged | bounded source profile 1.1 | existing `brand_communication` with bounded input adaptation | bounded 1.1 source adaptation | repeated current `instagram.caption_context` |
| Visual Style Synthesis | `RUN` | 1.0 reused unchanged | bounded source profile 1.1 | existing `visual_style_synthesis` with bounded input adaptation | bounded 1.1 source adaptation | repeated inspected `instagram.media_visual_observations` |
| Audience Persona Synthesis | `OPTIONAL_IF_SUFFICIENT` | 1.0 reuse possible | bounded profile required | not activated without accepted sufficiency | not activated | no mandatory V1 output |
| Brand Meaning | `OPTIONAL_IF_SUFFICIENT` | output/evidence 1.1 required | version required | not activated | not activated | no mandatory V1 output |
| Brand Differentiation | `OPTIONAL_IF_SUFFICIENT` | output/evidence 1.1 required | version required | not activated | not activated | no mandatory V1 output |
| Serviceability | `NOT_SUPPORTED` | not eligible | not eligible | not eligible | not eligible | excluded |

Non-null reusable output requires at least three current exact admitted
Instagram Evidence references. Missing, unavailable, context-insufficient or
uninspected material remains null/inconclusive. Instagram patterns cannot create
hard communication or visual constraints. No website Evidence is relabelled or
mixed into a source-native execution.

## Implemented boundary

The immutable source profile binds Brand, `INSTAGRAM_OWNED`, provider account,
authorization generation, 30-day window/cutoff, completed Capture, non-null
capture time, resource/capture identity, exact capability, acquisition state,
and recursive parent Evidence lineage. Website, mixed-source, cross-Brand,
cross-account, stale-generation, incomplete-Capture, out-of-window and
unrelated-capability inputs fail before model execution or publication.

The existing three RUN processor implementations, their frozen 1.0 Object and
output contracts, their verified bundles, shared execution identity, worker,
retry/finalization path and generation repository are reused. A bounded source
instruction removes website assumptions and requires exact lineage. Existing
website bundle bytes are unchanged. Production providers retain their existing
fail-closed unconfigured behavior; tests use deterministic fixture-model DI.

Successful hidden output writes immutable Object/component generations and
Evidence references only. Metadata preserves source profile, provider account,
authorization generation, analysis window, Evidence manifest hash, processor,
bundle/output versions, execution identity, readiness and freshness. The path
writes no current, candidate, transition, action or supersession pointer.

The internal reader fixes source to `INSTAGRAM_OWNED`, requires a server-owned
Brand scope, returns only completed immutable generations, and returns explicit
empty output when none exists. It selects per processor/Object by window end,
successful finalization time and descending stable immutable generation ID.
It never falls back to website/current/candidate state and exposes no public
HTTP, workspace, AI Match or Campaign Recommendation boundary.

C1 invokes the hidden lane only after accepted B2–C4 processing completes and
passes the same Brand/account/generation/window/request identity. It adds no
scheduler, dispatcher, lease, cooldown or provider acquisition. A later hidden
failure uses existing retry/failure state and cannot roll back C4 current or the
preceding successful hidden generation.

Settings-owned Instagram deletion now includes target hidden executions,
generations, components and Evidence references. PostgreSQL proves target
removal while peer Brand hidden data survives. Website/canonical state is not
selected by the source-profile predicates.

## PostgreSQL and validation evidence

Disposable PostgreSQL `17.11` applied all 90 migrations and reported current.
Only built-in `plpgsql` was present; D_COMBINED requires no extra extension.
Migration 89 remained
`12b5a234d322235199dc8ad1173fc4835517ed0a3ed5a6ff910aa48165f118a8` and
migration 90 remained
`3a282067c79560d5701611071457f1825f3e0b21dd1238253318f4945abbdf80`.

The final focused unit/contract/architecture matrix passed `236/236`. The
PostgreSQL matrix passed `14/14`: the D_COMBINED round trip, existing website
Brand Communication generation/current regression, C1 coordination/fencing,
and C4 exact-three-Object/current/failure/deletion regression. The hidden slice
used the real existing Brand Communication executor with deterministic model
DI, exact source admission, Object/component Evidence lineage, same-execution
replay, changed-Evidence identity, later-failure preservation, source-scoped
latest read, canonical current/candidate/transition non-mutation, tenant
isolation and target-only Settings deletion.

Prisma generate/validate, production build, scoped ESLint, `git diff --check`,
exact pinned-source bundle verification from authority commit
`bbb0be3345c36e9cc7c4f06ca68fb491b742b83f`, migration identity, secret scan,
forbidden-artifact scan and new-live-network-call scan passed. There is no
schema, migration, dependency, lockfile, frontend, public API or provider-scope
change. No raw media, provider payload, signed locator, credential or runtime
artifact is tracked.

## Toolchain and accounting

```text
OS = Microsoft Windows 11 Home Single Language 10.0.26200 x64
NODE = v24.19.0
NPM = 11.17.0
DOCKER = 29.7.2
POSTGRESQL = 17.11
PRISMA = 6.19.3
D_COMBINED_PRIMARY_RUNS_USED = 1
D_COMBINED_CORRECTION_CYCLES_USED = 0
```

This artifact is runner evidence, not Program acceptance. Wave E and Wave F
were not started.
