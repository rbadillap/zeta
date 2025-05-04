import path from 'path'
import fs from 'fs/promises'
import type { BundledLanguage } from 'shiki'
import { codeToHtml } from 'shiki'
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs"
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion"
import { AddCommand } from '@/components/add-command'
// import { OpenInV0 } from './open-in-v0'

const registryData = await import("@/registry.json")
const registry = registryData.default

const files = await Promise.all(
  registry.items.flatMap((item) =>
    item.files.map(async (file) => {
      const filePath = path.join(process.cwd(), file.path)
      const content = await fs.readFile(filePath, "utf8")
      return { ...file, content }
    })
  )
)

interface CodeBlockProps {
  children: string
  lang: BundledLanguage
  className?: string
}

async function CodeBlock(props: CodeBlockProps) {
  const out = await codeToHtml(props.children, {
    lang: props.lang,
    theme: 'dark-plus'
  })

  return <div dangerouslySetInnerHTML={{ __html: out }} />
}

export function Demo() {
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
              <AddCommand />
              {/* <OpenInV0 name="logo" className="w-fit" /> */}
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
                        {file.target}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="p-4 rounded-md bg-[#1e1e1e] overflow-x-auto">
                          <CodeBlock lang="tsx">
                            {file.content}
                          </CodeBlock>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>
            
            <TabsContent value="registry" className="mt-0">
              <div className="flex min-h-[500px] w-full flex-col rounded-md border p-4 bg-background">
                <div className="p-4 rounded-md bg-[#1e1e1e] overflow-x-auto">
                  <CodeBlock lang="json">
                    {JSON.stringify(registry, null, 2)}
                  </CodeBlock>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  )
} 