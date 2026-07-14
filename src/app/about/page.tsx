import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { CTA } from "@/components/home/CTA";
import { CurvedDivider } from "@/components/ui/CurvedDivider";
import { HandDrawnWave } from "@/components/ui/HandDrawnWave";
import { VintageImage } from "@/components/ui/VintageImage";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "About",
  description:
    "Kyma Studio is an independent creative and branding studio partnering with startups and established businesses to launch, evolve and grow.",
};

const values = [
  {
    title: "Understand first",
    description:
      "Every project begins with listening — understanding your business, audience and ambitions before a single visual decision is made.",
  },
  {
    title: "Clarity over complexity",
    description:
      "We strip away the unnecessary. The best brands, like the best Mediterranean spaces, breathe through simplicity.",
  },
  {
    title: "Craft with intention",
    description:
      "Strategy, identity, web design, development and marketing — woven together with the same care and precision throughout.",
  },
  {
    title: "Grow together",
    description:
      "We partner for the long term, helping businesses launch, evolve and build brands that stand the test of time.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Kyma"
        title="An independent studio for brands that want to grow with purpose."
        description="We partner with startups and established businesses to create thoughtful brands — combining strategy, identity, web design, development and digital marketing."
      />

      <section className="section-padding-sm">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
            <FadeIn className="lg:col-span-5">
              <VintageImage
                src={images.about.src}
                alt={images.about.alt}
                fill
                className="relative aspect-[4/5] rounded-organic-lg shadow-lift"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <p className="mt-4 font-serif text-sm italic text-charcoal/45">
                Kea — Τζια
              </p>
              <div className="mt-8 lg:hidden">
                <HandDrawnWave />
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="lg:col-span-7">
              <div className="space-y-6 lg:pl-4">
                <h2 className="font-serif text-3xl leading-tight text-charcoal md:text-4xl lg:text-5xl">
                  Thoughtful brands, built with care
                </h2>
                <p className="text-base leading-[1.8] text-charcoal/70 md:text-lg">
                  Kyma — κύμα — means wave in Greek. It reflects how we think
                  about branding: a single thoughtful gesture creates movement
                  that travels far beyond its origin.
                </p>
                <p className="text-base leading-[1.8] text-charcoal/70 md:text-lg">
                  We are an independent creative and branding studio. We help
                  companies launch, evolve and grow — whether you&apos;re a
                  startup finding your footing or an established business ready
                  for their next chapter.
                </p>
                <p className="text-base leading-[1.8] text-charcoal/70 md:text-lg">
                  Our work spans brand strategy, identity design, website design,
                  development and digital marketing. Every project begins with
                  understanding your business before we create any visual
                  solution.
                </p>
                <p className="text-base leading-[1.8] text-charcoal/70 md:text-lg">
                  Our inspiration comes from the Mediterranean — and from places
                  like Kea, where simplicity, craftsmanship and timeless design
                  meet. That sensibility shapes everything we make: calm,
                  confident, and built to last.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="bg-sand/20 section-padding-sm">
        <Container>
          <FadeIn>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-mediterranean">
              Kea, Greece
            </p>
            <h2 className="max-w-2xl font-serif text-3xl leading-tight text-charcoal md:text-4xl">
              Island light, vintage soul
            </h2>
          </FadeIn>

          <div className="mt-12 grid gap-5 md:grid-cols-12">
            <FadeIn className="md:col-span-7">
              <VintageImage
                src={images.kea[0].src}
                alt={images.kea[0].alt}
                fill
                className="relative aspect-[16/10] rounded-organic shadow-soft md:aspect-[16/11]"
                sizes="(max-width: 768px) 100vw, 58vw"
              />
            </FadeIn>
            <FadeIn delay={0.1} className="md:col-span-5">
              <VintageImage
                src={images.kea[1].src}
                alt={images.kea[1].alt}
                fill
                className="relative aspect-[4/5] rounded-organic shadow-soft"
                sizes="(max-width: 768px) 100vw, 42vw"
              />
            </FadeIn>
            <FadeIn delay={0.15} className="md:col-span-12">
              <VintageImage
                src={images.kea[2].src}
                alt={images.kea[2].alt}
                fill
                className="relative mx-auto aspect-[16/10] w-full max-w-4xl rounded-organic shadow-soft md:aspect-[21/9]"
                sizes="(max-width: 768px) 100vw, 70vw"
              />
            </FadeIn>
          </div>
        </Container>
      </section>

      <div className="bg-sand/30">
        <CurvedDivider color="#FAF8F4" />
        <section className="section-padding-sm">
          <Container>
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
              <FadeIn>
                <h2 className="font-serif text-3xl leading-tight text-charcoal md:text-4xl">
                  How we approach every project
                </h2>
                <p className="mt-6 text-base leading-[1.8] text-charcoal/65">
                  We don&apos;t believe in one-size-fits-all packages or
                  impersonal processes. Each engagement is shaped around your
                  goals — bringing together the right mix of strategy, design
                  and digital expertise.
                </p>
                <p className="mt-4 text-base leading-[1.8] text-charcoal/65">
                  The result is work that feels personal, premium and purposeful
                  — never loud, never generic.
                </p>
              </FadeIn>
              <FadeIn delay={0.15}>
                <VintageImage
                  src={images.aboutSecondary.src}
                  alt={images.aboutSecondary.alt}
                  fill
                  className="relative aspect-[16/11] rounded-organic shadow-soft"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </FadeIn>
            </div>
          </Container>
        </section>
        <CurvedDivider color="#FAF8F4" flip />
      </div>

      <section className="section-padding-sm">
        <Container>
          <FadeIn>
            <h2 className="mb-14 text-center font-serif text-3xl text-charcoal md:text-4xl lg:text-5xl">
              What guides us
            </h2>
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.08}>
                <div className="h-full rounded-organic border border-stone/25 bg-warm-white p-8 shadow-soft">
                  <h3 className="font-serif text-xl text-charcoal md:text-2xl">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-charcoal/65 md:text-base">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
