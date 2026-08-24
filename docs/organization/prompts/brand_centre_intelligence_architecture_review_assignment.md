# Intelligence Engine AI Worker — Brand Centre Architecture Review Assignment

## Authority

Repository: `Piyush1087/dummy_tcs`

Read first:

1. `docs/organization/charters/intelligence_engine_ai_worker_charter.md`
2. `intelligence/master_intelligence_schema.md`
3. `intelligence/product_authority/brand_centre_v0_product_authority.md`
4. `intelligence/product_authority/brand_centre_consumer_to_intelligence_requirement_map_v0.md`
5. `intelligence/product_authority/brand_centre_intelligence_architecture_reconciliation_v1.md`
6. `intelligence/product_authority/brand_onboarding_v1_product_authority.md`
7. existing Brand Intelligence engine/runtime artifacts as needed.

## Task

Review the proposed Brand Centre Intelligence Architecture reconciliation against the current Creator Shop Intelligence platform.

Do **not** implement processors, rewrite the master schema, or modify runtime architecture yet.

Return one of:

```text
PASS
PASS_WITH_CORRECTIONS
ARCHITECTURE_CONFLICT
```

## Required review

Assess whether the following boundaries are coherent and reusable:

```text
Brand Intelligence
Product Intelligence
Instagram Intelligence
Performance Intelligence
Commercial Intelligence
Competitor Intelligence
        ↓
Cross-domain Observation synthesis
        ↓
Creator Strategy Intelligence
```

For the Brand Centre journey, explicitly keep these out of implementation scope unless a genuine dependency requires otherwise:

```text
Match Intelligence
Campaign Intelligence
full Creator Intelligence implementation
```

Campaign Intelligence remains reserved for analysis/insights/reporting/intervention around an actual live Campaign. Do not move portfolio planning or pre-campaign recommendation ownership back into Campaign Intelligence without identifying a genuine architecture conflict.

## Questions to answer

1. Which existing master/engine/runtime architecture can remain unchanged?
2. Which current assumptions are stale because the Product journey is now:

```text
Gatekeeper
→ Fast Brand Analysis
→ Brand Preview
→ Verify / claim
→ Instagram connection decision
→ Home
→ progressively maturing Brand Centre
```

3. Is `Creator Strategy Intelligence` the correct durable boundary/name for quarterly creator portfolio planning + Campaign Recommendations?
4. Are the proposed ownership boundaries between Product / Commercial / Instagram / Performance / Competitor / Creator Strategy correct?
5. Should Observation remain a cross-domain synthesis object rather than a permanent top-level engine?
6. What minimal common provenance / authority / readiness / freshness metadata should all durable Intelligence domains share?
7. Which domain contracts should be designed first, and in what dependency order?
8. Which questions genuinely require Product, Systems Architect, Data Extraction, backend, or Meta-capability decisions before the IE worker can proceed?
9. Identify any duplication, circular ownership, or hidden coupling in the proposed architecture.
10. Identify any existing artifact that would be contradicted and should therefore be amended/deprecated rather than silently ignored.

## Important Product decisions to preserve

- Observations are not a Brand Centre workspace.
- Overview surfaces the most important Observations and immediate decisions.
- Recommendations is a dedicated workspace and must scale from small Brand to enterprise quarterly portfolios.
- Quarterly planning is the strategic horizon; recommendation surfacing frequency may scale with budget/operating velocity.
- Competitor Intelligence is optional enrichment for the base recommendation model; unresolved Meta competitor-social acquisition is not a blocker for website-first base contracts.
- Do not introduce third-party influencer-platform APIs as a planned dependency.
- Budget is not required during onboarding.
- Brand-confirmed non-price truth is not silently overwritten; Offering price is the accepted controlled freshness exception.
- Canonical Brand identity anchors, including social handles, are support-controlled after confirmation.
- Creator Strategy should use a few strong GO/NO-GO rules before ranking rather than a large warning matrix.
- `NO NEW CAMPAIGN` is a valid Recommendation output.

## Output format

Provide:

1. **Verdict**
2. **Architecture retained unchanged**
3. **Corrections required**
4. **Confirmed engine ownership map**
5. **Shared metadata / runtime implications**
6. **Open dependencies / Product questions**
7. **Recommended implementation-design sequence**
8. **Exact files that should later be amended, created, deprecated or left unchanged**

Stop after the review. Do not implement without Product / Systems Architect acceptance of the correction set.
