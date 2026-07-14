import Link from "next/link";
import { navigation, siteConfig } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { WaveLogo } from "@/components/ui/WaveLogo";
import { WaveLine } from "@/components/ui/WaveLine";
import { InstagramIcon, MailIcon } from "@/components/ui/Icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-stone/30 bg-sand/30">
      <Container className="section-padding-sm">
        <div className="grid gap-12 sm:gap-16 md:grid-cols-2 lg:grid-cols-4">
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
            <ul className="space-y-2 sm:space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="editorial-link touch-target inline-flex min-h-[44px] items-center text-sm text-charcoal/70"
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
            <p className="text-sm text-charcoal/70">{siteConfig.location}</p>
            <div className="mt-6 flex flex-col gap-1">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-link touch-target inline-flex min-h-[44px] items-center gap-2.5 text-xs uppercase tracking-wider text-charcoal/50"
              >
                <InstagramIcon className="h-4 w-4" />
                @kymastudiogr
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="editorial-link touch-target inline-flex min-h-[44px] items-center gap-2.5 text-xs text-charcoal/50"
              >
                <MailIcon className="h-4 w-4" />
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-stone/20 pt-8 text-center sm:mt-16 sm:gap-6 sm:pt-10 md:flex-row md:justify-between md:text-left">
          <WaveLine className="max-w-xs opacity-40" color="#CFC8BE" />
          <p className="text-xs text-charcoal/40">
            © {currentYear} {siteConfig.name}. Crafted with intention.
          </p>
        </div>
      </Container>
    </footer>
  );
}
