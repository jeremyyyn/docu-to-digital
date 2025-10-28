import ovalDecoration from "@/assets/oval-decoration.svg";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Decorative oval */}
          <div className="mb-8 sm:mb-12 flex justify-center">
            <img 
              src={ovalDecoration} 
              alt="" 
              className="w-32 h-auto sm:w-40 md:w-48 opacity-60"
            />
          </div>

          {/* Names */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light mb-4 sm:mb-6 text-primary tracking-wide">
            Joanne & Mun Keat
          </h1>
          
          <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="h-px w-12 sm:w-20 bg-primary/30" />
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground italic">
              are getting married!
            </p>
            <div className="h-px w-12 sm:w-20 bg-primary/30" />
          </div>

          {/* Date & Location */}
          <div className="space-y-2 sm:space-y-3 mb-12 sm:mb-16">
            <p className="text-3xl sm:text-4xl md:text-5xl font-light text-primary">
              March 6th, 2026
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light">
              La Chapelle, Bangkok
            </p>
          </div>

          {/* Description */}
          <div className="max-w-2xl mx-auto">
            <p className="text-base sm:text-lg text-foreground/70 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod 
              tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, 
              quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo 
              consequat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
