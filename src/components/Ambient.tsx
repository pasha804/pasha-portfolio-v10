import { motion, useReducedMotion } from "motion/react";
import GhostFibers from "@/components/GhostFibers";

// Floating digital sparks
const SPARKS = Array.from({ length: 36 }, (_, i) => {
  const x = ((i * 37 + 13) % 96) + 2;
  const y = ((i * 53 + 19) % 94) + 3;
  const size = 1.5 + (i % 4) * 0.9;
  const driftX = ((i % 5) - 2) * 22;
  const driftY = -28 - (i % 5) * 14;
  const isCyan = i % 3 !== 0;
  return {
    id: `spark-${i}`,
    left: x,
    top: y,
    size,
    driftX,
    driftY,
    colorClass: isCyan ? "bg-cyan text-cyan" : "bg-violet text-violet",
    delay: (i % 11) * 0.5,
    duration: 6.5 + (i % 6) * 1.6,
  };
});

// Twinkling background micro-stars
const STARS = Array.from({ length: 24 }, (_, i) => {
  const x = ((i * 43 + 29) % 96) + 2;
  const y = ((i * 67 + 11) % 94) + 3;
  const isCyan = i % 2 === 0;
  return {
    id: `star-${i}`,
    left: x,
    top: y,
    size: 1 + (i % 3) * 0.6,
    colorClass: isCyan ? "bg-cyan" : "bg-violet",
    delay: (i % 8) * 0.7,
    duration: 3 + (i % 5) * 1.2,
  };
});

// Shooting stars / cyber data packets
const SHOOTING_STARS = [
  { id: 1, top: "8%", left: "15%", delay: "0s", duration: "6.5s" },
  { id: 2, top: "26%", left: "55%", delay: "3.8s", duration: "7.5s" },
  { id: 3, top: "12%", left: "75%", delay: "8.2s", duration: "7s" },
  { id: 4, top: "42%", left: "10%", delay: "12s", duration: "8s" },
];

export function Ambient() {
  const reduced = useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none">
      {/* 1. WebGL GhostFibers Living Background Canvas */}
      {!reduced && (
        <div className="absolute inset-0 opacity-85">
          <GhostFibers
            lineColor="#0c1836"
            glowColor="#00e5ff"
            speed={0.18}
            scale={2.2}
            rotation={15}
            rotationSpeed={0.2}
            layers={4}
            waveAmplitude={0.016}
            waveFrequency={3}
            waveSpeed={0.14}
            layerSpeed={0.07}
            twist={0.1}
            twistFrequency={4.5}
            twistSpeed={0.9}
            lineFrequency={4.5}
            lineSpacing={2}
            lineSharpness={18}
            glowFalloff={8.5}
            glowIntensity={1.9}
            brightness={2.2}
            blueBoost={1.35}
            vignette={0.75}
            grain={0.03}
            dpr={1}
            className="h-full w-full"
          />
        </div>
      )}

      {/* 2. Soft Cyber Grid Veil Overlay */}
      <div className="grid-veil absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />

      {/* 3. Cyber Shooting Stars / Data Streaks */}
      {!reduced &&
        SHOOTING_STARS.map((star) => (
          <div
            key={star.id}
            className="shooting-star"
            style={{
              top: star.top,
              left: star.left,
              animation: `shootingStarAnim ${star.duration} ease-in-out infinite`,
              animationDelay: star.delay,
            }}
          />
        ))}

      {/* 4. Twinkling Background Micro-Stars */}
      {!reduced &&
        STARS.map((s) => (
          <motion.span
            key={s.id}
            className={`absolute rounded-full ${s.colorClass}`}
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: s.size,
              height: s.size,
              boxShadow: "0 0 6px currentColor",
            }}
            animate={{
              opacity: [0.15, 0.9, 0.15],
              scale: [0.8, 1.4, 0.8],
            }}
            transition={{
              duration: s.duration,
              delay: s.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

      {/* 5. Drifting Glowing Sparks */}
      {!reduced &&
        SPARKS.map((p) => (
          <motion.span
            key={p.id}
            className={`absolute rounded-full ${p.colorClass}`}
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
              boxShadow: "0 0 10px currentColor",
            }}
            animate={{
              opacity: [0.15, 0.85, 0.15],
              x: [0, p.driftX, 0],
              y: [0, p.driftY, 0],
              scale: [1, 1.35, 1],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

      {/* 6. Deepening Vignette for High Content Contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_30%,var(--color-background)_92%)]" />
    </div>
  );
}
