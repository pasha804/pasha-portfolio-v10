import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  ArrowUpRight,
  Code2,
  BrainCircuit,
  Database,
  Terminal,
  Activity,
  Cpu,
  Layers,
  Check,
  Copy,
  Play,
  ShieldCheck,
  CheckCircle2,
  FileText,
  MapPin,
  Clock,
  Compass,
  Flame,
  Zap,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/developer-portrait.png";
import { EASE } from "@/lib/motion";
import { sound } from "@/lib/sound";

const PILLARS = [
  {
    icon: Sparkles,
    title: "Cinematic 60fps Frontend",
    description:
      "Crafting fluid, GPU-accelerated web experiences with React 19, TypeScript, Tailwind CSS, and Framer Motion with sub-frame micro-interactions and zero jank.",
    accent: "text-cyan",
    laser: "via-cyan",
    borderGlow: "hover:border-cyan/60 hover:shadow-xl hover:shadow-cyan/20",
    telemetry: "REACT 19 • GPU MOTION • TYPED CONTRACTS",
  },
  {
    icon: Database,
    title: "High-Throughput Python Core",
    description:
      "Engineering asynchronous backend microservices with Python, FastAPI, Redis, and PostgreSQL designed for resilience and heavy concurrent workloads.",
    accent: "text-sky-400",
    laser: "via-sky-400",
    borderGlow: "hover:border-sky-400/60 hover:shadow-xl hover:shadow-sky-400/20",
    telemetry: "FASTAPI • ASYNCIO • REDIS • POSTGRES",
  },
  {
    icon: BrainCircuit,
    title: "Autonomous AI & Agentic Systems",
    description:
      "Architecting multi-agent loops, AST verification pipelines, RAG retrieval, and specialized model integrations to build genuine software agents.",
    accent: "text-violet",
    laser: "via-violet",
    borderGlow: "hover:border-violet/60 hover:shadow-xl hover:shadow-violet/20",
    telemetry: "LLM REASONING • AST PARSER • MULTI-AGENT",
  },
];

const HIGHLIGHTS = [
  { value: "10+", label: "Verified Products", sub: "Shipped & Documented" },
  { value: "Full Stack", label: "React + Python", sub: "End-to-End Core" },
  { value: "Autonomous", label: "AI & Agentic SDLC", sub: "AST & LLM Loops" },
  { value: "100%", label: "Real Codebases", sub: "Zero Fabrications" },
];

const CODE_TABS = [
  {
    id: "ai",
    label: "DevPilot-Agent.ts",
    badge: "AUTONOMOUS AI",
    runtime: "TypeScript / Node 22",
    code: `// Pasha DevPilot — Autonomous AST Analysis & Multi-Agent Verification
import { parseAST, traverseAST } from "@babel/parser";
import { AgentSupervisor, SandboxRunner } from "@pasha/pilot-core";

export async function executeAutonomousRemediation(repoContext: RepositoryContext) {
  // 1. Static AST syntax analysis for defect isolation
  const syntaxTree = parseAST(repoContext.sourceCode, { plugins: ["typescript", "jsx"] });
  const defectPoints = await traverseAST(syntaxTree, { target: "async_race_conditions" });

  // 2. Multi-turn reasoning agent generates bounded patch
  const patchDirective = await AgentSupervisor.generateBoundedPatch({
    defects: defectPoints,
    context: repoContext.manifest,
    constraints: ["strict_null_checks", "zero_runtime_regression"]
  });

  // 3. Isolated sandbox execution before auto-committing PR
  const testResults = await SandboxRunner.executePytestSuite(patchDirective.sandboxFiles);
  return {
    verified: testResults.exitCode === 0,
    patch: patchDirective.diff,
    telemetry: { durationMs: testResults.duration, status: "READY_FOR_PR" }
  };
}`,
  },
  {
    id: "backend",
    label: "FastAPICore.py",
    badge: "CONCURRENT BACKEND",
    runtime: "Python 3.12 / FastAPI",
    code: `# Pasha Dev Studio — High-Concurrency Async Microservice Pipeline
from fastapi import APIRouter, Depends, HTTPException, BackgroundTasks
from redis.asyncio import Redis
from pydantic import BaseModel, Field

router = APIRouter(prefix="/v1/pipeline", tags=["Agent Operations"])

class TaskPayload(BaseModel):
    task_id: str = Field(..., regex=r"^[a-zA-Z0-9_-]{8,64}$")
    operation: str
    parameters: dict

@router.post("/dispatch", response_model=dict)
async def dispatch_pipeline(payload: TaskPayload, redis: Redis = Depends(get_redis)):
    # Concurrent cache check with TTL lock
    cache_key = f"pipeline:{payload.task_id}"
    if await redis.exists(cache_key):
        return {"status": "CACHED", "data": await redis.get(cache_key)}

    # Asynchronous task delegation to worker pool
    job = await worker_pool.enqueue_async(payload.operation, payload.parameters)
    await redis.setex(cache_key, 3600, job.id)
    return {"status": "DISPATCHED", "job_id": job.id, "engine": "FastAPI+AsyncIO"}`,
  },
  {
    id: "frontend",
    label: "CinematicUX.tsx",
    badge: "60FPS INTERACTION",
    runtime: "React 19 / Vite",
    code: `// Pasha Dev Studio — 60fps GPU Accelerated Motion & Type Safety
import { motion, useSpring, useTransform } from "motion/react";
import { sound } from "@/lib/sound";

export function HolographicCard({ title, telemetry }: CardProps) {
  const x = useSpring(0, { stiffness: 220, damping: 20 });
  const y = useSpring(0, { stiffness: 220, damping: 20 });
  const rotateX = useTransform(y, [-0.5, 0.5], ["14deg", "-14deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-14deg", "14deg"]);

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseEnter={() => sound.playBlip(1080, 0.03)}
      className="glassmorphic-hud rounded-3xl border border-cyan/40 p-6 backdrop-blur-2xl"
    >
      <div className="flex items-center justify-between font-mono text-[10px] text-cyan">
        <span>// STATUS: ACTIVE</span>
        <span>{telemetry.fps} FPS</span>
      </div>
      <h3 className="mt-3 font-display text-xl font-bold">{title}</h3>
    </motion.div>
  );
}`,
  },
];

const COMPETENCIES = [
  {
    domain: "Autonomous AI & Multi-Agent Loops",
    evidence: "Pasha DevPilot & Nexora Arena",
    tech: "LangChain • Vector Grounding • AST Parsers • Prompt Orchestration",
    focus: "Self-Healing Workflows & Code Diagnostics",
    status: "PRODUCTION AGENT",
  },
  {
    domain: "Modern Full-Stack Web Applications",
    evidence: "GuestNexa & Wishora",
    tech: "React 19 • TypeScript • Next.js 15 • Tailwind CSS • Framer Motion",
    focus: "Cinematic, High-Performance Interactive Products",
    status: "60FPS SHIPPED",
  },
  {
    domain: "High-Throughput Python Core",
    evidence: "Pasha Tools & DevPilot REST API",
    tech: "FastAPI • AsyncIO • Redis Queue • Pydantic v2 • PostgreSQL",
    focus: "Low-Latency Microservices & Concurrency",
    status: "HIGH CONCURRENCY",
  },
  {
    domain: "Cloud & DevOps Architecture",
    evidence: "Railway, Vercel Edge & Docker Containers",
    tech: "Docker • GitHub Actions CI/CD • Edge Caching • Micro-frontends",
    focus: "Automated Deployments & Zero Downtime",
    status: "LIVE PRODUCTION",
  },
];

const TIMELINE = [
  {
    year: "2024 — PRESENT",
    title: "Autonomous AI Systems & Full-Stack Architectures",
    description:
      "Engineering Pasha DevPilot, multi-turn LLM reasoning engines, AST syntax verification, and Next.js 15 production platforms.",
    active: true,
  },
  {
    year: "2023 — 2024",
    title: "Python Microservices & Developer Utilities",
    description:
      "Built high-concurrency FastAPI backends, Pasha Tools suite (PDF, media, JSON, JWT, text-to-speech), and Redis caching pipelines.",
    active: false,
  },
  {
    year: "2022 — 2023",
    title: "React & Creative Web Engineering",
    description:
      "Crafted interactive WebGL experiences, storytelling websites (A Little Galaxy, Eternal Garden), and modular design systems.",
    active: false,
  },
];

export function About() {
  const [activeMode, setActiveMode] = useState<"dossier" | "architecture" | "competencies" | "trajectory">("dossier");
  const [activeCodeTab, setActiveCodeTab] = useState<"ai" | "backend" | "frontend">("ai");
  const [copiedCode, setCopiedCode] = useState(false);
  const [diagnosticsRunning, setDiagnosticsRunning] = useState(false);
  const [diagnosticLogs, setDiagnosticLogs] = useState<string[]>([]);

  const activeSnippet = CODE_TABS.find((t) => t.id === activeCodeTab) ?? CODE_TABS[0];

  const handleCopySnippet = () => {
    sound.playClick();
    navigator.clipboard.writeText(activeSnippet.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleRunDiagnostics = () => {
    sound.playCommandOpen();
    setDiagnosticsRunning(true);
    setDiagnosticLogs([
      "INITIALIZING AST SYNTAX PARSER...",
      "SCANNING REPOSITORY CONTEXT: 10 PACKAGES DETECTED",
      "CHECKING FASTAPI ASYNCIO WORKER POOL... [OK]",
      "VERIFYING REACT 19 GPU PIPELINE... [60 FPS STABLE]",
      "AI AGENT SYSTEM SUPERVISOR: STATUS OPERATIONAL",
    ]);

    setTimeout(() => {
      sound.playChirp();
      setDiagnosticLogs((prev) => [...prev, ">> ARCHITECTURE STATUS: 100% HEALTHY & READY"]);
      setDiagnosticsRunning(false);
    }, 1800);
  };

  return (
    <section id="about" className="section-shell relative overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Inside Pasha Dev Studio"
          title="Engineering Meets Cinematic Intelligence."
          lead="Muhammad Mubashar — Pasha Dev — is an AI Full Stack Developer and Systems Architect engineering intelligent digital products, high-throughput Python backends, and award-grade web experiences."
        />

        {/* Futuristic Mode Switcher Bar */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {[
            { id: "dossier", label: "System Dossier", icon: FileText },
            { id: "architecture", label: "Live Architecture Lab", icon: Code2 },
            { id: "competencies", label: "Competency Matrix", icon: ShieldCheck },
            { id: "trajectory", label: "Verified Trajectory", icon: Compass },
          ].map((mode) => {
            const Icon = mode.icon;
            const isActive = activeMode === mode.id;
            return (
              <button
                key={mode.id}
                type="button"
                onClick={() => {
                  sound.playBlip(980, 0.03);
                  setActiveMode(mode.id as any);
                }}
                className={`group flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan ${
                  isActive
                    ? "bg-cyan/20 text-cyan border border-cyan/60 shadow-sm shadow-cyan/30"
                    : "border border-white/10 bg-background/60 text-muted-foreground hover:bg-card hover:text-foreground hover:border-white/20"
                }`}
              >
                <Icon className={`size-3.5 transition-colors duration-200 ${isActive ? "text-cyan" : "group-hover:text-cyan"}`} aria-hidden="true" />
                <span>{mode.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Mode Content Canvas */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            {/* MODE 1: SYSTEM DOSSIER */}
            {activeMode === "dossier" && (
              <motion.div
                key="dossier"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="grid gap-6 lg:grid-cols-12"
              >
                {/* Main Profile & Philosophy Hologram (7 cols) */}
                <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-cyan/30 bg-background/80 p-7 sm:p-9 shadow-2xl backdrop-blur-2xl lg:col-span-7">
                  {/* Neon HUD Corner Marks */}
                  <span className="pointer-events-none absolute top-3 left-3 text-[10px] text-cyan/40" aria-hidden="true">⌜</span>
                  <span className="pointer-events-none absolute top-3 right-3 text-[10px] text-cyan/40" aria-hidden="true">⌝</span>
                  <span className="pointer-events-none absolute bottom-3 left-3 text-[10px] text-cyan/40" aria-hidden="true">⌞</span>
                  <span className="pointer-events-none absolute bottom-3 right-3 text-[10px] text-cyan/40" aria-hidden="true">⌟</span>

                  {/* Top Ambient Laser Line */}
                  <div className="pointer-events-none absolute inset-x-8 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan to-transparent opacity-80" aria-hidden="true" />

                  <div>
                    {/* Header Telemetry */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div className="flex items-center gap-2">
                        <Terminal className="size-3.5 text-cyan" aria-hidden="true" />
                        <span className="text-xs font-semibold text-cyan">
                          Dossier // Identity &amp; Core Stack
                        </span>
                      </div>
                      <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-0.5 rounded-full">
                        <span className="size-1.5 rounded-full bg-emerald-400 motion-safe:animate-ping" />
                        Operational // Ready
                      </span>
                    </div>

                    {/* Developer Info Card */}
                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="relative size-16 overflow-hidden rounded-2xl border-2 border-cyan/60 bg-[var(--panel-strong)] shadow-md shadow-cyan/30 ring-2 ring-cyan/20">
                          <img
                            src={portrait}
                            alt="Muhammad Mubashar"
                            className="h-full w-full object-cover object-top"
                          />
                        </div>
                        <div>
                          <h3 className="font-display text-2xl font-extrabold text-foreground tracking-tight">
                            Muhammad Mubashar
                          </h3>
                          <p className="text-xs font-semibold text-cyan flex items-center gap-1.5 mt-0.5">
                            <span>Pasha Dev</span>
                            <span>•</span>
                            <span>AI Full Stack Developer</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5 sm:items-end">
                        <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground">
                          <MapPin className="size-3 text-cyan" aria-hidden="true" />
                          <span>Pakistan // UTC+05:00</span>
                        </div>
                        <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-0.5 text-xs text-emerald-400">
                          <Clock className="size-3" aria-hidden="true" />
                          <span>Immediate Client &amp; Contract Availability</span>
                        </div>
                      </div>
                    </div>

                    {/* Factual Core Narrative */}
                    <div className="mt-6 space-y-3.5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      <p>
                        I don&apos;t just build static websites. I build{" "}
                        <strong className="text-foreground font-semibold">
                          intelligent, interactive digital products
                        </strong>{" "}
                        that solve complex engineering challenges and create lasting impressions.
                      </p>
                      <p>
                        My work unites high-throughput Python backends (FastAPI, Redis, PostgreSQL),
                        state-of-the-art AI integration (multi-agent loops, AST verification, LLM reasoning),
                        and 60fps GPU-accelerated frontend engineering with React 19 and TypeScript.
                      </p>
                    </div>

                    {/* Core Tech Stack Badges */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {[
                        "React 19",
                        "TypeScript",
                        "Python",
                        "FastAPI",
                        "AI Agents",
                        "PostgreSQL",
                        "Redis",
                        "Next.js 15",
                        "Tailwind CSS",
                        "Docker",
                        "AST Parsers",
                        "LangChain",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-foreground transition-colors duration-200 hover:border-cyan/50 hover:text-cyan hover:bg-cyan/10"
                        >
                          <span className="size-1.5 rounded-full bg-cyan shadow-sm shadow-cyan/50" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics Row */}
                  <div className="mt-8 grid grid-cols-2 gap-3 border-t border-white/10 pt-6 sm:grid-cols-4">
                    {HIGHLIGHTS.map((h, i) => (
                      <div
                        key={i}
                        className="group/stat relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-3.5 transition-colors duration-200 hover:border-cyan/40 hover:bg-cyan/[0.05] hover:shadow-md hover:shadow-cyan/15"
                      >
                        <span className="font-display text-2xl font-black text-cyan drop-shadow-sm">
                          {h.value}
                        </span>
                        <span className="mt-1 block text-xs font-semibold text-foreground">
                          {h.label}
                        </span>
                        <span className="block text-[10px] text-muted-foreground">
                          {h.sub}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Side: Philosophy & Mindset Hologram (5 cols) */}
                <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-cyan/30 bg-background/80 p-7 sm:p-8 shadow-2xl backdrop-blur-2xl lg:col-span-5">
                  <div className="pointer-events-none absolute inset-x-8 top-0 h-[2px] bg-gradient-to-r from-transparent via-violet to-transparent opacity-80" aria-hidden="true" />

                  <div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <span className="text-xs font-semibold text-cyan flex items-center gap-1.5">
                        <Flame className="size-3.5 text-cyan" aria-hidden="true" />
                        Engineering Principles
                      </span>
                      <span className="text-xs text-cyan font-semibold">
                        Zero Placeholders
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-xl font-bold text-foreground">
                      How I Build Software
                    </h3>

                    <div className="mt-4 space-y-3.5">
                      {[
                        {
                          title: "Evidence Over Claims",
                          desc: "Every project in this portfolio is backed by working repositories, live production URLs, or verified prototypes. No fabricated clients or fake numbers.",
                          icon: ShieldCheck,
                        },
                        {
                          title: "Full-Stack Autonomy",
                          desc: "Capable of taking an idea from raw concept through architecture, database schemas, API design, frontend craftsmanship, and automated deployment.",
                          icon: Cpu,
                        },
                        {
                          title: "Autonomous AI Integration",
                          desc: "Embedding AI where it creates real utility: AST syntax correction, contextual code repair, semantic search, and multi-agent workflows.",
                          icon: BrainCircuit,
                        },
                        {
                          title: "60fps Craftsmanship",
                          desc: "Performance and aesthetics aren't opposites. Interfaces should feel fluid, magnetic, and tactile without sacrificing speed or accessibility.",
                          icon: Zap,
                        },
                      ].map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <div
                            key={idx}
                            className="rounded-2xl border border-white/10 bg-white/[0.02] p-3.5 transition-colors duration-200 hover:border-cyan/40 hover:bg-cyan/[0.04]"
                          >
                            <div className="flex items-center gap-2">
                              <Icon className="size-4 text-cyan" aria-hidden="true" />
                              <h4 className="font-display text-xs font-bold text-foreground">
                                {item.title}
                              </h4>
                            </div>
                            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                              {item.desc}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="text-xs text-muted-foreground">
                      Audited &amp; Verified // 2026
                    </span>
                    <Button variant="neon" size="sm" asChild onClick={() => sound.playChirp()}>
                      <a href="#projects" className="flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan">
                        <span>Explore Projects</span>
                        <ArrowUpRight className="size-3.5" aria-hidden="true" />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* MODE 2: LIVE ARCHITECTURE LAB */}
            {activeMode === "architecture" && (
              <motion.div
                key="architecture"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="overflow-hidden rounded-3xl border border-cyan/40 bg-background/90 shadow-2xl backdrop-blur-2xl"
              >
                {/* Terminal Header */}
                <div className="flex flex-wrap items-center justify-between border-b border-white/10 bg-white/[0.03] px-5 py-3">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5" aria-hidden="true">
                      <span className="size-3 rounded-full bg-red-500/80 inline-block" />
                      <span className="size-3 rounded-full bg-yellow-500/80 inline-block" />
                      <span className="size-3 rounded-full bg-emerald-500/80 inline-block" />
                    </div>
                    <span className="ml-3 text-xs font-semibold text-cyan">
                      PASHA-DEV // ARCHITECTURE-ENGINE
                    </span>
                  </div>

                  {/* Tabs */}
                  <div className="flex items-center gap-1.5">
                    {CODE_TABS.map((tab) => {
                      const isActive = activeCodeTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => {
                            sound.playBlip(1040, 0.03);
                            setActiveCodeTab(tab.id as any);
                          }}
                          className={`rounded-lg px-3 py-1 text-xs font-semibold transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan ${
                            isActive
                              ? "bg-cyan/20 text-cyan border border-cyan/40 shadow-sm shadow-cyan/25"
                              : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                          }`}
                        >
                          {tab.label}
                        </button>
                      );
                    })}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleRunDiagnostics}
                      disabled={diagnosticsRunning}
                      className="flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400 transition-colors duration-200 hover:bg-emerald-500/20 cursor-pointer disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                    >
                      <Play className="size-3" aria-hidden="true" />
                      <span>{diagnosticsRunning ? "DIAGNOSING..." : "TEST RUN"}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleCopySnippet}
                      className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground hover:text-cyan hover:border-cyan/40 transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
                    >
                      {copiedCode ? <Check className="size-3 text-emerald-400" aria-hidden="true" /> : <Copy className="size-3" aria-hidden="true" />}
                      <span>{copiedCode ? "COPIED" : "COPY"}</span>
                    </button>
                  </div>
                </div>

                {/* Code Window with Syntax Highlighting */}
                <div className="p-6 font-mono text-xs leading-relaxed max-h-[420px] overflow-x-auto no-scrollbar bg-black/60">
                  <div className="mb-3 flex items-center justify-between text-[11px] text-muted-foreground border-b border-white/5 pb-2">
                    <span className="text-cyan font-bold">// RUNTIME: {activeSnippet.runtime}</span>
                    <span className="font-semibold text-emerald-400">{activeSnippet.badge}</span>
                  </div>

                  <motion.pre
                    key={activeCodeTab}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="text-cyan/90 selection:bg-cyan/30"
                  >
                    <code>{activeSnippet.code}</code>
                  </motion.pre>
                </div>

                {/* Diagnostics Log Console */}
                {diagnosticLogs.length > 0 && (
                  <div className="border-t border-cyan/30 bg-black/90 p-4 font-mono text-[11px] text-emerald-400 space-y-1">
                    <div className="text-cyan font-bold text-[10px] mb-1">
                      // LIVE DIAGNOSTIC TRACE:
                    </div>
                    {diagnosticLogs.map((log, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-cyan/60">&gt;&gt;</span>
                        <span>{log}</span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {/* MODE 3: COMPETENCY MATRIX */}
            {activeMode === "competencies" && (
              <motion.div
                key="competencies"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="grid gap-4 sm:grid-cols-2"
              >
                {COMPETENCIES.map((comp) => (
                  <div
                    key={comp.domain}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-background/80 p-6 shadow-xl backdrop-blur-2xl transition-colors duration-200 hover:border-cyan/50 hover:shadow-lg hover:shadow-cyan/15"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-semibold text-cyan bg-cyan/10 border border-cyan/20 px-2.5 py-0.5 rounded-full">
                        {comp.status}
                      </span>
                      <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-semibold">
                        <CheckCircle2 className="size-3 text-emerald-400" aria-hidden="true" />
                        Verified
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                      {comp.domain}
                    </h3>

                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                      {comp.focus}
                    </p>

                    <div className="mt-4 border-t border-white/10 pt-3">
                      <p className="text-xs text-emerald-400 font-semibold">
                        Repository Evidence: {comp.evidence}
                      </p>
                      <p className="mt-1 text-[10px] text-muted-foreground">
                        Technologies: {comp.tech}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* MODE 4: VERIFIED TRAJECTORY */}
            {activeMode === "trajectory" && (
              <motion.div
                key="trajectory"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="rounded-3xl border border-cyan/30 bg-background/80 p-7 sm:p-9 shadow-2xl backdrop-blur-2xl"
              >
                <div className="border-b border-white/10 pb-4 flex items-center justify-between">
                  <span className="text-xs font-semibold text-cyan">
                    Chronological Milestones
                  </span>
                  <span className="text-xs text-emerald-400 font-semibold">
                    100% Factual Roadmap
                  </span>
                </div>

                <div className="mt-6 space-y-6">
                  {TIMELINE.map((item, idx) => (
                    <div key={idx} className="relative pl-7 text-sm">
                      <span
                        className={`absolute left-0 top-1 size-3 rounded-full ${
                          item.active
                            ? "bg-cyan shadow-sm shadow-cyan/50 motion-safe:animate-pulse"
                            : "bg-white/20 border border-white/30"
                        }`}
                      />
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-cyan">
                          {item.year}
                        </span>
                        {item.active && (
                          <span className="rounded-full bg-cyan/15 px-2 py-0.5 text-[10px] font-semibold text-cyan border border-cyan/30">
                            Current Focus
                          </span>
                        )}
                      </div>
                      <h4 className="mt-1 font-display text-base font-bold text-foreground">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 3 Pillars of Craft Cards (Hard Cooked) */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3, ease: EASE }}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-background/80 p-7 shadow-xl backdrop-blur-xl transition-colors duration-300 ${pillar.borderGlow}`}
              >
                {/* Laser Top Beam */}
                <div
                  className={`pointer-events-none absolute inset-x-8 top-0 h-[2px] bg-gradient-to-r from-transparent ${pillar.laser} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  aria-hidden="true"
                />

                <div className="mb-5 inline-flex size-14 items-center justify-center rounded-2xl bg-white/5 p-3 ring-1 ring-white/10 transition-transform duration-200 group-hover:scale-110">
                  <Icon className={`size-7 ${pillar.accent}`} aria-hidden="true" />
                </div>

                <h4 className="font-display text-xl font-bold text-foreground">
                  {pillar.title}
                </h4>

                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>

                <div className="mt-6 border-t border-white/10 pt-3.5">
                  <span className="text-xs font-medium text-cyan/90">
                    // {pillar.telemetry}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
