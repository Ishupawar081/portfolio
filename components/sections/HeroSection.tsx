"use client";

import { m } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { ArrowDown, FileText, Code2, Mail, Phone, ExternalLink } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-20"
    >
      <div className="container-custom relative z-10">
        <m.div
          className="max-w-3xl flex flex-col items-start text-left"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Header Info */}
          <m.div variants={staggerItem} className="mb-6 space-y-2">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#ededed]">
              Vaishnavi Pawar
            </h1>
            <p className="text-lg md:text-xl text-[#a1a1aa] font-medium">
              B.Tech in Data Science and Artificial Intelligence
            </p>
            <p className="text-base text-[#71717a]">
              Indian Institute of Technology Bhilai
            </p>
          </m.div>

          {/* Tagline */}
          <m.p
            variants={staggerItem}
            className="text-base md:text-lg text-[#a1a1aa] leading-relaxed max-w-2xl mb-10"
          >
            Building scalable AI systems, multimodal applications, intelligent
            automation workflows, and production-ready machine learning systems.
          </m.p>

          {/* Contact Details inline */}
          <m.div variants={staggerItem} className="flex flex-wrap items-center gap-4 mb-10 text-sm text-[#71717a]">
            <a href="mailto:vaishnavip@iitbhilai.ac.in" className="flex items-center gap-2 hover:text-[#ededed] transition-colors">
              <Mail size={14} /> vaishnavip@iitbhilai.ac.in
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="tel:+918830724178" className="flex items-center gap-2 hover:text-[#ededed] transition-colors">
              <Phone size={14} /> +91 8830724178
            </a>
          </m.div>

          {/* Action Buttons */}
          <m.div
            variants={staggerItem}
            className="flex flex-wrap items-center gap-3"
          >
            <m.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/11Hjv--0tPrilC9tOZSieXQ8Kmam_akzI/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-[#ededed] text-black hover:bg-white transition-colors"
            >
              <FileText size={16} />
              Resume
            </m.a>
            <m.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/Ishupawar081"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-[rgba(255,255,255,0.1)] text-[#a1a1aa] hover:text-[#ededed] hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.03)] transition-all"
            >
              <Code2 size={16} />
              GitHub
            </m.a>
            <m.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/vaishnavi-pawar-ab6070287?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-[rgba(255,255,255,0.1)] text-[#a1a1aa] hover:text-[#ededed] hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.03)] transition-all"
            >
              <ExternalLink size={16} />
              LinkedIn
            </m.a>
            <m.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://leetcode.com/ishu081"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-[rgba(255,255,255,0.1)] text-[#a1a1aa] hover:text-[#ededed] hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.03)] transition-all"
            >
              <Code2 size={16} />
              LeetCode
            </m.a>
            <m.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:vaishnavip@iitbhilai.ac.in"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-[rgba(255,255,255,0.1)] text-[#a1a1aa] hover:text-[#ededed] hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.03)] transition-all"
            >
              <Mail size={16} />
              Email
            </m.a>
          </m.div>
        </m.div>

        {/* Scroll indicator */}
        <m.div
          className="absolute bottom-10 left-6 flex items-center gap-2 text-xs text-[#71717a] font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <m.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={14} />
          </m.div>
          Scroll
        </m.div>
      </div>
    </section>
  );
}
