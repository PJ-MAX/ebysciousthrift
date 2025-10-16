'use client';
import { useState } from 'react';
import ProductModal from './ProductModal';
import { SITE } from '../constants/site';


export default function ProductCard({ product }: { product: { id: string; name: string; price: string; image: string } }) {
const [open, setOpen] = useState(false);
const waMsg = `Hi, I'm interested in ${product.name} (ID: ${product.id}). Is it available?`;
const waLink = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(waMsg)}`;


return (
<article className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition">
<button onClick={() => setOpen(true)} className="w-full text-left">
<img src={product.image} alt={product.name} className="product-img" />
<div className="p-3">
<h3 className="font-medium">{product.name}</h3>
<p className="text-sm text-gray-600 mt-1">{product.price}</p>
</div>
</button>


<div className="p-3 pt-0 flex gap-2">
<a href={waLink} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex justify-center items-center gap-2 py-2 border rounded-md bg-emerald-500 text-white">Message</a>
<button onClick={() => setOpen(true)} className="px-3 py-2 border rounded-md">Quick view</button>
</div>


{open && <ProductModal product={product} onClose={() => setOpen(false)} />}
</article>
);
}