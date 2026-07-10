"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { WaveBackground } from "@/components/ui/WaveBackground";

export function CTA() {
  return (
    <section className="relative overflow-hidden section-padding">
      <WaveBackground opacity={0.04} />

      <Container className="relative z-10 text-center">
        <FadeIn>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-mediterranean">
            Ready to begin?
          </p>
          <h2 className="mx-auto max-w-3xl font-serif text-4xl leading-tight tracking-tight text-charcoal md:text-5xl lg:text-6xl text-balance">
            Let&apos;s create something worth remembering.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-charcoal/60">
            Every great brand starts with a conversation. We&apos;d love to hear
            about your vision.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <Button href="/contact">Start Your Project</Button>
            <Button href="/about" variant="secondary">
              About us
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
