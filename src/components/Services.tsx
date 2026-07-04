import { useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { serviceCategories, site } from "../data/site";
import { track } from "../lib/analytics";
import { btnPrimary } from "./buttons";
import { Reveal } from "./Reveal";

export function Services() {
  const [activeId, setActiveId] = useState(serviceCategories[0].id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const reduce = useReducedMotion();
  const active = serviceCategories.find((c) => c.id === activeId)!;

  const onTabKeyDown = (e: React.KeyboardEvent) => {
    const count = serviceCategories.length;
    const current = serviceCategories.findIndex((c) => c.id === activeId);
    let next = -1;
    if (e.key === "ArrowRight") next = (current + 1) % count;
    if (e.key === "ArrowLeft") next = (current - 1 + count) % count;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = count - 1;
    if (next >= 0) {
      e.preventDefault();
      setActiveId(serviceCategories[next].id);
      tabRefs.current[next]?.focus();
    }
  };

  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <Reveal className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          The grooming menu
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-taupe">
          Pick a category to see what's included. Not sure what your dog
          needs? Give us a ring and we'll talk it through.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div
          role="tablist"
          aria-label="Service categories"
          onKeyDown={onTabKeyDown}
          className="mt-10 flex flex-wrap gap-2.5"
        >
          {serviceCategories.map((cat, i) => {
            const selected = cat.id === activeId;
            return (
              <button
                key={cat.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                aria-selected={selected}
                aria-controls={`panel-${cat.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveId(cat.id)}
                className={`rounded-full border-2 px-5 py-2.5 text-sm font-semibold transition-colors ${
                  selected
                    ? "border-ink bg-ink text-ivory"
                    : "border-fawn bg-transparent text-taupe hover:border-ink/50 hover:text-ink"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </Reveal>

      <motion.div
        key={active.id}
        id={`panel-${active.id}`}
        role="tabpanel"
        initial={reduce ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="mt-8 rounded-2xl border border-fawn bg-porcelain p-6 md:p-10"
      >
        <p className="text-sm font-semibold text-gold">{active.intro}</p>
        <ul className="mt-4 divide-y divide-fawn/70">
          {active.services.map((s) => (
            <li
              key={s.name}
              className="flex items-baseline justify-between gap-6 py-5 first:pt-2 last:pb-2"
            >
              <div>
                <h3 className="text-lg font-semibold">{s.name}</h3>
                <p className="mt-1 max-w-[58ch] text-[15px] leading-relaxed text-taupe">
                  {s.description}
                </p>
              </div>
              {s.price && (
                <span className="whitespace-nowrap font-semibold">
                  {s.price}
                </span>
              )}
            </li>
          ))}
        </ul>
      </motion.div>

      <Reveal delay={0.05}>
        <div className="mt-6 flex flex-col items-start justify-between gap-5 rounded-2xl bg-champagne p-6 md:flex-row md:items-center md:p-8">
          <p className="max-w-[52ch] leading-relaxed text-ink">
            Not sure which groom your dog needs? Check the{" "}
            <a href="#prices" className="font-semibold text-gold underline underline-offset-4">
              price guide
            </a>{" "}
            or book online and we'll confirm everything with you.
          </p>
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("Book", { location: "services" })}
            className={`${btnPrimary} shrink-0 px-7 py-3.5`}
          >
            Book Online
          </a>
        </div>
      </Reveal>
    </section>
  );
}
