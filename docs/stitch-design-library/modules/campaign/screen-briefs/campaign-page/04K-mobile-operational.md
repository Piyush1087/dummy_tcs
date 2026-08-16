# CP-ST-07 — Mobile operational Campaign brief

Priority: P0  
Viewport: 390×844 browser viewport  
Stress review: 360px width and reduced visible browser height  
Parent: Accepted desktop screen family

## Goal and representative state

Allow one-handed Campaign operation without clipped navigation or actions.

```text
Lifecycle: Live
Readiness: Ready
Applicants: available and selected
Reporting: unavailable
Workspace selection: URL-backed and restorable
```

## Required hierarchy

1. Existing compact AppShell/mobile navigation.
2. Campaign name, lifecycle and one permitted action.
3. Readiness/exception.
4. Compact facts.
5. Accessible workspace selector with labels, counts and availability.
6. One Applicants workspace body and reachable decision action.
7. Deeper strategy/setup through disclosure/drawer.

Show the interaction intent that re-entry restores Applicants, while an invalid/unavailable Reporting selection falls back to the backend-priority available workspace.

## Mobile rules

- no replacement Header or Bottom Navigation;
- no page-level horizontal overflow;
- workspace control may scroll internally or use a compact switcher;
- single-column cards and practical touch targets;
- essential actions are not swipe-only;
- persistent or contextual actions must not cover content or AppShell navigation;
- account for browser chrome and safe area;
- secondary utilities move to menu/drawer;
- this is responsive adaptation of the desktop product, not a separate design.

## Prohibited

Hidden readiness, desktop table dependence, duplicate shell, provider content, mobile-only authority, clipped controls and swipe-only essential actions.

## Required output

Return one 390×844 mobile screen with exact identity, parent lineage, screenshot/HTML resources and deviations. Include a 360px stress assessment if the connector supports variants, but do not generate an extra authority screen without approval.

