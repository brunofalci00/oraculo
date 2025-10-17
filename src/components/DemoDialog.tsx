import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, MessageSquare, BarChart3, Target } from "lucide-react";
import Terminal from "./Terminal";

const DemoDialog = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="oracle-secondary" size="lg" className="gap-2">
          <Play className="w-5 h-5" />
          Ver Demonstração
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background border-2 border-primary/30">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-primary neon-glow">
            Veja O Oráculo em Ação
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-base">
            Conheça as principais funcionalidades e como O Oráculo transforma sua forma de apostar
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="veredito" className="w-full mt-6">
          <TabsList className="grid w-full grid-cols-3 bg-card">
            <TabsTrigger value="veredito" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              <MessageSquare className="w-4 h-4 mr-2" />
              O Veredito
            </TabsTrigger>
            <TabsTrigger value="espelho" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              <BarChart3 className="w-4 h-4 mr-2" />
              Espelho da Verdade
            </TabsTrigger>
            <TabsTrigger value="mapa" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              <Target className="w-4 h-4 mr-2" />
              Mapa do Futuro
            </TabsTrigger>
          </TabsList>

          <TabsContent value="veredito" className="space-y-6 mt-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Análise de Valor Pré-Aposta</h3>
              <p className="text-muted-foreground">
                Envie suas odds para O Oráculo analisar antes de apostar:
              </p>

              <div className="bg-card rounded-lg p-6 space-y-4 border border-primary/20">
                <div className="space-y-3">
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-1">Você:</p>
                    <p className="text-foreground">Flamengo vs Palmeiras - Over 2.5 gols @ 1.85</p>
                  </div>

                  <Terminal
                    lines={[
                      "$ analisando_valor.exe",
                      "> Processando odds...",
                      "> Calculando probabilidade implícita...",
                      "> Comparando com dados históricos...",
                      "",
                      "✓ ANÁLISE CONCLUÍDA",
                      "",
                      "🎯 VEREDITO: VALOR POSITIVO ENCONTRADO",
                      "📊 Odd justa estimada: 1.72",
                      "💰 Edge: +7.5%",
                      "⚠️  Stake sugerido: 2% da banca",
                    ]}
                    className="max-w-full"
                  />
                </div>
              </div>

              <p className="text-sm text-muted-foreground italic">
                * O Oráculo analisa matematicamente se a odd oferecida compensa o risco real do evento
              </p>
            </div>
          </TabsContent>

          <TabsContent value="espelho" className="space-y-6 mt-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Dashboard de Performance</h3>
              <p className="text-muted-foreground">
                Visualize seu desempenho real, sem maquiagem:
              </p>

              <div className="bg-card rounded-lg p-6 border border-primary/20">
                <Terminal
                  lines={[
                    "$ performance_report.exe",
                    "> Gerando relatório...",
                    "",
                    "═══════════════════════════════════",
                    "       SEU DESEMPENHO REAL        ",
                    "═══════════════════════════════════",
                    "",
                    "📈 Total de Apostas: 47",
                    "✅ Apostas Vencedoras: 28 (59.6%)",
                    "❌ Apostas Perdidas: 19 (40.4%)",
                    "",
                    "💰 Banca Inicial: R$ 1.000,00",
                    "💵 Banca Atual: R$ 1.340,00",
                    "📊 Lucro Total: R$ 340,00 (+34%)",
                    "📉 ROI Médio: +7.2%",
                    "",
                    "🎯 Melhor Mercado: Over/Under (ROI +12.3%)",
                    "⚠️  Pior Mercado: Resultado Final (ROI -2.1%)",
                    "",
                    "💡 INSIGHT: Focar em mercados Over/Under",
                  ]}
                  className="max-w-full"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="mapa" className="space-y-6 mt-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">Planejamento de Metas</h3>
              <p className="text-muted-foreground">
                Transforme seus objetivos em planos matemáticos:
              </p>

              <div className="bg-card rounded-lg p-6 space-y-4 border border-primary/20">
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">Você:</p>
                  <p className="text-foreground">Quero chegar em R$ 2.000 em 30 dias. Banca atual: R$ 1.000</p>
                </div>

                <Terminal
                  lines={[
                    "$ calculando_meta.exe",
                    "> Analisando objetivo...",
                    "> Calculando estratégia...",
                    "",
                    "🎯 META DEFINIDA: +R$ 1.000 em 30 dias",
                    "",
                    "═══════════════════════════════════",
                    "      PLANO DE AÇÃO MATEMÁTICO    ",
                    "═══════════════════════════════════",
                    "",
                    "📊 Retorno necessário: +100%",
                    "📅 Prazo: 30 dias",
                    "",
                    "CENÁRIO CONSERVADOR:",
                    "• Apostas/dia: 2-3",
                    "• Odd média: 1.80+",
                    "• Taxa de acerto necessária: 62%",
                    "• Stake: 3% da banca",
                    "",
                    "✓ Meta alcançável seguindo disciplina",
                    "⚠️  ALERTA: Evite stakes >5% para controle",
                  ]}
                  className="max-w-full"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-6 pt-6 border-t border-border">
          <p className="text-center text-muted-foreground mb-4">
            Pronto para ter O Oráculo ao seu lado?
          </p>
          <Button
            variant="oracle"
            size="lg"
            className="w-full"
            onClick={() => {
              setOpen(false);
              const offerSection = document.getElementById('offer');
              offerSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Quero Consultar O Oráculo Agora
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoDialog;
