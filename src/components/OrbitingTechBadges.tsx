import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import {
  ReactIcon,
  PythonIcon,
  FastAPIIcon,
  TypeScriptIcon,
  PostgreSQLIcon,
  OpenAIIcon,
} from "@/components/TechIcons";

interface TechBadge {
  id: string;
  name: string;
  icon: React.ReactNode;
  category: string;
  color: string;
  glow: string;
}

const TECH_BADGES: TechBadge[] = [
  {
    id: "react",
    name: "React 19",
    icon: <ReactIcon size={22} />,
    category: "FRONTEND",
    color: "#00e5ff",
    glow: "rgba(0, 229, 255, 0.6)",
  },
  {
    id: "python",
    name: "Python",
    icon: <PythonIcon size={22} />,
    category: "CORE",
    color: "#38bdf8",
    glow: "rgba(56, 189, 248, 0.6)",
  },
  {
    id: "fastapi",
    name: "FastAPI",
    icon: <FastAPIIcon size={20} />,
    category: "BACKEND",
    color: "#059669",
    glow: "rgba(5, 150, 105, 0.6)",
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: <TypeScriptIcon size={20} />,
    category: "TYPED",
    color: "#3b82f6",
    glow: "rgba(59, 130, 246, 0.6)",
  },
  {
    id: "postgres",
    name: "PostgreSQL",
    icon: <PostgreSQLIcon size={22} />,
    category: "DATA",
    color: "#818cf8",
    glow: "rgba(129, 140, 248, 0.6)",
  },
  {
    id: "ai",
    name: "AI Agents",
    icon: <OpenAIIcon size={20} />,
    category: "INTELLIGENCE",
    color: "#bd34fe",
    glow: "rgba(189, 52, 254, 0.6)",
  },
];

export function OrbitingTechBadges() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [angle, setAngle] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredBadge, setHoveredBadge] = useState<string | null>(null);
  const [dimensions, setDimensions] = useState({ rx: 220, ry: 135 });

  // Dynamically compute orbital radii based on container width
  useEffect(() => {
    const updateDimensions = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      if (width < 450) {
        setDimensions({ rx: 145, ry: 95 });
      } else if (width < 640) {
        setDimensions({ rx: 180, ry: 115 });
      } else {
        setDimensions({ rx: 225, ry: 140 });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // 60FPS continuous 3D orbital animation loop
  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();

    const loop = (currentTime: number) => {
      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      if (!isPaused) {
        // Orbit speed: 1 full 360 degree rotation every 22 seconds
        setAngle((prev) => (prev + (delta * Math.PI * 2) / 22) % (Math.PI * 2));
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isPaused]);

  // Tilt parameters for diagonal horizontal-vertical orbit
  const TILT_ANGLE = -0.32; // ~ -18.3 degrees in radians
  const cosTilt = Math.cos(TILT_ANGLE);
  const sinTilt = Math.sin(TILT_ANGLE);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-visible"
      style={{ perspective: 1200 }}
    >
      {/* 3D Tilted Orbital Track Lines — SVG Ellipse Behind & In Front */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#bd34fe" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#00e5ff" stopOpacity="0.1" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Tilted elliptical guide ring around center (50%, 50%) */}
        <g transform={`translate(${containerRef.current ? containerRef.current.clientWidth * 0.5 : 250}, ${containerRef.current ? containerRef.current.clientHeight * 0.5 : 280}) rotate(-18)`}>
          <ellipse
            cx="0"
            cy="0"
            rx={dimensions.rx}
            ry={dimensions.ry}
            fill="none"
            stroke="url(#orbitGrad)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            filter="url(#glow)"
            className="opacity-50"
          />
          {/* Secondary faint outer resonant ring */}
          <ellipse
            cx="0"
            cy="0"
            rx={dimensions.rx + 15}
            ry={dimensions.ry + 10}
            fill="none"
            stroke="rgba(189,52,254,0.2)"
            strokeWidth="1"
            strokeDasharray="2 8"
          />
        </g>
      </svg>

      {/* Orbiting Badges */}
      {TECH_BADGES.map((badge, idx) => {
        // Base theta offset for 6 items evenly spaced
        const badgeAngle = (angle + (idx * Math.PI * 2) / TECH_BADGES.length) % (Math.PI * 2);

        // Parametric coordinates on untilted ellipse
        const u = dimensions.rx * Math.cos(badgeAngle);
        const v = dimensions.ry * Math.sin(badgeAngle);

        // Apply 2D rotation for diagonal tilt (horizontal-vertical)
        const x = u * cosTilt - v * sinTilt;
        const y = u * sinTilt + v * cosTilt;

        // Depth coordinate Z based on sin(badgeAngle)
        // sin(badgeAngle) > 0 is FRONT (passes in front of portrait card)
        // sin(badgeAngle) < 0 is BACK (passes behind portrait card)
        const depth = Math.sin(badgeAngle);
        const isFront = depth >= 0;

        // Depth-driven visual attributes
        const zIndex = isFront ? 30 : 5;
        const scale = 0.92 + depth * 0.16; // 0.76 behind up to 1.08 in front
        const opacity = isFront ? 1 : 0.58 + (depth + 1) * 0.2; // 0.58 to 0.78 behind
        const blur = isFront ? 0 : Math.abs(depth) * 1.2;

        return (
          <div
            key={badge.id}
            onMouseEnter={() => {
              setIsPaused(true);
              setHoveredBadge(badge.id);
            }}
            onMouseLeave={() => {
              setIsPaused(false);
              setHoveredBadge(null);
            }}
            className="pointer-events-auto absolute transition-transform duration-75 ease-out"
            style={{
              left: "50%",
              top: "50%",
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${scale})`,
              zIndex: hoveredBadge === badge.id ? 40 : zIndex,
              opacity,
              filter: `blur(${blur}px) drop-shadow(0 0 ${isFront ? 14 : 4}px ${badge.glow})`,
            }}
          >
            <motion.div
              whileHover={{
                scale: 1.18,
                filter: `drop-shadow(0 0 25px ${badge.color})`,
              }}
              className="group relative flex items-center gap-2.5 rounded-xl border border-white/15 bg-card/85 px-3 py-2 shadow-xl backdrop-blur-xl transition-[border-color,background-color,transform] duration-300 hover:border-cyan hover:bg-black/90 cursor-pointer select-none"
              style={{
                borderColor: hoveredBadge === badge.id ? badge.color : undefined,
              }}
            >
              {/* Pulsing beacon dot on front items */}
              {isFront && (
                <span
                  className="absolute -top-1 -right-1 size-2 rounded-full motion-safe:animate-ping"
                  style={{ backgroundColor: badge.color }}
                />
              )}

              {/* Icon Container */}
              <div
                className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110"
                style={{
                  color: badge.color,
                }}
              >
                {badge.icon}
              </div>

              {/* Badge Text */}
              <div className="flex flex-col leading-tight pr-1">
                <span className="font-display text-xs font-bold text-foreground transition-colors group-hover:text-cyan">
                  {badge.name}
                </span>
                <span
                  className="font-mono text-[9px] font-semibold opacity-75"
                  style={{ color: badge.color }}
                >
                  {badge.category}
                </span>
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
