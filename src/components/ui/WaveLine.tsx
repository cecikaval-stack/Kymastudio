"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WaveLineProps {
  className?: string;
  color?: string;
}

export function WaveLine({ className, color = "currentColor" }: WaveLineProps) {
  return (
    <motion.svg
      viewBox="0 0 800 24"
      fill="none"
      className={cn("w-full max-w-md", className)}
      aria-hidden="true"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
    >
      <motion.path
        d="M0 12 C 100 2, 200 22, 300 12 S 500 2, 600 12 S 700 22, 800 12"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
    </motion.svg>
  );
}
