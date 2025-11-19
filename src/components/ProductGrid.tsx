'use client';
import ProductCard from './ProductCard';


const PRODUCTS = [
{ id: 'p001', name: 'Sleeveless Evening Dress', price: '₦8,000', image: '/images/product_1.jpg' },
{ id: 'p002', name: 'Peach Polka-Dot Midi Dress', price: '₦7,500', image: '/images/product_2.jpg' },
{ id: 'p003', name: 'Purple Puff-Sleeve Bodycon Dress', price: '₦8,000', image: '/images/product_3.jpg' },
{ id: 'p004', name: 'Purple Floral Midi Dress', price: '₦7,500', image: '/images/product_4.jpg' },
{ id: 'p005', name: 'Sleeveless Evening Dress', price: '₦7,800', image: '/images/product_5.jpg' },
{ id: 'p006', name: 'Peach Polka-Dot Midi Dress', price: '₦8,000', image: '/images/product_6.jpg' },
];


export default function ProductGrid() {
return (
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
{PRODUCTS.map((p) => (
<ProductCard key={p.id} product={p} />
))}
</div>
);
}