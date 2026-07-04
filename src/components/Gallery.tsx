import { useCallback, useEffect, useState } from "react";
import {
  ArrowUpRight,
  CaretLeft,
  CaretRight,
  FacebookLogo,
  InstagramLogo,
  MagnifyingGlassPlus,
  X,
} from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { galleryItems, site, type GalleryItem } from "../data/site";
import { btnOutline } from "./buttons";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

/**
 * Bundled gallery photos ship with pre-generated -480/-960 variants; live
 * feed images (remote URLs) have none, so they get no srcset.
 */
function responsiveVariants(src: string, featured?: boolean) {
  if (!src.startsWith("/gallery/")) return {};
  const base = src.replace(/\.jpg$/, "");
  return {
    srcSet: `${base}-480.jpg 480w, ${base}-960.jpg 960w, ${src} 1080w`,
    sizes: featured
      ? "(min-width: 768px) 50vw, 33vw"
      : "(min-width: 768px) 25vw, 33vw",
  };
}

/**
 * When site.instagramFeedUrl is set (a Behold JSON feed), the grid swaps to
 * live Instagram posts so new uploads appear here automatically.
 */
function useGallery(): GalleryItem[] {
  const [items, setItems] = useState(galleryItems);

  useEffect(() => {
    if (!site.instagramFeedUrl) return;
    const controller = new AbortController();
    fetch(site.instagramFeedUrl, { signal: controller.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`${r.status}`))))
      .then((data: unknown) => {
        const posts = Array.isArray(data)
          ? data
          : ((data as { posts?: unknown[] }).posts ?? []);
        const live = posts
          .map((p) => {
            const post = p as Record<string, string | undefined>;
            const src = post.mediaUrl ?? post.media_url;
            const href = post.permalink ?? site.instagram;
            if (!src) return null;
            return {
              src,
              href,
              alt: post.caption?.slice(0, 100) ?? "Instagram post from Doggie Styles",
            };
          })
          .filter((p): p is GalleryItem => p !== null)
          .slice(0, 9)
          .map((p, i) => ({ ...p, featured: i === 0 }));
        if (live.length >= 4) setItems(live);
      })
      .catch(() => {
        /* live feed unavailable, bundled photos stay */
      });
    return () => controller.abort();
  }, []);

  return items;
}

export function Gallery() {
  const items = useGallery();
  const [active, setActive] = useState<number | null>(null);
  const reduce = useReducedMotion();

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: number) =>
      setActive((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length],
  );

  // Keyboard navigation + body scroll-lock while the lightbox is open.
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [active, close, step]);

  const current = active === null ? null : items[active];

  return (
    <section id="gallery" className="border-y border-fawn/60 bg-porcelain">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Our work</Eyebrow>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Fresh out of the tub
          </h2>
          <p className="mt-4 text-base leading-relaxed text-taupe sm:text-lg">
            Every dog below is a real customer, straight from our Instagram.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 grid grid-cols-3 gap-2.5 sm:grid-cols-3 md:grid-cols-4 md:gap-4">
            {items.map((item, i) => (
              <button
                key={item.src}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`View ${item.alt}`}
                className={`group relative block overflow-hidden rounded-xl md:rounded-2xl ${
                  item.featured ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <img
                  src={item.src}
                  {...responsiveVariants(item.src, item.featured)}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-square h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-300 group-hover:bg-ink/25 group-hover:opacity-100 group-focus-visible:bg-ink/25 group-focus-visible:opacity-100"
                >
                  <span className="rounded-full bg-porcelain/90 p-2.5 text-ink backdrop-blur-sm">
                    <MagnifyingGlassPlus size={20} weight="bold" />
                  </span>
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btnOutline} px-6 py-3`}
            >
              <InstagramLogo size={20} className="text-gold" />
              Follow {site.instagramHandle}
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btnOutline} px-6 py-3`}
            >
              <FacebookLogo size={20} className="text-gold" />
              Find us on Facebook
            </a>
          </div>
        </Reveal>
      </div>

      <AnimatePresence>
        {current && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-full bg-ivory/10 p-2.5 text-ivory transition-colors hover:bg-ivory/20"
            >
              <X size={22} weight="bold" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous photo"
              className="absolute left-3 rounded-full bg-ivory/10 p-2.5 text-ivory transition-colors hover:bg-ivory/20 sm:left-6"
            >
              <CaretLeft size={24} weight="bold" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next photo"
              className="absolute right-3 rounded-full bg-ivory/10 p-2.5 text-ivory transition-colors hover:bg-ivory/20 sm:right-6"
            >
              <CaretRight size={24} weight="bold" />
            </button>

            <motion.figure
              key={current.src}
              initial={reduce ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex max-h-[86vh] w-full max-w-lg flex-col overflow-hidden rounded-2xl bg-porcelain"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={current.src}
                {...responsiveVariants(current.src)}
                alt={current.alt}
                className="max-h-[70vh] w-full object-contain"
              />
              <figcaption className="flex items-center justify-between gap-4 px-5 py-4">
                <p className="text-sm leading-snug text-taupe">{current.alt}</p>
                <a
                  href={current.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-gold underline-offset-4 hover:underline"
                >
                  Instagram
                  <ArrowUpRight size={15} weight="bold" />
                </a>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
