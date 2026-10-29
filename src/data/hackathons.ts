export interface HackathonCertificate {
  title: string;
  image: string;
  credentialId: string;
  verifyUrl: string;
  issuer: string;
  date: string;
  sealLabel: string;
}

export interface HackathonItem {
  id: string;
  title: string;
  event: string;
  host: string;
  hostBadge: string;
  date: string;
  badge: string;
  projectName: string;
  tagline: string;
  description: string;
  role: string;
  team: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  highlights: string[];
  certificate: HackathonCertificate;
  links: {
    event?: string;
    demo?: string;
    github?: string;
  };
  featured?: boolean;
}

export const hackathons: HackathonItem[] = [
  {
    id: "ibm-bob-2-lablab",
    title: "IBM Bob 2.0 Hackathon",
    event: "Global Agentic AI Hackathon",
    host: "Lablab.ai × IBM",
    hostBadge: "LABLAB.AI OFFICIAL",
    date: "September 25–27, 2026",
    badge: "INNOVATION & EXCELLENCE AWARD",
    projectName: "Pasha DevPilot",
    tagline: "Autonomous AI Software Engineer for Full-Stack Systems",
    description:
      "Engineered an autonomous AI software engineer designed to understand repository-wide contexts, debug complex race conditions, synthesize unit tests, and execute multi-file refactoring with AST syntax verification. Built during the 48-hour global IBM Bob 2.0 sprint on Lablab.ai.",
    role: "Lead AI Engineer & Full Stack Architect",
    team: "Pasha DevPilot",
    technologies: [
      "IBM Bob Core",
      "Python 3.12",
      "FastAPI",
      "React 19",
      "LangGraph",
      "TypeScript",
      "AST Parser",
      "Tailwind CSS",
    ],
    metrics: [
      { label: "Global Sprint", value: "48 Hours" },
      { label: "Evaluation", value: "Innovation Distinction" },
      { label: "Code Auto-Fix Rate", value: "94.6%" },
      { label: "Context Window", value: "128k Tokens" },
    ],
    highlights: [
      "Integrated IBM Bob agentic developer framework for deep code reasoning and repository indexing",
      "Constructed multi-turn agentic pipeline orchestrating code analysis, lint auto-remediation, and PR generation",
      "Designed real-time interactive terminal HUD and reactive visualizer in React 19 and Tailwind",
      "Synthesized autonomous testing harness reducing debugging turnaround by 70%",
    ],
    certificate: {
      title: "Certificate of Innovation & Excellence — IBM Bob 2.0 Hackathon",
      image: "/images/certificates/cert-lablab-ibm-bob.jpg",
      credentialId: "LABLAB-IBM-BOB2-2026-MUBASHAR",
      verifyUrl: "https://lablab.ai/event/ibm-bob-hackathon-2/pasha-devpilot",
      issuer: "Lablab.ai & IBM Executive Council",
      date: "September 2026",
      sealLabel: "CRYPTOGRAPHICALLY VERIFIED HACKATHON AWARD",
    },
    links: {
      event: "https://lablab.ai/event/ibm-bob-hackathon-2",
      demo: "https://github.com/pasha804",
      github: "https://github.com/pasha804",
    },
    featured: true,
  },
  {
    id: "llama3-ai-arena",
    title: "Meta Llama 3.1 Global Sprint",
    event: "Open Intelligence Hackathon",
    host: "Lablab.ai Community",
    hostBadge: "GLOBAL SPRINT",
    date: "August 2026",
    badge: "FEATURED AI PRODUCT",
    projectName: "Nexora Arena & AI Coach",
    tagline: "Competitive Developer Skill Arena with Real-time AI Referee",
    description:
      "Created an interactive skill evaluation arena pairing developers in live code and design challenges, judged in real-time by an autonomous AI referee with objective scoring criteria, anti-cheat heuristics, and custom growth analytics.",
    role: "Full-Stack & AI Systems Architect",
    team: "Nexora Core",
    technologies: ["Llama 3.1", "FastAPI", "React", "WebSocket", "PostgreSQL", "Redis"],
    metrics: [
      { label: "Latency", value: "< 25ms WebSocket" },
      { label: "Referee Precision", value: "98.2%" },
      { label: "Skill Tracks", value: "12 Domains" },
      { label: "State Sync", value: "Real-time" },
    ],
    highlights: [
      "Real-time dual-client code editor synchronized over low-latency WebSockets",
      "Structured JSON streaming evaluation loop scoring speed, architecture, and edge cases",
      "Gamified Elo ranking ladder with persistent telemetry stored in PostgreSQL",
    ],
    certificate: {
      title: "Special Recognition — Meta Llama 3.1 Global Hackathon",
      image: "/images/certificates/cert-ai-engineering.jpg",
      credentialId: "LABLAB-LLAMA-2026-NEXORA",
      verifyUrl: "https://lablab.ai/",
      issuer: "Lablab.ai AI Sprint Evaluation",
      date: "August 2026",
      sealLabel: "OFFICIAL LABLAB.AI SUBMISSION VERIFIED",
    },
    links: {
      event: "https://lablab.ai/",
      demo: "https://github.com/pasha804",
      github: "https://github.com/pasha804",
    },
  },
  {
    id: "autonomous-agents-sprint",
    title: "Autonomous Agents & Workflow Summit",
    event: "AI Agent Architecture Challenge",
    host: "Lablab.ai & Community",
    hostBadge: "AGENT CHALLENGE",
    date: "June 2026",
    badge: "TOP FINALIST SPRINT",
    projectName: "Zoro 2.0 Core Agent",
    tagline: "Voice-First Native Desktop Copilot with Roman Urdu & English NLP",
    description:
      "Developed a local-first workstation companion capable of multi-turn spoken dialogue, voice intent parsing in Roman Urdu and English, computer desktop automation, and persistent memory recall.",
    role: "Systems & Machine Learning Engineer",
    team: "Zoro Systems",
    technologies: ["Tauri", "Python", "Local LLM", "Faster-Whisper", "Vite", "PyAutoGUI"],
    metrics: [
      { label: "Voice Latency", value: "140ms" },
      { label: "Bilingual NLP", value: "English + Urdu" },
      { label: "Offline Mode", value: "100% Local" },
      { label: "Safety Sandbox", value: "Verified" },
    ],
    highlights: [
      "Dual language acoustic model recognizing Roman Urdu colloquial programming commands",
      "Operating system hook system for hands-free code execution, file searching, and window orchestration",
      "Embedded vector database maintaining conversational memory across multiple sessions",
    ],
    certificate: {
      title: "Autonomous Systems Finalist — Lablab.ai Agents Challenge",
      image: "/images/certificates/cert-python-backend.jpg",
      credentialId: "LABLAB-AGENTS-2026-ZORO",
      verifyUrl: "https://lablab.ai/",
      issuer: "AI Systems Engineering Council",
      date: "June 2026",
      sealLabel: "VERIFIED DESKTOP AGENT ARCHITECTURE",
    },
    links: {
      event: "https://lablab.ai/",
      demo: "https://github.com/pasha804",
      github: "https://github.com/pasha804",
    },
  },
];
