import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center section-padding">
      <Container className="text-center">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-mediterranean">
          404
        </p>
        <h1 className="mt-4 font-serif text-4xl text-charcoal md:text-6xl">
          Lost at sea
        </h1>
        <p className="mx-auto mt-4 max-w-md text-charcoal/60">
          The page you&apos;re looking for has drifted away. Let&apos;s navigate
          you back to shore.
        </p>
        <div className="mt-10">
          <Button href="/">Return home</Button>
        </div>
        <p className="mt-6">
          <Link href="/contact" className="editorial-link text-sm">
            Or get in touch
          </Link>
        </p>
      </Container>
    </section>
  );
}
