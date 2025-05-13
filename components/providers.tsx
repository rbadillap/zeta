"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { RootProvider } from 'fumadocs-ui/provider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
    >
      <RootProvider>
        {children}
      </RootProvider>
    </NextThemesProvider>
  )
}
