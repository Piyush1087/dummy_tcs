# Collaboration Phase 4.0A — Execution Open-Decision Freeze

**Status:** CANONICAL / FROZEN FOR PHASE 4 IMPLEMENTATION  
**Scope:** Resolve the remaining execution decisions surfaced by Phase 4.0 before Fulfillment/Production/Publishing implementation.  
**Implementation baseline:** `Piyush1087/creator-commerce-backend-v2-clone` @ `fa0f0ebe94dd18406b0e0e8cf1b130f23bb66e02`

This artifact is a narrow execution-policy overlay. It does not reopen frozen Collaboration identity, commercial, financial, lifecycle, timer, or frontend decisions.

---

## 1. `publishingRequired` upstream ownership — FROZEN

### Decision

`publishingRequired` is an explicit **Brief Deliverable authoring fact**.

Canonical owner:

```text
UceBriefDeliverable / Brief Deliverable authoring
        ↓
locked into CollaborationDeliverableExecution.publishingRequired
```

It must not be inferred from:

- Campaign objective alone;
- Brand industry;
- platform name;
- deliverable format (`REEL`, `STORY`, `POST`, etc.) alone;
- whether the Campaign is paid or product/service consideration;
- historical creator behavior.

This is required because Creator Shop supports both:

- creator-handle publishing deliverables; and
- asset-only / content-production deliverables where the Brand receives the asset but public posting is not required.

### Authoring requirement

For every Brief Deliverable, the upstream Brief authoring flow must explicitly resolve one of:

```text
PUBLISHING_REQUIRED
ASSET_ONLY
```

The persisted execution fact remains the existing canonical boolean:

```prisma
publishingRequired Boolean
```

No default is allowed at the Collaboration provisioning boundary.

### Migration / current provisioning

Until Brief authoring persists this fact directly, provisioning may continue accepting an explicit trusted applicability mapping covering every source Brief Deliverable.

That compatibility input is temporary evidence acquisition, not the long-term owner.

Once upstream Brief authoring is patched, Collaboration provisioning must read the persisted Brief Deliverable fact and must stop requiring a caller-supplied duplicate mapping.

### Campaign relationship

Create Campaign may provide defaults or UX guidance when Brief Deliverables are created, but the final execution truth is stored per Brief Deliverable.

The Campaign objective can influence recommendation/UI defaults but cannot silently determine `publishingRequired`.

---

## 2. Explicit approval vs auto-approval and publication authorization — FROZEN

Production approval and publication authorization are distinct facts.

### Brand explicitly approves a Deliverable

If:

```text
publishingRequired = false
```

then Brand approval completes Production for that Deliverable and Publishing remains `PUBLISHING_NOT_REQUIRED` / authorization `NOT_REQUIRED`.

If:

```text
publishingRequired = true
```

then explicit Brand `ApproveDeliverable` means both:

1. the exact submitted version is approved for Production; and
2. the Brand authorizes that approved content for public posting.

Canonical effect:

```text
Deliverable state       → APPROVED
Publishing authorization→ AUTHORIZED
Publishing state        → AWAITING_PUBLISHING
```

No second redundant Brand authorization click is required after explicit Brand approval.

### 72-hour auto-approval

`AutoApproveDeliverable` means only that the Brand review SLA expired without a valid Brand revision/rejection command.

It satisfies Production but does **not** constitute Brand publication consent.

For a publishing-required Deliverable:

```text
Deliverable state        → AUTO_APPROVED
Publishing authorization → NOT_AUTHORIZED
Publishing state         → AWAITING_PUBLISHING
```

The Creator must not publish yet.

### New Brand commands after AUTO_APPROVED

For a publishing-required `AUTO_APPROVED` Deliverable, expose exactly these Brand decisions:

```text
AuthorizePublishing
DeclinePublishing
```

#### `AuthorizePublishing`

Actor: `BRAND`

Preconditions:

- Collaboration lifecycle `ACTIVE`;
- Deliverable `AUTO_APPROVED`;
- `publishingRequired = true`;
- authorization `NOT_AUTHORIZED`;
- no terminal financial resolution.

Effect:

```text
authorizationState → AUTHORIZED
publishing state   → AWAITING_PUBLISHING
```

Creator may then publish and submit evidence.

#### `DeclinePublishing`

Actor: `BRAND`

Meaning:

The Brand accepts the auto-approved production outcome but explicitly instructs the Creator **not to publish publicly**.

This is Brand-directed non-publication, not Creator publishing non-performance.

Effect:

- Creator is not permitted/required to publish that Deliverable;
- the Deliverable is treated as validly bypassed for Publishing execution;
- the Collaboration enters the Brand-protected post-securement financial path once all other execution requirements are resolved;
- Creator entitlement follows the frozen protected-Advance policy rather than being reduced to zero for Creator non-performance;
- commission and GST allocation follow the resulting Creator entitlement proportionally under Phase 3.1.

The exact persisted publishing-state representation may use the existing canonical state set plus financial-resolution/end metadata; do not invent a second lifecycle state merely for declined publication. The command/event/reason code must preserve the distinction explicitly.

### No Creator self-publication after auto-approval

`AUTO_APPROVED + NOT_AUTHORIZED` must never expose `SubmitPublishingEvidence` or otherwise imply Creator permission to publish.

---

## 3. Minimal canonical end / exception reason taxonomy — FROZEN

The existing `CollaborationFinancialOutcome` enum remains the financial classification authority.

Phase 4 commands must additionally use stable reason codes so Brand-directed non-publication, Creator non-performance, hard-stops, and general exits are not collapsed into free-form text.

Minimum canonical reason codes:

```text
NEGOTIATION_DECLINED
BRAND_EXIT_PRE_SECUREMENT
CREATOR_EXIT_PRE_SECUREMENT
BRAND_EXIT_POST_SECUREMENT
BRAND_DECLINED_PUBLICATION
CREATOR_CANCELLED_POST_SECUREMENT
CREATOR_NON_PERFORMANCE
CREATOR_PUBLISHING_NON_PERFORMANCE
FULFILLMENT_HARD_STOP
PRODUCTION_HARD_STOP
ADMIN_RESOLUTION
OTHER_POLICY_RESOLUTION
```

Free-form `reasonText` may accompany these codes but must not determine financial behavior.

### Required mapping

| Reason code | Canonical financial outcome | Core MVP entitlement behavior |
|---|---|---|
| `NEGOTIATION_DECLINED` | `NEGOTIATION_EXIT` | Creator 0; no secured obligation |
| `BRAND_EXIT_PRE_SECUREMENT` | `PRE_SECUREMENT_EXIT` | Creator 0; no Creator entitlement |
| `CREATOR_EXIT_PRE_SECUREMENT` | `PRE_SECUREMENT_EXIT` | Creator 0; no Creator entitlement |
| `BRAND_EXIT_POST_SECUREMENT` | `BRAND_PROTECTED_POST_SECUREMENT_EXIT` | Creator protected Advance; remainder refundable |
| `BRAND_DECLINED_PUBLICATION` | `BRAND_PROTECTED_POST_SECUREMENT_EXIT` | Creator protected Advance; remainder refundable |
| `CREATOR_CANCELLED_POST_SECUREMENT` | `CREATOR_NON_PERFORMANCE` | Creator 0; full refundable commercial amount to Brand |
| `CREATOR_NON_PERFORMANCE` | `CREATOR_NON_PERFORMANCE` | Creator 0; full refundable commercial amount to Brand |
| `CREATOR_PUBLISHING_NON_PERFORMANCE` | `CREATOR_PUBLISHING_NON_PERFORMANCE` | Creator 0; full refundable commercial amount to Brand |
| `FULFILLMENT_HARD_STOP` | `FULFILLMENT_HARD_STOP` | Creator 0; full refundable commercial amount to Brand |
| `PRODUCTION_HARD_STOP` | `PRODUCTION_HARD_STOP` | Creator protected Advance; remainder refundable |
| `ADMIN_RESOLUTION` | `ADMIN_RESOLUTION` | Admin-provided explicit entitlement; no implicit default |
| `OTHER_POLICY_RESOLUTION` | `OTHER_POLICY_RESOLUTION` | must be explicit/Admin or future frozen policy |

### Clarification: Brand-directed non-publication

`BRAND_DECLINED_PUBLICATION` applies only when the Brand is the party preventing public posting after a Deliverable has validly satisfied Production through Brand approval or auto-approval.

It must not be used when:

- the Creator fails to produce required content;
- the Creator refuses to publish after Brand authorization;
- the Creator removes/invalidates required publishing evidence;
- compliance fails due to Creator non-performance.

Those belong to Creator non-performance / publishing non-performance paths.

### General `EndCollaboration`

A future general `EndCollaboration` command may accept only actor-appropriate reason codes from this taxonomy.

The caller cannot choose `CollaborationFinancialOutcome` or monetary entitlement directly.

Backend policy maps actor + current stage/state + reason code to the canonical financial outcome.

Admin resolution remains the only MVP path permitted to supply an explicit exception entitlement outside deterministic policy.

---

## 4. Brand Support `OTHER` — FROZEN

Do not create a second physical/digital/service fulfillment taxonomy.

`UceBrandSupportType` remains the upstream authority:

```text
PRODUCT
SERVICE
EXPERIENCE
ACCESS_SUBSCRIPTION
OTHER
```

For `OTHER`, use the canonical generic Fulfillment evidence capability already represented by:

```prisma
genericFulfillmentEvidence Json?
```

### `OTHER` execution

Brand `ProvideFulfillment` must supply:

- a human-readable description of what was provided;
- provider-neutral evidence/reference where available;
- optional structured metadata appropriate to the support.

Then:

```text
AWAITING_BRAND_FULFILLMENT
→ AWAITING_CREATOR_CONFIRMATION
```

Creator may:

- `ConfirmFulfillment`; or
- `ReportFulfillmentIssue`.

The same remediation / second unresolved issue hard-stop rules apply.

`OTHER` must not be silently converted into `PRODUCT`, `SERVICE`, `EXPERIENCE`, or `ACCESS_SUBSCRIPTION`.

---

## 5. Fulfillment evidence mapping — implementation rule

Phase 4.1 may use the existing canonical persistence fields as follows:

```text
PRODUCT
→ shipmentTrackingRef / courierName / generic evidence where needed

ACCESS_SUBSCRIPTION
→ accessEvidenceRef and/or redemptionCode

SERVICE
→ serviceEvidenceRef + generic metadata if useful

EXPERIENCE
→ serviceEvidenceRef + generic metadata if useful

OTHER
→ genericFulfillmentEvidence
```

This is an execution mapping, not a new domain taxonomy.

The Brand Support definition itself remains locked in the execution snapshot.

---

## 6. Publishing state/read-model consequences

The read model must distinguish at minimum:

```text
Production approval state
Publishing required?
Publication authorization state
Publishing execution state
```

For publishing-required Deliverables:

```text
APPROVED
→ authorization = AUTHORIZED
→ Creator action may become SubmitPublishingEvidence
```

```text
AUTO_APPROVED
→ authorization = NOT_AUTHORIZED
→ Brand action = AuthorizePublishing | DeclinePublishing
→ Creator has no publishing action
```

After `AuthorizePublishing`:

```text
Creator action = SubmitPublishingEvidence
```

After `DeclinePublishing`:

- no Creator publishing action;
- read model must expose Brand-directed non-publication reason/outcome;
- downstream financial-resolution/settlement path must not classify the Creator as non-performing.

---

## 7. Timer consequence

The 72-hour timer ends Brand **Production review**, not Brand publication-consent rights.

Therefore:

```text
72h expiry
→ AutoApproveDeliverable
→ Production satisfied
→ if publishingRequired = true, Brand publication decision still required
```

No publication-consent timeout is frozen.

A Brand may therefore remain the required actor after auto-approval until `AuthorizePublishing`, `DeclinePublishing`, or a future Admin/exception path resolves the Collaboration.

Do not invent an automatic publication authorization deadline in Phase 4.

---

## 8. Schema impact

### No new Collaboration lifecycle or workflow stage

No additional stage/lifecycle value is required by this freeze.

### Existing publishing authorization enum remains sufficient

```prisma
enum CollaborationPublicationAuthorizationState {
  NOT_REQUIRED
  NOT_AUTHORIZED
  AUTHORIZED
}
```

`DeclinePublishing` is represented through the command/event/end-reason/financial-resolution path rather than adding `DECLINED` to the authorization enum in this phase.

### Brief Deliverable upstream delta

The upstream Brief Deliverable domain must gain an explicit persisted publishing applicability field before the temporary provisioning mapping can be retired.

The exact Campaign/Brief schema patch should be performed during implementation reconciliation against the integrated production `UceBriefDeliverable` model.

Do not default existing historical rows to false. Historical migration requires explicit compatibility handling.

---

## 9. Command-contract additions for later Phase 4 slices

Phase 4 implementation must eventually add:

```text
AuthorizePublishing
DeclinePublishing
```

These are not Phase 4.1 commands; they belong to the Publishing slice after Production/auto-approval exist.

The general exception slice must validate the stable reason-code taxonomy above rather than accepting arbitrary financial outcome selection.

---

## 10. Remaining intentionally open dependencies

This freeze does **not** resolve:

- pause/resume authority or timer effects;
- scheduler/queue technology;
- submission asset/storage provider;
- exact Payout/Escrow execution transport;
- FX transport;
- TDS execution;
- non-India financial policy;
- detailed Admin dispute tooling;
- a publication-consent timeout (none exists in MVP);
- compliance timeout/auto-resolution.

These must not be inferred during Phase 4.1–4.4.

---

## 11. Phase 4 implementation consequence

The implementation sequence remains:

```text
4.1 Fulfillment execution + focused financial-resolution helper
4.2 Production submission/version/revision execution
4.3 72-hour AutoApproveDeliverable SYSTEM command
4.4 Publishing authorization/evidence/compliance
4.5 General cancellation/termination/Admin resolution
4.6 Settlement orchestration + authoritative execution confirmation
4.7 Completion + feedback + 48-hour reveal
```

Phase 4.1 may begin after this freeze.
