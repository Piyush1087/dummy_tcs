# Identity Runtime Readiness

**Status:** LIVE IDENTITY TEST EXECUTED END-TO-END AGAINST REAL WEBSITES.  
The reference Identity runtime is operational for `identity_test`. Remaining work is production hardening/integration and known defect correction, not proof that the architecture can execute.

## What has been proven

The current reference runtime has successfully executed the Identity path end-to-end against real websites, including the shared execution stack used by `identity_test`.

The runtime foundation includes:

- execution-profile and artifact/Object/processor loading;
- Compiler dependency/DAG execution;
- real execution ID propagation;
- Model Registry resolution;
- Prompt Builder integration;
- provider execution through runtime boundaries;
- normalized Evidence consumption;
- structural/semantic validation;
- telemetry integration;
- developer/test execution entry path.

`identity_test` should therefore no longer be described as unimplemented, not runnable, or not live-tested.

## Current interpretation of runtime maturity

| Area | Current state | Meaning |
|---|---|---|
| Identity architecture/contracts | FROZEN reference implementation | Canonical branch authority exists |
| Shared Compiler/runtime | IMPLEMENTED reference runtime | Executes dependency-aware Intelligence tasks |
| `identity_test` | LIVE-TESTED | Has run end-to-end against real websites |
| Prompt/model/validation/telemetry path | IMPLEMENTED for reference runtime | Proven sufficiently for Identity test execution |
| Production canonical writes | NOT GENERALLY CLEARED | Requires current backend audit and resolved persistence mappings |
| Production onboarding wrapper | NOT IMPLIED BY `identity_test` | Admission, verification, reuse, lifecycle and authorization remain application concerns |
| Future branches/profiles | NOT AUTOMATICALLY APPROVED | Must follow frozen product authority |

## Known defect — Gatekeeper taxonomy validator

The frozen runtime profile `intelligence/runtime/execution_profiles/gatekeeper_scan.yaml` defines Gatekeeper classification with:

- controlled production Industry vocabulary;
- `provisional_sub_industry` as a provisional/free-form value;
- an explicit rule that Gatekeeper must **not** require controlled Sub-industry membership.

The current Identity validation bridge still applies canonical Industry -> Sub-industry membership validation to the Gatekeeper scope. That is inconsistent with the frozen `gatekeeper_scan` contract.

**Classification:** KNOWN BOUNDED VALIDATOR DEFECT.

Do not treat the validator's stricter behavior as product authority. Do not redesign the shared runtime because of this defect. Correct it only when Gatekeeper work resumes against frozen product decisions.

## Production persistence status

Identity Object mappings intentionally still contain markers such as VERIFY / RECONCILE / field-to-add / dedicated-structure-required where production storage was not conclusively settled.

These markers must not be resolved from documentation assumptions. When canonical writes become necessary, audit the then-current backend schema/models first and map Intelligence Objects to existing canonical storage wherever possible.

`identity_test` live execution does not override this requirement.

## Production onboarding boundary

A successful reference runtime test does not mean the production onboarding journey is complete. Production onboarding may still require application-layer controls such as:

- existing verified-brand handling;
- eligible scan reuse;
- abuse/rate safeguards;
- provisional checkpoint edits;
- domain verification and persist/resume behavior;
- lifecycle/manual-value protection;
- authorization and production rate limiting.

These controls wrap or dispatch Intelligence execution. They do not belong inside processor reasoning artifacts merely because they participate in the same user journey.

## Execution-profile directory distinction

There are intentionally two execution-profile-related locations:

- `intelligence/execution_profiles/` — canonical journey-level Intelligence orchestration authority. These files describe how already-defined Intelligence processors participate in journeys such as Identity onboarding/test.
- `intelligence/runtime/execution_profiles/` — runtime/application-facing execution profiles used by the executable runtime layer, including bounded operational profiles such as `gatekeeper_scan` and the runtime `identity_test` representation.

The two locations should not be merged or restructured as hygiene work. Where both represent the same conceptual journey, future work should keep them aligned and make authority explicit rather than assuming filename equality means identical responsibility.

## Current architectural verdict

**PASS — reference runtime proven; no new Intelligence architecture layer is required.**

The next Intelligence step is not runtime redesign. Await frozen Gatekeeper product decisions, then determine the minimum contract/processor/profile changes actually required.
