"use client"

import React from "react"
import Logo from "@/components/logos"
import { ValidateLicenseForm } from "@/components/validate-license-form"
import { toast } from "sonner"
import { TerminalCommandCopy } from "@/components/terminal-command-copy"
import { Badge } from "@/components/ui/badge"
import { Check, Copy } from "lucide-react"

function DemoDescription() {
  const [isCopied, setIsCopied] = React.useState(false)

  const exampleLicenseKey = 'ZETA-DEMO'

  function copyToClipboard() {
    navigator.clipboard.writeText(exampleLicenseKey)
      .then(() => {
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 2000) // Reset after 2 seconds
      })
      .catch((err) => {
        console.error('Failed to copy:', err)
        toast.error('Failed to copy to clipboard')
      })
  }

  return (
    <p className="text-sm text-muted-foreground">
      For demo purposes, the license key is{" "}
      <Badge 
        variant="secondary" 
        className="cursor-pointer select-all hover:bg-secondary/80 transition-colors"
        onClick={copyToClipboard}
      >
        {exampleLicenseKey}
        <span className="ml-1">
          {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </span>
      </Badge>
    </p>
  )
}

export default function ValidateLicensePage() {
  const [isLicenseValid, setIsLicenseValid] = React.useState(false)
  const [token, setToken] = React.useState<string | null>(null)

  async function handleSubmit(data: { licenseKey: string }) {
    try {
      const res = await fetch("/example/api/validate-license", {
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
            description={<DemoDescription />}
            onSubmit={handleSubmit}
          />
        ) : (
          <TerminalCommandCopy 
            className="w-full max-w-md"
            command={`pnpm dlx shadcn add "https://zeta-registry.vercel.app/registry/logo?token=${token}"`}
          />
        )}
      </section>
    </main>
  )
} 