export function whatsappLink(message?: string) {
const base = `https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER || "2349065317891"}`;
if (!message) return base;
return `${base}?text=${encodeURIComponent(message)}`;
}