import nexora from "@/assets/projects/nexora.jpg";
import pashaTools from "@/assets/projects/pasha-tools.jpg";
import wishora from "@/assets/projects/wishora.jpg";
import zoro from "@/assets/projects/zoro.jpg";
import cinematic from "@/assets/projects/cinematic.jpg";

export type ProjectCategory = "AI" | "FULL STACK" | "CREATIVE" | "TOOLS";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  tagline: string;
  description: string;
  highlights: string[];
  technologies: string[];
  status: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  layout: "feature" | "split" | "compact";
};

export const projects: Project[] = [
  {
    id: "nexora",
    title: "Nexora",
    category: "AI",
    tagline: "AI skill & social platform",
    description:
      "LinkedIn meets Discord meets a competitive skill arena. A professional feed, communities, and skill PvP matches judged by an AI referee, with an AI coach tracking progress across multiple skill tracks.",
    highlights: [
      "AI skill development tracks",
      "Professional feed & communities",
      "Skill PvP with AI judge",
      "AI coach & progress tracking",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    status: "In development",
    image: nexora,
    featured: true,
    layout: "feature",
  },
  {
    id: "pasha-tools",
    title: "Pasha Tools",
    category: "TOOLS",
    tagline: "Developer command center",
    description:
      "A free platform of developer and productivity utilities: PDF and image tooling, video utilities, QR, JSON, JWT, Base64, hashing, regex, translation, text-to-speech and more — all in one fast interface.",
    highlights: [
      "PDF, image & video utilities",
      "JSON / JWT / Base64 / hashing",
      "Regex, translation, TTS",
      "Modern React + Python backend",
    ],
    technologies: ["React", "TypeScript", "Tailwind", "Python", "FastAPI"],
    status: "Live project",
    image: pashaTools,
    layout: "split",
  },
  {
    id: "wishora",
    title: "Wishora",
    category: "FULL STACK",
    tagline: "Personalized greeting cards",
    description:
      "A digital greeting card studio with animated templates, real-time editing, photo upload and downloadable cards — emotional design inside a fast, responsive product.",
    highlights: [
      "Animated card templates",
      "Real-time editor",
      "Photo upload & download",
      "Fully responsive",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    status: "Live project",
    image: wishora,
    layout: "split",
  },
  {
    id: "zoro",
    title: "Zoro 2.0",
    category: "AI",
    tagline: "Native AI desktop assistant",
    description:
      "A local-first, Jarvis-style workstation assistant: voice interaction, memory, computer control and AI reasoning behind a wake phrase — speaking English, Urdu and Roman Urdu.",
    highlights: [
      "Voice interaction & wake phrase",
      "Memory + AI reasoning",
      "Computer control",
      "Urdu / Roman Urdu / English",
    ],
    technologies: ["Tauri", "React", "Python", "Local voice", "AI models"],
    status: "In development",
    image: zoro,
    layout: "compact",
  },
  {
    id: "cinematic-web",
    title: "Cinematic Web Experiences",
    category: "CREATIVE",
    tagline: "A Little Galaxy · Eternal Garden · Aura Protocol",
    description:
      "A body of interactive celebration and event experiences built as creative experiments — scroll choreography, particle ambience and motion-led storytelling in the browser.",
    highlights: [
      "A Little Galaxy",
      "Eternal Garden",
      "Aura Protocol",
      "Interactive event experiences",
    ],
    technologies: ["React", "TypeScript", "Framer Motion", "Canvas", "CSS"],
    status: "Ongoing series",
    image: cinematic,
    layout: "compact",
  },
];

export const projectFilters = ["ALL", "AI", "FULL STACK", "CREATIVE", "TOOLS"] as const;

export const projectStats = [
  { value: "10+", label: "Projects built" },
  { value: "5+", label: "AI / full stack systems" },
  { value: "Multiple", label: "Live deployments" },
  { value: "∞", label: "Ideas shipped" },
];
