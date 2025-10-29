import heroMain from "@/assets/hero-main.svg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#515b46] pt-2 px-2 pb-8 md:pt-2 md:px-2 md:pb-12 lg:pt-3 lg:px-3 lg:pb-16">
      {/* SVG Background */}
      <img 
        src={heroMain} 
        alt="Joanne & Mun Keat Wedding" 
        className="w-full h-auto"
      />
      
      {/* Navigation Buttons Overlay */}
      <div className="absolute top-1/2 left-0 right-0 z-10 flex justify-center gap-8 md:gap-12 px-4 -translate-y-1/2">
        <button
          onClick={() => scrollToSection("rsvp")}
          className="text-[#515b46] hover:opacity-70 transition-opacity text-base md:text-lg font-medium"
        >
          RSVP
        </button>
        <button
          onClick={() => scrollToSection("itinerary")}
          className="text-[#515b46] hover:opacity-70 transition-opacity text-base md:text-lg font-medium"
        >
          Itinerary
        </button>
        <button
          onClick={() => scrollToSection("dress-code")}
          className="text-[#515b46] hover:opacity-70 transition-opacity text-base md:text-lg font-medium"
        >
          Dress Code
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className="text-[#515b46] hover:opacity-70 transition-opacity text-base md:text-lg font-medium"
        >
          About Us
        </button>
      </div>
    </section>
  );
};
