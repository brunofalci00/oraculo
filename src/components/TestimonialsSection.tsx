import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    image: "/testimonial-1.png",
    alt: "Print real de conversa no WhatsApp mostrando resultado positivo com O Oráculo",
  },
  {
    image: "/testimonial-2.png",
    alt: "Print real de conversa no WhatsApp agradecendo o Oráculo",
  },
  {
    image: "/testimonial-3.png",
    alt: "Print real de conversa no WhatsApp sobre banca recuperada",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative px-4 py-16 md:py-24">
      <div className="container relative mx-auto max-w-6xl">
        <div className="mb-12 space-y-4 px-2 text-center md:mb-16 md:space-y-6">
          <p className="font-mono text-base uppercase tracking-[0.35em] text-primary neon-glow md:text-xl">
            [ RESULTADOS REAIS ]
          </p>
          <h2 className="text-balance text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            Eles pararam de contar com a sorte e{" "}
            <span className="text-primary neon-glow">passaram a operar com a matemática</span>
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Veja mensagens reais de usuários que transformaram suas apostas com análise matemática e uma gestão de banca profissional.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-6">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-6 basis-[90%] sm:basis-[70%] md:basis-1/2 xl:basis-1/3"
              >
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/60 shadow-[0_25px_60px_rgba(0,0,0,0.55)]">
                  <img
                    src={testimonial.image}
                    alt={testimonial.alt}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden h-10 w-10 -left-10 border-white/20 bg-background/80 text-white hover:border-white/30 hover:bg-white/10 md:flex" />
          <CarouselNext className="hidden h-10 w-10 -right-10 border-white/20 bg-background/80 text-white hover:border-white/30 hover:bg-white/10 md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
