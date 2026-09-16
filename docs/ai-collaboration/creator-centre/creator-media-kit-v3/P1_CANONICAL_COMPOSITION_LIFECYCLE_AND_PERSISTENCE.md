# Creator Media Kit V3 — P1 canonical composition, lifecycle and persistence

## Result

`ACCEPTED`

## Implementation

- One canonical Media Kit per Creator workspace/profile with a stable opaque public ID.
- Explicit `DRAFT` and `LIVE` lifecycle; all newly created Kits are DRAFT and the legacy true-by-default public flag grants no publication authority.
- Compare-and-swap revision updates, idempotency-key replay/conflict handling, immutable revision snapshots and bounded first-party event rows.
- Owner and Manager can manage/publish; Assistant has read/preview only. Every protected operation resolves the canonical Creator subject, actor and active workspace membership.
- Composition reads accepted Creator Brand, Audience, Content, Portfolio, Commercial Setup, Rate Card and Settings projections at request time. Media Kit stores composition settings and selected opaque Portfolio item IDs, not copied upstream truth.
- Portfolio selection is ordered and unique. Drafts may curate incrementally; publish enforces four-to-six selected items when at least four eligible items exist.
- Upstream failure collapses only the affected section; a failed changed mutation cannot replace a valid current revision.

## Persistence and migration proof

Migration `20260916180000_creator_media_kit_v3` is additive and creates Media Kit lifecycle, revision and event storage plus scoped uniqueness/foreign-key/index constraints. No destructive legacy backfill occurs. PostgreSQL 17.11 applied all 106 migrations from clean and populated-predecessor routes. On the populated route, predecessor counts `10/2/2/7/3/3/0` and digest `72602775e5094351fa95ac25dd1633cd` were identical before and after; the three new tables began `0/0/0`.

## Verification

- Prisma generate, validate and production build: PASS.
- PostgreSQL lifecycle suite: 6 PASS.
- Contract, role/CAS/idempotency, tenant and predecessor regression gates: PASS.
- Schema change is Media Kit-owned and within the authorized boundary.
- Correction cycles: 0.
