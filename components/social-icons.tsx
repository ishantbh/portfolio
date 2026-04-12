import { GitHubIcon } from "@/components/assets/icons/github"
import { LeetCodeIcon } from "@/components/assets/icons/leetcode"
import { LinkedInIcon } from "@/components/assets/icons/linkedin"
import { TwitterXIcon } from "@/components/assets/icons/TwitterX"
import { Button } from "@/components/ui/button"
import { MailIcon } from "lucide-react"

export function SocialIcons() {
  return (
    <div className="flex items-center justify-center gap-4">
      <Button variant="outline" size="icon" title="GitHub" asChild>
        <a href="https://github.com/ishantbh" target="_blank">
          <GitHubIcon className="size-8" />
          <span className="sr-only">Ishant Bhurani on GitHub</span>
        </a>
      </Button>

      <Button variant="outline" size="icon" title="LeetCode" asChild>
        <a href="https://leetcode.com/u/ishantbh/" target="_blank">
          <LeetCodeIcon className="size-6" />
          <span className="sr-only">Ishant Bhurani on LeetCode</span>
        </a>
      </Button>

      <Button
        variant="outline"
        size="icon"
        title="X (formerly Twitter)"
        asChild
      >
        <a href="https://x.com/" target="_blank">
          <TwitterXIcon className="size-5" />
          <span className="sr-only">
            Ishant Bhurani on X (formerly Twitter)
          </span>
        </a>
      </Button>

      <Button variant="outline" size="icon" title="LinkedIn" asChild>
        <a href="https://www.linkedin.com/in/" target="_blank">
          <LinkedInIcon className="size-5" />
          <span className="sr-only">Ishant Bhurani on LinkedIn</span>
        </a>
      </Button>

      <Button variant="outline" size="icon" title="Email" asChild>
        <a href="mailto:ishant.dev@outlook.com" target="_blank">
          <MailIcon className="size-6" />
          <span className="sr-only">Email Ishant Bhurani</span>
        </a>
      </Button>
    </div>
  )
}
