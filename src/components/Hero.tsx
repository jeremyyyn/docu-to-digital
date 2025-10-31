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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#515B46] p-8"
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
        className="absolute top-8 left-8 w-[120px] h-auto"
      />
      <img 
        src={topRight} 
        alt="" 
        className="absolute top-8 right-8 w-[120px] h-auto"
      />
      <img 
        src={bottomLeft} 
        alt="" 
        className="absolute bottom-8 left-8 w-[120px] h-auto"
      />
      <img 
        src={bottomRight} 
        alt="" 
        className="absolute bottom-8 right-8 w-[120px] h-auto"
      />
      
      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-12 w-full max-w-6xl mx-auto">
        {/* Logo */}
        <img 
          src={logo} 
          alt="MJ Logo" 
          className="w-[64px] h-auto"
        />
        
        {/* Names */}
        <img 
          src={namesText} 
          alt="Mun Keat and Joanne" 
          className="w-full max-w-[800px] h-auto mx-auto"
        />
      </div>
      
      {/* Navigation Buttons Overlay */}
      <div className="absolute top-8 left-8 right-8 z-20 flex justify-center gap-16 px-4">
        <button
          onClick={() => scrollToSection("rsvp")}
          className="text-[#515b46] hover:opacity-70 transition-opacity text-base font-medium"
        >
          RSVP
        </button>
        <button
          onClick={() => scrollToSection("itinerary")}
          className="text-[#515b46] hover:opacity-70 transition-opacity text-base font-medium"
        >
          Itinerary
        </button>
        <button
          onClick={() => scrollToSection("dress-code")}
          className="text-[#515b46] hover:opacity-70 transition-opacity text-base font-medium"
        >
          Dress Code
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className="text-[#515b46] hover:opacity-70 transition-opacity text-base font-medium"
        >
          About Us
        </button>
      </div>
    </section>
  );
};
