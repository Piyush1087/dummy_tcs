# C03_P3_BACKEND_RUNTIME_ACCEPTANCE_REPORT_V4

**RESULT = READY_FOR_SA_REVIEW. NEXT_AUTHORIZED_BOUNDARY = SA_REVIEW_ONLY.**

The single authorized correction is committed, pushed non-force, and fetched back. Opportunity middleware now establishes private response headers before guard rejection on all three canonical paths. A route-local Vary merge preserves CORS Origin when the unchanged successful-handler header metadata runs. Authentication, projections, services, schema, migrations, and CORS configuration are unchanged.

The real Nest regression verifies missing and invalid authentication return generic 401 responses without executing the collection service. Built-backend checks pass for those responses, public continuation, TEASER/LOCKED/AUTHORIZED projections, validation rejection, Application/Notification private responses, CORS preflights, rejected origin, and legacy Apply retirement without database mutation. Two materialized Notification payloads pass credential checks.

The full ordinary suite and production build were rerun against the published correction. V2 migration/Prisma/legacy evidence and V3 PostgreSQL/timeout evidence are retained explicitly, not represented as new execution. Prior bundles remain unchanged. Failed development-fixture attempts and the default-heap compiler attempt remain in the evidence with their resolutions. No additional source correction is authorized.

```text
RESULT = READY_FOR_SA_REVIEW
RECOVERY_AUTHORITY_SHA = 6cb664cf9361755e24bc85a9c600311301082739
P3_CORRECTION_BASE_SHA = 4b51d52de6d9206545b0a38497c7436bc9d3e095
P3_CORRECTION_SHA = 8bedbebf9712b6ffe0acb11339813787ef669e62
P3_CORRECTION_TREE = 0c9a87f688388533911730b4b77cbc08f75c640b
P3_RUNTIME_CORRECTION = OPPORTUNITY_PRIVATE_RESPONSE_HEADER_PLACEMENT
FILES_CHANGED = src/features/campaign-opportunities/campaign-opportunity.module.ts; src/features/campaign-opportunities/opportunity-private-response.test.ts
PROTECTED_OPPORTUNITY_UNAUTH_401 = PASS
PROTECTED_OPPORTUNITY_INVALID_AUTH_401 = PASS
CACHE_CONTROL = private, no-store
VARY_TOKENS = Origin, Authorization, Cookie (token/order-insensitive)
GENERIC_401_BODY = PASS
HANDLER_SHORT_CIRCUIT_REGRESSION = PASS
CORS_ORIGIN_VARY_PRESERVED = PASS
PUBLIC_OPPORTUNITY_PRIVATE_HEADERS = PASS
OPPORTUNITY_TEASER_HTTP = PASS
OPPORTUNITY_LOCKED_HTTP = PASS
OPPORTUNITY_AUTHORIZED_HTTP = PASS
LEGACY_APPLY_RETIREMENT_HTTP = PASS — 410 LEGACY_APPLICATION_ENDPOINT_RETIRED; no durable mutation
MATERIALIZED_NOTIFICATION_SECURITY = PASS — 2 materialized notifications; raw credential marker and field checks
OPPORTUNITY_SECURITY_CONTRACT = 4906 PASS / 9 guarded PostgreSQL skips / zero failures; PostgreSQL coverage retained from V3
P3_NOTIFICATION_TIMEOUT_DIAGNOSIS = HARNESS_TIMEOUT_ONLY — RETAINED_FROM_V3
FOCUSED_POSTGRESQL = 100/100 PASS — RETAINED_FROM_V3_PRE_CORRECTION
P3_ADDITIONAL_CONTENTION = 14/14 PASS — RETAINED_FROM_V3_PRE_CORRECTION
ADDITIONAL_POSTGRESQL = 62/62 PASS — RETAINED_FROM_V3_PRE_CORRECTION
FRESH_0_TO_79 = PASS — RETAINED_FROM_V2
LEGACY_74_TO_79 = PASS — RETAINED_FROM_V2
PRISMA_INTEGRITY = PASS — RETAINED_FROM_V2
LEGACY_PERSISTENCE_PRESERVATION = PASS — RETAINED_FROM_V2
MIGRATION_COUNT = 79
FINAL_MIGRATION_SHA256 = 69afa7a872131ad6f0ce80b5ba232c1df0a0010589089bae56ec213559d2b255
FINAL_MIGRATION_COMMITTED_BYTES = 5294
FULL_TEST_SUITE = 6188 PASS / 753 guarded skips / zero failures; 195 passed files / 54 skipped files; exit0; 307.685s
PRODUCTION_BUILD = PASS — npm run build exit0; 72.646s; byte-verified scratch source
STARTUP_SMOKE = PASS
SECURITY_DIFF_REVIEW = PASS
P3_AUTHORITY_CORRECTION_COUNT = 1
P3_TIMEOUT_RESIDUAL_LANE = 1
P3_RUNTIME_CORRECTION_COUNT = 1
P3_RUNTIME_CORRECTION_BUDGET_REMAINING = 0
COMMIT = 8bedbebf9712b6ffe0acb11339813787ef669e62
PUSH = PASS — NON_FORCE
FETCH_BACK_SHA = 8bedbebf9712b6ffe0acb11339813787ef669e62
CLEAN_WORKTREE = YES
PRODUCT_QUESTIONS = NONE
ARCHITECTURE_CONFLICTS = NONE
SECURITY_BOUNDARY_CHANGES = NONE — existing frozen privacy boundary made effective before guard rejection
P4_STARTED = NO
P5_STARTED = NO
AWS_CALLS = NONE
LIVE_PROVIDER_CALLS = NONE
PRODUCTION_ACCESS = NONE
RECOVERY_LEDGER_MODIFIED = NO
NEXT_AUTHORIZED_BOUNDARY = SA_REVIEW_ONLY
```

EVIDENCE_BUNDLE = C03_P3_BACKEND_RUNTIME_ACCEPTANCE_EVIDENCE_V4.zip

EVIDENCE_BUNDLE_SHA256 = 10c0138beb31f1048978cc8550d1e5a52ec45568599d614c3a6e48a6d21ac02c
