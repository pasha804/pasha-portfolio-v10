import { motion } from "motion/react";
import {
  Bot,
  Layers,
  Cpu,
  Sparkles,
  Compass,
  Terminal,
  ArrowUpRight,
  CheckCircle2,
  Zap,
  Activity,
  Code2,
  ShieldCheck,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { EASE, fadeUp, staggerContainer } from "@/lib/motion";

export function Services() {
  return (
    <section id="services" className="section-shell relative">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Capabilities & Architecture"
          title="What I Build."
          lead="Engineered from ground up with modern aesthetics, strict type contracts, and autonomous AI intelligence."
        />

        {/* Cyber Bento Matrix */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="mt-14 space-y-6"
        >
          {/* TIER 1: Dual Flagship Architectures */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Card 1: Autonomous AI & Agentic Systems */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[color-mix(in_oklab,var(--panel-strong)_92%,transparent)] p-8 sm:p-10 shadow-2xl backdrop-blur-2xl transition-[border-color,box-shadow] duration-300 hover:border-cyan/50 hover:shadow-xl hover:shadow-cyan/20"
            >
              {/* Corner tech marks */}
              <span className="pointer-events-none absolute top-3 left-3 text-[10px] text-cyan/30" aria-hidden="true">+</span>
              <span className="pointer-events-none absolute top-3 right-3 text-[10px] text-cyan/30" aria-hidden="true">+</span>
              <span className="pointer-events-none absolute bottom-3 left-3 text-[10px] text-cyan/30" aria-hidden="true">+</span>
              <span className="pointer-events-none absolute bottom-3 right-3 text-[10px] text-cyan/30" aria-hidden="true">+</span>

              {/* Glowing Laser Top Accent */}
              <div className="pointer-events-none absolute inset-x-8 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs font-semibold text-cyan">
                  <Bot className="size-3.5" aria-hidden="true" />
                  <span>Core Flagship // 01</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                  <span className="size-1.5 rounded-full bg-emerald-400 motion-safe:animate-ping" />
                  <span>Active Pipeline</span>
                </div>
              </div>

              <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-foreground group-hover:text-cyan transition-colors sm:text-3xl">
                Autonomous AI &amp; Agentic Applications
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Designing intelligence into the core product spine. Real-time streaming interfaces, multi-step LLM function calling, vector grounding (RAG), and autonomous self-directing agent pipelines.
              </p>

              {/* Technical Specifications Grid */}
              <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {[
                  "Streaming LLM UI / UX Interfaces",
                  "Dynamic Tool & Function Calling",
                  "Vector Embeddings & RAG Knowledge",
                  "Autonomous Multi-Agent Loops",
                ].map((spec) => (
                  <div
                    key={spec}
                    className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2 text-xs font-medium text-foreground/85 transition-colors group-hover:border-cyan/20"
                  >
                    <CheckCircle2 className="size-3.5 text-cyan shrink-0" aria-hidden="true" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              {/* Telemetry Footer */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/5 pt-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Zap className="size-3 text-cyan" aria-hidden="true" />
                  <span>Stack: OpenAI / LangChain / Python / FastAPI</span>
                </div>
                <span className="text-cyan font-semibold">Pipeline: Streaming SSE</span>
              </div>
            </motion.div>

            {/* Card 2: Full-Stack Digital Architectures */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[color-mix(in_oklab,var(--panel-strong)_92%,transparent)] p-8 sm:p-10 shadow-2xl backdrop-blur-2xl transition-[border-color,box-shadow] duration-300 hover:border-violet/50 hover:shadow-xl hover:shadow-violet/20"
            >
              {/* Corner tech marks */}
              <span className="pointer-events-none absolute top-3 left-3 text-[10px] text-violet/30" aria-hidden="true">+</span>
              <span className="pointer-events-none absolute top-3 right-3 text-[10px] text-violet/30" aria-hidden="true">+</span>
              <span className="pointer-events-none absolute bottom-3 left-3 text-[10px] text-violet/30" aria-hidden="true">+</span>
              <span className="pointer-events-none absolute bottom-3 right-3 text-[10px] text-violet/30" aria-hidden="true">+</span>

              {/* Glowing Laser Top Accent */}
              <div className="pointer-events-none absolute inset-x-8 top-0 h-[2px] bg-gradient-to-r from-transparent via-violet to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 rounded-full border border-violet/30 bg-violet/10 px-3 py-1 text-xs font-semibold text-violet">
                  <Layers className="size-3.5" aria-hidden="true" />
                  <span>End-To-End // 02</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-cyan">
                  <Activity className="size-3" aria-hidden="true" />
                  <span>Type-Safe Contracts</span>
                </div>
              </div>

              <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-foreground group-hover:text-violet transition-colors sm:text-3xl">
                Full-Stack Digital Platforms
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                End-to-end engineered software systems. Ultra-responsive React 19 &amp; TypeScript front ends communicating seamlessly with asynchronous Python microservices and ACID-compliant PostgreSQL databases.
              </p>

              {/* Technical Specifications Grid */}
              <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {[
                  "React 19 & Strict TypeScript Frontends",
                  "High-Speed Asynchronous FastAPI Core",
                  "PostgreSQL Schemas & Redis Caching",
                  "Containerized CI/CD Deployment with Docker",
                ].map((spec) => (
                  <div
                    key={spec}
                    className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2 text-xs font-medium text-foreground/85 transition-colors group-hover:border-violet/20"
                  >
                    <CheckCircle2 className="size-3.5 text-violet shrink-0" aria-hidden="true" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              {/* Telemetry Footer */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/5 pt-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Code2 className="size-3 text-violet" aria-hidden="true" />
                  <span>Stack: React / TypeScript / FastAPI / PostgreSQL</span>
                </div>
                <span className="text-violet font-semibold">Architecture: Async Microservices</span>
              </div>
            </motion.div>
          </div>

          {/* TIER 2: Four Specialized Cybernetic Engineering Pillars */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Pillar 1: Async Python Backends */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[var(--border)] bg-[color-mix(in_oklab,var(--panel-strong)_92%,transparent)] p-6 sm:p-7 shadow-2xl backdrop-blur-2xl transition-[border-color,box-shadow] duration-300 hover:border-cyan/50 hover:shadow-lg hover:shadow-cyan/20"
            >
              {/* Corner tech marks */}
              <span className="pointer-events-none absolute top-3 left-3 text-[10px] text-cyan/30" aria-hidden="true">+</span>
              <span className="pointer-events-none absolute top-3 right-3 text-[10px] text-cyan/30" aria-hidden="true">+</span>
              <span className="pointer-events-none absolute bottom-3 left-3 text-[10px] text-cyan/30" aria-hidden="true">+</span>
              <span className="pointer-events-none absolute bottom-3 right-3 text-[10px] text-cyan/30" aria-hidden="true">+</span>

              {/* Glowing Laser Top Accent */}
              <div className="pointer-events-none absolute inset-x-6 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />

              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 rounded-full border border-cyan/30 bg-cyan/10 px-2.5 py-0.5 text-[10px] font-semibold text-cyan">
                    <Cpu className="size-3 text-cyan" aria-hidden="true" />
                    <span>Sys.03 // Async</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-emerald-400">
                    <span className="size-1.5 rounded-full bg-emerald-400 motion-safe:animate-ping" />
                    <span>10K+ RPS</span>
                  </div>
                </div>

                <h4 className="mt-5 font-display text-xl font-bold tracking-tight text-foreground group-hover:text-cyan transition-colors">
                  Python &amp; FastAPI Backends
                </h4>
                <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
                  High-throughput, asynchronous microservices with Pydantic type validation, background worker queues, and connection pooling.
                </p>

                {/* Technical Specifications List */}
                <div className="mt-4 space-y-1.5">
                  {[
                    "AsyncIO Non-Blocking Core",
                    "Pydantic Strict Validation",
                    "Redis Cache & Queue Pool",
                  ].map((spec) => (
                    <div
                      key={spec}
                      className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-2.5 py-1.5 text-[11px] font-medium text-foreground/85 transition-colors group-hover:border-cyan/20"
                    >
                      <CheckCircle2 className="size-3 text-cyan shrink-0" aria-hidden="true" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Telemetry Footer */}
              <div className="mt-6 border-t border-white/5 pt-3.5">
                <div className="flex flex-wrap gap-1 mb-3">
                  {["AsyncIO", "Pydantic", "Redis", "JWT Auth"].map((t) => (
                    <span key={t} className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Zap className="size-3 text-cyan" aria-hidden="true" /> FastAPI // Core
                  </span>
                  <span className="font-semibold text-cyan">Latency: &lt; 8ms</span>
                </div>
              </div>
            </motion.div>

            {/* Pillar 2: Vector Search & RAG */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[var(--border)] bg-[color-mix(in_oklab,var(--panel-strong)_92%,transparent)] p-6 sm:p-7 shadow-2xl backdrop-blur-2xl transition-[border-color,box-shadow] duration-300 hover:border-violet/50 hover:shadow-lg hover:shadow-violet/20"
            >
              {/* Corner tech marks */}
              <span className="pointer-events-none absolute top-3 left-3 text-[10px] text-violet/30" aria-hidden="true">+</span>
              <span className="pointer-events-none absolute top-3 right-3 text-[10px] text-violet/30" aria-hidden="true">+</span>
              <span className="pointer-events-none absolute bottom-3 left-3 text-[10px] text-violet/30" aria-hidden="true">+</span>
              <span className="pointer-events-none absolute bottom-3 right-3 text-[10px] text-violet/30" aria-hidden="true">+</span>

              {/* Glowing Laser Top Accent */}
              <div className="pointer-events-none absolute inset-x-6 top-0 h-[2px] bg-gradient-to-r from-transparent via-violet to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />

              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 rounded-full border border-violet/30 bg-violet/10 px-2.5 py-0.5 text-[10px] font-semibold text-violet">
                    <Sparkles className="size-3 text-violet" aria-hidden="true" />
                    <span>Sys.04 // Neural</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-violet">
                    <span className="size-1.5 rounded-full bg-violet motion-safe:animate-ping" />
                    <span>98.6% Recall</span>
                  </div>
                </div>

                <h4 className="mt-5 font-display text-xl font-bold tracking-tight text-foreground group-hover:text-violet transition-colors">
                  Vector Search &amp; RAG
                </h4>
                <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
                  Transforming documents and unstructured knowledge into vector spaces with semantic similarity, hybrid search, and prompt grounding.
                </p>

                {/* Technical Specifications List */}
                <div className="mt-4 space-y-1.5">
                  {[
                    "HNSW Vector Embeddings",
                    "Hybrid Dense & Sparse Search",
                    "Chroma & Pinecone Pipelines",
                  ].map((spec) => (
                    <div
                      key={spec}
                      className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-2.5 py-1.5 text-[11px] font-medium text-foreground/85 transition-colors group-hover:border-violet/20"
                    >
                      <CheckCircle2 className="size-3 text-violet shrink-0" aria-hidden="true" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Telemetry Footer */}
              <div className="mt-6 border-t border-white/5 pt-3.5">
                <div className="flex flex-wrap gap-1 mb-3">
                  {["Embeddings", "RAG", "Chroma", "Context"].map((t) => (
                    <span key={t} className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Activity className="size-3 text-violet" aria-hidden="true" /> OpenAI // Vector
                  </span>
                  <span className="font-semibold text-violet">Dim: 1536-d</span>
                </div>
              </div>
            </motion.div>

            {/* Pillar 3: 60FPS Cinematic Web */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[var(--border)] bg-[color-mix(in_oklab,var(--panel-strong)_92%,transparent)] p-6 sm:p-7 shadow-2xl backdrop-blur-2xl transition-[border-color,box-shadow] duration-300 hover:border-amber-400/50 hover:shadow-lg hover:shadow-amber-400/20"
            >
              {/* Corner tech marks */}
              <span className="pointer-events-none absolute top-3 left-3 text-[10px] text-amber-400/30" aria-hidden="true">+</span>
              <span className="pointer-events-none absolute top-3 right-3 text-[10px] text-amber-400/30" aria-hidden="true">+</span>
              <span className="pointer-events-none absolute bottom-3 left-3 text-[10px] text-amber-400/30" aria-hidden="true">+</span>
              <span className="pointer-events-none absolute bottom-3 right-3 text-[10px] text-amber-400/30" aria-hidden="true">+</span>

              {/* Glowing Laser Top Accent */}
              <div className="pointer-events-none absolute inset-x-6 top-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />

              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-0.5 text-[10px] font-semibold text-amber-400">
                    <Compass className="size-3 text-amber-400" aria-hidden="true" />
                    <span>Sys.05 // Cinematic</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-amber-400">
                    <span className="size-1.5 rounded-full bg-amber-400 motion-safe:animate-ping" />
                    <span>60FPS Stable</span>
                  </div>
                </div>

                <h4 className="mt-5 font-display text-xl font-bold tracking-tight text-foreground group-hover:text-amber-400 transition-colors">
                  60FPS Cinematic Web
                </h4>
                <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
                  Motion-choreographed interactive interfaces with 60fps GPU acceleration, glassmorphic lighting, and immersive user experiences.
                </p>

                {/* Technical Specifications List */}
                <div className="mt-4 space-y-1.5">
                  {[
                    "Framer Motion Choreography",
                    "Glassmorphic Light Physics",
                    "Adaptive Responsive Micro-UX",
                  ].map((spec) => (
                    <div
                      key={spec}
                      className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-2.5 py-1.5 text-[11px] font-medium text-foreground/85 transition-colors group-hover:border-amber-400/20"
                    >
                      <CheckCircle2 className="size-3 text-amber-400 shrink-0" aria-hidden="true" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Telemetry Footer */}
              <div className="mt-6 border-t border-white/5 pt-3.5">
                <div className="flex flex-wrap gap-1 mb-3">
                  {["Motion", "WebGL", "Micro-UX", "Adaptive"].map((t) => (
                    <span key={t} className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Code2 className="size-3 text-amber-400" aria-hidden="true" /> Render // Engine
                  </span>
                  <span className="font-semibold text-amber-400">Frame: 16.6ms</span>
                </div>
              </div>
            </motion.div>

            {/* Pillar 4: Developer Tools & Automation */}
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[var(--border)] bg-[color-mix(in_oklab,var(--panel-strong)_92%,transparent)] p-6 sm:p-7 shadow-2xl backdrop-blur-2xl transition-[border-color,box-shadow] duration-300 hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-400/20"
            >
              {/* Corner tech marks */}
              <span className="pointer-events-none absolute top-3 left-3 text-[10px] text-emerald-400/30" aria-hidden="true">+</span>
              <span className="pointer-events-none absolute top-3 right-3 text-[10px] text-emerald-400/30" aria-hidden="true">+</span>
              <span className="pointer-events-none absolute bottom-3 left-3 text-[10px] text-emerald-400/30" aria-hidden="true">+</span>
              <span className="pointer-events-none absolute bottom-3 right-3 text-[10px] text-emerald-400/30" aria-hidden="true">+</span>

              {/* Glowing Laser Top Accent */}
              <div className="pointer-events-none absolute inset-x-6 top-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />

              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-400">
                    <Terminal className="size-3 text-emerald-400" aria-hidden="true" />
                    <span>Sys.06 // Tooling</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-emerald-400">
                    <span className="size-1.5 rounded-full bg-emerald-400 motion-safe:animate-ping" />
                    <span>Auto-Deploy</span>
                  </div>
                </div>

                <h4 className="mt-5 font-display text-xl font-bold tracking-tight text-foreground group-hover:text-emerald-400 transition-colors">
                  Developer Tools &amp; Automation
                </h4>
                <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
                  High-utility CLI platforms, automated CI/CD pipelines, and agent tooling designed to remove manual drag and increase development velocity.
                </p>

                {/* Technical Specifications List */}
                <div className="mt-4 space-y-1.5">
                  {[
                    "Terminal CLI Suites & Tooling",
                    "Docker Multi-Stage Optimization",
                    "Automated GitHub CI/CD Actions",
                  ].map((spec) => (
                    <div
                      key={spec}
                      className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-2.5 py-1.5 text-[11px] font-medium text-foreground/85 transition-colors group-hover:border-emerald-400/20"
                    >
                      <CheckCircle2 className="size-3 text-emerald-400 shrink-0" aria-hidden="true" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Telemetry Footer */}
              <div className="mt-6 border-t border-white/5 pt-3.5">
                <div className="flex flex-wrap gap-1 mb-3">
                  {["CLI Suites", "Docker", "Pipelines", "Scripts"].map((t) => (
                    <span key={t} className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="size-3 text-emerald-400" aria-hidden="true" /> Docker // Runtime
                  </span>
                  <span className="font-semibold text-emerald-400">Pipelines: Ready</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
