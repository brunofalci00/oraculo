import { Button } from "@/components/ui/button";
import Terminal from "@/components/Terminal";
import DemoDialog from "@/components/DemoDialog";
import SocialProofBadges from "@/components/SocialProofBadges";
import heroImage from "@/assets/hero-oracle.jpg";

const Hero = () => {
  const scrollToOffer = () => {
    const offerSection = document.getElementById('offer');
    offerSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="AI Oracle Technology"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      {/* Radial gradient effect */}
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,hsl(var(--primary)/0.15)_0%,transparent_70%)]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 mx-auto max-w-5xl">
        <div className="text-center space-y-8 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto px-2 pt-8">
            <span className="text-foreground">Suas apostas são guiadas pela </span>
            <span className="text-accent neon-glow-red">emoção </span>
            <span className="text-foreground">ou pela </span>
            <span className="text-primary neon-glow">matemática?</span>
            <br />
            <span className="text-muted-foreground text-xl sm:text-2xl md:text-3xl mt-4 block">
              A resposta define seu lucro.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto px-4">
            Você analisa um jogo, sente confiança, faz a entrada... e a aposta é perdida nos últimos minutos.
            A frustração vem, e com ela, a vontade de <span className="text-accent font-semibold">"recuperar o prejuízo"</span> em qualquer jogo
            que aparece na frente. Você sabe que esse ciclo destrói sua banca, mas continua repetindo.
          </p>

          <Terminal
            lines={[
              "$ initialize_analysis.exe",
              "> System ready...",
              "> Aguardando input...",
              "> Análise de valor ativada",
            ]}
            className="max-w-2xl mx-auto"
          />

          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="oracle"
              size="lg"
              className="gap-2"
              onClick={() => {
                const offerSection = document.getElementById('offer');
                offerSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Quero Consultar O Oráculo Agora
            </Button>
            <DemoDialog />
          </div>

          <div className="pt-8">
            <SocialProofBadges />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
