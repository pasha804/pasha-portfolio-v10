export type SkillGroup = {
  id: string;
  title: string;
  blurb: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    blurb: "Interfaces that feel engineered, not assembled.",
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    blurb: "Python services built to scale and stay predictable.",
    items: ["Python", "FastAPI", "REST APIs", "PostgreSQL", "Redis", "Docker"],
  },
  {
    id: "ai",
    title: "AI",
    blurb: "Models wired into real product surfaces.",
    items: [
      "LLM APIs",
      "Prompt engineering",
      "AI agents",
      "AI-assisted development",
      "RAG concepts",
      "AI integrations",
    ],
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    blurb: "A modern, AI-native development workflow.",
    items: [
      "Docker",
      "Antigravity",
      "Kiro AI",
      "Freebuff",
      "OpenCode",
      "Cursor",
      "Git",
      "GitHub",
      "VS Code",
    ],
  },
];

export const journey = [
  {
    step: "01",
    title: "Started Building",
    tag: "Learning",
    body: "Began with the fundamentals of the web — HTML, CSS and JavaScript — and never stopped shipping small things.",
  },
  {
    step: "02",
    title: "Full Stack",
    tag: "Building",
    body: "Moved into React and TypeScript on the front, Python and FastAPI with PostgreSQL behind it.",
  },
  {
    step: "03",
    title: "AI Engineering",
    tag: "AI",
    body: "Started building with LLM APIs, agents and retrieval concepts — AI as a product feature, not a demo.",
  },
  {
    step: "04",
    title: "Creative Web",
    tag: "Creative",
    body: "Pushed into motion, scroll choreography and cinematic interaction as a craft of its own.",
  },
  {
    step: "05",
    title: "Building Products",
    tag: "Products",
    body: "Now building complete products: Nexora, Pasha Tools, Wishora and Zoro 2.0.",
  },
];

export const services = [
  {
    title: "AI-powered web apps",
    body: "LLM features designed into the product, not bolted on top of it.",
  },
  {
    title: "Full-stack applications",
    body: "React + TypeScript front ends on Python services and PostgreSQL.",
  },
  { title: "Python / FastAPI backends", body: "Typed, documented APIs built to be maintained." },
  { title: "API integrations", body: "Third-party services wired in cleanly and safely." },
  { title: "AI integrations", body: "Adding intelligence to an existing product or workflow." },
  { title: "Cinematic websites", body: "Motion-led, interactive experiences that stay fast." },
  { title: "Developer tools", body: "Utilities and internal tooling that remove friction." },
  { title: "Automation", body: "Scripts, agents and pipelines that do the repetitive work." },
];
