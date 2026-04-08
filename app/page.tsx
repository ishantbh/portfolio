import { ContactSection } from "@/components/home/contact"
import { FeaturedBlogsSection } from "@/components/home/featured-blogs"
import { FeaturedProjectsSection } from "@/components/home/featured-projects"
import { HeroSection } from "@/components/home/hero"

export default function Page() {
  return (
    <>
      <HeroSection />
      <FeaturedProjectsSection />
      <FeaturedBlogsSection />
      <ContactSection />
    </>
  )
}
