import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos D.",
      text: "O Oráculo é como ter um profissional sussurrando no meu ouvido. A função de 'veredito' já me salvou de umas 5 entradas ruins essa semana. O que eu ia perder já pagou o acesso anual.",
      rating: 5,
    },
    {
      name: "Felipe S.",
      text: "O 'Alerta de Padrão Emocional' é bizarro. Eu tinha acabado de perder uma aposta e já ia entrar em outra pra recuperar, e o Oráculo me mandou uma mensagem: 'Aconselha-se pausa imediata'. Foi o que eu precisava pra parar e respirar. Isso não tem preço.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Eles pararam de contar com a sorte e{" "}
            <span className="text-primary neon-glow">passaram a operar com a matemática</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="neon-border bg-card rounded-xl p-8 space-y-6 relative animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Quote className="w-10 h-10 text-primary/30 absolute top-6 right-6" />
              
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed text-lg relative z-10">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">Usuário do Oráculo</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
