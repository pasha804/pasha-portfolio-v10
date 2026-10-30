import nexora from "@/assets/projects/nexora.jpg";
import pashaTools from "@/assets/projects/pasha-tools.jpg";
import wishora from "@/assets/projects/wishora.jpg";
import zoro from "@/assets/projects/zoro.jpg";
import pashaDevpilot from "@/assets/projects/pasha-devpilot.jpg";
import guestnexa from "@/assets/projects/guestnexa.png";
import mubarStore from "@/assets/projects/mubar-store.jpg";
import aLittleGalaxy from "@/assets/projects/a-little-galaxy.jpg";
import eternalGarden from "@/assets/projects/eternal-garden.jpg";
import auraProtocol from "@/assets/projects/aura-protocol.jpg";

export type ProjectCategory = "AI" | "FULL STACK" | "CREATIVE" | "TOOLS";

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  tagline: string;
  description: string;
  longDescription: string;
  role: string;
  problem: string;
  solution: string;
  architecture: string;
  challenges: string;
  highlights: string[];
  technologies: string[];
  tech: string[]; // compatibility alias
  status: string;
  image: string;
  imagePublicUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  layout: "feature" | "split" | "compact";
};

export const projects: Project[] = [
  {
    id: "pasha-devpilot",
    slug: "pasha-devpilot",
    title: "Pasha DevPilot",
    category: "AI",
    tagline: "Autonomous AI Software Engineer powered by IBM Bob",
    description:
      "An autonomous SDLC platform that indexes entire repositories, detects syntax and runtime defects via AST parsing, runs isolated test repair loops, and automatically issues GitHub Pull Requests.",
    longDescription:
      "Engineered during the IBM Bob 2.0 global hackathon on Lablab.ai. Pasha DevPilot features a decoupled 7-stage finite state machine orchestrator, Next.js 15 workstation with Monaco side-by-side diffing, and a Python 3.11 FastAPI backend connected to Redis queues and production Railway services.",
    role: "Lead Full-Stack & AI Systems Architect",
    problem:
      "Software teams spend thousands of hours resolving mechanical regression defects, formatting lint issues, and manually reproducing failing pytest suites.",
    solution:
      "A zero-PAT OAuth 2.0 flow connecting real GitHub repositories, running AST defect diagnosis, executing human-in-the-loop approval gates, and running isolated container tests with self-healing repairs.",
    architecture:
      "Next.js 15 (Turbopack) frontend + FastAPI Python 3.11 backend + Redis background worker daemon + IBM Bob 2.0 core reasoning model.",
    challenges:
      "Orchestrating multi-file patch diffs safely without breaking downstream dependencies while maintaining strict execution time limits under 30 seconds.",
    highlights: [
      "Official IBM Bob 2.0 Hackathon on Lablab.ai (Featured Submission)",
      "Next.js 15 App Router workstation + FastAPI Python 3.11 backend",
      "Monaco editor side-by-side diff viewer with file patch tracking",
      "Bounded self-healing test repair loop with automated Git branch push",
    ],
    technologies: [
      "IBM Bob 2.0",
      "Python 3.11",
      "FastAPI",
      "Next.js 15",
      "Redis",
      "Monaco Diff",
      "Docker",
      "Railway",
    ],
    tech: [
      "IBM Bob 2.0",
      "Python 3.11",
      "FastAPI",
      "Next.js 15",
      "Redis",
      "Monaco Diff",
      "Docker",
      "Railway",
    ],
    status: "Live on Railway",
    image: pashaDevpilot,
    imagePublicUrl: "/images/projects/pasha-devpilot/hero.jpg",
    liveUrl: "https://web-production-787ab.up.railway.app",
    githubUrl: "https://github.com/pasha804/pasha-devpilot",
    featured: true,
    layout: "feature",
  },
  {
    id: "nexora",
    slug: "nexora",
    title: "Nexora",
    category: "AI",
    tagline: "AI skill & competitive social platform",
    description:
      "LinkedIn meets Discord meets a competitive skill arena. A professional feed, communities, and real-time skill PvP matches judged by an autonomous AI referee with objective scoring telemetry.",
    longDescription:
      "Designed for the modern developer ecosystem. Combines rich social feeds, community discussion rooms, live code editing over low-latency WebSockets, and automated AI evaluation scoring architecture, code quality, and time complexity.",
    role: "Creator & Lead Architect",
    problem:
      "Technical social networks either lack meaningful skill verification or feel like clinical, boring job boards without genuine peer interaction.",
    solution:
      "A gamified competitive arena where developers battle on real programming problems with instant AI referee feedback and persistent skill graphs.",
    architecture:
      "React + Vite frontend with Tailwind CSS, communicating with FastAPI backend microservices, Redis pub/sub for real-time WebSocket state, and PostgreSQL.",
    challenges:
      "Synchronizing multi-client code editor states in under 25ms while streaming simultaneous AI judging evaluations without race conditions.",
    highlights: [
      "Real-time dual-client synchronized code editor over WebSockets",
      "Autonomous AI referee scoring code architecture and edge cases",
      "Community discovery spaces, skill leaderboards, and progress tracking",
      "Containerized microservice architecture with Docker",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    status: "In Development",
    image: nexora,
    imagePublicUrl: "/images/projects/nexora/hero.jpg",
    githubUrl: "https://github.com/pasha804",
    featured: true,
    layout: "feature",
  },
  {
    id: "pasha-tools",
    slug: "pasha-tools",
    title: "Pasha Tools",
    category: "TOOLS",
    tagline: "Browser-based developer command center",
    description:
      "A free suite of developer and productivity utilities: PDF tooling, image converters, JSON formatting, JWT inspection, Base64 encoding, cryptographic hashing, regex testing, and text-to-speech.",
    longDescription:
      "Built to eliminate ad-supported, privacy-invasive online conversion tools. Pasha Tools runs client-side computations wherever possible to ensure zero user data is retained or transmitted insecurely.",
    role: "Full-Stack Developer",
    problem:
      "Developers constantly navigate ad-ridden, slow, and insecure utility websites just to format JSON, debug a JWT token, or extract text from a PDF.",
    solution:
      "A clean, dark-mode developer workstation loaded with high-speed utilities, offline client-side support, and modern aesthetics.",
    architecture:
      "React and TypeScript single-page application with Python FastAPI helper microservices for computationally intensive media and PDF tasks.",
    challenges:
      "Ensuring heavy client-side operations (like large PDF parsing and cryptographic hashing) do not block the main browser UI thread.",
    highlights: [
      "Client-side instant parsing with zero data retention",
      "PDF, JSON, JWT, Base64 & cryptographic hashing tools",
      "Audio TTS synthesis & regex testing workspace",
      "High-speed, responsive search-as-you-type directory",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Python", "FastAPI"],
    tech: ["React", "TypeScript", "Tailwind CSS", "Python", "FastAPI"],
    status: "Live Project",
    image: pashaTools,
    imagePublicUrl: "/images/projects/pasha-tools/hero.jpg",
    liveUrl: "https://pashatools.com",
    githubUrl: "https://github.com/pasha804/tool-kit",
    layout: "split",
  },
  {
    id: "guestnexa",
    slug: "guestnexa",
    title: "GuestNexa",
    category: "FULL STACK",
    tagline: "Elite SEO & High-DA Link Building agency platform",
    description:
      "A premier, high-performance SEO agency platform featuring a 3D tilted orbital tool showcase, domain authority calculator, and an interactive GuestNexa AI Consultant.",
    longDescription:
      "Developed as a production client platform for Attia Awais (Lead Off-Page SEO Specialist). Features an interactive AI consultant answering questions on DA/DR metrics, a 3D orbital animation showcasing major SEO platforms, and verified credential lightboxes.",
    role: "Full-Stack Engineer & UI Architect",
    problem:
      "SEO agencies struggle to demonstrate credibility, convey complex link-building metrics, and onboard clients smoothly.",
    solution:
      "A bespoke Next.js 16 platform combining 3D interactive visuals, verifiable credential lightboxes, and an embedded AI consultant for instant client guidance.",
    architecture:
      "Next.js 16 (App Router) + TypeScript + Tailwind CSS custom variables + Lucide React + Vercel Production deployment.",
    challenges:
      "Creating smooth 3D tilted orbital rotations and interactive lightbox dialogues that maintain high performance on mobile devices.",
    highlights: [
      "3D Tilted Orbital Platform Animation showcasing SEO tools",
      "Interactive GuestNexa AI Consultant for link building insights",
      "Full-screen credential verification lightbox with smooth zoom",
      "Dedicated SEO services catalog and instant onboarding flow",
    ],
    technologies: ["Next.js 16", "TypeScript", "Tailwind CSS", "Lucide React", "Vercel"],
    tech: ["Next.js 16", "TypeScript", "Tailwind CSS", "Lucide React", "Vercel"],
    status: "Production",
    image: guestnexa,
    imagePublicUrl: "/images/projects/guestnexa/hero.png",
    liveUrl: "https://www.guestnexa.com",
    githubUrl: "https://github.com/pasha804/guestnexa",
    layout: "split",
  },
  {
    id: "wishora",
    slug: "wishora",
    title: "Wishora",
    category: "FULL STACK",
    tagline: "Personalized greeting cards studio",
    description:
      "A digital greeting card studio featuring animated templates, real-time reactive canvas editing, custom photo uploads, and downloadable personalized keepsakes.",
    longDescription:
      "Combines emotional visual storytelling with responsive web engineering. Users select occasion templates, personalize typography and color palettes, upload photos, and export high-resolution digital cards.",
    role: "Product Designer & Frontend Developer",
    problem:
      "Digital greetings are often static, cookie-cutter images or bloated, slow apps that fail to deliver an emotional experience.",
    solution:
      "An elegant, motion-driven greeting card creator with smooth Framer Motion transitions, responsive canvas preview, and instant export.",
    architecture:
      "Next.js App Router + TypeScript + Tailwind CSS + Framer Motion animations.",
    challenges:
      "Rendering real-time animated typography and image overlays seamlessly across both desktop and mobile viewports.",
    highlights: [
      "Animated occasion-based card templates",
      "Real-time reactive editor with live typography previews",
      "Photo upload with responsive aspect-ratio cropping",
      "Fast client-side rendering and mobile touch support",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    status: "Live Project",
    image: wishora,
    imagePublicUrl: "/images/projects/wishora/hero.jpg",
    githubUrl: "https://github.com/pasha804",
    layout: "split",
  },
  {
    id: "mubar-store",
    slug: "mubar-store",
    title: "Mubar Store",
    category: "FULL STACK",
    tagline: "Luxury watch catalog & e-commerce experience",
    description:
      "A full-stack luxury timepiece e-commerce showcase featuring multi-attribute product filtration, persistent cart state, responsive unboxing modal previews, and checkout flow.",
    longDescription:
      "Engineered to showcase high-end horology with smooth visual presentation. Includes deep product inspection dialogs, automated catalog search, responsive shopping cart drawer, and complete SEO metadata.",
    role: "Full-Stack Engineer",
    problem:
      "Standard e-commerce templates are often generic, slow, and lack the refined aesthetic expected by luxury timepiece enthusiasts.",
    solution:
      "A custom dark-mode luxury store built with responsive cards, micro-interactions, client-side cart calculation, and instant product inspection.",
    architecture:
      "React + Vite + Tailwind CSS + Vercel Edge Hosting.",
    challenges:
      "Maintaining instantaneous search and multi-facet filtering across extensive product data without layout shifts or re-render stutters.",
    highlights: [
      "Multi-facet filtration by movement, gender, and price range",
      "Instant client-side cart state management with persistent storage",
      "Unboxing modal preview with high-resolution horology photography",
      "Deployed live on Vercel with structured meta tags and sitemaps",
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "HTML5", "Vercel"],
    tech: ["React", "Vite", "Tailwind CSS", "HTML5", "Vercel"],
    status: "Live on Vercel",
    image: mubarStore,
    imagePublicUrl: "/images/projects/mubar-store/hero.jpg",
    liveUrl: "https://mubar-iota.vercel.app",
    githubUrl: "https://github.com/pasha804/mubar-store",
    layout: "split",
  },
  {
    id: "zoro",
    slug: "zoro",
    title: "Zoro 2.0",
    category: "AI",
    tagline: "Native AI desktop workstation assistant",
    description:
      "A local-first, Jarvis-style workstation assistant: voice interaction, wake-phrase activation, memory recall, and OS automation — speaking English, Urdu, and Roman Urdu.",
    longDescription:
      "Engineered as a high-utility native desktop application using Tauri and Python. Zoro listens for wake words, parses voice intents in colloquial Roman Urdu or English, and triggers desktop automation workflows.",
    role: "AI & Desktop Systems Developer",
    problem:
      "Cloud voice assistants require continuous internet, harvest personal telemetry, and struggle with bilingual code-switching like Roman Urdu.",
    solution:
      "A local-first native assistant running speech recognition, vector memory, and system automation on the user's workstation.",
    architecture:
      "Tauri desktop wrapper + React UI frontend + Python backend service + Faster-Whisper local acoustic model + PyAutoGUI hooks.",
    challenges:
      "Minimizing background memory footprint and audio latency while maintaining reliable wake-phrase detection.",
    highlights: [
      "Wake-phrase detection and voice activity monitoring",
      "Bilingual NLP recognizing Roman Urdu and technical English",
      "Operating system desktop automation and window orchestration",
      "Lightweight native Tauri architecture with minimal RAM footprint",
    ],
    technologies: ["Tauri", "React", "Python", "Local Speech Models", "Faster-Whisper"],
    tech: ["Tauri", "React", "Python", "Local Speech Models", "Faster-Whisper"],
    status: "In Development",
    image: zoro,
    imagePublicUrl: "/images/projects/zoro/hero.jpg",
    githubUrl: "https://github.com/pasha804",
    layout: "compact",
  },
  {
    id: "a-little-galaxy",
    slug: "a-little-galaxy",
    title: "A Little Galaxy",
    category: "CREATIVE",
    tagline: "Emotional cosmic storytelling & generative particle canvas",
    description:
      "An immersive visual web journey combining generative 2D starfields, scroll-choreographed celestial scenes, and interactive audio-reactive particle physics.",
    longDescription:
      "Crafted as an emotional narrative web experience. Features custom HTML5 Canvas particle rendering with GPU acceleration, responsive scene morphing, and atmospheric typography.",
    role: "Creative Web Developer",
    problem:
      "Digital stories often feel flat and static when confined to conventional document layouts.",
    solution:
      "A fully choreographed interactive galaxy environment responding to user scroll position and mouse gestures with organic physics.",
    architecture:
      "React + TypeScript + HTML5 Canvas 2D engine + Framer Motion + Web Audio synthesis.",
    challenges:
      "Maintaining a constant 60 frames per second on mobile devices while rendering hundreds of autonomous celestial particles.",
    highlights: [
      "Generative 2D particle canvas with organic gravitational attraction",
      "Scroll-driven narrative typography and cinematic scene pacing",
      "Zero-external-asset Web Audio ambient synthesis on interaction",
      "Fully responsive touch and mouse gesture responsiveness",
    ],
    technologies: ["React", "TypeScript", "HTML5 Canvas", "Framer Motion", "Web Audio API"],
    tech: ["React", "TypeScript", "HTML5 Canvas", "Framer Motion", "Web Audio API"],
    status: "Live Experience",
    image: aLittleGalaxy,
    imagePublicUrl: "/images/projects/a-little-galaxy/hero.jpg",
    githubUrl: "https://github.com/pasha804/cosmic-love-proposal",
    layout: "compact",
  },
  {
    id: "eternal-garden",
    slug: "eternal-garden",
    title: "Eternal Garden",
    category: "CREATIVE",
    tagline: "Romantic visual storytelling with rose-gold luxury design",
    description:
      "A celebratory digital experience featuring botanical art direction, rose-gold metallic accents, fluid typography, and layered depth parallax.",
    longDescription:
      "An editorial celebration web experience combining warm lighting, layered parallax scroll reveals, and elegant typography to create a memorable commemorative moment.",
    role: "Creative Web Engineer",
    problem:
      "Special event and celebratory web pages typically rely on low-effort templates that look tacky and unrefined.",
    solution:
      "A luxury editorial visual story with bespoke color palettes, gentle atmospheric motion, and responsive typography.",
    architecture:
      "React + TypeScript + Tailwind CSS custom tokens + Framer Motion choreography.",
    challenges:
      "Balancing rich imagery and atmospheric background motion with rapid initial page load performance.",
    highlights: [
      "Rose-gold and deep botanical color harmonies with custom tokens",
      "Layered depth parallax with smooth scroll reveals",
      "Interactive milestone checkpoints and memory nodes",
      "Optimized responsive layout with zero cumulative layout shifts",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    status: "Live Experience",
    image: eternalGarden,
    imagePublicUrl: "/images/projects/eternal-garden/hero.jpg",
    githubUrl: "https://github.com/pasha804/3D-birthday",
    layout: "compact",
  },
  {
    id: "aura-protocol",
    slug: "aura-protocol",
    title: "Aura Protocol",
    category: "CREATIVE",
    tagline: "Futuristic brutalist interface with silver surfaces & cyan illumination",
    description:
      "A cyberpunk minimal digital interface experiment combining brutalist typography, metallic glass surfaces, telemetry HUDs, and reactive neon cyan states.",
    longDescription:
      "Explores the intersection between futuristic sci-fi telemetry and modern web usability. Features crisp monospace status matrices, reactive sound feedback, and keyboard-driven shortcut flows.",
    role: "Interface Designer & Engineer",
    problem:
      "Most futuristic or sci-fi interfaces are purely ornamental concepts that are inaccessible and impossible to navigate as real software.",
    solution:
      "A functional brutalist web interface that preserves cyberpunk aesthetics while delivering full keyboard accessibility and semantic structure.",
    architecture:
      "React + TypeScript + Tailwind CSS + Lucide React icons + Web Audio sound triggers.",
    challenges:
      "Crafting authentic cybernetic HUD elements without cluttering the screen or sacrificing WCAG contrast requirements.",
    highlights: [
      "Cyberpunk telemetry HUD with real-time status indicators",
      "Brutalist typographic hierarchy with high-contrast monospace labels",
      "Metallic glassmorphism with dynamic specular highlights",
      "Keyboard shortcut navigation and Command Palette integration",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Lucide React", "Web Audio"],
    tech: ["React", "TypeScript", "Tailwind CSS", "Lucide React", "Web Audio"],
    status: "Experimental",
    image: auraProtocol,
    imagePublicUrl: "/images/projects/aura-protocol/hero.jpg",
    githubUrl: "https://github.com/pasha804",
    layout: "compact",
  },
];

export const projectFilters = ["ALL", "AI", "FULL STACK", "CREATIVE", "TOOLS"] as const;

export const projectStats = [
  { value: "10+", label: "Verified Projects" },
  { value: "5+", label: "AI & Full-Stack Systems" },
  { value: "Multiple", label: "Live Cloud Deployments" },
  { value: "100%", label: "Real Code & Repositories" },
];
