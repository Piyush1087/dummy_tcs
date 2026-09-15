# Creator Commercial Setup / Work Preferences V0 + Rate Card V0 — P0 Payout-Country Authority Recovery 2 Local Codex Prompt V1

`CREATOR_COMMERCIAL_SETUP_AND_RATE_CARD_V0_P0_PAYOUT_COUNTRY_AUTHORITY_RECOVERY_2_LOCAL_CODEX_PROMPT_V1`

## 1. Objective

Continue the same Creator Commercial Setup / Rate Card autonomous program after the second correct P0 circuit-breaker stop.

```text
PRIOR BLOCKER = VALIDATED_PAYOUT_COUNTRY_OWNER_CONTRACT_REQUIRED
ROOT CAUSE = PRODUCT AMENDMENT 1 OVER-SPECIFIED PROVIDER VALIDATION
PRODUCT CORRECTION = ACTIVE CANONICAL BANK DESTINATION IS SECOND COUNTRY AUTHORITY
```

Adopt Product Amendment 2, recover P0, and then continue autonomously through P1→P2→P3→P4 under the original prompt and Recovery 1. Do not pause between successful packets.

## 2. Authority to read

Read completely:

1. original autonomous prompt at commit `ab6e4f86b2b1f551276bcd33b3b30818bd26d769`, blob `4d5efe616332f29a61324b901765fbc3592c3b19`;
2. normalized original authority at `700760bc9ab398ea24f5dad0a846a5998e953131`;
3. Product Amendment 1 at commit `1ac5662e710e1ca8d198fca72c24dc10d6a2cec8`, blob `adb6756a3d7b58ce15b0d0a07b67f19ed43ba592`;
4. Recovery 1 at commit `3eeae6d007188c201f080660d6709ce63bfa0b05`, blob `696132f3ba793bb1aa92a80196e1a1520b3485fa`;
5. Product Amendment 2 from the immutable commit containing this prompt;
6. exact Work Preferences V2 and Rate Card V2 registers;
7. all applicable repository standards and accepted C05/C06/C04/Creator predecessor contracts.

Amendment 2 supersedes only Amendment 1's requirement for a separately provider-validated country assertion. Every other accepted rule remains active.

## 3. Exact preserved state

Before mutation, fetch/prune and verify:

```text
BACKEND_SHA = 6206f43c6a13c304c971b810e1dd99a20aaaa11f
BACKEND_TREE = 533f543612b856cfaf3b57769fe0b5541b803c3f

FRONTEND_SHA = c505c0679e39effdd9608e319112591d5ae4c079
FRONTEND_TREE = 18dd8ed798aae509baa7d0d51ab8e31d7ac2dbbd

LOCAL_UNPUBLISHED_AUTHORITY_MERGE = 64b17471386dae463c500bb76d6604a35ad7558c
LOCAL_UNPUBLISHED_AUTHORITY_TREE = 0aeda78b821f7d4981d25121cc00de4e7f7a93aa
LOCAL_MERGE_PARENT_1 = 700760bc9ab398ea24f5dad0a846a5998e953131
LOCAL_MERGE_PARENT_2 = 08c72433b32ed8a199d29ae8875d668dc2f0eddf

REMOTE_RECOVERY_1_AUTHORITY = 3eeae6d007188c201f080660d6709ce63bfa0b05
REMOTE_RECOVERY_1_TREE = 922f4353b8fc055f86364cee9031477cee05b2db

MIGRATIONS = 102
MIGRATION_HEAD = 20260915100000_creator_brand_canonical_profile_revision
MIGRATION_HEAD_SHA256 = ec6484427c24d5755549ff9e71bae989f5ff592a6fc5da953ca07494b8744452
```

Expected task root remains:

`C:/Users/piyus/Documents/Codex/2026-09-10/markdown-instagram-intelligence-external-local-codex/work/creator-commercial-setup-rate-card-v0`

All three worktrees must be clean. No provisional source changes should exist. If exact recovery state differs, do not reset, clean, stash, discard, or reconstruct over it. Stop with:

```text
RESULT = COMMERCIAL_SETUP_P0_RECOVERY_2_STATE_MISMATCH
```

## 4. Authority reconciliation

The new remote commercial authority descends from `3eeae6d…`; the preserved local merge contains Creator Brand authority.

After exact verification, perform a normal conflict-free ancestry-preserving merge of the new remote authority into the preserved local authority merge. Preserve both histories and the single ledger. Do not publish until P0 passes.

## 5. Required payout-country read contract

Add the smallest Settings/Payout-owned, provider-neutral, non-secret read port that resolves:

```text
AVAILABLE | ABSENT | CONFLICT
```

### AVAILABLE requires

- exact Creator ownership;
- exactly one active primary non-disabled bank-account destination;
- exact destination ID and destination version;
- valid country/currency;
- consistency with current legal-profile country/payee type when present;
- deterministic authority fingerprint.

It may return only bounded non-secret authority fields. It must not return bank numbers, encrypted payloads, masked account data, provider references, or diagnostic payloads.

### ABSENT

No active primary bank destination. Fall back to Creator-declared country.

### CONFLICT

Multiple primaries, invalid country/currency, legal/destination mismatch, or unresolved version inconsistency. Do not fall back silently. Project a recovery path to Settings/Payouts and make monetary Rate Card values unavailable.

## 6. Independence from payout readiness

Do not require or infer:

- transfer `READY`;
- `BANK_VALIDATED`;
- cooling completion;
- provider-product readiness;
- C04 eligibility.

Do not combine profile-level validation with current destination country. Do not change C06 readiness semantics, provider state, or C04 gate.

The accepted claim is only that country comes from the current canonical bank destination entered and owned in Settings/Payouts.

## 7. Rate Card authority fingerprint

Freeze executable contracts so each Rate Card revision binds to:

```text
COUNTRY_AUTHORITY_SOURCE
SOURCE_REFERENCE
SOURCE_VERSION
COUNTRY
CURRENCY
```

Manual source binds the exact Work Preferences revision. Bank source binds exact destination ID/version and relevant legal-profile version. Future KYC is reserved and has no V0 producer.

Every Rate Card consumer must validate the fingerprint against current authority.

On mismatch:

- do not expose old monetary values as current;
- do not relabel or convert;
- project `MONETARY_RATES_REQUIRE_REENTRY`;
- preserve currency-independent rights/payment preferences;
- allow Owner/Manager to reconcile under the Amendment 1 reset rules;
- keep Assistant read-only;
- never mutate on GET.

If a safe existing shared transaction hook naturally allows immediate reconciliation after a Settings bank mutation, it may be reused. Do not build a new scheduler/event platform or widen Settings mutation scope merely to achieve eager reconciliation.

## 8. P0 evidence requirements

Prove by contract/unit/architecture tests:

- configured current bank destination provides country authority even when transfer readiness is pending/cooling/unsupported;
- transfer readiness remains unchanged and independently truthful;
- replacement/version change invalidates the previous fingerprint;
- disabled destination yields `ABSENT`;
- no destination yields `ABSENT` and manual country wins;
- duplicate/mismatched/invalid records yield `CONFLICT` and never manual fallback;
- no secret fields cross the port;
- current old-currency monetary values fail closed on fingerprint mismatch;
- same-currency authority changes preserve valid monetary values;
- C04 and payout state machines remain unchanged;
- KYC is not fabricated;
- all original P0 Product/vocabulary/role/build/lint/format/diff/security/predecessor gates pass.

No C06 schema/migration is expected. If current exact destination/version/legal fields cannot implement this port without a C06 schema or payout-state-machine change, stop:

```text
RESULT = PAYOUT_COUNTRY_AUTHORITY_SCOPE_EXPANSION_REQUIRED
```

## 9. Continuation and publication

If recovered P0 passes:

1. publish backend and reconciled authority P0 checkpoints by normal non-force push;
2. fetch/prune and prove exact SHA/tree/ancestry equality;
3. record both prior P0 stops as Parent-resolved authority circuit breakers, not correction cycles;
4. record `P0 = ACCEPTED` and `P0_CORRECTION_CYCLES_USED = 0`;
5. continue autonomously through the complete original P1→P4 scope.

P1/P2 must implement and PostgreSQL-test the read port/fingerprint behavior together with canonical Work Preferences and Rate Card persistence. P3/P4 must browser-test manual, bank-authority, conflict, same-currency, cross-currency-reset, Assistant read-only, and Settings recovery-path states.

## 10. Correction accounting

```text
ORIGINAL_P0_STOP = PRODUCT CIRCUIT BREAKER; 0 CORRECTIONS
RECOVERY_1_STOP = TECHNICAL AUTHORITY CIRCUIT BREAKER; 0 CORRECTIONS
RECOVERY_2_PRIMARY_RUN = 1
RECOVERY_2_NORMAL_CORRECTION_CYCLES_AVAILABLE = 2
P1–P4 BUDGETS = UNCHANGED
```

## 11. Prohibited work

Preserve all original prohibitions. Additionally do not:

- add provider validation merely to establish country;
- claim bank/KYC/identity verification;
- expose secret or masked bank details;
- change C05/C06 transfer readiness;
- weaken the C04 agreement/payout gate;
- mutate on GET;
- build a scheduler/event platform;
- fabricate KYC;
- begin Audience V1, Portfolio, or Media Kit;
- merge to `development` or deploy.

## 12. Immutable return

Return:

`CREATOR_COMMERCIAL_SETUP_AND_RATE_CARD_V0_AUTONOMOUS_EXTERNAL_LOCAL_CODEX_REPORT_V1`

Preserve every original report section and Recovery 1 sections AB–AI. Add:

```text
AJ. Amendment 2 and recovery-state verification
AK. payout-country read-port contract and exact field boundary
AL. AVAILABLE/ABSENT/CONFLICT matrix
AM. destination/version/legal-profile fence proof
AN. transfer-readiness independence proof
AO. Rate Card authority-fingerprint proof
AP. mismatch fail-closed/no-mutation-on-read proof
AQ. C05/C06 schema and behavior non-expansion proof
```

On success end with the original success outcome. Do not self-authorize later work.
