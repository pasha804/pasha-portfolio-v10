import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Trophy,
  Award,
  Sparkles,
  ExternalLink,
  Code2,
  Cpu,
  Calendar,
  Layers,
  CheckCircle2,
  Maximize2,
  X,
  Copy,
  Check,
  ShieldCheck,
  ArrowUpRight,
  Terminal,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { hackathons, type HackathonItem, type HackathonCertificate } from "@/data/hackathons";
import { fadeUp, staggerContainer, viewportOnce, EASE } from "@/lib/motion";

export function Hackathons() {
  const [selectedCert, setSelectedCert] = useState<HackathonCertificate | null>(null);
  const [copiedId, setCopiedId] = useState(false);

  // Close modal on Escape key press and manage body scroll
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setSelectedCert(null);
      }
    }
    if (selectedCert) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCert]);

  const handleCopyId = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2200);
  };

  const featured = hackathons.find((h) => h.featured) || hackathons[0];
  const others = hackathons.filter((h) => h.id !== featured.id);

  return (
    <section id="hackathons" className="section-shell relative">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="COMPETITIVE SPRINT // LABLAB.AI"
          title="Global AI Hackathons & Sprints"
          lead="48-hour global innovation sprints engineering autonomous AI software agents, real-time developer tooling, and intelligent architectures under extreme pressure."
        />

        {/* Global Hackathon Stats Banner */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[var(--border)] bg-[color-mix(in_oklab,var(--panel)_85%,transparent)] px-6 py-4 shadow-xl backdrop-blur-xl"
        >
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-amber-400/15 text-amber-400 ring-1 ring-amber-400/30">
              <Trophy className="size-5" />
            </div>
            <div>
              <p className="font-display text-sm font-semibold text-foreground">
                Lablab.ai Certified Competitor
              </p>
              <p className="text-xs text-muted-foreground">
                Recent: IBM Bob 2.0 Hackathon (September 25–27, 2026)
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <span className="size-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50 motion-safe:animate-pulse" />
              Verified Submissions
            </span>
            <span className="hidden sm:inline text-white/20" aria-hidden="true">•</span>
            <span className="flex items-center gap-1.5 text-cyan">
              <Sparkles className="size-3.5" aria-hidden="true" />
              Autonomous Agents Specialist
            </span>
          </div>
        </motion.div>

        {/* Featured Card: IBM Bob 2.0 Hackathon & Pasha DevPilot */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 relative overflow-hidden rounded-3xl border border-cyan/40 bg-[color-mix(in_oklab,var(--panel-strong)_95%,transparent)] p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-2xl transition-[border-color,box-shadow] duration-300 hover:shadow-xl hover:shadow-cyan/20"
        >
          {/* Cyber Corner Marks */}
          <span className="pointer-events-none absolute top-3 left-3 text-xs text-cyan/50 select-none" aria-hidden="true">+</span>
          <span className="pointer-events-none absolute top-3 right-3 text-xs text-cyan/50 select-none" aria-hidden="true">+</span>
          <span className="pointer-events-none absolute bottom-3 left-3 text-xs text-cyan/50 select-none" aria-hidden="true">+</span>
          <span className="pointer-events-none absolute bottom-3 right-3 text-xs text-cyan/50 select-none" aria-hidden="true">+</span>

          {/* Glowing laser top accent */}
          <div className="pointer-events-none absolute inset-x-12 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan to-transparent" aria-hidden="true" />

          {/* Top Event Header */}
          <div className="relative flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-300 shadow-sm shadow-amber-400/30">
                <Trophy className="size-3" aria-hidden="true" />
                {featured.badge}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan/40 bg-cyan/10 px-3 py-1 text-xs font-semibold text-cyan">
                <Cpu className="size-3" aria-hidden="true" />
                {featured.hostBadge}
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="size-3.5 text-cyan" aria-hidden="true" />
              <span>{featured.date}</span>
            </div>
          </div>

          {/* Main Grid: Project Narrative (Left) + Certificate Showcase (Right) */}
          <div className="mt-8 grid gap-10 lg:grid-cols-12 items-center">
            {/* Left 7 Cols: Project Overview */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-semibold text-cyan">
                  {featured.event} • {featured.host}
                </span>
                <h3 className="mt-2 font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                  {featured.projectName}
                </h3>
                <p className="mt-2 text-sm sm:text-base font-medium text-cyan/90">
                  {featured.tagline}
                </p>
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {featured.description}
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {featured.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-white/5 bg-white/[0.03] p-3 text-center backdrop-blur-md"
                  >
                    <p className="text-sm sm:text-base font-bold text-foreground">
                      {m.value}
                    </p>
                    <p className="mt-0.5 text-[10px] text-muted-foreground">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Key Architectural Highlights */}
              <div className="space-y-2 pt-1 text-xs text-foreground/90">
                {featured.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-3.5 text-cyan shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Chips */}
              <div className="pt-2">
                <span className="block text-xs font-semibold text-muted-foreground mb-2">
                  Sprint Technologies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {featured.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-foreground/80 transition-colors hover:border-cyan hover:text-cyan"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* External CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-3">
                <Button
                  variant="neon"
                  size="sm"
                  onClick={() => setSelectedCert(featured.certificate)}
                  className="shadow-sm shadow-cyan/40 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
                >
                  <Award className="size-4" aria-hidden="true" />
                  <span>Inspect Official Certificate</span>
                </Button>

                <Button variant="outlineNeon" size="sm" asChild>
                  <a
                    href={featured.links.event}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
                  >
                    <span>Lablab Event Page</span>
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Right 5 Cols: Certificate Graphic & Interactive Modal Trigger */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedCert(featured.certificate)}
                className="group relative w-full overflow-hidden rounded-2xl border-2 border-cyan/40 bg-card/60 p-2 shadow-2xl backdrop-blur-xl cursor-pointer transition-[border-color,box-shadow] duration-300 hover:border-cyan hover:shadow-xl hover:shadow-cyan/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
              >
                {/* Certificate Image Preview */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                  <img
                    src={featured.certificate.image}
                    alt={featured.certificate.title}
                    className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                  />
                  {/* Subtle Sheen Overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" aria-hidden="true" />

                  {/* Hover Inspect Prompt */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-xs transition-opacity duration-300 group-hover:opacity-100">
                    <span className="flex items-center gap-2 rounded-full border border-cyan/50 bg-cyan/20 px-4 py-2 text-xs font-bold text-cyan shadow-sm shadow-cyan/50">
                      <Maximize2 className="size-3.5" aria-hidden="true" /> Click to Expand Certificate
                    </span>
                  </div>
                </div>

                {/* Micro info bar under certificate */}
                <div className="p-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-cyan font-semibold flex items-center gap-1">
                      <ShieldCheck className="size-3 text-cyan" aria-hidden="true" />
                      Verified on Lablab.ai
                    </span>
                    <span className="text-muted-foreground">{featured.certificate.date}</span>
                  </div>
                  <p className="mt-1 font-display text-xs font-bold text-foreground truncate">
                    {featured.certificate.title}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Additional Hackathons & Sprints Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {others.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[var(--border)] bg-[color-mix(in_oklab,var(--panel)_85%,transparent)] p-6 backdrop-blur-xl transition-colors duration-200 hover:border-cyan/40 hover:shadow-md hover:shadow-cyan/15"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-semibold text-cyan">
                    {item.badge}
                  </span>
                  <span className="text-xs text-muted-foreground">{item.date}</span>
                </div>

                <div className="mt-4">
                  <span className="text-xs text-muted-foreground">
                    {item.event} • {item.host}
                  </span>
                  <h4 className="mt-1 font-display text-xl font-bold text-foreground">
                    {item.projectName}
                  </h4>
                  <p className="mt-1 text-xs font-medium text-cyan/90">{item.tagline}</p>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="mt-4 space-y-1.5 text-xs text-foreground/80">
                  {item.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-cyan font-bold" aria-hidden="true">•</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech chips */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {item.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-white/5 bg-white/[0.03] px-2 py-0.5 text-[10px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex items-center justify-between pt-3 border-t border-white/5">
                <button
                  type="button"
                  onClick={() => setSelectedCert(item.certificate)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan hover:underline cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
                >
                  <Award className="size-3.5" aria-hidden="true" />
                  <span>Inspect Credentials</span>
                </button>

                <a
                  href={item.links.event}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
                >
                  <span>Event Info</span>
                  <ArrowUpRight className="size-3" aria-hidden="true" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full-Screen Verified Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedCert.title}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-background/85 backdrop-blur-md"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="relative z-10 max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-cyan/40 bg-background/98 p-5 sm:p-7 shadow-2xl backdrop-blur-2xl"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                aria-label="Close Certificate modal"
                className="absolute right-5 top-5 z-20 flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-colors duration-200 hover:border-cyan/40 hover:bg-cyan/20 hover:text-cyan cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
              >
                <X className="size-4" aria-hidden="true" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-2 text-xs text-cyan">
                <ShieldCheck className="size-4" aria-hidden="true" />
                <span className="font-semibold">
                  {selectedCert.sealLabel}
                </span>
              </div>
              <h3 className="mt-1 font-display text-xl sm:text-2xl font-bold text-foreground">
                {selectedCert.title}
              </h3>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Issued by {selectedCert.issuer} • {selectedCert.date}
              </p>

              {/* Certificate Image Display */}
              <div className="relative mt-5 overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-2xl">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-auto object-contain max-h-[60vh] mx-auto"
                />
              </div>

              {/* Cryptographic Verification Footer */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">Credential ID:</span>
                  <code className="rounded bg-white/5 px-2.5 py-1 text-xs font-semibold text-cyan">
                    {selectedCert.credentialId}
                  </code>
                  <button
                    type="button"
                    onClick={() => handleCopyId(selectedCert.credentialId)}
                    className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-muted-foreground transition-colors duration-200 hover:text-cyan cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
                  >
                    {copiedId ? (
                      <>
                        <Check className="size-3 text-emerald-400" aria-hidden="true" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="size-3" aria-hidden="true" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <Button variant="neon" size="sm" asChild>
                    <a
                      href={selectedCert.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5"
                    >
                      <span>Verify on Lablab.ai</span>
                      <ExternalLink className="size-3.5" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
