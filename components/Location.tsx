import site from "@/data/site.json";
import { ClockIcon, PinIcon } from "@/components/Icons";

export default function Location() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    site.mapQuery,
  )}&z=14&output=embed`;

  return (
    <section id="location" className="relative bg-bg py-20 md:py-28">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div data-reveal>
            <p className="eyebrow">الموقع والمواعيد</p>
            <h2 className="mt-4 text-[clamp(2rem,4.4vw,3.1rem)] font-black leading-[1.25]">
              تعالى اقعد معانا
            </h2>
            <p className="mt-4 max-w-[30rem] text-[1.0625rem] leading-[2] text-ink-soft">
              إحنا في قلب المعادي، على بعد خطوات من المحطة. لو أول مرة تيجي،
              كلمنا على واتساب وهنوصفلك الطريق.
            </p>

            <div className="mt-9 space-y-6">
              <div className="flex gap-4">
                <span className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line-strong bg-surface text-gold-strong">
                  <PinIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-sm font-bold text-ink">العنوان</p>
                  <p className="mt-1 text-[0.9375rem] leading-[1.9] text-ink-soft">
                    {site.address}
                    <span className="mt-1 block text-xs text-muted">{site.addressNote}</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line-strong bg-surface text-gold-strong">
                  <ClockIcon className="h-5 w-5" />
                </span>
                <div className="w-full">
                  <p className="font-display text-sm font-bold text-ink">المواعيد</p>
                  {site.hours.map((row) => (
                    <p
                      key={row.days}
                      className="mt-1 flex items-baseline justify-between gap-4 border-b border-line pb-2 text-[0.9375rem] text-ink-soft last:border-0"
                    >
                      <span>{row.days}</span>
                      <span className="tabular-nums">{row.time}</span>
                    </p>
                  ))}
                  <p className="mt-2 text-xs text-muted">{site.hoursNote}</p>
                </div>
              </div>
            </div>

            <a
              href={site.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline mt-8"
            >
              <PinIcon className="h-5 w-5" />
              افتح الاتجاهات على الخريطة
            </a>
          </div>

          <div
            data-reveal
            style={{ "--d": "120ms" } as React.CSSProperties}
            className="relative"
          >
            <div className="overflow-hidden rounded-[1.75rem] border border-line bg-bg-soft shadow-soft">
              <iframe
                title={`خريطة موقع ${site.name}`}
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[22rem] w-full grayscale-[0.2] md:h-[30rem]"
              />
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line px-5 py-4 text-sm">
                <span className="text-muted">{site.address}</span>
                <a
                  href={site.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center py-2 font-medium text-gold-strong underline decoration-gold/50 underline-offset-4 hover:decoration-gold"
                >
                  عرض أكبر
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
