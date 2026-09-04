# Brand Payouts Phase C Dependency Gate Register V1

Status: `PREPARED_FOR_PARENT_ACCEPTANCE`
Authority: `brand-payouts/product-authority-v1@f15a91d0ace8b2c424a539d79dbb120869233105`
Architecture base: `main@7aeb0512cb8270a6bae1169570e82b080f01807e`

This register is the exact stop/go map for the finite plan. `SATISFIED_AT_PHASE_C` is evidence at the time of this document, not permission to skip execution-time revalidation. Every implementation phase remains unauthorized until Parent/Product accepts the architecture, plan, and execution mode; each write phase additionally requires only its applicable migration gate.

## 1. Gate semantics

| State | Meaning |
|---|---|
| `SATISFIED` | Accepted immutable authority exists |
| `SATISFIED_AT_PHASE_C` | Live source/head was verified; recheck on execution |
| `READY_WITH_RECONCILIATION` | Architecture may proceed with named deltas; runtime wiring cannot assume missing fields |
| `OPEN_NON_SERIALIZING` | Missing dependency gates only its consumers, not unrelated phases |
| `OPEN_BLOCKING` | Consumer phase may not start |
| `OPEN_HUMAN_GATE` | Explicit Parent/Product/human acceptance is required |
| `NOT_AUTHORIZED` | Work or external action is outside the present envelope |
| `CONFLICT` | Stop until the named authority corrects the contradiction |

These eight tokens are the only machine gate states. Human-readable qualifications belong in the dependency/exit-evidence columns and in the ledger's separate `gate_qualifiers` map.

## 2. Program dependency matrix

| Gate ID | Dependency / exact accepted head | State | Blocks | Does not block | Exit evidence |
|---|---|---|---|---|---|
| `BP-G00` | Product Authority `f15a91d0ace8b2c424a539d79dbb120869233105` | `SATISFIED` | — | All Phase C planning | SHA reverified |
| `BP-G01` | Architecture/finite-plan Parent acceptance | `OPEN_HUMAN_GATE` | Every implementation phase | Phase C documentation | Parent accepts exact Phase C commit |
| `BP-G02` | Authority `main@7aeb0512...`, backend `development@4c5f4285...`, frontend `development@323658d4...` | `SATISFIED_AT_PHASE_C` | P0 if moved incompatibly | Current package | Reverify and classify movement at execution start |
| `BP-G03` | Settings backend `51753168...`, frontend `3e2cabbe...` ancestors | `SATISFIED` | — | Reuse/cutover design | Ancestry and canonical services verified |
| `BP-G04` | C-05 backend runtime `156d5834...`, frontend runtime `323658d4...` | `READY_WITH_RECONCILIATION` | P5 transfer eligibility if exact destination/version readiness fence is absent | P0-P4 and Payouts readiness display | Accepted narrow readiness port and exact version fence tests |
| `BP-G05` | Campaign NET_45/NET_60 relational correction | `OPEN_BLOCKING` | P4 canonical due/automatic execution | P0-P3A/P3S, legacy display, support/Return work | Accepted Campaign migration/code SHA; exact-value reconciliation evidence |
| `BP-G06` | C-03 accepted post-P1.4 backend base | `OPEN_BLOCKING` | C-04 backend implementation, therefore P4 | P0-P3A/P3S independent work | Published accepted post-P1.4 SHA; current accepted P1.1C `ebad7702...` is insufficient |
| `BP-G07` | C-04 architecture `de287846...` | `READY_WITH_RECONCILIATION` | No Phase C planning | P0-P3A/P3S | Accepted frozen deltas retained |
| `BP-G08` | C-04 canonical backend reserve/settlement handoff | `OPEN_BLOCKING` | P4 reserve/due/obligation integration and P5 execution scheduler | P0-P3A/P3S and P5 non-C04-safe subwork | Accepted canonical SHA and versioned handoff contract |
| `BP-G08A` | One canonical backend convergence tree containing accepted P3A Payouts + accepted C-03 post-P1.4 C-04 handoff | `OPEN_BLOCKING` | P4 branch start and M1 regeneration/application | P0-P3A and independent P3S | Exact convergence SHA, named port owner, ancestry/co-residence proof, conflict report, and full applicable P0-P3A/P3S+C-04 tests |
| `BP-G08R` | C-04/Admin versioned partial/full financial recovery instruction | `OPEN_BLOCKING` | P4R recovery intake and P5R recovery/reversal acceptance | Read slice and normal P4B/P5A scheduling | Accepted instruction/confirmation contract and canonical runtime SHA |
| `BP-G09` | C-04 frontend integration on accepted C-03 frontend base | `OPEN_NON_SERIALIZING` | C-04-specific shared actions/cross-links and final joint acceptance | Backend, Payout-owned first frontend slice | Published `C03_ACCEPTED_FRONTEND_INTEGRATION_SHA`, accepted C-04 frontend descendant/convergence SHA, Payouts co-residence/ancestry proof and contract tests |
| `BP-G10` | Financial migration proposal 1 | `OPEN_HUMAN_GATE` | P4/P5 schema writes | Read-only P1/P2, design/tests not requiring schema | Human approval of exact SQL/Prisma diff and rollback plan |
| `BP-G11` | Support migration proposal 2 | `OPEN_HUMAN_GATE` | P3 durable support case | P1/P2; notification design | Human approval of exact SQL/Prisma diff and rollback plan |
| `BP-G12` | Provider-neutral RZ-G0 source | `READY_WITH_RECONCILIATION` | Provider-disabled scheduler acceptance until completed | Read/RBAC/activity/Return/support/frontend | Fail-closed port, coordinator gates, deterministic fake and tests |
| `BP-G13` | RZ-G1 read-only capability audit | `OPEN_NON_SERIALIZING` | Concrete Razorpay adapter acceptance | P0-P5 provider-neutral work | Accepted redacted read-only evidence package |
| `BP-G14A` | RZ-G2A deterministic outbound/read adapter | `OPEN_BLOCKING` | Controlled Route Test execution | Core provider-disabled acceptance | Accepted G1 request/response fixture/error tests; adapter disabled by default |
| `BP-G14W` | RZ-G2W exact webhook event map | `OPEN_BLOCKING` | Provider webhook acceptance/enablement | Core provider-disabled acceptance and G2A | Provider-authoritative signed fixture or authorized G3 capture; mapping/replay/order tests; maps disabled until accepted |
| `BP-G15` | RZ-G3 controlled Test transactions | `NOT_AUTHORIZED` | Provider Test acceptance | Core provider-disabled acceptance | Separate Product action envelope and accepted evidence |
| `BP-G16` | RZ-G4 production readiness | `OPEN_HUMAN_GATE` | Provider-enabled production | Production-shaped provider-disabled smoke | Provider/Security/Legal/Product acceptance |
| `BP-G17` | Qualified India withholding authority if legally applicable | `OPEN_HUMAN_GATE` | Real India payout production launch | Source, read UI, provider-disabled tests | Qualified Legal/Tax authority plus subsequent Product freeze |
| `BP-G18` | First end-to-end read vertical slice | `OPEN_HUMAN_GATE` | Continuation from P2 to broader UI/program segment | P0-P2 | Parent accepts exact first-slice evidence/checkpoints |
| `BP-G19` | First financial reserve path | `OPEN_HUMAN_GATE` | Further reserve/due execution after first canonical proof | Read/provider-neutral work | Parent accepts one canonical request/approval/execution proof |
| `BP-G20` | Campaign Manager entity-scope predicate | `OPEN_BLOCKING` | CM row-scope acceptance | Owner/Finance implementation | Accepted canonical Campaign/Collaboration access predicate and tests; absent proof returns zero CM financial rows—Brand-wide membership is not a fallback |
| `BP-G21` | Payment-support restricted access/retention policy | `OPEN_BLOCKING` | M2 application and P3S Support acceptance only | P0-P3A and later non-Support work | Security-approved policy version, restricted-reader service auth, retention/deletion/audit behavior |
| `BP-G22` | Complete-V1 source co-residence | `OPEN_BLOCKING` | Complete-V1 P7 acceptance | Normal P0-P5A and explicitly incomplete normal-path P7 | Exact pushed backend convergence SHA and frontend SHA containing accepted P3S, P5A, P4R/P5R checkpoints; ancestry/co-residence and full regression proof |

## 3. C-04 input gates

| Required field/command | Current classification | Architecture gate | Backend integration gate | Runtime/E2E gate |
|---|---|---|---|---|
| Immutable commercial agreement | `AVAILABLE_IN_ARCHITECTURE_ONLY` | Open for semantic design | Wait for canonical convergence | Wait for accepted instruction replay proof |
| Creator gross entitlement | `AVAILABLE_IN_ARCHITECTURE_ONLY` | Open | Wait for canonical handoff | Wait for amount/instruction identity test |
| Brand refund entitlement | `AVAILABLE_IN_ARCHITECTURE_ONLY` | Open | Wait for canonical handoff | Wait for refund-vs-reversal-vs-Return test |
| Reserve request identity/version | `AVAILABLE_IN_ARCHITECTURE_ONLY` | Freeze exact request contract | Wait for canonical handoff | Wait for request replay proof |
| Reserve amount/currency | `AVAILABLE_IN_ARCHITECTURE_ONLY` | Freeze immutable source | Wait for canonical handoff | Wait for economic-match proof |
| Owner/Finance approval identity/receipt | `NOT_YET_AVAILABLE` | Freeze approval model | Blocked | Blocked until first reserve acceptance |
| Legacy generic-Brand direct reserve command | `CONFLICT` | Exclude/retire for canonical rows | Prohibited | Prohibited |
| Campaign NET_45/60 relational persistence | `CONFLICT` | Campaign correction | Blocked | Blocked; no automatic due/execution |
| C-04 payment-term snapshot | `NOT_YET_AVAILABLE` | Freeze exact handoff field | Blocked | Blocked; no automatic due/execution |
| `settlementEligibleAt` | `AVAILABLE_IN_ARCHITECTURE_ONLY` | Open | Blocked until outbound handoff | Blocked until due round-trip proof |
| Cancellation/termination resolution | `AVAILABLE_IN_ARCHITECTURE_ONLY` | Open | Wait for convergence | Wait for exceptional due/refund tests |
| Partial/full recovery instruction | `NOT_YET_AVAILABLE` | Freeze required shape/owner | Blocked for recovery integration | Blocked for recovery acceptance |
| Money-movement confirmation seam | `AVAILABLE_IN_ARCHITECTURE_ONLY` | Open | Wait for accepted owner/port | Blocked for settlement E2E |

```text
BRAND_PAYOUTS_C04_ARCHITECTURE_DEPENDENCY
= READY_WITH_RECONCILIATION

BRAND_PAYOUTS_C04_BACKEND_SETTLEMENT_HANDOFF_DEPENDENCY
= OPEN_BLOCKING

BRAND_PAYOUTS_C04_FRONTEND_DEPENDENCY
= OPEN_NON_SERIALIZING
```

## 4. Phase dependency topology

| Phase | Hard prerequisites | Human stop after | May continue without Razorpay? | May continue without C-04 frontend? |
|---|---|---|---:|---:|
| P0 base/contracts/ledger | `BP-G01`, execution-time `BP-G02` | Migration proposals before application | Yes | Yes |
| P1 RBAC/read/activity | P0 checkpoint, `BP-G20` before acceptance | Backend/security acceptance | Yes | Yes |
| P2 first frontend slice | P1 accepted backend contract | `BP-G18` first-slice acceptance | Yes | Yes |
| P3A Return/notifications and atomic command cutover | P2 checkpoint | `BP-P3A-OPERATIONS-CUTOVER` | Yes | Yes |
| P3S durable payment support | P2 checkpoint; M2 acceptance; `BP-G11` + `BP-G21` | `BP-P3S-SUPPORT` | Yes | Yes |
| P4 C-04 convergence, reserve and due/intake | `BP-G05`, `BP-G06`, `BP-G08`, `BP-G08A`, `BP-G10`; P4R alone needs `BP-G08R` | `BP-G19` after first reserve path | Yes | Yes for backend; C-04 UI integration waits |
| P5A normal scheduler/full provider-neutral UI | P4B normal source contracts, `BP-G04`, completed `BP-G12` | Provider-neutral normal-path joint acceptance | Yes, adapter remains fail-closed | C-04-specific frontend acceptance waits |
| P5R recovery/reversal acceptance | P4R and `BP-G08R`; normal P5A is not serialized | Recovery checkpoint | Yes | Yes for backend |
| P6 provider lane | G1 before G2A; G2A before separately authorized G3; authentic signed evidence before G2W | Every RZ gate | G1/G2 have no money; G3 requires provider | Not relevant |
| P7 production-shaped acceptance/handoff | Normal-path variant: P0-P5A; complete V1: P3S + P5R + `BP-G22`; provider-enabled variant also G3/G4/G17 | Production enablement | Provider-disabled variant yes | Final complete-V1 joint variant no |

P3A and P3S are dependency-independent after P2 but never write concurrently: each starts from the latest accepted canonical head. If P3S closes before backend convergence, its accepted commits are ported during `BP-P4-BASE-CONVERGENCE`; if later, it starts directly on that convergence tree. P6 G1 may be scheduled independently after architecture acceptance, but it is a separate local lane and cannot mutate provider state.

## 5. Razorpay gate details

### RZ-G0 — provider-neutral contract

Exit requires a fail-closed transfer port, strict due/readiness/rail/funding/resolution gates, normalized typed outcomes/events, durable attempt-before-call behavior, safe ambiguity/reconciliation, server-side redaction, and deterministic fakes. No Razorpay runtime or credentials are required.

### RZ-G1 — bounded read-only Test capability audit

A future local desktop assignment may inspect current Route Test entitlement, Linked Account/stakeholder/product/bank capability, exact API/version/read contracts, configured webhook/event behavior, and provider account configuration. It may not create or mutate any provider entity. Evidence is redacted and secrets are referenced only by approved location.

### RZ-G2 — deterministic adapter implementation/tests

G2 has two evidence-bounded acceptances. `RZ-G2A` implements outbound/read adapters against exact G1 request/response fixtures, error/idempotency/timeout/ambiguous semantics, and a disabled-by-default feature flag. `RZ-G2W` covers webhook event translation only after provider-authoritative signed fixtures or signed deliveries captured under a separately authorized G3 envelope exist. A read-only G1 audit is not assumed to produce authentic signed deliveries. Signature plumbing may be tested synthetically, but production event maps remain empty/disabled until G2W acceptance. Neither subgate makes real money movement.

### RZ-G3 — separately authorized controlled Test transactions

No current authority. A future Product envelope must name Test mode, entities, amounts, operations, limits, evidence, stop conditions, and cleanup/reconciliation. Local desktop Codex executes only that envelope.

### RZ-G4 — production readiness

Human/provider/Security/Legal/Product gate for Live entitlements, credential/webhook/configuration controls, monitoring, reconciliation, kill switch, runbooks, alerting, and withholding authority. No autonomous process crosses this gate.

## 6. BP-RZ debt disposition

`CORE` means provider-neutral P0-P5 and the first vertical slice.

| Debt | Core / first slice | Provider Test acceptance | Production enablement | Note |
|---|---|---|---|---|
| `BP-RZ-01` Linked Account Test entitlement/API | Does not block | `BLOCKS` | `BLOCKS` | Also gates concrete account adapter evidence |
| `BP-RZ-02` stakeholder/KYC/product contract | Does not block | `BLOCKS` | `BLOCKS` | Creator-owned UX; normalized readiness still needs evidence |
| `BP-RZ-03` bank validation states | Does not block | `BLOCKS` | `BLOCKS` | Exact current destination fence required |
| `BP-RZ-04` direct transfer capability/contract | Does not block | `BLOCKS` | `BLOCKS` | Gates concrete transfer adapter |
| `BP-RZ-05` hold/release semantics | Does not block | `BLOCKS` | `BLOCKS` | Internal recovery only; no Brand release control |
| `BP-RZ-06` signed webhook contracts/config | Does not block | `BLOCKS` | `BLOCKS` | Event maps stay disabled until proven |
| `BP-RZ-07` event ordering/replay | Does not block | `BLOCKS` | `BLOCKS` | Current rank assumptions are not provider evidence |
| `BP-RZ-08` partial/full/multiple reversals | Does not block | `BLOCKS` | `BLOCKS` | Settlement/reversal interaction unproven |
| `BP-RZ-09` original-source Brand Return capability | Does not block | `BLOCKS` | `BLOCKS` | No concrete provider adapter/capability list |
| `BP-RZ-10` error/retry/ambiguity/read-after-write | Does not block | `BLOCKS` | `BLOCKS` | Safe retry requires exact evidence |
| `BP-RZ-11` historical Live warning/current Live readiness | Does not block | Does not by itself block Test | `BLOCKS` | Must be reverified at G4 |
| `BP-RZ-12` staged controlled Test and production proof | Does not block | `BLOCKS` | `BLOCKS` | Evidence gate itself |

None of BP-RZ-01 through BP-RZ-12 is closed by repository source, synthetic tests, blank configuration, or Phase C. None is silently deferred beyond V1 production readiness.

## 7. Migration gates

```text
EXPECTED_NEW_PAYOUTS_MIGRATIONS = 2
MAX_NEW_FINANCIAL_MIGRATIONS_WITHOUT_HUMAN_REVIEW = 0
```

| Migration | Owner | Required gate | Forbidden behavior |
|---|---|---|---|
| M1 reserve approval/execution-attempt audit + obligation/attempt provenance/indexes | Payouts/financial | Logical shape at P0; regenerate exact Prisma/SQL/FKs/indexes and dry-run/rollback only on accepted `BP-G08A` convergence tree | No destructive type rewrite, invented backfill, second ledger/vault/Return |
| M2 durable payment support case | Brand Payouts V1 intake; Support Operations consumer | Exact schema/SQL/idempotency/privacy/rollback plus `BP-G21` Security policy accepted | No financial cascade, raw provider payload, or provider ID client input |
| Campaign NET_45/60 | Campaign; excluded from count | Campaign owner acceptance | No mapping unknown NET_30 rows to guessed term |
| C-04 convergence | C-04; excluded from count | Accepted post-P1.4 base and C-04 owner acceptance | No wholesale donor migration replay |

Any destructive migration requirement stops as `DESTRUCTIVE_MIGRATION_REQUIRED`.

## 8. Circuit breakers

Any breaker means immediate STOP, preservation of the last validated checkpoint, and return of exact evidence. No workaround or scope expansion is allowed.

```text
PRODUCT_DECISION_REQUIRED
ARCHITECTURE_CONFLICT
UPSTREAM_CONTRACT_CONFLICT
C04_SETTLEMENT_HANDOFF_MISSING
FINANCIAL_AUTHORIZATION_GAP
CALLER_AUTHORED_FINANCIAL_TRUTH
CROSS_BRAND_ISOLATION_FAILURE
SENSITIVE_FINANCIAL_DATA_LEAK
DUPLICATE_LEDGER_CREATED
DUPLICATE_VAULT_CREATED
DUPLICATE_BRAND_RETURN_PATH
UNAUTHORIZED_SCHEMA_MIGRATION
DESTRUCTIVE_MIGRATION_REQUIRED
HISTORICAL_FINANCIAL_TRUTH_FABRICATED
PAYMENT_DUE_DATE_DRIFT
UNSUPPORTED_RAIL_EXECUTED
TDS_OR_TAX_LOGIC_INVENTED
NON_AUTHORITATIVE_DOCUMENT_PRESENTED_AS_OFFICIAL
PROVIDER_SUCCESS_FABRICATED
RAZORPAY_UNAUTHORIZED_MUTATION
BRANCH_DIVERGENCE
RESUME_STATE_INVALID
PRODUCTION_RUNTIME_FAILURE
```

Provider-lane stops also include unverified/drifted webhook mapping, raw-body/signature failure, unverified provider idempotency, unexpected settlement/reversal ordering, ambiguous create without safe lookup, source-refund capability mismatch, or any Test action outside the exact G3 envelope.

## 9. Resume gate

Every resume verifies the Product Authority SHA, accepted architecture SHA, exact checkpoint SHA, branch/remote divergence, clean worktrees, current dependency states, migrations applied only where authorized, and the prior phase smoke gate. A mismatch is:

```text
RESUME_STATE_INVALID
-> STOP
```
