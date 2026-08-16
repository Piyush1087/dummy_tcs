# CP-ST-R07 — Product / Campaign Asset drawer, desktop

Model guidance: `GEMINI_3_FLASH`. Viewport: desktop drawer. Parent: accepted corrected R02.

## Representative Stitch state

A Brand context is already selected, one Offering has been explicitly selected, its read-only details are visible, and the user is reviewing the explicit **Link Campaign Asset** confirmation action.

Show the selected Brand context, Asset-type-neutral selected entity identity/type, read-only Offering detail, ownership consequence, and explicit confirmation CTA. Do not allow Campaign-local Brand Centre editing or automatic/default selection.

## Full derived implementation family governed by this one screen

1. drawer opening;
2. Brand context selected;
3. no Offering selected;
4. Offering search idle;
5. search loading;
6. search results;
7. search empty;
8. search error/retry;
9. Offering selected;
10. read-only Offering preview;
11. link confirmation;
12. link command in progress;
13. link command failure/retry;
14. linked Asset read-only view;
15. nested Brief list;
16. no Brief;
17. one/many Briefs;
18. contextual `Create Brief` or `Add Brief` action when permitted.

These are Aurora/code-derived states, not extra Stitch screens.

## Authority constraints

Preserve explicit Brand Centre selection, Campaign Asset ownership, Asset-type neutrality, Brief ownership by the exact Asset, Deliverable ownership by the exact Brief, and contextual action capability. Never infer from uniqueness, name, URL, type, or similarity; never mutate Brand Centre data locally.
