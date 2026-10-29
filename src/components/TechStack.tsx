import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Layers, Cpu, Terminal, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import {
  ReactIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  PythonIcon,
  FastAPIIcon,
  PostgreSQLIcon,
  TailwindIcon,
  DockerIcon,
  RedisIcon,
  ViteIcon,
  OpenAIIcon,
  GitIcon,
  GitHubIcon,
  VSCodeIcon,
  CursorIcon,
  HTMLIcon,
  CSSIcon,
  AIAgentsIcon,
  RESTIcon,
  AntigravityIcon,
  KiroIcon,
  FreebuffIcon,
  OpenCodeIcon,
} from "@/components/TechIcons";
import { EASE, staggerContainer, viewportOnce } from "@/lib/motion";

type TechItem = {
  name: string;
  category: "frontend" | "backend" | "ai" | "tools";
  icon: React.ComponentType<{ className?: string; size?: number }>;
  color: string;
  role: string;
};

const TECH_LIST: TechItem[] = [
  // Frontend
  { name: "React", category: "frontend", icon: ReactIcon, color: "#61DAFB", role: "UI Library" },
  { name: "TypeScript", category: "frontend", icon: TypeScriptIcon, color: "#3178C6", role: "Type Safety" },
  { name: "JavaScript", category: "frontend", icon: JavaScriptIcon, color: "#F7DF1E", role: "Core Language" },
  { name: "Tailwind CSS", category: "frontend", icon: TailwindIcon, color: "#38BDF8", role: "Utility Styling" },
  { name: "Vite", category: "frontend", icon: ViteIcon, color: "#BD34FE", role: "Next-Gen Bundler" },
  { name: "HTML5", category: "frontend", icon: HTMLIcon, color: "#E44D26", role: "Semantic Markup" },
  { name: "CSS3", category: "frontend", icon: CSSIcon, color: "#1572B6", role: "Modern Layouts" },

  // Backend
  { name: "Python", category: "backend", icon: PythonIcon, color: "#3776AB", role: "Core Backend" },
  { name: "FastAPI", category: "backend", icon: FastAPIIcon, color: "#059669", role: "High-Speed Async API" },
  { name: "PostgreSQL", category: "backend", icon: PostgreSQLIcon, color: "#336791", role: "Relational Database" },
  { name: "Redis", category: "backend", icon: RedisIcon, color: "#DC382D", role: "In-Memory Caching" },
  { name: "Docker", category: "backend", icon: DockerIcon, color: "#1D63ED", role: "Containerization" },
  { name: "REST APIs", category: "backend", icon: RESTIcon, color: "#38BDF8", role: "Microservices" },

  // AI
  { name: "OpenAI", category: "ai", icon: OpenAIIcon, color: "#10A37F", role: "LLMs & Embeddings" },
  { name: "AI Agents", category: "ai", icon: AIAgentsIcon, color: "#7928CA", role: "Autonomous Workflows" },
  { name: "Prompt Engineering", category: "ai", icon: PythonIcon, color: "#FFD43B", role: "System Directives" },
  { name: "Cursor AI", category: "ai", icon: CursorIcon, color: "#00E5FF", role: "AI-Augmented IDE" },

  // Tools & DevOps
  { name: "Docker & CI/CD", category: "tools", icon: DockerIcon, color: "#1D63ED", role: "Container & DevOps" },
  { name: "Antigravity", category: "tools", icon: AntigravityIcon, color: "#00E5FF", role: "Agentic AI Platform" },
  { name: "Kiro AI", category: "tools", icon: KiroIcon, color: "#FF7900", role: "Spec-Driven IDE" },
  { name: "Freebuff", category: "tools", icon: FreebuffIcon, color: "#10B981", role: "AI Agent Workspace" },
  { name: "OpenCode", category: "tools", icon: OpenCodeIcon, color: "#BD34FE", role: "Open-Source Coding Agent" },
  { name: "Git", category: "tools", icon: GitIcon, color: "#F05032", role: "Version Control" },
  { name: "GitHub", category: "tools", icon: GitHubIcon, color: "#FFFFFF", role: "CI/CD & Collaboration" },
  { name: "VS Code", category: "tools", icon: VSCodeIcon, color: "#007ACC", role: "Development Environment" },
];

const CATEGORIES = [
  { id: "all", label: "All Technologies", icon: Layers },
  { id: "frontend", label: "Frontend", icon: Sparkles },
  { id: "backend", label: "Backend", icon: Cpu },
  { id: "ai", label: "AI & ML", icon: Terminal },
  { id: "tools", label: "Tools & DevOps", icon: Wrench },
] as const;

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered =
    activeCategory === "all"
      ? TECH_LIST
      : TECH_LIST.filter((item) => item.category === activeCategory);

  return (
    <section id="skills" className="section-shell relative">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills & Technologies"
          title="Battle-Tested Tech Stack."
          lead="Real-world technologies and authentic tools powering intelligent frontend interfaces, Python backends, and AI pipelines."
        />

        {/* Category Filter Pills with Smooth Active Indicator */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "text-white shadow-[0_0_20px_rgba(0,229,255,0.4)] scale-105"
                    : "glass text-muted-foreground hover:text-foreground hover:border-[var(--glow)]/40 hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="tech-category-pill"
                    className="absolute inset-0 rounded-full bg-[var(--hero-action)]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <Icon className="relative z-10 size-3.5" />
                <span className="relative z-10">{cat.label}</span>
                <span className="relative z-10 ml-0.5 rounded-full bg-black/40 px-1.5 py-0.5 font-mono text-[9px] opacity-80">
                  {cat.id === "all"
                    ? TECH_LIST.length
                    : TECH_LIST.filter((t) => t.category === cat.id).length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Real Brand Icons Grid with Dynamic Glow & Stagger */}
        <motion.div
          layout
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((tech) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={`${tech.name}-${tech.category}`}
                  layout
                  initial={{ opacity: 0, scale: 0.85, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85, y: -15 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  whileHover={{ y: -8, scale: 1.04 }}
                  className="group relative flex flex-col items-center justify-center rounded-2xl border border-[var(--border)] bg-[color-mix(in_oklab,var(--panel)_85%,transparent)] p-6 text-center shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-cyan/70 hover:shadow-[0_0_35px_rgba(0,229,255,0.3)]"
                >
                  {/* Tech corner reticle */}
                  <span className="pointer-events-none absolute top-2 left-2.5 font-mono text-[8px] text-cyan/30 opacity-0 group-hover:opacity-100 transition-opacity">+</span>
                  <span className="pointer-events-none absolute top-2 right-2.5 font-mono text-[8px] text-cyan/30 opacity-0 group-hover:opacity-100 transition-opacity">+</span>

                  {/* Brand Color Aura on Hover */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-20 blur-xl"
                    style={{ background: tech.color }}
                  />

                  {/* Real Brand SVG Icon */}
                  <div className="relative mb-4 flex size-16 items-center justify-center rounded-2xl bg-white/5 p-2 shadow-inner ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110 group-hover:ring-cyan/50">
                    <Icon size={44} className="size-11 object-contain drop-shadow-md" />
                  </div>

                  {/* Tech Name */}
                  <h4 className="font-display text-base font-bold text-foreground transition-colors duration-200 group-hover:text-cyan">
                    {tech.name}
                  </h4>

                  {/* Role / Subtitle */}
                  <span className="mt-1 font-mono text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
                    {tech.role}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Infinite Brand Icon Marquee Ticker */}
        <div className="relative mt-16 overflow-hidden py-4 [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
          <motion.div
            className="flex w-max items-center gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          >
            {[...TECH_LIST, ...TECH_LIST].map((t, idx) => {
              const Icon = t.icon;
              return (
                <div
                  key={`${t.name}-${idx}`}
                  className="glass group flex items-center gap-3 rounded-full border border-[var(--border)] px-4 py-2 transition-all duration-300 hover:border-cyan/70 hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] cursor-pointer"
                >
                  <Icon size={20} className="size-5 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="font-display text-xs font-semibold text-foreground/90 whitespace-nowrap group-hover:text-cyan transition-colors">
                    {t.name}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
