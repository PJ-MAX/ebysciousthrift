import { SITE } from '../constants/site';


export default function Footer() {
return (
<footer className="bg-white border-t mt-12">
<div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-start gap-4">
<div>
<h4 className="font-semibold">Ebycious Thrift</h4>
<p className="text-sm text-gray-600 mt-2">{SITE.address}</p>
</div>
<div>
<a href={`https://wa.me/${SITE.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="inline-block bg-emerald-500 text-white px-4 py-2 rounded-md">Message on WhatsApp</a>
</div>
</div>
<div className="text-center text-sm text-gray-500 py-4">© {new Date().getFullYear()} Ebycious Thrift Store. All rights reserved.</div>
</footer>
);
}