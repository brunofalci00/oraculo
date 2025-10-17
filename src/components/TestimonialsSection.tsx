import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    image: "/testimonial-1.png",
    alt: "Print real de conversa no WhatsApp mostrando resultado positivo com O Oráculo",
    description: "Manin, eu não tava botando fé não. Em 2 semanas fiz 4k e quero bater 20k até o mês que vem.",
    name: "Carlos D.",
    role: "Trader esportivo",
    timestamp: "20:03",
    result: "+R$ 4.000 em 14 dias",
  },
  {
    image: "/testimonial-2.png",
    alt: "Print real de conversa no WhatsApp agradecendo o Oráculo",
    description: "Salve irmão! O Oráculo é muito top. Me ajudou demais mano.",
    name: "João P.",
    role: "Assinante do Oráculo",
    timestamp: "14:42",
    result: "ROI +62% no mês",
  },
  {
    image: "/testimonial-3.png",
    alt: "Print real de conversa no WhatsApp sobre banca recuperada",
    description: "Irmão, o Oráculo me salvou de uma banca 500 conto negativa! Tô divulgando pra geral kkkkk.",
    name: "Matheus S.",
    role: "Gestor de banca",
    timestamp: "12:59",
    result: "Banca recuperada",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative px-4 py-16 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.08),transparent_65%)] blur-3xl" />
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
          <CarouselContent className="-ml-4 md:-ml-6">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="basis-[88%] pl-4 sm:basis-[65%] md:basis-1/2 md:pl-6 xl:basis-1/3"
              >
                <Card className="h-full overflow-hidden border border-white/10 bg-card/80 text-card-foreground shadow-[0_25px_60px_rgba(0,0,0,0.55)] backdrop-blur">
                  <div className="flex items-center justify-between border-b border-white/5 px-6 py-4 text-[0.7rem] uppercase tracking-[0.32em] text-white/60">
                    <span className="flex items-center gap-2">
                      <span className="inline-flex h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.9)]" />
                      Conversa real
                    </span>
                    <span className="font-semibold text-white/70">{testimonial.timestamp}</span>
                  </div>

                  <div className="flex h-full flex-col justify-between space-y-6 px-6 py-6">
                    <div className="space-y-4">
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5">
                        <img
                          src={testimonial.image}
                          alt={testimonial.alt}
                          className="h-full w-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <p className="text-sm leading-relaxed text-white/70 md:text-base">&ldquo;{testimonial.description}&rdquo;</p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-white/70">
                      <div className="space-y-1">
                        <p className="text-base font-semibold text-white">{testimonial.name}</p>
                        <p className="text-xs uppercase tracking-[0.3em] text-white/50">{testimonial.role}</p>
                      </div>
                      <span className="whitespace-nowrap rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                        {testimonial.result}
                      </span>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden h-10 w-10 -left-10 border-white/20 bg-background/80 text-white hover:border-white/30 hover:bg-white/10 md:flex" />
          <CarouselNext className="hidden h-10 w-10 -right-10 border-white/20 bg-background/80 text-white hover:border-white/30 hover:bg-white/10 md:flex" />
        </Carousel>

        <div className="mt-10 flex items-center justify-center gap-3 text-xs text-white/60 md:text-sm">
          <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary)/0.8)]" />
          <span>Atualizamos os depoimentos semanalmente conforme os novos resultados chegam.</span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
