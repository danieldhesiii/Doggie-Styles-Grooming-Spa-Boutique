import { ArrowUpRight, Star } from "@phosphor-icons/react";
import { reviews, site, type Review } from "../data/site";
import { btnDark } from "./buttons";
import { Reveal } from "./Reveal";

function Stars({ size = 16 }: { size?: number }) {
  return (
    <span className="flex gap-0.5" aria-hidden>
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} size={size} weight="fill" className="text-gold" />
      ))}
    </span>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="w-[300px] shrink-0 rounded-2xl border border-fawn bg-porcelain p-6 md:w-[360px]">
      <Stars />
      <blockquote className="mt-4 text-[15px] leading-relaxed text-ink">
        &ldquo;{review.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-4 text-sm">
        <span className="font-semibold">{review.name}</span>
        <span className="text-taupe"> &middot; {review.source}</span>
      </figcaption>
    </figure>
  );
}

export function Reviews() {
  // Two identical halves, so the -50% keyframe loop is seamless.
  const track = [...reviews, ...reviews, ...reviews, ...reviews];

  return (
    <section id="reviews" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Owners rate us five stars
              </h2>
              <p className="mt-4 flex items-center gap-3 text-lg text-taupe">
                <Stars size={20} />
                {site.rating.score} from {site.rating.count} Google reviews
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={site.reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${btnDark} px-6 py-3 text-sm`}
              >
                Leave a review
              </a>
              <a
                href={site.reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-ink underline-offset-4 hover:underline"
              >
                Read all reviews
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="group relative mt-12 overflow-hidden motion-reduce:overflow-x-auto">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ivory to-transparent md:w-28"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ivory to-transparent md:w-28"
          />
          <div className="flex w-max gap-5 pb-1 animate-marquee group-hover:[animation-play-state:paused]">
            {track.map((review, i) => (
              <div key={i} aria-hidden={i >= reviews.length}>
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
