# C06 P6 Joint Acceptance Circuit-Breaker Evidence V1

```text
PHASE = P6_JOINT_POSTGRES_BROWSER_ACCESSIBILITY_REGRESSION
RESULT = CIRCUIT_BREAKER
CIRCUIT_BREAKER = REPEATED_GATE_FAILURE
CORRECTION_COUNT = 2
BACKEND_PUSH = NONE
FRONTEND_PUSH = NONE
NEXT_AUTHORIZED_BOUNDARY = SA_REVIEW_ONLY
```

P6 reached the terminal full-suite gate after two bounded correction cycles. The final backend gate passed, and the independent PostgreSQL, runtime, API, browser, responsive and accessibility proofs passed. The terminal frontend full-suite rerun then failed two inherited Creator Entry assertions which still classify Creator Payouts as an Instagram-platform-gated route. The frozen C06 authority instead requires the authenticated Creator Payout workspace to use canonical Creator workspace actor authorization, independently of Instagram product access.

No further test adaptation or product mutation was made after these terminal failures. The backend and frontend P6 working trees remain local and dirty as preserved failure evidence. Neither execution branch was committed or pushed at P6. P7 was not started.

## Passed evidence before the terminal failure

```text
PostgreSQL = 16.15, timezone UTC, loopback 127.0.0.1:55406
Fresh migration 0 -> 86 = PASS
Populated migration 85 -> 86 = PASS; baseline row preserved; migration 86 applied once
Migration count = 86
Migration 86 SHA256 = 887e5bb6bd262a4dd02e42a798db55bd136d97bf6a923df7e6466573f11d1f84
Live C06 PostgreSQL/focused backend gate = 4 files passed; 25 tests passed; 0 failed
Final backend full suite = 213 files passed; 59 skipped; 6338 tests passed; 781 skipped; 0 failed
Backend production build = PASS
Frontend production build = PASS
Frontend focused C06 gate = 3 files passed; 11 tests passed; 0 failed
Changed-scope backend lint = PASS
Changed-scope frontend lint = PASS
Browser widths = 390, 767, 768, 1440; no horizontal overflow
Browser roles = Owner PASS; Manager PASS; Assistant denied PASS
Browser states = empty, partial, unavailable, mixed currency, long labels, multi-page PASS
Drawer = initial focus, focus trap, Escape close, return focus PASS
Axe = serious 0; critical 0 at every required width and fixture state
Unexpected browser console errors = 0
Provider credentials = NONE
Provider method actions = 0
Razorpay calls = 0
External financial network calls = 0
```

## Terminal frontend failure

```text
Command = npm test (Node 20 container)
Test files = 127 passed; 2 failed; 129 total
Tests = 1030 passed; 2 failed; 1032 total
Duration = 493.13s

Failure 1 = src/features/creator-onboarding/creator-entry-architecture.test.ts
Assertion = expected creatorPayouts route to remain after RequireCreatorPlatformAccess

Failure 2 = src/features/creator-onboarding/creator-settings-guard-scope.test.ts
Assertion = expected incomplete Instagram product access to redirect /creator/payouts to Creator Entry
Observed = Creator Payout Product rendered
```

The two failures express the same stale guard-scope assumption. Updating them would be a further validation correction after the terminal rerun and is therefore prohibited by the maximum-two correction budget. This is recorded as `REPEATED_GATE_FAILURE`, not as a product or architecture redefinition.

## Local unpushed P6 working-tree inventory

Backend base remains `e9d71162b5d4720a2df3f58d69b4c4a5ce14f2de`. Local dirty paths:

```text
src/features/creator-entry/creator-instagram-connection.architecture.test.ts
src/features/creator-payouts/creator-payouts-p1.test.ts
src/features/creator-payouts/creator-payouts-p2.test.ts
src/features/creator-payouts/creator-payouts-p6.postgres.test.ts
src/features/creator-payouts/creator-payouts.controller.ts
src/features/creator-payouts/services/creator-payouts-obligation-projection.service.ts
```

Frontend base remains `108f0d58ddf3b9bde0a1d3b1d97442e5ff4a954c`. Local dirty paths:

```text
src/features/collaboration/utils/collaboration-g1c-bank-cutover.test.ts
src/features/creator-payouts/components/CreatorPayoutsWorkspace.tsx
src/features/creator-payouts/creator-payouts-p5.test.ts
src/features/creator-payouts/creator-payouts.css
src/routes/app-routes.tsx
```

Inherited non-C06 baselines observed and disclosed: frontend full lint has 26 errors and 13 warnings outside changed scope; backend full lint has 1068 Prettier-only errors caused by legacy Windows line endings; React Router future-flag and SSR `useLayoutEffect` warnings remain outside C06. Changed-scope lint passed for both repositories.
