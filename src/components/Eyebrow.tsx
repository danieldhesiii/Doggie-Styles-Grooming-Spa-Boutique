import { PawPrint } from "@phosphor-icons/react";

/**
 * Small uppercase kicker that sits above a section heading. Adds editorial
 * structure and a touch of the gold accent without shouting.
 */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-4 flex w-fit items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
      <PawPrint size={15} weight="fill" />
      {children}
      <span aria-hidden className="h-px w-8 bg-gold/40" />
    </span>
  );
}
