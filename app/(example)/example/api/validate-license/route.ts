import { NextRequest, NextResponse } from "next/server"
import { generateToken } from "@/lib/shadcn/registry/utils"

interface ValidateLicenseRequest {
  licenseKey: string
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ValidateLicenseRequest
    const { licenseKey } = body

    // For demo purposes, we'll return a valid token if the license key is "ZETA-DEMO"
    // for a real world example, check out the /api/validate-license route
    if (licenseKey === "ZETA-DEMO") {
      const token = await generateToken()
      return NextResponse.json({ valid: true, token })
    }

    return NextResponse.json({ valid: false, error: "Invalid license key." }, { status: 400 })
  } catch (error) {
    return NextResponse.json({ valid: false, error: (error as Error).message || "Malformed request." }, { status: 400 })
  }
} 