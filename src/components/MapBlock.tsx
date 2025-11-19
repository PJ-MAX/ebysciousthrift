import { SITE } from '../constants/site';

export default function MapBlock() {
  const mapsEmbed = `https://www.google.com/maps?q=${SITE.googleMapsQuery}&output=embed`;
  const mapsDirections = `https://www.google.com/maps/dir/?api=1&destination=${SITE.googleMapsQuery}`;

  return (
    <section className="px-4 sm:px-6 lg:px-8 my-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        {/* MAP */}
        <div className="rounded-lg overflow-hidden shadow-md w-full">
          <iframe
            src={mapsEmbed}
            className="w-full h-64 sm:h-80 md:h-96"
            loading="lazy"
            allowFullScreen
          />
        </div>

        {/* TEXT BLOCK */}
        <div className="text-center lg:text-left space-y-4">
          <h3 className="font-bold text-2xl">Visit Us</h3>

          <p className="text-gray-700 max-w-md mx-auto lg:mx-0">
            {SITE.address}
          </p>

          <p className="text-sm text-gray-600 mt-2">
            Open: Mon–Sat • 10:00 AM – 7:00 PM
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4 justify-center lg:justify-start">
            <a
              href={mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 border rounded-md text-sm sm:text-base text-center"
            >
              Get Directions
            </a>

            <a
              href={`https://wa.me/${SITE.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md text-sm sm:text-base text-center"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
