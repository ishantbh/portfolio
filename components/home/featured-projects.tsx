import { ItemCard } from "@/components/item-card"
import { Button } from "@/components/ui/button"
import { PROJECTS } from "@/lib/data"
import Link from "next/link"

export function FeaturedProjectsSection() {
  const featuredProjects = PROJECTS.filter((project) => project.isFeatured)

  return (
    <section className="py-20">
      <div className="container mx-auto animate-in px-4 duration-700 fade-in slide-in-from-bottom-4">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-2 text-muted-foreground">
            A selection of things I've built recently
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ItemCard
              key={project.slug}
              {...project}
              href={`/projects/${project.slug}`}
            />
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-12 flex justify-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
