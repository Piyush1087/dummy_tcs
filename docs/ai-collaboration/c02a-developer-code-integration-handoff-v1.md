# C-02A Developer Code Integration Handoff V1

## Module

`C-02A — Creator Home Foundation`

## Accepted implementation

The implementation provides:

- canonical `GET /api/v1/creator/home` and the `/creator/home` experience;
- read-only backend Home aggregation;
- Available Campaigns, Applications in Progress, Active Collaborations, and Unread Updates KPIs;
- Needs Your Attention, Your Work, Campaigns Available, and Recent Activity sections;
- Browse Campaigns, My Applications, Collaborations, and Settings quick actions;
- Creator-role-aware actions and factual campaign opportunities;
- Application and Collaboration work projections;
- partial-source and freshness handling;
- closed destination projection, one frontend Home request, and runtime response validation;
- responsive, safe-area, keyboard, and accessibility behavior.

## Repositories and immutable candidates

| Surface | Branch | Commit | Tree |
|---|---|---|---|
| Backend | `c02a/creator-home-foundation-v1` | `4e082f67953f0d6b55fa791f2cea03c8aef28119` | `4fa5adb9ece21e08c48601c3c8d9048ed56c9828` |
| Frontend | `c02a/creator-home-foundation-v1` | `29e78397fc66676d0134c45aa0bb6af173fbe12b` | `09f10f499288f598a970d440ada2b1db257b4a6b` |

Integrate these exact immutable candidates. The backend history already includes the accepted C-04 dependency `ec395bf5760b295dddd9c3f7e9c2f05485b6b743`; preserve that ancestry and migration ownership. The frontend required no post-C-04-convergence source change.

## Migration note

C-02A itself adds no migration and no Home persistence.

The backend branch contains 85 migrations because it converges the accepted C-04 lineage correction. Migration 85, `20260911125000_c04_brand_payouts_reserve_entitlement_lineage`, is C-04-owned. Its canonical Git-byte SHA-256 is `6e384abdaf7cf9fa35973ca31e1a5cb541f60bd328937ff3d27844b9dfdb4d72`.

## Integration constraints

- Preserve the request-time read-only aggregation design and canonical source-module ownership.
- Preserve exact KPI predicates and preview/count parity.
- Preserve workspace/profile scoping, active-membership enforcement, and role-derived actions.
- Do not mutate C-04 or Notification unread state during Home reads.
- Keep C-04 `availableActions` authoritative and retain Recent Activity allowlisting/deduplication.
- Preserve unavailable-source semantics (`null` KPI value), freshness/source states, response validation, and the closed destination allowlist.
- Do not add Home-owned persistence or reassign migration 85 to C-02A.

## Deferred additive scope

- Creator Center
- Media Kit and public Media Kit
- Profile Analytics
- Instagram/Creator Intelligence
- Campaign recommendations
- Creator Payouts, including payout amount or obligation UI
- AI Copilot

These capabilities are future additive integrations and are not C-02A debt. Each requires its own accepted downstream authority.

## Known nonblocking inherited debt

The frontend retains the inherited lint baseline of 26 errors and 13 warnings. C-02A introduced no new lint regression. No additional C-02A debt or integration blocker is recorded.

No Stitch output, AWS action, production action, live Meta action, or live provider action is part of this handoff.
