# Creator Content V0 — P0 convergence and executable contract freeze

`CREATOR_CONTENT_V0_P0_CONVERGENCE_AND_EXECUTABLE_CONTRACT_FREEZE_V1`

## Disposition

`P0 = ACCEPTED`

The accepted Creator Audience implementation authority and frozen Creator
Content Product/technical authority are converged without discarding either
lineage. The merge completed without content conflicts.

## Exact inputs

| Surface | Accepted predecessor | Tree |
| --- | --- | --- |
| Backend | `7028d1fcbd467175a5358fce92ad2edd63ea44cd` | `dbc9b8e00936d4ecbc700b516b17ad8ce78f2d17` |
| Frontend | `4ca6141face77821f546a13bdde12c8c41780a6f` | `f14d5076021a97137f505a91c81736021a8dc30a` |
| Audience authority | `52917dfe2bbd7e92ceeb5ffcfe2b628fa49bd598` | `962ae60987d83fba313f81265faa3aa1f0163a50` |
| Content Product | `acccc35a41a0f7a57f72b313114a8156d9245650` | frozen |
| Content handoff | `13e1aaffffa84ac8e43ae7c5c036c0afb2211c8e` | frozen |
| Parent authorization | `179ba0860cba0d256b5ee13757f308ebe99a078d` | accepted |

The common authority ancestor is
`59e05b25e4ff2dea29d89026643bb4e21e0cef60`. The Content authority branch
contains both the accepted Audience ledger lineage and the Content Product,
handoff and Parent authorization lineage.

## Executable contract freeze

### Corpus

- Instagram only.
- Exact 90-day UTC lookback.
- Latest maximum 24 eligible persistent posts by authoritative publication
  time descending, with stable provider media ID tie-break.
- No performance-based admission or older backfill.
- Supported media: image, carousel album, Reel and video. Stories are excluded.

### Semantic ownership

- Model owns grounded per-media themes, caption/communication patterns,
  creative structures and visual execution only.
- Model receives no performance metrics and owns no comparison, Highlight,
  Representative Content, recommendation, causal claim or canonical business
  identity.
- Offering, creator-role, likely-collab, Brand Persona and campaign-compliance
  output is outside Creator Content V0.

### Deterministic ownership

- Deterministic code owns corpus admission, metric truth, arithmetic, coverage,
  cohort membership, comparison gates, Content Highlights and Representative
  Content.
- Interaction-response claims use same-media reach-denominated rates.
- Reach/views are descriptive count outcomes and are never labelled engagement.

### Comparison profile

`CREATOR_CONTENT_COMPARISON_PROFILE = v0.1`

- Cohort versus exact eligible complement on a compatible basis.
- Median center.
- Minimum sample: 3 per side.
- Minimum metric coverage: 50% per side.
- MEDIUM requires sample at least 5, coverage at least 70%, and at least two
  publication dates. HIGH is unavailable.
- Interaction-rate materiality: absolute delta at least 0.5 percentage points
  and relative delta at least 20%.
- Reach/views materiality: relative median difference at least 20%.
- Zero baseline never creates a relative-lift claim or meaningful Highlight.
- Raw interaction counts may be factual detail but cannot independently drive
  a stronger/weaker audience-response Highlight.

### Content Object

One Creator-owned Object is frozen:

`creator_content`

Owned component paths:

- `$/f/source_status`
- `$/f/content_snapshot`
- `$/f/content_highlights`
- `$/f/what_you_create`
- `$/f/content_performance`
- `$/f/representative_content`
- `$/f/freshness`
- `$/f/limitations`

The Object must publish through the existing verified contract bundle,
generation, transition/CAS and current projection runtime.

### Highlights and representatives

- Highlights: zero to three, deterministic, Evidence-backed, descriptive,
  non-causal and non-prescriptive.
- Maximum two performance Highlights, one per normalized cohort, and maximum
  one material limitation. No filler.
- Representative Content: zero to six explanatory posts. Performance examples
  are nearest the eligible cohort median, never top-ranked. Semantic examples
  prefer recent fully supported media. Stable greedy evidence coverage and
  deterministic tie-breaks apply.

### Roles and lifecycle

- `INSIGHTS_CONTENT_READ`: Owner, Manager and Assistant.
- Read-only V0. No manual refresh, editing, OAuth, reconnect, disconnect or
  delete mutation.
- Initial eligible processing is immediate; Content processing is daily through
  the existing hourly due-gated dispatcher.
- Creator Settings owns source lifecycle and internal Creator-source purge.

### Multimodal profile

- Image: bounded visual/OCR when available.
- Carousel: bounded child sweep using the accepted child cap.
- Reel/video: bounded sampled frames and bounded speech when enabled.
- Accepted security, duration, size, concurrency, temporary-storage, cleanup,
  replay and fail-closed controls remain unchanged.
- Missing or failed modality remains partial/unknown and never proves absence.

## P1 boundary

P1 generalizes the internal semantic-address owner discriminator from
`brandId` to `ownerScopeId`, with historic Brand/Audience replay compatibility
and no public API change. No migration is expected. A required schema change or
inability to preserve accepted Brand/Audience behavior is a circuit breaker.

## Accepted checkpoint

- Authority executable-freeze commit: `36dfa86035b3637ad8d6c0825f1f8c158cd1c885`.
- Tree: `c1b6b80bf7d80b08c784f60699c86041202b8e10`.
- Backend and frontend remained byte-identical to their accepted predecessors.
- Both authority parents are retained and reachable.
- Diff integrity passed and no source, schema, dependency or migration changed.
