id: brand_preview_frontend_state_contract
version: "1.0-frozen"
status: "FROZEN — PRODUCT APPROVED"
scope: gatekeeper_industry_confirmation_to_brand_preview_verification_start
owner: frontend_ai_worker

authority:
  frontend_charter: docs/organization/charters/frontend_ai_worker_charter.md
  product_authority: intelligence/product_authority/brand_onboarding_v1_product_authority.md
  frozen_copy_contract: frontend/brand-onboarding/brand_preview_ux_copy_contract.md
  frozen_minimum_output_contract: intelligence/engines/brand_intelligence/brand_preview_minimum_output_contract.yaml
  frozen_fast_evidence_design: data_extraction/brand_preview_fast_evidence_acquisition_design.md
  gatekeeper_state_contract: frontend/gatekeeper/gatekeeper_frontend_state_contract.yaml
  gatekeeper_screen_contract: frontend/gatekeeper/gatekeeper_screen_interaction_contract.md

purpose: >-
  Define the smallest canonical frontend state model for the continuous post-Gatekeeper experience from confirmed supported Industry through Fast Brand Analysis, Brand Preview, and the start of Brand verification. Frontend state must consume authoritative readiness/runtime semantics without inventing Intelligence, acquisition, admission, or persistence policy.

governing_principles:
  - Gatekeeper, Industry confirmation and Fast Brand Analysis should feel like one continuous analysis journey even though they remain separate internal authorities.
  - Frontend must not expose Gatekeeper, Surface Scan, provider, processor, confidence score, crawl, model, or acquisition-mode terminology in this experience.
  - Progress phases may render only when backed by normalized runtime/readiness activity; otherwise use the frozen generic analysis state.
  - Elapsed-time thresholds are UX presentation benchmarks, not backend SLAs and not proof of runtime failure.
  - PREVIEW_READY is authoritative from the minimum output/readiness contract; frontend must not manufacture readiness from elapsed time or partial payload inspection alone.
  - NORMAL and PARTIAL are completeness variants of one PREVIEW_READY state, not different user journeys.
  - Missing optional logo or descriptor and reduced collection cardinality are payload-density attributes, not separate top-level UI states.
  - A smaller truthful Preview is valid and must not be padded with placeholders, empty cards, duplicated items, or generic filler.
  - Brand Preview is non-editable.
  - Brand Preview is the proper name of the Creator Shop experience and retains title capitalization; lowercase brand applies to ordinary customer-brand references.
  - Frozen customer-facing copy must be rendered verbatim where the copy contract defines an exact string.

canonical_ui_states:
  - FAST_ANALYSIS_ENTERING
  - FAST_ANALYSIS_ACTIVE
  - FAST_ANALYSIS_SLOW
  - PREVIEW_READY
  - ANALYSIS_RECOVERABLE_FAILURE
  - PREVIEW_NOT_READY
  - STARTING_BRAND_VERIFICATION

state_definitions:
  FAST_ANALYSIS_ENTERING:
    purpose: Bridge an authoritative supported-Industry confirmation into the continuous Fast Brand Analysis shell without presenting another unrelated scan start.
    entry_conditions:
      - gatekeeper_outcome_ADMITTED
      - confirmed_supported_industry
      - downstream_analysis_start_or_resume_accepted
    entry_reasons:
      - same_supported_industry_confirmed
      - supported_industry_override_confirmed
      - returning_from_industry_confirmation
      - resumed_same_analysis_run
    presentation_rule: >-
      May be transient. If analysis activity is already available, transition immediately to FAST_ANALYSIS_ACTIVE without showing a separate intermediate screen.
    on_analysis_activity: FAST_ANALYSIS_ACTIVE
    on_preview_ready: PREVIEW_READY
    on_recoverable_failure: ANALYSIS_RECOVERABLE_FAILURE
    on_insufficient_evidence_terminal_for_attempt: PREVIEW_NOT_READY

  FAST_ANALYSIS_ACTIVE:
    purpose: Normal continuous analysis presentation while the minimum Preview contract is being assembled.
    typical_ux_window: "0–~8 seconds benchmark only"
    shell: FAST_ANALYSIS
    progress_mode:
      preferred: NORMALIZED_PHASE
      fallback: GENERIC
    normalized_phases:
      - UNDERSTANDING_BRAND
      - LEARNING_AUDIENCE
      - FINDING_CREATOR_OPPORTUNITIES
      - PREPARING_PREVIEW
    frozen_phase_copy:
      UNDERSTANDING_BRAND: "Understanding your brand"
      LEARNING_AUDIENCE: "Learning who you need to reach"
      FINDING_CREATOR_OPPORTUNITIES: "Finding where creators can help"
      PREPARING_PREVIEW: "Preparing your Brand Preview"
    generic_copy: "Building your Brand Preview…"
    rules:
      - Do not rotate phases on a timer.
      - Do not infer phase from elapsed time.
      - Do not expose provider/source mechanics.
      - Do not wait for Product, Competitor, Instagram, Performance, Campaign or full Brand DNA work once PREVIEW_READY is authoritative.
    on_slow_threshold_with_analysis_still_active: FAST_ANALYSIS_SLOW
    on_preview_ready: PREVIEW_READY
    on_recoverable_failure: ANALYSIS_RECOVERABLE_FAILURE
    on_insufficient_evidence_terminal_for_attempt: PREVIEW_NOT_READY

  FAST_ANALYSIS_SLOW:
    purpose: Preserve the same analysis shell while adding the frozen slow-path reassurance after the normal fast path has materially exceeded expectations.
    typical_ux_entry: "~8 seconds onward benchmark only"
    shell: FAST_ANALYSIS
    semantic_difference_from_active: reassurance_only
    progress_rule: >-
      Continue to show normalized truthful progress when available; otherwise retain the generic analysis state. Slow status must not simulate additional progress.
    escalation_guidance: >-
      Around ~20–30 seconds, if the runtime still cannot establish PREVIEW_READY, prefer an authoritative recoverable-failure or insufficient-evidence outcome rather than indefinite analysis. Elapsed time alone does not choose which outcome.
    on_preview_ready: PREVIEW_READY
    on_recoverable_failure: ANALYSIS_RECOVERABLE_FAILURE
    on_insufficient_evidence_terminal_for_attempt: PREVIEW_NOT_READY

  PREVIEW_READY:
    purpose: Render the non-editable five-section Brand Preview as soon as the frozen readiness contract is satisfied.
    shell: BRAND_PREVIEW
    authority_source: brand_preview_minimum_output_contract.readiness_contract.PREVIEW_READY
    display_eligible: true
    completeness_variants:
      NORMAL:
        meaning: Normal target density is available.
        indicative_density:
          brand_descriptor_present: true
          audience_groups: "2–3"
          creator_opportunities: "2–3"
          creator_archetypes: "2–4"
      PARTIAL:
        meaning: Minimum credible Preview exists but one or more optional/density targets are absent.
        valid_examples:
          - brand_logo_missing
          - brand_descriptor_missing
          - exactly_one_audience_group
          - exactly_one_creator_opportunity
          - exactly_one_creator_archetype
        minimum_valid_density:
          audience_groups: 1
          creator_opportunities: 1
          creator_archetypes: 1
    hard_display_floor:
      identity:
        - brand_name
        - website_url
        - display_domain
        - confirmed_supported_industry
      understanding:
        - grounded_brand_understanding_narrative
      audience_groups_minimum: 1
      creator_opportunities_minimum: 1
      creator_archetypes_minimum: 1
      generated_content_within_frozen_copy_limits: true
      internal_grounding_present_for_required_generated_content: true
    optional_fields:
      - brand_logo
      - brand_descriptor
    collection_rendering_rules:
      - Render only returned credible items.
      - Do not reserve empty slots for absent items.
      - Do not display placeholder cards to preserve grid symmetry.
      - Do not label PARTIAL as failure when the Preview remains display-eligible.
      - Use frozen block-level partial copy only when the runtime/output contract marks a specific block as meaningfully limited and the copy contract permits it.
    on_primary_action: STARTING_BRAND_VERIFICATION

  ANALYSIS_RECOVERABLE_FAILURE:
    purpose: Present an execution/acquisition failure that prevented PREVIEW_READY but may succeed on retry.
    shell: FAST_ANALYSIS_RECOVERY
    authority_source: brand_preview_minimum_output_contract.PREVIEW_FAILED_RECOVERABLE
    display_preview: false
    primary_action: RETRY_ANALYSIS
    rules:
      - Use frozen recoverable-failure copy verbatim.
      - Preserve brand/domain context where useful.
      - Retry must invoke canonical runtime capability; frontend must not change acquisition/provider policy.
      - Do not populate a synthetic Preview.
    on_retry_accepted: FAST_ANALYSIS_ENTERING
    on_preview_ready: PREVIEW_READY

  PREVIEW_NOT_READY:
    purpose: Truthfully stop the current Preview attempt when mandatory semantic evidence is insufficient for a credible Preview.
    shell: FAST_ANALYSIS_RECOVERY
    authority_source: brand_preview_minimum_output_contract.PREVIEW_NOT_READY
    display_preview: false
    examples:
      - unreliable_brand_identity_recognition
      - ungrounded_brand_understanding_narrative
      - zero_credible_audience_groups
      - zero_credible_creator_opportunities
      - zero_credible_creator_archetypes
      - exhausted_authorized_evidence_paths_for_current_attempt
    primary_action: RETRY_WHEN_CANONICALLY_AVAILABLE
    rules:
      - Use frozen insufficient-evidence copy verbatim.
      - Do not downgrade to a hollow Preview.
      - Do not expose internal Evidence coverage, confidence levels, providers or crawl diagnostics.
      - Frontend must not reinterpret Gatekeeper serviceability at this state.
    on_retry_accepted: FAST_ANALYSIS_ENTERING

  STARTING_BRAND_VERIFICATION:
    purpose: Transition from Brand Preview into the canonical verify-and-claim boundary.
    shell: BRAND_PREVIEW
    source_action_copy: "Verify & claim this brand"
    requirements:
      - PREVIEW_READY
      - user_explicit_primary_action
    rules:
      - Brand Preview remains non-editable while transition begins.
      - Prevent duplicate verification starts.
      - Preserve the Preview until navigation/transition acceptance where practical; do not replace it with an invented success state.
      - Verification implementation and downstream account-creation states belong to the next verification contract.
    on_verification_flow_accepted: OUT_OF_SCOPE_BRAND_VERIFICATION
    on_transition_failure: PREVIEW_READY

preview_payload_view_model:
  identity:
    required:
      - brand_name
      - display_domain
      - confirmed_industry
    optional:
      - brand_logo
      - brand_descriptor
  understanding:
    required:
      - narrative
  audiences:
    minimum: 1
    maximum: 3
  opportunities:
    minimum: 1
    maximum: 3
  creator_starting_point:
    minimum: 1
    maximum: 4
  forbidden_ui_projection:
    - confidence_percentage
    - raw_evidence_refs
    - internal_reasoning
    - provider_names
    - acquisition_modes
    - product_catalogue
    - competitor_list
    - instagram_intelligence
    - performance_scores
    - campaign_configuration

analysis_timing_presentation:
  normal:
    benchmark: "0–~8 seconds"
    state: FAST_ANALYSIS_ACTIVE
  slow:
    benchmark: "~8 seconds onward"
    state: FAST_ANALYSIS_SLOW
    note: Show slow-path reassurance only here.
  heavily_escalated:
    benchmark: "~20–30 seconds"
    rule: >-
      Runtime should prefer resolving to authoritative PREVIEW_READY, PREVIEW_FAILED_RECOVERABLE or PREVIEW_NOT_READY rather than leaving the frontend indefinitely active. Frontend timer must not manufacture failure or insufficiency.

gatekeeper_handoff:
  previous_state_authority: frontend/gatekeeper/gatekeeper_frontend_state_contract.yaml
  accepted_gatekeeper_paths:
    - same_supported_industry_confirmed
    - different_supported_industry_confirmed
  rejected_path:
    unsupported_industry_confirmed: remain_in_gatekeeper_UNSUPPORTED
  continuity_rule: >-
    The prior Gatekeeper STARTING_SURFACE_SCAN / Surface execution boundary may remain an internal runtime handoff, but customer-facing post-confirmation presentation is the continuous Fast Brand Analysis experience defined here. Do not present a second independent scan-start ceremony.

accessibility_announcements:
  strategy: polite_live_region_for_non_urgent_state_changes
  announce_once:
    FAST_ANALYSIS_ACTIVE: current_truthful_phase_or_generic_analysis_status
    FAST_ANALYSIS_SLOW: frozen_slow_state_headline_or_status
    PREVIEW_READY: "Your Brand Preview is ready."
    ANALYSIS_RECOVERABLE_FAILURE: frozen_failure_headline
    PREVIEW_NOT_READY: frozen_insufficient_evidence_headline
  rules:
    - Do not announce every animation frame or cosmetic loading change.
    - Phase announcements occur only on actual normalized phase change.
    - Failure and non-ready states must receive focus or programmatic announcement appropriate to the rendered recovery region.
    - PREVIEW_READY should move focus to the Preview page heading only when navigation/screen replacement occurs; do not steal focus during in-place background updates.

responsive_invariants:
  - Desktop and 390px mobile share the same canonical states and transitions.
  - Mobile may stack/reflow content but must not alter readiness, action permissions or collection minimums.
  - Dynamic content must never be truncated mid-sentence.
  - Generate/render within frozen copy limits rather than maintaining independent mobile summaries.
  - Reduced-density PREVIEW_READY must collapse naturally without empty visual placeholders.
  - The canonical v1 verification action is the in-flow transition after all five Preview sections on desktop and mobile.
  - A mobile bottom-sticky equivalent is not canonical; Stitch may explore it only as an accessible equivalent of the same action, subject to Product acceptance, without obscuring Preview content or introducing a second action meaning.

explicit_exclusions:
  - edit_actions
  - product_catalogue
  - competitor_review
  - budget
  - instagram_connection
  - pricing
  - campaign_configuration
  - confidence_percentages
  - provider_or_source_mechanics
  - Stitch_execution
  - production_frontend_code
  - verification_flow_design_beyond_transition_start

product_review_register:
  proposed_frontend_decisions:
    - Seven canonical UI states are sufficient; optional-field and collection-density variation are attributes of PREVIEW_READY rather than additional states.
    - FAST_ANALYSIS_ACTIVE and FAST_ANALYSIS_SLOW share one visual shell; slow is a reassurance state, not a second scan.
    - ANALYSIS_RECOVERABLE_FAILURE and PREVIEW_NOT_READY share one recovery shell but remain distinct semantic states because retry/exhaustion meaning differs.
    - PREVIEW_READY NORMAL and PARTIAL share one Preview screen composition with fluid item counts and no reserved empty slots.
    - Brand verification begins from the Preview CTA and is out of scope after transition acceptance.
    - The canonical mobile verification endpoint is the in-flow CTA after the five sections; bottom-sticky treatment may only be explored later by Stitch as the same action and remains subject to Product acceptance.
  unresolved_product_questions: []
