import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import {
  ArrowUpRight,
  Code2,
  Send,
  Sparkles,
  Zap,
  Activity,
  Layers,
  Cpu,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/developer-portrait.png";
import { OrbitingTechBadges } from "@/components/OrbitingTechBadges";
import { sound } from "@/lib/sound";

export function Hero({ introFinished = true }: { introFinished?: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 180, damping: 18 });
  const mouseYSpring = useSpring(y, { stiffness: 180, damping: 18 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["18deg", "-18deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-18deg", "18deg"]);

  const glareBg = useTransform(
    [mouseXSpring, mouseYSpring],
    ([currX, currY]) => {
      const px = ((currX as number) + 0.5) * 100;
      const py = ((currY as number) + 0.5) * 100;
      return `radial-gradient(circle at ${px}% ${py}%, rgba(0,229,255,0.35) 0%, rgba(189,52,254,0.1) 40%, transparent 70%)`;
    }
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div id="home" className="portfolio-shell pt-20 sm:pt-24 overflow-hidden">
      {/* Hero Content Grid */}
      <section className="hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Availability Radar Badge */}
          <div className="availability group relative flex items-center gap-2.5 overflow-hidden rounded-full border border-emerald-500/30 bg-black/60 px-4 py-1.5 backdrop-blur-xl shadow-[0_0_20px_rgba(52,211,153,0.15)]">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
            </span>
            <span className="font-mono text-xs font-semibold text-emerald-400 tracking-wider">
              Available for select projects
            </span>
          </div>

          <p className="intro">
            Hi, I’m <span>Muhammad Mubashar</span>
          </p>

          <h1>
            AI Full Stack <em>Developer</em>
          </h1>

          <p className="summary">
            Building intelligent digital products with modern
            <br className="desktop-break" /> frontend, Python backends, and autonomous AI agents.
          </p>

          {/* Role Strip */}
          <div className="role-strip">
            <Code2 size={18} className="text-cyan" />
            <strong>Full Stack Developer</strong>
            <i />
            <span>AI Engineer</span>
            <i />
            <span>Python Developer</span>
            <i />
            <span>Creative Developer</span>
          </div>

          {/* Animated Hero CTAs */}
          <div className="hero-actions flex flex-wrap items-center gap-3 sm:gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="relative group"
            >
              {/* Pulsing neon energy aura */}
              <span className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan via-violet to-cyan opacity-75 blur-md group-hover:opacity-100 transition duration-500 animate-pulse" />
              <Button
                variant="neon"
                size="lg"
                asChild
                onClick={() => sound.playChirp()}
                className="relative shadow-[0_0_30px_rgba(0,229,255,0.4)]"
              >
                <a href="#projects" className="flex items-center gap-2 font-display tracking-wider">
                  <span>View My Work</span>
                  <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="relative group"
            >
              <Button
                variant="outlineNeon"
                size="lg"
                asChild
                onClick={() => sound.playBlip(1040, 0.04)}
                className="relative overflow-hidden border-cyan/40 bg-black/40 backdrop-blur-xl shadow-[0_0_20px_rgba(0,229,255,0.15)] transition-all duration-300 group-hover:border-cyan group-hover:shadow-[0_0_30px_rgba(0,229,255,0.35)]"
              >
                <a href="#contact" className="flex items-center gap-2 font-display tracking-wider">
                  <Send size={16} className="text-cyan transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  <span>Let&apos;s Connect</span>
                </a>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="relative group"
            >
              <Button
                variant="outlineNeon"
                size="lg"
                type="button"
                onClick={() => {
                  sound.playCommandOpen();
                  window.dispatchEvent(new CustomEvent("pasha:open-resume-modal"));
                }}
                className="relative overflow-hidden border-white/20 bg-white/5 backdrop-blur-xl shadow-[0_0_15px_rgba(255,255,255,0.08)] transition-all duration-300 hover:border-cyan/60 hover:text-cyan hover:shadow-[0_0_25px_rgba(0,229,255,0.25)] cursor-pointer"
              >
                <FileText size={16} className="text-cyan" />
                <span>View Specs / CV</span>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Developer Technology Showcase Stage */}
        <motion.div
          className="portrait-stage"
          aria-label="Developer technology showcase"
          style={{ perspective: 1200 }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Animated Neon Rotating Orbit Rings behind portrait */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="pointer-events-none absolute left-[18%] top-[1%] h-[88%] w-[58%] rounded-[48%_48%_30px_30px] border-2 border-dashed border-cyan/40"
            style={{ filter: "drop-shadow(0 0 16px rgba(0,229,255,0.35))" }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            className="pointer-events-none absolute left-[14%] top-[-2%] h-[94%] w-[66%] rounded-[50%_50%_36px_36px] border border-violet/35"
            style={{ filter: "drop-shadow(0 0 20px rgba(189,52,254,0.3))" }}
          />

          {/* Interactive 3D Card Tilt Frame with Floating Animation */}
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
              zIndex: 15,
            }}
            animate={{
              y: [-8, 8, -8],
            }}
            transition={{
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
            className="portrait-frame relative overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_55px_rgba(0,229,255,0.45)]"
          >
            {/* Dynamic Specular Sheen Reflection */}
            <motion.div
              className="pointer-events-none absolute inset-0 z-10 opacity-70 transition-opacity duration-300"
              style={{ background: glareBg }}
            />

            <img
              src={portrait}
              width={1024}
              height={1280}
              alt="Muhammad Mubashar, AI full stack developer"
              className="relative z-0"
            />
          </motion.div>

          {/* 3D Tilted Orbiting Tech Badges (Revolving Horizontal-Vertical) */}
          <OrbitingTechBadges />

          <div className="cursor-note">
            <span className="cursor-shape">◆</span>
            <small>Interactive 3D Tilt</small>
          </div>

          <div className="hover-chip">
            <Sparkles size={13} /> Interactive 3D Tilt
          </div>

          <div className="nameplate">
            <span>
              <strong>Muhammad Mubashar</strong>
              <small>AI Full Stack Developer</small>
            </span>
            <em>Pasha Dev</em>
          </div>
        </motion.div>
      </section>

      {/* Hero Metrics Strip with Real-Time Aesthetics */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="metrics"
      >
        <div>
          <Code2 />
          <span>
            <strong>10+ Apps</strong>
            <small>Delivered &amp; Live</small>
          </span>
        </div>
        <div>
          <Activity />
          <span>
            <strong>99.9%</strong>
            <small>Production Uptime</small>
          </span>
        </div>
        <div>
          <Zap />
          <span>
            <strong>&lt; 15ms</strong>
            <small>Streaming Latency</small>
          </span>
        </div>
        <div>
          <Sparkles />
          <span>
            <strong>100%</strong>
            <small>Craft &amp; Excellence</small>
          </span>
        </div>
      </motion.div>
    </div>
  );
}
