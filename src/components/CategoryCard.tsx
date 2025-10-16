export default function CategoryCard({ title }: { title: string }) {
return (
<div className="rounded-lg overflow-hidden bg-white shadow hover:shadow-lg transition p-4 flex flex-col justify-between">
<div>
<h3 className="font-semibold text-lg">{title}</h3>
<p className="text-sm text-gray-600 mt-2">Curated selection of {title.toLowerCase()} — checked for quality.</p>
</div>
<a href="#products" className="mt-4 inline-block text-sm text-rose-600">Browse {title}</a>
</div>
);
}