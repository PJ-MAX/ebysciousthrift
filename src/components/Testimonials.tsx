const REVIEWS = [
{ id: 1, name: 'Ada', text: 'Lovely pieces — great quality and fast responses on WhatsApp.' },
{ id: 2, name: 'Chioma', text: 'I reserved a dress and picked it up same day. Highly recommend.' },
{ id: 3, name: 'Ngozi', text: 'Affordable and well-curated selection.' },
];


export default function Testimonials() {
return (
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
{REVIEWS.map((r) => (
<div key={r.id} className="bg-white p-4 rounded shadow">
<p className="text-gray-700">“{r.text}”</p>
<p className="mt-3 font-semibold">— {r.name}</p>
</div>
))}
</div>
);
}