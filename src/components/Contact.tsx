import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  Copy,
  Check,
  Sparkles,
  Send,
  Terminal,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Zap,
  Activity,
  Code2,
  Calendar,
  MessageSquare,
  ArrowUpRight,
  Sliders,
  Flame,
  CheckCircle,
} from "lucide-react";
import { socials } from "@/data/socials";
import {
  GitHubIcon,
  LinkedInIcon,
  InstagramIcon,
  TikTokIcon,
  ThreadsIcon,
} from "@/components/TechIcons";
import { Button } from "@/components/ui/button";
import { EASE } from "@/lib/motion";

const SOCIAL_CONFIG: Record<
  string,
  {
    icon: React.ComponentType<{ className?: string; size?: number }>;
    color: string;
    borderHover: string;
    status: string;
    laser: string;
  }
> = {
  GitHub: {
    icon: GitHubIcon,
    color: "#FFFFFF",
    borderHover: "hover:border-white/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.18)]",
    status: "// REPOSITORIES",
    laser: "via-white",
  },
  LinkedIn: {
    icon: LinkedInIcon,
    color: "#0A66C2",
    borderHover: "hover:border-[#0A66C2]/70 hover:shadow-[0_0_30px_rgba(10,102,194,0.3)]",
    status: "// NETWORK",
    laser: "via-[#0A66C2]",
  },
  Instagram: {
    icon: InstagramIcon,
    color: "#E4405F",
    borderHover: "hover:border-[#E4405F]/70 hover:shadow-[0_0_30px_rgba(228,64,95,0.3)]",
    status: "// VISUALS",
    laser: "via-[#E4405F]",
  },
  TikTok: {
    icon: TikTokIcon,
    color: "#00F2FE",
    borderHover: "hover:border-cyan/70 hover:shadow-[0_0_30px_rgba(0,229,255,0.3)]",
    status: "// DEV_LOGS",
    laser: "via-cyan",
  },
  Threads: {
    icon: ThreadsIcon,
    color: "#FFFFFF",
    borderHover: "hover:border-white/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.18)]",
    status: "// THOUGHTS",
    laser: "via-white",
  },
};

const PROJECT_CAPABILITIES = [
  { id: "ai-agents", label: "Autonomous AI Agents", badge: "LLM + RAG" },
  { id: "fullstack-mvp", label: "Full-Stack MVP (0 to 1)", badge: "React 19 + Python" },
  { id: "fastapi-core", label: "Python & FastAPI Backend", badge: "High-Concurrency" },
  { id: "cinematic-web", label: "Cinematic Interactive Web", badge: "60fps Polish" },
  { id: "architecture-audit", label: "Code & Architecture Audit", badge: "Optimization" },
];

const TIMELINE_OPTIONS = [
  { id: "rapid", label: "⚡ 1–2 Weeks", desc: "Rapid Sprint" },
  { id: "mvp", label: "🚀 3–4 Weeks", desc: "Production MVP" },
  { id: "dedicated", label: "🛡️ Dedicated Retainer", desc: "Ongoing Partner" },
];

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [selectedService, setSelectedService] = useState(PROJECT_CAPABILITIES[0].label);
  const [selectedTimeline, setSelectedTimeline] = useState(TIMELINE_OPTIONS[1].label);
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [projectMessage, setProjectMessage] = useState("");
  const [transmitting, setTransmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [pktTime, setPktTime] = useState("");

  const email = "pashabusiness804@gmail.com";

  // Live ticking UTC+5 (PKT) clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setPktTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    setTransmitting(true);

    setTimeout(() => {
      const subject = encodeURIComponent(
        `Project Directive: ${selectedService} [${selectedTimeline}] - from ${clientName || "Client"}`
      );
      const body = encodeURIComponent(
        `DEVELOPER DIRECTIVE // PASHA DEV STUDIO\n` +
          `========================================\n` +
          `Client / Organization: ${clientName}\n` +
          `Contact Email: ${clientEmail}\n` +
          `Requested Capability: ${selectedService}\n` +
          `Target Timeline: ${selectedTimeline}\n\n` +
          `Project Scope & Specifications:\n${projectMessage}\n\n` +
          `Timestamp: ${new Date().toISOString()}`
      );
      window.open(`mailto:${email}?subject=${subject}&body=${body}`, "_blank");
      setTransmitting(false);
      setSent(true);
      setTimeout(() => setSent(false), 5000);
    }, 850);
  };

  return (
    <section id="contact" className="section-shell relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Main High-Tech Command Bridge Frame */}
        <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-cyan/40 bg-[#060911]/95 p-6 sm:p-10 md:p-14 shadow-[0_0_60px_rgba(0,229,255,0.18)] backdrop-blur-3xl transition-all duration-500 hover:border-cyan hover:shadow-[0_0_80px_rgba(0,229,255,0.25)]">
          {/* Cyber Corner Marks */}
          <span className="pointer-events-none absolute top-4 left-4 font-mono text-sm text-cyan select-none font-bold">+</span>
          <span className="pointer-events-none absolute top-4 right-4 font-mono text-sm text-cyan select-none font-bold">+</span>
          <span className="pointer-events-none absolute bottom-4 left-4 font-mono text-sm text-cyan select-none font-bold">+</span>
          <span className="pointer-events-none absolute bottom-4 right-4 font-mono text-sm text-cyan select-none font-bold">+</span>

          {/* Top laser beam accent */}
          <div className="pointer-events-none absolute inset-x-8 top-0 h-[2.5px] bg-gradient-to-r from-transparent via-cyan to-transparent shadow-[0_0_15px_#00e5ff]" />

          {/* Ambient Cosmic Radial Glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-44 left-1/2 h-88 w-[45rem] -translate-x-1/2 rounded-full opacity-30 blur-[130px]"
            style={{
              background: "radial-gradient(circle, rgba(0,229,255,0.6) 0%, rgba(189,52,254,0.4) 60%, transparent 80%)",
            }}
          />

          {/* Telemetry Header Bar */}
          <div className="relative mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 font-mono text-[11px]">
            <div className="flex items-center gap-2.5">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
                <span className="relative inline-flex size-2.5 rounded-full bg-cyan shadow-[0_0_10px_#00e5ff]" />
              </span>
              <span className="font-bold tracking-[0.2em] text-cyan uppercase">
                MISSION_CONTROL // COMMAND_BRIDGE_V6
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-1.5 font-mono text-cyan">
                <Clock className="size-3.5 text-cyan" />
                <span>UTC+5 (PKT): </span>
                <strong className="text-white font-bold">{pktTime || "08:00:00"}</strong>
              </span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
                DIRECT ACCESS OPEN
              </span>
            </div>
          </div>

          {/* Main Grid: Left Manifesto & Fast Inbox + Right Interactive Directive Dispatcher */}
          <div className="relative grid gap-10 lg:grid-cols-12 items-start">
            {/* Left 5 Columns: Brand Statement, Direct Inbox Card & Guarantees */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-3">
                  <span className="bg-gradient-to-r from-cyan to-violet h-px w-10" />
                  <span className="font-mono text-xs font-bold tracking-[0.25em] text-cyan uppercase">
                    INITIATE COLLABORATION
                  </span>
                </div>

                <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-foreground leading-[1.1]">
                  Let&apos;s Build <br />
                  <span className="bg-gradient-to-r from-cyan via-white to-violet bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,229,255,0.4)]">
                    Something Real.
                  </span>
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Ready to turn an ambitious vision into a high-throughput product? Whether it&apos;s
                  an autonomous AI workflow, high-performance Python engine, or a 60fps cinematic web application,
                  I engineer production-grade systems with strict type safety and zero agency fluff.
                </p>

                {/* Direct Inbox Card with Interactive One-Click Copy */}
                <div className="mt-6 rounded-2xl border-2 border-cyan/30 bg-[#040810]/80 p-5 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-cyan hover:shadow-[0_0_30px_rgba(0,229,255,0.25)]">
                  <div className="flex items-center justify-between text-xs font-mono text-muted-foreground mb-2">
                    <span className="flex items-center gap-1.5 text-cyan font-bold">
                      <Mail className="size-4" /> DIRECT DEVELOPER INBOX
                    </span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <span className="size-1.5 rounded-full bg-emerald-400 animate-ping" />
                      &lt; 2H RESPONSE
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                    <span className="font-mono text-sm sm:text-base font-bold text-foreground break-all text-cyan/95">
                      {email}
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-cyan/40 bg-cyan/15 px-3.5 py-1.5 font-mono text-xs font-bold text-cyan transition-all hover:bg-cyan hover:text-black hover:scale-105 cursor-pointer shadow-[0_0_15px_rgba(0,229,255,0.3)]"
                    >
                      {copied ? (
                        <>
                          <Check className="size-4 text-emerald-400" />
                          <span>COPIED TO CLIPBOARD!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="size-4" />
                          <span>COPY EMAIL</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Engineering Direct Commitments */}
                <div className="mt-6 space-y-2.5 font-mono text-xs text-foreground/90">
                  <div className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/[0.02] p-2.5 transition-colors hover:border-cyan/30">
                    <CheckCircle2 className="size-4 text-cyan shrink-0" />
                    <span>Direct engineering line (No account managers or middle layers)</span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/[0.02] p-2.5 transition-colors hover:border-cyan/30">
                    <CheckCircle2 className="size-4 text-cyan shrink-0" />
                    <span>Sprint velocity with live continuous staging deployments</span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/[0.02] p-2.5 transition-colors hover:border-cyan/30">
                    <CheckCircle2 className="size-4 text-cyan shrink-0" />
                    <span>Full source code IP ownership &amp; clean repository handover</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 7 Columns: Cyber Interactive Project Directive Dispatcher */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl border border-white/10 bg-[#080d19]/90 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl">
                {/* Tech Terminal Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <Terminal className="size-4 text-cyan" />
                    <span className="font-mono text-xs font-bold tracking-wider text-cyan uppercase">
                      TERMINAL // PROJECT_DISPATCH_PROMPT
                    </span>
                  </div>
                  <span className="rounded bg-white/5 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                    ENCRYPTION: PROTOCOL_256
                  </span>
                </div>

                <form onSubmit={handleDispatch} className="mt-6 space-y-5">
                  {/* Step 1: Select Capability Focus */}
                  <div className="space-y-2">
                    <label className="flex items-center justify-between font-mono text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                      <span>1. Select Architecture Focus</span>
                      <span className="text-cyan font-bold">{selectedService}</span>
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {PROJECT_CAPABILITIES.map((cap) => {
                        const active = selectedService === cap.label;
                        return (
                          <button
                            type="button"
                            key={cap.id}
                            onClick={() => setSelectedService(cap.label)}
                            className={`flex flex-col items-start rounded-xl p-3 text-left transition-all duration-200 cursor-pointer ${
                              active
                                ? "border-2 border-cyan bg-cyan/15 text-white shadow-[0_0_20px_rgba(0,229,255,0.3)] font-bold scale-[1.01]"
                                : "border border-white/10 bg-black/40 text-muted-foreground hover:border-white/20 hover:text-white"
                            }`}
                          >
                            <span className="font-display text-xs font-bold text-foreground">
                              {cap.label}
                            </span>
                            <span className="mt-1 font-mono text-[10px] text-cyan/90">
                              {cap.badge}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 2: Target Timeline */}
                  <div className="space-y-2 pt-1">
                    <label className="flex items-center justify-between font-mono text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                      <span>2. Target Delivery Velocity</span>
                      <span className="text-cyan font-bold">{selectedTimeline}</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {TIMELINE_OPTIONS.map((opt) => {
                        const active = selectedTimeline === opt.label;
                        return (
                          <button
                            type="button"
                            key={opt.id}
                            onClick={() => setSelectedTimeline(opt.label)}
                            className={`rounded-xl px-3 py-2 text-center transition-all duration-200 cursor-pointer ${
                              active
                                ? "border-2 border-cyan bg-cyan/15 text-cyan shadow-[0_0_15px_rgba(0,229,255,0.3)] font-bold"
                                : "border border-white/10 bg-black/40 text-muted-foreground hover:border-white/20 hover:text-white"
                            }`}
                          >
                            <p className="font-mono text-xs font-bold">{opt.label}</p>
                            <p className="font-mono text-[10px] text-muted-foreground mt-0.5">{opt.desc}</p>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 3: Name & Email inputs */}
                  <div className="grid gap-3 sm:grid-cols-2 pt-1">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="directive-name"
                        className="block font-mono text-[11px] font-semibold text-muted-foreground uppercase"
                      >
                        Your Name / Organization
                      </label>
                      <input
                        id="directive-name"
                        type="text"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="e.g. Alex Morgan"
                        className="w-full rounded-xl border border-white/15 bg-black/60 px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground/40 focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="directive-email"
                        className="block font-mono text-[11px] font-semibold text-muted-foreground uppercase"
                      >
                        Email Address
                      </label>
                      <input
                        id="directive-email"
                        type="email"
                        required
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        placeholder="e.g. alex@venture.com"
                        className="w-full rounded-xl border border-white/15 bg-black/60 px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground/40 focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan transition-all"
                      />
                    </div>
                  </div>

                  {/* Step 4: Project Scope Message */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="directive-message"
                      className="block font-mono text-[11px] font-semibold text-muted-foreground uppercase"
                    >
                      Project Specifications / Goals
                    </label>
                    <textarea
                      id="directive-message"
                      rows={3}
                      required
                      value={projectMessage}
                      onChange={(e) => setProjectMessage(e.target.value)}
                      placeholder="Outline your target features, existing tech stack, or problem statement..."
                      className="w-full rounded-xl border border-white/15 bg-black/60 p-3.5 text-xs text-foreground placeholder:text-muted-foreground/40 focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button & Security Protocol */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-white/10">
                    <div className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground">
                      <ShieldCheck className="size-4 text-cyan" />
                      <span>Direct encrypted dispatch • Instant copy &amp; transmission</span>
                    </div>

                    <Button
                      type="submit"
                      variant="neon"
                      size="lg"
                      disabled={transmitting}
                      className="min-w-[220px] justify-center shadow-[0_0_35px_rgba(0,229,255,0.45)] cursor-pointer"
                    >
                      {transmitting ? (
                        <span className="flex items-center gap-2 font-mono text-xs">
                          <Activity className="size-4 animate-spin text-cyan" />
                          DISPATCHING DIRECTIVE...
                        </span>
                      ) : sent ? (
                        <span className="flex items-center gap-2 text-emerald-300 font-bold">
                          <CheckCircle className="size-4" /> DIRECTIVE DISPATCHED!
                        </span>
                      ) : (
                        <span className="flex items-center gap-2 font-display tracking-wider">
                          <Send className="size-4" /> TRANSMIT PROJECT DIRECTIVE
                        </span>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Real Social Links Grid — 5 Official Brand Cards */}
          <div className="relative mt-12 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-5">
            {socials.map((s) => {
              const cfg = SOCIAL_CONFIG[s.label] ?? {
                icon: GitHubIcon,
                color: "#FFFFFF",
                borderHover: "hover:border-cyan/50 hover:shadow-[0_0_30px_rgba(0,229,255,0.2)]",
                status: "// CONNECT",
                laser: "via-cyan",
              };
              const Icon = cfg.icon;

              return (
                <motion.a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.25, ease: EASE }}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[var(--border)] bg-[color-mix(in_oklab,var(--panel)_85%,transparent)] p-5 backdrop-blur-xl transition-all duration-300 ${cfg.borderHover}`}
                >
                  {/* Tech corner marks */}
                  <span className="pointer-events-none absolute top-2.5 left-2.5 font-mono text-[8px] text-cyan/30">+</span>
                  <span className="pointer-events-none absolute top-2.5 right-2.5 font-mono text-[8px] text-cyan/30">+</span>

                  {/* Laser top accent line on hover */}
                  <div
                    className={`pointer-events-none absolute inset-x-6 top-0 h-[2px] bg-gradient-to-r from-transparent ${cfg.laser} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />

                  {/* Top: Icon + Arrow */}
                  <div className="flex items-center justify-between">
                    <div className="relative flex size-11 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110">
                      <Icon size={24} className="size-6 text-foreground transition-colors group-hover:text-white" />
                    </div>

                    <div className="flex size-7 items-center justify-center rounded-full bg-white/5 text-muted-foreground transition-all duration-300 group-hover:bg-cyan/20 group-hover:text-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <ArrowUpRight className="size-3.5" />
                    </div>
                  </div>

                  {/* Bottom: Label + Handle + Status */}
                  <div className="mt-6">
                    <span className="font-mono text-[9px] font-semibold tracking-wider text-muted-foreground/70 uppercase">
                      {cfg.status}
                    </span>
                    <h3 className="mt-0.5 font-display text-base font-bold text-foreground transition-colors group-hover:text-cyan">
                      {s.label}
                    </h3>
                    <p className="mt-0.5 font-mono text-xs text-muted-foreground truncate">
                      {s.handle}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
