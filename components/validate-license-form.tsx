"use client"

import React from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage
} from "@/components/ui/form"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/components/ui/card"
import { KeyRound, Eye, EyeOff } from "lucide-react"
import { cn } from "@/lib/utils"

const validateSchema = z.object({
  licenseKey: z.string().min(1, { message: "License key is required." })
})

interface ValidateFormData {
  licenseKey: string
}

interface ValidateLicenseFormProps {
  logo?: React.ReactNode
  className?: string
  onSubmit: (data: ValidateFormData) => void | Promise<void>
  description?: React.ReactNode
  error?: string | null
}

export function ValidateLicenseForm({ logo, className, description, onSubmit, error }: ValidateLicenseFormProps) {
  const [showKey, setShowKey] = React.useState(false)
  const form = useForm<ValidateFormData>({
    resolver: zodResolver(validateSchema),
    defaultValues: { licenseKey: "" }
  })

  return (
    <div className={cn("flex items-center justify-center min-h-[60vh]", className)}>
      <Card className="w-full border-none shadow-xl bg-background/90 dark:bg-background/80 backdrop-blur rounded-2xl">
        <CardHeader className="flex flex-col items-center gap-2 pb-0">
          {logo && (
            <span className="rounded-full bg-primary/10 p-3 shadow mb-2">
              {logo}
            </span>
          )}
          <CardTitle className="text-xl font-semibold text-center tracking-tight">Enter your key</CardTitle>
          <CardDescription className="text-center text-muted-foreground text-sm">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          {error && (
            <div className="mb-4 text-destructive text-sm text-center font-medium" data-slot="form-error">
              {error}
            </div>
          )}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="licenseKey"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>License Key</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                        <Input
                          type={showKey ? "text" : "password"}
                          autoComplete="off"
                          placeholder="Enter your key"
                          className="pl-10 pr-10 text-base bg-background/80 border border-border focus:ring-2 focus:ring-primary/30 transition"
                          {...field}
                        />
                        <button
                          type="button"
                          tabIndex={-1}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition"
                          onClick={() => setShowKey((v) => !v)}
                          aria-label={showKey ? "Hide product key" : "Show product key"}
                        >
                          {showKey ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                size="sm"
                className="w-full"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "Checking..." : "Continue"}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-center pt-2">
          <span className="text-xs text-muted-foreground">Powered by <span className="font-semibold">Polar</span></span>
        </CardFooter>
      </Card>
    </div>
  )
}

export default ValidateLicenseForm 