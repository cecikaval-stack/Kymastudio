"use client";

import { Suspense, useEffect, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { siteConfig } from "@/lib/data";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

function ContactForm() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [nextUrl, setNextUrl] = useState(
    `${siteConfig.url}/contact?sent=1`
  );

  useEffect(() => {
    setNextUrl(`${window.location.origin}/contact?sent=1`);
    if (searchParams.get("sent") === "1") {
      setSubmitted(true);
    }
  }, [searchParams]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    const honeypot = String(new FormData(form).get("website") ?? "").trim();

    if (honeypot) {
      e.preventDefault();
      setSubmitted(true);
      form.reset();
      return;
    }

    setIsSubmitting(true);
  }

  return (
    <FadeIn delay={0.2}>
      {submitted ? (
        <div className="rounded-organic border border-stone/30 bg-sand/20 p-8 text-center shadow-soft sm:p-10">
          <p className="font-serif text-xl text-charcoal sm:text-2xl">
            Thank you for reaching out.
          </p>
          <p className="mt-4 text-sm text-charcoal/60">
            We&apos;ll be in touch within two business days.
          </p>
        </div>
      ) : (
        <form
          action={`https://formsubmit.co/${siteConfig.email}`}
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-5 rounded-organic border border-stone/30 bg-warm-white p-5 shadow-soft sm:space-y-6 sm:p-8 md:p-10"
        >
          <input type="hidden" name="_next" value={nextUrl} />
          <input type="hidden" name="_subject" value="New Kyma Studio enquiry" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_honey" value="" />

          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-xs font-medium uppercase tracking-wider text-charcoal/50"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              autoComplete="name"
              disabled={isSubmitting}
              className="form-input"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-xs font-medium uppercase tracking-wider text-charcoal/50"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="email"
              inputMode="email"
              disabled={isSubmitting}
              className="form-input"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="mb-2 block text-xs font-medium uppercase tracking-wider text-charcoal/50"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              autoComplete="organization"
              disabled={isSubmitting}
              className="form-input"
              placeholder="Your company (optional)"
            />
          </div>
          <div>
            <label
              htmlFor="service"
              className="mb-2 block text-xs font-medium uppercase tracking-wider text-charcoal/50"
            >
              Interested in
            </label>
            <select
              id="service"
              name="service"
              disabled={isSubmitting}
              className="form-input appearance-none"
              defaultValue=""
            >
              <option value="" disabled>
                Select a service
              </option>
              <option value="Brand Strategy">Brand Strategy</option>
              <option value="Brand Identity">Brand Identity</option>
              <option value="Website Design">Website Design</option>
              <option value="Website Development">Website Development</option>
              <option value="Full Project">Full Project</option>
              <option value="Something else">Something else</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-xs font-medium uppercase tracking-wider text-charcoal/50"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              disabled={isSubmitting}
              className="form-input min-h-[140px] resize-y"
              placeholder="Tell us about your project..."
            />
          </div>

          <Button
            type="submit"
            fullWidth
            className="sm:w-auto"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send message"}
          </Button>
        </form>
      )}
    </FadeIn>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Begin the conversation"
        description="Whether you have a fully formed brief or just a spark of an idea — we'd love to hear from you."
      />

      <section className="section-padding-sm">
        <Container>
          <div className="grid gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-24">
            <FadeIn>
              <div className="space-y-8 sm:space-y-10">
                <div>
                  <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-charcoal/50">
                    Based
                  </h2>
                  <p className="mt-2 font-serif text-xl text-charcoal sm:text-2xl">
                    {siteConfig.location}
                  </p>
                </div>
                <div>
                  <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-charcoal/50">
                    Follow
                  </h2>
                  <div className="mt-3 flex flex-col gap-3">
                    <div className="flex flex-wrap gap-4 sm:gap-6">
                      {Object.entries(siteConfig.social).map(([platform, url]) => (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="editorial-link touch-target inline-flex min-h-[44px] items-center text-sm capitalize text-charcoal/60"
                        >
                          {platform === "instagram" ? "@kymastudiogr" : platform}
                        </a>
                      ))}
                    </div>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="editorial-link touch-target inline-flex min-h-[44px] items-center text-sm text-charcoal/60"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>

            <Suspense
              fallback={
                <div className="rounded-organic border border-stone/30 bg-warm-white p-5 shadow-soft sm:p-8 md:p-10">
                  <p className="text-sm text-charcoal/50">Loading form...</p>
                </div>
              }
            >
              <ContactForm />
            </Suspense>
          </div>
        </Container>
      </section>
    </>
  );
}
