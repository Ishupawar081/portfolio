"use client";

import { LazyMotion, domAnimation, AnimatePresence } from "framer-motion";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <AnimatePresence mode="wait">{children}</AnimatePresence>
    </LazyMotion>
  );
}
