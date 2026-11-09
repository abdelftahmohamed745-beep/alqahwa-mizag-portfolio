import site from "@/data/site.json";
import { waLink } from "@/lib/links";
import { WhatsAppIcon } from "@/components/Icons";

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="تواصل سريع" className="no-print fixed bottom-5 end-5 z-40 sm:bottom-7 sm:end-7">
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`كلم ${site.name} على واتساب`}
        className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#1f7a4d] px-4 text-sm font-medium text-white shadow-[0_14px_30px_-12px_rgba(31,122,77,0.8)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-offset-4"
      >
        <WhatsAppIcon className="h-5 w-5" />
        <span className="hidden sm:inline">كلمنا</span>
      </a>
    </aside>
  );
}
