# 01B — Aurora 5.0 Stitch Context

**Status:** Review draft 0.1  
**Audience:** Stitch  
**Scope:** Operational Aurora design authority required for Stitch UI generation  
**Owner:** Aurora Design System  
**Canonical source:** `docs/design-system/AURORA_DESIGN_SYSTEM.md`  
**Canonical version:** 5.0 — CANONICAL  
**Canonical source blob:** `78bea6d81ec9d610baa777a0af9d3d2b1b49c913`  
**Extract version:** 0.1  
**Last material update:** 14 August 2026

## 1. Authority and use

This document is a Stitch-facing operational extract of Aurora Design System 5.0. It contains the reusable visual, semantic, responsive, interaction, accessibility, and resilience rules needed for screen generation.

Follow Aurora 5.0 literally.

If this extract conflicts with the canonical Aurora 5.0 source, the canonical source wins and the conflict must be reported. Do not silently select a convenient value or invent a replacement.

Aurora owns reusable interface decisions. It does not define feature-specific fields, business logic, lifecycle, validation, calculations, permissions, final copy, or information priority. Those come from the applicable Module Manifest and Screen Brief.

Normative terms:

- **MUST / MUST NOT:** mandatory;
- **SHOULD / SHOULD NOT:** strong default; deviation requires a valid reason;
- **MAY:** optional and contextual.

## 2. Aurora character

Aurora is:

- clear;
- consistent;
- calm;
- semantic;
- composable;
- accessible by design;
- content-resilient;
- responsive by transformation.

Creator Shop is a responsive web dashboard, not a mobile-native consumer app.

Dense information is acceptable when it improves scanning and decisions, but not when it harms readability, hierarchy, or touch interaction.

Do not:

- create hierarchy with arbitrary font sizes or extra colors;
- place every section inside a Card;
- introduce multiple competing primary actions;
- turn mobile into a compressed desktop layout;
- independently redesign the product at each viewport.

## 3. Visual hierarchy

Use this order:

1. page or workflow identity;
2. section identity;
3. primary task or data;
4. supporting information;
5. metadata and helper information.

Domain nesting does not automatically require visual container nesting. Avoid Card-inside-Card structures merely because the data model is hierarchical.

## 4. Foundation tokens

### 4.1 Color

| Token | Value | Use |
|---|---|---|
| `--color-primary` | `#34D399` | Aurora Green; primary actions, active states, brand identity |
| `--color-secondary` | `#061F23` | Midnight Black; dark surfaces and global navigation |
| `--color-tertiary` | `#F5926E` | Light Orange; tertiary emphasis and accent |
| `--surface-workflow` | `#F0FDF4` | selected states and success/info backgrounds |
| `--surface-page` | `#F8F8F8` | page background |
| `--surface-card` | `#FFFFFF` | cards and elevated surfaces |
| `--border-default` | `#E5E7EB` | borders and dividers |
| `--text-high` | `#0E1214` | primary text and headings |
| `--text-muted` | `#6B7280` | secondary text, metadata, placeholders |
| `--status-error` | `#CA0F1C` | errors and destructive emphasis |
| `--status-warning-bg` | `#FFF6F6` | warning/error-family light background |
| `--disabled-bg` | `#F3F4F6` | disabled backgrounds |
| `--disabled-text` | `#6B7280` | disabled text |

Rules:

- `--border-default` and `--disabled-bg` are different tokens.
- `#FFF6F6` is light pink, not amber or orange.
- Colors do not change merely because the viewport changes.
- Status meaning must not rely on color alone.
- Do not introduce near-match or feature-local substitutes for these tokens.

### 4.2 Typography

| Role | Family | Desktop | Mobile | Weight | Use |
|---|---|---:|---:|---|---|
| H1 | Satoshi Variable | 32px | 28px | Bold | page and major workflow titles |
| H2 | Satoshi Variable | 24px | 20px | Bold | section and major card titles |
| Body | Source Sans 3 | 14px | 14px | Regular | paragraphs and descriptions |
| Caption | Source Sans 3 | 12px | 12px | Medium | helper text and metadata |
| Label | Satoshi Variable | 14px | 14px | Bold | form and UI labels |
| Input text | Source Sans 3 | 14px | 14px | Regular | user-entered values |

Rules:

- Heading line-height: `1.2`.
- Body line-height: `1.5`.
- Do not reduce body copy below 14px to make a layout fit.
- Do not invent feature-specific heading sizes.
- Allow meaningful text to wrap rather than shrinking it.

### 4.3 Font loading

Load the approved families using these sources where Stitch supports external font loading:

- Satoshi: `https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400,300&display=swap`
- Source Sans 3: `https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600;700&display=swap`

Do not silently substitute another typeface. If Stitch cannot load either family:

1. preserve the intended family name in the design/export where possible;
2. report which font failed;
3. report the fallback actually displayed;
4. do not alter the Aurora typography scale to compensate.

### 4.4 Spacing

Base grid: **8px**.

Canonical scale:

```text
8px / 16px / 24px / 32px / 48px
```

| Use | Desktop | Tablet | Mobile |
|---|---:|---:|---:|
| Outer page/container padding | 32px | 24px | 16px |
| Internal Card/panel padding | 24px | 24px | 24px |
| Standard item gap | 16px | 16px | 16px |
| Larger page-grid gap | 24px | 16px | 16px |
| Button padding | 12px 24px | 12px 24px | 12px 24px |
| Input horizontal padding | 16px | 16px | 16px |

Reduce outer margins, column count, and arrangement before reducing internal component spacing.

### 4.5 Radius and borders

| Component | Radius |
|---|---:|
| Button | 8px |
| Input / Select / Date Input | 8px |
| Textarea | 8px |
| Badge | 8px |
| Standard Card | 12px |
| Compact Card | 8px |
| Chip | 9999px |
| Dialog | 12px |
| Bottom Sheet | 12px top corners |

Default border width: **1px**.

Do not reduce radius on mobile or introduce arbitrary sharp-corner variants. Drawer and Full-screen Sheet edge treatment follows their placement; do not add decorative radii without an Aurora basis.

### 4.6 Component geometry

| Property | Value |
|---|---:|
| Input height | 48px |
| Button height | 48px |
| Chip height | 32px |
| Standard desktop Drawer width | 320px |
| Dialog max width | 600px |
| Textarea minimum height | 120px |

Application-shell geometry is supplied by `01C — Application Shell & Viewport Context`.

### 4.7 Breakpoints

```text
Mobile:  < 768px
Tablet:  768px–1280px
Desktop: > 1280px
```

Breakpoints classify available space; they do not mandate one mechanical transformation.

## 5. Layout and scroll

Canonical page hierarchy:

```text
Application Shell
└── Page
    ├── Page Header / Context
    └── Sections
        └── Components / Feature Compositions
```

- Desktop may use 2–3 columns when content relationships support it.
- Tablet normally reduces to 2 columns.
- Mobile normally uses one primary column.
- Avoid page-level horizontal scrolling as a general responsive strategy.
- Allow inherently wide components to own bounded horizontal scroll only where it preserves usability.
- Page content normally scrolls with the document.
- Avoid nested scroll regions unless they materially improve the task.
- Persistent regions must reserve enough clearance that reachable content is never covered.

## 6. Responsive transformation

Use these transformations intentionally:

- **Stack:** horizontal to vertical;
- **Reflow:** rearrange content;
- **Wrap:** use additional lines;
- **Collapse:** compact while retaining access;
- **Transform:** change representation, such as Table to Data Cards;
- **Reposition:** move an element while preserving its role;
- **Progressive disclosure:** defer secondary detail without deleting access.

Responsive transformation must not, without an explicit product contract:

- change product meaning;
- remove required data;
- change action priority;
- rewrite approved copy;
- alter lifecycle or state meaning;
- shrink body text below 14px;
- reduce touch targets below usable size.

A long mobile page is not automatically a design defect. Prefer readable vertical flow over compression, arbitrary hiding, or unnecessary Accordions.

### Forms

- Desktop: 1–3 columns where field relationships support it.
- Tablet: 1–2 columns.
- Mobile: primarily one column.

### Tables and repeated data

Keep a Table when comparison remains readable and operable. Transform it to Data List/Data Cards when individual comprehension matters more or mobile comparison becomes unusable.

The feature authority determines which data is primary, secondary, or progressively disclosed.

### Overlays

- short focused task → Dialog or compact Bottom Sheet;
- short mobile choice/action → Bottom Sheet;
- contextual desktop Drawer → full/near-full-screen Sheet on mobile where required;
- long form or complex temporary workflow → Full-screen Sheet.

There is no universal `70vh` mobile overlay rule. Bottom Sheets are content-driven within the usable viewport.

## 7. Content resilience

Representative design content is not a maximum-content contract.

Use:

- **Wrap** for meaningful text by default;
- **Expand** for containers that can grow vertically;
- **Truncate** only when full content remains recoverable or the feature explicitly allows it;
- **Scroll** for bounded content where preserving geometry is more important than expansion.

Design for realistic variation in:

- names and titles;
- currencies and amounts;
- dates and counts;
- statuses;
- validation messages;
- metadata;
- user-generated text.

Do not invent abbreviations or rewrite approved copy to make a layout fit.

Loading, Empty, missing optional data, unavailable, and Error are different states.

## 8. Accessibility and interaction states

### Accessibility

- Provide clearly perceivable focus-visible treatment.
- Do not rely on color alone for critical meaning.
- Preserve readable contrast.
- Keep essential instructions visible or reliably available; do not place them only in Tooltips.
- Mobile interactive targets should provide an effective target of at least 44×44px.
- Disabled must remain distinguishable from Selected/Active.
- Errors requiring correction must use more than color.
- Hover may improve discoverability but cannot be required for access.
- Layouts must tolerate increased text size, wrapping, and realistic browser zoom.

### Standard interaction states

Where applicable, show:

```text
Default
Hover
Focus-visible
Pressed
Disabled
```

Components may also support:

```text
Selected / Active
Open / Expanded
Invalid / Error
Loading
Complete
```

Selected/Active is not the same as focus. Disabled must not look selected. Loading and validation should preserve component geometry where practical.

## 9. Component semantics

Choose components by meaning rather than resemblance.

| Need | Aurora component/pattern |
|---|---|
| Perform an action | Button |
| Navigate | Link |
| Independent binary selection | Checkbox |
| Immediately applied on/off setting | Switch |
| Mutually exclusive simple options | Radio |
| Defined compact option list | Select |
| Large or searchable option set | Searchable Select / Combobox |
| Descriptive or consequential choice | Selection Card |
| Multiple compact selected values | Multi-select + Chips |
| Peer views | Tabs |
| Sequential workflow | Step Indicator |
| Cross-row/column comparison | Table |
| Individual-item comprehension | Data List / Data Cards |
| Persistent important condition | Alert |
| Brief non-blocking confirmation | Toast |
| Short unknown-duration operation | Spinner |
| Expected content geometry loading | Skeleton |
| Known measurable progress | Linear Progress |
| Long-running contextual operation | Processing State |
| Short focused temporary task | Dialog |
| Contextual secondary desktop task | Drawer |
| Short compact mobile task | Bottom Sheet |
| Substantial constrained-screen workflow | Full-screen Sheet |
| Distinct grouped object | Card |
| Major page region | Section Container |
| Informational status | Badge |
| Selectable/removable/filtering value | Chip |
| Supplementary clarification | Tooltip |
| Essential explanation | Visible content |
| Independent secondary disclosure | Accordion |
| Critical/high-frequency object action | Direct action |
| Secondary/infrequent action | Overflow Menu where appropriate |

## 10. Core component rules

### 10.1 Buttons and actions

| Variant | Treatment | Use |
|---|---|---|
| Primary | `#34D399`, dark text, bold | dominant action; normally one per action context |
| Secondary | white surface, dark text, bold | supporting or alternative action |
| Outline | transparent, 1px green border, green text | tertiary action |
| Ghost | transparent, green text | subtle action in dense UI |
| Destructive | error semantics | consequential destructive action |
| Disabled | `#F3F4F6`, muted text | unavailable action |

Button baseline: 48px height, 8px radius, Satoshi Bold, 12px 24px padding.

Navigation uses Link, not Button. Icon Buttons keep an effective mobile target of at least 44×44px. Action Groups may reflow, but responsive layout cannot change action semantics.

### 10.2 Fields and form controls

Canonical Field:

```text
Label                    Optional meta
[ Control                             ]
Helper / validation message
```

Do not replace a persistent field label with placeholder text when the field identity must remain visible after entry.

Text Input baseline:

- 48px height;
- white background;
- 1px border;
- 8px radius;
- 0 16px padding;
- label: 14px Bold Satoshi;
- placeholder/input: 14px Source Sans 3;
- helper: 12px Source Sans 3.

States:

- Default border: `#E5E7EB`;
- Focus border: `#34D399`;
- Error border/helper: `#CA0F1C`;
- Disabled background: `#F3F4F6`.

Field errors expand vertically. Textarea minimum height is 120px with 12px 16px padding. Select and Date Input use the same Field/Input geometry. Searchable Select clearly distinguishes search text, selected values, options, and no-results state.

### 10.3 Selection Card

Use when a choice benefits from description, visual identity, or stronger emphasis than Radio/Checkbox.

- 20px internal padding;
- optional 24px icon;
- title and description;
- explicit selection indicator;
- Default: white with 1px `#E5E7EB`;
- Selected: `#F0FDF4` with 1px `#34D399`.

The feature authority owns whether selection is single or multiple.

### 10.4 Chip and Badge

```text
Chip  = interactive / selectable / removable
Badge = informational / status
```

Chip baseline: 32px height, pill radius, 8px 16px padding, 14px Medium Satoshi. Chip groups wrap. Removable Chips require an operable removal action.

Badge baseline radius: 8px. Keep status vocabulary concise and do not rely only on color.

### 10.5 Tabs and Step Indicator

Tabs switch between peer views. They do not represent sequential workflow.

Tabs baseline:

- 16px Bold Satoshi;
- full-width bottom border `#E5E7EB`;
- desktop gap 32px;
- tablet gap 24px;
- active text `#0E1214` with 2px Aurora Green underline;
- inactive text `#6B7280`.

On mobile, keep a normal row if it fits; otherwise use horizontal scrolling while the tab model remains suitable.

Step Indicator represents sequential workflow position. Product authority owns number of steps, labels, navigation, validation, and revisit rules.

### 10.6 Cards and sections

Card baseline:

- white background;
- 1px `#E5E7EB`;
- 12px standard or 8px compact radius;
- 24px internal padding at all breakpoints.

Cards expand vertically for content. Do not wrap every section in a Card.

Use Section Container for a major page region that needs hierarchy without a bounded Card surface.

### 10.7 Disclosure

- Accordion reveals independently understandable secondary content; do not use it solely because a mobile page is long.
- Tooltip provides supplementary clarification, never essential task instructions or the sole error explanation.
- Popover is a compact anchored contextual surface and must fit/reposition within the usable viewport.

### 10.8 Overlays

Dialog:

- backdrop approximately `rgba(0,0,0,0.5)`;
- white surface;
- 12px radius;
- max-width 600px;
- 32px desktop padding;
- scroll content if it exceeds usable height.

Drawer:

- contextual edge surface;
- desktop baseline may use 320px right-side width;
- white background, left border, 24px padding;
- normally transforms to full/near-full-screen Sheet on mobile when side geometry is unusable.

Bottom Sheet:

- short mobile decision or compact task;
- white surface;
- 12px top corners;
- 24px padding;
- content-driven height within the safe usable viewport.

Full-screen Sheet:

- substantial mobile workflow, long form, complex editing, or detailed contextual task;
- may use a persistent header and Persistent Action Region;
- content owns the remaining scrollable area.

Editable mobile overlays must keep focused controls, validation, and workflow actions reachable when the virtual keyboard appears.

### 10.9 Feedback and progress

| Situation | Preferred presentation |
|---|---|
| Specific invalid field | Field error |
| Contained region failed | Section Error |
| Important persistent condition | Alert |
| Blocking page/task issue | Page/System Alert |
| Brief non-blocking confirmation | Toast |
| Short unknown-duration operation | Spinner |
| Expected content geometry loading | Skeleton |
| Known measurable progress | Linear Progress |
| Sequential workflow | Step Indicator |
| Long-running contextual operation | Processing State |

Do not display invented progress percentages. A Section Error allows unaffected regions to remain usable.

Alert baseline: 8px radius, 16px padding, 20px leading icon, 12px icon/text gap, 14px body.

### 10.10 Data and identity

- Use Table when cross-row/column comparison matters.
- Use Data List/Data Cards when individual comprehension matters more.
- Keep frequent or critical row actions direct; eligible secondary actions may move to Overflow Menu.
- Repeated data regions should account for Loading, Populated, Empty, and Error when applicable.
- Metric/Stat requires enough context to understand value, unit, and qualifier.
- Do not assume `up = good` and `down = bad` without product semantics.
- Avatar supports image, initials fallback, and generic fallback.
- Avatar + Identity keeps primary identity and secondary metadata visibly associated.
- Missing media uses an approved fallback, not broken or collapsed UI.
- Use Cover or Contain according to content intent; logos and offering imagery may require different handling.

## 11. Reusable patterns

### Persistent Action Region

Keeps the dominant workflow action reachable when natural page-end placement is insufficient. Detailed shell placement is defined in `01C — Application Shell & Viewport Context`.

Do not make every mobile CTA sticky.

### Empty State

Represents a valid content region with no applicable data, such as first use, no results, filtered empty, or completed/cleared state.

It may include an icon/illustration, title, explanation, primary action, and secondary action.

Do not use Empty State for Loading, Error, unavailable permission, or blocked integration.

### Section Error

Represents a contained failure with recovery where appropriate. It should not break unaffected page regions.

### Confirmation

Use Dialog plus consequence and actions when accidental activation has meaningful consequences. Do not add confirmation to routine reversible actions merely for perceived safety.

## 12. Design acceptance and resilience

Apply the relevant checks:

- default state;
- short and typical content;
- long and very long content;
- missing optional data;
- desktop, tablet, and mobile transformation;
- hover where applicable;
- focus-visible;
- pressed;
- selected/active;
- disabled;
- loading;
- error;
- empty;
- reduced motion;
- virtual keyboard.

For responsive compositions confirm:

- no accidental page-level horizontal overflow;
- readable text;
- preserved action hierarchy;
- required information remains available;
- usable touch targets;
- persistent UI does not cover content;
- overlay content fits the usable viewport.

## 13. Stitch interpretation rules

1. Choose components by semantics before copying the apparent shape of a reference.
2. Treat reference screens as composition examples, not fixed content geometry.
3. Preserve the same product semantics across responsive variants.
4. Let the feature authority determine consequential information priority.
5. Use existing Aurora component → Aurora pattern → feature composition before proposing a new reusable component.
6. Do not rewrite approved copy to solve layout pressure.
7. Do not treat a generated variation as a new Aurora token or component.
8. If an approved reference conflicts with Aurora 5.0, report the discrepancy rather than silently reproducing it.

## 14. Required confirmation during platform grounding

Before generating UI, confirm that you understand:

- Aurora 5.0 is the reusable design authority;
- exact color, typography, spacing, radius, and geometry values must be preserved;
- Satoshi Variable and Source Sans 3 must be loaded from the supplied sources or a fallback must be reported;
- responsive design transforms composition without changing product meaning or deleting required information;
- mobile is responsive web, not a native-app redesign;
- components are chosen by semantics;
- realistic content, loading, error, empty, disabled, long-content, and keyboard conditions must be considered where relevant;
- detailed shell constraints, module authority, and Screen Briefs are supplied separately.
