"use client"

import React from "react"
import Logo from "@/components/logos"
import { ValidateLicenseForm } from "@/components/validate-license-form"
import { toast } from "sonner"
import { TerminalCommandCopy } from "@/components/terminal-command-copy"

export default function ValidateLicensePage() {
  const [isLicenseValid, setIsLicenseValid] = React.useState(false)
  const [token, setToken] = React.useState<string | null>(null)

  async function handleSubmit(data: { licenseKey: string }) {
    try {
      const res = await fetch("/registry/api/validate-license", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ licenseKey: data.licenseKey })
      })
      const result = await res.json()
      if (res.ok && result.valid && result.token) {
        setToken(result.token)
        setIsLicenseValid(true)
        toast.success("License key validated successfully.")
      } else {
        toast.error(result.error || "Invalid license key.")
      }
    } catch (error) {
      toast.error((error as Error).message || "Unexpected error.")
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background/80 to-muted/60 p-4">
      <section className="w-full flex flex-col items-center gap-6">
        {!isLicenseValid ? (
          <ValidateLicenseForm 
            className="w-full max-w-md"
            logo={<Logo name="polar" className="w-8 h-8 rounded opacity-80 group-hover:opacity-100 transition" />} 
            onSubmit={handleSubmit}
          />
        ) : (
          <TerminalCommandCopy 
            className="w-full max-w-md"
            command={`pnpm dlx shadcn add https://zeta-registry.vercel.app/logo?token=${token}`}
          />
        )}
      </section>
    </main>
  )
} 