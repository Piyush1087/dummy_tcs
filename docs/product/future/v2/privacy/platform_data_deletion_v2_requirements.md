# Platform Data Deletion — Future / V2 Requirements

**Status:** `DEFERRED_V2`  
**Scope:** Creator Shop platform-level `Delete my data / Delete my account` capability.  
**Not the same as:** provider-scoped Instagram/Meta data deletion required for the active Instagram integration.

## Purpose

Provide a single, explicit platform-level privacy workflow through which a user can request deletion of Creator Shop-held data beyond one external provider connection.

This requirement is deliberately parked for V2 because it crosses identity, Brand workspace ownership, Campaign, Collaboration, counterpart records, financial/audit retention, Intelligence provenance, provider data and legal/compliance boundaries.

## Product questions that must be resolved before implementation

### 1. Account vs workspace deletion

Distinguish:

- delete one user's personal Creator Shop account/data;
- leave/remove membership from a Brand workspace;
- delete an entire Brand workspace;
- delete only externally acquired/provider data;
- anonymize rather than erase records that must survive for counterpart/legal/audit reasons.

### 2. Active Campaigns

Define behavior when deletion is requested while the Brand owns live/published Campaigns.

Questions:

- are Campaigns paused immediately?
- may a Brand Owner request full workspace deletion while open Campaign obligations remain?
- what minimum Campaign record must remain for creators/applicants and auditability?
- how are public/share links handled?

### 3. Active Collaborations

Define behavior when contractual/financial obligations remain.

Questions:

- can deletion complete before active creator obligations are settled?
- which identity fields may be anonymized immediately versus after settlement?
- which Collaboration communication/evidence records must survive for the counterpart creator?
- how does Creator Shop preserve dispute / payout / tax / audit evidence without retaining unnecessary personal data?

### 4. Counterpart creator reporting and history

A Brand deletion request must not silently destroy records the creator legitimately needs, for example:

- completed Collaboration history;
- agreed commercials;
- payout status;
- content approvals / obligations;
- transaction evidence.

Define which counterpart-visible records survive, which Brand identifiers are anonymized, and which records are removed.

### 5. Financial and statutory retention

Classify data that cannot be immediately erased because Creator Shop may need to retain it for:

- invoices;
- payment/escrow/payout transaction records;
- refunds;
- tax records;
- fraud/security evidence;
- immutable audit records;
- statutory retention periods.

Retention must be purpose-limited and documented rather than treated as a blanket exception.

### 6. Intelligence and AI-derived data

Define data lineage classes across:

- raw user/provider evidence;
- direct derived/cached values;
- Creator Shop transformed Intelligence;
- campaign/collaboration snapshots;
- model prompts/outputs where applicable.

The deletion engine must know whether each artifact is deleted, sanitized/anonymized, retained for a bounded purpose, or retained as non-personal transformed intelligence.

### 7. Connected providers

Platform deletion must coordinate with provider-scoped deletion/revocation flows including Meta/Instagram and future TikTok, YouTube, Shopify, GA4, Gmail and other integrations.

It must not assume that deleting the Creator Shop account automatically satisfies each external provider's deletion callback or revocation obligations.

### 8. Deletion fences and asynchronous workers

Before destructive deletion begins:

- prevent new provider ingestion;
- stop/reject queued jobs that would repopulate deleted data;
- invalidate stale connection generations/tokens;
- make deletion idempotent;
- prevent late asynchronous workers from recreating deleted records.

### 9. User confirmation and recovery window

Decide whether platform deletion is:

- immediately irreversible; or
- scheduled with a short recovery/cancellation window before irreversible erasure.

High-risk deletion should require strong re-authentication and explicit scope confirmation.

### 10. Deletion status and receipt

Provide a durable request lifecycle such as:

```text
REQUESTED
IDENTITY_CONFIRMED
PENDING_OBLIGATION_RESOLUTION
DELETING
PARTIALLY_RETAINED_FOR_LEGAL_PURPOSE
COMPLETED
FAILED_RETRYABLE
```

User should receive a request/confirmation reference and a truthful explanation of any lawfully retained categories.

## Architecture expectation

Future implementation should use a centralized privacy/data-lifecycle orchestration service with domain-specific deletion/anonymization adapters. Individual modules must not each invent unrelated `delete everything` logic.

Suggested high-level flow:

```text
Platform deletion request
        ↓
identity + authority validation
        ↓
workspace / obligation assessment
        ↓
deletion & ingestion fence
        ↓
provider-specific revoke/delete
        ↓
domain-specific delete / anonymize / retain-by-policy
        ↓
verification sweep
        ↓
receipt / status
```

## Relationship to MVP Instagram deletion

The Instagram Settings connection requires provider-scoped deletion capability for Meta-origin data in MVP. That narrower requirement must not wait for this V2 platform feature.

The V2 platform deletion orchestrator should later reuse the provider-scoped Instagram deletion service rather than reimplement it.
