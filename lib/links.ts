import site from "@/data/site.json";

export function waLink(message: string = site.whatsappMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function formatPrice(price: number) {
  return `${price.toLocaleString("en-US")} ج.م`;
}
