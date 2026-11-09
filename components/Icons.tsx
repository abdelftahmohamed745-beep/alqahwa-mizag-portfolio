import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export function CupIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 8h12v6.5A5.5 5.5 0 0 1 10.5 20h-1A5.5 5.5 0 0 1 4 14.5V8Z" />
      <path d="M16 9.2h1.6a2.7 2.7 0 0 1 0 5.4H16" />
      <path d="M7 3.5c0 1-1 1.3-1 2.2M10.5 3.5c0 1-1 1.3-1 2.2M14 3.5c0 1-1 1.3-1 2.2" />
      <path d="M3 21h14" />
    </svg>
  );
}

export function BeanIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="12" cy="12" rx="6.5" ry="9" transform="rotate(35 12 12)" />
      <path d="M8.2 7.4c2.2 2 3.8 4.6 4.4 8.1M15.4 16.2c-2.1-2-3.6-4.5-4.2-7.9" />
    </svg>
  );
}

export function LeafIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 19c0-7 5-12 14-13 .5 8.5-4.5 14-12 14H5Z" />
      <path d="M5 19c2.5-4 5.5-6.8 9.5-8.8" />
    </svg>
  );
}

export function FlameIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3s.7 3.2-1.6 5.4C8 10.7 7 12.3 7 14.4A5.3 5.3 0 0 0 12.3 20a5.3 5.3 0 0 0 5.2-5.4c0-2.3-1.2-4.2-2.7-5.8" />
      <path d="M12 20a2.6 2.6 0 0 0 2.6-2.6c0-1.7-1.3-2.6-1.7-4.4-1.3 1-2.2 1.8-2.2 3.3A2.6 2.6 0 0 0 12 20Z" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M19 10.4c0 5.1-7 10.1-7 10.1s-7-5-7-10.1A7 7 0 0 1 19 10.4Z" />
      <circle cx="12" cy="10.2" r="2.6" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.9" />
      <path d="M16.9 7.2h.01" strokeWidth="2.4" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M14.2 8.6h2.2V5.7h-2.6c-2.3 0-3.7 1.5-3.7 3.9v1.5H8v2.9h2.1v6.8h3v-6.8h2.4l.4-2.9h-2.8V9.8c0-.8.4-1.2 1.1-1.2Z" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20.6 11.7a8.6 8.6 0 0 1-12.8 7.6L3.4 20.6l1.3-4.3A8.6 8.6 0 1 1 20.6 11.7Z" />
      <path d="M9 7.8c-.4 0-.8.2-1 .5-.3.4-.8 1-.8 2.1 0 1.2.8 2.5 1 2.8.2.3 1.7 2.7 4.2 3.7 1.9.8 2.4.7 2.9.6.6-.1 1.6-.7 1.8-1.3.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.3l-1.7-.8c-.3-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.6.1-.3-.1-1.2-.5-2.2-1.4-.8-.7-1.3-1.6-1.5-1.9-.1-.2 0-.4.1-.5l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.8-1.8c-.2-.4-.4-.4-.6-.4Z" />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 12H4M9.5 6.5 4 12l5.5 5.5" />
    </svg>
  );
}

export function ChevronIcon({ dir = "left", ...props }: IconProps & { dir?: "left" | "right" }) {
  return (
    <svg {...base} {...props}>
      <path d={dir === "left" ? "M14.5 6 8.5 12l6 6" : "M9.5 6l6 6-6 6"} />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h10" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false" {...props}>
      <path d="M12 2.8l2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 9.3l6.1-.9L12 2.8Z" />
    </svg>
  );
}

export function QuoteIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false" {...props}>
      <path d="M9.4 6.2c-3 1.4-4.9 3.9-4.9 7.2 0 2.8 1.5 4.4 3.6 4.4 1.9 0 3.3-1.3 3.3-3.1 0-1.7-1.2-2.9-2.8-2.9-.3 0-.6 0-.8.1.4-1.6 1.7-2.9 3.4-3.7l-1.8-2Zm9 0c-3 1.4-4.9 3.9-4.9 7.2 0 2.8 1.5 4.4 3.6 4.4 1.9 0 3.3-1.3 3.3-3.1 0-1.7-1.2-2.9-2.8-2.9-.3 0-.6 0-.8.1.4-1.6 1.7-2.9 3.4-3.7l-1.8-2Z" />
    </svg>
  );
}

export function SendIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20.5 3.5 10.2 13.8M20.5 3.5l-6.6 17-3.7-6.7L3.5 10l17-6.5Z" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}
