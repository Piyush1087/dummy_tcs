# Brand Payouts P2 — Activity Detail Identifier Circuit Breaker V1

`BRAND_PAYOUTS_P2_ACTIVITY_DETAIL_IDENTIFIER_CIRCUIT_BREAKER_V1`

## Status

```text
P2_RUNTIME_BROWSER_EVIDENCE_V4 = REVIEWED
P2_ACTIVITY_DETAIL_PUBLIC_REFERENCE_MISMATCH = CONFIRMED
BP-P2-FIRST-VERTICAL-SLICE = IMPLEMENTED_PENDING_ACCEPTANCE_BLOCKED
P2_SOURCE_CHANGE = NOT_AUTHORIZED_UNDER_CURRENT_CORRECTION_BUDGET
P3 = NOT_STARTED
```

This is a Systems Architect evidence review and bounded authority request. It is not itself source-correction authority.

## Reviewed immutable inputs

| Input                 | Commit                                     | Tree / status                              |
| --------------------- | ------------------------------------------ | ------------------------------------------ |
| Backend               | `119397ff6836ad12846c1e948409d8d49185c408` | `73521762dfeaf703b301e7a61c17cbda97d797a9` |
| Frontend              | `7ff0a39470316215496dece91f717593e98c89b5` | `8661f04b7aad64576775968af6b1f0eceaa34c84` |
| V4 evidence           | `09febd240b56c1b9d53ddb5417e57a06a45ea8fb` | `bb35b5c78728932128cc2d0e3ebe37e67415c0ea` |
| P0 contract base      | `b19752e476f85509ac2a895ffde6f17180dec7ee` | accepted                                   |
| P1 backend read       | `60385abbd12d5a363615100c463ac6755ce848ea` | accepted                                   |
| SA autonomy amendment | `3e1120dcf361b3046c97b6ad0cc5c08e6ec2e71e` | two bounded corrections per phase          |

The V4 commit is a direct descendant of the V4 runner authority and changes only its report plus evidence directory. All JSON parses, all 194 indexed artifact hashes, the 195-file commit scope, and `git diff --check` pass.

## Accepted identifier contract and root cause

The P0 contract register and accepted architecture define:

```text
GET /api/v1/brand/payouts/activity/:activityId
```

They also define `activity_id` as the stable namespaced API identity used for pagination and detail lookup. `public_reference` is a separate Creator Shop display/support reference.

The committed implementations currently disagree only at the frontend link boundary:

| Boundary                       | Committed behavior                                                               | Contract result |
| ------------------------------ | -------------------------------------------------------------------------------- | --------------- |
| Activity list payload          | Carries distinct `activity_id` and `public_reference`                            | Correct         |
| Frontend `PayoutsActivity.tsx` | Routes with `item.public_reference`                                              | Incorrect       |
| Frontend API client            | Encodes the supplied detail identifier unchanged                                 | Correct         |
| Backend detail parser          | Accepts the stable `activity_id` shape and scopes lookup to the authorized Brand | Correct         |

V4 proves both lifecycle and money-movement records: the public reference returns 404 while the same record's canonical `activity_id` returns 200 for Owner and Finance. Cross-Brand probes remain 404.

The smallest contract-preserving correction is therefore:

```text
detail URL/query identity = item.activity_id
visible/reference copy = item.public_reference
backend parser = unchanged
```

Broadening the backend parser to reinterpret display references is not recommended. It would enlarge an accepted and security-tested lookup contract when the frontend already receives the correct stable ID.

## Required bounded authorization envelope

Authorize exactly one additional P2 correction with this ceiling:

```text
MAX_FRONTEND_PRODUCTION_FILES_CHANGED = 1
AUTHORIZED_PRODUCTION_FILE = src/features/brand-payouts/components/PayoutsActivity.tsx
AUTHORIZED_TARGETED_TEST_FILE = src/features/brand-payouts/brand-payouts-p2.test.ts
BACKEND_SOURCE_CHANGES = NOT_AUTHORIZED
API_CONTRACT_CHANGES = NOT_AUTHORIZED
SCHEMA_OR_MIGRATION_CHANGES = NOT_AUTHORIZED
PROVIDER_ACTIONS = NOT_AUTHORIZED
P3 = NOT_AUTHORIZED_UNTIL_P2_ACCEPTS
```

The regression must use intentionally different `activity_id` and `public_reference` values and prove that the link target contains the encoded `activity_id` while user-facing reference text remains the `public_reference`.

After source gates pass, a fresh V5 local-runtime/browser package must confirm working activity detail for lifecycle and money-movement rows, Owner and Finance access, fail-closed cross-Brand behavior, and complete the V4 items left unfinished by the circuit breaker: activity keyboard/Back/refresh behavior, pagination exhaustion, applicable Settings compatibility navigation, and final safe-area checks.

## V4 evidence retained

- 162 viewport-state Axe scans: zero serious or critical findings.
- Prior bootstrap and contrast failures: not repeated.
- HTTP/RBAC: 178 assertions, 64 GET requests, nine real password logins.
- Frontend schema validation: 31 live responses.
- Financial read purity: canonical hashes unchanged across the read lanes.
- PostgreSQL 17.11: all 74 existing migrations applied to a disposable runtime; no migration created or edited.
- Source changes, provider actions, and P3 work: none.

## Circuit-breaker basis

The autonomy amendment permits at most two distinct bounded corrections per phase and explicitly requires a stop when more than two are needed. Both P2 correction slots have already been used. This new identifier mismatch is a third distinct source defect, so the Systems Architect may diagnose and bound it but may not patch it without a new explicit authority envelope.

```text
P2_ACTIVITY_DETAIL_IDENTIFIER_CORRECTION_AUTHORITY = REQUIRED
P2_ACCEPTANCE = NOT_SET
P3 = NOT_STARTED
```
