"use client";

import { useEffect, useRef, useState } from "react";
import site from "@/data/site.json";

function CupMark() {
  return (
    <svg
      viewBox="0 0 72 72"
      className="h-14 w-14 text-gold"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 28h34v16a14 14 0 0 1-14 14h-6a14 14 0 0 1-14-14Z" />
      <path d="M48 32h5a7 7 0 0 1 0 14h-5" />
      <path d="M8 62h46" />
      <g className="steam">
        <path d="M24 22c-3-4 3-7 0-12" />
        <path d="M34 22c-3-4 3-7 0-12" />
        <path d="M44 22c-3-4 3-7 0-12" />
      </g>
    </svg>
  );
}

export default function Splash() {
  const [leaving, setLeaving] = useState(false);
  const timer = useRef<number | null>(null);
  const closed = useRef(false);

  const close = (instant = false) => {
    if (closed.current) return;
    closed.current = true;
    try {
      sessionStorage.setItem("aqm-splash-seen", "1");
    } catch {
      /* storage can be blocked; the overlay still closes */
    }
    if (instant) {
      document.documentElement.removeAttribute("data-splash");
      return;
    }
    setLeaving(true);
    window.setTimeout(() => {
      document.documentElement.removeAttribute("data-splash");
    }, 380);
  };

  useEffect(() => {
    if (document.documentElement.getAttribute("data-splash") !== "1") return;

    try {
      sessionStorage.setItem("aqm-splash-seen", "1");
    } catch {
      /* ignore */
    }

    timer.current = window.setTimeout(() => close(), 2500);
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`splash fixed inset-0 z-[100] place-items-center bg-espresso-deep text-on-espresso ${
        leaving ? "splash--out" : ""
      }`}
      aria-hidden={leaving ? true : undefined}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(58% 46% at 50% 38%, rgba(212,163,115,0.22) 0%, rgba(212,163,115,0.04) 55%, transparent 100%)",
        }}
      />
      <div className="relative flex w-full max-w-sm flex-col items-center px-8 text-center">
        <span className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full border border-gold/30">
          <CupMark />
        </span>

        <p className="font-display text-[2.6rem] font-black leading-tight tracking-tight text-on-espresso">
          {site.name}
        </p>
        <p className="mt-2 text-sm text-on-espresso/70">{site.tagline}</p>

        <div className="mt-10 w-full">
          <div
            className="h-[3px] w-full overflow-hidden rounded-full bg-on-espresso/15"
            role="progressbar"
            aria-label="تحميل الموقع"
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <span className="splash__bar-fill block h-full rounded-full bg-gold" />
          </div>
          <p className="mt-3 text-xs tracking-wide text-on-espresso/50">
            بنجهز المزاج…
          </p>
        </div>

        <button
          type="button"
          onClick={() => close(false)}
          className="splash__enter btn btn-primary mt-8 px-10"
        >
          ادخل
        </button>
      </div>
    </div>
  );
}
