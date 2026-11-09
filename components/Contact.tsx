"use client";

import { useId, useState } from "react";
import site from "@/data/site.json";
import { waLink } from "@/lib/links";
import {
  CheckIcon,
  FacebookIcon,
  InstagramIcon,
  SendIcon,
  WhatsAppIcon,
} from "@/components/Icons";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function Contact() {
  const uid = useId();
  const ids = {
    name: `${uid}-name`,
    email: `${uid}-email`,
    message: `${uid}-message`,
  };

  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [sentLink, setSentLink] = useState("");

  const update = (field: keyof typeof values) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    setStatus("idle");
  };

  const validate = () => {
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = "اكتب اسمك (حرفين على الأقل).";
    if (!EMAIL_RE.test(values.email.trim())) next.email = "اكتب إيميل صحيح، مثال: name@mail.com";
    if (values.message.trim().length < 10) next.message = "اكتب رسالتك في ١٠ حروف على الأقل.";
    return next;
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) {
      const first = Object.keys(next)[0] as keyof typeof ids;
      document.getElementById(ids[first])?.focus();
      return;
    }

    const text = `رسالة من موقع «${site.name}»\n\nالاسم: ${values.name}\nالإيميل: ${values.email}\n\n${values.message}`;
    const link = waLink(text);
    setSentLink(link);
    setStatus("success");
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const inputClass = (invalid?: boolean) =>
    `min-h-12 w-full rounded-xl border bg-surface px-4 py-3 text-[0.9375rem] text-ink placeholder:text-muted/70 transition-colors ${
      invalid ? "border-red-700/70" : "border-line-strong focus:border-gold-strong"
    }`;

  return (
    <section id="contact" className="relative bg-bg-soft py-20 md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div data-reveal>
          <p className="eyebrow">تواصل</p>
          <h2 className="mt-4 text-[clamp(2rem,4.4vw,3.1rem)] font-black leading-[1.25]">
            عايز تحجز طاولة
            <br />
            أو تسأل عن حاجة؟
          </h2>
          <p className="mt-4 max-w-[30rem] text-[1.0625rem] leading-[2] text-ink-soft">
            اكتبلنا رسالة وهتفتح على واتساب جاهزة، أو كلمنا مباشرة. بنرد عادة في
            نفس اليوم من ١٠ الصبح لـ ١٢ بالليل.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 rounded-2xl border border-line bg-surface px-5 py-4 transition-colors hover:border-gold/70"
            >
              <span className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-olive/12 text-olive">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-display text-sm font-bold">واتساب</span>
                  <span className="block text-sm text-muted" dir="ltr">
                    {site.whatsappDisplay}
                  </span>
                </span>
              </span>
              <span className="text-sm text-gold-strong">كلمنا</span>
            </a>

            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-line bg-surface px-5 py-4 transition-colors hover:border-gold/70"
              >
                <InstagramIcon className="h-5 w-5 text-gold-strong" />
                <span>
                  <span className="block font-display text-sm font-bold">إنستجرام</span>
                  <span className="block text-xs text-muted">{site.instagramHandle}</span>
                </span>
              </a>
              <a
                href={site.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-line bg-surface px-5 py-4 transition-colors hover:border-gold/70"
              >
                <FacebookIcon className="h-5 w-5 text-gold-strong" />
                <span>
                  <span className="block font-display text-sm font-bold">فيسبوك</span>
                  <span className="block text-xs text-muted">{site.name}</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div data-reveal style={{ "--d": "120ms" } as React.CSSProperties}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-[1.75rem] border border-line bg-surface p-6 shadow-soft sm:p-8"
          >
            <div className="grid gap-5">
              <div>
                <label htmlFor={ids.name} className="mb-2 block font-display text-sm font-bold">
                  الاسم
                </label>
                <input
                  id={ids.name}
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={values.name}
                  onChange={update("name")}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? `${ids.name}-error` : undefined}
                  placeholder="اسمك الكريم"
                  className={inputClass(Boolean(errors.name))}
                />
                {errors.name ? (
                  <p id={`${ids.name}-error`} className="mt-1.5 text-xs text-red-700 dark:text-red-300">
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor={ids.email} className="mb-2 block font-display text-sm font-bold">
                  الإيميل
                </label>
                <input
                  id={ids.email}
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  dir="ltr"
                  value={values.email}
                  onChange={update("email")}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={`${ids.email}-hint${errors.email ? ` ${ids.email}-error` : ""}`}
                  placeholder="name@mail.com"
                  className={`${inputClass(Boolean(errors.email))} text-start`}
                />
                <p id={`${ids.email}-hint`} className="mt-1.5 text-xs text-muted">
                  مش بنستخدم إيميلك في أي حاجة تانية.
                </p>
                {errors.email ? (
                  <p id={`${ids.email}-error`} className="mt-1 text-xs text-red-700 dark:text-red-300">
                    {errors.email}
                  </p>
                ) : null}
              </div>

              <div>
                <label htmlFor={ids.message} className="mb-2 block font-display text-sm font-bold">
                  الرسالة
                </label>
                <textarea
                  id={ids.message}
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={update("message")}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? `${ids.message}-error` : undefined}
                  placeholder="مثال: عايز أحجز طاولة لـ ٤ أفراد يوم الخميس الساعة ٨."
                  className={`${inputClass(Boolean(errors.message))} min-h-32 resize-y`}
                />
                {errors.message ? (
                  <p id={`${ids.message}-error`} className="mt-1.5 text-xs text-red-700 dark:text-red-300">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <button type="submit" className="btn btn-primary w-full">
                <SendIcon className="h-4.5 w-4.5" />
                ابعت الرسالة على واتساب
              </button>

              <div role="status" aria-live="polite">
                {status === "success" ? (
                  <div className="flex items-start gap-3 rounded-xl border border-olive/30 bg-olive/10 px-4 py-3 text-sm text-ink">
                    <CheckIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-olive" />
                    <span>
                      فتحنا واتساب في تاب جديد برسالتك جاهزة — ابعتاها وهنرد عليك.
                      {sentLink ? (
                        <>
                          {" "}
                          <a
                            href={sentLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-gold-strong underline underline-offset-4"
                          >
                            لو التاب مفتحش، دوس هنا
                          </a>
                          .
                        </>
                      ) : null}
                    </span>
                  </div>
                ) : null}
              </div>

              <p className="text-xs leading-relaxed text-muted">
                بالضغط على الزرار، هتفتح محادثة واتساب فيها بياناتك — مفيش بيانات
                بتتخزن على الموقع.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
