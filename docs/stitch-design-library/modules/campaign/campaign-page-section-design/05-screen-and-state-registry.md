# Screen and state registry

**Registry status:** all required new references are recorded. Header IDs are frozen; later IDs are provisional until the relevant Section Visual Plan is accepted.

An item may be preserved as an independent screen or as an accepted interaction state under the interaction-depth rule. Every item still requires new-project evidence.

## Campaign Header

| ID | Required reference | Form | Status |
|---|---|---|---|
| `CP-HDR-01` | Operational Header desktop | Desktop base plus independent disclosure/drawer/modal states | Brief ready |
| `CP-HDR-01-A` | Expanded Campaign Asset -> Brief hierarchy | Interaction state from default `CP-HDR-01` | Brief ready |
| `CP-HDR-01-B` | Campaign Details drawer | Interaction state from default `CP-HDR-01` | Brief ready |
| `CP-HDR-01-C` | Share modal | Interaction state from default `CP-HDR-01` | Brief ready |
| `CP-HDR-02` | Lifecycle/capability action variants | Component/state reference, not five pages | Brief ready |
| `CP-HDR-M01` | Mobile Header adaptation | Mobile adaptation from accepted `CP-HDR-01` | Brief ready |

## Campaign Attention Layer

| Provisional ID | Required reference | Expected form |
|---|---|---|
| `CP-ATT-01` | Mature Campaign Performance, Budget, and Actionables | Desktop base |
| `CP-ATT-02` | Full Campaign Report overlay | Independent overlay/surface if composition demands |
| `CP-ATT-03` | Budget edit and prioritized Actionables interaction | Accepted interaction(s), separated if depth exceeds rule |
| `CP-ATT-M01` | Mobile Attention Layer | Mobile adaptation from accepted desktop |

## Product/Campaign Asset and Brief

| Provisional ID | Required reference | Expected form |
|---|---|---|
| `CP-AST-01` | Link Asset drawer: type selection and search | Desktop drawer |
| `CP-AST-02` | Offering selected with read-only preview and confirmation | Drawer interaction/state |
| `CP-AST-03` | Linked Campaign Asset detail | Desktop detail surface |
| `CP-AST-04` | Asset with nested Briefs, statuses, and contextual actions | Desktop detail state |
| `CP-AST-M01` | Mobile Asset/Brief sheet | Mobile adaptation |

## Discovery

| Provisional ID | Required reference | Expected form |
|---|---|---|
| `CP-DSC-01A` | Provider disconnected | Capability state |
| `CP-DSC-01B` | Authentication failed | Error/capability state |
| `CP-DSC-01C` | Available-empty | Authoritative empty state |
| `CP-DSC-02` | Populated workspace with complete header, supported filters, and Creator Cards | Desktop base |
| `CP-DSC-03` | Creator detail drawer with Campaign Fit | Desktop drawer |
| `CP-DSC-M01` | Mobile Discovery including filter interaction | Mobile adaptation plus filter sheet |

## Applicants

| Provisional ID | Required reference | Expected form |
|---|---|---|
| `CP-APP-01` | Decision queue with complete header, supported filters, definitive Creator/Application Cards | Desktop base |
| `CP-APP-02` | One creator with multiple Brief applications expanded | Expanded state or separate screen per composition |
| `CP-APP-03` | Applicant detail drawer with Application-specific decisions | Desktop drawer |
| `CP-APP-M01` | Mobile Applicants adaptation | Mobile adaptation |

## Collaborations

| Provisional ID | Required reference | Expected form |
|---|---|---|
| `CP-COL-01` | Workspace header and reference cards for Needs Attention, In Progress, and Completed | Desktop base |
| `CP-COL-M01` | Mobile Collaboration reference-card adaptation | Mobile adaptation |

## Optional integration QA

| Provisional ID | Reference | Limitation |
|---|---|---|
| `CP-QA-D01` | Assembled desktop Campaign Page | Integration check only |
| `CP-QA-M01` | Assembled mobile Campaign Page | Integration check only |

## Universal state obligations

Where applicable, each section accounts for loading, populated, authoritative empty, unavailable/deferred, recoverable local error, capability-disabled, focus-visible, busy, long-content, and missing optional data. These ordinary variants inherit an accepted composition unless they materially change it.
