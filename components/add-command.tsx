'use client'

import * as React from "react"
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";
import Logo from "@/components/logos";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import { ClipboardIcon } from "lucide-react";

export function AddCommand() {
  const { isCopied, copyToClipboard } = useCopyToClipboard()
  const { isCopied: isCopiedUrl, copyToClipboard: copyToClipboardUrl } = useCopyToClipboard()
  return (
    <>
      <Button
        variant="outline"
        size="sm"
        className="rounded-sm !pl-2"
        onClick={() => {
          copyToClipboard('pnpm dlx shadcn@latest add button')
          toast.success('Command copied to clipboard', {
            description: 'pnpm dlx shadcn@latest add button',
          })
        }}
      >
        {isCopied ? (
          <CheckIcon className="size-3.5" />
        ) : (
          <Logo name="shadcn" />
        )}
        shadcn
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="rounded-sm !pl-2"
        onClick={() => {
          copyToClipboardUrl('https://zeta-registry.vercel.app/logo')
          toast.success('URL copied to clipboard', {
            description: 'https://zeta-registry.vercel.app/logo',
          })
        }}
      >
        {isCopiedUrl ? (
          <CheckIcon className="size-3.5" />
        ) : (
          <ClipboardIcon className="size-3.5" />
        )}
        URL
      </Button>
    </>
  )
}