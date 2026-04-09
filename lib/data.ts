import { Blog, Project } from "@/lib/types"

export const NAV_LINKS = [
  { href: "/", label: "Home", isCTA: false },
  { href: "/about", label: "About", isCTA: false },
  { href: "/#skills", label: "Skills", isCTA: false },
  { href: "/projects", label: "Projects", isCTA: false },
  { href: "/blogs", label: "Blogs", isCTA: false },
  { href: "/#contact", label: "Contact", isCTA: true },
] as const

export const SKILLS = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Tailwind",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "MERN",
  "Next.js",
  "Firebase",
  "Vercel",
  "GitHub",
] as const

export const PROJECTS: Project[] = [
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

export const BLOGS: Blog[] = [
  {
    title: "Dummy Blog",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tags: ["Next.js", "Tailwind"],
    image: "/images/noto-notes.png",
    slug: "noto-notes",
    isFeatured: true,
  },
  {
    title: "Dummy Blog",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tags: ["Next.js", "Tailwind"],
    image: "/images/noto-notes.png",
    slug: "noto-notes-1",
    isFeatured: true,
  },
] as const
