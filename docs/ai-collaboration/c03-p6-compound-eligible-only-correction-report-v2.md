C03_P6_COMPOUND_ELIGIBLE_ONLY_CORRECTION_REPORT_V2

```text
RESULT = READY_FOR_SA_REVIEW
RECOVERY_AUTHORITY_SHA = 89e3a8dcc4abc6075a33cc0136d410383a469431
RECOVERY_AUTHORITY_TREE = 63004fd8ba9446562fbbee8250f82f6a7595b486
BACKEND_STARTING_SHA = 3712f56930a8785b5cb61a9ed31fb43b240cb421
BACKEND_STARTING_TREE = 16d559c9f0e349717b31f41c6ba2fa8b39213060
DEFECT_1 = GLOBAL_VALID_INVITATION_VISIBILITY_ENTITLEMENT
DEFECT_2 = VALID_INVITATION_SUPPRESSES_ELIGIBLE_ONLY_ELIGIBILITY_EVALUATION
ROOT_CAUSE = COMPOUND_ELIGIBLE_ONLY_INVITATION_ENTITLEMENT_DRIFT
PRODUCT_CHANGE = NONE
ARCHITECTURE_CHANGE = NONE
P6_CORRECTED_BACKEND_SHA = aebeb85fd6bba37f88c3805c213c61e7f63b2f5f
P6_CORRECTED_BACKEND_TREE = 86c5bb769598dd19a634dcd867350e53eaa06f75
BACKEND_FILES_CHANGED =
src/features/campaign-opportunities/campaign-opportunity-policy.service.ts
src/features/campaign-opportunities/campaign-opportunity.service.ts
src/features/campaign-opportunities/opportunity-contract.test.ts
src/features/campaign-opportunities/opportunity-policy.test.ts
src/features/campaign-opportunities/opportunity.postgres.test.ts
POLICY_VISIBILITY_SPECIFIC = PASS
SERVICE_ELIGIBILITY_WITH_VALID_INVITE = PASS
ELIGIBLE_VALID_INVITE = PASS
INELIGIBLE_VALID_INVITE = PASS
UNAVAILABLE_VALID_INVITE = PASS
INVITE_ONLY_VALID_INELIGIBLE = PASS
INVITE_ONLY_VALID_UNAVAILABLE = PASS
PUBLIC_INDEPENDENCE = PASS
COLLECTION_AUTHORIZATION = PASS
SUBMIT_REVALIDATION = PASS
INVITATION_CONTEXT_PRESERVED = PASS
ELIGIBLE_ONLY_REDACTION = PASS
FOCUSED_POLICY_TESTS = 4949 passed / 6 files; policy 4877 tests, including 4860 finite cells
FOCUSED_POSTGRESQL = 61 passed / 2 files (Opportunity 15; Application 46)
FULL_BACKEND_SUITE = 6206 passed / 765 guarded skipped / 0 failed; 251 files; command duration 852319 ms
BACKEND_BUILD = PASS
BACKEND_STARTUP = PASS
SECURITY_DIFF = PASS
SCHEMA_CHANGE = NONE
MIGRATION_CHANGE = NONE
MIGRATION_COUNT = 79
P6_HARNESS_CORRECTION_COUNT = 2
P6_TRACKED_CORRECTION_COUNT = 1
BACKEND_COMMIT = aebeb85fd6bba37f88c3805c213c61e7f63b2f5f
BACKEND_PUSH = PASS
BACKEND_FETCH_BACK = PASS
BACKEND_CLEAN_WORKTREE = YES
FRONTEND_CHANGE = NONE
FRONTEND_SHA = 82ed3c9ef849be8353565a1901b6f5fb065c37e1
RECOVERY_AUTHORITY_CHANGE = NONE
EVIDENCE_BUNDLE = C:\Users\piyus\Documents\Codex\2026-09-05\files-pasted-by-the-user-c\outputs\C03_P6_COMPOUND_ELIGIBLE_ONLY_CORRECTION_EVIDENCE.zip
EVIDENCE_BUNDLE_SHA256 = fd7434434fc5bc9d423a00aaa94c24f7e7089ae1a72a5101c9447fa44c4c03f9
P6_MATRIX_RESUMED = NO
P6_RUNTIME_GATES_RESUMED = NO
P7_STARTED = NO
PRODUCT_QUESTIONS = NONE
ARCHITECTURE_CONFLICTS = NONE
NEXT_AUTHORIZED_BOUNDARY = SA_REVIEW_ONLY
```

Validation ran against the final production changes. Test-only formatting was applied by ESLint; its auxiliary token checker failed due to template handling and is not counted as evidence. Two external harness corrections (template comparison and HTTP fixture isolation) are recorded separately from the one committed backend correction. Initial dependency-network and PostgreSQL timeout failures are preserved separately; final install, all 46 Application PostgreSQL tests, changed-file lint, and required correction gates pass. No assertions were weakened. No full P6 matrix, migration replay, browser lane, P7, frontend/recovery write, or production/provider operation occurred.
