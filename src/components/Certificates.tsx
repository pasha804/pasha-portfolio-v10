import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  ShieldCheck,
  Maximize2,
  X,
  Sparkles,
  Award,
  CheckCircle2,
  Calendar,
  ExternalLink,
  Layers,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { certificates, type Certificate } from "@/data/faq";
import { EASE, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const CATEGORIES = [
  { id: "all", label: "All Credentials" },
  { id: "ai", label: "AI & Agents" },
  { id: "fullstack", label: "Full Stack & React" },
  { id: "backend", label: "Python & Backend" },
  { id: "cloud", label: "Cloud & DevOps" },
  { id: "design", label: "Creative UI/UX" },
] as const;

export function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredCerts =
    activeFilter === "all"
      ? certificates
      : certificates.filter((c) => c.category === activeFilter);

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

  return (
    <section id="certificates" className="section-shell relative">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Accreditations & Badges"
          title="Industry Verified Certifications"
          lead="Verified credentials across Artificial Intelligence, Modern Full-Stack Systems, Python Backend Architecture, and Cloud Infrastructure."
        />

        {/* Credentials Highlights Bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[var(--border)] bg-[color-mix(in_oklab,var(--panel)_85%,transparent)] px-6 py-4 shadow-xl backdrop-blur-xl"
        >
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-cyan/15 text-cyan ring-1 ring-cyan/30">
              <Award className="size-5" />
            </div>
            <div>
              <p className="font-display text-sm font-semibold text-foreground">
                Official Specializations
              </p>
              <p className="text-xs text-muted-foreground">
                All credentials verified with cryptographic IDs & seals
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="size-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50" />
              {certificates.length} Verified Credentials
            </span>
            <span className="hidden sm:inline text-white/20" aria-hidden="true">•</span>
            <span className="flex items-center gap-1.5 text-cyan">
              <Sparkles className="size-3.5" aria-hidden="true" />
              AI Native &amp; Full Stack
            </span>
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-8 flex flex-wrap items-center gap-2 overflow-x-auto pb-2 no-scrollbar"
        >
          {CATEGORIES.map((cat) => {
            const count =
              cat.id === "all"
                ? certificates.length
                : certificates.filter((c) => c.category === cat.id).length;

            if (cat.id !== "all" && count === 0) return null;

            const isActive = activeFilter === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan ${
                  isActive
                    ? "bg-[var(--hero-action)] text-white shadow-sm shadow-cyan/40"
                    : "glass text-muted-foreground hover:text-foreground hover:border-cyan/40"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                    isActive ? "bg-white/20 text-white" : "bg-surface-2 text-muted-foreground"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert) => (
              <motion.article
                key={cert.id}
                layout
                variants={fadeUp}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: EASE }}
                data-cursor-hot
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[var(--border)] bg-[color-mix(in_oklab,var(--panel)_90%,transparent)] shadow-2xl backdrop-blur-xl transition-[border-color,box-shadow] duration-300 hover:border-cyan/60 hover:shadow-xl hover:shadow-cyan/20"
              >
                {/* Image Container with Hover Zoom and Click to Inspect */}
                <div
                  onClick={() => setSelectedCert(cert)}
                  className="relative aspect-[4/3] cursor-pointer overflow-hidden bg-surface-2"
                >
                  <img
                    src={cert.image}
                    alt={`${cert.title} — ${cert.issuer}`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-105"
                  />
                  {/* Subtle Gradient Veil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent opacity-75 transition-opacity duration-300 group-hover:opacity-40" aria-hidden="true" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-black/60 px-3 py-1 text-xs font-semibold text-emerald-400 backdrop-blur-md">
                      <span className="size-1.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50" />
                      Verified
                    </span>
                    <span className="flex items-center gap-1 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 text-xs text-cyan backdrop-blur-md">
                      {cert.date}
                    </span>
                  </div>

                  {/* Hover Quick Inspect Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    <span className="flex items-center gap-2 rounded-xl bg-cyan/90 px-4 py-2 text-xs font-bold text-black shadow-md shadow-cyan/50 backdrop-blur-sm transition-transform duration-200 group-hover:scale-105">
                      <Maximize2 className="size-3.5" aria-hidden="true" />
                      Inspect Certificate
                    </span>
                  </div>
                </div>

                {/* Card Information */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <span className="text-xs font-semibold text-cyan">
                      {cert.issuer}
                    </span>
                    <h3 className="mt-1.5 font-display text-lg font-bold text-foreground transition-colors group-hover:text-cyan">
                      {cert.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                      {cert.description}
                    </p>

                    {/* Skill Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {cert.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg border border-white/5 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-foreground/80"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span className="rounded-lg border border-white/5 bg-white/5 px-2 py-1 text-[10px] font-medium text-muted-foreground">
                          +{cert.skills.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="mt-6 flex items-center justify-between border-t border-[var(--border)] pt-4">
                    <button
                      type="button"
                      onClick={() => setSelectedCert(cert)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground/90 transition-colors hover:text-cyan cursor-pointer"
                    >
                      <Maximize2 className="size-3.5" />
                      Preview
                    </button>

                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-cyan hover:underline"
                      >
                        Verify Credential <ArrowUpRight className="size-3" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* High-Resolution Certificate Inspection Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Dialog Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-cyan/40 bg-background/98 shadow-2xl backdrop-blur-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[var(--border)] px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-xl bg-cyan/15 text-cyan ring-1 ring-cyan/30">
                    <ShieldCheck className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h4 className="font-display text-sm font-bold text-foreground sm:text-base">
                      {selectedCert.title}
                    </h4>
                    <p className="text-xs text-cyan">{selectedCert.issuer}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="grid size-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-muted-foreground transition-colors duration-200 hover:border-cyan/50 hover:bg-cyan/10 hover:text-white cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
                  aria-label="Close dialog"
                >
                  <X className="size-5" aria-hidden="true" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto p-6">
                {/* High Resolution Image Preview */}
                <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-black/60 shadow-2xl">
                  <img
                    src={selectedCert.image}
                    alt={`${selectedCert.title} — ${selectedCert.issuer}`}
                    className="h-auto w-full object-contain"
                  />
                </div>

                {/* Metadata & Description */}
                <div className="mt-6 grid gap-6 md:grid-cols-3">
                  <div className="md:col-span-2">
                    <h5 className="font-display text-base font-semibold text-foreground">
                      Competency Overview
                    </h5>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {selectedCert.description}
                    </p>

                    <h5 className="mt-5 font-display text-xs font-bold text-muted-foreground">
                      Skills &amp; Topics Validated
                    </h5>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {selectedCert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1.5 rounded-xl border border-cyan/20 bg-cyan/10 px-3 py-1.5 text-xs font-medium text-cyan"
                        >
                          <CheckCircle2 className="size-3 text-cyan" aria-hidden="true" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Credential Verification Box */}
                  <div className="flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-black/30 p-5 backdrop-blur-sm">
                    <div className="space-y-3">
                      <div>
                        <span className="text-[10px] text-muted-foreground">
                          Credential ID
                        </span>
                        <p className="text-xs font-semibold text-cyan">
                          {selectedCert.credentialId || "VERIFIED-RECORD"}
                        </p>
                      </div>

                      <div>
                        <span className="text-[10px] text-muted-foreground">
                          Issue Date
                        </span>
                        <p className="text-xs font-semibold text-foreground">
                          {selectedCert.date}
                        </p>
                      </div>

                      <div>
                        <span className="text-[10px] text-muted-foreground">
                          Recipient
                        </span>
                        <p className="text-xs font-semibold text-foreground">
                          Muhammad Mubashar
                        </p>
                      </div>

                      <div>
                        <span className="text-[10px] text-muted-foreground">
                          Verification Status
                        </span>
                        <p className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                          <CheckCircle2 className="size-3.5" aria-hidden="true" /> 100% Cryptographically Verified
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 pt-4 border-t border-[var(--border)] flex flex-col gap-2">
                      {selectedCert.credentialUrl && (
                        <Button variant="neon" size="sm" asChild className="w-full justify-center">
                          <a
                            href={selectedCert.credentialUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Verify Online <ExternalLink className="size-3.5" />
                          </a>
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open(selectedCert.image, "_blank")}
                        className="w-full text-xs text-muted-foreground hover:text-cyan"
                      >
                        Open Full Resolution
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
