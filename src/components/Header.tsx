'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SITE } from '../constants/site';
import Image from "next/image";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const waHref = `https://wa.me/${SITE.whatsappNumber}`;

  return (
    <header className="fixed inset-x-0 top-0 bg-white/80 backdrop-blur z-40 border-b">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        
        {/* Logo + Brand Name */}
        <Link href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image
              src="/images/logo.png.jpg"
              alt="Ebycious Thrift Store Logo"
              width={40}
              height={40}
              className="object-cover"
              priority
            />
          </div>
          <span className="font-semibold text-base">Ebycious Thrift</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="#products" className="hover:text-rose-600">Shop</a>
          <a href="#about" className="hover:text-rose-600">About</a>
          <a href="#location" className="hover:text-rose-600">Location</a>
          <a href="#testimonials" className="hover:text-rose-600">Reviews</a>
        </nav>

        {/* WhatsApp + Mobile Menu */}
        <div className="flex items-center gap-3">
          
          {/* Desktop WhatsApp Button */}
          <a
            href={waHref}
            rel="noopener noreferrer"
            target="_blank"
            className="hidden md:inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-2 rounded-md text-sm"
          >
            Message on WhatsApp
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="md:hidden p-2 rounded-md bg-gray-100"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {openMenu && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <nav className="flex flex-col p-4 gap-4 text-sm">

            <a href="#products" className="py-2 border-b hover:text-rose-600">
              Shop
            </a>

            <a href="#about" className="py-2 border-b hover:text-rose-600">
              About
            </a>

            <a href="#location" className="py-2 border-b hover:text-rose-600">
              Location
            </a>

            <a href="#testimonials" className="py-2 border-b hover:text-rose-600">
              Reviews
            </a>

            {/* Mobile WhatsApp Button */}
            <a
              href={waHref}
              rel="noopener noreferrer"
              target="_blank"
              className="mt-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md text-center"
            >
              Message on WhatsApp
            </a>

          </nav>
        </div>
      )}
    </header>
  );
}
