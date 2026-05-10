export interface Project {
  name: string;
  description: string;
  stack: string[];
  href?: string;
  repo?: string;
}

export const projects: Project[] = [
  {
    name: "graphql-mock",
    description:
      "A dev-time GraphQL server that proxies live fields to a real backend and mocks new or overridden fields with realistic fake data — so codegen, your client, and Apollo Sandbox can run against tomorrow's schema today.",
    stack: ["TypeScript", "GraphQL Yoga", "Node.js"],
    repo: "https://github.com/dmalament-wheelsup/graphql-mock",
  },
  {
    name: "Normal Sport annotations",
    description:
      "Inline annotations for Normal Sport: members highlight any passage to drop a note, reply, or like — with a side panel that sorts, filters to your own, and toggles highlights on or off without losing the thread.",
    stack: ["JavaScript", "Supabase", "Memberstack"],
    href: "https://www.normalsport.com/newsletter",
    repo: "https://github.com/dmalament-wheelsup/normal-sport",
  },
  {
    name: "moderation-bot",
    description:
      "An always-on companion to the Normal Sport annotations project. Every new note and reply gets a quiet read-through from Claude — and if anything crosses the line, the team hears about it in Slack within seconds.",
    stack: ["TypeScript", "Cloudflare Workers", "Claude API", "Supabase"],
    repo: "https://github.com/dmalament-wheelsup/moderation-bot",
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
