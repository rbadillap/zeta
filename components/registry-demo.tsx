'use client'

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"

// Sample data structure for files
const files = [
  {
    name: "logo.tsx",
    content: `export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
      <span className="font-bold text-xl">Brand</span>
    </div>
  )
}`
  },
  {
    name: "logo.test.tsx",
    content: `import { render } from '@testing-library/react'
import { Logo } from './logo'

describe('Logo', () => {
  it('renders without crashing', () => {
    const { container } = render(<Logo />)
    expect(container).toBeInTheDocument()
  })
})`
  }
]

// Sample registry.json content
const registryContent = {
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  },
  "components": [
    {
      "name": "logo",
      "type": "component",
      "files": ["logo.tsx", "logo.test.tsx"],
      "registryDependencies": []
    }
  ]
}

export function RegistryDemo() {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      {/* Demo Preview */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <Tabs defaultValue="preview" className="w-full">
          <div className="flex items-center justify-between border-b px-4 py-3">
            <TabsList className="bg-background text-foreground">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
              <TabsTrigger value="registry">Registry</TabsTrigger>
            </TabsList>
            
            <div className="hidden md:flex items-center gap-2">
              <Button variant="outline" size="sm">
                Copy
              </Button>
              <Button variant="outline" size="sm">
                View Raw
              </Button>
              <Button variant="outline" size="sm">
                Open in v0
              </Button>
            </div>
          </div>
          
          <div className="p-6">
            <TabsContent value="preview" className="mt-0">
              <div className="flex min-h-[500px] w-full items-center justify-center rounded-md border overflow-hidden bg-background">
                <iframe 
                  src="https://zeta-registry.vercel.app/logo" 
                  className="w-full h-[500px] border-0"
                  title="Logo Component Preview"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="code" className="mt-0">
              <div className="flex min-h-[500px] w-full flex-col rounded-md border p-4 bg-background">
                <Accordion type="single" collapsible className="w-full">
                  {files.map((file, index) => (
                    <AccordionItem key={index} value={`file-${index}`}>
                      <AccordionTrigger className="text-sm font-mono">
                        {file.name}
                      </AccordionTrigger>
                      <AccordionContent>
                        <pre className="p-4 rounded-md bg-muted overflow-x-auto">
                          <code className="text-sm">{file.content}</code>
                        </pre>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>
            
            <TabsContent value="registry" className="mt-0">
              <div className="flex min-h-[500px] w-full flex-col rounded-md border p-4 bg-background">
                <pre className="p-4 rounded-md bg-muted overflow-x-auto">
                  <code className="text-sm">
                    {JSON.stringify(registryContent, null, 2)}
                  </code>
                </pre>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  )
} 