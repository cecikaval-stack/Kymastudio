import type { Metadata } from "next";
import { processSteps } from "@/lib/data";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { CTA } from "@/components/home/CTA";
import { CurvedDivider } from "@/components/ui/CurvedDivider";

export const metadata: Metadata = {
  title: "Process",
  description:
    "Discover, Define, Design, Launch, Grow — Kyma Studio's thoughtful five-phase process for building brands with lasting impact.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        label="Our process"
        title="Rhythm, not rush"
        description="Like the Mediterranean tide, our process flows with natural momentum — each phase informing the next with clarity and purpose."
      />

      <section className="relative bg-sand/30">
        <CurvedDivider color="#FAF8F4" />
        <div className="section-padding">
          <Container>
            <div className="space-y-0">
              {processSteps.map((step, i) => (
                <FadeIn key={step.id} delay={i * 0.1}>
                  <div
                    className={`border-b border-stone/30 py-10 sm:py-12 md:grid md:grid-cols-12 md:items-start md:gap-16 md:py-20 ${
                      i < processSteps.length - 1 ? "" : "border-b-0"
                    }`}
                  >
                    <div className="flex items-start gap-4 md:contents">
                      <span className="shrink-0 font-serif text-4xl leading-none text-mediterranean/30 sm:text-5xl md:col-span-3 md:text-6xl">
                        {step.number}
                      </span>
                      <div className="min-w-0 flex-1 md:col-span-4">
                        <h2 className="font-serif text-xl text-charcoal sm:text-2xl md:text-3xl lg:text-4xl">
                          {step.title}
                        </h2>
                        <p className="mt-3 text-base leading-relaxed text-charcoal/65 md:mt-0 md:hidden md:text-lg">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:col-span-5 md:block">
                      <p className="text-base leading-relaxed text-charcoal/65 md:text-lg">
                        {step.description}
                      </p>
                      {i < processSteps.length - 1 && (
                        <div className="mt-8 hidden md:block">
                          <svg
                            viewBox="0 0 24 80"
                            className="h-16 w-6 text-stone"
                            aria-hidden="true"
                          >
                            <path
                              d="M12 0 C 8 20, 16 40, 12 60 S 8 80, 12 80"
                              stroke="currentColor"
                              strokeWidth="1"
                              fill="none"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </div>
        <CurvedDivider color="#FAF8F4" flip />
      </section>

      <section className="section-padding-sm">
        <Container narrow>
          <FadeIn>
            <div className="text-center">
              <h2 className="font-serif text-3xl text-charcoal md:text-4xl text-balance">
                Every project is different. The rhythm stays the same.
              </h2>
              <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-charcoal/60">
                We adapt our process to your timeline and ambitions — whether
                you&apos;re launching a new venture or evolving an established
                brand.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <CTA />
    </>
  );
}
