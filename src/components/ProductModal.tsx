'use client';
import { useEffect } from 'react';
import { SITE } from '../constants/site';


export default function ProductModal({ product, onClose }: { product: { id: string; name: string; price: string; image: string }; onClose: () => void }) {
useEffect(() => {
function onKey(e: KeyboardEvent) {
if (e.key === 'Escape') onClose();
}
window.addEventListener('keydown', onKey);
return () => window.removeEventListener('keydown', onKey);
}, [onClose]);


const waMsg = `Hi, I'm interested in ${product.name} (ID: ${product.id}). Is it available?`;
const waLink = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(waMsg)}`;


return (
<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
<div className="absolute inset-0 bg-black/40" onClick={onClose} />
<div className="relative bg-white rounded-lg overflow-hidden max-w-3xl w-full shadow-lg animate-fadeUp">
<div className="grid grid-cols-1 md:grid-cols-2">
<img src={product.image} alt={product.name} className="w-full h-80 object-cover" />
<div className="p-4">
<h3 className="text-xl font-semibold">{product.name}</h3>
<p className="text-gray-700 mt-2">{product.price}</p>
<p className="text-sm text-gray-600 mt-4">All items are first-grade thrifted and carefully inspected. Message us for measurements and availability.</p>
<div className="mt-6 flex gap-3">
<a href={waLink} target="_blank" rel="noopener noreferrer" className="bg-emerald-500 px-4 py-2 rounded-md text-white">Message on WhatsApp</a>
<button onClick={onClose} className="px-4 py-2 border rounded-md">Close</button>
</div>
</div>
</div>
</div>
</div>
);
}