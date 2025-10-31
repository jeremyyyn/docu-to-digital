import heroMain from "@/assets/hero-main.svg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-[80vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#515b46] pt-2 px-1 sm:px-2 pb-6 sm:pb-8 md:pb-12 lg:pb-16">
      {/* SVG Background */}
      <img 
        src={heroMain} 
        alt="Joanne & Mun Keat Wedding" 
        className="w-full h-auto"
      />
      
      {/* Navigation Buttons Overlay */}
      <div className="absolute top-8 sm:top-12 left-0 right-0 z-10 flex justify-center gap-4 sm:gap-8 md:gap-16 lg:gap-24 xl:gap-32 px-2 sm:px-4 flex-wrap">
        <button
          onClick={() => scrollToSection("rsvp")}
          className="text-[#515b46] hover:opacity-70 transition-opacity text-xs sm:text-sm md:text-base lg:text-lg font-medium"
        >
          RSVP
        </button>
        <button
          onClick={() => scrollToSection("itinerary")}
          className="text-[#515b46] hover:opacity-70 transition-opacity text-xs sm:text-sm md:text-base lg:text-lg font-medium"
        >
          Itinerary
        </button>
        <button
          onClick={() => scrollToSection("dress-code")}
          className="text-[#515b46] hover:opacity-70 transition-opacity text-xs sm:text-sm md:text-base lg:text-lg font-medium"
        >
          Dress Code
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className="text-[#515b46] hover:opacity-70 transition-opacity text-xs sm:text-sm md:text-base lg:text-lg font-medium"
        >
          About Us
        </button>
      </div>
    </section>
  );
};
