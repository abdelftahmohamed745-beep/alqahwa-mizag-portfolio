"use client";

import { useCallback, useRef, useState } from "react";
import testimonials from "@/data/testimonials.json";
import { ChevronIcon, QuoteIcon, StarIcon } from "@/components/Icons";

type Testimonial = {
  id: string;
  quote: string;
  name: string;
  detail: string;
};

const items = testimonials as Testimonial[];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  const goTo = useCallback((next: number) => {
    const clamped = Math.max(0, Math.min(items.length - 1, next));
    setIndex(clamped);
    const card = cardRefs.current[clamped];
    if (!card) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    card.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      inline: "center",
      block: "nearest",
    });
  }, []);

  const onScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const trackCenter = track.getBoundingClientRect().left + track.clientWidth / 2;
    let best = 0;
    let bestDistance = Number.POSITIVE_INFINITY;

    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const distance = Math.abs(rect.left + rect.width / 2 - trackCenter);
      if (distance < bestDistance) {
        bestDistance = distance;
        best = i;
      }
    });

    setIndex(best);
  }, []);

  return (
    <section
      id="reviews"
      className="grain relative overflow-hidden bg-espresso py-20 text-on-espresso md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 44% at 18% 12%, rgba(212,163,115,0.16) 0%, transparent 70%)",
        }}
      />

      <div className="container-page relative">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div data-reveal>
            <p className="eyebrow text-on-espresso/65 before:bg-gold">تجربة الزبائن</p>
            <h2 className="mt-4 text-[clamp(2rem,4.4vw,3.1rem)] font-black leading-[1.25]">
              مزاج الناس
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              disabled={index >= items.length - 1}
              aria-label="التقييم التالي"
              className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-on-espresso/30 text-on-espresso transition-colors hover:border-gold hover:text-gold disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-on-espresso/30 disabled:hover:text-on-espresso"
            >
              <ChevronIcon dir="left" className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              disabled={index <= 0}
              aria-label="التقييم السابق"
              className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-on-espresso/30 text-on-espresso transition-colors hover:border-gold hover:text-gold disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-on-espresso/30 disabled:hover:text-on-espresso"
            >
              <ChevronIcon dir="right" className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          onScroll={onScroll}
          role="region"
          tabIndex={0}
          aria-roledescription="عرض شرائح"
          aria-label="تقييمات الزبائن"
          className="no-scrollbar -mx-5 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-3 md:-mx-8 md:px-8"
        >
          {items.map((item, i) => (
            <div
              key={item.id}
              ref={(node) => {
                cardRefs.current[i] = node;
              }}
              role="group"
              aria-roledescription="شريحة"
              aria-label={`${i + 1} من ${items.length}`}
              className="w-[86%] shrink-0 snap-center rounded-[1.5rem] border border-line bg-bg p-7 text-ink shadow-soft sm:w-[62%] lg:w-[46%]"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-1 text-gold" role="img" aria-label="تقييم 5 من 5">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <StarIcon key={starIndex} className="h-4 w-4" />
                  ))}
                </div>
                <QuoteIcon className="h-6 w-6 text-line-strong" />
              </div>

              <blockquote className="mt-4 text-[1rem] leading-[2] text-ink-soft">
                {item.quote}
              </blockquote>

              <div className="mt-6 border-t border-line pt-4">
                <p className="font-display font-bold text-ink">{item.name}</p>
                <p className="text-sm text-muted">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {items.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`اذهب إلى التقييم ${i + 1}`}
              aria-current={index === i}
              className="group grid h-11 w-11 cursor-pointer place-items-center"
            >
              <span
                className={`block h-2.5 rounded-full transition-all duration-300 ${
                  index === i ? "w-7 bg-gold" : "w-2.5 bg-on-espresso/25 group-hover:bg-on-espresso/50"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
