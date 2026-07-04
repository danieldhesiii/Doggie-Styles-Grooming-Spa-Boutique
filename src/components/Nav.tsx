import { useState } from "react";
import { List, Phone, X } from "@phosphor-icons/react";
import { site } from "../data/site";
import { btnPrimary } from "./buttons";

const links = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#about", label: "About" },
  { href: "#visit", label: "Find Us" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-fawn/70 bg-ivory/90 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <img
            src="/logo.jpg"
            alt=""
            width={44}
            height={44}
            className="h-11 w-11 rounded-full border border-fawn object-cover"
          />
          <span className="leading-tight">
            <span className="block text-[17px] font-bold tracking-tight">
              {site.name}
            </span>
            <span className="block text-[11px] font-medium text-taupe">
              Grooming Spa &amp; Boutique
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-taupe transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-gold md:flex"
          >
            <Phone size={18} weight="fill" className="text-gold" />
            {site.phoneDisplay}
          </a>
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${btnPrimary} px-5 py-2.5 text-sm`}
          >
            Book Online
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full p-2 text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          className="border-t border-fawn/70 bg-ivory px-4 pb-6 pt-3 lg:hidden"
          aria-label="Mobile"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-3 text-base font-medium text-ink hover:bg-champagne"
            >
              {l.label}
            </a>
          ))}
          <a
            href={site.phoneHref}
            className="mt-2 flex items-center gap-2 px-3 text-base font-semibold text-gold"
          >
            <Phone size={18} weight="fill" />
            Call {site.phoneDisplay}
          </a>
        </nav>
      )}
    </header>
  );
}
