"use client";

import { m } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const SKILL_CATEGORIES = [
  {
    title: "Programming Languages",
    skills: ["Python", "C++", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    title: "Core CS",
    skills: ["DSA", "OOP", "DBMS", "Operating Systems", "Software Engineering"],
  },
  {
    title: "AI & ML",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Transformers",
      "LLMs",
      "RAG",
      "Prompt Engineering",
      "Multimodal AI",
      "Computer Vision",
      "Adversarial ML",
      "Agentic AI",
    ],
  },
  {
    title: "Frameworks",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "LangChain",
      "FastAPI",
      "Flask",
      "Streamlit",
      "OpenCV",
    ],
  },
  {
    title: "Systems & Tools",
    skills: [
      "Git",
      "GitHub",
      "Linux",
      "Docker",
      "AWS",
      "ChromaDB",
      "Playwright",
      "Crawl4AI",
      "n8n",
      "MCP",
    ],
  },
  {
    title: "Areas of Interest",
    skills: [
      "AI Systems",
      "Backend Engineering",
      "Scalable ML Systems",
      "AI Agents",
      "Distributed Systems",
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding border-t border-[rgba(255,255,255,0.05)]">
      <div className="container-custom">
        <m.div
          className="mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <m.h2
            variants={staggerItem}
            className="text-2xl font-semibold text-[#ededed] tracking-tight"
          >
            Skills & Expertise
          </m.h2>
        </m.div>

        <m.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {SKILL_CATEGORIES.map((category, idx) => (
            <m.div key={category.title} variants={staggerItem}>
              <h3 className="text-sm font-medium text-[#ededed] mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs text-[#a1a1aa] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] px-3 py-1.5 rounded-md hover:text-[#ededed] hover:border-[rgba(255,255,255,0.1)] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
