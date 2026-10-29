import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";
import {
  Sparkles,
  ArrowUpRight,
  Code2,
  BrainCircuit,
  Database,
  Rocket,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Terminal,
  Activity,
  Cpu,
  Layers,
  Check,
  Copy,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/developer-portrait.png";
import { EASE, fadeUp, staggerContainer } from "@/lib/motion";

const PILLARS = [
  {
    icon: Sparkles,
    title: "Cinematic Frontend",
    description:
      "Crafting hyper-responsive interfaces using React 19, TypeScript, and modern CSS with 60fps GPU acceleration and fluid micro-interactions.",
    accent: "text-cyan",
    laser: "via-cyan",
    borderGlow: "hover:border-cyan/60 hover:shadow-[0_0_35px_rgba(0,229,255,0.22)]",
    telemetry: "REACT 19 • 60FPS UX • ZERO JANK",
  },
  {
    icon: Database,
    title: "Robust Python Core",
    description:
      "Designing scalable asynchronous APIs with FastAPI, Python, PostgreSQL, and Redis built for heavy production workloads.",
    accent: "text-[#3776AB]",
    laser: "via-[#3776AB]",
    borderGlow: "hover:border-[#3776AB]/60 hover:shadow-[0_0_35px_rgba(55,118,171,0.25)]",
    telemetry: "FASTAPI • ASYNCIO • POSTGRES",
  },
  {
    icon: BrainCircuit,
    title: "Applied AI Systems",
    description:
      "Integrating state-of-the-art LLMs, autonomous agentic loops, RAG, and custom prompt directives directly into real products.",
    accent: "text-[#BD34FE]",
    laser: "via-[#BD34FE]",
    borderGlow: "hover:border-[#BD34FE]/60 hover:shadow-[0_0_35px_rgba(189,52,254,0.25)]",
    telemetry: "LLMS • RAG SEARCH • MULTI-AGENT",
  },
];

const HIGHLIGHTS = [
  { value: "10+", label: "Products & Apps Built" },
  { value: "Full Stack", label: "React + Python Core" },
  { value: "AI Native", label: "Autonomous Agents" },
  { value: "100%", label: "Committed to Craft" },
];

const CODE_TABS = [
  {
    id: "ai",
    label: "AgenticFlow.ts",
    badge: "AI CORE",
    code: `// Autonomous Agentic Pipeline with Vector Grounding
export async function executeAgentWorkflow(directive: string) {
  const context = await vectorStore.similaritySearch(directive, { k: 4 });
  const agent = new AgentRuntime({
    model: "claude-3-5-sonnet",
    tools: [databaseQueryTool, codeExecTool, apiDispatcher],
  });
  return agent.stream({ directive, context });
}`,
  },
  {
    id: "backend",
    label: "FastAPICore.py",
    badge: "BACKEND",
    code: `# High-Concurrency Asynchronous FastAPI Microservice
@router.post("/v1/tasks/dispatch", response_model=TaskResult)
async def dispatch_task(payload: TaskPayload, redis: Redis = Depends(get_redis)):
    async with db.transaction():
        cached = await redis.get(f"task:{payload.id}")
        if cached:
            return TaskResult.parse_raw(cached)
        result = await worker_pool.execute_async(payload)
        await redis.setex(f"task:{payload.id}", 3600, result.json())
        return result`,
  },
  {
    id: "frontend",
    label: "CinematicUI.tsx",
    badge: "FRONTEND",
    code: `// 60FPS Reactive Interface & Strict Type Contracts
export function CinematicStreamUI({ streamData }: StreamProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="glassmorphic-terminal border border-cyan/40"
    >
      <StreamingResponse content={streamData} fps={60} />
    </motion.div>
  );
}`,
  },
];

function AnimatedMeter({
  name,
  pct,
  tech,
  color,
  glow,
}: {
  name: string;
  pct: number;
  tech: string;
  color: string;
  glow: string;
}) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const duration = 1400;
    let frameId: number;

    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(ease * pct));
      if (progress < 1) frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [inView, pct]);

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex items-center justify-between text-xs">
        <span className="font-semibold text-foreground/90">{name}</span>
        <span className="font-mono text-[11px] font-bold text-cyan">{val}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden relative">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${pct}%` : "0%" }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          style={{ boxShadow: `0 0 12px ${glow}` }}
        />
      </div>
      <div className="font-mono text-[9px] text-muted-foreground/70">{tech}</div>
    </div>
  );
}

export function About() {
  const [activeTab, setActiveTab] = useState<"ai" | "backend" | "frontend">("ai");
  const [copiedCode, setCopiedCode] = useState(false);

  const activeSnippet = CODE_TABS.find((t) => t.id === activeTab) ?? CODE_TABS[0];

  const handleCopySnippet = () => {
    navigator.clipboard.writeText(activeSnippet.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="about" className="section-shell relative">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Pasha Dev"
          title="Engineering Meets Intelligence."
          lead="Muhammad Mubashar — Pasha Dev — is an AI Full Stack Developer engineering modern web applications, Python backends, and intelligent AI-powered digital products."
        />

        {/* Bento Grid Layout */}
        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {/* Main Story & Profile Bento Card (7 cols) */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[var(--border)] bg-[color-mix(in_oklab,var(--panel-strong)_94%,transparent)] p-7 sm:p-9 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:border-cyan/50 hover:shadow-[0_0_40px_rgba(0,229,255,0.2)] lg:col-span-7">
            {/* Corner tech marks */}
            <span className="pointer-events-none absolute top-3 left-3 font-mono text-[10px] text-cyan/30">+</span>
            <span className="pointer-events-none absolute top-3 right-3 font-mono text-[10px] text-cyan/30">+</span>
            <span className="pointer-events-none absolute bottom-3 left-3 font-mono text-[10px] text-cyan/30">+</span>
            <span className="pointer-events-none absolute bottom-3 right-3 font-mono text-[10px] text-cyan/30">+</span>

            {/* Glowing Laser Top Accent */}
            <div className="pointer-events-none absolute inset-x-8 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(500px_circle_at_top_left,rgba(0,229,255,0.12),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div>
              {/* Telemetry Header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <span className="font-mono text-[10px] font-bold tracking-[0.22em] text-cyan uppercase flex items-center gap-1.5">
                  <Terminal className="size-3 text-cyan" />
                  IDENTIFIER // DEV.01
                </span>
                <span className="font-mono text-[10px] text-muted-foreground flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-emerald-400 animate-ping" />
                  STATUS: OPERATIONAL
                </span>
              </div>

              {/* Header inside card: Avatar + Info */}
              <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative size-16 overflow-hidden rounded-2xl border-2 border-cyan/60 bg-[var(--panel-strong)] shadow-[0_0_25px_rgba(0,229,255,0.4)] ring-2 ring-cyan/20 transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={portrait}
                      alt="Muhammad Mubashar"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      Muhammad Mubashar
                    </h3>
                    <p className="text-xs font-semibold text-cyan tracking-wider uppercase">
                      Pasha Dev • AI Full Stack Developer
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-muted-foreground">
                  <Activity className="size-3 text-emerald-400" />
                  <span>UTC+5 // PKT</span>
                </div>
              </div>

              {/* Bio Narrative */}
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                I bridge the boundary between <span className="text-cyan font-medium">high-performance frontend architecture</span> and <span className="text-white font-medium">asynchronous backend intelligence</span>. By combining modern React frameworks with Python, FastAPI, and autonomous AI agents, I design production systems that run at 60fps and scale effortlessly.
              </p>

              {/* Interactive Architecture Blueprint Code Terminal */}
              <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black/70 shadow-xl backdrop-blur-md">
                {/* Terminal Tab Bar */}
                <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.03] px-3.5 py-2">
                  <div className="flex items-center gap-1.5">
                    {CODE_TABS.map((tab) => {
                      const isActive = activeTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => setActiveTab(tab.id as any)}
                          className={`rounded-lg px-2.5 py-1 font-mono text-[11px] font-semibold transition-all cursor-pointer ${
                            isActive
                              ? "bg-cyan/15 text-cyan ring-1 ring-cyan/40 shadow-[0_0_10px_rgba(0,229,255,0.2)]"
                              : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                          }`}
                        >
                          {tab.label}
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[9px] text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                      LIVE SPEC
                    </span>
                    <button
                      type="button"
                      onClick={handleCopySnippet}
                      className="flex items-center gap-1 rounded-md bg-white/5 px-2 py-0.5 font-mono text-[10px] text-muted-foreground hover:bg-cyan/15 hover:text-cyan transition-colors cursor-pointer"
                      title="Copy code"
                    >
                      {copiedCode ? <Check className="size-3 text-emerald-400" /> : <Copy className="size-3" />}
                      <span>{copiedCode ? "COPIED" : "COPY"}</span>
                    </button>
                  </div>
                </div>

                {/* Code Body with Smooth Transition */}
                <div className="p-4 overflow-x-auto font-mono text-xs text-foreground/90 leading-relaxed max-h-52 no-scrollbar bg-black/50">
                  <motion.pre
                    key={activeTab}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-cyan/90 selection:bg-cyan/20"
                  >
                    <code>{activeSnippet.code}</code>
                  </motion.pre>
                </div>
              </div>

              {/* Pillars chips */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "React 19",
                  "TypeScript",
                  "Python",
                  "FastAPI",
                  "PostgreSQL",
                  "AI Agents",
                  "Tailwind CSS",
                  "Docker",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="glass inline-flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-medium text-foreground/90 transition-all hover:border-cyan/50 hover:text-cyan"
                  >
                    <span className="size-1.5 rounded-full bg-cyan" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Metrics Ticker inside card */}
            <div className="mt-8 grid grid-cols-2 gap-3 border-t border-white/5 pt-6 sm:grid-cols-4">
              {HIGHLIGHTS.map((h, i) => (
                <div
                  key={i}
                  className="group/stat relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-3.5 transition-all duration-300 hover:border-cyan/40 hover:bg-cyan/[0.04] hover:shadow-[0_0_20px_rgba(0,229,255,0.15)]"
                >
                  <span className="font-display text-2xl font-black text-cyan drop-shadow-[0_0_12px_rgba(0,229,255,0.4)]">
                    {h.value}
                  </span>
                  <span className="mt-1 block font-mono text-[10px] font-medium leading-tight text-muted-foreground">
                    {h.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Cyber Capability & Trajectory Matrix Bento Card (5 cols) */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[var(--border)] bg-[color-mix(in_oklab,var(--panel-strong)_94%,transparent)] p-7 sm:p-8 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:border-cyan/50 hover:shadow-[0_0_40px_rgba(0,229,255,0.2)] lg:col-span-5">
            {/* Tech Corner Crosshairs */}
            <span className="pointer-events-none absolute top-3 left-3 font-mono text-[10px] text-cyan/30">+</span>
            <span className="pointer-events-none absolute top-3 right-3 font-mono text-[10px] text-cyan/30">+</span>
            <span className="pointer-events-none absolute bottom-3 left-3 font-mono text-[10px] text-cyan/30">+</span>
            <span className="pointer-events-none absolute bottom-3 right-3 font-mono text-[10px] text-cyan/30">+</span>

            {/* Top laser accent line */}
            <div className="pointer-events-none absolute inset-x-8 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-3.5">
                <span className="font-mono text-[10px] font-bold tracking-[0.22em] text-cyan uppercase">
                  CAPABILITIES // BENCHMARKS
                </span>
                <span className="font-mono text-[10px] text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-emerald-400 animate-ping" />
                  ONLINE
                </span>
              </div>

              <h3 className="mt-4 font-display text-xl font-bold text-foreground">
                Core Engineering Matrix
              </h3>

              {/* Animated Progress Telemetry Meters */}
              <div className="mt-5 space-y-4">
                <AnimatedMeter
                  name="Autonomous AI & Tool Calling"
                  pct={98}
                  tech="LLMs • Tool Calling • RAG Pipelines"
                  color="from-cyan to-blue-500"
                  glow="rgba(0,229,255,0.5)"
                />
                <AnimatedMeter
                  name="Modern Frontend Architecture"
                  pct={96}
                  tech="React 19 • TypeScript • 60fps UX"
                  color="from-blue-500 to-cyan"
                  glow="rgba(49,120,198,0.5)"
                />
                <AnimatedMeter
                  name="High-Throughput Python Core"
                  pct={94}
                  tech="FastAPI • AsyncIO • Redis Cache"
                  color="from-emerald-400 to-cyan"
                  glow="rgba(5,150,105,0.5)"
                />
                <AnimatedMeter
                  name="Production Systems & Cloud"
                  pct={92}
                  tech="PostgreSQL • Docker • CI/CD"
                  color="from-violet to-cyan"
                  glow="rgba(189,52,254,0.5)"
                />
              </div>

              {/* Trajectory Timeline Rail */}
              <div className="mt-7 border-t border-white/5 pt-4">
                <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase">
                  TRAJECTORY // KEY MILESTONES
                </span>
                <div className="mt-3 space-y-3.5">
                  {[
                    {
                      period: "2024 — PRESENT",
                      title: "AI Full Stack Systems",
                      desc: "Engineering autonomous agent applications, streaming LLMs, and enterprise interfaces.",
                      active: true,
                    },
                    {
                      period: "2023 — 2024",
                      title: "Python & Asynchronous Microservices",
                      desc: "Constructing high-concurrency FastAPI backends, PostgreSQL schemas, and caching layers.",
                      active: false,
                    },
                    {
                      period: "2022 — 2023",
                      title: "React & Creative Engineering",
                      desc: "Crafting fluid interactive digital experiences, component design systems, and responsive web.",
                      active: false,
                    },
                  ].map((m) => (
                    <div key={m.title} className="relative pl-5 text-xs">
                      <span
                        className={`absolute left-0 top-1.5 size-2 rounded-full ${
                          m.active
                            ? "bg-cyan shadow-[0_0_10px_rgba(0,229,255,0.9)] animate-pulse"
                            : "bg-white/20 border border-white/30"
                        }`}
                      />
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] text-cyan font-bold">
                          {m.period}
                        </span>
                        {m.active && (
                          <span className="rounded-full bg-cyan/15 px-2 py-0.2 font-mono text-[9px] font-semibold text-cyan">
                            CURRENT
                          </span>
                        )}
                      </div>
                      <p className="mt-0.5 font-semibold text-foreground/90">{m.title}</p>
                      <p className="text-[11px] text-muted-foreground leading-relaxed">{m.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Card Strip */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border)] pt-4">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-cyan animate-pulse shadow-[0_0_8px_rgba(0,229,255,0.8)]" />
                <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">
                  SYSTEM STATUS: 100% OPERATIONAL
                </span>
              </div>

              <Button variant="neon" size="sm" asChild>
                <a href="#projects">
                  View Work <ArrowUpRight size={14} />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* 3 Pillars of Craft Cards */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3, ease: EASE }}
                className={`group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[color-mix(in_oklab,var(--panel-strong)_90%,transparent)] p-7 shadow-xl backdrop-blur-xl transition-all duration-500 ${pillar.borderGlow}`}
              >
                {/* Tech corner crosshairs */}
                <span className="pointer-events-none absolute top-3 left-3 font-mono text-[10px] text-cyan/30">+</span>
                <span className="pointer-events-none absolute top-3 right-3 font-mono text-[10px] text-cyan/30">+</span>
                <span className="pointer-events-none absolute bottom-3 left-3 font-mono text-[10px] text-cyan/30">+</span>
                <span className="pointer-events-none absolute bottom-3 right-3 font-mono text-[10px] text-cyan/30">+</span>

                {/* Laser top beam */}
                <div className={`pointer-events-none absolute inset-x-8 top-0 h-[2px] bg-gradient-to-r from-transparent ${pillar.laser} to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                <div className="mb-5 inline-flex size-14 items-center justify-center rounded-2xl bg-white/5 p-3 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110">
                  <Icon className={`size-7 ${pillar.accent}`} />
                </div>
                <h4 className="font-display text-xl font-bold text-foreground">
                  {pillar.title}
                </h4>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>

                {/* Telemetry Footer Tag */}
                <div className="mt-6 border-t border-white/5 pt-3.5">
                  <span className="font-mono text-[10px] font-bold tracking-wider text-cyan/80">
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
