# 04C — Commercial Strategy Screen Brief

**Targets:** S3 and S4  
**Base screen:** `Campaign — Create Commercial Strategy — Desktop 1440 — Fixed INR — v1`  
**Adaptation:** `Campaign — Create Commercial Strategy — Desktop 1440 — Negotiable INR — v1`  
**Parent:** Approved Create Campaign desktop system

## Objective

Design a commercial step that makes four different decisions unmistakable: non-cash Brand support, creator-level offer, Campaign-wide payout budget, and payment timing.

## Required hierarchy

```text
Creator Provisioning
Creator Compensation
Campaign Budget
Payment Terms
```

Do not visually merge these sections merely because several contain money.

## S3 — Fixed representative

### State

- Step 3 of 3;
- Brand support Yes;
- Product selected;
- system-derived INR ready;
- Fixed selected;
- all values valid;
- ready to Publish;
- Saved just now.

### Creator Provisioning

Question meaning: Will creators receive support from your Brand?

Show:

- Yes selected;
- Brand Support Type: Product;
- Estimated Value: ₹1,299 — optional.

Support type is single-select.

### Creator Compensation

Two choices:

- Fixed — selected;
- Negotiable.

Fixed amount:

```text
Creator Payout: ₹25,000
```

### Campaign Budget

```text
Total Campaign Budget: ₹5,00,000
```

Make clear this is Campaign-wide creator payout budget, not per-creator payout, Product value, or escrow.

### Payment Terms

- Advance: 25%, from discrete 0/25/50/75/100 choices;
- Payout Terms: Net 15.

### Actions

Back is secondary. Publish Campaign is primary. Publish does not claim that the Campaign becomes Live.

## S4 — Negotiable adaptation

Revise the approved S3 lineage only:

- select Negotiable;
- relabel amount to `Payout Starting From`;
- value: ₹20,000;
- show concise `one counter-offer` helper;
- update Summary to Negotiable.

Preserve every other approved hierarchy, spacing principle, component, Summary, and action placement.

## Campaign Summary

Show a compact commercial projection:

```text
Product support · ₹1,299
Fixed · ₹25,000
Budget · ₹5,00,000
25% advance · Net 15
```

Negotiable adaptation replaces only the compensation line.

## Prohibited

- minimum and maximum Negotiable amounts;
- multiple simultaneous Brand support types;
- user-editable currency;
- `$` hardcoding;
- arbitrary advance percentage;
- Immediate payout;
- escrow hold calculation;
- estimated creator count, reach, or Applications;
- AI budget advice;
- Product value included in Campaign budget;
- new layout for Negotiable.

## Review checklist

- Are Product value, creator offer, and Campaign budget distinct?
- Is INR clearly system context rather than a user selection?
- Does the business decision order feel natural?
- Are discrete advance choices understandable?
- Is Publish prominent but not misleading about Live state?
- Does Negotiable feel like a controlled adaptation of Fixed?

## Required output

Return separate stable screen/file identities for Fixed and Negotiable, even if generated in one request, plus parent IDs, preview links, states, and available export/code identities.
