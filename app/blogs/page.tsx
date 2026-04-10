import { ItemCard } from "@/components/item-card"
import { BLOGS } from "@/lib/data"

export default function BlogsPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto animate-in px-4 duration-700 fade-in slide-in-from-bottom-4">
        {/* Title */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Blogs
          </h1>
        </div>

        {/* Blogs Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {BLOGS.map((blog) => (
            <ItemCard key={blog.slug} {...blog} />
          ))}
        </div>
      </div>
    </section>
  )
}
