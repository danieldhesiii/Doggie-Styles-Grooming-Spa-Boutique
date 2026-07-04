import { site } from "../data/site";

declare global {
  interface Window {
    plausible?: (event: string, opts?: { props?: Record<string, string> }) => void;
  }
}

/**
 * Loads Plausible only when a domain is configured (see site.plausibleDomain).
 * Privacy-friendly and cookie-free, so it needs no consent banner. Safe no-op
 * until the client goes live and sets their domain.
 */
export function initAnalytics() {
  if (!site.plausibleDomain || typeof document === "undefined") return;
  if (document.querySelector("script[data-plausible]")) return;

  const s = document.createElement("script");
  s.defer = true;
  s.dataset.plausible = "true";
  s.dataset.domain = site.plausibleDomain;
  s.src = "https://plausible.io/js/script.tagged-events.js";
  document.head.appendChild(s);

  // Queue events fired before the script finishes loading.
  window.plausible =
    window.plausible ||
    function (...args: unknown[]) {
      (window.plausible as unknown as { q: unknown[] }).q =
        (window.plausible as unknown as { q?: unknown[] }).q || [];
      (window.plausible as unknown as { q: unknown[] }).q.push(args);
    };
}

/** Record a conversion event (Book, Call, WhatsApp). No-op if analytics is off. */
export function track(event: string, props?: Record<string, string>) {
  window.plausible?.(event, props ? { props } : undefined);
}
