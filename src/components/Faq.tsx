import { CaretDown } from "@phosphor-icons/react";
import { faqs } from "../data/site";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

export function Faq() {
  // FAQPage structured data, generated from the same content shown below so
  // the two never drift apart. Earns FAQ rich results in Google search.
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Reveal>
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Questions, answered
        </h2>
        <p className="mt-4 text-base leading-relaxed text-taupe sm:text-lg">
          Everything owners usually ask before their dog's first visit.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 divide-y divide-fawn/70 border-y border-fawn/70">
          {faqs.map((f) => (
            <details key={f.q} className="group py-2">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                {f.q}
                <CaretDown
                  size={20}
                  className="shrink-0 text-gold transition-transform duration-300 group-open:rotate-180"
                />
              </summary>
              <p className="pb-5 pr-8 leading-relaxed text-taupe">{f.a}</p>
            </details>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
