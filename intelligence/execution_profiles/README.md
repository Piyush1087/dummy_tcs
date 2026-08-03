# Intelligence Execution Profiles

Execution Profiles define **how already-defined Intelligence processors are orchestrated for a use case**.

They define execution order, parallelism, gates/checkpoints, prerequisites, active processor scopes, partial execution behaviour and failure handling. They do **not** define processor reasoning, evidence semantics, model instructions, or the events/schedules that trigger execution.

## Identity Onboarding

Machine-readable profile: `identity_onboarding.yaml`

### Journey

```text
Website submitted
       |
       +---------------- parallel ----------------+
       |                                          |
       v                                          v
Gatekeeper                                Website Evidence acquisition
industry_classification                  Zyte -> Cheerio -> page discovery
       |
       v
SUPPORTED?
 |- NO / UNRESOLVED -> stop onboarding
 `- YES
       |
       v
wait for required Identity evidence
       |
       v
identity_core
       |
       +-- AI outputs
       `-- country -> deterministic reporting_currency
       |
       v
SURFACE IDENTITY REVIEW
       |
       | user may make provisional corrections to
       | checkpoint-controlled Identity Objects
       v
DOMAIN VERIFICATION
       |
       |- verification fails/abandoned -> discard provisional manual edits
       `- verification succeeds -> commit corrections + lock checkpoint objects
       |
       v
DEPENDENT IDENTITY
       +-----------------------------+
       |                             |
       v                             v
industry_niche                market_geography
confirmed industry/           website + optional
sub-industry                  Similarweb/Instagram
       +-------------+---------------+
                     |
                     v
             Identity complete
```

### Important boundaries

- Trigger rules are separate from the Execution Profile. The compiler runs the profile when asked.
- Evidence Acquisition may run in parallel with AI execution but is a separate architectural responsibility.
- User edits made before domain verification are provisional; they become canonical only after successful verification.
- Optional Similarweb/Instagram evidence must not block Identity completion.
- Reuse/rate-limit/verified-brand safeguards happen before a fresh scan is dispatched and belong to the onboarding/scan-admission layer, not processor reasoning.

### Scan-admission safeguards used by onboarding

The current application journey applies these rules before dispatching a fresh Identity onboarding scan:

1. If the brand/domain already exists as a verified brand, do not start onboarding; return the existing-brand/contact-admin journey.
2. If the same website has been scanned within the last 7 days, reuse the previous scan result rather than spending AI/acquisition resources on a new scan.
3. Abuse/rate safeguard: when the configured threshold is reached (currently 5+ websites added by a user or the same website added 5+ times), require domain verification before allowing further onboarding/scan execution.

These are application/scan-admission policies. They should call or withhold the Execution Profile; they should not be embedded into Intelligence processors.
