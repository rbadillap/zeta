"use client"

import React from "react"
import { toast } from "sonner"
import Logo from "@/components/logos"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Copy } from "lucide-react"

interface TerminalCommandCopyProps {
  logo?: React.ReactNode
  className?: string
  command?: string
}

export function TerminalCommandCopy({
  logo = <Logo name="shadcn" className="w-8 h-8 rounded opacity-80 group-hover:opacity-100 transition" />, 
  className, 
  command = "pnpm dlx shadcn add https://zeta.vercel.app/button?token=<random>"
}: TerminalCommandCopyProps) {
  const [, setIsCopied] = React.useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(command)
      setIsCopied(true)
      toast.success("Command copied to clipboard!")
      setTimeout(() => setIsCopied(false), 1500)
    } catch {
      toast.error("Failed to copy command")
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
              <Copy className="size-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default TerminalCommandCopy 