"use client";

import { m } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Particles } from "@/components/ui/Particles";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { PositionsSection } from "@/components/sections/PositionsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { pageTransition } from "@/lib/animations";

export default function Home() {
  return (
    <m.div
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="bg-black min-h-screen text-[#ededed] font-sans selection:bg-neutral-800 selection:text-white"
    >
      {/* Interactive Universe Particles */}
      <Particles />

      {/* Ambient Interactive Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-grid opacity-30" />
      
      <div className="relative z-10">
        <Navbar />
        <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <AchievementsSection />
        <PositionsSection />
        <ContactSection />
      </main>
      <Footer />
      </div>
    </m.div>
  );
}
