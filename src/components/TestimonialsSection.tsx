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
      <div className="container relative mx-auto max-w-5xl">
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

        <div className="flex flex-col items-center gap-10 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <img
              key={index}
              src={testimonial.image}
              alt={testimonial.alt}
              className="w-full"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
