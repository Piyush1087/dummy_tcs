# C-03 — Work-Mode Setup Checklist V1

Use before starting the C-03 Systems Architect Work chat.

## Required context

The Work conversation should be able to read the following from `Piyush1087/dummy_tcs`:

- Systems Architect charter;
- Browser/Codex runner operating standard;
- frozen C-03 Product Decision Register;
- C-03 hybrid autonomous execution plan;
- current Campaign/Applicants/Brief/Offering/Collaboration authority;
- C-01 handoff/closeout authority;
- C-05 handoff/closeout/ledger authority.

It must also be able to inspect:

- `Piyush1087/creator-commerce-backend-v2-clone`;
- `Piyush1087/creator-commerce-frontend-v2-clone`.

## Initial mode

Start the SA with:

`docs/organization/prompts/c03_systems_architect_initiation_prompt_v1.md`

Initial mode is read-only.

Do not provide the hybrid authorization prompt at initiation.

## Audit acceptance before autonomous run

Do not authorize hybrid autonomous execution until the SA has verified:

- true remote canonical SHAs;
- exact authority map;
- all legacy Creator Campaign/Apply versions;
- primary legacy reference;
- current canonical backend/frontend state;
- C-01/C-05 integration boundaries;
- migration/test/database readiness;
- isolated execution workspaces;
- Codex runner availability;
- Stitch/UI-reference availability where needed;
- no collision with other module runtimes;
- provider-test limitations;
- complete gap register;
- cross-contract conflicts;
- architecture freeze;
- finite execution plan.

## Hybrid authorization

Only after parent acceptance use:

`docs/organization/prompts/c03_hybrid_autonomous_execution_authorization_prompt_v1.md`

After that authorization, the SA should autonomously own routine worker/runner orchestration and correction until a circuit breaker or terminal acceptance.
