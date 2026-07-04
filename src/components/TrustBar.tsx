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
    <section className="border-y border-fawn/60 bg-champagne">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06} className="flex gap-4">
            <item.icon
              size={30}
              weight="duotone"
              className="mt-0.5 shrink-0 text-gold"
            />
            <div>
              <p className="font-bold">{item.title}</p>
              <p className="mt-0.5 text-sm text-taupe">{item.sub}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
