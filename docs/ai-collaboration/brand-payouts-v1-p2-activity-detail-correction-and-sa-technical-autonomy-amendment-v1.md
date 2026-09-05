# Brand Payouts — P2 Activity Detail Identifier Correction and SA Technical Autonomy Amendment V1

`BRAND_PAYOUTS_P2_ACTIVITY_DETAIL_IDENTIFIER_CORRECTION_AND_SA_TECHNICAL_AUTONOMY_AMENDMENT_V1`

## 0. Status and authority

**STATUS: AUTHORIZED**

This is a Parent/Product execution-authority amendment for the persistent Brand Payouts Systems Architect.

The commit containing this file is the authoritative instruction SHA. Verify that exact commit, this file, all pinned repository heads, and the execution ledger before acting.

This amendment:

1. accepts the Systems Architect's diagnosis of the P2 activity-detail identifier defect;
2. authorizes one exact bounded frontend correction and regression test;
3. authorizes a fresh complete V5 browser/runtime evidence pass;
4. delegates P2 technical checkpoint acceptance to the Systems Architect after all mandatory gates pass;
5. requires automatic continuation to the next eligible provider-neutral phase after P2 acceptance; and
6. supersedes numeric correction-count ceilings as automatic Parent-return triggers for bounded technical defects.

It does **not** authorize a Product decision change, architecture expansion, backend/API contract change, schema or migration change, provider inspection/action, Razorpay action, production deployment, canonical merge, or weakening of any financial/security invariant.

---

## 1. Frozen durable state

```text
Product Authority
= f15a91d0ace8b2c424a539d79dbb120869233105

Accepted architecture / finite plan
= 3fb6b4246aa5f2ecb71c3bbfe99c56e395f30a92

Prior P2 recovery authority
= 689feb7a46eb2d52b984ce083be046ac6d38657d

Prior SA autonomy amendment
= 3e1120dcf361b3046c97b6ad0cc5c08e6ec2e71e

Current circuit-breaker / ledger authority
= f2c4da9c7c80eb918d78c8a6f4f151ba573390dc

BP-P0-CONTRACT-BASE
= ACCEPTED

BP-P1-BACKEND-READ
= ACCEPTED

Accepted P1 backend
= 60385abbd12d5a363615100c463ac6755ce848ea

Current P2 recovery backend
= 119397ff6836ad12846c1e948409d8d49185c408

Current P2 frontend candidate
= 7ff0a39470316215496dece91f717593e98c89b5

BP-P2-FIRST-VERTICAL-SLICE
= IMPLEMENTED_PENDING_ACCEPTANCE_BLOCKED

Current blocker
= P2_ACTIVITY_DETAIL_PUBLIC_REFERENCE_MISMATCH

P3
= NOT_STARTED

Migrations
= NONE

Provider actions
= NONE
```

Do not reopen P0 or P1.

Preserve backend `119397ff6836ad12846c1e948409d8d49185c408` unless exact revalidation proves drift or a genuine regression.

Continue frontend work from `7ff0a39470316215496dece91f717593e98c89b5`. Do not rebuild P2 from the original frontend base.

---

## 2. Accepted diagnosis and identifier contract

The accepted Payouts contract distinguishes two identifiers:

```text
activity_id
= stable API/resource identity used for activity detail lookup

public_reference
= Creator Shop display/support reference
```

The accepted detail endpoint remains:

```text
GET /api/v1/brand/payouts/activity/:activityId
```

The P2 frontend currently routes the detail request with `item.public_reference`, while the accepted backend parser and detail contract require `item.activity_id`.

The correct disposition is:

```text
FRONTEND_LINK_BOUNDARY_DEFECT
```

not:

```text
BACKEND_CONTRACT_DEFECT
API_PARSER_DEFECT
PRODUCT_DECISION_REQUIRED
```

The backend parser/API contract must not be broadened to accept `public_reference` merely to compensate for the frontend defect.

`public_reference` remains valid for visible labels, accessible user-facing references, and future bounded support context where the accepted contract permits it.

---

## 3. Exact authorized source correction

Repository:

```text
Piyush1087/creator-commerce-frontend-v2-clone
```

Branch:

```text
brand-payouts/v1-frontend
```

Starting SHA:

```text
7ff0a39470316215496dece91f717593e98c89b5
```

### 3.1 Production file ceiling

Authorize modification of exactly one frontend production file:

```text
src/features/brand-payouts/components/PayoutsActivity.tsx
```

Required behavior:

```text
activity detail navigation/request identity
= item.activity_id

visible/display/support reference
= item.public_reference
```

The detail link target/query value must use `item.activity_id`.

Do not redefine or remove `public_reference`.

The existing user-facing label may continue to use `public_reference` where appropriate.

### 3.2 Regression test

Authorize the targeted regression in:

```text
src/features/brand-payouts/brand-payouts-p2.test.ts
```

The fixture must deliberately use different values, for example conceptually:

```text
activity_id != public_reference
```

The test must prove at minimum:

1. the visible activity reference remains `public_reference`;
2. the detail navigation target uses `activity_id`;
3. clicking the activity detail link does not send `public_reference` to the detail endpoint;
4. the correction applies to both desktop-table and mobile-card entry paths where both are separately rendered/testable.

Test-file-only support changes may be made if strictly necessary, but no second production file is authorized for this defect.

---

## 4. Explicitly forbidden changes

Do not change:

- backend source;
- backend detail parser;
- backend route identity;
- API media type;
- `activity_id` semantics;
- `public_reference` semantics;
- Zod contract semantics;
- financial Product logic;
- role/RBAC rules;
- server-side redaction;
- schema or Prisma;
- migrations;
- provider configuration;
- Razorpay source or state;
- Settings mutation ownership;
- global Aurora tokens/components;
- unrelated styling or frontend components.

If the one-file correction cannot close the defect without one of the changes above:

```text
ARCHITECTURE_OR_CONTRACT_CONFLICT
→ SA_EXECUTION_STOPPED_NON_DELEGABLE
```

---

## 5. Required frontend source validation

After the correction, run and record:

- targeted differing-identifier regression;
- all focused Brand Payouts frontend tests;
- full frontend test suite;
- TypeScript/typecheck;
- changed-file lint;
- changed-file format check;
- production frontend build;
- `git diff --check`;
- clean worktree after commit;
- remote fetch-back SHA/tree verification.

The source correction must be committed and pushed as one bounded descendant of `7ff0a39470316215496dece91f717593e98c89b5`.

Do not amend, squash, rebase, or rewrite accepted P2 history.

Record:

```text
P2_ACTIVITY_DETAIL_IDENTIFIER_CORRECTION_SHA
P2_ACTIVITY_DETAIL_IDENTIFIER_CORRECTION_TREE
```

---

## 6. Fresh V5 local browser/runtime evidence

After the corrected frontend commit is pushed, run a fresh complete V5 browser/runtime evidence pass against:

```text
Backend
= 119397ff6836ad12846c1e948409d8d49185c408

Frontend
= corrected descendant of 7ff0a39470316215496dece91f717593e98c89b5
```

Use the accepted local desktop runner/evidence topology. No provider access is authorized.

### 6.1 Required identifier proof

V5 must prove for at least:

- one lifecycle-only activity; and
- one authoritative money-movement activity;

that:

```text
list item displays public_reference
click/open detail uses activity_id
detail endpoint returns 200
refresh restores the same activity detail
browser Back restores the originating list state
```

The evidence must use deliberately different `activity_id` and `public_reference` values.

### 6.2 Complete remaining browser matrix

Complete—not merely sample—the remaining P2 browser matrix, including:

- activity keyboard access;
- visible focus and focus return;
- detail close/Back behavior;
- refresh restoration;
- pagination/load-more and exhaustion;
- applicable Settings compatibility/deep-link workflow;
- exhausted-list safe-area clearance;
- 390px;
- 767px;
- 768px;
- 1440px desktop;
- no document-level horizontal overflow;
- no protected render before authorization;
- no unexpected Payouts console error;
- no unexpected authorized-flow HTTP 4xx/5xx;
- fail-closed unauthorized/cross-Brand behavior;
- no browser-authored money or due date;
- no fixed 30/70 or TDS claim;
- no synthetic invoice/tax/provider document;
- no release/reversal/mark-paid control;
- no provider ID or raw diagnostic in the DOM.

### 6.3 Accessibility

Re-run the accepted accessibility matrix and require:

```text
SERIOUS_AXE_FINDINGS = 0
CRITICAL_AXE_FINDINGS = 0
```

at all required widths and materially distinct states.

The previously passing V4 contrast evidence may be referenced for comparison, but P2 acceptance requires fresh V5 evidence against the corrected frontend SHA.

### 6.4 Runtime invariants

Preserve/reprove as needed:

- HTTP/RBAC matrix;
- runtime schema validity;
- financial read purity;
- one vault / one ledger / one temporary Settings mutation surface;
- provider disabled and not invoked;
- migrations unchanged;
- backend bootstrap defect does not recur.

---

## 7. Defect handling during V5 and future technical checkpoints

### 7.1 Numeric correction ceilings are no longer Parent gates

From this authority forward:

```text
DISTINCT_TECHNICAL_DEFECT_COUNT
= TELEMETRY_ONLY

CUMULATIVE_CORRECTION_COUNT
= TELEMETRY_ONLY

ROUTINE_PARENT_RETURN_BECAUSE_NTH_DEFECT_FOUND
= PROHIBITED
```

The Systems Architect may diagnose, authorize, supervise, review, accept, and ledger-bind a bounded technical correction without returning to Parent when **all** of the following are true:

1. the correction stays inside frozen Product Authority and accepted architecture;
2. it changes no financial meaning, actor authority, canonical ownership, API semantic contract, schema, migration, provider behavior, or production-enablement policy;
3. the defect is reproducible and the root cause is recorded;
4. the correction is the smallest local fix;
5. each distinct correction changes no more than three production files unless a lower ceiling is named by an active phase authority;
6. a targeted regression is added or an existing exact regression proves the fix;
7. all affected focused/full/runtime gates are rerun;
8. the correction and evidence are committed, pushed, and ledger-bound; and
9. one diagnosis → one correction → one rerun is used for the failure signature.

Do not ask Parent for permission merely because a phase has already had two or more distinct technical defects.

### 7.2 Mandatory non-delegable stop conditions

The Systems Architect must still stop for:

- a new or changed Product decision;
- a material architecture change;
- an API semantic-contract change;
- a schema or migration creation/application gate;
- any destructive migration;
- a financial authorization or cross-Brand invariant uncertainty;
- sensitive-data/security-boundary change;
- provider credential inspection or provider action not already authorized;
- Razorpay Test or Live action;
- production enablement/deployment;
- canonical branch merge requiring owner acceptance;
- a repeated identical failure after its bounded correction;
- a correction that exceeds the active bounded production-file ceiling;
- inability to prove the root cause without broad speculative changes;
- invention of missing upstream authority or financial truth.

An ordinary third, fourth, or later distinct implementation/accessibility defect is not by itself non-delegable.

---

## 8. P2 Systems Architect self-checkpoint

When the source gates and complete V5 evidence pass, the Systems Architect must conduct and accept the P2 checkpoint itself.

Required disposition:

```text
BP-P2-FIRST-VERTICAL-SLICE
= ACCEPTED

P2_REVIEW_OWNER
= SYSTEMS_ARCHITECT

P2_PARENT_REVIEW
= DELEGATED
```

Commit and push the ledger update with:

- accepted backend SHA/tree;
- corrected frontend SHA/tree;
- exact activity identifier defect and correction;
- changed file/test scope;
- source validation results;
- V5 evidence commit/path/hash index;
- all viewport/state/accessibility results;
- HTTP/RBAC/schema/read-purity results;
- migrations = NONE;
- provider actions = NONE;
- final P2 acceptance matrix;
- next eligible phase and dependency status.

Do not use `READY_FOR_PARENT_REVIEW` for a passing P2 technical checkpoint.

---

## 9. Automatic continuation

After P2 self-acceptance:

1. revalidate remote heads, clean worktrees, ledger, and dependency gates;
2. begin the next technically eligible provider-neutral phase;
3. self-review and checkpoint routine technical gates;
4. park independently blocked lanes without serializing eligible work; and
5. return only for a genuinely non-delegable gate, unavoidable local-runner relay, circuit breaker, or final provider-disabled handoff readiness.

P3A may proceed if its accepted prerequisites are satisfied.

P3S remains gated by the exact M2 migration approval and `BP-G21` Security policy.

No migration is self-authorized by this amendment.

No provider action is self-authorized by this amendment.

No canonical merge or production deployment is self-authorized by this amendment.

---

## 10. Git-hosted long-instruction rule

Any further long runner prompt, specialist assignment, recovery authority, or evidence index must be committed to Git and referenced by exact commit permalink.

Do not paste long execution prompts into chat.

A local desktop relay, when unavoidable, is execution transport—not Parent checkpoint acceptance.

After evidence returns, the Systems Architect resumes review and continues automatically.

---

## 11. Immediate instruction

Read this file completely.

Verify all pinned SHAs and current branch heads.

Apply the exact one-file activity-detail identifier correction and targeted regression.

Run all frontend source gates.

Create/use the exact Git-hosted V5 local runner assignment if a local relay is required.

Review the V5 evidence.

Self-accept and ledger-bind P2 when every mandatory gate passes.

Continue automatically to the next eligible provider-neutral phase.

Do not return with only a plan or restatement.

Do not return to Parent merely because this is the third distinct P2 defect.

If a genuinely non-delegable stop occurs, return only:

```text
SA_EXECUTION_STOPPED_NON_DELEGABLE

LAST_ACCEPTED_CHECKPOINT =
LAST_ACCEPTED_BACKEND_SHA =
LAST_ACCEPTED_FRONTEND_SHA =
LAST_LEDGER_SHA =

BLOCKER =
WHY_NON_DELEGABLE =
EXACT_DECISION_OR_AUTHORITY_REQUIRED =
SAFE_NON_SERIALIZING_WORK_COMPLETED =
PROVIDER_ACTIONS =
MIGRATIONS =
```

At final provider-disabled handoff readiness, return:

```text
BRAND_PAYOUTS_PROVIDER_DISABLED_HANDOFF_READY
```
