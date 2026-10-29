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
      <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-xl"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-cyan/40 bg-[color-mix(in_oklab,var(--panel-strong)_95%,transparent)] shadow-[0_0_60px_rgba(0,229,255,0.25)] backdrop-blur-3xl"
        >
          {/* Top Laser Accent */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan to-transparent" />

          {/* Modal Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <span className="flex size-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-mono text-xs font-bold tracking-[0.2em] text-cyan uppercase">
                ARCHITECTURE // BLUEPRINT_INSPECT
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="flex size-9 items-center justify-center rounded-xl bg-white/5 text-muted-foreground transition-all hover:bg-white/10 hover:text-white cursor-pointer"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Modal Content Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 no-scrollbar">
            {/* Image Preview Banner */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

              <div className="absolute bottom-4 left-5 right-5 flex flex-wrap items-end justify-between gap-4">
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

            {/* Description Narrative */}
            <div>
              <h3 className="font-mono text-xs font-bold tracking-widest text-muted-foreground uppercase">
                PROJECT OVERVIEW &amp; SPECIFICATION
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/90 sm:text-base">
                {project.description}
              </p>
            </div>

            {/* Key Engineering Highlights */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <h4 className="flex items-center gap-2 font-mono text-xs font-bold tracking-wider text-cyan uppercase">
                <Terminal className="size-3.5 text-cyan" />
                SYSTEM HIGHLIGHTS &amp; ACHIEVEMENTS
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

            {/* Technology Stack Badges */}
            <div>
              <h4 className="font-mono text-xs font-bold tracking-widest text-muted-foreground uppercase">
                TECHNOLOGY BLUEPRINT
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => (
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

            {/* Live Metrics Telemetry */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="rounded-xl border border-white/10 bg-black/40 p-3 text-center">
                <span className="block font-mono text-[10px] text-muted-foreground">FRAME RATE</span>
                <span className="font-display text-lg font-bold text-cyan">60 FPS</span>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/40 p-3 text-center">
                <span className="block font-mono text-[10px] text-muted-foreground">STATUS</span>
                <span className="font-display text-lg font-bold text-emerald-400">ONLINE</span>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/40 p-3 text-center">
                <span className="block font-mono text-[10px] text-muted-foreground">CATEGORY</span>
                <span className="font-display text-lg font-bold text-white">{project.category}</span>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/40 p-3 text-center">
                <span className="block font-mono text-[10px] text-muted-foreground">SECURITY</span>
                <span className="font-display text-lg font-bold text-violet">ENCRYPTED</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
