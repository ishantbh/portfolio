import { GitHubIcon } from "@/components/assets/icons/github"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PROJECTS } from "@/lib/data"
import { ExternalLinkIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function ProjectDetailsPage(props: {
  params: Promise<{ slug: string }>
}) {
  const params = await props.params
  const slug = params.slug

  const project = PROJECTS.find((project) => project.slug === slug)

  if (!project) {
    return notFound()
  }

  return (
    <section className="py-16">
      <div className="container mx-auto animate-in px-4 duration-700 fade-in slide-in-from-bottom-4">
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="group rounded-md bg-linear-to-br from-blue-500/50 to-purple-500/50 p-0.5 transition-transform duration-300 hover:scale-105">
            <div className="flex items-center justify-center overflow-hidden rounded-md shadow-xl shadow-primary/15 transition group-hover:shadow-lg">
              <Image
                src="/images/noto-notes.png"
                alt="Ishant Bhurani"
                width={600}
                height={400}
                className="w-full object-cover"
              />
            </div>
          </div>

          <div className="text-center">
            {/* Title */}
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
              {project.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {project.tags.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-center gap-4">
              <Button variant="outline" asChild>
                <a href={project.github} target="_blank">
                  <GitHubIcon className="size-5" />{" "}
                  <span aria-hidden>GitHub</span>
                  <span className="sr-only">{project.title} on GitHub</span>
                </a>
              </Button>

              <Button variant="outline" asChild>
                <a href={project.demo} target="_blank">
                  <ExternalLinkIcon className="h-4 w-4" />{" "}
                  <span aria-hidden>Demo</span>
                  <span className="sr-only">{project.title} Demo</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Project Details */}
          <div className="w-full max-w-2xl space-y-4 text-center text-lg text-muted-foreground">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
              consequuntur, pariatur quaerat sapiente sint magni. Similique
              praesentium placeat nesciunt quas nam sequi reiciendis quisquam at
              dolore rerum quidem vero nulla, perspiciatis recusandae libero qui
              suscipit illum asperiores quia nobis maiores repellat debitis? Quo
              nobis delectus nemo recusandae doloribus obcaecati consectetur.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
              dolor sunt repudiandae aperiam fugit quibusdam recusandae, quidem
              praesentium fuga esse dolorum voluptatum alias reprehenderit velit
              maiores iste quae perspiciatis voluptate.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              quaerat. Ut, beatae. Necessitatibus natus tempore architecto
              consequatur ut? Facilis dignissimos doloremque, deleniti
              consectetur beatae vero fugit velit dolor provident sequi! Maxime
              totam inventore adipisci dicta quas aspernatur optio numquam
              aliquam amet. Quis, non. Harum in dignissimos, animi fuga totam
              esse.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex items-center justify-center gap-4">
              <Button variant="outline" asChild>
                <a href={project.github} target="_blank">
                  <GitHubIcon className="size-5" />{" "}
                  <span aria-hidden>GitHub</span>
                  <span className="sr-only">{project.title} on GitHub</span>
                </a>
              </Button>

              <Button variant="outline" asChild>
                <a href={project.demo} target="_blank">
                  <ExternalLinkIcon className="h-4 w-4" />{" "}
                  <span aria-hidden>Demo</span>
                  <span className="sr-only">{project.title} Demo</span>
                </a>
              </Button>
            </div>
            <Button size="lg" className="px-8" asChild>
              <Link href="/#contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
