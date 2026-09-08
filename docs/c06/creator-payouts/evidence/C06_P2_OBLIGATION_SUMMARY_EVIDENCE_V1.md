# C06 P2 Obligation and Summary Projection Evidence V1

```text
PHASE = P2_OBLIGATION_AND_SUMMARY_PROJECTION
RESULT = PASS
BACKEND_SHA = 3e513d90486bbb7a2a24080d031ebe28539eaa3f
BACKEND_TREE = b37ad1b7373959b82581a5b9c6ee1b942a619140
CORRECTION_COUNT = 0
NEXT_PHASE = P3
```

The Creator projection reads the accepted obligation, allocation, C04 authority/agreement/reserve/funding-confirmation, transfer, receipt, reversal, and allowlisted settlement-ledger evidence through explicit selects. Canonical values are exposed only after Creator/workspace/Collaboration/Brand/Campaign/currency coherence, current unsuperseded instruction matching, exact lineage matching, positive allocation equality, persisted due evidence, and settlement/reversal coherence pass. Unproven rows are limited and expose no monetary or due-date truth.

The persisted `paymentDueAt` is displayed. The shared Kolkata helper is used only to validate it for NET_7/15/30/45/60. Provider-disabled overlay converts a due otherwise-ready gate to `PROVIDER_UNAVAILABLE`; specific setup, geography/rail, funding, and resolution gates remain specific. Summary aggregation uses decimal arithmetic, separates currencies, applies PROCESSING → DUE_OR_ACTION_REQUIRED → UPCOMING for current outstanding, and treats PAID_TO_DATE as independent cumulative net-settled evidence.

```text
Focused tests = 2 files passed; 15 tests passed; 0 failed
NET term/boundary cases = 5 passed
Mixed-currency and predicate-priority cases = PASS
Changed-scope ESLint = PASS
Backend production build = PASS
Database writes = ZERO
Provider method actions = ZERO
External financial network calls = ZERO
Push/fetch-back = PASS (3e513d90486bbb7a2a24080d031ebe28539eaa3f)
Backend worktree = CLEAN
```
