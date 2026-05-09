"use client";

import { m } from "framer-motion";

export function GradientOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Primary indigo orb - top left */}
      <m.div
        className="absolute rounded-full animate-orb-1"
        style={{
          width: "600px",
          height: "600px",
          top: "-200px",
          left: "-100px",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.18) 0%, rgba(99,102,241,0.06) 50%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Cyan orb - top right */}
      <m.div
        className="absolute rounded-full animate-orb-2"
        style={{
          width: "500px",
          height: "500px",
          top: "-100px",
          right: "-50px",
          background:
            "radial-gradient(circle, rgba(6,182,212,0.14) 0%, rgba(6,182,212,0.05) 50%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Purple orb - center */}
      <m.div
        className="absolute rounded-full animate-orb-3"
        style={{
          width: "700px",
          height: "700px",
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          background:
            "radial-gradient(circle, rgba(168,85,247,0.10) 0%, rgba(168,85,247,0.04) 50%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      {/* Bottom cyan accent */}
      <m.div
        className="absolute rounded-full animate-orb-1"
        style={{
          width: "400px",
          height: "400px",
          bottom: "-100px",
          right: "20%",
          background:
            "radial-gradient(circle, rgba(6,182,212,0.12) 0%, rgba(6,182,212,0.04) 50%, transparent 70%)",
          filter: "blur(60px)",
          animationDelay: "4s",
        }}
      />

      {/* Small indigo accent - bottom left */}
      <m.div
        className="absolute rounded-full animate-orb-2"
        style={{
          width: "300px",
          height: "300px",
          bottom: "10%",
          left: "10%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
          filter: "blur(50px)",
          animationDelay: "6s",
        }}
      />
    </div>
  );
}
