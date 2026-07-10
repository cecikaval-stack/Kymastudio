import Link from "next/link";
import { navigation, siteConfig } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { WaveLogo } from "@/components/ui/WaveLogo";
import { WaveLine } from "@/components/ui/WaveLine";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-stone/30 bg-sand/30">
      <Container className="section-padding-sm">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 text-charcoal"
              aria-label={`${siteConfig.name} — Home`}
            >
              <WaveLogo className="h-5 w-12 text-mediterranean" />
              <span className="font-serif text-xl">Kyma Studio</span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-charcoal/60">
              An independent creative and branding studio — helping businesses
              grow through strategy, design and digital marketing.
            </p>
            <p className="mt-4 font-serif text-sm italic text-olive">
              κύμα — wave
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-charcoal/50">
              Navigate
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="editorial-link text-sm text-charcoal/70"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-charcoal/50">
              Connect
            </h3>
            <ul className="space-y-3 text-sm text-charcoal/70">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="editorial-link">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="editorial-link">
                  {siteConfig.phone}
                </a>
              </li>
              <li>{siteConfig.location}</li>
            </ul>
            <div className="mt-6 flex gap-6">
              {Object.entries(siteConfig.social).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link text-xs uppercase tracking-wider text-charcoal/50"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-6 border-t border-stone/20 pt-10 md:flex-row md:justify-between">
          <WaveLine className="max-w-xs opacity-40" color="#CFC8BE" />
          <p className="text-xs text-charcoal/40">
            © {currentYear} {siteConfig.name}. Crafted with intention.
          </p>
        </div>
      </Container>
    </footer>
  );
}
