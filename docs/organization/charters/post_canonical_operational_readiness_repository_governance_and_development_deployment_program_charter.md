# Creator Shop Post-Canonical Operational Readiness, Repository Governance, and Development Deployment Program — Principal Charter

**Version:** 1.0  
**Status:** ESTABLISHED — EXECUTION HOLD  
**Program:** Post-Canonical Operational Readiness and Development Deployment  
**Activation gate:** Parent review of the Campaign Intelligence post-reconciliation read-only delta preflight  
**Primary outcome:** one clean, professionally governed canonical source posture deployed to an accepted AWS development environment, with provider and deferred-product work sequenced behind explicit gates

## 1. Mission

This charter governs the Creator Shop program after completion of canonical application reconciliation.

Its mission is:

> Preserve the immutable canonical application, eliminate obsolete local and Docker execution residue, establish a clear canonical-versus-legacy repository boundary, introduce professional Git security and collaboration controls, deploy only the accepted canonical application to a professionally configured AWS development environment, then progress through provider enablement and deferred product completion without reintroducing legacy ambiguity.

This program converts the accepted canonical checkpoint into an operationally clean, governable, deployable development platform.

It is not a mandate to execute every stage immediately. Each stage requires its own bounded authority and evidence.

## 2. Current immutable starting authority

Canonical reconciliation is complete.

Authority repository:

- Repository:
  Piyush1087/dummy_tcs
- Canonical authority branch:
  canonical/mvp-canonical-application-v1-authority
- Checkpoint authority commit:
  73d9cf8ecd0dd477d0b2d3d04fa1a3b17bfe427b
- Checkpoint authority tree:
  16300ee47c241c3717a24603c02114275ee4b4bc
- Checkpoint record:
  docs/ai-collaboration/core-platform-centres/canonical-reconciliation/CANONICAL_RECONCILIATION_FINAL_ACCEPTANCE_AND_CHECKPOINT_V1.md
- Checkpoint record blob:
  43c48758a32290783f49991d9277408c0e951a9b

Canonical backend:

- Repository:
  Piyush1087/creator-commerce-backend-v2-clone
- Branch:
  canonical/mvp-canonical-application-v1-backend
- Commit:
  1a99cf3f54df849408c8775b20e78c036ee637c3
- Tree:
  9679ed60f186220716e948779d3d70dbbf89b39a
- Schema blob:
  1d9b3a8bf3145d47d326fae88493f7816eef9140
- Migration inventory:
  108
- Migration subtree:
  ae9c3e8036461260ad6f0963dffb7d5d9d010139

Canonical frontend:

- Repository:
  Piyush1087/creator-commerce-frontend-v2-clone
- Branch:
  canonical/mvp-canonical-application-v1-frontend
- Commit:
  edc6ff991a43ce3a93d2bd242d148a6fcbd104dc
- Tree:
  8b8a9c515afb04a69a962e4d786d7f398854ea9c

The V3 final-gate branches are validation evidence only. They are not production application heads.

## 3. Immediate execution hold

The following read-only preflight has been issued and is awaiting a result:

- Authority commit:
  8494f58ff60fb365f619fa5c6e73ebaf91736a7a
- Prompt:
  docs/organization/prompts/campaign_intelligence_post_reconciliation_delta_preflight_local_codex_prompt_v1.md
- Prompt blob:
  7918a5187bbfda0596fd88017625346cedd8a2d1

The preflight covers:

- Campaign Applicant AI Match V1;
- Campaign Performance/Reporting V1.

Until its complete response is returned and reviewed by Parent:

DO NOT:

- begin local/Docker cleanup;
- delete paused-lane worktrees, containers, volumes, caches or artifacts;
- restructure or retire repositories;
- create replacement canonical repositories;
- start Git governance changes;
- begin AWS changes or deployment;
- activate Postmark templates;
- apply for or configure Razorpay Route;
- modify Meta apps, permissions or App Review state;
- resume a paused intelligence lane;
- implement deferred product debt.

This charter publication is governance only. It does not activate the roadmap.

## 4. Governing principles

### 4.1 Canonical authority is immutable

The canonical backend, frontend, and authority SHAs above are the source baseline for every later stage.

No later worker may substitute:

- development;
- freeze;
- a historical convergence branch;
- a validation-support branch;
- a legacy production branch;
- a local dirty worktree;
- “latest” or another moving ref.

Any new operational branch must name its exact canonical parent.

### 4.2 Preserve before deleting

Every cleanup or retirement action follows:

READ-ONLY INVENTORY  
→ PROTECTED-STATE MANIFEST  
→ REMOTE REACHABILITY / BACKUP PROOF  
→ EXACT DELETION ALLOWLIST  
→ CLEANUP  
→ FETCH-BACK / CONTINUITY VERIFICATION

Uncommitted work, environment files, Git objects, databases, credentials, Docker volumes and paused-program state must never be deleted merely because they appear old.

### 4.3 Canonical and legacy must be visibly distinct

Legacy may remain as evidence, archive or bounded compatibility code, but it must not be confused with canonical application authority.

Directory names, repository descriptions, default branches, branch protections, documentation, deployment inputs and developer onboarding must all identify the canonical source unambiguously.

### 4.4 Access control requires repository boundaries where confidentiality requires them

Git sparse checkout, branch naming, CODEOWNERS and UI conventions are not security boundaries.

A collaborator with read access to a repository can ordinarily obtain its entire reachable Git history.

If engineers must not see certain code, that code must be placed in a separately permissioned repository, private package/service, or other access-controlled boundary. Do not claim folder-level secrecy inside a shared repository.

### 4.5 Development deployment precedes production deployment

This charter authorizes planning and later bounded execution for an AWS development environment first.

Production deployment requires separate authority after development acceptance, provider readiness, security review, operational monitoring and rollback proof.

### 4.6 Provider availability must remain truthful

A development deployment may use provider-disabled or fail-closed behavior where that is the accepted canonical contract.

Do not simulate provider readiness as live readiness.

Postmark, Razorpay and Meta each have separate configuration, permission, live-validation and production-acceptance gates.

### 4.7 Paused work remains paused until explicitly resumed

Canonical reconciliation completion satisfies only the prerequisite for the intelligence delta preflight.

It does not automatically resume Applicant AI Match or Campaign Performance/Reporting.

## 5. Program operating model

Product / Parent Authority  
→ Post-Canonical Program Orchestrator  
→ preservation and cleanup authorities  
→ Git Repository Governance AI Worker  
→ AI AWS Worker  
→ provider specialist lanes  
→ deferred-module Systems Architects  
→ final Brand/Creator Journey Audit

Named operating roles:

### Parent Authority

Owns:

- roadmap sequencing;
- destructive-action authorization;
- canonical/legacy repository decision;
- access-control and team-policy decisions;
- AWS risk/production gates;
- provider application decisions;
- deferred-product prioritization;
- final acceptance.

### Post-Canonical Program Orchestrator

Owns:

- this charter’s execution ledger;
- stage activation and completion gates;
- cross-worker handoffs;
- protected-state manifest;
- sequencing and stop decisions;
- durable evidence;
- ensuring no worker infers authority from another stage.

### WINDOWS_DISK_CAPACITY_RECOVERY_PARENT

Owns:

- Windows filesystem and Docker inventory;
- cleanup proposals;
- exact deletion allowlists;
- protected local-state checks;
- Docker VHDX and cache hygiene;
- before/after capacity evidence;
- safe cleanup execution only after activation.

It does not own Git authority, AWS design, provider decisions or product implementation.

### Git Repository Governance AI Worker

Owns:

- repository topology audit;
- canonical/legacy demarcation;
- repository split/new-repository decision support;
- GitHub organization/team/repository access model;
- default-branch and ruleset design;
- CODEOWNERS/review/status-check policy;
- CI/security/release hygiene;
- developer onboarding/offboarding model;
- archive/retirement plan.

It does not independently delete repositories, rewrite accepted history, expose private code, or change application behavior.

### AI AWS Worker

Owns, when separately activated:

- AWS current-state audit;
- target development architecture;
- IAM and access plan;
- networking, database, compute, storage, DNS/CDN and observability plan;
- secrets/configuration deployment;
- cost and security controls;
- development deployment;
- health/smoke/rollback evidence.

It consumes only accepted canonical Git authority and the approved Git governance output.

### Provider specialists

Separate lanes govern:

- Postmark;
- Razorpay Route India;
- Meta Business Discovery and Creator Marketplace;
- any later Google/Auth or other provider.

Provider specialists do not inherit application, AWS or Product authority beyond their bounded assignments.

### Deferred-module Systems Architects

They resume only after explicit Parent prioritization and a fresh delta review against the deployed canonical baseline.

## 6. Durable program artifacts

The program must maintain:

- POST_CANONICAL_PROGRAM_EXECUTION_LEDGER;
- PAUSED_LANE_PRESERVATION_AND_RESUMPTION_REGISTER;
- LOCAL_RUNTIME_PROTECTION_MANIFEST;
- LOCAL_AND_DOCKER_CLEANUP_EVIDENCE;
- CANONICAL_VS_LEGACY_REPOSITORY_REGISTER;
- GIT_REPOSITORY_TOPOLOGY_DECISION;
- GIT_ACCESS_AND_COLLABORATION_GOVERNANCE_BASELINE;
- AWS_DEVELOPMENT_TARGET_ARCHITECTURE;
- AWS_ENVIRONMENT_AND_SECRET_NAME_MANIFEST;
- AWS_DEVELOPMENT_DEPLOYMENT_EVIDENCE;
- EXTERNAL_PROVIDER_READINESS_REGISTER;
- DEFERRED_PRODUCT_DEBT_REGISTER;
- BRAND_AND_CREATOR_JOURNEY_AUDIT_REGISTER.

Every material artifact must contain immutable Git SHAs and clear status.

## 7. Stage 0 — Pending intelligence delta-preflight review

Status at charter publication:

WAITING_FOR_READ_ONLY_PREFLIGHT_RESPONSE

Required inputs:

- complete Applicant Match delta result;
- complete Campaign Reporting delta result;
- shared canonical collision map;
- preserved authorities and missing prerequisites;
- recommended future bases;
- confirmation that no mutation occurred.

Parent review must decide only:

- what pause/resumption information must be preserved before cleanup;
- whether any local/Docker resources are genuinely required for later resumption;
- what may be destroyed and reconstructed from Git;
- whether either paused lane has uncommitted or unpublished state requiring preservation.

This stage does not resume either lane.

Stage exit artifact:

PAUSED_LANE_PRESERVATION_CAPSULE_V1

It must record, separately for each lane:

- authority repository/branch/SHA/tree;
- last accepted technical authority;
- accepted implementation checkpoint, if any;
- canonical base to use later;
- completed versus pending work;
- historical branches that are evidence only;
- required future owner decisions;
- exact restart boundary;
- required local secrets/configuration names without values;
- whether local worktrees, dependency trees, Docker images, containers, networks or volumes are reconstructible;
- exact protected local items, if any;
- explicit NO_FURTHER_EXECUTION_UNTIL_RESUMED.

## 8. Stage 1 — Deep preservation, cleaning classification, and demarcation

Purpose:

Establish what is authoritative, reconstructible, protected, deletable, legacy, canonical, provider-specific and deferred before any destructive cleanup.

Required read-only inventories:

- Windows disk usage relevant to the project;
- Docker containers, images, volumes, networks, build cache and VHDX;
- Codex runner worktrees, clones, artifacts, caches, node_modules and generated outputs;
- Git repositories, refs, worktrees, objects, bundles and uncommitted state;
- environment/configuration files;
- database volumes and dumps;
- paused intelligence runtime residue;
- AWS/provider tooling or credential profiles;
- canonical validation evidence;
- legacy branches and old module execution environments.

Classify every material item:

CANONICAL_PROTECTED  
AUTHORITY_EVIDENCE_PROTECTED  
PAUSED_LANE_PROTECTED  
SECRET_OR_ENVIRONMENT_PROTECTED  
RECONSTRUCTIBLE_FROM_GIT  
RECONSTRUCTIBLE_FROM_LOCKFILE  
LEGACY_ARCHIVE_PENDING  
SAFE_TO_DELETE_EXACT  
REQUIRES_HUMAN_REVIEW  
UNKNOWN_STOP

No cleanup may delete UNKNOWN_STOP.

Required output:

LOCAL_RUNTIME_PROTECTION_MANIFEST_V1

The manifest must use exact absolute paths, container IDs/names, volume names, repository/branch/SHA and size estimates where available.

## 9. Stage 2 — Aggressive local and Docker cleanup

Owner:

WINDOWS_DISK_CAPACITY_RECOVERY_PARENT

Activation prerequisites:

- Stage 0 preservation capsule accepted;
- Stage 1 protection manifest accepted;
- canonical Git objects fetched and reachable remotely;
- all meaningful uncommitted state either committed, exported, or explicitly retained;
- exact deletion allowlist approved.

Cleanup may include, when allowlisted:

- stale Codex clones/worktrees;
- historical run directories;
- obsolete node_modules;
- build/dist/test/browser artifacts;
- package-manager caches;
- reconstructible Playwright/browser caches;
- stopped task-owned containers;
- unused images;
- obsolete non-database volumes;
- task-owned networks;
- Docker build cache;
- obsolete logs;
- VHDX compaction after safe Docker shutdown and attachment checks;
- paused-intelligence environments proven reconstructible from Git.

More aggressive paused-lane cleanup is permitted only after the preservation capsule proves:

- all accepted authority is remote and immutable;
- there is no accepted implementation checkpoint requiring a unique local worktree;
- no unique database state is needed;
- future resumption can start from documented canonical bases;
- any required environment variable names and setup steps are recorded;
- secret values are either retained securely or can be reissued.

Never delete without separate explicit authority:

- canonical repositories or branches;
- Git objects not proven reachable remotely;
- active uncommitted work;
- .env or credential material before secure disposition;
- SSH keys;
- GitHub/AWS/provider credential stores;
- databases/volumes not explicitly classified;
- the current accepted development data store, if one exists;
- Windows user-profile roots;
- broad Docker or filesystem targets identified only by wildcard.

Cleanup result must verify:

- canonical SHA reachability;
- paused-lane authority reachability;
- remaining worktree status;
- Docker health where Docker remains installed;
- protected containers/volumes;
- recovered capacity;
- no secret exposure;
- no unintended deletion.

Cleanup does not authorize repository retirement.

## 10. Stage 3 — Canonical versus legacy Git demarcation

Owner:

Git Repository Governance AI Worker

Begin with a read-only repository topology and history audit.

Required questions:

1. Can the existing backend/frontend repositories be made unambiguously canonical through branch/default/ruleset/archive hygiene?
2. Does legacy history create unacceptable developer confusion, access leakage, CI risk or accidental-deployment risk?
3. Does confidentiality require splitting code across separately permissioned repositories?
4. Would a new canonical repository materially improve safety without destroying provenance?
5. Which legacy code is still needed as compatibility evidence?
6. Which branches are authority, active, evidence-only, superseded, archived or safe to delete later?
7. Which automation, webhook, secret, deployment or external integration points to current repositories?

Allowed topology outcomes:

### Outcome A — Existing repositories retained

Use when:

- canonical branches are clear;
- history is acceptable;
- access control can be applied at repository level;
- legacy refs can be archived or protected;
- deployment can be pinned to canonical refs.

Possible actions after approval:

- make canonical branch the controlled default;
- add repository descriptions and README banners;
- protect canonical branches;
- archive/freeze legacy branches;
- remove obsolete automation references;
- establish release/deployment branches;
- retain immutable provenance.

### Outcome B — New clean canonical repositories

Use only when justified by:

- access segmentation;
- severe legacy/history confusion;
- accidental deployment risk;
- sensitive code separation;
- operational simplicity that outweighs migration cost.

If selected:

- create new private repositories;
- transfer exact canonical trees;
- publish source-to-destination commit/tree/blob mapping;
- preserve license/attribution/provenance;
- verify builds and lockfiles without semantic changes;
- configure access/rulesets before adding engineers;
- keep old repositories read-only until all references, CI, AWS, providers and developer handoffs are migrated;
- never silently rewrite or discard accepted authority.

The old repositories are retired only after an explicit retirement gate.

### Outcome C — Split by access boundary

Use when different engineers must see different code.

Possible boundaries:

- frontend;
- backend;
- infrastructure;
- provider-specific services;
- internal intelligence/model components;
- shared contracts/packages.

A split is an architecture and operational decision. It requires import/dependency, CI, versioning, secret and deployment planning.

Required output:

CANONICAL_VS_LEGACY_REPOSITORY_REGISTER_V1  
GIT_REPOSITORY_TOPOLOGY_DECISION_V1

No repository creation, deletion, transfer or default-branch change occurs during the audit phase.

## 11. Stage 4 — Professional Git and engineering collaboration setup

Owner:

Git Repository Governance AI Worker

This stage is intentionally structured as two or three focused sessions.

### Session 1 — Organization, identity, repository and access model

Cover:

- GitHub organization ownership;
- personal versus organization repositories;
- billing and recovery ownership;
- mandatory 2FA/passkeys;
- least-privilege teams;
- employee/contractor/service-account distinctions;
- base permissions;
- repository visibility;
- outside collaborator policy;
- onboarding/offboarding;
- SSH/signing identity;
- protected administrator accounts;
- audit-log expectations.

Core confidentiality rule:

If a person must not see code, do not grant access to the repository containing that code.

### Session 2 — Branch, review, CI and supply-chain controls

Cover:

- protected default/canonical branches;
- GitHub rulesets;
- no force push/no deletion;
- required pull requests;
- minimum approvals;
- CODEOWNERS;
- required status checks;
- signed commits/tags where appropriate;
- merge strategy;
- dependency review;
- Dependabot;
- secret scanning and push protection;
- code scanning;
- artifact retention;
- environment protection rules;
- deployment approvals;
- release provenance.

### Session 3 — Practical developer workflow and exercises

Simulate:

- onboarding a frontend-only engineer;
- onboarding a backend engineer;
- onboarding a contractor;
- creating a feature branch;
- opening/reviewing/merging a PR;
- handling a leaked credential;
- reverting a faulty change;
- removing a departing engineer;
- emergency/break-glass access;
- publishing a release/deployment candidate.

Required output:

GIT_ACCESS_AND_COLLABORATION_GOVERNANCE_BASELINE_V1  
ENGINEER_ONBOARDING_AND_OFFBOARDING_RUNBOOK_V1  
GIT_INCIDENT_AND_ROLLBACK_RUNBOOK_V1

No engineer is added until the access model is accepted.

## 12. Stage 5 — AWS professional foundation and development deployment

Owner:

the already active AI AWS Worker, reoriented to the canonical checkpoint and accepted Git topology.

Activation prerequisites:

- canonical repository topology accepted;
- Git access/rulesets established;
- deployment source pinned to immutable canonical authority;
- local cleanup complete enough for reliable execution;
- AWS authority and credentials bounded;
- environment/configuration manifest prepared.

Required sequence:

### AWS Phase A — Read-only account and architecture audit

Inspect:

- AWS Organization/accounts;
- root-user protection and MFA;
- IAM Identity Center/roles;
- current VPC/networking;
- current compute/database/storage;
- Route 53/domain posture;
- certificates;
- logs/monitoring;
- budgets/cost controls;
- existing development resources;
- secrets and CI integrations.

Root credentials remain human-controlled. Long-lived shared root or administrator credentials are not an operating model.

### AWS Phase B — Target development architecture

Decide and document:

- account/environment boundary;
- region;
- compute/runtime;
- RDS/PostgreSQL posture;
- VPC/subnets/security groups;
- object storage;
- CDN/frontend hosting;
- domain and TLS;
- email/provider connectivity;
- secrets storage;
- observability;
- backups;
- cost budget;
- rollback;
- infrastructure-as-code approach.

### AWS Phase C — Bootstrap and least-privilege access

Create only after approval:

- dedicated roles;
- CI/deployment identity;
- human administrative access;
- emergency access;
- state backend if infrastructure as code requires it;
- budgets and alerts;
- logging and audit controls.

### AWS Phase D — Canonical development deployment

Deploy only the accepted canonical application lineage or its approved Git-topology equivalent.

Prove:

- environment variables by name/ownership;
- secret injection without Git exposure;
- clean 0→108 development database migration or accepted data plan;
- backend health;
- frontend/backend connectivity;
- auth/session behavior;
- fail-closed providers;
- canonical routes;
- migrations current;
- no legacy deployment source;
- no debug/auth bypass;
- monitoring/logging;
- rollback point.

### AWS Phase E — Development acceptance

Produce:

AWS_DEVELOPMENT_DEPLOYMENT_EVIDENCE_V1

Production remains unauthorized.

## 13. Stage 6 — Postmark template activation

Owner:

Postmark specialist / CLI worker under separate authority.

Activation prerequisites:

- AWS development endpoint/domain and sender assumptions known;
- canonical notification event inventory;
- canonical environment-variable manifest;
- no secret values committed;
- development deployment healthy.

Required work:

- enumerate every canonical mail event;
- separate authentication, invitations, notifications and other template families;
- reconcile template IDs and message streams;
- configure sender signatures/domains;
- create/update templates through approved CLI/API tooling;
- map environment-variable names;
- validate non-production deliveries safely;
- verify error/fail-closed behavior;
- document production promotion requirements.

Do not treat the final-gate local mail adapter as production Postmark configuration.

## 14. Stage 7 — Razorpay Route India application and readiness

Owner:

Razorpay specialist.

Scope:

India / INR only unless later expanded by Product Authority.

Sequence:

- canonical payout/provider requirement audit;
- business/KYC/account prerequisite register;
- Route application preparation;
- provider account/configuration;
- webhook/security design;
- development/sandbox integration plan;
- live enablement gates;
- financial reconciliation and operational controls.

The accepted Brand and Creator payout state remains provider-disabled until separate provider-enabled implementation and acceptance.

No real-money payout execution is authorized by this charter.

## 15. Stage 8 — Meta Business Discovery and Creator Marketplace

Owner:

Meta specialist.

Activation prerequisites:

- app/business ownership and access reviewed;
- canonical Instagram and Settings boundaries known;
- AWS callback/domain posture stable;
- required Product use cases frozen;
- permission/data-retention/deauthorization boundaries documented.

Planned applications:

- Business Discovery;
- Creator Marketplace discovery/access as separately supported by Meta.

Do not silently conflate:

- Instagram Login Graph API;
- Facebook Login/Page dependency;
- Business Discovery;
- Creator Marketplace;
- DMs;
- publishing;
- webhooks.

Any Meta app ownership transfer, duplication, permission request or App Review action requires explicit authority.

## 16. Stage 9 — Deferred product and provider debt

Only after Git, AWS development and primary provider posture are stable, return to prioritized deferred work.

Initial deferred register includes:

- Creator KYC;
- Google authentication;
- Campaign Applicant AI Match;
- Campaign Performance/Reporting;
- other remaining Campaign Intelligence;
- remaining intelligence engines;
- remaining Brand Centre workspaces;
- remaining Brand Home work;
- remaining Creator Home work;
- provider-enabled payout work;
- other debts identified by canonical/AWS/provider reviews.

Every deferred lane begins with:

CANONICAL_DEPLOYED_BASE_DELTA_REVIEW  
→ OWNER AUTHORITY CONFIRMATION  
→ FINITE PLAN  
→ BOUNDED IMPLEMENTATION  
→ JOINT ACCEPTANCE  
→ AWS DEVELOPMENT INTEGRATION

Do not resume from historical local worktrees or obsolete bases.

## 17. Stage 10 — Complete Brand and Creator journey review

Purpose:

Perform a final human-led, AI-assisted review of the complete Brand and Creator experience after deferred work has been integrated into development.

Review both frontend and backend truth.

Minimum journey coverage:

- guest/public entry;
- Brand signup/onboarding;
- Gatekeeper/Preview/Brand Centre;
- Brand Home;
- Campaign creation, products/assets, briefs and workspaces;
- Creator discovery/application;
- C03→C04 collaboration;
- Brand and Creator settings;
- Brand and Creator payouts;
- Creator onboarding/Home/Centre;
- Instagram connection and intelligence;
- auth/recovery;
- notifications;
- provider-disabled and provider-enabled states;
- role and tenant isolation;
- empty/loading/error/stale/recovery states;
- mobile/tablet/desktop behavior;
- operational/admin/support paths.

Classify every finding:

BLOCKER  
HIGH_DEBT  
BOUNDED_CORRECTION  
DEFERRED_ACCEPTED  
COSMETIC  
NOT_A_DEFECT

The final review must reconcile UI presentation with backend state and expose any remaining contract discrepancy.

Required output:

BRAND_AND_CREATOR_END_TO_END_JOURNEY_ACCEPTANCE_V1

## 18. Dependency and sequencing rules

The normal sequence is:

0. intelligence delta-preflight response and preservation capsule;
1. deep preservation/demarcation inventory;
2. local and Docker cleanup;
3. Git canonical/legacy topology decision;
4. professional Git governance setup;
5. AWS development foundation and deployment;
6. Postmark activation;
7. Razorpay Route India readiness;
8. Meta Business Discovery/Marketplace readiness;
9. deferred product work;
10. final Brand/Creator journey review.

Permitted overlap is limited:

- read-only documentation may overlap;
- no destructive cleanup overlaps preservation discovery;
- AWS implementation does not begin before Git source authority is stable;
- provider applications may be prepared, but live configuration waits for stable domains/secrets/ownership;
- deferred implementation does not resume merely because AWS is available.

Any departure from sequence requires a recorded Parent decision.

## 19. Security and secret handling

Never commit:

- .env files;
- passwords;
- OAuth tokens;
- Postmark tokens;
- Razorpay keys;
- Meta access tokens;
- AWS access keys;
- session storage;
- private keys;
- signed URLs;
- production database dumps;
- customer/creator personal data.

Git may contain:

- secret names;
- ownership;
- required/optional classification;
- safe placeholder syntax;
- rotation/runbook references.

Use dedicated secret stores and least-privilege runtime roles.

Any discovered secret exposure triggers:

SECRET_EXPOSURE  
→ STOP  
→ ROTATE / REVOKE  
→ HISTORY AND LOG REVIEW  
→ INCIDENT RECORD  
→ RESUME ONLY AFTER ACCEPTANCE

## 20. Destructive-action policy

Deletion, repository retirement, branch deletion, Docker volume deletion, database destruction, credential revocation and AWS teardown are separate explicit actions.

Before each:

- resolve exact target;
- verify protected-state exclusion;
- verify backup/reconstructibility;
- record expected impact;
- prefer reversible/archive operations;
- prohibit broad wildcard/root deletion;
- capture post-action verification.

Never use cleanup urgency as authority to remove uncertain state.

## 21. Circuit breakers

Stop the affected stage on:

CANONICAL_CHECKPOINT_MISMATCH  
PAUSED_LANE_STATE_UNPRESERVED  
UNCOMMITTED_WORK_AT_RISK  
SECRET_OR_ENVIRONMENT_STATE_AMBIGUOUS  
DATABASE_VOLUME_OWNERSHIP_UNKNOWN  
DOCKER_RESOURCE_OWNERSHIP_UNKNOWN  
GIT_OBJECT_NOT_REMOTELY_REACHABLE  
LEGACY_CONTAINS_UNIQUE_REQUIRED_BEHAVIOR  
REPOSITORY_ACCESS_MODEL_INSUFFICIENT  
HISTORY_REWRITE_REQUIRED  
SOURCE_PROVENANCE_LOSS  
AWS_ACCOUNT_OR_IAM_AMBIGUITY  
ROOT_CREDENTIAL_DEPENDENCY  
DESTRUCTIVE_DATABASE_ACTION_REQUIRED  
PROVIDER_CAPABILITY_CONFLICT  
LIVE_FINANCIAL_RISK  
META_OWNERSHIP_OR_PERMISSION_CONFLICT  
DEPLOYABLE_AUTH_BYPASS  
CROSS_TENANT_OR_ROLE_ISOLATION_FAILURE  
PRODUCTION_OPERATION_REQUESTED_WITHOUT_AUTHORITY

After a breaker:

bounded evidence  
→ owner/Parent review  
→ bounded correction or disposition  
→ rerun affected gate

Do not skip forward to a later stage.

## 22. Program acceptance gates

### Cleanup accepted when

- canonical and paused-lane authority preserved;
- protected files/secrets/databases preserved;
- exact allowlist applied;
- disk/Docker health verified;
- cleanup evidence published.

### Git accepted when

- canonical source is unambiguous;
- legacy disposition recorded;
- repository access boundaries meet confidentiality needs;
- rulesets/review/CI/security baseline accepted;
- onboarding/offboarding tested.

### AWS development accepted when

- canonical source deployed;
- infrastructure and secrets professionally bounded;
- database and health gates pass;
- monitoring/rollback/cost controls exist;
- no legacy source or auth bypass is deployed.

### Provider lane accepted when

- provider capability, configuration, permissions and live-validation status are explicit;
- application behavior remains truthful;
- secrets remain outside Git;
- production promotion gates are defined.

### Program complete when

- deferred work disposition is current;
- final end-to-end journey review is accepted;
- remaining production blockers are explicit;
- production-release authority can be considered separately.

## 23. Execution ledger requirements

The program ledger must record:

- stage;
- authority SHA;
- worker;
- starting repositories/SHAs;
- action scope;
- protected state;
- changes;
- destructive actions;
- validation;
- checkpoints;
- blocker;
- next boundary;
- Parent decision.

Long-lived continuity must come from Git artifacts, not chat history.

## 24. Charter activation rule

This charter is established immediately as program governance.

Execution remains on hold until:

1. the Campaign Intelligence post-reconciliation read-only delta preflight returns;
2. Parent reviews its result;
3. PAUSED_LANE_PRESERVATION_CAPSULE_V1 is accepted;
4. Parent explicitly activates Stage 1.

Required present status:

POST_CANONICAL_PROGRAM_STATUS = ESTABLISHED_EXECUTION_HOLD

CANONICAL_RECONCILIATION = COMPLETE

CAMPAIGN_INTELLIGENCE_DELTA_PREFLIGHT = IN_PROGRESS

LOCAL_AND_DOCKER_CLEANUP = NOT_STARTED

GIT_RESTRUCTURING = NOT_STARTED

AWS_CHANGE = NOT_STARTED

PROVIDER_CHANGE = NOT_STARTED

DEFERRED_PRODUCT_EXECUTION = NOT_STARTED

No worker may infer activation authority from this charter alone.

## 25. Principal success rule

The program succeeds when:

> The accepted canonical application is preserved as the only deployment authority; obsolete local, Docker and legacy repository state is safely removed or archived; engineers receive only the code and permissions they need; AWS development is secure, observable, cost-aware and reproducible; provider work is truthful and separately gated; deferred product work resumes from the deployed canonical base; and the complete Brand and Creator journeys receive a final evidence-backed review before production release consideration.
