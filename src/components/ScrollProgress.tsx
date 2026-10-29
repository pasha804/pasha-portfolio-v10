import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const width = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      className="bg-accent-gradient fixed top-0 left-0 z-[70] h-px w-full origin-left"
      style={{ scaleX: width }}
    />
  );
}
