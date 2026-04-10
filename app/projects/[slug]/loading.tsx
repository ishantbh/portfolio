import { Skeleton } from "@/components/ui/skeleton"

export default function ProjectDetailsLoading() {
  return (
    <section className="py-16">
      <div className="container mx-auto animate-in px-4 duration-700 fade-in slide-in-from-bottom-4">
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="group rounded-md bg-linear-to-br from-blue-500/50 to-purple-500/50 p-0.5 transition-transform duration-300 hover:scale-105">
            <div className="flex w-fit items-center justify-center overflow-hidden rounded-md shadow-xl shadow-primary/15 transition group-hover:shadow-lg">
              <Skeleton className="h-100 w-150" />
            </div>
          </div>

          <div className="text-center">
            <Skeleton className="h-12 w-87.5" />

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {Array.from({ length: 4 }, (_, i) => (
                <Skeleton key={i} className="h-5 w-12.5" />
              ))}
            </div>

            <div className="mt-6 flex items-center justify-center gap-4">
              {Array.from({ length: 2 }, (_, i) => (
                <Skeleton key={i} className="h-9 w-22" />
              ))}
            </div>
          </div>

          <div className="w-full max-w-2xl space-y-4 text-center text-lg text-muted-foreground">
            {Array.from({ length: 3 }, (_, i) => (
              <Skeleton key={i} className="h-42 w-2xl" />
            ))}
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex items-center justify-center gap-4">
              {Array.from({ length: 2 }, (_, i) => (
                <Skeleton key={i} className="h-9 w-22" />
              ))}
            </div>

            <Skeleton className="h-10 w-36.5" />
          </div>
        </div>
      </div>
    </section>
  )
}
