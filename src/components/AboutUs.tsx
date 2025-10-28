export const AboutUs = () => {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-center mb-8 sm:mb-12 text-primary">
          About Us
        </h2>
        
        <div className="prose prose-lg max-w-none text-center">
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-6">
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie 
            consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan 
            et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis 
            dolore te feugait nulla facilisi.
          </p>
          
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh 
            euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad 
            minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut 
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
  );
};
