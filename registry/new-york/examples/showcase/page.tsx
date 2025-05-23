"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Countdown } from "@/registry/new-york/ui/countdown"

export default function Preview() {
  return (
    <main className="min-h-svh flex flex-col bg-background text-foreground">
      <section className="flex flex-col items-center justify-center px-4 py-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl items-center">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">&lt;Countdown /&gt;</h1>
            <p className="text-muted-foreground text-lg max-w-md">
              Use the countdown component. Perfect for launches, limited offers, 
              and time-sensitive events—fully customizable, and minimalistic.
            </p>
          </div>
          <div className="flex flex-row md:flex-col gap-4 justify-center md:justify-end items-center md:items-end">
            <Button asChild size="lg" className="w-full md:w-auto">
              <Link href="/registry/countdown">Get Access</Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full md:w-auto">
              <a href="https://zeta-registry.vercel.app/docs" target="_blank" rel="noopener noreferrer">View Docs</a>
            </Button>
          </div>
        </div>
        <Card className="w-full max-w-4xl mt-12">
          <CardContent className="py-8 flex flex-col items-center justify-center">
            <Countdown label="Time left to unlock premium" />
          </CardContent>
        </Card>
      </section>
    </main>
  )
} 