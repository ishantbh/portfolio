import { ItemCard } from "@/components/item-card"
import { PROJECTS } from "@/lib/data"

export default function ProjectsPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto animate-in px-4 duration-700 fade-in slide-in-from-bottom-4">
        {/* Title */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Projects
          </h1>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <ItemCard
              key={project.slug}
              {...project}
              href={`/projects/${project.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
