import { X, Check } from "lucide-react";

const ComparisonSection = () => {
  const comparisons = [
    {
      feature: "Análise de Valor das Odds",
      without: false,
      with: true,
    },
    {
      feature: "Gestão de Banca Automática",
      without: false,
      with: true,
    },
    {
      feature: "Dashboard de Performance",
      without: false,
      with: true,
    },
    {
      feature: "Planejamento de Metas",
      without: false,
      with: true,
    },
    {
      feature: "Alertas de Comportamento Emocional",
      without: false,
      with: true,
    },
    {
      feature: "Análise Baseada em Dados",
      without: false,
      with: true,
    },
    {
      feature: "Apostas por Impulso",
      without: true,
      with: false,
    },
    {
      feature: "Decisões Emocionais",
      without: true,
      with: false,
    },
  ];

  return (
    <section className="py-12 md:py-16 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            A diferença entre{" "}
            <span className="text-accent neon-glow-red">apostar no escuro</span>
            <br />e{" "}
            <span className="text-primary neon-glow">operar com estratégia</span>
          </h2>
        </div>

        <div className="neon-border bg-card rounded-2xl overflow-hidden">
          {/* Header - Desktop */}
          <div className="hidden md:grid grid-cols-3 gap-4 bg-card/50 p-6 border-b border-primary/20">
            <div className="text-center">
              <p className="text-sm text-muted-foreground uppercase tracking-wider">Funcionalidade</p>
            </div>
            <div className="text-center">
              <div className="inline-block px-4 py-2 rounded-lg bg-destructive/20 border border-destructive/30">
                <p className="font-bold text-accent neon-glow-red">Sem O Oráculo</p>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-block px-4 py-2 rounded-lg bg-primary/20 border border-primary/30">
                <p className="font-bold text-primary neon-glow">Com O Oráculo</p>
              </div>
            </div>
          </div>

          {/* Rows - Desktop */}
          <div className="hidden md:block divide-y divide-primary/10">
            {comparisons.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-4 p-6 hover:bg-primary/5 transition-colors duration-200"
              >
                <div className="flex items-center">
                  <p className="text-foreground font-medium">{item.feature}</p>
                </div>
                <div className="flex items-center justify-center">
                  {item.without ? (
                    <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-accent" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      <X className="w-5 h-5 text-muted-foreground" />
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-center">
                  {item.with ? (
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      <X className="w-5 h-5 text-muted-foreground" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden divide-y divide-primary/10">
            {comparisons.map((item, index) => (
              <div key={index} className="p-6 space-y-4">
                <p className="text-foreground font-medium text-center">{item.feature}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-xs text-center text-muted-foreground uppercase">Sem O Oráculo</p>
                    <div className="flex justify-center">
                      {item.without ? (
                        <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
                          <Check className="w-5 h-5 text-accent" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                          <X className="w-5 h-5 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs text-center text-primary uppercase">Com O Oráculo</p>
                    <div className="flex justify-center">
                      {item.with ? (
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                          <Check className="w-5 h-5 text-primary" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                          <X className="w-5 h-5 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="bg-card/50 p-8 border-t border-primary/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-accent neon-glow-red flex items-center gap-2">
                  <X className="w-5 h-5" />
                  Sem O Oráculo
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Você opera com base em sensações, dicas de terceiros e análises superficiais.
                  No fim do mês, o saldo é negativo e você não sabe exatamente onde errou.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-primary neon-glow flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  Com O Oráculo
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cada decisão é validada matematicamente. Você sabe exatamente o que funciona,
                  o que não funciona, e tem um plano claro para crescer sua banca de forma sustentável.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
