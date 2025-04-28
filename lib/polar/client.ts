import { Polar } from "@polar-sh/sdk"

const polar = new Polar({
  accessToken: process.env.POLAR_ACCESS_TOKEN ?? "",
})

const POLAR_ORG_ID = process.env.POLAR_ORG_ID ?? ""

export async function validateLicenseKey(licenseKey: string) {
  if (!POLAR_ORG_ID) {
    throw new Error("POLAR_ORG_ID environment variable is required.")
  }
  // Real validation depends on your organization and the correct endpoint
  // Using customerPortal.licenseKeys.validate as per official documentation
  try {
    const result = await polar.customerPortal.licenseKeys.validate({
      key: licenseKey,
      organizationId: POLAR_ORG_ID,
    })

    return result
  } catch (error) {
    console.error(error)
    // You can improve error handling as needed
    return { valid: false, error: (error as Error).message }
  }
} 