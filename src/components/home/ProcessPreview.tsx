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

            <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
              {processSteps.map((step, i) => (
                <FadeIn key={step.id} delay={i * 0.1}>
                  <div className="group relative text-center lg:text-left">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-stone/50 bg-warm-white font-serif text-lg text-mediterranean transition-all duration-500 group-hover:border-mediterranean group-hover:shadow-soft lg:mx-0">
                      {step.number}
                    </div>
                    <h3 className="font-serif text-2xl text-charcoal">
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
            <div className="mt-16 flex justify-center">
              <Button href="/process" variant="secondary">
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
