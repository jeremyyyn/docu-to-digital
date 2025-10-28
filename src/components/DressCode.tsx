import { useState } from "react";
import dressCode1 from "@/assets/dress-code-1.webp";
import dressCode2 from "@/assets/dress-code-2.webp";
import dressCode3 from "@/assets/dress-code-3.webp";
import dressCode4 from "@/assets/dress-code-4.webp";
import dressCode5 from "@/assets/dress-code-5.webp";
import dressCode6 from "@/assets/dress-code-6.webp";

export const DressCode = () => {
  const [activeTab, setActiveTab] = useState<"mens" | "womens">("mens");

  // For now, both sets use the same images
  const images = [dressCode1, dressCode2, dressCode3, dressCode4, dressCode5, dressCode6];

  return (
    <section id="dress-code" className="py-16 sm:py-24 px-4" style={{ backgroundColor: '#fdf6ee' }}>
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-12 items-start">
          {/* Left side - Title and Buttons */}
          <div className="flex flex-col items-center lg:items-start space-y-6">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-light text-center lg:text-left" style={{ color: '#515b46' }}>
              Dress Code
            </h2>
            
            <div className="flex flex-col gap-3 w-full max-w-[220px]">
              <button
                onClick={() => setActiveTab("mens")}
                className={`px-8 py-3 rounded-md text-lg font-light transition-colors ${
                  activeTab === "mens"
                    ? "text-[#fdf6ee]"
                    : "bg-transparent text-[#515b46] border-2"
                }`}
                style={activeTab === "mens" ? { backgroundColor: '#515b46' } : { borderColor: '#515b46' }}
              >
                Mens
              </button>
              
              <button
                onClick={() => setActiveTab("womens")}
                className={`px-8 py-3 rounded-md text-lg font-light transition-colors ${
                  activeTab === "womens"
                    ? "text-[#fdf6ee]"
                    : "bg-transparent text-[#515b46] border-2"
                }`}
                style={activeTab === "womens" ? { backgroundColor: '#515b46' } : { borderColor: '#515b46' }}
              >
                Womens
              </button>
            </div>
          </div>

          {/* Right side - Image Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
            {images.map((img, index) => (
              <div
                key={index}
                className="aspect-[3/4] overflow-hidden rounded-lg"
              >
                <img
                  src={img}
                  alt={`${activeTab} dress code example ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
