"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  fullWidth?: boolean;
  disabled?: boolean;
}

export function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
  type = "button",
  fullWidth = false,
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium tracking-wide transition-all duration-500 ease-editorial";

  const variants = {
    primary:
      "bg-charcoal text-warm-white hover:bg-mediterranean hover:shadow-soft",
    secondary:
      "border border-stone/60 bg-transparent text-charcoal hover:border-mediterranean hover:text-mediterranean",
    ghost:
      "bg-transparent text-charcoal hover:text-mediterranean underline-offset-4 hover:underline",
  };

  const classes = cn(
    baseStyles,
    variants[variant],
    fullWidth && "w-full",
    disabled && "pointer-events-none opacity-60",
    className
  );

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const },
  };

  if (href) {
    return (
      <motion.div
        {...motionProps}
        className={cn("inline-block", fullWidth && "block w-full")}
      >
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...(disabled ? {} : motionProps)}
    >
      {children}
    </motion.button>
  );
}
