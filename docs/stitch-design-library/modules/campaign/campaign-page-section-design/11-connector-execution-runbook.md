# Connector execution runbook

## Known connector boundaries

- Stitch cannot read GitHub; Codex resolves and compacts repository authority.
- Text-only grounding or arbitrary attachment upload may be unavailable.
- Preview/share URLs may be unavailable.
- A screen may be created even when the MCP response does not return its ID.
- Screen listings may omit recent screens.
- High-density screenshot dimensions may differ from the represented viewport.
- Signed artifact downloads may fail.
- Large MCP responses can exceed model context.
- Long Codex conversations increase context pressure.
- Generation and artifact retrieval must be separate calls.
- Use fresh conversations and concise section prompts.
- Never automatically retry an uncertain generation because that can create duplicates.
- Record any project-level or lineage fallback.

## Per-section execution

1. Confirm the private project ID and that the current section is not already represented by an uncertain prior call.
2. Inline only [compact project context](10-stitch-project-context.md), the approved current Section Visual Plan, and the current screen/interaction brief.
3. Make one generation call for one desktop base.
4. During generation request only: screen name, screen ID, session ID when returned, screenshot resource, and concise compliance/deviation report.
5. Do not retrieve HTML during generation.
6. Stop for human review.
7. Add at most two or three closely related interactions, each from the accepted default; never stack overlays.
8. Prefer targeted component/div edits for local corrections when supported.
9. Generate mobile from the accepted desktop lineage and correct only mobile-specific defects.
10. Preserve artifacts only after acceptance, using separate retrieval calls.
11. Freeze the section and continue in a fresh, concise context.

## Uncertain response handling

If a mutation response is missing a screen ID, record project ID, requested name, prompt, time/session, and returned screenshot/resource. Perform read-only verification if available. Do not retry generation automatically. If a recent screen is omitted from listing, record the connector deviation and wait for human direction.

## Artifact retrieval after acceptance

Preserve the default screenshot, one screenshot per important interaction, HTML export, project/screen IDs, interaction inventory, exact prompt, lineage/fallback record, represented viewport, and known deviations. HTML is design evidence only, never production authority.
