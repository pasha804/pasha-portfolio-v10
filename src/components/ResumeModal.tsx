import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Printer,
  Download,
  Copy,
  Check,
  ExternalLink,
  Award,
  Terminal,
  ShieldCheck,
  Briefcase,
  Code2,
  Mail,
  MapPin,
} from "lucide-react";
import { sound } from "@/lib/sound";
import { Button } from "@/components/ui/button";

export function ResumeModal() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      sound.playCommandOpen();
      setOpen(true);
    };

    window.addEventListener("pasha:open-resume-modal", handleOpen);
    return () => window.removeEventListener("pasha:open-resume-modal", handleOpen);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const handlePrint = () => {
    sound.playBlip();
    window.print();
  };

  const handleCopyResumeText = () => {
    const text = `MUHAMMAD MUBASHAR (PASHA DEV)
AI Full Stack Developer | Systems Architect
Email: pashabusiness804@gmail.com
GitHub: https://github.com/pasha804
LinkedIn: https://www.linkedin.com/in/pasha-dev/
Portfolio: https://pasha-portfolio-v10.vercel.app/

CORE COMPETENCIES:
- Frontend: React 19, TypeScript, Tailwind CSS v4, Framer Motion, 60fps UX
- Backend: Python 3.12, FastAPI, PostgreSQL, Redis, AsyncIO
- AI & Agents: Autonomous LLM Workflows, RAG, Tool Calling, LangChain
- DevOps: Docker, Nitro Engine, Cloudflare Pages, CI/CD

HONORS & AWARDS:
- Winner: Innovation & Excellence Award, Global IBM Bob 2.0 Hackathon (Lablab.ai, Sept 2026)
- Finalist: Autonomous Agents Challenge (Zoro 2.0)
- Featured: Meta Llama 3.1 Global Sprint (Nexora Arena)`;

    navigator.clipboard.writeText(text);
    sound.playChirp();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border-2 border-cyan/40 bg-[#060a14]/98 shadow-[0_0_60px_rgba(0,229,255,0.3)] backdrop-blur-3xl"
        >
          {/* Top Laser Accent */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan to-transparent shadow-[0_0_12px_#00e5ff]" />

          {/* Header Controls */}
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-white/[0.02]">
            <div className="flex items-center gap-2.5 font-mono text-xs text-cyan">
              <Terminal className="size-4" />
              <span className="font-bold tracking-widest uppercase">
                EXECUTIVE_SPECIFICATION // RESUME_V6.0
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyResumeText}
                className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-muted-foreground hover:border-cyan/40 hover:text-cyan transition-colors cursor-pointer"
                title="Copy markdown text"
              >
                {copied ? <Check className="size-3.5 text-emerald-400" /> : <Copy className="size-3.5" />}
                <span>{copied ? "COPIED" : "COPY TEXT"}</span>
              </button>

              <button
                type="button"
                onClick={handlePrint}
                className="flex items-center gap-1.5 rounded-lg border border-cyan/30 bg-cyan/15 px-3 py-1.5 font-mono text-xs font-bold text-cyan hover:bg-cyan hover:text-black transition-colors cursor-pointer"
                title="Print or Save as PDF"
              >
                <Printer className="size-3.5" />
                <span>PRINT / PDF</span>
              </button>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg p-1.5 text-muted-foreground hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
              >
                <X className="size-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Document Content */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 font-sans no-scrollbar">
            {/* Candidate Header */}
            <div className="border-b border-white/10 pb-6 flex flex-wrap items-start justify-between gap-6">
              <div>
                <h2 className="font-display text-3xl font-extrabold text-foreground tracking-tight">
                  Muhammad Mubashar
                </h2>
                <p className="mt-1 font-mono text-sm font-semibold text-cyan uppercase tracking-wider">
                  Pasha Dev • AI Full Stack Developer &amp; Systems Architect
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground">
                  <span className="flex items-center gap-1.5 text-foreground/85">
                    <Mail className="size-3.5 text-cyan" /> pashabusiness804@gmail.com
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="size-3.5 text-cyan" /> Pakistan // Remote Worldwide
                  </span>
                </div>
              </div>

              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 font-mono text-xs text-emerald-400 flex items-center gap-2">
                <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
                <span>AVAILABLE FOR FULL-STACK &amp; AI CONTRACTS</span>
              </div>
            </div>

            {/* Section 1: Executive Profile */}
            <div>
              <h3 className="font-mono text-xs font-bold tracking-widest text-cyan uppercase">
                01 // EXECUTIVE SUMMARY
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                AI Full Stack Developer engineering modern web applications, high-concurrency Python
                backends, and autonomous agentic workflows. Proven track record winning global hackathons
                (IBM Bob 2.0) and architecting production platforms with React 19, TypeScript, FastAPI,
                and PostgreSQL with 60fps GPU-accelerated interaction design.
              </p>
            </div>

            {/* Section 2: Core Engineering Matrix */}
            <div>
              <h3 className="font-mono text-xs font-bold tracking-widest text-cyan uppercase">
                02 // CORE ENGINEERING MATRIX
              </h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <span className="font-mono text-xs font-bold text-cyan">FRONTEND ARCHITECTURE</span>
                  <p className="mt-1 text-xs text-muted-foreground">
                    React 19, TypeScript, Tailwind CSS v4, Next.js, Framer Motion, WebGL (OGL), State Machines, 60fps Animation.
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <span className="font-mono text-xs font-bold text-[#3776AB]">BACKEND &amp; CLOUD</span>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Python 3.12, FastAPI, PostgreSQL, Redis Caching, Docker, Asynchronous Concurrency, REST &amp; WebSockets.
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <span className="font-mono text-xs font-bold text-[#BD34FE]">AI &amp; AUTONOMOUS SYSTEMS</span>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Autonomous Multi-Agent Loops, Tool Calling, Vector Grounding (RAG), LangChain, Prompt Directives.
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <span className="font-mono text-xs font-bold text-emerald-400">DEV TOOLS &amp; WORKFLOWS</span>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Antigravity Platform, Kiro AI, Freebuff, OpenCode, Git, GitHub Actions CI/CD, Nitro Engine.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Notable Awards & Hackathons */}
            <div>
              <h3 className="font-mono text-xs font-bold tracking-widest text-cyan uppercase">
                03 // COMPETITIVE HACKATHONS &amp; HONORS
              </h3>
              <div className="mt-3 space-y-3">
                <div className="rounded-xl border border-amber-400/30 bg-amber-400/5 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <Award className="size-4 text-amber-400" />
                      <span className="font-display text-sm font-bold text-foreground">
                        Innovation &amp; Excellence Award — IBM Bob 2.0 Global Hackathon
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Built Pasha DevPilot: Autonomous AI software engineer with 94.6% auto-remediation rate.
                    </p>
                  </div>
                  <span className="font-mono text-xs font-bold text-amber-400 whitespace-nowrap">
                    SEPT 2026 // LABLAB.AI
                  </span>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="font-display text-sm font-bold text-foreground">
                      Featured AI Product — Meta Llama 3.1 Global Sprint
                    </span>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Built Nexora Arena: Real-time dual-client code challenge PvP with autonomous AI referee.
                    </p>
                  </div>
                  <span className="font-mono text-xs text-cyan whitespace-nowrap">
                    AUG 2026 // LABLAB.AI
                  </span>
                </div>
              </div>
            </div>

            {/* Section 4: Flagship Products */}
            <div>
              <h3 className="font-mono text-xs font-bold tracking-widest text-cyan uppercase">
                04 // FLAGSHIP PRODUCTS
              </h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5">
                  <h4 className="font-display text-xs font-bold text-cyan">Pasha DevPilot</h4>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    Autonomous SDLC platform with AST parsing, pytest auto-healing &amp; GitHub PR dispatch.
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5">
                  <h4 className="font-display text-xs font-bold text-foreground">GuestNexa</h4>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    High-performance SEO agency platform with 3D orbital animations &amp; AI Consultant.
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5">
                  <h4 className="font-display text-xs font-bold text-foreground">Nexora</h4>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    AI skill and social platform with competitive PvP matches judged by AI referee.
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5">
                  <h4 className="font-display text-xs font-bold text-foreground">Pasha Tools</h4>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    Developer command center with PDF, media, regex, hashing, and TTS utilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

