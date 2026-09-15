# Creator Commercial Setup / Rate Card V0 — developer handoff

## Authority and scope

Read the single EXECUTION_LEDGER and P0–P4 evidence in this directory, archived original prompt, exact Work Preferences V2 / Rate Card V2 registers, Amendments 1/2 and Recovery 1/2. This is manual commercial setup, not Intelligence, quoting, canonical Campaign/Collaboration terms or payout eligibility. Future Audience V1, Portfolio, Media Kit and post-click Work with Creator remain unauthorized/not started. Final acceptance belongs to the Technical SA / Program Orchestrator.

## Owning surfaces

Backend `src/features/creator-commercial-setup/`: strict contracts; independent Work Preferences and Rate Card repositories/services/controllers/modules and OpenAPI. Prisma models `CreatorWorkPreferences`/`CreatorWorkPreferencesRevision` and `CreatorRateCard`/`CreatorRateCardRevision`; separate additive migrations 103/104. Current canonical fields and immutable actor-attributed snapshots use composite owner/workspace foreign keys, CAS, actor-bound idempotency, deferred current/audit consistency and exact internal owner-scope purge. No hidden profile JSON or Intelligence current.

Settings owns `CreatorOperationalReadModule`, payout-country adapter and shipping readiness adapter. Their read boundary selects only bounded authority/readiness material. C06 readiness service remains unchanged. Existing Team resolver/action policy owns current active Owner/Manager/Assistant authorization and re-resolution under the Team lock. Existing payout advisory fence serializes competing canonical destination changes without a new lifecycle.

Frontend `src/features/creator-commercial-setup/`: strict client schemas; scoped authenticated clients; combined hook with partial/last-good/error/conflict handling; two independent dirty-draft forms; single canonical Team route guard; composition-only page. Shared AppShell adds one Commercial Setup sidebar/drawer destination and keeps five bottom items. No source requirement or production auth bypass.

## API / revision contract

- GET/PUT `/api/v1/creator/commercial-setup/work-preferences`; command: expectedRevision, expectedRateCardRevision, confirmMonetaryReset, UUID idempotencyKey, strict values.
- GET/PUT `/api/v1/creator/commercial-setup/rate-card`; command: expectedRevision, expectedWorkPreferencesRevision, current authorityFingerprint, UUID idempotencyKey, strict values. No caller currency, owner, workspace, actor, arbitrary industry or UGC price.
- GET private/no-store; active Team read. Owner/Manager edit; Assistant read only. 400 invalid command, 401 unauthenticated, 403 denied/inactive, 409 stale/conflicting request. Idempotent replay returns current canonical projection without another write. Never retry a changed command under the same key.
- Work Preferences nullable questions preserve unanswered truth; default-only missing availability is ACCEPTING_COLLABORATIONS. Four exact industry IDs, deduplicated/sorted/disjoint. PAUSED_UNTIL requires future date; other statuses require null date.
- Six independent monetary items: four frozen atomic format references and two add-ons. Enabled positive safe integer minor units, disabled null. Optional rights YES may carry positive duration; NO/unanswered must not. Advance 0/25/50/75/100 and NET_7/15/30/45/60. No FX, IMMEDIATE, arbitrary terms, usage grant or agreement mutation.

## Country / money transitions

Reserved future verified KYC has no V0 producer. Current active primary canonical bank destination outranks last Creator declaration regardless of transfer readiness. ABSENT falls back; CONFLICT never falls back and projects Settings recovery. Valid bank authority binds exact Creator, destination/latest version and relevant legal version/country/payee consistency; no provider validation/transfer READY requirement.

Manual binding identifies exact Work Preferences ID/revision. Bank binding identifies exact destination ID/version/legal version. Fingerprint binds source/reference/version/legal version/country/currency. Every consumer compares stored/current fingerprint. On mismatch GET hides six monetary values, keeps currency-independent terms and MONETARY_RATES_REQUIRE_REENTRY; GET does not write/relabel/convert.

Same-currency authorized rebind retains money and prior history. A manual cross-currency country change with money requires explicit confirmation and both revision CAS values; confirmation atomically clears six prices while preserving rights/payment and audit. Settings bank changes remain Settings-owned. Authorized Rate Card reconcile first preserves/clears according to current currency; enter new prices on a subsequent deliberate revision. No scheduler or blocking change to bank lifecycle. Bank-first Work Preferences setup uses current locked bank country; an existing declaration cannot override it.

## Reproduce verification safely

Use repository `npm ci`, Prisma generate/validate, production build and scoped lint/formatter. Use only disposable loopback PostgreSQL 17 with reviewed migrations and synthetic ignored configuration. No production migration/startup/deployment or provider/model call. Serialize DB tests and stop runtime consumers before Windows Prisma DLL regeneration.

Commercial PostgreSQL guards: CREATOR_WORK_PREFERENCES_DATABASE_TEST, CREATOR_RATE_CARD_DATABASE_TEST; actual compiled JWT/session HTTP exercised by the Work Preferences matrix. P4 populated-ownership test guard CREATOR_COMMERCIAL_INTEGRATED_DATABASE_TEST accepts only the exact task-owned upgraded fixture route. Upgrade tests prove 102→103 and 103→104 counts/sorted row digests. Do not run these guarded tests against developer/production databases.

Frontend focused tests: repository Vitest config plus `src/features/creator-commercial-setup`. Full suite uses process-only VITE_API_URL empty; production preview uses ignored local loopback API configuration. Browser scripts in frontend/scripts use installed Edge, explicit synthetic fixture opt-in and exact prefixed owner/database guards. Real password/session/JWT remains in memory only. Final assess-only mode checks existing exact canonical rows without mutating them. No browser state/screenshot/token/log/media persistence.

Configuration names only: DATABASE_URL, JWT_SECRET, JWT_ISSUER, JWT_AUDIENCE, AUTH_OTP_PEPPER, SETTINGS_FIELD_ENCRYPTION_KEY, STAGE, PORT, CORS_ORIGINS, POSTMARK_SERVER_TOKEN, POSTMARK_AUTH_OTP_TEMPLATE_ID, POSTMARK_PASSWORD_RESET_TEMPLATE_ID, AWS_EC2_METADATA_DISABLED, OFFERING_PRICE_REFRESH_ENABLED; frontend VITE_API_URL/VITE_STAGE; test-only CREATOR_COMMERCIAL_BROWSER_PASSWORD/FIXTURE/PROOF/ASSESS_ONLY. Synthetic unused provider-like boot placeholders do not authorize external calls. Do not add/return values.

## Purge / ownership

Internal CREATOR_OWNER_SCOPE_PURGE validates exact workspace/owner and removes only that aggregate/audit chain. Rate Card purge leaves Work Preferences; Work Preferences purge leaves other Creator/source/Settings/historical truth. No new public delete route. Accepted Settings remains lifecycle owner. Preserve nine supersession terms: Campaign/Add Brief/final Collaboration C04 decisions and agreements prevail over reference preferences/rates.

Immutable checkpoint SHAs/trees, command results, complete changed-file and ordered migration/checksum inventory, publication equality and cleanup are in P4/final evidence. Do not infer acceptance from remote presence; route final report to the Technical SA / Program Orchestrator.
