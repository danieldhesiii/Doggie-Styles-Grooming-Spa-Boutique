import { Phone, Trophy } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { site } from "../data/site";
import { track } from "../lib/analytics";
import { btnOutline, btnPrimary } from "./buttons";

export function Hero() {
  const reduce = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section id="top" className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
      <div className="grid items-center gap-10 py-10 md:py-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <motion.p
            {...fadeUp(0)}
            className="inline-flex max-w-full items-center gap-2 rounded-full bg-champagne px-4 py-2 text-xs font-semibold leading-snug text-ink"
          >
            <Trophy size={16} weight="fill" className="text-gold" />
            Best Pet Grooming Business in Essex, 2024 &amp; 2025
          </motion.p>

          <motion.h1
            {...fadeUp(0.08)}
            className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl"
          >
            A proper spa day for your dog
          </motion.h1>

          <motion.p
            {...fadeUp(0.16)}
            className="mt-5 max-w-[46ch] text-lg leading-relaxed text-taupe"
          >
            Multi award winning grooming salon inside Alpha Garden Centre,
            Wickford. Level 3 qualified, over ten years' experience, every
            breed welcome.
          </motion.p>

          <motion.div
            {...fadeUp(0.24)}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("Book", { location: "hero" })}
              className={`${btnPrimary} px-7 py-3.5 text-base`}
            >
              Book Online
            </a>
            <a
              href={site.phoneHref}
              onClick={() => track("Call", { location: "hero" })}
              className={`${btnOutline} px-7 py-3.5 text-base`}
            >
              <Phone size={20} weight="fill" className="text-gold" />
              {site.phoneDisplay}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div
            aria-hidden
            className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl bg-champagne md:-bottom-5 md:-right-5"
          />
          <img
            src="/gallery/ig-01.jpg"
            srcSet="/gallery/ig-01-480.jpg 480w, /gallery/ig-01-960.jpg 960w, /gallery/ig-01.jpg 1080w"
            sizes="(min-width: 1024px) 45vw, 100vw"
            alt="A freshly groomed cockapoo sitting on the salon floor at Doggie Styles"
            width={1080}
            height={1080}
            fetchPriority="high"
            className="relative aspect-[4/3] w-full rounded-2xl object-cover lg:aspect-[4/5]"
          />
        </motion.div>
      </div>
    </section>
  );
}
