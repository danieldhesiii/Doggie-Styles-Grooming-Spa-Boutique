import {
  FacebookLogo,
  InstagramLogo,
  PawPrint,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { serviceCategories, site, whatsappUrl } from "../data/site";
import { track } from "../lib/analytics";
import { btnOnDark, btnPrimary } from "./buttons";
import { Reveal } from "./Reveal";

const exploreLinks = [
  { href: "#services", label: "Services" },
  { href: "#prices", label: "Prices" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#about", label: "About" },
  { href: "#visit", label: "Find Us" },
];

export function Footer() {
  return (
    <div className="bg-night text-ivory">
      {/* Closing call to action */}
      <div className="relative overflow-hidden">
        <PawPrint
          aria-hidden
          weight="fill"
          className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rotate-12 text-gold/[0.06]"
        />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <Reveal>
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                Ready for their spa day?
              </h2>
              <p className="mt-4 max-w-[48ch] text-lg leading-relaxed text-ivory/70">
                Book online in a couple of minutes, or give us a ring and
                we'll find a slot that suits you both.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("Book", { location: "footer" })}
                className={`${btnPrimary} px-8 py-4 text-base`}
              >
                Book Online
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("WhatsApp", { location: "footer" })}
                className={`${btnOnDark} px-8 py-4 text-base`}
              >
                <WhatsappLogo size={20} weight="fill" />
                WhatsApp us
              </a>
            </div>
          </div>
          </Reveal>
        </div>
      </div>

      <footer className="border-t border-ivory/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/logo.jpg"
                alt=""
                width={44}
                height={44}
                className="h-11 w-11 rounded-full border border-ivory/20 object-cover"
              />
              <span className="leading-tight">
                <span className="block font-bold">{site.name}</span>
                <span className="block text-[11px] text-ivory/60">
                  Grooming Spa &amp; Boutique
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-[32ch] text-sm leading-relaxed text-ivory/60">
              Multi award winning dog grooming salon and boutique in Wickford,
              Essex.
            </p>
            <div className="mt-5 flex gap-4">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Doggie Styles on Instagram"
                className="text-ivory/70 transition-colors hover:text-ivory"
              >
                <InstagramLogo size={24} />
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Doggie Styles on Facebook"
                className="text-ivory/70 transition-colors hover:text-ivory"
              >
                <FacebookLogo size={24} />
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <p className="text-sm font-bold uppercase tracking-wide text-ivory/50">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5">
              {exploreLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-ivory/70 transition-colors hover:text-ivory"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-ivory/50">
              Services
            </p>
            <ul className="mt-4 space-y-2.5">
              {serviceCategories.map((c) => (
                <li key={c.id}>
                  <a
                    href="#services"
                    className="text-sm text-ivory/70 transition-colors hover:text-ivory"
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-ivory/50">
              Contact
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-ivory/70">
              <li>
                <a href={site.phoneHref} className="transition-colors hover:text-ivory">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="break-all transition-colors hover:text-ivory"
                >
                  {site.email}
                </a>
              </li>
              <li>
                {site.address.line1}
                <br />
                {site.address.line2}, {site.address.postcode}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ivory/10">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-5 pb-24 pt-6 text-xs text-ivory/50 sm:px-6 md:flex-row md:pb-6 lg:px-8">
            <p>
              &copy; {new Date().getFullYear()} {site.fullName}. All rights
              reserved.
            </p>
            <p>
              Appointments powered by{" "}
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-ivory"
              >
                ShakeYourTail
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
