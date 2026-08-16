# CP-HDR-01 - Operational Header desktop

## Generation scope

Generate the Campaign Header feature Content Area at physical `1440 x 900`, assuming the existing 72px AppShell Header, 80px collapsed Sidebar, and 32px page padding. Do not generate global navigation.

Use [compact project context](../../../10-stitch-project-context.md), the approved [Header visual plan](../01-section-visual-plan.md), and this brief only.

## Default state

Use the Header fixture from [representative data](../../../08-representative-data-manifest.md). Show:

- supplied Campaign name;
- separate `Live` lifecycle and `Ready` readiness Badges;
- truthful summary unavailable treatment unless exact summary copy is supplied;
- Objective, Audience, Schedule, and Platform in four equal columns;
- `View Campaign`, `Edit` when supplied, `Share` when supplied, and capability-driven lifecycle action;
- collapsed `2 Products` / supplied active Brief count summary, expand/collapse, and `View Product setup`.

Keep identity/summary about 65-70% of the first row and actions about 30-35%. Keep the Header compact enough for part of the Attention Layer to remain visible below it.

## Independent interaction states

Create at most these three, each from the accepted default and never simultaneously:

1. `CP-HDR-01-A`: expand the exact Asset/Brief hierarchy in the data manifest and show `Link Campaign Asset` at Campaign level.
2. `CP-HDR-01-B`: open a read-oriented right Drawer with Campaign Strategy, Creator Strategy, and Commercial Strategy using only supplied values/unavailable treatment.
3. `CP-HDR-01-C`: open the supported Share Dialog; do not invent URLs, recipients, permissions, or channels.

## Required output during generation

Return only screen name, screen ID, session ID when returned, screenshot resource, and concise compliance/deviation report. Do not retrieve HTML. Stop for human review after the desktop base before adding interactions.

## Rejection conditions

- global AppShell navigation reproduced;
- Reporting or Setup shown as a workspace;
- generic Campaign toggle;
- lifecycle/readiness conflated;
- fabricated summary/sharing data;
- Campaign-local Brand Centre editing;
- multiple open overlays;
- prior Campaign Page screen used as parent.
