# Canonical Reconciliation Gate B C06 PostgreSQL Circuit Breaker — Parent Acceptance V1

~~~text
PARENT_REVIEW_RESULT =
CIRCUIT_BREAKER_ACCEPTED

CIRCUIT_BREAKER =
POSTGRESQL_PROJECTION_FAILURE

ROOT_CAUSE =
GATE_A_BASELINE_PRISMA_SCHEMA_DRIFT

C06_IMPLEMENTATION_REJECTED =
NO

PRODUCT_CHANGE =
NO

ARCHITECTURE_DECISION_CHANGE =
NO

MIGRATION_CHANGE =
NO

FRONTEND_CHANGE_REQUIRED =
NO

DEPLOYMENT_AUTHORIZED =
NO
~~~

## Reviewed failure

Gate B C06 semantic convergence produced the exact authorized local candidate scope:

~~~text
BACKEND_LOCAL_UNCOMMITTED_PATHS =
24

FRONTEND_LOCAL_UNCOMMITTED_PATHS =
15

BACKEND_FOCUSED_TESTS =
63 / 63 PASS

FRONTEND_FOCUSED_TESTS =
37 / 37 PASS

MIGRATION_COUNT =
106

MIGRATION_SUBTREE =
3894d6d2009fdbdf6bce94708d955c24cf5804ce

PRISMA_SCHEMA_BLOB =
da08f8e8518a67b05b58396cf9069481bde76425

CAMPAIGN_DETAIL_WORKSPACE_BLOB =
62cd7684410144de816363e0f943e244da2225be
~~~

No implementation commit, push, authority evidence, Campaign Objective work, deployment, provider call, financial write, or paused-lane work occurred.

## Accepted root cause

The accepted Gate A backend schema defines the canonical relation correctly:

~~~text
CollaborationDeliverableExecution.sourceBriefDeliverableId
maps to
collaboration_deliverable_executions.source_brief_deliverable_id
~~~

The same model also retains an obsolete legacy relation:

~~~text
CollaborationDeliverableExecution.uceBriefDeliverable
CollaborationDeliverableExecution.uceBriefDeliverableId
~~~

Its inverse field remains:

~~~text
UceBriefDeliverable.collaborationExecutions
~~~

The physical database correctly has source_brief_deliverable_id and does not have uceBriefDeliverableId.

Prisma therefore generates a query for a column that no longer exists. C06 exposed this latent Gate A/C04 schema drift through its PostgreSQL projection proof.

## Authorized correction interpretation

The smallest correction is one backend schema file:

~~~text
prisma/schema.prisma
~~~

Remove only:

1. UceBriefDeliverable.collaborationExecutions
2. CollaborationDeliverableExecution.uceBriefDeliverable
3. CollaborationDeliverableExecution.uceBriefDeliverableId

Preserve:

- CollaborationDeliverableExecution.sourceBriefDeliverableId;
- its mapping to source_brief_deliverable_id;
- CollaborationDeliverableExecution.sourceBriefDeliverable;
- the CanonicalBriefDeliverable relation;
- every migration;
- all other Prisma models and relations.

~~~text
EXPECTED_MIGRATION_COUNT =
106

NEW_MIGRATION =
NO

MIGRATION_OR_DATABASE_REWRITE =
NO

PRISMA_SCHEMA_CORRECTION =
DELETE STALE LEGACY RELATION ONLY
~~~

## C06 candidate continuity

The uncommitted Gate B candidate states are not rejected.

Before starting the correction, the runner must record the exact backend/frontend candidate path manifests and binary patch hashes. It must not clean, reset, checkout, overwrite, rebase, commit, or otherwise mutate those candidate worktrees.

The correction must run in a new isolated worktree or fresh clone.

After correction publication, the candidate manifests and patch hashes must be reverified unchanged.

## Next authorized boundary

~~~text
NEXT_BOUNDARY =
ISOLATED GATE A BACKEND PRISMA LEGACY_RELATION CORRECTION

C06_COMMIT_OR_PUBLICATION =
NOT AUTHORIZED IN CORRECTION LANE

GATE_B_RESUMPTION =
REQUIRES PARENT ACCEPTANCE OF CORRECTED BACKEND BASE

CAMPAIGN_OBJECTIVE_CONVERGENCE =
NOT AUTHORIZED

FINAL_CANONICAL_PUBLICATION =
NOT AUTHORIZED
~~~
