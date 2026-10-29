import { useEffect, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  Code2,
  Terminal,
  Sparkles,
  Trophy,
  Layers,
  Award,
  HelpCircle,
  Mail,
  Volume2,
  VolumeX,
  FileText,
  ExternalLink,
  Github,
  Linkedin,
  Copy,
  Check,
  Zap,
} from "lucide-react";
import { sound } from "@/lib/sound";
import { projects } from "@/data/projects";
import { socials } from "@/data/socials";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => {
          const next = !prev;
          if (next) sound.playCommandOpen();
          return next;
        });
      }
    };

    const handleCustomOpen = () => {
      sound.playCommandOpen();
      setOpen(true);
    };

    window.addEventListener("keydown", down);
    window.addEventListener("pasha:open-command-palette", handleCustomOpen);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("pasha:open-command-palette", handleCustomOpen);
    };
  }, []);

  const handleSelect = (action: () => void) => {
    sound.playBlip(1040, 0.04);
    action();
    setOpen(false);
  };

  const jumpTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("pashabusiness804@gmail.com");
    sound.playChirp();
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleReplayIntro = () => {
    window.dispatchEvent(new CustomEvent("pasha:replay-intro"));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleToggleSound = () => {
    sound.toggle();
  };

  const handleOpenResume = () => {
    window.dispatchEvent(new CustomEvent("pasha:open-resume-modal"));
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <div className="relative overflow-hidden rounded-2xl border border-cyan/40 bg-[#060a14]/95 shadow-[0_0_50px_rgba(0,229,255,0.25)] backdrop-blur-2xl">
        {/* Top Laser Accent */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan to-transparent" />

        {/* Command Search Input */}
        <CommandInput
          placeholder="Type a command or search sections, projects, specs..."
          className="font-mono text-xs text-foreground placeholder:text-muted-foreground/60"
        />

        <CommandList className="max-h-[380px] p-2 font-mono text-xs no-scrollbar">
          <CommandEmpty className="py-6 text-center text-xs text-muted-foreground">
            No matching directives found in core database.
          </CommandEmpty>

          {/* Quick Actions */}
          <CommandGroup heading="⚡ SYSTEM DIRECTIVES">
            <CommandItem
              onSelect={() => handleSelect(handleOpenResume)}
              className="cursor-pointer hover:bg-cyan/15 hover:text-cyan"
            >
              <FileText className="mr-2 size-4 text-cyan" />
              <span>Inspect Executive Resume &amp; Credentials</span>
              <CommandShortcut className="text-cyan">/resume</CommandShortcut>
            </CommandItem>

            <CommandItem
              onSelect={() => handleSelect(handleReplayIntro)}
              className="cursor-pointer hover:bg-cyan/15 hover:text-cyan"
            >
              <Sparkles className="mr-2 size-4 text-cyan" />
              <span>Replay Cinematic Intro Ceremony</span>
              <CommandShortcut className="text-cyan">/intro</CommandShortcut>
            </CommandItem>

            <CommandItem
              onSelect={() => handleSelect(handleToggleSound)}
              className="cursor-pointer hover:bg-cyan/15 hover:text-cyan"
            >
              {sound.isEnabled() ? (
                <Volume2 className="mr-2 size-4 text-emerald-400" />
              ) : (
                <VolumeX className="mr-2 size-4 text-muted-foreground" />
              )}
              <span>Toggle Interface Audio Effects</span>
              <CommandShortcut className="text-cyan">
                {sound.isEnabled() ? "MUTE" : "UNMUTE"}
              </CommandShortcut>
            </CommandItem>

            <CommandItem
              onSelect={() => handleSelect(handleCopyEmail)}
              className="cursor-pointer hover:bg-cyan/15 hover:text-cyan"
            >
              {copiedEmail ? (
                <Check className="mr-2 size-4 text-emerald-400" />
              ) : (
                <Copy className="mr-2 size-4 text-cyan" />
              )}
              <span>Copy Direct Developer Email</span>
              <CommandShortcut className="text-cyan">pashabusiness804</CommandShortcut>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator className="my-1.5 bg-white/10" />

          {/* Section Navigation */}
          <CommandGroup heading="🧭 NAVIGATION JUMPS">
            <CommandItem
              onSelect={() => handleSelect(() => jumpTo("about"))}
              className="cursor-pointer hover:bg-cyan/15 hover:text-cyan"
            >
              <Terminal className="mr-2 size-4 text-cyan" />
              <span>About Pasha Dev &amp; Architecture Blueprint</span>
              <CommandShortcut>#about</CommandShortcut>
            </CommandItem>

            <CommandItem
              onSelect={() => handleSelect(() => jumpTo("skills"))}
              className="cursor-pointer hover:bg-cyan/15 hover:text-cyan"
            >
              <Code2 className="mr-2 size-4 text-cyan" />
              <span>Battle-Tested Tech Stack (23 Technologies)</span>
              <CommandShortcut>#skills</CommandShortcut>
            </CommandItem>

            <CommandItem
              onSelect={() => handleSelect(() => jumpTo("projects"))}
              className="cursor-pointer hover:bg-cyan/15 hover:text-cyan"
            >
              <Layers className="mr-2 size-4 text-cyan" />
              <span>Selected Products &amp; Applications</span>
              <CommandShortcut>#projects</CommandShortcut>
            </CommandItem>

            <CommandItem
              onSelect={() => handleSelect(() => jumpTo("hackathons"))}
              className="cursor-pointer hover:bg-cyan/15 hover:text-cyan"
            >
              <Trophy className="mr-2 size-4 text-amber-400" />
              <span>Global AI Hackathons (IBM Bob 2.0 Award)</span>
              <CommandShortcut>#hackathons</CommandShortcut>
            </CommandItem>

            <CommandItem
              onSelect={() => handleSelect(() => jumpTo("services"))}
              className="cursor-pointer hover:bg-cyan/15 hover:text-cyan"
            >
              <Zap className="mr-2 size-4 text-violet" />
              <span>What I Build (Autonomous AI &amp; Full-Stack)</span>
              <CommandShortcut>#services</CommandShortcut>
            </CommandItem>

            <CommandItem
              onSelect={() => handleSelect(() => jumpTo("certificates"))}
              className="cursor-pointer hover:bg-cyan/15 hover:text-cyan"
            >
              <Award className="mr-2 size-4 text-cyan" />
              <span>Industry Verified Certifications</span>
              <CommandShortcut>#certificates</CommandShortcut>
            </CommandItem>

            <CommandItem
              onSelect={() => handleSelect(() => jumpTo("faq"))}
              className="cursor-pointer hover:bg-cyan/15 hover:text-cyan"
            >
              <HelpCircle className="mr-2 size-4 text-cyan" />
              <span>Frequently Asked Questions &amp; Directives</span>
              <CommandShortcut>#faq</CommandShortcut>
            </CommandItem>

            <CommandItem
              onSelect={() => handleSelect(() => jumpTo("contact"))}
              className="cursor-pointer hover:bg-cyan/15 hover:text-cyan"
            >
              <Mail className="mr-2 size-4 text-emerald-400" />
              <span>Initiate Collaboration (Project Command Bridge)</span>
              <CommandShortcut>#contact</CommandShortcut>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator className="my-1.5 bg-white/10" />

          {/* Project Direct Access */}
          <CommandGroup heading="🚀 PRODUCTS &amp; REPOSITORIES">
            {projects.map((proj) => (
              <CommandItem
                key={proj.id}
                onSelect={() =>
                  handleSelect(() => {
                    jumpTo("projects");
                  })
                }
                className="cursor-pointer hover:bg-cyan/15 hover:text-cyan"
              >
                <div className="mr-2 size-2 rounded-full bg-cyan" />
                <span>{proj.title}</span>
                <span className="ml-2 text-[10px] text-muted-foreground">
                  — {proj.tagline}
                </span>
                <CommandShortcut>{proj.category}</CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator className="my-1.5 bg-white/10" />

          {/* Social Links */}
          <CommandGroup heading="🌐 EXTERNAL NETWORKS">
            {socials.map((s) => (
              <CommandItem
                key={s.label}
                onSelect={() =>
                  handleSelect(() => {
                    window.open(s.url, "_blank");
                  })
                }
                className="cursor-pointer hover:bg-cyan/15 hover:text-cyan"
              >
                <ExternalLink className="mr-2 size-3.5 text-muted-foreground" />
                <span>{s.label}</span>
                <span className="ml-2 text-[10px] text-cyan">{s.handle}</span>
                <CommandShortcut>OPEN</CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>

        {/* Footer Hotkey Indicator */}
        <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.02] px-4 py-2 font-mono text-[10px] text-muted-foreground">
          <span>NAVIGATION // ESC TO CLOSE</span>
          <span>PRESS ↵ TO SELECT</span>
        </div>
      </div>
    </CommandDialog>
  );
}
