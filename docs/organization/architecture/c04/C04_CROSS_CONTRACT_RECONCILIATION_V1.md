# C-04 Cross-Contract Reconciliation V1

`C04_CROSS_CONTRACT_RECONCILIATION_V1`

Date: 2026-09-04
Status: **ACCEPTED**
Product authority: `C04_PRODUCT_DECISION_REGISTER_V1`
Systems audit: `C04_SHARED_COLLABORATION_SYSTEMS_UNDERSTANDING_AND_PRODUCT_GAP_AUDIT_V1` — ACCEPTED

## 1. Purpose

Reconcile the accepted shared Collaboration contracts with the accepted C-03 Application handoff and C-05 Creator subject/Team/contact contracts, without creating another lifecycle, aggregate, persistence family, or settings owner.

## 2. Authority order

1. `C04_PARENT_AUDIT_ACCEPTANCE_AND_PRODUCT_FREEZE_V1` and `C04_PRODUCT_DECISION_REGISTER_V1`.
2. Frozen shared Collaboration authority in `dummy_tcs@7aeb0512cb8270a6bae1169570e82b080f01807e`.
3. Accepted C-03 architecture at `dummy_tcs:c03/stage-b-architecture-execution-base@458875b939b738b8032409b6de72b6de70f53ed1`.
4. Accepted C-05 runtime/closeout at backend `156d5834266077be7e2b6a2d459bae5489edbbd6` and frontend `323658d4b147b95b5629ff8d91fa90b8fe9077e4`.
5. Accepted shared Collaboration runtime evidence at backend `13ce652f432560a91dde1f75ca9a21dfa76d054f` and frontend `39510031066c44f20d59d1375c01678f34e585f8`.
6. Current production-line and historical Creator/Phase G implementations as subordinate reuse evidence.

## 3. Reconciled aggregate identity

```text
one specific APPROVED Application
  → at most one canonical Collaboration
  → unique durable sourceApplicationId
  → one immutable Application snapshot as provisioning input
  → one locked Collaboration execution snapshot
```

The Collaboration domain party is the C-05 canonical Creator subject. The authenticated Team member is the actor.

### 3.1 Required identity fields for new canonical rows

| Identity | Meaning | Authority |
|---|---|---|
| `collaborationId` | Stable operational aggregate identity | Shared Collaboration |
| `sourceApplicationId` | Immutable unique source lineage | C-03 |
| `creatorProfileId` | Canonical Creator business subject | C-05 |
| `creatorWorkspaceId` | Team authorization/notification scope | C-05 |
| `brandProfileId` | Brand party/authorization scope | Shared Collaboration/Brand |
| `campaignId`, `campaignAssetId`, `briefId` | Immutable source lineage plus live navigation references | C-03/shared Collaboration |

Existing `creatorUserId` may remain temporarily for compatibility and exact-provenance migration. It must not remain the authorization boundary for new canonical rows.

### 3.2 Multiplicity

- `sourceApplicationId` is unique.
- Campaign × Creator is a non-unique lookup.
- Different approved Applications for the same Creator × Campaign may create different Collaborations.
- Approval never supersedes unrelated sibling Applications.
- Ambiguous legacy rows remain explicit compatibility rows; identity is never inferred from email, handle, title, SKU, or similarity.

## 4. C-03 → C-04 provisioning contract

The only canonical provisioning entry is the trusted port:

```ts
interface ApprovedApplicationCollaborationPort {
  provisionFromApprovedApplication(
    tx: Prisma.TransactionClient,
    input: { applicationId: string; approvalTransitionId: string },
  ): Promise<{ collaborationId: string; created: boolean }>;
}
```

The port:

- runs inside the C-03 approval transaction;
- loads and validates the approved Application and immutable snapshot itself;
- resolves the canonical Creator subject/workspace from stored lineage;
- never fabricates a User or Creator profile;
- creates or returns exactly one Collaboration for that Application;
- returns `created=false` on valid replay;
- initializes only from immutable snapshot facts;
- appends the Collaboration-created event in the same transaction;
- leaves provider/email/socket delivery asynchronous.

An approved Application without its Collaboration after commit is an invariant violation.

## 5. Application snapshot → Collaboration execution snapshot

| C-03 snapshot fact | C-04 persisted use | Reconciliation rule |
|---|---|---|
| Application reference/version | `sourceApplicationId` and application context | Immutable; never re-read mutable application fields for execution |
| Creator subject/workspace | Collaboration party/scope | C-05 identity, not actor User |
| Brand/Campaign/Asset/Brief | source lineage and display context | Preserve IDs plus locked display/obligation facts |
| Commercial model/currency | commercial initialization | Currency immutable for negotiation |
| FIXED amount | agreed Creator fee | Negotiation skipped/locked, then Securement |
| NEGOTIABLE minimum | minimum Creator fee snapshot | Initial proposal/counter/agreement cannot fall below it |
| Deliverables | one execution per required Deliverable | Never regenerate from mutable Brief |
| `publishingRequired` | per-Deliverable publishing applicability | Never infer from objective/media type |
| Brand Support type/value | Fulfillment applicability/subtype | Physical destination gate only when support requires physical delivery |
| Usage rights/Creator requirements | execution snapshot and Collaboration Brief | Display/reference; no second rights engine |
| Attribution/invitation/eligibility evidence | no ordinary C-04 projection | Exclude unless later explicit authority requires it |

## 6. Commercial reconciliation

### 6.1 FIXED

```text
immutable FIXED amount
→ agreed Creator fee locked
→ negotiation not required
→ SECUREMENT
```

### 6.2 NEGOTIABLE

```text
Application approval
→ Collaboration created with:
   creatorProposedFee = null
   brandCounterFee = null
   agreedCreatorFee = null
   negotiationState = AWAITING_CREATOR_PROPOSAL
→ authorized Owner/Manager submits first proposal
→ Brand accepts, counters once, or declines
→ Creator Owner/Manager accepts or declines counter
→ terms lock or Collaboration ends
```

The old `applicationProposedFee` assumption is retired for new C-03-sourced rows. A canonical `creatorProposedFee` is supplied only by the C-04 command.

All values use immutable snapshot currency. Proposal, counter, and agreement must be at least the locked NEGOTIABLE minimum. The Creator fee remains distinct from the Brand commercial reserve and payout execution.

## 7. C-05 subject and Team actor reconciliation

### 7.1 Authorization pipeline

```text
authenticated User
→ C-05 CreatorWorkspaceActorContext
→ verify active membership belongs to Collaboration creatorWorkspaceId
→ classify viewer as Creator domain party
→ derive state-valid Collaboration actions
→ intersect with C-04 Team-role policy
→ return backend-authoritative availableActions
```

### 7.2 Frozen C-04 role policy

| Role | Read | Post USER chat | State-changing Creator commands |
|---|---:|---:|---:|
| Owner | YES | YES | YES when state-valid |
| Manager | YES | YES | YES when state-valid |
| Assistant | YES | YES | NO |

Brand-side authorization and action semantics are unchanged.

### 7.3 Actor audit snapshot

Each state-changing Creator command appends an event retaining, as applicable:

- `actorUserId`;
- `actorMembershipId`;
- `actorRole`;
- `actorWorkspaceId`;
- `actorOrganizationId`;
- `subjectCreatorProfileId`;
- command/correlation ID and aggregate version.

USER messages retain sender User plus membership/role/workspace/subject audit context. Domain effects remain attributed to actor class `CREATOR`. Assistant chat cannot create a domain transition.

## 8. Physical fulfillment destination reconciliation

### 8.1 Applicability

The destination gate applies only when the locked Brand Support configuration requires physical delivery, normally `PRODUCT`. `SERVICE`, `EXPERIENCE`, `ACCESS_SUBSCRIPTION`, `OTHER`, and no-support flows do not require shipping unless their immutable support definition explicitly represents physical delivery.

### 8.2 State projection

```text
NOT_APPLICABLE
AWAITING_CREATOR_CONFIRMATION
CONFIRMED
```

This is a bounded fulfillment substate, not a new Collaboration lifecycle or top-level workflow stage.

### 8.3 Confirmation command

`ConfirmPhysicalDeliveryDestination` is available only to Owner/Manager when:

- Collaboration is active;
- Fulfillment is the current applicable stage;
- physical delivery is required;
- no destination has already been confirmed;
- no blocking/terminal resolution applies.

The command accepts one of:

1. **C-05 default:** a source contact ID and source `updatedAt`; the backend reloads the C-05 record and rejects stale/mismatched input.
2. **One-Collaboration override:** a structured destination validated under the C-05 contact/address shape; it is persisted only in C-04.

The command persists one immutable Collaboration delivery destination with source/provenance and actual Team actor audit. It never calls the C-05 write API.

### 8.4 Dispatch gate

For physical delivery:

```text
destination != CONFIRMED
→ Brand ProvideFulfillment/dispatch capability absent

destination = CONFIRMED
→ Brand ProvideFulfillment/dispatch may appear if all other shared-domain guards pass
```

Non-physical fulfillment ignores this gate.

## 9. C-05 contact ownership and PII boundary

C-05 remains owner of the reusable default. C-04 stores only the confirmed execution copy required to deliver this Collaboration.

Required provenance:

- source type: `C05_DEFAULT` or `COLLABORATION_OVERRIDE`;
- source contact ID and source update timestamp for default-based confirmation;
- confirmation timestamp and Team actor snapshot;
- destination schema version and content hash.

Full address/contact data is excluded from event, notification, realtime, analytics, and log payloads. Events carry only destination ID/source/hash. Full reads are limited to authorized Brand dispatch actors and Creator Owner/Manager; Assistant receives confirmation status and a non-sensitive summary. Later C-05 edits have no write-through effect.

## 10. Payout/legal/provider reconciliation

- C-04 may read C-05 payout-destination readiness and link to Creator Settings.
- C-04 must remove/retire its bank mutation and must not syntactically mark bank details verified.
- C-04 owns Product entitlement/resolution and consumes external execution state; it does not own beneficiary validation, KYC, AML, Tax, payout/disbursement/refund initiation, or provider settlement.
- C-06/Escrow/Payout owns provider execution, provider webhook authentication, beneficiary/KYC/AML/Tax handling, and payout/disbursement/refund execution.
- C-04 defines and consumes a provider-neutral trusted confirmation port. It validates the internal port contract, applies idempotent execution-state updates, and may prove behavior with deterministic test adapters; it does not receive or authenticate provider-originated webhooks.
- Live C-06 availability is not a C-04 MVP implementation dependency. Absence of live execution keeps the relevant leg pending/blocked honestly and never authorizes a synthetic paid/refunded state.
- Provider/Instagram interruption does not remove subject/Team access to existing Collaboration history. Provider-specific publishing actions show honest recovery only where the action actually requires that provider.

## 11. Read, chat, event, notification, and realtime reconciliation

| Layer | Reconciled authority |
|---|---|
| Read model | Backend derives lifecycle/stage/action owner/available actions; Creator capabilities are role-policy intersection |
| Chat | Persisted communication; readable on re-entry; terminal chat remains available under current frozen shared authority |
| Event | Canonical transactional audit of every consequential transition |
| SYSTEM message | Idempotent optional projection of a committed event; never state authority |
| In-app notification | Asynchronous consumer of committed events; subject-workspace recipient resolution; CTA filtered by current capability |
| Email/push | Deferred to notification owner/policy; never blocks Collaboration commit |
| Realtime | Invalidation/refetch only; fan-out to Brand scope and authorized Creator Team members |

All active Creator Team members may receive/read informational Collaboration updates. Only Owner/Manager receive a state-changing CTA/capability. Recipient membership is revalidated at delivery/read time; event payloads remain subject-scoped and contain no sensitive snapshot body.

## 12. Collaboration Brief reconciliation

The C-04 Collaboration Brief is a deterministic read projection of the locked Collaboration execution snapshot and agreed terms.

It is distinct from:

- the C-03 Application Brief Pack (“what the Creator applied to”);
- a legal agreement;
- an invoice or tax document;
- a payout statement.

Both authorized Brand and Creator Team readers may access it. It contains appropriate Brand/Campaign/Asset/Brief/Deliverables, publishing requirements, support, usage rights, commercial agreement, and Collaboration reference. It excludes bank secrets, payout credentials, Team-private data, Application attribution/eligibility evidence, private Brand notes, and provider credentials.

## 13. Legacy compatibility reconciliation

| Legacy evidence | Treatment |
|---|---|
| Missing `sourceApplicationId` | `LEGACY_COMPATIBILITY`; read/history only unless exact facts support safe transition |
| Direct `creatorUserId` | Compatibility lookup only; new authorization uses subject/workspace |
| Campaign × Creator uniqueness | Remove as canonical constraint; keep non-unique lookup |
| Application proposed amount | Historical compatibility only; no new C-03 source |
| Collaboration bank/default-address writers | Retire/410; route to C-05 owners |
| Six-stage feedback | Retire; feedback remains post-completion |
| Global media/revision/live URL | Retire for canonical rows; use per-Deliverable models |
| Barter/manual ordinary UI and 30/70 settlement | Retire/dormant as frozen shared authority specifies |
| Industry-driven logistics | Retire; use locked Brand Support |
| Later terminal-chat restriction | Retire unless Parent explicitly reopens the frozen chat policy |

## 14. Cross-contract resolution register

| ID | Conflict | Resolution | Status |
|---|---|---|---|
| C04-CCR-01 | Application proposal assumed vs C-03 none | Add C-04 first proposal and new negotiation substate | `RESOLVED_FOR_C04` |
| C04-CCR-02 | Out-of-band provisioner vs same C-03 transaction | Consume trusted transaction port only | `IMPLEMENTATION_GATE_C03` |
| C04-CCR-03 | Direct Creator user vs C-05 subject/Team actor | Persist subject/workspace; resolve actor per request | `RESOLVED_FOR_C04` |
| C04-CCR-04 | C-05 roles do not define C-04 permissions | Product Option 2 frozen | `RESOLVED_FOR_C04` |
| C04-CCR-05 | Collaboration shipping writer vs C-05 default owner | C-05 default read + immutable C-04 execution copy | `RESOLVED_FOR_C04` |
| C04-CCR-06 | Destination not confirmed vs Brand dispatch | Withhold physical dispatch until confirmation | `RESOLVED_FOR_C04` |
| C04-CCR-07 | Collaboration bank writer vs C-05/C-06 ownership | Retire writer; read readiness/link only | `RESOLVED_FOR_C04` |
| C04-CCR-08 | Accepted canonical runtime vs current C-05/C-03 branch histories | File/schema-level convergence on post-P1.4 base | `ARCHITECTURE_CONVERGENCE_REQUIRED` |
| C04-CCR-09 | Later read-only terminal chat vs frozen shared policy | Preserve frozen post-terminal chat | `RESOLVED_FOR_C04` |
| C04-CCR-10 | C-03 and C-04 Brief documents | Separate snapshot projections; renderer primitives may be shared | `RESOLVED_FOR_C04` |

## 15. Reconciliation terminal state

```text
C04_PRODUCT_LOGIC = FROZEN
C04_CROSS_CONTRACT_RECONCILIATION = ACCEPTED
OPEN_CROSS_CONTRACT_PRODUCT_CONFLICTS = NONE
C04_C03_BACKEND_HANDOFF_DEPENDENCY = IN_PROGRESS
C04_C03_FRONTEND_BASE_DEPENDENCY = IN_PROGRESS
C04_IMPLEMENTATION = NOT_AUTHORIZED
```
