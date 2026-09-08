# C06 P4 Frontend Contracts and API Evidence V1

```text
PHASE = P4_FRONTEND_CONTRACTS_API_HOOKS
RESULT = PASS
FRONTEND_SHA = 5908235d98b4a9ef078c853079ddfa4913e5a5ab
FRONTEND_TREE = 736ff8f390d57e46ae4d453d038b196b3a9bc17f
CORRECTION_COUNT = 0
NEXT_PHASE = P5
```

The frontend now validates `C06_CREATOR_PAYOUTS_V1` at runtime, requires exact decimal strings, restricts viewers to Owner/Manager, and exposes only the six frozen GET reads. Requests are authenticated, abortable, and `no-store`; authorization, not-found, contract, and unavailable failures use bounded safe copy. Workspace state distinguishes initial loading, refreshing, stale, unavailable, and permission denied.

The legacy escrow/tranche/ETA/PDF contracts and C06-local bank writer/drawer were removed. C05 Settings no longer queries or displays the legacy payout hub telemetry or manual-clearing affordance.

```text
Focused tests = 1 file passed; 4 tests passed; 0 failed
Frontend typecheck = PASS
Changed-scope ESLint = PASS
Frontend production build = PASS
Build baseline = inherited chunk-size advisory only
C06 write methods = ZERO
Push/fetch-back = PASS (5908235d98b4a9ef078c853079ddfa4913e5a5ab)
Frontend worktree = CLEAN
```
