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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-latte/70 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <img
            src="/logo.jpg"
            alt=""
            width={44}
            height={44}
            className="h-11 w-11 rounded-full border border-latte object-cover"
          />
          <span className="leading-tight">
            <span className="block text-[17px] font-bold tracking-tight">
              {site.name}
            </span>
            <span className="block text-[11px] font-medium text-cocoa">
              Grooming Spa &amp; Boutique
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-cocoa transition-colors hover:text-espresso"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 text-sm font-semibold text-espresso transition-colors hover:text-clay md:flex"
          >
            <Phone size={18} weight="fill" className="text-clay" />
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
            className="rounded-full p-2 text-espresso lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-latte/70 bg-cream px-4 pb-6 pt-3 lg:hidden"
          aria-label="Mobile"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-3 text-base font-medium text-espresso hover:bg-sand"
            >
              {l.label}
            </a>
          ))}
          <a
            href={site.phoneHref}
            className="mt-2 flex items-center gap-2 px-3 text-base font-semibold text-clay"
          >
            <Phone size={18} weight="fill" />
            Call {site.phoneDisplay}
          </a>
        </nav>
      )}
    </header>
  );
}
