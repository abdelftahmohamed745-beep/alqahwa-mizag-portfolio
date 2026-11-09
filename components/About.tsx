import { BeanIcon, CupIcon, FlameIcon, QuoteIcon } from "@/components/Icons";

const values = [
  {
    icon: BeanIcon,
    title: "حبوب مختارة",
    body: "بنجرّب دفعات صغيرة من مزارع مختلفة، وبنختار اللي طعمه يستاهل يتقدم لوحده.",
  },
  {
    icon: FlameIcon,
    title: "تحميص طازة",
    body: "بنحمّص كل أسبوع على دفعات، وبنطحن قبل كل كوباية عشان الرايحة تسبق الطعم.",
  },
  {
    icon: CupIcon,
    title: "قعدة على مهلك",
    body: "مكان هادي، نت واي فاي، ومحدش بيبص على ساعتك. اقعد براحتك.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-bg py-20 md:py-28">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div data-reveal>
            <p className="eyebrow">عن الكافيه</p>
            <h2 className="mt-4 text-[clamp(2rem,4.4vw,3.1rem)] font-black leading-[1.25]">
              الحكاية بدأت
              <br />
              بكوباية واحدة.
            </h2>

            <div className="mt-7 max-w-[36rem] space-y-4 text-[1.0625rem] leading-[2] text-ink-soft">
              <p>
                «القهوة مزاج» مكان صغير في قلب المعادي، اتفتح بفكرة واحدة: القهوة
                مش مشروب سريع تشربه وتمشي، هي أربع دقايق بتقف فيها الدنيا شوية.
              </p>
              <p>
                بنختار الحبوب من مزارع صغيرة، بنحمّصها على دفعات محدودة، وبنطحنها
                قبل كل كوباية. والباقي بسيط: مكان دافي، ناس بتحب اللي بتعمله، وقهوة
                تستاهل القعدة.
              </p>
            </div>
          </div>

          <div
            data-reveal
            style={{ "--d": "120ms" } as React.CSSProperties}
            className="relative"
          >
            <div className="arch-frame flex h-full flex-col justify-between gap-8 bg-bg-soft p-8 pb-10 md:p-10">
              <QuoteIcon className="h-8 w-8 text-gold" />
              <blockquote className="font-display text-[clamp(1.35rem,2.6vw,1.75rem)] font-bold leading-[1.7] text-ink">
                «القهوة مش مشروب سريع… هي أربع دقايق بتقف فيها الدنيا شوية.»
              </blockquote>
              <footer className="text-sm text-muted">
                — فريق «القهوة مزاج»، أول يوم افتتاح
              </footer>
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -start-3 -z-10 h-full w-full rounded-t-full border border-line"
            />
          </div>
        </div>

        <ul className="mt-16 grid gap-8 border-t border-line pt-10 sm:grid-cols-3 md:mt-20 md:gap-10">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <li
                key={value.title}
                data-reveal
                style={{ "--d": `${index * 90}ms` } as React.CSSProperties}
                className="group"
              >
                <span className="inline-grid h-12 w-12 place-items-center rounded-full border border-line-strong bg-surface text-gold-strong transition-colors duration-300 group-hover:border-gold group-hover:bg-gold/15">
                  <Icon className="h-5.5 w-5.5" />
                </span>
                <h3 className="mt-4 font-display text-xl font-bold">{value.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-[1.9] text-muted">
                  {value.body}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
