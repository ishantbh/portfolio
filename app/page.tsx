import { ContactSection } from "@/components/home/contact"
import { FeaturedBlogsSection } from "@/components/home/featured-blogs"
import { FeaturedProjectsSection } from "@/components/home/featured-projects"
import { HeroSection } from "@/components/home/hero"
import { SkillsSection } from "@/components/home/skills"

export default function Page() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <FeaturedProjectsSection />
      <FeaturedBlogsSection />
      <ContactSection />
    </>
  )
}
