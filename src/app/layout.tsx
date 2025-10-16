import './globals.css';
import { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton';


export const metadata = {
title: 'Ebycious Thrift Store',
description: "Quality ladies' thrift wear — message us on WhatsApp to buy",
};


export default function RootLayout({ children }: { children: ReactNode }) {
return (
<html lang="en">
<body className="min-h-screen bg-gray-50 text-gray-900">
<Header />
<main className="pt-20">{children}</main>
<Footer />
<FloatingWhatsAppButton />
</body>
</html>
);
}