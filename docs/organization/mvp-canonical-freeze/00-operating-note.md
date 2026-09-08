# MVP Canonical Application Freeze V1 — Operating Note

**Status:** ACTIVE  
**Branch:** `freeze/mvp-canonical-application-v1`  
**Does not update:** `development` or `main`  
**Package index:** [README.md](./README.md)

This branch is the Canonical Application Freeze workspace. `origin/development` remains the untouched snapshot after C-03 merge.

Each charter step has its **own folder** under this directory. Do not add new freeze evidence as loose root files.

## Locked Parent decisions (2026-09-08)

```text
C-02A Creator Home Foundation     DEFERRED (accepted, not pulled)
C-04 Creator Collaboration        DEFERRED (accepted, not pulled)
Brand Payouts v1                  DEFERRED (accepted provider-disabled, not pulled)
C-06 Creator Payouts              OUT of this freeze (still in progress)
Marketplace                       OUT_OF_MVP
Co-Pilot / Creator Co-Pilot       OUT_OF_MVP
Creator Centre / Media Kit        DEFERRED (C-02A deferral)
Live Razorpay / Meta App Review   PROVIDER_DEFERRED
```

Remaining mixed-folder debt (old payout hubs still in the tree, Co-Pilot schema, duplicate persistence) is classified in `phase-a-inventory/legacy-disposition.md` and may be removed in a later freeze amendment. RUN 1 hides those products from the running app.

## Snapshot SHAs (do not treat as freeze SHAs)

```text
ORIGIN_DEVELOPMENT_FRONTEND = c83ab8bab02ace8872a53de81cc8ffe79ccda832
ORIGIN_DEVELOPMENT_BACKEND  = cd446fb4bd356fe03faf16c6c7a282a55cebcf08
```

Freeze SHAs are the tips of this branch after checkpoint commits. See `phase-f-execution/execution-ledger.yaml`.

## Charter

`docs/organization/charters/canonical_application_freeze_ai_worker_charter.md`
