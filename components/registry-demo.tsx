'use client'

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"

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
            
            <div className="flex items-center gap-2">
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
              <div className="flex min-h-[500px] w-full items-center justify-center rounded-md border border-dashed">
              </div>
            </TabsContent>
            
            <TabsContent value="registry" className="mt-0">
              <div className="flex min-h-[500px] w-full items-center justify-center rounded-md border border-dashed">
                Registry content will go here
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  )
} 