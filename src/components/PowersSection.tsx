import { Scale, Eye, Map, Bell } from "lucide-react";

const PowersSection = () => {
  const powers = [
    {
      icon: Scale,
      title: "O Veredito",
      subtitle: "Análise Pré-Aposta",
      description: "Antes de fazer uma entrada, você a submete ao Oráculo. Ele analisa as odds, cruza com milhares de dados e te dá o veredito: \"Valor Positivo Encontrado\" ou \"As odds não compensam o risco\".",
      color: "primary",
    },
    {
      icon: Eye,
      title: "O Espelho da Verdade",
      subtitle: "Gestão de Banca",
      description: "Toda entrada confirmada é registrada. A qualquer momento, com um simples comando, O Oráculo te mostra seu desempenho real: lucro/prejuízo, ROI e taxa de acerto. Sem maquiagem. Apenas os fatos.",
      color: "accent",
    },
    {
      icon: Map,
      title: "O Mapa do Futuro",
      subtitle: "Estrategista de Metas",
      description: "Quebrou parte da banca? O Oráculo calcula o caminho matemático para a recuperação. Quer bater uma meta? Ele projeta o número de entradas e as odds necessárias. Ele transforma seu desejo em um plano.",
      color: "primary",
    },
    {
      icon: Bell,
      title: "O Vigia Silencioso",
      subtitle: "Proatividade",
      description: "O Oráculo não dorme. Ele monitora o mercado e seu comportamento, enviando alertas proativos sobre oportunidades de valor que ele encontrou ou sobre padrões emocionais perigosos que você está cometendo.",
      color: "accent",
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Como O Oráculo te transforma em um{" "}
            <span className="text-primary neon-glow">operador estratégico</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {powers.map((power, index) => (
            <div
              key={index}
              className={`${
                power.color === "primary" ? "neon-border" : "neon-border-purple"
              } bg-card rounded-xl p-8 space-y-6 transition-all duration-300 hover:scale-105 animate-fade-in`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-14 h-14 rounded-lg flex items-center justify-center ${
                    power.color === "primary" ? "bg-primary/20" : "bg-accent/20"
                  }`}
                >
                  <power.icon
                    className={`w-7 h-7 ${
                      power.color === "primary" ? "text-primary" : "text-accent"
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <h3
                    className={`text-2xl font-bold mb-1 ${
                      power.color === "primary"
                        ? "text-primary neon-glow"
                        : "text-accent neon-glow-purple"
                    }`}
                  >
                    {power.title}
                  </h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">
                    {power.subtitle}
                  </p>
                </div>
              </div>
              <p className="text-foreground leading-relaxed">{power.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PowersSection;
