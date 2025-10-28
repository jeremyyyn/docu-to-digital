import heroMain from "@/assets/hero-main.svg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* SVG Background */}
      <img 
        src={heroMain} 
        alt="Joanne & Mun Keat Wedding" 
        className="w-full h-auto"
      />
      
      {/* Navigation Buttons Overlay */}
      <div className="absolute top-8 left-0 right-0 z-10 flex justify-center gap-4 px-4">
        <button
          onClick={() => scrollToSection("rsvp")}
          className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm uppercase tracking-wider"
        >
          RSVP
        </button>
        <button
          onClick={() => scrollToSection("itinerary")}
          className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm uppercase tracking-wider"
        >
          Itinerary
        </button>
        <button
          onClick={() => scrollToSection("dress-code")}
          className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm uppercase tracking-wider"
        >
          Dress Code
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm uppercase tracking-wider"
        >
          About Us
        </button>
      </div>
    </section>
  );
};
