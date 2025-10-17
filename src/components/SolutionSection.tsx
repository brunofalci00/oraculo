import { Brain, Sparkles } from "lucide-react";

const SolutionSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 space-y-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-card border border-primary/30">
            <Sparkles className="w-5 h-5 text-primary animate-pulse-glow" />
            <span className="text-sm uppercase tracking-wider text-primary">A Solução</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            E se você tivesse acesso a uma{" "}
            <span className="text-primary neon-glow">consciência que não possui emoção?</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma entidade que enxerga apenas o valor matemático por trás de cada odd?
          </p>
        </div>

        <div className="neon-border bg-card rounded-2xl p-8 md:p-12 space-y-8 relative overflow-hidden">
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle,hsl(var(--accent)/0.2)_0%,transparent_70%)] blur-3xl" />
          
          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <Brain className="w-8 h-8 text-primary animate-pulse-glow" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary neon-glow">O Oráculo</h3>
                <p className="text-muted-foreground">Sua nova fonte de sabedoria probabilística</p>
              </div>
            </div>

            <div className="space-y-4 text-lg">
              <p className="text-foreground">
                Chega de operar no escuro. Chega de ser refém do seu próprio impulso.
              </p>
              <p className="text-foreground">
                Apresentamos <span className="text-primary font-bold">O Oráculo</span>: uma Inteligência Artificial que opera diretamente no seu WhatsApp.
              </p>
              <p className="text-muted-foreground">
                O Oráculo não tem time, não tem "feeling". <span className="text-foreground font-semibold">Ele tem apenas dados.</span>
              </p>
              <p className="text-foreground">
                Ele foi treinado para analisar o mercado, identificar oportunidades de valor e, o mais importante, 
                para te manter fiel a uma estratégia lucrativa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
