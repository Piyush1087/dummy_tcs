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

- Authority publication commit: `88a47f91a4bc9d78618b7037afe49d46359e5838`
- Authority publication tree: `b7b660c9e3c43372562f4ec194b368761d957dd5`
- Push mode: normal, non-force.
- Fetch-back: local and `origin/program/campaign-reporting-v1-authority` SHA/tree were exactly equal at the publication checkpoint.
- The immutable external return carries the final evidence-checkpoint branch SHA/tree.

## Run B / P1→P4 authorization

- Runner: External Local Codex
- Date: 2026-09-16 Asia/Calcutta
- P0 authority checkpoint: `29488282baf227500db97b319049994f50f0c51a`
- P0 authority tree: `db95535ab9eed6aacf08d782b5859fe06aeebad2`
- P0 Technical-SA adjudication: accepted exactly as transferred.
- P1→P4 autonomous implementation: authorized.
- Runner prompt raw SHA-256: `bd50719f8c0991cb8dc925167a1d5dd507402adea2fd55cd8b52d62f0c3a7e91`
- Backend/frontend mutation had not started at this authority checkpoint.

### Convergence checkpoint

- Backend convergence commit/tree: `ebe1b4a8faa6dab59fb924b4c42be8f9e3f1e6f2` / `5398273a97223873e5f97db66163e8829eb81a51`.
- Backend exact parents: freeze `129b291ecbca4a1e79451215a81726000cfb5bff`; Instagram `fef32afb0fdef52f00c7c22b3d0a85967a68fded`.
- Frontend convergence commit/tree: `3d04cd9c84585218fcdc0f1412662a165c38400c` / `a3d6a32f566eeed9b608a7b5a2a4d1ec0b238e6f`.
- Frontend exact parents: freeze `6ea628b09817c4784a248658ddfc0202a13fbb00`; Instagram `5866d0ac82f742957f53a8db2144a9a166628b75`.
- Both branches were pushed normally and independently fetched with exact local/remote SHA/tree equality.
- Backend converged migration directory count: `98`; inventory SHA-256: `153f480d7e3346001d42eaf12796240302ce58f80beb850f4116b21f17f843ee`.
- Backend build and Prisma generate/validate passed; focused convergence tests: 45 passed.
- Frontend build passed; focused convergence tests: 50 passed.

### Run B circuit breaker

- `BLOCKER = CAMPAIGN_OBJECTIVE_AUTHORITY_GAP`
- P1, P2, P3 and P4 remain not started.
- The converged Campaign model exposes legacy objective vocabularies but no accepted exact total mapping to `AWARENESS | TRUST | ASSETS | ACTION`.
- The runner prompt forbids inventing that mapping inside Reporting.
- No Reporting implementation, schema migration, API or frontend mutation was made after convergence.
