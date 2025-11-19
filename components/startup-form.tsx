"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const startupFormSchema = z.object({
  startupName: z
    .string()
    .min(1, "Startup name must be at least 1 character.")
    .max(100, "Startup name must be at most 100 characters."),
  founderName: z
    .string()
    .min(5, "Founder name must be at least 5 characters.")
    .max(100, "Founder name must be at most 100 characters."),
  email: z.email("Founder email must be a valid email address."),
  phone: z
    .string()
    .regex(
      /^[6-9]\d{9}$/,
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
  linkedIn: z.string().url("LinkedIn URL must be a valid URL.").optional().or(z.literal("")),
  twitter: z.string().url("Twitter URL must be a valid URL.").optional().or(z.literal("")),
})

const investorFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name must be at most 100 characters."),
  email: z.email("Email must be a valid email address."),
  phone: z
    .string()
    .regex(
      /^[6-9]\d{9}$/,
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

type StartupFormSchema = z.infer<typeof startupFormSchema>
type InvestorFormSchema = z.infer<typeof investorFormSchema>

function StartupForm({ onSuccess, setIsSubmitting }: { onSuccess?: () => void; setIsSubmitting?: (value: boolean) => void }) {
  
  const updateSubmitting = (value: boolean) => {
    setIsSubmitting?.(value)
  }
  const form = useForm<StartupFormSchema>({
    resolver: zodResolver(startupFormSchema),
    defaultValues: {
      startupName: "",
      founderName: "",
      email: "",
      phone: "",
      stage: undefined,
      industry: "",
      fundingRequired: "",
      linkedIn: "",
      twitter: "",
    },
  })

  async function onSubmit(data: StartupFormSchema) {
    updateSubmitting(true)
    try {
      const response = await fetch('/api/submit-startup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.success) {
        toast.success("Startup registration submitted!", {
          description: `Your application has been received.`,
        })
        form.reset()
        onSuccess?.()
      } else {
        toast.error("Submission failed", {
          description: result.error || "Please try again later.",
        })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      toast.error("Network error", {
        description: "Unable to submit form. Please check your connection and try again.",
      })
    } finally {
      updateSubmitting(false)
    }
  }

  return (
    <form id="startup-form" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <Controller
          name="startupName"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="startup-name">Startup Name</FieldLabel>
              <Input
                {...field}
                id="startup-name"
                aria-invalid={fieldState.invalid}
                placeholder="Enter your startup name"
                autoComplete="organization"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="founderName"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="founder-name">Founder Name</FieldLabel>
              <Input
                {...field}
                id="founder-name"
                aria-invalid={fieldState.invalid}
                placeholder="Enter founder's name"
                autoComplete="name"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="startup-email">Email</FieldLabel>
              <Input
                {...field}
                id="startup-email"
                type="email"
                aria-invalid={fieldState.invalid}
                placeholder="founder@startup.com"
                autoComplete="email"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="phone"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="startup-phone">Phone Number</FieldLabel>
              <Input
                {...field}
                id="startup-phone"
                type="tel"
                aria-invalid={fieldState.invalid}
                placeholder="+91 9876543210"
                autoComplete="tel"
              />
              <FieldDescription>
                Enter Indian phone number (10 digits, optionally with +91)
              </FieldDescription>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="stage"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="startup-stage">Funding Stage</FieldLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger
                  id="startup-stage"
                  aria-invalid={fieldState.invalid}
                  className="w-full"
                >
                  <SelectValue placeholder="Select funding stage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Idea">Idea</SelectItem>
                  <SelectItem value="Pre-Seed">Pre-Seed</SelectItem>
                  <SelectItem value="Seed">Seed</SelectItem>
                  <SelectItem value="Series A">Series A</SelectItem>
                  <SelectItem value="Series B">Series B</SelectItem>
                  <SelectItem value="Series C">Series C</SelectItem>
                </SelectContent>
              </Select>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="industry"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="startup-industry">Industry</FieldLabel>
              <Input
                {...field}
                id="startup-industry"
                aria-invalid={fieldState.invalid}
                placeholder="e.g., FinTech, HealthTech, EdTech"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="fundingRequired"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="startup-funding">Funding Required (₹)</FieldLabel>
              <Input
                {...field}
                id="startup-funding"
                type="number"
                aria-invalid={fieldState.invalid}
                placeholder="e.g., 5000000"
              />
              <FieldDescription>
                Enter amount in rupees (min: ₹1,00,000, max: ₹100,00,00,000)
              </FieldDescription>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="linkedIn"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="startup-linkedin">LinkedIn URL (Optional)</FieldLabel>
              <Input
                {...field}
                id="startup-linkedin"
                type="url"
                aria-invalid={fieldState.invalid}
                placeholder="https://linkedin.com/in/yourprofile"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="twitter"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="startup-twitter">Twitter URL (Optional)</FieldLabel>
              <Input
                {...field}
                id="startup-twitter"
                type="url"
                aria-invalid={fieldState.invalid}
                placeholder="https://twitter.com/yourhandle"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
    </form>
  )
}

function InvestorForm({ onSuccess, setIsSubmitting }: { onSuccess?: () => void; setIsSubmitting?: (value: boolean) => void }) {
  
  const updateSubmitting = (value: boolean) => {
    setIsSubmitting?.(value)
  }
  const form = useForm<InvestorFormSchema>({
    resolver: zodResolver(investorFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      investmentType: undefined,
      preferredIndustry: "",
      riskAppetite: undefined,
      country: "",
    },
  })

  async function onSubmit(data: InvestorFormSchema) {
    updateSubmitting(true)
    try {
      const response = await fetch('/api/submit-investor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.success) {
        toast.success("Investor registration submitted!", {
          description: `Your application has been received. Submission ID: ${result.submissionId}`,
        })
        form.reset()
        onSuccess?.()
      } else {
        toast.error("Submission failed", {
          description: result.error || "Please try again later.",
        })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      toast.error("Network error", {
        description: "Unable to submit form. Please check your connection and try again.",
      })
    } finally {
      updateSubmitting(false)
    }
  }

  return (
    <form id="investor-form" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="investor-name">Name</FieldLabel>
              <Input
                {...field}
                id="investor-name"
                aria-invalid={fieldState.invalid}
                placeholder="Enter your name"
                autoComplete="name"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="investor-email">Email</FieldLabel>
              <Input
                {...field}
                id="investor-email"
                type="email"
                aria-invalid={fieldState.invalid}
                placeholder="investor@example.com"
                autoComplete="email"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="phone"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="investor-phone">Phone Number</FieldLabel>
              <Input
                {...field}
                id="investor-phone"
                type="tel"
                aria-invalid={fieldState.invalid}
                placeholder="+91 9876543210"
                autoComplete="tel"
              />
              <FieldDescription>
                Enter Indian phone number (10 digits, optionally with +91)
              </FieldDescription>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="investmentType"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="investor-type">Investment Type</FieldLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger
                  id="investor-type"
                  aria-invalid={fieldState.invalid}
                  className="w-full"
                >
                  <SelectValue placeholder="Select investment type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Angel Investor">Angel Investor</SelectItem>
                  <SelectItem value="Venture Capital">Venture Capital</SelectItem>
                  <SelectItem value="Institutional Investor">Institutional Investor</SelectItem>
                  <SelectItem value="Family Office">Family Office</SelectItem>
                  <SelectItem value="Individual Investor">Individual Investor</SelectItem>
                </SelectContent>
              </Select>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="preferredIndustry"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="investor-industry">Preferred Industry</FieldLabel>
              <Input
                {...field}
                id="investor-industry"
                aria-invalid={fieldState.invalid}
                placeholder="e.g., FinTech, HealthTech, EdTech"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="riskAppetite"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="investor-risk">Risk Appetite</FieldLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger
                  id="investor-risk"
                  aria-invalid={fieldState.invalid}
                  className="w-full"
                >
                  <SelectValue placeholder="Select risk appetite" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Conservative">Conservative</SelectItem>
                  <SelectItem value="Moderate">Moderate</SelectItem>
                  <SelectItem value="Aggressive">Aggressive</SelectItem>
                  <SelectItem value="Very Aggressive">Very Aggressive</SelectItem>
                </SelectContent>
              </Select>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="country"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="investor-country">Country</FieldLabel>
              <Input
                {...field}
                id="investor-country"
                aria-invalid={fieldState.invalid}
                placeholder="e.g., India"
                autoComplete="country-name"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
    </form>
  )
}

interface JoinNowDialogProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  defaultTab?: "startup" | "investor"
  hideTrigger?: boolean
  triggerLabel?: string
}

export function JoinNowDialog({
  open: controlledOpen,
  onOpenChange: controlledOnOpenChange,
  defaultTab = "startup",
  hideTrigger = false,
  triggerLabel = "Join Now",
}: JoinNowDialogProps = {}) {
  const [internalOpen, setInternalOpen] = React.useState(false)
  const [activeTab, setActiveTab] = React.useState(defaultTab)
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  // Use controlled state if provided, otherwise use internal state
  const open = controlledOpen !== undefined ? controlledOpen : internalOpen
  const setOpen = controlledOnOpenChange || setInternalOpen

  // Update active tab when defaultTab changes
  React.useEffect(() => {
    if (defaultTab) {
      setActiveTab(defaultTab)
    }
  }, [defaultTab])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
        {!hideTrigger && (
          <DialogTrigger asChild>
            <button className="bg-primary hover:bg-primary/90 rounded-full text-primary-foreground px-4 py-2 shadow-pytch-cta hover:shadow-pytch-cta-hover active:shadow-pytch-cta-active active:scale-[0.98] transition-all duration-150 font-medium">
              {triggerLabel}
            </button>
          </DialogTrigger>
        )}
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
          <DialogTitle className="text-2xl">Join Pytch</DialogTitle>
            <DialogDescription>
            Connect with investors or discover promising startups. Choose your role below.
            </DialogDescription>
          </DialogHeader>

        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "startup" | "investor")} className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-zinc-100 p-1 rounded-full gap-2">
            <TabsTrigger 
              value="startup" 
              className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-pytch-cta transition-all duration-150"
              disabled={isSubmitting}
            >
              Startup
            </TabsTrigger>
            <TabsTrigger 
              value="investor"
              className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-pytch-cta transition-all duration-150"
              disabled={isSubmitting}
            >
              Investor
            </TabsTrigger>
          </TabsList>

          <TabsContent value="startup" className="mt-6">
            <StartupForm onSuccess={() => setOpen(false)} setIsSubmitting={setIsSubmitting} />
          </TabsContent>

          <TabsContent value="investor" className="mt-6">
            <InvestorForm onSuccess={() => setOpen(false)} setIsSubmitting={setIsSubmitting} />
          </TabsContent>
        </Tabs>

        <DialogFooter className="flex-col sm:flex-row gap-2">
            <DialogClose asChild>
            <Button type="button" variant="outline" className="w-full sm:w-auto" disabled={isSubmitting}>
              Cancel
            </Button>
            </DialogClose>
          <Button
            type="submit"
            form={activeTab === "startup" ? "startup-form" : "investor-form"}
            className="w-full sm:w-auto bg-primary hover:cursor-pointer hover:bg-primary/90 text-primary-foreground"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
          </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}