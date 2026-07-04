import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative order-last lg:order-first">
          <div
            aria-hidden
            className="absolute -bottom-4 -left-4 h-full w-full rounded-2xl bg-sand md:-bottom-5 md:-left-5"
          />
          <img
            src="/gallery/ig-11.jpg"
            alt="Harriot on the podium at the Diamex Master Groomer competition in Belgium"
            loading="lazy"
            width={1080}
            height={1350}
            className="relative aspect-[4/5] w-full rounded-2xl object-cover"
          />
          <p className="mt-4 text-sm text-cocoa">
            Third place at the Diamex Master Groomer show in Belgium.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Grooming that keeps winning awards
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-cocoa">
            <p>
              Doggie Styles is an independent salon inside Alpha Garden
              Centre, run by a Level 3 diploma qualified groomer with more
              than ten years behind the scissors. Every dog is groomed at
              their own pace, from bouncy puppies to golden oldies.
            </p>
            <p>
              The trophy shelf is getting crowded: Best Pet Grooming Business
              in Essex two years running, 2024 and 2025, plus a third place
              finish against international groomers at the Diamex Master
              Groomer show in Belgium.
            </p>
            <p>
              While you wait, have a browse of the boutique. We stock Pawsome
              Paws Boutique and Houndsly collars, leads and accessories. And
              if you're local, ask us about pick up and drop off around
              Wickford.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
