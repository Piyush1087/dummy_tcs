# Campaign Reporting V1 — Execution Ledger

## Run A / P0

- Runner: External Local Codex
- Date: 2026-09-16 Asia/Calcutta
- Scope: P0 authority/current-state/capability/contract/materiality preflight only
- Backend/frontend implementation: not started
- Live Graph/model calls: none
- Provider/OAuth mutation: none
- Database writes/migrations/deployment: none

### Input verification

- Product raw SHA-256: `897c8c1c81114c1fedec1da3dbeeffa5fa690461dd7905a5ab86905bebefdb65`
- Plan V3 raw SHA-256: `446a1ee55d243d80192c9c7581a9a283349972e5d532e6ff44edf67002b947b5`
- P0 prompt raw SHA-256: `eab22a5ff2cfc2a298a02dde32d97561e7837576152a7796e702d16667a645b8`

### Repository fetch and authority convergence

- Authority source: `Piyush1087/dummy_tcs`, base `origin/main@3415a8b7ef155e115b77da3335795ff8ab05de3f`
- Backend source: `Piyush1087/creator-commerce-backend-v2-clone`, freeze `129b291ecbca4a1e79451215a81726000cfb5bff`
- Frontend source: `Piyush1087/creator-commerce-frontend-v2-clone`, freeze `6ea628b09817c4784a248658ddfc0202a13fbb00`
- All three repositories were fetched with prune.
- Existing registered backend worktrees were inspected and clean.
- Authority branch convergence: `origin/main` + normal merge of `origin/c04/stage-b-authority-package-v1` + normal merge of `origin/program/instagram-intelligence-v1-authority`.
- Discarded Campaign Intelligence Integration SA authority was not merged.

### Gate disposition

- C04 obligation identity: passed.
- C04 numerator mapping: candidate `APPROVED | AUTO_APPROVED`, awaiting Technical-SA acceptance.
- Shared runtime: reusable with additive real `CAMPAIGN` subject and atomic root-current adaptation; no parallel runtime.
- `REPORTING-PV-01`: not proven for creator-published Collaboration media.
- `REPORTING-PV-02`: Brand-owned media allowlist proven; Campaign creator-media applicability not proven.
- `REPORTING-PV-03`: incomplete because C04 evidence lacks typed provider media/account/authorization-generation identity.
- Provider limitations do not block ASSETS.
- Circuit breaker: none.

### Focused verification

- Backend Prisma client generation completed locally in the task-owned ignored dependency directory; no schema or migration changed.
- Backend focused Vitest: 4 files, 40 tests passed (`campaign-query`, C04 production, C04 publishing, C04 read-model mapping).
- Frontend focused Vitest: 3 files, 22 tests passed (Campaign page model, canonical page, workspace/unavailable Reporting content).
- An initial backend test attempt before local Prisma generation collected no tests because the generated client was absent; it was not treated as a product failure and the exact rerun passed after generation.

### Publication checkpoints

Publication/fetch-back evidence is appended after each normal non-force checkpoint; the immutable external return carries the final branch SHA/tree.
