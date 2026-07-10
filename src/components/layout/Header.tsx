"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navigation, siteConfig } from "@/lib/data";
import { WaveLogo } from "@/components/ui/WaveLogo";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-700 ease-editorial",
        isScrolled
          ? "bg-warm-white/90 shadow-soft backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-editorial items-center justify-between px-6 py-5 md:px-10 lg:px-16">
        <Link
          href="/"
          className="group flex items-center gap-3 text-charcoal transition-colors hover:text-mediterranean"
          aria-label={`${siteConfig.name} — Home`}
        >
          <WaveLogo className="h-5 w-12 text-mediterranean transition-transform duration-500 group-hover:scale-105" />
          <span className="font-serif text-lg tracking-wide">Kyma</span>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Main navigation">
          {navigation.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="editorial-link text-sm tracking-wide"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="rounded-full border border-charcoal/20 px-6 py-2.5 text-sm tracking-wide transition-all duration-500 hover:border-mediterranean hover:text-mediterranean"
          >
            Start Your Project
          </Link>
        </div>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block h-px w-6 bg-charcoal"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-px w-6 bg-charcoal"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block h-px w-6 bg-charcoal"
          />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-warm-white lg:hidden"
          >
            <nav
              className="flex h-full flex-col items-center justify-center gap-8"
              aria-label="Mobile navigation"
            >
              {navigation.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="font-serif text-3xl text-charcoal transition-colors hover:text-mediterranean"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
