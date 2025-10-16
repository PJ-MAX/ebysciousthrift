'use client';
import ProductCard from './ProductCard';


const PRODUCTS = [
{ id: 'p001', name: 'Vintage Floral Dress', price: '₦6,500', image: '/images/product-1.jpg' },
{ id: 'p002', name: 'Classic Blazer', price: '₦8,000', image: '/images/product-2.jpg' },
{ id: 'p003', name: 'Denim Jacket', price: '₦7,200', image: '/images/product-3.jpg' },
{ id: 'p004', name: 'Silk Blouse', price: '₦4,500', image: '/images/product-4.jpg' },
{ id: 'p005', name: 'Pleated Skirt', price: '₦3,800', image: '/images/product-5.jpg' },
{ id: 'p006', name: 'Statement Scarf', price: '₦2,500', image: '/images/product-6.jpg' },
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