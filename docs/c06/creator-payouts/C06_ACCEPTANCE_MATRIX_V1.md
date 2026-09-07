# C06_ACCEPTANCE_MATRIX_V1

## Backend and data

| Gate | Required result |
| --- | --- |
| Owner/Manager | Same owned factual payout projection; no financial command |
| Assistant | Denied before financial query; no count/content flash |
| Cross-Creator | Foreign list/count/cursor/detail/Collaboration/obligation non-enumerating denial |
| Canonical lineage | Exact C04 authority/agreement/reserve/funding identity and currentness validation |
| Due | Persisted `paymentDueAt` exposed exactly only after proof; all NET terms and boundary instants pass |
| Money | Decimal strings; per-currency buckets; no incompatible summation/float coercion |
| Summary parity | Every included row satisfies the same predicate used by its summary; no double-counted outstanding bucket |
| Provider unavailable | Otherwise-ready due row maps to unavailable, never setup failure; no timing promise |
| Setup/rail | None/current/stale/attention/disabled/ambiguous/unsupported C05 destination states are exact |
| History/detail | Stable fixed-as-of sequence, exact counts, no duplicates, coherent settlement/reversal evidence |
| Legacy/corrupt | Limited or omitted; never contributes unproven amounts/dates/summaries |
| Partial/unavailable | Section coverage explicit; unavailable is not zero |
| Writes | All C06 requests leave financial, C04, C05, and provider state unchanged |
| Persistence/hash | 86 migrations; 0 C06; no new table/event ledger/financial hash |
| PII/diagnostics | Denylist absent from API, logs, errors, fixtures, DOM, and evidence |

## Frontend state families

Initial loading, empty authoritative, ready, refreshing with restored page/filter state, partial, unavailable, mixed currency, multi-page, long labels, setup required, unsupported rail, funding required, resolution blocked, provider unavailable, processing, settled, failed-retryable, limited legacy, permission denial, and detail not-found.

## Responsive/accessibility

At 390, 767, 768, and 1440 verify no overflow, correct table/card transition, readable exact money/date/status, keyboard-only navigation, semantic headings/tables/cards, live error/loading announcement, drawer trap/Escape/return focus, visible focus, and Axe serious/critical zero.

## Regression/safety

Prisma format/validate/generate; fresh PostgreSQL 0→86; populated 85→86; focused C04 lineage, C05 payout authority, Brand Payout, C06 backend/frontend; full backend/frontend suites; builds; startup/API smoke; changed-scope lint; secret and PII scans; provider credentials absent; provider methods, Razorpay, and external financial network calls all zero.

No unexplained pass-count reduction is accepted. An unchanged inherited lint/a11y baseline must be isolated and disclosed; any C06-attributable serious/critical or security issue fails acceptance.

