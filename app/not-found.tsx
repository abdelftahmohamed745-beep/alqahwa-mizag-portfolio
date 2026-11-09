import Link from "next/link";
import { CupIcon } from "@/components/Icons";

export default function NotFound() {
  return (
    <section className="grain relative grid min-h-[100svh] place-items-center overflow-hidden bg-espresso px-5 py-28 text-on-espresso">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(52% 46% at 50% 30%, rgba(212,163,115,0.18) 0%, transparent 70%)",
        }}
      />
      <div className="relative max-w-md text-center">
        <span className="mx-auto grid h-20 w-20 place-items-center rounded-full border border-gold/30 text-gold">
          <CupIcon className="h-9 w-9" />
        </span>
        <p className="mt-8 font-display text-sm tracking-[0.3em] text-gold">٤٠٤</p>
        <h1 className="mt-3 font-display text-[clamp(2rem,6vw,2.8rem)] font-black leading-tight">
          الكوباية دي مش موجودة
        </h1>
        <p className="mt-4 text-[1.0625rem] leading-[1.9] text-on-espresso/70">
          يبدو إن الصفحة اللي بتدور عليها اتشالت من المنيو. نرجّعك للرئيسية
          ونعملك قهوة على مزاجك؟
        </p>
        <Link href="/" className="btn btn-primary mt-8">
          ارجع للرئيسية
        </Link>
      </div>
    </section>
  );
}
