import { useEffect, useState } from "react";
import { FacebookLogo, InstagramLogo } from "@phosphor-icons/react";
import { galleryItems, site, type GalleryItem } from "../data/site";
import { btnOutline } from "./buttons";
import { Reveal } from "./Reveal";

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

  return (
    <section id="gallery" className="border-y border-fawn/60 bg-porcelain">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Fresh out of the tub
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-taupe">
            Every dog below is a real customer, straight from our Instagram.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {items.map((item) => (
              <a
                key={item.src}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${item.alt} (opens on Instagram)`}
                className={`group relative block overflow-hidden rounded-2xl ${
                  item.featured ? "col-span-2 row-span-2" : ""
                }`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="aspect-square h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </a>
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
    </section>
  );
}
