import mensLabel from "@/assets/mens-label.svg";
import womensLabel from "@/assets/womens-label.svg";

export const DressCode = () => {
  return (
    <section id="dress-code" className="py-16 sm:py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-center mb-12 sm:mb-16 text-primary">
          Dress Code
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Mens */}
          <div className="text-center">
            <div className="mb-6 sm:mb-8 flex justify-center">
              <img 
                src={mensLabel} 
                alt="Mens" 
                className="w-48 sm:w-56 md:w-64 h-auto"
              />
            </div>
            <div className="bg-card p-6 sm:p-8 rounded-lg border border-border">
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                Black tie optional. Dark suits with ties are welcome. 
                Please avoid casual wear such as jeans, sneakers, or t-shirts.
              </p>
            </div>
          </div>

          {/* Womens */}
          <div className="text-center">
            <div className="mb-6 sm:mb-8 flex justify-center">
              <img 
                src={womensLabel} 
                alt="Womens" 
                className="w-48 sm:w-56 md:w-64 h-auto"
              />
            </div>
            <div className="bg-card p-6 sm:p-8 rounded-lg border border-border">
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                Formal evening wear or cocktail dresses. 
                Please avoid white, cream, or ivory colors as they are reserved for the bride.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
