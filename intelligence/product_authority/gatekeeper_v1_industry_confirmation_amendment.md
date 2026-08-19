# Gatekeeper v1 — Industry Confirmation Authority Amendment

**Status:** FROZEN  
**Scope:** Gatekeeper v1 pre-Surface Industry confirmation boundary  
**Authority relationship:** This amendment supersedes any conflicting Industry-confirmation or manual-review language in `gatekeeper_v1_product_execution_authority.md` and `gatekeeper_admission_contract.yaml` until those documents are consolidated.

## 1. Supported MVP Industries

The four Industries supported for Gatekeeper v1 automated onboarding are:

- `D2C`
- `SAAS_AI`
- `HEALTHCARE`
- `OFFLINE_SERVICES`

The pre-scan confirmation modal shows the AI-assessed top-level Industry and allows the user to change **Industry only**. Sub-industry is not editable here.

## 2. User accepts assessed supported Industry

If the user accepts the assessed supported Industry:

- that value becomes `confirmed_industry`;
- confirmed Industry becomes downstream Brand Intelligence authority;
- Surface Intelligence may start after the remaining preconditions pass.

## 3. User selects a different supported Industry

A different supported Industry is allowed, but must not be applied silently.

Before confirmation the UI must explain that Creator Shop detected Industry X while the user selected Industry Y and offer:

- cancel / keep the detected Industry; or
- explicitly continue with the selected supported Industry.

If the user explicitly continues:

- preserve `assessed_industry` as provenance;
- persist the user-selected value as `confirmed_industry`;
- set `industry_disagreement_flag = true`;
- set the confirmation source to `USER_CONFIRMED_OVERRIDE` or equivalent;
- the confirmed supported Industry becomes downstream authority;
- Surface Intelligence may proceed;
- the disagreement is flagged for operational review.

A supported user correction is **not** an admission bypass and is **not** the same workflow as a user-requested classification review.

## 4. Unsupported / Coming Soon Industry

Coming Soon Industries are not supported for MVP onboarding.

If the user selects an unsupported/Coming Soon Industry, the UI must first warn that the selected Industry is not supported for MVP and allow the user to:

- cancel the edit and keep the detected supported Industry; or
- explicitly confirm the unsupported Industry.

If the user explicitly confirms the unsupported Industry:

- persist the user's confirmation and assessed-vs-confirmed provenance;
- backend/application authority must resolve the journey to canonical `UNSUPPORTED`;
- Surface Intelligence must not start;
- recovery actions such as `JOIN_WAITLIST` are rendered only when returned by canonical backend authority.

The frontend must not manufacture `UNSUPPORTED` locally from a selected label.

## 5. Review concepts are distinct

The following concepts must remain separate:

### `industry_disagreement_flag`

Operational marker created when the user explicitly confirms a supported Industry different from the Gatekeeper-assessed Industry. This may place the onboarded brand into an operational review queue without blocking Surface execution.

### `manual_review_eligible`

Admission decision metadata indicating that the user may request review for an unresolved or unsupported Gatekeeper classification. It does not itself queue a review.

### `REQUEST_CLASSIFICATION_REVIEW`

Explicit user recovery action used when the canonical Gatekeeper result permits the user to request review. It is not automatically emitted merely because `industry_disagreement_flag = true`.

## 6. MVP operational review

Supported-Industry disagreements may be reviewed manually after onboarding. The initial operational target is review within approximately 24–48 hours.

Possible operational resolution may include accepting the user's correction, correcting the Industry, limiting support, or removing support where necessary. This operational review does not change the immediate v1 rule that an explicitly confirmed supported Industry may proceed to Surface Intelligence.

## 7. Coming Soon display taxonomy

The Coming Soon display list must not use labels that materially overlap supported MVP Industries.

Do **not** use broad labels such as `Technology`, `Hospitality`, or `Food & Beverages` as canonical Coming Soon Industry options because:

- `Technology` overlaps the supported `SAAS_AI` category;
- `Hospitality` may already fall within `OFFLINE_SERVICES`;
- `Food & Beverages` may already fall within `D2C` or `OFFLINE_SERVICES` depending on the business model.

For v1 UI examples, prefer currently unsupported top-level IndustryVertical-aligned categories such as:

- Real Estate
- Education
- Media & Entertainment
- B2B / Agency

The final display list remains presentation metadata and may evolve without changing Gatekeeper admission architecture, provided it does not misclassify businesses already covered by supported Industries.

## 8. Required implementation alignment

Before frontend implementation or merge readiness:

- the canonical Gatekeeper runtime/admission contract must incorporate this supported-override behavior;
- the backend must expose one authoritative Industry-confirmation action/capability;
- that action must return Surface eligibility / canonical recovery state;
- assessed Industry, confirmed Industry, confirmation source, and disagreement flag must remain traceable;
- unsupported confirmation must block Surface execution.
