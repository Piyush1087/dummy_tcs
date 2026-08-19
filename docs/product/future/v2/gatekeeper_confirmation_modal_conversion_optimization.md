# Gatekeeper V2 — Confirmation Modal Conversion Optimization

**Status:** PARKED FOR V2
**Source:** Gatekeeper v1 product planning

## Context

Gatekeeper v1 retains an explicit pre-scan confirmation modal after successful Gatekeeper admission and before Surface Intelligence begins.

A V2 optimization decision should be made after observing real user behavior on this modal.

## Measurement

Track the percentage of successfully admitted users who click the confirmation modal CTA to begin Surface Intelligence.

## Decision hypothesis

### Option A — Confirmation rate >95%

If more than approximately 95% of admitted users proceed through the confirmation modal, reconsider whether the modal should remain a hard execution gate.

Potential V2 behavior:

- trigger Surface Intelligence immediately after Gatekeeper admission;
- continue showing the confirmation modal while Surface acquisition begins in the background;
- use the modal to communicate what to expect and potentially make the experience more engaging;
- benefit from the user's modal dwell time to absorb approximately 2–5 seconds of Surface processing latency;
- reduce perceived time spent on the dedicated Surface scan/progress screen.

This should only be introduced after confirming that removing the explicit modal gate does not create meaningful consent, readiness, UX, cost, or operational issues.

### Option B — Confirmation rate <95%

If a meaningful share of admitted users do not continue, first diagnose the reason for the drop-off rather than auto-starting Surface Intelligence.

Potential causes may include:

- user is on mobile and does not have required brand/admin access available;
- Meta Business / Instagram credentials are not immediately accessible;
- domain-linked business email is accessible only on another device;
- the current user is not the correct stakeholder to complete onboarding;
- the modal creates uncertainty about the next steps or required access.

Potential V2 actions may include:

- `Send this setup link to my desktop`;
- `Email me this link`;
- `Share with a colleague`;
- save/resume setup;
- clearer explanation of which accesses are optional now versus required later.

## Required analytics

At minimum capture:

- Gatekeeper `ADMITTED` count;
- confirmation modal viewed;
- confirmation CTA clicked;
- time spent on modal;
- exit/drop-off;
- device class;
- resume within a defined period;
- downstream Surface start success.

Where privacy/consent allows, recovery-action selection should also be measured.

## V2 decision rule

Do not choose Option A or Option B before production data exists.

The key V2 question is not simply whether the modal has high conversion, but whether the modal is acting as:

1. an unnecessary execution gate whose dwell time can hide Surface latency; or
2. a useful readiness checkpoint where users need alternate continuation options.

This document records the hypothesis only. It does not change Gatekeeper v1 behavior.
