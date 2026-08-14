# Campaign Page Phase G — Run State

> Copy this file into the implementation frontend repository as `docs/campaign/phase-g/00_run_state.md` when the Campaign Page Phase G run begins.

## 1. Run identity

```text
Module: Campaign Page
Actor: BRAND
Supervisor mode: ENABLED
Current stage: NOT_STARTED
Stitch eligibility: NO
Merge status: NOT_MERGED
Deployment status: NOT_DEPLOYED
```

## 2. Canonical baseline

```text
Repository: Piyush1087/dummy_tcs
Branch/ref:
SHA:
Verified: NO
```

## 3. Frontend baseline

```text
Repository:
Local path:
Starting branch:
Starting SHA:
Phase G working branch:
Accepted Phase G frontend SHA:
Working tree clean: UNKNOWN
Verified: NO
```

## 4. Backend baseline

```text
Repository:
Local path:
Starting branch:
Starting SHA:
Accepted Phase G backend SHA:
Working tree clean: UNKNOWN
Verified: NO
Read-only in current stage: YES
```

## 5. Scope

```text
IN SCOPE
- Campaign Page shell/composition
- Header / Details / readiness
- Campaign Assets / Products & Briefs
- Add Product / Add Campaign Asset
- Asset detail/lifecycle presentation
- Add Brief
- Brief detail/lifecycle presentation
- Discovery
- Applicants
- Reporting / Performance
- relevant loading/empty/error/degraded/mobile states
- cross-cutting Share/Edit/lifecycle only where Page authority depends on them
- Collaboration reference boundary

OUT OF SCOPE
- Create Campaign wizard re-reconciliation
- Collaboration execution
- new Intelligence/ranking formulas
- new Reporting metrics not supplied by authority
- new Brand Centre entity ownership
- Stitch before G2
```

## 6. Completed artifacts

| Stage | Artifact | Status | Frontend SHA | Backend SHA | Notes |
|---|---|---|---|---|---|
| G0.0 | | NOT_STARTED | | | |
| G0.1 | | NOT_STARTED | | | |

Add rows as stages/packages are generated.

## 7. Finding ledger

```text
Total findings: 0
P0 open: 0
P1 open: 0
P2 open: 0
P3 open: 0
```

### Open findings

| ID | Surface | Classification | Priority | Root cause | Owner | Next package |
|---|---|---|---|---|---|---|

### Closed findings

| ID | Disposition | Accepted package | Acceptance evidence |
|---|---|---|---|

## 8. Product decisions

### Open

None recorded.

### Frozen

Record only decisions supported by canonical authority or explicit Product approval.

| Decision | Source | Date/stage |
|---|---|---|

## 9. Authority conflicts

None recorded.

If present:

| Finding | Source A | Source B | Why precedence cannot resolve | Product decision needed |
|---|---|---|---|---|

## 10. Compatibility / migration register

| Item | Status | Boundary | Migration blocker? | Removal/deprecation condition |
|---|---|---|---|---|

## 11. Deferred-owner register

| Capability | Owner | Current truthful Campaign presentation | Blocks Phase G? |
|---|---|---|---|

## 12. Accepted debt

| Debt | Introduced/identified in | Why accepted | Required closure gate |
|---|---|---|---|

## 13. Environment blockers

| Blocker | Affected check | Source or environment? | Host-shell alternative | Blocks next package? |
|---|---|---|---|---|

## 14. Current package result

```text
Stage:
Status:
Starting frontend SHA:
Final frontend SHA:
Starting backend SHA:
Final backend SHA:
Findings addressed:
Findings remaining:
Product decisions remaining:
Authority conflicts remaining:
Tests/checks run:
Checks not run:
Environment blockers:
Debt introduced/retained:
Unexpected backend requirement:
Unexpected frontend requirement:
Migration blocker:
```

## 15. Supervisor decision

```text
Decision:
ADVANCE_AUTONOMOUSLY |
ADVANCE_WITH_DEBT |
RETRY_CURRENT_PHASE |
SPLIT_NEXT_INVESTIGATION |
BLOCKED_ENVIRONMENT |
PRODUCT_DECISION_REQUIRED |
AUTHORITY_CONFLICT |
STOP_NOT_ACCEPTED

Reason:
Next eligible stage:
```

## 16. Generated next prompt

```text
Generated: NO
Stage/package:
Prompt artifact/path:
Prompt hash/commit if stored:
Execution authorized automatically: NO
Reason:
```

The generated prompt itself may live in the current agent session or in a working-repository Phase G prompt artifact. Do not store generated execution prompts in the canonical `dummy_tcs` repository unless Product explicitly requests that history.

## 17. G2 / Stitch gate

```text
Consolidated G1 accepted: NO
G2 drafted: NO
G2 Product-approved: NO
Stitch eligibility: NO
```

Stitch eligibility may become `YES` only after the global orchestration standard permits it.

## 18. Final Phase G status

```text
Current completion: 0%
Last accepted frontend SHA:
Last accepted backend SHA:
Next action:
Human/Product action required: NO
```
