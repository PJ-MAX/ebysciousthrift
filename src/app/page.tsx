import Hero from '../components/Hero';
import InfoStrip from '../components/InfoStrip';
import CategoryCard from '../components/CategoryCard';
import ProductGrid from '../components/ProductGrid';
import MapBlock from '../components/MapBlock';
import Testimonials from '../components/Testimonials';


export default function Home() {
return (
<div className="container mx-auto px-4">
<Hero />
<InfoStrip />


<section id="categories" className="my-12">
<h2 className="text-2xl font-semibold mb-4">Shop by category</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
<CategoryCard title="Dresses" />
<CategoryCard title="Tops" />
<CategoryCard title="Jackets" />
<CategoryCard title="Accessories" />
</div>
</section>


<section id="products" className="my-12">
<h2 className="text-2xl font-semibold mb-4">Featured pieces</h2>
<ProductGrid />
</section>


<section id="about" className="my-12">
<h2 className="text-2xl font-semibold mb-4">About Ebycious</h2>
<p className="text-gray-700 max-w-3xl">We curate first-grade ladies thrift wear — inspected, cleaned and styled for modern wardrobes. Message us on WhatsApp to reserve or ask about sizes and availability.</p>
</section>


<section id="location" className="my-12">
<h2 className="text-2xl font-semibold mb-4">Location & directions</h2>
<MapBlock />
</section>


<section id="testimonials" className="my-12">
<h2 className="text-2xl font-semibold mb-4">What customers say</h2>
<Testimonials />
</section>


</div>
);
}