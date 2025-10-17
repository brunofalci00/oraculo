import { Button } from "@/components/ui/button";
import { Check, Shield } from "lucide-react";

const OfferSection = () => {
  const features = [
    "O Veredito: Análise de valor pré-aposta ilimitada",
    "O Espelho da Verdade: Dashboard de performance completo",
    "O Mapa do Futuro: Planejador de metas e recuperação",
    "O Vigia Silencioso: Alertas proativos de oportunidades e riscos",
    "Acesso por 12 meses completos",
  ];

  const handleCTA = () => {
    // Aqui você pode adicionar a lógica de redirecionamento para WhatsApp ou checkout
    window.open('https://wa.me/seu-numero', '_blank');
  };

  return (
    <section id="offer" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 space-y-6">
          <p className="text-xl text-primary uppercase tracking-wider font-mono neon-glow">[ A OFERTA ]</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Acesso à sabedoria{" "}
            <span className="text-primary neon-glow">não é um custo.</span>
            <br />
            <span className="text-accent neon-glow-red">É um investimento.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Quanto vale ter uma vantagem analítica sobre o mercado e, principalmente, sobre seus próprios impulsos?
          </p>
        </div>

        <div className="neon-border bg-card rounded-2xl p-8 md:p-12 space-y-8 relative overflow-hidden">
          {/* Decorative gradients */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[radial-gradient(circle,hsl(var(--primary)/0.15)_0%,transparent_70%)] blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[radial-gradient(circle,hsl(var(--accent)/0.15)_0%,transparent_70%)] blur-3xl" />
          
          <div className="relative z-10 space-y-8">
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-bold text-foreground font-mono">ACESSO ANUAL AO ORÁCULO</h3>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-sm text-muted-foreground font-mono">PAGAMENTO ÚNICO DE</span>
                <span className="text-7xl font-bold text-primary neon-glow font-mono">R$ 297</span>
                <span className="text-2xl text-muted-foreground">,00</span>
              </div>
              <p className="text-muted-foreground italic font-mono">
                (O equivalente a apenas R$ 24,75 por mês)
              </p>
            </div>

            <div className="space-y-4">
              <p className="font-semibold text-foreground text-lg">O que o seu acesso inclui:</p>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <Button 
                size="xl" 
                variant="oracle" 
                className="w-full"
                onClick={handleCTA}
              >
                Quero Consultar O Oráculo Agora
              </Button>
            </div>

            <div className="neon-border-purple bg-accent/5 rounded-lg p-6 space-y-3">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-accent" />
                <h4 className="font-bold text-accent text-lg neon-glow-purple">
                  Garantia de Sabedoria de 7 Dias
                </h4>
              </div>
              <p className="text-foreground leading-relaxed">
                Sua confiança é nossa prioridade. Consulte O Oráculo, submeta suas entradas, use as ferramentas por 7 dias. 
                Se você não sentir que sua tomada de decisão se tornou mais clara, lógica e profissional, basta nos enviar 
                uma mensagem e devolvemos 100% do seu investimento.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-xl text-foreground">
            Você tem duas opções:
          </p>
          <p className="text-lg text-muted-foreground">
            Continuar operando com base na <span className="text-destructive font-semibold">emoção e no "achismo"</span>,
          </p>
          <p className="text-lg text-muted-foreground">
            ou passar a operar com um <span className="text-primary font-semibold neon-glow">Oráculo</span> ao seu lado.
          </p>
          <p className="text-2xl font-bold text-foreground pt-4">
            A escolha é sua.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
