import { MessageSquare } from "lucide-react";

const WhatsAppDemoSection = () => {
  return (
    <section className="py-12 md:py-16 px-4 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[radial-gradient(circle,hsl(var(--primary)/0.15)_0%,transparent_70%)] blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle,hsl(var(--accent)/0.15)_0%,transparent_70%)] blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 space-y-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageSquare className="w-8 h-8 text-primary" />
            <p className="text-xl text-primary uppercase tracking-wider font-mono neon-glow">
              [ VEJA O ORÁCULO EM AÇÃO ]
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Análise matemática direto no seu{" "}
            <span className="text-primary neon-glow">WhatsApp</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Envie suas apostas e receba análises detalhadas com probabilidades, valor esperado e recomendações baseadas em dados reais
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
          {/* First mockup - Setup */}
          <div className="space-y-4">
            <div className="neon-border bg-card rounded-2xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Configure seu perfil</h3>
                  <p className="text-muted-foreground">
                    Defina sua banca, stake e metas para análises personalizadas
                  </p>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/whatsapp-demo-2.png"
                alt="Configurando O Oráculo no WhatsApp"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>

          {/* Second mockup - Analysis */}
          <div className="space-y-4">
            <div className="neon-border bg-card rounded-2xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Envie sua entrada</h3>
                  <p className="text-muted-foreground">
                    Mande os detalhes da aposta: jogo, odd e quanto você quer apostar
                  </p>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/whatsapp-demo-1.png"
                alt="O Oráculo analisando aposta no WhatsApp"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Features highlight */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
              <span className="text-3xl">📊</span>
            </div>
            <h4 className="font-bold text-foreground">Análise Instantânea</h4>
            <p className="text-sm text-muted-foreground">
              Veredito em segundos com probabilidades e valor esperado
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
              <span className="text-3xl">🎯</span>
            </div>
            <h4 className="font-bold text-foreground">Gestão Automática</h4>
            <p className="text-sm text-muted-foreground">
              Recomendações de stake baseadas na sua banca e metas
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
              <span className="text-3xl">🛡️</span>
            </div>
            <h4 className="font-bold text-foreground">Proteção Anti-Tilt</h4>
            <p className="text-sm text-muted-foreground">
              Alertas quando detectar padrões emocionais perigosos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppDemoSection;
