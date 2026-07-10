"use client";

import { motion } from "framer-motion";
import { philosophyContent } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { WaveLine } from "@/components/ui/WaveLine";

export function Philosophy() {
  return (
    <section className="relative overflow-hidden bg-charcoal text-warm-white">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      <Container className="section-padding relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <FadeIn>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-sea">
              Our philosophy
            </p>
            <h2 className="font-serif text-4xl leading-[1.1] tracking-tight text-warm-white md:text-5xl lg:text-[3.25rem] text-balance">
              {philosophyContent.heading}
            </h2>
            <div className="mt-8">
              <WaveLine color="#6DA8C9" />
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-6">
              {philosophyContent.paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-base leading-[1.8] text-white/90 md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-20 flex justify-center">
            <motion.div
              className="h-24 w-px bg-gradient-to-b from-sea/50 to-transparent"
              aria-hidden="true"
            />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
