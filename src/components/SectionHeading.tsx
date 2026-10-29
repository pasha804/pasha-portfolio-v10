import { motion } from "motion/react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl text-left"
      }
    >
      <motion.div variants={fadeUp} className="flex items-center gap-3">
        {align === "left" && <span className="bg-accent-gradient h-px w-8" />}
        <span className="eyebrow">{eyebrow}</span>
      </motion.div>
      <motion.h2
        variants={fadeUp}
        className="mt-4 text-3xl font-semibold sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>
      {lead && (
        <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-muted-foreground">
          {lead}
        </motion.p>
      )}
    </motion.div>
  );
}
