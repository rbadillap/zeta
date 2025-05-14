import Link from "next/link"
import { PlusIcon, MailIcon, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import Logo from "@/components/logos"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Demo } from "@/components/demo"

export default function Page() {
  return (
    <main className="min-h-svh flex flex-col bg-background text-foreground">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center py-28 px-4 min-h-[60vh]">
        {/* background glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[480px] h-[320px] bg-gradient-to-br from-primary/30 via-accent/20 to-transparent rounded-full blur-3xl opacity-60 animate-pulse-slow" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-8">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight bg-gradient-to-r from-white via-muted-foreground to-accent bg-clip-text text-transparent drop-shadow-xl">
            zeta
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl">
            An open source registry for 
            <span className="px-2 font-mono text-accent-foreground bg-accent/40">
              <Logo name="shadcn" className="w-5 h-5 inline-flex items-center gap-1" />
              shadcn/ui
            </span> 
            components &mdash; built for private and premium projects.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl flex items-center gap-4">
            Compatible with latest features of <a href="https://alpine-registry.vercel.app" target="_blank" rel="noopener noreferrer" className="underline"><Logo name="alpine" /></a>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2">
            <Button
              asChild
              size="lg"
              className="px-8 py-4 text-base font-semibold bg-primary text-primary-foreground border border-primary/70 shadow-inner shadow-primary/10 hover:bg-primary/90 focus:ring-2 focus:ring-primary/40 focus:outline-none w-full sm:w-auto"
            >
              <Link href="/docs" className="flex items-center gap-2">
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-8 py-4 text-base font-semibold border border-border/70 text-foreground bg-background hover:bg-muted/60 focus:ring-2 focus:ring-accent/40 focus:outline-none w-full sm:w-auto"
            >
              <a href="https://github.com/rbadillap/zeta" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Logo name="github" className="w-4 h-4" /> View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="flex flex-col items-center justify-center px-4 mt-32">
        <h2 className="text-2xl font-semibold mb-8 text-center">Integrations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          <a href="https://docs.polar.sh/features/benefits/license-keys" target="_blank" rel="noopener noreferrer" className="group h-full">
            <div className="relative h-full bg-card/70 rounded-xl p-6 flex flex-col items-center border border-border shadow-lg shadow-primary/5 hover:border-primary/40 transition-colors duration-300">
              <Logo name="polar" className="w-12 h-12 rounded mb-4 opacity-80 group-hover:opacity-100 transition" />
              <h3 className="font-semibold text-lg mb-2">Polar.sh</h3>
              <Badge variant="default" className="mb-3">Available</Badge>
              <Badge variant="secondary" className="mb-3">License Keys</Badge>
              <p className="text-sm text-muted-foreground text-center">Secure distribution of private components with license key validation</p>
            </div>
          </a>
          <div className="opacity-60 h-full">
            <div className="relative h-full bg-card/70 rounded-xl p-6 flex flex-col items-center border border-border shadow-lg shadow-primary/5">
              <Logo name="betterauth" className="w-12 h-12 rounded mb-4" />
              <h3 className="font-semibold text-lg mb-2">Better Auth</h3>
              <Badge variant="outline" className="mb-3">Coming Soon</Badge>
              <Badge variant="secondary" className="mb-3">Authentication</Badge>
              <p className="text-sm text-muted-foreground text-center">Secure authentication with email/password, social login, and more</p>
            </div>
          </div>
          <div className="h-full">
            <div className="relative h-full bg-gradient-to-br from-muted/40 to-background rounded-xl p-6 flex flex-col items-center border border-dashed border-muted-foreground/20 shadow-lg shadow-primary/5">
              <div className="w-12 h-12 rounded mb-4 flex items-center justify-center bg-muted/30">
                <PlusIcon className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Missing an Integration?</h3>
              <p className="text-sm text-muted-foreground text-center mb-6">Have a service that could enhance Zeta?</p>
              <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                <a
                  href="https://github.com/rbadillap/zeta/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  <Logo name="github" className="w-4 h-4" />
                  Start a Discussion
                </a>
                <span className="hidden sm:inline text-muted-foreground">or</span>
                <a
                  href="mailto:info@rbadillap.dev"
                  className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  <MailIcon className="w-4 h-4" />
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="flex flex-col items-center justify-center px-4 mt-32">
        <h2 className="text-2xl font-semibold mb-12 text-center">How it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          <div className="relative bg-card/70 rounded-xl py-8 px-6 flex flex-col items-center border border-border shadow-lg shadow-primary/5">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-3xl font-mono text-muted-foreground drop-shadow-lg select-none bg-background rounded-md py-1 px-4 border border-border">1</span>
            <h3 className="font-semibold mb-2 mt-6 text-lg bg-gradient-to-r from-primary to-muted-foreground bg-clip-text text-transparent">
              Get Components
            </h3>
            <p className="text-sm text-muted-foreground text-center">Clone this registry or copy the components you need from our collection.</p>
          </div>
          <div className="relative bg-card/70 rounded-xl py-8 px-6 flex flex-col items-center border border-border shadow-lg shadow-primary/5">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-3xl font-mono text-muted-foreground drop-shadow-lg select-none bg-background rounded-md py-1 px-4 border border-border">2</span>
            <h3 className="font-semibold mb-2 mt-6 text-lg bg-gradient-to-r from-primary to-muted-foreground bg-clip-text text-transparent">
              Configure Components
            </h3>
            <p className="text-sm text-muted-foreground text-center">Add your components to registry.json and use /registry/[name] to reference them.</p>
          </div>
          <div className="relative bg-card/70 rounded-xl py-8 px-6 flex flex-col items-center border border-border shadow-lg shadow-primary/5">
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-3xl font-mono text-muted-foreground drop-shadow-lg select-none bg-background rounded-md py-1 px-4 border border-border">3</span>
            <h3 className="font-semibold mb-2 mt-6 text-lg bg-gradient-to-r from-primary to-muted-foreground bg-clip-text text-transparent">
              Generate Token
            </h3>
            <p className="text-sm text-muted-foreground text-center">Click any component URL to access the login page where users can enter their license key.</p>
          </div>
        </div>
      </section>


      {/* Demo */}
      <section className="flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-transparent via-card/30 to-transparent w-full mt-32">
        <a id="example" href="#example">
          <h2 className="text-2xl font-semibold mb-12 text-center">
            Try it yourself
          </h2>
        </a>
        <Demo />
      </section>

      {/* FAQ */}
      <section className="flex flex-col items-center justify-center px-4 w-full mt-32">
        <h2 className="text-2xl font-semibold mb-8 text-center">FAQ</h2>
        <div className="w-full max-w-2xl">
          <Accordion type="multiple" className="border-none bg-transparent">
            <AccordionItem value="q1">
              <AccordionTrigger>What is a shadcn registry?</AccordionTrigger>
              <AccordionContent>
                A registry is a source of components that can be installed directly via the shadcn CLI, enabling easy sharing and distribution.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>How do I protect my components?</AccordionTrigger>
              <AccordionContent>
                By integrating with Polar.sh, you can issue and validate license keys, ensuring only authorized users can install your components.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger>What is Polar.sh and how does it integrate?</AccordionTrigger>
              <AccordionContent>
                Polar.sh provides license key management and validation. Zeta integrates with Polar.sh to automate license checks for premium/private components.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q4">
              <AccordionTrigger>Can I use Zeta for open source projects?</AccordionTrigger>
              <AccordionContent>
                Absolutely! Zeta is open source and can be used for both public and private registries.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q5">
              <AccordionTrigger>What integrations are planned?</AccordionTrigger>
              <AccordionContent>
                Integrations with Better Auth for authentication and Vercel for deployment are in the works.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q6">
              <AccordionTrigger>How do I get an access key?</AccordionTrigger>
              <AccordionContent>
                Access keys are managed via Polar.sh. Check their <a href="https://docs.polar.sh/features/benefits/license-keys" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">documentation</a> for details.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q7">
              <AccordionTrigger>Is Zeta associated with shadcn/ui or Polar.sh?</AccordionTrigger>
              <AccordionContent>
                No, Zeta is an independent project created by <a href="https://x.com/rbadillap" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Ronny Badilla</a>. It leverages Polar.sh for license key management. More integrations are planned in the future.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q8">
              <AccordionTrigger>Why is this project called Zeta?</AccordionTrigger>
              <AccordionContent>
                Zeta is the eighth letter of the Greek... nah! it was the name randomly chosen by Vercel when I created the project :)
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full flex items-center justify-center py-12 mt-32">
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <a href="https://x.com/shadcn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition">
            <Avatar className="w-8 h-8 rounded-full">
              <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
              <AvatarFallback>sh</AvatarFallback>
            </Avatar>
            shadcn — creator of shadcn registry
          </a>
          <span className="text-muted-foreground">/</span>
          <a href="https://x.com/rbadillap" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition">
            <Avatar className="w-8 h-8 rounded-full">
              <AvatarImage src="https://github.com/rbadillap.png" alt="Ronny Badilla" />
              <AvatarFallback>RB</AvatarFallback>
            </Avatar>
            rbadillap — creator of zeta registry
          </a>
        </div>
      </footer>
    </main>
  )
}
