import { Scale, Eye, Map, Bell, Brain, Shield } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Info } from "lucide-react";

const PowersSection = () => {
  const corePowers = [
    {
      icon: Scale,
      title: "O Veredito",
      subtitle: "Análise Pré-Aposta",
      description: "Antes de fazer uma entrada, você a submete ao Oráculo. Ele analisa as odds, cruza com milhares de dados e te dá o veredito: \"Valor Positivo Encontrado\" ou \"As odds não compensam o risco\".",
      hoverInfo: "Utiliza algoritmos matemáticos para calcular a probabilidade implícita das odds e compará-las com dados históricos de desempenho.",
    },
    {
      icon: Eye,
      title: "O Espelho da Verdade",
      subtitle: "Gestão de Banca",
      description: "Toda entrada confirmada é registrada. A qualquer momento, com um simples comando, O Oráculo te mostra seu desempenho real: lucro/prejuízo, ROI e taxa de acerto. Sem maquiagem. Apenas os fatos.",
      hoverInfo: "Dashboard completo com métricas de performance, análise por mercado, evolução da banca e muito mais.",
    },
  ];

  const advancedPowers = [
    {
      icon: Map,
      title: "O Mapa do Futuro",
      subtitle: "Estrategista de Metas",
      description: "Quebrou parte da banca? O Oráculo calcula o caminho matemático para a recuperação. Quer bater uma meta? Ele projeta o número de entradas e as odds necessárias. Ele transforma seu desejo em um plano.",
      hoverInfo: "Planejamento baseado em simulações de Monte Carlo para definir estratégias realistas de crescimento.",
    },
    {
      icon: Bell,
      title: "O Vigia Silencioso",
      subtitle: "Proatividade",
      description: "O Oráculo não dorme. Ele monitora o mercado e seu comportamento, enviando alertas proativos sobre oportunidades de valor que ele encontrou ou sobre padrões emocionais perigosos que você está cometendo.",
      hoverInfo: "Sistema de alertas inteligente que identifica padrões de comportamento emocional e oportunidades de mercado.",
    },
  ];

  const bonusPowers = [
    {
      icon: Brain,
      title: "Análise de Padrões",
      subtitle: "Machine Learning",
      description: "O Oráculo aprende com suas apostas anteriores, identificando quais mercados e tipos de análise funcionam melhor para o seu perfil específico.",
      hoverInfo: "Algoritmo de aprendizado contínuo que personaliza recomendações baseadas no seu histórico.",
    },
    {
      icon: Shield,
      title: "Proteção Anti-Tilt",
      subtitle: "Controle Emocional",
      description: "Sistema de detecção de comportamento de risco que te impede de fazer apostas emocionais após perdas ou ganhos consecutivos.",
      hoverInfo: "Bloqueio automático temporário quando padrões emocionais perigosos são detectados.",
    },
  ];

  const PowerCard = ({ power }: { power: typeof corePowers[0] }) => (
    <div className="neon-border bg-card rounded-xl p-8 space-y-6 transition-all duration-300 hover:scale-105 h-full">
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-primary/20">
          <power.icon className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-2xl font-bold text-primary neon-glow font-mono">
              {power.title}
            </h3>
            <HoverCard>
              <HoverCardTrigger asChild>
                <button className="text-muted-foreground hover:text-primary transition-colors">
                  <Info className="w-4 h-4" />
                </button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 bg-card border-primary/30">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-primary">Como funciona?</h4>
                  <p className="text-sm text-muted-foreground">{power.hoverInfo}</p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
          <p className="text-sm text-muted-foreground uppercase tracking-wider font-mono">
            {power.subtitle}
          </p>
        </div>
      </div>
      <p className="text-foreground leading-relaxed">{power.description}</p>
    </div>
  );

  return (
    <section className="py-12 md:py-16 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Como O Oráculo te transforma em um{" "}
            <span className="text-primary neon-glow">operador estratégico</span>
          </h2>
        </div>

        <Tabs defaultValue="core" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-card mb-12 h-auto">
            <TabsTrigger
              value="core"
              className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary py-3 text-sm md:text-base"
            >
              Principais
            </TabsTrigger>
            <TabsTrigger
              value="advanced"
              className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary py-3 text-sm md:text-base"
            >
              Avançados
            </TabsTrigger>
            <TabsTrigger
              value="bonus"
              className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary py-3 text-sm md:text-base"
            >
              Bônus
            </TabsTrigger>
          </TabsList>

          <TabsContent value="core" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {corePowers.map((power, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                  <PowerCard power={power} />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="advanced" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {advancedPowers.map((power, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                  <PowerCard power={power} />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="bonus" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {bonusPowers.map((power, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                  <PowerCard power={power} />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PowersSection;
