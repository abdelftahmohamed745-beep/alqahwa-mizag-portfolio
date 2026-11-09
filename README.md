# القهوة مزاج — موقع تعريفي

موقع صفحة واحدة (Single Page) بالعربي و RTL لكافيه **«القهوة مزاج»**، مبني بـ Next.js 16 + React 19 + Tailwind CSS 4، وكل الرسومات فيه SVG مرسومة يدويًا — مفيش صور خارجية ولا مكتبات أنيميشن تقيلة.

## تشغيل المشروع

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # بناء للإنتاج
pnpm start      # تشغيل نسخة الإنتاج
```

## الأقسام

| القسم | المكوّن |
| --- | --- |
| شاشة الافتتاح (تظهر مرة واحدة في الجلسة) | `components/Splash.tsx` |
| الهيرو + رسمة القوس | `components/Hero.tsx` + `components/illustrations/HeroArt.tsx` |
| عن الكافيه | `components/About.tsx` |
| المنيو (فلترة بالتصنيف) | `components/Menu.tsx` |
| المعرض + Lightbox | `components/Gallery.tsx` |
| تقييمات الزبائن (سلايدر) | `components/Testimonials.tsx` |
| الموقع والمواعيد + خريطة | `components/Location.tsx` |
| نموذج التواصل + السوشيال | `components/Contact.tsx` |
| الفوتر | `components/Footer.tsx` |
| زر واتساب العائم | `components/FloatingWhatsApp.tsx` |

## تعديل المحتوى

كل البيانات القابلة للتغيير في مجلد `data/`:

- **`data/site.json`** — الاسم، التاجلاين، الوصف، رقم واتساب، العنوان، المواعيد، السوشيال، رابط الخريطة، والسنة.
- **`data/menu.json`** — التصنيفات وأصناف المنيو (الاسم، السعر، الوصف، التاج).
- **`data/testimonials.json`** — التقييمات.
- **`data/gallery.json`** — عناوين ووصف مشاهد المعرض، واسم المشهد (`window` / `pour` / `latte` / `roast` / `sweet` / `night`).

### Placeholders لازم تتغيّر قبل النشر

| الحقل | القيمة الحالية |
| --- | --- |
| `whatsappNumber` | `201000000000` — رقم وهمي، استبدله برقم الفرع بصيغة دولية بدون `+` |
| `whatsappDisplay` | `[01XXXXXXXXX]` |
| `address` / `addressNote` | `[العنوان هنا]` — استبدله بالعنوان التفصيلي |
| `instagramUrl` / `facebookUrl` | روابط مقترحة حسب الهاندل `@alqahwamizag` — أكّدها |
| `mapQuery` / `mapUrl` | منطقة المعادي — غيّرها لإحداثيات أو عنوان الفرع |
| `geo` | إحداثيات تقريبية للمعادي — استبدلها بالإحداثيات الحقيقية |

> الأسعار في `data/menu.json` حاليًا أرقام تجريبية بالجنيه المصري.

## شاشة الافتتاح

- سكريبت صغير inline في `app/layout.tsx` بيحدد `html[data-splash="1"]` قبل أول paint (بدون وميض).
- CSS في `app/globals.css` بيخفي الشاشة تلقائيًا بعد ~2.5 ثانية، و`components/Splash.tsx` بيمسح الفلاج ويكتب `sessionStorage["aqm-splash-seen"]`.
- بتختفي فورًا لو المستخدم مفعّل `prefers-reduced-motion` أو لو JS متعطّل.
- زر «ادخل» بيقفلها يدويًا.

## نموذج التواصل

مفيش Backend: النموذج بيتحقق من الاسم/الإيميل/الرسالة محليًا، وبعدين بيفتح محادثة واتساب فيها الرسالة جاهزة. لو النافذة الجديدة اتمنعت، بيظهر لينك بديل. مفيش أي بيانات بتتخزن على الموقع.

## الخريطة

`Location.tsx` بيستخدم Google Maps Embed:
`https://www.google.com/maps?q=<mapQuery>&z=14&output=embed`
وبيوفر لينك «افتح الاتجاهات» للخريطة الكاملة.

## SEO والوصول

- `lang="ar" dir="rtl"`، Metadata كاملة (Open Graph + Twitter)، `app/robots.ts`، `app/sitemap.ts`.
- JSON-LD من نوع `CafeOrCoffeeShop` في `app/layout.tsx`.
- صورة المشاركة: `public/og.jpg` (1200×630).
- اللوجو/الأيقونة: `app/icon.svg` و`app/apple-icon.png`.
- تباين ألوان مطابق لـ WCAG AA، Skip link، تركيز واضح، دعم لوحة المفاتيح في القوائم والـ Lightbox، واحترام تقليل الحركة.

## النشر على Vercel

```bash
vercel --prod
```

- رابط الموقع في الـ SEO بيتحدد تلقائيًا من `VERCEL_PROJECT_PRODUCTION_URL`، وتقدر تفرضه بـ `NEXT_PUBLIC_SITE_URL`.
- المشروع كله Static، مفيش Environment Variables مطلوبة.

## الهوية

- ألوان: إسبريسو `#3B2416`، كريمي `#F5EBDD`، ذهبي `#D4A373`، زيتوني `#606C38`.
- خطوط: **Cairo** للعناوين، **Tajawal** للنصوص (عبر `next/font`).
- العنصر البصري المتكرر: القوس العربي (`.arch` / `.arch-frame`).
