import Link from "next/link"
import { Bitcount_Grid_Double } from "next/font/google"
import { cn } from "@/lib/utils"
import { Nav } from "@/components/nav"

const bitcount_grid_double = Bitcount_Grid_Double({
  subsets: ["latin"],
})

export function Header() {
  return (
    <header className="w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between gap-2 px-4">
        <Link
          href="/"
          className={cn("text-xl", bitcount_grid_double.className)}
        >
          Ishant Bhurani
        </Link>

        <Nav />
      </div>
    </header>
  )
}
