import { ArrowRight, ChatCircleDots, Phone } from "@phosphor-icons/react";
import { priceGuide, site, whatsappUrl } from "../data/site";
import { track } from "../lib/analytics";
import { btnOutline, btnPrimary } from "./buttons";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

/** Pre-fills WhatsApp with the size the owner tapped, so quotes are quicker. */
function quoteUrl(size: string) {
  const msg = `Hi Doggie Styles, please could I get a quote for a ${size.toLowerCase()} dog groom?`;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
}

export function PriceGuide() {
  const hasPrices = priceGuide.some((r) => r.fullGroom || r.bathTidy);

  return (
    <section id="prices" className="border-y border-fawn/60 bg-champagne">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Pricing</Eyebrow>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Grooming price guide
          </h2>
          <p className="mt-4 text-base leading-relaxed text-taupe sm:text-lg">
            Every dog is different, so your price depends on size, breed, coat
            type and condition. Here's a guide, and there are never any hidden
            extras added on the day.
          </p>
        </Reveal>

        {hasPrices ? (
          <Reveal delay={0.1}>
            <div className="mt-10 overflow-hidden rounded-2xl border border-fawn bg-ivory">
              <table className="w-full text-left">
                <thead className="bg-ink text-ivory">
                  <tr>
                    <th className="px-5 py-4 text-sm font-semibold">Size</th>
                    <th className="hidden px-5 py-4 text-sm font-semibold sm:table-cell">
                      Example breeds
                    </th>
                    <th className="px-5 py-4 text-sm font-semibold">Full groom</th>
                    <th className="px-5 py-4 text-sm font-semibold">Bath &amp; tidy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-fawn/70">
                  {priceGuide.map((row) => (
                    <tr key={row.size}>
                      <td className="px-5 py-4 font-semibold">{row.size}</td>
                      <td className="hidden px-5 py-4 text-sm text-taupe sm:table-cell">
                        {row.examples}
                      </td>
                      <td className="px-5 py-4">{row.fullGroom ?? "Ask us"}</td>
                      <td className="px-5 py-4">{row.bathTidy ?? "Ask us"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        ) : (
          <Reveal delay={0.1}>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              {priceGuide.map((row) => (
                <a
                  key={row.size}
                  href={quoteUrl(row.size)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("WhatsApp", { location: "price-card" })}
                  className="group flex flex-col rounded-2xl border border-fawn bg-ivory p-5 transition-colors hover:border-gold hover:bg-porcelain sm:p-6"
                >
                  <p className="font-bold sm:text-lg">{row.size}</p>
                  <p className="mt-1 text-[13px] text-taupe sm:text-sm">
                    {row.examples}
                  </p>
                  <p className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold text-gold sm:mt-5 sm:text-sm">
                    Get a quote
                    <ArrowRight
                      size={14}
                      weight="bold"
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </p>
                </a>
              ))}
            </div>
          </Reveal>
        )}

        <Reveal delay={0.05}>
          <div className="mt-6 flex flex-col items-start justify-between gap-5 rounded-2xl bg-ivory p-6 md:flex-row md:items-center md:p-8">
            <p className="max-w-[46ch] leading-relaxed text-ink">
              Tell us your dog's breed and we'll give you an exact price in
              minutes. No obligation, no surprises.
            </p>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("WhatsApp", { location: "prices" })}
                className={`${btnPrimary} px-6 py-3.5`}
              >
                <ChatCircleDots size={20} weight="fill" />
                Get a quote on WhatsApp
              </a>
              <a
                href={site.phoneHref}
                onClick={() => track("Call", { location: "prices" })}
                className={`${btnOutline} px-6 py-3.5`}
              >
                <Phone size={20} weight="fill" className="text-gold" />
                Call us
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
