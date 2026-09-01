# Chat Engine + Brand Home V1 — Product Authority Register

**Status:** FROZEN PRODUCT AUTHORITY  
**Date:** 2026-09-01  
**Scope:** Brand-side Chat Engine + Brand Home V1 Product semantics before cross-system contract preflight  
**Parent input:** `CHAT_HOME_SYSTEMS_UNDERSTANDING_AUDIT_V1` / accepted Phase A systems understanding audit

---

## 1. CH-01 — Brand Home purpose

Brand Home is a **prioritized decision surface**.

Its primary Product question is:

> What needs my attention, what has Creator Shop learned, and what should I do next?

Home is not another Campaign dashboard, Collaboration dashboard, Brand Centre copy, Settings checklist, generic analytics dashboard, or feed of every recent event.

Initial conceptual priority hierarchy:

1. **Needs Attention** — blocked, failed, action required, deadline/SLA/time-sensitive risk, or material setup/capability problem preventing useful work.
2. **Creator Shop Has Learned** — materially new Intelligence, materially changed understanding, or stale/partial state where the limitation itself matters.
3. **Opportunities / Next Actions** — useful recommendations, clear next steps, and cross-module opportunities grounded in canonical state and available Intelligence.
4. **Current Momentum** — concise meaningful progress across Campaign, Collaboration, and related work; not routine lists.
5. **Ask Creator Shop** — conversational exploration, explanation, comparison, and cross-module questions.

Exact card count, item count, layout density, and visual composition are frontend/UX decisions.

Routine detailed state remains in destination modules.

---

## 2. CH-02 — Chat placement

Chat is a **workspace-level capability**.

Home is the **primary V1 arrival / expanded Chat experience**.

For the first implementation slice, Home-hosted Chat is sufficient. Permanent architecture must support later workspace-global access without introducing a second Chat Engine.

The same Chat/orchestration platform should later be invokable from supported workspaces such as Campaign, Collaboration, Brand Centre, Product/Offering, and other modules.

Route and selected-entity context may inform Chat. They do not become canonical state.

Do not create module-specific assistant engines.

---

## 3. CH-03 — Brand-side V1 capability boundary

### READ

V1 may read, subject to backend authority and actual availability:

- canonical Brand state;
- canonical Offering/Product state;
- Brand Intelligence;
- Product Intelligence;
- Campaign list/read;
- Collaboration list/read;
- relevant Settings/setup state;
- relevant provider/capability readiness.

### REASON / EXPLAIN

V1 may:

- summarize canonical state;
- summarize existing Intelligence;
- compare existing information;
- explain cross-module relationships;
- answer grounded follow-ups;
- reason across available canonical reads.

### RECOMMEND

V1 may produce bounded recommendations from:

```text
canonical state
+
existing Intelligence
+
capability/readiness
+
bounded orchestration reasoning
```

### NAVIGATE

V1 may navigate to authoritative application destinations such as:

- Brand Centre;
- Offering/Product;
- Campaign;
- Collaboration;
- relevant Settings surfaces.

### PROPOSE

Chat may conversationally describe/propose a canonical application action.

A proposal does not execute the action.

### EXECUTE PERSISTENT BUSINESS WRITE

**NOT V1.**

Explicitly excluded from V1 execution:

- Campaign mutations;
- Collaboration state transitions;
- Settings mutations;
- provider connect/disconnect;
- financial actions;
- team/authority changes;
- destructive actions;
- external communications.

The permanent architecture may support these later; the first Product release does not.

---

## 4. CH-04 — Action / HITL Product policy

Permanent Product safety hierarchy:

| Capability class | Product confirmation policy |
|---|---|
| READ | No confirmation |
| EXPLAIN / REASON | No confirmation |
| NAVIGATE | No confirmation |
| NON-MUTATING RECOMMENDATION | No confirmation |
| NON-MUTATING PROPOSAL | No confirmation |
| PERSISTENT BUSINESS MUTATION | Explicit user confirmation |
| EXTERNAL SIDE EFFECT | Explicit user confirmation |
| FINANCIAL / DESTRUCTIVE / AUTHORITY / SECURITY-SENSITIVE ACTION | Heightened explicit confirmation |

Permanent invariant:

```text
CHAT CONFIRMATION
!=
BACKEND AUTHORIZATION
```

After confirmation, execution must still pass canonical backend authorization, canonical business validation, current entity state, provider capability state, and security controls.

Chat must never create a privileged alternate write path.

For Chat/Home V1:

**CONSEQUENTIAL WRITES = NONE**

---

## 5. CH-05 — Conversation and memory policy

**V1 conversation persistence = YES.**

A user may return to prior persisted Chat conversations where the Product surface exposes them.

Conversation is scoped to the authenticated user and relevant workspace context.

Preserve the semantic separation:

```text
CONVERSATION HISTORY
!=
SESSION / NAVIGATION CONTEXT
!=
CANONICAL BUSINESS STATE
!=
INTELLIGENCE
!=
DURABLE USER MEMORY
```

For V1:

- durable cross-conversation personal memory = **NO**;
- durable preference memory = **NO REQUIRED V1 CAPABILITY**;
- vector memory = **NOT REQUIRED**;
- autonomous long-term memory = **OUT OF SCOPE**.

Old conversation text must not silently become canonical application or Intelligence truth.

Current canonical state wins when conversation history conflicts with current system truth.

---

## 6. CH-06 — Recommendations and proactive behavior

**Home = proactive on arrival.**

**Chat = user-driven / reactive in V1.**

Home may proactively surface relevant attention, learning, opportunity, and progress items when the user arrives.

V1 does not require proactive outbound email, Chat push notifications, autonomous background actions, unsupervised workflow execution, or unsolicited Chat messages outside the Home/application experience.

Initial recommendation ownership:

```text
canonical business state
+
existing Intelligence
+
capability/readiness
+
bounded orchestration reasoning
```

Do not create a new top-level Recommendation Intelligence Engine for V1.

If a future domain Intelligence Engine becomes authoritative for a specialized recommendation, Home/Chat consumes that authority rather than recreating it.

Initial Home prioritization order:

1. blocked / failed / action required;
2. deadline / SLA / time-sensitive risk;
3. setup/capability problem that materially blocks useful work;
4. material opportunity / actionable recommendation;
5. new or materially changed Intelligence;
6. meaningful progress / informational update.

Within a category, deterministic urgency/state may be used where available.

Do not invent an opaque universal AI priority score in V1.

---

## 7. CH-07 — Stale / partial / unavailable truth

### STALE with valid last-good current

Chat/Home may use the result, but must not represent it as freshly current where freshness is material.

### PARTIAL

Use only supported information. Do not fill missing fields or unsupported conclusions. Surface the limitation when it materially affects the answer/action.

### NO_CURRENT

Do not fabricate an answer from absent Intelligence. Use canonical state or another authoritative capability where applicable; otherwise state that the Intelligence is not available yet.

### CAPABILITY_UNAVAILABLE

Where useful, Chat/Home should:

- explain the limitation;
- provide a recovery action;
- navigate to the correct module/Settings surface;
- suppress an action that cannot actually be performed.

Provider/setup debt should appear on Home only when materially actionable or blocking useful Product value. Home must not become a provider configuration checklist.

User-facing treatment should explain why the problem matters rather than merely expose provider setup terminology.

### Explanation / provenance

Default answers should be concise and human-readable, mentioning freshness/limitations only where materially relevant.

When the user asks why, how Creator Shop knows, or what an answer is based on, Chat may expose appropriate source-domain, Intelligence, freshness, and provenance context.

V1 does not require Evidence-level forensic detail in every answer.

---

## 8. CH-08 — Brand V1 and future portability

**Brand = V1 Product surface.**

Creator-specific Chat/Home Product semantics are not owned by this program and remain deferred until Creator Product Authority stabilizes.

Permanent architecture must nevertheless support future subjects/consumers without core redesign, including:

- future Creator Home;
- workspace-global Chat;
- future embedded module Chat entry points;
- future external agent/MCP adapters.

External agent/MCP compatibility is an architectural requirement only, not a V1 external-agent Product feature.

Do not grant external agents capability merely because an internal registry exists.

Preferred permanent Product architecture:

```text
CANONICAL APPLICATION / INTELLIGENCE CAPABILITY
        ↓
SAFE CAPABILITY CONTRACT
        ↓
   ┌────┴─────────┐
   ↓              ↓
CHAT / HOME   FUTURE AGENT / MCP
```

Business rules must not be reimplemented separately for those consumers.

---

## 9. Phase A proposals superseded / confirmed

The following Phase A items are now resolved by Product Authority:

- Brand Home's primary job is frozen as a prioritized decision surface.
- Chat is workspace-level in permanent architecture; Home-hosted Chat is sufficient for V1.
- V1 capability scope includes Brand, Offering/Product, Brand Intelligence, Product Intelligence, Campaign, Collaboration, Settings/setup, and provider/capability reads plus reasoning, recommendation, navigation, and non-mutating proposals.
- Persistent business writes are excluded from V1.
- The HITL hierarchy is frozen, with backend authorization remaining authoritative after confirmation.
- V1 conversation persistence is required; durable personal/preference/vector/autonomous memory is not.
- Home is proactive on arrival; Chat is reactive in V1.
- Recommendation ownership remains bounded orchestration over canonical state, Intelligence, and readiness; no Recommendation Intelligence Engine is created for V1.
- Stale/partial/no-current/unavailable behavior is frozen.
- Brand is the V1 Product surface; future Creator/global/agent portability is architectural only.
- Product Intelligence is accepted as complete Product semantics; subsequent compatibility work may only determine consumer contracts/adapters and must not reopen Product Intelligence Product meaning.

---

## 10. Governance note

This document freezes Product meaning only.

It does **not** freeze:

- database schema;
- migration design;
- capability-registry storage;
- API representation;
- model/provider choice;
- orchestration implementation;
- exact frontend state names;
- UI layout/card density;
- Stitch artifacts;
- implementation phases;
- external-agent enablement.

Those belong to cross-contract preflight, finite execution planning, specialist implementation authority, and later bounded execution, provided they preserve CH-01 through CH-08.

---

## 11. Product decision status

Open Product decisions blocking first Chat/Home vertical slice: **NONE**  
Open Product decisions blocking bounded Brand Home + Chat V1: **NONE**

Next phase:

`CHAT_HOME_PHASE_B2 — SPECIALIST CONTRACT + COMPATIBILITY PREFLIGHT`
