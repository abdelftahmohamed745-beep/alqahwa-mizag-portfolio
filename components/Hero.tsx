import site from "@/data/site.json";
import HeroArt from "@/components/illustrations/HeroArt";
import { ArrowIcon, ClockIcon, WhatsAppIcon } from "@/components/Icons";
import { waLink } from "@/lib/links";

export default function Hero() {
  return (
    <section
      id="home"
      className="grain relative overflow-hidden bg-espresso text-on-espresso"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(62% 52% at 78% 18%, rgba(212,163,115,0.18) 0%, rgba(212,163,115,0.03) 55%, transparent 100%), radial-gradient(45% 40% at 12% 88%, rgba(96,108,56,0.16) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -start-24 top-24 h-[22rem] w-[22rem] rounded-full border border-gold/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -start-10 top-40 h-[13rem] w-[13rem] rounded-full border border-gold/10"
      />

      <div className="container-page relative grid min-h-[100svh] items-center gap-12 pb-16 pt-28 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:pb-24 lg:pt-32">
        <div className="max-w-[34rem]">
          <p className="eyebrow text-on-espresso/70 before:bg-gold">
            محمصة قهوة مختصة — المعادي، القاهرة
          </p>

          <h1 className="mt-5 font-display text-[clamp(2.7rem,7.2vw,4.8rem)] font-black leading-[1.12] tracking-tight">
            مش بنبيع قهوة.
            <br />
            بنبيع مزاج
            <span className="text-gold">.</span>
          </h1>

          <p className="mt-7 max-w-[30rem] text-[1.0625rem] leading-[2] text-on-espresso/75">
            حبوب مختارة من مزارع صغيرة، تحميص على دفعات، ومكان دافي تقعد فيه من
            غير ما حد يستعجلك. تعالى اعمل مزاجك، واحنا هنجهز الباقي.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#menu" className="btn btn-primary">
              شوف المنيو
              <ArrowIcon className="h-4.5 w-4.5" />
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <WhatsAppIcon className="h-5 w-5" />
              تواصل معانا
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-on-espresso/12 pt-5 text-sm text-on-espresso/60">
            <span className="inline-flex items-center gap-2">
              <ClockIcon className="h-4.5 w-4.5 text-gold" />
              {site.hours[0].days} · {site.hours[0].time}
            </span>
            <span className="hidden h-4 w-px bg-on-espresso/20 sm:block" />
            <span>تحميص طازة كل أسبوع</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[27rem] lg:max-w-[30rem]">
          <div
            aria-hidden="true"
            className="absolute inset-x-6 bottom-6 top-16 rounded-full bg-gold/10 blur-3xl"
          />
          <HeroArt className="relative w-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)]" />
          <div className="absolute inset-x-10 -bottom-4 hidden justify-center gap-8 text-center text-[0.6875rem] uppercase tracking-[0.18em] text-on-espresso/40 sm:flex">
            <span>حبوب مختصة</span>
            <span>تحميص يدوي</span>
            <span>قعدة على مهلك</span>
          </div>
        </div>
      </div>
    </section>
  );
}
