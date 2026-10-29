import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

const PHRASES = [
  "Full Stack Developer",
  "AI Engineer",
  "Python Developer",
  "Frontend Engineer",
  "Creative Developer",
  "Problem Solver",
];

export function Typewriter() {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced) {
      setText(PHRASES[0] ?? "");
      return;
    }
    const phrase = PHRASES[index] ?? "";
    let delay = deleting ? 38 : 62;

    if (!deleting && text === phrase) delay = 1500;
    if (deleting && text === "") delay = 260;

    const t = window.setTimeout(() => {
      if (!deleting && text === phrase) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % PHRASES.length);
      } else {
        setText(deleting ? phrase.slice(0, text.length - 1) : phrase.slice(0, text.length + 1));
      }
    }, delay);

    return () => window.clearTimeout(t);
  }, [text, deleting, index, reduced]);

  return (
    <p className="font-display text-base text-muted-foreground sm:text-lg" aria-live="polite">
      <span className="text-cyan">{"// "}</span>
      <span className="text-foreground">{text}</span>
      <span
        aria-hidden
        className="ml-0.5 inline-block h-[1.05em] w-[2px] translate-y-[0.15em] bg-cyan align-middle motion-safe:animate-pulse"
      />
    </p>
  );
}
