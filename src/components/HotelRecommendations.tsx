import hotelInterior from "@/assets/hotel-interior.webp";

export const HotelRecommendations = () => {
  const rooms = [
    { type: "Junior Suite (45 sqm.)", rate: "THB 5,500 Net" },
    { type: "Junior Suite Prestige (45 sqm.)", rate: "THB 6,000 Net" },
    { type: "1-Bedroom Suite City View (70 sqm.)", rate: "THB 6,500 Net" },
    { type: "1-Bedroom Suite Park View (70 sqm.)", rate: "THB 7,000 Net" },
    { type: "1-Bedroom Prestige (70 sqm.)", rate: "THB 7,500 Net" },
  ];

  return (
    <section id="hotels" className="py-16 sm:py-24 px-4" style={{ backgroundColor: '#fdf6ee' }}>
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left side - Hotel Image */}
          <div className="w-full">
            <img
              src={hotelInterior}
              alt="Oriental Residence Bangkok Interior"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-2" style={{ color: '#515b46' }}>
                Oriental Residences Bangkok
              </h2>
              <p className="text-xl sm:text-2xl font-light" style={{ color: '#515b46' }}>
                Hotel Recommendation
              </p>
            </div>

            {/* Decorative leaf element */}
            <div className="py-4">
              <svg width="80" height="30" viewBox="0 0 80 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 15C10 15 15 10 20 15C25 20 30 15 35 15C40 15 45 20 50 15C55 10 60 15 65 15C70 15 75 10 80 15" stroke="#515b46" strokeWidth="1.5" fill="none"/>
                <ellipse cx="12" cy="10" rx="3" ry="5" fill="#515b46" opacity="0.3"/>
                <ellipse cx="28" cy="20" rx="3" ry="5" fill="#515b46" opacity="0.3"/>
                <ellipse cx="45" cy="10" rx="3" ry="5" fill="#515b46" opacity="0.3"/>
                <ellipse cx="62" cy="20" rx="3" ry="5" fill="#515b46" opacity="0.3"/>
              </svg>
            </div>

            {/* Room listings */}
            <div className="space-y-4">
              {rooms.map((room, index) => (
                <div key={index} className="space-y-1">
                  <p className="text-base sm:text-lg" style={{ color: '#515b46' }}>
                    <span className="font-medium">{room.type}</span> | <span className="font-medium">{room.rate}</span>
                  </p>
                  <p className="text-sm text-foreground/60">
                    incl. daily breakfast for 1-2 persons per room per night
                  </p>
                </div>
              ))}
            </div>

            {/* Contact information */}
            <div className="pt-6 space-y-2">
              <p className="text-sm sm:text-base" style={{ color: '#515b46' }}>
                Rates are available till 15 December 2025. Kindly please email:{" "}
                <a
                  href="mailto:reservations.oriental@oriental-residence.com"
                  className="hover:underline"
                  style={{ color: '#515b46' }}
                >
                  reservations.oriental@oriental-residence.com
                </a>
                , cc:{" "}
                <a
                  href="mailto:arunsak.p@oriental-residence.com"
                  className="hover:underline"
                  style={{ color: '#515b46' }}
                >
                  arunsak.p@oriental-residence.com
                </a>{" "}
                and quote <strong>"Mun Keat and Joanne Wedding"</strong> to enjoy the following rates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
