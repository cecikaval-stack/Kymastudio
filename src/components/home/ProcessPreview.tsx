"use client";

import { processSteps } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CurvedDivider } from "@/components/ui/CurvedDivider";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProcessPreview() {
  return (
    <section className="relative bg-sand/40">
      <CurvedDivider color="#FAF8F4" />
      <div className="section-padding">
        <Container>
          <FadeIn>
            <SectionHeading
              label="How we work"
              title="A process that flows"
              description="Like the tide, our approach is rhythmic and purposeful — each phase building naturally into the next."
              align="center"
            />
          </FadeIn>

          <div className="relative">
            <div
              className="absolute top-1/2 right-0 left-0 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-stone to-transparent lg:block"
              aria-hidden="true"
            />

            <div className="grid gap-10 sm:gap-8 md:grid-cols-3 lg:grid-cols-5">
              {processSteps.map((step, i) => (
                <FadeIn key={step.id} delay={i * 0.1}>
                  <div className="group relative text-left">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-stone/50 bg-warm-white font-serif text-lg text-mediterranean transition-all duration-500 group-hover:border-mediterranean group-hover:shadow-soft sm:mb-6 sm:h-16 sm:w-16 lg:mx-0">
                      {step.number}
                    </div>
                    <h3 className="font-serif text-xl text-charcoal sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
                      {step.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <FadeIn delay={0.5}>
            <div className="mt-12 flex justify-center sm:mt-16">
              <Button href="/process" variant="secondary" fullWidth className="sm:w-auto">
                Explore our process
              </Button>
            </div>
          </FadeIn>
        </Container>
      </div>
      <CurvedDivider color="#FAF8F4" flip />
    </section>
  );
}
