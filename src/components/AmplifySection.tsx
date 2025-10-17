import { Target, TrendingDown, Zap } from "lucide-react";

const AmplifySection = () => {
  const enemies = [
    {
      icon: Target,
      title: "O \"Achismo\"",
      description: "Você aposta no time do coração ou contra o rival, ignorando as estatísticas. A emoção fala mais alto que a lógica.",
    },
    {
      icon: TrendingDown,
      title: "A Ganância",
      description: "Você acerta uma ou duas e já dobra o valor da aposta, sem gestão. Um erro e todo o lucro da semana vai pelo ralo.",
    },
    {
      icon: Zap,
      title: "O Desespero",
      description: "Você perde uma aposta e entra em modo \"recuperação\", fazendo entradas em mercados que não domina, com odds desajustadas, apenas para tentar reaver o dinheiro. É a receita para quebrar a banca.",
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16 space-y-4 md:space-y-6 px-2">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            O maior inimigo do apostador{" "}
            <span className="text-accent neon-glow-red">não é a zebra.</span>
            <br />
            <span className="text-primary neon-glow">É a própria mente.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12 md:mb-16">
          {enemies.map((enemy, index) => (
            <div
              key={index}
              className="neon-border bg-card rounded-lg p-6 md:p-8 space-y-4 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <enemy.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground">{enemy.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {enemy.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto space-y-4 px-2">
          <p className="text-base md:text-lg lg:text-xl text-foreground leading-relaxed">
            A verdade é que, sem um método frio e calculista, você não é um investidor.
          </p>
          <p className="text-xl md:text-2xl font-bold font-mono leading-tight">
            Você é apenas um <span className="text-accent neon-glow-red">torcedor com dinheiro em jogo</span>, contando com a sorte.
          </p>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
            E no longo prazo, a sorte sempre favorece a casa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AmplifySection;
