# C04 — Brand Payouts Exact Reserve–Entitlement Lineage Correction Proposal Runner V1

C04_BRAND_PAYOUTS_EXACT_RESERVE_ENTITLEMENT_LINEAGE_CORRECTION_PROPOSAL_RUNNER_V1

Status: PARENT AUTHORIZED — PROPOSAL AND PREFLIGHT ONLY

## 1. Purpose and disposition

Perform one consolidated, approval-grade C04 reconciliation and prepare the exact smallest additive database and runtime correction required to close the Brand Payouts Class C reserve–entitlement lineage gap.

This is not another Brand Payouts M1 iteration. Do not edit or apply M1. Do not start P4A, P4B or P5A.

The accepted C04 handoff remains durable evidence, but its BP-G08 sufficiency for Brand Payouts financial execution is suspended until this exact lineage correction is accepted.

Run one coherent lane:

DEEP SOURCE RECONCILIATION
→ COMPLETE BLOCKER REGISTER
→ EXACT C04 MIGRATION PROPOSAL
→ EXACT C04 RUNTIME PATCH PROPOSAL
→ STATIC CROSS-REVIEW
→ ONE CONSOLIDATED RETURN

Do not return after the first issue. Do not issue prompt-per-defect follow-ups.

## 2. Exact authority and source

Revalidate before analysis:

- Product Authority: f15a91d0ace8b2c424a539d79dbb120869233105
- Brand Payouts architecture/finite plan: 3fb6b4246aa5f2ecb71c3bbfe99c56e395f30a92
- Recovery charter: 23a074b01dbca141ddc997113a6ecbbc14e19f82
- Superfast execution amendment: 634db2b0def32ca3b703fa9806d267b1d89dd7ef
- C03 accepted backend: aebeb85fd6bba37f88c3805c213c61e7f63b2f5f
- C04 tested runtime: 373eaa382f555c376df78c0e95c72ff55cc43791
- C04 handoff/head: fc4d4b59e2a44d7ddced6bc5dde5119c501ec275
- C04 handoff tree: 083c52dc06c19a23f47491935b472ee5e62bd1c5
- P4 Base: 5dc9eef4923ae383b94b36cbf9bbb632b1b84cf1
- P4 Base tree: 6c01d65e5a32eecfcd7e42715923ea8478d071fb
- M1 V4 Class C evidence: a9977653c99bab9b5273e5f9cc0a0d44ca60c7b6
- Migration count before any correction: 84

Repositories and branches:

- Authority/evidence: Piyush1087/dummy_tcs, brand-payouts/v1-execution-ledger
- Backend source: Piyush1087/creator-commerce-backend-v2-clone
- C04 branch: c04/shared-collaboration-backend-v1
- Payouts convergence branch: brand-payouts/v1-backend-convergence, read-only

Read completely:

- docs/organization/handoffs/brand-payouts/brand_payouts_to_c04_settlement_dependency_handoff_v1.md
- docs/organization/architecture/brand-payouts/brand_payouts_architecture_freeze_v1.md
- docs/organization/architecture/brand-payouts/brand_payouts_cross_contract_reconciliation_v1.md
- docs/organization/architecture/brand-payouts/brand_payouts_finite_execution_plan_v1.md
- docs/ai-collaboration/brand-payouts-bp-g10-m1-v4-class-c-review.md
- the complete M1 V4 R1–R18 evidence package

Inspect the exact C04 Prisma schema, all 84 migrations, securement, trusted-confirmation, reserve, escrow, settlement, normal-entitlement, financial-authority, event, gateway and authorization code.

## 3. Frozen contradiction

The required C04 seam must publish and persist trusted money-movement confirmation keyed to the exact immutable reserve instruction identity/version/hash and resulting financial references.

The accepted runtime currently has all of these disconnected facts:

- collaboration_reserve_instructions identifies the request and immutable reserve economics;
- Collaboration trusted-confirmation input carries confirmation identity, digest, Collaboration, lock reference, amount and currency, but not the exact reserve instruction identity/version/hash or approval identity;
- collaboration_trusted_confirmations persists only confirmation type/ID, Collaboration, body digest and applied time;
- collaboration_financial_authority_instructions persists agreement and resolution authority, but no exact reserve instruction, confirmation, approval, escrow lock or ledger relation;
- commercial-agreement funding/lock references are mutable projections;
- event JSON is not by itself relational authority;
- the direct legacy reserve path can write a different funding-instruction encoding and bypass the canonical Owner/Finance approval split.

Payouts may not repair this by caller-authored linkage, newest/current timestamp selection, mutable projection inference, JSON-only trust, lossy compatibility mapping or fabricated legacy backfill.

## 4. Required canonical lineage

Design and cross-check one immutable normal-path lineage:

C04 reserve instruction
→ Payouts Owner/Finance approval reference
→ successful reserve execution attempt reference
→ exact escrow lock
→ exact canonical reserve ledger transaction
→ C04 trusted funding confirmation
→ C04 normal Creator-entitlement authority instruction
→ Payouts obligation intake

Every arrow must name:

- owning table and field;
- exact FK or immutable external reference;
- Brand, Campaign, Collaboration, Creator and agreement binding;
- instruction/request identity, version and hash;
- amount breakdown and currency;
- creation authority;
- currentness/supersession rule;
- replay/idempotency rule;
- mutation and deletion rule;
- legacy behavior;
- database versus application enforcement.

## 5. Required correction properties

The proposed correction must satisfy all of the following.

### 5.1 Trusted confirmation

The durable C04 confirmation must bind, at minimum:

- confirmation record identity/type/body digest;
- exact reserve-instruction record ID, request ID, version and hash;
- exact commercial-agreement ID/version/hash;
- immutable Payouts approval reference;
- immutable reserve execution-attempt reference if the accepted architecture requires one;
- exact escrow-lock ID;
- exact canonical reserve-ledger transaction ID;
- Brand, Campaign, Collaboration and Creator;
- confirmed amount and currency;
- explicit completed/sufficient disposition;
- observed/applied server time.

Use real FKs for C04/canonical financial objects that coexist in this schema. External Payouts references must be bounded immutable references until Payouts M1 exists; do not create a reverse FK to a future table.

Determine whether one reserve instruction may receive multiple partial confirmations. If yes, allow append-only attempt/observation history but enforce at most one authoritative completed confirmation per reserve instruction and economics. Do not force an invalid one-to-one relationship.

### 5.2 Transactional validation

The trusted-confirmation writer must transactionally prove:

- the reserve instruction exists, is current, REQUESTED and not superseded;
- all request/instruction/agreement identities, versions and hashes match;
- Brand/Campaign/Collaboration/Creator match;
- lock and ledger belong to the same Brand and Collaboration;
- lock/ledger amount and currency equal the immutable reserve;
- ledger type/status are the canonical cleared reserve effect;
- approval and execution references are non-empty, stable and replay-safe;
- confirmation replay with the same identity/body is stable;
- any changed body or conflicting lineage fails closed.

No amount or identity may be trusted merely because it was supplied by the caller.

### 5.3 Entitlement binding

Every new canonical NORMAL_SUCCESS Creator-entitlement authority instruction must link directly to the exact completed trusted funding confirmation and reserve instruction.

The entitlement writer must:

- reject missing/incomplete protected-funding lineage;
- validate the same agreement, Brand, Collaboration, Creator, amount and currency authority;
- bind the reserve/confirmation identities into the entitlement instruction hash;
- preserve version/supersession semantics;
- prevent one entitlement from silently switching to another reserve;
- provide the exact immutable lineage Payouts obligation intake will consume.

Do not overload sourceFinancialRef or sourceEntitlementRef unless their accepted meaning is proven exact and enforced. If new explicit fields/relations are required, propose them.

### 5.4 Canonical request-only flow

For new canonical PLATFORM_ESCROW Collaborations, requestEscrowFunding must publish the immutable reserve instruction and wait for the Payouts Owner/Finance approval/execution confirmation.

It must not directly reserve funds merely because the requesting member is Owner/Finance.

Preserve old rows only as legacy/fail-closed data. Do not create a compatibility workaround that lets new canonical rows use the old direct-reserve path or the escrow-reserve:<commandId> encoding.

### 5.5 Legacy and rollout

The proposal must be additive and safe for populated 84→85 upgrade:

- no inferred backfill;
- existing rows remain byte/logically unchanged where possible;
- new lineage columns may be nullable for legacy rows;
- every new canonical write must require the complete lineage;
- no SQL CHECK may pass accidentally through UNKNOWN;
- no timestamp-based legacy/canonical discriminator;
- use an explicit mode/version or insert/transition enforcement where required;
- deletes and lineage rewrites fail closed;
- forward recovery disables writers and repairs only from immutable evidence.

## 6. Complete preflight and blocker sweep

Before emitting a proposal, inspect the entire adjacent surface once:

- existing table/constraint/index/trigger/function names and collision risk;
- all 84 migration bytes and ordering;
- Prisma/SQL parity;
- trusted-confirmation transaction atomicity and replay race;
- reserve instruction supersession/currentness;
- approval/execution external-reference semantics;
- authoritative lock and ledger lookup;
- normal settlement/entitlement emission timing;
- direct reserve bypass;
- agreement mutation and aggregate-version behavior;
- delete/update cascades;
- partial confirmations and retries;
- duplicate, delayed and out-of-order confirmations;
- same Collaboration with superseded instructions;
- cross-Brand and cross-Collaboration substitution;
- amount/currency mismatch;
- legacy populated upgrade;
- Payouts obligation intake needs after correction.

Return one complete blocker set. Ordinary design defects must be corrected inside this same proposal pass. Return Class C only if another Product/architecture/ownership contradiction remains after the authorized upstream correction is applied conceptually.

## 7. Required proposal artifacts

Write evidence/proposals only on the authority/evidence branch. Do not alter the backend branch.

Required directory:

docs/ai-collaboration/evidence/c04-brand-payouts-reserve-entitlement-lineage-v1/

Produce:

1. NOT_APPROVED_NOT_APPLIED-c04-lineage-prisma.patch
2. NOT_APPROVED_NOT_APPLIED-c04-lineage-migration.sql
3. NOT_APPLIED-c04-lineage-runtime.patch
4. exhaustive-object-crosswalk.json
5. lineage-state-and-replay-matrix.json
6. populated-upgrade-truth-table.json
7. trigger-and-constraint-path-table.json
8. runtime-test-and-postgresql-proof-plan.md
9. manifest.sha256

Also produce:

docs/ai-collaboration/c04-brand-payouts-reserve-entitlement-lineage-correction-proposal-v1.md

The SQL must be complete enough for exact human review but must not be copied into prisma/migrations, committed to backend, or executed.

The runtime patch must be a reviewable diff against exact C04 head fc4d4b59e2a44d7ddced6bc5dde5119c501ec275. It must include schema-facing TypeScript types, trusted-confirmation validation/persistence, normal-entitlement binding, direct-bypass removal, and targeted tests. Do not apply or commit it to the backend.

Static validation may include:

- git apply --check for proposal patches against an isolated exact C04 worktree;
- Prisma schema assembly/generate/validate without writing the backend worktree;
- SQL parsing and object-name collision checks;
- source/type/test inventory review;
- SHA-256 manifest verification;
- secret scan.

Do not run the proposed migration against PostgreSQL before exact human approval.

## 8. Prohibited actions

Do not:

- modify, commit or push backend source;
- create/copy a Prisma migration into the backend;
- apply proposed DDL to any database;
- edit accepted migrations;
- change Product meaning or financial ownership;
- manufacture legacy lineage;
- create a second vault, ledger or reserve engine;
- start Brand Payouts P4A/P4B/P5A;
- alter frontend source;
- invoke providers, credentials, Test/Live Razorpay, AWS or production;
- merge to any canonical branch.

## 9. Required consolidated return

If the full proposal is safe:

C04_BRAND_PAYOUTS_LINEAGE_MIGRATION_APPROVAL_REQUEST

PREFLIGHT_STATUS =
C04_BASE_SHA =
C04_BASE_TREE =
MIGRATION_COUNT_BEFORE =
PROPOSAL_EVIDENCE_COMMIT =
PROPOSAL_EVIDENCE_TREE =
PRISMA_PATCH_PERMALINK =
SQL_PERMALINK =
SQL_SHA256 =
RUNTIME_PATCH_PERMALINK =
RUNTIME_PATCH_SHA256 =
EXACT_SCHEMA_DELTA =
EXACT_RUNTIME_DELTA =
CANONICAL_REQUEST_ONLY_FLOW =
TRUSTED_CONFIRMATION_BINDING =
ENTITLEMENT_BINDING =
PARTIAL_CONFIRMATION_POLICY =
LEGACY_POLICY =
FK_UNIQUE_CHECK_INDEX_TRIGGER_DELTA =
POPULATED_UPGRADE_STATIC_PROOF =
POST_APPROVAL_POSTGRESQL_PROOF_PLAN =
STATIC_CROSS_REVIEW =
COMPLETE_BLOCKER_SET =
MIGRATION_COMMITTED_TO_BACKEND = NO
MIGRATION_APPLIED = NO
BACKEND_SOURCE_CHANGED = NO
PROVIDER_ACTIONS = NONE
RESULT = C04_LINEAGE_MIGRATION_HUMAN_APPROVAL_REQUIRED

If an independent Class C contradiction remains, return it with the complete preserved evidence and no executable proposal.

Stop after this one consolidated return.