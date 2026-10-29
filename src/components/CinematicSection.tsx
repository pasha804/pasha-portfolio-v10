import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface CinematicSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  fadeExit?: boolean;
}

export function CinematicSection({
  children,
  id,
  className = "",
  fadeExit = true,
}: CinematicSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the section's scroll relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.95", "end 0.05"],
  });

  // Entrance: 0.0 -> 0.25 (fade in, rise, scale up)
  // Plateau: 0.25 -> 0.75 (full opacity, scale 1)
  // Exit: 0.75 -> 1.0 (fade out, sink, subtle scale down)
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.15, 1, 1, fadeExit ? 0.25 : 1]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.96, 1, 1, fadeExit ? 0.97 : 1]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [30, 0, 0, fadeExit ? -20 : 0]
  );

  return (
    <motion.div
      ref={containerRef}
      id={id}
      style={{
        opacity,
        scale,
        y,
        transformOrigin: "center center",
      }}
      transition={{ ease: [0.16, 1, 0.3, 1] }}
      className={`will-change-transform will-change-opacity ${className}`}
    >
      {children}
    </motion.div>
  );
}
