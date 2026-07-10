"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { WaveLine } from "@/components/ui/WaveLine";
import { WaveBackground } from "@/components/ui/WaveBackground";
import { Container } from "@/components/ui/Container";

interface PageHeroProps {
  label?: string;
  title: string;
  description?: string;
}

export function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <WaveBackground opacity={0.04} />
      <Container className="relative z-10">
        <FadeIn>
          {label && (
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-mediterranean">
              {label}
            </p>
          )}
          <h1 className="max-w-4xl font-serif text-4xl leading-[1.08] tracking-tight text-charcoal md:text-6xl lg:text-7xl text-balance">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-base leading-[1.75] text-charcoal/65 md:text-lg">
              {description}
            </p>
          )}
          <div className="mt-10">
            <WaveLine color="#3F78A8" className="opacity-50" />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
