"use client";

import { m } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

export function AboutSection() {
  return (
    <section id="about" className="section-padding border-t border-[rgba(255,255,255,0.05)]">
      <div className="container-custom">
        <m.div
          className="max-w-3xl"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <m.h2
            variants={staggerItem}
            className="text-2xl font-semibold text-[#ededed] mb-8 tracking-tight"
          >
            About
          </m.h2>

          <m.div variants={staggerItem} className="space-y-6 text-[#a1a1aa] leading-relaxed text-base">
            <p>
              I am a student pursuing my B.Tech in Data Science and Artificial Intelligence, actively aiming for roles in AI/ML, Generative AI, and Data Science. I am a hardworking individual who is constantly exploring new technologies and pushing myself to learn. My core passion lies in working on real-world projects and engineering intelligent systems that can scale and positively impact people's lives.
            </p>
            <p>
              Beyond writing code, I thrive in collaborative environments. I love working in teams, having successfully delivered many group projects, and I naturally gravitate toward leading and managing initiatives to ensure a project's success. When I am away from the keyboard, you can find me expressing my creativity through dancing and painting art, or staying active through sports.
            </p>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
