# Creator Shop Collaboration — Commercial & Resolution Contract

**Status:** CANONICAL / FROZEN — Step 6.5  
**Scope:** Locked commercial terms, securement model, entitlement, abnormal-exit resolution and rights consequences

## 1. Purpose

This contract defines what commercial terms are locked into a Collaboration, how monetary/non-monetary consideration is represented, how escrow securement works, and how Creator/Brand entitlement is resolved when the Collaboration succeeds or ends abnormally.

It does not own payment-rail execution, FX execution, banking data, invoice/tax infrastructure or exact Prisma persistence.

## 2. Upstream commercial source

Create Campaign provides the upstream commercial framework, including as applicable:

- commercial currency/context;
- Advance percentage;
- product/service consideration;
- payment/rail capability context;
- negotiability/offer framework.

The approved Application supplies the Creator-specific proposal/context. Collaboration Negotiation produces the final locked Creator-specific commercial agreement.

Later Campaign/Application edits do not silently mutate locked Collaboration commercial terms.

## 3. Authoritative monetary value

A Collaboration has one authoritative agreed Creator cash fee in its canonical commercial basis/currency. Role-specific converted/display values may be projected using FX services, but they do not become a second authoritative fee.

FX conversion mechanics, rate capture and settlement conversion belong to Payout/FX infrastructure.

## 4. Non-monetary consideration

Product/service consideration is separate from cash compensation and is executed through Fulfillment.

A cash-zero collaboration with product/service consideration naturally represents a barter-like commercial arrangement without a `BARTER` payout rail.

Hybrid cash + product/service consideration is valid.

## 5. Advance

Advance percentage is inherited/snapshotted from Create Campaign commercial strategy.

`Advance amount = agreed Creator fee × Advance %`

`Balance = agreed Creator fee - Advance amount`

The model must not hardcode 30/70.

Kill-fee/protected Creator entitlement, where applicable, equals the actual configured Advance amount.

If Advance = 0%, the protected Advance/kill-fee amount is zero.

## 6. Escrow securement

For platform/escrow execution, Brand secures **100% of the agreed Creator cash fee** in escrow during Securement.

Advance percentage does not reduce the securement amount. The funds remain available for outcome-based allocation according to this contract.

The Advance is therefore a protected entitlement tranche in qualifying outcomes, not necessarily an automatic upfront disbursement when execution starts.

## 7. Payment rails

Commercial entitlement and payment execution rail are separate concepts.

Conceptual rails/capabilities include platform/escrow and Manual. Manual may be disabled for new obligations by platform capability without redesigning Collaboration lifecycle.

`BARTER` is not a money-movement rail.

## 8. Manual payment

Where Manual is enabled:

`Brand reports payment -> Creator confirms received -> verified`

Brand claim/receipt alone is not authoritative platform confirmation. Creator non-receipt creates a blocked/disputed payment condition.

Creator bank/payment details remain Settings/Payout-owned even when surfaced inline from Collaboration.

## 9. Payout boundary

Collaboration owns:

- agreed commercial obligation;
- entitlement;
- payment/settlement eligibility;
- resolution outcome;
- workflow consequences of authoritative financial evidence.

Payout owns:

- escrow vault/account;
- funding execution;
- payment rails;
- money release/refund;
- FX execution;
- bank/payment infrastructure;
- receipts;
- invoice/tax artifacts;
- authoritative transfer confirmation.

## 10. Entitlement vs execution

Entitlement answers **who should receive what**. Execution answers **whether Payout has actually moved the money**.

A Collaboration may be terminal while refund/payment execution is still pending. Financial-resolution status must therefore be distinguishable from lifecycle.

## 11. Normal successful completion

When all required execution obligations and financial settlement conditions are satisfied, Creator entitlement is the full agreed Creator cash fee.

For escrow execution, the full Creator entitlement is released/settled through Payout and must be authoritatively confirmed before financial execution is considered complete.

## 12. Negotiation/pre-securement exits

Negotiation failure or Brand/Creator exit before meaningful financial commitment produces no Creator Advance/kill-fee entitlement.

Any erroneously secured funds return to Brand according to Payout execution.

## 13. Brand-caused protected post-securement exit

Where policy classifies a post-securement exit as Brand-caused and protected by the Advance:

- Creator entitlement = actual Advance amount;
- Brand entitlement/refund = remaining secured balance.

If Advance is 0%, Creator entitlement is 0.

## 14. Creator-caused cancellation/non-performance

Where the Creator abandons or fails required performance and policy classifies the exit as Creator-caused:

- Creator entitlement = 0;
- Brand entitlement/refund = full secured amount.

The Advance does not insure Creator non-performance.

## 15. Fulfillment hard-stop

After the second failed normal Fulfillment attempt:

- normal Collaboration execution ends;
- Creator entitlement = 0;
- Brand entitlement/refund = full secured amount;
- fault attribution is not required for this financial resolution.

Brand/Creator feedback and failure evidence may later be consumed by Trust/Intelligence, but do not change this MVP financial outcome.

## 16. Production hard-stop

If the Creator completes the permitted Production/revision process but a required Deliverable still cannot be accepted after the final permitted version:

- Creator entitlement = actual configured Advance amount;
- Brand entitlement/refund = remaining secured balance;
- rejected/unapproved content does not grant Brand usage rights.

This is the canonical kill-fee outcome.

## 17. Publishing and Brand approval

Publishing is required only where the locked execution contract requires it and publication is validly authorized.

Explicit Brand approval can provide publication consent for the relevant Deliverable.

A 72-hour `AUTO_APPROVED` Production result satisfies the Creator's Production obligation but **does not itself authorize public posting**. If Brand never gives explicit publication approval/consent, Creator is not required or authorized by the platform to publish; the publishing obligation may be bypassed/not required and settlement/completion can proceed according to authoritative state.

Brand/Creator may coordinate schedule manually in chat, but chat text does not itself create publication authorization.

## 18. Creator failure to publish

If publishing is contractually required, explicitly authorized and the Creator fails/refuses to perform without valid exception, the outcome is Creator-side non-performance. No automatic Advance entitlement applies; full Brand refund may apply under the Creator-caused resolution rule.

## 19. Disputes and technical failures

A payment/compliance dispute does not itself allocate escrow. Relevant funds remain held/blocking until an explicit resolution.

Technical Payout failure does not change commercial entitlement. Entitlement remains authoritative while execution retries/resolves.

## 20. Admin resolution

Where an exceptional/ambiguous case requires Admin resolution, the result must explicitly state Creator entitlement, Brand entitlement/refund and reason/evidence. Payout executes that decision. Admin does not silently edit balances.

## 21. Rights

Canonical rights principles:

- unapproved/rejected assets grant no Brand usage rights;
- termination before applicable rights/payment/compliance gates does not activate new rights;
- approved content may activate agreed rights only when the relevant contractual gates are satisfied;
- Production kill-fee payment does not grant Brand rights to rejected/unapproved content;
- previously validly activated rights should not silently disappear solely because a later dispute exists; any revocation requires separate policy.

## 22. Residual obligations

Terminal lifecycle does not necessarily eliminate non-monetary obligations such as product return/reverse fulfillment, refund execution, asset restrictions or other contractual cleanup.

Resolution must be capable of remaining `PENDING` until such obligations execute and becoming `RESOLVED` when complete.

## 23. Canonical outcome matrix

| Scenario | Creator entitlement | Brand entitlement/refund |
|---|---:|---:|
| Successful completion | Full agreed Creator fee | 0 |
| Negotiation failure | 0 | Full/uncommitted amount |
| Pre-securement Brand exit | 0 | Full/uncommitted amount |
| Pre-securement Creator exit | 0 | Full/uncommitted amount |
| Brand-caused protected post-securement exit | Advance amount | Balance |
| Fulfillment hard-stop after two failures | 0 | Full secured amount |
| Production hard-stop after valid revision process | Advance amount | Balance |
| Creator-caused cancellation/non-performance | 0 | Full secured amount |
| Creator fails authorized required publishing | 0 under Creator-breach policy | Full secured amount |
| Auto-approved Production without Brand publication consent | Production satisfied; no publication obligation created by auto-approval; proceed to applicable settlement/completion | According to normal settlement outcome |
| Dispute/ambiguous exception | Held pending resolution | Held pending resolution |
| Admin resolution | Explicit decision | Explicit decision |

## 24. Deferred implementation details

- exact Payout API/event shape;
- exact FX mechanics/persistence;
- exact invoice/tax implementation;
- exact Prisma field names;
- exact residual-obligation schema.
