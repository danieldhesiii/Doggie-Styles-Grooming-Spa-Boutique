import { CalendarCheck, Phone, WhatsappLogo } from "@phosphor-icons/react";
import { site, whatsappUrl } from "../data/site";
import { track } from "../lib/analytics";

/** Sticky call/message/book bar so the key actions are always one tap away on phones. */
export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-fawn bg-porcelain/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-6px_20px_rgba(33,28,21,0.08)] backdrop-blur md:hidden">
      <a
        href={site.phoneHref}
        onClick={() => track("Call", { location: "mobile-bar" })}
        className="flex flex-col items-center justify-center gap-1 py-3 text-xs font-semibold text-ink active:bg-champagne"
      >
        <Phone size={22} weight="fill" className="text-gold" />
        Call
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("WhatsApp", { location: "mobile-bar" })}
        className="flex flex-col items-center justify-center gap-1 border-x border-fawn py-3 text-xs font-semibold text-ink active:bg-champagne"
      >
        <WhatsappLogo size={22} weight="fill" className="text-gold" />
        WhatsApp
      </a>
      <a
        href={site.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("Book", { location: "mobile-bar" })}
        className="flex flex-col items-center justify-center gap-1 bg-gold py-3 text-xs font-semibold text-ivory active:bg-gold-deep"
      >
        <CalendarCheck size={22} weight="fill" />
        Book
      </a>
    </div>
  );
}
