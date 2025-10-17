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
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            O maior inimigo do apostador{" "}
            <span className="text-accent neon-glow-red">não é a zebra.</span>
            <br />
            <span className="text-primary neon-glow">É a própria mente.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {enemies.map((enemy, index) => (
            <div
              key={index}
              className="neon-border bg-card rounded-lg p-8 space-y-4 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                <enemy.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{enemy.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {enemy.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto space-y-4">
          <p className="text-xl text-foreground leading-relaxed">
            A verdade é que, sem um método frio e calculista, você não é um investidor.
          </p>
          <p className="text-2xl font-bold font-mono">
            Você é apenas um <span className="text-accent neon-glow-red">torcedor com dinheiro em jogo</span>, contando com a sorte.
          </p>
          <p className="text-xl text-muted-foreground">
            E no longo prazo, a sorte sempre favorece a casa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AmplifySection;
