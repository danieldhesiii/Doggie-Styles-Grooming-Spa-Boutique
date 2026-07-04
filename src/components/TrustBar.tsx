import {
  Certificate,
  PawPrint,
  Star,
  Trophy,
  type Icon,
} from "@phosphor-icons/react";
import { site } from "../data/site";
import { Reveal } from "./Reveal";

type Item = { icon: Icon; title: string; sub: string };

const items: Item[] = [
  {
    icon: Star,
    title: `${site.rating.score} on Google`,
    sub: `${site.rating.count} five star reviews`,
  },
  {
    icon: Trophy,
    title: "Essex award winner",
    sub: "Best pet grooming business, two years running",
  },
  {
    icon: Certificate,
    title: "Level 3 qualified",
    sub: "Diploma groomer with 10+ years' experience",
  },
  {
    icon: PawPrint,
    title: "All breeds welcome",
    sub: "From bouncy puppies to golden oldies",
  },
];

export function TrustBar() {
  return (
    <section className="relative overflow-hidden border-y border-fawn/60 bg-champagne">
      <PawPrint
        aria-hidden
        weight="fill"
        className="pointer-events-none absolute -left-8 top-1/2 hidden h-52 w-52 -translate-y-1/2 -rotate-12 text-gold/[0.05] lg:block"
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-8 px-5 py-10 sm:px-6 lg:grid-cols-4 lg:gap-8 lg:px-8 lg:py-12">
        {items.map((item, i) => (
          <Reveal
            key={item.title}
            delay={i * 0.06}
            className="flex flex-col gap-2.5 sm:flex-row sm:gap-4"
          >
            <item.icon
              size={30}
              weight="duotone"
              className="shrink-0 text-gold sm:mt-0.5"
            />
            <div>
              <p className="text-sm font-bold sm:text-base">{item.title}</p>
              <p className="mt-0.5 text-[13px] text-taupe sm:text-sm">
                {item.sub}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
