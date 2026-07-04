import { useRef, useState } from "react";
import { ArrowsHorizontal } from "@phosphor-icons/react";
import { beforeAfterPairs, type BeforeAfterPair } from "../data/site";
import { Reveal } from "./Reveal";

function Slider({ pair }: { pair: BeforeAfterPair }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = (clientX: number) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  };

  return (
    <figure>
      <div
        ref={ref}
        className="relative aspect-[4/3] w-full touch-pan-y select-none overflow-hidden rounded-2xl"
        onPointerDown={(e) => {
          dragging.current = true;
          setFromClientX(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && setFromClientX(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        onPointerLeave={() => (dragging.current = false)}
      >
        {/* After fills the frame */}
        <img
          src={pair.after}
          alt={`${pair.label}, after grooming`}
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
        {/* Before clipped to the left of the divider */}
        <img
          src={pair.before}
          alt={`${pair.label}, before grooming`}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          draggable={false}
        />

        <span className="absolute left-3 top-3 rounded-full bg-ink/70 px-2.5 py-1 text-xs font-semibold text-ivory backdrop-blur-sm">
          Before
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-gold px-2.5 py-1 text-xs font-semibold text-ivory">
          After
        </span>

        {/* Divider handle */}
        <div
          className="absolute inset-y-0 w-0.5 bg-ivory"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ivory text-ink shadow-md">
            <ArrowsHorizontal size={18} weight="bold" />
          </span>
        </div>

        {/* Keyboard-accessible control */}
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={`Reveal ${pair.label} before and after grooming`}
          className="absolute inset-x-0 bottom-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <figcaption className="mt-3 text-sm text-taupe">{pair.label}</figcaption>
    </figure>
  );
}

export function BeforeAfter() {
  if (beforeAfterPairs.length === 0) return null;

  return (
    <section id="transformations" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <Reveal className="max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          The Doggie Styles difference
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-taupe">
          Drag the slider to see the transformation. Real dogs, before and
          after their spa day with us.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {beforeAfterPairs.map((pair) => (
            <Slider key={pair.after} pair={pair} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
