"use client";

import { m } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";
import { Mail, Code2, FileText, ArrowUpRight, ExternalLink, Phone, Copy, Check } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (e: React.MouseEvent, text: string) => {
    e.preventDefault();
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <section id="contact" className="section-padding border-t border-[rgba(255,255,255,0.05)] pb-32">
      <div className="container-custom">
        <m.div
          className="max-w-2xl"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <m.h2
            variants={staggerItem}
            className="text-2xl font-semibold text-[#ededed] mb-8 tracking-tight"
          >
            Contact
          </m.h2>

          <m.p variants={staggerItem} className="text-sm text-[#a1a1aa] mb-12">
            I am always open to discussing new opportunities, collaborations, or
            interesting projects. Feel free to reach out via email or connect on LinkedIn.
          </m.p>

          <m.div variants={staggerItem} className="flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-12">
            <a
              href="mailto:vaishnavip@iitbhilai.ac.in"
              onClick={(e) => handleCopy(e, "vaishnavip@iitbhilai.ac.in")}
              className="flex items-center gap-2 text-sm text-[#ededed] hover:text-white group transition-colors cursor-pointer"
            >
              <Mail size={16} className="text-[#71717a] group-hover:text-white transition-colors" />
              vaishnavip@iitbhilai.ac.in
              {copiedText === "vaishnavip@iitbhilai.ac.in" ? (
                <Check size={12} className="text-green-500 transition-opacity" />
              ) : (
                <Copy size={12} className="text-[#71717a] opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </a>

            <a
              href="mailto:ishup1811@gmail.com"
              onClick={(e) => handleCopy(e, "ishup1811@gmail.com")}
              className="flex items-center gap-2 text-sm text-[#a1a1aa] hover:text-white group transition-colors cursor-pointer"
            >
              <Mail size={16} className="text-[#71717a] group-hover:text-white transition-colors" />
              ishup1811@gmail.com
              {copiedText === "ishup1811@gmail.com" ? (
                <Check size={12} className="text-green-500 transition-opacity" />
              ) : (
                <Copy size={12} className="text-[#71717a] opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </a>

            <a
              href="tel:+918830724178"
              onClick={(e) => handleCopy(e, "+91 8830724178")}
              className="flex items-center gap-2 text-sm text-[#a1a1aa] hover:text-white group transition-colors cursor-pointer"
            >
              <Phone size={16} className="text-[#71717a] group-hover:text-white transition-colors" />
              +91 8830724178
              {copiedText === "+91 8830724178" ? (
                <Check size={12} className="text-green-500 transition-opacity" />
              ) : (
                <Copy size={12} className="text-[#71717a] opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </a>
            
            <a
              href="https://github.com/Ishupawar081"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#a1a1aa] hover:text-white group transition-colors"
            >
              <Code2 size={16} className="text-[#71717a] group-hover:text-white transition-colors" />
              GitHub
              <ArrowUpRight size={12} className="text-[#71717a] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="https://www.linkedin.com/in/vaishnavi-pawar-ab6070287?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#a1a1aa] hover:text-white group transition-colors"
            >
              <ExternalLink size={16} className="text-[#71717a] group-hover:text-white transition-colors" />
              LinkedIn
              <ArrowUpRight size={12} className="text-[#71717a] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="https://leetcode.com/ishu081"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#a1a1aa] hover:text-white group transition-colors"
            >
              <Code2 size={16} className="text-[#71717a] group-hover:text-white transition-colors" />
              LeetCode
              <ArrowUpRight size={12} className="text-[#71717a] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="https://drive.google.com/file/d/11Hjv--0tPrilC9tOZSieXQ8Kmam_akzI/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#a1a1aa] hover:text-white group transition-colors"
            >
              <FileText size={16} className="text-[#71717a] group-hover:text-white transition-colors" />
              Resume
              <ArrowUpRight size={12} className="text-[#71717a] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
