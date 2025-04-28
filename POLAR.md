# Polar Integration Guide

This document describes how to integrate and configure Polar SDK for license key validation in this project.

## 1. Install the Polar SDK

```
pnpm add @polar-sh/sdk
```

## 2. Required Environment Variables

Add the following variables to your `.env.local` file:

```
POLAR_ACCESS_TOKEN=sk_live_xxx   # Your Polar API Access Token
POLAR_ORG_ID=org_xxx             # Your Polar Organization ID
```

- You can find your Access Token and Organization ID in your Polar dashboard.
- **Never commit these secrets to version control.**

## 3. Usage in Code

The Polar client is initialized in `lib/polar/client.ts` and expects both environment variables to be set. Example usage:

```ts
import { validateLicenseKey } from "@/lib/polar/client"

const result = await validateLicenseKey("your-license-key")
```

If either variable is missing, an error will be thrown.

## 4. License Key Validation

The function `validateLicenseKey(licenseKey: string)` will:
- Use the Polar SDK to validate the license key for your organization.
- Return the result from Polar, or an error if validation fails.

---

For more details, see the [Polar SDK documentation](https://www.npmjs.com/package/@polar-sh/sdk) and your Polar dashboard. 