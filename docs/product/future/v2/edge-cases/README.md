# Future / V2 Edge-Case Register Convention

**Branch:** `future-enhancements/v2`  
**Purpose:** preserve module edge cases, their current handling, implementation gaps, and explicitly deferred future requirements without allowing future requirements to overwrite current MVP Product Authority.

## Status vocabulary

- `MVP_RESOLVED` — Product behavior is decided for MVP.
- `MVP_IMPLEMENTATION_GAP` — Product behavior is decided, but current implementation does not yet satisfy it.
- `DEFERRED_V2` — deliberately not required for MVP; preserve as a future requirement.
- `PROVIDER_RESEARCH_PENDING` — Product intent is known but provider/API capability still requires verification.
- `OPEN_PRODUCT_DECISION` — edge case is known but Product behavior is not yet frozen.

## Required fields for module registers

Each material edge case should record:

1. stable edge-case ID;
2. scenario / trigger;
3. user-visible risk or impact;
4. frozen MVP behavior, if resolved;
5. current implementation alignment when known;
6. frontend state / warning / recovery expectation;
7. backend or cross-module implications;
8. future/V2 requirement, if any;
9. dependencies or provider research still required.

## Governance rule

This branch is a **future-requirement and edge-case continuity register**. It is not, by itself, current implementation authority.

Where an edge case is marked `MVP_RESOLVED` or `MVP_IMPLEMENTATION_GAP`, the corresponding current Product Authority / Stage-A freeze remains the controlling source for MVP implementation. `DEFERRED_V2` entries must not be pulled into MVP unless Product explicitly re-authorizes them.
