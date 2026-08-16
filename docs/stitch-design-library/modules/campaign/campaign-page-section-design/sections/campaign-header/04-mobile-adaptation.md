# Campaign Header mobile adaptation

**Reference:** `CP-HDR-M01`
**Parent:** accepted new-project `CP-HDR-01`
**Viewport:** physical `390 x 844`; also inspect `360px` during implementation acceptance

## Required adaptation

- Keep Campaign name, lifecycle, and readiness visible near the top.
- Compact or disclose the summary while preserving truthful unavailable behavior.
- Transform four facts into a readable two-column layout or list; do not shrink copy.
- Keep the primary capability-driven lifecycle action reachable.
- Move low-frequency supported actions into an accessible overflow menu only when necessary.
- Stack the Asset/Brief disclosure and preserve exact hierarchy.
- Transform Campaign Details Drawer into a full-screen Sheet.
- Use a mobile-appropriate Dialog/Sheet for supported Share behavior without inventing controls.
- Keep sticky controls above AppShell Bottom Navigation and reserve bottom clearance.

## Shell and viewport

Generate feature Content Area only. Reserve 56px AppShell Header, 64px Bottom Navigation plus safe area, browser chrome pressure, and 16px page padding. Do not generate shell controls or duplicate Back Navigation.

## Interaction and resilience

- Effective tap targets are at least 44x44px.
- Overflow menu is keyboard/focus accessible and cannot hide the primary lifecycle action.
- Long Campaign name may occupy two balanced lines.
- Expanded Asset/Brief content uses document flow; no page-level horizontal scroll.
- Full-screen Details Sheet owns internal scrolling with reachable Close and context.
- Keyboard-open checks apply to any supported search/share editable control.
- Final content and actions remain reachable above Bottom Navigation.

## Mobile correction boundary

After automatic adaptation, revise only mobile-specific issues: browser viewport constraints, AppShell clearance, sticky-action collision, overflow, tap targets, drawer-to-sheet transformation, hierarchy, and bounded copy compression/disclosure. Do not redesign accepted desktop hierarchy or change product meaning.
