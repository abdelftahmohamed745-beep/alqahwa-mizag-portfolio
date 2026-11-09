"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import site from "@/data/site.json";
import { waLink } from "@/lib/links";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "@/components/Icons";

const links = [
  { href: "#home", label: "الرئيسية" },
  { href: "#about", label: "عن الكافيه" },
  { href: "#menu", label: "المنيو" },
  { href: "#gallery", label: "المعرض" },
  { href: "#location", label: "الموقع" },
  { href: "#contact", label: "تواصل" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
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
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? "border-b border-line/80 bg-bg/90 text-ink backdrop-blur-md"
            : "border-b border-transparent text-on-espresso"
        }`}
      >
        <div className="container-page flex h-[4.5rem] items-center justify-between gap-4">
          <a
            href="#home"
            className="group flex items-center gap-2.5 py-2"
            aria-label={`${site.name} — الرئيسية`}
          >
            <span
              className={`grid h-9 w-9 place-items-center rounded-full border transition-colors ${
                scrolled || open ? "border-line-strong" : "border-on-espresso/35"
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4.5 w-4.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 8h12v6.5A5.5 5.5 0 0 1 10.5 20h-1A5.5 5.5 0 0 1 4 14.5V8Z" />
                <path d="M16 9.2h1.6a2.7 2.7 0 0 1 0 5.4H16" />
                <path d="M3 21h14" />
              </svg>
            </span>
            <span className="font-display text-lg font-black leading-none tracking-tight">
              {site.name}
            </span>
          </a>

          <nav aria-label="التنقل الرئيسي" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative rounded-full px-3.5 py-2 text-[0.9375rem] font-medium transition-colors ${
                      scrolled || open
                        ? "text-ink-soft hover:bg-bg-soft hover:text-ink"
                        : "text-on-espresso/80 hover:bg-on-espresso/10 hover:text-on-espresso"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary hidden min-h-10 px-4 text-sm sm:inline-flex"
            >
              <WhatsAppIcon className="h-4 w-4" />
              كلمنا على واتساب
            </a>
            <button
              ref={triggerRef}
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="فتح القائمة"
              className={`grid h-11 w-11 place-items-center rounded-full border transition-colors lg:hidden ${
                scrolled || open
                  ? "border-line-strong text-ink hover:bg-bg-soft"
                  : "border-on-espresso/35 text-on-espresso hover:bg-on-espresso/10"
              }`}
            >
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="قائمة التنقل"
        className={`fixed inset-0 z-[70] bg-espresso-deep text-on-espresso transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
        inert={!open}
      >
        <div className="container-page flex h-[4.5rem] items-center justify-between">
          <span className="font-display text-lg font-black">{site.name}</span>
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label="إغلاق القائمة"
            className="grid h-11 w-11 place-items-center rounded-full border border-on-espresso/30 transition-colors hover:bg-on-espresso/10"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="container-page flex h-[calc(100svh-4.5rem)] flex-col justify-between pb-10 pt-6">
          <nav aria-label="التنقل على الموبايل">
            <ul className="flex flex-col">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-on-espresso/12 py-4 font-display text-3xl font-bold text-on-espresso/90 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-4">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full"
            >
              <WhatsAppIcon className="h-5 w-5" />
              كلمنا على واتساب
            </a>
            <p className="text-center text-sm text-on-espresso/55">
              {site.hours[0].days} · {site.hours[0].time}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
