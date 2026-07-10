import type { Metadata } from "next";
import Link from "next/link";
import { insights } from "@/lib/data";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { VintageImage } from "@/components/ui/VintageImage";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Thoughts on branding, design, and the Mediterranean philosophy of slow, intentional creative work from Kyma Studio.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        label="Insights"
        title="Thoughts on brand, design & the sea"
        description="Essays and observations from our studio — exploring the intersection of strategy, aesthetics, and Mediterranean living."
      />

      <section className="section-padding-sm">
        <Container>
          <div className="grid gap-12 md:gap-16">
            {insights.map((article, i) => (
              <FadeIn key={article.slug} delay={i * 0.1}>
                <Link href={`/insights/${article.slug}`} className="group block">
                  <article
                    className={`grid items-center gap-8 md:grid-cols-2 md:gap-16 ${
                      i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <VintageImage
                      src={article.image}
                      alt={article.imageAlt}
                      fill
                      className="relative aspect-[16/10] rounded-organic shadow-soft transition-shadow duration-500 group-hover:shadow-lift"
                      imageClassName="transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div>
                      <div className="flex items-center gap-4 text-xs uppercase tracking-[0.15em] text-charcoal/50">
                        <span>{article.category}</span>
                        <span className="h-1 w-1 rounded-full bg-stone" />
                        <span>{article.date}</span>
                        <span className="h-1 w-1 rounded-full bg-stone" />
                        <span>{article.readTime}</span>
                      </div>
                      <h2 className="mt-4 font-serif text-2xl text-charcoal transition-colors group-hover:text-mediterranean md:text-3xl">
                        {article.title}
                      </h2>
                      <p className="mt-4 text-base leading-relaxed text-charcoal/60">
                        {article.excerpt}
                      </p>
                      <span className="mt-4 inline-block text-sm font-medium text-mediterranean opacity-0 transition-opacity group-hover:opacity-100">
                        Read article →
                      </span>
                    </div>
                  </article>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
