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
      className="relative min-h-screen flex items-center justify-center p-8 bg-[#515B46]"
    >
      {/* Inner beige container with border */}
      <div className="relative w-full h-[calc(100vh-64px)] bg-[#F5F1E8] border-2 border-[#515B46] flex items-center justify-center">
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
        
        {/* Top Navigation Bar */}
        <div className="absolute top-12 left-0 right-0 flex items-center justify-center gap-16 px-16">
          <button
            onClick={() => scrollToSection("rsvp")}
            className="text-[#515B46] hover:opacity-70 transition-opacity text-base font-normal"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            RSVP
          </button>
          <button
            onClick={() => scrollToSection("itinerary")}
            className="text-[#515B46] hover:opacity-70 transition-opacity text-base font-normal"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Itinerary
          </button>
          
          {/* Center Logo */}
          <img 
            src={logo} 
            alt="MJ Logo" 
            className="w-[48px] h-auto mx-8"
          />
          
          <button
            onClick={() => scrollToSection("dress-code")}
            className="text-[#515B46] hover:opacity-70 transition-opacity text-base font-normal"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Dress Code
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-[#515B46] hover:opacity-70 transition-opacity text-base font-normal"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            About Us
          </button>
        </div>
        
        {/* Center Content */}
        <div className="flex flex-col items-center justify-center gap-16">
          {/* Names */}
          <img 
            src={namesText} 
            alt="Mun Keat and Joanne" 
            className="w-full max-w-[700px] h-auto"
          />
          
          {/* Date and Location Box */}
          <div className="border-2 border-[#515B46] px-12 py-4 flex flex-col items-center gap-1">
            <p 
              className="text-[#515B46] text-3xl font-light"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              March 6th, 2026
            </p>
            <p 
              className="text-[#515B46] text-base font-light"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              La Chapelle, Bangkok
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
