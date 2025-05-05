"use client"

import React from "react"
import { toast } from "sonner"
// import Logo from "@/components/logos"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Check, Copy } from "lucide-react"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

// shadcn logo
function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <rect width="256" height="256" fill="none"></rect>
      <line
        x1="208"
        y1="128"
        x2="128"
        y2="208"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      ></line>
      <line
        x1="192"
        y1="40"
        x2="40"
        y2="192"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      ></line>
    </svg>
  )
}

interface TerminalCommandCopyProps {
  logo?: React.ReactNode
  className?: string
  command?: string
}

export function TerminalCommandCopy({
  logo = <Logo className="w-8 h-8 rounded opacity-80 group-hover:opacity-100 transition" />, 
  className, 
  command = "https://zeta-registry.vercel.app/registry/logo?token=<token>"
}: TerminalCommandCopyProps) {
  const [isCopied, setIsCopied] = React.useState(false)
  const [showAlert, setShowAlert] = React.useState<null | 'success' | 'error'>(null)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(command)
      setIsCopied(true)
      setShowAlert('success')
      setTimeout(() => {
        setIsCopied(false)
        setShowAlert(null)
      }, 1500)
    } catch {
      setShowAlert('error')
      setTimeout(() => setShowAlert(null), 1500)
    }
  }

  return (
    <div className={cn("flex items-center justify-center min-h-[40vh]", className)}>
      <Card className="w-full border-none shadow-xl bg-background/90 dark:bg-background/80 backdrop-blur rounded-2xl">
        <CardHeader className="flex flex-col items-center gap-2 pb-0">
          {logo && (
            <span className="rounded-full bg-primary/10 p-3 shadow mb-2">
              {logo}
            </span>
          )}
          <CardTitle className="text-xl font-semibold text-center tracking-tight">Install with your access token</CardTitle>
          <CardDescription className="text-center text-muted-foreground text-sm">Copy and run this command in your terminal to install your private component. This access token is expirable.</CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="flex items-center gap-2 bg-muted rounded-lg px-3 py-2 border border-border font-mono overflow-x-auto">
            <span className="flex-1 text-xs md:text-sm select-all break-all">
              {command}
            </span>
            <Button
              type="button"
              size="icon"
              variant="ghost"
              className="ml-2 text-muted-foreground hover:text-primary"
              onClick={handleCopy}
              aria-label="Copy command"
            >
              {isCopied ? <Check className="size-4" /> : <Copy className="size-4" />}
            </Button>
          </div>
          {showAlert === 'success' && (
            <Alert className="mt-4">
              <AlertTitle>Command copied to clipboard!</AlertTitle>
            </Alert>
          )}
          {showAlert === 'error' && (
            <Alert variant="destructive" className="mt-4">
              <AlertTitle>Failed to copy command</AlertTitle>
              <AlertDescription>Please try again.</AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default TerminalCommandCopy 