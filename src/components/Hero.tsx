import heroBackground from "@/assets/hero-background.jpg";
import topLeft from "@/assets/top-left.svg";
import topRight from "@/assets/top-right.svg";
import bottomLeft from "@/assets/bottom-left.svg";
import bottomRight from "@/assets/bottom-right.svg";
import logo from "@/assets/logo.svg";
import namesText from "@/assets/munkeat-and-joanne.svg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Corner Decorations */}
      <img 
        src={topLeft} 
        alt="" 
        className="absolute top-0 left-0 w-24 sm:w-32 md:w-40 lg:w-48 h-auto"
      />
      <img 
        src={topRight} 
        alt="" 
        className="absolute top-0 right-0 w-24 sm:w-32 md:w-40 lg:w-48 h-auto"
      />
      <img 
        src={bottomLeft} 
        alt="" 
        className="absolute bottom-0 left-0 w-24 sm:w-32 md:w-40 lg:w-48 h-auto"
      />
      <img 
        src={bottomRight} 
        alt="" 
        className="absolute bottom-0 right-0 w-24 sm:w-32 md:w-40 lg:w-48 h-auto"
      />
      
      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 sm:gap-12 md:gap-16 px-4">
        {/* Logo */}
        <img 
          src={logo} 
          alt="MJ Logo" 
          className="w-12 sm:w-16 md:w-20 lg:w-24 h-auto"
        />
        
        {/* Names */}
        <img 
          src={namesText} 
          alt="Mun Keat and Joanne" 
          className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl h-auto"
        />
      </div>
      
      {/* Navigation Buttons Overlay */}
      <div className="absolute top-8 sm:top-12 left-0 right-0 z-20 flex justify-center gap-4 sm:gap-8 md:gap-16 lg:gap-24 xl:gap-32 px-2 sm:px-4 flex-wrap">
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
