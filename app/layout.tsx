import type { Metadata, Viewport } from "next";
import { Cairo, Tajawal } from "next/font/google";
import "./globals.css";
import site from "@/data/site.json";
import Splash from "@/components/Splash";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import RevealObserver from "@/components/RevealObserver";

import { siteUrl } from "@/lib/site-url";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-cairo",
  display: "swap",
});

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} | قهوة على مزاجك في المعادي`,
    template: `%s | ${site.name}`,
  },
  description:
    "كافيه «القهوة مزاج» في المعادي: حبوب قهوة مختصة، تحميص طازة كل أسبوع، منيو متنوع، ومكان دافي يستاهل القعدة. شوف المنيو والمواعيد وتواصل معانا.",
  keywords: [
    "القهوة مزاج",
    "كافيه المعادي",
    "قهوة مختصة القاهرة",
    "أفضل كافيه في المعادي",
    "specialty coffee cairo",
  ],
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: "/",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.shortDescription,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.shortDescription,
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
  category: "food",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: site.name,
  description: site.shortDescription,
  url: siteUrl,
  image: `${siteUrl}/og.jpg`,
  telephone: `+${site.whatsappNumber}`,
  priceRange: site.priceRange,
  servesCuisine: ["قهوة مختصة", "حلويات"],
  currenciesAccepted: "EGP",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressLocality: "المعادي",
    addressRegion: "القاهرة",
    addressCountry: "EG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.latitude,
    longitude: site.geo.longitude,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "10:00",
      closes: "24:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "12:00",
      closes: "01:00",
    },
  ],
  sameAs: [site.instagramUrl, site.facebookUrl],
  hasMenu: `${siteUrl}/#menu`,
  acceptsReservations: "True",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5ebdd" },
    { media: "(prefers-color-scheme: dark)", color: "#241610" },
  ],
  colorScheme: "light dark",
};

const splashScript = `(function(){try{var d=document.documentElement;d.classList.add('js');var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;var seen=false;try{seen=!!sessionStorage.getItem('aqm-splash-seen')}catch(e){}if(!reduce&&!seen){d.setAttribute('data-splash','1')}}catch(e){document.documentElement.classList.add('js')}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${tajawal.variable}`}>
      <body className="antialiased">
        <script dangerouslySetInnerHTML={{ __html: splashScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[110] focus:rounded-full focus:bg-gold focus:px-5 focus:py-3 focus:font-display focus:font-bold focus:text-[#3b2416]"
        >
          تخطى إلى المحتوى
        </a>
        <Splash />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <RevealObserver />
      </body>
    </html>
  );
}
