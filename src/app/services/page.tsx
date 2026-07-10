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
                  className={`grid items-start gap-8 border-b border-stone/30 py-12 md:grid-cols-12 md:gap-12 md:py-16 ${
                    i === 0 ? "border-t" : ""
                  }`}
                >
                  <div className="md:col-span-1">
                    <span className="font-serif text-2xl text-mediterranean/50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="md:col-span-4">
                    <h2 className="font-serif text-2xl text-charcoal md:text-3xl lg:text-4xl">
                      {service.title}
                    </h2>
                  </div>
                  <div className="md:col-span-7">
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
