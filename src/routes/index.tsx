import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { GlobalBackground } from "@/components/GlobalBackground";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Cursor } from "@/components/Cursor";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TechStack } from "@/components/TechStack";
import { Projects } from "@/components/Projects";
import { Hackathons } from "@/components/Hackathons";
import { Services } from "@/components/Services";
import { Certificates } from "@/components/Certificates";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { CinematicSection } from "@/components/CinematicSection";
import { CinematicIntro } from "@/components/CinematicIntro";
import { CommandPalette } from "@/components/CommandPalette";
import { AICopilot } from "@/components/AICopilot";
import { ResumeModal } from "@/components/ResumeModal";

const TITLE = "Pasha Dev — AI Full Stack Developer | Portfolio v10";
const DESCRIPTION =
  "Muhammad Mubashar (Pasha Dev) is an AI Full Stack Developer building intelligent web applications with React, TypeScript, Python, FastAPI and interactive web experiences.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "theme-color", content: "#05070D" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Muhammad Mubashar",
          alternateName: "Pasha Dev",
          jobTitle: "AI Full Stack Developer",
          url: "https://pasha-portfolio-v10.vercel.app/",
          sameAs: [
            "https://github.com/pasha804",
            "https://www.linkedin.com/in/pasha-dev/",
            "https://www.tiktok.com/@pasha_dev_",
          ],
          knowsAbout: [
            "React",
            "TypeScript",
            "Python",
            "FastAPI",
            "PostgreSQL",
            "AI integrations",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <>
      <CinematicIntro onComplete={() => setIntroFinished(true)} />
      <GlobalBackground />
      <ScrollProgress />
      <Cursor />
      <Navbar />
      <Hero introFinished={introFinished} />
      <main>
        <CinematicSection id="about">
          <About />
        </CinematicSection>

        <CinematicSection id="skills">
          <TechStack />
        </CinematicSection>

        <CinematicSection id="projects">
          <Projects />
        </CinematicSection>

        <CinematicSection id="hackathons">
          <Hackathons />
        </CinematicSection>

        <CinematicSection id="services">
          <Services />
        </CinematicSection>

        <CinematicSection id="certificates">
          <Certificates />
        </CinematicSection>

        <CinematicSection id="faq">
          <FAQ />
        </CinematicSection>

        <CinematicSection id="contact" fadeExit={false}>
          <Contact />
        </CinematicSection>
      </main>
      <Footer />
      <BackToTop />

      {/* Cyberpunk V10 Interactive Systems */}
      <CommandPalette />
      <AICopilot />
      <ResumeModal />
    </>
  );
}
