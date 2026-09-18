# Canonical Reconciliation — B08 Selector, Notification Isolation, and Final Matrix Recovery V1

## Role and governing boundary

You are the local Codex runner acting as the bounded reconciliation executor.

This is a validation-support recovery and final-validation resumption. It is not Product discovery, architecture redesign, application feature work, deployment, merge, PR creation, or Campaign Intelligence resumption.

Do not change accepted production application source, Prisma schema, migrations, package lockfiles, authorization policy, provider behavior, financial behavior, or accepted module semantics.

The intended outcome is:

1. recover the retained B11/B02 validation candidates exactly;
2. correct the proven B08 validation-selector defect;
3. isolate notification delivery entirely inside the disposable validation environment;
4. prove B08 at all four declared viewports;
5. restart and complete the entire 30-execution matrix from B01;
6. if all gates pass, publish immutable V3 validation-support and final-validation evidence branches for Parent review.

This prompt authorizes no final Parent acceptance and no final canonical checkpoint publication.

## Controlling immutable inputs

Verify every object before mutation.

Authority repository:

- Repository: Piyush1087/dummy_tcs
- This prompt is the controlling authority object at the commit from which it is fetched.
- Prompt path:
  docs/organization/prompts/canonical_reconciliation_b08_selector_notification_isolation_and_final_matrix_resumption_local_codex_prompt_v1.md
- Prior authority commit:
  4705a756f30eddee7ef89f4efb55ce57bcb6df3a
- Prior authority tree:
  6aedfcc3c36935b8906c3b5bdbe5f9c7c7d961e0
- Prior authority prompt blob:
  f46d783050e61ea6d21e34ae454a972341385337

Accepted application checkpoints:

- Backend application:
  1a99cf3f54df849408c8775b20e78c036ee637c3
- Frontend application, including accepted Creator actor contract plus B05/B08 correction:
  edc6ff991a43ce3a93d2bd242d148a6fcbd104dc

Accepted V2 validation-support checkpoints:

- Backend support:
  d7f98cc51d9660f227ae367506d103026aad6439
- Backend support tree:
  a9e526d47f53442836def82ae6db9031d3d4cdab
- Frontend support:
  ca3fd0984f89acd5532a44d707d4aafa173c49dc
- Frontend support tree:
  b266070734ece18e0f04b845e9b70409e3828698

Protected application state:

- Prisma schema blob:
  1d9b3a8bf3145d47d326fae88493f7816eef9140
- Migration count:
  108
- Migration subtree:
  ae9c3e8036461260ad6f0963dffb7d5d9d010139
- Campaign Intelligence remains paused.
- The accepted C04, C06, Campaign Objectives, B05, B08 idempotency, Creator actor-action, and provider-disabled boundaries must remain unchanged.

Retained local validation candidates from the immediately preceding run:

Backend candidate, based on d7f98cc51d9660f227ae367506d103026aad6439:

- scripts/canonical-reconciliation/final-gate/seed.ts
  expected candidate blob:
  fc84f03451cc9ef44511ab0c0fce7f15881ea3a0
- scripts/canonical-reconciliation/final-gate/final-gate.fixture.test.ts
  expected candidate blob:
  18ee3d89762f9fd16b51ee94e54ec3e559c49548
- combined retained patch SHA-256:
  b1c4edceccea4aa301d925549c11a418e87edad6e8fb4f02584655f92b3e24cd

Frontend candidate, based on ca3fd0984f89acd5532a44d707d4aafa173c49dc:

- e2e/canonical-reconciliation/final-gate/final-gate.spec.ts
- expected candidate blob:
  d575cbcf10740625fdc4e50319bec8f870178be1
- retained patch SHA-256:
  65d7067da7af5d07a340a8df35a6cecf2ca37d13c0f2791c482881654f4bd587

The retained candidates include the already-proven B02 and B11 corrections. Preserve them. If a retained candidate is unavailable or its identity differs, do not silently substitute it. You may reconstruct it only if all expected blobs and the complete parent-relative semantic delta can be reproduced exactly; record the reconstruction evidence before continuing.

## Confirmed disposition

Treat these decisions as Parent-authorized for this run:

1. The B08 failure is a validation-harness selector defect, not an application defect.
2. The existing B08 locator

   getByText(/Final Gate AWARENESS Campaign|Collaboration/i).first()

   is prohibited because it is broad, order-dependent, and selects hidden shell content.
3. B08 must use visible, route-scoped, semantic proof tied to fixture content. Prefer a main/region-scoped exact heading, accessible name, exact campaign title, or exact status. Do not use first(), last(), generic body text, a broad alternation, DOM order, or a hidden shell/navigation label.
4. The B08 submitted-state proof must receive the same inspection. If it is ambiguous or order-dependent, normalize it in the same correction.
5. The observed Postmark HTTP 403 attempts are a validation-environment isolation failure. They do not authorize a production mail change.
6. Internal notification job, recipient, and email-delivery rows may legitimately be created by accepted application behavior. They are not external provider calls.
7. Final evidence must distinguish:
   - internal notification persistence;
   - deterministic validation-mail-adapter invocations;
   - actual non-loopback provider/network attempts.
8. Actual non-loopback provider/network calls must be zero.

## Allowed changes

Backend V3 support may change only validation-support files under:

- scripts/canonical-reconciliation/final-gate/

and, only if already part of the accepted support mechanism:

- the exact validation-only package script/config paths already introduced by the V1/V2 support commits.

The retained B11 seed and fixture-test changes are authorized.

You may add the minimum validation-only mail adapter and backend egress guard required to prevent Postmark or any other backend provider from reaching a non-loopback destination. Prefer built-in Node facilities and existing dependencies. Do not add a dependency or change a lockfile.

Frontend V3 support may change only:

- e2e/canonical-reconciliation/final-gate/final-gate.spec.ts

and only for semantic, validation-only locator normalization or scenario assertions.

No application src file is authorized. No schema, migration, lockfile, generated client, accepted test, production config, or runtime module file is authorized.

## Phase 0 — integrity, continuity, and host readiness

Before any edit:

1. Fetch all three repositories through direct repository URLs without allowing mirror-style refspecs to move checked-out local refs.
2. Verify all immutable commits, trees, paths, blobs, schema, 108 migrations, and migration subtree.
3. Verify the accepted branches remain at their authorized heads.
4. Verify the three intended publication branches are absent remotely:
   - validate/mvp-canonical-final-gate-fixtures-v3
   - validate/mvp-canonical-final-gate-browser-v3
   - reconcile/mvp-canonical-application-v1-final-validation-authority
5. Verify all accepted worktrees are clean.
6. Preserve the broken historical worktree, if it still exists. Do not repair its missing ref, reset it, clean it, or use it as a publication source.
7. Recover or reconstruct the retained candidates only in isolated worktrees.
8. Establish core.autocrlf=false before materializing candidate worktrees.
9. Verify sufficient disk capacity, healthy Docker client/server, required ports, npm entrypoint, npm_execpath, Node, Playwright, working directories, reset/audit scripts, and disposable artifact paths.
10. Use npm run or npm exec for Playwright lifecycle commands. Do not invoke Playwright through a direct Node entrypoint that loses npm_execpath.
11. Use a fresh loopback-only PostgreSQL 16 runtime. Do not reuse creator-shop-acceptance-postgres or any shared database.
12. Do not supply real provider credentials. Do not use the Postmark test token as a substitute for provider isolation.

If a pre-assertion runner problem is found, fix the runner invocation or validation-only support and continue. A missing npm_execpath, disposable DATABASE_URL, port collision caused by this run, line-ending conversion, stale generated session, or absent local branch ref is not by itself a Parent circuit breaker.

## Phase 1 — whole-harness risk audit before browser execution

Inspect every B01–B12 assertion in the reconstructed V3 candidate, with special attention to B08–B12.

Classify each locator as:

- SAFE_AND_SEMANTIC
- FRAGILE_BUT_CURRENTLY_UNAMBIGUOUS
- PROVEN_HARNESS_DEFECT
- APPLICATION_STATE_FAILURE

For every scenario and declared viewport, inspect whether a locator can resolve to hidden navigation/header/sidebar content or multiple unrelated visible elements.

Correct every PROVEN_HARNESS_DEFECT within the single authorized final-gate spec, not only the first one encountered. In particular:

- normalize both B08 submitted-state and collaboration-state proofs;
- inspect the previously flagged B09 payout alternation;
- inspect B10 read-only alternation;
- inspect B12 assistant-denial alternation;
- remove redundant first()/last() usage where the target is already semantically unique;
- scope fixture-content assertions to main content, a named region, dialog, form, heading, status, or exact accessible control.

Do not weaken an assertion merely to make it pass. Do not replace a required application-state proof with a generic body-visible check. Do not change a scenario’s accepted meaning.

After edits, verify that:

- B01–B12 remain exactly 12 scenario identities;
- declared executions remain exactly 30;
- viewport distribution remains unchanged;
- retries remain zero;
- B02 and B11 corrections remain present;
- B05 and B08 accepted application-source corrections remain preserved;
- only the one authorized frontend support path changed.

## Phase 2 — validation-only notification isolation

The accepted backend initializes MailModule with a Postmark ServerClient and the notification email worker polls automatically. Merely using a fake/test token is not isolation.

Implement a deterministic validation-only mail boundary in the final-gate support layer. It must meet all of these requirements:

1. No production source modification.
2. No real credential.
3. No DNS or non-loopback socket to Postmark or any external provider.
4. Preserve application-side notification dispatch, persistence, worker processing, and delivery-result handling sufficiently to validate the application path.
5. Replace only the external Postmark client boundary during final-gate server startup.
6. Return deterministic, sanitized success responses with synthetic message identifiers.
7. Record each simulated delivery in a validation artifact containing no recipient address, token, body, session, or credential. A recipient hash is permitted if needed.
8. Record method/event/template classification and a deterministic invocation count.
9. Install a backend process egress guard that rejects and audits any non-loopback network attempt from the final-gate backend, including HTTP, HTTPS, fetch/undici, TCP, and TLS paths used by the application.
10. The guard must permit only explicitly enumerated loopback application/database endpoints.
11. The validation adapter and egress guard must be activated only by the final-gate launch command/environment.
12. Normal repository behavior outside the final gate must remain unchanged.
13. Do not claim zero notification activity if simulated deliveries occurred. Report:
    - INTERNAL_NOTIFICATION_ROWS
    - VALIDATION_MAIL_ADAPTER_INVOCATIONS
    - NON_LOOPBACK_PROVIDER_ATTEMPTS
    - NON_LOOPBACK_NETWORK_ATTEMPTS
14. Required final result:
    - NON_LOOPBACK_PROVIDER_ATTEMPTS = 0
    - NON_LOOPBACK_NETWORK_ATTEMPTS = 0

A built-in Node preload/module-boundary adapter is acceptable if it is narrowly scoped to the Postmark client, delegates unrelated imports unchanged, is activated only for the disposable final-gate process, and has focused tests. A local loopback mail sink is also acceptable if it is deterministic and the evidence clearly classifies it as a validation adapter rather than a real provider.

Do not mark accepted notification database writes as unauthorized merely because they are nonzero. Compare them against the scenario-specific allowed-write contract.

## Phase 3 — focused validation

Before browser runtime:

Backend:

- focused final-gate fixture and hash-audit tests;
- focused mail-adapter tests;
- focused egress-guard tests;
- Prisma generate and validate against a disposable URL;
- targeted lint/format gate for every changed support file;
- secret-pattern scan;
- exact path and protected-tree checks.

Frontend:

- manifest/contract tests;
- typecheck;
- targeted lint for the changed support file;
- Playwright list proving 12 scenarios and 30 executions;
- secret-pattern scan;
- exact path and protected-tree checks.

Then create a fresh disposable PostgreSQL runtime, apply all 108 migrations, seed, validate, reset/reseed, create six synthetic sessions, and run:

- B08 at 390 px
- B08 at 767 px
- B08 at 768 px
- B08 at 1440 px

Run with one worker and retries disabled.

Focused B08 must prove:

- Creator application submission;
- exact visible submitted state;
- Brand approval with accepted idempotency behavior;
- exactly one linked collaboration;
- exact visible collaboration state for the Creator;
- no recovery shell;
- zero critical Axe violations;
- zero unexpected console/page/API failures;
- zero browser non-loopback requests;
- zero backend non-loopback network/provider attempts;
- expected internal notification persistence and deterministic validation-mail-adapter accounting;
- no unauthorized financial writes;
- no cross-scenario contamination.

Destroy the focused runtime after capturing sanitized evidence.

## Phase 4 — bounded autonomous recovery policy

This prompt intentionally authorizes autonomous resolution of validation-only failures so the runner does not return after every casual harness issue.

An additional recovery iteration is permitted when all of the following are true:

- the failure is pre-assertion runner/lifecycle, validation fixture, selector, local validation adapter, or validation audit logic;
- the accepted application capability is present;
- the correction stays entirely within the allowed validation-support paths;
- no Product, architecture, authorization, schema, migration, provider, financial, or production-source decision is required.

For each permitted iteration:

1. classify the failure with concrete evidence;
2. correct the complete local class of defect, not only the first literal occurrence;
3. rerun focused static gates;
4. create a fresh disposable runtime;
5. rerun every affected scenario at all its declared viewports;
6. destroy the runtime;
7. only then continue.

Budget: up to four new validation-only recovery iterations in this authority turn.

The prior run’s two iterations do not consume this new budget.

Do not count environment setup such as supplying a disposable DATABASE_URL or launching through npm as a semantic recovery iteration when it does not alter tracked support files.

Stop and return to Parent only for:

- a verified accepted application-source defect;
- missing application capability;
- authority ambiguity;
- immutable-object mismatch;
- need to change a prohibited path;
- schema/migration inconsistency;
- inability to guarantee disposable isolation;
- inability to prevent non-loopback provider/network traffic;
- exhausted recovery budget with an unresolved validation failure.

## Phase 5 — complete final matrix

Only after focused B08 passes, provision a new fresh runtime. Do not continue with the focused database.

Run the complete 30-execution matrix from B01 in declared order, with:

- one worker;
- retries zero;
- all 12 scenarios;
- all 30 viewport executions;
- reset/reseed and database audit between scenarios as defined by the support harness;
- deterministic local media/network handling;
- backend mail adapter and backend egress guard active;
- browser non-loopback guard active.

A full matrix interrupted by a recoverable validation-only defect may use the Phase 4 policy. After the affected scenario passes at all declared viewports on a fresh focused runtime, discard the partial matrix runtime and restart the entire 30-execution matrix from B01 on another fresh runtime.

Never resume a partial matrix after a support correction.

The successful final matrix must establish:

- 30/30 passed;
- zero skipped, failed, timed out, flaky, retried;
- zero critical Axe violations;
- zero unexpected console errors;
- zero page errors;
- zero unhandled API failures;
- zero browser non-loopback requests;
- zero backend non-loopback network attempts;
- zero actual provider attempts;
- deterministic validation-mail-adapter invocation count;
- allowed internal notification records only;
- zero unauthorized financial writes;
- zero unclassified database writes;
- zero cross-scenario contamination;
- migration history preserved at 108;
- B02 exact route proofs;
- B05 autosave/hydration;
- B06 canonical Offering to CampaignAsset to Brief linkage;
- B07 fail-closed Reporting;
- B08 C03 to C04 handoff and collaboration;
- B09/B10 payout boundaries;
- B11 Creator Home/Centre/Settings/Payouts;
- B12 Creator roles and Instagram states.

## Phase 6 — repository validation and continuity

Use exact continuity to avoid repeating expensive gates unnecessarily, but do not weaken final evidence.

At minimum, after final candidate identity is fixed:

Backend:

- clean dependency state or immutable lockfile-equivalent dependency reuse;
- Prisma generate and validate;
- semantic lint gate;
- production build;
- full backend suite;
- campaign readiness;
- intelligence contract verification;
- final-gate fixture/hash-audit and mail-isolation focused tests.

Frontend:

- typecheck;
- repository lint;
- full frontend suite;
- campaign autosave;
- production build;
- final-gate manifest/contract tests;
- Playwright discovery.

If an earlier result is reused, prove exact commit/tree/lockfile and relevant candidate continuity and state explicitly what was reused. Do not reuse browser, database, or network-isolation results across a support change that can affect them.

The known backend inclusive Prettier debt is historical and non-blocking only if the semantic lint gate passes and the diagnostic/path sets remain identical to the accepted baseline. Do not format production files.

## Phase 7 — publication after every gate passes

Only after all focused, repository, PostgreSQL, isolation, and 30-execution gates pass:

Backend repository:

- Branch:
  validate/mvp-canonical-final-gate-fixtures-v3
- Parent:
  d7f98cc51d9660f227ae367506d103026aad6439
- Commit exactly the authorized validation-support delta.
- Verify sole parent, tree, paths, blobs, schema, migrations, application-source diff zero, lockfile diff zero, and independent fetch-back.

Frontend repository:

- Branch:
  validate/mvp-canonical-final-gate-browser-v3
- Parent:
  ca3fd0984f89acd5532a44d707d4aafa173c49dc
- Commit exactly the authorized final-gate spec delta.
- Verify sole parent, tree, path count one, application-source diff zero, lockfile diff zero, and independent fetch-back.

Authority repository:

- Branch:
  reconcile/mvp-canonical-application-v1-final-validation-authority
- Parent:
  the immutable commit containing this prompt
- Evidence path:
  docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_FINAL_WHOLE_APPLICATION_VALIDATION_EVIDENCE_V1.md
- Publish one evidence file only.
- Verify commit, sole parent, tree, blob, one-file scope, and independent fetch-back.

Do not create a PR, merge, tag, deployment, development update, freeze update, or final canonical checkpoint.

## Evidence requirements

The published evidence must include:

- all controlling immutable identities;
- retained-candidate recovery/reconstruction evidence;
- final backend/frontend V3 commits, trees, parents, pathsets, blobs, patch/manifest hashes;
- selector-risk audit and every validation-only correction;
- notification-isolation design and focused test evidence;
- internal notification row counts;
- validation mail-adapter invocation count;
- non-loopback provider/network attempt totals;
- repository validation totals;
- PostgreSQL/migration/reset proof;
- B01–B12 per-viewport result table;
- Axe, console, page, API, browser-network, backend-network, provider, financial, database-write, and contamination totals;
- sanitized artifact manifest SHA-256;
- secret scan result;
- cleanup result;
- explicit exclusions.

Do not include secrets, tokens, email addresses, cookies, storage states, raw traces containing sessions, or unsanitized payload bodies.

## Required cleanup

Whether the run passes or stops:

- remove disposable PostgreSQL containers/databases/roles created by this run;
- stop loopback backend/frontend processes;
- remove temporary environment files;
- remove generated role sessions and token-bearing manifests;
- remove secret-bearing traces/videos;
- close run-created ports;
- preserve creator-shop-acceptance-postgres unchanged;
- preserve accepted application/support worktrees;
- do not delete retained candidates unless their published commits have passed fetch-back;
- report any intentionally retained sanitized evidence.

## Required final response

Return one of:

CANONICAL_RECONCILIATION_B08_NOTIFICATION_RECOVERY_AND_FINAL_MATRIX_RESULT = READY_FOR_PARENT_REVIEW

or

CANONICAL_RECONCILIATION_B08_NOTIFICATION_RECOVERY_AND_FINAL_MATRIX_RESULT = CIRCUIT_BREAKER

Report concise facts, not a long execution diary:

- immutable integrity;
- retained-candidate continuity;
- changed paths and identities;
- recovery iterations and classifications;
- focused B08 results at four viewports;
- notification isolation and exact counters;
- repository/PostgreSQL results;
- final matrix totals and per-scenario results;
- publication identities and fetch-back;
- cleanup;
- BLOCKERS;
- NEXT_BOUNDARY.

Do not report timing or completion percentage unless the Parent separately asks for telemetry.

A successful run ends at Parent review of final whole-application validation evidence. It does not itself grant final acceptance or authorize canonical checkpoint publication.