import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Menu,
  X,
  ArrowUpRight,
  Sparkles,
  Volume2,
  VolumeX,
  Terminal,
  FileText,
  Layers,
  Code2,
} from "lucide-react";
import portrait from "@/assets/developer-portrait.png";
import { Button } from "@/components/ui/button";
import { useActiveSection } from "@/hooks/useActiveSection";
import { sound } from "@/lib/sound";
import { cn } from "@/lib/utils";

// Streamlined top navigation: clean, focused, aesthetic
const NAV_ITEMS = [
  { id: "home", label: "Home", badge: "01" },
  { id: "skills", label: "Skills", badge: "02" },
  { id: "hackathons", label: "Hackathons", badge: "03" },
  { id: "contact", label: "Contact", badge: "04" },
] as const;

const SECTION_IDS = NAV_ITEMS.map((item) => item.id);

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const lastScrollY = useRef(0);
  const activeSection = useActiveSection(SECTION_IDS);
  const currentActive = activeSection || "home";

  useEffect(() => {
    setSoundOn(sound.isEnabled());
    const handleSoundToggleEvent = (e: CustomEvent<boolean>) => {
      setSoundOn(e.detail);
    };
    window.addEventListener("pasha:sound-toggled" as any, handleSoundToggleEvent);
    return () => window.removeEventListener("pasha:sound-toggled" as any, handleSoundToggleEvent);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 30);

      if (currentY < 100) {
        setVisible(true);
      } else if (currentY < lastScrollY.current - 6) {
        // Scrolling UP -> Reveal
        setVisible(true);
      } else if (currentY > lastScrollY.current + 12) {
        // Scrolling DOWN -> Hide
        setVisible(false);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleReplayIntro = () => {
    sound.playChirp();
    window.dispatchEvent(new CustomEvent("pasha:replay-intro"));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenCommand = () => {
    sound.playCommandOpen();
    window.dispatchEvent(new CustomEvent("pasha:open-command-palette"));
  };

  const handleOpenResume = () => {
    sound.playClick();
    window.dispatchEvent(new CustomEvent("pasha:open-resume-modal"));
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[100] flex justify-center px-4 pt-3 transition-all duration-300 sm:px-8",
        visible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0 pointer-events-none"
      )}
    >
      <nav
        aria-label="Main Navigation"
        className={cn(
          "relative flex w-full max-w-6xl items-center justify-between gap-4 rounded-2xl border px-4 py-2 transition-all duration-300 sm:px-6 sm:py-2.5",
          scrolled
            ? "border-cyan/30 bg-black/85 shadow-[0_12px_45px_rgba(0,0,0,0.85)] shadow-cyan/10 backdrop-blur-2xl"
            : "border-white/10 bg-black/60 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl"
        )}
      >
        {/* Subtle Ambient Top Laser Light */}
        <div className="pointer-events-none absolute inset-x-12 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan/60 to-transparent" />

        {/* Brand Lockup with Glowing Portrait */}
        <a
          href="#home"
          onClick={() => sound.playBlip(1040, 0.03)}
          className="flex items-center gap-3 group focus:outline-none select-none"
          aria-label="Pasha Dev Home"
        >
          <div className="relative">
            <span className="relative block size-10 overflow-hidden rounded-xl border border-cyan/40 bg-[var(--panel-strong)] shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-transform duration-300 group-hover:scale-105 group-hover:border-cyan">
              <img src={portrait} alt="Pasha Dev" className="h-full w-full object-cover object-top" />
            </span>
            <span className="absolute -bottom-0.5 -right-0.5 flex size-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            </span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <strong className="font-display text-sm font-bold tracking-tight text-foreground transition-colors group-hover:text-cyan">
                Pasha Dev
              </strong>
              <span className="hidden sm:inline-block font-mono text-[9px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-1.5 py-0.2 rounded">
                LIVE
              </span>
            </div>
            <small className="text-[10px] font-semibold text-cyan/90 uppercase tracking-wider">
              AI Full Stack Developer
            </small>
          </div>
        </a>

        {/* Center Navigation Capsule */}
        <div className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 backdrop-blur-xl shadow-inner">
          {NAV_ITEMS.map((item) => {
            const isActive = currentActive === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => sound.playBlip(920 + NAV_ITEMS.indexOf(item) * 40, 0.03)}
                className={cn(
                  "relative flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-all duration-300",
                  isActive
                    ? "text-cyan bg-cyan/15 shadow-[0_0_15px_rgba(0,229,255,0.25)] border border-cyan/40"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                )}
              >
                <span className="font-mono text-[9px] opacity-60">{item.badge}</span>
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Cyber Command Palette Trigger */}
          <button
            type="button"
            onClick={handleOpenCommand}
            className="inline-flex items-center gap-1.5 rounded-full border border-cyan/40 bg-cyan/10 px-3 py-1.5 font-mono text-[11px] font-bold text-cyan transition-all duration-300 hover:bg-cyan hover:text-black cursor-pointer shadow-[0_0_15px_rgba(0,229,255,0.25)] hover:shadow-[0_0_25px_rgba(0,229,255,0.5)]"
            title="Open Cyber Command Palette (Ctrl+K or Cmd+K)"
          >
            <Terminal className="size-3.5" />
            <span>⌘K</span>
          </button>

          {/* Sound FX Audio Visualizer Toggle */}
          <button
            type="button"
            onClick={() => {
              const next = sound.toggle();
              setSoundOn(next);
            }}
            className="hidden lg:inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[11px] font-semibold text-muted-foreground transition-all duration-300 hover:border-cyan/40 hover:text-cyan hover:bg-white/10 cursor-pointer backdrop-blur-md"
            title={soundOn ? "Mute synthesized audio FX" : "Enable synthesized audio FX"}
          >
            {soundOn ? (
              <>
                <Volume2 className="size-3.5 text-cyan" />
                <span className="flex items-center gap-0.5">
                  <span className="inline-block w-0.5 h-2.5 bg-cyan animate-pulse" />
                  <span className="inline-block w-0.5 h-4 bg-cyan animate-pulse [animation-delay:150ms]" />
                  <span className="inline-block w-0.5 h-2 bg-cyan animate-pulse [animation-delay:300ms]" />
                </span>
                <span className="text-cyan text-[10px]">FX ON</span>
              </>
            ) : (
              <>
                <VolumeX className="size-3.5 text-muted-foreground" />
                <span className="text-[10px]">FX OFF</span>
              </>
            )}
          </button>

          {/* Replay Cinematic Intro Trigger */}
          <button
            type="button"
            onClick={handleReplayIntro}
            className="hidden xl:inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[11px] font-semibold text-muted-foreground transition-all duration-300 hover:border-cyan/40 hover:text-cyan hover:bg-white/10 cursor-pointer backdrop-blur-md"
            title="Replay Cinematic Intro"
          >
            <Sparkles className="size-3 text-cyan" />
            <span>INTRO</span>
          </button>

          {/* Glowing Let's Talk CTA */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="relative group inline-flex"
          >
            <span className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-cyan via-violet to-cyan opacity-75 blur-sm group-hover:opacity-100 transition duration-500 animate-pulse" />
            <Button
              variant="neon"
              size="sm"
              asChild
              onClick={() => sound.playChirp()}
              className="relative shadow-[0_0_25px_rgba(0,229,255,0.4)] transition-all duration-300 group-hover:shadow-[0_0_35px_rgba(0,229,255,0.7)] px-4"
            >
              <a href="#contact" className="flex items-center gap-1.5 font-display tracking-wider">
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="flex size-9 items-center justify-center rounded-xl border border-[var(--border)] bg-white/5 text-foreground hover:bg-white/10 md:hidden cursor-pointer"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => {
              sound.playBlip();
              setOpen(!open);
            }}
          >
            {open ? <X className="size-5 text-cyan" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 inset-x-4 rounded-2xl border border-cyan/30 bg-black/95 p-5 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-col gap-2">
              <div className="font-mono text-[10px] text-cyan font-bold tracking-widest uppercase mb-1">
                // NAVIGATION
              </div>

              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => {
                    sound.playBlip();
                    setOpen(false);
                  }}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-colors",
                    currentActive === item.id
                      ? "bg-cyan/15 text-cyan font-semibold border border-cyan/30"
                      : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                  )}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs opacity-50">{item.badge}</span>
                    <span>{item.label}</span>
                  </div>
                  {currentActive === item.id && (
                    <span className="size-2 rounded-full bg-cyan shadow-[0_0_8px_#00e5ff]" />
                  )}
                </a>
              ))}

              {/* Quick links to full catalog & about */}
              <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-white/10">
                <a
                  href="#projects"
                  onClick={() => {
                    sound.playBlip();
                    setOpen(false);
                  }}
                  className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-mono text-muted-foreground hover:text-cyan hover:border-cyan/40"
                >
                  <Layers className="size-3 text-cyan" />
                  <span>Projects</span>
                </a>
                <a
                  href="#about"
                  onClick={() => {
                    sound.playBlip();
                    setOpen(false);
                  }}
                  className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-mono text-muted-foreground hover:text-cyan hover:border-cyan/40"
                >
                  <Code2 className="size-3 text-cyan" />
                  <span>About Bio</span>
                </a>
              </div>

              <div className="mt-2 pt-3 border-t border-white/10 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    handleOpenCommand();
                  }}
                  className="flex items-center justify-center gap-2 rounded-xl border border-cyan/40 bg-cyan/10 py-2.5 text-xs font-mono font-bold text-cyan"
                >
                  <Terminal className="size-3.5" />
                  <span>COMMAND PALETTE (⌘K)</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    handleOpenResume();
                  }}
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-2 text-xs font-mono text-foreground"
                >
                  <FileText className="size-3.5 text-cyan" />
                  <span>VIEW CV &amp; SPECIFICATIONS</span>
                </button>

                <Button variant="neon" size="sm" asChild className="w-full justify-center mt-1">
                  <a
                    href="#contact"
                    onClick={() => {
                      sound.playChirp();
                      setOpen(false);
                    }}
                  >
                    <span>Let&apos;s Talk</span>
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
