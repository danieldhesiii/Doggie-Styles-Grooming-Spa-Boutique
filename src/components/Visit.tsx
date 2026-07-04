import {
  ArrowUpRight,
  Clock,
  EnvelopeSimple,
  MapPin,
  Phone,
} from "@phosphor-icons/react";
import { site } from "../data/site";
import { Reveal } from "./Reveal";

export function Visit() {
  return (
    <section id="visit" className="border-t border-fawn/60 bg-champagne/50">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Come and find us
            </h2>
            <p className="mt-4 max-w-[46ch] text-lg leading-relaxed text-taupe">
              We're inside Alpha Garden Centre on London Road, with plenty of
              free parking right outside the door.
            </p>

            <div className="mt-10 space-y-8">
              <div className="flex gap-4">
                <MapPin size={26} weight="duotone" className="mt-1 shrink-0 text-gold" />
                <div>
                  <p className="font-bold">Address</p>
                  <p className="mt-1 text-taupe">
                    {site.address.line1}
                    <br />
                    {site.address.line2}
                    <br />
                    {site.address.postcode}
                  </p>
                  <a
                    href={site.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 font-semibold text-gold underline-offset-4 hover:underline"
                  >
                    Get directions
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock size={26} weight="duotone" className="mt-1 shrink-0 text-gold" />
                <div className="grow">
                  <p className="font-bold">Opening hours</p>
                  <dl className="mt-2 max-w-xs space-y-1.5">
                    {site.hours.map((h) => (
                      <div key={h.days} className="flex justify-between gap-6">
                        <dt className="text-taupe">{h.days}</dt>
                        <dd
                          className={
                            h.time === "Closed"
                              ? "text-taupe/70"
                              : "font-medium"
                          }
                        >
                          {h.time}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone size={26} weight="duotone" className="mt-1 shrink-0 text-gold" />
                <div>
                  <p className="font-bold">Call or text</p>
                  <a
                    href={site.phoneHref}
                    className="mt-1 inline-block text-xl font-semibold text-ink underline-offset-4 hover:underline"
                  >
                    {site.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <EnvelopeSimple size={26} weight="duotone" className="mt-1 shrink-0 text-gold" />
                <div>
                  <p className="font-bold">Email</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-1 inline-block break-all text-taupe underline-offset-4 hover:underline"
                  >
                    {site.email}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="min-h-[420px]">
            <iframe
              src={site.mapEmbedUrl}
              title="Map showing Doggie Styles Grooming Spa & Boutique at Alpha Garden Centre, Wickford"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="h-full min-h-[420px] w-full rounded-2xl border border-fawn"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
