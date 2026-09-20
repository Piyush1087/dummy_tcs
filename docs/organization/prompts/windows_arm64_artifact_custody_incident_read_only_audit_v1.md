# Windows ARM64 Artifact Custody Incident — Read-Only Audit V1

`WINDOWS_ARM64_ARTIFACT_CUSTODY_INCIDENT_READ_ONLY_AUDIT_V1`

## Recipient

`WINDOWS_DISK_CAPACITY_RECOVERY_PARENT`

## Purpose

Establish, as precisely as surviving evidence permits:

1. when the accepted AWS ARM64 artifact ceased to be locally recoverable;
2. which command, process, cleanup run, Docker/BuildKit garbage-collection event, restart, compaction, or other operation caused or most likely caused the loss;
3. which immutable prompt, Parent disposition, or worker instruction authorized that operation;
4. whether earlier `PRESERVED` conclusions proved a complete selectable/exportable image or only documentary BuildKit metadata;
5. the control failure that allowed a validated but unpublished artifact to be treated as durable deployment custody.

This assignment is a forensic, read-only audit. It does not authorize cleanup, recovery, image construction, Docker mutation, Git mutation, AWS access, or publication.

## Artifact under investigation

```text
ACCEPTED_IMAGE_ID =
sha256:b7b11ec774cd91c68bebbde6f4442252c166cecfd852544cb8e314ab6fe744c3

PLATFORM_MANIFEST =
sha256:071e72b67d6fa1a1aa4ebcc9ea9600342c415d0a72f8c3d5ff3136bb92f1265c

CONFIG =
sha256:bbb37c159023921d7dc1d73496a838b70b859f2adb56214b917553788e4c4ac1

KNOWN_BUILDKIT_HISTORY_RECORD =
f2yw5c1vwckyw7q0njnwzbccv

PLATFORM = linux/arm64
REPORTED_SIZE_BYTES = 829835003
```

## Current confirmed state

The most recent AWS read-only triage reported:

```text
AWS_PLATFORM_DEV_EXISTING_ARM64_IDENTITY_TRIAGE_RESULT =
SELECTED_IMAGE_TRULY_ABSENT

INDEX_DIGEST_STATUS = DOCUMENTARY EVIDENCE ONLY
PLATFORM_MANIFEST_STATUS = DOCUMENTARY EVIDENCE ONLY
CONFIG_DIGEST_STATUS = ABSENT
MATCHING_LOCAL_IMAGE = NONE
OCI_DESCRIPTOR_CORRELATION = NO COMPLETE LOCAL CONTENT SET REMAINS
BUILDKIT_EVIDENCE = NO MATCHES ACROSS DEFAULT OR DESKTOP-LINUX BUILDERS
REBUILD_REQUIRED = YES
```

No second post-AWS cleanup execution is believed to have occurred after the cleanup and post-reboot verification that reported this artifact as preserved. Do not assume that a second cleanup occurred. Prove every event from evidence.

## Known custody timeline to reconcile

At minimum, reconcile these claims and their timestamps:

1. AWS continuity rebuilt and validated the ARM64 artifact and recorded the identities above.
2. The guarded ARM64 cleanup deleted two exact stopped containers and 21 enumerated superseded classic-store image records.
3. That cleanup stated that the latest AWS ARM64 BuildKit evidence was protected.
4. The post-reboot verification stated:

   ```text
   LATEST_AWS_ARM64_BUILD_RECORD = PRESERVED
   LATEST_AWS_ARM64_DESCRIPTORS = PRESERVED
   BUILDER_CONTAINER = PRESERVED
   BUILDER_STATE_VOLUME = PRESERVED
   FIVE_RETAINED_IMAGES = PRESERVED
   ```

5. No second cleanup was subsequently executed, according to Parent recollection.
6. The consolidated AWS apply stopped because the selected image was absent.
7. The latest identity triage found no complete local image or BuildKit content set.

The audit must identify the narrowest evidence-backed loss window. Do not equate correlation with causation.

## Required evidence sources

Inspect only read-only sources that already exist, including where available:

- exact cleanup prompts, Parent dispositions, runner results and deletion manifests;
- PowerShell/shell history relevant to Docker, Buildx, WSL, VHDX and cleanup operations;
- Local Codex runner transcripts and command telemetry;
- Docker Desktop logs and diagnostics already present on disk;
- BuildKit daemon logs, history metadata and garbage-collection records;
- Windows event timestamps, Docker Desktop restart timestamps and WSL lifecycle records;
- Docker image/container/volume event metadata;
- file timestamps and size history for Docker's VHDX when supported by surviving logs;
- the original build command and its output mode, especially whether it used `--load`, `--push`, registry output, OCI archive output, or cache-only output;
- the exact commands used by the cleanup and post-reboot `PRESERVED` verification;
- any later process capable of invoking `docker system prune`, `docker builder prune`, `docker buildx prune`, Docker Desktop cleanup, factory reset, builder removal, cache garbage collection, VHDX reset, or equivalent behavior;
- any evidence of automatic BuildKit garbage collection during severe disk pressure.

Do not read or expose secret values. Suppress credentials and connection strings if encountered.

## Mandatory questions

Answer each independently.

### A. Was the artifact ever durably selectable?

Determine whether the accepted identity was ever:

- present in Docker's selectable image store;
- successfully inspected by exact image ID;
- tagged;
- exported as an OCI/Docker archive;
- loaded into a clean store;
- pushed to any registry;
- completely represented by an index, platform manifest, config and all required layers.

Distinguish proof of a BuildKit history reference from proof of a deployable image.

### B. What did `PRESERVED` actually prove?

Reconstruct the exact verification commands. Classify the previous conclusion as one of:

```text
COMPLETE_SELECTABLE_ARTIFACT_PROVEN
COMPLETE_EXPORTABLE_CONTENT_PROVEN
METADATA_AND_DESCRIPTOR_REFERENCES_ONLY
INCOMPLETE_OR_FALSE_POSITIVE_VERIFICATION
INCONCLUSIVE
```

### C. When did the artifact become unavailable?

Produce the narrowest defensible UTC and local-time window bounded by:

- the last strong proof of complete availability; and
- the first strong proof of absence.

If only documentary metadata was ever proven, say that no proven deletion time exists.

### D. What operation caused the loss?

Classify every relevant event as:

```text
PROVEN_CAUSE
PROBABLE_CONTRIBUTOR
POSSIBLE_BUT_UNPROVEN
EXCLUDED
```

Specifically assess:

- the authorized 21-image cleanup;
- removal of the two stopped containers;
- VHDX compaction;
- Docker Desktop restart/reboot recovery;
- manual or automatic BuildKit garbage collection;
- severe low-disk behavior;
- builder removal or recreation;
- task-created cleanup performed by an AWS/Codex run;
- the possibility that the complete artifact never persisted after the build.

### E. Who authorized the causal operation?

For every proven or probable causal operation, report:

- exact prompt or authority name;
- immutable commit/path/blob where available;
- Parent decision or instruction;
- executing worker/run;
- exact authorized deletion or lifecycle scope;
- whether the actual effect stayed within that authority;
- whether the authority relied on an incorrect upstream assumption.

Do not name a person or worker as responsible without evidence. Separate:

1. authorization;
2. execution;
3. verification;
4. upstream decision or classification error.

### F. Was the artifact reclassified as disposable?

Record any later AWS-worker statement that the pre-remediation artifact was releasable. Determine whether that statement was ever converted into an executed cleanup authorization. A recommendation or prompt draft is not an execution.

## Known immutable cleanup packets to include in the authority ledger

Use repository evidence rather than recollection:

- ARM64 cleanup V3:
  - Commit: `2469f3a3b708700a4e01a42fd53fd3c031560640`
  - Path: `docs/organization/prompts/windows_post_aws_arm64_build_capacity_cleanup_execution_v3.md`
- Controlling hardened ARM64 cleanup V4:
  - Commit: `557ed8e12f77e7cc9320282b32b0f07a089939a8`
  - Path: `docs/organization/prompts/windows_post_aws_arm64_build_capacity_cleanup_execution_v4.md`
- Docker startup-recovery packet:
  - Commit: `068e596da0cf1213bc33fb2e48410c65b6222f22`
  - Path: `docs/organization/prompts/windows_docker_desktop_startup_recovery_dockerinference_v1.md`
- Post-reboot protected-state verification:
  - Commit: `0f9f5e642be07aff67bb612dc07adfc3c2a00211`
  - Path: `docs/organization/prompts/windows_docker_desktop_post_reboot_protected_state_verification_v1.md`

The V3 packet was superseded before execution by V4. Prove which prompt the runner actually executed.

## Prohibited actions

Do not:

- delete, prune, compact, reset, repair or move anything;
- start or stop Docker Desktop, WSL, containers or builders solely for this audit;
- pull, load, import, export, tag, rebuild or push an image;
- create a replacement builder;
- modify repositories, refs, commits, branches, worktrees or evidence files;
- call AWS APIs or access ECR;
- retrieve secret values;
- broaden into general disk cleanup;
- infer an execution merely because an authorization or recommendation existed.

If an inspection would mutate state, omit it and report the limitation.

## Required result

Return a concise incident report:

```text
WINDOWS_ARM64_ARTIFACT_CUSTODY_AUDIT_RESULT =
PROVEN | PROBABLE | INCONCLUSIVE

ARTIFACT_EVER_DURABLY_SELECTABLE =
YES | NO | NOT_PROVEN

PREVIOUS_PRESERVATION_PROOF =
COMPLETE_SELECTABLE_ARTIFACT_PROVEN |
COMPLETE_EXPORTABLE_CONTENT_PROVEN |
METADATA_AND_DESCRIPTOR_REFERENCES_ONLY |
INCOMPLETE_OR_FALSE_POSITIVE_VERIFICATION |
INCONCLUSIVE

LAST_PROVEN_COMPLETE_AVAILABILITY_UTC =
<timestamp or NOT_PROVEN>

FIRST_PROVEN_ABSENCE_UTC =
<timestamp>

LOSS_WINDOW =
<bounded interval or NOT_ESTABLISHABLE>

PROVEN_CAUSE =
<event or NONE>

PROBABLE_CAUSE =
<event or NONE>

AUTHORIZING_AUTHORITY =
<commit/path/blob/Parent decision or NONE>

EXECUTING_RUN =
<run identity or NONE>

AUTHORITY_SCOPE_COMPLIANCE =
PASS | FAIL | NOT_APPLICABLE | INCONCLUSIVE

SECOND_CLEANUP_EXECUTED =
YES | NO | INCONCLUSIVE

AUTOMATIC_BUILDKIT_GC_EVIDENCE =
PRESENT | ABSENT | INCONCLUSIVE

INITIAL_CLEANUP_CAUSATION =
PROVEN | PROBABLE | POSSIBLE_UNPROVEN | EXCLUDED

CONTROL_FAILURES =
<bounded list>

BLOCKERS =
<none or exact limitations>

NEXT_BOUNDARY =
RETURN_TO_PARENT_ONLY
```

Include a small event ledger containing timestamp, operation, authority, evidence source and causal classification. Do not publish the report to Git unless separately authorized.

## Subsequent program order — recorded, not authorized here

After this audit returns to the Parent, the intended order is:

1. AWS worker performs a complete ARM64 readiness preflight covering required disk, Docker/BuildKit health, exact canonical inputs, dependencies, environment, build outputs, validation, durable artifact custody, rollback and cleanup boundaries.
2. Parent approves an autonomous ARM64 construction envelope that requires no routine user or Parent checkpoints; escalation occurs only on a genuine circuit breaker or authority expansion.
3. `WINDOWS_DISK_CAPACITY_RECOVERY_PARENT` performs one comprehensive, evidence-backed cleanup to reach a target of 25–30 GB free, including removal of proven-unneeded ARM64 artifacts while preserving every item required by the approved build plan.
4. Readiness is reverified after cleanup.
5. Only then is the ARM64 build triggered.
6. A remote VM remains deferred unless the completed readiness preflight shows that the local execution plane cannot safely or reliably execute the build.

This section records sequencing only. It authorizes none of those later actions.
