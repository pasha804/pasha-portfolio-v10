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
  Github,
  Terminal,
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
          {/* Eyebrow Positioning Statement */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="font-mono text-[11px] font-bold tracking-[0.22em] text-cyan uppercase">
              INDEPENDENT DEVELOPER · AI SYSTEMS · DIGITAL PRODUCTS
            </span>
          </div>

          {/* Availability Radar Badge */}
          <div className="availability group relative mt-3 inline-flex items-center gap-2.5 overflow-hidden rounded-full border border-emerald-500/30 bg-black/60 px-4 py-1.5 backdrop-blur-xl shadow-[0_0_20px_rgba(52,211,153,0.15)]">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
            </span>
            <span className="font-mono text-xs font-semibold text-emerald-400 tracking-wider">
              Available for select projects &amp; engineering contracts
            </span>
          </div>

          <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            I Build Intelligent <br />
            <span className="bg-gradient-to-r from-cyan via-white to-violet bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,229,255,0.4)]">
              Digital Experiences.
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            I&apos;m <span className="text-foreground font-semibold">Muhammad Mubashar</span>, known as{" "}
            <span className="text-cyan font-semibold">Pasha Dev</span>. I build full-stack applications,
            AI-powered systems, developer tools, and cinematic web experiences that combine thoughtful
            engineering with distinctive design.
          </p>

          {/* Role Strip */}
          <div className="role-strip mt-5">
            <Code2 size={18} className="text-cyan" />
            <strong>AI Full Stack Developer</strong>
            <i />
            <span>Systems Architect</span>
            <i />
            <span>Python &amp; FastAPI</span>
            <i />
            <span>Creative Engineering</span>
          </div>

          {/* Animated Hero CTAs */}
          <div className="hero-actions mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
            <motion.div
              whileHover={{ scale: 1.04 }}
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
                className="relative shadow-[0_0_30px_rgba(0,229,255,0.4)] cursor-pointer"
              >
                <a href="#projects" className="flex items-center gap-2 font-display tracking-wider">
                  <span>Explore My Work</span>
                  <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="relative group"
            >
              <Button
                variant="outlineNeon"
                size="lg"
                asChild
                onClick={() => sound.playBlip(1040, 0.04)}
                className="relative overflow-hidden border-cyan/40 bg-black/40 backdrop-blur-xl shadow-[0_0_20px_rgba(0,229,255,0.15)] transition-all duration-300 group-hover:border-cyan group-hover:shadow-[0_0_30px_rgba(0,229,255,0.35)] cursor-pointer"
              >
                <a href="#contact" className="flex items-center gap-2 font-display tracking-wider">
                  <Send size={16} className="text-cyan transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  <span>Let&apos;s Build Something</span>
                </a>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.04 }}
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

            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/pasha804"
              target="_blank"
              rel="noreferrer"
              aria-label="View GitHub Profile"
              className="flex size-11 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-foreground transition-all hover:border-cyan/50 hover:bg-white/10 hover:text-cyan hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]"
            >
              <Github size={20} />
            </motion.a>
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

      {/* Hero Metrics Strip: Truthful, Descriptive Capability Indicators */}
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
            <strong>10+ Products</strong>
            <small>Shipped &amp; Documented</small>
          </span>
        </div>
        <div>
          <Cpu />
          <span>
            <strong>Full-Stack + AI</strong>
            <small>End-to-End Architecture</small>
          </span>
        </div>
        <div>
          <Zap />
          <span>
            <strong>FastAPI &amp; Python</strong>
            <small>High-Throughput Backends</small>
          </span>
        </div>
        <div>
          <Layers />
          <span>
            <strong>React &amp; Modern Web</strong>
            <small>60fps Cinematic UX</small>
          </span>
        </div>
      </motion.div>
    </div>
  );
}
