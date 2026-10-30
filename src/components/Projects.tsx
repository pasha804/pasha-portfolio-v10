import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { projectFilters, projectStats, projects, type Project } from "@/data/projects";
import { EASE, fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Filter = (typeof projectFilters)[number];

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const duration = 1600; // ms
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(ease * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

function StatCard({ stat, index }: { stat: (typeof projectStats)[number]; index: number }) {
  const renderValue = () => {
    if (stat.value === "10+") {
      return <AnimatedCounter target={10} suffix="+" />;
    }
    if (stat.value === "5+") {
      return <AnimatedCounter target={5} suffix="+" />;
    }
    if (stat.value === "100%") {
      return <AnimatedCounter target={100} suffix="%" />;
    }
    return (
      <span className="bg-gradient-to-r from-cyan via-white to-violet bg-clip-text text-transparent">
        {stat.value}
      </span>
    );
  };

  return (
    <motion.div
      variants={fadeUp}
      className="group relative flex flex-col items-center justify-center overflow-hidden px-6 py-9 text-center transition-all duration-500 hover:bg-white/[0.035]"
    >
      {/* Top accent light bar on hover */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Cyber index badge */}
      <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground/60 uppercase transition-colors duration-300 group-hover:text-cyan/90">
        0{index + 1} // METRIC
      </span>

      {/* Big Animated Value */}
      <div className="text-gradient mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
        {renderValue()}
      </div>

      {/* Label */}
      <div className="mt-3 flex items-center justify-center gap-2">
        <span className="size-1.5 rounded-full bg-cyan/50 transition-all duration-300 group-hover:scale-125 group-hover:bg-cyan group-hover:shadow-[0_0_8px_rgba(0,229,255,0.8)]" />
        <span className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase transition-colors duration-300 group-hover:text-foreground">
          {stat.label}
        </span>
      </div>

      {/* Subtle corner light highlight */}
      <div className="pointer-events-none absolute -bottom-10 size-24 rounded-full bg-cyan/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>("ALL");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const visible = filter === "ALL" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-shell relative">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Projects"
            title="Selected Work"
            lead="Products, platforms and experiments — built end to end."
          />

          <div className="flex flex-wrap gap-2">
            {projectFilters.map((f) => {
              const active = filter === f;
              const count =
                f === "ALL"
                  ? projects.length
                  : projects.filter((p) => p.category === f).length;

              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  aria-pressed={active}
                  className={cn(
                    "relative inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 font-display text-[11px] font-semibold tracking-[0.16em] uppercase transition-all duration-300 cursor-pointer",
                    active
                      ? "text-white shadow-[0_0_20px_rgba(0,229,255,0.4)]"
                      : "border border-border text-muted-foreground hover:border-border-strong hover:text-foreground hover:bg-white/5",
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="project-filter-pill"
                      className="absolute inset-0 rounded-full bg-[var(--hero-action)] -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span>{f}</span>
                  <span
                    className={cn(
                      "rounded-full px-1.5 py-0.2 font-mono text-[9px]",
                      active ? "bg-white/20 text-white" : "bg-white/5 text-muted-foreground"
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className="mt-14 grid gap-6 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <ProjectCard
                key={p.id}
                project={p}
                index={projects.indexOf(p)}
                onInspect={(proj) => setSelectedProject(proj)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Architecture Blueprint Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        {/* Hard Look Cyber Glass Stats Strip */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mt-16 overflow-hidden rounded-3xl border border-[var(--border)] bg-[color-mix(in_oklab,var(--panel-strong)_88%,transparent)] shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
        >
          {/* Cyber crosshairs on corners */}
          <div className="pointer-events-none absolute top-3 left-3 font-mono text-[10px] text-cyan/40 select-none">
            +
          </div>
          <div className="pointer-events-none absolute top-3 right-3 font-mono text-[10px] text-cyan/40 select-none">
            +
          </div>
          <div className="pointer-events-none absolute bottom-3 left-3 font-mono text-[10px] text-cyan/40 select-none">
            +
          </div>
          <div className="pointer-events-none absolute bottom-3 right-3 font-mono text-[10px] text-cyan/40 select-none">
            +
          </div>

          <div className="grid grid-cols-1 divide-y divide-[var(--border)] sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
            {projectStats.map((s, idx) => (
              <StatCard key={s.label} stat={s} index={idx} />
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: EASE }}
          className="mt-6 text-center text-xs text-muted-foreground"
        >
          Click &ldquo;Inspect Blueprint&rdquo; on any project to explore the deep architecture and live specs.
        </motion.p>
      </div>
    </section>
  );
}
