import { useEffect, useRef } from "react";
import { ArrowUpRight, Star } from "@phosphor-icons/react";
import { useReducedMotion } from "motion/react";
import { reviews, site, type Review } from "../data/site";
import { btnDark } from "./buttons";
import { Eyebrow } from "./Eyebrow";
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
    <figure className="w-[208px] shrink-0 rounded-2xl border border-fawn bg-porcelain p-4 sm:w-[248px] sm:p-5 md:w-[288px]">
      <Stars />
      <blockquote className="mt-3 text-sm leading-relaxed text-ink sm:mt-4">
        &ldquo;{review.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-3 text-sm sm:mt-4">
        <span className="font-semibold">{review.name}</span>
        <span className="text-taupe"> &middot; {review.source}</span>
      </figcaption>
    </figure>
  );
}

export function Reviews() {
  // Repeated so the loop point is always off-screen and the user can keep
  // scrolling in either direction without hitting an end.
  const loop = [...reviews, ...reviews, ...reviews, ...reviews];
  const scrollerRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reduce = useReducedMotion();

  // Always advancing. It only pauses while the user is actively grabbing or
  // scrolling it, then resumes on its own after a moment of stillness. Plain
  // hovering does NOT stop it.
  useEffect(() => {
    if (reduce) return;
    const el = scrollerRef.current;
    if (!el) return;

    // Start one copy in so there's room to drag backwards before the loop point.
    el.scrollLeft = el.scrollWidth / 4;

    let raf = 0;
    // Faster auto-scroll on mobile so the shorter viewport still feels lively.
    const mobile = window.matchMedia("(max-width: 639px)");
    const tick = () => {
      if (!pausedRef.current) {
        const speed = mobile.matches ? 1.5 : 0.5; // px per frame
        el.scrollLeft += speed;
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
        else if (el.scrollLeft <= 0) el.scrollLeft += half;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduce]);

  const pause = () => {
    pausedRef.current = true;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  };
  const resumeSoon = () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      pausedRef.current = false;
    }, 1800);
  };

  // A drag can end with the pointer released anywhere on the page. Listening on
  // the window guarantees we always clear the drag and resume — so it can never
  // get stuck paused waiting for a click.
  useEffect(() => {
    const endDrag = () => {
      if (draggingRef.current) {
        draggingRef.current = false;
        resumeSoon();
      }
    };
    window.addEventListener("pointerup", endDrag);
    window.addEventListener("pointercancel", endDrag);
    return () => {
      window.removeEventListener("pointerup", endDrag);
      window.removeEventListener("pointercancel", endDrag);
    };
  }, []);

  return (
    <section id="reviews" className="py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <Eyebrow>Reviews</Eyebrow>
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
        <div className="relative mt-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ivory to-transparent md:w-28"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ivory to-transparent md:w-28"
          />
          <div
            ref={scrollerRef}
            className="no-scrollbar flex cursor-grab gap-5 overflow-x-auto pb-1 active:cursor-grabbing"
            onPointerDown={(e) => {
              // Mouse: click-and-drag to scrub. Touch scrolls natively.
              if (e.pointerType === "mouse") draggingRef.current = true;
              pause();
            }}
            onPointerMove={(e) => {
              if (!draggingRef.current || !scrollerRef.current) return;
              scrollerRef.current.scrollLeft -= e.movementX;
            }}
            onTouchStart={pause}
            onTouchEnd={resumeSoon}
            onWheel={() => {
              pause();
              resumeSoon();
            }}
          >
            {loop.map((review, i) => (
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
