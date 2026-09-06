# Brand Payouts — P3A V6 Brand Return Test-Boundary Adjudication V1

`BRAND_PAYOUTS_P3A_V6_BRAND_RETURN_TEST_BOUNDARY_ADJUDICATION_V1`

## Decision

The V6 signature
`P3A_V6_BRAND_RETURN_FORM_READY_UNREACHABLE_WITH_FAIL_CLOSED_PROVIDER` is a
test-harness contract gap, not an application source defect.

The production-bound `FailClosedBrandReturnRefundProvider` correctly returns
an empty capability list. `BrandReturnService.getSummary()` consequently
returns zero `self_service_returnable_balance`, even when canonical AVAILABLE
funds and proven original-source funding provenance exist. Both Payouts and
Settings correctly prevent a Brand from submitting an amount that cannot be
executed by the active provider boundary.

Changing application source to advertise capability in this configuration,
allowing the frontend to disregard the authoritative zero balance, or altering
the summary response would fabricate provider readiness and violate frozen
Product Authority. No application correction is authorized.

## Remaining P3A proof

The Phase C P3A gate separately requires the existing Brand Return command UI
to be exercised against a deterministic fail-closed service adapter without a
provider call. V6 used only the production fail-closed binding and therefore
could not create that test state.

Authorize one evidence-only full-AppModule test harness that overrides only the
`BrandReturnRefundProvider` dependency:

- `capabilities()` returns exactly GATEWAY/INR so the canonical proven-source
  lot is form-ready;
- `assertExecutionAvailable()` throws
  `BrandReturnProviderSetupRequiredError`;
- `createRefund()`, `fetchRefund()` and `verifyTrustedFundingEvidence()` must
  never be called and must fail if invoked;
- no external request, provider credential, provider SDK mutation or provider
  action is permitted.

This creates the deterministic/fail-closed test boundary required by the
finite plan: the read side truthfully exposes the test capability, while the
command fails before allocation or external execution. It does not represent
production provider capability.

The harness must be created outside repository worktrees, hashed into evidence
and deleted during cleanup. It is not source, configuration authority or a
deployable artifact.

## Bounded validation

V7 runs only the four previously unreachable Brand Return lanes:

- PAYOUTS Owner at 390px;
- PAYOUTS Finance Admin at 1440px;
- SETTINGS Owner at 390px;
- SETTINGS Finance Admin at 1440px.

V1–V6 evidence supplies every unchanged gate. Add funds, the full historical
state matrix, full suites and unrelated admission/security matrices must not be
repeated.

## Frozen boundaries

```text
V6_CLASSIFICATION = TEST_HARNESS_CONTRACT_GAP
APPLICATION_SOURCE_CORRECTION = NOT_AUTHORIZED
PRODUCTION_PROVIDER_CAPABILITY = STILL_UNPROVEN_AND_DISABLED
TEST_ONLY_DI_OVERRIDE = AUTHORIZED_FOR_V7_ONLY
MIGRATION_FILES = NO_CHANGE
M1_M2 = NOT_AUTHORIZED
PROVIDER_ACTIONS = ZERO_REQUIRED
P3A_ACCEPTANCE = PENDING_V7_RETURN_ONLY_PROOF
P4 = NOT_STARTED
```
