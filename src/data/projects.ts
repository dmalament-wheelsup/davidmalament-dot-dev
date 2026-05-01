export interface Project {
  name: string;
  description: string;
  stack: string[];
  href?: string;
  repo?: string;
}

export const projects: Project[] = [
  {
    name: "Project One",
    description:
      "A short, punchy sentence describing what it does and why it's interesting.",
    stack: ["TypeScript", "React", "Postgres"],
    href: "https://example.com",
    repo: "https://github.com/example/one",
  },
  {
    name: "Project Two",
    description:
      "Another project — focus on the problem solved and the impact, not the tech laundry list.",
    stack: ["Go", "gRPC", "Redis"],
    repo: "https://github.com/example/two",
  },
  {
    name: "Project Three",
    description:
      "A weekend hack that turned into something useful. Replace this copy with real wins.",
    stack: ["Astro", "Tailwind"],
    href: "https://example.com",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Go", "SQL"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "Astro", "Tailwind CSS", "Vite"],
  },
  {
    group: "Backend & infra",
    items: ["Node.js", "PostgreSQL", "Redis", "Docker", "AWS", "Vercel"],
  },
  {
    group: "Practices",
    items: ["Testing", "CI/CD", "Performance", "Accessibility", "DX"],
  },
];
