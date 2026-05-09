"use client";

export function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Perspective grid */}
      <div
        className="absolute inset-0 bg-grid-pattern"
        style={{ opacity: 0.6 }}
      />

      {/* Radial vignette — darkens edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 20%, rgba(2, 4, 8, 0.5) 60%, rgba(2, 4, 8, 0.95) 100%)",
        }}
      />

      {/* Top edge fade */}
      <div
        className="absolute top-0 inset-x-0 h-32"
        style={{
          background: "linear-gradient(to bottom, rgba(2,4,8,1) 0%, transparent 100%)",
        }}
      />

      {/* Bottom edge fade */}
      <div
        className="absolute bottom-0 inset-x-0 h-32"
        style={{
          background: "linear-gradient(to top, rgba(2,4,8,1) 0%, transparent 100%)",
        }}
      />

      {/* Scan line */}
      <div
        className="absolute inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.4) 30%, rgba(6,182,212,0.6) 50%, rgba(99,102,241,0.4) 70%, transparent 100%)",
          animation: "scan-line 8s ease-in-out infinite",
          boxShadow: "0 0 12px rgba(99,102,241,0.5)",
        }}
      />
    </div>
  );
}
