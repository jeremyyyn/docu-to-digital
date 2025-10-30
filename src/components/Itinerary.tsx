import itineraryIllustration from "@/assets/itinerary-illustration.svg";

export const Itinerary = () => {
  return (
    <section 
      id="itinerary" 
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#515b46' }}
    >
      <div className="container mx-auto max-w-7xl">
        <img
          src={itineraryIllustration}
          alt="The Itinerary - Guest Arrival at 4:00pm, Vow Ceremony at 5:00pm, Cocktails at 6:00pm, Dinner at 7:00pm, After Party at 11:00pm"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};
