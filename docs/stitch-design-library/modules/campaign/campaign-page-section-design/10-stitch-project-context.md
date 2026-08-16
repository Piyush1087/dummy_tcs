# Creator Shop Campaign Page - compact Stitch context

Creator Shop is a responsive creator-commerce workspace. The Campaign Page helps a Brand understand the Campaign, understand performance/attention, then do operational work.

The page has exactly three parts: **Campaign Header**, **Campaign Attention Layer** (Performance, Budget, Actionables), and **Operational Workspace**. The workspace selector has exactly **Discovery, Applicants, Collaborations**. Reporting is never a workspace.

Ownership: a Campaign Asset references a Brand Centre entity; Brief belongs under its exact Campaign Asset; Deliverables belong under Brief; Application owns decisions; Collaboration is independent and Campaign Page only references/navigates to its workspace.

Use only supplied authoritative data. Never fabricate metrics, AI summaries, recommendations, budget remaining, creator information, Application data, or Collaboration state. Show truthful unavailable states and keep loading, empty, unavailable, and error distinct.

Follow Aurora Design System 5.0 for reusable primitives and Creator Shop AppShell boundaries. Generate feature Content Area only; do not recreate global navigation. Desktop authority is `1440 x 900` with 72px Header, 80px collapsed Sidebar, and 32px page padding. Mobile authority is `390 x 844` with 56px Header, 64px Bottom Navigation plus safe area, and 16px page padding.

Use progressive disclosure. Desktop contextual detail may use a right drawer; adapt it to a full/near-full-screen mobile sheet. Mobile filter controls use an accessible sheet. Avoid page-level horizontal overflow and keep sticky actions clear of Bottom Navigation.

Lifecycle, readiness, and capability remain distinct. Show actions and workspace operability only when supplied capability permits; do not use a generic Campaign toggle.

Generate one named screen per call. Start from the current approved Section Visual Plan and current screen/interaction brief only. Return the requested concise evidence, then stop for human review. Do not expand the section or create extra variants without approval.
