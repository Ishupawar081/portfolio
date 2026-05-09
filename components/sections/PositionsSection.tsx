"use client";

import { m } from "framer-motion";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/animations";

const POSITIONS = [
  "Mentorship Program Volunteer",
  "Athletics Coordinator",
  "Runway Event Organizer",
  "Outreach Society Member",
];

export function PositionsSection() {
  return (
    <section id="positions" className="section-padding border-t border-[rgba(255,255,255,0.05)]">
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
            Positions of Responsibility
          </m.h2>

          <m.ul variants={staggerItem} className="space-y-4">
            {POSITIONS.map((position, index) => (
              <li key={index} className="flex items-start text-[#a1a1aa] text-sm">
                <span className="text-[#71717a] mr-4 select-none">0{index + 1}</span>
                {position}
              </li>
            ))}
          </m.ul>
        </m.div>
      </div>
    </section>
  );
}
