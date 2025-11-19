import { SITE } from '../constants/site';

export default function Hero() {
  const waUrl = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
    "Hi! I'm interested in your collection."
  )}`;

  return (
<section className="relative mt-12 sm:mt-16 lg:mt-24 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT — TEXT */}
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Ebycious Thrift Store
          </h1>

          <p className="text-gray-700 max-w-md mx-auto lg:mx-0 text-base sm:text-lg">
            Curated, first-grade ladies thrift wear — stylish, affordable & ready to shop.
            Message us on WhatsApp to reserve an item or ask about sizes.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 rounded-md text-sm sm:text-base text-center"
            >
              Message on WhatsApp
            </a>

            <a
              href="#products"
              className="border border-gray-300 px-5 py-3 rounded-md text-sm sm:text-base text-center"
            >
              Browse looks
            </a>
          </div>

          {/* CONTACT INFO */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-2 text-sm text-gray-600 justify-center lg:justify-start">
            <div className="flex items-center gap-2">
              📞 <span>{SITE.whatsappDisplay}</span>
            </div>
            <div className="flex items-center gap-2 max-w-xs">
              📍 <span>{SITE.address}</span>
            </div>
          </div>
        </div>

        {/* RIGHT — IMAGE */}
        <div className="w-full">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/hero.jpg"
              alt="Ebycious collection"
              className="w-full h-64 sm:h-80 md:h-96 object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
