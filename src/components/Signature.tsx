import {
  PawPrint,
  Scissors,
  Sparkle,
  Storefront,
  Van,
  type Icon,
} from "@phosphor-icons/react";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

type Feature = { icon: Icon; title: string; body: string };

const specialist: Feature[] = [
  {
    icon: Scissors,
    title: "Hand stripping",
    body: "A traditional skill many salons no longer offer. We hand strip wire-coated terriers and schnauzers so the coat keeps its real texture and colour, never just clipped off.",
  },
  {
    icon: Sparkle,
    title: "Emmi-pet teeth cleaning",
    body: "Silent, brush-free ultrasonic cleaning with no scary noise or vibration. Gentle enough for nervous dogs and brilliant for healthy teeth and fresh breath.",
  },
];

const extras: Feature[] = [
  {
    icon: Van,
    title: "Local pick up & drop off",
    body: "Can't make it in? We collect and return dogs locally around Wickford by arrangement.",
  },
  {
    icon: Storefront,
    title: "In-house boutique",
    body: "Browse Pawsome Paws and Houndsly collars, leads and accessories while you wait.",
  },
];

export function Signature() {
  return (
    <section className="relative overflow-hidden border-y border-fawn/60 bg-porcelain">
      <PawPrint
        aria-hidden
        weight="fill"
        className="pointer-events-none absolute -right-10 -top-10 hidden h-64 w-64 rotate-12 text-gold/[0.05] md:block"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Why Doggie Styles</Eyebrow>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            What sets us apart
          </h2>
          <p className="mt-4 text-base leading-relaxed text-taupe sm:text-lg">
            Award-winning, Level 3 qualified and trusted with specialist coats
            most salons turn away.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:gap-6 md:grid-cols-2">
          {specialist.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-fawn bg-ivory p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-champagne">
                  <f.icon size={26} weight="duotone" className="text-gold" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{f.title}</h3>
                <p className="mt-2 leading-relaxed text-taupe">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:mt-8 sm:grid-cols-2 sm:gap-6">
          {extras.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <div className="flex gap-4 rounded-2xl border border-fawn/70 bg-ivory p-5">
                <f.icon
                  size={26}
                  weight="duotone"
                  className="mt-0.5 shrink-0 text-gold"
                />
                <div>
                  <h3 className="font-bold">{f.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-taupe">
                    {f.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
