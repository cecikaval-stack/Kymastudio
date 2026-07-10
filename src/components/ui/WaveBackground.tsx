"use client";

import { motion } from "framer-motion";

interface WaveBackgroundProps {
  className?: string;
  opacity?: number;
}

export function WaveBackground({ className, opacity = 0.06 }: WaveBackgroundProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
      aria-hidden="true"
    >
      <motion.svg
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -bottom-1/4 left-0 w-[200%] text-mediterranean"
        style={{ opacity }}
        animate={{ x: ["0%", "-10%"] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <path
          d="M0 160 C 180 80, 360 240, 540 160 S 900 80, 1080 160 S 1260 240, 1440 160 L 1440 320 L 0 320 Z"
          fill="currentColor"
        />
      </motion.svg>
      <motion.svg
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -bottom-1/3 left-0 w-[200%] text-sea"
        style={{ opacity: opacity * 0.7 }}
        animate={{ x: ["-5%", "5%"] }}
        transition={{
          duration: 16,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <path
          d="M0 180 C 240 100, 480 260, 720 180 S 1200 100, 1440 180 L 1440 320 L 0 320 Z"
          fill="currentColor"
        />
      </motion.svg>
    </div>
  );
}
