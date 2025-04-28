import 'server-only'
import { SignJWT, jwtVerify } from 'jose'
import { nanoid } from 'nanoid'

const key = new TextEncoder().encode(
  process.env.REGISTRY_TOKEN_SECRET || ''
)

export async function generateToken(): Promise<string> {
  if (!process.env.REGISTRY_TOKEN_SECRET) {
    throw new Error("REGISTRY_TOKEN_SECRET environment variable is required.")
  }

  return await new SignJWT({})
    .setProtectedHeader({ alg: 'HS256' })
    .setJti(nanoid())
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(key)
}

export async function verifyToken(token: string): Promise<boolean> {
  try {
    await jwtVerify(token, key)
    return true
  } catch {
    return false
  }
} 