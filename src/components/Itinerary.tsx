import { Clock } from "lucide-react";

export const Itinerary = () => {
  const schedule = [
    { time: "4:00pm", event: "Guest Arrival" },
    { time: "5:00pm", event: "Vow Ceremony" },
    { time: "6:00pm", event: "Cocktails" },
    { time: "7:00pm", event: "Dinner" },
    { time: "11:00pm", event: "After Party" },
  ];

  return (
    <section id="itinerary" className="py-16 sm:py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-center mb-6 sm:mb-8 text-primary">
          Itinerary
        </h2>
        
        <p className="text-center text-base sm:text-lg text-muted-foreground mb-12 sm:mb-16 max-w-3xl mx-auto">
          Please allow up to 1 hour of travel time from the city to La Chapelle due to traffic during rush hour.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {schedule.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 sm:p-8 bg-card border border-border rounded-lg hover:shadow-lg transition-shadow"
            >
              <Clock className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-4 text-primary/60" />
              <p className="text-2xl sm:text-3xl font-light text-primary mb-2">
                {item.time}
              </p>
              <p className="text-base sm:text-lg text-foreground/80">
                {item.event}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
