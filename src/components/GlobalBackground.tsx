import bgVideo from "@/assets/bg-video.mp4";
import mountains from "@/assets/neon-mountains.jpg";

export function GlobalBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-50 pointer-events-none overflow-hidden select-none"
    >
      {/* High performance background video looping seamlessly */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={mountains}
        className="absolute inset-0 h-full w-full object-cover object-center opacity-85 brightness-105 contrast-105"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Atmospheric cyber vignette overlays to guarantee crystal-clear contrast */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-[#05070D]/85" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(5,7,13,0.7)_100%)]" />
    </div>
  );
}
