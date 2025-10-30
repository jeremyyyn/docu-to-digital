import { useState } from "react";
import dressCode1 from "@/assets/dress-code-1.webp";
import dressCode2 from "@/assets/dress-code-2.webp";
import dressCode3 from "@/assets/dress-code-3.webp";
import dressCode4 from "@/assets/dress-code-4.webp";
import dressCode5 from "@/assets/dress-code-5.webp";
import dressCode6 from "@/assets/dress-code-6.webp";
import womensDressCode1 from "@/assets/womens-dress-code-1.webp";
import mensLabel from "@/assets/mens-label.svg";
import mensLabelActive from "@/assets/mens-label-active.svg";
import womensLabel from "@/assets/womens-label.svg";
import womensLabelActive from "@/assets/womens-label-active.svg";

export const DressCode = () => {
  const [activeTab, setActiveTab] = useState<"mens" | "womens">("mens");

  const mensImages = [dressCode1, dressCode2, dressCode3, dressCode4, dressCode5, dressCode6];
  const womensImages = [womensDressCode1, womensDressCode1, womensDressCode1, womensDressCode1, womensDressCode1, womensDressCode1];
  
  const images = activeTab === "mens" ? mensImages : womensImages;

  return (
    <section id="dress-code" className="py-12 sm:py-16 md:py-24 px-4" style={{ backgroundColor: '#fdf6ee' }}>
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Left side - Title and Buttons */}
          <div className="flex flex-col items-center lg:items-start space-y-6 sm:space-y-8">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-center lg:text-left"
              style={{ color: '#515b46' }}
            >
              Dress Code
            </h2>
            
            <div className="flex flex-row lg:flex-col gap-4 sm:gap-6 w-full max-w-[360px] lg:max-w-[180px] justify-center lg:justify-start lg:ml-16">

              <button
                onClick={() => setActiveTab("mens")}
                className="transition-opacity hover:opacity-80"
              >
              <img 
                src={activeTab === "mens" ? mensLabel : mensLabelActive} 
                alt="Mens" 
                className="w-full"
              />
              </button>
              
              <button
                onClick={() => setActiveTab("womens")}
                className="transition-opacity hover:opacity-80"
              >
              <img 
                src={activeTab === "womens" ? womensLabel : womensLabelActive} 
                alt="Womens" 
                className="w-full"
              />
              </button>
            </div>
          </div>

          {/* Right side - Image Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
            {images.map((img, index) => (
              <div
                key={index}
                className="aspect-[3/4] overflow-hidden"
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
