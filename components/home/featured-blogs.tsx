import { ItemCard } from "@/components/item-card"
import { Button } from "@/components/ui/button"
import { BLOGS } from "@/lib/data"
import Link from "next/link"

export function FeaturedBlogsSection() {
  const featuredBlogs = BLOGS.filter((blog) => blog.isFeatured)

  return (
    <section className="py-20">
      <div className="container mx-auto animate-in px-4 duration-700 fade-in slide-in-from-bottom-4">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Blogs
          </h2>
          <p className="mt-2 text-muted-foreground">
            A selection of things I've written recently
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {featuredBlogs.map((blog) => (
            <ItemCard key={blog.slug} {...blog} href={`/blogs/${blog.slug}`} />
          ))}
        </div>

        {/* View All Blogs Button */}
        <div className="mt-12 flex justify-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/blogs">View All Blogs</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
