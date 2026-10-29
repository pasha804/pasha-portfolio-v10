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
} from "lucide-react";
import portrait from "@/assets/developer-portrait.png";
import { Button } from "@/components/ui/button";
import { useActiveSection } from "@/hooks/useActiveSection";
import { sound } from "@/lib/sound";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "hackathons", label: "Hackathons" },
  { id: "services", label: "What I Build" },
  { id: "certificates", label: "Certificates" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
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
    window.dispatchEvent(new CustomEvent("pasha:open-command-palette"));
  };

  const handleOpenResume = () => {
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
          "flex w-full max-w-7xl items-center justify-between gap-4 rounded-2xl border px-4 py-2.5 transition-all duration-300 sm:px-6 sm:py-3",
          scrolled
            ? "border-[var(--border)]/70 bg-[color-mix(in_oklab,var(--panel-strong)_90%,transparent)] shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
            : "border-[var(--border)]/40 bg-[color-mix(in_oklab,var(--panel)_80%,transparent)] shadow-lg backdrop-blur-xl"
        )}
      >
        {/* Brand */}
        <a
          href="#home"
          onClick={() => sound.playBlip(1040, 0.03)}
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="Pasha Dev Home"
        >
          <span className="relative size-10 overflow-hidden rounded-xl border border-cyan/40 bg-[var(--panel-strong)] shadow-[0_0_12px_rgba(0,229,255,0.25)] transition-transform duration-300 group-hover:scale-105">
            <img src={portrait} alt="Pasha Dev" className="h-full w-full object-cover object-top" />
          </span>
          <div className="flex flex-col">
            <strong className="font-display text-sm font-bold tracking-tight text-foreground transition-colors group-hover:text-cyan">
              Pasha Dev
            </strong>
            <small className="text-[10px] font-medium text-cyan/90 uppercase tracking-wider">
              AI Full Stack Developer
            </small>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden xl:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = currentActive === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => sound.playBlip(920 + NAV_ITEMS.indexOf(item) * 30, 0.03)}
                className={cn(
                  "relative rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-colors duration-200",
                  isActive
                    ? "text-foreground bg-white/10 shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                )}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-cyan/15 ring-1 ring-cyan/40" />
                )}
                <span className="relative">{item.label}</span>
              </a>
            );
          })}
        </div>

        {/* Medium Screen compact links */}
        <div className="hidden md:flex xl:hidden items-center gap-1">
          {NAV_ITEMS.filter((i) =>
            ["home", "about", "skills", "projects", "services", "contact"].includes(i.id)
          ).map((item) => {
            const isActive = currentActive === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => sound.playBlip(920, 0.03)}
                className={cn(
                  "relative rounded-full px-3 py-1 text-xs font-semibold transition-colors duration-200",
                  isActive
                    ? "text-cyan bg-cyan/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                )}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Action Buttons + Command Palette + Audio Toggle + Mobile Drawer */}
        <div className="flex items-center gap-2">
          {/* Cyber Command Palette Trigger */}
          <button
            type="button"
            onClick={handleOpenCommand}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-cyan/40 bg-cyan/10 px-3 py-1.5 font-mono text-[11px] font-bold text-cyan transition-all hover:bg-cyan hover:text-black cursor-pointer shadow-[0_0_15px_rgba(0,229,255,0.25)]"
            title="Open Command Palette (Ctrl+K or Cmd+K)"
          >
            <Terminal className="size-3" />
            <span>⌘K</span>
          </button>

          {/* Sound Mute/Unmute Toggle Button */}
          <button
            type="button"
            onClick={() => {
              const next = sound.toggle();
              setSoundOn(next);
            }}
            className="hidden lg:inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[11px] font-semibold text-muted-foreground transition-all hover:border-cyan/40 hover:text-cyan hover:bg-white/10 cursor-pointer backdrop-blur-md"
            title={soundOn ? "Mute interface audio" : "Enable interface audio"}
          >
            {soundOn ? <Volume2 className="size-3 text-cyan" /> : <VolumeX className="size-3 text-muted-foreground" />}
            <span>{soundOn ? "AUDIO" : "MUTED"}</span>
          </button>

          {/* Replay Cinematic Intro Button */}
          <button
            type="button"
            onClick={handleReplayIntro}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[11px] font-semibold text-muted-foreground transition-all hover:border-cyan/40 hover:text-cyan hover:bg-white/10 cursor-pointer backdrop-blur-md"
            title="Replay Cinematic Intro"
          >
            <Sparkles className="size-3 text-cyan" />
            <span>INTRO</span>
          </button>

          {/* Let's Talk CTA */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="hidden sm:inline-flex relative group"
          >
            <span className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-cyan via-violet to-cyan opacity-70 blur-sm group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-tilt" />
            <Button
              variant="neon"
              size="sm"
              asChild
              onClick={() => sound.playChirp()}
              className="relative shadow-[0_0_25px_rgba(0,229,255,0.4)] transition-all duration-300 group-hover:shadow-[0_0_35px_rgba(0,229,255,0.7)]"
            >
              <a href="#contact" className="flex items-center gap-1.5">
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
            className="absolute top-16 inset-x-4 rounded-2xl border border-[var(--border)] bg-[color-mix(in_oklab,var(--panel-strong)_95%,transparent)] p-4 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-col gap-1.5">
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
                      ? "bg-cyan/15 text-cyan font-semibold"
                      : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                  )}
                >
                  <span>{item.label}</span>
                  {currentActive === item.id && (
                    <span className="size-1.5 rounded-full bg-cyan" />
                  )}
                </a>
              ))}

              <div className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    handleOpenCommand();
                  }}
                  className="flex items-center justify-center gap-2 rounded-xl border border-cyan/40 bg-cyan/10 py-2.5 text-xs font-mono font-bold text-cyan"
                >
                  <Terminal className="size-3.5" />
                  <span>OPEN COMMAND PALETTE (⌘K)</span>
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
                  <span>VIEW CV &amp; CREDENTIALS</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    handleReplayIntro();
                  }}
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-2 text-xs font-mono text-muted-foreground"
                >
                  <Sparkles className="size-3.5 text-cyan" />
                  <span>REPLAY CINEMATIC INTRO</span>
                </button>

                <Button variant="neon" size="sm" asChild className="w-full justify-center">
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
