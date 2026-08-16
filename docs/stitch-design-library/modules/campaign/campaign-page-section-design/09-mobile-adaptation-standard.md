# Mobile adaptation standard

Every major section requires at least one newly generated mobile adaptation.

## Required method

1. Accept the section's desktop base and preserve its project/screen lineage.
2. Use Stitch's mobile adaptation capability against that accepted desktop reference.
3. Target physical viewport `390 x 844` with AppShell reservations.
4. Correct only mobile-specific issues through targeted revisions.
5. Preserve desktop authority and record lineage.
6. Later implementation acceptance must also review constrained width at `360px`.

## Mobile acceptance

- Reserve the 56px AppShell Header and 64px Bottom Navigation plus safe area.
- Keep normal 16px Content Area padding unless a section explicitly authorizes edge-to-edge treatment.
- Do not regenerate global Header, Bottom Navigation, Back Navigation, or navigation drawer.
- Preserve product meaning, hierarchy, action priority, and exact three-workspace identity.
- Keep touch targets at least 44x44px and body text at least 14px.
- Prevent page-level horizontal overflow.
- Convert desktop drawers to full/near-full-screen sheets when required.
- Convert filter/sort controls to an accessible sheet.
- Keep sticky actions above Bottom Navigation with final-content clearance.
- Check keyboard-open behavior for search/editable overlays.
- Prefer readable stacking and copy disclosure over typography reduction.

## Section minimums

| Section | Required mobile reference |
|---|---|
| Campaign Header | `CP-HDR-M01`, including full-screen Details sheet behavior |
| Attention Layer | `CP-ATT-M01` |
| Assets and Briefs | `CP-AST-M01` sheet |
| Discovery | `CP-DSC-M01`, including filter sheet |
| Applicants | `CP-APP-M01` |
| Collaborations | `CP-COL-M01` reference cards |
