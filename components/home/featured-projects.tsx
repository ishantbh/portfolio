import { GitHubIcon } from "@/components/assets/icons/github"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { PROJECTS } from "@/lib/data"
import { ExternalLinkIcon, GitBranchIcon } from "lucide-react"
import Image from "next/image"
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
            <Card
              key={project.slug}
              className="group overflow-hidden pt-0 shadow-primary/10 transition-all hover:shadow-lg"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <CardHeader>
                <CardTitle>
                  <Link href={`/projects/${project.slug}`}>
                    {project.title}
                  </Link>
                </CardTitle>

                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="rounded py-1"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </CardContent>

              <CardFooter className="flex gap-3">
                <Button size="sm" asChild>
                  <Link href={`/projects/${project.slug}`}>Details</Link>
                </Button>

                <Button size="icon" variant="outline" asChild>
                  <a href={project.github} target="_blank">
                    <GitHubIcon className="size-5" />
                    <span className="sr-only">{project.title} on GitHub</span>
                  </a>
                </Button>

                <Button size="icon" variant="outline" asChild>
                  <a href={project.demo} target="_blank">
                    <ExternalLinkIcon className="h-4 w-4" />
                    <span className="sr-only">{project.title} Demo</span>
                  </a>
                </Button>
              </CardFooter>
            </Card>
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
