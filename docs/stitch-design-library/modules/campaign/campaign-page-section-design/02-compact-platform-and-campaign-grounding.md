# Compact platform and Campaign grounding

Creator Shop is a responsive creator-commerce workspace connecting Brand intelligence, Campaign strategy, creator selection, Collaboration execution, and verified outcomes. It should feel operational, calm, explainable, and human rather than like a generic admin or analytics dashboard.

The Brand's Campaign Page mental model is:

1. understand the Campaign;
2. understand performance and what needs attention;
3. work in the relevant operational workspace.

## Page model

- **Campaign Header:** identity, lifecycle, readiness, supplied summary, core facts, actions, and compact Campaign Asset/Brief hierarchy.
- **Campaign Attention Layer:** Campaign Performance, Budget, and Actionables.
- **Operational Workspace:** exactly Discovery, Applicants, and Collaborations.

Reporting is not a workspace. Setup is not a workspace. Campaign Assets and Briefs are configuration/detail surfaces owned from the Header and related flows.

## Truth and state

Use authoritative supplied data only. Never fabricate metrics, AI summaries, recommendations, budget remaining, creator information, Application data, or Collaboration state. Preserve `loading`, `empty`, `unavailable`, and `error` as distinct states. Zero is valid only when supplied as authoritative zero.

## Ownership

Brand Centre owns referenced Asset data. Campaign Asset owns its Briefs; Brief owns Deliverables. Application owns application decisions. Collaboration owns Collaboration lifecycle and execution. Campaign Page may reference and navigate but does not absorb those domains.

## Capability

Lifecycle, readiness, and capability remain separate. Operational workspaces are usable only when backend/read-projection capability permits. Actions are explicit and capability-driven; do not infer them from lifecycle labels.

## Experience

Prefer information hierarchy and progressive disclosure over density. Use specific copy, visible ownership, graceful unavailable states, and responsive continuity. Desktop and mobile express the same product model.
