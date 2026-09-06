-- BRAND PAYOUTS M1 V2 — EXACT PROPOSAL
-- NOT_APPROVED_NOT_APPLIED
-- Base backend 5dc9eef4923ae383b94b36cbf9bbb632b1b84cf1
-- Base tree 6c01d65e5a32eecfcd7e42715923ea8478d071fb
-- Additive only. No backfill. Do not execute before BP-G10 approval.

CREATE TYPE "FinancialReserveApprovalStatus" AS ENUM
  ('APPROVED_AWAITING_EXECUTION','EXECUTING','AWAITING_FUNDS','ACTION_REQUIRED','COMPLETED','SUPERSEDED');
CREATE TYPE "FinancialReserveExecutionOutcome" AS ENUM
  ('CLAIMED','SUCCEEDED','SHORTFALL','RETRYABLE_FAILURE','TERMINAL_FAILURE','SUPERSEDED');
CREATE TYPE "PayoutObligationProvenanceMode" AS ENUM ('LEGACY_UNRECONCILED','CANONICAL_C04');
CREATE TYPE "PayoutObligationLifecycle" AS ENUM
  ('SCHEDULED','READY_QUEUED','PROCESSING','HELD_RELEASE_PENDING','SETTLED','FAILED_RETRYABLE','ACTION_REQUIRED','PARTIAL_REVERSAL','FULL_REVERSAL','LEGACY_UNRECONCILED');
CREATE TYPE "PayoutObligationGate" AS ENUM
  ('NOT_YET_DUE','CREATOR_SETUP_REQUIRED','UNSUPPORTED_GEOGRAPHY_OR_RAIL','PROVIDER_REVIEW','FUNDING_REQUIRED','RESOLUTION_BLOCKED','PROVIDER_UNAVAILABLE','READY');
CREATE TYPE "PayoutTransferSnapshotMode" AS ENUM ('LEGACY_UNRECONCILED','CURRENT_C05');
CREATE TYPE "PayoutTransferDisposition" AS ENUM
  ('SUCCEEDED','RETRYABLE_FAILURE','TERMINAL_FAILURE','AMBIGUOUS_RECONCILIATION_REQUIRED');
CREATE TYPE "PayoutReceiptEntityType" AS ENUM ('TRANSFER_ATTEMPT','OBLIGATION');
CREATE TYPE "PayoutReceiptEventClass" AS ENUM
  ('TRANSFER_ACCEPTED','TRANSFER_PROCESSED','TRANSFER_FAILED','TRANSFER_HELD','SETTLEMENT_RECORDED');

CREATE TABLE "financial_reserve_approvals" (
  "id" TEXT PRIMARY KEY,
  "reserve_instruction_id" TEXT NOT NULL,
  "request_id" TEXT NOT NULL,
  "collaboration_id" TEXT NOT NULL,
  "commercial_agreement_id" TEXT NOT NULL,
  "brand_profile_id" TEXT NOT NULL,
  "instruction_version" INTEGER NOT NULL,
  "instruction_hash" CHAR(64) NOT NULL,
  "agreement_version" INTEGER NOT NULL,
  "agreement_hash" CHAR(64) NOT NULL,
  "creator_fee" DECIMAL(14,2) NOT NULL,
  "platform_commission_amount" DECIMAL(14,2) NOT NULL,
  "platform_commission_gst_amount" DECIMAL(14,2) NOT NULL,
  "approved_reserve_amount" DECIMAL(14,2) NOT NULL,
  "currency" VARCHAR(3) NOT NULL,
  "requested_by_user_id" TEXT NOT NULL,
  "requested_by_membership_id" TEXT NOT NULL,
  "requested_by_role" "BrandRole" NOT NULL,
  "requested_at" TIMESTAMP(3) NOT NULL,
  "approved_by_user_id" TEXT NOT NULL,
  "approved_by_membership_id" TEXT NOT NULL,
  "approved_by_role" "BrandRole" NOT NULL,
  "approved_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "status" "FinancialReserveApprovalStatus" NOT NULL DEFAULT 'APPROVED_AWAITING_EXECUTION',
  "state_version" INTEGER NOT NULL DEFAULT 0,
  "idempotency_key" TEXT NOT NULL,
  "execution_started_at" TIMESTAMP(3),
  "execution_completed_at" TIMESTAMP(3),
  "execution_failed_at" TIMESTAMP(3),
  "failure_code" VARCHAR(80),
  "escrow_lock_id" TEXT,
  "ledger_transaction_id" TEXT,
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "bp_m1_reserve_instruction_key" UNIQUE ("reserve_instruction_id"),
  CONSTRAINT "bp_m1_reserve_request_key" UNIQUE ("request_id"),
  CONSTRAINT "bp_m1_reserve_brand_idempotency_key" UNIQUE ("brand_profile_id","idempotency_key"),
  CONSTRAINT "bp_m1_reserve_escrow_lock_key" UNIQUE ("escrow_lock_id"),
  CONSTRAINT "bp_m1_reserve_ledger_key" UNIQUE ("ledger_transaction_id"),
  CONSTRAINT "bp_m1_reserve_amounts_check" CHECK
    ("creator_fee">=0 AND "platform_commission_amount">=0 AND "platform_commission_gst_amount">=0
     AND "approved_reserve_amount">0
     AND "approved_reserve_amount"="creator_fee"+"platform_commission_amount"+"platform_commission_gst_amount"),
  CONSTRAINT "bp_m1_reserve_currency_check" CHECK ("currency"='INR'),
  CONSTRAINT "bp_m1_reserve_hash_check" CHECK
    ("instruction_hash" ~ '^[0-9a-f]{64}$' AND "agreement_hash" ~ '^[0-9a-f]{64}$'),
  CONSTRAINT "bp_m1_reserve_version_check" CHECK
    ("instruction_version">0 AND "agreement_version">0 AND "state_version">=0),
  CONSTRAINT "bp_m1_reserve_approver_role_check" CHECK
    ("approved_by_role" IN ('BRAND_OWNER','FINANCE_ADMIN')),
  CONSTRAINT "bp_m1_reserve_time_check" CHECK
    ("requested_at"<="approved_at" AND "approved_at"<="created_at"
     AND ("execution_started_at" IS NULL OR "execution_started_at">="approved_at")
     AND ("execution_completed_at" IS NULL OR "execution_completed_at">="execution_started_at")
     AND ("execution_failed_at" IS NULL OR "execution_failed_at">="execution_started_at")),
  CONSTRAINT "bp_m1_reserve_instruction_fk" FOREIGN KEY ("reserve_instruction_id")
    REFERENCES "collaboration_reserve_instructions"("id") ON UPDATE RESTRICT ON DELETE RESTRICT,
  CONSTRAINT "bp_m1_reserve_collaboration_fk" FOREIGN KEY ("collaboration_id")
    REFERENCES "collaborations"("id") ON UPDATE RESTRICT ON DELETE RESTRICT,
  CONSTRAINT "bp_m1_reserve_agreement_fk" FOREIGN KEY ("commercial_agreement_id")
    REFERENCES "collaboration_commercial_agreements"("id") ON UPDATE RESTRICT ON DELETE RESTRICT,
  CONSTRAINT "bp_m1_reserve_brand_fk" FOREIGN KEY ("brand_profile_id")
    REFERENCES "brand_profiles"("id") ON UPDATE RESTRICT ON DELETE RESTRICT,
  CONSTRAINT "bp_m1_reserve_requester_user_fk" FOREIGN KEY ("requested_by_user_id")
    REFERENCES "users"("id") ON UPDATE RESTRICT ON DELETE RESTRICT,
  CONSTRAINT "bp_m1_reserve_requester_membership_fk" FOREIGN KEY ("requested_by_membership_id")
    REFERENCES "brand_team_members"("membership_id") ON UPDATE RESTRICT ON DELETE RESTRICT,
  CONSTRAINT "bp_m1_reserve_approver_user_fk" FOREIGN KEY ("approved_by_user_id")
    REFERENCES "users"("id") ON UPDATE RESTRICT ON DELETE RESTRICT,
  CONSTRAINT "bp_m1_reserve_approver_membership_fk" FOREIGN KEY ("approved_by_membership_id")
    REFERENCES "brand_team_members"("membership_id") ON UPDATE RESTRICT ON DELETE RESTRICT,
  CONSTRAINT "bp_m1_reserve_lock_fk" FOREIGN KEY ("escrow_lock_id")
    REFERENCES "collaboration_escrow_locks"("lock_id") ON UPDATE RESTRICT ON DELETE RESTRICT,
  CONSTRAINT "bp_m1_reserve_ledger_fk" FOREIGN KEY ("ledger_transaction_id")
    REFERENCES "escrow_transaction_ledger"("transaction_id") ON UPDATE RESTRICT ON DELETE RESTRICT
);
CREATE INDEX "bp_m1_reserve_claim_idx" ON "financial_reserve_approvals"("status","updated_at","id");
CREATE INDEX "bp_m1_reserve_brand_status_idx" ON "financial_reserve_approvals"("brand_profile_id","status","created_at");
CREATE INDEX "bp_m1_reserve_collaboration_idx" ON "financial_reserve_approvals"("collaboration_id");

CREATE TABLE "financial_reserve_execution_attempts" (
  "id" TEXT PRIMARY KEY,
  "approval_id" TEXT NOT NULL,
  "attempt_sequence" INTEGER NOT NULL,
  "claim_token" TEXT NOT NULL,
  "lease_expires_at" TIMESTAMP(3) NOT NULL,
  "outcome" "FinancialReserveExecutionOutcome" NOT NULL DEFAULT 'CLAIMED',
  "failure_code" VARCHAR(80),
  "started_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "completed_at" TIMESTAMP(3),
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "bp_m1_attempt_approval_sequence_key" UNIQUE ("approval_id","attempt_sequence"),
  CONSTRAINT "bp_m1_attempt_claim_key" UNIQUE ("claim_token"),
  CONSTRAINT "bp_m1_attempt_sequence_check" CHECK ("attempt_sequence">0),
  CONSTRAINT "bp_m1_attempt_terminal_evidence_check" CHECK
    (("outcome"='CLAIMED' AND "completed_at" IS NULL AND "failure_code" IS NULL)
     OR ("outcome"='SUCCEEDED' AND "completed_at" IS NOT NULL AND "failure_code" IS NULL)
     OR ("outcome" IN ('SHORTFALL','RETRYABLE_FAILURE','TERMINAL_FAILURE','SUPERSEDED')
         AND "completed_at" IS NOT NULL AND "failure_code" IS NOT NULL)),
  CONSTRAINT "bp_m1_attempt_time_check" CHECK
    ("lease_expires_at">"started_at" AND ("completed_at" IS NULL OR "completed_at">="started_at")),
  CONSTRAINT "bp_m1_attempt_approval_fk" FOREIGN KEY ("approval_id")
    REFERENCES "financial_reserve_approvals"("id") ON UPDATE RESTRICT ON DELETE RESTRICT
);
CREATE UNIQUE INDEX "bp_m1_attempt_one_success_key"
  ON "financial_reserve_execution_attempts"("approval_id") WHERE "outcome"='SUCCEEDED';
CREATE INDEX "bp_m1_attempt_lease_idx"
  ON "financial_reserve_execution_attempts"("outcome","lease_expires_at","approval_id");

ALTER TABLE "creator_payout_obligations"
  ADD COLUMN "provenance_mode" "PayoutObligationProvenanceMode" NOT NULL DEFAULT 'LEGACY_UNRECONCILED',
  ADD COLUMN "authority_instruction_id" TEXT,
  ADD COLUMN "authority_instruction_kind" VARCHAR(48),
  ADD COLUMN "authority_instruction_version" INTEGER,
  ADD COLUMN "authority_instruction_hash" CHAR(64),
  ADD COLUMN "commercial_agreement_id" TEXT,
  ADD COLUMN "agreement_version" INTEGER,
  ADD COLUMN "agreement_hash" CHAR(64),
  ADD COLUMN "intake_recorded_at" TIMESTAMP(3),
  ADD COLUMN "settlement_eligible_at" TIMESTAMP(3),
  ADD COLUMN "payment_term_snapshot" "UcePayoutTerms",
  ADD COLUMN "due_rule_version" VARCHAR(40),
  ADD COLUMN "due_evidence_recorded_at" TIMESTAMP(3),
  ADD COLUMN "lifecycle" "PayoutObligationLifecycle",
  ADD COLUMN "current_gate" "PayoutObligationGate",
  ADD COLUMN "amount_settled" DECIMAL(15,4) NOT NULL DEFAULT 0,
  ADD COLUMN "amount_reversed" DECIMAL(15,4) NOT NULL DEFAULT 0,
  ADD COLUMN "amount_outstanding" DECIMAL(15,4),
  ADD CONSTRAINT "bp_m1_obligation_authority_key" UNIQUE ("authority_instruction_id"),
  ADD CONSTRAINT "bp_m1_obligation_authority_fk" FOREIGN KEY ("authority_instruction_id")
    REFERENCES "collaboration_financial_authority_instructions"("id") ON UPDATE RESTRICT ON DELETE RESTRICT,
  ADD CONSTRAINT "bp_m1_obligation_agreement_fk" FOREIGN KEY ("commercial_agreement_id")
    REFERENCES "collaboration_commercial_agreements"("id") ON UPDATE RESTRICT ON DELETE RESTRICT,
  ADD CONSTRAINT "bp_m1_obligation_amounts_check" CHECK
    ("amount_settled">=0 AND "amount_reversed">=0 AND "amount_reversed"<="amount_settled"
     AND ("amount_outstanding" IS NULL OR ("amount_outstanding">=0
       AND "amount_outstanding"="entitlement_amount"-"amount_settled"+"amount_reversed"))),
  ADD CONSTRAINT "bp_m1_obligation_time_check" CHECK
    (("intake_recorded_at" IS NULL OR "intake_recorded_at">="instruction_issued_at")
     AND ("due_evidence_recorded_at" IS NULL OR "due_evidence_recorded_at">="intake_recorded_at")
     AND ("payment_due_at" IS NULL OR "payment_due_at">="settlement_eligible_at"));
CREATE INDEX "bp_m1_obligation_due_work_idx"
  ON "creator_payout_obligations"("lifecycle","current_gate","payment_due_at","obligation_id");
CREATE INDEX "bp_m1_obligation_authority_lookup_idx"
  ON "creator_payout_obligations"("collaboration_id","commercial_agreement_id","authority_instruction_version");

ALTER TABLE "route_transfer_attempts"
  ADD COLUMN "snapshot_mode" "PayoutTransferSnapshotMode" NOT NULL DEFAULT 'LEGACY_UNRECONCILED',
  ADD COLUMN "destination_id" TEXT,
  ADD COLUMN "destination_version" INTEGER,
  ADD COLUMN "provider_mapping_id" TEXT,
  ADD COLUMN "mapping_provider" VARCHAR(40),
  ADD COLUMN "queued_at" TIMESTAMP(3),
  ADD COLUMN "execution_started_at" TIMESTAMP(3),
  ADD COLUMN "provider_request_completed_at" TIMESTAMP(3),
  ADD COLUMN "failure_recorded_at" TIMESTAMP(3),
  ADD COLUMN "final_disposition" "PayoutTransferDisposition",
  ADD COLUMN "final_disposition_recorded_at" TIMESTAMP(3),
  ADD CONSTRAINT "bp_m1_transfer_destination_fk" FOREIGN KEY ("destination_id")
    REFERENCES "creator_payout_destinations"("destination_id") ON UPDATE RESTRICT ON DELETE RESTRICT,
  ADD CONSTRAINT "bp_m1_transfer_mapping_fk" FOREIGN KEY ("provider_mapping_id")
    REFERENCES "creator_payout_destination_provider_mappings"("mapping_id") ON UPDATE RESTRICT ON DELETE RESTRICT,
  ADD CONSTRAINT "bp_m1_transfer_time_check" CHECK
    (("execution_started_at" IS NULL OR "execution_started_at">="queued_at")
     AND ("provider_request_completed_at" IS NULL OR "provider_request_completed_at">="execution_started_at")
     AND ("failure_recorded_at" IS NULL OR "failure_recorded_at">="execution_started_at")
     AND ("final_disposition_recorded_at" IS NULL OR "final_disposition_recorded_at">="execution_started_at")),
  ADD CONSTRAINT "bp_m1_transfer_terminal_check" CHECK
    (("final_disposition" IS NULL AND "final_disposition_recorded_at" IS NULL)
     OR ("final_disposition" IS NOT NULL AND "final_disposition_recorded_at" IS NOT NULL
       AND (("final_disposition"='SUCCEEDED' AND "failure_recorded_at" IS NULL)
         OR ("final_disposition"<>'SUCCEEDED' AND "failure_recorded_at" IS NOT NULL))));
CREATE INDEX "bp_m1_transfer_work_idx"
  ON "route_transfer_attempts"("final_disposition","queued_at","transfer_attempt_id");
CREATE INDEX "bp_m1_transfer_destination_lookup_idx"
  ON "route_transfer_attempts"("destination_id","destination_version","provider_mapping_id");

CREATE TABLE "payout_reconciled_receipts" (
  "id" TEXT PRIMARY KEY,
  "dedupe_identity" TEXT NOT NULL UNIQUE,
  "entity_type" "PayoutReceiptEntityType" NOT NULL,
  "event_class" "PayoutReceiptEventClass" NOT NULL,
  "transfer_attempt_id" TEXT NOT NULL,
  "obligation_id" TEXT NOT NULL,
  "received_at" TIMESTAMP(3) NOT NULL,
  "provider_occurred_at" TIMESTAMP(3),
  "reconciled_at" TIMESTAMP(3) NOT NULL,
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "bp_m1_receipt_transfer_fk" FOREIGN KEY ("transfer_attempt_id")
    REFERENCES "route_transfer_attempts"("transfer_attempt_id") ON UPDATE RESTRICT ON DELETE RESTRICT,
  CONSTRAINT "bp_m1_receipt_obligation_fk" FOREIGN KEY ("obligation_id")
    REFERENCES "creator_payout_obligations"("obligation_id") ON UPDATE RESTRICT ON DELETE RESTRICT,
  CONSTRAINT "bp_m1_receipt_time_check" CHECK
    (("provider_occurred_at" IS NULL OR "provider_occurred_at"<="received_at")
     AND "received_at"<="reconciled_at" AND "reconciled_at"<="created_at")
);
CREATE INDEX "bp_m1_receipt_transfer_time_idx"
  ON "payout_reconciled_receipts"("transfer_attempt_id","received_at","id");
CREATE INDEX "bp_m1_receipt_obligation_time_idx"
  ON "payout_reconciled_receipts"("obligation_id","received_at","id");

CREATE FUNCTION "bp_m1_validate_reserve_approval"() RETURNS trigger LANGUAGE plpgsql AS $$
DECLARE i "collaboration_reserve_instructions"%ROWTYPE; rm "brand_team_members"%ROWTYPE; am "brand_team_members"%ROWTYPE;
BEGIN
  SELECT * INTO STRICT i FROM "collaboration_reserve_instructions" WHERE "id"=NEW."reserve_instruction_id";
  IF ROW(NEW."request_id",NEW."collaboration_id",NEW."commercial_agreement_id",NEW."brand_profile_id",
         NEW."instruction_version",NEW."instruction_hash",NEW."agreement_version",NEW."agreement_hash",
         NEW."creator_fee",NEW."platform_commission_amount",NEW."platform_commission_gst_amount",
         NEW."approved_reserve_amount",NEW."currency",NEW."requested_by_user_id",NEW."requested_at")
     IS DISTINCT FROM
     ROW(i."request_id",i."collaboration_id",i."commercial_agreement_id",i."brand_profile_id",
         i."instruction_version",i."instruction_hash",i."agreement_version",i."agreement_hash",
         i."creator_fee",i."platform_commission_amount",i."platform_commission_gst_amount",
         i."reserve_amount",i."currency",i."requested_by_user_id",i."requested_at") THEN
    RAISE EXCEPTION 'BP_M1_C04_RESERVE_AUTHORITY_MISMATCH';
  END IF;
  SELECT * INTO STRICT rm FROM "brand_team_members" WHERE "membership_id"=NEW."requested_by_membership_id";
  SELECT * INTO STRICT am FROM "brand_team_members" WHERE "membership_id"=NEW."approved_by_membership_id";
  IF ROW(rm."brand_id",rm."user_id",rm."role") IS DISTINCT FROM ROW(NEW."brand_profile_id",NEW."requested_by_user_id",NEW."requested_by_role")
     OR ROW(am."brand_id",am."user_id",am."role") IS DISTINCT FROM ROW(NEW."brand_profile_id",NEW."approved_by_user_id",NEW."approved_by_role")
     OR NOT rm."is_active" OR NOT am."is_active" THEN
    RAISE EXCEPTION 'BP_M1_BRAND_MEMBERSHIP_AUDIT_MISMATCH';
  END IF;
  RETURN NEW;
END $$;

CREATE FUNCTION "bp_m1_guard_reserve_approval"() RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN
  IF TG_OP='DELETE' THEN RAISE EXCEPTION 'BP_M1_RESERVE_APPROVAL_DELETE_FORBIDDEN'; END IF;
  IF ROW(NEW."id",NEW."reserve_instruction_id",NEW."request_id",NEW."collaboration_id",NEW."commercial_agreement_id",NEW."brand_profile_id",
         NEW."instruction_version",NEW."instruction_hash",NEW."agreement_version",NEW."agreement_hash",NEW."creator_fee",
         NEW."platform_commission_amount",NEW."platform_commission_gst_amount",NEW."approved_reserve_amount",NEW."currency",
         NEW."requested_by_user_id",NEW."requested_by_membership_id",NEW."requested_by_role",NEW."requested_at",
         NEW."approved_by_user_id",NEW."approved_by_membership_id",NEW."approved_by_role",NEW."approved_at",NEW."idempotency_key",NEW."created_at")
     IS DISTINCT FROM
     ROW(OLD."id",OLD."reserve_instruction_id",OLD."request_id",OLD."collaboration_id",OLD."commercial_agreement_id",OLD."brand_profile_id",
         OLD."instruction_version",OLD."instruction_hash",OLD."agreement_version",OLD."agreement_hash",OLD."creator_fee",
         OLD."platform_commission_amount",OLD."platform_commission_gst_amount",OLD."approved_reserve_amount",OLD."currency",
         OLD."requested_by_user_id",OLD."requested_by_membership_id",OLD."requested_by_role",OLD."requested_at",
         OLD."approved_by_user_id",OLD."approved_by_membership_id",OLD."approved_by_role",OLD."approved_at",OLD."idempotency_key",OLD."created_at")
     OR NEW."state_version"<>OLD."state_version"+1
     OR (OLD."escrow_lock_id" IS NOT NULL AND NEW."escrow_lock_id" IS DISTINCT FROM OLD."escrow_lock_id")
     OR (OLD."ledger_transaction_id" IS NOT NULL AND NEW."ledger_transaction_id" IS DISTINCT FROM OLD."ledger_transaction_id")
     OR (OLD."execution_started_at" IS NOT NULL AND NEW."execution_started_at" IS DISTINCT FROM OLD."execution_started_at")
     OR (OLD."execution_completed_at" IS NOT NULL AND NEW."execution_completed_at" IS DISTINCT FROM OLD."execution_completed_at")
     OR (OLD."execution_failed_at" IS NOT NULL AND NEW."execution_failed_at" IS DISTINCT FROM OLD."execution_failed_at") THEN
    RAISE EXCEPTION 'BP_M1_RESERVE_APPROVAL_IMMUTABLE_OR_VERSION_VIOLATION';
  END IF;
  IF NOT ((OLD."status"='APPROVED_AWAITING_EXECUTION' AND NEW."status" IN ('EXECUTING','SUPERSEDED'))
    OR (OLD."status"='EXECUTING' AND NEW."status" IN ('COMPLETED','AWAITING_FUNDS','ACTION_REQUIRED'))
    OR (OLD."status"='AWAITING_FUNDS' AND NEW."status" IN ('EXECUTING','SUPERSEDED'))
    OR (OLD."status"='ACTION_REQUIRED' AND NEW."status"='EXECUTING')) THEN
    RAISE EXCEPTION 'BP_M1_ILLEGAL_RESERVE_STATUS_TRANSITION';
  END IF;
  RETURN NEW;
END $$;
CREATE TRIGGER "bp_m1_reserve_validate_insert" BEFORE INSERT ON "financial_reserve_approvals" FOR EACH ROW EXECUTE FUNCTION "bp_m1_validate_reserve_approval"();
CREATE TRIGGER "bp_m1_reserve_guard_update_delete" BEFORE UPDATE OR DELETE ON "financial_reserve_approvals" FOR EACH ROW EXECUTE FUNCTION "bp_m1_guard_reserve_approval"();

CREATE FUNCTION "bp_m1_guard_reserve_attempt"() RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN
  IF TG_OP='DELETE' THEN RAISE EXCEPTION 'BP_M1_RESERVE_ATTEMPT_DELETE_FORBIDDEN'; END IF;
  IF ROW(NEW."id",NEW."approval_id",NEW."attempt_sequence",NEW."claim_token",NEW."lease_expires_at",NEW."started_at",NEW."created_at")
     IS DISTINCT FROM ROW(OLD."id",OLD."approval_id",OLD."attempt_sequence",OLD."claim_token",OLD."lease_expires_at",OLD."started_at",OLD."created_at")
     OR OLD."outcome"<>'CLAIMED' OR NEW."outcome"='CLAIMED'
     OR OLD."completed_at" IS NOT NULL OR NEW."completed_at" IS NULL
     OR OLD."failure_code" IS NOT NULL THEN
    RAISE EXCEPTION 'BP_M1_ILLEGAL_RESERVE_ATTEMPT_TRANSITION';
  END IF;
  RETURN NEW;
END $$;
CREATE TRIGGER "bp_m1_attempt_guard_update_delete" BEFORE UPDATE OR DELETE ON "financial_reserve_execution_attempts" FOR EACH ROW EXECUTE FUNCTION "bp_m1_guard_reserve_attempt"();

CREATE FUNCTION "bp_m1_validate_obligation"() RETURNS trigger LANGUAGE plpgsql AS $$
DECLARE i "collaboration_financial_authority_instructions"%ROWTYPE;
BEGIN
  IF TG_OP='DELETE' THEN
    IF OLD."provenance_mode"='CANONICAL_C04' THEN RAISE EXCEPTION 'BP_M1_CANONICAL_OBLIGATION_DELETE_FORBIDDEN'; END IF;
    RETURN OLD;
  END IF;
  IF TG_OP='INSERT' AND NEW."provenance_mode"<>'CANONICAL_C04' THEN RAISE EXCEPTION 'BP_M1_NEW_OBLIGATION_REQUIRES_CANONICAL_C04'; END IF;
  IF NEW."provenance_mode"='CANONICAL_C04' THEN
    IF NEW."authority_instruction_id" IS NULL OR NEW."authority_instruction_kind" IS NULL OR NEW."authority_instruction_version" IS NULL
       OR NEW."authority_instruction_hash" IS NULL OR NEW."commercial_agreement_id" IS NULL OR NEW."agreement_version" IS NULL
       OR NEW."agreement_hash" IS NULL OR NEW."intake_recorded_at" IS NULL OR NEW."settlement_eligible_at" IS NULL
       OR NEW."payment_term_snapshot" IS NULL OR NEW."due_rule_version" IS NULL OR NEW."due_evidence_recorded_at" IS NULL
       OR NEW."payment_due_at" IS NULL OR NEW."amount_outstanding" IS NULL OR NEW."lifecycle" IS NULL OR NEW."current_gate" IS NULL THEN
      RAISE EXCEPTION 'BP_M1_INCOMPLETE_CANONICAL_OBLIGATION_PROVENANCE';
    END IF;
    SELECT * INTO STRICT i FROM "collaboration_financial_authority_instructions" WHERE "id"=NEW."authority_instruction_id";
    IF ROW(NEW."authority_instruction_kind",NEW."authority_instruction_version",NEW."authority_instruction_hash",
           NEW."collaboration_id",NEW."commercial_agreement_id",NEW."agreement_version",NEW."agreement_hash",
           NEW."entitlement_amount",NEW."currency",NEW."settlement_eligible_at")
       IS DISTINCT FROM ROW(i."kind",i."instruction_version",i."instruction_hash",i."collaboration_id",
           i."commercial_agreement_id",i."agreement_version",i."agreement_hash",i."creator_entitlement_effect",i."currency",i."settlement_eligible_at") THEN
      RAISE EXCEPTION 'BP_M1_C04_OBLIGATION_AUTHORITY_MISMATCH';
    END IF;
  END IF;
  IF TG_OP='UPDATE' AND ROW(NEW."obligation_id",NEW."settlement_instruction_id",NEW."provenance_mode",NEW."authority_instruction_id",NEW."authority_instruction_kind",
      NEW."authority_instruction_version",NEW."authority_instruction_hash",NEW."collaboration_id",NEW."commercial_agreement_id",
      NEW."agreement_version",NEW."agreement_hash",NEW."vault_id",NEW."brand_id",NEW."creator_profile_id",NEW."payout_profile_id",
      NEW."obligation_type",NEW."entitlement_amount",NEW."currency",NEW."instruction_issued_at",
      NEW."intake_recorded_at",NEW."settlement_eligible_at",NEW."payment_term_snapshot",NEW."due_rule_version",
      NEW."due_evidence_recorded_at",NEW."payment_due_at") IS DISTINCT FROM ROW(OLD."obligation_id",OLD."settlement_instruction_id",OLD."provenance_mode",OLD."authority_instruction_id",
      OLD."authority_instruction_kind",OLD."authority_instruction_version",OLD."authority_instruction_hash",OLD."collaboration_id",
      OLD."commercial_agreement_id",OLD."agreement_version",OLD."agreement_hash",OLD."vault_id",OLD."brand_id",OLD."creator_profile_id",OLD."payout_profile_id",
      OLD."obligation_type",OLD."entitlement_amount",OLD."currency",
      OLD."instruction_issued_at",OLD."intake_recorded_at",OLD."settlement_eligible_at",OLD."payment_term_snapshot",
      OLD."due_rule_version",OLD."due_evidence_recorded_at",OLD."payment_due_at") THEN
    RAISE EXCEPTION 'BP_M1_OBLIGATION_PROVENANCE_IMMUTABLE';
  END IF;
  RETURN NEW;
END $$;
CREATE TRIGGER "bp_m1_obligation_validate_guard" BEFORE INSERT OR UPDATE OR DELETE ON "creator_payout_obligations" FOR EACH ROW EXECUTE FUNCTION "bp_m1_validate_obligation"();

CREATE FUNCTION "bp_m1_validate_transfer"() RETURNS trigger LANGUAGE plpgsql AS $$
DECLARE d "creator_payout_destinations"%ROWTYPE; m "creator_payout_destination_provider_mappings"%ROWTYPE; o "creator_payout_obligations"%ROWTYPE;
BEGIN
  IF TG_OP='DELETE' THEN
    IF OLD."snapshot_mode"='CURRENT_C05' THEN RAISE EXCEPTION 'BP_M1_CANONICAL_TRANSFER_DELETE_FORBIDDEN'; END IF;
    RETURN OLD;
  END IF;
  IF TG_OP='UPDATE' AND OLD."final_disposition" IS NOT NULL THEN RAISE EXCEPTION 'BP_M1_TERMINAL_TRANSFER_IMMUTABLE'; END IF;
  IF NEW."snapshot_mode"='CURRENT_C05' THEN
    IF NEW."destination_id" IS NULL OR NEW."destination_version" IS NULL OR NEW."provider_mapping_id" IS NULL
       OR NEW."mapping_provider" IS NULL OR NEW."queued_at" IS NULL THEN RAISE EXCEPTION 'BP_M1_INCOMPLETE_C05_SNAPSHOT'; END IF;
    SELECT * INTO STRICT d FROM "creator_payout_destinations" WHERE "destination_id"=NEW."destination_id";
    SELECT * INTO STRICT m FROM "creator_payout_destination_provider_mappings" WHERE "mapping_id"=NEW."provider_mapping_id";
    SELECT * INTO STRICT o FROM "creator_payout_obligations" WHERE "obligation_id"=NEW."obligation_id";
    IF ROW(d."version",d."creator_profile_id") IS DISTINCT FROM ROW(NEW."destination_version",o."creator_profile_id")
       OR ROW(m."destination_id",m."destination_version",m."provider") IS DISTINCT FROM ROW(NEW."destination_id",NEW."destination_version",NEW."mapping_provider")
       OR NEW."provider"<>NEW."mapping_provider" THEN RAISE EXCEPTION 'BP_M1_C05_DESTINATION_MAPPING_MISMATCH'; END IF;
  END IF;
  IF TG_OP='UPDATE' AND (ROW(NEW."transfer_attempt_id",NEW."obligation_id",NEW."attempt_sequence",NEW."profile_state_version",NEW."provider",NEW."idempotency_key",NEW."amount",NEW."currency",
      NEW."snapshot_mode",NEW."destination_id",NEW."destination_version",NEW."provider_mapping_id",NEW."mapping_provider",NEW."queued_at")
      IS DISTINCT FROM ROW(OLD."transfer_attempt_id",OLD."obligation_id",OLD."attempt_sequence",OLD."profile_state_version",OLD."provider",OLD."idempotency_key",OLD."amount",OLD."currency",
      OLD."snapshot_mode",OLD."destination_id",OLD."destination_version",OLD."provider_mapping_id",OLD."mapping_provider",OLD."queued_at")
      OR (OLD."execution_started_at" IS NOT NULL AND NEW."execution_started_at" IS DISTINCT FROM OLD."execution_started_at")
      OR (OLD."provider_request_completed_at" IS NOT NULL AND NEW."provider_request_completed_at" IS DISTINCT FROM OLD."provider_request_completed_at")
      OR (OLD."failure_recorded_at" IS NOT NULL AND NEW."failure_recorded_at" IS DISTINCT FROM OLD."failure_recorded_at")
      OR (OLD."transfer_id" IS NOT NULL AND NEW."transfer_id" IS DISTINCT FROM OLD."transfer_id")
      OR (OLD."settlement_id" IS NOT NULL AND NEW."settlement_id" IS DISTINCT FROM OLD."settlement_id")
      OR (OLD."provider_accepted_at" IS NOT NULL AND NEW."provider_accepted_at" IS DISTINCT FROM OLD."provider_accepted_at")
      OR (OLD."processed_at" IS NOT NULL AND NEW."processed_at" IS DISTINCT FROM OLD."processed_at")
      OR (OLD."settled_at" IS NOT NULL AND NEW."settled_at" IS DISTINCT FROM OLD."settled_at")
      OR (OLD."final_disposition" IS NOT NULL AND ROW(NEW."final_disposition",NEW."final_disposition_recorded_at") IS DISTINCT FROM ROW(OLD."final_disposition",OLD."final_disposition_recorded_at"))) THEN
    RAISE EXCEPTION 'BP_M1_TRANSFER_SNAPSHOT_OR_MILESTONE_IMMUTABLE';
  END IF;
  RETURN NEW;
END $$;
CREATE TRIGGER "bp_m1_transfer_validate_guard" BEFORE INSERT OR UPDATE OR DELETE ON "route_transfer_attempts" FOR EACH ROW EXECUTE FUNCTION "bp_m1_validate_transfer"();

CREATE FUNCTION "bp_m1_guard_receipt"() RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN
  IF TG_OP<>'INSERT' THEN RAISE EXCEPTION 'BP_M1_RECEIPT_IMMUTABLE'; END IF;
  IF NOT EXISTS (SELECT 1 FROM "route_transfer_attempts" t WHERE t."transfer_attempt_id"=NEW."transfer_attempt_id" AND t."obligation_id"=NEW."obligation_id") THEN
    RAISE EXCEPTION 'BP_M1_RECEIPT_LINKAGE_MISMATCH';
  END IF;
  RETURN NEW;
END $$;
CREATE TRIGGER "bp_m1_receipt_validate_insert" BEFORE INSERT ON "payout_reconciled_receipts" FOR EACH ROW EXECUTE FUNCTION "bp_m1_guard_receipt"();
CREATE TRIGGER "bp_m1_receipt_guard_update_delete" BEFORE UPDATE OR DELETE ON "payout_reconciled_receipts" FOR EACH ROW EXECUTE FUNCTION "bp_m1_guard_receipt"();
