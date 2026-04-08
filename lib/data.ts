export const NAV_LINKS = [
  { href: "/", label: "Home", isCTA: false },
  { href: "/about", label: "About", isCTA: false },
  { href: "/projects", label: "Projects", isCTA: false },
  { href: "/blogs", label: "Blogs", isCTA: false },
  { href: "/#contact", label: "Contact", isCTA: true },
] as const

export const PROJECTS = [
  {
    title: "Noto Notes App",
    description:
      "A notes app with markdown content, tags, and search, built with React, TypeScript, Zustand, and Firebase",
    tags: ["React", "TypeScript", "Zustand", "Firebase"],
    image: "/images/noto-notes.png",
    slug: "noto-notes",
    github: "https://github.com/ishantbh/noto-notes-app",
    demo: "https://noto-notes.netlify.app/",
    isFeatured: true,
  },
  {
    title: "Noto Notes App",
    description:
      "A notes app with markdown content, tags, and search, built with React, TypeScript, Zustand, and Firebase",
    tags: ["React", "TypeScript", "Zustand", "Firebase"],
    image: "/images/noto-notes.png",
    slug: "noto-notes-1",
    github: "https://github.com/ishantbh/noto-notes-app",
    demo: "https://noto-notes.netlify.app/",
    isFeatured: true,
  },
  {
    title: "Project Three",
    description: "A modern web app built with Next.js and Tailwind.",
    tags: ["Next.js", "Tailwind"],
    image: "/images/project-3.jpg",
    slug: "project-three",
    github: "#",
    demo: "#",
    isFeatured: false,
  },
] as const
