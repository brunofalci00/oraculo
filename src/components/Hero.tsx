import { Button } from "@/components/ui/button";
import Terminal from "@/components/Terminal";
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
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
              <span className="text-primary neon-glow">O ORÁCULO</span>
            </h1>
            <div className="w-32 h-1 bg-primary mx-auto neon-glow"></div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-foreground">As casas </span>
            <span className="text-accent neon-glow-red">mentem.</span>
            <br />
            <span className="text-foreground">Nós </span>
            <span className="text-primary neon-glow">expomos.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-primary font-mono max-w-3xl mx-auto">
            Receba <span className="neon-glow">análises matemáticas de odds</span> e descubra se te pagaram o valor justo.
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

          <div className="pt-8">
            <Button 
              size="xl" 
              variant="oracle"
              onClick={scrollToOffer}
              className="animate-pulse-glow text-lg"
            >
              ⚡ FAZER ANÁLISE GRÁTIS AGORA ⚡
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
