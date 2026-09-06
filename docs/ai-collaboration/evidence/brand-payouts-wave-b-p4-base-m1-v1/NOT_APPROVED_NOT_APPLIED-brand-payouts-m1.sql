-- BRAND PAYOUTS M1 — EXACT PROPOSAL ONLY
-- STATUS: NOT_APPROVED_NOT_APPLIED
-- Base tree: 6c01d65e5a32eecfcd7e42715923ea8478d071fb
-- PostgreSQL 16; additive only; no historical backfill.

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
  "requested_at" TIMESTAMP(3) NOT NULL,
  "approved_by_user_id" TEXT NOT NULL,
  "approved_by_membership_id" TEXT NOT NULL,
  "approved_by_role" VARCHAR(32) NOT NULL,
  "approved_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "status" VARCHAR(40) NOT NULL DEFAULT 'APPROVED_AWAITING_EXECUTION',
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
  CONSTRAINT "bp_m1_reserve_brand_idempotency_key" UNIQUE ("brand_profile_id", "idempotency_key"),
  CONSTRAINT "bp_m1_reserve_escrow_lock_key" UNIQUE ("escrow_lock_id"),
  CONSTRAINT "bp_m1_reserve_ledger_key" UNIQUE ("ledger_transaction_id"),
  CONSTRAINT "bp_m1_reserve_amounts_check" CHECK (
    "creator_fee" >= 0 AND "platform_commission_amount" >= 0 AND
    "platform_commission_gst_amount" >= 0 AND "approved_reserve_amount" > 0 AND
    "approved_reserve_amount" = "creator_fee" + "platform_commission_amount" + "platform_commission_gst_amount"
  ),
  CONSTRAINT "bp_m1_reserve_currency_check" CHECK ("currency" = 'INR'),
  CONSTRAINT "bp_m1_reserve_hash_check" CHECK ("instruction_hash" ~ '^[0-9a-f]{64}$' AND "agreement_hash" ~ '^[0-9a-f]{64}$'),
  CONSTRAINT "bp_m1_reserve_version_check" CHECK ("instruction_version" > 0 AND "agreement_version" > 0 AND "state_version" >= 0),
  CONSTRAINT "bp_m1_reserve_role_check" CHECK ("approved_by_role" IN ('BRAND_OWNER','FINANCE_ADMIN')),
  CONSTRAINT "bp_m1_reserve_status_check" CHECK ("status" IN ('APPROVED_AWAITING_EXECUTION','EXECUTING','AWAITING_FUNDS','ACTION_REQUIRED','COMPLETED','SUPERSEDED')),
  CONSTRAINT "bp_m1_reserve_instruction_fk" FOREIGN KEY ("reserve_instruction_id") REFERENCES "collaboration_reserve_instructions"("id") ON DELETE RESTRICT,
  CONSTRAINT "bp_m1_reserve_collaboration_fk" FOREIGN KEY ("collaboration_id") REFERENCES "collaborations"("id") ON DELETE RESTRICT,
  CONSTRAINT "bp_m1_reserve_agreement_fk" FOREIGN KEY ("commercial_agreement_id") REFERENCES "collaboration_commercial_agreements"("id") ON DELETE RESTRICT,
  CONSTRAINT "bp_m1_reserve_brand_fk" FOREIGN KEY ("brand_profile_id") REFERENCES "brand_profiles"("id") ON DELETE RESTRICT,
  CONSTRAINT "bp_m1_reserve_escrow_lock_fk" FOREIGN KEY ("escrow_lock_id") REFERENCES "collaboration_escrow_locks"("lock_id") ON DELETE RESTRICT,
  CONSTRAINT "bp_m1_reserve_ledger_fk" FOREIGN KEY ("ledger_transaction_id") REFERENCES "escrow_transaction_ledger"("transaction_id") ON DELETE RESTRICT
);

CREATE INDEX "bp_m1_reserve_status_created_idx" ON "financial_reserve_approvals"("status", "created_at", "id");
CREATE INDEX "bp_m1_reserve_brand_status_idx" ON "financial_reserve_approvals"("brand_profile_id", "status", "created_at");
CREATE INDEX "bp_m1_reserve_collaboration_idx" ON "financial_reserve_approvals"("collaboration_id");

CREATE TABLE "financial_reserve_execution_attempts" (
  "id" TEXT PRIMARY KEY,
  "approval_id" TEXT NOT NULL,
  "attempt_sequence" INTEGER NOT NULL,
  "claim_token" TEXT NOT NULL,
  "lease_expires_at" TIMESTAMP(3) NOT NULL,
  "outcome" VARCHAR(40) NOT NULL DEFAULT 'CLAIMED',
  "failure_code" VARCHAR(80),
  "started_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "completed_at" TIMESTAMP(3),
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "bp_m1_attempt_approval_sequence_key" UNIQUE ("approval_id", "attempt_sequence"),
  CONSTRAINT "bp_m1_attempt_claim_key" UNIQUE ("claim_token"),
  CONSTRAINT "bp_m1_attempt_sequence_check" CHECK ("attempt_sequence" > 0),
  CONSTRAINT "bp_m1_attempt_outcome_check" CHECK ("outcome" IN ('CLAIMED','SUCCEEDED','SHORTFALL','RETRYABLE_FAILURE','TERMINAL_FAILURE','SUPERSEDED')),
  CONSTRAINT "bp_m1_attempt_approval_fk" FOREIGN KEY ("approval_id") REFERENCES "financial_reserve_approvals"("id") ON DELETE RESTRICT
);
CREATE UNIQUE INDEX "bp_m1_attempt_one_success_key" ON "financial_reserve_execution_attempts"("approval_id") WHERE "outcome" = 'SUCCEEDED';
CREATE INDEX "bp_m1_attempt_lease_idx" ON "financial_reserve_execution_attempts"("outcome", "lease_expires_at");

ALTER TABLE "creator_payout_obligations"
  ADD COLUMN "authority_instruction_id" TEXT,
  ADD COLUMN "authority_instruction_version" INTEGER,
  ADD COLUMN "authority_instruction_hash" CHAR(64),
  ADD COLUMN "commercial_agreement_id" TEXT,
  ADD COLUMN "agreement_version" INTEGER,
  ADD COLUMN "agreement_hash" CHAR(64),
  ADD COLUMN "settlement_eligible_at" TIMESTAMP(3),
  ADD COLUMN "payment_term_snapshot" VARCHAR(16),
  ADD COLUMN "due_rule_version" VARCHAR(40),
  ADD COLUMN "due_evidence_recorded_at" TIMESTAMP(3),
  ADD COLUMN "lifecycle" VARCHAR(40),
  ADD COLUMN "current_gate" VARCHAR(64),
  ADD COLUMN "amount_settled" DECIMAL(15,4) NOT NULL DEFAULT 0,
  ADD COLUMN "amount_reversed" DECIMAL(15,4) NOT NULL DEFAULT 0,
  ADD COLUMN "amount_outstanding" DECIMAL(15,4),
  ADD CONSTRAINT "bp_m1_obligation_authority_instruction_key" UNIQUE ("authority_instruction_id"),
  ADD CONSTRAINT "bp_m1_obligation_authority_instruction_fk" FOREIGN KEY ("authority_instruction_id") REFERENCES "collaboration_financial_authority_instructions"("id") ON DELETE RESTRICT,
  ADD CONSTRAINT "bp_m1_obligation_agreement_fk" FOREIGN KEY ("commercial_agreement_id") REFERENCES "collaboration_commercial_agreements"("id") ON DELETE RESTRICT,
  ADD CONSTRAINT "bp_m1_obligation_amounts_check" CHECK ("amount_settled" >= 0 AND "amount_reversed" >= 0 AND ("amount_outstanding" IS NULL OR "amount_outstanding" >= 0)),
  ADD CONSTRAINT "bp_m1_obligation_term_check" CHECK ("payment_term_snapshot" IS NULL OR "payment_term_snapshot" IN ('NET_7','NET_15','NET_30','NET_45','NET_60')),
  ADD CONSTRAINT "bp_m1_obligation_authority_tuple_check" CHECK (
    ("authority_instruction_id" IS NULL AND "authority_instruction_version" IS NULL AND "authority_instruction_hash" IS NULL AND "commercial_agreement_id" IS NULL AND "agreement_version" IS NULL AND "agreement_hash" IS NULL)
    OR
    ("authority_instruction_id" IS NOT NULL AND "authority_instruction_version" > 0 AND "authority_instruction_hash" ~ '^[0-9a-f]{64}$' AND "commercial_agreement_id" IS NOT NULL AND "agreement_version" > 0 AND "agreement_hash" ~ '^[0-9a-f]{64}$')
  ),
  ADD CONSTRAINT "bp_m1_obligation_due_evidence_check" CHECK (
    "payment_due_at" IS NULL OR ("settlement_eligible_at" IS NOT NULL AND "payment_term_snapshot" IS NOT NULL AND "due_rule_version" IS NOT NULL AND "due_evidence_recorded_at" IS NOT NULL)
  );
CREATE INDEX "bp_m1_obligation_due_gate_idx" ON "creator_payout_obligations"("lifecycle", "current_gate", "payment_due_at", "obligation_id");

ALTER TABLE "route_transfer_attempts"
  ADD COLUMN "destination_version" INTEGER,
  ADD COLUMN "destination_fingerprint" CHAR(64),
  ADD COLUMN "normalized_outcome" VARCHAR(40),
  ADD COLUMN "provider_receipt_identity" TEXT,
  ADD COLUMN "provider_receipt_observed_at" TIMESTAMP(3),
  ADD CONSTRAINT "bp_m1_transfer_receipt_key" UNIQUE ("provider_receipt_identity"),
  ADD CONSTRAINT "bp_m1_transfer_destination_check" CHECK (("destination_version" IS NULL AND "destination_fingerprint" IS NULL) OR ("destination_version" > 0 AND "destination_fingerprint" ~ '^[0-9a-f]{64}$'));

CREATE FUNCTION "bp_m1_reject_authority_mutation"() RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN
  IF ROW(NEW."reserve_instruction_id",NEW."request_id",NEW."collaboration_id",NEW."commercial_agreement_id",NEW."brand_profile_id",NEW."instruction_version",NEW."instruction_hash",NEW."agreement_version",NEW."agreement_hash",NEW."creator_fee",NEW."platform_commission_amount",NEW."platform_commission_gst_amount",NEW."approved_reserve_amount",NEW."currency",NEW."requested_by_user_id",NEW."requested_at",NEW."approved_by_user_id",NEW."approved_by_membership_id",NEW."approved_by_role",NEW."approved_at",NEW."idempotency_key")
     IS DISTINCT FROM
     ROW(OLD."reserve_instruction_id",OLD."request_id",OLD."collaboration_id",OLD."commercial_agreement_id",OLD."brand_profile_id",OLD."instruction_version",OLD."instruction_hash",OLD."agreement_version",OLD."agreement_hash",OLD."creator_fee",OLD."platform_commission_amount",OLD."platform_commission_gst_amount",OLD."approved_reserve_amount",OLD."currency",OLD."requested_by_user_id",OLD."requested_at",OLD."approved_by_user_id",OLD."approved_by_membership_id",OLD."approved_by_role",OLD."approved_at",OLD."idempotency_key") THEN
    RAISE EXCEPTION 'BP_M1_IMMUTABLE_RESERVE_AUTHORITY';
  END IF;
  RETURN NEW;
END $$;
CREATE TRIGGER "bp_m1_reserve_authority_immutable" BEFORE UPDATE ON "financial_reserve_approvals" FOR EACH ROW EXECUTE FUNCTION "bp_m1_reject_authority_mutation"();

CREATE FUNCTION "bp_m1_reject_attempt_update"() RETURNS trigger LANGUAGE plpgsql AS $$ BEGIN RAISE EXCEPTION 'BP_M1_APPEND_ONLY_RESERVE_ATTEMPT'; END $$;
CREATE TRIGGER "bp_m1_attempt_append_only" BEFORE UPDATE OR DELETE ON "financial_reserve_execution_attempts" FOR EACH ROW EXECUTE FUNCTION "bp_m1_reject_attempt_update"();

CREATE FUNCTION "bp_m1_set_once_transfer_fields"() RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN
  IF (OLD."transfer_id" IS NOT NULL AND NEW."transfer_id" IS DISTINCT FROM OLD."transfer_id")
     OR (OLD."settlement_id" IS NOT NULL AND NEW."settlement_id" IS DISTINCT FROM OLD."settlement_id")
     OR (OLD."provider_receipt_identity" IS NOT NULL AND NEW."provider_receipt_identity" IS DISTINCT FROM OLD."provider_receipt_identity")
     OR (OLD."destination_version" IS NOT NULL AND NEW."destination_version" IS DISTINCT FROM OLD."destination_version")
     OR (OLD."destination_fingerprint" IS NOT NULL AND NEW."destination_fingerprint" IS DISTINCT FROM OLD."destination_fingerprint") THEN
    RAISE EXCEPTION 'BP_M1_SET_ONCE_TRANSFER_FIELD';
  END IF;
  RETURN NEW;
END $$;
CREATE TRIGGER "bp_m1_transfer_set_once" BEFORE UPDATE ON "route_transfer_attempts" FOR EACH ROW EXECUTE FUNCTION "bp_m1_set_once_transfer_fields"();
