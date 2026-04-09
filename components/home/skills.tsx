import { Badge } from "@/components/ui/badge"
import { SKILLS } from "@/lib/data"

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto animate-in px-4 duration-700 fade-in slide-in-from-bottom-4">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Skills
          </h2>
          <p className="mt-2 text-muted-foreground">
            A selection of things I know
          </p>
        </div>

        {/* Skills List */}
        <ul className="mx-auto flex w-full max-w-xl flex-wrap items-center justify-center gap-4 md:gap-6">
          {SKILLS.map((skill, index) => (
            <li key={index} className="flex items-center gap-1">
              <Badge variant="secondary" className="p-4 text-base">
                {skill}
              </Badge>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
