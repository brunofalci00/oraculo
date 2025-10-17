import { Button } from "@/components/ui/button";
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
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="neon-glow">Suas apostas são guiadas pela</span>
            <br />
            <span className="text-primary neon-glow">emoção</span>
            <span className="neon-glow"> ou pela </span>
            <span className="text-accent neon-glow-purple">matemática?</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
            A resposta define seu lucro.
          </p>

          <div className="pt-8">
            <Button 
              size="xl" 
              variant="oracle"
              onClick={scrollToOffer}
              className="animate-pulse-glow"
            >
              Consultar O Oráculo Agora
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
