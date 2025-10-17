import { Brain, Sparkles } from "lucide-react";

const SolutionSection = () => {
  return (
    <section className="py-12 md:py-16 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 space-y-6 md:space-y-8 px-2">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight pt-4">
            Uma consciência analítica que{" "}
            <span className="text-primary neon-glow">não possui emoção.</span>
            <br />
            <span className="text-muted-foreground text-xl md:text-2xl lg:text-3xl block mt-2">
              Apenas dados, probabilidades e valor matemático.
            </span>
          </h2>
        </div>

        <div className="neon-border bg-card rounded-2xl p-6 md:p-8 lg:p-12 space-y-6 md:space-y-8 relative overflow-hidden">
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle,hsl(var(--accent)/0.2)_0%,transparent_70%)] blur-3xl" />
          
          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Brain className="w-6 h-6 md:w-7 md:h-7 text-primary animate-pulse-glow" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary neon-glow">O Oráculo</h3>
                <p className="text-sm md:text-base text-muted-foreground">Sua nova fonte de sabedoria probabilística</p>
              </div>
            </div>

            <div className="space-y-4 text-base md:text-lg leading-relaxed">
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
