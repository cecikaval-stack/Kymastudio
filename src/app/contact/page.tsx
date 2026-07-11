"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/data";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

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
                    Email
                  </h2>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="editorial-link mt-2 inline-block break-all font-serif text-xl text-charcoal sm:break-normal sm:text-2xl"
                  >
                    {siteConfig.email}
                  </a>
                </div>
                <div>
                  <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-charcoal/50">
                    Phone
                  </h2>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="editorial-link touch-target mt-2 inline-flex items-center font-serif text-xl text-charcoal sm:text-2xl"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
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
                  <div className="mt-3 flex flex-wrap gap-4 sm:gap-6">
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
                </div>
              </div>
            </FadeIn>

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
                  onSubmit={handleSubmit}
                  className="space-y-5 rounded-organic border border-stone/30 bg-warm-white p-5 shadow-soft sm:space-y-6 sm:p-8 md:p-10"
                >
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
                      className="form-input appearance-none"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option value="brand-strategy">Brand Strategy</option>
                      <option value="brand-identity">Brand Identity</option>
                      <option value="website-design">Website Design</option>
                      <option value="website-development">Website Development</option>
                      <option value="full-project">Full Project</option>
                      <option value="other">Something else</option>
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
                      className="form-input min-h-[140px] resize-y"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <Button type="submit" fullWidth className="sm:w-auto">
                    Send message
                  </Button>
                </form>
              )}
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
