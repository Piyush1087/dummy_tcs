# Creator Commercial Setup / Work Preferences V0 + Rate Card V0 — P0 Currency Authority Recovery and Autonomous Continuation Local Codex Prompt V1

`CREATOR_COMMERCIAL_SETUP_AND_RATE_CARD_V0_P0_CURRENCY_AUTHORITY_RECOVERY_LOCAL_CODEX_PROMPT_V1`

## 1. Role and objective

You are the external Local Codex runner continuing the accepted Creator Commercial Setup / Rate Card V0 program.

The first autonomous run stopped correctly before implementation with:

```text
RESULT = COMMERCIAL_SETUP_TRUE_CIRCUIT_BREAKER
BLOCKER = RATE_CARD_CURRENCY_AUTHORITY_REQUIRED
P0_CORRECTION_CYCLES_USED = 0
```

Parent has now resolved the Product ambiguity. Adopt the new Product amendment, recover P0, and—only if every P0 gate passes—continue autonomously through P1→P2→P3→P4 under the original autonomous prompt.

Do not pause between successful packets. Return only for a defined circuit breaker, exhausted correction budget, or final P4 evidence.

## 2. Governing authority

Read completely:

1. the original autonomous prompt at commit `ab6e4f86b2b1f551276bcd33b3b30818bd26d769`, blob `4d5efe616332f29a61324b901765fbc3592c3b19`;
2. its normalized authority checkpoint `700760bc9ab398ea24f5dad0a846a5998e953131`;
3. `CREATOR_COMMERCIAL_SETUP_AND_RATE_CARD_V0_PRODUCT_AMENDMENT_1_COUNTRY_CURRENCY_AUTHORITY.md` from the immutable Git commit supplied with this recovery prompt;
4. the exact Work Preferences and Rate Card Product registers and every repository standard required by the original prompt.

This recovery prompt changes only the country/currency authority and transition ambiguity. Every other Product, architecture, security, test, Git, exclusion, and return-contract requirement from the original prompt remains active.

## 3. Preserved recovery state

Verify the original source repositories remain unchanged:

```text
BACKEND_SHA = 6206f43c6a13c304c971b810e1dd99a20aaaa11f
BACKEND_TREE = 533f543612b856cfaf3b57769fe0b5541b803c3f

FRONTEND_SHA = c505c0679e39effdd9608e319112591d5ae4c079
FRONTEND_TREE = 18dd8ed798aae509baa7d0d51ab8e31d7ac2dbbd

REMOTE_COMMERCIAL_AUTHORITY_BEFORE_AMENDMENT = 700760bc9ab398ea24f5dad0a846a5998e953131
REMOTE_COMMERCIAL_AUTHORITY_TREE_BEFORE_AMENDMENT = e8f7bc9d15e46077a845e32fd8b2d168e8278695

LOCAL_UNPUBLISHED_AUTHORITY_MERGE = 64b17471386dae463c500bb76d6604a35ad7558c
LOCAL_UNPUBLISHED_AUTHORITY_TREE = 0aeda78b821f7d4981d25121cc00de4e7f7a93aa
LOCAL_MERGE_PARENT_1 = 700760bc9ab398ea24f5dad0a846a5998e953131
LOCAL_MERGE_PARENT_2 = 08c72433b32ed8a199d29ae8875d668dc2f0eddf

MIGRATIONS = 102
MIGRATION_HEAD = 20260915100000_creator_brand_canonical_profile_revision
MIGRATION_HEAD_SHA256 = ec6484427c24d5755549ff9e71bae989f5ff592a6fc5da953ca07494b8744452
```

Expected task root from the first run:

`C:/Users/piyus/Documents/Codex/2026-09-10/markdown-instagram-intelligence-external-local-codex/work/creator-commercial-setup-rate-card-v0`

Before mutation, fetch/prune and verify:

- exact repository/remotes;
- backend/frontend SHA/tree equality and clean worktrees;
- exact local unpublished merge identity and clean authority worktree if that worktree is reused;
- no staged, unstaged, untracked, or overlapping user work;
- exact 102-migration identity;
- exact Product and prompt blobs;
- the immutable amendment/recovery-prompt publishing commit supplied by Parent.

If the existing local recovery state does not match, do not reset, stash, clean, discard, or overwrite it. Stop with:

```text
RESULT = COMMERCIAL_SETUP_P0_RECOVERY_STATE_MISMATCH
```

## 4. Authority reconciliation route

The remote commercial authority now contains the Product amendment and this recovery prompt as descendants of `700760bc…`. The local unpublished merge contains the Creator Brand authority lineage.

If exact recovery state matches, perform a normal conflict-free ancestry-preserving merge of the new remote commercial authority into the local authority branch. Preserve:

- amendment/prompt/batching history;
- Creator Brand authority ancestry;
- both merge parents and the prior unpublished merge;
- one execution ledger.

Do not force push, rewrite, flatten, or independently recreate Product authority.

Do not publish the authority merge until recovered P0 gates pass.

## 5. Frozen authority precedence

Implement exactly:

```text
VERIFIED_KYC
> VALIDATED_PAYOUT_BANK_PROFILE
> CREATOR_DECLARED_BASE_COUNTRY
```

For current V0:

- KYC is not implemented and must not be fabricated;
- manual base country is editable when no higher authority exists;
- a valid bank/payout country overrides the manual country;
- conflicting change under bank authority belongs to Settings/Payouts;
- Commercial Setup projects the source and editability without exposing bank data;
- future verified KYC overwrites and locks country, but no KYC schema/workflow/provider/UI is authorized now.

Use only canonical validated bank/payout truth. Raw/incomplete/rejected client-entered bank data is not authority.

## 6. Frozen currency transition

Resolve currency from effective base country using accepted current geography routing:

```text
IN → INR
US → USD
REST_OF_WORLD → USD
```

When effective country changes:

### Currency unchanged

- preserve current monetary rates;
- preserve non-monetary terms;
- audit the authority/country change.

### Creator-declared change causes currency change

- if current monetary rates exist, require explicit confirmation;
- without confirmation, atomically reject everything;
- with confirmation, update country and currency in one transaction;
- disable and clear Reel, Story, Carousel, Photoshoot/static, Link in Bio, and Partnership Ads monetary lines;
- preserve usage-right availability/duration and payment preferences;
- retain old values only in immutable prior revisions/audit;
- require new monetary-rate entry;
- no FX and no relabelling.

If no monetary rates exist, update without reset confirmation.

### Bank/KYC authority causes currency change

- the authoritative country update must not be blocked by stale rates;
- atomically update effective country/currency;
- disable and clear the six current monetary lines;
- preserve non-monetary terms;
- preserve prior values only in immutable history;
- notify when the owning event/UI path supports it;
- do not create a new Commercial Setup mutation surface.

## 7. C04 and Settings boundaries

Preserve:

```text
C04 AGREEMENT-ONWARD BANK/PAYOUT GATE = CANONICAL AND EXTERNAL
COMMERCIAL SETUP = READ-ONLY READINESS PROJECTION
```

If future KYC makes bank setup incompatible, payout readiness degrades through its owner and C04 remains blocked until resolution. Do not implement or change C04, bank, payout, Settings, or KYC state machines in this run.

## 8. Recovered P0 contract proof

Add only the executable contracts/tests needed to freeze:

- `effectiveBaseCountry`;
- `baseCountrySource = CREATOR_DECLARED | PAYOUT_BANK | VERIFIED_KYC`;
- `baseCountryEditable`;
- canonical Rate Card currency;
- same-currency preservation;
- explicit confirmed manual reset;
- mandatory higher-authority overwrite/reset;
- atomic CAS/idempotency/audit contract;
- non-monetary preservation;
- no current mixed country/old-currency rates;
- no fabricated KYC;
- C04/Settings ownership boundaries.

Re-run every original P0 contract, vocabulary, build, lint, format, diff, security, and predecessor gate. Remove no accepted requirement.

If P0 passes:

1. publish the recovered backend P0 checkpoint by normal non-force push;
2. publish the ancestry-reconciled authority P0 checkpoint;
3. fetch/prune independently and prove SHA/tree equality and ancestry;
4. record `P0 = ACCEPTED` and `P0_CORRECTION_CYCLES_USED = 0` because the prior stop was a Parent-resolved Product circuit breaker, not a code correction;
5. continue immediately through original P1→P4.

## 9. P1–P4 continuation

Execute the original autonomous prompt in full, with this amendment incorporated into all persistence, API, frontend, PostgreSQL, browser, accessibility, audit, purge, regression, publication, handoff, and learning gates.

In particular prove:

- manual country edit with no higher authority;
- bank-backed projection and disabled conflicting manual edit;
- manual same-currency country change preserves rates;
- manual cross-currency change without confirmation makes no writes;
- confirmed cross-currency change atomically clears only monetary lines;
- bank-authority cross-currency overwrite clears monetary lines without blocking canonical truth;
- prior values remain in immutable revision/audit history only;
- current consumers never receive old amounts under the new currency;
- no KYC state is fabricated;
- C04 and payout readiness ownership remains unchanged;
- no-Instagram/source-independent Commercial Setup remains functional.

## 10. Correction authority

This is a new Parent-authorized circuit-breaker recovery continuation.

```text
PRIOR_P0_PRIMARY_RUN = CLOSED_AT_PRODUCT_CIRCUIT_BREAKER
PRIOR_P0_CORRECTION_CYCLES = 0
RECOVERED_P0_PRIMARY_RUN = 1
P0_NORMAL_CORRECTION_CYCLES_AVAILABLE = 2
P1–P4 ORIGINAL BUDGETS = UNCHANGED
```

Ordinary in-scope implementation defects may be corrected. A different Product ambiguity, unsafe cross-domain mutation, destructive migration, or materially larger shared-runtime requirement is a new circuit breaker.

## 11. Prohibited work

In addition to every original prohibition, do not:

- build KYC;
- make KYC appear available;
- edit bank/payout details from Commercial Setup;
- add multiple active Rate Card currencies;
- add FX;
- retain old monetary values as current after a currency change;
- weaken C04's bank/payout gate;
- begin Audience V1, Portfolio, or Media Kit;
- merge to `development` or deploy.

## 12. Immutable return contract

Return the original report contract:

`CREATOR_COMMERCIAL_SETUP_AND_RATE_CARD_V0_AUTONOMOUS_EXTERNAL_LOCAL_CODEX_REPORT_V1`

Add dedicated sections for:

```text
AB. recovery-state and authority-merge verification
AC. country-authority precedence proof
AD. same-currency preservation proof
AE. manual cross-currency confirmation/reset proof
AF. bank-authority overwrite/reset proof
AG. immutable prior-rate audit proof
AH. KYC non-fabrication and future seam proof
AI. C04 payout-gate non-mutation proof
```

End using the original outcome block. On success:

```text
RESULT = READY_FOR_CHILD_SA_PROGRAM_ORCHESTRATOR_FINAL_REVIEW
P0 = ACCEPTED
P1 = ACCEPTED
P2 = ACCEPTED
P3 = ACCEPTED
P4_EVIDENCE_READY = YES
WORK_PREFERENCES_V2_EVIDENCE_READY = YES
RATE_CARD_V2_EVIDENCE_READY = YES
COMBINED_COMMERCIAL_SETUP_EVIDENCE_READY = YES
AUDIENCE_V1 = NOT_STARTED
PORTFOLIO = NOT_STARTED
MEDIA_KIT = NOT_STARTED
DEVELOPMENT_MERGE = NOT_PERFORMED
DEPLOYMENT = NOT_PERFORMED
NEXT_ACTION = PARENT RETURNS THIS IMMUTABLE REPORT TO THE TECHNICAL SA / PROGRAM ORCHESTRATOR
```

Do not self-authorize later work.
