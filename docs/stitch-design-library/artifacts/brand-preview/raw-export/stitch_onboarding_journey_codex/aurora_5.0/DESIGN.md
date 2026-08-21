---
name: Aurora 5.0
colors:
  surface: '#f4fbf4'
  surface-dim: '#d4dcd5'
  surface-bright: '#f4fbf4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eef6ee'
  surface-container: '#e8f0e9'
  surface-container-high: '#e2eae3'
  surface-container-highest: '#dde4dd'
  on-surface: '#161d19'
  on-surface-variant: '#3c4a42'
  inverse-surface: '#2b322e'
  inverse-on-surface: '#ebf3ec'
  outline: '#6c7a71'
  outline-variant: '#bbcac0'
  surface-tint: '#006c4b'
  primary: '#006c4b'
  on-primary: '#ffffff'
  primary-container: '#34d399'
  on-primary-container: '#00563b'
  inverse-primary: '#45dfa4'
  secondary: '#4b6267'
  on-secondary: '#ffffff'
  secondary-container: '#cbe4e9'
  on-secondary-container: '#4f676b'
  tertiary: '#964729'
  on-tertiary: '#ffffff'
  tertiary-container: '#ffa483'
  on-tertiary-container: '#7d3418'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#68fcbf'
  primary-fixed-dim: '#45dfa4'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#005137'
  secondary-fixed: '#cee7ec'
  secondary-fixed-dim: '#b2cbd0'
  on-secondary-fixed: '#061f23'
  on-secondary-fixed-variant: '#334a4f'
  tertiary-fixed: '#ffdbcf'
  tertiary-fixed-dim: '#ffb59b'
  on-tertiary-fixed: '#380d00'
  on-tertiary-fixed-variant: '#783114'
  background: '#f4fbf4'
  on-background: '#161d19'
  surface-variant: '#dde4dd'
  surface-workflow: '#F0FDF4'
  surface-page: '#F8F8F8'
  surface-card: '#FFFFFF'
  border-default: '#E5E7EB'
  text-high: '#0E1214'
  text-muted: '#6B7280'
  status-error: '#CA0F1C'
  status-warning-bg: '#FFF6F6'
  sidebar-hover: '#334A4F'
  forest-ink: '#005137'
typography:
  headline-lg:
    fontFamily: Satoshi
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Satoshi
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Satoshi
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md-mobile:
    fontFamily: Satoshi
    fontSize: 20px
    fontWeight: '700'
    lineHeight: '1.2'
  body-base:
    fontFamily: Source Sans 3
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-bold:
    fontFamily: Satoshi
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.2'
  caption:
    fontFamily: Source Sans 3
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.5'
  tab-label:
    fontFamily: Satoshi
    fontSize: 16px
    fontWeight: '700'
    lineHeight: '1.2'
  eyebrow:
    fontFamily: Satoshi
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  xs: 8px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 48px
  gutter: 24px
  margin-desktop: 32px
  margin-tablet: 24px
  margin-mobile: 16px
---

## Brand & Style

The design system is a high-precision operational framework engineered for the Creator Shop ecosystem. It balances a professional, "SaaS-forward" aesthetic with the vibrant energy of the creator economy. The brand personality is **authoritative yet approachable**, prioritizing cognitive clarity and rapid task completion over decorative flair.

The visual style is **Corporate / Modern** with a focus on **Tonal Layering**. It utilizes a "light-mode-first" philosophy where content sits on an airy, neutral canvas, grounded by a deep "Midnight Black" sidebar that signifies administrative control. Success is celebrated through vibrant "Aurora Green" accents, while operational data is organized within crisp, structured containers. The system rejects heavy shadows in favor of 1px hairline borders, ensuring the UI feels lightweight and performant even at high data densities.

## Colors

The palette is functional and semantic, designed to guide the user's eye toward critical actions and status changes.

- **Primary (#34D399):** "Aurora Green" is reserved for high-intent interactive elements, success states, and primary brand markers.
- **Secondary (#061F23):** "Midnight Black" provides structural grounding, used exclusively for global navigation surfaces (Sidebar).
- **Tertiary (#F5926E):** Used for warnings and non-destructive highlights that require attention without the urgency of an error.
- **Neutral Context:** The background follows a hierarchy from `--surface-page` (the lowest layer) to `--surface-card` (elevated content) and `--surface-workflow` (active selection or success tint).
- **Typography:** Uses `--text-high` for standard reading and `--text-muted` for metadata and placeholders to maintain a clean visual hierarchy.

## Typography

This design system employs a dual-font strategy. **Satoshi** (Variable) provides geometric structure for headings and labels, ensuring the dashboard feels modern and proprietary. **Source Sans 3** is utilized for all body copy and input text to ensure maximum legibility at smaller sizes.

- **Scale:** Font sizes are capped at 32px for desktop to prevent excessive whitespace usage in data-heavy views.
- **Responsiveness:** Headings scale down on mobile viewports to maintain balance, while body text stays locked at 14px to ensure accessibility and "no-shrink" layout resilience.
- **Alignment:** All text is left-aligned by default, except for numerical data in tables which should utilize tabular lining if available.

## Layout & Spacing

The system is built on a **fixed grid** approach with a strict **8px base unit**. 

- **Grid Model:** Use a 12-column grid for desktop views with 24px gutters. For dashboards, the layout often features a fixed-width sidebar (240px expanded / 80px collapsed) and a fluid main content area.
- **Container Padding:** Internal card padding is standardized at 24px on desktop, scaling to 16px on mobile to maximize horizontal real estate.
- **Vertical Rhythm:** Sections are separated by 32px or 48px increments to clearly distinguish between disparate functional modules.
- **Mobile Reflow:** Complex data grids must transform into vertical card stacks on viewports smaller than 768px. All interactive targets on mobile must maintain a minimum 44x44px touch area.

## Elevation & Depth

Hierarchy in this design system is primarily conveyed through **Tonal Layering** and **Low-contrast outlines**. 

- **Surfaces:** The page background (`#F8F8F8`) acts as the base. Interactive containers and cards are elevated visually using a pure white background (`#FFFFFF`) and a 1px `--border-default` outline.
- **Shadows:** Avoid drop shadows for standard UI elements. Subtle ambient shadows (low opacity, wide blur) are reserved only for floating elements like Modals, Popovers, and Toast notifications to separate them from the primary interface.
- **Active States:** Depth is often communicated through color shifts rather than physical elevation. For example, a "Selected" card uses the `--surface-workflow` background and a primary-colored border.
- **Z-Index:**
  - Sidebar: 100
  - Global Header: 200
  - Modals: 900+

## Shapes

The shape language is geometric and balanced, utilizing specific radii to distinguish between different types of UI containers.

- **Radius 8px (Base):** Applied to interactive elements including Buttons, Text Inputs, Selects, and compact data tiles. This provides a soft yet professional appearance.
- **Radius 12px (Container):** Applied to standard Cards, Dialogs, and Bottom Sheets (top corners). This larger radius helps distinguish major layout containers from individual controls.
- **Pill (9999px):** Exclusively reserved for Chips and Tags to give them a distinct "object" feel that contrasts with the squareness of the grid.

## Components

### Buttons
- **Primary:** Aurora Green background with "Deep Forest Ink" text. 48px height for standard actions.
- **Secondary:** White background with a 1px `--border-default` and high-contrast text.
- **States:** Hover states should involve a slight darkening or the addition of a subtle overlay. Disabled states use `#F3F4F6` background with muted text.

### Inputs
- **Field Style:** 48px height, white background, 8px radius. Use a 4px gap between the Satoshi Bold label and the input field. 
- **Focus:** Transition the border to `--color-primary` with a 1px stroke.

### Cards
- **Standard:** White background, 12px radius, 1px border. 
- **Selected Card:** Apply `--surface-workflow` (Light Mint) background and a 1px `--color-primary` border to indicate selection.

### Chips & Badges
- **Chips:** Pill-shaped, 32px height, interactive.
- **Badges:** 8px radius, informational only. Use semantic coloring: Light Mint/Deep Green for success, Light Pink/Crimson for errors.

### Navigation
- **Sidebar:** Fixed 240px width in Midnight Black. Active links use a `--sidebar-hover` background and a 4px Aurora Green vertical "active bar" on the left edge.
- **Bottom Nav (Mobile):** 64px height, white background, fixed to bottom. Icons should be 24px with clear active/inactive state coloring.