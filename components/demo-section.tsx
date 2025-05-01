import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Logo from "@/components/logos"
import { CopyButton } from "./copy-button"

export function DemoSection() {
  const logoUrl = 'https://registry-template-zeta.vercel.app/logo'
  const installCommand = `npx shadcn@latest add ${logoUrl}`

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-8 text-center">Try it yourself</h2>
      
      {/* Component Preview Card */}
      <div className="bg-card border border-border rounded-lg p-6 mb-8">
        <div className="flex flex-col items-center gap-6">
          {/* Logo Preview */}
          <div className="relative">
            <div className="w-20 h-20 flex items-center justify-center bg-background rounded-xl border border-border shadow-lg">
              <Logo name="zeta" className="w-10 h-10 text-foreground" />
            </div>
            <div className="absolute -top-2 -right-2">
              <div className="px-2 py-1 text-[10px] font-mono bg-primary text-primary-foreground rounded-md shadow-lg">
                Logo
              </div>
            </div>
          </div>

          {/* Installation Command */}
          <div className="w-full space-y-2">
            <p className="text-sm text-center text-muted-foreground">Install this component from our registry:</p>
            <div className="relative">
              <pre className="bg-background border border-border rounded-lg p-3 font-mono text-xs sm:text-sm overflow-x-auto">
                <code>npx shadcn add {logoUrl}</code>
              </pre>
              <div className="absolute top-0 right-0 mt-1.5 mr-1.5">
                <CopyButton textToCopy={installCommand} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Instructions Card */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Protected Component</h3>
        <div className="prose prose-sm dark:prose-invert">
          <p className="text-sm text-muted-foreground mb-4">
            This component is protected by a license key. Follow these steps to install:
          </p>
          <ol className="list-decimal list-inside space-y-3 text-sm text-muted-foreground">
            <li className="leading-relaxed">
              Open the component in your browser:
              <a 
                href={logoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-1 text-xs sm:text-sm font-mono text-primary hover:underline truncate max-w-full pl-5"
              >
                {logoUrl}
              </a>
            </li>
            <li className="leading-relaxed">Enter the valid license key when prompted</li>
            <li className="leading-relaxed">Upon successful validation, you&apos;ll receive an access token</li>
            <li className="leading-relaxed">Use this token to install the component via the CLI</li>
          </ol>
          <div className="mt-6">
            <Button
              asChild
              variant="ghost"
              size="default"
            >
              <a
                href={logoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                Access Component
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 