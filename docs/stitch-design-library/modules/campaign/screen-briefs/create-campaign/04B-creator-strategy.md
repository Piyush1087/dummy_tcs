# 04B — Creator Strategy Screen Brief

**Target:** S2  
**Screen:** `Campaign — Create Creator Strategy — Desktop 1440 — Geography Results — v1`  
**Parent:** Approved S1 Campaign Strategy screen

## Objective

Extend the approved desktop wizard system to creator profile and audience targeting. Solve controlled multi-selects, numeric ranges, audience controls, and geography results without increasing visual complexity or redesigning the shell.

## Viewport and inherited structure

Use the same 1440 × 900 shell-reserved Content Area, page header, stepper, Summary, section rhythm, and action architecture as S1.

Step state:

```text
Campaign Strategy — completed
Creator Strategy — current
Commercial Strategy — future
```

## Required hierarchy

```text
Creator Profile
├── Creator Archetypes
└── Follower Range

Audience Match
├── Gender
├── Age
├── Geography
└── Affinities
```

## Required content and state

### Creator Archetypes

Searchable controlled multi-select.

Selected:

- Beauty Educator;
- Skincare Reviewer;
- Lifestyle Storyteller.

Show selections as removable chips. Search remains available. Do not expose custom-token creation.

### Follower Range

```text
Minimum followers: 20,000
Maximum followers: 250,000
```

Use numeric authority, not tier cards.

### Audience Gender

```text
All | Female selected | Male
```

### Audience Age

Show 24–34 through an accessible range pattern with explicit values. The design must also support keyboard/manual adjustment in implementation.

### Geography

The representative frame shows an active search/results state.

Selected structured tags:

- India;
- Mumbai, Maharashtra, India.

Search results should demonstrate clear locality/region/country differentiation without technical provider data.

### Affinities

Controlled optional multi-select.

Selected:

- Skincare;
- Beauty & Cosmetics;
- Wellness.

## Campaign Summary

Inherit S1 Summary architecture and add only useful populated creator context:

```text
Creators
3 Archetypes
20K–250K followers
Female · 24–34
India · Mumbai
```

Do not repeat every chip in a large side ledger.

## Interaction intent

- Archetypes and Affinities share a component family while retaining required/optional meaning.
- Geography results are attached to their input and do not overflow the Content Area.
- Range values remain understandable without interpreting slider position alone.
- Back and Continue preserve the approved action hierarchy.
- Provider state does not dominate the complete step.

## Prohibited

- Nano/Micro/Mid-tier/Macro authority;
- Campaign Industry field;
- disqualifying keyword tokens;
- uncontrolled Archetypes or Interests;
- invented creator counts or reach;
- `AI Recommended` unless supplied by current runtime;
- Campaign Page Discovery, Prospects, or Applicants;
- independent redesign of S1 structure.

## Review checklist

- Do controlled taxonomies feel easy to search and review?
- Is the follower range clearly numeric?
- Are age, gender, geography, and affinities clearly creator-audience requirements?
- Are geography results usable within the real viewport?
- Is the step visually consistent with S1?
- Is Summary concise and subordinate?

## Required output

Return exact project/screen identity, parent screen identity, preview link, viewport/state, and available export/code identity.
