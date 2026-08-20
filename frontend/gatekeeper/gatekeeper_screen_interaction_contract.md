# Gatekeeper v1 — Screen & Interaction Contract

**Version:** 1.0  
**Status:** FROZEN  
**Scope:** Homepage URL entry → Gatekeeper admission/recovery → single Industry confirmation modal → Surface execution start

## 1. Authority

This contract is the canonical frontend screen/interaction authority for Gatekeeper v1. It consumes, and does not replace:

- `docs/organization/charters/frontend_ai_worker_charter.md`;
- `intelligence/product_authority/gatekeeper_v1_product_execution_authority.md`;
- `intelligence/product_authority/gatekeeper_v1_industry_confirmation_amendment.md`;
- `intelligence/runtime/admission/gatekeeper_admission_contract.yaml`;
- executable backend/IE Industry confirmation behavior at commit `70da46489beb3babf4109a82516b41c7dc2f2715`;
- Aurora 5.0 design-system authority.

Authoritative Industry confirmation endpoint:

```text
POST /api/v1/discovery/:leadId/confirm-industry
```

Required confirmation payload semantics:

```text
selectedIndustry
explicitConfirmation: true
```

Detailed Surface progress and post-Surface Intelligence review are outside this contract.

## 2. Screen model

Gatekeeper does not create a separate processing page.

The user remains in the existing homepage URL-entry area through submission, processing and Gatekeeper recovery.

```text
Homepage URL entry
    ↓
client UX validation
    ↓
SUBMITTING / RESOLVING in place
    ↓
Gatekeeper result
    ├─ recovery state below URL entry
    └─ ADMITTED → single pre-scan confirmation modal
                         ↓
                 Industry confirmation
                         ↓
                 Start Brand Intelligence Scan
                         ↓
                 trigger Surface execution
```

A successful `ADMITTED` result must not render a standalone success card.

## 3. URL-entry composition

The canonical URL-entry module contains:

1. Website URL input.
2. Ownership/authorization attestation checkbox.
3. Terms + Privacy acceptance checkbox with linked Terms and Privacy labels.
4. Primary CTA: `Analyze My Brand`.
5. Lightweight validation, processing or recovery region beneath the entry controls.

### 3.1 Ownership attestation

Approved meaning:

> I confirm I own or am authorized to represent this brand.

This is an attestation. It must not imply domain ownership verification, identity verification or organization verification.

### 3.2 Terms and Privacy

Terms and Privacy share one required acceptance control. Both names must be links to the canonical legal destinations.

The production implementation must submit/persist the legal acceptance/version data required by application authority; the frontend does not invent those versions.

## 4. Client validation

Frontend validation is limited to immediate user-correctable UX checks:

- empty URL;
- basic malformed URL;
- obvious social-profile URL;
- obvious marketplace URL;
- missing ownership/authorization attestation;
- missing Terms/Privacy acceptance.

Errors should appear adjacent to the relevant control, be programmatically associated where applicable, and not rely on color alone.

Frontend may normalize common URL formatting for convenience, but backend owns canonical normalization and all consequential admission/security/business checks.

Frontend must not maintain authoritative policy for private/local targets, restricted TLDs/domains, reachability, redirects, parked sites, account/organization state, resume eligibility, rate/abuse controls, verification, language, serviceability, Industry or hard blocks.

## 5. Submission and processing

Submitting a locally valid form enters `SUBMITTING`, then `RESOLVING` while the authoritative Gatekeeper flow executes.

During processing:

- remain in the homepage entry area;
- prevent duplicate submission;
- retain a lightweight visual treatment beneath the URL control;
- prefer normalized real admission/runtime activity when backend contracts expose it;
- otherwise show one truthful generic processing message;
- do not rotate fictional timer-driven status claims.

## 6. Recovery rendering

Recovery appears directly below the URL-entry area and is driven by:

```text
outcome
reason_code
recovery_actions[]
manual_review_eligible
```

The frontend must not infer permitted actions from backend message strings, CTA text or locally maintained policy.

### 6.1 Outcome treatments

| Outcome | Canonical frontend treatment |
|---|---|
| `DOMAIN_INVALID` | Inline correction/error state; URL remains editable where appropriate |
| `DOMAIN_UNREACHABLE` | Recoverable connection/site-access state; preserve submitted domain |
| `EXISTING_BRAND` | Existing-account recovery state |
| `ORG_CLAIMED` | Claimed-organization recovery state |
| `RESUME_AVAILABLE` | Positive resumable-work state |
| `VERIFICATION_REQUIRED` | Verification recovery state |
| `UNSUPPORTED_LANGUAGE` | Unsupported-language recovery state |
| `UNSUPPORTED` | Unsupported/serviceability recovery state |
| `CLASSIFICATION_UNCERTAIN` | Classification uncertainty/review-eligible state when authority permits |
| `HARD_BLOCKED` | Terminal restriction state with no ordinary bypass |
| `TECHNICAL_FAILURE` | Retry/support-oriented technical failure state |
| `ADMITTED` | No card; open the single pre-scan confirmation modal |

Distinct outcomes may reuse a shared visual recovery composition as long as action semantics and analytics/state identity remain distinct.

## 7. Permitted recovery actions

Render actions only when allowed by canonical authority.

| Action | Frontend responsibility |
|---|---|
| `CONTINUE` | Enter the backend-authorized next state |
| `RESUME` | Invoke the canonical resume capability |
| `SIGN_IN` | Enter authentication |
| `REQUEST_ORG_ACCESS` | Invoke canonical organization-access request capability |
| `VERIFY_DOMAIN` | Enter domain-verification flow |
| `JOIN_WAITLIST` | Show waitlist email interaction and submit canonical waitlist capability |
| `REQUEST_CLASSIFICATION_REVIEW` | Submit canonical user-requested classification review |
| `RETRY` | Retry the failed Gatekeeper operation |
| `CONTACT_SUPPORT` | Open canonical support destination |

`JOIN_WAITLIST` is action-driven. `UNSUPPORTED` alone does not authorize waitlist UI.

`REQUEST_CLASSIFICATION_REVIEW` requires both `manual_review_eligible=true` and the explicit recovery action.

`industry_disagreement_flag` is not a user-requested review and does not automatically create `REQUEST_CLASSIFICATION_REVIEW`.

## 8. Email and review interactions

### 8.1 Waitlist

When `JOIN_WAITLIST` is returned:

```text
Join Waitlist
    ↓
email capture
    ↓
client email syntax validation
    ↓
canonical waitlist submission
    ↓
acknowledgement
```

The frontend must not infer waitlist reason, eligibility or Industry policy from display copy.

### 8.2 Organization access

When `REQUEST_ORG_ACCESS` is returned, the frontend may reuse the existing claimed-organization email/panel composition, but production behavior must call the canonical organization-access capability. Local logging/capture is not sufficient authority.

### 8.3 Classification review

When review is allowed, the frontend may present a lightweight request interaction. No admin review console is part of this scope.

Manual review concepts remain distinct:

- `industry_disagreement_flag`: operational marker on an accepted supported override;
- `manual_review_eligible`: user may request review for canonical unresolved/unsupported admission state;
- `REQUEST_CLASSIFICATION_REVIEW`: explicit user action.

## 9. Single pre-scan confirmation modal

The existing two-modal flow is superseded by one confirmation modal.

### 9.1 Entry

Entry condition: canonical Gatekeeper outcome `ADMITTED`.

### 9.2 Required content

The modal must:

- show detected brand/domain context;
- show top-level assessed Industry;
- communicate readiness for deeper Brand Intelligence analysis;
- briefly explain what the next scan will do;
- show a product-approved approximate time;
- explain that a domain-linked work email and Meta access may be useful later;
- explicitly state those later inputs are not mandatory to start this scan;
- explain that the user will review resulting Intelligence;
- provide the primary `Start Brand Intelligence Scan` action.

Do not include Sub-industry editing.

Do not explain the full Creator Shop campaign lifecycle.

Do not claim verification has already occurred unless another authoritative state has actually completed it.

## 10. Industry selection

### 10.1 Supported MVP Industries

Display labels:

- D2C
- AI / SaaS
- Healthcare
- Offline Services

Canonical values:

- `D2C`
- `SAAS_AI`
- `HEALTHCARE`
- `OFFLINE_SERVICES`

### 10.2 Coming Soon Industries

Display a visually separated `Coming soon` group. Initial examples should use unsupported categories that do not materially overlap supported Industries, such as:

- Real Estate
- Education
- Media & Entertainment
- B2B / Agency

The Coming Soon list is presentation metadata and may evolve without changing Gatekeeper architecture, provided supported categories are not ambiguously duplicated.

Coming Soon options are not supported for MVP automated onboarding.

## 11. Same supported Industry

If the user keeps the assessed supported Industry and confirms:

```text
POST /api/v1/discovery/:leadId/confirm-industry
selectedIndustry = assessed Industry
explicitConfirmation = true
```

Authoritative semantics:

- confirmation source = `AI_ASSESSED_ACCEPTED`;
- `industry_disagreement_flag = false`;
- canonical outcome remains `ADMITTED`;
- Surface is eligible;
- confirmed Industry becomes downstream authority.

On an authoritative Surface-eligible response, the primary CTA may transition to Surface start.

## 12. Different supported Industry

If the user selects another supported Industry, do not apply it immediately.

Render `SUPPORTED_INDUSTRY_OVERRIDE_WARNING` explaining:

- Creator Shop detected Industry X;
- the user selected Industry Y;
- the user may cancel and keep X;
- the user may explicitly continue with Y.

Actions:

```text
Cancel / Keep detected Industry
Continue with selected Industry
```

If the user cancels, restore the assessed Industry and return to `DETECTED_INDUSTRY_READY`.

If the user explicitly continues, submit the authoritative confirmation endpoint.

Authoritative semantics for a supported override:

- preserve assessed Industry as provenance;
- confirmation source = `USER_CONFIRMED_OVERRIDE`;
- `industry_disagreement_flag = true`;
- no automatic classification-review recovery action;
- canonical outcome = `ADMITTED`;
- Surface remains eligible;
- confirmed supported Industry becomes downstream authority.

The disagreement may enter operational review later, but this does not block Surface execution.

A supported correction is not an admission bypass and is not the same as `REQUEST_CLASSIFICATION_REVIEW`.

## 13. Unsupported / Coming Soon confirmation

If the user selects a Coming Soon Industry, do not immediately change the canonical admission state.

Render `UNSUPPORTED_INDUSTRY_WARNING` explaining:

- the selected Industry is Coming Soon / unsupported for MVP onboarding;
- the user may cancel and keep the detected supported Industry;
- explicitly confirming the unsupported Industry will stop automated onboarding.

Actions:

```text
Keep detected Industry
Confirm unsupported Industry
```

If the user keeps the detected Industry, restore it and return to `DETECTED_INDUSTRY_READY`.

If the user explicitly confirms the unsupported Industry, submit the authoritative confirmation endpoint.

Authoritative semantics:

- confirmation source = `USER_CONFIRMED_UNSUPPORTED`;
- assessed-vs-confirmed provenance remains traceable;
- canonical outcome = `UNSUPPORTED`;
- reason code = `UNSUPPORTED_INDUSTRY`;
- Surface is ineligible;
- `surface_handoff = null`;
- recovery actions remain backend-authoritative.

The frontend must render the returned `UNSUPPORTED` recovery state and must not start Surface Intelligence.

The frontend must not locally manufacture `UNSUPPORTED` or automatically show a waitlist action merely because a Coming Soon label was selected.

## 14. Surface-start boundary

The Gatekeeper frontend may trigger Surface execution only after an authoritative Industry-confirmation response establishes all required preconditions, including:

- canonical outcome remains `ADMITTED`;
- confirmed Industry is supported;
- Surface eligibility is true;
- required Gatekeeper handoff data exists.

Primary CTA meaning:

```text
Start Brand Intelligence Scan
```

On activation:

```text
PRE_SCAN_CONFIRMATION
    ↓
STARTING_SURFACE_SCAN
    ↓
trigger canonical Surface execution
```

If Surface start is accepted, responsibility passes to the future Surface execution/progress contract.

Detailed Surface progress UX is explicitly deferred and must not be invented in this contract.

## 15. Responsive behavior

Desktop and mobile are presentations of the same state model.

- Keep Gatekeeper processing/recovery within the homepage URL-entry region on both form factors.
- Reflow controls rather than changing validation or action semantics.
- The modal may transform responsively according to Aurora overlay patterns.
- Do not create mobile-only admission rules or different Industry-confirmation semantics.
- Preserve clear CTA hierarchy and touch-target requirements.

## 16. Accessibility

Production reconciliation must include:

- programmatically associated validation messages;
- keyboard-operable checkboxes and legal links;
- visible focus states;
- color-independent warning/error/status communication;
- accessible action names;
- modal title/description relationships;
- focus entry and trapping while modal is open;
- Escape/close behavior where allowed by product state;
- focus restoration on modal close;
- stable focus after recovery transitions.

## 17. Existing frontend reuse classification

| Existing asset | Classification | Direction |
|---|---|---|
| Homepage hero / landing composition | `REUSE` | Preserve Gatekeeper placement |
| `LandingUrlCapture` | `REUSE_WITH_CLEANUP` | Keep input/responsive mechanics; remove business-state inference |
| `url-schema.ts` | `PARTIAL` | Keep UX syntax/obvious host checks only; remove authoritative policy ownership |
| `LandingPageView` | `PARTIAL` | Keep composition; extract canonical Gatekeeper state/orchestration |
| discovery transport clients | `REUSE_WITH_RECONCILIATION` | Preserve compatible resolve/validate transport while consuming canonical result |
| legacy discovery contracts | `RECONCILE` | Align runtime schemas/types to canonical Gatekeeper result |
| waitlist email UI | `REUSE_WITH_CLEANUP` | Render only from `JOIN_WAITLIST` |
| org-claimed recovery UI | `PARTIAL` | Reuse presentation after canonical request capability is wired |
| onboarding session/resume helpers | `PARTIAL` | Use only behind backend-authoritative `RESUME_AVAILABLE` |
| `ProcessPreviewModal` | `LEGACY_REFERENCE_ONLY` | Superseded by single confirmation modal |
| `SetupVerificationModal` | `LEGACY_REFERENCE_ONLY` | Superseded by single confirmation modal |
| Aurora controls/status/overlay primitives | `REUSE` | Canonical visual-system authority |

## 18. Stitch boundary

Stitch must not be called until this frozen contract is explicitly accepted for visual execution.

Recommended future representative visual families:

1. Gatekeeper URL entry — desktop/mobile.
2. Representative recovery state — desktop/mobile.
3. Pre-scan confirmation modal — desktop/mobile.
4. Industry warning variant — desktop/mobile.

Do not generate one Stitch screen for every backend outcome unless a materially distinct composition is discovered.

## 19. First implementation boundary

When production implementation is authorized, start with semantic infrastructure rather than visual reconciliation:

1. runtime Gatekeeper response schema;
2. canonical `GatekeeperViewState` model;
3. outcome-to-view-state mapper;
4. action dispatcher;
5. UX-only submission schema;
6. Industry-confirmation request/response adapter for `POST /api/v1/discovery/:leadId/confirm-industry`;
7. contract/state tests for every canonical outcome, recovery action and Industry-confirmation branch.

Do not begin detailed Surface progress work under this Gatekeeper contract.
