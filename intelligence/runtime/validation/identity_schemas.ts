import { z } from "zod";

/**
 * Identity runtime schemas — MVP implementation.
 *
 * IMPORTANT: The frozen YAML processor output contracts remain the normative
 * business contracts. These schemas implement those contracts for the first
 * executable Identity runtime. If a business rule changes, update/freeze YAML
 * first, then update this implementation until automated compilation replaces
 * this hand-coded bridge.
 */

export const CountryCodeSchema = z.string().regex(/^[A-Z]{2}$/, "Expected ISO 3166-1 alpha-2 country code");
export const LanguageCodeSchema = z.string().regex(/^[a-z]{2}$/, "Expected ISO 639-1 lowercase language code");
export const CurrencyCodeSchema = z.string().regex(/^[A-Z]{3}$/, "Expected ISO 4217 uppercase currency code");

export const BusinessGeographySchema = z
  .object({
    label: z.string(),
    place_id: z.string().nullable(),
    locality: z.string().nullable(),
    region: z.string().nullable(),
    country_code: CountryCodeSchema.nullable(),
    latitude: z.number().nullable(),
    longitude: z.number().nullable(),
  })
  .strict();

export const IdentityCoreFieldSchemas = {
  brand_name: z.string().nullable(),
  brand_logo: z.string().nullable(),
  tagline: z.string().nullable(),
  country: CountryCodeSchema.nullable(),
  business_geography: BusinessGeographySchema.nullable(),
  primary_language: LanguageCodeSchema.nullable(),
  website_currency: CurrencyCodeSchema.nullable(),
  instagram_handle: z.string().nullable(),
  youtube_handle: z.string().nullable(),
  tiktok_handle: z.string().nullable(),
  facebook_handle: z.string().nullable(),
  linkedin_handle: z.string().nullable(),
} as const;

export type IdentityCoreOutputId = keyof typeof IdentityCoreFieldSchemas;

export function buildIdentityCoreSchema(activeOutputs: IdentityCoreOutputId[]) {
  if (activeOutputs.length === 0) throw new Error("At least one identity_core output is required");
  const shape: Record<string, z.ZodTypeAny> = {};
  for (const output of activeOutputs) {
    const schema = IdentityCoreFieldSchemas[output];
    if (!schema) throw new Error(`Unknown identity_core output: ${output}`);
    shape[output] = schema;
  }
  return z.object(shape).strict();
}

export const IndustryNicheSchema = z.object({ industry_niche: z.string().nullable() }).strict();

export const MarketSchema = z
  .object({
    scope: z.enum(["LOCALITY", "REGION", "COUNTRY", "GLOBAL"]),
    label: z.string(),
    country_code: CountryCodeSchema.nullable(),
    locality: z.string().nullable(),
    region: z.string().nullable(),
    radius_km: z.number().nullable(),
    is_primary: z.boolean(),
  })
  .strict()
  .superRefine((value, ctx) => {
    if (value.scope === "GLOBAL") {
      for (const key of ["country_code", "locality", "region", "radius_km"] as const) {
        if (value[key] !== null) ctx.addIssue({ code: z.ZodIssueCode.custom, path: [key], message: `GLOBAL requires ${key}=null` });
      }
    }
    if (value.scope === "COUNTRY") {
      if (!value.country_code) ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["country_code"], message: "COUNTRY requires country_code" });
      if (value.locality !== null) ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["locality"], message: "COUNTRY requires locality=null" });
    }
    if (value.scope === "LOCALITY" && !value.locality) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["locality"], message: "LOCALITY requires locality" });
    }
    if (value.scope === "REGION" && !value.region) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["region"], message: "REGION requires region" });
    }
  });

export const MarketGeographySchema = z
  .object({ markets_served: z.array(MarketSchema).min(1) })
  .strict()
  .superRefine((value, ctx) => {
    if (!value.markets_served.some((market) => market.is_primary)) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["markets_served"], message: "At least one market must be primary" });
    }
  });
