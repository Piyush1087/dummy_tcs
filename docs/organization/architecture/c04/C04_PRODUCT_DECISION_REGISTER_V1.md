# C-04 Product Decision Register V1

`C04_PRODUCT_DECISION_REGISTER_V1`

Date: 2026-09-04
Module: Creator-side Collaboration within the shared Brand + Creator Collaboration domain
Authority: `C04_PARENT_AUDIT_ACCEPTANCE_AND_PRODUCT_FREEZE_V1`
Status: **FROZEN**
Stage B acceptance: `C04_STAGE_B_DEPENDENCY_AND_EXTERNAL_BOUNDARY_CORRECTION_V1`; no Product decision reopened

## 1. Product boundary

C-04 extends the existing shared Collaboration aggregate, lifecycle, persistence model, command model, and Brand/Creator workspace. It does not create a Creator-only Collaboration engine.

All shared Collaboration semantics identified as frozen in `C04_SHARED_COLLABORATION_SYSTEMS_UNDERSTANDING_AND_PRODUCT_GAP_AUDIT_V1` remain frozen unless a later explicit Parent/Product decision reopens them.

## 2. `C04-PD-01` — Creator Team command capability

**Decision: OPTION 2 — FROZEN**

| Creator Team role | Read | Chat | Creator Collaboration commands |
|---|---:|---:|---:|
| `OWNER` | YES | YES | YES |
| `MANAGER` | YES | YES | YES |
| `ASSISTANT` | YES | YES | NO |

### 2.1 State-changing Creator commands

Where otherwise permitted by authoritative Collaboration state, Creator Collaboration commands include:

- first NEGOTIABLE proposal;
- accept or decline the Brand counter;
- fulfillment destination confirmation or one-Collaboration override;
- fulfillment confirmation or issue reporting;
- Deliverable submission or resubmission;
- publishing evidence or compliance-correction submission;
- Creator cancellation;
- Creator-class feedback submission;
- any future equivalent workflow mutation.

### 2.2 Frozen invariants

- The domain party is the canonical C-05 Creator subject, not the currently acting User.
- Every state-changing command and resulting event retains the actual Team actor User, membership, role, workspace, and subject context as applicable.
- USER chat retains the actual sender and applicable Team actor context.
- Assistant chat is communication only and never confers workflow authority.
- Assistant sees authorized Collaboration history/state but receives no state-changing Creator capability.
- Backend-derived `availableActions` is authoritative. The frontend does not infer an action from role alone.
- A role or membership change takes effect on the next authoritative request/refetch; stale commands fail closed.
- Creator-class uniqueness remains subject-scoped. For example, Team membership does not create multiple Creator feedback slots.

## 3. `C04-PD-02` — Physical fulfillment destination

**Decision: OPTION 3 — EXPLICIT EXECUTION CONFIRMATION — FROZEN**

For physical fulfillment only:

```text
physical fulfillment becomes applicable
→ read current C-05 default delivery contact/address
→ present it for Collaboration execution
→ authorized Owner/Manager confirms it
   OR supplies a one-Collaboration override
→ persist the confirmed Collaboration delivery destination
   with source/provenance
→ Brand physical dispatch becomes available
```

### 3.1 Frozen invariants

- C-05 remains canonical owner of reusable/default address and contact data.
- C-04 does not create an editable default-address book.
- A Collaboration override changes only that Collaboration and never mutates C-05.
- Later C-05 changes never silently rewrite an already confirmed Collaboration destination.
- Assistant may read the Collaboration and destination-confirmation status but may not confirm or change the destination; field-level PII projection follows least-privilege architecture.
- Brand physical dispatch remains unavailable until a valid Collaboration destination is confirmed.
- Non-physical fulfillment never requires shipping/contact information.
- Confirmed destination persistence includes its source and provenance.
- Exact persistence, versioning, stale-read protection, and PII-handling mechanics are architecture decisions.

## 4. Shared semantics not reopened

No new Product decision is required for:

- Collaboration identity by unique source Application;
- multiple Collaborations from multiple distinct approved Applications for the same Creator × Campaign;
- the five-stage shared workflow and separate lifecycle;
- FIXED vs NEGOTIABLE entry;
- the absence of a Creator commercial proposal in C-03;
- the first C-04 proposal and single Brand-counter sequence;
- Campaign minimum-payout enforcement;
- full commercial-reserve securement;
- fulfillment applicability and bounded remediation;
- per-Deliverable production, revisions, auto-approval, publishing, and compliance;
- Brand end / Creator cancellation and financial resolution;
- entitlement vs payout/refund execution;
- completion and double-blind feedback;
- persisted truth vs realtime invalidation;
- post-terminal historical/residual access and chat under frozen shared authority;
- Collaboration Brief source and cross-document boundary;
- frontend reuse/Aurora/Stitch decision order.

## 5. Cross-module ownership

| Owner | Frozen responsibility consumed by C-04 |
|---|---|
| C-03 | Approved Application, immutable Application snapshot, unique `sourceApplicationId`, same-transaction provision/reuse seam, no Creator proposal |
| Shared Collaboration | Aggregate, lifecycle, workflow, command/read contracts, execution snapshot, events, chat, financial-resolution semantics |
| C-05 | Creator subject, Team actor/membership, persistent shell, provider continuity, default contact/address, legal/profile, provider-neutral payout destination |
| C-06 / Escrow / Payout | Beneficiary/KYC/AML/Tax, provider execution and provider webhook authentication, payout/disbursement/refund execution; C-04 consumes provider-neutral trusted execution state only |

## 6. Product freeze state

```text
C04_PRODUCT_DECISION_REGISTER_V1 = FROZEN
C04_PRODUCT_LOGIC = FROZEN
OPEN_PRODUCT_DECISIONS = NONE
C04_IMPLEMENTATION = NOT_AUTHORIZED
```

This register may be changed only by a later explicit Parent/Product authority.
