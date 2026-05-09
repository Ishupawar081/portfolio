"use client";

import { useEffect, useRef, useState } from "react";
import { m, useInView } from "framer-motion";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

type Trend = "up" | "down" | "neutral";

interface MetricCardProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel?: string;
  trend?: Trend;
  trendValue?: string;
  color?: "indigo" | "cyan" | "purple" | "emerald";
  decimals?: number;
  className?: string;
}

const colorMap = {
  indigo: {
    icon: "rgba(99,102,241,0.15)",
    text: "#6366f1",
    glow: "rgba(99,102,241,0.3)",
    border: "rgba(99,102,241,0.2)",
  },
  cyan: {
    icon: "rgba(6,182,212,0.15)",
    text: "#06b6d4",
    glow: "rgba(6,182,212,0.3)",
    border: "rgba(6,182,212,0.2)",
  },
  purple: {
    icon: "rgba(168,85,247,0.15)",
    text: "#a855f7",
    glow: "rgba(168,85,247,0.3)",
    border: "rgba(168,85,247,0.2)",
  },
  emerald: {
    icon: "rgba(16,185,129,0.15)",
    text: "#10b981",
    glow: "rgba(16,185,129,0.3)",
    border: "rgba(16,185,129,0.2)",
  },
};

const trendIcons = {
  up: TrendingUp,
  down: TrendingDown,
  neutral: Minus,
};

function useCountUp(target: number, duration = 1.8, decimals = 0) {
  const [count, setCount] = useState(0);
  const ref = useRef<NodeJS.Timeout | null>(null);

  const start = () => {
    const startTime = Date.now();
    const step = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((eased * target).toFixed(decimals)));
      if (progress < 1) ref.current = setTimeout(step, 16);
    };
    step();
  };

  useEffect(() => () => { if (ref.current) clearTimeout(ref.current); }, []);

  return { count, start };
}

export function MetricCard({
  value,
  suffix = "",
  prefix = "",
  label,
  sublabel,
  trend,
  trendValue,
  color = "indigo",
  decimals = 0,
  className,
}: MetricCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });
  const { count, start } = useCountUp(value, 1.8, decimals);
  const started = useRef(false);
  const colors = colorMap[color];
  const TrendIcon = trend ? trendIcons[trend] : null;

  useEffect(() => {
    if (isInView && !started.current) {
      started.current = true;
      start();
    }
  }, [isInView, start]);

  return (
    <m.div
      ref={containerRef}
      className={cn("glass-card p-5 relative group", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Color accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-60 group-hover:opacity-100 transition-opacity"
        style={{
          background: `linear-gradient(90deg, transparent, ${colors.text}, transparent)`,
        }}
      />

      {/* Value */}
      <div className="mb-2">
        <span
          className="text-3xl font-bold tracking-tight"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: colors.text,
          }}
        >
          {prefix}{count.toFixed(decimals)}{suffix}
        </span>
      </div>

      {/* Label */}
      <p className="text-sm font-medium text-[#e2e8f0]">{label}</p>
      {sublabel && (
        <p className="text-xs text-[#94a3b8] mt-0.5">{sublabel}</p>
      )}

      {/* Trend */}
      {trend && TrendIcon && trendValue && (
        <div className="flex items-center gap-1.5 mt-3">
          <div
            className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium"
            style={{
              background:
                trend === "up"
                  ? "rgba(16,185,129,0.15)"
                  : trend === "down"
                  ? "rgba(239,68,68,0.15)"
                  : "rgba(148,163,184,0.15)",
              color:
                trend === "up"
                  ? "#10b981"
                  : trend === "down"
                  ? "#ef4444"
                  : "#94a3b8",
            }}
          >
            <TrendIcon size={11} />
            {trendValue}
          </div>
        </div>
      )}

      {/* Background glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${colors.glow.replace("0.3", "0.06")} 0%, transparent 70%)`,
        }}
      />
    </m.div>
  );
}
