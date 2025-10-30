import curtainDecoration from "@/assets/curtain-decoration.svg";
import candleDecoration from "@/assets/candle-decoration.svg";
import couplePhoto from "@/assets/couple-photo.webp";
import ovalFrame from "@/assets/oval-frame.svg";

export const AboutUs = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 relative" style={{ backgroundColor: '#515b46' }}>
      {/* Curtain decoration at top */}
      <div className="absolute top-0 left-0 right-0 w-full">
        <img 
          src={curtainDecoration} 
          alt="" 
          className="w-full h-auto"
        />
      </div>

      <div className="container mx-auto max-w-6xl relative pt-12 sm:pt-16 md:pt-20">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left side - Oval frame with couple photo */}
          <div className="flex justify-center lg:-translate-x-[120px]">
            <div className="relative w-full max-w-[280px] sm:max-w-md mx-auto">
              {/* Oval frame SVG */}
              <img 
                src={ovalFrame} 
                alt="" 
                className="absolute inset-0 w-full h-full"
                style={{ 
                  maxWidth: '400px',
                  margin: '0 auto'
                }}
              />
              {/* Couple image */}
              <div className="relative flex justify-center items-center" style={{ paddingTop: '150%' }}>
                <img 
                  src={couplePhoto} 
                  alt="Joanne and Mun Keat" 
                  className="absolute object-cover"
                  style={{ 
                    width: '85%',
                    height: '88%',
                    top: '6%',
                    left: '7.5%',
                    clipPath: 'ellipse(47% 48% at 50% 50%)'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-[#fdf6ee] flex flex-col items-center md:items-start px-4 sm:px-0">
            {/* Candle decoration */}
            <img 
              src={candleDecoration} 
              alt="" 
              className="w-32 sm:w-40 h-auto mb-4 sm:mb-6"
            />
            
            {/* Date and Location */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-2 text-center md:text-left">
              March 6th, 2026
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl font-light mb-6 sm:mb-8 text-center md:text-left">
              La Chapelle, Bangkok
            </p>
            
            {/* Description */}
            <p className="text-xs sm:text-sm leading-relaxed text-center md:text-left max-w-xl">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod 
              tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, 
              quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo 
              consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie 
              consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto 
              odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait 
              nulla facilisi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
