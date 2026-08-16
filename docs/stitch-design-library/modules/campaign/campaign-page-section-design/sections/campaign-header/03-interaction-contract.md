# Campaign Header interaction contract

## Default base

All interactions begin from accepted `CP-HDR-01` default. Only one open state is rendered at a time. Returning/closing restores the exact accepted default composition.

## Interaction 1: Asset/Brief disclosure

**Trigger:** the full-width Asset/Brief summary row or its explicit expand control.
**Result:** inline expanded hierarchy beneath the Header facts/actions.
**Close:** collapse control returns to default.

Requirements:

- preserve exact Campaign Asset -> Brief nesting;
- show contextual entity type and `Linked from Brand Centre`;
- keep Brand Centre data read-only;
- place `Link Campaign Asset` at Campaign level;
- provide `View Product setup` as navigation to the owning setup surface;
- use status Badges, not interactive Chips;
- keep keyboard and focus order logical.

## Interaction 2: Campaign Details

**Trigger:** `View Campaign`.
**Desktop result:** right-side Drawer.
**Mobile result:** full-screen Sheet.
**Close:** explicit Close returns focus to `View Campaign`.

The drawer/sheet presents supplied read-oriented Campaign Strategy, Creator Strategy, and Commercial Strategy. It does not duplicate editable wizard fields, produce new calculations, or add workspace navigation. Drawer content may scroll independently while its header/close control remains reachable.

## Interaction 3: Share

**Trigger:** `Share`, only when supported.
**Result:** Aurora Dialog with supplied sharing behavior.
**Close:** supported dismiss/cancel returns focus to `Share`.

No public link, permission selector, recipient search, delivery channel, or success state may be invented. If a complete sharing behavior is not supplied, render only the explicitly authorized reference state or stop and report the missing decision.

## Lifecycle action

The action label is selected from [the capability matrix](02-state-and-capability-matrix.md) only when matching capability is supplied. It is a Button, not a Switch. Do not place lifecycle action interaction into `CP-HDR-01` if it would exceed the three shallow interactions; `CP-HDR-02` is the reference for variants.

## Interaction acceptance

- No overlay stacking.
- No drift in accepted identity, facts, action order, typography, or Header density.
- Escape/outside-click behavior follows the supplied Aurora overlay contract and must not discard an in-progress supported task silently.
- Background content is not operable while modal content is active.
- Close/dismiss controls and focus return are explicit.
- If the connector cannot edit locally, record lineage fallback rather than regenerating the base blindly.
