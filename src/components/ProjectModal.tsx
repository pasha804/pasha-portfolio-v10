import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Terminal,
  Zap,
  Activity,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  AlertCircle,
  Lightbulb,
} from "lucide-react";
import type { Project } from "@/data/projects";
import { Button } from "@/components/ui/button";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-6 md:p-8">
        {/* Backdrop blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-cyan/40 bg-[color-mix(in_oklab,var(--panel-strong)_95%,transparent)] shadow-[0_0_60px_rgba(0,229,255,0.25)] backdrop-blur-3xl"
        >
          {/* Top Laser Accent */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan to-transparent shadow-[0_0_12px_#00e5ff]" />

          {/* Modal Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-5 sm:px-7 py-3.5 bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <span className="flex size-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-mono text-xs font-bold tracking-[0.2em] text-cyan uppercase">
                ARCHITECTURE // {project.id.toUpperCase()}_SPECS
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="flex size-9 items-center justify-center rounded-xl bg-white/5 text-muted-foreground transition-all hover:bg-white/10 hover:text-white cursor-pointer"
              aria-label="Close modal"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Modal Content Body */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6 no-scrollbar">
            {/* Image Preview Banner */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />

              <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <span className="font-mono text-xs font-bold tracking-widest text-cyan uppercase">
                    {project.tagline}
                  </span>
                  <h2 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-white">
                    {project.title}
                  </h2>
                </div>

                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <Button variant="neon" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <span>Launch App</span>
                        <ExternalLink size={14} />
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outlineNeon" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={14} />
                        <span>Source</span>
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {/* Project Capability & Status Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div className="rounded-xl border border-white/10 bg-black/40 p-3">
                <span className="block font-mono text-[9px] text-muted-foreground uppercase">STATUS</span>
                <span className="font-mono text-xs font-bold text-emerald-400">{project.status}</span>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/40 p-3">
                <span className="block font-mono text-[9px] text-muted-foreground uppercase">CATEGORY</span>
                <span className="font-mono text-xs font-bold text-cyan">{project.category}</span>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/40 p-3">
                <span className="block font-mono text-[9px] text-muted-foreground uppercase">MY ROLE</span>
                <span className="font-mono text-xs font-bold text-white truncate block">{project.role}</span>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/40 p-3">
                <span className="block font-mono text-[9px] text-muted-foreground uppercase">INTEGRITY</span>
                <span className="font-mono text-xs font-bold text-violet">100% VERIFIED</span>
              </div>
            </div>

            {/* Description Narrative */}
            <div>
              <h3 className="font-mono text-xs font-bold tracking-widest text-muted-foreground uppercase">
                EXECUTIVE SUMMARY
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/90 sm:text-base">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-5">
                <h4 className="flex items-center gap-2 font-mono text-xs font-bold tracking-wider text-rose-400 uppercase">
                  <AlertCircle className="size-3.5 text-rose-400 shrink-0" />
                  THE ENGINEERING PROBLEM
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {project.problem}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-5">
                <h4 className="flex items-center gap-2 font-mono text-xs font-bold tracking-wider text-cyan uppercase">
                  <Lightbulb className="size-3.5 text-cyan shrink-0" />
                  ARCHITECTED SOLUTION
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Engineering Highlights */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <h4 className="flex items-center gap-2 font-mono text-xs font-bold tracking-wider text-cyan uppercase">
                <Terminal className="size-3.5 text-cyan" />
                SYSTEM HIGHLIGHTS &amp; DELIVERABLES
              </h4>
              <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-foreground/85">
                    <CheckCircle2 className="size-4 text-cyan shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architecture Overview */}
            <div className="rounded-2xl border border-cyan/20 bg-cyan/[0.03] p-4 sm:p-5">
              <h4 className="flex items-center gap-2 font-mono text-xs font-bold tracking-wider text-cyan uppercase">
                <Layers className="size-3.5 text-cyan" />
                SYSTEM ARCHITECTURE &amp; PIPELINES
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-foreground/90 sm:text-sm">
                {project.architecture}
              </p>
              {project.challenges && (
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground border-t border-cyan/15 pt-2.5">
                  <span className="font-mono text-cyan font-semibold">Technical Challenge:</span>{" "}
                  {project.challenges}
                </p>
              )}
            </div>

            {/* Technology Stack Badges */}
            <div>
              <h4 className="font-mono text-xs font-bold tracking-widest text-muted-foreground uppercase">
                TECHNOLOGY BLUEPRINT
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="glass flex items-center gap-1.5 rounded-xl border border-cyan/30 bg-cyan/10 px-3.5 py-1.5 font-mono text-xs font-medium text-cyan"
                  >
                    <span className="size-1.5 rounded-full bg-cyan" />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
