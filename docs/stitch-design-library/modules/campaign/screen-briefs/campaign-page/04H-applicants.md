# CP-ST-03 — Applicants decision queue desktop brief

Priority: P0  
Viewport: 1440×900  
Parent: Accepted CP-ST-01 shell

## Goal and state

Present one SUBMITTED canonical Application requiring a Brand decision. No Collaboration reference exists yet. Help the Brand review creator and Brief context, then accept or decline without implying Collaboration creation.

## Required hierarchy

1. Inherited Campaign shell and readiness context.
2. Applicants workspace selected with authoritative submitted/action-required count.
3. Creator identity, using a safe name/email fallback.
4. Canonical Brief title and relevant Application context.
5. Application status.
6. Accept and Decline with clear hierarchy and busy/error treatment.
7. Resolved Applications progressively disclosed.

## Actions

Primary: `Accept Application` where aggregate state permits.  
Secondary: `Decline`, inspect creator/Brief context, or open an already supplied independent Collaboration reference.

## Prohibited

Prospect recommendations, pipeline stages, commercial invention, Collaboration creation confirmation, inferred creator lineage, and Application-driven Campaign lifecycle change.

## Required output

Return one Applicants screen derived from CP-ST-01 with stable identity, artifacts, lineage and deviations. Do not generate the Collaboration-reference screen in the same call.

