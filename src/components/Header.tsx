'use client';
import Link from 'next/link';
import { SITE } from '../constants/site';


export default function Header() {
const waHref = `https://wa.me/${SITE.whatsappNumber}`;
return (
<header className="fixed inset-x-0 top-0 bg-white/80 backdrop-blur z-40 border-b">
<div className="container mx-auto flex items-center justify-between py-3 px-4">
<Link href="#" className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center text-white font-bold">E</div>
<span className="font-semibold">Ebycious Thrift</span>
</Link>


<nav className="hidden md:flex gap-6 items-center text-sm">
<a href="#products" className="hover:text-rose-600">Shop</a>
<a href="#about" className="hover:text-rose-600">About</a>
<a href="#location" className="hover:text-rose-600">Location</a>
<a href="#testimonials" className="hover:text-rose-600">Reviews</a>
</nav>


<div className="flex items-center gap-3">
<a href={waHref} rel="noopener noreferrer" target="_blank" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-2 rounded-md text-sm">
Message on WhatsApp
</a>


{/* Mobile menu placeholder */}
<button className="md:hidden p-2 rounded-md bg-gray-100">☰</button>
</div>
</div>
</header>
);
}