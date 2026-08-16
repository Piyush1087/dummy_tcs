# Aurora 5.0 and AppShell context

This is a compact extract, not a duplicate design-system library. [Canonical Aurora 5.0](../../../../design-system/AURORA_DESIGN_SYSTEM.md) and the existing [Aurora Stitch context](../../../global/01B-aurora-5-stitch-context.md), [AppShell context](../../../global/01C-application-shell-and-viewport-context.md), and [global Stitch instructions](../../../global/01D-global-stitch-design-instructions.md) remain authoritative.

## Aurora essentials

- Aurora owns reusable visual primitives; the approved section plan owns feature composition.
- Primary `#34D399`; dark `#061F23`; page `#F8F8F8`; card `#FFFFFF`; border `#E5E7EB`; high text `#0E1214`; muted text `#6B7280`.
- Satoshi Variable for headings/labels and Source Sans 3 for body/input copy. Report any fallback.
- 8px spacing grid; desktop outer padding 32px; mobile outer padding 16px; standard internal panel padding 24px.
- Buttons and fields are 48px high with 8px radius; standard cards use 12px radius; mobile targets are at least 44x44px.
- Use Badge for status and Chip for interactive selection.
- Use progressive disclosure without Card-inside-Card proliferation.
- Preserve focus-visible, readable contrast, wrapping, zoom resilience, and non-color status cues.

## AppShell boundary

Generate Campaign feature Content Area only. Never recreate the desktop Sidebar, global Header, mobile Header, global navigation drawer, mobile Bottom Navigation, account utilities, notifications, or shell breadcrumbs.

Canonical shell reservations:

| View | Reservation |
|---|---|
| Desktop | 72px Header; 80px collapsed Sidebar; 32px Content Area padding |
| Mobile | 56px Header; 64px Bottom Navigation plus safe area; 16px Content Area padding |

At physical desktop `1440 x 900`, assume a `1360 x 828` shell content region and approximately `1296px` inner width after page padding. At physical mobile `390 x 844`, treat visible module height as browser-constrained and reserve shell/navigation clearance. Later implementation acceptance also checks `360px` width.

## Responsive/overlay rules

- Desktop contextual details use a right drawer when appropriate.
- A desktop drawer becomes a full or near-full-screen sheet on mobile when side geometry is unusable.
- Mobile filters and compact choices may use a sheet.
- Persistent actions must sit above Bottom Navigation and reserve content clearance.
- Prefer document scroll; avoid fixed-height workspaces, nested scroll, `100vh` assumptions, and page-level horizontal overflow.
- Transform tables to cards when individual comprehension is more important at mobile width.
