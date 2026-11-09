"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import gallery from "@/data/gallery.json";
import Scene, { type SceneName } from "@/components/illustrations/Scenes";
import { ChevronIcon, CloseIcon } from "@/components/Icons";

type GalleryItem = {
  id: string;
  scene: SceneName;
  title: string;
  caption: string;
};

const items = gallery as GalleryItem[];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const isOpen = active !== null;

  const close = useCallback(() => {
    if (active === null) return;
    triggerRefs.current[active]?.focus();
    setActive(null);
  }, [active]);

  const step = useCallback((direction: 1 | -1) => {
    setActive((current) => {
      if (current === null) return current;
      return (current + direction + items.length) % items.length;
    });
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        step(1);
        return;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        step(-1);
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close, step]);

  const current = active !== null ? items[active] : null;

  return (
    <section id="gallery" className="relative bg-bg py-20 md:py-28">
      <div className="container-page">
        <div data-reveal className="max-w-[38rem]">
          <p className="eyebrow">المعرض</p>
          <h2 className="mt-4 text-[clamp(2rem,4.4vw,3.1rem)] font-black leading-[1.25]">
            لحظات من الكافيه
          </h2>
          <p className="mt-4 text-[1.0625rem] leading-[2] text-ink-soft">
            رسومات من جوه المكان — الضوء، البخار، والكوباية اللي على الطرف.
          </p>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <li
              key={item.id}
              data-reveal
              style={{ "--d": `${(index % 3) * 90}ms` } as React.CSSProperties}
            >
              <button
                ref={(node) => {
                  triggerRefs.current[index] = node;
                }}
                type="button"
                onClick={() => setActive(index)}
                className="group block w-full cursor-pointer text-start"
                aria-label={`تكبير الصورة: ${item.title}`}
              >
                <div className="relative overflow-hidden rounded-t-full border border-line bg-surface transition-colors duration-300 group-hover:border-gold/80">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-70"
                    style={{
                      background:
                        "radial-gradient(65% 45% at 50% 22%, rgba(212,163,115,0.16) 0%, transparent 70%)",
                    }}
                  />
                  <Scene
                    name={item.scene}
                    className="relative aspect-[4/3.6] w-full p-7 pb-10 text-ink transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">{item.title}</h3>
                <p className="mt-1 text-sm leading-[1.8] text-muted">{item.caption}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {current ? (
        <div className="fixed inset-0 z-[95] flex items-center justify-center p-3 sm:p-6">
          <button
            type="button"
            aria-label="إغلاق المعرض"
            onClick={close}
            className="absolute inset-0 cursor-default bg-espresso-deep/85 backdrop-blur-sm"
            tabIndex={-1}
          />
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-dialog-title"
            className="lightbox-enter relative w-full max-w-3xl overflow-hidden rounded-[1.75rem] border border-line bg-bg shadow-2xl"
          >
            <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-4 sm:px-6">
              <div>
                <h3
                  id="gallery-dialog-title"
                  className="font-display text-lg font-bold leading-tight"
                >
                  {current.title}
                </h3>
                <p className="text-xs text-muted">
                  {(active ?? 0) + 1} من {items.length}
                </p>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label="إغلاق"
                className="grid h-11 w-11 shrink-0 cursor-pointer place-items-center rounded-full border border-line-strong text-ink transition-colors hover:bg-bg-soft"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>

            <div className="bg-surface">
              <Scene name={current.scene} className="mx-auto w-full max-w-2xl p-6 text-ink sm:p-10" />
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-line px-5 py-4 sm:px-6">
              <button
                type="button"
                onClick={() => step(-1)}
                className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border border-line-strong px-4 text-sm font-medium transition-colors hover:bg-bg-soft"
              >
                <ChevronIcon dir="right" className="h-4 w-4" />
                السابق
              </button>
              <p className="hidden max-w-[22rem] text-center text-sm text-muted sm:block">
                {current.caption}
              </p>
              <button
                type="button"
                onClick={() => step(1)}
                className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border border-line-strong px-4 text-sm font-medium transition-colors hover:bg-bg-soft"
              >
                التالي
                <ChevronIcon dir="left" className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
