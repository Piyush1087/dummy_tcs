---
name: Aurora Design System
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
  on-primary: '#002114'
  primary-container: '#34d399'
  on-primary-container: '#00563b'
  inverse-primary: '#45dfa4'
  secondary: '#4b6267'
  on-secondary: '#ffffff'
  secondary-container: '#cbe4e9'
  on-secondary-container: '#4f676b'
  tertiary: '#F5926E'
  on-tertiary: '#ffffff'
  tertiary-container: '#ffa668'
  on-tertiary-container: '#783901'
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
  tertiary-fixed: '#ffdcc7'
  tertiary-fixed-dim: '#ffb787'
  on-tertiary-fixed: '#311300'
  on-tertiary-fixed-variant: '#723600'
  background: '#f4fbf4'
  on-background: '#161d19'
  surface-variant: '#dde4dd'
  surface-page: '#F8F8F8'
  surface-card: '#FFFFFF'
  surface-workflow: '#F0FDF4'
  border-default: '#E5E7EB'
  text-high: '#0E1214'
  text-muted: '#6B7280'
  status-error: '#CA0F1C'
  warning-bg: '#FFF6F6'
  disabled-bg: '#F3F4F6'
typography:
  h1:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h1-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h2:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.005em
  h2-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.005em
  h3:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '700'
    lineHeight: '1.3'
    letterSpacing: '0'
  body:
    fontFamily: Source Sans 3
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  body-bold:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.5'
    letterSpacing: '0'
  label:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: '0'
  caption:
    fontFamily: Source Sans 3
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  eyebrow:
    fontFamily: Plus Jakarta Sans
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
  unit: 8px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 48px
  sidebar-expanded: 240px
  sidebar-collapsed: 80px
  header-desktop: 72px
  header-mobile: 56px
---

## Brand & Style

The design system for "Creator Shop" is an operational, high-clarity dashboard environment designed for the creator economy. It prioritizes "Content Resilience," ensuring that the UI remains functional and readable under the pressure of real-world data and varying screen densities.

The visual style is **Corporate / Modern** with a high-contrast utilitarian edge. It leverages a deep, grounding "Midnight Black" for structural navigation and sidebar surfaces, contrasted by a vibrant "Aurora Green" to signal action and success. The aesthetic is characterized by clean lines, 1px borders, and a focus on hierarchical density that feels both technical and premium.

Key personality traits:
- **Calm & Dependable:** Systematic layouts that reduce cognitive load.
- **Focused:** Uses dark sidebars to anchor the user and bright accents to guide attention.
- **Data-First:** Optimized for scannability across campaign metrics and creator profiles.

## Colors

The palette is rooted in high-contrast functional roles. 

- **Primary (Aurora Green):** Reserved for primary actions, active indicators, and progress states. It should always be paired with "on-primary" dark text for accessibility.
- **Secondary (Midnight Black):** Used for structural navigation elements like the sidebar and mobile drawers to provide a sense of authority.
- **Tertiary (Light Orange):** Used sparingly for attention-grabbing accents and campaign-specific highlights.
- **Surfaces:** A light-mode default using a soft gray canvas with pure white elevated cards to distinguish content areas from the background.
- **Semantic States:** Success is tied to the brand green, while error states use a crimson red paired with a light blush background for alerts.

## Typography

The design system employs a dual-font strategy to balance UI structure with data readability. 

- **Headings & UI (Plus Jakarta Sans):** Used for headlines, labels, and navigation. Its geometric but approachable nature provides clear hierarchy and brand character. 
- **Data & Content (Source Sans 3):** Used for body text, input values, and metadata. It is chosen for its exceptional legibility in high-density data environments.

Line heights are tightly controlled: 1.2 for headings to keep stacked titles compact, and 1.5 for body text to ensure readability in long-form descriptions or table cells.

## Layout & Spacing

The design system is built on a strict **8px base grid**. 

**Layout Model:**
- **Desktop:** A fixed-fluid hybrid. A persistent left sidebar (80px or 240px) anchors the application. The main content uses a 2-column asynchronous grid (1.2fr / 0.8fr) with a max-width of 1440px.
- **Tablet/Mobile:** The layout reflows into a single-column stack. Sidebars transform into slide-over drawers, and a 64px bottom navigation bar is introduced for mobile-first accessibility.

**Spacing Rhythm:**
- **Margins:** 32px (Desktop), 24px (Tablet), 16px (Mobile).
- **Gaps:** Standard component spacing is 24px on desktop, scaling down to 12-16px on mobile.

## Elevation & Depth

Visual hierarchy is established through **Tonal Layers** and **Low-Contrast Outlines** rather than aggressive shadows.

- **The Canvas:** The base layer is the `#F8F8F8` page surface.
- **Containers:** Content is housed in "Pure White" cards (`#FFFFFF`) with a `1px solid #E5E7EB` border.
- **Active Layers:** Selected states or active workflow areas use the "Light Mint" (`#F0FDF4`) surface to provide tonal depth without changing the elevation.
- **Overlays:** Modals and dialogs use a standard `rgba(0, 0, 0, 0.5)` backdrop. These are the only elements that utilize a soft, diffused ambient shadow to separate them from the main application shell.

## Shapes

The shape language is "Rounded" and approachable. 

- **Standard Cards:** Use a 12px radius (`rounded-lg`) to create a distinct container feel.
- **Interactive Elements:** Buttons and form inputs use an 8px radius for a balanced, modern dashboard aesthetic.
- **Chips:** Utilize a "Pill" shape (9999px) to clearly distinguish them as interactive tokens.
- **Badges:** Use an 8px radius to separate them visually from the rounded chips, indicating they are informational status markers.

## Components

**Buttons**
Standard height is 48px. Primary buttons use the brand green with dark forest text. Secondary buttons are white with a gray border. Ghost buttons are borderless and use a subtle mint background on hover.

**Form Fields**
Inputs follow a vertical stack: Label (Bold), Input Box (48px height, 8px radius), and Helper Text (Caption style). Focus states are indicated by a 1.5px brand green border.

**Cards**
The "Standard Card" is the primary building block, featuring 24px internal padding and a 12px radius. For list items, a "Compact Card" with 8-16px padding is used.

**Chips vs. Badges**
- **Chips:** Pill-shaped, used for filters or removable tags.
- **Badges:** 8px rounded corners, color-coded by status (Green for Success, Red/Blush for Error, Orange for Warning).

**Sidebar**
A high-contrast Midnight Black container. Active items are marked by a 4px vertical brand green indicator on the leading edge.

**Navigation**
Tabs use the 16px Bold UI font with a 2px brand green underline for the active state. Mobile uses a 64px fixed bottom bar for primary navigation targets.