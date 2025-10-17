import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TestimonialsSection = () => {
  const testimonials = [
    {
      image: "/testimonial-1.png",
      alt: "Depoimento WhatsApp - Carlos D.",
    },
    {
      image: "/testimonial-2.png",
      alt: "Depoimento WhatsApp - Cliente satisfeito",
    },
    {
      image: "/testimonial-3.png",
      alt: "Depoimento WhatsApp - Recuperação de banca",
    },
  ];

  return (
    <section className="py-12 md:py-16 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16 space-y-4 md:space-y-6 px-2">
          <p className="text-base md:text-xl text-primary uppercase tracking-wider font-mono neon-glow">[ RESULTADOS REAIS ]</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Eles pararam de contar com a sorte e{" "}
            <span className="text-primary neon-glow">passaram a operar com a matemática</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Veja mensagens reais de usuários que transformaram suas apostas com análise matemática e gestão de banca profissional
          </p>
        </div>

        {/* Mobile: Stack vertically */}
        <div className="md:hidden flex flex-col gap-0 w-full px-0">
          {testimonials.map((testimonial, index) => (
            <img
              key={index}
              src={testimonial.image}
              alt={testimonial.alt}
              className="w-full h-auto"
              loading="lazy"
            />
          ))}
        </div>

        {/* Desktop: Carousel */}
        <div className="hidden md:block">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full max-w-full mx-auto"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="px-1">
                    <img
                      src={testimonial.image}
                      alt={testimonial.alt}
                      className="w-full h-auto rounded-lg object-cover shadow-2xl mx-auto"
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12 border-primary/30 bg-card hover:bg-primary/20 hover:border-primary" />
            <CarouselNext className="-right-12 border-primary/30 bg-card hover:bg-primary/20 hover:border-primary" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
