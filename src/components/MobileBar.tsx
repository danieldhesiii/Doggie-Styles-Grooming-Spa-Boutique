import { CalendarCheck, Phone } from "@phosphor-icons/react";
import { site } from "../data/site";

/** Sticky call/book bar so the two key actions are always one tap away on phones. */
export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-fawn bg-porcelain/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden">
      <a
        href={site.phoneHref}
        className="flex items-center justify-center gap-2 py-4 font-semibold text-ink active:bg-champagne"
      >
        <Phone size={20} weight="fill" className="text-gold" />
        Call us
      </a>
      <a
        href={site.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-gold py-4 font-semibold text-ivory active:bg-gold-deep"
      >
        <CalendarCheck size={20} weight="fill" />
        Book Online
      </a>
    </div>
  );
}
