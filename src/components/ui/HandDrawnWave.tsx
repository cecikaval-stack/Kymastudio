"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HandDrawnWaveProps {
  className?: string;
  color?: string;
}

export function HandDrawnWave({
  className,
  color = "#3F78A8",
}: HandDrawnWaveProps) {
  return (
    <motion.svg
      viewBox="0 0 200 40"
      fill="none"
      className={cn("w-32 opacity-50", className)}
      aria-hidden="true"
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <path
        d="M8 24 C 28 12, 48 32, 68 20 S 108 8, 128 22 S 168 34, 192 18"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        strokeDasharray="2 3"
      />
    </motion.svg>
  );
}
