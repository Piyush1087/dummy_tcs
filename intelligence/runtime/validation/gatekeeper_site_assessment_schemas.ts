import { z } from "zod";

export const GATEKEEPER_INDUSTRY_VERTICALS = [
  "D2C",
  "SAAS_AI",
  "HEALTHCARE",
  "OFFLINE_SERVICES",
  "REAL_ESTATE",
  "B2B_AGENCY",
  "MEDIA",
  "EDUCATION",
  "ENTERTAINMENT",
  "UNKNOWN",
  "GAMBLING",
  "ADULT",
  "FRAUDULENT_HIGH_RISK",
] as const;

export const GatekeeperIndustryVerticalSchema = z.enum(
  GATEKEEPER_INDUSTRY_VERTICALS,
);

export const GatekeeperSiteAssessmentSchema = z
  .object({
    provisional_industry: GatekeeperIndustryVerticalSchema.nullable(),
    provisional_sub_industry: z.string().nullable(),
    entity_category: z.enum([
      "BRAND",
      "MARKETPLACE",
      "CREATOR_MARKETING_PLATFORM",
      "NON_COMMERCIAL_ENTITY",
      "UNKNOWN",
    ]),
    english_evidence_status: z.enum([
      "SUFFICIENT",
      "INSUFFICIENT",
      "UNCERTAIN",
    ]),
    creator_marketing_applicability: z.enum([
      "APPLICABLE",
      "NOT_APPLICABLE",
      "UNCERTAIN",
    ]),
    commercial_destination_types: z
      .array(
        z.enum([
          "WEBSITE",
          "APP_STORE",
          "PLAY_STORE",
          "DIRECT_APK",
          "LEAD_GENERATION",
          "BOOKING",
          "OFFLINE_LOCATION",
          "SALES_CONTACT",
          "MULTI_DESTINATION",
        ]),
      )
      .refine((values) => new Set(values).size === values.length, {
        message: "commercial_destination_types must contain unique values",
      }),
    assessment_confidence: z.enum(["HIGH", "MEDIUM", "LOW"]),
  })
  .strict();

export type GatekeeperSiteAssessment = z.infer<
  typeof GatekeeperSiteAssessmentSchema
>;
