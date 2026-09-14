# Creator Orchestrator → Brand Centre / Instagram Intelligence SA Handoff Protocol V1

`CREATOR_TO_BRAND_CENTRE_SA_HANDOFF_PROTOCOL_V1`

PURPOSE = provide one reusable, low-context-overhead protocol for moving a frozen Instagram-linked Creator Product slice into technical audit/planning and then autonomous execution.

This protocol does not itself authorize any specific implementation.

---

## 1. Actors

```text
PARENT / USER
= final Product authority

CREATOR ORCHESTRATOR
= Product/program orchestration

BRAND CENTRE / INSTAGRAM INTELLIGENCE SA
= Creator Instagram technical architect
+ implementation orchestrator
+ technical acceptance authority

EXTERNAL LOCAL CODEX
= execution runner
```

No third SA by default.

---

## 2. Phase A — understanding / donor-reuse preflight

After Creator Product is frozen and published, Creator Orchestrator should publish a bounded technical handoff containing:

- exact Product register path + commit;
- accepted predecessor implementation SHAs/trees/migrations;
- Product outputs/states/acceptance criteria;
- explicit exclusions;
- ownership boundaries;
- required donor/reuse questions;
- known implementation learning from predecessor Creator slices.

The short relay to Brand Centre SA should communicate only:

```text
Adopt Product authority at <path> / <commit>.
Adopt technical assignment at <path> / <commit>.

Return:
<SLICE>_DONOR_REUSE_PREFLIGHT_AND_FINITE_PLAN_V1

Authorized now:
READ-ONLY DONOR SEMANTICS EXTRACTION
+ CURRENT-STATE / REUSE PREFLIGHT
+ ARCHITECTURE DELTA
+ FINITE EXECUTION PLAN

Implementation is not yet authorized.
```

The SA must explicitly return:

- exact donor/current authority;
- reuse classifications;
- Product/donor conflicts;
- schema/migration impact;
- finite execution packets;
- acceptance gates;
- circuit breakers;
- Product questions requiring Parent resolution.

Do not let technical donor convenience change frozen Creator Product.

This preflight serves as the one-time understanding audit for that slice. A separate repetitive orientation round is unnecessary unless authority changed materially.

---

## 3. Phase B — Parent review

Creator Orchestrator reviews the preflight from the Product/program perspective.

Parent resolves any Product constants or scope changes.

If accepted, publish a complete execution-authorization artifact to GitHub.

Do not paste the full authorization inline unless Parent explicitly requests it.

---

## 4. Phase C — implementation signal

Short relay after accepted execution authority:

```text
Adopt and execute the authority at:
<path>

commit:
<sha>

Proceed autonomously through the accepted packet sequence.
Return to Parent only on a defined circuit breaker / Product ambiguity,
or after final accepted packet with:
<SLICE>_FINAL_ACCEPTANCE_AND_PRODUCT_LEARNING_HANDOFF_V1
```

Brand Centre SA owns packet prompts, Local Codex sequencing, technical review, bounded corrections and technical acceptance.

Parent round-trip is not required between successful packets unless the accepted plan explicitly says otherwise.

---

## 5. Final return

The final technical handoff should provide at minimum:

- result / technical acceptance state;
- backend SHA/tree;
- frontend SHA/tree;
- program/authority SHA/tree;
- migration count;
- packet acceptance states;
- integrated runtime/browser evidence;
- remaining technical debt;
- implementation learning;
- reusable platform seams;
- explicit deferred scope;
- developer handoff / ledger paths.

Creator Orchestrator must review implementation learning before freezing the next Product slice that materially depends on it.

---

## 6. Current precedent

Audience V0 established this operating model successfully.

Content V0 is the current second precedent and is executing under Git-published autonomous P0→P4 authority.

Future Creator Brand / Audience V1 / later Instagram-linked slices should reuse the protocol rather than invent another orchestration topology.
