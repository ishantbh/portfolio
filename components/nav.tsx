"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon } from "lucide-react"
import { navLinks } from "@/lib/data"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Nav() {
  const pathname = usePathname()

  return (
    <>
      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex items-center gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Button
                variant={link.isCTA ? "default" : "link"}
                className={cn(pathname === link.href && "underline")}
                asChild
              >
                <Link href={link.href}>{link.label}</Link>
              </Button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Nav */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              aria-label="Navigation menu"
              title="Navigation menu"
            >
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SheetContent>
            <SheetHeader>
              <SheetTitle className="sr-only">
                Mobile Navigation Menu
              </SheetTitle>
              <SheetDescription className="sr-only">
                Opens the mobile navigation menu
              </SheetDescription>
            </SheetHeader>
            <nav className="flex-1 px-4">
              <ul className="grid gap-6">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Button
                      variant={link.isCTA ? "default" : "ghost"}
                      className={cn(
                        "w-full",
                        pathname === link.href
                          ? "font-bold"
                          : !link.isCTA && "text-muted-foreground"
                      )}
                      asChild
                    >
                      <Link href={link.href} className="px-2 py-4">
                        {link.label}
                      </Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}
