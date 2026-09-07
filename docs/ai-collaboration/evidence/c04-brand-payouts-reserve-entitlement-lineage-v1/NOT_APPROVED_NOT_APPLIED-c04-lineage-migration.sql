-- C04 exact reserve-entitlement lineage proposal; NOT APPROVED; NOT APPLIED.
-- Exact base fc4d4b59e2a44d7ddced6bc5dde5119c501ec275 / 84 migrations.
CREATE TYPE "CollaborationFundingLineageMode" AS ENUM ('LEGACY_UNRECONCILED','CANONICAL_PAYOUTS_V1');
CREATE TYPE "CollaborationFundingConfirmationDisposition" AS ENUM ('COMPLETED_SUFFICIENT');

ALTER TABLE "collaboration_trusted_confirmations"
  ADD COLUMN "lineage_mode" "CollaborationFundingLineageMode" NOT NULL DEFAULT 'LEGACY_UNRECONCILED',
  ADD COLUMN "reserve_instruction_id" TEXT,
  ADD COLUMN "reserve_request_id" TEXT,
  ADD COLUMN "reserve_instruction_version" INTEGER,
  ADD COLUMN "reserve_instruction_hash" CHAR(64),
  ADD COLUMN "commercial_agreement_id" TEXT,
  ADD COLUMN "agreement_version" INTEGER,
  ADD COLUMN "agreement_hash" CHAR(64),
  ADD COLUMN "payouts_approval_ref" TEXT,
  ADD COLUMN "reserve_execution_attempt_ref" TEXT,
  ADD COLUMN "escrow_lock_id" TEXT,
  ADD COLUMN "reserve_ledger_transaction_id" TEXT,
  ADD COLUMN "brand_profile_id" TEXT,
  ADD COLUMN "campaign_id" TEXT,
  ADD COLUMN "creator_profile_id" TEXT,
  ADD COLUMN "confirmed_amount" DECIMAL(15,4),
  ADD COLUMN "currency" VARCHAR(3),
  ADD COLUMN "disposition" "CollaborationFundingConfirmationDisposition",
  ADD COLUMN "observed_at" TIMESTAMP(3),
  ADD CONSTRAINT "c04_lineage_reserve_instruction_fk" FOREIGN KEY ("reserve_instruction_id") REFERENCES "collaboration_reserve_instructions"("id") ON UPDATE RESTRICT ON DELETE RESTRICT,
  ADD CONSTRAINT "c04_lineage_agreement_fk" FOREIGN KEY ("commercial_agreement_id") REFERENCES "collaboration_commercial_agreements"("id") ON UPDATE RESTRICT ON DELETE RESTRICT,
  ADD CONSTRAINT "c04_lineage_lock_fk" FOREIGN KEY ("escrow_lock_id") REFERENCES "collaboration_escrow_locks"("lock_id") ON UPDATE RESTRICT ON DELETE RESTRICT,
  ADD CONSTRAINT "c04_lineage_ledger_fk" FOREIGN KEY ("reserve_ledger_transaction_id") REFERENCES "escrow_transaction_ledger"("transaction_id") ON UPDATE RESTRICT ON DELETE RESTRICT,
  ADD CONSTRAINT "c04_lineage_brand_fk" FOREIGN KEY ("brand_profile_id") REFERENCES "brand_profiles"("id") ON UPDATE RESTRICT ON DELETE RESTRICT,
  ADD CONSTRAINT "c04_lineage_campaign_fk" FOREIGN KEY ("campaign_id") REFERENCES "uce_campaigns"("id") ON UPDATE RESTRICT ON DELETE RESTRICT,
  ADD CONSTRAINT "c04_lineage_creator_fk" FOREIGN KEY ("creator_profile_id") REFERENCES "creator_profiles"("id") ON UPDATE RESTRICT ON DELETE RESTRICT,
  ADD CONSTRAINT "c04_lineage_mode_tuple_check" CHECK
    (("lineage_mode"='LEGACY_UNRECONCILED' AND "reserve_instruction_id" IS NULL AND "reserve_request_id" IS NULL AND "reserve_instruction_version" IS NULL AND "reserve_instruction_hash" IS NULL AND "commercial_agreement_id" IS NULL AND "agreement_version" IS NULL AND "agreement_hash" IS NULL AND "payouts_approval_ref" IS NULL AND "reserve_execution_attempt_ref" IS NULL AND "escrow_lock_id" IS NULL AND "reserve_ledger_transaction_id" IS NULL AND "brand_profile_id" IS NULL AND "campaign_id" IS NULL AND "creator_profile_id" IS NULL AND "confirmed_amount" IS NULL AND "currency" IS NULL AND "disposition" IS NULL AND "observed_at" IS NULL)
     OR ("lineage_mode"='CANONICAL_PAYOUTS_V1' AND "confirmation_type"='ESCROW_FUNDING' AND "reserve_instruction_id" IS NOT NULL AND "reserve_request_id" IS NOT NULL AND "reserve_instruction_version" IS NOT NULL AND "reserve_instruction_hash" IS NOT NULL AND "commercial_agreement_id" IS NOT NULL AND "agreement_version" IS NOT NULL AND "agreement_hash" IS NOT NULL AND length("payouts_approval_ref")>0 AND length("reserve_execution_attempt_ref")>0 AND "escrow_lock_id" IS NOT NULL AND "reserve_ledger_transaction_id" IS NOT NULL AND "brand_profile_id" IS NOT NULL AND "campaign_id" IS NOT NULL AND "creator_profile_id" IS NOT NULL AND "confirmed_amount">0 AND "currency"='INR' AND "disposition" IS NOT NULL AND "observed_at" IS NOT NULL AND "observed_at"="applied_at"));

CREATE UNIQUE INDEX "c04_lineage_one_completed_per_reserve_key" ON "collaboration_trusted_confirmations"("reserve_instruction_id") WHERE "lineage_mode"='CANONICAL_PAYOUTS_V1' AND "disposition"='COMPLETED_SUFFICIENT';
CREATE UNIQUE INDEX "c04_lineage_approval_ref_key" ON "collaboration_trusted_confirmations"("payouts_approval_ref") WHERE "lineage_mode"='CANONICAL_PAYOUTS_V1';
CREATE UNIQUE INDEX "c04_lineage_execution_ref_key" ON "collaboration_trusted_confirmations"("reserve_execution_attempt_ref") WHERE "lineage_mode"='CANONICAL_PAYOUTS_V1';
ALTER TABLE "collaboration_trusted_confirmations" ADD CONSTRAINT "c04_lineage_ledger_key" UNIQUE ("reserve_ledger_transaction_id");
CREATE INDEX "c04_lineage_reserve_disposition_idx" ON "collaboration_trusted_confirmations"("reserve_instruction_id","disposition","applied_at");

ALTER TABLE "collaboration_financial_authority_instructions"
  ADD COLUMN "funding_lineage_mode" "CollaborationFundingLineageMode" NOT NULL DEFAULT 'LEGACY_UNRECONCILED',
  ADD COLUMN "funding_confirmation_id" TEXT,
  ADD COLUMN "reserve_instruction_id" TEXT,
  ADD CONSTRAINT "c04_entitlement_confirmation_fk" FOREIGN KEY ("funding_confirmation_id") REFERENCES "collaboration_trusted_confirmations"("id") ON UPDATE RESTRICT ON DELETE RESTRICT,
  ADD CONSTRAINT "c04_entitlement_reserve_fk" FOREIGN KEY ("reserve_instruction_id") REFERENCES "collaboration_reserve_instructions"("id") ON UPDATE RESTRICT ON DELETE RESTRICT,
  ADD CONSTRAINT "c04_entitlement_lineage_tuple_check" CHECK
    (("funding_lineage_mode"='LEGACY_UNRECONCILED' AND "funding_confirmation_id" IS NULL AND "reserve_instruction_id" IS NULL)
     OR ("funding_lineage_mode"='CANONICAL_PAYOUTS_V1' AND "kind"='CREATOR_ENTITLEMENT' AND "resolution_type"='NORMAL_SUCCESS' AND "effect_scope"='FULL' AND "creator_entitlement_effect">0 AND "brand_refund_effect"=0 AND "funding_confirmation_id" IS NOT NULL AND "reserve_instruction_id" IS NOT NULL));
ALTER TABLE "collaboration_financial_authority_instructions" ADD CONSTRAINT "c04_entitlement_confirmation_key" UNIQUE ("funding_confirmation_id");
CREATE INDEX "c04_entitlement_reserve_idx" ON "collaboration_financial_authority_instructions"("reserve_instruction_id","kind","instruction_version");

CREATE FUNCTION "c04_validate_funding_lineage"() RETURNS trigger LANGUAGE plpgsql AS $$
DECLARE r "collaboration_reserve_instructions"%ROWTYPE; a "collaboration_commercial_agreements"%ROWTYPE; c "collaborations"%ROWTYPE; l "collaboration_escrow_locks"%ROWTYPE; e "escrow_transaction_ledger"%ROWTYPE; v "brand_escrow_vaults"%ROWTYPE;
BEGIN
  IF TG_OP<>'INSERT' THEN RAISE EXCEPTION 'C04_FUNDING_LINEAGE_APPEND_ONLY'; END IF;
  SELECT * INTO STRICT c FROM "collaborations" WHERE "id"=NEW."collaboration_id";
  IF c."authority_version"='CANONICAL_V1' AND NEW."confirmation_type"='ESCROW_FUNDING' AND NEW."lineage_mode"<>'CANONICAL_PAYOUTS_V1' THEN RAISE EXCEPTION 'C04_CANONICAL_CONFIRMATION_REQUIRES_LINEAGE'; END IF;
  IF NEW."lineage_mode"='CANONICAL_PAYOUTS_V1' THEN
    NEW."applied_at":=clock_timestamp(); NEW."observed_at":=NEW."applied_at";
    SELECT * INTO STRICT r FROM "collaboration_reserve_instructions" WHERE "id"=NEW."reserve_instruction_id" FOR SHARE;
    SELECT * INTO STRICT a FROM "collaboration_commercial_agreements" WHERE "id"=r."commercial_agreement_id" FOR SHARE;
    SELECT * INTO STRICT l FROM "collaboration_escrow_locks" WHERE "lock_id"=NEW."escrow_lock_id" FOR SHARE;
    SELECT * INTO STRICT e FROM "escrow_transaction_ledger" WHERE "transaction_id"=NEW."reserve_ledger_transaction_id" FOR SHARE;
    SELECT * INTO STRICT v FROM "brand_escrow_vaults" WHERE "vault_id"=e."vault_id" FOR SHARE;
    IF r."status"<>'REQUESTED' OR EXISTS(SELECT 1 FROM "collaboration_reserve_instructions" n WHERE n."supersedes_instruction_id"=r."id")
       OR ROW(NEW."reserve_request_id",NEW."reserve_instruction_version",NEW."reserve_instruction_hash",NEW."commercial_agreement_id",NEW."agreement_version",NEW."agreement_hash",NEW."brand_profile_id",NEW."campaign_id",NEW."creator_profile_id",NEW."confirmed_amount",NEW."currency") IS DISTINCT FROM ROW(r."request_id",r."instruction_version",r."instruction_hash",r."commercial_agreement_id",r."agreement_version",r."agreement_hash",r."brand_profile_id",r."campaign_id",r."creator_profile_id",r."reserve_amount",r."currency")
       OR ROW(c."brand_id",c."campaign_id",c."creator_profile_id") IS DISTINCT FROM ROW(r."brand_profile_id",r."campaign_id",r."creator_profile_id")
       OR ROW(a."collaboration_id",a."agreement_version",a."agreement_hash") IS DISTINCT FROM ROW(r."collaboration_id",r."agreement_version",r."agreement_hash")
       OR ROW(l."collaboration_id",l."brand_id",l."gross_creator_quote",l."platform_commission_fee",l."platform_commission_gst",l."total_escrow_locked_amount") IS DISTINCT FROM ROW(r."collaboration_id",r."brand_profile_id",r."creator_fee",r."platform_commission_amount",r."platform_commission_gst_amount",r."reserve_amount")
       OR l."expected_tds_percentage"<>0 OR l."calculated_tds_deduction"<>0 OR l."net_creator_payout_pool"<>r."creator_fee"
       OR ROW(e."brand_id",e."collaboration_id",e."transaction_type",e."amount",e."currency",e."transaction_status",e."gateway_processing_surcharge",e."gateway_surcharge_gst") IS DISTINCT FROM ROW(r."brand_profile_id",r."collaboration_id",'CONTRACT_LOCK_RESERVE'::"EscrowTransactionType",r."reserve_amount",r."currency",'CLEARED'::"EscrowTransactionStatus",0::numeric,0::numeric)
       OR ROW(v."brand_id",v."currency") IS DISTINCT FROM ROW(r."brand_profile_id",r."currency") THEN RAISE EXCEPTION 'C04_FUNDING_LINEAGE_MISMATCH'; END IF;
    IF NEW."disposition"='COMPLETED_SUFFICIENT' AND NEW."confirmed_amount"<>r."reserve_amount" THEN RAISE EXCEPTION 'C04_COMPLETED_CONFIRMATION_AMOUNT_MISMATCH'; END IF;
  END IF;
  RETURN NEW;
END $$;
CREATE TRIGGER "c04_funding_lineage_validate_insert" BEFORE INSERT ON "collaboration_trusted_confirmations" FOR EACH ROW EXECUTE FUNCTION "c04_validate_funding_lineage"();
CREATE TRIGGER "c04_funding_lineage_guard_update_delete" BEFORE UPDATE OR DELETE ON "collaboration_trusted_confirmations" FOR EACH ROW EXECUTE FUNCTION "c04_validate_funding_lineage"();

CREATE FUNCTION "c04_validate_entitlement_lineage"() RETURNS trigger LANGUAGE plpgsql AS $$
DECLARE f "collaboration_trusted_confirmations"%ROWTYPE; r "collaboration_reserve_instructions"%ROWTYPE;
BEGIN
  IF TG_OP='DELETE' OR (TG_OP='UPDATE' AND ROW(NEW."funding_lineage_mode",NEW."funding_confirmation_id",NEW."reserve_instruction_id") IS DISTINCT FROM ROW(OLD."funding_lineage_mode",OLD."funding_confirmation_id",OLD."reserve_instruction_id")) THEN RAISE EXCEPTION 'C04_ENTITLEMENT_LINEAGE_IMMUTABLE'; END IF;
  IF TG_OP='INSERT' AND NEW."kind"='CREATOR_ENTITLEMENT' AND NEW."resolution_type"='NORMAL_SUCCESS' AND NEW."funding_lineage_mode"<>'CANONICAL_PAYOUTS_V1' THEN RAISE EXCEPTION 'C04_NORMAL_ENTITLEMENT_REQUIRES_PROTECTED_FUNDING'; END IF;
  IF NEW."funding_lineage_mode"='CANONICAL_PAYOUTS_V1' THEN
    SELECT * INTO STRICT f FROM "collaboration_trusted_confirmations" WHERE "id"=NEW."funding_confirmation_id";
    SELECT * INTO STRICT r FROM "collaboration_reserve_instructions" WHERE "id"=NEW."reserve_instruction_id";
    IF f."lineage_mode"<>'CANONICAL_PAYOUTS_V1' OR f."disposition"<>'COMPLETED_SUFFICIENT' OR f."reserve_instruction_id"<>r."id"
       OR EXISTS(SELECT 1 FROM "collaboration_reserve_instructions" n WHERE n."supersedes_instruction_id"=r."id")
       OR ROW(NEW."collaboration_id",NEW."commercial_agreement_id",NEW."agreement_version",NEW."agreement_hash",NEW."amount",NEW."currency",NEW."creator_entitlement_effect",NEW."brand_refund_effect") IS DISTINCT FROM ROW(r."collaboration_id",r."commercial_agreement_id",r."agreement_version",r."agreement_hash",r."creator_fee",r."currency",r."creator_fee",0::numeric) THEN RAISE EXCEPTION 'C04_ENTITLEMENT_PROTECTED_FUNDING_MISMATCH'; END IF;
  END IF;
  RETURN NEW;
END $$;
CREATE TRIGGER "c04_entitlement_lineage_validate_guard" BEFORE INSERT OR UPDATE OR DELETE ON "collaboration_financial_authority_instructions" FOR EACH ROW EXECUTE FUNCTION "c04_validate_entitlement_lineage"();
