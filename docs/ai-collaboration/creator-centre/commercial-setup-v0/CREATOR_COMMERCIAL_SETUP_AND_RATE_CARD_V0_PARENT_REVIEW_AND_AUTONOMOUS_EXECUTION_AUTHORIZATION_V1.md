# Creator Commercial Setup / Work Preferences V0 + Rate Card V0 — Parent Review and Autonomous Execution Authorization V1

`CREATOR_COMMERCIAL_SETUP_AND_RATE_CARD_V0_PARENT_REVIEW_AND_AUTONOMOUS_EXECUTION_AUTHORIZATION_V1`

## 1. Parent disposition

The batching recommendation in:

`docs/ai-collaboration/creator-centre/orchestrator/CREATOR_CENTRE_MULTI_REGISTER_CURRENT_STATE_DEPENDENCY_AND_BATCHING_PLAN_V1.md`

is accepted for the first implementation run.

```text
WORK_PREFERENCES_V2_PRODUCT = FROZEN
RATE_CARD_V2_PRODUCT = FROZEN
COMBINED_IMPLEMENTATION_RUN = AUTHORIZED
EXECUTION_MODE = ONE_AUTONOMOUS_LOCAL_CODEX_RUN
IMPLEMENTATION_SEQUENCE = P0 → P1 → P2 → P3 → P4
AUDIENCE_V1 = NOT_STARTED
PORTFOLIO = NOT_STARTED
MEDIA_KIT = NOT_STARTED
DEVELOPMENT_MERGE = NOT_AUTHORIZED
DEPLOYMENT = NOT_AUTHORIZED
```

Combining the two registers is an execution optimization. It does not merge their canonical ownership, persistence, API contracts, migrations, acceptance gates, or final outcomes.

## 2. Exact Product authority

### Work Preferences V2

Repository: `Piyush1087/dummy_tcs`

Path:

`docs/ai-collaboration/creator-centre/CREATOR_COMMERCIAL_SETUP_WORK_PREFERENCES_V0_PRODUCT_DECISION_REGISTER_V2.md`

Commit: `731dbd3bbfc6e35d0ff893894e9d1a70d218fb2a`

Git blob: `bdd6a4764c9eb01196c1d6ffdc23d899ce61d9d0`

### Rate Card V2

Repository: `Piyush1087/dummy_tcs`

Path:

`docs/ai-collaboration/creator-centre/CREATOR_COMMERCIAL_SETUP_RATE_CARD_V0_PRODUCT_DECISION_REGISTER_V2.md`

Commit: `275e8096a56d5331dc0fd091ccd2a29c03f89e9c`

Git blob: `a338933279e2a3a23725465c3b06425635f16afe`

The registers are complete Product authority. This authorization and the runner prompt are execution constraints, not replacements for either register.

## 3. Accepted execution bases

The execution runner must fetch and independently verify these exact remote checkpoints before mutation:

```text
BACKEND_BRANCH = program/creator-brand-v0-backend
BACKEND_SHA = 6206f43c6a13c304c971b810e1dd99a20aaaa11f
BACKEND_TREE = 533f543612b856cfaf3b57769fe0b5541b803c3f

FRONTEND_BRANCH = program/creator-brand-v0-frontend
FRONTEND_SHA = c505c0679e39effdd9608e319112591d5ae4c079
FRONTEND_TREE = 18dd8ed798aae509baa7d0d51ab8e31d7ac2dbbd

CREATOR_BRAND_AUTHORITY_BRANCH = program/creator-brand-v0-authority
CREATOR_BRAND_AUTHORITY_SHA = 08c72433b32ed8a199d29ae8875d668dc2f0eddf
CREATOR_BRAND_AUTHORITY_TREE = d9decab31d9bee7251bbbf675af95a29dafd08c9

PRODUCT_AND_BATCHING_AUTHORITY_BRANCH = program/creator-centre-multi-register-batching-plan-v1
PRODUCT_AND_BATCHING_AUTHORITY_SHA = cb273c766f1950c86fff6adcda941a199d0c4a19

MIGRATION_COUNT = 102
MIGRATION_HEAD = 20260915100000_creator_brand_canonical_profile_revision
MIGRATION_HEAD_SHA256 = ec6484427c24d5755549ff9e71bae989f5ff592a6fc5da953ca07494b8744452
```

The final prompt is published on a new authority branch derived from the batching authority. The immutable prompt URL supplied by Parent is the exact execution-authority checkpoint for that branch.

## 4. Predecessor canonicalization at P0

The current backend and frontend bases include the completed Creator Audience V0, corrected Creator Content V0, and Creator Brand V0 implementation lineages.

P0 must verify, not replay, their published evidence. It is authorized to canonicalize the single commercial-run ledger with these predecessor dispositions when their immutable SHA/tree/evidence checks pass:

```text
CREATOR_AUDIENCE_V0 = TECHNICALLY_ACCEPTED
CREATOR_CONTENT_V0 = TECHNICALLY_ACCEPTED
CREATOR_BRAND_V0 = TECHNICALLY_ACCEPTED_PREDECESSOR
```

This authorization does not permit substituting a later, rewritten, or otherwise dirty Product register. Only the exact Product authorities in section 2 govern this run.

If the exact source bases do not contain the claimed accepted implementation, or their evidence materially contradicts the Product registers, stop with `COMMERCIAL_SETUP_P0_AUTHORITY_CONFLICT`.

## 5. Shared ownership and role authority

Freeze these implementation boundaries:

```text
WORK_PREFERENCES = CREATOR_CANONICAL_PREFERENCES
RATE_CARD = CREATOR_CANONICAL_STARTING_FROM_COMMERCIAL_REFERENCE
SETTINGS_CREATOR = ROLES + ADDRESS/SOURCE LIFECYCLE
CREATOR_PAYOUTS/C06 = PAYOUT READINESS
C04/COLLABORATION = PAYOUT GATE + AGREED COMMERCIAL TRUTH
CAMPAIGN/ADD_BRIEF = CAMPAIGN-SPECIFIC DELIVERABLES, RIGHTS, PAYMENTS, CURRENCY
MEDIA_KIT = PUBLIC/VERIFIED-BRAND PRESENTATION
```

Use explicit actions:

```text
OWNER: COMMERCIAL_SETUP_READ + WORK_PREFERENCES_EDIT + RATE_CARD_EDIT
MANAGER: COMMERCIAL_SETUP_READ + WORK_PREFERENCES_EDIT + RATE_CARD_EDIT
ASSISTANT: COMMERCIAL_SETUP_READ only
```

These actions do not grant Settings, payout, Campaign, Collaboration, source-lifecycle, or other mutations.

## 6. Work Preferences frozen implementation boundary

Implement only the V2 register, including:

- base country;
- international-Brand willingness;
- preferred industries and industries the Creator will not work with as distinct concepts;
- availability: `ACCEPTING_COLLABORATIONS`, `PAUSED_UNTIL <date>`, or `NOT_ACCEPTING_NEW_COLLABORATIONS`;
- default availability of `ACCEPTING_COLLABORATIONS` for an otherwise unconfigured profile;
- physical-product willingness;
- UGC-project willingness;
- gifting/barter willingness;
- read-only shipping, payout, and KYC readiness projections.

The technical implementation must reuse an existing canonical active industry vocabulary through an explicit adapter. It must not expose `UNKNOWN`, fraudulent/high-risk system sentinels, or invent a new business taxonomy. If no semantically valid canonical active taxonomy can be identified, stop for Product authority.

Readiness is a projection only. Do not expose an address, bank data, provider internals, or a new KYC workflow. KYC remains `COMING_SOON`.

## 7. Rate Card frozen implementation boundary

Implement only the V2 register, including:

- independent enablement plus positive starting amount for Reel, Story, Carousel, and Photoshoot/static asset creation;
- Reel reference `<15 seconds`;
- Story reference one Story;
- Carousel reference one Carousel;
- Photoshoot reference one delivered static asset;
- Link in Bio starting amount with fixed seven-day reference;
- Partnership Ads starting amount with fixed fifteen-day reference;
- content-usage-right availability plus optional positive `usageDays`, without a V0 published rights price;
- canonical currency resolved from accepted geography/financial authority and never manually chosen;
- advance percentage: `0`, `25`, `50`, `75`, or `100`;
- balance term: `NET_7`, `NET_15`, `NET_30`, `NET_45`, or `NET_60`;
- projection of UGC and gifting/barter preferences from Work Preferences.

Do not create `UGC_VIDEO`, a UGC rate item, a Story bundle, packages, per-item visibility, fixed-price semantics, automatic quotes, or arbitrary Creator terms.

Campaign/brief/Collaboration commercial truth always supersedes the Rate Card for a transaction.

## 8. Persistence and migration isolation

Work Preferences and Rate Card must use separate canonical aggregates, APIs, revisions/audits, and migrations.

Expected additive order from the verified 102-migration base:

```text
P1 = Work Preferences migration
P2 = Rate Card migration
```

Do not hard-code a migration number before checking repository state. No destructive backfill, table rewrite, shared-domain mutation, synthetic Creator or Brand identity, or ambiguous owner backfill is authorized.

The run must prove clean installation and populated predecessor upgrade. It must preserve all accepted Audience, Content, Creator Brand, Brand Centre, Campaign, Collaboration, Settings, and payout data.

## 9. Frontend boundary

Create one Creator Centre `Commercial Setup` workspace with Work Preferences and Rate Card as sibling internal sections.

Reuse the accepted Creator Centre shell, access guard, desktop sidebar, mobile drawer, form, conflict, loading, error, and last-good patterns. Preserve the five-item mobile bottom navigation; do not create a sixth bottom-navigation item or a second shell.

The workspace must remain usable without Instagram Intelligence. It must clearly distinguish:

- editable Creator-owned preferences and rate references;
- projected, read-only operational readiness;
- Campaign/Collaboration transactional truth.

## 10. Autonomous execution discipline

One Local Codex invocation may execute P0 through P4. Inside that invocation:

1. verify the exact predecessor and Product authorities;
2. execute one packet at a time;
3. run the packet-specific mandatory gates;
4. create a normal non-force checkpoint commit only after those gates pass;
5. update the one execution ledger and packet evidence;
6. advance only when the immediately preceding packet is evidence-ready;
7. stop immediately for a circuit breaker.

Local Codex may determine objective evidence readiness. It does not become Product authority and cannot weaken a gate. Final technical acceptance remains with the Creator Instagram Intelligence Technical SA / Program Orchestrator after the immutable report returns.

## 11. Circuit breakers

Stop and return without later-packet work if any of these occurs:

- exact SHA/tree, Product blob, ancestry, worktree, or migration identity mismatch;
- a newer or conflicting Product register is required to proceed;
- no safe canonical industry vocabulary is available;
- canonical currency cannot be resolved without inventing a Rate Card-only financial mapping;
- source-independent Creator access cannot be preserved;
- readiness requires copying or mutating Settings/payout secrets;
- Campaign, Collaboration, Settings, C06, Media Kit, or Instagram ownership must be changed;
- a destructive or ambiguous migration/backfill is required;
- cross-tenant, cross-Creator, or role isolation cannot be maintained;
- one register can pass only by weakening the other's contract;
- a deployment, development merge, provider call, or unapproved external mutation becomes necessary.

Ordinary bounded code, DTO, schema, test, route, form, responsive, migration, or integration defects are correction work inside the autonomous run, subject to two bounded correction cycles per packet.

## 12. Final outcome and exclusions

P4 targets:

```text
WORK_PREFERENCES_V2 = SEPARATELY_EVIDENCE_READY
RATE_CARD_V2 = SEPARATELY_EVIDENCE_READY
COMBINED_COMMERCIAL_SETUP = INTEGRATED_EVIDENCE_READY
BACKEND/FRONTEND/AUTHORITY = PUBLISHED_AND_FETCH_BACK_VERIFIED
DEVELOPER_HANDOFF = READY
PRODUCT_LEARNING = READY
```

Do not begin Audience V1, Portfolio, Media Kit, Creator Content V1, editing elsewhere in Brand Centre, Marketplace matching, quotes, C04 changes, Campaign changes, deployment, or a merge to `development`.

## 13. Mechanical relay

```text
TECHNICAL SA
→ publishes exact immutable runner prompt
→ PARENT manually relays prompt/link to Local Codex
→ LOCAL CODEX runs P0→P4 autonomously
→ PARENT returns the immutable report
→ TECHNICAL SA / PROGRAM ORCHESTRATOR reviews final evidence
```
