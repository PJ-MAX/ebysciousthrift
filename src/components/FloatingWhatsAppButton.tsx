import { SITE } from '../constants/site';


export default function FloatingWhatsAppButton() {
const waLink = `https://wa.me/${SITE.whatsappNumber}`;
return (
<a href={waLink} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="fixed right-4 bottom-6 z-50">
<div className="w-14 h-14 rounded-full bg-emerald-500 shadow-lg flex items-center justify-center text-white text-lg">📱</div>
</a>
);
}