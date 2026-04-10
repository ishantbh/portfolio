import { Button } from "@/components/ui/button"
import { FrownIcon } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <section className="py-16">
      <div className="container mx-auto animate-in px-4 duration-700 fade-in slide-in-from-bottom-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <FrownIcon className="size-10 text-gray-400" />
          <h2 className="text-xl font-semibold">404 Not Found</h2>
          <p>Could not find the requested project</p>
          <Button variant="outline" size="lg" className="mt-4" asChild>
            <Link href="/projects">Go Back to projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
