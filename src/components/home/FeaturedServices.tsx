"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { CurvedDivider } from "@/components/ui/CurvedDivider";
import { FadeIn } from "@/components/ui/FadeIn";
import { HandDrawnWave } from "@/components/ui/HandDrawnWave";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FeaturedServices() {
  return (
    <>
      <CurvedDivider color="#E7DCCF" className="-mt-8 opacity-60" />
      <section className="relative bg-sand/25 section-padding">
        <div
          className="pointer-events-none absolute top-20 right-0 h-64 w-64 opacity-30"
          aria-hidden="true"
        >
          <div className="h-full w-full rounded-full bg-sea/20 blur-3xl" />
        </div>

        <Container>
          <FadeIn>
            <SectionHeading
              label="What We Do"
              title="Strategy, design and digital marketing"
              description="We partner with startups and established businesses to build brands that are clear, beautiful and built to grow."
            />
          </FadeIn>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <FadeIn key={service.id} delay={i * 0.06}>
                <motion.article
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="group relative flex h-full flex-col rounded-organic border border-stone/25 bg-warm-white/80 p-7 shadow-soft backdrop-blur-sm transition-shadow duration-500 hover:shadow-lift"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="h-px w-8 bg-mediterranean/40 transition-all duration-500 group-hover:w-14 group-hover:bg-mediterranean" />
                    <span className="font-serif text-sm text-stone/80">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl leading-snug text-charcoal transition-colors group-hover:text-mediterranean">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/65">
                    {service.description}
                  </p>
                  <Link
                    href="/services"
                    className="mt-5 text-xs font-medium uppercase tracking-wider text-mediterranean opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn more →
                  </Link>
                </motion.article>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <div className="mt-16 flex justify-center">
              <HandDrawnWave className="opacity-40" />
            </div>
          </FadeIn>
        </Container>
      </section>
      <CurvedDivider color="#FAF8F4" flip />
    </>
  );
}
