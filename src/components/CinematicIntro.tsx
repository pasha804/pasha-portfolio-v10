import { useEffect, useState, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Volume2, VolumeX, Sparkles, Terminal, Cpu, ArrowRight } from "lucide-react";
import portrait from "@/assets/developer-portrait.png";

const BOOT_LOGS = [
  "SYS://INITIALIZING_KERNEL [OK]",
  "CORE://NEURAL_AGENT_PIPELINE [MOUNTED]",
  "GPU://HARDWARE_ACCELERATION_60FPS [ONLINE]",
  "RUNTIME://REACT_19 + FASTAPI_CORE [SYNCED]",
  "SECURITY://PROTOCOL_256_ACTIVE [VERIFIED]",
  "IDENTITY://MUHAMMAD_MUBASHAR [PASHA_DEV]",
  "STATUS://ALL_SYSTEMS_OPERATIONAL [READY]",
];

// High-tech sound effects generator using Web Audio API (zero external assets)
function createAudioEngine() {
  let ctx: AudioContext | null = null;

  const getCtx = () => {
    if (!ctx && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        ctx = new AudioCtx();
      }
    }
    if (ctx && ctx.state === "suspended") {
      ctx.resume().catch(() => {});
    }
    return ctx;
  };

  return {
    playBlip(freq = 880, duration = 0.04) {
      try {
        const audio = getCtx();
        if (!audio) return;
        const osc = audio.createOscillator();
        const gain = audio.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, audio.currentTime);
        gain.gain.setValueAtTime(0.04, audio.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + duration);
        osc.connect(gain);
        gain.connect(audio.destination);
        osc.start();
        osc.stop(audio.currentTime + duration);
      } catch {
        // Audio error silently ignored
      }
    },
    playChord() {
      try {
        const audio = getCtx();
        if (!audio) return;
        [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
          const osc = audio.createOscillator();
          const gain = audio.createGain();
          osc.type = "triangle";
          osc.frequency.setValueAtTime(freq, audio.currentTime + i * 0.06);
          gain.gain.setValueAtTime(0.03, audio.currentTime + i * 0.06);
          gain.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + i * 0.06 + 0.35);
          osc.connect(gain);
          gain.connect(audio.destination);
          osc.start(audio.currentTime + i * 0.06);
          osc.stop(audio.currentTime + i * 0.06 + 0.35);
        });
      } catch {}
    },
    playWhoosh() {
      try {
        const audio = getCtx();
        if (!audio) return;
        const bufferSize = audio.sampleRate * 0.4;
        const buffer = audio.createBuffer(1, bufferSize, audio.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = Math.random() * 2 - 1;
        }
        const noise = audio.createBufferSource();
        noise.buffer = buffer;
        const filter = audio.createBiquadFilter();
        filter.type = "bandpass";
        filter.frequency.setValueAtTime(300, audio.currentTime);
        filter.frequency.exponentialRampToValueAtTime(3500, audio.currentTime + 0.4);
        const gain = audio.createGain();
        gain.gain.setValueAtTime(0.08, audio.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + 0.4);
        noise.connect(filter);
        filter.connect(gain);
        gain.connect(audio.destination);
        noise.start();
      } catch {}
    },
  };
}

export function CinematicIntro({
  onComplete,
  forceShow = false,
}: {
  onComplete?: () => void;
  forceShow?: boolean;
}) {
  const [active, setActive] = useState(true);
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [phase, setPhase] = useState<"boot" | "gauge" | "reveal" | "exit">("boot");
  const audioRef = useRef<ReturnType<typeof createAudioEngine> | null>(null);

  useEffect(() => {
    audioRef.current = createAudioEngine();
  }, []);

  // Listen for custom event to re-trigger intro anytime
  useEffect(() => {
    const handleReplay = () => {
      setProgress(0);
      setLogIndex(0);
      setPhase("boot");
      setActive(true);
      document.body.style.overflow = "hidden";
    };
    window.addEventListener("pasha:replay-intro", handleReplay);
    return () => window.removeEventListener("pasha:replay-intro", handleReplay);
  }, []);

  // Lock scroll while intro is visible
  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  // Main Progression Sequence
  useEffect(() => {
    if (!active) return;

    let progressTimer: NodeJS.Timeout;
    let logTimer: NodeJS.Timeout;

    // Log streamer
    logTimer = setInterval(() => {
      setLogIndex((prev) => {
        if (prev < BOOT_LOGS.length - 1) {
          if (soundEnabled && audioRef.current) {
            audioRef.current.playBlip(700 + prev * 80, 0.03);
          }
          return prev + 1;
        }
        clearInterval(logTimer);
        return prev;
      });
    }, 280);

    // Percentage Counter Progression
    const start = performance.now();
    const duration = 2400; // 2.4s cinematic loading

    const updateProgress = () => {
      const elapsed = performance.now() - start;
      const pct = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(pct);

      if (pct > 30 && pct < 75) {
        setPhase("gauge");
      } else if (pct >= 75 && pct < 100) {
        setPhase("reveal");
      }

      if (pct < 100) {
        progressTimer = setTimeout(updateProgress, 25);
      } else {
        // Complete!
        setPhase("reveal");
        if (soundEnabled && audioRef.current) {
          audioRef.current.playChord();
        }

        // Auto transition after a dramatic pause
        setTimeout(() => {
          handleEnter();
        }, 800);
      }
    };

    progressTimer = setTimeout(updateProgress, 60);

    return () => {
      clearTimeout(progressTimer);
      clearInterval(logTimer);
    };
  }, [active, soundEnabled]);

  const handleEnter = useCallback(() => {
    if (phase === "exit") return;
    setPhase("exit");
    if (soundEnabled && audioRef.current) {
      audioRef.current.playWhoosh();
    }
    setTimeout(() => {
      setActive(false);
      onComplete?.();
    }, 750);
  }, [phase, soundEnabled, onComplete]);

  if (!active) return null;

  return (
    <AnimatePresence>
      <motion.aside
        aria-label="Cinematic Portfolio Intro"
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#030509] select-none"
        initial={{ opacity: 1 }}
        animate={
          phase === "exit"
            ? {
                opacity: 0,
                scale: 1.08,
                filter: "blur(20px)",
                transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
              }
            : { opacity: 1 }
        }
        exit={{ opacity: 0 }}
      >
        {/* Holographic Cyber Grid Background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,229,255,0.15) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(0,229,255,0.15) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />

        {/* Ambient Pulsing Radial Flares */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[650px] rounded-full opacity-30 blur-[130px] animate-pulse"
          style={{
            background:
              "radial-gradient(circle, rgba(0,229,255,0.6) 0%, rgba(189,52,254,0.4) 50%, transparent 70%)",
          }}
        />

        {/* Scanline Sweep Bar */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 h-2 bg-gradient-to-r from-transparent via-cyan/40 to-transparent blur-sm"
          style={{
            animation: "scanline-sweep 4s linear infinite",
          }}
        />

        {/* Top Control Strip */}
        <header className="absolute top-5 inset-x-6 flex items-center justify-between z-20">
          <div className="flex items-center gap-2.5 font-mono text-[11px] text-cyan/90">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-cyan" />
            </span>
            <span className="tracking-[0.2em] font-semibold uppercase">
              PASHA_DEV // ARCHITECTURE_V6.0
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[11px] text-muted-foreground transition-all hover:border-cyan/40 hover:text-cyan cursor-pointer backdrop-blur-md"
              title={soundEnabled ? "Mute audio" : "Enable audio"}
            >
              {soundEnabled ? <Volume2 className="size-3.5 text-cyan" /> : <VolumeX className="size-3.5" />}
              <span>{soundEnabled ? "AUDIO ON" : "MUTED"}</span>
            </button>

            <button
              type="button"
              onClick={handleEnter}
              className="flex items-center gap-1 rounded-full border border-cyan/30 bg-cyan/15 px-3.5 py-1.5 font-mono text-[11px] font-bold tracking-wider text-cyan transition-all hover:bg-cyan hover:text-black cursor-pointer shadow-[0_0_15px_rgba(0,229,255,0.3)] backdrop-blur-md"
            >
              <span>SKIP</span>
              <ArrowRight className="size-3" />
            </button>
          </div>
        </header>

        {/* Center Stage: Futuristic HUD & Typography */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl">
          {/* Avatar Holographic Pod */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-6"
          >
            {/* Outer Spinning Reticle */}
            <div
              className="absolute -inset-4 rounded-full border border-dashed border-cyan/40 animate-[spin_12s_linear_infinite]"
              style={{ filter: "drop-shadow(0 0 8px rgba(0,229,255,0.5))" }}
            />
            <div className="absolute -inset-2 rounded-full border border-violet/40 animate-[spin_8s_linear_infinite_reverse]" />

            <div className="relative size-20 sm:size-24 rounded-full p-1 bg-gradient-to-br from-cyan via-violet to-cyan shadow-[0_0_35px_rgba(0,229,255,0.5)]">
              <img
                src={portrait}
                alt="Muhammad Mubashar"
                className="h-full w-full rounded-full object-cover object-top border-2 border-black"
              />
            </div>

            {/* Glowing Status Dot */}
            <span className="absolute bottom-1 right-1 size-3.5 rounded-full bg-emerald-400 border-2 border-black shadow-[0_0_8px_#34d399]" />
          </motion.div>

          {/* Letter Stagger Title */}
          <div className="relative overflow-hidden py-1">
            <motion.h1
              className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white"
              style={{
                textShadow:
                  "0 0 30px rgba(0,229,255,0.6), 0 0 60px rgba(189,52,254,0.4)",
              }}
            >
              {"PASHA DEV".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + index * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={char === " " ? "inline-block w-4" : "inline-block"}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Subtitle & Role Directives */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-3 font-mono text-xs sm:text-sm font-semibold tracking-[0.28em] text-cyan uppercase"
          >
            AI Full Stack Developer // Architecting Intelligent Systems
          </motion.p>

          {/* Cyber Circular Progress Gauge & Number */}
          <div className="mt-8 relative flex items-center justify-center">
            {/* SVG Progress Ring */}
            <svg className="size-36 sm:size-40 -rotate-90">
              <circle
                cx="50%"
                cy="50%"
                r="62"
                className="stroke-white/10 fill-none"
                strokeWidth="4"
              />
              <circle
                cx="50%"
                cy="50%"
                r="62"
                className="stroke-cyan fill-none transition-all duration-150 ease-out"
                strokeWidth="4"
                strokeDasharray={390}
                strokeDashoffset={390 - (390 * progress) / 100}
                strokeLinecap="round"
                style={{
                  filter: "drop-shadow(0 0 10px rgba(0,229,255,0.8))",
                }}
              />
            </svg>

            {/* Centered Digital Counter */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-mono text-3xl sm:text-4xl font-extrabold tracking-tight text-white tabular-nums drop-shadow-[0_0_15px_rgba(0,229,255,0.7)]">
                {String(progress).padStart(2, "0")}
                <span className="text-lg text-cyan">%</span>
              </span>
              <span className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest mt-0.5">
                {progress === 100 ? "INITIALIZED" : "LOADING CORE"}
              </span>
            </div>
          </div>

          {/* Audio Equalizer Frequency Bars */}
          <div className="mt-6 flex items-center gap-1.5 h-6">
            {[40, 75, 100, 60, 90, 45, 80, 65, 95, 50, 85, 30].map((h, i) => (
              <motion.div
                key={i}
                className="w-1 rounded-full bg-gradient-to-t from-cyan to-violet"
                animate={{
                  height: [
                    `${Math.max(15, (h * progress) / 100)}%`,
                    `${Math.min(100, (h * 1.3 * (progress + 20)) / 100)}%`,
                    `${Math.max(20, (h * 0.8 * progress) / 100)}%`,
                  ],
                }}
                transition={{
                  duration: 0.6 + (i % 4) * 0.15,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  boxShadow: "0 0 8px rgba(0,229,255,0.6)",
                }}
              />
            ))}
          </div>

          {/* Live System Telemetry Boot Logs */}
          <div className="mt-6 h-7 overflow-hidden font-mono text-[11px] text-muted-foreground">
            <motion.div
              key={logIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-2 text-cyan/90 font-medium"
            >
              <Terminal className="size-3 text-cyan shrink-0" />
              <span>{BOOT_LOGS[logIndex]}</span>
            </motion.div>
          </div>

          {/* Enter Studio CTA Button (Unlocks at 100%) */}
          <div className="mt-7 min-h-[46px]">
            {progress >= 100 ? (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleEnter}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-cyan via-blue-500 to-violet px-7 py-3 font-display text-sm font-bold tracking-wider text-white shadow-[0_0_35px_rgba(0,229,255,0.5)] cursor-pointer"
              >
                <Sparkles className="size-4 animate-spin" />
                <span>ENTER STUDIO</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            ) : (
              <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground/80">
                <Cpu className="size-3.5 text-cyan animate-pulse" />
                <span>SYNCHRONIZING GRAPHICS PIPELINE...</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Specs Ribbon */}
        <footer className="absolute bottom-5 inset-x-6 flex flex-wrap items-center justify-between gap-3 text-[10px] font-mono text-muted-foreground/60 border-t border-white/5 pt-3 z-20">
          <div className="flex items-center gap-4">
            <span>REACT 19</span>
            <span>•</span>
            <span>PYTHON &amp; FASTAPI</span>
            <span>•</span>
            <span>AUTONOMOUS AGENTS</span>
          </div>
          <div>
            <span>LOCATION: PAKISTAN // REMOTE WORLDWIDE</span>
          </div>
        </footer>
      </motion.aside>
    </AnimatePresence>
  );
}
