import { SITE } from '../constants/site';


export default function MapBlock() {
const mapsEmbed = `https://www.google.com/maps?q=${SITE.googleMapsQuery}&output=embed`;
const mapsDirections = `https://www.google.com/maps/dir/?api=1&destination=${SITE.googleMapsQuery}`;


return (
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
<div className="rounded overflow-hidden">
<iframe src={mapsEmbed} width="100%" height="360" loading="lazy" />
</div>
<div>
<h3 className="font-semibold">Visit us</h3>
<p className="text-gray-700 mt-2">{SITE.address}</p>
<p className="text-sm text-gray-600 mt-2">Open: Mon–Sat 10:00 — 19:00</p>
<div className="mt-4 flex gap-3">
<a href={mapsDirections} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border rounded-md">Get directions</a>
<a href={`https://wa.me/${SITE.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-emerald-500 text-white rounded-md">Message on WhatsApp</a>
</div>
</div>
</div>
);
}