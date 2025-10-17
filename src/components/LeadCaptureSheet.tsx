import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Sparkles, CheckCircle2, Loader2 } from "lucide-react";

const LeadCaptureSheet = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    acceptTerms: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simular envio ao backend
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Aqui você pode adicionar a lógica para enviar os dados para seu backend
    console.log("Lead capturado:", formData);
    setIsLoading(false);
    setSubmitted(true);

    // Resetar após 3 segundos
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        whatsapp: "",
        acceptTerms: false,
      });
    }, 3000);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="oracle" size="lg" className="gap-2">
          <Sparkles className="w-5 h-5" />
          Quero Análise Gratuita
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-md bg-background border-l-2 border-primary/30 overflow-y-auto">
        {!submitted ? (
          <>
            <SheetHeader>
              <SheetTitle className="text-2xl font-bold text-primary neon-glow">
                Receba Análise Gratuita
              </SheetTitle>
              <SheetDescription className="text-muted-foreground">
                Preencha os dados abaixo e ganhe uma análise de valor gratuita do Oráculo para testar o poder da ferramenta.
              </SheetDescription>
            </SheetHeader>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">
                    Nome Completo *
                  </Label>
                  <Input
                    id="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-card border-primary/30 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    E-mail *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-card border-primary/30 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsapp" className="text-foreground">
                    WhatsApp *
                  </Label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    required
                    className="bg-card border-primary/30 focus:border-primary"
                  />
                  <p className="text-xs text-muted-foreground">
                    É neste número que O Oráculo entrará em contato
                  </p>
                </div>
              </div>

              <div className="neon-border bg-card rounded-lg p-4 space-y-3">
                <p className="font-semibold text-foreground text-sm">O que você vai receber:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>1 análise de valor gratuita de uma aposta à sua escolha</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>Demonstração completa das funcionalidades do Oráculo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>Acesso à oferta especial com 20% de desconto</span>
                  </li>
                </ul>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="terms"
                  checked={formData.acceptTerms}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, acceptTerms: checked as boolean })
                  }
                  className="mt-1"
                  required
                />
                <Label
                  htmlFor="terms"
                  className="text-sm text-muted-foreground cursor-pointer leading-relaxed"
                >
                  Aceito receber comunicações do Oráculo e estou ciente da{" "}
                  <span className="text-primary hover:underline">Política de Privacidade</span>
                </Label>
              </div>

              <Button
                type="submit"
                variant="oracle"
                size="lg"
                className="w-full"
                disabled={!formData.acceptTerms || isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Quero Minha Análise Gratuita"
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Seus dados estão seguros. Não compartilhamos com terceiros.
              </p>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full space-y-6 text-center px-6">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-primary animate-pulse-glow" />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-primary neon-glow">
                Solicitação Recebida!
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Em breve O Oráculo entrará em contato no seu WhatsApp com sua análise gratuita.
              </p>
              <p className="text-sm text-foreground font-semibold">
                Fique atento às mensagens!
              </p>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default LeadCaptureSheet;
