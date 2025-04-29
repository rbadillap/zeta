import { NextResponse } from "next/server"
import path from "path"
import { promises as fs } from "fs"
import { registryItemSchema } from "shadcn/registry"
import { verifyToken } from "@/lib/shadcn/registry/utils"

// Define types for our registry structure
interface RegistryFile {
  path: string
  type: string
  target: string
  content?: string
}

interface RegistryItem {
  name: string
  type: string
  title: string
  description: string
  files: RegistryFile[]
}

interface RegistryContent {
  [key: string]: RegistryItem
}

// Pre-build the registry content at build time
const registryContent: RegistryContent = {}

// This function runs at build time
async function buildRegistryContent() {
  try {
    const registryPath = path.join(process.cwd(), 'registry.json')
    const registryData = JSON.parse(await fs.readFile(registryPath, 'utf8'))
    
    // Build content for each component
    for (const item of registryData.items) {
      const registryItem = registryItemSchema.parse(item) as RegistryItem
      
      if (registryItem.files?.length) {
        const filesWithContent = await Promise.all(
          registryItem.files.map(async (file) => {
            const filePath = path.join(process.cwd(), file.path)
            const content = await fs.readFile(filePath, "utf8")
            return { ...file, content }
          })
        )
        registryContent[item.name] = { ...registryItem, files: filesWithContent }
      }
    }
  } catch (error) {
    console.error("Error building registry content:", error)
  }
}

// Build the registry content at build time
buildRegistryContent()

export async function GET(
  request: Request,
  { params }: { params: Promise<{ name: string }> }
) {
  try {
    // Get the authorization token from ?token=
    const url = new URL(request.url)
    const token = url.searchParams.get('token')

    if (!token) {
      // If accessing via browser, redirect to login with return URL
      if (request.headers.get("accept")?.includes("text/html")) {
        const returnUrl = encodeURIComponent(url.pathname)
        return NextResponse.redirect(
          new URL(`/registry/access/validate-license?returnUrl=${returnUrl}`, request.url)
        )
      }
      
      // If accessing via API, return a 401 error
      return NextResponse.json(
        { error: "Authorization token is required" },
        { status: 401 }
      )
    }

    const isValidToken = await verifyToken(token)

    if (!isValidToken) {
      return NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 401 }
      )
    }

    const { name } = await params

    // Get pre-built content
    const component = registryContent[name]

    // If the component is not found, return a 404 error
    if (!component) {
      return NextResponse.json(
        { error: "Component not found" },
        { status: 404 }
      )
    }

    // Return the pre-built component data
    return NextResponse.json(component)
  } catch (error) {
    console.error("Error processing component request:", error)
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}
