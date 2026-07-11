"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navigation, siteConfig } from "@/lib/data";
import { WaveLogo } from "@/components/ui/WaveLogo";
import { cn } from "@/lib/utils";

const mobileNavigation = navigation.filter((item) => item.href !== "/");

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          "safe-top fixed top-0 right-0 left-0 z-[70] transition-all duration-500 ease-editorial",
          isScrolled || isOpen
            ? "bg-warm-white/95 shadow-soft backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex max-w-editorial items-center justify-between px-6 py-4 sm:px-6 sm:py-5 md:px-10 lg:px-16">
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
            className="touch-target relative z-[80] -mr-2 flex flex-col items-center justify-center gap-1.5 rounded-full p-2 lg:hidden"
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
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="safe-top safe-bottom fixed inset-0 z-[60] bg-warm-white lg:hidden"
            aria-hidden={!isOpen}
          >
            <nav
              className="flex h-full flex-col overflow-y-auto overscroll-contain px-6 pb-10 pt-[5.5rem] sm:px-8 sm:pt-[6rem]"
              aria-label="Mobile navigation"
            >
              <div className="mx-auto flex w-full max-w-sm flex-col gap-1 pt-4">
                {mobileNavigation.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.35 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "touch-target flex min-h-[52px] items-center border-b border-stone/15 py-3 font-serif text-2xl transition-colors sm:text-[1.75rem]",
                        pathname === item.href
                          ? "text-mediterranean"
                          : "text-charcoal hover:text-mediterranean"
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: mobileNavigation.length * 0.05, duration: 0.35 }}
                className="safe-bottom mx-auto mt-auto w-full max-w-sm shrink-0 pt-10"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="touch-target flex w-full items-center justify-center rounded-full border border-charcoal/20 px-6 py-3.5 text-sm tracking-wide transition-all duration-500 hover:border-mediterranean hover:text-mediterranean"
                >
                  Start Your Project
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
