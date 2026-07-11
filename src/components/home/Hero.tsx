"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { images } from "@/lib/images";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { HandDrawnWave } from "@/components/ui/HandDrawnWave";
import { WaveBackground } from "@/components/ui/WaveBackground";
import { WaveLine } from "@/components/ui/WaveLine";

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden">
      <WaveBackground opacity={0.05} />

      <Container className="relative z-10 pt-24 pb-12 sm:pt-28 sm:pb-16 md:pb-20">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <FadeIn delay={0.1}>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-mediterranean sm:mb-6 sm:tracking-[0.25em]">
                Independent Branding &amp; Digital Studio
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="font-serif text-[2rem] leading-[1.1] tracking-tight text-charcoal sm:text-5xl md:text-6xl lg:text-[4.25rem] text-balance">
                {siteConfig.tagline}
              </h1>
            </FadeIn>

            <FadeIn delay={0.35}>
              <p className="mt-6 max-w-xl text-base leading-[1.75] text-charcoal/70 sm:mt-8 md:text-lg">
                {siteConfig.heroSubheading}
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
                <Button href="/contact" fullWidth className="sm:w-auto">
                  Start Your Project
                </Button>
                <Button href="/services" variant="secondary" fullWidth className="sm:w-auto">
                  Our Services
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.65}>
              <div className="mt-10 hidden items-center gap-6 sm:mt-14 sm:flex">
                <WaveLine color="#3F78A8" className="max-w-[10rem] opacity-50" />
                <HandDrawnWave />
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3} direction="left" className="lg:col-span-5">
            <motion.div
              className="relative mx-auto w-full max-w-sm sm:max-w-none"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-organic-lg shadow-lift md:ml-auto md:max-w-md">
                <Image
                  src={images.hero.src}
                  alt={images.hero.alt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-warm-white/10" />
              </div>
              <div
                className="absolute -right-2 -bottom-2 -z-10 h-full w-full rounded-organic-lg bg-sand/60 sm:-right-4 sm:-bottom-4 md:-right-6 md:-bottom-6"
                aria-hidden="true"
              />
            </motion.div>
          </FadeIn>
        </div>
      </Container>

      <div
        className="absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-warm-white to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
