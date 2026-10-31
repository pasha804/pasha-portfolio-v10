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
        "group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[color-mix(in_oklab,var(--panel-strong)_92%,transparent)] shadow-2xl backdrop-blur-2xl transition-[border-color,box-shadow] duration-300 hover:border-cyan/60 hover:shadow-xl hover:shadow-cyan/20",
        feature && "lg:col-span-2",
        split && "lg:col-span-1",
      )}
    >
      {/* Laser Top Shimmer */}
      <div className="pointer-events-none absolute inset-x-8 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10" aria-hidden="true" />

      {/* Cyber Corner Marks */}
      <span className="pointer-events-none absolute top-3 left-3 text-[9px] text-cyan/30 z-10" aria-hidden="true">+</span>
      <span className="pointer-events-none absolute top-3 right-3 text-[9px] text-cyan/30 z-10" aria-hidden="true">+</span>

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
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-60" aria-hidden="true" />

          {/* Project Index Badge */}
          <span className="absolute top-4 left-5 rounded-md border border-white/10 bg-black/60 px-2.5 py-1 text-xs font-semibold text-cyan backdrop-blur-md">
            0{index + 1} // SYS
          </span>

          {/* Category Chip */}
          <span className="absolute top-4 right-4 rounded-full border border-cyan/30 bg-cyan/15 px-3 py-1 text-xs font-semibold text-cyan backdrop-blur-md shadow-sm shadow-cyan/30">
            {project.category}
          </span>

          {/* Live Status indicator on image */}
          <div className="absolute bottom-4 left-5 flex items-center gap-2 rounded-full border border-emerald-500/30 bg-black/60 px-3 py-1 text-xs text-emerald-400 backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-emerald-400 motion-safe:animate-ping" />
            <span>{project.status || "Production Ready"}</span>
          </div>

          {/* Quick Inspect Button on Image */}
          {onInspect && (
            <button
              type="button"
              onClick={() => onInspect(project)}
              className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md opacity-0 transition-colors duration-200 group-hover:opacity-100 hover:border-cyan hover:text-cyan cursor-pointer shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
            >
              <Terminal className="size-3 text-cyan" aria-hidden="true" />
              <span>Inspect Blueprint</span>
            </button>
          )}
        </div>

        <div className={cn("flex flex-1 flex-col p-6 sm:p-8", feature && "lg:justify-center")}>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-cyan">
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
                  <CheckCircle2 className="size-3.5 text-cyan shrink-0 mt-0.5" aria-hidden="true" />
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
                className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-foreground/80 transition-colors group-hover:border-cyan/30 group-hover:text-cyan"
              >
                <span className="size-1 rounded-full bg-cyan/70" aria-hidden="true" />
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
                className="text-xs text-cyan hover:underline flex items-center gap-1 cursor-pointer font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
              >
                <Terminal className="size-3 text-cyan" aria-hidden="true" />
                <span>Specs &amp; Architecture</span>
              </button>
            ) : (
              <span className="text-xs text-muted-foreground font-medium">
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
                  className="flex size-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-foreground transition-colors duration-200 hover:border-white/40 hover:bg-white/10 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
                >
                  <Github className="size-4" aria-hidden="true" />
                </a>
              )}
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-cyan/40 bg-cyan/15 px-3.5 py-2 font-display text-xs font-semibold text-cyan shadow-sm shadow-cyan/25 transition-colors duration-200 hover:bg-cyan/25 hover:shadow-md hover:shadow-cyan/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
                >
                  <span>View Live</span>
                  <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </a>
              ) : (
                <span className="rounded-xl border border-white/5 bg-white/[0.02] px-3.5 py-2 text-xs text-muted-foreground/60">
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
