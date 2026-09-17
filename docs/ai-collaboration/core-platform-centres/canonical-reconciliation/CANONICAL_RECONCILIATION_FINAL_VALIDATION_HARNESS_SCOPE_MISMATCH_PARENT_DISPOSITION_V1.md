# Canonical Reconciliation Final Validation — Harness Scope Mismatch Parent Disposition V1

~~~text
PARENT_DISPOSITION =
ACCEPT_FINAL_VALIDATION_CIRCUIT_BREAKER

CIRCUIT_BREAKER =
VALIDATION_SUPPORT_SCOPE_MISMATCH

CLASSIFICATION =
VALIDATION_HARNESS_AND_FIXTURE_INCOMPLETENESS

APPLICATION_REGRESSION =
NOT_ESTABLISHED

PRODUCT_CHANGE =
NO

ARCHITECTURE_DECISION_CHANGE =
NO

MIGRATION_CHANGE =
NO

FINAL_WHOLE_APPLICATION_VALIDATION =
NOT_STARTED_BEYOND_INTEGRITY_GATE

FINAL_WHOLE_APPLICATION_ACCEPTANCE =
NOT_PERFORMED

CAMPAIGN_INTELLIGENCE_RESUMPTION =
NOT_AUTHORIZED
~~~

## Superseded authority

The following Parent acceptance is superseded for final-validation readiness:

~~~text
SUPERSEDED_COMMIT =
5941fc08812e2a4bc27d138f076d741e5e097ecf

SUPERSEDED_PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_FINAL_VALIDATION_FIXTURE_HARNESS_PARENT_ACCEPTANCE_V1.md

SUPERSEDED_DISPOSITION =
DO_NOT_USE_AS_FINAL_VALIDATION_AUTHORITY
~~~

The following final-validation runner prompt is withdrawn and must not be rerun:

~~~text
WITHDRAWN_PROMPT_COMMIT =
8aacdf485dfb9094b2ec94311d63e4d785d7c995

WITHDRAWN_PROMPT_PATH =
docs/organization/prompts/canonical_reconciliation_final_whole_application_validation_local_codex_prompt_v1.md
~~~

This supersession does not alter any accepted application checkpoint.

## Accepted circuit-breaker evidence

The final validation stopped after immutable verification in 100.635 seconds with zero source mutation, database creation, provider call, financial write, browser execution or evidence publication.

The accepted support spec blob:

~~~text
FRONTEND_SPEC_BLOB =
debc0449dc0a87031d63b47ef598acb5f54b4322
~~~

implements only:

- route navigation;
- response status below 500;
- body visibility;
- non-login redirect check;
- one generic focus assertion;
- generic Axe critical check;
- generic console/page/response guard.

It does not implement the required scenario-specific operations and state assertions for B03 through B12.

It also does not perform:

- deterministic reset/reseed between scenario identities;
- per-scenario database baseline and after-state audit;
- classified expected-write comparison;
- cross-scenario contamination proof.

Therefore, a 30-entry Playwright listing does not establish 30 meaningful final-acceptance executions.

## Fixture-evidence correction

The V1 fixture evidence correctly establishes:

- six local identities;
- four canonical objective records;
- one legacy objective record;
- accepted Product and Brief associations;
- a canonical C03 application and C04 collaboration foundation;
- public Media Kit state;
- provider-disabled synthetic mode;
- reset/reseed mechanics;
- zero provider mappings, financial instructions and payout receipts.

It does not, by itself, prove that all browser-required states are materially represented and addressable for scenario assertions.

The correction must explicitly inspect and, when absent, add deterministic validation-only fixture state for:

- supported Gatekeeper result;
- unsupported Gatekeeper result;
- Brand Preview state;
- populated Brand Centre state;
- Brand and Product Intelligence current projections;
- limited Brand Home and Brand Chat state;
- complete Brand Settings states;
- Instagram disconnected state;
- Instagram connected-synthetic state;
- Instagram provider-unavailable state;
- provider-disabled Brand Payout projections and role-specific rows;
- Campaign Manager read-only/no-financial-row behavior;
- Creator onboarding state;
- Creator Home state;
- Creator Centre state;
- Creator Settings role visibility;
- provider-disabled Creator Payout projections;
- Creator Assistant payout denial;
- a pre-action C03 opportunity suitable for browser application/handoff proof;
- Creator Chat deferred/absent boundary.

Reuse accepted existing fixtures and contracts where available. Do not invent Product semantics.

## Checkpoint disposition

The V1 validation-support commits remain immutable source material only:

Backend V1:

~~~text
COMMIT =
99df138ef5602709cfd9850e5630606b7889f237

TREE =
77754f4db336cf9023765ffeeeb2b440aa45bc18

DISPOSITION =
PROVISIONAL_VALIDATION_SUPPORT_SOURCE
NOT_FINAL_GATE_READY
~~~

Frontend V1:

~~~text
COMMIT =
8f600d955b27f55d011adbc5513888b763674509

TREE =
4fd70320cd3beb74ca708123093ba7e73863f9b6

DISPOSITION =
PROVISIONAL_VALIDATION_SUPPORT_SOURCE
NOT_FINAL_GATE_READY
~~~

They must not be deleted, rewritten or force-updated.

## Authorized V2 correction branches

Backend:

~~~text
BRANCH =
validate/mvp-canonical-final-gate-fixtures-v2

SOLE_PARENT =
99df138ef5602709cfd9850e5630606b7889f237
~~~

Frontend:

~~~text
BRANCH =
validate/mvp-canonical-final-gate-browser-v2

SOLE_PARENT =
8f600d955b27f55d011adbc5513888b763674509
~~~

Correction evidence:

~~~text
AUTHORITY_BRANCH =
reconcile/mvp-canonical-application-v1-final-harness-correction-authority

BASE =
THIS_DISPOSITION_COMMIT

EVIDENCE_PATH =
docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_FINAL_VALIDATION_HARNESS_CORRECTION_EVIDENCE_V1.md
~~~

No target branch may be created until its absence and exact parent are verified.

## Required V2 scenario contract

The V2 harness must define a typed scenario contract that cannot be satisfied by generic route mounting alone.

Each scenario must declare and execute:

- exact primary and secondary role;
- initial fixture state;
- ordered UI operations;
- required visible state assertions;
- required denial/fail-closed assertions;
- allowed API methods/routes/statuses;
- allowed database write classes;
- prohibited write classes;
- before/after database audit;
- expected final state;
- required Axe shells;
- required keyboard/focus step;
- viewport set.

Every scenario implementation must contain scenario-specific behavior or call a scenario-specific function with explicit assertions.

A generic loop over paths may remain only as a shared precondition. It cannot be the scenario proof.

## Required B01–B12 behavior

### B01 — public routes

- open the public Campaign;
- assert its public campaign identity/content;
- open the public Media Kit;
- assert the expected public creator identity/content;
- assert no authentication or private control is exposed.

### B02 — verified Brand Owner

- verify the authenticated Brand Owner identity;
- assert limited Brand Home state;
- assert Brand Centre current state;
- assert Brand Intelligence and Product Intelligence current projections;
- assert verified Media Kit boundary;
- assert only the accepted limited Brand Chat capability.

### B03 — supported Gatekeeper journey

- begin from the deterministic supported Gatekeeper state;
- exercise the accepted transition to Brand Preview;
- assert Preview content;
- proceed to Brand Centre;
- assert completed onboarding/current-state landing;
- validate keyboard focus through the principal action path.

### B04 — unsupported Gatekeeper

- begin from the deterministic unsupported result;
- assert fail-closed unsupported/recovery UI;
- assert no Preview/Centre progression without accepted recovery;
- assert no provider or external escape.

### B05 — Campaign objectives

For AWARENESS, TRUST, ASSETS and ACTION:

- create or exercise the accepted UI creation flow;
- select the objective;
- populate the minimum accepted campaign fields;
- trigger autosave;
- reload/hydrate;
- assert the same objective and accepted persisted definition/hash;
- perform the accepted edit operation;
- reload and assert persistence;
- prove no legacy objective is presented as canonical.

The browser proof must exercise behavior, not merely navigate to list/create routes.

### B06 — Campaign workspace

- open the accepted Campaign workspace;
- traverse all three accepted workspace tabs;
- assert their distinct mounted content;
- exercise Add Product using accepted fixture data or assert the already-associated product through its accepted UI flow;
- exercise Add Brief using accepted fixture data or assert the accepted brief through its accepted UI flow;
- verify persisted association.

### B07 — legacy objective

- open the legacy campaign;
- assert Objective unavailable;
- assert legacy PULSE is not surfaced as a current canonical objective;
- attempt/open Reporting only through its accepted surface;
- assert Reporting remains fail-closed/unimplemented;
- assert no Reporting implementation or synthetic data is exposed.

### B08 — C03 to C04

- start from a deterministic pre-action campaign opportunity;
- authenticate as Creator Owner;
- submit the accepted C03 application through the user surface;
- verify application state;
- authenticate as Brand Owner through a separate context;
- perform the accepted approval/handoff operation through an existing authorized UI/API surface;
- verify the canonical C04 collaboration appears for the Creator;
- assert sourceApplicationId linkage, accepted snapshot/event transition and no duplicate collaboration;
- use no direct database mutation during the browser action.

If the accepted user surface cannot perform one step, stop with APPLICATION_CAPABILITY_GAP. Do not fake the handoff.

### B09 — Brand payout, Owner and Finance Admin

- assert provider-disabled Brand Payout state for Brand Owner;
- assert accepted Finance Admin visibility;
- assert no execution/retry/manual-trigger action;
- assert no provider timing promise;
- prove zero provider and financial writes.

### B10 — Campaign Manager payout boundary

- authenticate as Campaign Manager;
- assert read-only/no-financial-row behavior;
- attempt the prohibited action through the user surface when present;
- assert denial or absence;
- prove zero financial/provider writes.

### B11 — Creator Owner

- assert accepted Creator onboarding completion state;
- assert limited Creator Home;
- assert Creator Centre;
- assert Creator Settings;
- assert provider-disabled Creator Payout;
- assert no execution/retry/manual trigger;
- assert Creator Chat is absent/deferred.

### B12 — Creator Manager and Assistant

- assert Creator Manager C04/settings visibility;
- assert Creator Assistant scoped settings visibility;
- assert Assistant Creator Payout denial is non-enumerating;
- assert deterministic Instagram disconnected state;
- assert deterministic connected-synthetic state;
- assert deterministic provider-unavailable state;
- prove no live Instagram/provider request.

## Scenario isolation and audit

Before each scenario identity:

1. reset the disposable database while retaining 108 migration records;
2. seed deterministic scenario state;
3. validate the fixture manifest;
4. generate or validate the required sessions;
5. capture a database baseline.

After each scenario identity:

1. capture an after-state;
2. compare classified writes;
3. reject unclassified writes;
4. prove zero provider mappings/calls;
5. prove zero unauthorized payout/financial writes;
6. prove expected scenario outcome;
7. reset before the next scenario.

Viewport executions for a scenario may share state only if the scenario is demonstrably non-mutating. Mutating scenarios B05 and B08 require an isolated reset per execution or an equivalent deterministic snapshot/restore.

The audit mechanism must be callable by the browser harness or its orchestration layer. A standalone audit script that is never invoked per scenario is insufficient.

## V2 correction acceptance gate

Before V2 publication require:

- exact V1 parent integrity;
- validation-only changed paths;
- unchanged application content, schema and 108 migrations;
- fixture state coverage table for all B01–B12;
- typed scenario contract;
- static proof that every scenario has scenario-specific operations/assertions;
- deterministic reset/audit integration;
- Playwright list exactly 12 identities and 30 executions;
- focused fixture/harness tests;
- zero-retry configuration for authoritative runs;
- one real representative execution of every B01–B12 scenario;
- all 12 representative executions pass;
- zero skips, failures, retries or flakes;
- zero critical Axe violations;
- zero unexpected console/page/API errors;
- zero non-loopback requests;
- zero provider calls;
- zero unauthorized financial writes;
- clean source worktrees;
- exact publication and fetch-back.

The representative correction run may use one authorized viewport per scenario. The later final gate will run all 30 viewport executions.

## Absolute boundaries

Not authorized:

- production application source change;
- schema or migration change;
- Product or architecture reinterpretation;
- acceptance of a missing application capability by weakening the scenario;
- direct database mutation as a substitute for an authorized UI/application action during a browser scenario;
- Campaign Performance/Reporting implementation;
- Applicant AI Match;
- Marketplace recommendation score;
- Creator Chat implementation;
- provider-enabled payouts;
- deployment;
- final whole-application acceptance;
- Campaign Intelligence resumption.

If a required accepted capability is missing from the application rather than the harness, stop and classify it precisely. Do not change application code in this gate.

## Next boundary

Implement and publish the V2 validation-only fixture and scenario-specific harness correction, run one representative browser execution for every B01–B12 scenario, publish immutable correction evidence, and stop for Parent review.
