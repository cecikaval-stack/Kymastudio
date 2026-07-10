import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { insights } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { VintageImage } from "@/components/ui/VintageImage";
import { CTA } from "@/components/home/CTA";

interface InsightPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insights.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = insights.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: article.title,
    description: article.excerpt,
  };
}

const articleBodies: Record<string, string[]> = {
  "the-ripple-effect": [
    "Consider the moment a stone meets still water. The impact is small, almost imperceptible — yet within seconds, concentric rings spread across the entire surface. This is how branding works at its best.",
    "Most agencies obsess over the splash — the launch event, the viral campaign, the dramatic rebrand reveal. At Kyma, we're more interested in the ripples. The business card someone keeps for years. The packaging that feels too beautiful to discard. The website that loads instantly and breathes with whitespace.",
    "These small moments compound. They build a feeling — a quiet certainty that this brand can be trusted, that it understands beauty and restraint in equal measure.",
    "The ripple effect isn't about scale. It's about resonance. A single thoughtful decision, repeated with consistency, creates a brand that people don't just recognise — they feel.",
  ],
  "mediterranean-minimalism": [
    "Walk through any Cycladic village and you'll find a masterclass in minimalism that predates the movement by millennia. Whitewashed walls. Blue shutters. Stone pathways worn smooth by generations of footsteps.",
    "This isn't minimalism born from austerity — it's minimalism born from wisdom. Every element earns its place because resources were precious and beauty was non-negotiable.",
    "Contemporary branding can learn from this approach. Strip away the decorative excess. Let typography breathe. Use colour with the confidence of a single accent against an expansive white canvas.",
    "Mediterranean minimalism isn't empty — it's full of light, texture, and the suggestion of something deeper just beyond the frame. The best brands work the same way.",
  ],
  "slow-branding": [
    "We live in an era of brand pivots and rapid repositioning. Companies rebrand every few years, chasing trends like waves chasing the shore. But the brands we admire most — Aesop, Hermès, Muji — share a different quality: patience.",
    "Slow branding doesn't mean slow execution. It means deep roots. It means understanding your essence so thoroughly that every expression feels inevitable rather than invented.",
    "At Kyma, we encourage clients to sit with strategy before rushing to design. To walk the coastline before building the house. To understand the currents before setting sail.",
    "The result is brands that don't need to be rebuilt every season — brands that grow, evolve, and deepen over time, like the Mediterranean landscape itself.",
  ],
};

export default async function InsightPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const article = insights.find((a) => a.slug === slug);

  if (!article) notFound();

  const body = articleBodies[slug] ?? [article.excerpt];

  return (
    <>
      <article>
        <section className="pt-32 pb-8 md:pt-40">
          <Container narrow>
            <FadeIn>
              <Link
                href="/insights"
                className="editorial-link text-sm text-charcoal/50"
              >
                ← All insights
              </Link>
              <div className="mt-8 flex items-center gap-4 text-xs uppercase tracking-[0.15em] text-charcoal/50">
                <span>{article.category}</span>
                <span className="h-1 w-1 rounded-full bg-stone" />
                <span>{article.date}</span>
                <span className="h-1 w-1 rounded-full bg-stone" />
                <span>{article.readTime} read</span>
              </div>
              <h1 className="mt-6 font-serif text-4xl leading-tight text-charcoal md:text-5xl lg:text-6xl text-balance">
                {article.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-charcoal/65">
                {article.excerpt}
              </p>
            </FadeIn>
          </Container>
        </section>

        <section className="section-padding-sm pt-0">
          <Container>
            <FadeIn delay={0.2}>
              <VintageImage
                src={article.image}
                alt={article.imageAlt}
                fill
                className="relative aspect-[21/9] rounded-organic-lg shadow-soft"
                sizes="100vw"
                priority
              />
            </FadeIn>
          </Container>
        </section>

        <section className="section-padding-sm">
          <Container narrow>
            <div className="space-y-6">
              {body.map((paragraph, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <p className="text-base leading-[1.8] text-charcoal/70 md:text-lg">
                    {paragraph}
                  </p>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>
      </article>

      <CTA />
    </>
  );
}
