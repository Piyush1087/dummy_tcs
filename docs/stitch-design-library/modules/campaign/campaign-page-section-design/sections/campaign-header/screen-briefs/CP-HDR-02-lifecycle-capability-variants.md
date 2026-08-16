# CP-HDR-02 - Lifecycle/capability variants

## Purpose

Create one component/state reference derived from the accepted new-project Header grammar. Do not design five separate Campaign pages.

## Required variants

| Lifecycle | Action when supplied |
|---|---|
| Published | `Go Live` |
| Live | `Pause Campaign` |
| Paused | `Resume Campaign` |
| Completed | `Archive` when supported |
| Archived | No lifecycle action unless restoration capability is explicitly supplied |

Also demonstrate that capability absence removes the action rather than substituting a generic disabled toggle. Keep readiness visually independent and include one bounded example where Live remains Live after readiness loss while operational capability is unavailable.

## Constraints

- Preserve accepted Header action hierarchy, badges, typography, and density.
- Use explicit Buttons, never a Campaign on/off Switch.
- Do not invent confirmation, restore, error, success, or busy behavior beyond supplied capability/state data.
- This is visual component-state authority, not five different page compositions.

## Required output during generation

Return only screen name, screen ID, session ID when returned, screenshot resource, and concise compliance/deviation report. Do not retrieve HTML.
