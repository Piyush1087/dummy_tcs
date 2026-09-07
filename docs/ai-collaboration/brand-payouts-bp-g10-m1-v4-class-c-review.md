# Brand Payouts — BP-G10 M1 V4 approval-grade reconciliation

## Result

`CLASS_C_BLOCKED`. P4 Base remains accepted and unchanged at
`5dc9eef4923ae383b94b36cbf9bbb632b1b84cf1`, tree
`6c01d65e5a32eecfcd7e42715923ea8478d071fb`, with 84 migrations. V1–V3 remain
not approved and unchanged. No executable V4 migration or Prisma delta was
produced, because doing so would misrepresent a required authority invariant.

## Exact contradiction

R8 requires every normal-path obligation to prove the exact protected reserve
lineage from C04 entitlement authority to reserve instruction/approval/lock.
The frozen C04 `collaboration_financial_authority_instructions` row contains
the Collaboration and agreement plus `source_financial_ref`, which the normal
settlement writer sets to `collaboration_financial_resolutions.id`. It contains
no reserve-instruction, approval, lock, ledger, or confirmation foreign key.

Reserve and lock references are separate mutable columns on
`collaboration_commercial_agreements`; the funding request reference even has
two runtime encodings (an instruction UUID and `escrow-reserve:<commandId>`).
C04 confirmation stores only confirmation identity/body digest relationally;
the lock appears in a mutable agreement projection and JSON event payload.
Neither is an immutable relational entitlement-to-reserve authority.

Consequently an additive M1 column could only be populated by the caller or by
choosing among same-Collaboration/version rows. Both are forbidden. A nullable
link would fail closed forever or permit partial canonical masquerading; a
heuristic latest/current join would fabricate the exact historical meaning R8
requires. This also blocks R7 confirmation coupling, R12 protected-funding
claim, R15 exactly-once settlement lineage, and final R16 settlement receipt
proof.

## Complete reconciliation

The accompanying crosswalk records R1–R18. R1, R3–R6, R9–R11, R13–R14 and R17
have implementable designs after the upstream key exists. R2 and R18 cannot be
finalized into a complete one-migration object set while R8 is unresolved.
R7, R12, R15 and the settlement branch of R16 depend directly on R8. No other
independent Class C contradiction was found.

The state matrices, migration truth table, nullable-CHECK/trigger-path table,
lineage/concurrency map, and deployment/forward-recovery plan make the stopped
state explicit. The SQL and Prisma artifacts are non-executable Class C
sentinels, not proposals.

## Required upstream action

C04 authority must publish and accept an immutable relational binding from the
normal Creator-entitlement instruction to the exact reserve instruction and
authoritative completion/lock confirmation. Once that source is frozen, M1 V4
must be regenerated against the resulting new base and undergo the complete
post-approval PostgreSQL plan. No backend source, migration, database, P4A, or
provider action was touched here.
