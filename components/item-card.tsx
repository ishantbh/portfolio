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
import { ExternalLinkIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type ItemCardProps = {
  title: string
  description: string
  tags: string[]
  image: string
  href: string
  github?: string
  demo?: string
}

export function ItemCard({
  title,
  description,
  tags,
  image,
  href,
  github,
  demo,
}: ItemCardProps) {
  return (
    <Card className="group overflow-hidden pt-0 shadow-primary/10 transition-all hover:shadow-lg">
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <CardHeader>
        <CardTitle>
          <Link href={href}>{title}</Link>
        </CardTitle>

        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="rounded py-1">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent>
        <p className="line-clamp-3 text-sm text-muted-foreground">
          {description}
        </p>
      </CardContent>

      <CardFooter className="flex gap-3">
        <Button size="sm" asChild>
          <Link href={href}>Details</Link>
        </Button>

        {github && (
          <Button size="icon" variant="outline" asChild>
            <a href={github} target="_blank">
              <GitHubIcon className="size-5" />
              <span className="sr-only">{title} on GitHub</span>
            </a>
          </Button>
        )}

        {demo && (
          <Button size="icon" variant="outline" asChild>
            <a href={demo} target="_blank">
              <ExternalLinkIcon className="h-4 w-4" />
              <span className="sr-only">{title} Demo</span>
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
