import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { usePointerFine } from "@/hooks/usePointerFine";

export function Cursor() {
  const fine = usePointerFine();
  const reduced = useReducedMotion();
  const [hot, setHot] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 260, damping: 26, mass: 0.4 });
  const ry = useSpring(y, { stiffness: 260, damping: 26, mass: 0.4 });

  useEffect(() => {
    if (!fine || reduced) return;

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const target = e.target as HTMLElement | null;
      setHot(Boolean(target?.closest("a, button, [data-cursor-hot]")));
    };
    const leave = () => setVisible(false);

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerleave", leave);
    };
  }, [fine, reduced, x, y]);

  if (!fine || reduced) return null;

  return (
    <>
      {/* Ambient background glow tracking cursor */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px]"
        style={{
          x: rx,
          y: ry,
          background:
            "radial-gradient(circle, oklch(0.82 0.14 200 / 14%) 0%, oklch(0.68 0.2 300 / 9%) 42%, transparent 70%)",
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: hot ? 1.2 : 1,
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Foreground custom cursor */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-[90]">
        <motion.div
          className="absolute h-1.5 w-1.5 rounded-full bg-cyan"
          style={{ x, y, translateX: "-50%", translateY: "-50%" }}
          animate={{ opacity: visible ? 1 : 0, scale: hot ? 0.4 : 1 }}
          transition={{ duration: 0.2 }}
        />
        <motion.div
          className="absolute rounded-full border border-border-strong"
          style={{ x: rx, y: ry, translateX: "-50%", translateY: "-50%" }}
          animate={{
            width: hot ? 44 : 26,
            height: hot ? 44 : 26,
            opacity: visible ? (hot ? 0.9 : 0.5) : 0,
          }}
          transition={{ duration: 0.25 }}
        />
      </div>
    </>
  );
}
