# P2 — Rate Card canonical persistence and API

P2 passes for explicitly authorized autonomous progression, not final Product acceptance. Primary runs 1; formal corrections 0. Backend `4baa9768fb01845aa4a907b82b54d46101559487`, tree `1ab92e21c3e7167f18b8b66efeec1cf4cdc9d219`, parent P1 `5f3894880194a4a8c4af6958c071481d180ce6ec`. Sixteen files, 1393 insertions, one deletion. Exact inventory: `git diff --name-only 5f3894880194a4a8c4af6958c071481d180ce6ec 4baa9768fb01845aa4a907b82b54d46101559487`.

## Ownership, authority and mutation

Rate Card has independent relational fields, repository/persistence module, service, controller, strict schemas, OpenAPI and immutable actor-attributed revision history. Work Preferences remains a separate aggregate. The narrowly scoped same-transaction reconciliation port is implemented in Rate Card persistence; it imports no Work Preferences service/module, preventing a reciprocal Nest module cycle. No generic platform or Intelligence current is introduced.

GET/PUT `/api/v1/creator/commercial-setup/rate-card` reuse canonical JWT/session/Team contracts. Owner/Manager edit, Assistant reads. Exact revision, Work Preferences revision and current authority fingerprint bind the write. Actor-bound idempotency returns current canonical state with stable rows; stale/injected actor/subject/revision/key rejects. Six independent positive safe-integer minor-unit lines; exact references/payment terms; usage duration only when rights YES; UGC/barter read-only from Work Preferences; no UGC rate, manual currency, quote, grant or agreement.

Binding stores country source/reference/version/legal version/country/currency/fingerprint only. Current Settings bank authority is independent of transfer readiness. A mismatched GET hides all six prices and projects MONETARY_RATES_REQUIRE_REENTRY without writes, retaining independent rights/payment preferences. Owner/Manager reconciliation write first preserves same-currency money or clears cross-currency money; subsequent deliberate revision enters new prices. Manual country transition uses the Work Preferences transaction and both revisions: unconfirmed currency change rejects both; confirmed reset clears all money, preserves independent terms and prior audit snapshots. Bank country stays Settings-controlled; invalid authority never falls back; KYC remains reserved/unproduced.

## PostgreSQL and regression gates

Task-owned PostgreSQL 17.11 container, loopback 55512, tmpfs/no durable volume; developer services untouched. `npm run db:migrate:deploy` and `npx prisma migrate status`: clean `c05_creator_commercial_p2_clean` applies all 104 migrations and is current. Independent migration head `20260915210000_creator_rate_card_canonical_revision`, LF SHA-256 `e14e9bfcb8c61b521da74a484794a91877ca04d42d72beb87a4ab0e81dd7d0cf`. Reviewed additive constraints and deferred audit consistency; no accepted migration changed or external-owner backfill.

Populated 103→104 test: 1/1 PASS; all 197 predecessor public-table count/sorted-row digests, including existing Work Preferences, identical; new Rate Card tables empty. Together with P1 populated 102→103 preservation of all 195 original tables this proves the full ordered 102→103→104 chain. Final P4 additionally rebuilds and verifies the integrated route.

Changed-surface serialized matrix: 44/44 PASS (13 actual Work Preferences/JWT API, six multi-assertion Rate Card PostgreSQL, 24 predecessor contracts and strict Rate Card OpenAPI). Additional atomic validation/Settings bank authority/readiness matrix: 32/32 PASS. Every one of six lines tests enable/disable/null/zero/negative/fraction/max-safe/overflow independently; usage/payment vocabularies exhaustively asserted.

Clean 104 route: 19/19 actual PostgreSQL tests PASS. Real compiled Nest JWT/session HTTP now proves both APIs: all roles GET 200; Assistant PUT 403; Owner/Manager PUT 200; replay stable; anonymous 401, inactive 403, stale 409, injected subject 400; other Creator revision zero and query substitution cannot change subject. PostgreSQL asserts same-currency/manual reset, bank mismatch no-write reads, bank disable/conflict, exact history, concurrent one-winner CAS, audit immutability and target-only Rate Card purge preserving another Creator and Work Preferences/Settings ownership.

Affected shared PostgreSQL matrix serialized with explicit guards on the populated upgraded route: Content 7, Audience 6, Creator Brand 8, Brand execution 12, Brand Intelligence 9, Team 5, owner scope 3 = 50/50 PASS. Command uses repository Vitest config and `--fileParallelism false`, never unrelated full suites.

## Build, runtime, hygiene and publication

Prisma generate/validate PASS (6.19.3). Latest production build/typechecked source PASS. Scoped ESLint and Prettier PASS; diff/staged integrity PASS. An additional non-gate full-project `tsc --noEmit --incremental false` exceeded Node's default approximately 2 GiB heap; production compilation was rerun serialized with repository-process-only NODE_OPTIONS `--max-old-space-size=4096` and passed. No system configuration/software change. Initial disposable-db creation used an absent default PostgreSQL role; corrected to the container's configured user and clean migration/status passed. A disabled-bank fixture was corrected to respect the accepted C05 disabled-state constraint; six DB tests rerun green. No production gate weakened; formal correction cycles zero.

Latest production boot 6062: `/health/live` 200 `{"status":"ok"}`; `/health` 200 `{"status":"ok","info":{"database":{"status":"up"}},"error":{},"details":{"database":{"status":"up"}}}`. Task backend stopped. Databases retained only for authorized continuation/final cleanup.

Sixteen-file/staged secret/private-key/provider-token/signed-locator scan PASS, zero findings. No secret values in evidence, no tracked .env/raw media/browser state/runtime artifact. Package/lock/Docker/C04/C06/Campaign source unchanged. Frontend clean/fetched exact `c505c0679e39effdd9608e319112591d5ae4c079` / `18dd8ed798aae509baa7d0d51ab8e31d7ac2dbbd`.

Backend normal non-force push plus independent fetch/prune: local/fetched SHA/tree exact as above; original Creator Brand ancestry and clean status verified. Containing authority checkpoint is recorded subsequently to avoid self-reference. Live Graph/model calls/Meta mutations NONE. No development merge, deployment or later capability work.
