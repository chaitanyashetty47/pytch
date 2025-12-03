import * as z from "zod"

// Zod schemas for validation
export const startupFormSchema = z.object({
  startupName: z
    .string()
    .min(1, "Startup name must be at least 1 character.")
    .max(100, "Startup name must be at most 100 characters."),
  founderName: z
    .string()
    .min(1, "Founder name must be at least 1 character.")
    .max(100, "Founder name must be at most 100 characters."),
  email: z.email("Founder email must be a valid email address."),
  phone: z
    .string()
    .regex(
      /^(\+91[\-\s]?)?[6-9]\d{9}$/,
      "Phone number must be a valid Indian phone number (10 digits starting with 6-9)"
    ),
  stage: z.enum(["Idea", "Pre-Seed", "Seed", "Series A", "Series B", "Series C"]),
  industry: z
    .string()
    .min(1, "Industry is required")
    .max(100, "Industry must be at most 100 characters."),
  fundingRequired: z
    .string()
    .min(1, "Funding required is required")
    .refine(
      (val) => !isNaN(Number(val)) && Number(val) >= 100000,
      "Funding required must be at least ₹1,00,000"
    )
    .refine(
      (val) => !isNaN(Number(val)) && Number(val) <= 1000000000,
      "Funding required must be at most ₹100,00,00,000"
    ),
  linkedIn: z.url("LinkedIn URL must be a valid URL.").optional().or(z.literal("")),
  twitter: z.url("Twitter URL must be a valid URL.").optional().or(z.literal("")),
})

export const investorFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name must be at most 100 characters."),
  email: z.email("Email must be a valid email address."),
  phone: z
    .string()
    .regex(
      /^(\+91[\-\s]?)?[6-9]\d{9}$/,
      "Phone number must be a valid Indian phone number (10 digits starting with 6-9)"
    ),
  investmentType: z.enum(
    ["Angel Investor", "Venture Capital", "Institutional Investor", "Family Office", "Individual Investor"]
  ),
  preferredIndustry: z
    .string()
    .min(1, "Preferred industry is required")
    .max(100, "Preferred industry must be at most 100 characters."),
  riskAppetite: z.enum(["Conservative", "Moderate", "Aggressive", "Very Aggressive"]),
  country: z
    .string()
    .min(1, "Country is required")
    .max(100, "Country must be at most 100 characters."),
})

// TypeScript types inferred from schemas
export type StartupFormData = z.infer<typeof startupFormSchema>
export type InvestorFormData = z.infer<typeof investorFormSchema>

// API Response types
export interface ApiSuccessResponse {
  success: true
  submissionId: string
  message: string
}

export interface ApiErrorResponse {
  success: false
  error: string
}

export type ApiResponse = ApiSuccessResponse | ApiErrorResponse

