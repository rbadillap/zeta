import * as React from "react"
import { cn } from "@/lib/utils"

interface CountdownProps {
  until?: Date | string
  label?: string
  className?: string
}

function getTimeLeft(until: Date): string {
  const now = new Date()
  const diff = Math.max(0, until.getTime() - now.getTime())
  const hours = Math.floor(diff / 1000 / 60 / 60)
  const minutes = Math.floor((diff / 1000 / 60) % 60)
  const seconds = Math.floor((diff / 1000) % 60)
  return [hours, minutes, seconds]
    .map((n) => n.toString().padStart(2, "0"))
    .join(":")
}

export function Countdown({ until, label = "Time left", className }: CountdownProps) {
  const [time, setTime] = React.useState<string>("")

  React.useEffect(() => {
    let target: Date
    if (until) {
      target = typeof until === "string" ? new Date(until) : until
    } else {
      target = new Date(Date.now() + 60 * 60 * 1000) // 1 hour from now
    }
    function update() {
      setTime(getTimeLeft(target))
    }
    update()
    const interval = setInterval(() => {
      update()
    }, 1000)
    return () => clearInterval(interval)
  }, [until])

  return (
    <div className={cn("w-full max-w-md flex flex-col items-center justify-center py-8", className)}>
      <span className="text-6xl font-mono font-light tracking-widest text-foreground select-none">
        {time}
      </span>
      <span className="mt-3 text-sm text-muted-foreground font-normal tracking-wide select-none">
        {label}
      </span>
    </div>
  )
} 