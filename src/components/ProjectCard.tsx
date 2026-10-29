import { motion } from "motion/react";
import { ArrowUpRight, Github, CheckCircle2, Globe, ExternalLink, Sparkles, Terminal } from "lucide-react";
import type { Project } from "@/data/projects";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  index,
  onInspect,
}: {
  project: Project;
  index: number;
  onInspect?: (p: Project) => void;
}) {
  const feature = project.layout === "feature";
  const split = project.layout === "split";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 34 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.6, ease: EASE }}
      data-cursor-hot
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[color-mix(in_oklab,var(--panel-strong)_92%,transparent)] shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:border-cyan/60 hover:shadow-[0_0_45px_rgba(0,229,255,0.25)]",
        feature && "lg:col-span-2",
        split && "lg:col-span-1",
      )}
    >
      {/* Laser Top Shimmer */}
      <div className="pointer-events-none absolute inset-x-8 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10" />

      {/* Cyber Corner Marks */}
      <span className="pointer-events-none absolute top-3 left-3 font-mono text-[9px] text-cyan/30 z-10">+</span>
      <span className="pointer-events-none absolute top-3 right-3 font-mono text-[9px] text-cyan/30 z-10">+</span>

      <div className={cn("flex flex-col", feature ? "lg:flex-row" : "")}>
        <div
          className={cn(
            "relative overflow-hidden",
            feature ? "lg:w-[54%]" : "",
            "aspect-[16/10]",
          )}
        >
          <img
            src={project.image}
            alt={`${project.title} — ${project.tagline}`}
            width={1280}
            height={800}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-60" />

          {/* Project Index Badge */}
          <span className="absolute top-4 left-5 rounded-md border border-white/10 bg-black/60 px-2.5 py-1 font-mono text-[10px] font-bold tracking-[0.2em] text-cyan backdrop-blur-md">
            0{index + 1} // SYS
          </span>

          {/* Category Chip */}
          <span className="absolute top-4 right-4 rounded-full border border-cyan/30 bg-cyan/15 px-3 py-1 font-mono text-[10px] font-semibold tracking-wider text-cyan uppercase backdrop-blur-md shadow-[0_0_12px_rgba(0,229,255,0.3)]">
            {project.category}
          </span>

          {/* Live Status indicator on image */}
          <div className="absolute bottom-4 left-5 flex items-center gap-2 rounded-full border border-emerald-500/30 bg-black/60 px-3 py-1 text-[10px] font-mono text-emerald-400 backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>{project.status || "PRODUCTION READY"}</span>
          </div>

          {/* Quick Inspect Button on Image */}
          {onInspect && (
            <button
              type="button"
              onClick={() => onInspect(project)}
              className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/70 px-3 py-1 text-[10px] font-mono font-semibold text-white backdrop-blur-md opacity-0 transition-all duration-300 group-hover:opacity-100 hover:border-cyan hover:text-cyan cursor-pointer shadow-lg"
            >
              <Terminal className="size-3 text-cyan" />
              <span>INSPECT BLUEPRINT</span>
            </button>
          )}
        </div>

        <div className={cn("flex flex-1 flex-col p-6 sm:p-8", feature && "lg:justify-center")}>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] tracking-widest text-cyan uppercase font-semibold">
              {project.tagline}
            </span>
          </div>

          <h3
            className={cn(
              "mt-2.5 font-display font-bold tracking-tight text-foreground transition-colors group-hover:text-cyan",
              feature ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl",
            )}
          >
            {project.title}
          </h3>

          <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          {feature && (
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-xs text-foreground/85 font-medium">
                  <CheckCircle2 className="size-3.5 text-cyan shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Tech Stack Pills */}
          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-foreground/80 transition-colors group-hover:border-cyan/30 group-hover:text-cyan"
              >
                <span className="size-1 rounded-full bg-cyan/70" />
                {t}
              </span>
            ))}
          </div>

          {/* Bottom Actions Strip */}
          <div className="mt-7 flex items-center justify-between gap-3 border-t border-white/5 pt-5">
            {onInspect ? (
              <button
                type="button"
                onClick={() => onInspect(project)}
                className="font-mono text-[10px] text-cyan hover:underline flex items-center gap-1 cursor-pointer font-semibold"
              >
                <Terminal className="size-3 text-cyan" />
                <span>SPECS &amp; ARCHITECTURE</span>
              </button>
            ) : (
              <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                {project.status}
              </span>
            )}

            <div className="flex items-center gap-2.5">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} on GitHub`}
                  className="flex size-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-foreground transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                >
                  <Github className="size-4" />
                </a>
              )}
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-cyan/40 bg-cyan/15 px-3.5 py-2 font-display text-xs font-semibold text-cyan shadow-[0_0_15px_rgba(0,229,255,0.25)] transition-all duration-300 hover:bg-cyan/25 hover:shadow-[0_0_25px_rgba(0,229,255,0.45)]"
                >
                  <span>View Live</span>
                  <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ) : (
                <span className="rounded-xl border border-white/5 bg-white/[0.02] px-3.5 py-2 font-mono text-[11px] text-muted-foreground/60">
                  Link Coming Soon
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
