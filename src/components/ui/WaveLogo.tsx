"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WaveLogoProps {
  className?: string;
  animated?: boolean;
  strokeWidth?: number;
}

export function WaveLogo({
  className,
  animated = false,
  strokeWidth = 1.5,
}: WaveLogoProps) {
  return (
    <svg
      viewBox="0 0 120 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-8 w-auto", className)}
      aria-hidden="true"
    >
      <motion.path
        d="M4 20 C 20 8, 36 8, 52 20 S 84 32, 116 20"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
        initial={animated ? { pathLength: 0, opacity: 0 } : undefined}
        animate={animated ? { pathLength: 1, opacity: 1 } : undefined}
        transition={
          animated
            ? { duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }
            : undefined
        }
      />
    </svg>
  );
}
