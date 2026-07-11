import type { Metadata } from "next";
import { services } from "@/lib/data";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { CTA } from "@/components/home/CTA";
import { CurvedDivider } from "@/components/ui/CurvedDivider";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Brand strategy, brand identity, website design, development, social media and campaign strategy for startups and established businesses.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="Everything your brand needs to grow"
        description="From first strategy to ongoing digital marketing — we bring the right disciplines together for startups and established businesses alike."
      />

      <section className="section-padding-sm">
        <Container>
          <div className="space-y-0">
            {services.map((service, i) => (
              <FadeIn key={service.id} delay={i * 0.05}>
                <article
                  className={`border-b border-stone/30 py-10 sm:py-12 md:grid md:grid-cols-12 md:items-start md:gap-12 md:py-16 ${
                    i === 0 ? "border-t" : ""
                  }`}
                >
                  <div className="flex items-start gap-4 md:contents">
                    <span className="shrink-0 font-serif text-xl text-mediterranean/50 sm:text-2xl md:col-span-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1 md:col-span-4">
                      <h2 className="font-serif text-xl text-charcoal sm:text-2xl md:text-3xl lg:text-4xl">
                        {service.title}
                      </h2>
                      <p className="mt-3 text-base leading-[1.75] text-charcoal/65 md:hidden md:text-lg">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:col-span-7 md:block">
                    <p className="text-base leading-[1.75] text-charcoal/65 md:text-lg">
                      {service.description}
                    </p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <div className="bg-sand/40">
        <CurvedDivider color="#FAF8F4" />
        <section className="section-padding-sm">
          <Container narrow>
            <FadeIn>
              <blockquote className="text-center">
                <p className="font-serif text-2xl leading-[1.4] text-charcoal md:text-3xl text-balance">
                  &ldquo;We start by understanding your business — then we
                  create brands with clarity, elegance and purpose.&rdquo;
                </p>
                <footer className="mt-6 text-sm text-charcoal/50">
                  — How we work at Kyma Studio
                </footer>
              </blockquote>
            </FadeIn>
          </Container>
        </section>
        <CurvedDivider color="#FAF8F4" flip />
      </div>

      <CTA />
    </>
  );
}
