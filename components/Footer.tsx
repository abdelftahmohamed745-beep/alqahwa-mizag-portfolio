import site from "@/data/site.json";
import {
  FacebookIcon,
  InstagramIcon,
  PinIcon,
  WhatsAppIcon,
} from "@/components/Icons";
import { waLink } from "@/lib/links";

const quickLinks = [
  { href: "#about", label: "عن الكافيه" },
  { href: "#menu", label: "المنيو" },
  { href: "#gallery", label: "المعرض" },
  { href: "#location", label: "الموقع" },
  { href: "#contact", label: "تواصل" },
];

export default function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-espresso-deep text-on-espresso">
      <div className="container-page relative py-14 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr]">
          <div>
            <a href="#home" className="font-display text-2xl font-black tracking-tight">
              {site.name}
              <span className="text-gold">.</span>
            </a>
            <p className="mt-3 max-w-[22rem] text-[0.9375rem] leading-[1.9] text-on-espresso/65">
              {site.shortDescription}
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="واتساب"
                className="grid h-11 w-11 place-items-center rounded-full border border-on-espresso/20 text-on-espresso/80 transition-colors hover:border-gold hover:text-gold"
              >
                <WhatsAppIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="إنستجرام"
                className="grid h-11 w-11 place-items-center rounded-full border border-on-espresso/20 text-on-espresso/80 transition-colors hover:border-gold hover:text-gold"
              >
                <InstagramIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={site.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="فيسبوك"
                className="grid h-11 w-11 place-items-center rounded-full border border-on-espresso/20 text-on-espresso/80 transition-colors hover:border-gold hover:text-gold"
              >
                <FacebookIcon className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          <nav aria-label="روابط سريعة">
            <h2 className="font-display text-sm font-bold text-on-espresso/90">روابط سريعة</h2>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[0.9375rem] text-on-espresso/65 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-sm font-bold text-on-espresso/90">المواعيد</h2>
            <ul className="mt-4 space-y-2 text-[0.9375rem] text-on-espresso/65">
              {site.hours.map((row) => (
                <li key={row.days} className="flex items-baseline justify-between gap-4">
                  <span>{row.days}</span>
                  <span className="tabular-nums text-on-espresso/80">{row.time}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-6 font-display text-sm font-bold text-on-espresso/90">العنوان</h2>
            <p className="mt-3 flex items-start gap-2 text-[0.9375rem] leading-[1.8] text-on-espresso/65">
              <PinIcon className="mt-1 h-4.5 w-4.5 shrink-0 text-gold" />
              {site.address}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-on-espresso/12 pt-6 text-xs text-on-espresso/45 sm:flex-row">
          <p>
            © {site.copyrightYear} {site.name} — كل الحقوق محفوظة.
          </p>
          <a href="#home" className="inline-flex min-h-11 items-center px-2 transition-colors hover:text-gold">
            ارجع لفوق
          </a>
        </div>
      </div>
    </footer>
  );
}
