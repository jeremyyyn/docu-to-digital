import { Hotel } from "lucide-react";

export const HotelRecommendations = () => {
  const rooms = [
    { type: "Junior Suite (45 sqm.)", rate: "THB 5,500" },
    { type: "Junior Suite Prestige (45 sqm.)", rate: "THB 6,000" },
    { type: "1-Bedroom Suite City View (70 sqm.)", rate: "THB 6,500" },
    { type: "1-Bedroom Suite Park View (70 sqm.)", rate: "THB 7,000" },
    { type: "1-Bedroom Prestige (70 sqm.)", rate: "THB 7,500" },
  ];

  return (
    <section id="hotels" className="py-16 sm:py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-center mb-6 sm:mb-8 text-primary">
          Hotel Recommendations
        </h2>

        <div className="text-center mb-8 sm:mb-12">
          <Hotel className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 text-primary/60" />
          <h3 className="text-2xl sm:text-3xl font-light text-primary mb-4">
            The Oriental Residence Bangkok
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground italic">
            Rates available until 15 December 2025
          </p>
        </div>

        <div className="overflow-x-auto mb-8 sm:mb-12">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-primary/20">
                <th className="text-left p-3 sm:p-4 text-sm sm:text-base font-medium text-primary">
                  Room Type
                </th>
                <th className="text-left p-3 sm:p-4 text-sm sm:text-base font-medium text-primary">
                  Rate
                </th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room, index) => (
                <tr
                  key={index}
                  className="border-b border-border hover:bg-muted/20 transition-colors"
                >
                  <td className="p-3 sm:p-4 text-sm sm:text-base text-foreground/80">
                    {room.type}
                  </td>
                  <td className="p-3 sm:p-4 text-sm sm:text-base text-foreground/80">
                    {room.rate}
                    <span className="block text-xs sm:text-sm text-muted-foreground mt-1">
                      Net incl. daily breakfast for 1-2 persons per room per night
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-card p-6 sm:p-8 rounded-lg border border-border text-center">
          <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
            Kindly please email:{" "}
            <a
              href="mailto:reservations.oriental@oriental-residence.com"
              className="text-primary hover:underline"
            >
              reservations.oriental@oriental-residence.com
            </a>
            , cc:{" "}
            <a
              href="mailto:arunsak.p@oriental-residence.com"
              className="text-primary hover:underline"
            >
              arunsak.p@oriental-residence.com
            </a>{" "}
            and quote <strong>"Mun Keat and Joanne Wedding"</strong> to enjoy these rates.
          </p>
        </div>
      </div>
    </section>
  );
};
