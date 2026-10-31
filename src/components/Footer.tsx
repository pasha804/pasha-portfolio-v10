import { navSections, socials } from "@/data/socials";
import portrait from "@/assets/developer-portrait.png";

export function Footer() {
  const navCol1 = navSections.slice(0, 4);
  const navCol2 = navSections.slice(4);

  return (
    <footer className="relative border-t border-white/10 px-5 py-14 md:px-10 bg-black/40 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        {/* Main Footer Flex Container: Left Brand + Right 3 Columns */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Left: Brand Identity & Logo (Unchanged position) */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <span className="relative size-11 overflow-hidden rounded-xl border border-cyan/40 bg-[var(--panel-strong)] shadow-[0_0_15px_rgba(0,229,255,0.25)]">
                <img src={portrait} alt="Pasha Dev" className="h-full w-full object-cover object-top" />
              </span>
              <div>
                <p className="font-display text-base font-bold text-foreground">Pasha Dev</p>
                <p className="font-mono text-xs text-cyan">AI Full Stack Developer</p>
              </div>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Muhammad Mubashar — engineering intelligent web applications, Python backends, and autonomous AI systems with cinematic precision.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-400">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for Select Engagements</span>
            </div>
          </div>

          {/* Right: 3 Columns Shifted to Right Side */}
          <div className="flex flex-wrap items-start justify-start gap-10 sm:gap-14 lg:justify-end lg:ml-auto">
            {/* Column 1: Core Navigation */}
            <div>
              <p className="font-mono text-[10px] font-bold tracking-[0.2em] text-cyan uppercase">
                Explore
              </p>
              <ul className="mt-4 space-y-2.5">
                {navCol1.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="text-xs font-medium text-muted-foreground transition-colors hover:text-cyan"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Secondary Navigation */}
            <div>
              <p className="font-mono text-[10px] font-bold tracking-[0.2em] text-cyan uppercase">
                Architecture
              </p>
              <ul className="mt-4 space-y-2.5">
                {navCol2.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="text-xs font-medium text-muted-foreground transition-colors hover:text-cyan"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Social Channels */}
            <div>
              <p className="font-mono text-[10px] font-bold tracking-[0.2em] text-cyan uppercase">
                Connect
              </p>
              <ul className="mt-4 space-y-2.5">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-medium text-muted-foreground transition-colors hover:text-cyan"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="h-px bg-white/10" />

        {/* Bottom copyright line */}
        <div className="flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between font-mono text-[11px]">
          <p>© 2026 Pasha Dev. Engineered with React, TypeScript &amp; Framer Motion.</p>
          <p className="text-cyan/80">Built with precision + curiosity.</p>
        </div>
      </div>
    </footer>
  );
}
