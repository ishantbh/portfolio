import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center">
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-blue-500/10 via-purple-500/10 to-transparent blur-3xl" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row">
          {/* Left */}
          <div className="flex justify-center rounded-full shadow-xl shadow-primary/15 lg:justify-end">
            <div className="flex size-64 items-center justify-center overflow-hidden rounded-full bg-muted">
              <Image
                src="/images/ishant_bhurani.jpg"
                alt="Ishant Bhurani"
                width={256}
                height={256}
              />
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col items-center space-y-6 lg:items-start">
            <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-start">
              Hi, I'm{" "}
              <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Ishant Bhurani
              </span>
            </h1>

            <p className="max-w-lg text-center text-lg text-muted-foreground lg:text-start">
              I build modern, scalable web applications using Next.js, Tailwind,
              and clean UI systems. Focused on performance, UX, and developer
              experience.
            </p>

            <div className="flex gap-4">
              <Button size="lg" asChild>
                {/* TODO: ADD CV LINK */}
                <a href="#" download>
                  Download CV
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/#contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
