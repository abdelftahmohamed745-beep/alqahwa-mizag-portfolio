"use client";

import { useMemo, useState } from "react";
import menu from "@/data/menu.json";
import { formatPrice } from "@/lib/links";

type Category = { id: string; label: string };
type MenuItem = {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  tag?: string;
};

const categories = menu.categories as Category[];
const items = menu.items as MenuItem[];

export default function Menu() {
  const [active, setActive] = useState("all");

  const visible = useMemo(
    () => (active === "all" ? items : items.filter((item) => item.category === active)),
    [active],
  );

  return (
    <section id="menu" className="relative bg-bg-soft py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div data-reveal>
            <p className="eyebrow">المنيو</p>
            <h2 className="mt-4 text-[clamp(2rem,4.4vw,3.1rem)] font-black leading-[1.25]">
              اختار على مزاجك
            </h2>
            <p className="mt-4 max-w-[32rem] text-[1.0625rem] leading-[2] text-ink-soft">
              من الإسبريسو المركّز للكولد برو الناعم، ومعاهم حاجة حلوة. الأسعار
              بالجنيه المصري.
            </p>
          </div>

          <div
            data-reveal
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="تصفية المنيو حسب التصنيف"
          >
            <button
              type="button"
              onClick={() => setActive("all")}
              aria-pressed={active === "all"}
              className={`min-h-11 cursor-pointer rounded-full border px-5 text-sm font-medium transition-colors duration-200 ${
                active === "all"
                  ? "border-espresso bg-espresso text-on-espresso"
                  : "border-line-strong text-ink-soft hover:border-ink hover:text-ink"
              }`}
            >
              كل حاجة
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActive(category.id)}
                aria-pressed={active === category.id}
                className={`min-h-11 cursor-pointer rounded-full border px-5 text-sm font-medium transition-colors duration-200 ${
                  active === category.id
                    ? "border-espresso bg-espresso text-on-espresso"
                    : "border-line-strong text-ink-soft hover:border-ink hover:text-ink"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item, index) => (
            <li
              key={`${active}-${item.id}`}
              className="menu-enter group flex h-full flex-col rounded-[1.4rem] border border-line bg-surface p-6 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-gold/70 hover:shadow-lift"
              style={{ animationDelay: `${index * 45}ms` }}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl font-bold leading-snug text-ink">
                  {item.name}
                </h3>
                {item.tag ? (
                  <span className="mt-1 shrink-0 rounded-full bg-olive/12 px-2.5 py-1 text-[0.6875rem] font-medium leading-none text-olive">
                    {item.tag}
                  </span>
                ) : null}
              </div>

              <p className="mt-3 text-[0.9375rem] leading-[1.9] text-muted">
                {item.description}
              </p>

              <div className="mt-auto flex items-center gap-3 pt-6">
                <span className="font-display text-lg font-bold text-gold-strong">
                  {formatPrice(item.price)}
                </span>
                <span
                  aria-hidden="true"
                  className="mb-1.5 h-px flex-1 border-b border-dotted border-line-strong"
                />
                <span className="text-xs text-muted">
                  {categories.find((category) => category.id === item.category)?.label}
                </span>
              </div>
            </li>
          ))}
        </ul>

        <p data-reveal className="mt-8 text-sm text-muted">
          في حاجات موسمية بتظهر على السبورة جوه الكافيه — اسأل عن الجديد، وممكن
          نعملك القهوة على مزاجك بالظبط.
        </p>
      </div>
    </section>
  );
}
