import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ProfileImage } from "@/components/ProfileImage";
import { EASE } from "@/lib/motion";

const SEEN_KEY = "pasha-intro-seen";

export function Intro() {
  const reduced = useReducedMotion();
  const [phase, setPhase] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem(SEEN_KEY) === "1";
    if (seen || reduced) {
      setDone(true);
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    const timers = [
      window.setTimeout(() => setPhase(1), 380),
      window.setTimeout(() => setPhase(2), 900),
      window.setTimeout(() => {
        sessionStorage.setItem(SEEN_KEY, "1");
        setDone(true);
        document.body.style.overflow = "";
      }, 1750),
    ];
    return () => {
      timers.forEach(window.clearTimeout);
      document.body.style.overflow = "";
    };
  }, [reduced]);

  const skip = () => {
    sessionStorage.setItem(SEEN_KEY, "1");
    setDone(true);
    document.body.style.overflow = "";
  };

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <div
            aria-hidden
            className="absolute top-1/2 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[120px]"
            style={{ background: "var(--gradient-accent)" }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: phase >= 1 ? 1 : 0, scale: phase >= 1 ? 1 : 0.85 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="glass-strong relative size-16 rounded-full p-[3px]"
          >
            <ProfileImage className="h-full w-full rounded-full" monogramClass="text-base" eager />
          </motion.div>

          <div className="relative mt-7 text-center">
            <motion.p
              className="eyebrow"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase === 0 ? 1 : 0.35 }}
              transition={{ duration: 0.4 }}
            >
              Initializing
            </motion.p>
            <motion.h1
              className="mt-3 font-display text-3xl font-semibold sm:text-4xl"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: phase >= 1 ? 1 : 0, y: phase >= 1 ? 0 : 14 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              PASHA DEV
            </motion.h1>
            <motion.p
              className="mt-3 text-sm tracking-[0.3em] text-muted-foreground uppercase"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: phase >= 2 ? 1 : 0, y: phase >= 2 ? 0 : 10 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              AI Full Stack Developer
            </motion.p>
          </div>

          <div className="relative mt-10 h-px w-40 overflow-hidden bg-border">
            <motion.div
              className="bg-accent-gradient h-full w-full origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            />
          </div>

          <button
            onClick={skip}
            className="eyebrow absolute right-5 bottom-6 transition-colors hover:text-foreground sm:right-8"
          >
            Skip
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
