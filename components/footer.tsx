import { GitHubIcon } from "@/components/assets/icons/github"
import { LeetCodeIcon } from "@/components/assets/icons/leetcode"
import { LinkedInIcon } from "@/components/assets/icons/linkedin"
import { TwitterXIcon } from "@/components/assets/icons/TwitterX"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { NAV_LINKS } from "@/lib/data"
import { cn } from "@/lib/utils"
import { MailIcon } from "lucide-react"
import { Bitcount_Grid_Double } from "next/font/google"
import Link from "next/link"

const bitcount_grid_double = Bitcount_Grid_Double({
  subsets: ["latin"],
})

export function Footer() {
  return (
    <footer className="mt-20 border-t bg-muted/40">
      <div className="container mx-auto px-4 py-10">
        {/* Top Row */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Brand */}
          <div className="text-center md:text-start">
            <h2 className={cn("text-2xl", bitcount_grid_double.className)}>
              <Link href="/">Ishant Bhurani</Link>
            </h2>
            <p className="text-sm text-muted-foreground">
              Full-stack developer building modern web apps
            </p>
          </div>

          {/* NAV */}
          <div className="flex flex-col items-center gap-4 text-sm lg:flex-row lg:gap-6">
            <ul className="flex flex-col items-center gap-4 sm:flex-row">
              {NAV_LINKS.map((link, index) => (
                <li key={index}>
                  <Button variant="link" asChild>
                    <Link href={link.href}>{link.label}</Link>
                  </Button>
                </li>
              ))}
            </ul>

            {/* Social Icons */}
            <div className="mt-2 flex items-center gap-3 md:mt-0">
              {/* <SocialIcons /> */}
              <div className="flex items-center justify-center gap-1">
                <Button variant="ghost" size="icon" title="GitHub" asChild>
                  <a href="https://github.com/ishantbh" target="_blank">
                    <GitHubIcon className="size-6" />
                    <span className="sr-only">Ishant Bhurani on GitHub</span>
                  </a>
                </Button>

                <Button variant="ghost" size="icon" title="LeetCode" asChild>
                  <a href="https://leetcode.com/u/ishantbh/" target="_blank">
                    <LeetCodeIcon className="size-5" />
                    <span className="sr-only">Ishant Bhurani on LeetCode</span>
                  </a>
                </Button>

                <Button variant="ghost" size="icon" title="Twitter" asChild>
                  <a href="https://x.com/" target="_blank">
                    <TwitterXIcon className="size-4.5" />
                    <span className="sr-only">Ishant Bhurani on Twitter</span>
                  </a>
                </Button>

                <Button variant="ghost" size="icon" title="LinkedIn" asChild>
                  <a href="https://www.linkedin.com/in/" target="_blank">
                    <LinkedInIcon className="size-5" />
                    <span className="sr-only">Ishant Bhurani on LinkedIn</span>
                  </a>
                </Button>

                <Button variant="ghost" size="icon" title="Email" asChild>
                  <a href="mailto:ishant.dev@outlook.com" target="_blank">
                    <MailIcon className="size-5" />
                    <span className="sr-only">Email Ishant Bhurani</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <Separator className="my-6" />

        {/* Bottom Row */}
        <div className="flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Ishant Bhurani. All rights
            reserved.
          </p>

          <div className="flex items-center gap-4">
            <Button
              variant="link"
              size="xs"
              className="p-0 text-inherit hover:text-primary"
              asChild
            >
              <a href="https://github.com/ishantbh/portfolio" target="_blank">
                View Source
              </a>
            </Button>

            <span>&bull;</span>

            <p>Built with Next.js & Tailwind</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
