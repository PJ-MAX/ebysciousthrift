import { SITE } from '../constants/site';


export default function Hero() {
const waUrl = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent('Hi! I\'m interested in your collection.')} `;
return (
<section className="relative my-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
<div className="space-y-6">
<h1 className="text-4xl sm:text-5xl font-extrabold">Ebycious Thrift Store</h1>
<p className="text-gray-700 max-w-lg">Curated, first-grade ladies thrift wear — stylish, affordable & ready to shop. Message us on WhatsApp to reserve an item or ask about sizes.</p>
<div className="flex gap-3">
<a href={waUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 rounded-md">Message on WhatsApp</a>
<a href="#products" className="inline-block border border-gray-300 px-5 py-3 rounded-md">Browse looks</a>
</div>


<div className="flex gap-6 mt-4 text-sm text-gray-600">
<div className="flex items-center gap-2">📞 <span>{SITE.whatsappDisplay}</span></div>
<div className="flex items-center gap-2">📍 <span>{SITE.address}</span></div>
</div>
</div>


<div className="relative">
<div className="rounded-lg overflow-hidden shadow-lg">
<img src="/images/hero.jpg" alt="Ebycious collection" className="w-full h-72 sm:h-96 object-cover" />
</div>
</div>
</div>
</section>
);
}