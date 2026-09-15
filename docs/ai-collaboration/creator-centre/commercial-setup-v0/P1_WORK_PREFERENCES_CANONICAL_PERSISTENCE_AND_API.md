# P1 — Work Preferences canonical persistence and API

P1 passes for the explicitly authorized autonomous progression, not final Product acceptance. Primary runs 1; formal corrections 0. P0 published backend `24c781f292fa80278d35056826db0903aff198e6` and authority `5aa43e619fe9a2d09ea5360429931b107ea796e9` were preserved.

## Ownership and implementation

Backend checkpoint `5f3894880194a4a8c4af6958c071481d180ce6ec`, tree `4d057eacf12e8919b836c0ac3e74a038079d5843`, parent P0. Twenty changed files; 1762 insertions, 41 deletions. Exact inventory is `git diff --name-only 24c781f292fa80278d35056826db0903aff198e6 5f3894880194a4a8c4af6958c071481d180ce6ec`. Prisma formatting accounts for mechanical alignment changes; external semantic additions are relation backreferences only. Existing Creator Brand migration-count harness now checks the actual repository migration inventory instead of hardcoding the prior head.

Work Preferences has its own canonical relational aggregate, revision and actor-attributed append-only snapshot history. GET/PUT `/api/v1/creator/commercial-setup/work-preferences` use existing JWT sessions and canonical Team resolution. Owner/Manager edit; Assistant reads. Strict runtime schemas reject injected subject/role/unknown fields. Revision CAS, locked actor re-resolution, existing payout advisory fence and actor-bound idempotency protect writes; replay returns current canonical state without another revision. No source/Instagram prerequisite or production auth bypass.

Settings owns the bounded payout-country adapter: selected non-secret IDs/versions/country/currency/legal fences only, exactly one active primary bank, latest destination version consistency, AVAILABLE/ABSENT/CONFLICT. No transfer readiness/provider validation requirement. Shipping readiness validates the existing Settings contact schema internally and exposes only READY/NEEDS_SETUP. Payout readiness reuses the unchanged canonical C06 read service; KYC remains COMING_SOON. An optional same-transaction Rate Card reconciliation port is declared for P2, not a second lifecycle.

## PostgreSQL and affected regression evidence

Existing Docker/PostgreSQL 17.11; task-owned loopback port 55512, tmpfs data, no durable volume. Developer container/database untouched. Synthetic ignored runtime configuration; names only, never values. Clean deployment: `npm run db:migrate:deploy`, `npx prisma migrate status`: all 103 migrations applied/current; only existing plpgsql extension required. Reviewed migration LF SHA-256 `49627b44e53a43a792afb82a7d160f6f8b27c0e94771079904d8e1da7de07b62`.

`CREATOR_WORK_PREFERENCES_DATABASE_TEST=true node --env-file=.env node_modules/vitest/vitest.mjs run --config vitest.config.ts src/features/creator-commercial-setup/work-preferences/work-preferences.postgres.test.ts`: 13/13 PASS. Real compiled Nest JWT/session HTTP: all roles GET 200; Owner/Manager PUT 200; Assistant PUT 403; anonymous 401; inactive 403; stale 409; malicious identity 400; other Owner remains revision zero. Canonical values, availability/date cases, stable replay, immutable audit, concurrent CAS, bank fence/readiness independence, target purge and external-row preservation pass.

Populated accepted-102 archive upgrade: accepted Creator Brand 8/8, Content 7/7 and Audience 6/6 passed at their exact predecessor schema. The 102-to-103 upgrade test passed: counts and sorted-row digests for all 195 predecessor public tables unchanged through migration and first Work Preferences creation. Archive LF-normalized Git blob content matches all 106 exported Prisma files; raw Windows CRLF differs transparently, not migration content drift.

Shared PostgreSQL matrix serialized via `--fileParallelism false` on the upgraded isolated route: Content 7, Audience 6, Creator Brand 8, Brand execution 12, Brand Intelligence 9, Team 5, owner-scope 3: 50/50 PASS, seven files. Guards enabled explicitly; initially skipped hostname-gated Content/Audience were rerun with localhost against the same disposable route, not waived.

P1/P0 affected unit contract/readiness/role/contact/Campaign matrix: 126/126 PASS, 11 files. Latest shipping canonical-validity cases 4/4, Work Preferences readiness 9/9, strict generated OpenAPI 1/1 PASS. Strict read/write OpenAPI is schema-derived without dependency changes.

## Build, health and hygiene

Prisma generate and validate PASS (6.19.3). Latest production build PASS. Scoped ESLint and Prettier PASS; `git diff --check` and staged check PASS. Harness-only argument/matcher, migration-head count and compile-before-HTTP ordering repairs consumed no formal correction. The canonical shipping field-selection typo was fixed and all 13 actual DB/API tests rerun after the production rebuild.

Latest production boot on loopback 6062: `/health/live` 200 `{"status":"ok"}`; `/health` 200 `{"status":"ok","info":{"database":{"status":"up"}},"error":{},"details":{"database":{"status":"up"}}}`. Task backend stopped after proof. Disposable database retained only for continuation and final cleanup.

Staged 20-file secret/private-key/provider-token/signed-locator scan PASS: zero findings; no secret values included. No raw media, auth state, runtime artifact or .env tracked; existing `.env.example` is unchanged. Package/lock/Docker/C04/C06/Campaign production surfaces unchanged. Frontend remains clean at `c505c0679e39effdd9608e319112591d5ae4c079` / tree `18dd8ed798aae509baa7d0d51ab8e31d7ac2dbbd`.

Backend normal push and independent fetch/prune: local/fetched SHA and tree exactly equal to the checkpoint above; original Creator Brand backend ancestor verified. Authority containing commit is recorded in the subsequent packet/report to avoid self-reference. Live Graph/model calls and Meta mutations NONE. No development merge/deployment or later capability work.
